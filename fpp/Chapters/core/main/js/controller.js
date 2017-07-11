  var Controller = function () {
    var view = new View();
    var p = {};
    p.subSection = 0;
    p.userId;
    p.usertype = "Teacher";
    var coreData;
    var lessonFlag = false;
    this.init = function () {
      showLoader();
      eventListener();
    };

    this.getDomain = function() {
        return getBaseUrl();
    };

    function getBaseUrl() {
        // Added by PL: get base URL (qa1.perfectionlearning.com for test; ohw.perfectionlearning.com for live);
        var host = window.location.host;
        var protocol = window.location.protocol;
        var baseUrl = protocol + '//' + host;
        return baseUrl;
    }

    function eventListener() {
      $(document).off("loadNext", loadNext).on("loadNext", loadNext);
      $(document).off("loadPrev", loadPrev).on("loadPrev", loadPrev);
      $(document).off("changePassword", changePassword).on("changePassword", changePassword);
      $(document).off("changeEmail", changeEmail).on("changeEmail", changeEmail);
      $(document).off("loadSpecificTopic", loadSpecificTopic).on("loadSpecificTopic", loadSpecificTopic);
      $(document).off("updateBook", updateBook).on("updateBook", updateBook);
      loadBookData();
    }
    function loadBookData(e, data) {
      var baseUrl = getBaseUrl(); // Added by PL

      httpRequest("course/json/toc/BookDefinition.json", "json", function (_data) {
        coreData = _data;
        p.rest_courses = _data.rest_courses;
        p.rest_assigns = _data.rest_assigns;
        p.bookData = _data.chapters;
        p.quizboard_get_link = baseUrl + _data.quizboard_get_link;
        p.get_link = baseUrl + _data.get_link;
        p.set_link = baseUrl + _data.put_link;
        p.session_info = baseUrl + _data.session_info;
        p.setting = baseUrl + _data.setting;
        p.grades_link = baseUrl + _data.grades_link;
        p.wrap_data = baseUrl + _data.wrap_data;
        getUserId();
		getFPPCourses();
        $(document).trigger("getBookData", {bookData: _data});


      });
    }
    function getUserId() {
      var request = $.ajax({
        url: p.wrap_data,
        xhrFields: {
          withCredentials: true
        },
        crossDomain: true,
        data: '{"wrap_output": false}',
        method: "PUT",
        complete: function (jqXHR, textStatus) {
          httpRequest(p.session_info, "json", function (data) {
            if (data.hasOwnProperty("user_id")) {
              p.userId = data.user_id;
              p.usertype = data.homedisplay;
            } else if (data.hasOwnProperty("data")) {
              p.userId = data.data.user_id;
              p.usertype = data.data.homedisplay;
            }

            view.setUserType(p.usertype);
            $(document).trigger("createShell");
          }, function () {

          });

        }
      });

    }

	// Get FPP courses
	function getFPPCourses() {
		var request = $.ajax({
			url: p.wrap_data,
			xhrFields: {
				withCredentials: true
			},
			crossDomain: true,
			data: '{"Wrap_output": false}',
			method: "PUT",
			complete: function(jqXHR, textStatus) {
				httpRequest(p.rest_courses, "json", function (data) {
					var fpp_courses = data.filter((item) => { return item.product === 'fpp'; });
					getSyncIDs(fpp_courses);

				}, function () {

				});

			}
		});
	}

	// Get syncID to instanceID from FPP assignments.
	function getSyncIDs(fpp_courses) {
		if (fpp_courses.length > 0) {
			var course = fpp_courses.shift();
			$.ajax({
				url: '/api/rest/courses/select/' + course.id,
				method: 'PUT',
				data: '{"current:"' + p.session_info.course_id + ', "id":' + course.id + '}',
				complete: function(jqXHR, textStatus) {
					httpRequest(p.rest_assigns, "json", function(data) {
						var qcs = data.filter((item) => { return item.type === 'quickcheck'; });
						var syncIDs = {};
						qcs.forEach((item) => { 
							syncIDs[item.syncID] = item.id
						});
						p.syncIDs = syncIDs;
						getSyncIDs(fpp_courses);
					});
				}
			});
		} else {
			fillInInstanceIds(p.syncIDs);
		}
	}

	// Fill in instance_ids in BookDefinition object.
	function fillInInstanceIds(syncIDs) {
		p.bookData.forEach((item) => {
			if (item.sync_id) {
				item.instance_id = syncIDs[item.sync_id];
			}
		});
		loadScreen();
	}

    function updateBook(e, book) {
      if (book.book) {
        lessonFlag = false;
        p.bookData = coreData.chapters;
      } else {
        lessonFlag = true;
        p.bookData = coreData.lessonPlan.chapters;
      }

    }
    function manageNavigationState() {
      var unit = p.bookData[p.chap]["unit"].length - 1;
      var section = p.bookData[p.chap]["unit"][unit]["section"].length - 1;
      var sub_section = p.bookData[p.chap]["unit"][unit]["section"][section]["subsection"].length - 1;
      if (p.unit == 0 && p.section == 0 && p.subSection == 0) {
        $(document).trigger("navigationState", {next: true, prev: false});
      } else if (p.unit == unit && p.section == section && p.subSection == sub_section) {
        $(document).trigger("navigationState", {next: false, prev: true});
      } else {
        $(document).trigger("navigationState", {next: true, prev: true});
      }
    }

    function loadNext() {
      var unit = p.bookData[p.chap]["unit"].length - 1;
      var section = p.bookData[p.chap]["unit"][p.unit]["section"].length - 1;
      var sub_section = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"].length - 1;
      if (p.subSection < sub_section) {
        p.subSection++;
      } else if (p.subSection == sub_section && p.section < section) {
        p.subSection = 0;
        p.section++;
      } else {
        p.subSection = 0;
        p.section = 0
        p.unit++;
      }
      loadScreen();
    }
    function loadPrev() {
      if (p.subSection > 0) {
        p.subSection--;
      } else if (p.subSection == 0 && p.section > 0) {
        p.section--;
        p.subSection = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"].length - 1;
      } else if (p.section == 0 && p.unit > 0) {
        p.unit--;
        p.section = p.bookData[p.chap]["unit"][p.unit]["section"].length - 1;
        p.subSection = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"].length - 1;
      }
      loadScreen();
    }
    function loadSpecificTopic(e, data) {
      p.chap = data.chap;
      p.unit = data.unit;
      p.section = data.section;
      p.subSection = 0;
      if (data.hasOwnProperty("subSection")) {
        p.subSection = data.subSection;
      }
      if (data.hasOwnProperty("vIndex")) {
        loadScreen(data.vIndex);
      } else {
        loadScreen(data.vIndex);
      }

    }
    this.hashChange = function (data) {
      console.log(data.type);
      if (data.type == "chapter") {
        p.chap = data.chap;
        p.unit = data.unit;
        p.section = data.section;
        p.subSection = data.subsection;

        if (data.lessonFlag == "true") {
          if (p.usertype != "Student") {
            if (lessonFlag != data.lessonFlag) {
              lessonFlag = true;
              p.bookData = coreData.lessonPlan.chapters;
              view.updateBook(false);
              loadScreen();
            }
          } else {
            view.loadScreen({type: "book", data: {type: "book"}})
          }
        } else {
          if (data.lessonFlag == "false") {
            lessonFlag = false;
            p.bookData = coreData.chapters;
            view.updateBook(true);
          }
          loadScreen();
        }

      } else if (data.type == "additonal-resource") {
        var _data = {};
        _data.SectionHeading = data.title;
        _data.ref = data.href;
        $(document).trigger("loadAdditionalResource", {screenData: _data})
      } else if (data.type == "search") {
        $(document).trigger("showSearchBox", {searchKey: data.searchKey});
      } else {
        view.loadScreen({type: data.type, data: data})
      }

    }
    function loadScreen(vIndex) {
console.log('Starting loadScreen', vIndex);
      manageNavigationState();
      var _data = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection];
      $(document).trigger("loadSubMenu", {"chap": p.chap});
      updateBreadCrumb();
      updateSubMenu();
      var screenNo;
      blockHashEvent = true;
      location.hash = escape('lesson_' + lessonFlag + '/type_chapter/chapter_' + p.chap + '/unit_' + p.unit + '/section_' + p.section + '/subsection_' + p.subSection);
      setTimeout(function () {
        blockHashEvent = false;
      }, 500);
      if (lessonFlag) {
        if (p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"].length <= 1) {
          screenNo = (Number(p.unit) + 1) + "." + (Number(p.section));
        } else {
          var chr = String.fromCharCode(97 + Number(p.subSection));
          if (p.section == 1) {
            screenNo = "";
          } else {
            screenNo = "Lesson " + (Number(p.section) - 1) + "." + (chr) + ":";
          }
        }
      } else {
        if (p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"].length <= 1) {
          screenNo = (Number(p.unit) + 1) + "." + (Number(p.section));
        } else {
          var chr = String.fromCharCode(97 + Number(p.subSection));
          screenNo = (Number(p.unit) + 1) + "." + (Number(p.section)) + "." + (chr);
        }
      }
      switch (_data.type) {
        case "summary":
          $(document).trigger("loadSummaryScreen", {screenData: _data, screenNo: screenNo});
          break;
        case "quizboard":
          $('.activityLoader').show();
          getQuizboardData(_data, function (data1) {
            var _temp = {};
            _temp.screenNo = screenNo;
            _temp.screenData = data1;
            _temp.instance_id = p.bookData[p.chap]["quizBoard_id"];
            $(document).trigger("loadQuizBoard", _temp);
          });
          break;
        case "quizcheck":
          showLoader();
          getQuizData(_data, function (data1) {
            var _temp = {};
            _temp.screenNo = screenNo;
            _temp.screenData = data1;
            _temp.instance_id = p.bookData[p.chap]["instance_id"];
console.log('getQuizData callback', _temp.instance_id);
            _temp.problem_inst_id = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection]["problem_inst_id"];
            $(document).trigger("loadQuizCheck", _temp);
          });
          break;
        case "labmenu":
          $(document).trigger("loadLabMenu", {screenData: _data, screenNo: screenNo})
          break;
        case "playVideo":
          $(document).trigger("loadOnlyVideo", {screenData: _data, playFree: true, screenNo: screenNo});
          break;
        case "onlyVideo":
          $(document).trigger("loadOnlyVideo", {screenData: _data, screenNo: screenNo});
          break;
        case "additonal_resource":
          $(document).trigger("loadAdditionalResource", {screenData: _data, screenNo: screenNo})
          break;

        case "videoScreen":
        default:
          httpRequest("course/json/sectext/" + _data.ref, "json", function (_temp) {
            _temp.SectionHeading = _data["SectionHeading"];



            var _tempdata = {screenData: _temp, screenNo: screenNo}
            _tempdata.type = _data.type;
            if (typeof vIndex != "undefined") {
              _tempdata.vPlay = vIndex
            }
            $(document).trigger("loadActivityScreen", _tempdata);
          }, function () {
            $(document).trigger("loadActivityScreen", {json: false});
          });
          break;
      }

    }
    function updateBreadCrumb() {
      var txt, section;
      if (lessonFlag) {
        if (p.section == 0) {
          section = (Number(p.unit) + 1) + "." + (Number(p.section));
          txt = "CH " + p.chap + ": " + p.bookData[p.chap]["title"] + " > " + p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["SectionTitle"] + " >  " + p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["SectionTitle"];
        } else {
          section = (Number(p.unit) + 1) + "." + (Number(p.section));
          txt = "CH " + p.chap + ": " + p.bookData[p.chap]["title"] + " > " + p.bookData[p.chap]["unit"][p.unit]["section"][0]["SectionTitle"] + " >  " + p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["SectionTitle"];
        }
      } else {
        if (p.section == 0) {
          section = (Number(p.unit) + 1) + "." + (Number(p.section));
          txt = "CH " + p.chap + ": " + p.bookData[p.chap]["title"] + " > LESSON " + (Number(p.unit) + 1) + ": " + p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["SectionTitle"] + " >  " + p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["SectionTitle"];
        } else {
          section = (Number(p.unit) + 1) + "." + (Number(p.section));
          txt = "CH " + p.chap + ": " + p.bookData[p.chap]["title"] + " > LESSON " + (Number(p.unit) + 1) + ": " + p.bookData[p.chap]["unit"][p.unit]["section"][0]["SectionTitle"] + " >  " + p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["SectionTitle"];
        }
      }
      $('.pBreadCrumb').show().html(txt);
    }
    function updateSubMenu() {
      $('.accSysmbol').html("+");
      $('.sopen').removeClass("sopen");
      $('.tActive').removeClass("tActive");
      $('.pSubTopicInnerMainWrap').hide();
      $('.pSubMenuHeader').html("Ch " + (Number(p.chap)) + ": " + p.bookData[p.chap]["title"])
      var elem = $(".pSubMenuTopic[data-chap='" + p.chap + "'][data-topic='" + p.unit + "'][data-subtopic='" + p.section + "'][data-subsection='" + p.subSection + "'] ");
      elem.addClass("tActive");
      if (elem.parent().parent().hasClass("child")) {
        elem.parent().parent().parent().parent().find('.pSubTopicName .accSysmbol').not('.pSubTopicInnerWrap .accSysmbol').html("-");
        elem.parent().parent().find('.pSubTopicName .accSysmbol').html("-");
        elem.parent().parent().parent().parent().addClass("sopen");
        elem.parent().parent().parent().show();
        elem.parent().parent().addClass("sopen");
        elem.parent().show();
      } else {
        elem.parent().parent().find('.pSubTopicName .accSysmbol').not('.pSubTopicInnerWrap .accSysmbol').html("-");
        elem.parent().parent().addClass("sopen");
        elem.parent().show();
      }


      $(".pSubMenuTopic[data-chap='" + p.chap + "'][data-topic='" + p.unit + "'][data-subtopic='" + p.section + "'][data-subsection='" + p.subSection + "'] ").prevUntil('.pSubMenuTopicHeader').prev().show();
    }
    function getQuizData(_data, cb) {
console.log('getQuizData', p.bookData[p.chap]);
      httpRequest(p.get_link + p.bookData[p.chap]["instance_id"], "json", function (data) {
        console.log(data);
        data = data[p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection]["problem_inst_id"]];
        if (!data.video && _data['video']) {
                data.video = _data['video'];
        }
        data = cleanMML(data);
        cb(data);
      }, function () {
        cb({json: false})
      });
    }
    function getQuizboardData(_data, cb) {
      httpRequest(p.quizboard_get_link + p.bookData[p.chap]["quizBoard_id"], "json", function (data) {
        for (var i in data) {
          data[i] = cleanMML(data[i]);
        }
        console.log(data);
        cb(data);
      }, function () {
        cb({json: false})
      });

    }
    function changePassword(e, data) {
      var _data = {"old_password": data.old_password, "new_password": data.new_password};
      _data = JSON.stringify(_data);
      var request = $.ajax({
        url: p.setting + p.userId + '/password',
        xhrFields: {
          withCredentials: true
        },
        crossDomain: true,
        data: _data,
        method: "PUT",
        complete: function (jqXHR, textStatus) {
          if (jqXHR.responseText == "Array") {
            $('.changePassBody .feedback').css("color", "green").html("Your password has been changed. ").fadeIn();

          } else {
            $('.changePassBody .feedback').css("color", "red").html("That password doesn't meet our security requirements.").fadeIn();
          }
          hideLoader();
        }
      });

      request.done(function (data) {
        request = null;

      });

      request.fail(function (jqXHR, textStatus) {
        request = null;
      });

    }

    function changeEmail(e, data) {

      var _data = {"email": data.email};
      _data = JSON.stringify(_data);
      var request = $.ajax({
        url: p.setting + p.userId + '/email',
        xhrFields: {
          withCredentials: true
        },
        crossDomain: true,
        data: _data,
        method: "PUT",
        complete: function (jqXHR, textStatus) {
          var response = JSON.parse(jqXHR.responseText);
          if (response.status == "success") {
            $('.changeEmailBody .feedback').css("color", "green").html("Your email address has been changed. ").fadeIn();

          } else {
            $('.changeEmailBody .feedback').css("color", "red").html("That password doesn't meet our security requirements.").fadeIn();
          }
          hideLoader();
        }
      });


    }

    this.getLabRef = function (src) {
      return view.getLabRef(src);
    }

    this.init();
  }
