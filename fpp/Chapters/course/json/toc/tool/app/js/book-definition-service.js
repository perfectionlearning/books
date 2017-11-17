var app = angular.module('bd');

    app.service('BookDefinition', function($http, api, helpers) {
        var _sessionData;
        var _courses;

        this.getSessionData = function() {
            _sessionData.courseList = _courses;
            return _sessionData;
        };

        this.login = function() {
            return api.login().then(helpers.setLoginData);
        };

        // This one will probably be retired.
/*
        this.get = function() {
            return api.login().then(helpers.setLoginData).then(loggedIn);
        }
*/

        function loggedIn(data) {
            _sessionData = data;
            return getBd().then(getChapters);
        }

        this.get = function() {
        	return $http.get('../BookDefinition.json', { cache: false }).then((res) => {
                return parseBookDefinition(res.data.chapters);
			}, (res) => { console.log('did not want to get here.'); });
        };

        function getBd() {
        	return $http.get('../BD2.json', { cache: false }).then((res) => {
console.log('parseBookDefinition', parseBookDefinition(res.data.chapters));
				return res.data;
			}, (res) => { console.log('did not want to get here.'); });
        };

        function getCourses(data) {
console.log('getCourses', data);
            _courses = data.courseData;
            return data;
        }

        function getChapters(res) {
            var chapters = res.chapters;
            return helpers.getCourseAssignments().then(getCourses);
/*
            return helpers.getCourseAssignments().then(getCourses).then((res) => {
                var data = helpers.getSyncIDs(res);
                return helpers.fillInInstanceIds(chapters, data.syncIDs).then((res) => {
                    var problemInstIds = helpers.getProblemInstIds(chapters, data.syncIDs);
                    var keys = Object.keys(problemInstIds);
                    console.log('problemInstIds', problemInstIds);
					return problemInstIds;
                });
            });
*/
        }

        /*
         * Parse BookDefinition file. Intended to replace most of the code in helper fillInInstanceIds and getProblemInstIds.
         * Should return an ordered array of chapters. For each chapter, we need:
         *   Chapter title (for clarity)
         *   Quickcheck Sync IDs (fl, ngss, natl)
         *   Problem Instance IDs
         *   Virtual Lab data (only if it's the Virtual Lab chapter)
         * Payload should be an array that looks like this:
         * [ { title: , qcSyncIds: { fl: , ngss: , natl: }, probInstIds: [ { fl: , ngss: , natl: } ], vlData: [ { title: , assignId: , syncId: } ] ]
         */
        function parseBookDefinition(chapters) {
            var bdChapters = [];
            chapters.forEach((chapter) => {
                try {
                    var units = chapter.unit;
                    var problemInstIds = { fl: {}, ngss: {}, natl: {}};
                    var probInstIds = [];
                    var vlData = [];
                    units.forEach((unit) => {
                        unit.section.forEach((section) => {
                            var quickchecks = section.subsection.filter((sub) => { return sub.type === 'quizcheck';  });
                            quickchecks.forEach((quickcheck) => {
                                probInstIds.push({
                                  fl: quickcheck.fl_problem_inst_id,
                                  ngss: quickcheck.ngss_problem_inst_id,
                                  natl: quickcheck.problem_inst_id
                                });
                            });
    
                            var labmenu = section.subsection.filter((sub) => { return sub.type === 'labmenu'; });
                            labmenu.forEach((item) => {
                                item.chapters.forEach((chapter) => {
                                    chapter.labs.forEach((lab) => {
                                        if (lab.assign_id) {
                                            lab.assign_id = lab.assign_id.replace(/\s/g, '');
                                            vlData.push({ title: lab.title, assignId: lab.assign_id, syncId: lab.sync_id });
                                        }
                                    });
                                });
                            });
                        });
                    });
                    bdChapterObj = { 
                        title: chapter.title, 
                        qcSyncIds: { fl: chapter.fl_sync_id, ngss: chapter.ngss_sync_id, natl: chapter.sync_id },
                        probInstIds: probInstIds,
                        vlData: vlData
                    };

                    bdChapters.push(bdChapterObj);
                } catch(e) {
                }
            });

            return bdChapters;
        }
    });


