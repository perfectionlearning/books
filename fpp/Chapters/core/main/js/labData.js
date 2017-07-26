/*
 * Notes on handling lab answer save:
 * There are two entirely separate actions for saving lab answers:
 * 1. Storage of answers between lab sessions, without submitting for the gradebook. The Save button handles this.
 * 2. Submitting lab answers for the gradebook. The Submit your answers button handles this.
 * The REST calls for these processes are different.
 *
 * If the Save button is clicked, only action 1 is performed.
 * If the Submit your answers button is clicked, actions 1 and 2 are both performed for each answer.
 * The functions called are:
 * Button: Save
 *   handleSaveButton: Get the 'ques_*' exercise identifier for the clicked button;
 *     setLabAns: Receive 'ques_*' string. Extract the user input for the indicated exercise, and store it in the local lab.ans hash.
 *     saveLabAnswerList: Perform the REST call (lab.setLink) to save labData for this assignment to the database. (Does not affect gradebook.)
 *     
 * Button: Submit your answers
 *   handleSubmitButton: For the lab-submit button, call submitLabAnswers.
 *     submitLabAnswers: For each lab exercise, setLabAns; if the exercise is answered (isAnswered returns true), call sendLabResponse.
 *       setLabAns: See above, under handleSaveButton.
 *       isAnswered: Check the exercise to see if its field contains data.
 *       sendLabResponse: Perform the REST call (submitLink) to save the problem submision to the database. (Affects gradebook.)
 *
 * Button: Print your answers
 *   handleSubmitButton: For the lab-print button, call printLabAnswers.
 *
 *
 * Explanatory note on the Save button handler: 
 *   Formerly, the Save button handler responded directly to the click event and
 *   stored the exercise input in the lab.ans hash before calling saveUserAnswer
 *   to perform the REST call. Because the need to store exercise input can 
 *   arise in multiple contexts, the storage in the hash was separated from the 
 *   button handler itself.
 */
  var LabData = function () {
    var lab = {}
    var device = BrowserDetect.any();
    lab.assignID = "";
    lab.getLink = "";
    lab.setLink = "https://qa1.perfectionlearning.com/api/rest/assign/SJTVRhCmAWb/labdata/update";
    lab.getLink = "https://qa1.perfectionlearning.com/api/rest/assign/SJTVRhCmAWb/defn";
    lab.ans = {};
    lab.submitBtnActions = {
      'lab-print': printLabAnswer,
      'lab-submit': submitLabAnswers
    };

    this.init = function (data) {
      showLoader();
      lab.assignID = data.id;
      lab.mShell = $('.mShell')[0];
      lab.setLink = ctrl.getDomain() + "/api/rest/assign/" + lab.assignID + "/labdata/update";
      lab.getLink = ctrl.getDomain() + "/api/rest/assign/" + lab.assignID + "/defn";
      lab.submitLink = ctrl.getDomain() + "/api/rest/submit/" + lab.assignID + "/";
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
      $(lab.mShell).find(".pLabSaveButton").off(mouseEvents.up).on(mouseEvents.up, handleSaveButton);
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
      saveLabAnswerList();
      console.log(lab.ans);
    }

    // Handler for Print and Submit buttons.
    // Get the element ID (lab-print or lab-submit) and call the appropriate function.
    function handleSubmitButton(e) {
        var btn = e.currentTarget;
        if (btn.id && lab.submitBtnActions[btn.id]) { // safety net; should always be true.
          lab.submitBtnActions[btn.id]();
        } else {
          console.log('handleSubmitButton failed for', btn);
        }
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

  // Check each answer to make sure it contains a value before submitting.
  function isAnswered(key) {
    var answer = lab.ans[key];
    var answered = false;

    if (Array.isArray(answer)) {
      answered = answer.filter((item) => { return item.length > 0; }).length > 0;
    }
    else if (typeof answer !== 'undefined') {
      answered = answer.length > 0;
    }
    return answered;
  }

  function submitLabAnswers() {
    showLoader();
    var keys = Object.keys(lab.problemIds);
    lab.submissions = {};
    keys.forEach((key) => {
      var probInstId = lab.problemIds[key];
      if (isAnswered(key)) {
        lab.submissions[probInstId] = 1;
        sendLabResponse(probInstId, lab.ans[key]);
      }
    });
  }


    function submitLabAnswers() {
/*
    console.log('Submit button clicked.', lab.problemIds);
    var _ids = document.querySelectorAll('div.pLabSaveButton');
console.log('submitLabAnswers data-ids', _ids);
*/
      var keys = Object.keys(lab.problemIds);
  console.log('submitLabAnswers keys', keys);
      keys.forEach((key) => {
        setLabAns(key);
        if (isAnswered(key)) {
          var probInstId = lab.problemIds[key];
          sendLabResponse(probInstId, lab.ans[key]);
        }
      });
      saveLabAnswerList();
    }

  function sendLabResponse(probInstId, answer) {
      console.log("user lab response");
      var _data = JSON.stringify({"studentResponse": answer });
      var url = lab.submitLink + probInstId;
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
        delete lab.submissions[probInstId];
        if (Object.keys(lab.submissions).length === 0) {
          hideLoader();
        }
        request = null;
      });

      request.fail(function (jqXHR, textStatus) {
        console.log(jqXHR);
        console.log(textStatus);
        hideLoader();
        request = null;
        alert("please login");
      });
  }

    // Separate handling of Save button from actually getting the field content and saving it.
    function handleSaveButton(e) {
      $(".pLabSaveButton").removeClass('pHover').removeClass('pDown')
      var target = e.target;
      var quesNo = $(target).data('id');
      setLabAns(quesNo);
      saveLabAnswerList();
    }

    // Accept the ques_x question identifier, use it to locate the input field(s).
    function setLabAns(quesNo) {
      var target = document.querySelectorAll('[data-id=' + quesNo + ']');
      var type = $(target).data('type');
      if (type === 'textarea') {
        var userInput = $(target).parent().find('.pLabAnswerBox').val();
      } else {
        var items = [];
        $(target).parent().find(".pLabAnswerInput").each(function (idx, item) {
          var tmp = $(item).val();
          tmp = tmp.replace(/[$|$]/g, '~');
          items.push(tmp);
        });
        userInput = items.join('$|$');
      }
      lab.ans[quesNo] = userInput;
    }

    function saveLabAnswerList() {
      showLoader();
      var _data = JSON.stringify({"lab_data": lab.ans});
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
