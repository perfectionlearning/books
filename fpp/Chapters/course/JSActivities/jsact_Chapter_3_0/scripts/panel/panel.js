//==========================================================================
// UI Panel Routines
//==========================================================================
;(function() {

	game.initXVelTxtBox;
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',   		0,    0];//image_id, image_X_Position, image_Y_Position
		dashBoardEle[dashBoardEle.length] = ['wellleft',   		70,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		80,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		180,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		280,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		380,  0];
		dashBoardEle[dashBoardEle.length] = ['well100',    		480,  0];
		dashBoardEle[dashBoardEle.length] = ['wellright',  		570,  0];
		dashBoardEle[dashBoardEle.length] = ['purpleIcon',  	90,  30];

	//dashBoard text
	var dashBoardTxt = [];
		dashBoardTxt[dashBoardTxt.length] = ['Displacement(x, y) = (', 'Bold 14px arial', 'left', 128, 30, 1];
		dashBoardTxt[dashBoardTxt.length] = ['km,', 'Bold 14px arial', 'left', 343, 30, 2];
		dashBoardTxt[dashBoardTxt.length] = ['km)', 'Bold 14px arial', 'left', 435, 30, 3];

	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Travel to Ed\'s Fuel Depot, Joe\'s Diner, or', 'Silver\'s Gym by specifying the displacement.', 'Press GO to start.'];
		bannerContentTxt[bannerContentTxt.length] = ['You did not reach any of the three destinations.', 'Press RESET to start over, or enter a new', 'displacement and press GO to move again.'];
		bannerContentTxt[bannerContentTxt.length] = ['Congratulations! You reached Joe\'s Diner.', 'Press RESET to start over, or enter a new', 'displacement and press GO to move again.'];
		bannerContentTxt[bannerContentTxt.length] = ['Congratulations! You reached Ed\'s Fuel Depot.', 'Press RESET to start over, or enter a new', 'displacement and press GO to move again.'];
		bannerContentTxt[bannerContentTxt.length] = ['Congratulations! You reached Silver\'s Gym.', 'Press RESET to start over, or enter a new', 'displacement and press GO to move again.'];
		bannerContentTxt[bannerContentTxt.length] = ['You ran into the vortex. Now why did you do that?' , 'Press RESET to start over, or enter a new', 'displacement and press GO to move again.'];

	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['490', '10', '35'];//common XPosiotn, button_1 Y Position,, button_2 Y Position, button_3 Y Position

	var bannerContX1Pos = 200,
		bannerContX2Pos	= 200,
		bannerRows = 1,
		bannerCols = 3,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 15;

	var panelHeight = 100,
		bannerImg,
		dashBG,
		setBG,
		bannerContainer,
		eatjoeImgAnim,
		edsfuelImgAnim;
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

		//create bottom panel
		for(var i=0;i<dashBoardEle.length;i++){
			var oActor = game.__addImageOnScene( game._director.getImage(dashBoardEle[i][0]), 1, 1 );
			oActor.
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);

			dashBG.addChild(oActor);
		}

		__createDashBoardTxt();
		__createDashBoardButton();
		__createInputTxtBoxX();
		__createInputTxtBoxY();
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
	}

	//===================================================
	//create the input box on the dashboard
	//===================================================
	function __createInputTxtBoxX(){
		var container = document.getElementById('act_controls');
		game.initXVelTxtBox = document.createElement('input');
		game.initXVelTxtBox.type = 'text';
		game.initXVelTxtBox.id = 'hAccInput';
		game.initXVelTxtBox.style.position = 'absolute';
		game.initXVelTxtBox.style.width = '51px';
		game.initXVelTxtBox.style.left = '280px';
		game.initXVelTxtBox.style.top = '525px';
		game.initXVelTxtBox.value = '0.0';
		game.initXVelTxtBox.addEventListener('blur', function(){
			if(game.initXVelTxtBox.value == ''){
				game.initXVelTxtBox.value = '0.0';
			}
		});
		if(container){
			document.getElementById('act_controls').appendChild(game.initXVelTxtBox);
		}
	}

	function __createInputTxtBoxY(){
		var container = document.getElementById('act_controls');
		game.initYVelTxtBox = document.createElement('input');
		game.initYVelTxtBox.type = 'text';
		game.initYVelTxtBox.id = 'hAccInput';
		game.initYVelTxtBox.style.position = 'absolute';
		game.initYVelTxtBox.style.width = '52px';
		game.initYVelTxtBox.style.left = '370px';
		game.initYVelTxtBox.style.top = '525px';
		game.initYVelTxtBox.value = '0.0';
		game.initYVelTxtBox.addEventListener('blur', function(){
			if(game.initYVelTxtBox.value == ''){
				game.initYVelTxtBox.value = '0.0';
			}
		});
		if(container){
			document.getElementById('act_controls').appendChild(game.initYVelTxtBox);
		}
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
		var b2= new CAAT.Foundation.Actor().setAsButton(
				btnImg.getRef(), 4, 4, 5 ,4 , function(button) {
					game.resetBtnMDownHandler();
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][2]);


		dashBG.addChild( b1 );
		dashBG.addChild( b2 );
	}
	//=======================================================
	//Create Banner Container
	//=======================================================
	game.__createBannerContainer = function(){

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
             setValues( new CAAT.Path().setLinear(bannerContX1Pos,
fromY1, bannerContX2Pos, fromY2).setInteractive(false) ).
         setDelayTime(0, 200);

         for(var j=0; j<=bannerContainer.getNumChildren(); j++){
             bannerContainer.removeChild(this['bannerTxt_'+j]);
         }

         for(var i=0;i<bannerContentTxt[index].length;i++){
             this['bannerTxt_'+i] = game.__addTextOnImage('#000', bannerContentTxt[index][i], 'Bold 14px Arial', 'center', game._director );
             this['bannerTxt_'+i].setLocation(bannerTxtInitXPos,
8+(bannerTxtInitYPos*i));
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