//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {
	var incDecTimer = null;
	game.dashBoardTxtArr = [];
	//declaration start
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   	  0,  0];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['well100b',     75,  0];
		dashBoardEle[dashBoardEle.length] = ['well100b',     175,  0];
		dashBoardEle[dashBoardEle.length] = ['well100b',    	275,  0];
		dashBoardEle[dashBoardEle.length] = ['well100b',    	375,  0];
		dashBoardEle[dashBoardEle.length] = ['well100b',    	475,  0];
		dashBoardEle[dashBoardEle.length] = ['well100b',    	575,  0];
		dashBoardEle[dashBoardEle.length] = ['wellleft2',  	 75,  0];
		dashBoardEle[dashBoardEle.length] = ['wellright2',  	675,  0];
		//dashBoardEle[dashBoardEle.length] = ['incrBgMed',  	200,  54];
		//dashBoardEle[dashBoardEle.length] = ['incrBgMed',  	400,  54];
		//dashBoardEle[dashBoardEle.length] = ['incrBgMed',  	400,  33];
		//dashBoardEle[dashBoardEle.length] = ['incrBgMed',  	200,  33];		
		/*dashBoardEle[dashBoardEle.length] = ['arrowLeftUp',  	540,  65];
		dashBoardEle[dashBoardEle.length] = ['arrowRightUp', 	555,  65];		*/
	
	
	//dashBoard text
	var dashBoardTxt = [];
											//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['Right moving wave', 	'bold 14px Arial',  'left', 104,  14, 1];
		dashBoardTxt[dashBoardTxt.length] = ['Left moving wave', 	'bold 14px Arial',  'left', 304,  14, 2];
		dashBoardTxt[dashBoardTxt.length] = ['Amplitude', 			'bold 14px Arial',  'left', 104,  33, 3];
		dashBoardTxt[dashBoardTxt.length] = ['0.50', 		 		'bold 14px Arial',  'left', 195,  35, 'lampTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['m', 		 			'bold 14px Arial',  'left', 230,  35, 4];
		dashBoardTxt[dashBoardTxt.length] = ['Amplitude', 			'bold 14px Arial',  'left', 304,  33, 5];
		dashBoardTxt[dashBoardTxt.length] = ['1.0', 		 		'bold 14px Arial',  'left', 394,  35, 'rampTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['m', 		 			'bold 14px Arial',  'left', 431,  35, 6];
		dashBoardTxt[dashBoardTxt.length] = ['Wavelength', 			'bold 14px Arial',  'left', 104,  53, 7];
		dashBoardTxt[dashBoardTxt.length] = ['6.00', 		 		'bold 14px Arial',  'left', 195,  55, 'lwidthTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['m', 		 			'bold 14px Arial',  'left', 230,  56, 8];
		dashBoardTxt[dashBoardTxt.length] = ['Wavelength', 			'bold 14px Arial',  'left', 304,  53, 9];
		dashBoardTxt[dashBoardTxt.length] = ['4.00', 		 		'bold 14px Arial',  'left', 397,  55, 'rwidthTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['m', 		 			'bold 14px Arial',  'left', 431,  56, 10];
		dashBoardTxt[dashBoardTxt.length] = ['Time step', 			'bold 14px Arial',  'left', 515,  40, 11];
				
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ["Set the waves' amplitude and wavelength and press GO.", "Can you define waves that combine to create a wave", "that does not move left or right?"];
	
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
		return [main, panel];
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
				//__createBannerContainer(dashBG);
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
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( _director.getImage('incre_decre_btn'), 1, 2);
		var leftAmpIncBtn = new CAAT.Foundation.Actor().
								setId('leftAmp_Inc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(246, 23);
		var leftAmpDecBtn = new CAAT.Foundation.Actor().
								setId('leftAmp_Dec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(271, 23);
		var leftWaveLengthIncBtn = new CAAT.Foundation.Actor().
								setId('leftWaveLength_Inc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(246, 52);
		var leftWaveLengthDecBtn = new CAAT.Foundation.Actor().
								setId('leftWaveLength_Dec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(271, 52);
		var rightAmpIncBtn = new CAAT.Foundation.Actor().
								setId('rightAmp_Inc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(450, 23);
		var rightAmpDecBtn = new CAAT.Foundation.Actor().
								setId('rightAmp_Dec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(480, 23);
		var rightWaveLengthIncBtn = new CAAT.Foundation.Actor().
								setId('rightWaveLength_Inc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(450, 52);
		var rightWaveLengthDecBtn = new CAAT.Foundation.Actor().
								setId('rightWaveLength_Dec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(480, 52);								

								
		dashBG.addChild(leftAmpIncBtn);
		dashBG.addChild(leftAmpDecBtn);
		dashBG.addChild(leftWaveLengthIncBtn);
		dashBG.addChild(leftWaveLengthDecBtn);
		dashBG.addChild(rightAmpIncBtn);
		dashBG.addChild(rightAmpDecBtn);
		dashBG.addChild(rightWaveLengthIncBtn);
		dashBG.addChild(rightWaveLengthDecBtn);
				
		//the increment and decrement buttons MouseDown functions are called when long press
		leftAmpIncBtn.mouseDown = incDecMDown;
		leftAmpDecBtn.mouseDown = incDecMDown;
		leftWaveLengthIncBtn.mouseDown = incDecMDown;
		leftWaveLengthDecBtn.mouseDown = incDecMDown;
		rightAmpIncBtn.mouseDown = incDecMDown;
		rightAmpDecBtn.mouseDown = incDecMDown;
		rightWaveLengthIncBtn.mouseDown = incDecMDown;
		rightWaveLengthDecBtn.mouseDown = incDecMDown;
		
		//the increment and decrement buttons MouseDown functions are called when long press
		leftAmpIncBtn.mouseUp = incDecMUp;
		leftAmpDecBtn.mouseUp = incDecMUp;
		leftWaveLengthIncBtn.mouseUp  = incDecMUp;
		leftWaveLengthDecBtn.mouseUp  = incDecMUp;
		rightAmpIncBtn.mouseUp = incDecMUp;
		rightAmpDecBtn.mouseUp = incDecMUp;
		rightWaveLengthIncBtn.mouseUp  = incDecMUp;
		rightWaveLengthDecBtn.mouseUp  = incDecMUp;
		
		//the increment and decrement buttons MouseDown functions are called when long press
		leftAmpIncBtn.mouseExit = incDecMUp;
		leftAmpDecBtn.mouseExit = incDecMUp;
		leftWaveLengthIncBtn.mouseExit  = incDecMUp;
		leftWaveLengthDecBtn.mouseExit  = incDecMUp;
		rightAmpIncBtn.mouseExit = incDecMUp;
		rightAmpDecBtn.mouseExit = incDecMUp;
		rightWaveLengthIncBtn.mouseExit  = incDecMUp;
		rightWaveLengthDecBtn.mouseExit  = incDecMUp;
		
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
		var arrowLeftUpImg = new CAAT.Foundation.SpriteImage().initialize(
				_director.getImage('arrowLeftUp'), 1, 1 
			); 
		var arrowRightUpImg = new CAAT.Foundation.SpriteImage().initialize(
				_director.getImage('arrowRightUp'), 1, 1 
			); 
		//Go btn creation and add Events
		var b1= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 0, 0, 1, 0, function(button) {					
					game.goBtnMDownHandler();					
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][1]);	
		//Reset btn creation and add Events
		var b2= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 4, 4, 5 ,4 , function(button) {
					game.resetBtnMDownHandler();
					game.__bannerDisplay(0, 0, 430, 500, false);
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][2]);	 
		//Pause btn creation and add Events
		var b3= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 2, 2, 3, 2, function(button) {
					game.pauseBtnMDownHandler();
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][3]);
			
		//Time step backward
		var b4 = new CAAT.Foundation.Actor().setAsButton(
				arrowLeftUpImg.getRef(), 0, 0, 0, 0, function(button) {
					game.timeStepBackward();
				}
			)
			.setId('timeStepBackward')
			.setLocation(540,  65);
			
		//Time step forward
		var b5 = new CAAT.Foundation.Actor().setAsButton(
				arrowRightUpImg.getRef(), 0, 0, 0, 0, function(button) {
					game.timeStepForward();
				}
			)
			.setId('timeStepForward')
			.setLocation(555,  65);
		
		dashBG.addChild( b1 );
		dashBG.addChild( b2 );
		dashBG.addChild( b3 );
		dashBG.addChild( b4 );
		dashBG.addChild( b5 );
		
		b4.mouseDown = incDecMDown;
		b5.mouseDown = incDecMDown;
		
		b4.mouseUp = incDecMUp;
		b5.mouseUp = incDecMUp;
		
		b4.mouseExit = incDecMUp;
		b5.mouseExit = incDecMUp;
	}
	//=======================================================
	//Create Banner Container
	//=======================================================
	game.__createBannerContainer = function( dashBG ){
		var _director = game.getDirector();
		bannerContainer = new CAAT.Foundation.ActorContainer().
									setSize(400, 70);
											
		bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( _director.getImage('banner'), bannerRows, bannerCols )
		);
		
		bannerContainer.addChild( bannerImg );		
		dashBG.addChild( bannerContainer );
		game.__bannerDisplay(0, 0, 430, 500, false);
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
		if(thisBtnId == 'leftAmp_Inc') {
			if( parseFloat(game.amplitudeLeft + game.amplitudeLeftStep) < game.amplitudeLeftMax) {
				game.amplitudeLeft = parseFloat(game.amplitudeLeft) + parseFloat(game.amplitudeLeftStep);
			}				
		} else if(thisBtnId == 'leftAmp_Dec') {
			if((parseFloat(game.amplitudeLeft) - parseFloat(game.amplitudeLeftStep)) >= game.amplitudeLeftMin) {
				game.amplitudeLeft = parseFloat(game.amplitudeLeft) - parseFloat(game.amplitudeLeftStep);
			}
		} else if(thisBtnId == 'leftWaveLength_Inc') {
			if(parseFloat(game.wavelengthLeft + game.wavelengthLeftStep) < game.wavelengthLeftMax) {
				game.wavelengthLeft = parseFloat(game.wavelengthLeft) + parseFloat(game.wavelengthLeftStep);
			}
		} else if(thisBtnId == 'leftWaveLength_Dec') {
			if(parseFloat(game.wavelengthLeft - game.wavelengthLeftStep) >= game.wavelengthLeftMin) {
				game.wavelengthLeft = parseFloat(game.wavelengthLeft) - parseFloat(game.wavelengthLeftStep);
			}
		} else if(thisBtnId == 'rightAmp_Inc') {
			if(parseFloat(game.amplitudeRight + game.amplitudeRightStep) < game.amplitudeRightMax) {
				game.amplitudeRight = parseFloat(game.amplitudeRight) + parseFloat(game.amplitudeRightStep);
			}
		} else if(thisBtnId == 'rightAmp_Dec') {
			if(parseFloat(game.amplitudeRight - game.amplitudeRightStep) >= game.amplitudeRightMin) {
				game.amplitudeRight = parseFloat(game.amplitudeRight) - parseFloat(game.amplitudeRightStep);
			}
		} else if(thisBtnId == 'rightWaveLength_Inc') {
			if(parseFloat(game.wavelengthRight + game.wavelengthRightStep) < game.wavelengthRightMax) {
				game.wavelengthRight = parseFloat(game.wavelengthRight) + parseFloat(game.wavelengthRightStep);
			}
		} else if(thisBtnId == 'rightWaveLength_Dec') {
			if(parseFloat(game.wavelengthRight - game.wavelengthRightStep) >= game.wavelengthRightMin) {
				game.wavelengthRight = parseFloat(game.wavelengthRight) - parseFloat(game.wavelengthRightStep);
			}
		}
		//update the new values in display
		if(whichVal == 'leftAmp') {
			game.amplitudeLeft = parseFloat(game.amplitudeLeft).toFixed(2);
			game.dashBoardTxtArr[3].setText( game.amplitudeLeft );
		} else if(whichVal == 'leftWaveLength') {
			game.wavelengthLeft = parseFloat(game.wavelengthLeft).toFixed(2);
			game.dashBoardTxtArr[9].setText( game.wavelengthLeft );
		} else if(whichVal == 'rightAmp') {
			game.amplitudeRight = parseFloat(game.amplitudeRight).toFixed(2);
			game.dashBoardTxtArr[6].setText( game.amplitudeRight );
		} else if(whichVal == 'rightWaveLength') {
			game.wavelengthRight = parseFloat(game.wavelengthRight).toFixed(2);
			game.dashBoardTxtArr[12].setText( game.wavelengthRight );
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
							incDecCount++;
							if(e.source.getId() == 'timeStepBackward'){
								//if(incDecCount%5 == 0){
									game.timeStepBackward(); 
									//incDecCount = 0; 
								//}
							} else if(e.source.getId() == 'timeStepForward'){
								//if(incDecCount%5 == 0){
									game.timeStepForward(); 
									//incDecCount = 0;
								//}
							} else {
								if(incDecCount%10 == 0){
									game.incDecHandler( e.source );
									incDecCount = 0;
								}
							}
						}, 
						null 
					); 
	} 
	//=======================================================
	//on increment/decrement button released
	//=======================================================
	function incDecMUp(e){ 
		incDecCount = 0;		
		if(incDecTimer != null){
			incDecTimer.cancel(); 
		}
	}
})();