//=======================================================
//	create desktop for user interaction
//=======================================================

//Arrow 1 = Force : Red
//Arrow 2 = Weight : Black
//Arrow 3 = Tension : Pink
//Arrow 4 = Friction : Blue
game.interaction = function(director, scene, banner){
	var isGameStart = false;
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
	
	var labelUpdate = function(arrow){
		if(!isGameStart && !pauseFlg){
			var r = radius(midPoint.x, midPoint.y, arrow.x, arrow.y)/1.5;
			 r =r.toFixed(0);
			if(arrow.id == 'arrow1'){
				aLabelForce.setText(r);
			}else if(arrow.id == 'arrow2'){
				aLabelWeight.setText(r);
			}else if(arrow.id == 'arrow3'){
				aLabelTension.setText(r);
			}else if(arrow.id == 'arrow4'){
				aLabelFriction.setText(r);
			}
			
		}
		
	};
	
	
	var incDecTimer = null;
	var makeTimerDelay = 0;
	
	var IncDecArrow = function(action, arrow, btn){
		
		function process(){
			var r = radius(midPoint.x, midPoint.y, arrow.x, arrow.y);
			var d = direction(midPoint.x, midPoint.y, arrow.x, arrow.y);
			
			var ang = Math.round((180/Math.PI) * d);
			var tan = makeTangent(midPoint.x, midPoint.y, r, ang);
		
			if(action == '+'){
				var N = (r+1)/1.5;
				if(N <= 200){
					tan = makeTangent(midPoint.x, midPoint.y, r+1, ang);
				}
			}else if(action == '-'){
				if(r > 0.6){
					var N = (r-1)/1.5;
					if(N <=200){
						if(r==1){
							tan = makeTangent(midPoint.x, midPoint.y, 0.4, ang);
						}else{
							tan = makeTangent(midPoint.x, midPoint.y, r-1, ang);
						}
						
					}
				}
			}
			arrow.x = tan.x;
			arrow.y = tan.y;
			labelUpdate(arrow);
			
				if(arrow.id=='arrow2'){
				weightLabel.setLocation(arrow.x+20, arrow.y+20);
				}else if(arrow.id=='arrow1'){
				forceLabel.setLocation(arrow.x+20, arrow.y+20);
				force2Label.setLocation(arrow.x+29, arrow.y+29);
				}else if(arrow.id=='arrow4'){
				frictionLabel.setLocation(arrow.x+30, arrow.y+10);
				}else if(arrow.id=='arrow3'){
					tensionLabel.setLocation(arrow.x+28, arrow.y+20);		
				}
		};
		
	
		btn.mouseUp = function(mouseEvent){
			if(incDecTimer != null){
				makeTimerDelay=0;
				incDecTimer.cancel();
			}
		};
		
		btn.mouseExit = function(){
			if(incDecTimer != null){			
				incDecTimer.cancel();
			}
			makeTimerDelay = 0;
			CAAT.setCursor("default");
		};
		
		btn.mouseDown = function(mouseEvent){
			if(incDecTimer != null){			
				incDecTimer.cancel();
			}
			incDecTimer=scene.createTimer(0, Number.MAX_VALUE,
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
	
	var checkAcceler = function(){
		var aR1 = Math.round(radius(midPoint.x, midPoint.y, arrow1.x, arrow1.y)/1.5);
		var aR2 = Math.round(radius(midPoint.x, midPoint.y, arrow2.x, arrow2.y)/1.5);
		var aR3 = Math.round(radius(midPoint.x, midPoint.y, arrow3.x, arrow3.y)/1.5);
		var aR4 = Math.round(radius(midPoint.x, midPoint.y, arrow4.x, arrow4.y)/1.5);
		
		
		var aD1 = direction(midPoint.x, midPoint.y, arrow1.x, arrow1.y);
		var aD2 = direction(midPoint.x, midPoint.y, arrow2.x, arrow2.y);
		var aD3 = direction(midPoint.x, midPoint.y, arrow3.x, arrow3.y);
		var aD4 = direction(midPoint.x, midPoint.y, arrow4.x, arrow4.y);
		
		var aAng1 = Math.round((180/Math.PI) * aD1);
		var aAng2 = Math.round((180/Math.PI) * aD2);
		var aAng3 = Math.round((180/Math.PI) * aD3);
		var aAng4 = Math.round((180/Math.PI) * aD4);
		
	
		if((aR1 == 51 && aAng1 == -120) && (aR2 == 59 && aAng2 == 90) && (aR3 == 78 && aAng3 == -30) && (aR4 == 23 && aAng4 == 150))
		{
			return true;
		}
			
		return false;
	};
	
	var getAcceleration = function(){
		var mass = 6;
		
		var aR1 = radius(midPoint.x, midPoint.y, arrow1.x, arrow1.y)/1.5;
		var aR2 = radius(midPoint.x, midPoint.y, arrow2.x, arrow2.y)/1.5;
		var aR3 = radius(midPoint.x, midPoint.y, arrow3.x, arrow3.y)/1.5;
		var aR4 = radius(midPoint.x, midPoint.y, arrow4.x, arrow4.y)/1.5; 
		
		var aR1=aR1.toFixed(0);
		var aR2=aR2.toFixed(0);
		var aR3=aR3.toFixed(0);
		var aR4=aR4.toFixed(0);
		
		var aS1 = direction(midPoint.x, midPoint.y, arrow1.x, arrow1.y);
		var aS2 = direction(midPoint.x, midPoint.y, arrow2.x, arrow2.y);
		var aS3 = direction(midPoint.x, midPoint.y, arrow3.x, arrow3.y);
		var aS4 = direction(midPoint.x, midPoint.y, arrow4.x, arrow4.y);

		var netVerticalForce = (aR1 * Math.sin(aS1)) + (aR2 * Math.sin(aS2)) + (aR3 * Math.sin(aS3)) + (aR4 * Math.sin(aS4));
		var netHorizontalForce = (aR1 * Math.cos(aS1)) + (aR2 * Math.cos(aS2)) + (aR3 * Math.cos(aS3)) + (aR4 * Math.cos(aS4));
		
		var netVertAcc =  netVerticalForce/mass;
		var netHoriAcc =  netHorizontalForce/mass;

		return {vert:netVertAcc, hori:netHoriAcc};
		
	};
	
	

	var timerInstance = null,
		isFrstTime = false,
		pauseFlg = false,
		isGameFinished = false,
		timerStart = 0;
		resetBanner = false;
	var goAction = function(accel){
	
		if(!isFrstTime){
			isFrstTime = true;
			var timeCounter = 0, timerFlag = true;
			var elapsedTime = 0;
			timerStart =new Date().getTime();
		}
		if(pauseFlg){
			var newTimeStamp = new Date().getTime();
			timerStart = timerStart + newTimeStamp - pauseTimeStamp;			
		}		
		
		timerInstance = scene.createTimer(
			0,
			Number.MAX_VALUE,
			function (scene_time, timer_time, timertask_instance) {}, // timeout
			function (scene_time, timer_time, timertask_instance) {   // tick
			
				if(timerStart) {

					 var timerCurrent=new Date().getTime();;
					
					elapsedTime=(timerCurrent-timerStart)/1000;
					
					var sx = game.midBox.x + (0.5 * accel.hori * Math.pow(elapsedTime,2));
					var sy = game.midBox.y + (0.5 * accel.vert * Math.pow(elapsedTime,2));
					
					game.midBox.setLocation(sx,sy);
				}
			},
				function (scene_time, timer_time, timertask_instance) {} // cancel
			)
	};
	

	var desktop = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);
	var midPoint = {x:290, y:280};
	var aLabelWeight =  game.textActor(director, '60', 'Bold 14px Arial', 'left', '#ffffff').setLocation(530, 490);
	var aLabelForce =  game.textActor(director, '60', 'Bold 14px Arial', 'left', '#ffffff').setLocation(530, 515);
	var aLabelFriction =  game.textActor(director, '60', 'Bold 14px Arial', 'left', '#ffffff').setLocation(530, 540);
	var aLabelTension =  game.textActor(director, '60', 'Bold 14px Arial', 'left', '#ffffff').setLocation(530, 565);
	var aLabelAcceleration =  game.textActor(director, '0.0', 'Bold 14px Arial', 'left', '#ffffff').setLocation(195, 535);
	
	var weightLabel =  game.textActor(director, 'mg', 'Bold 14px Arial', 'left', '#000000');
	var forceLabel =  game.textActor(director, 'F', 'Bold 14px Arial', 'left', '#000000');
	var force2Label =  game.textActor(director, 'N', '10px arial', 'left', '#000000');
	var frictionLabel =  game.textActor(director, 'f', 'Bold 14px Arial', 'left', '#000000');
	var tensionLabel =  game.textActor(director, 'T', 'Bold 14px Arial', 'left', '#000000');
	
	var drawArrow = function() {
	
		var headlen = 16;
		var dx = midPoint.x - (this.x - 10);
		var dy = midPoint.y - (this.y - 10);
		var angle = Math.atan2(10 - dy , 10 - dx);
		var canvas = director.ctx;
		
		canvas.strokeStyle = this.fillStyle;
		canvas.fillStyle = this.fillStyle;
		canvas.lineWidth = 0.9;
		canvas.beginPath();
		canvas.moveTo(dx , dy);
		canvas.lineTo(10, 10);
		
		canvas.moveTo(10, 10);
		canvas.lineTo(10 - headlen * Math.cos(angle - Math.PI/6), 10 - headlen * Math.sin(angle - Math.PI/6));
		canvas.lineTo(10 - headlen * Math.cos(angle + Math.PI/6), 10 - headlen * Math.sin(angle + Math.PI/6));
		
		canvas.fill();
		canvas.lineJoin = 'round';
		canvas.lineCap = 'round';
		canvas.closePath();        
		canvas.stroke();
		labelUpdate(this);

	};
		
	function getActor(drag, x, y, id, imgname, row, column){
		return new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage(imgname), row, column), true).
											enableEvents(drag).
											setSpriteIndex(0).
											setDefaultPos(x, y).
											setId(id);
	}

	var isDraged = false;
	var check = function(cActor, mouseEvent){
		if(isDraged){
			cActor.visible = true;
			arrow0.visible = false;
			cActor.setLocation(arrow0.x,arrow0.y);
			isDraged = false;
		}
	};
	
	var snap = function(cActor, mouseEvent, x, y){
		cActor.x += x;
		cActor.y += y;

		isDraged = true;
		var r = radius(midPoint.x, midPoint.y, cActor.x, cActor.y);
		var t;
		var d = direction(midPoint.x, midPoint.y, cActor.x, cActor.y);
		var ang = Math.round((180/Math.PI) * d);
		
		var N = r/1.5;
		
		if(N >= 200 || cActor.y < 0){
			r=299.5;
		}
		
		if(ang <=30 && ang >=-15){
			t = makeTangent(midPoint.x, midPoint.y, r, 0);
	
		}else if(ang <=75 && ang >=30){
			t = makeTangent(midPoint.x, midPoint.y, r, 60);
	
		}else if(ang <=120 && ang >=75){
			t = makeTangent(midPoint.x, midPoint.y, r, 90);
	
		}else if(ang <=165 && ang >=120){
			t = makeTangent(midPoint.x, midPoint.y, r, 150);
	
		}else if((ang <=-150 && ang >=-180) || (ang <=180 && ang >=165)){
			t = makeTangent(midPoint.x, midPoint.y, r, 180);
	
		}else if(ang <=-105 && ang >=-150){
			t = makeTangent(midPoint.x, midPoint.y, r, -120);
	
		}else if(ang <=-60 && ang >=-105){
			t = makeTangent(midPoint.x, midPoint.y, r, -90);
	
		}else if(ang <=-15 && ang >=-60){
			t = makeTangent(midPoint.x, midPoint.y, r, -30);
	
		}else{
		}
			
		arrow0.visible = true;
		arrow0.fillStyle = cActor.fillStyle;
		arrow0.setLocation(t.x,t.y);
		cActor.visible = false;
		arrow0.id=cActor.id;
		labelUpdate(arrow0);
		
		if(cActor.id=='arrow2'){
			weightLabel.setLocation(arrow0.x+20, arrow0.y+20);
		}else if(cActor.id=='arrow1'){
			forceLabel.setLocation(arrow0.x+20, arrow0.y+20);
			force2Label.setLocation(arrow0.x+29, arrow0.y+29);
		}else if(cActor.id=='arrow4'){
			frictionLabel.setLocation(arrow0.x+30, arrow0.y+10);
		}else if(cActor.id=='arrow3'){
			tensionLabel.setLocation(arrow0.x+28, arrow0.y+20);		
		}
			
	};
	
//Arrow 1 = Force : Red
//Arrow 2 = Weight : Black
//Arrow 3 = Tension : Pink
//Arrow 4 = Friction : Blue
	
	//var angletmp = makeTangent(midPoint.x, midPoint.y, 90, 0);
	var angletmp = makeTangent(midPoint.x, midPoint.y, 90, 0);
	var arrow0 = new CAAT.exemplarr().setBounds(angletmp.x, angletmp.y, 20, 20).setId('arrow0');
	arrow0.paint = drawArrow;
	arrow0.visible = false;
	desktop.addChild(arrow0);
	
	var angle30 = makeTangent(midPoint.x, midPoint.y, 90, -30);
	//var angle30 = makeTangent(midPoint.x, midPoint.y, 76.5, -120)
	var arrow1 = new CAAT.exemplarr().setBounds(angle30.x, angle30.y, 20, 20).setId('arrow1').userDrag(snap, check, true, true);
	arrow1.fillStyle = '#ff0000';
	arrow1.paint = drawArrow;
	desktop.addChild(arrow1);
	
	var angle0 = makeTangent(midPoint.x, midPoint.y, 90, 0);
	//var angle0 = makeTangent(midPoint.x, midPoint.y, 88.5, 90);
	var arrow2 = new CAAT.exemplarr().setBounds(angle0.x, angle0.y, 20, 20).setId('arrow2').userDrag(snap, check, true, true);
	arrow2.fillStyle = '#000000';
	arrow2.paint = drawArrow;
	desktop.addChild(arrow2);

	var angle180 = makeTangent(midPoint.x, midPoint.y, 90, -180);
	//var angle180 = makeTangent(midPoint.x, midPoint.y, 117, -30);
	var arrow3 = new CAAT.exemplarr().setBounds(angle180.x, angle180.y, 20, 20).setId('arrow3').userDrag(snap, check, true, true);
	arrow3.fillStyle = '#cc00ff';//pink
	arrow3.paint = drawArrow;
	desktop.addChild(arrow3);
	
	var angleM90 = makeTangent(midPoint.x, midPoint.y, 90, 90);
	//var angleM90 = makeTangent(midPoint.x, midPoint.y, 34.5, 150);
	var arrow4 = new CAAT.exemplarr().setBounds(angleM90.x, angleM90.y, 20, 20).setId('arrow4').userDrag(snap, check, true, true);
	arrow4.fillStyle = '#0000ff';//blue
	arrow4.paint = drawArrow;
	desktop.addChild(arrow4);
	
	weightLabel.setLocation(arrow2.x+20, arrow2.y+20);
	forceLabel.setLocation(arrow1.x+20, arrow1.y+20);
	force2Label.setLocation(arrow1.x+29, arrow1.y+29);
	frictionLabel.setLocation(arrow4.x+30, arrow4.y+10);
	tensionLabel.setLocation(arrow3.x+28, arrow3.y+20);
	
	/*Reset Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorReset = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 4, 4, 5, 4, 
						function(button){
							aLabelAcceleration.setText("0.0");
							isGameStart = false;
							isFrstTime = false;
							isGameFinished = false;
							timerStart = 0;
							pauseFlg = false;
							if(timerInstance != null){
						    	timerInstance.cancel();
							}
							game.midBox.setLocation(251, 242);
							banner.visible = false;
							arrow1.visible = true;
							arrow2.visible = true;
							arrow3.visible = true;
							arrow4.visible = true;
							
							weightLabel.visible=true;
							forceLabel.visible=true;
							force2Label.visible=true;
							frictionLabel.visible=true;
							tensionLabel.visible=true;
						
						}).setLocation(650, 535);
	
	/*Go Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorGo = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 1, 0, 
						function(button){
							
								if(!isGameStart){
									isGameStart = true;
									//resetBanner = false;
									var accel = getAcceleration();
									var speed = Math.sqrt(Math.pow(accel.vert,2)+Math.pow(accel.hori,2));
									aLabelAcceleration.setText(speed.toFixed(1));
								
									arrow1.visible = false;
									arrow2.visible = false;
									arrow3.visible = false;
									arrow4.visible = false;
									
									weightLabel.visible=false;
									forceLabel.visible=false;
									force2Label.visible=false;
									frictionLabel.visible=false;
									tensionLabel.visible=false;
									
									goAction(accel);
									
							        if(!pauseFlg){
										banner.visible = true;
										if(checkAcceler())
										{
											banner.childrenList[0].setSpriteIndex(1);
											banner.childrenList[1].setText("Great job! The box has the");
											banner.childrenList[2].setText("correct acceleration.");
										}else{
											
											banner.childrenList[0].setSpriteIndex(2);
											banner.childrenList[1].setText("You need to try again.");
											banner.childrenList[2].setText("Press RESET to start over.");
										}
										banner.childrenList[1].setLocation(((banner.width  -  banner.childrenList[1].width)/2)+10, 12);
										banner.childrenList[2].setLocation(((banner.width  -  banner.childrenList[2].width)/2)+10, 28);
										var pathBehaviour = new CAAT.PathBehavior().
										setValues(new CAAT.Path().
										setLinear(-3, 0, -3, -70).
										setInteractive(false)).
										setDelayTime(0, 300);
										banner.addBehavior(pathBehaviour);
											
										pauseFlg = false;
									}
								}
						
							
						}).setLocation(650, 510);
	
	/*Pause Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorPause = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 2, 2, 3, 2, 
						function(button){
															
							if(!isGameStart){		
								return;		
							}else{
								pauseFlg = true;
								isGameStart = false;
								if(timerInstance != null){
							    	timerInstance.cancel();
								}								
								pauseTimeStamp = new Date().getTime();		
							}
							
						}).setLocation(650, 560);
		
	/*Weight Increment*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('incre_decre_btn'), 1, 2)
	var btnWeightInc = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 0, 0, 
						function(button){
							
						}).setLocation(589, 482);
	/*Weight Decrement*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('incre_decre_btn'), 1, 2)
	var btnWeightDec = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 1, 1, 1, 1, 
						function(button){
						
						}).setLocation(619, 482).setSpriteIndex(1);

	/*Normal force Increment*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('incre_decre_btn'), 1, 2)
	var btnForceInc = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 0, 0, 
						function(button){
						
						}).setLocation(589, 509);

	
	/*Normal force Decrement*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('incre_decre_btn'), 1, 2)
	var btnForceDec = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 1, 1, 1, 1, 
						function(button){
						}).setLocation(619, 509).setSpriteIndex(1);						
    
	/*Friction Increment*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('incre_decre_btn'), 1, 2)
	var btnFrictionInc = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 0, 0, 
						function(button){
							
						}).setLocation(589, 536);

	/*Friction Decrement*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('incre_decre_btn'), 1, 2)
	var btnFrictionDec = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 1, 1, 1, 1, 
						function(button){
							
						}).setLocation(619, 536).setSpriteIndex(1);						
						

	/*Tension Increment*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('incre_decre_btn'),1, 2)
	var btnTensionInc = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 0, 0, 
						function(button){
							
						}).setLocation(589, 564);

	/*Tension Decrement*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('incre_decre_btn'), 1, 2)
	var btnTensionDec = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 1, 1, 1, 1, 
						function(button){
							
						}).setLocation(619, 564).setSpriteIndex(1);						
	
	
	IncDecArrow("+", arrow2, btnWeightInc);
	IncDecArrow("-", arrow2, btnWeightDec);
	IncDecArrow("+", arrow1, btnForceInc);
	IncDecArrow("-", arrow1, btnForceDec);
	IncDecArrow("+", arrow4, btnFrictionInc);	
	IncDecArrow("-", arrow4, btnFrictionDec);
	IncDecArrow("+", arrow3, btnTensionInc);	
	IncDecArrow("-", arrow3, btnTensionDec);
	
	desktop.addChild(aActorReset);
	desktop.addChild(aActorGo);
	desktop.addChild(aActorPause);
	
	desktop.addChild(btnWeightInc);	
	desktop.addChild(btnWeightDec);	
	desktop.addChild(btnForceInc);
	desktop.addChild(btnForceDec);
	desktop.addChild(btnFrictionInc);
	desktop.addChild(btnFrictionDec);
	desktop.addChild(btnTensionInc);
	desktop.addChild(btnTensionDec);
	
	
	desktop.addChild(aLabelWeight);
	desktop.addChild(aLabelForce);
	desktop.addChild(aLabelFriction);
	desktop.addChild(aLabelTension);
	desktop.addChild(aLabelAcceleration);
	
	desktop.addChild(weightLabel);
	desktop.addChild(forceLabel);
	desktop.addChild(force2Label);
	desktop.addChild(frictionLabel);
	desktop.addChild(tensionLabel);
	
	scene.addChild(desktop, 'desktop');
}