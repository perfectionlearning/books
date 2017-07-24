  var LabData = function () {
    var lab = {}
    var device = BrowserDetect.any();
    lab.assignID = "";
    lab.getLink = "";
    lab.setLink = "https://qa1.perfectionlearning.com/api/rest/assign/SJTVRhCmAWb/labdata/update";
    lab.getLink = "https://qa1.perfectionlearning.com/api/rest/assign/SJTVRhCmAWb/defn";
    lab.ans = {};
    this.init = function (data) {
      showLoader();
      lab.assignID = data.id;
      lab.mShell = $('.mShell')[0];
      lab.setLink = ctrl.getDomain() + "/api/rest/assign/" + lab.assignID + "/labdata/update";
      lab.getLink = ctrl.getDomain() + "/api/rest/assign/" + lab.assignID + "/defn";
      httpRequest(lab.getLink, "json", function (udata) {
        hideLoader();
        lab.problemIds = buildIdList(udata.problems);
        if (udata.hasOwnProperty("labData")) {
          lab.ans = $.parseJSON(udata.labData);
          if (lab.ans.hasOwnProperty("ques_0")) {
            updateUserData();
          } else {
            createDataArray()
          }
        } else {
          createDataArray()
        }
        labEvent();
      }, function () {
        hideLoader();
        console.log("cant dget");
      });



    }

    function buildIdList(data) {
      var ids = {};
      data.forEach((item) => {
        ids['ques_' + item.problem_num] = item._id;
      });

      return ids;
    }

    function labEvent() {
      if (!device) {
        $(lab.mShell).find(".pLabSaveButton").off("mouseover", mouseover).on("mouseover", mouseover);
        $(lab.mShell).find(".pLabSaveButton").off("mouseout", mouseout).on("mouseout", mouseout);
      }
      $(lab.mShell).find(".pLabSaveButton").off(mouseEvents.down).on(mouseEvents.down, mousedown);
      $(lab.mShell).find(".pLabSaveButton").off(mouseEvents.up).on(mouseEvents.up, saveLabAnswer);
      $(lab.mShell).find(".pLabSubmitButton").off("click", handleSubmitButton).on("click", handleSubmitButton);

    }
    function mouseover() {
      $(this).addClass("pHover")
    }
    function mouseout() {
      $(this).removeClass("pHover")
    }
    function mousedown() {
      $(this).addClass("pDown")
    }
    function createDataArray() {
      var _temp = [];
      var _val;
      $('.pLabAnswerWrapper').each(function (i) {
        $(this).find(".pLabSaveButton").attr("data-id", "ques_" + i);
        if ($(this).find(".pLabAnswerTable").length > 0) {
          $(this).find(".pLabSaveButton").attr("data-type", "table");
          _temp = [];
          $(this).find(".pLabAnswerInput").each(function () {
            _val = $(this).val().trim();
          _val = _val.replace(/[$|$]/g, '~');
        _temp.push(_val);
          })
          _temp = _temp.join("$|$");
          lab.ans["ques_" + i] = _temp
          } else if ($(this).find(".pLabAnswerBox").length > 0) {
          $(this).find(".pLabSaveButton").attr("data-type", "textarea");
    _val = $(this).find('.pLabAnswerBox').val();
      lab.ans["ques_" + i] = _val;
      }
      });
    }
        function updateUserData() {
      var _temp = [];
        var _val;
      $('.pLabAnswerWrapper').each(function (i) {
        _temp = lab.ans["ques_" + i];
          $(this).find(".pLabSaveButton").attr("data-id", "ques_" + i);
          if ($(this).find(".pLabAnswerTable").length > 0) {
          if (typeof _temp == "string") {
          _temp = _temp.split("$|$");
        console.log(_temp);
          }
          $(this).find(".pLabSaveButton").attr("data-type", "table");
          $(this).find(".pLabAnswerInput").each(function (no) {
    _temp[no] = _temp[no].replace(/~/g, '$|$');
      $(this).val(_temp[no])
          })
      } else if ($(this).find(".pLabAnswerBox").length > 0) {
          $(this).find(".pLabSaveButton").attr("data-type", "textarea");
          $(this).find('.pLabAnswerBox').val(_temp);

        }
            });

    }
            function submitUserData(cb) {
          var _temp = [];
          var _val;
        $('.pLabAnswerWrapper').each(function (i) {
          if ($(this).find(".pLabAnswerTable").length > 0) {
          _temp = [];
        $(this).find(".pLabAnswerInput").each(function () {
      _val = $(this).val();
      _temp.push(_val);
    })
      lab.ans["ques_" + i] = _temp
      } else if ($(this).find(".pLabAnswerBox").length > 0) {
          _val = $(this).find('.pLabAnswerBox').val();
      lab.ans["ques_" + i] = _val;
        }
      });
      saveUserAnswer();
      console.log(lab.ans);
    }

    // Handler for Print and Submit buttons.
    // Get the element ID (lab-print or lab-submit) and call the appropriate function.
    function handleSubmitButton(e) {
        var btnActions = {
            'lab-print': printLabAnswer,
            'lab-submit': submitLabAnswers
        };

        var btn = e.currentTarget;
        btnActions[btn.id]();
    }

        function printLabAnswer() {
        console.log("its here");
      submitUserData();
        var containers = $(lab.mShell).find(".pLabPageWrapper").find(".pExerciseContainer");
        // console.log(containers);
      var str = "";
          containers.each(function (i, element) {
          element = $(element);
          // exercise title
        str += "<h2 class=\"SectionName\">" + element.find(".pExcersiseTitle").text() + "</h2>\r\n";
        //
        // question and answers
          element.find(".pLabQuestion").each(function (j, qEle) {
            qEle = $(qEle);
          // console.log(qEle)
              str += "<p class=\"ExerciseBody\" style='color:#FF0000; padding-left:20px;'>" + qEle.find(".pLabQNumber").text() + " " + qEle.find(".pLabQText").html() + "</p>\r\n";
          if (qEle.find("textarea").length != 0) {
            if (qEle.find("textarea")[0].value != "") {
            str += "<p style='padding-left:35px;'>" + qEle.find("textarea")[0].value + "</p>\r\n";
            } else {
              str += "<p style='font-size:18px;'>Answer not submitted</p>\r\n";
              }
          } else {
                // console.log("table");
                // console.log(qEle.find("table")[0].outerHTML);
              var table = qEle.find("table").clone();
            table.find("input").each(function (k, input) {
            var parent = $(input).parent();
              if (input.value != "") {
                parent.prepend(input.value);
              } else {
            parent.prepend("Answer not submitted ");
              }
               $(input).remove();
            });
            table.find("td").each(function () {
      $(this).css("text-align", "center").css("width", "auto").css("border", "1px solid orange");
            });
      table.width(qEle.find("table").outerWidth() + 40).css("border", "1px solid orange").css("color", "orange").attr("cellSpacing", 0);
      str += table[0].outerHTML;
          }
        });
        //
      });
      // console.log(str)
      var OpenWindow = window.open('course/template/printPage.html', '_blank', 'width=630,height=470,resizable=1');
      // OpenWindow.document.getElementById("container").innerHTML = str;
      OpenWindow.onload = function () {         OpenWindow.document.getElementById("container").innerHTML = str;         OpenWindow.print();
      }
        }

  function submitLabAnswers() {
    console.log('Submit button clicked.', lab.problemIds);
    var keys = Object.keys(lab.problemIds);
    keys.forEach((key) => {
      var probInstId = lab.problemIds[key];
      sendLabResponse(probInstId, lab.ans[key]);
    });
  }


  function sendLabResponse(probInstId, answer) {
      console.log("user lab response");
      var _data = JSON.stringify({"studentResponse": answer });
      var url = ctrl.getDomain() + "/api/rest/submit/" + lab.assignID + "/" + probInstId;
console.log('sendLabResponse', url, answer);
      var request = $.ajax({
        url: url,
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
        request = null;

      });

      request.fail(function (jqXHR, textStatus) {
        console.log(jqXHR);
        console.log(textStatus);
        request = null;
        alert("please login");
      });
  }

  function saveLabAnswer() {
    $(".pLabSaveButton").removeClass('pHover').removeClass('pDown')
    var _type = $(this).attr("data-type");
    var _id = $(this).attr('data-id');
    console.log(_id);
    var _userInput, _val;
    if (_type == "textarea") {
      _userInput = "";
      _userInput = $(this).parent().find('.pLabAnswerBox').val();
    } else if (_type == "table") {
      _userInput = [];
      $(this).parent().find(".pLabAnswerInput").each(function () {
        _val = $(this).val();
        _val = _val.replace(/[$|$]/g, '~');
        _userInput.push(_val);
      })
      _userInput = _userInput.join("$|$");
    }

    lab.ans[_id] = _userInput;
    saveUserAnswer();

  }

        function saveUserAnswer() {
        console.log("user response");
      showLoader();       var _data = JSON.stringify({"lab_data": lab.ans});
        //  var _data = {"lab_data": lab.ans};
        console.log(_data);
        var request = $.ajax({
      url: lab.setLink,
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
        console.log("user data updated");
        hideLoader();
        request = null;

      });

      request.fail(function (jqXHR, textStatus) {
        console.log(jqXHR);
        console.log(textStatus);
        request = null;
        alert("please login");
      });
    }

  }
