//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {	
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',     '0',   '0'];
		dashBoardEle[dashBoardEle.length] = ['divider',    '100', '0'];
		dashBoardEle[dashBoardEle.length] = ['grid',       '130', '25'];
		dashBoardEle[dashBoardEle.length] = ['divider',    '310', '0'];
		
		dashBoardEle[dashBoardEle.length] = ['wellleft2',  '310', '0'];
		dashBoardEle[dashBoardEle.length] = ['well100b',   '320', '0'];
		dashBoardEle[dashBoardEle.length] = ['well100b',   '420', '0'];
		dashBoardEle[dashBoardEle.length] = ['well100b',   '520', '0'];
		dashBoardEle[dashBoardEle.length] = ['well50b',    '610', '0'];
		dashBoardEle[dashBoardEle.length] = ['wellright2', '655', '0'];		
	
	//dashBoard text
	var dashBoardTxt = [];		
		//Text, font_style, alignment, xPos, yPos		
		dashBoardTxt[dashBoardTxt.length] = ['Hare',              '13px arial',   	'left', 160, 8];//Text, font_style, alignment, xPos, yPos
		dashBoardTxt[dashBoardTxt.length] = ['Tortoise',          '13px arial',   	'left', 230, 8];
		dashBoardTxt[dashBoardTxt.length] = ['v', 		          'italic 14px arial', 	'left', 115, 28];
		dashBoardTxt[dashBoardTxt.length] = ['a', 		  		  'italic 13px arial', 	'left', 115, 58];		
		dashBoardTxt[dashBoardTxt.length] = ['-4.0   m/s', 		  'bold 14px arial',  	'left', 225, 32];
		dashBoardTxt[dashBoardTxt.length] = ['0.0   m/s', 		  'bold 14px arial',  	'left', 225, 57];
		dashBoardTxt[dashBoardTxt.length] = ['24.0', 		      'bold 14px arial',  	'left', 140, 32];//hareVelocity --> id = 6	
		dashBoardTxt[dashBoardTxt.length] = ['2',    			  '10px arial',   	  	'left', 283, 55];
		dashBoardTxt[dashBoardTxt.length] = ['   --',		 		  'bold 14px arial',  	'left', 140, 57];//hareAcceleration --> id = 8
		dashBoardTxt[dashBoardTxt.length] = ['2',    			  '10px arial',   	  	'left', 205, 55];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 		      'bold 14px arial',  	'left', 180, 32];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 		      'bold 14px arial',  	'left', 180, 57];		
		dashBoardTxt[dashBoardTxt.length] = ['Hare acceleration', 'bold 14px arial',  	'left', 330, 35];
		dashBoardTxt[dashBoardTxt.length] = ['m/s',    			  'bold 14px arial',  	'left', 530, 35];
		dashBoardTxt[dashBoardTxt.length] = ['2',    			  '10px arial',  	'left', 557, 32];	
		
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['580', '10', '36', '62'];//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position 
	
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Enter an acceleration for the hare', 'then press GO.'];
		bannerContentTxt[bannerContentTxt.length] = ['Tortoise wins!', 'Press RESET to start over.'];
		bannerContentTxt[bannerContentTxt.length] = ["Sorry! The hare did not clear the post.", 'The tortoise wins by default.'];
		bannerContentTxt[bannerContentTxt.length] = ["Great job!", 'The hare beat the tortoise!'];
		bannerContentTxt[bannerContentTxt.length] = ["The acceleration you entered is too large",'for the hare. Press RESET to try again.'];
	
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
		setBG = new CAAT.Foundation.ActorContainer().
					setPreferredSize( pw, ph ).
					setBounds( 0, 0, pw, ph ).
					setClip(true);	
		
		return setBG;
	}	
	//=======================================================
	//Create Bottom dashboard 
	//=======================================================
	function createPanel( pw, ph, director )
	{		
		dashBG = new CAAT.Foundation.ActorContainer().
					setPreferredSize( pw, ph ).
					setBounds( 0, 0, pw, ph ).
					setClip(false);
					
		__createBannerContainer();
		
		//place images on the bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.			
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);
			
			dashBG.addChild(oActor);			
		}		
		__createDashBoardTxt();
		__createDashBoardButton();
		__createInputTxtBox();
		return dashBG;
	}
	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	function __createDashBoardTxt(){
		//Create textActor
		for(var i=0;i<dashBoardTxt.length; i++){
			var oActorTxt = game.__addTextOnImage('white', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], game._director );
			oActorTxt.
				setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4]);
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
		for(var j=0;j<3;j++){
			if(this['bannerTxt_'+j] != null){
				 bannerContainer.removeChild(this['bannerTxt_'+j]);
			}
		}
        for(var i=0;i<bannerContentTxt[index].length;i++){
            if(this['bannerTxt_'+i]){
                bannerContainer.removeChild(this['bannerTxt_'+i]);
            }
            this['bannerTxt_'+i] = game.__addTextOnImage('black', bannerContentTxt[index][i], 'bold 14px Arial ', 'center', game._director );
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
	//===================================================
	//create the input box on the dashboard
	//===================================================
	function __createInputTxtBox(){
		game.oHareAcc = document.createElement('input');
		game.oHareAcc.type = 'text';
		game.oHareAcc.id = 'hAccInput';
		game.oHareAcc.style.position = 'absolute';
		game.oHareAcc.style.width = '56px';
		game.oHareAcc.style.left = '462px';
		game.oHareAcc.style.top = '530px';
		game.oHareAcc.value = '0.0';	
		var container = document.getElementById('act_controls');
		if (container)
			container.appendChild(game.oHareAcc);
	}
})();
