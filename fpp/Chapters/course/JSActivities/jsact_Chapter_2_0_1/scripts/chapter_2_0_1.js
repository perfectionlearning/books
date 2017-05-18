//
//	Game Logic
//
;(function(){
	var motionInterval,
		v = 0,
		a = 0.0,
		u = 0,
		maxTime,
		s = 0,
		s1 = 0,		
		isGameStart = false,
		isGameOver = false,		
		isFrstTimeBannerDisp = false,
		turtleInitVel = 3,
		//total distance is 50meter so convert it into pixel is 1 meter is equal to 10pixels
		distPerPixels = 10,		
		currentTimeStamp = 0,
		startTimeStamp = 0,
		pauseTimeStamp = 0,
		elapsedTime = 0,
		pauseFlg = false,
		timer = null;
	
	game.goBtnMDownHandler = function(){				
		if(!isGameStart){
			isGameStart = true;
		}else{
			return;
		}
		
		document.getElementById('hAccInput').style.display = 'block';
		document.getElementById('hAccInput').setAttribute('readOnly', 'readOnly');
		a = document.getElementById('hAccInput').value;
		var zero;
		if(isNaN(a)){			
			a = 0.0;
			zero = true;
			document.getElementById('hAccInput').value = '0.0';				
		}
		else{
			a = document.getElementById('hAccInput').value;
			//a = parseFloat(a);
			//a = a.toFixed(1);
		}	
		if( a < 1000 ){
			//set Acceleration text on the TextActor				
			game.oDashTxtArr[8].setText((Math.round(a * 10)/10).toFixed(1));
			if(!isFrstTimeBannerDisp){
				game.__bannerDisplay(0, 0, 0, -60, false);
				isFrstTimeBannerDisp = true;
				startTimeStamp = new Date().getTime();
			}
			if(pauseFlg){
				var newTimeStamp = new Date().getTime();
				startTimeStamp = startTimeStamp + newTimeStamp - pauseTimeStamp;
				pauseFlg = false;
			}	
			//Decides the maximum time allowed for the distance with the current acceleration
			maxTime = Math.sqrt(2*50/a);
			
			//This hare animation is used to run when the go button click Handler
			if(a != 0){
				game.oHareSpriteImg.setBackgroundImage(game.oHareRunAnim).playAnimation('hare_run');
			}
			game.oTurtleSpriteImg.setBackgroundImage(game.oTurtleRunAnim).playAnimation('turtle_run');						
			timer = game._scene.createTimer(
				game._scene.time,
				Number.MAX_VALUE,
				function(scene_time, timer_time, time_instance){//timeout
				},
				function(scene_time, timer_time, time_instance){//tick
					currentTimeStamp = new Date().getTime();
					elapsedTime = (currentTimeStamp - startTimeStamp)/1000;
					setHarePath();
					setTurtlePath();
				},
				function(scene_time, timer_time, time_instance){//cancel
				}
			);
			
		}else{
			game.__bannerDisplay(3, 3, 0, -70, true);
		}
	}
	
	function setHarePath(){		
		s = 0.5 * a * Math.pow(elapsedTime, 2);
		u = a * elapsedTime;
		s = game.initHareXPos+(s * distPerPixels);
		game.oHareSpriteImg.setLocation(s, game.initHareYPos);
		//set velocity text on the TextActor
		game.oDashTxtArr[6].setText(parseFloat(u).toFixed(1));
		//if(elapsedTime>maxTime){
		if(game.oHareSpriteImg.x+game.oHareSpriteImg.width/2 > 618){			
			game.oHareSpriteImg.x = 590;
			u = Math.sqrt(2 * a * 50);
			game.oDashTxtArr[6].setText(parseFloat(u).toFixed(1));
			cancelTimer();		
			whoWonTheGame('hare');
			whoLostTheGame('turtle');
			game.__bannerDisplay(2, 1, 0, -70, true);
		}				
	}
	
	function setTurtlePath(){	
		// (s)displacement = (u)intialvelocity*time
		s1 = turtleInitVel * elapsedTime;
		s1 = s1 * distPerPixels;	
		game.oTurtleSpriteImg.setLocation(parseFloat(game.initTurtleXPos+s1), game.initTurtleYPos);
		
		//If hare is reach the final ie.winning position, the loop has been breakup
		if(game.oTurtleSpriteImg.x+game.oTurtleSpriteImg.width > 623 ){
			cancelTimer();
			whoWonTheGame('turtle');
			whoLostTheGame('hare');
			game.__bannerDisplay(1, 2, 0, -70, true);		
		}
	}	
	function whoWonTheGame( who ){
		isGameOver = true;
		if(who == 'hare'){
			game.oHareSpriteImg.setBackgroundImage(game.oHareRunAnim).playAnimation('hare_won');
		}else if(who == 'turtle'){
			game.oTurtleSpriteImg.setBackgroundImage(game.oTurtleRunAnim).playAnimation('turtle_won');
		}
	}
	function whoLostTheGame( who ){
		if(who == 'hare'){
			game.oHareSpriteImg.setBackgroundImage(game.oHareRunAnim).playAnimation('hare_lost');
		}else if(who == 'turtle'){
			game.oTurtleSpriteImg.setBackgroundImage(game.oTurtleRunAnim).playAnimation('turtle_lost');
		}
	}	
	game.resetBtnMDownHandler = function(){
		document.getElementById('hAccInput').removeAttribute('readOnly');
		document.getElementById('hAccInput').value = '0.0';	
		cancelTimer();		
		/* reset velocity and acceleration */
		v = 0;
		a = 0.0;
		s = 0;
		s1 = 0;
		isGameOver = false;
		isGameStart = false;
		isFrstTimeBannerDisp = false;
		pauseFlg = false;
		currentTimeStamp = 0;
		startTimeStamp = 0;
		elapsedTime = 0;
		//set velocity text on the TextActor
		game.oDashTxtArr[6].setText(parseFloat(v).toFixed(1));
		//set Acceleration text on the TextActor
		game.oDashTxtArr[8].setText('--');
		game.__bannerDisplay(0, 0, 0, -70, true);
		//reset original position to the Hare and Turtle
		game.oHareSpriteImg
			.setLocation(game.initHareXPos, game.initHareYPos)
			.setAnimationImageIndex([0]);
		//turtle Reset Position	
		game.oTurtleSpriteImg
			.setLocation(game.initTurtleXPos, game.initTurtleYPos)
			.setAnimationImageIndex([0]);
		game.pauseBtnMDownHandler();		
	}
	
	game.pauseBtnMDownHandler = function(){		
		if(isGameOver)
			return;
			
		if(!isGameStart){		
			return;		
		}else{
			//Hare Reset Position	
			game.oHareSpriteImg.setAnimationImageIndex([game.oHareSpriteImg.backgroundImage.spriteIndex]);
			//turtle Reset Position	
			game.oTurtleSpriteImg.setAnimationImageIndex([game.oTurtleSpriteImg.backgroundImage.spriteIndex]);
			pauseFlg = true;
			isGameStart = false;
			cancelTimer();
			pauseTimeStamp = new Date().getTime();		
		}
	}
	//======================================
	//Timer function
	//======================================
	function cancelTimer(){
		 timer != null && timer.cancel();
		 timer = null
	}
})();