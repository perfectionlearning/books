var Controller = function() {
  var view = new View();
  var p = {};
  p.subSection = 0;
  p.userId;
  p.usertype = "Teacher";
  p.bookType = "florida";
  var coreData;
  var lessonFlag = false;
  
  this.init = function() {
    showLoader();
    eventListener();
  };
  // Returns the user type whether student or teacher
  this.getUserType = function() {
    return p.usertype;
  };
  // Returns the baseUrl
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
// This function bind the events
  function eventListener() {
    $(document).off("loadNext", loadNext).on("loadNext", loadNext);//loads next page
    $(document).off("loadPrev", loadPrev).on("loadPrev", loadPrev);// load previous page
    $(document).off("changePassword", changePassword).on("changePassword", changePassword);//change user password
    $(document).off("changeEmail", changeEmail).on("changeEmail", changeEmail);// update user email
    $(document).off("loadSpecificTopic", loadSpecificTopic).on("loadSpecificTopic", loadSpecificTopic); // load specific topic selected by user
    $(document).off("updateBook", updateBook).on("updateBook", updateBook); // updates the book data depending upon the type whether chapter or lessonplan;
    loadBookData();
  }

  //this function loads BookDefinition.json file
  function loadBookData(e, data) {
    var baseUrl = getBaseUrl(); // Added by PL

    httpRequest("course/json/toc/BookDefinition.json", "json", function(_data) {
      httpRequest("course/json/toc/standard.json", "json", function(data) {
        p.standards = data;
        coreData = _data;
        p.rest_courses = _data.rest_courses;
        p.rest_select_course = _data.rest_select_course;
        p.rest_assigns = _data.rest_assigns;
        p.bookData = _data.chapters;
        p.quizboard_get_link = baseUrl + _data.quizboard_get_link;
        p.get_link = baseUrl + _data.get_link;
        p.set_link = baseUrl + _data.put_link;
        p.session_info = baseUrl + _data.session_info;
        p.setting = baseUrl + _data.setting;
        p.grades_link = baseUrl + _data.grades_link;
        p.wrap_data = baseUrl + _data.wrap_data;
        getExternalData();
        $(document).trigger("getBookData", {
          bookData: _data
        });
      });
    });
  }

  // Set up to perform REST calls with wrapping set to false.
  function getExternalData() {
    var request = $.ajax({
      url: p.wrap_data,
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      data: '{"wrap_output": true}',
      method: "PUT",
      complete: function(jqXHR, textStatus) {
        getUserId();
        getFPPCourses();
      }
    });
  }


  // Perform REST call to get user ID from session data.
  function getUserId() {
    httpRequest(p.session_info, "json", function(data) {
      if (data.hasOwnProperty("book_id")) {
        var book_id = data.book_id;
        if (book_id == 66 || book_id == 67) {
          p.bookType = "national";
        } else {
          p.bookType = "florida";
        }
      }
      if (data.hasOwnProperty("is_demo")) {
        p.is_demo = data.is_demo;
      } else {
        p.is_demo = false;
      }
      if (data.hasOwnProperty("user_id")) {
        p.userId = data.user_id;
        p.usertype = data.homedisplay;
      } else if (data.hasOwnProperty("data")) {
        p.userId = data.data.user_id;
        p.usertype = data.data.homedisplay;
      }
      if (p.bookType == "national") {
        var add_resource = coreData.chapters[27].unit[0].section;
        add_resource.splice(6, 1);
        $(document).trigger("getBookData", {
          bookData: coreData
        });
      }else{
        var add_resource = coreData.chapters[27].unit[0].section;
        add_resource.splice(5, 1);
        add_resource.splice(7, 1);
        $(document).trigger("getBookData", {bookData: coreData});
	  }
      if (p.is_demo) {
        var labs = coreData.chapters[26];
        labs.title = "Virtual Lab Sampler";
        labs.unit[0].section[2].subsection[0].chapters[0].labs.length = 3;
        labs.unit[0].section[2].subsection[0].chapters.length = 1;
        coreData.chapters.length = 3;
        coreData.chapters.push(labs);
        coreData.lessonPlan.chapters.length = 3;
        coreData.is_demo = true;
        p.bookData = coreData.chapters;
        console.log(coreData);
        $(document).trigger("getBookData", {
          bookData: coreData
        });
      }

      view.setUserType(p.usertype);
	  view.setBookType(p.bookType);
      $(document).trigger("createShell");
    }, function() {

    });
  }

  // Returns if passed course data has FPP book or not.
  function hasFPPBook(course) {
    var hasFPPBookFlag = false;
    if (course.product === 'fpp') {
      hasFPPBookFlag = true;
    } else if (course.course_books && course.course_books.length > 0) {
      var books = course.course_books.filter((book) => {
        return book.book_full && book.book_full.product_line && book.book_full.product_line === 'FPP';
      });
      if (books && books.length > 0) {
        hasFPPBookFlag = true;
      }
    }
    return hasFPPBookFlag;
  }

  // Get FPP courses
  function getFPPCourses() {
    httpRequest(p.rest_courses, "json", function(data) {
      var fpp_courses = data.filter((item) => {
        return hasFPPBook(item); // Added new function to check FPP book present in course_books attribute as well as existing condition
//        return item.product === 'fpp';
      });
      getSyncIDs(fpp_courses);
    }, function() {});
  }

  // Get syncID to instanceID from FPP assignments.
  function getSyncIDs(fpp_courses) {
    if (fpp_courses.length > 0) {
      var course = fpp_courses.shift();
      $.ajax({
        url: p.rest_select_course + course.id,
        method: 'PUT',
        data: '{"current:"' + p.session_info.course_id + ', "id":' + course.id + '}',
        complete: function(jqXHR, textStatus) {
          httpRequest(p.rest_assigns, "json", function(data) {
            var vls = data.filter((item) => {
              return item.type === 'virtual lab';
            });
            var vlSyncIDs = {};
            vls.forEach((item) => {
              vlSyncIDs[item.syncID] = item.id
            });
            if (Object.keys(vlSyncIDs).length > 0) {
              p.vlSyncIDs = vlSyncIDs;
            }

            var qcs = data.filter((item) => {
              return item.type === 'quickcheck';
            });
            var syncIDs = {};
            qcs.forEach((item) => {
              syncIDs[item.syncID] = item.id
            });
            if (Object.keys(syncIDs).length > 0) {
              p.syncIDs = syncIDs;
            }

            var qbs = data.filter((item) => {
              return item.type === 'quizboard';
            });
            var qbSyncIDs = {};
            qbs.forEach((item) => {
              qbSyncIDs[item.syncID] = item.id
            });
            if (Object.keys(qbSyncIDs).length > 0) {
              p.qbSyncIDs = qbSyncIDs;
            }

            getSyncIDs(fpp_courses);
          });
        }
      });
    } else {
      if (p.syncIDs || p.qbSyncIDs) {
        if (!p.syncIDs) p.syncIDs = {};
        if (!p.qbSyncIDs) p.qbSyncIDs = {};
        fillInInstanceIds(p.syncIDs, p.qbSyncIDs);
      }
      if (p.vlSyncIDs) {
        fillInVLInstanceIds(p.vlSyncIDs);
      }
    }
  }

  // Fill in instance_ids in BookDefinition object.
  function fillInInstanceIds(syncIDs, qbSyncIDs) {
    p.bookData.forEach((item) => {
      if (item.sync_id) {
        // Check to see if the fl_sync_id is in the list of syncIDs. If so, use it.
        if (syncIDs[item.fl_sync_id]) item.sync_id = item.fl_sync_id;
        else if (syncIDs[item.ngss_sync_id]) item.sync_id = item.ngss_sync_id;
        if (qbSyncIDs[item.fl_qb_sync_id]) item.qb_sync_id = item.fl_qb_sync_id;
        else if (qbSyncIDs[item.ngss_qb_sync_id]) item.qb_sync_id = item.ngss_qb_sync_id;

        item.quizBoard_id = qbSyncIDs[item.qb_sync_id];
        item.instance_id = syncIDs[item.sync_id];
      }
    });
    loadScreen();
  }

  // Fill in Virtual Lab assign_ids in BookDefinition object.
  // These are buried in the Lab chapter, so drilling down gets ugly. Really ugly.
  function fillInVLInstanceIds(vlSyncIDs) {
    var labs = p.bookData.filter((item) => {
      return item.title === 'Labs';
    });
    var unit = labs[0].unit[0];
    var virtualLabSection = unit.section.filter((item) => {
      return item.SectionTitle === 'Virtual Labs';
    });
    var chapters = virtualLabSection[0].subsection[0].chapters;
    chapters.forEach((chapter) => {
      if (chapter.labs) {
        chapter.labs.forEach((lab) => {
          if (lab.sync_id) {
            lab.assign_id = vlSyncIDs[lab.sync_id];
          }
        });
      }
    });
    loadScreen();
  }
//updates the book data depending upon the type whether chapter or lessonplan;
  function updateBook(e, book) {
    if (book.book) {
      lessonFlag = false;
      p.bookData = coreData.chapters;
    } else {
      lessonFlag = true;
      p.bookData = coreData.lessonPlan.chapters;
    }

  }
//manages the next and previous enable/disable state.
  function manageNavigationState() {
    var unit = p.bookData[p.chap]["unit"].length - 1;
    var section = p.bookData[p.chap]["unit"][unit]["section"].length - 1;
    var sub_section = p.bookData[p.chap]["unit"][unit]["section"][section]["subsection"].length - 1;
    if (p.unit == 0 && p.section == 0 && p.subSection == 0) {
      $(document).trigger("navigationState", {
        next: true,
        prev: false
      });
    } else if (p.unit == unit && p.section == section && p.subSection == sub_section) {
      $(document).trigger("navigationState", {
        next: false,
        prev: true
      });
    } else {
      $(document).trigger("navigationState", {
        next: true,
        prev: true
      });
    }
  }
//loads next page
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
    if (p.bookData[p.chap]["unit"][p.unit]["section"][p.section].hasOwnProperty("link")) {
      loadNext()
    } else {
      loadScreen();
    }
  }
// load previous page
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
    if (p.bookData[p.chap]["unit"][p.unit]["section"][p.section].hasOwnProperty("link")) {
      loadPrev()
    } else {
      loadScreen();
    }
  }
// load specific topic selected by user
  function loadSpecificTopic(e, data) {
    p.chap = data.chap;
    p.unit = data.unit;
    p.section = data.section;
    p.subSection = 0;
    if (data.hasOwnProperty("subSection")) {
      p.subSection = data.subSection;
    }
    if (data.hasOwnProperty("vIndex")) {
      loadScreen(data.vIndex, data.pageNo);
    } else {
      loadScreen(data.vIndex, data.pageNo);
    }

  }
  // function is called on the change of url from the helper.js file
  this.hashChange = function(data) {
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
          view.loadScreen({
            type: "book",
            data: {
              type: "book"
            }
          })
        }
      } else {
        if (data.lessonFlag == "false") {
          lessonFlag = false;
          p.bookData = coreData.chapters;
          view.updateBook(true);
        }
        if (data.hasOwnProperty("page")) {
          loadScreen("", data.page);
        } else {
          loadScreen();
        }
      }

    } else if (data.type == "additonal-resource") {
      var _data = {};
      _data.SectionHeading = data.title;
      _data.ref = data.href;
      $(document).trigger("loadAdditionalResource", {
        screenData: _data
      })
    } else if (data.type == "search") {
      $(document).trigger("showSearchBox", {
        searchKey: data.searchKey
      });
    } else {
      view.loadScreen({
        type: data.type,
        data: data
      })
    }

  }
//This functions get the screen data and depending upon the type of the screen.. data is passed to respective function in the view  
  function loadScreen(vIndex, page) {
    if (!p.chap) return;
    manageNavigationState();
    var _data = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection];
    $(document).trigger("loadSubMenu", {
      "chap": p.chap
    });
    updateBreadCrumb();
    updateSubMenu();
    var screenNo;
    blockHashEvent = true;
    if (typeof page != "undefined") {
      _data.page = page;
      location.hash = escape('lesson_' + lessonFlag + '/type_chapter/chapter_' + p.chap + '/unit_' + p.unit + '/section_' + p.section + '/subsection_' + p.subSection + '/page_' + page);
    } else {
      location.hash = escape('lesson_' + lessonFlag + '/type_chapter/chapter_' + p.chap + '/unit_' + p.unit + '/section_' + p.section + '/subsection_' + p.subSection);
    }
    setTimeout(function() {
      blockHashEvent = false;
    }, 500);
    if (lessonFlag) {
      if (p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"].length <= 1) {
        // added for lesson plan single page lesson and assessment page not present
        var chr = String.fromCharCode(97 + Number(p.subSection));
        screenNo = "Lesson " + (Number(p.section) - 1) + "." + (chr) + ":";
		// screenNo = (Number(p.unit) + 1) + "." + (Number(p.section));
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
    if (_data.hasOwnProperty("type")) {
      _data.type = _data.type.trim();
    }
    switch (_data.type) {
      case "summary":
        $(document).trigger("loadSummaryScreen", {
          screenData: _data,
          screenNo: screenNo
        });
        break;
      case "pdfScreen":
        $(document).trigger("loadPdfScreen", {
          screenData: _data,
          screenNo: screenNo
        });
        break;
      case "quizboard":
        $('.activityLoader').show();
        getQuizboardData(_data, function(data1) {
          var _temp = {};
          _temp.screenNo = screenNo;
          _temp.screenData = data1;
          _temp.instance_id = p.bookData[p.chap]["quizBoard_id"];
          $(document).trigger("loadQuizBoard", _temp);
        });
        break;
      case "quizcheck":
        showLoader();
        getQuizData(_data, function(data1) {
          var _temp = {};
          _temp.screenNo = screenNo;
          _temp.screenData = data1;
          _temp.instance_id = p.bookData[p.chap]["instance_id"];
          _temp.problem_inst_id = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection]["problem_inst_id"];
          $(document).trigger("loadQuizCheck", _temp);
        });
        break;
      case "labmenu":
        $(document).trigger("loadLabMenu", {
          screenData: _data,
          screenNo: screenNo
        })
        break;
      case "playVideo":
        $(document).trigger("loadOnlyVideo", {
          screenData: _data,
          playFree: true,
          screenNo: screenNo
        });
        break;
      case "onlyVideo":
        $(document).trigger("loadOnlyVideo", {
          screenData: _data,
          screenNo: screenNo
        });
        break;
      case "additonal_resource":
        $(document).trigger("loadAdditionalResource", {
          screenData: _data,
          screenNo: screenNo
        })
        break;
      case "videoScreen":
      default:
        httpRequest("course/json/sectext/" + _data.ref, "json", function(_temp) {
          _temp.SectionHeading = _data["SectionHeading"];
          var _tempdata = {
            screenData: _temp,
            screenNo: screenNo
          }
          _tempdata.type = _data.type;
          if (typeof vIndex != "undefined" && vIndex != "") {
            _tempdata.vPlay = vIndex
          }
          if (_data.hasOwnProperty("actRef")) {
            _tempdata.ref = _data["actRef"];
          }
          if (p.standards[p.bookType].hasOwnProperty(_data.ref)) {
            _tempdata.screenData.secText[0] = p.standards[p.bookType][_data.ref];
          }
          $(document).trigger("loadActivityScreen", _tempdata);
        }, function() {
          $(document).trigger("loadActivityScreen", {
            json: false
          });
        });
        break;
    }

  }
// updates the breadcrumb
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

  // updates the menu inside the screen
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

   // gets the quiz data from the server
  function getQuizData(_data, cb) {
    httpRequest(p.get_link + p.bookData[p.chap]["instance_id"], "json", function(data) {
      // Check for NGSS instance ID
      var ngss_inst_id = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection]["ngss_problem_inst_id"];
      // Check for FL instance ID
      var fl_inst_id = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection]["fl_problem_inst_id"];
      var inst_id = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection]["problem_inst_id"];
      // If this assignment uses FL instance IDs, replace the problem_inst_id with the one for FL. This replacement will remain in place for submission, as well.
      if (data[fl_inst_id]) p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection]["problem_inst_id"] = fl_inst_id;
      // If this assignment uses NGSS instance IDs, replace the problem_inst_id with the one for NGSS. This replacement will remain in place for submission, as well.
      else if (data[ngss_inst_id]) p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection]["problem_inst_id"] = ngss_inst_id;
      data = data[p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection]["problem_inst_id"]];
      if (!data.video && _data['video']) {
        data.video = _data['video'];
      }
      data = cleanMML(data);
      cb(data);
    }, function() {
      cb({
        json: false
      })
    });
  }
// gets the quiz board data from the server
  function getQuizboardData(_data, cb) {
    httpRequest(p.quizboard_get_link + p.bookData[p.chap]["quizBoard_id"], "json", function(data) {
      for (var i in data) {
        data[i] = cleanMML(data[i]);
      }
      cb(data);
    }, function() {
      cb({
        json: false
      })
    });
  }
// updates the password of the user
  function changePassword(e, data) {
    var _data = {
      "old_password": data.old_password,
      "new_password": data.new_password
    };
    _data = JSON.stringify(_data);
    var request = $.ajax({
      url: p.setting + p.userId + '/password',
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      data: _data,
      method: "PUT",
      complete: function(jqXHR, textStatus) {
        if (jqXHR.responseText == "Array") {
          $('.changePassBody .feedback').css("color", "green").html("Your password has been changed. ").fadeIn();
        } else {
          $('.changePassBody .feedback').css("color", "red").html("That password doesn't meet our security requirements.").fadeIn();
        }
        hideLoader();
      }
    });
    request.done(function(data) {
      request = null;
    });
    request.fail(function(jqXHR, textStatus) {
      request = null;
    });
  }
// updates the email of the user
  function changeEmail(e, data) {

    var _data = {
      "email": data.email
    };
    _data = JSON.stringify(_data);
    var request = $.ajax({
      url: p.setting + p.userId + '/email',
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      data: _data,
      method: "PUT",
      complete: function(jqXHR, textStatus) {
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

  this.getLabRef = function(src) {
    return view.getLabRef(src);
  }

  this.init();
}