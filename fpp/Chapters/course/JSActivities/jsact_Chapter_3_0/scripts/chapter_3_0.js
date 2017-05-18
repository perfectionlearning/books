//
//	Game Logic
//
(function(){

	game._timerInstance; 
	
	game.startX;
	game.startY;
	game.endX;
	game.endY;
	
	var oX=26;
	var oY=474;
	
	game.OneKMinPX=50;
	
	game.velocity=50;
	
	game.Dx=6;
	game.Dy=4;
	game.Ex=6;
	game.Ey=4;
	
	
	game.check1X=2;
	game.check1Y=7;
	
	game.check2X=3;
	game.check2Y=2;
	
	game.check3X=9;
	game.check3Y=6;
	
	game.check4X=9.5;
	game.check4Y=1.5;
	
	//Go Button Function:
	game.goBtnMDownHandler = function(){	
		//console.log('called', game.goFlag);
		if(game.goFlag){
			game.__bannerDisplay(0, 0, -70, 0, false );
			var sp=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('spaceship'),6, 11).
							   	addAnimation("s",   [3], 100, function(){
								game.spaceshipImg.setAnimationImageIndex([0]);
							 });
			game.spaceshipImg.setBackgroundImage(sp).playAnimation("s");
			game.goFlag = false;
			//Validating TextField Box:			
			var initialXVel = game.initXVelTxtBox.value;
			var initialYVel = game.initYVelTxtBox.value;			
			game.xJourney();
			//Calling Distance Function
			//game.XY = game.dist(0,0,parseFloat(initialXVel),-parseFloat(initialYVel));
			
			//console.log('called', [initialXVel, initialYVel]);
			
			//if(isNaN(initialXVel) || initialXVel == ''){
			//	initialXVel = 0.0;
			//	game.initXVelTxtBox.value = '0.0';				
			//}else{
			//	initialXVel = Number(game.initXVelTxtBox.value);				
			//}
		
			//if(isNaN(initialYVel) || initialYVel == ''){
				//initialYVel = 0.0;
				//game.initYVelTxtBox.value = '0.0';
			//}else{
				//initialYVel = Number(game.initYVelTxtBox.value);
			//}			
			
			//game.Ex=game.Dx + parseFloat(initialXVel);
			//game.Ey=game.Dy + parseFloat(initialYVel);
			
			//Calling Distance Function
			//game.XY=game.dist(0,0,parseFloat(initialXVel),-parseFloat(initialYVel));
			
			//Storing the actual start pixel values from the origin
			//game.startX = oX + (game.Dx * game.OneKMinPX);
			//game.startY = oY - (game.Dy * game.OneKMinPX);
	
			//Storing the actual end pixel values from the origin
			//game.endX = oX + (game.Ex * game.OneKMinPX);
			//game.endY = oY - (game.Ey * game.OneKMinPX);
			
			//Update Dx,Dy with new values
			//game.Dx=game.Ex;
			//game.Dy=game.Ey;
			
			//Rotating spaceshipImg according to the angle from DIST function
			//game.spaceshipImg.setRotationAnchored(game.XY[1],0.5,0.5);
			
			//Calling Timer 
			//game.createTimerUpdate();	
		}
	}
	//X Journey
	var xJourneyCompleted = yJourneyCompleted = false;
	game.xJourney = function(){				
		xJourneyCompleted = yJourneyCompleted = false;
		var initialXVel = game.initXVelTxtBox.value;		
		if(isNaN(initialXVel) || initialXVel == ''){
			initialXVel = 0.0;
			game.initXVelTxtBox.value = '0.0';				
		}else{
			initialXVel = Number(game.initXVelTxtBox.value);				
		}
		var initialYVel = 0.0;
		if(initialXVel == 0.0){
			game.spaceshipImg.setRotationAnchored(0.5, 0.5, 0.5);
		}else if(initialXVel < 0){
			game.spaceshipImg.setRotationAnchored(-3.14, 0.5, 0.5);
		}else{
			game.spaceshipImg.setRotationAnchored(0, 0.5, 0.5);
		}
		
		game.Ex = game.Dx + parseFloat(initialXVel);
		game.Ey = game.Dy + parseFloat(initialYVel);
		
		//Calling Distance Function
		game.XY = game.dist(0, 0, parseFloat(initialXVel), -parseFloat(initialYVel));
		
		//Storing the actual start pixel values from the origin
		game.startX = oX + (game.Dx * game.OneKMinPX);
		game.startY = oY - (game.Dy * game.OneKMinPX);

		//Storing the actual end pixel values from the origin
		game.endX = oX + (game.Ex * game.OneKMinPX);
		game.endY = oY - (game.Ey * game.OneKMinPX);
		
		//Update Dx,Dy with new values
		game.Dx=game.Ex;
		game.Dy=game.Ey;
		
		//Calling Timer 
		game.createTimerUpdate();	
	}
	//Y Journey
	game.yJourney = function(){					
		var initialYVel = game.initYVelTxtBox.value;
		if(isNaN(initialYVel) || initialYVel == ''){
			initialYVel = 0.0;
			game.initYVelTxtBox.value = '0.0';
		}else{
			initialYVel = Number(game.initYVelTxtBox.value);
		}
		var initialXVel = 0.0;
		if(initialYVel == 0.0){
			game.spaceshipImg.setRotationAnchored(0, 0.5, 0.5);
		}else if(initialYVel < 0){
			game.spaceshipImg.setRotationAnchored(1.6, 0.5, 0.5);
		}else{
			game.spaceshipImg.setRotationAnchored(-1.6, 0.5, 0.5);
		}
		game.Ex=game.Dx + parseFloat(initialXVel);
		game.Ey=game.Dy + parseFloat(initialYVel);
		
		//Calling Distance Function
		game.XY=game.dist(0,0,parseFloat(initialXVel),-parseFloat(initialYVel));
		
		//Storing the actual start pixel values from the origin
		game.startX = oX + (game.Dx * game.OneKMinPX);
		game.startY = oY - (game.Dy * game.OneKMinPX);

		//Storing the actual end pixel values from the origin
		game.endX = oX + (game.Ex * game.OneKMinPX);
		game.endY = oY - (game.Ey * game.OneKMinPX);
		
		//Update Dx,Dy with new values
		game.Dx=game.Ex;
		game.Dy=game.Ey;
		
		//Calling Timer 
		game.createTimerUpdate();	
	}
	
	 //=======================================================
	 // Timer keeps monitoring the object movement range and position
	 //=======================================================
	 game.createTimerUpdate = function() {
		var timeCounter = 0, timerFlag = true;
		
		//game.__bannerDisplay(0, 0, -70, 0, false );

		// Calculating Start Time
		 game.timerStart = new Date().getTime();

		 var spaceShipMove=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('spaceship'),6, 11).
					       addAnimation("start_1",   [3,4,5,6,7,8,9,10,11,12,13,14], 100, function(){
							
						   });
					       game.spaceshipImg.setBackgroundImage(spaceShipMove).playAnimation("start_1");
		
		 game._timerInstance = game._scene.createTimer(
			 0,
			 Number.MAX_VALUE,
			 function (scene_time, timer_time, timertask_instance) {}, // timeout
			 function (scene_time, timer_time, timertask_instance) {   // tick
				//console.log('game.timerStart ', game.timerStart);
				 if(game.timerStart) {					
					 // Calculating Current Time
					 game.timerCurrent=new Date().getTime();
			 
					 // Calculating Elapsed Time
					 game.elapsedTime=(game.timerCurrent-game.timerStart)/1000;
					 
					 game.shipX=game.startX + (game.velocity * Math.cos(game.XY[1]) * game.elapsedTime);
					 game.shipY=game.startY + (game.velocity * Math.sin(game.XY[1]) * game.elapsedTime);
					
					//For moving the spaceshipImg:
					game.spaceshipImg.setLocation(game.shipX-(game.spaceshipImg.width/2),game.shipY-(game.spaceshipImg.height/2));
					
					//console.log(xJourneyCompleted, yJourneyCompleted);					
					if((Math.abs(game.shipX - game.endX) < 2) && (!xJourneyCompleted)){
						//console.log('x journey completed');
						xJourneyCompleted = true;
						//CANCELLING the timer:						
						if(game._timerInstance != null){
							game._timerInstance.cancel();
						}						
						game.yJourney();
					}else if((Math.abs(game.shipY - game.endY) < 2) && (xJourneyCompleted)){
						xJourneyCompleted = true;
						//CANCELLING the timer:						
						if(game._timerInstance != null){
							game._timerInstance.cancel();
						}
						//Checking
						game.checkValues();						
					}
				 }			
			 },
			 function (scene_time, timer_time, timertask_instance) {
					game.spaceshipImg.setAnimationImageIndex([0]);
			 } 
		 )
	 };
	
	game.checkValues=function(){
		//console.log('checkValues called');	
		if(game.Ex==game.check1X && game.Ey==game.check1Y){
			//Ed\'s Fuel Depot
			game.__bannerDisplay(3, 1, -70, 0, true );
			var spaceShipMove2=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('edsfuel'),8, 9).
							   addAnimation("start",   [15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71], 100, function(){
								game.spaceshipImg.setAnimationImageIndex([71]);
							   });
							   game.spaceshipImg.setBackgroundImage(spaceShipMove2).playAnimation("start")
							   .setLocation(40, 83);
							  game.spaceshipImg.setRotation(0);
					 
		}else if(game.Ex==game.check2X && game.Ey==game.check2Y){
			//ESilver's Gym
			game.__bannerDisplay(4, 1, -70, 0, true );
		}else if(game.Ex==game.check3X && game.Ey==game.check3Y){
			//Joe's Dinner
			game.__bannerDisplay(2, 1, -70, 0, true );
		}else if(game.Ex==game.check4X && game.Ey==game.check4Y){
		//vortex
			game.__bannerDisplay(5, 1, -70, 0, true );		
		
			var vortex=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('vortex'),2, 10).
							   addAnimation("start",   [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16], 100, function(){

							//To find the random number for placing spaceshipImg
							var randomnumberX=Math.floor((Math.random()*10)+1);
							var randomnumberY=Math.floor((Math.random()*8)+1);
							
							//For checking whether random number equals to our THREE destinations
							//if yes making +1 to the randomNumber X and Y
							//else assigning rand num to Dx and Dy
							if((randomnumberX == game.check1X && randomnumberY == game.check1y)||(randomnumberX == game.check2X && randomnumberY == game.check2y)||(randomnumberX == game.check3X && randomnumberY == game.check3y)||(randomnumberX == game.check4X && randomnumberY == game.check4y))
							{							
							game.Dx=randomnumberX+1;
							game.Dy=randomnumberY+1;
							}else{
							game.Dx=randomnumberX;
							game.Dy=randomnumberY;
							}
							
							
							//Storing the actual start pixel values from the origin
							game.NewstartX = oX + (game.Dx * game.OneKMinPX);
							game.NewstartY = oY - (game.Dy * game.OneKMinPX);
							
							//Sprite for random place:
							var vortexReverse=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('spaceship'),6, 11).
												addAnimation("startRev", [44,45,46,47,48,49,50,55,56,57,58,59,60,61], 100, function(){
												
												game.spaceshipImg.setAnimationImageIndex([61])
												game.spaceshipImg.setRotation(45);
							});
							game.spaceshipImg.setBackgroundImage(vortexReverse).playAnimation("startRev")
							.setLocation(game.NewstartX-(game.spaceshipImg.width/2), game.NewstartY-(game.spaceshipImg.height/2));
							
						   });
					       game.spaceshipImg.setBackgroundImage(vortex).playAnimation("start");
	
		
		}else{
			//Not reach anywhere
			game.__bannerDisplay(1,2, -70, 0, true );
		}
	
		game.goFlag=true;
	}
	game.resetBtnMDownHandler = function(){
		// Display BANNER:
		game.__bannerDisplay(0, 0, -70, 0, true );
		if(game._timerInstance != null){
			game._timerInstance.cancel();
		}
		game.goFlag=true;
		//spaceshipImg to Original position
		var sp=new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('spaceship'),6, 11).
					       addAnimation("s",   [3], 100, function(){
							game.spaceshipImg.setAnimationImageIndex([0]);
						   });
					       game.spaceshipImg.setBackgroundImage(sp);
		game.spaceshipImg.setLocation(296, 241);	
	    game.Dx=6;
		game.Dy=4;
		game.spaceshipImg.setRotation(0);
		//isFrstTime = false;
	}
	
	//Distance Function:	
	game.dist = function(xA,yA,xB,yB){
		 var magnitude = Math.sqrt(Math.pow((xA - xB),2) + Math.pow((yA - yB),2));
		 var direction = Math.atan2(yB-yA,xB-xA);
		 return [magnitude,direction];
	 }
	game.animationCallBack = function(){
		game.twist.setBackgroundImage(game.spaceShipMove3).playAnimation("stand");
		game.spaceshipImg = false;
	}
})();