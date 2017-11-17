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


    function formatQcData(data, chapter, syncIdObj) {
        data.assignData = {
            title: chapter.title,
            courseId: syncIdObj.course_id,
            bookId: syncIdObj.book_id,
            book: syncIdObj.book,
            assignmentId: syncIdObj.assignment_id
        };
        return data;
    }

    /*
     * chapters: from BookDefinition file.
     * syncIDs: hash of assignment data from db, keyed by assignment syncID.
     */
	function fillInInstanceIds(chapters, syncIDs) {
        var promises = [];
        chapters.forEach((chapter) => {
            var flSyncId = chapter.qcSyncIds.fl;
            var ngssSyncId = chapter.qcSyncIds.ngss;
            var natlSyncId = chapter.qcSyncIds.natl;

            if (flSyncId && syncIDs[flSyncId]) {
                let assignId = syncIDs[flSyncId].assignment_id;
                promises.push(api.getQuickchecks(assignId).then((data) => {
                    var qcData = formatQcData(data, chapter, syncIDs[flSyncId]);
                    assigns[assignId] = Object.keys(data);
                    allProblemInstIds.fl = allProblemInstIds.fl.concat(Object.keys(data));
                    return qcData;
                }));
            } else {
                console.log('fillInInstanceIds; not filled in flSyncId', flSyncId);
            }
           
            if (ngssSyncId && syncIDs[ngssSyncId]) {
                let assignId = syncIDs[ngssSyncId].assignment_id;
                promises.push(api.getQuickchecks(assignId).then((data) => {
                    var qcData = formatQcData(data, chapter, syncIDs[ngssSyncId]);
                    assigns[assignId] = Object.keys(data);
                    allProblemInstIds.ngss = allProblemInstIds.ngss.concat(Object.keys(data));
                    return qcData;
                }));
            }
            if (natlSyncId && syncIDs[natlSyncId]) {
                let assignId = syncIDs[natlSyncId].assignment_id;
                promises.push(api.getQuickchecks(assignId).then((data) => {
                    var qcData = formatQcData(data, chapter, syncIDs[natlSyncId]);
                    assigns[assignId] = Object.keys(data);
                    allProblemInstIds.natl = allProblemInstIds.natl.concat(Object.keys(data));
                    return qcData;
                }));
            }
        });

        return Promise.all(promises);
    }


    function formatInstanceData(data) {
        var chapters = [];
        var chNdx = 0;
        var lastTitle = data[0].assignData.title;;
        var courseData = {};
        data.forEach((item) => {
            var probInstIds = Object.keys(item);
            probInstIds = probInstIds.filter((id) => { return !isNaN(parseInt(id, 10)); });
            var ch = {
                title: item.assignData.title,
                courseId: item.assignData.courseId,
                bookId: item.assignData.bookId,
                book: item.assignData.book,
                assignId: item.assignData.assignmentId,
                probInstIds: probInstIds
            };
            if (chNdx === 0) {
               let chObj = { title: item.assignData.title, chapterData: {} };
               chObj.chapterData[item.assignData.courseId] = ch;
               chapters[chNdx++] = chObj;
            } else {
               if (item.assignData.title === chapters[chNdx-1].title) {
                   chapters[chNdx-1].chapterData[item.assignData.courseId] = ch;
               } else {
                   let chObj = { title: item.assignData.title, chapterData: {} };
                   chObj.chapterData[item.assignData.courseId] = ch;
                   chapters[chNdx++] = chObj;
               }
            }
        });
        return chapters;
    }

    function checkLabAssignments(labmenu) {
        var promises = [];
        labmenu.forEach((lab) => {
            if (lab.assignId) {
                lab.assignId = lab.assignId.replace(/\s/g, '');
                promises.push(api.lab(lab.assignId).then((res) => { 
                    return {
                        id: res.id,
                        syncId: res.syncID,
                        name: res.name,
                        due: res.due,
                        courseId: res.courseID,
                        product: res.productID
                    };
                }));
            }
        });

        return promises;
    }

	function getProblemInstIds(chapters, syncIDs) {
        var bdChapters = [];
        chapters.forEach((chapter) => {
            try {
                var units = chapter.unit;
                var problemInstIds = { fl: {}, ngss: {}, natl: {}};
                var virtualLabData = {};
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

                        var labmenu = section.subsection.filter((sub) => { return sub.type === 'labmenu'; });
                        Promise.all(checkLabAssignments(labmenu)).then((res) => {
                            virtualLabData = res;
                        });
                    });
                });
                bdChapterObj = { 
                    title: chapter.title, 
                    flQuickcheckId: chapter.fl_sync_id, 
                    ngssQuickcheckId: chapter.ngss_sync_id, 
                    natlQuickcheckId: chapter.sync_id, 
                    problemInstIds: problemInstIds,
                    virtualLabData: virtualLabData
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
        formatInstanceData: formatInstanceData,
        getProblemInstIds: getProblemInstIds,
        checkLabAssignments: checkLabAssignments
    };
});
