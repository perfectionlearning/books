//
//	Game Logic
//
(function () {

    var _timer,
        //incDecTimer=null,
        incDecCount = 0,
        gameTimer = null,
        startTime = null,
        currentTime = null,
        startX = 0,
        startY = 0,
        journey = 1,
        elapsedTime = null,
        oneMtInPx = 15,
        sx = 0,
        sy = 0,
        velocity = 0,
        poweredVelocity = 0,
        mass = 98,
        centerX = 350,
        centerY = 139.5,
        g = 9.8,
        forward = true,
        reverseSx = 0,
        lastOne = 0,
        height = 0,
        x1 = 0,
        y1 = 0,
        divideRadius = 2.0,
        remainRotate = 0,
        radi = 72,
        addHeight = 0,
        addWidth = 0,
        sX = 0,
        rotate = 0,
        downY = 0,
        downX = 0,
        reverseVel = 0,
        backWardX = 361,
        forwardMax = 0,
        pauseTime = 0,
        isFirstStart = true,
        timerStartStamp = 0,
        gamePause = false,
        finalVel = 0,       
        gameTimer = null,
        gameEnd = false,
        brakeStartX = 424,
        hVelocity = 0,
        victoryRunning = false,
        victoryEndRunning = false,
        flagStartIndex = 1;

    game.goBtnMDownHandler = function () {
        if (!game.isRunning || gamePause && !gameEnd) {
//			console.log(game.isRunning, gamePause, gameEnd, (!game.isRunning || gamePause && !gameEnd));
            if (!gamePause) {				
                poweredVelocity = Math.sqrt((game.power * 4) / mass);
                game.__bannerDisplay(0, 0, 70, 0, true);
                startTime = new Date().getTime();
                velocity = poweredVelocity;
                startX = 0;
            } else {
                timerStartStamp = new Date().getTime();
                startTime = startTime + timerStartStamp - pauseTime;
                gamePause = false;
            }
            _timer = __createUpdateTimer();
            game.isRunning = true;
        }

        if (victoryEndRunning) {
            flagEndAnim();
        }
        if (victoryRunning) {
            flagAnimation();
        }

    }


    game.pauseBtnMDownHandler = function () {
		if(!game.isRunning){
			return;
		}
        if (!gamePause) {
            if (gameTimer) {
                gameTimer.cancel();
            }
            gamePause = true;
            pauseTime = new Date().getTime();
            if (victoryRunning) {
                game.victroy_flagImg.setAnimationImageIndex([game.victroy_flagImg.backgroundImage.spriteIndex]);
                flagStartIndex = game.victroy_flagImg.backgroundImage.spriteIndex;
            }
            if (victoryEndRunning) {
                game.victroy_flagImg.setAnimationImageIndex([game.victroy_flagImg.backgroundImage.spriteIndex]);
            }
        }
    }

    game.resetBtnMDownHandler = function () {
        game.__bannerDisplay(0, 0, 70, 0, false);
        if (gameTimer) {
            gameTimer.cancel();
        }
        journey = 1;
        forward = true;
        reverseSx = 0;
        lastOne = 0;
        height = 0;
        x1 = 0;
        y1 = 0;
        addHeight = 0;
        addWidth = 0;
        sX = 0;
        rotate = 0;
        downY = 0;
        isGamestart = true;
        isGamepause = false;
        sx = 0;
        sy = 0;
        velocity = 0;
        poweredVelocity = 0;
        elapsedTime = 0;
        game.car.x = 0;
        game.car.y = 215.5;
        pauseTime = 0;

        gamePause = false;
        game.car.setRotation(0);
        game.isRunning = false;
        gameEnd = false;
        victoryEndRunning = false;
        victoryRunning = false;
        game.haystackImg.setAnimationImageIndex([0]);
        game.victroy_flagImg.setAnimationImageIndex([0]);
        flagStartIndex = 1;

    }


    function __createUpdateTimer() {
        gameTimer = game._scene.createTimer(
            0,
            Number.MAX_VALUE, 
			function (scene_time, timer_time, timer_instance) {}, //timeout, 
			function (scene_time, timer_time, timer_instance) { //tick
//			console.log('car x: '+game.car.x);
            if (journey == 1 && game.car.x > 361) {
//				console.log('1st if called');
                startX = 361;
                startY = game.car.y;
                journey = 2;
                startTime = new Date().getTime();
            }
            // Movement in the road
            if (journey == 1) {
//				console.log('2nd if called');
                currentTime = new Date().getTime();
                elapsedTime = (currentTime - startTime) / 1000;
                sx = (0.5 * velocity * elapsedTime * elapsedTime) * oneMtInPx;
                game.car.x = startX + sx;
            }

            // Movement in the circle
            else if (journey == 2) {
                currentTime = new Date().getTime();
                elapsedTime = (currentTime - startTime) / 1000;
                if (forward) {
                    if (rotate < 190) {
                        height = (220 - game.car.y) / 11.4;
                    }
                    velocity = Math.sqrt((0.5 * ((0.5 * poweredVelocity * poweredVelocity) + (-g * height))));
                }
                if (forward) {
                    if (isNaN(velocity)) {
                        if (forward) {
                            startTime = new Date().getTime();
                            poweredVelocity = 0;
                            reverseVel = -height / 60;
                            forward = false;
                            if (game.power < 700) {
                                forwardMax = centerX - sX / 1.65;
                            } else {
                                forwardMax = 285;
                            }

                        }
                    }
                }
                if (forward) {
                    sX = ((poweredVelocity * elapsedTime) + (0.5 * velocity * Math.pow(elapsedTime, 2))) * oneMtInPx;
                } else {
                    if (game.power > 3600) {
                        journey = 4;
                        remainRotate = 360 - rotate;
                        startTime = new Date().getTime();
                        downX = game.car.x;
                        downY = game.car.y;
                    } else if (game.power > 300) {
                        sX = sX + ((poweredVelocity * elapsedTime) + (0.5 * reverseVel * Math.pow(elapsedTime, 2))) * oneMtInPx;

                        if (game.car.x < 295) {
                            if (gameTimer) {
                                gameTimer.cancel();
                            }
                            game.car.x = 295;
                            game.__bannerDisplay(5, 1, 70, 0, false);
                            gameEnd = true;
                        }

                    } else if (game.power <= 300) {
                        if (gameTimer) {
                            gameTimer.cancel();
                        }
                        game.__bannerDisplay(5, 1, 70, 0, false);
                        gameEnd = true;
                    }
                }

                rotate = sX / divideRadius;
                ang = 90 - rotate;

                if (rotate <= 180) {
                    addHeight = ((game.car.height / 2) / 180) * rotate * 0.9;
                } else {
                    addHeight = ((game.car.height / 2) / 180) * (360 - rotate) * 0.9;
                    var reduce = rotate - 180;
                    var redulen = (10 / 180) * reduce;
                    addHeight = addHeight - redulen;
                }

                if (rotate <= 15) {
                    addHeight = addHeight + (3.5 / 15) * (15 - rotate);
                }
                if (rotate >= 0 && rotate <= 90) {
                    addWidth = ((game.car.width / 2) / 180) * (90 - rotate);
                } else if (rotate > 90 && rotate <= 270) {
                    addWidth = ((game.car.width / 3) / 180) * (rotate - 90);
                } else if (rotate > 270 && rotate <= 359) {
                    addWidth = ((game.car.width / 3) / 180) * (450 - rotate);
                }
                if (rotate > 0) {
                    x1 = centerX + radi * Math.cos(ang * Math.PI / 180) + addWidth;
                    y1 = centerY + radi * Math.sin(ang * Math.PI / 180) + addHeight;
                    game.car.y = y1;
                    game.car.x = x1;
                    reverseSx = sX;
                } else {
                    rotate = 0;
                    var positionX = 361 + sX;
                    if (positionX >= forwardMax) {
                        game.car.x = positionX;
                    }
                }
                game.car.setRotation(-(rotate) * (Math.PI / 180));
                if (rotate >= 358) {
                    startTime = new Date().getTime();
                    game.car.setRotation(-360 * (Math.PI / 180));
                    startX = x1;
                    journey = 3;
                }

                // Movement After the circle	
            } else if (journey == 3) {
                currentTime = new Date().getTime();
                elapsedTime = (currentTime - startTime) / 1000;
                sx = (poweredVelocity * elapsedTime) * oneMtInPx;
                game.car.x = 358 + sx;
                if (game.car.x > brakeStartX) {
                    journey = 6;
                    startTime = new Date().getTime();
                }

            }

            // Falldown from the upper area
            else if (journey == 4) {
                currentTime = new Date().getTime();
                elapsedTime = (currentTime - startTime) / 1000;
                var mVelocity = Math.sqrt((game.power) / mass);
                var hVelocity = Math.abs(mVelocity) * Math.cos(rotate * Math.PI / 180);
                var sH = (hVelocity * elapsedTime) * 6;
                var sV = ((0.5 * g * Math.pow(elapsedTime, 2))) * oneMtInPx;
                game.car.y = downY + sV;
                game.car.x = downX + sH;
                if (game.car.y > 191) {
                    var rotateDeg = (remainRotate / 30) * (game.car.y - 191);
                    game.car.setRotation(-(rotateDeg + rotate) * (Math.PI / 180));
                }
                if (game.car.y > 221) {
                    game.car.setRotation(2 * Math.PI);
                    game.car.y = 221;
                    if (gameTimer) {
                        gameTimer.cancel();
                    }
                    game.__bannerDisplay(2, 1, 70, 0, false);
                    gameEnd = true;
                }

            }

            // Movement after the gave brake
            else if (journey == 6) {
                currentTime = new Date().getTime();
                elapsedTime = (currentTime - startTime) / 1000;
                sx = (poweredVelocity * elapsedTime) + (0.5 * (-(game.brakeForce / mass)) * elapsedTime * elapsedTime);

                if (sx < lastOne) {
                    if (gameTimer) {
                        gameTimer.cancel();
                    }
                    if (game.car.x > 645) {

                        var timerMove = game._scene.createTimer(
                            0,
                            Number.MAX_VALUE, function (scene_time, timer_time, timer_instance) { //timeout

                        }, function (scene_time, timer_time, timer_instance) { //tick
                            game.car.x = game.car.x + 0.5;
                            if (game.car.x > 653) {
                                timerMove.cancel();
                            }
                        }, function (scene_time, timer_time, timer_instance) { //cancel
                            game.__bannerDisplay(3, 2, 70, 0, false);
                            flagAnimation();
                            gameEnd = true;
                        });

                    } else {
                        game.__bannerDisplay(4, 1, 70, 0, false);
                    }
                    gameEnd = true;

                } else if (game.car.x > 654) {

                    if (gameTimer) {
                        gameTimer.cancel();
                    }
                    var timerMove = game._scene.createTimer(
                        0,
                        Number.MAX_VALUE, function (scene_time, timer_time, timer_instance) { //timeout

                    }, function (scene_time, timer_time, timer_instance) { //tick
                        game.car.x = game.car.x + 0.5;
                        if (game.car.x > 676) {
                            timerMove.cancel();
                        }
                    }, function (scene_time, timer_time, timer_instance) { //cancel
                        hayStackAnimation();
                        game.__bannerDisplay(1, 1, 70, 0, false);
                    });
                    gameEnd = true;
                } else {

                    game.car.x = brakeStartX + (sx * oneMtInPx);
                    lastOne = sx;
                }

            }



        }, function (scene_time, timer_time, timer_instance) { //cancel

        });

    }


    function hayStackAnimation() {
        var si = new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('haystack'), 2, 6).
        addAnimation('haystackImgAnimation', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 100, haystackEnd);
        game.haystackImg.playAnimation('haystackImgAnimation');
        game.haystackImg.setBackgroundImage(si).playAnimation('haystackImgAnimation');
    }


    function flagAnimation() {
        victoryRunning = true;
        var arr = [];
        for (var i = flagStartIndex; i < 18; i++) {
            arr[arr.length] = i;
        }
        var si = new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('victroy_flag'), 2, 11).
        addAnimation('victroy_flagImgAnimation', arr, (arr.length) * 5, flagEndAnim);
        game.victroy_flagImg.setBackgroundImage(si).playAnimation('victroy_flagImgAnimation');
    }

    function flagEndAnim() {
        victoryRunning = false;
        victoryEndRunning = true;
        var si = new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('victroy_flag'), 2, 11).
        addAnimation('victroy_endAnimation', [17, 18, 19, 20, 21], 100);
        game.victroy_flagImg.setBackgroundImage(si).playAnimation('victroy_endAnimation');
    }


    function haystackEnd() {
        game.haystackImg.setAnimationImageIndex([10]);
    }

    game.incDecMDown = function (mouseEvent) {
        if (!game.isRunning && !gamePause) {
            game.incDecTimer = game._scene.createTimer(
                game._scene_time,
                Number.MAX_VALUE,
                null, function (scene_time, time_time, time_instance) {
                incDecCount++;
                if (incDecCount % 7 == 0) {
                    incDecHandler(mouseEvent.source);
                    incDecCount = 0;
                }
            },
                null);
        }
    }

    game.incDecMUp = function (mouseEvent) {
        if (game.incDecTimer) {
            game.incDecTimer.cancel();
        }
    }

    function incDecHandler(obj) {


        if (obj.id == 'inipowerInc') {
            if (game.power != 10000) {
                game.power += 100;
                var pow;
                if (game.power == 10000) {
                    pow = String(game.power).slice(0, 2) + "," + String(game.power).slice(2);
                } else if (game.power < 1000) {
                    pow = String(game.power);
                } else {
                    pow = String(game.power).slice(0, 1) + "," + String(game.power).slice(1);
                }
                game.oDashTxtArr[1].setText(pow);
            }
        }
        if (obj.id == 'inipowerDec') {
            if (game.power != 0) {
                game.power -= 100;
                var pow;
                if (game.power == 10000) {
                    pow = String(game.power).slice(0, 2) + "," + String(game.power).slice(2);
                } else if (game.power < 1000) {
                    pow = String(game.power);
                } else {
                    pow = String(game.power).slice(0, 1) + "," + String(game.power).slice(1);
                }
                game.oDashTxtArr[1].setText(pow);
            }

        }

        if (obj.id == 'inibrakDec') {
            if (game.brakeForce != 0) {
                game.brakeForce -= 10;
                var brake;

                if (game.brakeForce < 1000) {
                    brake = String(game.brakeForce);
                } else {
                    brake = String(game.brakeForce).slice(0, 1) + "," + String(game.brakeForce).slice(1);
                }
                game.oDashTxtArr[4].setText(brake);
            }

        }

        if (obj.id == 'inibrakInc') {

            if (game.brakeForce != 1200) {
                game.brakeForce += 10;
                var brake;

                if (game.brakeForce < 1000) {
                    brake = String(game.brakeForce);
                } else {
                    brake = String(game.brakeForce).slice(0, 1) + "," + String(game.brakeForce).slice(1);
                }
                game.oDashTxtArr[4].setText(brake);
            }

        }

    }


})()