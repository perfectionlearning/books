//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {};
game.actPath = '';
game.sharedPath = '';
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){		
	CAAT.DEBUG = 0;
	game.mainEleImg = [];
	game.mainEleImg[game.mainEleImg.length] = ['grid',  	0,   0];//image_id, image_X_Position, image_Y_Position
	game.mainEleImg[game.mainEleImg.length] = ['hand',		0,  193];
		
	var assets = [
		{id:'grid', url:game.actPath+'grid.gif'},
		{id:'hand', url:game.actPath+'hand.png'},
		{id:'dashBG', url:game.sharedPath+'dash.gif'},
		{id:'wellleft2', url:game.sharedPath+'wellleft2.gif'},
		{id:'well100b', url:game.sharedPath+'well100b.gif'},
		{id:'wellright2', url:game.sharedPath+'wellright2.gif'},
		{id:'incre_decre_btn', url:game.sharedPath+'incre_decre_btn.png'},
		{id:'incrBgMed', url:game.sharedPath+'incrBgMed.gif'},
		{id:'buttons', url:game.sharedPath+'buttons.png'},
		{id:'banner', url:game.sharedPath+'banner.png'}
	];
		
	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		750, 	//Height of the canvas that will be created
		550,	//width of the canvas that will be created
		'activity',	// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize
	);
	//
	// Timer collapses are fixed by freezing the activity
	//
	CAAT.bindEvent(window, 'blur', function (event) {
		if(game.gameStatus == 'started') {
			game.pauseBtnMDownHandler();
		}
	}, false);
}

game.Cleanup = function(){
	CAAT.clearEvents();
    CAAT.currentDirector.clean();
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function( cont ){
	game.mainContainerActors = [];
	var _director = game.getDirector();
	var i = null;
	
	i = 0;
	var oActorImg_0 = game.__addImageOnScene( _director.getImage(game.mainEleImg[i][0]), 1, 1 );		
	oActorImg_0.
		centerOn(oActorImg_0.width/2, oActorImg_0.height/2).
		setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);
	cont.addChild( oActorImg_0 );	
	game.mainContainerActors.push(oActorImg_0);
	
	i = 1;
	var oActorImg_2 = game.__addImageOnScene( _director.getImage(game.mainEleImg[i][0]), 1, 1 );		
	oActorImg_2.
		centerOn(oActorImg_2.width/2, oActorImg_2.height/2).
		setAlpha(1.0).
		setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);
	cont.addChild( oActorImg_2 );
	game.mainContainerActors.push(oActorImg_2);
	
	game.createPattern(_director, cont, game.gridColor, game.currentPaintableActorLeft, 0);				
}

game.__gameInitialize = function( director ){		
	var _scene = director.createScene();		
	game.getDirector = function() { return director; };
	game.getScene = function() { return _scene; };		
	var cont = game.createPanels( director, _scene );
	game.__createMainImgScene( cont );
	CAAT.loop(60);
}