  var QuizCheck = function () {
    var q = {};
    var device = BrowserDetect.any();
    var _this = this;
    var videoPlayer;
    q.stepIndex = 0;
    q.screenData;
    q.mShell = '.mShell';
    q.instance_id;
    q.problem_inst_id;
    var feedback = {
      "correct": "Great work! You've correctly solved this problem before, so you keep your perfect score.",
      "incorrect": "Try again. Check your work or click a help option. Enter a new answer whenever you're ready.",
      "step_correct": "That is correct!",
      "step_incorrect": "Try again. Click one of the help options for more clues on how to solve the problem."
    }

    this.init = function (data) {
      videoPlayer = data.videoPlayer;
      q.instance_id = data.instance_id;
      q.problem_inst_id = data.problem_inst_id;
      q.screenData = data.screenData;
      q.url = "https://test-ohw.kineticmath.com/rest/rest.php/submit/" + q.instance_id + "/" + q.problem_inst_id;
      reset();
      appendResource();
      $(q.mShell).find('.pQuizCheck .pQues').html(data.screenData.q);
      $(q.mShell).find('.pQuizCheck .userInputWrap').attr('data-type', q.screenData.ansType).html(data.screenData.inputBox);
      $(q.mShell).find('.pQuizCheck .pAnsWrap .uSubmit').attr('data-type', q.screenData.ansType);
      $(q.mShell).find('.pQuizCheck .pActivityBody').mCustomScrollbar("destroy");
      $(q.mShell).find('.pQuizCheck .pActivityBody').mCustomScrollbar({
        theme: "dark-3",
        axis: "y",
        scrollInertia: 0,
        scrollButtons: {enable: false}
      });
      var math = $(".pQuizCheck .userInputWrap")[0];
      console.log($(".pQuizCheck .userInputWrap")[0]);
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, math]);
      bindEvents();
      hideLoader();
    }
    function appendResource() {
      $(".resource").remove();
      if (q.screenData.hasOwnProperty("qImg") && q.screenData.qImg != "" && q.screenData.qImg != null) {
        var temp = document.createElement("div");
        $(temp).addClass("resource qImg").insertAfter('.pQuizCheck .pQuizStepWrap');
        var size = q.screenData.qImgSize.split(',');
        $(temp).css({
          "position": "relative",
          "float": "left",
          "width": "295px",
          "height": "160px",
          "clear": "both",
          "background-image": "url(" + q.screenData.qImg + ")",
          "padding": "5px",
          "background-clip": "content-box",
          "box-shadow": "0px 1px 5px 0px black",
          "margin-left": "3px",
          "margin-bottom": '20px',
          "margin-right": "20px",
        });
        if (size.length > 0) {
          $(temp).css({
            "width": size[0] + "px",
            "height": size[1] + "px",
          });
        }
        if (q.screenData.hasOwnProperty("qImageText") && q.screenData["qImageText"].length > 0) {
          for (var i in q.screenData["qImageText"]) {
            var temp_txt = document.createElement("div");
            $(temp_txt).html(q.screenData["qImageText"][i]["text"]).css({
              "position": "absolute",
              "top": (q.screenData["qImageText"][i]["y"] + 5) + "px",
              "left": (q.screenData["qImageText"][i]["x"] + 5) + "px",
              "color": q.screenData["qImageText"][i]["color"],
              "fon-size": "16px"
            }).appendTo($(temp));
          }
        }
      }
      if (q.screenData.hasOwnProperty("video") && q.screenData.video != "") {
        var temp = document.createElement("div");
        $(temp).attr("data-type", "video");
        $(temp).attr("data-ref", q.screenData.video);
        $('.pQuizCheck .quickCheckHelpVideo').attr("data-type", "video");
        $('.pQuizCheck .quickCheckHelpVideo').attr("data-ref", q.screenData.video);
        $(temp).addClass("resource qVideo").insertAfter('.pQuizCheck .pQuizStepWrap');
        var size = q.screenData.qImgSize.split(',');
        $(temp).css({
          "position": "relative",
          "float": "left",
          "width": "295px",
          "height": "160px",
          "clear": "both",
          "background-image": "url('assets/images/" + q.screenData.video + "@2x.png')",
          "padding": "5px",
          "background-clip": "content-box",
          "box-shadow": "0px 1px 5px 0px black",
          "margin-left": "3px",
          "margin-bottom": '20px',
          "cursor": "pointer",
        });
        if (size.length > 0) {
          $(temp).css({
            "width": size[0] + "px",
            "height": size[1] + "px",
          });
        }
      }
    }
    function bindEvents() {
      if (!device) {
        $(q.mShell).find(".pQuizButtons,.qVideo,.bOptionRow").off("mouseover", mouseover).on("mouseover", mouseover);
        $(q.mShell).find(".pQuizButtons,.qVideo,.bOptionRow").off("mouseout", mouseout).on("mouseout", mouseout);
      }
      $(q.mShell).find(".pQuizButtons,.qVideo,.bOptionRow").off(mouseEvents.down, mousedown).on(mouseEvents.down, mousedown);
      $(q.mShell).find(".pQuizButtons,.qVideo").off(mouseEvents.up, mouseup).on(mouseEvents.up, mouseup);
      $(q.mShell).find(".bOptionRow").off(mouseEvents.up, radioUp).on(mouseEvents.up, radioUp);
      $(q.mShell).find(".pDisabler").off(mouseEvents.up, overlayDown).on(mouseEvents.up, overlayDown);


    }
    function radioUp() {
      $('.selected').removeClass("selected");
      $(this).addClass("selected");
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
      $(q.mShell).find(".pQuizButtons").removeClass("pHover").removeClass("pDown");
      $(q.mShell).find(".qVideo").removeClass("pHover").removeClass("pDown");
      $(q.mShell).find(".bOptionRow").removeClass("pHover").removeClass("pDown");

    }
    this.loadStep = function () {
      q.stepIndex++;
      var temp = document.createElement("div");
      $(".pQuizCheck .step").find(".stepFeedback").remove();
      $(temp).attr("id", "step_" + q.stepIndex);
      $(temp).attr("data-step", q.stepIndex);
      $(temp).addClass("step").appendTo($('.pQuizCheck .pQuizStepWrap'));
      $(temp).css({
        "overflow": "hidden",
        "display": "block",
        "padding-bottom": "15px",
        "position": "relative",
        "padding-top": "10px",
        "min-height": "100px",
      });
      if (q.stepIndex > 0) {
        $(temp).css({"border-top": "1px solid #2184a1"});
      }
      var qPrefix = "<div class='qPrefix'>" + q.screenData["solve"][q.stepIndex]["q_prefix"] + "</div>";
      var userInput = '<div class="userInputWrap" data-type="' + q.screenData.ansType + '" >' + q.screenData["solve"][q.stepIndex]["inputBox"] + '</div>';

      var feedback = '<div class="stepFeedback"></div>'
      $(temp).html(qPrefix + userInput + feedback);
      $('.pQuizCheck .pQuizStepWrap').show();
      var math = $(temp).find(".userInputWrap")[0];
      $('.pQuizCheck .pQuizStepWrap').find(".buttonWrap").remove();
      $(q.mShell).find(".pQuizCheck .buttonWrap").clone().appendTo($(temp));
      $(q.mShell).find('#step_' + q.stepIndex + ' .uSubmit').attr('data-type', q.screenData["solve"][q.stepIndex].ansType)
      $('.pQuizCheck .pQuizStepWrap').find(".pQuizStep").remove();
      $('.pQuizCheck .pQuizStepWrap').find(".buttonWrap").css({
        position: "relative",
        float: "right",
      });
      $('.pQuizCheck .stepFeedback').css({
        "position": "relative",
        "float": "left",
        "margin-top": "5px",
        // "bottom": "10px",
        "margin-right": "15px"
      });
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, math]);
      $('.pQuizCheck .pQuizStepWrap').fadeIn();
      bindEvents();
      hideLoader();
    }
    this.loadSolution = function () {
      $('.pQuizCheck .step').remove();
      $('.pQuizCheck .pQuizButtons').addClass('pDisable');
      $(".pQuizCheck .step").find("input").css("background-color", "#ebebe4");
      $('.pQuizCheck .pAnsWrap').find("input").css("background-color", "#ebebe4");
      $('.pQuizCheck .pAnsWrap').find("input").attr("disabled", true);
      $('.pQuizCheck .step').find("input").attr("disabled", true);
      for (var i in q.screenData["solve"]) {
        q.stepIndex = i;
        var temp = document.createElement("div");
        $(temp).attr("id", "step_" + q.stepIndex);
        $(temp).addClass("step").appendTo($('.pQuizCheck .pQuizStepWrap'));
        $(temp).css({
          "overflow": "hidden",
          "display": "block",
          "padding-bottom": "20px",
          "position": "relative",
          "padding-top": "10px",
          "min-height": "100px",
          "border-bottom": "1px solid #2184a1"
        });
        var qPrefix = "<div class='qPrefix'>" + q.screenData["solve"][q.stepIndex]["q_prefix"] + "</div>";
        var userInput;
        if (q.screenData["solve"][q.stepIndex]["ansType"] == "radio") {
          userInput = '<div class="userInputWrap" data-type="' + q.screenData.ansType + '">' + q.screenData["solve"][q.stepIndex]["inputBox"] + '</div>';
        } else {
          userInput = '<div class="userInputWrap">' + q.screenData["solve"][q.stepIndex]["a"] + '</div>';
        }
        $(temp).html("<div style='display:table'>" + qPrefix + userInput + "</div>");
        if (q.screenData["solve"][q.stepIndex]["ansType"] == "radio") {
          $(".bOptionRow[data-id='" + q.screenData["solve"][q.stepIndex]['a'] + "']").addClass("selected");
          // $(".bOptionRow[data-id='0']").addClass("selected");
        }
        $(".bOptionRow").off();
        var math = $(temp).find(".userInputWrap")[0];
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, math]);
      }
      $('.pQuizStepWrap').fadeIn();
      hideLoader();
    }
    function playerbtnManager(_obj) {
      //
      btnStateReset();
      switch (_obj.type) {
        case "radio":
          showLoader();
          var _temp = {};
          var _parent = _obj._this.parent().parent();
          var _arr = [];
          if (_parent.hasClass("step")) {
            _arr.push($('.selected').attr("data-id"));
            _temp.data = _arr;
            _temp.url = q.url + "/" + _parent.attr("data-step");
            sendUserResponse(_temp, function (data) {
              data.step = true;
              checkUserRadioResponse(data)
            });
          } else {
            _arr.push($('.selected').attr("data-id"));
            _temp.data = _arr;
            _temp.url = q.url;
            sendUserResponse(_temp, function (data) {
              checkUserRadioResponse(data)
            });
          }
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
            var _arr = [];
            _obj._this.parent().parent().find(".mjx-math input").each(function () {
              var val = $(this).val();
              _arr.push(val);
            })
            _temp.data = _arr;
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
          $(q.mShell).find('.pHelpWrapper').css({
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
          $(q.mShell).find('.inputBoxHelp').hide();
          $(q.mShell).find('.pHelpWrapper').show();
          $(q.mShell).find('.pDisabler').fadeIn();
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
          $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find(".stepFeedback").css("color", "blue").html(q.screenData["solve"][q.stepIndex]["hint"]).show();

          overlayDown();
          break;
        case "helpClose":
        case "input_close":
          overlayDown();
          break;

      }
    }
    function checkUserRadioResponse(data) {
      $('.pQuizCheck .pQuizFeedback').removeClass('correct').removeClass('incorrect')
      if (data.hasOwnProperty("step")) {
        if (data.iscorrect) {
          hideLoader();
          if (q.stepIndex == q.screenData["solve"].length - 1) {
            $(".pQuizCheck .bOptionRow").off();
            $('.pQuizCheck .pQuizFeedback').html(feedback.correct).removeClass("incorrect").addClass("correct").fadeIn();
            $('.pQuizCheck .pQuizButtons').addClass('pDisable');
            $(".pQuizCheck input").css("background-color", "#ebebe4");
            $(".pQuizCheck input").attr("disabled", true);
          } else {
            $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find(".stepFeedback").css("color", "#03a903").html(feedback.step_correct).show();
            setTimeout(function () {
              $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find(".stepFeedback").fadeOut(function () {
                showLoader();
                _this.loadStep();
              })
            }, 500);
          }
        } else {
          hideLoader();
          if (q.stepIndex == q.screenData["solve"].length - 1) {
            $('.pQuizCheck .pQuizFeedback').html(feedback.incorrect).removeClass("correct").addClass("incorrect").fadeIn();
          } else {
            $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find(".stepFeedback").css("color", "red").html(feedback.step_incorrect).show();
          }
        }
      } else {
        $(".pQuizCheck .step").find(".stepFeedback").hide();
        if (data.iscorrect) {

          $(".pQuizCheck .step").find("input").css("background-color", "#ebebe4");
          $('.pQuizCheck .pAnsWrap').find("input").css("background-color", "#ebebe4");
          $('.pQuizCheck .pAnsWrap').find("input").attr("disabled", true);
          $('.pQuizCheck .step').find("input").attr("disabled", true);
          $('.pQuizCheck .pQuizFeedback').html(feedback.correct).addClass("correct").fadeIn();
          $('.pQuizCheck .pQuizButtons').addClass('pDisable');
          $(".pQuizCheck .bOptionRow").off();
          hideLoader();
        } else {
          $('.pQuizCheck .pQuizFeedback').html(feedback.incorrect).addClass("incorrect").fadeIn();
          hideLoader();
        }
      }
    }

    function checkUserResponse(data, cb) {
      console.log(data);
      $('.pQuizCheck .pQuizFeedback').removeClass('correct').removeClass('incorrect')
      if (data.hasOwnProperty("step")) {
        if (q.stepIndex <= q.screenData["solve"].length - 1) {
          if (data.iscorrect) {
            hideLoader();
            $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find("input").css("background-color", "#ebebe4");
            $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find("input").attr("disabled", true);
            if (q.stepIndex == q.screenData["solve"].length - 1) {
              $('.pQuizCheck .pQuizFeedback').html(feedback.correct).removeClass("incorrect").addClass("correct").fadeIn();
              $('.pQuizCheck .pQuizButtons').addClass('pDisable');
              $('.pQuizCheck .pAnsWrap').find("input").css("background-color", "#ebebe4");
              $('.pQuizCheck .pAnsWrap').find("input").attr("disabled", true);
            } else {
              $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find(".stepFeedback").css("color", "#03a903").html(feedback.step_correct).show();
              setTimeout(function () {
                $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find(".stepFeedback").fadeOut(function () {
                  showLoader();
                  _this.loadStep();
                })
              }, 500);
            }
          } else {
            hideLoader();
            if (q.stepIndex == q.screenData["solve"].length - 1) {
              $('.pQuizCheck .pQuizFeedback').html(feedback.incorrect).removeClass("correct").addClass("incorrect").fadeIn();
            } else {
              $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find(".stepFeedback").css("color", "red").html(feedback.step_incorrect).show();
            }
            $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find("input").css("background-color", "#ebebe4");
            for (var i in data.wrong) {
              $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find("input").eq(data.wrong[i]).css("background-color", "yellow");
            }
            hideLoader();
          }
        }
      } else {
        $(".pQuizCheck .step").find(".stepFeedback").hide();
        if (data.iscorrect) {
          $(".pQuizCheck .step").find("input").css("background-color", "#ebebe4");
          $('.pQuizCheck .pAnsWrap').find("input").css("background-color", "#ebebe4");
          $('.pQuizCheck .pAnsWrap').find("input").attr("disabled", true);
          $('.pQuizCheck .step').find("input").attr("disabled", true);
          $('.pQuizCheck .pQuizFeedback').html(feedback.correct).addClass("correct").fadeIn();
          $('.pQuizCheck .pQuizButtons').addClass('pDisable');
          hideLoader();
        } else {
          $('.pQuizCheck .pAnsWrap').find("input").css("background-color", "yellow");
          $('.pQuizCheck .pQuizFeedback').html(feedback.incorrect).addClass("incorrect").fadeIn();
          hideLoader();
        }
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

      $(q.mShell).find(".pDisabler").fadeOut();
    }
    function reset() {
      $('.pQuizCheck .pQuizButtons').removeClass('pDisable');
      $('.pQuizCheck .step').remove();
      $(q.mShell).find('.pQuizCheck .pQuizStep').show();
      $('.pQuizCheck .pQuizFeedback').removeClass('correct').removeClass('incorrect').hide();
      $(q.mShell).find('.pQuizCheck .pQuizStepWrap').hide();
      $('.pQuizCheck .pAnsWrap').show();

    }

  }

