var app = angular.module('bd');

app.service('api', function($http) {
    var rest = {
        login: 'https://test.kineticmath.com/rest/users/login',
        session_info: 'https://test-ohw.kineticmath.com/rest/endpoint.php/sessioninfo',
        wrapping: 'https://test-ohw.kineticmath.com/rest/endpoint.php/output/wrapping/set',
        courses: 'https://test-ohw.kineticmath.com/rest/rest.php/courses',
        course_select: 'https://test-ohw.kineticmath.com/rest/rest.php/courses/select/',
        bootstrap: 'https://test-ohw.kineticmath.com/rest/endpoint.php/bootstrap',
        assigns: 'https://test-ohw.kineticmath.com/rest/rest.php/assigns',
        lab: 'https://test-ohw.kineticmath.com/rest/rest.php/assign/',
        quickchecks: 'https://test-ohw.kineticmath.com/rest/rest.php/quickcheck/'
    };


    var creds = {
        fl: {
            email: 'doombot6@mailinator.com',
            pw: 'Dddddd1'
        },
        ngss: {
            email: 'doombot1@mailinator.com',
            pw: 'Dddddd1'
        }
    };

    function getSessionInfo() {
        return $http.get(rest.session_info, "json").then(function (res) {
            return res.data;
        });
    }

    function getBootstrap() {
        return $http.get(rest.bootstrap).then((res) => {
            var data = res.hasOwnProperty('data') ? res.data : res;
            return data;
        });
    }

    /*
     * Call to log in.
     */
    this.login = function() {
        var payload = {
            email: creds.fl.email,
            pw: creds.fl.pw,
            wrap_output: true
        };
        return $http.post(rest.login, payload).then((res) => {
            var promises = [];
            promises.push(getSessionInfo());
            promises.push(getBootstrap());
            return $http.put(rest.wrapping, { wrap_output: false }).then(() => {
                var loginPayload = res;
                return Promise.all(promises).then((res) => {
                    loginPayload.data.session_info = res[0];
                    loginPayload.data.bootstrap = res[1];
console.log('loginPayload', loginPayload);
                    return loginPayload;
                });
            }, (res) => { console.log('login error', res); });
        });
    };

    /*
     * Get courses for user.
     */
    this.courses = function() {
        return $http.get(rest.courses).then((res) => {
            var data = res.hasOwnProperty('data') ? res.data : res;
            return data;
        });
    };

    this.selectCourse = function(courseId) {
        var payload = {
            id: courseId
        };
        return $http.put(rest.course_select + courseId, payload).then((res) => {
            return res;
        });
    };

    /*
     * Get assignment data for selected course
     */
    this.assigns = function() {
        return $http.get(rest.assigns).then((res) => {
            var data = res.hasOwnProperty('data') ? res.data : res;
            return data;
        });
    };

    /*
     * Get labs for assignment ID
     */
    this.lab = function(assignId) {
        return $http.get(rest.lab + assignId + '/defn').then((res) => {
            var data = res.hasOwnProperty('data') ? res.data : res;
            return data;
        }, (res) => { console.log('Invalid lab assignment', assignId); return {}; });
    }

    /*
     * Get quickchecks by assignment ID.
     */
    this.getQuickchecks = function(assign_id) {
        return $http.get(rest.quickchecks + assign_id).then((res) => {
            var data = res.hasOwnProperty('data') ? res.data : res;
            data.assign_id = assign_id;
            return data;
        });
    }
});
