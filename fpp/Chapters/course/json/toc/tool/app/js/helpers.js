angular.module('bd')

.factory('helpers', function(api) {

    var assigns = {};
    var productsByBookId = {};
    var allProblemInstIds = { fl: [], ngss: [], natl: [] };

    function setLoginData(res) {
        // Get products from bootstrap data, and key by book_id.
console.log('setLoginData', res);
        try {
            var bootstrap = res.data.bootstrap.$$state.value;
            bootstrap.UIConfig.products.forEach((product) => { productsByBookId[product.id] = product; });
        } catch(e) {
        }

        // Get session_data
        try {
            var session_data = res.data.session_info.$$state.value;
            session_data.status = 'success';
        } catch(e) {
            session_data = {
                status: "this is not the session_info data you're looking for."
            };
        }
        var loginData = {
		    user_id: session_data.user_id,
		    book_id: session_data.book_id,
		    course_id: session_data.course_id,
		    usertype: session_data.usertype,
		    is_demo: session_data.is_demo
        };
		
        return loginData;
    }

    // For each course, the course must be selected and the assignments retrieved.
    // This must be done synchronously: that is, the assignments for a course must
    // be retrieved (separate call) before another course is selected.
    function getCourses(courses, courseAssignments, resolve) {
        if (courses.length > 0) {
            var course = courses.shift();
            api.selectCourse(course.id).then((res) => {
                api.assigns().then((res) => {
                    courseAssignments[course.id] = res;
                    getCourses(courses, courseAssignments, resolve);
                });
            });
        } else {
            return resolve({ data: courseAssignments });
        }
    }

    /*
     * Result of this is a hash of course IDs and an array of assignments in each course.
     * Eash assignment is a hash containing, among other things:
     *     id (assignment ID)
     *     name (assignment name)
     *     type ("homework", "quickcheck", "quizboard", &c.
     *     due (due date)
     *     pastdue (flag indicating whether assignment is past due)
     *     syncID (sync ID)
     */
    function getCourseAssignments() {
        return api.courses().then((res) => {
            var courseAssignments = {};
            var courses = res.filter((item) => { return item.product === 'fpp'; });
            let permCourses = res.filter((item) => { return item.product === 'fpp'; });
            permCourses.map((item) => { item.book = productsByBookId[item.book_id].book; return item; });
            var result = new Promise((resolve, reject) => {
                getCourses(courses, courseAssignments, resolve);
            });
            return result.then((res) => {
                var data = res.data;
                return {
                    courseData: permCourses,
                    assignData: data
                };
            });
        });
    }

    var filterTypes = ['virtual lab', 'quickcheck', 'quizboard'];
    function getSyncIDs(data) {
        var syncIDs = {};
        var assignIDs = {};
        var courseIDs = Object.keys(data.assignData);
        courseIDs.forEach((courseID) => {
            var courseData = data.courseData.filter((item) => { return item.id === courseID; })[0];
            var assignments = data.assignData[courseID];
            assignments.forEach((assignment) => {
	            if (filterTypes.indexOf(assignment.type) === -1) return;
                let assignmentObj = {
                    course_id: courseID,
                    book_id: courseData.book_id,
                    book: courseData.book,
                    assignment_id: assignment.id,
                    name: assignment.name,
                    type: assignment.type,
                    due: assignment.due,
                    pastdue: assignment.pastdue,
                    sync_id: assignment.syncID
                };
                syncIDs[assignment.syncID] = assignmentObj;
                assignIDs[assignment.id] = assignmentObj;
            });
        });

        return { syncIDs: syncIDs, assignIDs: assignIDs };
    }


    /*
     * chapters: from BookDefinition file.
     * syncIDs: hash of assignment data from db, keyed by assignment syncID.
     */
	function fillInInstanceIds(chapters, syncIDs) {
        var promises = [];
        chapters.forEach((chapter) => {
            var fl = {
                quickcheck: chapter.fl_sync_id,
                quizboard: chapter.fl_qb_sync_id
            };
            var ngss = {
                quickcheck: chapter.ngss_sync_id,
                quizboard: chapter.ngss_qb_sync_id
            };
            var natl = {
                quickcheck: chapter.sync_id,
                quizboard: chapter.qb_sync_id
            };

            if (fl.quickcheck && syncIDs[fl.quickcheck]) {
                //console.log('Florida quickcheck', syncIDs[fl.quickcheck]);
                let assignId = syncIDs[fl.quickcheck].assignment_id;
                promises.push(api.getQuickchecks(assignId).then((data) => {
                    //console.log('Florida fillInInstanceIDs, getQuickchecks', data);
                    assigns[assignId] = Object.keys(data);
                    allProblemInstIds.fl = allProblemInstIds.fl.concat(Object.keys(data));
                    return data;
                }));
            }
            if (ngss.quickcheck && syncIDs[ngss.quickcheck]) {
                //console.log('NGSS quickcheck', syncIDs[ngss.quickcheck]);
                let assignId = syncIDs[ngss.quickcheck].assignment_id;
                promises.push(api.getQuickchecks(assignId).then((data) => {
                    //console.log('NGSS fillInInstanceIDs, getQuickchecks', data);
                    assigns[assignId] = Object.keys(data);
                    allProblemInstIds.ngss = allProblemInstIds.ngss.concat(Object.keys(data));
                    return data;
                }));
            }
            if (natl.quickcheck && syncIDs[natl.quickcheck]) {
                //console.log('National quickcheck', syncIDs[natl.quickcheck]);
                let assignId = syncIDs[natl.quickcheck].assignment_id;
                promises.push(api.getQuickchecks(assignId).then((data) => {
                    //console.log('Natl fillInInstanceIDs, getQuickchecks', data);
                    assigns[assignId] = Object.keys(data);
                    allProblemInstIds.natl = allProblemInstIds.natl.concat(Object.keys(data));
                    return data;
                }));
            }
        });
        return Promise.all(promises);
    }


	function getProblemInstIds(chapters, syncIDs) {
        var bdChapters = [];
        chapters.forEach((chapter) => {
            try {
                var units = chapter.unit;
                var problemInstIds = { fl: {}, ngss: {}, natl: {}};
                units.forEach((unit) => {
                    unit.section.forEach((section) => {
                        var quickchecks = section.subsection.filter((sub) => { return sub.type === 'quizcheck';  });
                        quickchecks.forEach((quickcheck) => {
                            var fl_quickcheck_id = chapter.fl_sync_id;
                            var ngss_quickcheck_id = chapter.ngss_sync_id;
                            var natl_quickcheck_id = chapter.sync_id;
                            problemInstIds.fl[quickcheck.fl_problem_inst_id] = allProblemInstIds.fl.indexOf(quickcheck.fl_problem_inst_id) !== -1 ? syncIDs[fl_quickcheck_id] : 'not found';
                            problemInstIds.ngss[quickcheck.ngss_problem_inst_id] = allProblemInstIds.ngss.indexOf(quickcheck.ngss_problem_inst_id) !== -1 ? syncIDs[ngss_quickcheck_id] : 'not found';
                            problemInstIds.natl[quickcheck.problem_inst_id] = allProblemInstIds.natl.indexOf(quickcheck.problem_inst_id) !== -1 ? syncIDs[natl_quickcheck_id] : 'not found';
                        });
                    });
                });
                bdChapterObj = { 
                    title: chapter.title, 
                    flQuickcheckId: chapter.fl_sync_id, 
                    ngssQuickcheckId: chapter.ngss_sync_id, 
                    natlQuickcheckId: chapter.sync_id, 
                    problemInstIds: problemInstIds 
                };
                flInstIds = [...new Set(Object.values(problemInstIds.fl))];
                ngssInstIds = [...new Set(Object.values(problemInstIds.ngss))];
                natlInstIds = [...new Set(Object.values(problemInstIds.natl))];
                if (flInstIds.length === 1 && flInstIds[0] === 'not found') {
                    bdChapterObj.flQuickcheckId = { id: chapter.fl_sync_id, bad: true };
                }
                if (ngssInstIds.length === 1 && ngssInstIds[0] === 'not found') {
                    bdChapterObj.ngssQuickcheckId = { id: chapter.ngss_sync_id, bad: true };
                }
                if (natlInstIds.length === 1 && natlInstIds[0] === 'not found') {
                    bdChapterObj.natlQuickcheckId = { id: chapter.sync_id, bad: true };
                }
                bdChapters.push(bdChapterObj);
            } catch(e) {
            }
        });

        return bdChapters;
    }

    return {
        setLoginData: setLoginData,
        getCourseAssignments: getCourseAssignments,
        getSyncIDs: getSyncIDs,
        fillInInstanceIds: fillInInstanceIds,
        getProblemInstIds: getProblemInstIds
    };
});
