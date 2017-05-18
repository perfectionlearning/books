//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {	
	
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		'0',  	'0'];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		'274',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well50',    		'650',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'284',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'384',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'484',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'584',  '0'];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		'700',  '0'];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		'530',  '23'];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		'530',  '48'];
		
	//dashBoard test
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['Rocket linear speed', 'bold 14px arial', 'left', 28, 25, 0, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['0.00', 				'bold 14px arial', 'left', 177, 25, 'rocketLTxt', '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 				'bold 14px arial', 'left', 214, 25, 1, '#fff'];		
		dashBoardTxt[dashBoardTxt.length] = ['Angular velocity', 	'bold 14px arial', 'left', 28, 50, 2, '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['0.00', 				'bold 14px arial', 'left', 177, 50, 'angleTxt', '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['rad/s', 				'bold 14px arial', 'left', 214, 50, 3, '#fff'];		
		dashBoardTxt[dashBoardTxt.length] = ['Distance of rocket from center', 		'bold 14px arial', 'left', 304, 25, 4, '#fff'];		
		dashBoardTxt[dashBoardTxt.length] = ['8.0', 				'bold 14px arial', 'left', 552, 25, 'disRTxt', '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['m', 					'bold 14px arial', 'left', 590, 25, 5, '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['Time for one revolution', 'bold 14px arial', 'left', 304, 50, 6, '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['14.0', 				'bold 14px arial', 'left', 552, 50, 'revolTxt', '#fff'];//initial speed
		dashBoardTxt[dashBoardTxt.length] = ['s', 					'bold 14px arial', 'left', 590, 50, 7, '#fff'];
		
	var bannerImg,
		bannerContainer,
		setBG, 
		dashBG;
	
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Change the rocket\'s distance from the center, or the', 'time for one revolution, and press GO to see how this', 'affects the speed and angular velocity.'];
		
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['620', '10', '35', '60'];//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position 
	
	var bannerContX1Pos = 0,
		bannerContX2Pos	= 0,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 20;
		
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
			setLocation(0, main.height);		
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
					setFillStyle('#b2e3ff').
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
					
		__createBannerContainer();
		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( director.getImage(dashBoardEle[i][0]), 1, 1 );
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
			var oActorTxt = game.__addTextOnImage(dashBoardTxt[i][6], dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], game._director );
			oActorTxt
				.setId()
				.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4]);
			dashBG.addChild(oActorTxt);
			game.oDashTxtArr.push(oActorTxt);
		}
	}
	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	function __createIncDecButton(){
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('incre_decre_btn'), 2, 1);
		var rocketdistanceIncBtn = new CAAT.Foundation.Actor().
								setId('rocketdistanceInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(520, 23);
		var rocketdistanceDecBtn = new CAAT.Foundation.Actor().
								setId('rocketdistanceDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(520, 32);
								
		var revolutionIncBtn = new CAAT.Foundation.Actor().
								setId('revolutionInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(520, 48);
		var revolutionDecBtn = new CAAT.Foundation.Actor().
								setId('revolutionDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(520, 57	);
								
		dashBG.addChild(rocketdistanceIncBtn);
		dashBG.addChild(rocketdistanceDecBtn);
		dashBG.addChild(revolutionIncBtn);
		dashBG.addChild(revolutionDecBtn);
				
		//the increment and decrement buttons MouseDown functions are called when long press
		rocketdistanceIncBtn.mouseDown = game.incDecMDown;
		rocketdistanceDecBtn.mouseDown = game.incDecMDown;
		revolutionIncBtn.mouseDown = game.incDecMDown;
		revolutionDecBtn.mouseDown = game.incDecMDown;
		
		//the increment and decrement buttons MouseDown functions are called when long press
		rocketdistanceIncBtn.mouseUp = game.incDecMUp;
		rocketdistanceDecBtn.mouseUp = game.incDecMUp;
		revolutionIncBtn.mouseUp = game.incDecMUp;
		revolutionDecBtn.mouseUp = game.incDecMUp;
		
		rocketdistanceIncBtn.mouseExit = function() {
			if(game.incDecTimer)	game.incDecTimer.cancel();	
			CAAT.setCursor("default");
		};
		
		rocketdistanceDecBtn.mouseExit = function() {
			if(game.incDecTimer)	game.incDecTimer.cancel();	
			CAAT.setCursor("default");
		};
		
		revolutionIncBtn.mouseExit = function() {
			if(game.incDecTimer)	game.incDecTimer.cancel();	
			CAAT.setCursor("default");
		};
		
		revolutionDecBtn.mouseExit = function() {
			if(game.incDecTimer)	game.incDecTimer.cancel();	
			CAAT.setCursor("default");
		};
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