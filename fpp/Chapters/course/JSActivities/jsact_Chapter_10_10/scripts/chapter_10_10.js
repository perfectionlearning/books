//
//	Game Logic
//
(function(){	
	game.incDecTimer = null;
	var count =0;
	var rotateTimer = null;	
	var oneMtInPx = 19;
	var startTimeStamp = null;
	var finalVelocity = 0;
	var finalAngle = -315;
	var currentAngle = 0;
	var radius = 200;
	var rocketTimer = null;
	var release = false;
	var isPauseAction = false;
	var isRotateRunning = false;
	var isRocketRunning = false;
	var pauseTimeStamp = 0;
	var timerStartStamp = 0;
	var initialStart = true;
	var startElapse  = 0;
	var startRadian = 0.200;
	var decRadian = 90 * Math.PI/180;
	var gameStart = false;
	var rocketAng = 0;
	var gameEnd = false;
	var decAng = 0;
	var rocketMovementAng = 0;	
	var enter = false;
    var rotateRadian = 0;
	game.goBtnMDownHandler = function(){		
	  
	  if(!gameStart||isPauseAction){ 	
	  
	  	if(initialStart){
	  		game.__bannerDisplay(0, 0, 0, -70, false);
	   		startTimeStamp = new Date().getTime();
	   		initialStart = false;
			rotateObjects();		
	   }	
	   if(isPauseAction){
	   		
	   	    timerStartStamp   = new Date().getTime();
	        startTimeStamp = startTimeStamp +   timerStartStamp - pauseTimeStamp; 
	        
	        if(!gameEnd){
	        	 rotateObjects();  
	        }
	   	   
	   	    if(isRocketRunning){
	   	    	startElapse = startElapse + timerStartStamp - pauseTimeStamp;
	   	    	rocketAnimation();
	   	    	rocketMovement(rocketMovementAng,false);
	   	    }   	    
	   }
	   	gameStart = true;
	  	isPauseAction = false;
	  }	
	   
	}
	
	game.resetBtnMDownHandler = function(){
		
		
		gameStart = false;
		cancelTimer(rotateTimer);
		cancelTimer(rocketTimer);
		game.armImgFly.visible = false;
		game.rocketImg.visible = true;
		isRocketRunning = false;
		isRotateRunning = false;
		game.degree = 45;
		release = false;
		finalAngle = -315;
		initialStart = true;
		isPauseAction = false;
        rotateRadian = 0;
        gameEnd= false;         
		enter = false;
		game.rotateContainer.setRotation((game.degree-90) * Math.PI/180);
		game.__bannerDisplay(0, 0, -70, 0, false);		
	}
	
	game.pauseBtnMDownHandler = function(){
		
		if(gameStart){
			isPauseAction = true;
			pauseTimeStamp = new Date().getTime();
			if(isRocketRunning){
				game.armImgFly.setAnimationImageIndex([game.armImgFly.backgroundImage.spriteIndex]);  
			}
			
			gameStart = false;
		}
		cancelTimer(rotateTimer);
		cancelTimer(rocketTimer);
	}

	game.incDecHandler = function(obj){
		
	}
	
	game.incDecHandler = function(obj){
		
	}
	
	game.incDecMDown = function(mouseEvent){
	
	   if(!enter){
	   	incDecHandler(mouseEvent);
	   }		
	}	
	
	
	game.incDecMUp = function(mouseEvent){
		
		if(game.incDecTimer!=null){
			game.incDecTimer.cancel();
		}		
	}
	
	function cancelTimer(timer){
		if(timer!=null){
			timer.cancel();
			timer = null;
		}
	}
	
	function rotateObjects(){		
                
        game.degree = 45 * Math.PI/180;
        finalAngle = -315 * Math.PI/180;         
         
        isRotateRunning = true;
		rotateTimer = game._scene.createTimer(
            0,
            Number.MAX_VALUE,null,
            function (scene_time, timer_time, timertask_instance) {   // tick                  	
            		
            	if((game.degree-rotateRadian)>=finalAngle){	
					var currentTimeStamp = new Date().getTime();            	
					var elapsedTimeInSec = ( currentTimeStamp - startTimeStamp ) / 1000;
					finalVelocity = (game.acceleration * elapsedTimeInSec );						
					game.rotateContainer.setRotation(game.degree - rotateRadian-decRadian);  
					setAngularVelocity(finalVelocity); 	
					rotateRadian = (0.5 * startRadian *elapsedTimeInSec*elapsedTimeInSec);		
					currentAngle = game.degree - rotateRadian-decRadian;
					rocketMovementAng = game.degree - rotateRadian-decRadian;
					
				}
				else{						
					 
							if(!enter){
								    
									if(game.acceleration>=0.213 && game.acceleration<0.216){											
									setAngularVelocity(1.64); 	
									moveRocket(currentAngle);	
									rocketMovementAng = currentAngle;	
									release = true;	
									game.__bannerDisplay(2,1, -70, 0, false);
									}
									else{										
										game.__bannerDisplay(1,2, -70, 0, false);
									}
									
									enter = true;
							}
							
							
							decAng = finalVelocity/60;
							currentAngle = currentAngle - decAng;
							var current = -(currentAngle * 180 /Math.PI).toFixed(0);
							
							var remain = current%360;
							game.rotateContainer.setRotation(currentAngle);		
							if(release){
							  	if(remain>=0&& remain<=2){
									finishRotateActivity();	
								}
							 }					 					
												        
                							
				}   
					 	              	
            	                                     
            },null
          )
	}
	
	function finishRotateActivity(){
		
		rotateTimer.cancel();		
		game.rotateContainer.setRotation(2*Math.PI);
		setAngularVelocity(0.00); 
		gameEnd = true;
		isRotateRunning = false;
	}
	
	
	function rocketMovement(ang, initial){
		
		
		isRocketRunning = true;
		var velocity = finalVelocity*radius;
		
		var currentX =  240 + (radius * Math.cos(ang+Math.PI/2)) - game.rocketImg.width/2;
		var currentY =  205 + (radius * Math.sin(ang+Math.PI/2)) - game.rocketImg.height/2;
		
		game.armImgFly.x = currentX;
		game.armImgFly.y = currentY;
		
				var hVelocity = velocity * Math.cos(ang);
				var vVelocity = velocity * Math.sin(ang); 
			  if(initial){
			  	startElapse = new Date().getTime();	
			  }
											
				rocketTimer = game._scene.createTimer(
							0,
							Number.MAX_VALUE,null,
							function (scene_time, timer_time, timertask_instance) {   // tick  
														  var currentElapse = new Date().getTime();
								var elapse = (currentElapse-startElapse)/1000;
								sH =hVelocity*elapse;
								sV= vVelocity*elapse+ (0.5 * -9.8 * Math.pow(elapse,2));	
								
								game.armImgFly.x = currentX + sH;
								game.armImgFly.y = currentY + sV;	
																															  },null
						  )
				
		
	}
	
	function moveRocket(currentAng){
		
		game.armImgFly.setRotation(currentAng);
		rocketAnimation();
		rocketMovement(currentAng,true)
		game.armImgFly.visible = true;
		game.rocketImg.visible = false;
		
	}
	
	function rocketAnimation(){
		var si=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('fire'),1,4).
                        addAnimation("fly",     [0,1,2,3], 50);
                                          
        game.armImgFly.setBackgroundImage(si).playAnimation("fly");    
	
	}

	function incDecHandler(mouseEvent){
		if(game.incDecTimer != null){
			 game.incDecTimer.cancel();
		}
		game.incDecTimer=game._scene.createTimer(
            0,
            Number.MAX_VALUE,null,
            function (scene_time, timer_time, timertask_instance) {   // tick  
               if(count%5==0){
               	if(mouseEvent.source.id=='rocketdistanceInc')
                {		
                	
                	var dis =game.acceleration.toFixed(3);
					if(dis<0.300){
							game.acceleration=game.acceleration+0.001;
							setDistance(game.acceleration);		
					}
				}
				else if(mouseEvent.source.id=='rocketdistanceDec'){
			
	
					var dis =game.acceleration.toFixed(3);
					if(dis>0.200){
							game.acceleration=game.acceleration-0.001;
							setDistance(game.acceleration);									
					}
				}  			
				
				 count=0;				 
               }         
               count++;     
                         
            },null
          )
         }
	function setDistance(dis){
		game.oDashTxtArr[5].setText(dis.toFixed(3));
	}
	

	function setAngularVelocity(vel){
		game.oDashTxtArr[1].setText(vel.toFixed(2));
	}
})()