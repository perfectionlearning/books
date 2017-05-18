//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {		
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		'0',  	'0'];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['divider',   		'88',  	'0']
		dashBoardEle[dashBoardEle.length] = ['divider',   		'230',  	'0']
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		'380',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'390',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'490',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'590',  '0'];
		//dashBoardEle[dashBoardEle.length] = ['well100',    		'700',  '0'];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		'680',  '0'];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		'470',  '30'];
		dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		'470',  '50'];		
		dashBoardEle[dashBoardEle.length] = ['Blue',  		'102',  '30'];		
		dashBoardEle[dashBoardEle.length] = ['Blue',  		'252',  '30'];		
		dashBoardEle[dashBoardEle.length] = ['Blue',  		'414',  '30'];
		dashBoardEle[dashBoardEle.length] = ['Red',  		'102',  '50'];				
		dashBoardEle[dashBoardEle.length] = ['Red',  		'252',  '50'];			
		dashBoardEle[dashBoardEle.length] = ['Red',  		'414',  '50'];						
	
	//dashBoard test
	var dashBoardTxt = [];
		
		dashBoardTxt[dashBoardTxt.length] = ['Velocity', 	'bold 14px Arial',  'left', 110,  10, 1];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['- -', 		 	'bold 14px Arial',  'left', 140,  30, 'VelBlueTxt'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 		 	'bold 14px Arial',  'left', 180,  30, 2];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['- -', 		 	'bold 14px Arial',  'left', 140,  50, 'VelRedTxt'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 		 	'bold 14px Arial',  'left', 180,  50, 2];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['Momentum', 		 	'bold 14px Arial',  'left', 250,  10, 3];
		dashBoardTxt[dashBoardTxt.length] = ['- -', 		 	'bold 14px Arial',  'left', 280,  30, 'momBlueTxt'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['kg.m/s', 		 	'bold 14px Arial',  'left', 320,  30, 4];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['- -', 		 	'bold 14px Arial',  'left', 280,  50, 'momRedTxt'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['kg.m/s', 		 	'bold 14px Arial',  'left', 320,  50, 4];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['Initial velocity', 'bold 14px Arial',  'left', 405,  10, 3];
		dashBoardTxt[dashBoardTxt.length] = ['0.3', 		 	'bold 14px Arial',  'left', 480,  31, 'iniVelBlueTxt'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 		 	'bold 14px Arial',  'left', 535,  30, 4];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['0.0', 		 	'bold 14px Arial',  'left', 480,  51, 'iniVelRedTxt'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 		 	'bold 14px Arial',  'left', 535,  50, 4];//Text, font_style, alignment, xPos, yPos, id
				
	var bannerImg,
		bannerContainer,
		setBG, 
		dashBG;
	
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Does the momentum stay the same', 'or change after the collision? Try setting', 'different initial velocities and press GO.'];
			
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['590', '10', '35', '60'];//common XPosiotn, button_1 Y Position, button_2 Y Position
	
	var bannerContX1Pos = -2,
		bannerContX2Pos	= -2,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 18;
	
	var panelHeight = 100;
	
	// Create the main works area and the panel
	//=======================================================
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
					setFillStyle('#c3c3c3').
					setClip(false);
		
		return setBG;
	}	
	//=======================================================
	//Create Bottom dashboard 
	//=======================================================
	function createPanel( pw, ph, director ){
		dashBG = new CAAT.Foundation.ActorContainer().
					setPreferredSize( pw, ph ).
					setBounds( 0, 0, pw, ph ).
					//setFillStyle('#DDDDDD').
					setClip(false);
					
			
			
		__createBannerContainer();
		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.			
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);			
			dashBG.addChild(oActor);			
		}
				
		__createDashBoardButton();
		__createDashBoardTxt();
		
		__createIncDecButton();		
		return dashBG;
	}
	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	function __createDashBoardTxt(){
		//Create textActor
		for(var i=0;i<dashBoardTxt.length; i++){			
			var oActorTxt = game.__addTextOnImage('#fff', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], game._director );
			oActorTxt.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4]);
			
			dashBG.addChild(oActorTxt);
			game.oDashTxtArr.push(oActorTxt);
		}
	}
	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	function __createIncDecButton(){
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('incre_decre_btn'), 2, 1);
		var iniBlueIncBtn = new CAAT.Foundation.Actor().
								setId('iniBlueInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(450, 30);
		var iniBlueDecBtn = new CAAT.Foundation.Actor().
								setId('iniBlueDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(450, 39);
		var iniRedIncBtn = new CAAT.Foundation.Actor().
								setId('iniRedInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(450, 50);
		var iniRedDecBtn = new CAAT.Foundation.Actor().
								setId('iniRedDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(450, 59);						
								
		dashBG.addChild(iniBlueIncBtn);
		dashBG.addChild(iniBlueDecBtn);
		dashBG.addChild(iniRedIncBtn);
		dashBG.addChild(iniRedDecBtn);
				
		//the increment and decrement buttons MouseDown functions are called when long press
		iniBlueIncBtn.mouseDown = game.incDecMDown;
		iniBlueDecBtn.mouseDown = game.incDecMDown;
		iniRedIncBtn.mouseDown = game.incDecMDown;
		iniRedDecBtn.mouseDown = game.incDecMDown;
		
		//the increment and decrement buttons MouseDown functions are called when long press
		iniBlueIncBtn.mouseUp = game.incDecMUp;
		iniBlueDecBtn.mouseUp = game.incDecMUp;
		iniRedIncBtn.mouseUp  = game.incDecMUp;
		iniRedDecBtn.mouseUp  = game.incDecMUp;
		
		//cancel the timer when mouse exit from the 
		//increment/decrement buttons
		iniBlueIncBtn.mouseExit = function(){
			if(game.incDecTimer){
				game.incDecTimer.cancel();
			}
		}
		iniBlueDecBtn.mouseExit = function(){
			if(game.incDecTimer){
				game.incDecTimer.cancel();
			}
		}
		iniRedIncBtn.mouseExit = function(){
			if(game.incDecTimer){
				game.incDecTimer.cancel();
			}
		}
		iniRedDecBtn.mouseExit = function(){
			if(game.incDecTimer){
				game.incDecTimer.cancel();
			}
		}
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
            this['bannerTxt_'+i] = game.__addTextOnImage('#000', bannerContentTxt[index][i], 'bold 14px arial', 'center', game._director );
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
                    setTextFillStyle( txtColor ).		
                    setOutline( false );                    
	}
})();