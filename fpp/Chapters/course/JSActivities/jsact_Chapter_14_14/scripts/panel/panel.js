//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {
	game.dashBoardTxt = [];
	game.lastDisplayedBanner = null;
	//declaration start
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		0,    0];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['wellLeft',   		200,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		210,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		310,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		410,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		510,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		590,  0];
		dashBoardEle[dashBoardEle.length] = ['wellRight',  		690,  0];
	
	//dashBoard text
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['Volume', 	'bold 14px arial', 'left', 45, 35, 'vol_lbl'];
		dashBoardTxt[dashBoardTxt.length] = ['0', 	'bold 14px arial', 'left', 100, 35, 'vol_answer'];
		dashBoardTxt[dashBoardTxt.length] = ['cm', 	'bold 13px arial', 'left', 112, 35, 'vol_unit_lbl'];
		dashBoardTxt[dashBoardTxt.length] = ['3', 	'11px verdana', 'left', 131, 32, 'vol_unit__pow_lbl'];
		dashBoardTxt[dashBoardTxt.length] = ['20.0 kg', 'bold 14px arial', 'left', 269, 60, '20Kg_lbl'];
		dashBoardTxt[dashBoardTxt.length] = ['3.20 kg', 'bold 14px arial', 'left', 399, 60, '3.2Kg_lbl'];
		dashBoardTxt[dashBoardTxt.length] = ['2.70 kg', 'bold 14px arial', 'left', 532, 60, '2.7Kg_lbl'];
		
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Determine the density of the objects below', 'by dragging them to the public bath.', 'Then drag the impure crown to the palace.'];
		bannerContentTxt[bannerContentTxt.length] = ['Great job!','That crown was tampered with!', ''];
		bannerContentTxt[bannerContentTxt.length] = ['Sorry, but that crown is pure gold!', 'You need to try again.', 'Press RESET to start over.'];
		bannerContentTxt[bannerContentTxt.length] = ['Hmm. Students as well as goldsmiths can cheat.', 'You should do at least some calculations', 'before answering this question.'];
		bannerContentTxt[bannerContentTxt.length] = ['Sorry, but that bar is pure gold!', 'You need to try again.', 'Press RESET to start over.'];
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['600', '6', '538', '56'];
		//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position 
	
	var bannerContX1Pos = -2,
		bannerContX2Pos	= -2,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 18,
		bannerImg = null,
		bannerContainer = null;
	var oActorTxt_0 = null, oActorTxt_1 = null, oActorTxt_2 = null, oActorTxt_3 = null, oActorTxt_4 = null, oActorTxt_5 = null;
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
		panel.setLocation(0, 500);		
		scene.addChild(panel);
		return main;
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
		
		__createBannerContainer( dashBG );
		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.			
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);
			dashBG.addChild(oActor);			
		}					
		__createDashBoardTxt( dashBG );
		return dashBG;
	}
	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	function __createDashBoardTxt( dashBG ){
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
				btnImg.getRef(), 4, 4, 5 ,4 , function(button) {
					game.resetBtn_click();
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][2]);	 
		
		parent.addChild( b1 );		
	}
	//=======================================================
	//Create Banner Container
	//=======================================================
	function __createBannerContainer( dashBG ){
		var _director = game.getDirector();
		bannerContainer = new CAAT.Foundation.ActorContainer()
									.setSize(400, 70)
									.setClip(true);
											
		bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( _director.getImage('banner'), bannerRows, bannerCols )
		);
		
		bannerContainer.addChild( bannerImg );		
		dashBG.addChild( bannerContainer );
		game.__bannerDisplay(0, 0, -70, 0, false);
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