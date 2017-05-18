//
//	Game Logic
//
(function () {
	var isGameStart = false;
	var isGameFinished = false;
	var isFrstTimer = false,
		pauseFlg = false;
	var pauseTimeStamp= null;
	
    var arrowOrigin_x = 300;
    var arrowOrigin_y = 350;
	
    var _timerInstance;
    var handleIncDecVal = 0;
    var incDecTimer;
    var val;

    var paused = false;
    var resetVal = false;
    var goFlag = false;

    game.ang1e1 = -90;
    game.ang1e2 = 0;
    game.ang1e3 = 90;
    game.ang1e4 = 180;

    game.m_gWeightAngle = null;
    game.m_gFrictionAngle = null;
    game.m_gTensionAngle = null;
    game.m_gNormalAngle = null;

    game.normalForce1 = 60;
    game.weight1 = 60;
    game.friction1 = 60;
    game.tension1 = 60;

    game.forceArray = [];
    game.userDragging = false;

    //=======================================================
    // On moving the object penguin
    //=======================================================
    game.onObjMove = function (a1, a2, a3, a4, a5) {
        controlNormalForce(a2);
        controlFriction(a3);
        controlWeight(a4);
        controlTension(a5);
        game.Update();
    }

    function controlFriction(a3) {
        game.l2x1 = arrowOrigin_x;
        game.l2y1 = arrowOrigin_y;
        // upper half
        if ((game.ang1e2 > -135 && game.ang1e2 < -45)) {

            if (!game.userDragging) {
                a3.y = (arrowOrigin_y - (game.friction1 * 1.5)) - (a3.height / 2);
            }
            game.l2x3 = arrowOrigin_x;
			
			//Patch	:
			//don't allow the actor's y to be same as origin's y
			//add some minute value to preserve the direction when regained
			if(a3.y+ (a3.height / 2)>=arrowOrigin_y){
				a3.y=arrowOrigin_y-(a3.height / 2)-0.000000001;
			}
			//end of patch
            if (a3.y >= 37.5) {
                game.l2y3 = (a3.y + (a3.height / 2));
            }
			
            game.m_gFrictionAngle = -90;
            game.txtfriction.setLocation(game.l2x3 + 13, game.l2y3 + 10);
        }
        // lower half 
        else if ((game.ang1e2 > 45 && game.ang1e2 < 135)) {
            if (!game.userDragging) {
                a3.y = (arrowOrigin_y + (game.friction1 * 1.5)) - (a3.height / 2);
            }
            game.l2x3 = arrowOrigin_x;
			//Patch	:
			//don't allow the actor's y to be same as origin's y
			//add some minute value to preserve the direction when regained
			if(a3.y+ (a3.height / 2)<=arrowOrigin_y){
				a3.y=arrowOrigin_y-(a3.height / 2)+0.000000001;
			}
			//end of patch
            if (a3.y <= 637.5) {
                game.l2y3 = (a3.y + (a3.height / 2));
            }
            game.m_gFrictionAngle = 90;
            game.txtfriction.setLocation(game.l2x3 + 13, game.l2y3 + 10);
        }
        //right half 
        else if (game.ang1e2 > -45 && game.ang1e2 < 45) {
            if (!game.userDragging) {
                a3.x = (arrowOrigin_x + (game.friction1 * 1.5)) - (a3.width / 2);
            }
			//Patch	:
			//don't allow the actor's y to be same as origin's y
			//add some minute value to preserve the direction when regained
			if(a3.x+ (a3.width / 2)<=arrowOrigin_x){
				a3.x=arrowOrigin_x-(a3.width / 2)+0.000000001;
			}
			//end of patch
            if (a3.x <= 587.5) {
                game.l2x3 = (a3.x + (a3.width / 2));
            }
            game.l2y3 = arrowOrigin_y;
            game.m_gFrictionAngle = 0;
            game.txtfriction.setLocation(game.l2x3 + 10, game.l2y3 + 10);
        }
        //left half
        else if ((game.ang1e2 > 135 && game.ang1e2 <= 180) || (game.ang1e2 >= -180 && game.ang1e2 <= -179) || (game.ang1e2 < -135 && game.ang1e2 >= -179)) {
            if (!game.userDragging) {
                a3.x = (arrowOrigin_x - (game.friction1 * 1.5)) - (a3.width / 2);
            }
            game.l2y3 = arrowOrigin_y;
			//Patch	:
			//don't allow the actor's y to be same as origin's y
			//add some minute value to preserve the direction when regained
			if(a3.x+ (a3.width / 2)>=arrowOrigin_x){
				a3.x=arrowOrigin_x-(a3.width / 2)-0.000000001;
			}
			//end of patch
            if (a3.x >= -13.5) {
                game.l2x3 = (a3.x + (a3.width / 2));
            }
            game.m_gFrictionAngle = 180;
            game.txtfriction.setLocation(game.l2x3 + 20, game.l2y3 + 10);
        }
        drawPaths(game.Rays[2], {
            x: game.l2x1,
            y: game.l2y1
        }, {
            x: 0,
            y: 0
        }, {
            x: game.l2x3,
            y: game.l2y3
        }, false, '#0000ff', 1, 'rightArrowHead', false);
    }

    function controlNormalForce(a2) {
        game.l1x1 = arrowOrigin_x;
        game.l1y1 = arrowOrigin_y;
        //upper half 
        if (game.ang1e1 > -135 && game.ang1e1 < -45) {
            if (!game.userDragging) {
                a2.y = (arrowOrigin_y - (game.normalForce1 * 1.5)) - (a2.height / 2);
            }
			//Patch	:
			//don't allow the actor's y to be same as origin's y
			//add some minute value to preserve the direction when regained
			if(a2.y+ (a2.height / 2)>=arrowOrigin_y){
				a2.y=arrowOrigin_y-(a2.height / 2)-0.000000001;
			}
			//end of patch
            game.l1x3 = arrowOrigin_x;
            if (a2.y >= 37.5) {
                game.l1y3 = (a2.y + (a2.height / 2));
            }
            game.m_gNormalAngle = -90;
            game.txtFN.setLocation(game.l1x3+15,game.l1y3+10);
            game.txtn.setLocation(game.l1x3+23,game.l1y3+18);
        }
        // lower half
        else if (game.ang1e1 > 45 && game.ang1e1 < 135) {
            if (!game.userDragging) {
                a2.y = (arrowOrigin_y + (game.normalForce1 * 1.5)) - (a2.height / 2);
            }
            game.l1x3 = arrowOrigin_x;
			//Patch	:
			//don't allow the actor's y to be same as origin's y
			//add some minute value to preserve the direction when regained
			if(a2.y+ (a2.height / 2)<=arrowOrigin_y){
				a2.y=arrowOrigin_y-(a2.height / 2)+0.000000001;
			}
			//end of patch
            if (a2.y <= 637.5) {
                game.l1y3 = (a2.y + (a2.height / 2));
            }
            game.m_gNormalAngle = 90;
            game.txtFN.setLocation(game.l1x3+15,game.l1y3+10);
           game.txtn.setLocation(game.l1x3+23,game.l1y3+18);
        }
        //right half 
        else if (game.ang1e1 > -45 && game.ang1e1 < 45) {
            if (!game.userDragging) {
                a2.x = (arrowOrigin_x + (game.normalForce1 * 1.5)) - (a2.width / 2);
            }
			//Patch	:
			//don't allow the actor's y to be same as origin's y
			//add some minute value to preserve the direction when regained
			if(a2.x+ (a2.width / 2)<=arrowOrigin_x){
				a2.x=arrowOrigin_x-(a2.width / 2)+0.000000001;
			}
            if (a2.x <= 587.5) {
                game.l1x3 = (a2.x + (a2.width / 2));
            }
            game.l1y3 = arrowOrigin_y;
            game.m_gNormalAngle = 0;
            game.txtFN.setLocation(game.l1x3 + 10, game.l1y3 + 10);
            game.txtn.setLocation(game.l1x3 + 18, game.l1y3 + 23);
        }
        //left half
        else if ((game.ang1e1 > 135 && game.ang1e1 <= 180) || (game.ang1e1 >= -180 && game.ang1e1 <= -179) || (game.ang1e1 < -135 && game.ang1e1 >= -179)) {
            if (!game.userDragging) {
                a2.x = (arrowOrigin_x - (game.normalForce1 * 1.5)) - (a2.width / 2);
            }
			//Patch	:
			//don't allow the actor's y to be same as origin's y
			//add some minute value to preserve the direction when regained
			if(a2.x+ (a2.width / 2)>=arrowOrigin_x){
				a2.x=arrowOrigin_x-(a2.width / 2)-0.000000001;
			}
			//end of patch
            if (a2.x >= -13.5) {
                game.l1x3 = (a2.x + (a2.width / 2));
            }
            game.l1y3 = arrowOrigin_y;
            game.m_gNormalAngle = 180;
            game.txtFN.setLocation(game.l1x3 + 23, game.l1y3 + 10);
            game.txtn.setLocation(game.l1x3 + 25, game.l1y3 + 23);
        }
        drawPaths(game.Rays[1], {
            x: game.l1x1,
            y: game.l1y1
        }, {
            x: 0,
            y: 0
        }, {
            x: game.l1x3,
            y: game.l1y3
        }, false, '#ff0000', 1, 'rightArrowHead', false);
    }
    // For weight :
    function controlWeight(a4) {
        game.l3x1 = arrowOrigin_x;
        game.l3y1 = arrowOrigin_y;
        //upper half 
        if (game.ang1e3 > -135 && game.ang1e3 < -45) {
            if (!game.userDragging) {
                a4.y = (arrowOrigin_y - (game.weight1 * 1.5)) - (a4.height / 2);
            }
			//Patch	:
			//don't allow the actor's y to be same as origin's y
			//add some minute value to preserve the direction when regained
			if(a4.y+ (a4.height / 2)>=arrowOrigin_y){
				a4.y=arrowOrigin_y-(a4.height / 2)-0.000000001;
			}
			//end of patch
			
            if (a4.y >= 37.5) {
                game.l3y3 = (a4.y + (a4.height / 2));
            }
            game.l3x3 = arrowOrigin_x;
            game.m_gWeightAngle = -90;
            game.txtweight.setLocation(game.l3x3 + 22, game.l3y3 + 10);
        }
        // lower half
        else if (game.ang1e3 > 45 && game.ang1e3 < 135) {
            if (!game.userDragging) {
                a4.y = (arrowOrigin_y + (game.weight1 * 1.5)) - (a4.height / 2);
            }
            game.l3x3 = arrowOrigin_x;
			//Patch	:
			//don't allow the actor's y to be same as origin's y
			//add some minute value to preserve the direction when regained
			if(a4.y+ (a4.height / 2)<=arrowOrigin_y){
				a4.y=arrowOrigin_y-(a4.height / 2)+0.000000001;
			}
			//end of patch
            if (a4.y <= 637.5) {
                game.l3y3 = (a4.y + (a4.height / 2));
            }
						
            game.m_gWeightAngle = 90;
            game.txtweight.setLocation(game.l3x3 + 20, game.l3y3 + 10);
        }
        //right half 
        else if (game.ang1e3 > -45 && game.ang1e3 < 45) {
            if (!game.userDragging) {
                a4.x = (arrowOrigin_x + (game.weight1 * 1.5)) - (a4.width / 2);
            }
			//Patch	:
			//don't allow the actor's y to be same as origin's y
			//add some minute value to preserve the direction when regained
			if(a4.x+ (a4.width / 2)<=arrowOrigin_x){
				a4.x=arrowOrigin_x-(a4.width / 2)+0.000000001;
			}
			//end of patch
            if (a4.x <= 587.5) {
                game.l3x3 = (a4.x + (a4.width / 2));
            }
            game.l3y3 = arrowOrigin_y;
            game.m_gWeightAngle = 0;
            game.txtweight.setLocation(game.l3x3 + 18, game.l3y3 + 10);
        }
        //left half
        else if ((game.ang1e3 > 135 && game.ang1e3 <= 180) || (game.ang1e3 >= -180 && game.ang1e3 <= -179) || (game.ang1e3 < -135 && game.ang1e3 >= -179)) {
            if (!game.userDragging) {
                a4.x = (arrowOrigin_x - (game.weight1 * 1.5)) - (a4.width / 2);
            }
			//Patch	:
			//don't allow the actor's y to be same as origin's y
			//add some minute value to preserve the direction when regained
			if(a4.x+ (a4.width / 2)>=arrowOrigin_x){
				a4.x=arrowOrigin_x-(a4.width / 2)-0.000000001;
			}
			//end of patch
            if (a4.x >= -13.5) {
                game.l3x3 = (a4.x + (a4.width / 2));
            }
            game.l3y3 = arrowOrigin_y;
            game.m_gWeightAngle = 180;
            game.txtweight.setLocation(game.l3x3 + 28, game.l3y3 + 10);
        }
        drawPaths(game.Rays[3], {
            x: game.l3x1,
            y: game.l3y1
        }, {
            x: 0,
            y: 0
        }, {
            x: game.l3x3,
            y: game.l3y3
        }, false, '#000000', 1, 'rightArrowHead', false);
    }
    // For Tension :
    function controlTension(a5) {
        game.l4x1 = arrowOrigin_x;
        game.l4y1 = arrowOrigin_y;
        //upper haif 
        if (game.ang1e4 > -135 && game.ang1e4 < -45) {
            if (!game.userDragging) {
                a5.y = (arrowOrigin_y - (game.tension1 * 1.5)) - (a5.height / 2);
            }
            game.l4x3 = arrowOrigin_x;
			//Patch	:
			//don't allow the actor's y to be same as origin's y
			//add some minute value to preserve the direction when regained
			if(a5.y+ (a5.height / 2)>=arrowOrigin_y){
				a5.y=arrowOrigin_y-(a5.height / 2)-0.000000001;
			}
			//end of patch
            if (a5.y >= 37.5) {
                game.l4y3 = (a5.y + (a5.height / 2));
            }
            game.m_gTensionAngle = -90;
            game.txttension.setLocation(game.l4x3 + 10, game.l4y3 + 10);
        }
        // lower half
        else if (game.ang1e4 > 45 && game.ang1e4 < 135) {
            if (!game.userDragging) {
                a5.y = (arrowOrigin_y + (game.tension1 * 1.5)) - (a5.height / 2);
            }
            game.l4x3 = arrowOrigin_x;
			//Patch	:
			//don't allow the actor's y to be same as origin's y
			//add some minute value to preserve the direction when regained
			if(a5.y+ (a5.height / 2)<=arrowOrigin_y){
				a5.y=arrowOrigin_y-(a5.height / 2)+0.000000001;
			}
			//end of patch
            if (a5.y <= 637.5) {
                game.l4y3 = (a5.y + (a5.height / 2));
            }
            game.m_gTensionAngle = 90;
            game.txttension.setLocation(game.l4x3 + 10, game.l4y3 + 10);
        }
        //right half 
        else if (game.ang1e4 > -45 && game.ang1e4 < 45) {
            if (!game.userDragging) {
                a5.x = (arrowOrigin_x + (game.tension1 * 1.5)) - (a5.width / 2);
            }
			//Patch	:
			//don't allow the actor's y to be same as origin's y
			//add some minute value to preserve the direction when regained
			if(a5.x+ (a5.width / 2)<=arrowOrigin_x){
				a5.x=arrowOrigin_x-(a5.width / 2)+0.000000001;
			}
			//end of patch
            if (a5.x <= 587.5) {
                game.l4x3 = (a5.x + (a5.width / 2));
            }
            game.l4y3 = arrowOrigin_y;
            game.m_gTensionAngle = 0;
            game.txttension.setLocation(game.l4x3 + 20, game.l4y3 + 10);
        }
        //left half
        else if ((game.ang1e4 > 135 && game.ang1e4 <= 180) || (game.ang1e4 >= -180 && game.ang1e4 <= -179) || (game.ang1e4 < -135 && game.ang1e4 >= -179)) {
            if (!game.userDragging) {
                a5.x = (arrowOrigin_x - (game.tension1 * 1.5)) - (a5.width / 2);
            }
			//Patch	:
			//don't allow the actor's y to be same as origin's y
			//add some minute value to preserve the direction when regained
			if(a5.x+ (a5.width / 2)>=arrowOrigin_x){
				a5.x=arrowOrigin_x-(a5.width / 2)-0.000000001;
			}
			//end of patch
            if (a5.x >= -13.5) {
                game.l4x3 = (a5.x + (a5.width / 2));
            }
            game.l4y3 = arrowOrigin_y;
            game.m_gTensionAngle = 180;
            game.txttension.setLocation(game.l4x3 + 20, game.l4y3 + 10);
        }
        drawPaths(game.Rays[4], {
            x: game.l4x1,
            y: game.l4y1
        }, {
            x: 0,
            y: 0
        }, {
            x: game.l4x3,
            y: game.l4y3
        }, false, '#cc00ff', 1, 'rightArrowHead', false);
    }
    //=======================================================
    // Lets draw the rays with arrow heads
    //=======================================================
    function drawPaths(obj, moveTO, midPoint, lineTO, isDashed, strokeColor, lineWidth, arrowDir, middleArrowHeadReq) {
        var headlen = 16;
        obj.paint = function (_director, time) {
            var dx = lineTO.x - moveTO.x;
            var dy = lineTO.y - moveTO.y;
			var angle = Math.atan2(dy, dx);

            var canvas = _director.ctx;
            canvas.strokeStyle = strokeColor;
            canvas.fillStyle = strokeColor;
            canvas.lineWidth = lineWidth;
            canvas.beginPath();
            if (arrowDir == 'leftArrowHead') {
                canvas.moveTo(moveTO.x, moveTO.y);
                canvas.lineTo(moveTO.x + headlen * Math.cos(angle - Math.PI / 8), moveTO.y + headlen * Math.sin(angle - Math.PI / 8));
                canvas.lineTo(moveTO.x + headlen * Math.cos(angle + Math.PI / 8), moveTO.y + headlen * Math.sin(angle + Math.PI / 8));
                canvas.fill();
            } else if (arrowDir == 'rightArrowHead') {
                canvas.moveTo((lineTO.x), lineTO.y);
                canvas.lineTo((lineTO.x) - headlen * Math.cos(angle - Math.PI / 8), lineTO.y - headlen * Math.sin(angle - Math.PI / 8));
                canvas.lineTo((lineTO.x) - headlen * Math.cos(angle + Math.PI / 8), lineTO.y - headlen * Math.sin(angle + Math.PI / 8));
                canvas.fill();
            }

            if (isDashed) {} else {
                canvas.moveTo(moveTO.x, moveTO.y);
                canvas.lineTo(lineTO.x, lineTO.y);
            }
            canvas.lineJoin = 'round';
            canvas.lineCap = 'round';
            canvas.closePath();
            canvas.stroke();
        };
    }
    //=======================================================
    // Lets extend functionality to draw solid/dashed lines
    //=======================================================
    var CP = window.CanvasRenderingContext2D && CanvasRenderingContext2D.prototype;
    if (CP && CP.lineTo) {
        CP.dashedLine = function (x, y, x1, y1, x2, y2, dashArray) {
            if (!dashArray) dashArray = [10, 5];
            if (dashLength == 0) dashLength = 0.001; // Hack for Safari
            var dashCount = dashArray.length;
            this.moveTo(x, y);
            var dx = (x2 - x),
                dy = (y2 - y);
            var slope = dy / dx;
            var distRemaining = Math.sqrt(dx * dx + dy * dy);
            var dashIndex = 0,
                draw = true;
            while (distRemaining >= 0.1) {
                var dashLength = dashArray[dashIndex++ % dashCount];
                if (dashLength > distRemaining) dashLength = distRemaining;
                var xStep = Math.sqrt(dashLength * dashLength / (1 + slope * slope));
                if (dx < 0) xStep = -xStep;
                x += xStep
                y += slope * xStep;
                this[draw ? 'lineTo' : 'moveTo'](x, y);
                distRemaining -= dashLength;
                if (x >= x1 && y >= y1) {
                    draw = !draw;
                }
            }
        }
    }
    //=======================================================
    // Timer keeps monitoring the object movement range and position
    //=======================================================
    game.createTimerUpdate = function () {
        var timeCounter = 0,
            timerFlag = true;
		if(!isFrstTimer){
        	game.timerStart = new Date().getTime();
			isFrstTimer = true;
		}
		if(pauseFlg){
			var newTimeStamp = new Date().getTime();
			game.timerStart = game.timerStart + newTimeStamp - pauseTimeStamp;
			pauseFlg = false;
		}
        _timerInstance = game._scene.createTimer(
        0,
        Number.MAX_VALUE,

        function (scene_time, timer_time, timertask_instance) {}, // timeout
        function (scene_time, timer_time, timertask_instance) { // tick			
          //  if (game.timerStart) {
                game.timerCurrent = new Date().getTime();
                game.elapsedTime = (game.timerCurrent - game.timerStart) / 1000;
                var sx = 0.5 * game.accXY[0] * Math.pow(game.elapsedTime, 2);
                var sy = 0.5 * game.accXY[1] * Math.pow(game.elapsedTime, 2);
                var oneMeterInPix = 100;
				
				//For calculating OneMeterInPix
                var BlineX = 0 + (sx * oneMeterInPix);
                var BlineY = 0 + (sy * oneMeterInPix);

                game.line.setLocation(BlineX, BlineY);
           // }
        },

        function (scene_time, timer_time, timertask_instance) {} // cancel
        )
    };

    var mass = 5;

    function getXYAcceleration() {
        var netVerticalForce = 0;
        var netHorizontalForce = 0;

        for (var i = 0; i < game.forceArray.length; i++) {
            netVerticalForce = netVerticalForce + (game.forceArray[i][0] * Math.sin(game.forceArray[i][1] * (Math.PI / 180)));
            netHorizontalForce = netHorizontalForce + (game.forceArray[i][0] * Math.cos(game.forceArray[i][1] * (Math.PI / 180)));
        }
        var netVerticalAcceleration = (netVerticalForce) / mass;
        var netHorizontalAcceleration = (netHorizontalForce) / mass;

        return [netHorizontalAcceleration, netVerticalAcceleration];
    }
    game.dist = function (xA, yA, xB, yB) {
        var magnitude = Math.sqrt(Math.pow((xA - xB), 2) + Math.pow((yA - yB), 2));
        var direction = Math.atan2(yB - yA, xB - xA);
        return [magnitude, direction];
    }

    game.Update = function () {

        game.f1 = game.dist(game.l1x1, game.l1y1, game.actorContainer[1].x + (game.actorContainer[1].width / 2), (game.actorContainer[1].y + game.actorContainer[1].height / 2));
        game.f2 = game.dist(game.l2x1, game.l2y1, game.actorContainer[2].x + (game.actorContainer[2].width / 2), (game.actorContainer[2].y + game.actorContainer[2].height / 2));
        game.f3 = game.dist(game.l3x1, game.l3y1, game.actorContainer[3].x + (game.actorContainer[3].width / 2), (game.actorContainer[3].y + game.actorContainer[3].height / 2));
        game.f4 = game.dist(game.l4x1, game.l4y1, game.actorContainer[4].x + (game.actorContainer[4].width / 2), (game.actorContainer[4].y + game.actorContainer[4].height / 2));

        game.ang1e1 = ((180 / Math.PI) * game.f1[1]);
        game.ang1e2 = ((180 / Math.PI) * game.f2[1]);
        game.ang1e3 = ((180 / Math.PI) * game.f3[1]);
        game.ang1e4 = ((180 / Math.PI) * game.f4[1]);

        //For making as NEWTON( px to N conversion)
        game.f1[0] = game.f1[0] / 1.5;
        game.f2[0] = game.f2[0] / 1.5;
        game.f3[0] = game.f3[0] / 1.5;
        game.f4[0] = game.f4[0] / 1.5;


        // To set the Weight,Normal Force,Friction,Tension in the label
        if (game.f1[0].toFixed(0) <= 200) {
            game.oDashTxtArr[9].setText(game.f1[0].toFixed(0)); //Normal Force
        }
        if (game.f2[0].toFixed(0) <= 200) {
            game.oDashTxtArr[7].setText(game.f2[0].toFixed(0)); //Friction
        }
        if (game.f3[0].toFixed(0) <= 200) {
            game.oDashTxtArr[8].setText(game.f3[0].toFixed(0)); //Weight
        }
        if (game.f4[0].toFixed(0) <= 200) {
            game.oDashTxtArr[10].setText(game.f4[0].toFixed(0)); //Tension
        }
        game.forceArray[0] = [game.f1[0].toFixed(0), game.m_gNormalAngle];
        game.forceArray[1] = [game.f2[0].toFixed(0), game.m_gFrictionAngle];
        game.forceArray[2] = [game.f3[0].toFixed(0), game.m_gWeightAngle];
        game.forceArray[3] = [game.f4[0].toFixed(0), game.m_gTensionAngle];

        game.normalForce1 = game.f1[0];
        game.friction1 = game.f2[0];
        game.weight1 = game.f3[0];
        game.tension1 = game.f4[0];
    }

    // Force Function

    //For Force
    game.incForHandler = function (obj) {
        if (obj.id == 'forInc') {
            if (game.normalForce1 < 200) {
                game.normalForce1++;
            }
            game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2], game.actorContainer[3], game.actorContainer[4]);
        }

    }

    game.decForHandler = function (obj) {
        if (obj.id == 'forDec') {
            if (game.normalForce1 > 0) {
                game.normalForce1--;
            }
            game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2], game.actorContainer[3], game.actorContainer[4]);
        }
    }

    //For Friction
    game.incFriHandler = function (obj) {
        if (obj.id == 'friInc') {
            if (game.friction1 < 200) {
                game.friction1++;
            }
            game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2], game.actorContainer[3], game.actorContainer[4]);

        }
    }
    game.decFriHandler = function (obj) {
        if (obj.id == 'friDec') {
            if (game.friction1 > 0) {
                game.friction1--;
            }
            game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2], game.actorContainer[3], game.actorContainer[4]);
        }
    }

    //For Weight
    game.incWegHandler = function (obj) {

        if (obj.id == 'wegInc') {
            if (game.weight1 < 200) {
                game.weight1++;
            }
            game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2], game.actorContainer[3], game.actorContainer[4]);
        }
    }
    game.decWegHandler = function (obj) {
        if (obj.id == 'wegDec') {
            if (game.weight1 > 0) {
                game.weight1--;
            }
            game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2], game.actorContainer[3], game.actorContainer[4]);
        }
    }


    //For Weight
    game.incTenHandler = function (obj) {
        if (obj.id == 'tenInc') {
            if (game.tension1 < 200) {
                game.tension1++;
            }
            game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2], game.actorContainer[3], game.actorContainer[4]);
        }
    }
    game.decTenHandler = function (obj) {
        if (obj.id == 'tenDec') {
            if (game.tension1 > 0) {
                game.tension1--;
            }
            game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2], game.actorContainer[3], game.actorContainer[4]);
        }
    }

    game.incDecMDown = function (mouseEvent) {
        handleIncDec(mouseEvent);
    }

    game.incDecMUp = function (mouseEvent) {
        incDecTimer.cancel();
    }

    function handleIncDec(mouseEvent) {
        incDecTimer = game._scene.createTimer(
        0,
        Number.MAX_VALUE,

        function (scene_time, timer_time, timertask_instance) {}, // timeout
        function (scene_time, timer_time, timertask_instance) { // tick

            handleIncDecVal++;
            if (handleIncDecVal % 5 == 0) {
                tick(mouseEvent);
                handleIncDecVal = 0;
            }
        },

        function (scene_time, timer_time, timertask_instance) {})
    }

    function tick(mouseEvent) {
        if (mouseEvent.source.id == 'forInc') {
            if (game.normalForce1 < 200 && !goFlag) {
                game.normalForce1++;
            }
            game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2], game.actorContainer[3], game.actorContainer[4]);
        }

        if (mouseEvent.source.id == 'forDec') {
            if (game.normalForce1 > 0 && !goFlag) {
                game.normalForce1--;
            }
            game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2], game.actorContainer[3], game.actorContainer[4]);
        }

        if (mouseEvent.source.id == 'friInc') {
            if (game.friction1 < 200 && !goFlag) {
                game.friction1++;
            }
            game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2], game.actorContainer[3], game.actorContainer[4]);

        }

        if (mouseEvent.source.id == 'friDec') {
            if (game.friction1 > 0 && !goFlag) {
                game.friction1--;
            }
            game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2], game.actorContainer[3], game.actorContainer[4]);
        }

        if (mouseEvent.source.id == 'wegInc') {
            if (game.weight1 < 200 && !goFlag) {
                game.weight1++;
            }
            game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2], game.actorContainer[3], game.actorContainer[4]);

        }

        if (mouseEvent.source.id == 'wegDec') {
            if (game.weight1 > 0 && !goFlag) {
                game.weight1--;
				
            }
            game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2], game.actorContainer[3], game.actorContainer[4]);
        }

        if (mouseEvent.source.id == 'tenInc') {
            if (game.tension1 < 200 && !goFlag) {
                game.tension1++;
            }
            game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2], game.actorContainer[3], game.actorContainer[4]);

        }

        if (mouseEvent.source.id == 'tenDec') {
            if (game.tension1 > 0 && !goFlag) {
                game.tension1--;
            }
            game.onObjMove(game.actorContainer[0], game.actorContainer[1], game.actorContainer[2], game.actorContainer[3], game.actorContainer[4]);
        }
    }
	var a=false;
    //Go Button Handler
    game.goBtnMDownHandler = function () {
	
        //To disable rays and graybox
        if (!isGameStart) {
			goFlag=true;
			isGameStart = true;
            resetVal = false;
			
            for (var i = 0; i < 5; i++) {
                game.Rays[i].visible = false;
                game.actorContainer[i].visible = false;
            }
            game.accXY = getXYAcceleration();
            game.createTimerUpdate();
            val = Math.sqrt(Math.pow(game.accXY[0], 2) + Math.pow(game.accXY[1], 2));
            game.oDashTxtArr[1].setText(val.toFixed(1));
			
            
			
			if ((game.weight1.toFixed(0) != 49) || ((game.normalForce1.toFixed(0)) != 49))
			{	
				// Weight and Normal Force Wrong....
				game.__bannerDisplay(0, 2, -70, 0, false);
            } 
			//else if((game.ang1e3 > 45 && game.ang1e3 < 135) && (game.weight1.toFixed(0) != 49) || 
					//(game.ang1e1 > -135 && game.ang1e1 < -45) && ((game.normalForce1.toFixed(0)) != 49))
			else if( (game.weight1.toFixed(0) == 49) && 
				(game.normalForce1.toFixed(0) == 49) && 
				
				//Both arrows(blue and pink) in opposite direction
				(((game.ang1e2 > -45 && game.ang1e2 < 45)  && 
				((game.ang1e4 > 135 && game.ang1e4 <= 180) || (game.ang1e4 >= -180 && game.ang1e4 <= -179) || (game.ang1e4 < -135 && game.ang1e4 >= -179)))
				
				||
				//Both arrows(blue and pink) in right side
				(((game.ang1e2 > -45 && game.ang1e2 < 45) || (game.ang1e2 > 45 && game.ang1e2 < 135) || (game.ang1e2 > -135 && game.ang1e2 < -45))&&
				(game.ang1e4 > -45 && game.ang1e4 < 45)))
				
				||
				
				(((game.ang1e4 > 135 && game.ang1e4 <= 180) || (game.ang1e4 >= -180 && game.ang1e4 <= -179) || (game.ang1e4 < -135 && game.ang1e4 >= -179)))&&
				//((!(game.ang1e2 > 135 && game.ang1e2 <= 180) || !(game.ang1e2 >= -180 && game.ang1e2 <= -179) || !(game.ang1e2 < -135 && game.ang1e2 >= -179)))
				
				((game.ang1e2 > -45 && game.ang1e2 < 45) || (game.ang1e2 > 45 && game.ang1e2 < 135) || (game.ang1e2 > -135 && game.ang1e2 < -45))

				||
				
				((game.ang1e4 > -135 && game.ang1e4 < -45)&&				
				(game.ang1e2 > -135 && game.ang1e2 < -45))
				
				||
				
				((game.ang1e4 > 45 && game.ang1e4 < 135)&&				
				(game.ang1e2 > 45 && game.ang1e2 < 135))

				)
			{
				// Force Vectors are Incrorrect	.........
				game.__bannerDisplay(3, 2, -70, 0, false);
			}
			else if((game.ang1e3 > 45 && game.ang1e3 < 135) && (game.weight1.toFixed(0) == 49) && 
					(game.ang1e1 > -135 && game.ang1e1 < -45) && ((game.normalForce1.toFixed(0)) == 49) &&
					
					((game.ang1e2 > 135 && game.ang1e2 <= 180) || (game.ang1e2 >= -180 && game.ang1e2 <= -179) || (game.ang1e2 < -135 && game.ang1e2 >= -179)) &&
					
					((game.ang1e4 > -45 && game.ang1e4 < 45) || 
					((game.ang1e4 > 135 && game.ang1e4 <= 180) || (game.ang1e4 >= -180 && game.ang1e4 <= -179) || (game.ang1e4 < -135 && game.ang1e4 >= -179)) ||
					(game.ang1e4 > -135 && game.ang1e4 < -45) ||
					(game.ang1e4 > 45 && game.ang1e4 < 135)
					) &&
					
				
					(val.toFixed(2) >= 10.80 && val.toFixed(2) <= 11.20 ))
			{
				//Magnitude Correct, but force magnitude wrong...
				game.__bannerDisplay(4, 2, -70, 0, false);

			}
			else{
				//Sorry the accelration is wrong....
				game.__bannerDisplay(1, 2, -70, 0, false);

			}
			
			
			if((game.ang1e3 > 45 && game.ang1e3 < 135) && (game.weight1.toFixed(0) == 49) && 
					(game.ang1e1 > -135 && game.ang1e1 < -45) && ((game.normalForce1.toFixed(0)) == 49) &&
					
					((game.ang1e2 > 135 && game.ang1e2 <= 180) || (game.ang1e2 >= -180 && game.ang1e2 <= -179) || (game.ang1e2 < -135 && game.ang1e2 >= -179)) &&
					
					(game.ang1e4 > -45 && game.ang1e4 < 45) &&
					 
					((game.tension1.toFixed(0)>= 77) && (game.tension1.toFixed(0)<= 79)) &&
					
					(game.friction1.toFixed(0) == 23))
			{
				//Congrats you have acheived....
				game.__bannerDisplay(2, 1, -70, 0, false);
				
			}

            //To disable Texts:		
            game.txtFN.visible = false;
            game.txtfriction.visible = false;
            game.txtweight.visible = false;
            game.txttension.visible = false;
            game.txtn.visible = false;            
        }
        //To disable Inc and Dec buttons:
    }

    game.resetBtnMDownHandler = function () {
	if(goFlag){
		isGameStart = false;
		pauseFlg = false;
		pauseTimeStamp = 0;
		game.timerStart = 0;
		isFrstTimer = false;
		goFlag=false;
		a=false;
        //Enable BOX
        game.line.setLocation(0, 0)
            .visible = true;

        //To Enable rays and graybox
        for (var i = 0; i < 5; i++) {
            game.Rays[i].visible = true;
            game.actorContainer[i].visible = true;
        }
        //Bringing DisplayBox to orginal position	
        if (!resetVal) {
            game.__bannerDisplay(0, 2, -70, 0, true);
            resetVal = true;
        }
		
        //To Enable Texts:					
        game.txtFN.visible = true;
        game.txtfriction.visible = true;
        game.txtweight.visible = true;
        game.txttension.visible = true;
        game.txtn.visible = true;

        //Cancelling _timerInstance
        if (_timerInstance != null) {
            _timerInstance.cancel();
        }
		
		//Resetting Accelaration Value :
		game.oDashTxtArr[1].setText('0.0');
    }
	}

    game.pauseBtnMDownHandler = function () { 
		if(!isGameStart){		
			return;		
		}else{			
			pauseFlg = true;
			isGameStart = false;
			_timerInstance.cancel();
			game.accXY = getXYAcceleration();
            //game.createTimerUpdate();
			pauseTimeStamp = new Date().getTime();	
		}
    }

})();