  var VideoPlayer = function () {
    var elem = {};
    var buffer;
    var lastPlayPos = 0;
    var bufferingDetected = false;
    var currentPlayPos = 0;
    var checkInterval = 500;
    elem.sliderTouch = false;
    elem.duration;
    elem.currentTime = 0;
    elem.subtitle = false;
    var slideMouseDown = false;
    var dIndex;
    var millisec;
    var cIndex;
    var _this = this;
    this.init = function () {
      elem["srcData"] = [];
      elem["video"] = $('.video_setup')[0];
      elem["title"] = $('.pSubtitleHeader');
      elem["slideData"] = $('.pSubtitleBody');
      elem["scruBar"] = $('.scruBar');
      elem["seek"] = $('.seekBar');
      elem["progressBar"] = $(".mProgressFront");
      elem["totalDuration"] = $(".totalDuration");
      elem["volumeseek"] = $(".volumeseek");
      elem["volume"] = $(".pVolume");
      elem["seek"].off(mouseEvents.down, mSliderDown).on(mouseEvents.down, mSliderDown);
      elem["video"].addEventListener("timeupdate", updateTime);
      elem["video"].addEventListener("ended", videoEnd)
      elem["volumeseek"].off(mouseEvents.down).on(mouseEvents.down, function () {
        slideMouseDown = true;
        $(window).off(mouseEvents.move, volumesliderMove).on(mouseEvents.move, volumesliderMove);
        $(window).off(mouseEvents.up, volumesliderUp1).on(mouseEvents.up, volumesliderUp1);
      });
//      elem["volumeseek"].draggable({axis: "y", containment: "parent", start: function () {
//        }});

      if (BrowserDetect.any()) {
        elem["volume"].hide();
      }
      $('.videoPlay_btn').off(mouseEvents.down).on(mouseEvents.down, function () {
        $('.pButtons[data-type="play"]').removeClass("pPlay").addClass("pPause");
        $('.videoPlay').hide();
        elem["video"].play();
        clearInterval(buffer);
        buffer = setInterval(function () {
          checkBuffering();
        }, 500);


      });

    }
    function volumesliderUp1() {
      $(window).off(mouseEvents.move, volumesliderMove);
      $(window).off(mouseEvents.up, volumesliderUp1);
      $('.pVolumeSlider').toggle("slide", {direction: "down"});
      if (!$('.videoWrapper').hasClass("mouseIn")) {
        $('.videoWrapper').removeClass('pHover');
      }
    }
    function volumesliderUp(e) {


      var pos = getMouseOffset(e);
      pos.y = pos.y - $(".volumeSlider").offset().top;
      var percentage = Number(Math.round((pos.y * 100) / $(".volumeSlider").height()));
      if (percentage > 100) {
        percentage = 100
      }
      if (percentage < 0) {
        percentage = 0
      }

      var volume = 1 - (percentage / 100);

      volume = volume.toFixed(1)
      elem["video"].volume = volume;
      if (volume == 0) {
        elem["volume"].removeClass('on')
        elem["volume"].addClass('mute')
      } else {
        elem["volume"].removeClass('mute')
        elem["volume"].addClass('on')
      }


    }
    function volumesliderMove(e) {
      var pos = getMouseOffset(e);
      $('.videoWrapper').addClass('pHover');
      pos.y = pos.y - $(".volumeSlider").offset().top;
      var percentage = Number(Math.round((pos.y * 100) / $(".volumeSlider").height()));

      if (percentage > 100) {
        percentage = 100
      }
      percentage = percentage - 7;
      if (percentage < 0) {
        percentage = 0
      }
      elem["volumeseek"].css({top: percentage + "%"});
      volumesliderUp(e);

    }

    this.initiateVideo = function (data) {
      elem["srcData"] = data.src
      $('.videoWrapper').removeClass("small");
      $('.videoWrapper').removeClass("big");
      elem["title"].html("");
      elem["slideData"].html("");
    }

    function manageVideoNavigation() {
      if (cIndex == 0 && (elem["srcData"].length == 1)) {
        $('.pPrevVideo').addClass("pDisable");
        $('.pNextVideo').addClass("pDisable");
      } else if (cIndex == 0) {
        $('.pPrevVideo').addClass("pDisable");
        $('.pNextVideo').removeClass("pDisable");
      } else if (cIndex == (elem["srcData"].length - 1)) {
        $('.pPrevVideo').removeClass("pDisable");
        $('.pNextVideo').addClass("pDisable");
      } else {
        $('.pPrevVideo').removeClass("pDisable");
        $('.pNextVideo').removeClass("pDisable");
      }
    }
    this.nextVideo = function () {
      cIndex++;
      this.playVideo(cIndex);
    }
    this.preVideo = function () {
      cIndex--;
      this.playVideo(cIndex);
    }
    this.setVolume = function (bool) {
      if (bool) {
        elem["video"].volume = 1;
      } else {
        elem["video"].volume = 0;
      }
    }
    this.playVideo = function (ind, playVideo, qChk) {
      cIndex = ind;
      reset();
      $(".pButtons[data-type='play']").removeClass("pDisable");
      $('.pActivityWrapper').show();
      $('.videoWrapper').addClass("vOpen");
      manageVideoNavigation();
      if (typeof qChk == "undefined") {
        elem["video"].src = "assets/video/" + elem["srcData"][ind] + ".webm";
        elem["video"].src = "assets/video/" + elem["srcData"][ind] + ".mp4";
      } else {
        elem["video"].src = elem["srcData"][ind] + ".mp4";
      }

      httpRequest("course/json/wb/" + elem["srcData"][ind] + ".json", "json", function (data) {
        console.log(data);
        elem.subtitle = data;
        dIndex = -1;
        $('.pSubtitleWrapper').show();
      }, function () {
        elem.subtitle = false;
        elem["slideData"].html("");
        $('.pSubtitleWrapper').hide();
      });
      $('.videoWrapper').removeClass("small")
      $('.videoWrapper').removeClass("big")
      elem["video"].addEventListener('loadedmetadata', function () {
        var width = this.videoWidth, height = this.videoHeight;
        if (width <= 640 && height <= 344) {
          $('.videoWrapper').addClass("small");
        }
        if (width > 1500) {
          $('.videoWrapper').addClass("big");
        }
        elem.currentTime = 0;
        elem.duration = elem["video"].duration;
        elem["totalDuration"].html(getTime(elem.duration));
      }, false);
      if (!$('.pVideoMainWrapper').hasClass('quizVideo')) {
        $('.pQuizCheck').hide();
      }
      $('.pActivityArea').hide();
      $('.pActivitySummary').hide();
      $('.pLabsWrapper').hide();
      $('.pMainHelpWrapper').hide();
      $('.pVideoMainWrapper').show();
      if (typeof playVideo == "undefined") {
        $('.pButtons[data-type="play"]').removeClass("pPlay").addClass("pPause");
        elem["video"].play();
        clearInterval(buffer);
        buffer = setInterval(function () {
          checkBuffering();
        }, 500);
      } else {
        $('.videoWrapper').addClass('OnlyVideo');
      }
      $('.quizVideo').off(mouseEvents.down).on(mouseEvents.down, function (e) {
        if ($(e.target).hasClass('quizVideo')) {
          _this.stopVideo();
        }
      });
    }


    this.playControl = function (obj) {

      if (obj._this.hasClass("pPlay")) {
        obj._this.removeClass("pPlay").addClass("pPause");
        elem["video"].play();
      } else {
        obj._this.removeClass("pPause").addClass("pPlay");
        elem["video"].pause();
        clearInterval(buffer);
      }
    }
    this.stopVideo = function () {
      $('.pNext').css('z-index', 'initial');
      $('.pBack').css('z-index', 'initial');
      $('.playAns').remove();
      $('.vClose').show();
      $('.videoPlay').hide();
      $('.videoWrapper').removeClass("vOpen");
      $('.pVideoMainWrapper').removeClass("quizboardOpen");
      $('.pVideoMainWrapper').removeClass("quizVideo");
      elem["video"].pause();
      elem.currentTime = 0;
      elem["video"].currentTime = 0;
      $('.pButtons[data-type="play"]').removeClass("pPlay").addClass("pPause");
      clearInterval(buffer);
      $('.pVideoMainWrapper').hide();
    }
    this.replay = function () {
      $(".pButtons[data-type='play']").removeClass("pDisable");
      elem.currentTime = 0;
      elem["video"].currentTime = 0;
      $('.pButtons[data-type="play"]').removeClass("pPlay").addClass("pPause");
      elem["video"].play();
      clearInterval(buffer);
      buffer = setInterval(function () {
        checkBuffering();
      }, 500)
    }

    function setVolume1(e) {
      //e.stopImmediatePropagation();

      var top = Number(elem["volumeseek"].css('top').split('px')[0]);
      var seekHeight = elem["volumeseek"].height();
      var slideHeight = $('.volumeSlider').height()
      var finalhei = slideHeight - seekHeight;
      top = (top * 100) / finalhei;
      var volume = (top.toFixed(1)) / 100;
      volume = volume.toFixed(1)
      volume = 1 - volume;
      elem["video"].volume = volume;
      if (volume == 0) {
        elem["volume"].removeClass('on')
        elem["volume"].addClass('mute')
      } else {
        elem["volume"].removeClass('mute')
        elem["volume"].addClass('on')
      }
      $('.pVolumeSlider').toggle("slide", {direction: "down"});
    }

    function updateTime() {
      elem.duration = elem["video"].duration;
      elem["totalDuration"].html(getTime(elem.duration));
      elem.currentTime = elem["video"].currentTime;
      if (!elem.subtitle) {
      } else {
        updateData(elem.currentTime);
      }
      if (elem.sliderTouch === false) {
        var width = Number(Math.round((elem["video"].currentTime / elem.duration) * 100));
        if (width > 100) {
          width = 100;
        }
        if (width <= 4) {
          elem["scruBar"].css("left", "initial");
        } else {
          elem["scruBar"].css("left", "initial");
        }
        elem["progressBar"].css({width: width + "%"});
        elem.currentTime = getTime(elem.currentTime);
        $('.currentTime').html(elem.currentTime);
      }
    }
    function jumpVideo(per) {
      elem.currentTime = Number(Math.round((elem.duration * per) / 100));
      var tym = getTime(elem.currentTime);
      $('.currentTime').html(tym);
      if (elem.currentTime > elem.duration) {
        elem.currentTime = elem.duration - 0.10;
      }
      elem["video"].currentTime = elem.currentTime;
      $(".pButtons[data-type='play']").removeClass("pDisable");
      $(".pButtons[data-type='play']").addClass("pPause").removeClass("pPlay");
      //  if ($('.pButtons[data-type="play"]').hasClass("pPause")) {
      elem["video"].play();
      // }
    }
    function mSliderDown(e) {
      if (!$(this).hasClass("mDisable")) {
        elem["video"].pause();
        elem["scruBar"].removeClass("PDown");
        elem.sliderTouch = true;
        $(window).off(mouseEvents.move, sliderMove).on(mouseEvents.move, sliderMove);
        $(window).off(mouseEvents.up, sliderUp).on(mouseEvents.up, sliderUp);
      }
    }
    function sliderMove(e) {
      elem["scruBar"].addClass("pHover");
      var pos = getMouseOffset(e);
      pos.x = pos.x - elem["seek"].offset().left;
      pos.y = pos.y - elem["seek"].offset().top;
      var percentage = Number(Math.round((pos.x * 100) / elem["seek"].width()));
      if (percentage > 100) {
        percentage = 100
      }
      if (percentage <= 4) {
        elem["scruBar"].css("left", "initial");
      } else {
        elem["scruBar"].css("left", "initial");
      }
      if (percentage >= 3) {
        elem["progressBar"].css({width: percentage + "%"});
      }
    }
    function sliderUp(e) {
      e.stopImmediatePropagation();
      elem["scruBar"].removeClass("pHover").removeClass("pDown");
      $(window).off(mouseEvents.move, sliderMove);
      $(window).off(mouseEvents.up, sliderUp);
      elem.sliderTouch = false;
      var pos = getMouseOffset(e);
      pos.x = pos.x - elem["seek"].offset().left;
      pos.y = pos.y - elem["seek"].offset().top;
      var percentage = Number(Math.round((pos.x * 100) / elem["seek"].width()));
      if (percentage > 100) {
        percentage = 100
      }
      if (percentage <= 4) {
        elem["scruBar"].css("left", "initial");
      } else {
        elem["scruBar"].css("left", "initial");
      }
      if (percentage >= 3) {
        elem["progressBar"].css({width: percentage + "%"});
      }
      jumpVideo(percentage);
    }

    function updateData(curTime) {
      millisec = parseInt(curTime * 1000);
      elem["title"].html(elem.subtitle.Title);
      if (elem.subtitle.Slides.length <= 0) {
        elem["slideData"].html("");
      }
      for (var i in elem.subtitle.Slides) {
        var fcondition = millisec >= Number(elem.subtitle.Slides[i].startTime) && millisec <= Number(elem.subtitle.Slides[i].endTime);
        var sCondition = millisec >= Number(elem.subtitle.Slides[i].startTime) && Number(elem.subtitle.Slides[i].endTime) == -1;
        if ((fcondition || sCondition) && dIndex != i) {
          dIndex = i;
          var text = elem.subtitle.Slides[i]["headlines"].join("<br>");
          if (elem.subtitle.Slides[i]["bullets"].length > 0) {
            var bullet = "<p data-type='bullet' style='margin-top:3px'>" + elem.subtitle.Slides[i]["bullets"].join("</p><p data-type='bullet' style='margin-top:3px'>") + "</p>";
            text += bullet;
          }

          elem["slideData"].html(text);
          var math = $(this).find(".pSubtitleBody")[0];
          MathJax.Hub.Queue(["Typeset", MathJax.Hub, math]);
          break;
        }
      }
    }
    function videoEnd() {
      $(".pButtons[data-type='play']").addClass("pDisable");
      clearInterval(buffer);
      $('.videoLoader').hide();
      // $(".pButtons[data-type='play']").removeClass("pPause").addClass("pPlay");
    }
    function reset() {
      elem["video"].volume = 1;
      elem["volume"].removeClass('mute');
      elem["volume"].addClass('on');
      elem["volumeseek"].css('top', '0px')
      // elem["scruBar"].css("left", "0px");
      $('.videoWrapper').removeClass('OnlyVideo');
      $('.pVolumeSlider').hide();
    }
    function checkBuffering() {
      currentPlayPos = elem["video"].currentTime;
      var offset = 1 / checkInterval
      if (
        !bufferingDetected
        && currentPlayPos < (lastPlayPos + offset)
        && !elem["video"].paused
        ) {
        console.log("buffering")
        $('.videoLoader').show();
        bufferingDetected = true
      }
      if (bufferingDetected
        && currentPlayPos > (lastPlayPos + offset)
        && !elem["video"].paused
        ) {
        console.log("not buffering anymore")
        bufferingDetected = false
        $('.videoLoader').hide();
      }
      lastPlayPos = currentPlayPos
    }
  }