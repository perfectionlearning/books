//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {		
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG', 0, 0, 2];	//left end
		dashBoardEle[dashBoardEle.length] = ['wellleft', 300, 0, 10];	//well left
		dashBoardEle[dashBoardEle.length] = ['well100', 310, 0, 100];	//well100
		dashBoardEle[dashBoardEle.length] = ['well100', 410, 0, 100];	//well100
		dashBoardEle[dashBoardEle.length] = ['well100', 510, 0, 100];	//well100
		dashBoardEle[dashBoardEle.length] = ['well100', 610, 0, 100];	//well100
		dashBoardEle[dashBoardEle.length] = ['well50', 680, 0, 100];	//well100
		dashBoardEle[dashBoardEle.length] = ['wellright', 730, 0, 10];	//well right
		
		//dashBoard test
	var dashBoardTxt = [];
		
		dashBoardTxt[dashBoardTxt.length] = ['Charge on putter', 			'bold 14px Arial', 'left', 330, 30, 1, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = [String.fromCharCode(215)+' (1.60  '+String.fromCharCode(215)+' 10', 			'bold 14px Arial', 'left', 537, 30, 2, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = [String.fromCharCode(45)+'19','10px Arial', 'left', 620, 24, 3, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = [' C)', 			'bold 14px Arial', 'left', 635, 30, 2, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['Ball to putter distance', 	'bold 14px Arial', 'left', 30,  15, 4, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['0.238 m', 					'bold 14px Arial', 'left', 200, 15, 'IncDecputterTxt', '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['Charge on ball     +1.60 '+String.fromCharCode(215)+' 10', 	'bold 14px Arial', 'left', 30,  35, 5, '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['C','bold 14px Arial', 'left', 240,  35, 5, '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['  '+String.fromCharCode(45)+'19', 						'10px Arial', 'left', 215, 32, 6, '#fff'];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['Strokes', 					'bold 14px Arial', 'left', 30,  55, 7, '#fff'];
		dashBoardTxt[dashBoardTxt.length] = ['0', 							'bold 14px Arial', 'left', 99, 55, 'StrokeTxt', '#fff'];
		
	var bannerImg,
		bannerContainer,
		setBG, 
		dashBG;
	
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Set the charge and location of the', 'putter and press PUTT to play the ball.'];
		bannerContentTxt[bannerContentTxt.length] = ['Congratulations! You sank the ball.', 'Your number of strokes was over par.'];
		bannerContentTxt[bannerContentTxt.length] = ['Congratulations! You sank the ball.', 'Your number of strokes was at par.'];
		bannerContentTxt[bannerContentTxt.length] = ['Congratulations! You sank the ball.', 'Your number of strokes was under par.'];
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['658', '10', '35' ];//common XPosiotn, button_1 Y Position, button_2 Y Position
	
	var bannerContX1Pos = 13,
		bannerContX2Pos	= 13,
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
		var main = createMain( director.width, director.height-100, director );
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
					setClip(false);
		//create bottom panel
		
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.			
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);			
			dashBG.addChild(oActor);			
		}
		__createDashBoardButton();
		game.__createDashBoardTxt();
		//game.__createBannerContainer();
		return dashBG;
	}
	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	game.__createDashBoardTxt=function(){
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
		//dashBG.addChild( b2 );
		dashBG.addChild( b3 );	
	}
	//=======================================================
	//Create Banner Container
	//=======================================================
	game.__createBannerContainer=function(  ){
		bannerContainer = new CAAT.Foundation.ActorContainer().
									setBounds(17,500,400,70).setClip(true);
											
		bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('banner'), bannerRows, bannerCols )
		);
		
		bannerContainer.addChild( bannerImg );		
		game.mainPanel.addChild( bannerContainer );
		game.__bannerDisplay(0, 0,416,483, false);
	}	
	//=======================================================
    //Banner Display Container
    //=======================================================
    game.__bannerDisplay = function(index,bannerBGIndex, y1, y2, flag ){
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