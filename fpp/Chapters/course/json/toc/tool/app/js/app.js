var app = angular.module('bd', []);

app.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    $httpProvider.defaults.withCredentials = true;
});

app.service('api', function($http) {
    var rest = {
        login: 'https://test.kineticmath.com/rest/users/login',
        session_info: 'https://test-ohw.kineticmath.com/rest/endpoint.php/sessioninfo',
        wrapping: 'https://test-ohw.kineticmath.com/rest/endpoint.php/output/wrapping/set',
        courses: 'https://test-ohw.kineticmath.com/rest/rest.php/courses',
        course_select: 'https://test-ohw.kineticmath.com/rest/rest.php/courses/select/',
        assigns: 'https://test-ohw.kineticmath.com/rest/rest.php/assigns',
        quickchecks: 'https://test-ohw.kineticmath.com/rest/rest.php/quickcheck/'
    };


    var creds = {
        email: 'doombot6@mailinator.com',
        pw: 'Dddddd1'
    };

    function getSessionInfo() {
        return $http.get(rest.session_info, "json").then(function (res) {
            return res.data;
        });
    }

    /*
     * Call to log in.
     */
    this.login = function() {
        var payload = {
            email: creds.email,
            pw: creds.pw,
            wrap_output: true
        };
        return $http.post(rest.login, payload).then((res) => {
            res.data.session_info = getSessionInfo();
            return $http.put(rest.wrapping, { wrap_output: false }).then(() => {
                return res;
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

    this.assigns = function() {
        return $http.get(rest.assigns).then((res) => {
            var data = res.hasOwnProperty('data') ? res.data : res;
            return data;
        });
    };

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
