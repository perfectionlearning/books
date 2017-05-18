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
	//var gamePaused = false;
	var gameReset = true;
	var pausedTime = 0;
	var startTime = 0;
	var currentTime = 0;
	var elapsedTimeInSec = 0;
	var timerInstance = null;
	var totalPauseTime = 0;
	//// PW ////
	var theta = 55.54;
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
	
	var xLimit = 225;
	var yLimit = xLimit * Math.tan((Math.PI/180) * theta)+20;
	
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
	
	//var isDrag = false;
	game.isDrag = false;
	var xxLimit = xLimit + 30;
	var yyLimit = yLimit;
	var x3Limit = 0;
	var y3Limit = 0;
	var prevsv = 0;
	
	var reverse = new Array();
	var revInx = 0;
	
	var check = function(cActor, mouseEvent){
		cActor.x = aActorCar.x;
		cActor.y = aActorCar.y;
		cActor.setRotationAnchored(aActorCar.rotationAngle, aActorCar.rotationX, aActorCar.rotationY);

		game.isDrag = (carMeter > 0.4 ? true: false);
		
		if(!game.isDrag)
			return;
		
		// if(!gameReset)
			// return;
		
		// gameReset = false;
		
		if(!game.gamePaused){
			carStartX = aActorCar.x;
			carStartY = aActorCar.y;
			startTime = new Date().getTime();
			displaybanner(1);
			//game.gamePaused = true;
		}else{
			var newTimeStamp = new Date().getTime();
			totalPauseTime = totalPauseTime + newTimeStamp - pausedTime;
			game.gamePaused = false;
		}
		
		
		var movX = carStartX;
		var movY = carStartY;
		var meter = 0;

		
		
		timerInstance = scene.createTimer(
			0,
			Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {}, // timeout
			function (scene_time, timer_time, timertask_instance) {   // tick
				currentTime = new Date().getTime();
				elapsedTimeInSec = (currentTime - (startTime + totalPauseTime))/1000;
				//console.log(elapsedTimeInSec);
				if(journey == 1){
					dh = 0.5 * aHorz * Math.pow(elapsedTimeInSec, 2);
					dv = 0.5 * aVert * Math.pow(elapsedTimeInSec, 2);
					v = Math.sqrt(Math.pow(aVert,2)+Math.pow(aHorz,2)) * elapsedTimeInSec;
					
					movX = carStartX + (dh * oneMtInPx);
					movY = carStartY + (dv * oneMtInPx);
					
					sh = (xxLimit - movX);
					sv = (movY - yLimit);
					meter = sv/oneMtInPx+1.3;
					
					meter = (meter < -14 ? -14 : meter);
					
					if(meter >=-1.0 && meter <= 0){
					
						if(meter <-0.6){
							aActorCar.setRotation(-0.4*meter);
							movY += Math.abs(meter) * 10;
						}else{
							movY = yLimit - aActorCar.height;
							aActorCar.setRotation(0);
							meter = 0.0;
						}
						aActorCar.x = movX;
						aActorCar.y = movY;
						reverse.push({x: aActorCar.x, y:aActorCar.y, r:-0.4*meter, m:meter, v:v});
						revInx++;
					}else if(meter <-1.0 && meter >=-14.0){
						aActorCar.x = movX;
						aActorCar.y = movY;
						aActorCar.setRotation((Math.PI/180) * theta);
					}else{
						if(movX < xxLimit){
							aActorCar.x = movX+10;
							aActorCar.setRotation(-0.6*meter);
							reverse.push({x: aActorCar.x, y:aActorCar.y, r:-0.6*meter, m:meter, v:v});
							revInx++;
						}else{
							
							if(carMeter > 1.4){
								
								x3Limit = aActorCar.x;
								y3Limit = aActorCar.y;
								
								var vMin = Math.round(v * Math.pow(10,2))/Math.pow(10,2);
								//console.log([vMin, v, v + 1.0]);
								if((vMin <= 14 && vMin >13.7) && (carMeter >= 7.9  && carMeter <= 8.1)){
								
									vh = v * Math.cos((Math.PI/180) * 64);
									vv = v * Math.sin((Math.PI/180) * 49);
									journey = 2;
									startTime = new Date().getTime();
									totalPauseTime = 0;
								}else{
									vh = v * Math.cos((Math.PI/180) * 64);
									vv = v * Math.sin((Math.PI/180) * 49);
									journey = 3;
									startTime = new Date().getTime();
									totalPauseTime = 0;
								}
							}else if(carMeter < 1.5){
								revInx--;
								if(aActorCar.x > xLimit){
									aActorCar.x = reverse[revInx].x;
									aActorCar.y = reverse[revInx].y-2;
									aActorCar.setRotation(reverse[revInx].r);
									meter = reverse[revInx].m;
									v = reverse[revInx].v;
								}else if(reverse.length > revInx){
									v = 0;
									meter = 0;
									movR = 0;
								}else{
									v = 0;
									meter = 0;
									movR = 0;
								}
							}
						}
					}
					aActorCarM.setText(Math.abs(meter).toFixed(1) + ' m');
					aActorCarS.setText(v.toFixed(1));
					
					centripetalAcceleration = v;
					updateSpeedMeter();
					
					if(meter == 0 && v == 0 && movR == 0){
						displaybanner(2);
						aActorCarTmp.setDefaultPos(0, 0);
						
						// game.isDrag = false;
						timerInstance.cancel();
						return;
					}
				 }else if(journey == 2){
					
					sv = (vv * elapsedTimeInSec) + (0.5 * -g * Math.pow(elapsedTimeInSec, 2));
					sh = vh * elapsedTimeInSec;
					
					var vv1 = vv + (-g * elapsedTimeInSec);
					v = Math.sqrt(Math.pow(vv1,2)+Math.pow(vh,2));
					
					movX = x3Limit + (sh * oneMtInPx);
					movY = y3Limit - (sv * oneMtInPx);
					movR = (-1 * (Math.atan(vv1/vh))) * 180/Math.PI;
					meter = Math.sqrt(Math.pow(sh * oneMtInPx,2) + Math.pow(sv * oneMtInPx, 2));
					meter = (meter - 63)/oneMtInPx;
					
					if(sv < 0){
						aActorCar.setRotation((Math.PI/180) * 40);
						movR = aActorCar.setRotation(-0.6*sv) * 180/Math.PI;
						movY = yLimit-5;
						meter = -1.2;
						v = 13.4;
						if(sv < -13.5){
							meter = 0;
							v = 0;
							movR = 0;
						}
					}
					
					aActorCar.setRotation((Math.PI/180) * movR)	;
					aActorCar.x = movX;
					aActorCar.y = movY;
					
					centripetalAcceleration = v-1;
					updateSpeedMeter();
					
					aActorCarM.setText(Math.abs(meter).toFixed(1) + ' m');
					aActorCarS.setText(v.toFixed(1));
					
					if(meter == 0 && v == 0 && movR == 0){
						
						displaybanner(4);
						timerInstance.cancel();
						return;
					}
				}else if(journey == 3){
					
					sv = (vv * elapsedTimeInSec) + (0.5 * -g * Math.pow(elapsedTimeInSec, 2));
					sh = vh * elapsedTimeInSec;
					
					var vv1 = vv + (-g * elapsedTimeInSec);
					v = Math.sqrt(Math.pow(vv1,2)+Math.pow(vh,2));
					
					movX = x3Limit + (sh * oneMtInPx);
					movY = y3Limit - (sv * oneMtInPx);
					movR = (-1 * (Math.atan(vv1/vh))) * 180/Math.PI;
					meter = Math.sqrt(Math.pow(sh * oneMtInPx,2) + Math.pow(sv * oneMtInPx, 2));
					meter = (meter - 63)/oneMtInPx;

					if(movX > 365){
						movX = 365;
						movR = 270;
						aActorRing.visible = true;
						if(sv < prevsv){
							//c.visible = false;
							movR = 90;
						}else{
							//console.log(v);
							aActorRing.playAnimation('ringAnimat');
						}
						
						if(sv < 0){
							movX = 360;
							movY = yLimit-5;
							movR = 0;
							meter = 0;
							v = 0;
						}
					}
					prevsv = sv;
					aActorCar.setRotation((Math.PI/180) * movR)	;
					aActorCar.x = movX;
					aActorCar.y = movY;

					centripetalAcceleration = v-1;
					updateSpeedMeter();
					
					aActorCarM.setText(Math.abs(meter).toFixed(1) + ' m');
					aActorCarS.setText(v.toFixed(1));
					
					if(meter == 0 && v == 0 && movR == 0){
						if(carMeter > 7.9){
							displaybanner(3);
						}else{
							displaybanner(2);
						}
						timerInstance.cancel();
						return;
					}
				}
			},
			function (scene_time, timer_time, timertask_instance) {
				// cActor.x = aActorCar.x;
				// cActor.y = aActorCar.y;
				// cActor.setRotationAnchored(aActorCar.rotationAngle, aActorCar.rotationX, aActorCar.rotationY);
			} // cancel
			)
			
	};
	
	var snap = function(cActor, mouseEvent, x, y){
		
		cActor.x +=x;
		cActor.y +=y;
		
		var adjust = aActorCar.height+20;
		var xxLimit = xLimit + 30;
		var cX = mouseEvent.screenPoint.x;
		var cY = mouseEvent.screenPoint.y;
		var movX = 0;
		var movY = 0;
		var movR = 0;
		
		reverse = new Array();
		revInx = 0;
		
		//if(!gameReset)
//			return;

		if(!game.gamePaused && gameReset){
			game.isDrag = true;
			if(cX < xLimit || (cX > xLimit && cX < xxLimit)){
				movX = cX-(aActorCar.width/2);
				movY = (cX * Math.tan((Math.PI/180) * theta))-adjust;
				movR = (Math.PI/180) * theta;
				
				sh = (xxLimit - movX);
				sv = (movY - yLimit);
				//console.log([sv, (sv/oneMtInPx), yLimit]);
				sv=(sv/oneMtInPx)+1.3;
				

				sv  = Math.round(sv * Math.pow(10,1))/Math.pow(10,1);
				carMeter = Math.abs(sv);

				if(sv >=-1.0 && sv <= 0){
					
					if(sv <-0.6){
						aActorCar.setRotation(-0.4*sv);
						movY += Math.abs(sv) * 10;
					}else{
						movY = yLimit - aActorCar.height;
						aActorCar.setRotation(0);
						carMeter = 0.0;
					}
					
					aActorCar.x = movX;
					aActorCar.y = movY;
					aActorCarM.setText(carMeter.toFixed(1) + ' m');
				}else if(sv <-1.0 && sv >=-14.0){
					aActorCar.setRotationAnchored(movR, 0.1, 0.5);
					aActorCar.x = movX;
					aActorCar.y = movY;
					aActorCarM.setText(carMeter.toFixed(1) + ' m');
				}else{
					game.isDrag = false;
					return 0;
				}
				carStartX = movX;
				carStartY = movY;
				
			}else{
				game.isDrag = false;
				return 0;
			}
		}
	};

	var aActorMidPoint = new CAAT.exemplarr().setBounds(xLimit, yLimit, 1, 1).setId('holder2').setFillStyle('#0000ff');
	
	var aActorCarMid = new CAAT.exemplarr().setBounds(263.7128535665305, 319.867154661254, 2, 2).setId('point').setFillStyle('#000000');
	
	/*car*/
	var aActorCar = getActor(false, 220, 318, 'car', 'car', 1, 1);
	// aActorCar.userDrag(snap, check);
	//var RR = (Math.PI/180 * -30);
	//aActorCar.setRotationAnchored(RR, 0.1, 0.5);
	//aActorCar.setRotation(RR);
	var aActorCarTmp = new CAAT.exemplarr().setBounds(220, 318, aActorCar.width, aActorCar.height).setId('holder1');
	aActorCarTmp.userDrag(snap, check);
	aActorCarTmp.setDefaultPos(220, 318);
	// aActorCar.setAlpha(0.2);


	var reset= function(spriteImage, time) {
		spriteImage.playAnimation("reset");
		aActorRing.visible = false;
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
	var aActorCarM =  game.textActor(director, '0.0 m', '14px Arial', 'left', '#ffffff');
	aActorCarM.setLocation(60, 238);

	/*speed of car meter*/
	var aActorCarS =  game.textActor(director, '0.0', 'Bold 14px Arial', 'left', '#000000');
	aActorCarS.setLocation(501, 555);
	
	var aActorBottom = getActor(false, 45, 580, 'bottom', 'bottom', 1, 1);
	
	/*Pause Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorPause = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 2, 2, 3, 2, 
						function(button){
							game.pauseBtnMDownHandler();
						}).setLocation(595, 550);
	
	//pause function
	game.pauseBtnMDownHandler = function(){
		if(!game.gamePaused && game.isDrag){
			timerInstance.cancel();
			pausedTime = new Date().getTime();
			gameReset  = true;
			game.gamePaused = true;
		}else if(game.gamePaused && !game.isDrag){
			check(aActorCar, null);
		}else{
			if(game.isDrag){
				check(aActorCar, null);
			}
		}
	}
	
	/*Reset Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorReset = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 4, 4, 5, 4, 
						function(button){
							
							displaybanner(0);
							if(timerInstance){
								timerInstance.cancel();
							}
							
							aActorCarTmp.resetTransform();							
							aActorCarTmp.reSetPosition();
							aActorCar.resetTransform();
							aActorCar.reSetPosition();
							aActorCarTmp.setDefaultPos(220, 318);
							
							aActorCarM.setText("0.0 m");
							aActorCarS.setText("0.0");
							
							centripetalAcceleration = 0;
							updateSpeedMeter();
							
							journey = 1;
							game.gamePaused = false;
							game.isDrag = false;
							gameReset = true;
							carMeter = 0;
							reverse = new Array();
							revInx = 0;
							// x3Limit = 0;
							// y3Limit = 0;
							// prevsv = 0;
							totalPauseTime = 0;
						}).setLocation(595, 525);

						
	//centripetal acceleration
	var speedLine = new CAAT.exemplarr().setBounds(510, 554, 1, 25).setId('speedLine');		
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
		centripetalAcceleration  = (centripetalAcceleration == -1 ? 0 : centripetalAcceleration);
		var startAngle = 0;
		var endAngle = centripetalAcceleration * ( 360 / 60 );
		//console.log([centripetalAcceleration, endAngle]);
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
			setLinear(50, 70, 50, 8).
			setInteractive(false)).
			setDelayTime(0, 300);
	
		if(dispid == 0){	
			bannerbg.setSpriteIndex(2);
			text1.setText("To make the jump, drag the car up the frictionless hill so");
			text2.setText("that its speed at bottom is 12.5 m/s.");
			text3.setText("Release the car to start it.");
			pathBehaviour.setValues(new CAAT.Path().setLinear(50, 70, 50, 8));
			bannerbg.setSpriteIndex(2);
		}else if(dispid == 1){
			text1.setText("To make the jump, drag the car up the frictionless hill so");
			text2.setText("that its speed at bottom is 12.5 m/s.");
			text3.setText("Release the car to start it.");
			pathBehaviour.setValues(new CAAT.Path().setLinear(50, 8, 50, 100));
		}else if(dispid == 2){
			bannerbg.setSpriteIndex(0);
			text1.setText("Your speed is too low.");
			text2.setText("Press RESET to try again.");
			text3.setText("");
			pathBehaviour.setValues(new CAAT.Path().setLinear(50, 70, 50, 8));
		}else if(dispid == 3){
			bannerbg.setSpriteIndex(0);
			text1.setText("Your speed is too high.");
			text2.setText("Press RESET to try again.");
			text3.setText("");
			pathBehaviour.setValues(new CAAT.Path().setLinear(50, 70, 50, 8));
		}else if(dispid == 4){
			bannerbg.setSpriteIndex(1);
			text1.setText("You did it! You picked the");
			text2.setText("correct height.");
			text3.setText("");
			pathBehaviour.setValues(new CAAT.Path().setLinear(50, 70, 50, 8));
		}
		
		text1.setLocation(((banner.width - text1.width)/2)+6, 12);
		text2.setLocation(((banner.width - text2.width)/2)+6, 28);
		text3.setLocation(((banner.width - text3.width)/2)+6, 44);
		banner.addBehavior(pathBehaviour);
	}	
	
	desktop.addChild(aActorRing1);
	desktop.addChild(aActorReset);
	desktop.addChild(aActorPause);
	desktop.addChild(aActorCarM);
	desktop.addChild(aActorCarS);
	desktop.addChild(aActorCar);
	desktop.addChild(aActorCarTmp);
	//desktop.addChild(aActorMidPoint);
	desktop.addChild(aActorRing2);
	//desktop.addChild(aActorCarMid);
	desktop.addChild(speedLine);
	desktop.addChild(aActorRing);
	desktop.addChild(aActorBottom);
	scene.addChild(desktop, 'desktop');

}