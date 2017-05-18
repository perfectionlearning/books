//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		0,    0];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		500,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		510,  0];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		600,  0];
	
	//dashBoard text
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['Velocity', 			'bold 14px Arial', 'left', 100, 15, 0];//Text, font_style, alignment, xPos, yPos, id
		//dashBoardTxt[dashBoardTxt.length] = ['Acceleration', 		'bold 14px Arial', 'left', 100, 35, 1];
		dashBoardTxt[dashBoardTxt.length] = [' ', 		'bold 14px Arial', 'left', 100, 35, 1];
		dashBoardTxt[dashBoardTxt.length] = ['Show velocity graph', 'bold 14px Arial', 'left', 100, 55, 2];		
		dashBoardTxt[dashBoardTxt.length] = ['- -', 				'bold 14px Arial', 'left', 220, 15, 3];
		//dashBoardTxt[dashBoardTxt.length] = ['- -', 				'bold 14px Arial', 'left', 220, 35, 4];		
		dashBoardTxt[dashBoardTxt.length] = [' ', 				'bold 14px Arial', 'left', 220, 35, 4];		
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 				'bold 14px Arial', 'left', 285, 15, 5];
		//dashBoardTxt[dashBoardTxt.length] = ['m/s', 				'bold 14px Arial', 'left', 285, 35, 6];
		dashBoardTxt[dashBoardTxt.length] = [' ', 				'bold 14px Arial', 'left', 285, 35, 6];
		//dashBoardTxt[dashBoardTxt.length] = ['2', 					'10px Arial', 'left', 308, 32, 7];
		dashBoardTxt[dashBoardTxt.length] = [' ', 					'10px Arial', 'left', 308, 32, 7];

		
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Drag the ball to match the', 'position-time graph.'];
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['520', '6', '31', '56'];//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position 
	
	var bannerContX1Pos = 360,
		bannerContX2Pos	= 360,
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
		// Create the main area
		var main = createMain( director.width, director.height - panelHeight, director );
		main.
			setLocation(0, 0);
		scene.addChild(main);

		//Create the panel container
		game.panel = createPanel( director.width, panelHeight, director );
		game.panel.
			setLocation(0, 500);		
			scene.addChild(game.panel);

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
		
		//__SVGraphToggleBtn();
		__createDashBoardTxt();
		__createDashBoardButton();	
		return dashBG;
	}

	//=====================================================
	//Create show velocity Graph toggle button 
	//=====================================================	
	//function __SVGraphToggleBtn(){
	 game.SVGraphToggleBtn =function(){
		game.SVGToggleBtn = game.__addImageOnScene(game._director.getImage('checkonoff'), 1, 2);
		game.SVGToggleBtn.setLocation(280, 58);		
		game.panel.addChild(game.SVGToggleBtn);
		
		game.isSVGShow = false;
		game.SVGToggleBtn.mouseDown = function(e){
			if(!game.isSVGShow){
				game.SVGToggleBtn.
					setAnimationImageIndex([1]);
				game.isSVGShow = true;
				game.svGraph.
					visible = true;
			}else if(game.isSVGShow){
				game.SVGToggleBtn.
					setAnimationImageIndex([0]);
				game.isSVGShow = false;
				game.svGraph.
					visible = false;
			}
		}
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

	//=====================================================
	//create Dashboard Button Container
	//=====================================================
	function __createDashBoardButton(){
		// Buttons creation
		var btnImg = new CAAT.Foundation.SpriteImage().initialize(
				game._director.getImage('buttons'), 2, 3 
			); 

			//Reset btn creation and add Events
		var b3= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 4, 4, 5 ,4 , function(button) {
					game.resetBtnMDownHandler();
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][2]);	 
		
		dashBG.addChild( b3 );		
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