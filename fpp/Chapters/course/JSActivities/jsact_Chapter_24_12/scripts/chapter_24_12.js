//
//	Game Logic
//
(function(){
	var elapsedT = 0,
		currentTimeStamp = 0,
		startTimeStamp = 0,
		pauseTimeStamp = 0,		
		initialXVel = 0,
		gameTimer = null,
		alphaPartXPos = 0,
		alphaPartYPos = 0,
		accelerationVal = 1.72,
		alphaYVel = 0,
		alphaInitVel = 0,
		oneMtInPx = 1.5,		
		isGameStart = false,
		isGameFinished = false,
		frstTimeBannerDisplay = false,
		pauseFlg = false,
		drawCnt = 0;
		
	game.goBtnMDownHandler = function(){
		if(!isGameStart){
			isGameStart = true;		
		}else{
			return;
		}		
		
		if(!frstTimeBannerDisplay){
			frstTimeBannerDisplay = true;
			game.__bannerDisplay(0, 0, -70, 0, true);
			this.initXVelTxtBox.setAttribute('readOnly', 'readOnly');
			initialXVel = this.initXVelTxtBox.value;
			game.alpha_particle
				.setBackgroundImage(game.alphaPartAnim).playAnimation('blast');
			if(initialXVel < 0){
				game.__bannerDisplay(3, 2, -70, 0, false);
				return;
			}else if( initialXVel > 500){
				game.__bannerDisplay(4, 2, -70, 0, false);
				return;	
			}
			else if(isNaN(initialXVel)){
				initialXVel = 0.0;
				this.initXVelTxtBox.value = '0.0';
			}else{
				initialXVel = Number(this.initXVelTxtBox.value);
			}			
			startTimeStamp = new Date().getTime();
		}
		if(pauseFlg){
			var newTimeStamp = new Date().getTime();
			startTimeStamp = startTimeStamp + newTimeStamp - pauseTimeStamp;
			pauseFlg = false;
			//reset the animation when pause btn pressed
			game.alAtom
				.setBackgroundImage(game.AlAtomAnim).playAnimation('AlStand');				
			game.alpha_particle
				.setBackgroundImage(game.alphaPartAnim).playAnimation('rotation');
		}			
		gameTimer = game._scene.createTimer(
			game._scene.time,
			1E3,
			function(scene_time, timer_time, timer_instance){//timeout
				timer_instance.reset(game._scene.time);
			},
			function(scene_time, timer_time, timer_instance){//tick
				currentTimeStamp = new Date().getTime();
				elapsedT = (currentTimeStamp - startTimeStamp)/100;
				fire();				
			},
			function(scene_time, timer_time, timer_instance){//cancel
			}
		);		
	}
	//Alpha particle movement
	function fire(){
		//set horizontal velocity of the alpha patricle use formulea =>d = v*t
		alphaPartXPos = initialXVel * elapsedT;
		game.alpha_particle.visible = true;
		game.alpha_particle.x = game.alpha_particleOriXPos + (alphaPartXPos*oneMtInPx);
		
		//display x velocity of the alpha particle
		game.oDashTxtArr[4].setText(String(initialXVel));
		
		//set vertical velocity of the alpha patricle use formulea =>d = 0.5 * a * t * t
		alphaYVel = -accelerationVal * elapsedT;
		var alphaXvelocity = alphaYVel;
		game.oDashTxtArr[5].setText(alphaXvelocity.toFixed(1));
		
		
		alphaPartYPos = 0.5 * accelerationVal * Math.pow(elapsedT, 2);
		game.alpha_particle.y = game.alpha_particleOriYPos + (alphaPartYPos*oneMtInPx);
		
		//Draw continous path of the alpha particle
		if(drawCnt <= 0){			
			game.oPathActContainer.__ctx.beginPath();
			game.oPathActContainer.__ctx.moveTo(55, 60);			
		}else{			
			game.oPathActContainer.__ctx.lineTo(game.alpha_particle.x + game.alpha_particle.width/2, game.alpha_particle.y + game.alpha_particle.height/2);		
			game.oPathActContainer.__ctx.stroke();
		}
		drawCnt++;
		var intersect = dist(game.alpha_particle.x + game.alpha_particle.width/2, game.alpha_particle.y + game.alpha_particle.height/2, game.alAtom.x + game.alAtom.width/2, game.alAtom.y + game.alAtom.height/2);
		
		//This cond used to alpha particle hit the aluminium atom 
		//stop the timer and reset the initial x and y velocity	
		if((initialXVel == 19.6 || initialXVel == 19.7 || initialXVel == 19.8) && (game.alpha_particle.y + game.alpha_particle.height/2) > 360){
			cancelTimer();
			game.__bannerDisplay(2, 1, -70, 0, false);
			game.oDashTxtArr[5].setText('0.0');
			game.oDashTxtArr[4].setText('0.0');
			game.alAtom
				.setBackgroundImage(game.AlAtomAnim).playAnimation('ALAnimation');
			game.alpha_particle.visible = false;
			isGameFinished = true;
		}				
		
		//This condn is used to stop the timer when the alpha particle
		//goes to the out of the screen
		if( alphaPartXPos > game.maxXDrawPath || alphaPartYPos > game.maxYDrawPath ){
			cancelTimer();
			game.oDashTxtArr[5].setText('0.0');
			game.oDashTxtArr[4].setText('0.0');
			game.__bannerDisplay(1, 3, -70, 0, false);
			isGameFinished = true;
			isGameFinished = false;
		}
	}
	//after blast the alpha particle call rotation animation
	game.alphaBlastCallback = function(){
		game.alpha_particle
				.setBackgroundImage(game.alphaPartAnim).playAnimation('rotation');
	}
	//If alpha particle hit the aluminium atom call the animation call back function
	game.AlAtomAnimCallBack = function(){
		game.alAtom
				.setBackgroundImage(game.AlAtomAnim).playAnimation('AlStand');
	}
	//Find out the distance bw alpha particle and the hit area(Aluminium Atom)
	//This is useful for find out the hittest area
	function dist(x1, y1, x2, y2){
		return Math.sqrt(Math.pow((x1-x2), 2) + Math.pow((y1-y2), 2));
	}	
	game.pauseBtnMDownHandler = function(){
		if(isGameFinished){
			return;
		}
		if(!isGameStart){		
			return;		
		}else{
			pauseFlg = true;
			isGameStart = false;
			cancelTimer();
			pauseTimeStamp = new Date().getTime();	
			//pause the aluminium atom sprite image
			game.alAtom.setAnimationImageIndex([game.alAtom.backgroundImage.spriteIndex]);	
			//pause the alpha particle atom sprite image
			game.alpha_particle.setAnimationImageIndex([game.alpha_particle.backgroundImage.spriteIndex]);	
		}
	}	
	
	game.resetBtnMDownHandler = function(){
		cancelTimer();
		this.initXVelTxtBox.removeAttribute('readOnly');		
		elapsedT = 0;
		currentTimeStamp = 0;
		startTimeStamp = 0;
		initialXVel = 0;
		pauseTimeStamp = 0;
		gameTimer = null;
		alphaPartXPos = 0;
		alphaPartYPos = 0;
		alphaYVel = 0;
		alphaInitVel = 0;		
		isGameStart = false;
		frstTimeBannerDisplay = false;
		pauseFlg = false;
		game.oDashTxtArr[5].setText('--');
		game.oDashTxtArr[4].setText('--');		
		game.oPathActContainer.__ctx.clearRect(0, 0, game.maxXDrawPath, game.maxYDrawPath);	
		game.alpha_particle
			.setVisible(false)
			.setLocation(game.alpha_particleOriXPos, game.alpha_particleOriYPos);
		game.__bannerDisplay(0, 0, -70, 0, false);
		drawCnt = 0;
		isGameFinished = false;
		game.alAtom
				.setBackgroundImage(game.AlAtomAnim).playAnimation('AlStand');
	}	
	//======================================
	//Timer function
	//======================================
	function cancelTimer(){
		 gameTimer != null && gameTimer.cancel();
		 gameTimer = null
	}
})()