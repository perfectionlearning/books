  function View() {
    var thisObj = this;
    var device = BrowserDetect.any();
    var videoPlayer = new VideoPlayer();
    var quizCheck = new QuizCheck();
    var quizBoard = new QuizBoard();
    var p = new Object();
    p.mShell = null; //html shell
    p.bookData = {};
    eventListener();
    function eventListener() {
      //location.hash = "type_book";
      $(document).off("createShell", createShell).on("createShell", createShell);
      $(document).off("getBookData", getBookData).on("getBookData", getBookData);
      $(document).off("loadScreen", loadScreen).on("loadScreen", loadScreen);
      $(document).off("navigationState", navigationState).on("navigationState", navigationState);
      $(document).off("loadActivityScreen", loadActivityScreen).on("loadActivityScreen", loadActivityScreen);
      $(document).off("loadSummaryScreen", loadSummaryScreen).on("loadSummaryScreen", loadSummaryScreen);
      $(document).off("loadQuizCheck", loadQuizCheck).on("loadQuizCheck", loadQuizCheck);
      $(document).off("loadQuizBoard", loadQuizBoard).on("loadQuizBoard", loadQuizBoard);
      $(document).off("loadLabMenu", loadLabMenu).on("loadLabMenu", loadLabMenu);
      $(document).off("loadSubMenu", loadSubMenu).on("loadSubMenu", loadSubMenu);
      $(document).off("loadOnlyVideo", loadOnlyVideo).on("loadOnlyVideo", loadOnlyVideo);
      $(document).off("loadAdditionalResource", loadAdditionalResource).on("loadAdditionalResource", loadAdditionalResource);
      $(document).off(mouseEvents.down).on(mouseEvents.down, function () {
        overlayDown();
      });
    }
    function getBookData(e, data) {
      p.bookData = data.bookData;
    }

    function createShell(e) {
      //create shell dom
      if (p.mShell != null) {
        $(p.mShell).empty();
      }

      p.mShell = createElement({
        tagName: "div",
        attr: {
          "class": "mShell"
        }
      });
      $(p.mShell).appendTo("body");
      p.mContainer = createElement({
        tagName: "div",
        attr: {
          "class": "mContainer"
        }
      });
      $(p.mContainer).appendTo(p.mShell);
      createPlayer("header");
    }
    function createPlayer(_str) {
      switch (_str) {
        case "header":
          loadHtml({
            src: "course/template/header.html",
            parent: p.mContainer,
            next: "activity"
          });
          break;
        case "activity":
          loadHtml({
            src: "course/template/activity.html",
            parent: p.mContainer,
            next: "videoPlayer"
          });
          break;
        case "videoPlayer":
          loadHtml({
            src: "course/template/videoPlayer.html",
            parent: ".pActivityWrapper",
            next: "footer",
            callback: function () {

            }
          });
          break;
        case "footer":
          loadHtml({
            src: "course/template/footer.html",
            parent: p.mContainer,
            next: "book",
            callback: function () {

              videoPlayer.init();
            }
          });
          break;
        case "book":
          loadHtml({
            src: "course/template/book.html",
            parent: p.mContainer,
            next: "labmenu",
            callback: function () {
              initBook();
            }
          });
          break;
        case "labmenu"://---->
          loadHtml({
            src: "course/template/labsmenu.html",
            parent: p.mContainer,
            next: "labpage",
            callback: function () {
              //initLabsMenu();
            }
          });
          break; //---->
        case "labpage"://---->
          loadHtml({
            src: "course/template/labpage.html",
            parent: p.mContainer,
            callback: function () {
              $(p.mShell).find(".pLabSubMenuButton").click(openCloseLabSubMenu);
              updateUrl();
            }
          });
          break; //---->
      }
    }

    function openCloseLabSubMenu() {
      var state = $(p.mShell).find(".pLabSubMenu").data("open");
      if (!state) {
        $(p.mShell).find(".pLabSubMenu").css("left", 0);
        $(this).addClass("pSelected open");
      } else {
        $(p.mShell).find(".pLabSubMenu").css("left", -$(p.mShell).find(".pLabSubMenu").outerWidth(true));
        $(this).removeClass("pSelected open");
      }
      $(p.mShell).find(".pLabSubMenu").data("open", !state);
    }

    function loadHtml(_obj) {
      httpRequest(_obj.src, "html", function (_data) {
        $(_data).appendTo(_obj.parent);
        if (_obj.hasOwnProperty("next")) {
          createPlayer(_obj.next);
        }
        if (_obj.hasOwnProperty("callback")) {
          _obj.callback();
        }
      }, function () {
        alert(_obj.src + " file not found.");
      });
    }

    function initLabsMenu() {//---->
      var labsWrapper = $(p.mShell).find(".pLabsWrapper");
      labsWrapper.find(".labMenuHeader").html(p.labsData.title);
      labsWrapper.find(".labMenuIntro").html(p.labsData.intro);
      var chapWrapper, chapTitle;
      p.labsData.chapters.forEach(function (chapter) {
        chapWrapper = $(createElement({tagName: "div"})).addClass("pLabChapterWrapper");
        chapWrapper.appendTo(chapter.left ? labsWrapper.find(".pLeftWrapper") : labsWrapper.find(".pRightWrapper"));
        $(createElement({tagName: "div"})).addClass("pLabChapterTitle").appendTo(chapWrapper).html(chapter.title).css(chapter.icon ? chapter.icon : {});
        chapter.labs.forEach(function (lab) {
          $(createElement({tagName: "div"})).addClass("pLabTitle").appendTo(chapWrapper).html(lab.title).attr("data-href", lab.href);
        });
        if (chapter.bottomGap) {
          $(createElement({tagName: "div"})).addClass("pLabBottomGap").appendTo(chapWrapper).css("padding-bottom", chapter.bottomGap);
        }
      });
      labsWrapper.mCustomScrollbar({
        theme: "dark-3",
        axis: "y",
        scrollInertia: 0,
        scrollButtons: {enable: false}
      });
    }//---->

    function initBook() {
      var _chapWrap = $('.pChapBody');
      var _chapMain = $('.pChapName');
      var _sep = $('.pChapBody .pChapSeperator');
      p.bookData;
      for (var i in p.bookData.chapters) {
        if (i > 0) {
          _chapMain.clone().appendTo(_chapWrap)
          _sep.clone().appendTo(_chapWrap)
        }
      }
      $('.pChapName').last().remove();
      $('.pChapBody .pChapSeperator').last().remove();
      $('.pChapName').each(function (i) {
        $(this).attr("data-chapter", (i + 1));
        $(this).html("Ch " + (i + 1) + ": " + p.bookData.chapters[i + 1]["title"]);
      });
      loadTopic(1);
      $(p.mShell).find('.pChapBody').mCustomScrollbar({
        theme: "dark-3",
        axis: "y",
        scrollInertia: 0,
        scrollButtons: {enable: false}
      });
    }
    function loadSubMenu(e, data) {

      var _subchapWrap = $('.pSubMenuWrap')[0];
      var _subchapMain = $('.pSubTopicWrapper')[0];
      var _subsep = $('.pSubMenuWrap .pChapSeperator')[0];
      $('.pSubMenuWrap,.pSubmenuButton').removeClass("open");
      $(p.mShell).find(".pSubTopicWrapper").removeClass("tActive").not(":first").remove();
      var _tempData = p.bookData.chapters[data["chap"]]["unit"][data["unit"]]["section"]
      for (var i in _tempData) {
        $(_subchapMain).clone().appendTo(_subchapWrap)
      }
      $('.pSubTopicName').removeClass("pHover");
      $('.pSubTopicWrapper').removeClass("pHover").last().remove();
      $('.pSubTopicWrapper').each(function (i) {

        $(this).find('.pSubTopicName').html(_tempData[i]["SectionTitle"]);
        if (!_tempData[i].hasOwnProperty("link") && !_tempData[i].hasOwnProperty("hyperLink") && _tempData[i]["subsection"].length > 1) {
          $(this).attr("data-subsection", '');
          $(this).append("<div class='psubsectionWrapper'></div>").addClass("child");
          $(this).find('.pSubTopicName').prepend("<span class='accSysmbol'>+</span>")
          for (var j in _tempData[i]["subsection"]) {
            var temp = '<div class="pSubTopicName">' + _tempData[i]["subsection"][j]["SectionHeading"] + '</div><div class="pChapSeperator"></div>';
            $(_subchapMain).clone().appendTo($(this).find('.psubsectionWrapper')).attr("data-chap", data["chap"]).attr("data-topic", data["unit"]).attr("data-subtopic", i).attr("data-subsection", j).html(temp);
          }
        } else {
          $(this).attr("data-chap", data["chap"]).attr("data-topic", data["unit"]).attr("data-subtopic", i).attr("data-subsection", 0);
          $(this).find('.psubsectionWrapper').remove();
        }

      });
      $(p.mShell).find(".pSubTopicWrapper[data-chap='" + data["chap"] + "'][data-topic='" + data['unit'] + "'][data-subtopic='" + data["section"] + "'][data-subsection='" + data["subsection"] + "']").addClass("tActive");
      playerEvent();
    }
    function navigationState(e, data) {
      $(p.mShell).find(".navButtons.pBack").removeClass("pDisable");
      $(p.mShell).find(".navButtons.pNext").removeClass("pDisable");
      if (data.prev === false) {
        $(p.mShell).find(".navButtons.pBack").addClass("pDisable");
      }
      if (data.next === false) {
        $(p.mShell).find(".navButtons.pNext").addClass("pDisable");
      }

    }
    function loadTopic(topic_no) {

      var temp = p.bookData.chapters[topic_no];
      $(p.mShell).find(".pChapName").eq(topic_no - 1).addClass("active");
      $(p.mShell).find('.pTopicBody').mCustomScrollbar("destroy");
      $(p.mShell).find(".pTopicHeading").removeClass('hyperLink').removeClass('noLink').not(":first").remove();
      $(p.mShell).find(".pSubtopic").not(":first").remove();
      $(p.mShell).find('.pTopicName').html(temp.title);
      var _pTopicHeading = $('.pTopicHeading');
      var _pSubtopic = $(".pSubtopic");
      var _pTopicBody = $('.pTopicBody');
      var _index = 0;
      for (var i in temp.unit) {

        for (var j in temp.unit[i]["section"]) {

          if (j == 0) {
            if (temp.unit[i]["section"][j].hasOwnProperty("link")) {
              _pTopicHeading.clone().appendTo(_pTopicBody).addClass("noLink").attr("data-chap", topic_no).attr("data-topic", i).attr("data-subtopic", j).html((Number(i) + 1) + ": " + temp.unit[i]["section"][j]["SectionTitle"])
            } else {
              _pTopicHeading.clone().appendTo(_pTopicBody).attr("data-chap", topic_no).attr("data-topic", i).attr("data-subtopic", j).html((Number(i) + 1) + ": " + temp.unit[i]["section"][j]["SectionTitle"])
            }
          } else {
            _index++;
            if (temp.unit[i]["section"][j].hasOwnProperty("hyperLink")) {
              console.log("in");
              console.log();
              _pSubtopic.clone().appendTo(_pTopicBody).addClass("hyperLink").html(temp.unit[i]["section"][j]["href"])
            } else {
              _pSubtopic.clone().appendTo(_pTopicBody).attr("data-chap", topic_no).attr("data-topic", i).attr("data-subtopic", j).html(_index + ": " + temp.unit[i]["section"][j]["SectionTitle"])
            }
          }

        }
      }
      _pTopicHeading.first().remove();
      _pSubtopic.first().remove();
      $(p.mShell).find('.pTopicBody').mCustomScrollbar({
        theme: "dark-3",
        axis: "y",
        scrollInertia: 0,
        scrollButtons: {enable: false}
      });
      playerEvent();
    }
    function loadActivityScreen(e, data) {
      if (!data.hasOwnProperty("json")) {
        showLoader();
        var _tempScreenData = data.screenData;
        p.cSrc = _tempScreenData.objNames;
        var desc = "";
        var lines;
        var max_height = 0;
        if (_tempScreenData.objNames.length > 0) {
          $('.pVideoIconWrap').show();
          $('.pActivityDesc').css("width", "calc(100% - 365px)");
          $('.pActivityDesc').css("text-align", "left");
          var vIconWrap = $(p.mShell).find(".pVideoIconInnerWrap")[0];
          var pVideoIconWrap = $(p.mShell).find(".pVideoIconWrap");
          $(p.mShell).find(".pVideoIcon").removeClass('activity');
          $(p.mShell).find(".pVideoIconInnerWrap").not(":first").remove();
          for (var i in _tempScreenData.objNames) {
            $(vIconWrap).clone().appendTo(pVideoIconWrap);
          }
          $(vIconWrap).last().remove();
          $(p.mShell).find(".pVideoIcon").each(function (i) {
            $(this).addClass(data.type);
            $(this).find(".vIcon").css("background-image", "url('assets/images/" + _tempScreenData.objNames[i] + "@2x.png')");
            lines = _tempScreenData["cards"][i]["lines"];
            $(this).find(".vCaption").html("");
            var txt = "";
            for (var j in lines) {
              txt += "<p data-type='" + lines[j]["type"] + "'>" + lines[j]["text"] + "</p>"
            }
            $(this).attr("data-ind", i);
            $(this).find(".vCaption").html(txt);
            var math = $(this).find(".vCaption")[0];
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, math]);
            if (_tempScreenData.objNames[i].split("_")[0] == "jsact") {
              $(this).attr("data-jsact", _tempScreenData.objNames[i]);
            } else {
              $(this).removeAttr("data-jsact");
            }
          });
        } else {
          $('.pVideoIconWrap').hide();
          $('.pActivityDesc').css("width", "100%");
          $('.pActivityDesc').css("text-align", "center");
        }
        if (_tempScreenData.definitions.length > 0) {
          for (var j in _tempScreenData.definitions) {
            desc += "<p class='definition'><span style='font-style:italic;font-family:AvenirNextLTPro-Demi'>" + _tempScreenData.definitions[j]["term"] + ":</span>  <span>" + _tempScreenData.definitions[j]["def"] + "</span></p>";
          }
        }
        for (var j in _tempScreenData.secText) {
          desc += "<p>" + _tempScreenData.secText[j] + "</p>";
        }
        //$(p.mShell).find(".pVideoIcon").css("height", maxHeight + "px")
        $(p.mShell).find(".pActivityDesc").html(desc);
        $(p.mShell).find(".pActivityHeader").html(_tempScreenData.SectionHeading);
        $(p.mShell).find('.pActivityArea .pActivityBody').mCustomScrollbar({
          theme: "dark-3",
          axis: "y",
          scrollInertia: 0,
          scrollButtons: {enable: false}
        });
      } else {
        $(p.mShell).find(".pActivityHeader").html("Activity");
        $(p.mShell).find(".pActivityDesc").html("json not found");
      }
      var math1 = $(p.mShell).find(".pActivityDesc")[0];
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, math1]);
      if (data.hasOwnProperty("vPlay")) {
        videoPlayer.playVideo(data.vPlay);
      } else {
        p.currentType = "videoScreen";
        manageScreen("videoScreen");
      }
      var maxHeight = Math.max.apply(null, $(".pVideoIcon").map(function ()
      {
        return $(this).outerHeight();
      }).get());
      //$(".pVideoIcon").css("height", maxHeight + "px")
      hideLoader();
      playerEvent();
    }
    function loadAdditionalResource(e, data) {
      $('.pMenu').addClass('pDisable');
      $('.book_bck').show()
      $('.pVideoIconWrap').hide();
      $('.pActivityDesc').css("width", "100%");
      $('.pActivityDesc').html(" ");
      $(p.mShell).find(".pActivityHeader").html(data.screenData.SectionHeading);
      hideLoader();
      console.log(data);
      httpRequest(data.screenData.ref, "html", function (_data) {
        $(".pActivityDesc").html(_data);

        $(p.mShell).find('.pActivityArea .pActivityBody').mCustomScrollbar("destroy");
        $(p.mShell).find('.pActivityArea .pActivityBody').mCustomScrollbar({
          theme: "dark-3",
          axis: "y",
          scrollInertia: 0,
          scrollButtons: {enable: false}
        });
        playerEvent();
      });

      p.currentType = "videoScreen";
      manageScreen("videoScreen");
      $('.pSubmenuButton').hide();
      $('.navButtons').hide();
    }

    function loadSummaryScreen(e, data) {
      var _tempScreenData = data.screenData;
      p.cSrc = _tempScreenData.objectNames;
      var vIconWrap = $(p.mShell).find(".pSummaryIconWrap")[0];
      var pVideoIconWrap = $(p.mShell).find(".pSummaryBody");
      $(p.mShell).find(".pSummaryIconWrap").not(":first").remove();
      for (var i in _tempScreenData.objectNames) {
        $(vIconWrap).clone().appendTo(pVideoIconWrap);
      }
      $(vIconWrap).last().remove();
      $(p.mShell).find(".pSummaryIconWrap").each(function (i) {
        $(this).find(".pSummaryIcon").css("background-image", "url('assets/images/" + _tempScreenData.objectNames[i] + "@2x.png')");
        $(this).attr("data-ind", i);
      });
      p.currentType = "summary";
      manageScreen("summary");
      playerEvent();
    }
    function loadLabMenu(e, data) {
      var labsData = data.screenData;
      var labsWrapper = $(p.mShell).find(".pLabsWrapper");
      labsWrapper.find(".labMenuHeader").html(labsData.title);
      labsWrapper.find(".labMenuIntro").html(labsData.intro);
      $(p.mShell).find(".pMenu").addClass('pDisable');
      $(p.mShell).find(".lab_bck").hide();
      $(p.mShell).find(".book_bck").show();
      labsWrapper.find(".pLeftWrapper").html("");
      labsWrapper.find(".pRightWrapper").html("");
      var chapWrapper, chapTitle;
      labsData.chapters.forEach(function (chapter) {
        chapWrapper = $(createElement({tagName: "div"})).addClass("pLabChapterWrapper");
        chapWrapper.appendTo(chapter.left ? labsWrapper.find(".pLeftWrapper") : labsWrapper.find(".pRightWrapper"));
        $(createElement({tagName: "div"})).addClass("pLabChapterTitle").appendTo(chapWrapper).html(chapter.title).css(chapter.icon ? chapter.icon : {});
        chapter.labs.forEach(function (lab) {
          $(createElement({tagName: "div"})).addClass("pLabTitle").appendTo(chapWrapper).html(lab.title).attr("data-href", lab.href).attr("data-pageTitle", lab.pageTitle);
        });
        if (chapter.bottomGap) {
          $(createElement({tagName: "div"})).addClass("pLabBottomGap").appendTo(chapWrapper).css("padding-bottom", chapter.bottomGap);
        }
      });
      labsWrapper.mCustomScrollbar({
        theme: "dark-3",
        axis: "y",
        scrollInertia: 0,
        scrollButtons: {enable: false}
      });
      playerbtnManager({type: "labmenu"});
      playerEvent();
    }
    function loadQuizCheck(e, data) {
      data.videoPlayer = videoPlayer;
      if (data.screenData.hasOwnProperty('json')) {
        $('.pQuizCheck .pQuizStepWrap').hide();
        $('.pQuizCheck .pAnsWrap').hide();
        hideLoader();
      } else {
        quizCheck.init(data);
      }
      p.currentType = "quizcheck";
      manageScreen("quizcheck");
    }
    function loadQuizBoard(e, data) {
      data.videoPlayer = videoPlayer;
      p.currentType = "quizboard";
      if (data.screenData.hasOwnProperty('json')) {

        hideLoader();
      } else {
        quizBoard.init(data)
      }
      manageScreen("quizboard");
    }
    function manageScreen(type) {
      $('.pSubmenuButton').show();
      $('.navButtons').show();
      $('.pActivityWrapper').show();
      $('.pBookWrapper').hide();
      $(p.mShell).find('.pQuizBoard_bck').hide();
      $('.quizNavButtons').hide();
      switch (type) {
        case "summary":
          $(p.mShell).find('.pActivitySummary').show();
          $(p.mShell).find('.pQuizBoard').hide();
          $(p.mShell).find('.pQuizCheck').hide();
          $(p.mShell).find('.pActivityArea').hide();
          $(p.mShell).find('.pJsActWrapper').hide();
          break;
        case "quizboard":

          $(p.mShell).find('.pQuizBoard').show();
          $(p.mShell).find('.pQuizBoard .pActivityBody').show();
          $(p.mShell).find('.pQuizBoard .pQuizboard_ques_wrap').hide();
          $(p.mShell).find('.pQuizCheck').hide();
          $(p.mShell).find('.pActivityArea').hide();
          $(p.mShell).find('.pActivitySummary').hide();
          $(p.mShell).find('.pJsActWrapper').hide();
          break;
        case "quizcheck":
          $(p.mShell).find('.pQuizCheck').show();
          $(p.mShell).find('.pQuizBoard').hide();
          $(p.mShell).find('.pActivityArea').hide();
          $(p.mShell).find('.pActivitySummary').hide();
          $(p.mShell).find('.pJsActWrapper').hide();
          break;
        case "videoScreen":
          $(p.mShell).find('.pActivityArea').show();
          $(p.mShell).find('.pQuizBoard').hide();
          $(p.mShell).find('.pQuizCheck').hide();
          $(p.mShell).find('.pActivitySummary').hide();
          $(p.mShell).find('.pJsActWrapper').hide();
          break;
        case "labmenu":
          $(p.mShell).find('.pActivityArea').hide();
          $(p.mShell).find('.pQuizBoard').hide();
          $(p.mShell).find('.pQuizCheck').hide();
          $(p.mShell).find('.pActivitySummary').hide();
          $(p.mShell).find('.pJsActWrapper').hide();
          break;
        case "jsact":
          $('.pActivityWrapper').hide();
          $(p.mShell).find('.pActivityArea').hide();
          $(p.mShell).find('.pQuizBoard').hide();
          $(p.mShell).find('.pQuizCheck').hide();
          $(p.mShell).find('.pActivitySummary').hide();
          $(p.mShell).find('.pJsActWrapper').show();
          break;
      }
    }
    function playerEvent() {
      if (!device) {
        $(p.mShell).find(".pButtons,.pTopic").not('.noLink').off("mouseover", mouseover).on("mouseover", mouseover);
        $(p.mShell).find(".pButtons,.pTopic").not('.noLink').off("mouseout", mouseout).on("mouseout", mouseout);
        $(p.mShell).find(".std_act_link").off("mouseover", mouseover).on("mouseover", mouseover);
        $(p.mShell).find(".std_act_link").off("mouseout", mouseout).on("mouseout", mouseout);
        $(p.mShell).find(".pChapName,.pSubTopicName").off("mouseover", mouseover).on("mouseover", mouseover);
        $(p.mShell).find(".pChapName,.pSubTopicName").off("mouseout", mouseout).on("mouseout", mouseout);
        $(p.mShell).find(".videoWrapper").off("mouseover", mouseover).on("mouseover", mouseover);
        $(p.mShell).find(".videoWrapper").off("mouseout", mouseout).on("mouseout", mouseout);
        $(p.mShell).find(".pVolume").off("mouseover", mouseover).on("mouseover", mouseover);
        $(p.mShell).find(".pVolume").off("mouseout", mouseout).on("mouseout", mouseout);
        $(p.mShell).find(".pLabTitle").off("mouseover", mouseover).on("mouseover", mouseover); //---->
        $(p.mShell).find(".pLabTitle").off("mouseout", mouseout).on("mouseout", mouseout); //---->
        $(p.mShell).find(".pLabSubMenuTopic").off("mouseover", mouseover).on("mouseover", mouseover); //---->
        $(p.mShell).find(".pLabSubMenuTopic").off("mouseout", mouseout).on("mouseout", mouseout); //---->
        $(p.mShell).find(".pLabSubMenuButton").off("mouseover", mouseover).on("mouseover", mouseover); //---->
        $(p.mShell).find(".pLabSubMenuButton").off("mouseout", mouseout).on("mouseout", mouseout); //---->
      }
      $(p.mShell).find(".std_act_link").off(mouseEvents.up, std_act_linkUp).on(mouseEvents.up, std_act_linkUp);
      $(p.mShell).find(".pButtons").off(mouseEvents.down, mousedown).on(mouseEvents.down, mousedown);
      $(p.mShell).find(".pButtons").off(mouseEvents.up, mouseup).on(mouseEvents.up, mouseup);
      $(p.mShell).find(".pChapName").off(mouseEvents.down, mousedown).on(mouseEvents.down, mousedown);
      $(p.mShell).find(".pChapName").off(mouseEvents.up, chapterUp).on(mouseEvents.up, chapterUp);
      $(p.mShell).find(".pLabTitle").off(mouseEvents.down, mousedown).on(mouseEvents.down, mousedown); //---->
      $(p.mShell).find(".pLabTitle").off("click", labChapterUp).on("click", labChapterUp); //---->
      $(p.mShell).find(".pLabSubMenuTopic").off(mouseEvents.down, mousedown).on(mouseEvents.down, mousedown); //---->
      $(p.mShell).find(".pLabSubMenuTopic").off("click", labSubTopicUp).on("click", labSubTopicUp); //---->
      $(p.mShell).find(".pTopic,.pSubTopicWrapper").not('.noLink,.hyperLink').off(mouseEvents.up, topicUp).on(mouseEvents.up, topicUp);
      $(p.mShell).find(".pVideoIcon,.pSummaryIconWrap,.pjumpToVideo").off(mouseEvents.up, VideoIconUp).on(mouseEvents.up, VideoIconUp);
      $(p.mShell).find(".pjumpToTopic").off(mouseEvents.up, topicUp).on(mouseEvents.up, topicUp);
      if (device) {
        $(p.mShell).find(".videoWrapper").off(mouseEvents.up, videoUp).on(mouseEvents.up, videoUp);
      }
    }
    function topicUp(e) {
      var chap, unit, section, data, subsection, vIndex;
      chap = $(this).attr("data-chap");
      unit = $(this).attr("data-topic");
      section = $(this).attr("data-subtopic");
      subsection = $(this).attr("data-subsection");
      vIndex = $(this).attr("data-vIndex");
      if (!$(this).hasClass("child")) {
        e.stopImmediatePropagation();
        $('.tActive').removeClass('tActive');
        $(this).addClass('tActive');
        if (!$(this).hasClass("pSubTopicWrapper")) {
          $(document).trigger("loadSubMenu", {"chap": chap, unit: unit, section: section});
        }
        if (typeof subsection == typeof undefined || subsection == false) {
          subsection = 0;
        }

        if (typeof vIndex == typeof undefined || (vIndex == false && vIndex != "0")) {
          data = {"chap": chap, unit: unit, section: section, subSection: subsection};
        } else {
          data = {"chap": chap, unit: unit, section: section, subSection: subsection, vIndex: vIndex};
        }
        $(document).trigger("loadSpecificTopic", data);
      } else {
        $(this).find(".psubsectionWrapper").slideToggle();
      }
    }
    function std_act_linkUp(e) {
      showLoader();
      var _this = $(this);
      _this.removeClass("pHover").removeClass("pDown");
      var _data = {}
      _data.SectionHeading = _this.text();
      _data.ref = _this.attr('data-href');
      $(document).trigger("loadAdditionalResource", {screenData: _data})
    }
    function videoUp() {
      if ($(this).hasClass("pHover")) {
        var _this = $(this);
        setTimeout(function () {
          _this.removeClass("pHover");
        }, 200)

      } else {
        $(this).addClass("pHover");
      }
    }
    function loadJSActivity(ref) {
      var dimensions = JSActivityDimensions.hasOwnProperty(ref) ? JSActivityDimensions[ref] : {width: 760, height: 600}
      $("#pJSActFrame").attr("src", "course/JSActivities/" + ref + "/index.html").css("width", dimensions.width).css("height", dimensions.height);
      $(".jsClose").off("click").on("click", function () {
        $("#pJSActFrame").attr("src", "");
        playerbtnManager("jsClose");
      });
      manageScreen("jsact");
      $(window).off("resize", resizeJSActivity).on("resize", resizeJSActivity);
      resizeJSActivity();
    }

    function VideoIconUp() {

      if ($(this).attr("data-jsact")) {
        loadJSActivity($(this).attr("data-jsact"));
      } else if ($(this).hasClass("activity")) {
        alert("Activity not included");
      } else {
        var vFlag = $(this).attr('data-video');
        var ind = $(this).attr("data-ind");
        if (typeof vFlag != typeof undefined) {
          var vref = $(this).attr('data-vref');
          videoPlayer.initiateVideo({src: [vref]});
          ind = 0;
        } else {
          videoPlayer.initiateVideo({src: p.cSrc});
        }
        videoPlayer.playVideo(ind);
      }
    }
    function loadOnlyVideo(e, data) {
      $('.pActivityWrapper').show();
      $('.pBookWrapper').hide();
      $(p.mShell).find('.pActivityArea').show();
      $(p.mShell).find('.pQuizBoard').hide();
      $(p.mShell).find('.pQuizCheck').hide();
      $(p.mShell).find('.pActivitySummary').hide();
      $(p.mShell).find('.pJsActWrapper').hide();
      $(p.mShell).find('.pNext').css('z-index', '99');
      $(p.mShell).find('.pBack').css('z-index', '99');
      $(p.mShell).find('.vClose').hide();
      $('.videoPlay').show();
      $('.playAns').remove();
      if (data.hasOwnProperty("playFree")) {
        var temp = document.createElement("div");
        $(temp).html("Play Answer").appendTo($('.videoWrapper'));
        $(temp).addClass('playAns').css({
          "position": "absolute",
          right: "10px",
          bottom: "50px",
          "height": "30px",
          "line-height": "30px",
          "font-size": "14px",
          "padding": "0px 10px",
          "cursor": "pointer",
          "border-radius": "5px",
          "box-shadow": "0 0 1px 0px black",
          "background-color": "#388ca4",
          "color": "white",
        });
        videoPlayer.initiateVideo({src: [data.screenData.quesref]});
        videoPlayer.playVideo(0, true);
        $(temp).off("mouseout", mouseout).on("mouseout", mouseout);
        $(temp).off("mouseover", mouseover).on("mouseover", mouseover);
        $(temp).off(mouseEvents.down).on(mouseEvents.down, function () {
          $(temp).remove();
          videoPlayer.initiateVideo({src: [data.screenData.ansref]});
          videoPlayer.playVideo(0);
        });
      } else
      {
        videoPlayer.initiateVideo({src: [data.screenData.ref]});
        videoPlayer.playVideo(0, true);
      }
    }
    function loadScreen(e, data) {

    }
    function mouseover() {
      btnStateReset();
      if (!$(this).hasClass("pDisable")) {
        $(this).addClass("pHover");
        $(this).addClass("mouseIn");
      }
    }
    function mouseout() {
      btnStateReset();
      $(this).removeClass("pHover");
      $(this).removeClass("mouseIn");
    }
    function mousedown() {
      btnStateReset();
      if (!$(this).hasClass("pDisable")) {
        $(this).addClass("pDown");
      }
    }
    function mouseup(e) {
      btnStateReset();
      //e.stopImmediatePropagation();
      if (!$(this).hasClass("pDisable")) {

        playerbtnManager({
          type: $(this).attr("data-type"),
          _this: $(this)
        });
      }
    }
    function chapterUp() {
      var topic_no = $(this).attr('data-chapter');
      $(p.mShell).find(".pChapName").removeClass("active");
      $(this).addClass("active");
      loadTopic(topic_no)
    }
    function labChapterUp(e) {//---->
      $('.pLabsWrapper').hide();
      loadLabPage($(e.target).attr("data-pageTitle") ? $(e.target).attr("data-pageTitle") : $(e.target).text(), $(e.target).attr("data-href"), $(e.target).attr("data-type"));
    }//---->
    function labSubTopicUp(e) {//---->
      var i = $(e.target).attr("data-index") * 1;
      var ele = $(p.mShell).find(".pLabPageWrapper").find("[data-index=" + i + "]");
      $(p.mShell).find(".pLabPageContentWrapper").mCustomScrollbar("scrollTo", ele);
    }//---->
    function loadLabPage(title, href, type) {//---->
      if (href.split(".")[1] != "html") {
        $('.pLabsWrapper').show();
        window.open(href/* .split("~").join("/") */);
        return false;
      }
      var _href = href.replace(/\//g, '~')
      _href = _href.replace(/_/g, '-');
      $(p.mShell).find(".book_bck").hide();
      $(p.mShell).find(".lab_bck").show();
      //
      blockHashEvent = true;
      location.hash = "type_labPage/title_" + title + "/href_" + _href + "/labtype_" + type;
      setTimeout(function () {
        blockHashEvent = false;
      }, 500);
      //
      if (type && type.toLowerCase() == "popup") {

      } else {
        var mainWrapper = $(p.mShell).find(".pLabPageWrapper");
        $(p.mShell).find(".pLabPageWrapper").show();
        var contentWrapper = $(p.mShell).find(".pLabPageContentWrapper");
        contentWrapper.mCustomScrollbar("destroy").empty();
        var sideMenuWrapper = $(p.mShell).find(".pLabSubMenu");
        sideMenuWrapper.empty().css("opacity", 0);
        loadHtml({
          src: href,
          parent: contentWrapper,
          callback: function () {
            mainWrapper.find(".pActivityHeader").html(title);
            contentWrapper.find(".pLabAnswerWrapper")//.addClass("pCloseLabAnswerWrapper");
            contentWrapper.find(".pLabQuestionArrow").addClass("pLabQuestionArrowUp");
            contentWrapper.find(".pLabQText").on("click", function (e) {
              $(this).parent().find(".pLabAnswerWrapper").toggleClass("pCloseLabAnswerWrapper");
              $(this).parent().find(".pLabQuestionArrow").toggleClass("pLabQuestionArrowUp");
            });
            contentWrapper.find(".pLabQuestion").each(function (e) {
              if ($(this).find(".pLabAnswerWrapper").length == 0) {
                $(this).find(".pLabQuestionArrow").hide();
                $(this).find(".pLabQText").css("cursor", "default");
              } else {
                if ($(this).find(".pLabAnswerTable").length > 0) {
                  $(this).find(".pLabSaveButton").css("left", 12 + $(this).find(".pLabAnswerTable").width()).css("right", "none");
                }
              }
            });
            contentWrapper.find(".pExerciseButton").on("click", function (e) {
              window.open($(this).attr("data-href"), "lab", "toolbar=yes,scrollbars=yes,resizable=yes,top=0,left=0,width=760,height=600");
            });
            var list = [];
            contentWrapper.children().each(function (i, ele) {
              $(ele).attr("data-index", i);
              sideMenuWrapper.append("<div class='pLabSubMenuTopic' data-index=" + i + ">" + (i == 0 ? "Introduction" : $(ele).find(".pExcersiseTitle").text()) + "</div>");
            });
            sideMenuWrapper.css("left", -sideMenuWrapper.outerWidth(true)).data("open", false);
            setTimeout(function () {
              sideMenuWrapper.css("opacity", 1);
            }, 800);
            contentWrapper.mCustomScrollbar({
              theme: "dark-3",
              axis: "y",
              scrollInertia: 0,
              scrollButtons: {enable: false}
            });
            playerEvent();
          }
        });
      }
    }//---->
    function btnStateReset() {
      $(p.mShell).find(".pButtons").removeClass("pHover").removeClass("pDown");
      $(p.mShell).find(".pChapName").removeClass("pHover").removeClass("pDown");
      $(".mPrevwrap").removeClass("pDown");
      $(".mNextwrap").removeClass("pDown");
    }
    function playerbtnManager(_obj) {
      btnStateReset();
      switch (_obj.type) {
        case "menu":

          if (!_obj._this.hasClass("pSelected")) {
            $(p.mShell).find(".pMenu").addClass('pSelected')
            $(p.mShell).find(".pMenuWrap").slideDown();
          } else {
            overlayDown();
          }

          break;
        case "pHistory":

          manageScreen("quizboard");
          overlayDown()
          break;
        case "nHistory":
          overlayDown()
          break;
        case "book":
          $(p.mShell).find(".pMenu").removeClass('pDisable');
          $(p.mShell).find(".book_bck").hide();
          location.hash = "type_" + _obj.type;
          if ($(p.mShell).find(".videoWrapper").hasClass("vOpen")) {
            videoPlayer.stopVideo();
          }
          $(p.mShell).find('.pQuizBoard_bck').hide();
          $('.pActivityWrapper').hide();
          $(p.mShell).find('.pJsActWrapper').hide();
          $('.pLabsWrapper').hide();
          $('.pBreadCrumb').hide();
          $(p.mShell).find(".pLabPageWrapper").hide();
          $('.pBookWrapper').show();
          overlayDown()
          break;
        case "labmenu"://---->
          $('.pActivityWrapper').hide();
          $(p.mShell).find('.pJsActWrapper').hide();
          $('.pBookWrapper').hide();
          $('.pLabsWrapper').show();
          $(p.mShell).find(".pLabPageWrapper").hide();
          overlayDown()
          break; //---->
        case "homework":
          location.hash = "type_" + _obj.type;
          $('.pActivityWrapper').show();
          $(p.mShell).find('.pJsActWrapper').hide();
          $('.pBookWrapper').hide();
          overlayDown()
          break;
        case "grades":
          overlayDown()
          break;
        case "factbook":
          overlayDown()
          break;
        case "setting":
          overlayDown()
          break;
        case "help":
          overlayDown()
          break;
        case "logout":
          overlayDown()
          break;
        case "play":
          overlayDown()
          videoPlayer.playControl(_obj)
          break;
        case "replay":
          overlayDown()
          videoPlayer.replay(_obj)
          break;
        case "volume":
          overlayDown()
          $(p.mShell).find(".pVolumeSlider").toggle("slide", {direction: "down"});
//          if ($(p.mShell).find(".pVolume").hasClass("on")) {
//            $(p.mShell).find(".pVolume").addClass("mute").removeClass("on");
//            videoPlayer.setVolume(false);
//          } else {
//            $(p.mShell).find(".pVolume").removeClass("mute").addClass("on");
//            videoPlayer.setVolume(true);
//          }
          break;
        case "prev-video":
          overlayDown()
          videoPlayer.preVideo();
          break;
        case "next-video":
          overlayDown()
          videoPlayer.nextVideo();
          break;
        case "Next":
          overlayDown()
          if ($(p.mShell).find(".videoWrapper").hasClass("vOpen")) {
            videoPlayer.stopVideo();
          }
          $(document).trigger("loadNext");
          break;
        case "Back":
          overlayDown()
          if ($(p.mShell).find(".videoWrapper").hasClass("vOpen")) {
            videoPlayer.stopVideo();
          }
          $(document).trigger("loadPrev");
          break;
        case "submenu":
          overlayDown()
          $('.pSubMenuWrap').toggleClass("open");
          $('.pSubmenuButton').toggleClass("open");
          break;
        case "vClose":
          overlayDown()
          videoPlayer.stopVideo();
          manageScreen(p.currentType);
          break;
        case "jsClose":
          overlayDown()
          manageScreen(p.currentType);
          break;
        case "labs_back":
          $('.pActivityWrapper').hide();
          $(p.mShell).find('.pJsActWrapper').hide();
          $('.pBookWrapper').hide();
          $(p.mShell).find(".lab_bck").hide();
          $(p.mShell).find(".book_bck").show();
          $('.pLabsWrapper').show();
          $(p.mShell).find(".pLabPageWrapper").hide();
          break;
      }
    }
    function overlayDown() {

      $(p.mShell).find(".pMenu").removeClass('pSelected');
      $(p.mShell).find(".pMenuWrap").slideUp();
    }
    this.loadScreen = function (data) {
      console.log(data);
      if (data.type != "labPage") {
        playerbtnManager(data);
      } else {
        $('.pActivityWrapper').hide();
        $(p.mShell).find('.pJsActWrapper').hide();
        $('.pBookWrapper').hide();
        $('.pLabsWrapper').hide();
        loadLabPage(data.data.title, data.data.href);
      }
    }
  }