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
		

    var buttonBoardEle = [];	
    	buttonBoardEle[buttonBoardEle.length] = ['incrBgMed',  		505,  528];
		buttonBoardEle[buttonBoardEle.length] = ['incrBgMed',  		505,  548];
		
		
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
		
		dashBoardTxt[dashBoardTxt.length] = ['Angle', 			'bold 14px arial', 'left', 373, 28, 8];
		dashBoardTxt[dashBoardTxt.length] = ['Banana velocity', 'bold 14px arial', 'left', 373, 53, 9];
		dashBoardTxt[dashBoardTxt.length] = ['degrees', 		'bold 14px arial', 'left', 565, 30, 10];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 			'bold 14px arial', 'left', 565, 53, 11];
		
		
		
	var IncDecValDisp = [];		
		IncDecValDisp[IncDecValDisp.length] = ['15.0', 			'bold 13px arial', 'left', 528, 531, 'initVelTxt'];//initial Amplitude id 
		IncDecValDisp[IncDecValDisp.length] = ['15.0', 			'bold 13px arial', 'left', 528, 551, 'accTxt'];//Period id 
		
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Enter the angle and velocity to launch', 'the banana and press GO.'];
		bannerContentTxt[bannerContentTxt.length] = ['Sorry, the banana missed the professor.', 'Press RESET to try again.'];
		bannerContentTxt[bannerContentTxt.length] = ['Nice shot!', 'The professor caught the banana.'];
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['630', '506', '531', '556'];//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position 
	
	var bannerContX1Pos = -1,
		bannerContX2Pos	= -1,
		bannerRows = 1, 
		bannerCols = 3,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 16;
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
	
		//Create the panel container
		var panel = createPanel( director.width, panelHeight, director );
		panel.
			setLocation(0, 500);		
		scene.addChild(panel);
		
			// Create the main area
		var main = createMain( director.width, director.height , director );
		main.
			setLocation(0, 0);
		scene.addChild(main);


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

		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( game._director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.			
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);
			
			dashBG.addChild(oActor);			
		}		
	
		__createDashBoardTxt();
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
	
	game._incDecBg = function(){
		for(var i=0;i<buttonBoardEle.length; i++){			
		var oActor = game.__addImageOnScene( game._director.getImage(buttonBoardEle[i][0]), 1, 1 );
			oActor.			
				setLocation(buttonBoardEle[i][1], buttonBoardEle[i][2]);
			
			game._scene.addChild(oActor);	
			//dashborad text id, store in to an array --> from get the Id and set the value to the
			//related text id

			//game.onIncDecArr.push(oDashBoradTxt);
		}
	}
	
	//To display Inc and Dec text
	
	game._IncDecDispFun = function(){
		
		//Create textActor
		for(var i=0;i<IncDecValDisp.length; i++){			
			var oDashBoradTxt = game.__addTextOnImage('white', IncDecValDisp[i][0], IncDecValDisp[i][1], IncDecValDisp[i][2], game._director );
			oDashBoradTxt.
				setId(IncDecValDisp[i][5]).
				setLocation(IncDecValDisp[i][3], IncDecValDisp[i][4]);
			game._scene.addChild(oDashBoradTxt);

			//dashborad text id, store in to an array --> from get the Id and set the value to the
			//related text id

			game.IncDecValArray.push(oDashBoradTxt);
		}
		
		
	}
	
	
	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	game.__createIncDecButton = function(){
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('incre_decre_btn'), 2, 1);
		var accIncBtn = new CAAT.Foundation.Actor().
								setId('accInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(500, 528);
		var accDecBtn  = new CAAT.Foundation.Actor().
								setId('accDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(500, 537);
		var iniVelIncBtn = new CAAT.Foundation.Actor().
								setId('iniVelInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(500, 548);
		var iniVelDecBtn= new CAAT.Foundation.Actor().
								setId('iniVelDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(500, 557);
								
		game._scene.addChild(iniVelIncBtn);
		game._scene.addChild(iniVelDecBtn);
		game._scene.addChild(accIncBtn);
		game._scene.addChild(accDecBtn);
		
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
	game.__createDashBoardButton = function(){
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
		
		game._scene.addChild( b1 );
		game._scene.addChild( b2 );
		game._scene.addChild( b3 );		
	}
	//=======================================================
	//Create Banner Container
	//=======================================================
	game.__createBannerContainer = function(){
		bannerContainer = new CAAT.Foundation.ActorContainer().
									setSize(400, 70);
											
		bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('banner'), bannerRows, bannerCols )
		);
		
		bannerContainer.addChild( bannerImg );
		setBG.addChild( bannerContainer );
		game.__bannerDisplay(0, 0, 0, -70, false);
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