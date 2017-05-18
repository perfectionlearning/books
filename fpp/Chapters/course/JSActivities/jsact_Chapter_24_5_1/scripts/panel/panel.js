//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {
	//declaration start
	var bannerContainer = null, bannerImg = null;
	game.dashBoardTxt = [];
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['inDash',   0,    0];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['dash',     0,    0];
		dashBoardEle[dashBoardEle.length] = ['well100',  530,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',  630,  0];
		dashBoardEle[dashBoardEle.length] = ['wellleft', 520,  0];
		dashBoardEle[dashBoardEle.length] = ['wellright',725,  0];
		dashBoardEle[dashBoardEle.length] = ['bottom',   5,    80];
	
	//dashBoard text
	var dashBoardTxt = [];
											//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['Charge value', 'bold 13px Arial', 'left', 449, 440+35, 0];
		dashBoardTxt[dashBoardTxt.length] = ['nC', 			 'bold 13px Arial', 'left', 610, 440+35, 0];
		dashBoardTxt[dashBoardTxt.length] = ['1.00',         'bold 13px Arial', 'left', 573, 440+35 , 0];
		
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Drag the test charge onto the screen. The field will', 'exert a force on it. Compare the direction and strength', 'of this force to the field diagram at different points.'];
	
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = [642, 440+32+5];//common XPosiotn, button_1 Y Position

	var bannerContX1Pos = 17,
		bannerContX2Pos	= 17,
		bannerRows = 2, 
		bannerCols = 3,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 18;	
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
		var setBG = new CAAT.Foundation.ActorContainer()
					.setPreferredSize( pw, ph )
					.setBounds( 0, 0, pw, ph )
					.setFillStyle('#c3c3c3')
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
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.			
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);
			if(i == (dashBoardEle.length-1)) {
				__createBannerContainer( dashBG );	
				oActor.setSize(420, 21).setClip(true);
			}
			dashBG.addChild(oActor);			
		}
		return dashBG;
	}
	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	game.__createDashBoardTxt = function( dashBG ){
		var i = null;
		var _director = game.getDirector();
		//Create textActor
		for(var i = 0; i < dashBoardTxt.length; i++) {
			var thisActorTxt = game.__addTextOnImage('white', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], _director );
				thisActorTxt
					.setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4])
					.setId(dashBoardTxt[i][5]);
			dashBG.addChild(thisActorTxt);
			game.dashBoardTxt.push(thisActorTxt);
		}
	}
	//=====================================================
	//create Dashboard Button Container
	//=====================================================
	game.__createDashBoardButton = function( parent ){
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
	//Create Banner Container
	//=======================================================
	function __createBannerContainer( dashBG ){
		var _director = game.getDirector();
		bannerContainer = new CAAT.Foundation.ActorContainer()
									.setSize(400, 70)
									.setFillStyle('#000')
									.setClip(true);
											
		bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( _director.getImage('inDash'), 1, 1 )
		);
		
		bannerContainer.addChild( bannerImg );		
		dashBG.addChild( bannerContainer );
		game.__bannerDisplay(0, 0, 10, 10, false);
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
})();