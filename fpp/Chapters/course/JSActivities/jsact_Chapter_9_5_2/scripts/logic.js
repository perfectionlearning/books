//=======================================================
//create desktop for user interaction
//=======================================================
game.interaction = function(director, scene, banner){
	var desktop = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);
	var speedVal=5.0;
	var redSpeedVal=8.92;
	var temp_SpeedVal=null; 	
	
	var thresholdVelocity=9.1;  //4 journey
	var thresholdVelocityHigh=11.7; // 2 journey
		
	var blueStartTime = 0;
	var blueCurrentTime = 0;
	var blueElapsedTimeInSec = 0;
	var blueTimerInstance = null;
	
	var redStartTime = 0;
	var redCurrentTime = 0;
	var redElapsedTimeInSec = 0;
	var gameEnd = false;
	var redTimerInstance = null;
	
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
	var oneMtInPx=10;
	var BstartX=424;
	var BstartY=26;
	var RstartX=424;
	var RstartY=5;

	var Br1=14;
	var Br2=8.5;
	var Rr1=16.2;
	var Rr2=6.3;
	var theta=0;
	var angle=0;
	
	//added by k.d
	var centripetalAcceleration = 0;
	var BtotalTime = 0;
	var bCarAngle = 0; 
	var data_dist_meters = 0;
	
	var RisFrstTime = false;
	var RpauseFlg = false;
	var BisFrstTime = false;
	var BpauseFlg = false;
	var isGameStart = false;
	var linearPath = false;
	
	var persentAngle=0;
	var presentX;
	var presentY ;
	var ctrr = 0;
	var _xx = 0, _yy = 0, _xx1 = 0, _yy1 = 0;
	var hVelocity = null, pauseTimeStamp = null, tangentAsPath = null, tangentAsPath_arrow = null, tangentAsPath_tempPoint = null, vVelocity = null;


	function resetFn() {
		blueStartTime = 0;
		blueCurrentTime = 0;
		blueTimerInstance = null;
		blueElapsedTimeInSec = 0;
		
		redStartTime = 0;
		redCurrentTime = 0;
		redElapsedTimeInSec = 0;
		redTimerInstance = null;
		
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
		
		BstartX=424;
		BstartY=26;
		RstartX=424;
		RstartY=5;
		
		theta =0;
		angle =0;
			 
		BtotalTime = 0;
		bCarAngle = 0; 
		data_dist_meters = 0;
		centripetalAcceleration = 0;
		updateCentripetalAccDial(); 
		setScaleBehaviour();
	}
	
	function setScaleBehaviour(){

	aActorGaugeXRed.addBehavior(new CAAT.Behavior.ScaleBehavior().
                            setValues(0, 0, 1, 1, 0, 0).
							setFrameTime(0, 0).
                            setCycle( false ));
							
	aActorGaugeYRed.addBehavior(new CAAT.Behavior.ScaleBehavior().
                            setValues(1, 1, 0, 0, 0, 0).
							setFrameTime(0, 0).
                            setCycle( false ));
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
	
	var journey=1;
	var Rjourney=1;
	temp_SpeedVal=speedVal;
	
	//Red car Activity
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
		
			if(Rjourney==1){
					redCurrentTime = new Date().getTime();
					redElapsedTimeInSec = (redCurrentTime - redStartTime)/1000;
					sH = (redSpeedVal * redElapsedTimeInSec);
					aActorRed.x = RstartX + (sH * oneMtInPx);
					if(aActorRed.x + (aActorRed.width/2) > 500){
							Rjourney=2;
							redStartTime = new Date().getTime();
					}
				}
				
				if(Rjourney==2){
					redCurrentTime = new Date().getTime();
					redElapsedTimeInSec = (redCurrentTime - redStartTime)/1000;
					
					s = redSpeedVal * redElapsedTimeInSec;
					angle = s/Rr1;
					
					sH = Rr1 * Math.sin(angle);
					sV = Rr1 * Math.cos(angle);
					aActorRed.x = 479 + (sH * oneMtInPx);
					aActorRed.y = 166.5  - (sV * oneMtInPx);
					aActorRed.setRotation(angle);	
					
				
					if(aActorRed.x < 490 && aActorRed.y > 252){
						Rjourney=3;
						RstartX=aActorRed.x;
						redStartTime = new Date().getTime();
						
					}
				}
				if(Rjourney==3){
					redCurrentTime = new Date().getTime();
					redElapsedTimeInSec = (redCurrentTime - redStartTime)/1000;
					sH = (redSpeedVal * redElapsedTimeInSec);
					aActorRed.x = RstartX - (sH * oneMtInPx);
	
					if(aActorRed.x +(aActorRed.width/2)< 197){
							Rjourney=4;
							redStartTime = new Date().getTime();
					}
				}

				if(Rjourney==4){
					redCurrentTime = new Date().getTime();
					redElapsedTimeInSec = (redCurrentTime - redStartTime)/1000;
					
					s = redSpeedVal * redElapsedTimeInSec;
					angle = s/Rr2;
					
					sH = Rr2 * Math.sin(angle);
					sV = Rr2 * Math.cos(angle);
					
					aActorRed.x = 179 - (sH * oneMtInPx);
					aActorRed.y = 392 - (sV * oneMtInPx);
				
					aActorRed.setRotation(Math.PI-angle);
					
					 if(aActorRed.x+ (aActorRed.width/2) > 203){
						 Rjourney=5;
						 RstartX=aActorRed.x;
						 redStartTime = new Date().getTime();
					 }
				}

				if(Rjourney==5){
					redCurrentTime = new Date().getTime();
					redElapsedTimeInSec = (redCurrentTime - redStartTime)/1000;
					sH = (redSpeedVal * redElapsedTimeInSec);
					aActorRed.setRotation(0);
					aActorRed.x = RstartX + (sH * oneMtInPx);
					if(aActorRed.x + (aActorRed.width/2) > 305){
						redTimerInstance.cancel();
						blueTimerInstance.cancel();
						bannerDisp();
						gameEnd = true;
						setScaleBehaviour();		
						Rjourney=6;
					}
				}
			},
				
			function (scene_time, timer_time, timertask_instance) {
				
			} // cancel
	)};	
	
	//Blue car Activity
	var animateBuleCar = function(cActor){
		
		if(!BisFrstTime){
			blueElapsedTimeInSec=0;
			blueStartTime = new Date().getTime();
		}
		if(BpauseFlg){
			if((journey==2 && speedVal > thresholdVelocityHigh) || (journey == 4 && speedVal > thresholdVelocity && speedVal < thresholdVelocityHigh))
			{
				angle = persentAngle;
				goAlongPath();
				return false;
			}
		
			var newTimeStamp = new Date().getTime();
			blueStartTime = blueStartTime + newTimeStamp - pauseTimeStamp;			
		}		
	
		blueTimerInstance = scene.createTimer(
			0,
			Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {}, // timeout
			function (scene_time, timer_time, timertask_instance) {   // tick
				
				if(journey==1){
					blueCurrentTime = new Date().getTime();
					blueElapsedTimeInSec = (blueCurrentTime - blueStartTime)/1000;
					sH = (speedVal * blueElapsedTimeInSec);
					aActorBlue.x = BstartX + (sH * oneMtInPx);
					
					var totalDistanceInMeters = 500 - BstartX;
					var totalTimeInSeconds = totalDistanceInMeters / speedVal;
					BtotalTime = totalTimeInSeconds * 1000;
					data_dist_meters = 0;
					bCarAngle = 0;
					
					if(aActorBlue.x + (aActorBlue.width/2) > 500){
							journey=2;
							blueStartTime = new Date().getTime();
					}
					
				}				
				if(journey==2){
					blueCurrentTime = new Date().getTime();
					blueElapsedTimeInSec = (blueCurrentTime - blueStartTime)/1000;
					
					s = speedVal * blueElapsedTimeInSec;
					angle = s/Br1;
										
					sH = Br1 * Math.sin(angle);
					sV = Br1 * Math.cos(angle);
									
					var totalDistanceInMeters = Math.PI * Br1;
					var totalTimeInSeconds = totalDistanceInMeters / speedVal;
					BtotalTime = totalTimeInSeconds * 1000;
					
					//update centripetal acceleration dial
					bCarAngle = angle;
					data_dist_meters = Br1;
	
					aActorBlue.x = 479 + (sH * oneMtInPx);
					aActorBlue.y = 166 - (sV * oneMtInPx);
					
					aActorBlue.setRotation(angle);
					ctrr=0;
					if(speedVal > thresholdVelocityHigh)
						{
							ctrr++;
							persentAngle=angle;
							presentX=aActorBlue.x -4;
							presentY=aActorBlue.y-7;
							
							if(persentAngle * (180/Math.PI) > 30) {
							
								goAlongPath();
								return;
							}
						}
					
					if(aActorBlue.x+ (aActorBlue.width/2) < 495){
						journey=3;
						BstartX=aActorBlue.x;
						blueStartTime = new Date().getTime();
						
					}
							
				}
				if(journey==3){
					blueCurrentTime = new Date().getTime();
					blueElapsedTimeInSec = (blueCurrentTime - blueStartTime)/1000;
					sH = (speedVal * blueElapsedTimeInSec);
					aActorBlue.x = BstartX - (sH * oneMtInPx);
					
					if(aActorBlue.x +(aActorBlue.width/2)< 195){
							journey=4;
							blueStartTime = new Date().getTime();
							
					}
					
					var totalDistanceInMeters = 495 - 195;
					var totalTimeInSeconds = totalDistanceInMeters / speedVal;
					BtotalTime = totalTimeInSeconds * 1000;
					bCarAngle = Math.PI;
					data_dist_meters = 0;
				}

				if(journey==4){
					blueCurrentTime = new Date().getTime();
					blueElapsedTimeInSec = (blueCurrentTime - blueStartTime)/1000;
					
					s = speedVal * blueElapsedTimeInSec;
					angle = s/Br2;
					
					sH = Br2 * Math.sin(angle);
					sV = Br2 * Math.cos(angle);
					
					aActorBlue.x = 177 - (sH * oneMtInPx);
					aActorBlue.y = 391 - (sV * oneMtInPx);
					
					var totalDistanceInMeters = Math.PI * Br2;
					var totalTimeInSeconds = totalDistanceInMeters / speedVal;
					BtotalTime = totalTimeInSeconds * 1000;
					bCarAngle = Math.PI-angle;
					data_dist_meters = Br2;
					
					aActorBlue.setRotation(Math.PI-angle);
						ctrr=0;
						
						if(speedVal > thresholdVelocity && speedVal < thresholdVelocityHigh )
						{
							ctrr++;
							persentAngle=angle;
							presentX=aActorBlue.x -5;
							presentY=aActorBlue.y-3; 
							
							if(persentAngle * (180/Math.PI) > 30) {
						
								goAlongPath();
								return false;
							}
						}
					
					 if(aActorBlue.x+ (aActorBlue.width/2) > 203){
						 journey=5;
						 BstartX=aActorBlue.x;
						 blueStartTime = new Date().getTime();
					 }
				}
				
				hVelocity = hv_velocity(data_dist_meters)[0];
				vVelocity = hv_velocity(data_dist_meters)[1];
				updateCentripetalAccDial();
				animateXYVelocity(hVelocity, vVelocity);
				
				if(journey==5){
					blueCurrentTime = new Date().getTime();
					blueElapsedTimeInSec = (blueCurrentTime - blueStartTime)/1000;
					sH = (speedVal * blueElapsedTimeInSec);
					aActorBlue.setRotation(0);
					aActorBlue.x = BstartX + (sH * oneMtInPx);
					if(aActorBlue.x + (aActorBlue.width/2) > 305){
						redTimerInstance.cancel();
						blueTimerInstance.cancel();		
						bannerDisp();
						gameEnd = true;
						setScaleBehaviour();		
						journey=6;
					}
		
					var totalDistanceInMeters = 305 - 203;
					var totalTimeInSeconds = totalDistanceInMeters / speedVal;
					BtotalTime = totalTimeInSeconds * 1000;
					bCarAngle = 0;
					data_dist_meters = 0;
				}
			
			},
				
			function (scene_time, timer_time, timertask_instance) {
					
				} // cancel
	)};
	
var incDecTimer = null;
var makeTimerDelay = 0;

var IncDecArrow = function(action,btn){
	function process(){
	if(!isGameStart && !BpauseFlg){
		if(action=='+'){
			if(speedVal<=14.9){
				speedVal+=0.1;
				aLabelSp.setText(speedVal.toFixed(1));
		   }
	   }else if(action=='-'){
			if(speedVal>0.1){
				speedVal-=0.1;
				aLabelSp.setText(speedVal.toFixed(1));}
			}
			}
		}
		btn.mouseUp = function(mouseEvent){
			if(incDecTimer != null){
				incDecTimer.cancel();}
		};
		btn.mouseExit = function(mouseEvent){
			if(incDecTimer != null){
				incDecTimer.cancel();}
		};
		btn.mouseDown = function(mouseEvent){
		if(incDecTimer != null){
				incDecTimer.cancel();}
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
};

function bannerDisp()
{
		banner.visible = true;
		if( speedVal > 8.9 && speedVal <= 9.1)
			{
				banner.childrenList[0].setSpriteIndex(1);
				banner.childrenList[1].setText("Congratulations!");
				banner.childrenList[2].setText("You beat the computer.");
		}else{
				banner.childrenList[0].setSpriteIndex(2);
				banner.childrenList[1].setText("You need to try again.");
				banner.childrenList[2].setText("Press RESET to start over.");
			}
			banner.childrenList[1].setLocation(((banner.width  -  banner.childrenList[1].width)/2)+10, 12);
			banner.childrenList[2].setLocation(((banner.width  -  banner.childrenList[2].width)/2)+10, 28);
			
		var pathBehaviour = new CAAT.PathBehavior().
			setValues(new CAAT.Path().
			setLinear(-2, -90,-2, 0).
			setInteractive(false)).
			setDelayTime(0, 600);
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
	 var aActorBlue = getActor(false, 424, 26, 'bluerace', 'bluerace', 1, 1);
	 var aActorRed = getActor(false, 424, 5, 'redrace', 'redrace', 1, 1);
	 var aActorCar = getActor(false, 53, 585, 'blueicon', 'blueicon', 1, 1);
	 
	 aActorGaugeXRed.addBehavior(new CAAT.Behavior.ScaleBehavior().
                            setValues(0, 0, 1, 1, 0, 0).
							setFrameTime(0, 0).
                            setCycle( false ));
							
	aActorGaugeYRed.addBehavior(new CAAT.Behavior.ScaleBehavior().
                            setValues(1, 1, 0, 0, 0, 0).
							setFrameTime(0, 0).
                            setCycle( false ));
 
	/*distance of car meter*/
	 var aActorCarR1 =  game.textActor(director, 'r = 14.0 m', 'bold 14px Arial', 'left', '#ffffff').setLocation(510, 150);
	 var aActorCarR2 =  game.textActor(director, 'r = 8.50 m', 'bold 14px Arial', 'left', '#ffffff').setLocation(190, 410);
	 var aActorCarSp =  game.textActor(director, 'Blue car Speed', 'bold 14px Arial', 'left', '#ffffff').setLocation(398, 540);
	 var aActorCarSpd =  game.textActor(director, ' 0.0', 'bold 14px Arial', 'left', '#000000').setLocation(91, 565);
	 var aActorM =  game.textActor(director, 'm/s', 'bold 14px Arial', 'left', '#ffffff').setLocation(570, 538);
	 
	 //Gauge_x values
	var aActorGauge1=  game.textActor(director, '10', 'bold 12px Arial', 'left', '#ffffff').setLocation(215, 558);
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
				isGameStart = true;

				banner.visible=false;
				animateBuleCar(aActorBlue);
				animateRedCar(aActorRed);
				}
				}
			}).setLocation(598, 506);
	
	/*Pause Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorPause = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 2, 2, 3, 2, 
						function(button){
							if(typeof game.pauseActivity == 'function') {
								game.pauseActivity();						
							}
						}).setLocation(598, 556);
	//On pausing the activity
	game.pauseActivity = function() {
			if(!isGameStart){		
				return;		
			}else{
				BisFrstTime=true;
				BpauseFlg=true;
				RisFrstTime=true;
				RpauseFlg=true;
				linearPath = true;
				isGameStart = false;
				blueTimerInstance.cancel();
				redTimerInstance.cancel();
			
				pauseTimeStamp = new Date().getTime();		
				aActorBlue.emptyBehaviorList();
			
			}
	}
	
	/*Reset Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorReset = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 4, 4, 5, 4, 
						function(button){
							if(blueTimerInstance){
							blueTimerInstance.cancel();}
							if(redTimerInstance){
							redTimerInstance.cancel();}
							isGameStart = false;
							BisFrstTime=false;
							BpauseFlg=false;
							RisFrstTime=false;
							RpauseFlg=false;
							linearPath = false;
							gameEnd = false;
							resetFn();
							aActorBlue.emptyBehaviorList();
							aActorBlue.reSetPosition();
							aActorRed.reSetPosition();
							aActorBlue.setRotation(0);
							aActorRed.setRotation(0);
							
							journey=1;
							Rjourney=1;
						tangentAsPath = tangentAsPath_arrow = tangentAsPath_tempPoint = null;
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
							banner.childrenList[1].setText("Set the maximum speed of blue car");
							banner.childrenList[2].setText("that keeps it on the track,then press GO. ");
							banner.childrenList[1].setLocation(((banner.width  -  banner.childrenList[1].width)/2)+10, 12);
							banner.childrenList[2].setLocation(((banner.width  -  banner.childrenList[2].width)/2)+10, 28);
						
						var pathBehaviour = new CAAT.PathBehavior().
							setValues(new CAAT.Path().
							setLinear(-2, -90,-2, 0).
							setInteractive(false)).
							setDelayTime(0, 600);
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
	
	var tangentLine = createTangentLine();
	tangentLine.setLocation(0 , 0);
	//add if required to show reference line
	//scene.addChild(tangentLine);
							
	desktop.addChild(aActorReset);
	desktop.addChild(aActorPause);
	desktop.addChild(aActorGo);
	desktop.addChild(btnSpeedInc);
	desktop.addChild(btnSpeedDec);
	desktop.addChild(aActorCarR1);
	desktop.addChild(aActorCarR2);
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
	
	scene.addChild(desktop, 'desktop');
	
	
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
			aActorCarSpd.setText(' '+(parseFloat(centripetalAcceleration)).toFixed(1));
		} else {
			aActorCarSpd.setText((parseFloat(centripetalAcceleration)).toFixed(1));	
		}
	}
	
	//=======================================================
	// find horizontal and vertical velocity
	//=======================================================
	function hv_velocity( data_dist_meters) {
		if(data_dist_meters == 0) {
			centripetalAcceleration = ' 0.0';
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
				setValues( 1, 1, 0, _y_velo_val, 0, 0);
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
			} else if(journey == 2) {
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

		blueTimerInstance.cancel();
		centripetalAcceleration = 0;
		updateCentripetalAccDial(); 
		
		sH = speedVal * Math.sin(angle) * blueElapsedTimeInSec;
		sV = speedVal * Math.cos(angle) * blueElapsedTimeInSec;
		
		var currX = presentX + (sH);
		var currY = presentY + (sV);
	
		if(journey == 2){
			tangentLength = 500 , tangentLengthY = 175 ,  data_dist_pixels = 140;
			
			drawTangent(data_dist_pixels, -90+(angle * (180/Math.PI)), { x:tangentLength, y:tangentLengthY}, aActorBlue, currX, currY);
		}else if(journey == 4){
			
			tangentLength = 115 , tangentLengthY = 480 ,  data_dist_pixels=85;
			
			drawTangent(data_dist_pixels, 90-(angle * (180/Math.PI)), { x:tangentLength, y:tangentLengthY}, aActorBlue, currX, currY);
		}
		aActorBlue.addBehavior(tangentAsPath);
	//	aActorBlue.addBehavior(tangentAsPath_tempPoint);
	}
	
	//=======================================================
	// Make tangent path for the car at all points of rotation
	//=======================================================
	function makeTangent(cx,cy,r,a){
		ang=(Math.PI/180)*a;
		var x1 = cx + (r * Math.cos(ang));
		var y1 = cy + (r * Math.sin(ang));	
		rXY=rotate(cx, cy, cx + r, cy + 350, a, false);
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
		var tangent_coor1 = makeTangent1(refPoint.x, refPoint.y, pos, newAngle + 0);
		_xx  = tangent_coor[0];
		_yy  = tangent_coor[1];
		_xx1 = tangent_coor[2];
		_yy1 = tangent_coor[3];
		

		_xx1_temp = tangent_coor1[2] - 30;
		_yy1_temp = tangent_coor1[3] - pos;
		
		var x_diff = _xx1 - _xx;
		var y_diff = _yy1 - _yy;
		
		var x_diff_tempPoint = _xx1_temp - _xx;
		var y_diff_tempPoint = _yy1_temp - _yy;
		
		var tangentPathArrowTime, tangentPathArrowTime_tempPoint;
		
		var X1, Y1, X2, Y2, X2_tempPoint, Y2_tempPoint;
		var X1_arr, Y1_arr, X2_arr, Y2_arr;
		
		X2 = tangentLength + x_diff -(39 / 2);
		Y2 = tangentLengthY - data_dist_pixels + y_diff - (18 / 2);
		
		X2_tempPoint = tangentLength + x_diff_tempPoint -(39 / 2);
		Y2_tempPoint = tangentLengthY + data_dist_pixels + y_diff_tempPoint - (18 / 2);
		
		if(linearPath){
			//if pause and played in the linear path
			X1 = aActorBlue.x;
			Y1 = aActorBlue.y;
			tangentPathArrowTime = getRequiredTime(X1, Y1, X2, Y2);
			tangentPathArrowTime_tempPoint = getRequiredTime(X1, Y1, X2_tempPoint, Y2_tempPoint);
		}else{

			X1= curX;
			Y1= curY;
			X1_arr=tangentLength + 30;
			Y1_arr=(tangentLengthY);
			//get the time at which the arrow has to traverse the path
			tangentPathArrowTime = getRequiredTime(tangentLength + 30, (tangentLengthY + data_dist_pixels), tangentLength + x_diff + 30, tangentLengthY + data_dist_pixels + y_diff);
			tangentPathArrowTime_tempPoint = getRequiredTime(tangentLength + 30, (tangentLengthY + data_dist_pixels), tangentLength + x_diff_tempPoint + 30, tangentLengthY + data_dist_pixels + y_diff_tempPoint);
		}
	
		//tangent path for car		
		tangentAsPath = new CAAT.PathBehavior().
						setValues( new CAAT.Path().setColor("#000").setLinear(X1, Y1, X2, Y2).setInteractive(false) ).
						setAutoRotate( true ).
						setDelayTime( 0, tangentPathArrowTime * 1000 );
						
		//tangent path for temp point	
		tangentAsPath_tempPoint = new CAAT.PathBehavior().
						setValues( new CAAT.Path().setColor("#000").setLinear(
							X1, Y1, X2_tempPoint, Y2_tempPoint
						).setInteractive(false) ).
						setAutoRotate( true ).
						setDelayTime( 0, tangentPathArrowTime_tempPoint * 1000 );
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
	
	//=======================================================
	// Create a tangent line for testing the tangent path
	//=======================================================
	function createTangentLine() {
		tangentLine = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);
		tangentLine.paint = function( director, time ) {
			var ctx = director.ctx;
			ctx.globalAlpha = 1;
			ctx.fillStyle = this.fillStyle;
			ctx.strokeStyle = '#FFFFFF';
			ctx.lineWidth = 0;

			ctx.save();
			ctx.beginPath();
			ctx.translate(0, 0);	
			ctx.moveTo(_xx, _yy);
			ctx.lineTo(_xx1, _yy1);
			ctx.lineTo(_xx1, _yy1);				
			ctx.lineTo(_xx, _yy);
			ctx.closePath();							
			ctx.fill();
			ctx.restore();
		}
		return tangentLine;
	}
 }
 