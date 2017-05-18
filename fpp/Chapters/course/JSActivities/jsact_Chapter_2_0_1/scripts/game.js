//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {
	actPath: null,
	sharedPath: null,
	oDashTxtArr : [],
	initHareXPos : 90,
	initHareYPos : 296,
	initTurtleXPos : 372,
	initTurtleYPos : 320
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){	
	CAAT.DEBUG = 0;
	var assets = [	
		{id:'bg',         url:game.actPath+'track.gif'},
		{id:'dashBG',     url:game.sharedPath+'dash.gif' },
		{id:'endleft',    url:game.sharedPath+'endleft.gif' },
		{id:'endright',   url:game.sharedPath+'endright.gif' },
		{id:'well100b',   url:game.sharedPath+'well100b.gif' },
		{id:'wellleft2',  url:game.sharedPath+'wellleft2.gif' },
		{id:'wellright2', url:game.sharedPath+'wellright2.gif' },
		{id:'divider',    url:game.sharedPath+'divider.gif' },
		{id:'grid',       url:game.sharedPath+'grid.gif' },
		{id:'well50b',    url:game.sharedPath+'well50b.gif' },
		
		//Buttons GO, RESET, PAUSE
		{id:'buttons',    url:game.sharedPath+'buttons.png' },
		
		//Banner Image
		{id:'banner',     url:game.sharedPath+'banner.png' },
		
		//hare Animation spriteImage
		{id:'hareAnim',    url:game.actPath+'hare.png' },
		{id:'turtleAnim',   url:game.actPath+'turtle.png' }		
	];
	
	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		760, 	//Height of the canvas that will be created
		600,	//width of the canvas that will be created
		'activity',	// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize
	);
}

//=======================================================
//Clean up function
//=======================================================
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}
game.__gameInitialize = function( director ){
	game._director = director;
	game._scene = director.createScene();
	game.mainPanel = game.createPanels( game._director, game._scene );
	//set background image 
	game.__createImageOnMain();
	//place Hare and Tortoise image on the mainpanel
	game.__turtleHareImageOnMain();
	CAAT.loop(60);
}
//======================================================
//Adding sprite images on the main scene
//======================================================
game.__createImageOnMain = function(){	
	var oActorImg = game.__addImageOnScene( game._director.getImage('bg'), 1, 1 );
	oActorImg.				
		setLocation(0, 0);			
	game.mainPanel.addChild(oActorImg);	
}
//====================================================
//Place the hare and turtel image on scene
//====================================================
game.__turtleHareImageOnMain = function(){
	//add Hare Image on the Scene
	game.oHareSpriteImg = game.__addImageOnScene( game._director.getImage('hareAnim'), 6, 12 );
	game.oHareSpriteImg.			
		setLocation(game.initHareXPos, game.initHareYPos);
	game.mainPanel.addChild(game.oHareSpriteImg);
	
	//create Hare animation 
	game.oHareRunAnim = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('hareAnim'), 6, 12 )						
						.addAnimation('hare_run',  [1, 2, 4, 5, 6, 9, 10], 100)
						.addAnimation('hare_won', [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39], 100, function(){
							game.oHareSpriteImg.setBackgroundImage(game.oHareRunAnim).playAnimation('hare_won_continious');
						})
						.addAnimation('hare_won_continious', [42, 43, 44, 45, 46, 47], 100)
						.addAnimation('hare_lost', [13, 14, 15, 16], 100, function(){
							game.oHareSpriteImg.setAnimationImageIndex([16]);
						});
		
	//add Turtle Image on the scene
	game.oTurtleSpriteImg = game.__addImageOnScene( game._director.getImage('turtleAnim'), 13, 11 );
	game.oTurtleSpriteImg.		
		setLocation(game.initTurtleXPos, game.initTurtleYPos);
	
	//create Turtle Animation
	game.oTurtleRunAnim = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('turtleAnim'), 13, 11 )
						.addAnimation('turtle_run',  [0, 1, 2, 4, 5, 11, 12, 13, 14, 15, 16], 100)
						.addAnimation('turtle_won', [67, 68, 69, 70, 71, 72], 100, function(){
							game.oTurtleSpriteImg.setBackgroundImage(game.oTurtleRunAnim).playAnimation('turtle_won_continious');
						})
						.addAnimation('turtle_won_continious', [89, 90, 91, 92, 93, 94], 100)
						.addAnimation('turtle_lost', [99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120], 100, function(){
							game.oTurtleSpriteImg.setAnimationImageIndex([120]);
						});
	
	game.mainPanel.addChild(game.oTurtleSpriteImg);
}