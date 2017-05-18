//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {
	var incDecTimer = null;
	game.dashBoardTxtArr = [];
	game.dashBoardEleArr = [];
	game.sliderMidX = 429;
	game.sliderX = 265;
	game.sliderKnobInitX = 465;
	//declaration start
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   	  0,  0];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['well100b',     330,  0];
		dashBoardEle[dashBoardEle.length] = ['well100b',     230,  0];
		dashBoardEle[dashBoardEle.length] = ['well50b',    	680,  0];
		dashBoardEle[dashBoardEle.length] = ['well100b',    	430,  0];
		dashBoardEle[dashBoardEle.length] = ['well100b',    	530,  0];
		dashBoardEle[dashBoardEle.length] = ['well50b',    	630,  0];
		dashBoardEle[dashBoardEle.length] = ['well100b',    	130,  0];
		dashBoardEle[dashBoardEle.length] = ['well100b',    	30,  0];
		dashBoardEle[dashBoardEle.length] = ['wellleft2',  	 30,  0];
		dashBoardEle[dashBoardEle.length] = ['wellright2',  	730,  0];	
		dashBoardEle[dashBoardEle.length] = ['s11Lbl',  	55,  20];
		dashBoardEle[dashBoardEle.length] = ['sliderPath',  	265,   40];
		dashBoardEle[dashBoardEle.length] = ['sliderKnob',  	465,   40];
		dashBoardEle[dashBoardEle.length] = ['sliderKnob',  	465,   40];
	
	//dashBoard text
	var dashBoardTxt = [];
											//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['Phase constant = 0', 	'bold 14px Arial',  'left', 126,  18, 1];
		dashBoardTxt[dashBoardTxt.length] = ['Phase constant:', 	'bold 14px Arial',  'left', 126,  38, 2];
		dashBoardTxt[dashBoardTxt.length] = ['-360', 	'bold 14px Arial',  'left', 254,  65, 2];
		dashBoardTxt[dashBoardTxt.length] = ['-270', 	'bold 14px Arial',  'left', 294,  65, 2];
		dashBoardTxt[dashBoardTxt.length] = ['-180', 	'bold 14px Arial',  'left', 334,  65, 2];
		dashBoardTxt[dashBoardTxt.length] = ['-90', 	'bold 14px Arial',  'left', 379,  65, 2];
		dashBoardTxt[dashBoardTxt.length] = ['0', 	'bold 14px Arial',  'left', 427,  65, 2];
		dashBoardTxt[dashBoardTxt.length] = ['90', 	'bold 14px Arial',  'left', 463,  65, 2];
		dashBoardTxt[dashBoardTxt.length] = ['180', 	'bold 14px Arial',  'left', 500,  65, 2];
		dashBoardTxt[dashBoardTxt.length] = ['270', 	'bold 14px Arial',  'left', 540,  65, 2];
		dashBoardTxt[dashBoardTxt.length] = ['360', 	'bold 14px Arial',  'left', 580,  65, 2];
				
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ["Change the phase and observe", "the resulting combined wave."];
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = [650, 12, 37, 62];
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
			dashBG.addChild(oActor);			
			game.dashBoardEleArr.push(oActor);
		}			
		__createDashBoardTxt( dashBG );
		__createDashBoardButton( dashBG );	
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
		var b2= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 4, 4, 5 ,4 , function(button) {
					game.resetBtnMDownHandler();
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
		dashBG.addChild( b1 );
		dashBG.addChild( b2 );
		dashBG.addChild( b3 );
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
		return new CAAT.exemplarr().
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