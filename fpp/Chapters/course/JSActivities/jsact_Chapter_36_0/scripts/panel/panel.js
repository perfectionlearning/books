
;(function() {

//==========================================================================
// UI Panel Routines
//==========================================================================
	//dash board elements
	var dashBoardEle = [];	
		dashBoardEle[dashBoardEle.length] = ['endleft',    '1',  '0'];//image_id, image_X_Position, image_Y_Position
		dashBoardEle[dashBoardEle.length] = ['endright',    '798', '0'];
		dashBoardEle[dashBoardEle.length] = ['well100b',   '500', '0'];
		dashBoardEle[dashBoardEle.length] = ['wellleft2',  '500', '0'];
		dashBoardEle[dashBoardEle.length] = ['wellright2', '600', '0'];
	
	//captor and submarine position from left to right
	game.captorArr = [];
		game.captorArr[game.captorArr.length] = [668, 76, 49, 9];	//x, y, org-x, org-y position of the captor 3
		game.captorArr[game.captorArr.length] = [421, 22, 57, 9];	//x, y, org-x, org-y position of the captor 2
		game.captorArr[game.captorArr.length] = [258, 60, 23, 5]; 	//x, y, org-x, org-y position of the captor 1
		game.captorArr[game.captorArr.length] = [670, 396, 48, 8];	//x, y, org-x, org-y position of the submarine 3
		game.captorArr[game.captorArr.length] = [65, 364, 37, 6];	//x, y, org-x, org-y position of the submarine 1
		game.captorArr[game.captorArr.length] = [457, 434, 29, 5];	//x, y, org-x, org-y position of the submarine 2
		
	game.isGameOver = false;
	game.isGameStart = false;
	
	//banner text
	var bannerContentTxt = [];
		bannerContentTxt[bannerContentTxt.length] = ['Drag an arrow to aim laser at submarine', 'and press FIRE. Keep firing until you miss.', 'When you miss, the computer gets a turn.'];
		bannerContentTxt[bannerContentTxt.length] = ['Nice shot!', 'You defeated the computer.', ''];
		bannerContentTxt[bannerContentTxt.length] = ['The computer defeated you.', 'Press RESET to play again.', ''];
		
	//button X, Y Position
	var buttonXYPos = [];
		buttonXYPos[buttonXYPos.length] = ['518', '10', '36']; //common XPosiotn, button_1 Y Position, button_2 Y Position, button_3 Y Position
	
	var bannerRows = 1, 
		bannerCols = 4,
		bannerTxtInitXPos = 200,
		bannerTxtInitYPos = 20;
	
	game.bannerContainerInitXPos = 0,
	game.bannerContainerInitYPos = 0;
	var panelHeight = 100;
	game.main_sea_ht = 230;
	var main_ht = 0;
	
	//Pointer position
	game.pointerArr=[];
		game.pointerArr[game.pointerArr.length]=[278, 75];
		game.pointerArr[game.pointerArr.length]=[438, 42];
		game.pointerArr[game.pointerArr.length]=[688, 95];
	
	var fnx; //mousefunction
	var container;
	var anchor= [0,0];		//this is for the anchor rotation initial point
	
	var crx;
	game._actor;
	game.actorx = game.pointerArr[0][0]+10;
	game.actory = game.pointerArr[0][1];
	game.angle = Math.PI;
	game.bg_Hi = 270;
	game.createActorPaint = 0;
	game.array_Paint = new Array();
		game.array_Paint[0] = new Array();
		game.array_Paint[1] = new Array();		//for painting the array.
	
	game.sub_point = new Array();
		game.sub_point[0] = [((game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2)) + (game.captorArr[3][0] + ((60 - game.captorArr[3][2])/2) + game.captorArr[3][2]))/2, game.captorArr[3][1] + ((20 - game.captorArr[3][3])/2), 'pointer_3']
		game.sub_point[1] = [((game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2)) + (game.captorArr[4][0] + ((60 - game.captorArr[4][2])/2) + game.captorArr[4][2]))/2, game.captorArr[4][1] + ((20 - game.captorArr[4][3])/2), 'pointer_4']
		game.sub_point[2] = [((game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2)) + (game.captorArr[5][0] + ((60 - game.captorArr[5][2])/2) + game.captorArr[5][2]))/2, game.captorArr[5][1] + ((20 - game.captorArr[5][3])/2), 'pointer_5'];
	var _scene,
		setBG,
		bannerContainer,
		staContainer,		
		bannerImg,
		dashBG,
		canvas,
		_hit_area,
		_director;

	game.arrow_container = [];
		game.arrow_container[game.arrow_container.length] = 'ArrowContainer_0';
		game.arrow_container[game.arrow_container.length] = 'ArrowContainer_2';
		game.arrow_container[game.arrow_container.length] = 'ArrowContainer_3';
	game.getHitArea;
	game.copterArray = [];
		game.copterArray[game.copterArray.length] = 'cop_0';
		game.copterArray[game.copterArray.length] = 'cop_1';
		game.copterArray[game.copterArray.length] = 'cop_2';
		game.copterArray[game.copterArray.length] = 'cop_3';
		game.copterArray[game.copterArray.length] = 'cop_4';
		game.copterArray[game.copterArray.length] = 'cop_5';
	game.setBG;

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
		return dashBG;
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
	//Create Banner Container
	//=======================================================
	function __createBannerContainer(){
		
		staContainer = new CAAT.Foundation.ActorContainer().
									setSize(400, 70);
		staContainer.
					setLocation(50, 10).
					setClip(true);
									
		bannerContainer = new CAAT.Foundation.ActorContainer().
									setSize(400, 70);
											
		bannerImg = new CAAT.Foundation.Actor().setBackgroundImage(
			new CAAT.Foundation.SpriteImage().initialize( _director.getImage('banner'), 1, 3 )
		);
		bannerContainer.addChild( bannerImg );	
		dashBG.addChild( staContainer );
		staContainer.addChild( bannerContainer );
		game.__bannerDisplay(0, 50, game.bannerContainerInitYPos, true );
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
	//=======================================================
	//Banner Display Container
	//=======================================================
	game.__bannerDisplay = function( index, y1, y2, flag ){		
		bannerImg.
			setAnimationImageIndex([index]);			
		if(flag){
			var fromY1 = y1;
			var fromY2 = y2;
		} else {
			var fromY1 = y2;
			var fromY2 = y1;
		}		
		var pathBehaviour = new CAAT.Behavior.PathBehavior().
			setValues( new CAAT.Path().setLinear(game.bannerContainerInitXPos, fromY1, game.bannerContainerInitXPos, fromY2).setInteractive(false) ).
			setDelayTime(0, 200);
		
		for(var i=0;i<bannerContentTxt[index].length;i++){
			if(this['bannerTxt_'+i]){
				bannerContainer.removeChild(this['bannerTxt_'+i]);
			}
			this['bannerTxt_'+i] = game.__addTextOnImage('#000000', bannerContentTxt[index][i], 'bold 14px arial', 'center', _director );
			this['bannerTxt_'+i].setLocation(bannerTxtInitXPos, 8+(bannerTxtInitYPos*i));
			bannerContainer.addChild(this['bannerTxt_'+i]);
		}			
		bannerContainer.addBehavior(pathBehaviour);			
	}
		
})();
