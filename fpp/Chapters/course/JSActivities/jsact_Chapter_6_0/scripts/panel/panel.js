//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {	

		
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		0,    0];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		310,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		320,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		410,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		510,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		550,  0];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		650,  0];
		//dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		370,  15];
		//dashBoardEle[dashBoardEle.length] = ['incrBgMed',  		370,  35];
		
	
	//dashBoard text
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['Net force', 		'Bold 14px arial', 'left', 48, 30, 1];
		dashBoardTxt[dashBoardTxt.length] = ['22.4', 			'Bold 14px arial', 'left', 150, 30, 'netForceTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['N', 			    'Bold 14px arial', 'left', 200, 30, 2];
		dashBoardTxt[dashBoardTxt.length] = ['Acceleration', 	'bold 14px arial', 'left', 48, 50, 3];
		dashBoardTxt[dashBoardTxt.length] = ['--', 			'bold 14px arial', 'left', 150, 50, 'AccTxt'];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 			'bold 14px arial', 'left', 200, 50, 4];
		dashBoardTxt[dashBoardTxt.length] = ['2', 				'10px arial', 'left', 225, 50, 5];
		dashBoardTxt[dashBoardTxt.length] = ['F', 				'Italic bold 14px arial', 'left', 330, 15, 6];
		dashBoardTxt[dashBoardTxt.length] = ['1', 				'10px arial', 'left', 338, 24, 7];
		dashBoardTxt[dashBoardTxt.length] = ['10', 				'bold 14px arial', 'left', 365, 15, 'F1Txt'];
		dashBoardTxt[dashBoardTxt.length] = ['F', 				'italic bold 14px arial', 'left', 330, 35, 8];
		dashBoardTxt[dashBoardTxt.length] = ['2', 				'10px arial', 'left', 338, 42, 9];
		dashBoardTxt[dashBoardTxt.length] = ['20', 				'bold 14px arial', 'left', 365, 35, 'F1Txt'];
		dashBoardTxt[dashBoardTxt.length] = ['N', 				'bold 14px arial', 'left', 400, 15, 10];
		dashBoardTxt[dashBoardTxt.length] = ['N', 				'bold 14px arial', 'left', 400, 35, 11];
		dashBoardTxt[dashBoardTxt.length] = ['Display vectors head to tail', 			'bold 14px arial', 'left', 330, 66, 12];
		
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['The centers of the targets are at 0'+String.fromCharCode(176)+', 45'+String.fromCharCode(176)+',', 'and 150'+String.fromCharCode(176)+'.  Set the direction and', 'magnitude of the forces and press GO.'];
		bannerContentTxt[bannerContentTxt.length] = ['You need to try again.', 'Press RESET to start over.'];
		bannerContentTxt[bannerContentTxt.length] = ['Congratulations!  You hit the target.', 'Press RESET to hit another target.'];
		bannerContentTxt[bannerContentTxt.length] = ['Congratulations!  The ball is not moving.', 'Press RESET to try to hit a target.'];
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['560', '508', '533', '558'];//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position 
	
	var bannerContX1Pos = 0,
		bannerContX2Pos	= 0,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 18;
	
	var graphXValDiff = 18,
		graphYValDiff = 32;
	
	var panelHeight = 100;
	
	var setBG,
		dashBG,
		bannerContainer,
		bannerImg;
	//=======================================================
	// Create the main works area and the panel
	//=======================================================
	game.createPanels = function(director, scene)
	{		

		//Create the panel container
		var panel = createPanel( director.width, panelHeight, director );
		panel.
			setLocation(0, 500);		
		scene.addChild(panel);

		// Create the main area
		var main = createMain( director.width, director.height, director );
		main.setLocation(0, 0);
		scene.addChild(main);

		
		return main;
	}

	//=======================================================
	//Create Main Display Panel
	//=======================================================
	function createMain( pw, ph, director ){
		setBG = new CAAT.Foundation.ActorContainer().
					setPreferredSize( pw, ph ).
					setBounds( 0, 0, pw, ph ).
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
		
		__createBannerContainer();//banner show on the dash img (like z-index)
		
		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( game._director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.			
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);
			
			dashBG.addChild(oActor);			
		}			
		
		
		
		__createDashBoardTxt();
		return dashBG;
	}
	//=====================================================
	//Create show velocity Graph toggle button 
	//=====================================================	
	game.__ToggleBtn= function(mainPanel){
	
	
		game.SVGToggleBtn = game.__addImageOnScene(game._director.getImage('checkonoff'), 1, 2);
		game.SVGToggleBtn.
			setAnimationImageIndex([0]).
			setLocation(525, 565);		
		mainPanel.addChild(game.SVGToggleBtn);
		
		game.SVGToggleBtn.mouseDown = function(e){
			if(!game.isHeadtoTail){
			game.SVGToggleBtn.
					setAnimationImageIndex([1]);
				game.isHeadtoTail = true;
				game.onHeadtoTail();
				game.lineF2drag.x=game.lineF2dragHTx;
				game.lineF2drag.y=game.lineF2dragHTy;
			}else if(game.isHeadtoTail){
				game.SVGToggleBtn.
					setAnimationImageIndex([0]);
				game.isHeadtoTail = false;
				game.onHeadtoTail();
				game.lineF2drag.x=game.finalF2x-game.lineF2drag.width/2;
			game.lineF2drag.y=game.finalF2y-game.lineF2drag.height/2;
			
				
			}
			console.log('handle'+game.isHeadtoTail);
		}
	}
	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	function __createDashBoardTxt(){
		//Create textActor
		for(var i=0;i<dashBoardTxt.length; i++){			
			var oDashBoradTxt = game.__addTextOnImage('#FFF', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], game._director );
			oDashBoradTxt.
				setId(dashBoardTxt[i][5]).
				setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4]);
			dashBG.addChild(oDashBoradTxt);	
			
			//dashborad text id, store in to an array --> from get the Id and set the value to the
			//related text id
			game.oDashTxtArr.push(oDashBoradTxt);
		}		
	}
	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	 game.__createIncDecButton =function(mainPanel){
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('incre_decre_btn'), 1, 2);
		var iniVelIncBtn = new CAAT.Foundation.Actor().
								setId('iniF1Inc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(442, 510);
		var iniVelDecBtn = new CAAT.Foundation.Actor().
								setId('iniF1Dec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(472, 510);
		var accIncBtn = new CAAT.Foundation.Actor().
								setId('iniF2Inc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(442, 537);
		var accDecBtn = new CAAT.Foundation.Actor().
								setId('iniF2Dec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(472, 537);
								
		mainPanel.addChild(iniVelIncBtn);
		mainPanel.addChild(iniVelDecBtn);
		mainPanel.addChild(accIncBtn);
		mainPanel.addChild(accDecBtn);
		
		//the increment and decrement buttons MouseDown functions are called when long press
		iniVelIncBtn.mouseDown = game.incDecMDown;
		iniVelDecBtn.mouseDown = game.incDecMDown;
		accIncBtn.mouseDown = game.incDecMDown;
		accDecBtn.mouseDown = game.incDecMDown;
		
		//the increment and decrement buttons MouseDown functions are called when long press
		iniVelIncBtn.mouseUp = game.incDecMUp;
		iniVelDecBtn.mouseUp = game.incDecMUp;
		accIncBtn.mouseUp = game.incDecMUp;
		accDecBtn.mouseUp = game.incDecMUp;
	}
	//=====================================================
	//create Dashboard Button Container
	//=====================================================
	game.__createDashBoardButton =function (mainPanel){
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
		
		mainPanel.addChild( b1 );
		mainPanel.addChild( b2 );
		mainPanel.addChild( b3 );		
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
            setValues( new CAAT.Path().setLinear(bannerContX1Pos,
fromY1, bannerContX2Pos, fromY2).setInteractive(false) ).
        setDelayTime(0, 200);

        for(var j=0; j<=bannerContainer.getNumChildren(); j++){
            bannerContainer.removeChild(this['bannerTxt_'+j]);
        }

        for(var i=0;i<bannerContentTxt[index].length;i++){
            this['bannerTxt_'+i] = game.__addTextOnImage('#000',
bannerContentTxt[index][i], 'Bold 14px Arial', 'center', game._director );
            this['bannerTxt_'+i].setLocation(bannerTxtInitXPos,
12+(bannerTxtInitYPos*i));
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