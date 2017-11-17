angular.module('bd')

.factory('helpers', function(api) {

    function formatQcData(data, chapter, syncId, syncIdObjs, probInstIds) {
        var syncIdObj = syncIdObjs[syncId];
        data.assignData = {
            title: chapter.title,
            syncId: syncId,
            courseId: syncIdObj.course_id,
            bookId: syncIdObj.book_id,
            book: syncIdObj.book,
            assignmentId: syncIdObj.assignment_id
        };
        data.bookDefinitionProbInstIds = probInstIds;
        return data;
    }

    /*
     * chapters: from BookDefinition file.
     * syncIDs: hash of assignment data from db, keyed by assignment syncID.
     */
	function fillInInstanceIds(chapters, syncIDs) {
console.log('fillInInstanceIds', chapters);
        var promises = [];
        chapters.forEach((chapter) => {
            var flSyncId = chapter.qcSyncIds.fl;
            var ngssSyncId = chapter.qcSyncIds.ngss;
            var natlSyncId = chapter.qcSyncIds.natl;

            if (flSyncId && syncIDs[flSyncId]) {
                let assignId = syncIDs[flSyncId].assignment_id;
                promises.push(api.getQuickchecks(assignId).then((data) => {
                    var probInstIds = chapter.probInstIds.map((item) => { return item.fl; });
                    var qcData = formatQcData(data, chapter, flSyncId, syncIDs, probInstIds);
                    return qcData;
                }));
            }
           
            if (ngssSyncId && syncIDs[ngssSyncId]) {
                let assignId = syncIDs[ngssSyncId].assignment_id;
                promises.push(api.getQuickchecks(assignId).then((data) => {
                    var probInstIds = chapter.probInstIds.map((item) => { return item.ngss; });
                    var qcData = formatQcData(data, chapter, ngssSyncId, syncIDs, probInstIds);
                    return qcData;
                }));
            }

            if (natlSyncId && syncIDs[natlSyncId]) {
                let assignId = syncIDs[natlSyncId].assignment_id;
                promises.push(api.getQuickchecks(assignId).then((data) => {
                    var probInstIds = chapter.probInstIds.map((item) => { return item.natl; });
                    var qcData = formatQcData(data, chapter, natlSyncId, syncIDs, probInstIds);
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
            var unknownIds = item.bookDefinitionProbInstIds.filter((id) => { return probInstIds.indexOf(id) === -1; });
            var ch = {
                title: item.assignData.title,
                syncId: item.assignData.syncId,
                courseId: item.assignData.courseId,
                bookId: item.assignData.bookId,
                book: item.assignData.book,
                assignId: item.assignData.assignmentId,
                probInstIds: probInstIds,
                bookDefProbInstIds: item.bookDefinitionProbInstIds,
                unknownProbInstIds: unknownIds
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
        fillInInstanceIds: fillInInstanceIds,
        formatInstanceData: formatInstanceData,
        getProblemInstIds: getProblemInstIds,
        checkLabAssignments: checkLabAssignments
    };
});
