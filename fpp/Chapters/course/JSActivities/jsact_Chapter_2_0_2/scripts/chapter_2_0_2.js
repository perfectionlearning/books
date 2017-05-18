//
//	Game Logic
//
;(function(){
	var hareAcceleration = 0,		
		s = 0,
		currentTimeStamp,
		startTimeStamp,
		elapsedTime,
		initialHareVel = 24.0,
		initialTorVel  =  -4.0,
		finalHareVel = 0,		
		oneMtInPx =10,
		timer = null,
		lastOne = 0,
		hareFinish = false,
		hareAnimations,
		turtleAnimations,
		gameEnd = false,
		reverse = false,
		hareWon = false,
		pauseFlg = false,
		gameStart = false,
		timerStartStamp =0,
		pauseTime = 0,
		turtleWon = false;
		
	
	game.goBtnMDownHandler = function(){				
		
		
		
		 if(!gameStart&&!gameEnd){	 	
		 	
		 	game.__bannerDisplay(0, 0, 0, -70, false);
		 	gameStart = true;
		    if(!pauseFlg){
		    	
		    	startTimeStamp = new Date().getTime();
				hareAcceleration = document.getElementById('hAccInput').value;	
		    	if(isNaN(hareAcceleration)){
					hareAcceleration = 0.0;
					document.getElementById('hAccInput').value = '0.0';
					}else{
					hareAcceleration = Number(document.getElementById('hAccInput').value);
				} 
				
				
		    	
		    }
		    else{
		    	timerStartStamp   = new Date().getTime();
				startTimeStamp = startTimeStamp  +   timerStartStamp - pauseTime; 
				
		    }
		    
		    
		    if(hareAcceleration>=1000){
				game.__bannerDisplay(4, 2, -70, 0, false);
			}else{
				
				
		    	document.getElementById('hAccInput').value = hareAcceleration.toFixed(1);		    	
				game.oDashTxtArr[8].setText(hareAcceleration.toFixed(1));
				 if(!gameEnd){
		    	
		    	if(reverse){
		    		game.oHareSpriteImg.setBackgroundImage(hareAnimations).playAnimation("hare_reverse");
		    	}else{
		    		game.oHareSpriteImg.setBackgroundImage(hareAnimations).playAnimation("hare_run"); 
		    	}
		    		
			    game.oTurtleSpriteImg.setBackgroundImage(turtleAnimations).playAnimation("turtle_run");
		    }
			  
				
			 timer = game._scene.createTimer(
				game._scene.time,
				Number.MAX_VALUE,
				function(scene_time, timer_time, time_instance){//timeout
				},
				function(scene_time, timer_time, time_instance){//tick
					currentTimeStamp = new Date().getTime();
					elapsedTime = (currentTimeStamp - startTimeStamp)/1000;
					setHarePath(elapsedTime);
					setTurtlePath(elapsedTime);
				},
				function(scene_time, timer_time, time_instance){//cancel
					
				
					if(gameEnd){
						     
						     if(turtleWon){						     	  								 
								 if(hareFinish){
								 	game.__bannerDisplay(1, 2, -70, 0, false);
								 }else{								 	
								 	game.__bannerDisplay(2, 2, -70, 0, false);
								 	game.oTurtleSpriteImg.x = game.oTurtleSpriteImg.x + 5;
								 }
								  game.oHareSpriteImg.setBackgroundImage(hareAnimations).playAnimation("hare_lost"); 	
								 game.oTurtleSpriteImg.setBackgroundImage(turtleAnimations).playAnimation("turtle_won"); 
								 
						     }
						     else {
						     	game.oHareSpriteImg.setBackgroundImage(hareAnimations).playAnimation("hare_won"); 	
								game.oTurtleSpriteImg.setBackgroundImage(turtleAnimations).playAnimation("turtle_lost");  							
								game.__bannerDisplay(3, 1, -70, 0, false);
								
								
						     }
													
						}
				}
			);
			}
		    
			pauseFlg = false;
			
			}
		
	}
	
	game.hareAnimations = function(){
		hareAnimations = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('hareAnim'), 6, 12 )
							.addAnimation('hare_run',  [1, 2, 4, 5, 6, 9, 10], 100)
							.addAnimation('hare_reverse', [49,50,51,52,53,54,55,56,57,58,59],100)
							.addAnimation('hare_won', [64,65,66,67,68,69,70,71,37,38,39,40,41], 200, function(){
								game.oHareSpriteImg.setBackgroundImage(hareAnimations).playAnimation('hare_won_continious');
							})
							.addAnimation('hare_won_continious', [40, 41, 42, 43, 44], 100)
							.addAnimation('hare_lost', [17,18,19,20,21], 100, function(){
								game.oHareSpriteImg.setAnimationImageIndex([21]);
							});
	}
	
	game.turtleAnimations = function(){
		turtleAnimations= new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('turtleAnim'), 13, 11 )
							.addAnimation('turtle_run',  [55,56,57,58,59,60,61], 100)
							.addAnimation('turtle_won', [67, 68, 69, 70, 71, 72], 100, function(){
								game.oTurtleSpriteImg.setBackgroundImage(turtleAnimations).playAnimation('turtle_won_continious');
							})
							.addAnimation('turtle_won_continious', [89, 90, 91, 92, 93, 94], 100)
							.addAnimation('turtle_lost', [99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120], 100, function(){
								game.oTurtleSpriteImg.setAnimationImageIndex([120]);
							});
	
	}
	
	
	function setHarePath(elap){			
		var hareSx = ((initialHareVel*elap) + (0.5*hareAcceleration*Math.pow(elap, 2)))*oneMtInPx;		
		game.oHareSpriteImg.x =game.initHareXPos+hareSx;
		finalVelocity = initialHareVel + ( hareAcceleration * elap );
				
		game.oDashTxtArr[6].setText(finalVelocity.toFixed(1));
		
		if(game.oHareSpriteImg.x>586){
				if(!hareFinish){
					hareFinish = true;
				}
		}
		
		if(reverse){		
			if(game.oHareSpriteImg.x<game.initHareXPos+1){			
			gameEnd = true;
			if(hareFinish){
				hareWon = true;
			}else{
				turtleWon = true;
			}
			timer.cancel();
			
		  }	
		}
		
		
		if(hareSx<lastOne){
			if(!reverse){
				game.oHareSpriteImg.setBackgroundImage(hareAnimations).playAnimation("hare_reverse");
				reverse = true;
			}
			
		}else{
			lastOne = hareSx;
		}
		
	}
	
	function setTurtlePath(elap){	
		var TurtleSx = ((initialTorVel*elap))*oneMtInPx;	
		game.oTurtleSpriteImg.x =game.initTurtleXPos+TurtleSx;			
		
		
		if(game.oTurtleSpriteImg.x<=game.initHareXPos+25){
			gameEnd = true;
			turtleWon = true;
			timer.cancel();
			
			
		}		
	}
	

	game.resetBtnMDownHandler = function(){
		cancelTimer(timer);
		game.oDashTxtArr[8].setText("  --");
		game.oDashTxtArr[6].setText("24.0");
		gameEnd = false;
		turtleWon = false;
		hareFinish = false;
		hareWon = false;
		reverse = false;
		lastOne = 0;
		game.oTurtleSpriteImg.x = game.initTurtleXPos;
		game.oHareSpriteImg.x = game.initHareXPos;
		game.oTurtleSpriteImg.setAnimationImageIndex([33]);
		game.oHareSpriteImg.setAnimationImageIndex([0]);
		pauseFlg = false;
		gameStart = false;
		reverse = false;
		pauseTime = 0;
		game.__bannerDisplay(0, 0, -70, 0, false);
		
	}
	
	game.pauseBtnMDownHandler = function(){
		
		if(!pauseFlg &&!gameEnd){
			cancelTimer(timer);
			pauseFlg = true;
			gameStart= false;
			pauseTime = new Date().getTime();
			game.oHareSpriteImg.setAnimationImageIndex([game.oHareSpriteImg.backgroundImage.spriteIndex]);
			game.oTurtleSpriteImg.setAnimationImageIndex([game.oTurtleSpriteImg.backgroundImage.spriteIndex]);
		}
		
		
	}
	//======================================
	//Timer function
	//======================================
	function cancelTimer(timer){
		if(timer!=null){
			timer.cancel();
			timer = null;
		}
	}	
	
	
	
	
})();