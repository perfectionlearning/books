var QuizBoard = function() {
  var q = {};
  var device = BrowserDetect.any();
  var _this = this;
  var videoPlayer;
  q.stepIndex = 0;
  q.screenData;
  q.mShell = '.pQuizBoard';
  q.instance_id;
  q.problem_inst_id;
  q.currentQues = 0;
  q.submitCnt = 0;
  q.Id = [];
  q.totalQues = 0;
  q.videoRef = "/books/fpp/Chapters/assets_q/video/";
  var feedback = {
    "correct": ["Great work! You get 5 out of 5 for this problem.", "Great work! You've correctly solved this problem before, so you keep your perfect score"],
    "incorrect": [
      "Try again. Check your work or click a help option. Enter a new answer whenever you're ready.",
      "Try again. Check your work or click a help option. Enter a new answer whenever you're ready.",
      "It looks like you need to review this material. Click one of the help options for additional assistance."
    ]
  }

  // data are initialized and events are binded
  this.init = function(data) {
    videoPlayer = data.videoPlayer;
    q.screenData = data.screenData;
    q.instance_id = data.instance_id;
    console.log(data);
    reset();
    loadScreen()
    bindEvents();
    hideLoader();

  }
//quizboard home screen loaded
  function loadScreen() {
    q.submitCnt = 0;
    var cnt = 0;
    q.totalQues = 0;
    q.Id = [];
    var alpha = ["a", "b", "c", "d", "e", "f"]
    for (var i in q.screenData) {
      q.totalQues++;
      q.Id.push(i);

      q.screenData[i]["hint"] = q.screenData[i]["hint"].split("|");

      cnt++;
      var temp1 = "<br>";
      for (var j in q.screenData[i]["choices"]) {
        temp1 += "<span style='margin-top:10px;padding-right:10px;'>" + alpha[j] + ") " + q.screenData[i]["choices"][j]["answer"] + "</span>";
      }
      if (q.screenData[i]["status"] == "incorrect") {
        var temp = '<div class="bquestionWrapper" data-ques="' + (cnt - 1) + '" data-id="' + i + '"><div class="currentQuestionNo incorrect"><div class="status_img incorrect"></div><span>' + cnt + '</span></div><div class="currentQuestion"><div class="question"><p>' + q.screenData[i]['q'] + '</p>' + temp1 + '</div> </div></div>'
      } else if (q.screenData[i]["status"] == "correct") {
        var temp = '<div class="bquestionWrapper" data-ques="' + (cnt - 1) + '" data-id="' + i + '"><div class="currentQuestionNo correct"><div class="status_img correct"></div><span>' + cnt + '</span></div><div class="currentQuestion"><div class="question"><p>' + q.screenData[i]['q'] + '</p>' + temp1 + '</div> </div></div>'
      } else {
        var temp = '<div class="bquestionWrapper" data-ques="' + (cnt - 1) + '" data-id="' + i + '"><div class="currentQuestionNo"><div class="status_img"></div><span>' + cnt + '</span></div><div class="currentQuestion"><div class="question"><p>' + q.screenData[i]['q'] + '</p>' + temp1 + '</div> </div></div>'
      }
      $(q.mShell).find('.pActivityBody').css("padding-right", "11px").append(temp);
      $(q.mShell).find('.pActivityBody').mCustomScrollbar("destroy");
      $(q.mShell).find('.pActivityBody').mCustomScrollbar({
        theme: "dark-3",
        axis: "y",
        scrollInertia: 0,
        mouseWheelPixels: 50,
        scrollButtons: {
          enable: true
        }
      });
      $(q.mShell).find('.pQuizboard_ques_wrap').mCustomScrollbar("destroy");
      $(q.mShell).find('.pQuizboard_ques_wrap').mCustomScrollbar({
        theme: "dark-3",
        axis: "y",
        scrollInertia: 0,
        mouseWheelPixels: 50,
        scrollButtons: {
          enable: true
        }
      });


    }
    bindEvents();
  }

  //question are loaded
  function loadQuestion(data) {
    $('.pQuizButtons').removeClass('pDisable');
    $('.pQuizBoard .pQuizFeedback').removeClass('correct').removeClass('incorrect').hide();

    $('.pQuizBoard_bck').show();
    $('.pSubmenuButton').hide();
    $('.navButtons').hide();
    $('.quizNavButtons').show();
    $(".pQuizButtons.helpVideo").attr("data-ref", "");
    $(q.mShell).find('.pActivityBody').hide();
    $(q.mShell).find('.pQuizStepWrap').hide();
    $(q.mShell).find('.pQuizboard_ques_wrap').show();
    if (!data.hasOwnProperty("custom")) {
      var id = $(this).attr("data-id");
      q.currentQues = Number($(this).attr("data-ques"));
    } else {
      var id = data.id;
      q.currentQues = data.ques;
    }
    q.problem_inst_id = id;
    q.url = ctrl.getDomain() + "/api/rest/submit/" + q.instance_id + "/" + q.problem_inst_id;
    $(q.mShell).find('.pQues').html(q.screenData[id].q);
    $(q.mShell).find('.userInputWrap').html(q.screenData[id].inputBox).attr('data-type', q.screenData[id].ansType);
    $(q.mShell).find('.pAnsWrap .uSubmit').attr('data-type', q.screenData[id].ansType);

    quiznavigationState(q.currentQues);
    bindEvents();
    setTimeout(function() {
      setMaxLength();
    }, 1000);
  }
//events are binded on the buttons 
  function bindEvents() {
    if (!device) {
      $(".pQuizButtons,.qVideo,.bOptionRow").off("mouseover", mouseover).on("mouseover", mouseover);
      $(".pQuizButtons,.qVideo,.bOptionRow").off("mouseout", mouseout).on("mouseout", mouseout);
    }
    console.log("binding eventd");
    $(".pQuizBoard .pQuizButtons,.qVideo,.bOptionRow").off(mouseEvents.down).on(mouseEvents.down, mousedown);
    $(".pQuizBoard .pQuizButtons,.qVideo").off(mouseEvents.up).on(mouseEvents.up, mouseup);
    $(".pHelpWrapper.quizboardHelp .pQuizButtons").off(mouseEvents.down).on(mouseEvents.down, mousedown);
    $(".pHelpWrapper.quizboardHelp .pQuizButtons").off(mouseEvents.up).on(mouseEvents.up, mouseup);
    $(".quizNavButtons").off(mouseEvents.up).on(mouseEvents.up, mouseup);
    $(".pQuizBoard .bOptionRow").off(mouseEvents.up).on(mouseEvents.up, radioUp);
    $(".pDisabler").off(mouseEvents.up).on(mouseEvents.up, overlayDown);
    $(".bquestionWrapper").off(mouseEvents.up).on(mouseEvents.up, loadQuestion);

  }
// radio button on mouse up
  function radioUp() {
    if (q.screenData[q.problem_inst_id].ansType == "radio") {
      $('.selected').removeClass("selected");
      $(this).addClass("selected");
    } else {
      if ($(this).hasClass("selected")) {
        $(this).removeClass("selected");
      } else {
        $(this).addClass("selected");
      }

    }
  }

  function mouseover() {
    btnStateReset();
    if (!$(this).hasClass("pDisable")) {
      $(this).addClass("pHover");
    }
  }

  function mouseout() {
    btnStateReset();
    $(this).removeClass("pHover");

  }

  function mousedown() {
    btnStateReset();

    if (!$(this).hasClass("pDisable")) {
      $(this).addClass("pDown");
    }
  }

  function mouseup(e) {

    e.stopImmediatePropagation();
    console.log("in quiz board Mouse Up");
    btnStateReset();

    if (!$(this).hasClass("pDisable")) {
      playerbtnManager({
        type: $(this).attr("data-type"),
        _this: $(this)
      });
    }
  }
//remove hover and selected state from the screens
  function btnStateReset() {
    $(".pQuizButtons").removeClass("pHover").removeClass("pDown");
    $(".qVideo").removeClass("pHover").removeClass("pDown");
    $(".bOptionRow").removeClass("pHover").removeClass("pDown");

  }
//loads the solution on the screen
  this.loadSolution = function() {
    $('.step').remove();
    $('.pQuizBoard .pQuizFeedback').hide()
    $('.pQuizBoard .pQuizButtons').not('.quizNavButtons').addClass('pDisable');
    $(".pQuizBoard .step").find("input").css("background-color", "#ebebe4");
    $('.pQuizBoard .pAnsWrap').find("input").css("background-color", "#ebebe4");
    $('.pQuizBoard .pAnsWrap').find("input").attr("disabled", true);
    $('.pQuizBoard .step').find("input").attr("disabled", true);
    $(".pQuizBoard .bOptionRow.selected").removeClass("selected");
    if (q.screenData[q.problem_inst_id]['ansType'] == "radio") {

      $(".pQuizBoard .bOptionRow[data-id='" + q.screenData[q.problem_inst_id]['a'] + "']").addClass("selected");
    } else if (q.screenData[q.problem_inst_id]['ansType'] == "check") {
      var ans = q.screenData[q.problem_inst_id]['a'].split(',');
      for (var i in ans) {
        $(".pQuizBoard .bOptionRow[data-id='" + ans[i] + "']").addClass("selected");
      }
    }
    if (q.screenData[q.problem_inst_id]["solve"].length > 0) {
      for (var i in q.screenData[q.problem_inst_id]["solve"]) {
        q.stepIndex = i;
        var temp = document.createElement("div");
        $(temp).attr("id", "step_" + q.stepIndex);
        $(temp).addClass("step").appendTo($('.pQuizBoard .pQuizStepWrap'));
        $(temp).css({
          "overflow": "hidden",
          "display": "block",
          "padding-bottom": "20px",
          "position": "relative",
          "padding-top": "10px",
          "min-height": "100px",
          "border-bottom": "1px solid #2184a1"
        });
        if (i == (q.screenData[q.problem_inst_id]["solve"].length - 1)) {
          $(temp).css({
            "border-bottom": "none"
          })
        }
        var qPrefix = "<div class='qPrefix'>" + q.screenData[q.problem_inst_id]["solve"][q.stepIndex]["q_prefix"] + "</div>";
        var userInput = '<div class="userInputWrap">' + q.screenData[q.problem_inst_id]["solve"][q.stepIndex]["a"] + '</div>';
        $(temp).html("<div style='display:table'>" + qPrefix + userInput + "</div>");

        if (q.screenData[q.problem_inst_id]["solve"][q.stepIndex]["ansType"] == "radio") {
          $(".pQuizBoard .bOptionRow[data-id='" + q.screenData[q.problem_inst_id]["solve"][q.stepIndex]['a'] + "']").eq(q.screenData[q.problem_inst_id]["solve"][q.stepIndex]['a']).addClass("selected");
          // $(".bOptionRow[data-id='0']").addClass("selected");
        }
        $(".pQuizBoard .bOptionRow").addClass('pDisable').off();
        var math = $(temp).find(".userInputWrap")[0];
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, math]);
      }
      $('.pQuizBoard .pQuizStepWrap').fadeIn();
    }
    hideLoader();
  }

  //event manager that manages the event depending upon the type of button
  function playerbtnManager(_obj) {
    //
    btnStateReset();
    switch (_obj.type) {
      case "check":

        showLoader();
        var _temp = {};
        var _parent = _obj._this.parent().parent();
        var _arr = [];
        if ($('.pQuizBoard .bOptionRow.selected').length > 0) {

          $('.pQuizBoard .bOptionRow.selected').each(function() {
            var _this = $(this);
            _arr.push(_this.attr("data-id"));
          })

          _temp.data = _arr;
          _temp.url = q.url;
          sendQuizBoardResponse(_temp, function(data) {
            checkUserResponse(data)
          });
        } else {
          hideLoader();
          console.log("No INput");
        }
        break;
      case "radio":

        showLoader();
        var _temp = {};
        var _parent = _obj._this.parent().parent();
        var _arr = [];
        if ($('.pQuizBoard .bOptionRow.selected').length > 0) {

          _arr.push($('.selected').attr("data-id"));
          _temp.data = _arr;
          _temp.url = q.url;
          sendQuizBoardResponse(_temp, function(data) {
            checkUserResponse(data)
          });
        } else {
          hideLoader();
          console.log("No INput");
        }
        break;
      case "MultKinetic":
        showLoader();
        var _temp = {};
        var _parent = _obj._this.parent().parent();
        if (_parent.hasClass("step")) {
          var _arr = [];
          _parent.find(".mjx-math input").each(function() {
            var val = $(this).val();
            _arr.push(val);
          })
          _temp.data = _arr;
          _temp.url = q.url + "/" + _parent.attr("data-step");
          sendQuizBoardResponse(_temp, function(data) {
            data.step = true;
            checkUserResponse(data)
          });
        } else {
          var _val = _obj._this.parent().parent().find("input").val();
          _temp.data = [_val];
          _temp.url = q.url;
          sendQuizBoardResponse(_temp, function(data) {
            checkUserResponse(data)
          });
        }

        break;
      case "qHelp":
        var _off = _obj._this.offset();
        _off.top = _off.top + 30;
        _off.left = _off.left - 79;
        $('.pHelpWrapper').css({
          top: _off.top + "px",
          left: _off.left + "px",
        });
        var _parent = _obj._this.parent().parent();
        if (_parent.hasClass("step")) {
          $('.hint').show();
          $('.helpVideo').hide();
        } else {
          $('.hint').hide();
          $('.helpVideo').show();
        }
        $('.inputBoxHelp').hide();
        $('.pHelpWrapper').show();
        $('.pDisabler').fadeIn();
        break;
      case "step":
        showLoader();
        q.stepIndex = -1;
        _obj._this.fadeOut();
        _this.loadStep();
        break;
      case "solution":
        manageButtons(true);

        showLoader();
        overlayDown();
        _this.loadSolution();
        break;
      case "inputBoxHelpVideo":
        manageButtons(false);
        $(q.mShell).find('.inputBoxHelp').fadeIn();
        $(q.mShell).find('.pHelpWrapper').hide();
        $(q.mShell).find('.pDisabler').fadeIn();
        break;
      case "video":
        $(q.mShell).find(".pDisabler").hide();
        $('.pVideoMainWrapper').addClass('quizVideo');
        videoPlayer.initiateVideo({
          src: [_obj._this.attr('data-ref')]
        });
        videoPlayer.playVideo(0);
        break;
      case "hint":
        manageButtons(false);
        q.submitCnt = 0;
        $(".pQuizBoard .pQuizFeedback").removeClass("correct").removeClass("incorrect").css("color", "blue").html(q.screenData[q.problem_inst_id]["hint"][0]).show();
        q.screenData[q.problem_inst_id]["hint"].push(q.screenData[q.problem_inst_id]["hint"].shift());
        overlayDown();
        break;
      case "quizNext":
        manageButtons(false);
        q.submitCnt = 0;
        console.log("next quiz");
        q.currentQues++;

        loadQuestion({
          custom: true,
          ques: q.currentQues,
          id: q.Id[q.currentQues]
        });
        break;
      case "quizBack":
        manageButtons(false);
        q.submitCnt = 0;
        console.log("prev quiz");
        q.currentQues--;

        loadQuestion({
          custom: true,
          ques: q.currentQues,
          id: q.Id[q.currentQues]
        });
        break;
      case "helpVideo":
        q.submitCnt = 0;
        manageButtons(false);
        if (q.screenData[q.problem_inst_id].hasOwnProperty("video")) {
          $('.mShell').find(".pDisabler").hide();
          $('.pVideoMainWrapper').addClass('quizVideo quizboardOpen');
          videoPlayer.initiateVideo({
            src: [q.videoRef + q.screenData[q.problem_inst_id]["video"]]
          });
          videoPlayer.playVideo(0, undefined, "qChk");
        }
        break;
      case "helpClose":
      case "input_close":
        overlayDown();
        break;

    }
  }


  /*
   Get the problem status from the problem data.
   */
  function getProblemStatus() {
    var id = q.problem_inst_id || -1;
    // To determine whether the problem was answered correctly before, we need the status from the problem data, not the results from the answer submission.
    var problem_status = q.screenData[id] && q.screenData[id].status || '';
    return problem_status;
  }

  /*
   Determine which "Correct" message to use.
   */
  function getCorrectMsgNdx(data) {
    var msg_ndx = 1; // use "first time" correct message if problem_status is "new" or "incorrect".
    var problem_status = getProblemStatus();
    if (problem_status === 'correct') {
      // if problem was already answered correctly, use the "already answered" message.
      msg_ndx = 0;
    }
    return msg_ndx;
  }

  /*
   Update the problem status in the problem data.
   */
  function setProblemStatus(status) {
    var id = q.problem_inst_id || -1;
    q.screenData[id].status = status;

  }

  // checks the user resonse from the server
  function checkUserResponse(data, cb) {
    var feedbackCorrectNdx = getCorrectMsgNdx(data);
    console.log(data);
    $('.pQuizBoard .pQuizFeedback').removeClass('correct').removeClass('incorrect');
    $('.bquestionWrapper[data-ques="' + q.currentQues + '"]').find('.currentQuestionNo').removeClass('incorrect');
    $('.bquestionWrapper[data-ques="' + q.currentQues + '"]').find('.currentQuestionNo').removeClass('correct');
    $('.bquestionWrapper[data-ques="' + q.currentQues + '"]').find('.currentQuestionNo .status_img').removeClass('correct');
    $('.bquestionWrapper[data-ques="' + q.currentQues + '"]').find('.currentQuestionNo .status_img').removeClass('incorrect');
    
	if (data.iscorrect) { //if the user response is correct
      $('.bquestionWrapper[data-ques="' + q.currentQues + '"]').find('.currentQuestionNo').addClass('correct');
      $('.bquestionWrapper[data-ques="' + q.currentQues + '"]').find('.currentQuestionNo .status_img').addClass('correct');
	   var correctMsgNdx = getCorrectMsgNdx(data);
      var feedBackTxt = feedback.correct[correctMsgNdx];;
      setProblemStatus('correct');
      $(".step").find("input").css("background-color", "#ebebe4");
      $('.pAnsWrap').find("input").css("background-color", "#ebebe4");
      $('.pAnsWrap').find("input").attr("disabled", true);
      $('.step').find("input").attr("disabled", true);
      $('.pQuizBoard .pQuizFeedback').html(feedBackTxt).addClass("correct").fadeIn();
      $(".bOptionRow").addClass('pDisable').off();
      $('.pQuizBoard .pQuizButtons').not('.quizNavButtons').addClass('pDisable');
      hideLoader();
    } else {
		//if the user response is incorrect
      $('.bquestionWrapper[data-ques="' + q.currentQues + '"]').find('.currentQuestionNo').addClass('incorrect');
      $('.bquestionWrapper[data-ques="' + q.currentQues + '"]').find('.currentQuestionNo .status_img').addClass('incorrect');

      setProblemStatus('incorrect');
      var feedBackTxt = feedback["incorrect"][q.submitCnt];
      q.submitCnt++;
      if (q.submitCnt == 3) {
        manageButtons(true);
      }
      $('.pAnsWrap').find("input").css("background-color", "yellow");
      $('.pQuizBoard .pQuizFeedback').html(feedBackTxt).addClass("incorrect").fadeIn();
      hideLoader();
    }


  }
//sending  user response to server to check the answers
  function sendQuizBoardResponse(_temp, cb) {
    console.log("user response");
    console.log(_temp.data);
    console.log(_temp.url);
    var _data = JSON.stringify({
      "studentResponse": _temp.data
    });
    var request = $.ajax({
      url: _temp.url,
      xhrFields: {
        withCredentials: true
      },
      headers: {
        "Content-Type": "application/json"
      },
      crossDomain: true,
      data: _data,
      method: "PUT",
      dataType: "json"
    });

    request.done(function(data) {
      if (data.hasOwnProperty('data')) data = data.data; // compensate for wrap_output = true;
      console.log(data);
      cb(data)
      request = null;

    });

    request.fail(function(jqXHR, textStatus) {
      console.log(jqXHR);
      console.log(textStatus);
      request = null;
      alert("please login");
    });
  }

  function overlayDown() {

    $(".pDisabler").fadeOut();
  }

  //manage next/prev button enable/disable state
  function quiznavigationState(currentQues) {
    $(".quizNavButtons.pBack").removeClass("pDisable");
    $(".quizNavButtons.pNext").removeClass("pDisable");
    console.log("currentQues-->" + q.currentQues);
    if (currentQues === 0) {
      $(".quizNavButtons.pBack").addClass("pDisable");
    }
    if (currentQues === q.totalQues - 1) {
      $(".quizNavButtons.pNext").addClass("pDisable");
    }
  }
// reset the quizboard to initial state
  function reset() {
    $('.pQuizButtons').removeClass('pDisable');
    $('.step').remove();
    $(q.mShell).find('.pQuizboard_ques_wrap').hide();
    $(q.mShell).find('.pActivityBody').show();
    $(q.mShell).find('.pQuizStep').show();
    $(q.mShell).find('.bquestionWrapper').remove();
    $(".pQuizBoard .bOptionRow").removeClass('pDisable');
    $('.pQuizBoard .pQuizFeedback').removeClass('correct').removeClass('incorrect').hide();
    $(q.mShell).find('.pQuizStepWrap').hide();
    $('.pHelpWrapper').addClass("quizboardHelp")
    $('.pQuizBoardHeader').html("Click on a question, then select your answer.");

  }
//enable/disable submit button on repeated incorrect answers
  function manageButtons(disable) {
    if (disable) {
      $('.pQuizButtons.uSubmit').addClass('pDisable');
      $(".pQuizBoard .bOptionRow").addClass('pDisable').off();
    } else {
      $('.pQuizButtons.uSubmit').removeClass('pDisable');
      $(".pQuizBoard .bOptionRow").removeClass('pDisable').off();
      $(".pQuizBoard .bOptionRow").off(mouseEvents.up).on(mouseEvents.up, radioUp);
    }
  }
//setting the length on the input box depending upon the answer
  function setMaxLength() {

    $('.pAnsWrap').find("input").each(function(i) {
      $(this).attr("maxlength", q.screenData[q.currentQues]["maxLength"][i]);
    })

  }

}
