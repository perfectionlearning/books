var app = angular.module('bd');

app.service('FppData', function(api) {
    var productsByBookId = {};

    // Possibly should be in helpers.js. Once we're logged in, we want to get certain data
    // to enhance diagnostic information.
    function setLoginData(res) {
        // Get products from bootstrap data, and key by book_id.
        try {
            //var bootstrap = res.data.bootstrap.$$state.value;
            var bootstrap = res.data.bootstrap;
            bootstrap.UIConfig.products.forEach((product) => { 
                productsByBookId[product.id] = product; 
            });
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
     * Login is required for retrieving FPP data.
     */
    this.login = function() {
        return api.login().then(setLoginData);
    };


    /*
     * Compile sync ID table from fpp assignment data.
     */
    var filterTypes = ['virtual lab', 'quickcheck', 'quizboard'];
    this.getSyncIDs = function(data) {
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
            });
        });

        return syncIDs;
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
    this.getCourseAssignments = function() {
        return api.courses().then((res) => {
            var courseAssignments = {};
            var courses = res.filter((item) => { return item.product === 'fpp'; });
            let permCourses = res.filter((item) => { return item.product === 'fpp'; });
            permCourses.map((item) => { 
                if (item) {
                    item.book = productsByBookId[item.book_id].book; 
                } 
                return item; 
            });
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

});
