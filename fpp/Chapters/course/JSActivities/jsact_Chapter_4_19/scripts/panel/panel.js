//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {			
	var dashBoardEle = [];
		 dashBoardEle[dashBoardEle.length] = ['dashBG',   			0,    0];//image_id, image_X_Position, image_Y_Position	
		 dashBoardEle[dashBoardEle.length] = ['grid',   			120,  25];
		// dashBoardEle[dashBoardEle.length] = ['smallhandLt',   			312,  -65];
		 //dashBoardEle[dashBoardEle.length] = ['smallhandRt',   			418,  -65];		
		 dashBoardEle[dashBoardEle.length] = ['divider',   			16,   0];
		 dashBoardEle[dashBoardEle.length] = ['wellleft',   		350,  0];
		 dashBoardEle[dashBoardEle.length] = ['well100',    		360,  0];
		 dashBoardEle[dashBoardEle.length] = ['well100',    		460,  0];
		 dashBoardEle[dashBoardEle.length] = ['well100',    		560,  0];
		 dashBoardEle[dashBoardEle.length] = ['well50',    			650,  0];
		 dashBoardEle[dashBoardEle.length] = ['wellright',  		700,  0];
		 dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		508,  30];
		 dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		508,  50];
		 dashBoardEle[dashBoardEle.length] = ['smalljuggballred',  		100,  8];
		 //dashBoardEle[dashBoardEle.length] = ['banner',  		525,  -118];
	
	//dashBoard text
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['Vertical', 			'bold 14px arial', 'left', 122, 	6, 1];
		dashBoardTxt[dashBoardTxt.length] = ['Horizontal', 			'bold 14px arial', 'left', 204, 6, 2];
		dashBoardTxt[dashBoardTxt.length] = ['v', 					'italic bold 14px arial', 'left', 106, 30, 3];
		dashBoardTxt[dashBoardTxt.length] = ['a', 					'italic bold 14px arial', 'left', 106,  55, 4];
		dashBoardTxt[dashBoardTxt.length] = ['- -', 					'bold 14px arial', 'left', 132, 30, 'verticalVelTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['- -', 					'bold 14px arial', 'left', 132, 57, 'verticalAccTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 				'bold 14px arial', 'left', 174, 32, 5];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 				'bold 14px arial', 'left', 174, 57, 6];
		dashBoardTxt[dashBoardTxt.length] = ['- -', 					'bold 14px arial', 'left', 216, 30, 'horizontalVelTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['- -', 					'bold 14px arial', 'left', 216, 57, 'horizontalAccTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 				'bold 14px arial', 'left', 254, 32, 7];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 				'bold 14px arial', 'left', 254, 57, 8];
		dashBoardTxt[dashBoardTxt.length] = ['2', 					'10px arial', 'left', 195, 50, 9];
		dashBoardTxt[dashBoardTxt.length] = ['2', 					'10px arial', 'left', 275, 50, 10];
		dashBoardTxt[dashBoardTxt.length] = ['Initial y velocity', 	'bold 14px arial', 'left', 384, 30, 11];
		dashBoardTxt[dashBoardTxt.length] = ['Initial x velocity', 	'bold 14px arial', 'left', 384, 53, 12];
		dashBoardTxt[dashBoardTxt.length] = ['0.0', 				'bold 14px arial', 'left', 530, 32, 'initialyVelTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['0.0', 				'bold 14px arial', 'left', 530, 52, 'initialxVelTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 				'bold 14px arial', 'left', 566, 31, 13];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 				'bold 14px arial', 'left', 566, 51, 14];
	/*banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Set the initial x, y', 'velocity to juggle from', 'one hand to another.', 'Press GO. Press RESET', 'to try new values.'];*/
		
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['610', '506', '530', '555'];//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position 
	
	
	
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
		
		//Create the panel container
		var panel = createPanel( director.width, panelHeight, director );
		panel.
			setLocation(0, 500);		
		scene.addChild(panel);

			// Create the main area
		var main = createMain( director.width, director.height, director );
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

		//__createBannerContainer();//banner show on the dash img (like z-index)
		
		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( game._director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.			
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);
			
			dashBG.addChild(oActor);			
		}			
		__createDashBoardTxt();
		//__createDashBoardButton();	
		//__createIncDecButton();
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
		game.verticalVelvalue = game.oDashTxtArr[4].text;
		game.verticalAccvalue = game.oDashTxtArr[5].text;
		game.horizontalVelvalue = game.oDashTxtArr[8].text;
		game.horizontalAccvalue = game.oDashTxtArr[9].text;
		game.initialyVelvalue = game.oDashTxtArr[16].text;
		game.initialxVelvalue = game.oDashTxtArr[17].text;
		
		//console.log([game.verticalVelocity, game.verticalAccel, game.BForce]);
	}
	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	game.__createIncDecButton=function (){
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('incre_decre_btn'), 2, 1);
		var iniyVelIncBtn = new CAAT.Foundation.Actor().
								setId('yVelInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									//game.incDecHandler(this);
								}).setLocation(500, 530);
		var iniyValDecBtn = new CAAT.Foundation.Actor().
								setId('yVelDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									//game.incDecHandler(this);
								}).setLocation(500, 539);
		var inixVelIncBtn = new CAAT.Foundation.Actor().
								setId('xVelInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									//game.incDecHandler(this);
								}).setLocation(500, 550);
		var inixValDecBtn = new CAAT.Foundation.Actor().
								setId('xVelDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									//game.incDecHandler(this);
								}).setLocation(500, 559);						
								
		game.mainPanel .addChild(iniyVelIncBtn);
		game.mainPanel .addChild(iniyValDecBtn);
		game.mainPanel .addChild(inixVelIncBtn);
		game.mainPanel .addChild(inixValDecBtn);
		
		//the increment and decrement buttons MouseDown functions are called when long press
		iniyVelIncBtn.mouseDown = game.incDecMDown;
		iniyValDecBtn.mouseDown = game.incDecMDown;
		inixVelIncBtn.mouseDown = game.incDecMDown;
		inixValDecBtn.mouseDown = game.incDecMDown;
		
		//the increment and decrement buttons MouseDown functions are called when long press
		iniyVelIncBtn.mouseUp = game.incDecMUp;
		iniyValDecBtn.mouseUp = game.incDecMUp;
		inixVelIncBtn.mouseUp = game.incDecMUp;
		inixValDecBtn.mouseUp = game.incDecMUp;
		
		//on mouse exit from the button do the same thing as that of mouse up
		iniyVelIncBtn.mouseExit = function() {
			if(game.incDecTimer)	game.incDecTimer.cancel();	
			CAAT.setCursor("default");
		};
		iniyValDecBtn.mouseExit = function() {
			if(game.incDecTimer)	game.incDecTimer.cancel();	
			CAAT.setCursor("default");
		};
		inixVelIncBtn.mouseExit = function() {
			if(game.incDecTimer)	game.incDecTimer.cancel();
			CAAT.setCursor("default");
		};
		inixValDecBtn.mouseExit = function() {
			if(game.incDecTimer)	game.incDecTimer.cancel();
			CAAT.setCursor("default");
		};
	}
	//=====================================================
	//create Dashboard Button Container
	//=====================================================
	game.__createDashBoardButton=function(){
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
		
		game.mainPanel .addChild( b1 );
		game.mainPanel .addChild( b2 );
		game.mainPanel .addChild( b3 );		
	}
	//=======================================================
	//Create Banner Container
	//=======================================================
	function __createBannerContainer(){
		bannerContainer = new CAAT.Foundation.ActorContainer().
									setSize(400, 70);
											
		bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('banner'), 1, 1 )
		);
		
		bannerContainer.addChild( bannerImg );
		dashBG.addChild( bannerContainer );
		game.__bannerDisplay(0, 0, -120, 0, false);
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