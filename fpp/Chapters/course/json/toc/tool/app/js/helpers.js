angular.module('bd')

.factory('helpers', function(api) {

    var assigns = {};

    function setLoginData(res) {
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

    function getCourseAssignments() {
        return api.courses().then((res) => {
            var courseAssignments = {};
            var courses = res.filter((item) => { return item.product === 'fpp'; });
            var result = new Promise((resolve, reject) => {
                getCourses(courses, courseAssignments, resolve);
            });
            return result.then((data) => {
                return data;
            });
        });
    }

    var filterTypes = ['virtual lab', 'quickcheck', 'quizboard'];
    function getSyncIDs(courses) {
        var syncIDs = {};
        var assignIDs = {};
        var courseIDs = Object.keys(courses);
        courseIDs.forEach((courseID) => {
            var course = courses[courseID];
            var keys = Object.keys(course);
            keys.forEach((key) => {
                var assignment = course[key];
                if (filterTypes.indexOf(assignment.type) !== -1) {
                    let assignmentObj = {
                        course_id: courseID,
                        assignment_id: assignment.id,
                        type: assignment.type,
                        sync_id: assignment.syncID
                    };
                    syncIDs[assignment.syncID] = assignmentObj;
                    assignIDs[assignment.id] = assignmentObj;
                }
            });
        });

        return { syncIDs: syncIDs, assignIDs: assignIDs };
    }


	function fillInInstanceIds(chapters, syncIDs) {
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
                api.getQuickchecks(assignId).then((data) => {
                    //console.log('Florida fillInInstanceIDs, getQuickchecks', data);
                    assigns[assignId] = Object.keys(data);
                });                
            }
            if (ngss.quickcheck && syncIDs[ngss.quickcheck]) {
                //console.log('NGSS quickcheck', syncIDs[ngss.quickcheck]);
                let assignId = syncIDs[ngss.quickcheck].assignment_id;
                api.getQuickchecks(assignId).then((data) => {
                    //console.log('NGSS fillInInstanceIDs, getQuickchecks', data);
                    assigns[assignId] = Object.keys(data);
                });                
            }
            if (natl.quickcheck && syncIDs[natl.quickcheck]) {
                //console.log('National quickcheck', syncIDs[natl.quickcheck]);
                let assignId = syncIDs[natl.quickcheck].assignment_id;
                api.getQuickchecks(assignId).then((data) => {
                    //console.log('Natl fillInInstanceIDs, getQuickchecks', data);
                    assigns[assignId] = Object.keys(data);
                });                
            }
        });
        
    }


	function getProblemInstIds(chapters, syncIDs) {
        var problemInstIds = {};
        chapters.forEach((chapter) => {
            try {
                problemInstIds[chapter.title] = [];
                var units = chapter.unit;
                units.forEach((unit) => {
                    unit.section.forEach((section) => {
                        var quickchecks = section.subsection.filter((sub) => { return sub.type === 'quizcheck';  });
                        quickchecks.forEach((quickcheck) => {
                            var fl_quickcheck_id = chapter.fl_sync_id;
                            var ngss_quickcheck_id = chapter.ngss_sync_id;
                            var natl_quickcheck_id = chapter.sync_id;
                            problemInstIds[quickcheck.fl_problem_inst_id] = syncIDs[fl_quickcheck_id];
                            problemInstIds[quickcheck.ngss_problem_inst_id] = syncIDs[ngss_quickcheck_id];
                            problemInstIds[quickcheck.problem_inst_id] = syncIDs[natl_quickcheck_id];
                        });
                    });
                });
            } catch(e) {
            }
        });

        return problemInstIds;
    }

    return {
        setLoginData: setLoginData,
        getCourseAssignments: getCourseAssignments,
        getSyncIDs: getSyncIDs,
        fillInInstanceIds: fillInInstanceIds,
        getProblemInstIds: getProblemInstIds
    };
});
