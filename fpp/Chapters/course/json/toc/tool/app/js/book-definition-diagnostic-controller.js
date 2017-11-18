var app = angular.module('bd');

app.controller('BookDefinition', ($scope, BookDefinition, FppData, helpers) => {
    var promises = [];
    var chapters, labs;

    function storeCourses(data) {
        $scope.courses = data.courseData;
        return data;
    }

    function updateScope(data) {
        $scope.chapters = data.shift();
        $scope.labs = data;
        $scope.$apply();
    }

    function performDiagnostics(res) {
        var fpp = res[0];
        var bd = res[1];
        var promises = [];
        // Check for issues with chapter and problem instances.
        promises.push(helpers.fillInInstanceIds(bd, fpp).then(helpers.formatInstanceData));

        // Look at labs.
        bd.forEach((chapter) => {
            if (chapter.vlData.length > 0) {
                promises = promises.concat(helpers.checkLabAssignments(chapter.vlData));
            }
        });

        return Promise.all(promises);
    }

    promises.push(FppData.login().then(FppData.getCourseAssignments).then(storeCourses).then(FppData.getSyncIDs))
    promises.push(BookDefinition.get());
    Promise.all(promises).then(performDiagnostics).then(updateScope);


    $scope.labCorrect = function(lab) {
        return lab.id > '' && lab.syncId === lab.bdSyncId;
    }

    $scope.qcCorrect = function(chapter, courseId) {
        return chapter.chapterData[courseId] && chapter.chapterData[courseId].assignId && chapter.chapterData[courseId].unknownProbInstIds.length === 0;
    }
});

