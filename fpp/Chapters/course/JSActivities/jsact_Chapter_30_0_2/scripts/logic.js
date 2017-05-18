//=======================================================
//	create desktop for user interaction
//=======================================================
game.interaction = function (director, scene, banner) {

    var bannerbg = banner.childrenList[0];
    var text1 = banner.childrenList[1];
    var text2 = banner.childrenList[2];
    var text3 = banner.childrenList[3];
    var desktop = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);

    var currentTime = 0;
    var incDecTimer = null;
    var makeTimerDelay = 0;
    var sliderLength = 84;
    var isPause = false;
    var initialPlusXPosition = 287;
    var oneMtInPx = 1.2;
    var initialPlusYPosition = 249;
    var circlePathContainer = null;
    var upDownX = 4;
    var isGameStart = true;
    var isPaused = false;
    var speedVal = 100;
    var isRunning = false;
    var distanceBg = 0;
    var centerX = 0;
    var centerY = 0;
    var startTime = 0;
    var pauseTime = 0;
    var pauseEndTime = 0;
    var totRot = 15;
    var maxAng = 270 - totRot;
    var minAng = 90 - totRot;
    var objectMoveTimer = null;
    var value;
	var speedValIsZero = false;

    var direction = function (xA, yA, xB, yB) {
        var dir = Math.atan2(yB - yA, xB - xA);
        return dir
    };

    var radius = function (xA, yA, xB, yB) {
        var magnitude = Math.sqrt(Math.pow((xA - xB), 2) + Math.pow((yA - yB), 2));
        return magnitude;
    }

    var makeTangent = function (cx, cy, r, angle) {
        var ang = (Math.PI / 180) * angle;
        var x1 = cx + (r * Math.cos(ang));
        var y1 = cy + (r * Math.sin(ang));
        return {
            x: x1,
            y: y1
        };
    }


        function getActor(drag, x, y, id, imgname, row, column) {
            var aActor = new CAAT.exemplarr().setBackgroundImage(
                new CAAT.Foundation.SpriteImage().initialize(director.getImage(imgname), row, column), true).
            setSpriteIndex(0).
            setDefaultPos(x, y).
            setId(id);
            return aActor;
        }

    var IncDecArrow = function (action, btn) {


        btn.mouseUp = function (mouseEvent) {
            if (incDecTimer != null) {
                incDecTimer.cancel();
            }
        };
		btn.mouseExit = function(mouseEvent){
			if(incDecTimer != null){
				incDecTimer.cancel();
			}
		};
        btn.mouseDown = function (mouseEvent) {
			if(incDecTimer != null){
				incDecTimer.cancel();
			}
            incDecTimer = scene.createTimer(0, Number.MAX_VALUE, 
				function (scene_time, timer_time, timertask_instance) { // timeout
            	}, 
				function (scene_time, timer_time, timertask_instance) {
					makeTimerDelay++;
					if (makeTimerDelay % 5 == 0) {
						if (!isRunning) {
							process();
						}
						makeTimerDelay = 0;
					}
				}, 
				function (scene_time, timer_time, timertask_instance) { // cancel
            	}
			);
        };


        function process() {
            if (isGameStart && !isPaused) {
                if (action == '+') {
                    if (speedVal < 520) {
                        speedVal += 1
                        aActorIncDec.setText(speedVal);
                        drawMidLine(0, speedVal);
                    }
                } else if (action == '-') {
                    if (speedVal > 0) {
                        speedVal -= 1
                        aActorIncDec.setText(speedVal);
                        drawMidLine(0, speedVal);

                    }
                    if (speedVal == 0) {
                        aActorIncDec.setText("0");
                    }
                }
                speedVal = Math.round(speedVal * Math.pow(10, 1)) / Math.pow(10, 1);
            }
        };
        if (makeTimerDelay == 0) {
            if (!isRunning) {
                process();
            }

        }





    };

    var check = function (mouseEvent) {

    };

    var box3dIdx = 0;
    var plus3dIdx = 0;
    var box3dTF = true;

    game.Rays = [];


    // Line Drawing
    game.onObjMove = function (a1) {
        var objectPos = 0;
        if (a1.x > 404.5) {
            objectPos = 404.5;
        } else if (a1.x < 320.5) {
            objectPos = 320.5;
        } else {
            objectPos = a1.x;
        }
        game.scraper.x = objectPos;
        distanceBg = (404.5 - objectPos);
        value = (404.5 - objectPos);
        box3dIdx = Math.abs(value * (49 / sliderLength));
        plus3dIdx = Math.abs(value * (44 / sliderLength));
        box3d.setSpriteIndex(box3dIdx.toFixed(0));
        plus.setSpriteIndex(plus3dIdx.toFixed(0));
        var ang = ((objectPos - 320.5) * (totRot / sliderLength));

        var midPoint = (objectPos - 320.5) * (360 / sliderLength);
        var length = 0;

        if ((objectPos - 320.5) <= 54) {
            length = (game.scraper.x - 320.5) * (360 / 54);
        } else {
            //length = 330+(game.scraper.x-374.5);
            length = 360;
        }

        var plusMoveDis = (objectPos - 320.5) * (12 / sliderLength);

        plus.y = 249 - plusMoveDis;

        initialPlusYPosition = 249 - plusMoveDis;

        var rotate = 0;
        if (value > 42) {
            rotate = (3 / 42) * (84 - value);
        } else {
            rotate = (3 / 42) * (value);
        }

        game.Rays[25].setRotation(-rotate * Math.PI / 180, 0.5, 0.5);
        game.Rays[26].setRotation(-rotate * Math.PI / 180, 0.5, 0.5);
        game.Rays[27].setRotation(-rotate * Math.PI / 180, 0.5, 0.5);
        circlePathContainer.setRotation(-rotate * Math.PI / 180, 0.5, 0.5);
        plus.setRotation(-rotate * Math.PI / 180, 0.5, 0.5);
        var alpha = (objectPos - 320.5) * (1 / sliderLength);
        var upDownY = 3 - ((objectPos - 320.5) * (3 / sliderLength));
        drawLine(length, midPoint, ang, alpha, upDownY);
        drawMidLine(0, 0);
    }


    function drawLine(length, midPoint, ang, alpha, upDownY) {

        var midCenterY = 249;
        var container = 0;
        var x = 112;
        var y = -17;

        var tool = 'rightArrowHead';
        if (length <= 120) {
            tool = 'circle';
        }

        for (var i = 0; i < 5; i++) {

            var actY = y + (i * 133);
            var adjustmentCenterY = (((249 - actY) / 180) * (midPoint / 2));
            var centerY = actY + adjustmentCenterY;
            for (var j = 0; j < 5; j++) {
                var centerX = x + (j * 133);
                game.x2 = centerX;
                game.y2 = centerY;
                game.x1 = centerX + (length / 2) * Math.cos((maxAng + ang) * (Math.PI / 180));
                game.y1 = centerY + (length / 2) * Math.sin((maxAng + ang) * (Math.PI / 180));
                game.x3 = centerX + (length / 2) * Math.cos((minAng + ang) * (Math.PI / 180));
                game.y3 = centerY + (length / 2) * Math.sin((minAng + ang) * (Math.PI / 180));
                drawPaths(game.Rays[container], {
                    x: game.x1,
                    y: game.y1
                }, {
                    x: game.x2,
                    y: game.y2
                }, {
                    x: game.x3,
                    y: game.y3
                }, false, '#d32341', 1.8, tool, false, alpha, upDownY, true);
                container++;
            }
        }
    }


    //Draw movement Angle position line

    function drawMidLine(angle, decreseHeight) {

        var midPlusX = plus.x + plus.width / 2;
        var midPlusY = plus.y + plus.width / 2;
        var xPos = midPlusX + (speedVal * Math.cos(angle * Math.PI / 180));
        var yPos = midPlusY + (decreseHeight * Math.sin(angle * Math.PI / 180));
        var shape = "rightArrowHead";

        var xDistance = Math.abs((xPos - midPlusX));

        if (xDistance < 20) {
            if (isRunning) {
                shape = "circle";
            }

        }

        drawPaths(game.Rays[25], {
            x: midPlusX,
            y: midPlusY
        }, {
            x: 0,
            y: 0
        }, {
            x: xPos,
            y: yPos
        }, false, '#ff6c06', 2, shape, false, 1, 0, false);


    }

    // drawCirclePath 

    function drawCirclePath(ang) {
        centerX = initialPlusXPosition;
        var inc = 0;		
        circlePathContainer.paint = function (_director, time) {			
            var startPoint = -90;
           /*
            if (ang > 240) {
                           startPoint = ang - 240;
                      }*/
           
            var arrX = [];
            var arrY = [];
            var midAdjust = (speedVal * oneMtInPx / 84) * (404.5 - game.scraper.x);
            if (midAdjust < 0) {
                midAdjust = 0;
            }
            if (ang >= -90) {
                inc = 4;
                var midCenterY = initialPlusYPosition + midAdjust;
                var decreseHeight = (speedVal * oneMtInPx / 84) * (404.5 - game.scraper.x);
                for (var i = startPoint; i < ang + inc; i = i + 10) {
                    arrX[arrX.length] = centerX + (speedVal * oneMtInPx * Math.cos(i * Math.PI / 180)) + plus.width / 2;
                    arrY[arrY.length] = midCenterY + (decreseHeight * Math.sin(i * Math.PI / 180)) + plus.height / 2;
                }
            }
            var canvas = _director.ctx;
            canvas.strokeStyle = "#808080";
            canvas.fillStyle = "#808080";
            canvas.lineWidth = 1.5;
            canvas.beginPath();
            canvas.moveTo(arrX[0], arrY[0]);


            for (var i = 0; i < arrX.length; i++) {
                canvas.lineTo(arrX[i], arrY[i]);
            }

            canvas.lineJoin = 'round';
            canvas.lineCap = 'round';
            canvas.stroke();
        };
    }


    function drawPaths(obj, moveTO, midPoint, lineTO, isDashed, strokeColor, lineWidth, arrowDir, middleArrowHeadReq, alpha, upDownY, isPerpendicular) {

        var headlen = 7; // length of head in pixels
        obj.paint = function (_director, time) {

            var dx = lineTO.x - moveTO.x;
            var dy = lineTO.y - moveTO.y;
            var angle = Math.atan2(dy, dx);

            var canvas = _director.ctx;
            canvas.strokeStyle = strokeColor;
            canvas.fillStyle = strokeColor;
            canvas.lineWidth = lineWidth;
            canvas.beginPath();

            if (arrowDir == 'rightArrowHead') {
                canvas.moveTo((lineTO.x), lineTO.y);
                canvas.lineTo((lineTO.x) - headlen * Math.cos(angle - Math.PI / 10), lineTO.y - headlen * Math.sin(angle - Math.PI / 10));
                canvas.lineTo((lineTO.x) - headlen * Math.cos(angle + Math.PI / 10), lineTO.y - headlen * Math.sin(angle + Math.PI / 10));
                canvas.fill();
            } else if (arrowDir == 'circle') {

                canvas.arc((lineTO.x), lineTO.y, 2.5, 0, 2 * Math.PI, true);
                canvas.fillStyle = '#b17f59';
                canvas.fill();
            }
            if (middleArrowHeadReq) {
                var dx = midPoint.x - moveTO.x;
                var dy = midPoint.y - moveTO.y;
                var angle = Math.atan2(dy, dx);
                canvas.fillStyle = "#ce5200";
                canvas.moveTo((midPoint.x - 5), midPoint.y);
                canvas.lineTo((midPoint.x - 5) - headlen * Math.cos(angle - Math.PI / 10), midPoint.y - headlen * Math.sin(angle - Math.PI / 10));
                canvas.lineTo((midPoint.x - 5) - headlen * Math.cos(angle + Math.PI / 10), midPoint.y - headlen * Math.sin(angle + Math.PI / 10));
                canvas.fill();
            }
            if (isDashed) {
                canvas.dashedLine(moveTO.x, moveTO.y, midPoint.x, midPoint.y, lineTO.x, lineTO.y, [10, 10]);
            } else {

                // drawLines	
                //canvas.lineWidth = 1.5;
                canvas.moveTo(moveTO.x, moveTO.y);
                canvas.lineTo(lineTO.x, lineTO.y);

                if (isPerpendicular) {

                    if (game.scraper.x <= 404) {
                        canvas.moveTo(midPoint.x, midPoint.y);
                        canvas.arc(midPoint.x, midPoint.y, 1, 0, 360, true);
                        canvas.fill();
                        canvas.stroke();
                        canvas.lineWidth = 1;

                        canvas.strokeStyle = "rgba(211, 35, 65, " + alpha + ")";
                        // draw cross symbol 

                        canvas.moveTo(moveTO.x - upDownX, moveTO.y - upDownY);
                        canvas.lineTo(moveTO.x + upDownX, moveTO.y + upDownY);
                        canvas.moveTo(moveTO.x + upDownX, moveTO.y - upDownY);
                        canvas.lineTo(moveTO.x - upDownX, moveTO.y + upDownY);
                    }
                }
            }
            canvas.lineJoin = 'round';
            canvas.lineCap = 'round';
            canvas.closePath();
            canvas.stroke();
        };
    }


    function moveTimer() {

        centerX = initialPlusXPosition;
        objectMoveTimer = scene.createTimer(0, Number.MAX_VALUE, function (scene_time, timer_time, timertask_instance) { // timeout
        }, function (scene_time, timer_time, timertask_instance) {
            movePosition();
        }, function (scene_time, timer_time, timertask_instance) { // cancel
        });

    }


    function movePosition() {

        var midAdjust = (speedVal * oneMtInPx / 84) * (404.5 - game.scraper.x);
        if (midAdjust < 0) {
            midAdjust = 0;
        }
        var midCenterY = initialPlusYPosition + midAdjust;
        currentTime = new Date().getTime();
        var elapsedTime = (currentTime - startTime) / 1000;
        var mulAdjus = (2 * Math.PI * speedVal * oneMtInPx) / 18;
        var position = (elapsedTime * mulAdjus);
        var angle = ((position / (2 * Math.PI * speedVal * oneMtInPx)) * 360) - 90;
        var decreseHeight = (speedVal * oneMtInPx / 84) * (404.5 - game.scraper.x);
        var xPos = centerX + (speedVal * oneMtInPx * Math.cos(angle * Math.PI / 180));
        var yPos = midCenterY + (decreseHeight * Math.sin(angle * Math.PI / 180));

        plus.x = xPos;
        plus.y = yPos;
        drawCirclePath(angle);
        drawMidLine(angle + 90, decreseHeight);
        drawArrowCenter(angle, decreseHeight);
    }


    function drawArrowCenter(angle, decreseHeight) {
        var midPlusX = plus.x + plus.width / 2;
        var midPlusY = plus.y + plus.width / 2;
        var xPos = midPlusX - (1.5 * speedVal * oneMtInPx * Math.cos(angle * Math.PI / 180));
        var yPos = midPlusY - (1.5 * decreseHeight * Math.sin(angle * Math.PI / 180));
        var xDistance = Math.abs((xPos - midPlusX));
        var shape = 'rightArrowHead';
        if (xDistance < 10) {
            if (isRunning) {
                shape = "circle";
            }
        }
        drawPaths(game.Rays[27], {
            x: midPlusX,
            y: midPlusY
        }, {
            x: 0,
            y: 0
        }, {
            x: xPos,
            y: yPos
        }, false, '#9b04cb', 2, shape, false, 1, 0, false);
    }

    /*Go Button*/
    var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3);
    var aActorGo = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 1, 0, function (button) {
        displaybanner(1);
        game.lbl5.setText("Speed " + speedVal + " m/s");
        if (speedVal > 0) {
            if (!isRunning || isPause) {

                game.Rays[26].visible = true;
                circlePathContainer.visible = true;
                game.Rays[27].visible = true;
                if (isPause) {
                    pauseEndTime = new Date().getTime();
                    startTime = startTime + pauseEndTime - pauseTime;
                    isPause = false;
                } else {
                    startTime = new Date().getTime();
                }

                if (isSVGShow) {
                    game.Rays[25].visible = true;
                }

                moveTimer();
                isRunning = true;
            }
        } else if(speedVal == 0) {
			speedValIsZero = true;
		}
    }).setLocation(570, 510);

    /*Pause Button*/
    var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
    var aActorPause = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 2, 2, 3, 2, function (button) {

        if (!isPause&&isRunning) {
            pauseTime = new Date().getTime();
            if (objectMoveTimer != null) {
                objectMoveTimer.cancel();
            }
            isPause = true;

        }

    }).setLocation(570, 560);

    /*Reset Button*/
    var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
    var aActorReset = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 4, 4, 5, 4, function (button) {

        if (objectMoveTimer != null) {
            objectMoveTimer.cancel();
        }
		if(incDecTimer != null){
			incDecTimer.cancel();
		}
        displaybanner(0);
        game.lbl5.setText("Speed -- m/s");
        startTime = 0;
        isPause = false;
        isRunning = false;
		speedValIsZero = false;

        plus.x = initialPlusXPosition;
        plus.y = 249;

        isSVGShow = true;
        checkBtn.setButtonImageIndex(1, 0, 0, 1);
        game.Rays[25].visible = true;

        game.scraper.x = 320.5;
        game.dragger.x = 320.5;
        game.onObjMove(game.dragger);
        drawMidLine(0, speedVal);
        game.Rays[27].visible = false;
        drawCirclePath(-91);


    }).setLocation(570, 535);

    /*InCrement and DeCrement*/
    var btnValBg = getActor(false, 420, 548, 'incrbgmed', 'incrbgmed', 1, 1);
    var btnValImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('incdecbtn'), 2, 1);
    var aActorInc = new CAAT.exemplarr().setAsButton(btnValImg.getRef(), 0, 0, 0, 0, function (button) {
        IncDecArrow('+', aActorInc);
    }).setLocation(410, 548);
	//the increment and decrement buttons MouseDown functions 
	aActorInc.mouseDown = function(mouseEvent){
		IncDecArrow('+', aActorInc);
	}
	
    var btnValImg1 = new CAAT.Foundation.SpriteImage().initialize(director.getImage('incdecbtn'), 2, 1);
    var aActorDec = new CAAT.exemplarr().setAsButton(btnValImg1.getRef(), 1, 1, 1, 1, function (button) {
        IncDecArrow('-', aActorDec);
    }).setLocation(410, 557);
	aActorDec.mouseDown = function(mouseEvent){
		IncDecArrow('-', aActorDec);
	}
	
	//Cancel the timer when mouse leave the current dec/inc button
	aActorInc.mouseExit = function(mouseEvent){			
		if(incDecTimer != null){
			incDecTimer.cancel();
		}
	};					
	aActorDec.mouseExit = function(mouseEvent){			
		if(incDecTimer != null){
			incDecTimer.cancel();
		}
	};	
    /*Inc and Dec value*/
    var aActorIncDec = game.textActor(director, speedVal.toFixed(0), 'Bold 14px Arial', 'left', '#ffffff');
    aActorIncDec.setLocation(440, 550);

    /*Slider*/
    var sliderBg = getActor(false, 320, 510, 'slider', 'slider', 1, 1);
    game.scraper = getActor(true, 320, 510, 'horizslider', 'horizslider', 1, 1);

    var plus = getActor(false, initialPlusXPosition, initialPlusYPosition, 'plus', 'plus', 3, 15);
    plus.setSpriteIndex(44);


    game.dragger = new CAAT.exemplarr()
        .setBounds(
        320.5,
        510,
        10,
        20)
        .setFillStyle('blue')
        .setScale(1, 1)
        .setAlpha(0.0);
    game.dragger.userDrag();



    //Checkbox button
    var isSVGShow = true;
    var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('checkonoff'), 1, 2);
    var checkBtn = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 1, 0, 0, 0, function (button) {
		isSVGShow = !isSVGShow;
        if (!isSVGShow) {
            checkBtn.setButtonImageIndex(0, 0, 0, 1);
            game.Rays[25].visible = false;

        } else {
            checkBtn.setButtonImageIndex(1, 0, 0, 1);
            game.Rays[25].visible = true;

        }
    }).setLocation(450, 572);



    //game.imgLinePath=['point', 229.45,  379.51, 1, 1, true, 35, 35, 'blue'];
    var box3d = getActor(false, 585, 200, 'box', 'box', 10, 5);
    box3d.setSpriteIndex(0);


    function displaybanner(dispid) {
		var y_1 = 0;
		var y_2 = -70;
		if(dispid == 1) {
			y_1 = -70;
			y_2 = 0;
			if(isRunning || speedValIsZero) {
				y_1 = 0;
			}
		}
        var pathBehaviour = new CAAT.PathBehavior()
							.setValues(new CAAT.Path()
							.setLinear(0, y_1, 0, y_2)
							.setInteractive(false))
							.setDelayTime(0, 300);

        if (dispid == 0) {
            bannerbg.setSpriteIndex(0);
            text1.setText("Press GO and observe the motion. Try changing");
            text2.setText("the viewing angle. Press RESET, change the initial");
            text3.setText("speed to zero, and press GO. what happens?");
        }
        text1.setLocation(((banner.width - text1.width) / 2) + 6, 12);
        text2.setLocation(((banner.width - text2.width) / 2) + 6, 28);
        text3.setLocation(((banner.width - text3.width) / 2) + 6, 44);
        banner.addBehavior(pathBehaviour);
    }

    for (var i = 0; i < 15; i++) {
        var thisRay = new CAAT.Foundation.ActorContainer().
        setBounds(0, 0, director.width, 500);
        thisRay.setGestureEnabled(false);
        desktop.addChild(thisRay);
        game.Rays.push(thisRay);
    }

    circlePathContainer = new CAAT.Foundation.ActorContainer().
    setBounds(0, 0, director.width, 500);
    thisRay.setGestureEnabled(false);

    circlePathContainer.addChild(plus);
    desktop.addChild(circlePathContainer);
    for (var i = 15; i < 28; i++) {
        var thisRay = new CAAT.Foundation.ActorContainer().
        setBounds(0, 0, director.width, 500);
        thisRay.setGestureEnabled(false);
        desktop.addChild(thisRay);
        game.Rays.push(thisRay);
    }

    desktop.addChild(game.conBottom, 'bottom');
    desktop.addChild(aActorReset);
    desktop.addChild(aActorPause);
    desktop.addChild(aActorGo);
    desktop.addChild(btnValBg);
    desktop.addChild(aActorIncDec);
    desktop.addChild(aActorInc);
    desktop.addChild(aActorDec);
    desktop.addChild(sliderBg);
    desktop.addChild(game.scraper);
    desktop.addChild(game.dragger);
    desktop.addChild(checkBtn);
    desktop.addChild(box3d);
    game.onObjMove(game.dragger);
    scene.addChild(desktop, 'desktop');
}