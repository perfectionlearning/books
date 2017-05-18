//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {	
	var dashBoardEle = [];	
		dashBoardEle[dashBoardEle.length] = ['divider',    '20',  '0'];//image_id, image_X_Position, image_Y_Position
		dashBoardEle[dashBoardEle.length] = ['well100b',   '640', '0'];
		dashBoardEle[dashBoardEle.length] = ['wellleft2',  '640', '0'];
		dashBoardEle[dashBoardEle.length] = ['wellright2', '735', '0'];
		
	//dashBoard text
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['Black', 'bold 14px arial', 'left', 70,   30];//Text, font_style, alignment, xPos, yPos
		dashBoardTxt[dashBoardTxt.length] = ['Brown', 'bold 14px arial', 'left', 190,  30];
		dashBoardTxt[dashBoardTxt.length] = ['Tan',   'bold 14px arial', 'left', 305,  30];
		dashBoardTxt[dashBoardTxt.length] = ['White', 'bold 14px arial', 'left', 425,  30];
		dashBoardTxt[dashBoardTxt.length] = ['Gray',  'bold 14px arial', 'left', 555,  30];
		
		dashBoardTxt[dashBoardTxt.length] = ['v = ',  'bold italic 14px arial', 'left', 50,   50];
		dashBoardTxt[dashBoardTxt.length] = ['v = ',  'bold italic 14px arial', 'left', 175,  50];
		dashBoardTxt[dashBoardTxt.length] = ['v = ',  'bold italic 14px arial', 'left', 290,  50];
		dashBoardTxt[dashBoardTxt.length] = ['v = ',  'bold italic 14px arial', 'left', 415,  50];
		dashBoardTxt[dashBoardTxt.length] = ['v = ',  'bold italic 14px arial', 'left', 535,  50];
		
		dashBoardTxt[dashBoardTxt.length] = ['0.0 ',  'bold 14px arial', 'left', 75,   51];//Black rabbit velocity id = 10
		dashBoardTxt[dashBoardTxt.length] = ['0.0 ',  'bold 14px arial', 'left', 200,  51];//Brown rabbit velocity id = 11
		dashBoardTxt[dashBoardTxt.length] = ['0.0 ',  'bold 14px arial', 'left', 315,  51];//Tan rabbit velocity id   = 12
		dashBoardTxt[dashBoardTxt.length] = ['0.0 ',  'bold 14px arial', 'left', 440,  51];//White rabbit velocity id = 13
		dashBoardTxt[dashBoardTxt.length] = ['0.0 ',  'bold 14px arial', 'left', 560,  51];//Gray rabbit velocity id  = 14
		
		dashBoardTxt[dashBoardTxt.length] = ['m/s ',  'bold 14px arial', 'left', 103,  51];
		dashBoardTxt[dashBoardTxt.length] = ['m/s ',  'bold 14px arial', 'left', 228,  51];
		dashBoardTxt[dashBoardTxt.length] = ['m/s ',  'bold 14px arial', 'left', 343,  51];
		dashBoardTxt[dashBoardTxt.length] = ['m/s ',  'bold 14px arial', 'left', 468,  51];
		dashBoardTxt[dashBoardTxt.length] = ['m/s ',  'bold 14px arial', 'left', 588,  51];
	
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Press GO and observe which rabbits', 'have non-constant acceleration.'];
		bannerContentTxt[bannerContentTxt.length] = ['Drag tags to the rabbits', 'with non-constant acceleration.'];
		bannerContentTxt[bannerContentTxt.length] = ["Sorry, those weren't the faulty rabbits.", "Press RESET to try again."];
		bannerContentTxt[bannerContentTxt.length] = ["Congratulations, you found", "the faulty rabbits."];
	
	//button X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['657', '10', '36', '62'];//common XPosiotn, Go btn button_1 Y Position, Reset btn button_2 Y Position, Pause btn button_3 Y Position 
	
	var bannerContX1Pos = -1,
		bannerContX2Pos	= -1,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 20;
		
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
			setLocation(0, main.height);
		scene.addChild(panel);

		return main;
	}

	//=======================================================
	//Create Main Display Panel
	//=======================================================
	function createMain( pw, ph, director )
	{
		setBG = new CAAT.Foundation.ActorContainer().setBackgroundImage(director.getImage('bg'), true);
		//setBG.mouseMove = mouseMoveHandler1;
				
		return setBG;
	}
	//Mousemove handler
	/*function mouseMoveHandler1(mouseEvent) {
		game.dragX= ((mouseEvent.screenPoint.x*100)>>0)/100;
		game.dragY= ((mouseEvent.screenPoint.y*100)>>0)/100;		
	}*/	
	//=======================================================
	//Create Bottom dashboard 
	//=======================================================
	function createPanel( pw, ph, director )
	{		
		dashBG = new CAAT.Foundation.ActorContainer().
			setBackgroundImage(
				new CAAT.SpriteImage().initialize(director.getImage('dashBG'), 1, 1), true
			).setClip(true);
		
		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( director.getImage(dashBoardEle[i][0]), 1, 1 );		
			oActor.			
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);
			
			dashBG.addChild(oActor);			
		}
				
		__createDashBoardTxt();
		__createBannerContainer();
		__createDashBoardButton();		
		return dashBG;
	}
	
	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	function __createDashBoardTxt(){
		//Create textActor
		for(var i=0;i<dashBoardTxt.length; i++){			
			var oActorTxt = game.__addTextOnImage('#ffffff', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], game._director );
				oActorTxt.
					setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4]);
			dashBG.addChild(oActorTxt);
			game.oDashTxtArr.push(oActorTxt);
		}
	}
	//=====================================================
	//create Dashboard Buttons Container
	//=====================================================
	function __createDashBoardButton(){
		// Buttons creation
		var btnImg= new CAAT.Foundation.SpriteImage().initialize(
				game._director.getImage('buttons'), 2, 3 
			); 
		//Go btn creation and add Events
		var b1= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 0, 0, 1, 0, function(button) {					
					game.gobtnClickHandler();					
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
			new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('banner'), 1, 3 )
		);
				
		bannerContainer.addChild( bannerImg );	
		
		setBG.addChild( bannerContainer );
		game.__bannerDisplay(0, 0, -70, 0, true );
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
            this['bannerTxt_'+i] = game.__addTextOnImage('#000000', bannerContentTxt[index][i], 'bold 15px arial', 'center', game._director );
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
					setLineWidth( 1 ).
                    calcTextSize( _director ).
                    setTextFillStyle( txtColor );                   
	}
	
})();
