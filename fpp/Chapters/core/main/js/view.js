  function View() {
  var thisObj = this;
    var device = BrowserDetect.any();
    var videoPlayer = new VideoPlayer();
    var quizCheck = new QuizCheck();
    var quizBoard = new QuizBoard();
    var labData = new LabData();
    var p = new Object();
    var coreData;
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
    p.usertype;
    p.mShell = null; //html shell
    p.bookData = {};
    eventListener();
    var lessonFlag = false;
    function eventListener() {
      $(document).off("createShell", createShell).on("createShell", createShell);
      $(document).off("getBookData", getBookData).on("getBookData", getBookData);
      $(document).off("loadScreen", loadScreen).on("loadScreen", loadScreen);
      $(document).off("navigationState", navigationState).on("navigationState", navigationState);
      $(document).off("loadActivityScreen", loadActivityScreen).on("loadActivityScreen", loadActivityScreen);
      $(document).off("loadSummaryScreen", loadSummaryScreen).on("loadSummaryScreen", loadSummaryScreen);
      $(document).off("loadPdfScreen", loadPdfScreen).on("loadPdfScreen", loadPdfScreen);
      $(document).off("loadQuizCheck", loadQuizCheck).on("loadQuizCheck", loadQuizCheck);
      $(document).off("loadQuizBoard", loadQuizBoard).on("loadQuizBoard", loadQuizBoard);
      $(document).off("loadLabMenu", loadLabMenu).on("loadLabMenu", loadLabMenu);
      $(document).off("loadSubMenu", loadSubMenu).on("loadSubMenu", loadSubMenu);
      $(document).off("loadOnlyVideo", loadOnlyVideo).on("loadOnlyVideo", loadOnlyVideo);
      $(document).off("loadAdditionalResource", loadAdditionalResource).on("loadAdditionalResource", loadAdditionalResource);
      $(document).off("showSearchBox", showSearchBox).on("showSearchBox", showSearchBox);
      // Call overlayDown on mouseup rather than mousedown. This is intended to fix the issue with a slideUp menu option not responding.
      //$(document).off(mouseEvents.down).on(mouseEvents.down, function (e) {
      $(document).off(mouseEvents.down).on(mouseEvents.down, function (e) {
        overlayDown(e);
      });
    }
  function getBookData(e, data) {
    p.bookData = data.bookData;     coreData = data;
  }
  this.updateBook = function (book) {
  if (book) {
    lessonFlag = false;
  p.bookData = coreData.bookData;
  } else {
  lessonFlag = true;
  p.bookData = coreData.bookData.lessonPlan;
  }

  }
  this.setUserType = function (type) {
  p.usertype = type;
  }
  function createShell(e) {   //create shell dom
  if (p.mShell != null) {
  $(p.mShell).empty();
  }
      var tempDiv = "<div class='_tempDiv' style='position:absolute;top:-9999999999;left:-999999999'></div>"
      $('body').append(tempDiv);
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
    $.getJSON("course/json/searchBook/searchBook.json", function (data) {
    p.searchBook = data.data;
      createPlayer("header");
    });
    // search benchmark code
  $.getJSON("course/json/searchBook/searchCode.json", function (data) {
    p.searchCode = data;
    });
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
      next: "help",
    });
    break;
      case "help":
    loadHtml({
      src: "course/template/help.html",
      parent: ".pActivityWrapper",
      next: "videoPlayer",
        callback: function () {
      $(".pHelpBody").mCustomScrollbar({
        theme: "dark-3",
      axis: "y",
    scrollInertia: 0, mouseWheelPixels: 50,
    scrollButtons: {enable: true}
      });
      }
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
      next: "setting",
    callback: function () {
    $(p.mShell).find(".pLabSubMenuButton").click(openCloseLabSubMenu);
      }
    });
      break; //---->
    case "setting":
      loadHtml({
      src: "course/template/setting.html",
        parent: ".pActivityWrapper",
      callback: function () {
        console.log("hide loader called");
        $(".pSettingBody").mCustomScrollbar({
        theme: "dark-3",
      axis: "y",
        scrollInertia: 0, mouseWheelPixels: 50,
        scrollButtons: {enable: true}
        });
    $('.activityLoader').hide();
  updateView();
  updateUrl();
  playerEvent();
      }
    });
    break;
  }
  }
  function updateView() {
    switch (p.usertype) {
    case "Student":
    $('.lessonPlans').next('.pMenuSeperator').remove();
    $('.lessonPlans').remove();
    $('.admin').next('.pMenuSeperator').remove();
    $('.admin').remove();
    $('.pGrades').next('.pMenuSeperator').remove();
    $('.pGrades').remove();
    $(".pSettingComp[data-type='email']").remove();
   
  $(".pMainHelpWrapper .pButtons[data-type = 'TeacherHelp']").remove();
  $(".pMainHelpWrapper .userManual").remove();
  $(".phelpInnerWrap[data-type = 'TeacherHelpBody']").remove();
    break;
  }
  }
  function openCloseLabSubMenu() {
    var state = $(p.mShell).find(".pLabSubMenu").data("open");
    if (!state) {
  $(p.mShell).find(".pLabSubMenu").css("left", 0);
    $(this).addClass("pSelected open");
  } else {
  $(p.mShell).find(".pLabSubMenu").css("left", - $(p.mShell).find(".pLabSubMenu").outerWidth(true));
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
  scrollInertia: 0, mouseWheelPixels: 50,
      scrollButtons: {enable: true}
    });
    }//---->

  function initBook() {
    $(p.mShell).find('.pChapBody').mCustomScrollbar("destroy");     var _chapWrap = $('.pChapBody')[0];
    _chapWrap = $(_chapWrap);
    var _chapMain = $('.pChapName')[0];     _chapMain = $(_chapMain);
  var _sep = $('.pChapBody .pChapSeperator')[0];
  _sep = $(_sep);
    if (lessonFlag) {
    $('.pChapHeader').html("Lesson Plans")
  } else {
    $('.pChapHeader').html("Table of Contents")
  }

    p.bookData;
    $('.pChapName').removeClass('active');
    $('.pChapName').not(":first").remove();
  $('.pChapBody .pChapSeperator').not(":first").remove();
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
    $(document).trigger("loadSubMenu", {"chap": 1});
    $(p.mShell).find('.pChapBody').mCustomScrollbar({
  theme: "dark-3",
  axis: "y",
  scrollInertia: 0, mouseWheelPixels: 50,
    scrollButtons: {enable: true}
  });
  }

    function loadSubMenu(e, data) {
  $(p.mShell).find('.innerMenuWrap').mCustomScrollbar("destroy");
    var _html = "<div class='pSubTopicWrapper pSubMenuTopicHeader'> <div class='pSubTopicName'>Ch 1 : One-Dimensional</div><div class='pChapSeperator'></div><div class='pSubTopicInnerMainWrap'> <div class='pSubTopicInnerWrap'> <div class='pSubTopicName'>Ch 1 : One-Dimensional</div><div class='pChapSeperator'></div></div></div></div>";
    var _subchapWrap = $('.innerMenuWrap')[0];
    $(_subchapWrap).html(_html);
    var _subchapMain = $('.pSubTopicWrapper')[0];
    $('.pSubMenuWrap,.pSubmenuButton').removeClass("open");
  $(p.mShell).find(".pSubTopicWrapper").removeClass("tActive").not(":first").remove();
  var temp = p.bookData.chapters[data["chap"]];
  for (var i in temp.unit) {
  for (var j in temp.unit[i]["section"]) {
  if (j == 0) {
    $(_subchapMain).clone().addClass("pSubMenuTopicHeader").appendTo(_subchapWrap).html()
  }

  }
  }
    $('.pSubTopicName').removeClass("pHover");
    $('.pSubTopicWrapper').removeClass("pHover").last().remove();
    var _pSubTopicInnerWrap = $('.pSubTopicInnerWrap')[0];
  var _pSubTopicInnerMainWrap = $('.pSubTopicInnerMainWrap')[0];
    $('.pSubTopicWrapper').each(function (i) {
  if (!lessonFlag) {
  $(this).find('.pSubTopicName').html("<span class='accSysmbol'>+</span> Lesson " + (Number(i) + 1) + ": " + temp.unit[i]["section"][0]["SectionTitle"])
  } else {
    $(this).find('.pSubTopicName').html("<span class='accSysmbol'>+</span> " + temp.unit[i]["section"][0]["SectionTitle"])
  }
  var _mainWrpa = $(this).find('.pSubTopicInnerMainWrap');
    for (var j in temp.unit[i]["section"]) {

  if (j == 0) {
  if (!lessonFlag && !temp.unit[i]["section"][j].hasOwnProperty("link")) {
  $(_pSubTopicInnerWrap).clone().appendTo(_mainWrpa).attr("data-subsection", 0).attr("data-chap", data["chap"]).attr("data-topic", i).attr("data-subtopic", j).addClass("pSubMenuTopic").find('.pSubTopicName').html("Lesson Overview");   }
  } else {
  if (!lessonFlag) {
  if (temp.unit[i]['section'][j]["subsection"].length > 1) {
  $(_pSubTopicInnerWrap).clone().appendTo(_mainWrpa).addClass("pSubMenuTopicHeader").addClass("child").attr("data-chap", data["chap"]).attr("data-topic", i).attr("data-subtopic", j).find('.pSubTopicName').html("<span class='accSysmbol'>+</span>" + (i + 1) + "." + j + " " + temp.unit[i]['section'][j]["SectionTitle"]);
  } else {
  $(_pSubTopicInnerWrap).clone().appendTo(_mainWrpa).addClass("pSubMenuTopic").attr("data-chap", data["chap"]).attr("data-subsection", 0).attr("data-topic", i).attr("data-subtopic", j).find('.pSubTopicName').html((i + 1) + "." + j + " " + temp.unit[i]['section'][j]["SectionTitle"]);
  }
  } else {
  if (temp.unit[i]['section'][j]["subsection"].length > 1) {
  $(_pSubTopicInnerWrap).clone().appendTo(_mainWrpa).addClass("pSubMenuTopicHeader").addClass("child").attr("data-chap", data["chap"]).attr("data-topic", i).attr("data-subtopic", j).find('.pSubTopicName').html("<span class='accSysmbol'>+</span>" + temp.unit[i]['section'][j]["SectionTitle"]);
  } else {
  $(_pSubTopicInnerWrap).clone().appendTo(_mainWrpa).addClass("pSubMenuTopic").attr("data-chap", data["chap"]).attr("data-subsection", 0).attr("data-topic", i).attr("data-subtopic", j).find('.pSubTopicName').html(temp.unit[i]['section'][j]["SectionTitle"]);
  }
  }
  }
    }

  $(this).find('.pSubTopicInnerMainWrap .pSubTopicInnerWrap').first().remove();
  });
    $(p.mShell).find('.pSubTopicInnerWrap.child').each(function () {
  var chap, unit, section;
    chap = Number($(this).attr("data-chap"));
    unit = Number($(this).attr("data-topic"));
    section = Number($(this).attr("data-subtopic"));
    $(_pSubTopicInnerMainWrap).clone().appendTo($(this));
    $(this).find('.pSubTopicInnerMainWrap .pSubTopicInnerWrap').not(":first").removeClass("child").remove();
    var _mainWrpa = $(this).find('.pSubTopicInnerMainWrap');
  for (var i in temp.unit[unit]['section'][section]["subsection"]) {
  i = Number(i);
    var chr = String.fromCharCode(97 + i);
    if (!lessonFlag) {
  $(_pSubTopicInnerWrap).clone().appendTo(_mainWrpa).addClass("pSubMenuTopic").attr("data-chap", data["chap"]).attr("data-topic", unit).attr("data-subtopic", section).attr('data-subsection', i).find('.pSubTopicName').html((unit + 1) + "." + section + "." + chr + " " + temp.unit[unit]['section'][section]["subsection"][i]["SectionHeading"]);
  } else {
  if (section == 1) {
  $(_pSubTopicInnerWrap).clone().appendTo(_mainWrpa).addClass("pSubMenuTopic").attr("data-chap", data["chap"]).attr("data-topic", unit).attr("data-subtopic", section).attr('data-subsection', i).find('.pSubTopicName').html(temp.unit[unit]['section'][section]["subsection"][i]["SectionHeading"]);
  } else {
  $(_pSubTopicInnerWrap).clone().appendTo(_mainWrpa).addClass("pSubMenuTopic").attr("data-chap", data["chap"]).attr("data-topic", unit).attr("data-subtopic", section).attr('data-subsection', i).find('.pSubTopicName').html("Lesson " + (section - 1) + "." + chr + "  " + temp.unit[unit]['section'][section]["subsection"][i]["SectionHeading"]);
  }
  }
    }
    $(this).find('.pSubTopicInnerMainWrap .pSubTopicInnerWrap').first().remove();
  });
    $(p.mShell).find('.innerMenuWrap').mCustomScrollbar({
  theme: "dark-3",
    axis: "y",
  scrollInertia: 0, mouseWheelPixels: 50,
  scrollButtons: {enable: true}
  });
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
    $(p.mShell).find(".pSubtopic").not(":first").remove();     $(p.mShell).find('.pTopicName').html("Ch " + (topic_no) + ": " + temp.title);
    var _pTopicHeading = $('.pTopicHeading');
    var _pSubtopic = $(".pSubtopic");
    var _pTopicBody = $('.pTopicBody');
    var _index = 0;
  for (var i in temp.unit) {
  var _index = 0;
    for (var j in temp.unit[i]["section"]) {
  if (!lessonFlag) {
  if (j == 0) {
  if (temp.unit[i]["section"][j].hasOwnProperty("link")) {
  if (!temp.unit[i]["section"][j].hasOwnProperty("number")) {
  _pTopicHeading.clone().appendTo(_pTopicBody).addClass("noLink").attr("data-chap", topic_no).attr("data-topic", i).attr("data-subtopic", j).html(temp.unit[i]["section"][j]["SectionTitle"])
  } else {
  _pTopicHeading.clone().appendTo(_pTopicBody).addClass("noLink").attr("data-chap", topic_no).attr("data-topic", i).attr("data-subtopic", j).html("Lesson " + (Number(i) + 1) + ": " + temp.unit[i]["section"][j]["SectionTitle"])
  }
  } else {
    _pTopicHeading.clone().appendTo(_pTopicBody).attr("data-chap", topic_no).attr("data-topic", i).attr("data-subtopic", j).html("Lesson " + (Number(i) + 1) + ": " + temp.unit[i]["section"][j]["SectionTitle"])
  }
  } else {
  _index++;
    if (temp.unit[i]["section"][j].hasOwnProperty("hyperLink")) {
  _pSubtopic.clone().appendTo(_pTopicBody).addClass("hyperLink").html(temp.unit[i]["section"][j]["href"])
  } else {
  if (temp.unit[i]["section"][j].hasOwnProperty("number")) {   _pSubtopic.clone().appendTo(_pTopicBody).attr("data-chap", topic_no).attr("data-topic", i).attr("data-subtopic", j).html(temp.unit[i]["section"][j]["SectionTitle"])
  } else {   _pSubtopic.clone().appendTo(_pTopicBody).attr("data-chap", topic_no).attr("data-topic", i).attr("data-subtopic", j).html((Number(i) + 1) + "." + _index + ": " + temp.unit[i]["section"][j]["SectionTitle"])
  }
  }
  }
  } else {
  if (j == 0) {
  if (temp.unit[i]["section"][j].hasOwnProperty("link")) {
  _pTopicHeading.clone().appendTo(_pTopicBody).addClass("noLink").attr("data-chap", topic_no).attr("data-topic", i).attr("data-subtopic", j).html(temp.unit[i]["section"][j]["SectionTitle"])
  } else {
    _pTopicHeading.clone().appendTo(_pTopicBody).attr("data-chap", topic_no).attr("data-topic", i).attr("data-subtopic", j).html(temp.unit[i]["section"][j]["SectionTitle"])
  }
  } else {
  _index++;
    if (temp.unit[i]["section"][j].hasOwnProperty("hyperLink")) {
  _pSubtopic.clone().appendTo(_pTopicBody).addClass("hyperLink").html(temp.unit[i]["section"][j]["href"])
    } else {   _pSubtopic.clone().appendTo(_pTopicBody).attr("data-chap", topic_no).attr("data-topic", i).attr("data-subtopic", j).html(temp.unit[i]["section"][j]["SectionTitle"])
  }
  }
  }
  }
  }
  _pTopicHeading.first().remove();
    _pSubtopic.first().remove();
    $(p.mShell).find('.pTopicBody').mCustomScrollbar({
  theme: "dark-3",
    axis: "y",
  scrollInertia: 0, mouseWheelPixels: 50,
  scrollButtons: {enable: true}
  });
  playerEvent();
  }
    function loadActivityScreen(e, data) {
    if (!data.hasOwnProperty("json")) {
    showLoader();     var _tempScreenData = data.screenData;
    p.cSrc = _tempScreenData.objNames;
  var desc = "";
    var lines;
    var max_height = 0;
    if (_tempScreenData.objNames.length > 0) {
    $('.pVideoIconWrap').show();
    $('.pActivityDesc').css("width", "calc(100% - 365px)");
    $('.pActivityDesc').css("text-align", "left");     var vIconWrap = $(p.mShell).find(".pVideoIconInnerWrap")[0];
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
    $(this).find(".vCaption").html("");     var txt = "";
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
   if (data.type == "activity" && data.hasOwnProperty("ref")) {
              $(this).attr("data-ref", data.ref);
            } else {
              $(this).removeAttr('data-ref')
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
  }   for (var j in _tempScreenData.secText) {
  desc += "<p>" + _tempScreenData.secText[j] + "</p>";
  }
    //$(p.mShell).find(".pVideoIcon").css("height", maxHeight + "px")
  $(p.mShell).find(".pActivityDesc").html(desc);
  $(p.mShell).find(".pActivityHeader").html(data.screenNo + " " + _tempScreenData.SectionHeading);
    $(p.mShell).find('.pActivityArea .pActivityBody').mCustomScrollbar({
  theme: "dark-3",
  axis: "y",
  scrollInertia: 0, mouseWheelPixels: 50,
    scrollButtons: {enable: true}
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
    $(p.mShell).find(".pActivityHeader").html(data.screenNo + " " + data.screenData.SectionHeading);
    $(p.mShell).find(".pActivityHeader").html(data.screenData.SectionHeading);
    hideLoader();
      httpRequest(data.screenData.ref, "html", function (_data) {
      $(".pActivityDesc").html(_data);
    $(p.mShell).find('.pActivityArea .pActivityBody').mCustomScrollbar("destroy");
      $(p.mShell).find('.pActivityArea .pActivityBody').mCustomScrollbar({
    theme: "dark-3",
    axis: "y",
    scrollInertia: 0, mouseWheelPixels: 50,
    scrollButtons: {enable: true}
    });
		if(data.screenData.hash != "undefined"){
			$(p.mShell).find('.pActivityArea .pActivityBody').mCustomScrollbar("scrollTo", $(p.mShell).find('.pActivityArea .pActivityBody').find("#" + data.screenData.hash)[0]);
		}
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
    $(p.mShell).find(".pSummaryHeader").html(data.screenNo + " " + "Summary");
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
    }     function loadPdfScreen(e, data) {
      var _tempScreenData = data.screenData;
 var page = 1;
      if (_tempScreenData.hasOwnProperty("page")) {
        page = _tempScreenData.page;
      }
    $(p.mShell).find(".pdfHeader").html(data.screenNo + " " + _tempScreenData.SectionHeading);

    $('.pdfBody').html("<iframe  id='myFrame' src='core/lib/web/viewer.html#../../../assets/pdf/" + _tempScreenData.ref + "' style='border: none; width: 100%; height: 100%;overflow: scroll' frameborder='0' data-page=" + page + "></iframe>")
    p.currentType = "pdfScreen";
      manageScreen("pdfScreen");
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
      var _labTopic = $(createElement({tagName: "div"}));
      if (chapter.hasOwnProperty("video")) {
    _labTopic.addClass("pLabTitle pjumpToVideo").appendTo(chapWrapper).html(lab.title).attr("data-video", true).attr("data-vref", lab.href).attr("data-pageTitle", lab.pageTitle);
      } else {
    _labTopic.addClass("pLabTitle").appendTo(chapWrapper).html(lab.title).attr("data-href", lab.href).attr("data-pageTitle", lab.pageTitle);
      }
    if (lab.hasOwnProperty("assign_id")) {
  _labTopic.attr("data-assign_id", lab.assign_id)
      } else {
    _labTopic.attr("data-assign_id", "")
      }
      });
      if (chapter.bottomGap) {
    $(createElement({tagName: "div"})).addClass("pLabBottomGap").appendTo(chapWrapper).css("padding-bottom", chapter.bottomGap);
    }
    });
  labsWrapper.mCustomScrollbar({
  theme: "dark-3",
      axis: "y",
  scrollInertia: 0, mouseWheelPixels: 50,
  scrollButtons: {enable: true}
    });
    p.currentType = "labmenu";
    playerbtnManager({type: "labmenu"});
    playerEvent();
  }
  function loadQuizCheck(e, data) {
    data.videoPlayer = videoPlayer;
  $(p.mShell).find(".pSummaryHeader").html(data.screenNo + " " + "Quickcheck");
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
    $(p.mShell).find(".pSummaryHeader").html(data.screenNo + " " + "Quizboard");
    if (data.screenData.hasOwnProperty('json')) {

  hideLoader();
    } else {
  quizBoard.init(data)
  }
    manageScreen("quizboard");
  }
    function manageScreen(type) {
  $(".pSearchAreaWrapper").hide();
    $('.pSubmenuButton').show();
    $('.navButtons').show();
    $('.pActivityWrapper').show();
    $('.pBookWrapper').hide();
    $(p.mShell).find('.pQuizBoard_bck').hide();
    $('.quizNavButtons').hide();
	 $('.pLabsWrapper').hide();
    $(p.mShell).find('#pdfViewer').hide();
    disableHeaderSearch(false);
    switch (type) {
    case "help":
    $(p.mShell).find('#pdfViewer').hide();
    $(p.mShell).find('.pMainHelpWrapper').show();
    $(p.mShell).find('.pSubmenuButton').hide();
    $(p.mShell).find('.navButtons').hide();
    $(p.mShell).find('.pActivityArea').hide();
    $(p.mShell).find('.pQuizBoard').hide();
    $(p.mShell).find('.pQuizCheck').hide();
    $(p.mShell).find('.pActivitySummary').hide();
    $(p.mShell).find('.pJsActWrapper').hide();
    $(p.mShell).find('.pSettingArea').hide();
    break;
    case "summary":
    $(p.mShell).find('.pActivitySummary').show();
    $(p.mShell).find('.pQuizBoard').hide();
    $(p.mShell).find('.pQuizCheck').hide();
    $(p.mShell).find('.pActivityArea').hide();
    $(p.mShell).find('.pJsActWrapper').hide();
    $(p.mShell).find('.pSettingArea').hide();
    $(p.mShell).find('.pMainHelpWrapper').hide();
    break;
        case "pdfScreen":
    $(p.mShell).find('#pdfViewer').show();
    $(p.mShell).find('.pActivitySummary').hide();
    $(p.mShell).find('.pQuizBoard').hide();
    $(p.mShell).find('.pQuizCheck').hide();
    $(p.mShell).find('.pActivityArea').hide();
    $(p.mShell).find('.pJsActWrapper').hide();
    $(p.mShell).find('.pSettingArea').hide();
    $(p.mShell).find('.pMainHelpWrapper').hide();
    break;
    case "quizboard":
    $(p.mShell).find('.pQuizBoard').show();
    $(p.mShell).find('.pQuizBoard .pActivityBody').show();
    $(p.mShell).find('.pQuizBoard .pQuizboard_ques_wrap').hide();
    $(p.mShell).find('.pQuizCheck').hide();
    $(p.mShell).find('.pActivityArea').hide();
    $(p.mShell).find('.pActivitySummary').hide();
    $(p.mShell).find('.pJsActWrapper').hide();
    $(p.mShell).find('.pSettingArea').hide();
    $(p.mShell).find('.pMainHelpWrapper').hide();
    break;
    case "quizcheck":
    $(p.mShell).find('.pQuizCheck').show();
    $(p.mShell).find('.pQuizBoard').hide();
    $(p.mShell).find('.pActivityArea').hide();
    $(p.mShell).find('.pActivitySummary').hide();
    $(p.mShell).find('.pJsActWrapper').hide();
    $(p.mShell).find('.pSettingArea').hide();
    $(p.mShell).find('.pMainHelpWrapper').hide();
    break;
    case "videoScreen":
    $(p.mShell).find('.pActivityArea').show();
    $(p.mShell).find('.pQuizBoard').hide();
    $(p.mShell).find('.pQuizCheck').hide();
    $(p.mShell).find('.pActivitySummary').hide();
    $(p.mShell).find('.pJsActWrapper').hide();
    $(p.mShell).find('.pSettingArea').hide();
    $(p.mShell).find('.pMainHelpWrapper').hide();
    break;
    case "labmenu":
    $('.pActivityWrapper').hide();
    $(p.mShell).find('.pJsActWrapper').hide();
  $('.pBookWrapper').hide();
  $('.pLabsWrapper').show();
  $(p.mShell).find(".pLabPageWrapper").hide();
    $(p.mShell).find(".pLabSubmitButton").hide();
	$(p.mShell).find(".pPrintPageButton").hide();
    $(p.mShell).find('.pMainHelpWrapper').hide();
    break;
    case "jsact":
    $('.pActivityWrapper').hide();
    $(p.mShell).find('.pActivityArea').hide();
    $(p.mShell).find('.pQuizBoard').hide();
    $(p.mShell).find('.pQuizCheck').hide();
    $(p.mShell).find('.pActivitySummary').hide();
    $(p.mShell).find('.pSettingArea').hide();
    $(p.mShell).find('.pJsActWrapper').show();
    $(p.mShell).find('.pMainHelpWrapper').hide();
    break;
    case "search":
    $('.pBookWrapper').hide();
    $('.pLabsWrapper').hide();
    $('.pLabPageWrapper').hide();
    $(p.mShell).find('.pJsActWrapper').hide();
    $('.pActivityWrapper').hide();
    $(p.mShell).find('.pActivityArea').hide();
    $(p.mShell).find('.pQuizBoard').hide();
    $(p.mShell).find('.pQuizCheck').hide();
    $(p.mShell).find('.pActivitySummary').hide();
    $(p.mShell).find('.pSettingArea').hide();
    $(p.mShell).find('.pMainHelpWrapper').hide();
    disableHeaderSearch(true);
    break;
  }
  }
  function playerEvent() {
    if (!device) {
    $(p.mShell).find(".pButtons,.pTopic").not('.noLink').off("mouseover", mouseover).on("mouseover", mouseover);
    $(p.mShell).find(".pButtons,.pTopic").not('.noLink').off("mouseout", mouseout).on("mouseout", mouseout);
    $(p.mShell).find(".std_act_link").off("mouseover", mouseover).on("mouseover", mouseover);
    $(p.mShell).find(".std_act_link").off("mouseout", mouseout).on("mouseout", mouseout);
  $(p.mShell).find(".pChapName,.pSubTopicName,.pSubMenuHeader").off("mouseover", mouseover).on("mouseover", mouseover);
    $(p.mShell).find(".pChapName,.pSubTopicName,.pSubMenuHeader").off("mouseout", mouseout).on("mouseout", mouseout);
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
    $(p.mShell).find(".pButtons,.pSubMenuHeader").off(mouseEvents.down, mousedown).on(mouseEvents.down, mousedown);
    $(p.mShell).find(".pButtons,.sbt_btn").off(mouseEvents.up, mouseup).on(mouseEvents.up, mouseup);
    $(p.mShell).find(".pChapName").off(mouseEvents.down, mousedown).on(mouseEvents.down, mousedown);
    $(p.mShell).find(".pChapName").off("click", chapterUp).on("click", chapterUp);
    //$(p.mShell).find(".pChapName").off(:, chapterUp).on(mouseEvents.up, chapterUp);
    $(p.mShell).find(".pLabTitle").off(mouseEvents.down, mousedown).on(mouseEvents.down, mousedown); //---->
    $(p.mShell).find(".pLabTitle").not(".pjumpToVideo").off("click", labChapterUp).on("click", labChapterUp); //---->
    $(p.mShell).find(".pSearch").off("click", showSearchBox).on("click", showSearchBox); //---->
  $(p.mShell).find("#searchField, #searchField2").off("keyup").on('keyup', function (e) {
  if ($(e.target).attr("id") == "searchField2") {
  $("#searchField").val($("#searchField2").val());
  }
  if (e.keyCode == 13) {
  showSearchBox(e);
  }
  });
  $(p.mShell).find(".pLabSubMenuTopic").off(mouseEvents.down, mousedown).on(mouseEvents.down, mousedown); //---->
  $(p.mShell).find(".pLabSubMenuTopic").off("click", labSubTopicUp).on("click", labSubTopicUp); //---->
    $(p.mShell).find(".pTopic,.pSubMenuTopic").not('.noLink,.hyperLink').off(mouseEvents.up, topicUp).on(mouseEvents.up, topicUp);
    $(p.mShell).find(".pVideoIcon,.pSummaryIconWrap,.pjumpToVideo").off(mouseEvents.up, VideoIconUp).on(mouseEvents.up, VideoIconUp);
  $(p.mShell).find(".pjumpToTopic").off(mouseEvents.up, topicUp).on(mouseEvents.up, topicUp);
    // $(p.mShell).find(".pSettingCompHeader").off(mouseEvents.up, settingComp).on(mouseEvents.up, settingComp);
    $(p.mShell).find(".pSubMenuTopicHeader").off(mouseEvents.up, subMenuTopicDown).on(mouseEvents.up, subMenuTopicDown);
  $(p.mShell).find(".pSubMenuHeader").off(mouseEvents.up, gotoBook).on(mouseEvents.up, gotoBook);
    if (device) {
  $(p.mShell).find(".videoWrapper").off(mouseEvents.up, videoUp).on(mouseEvents.up, videoUp);
  }
  }

    function showSearchBox(e, data) {
  if ($("#searchField").val() == "" && !data) {
  return false;
  }
    if ($(e.target).hasClass("pSearch") || $(e.target).attr("id") == "searchField" || $(e.target).attr("id") == "searchField2") {
  window.location.hash = escape("type_search/searchKey_" + $("#searchField").val());
  return false;
  }
  manageScreen("search");
  $(".pSearchAreaWrapper").show();
    $(p.mShell).find(".pLabSubmitButton").hide();
	$(p.mShell).find(".pPrintPageButton").hide();
  // $(".searchButton").off("click").on("click", updateSearchHash);
    // console.log(data)
    $(".searchResults").mCustomScrollbar("destroy").empty();
    if (data && data.searchKey) {
    $("#searchField").val(data.searchKey.split("%20").join(" "));
      $("#searchField2").val(data.searchKey.split("%20").join(" "));
    searchResults();
  } else {
  $("#searchField").val("");
    $("#searchField2").val("");
    $(".searchResultCount").text("");
  }
  }

      function disableHeaderSearch(bool) {
  $("#searchField").attr("disabled", bool);
      if (bool) {
  $(".pSearch").css({
    "opacity": 0.6,     "pointer-events": "none"
      });   } else {
  $(".pSearch").css({
  "opacity": 1,
    "pointer-events": "all"
  });
  }

    }

    function updateSearchHash() {
    var a = window.location.hash.split("#")[1];
    a = a.split("/");
    a[1] = "searchKey_" + $("#searchField").val().split(" ").join("%20");
    a.length = 2;
    window.location.hash = escape(a.join("/"));
    }

    function searchResults() {
      if (!p.searchBook) {
        return false;
      }
      $(".activityLoader").show();
      var keywords = $("#searchField").val().split(" ").map(function (key) {
        return " " + key.toLowerCase() + " ";
      });
      var links = [], // for exact match
        links2 = [], // for all keys match
        found, text, sources = [];
      var div = $(document.createElement("div"));
      p.searchBook.forEach(function (obj) {
        found = false;
        var allText = div.html(obj.text).text().toLowerCase() + " " + obj.title.toLowerCase() + " " + obj.sectionTitle.toLowerCase() + " " + obj.sectionHeading.toLowerCase();
        var toSearch = $("#searchField").val().trim().toLowerCase();
        if (allText.indexOf(toSearch) != -1) {
          push(links, obj);
        } else {
          var count = 0;
          for (var i = 0; i < keywords.length; i++) {
            if (allText.indexOf(keywords[i]) != -1) {
              count++;
            }
          }
          if (count == keywords.length) {
            push(links2, obj);
          }
        }
        // var a = [div.html(obj.text).text().toLowerCase(), obj.title.toLowerCase(), obj.sectionTitle.toLowerCase(), obj.sectionHeading.toLowerCase()];
        // for (var j = 0; j < a.length && !found; j++) {
        // text = a[j];
        // for (var i = 0; i < keywords.length; i++) {
        //   if (text.match(keywords[i])) {
        //     push(links, obj);
        //     found = true;
        //   }
        // }
        // }
      });

      function push(a, obj) {
        if (sources.indexOf(obj.src) == -1) {
          sources.push(obj.src);
          a.push({
            src: obj.src,
            type: obj.type,
            href: obj.href,
            title: obj.title + ", " + obj.sectionHeading
          });
        }
      }
	  console.log(links.length, links2.length)
      links = links.concat(links2);
      var count = 0;
      if (links.length == 0 && keywords.length == 1) {
		  console.log("searching in code");
        for (var i = 0; i < p.searchCode.data.length; i++) {
          if (p.searchCode.data[i].code.toLowerCase().indexOf(keywords[0].trim()) != -1) {
            for (var j = 0; j < p.searchCode.data[i].lessons.length; j++) {
				links.push({
					title:p.searchCode.data[i].lessons[j],
					link:p.searchCode.data[i].hyperLink[j]
				});
              // var src = p.searchCode.data[i].lessons[j].split(" ")[0] + ".0";
              // var type = "book";
              // var href, dataTitle;
              // if (src.toLowerCase() == "lesson.0") {
                // src = p.searchCode.data[i].lessons[j].split("Ch")[1] + ".1.1.0";
                // type = "lessonPlan";
              // }
              // if (src.split(".")[0] == 26) {
                // type = "labPage";
                // var o = getLabref(src);
                // links.push({
                  // src: src.split(".").join(":"),
                  // type: type,
                  // title: p.searchCode.data[i].lessons[j],
                  // href: o.href,
                  // dataTitle: o.title + ", " + o.sectionHeading
                // });
              // } else {
                // links.push({
                  // src: src.split(".").join(":"),
                  // type: type,
                  // title: p.searchCode.data[i].lessons[j],
                  // href: href
                // });
              // }
            }
            break;
          }
        }
      }
      links.forEach(function (obj) {
        if (p.usertype && p.usertype.toLowerCase() == "student" && obj.type == "lessonPlan") {
          return false;
        }
        count++;
        if (obj.type == "labPage") {
          // console.log(obj.href)
          $(".searchResults").append("<div class='searchResult' data-type='" + obj.type + "' data-src='" + obj.src + "' data-href='" + obj.href.split("/").join("~").split("_").join("-") + "' data-text='" + (obj.dataTitle ? obj.dataTitle : obj.title) + "'>" + obj.title + "</div>");
        } else {
          $(".searchResults").append("<div class='searchResult' data-type='" + obj.type + "' data-link='" + obj.link + "' data-src='" + obj.src + "'>" + obj.title + "</div>");
        }
      });
      $(".searchResults").mCustomScrollbar({
        theme: "dark-3",
        axis: "y",
        scrollInertia: 0, mouseWheelPixels: 50,
        scrollButtons: {enable: true}
      });
      $(".searchResultCount").text(count + " results");
      $(".searchResult").off("click").on("click", function (e) {
        var link = $(this).attr("data-link");
		console.log(link)
		if(link && link != "undefined"){
			window.location.hash = link;
			return false;
		}
        var src = $(this).attr("data-src").split(":");
        var type = $(this).attr("data-type");
        if (type == "labPage") {
          var src = $(this).attr("data-text").split(", ");
          var href = $(this).attr("data-href");
          window.location.hash = escape("type_labPage/title_" + src[2] + "/href_" + (href));
        } else {
          window.location.hash = escape("lesson_" + (type == "lessonPlan") + "/type_chapter/chapter_" + src[0] + "/unit_" + (src[1] - 1) + "/section_" + src[2] + "/subsection_" + src[3]);
        }
        $(".pSearchAreaWrapper").hide();
        disableHeaderSearch(false);
      });

      setTimeout(function () {
        $(".activityLoader").hide();
      }, 500);
    }

  function getLabref(src) {
  src = src.split(".");
    src.length = 3;
  src = src.join(":");
  for (var i in p.searchBook) {
  if (p.searchBook[i].src == src) {
  return p.searchBook[i];
  }
  }
  }
  this.getLabRef = getLabref;
    function gotoBook() {
    $(this).removeClass("pDown").removeClass("pHover");
      playerbtnManager({type: "book"});
    }
  function subMenuTopicDown(e) {
  e.stopPropagation();
  if ($(e.target).parent().hasClass('pSubTopicWrapper')) {
  $('.accSysmbol').html("+");
    $('.pSubTopicInnerMainWrap').slideUp();
  }
    if (!$(this).hasClass("sopen")) {   $(this).find('.pSubTopicName .accSysmbol').not('.pSubTopicInnerWrap .accSysmbol').html("-");
    if (!$(this).hasClass('child')) {
    $('.sopen').removeClass("sopen");
  } else {
    $(this).find('.pSubTopicName .accSysmbol').html("-");
  }
  $(this).addClass("sopen")

    $(this).children('.pSubTopicInnerMainWrap').slideDown();
  } else {
    if ($(this).hasClass('child')) {
    $(this).find('.pSubTopicName .accSysmbol').html("+");
    $(this).removeClass("sopen");
  } else {
    $('.accSysmbol').html("+");
    $('.sopen').removeClass("sopen");
  }
  $(this).children('.pSubTopicInnerMainWrap').slideUp();
  }
  }
  function settingComp(e) {

  //      if ($(this).hasClass("open")) { //        $(this).next(".pSettingCompBody").slideUp();
  //        $(this).removeClass("open");
  //      } else {
//        $(".open").removeClass("open");
  //        $(".pSettingCompBody").slideUp();
  //        $(this).addClass("open");
  //        $(this).next(".pSettingCompBody").slideDown();
    //      }
  }

    function topicUp(e) {
    if ($(e.target).hasClass('pjumpToTopic') && lessonFlag) {
    $(document).trigger("updateBook", {book: true});
    thisObj.updateBook(true);
  }
    $('.pSubMenuWrap').removeClass("open");
    $('.pSubmenuButton').removeClass("open");
    var chap, unit, section, data, subsection, vIndex, pageNo;
  chap = $(this).attr("data-chap");
  unit = $(this).attr("data-topic");
    section = $(this).attr("data-subtopic");
    subsection = $(this).attr("data-subsection");
    vIndex = $(this).attr("data-vIndex");
	pageNo = $(this).attr("data-pageno");
  e.stopImmediatePropagation();
  $('.tActive').removeClass('tActive');
  $(this).addClass('tActive');
    if (typeof subsection == typeof undefined || subsection == false) {
  subsection = 0;
  }

  if (typeof vIndex == typeof undefined || (vIndex == false && vIndex != "0")) {
  data = {"chap": chap, unit: unit, section: section, subSection: subsection, pageNo: pageNo};
  } else {
  data = {"chap": chap, unit: unit, section: section, subSection: subsection, vIndex: vIndex, pageNo: pageNo};
  }
  $(document).trigger("loadSpecificTopic", data);
  }
    function std_act_linkUp(e) {
  showLoader();
  var _this = $(this);
    _this.removeClass("pHover").removeClass("pDown");
    var _data = {}
    _data.SectionHeading = _this.text();
    _data.ref = _this.attr('data-href');
	data.hash = _this.attr('data-hash');
    var _href = _data.ref.replace(/\//g, '~')
  _href = _href.replace(/_/g, '-');
  if (_data.SectionHeading == "Return to ELL Lesson Plans Table of Contents") {
  _data.SectionHeading = "ELL Lesson Plans";
  }
  location.hash = escape("type_additonal-resource/title_" + _data.SectionHeading + "/href_" + _href);
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
    $("#pJSActFrame").attr("src", "about:blank");
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
     if ($(this).attr("data-ref")) {
          window.open($(this).attr("data-ref"), "lab", "scrollbars=yes,resizable=yes,top=0,left=0,width=900,height=643");
        } else {
          alert("Activity coming soon");
        }
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
    "line-height": "30px",     "font-size": "14px",
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
    btnStateReset();     if (!$(this).hasClass("pDisable")) {
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
    e.stopImmediatePropagation();
    if (!$(this).hasClass("pDisable")) {

  playerbtnManager({
    type: $(this).attr("data-type"),
    _this: $(this)
  });   }
    }
  function chapterUp() {
    var topic_no = $(this).attr('data-chapter');
    $(p.mShell).find(".pChapName").removeClass("active");
    $(this).addClass("active");
    loadTopic(topic_no);
    $(document).trigger("loadSubMenu", {"chap": topic_no});
	 if(topic_no == "27" && p.usertype.toLowerCase() == "student"){
          $(".pSubtopic[data-subtopic='1']").remove();
          $(".pSubtopic[data-subtopic='2']").remove();
		  $(".pSubtopic[data-subtopic='6']").remove();
	  }
  }
    function labChapterUp(e) {//---->
  $('.pLabsWrapper').hide();
    loadLabPage($(e.target).attr("data-pageTitle") ? $(e.target).attr("data-pageTitle") : $(e.target).text(), $(e.target).attr("data-href"), $(e.target).attr("data-assign_id"));
  }//---->
    function labSubTopicUp(e) {//---->
    var i = $(e.target).attr("data-index") * 1;
    var ele = $(p.mShell).find(".pLabPageWrapper").find("[data-index=" + i + "]");
      $(p.mShell).find(".pLabPageContentWrapper").mCustomScrollbar("scrollTo", ele);
  }//---->
        function loadLabPage(title, href, assign_id) {//---->
        $(".pSearchAreaWrapper").hide();
    disableHeaderSearch(false);
        if (href.split(".")[1] != "html") {
  $('.pLabsWrapper').show();
        window.open(href/* .split("~").join("/") */);
    return false;
  }
  var _href = href.replace(/\//g, '~')
        _href = _href.replace(/_/g, '-');
      $(p.mShell).find(".book_bck").hide();
    $(p.mShell).find(".lab_bck").show();
    blockHashEvent = true;
        location.hash = escape("type_labPage/title_" + title + "/href_" + _href);
      setTimeout(function () {
        blockHashEvent = false;
    }, 500);
      if (href.split("/")[1] == "labs") {
  $(p.mShell).find(".pLabSubmitButton").show();
  }
   if (href.split("/")[1] == "physical labs" || href.split("/")[1] == "demonstrations") {
        $(p.mShell).find(".pPrintPageButton").show().off("click", printPage).on("click", printPage);
      }
        var mainWrapper = $(p.mShell).find(".pLabPageWrapper");
    $(p.mShell).find(".pLabPageWrapper").show();
      var contentWrapper = $(p.mShell).find(".pLabPageContentWrapper");     contentWrapper.mCustomScrollbar("destroy").empty();
    var sideMenuWrapper = $(p.mShell).find(".pLabSubMenu");
        sideMenuWrapper.empty().css("opacity", 0);
    loadHtml({
    src: href,
      parent: contentWrapper,
      callback: function () {
      console.log(assign_id);
        labData.init({id: assign_id})
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
    window.open($(this).attr("data-href"), "lab", "scrollbars=yes,resizable=yes,top=0,left=0,width=760,height=600");
      });
        var list = [];
    contentWrapper.children().each(function (i, ele) {
      $(ele).attr("data-index", i);
    sideMenuWrapper.append("<div class='pLabSubMenuTopic' data-index=" + i + ">" + (i == 0 ? "Introduction" : $(ele).find(".pExcersiseTitle").text()) + "</div>");
      });
    sideMenuWrapper.css("left", - sideMenuWrapper.outerWidth(true)).data("open", false);
    setTimeout(function () {
  sideMenuWrapper.css("opacity", 1);
        }, 800);
    contentWrapper.mCustomScrollbar({
  theme: "dark-3",
          axis: "y",
    scrollInertia: 0, mouseWheelPixels: 50,
    scrollButtons: {enable: true}
        });
    playerEvent();
      }
    });
  }//---->

   function printPage(e) {
      var OpenWindow = window.open('course/template/printPage.html', '_blank', 'width=1024,height=470,resizable=1');
      window.OpenWindow = OpenWindow;
      var link = document.createElement("link");
      link.onload = function () {
        console.log("link")
        setTimeout(function () {
          OpenWindow.print();
        }, 500);
      }
      link.rel = "stylesheet";
      link.href = "../../core/main/css/style.css";
      OpenWindow.onload = function () {
        console.log("window")
        OpenWindow.document.head.append(link);
        OpenWindow.document.getElementById("container").innerHTML = $(".pLabPageWrapper").html();
        $(OpenWindow.document.getElementById("container")).find(".pLabSubMenu").remove();
        $(OpenWindow.document.getElementById("container")).find(".pLabSubMenuButton").remove();
        $(OpenWindow.document.getElementById("container")).css("width", "1024px");
      }
    }

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
    $('.pSubMenuWrap').removeClass("open");
    $('.pSubmenuButton').removeClass("open");
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
    if (lessonFlag) {
    $(document).trigger("updateBook", {book: true});
    thisObj.updateBook(true);
    initBook();
  }
    $(p.mShell).find(".pMenu").removeClass('pDisable');
    $(p.mShell).find(".book_bck").hide();
    location.hash = escape("type_" + _obj.type);
    if ($(p.mShell).find(".videoWrapper").hasClass("vOpen")) {
    videoPlayer.stopVideo();
  }
  $(p.mShell).find('.pQuizBoard_bck').hide();
    $(p.mShell).find('.pActivityWrapper').hide();
    $(p.mShell).find('.pJsActWrapper').hide();
    $(p.mShell).find('.pLabsWrapper').hide();
    $(p.mShell).find('.pBreadCrumb').hide();
    $(p.mShell).find(".pLabPageWrapper").hide();
    $(p.mShell).find(".pLabSubmitButton").hide();
	$(p.mShell).find(".pPrintPageButton").hide();
	$(p.mShell).find('.pMainHelpWrapper').hide();
    $(p.mShell).find('.pBookWrapper').show();
    $(".pSearchAreaWrapper").hide();
    disableHeaderSearch(false);
    overlayDown()
    break;
    case "labmenu"://---->
    $('.pActivityWrapper').hide();
    $(p.mShell).find('.pJsActWrapper').hide();
    $('.pBookWrapper').hide();
    $('.pLabsWrapper').show();
  $(p.mShell).find(".pLabPageWrapper").hide();
  $(p.mShell).find(".pLabSubmitButton").hide();
  $(p.mShell).find(".pPrintPageButton").hide();
  $(p.mShell).find('.pMainHelpWrapper').hide();
    $(".pSearchAreaWrapper").hide();
    disableHeaderSearch(false);
    overlayDown()
    break; //---->
    case "admin":
    overlayDown();
    console.log(baseUrl);
    location.href = baseUrl + coreData.bookData.admin_link;
    //window.open("https://qa1.kineticmath.com/admin/class-wizard/list");
    break;
    case "homework":
    overlayDown();
    location.href = coreData.bookData["homework_" + p.usertype + "_link"];
    //window.open("https://qa1.kineticmath.com/assignments/list");
    break;
    case "grades":
    overlayDown();
    location.href = coreData.bookData["grades_link"];
    //window.open("https://qa1.kineticmath.com/reports/overview");
    break;     case "factbook":
    window.open("course/factbook/index.html", "_blank", "scrollbars=yes,resizable=0,top=0,left=0,width=842,height=593");
    overlayDown()
    break;
    case "setting":
    $(".pSearchAreaWrapper").hide();
    disableHeaderSearch(false);
    location.hash = escape("type_" + _obj.type);
    if ($(p.mShell).find(".videoWrapper").hasClass("vOpen")) {
    videoPlayer.stopVideo();
  }
    $('.pActivityWrapper').show();
    $(p.mShell).find(".book_bck").hide();
    $(p.mShell).find('.pLabsWrapper').hide();
    $(p.mShell).find('.pBreadCrumb').hide();
    $(p.mShell).find('.pBookWrapper').hide();
	$(p.mShell).find('.pMainHelpWrapper').hide();
    $(p.mShell).find(".pLabPageWrapper").hide();
    $(p.mShell).find(".pLabSubmitButton").hide();
	$(p.mShell).find(".pPrintPageButton").hide();
    $(p.mShell).find('.pActivitySummary').hide();
    $(p.mShell).find('.pQuizBoard').hide();
    $(p.mShell).find('.pQuizCheck').hide();
    $(p.mShell).find('.pActivityArea').hide();
    $(p.mShell).find('.pJsActWrapper').hide();
	$(p.mShell).find('.pSettingArea').show();
    overlayDown();
    break;
    case "help":
    location.hash = escape("type_" + _obj.type);
    p.currentType = "help";
    manageScreen(p.currentType);
    overlayDown()
    break;
    case "logout":
    //        Do not call overlayDown here: mouseup needs to fire on Logout, and overlayDown causes menu to slide up before mouse is released.
  //          overlayDown()

    // Call newly added logout function, which logs the user out and returns to the login screen.
    logout();
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
    $('.pSubMenuWrap').removeClass("open");
    $('.pSubmenuButton').removeClass("open");
    overlayDown()
    if ($(p.mShell).find(".videoWrapper").hasClass("vOpen")) {
    videoPlayer.stopVideo();
  }
    $(document).trigger("loadNext");
    break;
    case "Back":
    $('.pSubMenuWrap').removeClass("open");
    $('.pSubmenuButton').removeClass("open");
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
    if ($('.pVideoMainWrapper').hasClass('quizboardOpen')) {
    videoPlayer.stopVideo();
  } else {
    videoPlayer.stopVideo();
    manageScreen(p.currentType);
  }
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
    $(p.mShell).find(".pLabSubmitButton").hide();
	$(p.mShell).find(".pPrintPageButton").hide();
    break;
    case"password":
    validatePassword();
    break;
    case"email":
    validateEmail();
    break;
    case "lessonPlans":
    $(document).trigger("updateBook", {book: false});
    thisObj.updateBook(false);
    initBook();
    $(p.mShell).find(".pMenu").removeClass('pDisable');
    $(p.mShell).find(".book_bck").hide();
  location.hash = escape("type_" + _obj.type);
  if ($(p.mShell).find(".videoWrapper").hasClass("vOpen")) {
    videoPlayer.stopVideo();
  }
    $(p.mShell).find('.pQuizBoard_bck').hide();
    $(p.mShell).find('.pActivityWrapper').hide();
    $(p.mShell).find('.pJsActWrapper').hide();
    $(p.mShell).find('.pLabsWrapper').hide();
    $(p.mShell).find('.pBreadCrumb').hide();
    $(p.mShell).find(".pLabPageWrapper").hide();
    $(p.mShell).find(".pLabSubmitButton").hide();
	$(p.mShell).find(".pPrintPageButton").hide();
  $(p.mShell).find('.pBookWrapper').show();
  $(".pSearchAreaWrapper").hide();
    disableHeaderSearch(false);
    overlayDown()
    break;
    case 'studentHelp':
  $('.pMainHelpWrapper .pButtons').removeClass('selected');
    $(_obj._this).addClass("selected");
    $(".phelpInnerWrap[data-type = 'TeacherHelpBody']").hide();
  $(".phelpInnerWrap[data-type='studentHelpBody']").show();
    break;
    case 'TeacherHelp':
  $('.pMainHelpWrapper .pButtons').removeClass('selected');
  $(_obj._this).addClass("selected");
  $(".phelpInnerWrap[data-type='studentHelpBody']").hide();
    $(".phelpInnerWrap[data-type='TeacherHelpBody']").show();
    break;
	case 'userManual':
          window.open("assets/pdf/fpp-user-manual.pdf");
          break;
  }
  }
  function validatePassword() {
  $(p.mShell).find('.changePassBody .feedback').hide();
  var oldpassword = $('.oldPassword').val();
  var newPassword = $('.newPassword').val();
    var confPassword = $('.confPassword').val();
    var valFlag = false;
    var patt = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$");
    var res = patt.test(confPassword);
    var oldPass = patt.test(oldpassword);
  checkValidation();
  if (!valFlag) {
  if (newPassword == confPassword && res && oldPass) {
  showLoader();
  $(document).trigger("changePassword", {"old_password": oldpassword, "new_password": newPassword});
  } else {
  if (!res) {
  $(p.mShell).find('.changePassBody .feedback').css("color", "red").html("That password doesn't meet our security requirements.").fadeIn();
  } else {
  $(p.mShell).find('.changePassBody .feedback').css("color", "red").html("That two password does'nt match").fadeIn();
  }
  }
  }
    function checkValidation() {

  $(p.mShell).find('.changePassBody .loginInput').each(function (e) {
  if ($(this).val() == "") {
    valFlag = true;
  $(p.mShell).find('.changePassBody .feedback').css("color", "red").html("Please fill in all of the fields.").fadeIn();
    return false;
  }
  });
  }


  }
  function validateEmail() {

  $(p.mShell).find('.changeEmailBody .feedback').hide();
    var newEmail = $('.newEmail').val();
    var confEmail = $('.confEmail').val();
    var valFlag = false;     checkValidation();
    var newEmailFlag = isEmail(newEmail);
    if (!valFlag) {
  if (newEmailFlag) {
    if (newEmail == confEmail) {
    $(document).trigger("changeEmail", {"email": newEmail});
  } else {
    $(p.mShell).find('.changeEmailBody .feedback').css("color", "red").html("The two email fields don't match.").fadeIn();
  }
    } else {
  $(p.mShell).find('.changeEmailBody .feedback').css("color", "red").html("Enter proper Email-Id.").fadeIn();
  }
  }
  function checkValidation() {

    $(p.mShell).find('.changeEmailBody .loginInput').each(function (e) {
  if ($(this).val() == "") {
  valFlag = true;
    $(p.mShell).find('.changeEmailBody .feedback').css("color", "red").html("Please fill in all of the fields.").fadeIn();
    return false;
    }
  });
  }
  function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9 ]{2,4})+$/;
  return regex.test(email);
  }
  }
  function overlayDown(e) {
    var type; // Element's data-type attribute value, if present.
    if (typeof e != "undefined") {
      if (!$(e.target).hasClass('accSysmbol') && !$(e.target).hasClass('pSubTopicName') && !$(e.target).hasClass('pSubMenuTopicHeader') && !$(e.target).hasClass('pSubmenuButton') && !$(e.target).hasClass('pLabSubMenuButton ')) {
        $('.pSubMenuWrap').removeClass("open");
        $('.pSubmenuButton').removeClass("open");
        $(p.mShell).find(".pLabSubMenu").css("left", - $(p.mShell).find(".pLabSubMenu").outerWidth(true));
        $('.pLabSubMenuButton').removeClass("pSelected open");
        $(p.mShell).find(".pLabSubMenu").data("open", false);
      }
      // Checking for element's data-type attribute. If found, use to identify logout menu option.
      type = e.target && e.target.dataset && e.target.dataset.type;
    } else {
      //$('.pSubMenuWrap').removeClass("open");
      // $('.pSubmenuButton').removeClass("open");
    }
    // Slide menu up unless logout option was clicked.
    if (type !== 'logout') {
      $(p.mShell).find(".pMenu").removeClass('pSelected');
      $(p.mShell).find(".pMenuWrap").slideUp();
    }
  }

  // Handle Logout menu option.
  function logout() {
    var logoutUrl = p.bookData.logout_link;
    var loginPage = p.bookData.login_link;
    $.get(logoutUrl).done((resp) => { console.log('Success'); window.location = loginPage; }).fail((resp) => { console.log('Failure'); });
  }

  this.loadScreen = function (data) {
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
