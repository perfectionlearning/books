var app = angular.module('bd');

app.controller('BookDefinition', ($scope, BookDefinition, FppData, helpers) => {
    var promises = [];

    promises.push(FppData.login().then(FppData.getCourseAssignments).then(FppData.getSyncIDs))

    promises.push(BookDefinition.get());

    Promise.all(promises).then((res) => {
        var fpp = res[0];
        var bd = res[1];
        
        helpers.fillInInstanceIds(bd, fpp).then(helpers.formatInstanceData).then((res) => {
        });

        var vlPromises = [];
        bd.forEach((chapter) => {
            if (chapter.vlData.length > 0) {
                let vlPromises = helpers.checkLabAssignments(chapter.vlData);
                Promise.all(vlPromises).then((res) => {
console.log('vlData, checkLabAssignments', res);
                });
            }
        });

    });

/*
    BookDefinition.get().then((data) => {
        $scope.chapters = data;
        $scope.sessionData = BookDefinition.getSessionData();
    });
*/
    $scope.message = "BookDefinition.json Diagnostic";

    $scope.isEmpty = function(ch) {
        return Object.keys(ch).length === 0;
    };

});

