//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {			
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		0,    0];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		330,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		340,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		360,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		460,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		560,  0];
		dashBoardEle[dashBoardEle.length] = ['well50b',    		630,  0];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		680,  0];
		dashBoardEle[dashBoardEle.length] = ['exponentbox',  	478,  33];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		508,  33];
	
	//dashBoard text
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['Vertical velocity', 		'bold 14px arial', 'left', 50, 	13, 1];
		dashBoardTxt[dashBoardTxt.length] = ['0.00 m/s', 					'bold 14px arial', 'left', 205, 13, 'verticalVelTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['', 					'bold 14px arial', 'left', 240, 13, 2];
		dashBoardTxt[dashBoardTxt.length] = ['Vertical acceleration', 	'bold 14px arial', 'left', 50,  36, 3];
		dashBoardTxt[dashBoardTxt.length] = ['0.00', 					'bold 14px arial', 'left', 205, 36, 'verticalAccTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 					'bold 14px arial', 'left', 240, 36, 4];
		dashBoardTxt[dashBoardTxt.length] = ['2', 						'bold 10px arial', 'left', 265, 35, 5];
	
		dashBoardTxt[dashBoardTxt.length] = ['Engine A force', 			'bold 14px arial', 'left', 50, 60, 6];
		dashBoardTxt[dashBoardTxt.length] = ['35,600', 					'bold 14px arial', 'left', 205, 60, 7];
		dashBoardTxt[dashBoardTxt.length] = ['N', 						'bold 14px arial', 'left', 260, 60, 8];
		
		dashBoardTxt[dashBoardTxt.length] = ['Engine B force', 			'bold 14px arial', 'left', 360, 35, 9];
		dashBoardTxt[dashBoardTxt.length] = ['34,500', 					'bold 14px arial', 'left', 508, 35, 'BForceTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['N', 						'bold 14px arial', 'left', 570, 35, 10];
		
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Set the force of engine B so the module', 'travels straight down, and press GO.'];
		bannerContentTxt[bannerContentTxt.length] = ['You need to try again.', 'Press RESET to start over.'];
		bannerContentTxt[bannerContentTxt.length] = ['That\'s right!', 'You entered the correct force.'];
	
	//configure buttons X, Y Position
	
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['600', '10', '35', '60'];//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position 
	
	var bannerContX1Pos = -3,
		bannerContX2Pos	= -3,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 18;
	
	var panelHeight = 100;
	
	var bannerImg,
		bannerContainer,
		setBG, 
		dashBG;
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
			var oDashBoradTxt = game.__addTextOnImage('#FFF', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], game._director );
			oDashBoradTxt.
				setId(dashBoardTxt[i][5]).
				setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4]);
			dashBG.addChild(oDashBoradTxt);	
			
			//dashborad text id, store in to an array --> from get the Id and set the value to the
			//related text id
			game.oDashTxtArr.push(oDashBoradTxt);
		}
		game.verticalVelocity = game.oDashTxtArr[1].text;
		game.verticalAccel = game.oDashTxtArr[4].text;
		var force=game.oDashTxtArr[11].text;
		game.BForce=Number(force.split(',')[0] + force.split(',')[1]); 
	}
	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	function __createIncDecButton(){
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('incre_decre_btn'), 2, 1);
		var iniVelIncBtn = new CAAT.Foundation.Actor().
								setId('iniVelInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){//click handler
									//game.incDecHandler(this);
								}).setLocation(475, 33);
		var iniVelDecBtn = new CAAT.Foundation.Actor().
								setId('iniVelDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){//click handler
									//game.incDecHandler(this);
								}).setLocation(475, 42);
								
		dashBG.addChild(iniVelIncBtn);
		dashBG.addChild(iniVelDecBtn);
		
		//the increment and decrement buttons MouseDown functions are called when long press
		iniVelIncBtn.mouseDown = game.incDecMDown;
		iniVelDecBtn.mouseDown = game.incDecMDown;
		
		//the increment and decrement buttons MouseDown functions are called when long press
		iniVelIncBtn.mouseUp = game.incDecMUp;
		iniVelDecBtn.mouseUp = game.incDecMUp;
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
		
		bannerContainer.addChild(bannerImg);
		dashBG.addChild( bannerContainer);
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

        for(var i=0;i<bannerContentTxt[index].length;i++){
            if(this['bannerTxt_'+i]){
                bannerContainer.removeChild(this['bannerTxt_'+i]);
            }
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