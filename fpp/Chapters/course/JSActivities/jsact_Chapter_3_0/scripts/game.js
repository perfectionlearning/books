//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {
	_director: null,
	_scene: null,
	spaceshipImg: null,
	twist: null,
	eatjoeImg: null,
	edsfuelImg: null,
	silvergymImg: null,
	displacementX: 0,
	displacementY: 0,	
	oDashTxtArr: [],
	goFlag: true
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){		
		var assets = 
		[	 
			{id:'background',    url:game.actPath+'background.gif'},
			{id:'spaceship',     url:game.actPath+'spaceship.png'},
			{id:'twist',       	 url:game.actPath+'twist.png'},
			{id:'edsfuel',       url:game.actPath+'edsfuel.png'},
			{id:'eatjoe',      	 url:game.actPath+'eatjoe.png'},
			{id:'silvergym',     url:game.actPath+'silvergym.png'},
			{id:'vortex',        url:game.actPath+'vortex.png'},
			{id:'dashBG',      	 url:game.sharedPath+'dash.gif'},	

			//dashboard Image
			{id:'wellleft',    	 url:game.sharedPath+'wellleft.gif'},
			{id:'well100',     	 url:game.sharedPath+'well100.gif'},
			{id:'wellright',   	 url:game.sharedPath+'wellright.gif'},
			{id:'purpleIcon',    url:game.sharedPath+'purpleIcon.gif'},
					
			//Buttons GO, RESET, PAUSE
			{id:'buttons',     	url:game.sharedPath+'buttons.png'},
			
			//Banner Image
			{id:'banner',      	url:game.actPath+'banner.png'}						
	];
		
	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		600, 	//Height of the canvas that will be created
		600,	//width of the canvas that will be created
		'activity',	// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize
	);
	//
	// Timer collapses are fixed by freezing the activity
	//
	/*CAAT.bindEvent(window, 'blur', function (event) {
		if(!game.goFlag){
			game.pauseBtnMDownHandler();		
		}
	}, false);*/
};
		
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}
	
game.__gameInitialize = function( director ){
	CAAT.DEBUG = 0;	
	game._director = director;
	game._scene = director.createScene();
	game.mainPanel = game.createPanels( game._director, game._scene );
	//add image to the main
	game.__createMainImgScene();
	//banner display
	game.__createBannerContainer();
	CAAT.loop(60);
}
		
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function(){			
	var oActorImg = game.__addImageOnScene( game._director.getImage('background'), 1, 1 );		
		oActorImg.
			setLocation(0, 0);			
		game.mainPanel.addChild(oActorImg);
	
	var rb = new CAAT.Behavior.RotateBehavior().
				setValues(0, 2 * Math.PI, 0.5, 0.5).						
				setFrameTime(0, 5000).
				setCycle(true);
			
	game.spaceShipMove3 = new CAAT.Foundation.SpriteImage().initialize(game._director.getImage('twist'),2, 9)
				   .addAnimation("st",   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 0], 100, function(){game.animationCallBack();})
				   .addAnimation('stand', [0, 0], 100);
	
	game.twist = game.__addImageOnScene( game._director.getImage('twist'), 2, 9 );
	game.twist.setLocation(467, 367);	
	game.mainPanel.addChild( game.twist );
	game.twist.addBehavior(rb);
	
	game.eatjoeImgAnim = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('eatjoe'), 3, 9 ).
									addAnimation('eatjoeImgAnimation', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 100);
				
	game.eatjoeImg = game.__addImageOnScene( game._director.getImage('eatjoe'), 3, 9 );
	game.eatjoeImg
		.setBackgroundImage(game.eatjoeImgAnim).playAnimation('eatjoeImgAnimation')
		.setLocation(425, 124);			
	game.mainPanel.addChild( game.eatjoeImg );
	
	game.eatjoeImgAnim = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('edsfuel'), 8, 9 ).
									addAnimation('edsfuelImgAnimation', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14], 100);
	
	game.edsfuelImg = game.__addImageOnScene( game._director.getImage('edsfuel'), 8, 9 );
	game.edsfuelImg
		.setBackgroundImage(game.eatjoeImgAnim).playAnimation('edsfuelImgAnimation')
		.setLocation(40, 83);			
	game.mainPanel.addChild( game.edsfuelImg );
	
	game.silvergymImgAnim = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('silvergym'), 9, 5 ).
									addAnimation('silvergymImgAnimation', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43], 100);
	
	game.silvergymImg = game.__addImageOnScene( game._director.getImage('silvergym'), 9, 5 );
	game.silvergymImg
		.setBackgroundImage(game.silvergymImgAnim).playAnimation('silvergymImgAnimation')
		.setLocation(95, 285);			
	game.mainPanel.addChild( game.silvergymImg );	
	
	// game.spaceshipImg --> setLocation
	game.spaceshipImg = game.__addImageOnScene( game._director.getImage('spaceship'), 6, 11 );
	game.spaceshipImg
		.setAnimationImageIndex([0])
		.setLocation(296, 241);			
	game.mainPanel.addChild( game.spaceshipImg );
				
}