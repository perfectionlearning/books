// //=======================================================
// //	create desktop for user interaction
// //=======================================================
game.interaction = function(director, scene, banner){
	var desktop = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);
	
	var speedVal=5.0;//5.0;
	var redSpeedVal=7.57;
	
	var thresholdVelocity = 9.0; //circle half
	var thresholdVelocityHigh = 13.9; //stright
	
	var blueStartTime = 0;
	var blueCurrentTime = 0;
	var blueElapsedTimeInSec = 0;
	var blueTimerInstance = null;
	
	var redStartTime = 0;
	var redCurrentTime = 0;
	var redElapsedTimeInSec = 0;
	var redTimerInstance = null;
	
	var outSideBound = false;

	var resetAni= function(spriteImage, time) {
		spriteImage.playAnimation("resetAni");
	};
	
	var reS=0;
	var s=0;
	var sH=0;
	var sV=0;
	var a=0;
	var aH=0;
	var aV=0;
	var v;
	var vH=0;
	var vV=0;
	var vHOld=0;
	var vVOld=0;
	var oneMtInPx= 7.5;   //7.28

	var Br1=21.0;
	var Rr1=18.0;
	
	var BstartX=380;
	var BstartY=240;
	var RstartX=380;
	var RstartY=240;
	//362, 366
	var BCarStartX = BstartX-19.5;
	var BCarStartY = BstartY-9 + (Br1 * oneMtInPx);
	var RCarStartX = RstartX-19.5;
	var RCarStartY = RstartY-9 + (Rr1 * oneMtInPx);
	var theta=0;
	var angle=0;
	
	var presentAngle=0;
	var presentX;
	var presentY ;
	var ctrr = 0;
	var ctrr1=0;
	var _xx = 0, _yy = 0, _xx1 = 0, _yy1 = 0;
	
	//added by k.d
	var centripetalAcceleration = 0;
	var BtotalTime = 0;
	var bCarAngle = 0; 
	var rCarAngle = 0; 
	var data_dist_meters = 0;
	var tangentLength = null , tangentLengthY = null , data_dist_pixels=157;
	
	var RisFrstTime = false;
	var RpauseFlg = false;
	var BisFrstTime = false;
	var BpauseFlg = false;
	var isGameStart = false;
	var gameEnd = false;
	var linearPath = false;
	var actionFlg = false;
	var hVelocity=0;
	var vVelocity=0;
	var pauseTimeStamp=0;
	var blueCarOutOfTrack = false;
	
	var bannerStatus;
	
	function resetFn()
		{
		blueCarOutOfTrack = false;
		rCarAngle = 0;
		 hVelocity=0;
		 vVelocity=0;
		 pauseTimeStamp=0;
		 blueStartTime = 0;
		 blueCurrentTime = 0;
		 blueElapsedTimeInSec = 0;
		 blueTimerInstance = null;
		
		 redStartTime = 0;
		 redCurrentTime = 0;
		 redElapsedTimeInSec = 0;
		 redTimerInstance = null;
			reS=0;
		 s=0;
		 sH=0;
		 sV=0;
		 a=0;
		 aH=0;
		 aV=0;
		 v;
		 vH=0;
		 vV=0;
		 vHOld=0;
		 vVOld=0;
		
		 BstartX=380;
		 BstartY=240;
		 RstartX=380;
		 RstartY=240;

		 theta =0;
		 angle =0;
		 BCarStartX = BstartX-19.5;
		 BCarStartY = BstartY-9 + (Br1 * oneMtInPx);
		 RCarStartX = RstartX-19.5;
		 RCarStartY = RstartY-9 + (Rr1 * oneMtInPx);

		 //added by k.d
		 
		 BtotalTime = 0;
		 bCarAngle = 0; 
		 data_dist_meters = 0;
		 centripetalAcceleration = 0;
		 updateCentripetalAccDial();
		 setScaleBehaviour();
		 
		 presentAngle=0;
		 presentX;
		 presentY ;
		 ctrr = 0;
		 ctrr1=0;
		 _xx = 0, _yy = 0, _xx1 = 0, _yy1 = 0;
	}
	
	function getActor(drag, x, y, id, imgname, row, column){
		var aActor =  new CAAT.exemplarr().setBackgroundImage(
					new CAAT.Foundation.SpriteImage().
						initialize(director.getImage(imgname), row, column), true).
						setSpriteIndex(0).
						setDefaultPos(x, y).
						setId(id);
			return aActor;
	}		
	
	function setScaleBehaviour(){

		centripetalAcceleration = 0;
		updateCentripetalAccDial();
		
		aActorGaugeXRed.addBehavior(new CAAT.Behavior.ScaleBehavior().
								setValues(0, 0, 1, 1, 0, 0).
								setFrameTime(0, 0).
								setCycle( false ));
								
		aActorGaugeYRed.addBehavior(new CAAT.Behavior.ScaleBehavior().
								setValues(1, 1, 0, 0, 0, 0).
								setFrameTime(0, 0).
								setCycle( false ));
	}
	
	var journey=1;
	var Rjourney=1;
	
	//Redcar Activity
	var animateRedCar = function(cActor){
		if(!RisFrstTime){
			redElapsedTimeInSec=0;
			redStartTime = new Date().getTime();
		}
		if(RpauseFlg){
			var newTimeStamp = new Date().getTime();
			redStartTime = redStartTime + newTimeStamp - pauseTimeStamp;			
		}		
		redTimerInstance = scene.createTimer(
			0,
			Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {}, // timeout
			function (scene_time, timer_time, timertask_instance) {   // tick
						//	return;
				if(Rjourney==1){
					redCurrentTime = new Date().getTime();
					redElapsedTimeInSec = (redCurrentTime - redStartTime)/1000;
					
					s = redSpeedVal * redElapsedTimeInSec;
					rCarAngle = s/Rr1;
										
					sH = Rr1 * Math.sin(rCarAngle);
					sV = Rr1 * Math.cos(rCarAngle);
				
					aActorRed.x = RstartX-19.5 +  (sH * oneMtInPx);
					aActorRed.y = RstartY-9+ (sV * oneMtInPx);
					
					aActorRed.setRotation(-rCarAngle);
				
					 if(aActorRed.x+ (aActorRed.width/2) < 363 && aActorRed.y>310){
						redTimerInstance.cancel();
						blueTimerInstance.cancel();
						if(!outSideBound){
							bannerStatus = 'red';
							bannerDisp(bannerStatus);
							outSideBound=true;
						}
						gameEnd = true;
						setScaleBehaviour();	
						 Rjourney=2;
					  }
				}
			},
			function (scene_time, timer_time, timertask_instance) {
			} // cancel
	)};
	
	//Bluecar Activity
	var animateBlueCar = function(cActor){
		if(redTimerInstance) redTimerInstance.cancel();
		if(!BisFrstTime){
			blueElapsedTimeInSec=0;
			blueStartTime = new Date().getTime();
		}
		if(BpauseFlg){
			if(speedVal > thresholdVelocityHigh)
			{				
				presentAngle = -angle;
				presentX = aActorBlue.x;
				presentY = aActorBlue.y; 
				centripetalAcceleration = 0;
				updateCentripetalAccDial();
					if(presentAngle * (180/Math.PI) < -2) {
						blueTimerInstance.cancel();
						goAlongPath();
						return;
					}
			}
			else if(( speedVal > thresholdVelocity && speedVal < thresholdVelocityHigh)){
				if(blueCarOutOfTrack) {
					blueTimerInstance.cancel();
					goAlongPath();
					return;
				}
			}
			var newTimeStamp = new Date().getTime();
			blueStartTime = blueStartTime + newTimeStamp - pauseTimeStamp;			
		}		
		blueTimerInstance = scene.createTimer(0,Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {}, // timeout
			function (scene_time, timer_time, timertask_instance) {   // tick
			
			
				hVelocity = hv_velocity(data_dist_meters)[0];
				vVelocity = hv_velocity(data_dist_meters)[1];
				updateCentripetalAccDial();
				animateXYVelocity(hVelocity, vVelocity);
			
			
				if(journey==1){
					angle=0;
					blueCurrentTime = new Date().getTime();
					blueElapsedTimeInSec = (blueCurrentTime - blueStartTime)/1000;
					blueStartTime = blueCurrentTime;
					reS = reS + speedVal * blueElapsedTimeInSec;
					angle = reS/Br1;
					//s = speedVal * blueElapsedTimeInSec;
					//angle = s/Br1;
					sH = Br1 * Math.sin(angle);
					sV = Br1 * Math.cos(angle);
									
					var totalDistanceInMeters = Math.PI * Br1;
					var totalTimeInSeconds = totalDistanceInMeters / speedVal;
					BtotalTime = totalTimeInSeconds * 1000;
					
					//update centripetal acceleration dial
					bCarAngle = angle;
					data_dist_meters = Br1;
	
					aActorBlue.x = BstartX + (sH * oneMtInPx)-19.5;
					aActorBlue.y = BstartY + (sV * oneMtInPx)-9;
					
					aActorBlue.setRotation(-angle);
					
					if(speedVal > thresholdVelocity && speedVal < thresholdVelocityHigh ) 
					{
						presentAngle = -angle;
						presentX = aActorBlue.x;
						presentY = aActorBlue.y; 
						
						if(342 > presentX && presentY > 73){
							if(speedVal > thresholdVelocityHigh){
								blueTimerInstance.cancel();
								goAlongPath();
								return;
							}
						}else{
							if(presentAngle * (180/Math.PI) < -180) {
								blueTimerInstance.cancel();
								goAlongPath();
								return;
							}
						}
					}else if(speedVal > thresholdVelocityHigh )
					{
						presentAngle = -angle;
						presentX = aActorBlue.x;
						presentY = aActorBlue.y; 
						centripetalAcceleration = 0;
						updateCentripetalAccDial();
							if(presentAngle * (180/Math.PI) < -2) {
								blueTimerInstance.cancel();
								goAlongPath();
								return;
							}
					}
				
					if(aActorBlue.x + (aActorBlue.width/2) < 375 && aActorBlue.y > 325){
						redTimerInstance.cancel();
						blueTimerInstance.cancel();		
						setScaleBehaviour();
						if(!outSideBound){
							bannerStatus = 'blue';
							bannerDisp(bannerStatus);
							outSideBound=true;
						}
						gameEnd = true;
						journey=2;
					 }
				}
			},
			function (scene_time, timer_time, timertask_instance) {} // cancel
	)};
	
//Inc and Dec button Timer
var incDecTimer = null;
var makeTimerDelay = 0;
var IncDecArrow = function(action,btn){
	
	 function process(){
	
		if(!gameEnd){
			if(action=='+')
				{
					if(speedVal<=14.9)
					{
					   speedVal+=0.1
					   aLabelSp.setText(speedVal.toFixed(1));
					}
				}
			else if(action=='-')
				{
					if(speedVal>0.1)
					{
						speedVal-=0.1
						aLabelSp.setText(speedVal.toFixed(1));
					}
				} 
		}
	}
		btn.mouseUp = function(mouseEvent){
			if(incDecTimer != null){
				incDecTimer.cancel();}
		};
		
		btn.mouseExit = function(mouseEvent){
			if(incDecTimer != null){
				incDecTimer.cancel();
				CAAT.setCursor('default');
			}
		};
		
       btn.mouseDown = function(mouseEvent){
			if(incDecTimer != null){
				incDecTimer.cancel();
			}
			incDecTimer = scene.createTimer(0, Number.MAX_VALUE,
				function (scene_time, timer_time, timertask_instance) {   // timeout
				},
				function (scene_time, timer_time, timertask_instance) {
					makeTimerDelay++;
					
					if(makeTimerDelay%4==0)
					{
						process();
						makeTimerDelay=0;
					}
				},
				function (scene_time, timer_time, timertask_instance) {   // cancel
				}
		   );
		};

	};
	
	function bannerDisp(bannerStatus)
	{
				banner.visible = true;
				if(bannerStatus == 'blue' ){
						banner.childrenList[0].setSpriteIndex(1);
						banner.childrenList[1].setText("Congratulations!");
						banner.childrenList[2].setText("You won the race.");
						banner.childrenList[3].setText(" ");
				}else if(bannerStatus == 'red'){
						banner.childrenList[0].setSpriteIndex(2);
						banner.childrenList[1].setText("You need to try again.");
						banner.childrenList[2].setText("Press RESET to start over.");
						banner.childrenList[3].setText(" ");
				}else if(bannerStatus == 'fast'){
						banner.childrenList[0].setSpriteIndex(2);
						banner.childrenList[1].setText("You went too fast!");
						banner.childrenList[2].setText("Press RESET to start over.");
						banner.childrenList[3].setText(" ");
					}
				banner.childrenList[1].setLocation(((banner.width  -  banner.childrenList[1].width)/2)+10, 12);
				banner.childrenList[2].setLocation(((banner.width  -  banner.childrenList[2].width)/2)+10, 28);
				
			var pathBehaviour = new CAAT.PathBehavior().
								setValues(new CAAT.Path().
								setLinear(-3, 0, -3, -70).
								setInteractive(false)).
								setDelayTime(0, 300);
			banner.addBehavior(pathBehaviour);
	}
	
	/*Bottom of Speed Gauge_x and Gauge_y*/
	 var aActorSpeed = getActor(false, 50, 500, 'speed', 'speed', 1, 1);
	 var aActorGaugeX = getActor(false, 157, 500, 'gauge_x', 'gauge_x', 1, 1);
	
	 var aActorGaugeXRed = new CAAT.exemplarr().setFillStyle('red')
							.setLocation(201, 525)
							.setSize( 28, 29 );
	 var aActorGaugeYRed = new CAAT.exemplarr().setFillStyle('red')
							.setLocation(274, 550)
							.setSize( 28, 28 );
	 var aActorGaugeY = getActor(false, 243, 500, 'gauge_y', 'gauge_y', 1, 1);

	 var aActorBlue = getActor(false, BCarStartX, BCarStartY, 'bluerace', 'bluerace', 1, 1);
	 var aActorRed = getActor(false, RCarStartX, RCarStartY, 'redrace', 'redrace', 1, 1);
	 var aActorCar = getActor(false, 53, 585, 'blueicon', 'blueicon', 1, 1);
	
	var animationWran = getActor(false, 370, 37, 'warn1', 'warn', 10, 10).
						addAnimation('warning', [0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,92,92,92,92,92,93], 100, resetAni).
						addAnimation('resetAni', [94], 100);
						animationWran.playAnimation('warning');
								
	  aActorGaugeXRed.addBehavior(new CAAT.Behavior.ScaleBehavior().
                            setValues(0, 0, 1, 1, 0, 0).
							setFrameTime(0, 0).
                            setCycle( false ));
							
	 aActorGaugeYRed.addBehavior(new CAAT.Behavior.ScaleBehavior().
                            setValues(1, 1, 0, 0, 0, 0).
							setFrameTime(0, 0).
                            setCycle(false ));
 
	/*distance of car meter*/
	 var aActorCarR1 =  game.textActor(director, 'r = 21.0 m', 'bold 14px Arial', 'left', '#ffffff').setLocation(430, 220);
	 var aActorCarSp =  game.textActor(director, 'Blue car Speed', 'bold 14px Arial', 'left', '#ffffff').setLocation(398, 540);
	 var aActorCarSpd =  game.textActor(director, ' 0.00', 'bold 14px Arial', 'left', '#000000').setLocation(89, 565);
	 var aActorM =  game.textActor(director, 'm/s', 'bold 14px Arial', 'left', '#ffffff').setLocation(570, 538);
	 
	 //Gauge_x values
	var aActorGauge1 =  game.textActor(director, '10', 'bold 12px Arial', 'left', '#ffffff').setLocation(215, 558);
	var aActorGauge2 =  game.textActor(director, '0', 'bold 12px Arial', 'left', '#ffffff').setLocation(198, 558);
	var aActorGauge3 =  game.textActor(director, '-10', 'bold 12px Arial', 'left', '#ffffff').setLocation(167, 558);
	var aActorGauge4 =  game.textActor(director, '10', 'bold 12px Arial', 'left', '#ffffff').setLocation(253, 523);
	var aActorGauge5 =  game.textActor(director, '0', 'bold 12px Arial', 'left', '#ffffff').setLocation(258, 543);
	var aActorGauge6 =  game.textActor(director, '-10', 'bold 12px Arial', 'left', '#ffffff').setLocation(248, 565);
	var aLabelWeight =  game.textActor(director, '60', 'Bold 14px Arial', 'left', '#ffffff').setLocation(580, 512);
	var aLabelSp =  game.textActor(director, '5.0', 'Bold 14px Arial', 'left', '#ffffff').setLocation(534, 540);//Speed TextActor
	
	var boxvrline = new CAAT.exemplarr().setBounds(0, 0, 1, 25).setId('vrline');
		boxvrline.paint = function(director, time){
					var ctx = director.ctx;;
					ctx.beginPath();
					ctx.strokeStyle= 'black';
					ctx.moveTo(201, 555);
					ctx.lineTo(201, 525);
					ctx.lineWidth = 1;
					ctx.stroke();
		};
		
	var boxhrline = new CAAT.exemplarr().setBounds(0, 0, 31, 1).setId('hrline');
		boxhrline.paint = function(director, time){
					var ctx = director.ctx;;
					ctx.beginPath();
					ctx.strokeStyle= 'black';
					ctx.moveTo(273, 550);
					ctx.lineTo(302, 550);
					ctx.lineWidth = 1;
					ctx.stroke();
		};
		
	//centripetal acceleration
	var speedLine = new CAAT.exemplarr().setBounds(104, 562, 1, 25).setId('speedLine');		
	speedLine.paint = function(director, time){
			var ctx = director.ctx;;
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
		
	/*Go Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorGo = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 1, 0, 
						function(button){
						if(!gameEnd){
							if(!isGameStart){
								actionFlg = false;
								isGameStart = true;
								
								if(!outSideBound){
								   banner.visible=false;
								}
								
								animateBlueCar(aActorBlue);
								animateRedCar(aActorRed);
							}
						}
						}).setLocation(598, 506);
	
	/*Pause Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorPause = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 2, 2, 3, 2, 
						function(button){
						if(!isGameStart){		
								return;		
							}else{
								blueTimerInstance.cancel();
								redTimerInstance.cancel();
								BisFrstTime=true;
								BpauseFlg=true;
								RisFrstTime=true;
								RpauseFlg=true;
								actionFlg=true;
								isGameStart = false;
								linearPath = true;
								
								pauseTimeStamp = new Date().getTime();		
								aActorBlue.emptyBehaviorList();
							}
						}).setLocation(598, 556);
	//Pause Activity
	game.pauseActivity = function() {
			if(!isGameStart){		
					return;		
				}else{
					blueTimerInstance.cancel();
					redTimerInstance.cancel();
					BisFrstTime=true;
					BpauseFlg=true;
					RisFrstTime=true;
					RpauseFlg=true;
					actionFlg=true;
					isGameStart = false;
					linearPath = true;
					
					pauseTimeStamp = new Date().getTime();		
					aActorBlue.emptyBehaviorList();
				}
	}
	
	/*Reset Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorReset = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 4, 4, 5, 4, 
						function(button){
							animationWran.resetAnimationTime();
							animationWran.playAnimation('warning');
							
							if(blueTimerInstance)
								blueTimerInstance.cancel();
							if(redTimerInstance)
								redTimerInstance.cancel();
							isGameStart = false;
							BisFrstTime=false;
							outSideBound = false;
							BpauseFlg=false;
							RisFrstTime=false;
							RpauseFlg=false;
							gameEnd = false;
							linearPath = false;
							actionFlg = false;
							resetFn();
							aActorBlue.emptyBehaviorList();
							aActorBlue.reSetPosition();
							aActorRed.reSetPosition();
							aActorBlue.setRotation(0);
							aActorRed.setRotation(0);
							animationWran.visible=true;
							journey=1;
							Rjourney=1;
	
						aActorGaugeXRed.addBehavior(new CAAT.Behavior.ScaleBehavior().
                            setValues(0, 0, 1, 1, 0, 0).
							setFrameTime(0, 0).
                            setCycle( false ));
							
						aActorGaugeYRed.addBehavior(new CAAT.Behavior.ScaleBehavior().
                            setValues(1, 1, 0, 0, 0, 0).
							setFrameTime(0, 0).
                            setCycle( false ));
							
							banner.visible=true;
							banner.childrenList[0].setSpriteIndex(0);
							banner.childrenList[1].setText("Set the maximum speed of blue car so it goes ");
							banner.childrenList[2].setText("as fast as possible without spinning out. ");
							banner.childrenList[3].setText("Enter the value below and press GO. ");
							banner.childrenList[1].setLocation(((banner.width  -  banner.childrenList[1].width)/2)+10, 12);
							banner.childrenList[2].setLocation(((banner.width  -  banner.childrenList[2].width)/2)+10, 28);
							banner.childrenList[3].setLocation(((banner.width  -  banner.childrenList[3].width)/2)+10, 44);
							
						var pathBehaviour = new CAAT.PathBehavior().
							setValues(new CAAT.Path().
							setLinear(-3, 0, -3, -70).
							setInteractive(false)).
							setDelayTime(0, 300);
						banner.addBehavior(pathBehaviour);
								
						}).setLocation(598, 531);
						
	/*Speed Increment*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('incre_decre_btn'), 2, 1)
	var btnSpeedInc = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 0, 0, 
						function(button){
									
						}).setLocation(507, 538);
	/*Speed Decrement*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('incre_decre_btn'), 2, 1)
	var btnSpeedDec = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 1, 1, 1, 1, 
						function(button){
							
						}).setLocation(507, 547).setSpriteIndex(1);
	
	IncDecArrow("-",btnSpeedDec);
	IncDecArrow("+",btnSpeedInc);
	
	desktop.addChild(aActorReset);
	desktop.addChild(aActorPause);
	desktop.addChild(aActorGo);
	desktop.addChild(btnSpeedInc);
	desktop.addChild(btnSpeedDec);
	desktop.addChild(aActorCarR1);
	desktop.addChild(aActorGaugeX);
	desktop.addChild(aActorGaugeY);
	desktop.addChild(aActorSpeed);
	desktop.addChild(aActorGauge1);
	desktop.addChild(aActorGauge2);
	desktop.addChild(aActorGauge3);
	desktop.addChild(aActorGauge4);
	desktop.addChild(aActorGauge5);
	desktop.addChild(aActorGauge6);
	desktop.addChild(aActorM);
	desktop.addChild(aActorBlue);
	desktop.addChild(aActorRed);
	desktop.addChild(aActorCarSp);
	desktop.addChild(aActorCar);
	desktop.addChild(aLabelSp);
	desktop.addChild(aActorCarSpd);
	desktop.addChild(speedLine);
	desktop.addChild(aActorGaugeXRed);
	desktop.addChild(aActorGaugeYRed);
	desktop.addChild(boxvrline);
	desktop.addChild(boxhrline);
	desktop.addChild(animationWran);	
	scene.addChild(desktop, 'desktop');
	
	if(aLabelSp)	aLabelSp.setText(speedVal.toFixed(1));
	
	//=======================================================
	// update centripetal acceleration dial pointer
	//=======================================================
	function updateCentripetalAccDial() {
		var startAngle = 0;
		var endAngle = centripetalAcceleration * ( 360 / 60 );
		var rotateAroundMidPointDial = new CAAT.RotateBehavior()
			.setFrameTime(0, 0)
			.setValues( startAngle * ( Math.PI / 180 ), endAngle * ( Math.PI / 180 ) )
			.setCycle(false)
			.setAnchor( speedLine, 0, 0);
		speedLine.addBehavior(rotateAroundMidPointDial);
	
		if(centripetalAcceleration == 0) {
			aActorCarSpd.setText(' '+(parseFloat(centripetalAcceleration)).toFixed(2));
		} else {
			aActorCarSpd.setText((parseFloat(centripetalAcceleration)).toFixed(2));	
		}
	}
	
	//=======================================================
	// find horizontal and vertical velocity
	//=======================================================
	function hv_velocity( data_dist_meters) {
		if(data_dist_meters == 0) {
			centripetalAcceleration = '0.0';
		} else {
			centripetalAcceleration = Math.pow( speedVal, 2 ) / ( data_dist_meters );
			
		}
		hVelocity = speedVal * Math.cos( bCarAngle );
		vVelocity = speedVal * Math.sin( bCarAngle );
		return [hVelocity, vVelocity];
	}
	
	//=======================================================
	// Animate horizontal and vertical velocity
	//=======================================================
	function animateXYVelocity(hVelocity, vVelocity) {
		//animate x-velocity
		var _x_velo_val = hVelocity / 12.5;	
		var _x_velo_behaviour = new CAAT.ScaleBehavior().
				setFrameTime( 0, 0 ).
				setValues( 0, _x_velo_val, 1, 1, 0, 0);
		aActorGaugeXRed.addBehavior(_x_velo_behaviour);
		//animate y-velocity
		var _y_velo_val = vVelocity / 12.5;	
		var _y_velo_behaviour = new CAAT.ScaleBehavior().
				setFrameTime( 0, 0 ).
				setValues( 1, 1, 0,-_y_velo_val, 0, 0);
		aActorGaugeYRed.addBehavior(_y_velo_behaviour);	
	}
	
	//=======================================================
	// get present angle at which the car is making rotation
	//=======================================================
	function _getPresentAngle() {
		var d1 = new Date();
		var _timeStampEnd = d1.getTime();
		
		var elapsedTime = _timeStampEnd - blueStartTime;
		if( BtotalTime != 0 ){
			if(journey == 1) {
				var currAngRad = 0;
				var _currAng_1 = 0;
			} 
		}else{
			var currAngRad = 0;
			var _currAng_1 = 0;
		}
		return [_currAng_1, currAngRad];
	}
	
	function goAlongPath()
	{
	
		blueCarOutOfTrack = true;
		blueTimerInstance.cancel();
		centripetalAcceleration = 0;
		updateCentripetalAccDial(); 
		
		if(!outSideBound){
			bannerStatus= 'fast'
			bannerDisp(bannerStatus);
			outSideBound = true;
		}
		sH = speedVal * Math.sin(angle) * blueElapsedTimeInSec;
		sV = speedVal * Math.cos(angle) * blueElapsedTimeInSec;
		
		var currX = presentX + (sH);
		var currY = presentY + (sV);

		tangentLength = 380 , tangentLengthY = 240 ,  data_dist_pixels = 157.5;
		if(speedVal > thresholdVelocityHigh ){
			drawTangent(data_dist_pixels, 90-(angle * (180/Math.PI)), { x:tangentLength, y:tangentLengthY}, aActorBlue, presentX, presentY);
		}else{
			drawTangent(data_dist_pixels, 90-(angle * (180/Math.PI)), { x:tangentLength, y:tangentLengthY}, aActorBlue, presentX, presentY);
		}
		aActorBlue.addBehavior(tangentAsPath);
	}

	//=======================================================
	// Make tangent path for the car at all points of rotation
	//=======================================================
	function makeTangent(cx,cy,r,a){
		ang=(Math.PI/180)*a;
		var x1 = cx + (r * Math.cos(ang));
		var y1 = cy + (r * Math.sin(ang));	
		rXY=rotate(cx, cy, cx + r, cy - 450, a, false);
		return [x1,y1,rXY[0],rXY[1]];
	}
	
	//=======================================================
	// Make tangent path for temp point at all points of rotation of car
	//=======================================================
	function makeTangent1(cx,cy,r,a){
		var ang1=(Math.PI/180)*a;
		var x1 = cx + (r * Math.cos(ang1));
		var y1 = cy + (r * Math.sin(ang1));	
		rXY=rotate(cx,cy,cx + r,cy-80,a,false);
		return [x1,y1,rXY[0],rXY[1]];
	}
	
	//=======================================================
	// Get tangent points at all rotation points
	//=======================================================
	function rotate(ox,oy,px,py,theta,cw){
		if(cw){theta*=-1;}
		theta=(Math.PI/180)*theta;
		rx = ox + (Math.cos(theta) * (px-ox)) - (Math.sin(theta) * (py-oy));
		ry = oy + (Math.sin(theta) * (px-ox)) + (Math.cos(theta) * (py-oy));
		return [rx,ry];
	}
	
	
	//=======================================================
	// Keep updating the tangent path for later use to add to car
	//=======================================================
	function drawTangent(pos, newAngle, refPoint, img, curX, curY) {
		var tangent_coor = makeTangent(refPoint.x, refPoint.y, pos, newAngle + 0);

		_xx  = tangent_coor[0];
		_yy  = tangent_coor[1];
		_xx1 = tangent_coor[2];
		_yy1 = tangent_coor[3];
				
		var x_diff = _xx1 - _xx;
		var y_diff = _yy1 - _yy;
		
		var tangentPathArrowTime;
		
		var X1, Y1, X2, Y2;
		var X1_arr, Y1_arr, X2_arr, Y2_arr;
		
		//X2 = tangentLength + x_diff -(39 / 2);
		X2 = _xx1-(39 / 2);
		//Y2 = tangentLengthY + data_dist_pixels + y_diff - (18 / 2);
		Y2 = _yy1;
		
		if(linearPath){
			//if pause and played in the linear path
			X1 = aActorBlue.x;
			Y1 = aActorBlue.y;
			tangentPathArrowTime = getRequiredTime(X1, Y1, X2, Y2);

		}else{

			X1= curX;
			Y1= curY;
			X1_arr=tangentLength + 30;
			Y1_arr=(tangentLengthY);
			//get the time at which the arrow has to traverse the path
			tangentPathArrowTime = getRequiredTime(tangentLength + 30, (tangentLengthY + data_dist_pixels), tangentLength + x_diff + 30, tangentLengthY + data_dist_pixels + y_diff);
		}
	
		//tangent path for car		
		tangentAsPath = new CAAT.PathBehavior().
						setValues( new CAAT.Path().setColor("#000").setLinear(
							X1, Y1, X2, Y2
						).setInteractive(false) ).
						setAutoRotate( true ).
						setDelayTime( 0, tangentPathArrowTime * 1000 );
	}
	
	//=======================================================
	// get hypotenuse dist between two coordinates
	//=======================================================	
	function getHypotenuseDist(x1, y1, x2, y2) {
		var hyp_dist = 0;
		hyp_dist =  Math.sqrt(Math.pow((x1 - x2),2) + Math.pow((y1 - y2),2));
		var dist_in_meters = hyp_dist * ( data_dist_meters / data_dist_pixels );
		return dist_in_meters;
	}
	
	//================================================================
	// get required time to cover the distance between two coordinates
	//================================================================	
	function getRequiredTime(a, b, c, d) {
		var d_in_meters = getHypotenuseDist(a, b, c, d);
		var _time = d_in_meters / parseFloat(speedVal);
		return _time;
	}
 }