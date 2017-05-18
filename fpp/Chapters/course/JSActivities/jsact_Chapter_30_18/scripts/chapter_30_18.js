//
//	Game Logic
//
(function(){
	var incDecCount = 0,
		isGameStart = false,
		iniSpeed = 4.0,
		ten2power = 4,
		m_gSpeed = 0,
		m_gCharge = 1.6 * Math.pow(10, -19),
		m_gVoltage = 2000,
		m_gMass = 2.2 * Math.pow(10, -25), 
		m_gB = 0.62,
		m_gRadius = 0,
		m_gMultiplier = 100,
		pixelPerCm = 10,		
		m_gBOriX = 180.5,
		m_gBOriY = 310,
		incDecTimer = null;	
		
	game.incDecMDown = function(e){
		incDecTimer = game._scene.createTimer(
						game._scene.time, 
						Number.MAX_VALUE,
						null,
						function(scene_time, time_time, time_instance){
							incDecCount++;
							if(incDecCount%10 == 0){
								game.incDecHandler( e.source.id );
								incDecCount = 0;
							}
						},
						null
					);
	}
	game.incDecMUp = function(e){
		incDecTimer.cancel();
	}
	
	game.incDecHandler = function( id ){	
		//If Game start the increment and decrement buttons not working until the game will finish
		//if(isGameStart)
		//	return;		
		
		if(id == 'incSpeed'){
			if((iniSpeed+0.1) < 10.0){
				iniSpeed+=0.1;			
				if(iniSpeed.toFixed(1) == 10.0){
					game.oDashTxtArr[8].setText('1.0');
					game.oDashTxtArr[11].setText(5);					
				}else{
					game.oDashTxtArr[8].setText(iniSpeed.toFixed(1));
					game.oDashTxtArr[11].setText(4);
				}				
			}
		}
		else if(id == 'decSpeed'){
			if(iniSpeed > 3.5){
				iniSpeed-=0.1;			
				if(iniSpeed.toFixed(1) == 10.0){
					game.oDashTxtArr[8].setText(1.0);
					game.oDashTxtArr[11].setText(5);
				}else{
					game.oDashTxtArr[8].setText(iniSpeed.toFixed(1));
					game.oDashTxtArr[11].setText(4);
				}
			}
		}	
	}
	
	game.goBtnMouseDownHandler = function(){
		if(!isGameStart){
			isGameStart = true;
		}else{
			return;
		}
		game.isCorrect = false;
		m_gSpeed = Number(iniSpeed.toFixed(1)) * Math.pow(10, 4);		
		m_gRadius = (m_gMass*m_gSpeed)/(m_gCharge*m_gB);	
		m_gRadius = m_gRadius * m_gMultiplier;
		game.oDashTxtArr[12].setText(m_gRadius.toFixed(1));
		setIonPath();
	}
	
	function setIonPath(){
		//Find out the difference angle between ion and the recording plate
		//This is used to place the position of the ball
		var diffAngle = Math.ceil(Math.atan((game.posIon.width/2)/(m_gRadius * pixelPerCm))* (180/Math.PI));

		var linearPath = new CAAT.PathUtil.LinearPath()
						.setInitialPosition(m_gBOriX, game.posIon.y)
                        .setFinalPosition(m_gBOriX, m_gBOriY);
		
		var arcPath = new CAAT.PathUtil.ArcPath()					
					.initialize(m_gBOriX+(m_gRadius*pixelPerCm),m_gBOriY,( m_gRadius*pixelPerCm), (180 - diffAngle)*(Math.PI/180))					
					.setClockWise(true);
		arcPath.startAngle = 180 * Math.PI/180;
		
		var path = new CAAT.PathUtil.Path().					
					addSegment(linearPath).                   
                    addSegment(arcPath).
                    endPath();
		  	
		game.posIon
			.enableEvents(false)
			.addBehavior(
				new CAAT.Behavior.PathBehavior()
					.setValues( path )
					.setDelayTime(0, 1000)					
			)			
			.setPositionAnchor(0.5, 0.5);
	}
	
	game.oSubTxtContMDown = function(mouseEvent){		
		var id = Number(mouseEvent.source.id.match(/\d+/g)[0]);
		game.substanceContainer.visible = false;
		if(id != 0){
			if(id == 3){
				//Find out the correct substance
				game.substanceTxt.setText(game.substanceArr[id].childrenList[0].text);
				game.__bannerDisplay(2, 1, -70+100, 100, false);
				game.isCorrect = true;
			}else{
				//wrong banner display
				game.substanceTxt.setText(game.substanceArr[id].childrenList[0].text);
				game.__bannerDisplay(1, 2, -70+100, 100, false);
			}
		}
	}
	
	game.substanceShowPopup = function(){
		if(game.isCorrect)
			return;
			
		game.substanceContainer.visible = true;
	}
	
	game.subtanceShow = function(){
		game.substanceContainer.visible = false;
	}
	
	game.resetBtnMouseDownHandler = function(){
		game.posIon.emptyBehaviorList();
		incDecCount = 0;		
		m_gRadius = 0;
		m_gSpeed = 0;
		ten2power = 4;
		m_gBOriX = 180.5;
		m_gBOriY = 310;
		isGameStart = false;
		game.isCorrect = true;
		game.oDashTxtArr[12].setText('--');
		game.posIon.setLocation(game.posIonOriXPos, game.posIonOriYPos);
		game.__bannerDisplay(0, 0, -70+100, 100, false);
		game.substanceTxt.setText(game.substanceArr[0].childrenList[0].text);
		game.substanceContainer.visible = false;
	}
	
})();