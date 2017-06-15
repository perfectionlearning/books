  var QuizCheck = function () {
    var q = {};
    var device = BrowserDetect.any();
    var _this = this;
    var videoPlayer;
    var showSolutionFlag = false;
    q.stepIndex = 0;
    q.screenData;
    q.mShell = '.mShell';
    q.instance_id;
    q.problem_inst_id;
    q.submitCnt = 0;
    q.videoImg = "/books/fpp/Chapters/assets_q/image/";
    q.videoRef = "/books/fpp/Chapters/assets_q/video/";
    var step_feedback = {
      "correct": ["That is correct!"],
      "incorrect": [
        "Try again. Click one of the help options for more clues on how to solve the problem. Enter a new answer whenever you're ready.",
        "Try again. Click one of the help options for more clues on how to solve the problem. Enter a new answer whenever you're ready.",
        "It looks like you need to review this material. Click one of the help options for additional assistance."
      ]

    };
    var feedback = {
      "correct": ["Great work! You've correctly solved this problem before, so you keep your perfect score", "Great work! You get 5 out of 5 for this problem."],
      "incorrect": [
        "Try again. Check your work or click a help option. Enter a new answer whenever you're ready.",
        "Try again. Check your work or click a help option. Enter a new answer whenever you're ready.",
        "It looks like you need to review this material. Click one of the help options for additional assistance."
      ]}

    this.init = function (data) {
      q.submitCnt = 0;
      videoPlayer = data.videoPlayer;
      q.instance_id = data.instance_id;
      q.problem_inst_id = data.problem_inst_id;
      q.screenData = data.screenData;
      q.url = ctrl.getDomain + "/api/rest/submit/" + q.instance_id + "/" + q.problem_inst_id;
      reset();
      appendResource();
      $(q.mShell).find('.pQuizCheck .pQues').html(data.screenData.q);
      $(q.mShell).find('.pQuizCheck .userInputWrap').attr('data-type', q.screenData.ansType).html(data.screenData.inputBox);
      $(q.mShell).find('.pQuizCheck .pAnsWrap .uSubmit').attr('data-type', q.screenData.ansType);
      $(q.mShell).find('.pQuizCheck .pActivityBody').mCustomScrollbar("destroy");
      $(q.mShell).find('.pQuizCheck .pActivityBody').mCustomScrollbar({
        theme: "dark-3",
        axis: "y",
        scrollInertia: 0, mouseWheelPixels: 50,
        scrollButtons: {enable: true}
      });
      var math = $(".pQuizCheck .userInputWrap")[0];
      console.log(data);
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, math]);
      bindEvents();
      hideLoader();
    }
    function appendResource() {
      $(".resource").remove();
      if (q.screenData.hasOwnProperty("qImg") && q.screenData.qImg != "" && q.screenData.qImg != null) {
        var tempWrap = document.createElement("div");
        $(tempWrap).addClass("resource qImg").appendTo('.pQuizCheck .pQuizIconWrap');
        $(tempWrap).css({
          "position": "relative",
          "float": "left",
          "padding": "5px",
          "box-shadow": "0px 1px 5px 0px black",
          "margin-left": "3px",
          "margin-bottom": '30px',
          "clear": "both",
        });

        var temp = document.createElement("div");
        $(temp).appendTo($(tempWrap));
        var size = q.screenData.qImgSize.split(',');
        $(temp).css({
          "position": "relative",
          "float": "left",
          "width": "317px",
          "height": "175px",
          "clear": "both",
          "background-image": "url(" + q.screenData.qImg + ")",
          "background-repeat": "no-repeat",
          "background-size": "100% 100%"
        });
//        if (size.length > 0) {
//          $(temp).css({
//            "width": (Number(size[0])) + "px",
//            "height": (Number(size[1])) + "px",
//          });
//        }
        if (q.screenData.hasOwnProperty("qImageText") && q.screenData["qImageText"].length > 0) {
          for (var i in q.screenData["qImageText"]) {
            var temp_txt = document.createElement("div");
            if (size.length > 0) {
              var _top = (q.screenData["qImageText"][i]["y"] * 100) / Number(size[1]);
              var _left = (q.screenData["qImageText"][i]["x"] * 100) / Number(size[0]);
            }
            $(temp_txt).html(q.screenData["qImageText"][i]["text"]).css({
              "position": "absolute",
              "top": (_top) + "%",
              "left": (_left) + "%",
              "color": q.screenData["qImageText"][i]["color"],
              "font-size": q.screenData["qImageText"][i]["size"]
            }).appendTo($(temp));
          }
        }
      }
      if (q.screenData.hasOwnProperty("video") && q.screenData.video != "") {
        var tempWrap = document.createElement("div");
        $(tempWrap).attr("data-ref", q.screenData.video);
        $(tempWrap).attr("data-type", "video").addClass("resource qVideo").appendTo('.pQuizCheck .pQuizIconWrap');
        $(tempWrap).css({
          "position": "relative",
          "float": "left",
          "padding": "5px",
          "box-shadow": "0px 1px 5px 0px black",
          "margin-left": "3px",
          "margin-bottom": '30px',
          "border-radius": "23px",
          "clear": "both",
        });
        var temp = document.createElement("div");
        $(q.mShell).find(".helpVideo").attr("data-ref", q.screenData.video);

        $('.pQuizCheck .quickCheckHelpVideo').attr("data-type", "video");
        $('.pQuizCheck .quickCheckHelpVideo').attr("data-ref", q.screenData.video);
        $(temp).appendTo($(tempWrap));
        //var size = q.screenData.qImgSize.split(',');
        $(temp).css({
          "position": "relative",
          "float": "left",
          "width": "317px",
          "height": "175px",
          "background-image": "url('" + q.videoImg + q.screenData.video + ".png')",
          "background-clip": "content-box",
          "cursor": "pointer",
          "border-radius": "21px",
        });

      }
    }
    function bindEvents() {
      if (!device) {
        $(q.mShell).find(".pQuizButtons,.qVideo,.bOptionRow").off("mouseover", mouseover).on("mouseover", mouseover);
        $(q.mShell).find(".pQuizButtons,.qVideo,.bOptionRow").off("mouseout", mouseout).on("mouseout", mouseout);
      }
      $(q.mShell).find(".pQuizCheck .pQuizButtons,.qVideo,.bOptionRow").off(mouseEvents.down).on(mouseEvents.down, mousedown);
      $(q.mShell).find(".pQuizCheck .pQuizButtons,.qVideo").off(mouseEvents.up).on(mouseEvents.up, mouseup);
      $(".pHelpWrapper .pQuizButtons").off(mouseEvents.down).on(mouseEvents.down, mousedown);
      $(".pHelpWrapper .pQuizButtons").off(mouseEvents.up).on(mouseEvents.up, mouseup);
      $(q.mShell).find(".bOptionRow").off(mouseEvents.up).on(mouseEvents.up, radioUp);
      $(q.mShell).find(".pDisabler").off(mouseEvents.up).on(mouseEvents.up, overlayDown);


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
      console.log("in quiz check Mouse Up");
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
      $('.pQuizCheck .pQuizFeedback').hide();
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
        "margin-top": "10px",
      });
      $('.pQuizCheck .stepFeedback').css({
        "position": "relative",
        "float": "left",
        "margin-top": "13px",
        // "bottom": "10px",
        "margin-right": "15px",
        "width": "100%",
      });
      MathJax.Hub.Queue(["Typeset", MathJax.Hub, math]);
      $('.pQuizCheck .pQuizStepWrap').fadeIn();
      bindEvents();
      hideLoader();
    }
    this.loadSolution = function () {
      showSolutionFlag = true;
      $('.pQuizCheck .pQuizFeedback').hide();
      $('.pQuizCheck .step').remove();
      $('.pQuizCheck .pQuizButtons').addClass('pDisable');
      $(".pQuizCheck .step").find("input").css("background-color", "#ebebe4");
      $('.pQuizCheck .pAnsWrap').find("input").css("background-color", "#ebebe4");
      $('.pQuizCheck .pAnsWrap').find("input").attr("disabled", true);
      $('.pQuizCheck .step').find("input").attr("disabled", true);
//      q.screenData["a"] = q.screenData["a"].split(',');
//        for (var i in ans) {
//          $(".pQuizBoard .bOptionRow[data-id='" + ans[i] + "']").addClass("selected");
//        }
      $('.pQuizCheck .pAnsWrap').find("input").each(function (i) {
        $(this).val(q.screenData["a"][i])
      });
      console.log(q.screenData["a"]);
      $('.pQuizCheck .pAnsWrap').find("input").val();
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
          userInput = '<div class="userInputWrap" data-type="' + q.screenData["solve"][q.stepIndex]["ansType"] + '">' + q.screenData["solve"][q.stepIndex]["inputBox"] + '</div>';
        } else {
          userInput = '<div class="userInputWrap">' + q.screenData["solve"][q.stepIndex]["a"] + '</div>';
        }
        $(temp).html("<div style='display:table'>" + qPrefix + userInput + "</div>");
        if (q.screenData["solve"][q.stepIndex]["ansType"] == "radio") {

          $(".bOptionRow[data-id='" + q.screenData["solve"][q.stepIndex]['a'] + "']").addClass("selected");
          // $(".bOptionRow[data-id='0']").addClass("selected");
        }
        $(".bOptionRow").addClass('pDisable').off();
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
            if ($('.bOptionRow.selected').length > 0) {
              _arr.push($('.selected').attr("data-id"));
              _temp.data = _arr;
              _temp.url = q.url + "/" + _parent.attr("data-step");
              sendUserResponse(_temp, function (data) {
                data.step = true;
                checkUserRadioResponse(data)
              });
            } else {
              hideLoader();
            }
          } else {
            if ($('.bOptionRow.selected').length > 0) {
              _arr.push($('.selected').attr("data-id"));
              _temp.data = _arr;
              _temp.url = q.url;
              sendUserResponse(_temp, function (data) {
                checkUserRadioResponse(data)
              });
            } else {
              hideLoader();
            }
          }
          break;
        case "MultKinetic":
          showLoader();
          var _temp = {};
          var _parent = _obj._this.parent().parent();
          if (_parent.hasClass("step")) {

            var _arr = [];
            var len = _parent.find(".mrow input").length;
            _parent.find(".mrow input").each(function () {
              var val = $(this).val();
              var val = $(this).val().trim();
              if (val != "") {
                _arr.push(val);
              }
            })
            if (_arr.length > 0) {
              _temp.data = _arr;
              _temp.url = q.url + "/" + _parent.attr("data-step");
              sendUserResponse(_temp, function (data) {
                data.step = true;
                checkUserResponse(data)
              });
            } else {
              hideLoader();
              console.log("No INput");
            }
          } else {
            var _arr = [];
            var len = _obj._this.parent().parent().find(".mrow input").length;
            _obj._this.parent().parent().find(".mrow input").each(function () {
              var val = $(this).val().trim();
              if (val != "") {
                _arr.push(val);
              }
            })
            console.log(_arr.length);
            if (len == _arr.length) {
              _temp.data = _arr;
              _temp.url = q.url;
              sendUserResponse(_temp, function (data) {
                checkUserResponse(data)
              });
            } else {
              hideLoader();
              console.log("No INput");
            }
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
            // $('.helpVideo').hide();
          } else {
            $('.hint').hide();
            $('.helpVideo').show();
          }
          $(q.mShell).find('.inputBoxHelp').hide();
          $(q.mShell).find('.pHelpWrapper').show();
          $(q.mShell).find('.pDisabler').fadeIn();
          break;
        case "step":
          q.submitCnt = 0;
          manageButtons(false);
          showLoader();
          q.stepIndex = -1;
          $('.pQuizStep').fadeOut();
          _this.loadStep();
          break;
        case "solution":
          q.submitCnt = 0;
          manageButtons(false);
          showLoader();
          overlayDown();
          _this.loadSolution();
          break;
        case "inputBoxHelpVideo":
          $(q.mShell).find('.inputBoxHelp').fadeIn();
          $(q.mShell).find('.pHelpWrapper').hide();
          $(q.mShell).find('.pDisabler').fadeIn();
          break;
        case "helpVideo":
        case "video":
          q.submitCnt = 0;
          if (!showSolutionFlag) {
            manageButtons(false);
          }
          if (q.screenData.hasOwnProperty("video")) {
            $(q.mShell).find(".pDisabler").hide();
            $('.pVideoMainWrapper').addClass('quizVideo');
            videoPlayer.initiateVideo({src: [q.videoRef + _obj._this.attr('data-ref')]});
            videoPlayer.playVideo(0, undefined, "qChk");
          }
          break;
        case "hint":
          q.submitCnt = 0;
          manageButtons(false);
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
            showSolutionFlag = true;
            var feedBackTxt;
            if (data.new_status == "correct") {
              feedBackTxt = feedback.correct[0];
            } else {
              feedBackTxt = feedback.correct[1];
            }
            $(".pQuizCheck .bOptionRow").addClass('pDisable').off();
            $('.pQuizCheck .stepFeedback').hide();
            $('.pQuizCheck .pQuizFeedback').html(feedBackTxt).removeClass("incorrect").addClass("correct").fadeIn();
            $('.pQuizCheck .pQuizButtons').addClass('pDisable');
            $(".pQuizCheck input").css("background-color", "#ebebe4");
            $(".pQuizCheck input").attr("disabled", true);
          } else {
            var feedBackTxt = step_feedback["correct"][0];
            $('.pQuizCheck .pQuizFeedback').hide()
            $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find(".stepFeedback").css("color", "#03a903").html(feedBackTxt).show();
            setTimeout(function () {
              $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find(".stepFeedback").fadeOut(function () {
                showLoader();
                _this.loadStep();
              })
            }, 500);
          }
        } else {
          q.submitCnt++;
          hideLoader();
          if (q.submitCnt == 3) {
            manageButtons(true);
          }
          if (q.stepIndex == q.screenData["solve"].length - 1) {
            var feedBackTxt = step_feedback["incorrect"][(q.submitCnt - 1)];
            $('.pQuizCheck .stepFeedback').hide();
            $('.pQuizCheck .pQuizFeedback').html(feedBackTxt).removeClass("correct").addClass("incorrect").fadeIn();
          } else {
            var feedBackTxt = feedback["incorrect"][(q.submitCnt - 1)];
            $('.pQuizCheck .pQuizFeedback').hide();
            $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find(".stepFeedback").css("color", "red").html(feedBackTxt).show();
          }
        }
      } else {
        $(".pQuizCheck .step").find(".stepFeedback").hide();
        if (data.iscorrect) {
          showSolutionFlag = true;
          var feedBackTxt = feedback["correct"][0];
          $(".pQuizCheck .step").find("input").css("background-color", "#ebebe4");
          $('.pQuizCheck .pAnsWrap').find("input").css("background-color", "#ebebe4");
          $('.pQuizCheck .pAnsWrap').find("input").attr("disabled", true);
          $('.pQuizCheck .step').find("input").attr("disabled", true);
          $('.pQuizCheck .stepFeedback').hide();
          $('.pQuizCheck .pQuizFeedback').html(feedBackTxt).addClass("correct").fadeIn();
          $('.pQuizCheck .pQuizButtons').addClass('pDisable');
          $(".pQuizCheck .bOptionRow").addClass('pDisable').off();
          hideLoader();
        } else {
          var feedBackTxt = feedback["incorrect"][q.submitCnt];
          q.submitCnt++;
          if (q.submitCnt == 3) {
            manageButtons(true);
          }
          $('.pQuizCheck .stepFeedback').hide();
          $('.pQuizCheck .pQuizFeedback').html(feedBackTxt).addClass("incorrect").fadeIn();
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
            $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find("input").addClass("freezed").attr("disabled", true);
            if (q.stepIndex == q.screenData["solve"].length - 1) {
              showSolutionFlag = true;
              var feedBackTxt;
              if (data.new_status == "correct") {
                feedBackTxt = feedback.correct[0];
              } else {
                feedBackTxt = feedback.correct[1];
              }
              $('.pQuizCheck .stepFeedback').hide();
              $('.pQuizCheck .pQuizFeedback').html(feedBackTxt).removeClass("incorrect").addClass("correct").fadeIn();
              $('.pQuizCheck .pQuizButtons').addClass('pDisable');
              $('.pQuizCheck .pAnsWrap').find("input").css("background-color", "#ebebe4");
              $('.pQuizCheck .pAnsWrap').find("input").attr("disabled", true);
              $('.pQuizCheck .pAnsWrap').find("input").each(function (i) {
                $(this).val(q.screenData["a"][i])
              });
            } else {
              $('.pQuizCheck .pQuizFeedback').hide();
              var feedBackTxt = step_feedback["correct"][0];
              $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find(".stepFeedback").css("color", "#03a903").html(feedBackTxt).show();
              setTimeout(function () {
                $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find(".stepFeedback").fadeOut(function () {
                  showLoader();
                  _this.loadStep();
                })
              }, 500);
            }
          } else {

            q.submitCnt++;
            if (q.submitCnt == 3) {
              manageButtons(true);
            }
            hideLoader();
            if (q.stepIndex == q.screenData["solve"].length - 1) {
              var feedBackTxt = feedback["incorrect"][(q.submitCnt - 1)];
              $('.pQuizCheck .stepFeedback').hide();
              $('.pQuizCheck .pQuizFeedback').html(feedBackTxt).removeClass("correct").addClass("incorrect").fadeIn();
            } else {
              $('.pQuizCheck .pQuizFeedback').hide();
              var feedBackTxt = step_feedback["incorrect"][(q.submitCnt - 1)];
              $(".pQuizCheck .step[data-step='" + q.stepIndex + "']").find(".stepFeedback").css("color", "red").html(feedBackTxt).show();
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
          showSolutionFlag = true;
          var feedBackTxt;
          if (data.new_status == "correct") {
            feedBackTxt = feedback.correct[0];
          } else {
            feedBackTxt = feedback.correct[1];
          }
          $(".pQuizCheck .step").find("input").css("background-color", "#ebebe4");
          $('.pQuizCheck .pAnsWrap').find("input").css("background-color", "#ebebe4");
          $('.pQuizCheck .pAnsWrap').find("input").attr("disabled", true);
          $('.pQuizCheck .step').find("input").attr("disabled", true);
          $('.pQuizCheck .pQuizFeedback').html(feedBackTxt).addClass("correct").fadeIn();
          $('.pQuizCheck .pQuizButtons').addClass('pDisable');
          hideLoader();
        } else {
          var feedBackTxt = feedback["incorrect"][(q.submitCnt)];
          q.submitCnt++;
          if (q.submitCnt == 3) {
            manageButtons(true);
          }
          $('.pQuizCheck .pAnsWrap').find("input").css("background-color", "yellow");
          $('.pQuizCheck .pQuizFeedback').html(feedBackTxt).addClass("incorrect").fadeIn();
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
      showSolutionFlag = false;
      manageButtons(false);
      $('.pQuizCheck .pQuizButtons').removeClass('pDisable');
      $('.pQuizCheck .step').remove();
      $('.pHelpWrapper').removeClass("quizboardHelp")
      $(q.mShell).find('.pQuizCheck .pQuizStep').show();
      $('.pQuizCheck .pQuizFeedback').removeClass('correct').removeClass('incorrect').hide();
      $(q.mShell).find('.pQuizCheck .pQuizStepWrap').hide();
      $('.pQuizCheck .pAnsWrap').show();
      $(q.mShell).find(".helpVideo").attr("data-ref", "");
      $(".pQuizCheck .bOptionRow").removeClass('pDisable');

    }
    function manageButtons(disable) {
      if (disable) {
        $(".pQuizCheck input").attr("disabled", true);
        $('.pQuizButtons.uSubmit').addClass('pDisable');
        $(".pQuizCheck .bOptionRow").addClass('pDisable').off();
      } else {
        $(".pQuizCheck input").not('.freezed').attr("disabled", false);
        $('.pQuizButtons.uSubmit').removeClass('pDisable');
        $(".pQuizCheck .bOptionRow").removeClass('pDisable').off();
        $(".pQuizCheck .bOptionRow").off(mouseEvents.up).on(mouseEvents.up, radioUp);
      }
    }
  }

