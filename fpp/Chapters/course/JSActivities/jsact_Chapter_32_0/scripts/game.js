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
	
	game.mainEleImg[game.mainEleImg.length] = ['bgWire', 0, 0, false, 1, 1, false, ''];
	game.mainEleImg[game.mainEleImg.length] = ['slider', 70, 100, false, 1, 1, false, ''];
	game.mainEleImg[game.mainEleImg.length] = ['horizThumb', 160, 100, false, 1, 1, false, ''];
	game.mainEleImg[game.mainEleImg.length] = ['bulbStand', 603, 500-84, false, 1, 1, false, ''];
	game.mainEleImg[game.mainEleImg.length] = ['bulb', 554, 223, false, 8, 5, false, ''];
	game.mainEleImg[game.mainEleImg.length] = ['tungstenUp', 345, 32, false, 1, 1, false, ''];
	game.mainEleImg[game.mainEleImg.length] = ['tungstenDown', 342, 257, false, 1, 1, false, ''];
	
	var assets = [
		{id:'bgWire', url:game.actPath+'BG4Wire.gif'},
		{id:'slider', url:game.actPath+'slider.png'},
		{id:'horizThumb', url:game.actPath+'horizThumb.gif'},
		{id:'tungstenUp', url:game.actPath+'tungstenUp.png'},
		{id:'tungstenDown', url:game.actPath+'tungstenDown.png'},
		{id:'bulbStand', url:game.actPath+'Probe.gif'},
		{id:'bulb', url:game.actPath+'VertBulb.png'},
		{id:'vector', url:game.actPath+'vector.png'},
		{id:'dashBG', url:game.sharedPath+'dash.gif'},
		{id:'scopeBg', url:game.sharedPath+'ScopeBG2.gif'},
		{id:'scope', url:game.sharedPath+'scope.gif'},
		{id:'knob', url:game.sharedPath+'knob.gif'},
		{id:'banner', url:game.sharedPath+'InDash.png'}
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
		//if(i == 4) thisActorImg.setAnimationImageIndex([8]);
		cont.addChild( thisActorImg );
		game.mainActors.push( thisActorImg );
	}
}
//====================================================
// Initialize game
//====================================================
game.__gameInitialize = function( director ){	
	game.mainActors = [];
	var vectorPos = [5, 23, 41];
	var _scene = director.createScene();		
	game.getDirector = function() { return director; };
	game.getScene = function() { return _scene; };	
	game.extendActorFunctionality();
	var cont = game.createPanels( director, _scene );
	game.__createMainImgScene( cont[0], 0, 5);
	//get vector image reference
	var vectorImg = new CAAT.Foundation.SpriteImage().initialize( director.getImage('vector'), 1, 2 );
	game.startTimer();
	//--------------------------------------------
	// vector facing upwards
	//--------------------------------------------
	game.up_vector_container = new CAAT.Foundation.ActorContainer()
									.setSize(56, 585)
									.setLocation((game.getDirector().width/2)-28, -48)
									.setClip(true);
	cont[0].addChild(game.up_vector_container);											
	for(var i = 0; i < 3; i++){
		var thisActor = new CAAT.Foundation.Actor().setBackgroundImage(vectorImg);
		thisActor
			.setAnimationImageIndex([0])
			.setAlpha(0)
			.setLocation(vectorPos[i], 0);
		game.up_vector_container.addChild(thisActor);
	}
	//--------------------------------------------
	// vector facing downwards
	//--------------------------------------------
	game.down_vector_container = new CAAT.Foundation.ActorContainer()
									.setSize(56, 585)
									.setLocation((game.getDirector().width/2)-28, -48)
									.setClip(true);
	cont[0].addChild(game.down_vector_container);											
	for(var i = 0; i < 3; i++){
		var thisActor = new CAAT.Foundation.Actor().setBackgroundImage(vectorImg);
		thisActor
			.setAnimationImageIndex([1])
			.setAlpha(0)
			.setLocation(vectorPos[i]-1, -4);
		game.down_vector_container.addChild(thisActor);
	}
	
	game.__createMainImgScene( cont[0], 5, 7);
	game.slider = new CAAT.exemplarr()
			.setBackgroundImage(new CAAT.Foundation.SpriteImage().initialize(director.getImage('horizThumb'), 1, 1))
			.setLocation(game.mainActors[2].x, game.mainActors[2].y)
			.setAlpha(0.0)
			.userDrag(game.onMouseDrag, game.onMouseUp);
	cont[0].addChild(game.slider);
	
	game.topCircuitILbl = game.__addTextOnImage('#ff6600', 'I', 'italic bold 14px Arial', 'center', director );
	game.topCircuitILbl.setLocation(game.mainActors[1].width/2, 0).setAlpha(0);
	game.topCircuitIVect = new CAAT.Foundation.ActorContainer()
							.setLocation(game.mainActors[1].x, game.mainActors[1].y - 50)
							.setSize(game.mainActors[1].width, 30);
	game.topCircuitIVect.addChild(game.topCircuitILbl);
	cont[0].addChild(game.topCircuitIVect);
	
	var topCircuitITxtLbl = game.__addTextOnImage('white', 'Current', 'bold 14px Arial', 'center', director );
	topCircuitITxtLbl.setLocation(game.mainActors[1].x + 30, game.mainActors[1].y - 18);
	cont[0].addChild(topCircuitITxtLbl);
	
	var topCircuitZeroLbl = game.__addTextOnImage('white', '0', 'bold 14px Arial', 'center', director );
	topCircuitZeroLbl.setLocation(game.mainActors[1].x + (game.mainActors[1].width/2), game.mainActors[1].y + game.mainActors[1].height + 2);
	cont[0].addChild(topCircuitZeroLbl);
	
	game.magneticFieldLbl = game.__addTextOnImage('red', 'B', 'italic bold 14px Arial', 'center', director );
	game.magneticFieldLbl.setLocation(director.width/2 + 38, director.height/2 - 85).setAlpha(0);
	cont[0].addChild(game.magneticFieldLbl);
	
	//plot the oscillation
	var canvas = document.createElement('canvas');
		canvas.width = 201;
		canvas.height = 101;
	game.oscilloscope = new CAAT.Foundation.ActorContainer()
									.setSize(201, 101)
									.setBackgroundImage( canvas )
									.setLocation(445, -7)
									.setClip(true);
	cont[1].addChild(game.oscilloscope);
	
	game.bottomCircuitILbl = game.__addTextOnImage('#ff6600', 'I', 'italic bold 14px Arial', 'center', director );
	game.bottomCircuitILbl.setLocation(game.mainActors[1].width/2 - 5, -15).setAlpha(0);
	//game.bottomCircuitILbl.setFillStyle('red');
	game.bottomCircuitIVect = new CAAT.Foundation.ActorContainer()
							.setLocation(director.width/2 + 45, (director.height/2) - 10)
							//.setFillStyle('red')
							.setSize(game.mainActors[1].width, 30);
	game.bottomCircuitIVect.addChild(game.bottomCircuitILbl);
	cont[0].addChild(game.bottomCircuitIVect);
	
	CAAT.loop(60);
}