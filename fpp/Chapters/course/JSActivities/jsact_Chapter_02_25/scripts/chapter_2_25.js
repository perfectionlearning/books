//
//	Game Logic
//
(function() {
	var isGameFinished = false,
		timer = null,
		v = 0,
		u = 0,
		a = 0,
		s = 0,			
		_bezierCurveActor,
		directorCtx = null,
		__newX = 0,
		__newY = game.graphMidPoint,		
		incDecCount = 0, 
		finalVelocity = 0,	
		frstTimeBannerDisplay = false,
		elapsedT = 0,
		timePlot = 0,
		initialvelocity = 0,	
		currentTimeStamp = 0,
		startTimeStamp = 0,
		soccerballOriXPos = 50,
		soccerballOriYPos = 334,
		pauseTimeStamp = 0,
		pauseFlg = false,
		//In my Graph layout 50 meter is equal to 320 pixels so 1 meter is equal to 6.66 pixels.
		distPerPixels = 6.66;
	
	game.incDecMDown = function(e){
		if(game.incDecTimer != null){
			game.incDecTimer.cancel();
		}	
		game.incDecTimer = game._scene.createTimer(
						game._scene.time, 
						Number.MAX_VALUE,
						null,
						function(scene_time, time_time, time_instance){
							incDecCount++
							if(incDecCount%5 == 0){
								game.incDecHandler( e );
								incDecCount = 0;
							}
						},
						null
					);
	}
	game.incDecMUp = function(e){
		game.incDecTimer.cancel();
	}
	
	game.incDecHandler = function( e ){	
		//If Game start the increment and decrement buttons not working until the game will finish
		if(game.isGameStart)
			return;		
		
		if(e.source.id == 'iniVelInc'){
			if((game.iniVelocityVal+0.1) < 15){	
				game.iniVelocityVal+=0.1;
				if(game.iniVelocityVal.toFixed(1) == '-0.0'){
					game.iniVelocityVal = 0.0;
				}
				game.oDashTxtArr[13].setText(game.iniVelocityVal.toFixed(1));
			}
		}
		else if(e.source.id == 'iniVelDec'){
			if((game.iniVelocityVal-0.1) > -15){
				game.iniVelocityVal-=0.1;
				if(game.iniVelocityVal.toFixed(1) == '-0.0'){
					game.iniVelocityVal = 0.0;
				}
				game.oDashTxtArr[13].setText(game.iniVelocityVal.toFixed(1));
			}
		}else if(e.source.id == 'accInc'){
			if(game.accVal < 20){
				game.accVal+=0.1;
				if(game.accVal.toFixed(1) == '-0.0'){
					game.accVal = 0.0;
				}
				game.oDashTxtArr[14].setText(game.accVal.toFixed(1));
			}
		}else if(e.source.id == 'accDec'){
			if(game.accVal > -20 ){
				game.accVal-=0.1;
				if(game.accVal.toFixed(1) == '-0.0'){
					game.accVal = 0.0;
				}
				game.oDashTxtArr[14].setText(game.accVal.toFixed(1));
			}
		}
	}
	
	game.goBtnMDownHandler = function(){
		if(!game.isGameStart){
			game.isGameStart = true;		
		}else{
			return;
		}
		if(!frstTimeBannerDisplay){
			frstTimeBannerDisplay = true;
			drawBazierCurve();
			game.__bannerDisplay(0, 0, -70, 0, true);
			a = Number(game.oDashTxtArr[14].text);
			u = Number(game.oDashTxtArr[13].text);
			initialvelocity = Number(game.oDashTxtArr[13].text);
			startTimeStamp = new Date().getTime();		
		}
		if(pauseFlg){
			var newTimeStamp = new Date().getTime();
			startTimeStamp = startTimeStamp + newTimeStamp - pauseTimeStamp;
			pauseFlg = false;
		}	
		timer = game._scene.createTimer(
			game._scene.time, 
			Number.MAX_VALUE,
			function(scene_time, time_time, time_instance){				
			},
			function(scene_time, time_time, time_instance){
				currentTimeStamp = new Date().getTime();
				elapsedT = (currentTimeStamp - startTimeStamp)/1000;
				if(elapsedT>15){
					this.cancel();
					isGameFinished = true;								
					var velo = game.iniVelocityVal;					
					if(a == -1.6 && velo.toFixed(1) == 12.0 ){
						game.__bannerDisplay(2, 1, -70, 0, false);
					}else{					
						game.__bannerDisplay(1, 2, -70, 0, false);
					}
				}
				
				s = (u * elapsedT) + (0.5 * a * Math.pow(elapsedT, 2));	
				v = u + (a * elapsedT);
				s = soccerballOriYPos - (s * distPerPixels);
				finalVelocity = v;	
				if(finalVelocity.toFixed(1) <= initialvelocity * -1){
					game.oDashTxtArr[4].setText('0.00');
					game.oDashTxtArr[3].setText('0.00');				
				}else{
					if(initialvelocity > 0){						
						setSoccerBallPath();
					}
				}
				//this condition if soccer ball position is greater than origin position stop the 
				//soccer ball movement and fixed y position of soccer ball			
				if(initialvelocity < 0){					
					s = soccerballOriYPos;				
					calculateGraphPath();
				}
				else if(s < soccerballOriYPos){
					var velocity = v;
					var acceleration = a;
					game.oDashTxtArr[3].setText(velocity.toFixed(2));
					game.oDashTxtArr[4].setText(acceleration.toFixed(2));	
					calculateGraphPath();				
				}else{
					s = soccerballOriYPos;				
					calculateGraphPath();
				}			
			});	
	}
	
	function calculateGraphPath(){
		timePlot = elapsedT * (535/15);	
		_bezierCurveActor.__ctx.lineTo(timePlot, s);
		_bezierCurveActor.__ctx.stroke();		
	}
	
	function setSoccerBallPath(){		
		game.soccerBall.setLocation(50,  s);
	}
	
	function drawBazierCurve(){	
		var canvas = document.createElement('canvas');
		canvas.width = game._graphLayoutContainer.width;
		canvas.height = game._graphLayoutContainer.height;
		_bezierCurveActor = new CAAT.Foundation.Actor().
								setBackgroundImage( canvas ).
								setBounds(game._graphLayoutContainer.x, game._graphLayoutContainer.y, game._graphLayoutContainer.width, game._graphLayoutContainer.height );
		_bezierCurveActor.__x = game._graphLayoutContainer.x;
		_bezierCurveActor.__y = game._graphLayoutContainer.y;
		_bezierCurveActor.__ctx = canvas.getContext('2d');
		_bezierCurveActor.__ctx.lineWidth = 1.5;
		_bezierCurveActor.__ctx.lineJoin = 'round';
		_bezierCurveActor.__ctx.strokeStyle = 'black';
		_bezierCurveActor.__ctx.beginPath();
		_bezierCurveActor.__ctx.moveTo(__newX, __newY);	
		game.mainPanel.addChild(_bezierCurveActor);
	}
	
	game.resetBtnMDownHandler = function(){
		cancelTimer();
		game.__bannerDisplay(0, 0, -70, 0, false);
		game.isGameStart = isGameFinished = false;
		frstTimeBannerDisplay = false;	
		pauseFlg = false;
		//set velocity text
		game.oDashTxtArr[3].setText('- -');
		//set acceleration text
		game.oDashTxtArr[4].setText('- -');	
		//set soccer ball original position
		game.soccerBall.
			setLocation(soccerballOriXPos,  soccerballOriYPos);
		v = 0,
		u = 0,	
		finalVelocity = 0,
		a = 0,
		s = 0;
		elapsedT = 0,
		timePlot = 0;
		__newX = 0,
		__newY = game.graphMidPoint,
		clearGraph();	
	}
	//======================================
	//clear  the graph
	//======================================
	function clearGraph(){
		game.mainPanel.removeChild(_bezierCurveActor);	
		__newX = 0,
		__newY = game.graphMidPoint;	
	}
	
	game.pauseBtnMDownHandler = function(){
		if(isGameFinished)
			return;
			
		if(!game.isGameStart){		
			return;		
		}else{
			pauseFlg = true;
			game.isGameStart = false;
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