//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {		
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		'0',  	'0'];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['divider',    		'52',   '0'];
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		'370',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'380',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'480',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'580',  '0'];
		dashBoardEle[dashBoardEle.length] = ['well100',    		'610',  '0'];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		'708',  '0'];		
	
	//dashBoard test
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['x', 		 'italic bold 14px Arial',  'left', 70,  35, 0];//Text, font_style, alignment, xPos, yPos, id
		dashBoardTxt[dashBoardTxt.length] = ['y', 		 'italic bold 14px Arial',  'left', 70,  55, 1];
		dashBoardTxt[dashBoardTxt.length] = ['velocity', 'bold 14px Arial', 		'left', 85,  35, 2];
		dashBoardTxt[dashBoardTxt.length] = ['velocity', 'bold 14px Arial', 		'left', 85,  55, 3];
		dashBoardTxt[dashBoardTxt.length] = ['--', 		 'bold 14px Arial', 		'center', 170, 35, 4];//x velocity
		dashBoardTxt[dashBoardTxt.length] = ['--', 		 'bold 14px Arial', 		'center', 170, 55, 5];//y velocity
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 	 'bold 14px Arial', 		'left', 190, 35, 6];		
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 	 'bold 14px Arial', 		'left', 190, 55, 7];
		dashBoardTxt[dashBoardTxt.length] = ['Initial',  'bold 14px Arial', 		'left', 390, 35, 8];
		dashBoardTxt[dashBoardTxt.length] = ['x', 		 'italic bold 14px Arial',  'left', 435, 35, 9];
		dashBoardTxt[dashBoardTxt.length] = ['velocity', 'bold 14px Arial', 		'left', 450, 35, 10];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 	 'bold 14px Arial', 		'left', 580, 35, 11];
		
	var bannerImg,
		bannerContainer,
		setBG, 
		dashBG;
	
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Enter the initial x velocity' , 'and press GO.'];
		bannerContentTxt[bannerContentTxt.length] = ['Sorry! You can hit RESET' , 'to try the experiment again.'];
		bannerContentTxt[bannerContentTxt.length] = ['Great job!!  You recreated the' , 'Nobel Prize-winning experiment!'];
		bannerContentTxt[bannerContentTxt.length] = ['Ai!  Qu\'est-ce que vous avez fait alors?' , 'You cannot enter a negative value.  Press RESET,', 'enter a non-negative value, and try again.'];
		bannerContentTxt[bannerContentTxt.length] = ['You cannot enter a value greater than', '500.  Press RESET, enter', 'a smaller value, and try again.'];
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['620', '6', '31', '56'];//common XPosiotn, button_1 Y Position, button_2 Y Position
	
	var bannerContX1Pos = 0,
		bannerContX2Pos	= 0,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 20;
	
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
			setLocation(0, 450);		
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
				
		__createDashBoardButton();
		__createDashBoardTxt();
		__createInputTxtBox();	
		return dashBG;
	}
	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	function __createDashBoardTxt(){
		//Create textActor
		for(var i=0;i<dashBoardTxt.length; i++){			
			var oActorTxt = game.__addTextOnImage('#FFF', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], game._director );
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
		dashBG.addChild( b2 );
		dashBG.addChild( b3 );	
	}
	//=======================================================
	//Create Banner Container
	//=======================================================
	function __createBannerContainer(){
		bannerContainer = new CAAT.Foundation.ActorContainer().
									setSize(400, 70);
											
		bannerImg = game.__addImageOnScene( game._director.getImage('banner'), bannerRows, bannerCols );
		
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
	//===================================================
	//create the input box on the dashboard
	//===================================================
	function __createInputTxtBox(){
		game.initXVelTxtBox = document.createElement('input');
		game.initXVelTxtBox.type = 'text';
		game.initXVelTxtBox.id = 'hAccInput';
		game.initXVelTxtBox.style.position = 'absolute';
		game.initXVelTxtBox.style.width = '56px';
		game.initXVelTxtBox.style.left = '510px';
		game.initXVelTxtBox.style.top = '480px';
		game.initXVelTxtBox.value = '0.0';	
		var container = document.getElementById('act_controls');
		if (container)
			container.appendChild(game.initXVelTxtBox);
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