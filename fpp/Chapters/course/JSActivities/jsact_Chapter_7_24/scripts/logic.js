//=======================================================
//	create desktop for user interaction
//=======================================================
game.interaction = function(director, scene, banner){
	
	var bannerbg = banner.childrenList[0];
	var text1 = banner.childrenList[1];
	var text2 = banner.childrenList[2];
	var text3 = banner.childrenList[3];
	
	var centripetalAcceleration  = 0;
	var desktop = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);
	var gamePaused = false;
	var pausedTime = 0;
	var startTime = 0;
	var currentTime = 0;
	var elapsedTimeInSec = 0;
	var timerInstance = null;
	var incDecTimer = null;
	var makeTimerDelay = 0;
	var speedVal = 1.0;
	var totalPauseTime = 0;
	
	//var game.isGameStart = true;
	var isPaused = false;

	//// PW ////
	var theta = 55;
	var vCraved = 45;
	/////////////
	var beta = 0;
	var d = 0;
	var sh = 0;
	var sv = 0;
	var dv = 0;
	var dh = 0;
	var vh = 0;
	var vv = 0;
	var s = 0;
	var g = 9.80;
	var a = g * Math.sin((Math.PI/180) * theta);
	var v = 0;
	var aVert = a * Math.sin((Math.PI/180) * theta);
	var aHorz = a * Math.cos((Math.PI/180) * theta);
	//// PW ////
	var oneMtInPx = 21;
	/////////////
	var carStartX = 0;
	var carStartY = 0;
	var carMeter = 0;
	var journey = 1;
	
	var xLimit = 245;
	var yLimit = xLimit * Math.tan((Math.PI/180) * theta);
	
	var moveToX = 0;
	var moveToY = 0;
	var drawArrow = function() {
		var dx = carStartX - this.x;
		var dy = carStartX - this.y;
		
		//var angle = Math.atan2(dy, dx);
		var angle = Math.atan2(dy, dx);
		var canvas = director.ctx;
		canvas.strokeStyle = this.fillStyle;
		canvas.fillStyle = this.fillStyle;
		canvas.lineWidth = 0.5;
		canvas.beginPath();

		canvas.moveTo(dx , dy);
		canvas.lineTo(0, 0);
		
		canvas.lineJoin = 'round';
		canvas.lineCap = 'round';
		canvas.closePath();	
		canvas.stroke();
	};	
	
	var direction = function(xA, yA, xB, yB){
		var dir = Math.atan2(yB-yA,xB-xA);
		return dir
	};

	var radius = function(xA, yA, xB, yB){
		var magnitude = Math.sqrt(Math.pow((xA - xB),2) + Math.pow((yA - yB),2));
		return magnitude;
	}

	var makeTangent = function(cx, cy, r, angle) {
		var ang = ( Math.PI / 180 ) * angle;
		var x1 = cx + (r * Math.cos(ang));
		var y1 = cy + (r * Math.sin(ang));
		return {x:x1, y:y1};
	}
		
	
	function getActor(drag, x, y, id, imgname, row, column){
		var aActor =  new CAAT.exemplarr().setBackgroundImage(
					new CAAT.Foundation.SpriteImage().
						initialize(director.getImage(imgname), row, column), true).
						setSpriteIndex(0).
						setDefaultPos(x, y).
						setId(id);
			if(drag){
				aActor.userDrag(snap, check);
			}
		return aActor;
	}
	
	function pauseRace(){
		game.isGameStart = true;
		isPaused = true;
		pauseTimeStamp = new Date().getTime();
		timerInstance.cancel();	
		//aActorRing.setAnimationImageIndex([aActorRing.backgroundImage.spriteIndex]);	
	}
	
	function resetRace(){	
		if(timerInstance){
			timerInstance.cancel();
		}
	
		aActorCar.setRotationAnchored(theta * (Math.PI/180), 0.5 ,0.5);
		aActorCar.setPosition(86, 141);
		journey = 1;
		theta = 55;
		xLimit = 245;
		
		aActorCarM.setText("9.0 m");
		aActorCarS.setText("0.0");
		displaybanner(1);
		aActorRing.resetAnimationTime();
		
		aActorArrow.visible = true;
		game.isGameStart = true;
		isPaused = false;
	}
	
	function startCar(){
		game.isActvityStart = true;
		aActorArrow.visible = false;
		game.isActvityStart = true;
		var uh = speedVal * Math.cos(Math.PI/180 * theta);
		var uv = speedVal * Math.sin(Math.PI/180 * theta);
		var u = speedVal;
		var prevSv = 0;
		

		if(game.isGameStart && !isPaused){
			carStartX = aActorCar.x;
			carStartY = aActorCar.y;
			startTime = new Date().getTime();
		}else if(game.isGameStart && isPaused){
			var newTimeStamp = new Date().getTime();
			totalPauseTime = totalPauseTime+newTimeStamp - pauseTimeStamp;
			isPaused = !isPaused;
		}
		game.isGameStart = !game.isGameStart;
		
		timerInstance = scene.createTimer(
			0,
			Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {}, // timeout
			function (scene_time, timer_time, timertask_instance) {   // tick
				currentTime = new Date().getTime();
				elapsedTimeInSec = (currentTime - (startTime + totalPauseTime))/1000;
				
				// console.log('elapsedTimeInSec ' + elapsedTimeInSec);
				
				if(journey == 1){
				
					dh = (uh * elapsedTimeInSec) + 0.5 * aHorz * Math.pow(elapsedTimeInSec, 2);
					dv = (uv * elapsedTimeInSec) + 0.5 * aVert * Math.pow(elapsedTimeInSec, 2);
					v = u + Math.sqrt(Math.pow(aVert,2) + Math.pow(aHorz,2)) * elapsedTimeInSec;
					
					movX = carStartX + (dh * oneMtInPx);
					movY = carStartY + (dv * oneMtInPx);
					
					sh = (xLimit - movX)+(aActorCar.width/2);
					sv = (movY - yLimit)+(aActorCar.width/2);
					
					meter = sv/oneMtInPx;
					
					if(meter >= -0.5){
						aActorCar.setRotationAnchored(0, 0, 0);
						aActorCar.x +=10;
					}else if(meter >= -0.7){
						aActorCar.setRotationAnchored(10 * (Math.PI/180), 0.1, 0.5);
						aActorCar.x +=10;
					}
					
					if(meter >= -0.2){
						totalPauseTime =0;
						journey = 2;
						startTime = new Date().getTime();
						aActorCarM.setText('0.0 m');
						aActorCarS.setText('12.2');
					}else{
					
						aActorCar.x = movX;
						aActorCar.y = movY;
						aActorCarM.setText(Math.abs(meter).toFixed(1) + ' m');
						aActorCarS.setText(v.toFixed(1));
					}
					centripetalAcceleration = v;
					updateSpeedMeter();
				}else if(journey == 2){
					s = v * elapsedTimeInSec;
					s = s * oneMtInPx;
					movX = aActorCar.x + s;

					if(movX > 257){
						totalPauseTime =0;
						journey = 3;
						startTime = new Date().getTime();
						if(speedVal >= 2.6 && speedVal <= 2.8){
							theta = 59;
						}else{
							theta = 55;
						}
						aActorCar.y -= 7;
						aActorCar.resetTransform();
						aActorCar.setRotation(-theta * (Math.PI/180));

						vh = v * Math.cos((Math.PI/180) * theta);
						vv = v * Math.sin((Math.PI/180) * theta);
						vh -= 0.5;
						vv -= 1;
					}else{
						aActorCar.x = movX;
					}
				}else if(journey == 3){
					sv = (vv * elapsedTimeInSec) + (0.5 * -g * Math.pow(elapsedTimeInSec, 2));
					sh = vh * elapsedTimeInSec;

					var vv1 = vv + (-g * elapsedTimeInSec);
					v = Math.sqrt(Math.pow(vv1,2)+Math.pow(vh,2));
					
					meter = sv - 1;
					aActorCarM.setText(Math.abs(meter).toFixed(1) + ' m');
					aActorCarS.setText((v-1).toFixed(1));
					
					centripetalAcceleration = v-1;
					updateSpeedMeter();
					
					sh = sh * oneMtInPx;
					sv = sv * oneMtInPx;
						
					//aActorCar.resetTransform();
					beta = (Math.atan(vv1/vh));
					//console.log(beta/Math.PI *180);
					aActorCar.setRotation(-beta);
					//aActorCar.setRotationAnchored(-beta, -0.1, -0.1);

					s = Math.sqrt(Math.pow(sh,2) + Math.pow(sv, 2));
					s = (s)/oneMtInPx;
					
					if(aActorCar.x >350 && !(speedVal >= 2.6 && speedVal <= 2.8)){
						aActorCar.x = 351;
						if(prevSv < sv){
							aActorRing.visible = true;
							aActorCar.setRotationAnchored(270*(Math.PI/180), 0.5, 0.5);
							aActorRing.playAnimation('ringAnimat');
						}else{
							//aActorRing.resetAnimationTime();
							aActorRing.visible = false;
							aActorCar.setRotationAnchored(90*(Math.PI/180), 0.5, 0.5);
						}
						prevSv = sv;
					}else{
						aActorCar.x = xLimit + sh;
					}
						
					aActorCar.y = 320 - sv;
					
					if(sv <= -22 ){
						totalPauseTime =0;
						journey=4;
						aActorCar.setRotation(0);
						startTime = new Date().getTime();
						xLimit = aActorCar.x;
					}
					centripetalAcceleration = v;
					updateSpeedMeter();
					
				}else if(journey == 4){
				
					if(speedVal >= 2.6 && speedVal <= 2.8){
						s = v * elapsedTimeInSec;
						s = s * oneMtInPx;
						aActorCar.x = xLimit+s;
						if(aActorCar.x > 700){
							displaybanner(4);
							timerInstance.cancel();
							return;
						}
					}else{
						if(speedVal > 2.8){
							displaybanner(3);
						}else if(speedVal < 2.6){
							displaybanner(2);
						}
						timerInstance.cancel();
						return;
					}
				}
			},
			function (scene_time, timer_time, timertask_instance) {
				if(!isPaused){
					aActorCarM.setText("-1.0 m");
					aActorCarS.setText("0.0");
					centripetalAcceleration = 0;
					updateSpeedMeter();
				}
			} // cancel
		)
	}

	var IncDecArrow = function(action, btn){
		
		btn.mouseUp = function(mouseEvent){
			if(incDecTimer != null){
				incDecTimer.cancel();
			}
		};
		btn.mouseDown = function(mouseEvent){
			incDecTimer=scene.createTimer(0, Number.MAX_VALUE,
				function (scene_time, timer_time, timertask_instance) {   // timeout
				},
				function (scene_time, timer_time, timertask_instance) {
					makeTimerDelay++;
					if(makeTimerDelay%5==0)
					{
						process();
						makeTimerDelay=0;
					}
				},
				function (scene_time, timer_time, timertask_instance) {   // cancel
				}
			);
		};
		function process(){
			if(game.isGameStart && !isPaused){
				if(action=='+')
				{
					if(speedVal<15)
					{
					   speedVal+=0.1
					   aActorIncDec.setText(speedVal.toFixed(1));
					}
				}
				else if(action=='-')
				{
					if(speedVal>=0.1)
					{
						speedVal-=0.1
						aActorIncDec.setText(speedVal.toFixed(1));
					}
				}
				speedVal = Math.round(speedVal * Math.pow(10,1))/Math.pow(10,1);
			}
		};
		if(makeTimerDelay==0){
			process();
		}
	};
	
	var isDrag = false;
	var check = function(cActor, mouseEvent){
	
	};
	
	var snap = function(cActor, mouseEvent, x, y){
		cActor.x +=x;
		cActor.y +=y;
	};

	// var aActorMidPoint = new CAAT.exemplarr().setBounds(xLimit, yLimit, 1, 1).setId('holder2').setFillStyle('#0000ff');
	
	// var aActorCarMid = new CAAT.exemplarr().setBounds(275, yLimit, 2, 2).setId('point').setFillStyle('#000000');
	
	/*car*/
	var aActorCar = getActor(false, 86, 141, 'car', 'car', 1, 1);
	aActorCar.setRotationAnchored(theta * (Math.PI/180), 0.5 ,0.5);
	// aActorCar.userDrag(snap, check);
	// var aActorCarTmp = new CAAT.exemplarr().setBounds(220, 318, aActorCar.width, aActorCar.height).setId('holder1');
	// aActorCarTmp.userDrag(snap, check);
	// aActorCarTmp.setDefaultPos(220, 318);
	// aActorCar.setAlpha(0.2);
	
	var aActorArrow = getActor(false, 62, 79, 'arrow', 'arrow', 1, 1);


	var reset= function(spriteImage, time) {
		spriteImage.playAnimation("reset");
	};
	
	/*ring*/
	var aActorRing = getActor(false, 362, 185, 'ring', 'ring', 1, 9);
	aActorRing.addAnimation('ringAnimat', [0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 4, 3, 6, 7, 8], 100, reset);	
	aActorRing.addAnimation('reset', [7], 100);
	aActorRing.visible = false;
	
	/*ring1*/
	var aActorRing1 = getActor(false, 362, 185, 'ring1', 'ring1', 1, 1);
	var aActorRing2 = getActor(false, 401, 185, 'ring2', 'ring2', 1, 1);
	
	
	/*distance of car meter*/
	var aActorCarM =  game.textActor(director, '9.0 m', '14px Arial', 'left', '#ffffff');
	aActorCarM.setLocation(60, 238);

	/*speed of car meter*/
	var aActorCarS =  game.textActor(director, '0.0', 'Bold 14px Arial', 'left', '#000000');
	aActorCarS.setLocation(470, 555);

	/*Go Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3);
	var aActorGo = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 1, 0, 
						function(button){							
							if(game.isGameStart && !isPaused){
								displaybanner(0);
								startCar();
							}else if(game.isGameStart && isPaused){
								startCar();
							}else if(!game.isGameStart && !isPaused && journey == 4){
								displaybanner(0);
								resetRace();
							}
						}).setLocation(670, 510);
	
	/*Pause Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorPause = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 2, 2, 3, 2, 
						function(button){
							game.pauseBtnMDownHandler();																	
						}).setLocation(670, 560);
	game.pauseBtnMDownHandler = function(){
		if(game.isGameStart){
			return;
		}else{
			pauseRace();
			game.isActvityStart = false;
		}		
	};
	/*Reset Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorReset = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 4, 4, 5, 4, 
						function(button){
							displaybanner(1);
							resetRace();
						}).setLocation(670, 535);

	/*InCrement and DeCrement*/
	var btnValBg = getActor(false, 575, 546, 'incrbgmed', 'incrbgmed', 1, 1);
	var btnValImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('incdecbtn'), 2, 1);
	var aActorInc = new CAAT.exemplarr().setAsButton(btnValImg.getRef(), 0, 0, 0, 0, 
						function(button){
							IncDecArrow('+', aActorInc);
						}).setLocation(565, 546);
	
	var btnValImg1 = new CAAT.Foundation.SpriteImage().initialize(director.getImage('incdecbtn'), 2, 1);	
	var aActorDec = new CAAT.exemplarr().setAsButton(btnValImg1.getRef(), 1, 1, 1, 1, 
						function(button){
							IncDecArrow('-', aActorDec);
						}).setLocation(565, 555);
						
	aActorInc.mouseExit = function(){
		if(incDecTimer){
			incDecTimer.cancel();
			CAAT.setCursor('default');
		}
	}
	aActorDec.mouseExit = function(){
		if(incDecTimer){
			incDecTimer.cancel();
			CAAT.setCursor('default');
		}
	}
	/*Inc and Dec value*/
	var aActorIncDec =  game.textActor(director, speedVal.toFixed(1), 'Bold 14px Arial', 'left', '#ffffff');
	aActorIncDec.setLocation(591, 548);
	
	
	//centripetal acceleration
	var speedLine = new CAAT.exemplarr().setBounds(479, 554, 1, 25).setId('speedLine');		
	speedLine.paint = function(director, time){
		var ctx = director.ctx;
		ctx.beginPath();
		ctx.translate(0, 0);	
		ctx.strokeStyle = 'red';
		ctx.moveTo(0.5, 0);
		ctx.lineTo(0.5, -25);
		ctx.lineTo(1.5, -25);				
		ctx.lineTo(1.5, 0);
		ctx.closePath();
		ctx.lineWidth = 0.5;					
		ctx.stroke();					
	};						
	
	function updateSpeedMeter()
	{
		var startAngle = 0;
		var endAngle = centripetalAcceleration * ( 360 / 60 );
		var rotateAroundMidPointDial = new CAAT.RotateBehavior()
			.setFrameTime(0, 0)
			.setValues( startAngle * ( Math.PI / 180 ), endAngle * ( Math.PI / 180 ) )
			.setCycle(false)
			.setAnchor( speedLine, 0, 0);
		speedLine.addBehavior(rotateAroundMidPointDial);	
	}
	
	function displaybanner(dispid){

		var pathBehaviour = new CAAT.PathBehavior().
			setValues(new CAAT.Path().
			setLinear(10, 8, 10, 100).
			setInteractive(false)).
			setDelayTime(0, 300);
	
		if(dispid == 0){	
			bannerbg.setSpriteIndex(2);
			text1.setText("To make the jump, the car must be traveling");
			text2.setText("at 12.5 m/s at the bottom of the hill. A 125 N");
			text3.setText("frictional force opposes car's motion on the hill.");			
			pathBehaviour.setValues(new CAAT.Path().setLinear(0, 0, 0, 70));
			//pathBehaviour.setValues(new CAAT.Path().setLinear(10, 8, 10, 100));
		}else if(dispid == 1){
			bannerbg.setSpriteIndex(2);
			text1.setText("To make the jump, the car must be traveling");
			text2.setText("at 12.5 m/s at the bottom of the hill. A 125 N");
			text3.setText("frictional force opposes car's motion on the hill.");
			//pathBehaviour.setValues(new CAAT.Path().setLinear(10, 70, 10, 8));
			pathBehaviour.setValues(new CAAT.Path().setLinear(0, 70, 0, 0));
		}else if(dispid == 2){
			bannerbg.setSpriteIndex(0);
			text1.setText("You speed was too low.");
			text2.setText("Press RESET to start over.");
			text3.setText("");
			//pathBehaviour.setValues(new CAAT.Path().setLinear(10, 70, 10, 8));
			pathBehaviour.setValues(new CAAT.Path().setLinear(0, 70, 0, 0));
		}else if(dispid == 3){
			bannerbg.setSpriteIndex(0);
			text1.setText("You speed was too high.");
			text2.setText("Press RESET to start over.");
			text3.setText("");
			//pathBehaviour.setValues(new CAAT.Path().setLinear(10, 70, 10, 8));
			pathBehaviour.setValues(new CAAT.Path().setLinear(0, 70, 0, 0));
		}else if(dispid == 4){
			bannerbg.setSpriteIndex(1);
			text1.setText("You did it! Your speed");
			text2.setText("was correct.");
			text3.setText("");
			//pathBehaviour.setValues(new CAAT.Path().setLinear(10, 70, 10, 8));\
			pathBehaviour.setValues(new CAAT.Path().setLinear(0, 70, 0, 0));
		}
		
		text1.setLocation(((banner.width - text1.width)/2)+6, 12);
		text2.setLocation(((banner.width - text2.width)/2)+6, 28);
		text3.setLocation(((banner.width - text3.width)/2)+6, 44);
		banner.addBehavior(pathBehaviour);
	}
	
	// var path3= new CAAT.PathUtil.ArcPath().initialize(J2X, J2Y, vCraved, Math.PI*2).setClockWise(true);
    // var path= new CAAT.PathUtil.Path().addSegment(path3).endPath();
    // var pa= new CAAT.Foundation.UI.PathActor().setBounds(0,0,800,500).setInteractive(true).setPath(path);
    // desktop.addChild(pa);
	
	// var p = new CAAT.Path().beginPath(100, 153).
		// addCubicTo(xLimit, yLimit+20, 300, 400, xLimit, yLimit+10).
		// addCubicTo(10, 20, 50, 20, 10, 50);
	// var paa= new CAAT.Foundation.UI.PathActor().setBounds(0,0,800,500).setInteractive(true).setPath(p);
	// desktop.addChild(paa);
	//console.log(p.pathSegments[0].curve.coordlist[1]);
	
	desktop.addChild(btnValBg);
	desktop.addChild(aActorInc);
	desktop.addChild(aActorDec);
	desktop.addChild(aActorIncDec);
	desktop.addChild(aActorRing1);
	desktop.addChild(aActorReset);
	desktop.addChild(aActorPause);
	desktop.addChild(aActorGo);
	
	desktop.addChild(aActorCarM);
	desktop.addChild(aActorCarS);
	desktop.addChild(aActorCar);
	desktop.addChild(aActorArrow);
	// desktop.addChild(aActorCarTmp);
	// desktop.addChild(aActorMidPoint);
	desktop.addChild(aActorRing2);
	// desktop.addChild(aActorCarMid);
	desktop.addChild(speedLine);
	desktop.addChild(aActorRing);
	
	scene.addChild(desktop, 'desktop');

}