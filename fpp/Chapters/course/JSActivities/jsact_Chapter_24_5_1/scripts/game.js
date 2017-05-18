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
	game.testChgX = 575;
	game.testChgY = 440+32;
	game.mainEleImg = [];
											//image_id, image_X_Position, image_Y_Position, allowDrag, 
											//spriteRows, spriteCol, isCorrectAnswer, volume value
	
	game.mainEleImg[game.mainEleImg.length] = ['efield4Bg7', 30, -10, false, 1, 1, false, ''];
	game.mainEleImg[game.mainEleImg.length] = ['graph', 0, -60, false, 1, 1, false, ''];
	game.mainEleImg[game.mainEleImg.length] = ['proton', 214.5, 213, false, 1, 2, false, ''];
	game.mainEleImg[game.mainEleImg.length] = ['proton', 595, 213, false, 1, 2, false, ''];
	
	
	var assets = [
		{id:'proton', url:game.actPath+'proton.png'},
		{id:'efield4Bg7', url:game.actPath+'efield4Bg7.gif'},
		{id:'graph', url:game.actPath+'graph.gif'},
		{id:'wellleft', url:game.sharedPath+'wellleft.gif'},
		{id:'well100', url:game.sharedPath+'well100.gif'},
		{id:'wellright', url:game.sharedPath+'wellright.gif'},
		{id:'buttons', url:game.sharedPath+'buttons.png'},
		{id:'incDecMed', url:game.sharedPath+'incrBgMed.gif'},
		{id:'incDecBtn', url:game.sharedPath+'incre_decre_btn.png'},
		{id:'inDash', url:game.sharedPath+'inDash.png'},
		{id:'dash', url:game.sharedPath+'dash.gif'},
		{id:'bottom', url:game.sharedPath+'bottom.png'},
		{id:'testCharge', url:game.actPath+'testChg.gif'}
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
		
		//if(i == 2 || i == 3) thisActorImg.setAlpha(0.3);
		cont.addChild( thisActorImg );
		game.mainActors.push( thisActorImg );
	}
}
//====================================================
// Initialize game
//====================================================
game.__gameInitialize = function( director ){	
	//game.testChgX = 575;
	//game.testChgY = 440+32;
	game.mainActors = [];
	var _scene = director.createScene();		
	game.getDirector = function() { return director; };
	game.getScene = function() { return _scene; };	
	game.extendActorFunctionality();
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
								.setSize(director.width, director.height);
	game.getScene().addChild(game.mainActorContainerTouchLayer);				
	
	var posChargeLbl_1 = game.__addTextOnImage( 'black', '+2', 'bold 15px Arial', 'left', game.getDirector() );
	var posChargeLbl_2 = game.__addTextOnImage( 'black', 'q', 'italic bold 15px Arial', 'left', game.getDirector() );
	posChargeLbl_1.setLocation(game.mainActors[2].x - 30, game.mainActors[2].y + 3);
	posChargeLbl_2.setLocation(game.mainActors[2].x - 13, game.mainActors[2].y + 3);
	game.mainActorContainer.addChild(posChargeLbl_1);
	game.mainActorContainer.addChild(posChargeLbl_2);
	
	var negChargeLbl_1 = game.__addTextOnImage( 'black', '-', 'bold 15px Arial', 'left', game.getDirector() );
	var negChargeLbl_2 = game.__addTextOnImage( 'black', 'q', 'italic bold 15px Arial', 'left', game.getDirector() );
	negChargeLbl_1.setLocation(game.mainActors[3].x + game.mainActors[3].width + 3, game.mainActors[3].y + 3);
	negChargeLbl_2.setLocation(game.mainActors[3].x + game.mainActors[3].width + 10, game.mainActors[3].y + 3);
	game.mainActorContainer.addChild(negChargeLbl_1);
	game.mainActorContainer.addChild(negChargeLbl_2);
	
	game.testCharge = new CAAT.exemplarr()
			.setBackgroundImage(new CAAT.Foundation.SpriteImage().initialize(director.getImage('testCharge'), 1, 1))
			.setLocation(game.testChgX, game.testChgY)
			.setAlpha(0.0)
			.userDrag(game.onMouseDrag, game.onMouseUp);
	game.testCharge1 = new CAAT.exemplarr()
			.setBackgroundImage(new CAAT.Foundation.SpriteImage().initialize(director.getImage('testCharge'), 1, 1))
			.setLocation(game.testChgX, game.testChgY)
			.setAlpha(1.0);
	game.mainActorContainer.addChild(game.testCharge1);
	game.mainActorContainerTouchLayer.addChild(game.testCharge);
	//append the reset button
	game.__createDashBoardButton( game.getScene() );
	
	game.midPoint = new CAAT.ShapeActor()
					.setLocation(0, 0)
					.setFillStyle('red')
					.setSize(1,1);
	//game.mainActorContainerTouchLayer.addChild(game.midPoint);
	
	
	//append the charge, vector and label
	game.buildElectricField( game.mainActorContainerTouchLayer );
	
	
	CAAT.loop(60);
}