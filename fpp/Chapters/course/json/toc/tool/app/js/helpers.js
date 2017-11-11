angular.module('bd')

.factory('helpers', function(api) {

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
        var courseIDs = Object.keys(courses);
        courseIDs.forEach((courseID) => {
            var course = courses[courseID];
            var keys = Object.keys(course);
            keys.forEach((key) => {
                var assignment = course[key];
                if (filterTypes.indexOf(assignment.type) !== -1) {
                    syncIDs[assignment.syncID] = {
                        course_id: courseID,
                        assignment_id: assignment.id,
                        type: assignment.type,
                        sync_id: assignment.syncID
                    };
                }
            });
        });
        return syncIDs;
    }

    function compareBD(chapters, syncIDs) {
        chapters.forEach((chapter) => {
            var fl_qb_sync_id = chapter.fl_qb_sync_id;
            var fl_sync_id = chapter.fl_sync_id;
            var qb_sync_id = chapter.qb_sync_id;
            var ngss_qb_sync_id = chapter.ngss_qb_sync_id;
            var ngss_sync_id = chapter.ngss_sync_id;
            console.log('fl qb chapter', chapter.title, chapter.sync_id, syncIDs[fl_qb_sync_id]);
            console.log('fl sync chapter', chapter.title, chapter.sync_id, syncIDs[fl_sync_id]);
            console.log('qb sync chapter', chapter.title, chapter.sync_id, syncIDs[qb_sync_id]);
            console.log('ngss qb sync chapter', chapter.title, chapter.sync_id, syncIDs[ngss_qb_sync_id]);
            console.log('ngss sync chapter', chapter.title, chapter.sync_id, syncIDs[ngss_sync_id]);
        });
    }

    return {
        getCourseAssignments: getCourseAssignments,
        getSyncIDs: getSyncIDs,
        compareBD: compareBD
    };
});
