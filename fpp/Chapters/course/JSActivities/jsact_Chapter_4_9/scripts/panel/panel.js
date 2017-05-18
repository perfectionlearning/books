//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {	
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		0,    0];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['dividerPlain',   	40,  0];
		dashBoardEle[dashBoardEle.length] = ['bananaicon',   	95,  3];
		dashBoardEle[dashBoardEle.length] = ['grid',   			120,  25];
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		330,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		340,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		360,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		460,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		550,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		610,  0];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		710,  0];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		505,  25];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		505,  45];
	
	//dashBoard text
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['v', 				'italic 14px arial', 'left', 108, 28, 8];
		dashBoardTxt[dashBoardTxt.length] = ['a', 				'italic 14px arial', 'left', 108, 55, 8];
		dashBoardTxt[dashBoardTxt.length] = ['Vertical', 		'13px arial', 'left', 125, 5, 8];
		dashBoardTxt[dashBoardTxt.length] = ['--', 				'bold 14px arial', 'left', 140, 28, 8];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 			'bold 14px arial', 'left', 175, 28, 8];
		dashBoardTxt[dashBoardTxt.length] = ['--', 				'bold 14px arial', 'left', 140, 57, 8];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 			'bold 14px arial', 'left', 175, 57, 8];
		dashBoardTxt[dashBoardTxt.length] = ['2', 				'10px arial', 'left', 198, 53, 12];
		dashBoardTxt[dashBoardTxt.length] = ['Horizontal', 		'13px arial', 'left', 210, 5, 8];
		dashBoardTxt[dashBoardTxt.length] = ['--', 				'bold 14px arial', 'left', 225, 28, 8];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 			'bold 14px arial', 'left', 255, 28, 8];
		dashBoardTxt[dashBoardTxt.length] = ['--', 				'bold 14px arial', 'left', 225, 57, 8];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 			'bold 14px arial', 'left', 255, 57, 8];
		dashBoardTxt[dashBoardTxt.length] = ['2', 				'10px arial', 'left', 278, 54, 8];
		
		dashBoardTxt[dashBoardTxt.length] = ['Angle', 			'bold 14px arial', 'left', 373, 25, 8];
		dashBoardTxt[dashBoardTxt.length] = ['Banana velocity', 'bold 14px arial', 'left', 373, 50, 9];
		dashBoardTxt[dashBoardTxt.length] = ['degrees', 		'bold 14px arial', 'left', 565, 27, 10];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 			'bold 14px arial', 'left', 565, 50, 11];
		dashBoardTxt[dashBoardTxt.length] = ['-8.0', 			'bold 13px arial', 'left', 528, 28, 'angleTxt'];//initial Amplitude id 
		dashBoardTxt[dashBoardTxt.length] = ['15.0', 			'bold 13px arial', 'left', 528, 48, 'initVelTxt'];//Period id 
		
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Enter the angle and velocity to launch', 'the banana and press GO.'];
		bannerContentTxt[bannerContentTxt.length] = ['Sorry, the banana missed the professor.', 'Press RESET to try again.'];
		bannerContentTxt[bannerContentTxt.length] = ['Nice shot!', 'The professor caught the banana.'];
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['630', '6', '31', '56'];//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position 
	
	var bannerContX1Pos = 0,
		bannerContX2Pos	= 0,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 18;
	var bannerContainer,
		bannerImg,
		dashBG,
		setBG;
		
	var panelHeight = 100;
	//=======================================================
	// Create the main works area and the panel
	//=======================================================
	game.createPanels = function(director, scene)
	{
		// Create the main area
		var main = createMain( director.width, director.height - panelHeight, director );
		main.
			setLocation(0, 0);
		scene.addChild(main);

		//Create the panel container
	
		var panel = createPanel( director.width, panelHeight, director );
			panel.
				setLocation(0, 500);		
			scene.addChild(panel);
	
	
		return main;
	}

	//=======================================================
	//Create Main Display Panel
	//=======================================================
	function createMain( pw, ph, director ){
		setBG = new CAAT.Foundation.ActorContainer().
					setPreferredSize( pw, ph ).
					setBounds( 0, 0, pw, ph ).
					setClip(true);
					
		//game.__createMainImgScene( setBG );
		
		return setBG;
	}
	//=======================================================
	//Create Bottom dashboard 
	//=======================================================
	function createPanel( pw, ph, director ){
		dashBG = new CAAT.Foundation.ActorContainer().
					setPreferredSize( pw, ph ).
					setBounds( 0, 0, pw, ph ).
					setClip(false);

		__createBannerContainer();//banner show on the dash img (like z-index)
					
		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( game._director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.			
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);
			
			dashBG.addChild(oActor);			
		}			
		
		__createDashBoardTxt();
		__createDashBoardButton();	
		__createIncDecButton();
		return dashBG;
	}

	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	function __createDashBoardTxt(){
		//Create textActor
		for(var i=0;i<dashBoardTxt.length; i++){			
			var oDashBoradTxt = game.__addTextOnImage('white', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], game._director );
			oDashBoradTxt.
				setId(dashBoardTxt[i][5]).
				setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4]);
			dashBG.addChild(oDashBoradTxt);

			//dashborad text id, store in to an array --> from get the Id and set the value to the
			//related text id

			game.oDashTxtArr.push(oDashBoradTxt);
		}
	}
	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	function __createIncDecButton(){
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('incre_decre_btn'), 2, 1);
		var accIncBtn = new CAAT.Foundation.Actor().
								setId('accInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									//game.incDecHandler(this);
								}).setLocation(500, 25);
		var accDecBtn = new CAAT.Foundation.Actor().
								setId('accDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									//game.incDecHandler(this);
								}).setLocation(500, 34);
		var iniVelIncBtn = new CAAT.Foundation.Actor().
								setId('iniVelInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									//game.incDecHandler(this);
								}).setLocation(500, 45);
		var  iniVelDecBtn= new CAAT.Foundation.Actor().
								setId('iniVelDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									//game.incDecHandler(this);
								}).setLocation(500, 54);
								
		dashBG.addChild(iniVelIncBtn);
		dashBG.addChild(iniVelDecBtn);
		dashBG.addChild(accIncBtn);
		dashBG.addChild(accDecBtn);
		
		//the increment and decrement buttons MouseDown functions are called when long press
		iniVelIncBtn.mouseDown = game.incDecMDown;
		iniVelDecBtn.mouseDown = game.incDecMDown;
		accIncBtn.mouseDown = game.incDecMDown;
		accDecBtn.mouseDown = game.incDecMDown;
		
		//the increment and decrement buttons MouseDown functions are called when long press
		iniVelIncBtn.mouseUp = game.incDecMUp;
		iniVelDecBtn.mouseUp = game.incDecMUp;
		accIncBtn.mouseUp = game.incDecMUp;
		accDecBtn.mouseUp = game.incDecMUp;
	}
	//=====================================================
	//create Dashboard Button Container
	//=====================================================
	function __createDashBoardButton(){
		// Buttons creation
		var btnImg = new CAAT.Foundation.SpriteImage().initialize(
				game._director.getImage('buttons'), 2, 3 
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
	function __createBannerContainer(){
		bannerContainer = new CAAT.Foundation.ActorContainer().
									setSize(400, 70);
											
		bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('banner'), bannerRows, bannerCols )
		);
		
		bannerContainer.addChild( bannerImg );
		dashBG.addChild( bannerContainer );
		game.__bannerDisplay(0, 0, -70, 0, false);
	}	
	//=======================================================
    //Banner Display Container
    //=======================================================
    game.__bannerDisplay = function( index, bannerBGIndex, y1, y2, flag ){
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

        for(var j=0; j<=bannerContainer.getNumChildren(); j++){
            bannerContainer.removeChild(this['bannerTxt_'+j]);
        }
		
        for(var i=0;i<bannerContentTxt[index].length;i++){
            this['bannerTxt_'+i] = game.__addTextOnImage('#000', bannerContentTxt[index][i], 'Bold 14px Arial', 'center', game._director );
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
})();