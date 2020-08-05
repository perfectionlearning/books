
  /*
   * make async http request.
   */
  function httpRequest(_url, _type, _callback, _errorCallback) {
    //console.log("request : ",_url);
    var _requestObject = {
      url: _url,
      xhrFields: {
        withCredentials: true
      },
      crossDomain: true,
      method: "GET",
      dataType: _type
    };
    executeHttpRequest({ _requestObject, _url, _callback, _errorCallback });
    // var request = $.ajax({
    //   url: _url,
    //   xhrFields: {
    //     withCredentials: true
    //   },
    //   crossDomain: true,
    //   method: "GET",
    //   dataType: _type
    // });

    // request.done(function (data) {
    //   if (typeof _callback != "undefined") {
    //     if (data.hasOwnProperty('data')) data = data.data; // compensate for wrap_output = true;
    //     _callback(data);
    //     request = null;
    //   }
    // });

    // request.fail(function (jqXHR, textStatus) {
    //   if (typeof _errorCallback != "undefined") {
    //     _errorCallback();
    //   }
    //   console.log(jqXHR);
    //   console.log(textStatus);
    //   console.log("Request failed: " + _url);
    //   request = null;
    // });
  }

  /*
   * executes async http request.
   * We create new executeHttpRequest function to
   * have same done function to all submit method.
   */
  function executeHttpRequest(data) {
    var _url, _callback, _errorCallback, _requestObject = {};
    if (data._callback) {
      _callback = data._callback;
    }
    if (data._errorCallback) {
      _errorCallback = data._errorCallback;
    }
    if (data._url) {
      _url = data._url;
    }
    if (data._requestObject && JSON.stringify(data._requestObject) !== '{}') {
      _requestObject = data._requestObject;
    } else {
      alert('requestObject should not be blank');
      return;
    }
    var request = $.ajax(_requestObject);

    request.done(function (data) {
      if (typeof _callback != "undefined") {
        if (data.hasOwnProperty('data')) data = data.data; // compensate for wrap_output = true;
        _callback(data);
        request = null;
      }
    });

    request.fail(function (jqXHR, textStatus) {
      if (typeof _errorCallback != "undefined") {
        _errorCallback();
      }
      console.log(jqXHR);
      console.log(textStatus);
      console.log("Request failed: " + _url);
      request = null;
    });
  }
  //allows only numbers 
  function inputKeydown(e) {
    var temp = ['.', '-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'e', '?'];
    var str = e.key;
    var curr = temp.indexOf(str);


    if ((curr < 0) && e.keyCode != 8 && e.keyCode != 39 && e.keyCode != 37 && e.keyCode != 9 && e.keyCode != 13) {
      e.preventDefault();
    }

  }
  //updates the mathml code. replace maction with input box
  function cleanMML(data) {
    var pattern = /<maction (.+?)>(.+?)<\/maction>/ig;
    var toReplace = '<semantics><annotation-xml encoding="application/xhtml+xml"><input xmlns="http://www.w3.org/1999/xhtml" type="text" size="5" name="b" maxlength="9" onKeyDown="inputKeydown(event)"  /></annotation-xml></semantics>';

    if (data.ansType == "MultKinetic") {

      $('._tempDiv').html(data["a"]);
      data["inputBox"] = data["a"].replace(pattern, toReplace);
      data["a"] = [];
      data["maxLength"] = [];
      $('._tempDiv maction').each(function (no) {
        var _txt = $(this).text();
        var len = _txt.length;
        data["a"].push(_txt);
        data["maxLength"][no] = len;
      })
    } else {
      var temp = "";
      for (var i in data.choices) {
        temp += "<div class='bOptionRow' data-id=" + data.choices[i]["id"] + "><div class='tableCell'><div class='bRadioBtn'><div class='radioSelect'></div></div></div> <div class='bRadioText'>" + data.choices[i]["answer"] + "</div></div>"
      }

      data["inputBox"] = temp;
    }
    for (var i in data.solve) {
      if (data["solve"][i]["ansType"] == "MultKinetic") {

        $('._tempDiv').html(data["solve"][i]["a"]);
        data["solve"][i]["maxLength"] = [];
        $('._tempDiv maction').each(function (no) {
          var _txt = $(this).text();
          var len = _txt.length;
          data["solve"][i]["maxLength"][no] = len;
        })
        data["solve"][i]["a"] = data["solve"][i]["a"].replace(/<mfrac>/g, " <mstyle mathsize='140%'><mfrac>");
        data["solve"][i]["a"] = data["solve"][i]["a"].replace(/<\/mfrac>/g, "</mfrac> </mstyle'>")
        data["solve"][i]["inputBox"] = data["solve"][i]["a"].replace(pattern, toReplace);
      } else {
        var temp = "";
        for (var j in data.solve[i].choices) {
          temp += "<div class='bOptionRow' data-id=" + data.solve[i].choices[j]["id"] + "><div class='tableCell'><div class='bRadioBtn'><div class='radioSelect'></div></div></div> <div class='bRadioText'>" + data.solve[i].choices[j]["answer"] + "</div></div>"
        }
        //data["solve"][i]["a"] = temp;
        data["solve"][i]["inputBox"] = temp;
      }
    }
    return data;
  }

  /*
   * detect environment.
   */
  var BrowserDetect = {
    Android: function () {
      return navigator.userAgent.match(/Android/i) ? true : false;
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i) ? true : false;
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i) ? true : false;
    },
    any: function () {
      return (BrowserDetect.Android() || BrowserDetect.BlackBerry() || BrowserDetect.iOS() || BrowserDetect.Windows());
    },
    ie9: function () {
      return navigator.userAgent.match(/MSIE 9.0/i) ? true : false;
    },
    ie10: function () {
      return navigator.userAgent.match(/MSIE 10.0/i) ? true : false;
    },
    ie: function () {

      var msie = navigator.userAgent.indexOf("MSIE ");

      if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
      {
        return true;
      }
      else  // If another browser, return 0
      {
        return false;
      }

    }

  };

  var mouseEvents = (BrowserDetect.any()) ?
    {
      down: 'touchstart',
      move: 'touchmove',
      up: 'touchend',
      enter: 'mouseenter',
      leave: 'mouseleave',
      click: 'click'
    }
  :
    {
      down: 'mousedown',
      move: 'mousemove',
      up: 'mouseup',
      enter: 'mouseenter',
      leave: 'mouseleave',
      click: 'click'
    };



//===============================================================================
  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

//returns the  mouse position
  function getMouseOffset(e) {
    if ((e.type == "touchend" || e.type == "touchmove" || e.type == "touchstart") && e.originalEvent) {
      e.pageX = e.originalEvent.changedTouches[0].pageX;
      e.pageY = e.originalEvent.changedTouches[0].pageY;
    }
    var mouseX = Number(e.pageX);
    var mouseY = Number(e.pageY);
    return {"x": mouseX, "y": mouseY};
  }
//converts seconds to minutes
  function getTime(currSec) {
    currSec = parseInt(currSec)
    if (currSec < 10) {
      currSec = "00:0" + currSec;
    } else if (currSec > 59) {
      var min = parseInt(currSec / 60);
      var sec = parseInt(currSec - (min * 60));
      if (sec < 10) {
        sec = "0" + sec;
      }
      if (min < 10) {
        min = "0" + min;
      }
      currSec = min + ":" + sec;
    } else {
      currSec = "00:" + currSec;
    }
    return currSec;
  }
  function showLoader() {
    $('.activityLoader').show();
  }
  function hideLoader() {
    setTimeout(function () {
      $('.activityLoader').hide();
    }, 500)
  }
// create DOM element
  function createElement(_obj) {
    var elem = document.createElement(_obj.tagName);
    if (_obj.hasOwnProperty("attr")) {
      for (var i in _obj.attr) {
        elem.setAttribute(i, _obj.attr[i]);
      }
    }
    return elem;
  }
  $(window).on('hashchange', function () {

    updateUrl();

  });
  var blockHashEvent = false;
  //updates the url depending on the screen  
  function updateUrl() {
    if (blockHashEvent === true) {
      return false;
    }
    var url = location.hash.replace('#', '');
    url = unescape(url);
    url = url.split("/");
    if (url.length > 0 && url != "") {
      var _temp;
      var data = {};

      for (var i in url) {
        _temp = url[i].split("_");
        if (_temp[0] == "lesson") {
          data.lessonFlag = _temp[1];
        }
        if (_temp[0] == "type") {
          data.type = _temp[1];
        }

        if (_temp[0] == "searchKey") {
          data.searchKey = _temp[1];
        }
        if (_temp[0] == "title") {

          data.title = _temp[1];
        }
        if (_temp[0] == "href") {
          _temp[1] = _temp[1].replace(/-/g, '_');

          data.href = _temp[1].split('~').join('/');
        }
        if (_temp[0] == "labtype" && _temp[1] != "undefined") {
          data.labtype = _temp[1]
        }
        if (_temp[0] == "chapter") {
          data.chap = _temp[1];
        }
        if (_temp[0] == "unit") {
          data.unit = _temp[1];
        }
        if (_temp[0] == "section") {
          data.section = _temp[1];
        }
        if (_temp[0] == "subsection") {
          data.subsection = _temp[1];
        }
		if (_temp[0] == "page") {
          data.page = _temp[1];
        }
        if (_temp[0] == "v" && _temp[2] != "undefined") {
          data.v_index = _temp[2];
        }
      }
      ctrl.hashChange(data);
    } else {
      ctrl.hashChange({type: "book"});
    }
  }

//scaling  2D actvity on window resize
  function resizeJSActivity() {
    if (!$(".pJsActWrapper").is(":visible")) {
      return false;
    }
    var maxScale = 1;
    var frame = document.getElementById("pJSActFrame");
    var shellWidth = parseInt(frame.style.width);//1024;
    var shellHeight = parseInt(frame.style.height);//680;

    var availableWidth = $(".pJsActWrapper").width(),
      availableHeight = $(".pJsActWrapper").height(),
      scale, left, top, width, height;

    if (availableWidth > availableHeight) {
      height = availableHeight;
      width = height * shellWidth / shellHeight;
      top = 0;
      left = (availableWidth - width) / 2;
    }
    if (availableWidth <= availableHeight || left < 0) {
      width = availableWidth;
      height = width * shellHeight / shellWidth;
      left = 0;
      top = (availableHeight - height) / 2;
    }
    scale = height / shellHeight;
    if (scale >= maxScale) {
      scale = maxScale;
      width = shellWidth * maxScale;
      height = shellHeight * maxScale;
      left = (availableWidth - width) / 2;
      top = (availableHeight - height) / 2;
    }
    // console.log(scale, left, top)
    // console.log(shellWidth)
    var _left = (left + (shellWidth * scale)) - 30;
    $('.jsClose').css({
      "top": (parseInt($(".pJsActWrapper").css("padding-top")) + top) + "px",
      "left": _left + "px"
    })
    frame.style.left = left + "px";
    frame.style.top = (parseInt($(".pJsActWrapper").css("padding-top")) + top) + "px";
    sTransFormValue = "scale(" + (scale) + "," + (scale) + ")";
    frame.style.transform = sTransFormValue;
    frame.style.msTransform = sTransFormValue;
    frame.style.WebkitTransform = sTransFormValue;
  }

  var JSActivityDimensions = {
    "jsact_Chapter_3_0": {
      "width": 600,
      "height": 600
    },
    "jsact_Chapter_7_27": {
      "width": 760,
      "height": 400
    },
    "jsact_Chapter_8_0": {
      "width": 760,
      "height": 430
    },
    "jsact_Chapter_8_24": {
      "width": 760,
      "height": 430
    },
    "jsact_Chapter_12_7": {
      "width": 750,
      "height": 600
    },
    "jsact_Chapter_16_0": {
      "width": 750,
      "height": 600
    },
    "jsact_Chapter_18_0_1": {
      "width": 750,
      "height": 600
    },
    "jsact_Chapter_18_0_2": {
      "width": 750,
      "height": 600
    },
    "jsact_Chapter_18_13": {
      "width": 750,
      "height": 600
    },
    "jsact_Chapter_23_6_1": {
      "width": 580,
      "height": 500
    },
    "jsact_Chapter_23_6_2": {
      "width": 580,
      "height": 500
    },
    "jsact_Chapter_24_0": {
      "width": 760,
      "height": 540
    },
    "jsact_Chapter_24_5_1": {
      "width": 760,
      "height": 540
    },
    "jsact_Chapter_24_12": {
      "width": 760,
      "height": 550
    },
    "jsact_Chapter_28_0": {
      "width": 550,
      "height": 500
    },
    "jsact_Chapter_28_5": {
      "width": 550,
      "height": 500
    },
    "jsact_Chapter_29_0": {
      "width": 551,
      "height": 600
    },
    "jsact_Chapter_29_8": {
      "width": 551,
      "height": 600
    },
    "jsact_Chapter_29_12": {
      "width": 551,
      "height": 600
    },
    "jsact_Chapter_29_13": {
      "width": 551,
      "height": 600
    },
    "jsact_Chapter_41_0": {
      "width": 631,
      "height": 500
    },
    "jsact_Chapter_43_21_1": {
      "width": 634,
      "height": 517
    },
    "jsact_Chapter_43_21_2": {
      "width": 634,
      "height": 500
    }
  }