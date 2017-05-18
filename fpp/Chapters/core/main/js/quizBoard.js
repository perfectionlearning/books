  var QuizBoard = function () {
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
    q.Id = [];
    q.totalQues = 0;
    var feedback = {
      "correct": "Great work! You've correctly solved this problem before, so you keep your perfect score.",
      "incorrect": "Try again. Check your work or click a help option. Enter a new answer whenever you're ready.",
      "step_correct": "That is correct!",
      "step_incorrect": "Try again. Click one of the help options for more clues on how to solve the problem."
    }

    this.init = function (data) {
      videoPlayer = data.videoPlayer;
      q.screenData = data.screenData;
      q.instance_id = data.instance_id;

      reset();
      loadScreen()
      bindEvents();
      hideLoader();

    }
    function loadScreen() {
      var cnt = 0;
      var alpha = ["a", "b", "c", "d", "e", "f"]
      for (var i in  q.screenData) {
        q.totalQues++;
        q.Id.push(i);

        q.screenData[i]["hint"] = q.screenData[i]["hint"].split("|");

        cnt++;
        var temp1 = "<br>";
        for (var j in  q.screenData[i]["choices"]) {
          temp1 += "<span style='margin-top:10px;padding-right:10px;'>" + alpha[j] + ") " + q.screenData[i]["choices"][j]["answer"] + "</span>";
        }
        var temp = '<div class="bquestionWrapper" data-ques="' + (cnt - 1) + '" data-id="' + i + '"><div class="currentQuestionNo">' + cnt + '</div><div class="currentQuestion"><div class="question"><p>' + q.screenData[i]['q'] + '</p>' + temp1 + '</div> </div></div>'

        $(q.mShell).find('.pActivityBody').css("padding-right", "11px").append(temp);
        $(q.mShell).find('.pActivityBody').mCustomScrollbar("destroy");
        $(q.mShell).find('.pActivityBody').mCustomScrollbar({
          theme: "dark-3",
          axis: "y",
          scrollInertia: 0,
          scrollButtons: {enable: false}
        });
        $(q.mShell).find('.pQuizboard_ques_wrap').mCustomScrollbar("destroy");
        $(q.mShell).find('.pQuizboard_ques_wrap').mCustomScrollbar({
          theme: "dark-3",
          axis: "y",
          scrollInertia: 0,
          scrollButtons: {enable: false}
        });


      }
      bindEvents();
    }
    function loadQuestion(data) {
      $('.pQuizBoard_bck').show();
      $('.pSubmenuButton').hide();
      $('.navButtons').hide();
      $('.quizNavButtons').show();
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
      q.url = "https://test-ohw.kineticmath.com/rest/rest.php/submit/" + q.instance_id + "/" + q.problem_inst_id;
      $(q.mShell).find('.pQues').html(q.screenData[id].q);
      $(q.mShell).find('.userInputWrap').html(q.screenData[id].inputBox).attr('data-type', q.screenData[id].ansType);
      ;
      $(q.mShell).find('.pAnsWrap .uSubmit').attr('data-type', q.screenData[id].ansType);
      quiznavigationState(q.currentQues);
      bindEvents();
    }
    function bindEvents() {
      if (!device) {
        $(".pQuizButtons,.qVideo,.bOptionRow").off("mouseover", mouseover).on("mouseover", mouseover);
        $(".pQuizButtons,.qVideo,.bOptionRow").off("mouseout", mouseout).on("mouseout", mouseout);
      }
      $(".pQuizButtons,.qVideo,.bOptionRow").off(mouseEvents.down, mousedown).on(mouseEvents.down, mousedown);
      $(".pQuizButtons,.qVideo").off(mouseEvents.up, mouseup).on(mouseEvents.up, mouseup);
      $(".bOptionRow").off(mouseEvents.up, radioUp).on(mouseEvents.up, radioUp);
      $(".pDisabler").off(mouseEvents.up, overlayDown).on(mouseEvents.up, overlayDown);
      $(".bquestionWrapper").off(mouseEvents.up, loadQuestion).on(mouseEvents.up, loadQuestion);

    }
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
      btnStateReset();
      if (!$(this).hasClass("pDisable")) {
        playerbtnManager({
          type: $(this).attr("data-type"),
          _this: $(this)
        });
      }
    }
    function btnStateReset() {
      $(".pQuizButtons").removeClass("pHover").removeClass("pDown");
      $(".qVideo").removeClass("pHover").removeClass("pDown");
      $(".bOptionRow").removeClass("pHover").removeClass("pDown");

    }

    this.loadSolution = function () {
      $('.step').remove();
      $('.pQuizButtons').addClass('pDisable');
      $(".step").find("input").css("background-color", "#ebebe4");
      $('.pAnsWrap').find("input").css("background-color", "#ebebe4");
      $('.pAnsWrap').find("input").attr("disabled", true);
      $('.step').find("input").attr("disabled", true);
      if (q.screenData[q.problem_inst_id]["solve"].length > 0) {
        for (var i in q.screenData[q.problem_inst_id]["solve"]) {
          q.stepIndex = i;
          var temp = document.createElement("div");
          $(temp).attr("id", "step_" + q.stepIndex);
          $(temp).addClass("step").appendTo($('.pQuizStepWrap'));
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
            $(temp).css({"border-bottom": "none"})
          }
          var qPrefix = "<div class='qPrefix'>" + q.screenData[q.problem_inst_id]["solve"][q.stepIndex]["q_prefix"] + "</div>";
          var userInput = '<div class="userInputWrap">' + q.screenData[q.problem_inst_id]["solve"][q.stepIndex]["a"] + '</div>';
          $(temp).html("<div style='display:table'>" + qPrefix + userInput + "</div>");
          if (q.screenData[q.problem_inst_id]["solve"][q.stepIndex]["ansType"] == "radio") {
            $(".bOptionRow[data-id='" + q.screenData[q.problem_inst_id]["solve"][q.stepIndex]['a'] + "']").eq(q.screenData[q.problem_inst_id]["solve"][q.stepIndex]['a']).addClass("selected");
            // $(".bOptionRow[data-id='0']").addClass("selected");
          }
          $(".bOptionRow").off();
          var math = $(temp).find(".userInputWrap")[0];
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, math]);
        }
        $('.pQuizStepWrap').fadeIn();
      }
      hideLoader();
    }
    function playerbtnManager(_obj) {
      //
      btnStateReset();
      switch (_obj.type) {
        case "check":
          showLoader();
          var _temp = {};
          var _parent = _obj._this.parent().parent();
          var _arr = [];
          $('.selected').each(function () {
            var _this = $(this);
            _arr.push(_this.attr("data-id"));
          })

          _temp.data = _arr;
          _temp.url = q.url;
          sendUserResponse(_temp, function (data) {
            checkUserResponse(data)
          });
          break;
        case "radio":
          showLoader();
          var _temp = {};
          var _parent = _obj._this.parent().parent();
          var _arr = [];

          _arr.push($('.selected').attr("data-id"));
          _temp.data = _arr;
          _temp.url = q.url;
          sendUserResponse(_temp, function (data) {
            checkUserResponse(data)
          });

          break;
        case "MultKinetic":
          showLoader();
          var _temp = {};
          var _parent = _obj._this.parent().parent();
          if (_parent.hasClass("step")) {
            var _arr = [];
            _parent.find(".mjx-math input").each(function () {
              var val = $(this).val();
              _arr.push(val);
            })
            _temp.data = _arr;
            _temp.url = q.url + "/" + _parent.attr("data-step");
            sendUserResponse(_temp, function (data) {
              data.step = true;
              checkUserResponse(data)
            });
          } else {
            var _val = _obj._this.parent().parent().find("input").val();
            _temp.data = [_val];
            _temp.url = q.url;
            sendUserResponse(_temp, function (data) {
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
          showLoader();
          overlayDown();
          _this.loadSolution();
          break;
        case "inputBoxHelpVideo":
          $(q.mShell).find('.inputBoxHelp').fadeIn();
          $(q.mShell).find('.pHelpWrapper').hide();
          $(q.mShell).find('.pDisabler').fadeIn();
          break;
        case "video":
          $(q.mShell).find(".pDisabler").hide();
          $('.pVideoMainWrapper').addClass('quizVideo');
          videoPlayer.initiateVideo({src: [_obj._this.attr('data-ref')]});
          videoPlayer.playVideo(0);
          break;
        case "hint":
          $(q.mShell).find(".pQuizFeedback").css("color", "blue").html(q.screenData[q.problem_inst_id]["hint"][0]).show();
          q.screenData[q.problem_inst_id]["hint"].push(q.screenData[q.problem_inst_id]["hint"].shift());
          overlayDown();
          break;
        case "quizNext":
          console.log("next quiz");
          q.currentQues++;

          loadQuestion({custom: true, ques: q.currentQues, id: q.Id[q.currentQues]});
          break;
        case "quizBack":
          console.log("prev quiz");
          q.currentQues--;

          loadQuestion({custom: true, ques: q.currentQues, id: q.Id[q.currentQues]});
          break;
        case "helpClose":
        case "input_close":
          overlayDown();
          break;

      }
    }


    function checkUserResponse(data, cb) {
      console.log(data);
      $('.pQuizFeedback').removeClass('correct').removeClass('incorrect')
      if (data.iscorrect) {
        $(".step").find("input").css("background-color", "#ebebe4");
        $('.pAnsWrap').find("input").css("background-color", "#ebebe4");
        $('.pAnsWrap').find("input").attr("disabled", true);
        $('.step').find("input").attr("disabled", true);
        $('.pQuizFeedback').html(feedback.correct).addClass("correct").fadeIn();
        $(".bOptionRow").off();
        $('.pQuizButtons').addClass('pDisable');
        hideLoader();
      } else {
        $('.pAnsWrap').find("input").css("background-color", "yellow");
        $('.pQuizFeedback').html(feedback.incorrect).addClass("incorrect").fadeIn();
        hideLoader();
      }


    }

    function sendUserResponse(_temp, cb) {
      console.log("user response");
      console.log(_temp.data);
      var _data = JSON.stringify({"studentResponse": _temp.data});
      var request = $.ajax({
        url: _temp.url,
        xhrFields: {
          withCredentials: true
        },
        headers: {"Content-Type": "application/json"},
        crossDomain: true,
        data: _data,
        method: "PUT",
        dataType: "json"
      });

      request.done(function (data) {
        console.log(data);
        cb(data)
        request = null;

      });

      request.fail(function (jqXHR, textStatus) {
        console.log(jqXHR);
        console.log(textStatus);
        request = null;
        alert("please login");
      });
    }
    function overlayDown() {

      $(".pDisabler").fadeOut();
    }
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
    function reset() {
      $('.pQuizButtons').removeClass('pDisable');
      $('.step').remove();
      $(q.mShell).find('.pQuizboard_ques_wrap').hide();
      $(q.mShell).find('.pActivityBody').show();
      $(q.mShell).find('.pQuizStep').show();
      $(q.mShell).find('.bquestionWrapper').remove()
      $('.pQuizFeedback').removeClass('correct').removeClass('incorrect').hide();
      $(q.mShell).find('.pQuizStepWrap').hide();
      $('.pHelpWrapper').addClass("quizboardHelp")
      $('.pQuizBoardHeader').html("Click on a question, then select your answer.");

    }

  }

