var app = angular.module('bd');

app.controller('BookDefinition', ($scope, BookDefinition, FppData, helpers) => {
    var promises = [];

    function storeCourses(data) {
console.log('storeCourses', data);
        $scope.courses = data.courseData;
        return data;
    }

    promises.push(FppData.login().then(FppData.getCourseAssignments).then(storeCourses).then(FppData.getSyncIDs))

    promises.push(BookDefinition.get());

    Promise.all(promises).then((res) => {
        var fpp = res[0];
        var bd = res[1];
        
        helpers.fillInInstanceIds(bd, fpp).then(helpers.formatInstanceData).then((res) => {
console.log('formatInstanceData', res);
            $scope.chapters = res;
        });

        var vlPromises = [];
        bd.forEach((chapter) => {
            if (chapter.vlData.length > 0) {
                let vlPromises = helpers.checkLabAssignments(chapter.vlData);
                Promise.all(vlPromises).then((res) => {
console.log('vlData, checkLabAssignments', res);
                    $scope.labs = res;
                });
            }
        });

    });

    $scope.message = "BookDefinition.json Diagnostic";

    $scope.isEmpty = function(ch) {
        return Object.keys(ch).length === 0;
    };

});

