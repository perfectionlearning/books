//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {	

		
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		0,    0];//image_id, image_X_Position, image_Y_Position	
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		400,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		410,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		490,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		590,  0];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		690,  0];
	
	//dashBoard text
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['Helicopter mass', 'Bold 14px arial', 'left', 60, 13, 8];
		dashBoardTxt[dashBoardTxt.length] = ['1710', 			'Bold 14px arial', 'left', 190, 13, 8];
		dashBoardTxt[dashBoardTxt.length] = ['kg', 				'Bold 14px arial', 'left', 240, 13, 8];
		dashBoardTxt[dashBoardTxt.length] = ['Acceleration', 	'Bold 14px arial', 'left', 60, 36, 8];
		dashBoardTxt[dashBoardTxt.length] = ['0.00', 			'Bold 14px arial', 'left', 190, 36, 8];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 			'Bold 14px arial', 'left', 240, 36, 8];
		dashBoardTxt[dashBoardTxt.length] = ['2', 				'Bold 10px arial', 'left', 265, 35, 8];
		
		dashBoardTxt[dashBoardTxt.length] = ['Velocity', 		'Bold 14px arial', 'left', 60, 60, 8];
		dashBoardTxt[dashBoardTxt.length] = ['-3.60', 			'Bold 14px arial', 'left', 190, 60, 8];
		dashBoardTxt[dashBoardTxt.length] = ['m/s', 			'Bold 14px arial', 'left', 240, 60, 8];
		
		dashBoardTxt[dashBoardTxt.length] = ['Force', 			'Bold 14px arial', 'left', 430, 35, 8];
		
		dashBoardTxt[dashBoardTxt.length] = ['N', 				'Bold 14px arial', 'left', 550, 35, 10];
		dashBoardTxt[dashBoardTxt.length] = ['(crashed)', 		'Bold 14px arial', 'left', 453, 55, 11];
		
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Enter the force to achieve zero velocity', 'at 5.00 m and press GO.'];
		bannerContentTxt[bannerContentTxt.length] = ['You need to try again.', 'Press RESET to start over.'];
		bannerContentTxt[bannerContentTxt.length] = ['That\'s right\!  You calculated', 'the force correctly.'];
	
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['615', '15', '40', '48'];//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position 
	
	var bannerContX1Pos = -3,
		bannerContX2Pos	= -3,
		bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 18;
		
	var copterbreakeRows = 2, 
		copterbreakeCols = 7;

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
					
        game.__createBannerContainer();
		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( game._director.getImage(dashBoardEle[i][0]), 1, 1 );
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
			
			var oDashBoradTxt = game.__addTextOnImage('#FFF', dashBoardTxt[i][0], dashBoardTxt[i][1], dashBoardTxt[i][2], game._director );
			 
			 oDashBoradTxt.
				setId(dashBoardTxt[i][5]).
				setLocation(dashBoardTxt[i][3], dashBoardTxt[i][4]);
			
			 dashBG.addChild(oDashBoradTxt);	
			
			 //dashborad text id, store in to an array --> from get the Id and set the value to the
			 //related text id
			 game.oDashTxtArr.push(oDashBoradTxt);
		}
		game.verticalVelocity = game.oDashTxtArr[1].text;
		
		game.verticalAccel = game.oDashTxtArr[4].text;
		
		game.BForce = game.oDashTxtArr[11].text;
		
		game.oDashTxtArr[12].visible = false;
	
	}
	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	function __createIncDecButton(){
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('incre_decre_btn'), 2, 1);
		var iniVelIncBtn = new CAAT.Foundation.Actor().
								setId('iniVelInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
									game.incDecHandler(this);
								}).setLocation(475, 33);
		var iniVelDecBtn = new CAAT.Foundation.Actor().
								setId('iniVelDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
									game.incDecHandler(this);
								}).setLocation(475, 42);
								
		dashBG.addChild(iniVelIncBtn);
		dashBG.addChild(iniVelDecBtn);
		
		//the increment and decrement buttons MouseDown functions are called when long press
		iniVelIncBtn.mouseDown = game.incDecMDown;
		iniVelDecBtn.mouseDown = game.incDecMDown;
		
		//the increment and decrement buttons MouseDown functions are called when long press
		iniVelIncBtn.mouseUp = game.incDecMUp;
		iniVelDecBtn.mouseUp = game.incDecMUp;
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

        for(var i=0;i<bannerContentTxt[index].length;i++){
            if(this['bannerTxt_'+i]){
                bannerContainer.removeChild(this['bannerTxt_'+i]);
            }
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
		game.initXVelTxtBox.style.left = '476px';
		game.initXVelTxtBox.style.top = '531px';
		game.initXVelTxtBox.value = '0.0';	
		
		document.getElementById('act_controls').appendChild(game.initXVelTxtBox);
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