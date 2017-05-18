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
											//image_id, image_X_Position, image_Y_Position, allowDrag, 
											//spriteRows, spriteCol, isCorrectAnswer, volume value
	
	game.mainEleImg[game.mainEleImg.length] = ['graph',  0,   -60, false, 1, 1, false, ''];
	game.mainEleImg[game.mainEleImg.length] = ['proton', 214.5, 213, false, 1, 2, false, ''];
	
					
	var assets = [
		{id:'proton', url:game.actPath+'proton.png'},
		{id:'graph', url:game.actPath+'graph.gif'},
		{id:'wellleft', url:game.sharedPath+'wellleft.gif'},
		{id:'well100', url:game.sharedPath+'well100.gif'},
		{id:'wellright', url:game.sharedPath+'wellright.gif'},
		{id:'buttons', url:game.sharedPath+'buttons.png'},
		{id:'incDecMed', url:game.sharedPath+'incrBgMed.gif'},
		{id:'incDecBtn', url:game.sharedPath+'incre_decre_btn.png'},
		{id:'inDash', url:game.sharedPath+'inDash.png'},
		{id:'dash', url:game.sharedPath+'dash.gif'},
		{id:'bottom', url:game.sharedPath+'bottom.png'}
	];
		
	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		760, 	//Height of the canvas that will be created
		540,	//width of the canvas that will be created
		'activity',	// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize
	);
}
//====================================================
//Clean up events attached because of this activity
//====================================================
game.Cleanup = function(){
	CAAT.clearEvents();
    CAAT.currentDirector.clean();
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function( cont, startIndex, endIndex){
	var _director = game.getDirector();	
	for(var i = startIndex; i < endIndex; i++) {
		var thisActorImg = game.__addImageOnScene( _director.getImage(game.mainEleImg[i][0]), game.mainEleImg[i][4], game.mainEleImg[i][5] );		
		thisActorImg
			//.centerOn(thisActorImg.width/2, thisActorImg.height/2)
			.setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2])
			.setClip(false);
		if(i == 1) thisActorImg.setAlpha(1.0);
		cont.addChild( thisActorImg );
		game.mainActors.push( thisActorImg );
	}
}
//====================================================
// Initialize game
//====================================================
game.__gameInitialize = function( director ){	
	game.mainActors = [];
	var _scene = director.createScene();		
	game.getDirector = function() { return director; };
	game.getScene = function() { return _scene; };	
	var cont = game.createPanels( director, _scene );
	game.__createMainImgScene( cont[0], 0, game.mainEleImg.length);

	//ray and charge container
	game.mainActorContainer = new CAAT.Foundation.ActorContainer()
								//.setFillStyle('#00FFFF')
								.setSize(director.width, director.height);
	game.getScene().addChild(game.mainActorContainer);
	//ray touchHandle layer
	game.mainActorContainerTouchLayer = new CAAT.Foundation.ActorContainer()
								//.setFillStyle('#00FFFF')
								.setSize(director.width, director.height - game.panelHeight);
	game.getScene().addChild(game.mainActorContainerTouchLayer);				
	
	game.__createDashBoardTxt( game.getScene() );
	game.__createDashBoardButton( game.getScene() );
	game.__createIncDecButton( game.getScene() );
	
	var midPoint =  new CAAT.ShapeActor()
					.setLocation(game.pool_cx, game.pool_cy)
					.setFillStyle('red')
					.setSize(5, 5);
	//cont.addChild(midPoint);
	game.mainActorContainerTouchLayer.mouseDown = game.showCharge;
	game.mainActorContainerTouchLayer.mouseDrag = game.dragCharge;		
	game.buildElectricField( game.mainActorContainer );
	CAAT.loop(60);
}