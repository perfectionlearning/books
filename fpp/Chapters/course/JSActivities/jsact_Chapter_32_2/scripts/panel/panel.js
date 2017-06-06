//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {
	//declaration start
	var bannerContainer = null, bannerImg = null;
	game.dashBoardTxtArr = [];
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',     0,   0];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['well100b',   200, 0];
		dashBoardEle[dashBoardEle.length] = ['well100b',   100, 0];
		dashBoardEle[dashBoardEle.length] = ['well100b',   300, 0];
		dashBoardEle[dashBoardEle.length] = ['well50b',    372, 0];
		dashBoardEle[dashBoardEle.length] = ['well100b',   0,   0];
		dashBoardEle[dashBoardEle.length] = ['wellleft2',  0,   0];
		dashBoardEle[dashBoardEle.length] = ['wellright2', 415, 0];
		//dashBoardEle[dashBoardEle.length] = ['incrBgMed',  230, 35];
		dashBoardEle[dashBoardEle.length] = ['scopeBg',    423, -40];
		dashBoardEle[dashBoardEle.length] = ['scope',  	   440, -5];
		dashBoardEle[dashBoardEle.length] = ['knob',  	   655, 10];
		
	//dashBoard test
	var dashBoardTxt = [];					//Text, font_style, alignment, xPos, yPos, id, fontColor
		dashBoardTxt[dashBoardTxt.length] = ['Magnetic field strength', 'bold 14px arial', 'left', 20, 35, 0, '#FFF'];
		dashBoardTxt[dashBoardTxt.length] = ['T', 		'bold 13px arial', 'left', 245, 38, 1, '#FFF'];
		dashBoardTxt[dashBoardTxt.length] = ['Current', 'bold 14px arial', 'left', 20, 55, 2, '#FFF'];		
		dashBoardTxt[dashBoardTxt.length] = ['A', 		'bold 13px arial', 'left', 145, 55, 3, '#FFF'];
		dashBoardTxt[dashBoardTxt.length] = ['Viewing angle', 'bold 14px arial', 'left', 20, -60, 4, '#000'];
		dashBoardTxt[dashBoardTxt.length] = ['0.00',	'bold 14px arial', 'left', 100, 55, 'cur', '#FFF'];//initial speed
		dashBoardTxt[dashBoardTxt.length] = ['0.700',	'bold 14px arial', 'left', 200, 37, 'incTxt', '#FFF'];//initial speed
		
	game.dashBoardEleArr = [];
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Drag the rod through the magnetic field to induce an', 'emf. You can try this with various field strengths.'];
	
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = [330, 39];//common XPosiotn, button_1 Y Position

	var bannerContX1Pos = -1,
		bannerContX2Pos	= -1,
		bannerRows = 2, 
		bannerCols = 3,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 18;	
	game.panelHeight = 100;
	
	game.tuneButtons = [];
	var tunePoints = [];
	tunePoints[tunePoints.length] = [661, 39, 0,   '0.1'];
	tunePoints[tunePoints.length] = [672, 61, 305, '0.5'];
	tunePoints[tunePoints.length] = [696, 64, 255, '1'];
	tunePoints[tunePoints.length] = [715, 50, 205, '5'];
	tunePoints[tunePoints.length] = [715, 28, 158, '10'];
	tunePoints[tunePoints.length] = [696, 12, 107, '50'];
	tunePoints[tunePoints.length] = [672, 15, 54,  '100'];
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
		var setBG = new CAAT.Foundation.ActorContainer()
					.setPreferredSize( pw, ph )
					.setBounds( 0, 0, pw, ph )
					.setFillStyle('#99d4ff')
					.setClip(true);
		return setBG;
	}
	//=======================================================
	//Create Bottom dashboard 
	//=======================================================
	function createPanel( pw, ph, director ){
		var dashBG = new CAAT.Foundation.ActorContainer()
					.setPreferredSize( pw, ph )
					.setBounds( 0, 0, pw, ph )
					.setFillStyle('#000')
					.setClip(false);
		//create bottom panel
		for(var i = 0; i < dashBoardEle.length; i++){
			var oActor = game.__addImageOnScene( director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);
			game.dashBoardEleArr.push(oActor);
			dashBG.addChild(oActor);			
		}
		
		game.tuneArea = new CAAT.Foundation.ActorContainer()
			.setBounds(645, -5, 100, 100)
			.setFillStyle('red')
			.setAlpha(0.0)
			.setId('tuneArea');
		game.tuneArea.mouseDown = game.onMouseDragTA;
		game.tuneArea.mouseDrag = game.onMouseDragTA;
		for(var kk = 0; kk < 7; kk++) {
			var thisTunePoint = new CAAT.Foundation.Actor()
										.setSize(15, 15)
										.setLocation(tunePoints[kk][0], tunePoints[kk][1])
										.setFillStyle('red')
										.setAlpha(0.0)
										.setId('tune_'+kk+'_'+tunePoints[kk][2])
										/*.setAsButton(null, 0, 0, 0, 0, function(button){
											game.rotateKnob(this.getId());
										})*/
										.setClip(true);
			dashBG.addChild(thisTunePoint);	
			game.tuneButtons.push(thisTunePoint);
		}
		dashBG.addChild(game.tuneArea);	
		game.dashBoardEleArr[10].setRotation( 305 * (Math.PI/180) );
		__createDashBoardTxt( dashBG );
		__createDashBoardButton( dashBG );
		__createIncDecButton( dashBG );
		return dashBG;
	}
	//=====================================================
	//create Dashboard Button Container
	//=====================================================
	var __createDashBoardButton = function( parent ){
		var _director = game.getDirector();
		// Buttons creation
		var btnImg = new CAAT.Foundation.SpriteImage().initialize(
				_director.getImage('buttons'), 2, 3 
			); 
		
		//Reset btn creation and add Events
		var b1 = new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 4, 4, 5, 4, function(button) {
					game.resetBtn_click();
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][1]);	 
		
		parent.addChild( b1 );		
	}
	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	function __createIncDecButton( dashBG ){
		var _director = game.getDirector();
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( _director.getImage('incre_decre_btn'), 1, 2);
		var iniMagIncBtn = new CAAT.Foundation.Actor().
								setId('iniMagInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(275, 25);
		var iniMagDecBtn = new CAAT.Foundation.Actor().
								setId('iniMagDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(275, 54);
							
								
		dashBG.addChild(iniMagIncBtn);
		dashBG.addChild(iniMagDecBtn);
		
		
		//the increment and decrement buttons MouseDown functions are called when long press
		iniMagIncBtn.mouseDown = game.incDecMDown;
		iniMagDecBtn.mouseDown = game.incDecMDown;
		
		//the increment and decrement buttons MouseDown functions are called when long press
		iniMagIncBtn.mouseUp = game.incDecMUp;
		iniMagDecBtn.mouseUp = game.incDecMUp;
		
	}
	//=======================================================
	//Create Banner Container
	//=======================================================
	game.__createBannerContainer = function( dashBG ){
		var _director = game.getDirector();
		bannerContainer = new CAAT.Foundation.ActorContainer()
									.setSize(400, 70)
									.setLocation(0, 0)
									.setClip(true);
											
		bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( _director.getImage('banner'), 1, 1 )
		);
		bannerContainer.addChild( bannerImg );		
		dashBG.addChild( bannerContainer );
		//game.__bannerDisplay(0, 0, -500, -570, false);
		game.__bannerDisplay(0, 0, 0, 0, true);
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
        setDelayTime(0, 500);

        for(var i=0; i<bannerContentTxt[index].length; i++){
            if(this['bannerTxt_'+i]){
                bannerContainer.removeChild(this['bannerTxt_'+i]);
            }
            this['bannerTxt_'+i] = game.__addTextOnImage('black', bannerContentTxt[index][i], 'bold 14px Arial', 'center', _director );
            this['bannerTxt_'+i].setLocation(bannerTxtInitXPos, 12+(bannerTxtInitYPos*i));
            bannerContainer.addChild(this['bannerTxt_'+i]);
        }
        bannerContainer.addBehavior(pathBehaviour);
		game.lastDisplayedBanner = index;
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
	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	function __createDashBoardTxt( dashBG ){
		//Create textActor
		for(var i=0;i<dashBoardTxt.length; i++){			
			var thisTxt = game.__addTextOnImage(dashBoardTxt[i][6], dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], game.getDirector() );
			thisTxt.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4]);
			dashBG.addChild(thisTxt);
			game.dashBoardTxtArr.push(thisTxt);			
		}
	}
	//=======================================================
	//On clicking the increment/decrement of values
	//=======================================================
	game.incDecHandler = function( obj ) {
		//if paused then don't allow any increment/decrement of values
		if(game.gameStatus == 'paused') return false;
		var thisBtnId = obj.getId();
		var whichVal = thisBtnId.split('_')[0];
		if(thisBtnId == 'iniMagInc') {
			if( parseFloat(game.tesla + game.teslaStep) < game.teslaMax) {
				game.tesla = parseFloat(game.tesla) + parseFloat(game.teslaStep);
			}				
		} else if(thisBtnId == 'iniMagDec') {
			if((parseFloat(game.tesla) - parseFloat(game.teslaStep)) >= game.teslaMin) {
				game.tesla = parseFloat(game.tesla) - parseFloat(game.teslaStep);
			}
		}
		//update the new values in display
		game.tesla = parseFloat(game.tesla).toFixed(3);
		game.dashBoardTxtArr[6].setText(parseFloat(game.tesla).toFixed(3));
		if(game.tesla != game.teslaMax && game.tesla != game.teslaMin) { 
			//do some calculation for change in values
			game.valuesChanged(thisBtnId);
		}
	};
	
	//=======================================================
	//on increment/decrement button pressed
	//=======================================================
	game.incDecMDown = function(e){ 
		var scene = game.getScene();
		var incDecCount = 0;
		incDecTimer = scene.createTimer( 
						scene.time, 
						Number.MAX_VALUE, 
						null, 
						function(scene_time, time_time, time_instance){ 
							incDecCount++ 
							if(incDecCount%10 == 0){ 
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
	game.incDecMUp = function(e){ 
		incDecTimer.cancel(); 
	}
})();