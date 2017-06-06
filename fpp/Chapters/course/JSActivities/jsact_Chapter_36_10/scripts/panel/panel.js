
;(function() {

//==========================================================================
// UI Panel Routines
//==========================================================================
	//dash board elements
	var dashBoardEle = [];
		dashBoardEle[dashBoardEle.length] = ['dashBG',    	'0',  	'0'];
		dashBoardEle[dashBoardEle.length] = ['endleft',   	'1',  	'0'];//image_id, image_X_Position, image_Y_Position		
		dashBoardEle[dashBoardEle.length] = ['wellleft2', 	'430', 	'0'];
		dashBoardEle[dashBoardEle.length] = ['well100b',  	'440', 	'0'];
		dashBoardEle[dashBoardEle.length] = ['well100b',  	'540', 	'0'];
		dashBoardEle[dashBoardEle.length] = ['well100b',  	'640', 	'0'];
		dashBoardEle[dashBoardEle.length] = ['well50b',  	'700', 	'0'];		
		dashBoardEle[dashBoardEle.length] = ['wellright2', 	'750', 	'0'];
		dashBoardEle[dashBoardEle.length] = ['endright',  	'760', 	'0'];		
	//	dashBoardEle[dashBoardEle.length] = ['incrBgMed',  	'600', 	'30'];

		
	game.isGameOver = false;
	game.isGameStart = false;
	
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Use the information shown to determine the required', 'angles of incidence.  Set the angle and press FIRE.', 'Success earns you another turn.'];
		bannerContentTxt[bannerContentTxt.length] = ['Nice work!', 'You defeated the computer.'];
		bannerContentTxt[bannerContentTxt.length] = ['The computer defeated you.', 'Press RESET to play again.'];
		
	//configure buttons X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['670', '10', '35'];//common XPosiotn, button_1 Y Position, button_2 Y Position
	
	var bannerContX1Pos = 0,
		bannerContX2Pos	= 0,
		bannerRows = 1, 
		bannerCols = 3,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 20;
	
	game.bannerContainerInitXPos = 0,
	game.bannerContainerInitYPos = 0;
	var panelHeight = 100;
	game.main_sea_ht = 230;
	var main_ht = 0;
		
	var fnx; //mousefunction
	var container;
	var anchor= [0,0];		//this is for the anchor rotation initial point
	
	var crx;
	
	var _scene,
		setBG,
		bannerContainer,
		staContainer,		
		bannerImg,
		dashBG,
		canvas,
		_hit_area,
		_director;

	//=======================================================
	// Create the main works area and the panel
	//=======================================================
	game.createPanels = function(director, scene)
	{
		_director = director;
		_scene = scene;
		
		//Create the main area
		var main = createMain(director.width, director.height - panelHeight, director);
		main.
			setLocation(0, 0);
		scene.addChild(main);
		
		main_ht = main.height;
		
		//Create the panel container
		var panel = createPanel( director.width, panelHeight, director );
		panel.
			setLocation(0, main.height + game.main_sea_ht);
		scene.addChild(panel);
				
		return main;
	}			
	//=======================================================
	//Create Main Display Panel
	//=======================================================
	function createMain( pw, ph, director )
	{
		setBG = new CAAT.Foundation.ActorContainer().
				setBackgroundImage(director.getImage('bg'), true);		
		game.setBG = setBG;	
		return setBG;
	}	
	//=======================================================
	//Create Bottom dashboard 
	//=======================================================
	function createPanel( pw, ph, director )
	{	
		dashBG = new CAAT.Foundation.ActorContainer().
			setBackgroundImage(
				new CAAT.SpriteImage().initialize(director.getImage('dashBG'), 1, 1), true
			).setClip(true);
		//create bottom panel
		for(var i=0; i<dashBoardEle.length; i++){
			var oActor = game.__addImageOnScene( director.getImage(dashBoardEle[i][0]), 1, 1 );		
			oActor.			
				setLocation(dashBoardEle[i][1], dashBoardEle[i][2]);
			dashBG.addChild(oActor);			
		}
		__createBannerContainer();
		__createDashBoardButton();
		__createIncDecButton();
		__createDashBoardTxt();	
		return dashBG;
	}
	//=====================================================
	//Create Dashboard Text 
	//=====================================================
	function __createDashBoardTxt(){
		var oActorTxt = game.__addTextOnImage('#FFF','Angle of incidence', 'Bold 14px Arial', 'left', game._director );
			oActorTxt.
			setLocation(450, 30);
		dashBG.addChild(oActorTxt);

		var angDegree = String.fromCharCode(176);
		var oActorTxt = game.__addTextOnImage('#FFF', angDegree, '14px Arial', 'left', game._director );
			oActorTxt.
			setLocation(615, 32);
		dashBG.addChild(oActorTxt);	

		game.angleTxt = game.__addTextOnImage('#FFF', '0.0', 'Bold 14px Arial', 'center', game._director );
		game.angleTxt		
			.setLocation(600 , 32);
		dashBG.addChild(game.angleTxt);
	}	
	function __createDashBoardButton(){
		// Buttons creation
		var btnImg= new CAAT.Foundation.SpriteImage().initialize(
				_director.getImage('buttons'), 2, 3); 
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
					game.resetMDownHandler();					
				}
			).
			setLocation(buttonXYPos[0][0], buttonXYPos[0][2]);	 
		dashBG.addChild( b1 );
		dashBG.addChild( b2 );
	}	
	//=======================================================
	//Create Increment and Decrement button
	//=======================================================
	function __createIncDecButton(){
		var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( _director.getImage('incre_decre_btn'), 1, 2);
		var iniVelIncBtn = new CAAT.Foundation.Actor().
								setId('iniVelInc').
								setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){									
								}).setLocation(630, 13);
		var iniVelDecBtn = new CAAT.Foundation.Actor().
								setId('iniVelDec').
								setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
								}).setLocation(630, 45);
						
		dashBG.addChild(iniVelIncBtn);
		dashBG.addChild(iniVelDecBtn);
		
		//the increment and decrement buttons MouseDown functions
		iniVelIncBtn.mouseDown = game.incDecMDown;
		iniVelDecBtn.mouseDown = game.incDecMDown;
		
		//the increment and decrement buttons MouseUp functions
		iniVelIncBtn.mouseUp = game.incDecMUp;
		iniVelDecBtn.mouseUp = game.incDecMUp;

		iniVelIncBtn.mouseExit = game.incDecMExit;
		iniVelDecBtn.mouseExit = game.incDecMExit;

		iniVelIncBtn.mouseDrag= game.incDecMExit;
		iniVelDecBtn.mouseDrag = game.incDecMExit;
		
		/*iniVelIncBtn.mouseDrag = function() {
			game.incDecMUp(window.event);
		}
		iniVelDecBtn.mouseDrag = function() {
			game.incDecMUp(window.event);
		}*/
	}
	//=======================================================
	//Create Banner Container
	//=======================================================
	function __createBannerContainer(){
		var dummyContainer = new CAAT.Foundation.ActorContainer()
									.setSize(400, 70)
									.setClip(true)
									.setLocation(20, 10);
									
		bannerContainer = new CAAT.Foundation.ActorContainer().
									setSize(400, 70);
											
		bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('banner'), bannerRows, bannerCols )
		);
		dummyContainer.addChild(bannerContainer);
		bannerContainer.addChild( bannerImg );		
		dashBG.addChild( dummyContainer );
		game.__bannerDisplay(0, 0, 70, 0, true);
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
