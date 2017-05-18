  var Controller = function () {
    var view = new View();
    var p = {};
    p.subSection = 0;
    this.init = function () {
      eventListener();
    };
    function eventListener() {
      $(document).off("loadNext", loadNext).on("loadNext", loadNext);
      $(document).off("loadPrev", loadPrev).on("loadPrev", loadPrev);
      $(document).off("loadSpecificTopic", loadSpecificTopic).on("loadSpecificTopic", loadSpecificTopic);
      loadBookData();
    }
    function loadBookData(e, data) {
      httpRequest("course/json/toc/BookDefinition.json", "json", function (_data) {
        p.bookData = _data.chapters;
        p.get_link = _data.get_link;
        p.set_link = _data.put_link;
        $(document).trigger("getBookData", {bookData: _data});
        $(document).trigger("createShell");
      });
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
      console.log("subsection" + p.subSection);
      console.log("section" + p.section);
      console.log("unit" + p.unit);
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
    function loadScreen(vIndex) {
      manageNavigationState();
      var _temp = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection];
      if (p.section == 0) {
        var txt = p.bookData[p.chap]["title"] + " > " + p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["SectionTitle"] + " > " + p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["SectionTitle"];
      } else {
        var txt = p.bookData[p.chap]["title"] + " > " + p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["SectionTitle"] + " > " + p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection]["SectionHeading"];
      }
      $('.pBreadCrumb').show().html(txt);
      console.log("typee-->" + _temp.type);
      location.hash = _temp.type;
      $(document).trigger("loadSubMenu", {"chap": p.chap, unit: p.unit, section: p.section, subsection: p.subSection});
      switch (_temp.type) {
        case "summary":
          var _data = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection];
          $(document).trigger("loadSummaryScreen", {screenData: _data});
          break;
        case "quizboard":
          var _data = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection];
          $(document).trigger("loadQuizBoard", {screenData: _data});
        /*   $('.activityLoader').show();

          getQuizboardData(_data, function (data1) {
            var _temp = {};
            _temp.screenData = data1;
            _temp.instance_id = p.bookData[p.chap]["quizBoard_id"];
            $(document).trigger("loadQuizBoard", _temp);
          }); */
          break;
        case "quizcheck":
          var _data = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection];
          $(document).trigger("loadQuizCheck", {screenData: _data});

         /*  $('.activityLoader').show();
          getQuizData(_data, function (data1) {
            var _temp = {};
            _temp.screenData = data1;
            _temp.instance_id = p.bookData[p.chap]["instance_id"];
            _temp.problem_inst_id = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection]["problem_inst_id"];
            $(document).trigger("loadQuizCheck", _temp);
          }); */
          break;
        case "labmenu":
          var _data = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection];
          $(document).trigger("loadLabMenu", {screenData: _data})
          break;
        case "playVideo":
          var _data = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection];
          $(document).trigger("loadOnlyVideo", {screenData: _data, playFree: true});
          break;
        case "onlyVideo":
          var _data = p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection];
          $(document).trigger("loadOnlyVideo", {screenData: _data});

          break;
        case "videoScreen":
        default:
          httpRequest("course/json/sectext/" + _temp.ref, "json", function (_data) {
            _data.SectionHeading = _temp["SectionHeading"];
            var _tempdata = {screenData: _data}
            _tempdata.type = _temp.type;
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
    function getQuizData(_data, cb) {
      console.log(p.get_link);

      httpRequest(p.get_link + p.bookData[p.chap]["instance_id"], "json", function (data) {

        data = data[p.bookData[p.chap]["unit"][p.unit]["section"][p.section]["subsection"][p.subSection]["problem_inst_id"]];
        data = cleanMML(data);
        console.log(data);
        cb(data);
      }, function () {
        alert("please login");
      });
    }
    function getQuizboardData(_data, cb) {
      httpRequest(p.get_link + p.bookData[p.chap]["quizBoard_id"], "json", function (data) {
        for (var i in data) {
          data[i] = cleanMML(data[i]);
        }
        console.log(data);
        cb(data);
      }, function () {
        alert("please login");
      });

    }
    this.init();
  }
