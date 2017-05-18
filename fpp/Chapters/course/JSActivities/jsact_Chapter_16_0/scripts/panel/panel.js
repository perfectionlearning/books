//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {
	var incDecTimer = null;
	game.dashBoardTxtArr = [];
	//declaration start
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		0,    0];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['well100b',   		574,  0];
		dashBoardEle[dashBoardEle.length] = ['well100b',    	475,  0];
		dashBoardEle[dashBoardEle.length] = ['well100b',    	375,  0];
		dashBoardEle[dashBoardEle.length] = ['wellright2',    	675,  0];
		dashBoardEle[dashBoardEle.length] = ['wellleft2',  		375,  0];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		493,  30];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		493,  50];
	
	//dashBoard text
	var dashBoardTxt = [];
											//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['Wavelength', 		'bold 14px arial', 'left', 200, 35, 1, 			'#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['--', 				'bold 14px arial', 'left', 294, 35, 'waveLTxt', '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['m', 				'bold 14px arial', 'left', 330, 35, 2, 			'#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['Amplitude', 		'bold 14px arial', 'left', 400, 25, 3, 			'#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['- -', 			'bold 14px arial', 'left', 515, 32, 'ampLTxt',  '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['m', 				'bold 14px arial', 'left', 560, 30, 4, 			'#fff'];		
		dashBoardTxt[dashBoardTxt.length] = ['Frequency', 		'bold 14px arial', 'left', 400, 50, 5, 			'#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['- -', 			'bold 14px arial', 'left', 520, 52, 'frqTxt', 	'#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['Hz', 				'bold 14px arial', 'left', 560, 52, 6, 			'#fff'];
		
		
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Press GO to start a wave. Change the amplitude and', 'the frequency and observe the effects on the wave.'];
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = [600, 12, 37, 62];
		//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position 
	
	var bannerContX1Pos = -1,
		bannerContX2Pos	= -1,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 204,
		bannerTxtInitYPos = 18,
		bannerImg = null,
		bannerContainer = null;
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
		panel.setLocation(0, director.height - game.panelHeight);		
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
		for(var i = 0; i<dashBoardTxt.length; i++) {
			var thisTextActor = game.__addTextOnImage('white', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], _director );
			thisTextActor
				.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4])
				.setId(dashBoardTxt[i][5]);
			dashBG.addChild(thisTextActor);	
			game.dashBoardTxtArr.push(thisTextActor);
		}
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
								}).setLocation(488, 30);
		var ampDecBtn = new CAAT.Foundation.Actor().
								setId('amp_Dec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(488, 40);
		var frequencyIncBtn = new CAAT.Foundation.Actor().
								setId('frequency_Inc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(488, 50);
		var frequencyDecBtn = new CAAT.Foundation.Actor().
								setId('frequency_Dec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(488, 60);
								
		dashBG.addChild(ampIncBtn);
		dashBG.addChild(ampDecBtn);
		dashBG.addChild(frequencyIncBtn);
		dashBG.addChild(frequencyDecBtn);
		
		//the increment and decrement buttons MouseDown functions are called when long press
		
		ampIncBtn.mouseDown = incDecMDown;
		ampDecBtn.mouseDown = incDecMDown;
		frequencyIncBtn.mouseDown = incDecMDown;
		frequencyDecBtn.mouseDown = incDecMDown;
		
		//the increment and decrement buttons MouseDown functions are called when long press
		
		ampIncBtn.mouseUp = incDecMUp;
		ampDecBtn.mouseUp = incDecMUp;
		frequencyIncBtn.mouseUp = incDecMUp;
		frequencyDecBtn.mouseUp = incDecMUp;
		
		//do mouseup function on mouse exit from the button
		ampIncBtn.mouseExit = function(e) {
			if(incDecTimer)	incDecTimer.cancel();
			CAAT.setCursor("default");
		};
		ampDecBtn.mouseExit = function(e) {
			if(incDecTimer)	incDecTimer.cancel();
			CAAT.setCursor("default");
		};
		frequencyIncBtn.mouseExit = function(e) {
			if(incDecTimer)	incDecTimer.cancel();
			CAAT.setCursor("default");
		};
		frequencyDecBtn.mouseExit = function(e) {
			if(incDecTimer)	incDecTimer.cancel();
			CAAT.setCursor("default");
		};
		
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
		if(game.gameStatus == 'paused') return false;
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
		} else if(thisBtnId == 'frequency_Inc') {
			if(parseFloat(game.frequency + game.frequencyStep) < game.frequencyMax) {
				game.frequency = parseFloat(game.frequency) + parseFloat(game.frequencyStep);
			}
		} else if(thisBtnId == 'frequency_Dec') {
			if(parseFloat(game.frequency - game.frequencyStep) >= game.frequencyMin) {
				game.frequency = parseFloat(game.frequency) - parseFloat(game.frequencyStep);
			}
		}
		//update the new values in display
		if(whichVal == 'amp') {
			game.amplitude = parseFloat(game.amplitude).toFixed(2);
			game.dashBoardTxtArr[4].setText( game.amplitude );
		} else if(whichVal == 'frequency') {
			game.frequency = parseFloat(game.frequency).toFixed(1);
			game.dashBoardTxtArr[7].setText( game.frequency );
		}
		//do some calculation for change in values
		//game.valuesChanged();
	};
	//=======================================================
	//on increment/decrement button pressed
	//=======================================================
	function incDecMDown(e){ 
		var scene = game.getScene();
		if(incDecTimer != null){
			incDecTimer.cancel();
		}
		incDecTimer = scene.createTimer( 
						scene.time, 
						Number.MAX_VALUE, 
						null, 
						function(scene_time, time_time, time_instance){ 
							incDecCount++ 
							if(incDecCount%15 == 0){ 
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
		game.valuesChanged();
		incDecTimer.cancel(); 
	}
})();