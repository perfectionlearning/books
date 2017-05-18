//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {
	var incDecTimer = null;
	//declaration start
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		0,    0];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['well100',    		350,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		450,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		550,  0];
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		350,  0];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		650,  0];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		455,  25];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		455,  49];
	
	//dashBoard text
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['Amplitude', 		'bold 13px arial', 'left', 375, 27, 'amp_txt'];
		dashBoardTxt[dashBoardTxt.length] = ['Period', 			'bold 13px arial', 'left', 397, 52, 'period_txt'];
		dashBoardTxt[dashBoardTxt.length] = ['m', 				'bold 13px arial', 'left', 518, 27, 'm_txt'];
		dashBoardTxt[dashBoardTxt.length] = ['s', 				'bold 13px arial', 'left', 518, 53, 's_txt'];
		dashBoardTxt[dashBoardTxt.length] = ['0.50', 			'bold 13px arial', 'left', 480, 28, 'amp_val'];//initial Amplitude id 
		dashBoardTxt[dashBoardTxt.length] = ['1.5', 			'bold 13px arial', 'left', 480, 52, 'period_val'];//Period id 
		
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Set the amplitude and period to match', 'the curve on the right and press GO.'];
		bannerContentTxt[bannerContentTxt.length] = ['Congratulations!', 'You matched the graph!'];
		bannerContentTxt[bannerContentTxt.length] = ['You need to try again.', 'Press RESET to start over.'];
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = [580, 6, 31, 56];
		//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position 
	
	var bannerContX1Pos = -2,
		bannerContX2Pos	= -2,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 18,
		bannerImg = null,
		bannerContainer = null;
	var oActorTxt_0 = null, oActorTxt_1 = null, oActorTxt_2 = null, oActorTxt_3 = null, oActorTxt_4 = null, oActorTxt_5 = null;
	var incDecCount = 0;
		
	game.panelHeight = 100;
	//declaration end
	//=======================================================
	// Create the main works area and the panel
	//=======================================================
	game.createPanels = function(director, scene){
		// Create the main area
		var main = createMain( director.width, director.height - game.panelHeight, director );
		main.setLocation(0, 0);
		scene.addChild(main);
		//Create the panel container
		var panel = createPanel( director.width, game.panelHeight, director );
		panel.setLocation(0, 500);		
		scene.addChild(panel);
		return main;
	}
	//=======================================================
	//Create Main Display Panel
	//=======================================================
	function createMain( pw, ph, director ){
		var setBG = new CAAT.Foundation.ActorContainer().
					setPreferredSize( pw, ph ).
					setBounds( 0, 0, pw, ph ).
					setClip(false);
		return setBG;
	}
	//=======================================================
	//Create Bottom dashboard 
	//=======================================================
	function createPanel( pw, ph, director ){
		var dashBG = new CAAT.Foundation.ActorContainer()
					.setPreferredSize( pw, ph )
					.setBounds( 0, 0, pw, ph )
					.setFillStyle('#CCC')
					.setClip(false);
		
		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.			
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);
			if(i == 0) {
				__createBannerContainer(dashBG);
			}
			dashBG.addChild(oActor);			
		}			
		//__createBannerContainer( dashBG );//banner show on the dash img (like z-index)		
		__createDashBoardTxt( dashBG );
		__createDashBoardButton( dashBG );	
		__createIncDecButton( dashBG );
		return dashBG;
	}
	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	function __createDashBoardTxt( dashBG ){
		var i = null;
		var _director = game.getDirector();
		//Create textActor
		i = 0;
		oActorTxt_0 = game.__addTextOnImage('white', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], _director );
			oActorTxt_0
				.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4])
				.setId(dashBoardTxt[i][5]);
			dashBG.addChild(oActorTxt_0);
			
		i = 1;
		oActorTxt_1 = game.__addTextOnImage('white', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], _director );
			oActorTxt_1
				.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4])
				.setId(dashBoardTxt[i][5]);
			dashBG.addChild(oActorTxt_1);
		
		i = 2;
		oActorTxt_2 = game.__addTextOnImage('white', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], _director );
			oActorTxt_2
				.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4])
				.setId(dashBoardTxt[i][5]);
			dashBG.addChild(oActorTxt_2);
			
		i = 3;
		oActorTxt_3 = game.__addTextOnImage('white', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], _director );
			oActorTxt_3
				.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4])
				.setId(dashBoardTxt[i][5]);
			dashBG.addChild(oActorTxt_3);
			
		i = 4;
		oActorTxt_4 = game.__addTextOnImage('white', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], _director );
			oActorTxt_4
				.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4])
				.setId(dashBoardTxt[i][5]);
			dashBG.addChild(oActorTxt_4);
			
		i = 5;
		oActorTxt_5 = game.__addTextOnImage('white', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], _director );
			oActorTxt_5
				.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4])
				.setId(dashBoardTxt[i][5]);
			dashBG.addChild(oActorTxt_5);
	}
	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	function __createIncDecButton( dashBG ){
		var _director = game.getDirector();
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( _director.getImage('incre_decre_btn'), 2, 1);
		var ampIncBtn = new CAAT.Foundation.Actor().
								setId('amp_Inc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(450, 25);
		var ampDecBtn = new CAAT.Foundation.Actor().
								setId('amp_Dec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(450, 33);
		var periodIncBtn = new CAAT.Foundation.Actor().
								setId('period_Inc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(450, 49);
		var periodDecBtn = new CAAT.Foundation.Actor().
								setId('period_Dec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(450, 57);
								
		dashBG.addChild(ampIncBtn);
		dashBG.addChild(ampDecBtn);
		dashBG.addChild(periodIncBtn);
		dashBG.addChild(periodDecBtn);
		
		//the increment and decrement buttons MouseDown functions are called when long press		
		ampIncBtn.mouseDown = incDecMDown;
		ampDecBtn.mouseDown = incDecMDown;
		periodIncBtn.mouseDown = incDecMDown;
		periodDecBtn.mouseDown = incDecMDown;
		
		//the increment and decrement buttons MouseDown functions are called when long press		
		ampIncBtn.mouseUp = incDecMUp;
		ampDecBtn.mouseUp = incDecMUp;
		periodIncBtn.mouseUp = incDecMUp;
		periodDecBtn.mouseUp = incDecMUp;
		
		//remove the timer when mouse exit from the 
		//Increment/Decrement button
		ampIncBtn.mouseExit = function(){
			if(incDecTimer){			
				incDecTimer.cancel();
			}
		}
		ampDecBtn.mouseExit = function(){
			if(incDecTimer){			
				incDecTimer.cancel();
			}
		}
		periodIncBtn.mouseExit = function(){
			if(incDecTimer){			
				incDecTimer.cancel();
			}
		}
		periodDecBtn.mouseExit = function(){
			if(incDecTimer){			
				incDecTimer.cancel();
			}
		}
	}
	//=====================================================
	//create Dashboard Button Container
	//=====================================================
	function __createDashBoardButton( dashBG ){
		var _director = game.getDirector();
		// Buttons creation
		var btnImg = new CAAT.Foundation.SpriteImage().initialize(
				_director.getImage('buttons'), 2, 3 
			); 
		//Go btn creation and add Events
		var b1= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 0, 0, 1, 0, function(button) {					
					game.goBtnMDownHandler();					
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][1]);	
		//Reset btn creation and add Events
		var b3= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 4, 4, 5 ,4 , function(button) {
					game.resetBtnMDownHandler();
					game.__bannerDisplay(0, 0, -70, 10, false);
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][2]);	 
		//Pause btn creation and add Events
		var b2= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 2, 2, 3, 2, function(button) {
					game.pauseBtnMDownHandler();
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][3]);
		
		dashBG.addChild( b1 );
		dashBG.addChild( b2 );
		dashBG.addChild( b3 );		
	}
	//=======================================================
	//Create Banner Container
	//=======================================================
	function __createBannerContainer( dashBG ){
		var _director = game.getDirector();
		bannerContainer = new CAAT.Foundation.ActorContainer().
									setSize(400, 70);
											
		bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( _director.getImage('banner'), bannerRows, bannerCols )
		);
		
		bannerContainer.addChild( bannerImg );		
		dashBG.addChild( bannerContainer );
		game.__bannerDisplay(0, 0, -70, 10, false);
	}	
	//=======================================================
    //Banner Display Container
    //=======================================================
    game.__bannerDisplay = function( index, bannerBGIndex, y1, y2, flag ){
		var _director = game.getDirector();
        bannerImg.
            setAnimationImageIndex([bannerBGIndex]);
        if(flag){
            var fromY1 = y1;
            var fromY2 = y2;
        } else {
            var fromY1 = y2;
            var fromY2 = y1;
        }
        var pathBehaviour = new CAAT.Behavior.PathBehavior().
            setValues( new CAAT.Path().setLinear(bannerContX1Pos, fromY1, bannerContX2Pos, fromY2).setInteractive(false) ).
        setDelayTime(0, 200);

        for(var i=0;i<bannerContentTxt[index].length;i++){
            if(this['bannerTxt_'+i]){
                bannerContainer.removeChild(this['bannerTxt_'+i]);
            }
            this['bannerTxt_'+i] = game.__addTextOnImage('black', bannerContentTxt[index][i], 'bold 14px Arial', 'center', _director );
            this['bannerTxt_'+i].setLocation(bannerTxtInitXPos, 12+(bannerTxtInitYPos*i));
            bannerContainer.addChild(this['bannerTxt_'+i]);
        }
        bannerContainer.addBehavior(pathBehaviour);
    } 
	//=======================================================
	//Image Dispaly container
	//=======================================================
	game.__addImageOnScene = function( img , _rows, _cols){
		return new CAAT.Foundation.Actor().
			setBackgroundImage(
				new CAAT.Foundation.SpriteImage().initialize(img, _rows, _cols)
			)
	}	
	//=======================================================
	//Text Display container
	//=======================================================
	game.__addTextOnImage = function( txtColor, txt, fontStyle, align, _director ){
		return new CAAT.Foundation.UI.TextActor().
                    setFont( fontStyle ).
                    setTextAlign( align ).
                    setText( txt ).					
                    calcTextSize( _director ).
                    setTextFillStyle( txtColor ).
                    setOutline( false );                    
	}
	//=======================================================
	//On clicking the increment/decrement of values
	//=======================================================
	game.incDecHandler = function( obj ) {
		//if paused then don't allow any increment/decrement of values
		if(game.gameStatus == 'paused' || game.gameStatus == 'started') return false;
		var thisBtnId = obj.getId();
		var whichVal = thisBtnId.split('_')[0];
		if(thisBtnId == 'amp_Inc') {
			if( parseFloat(game.amplitude + game.amplitudeStep) < game.amplitudeMax) {
				game.amplitude = parseFloat(game.amplitude) + parseFloat(game.amplitudeStep);
			}				
		} else if(thisBtnId == 'amp_Dec') {
			if((parseFloat(game.amplitude) - parseFloat(game.amplitudeStep)) >= game.amplitudeMin) {
				game.amplitude = parseFloat(game.amplitude) - parseFloat(game.amplitudeStep);
			}
		} else if(thisBtnId == 'period_Inc') {
			if(parseFloat(game.period + game.periodStep) < game.periodMax) {
				game.period = parseFloat(game.period) + parseFloat(game.periodStep);
			}
		} else if(thisBtnId == 'period_Dec') {
			if(parseFloat(game.period - game.periodStep) >= game.periodMin) {
				game.period = parseFloat(game.period) - parseFloat(game.periodStep);
			}
		}
		//update the new values in display
		if(whichVal == 'amp') {
			game.amplitude = parseFloat(game.amplitude).toFixed(2);
			oActorTxt_4.setText( game.amplitude );
		} else if(whichVal == 'period') {
			game.period = parseFloat(game.period).toFixed(1);
			oActorTxt_5.setText( game.period );
		}
		//do some calculation for change in values
		game.valuesChanged();
	};
	//=======================================================
	//on increment/decrement button pressed
	//=======================================================
	function incDecMDown(e){ 
		var scene = game.getScene();
		incDecTimer = scene.createTimer( 
						scene.time, 
						Number.MAX_VALUE, 
						null, 
						function(scene_time, time_time, time_instance){ 
							incDecCount++ 
							if(incDecCount%25 == 0){ 
								game.incDecHandler( e.source ); 
								incDecCount = 0; 
							} 
						}, 
						null 
					); 
	} 
	//=======================================================
	//on increment/decrement button released
	//=======================================================
	function incDecMUp(e){ 
		incDecTimer.cancel(); 
	}
	/*
	//=======================================================
	//on increment/decrement button continously pressed
	//=======================================================
	function incDecHandler( e ){ 
		if(e.source.id == '_increBtn'){ 
			if(game.isGameOver || game.isGamePaused) return false;
			if(game.currentCarSpeed < 15) {
				game.currentCarSpeed = parseFloat(game.currentCarSpeed) + 0.5;
				game.currentCarSpeed = (parseFloat(game.currentCarSpeed)).toFixed(1);
				game.changeSpeed( game.currentCarSpeed ); 
			}
		} 
		else if(e.source.id == '_decreBtn'){ 
			if(game.isGameOver || game.isGamePaused) return false;
			if(game.currentCarSpeed >= 0.5) {
				game.currentCarSpeed = parseFloat(game.currentCarSpeed) - 0.5;
				game.currentCarSpeed = (parseFloat(game.currentCarSpeed)).toFixed(1);
				game.changeSpeed( game.currentCarSpeed );  
			}
		}
	}
	*/
})();