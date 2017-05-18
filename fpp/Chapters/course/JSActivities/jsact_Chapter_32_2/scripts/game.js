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
	game.circuitILblX = 30, game.circuitILblY = 225;
	game.mainEleImg = [];
											//image_id, image_X_Position, image_Y_Position, allowDrag, 
											//spriteRows, spriteCol
	
	game.mainEleImg[game.mainEleImg.length] = ['VerticalWire',  	139, 95, false, 3, 20];
	game.mainEleImg[game.mainEleImg.length] = ['topWire',  	137, 93, false, 17, 3];
	game.mainEleImg[game.mainEleImg.length] = ['bottomWire',  	140, 395, false, 17, 3];
	game.mainEleImg[game.mainEleImg.length] = ['MediumWire',  		370,  90, false, 1, 1];
	game.mainEleImg[game.mainEleImg.length] = ['slider',  		     20, 461, false, 1, 1];
	game.mainEleImg[game.mainEleImg.length] = ['horizThumb',         62, 461, true,  1, 1];
	game.mainEleImg[game.mainEleImg.length] = ['bulb',               65, 180, false, 2, 6];
	
	var assets = [
			{id:'bulb',   			url:game.actPath+'bulb.png' },	
			{id:'MediumWire',      	url:game.actPath+'MediumWire.gif' },				
			//{id:'VerticalWire',     url:game.actPath+'VerticalWire.png' },
			{id:'VerticalWire',     url:game.actPath+'sprite1.png' },
			{id:'topWire',   url:game.actPath+'topWire.png' },
			{id:'bottomWire',   url:game.actPath+'bottomWire.png' },
			//dashboard Image			
			{id:'dashBG',      		url:game.sharedPath+'dash.gif' },
			{id:'banner',    	    url:game.sharedPath+'bannerTop.png' },
			{id:'buttons',     		url:game.sharedPath+'buttons.png' },
			{id:'scopeBg',   		url:game.sharedPath+'ScopeBG3.gif' },
			{id:'scope',    		url:game.sharedPath+'scope.gif' },
			{id:'knob',     		url:game.sharedPath+'knob.gif' },
			{id:'incrBgMed',   		url:game.sharedPath+'incrBgMed.gif' },
			{id:'incre_decre_btn',  url:game.sharedPath+'incre_decre_btn.png' },
			{id:'slider',           url:game.sharedPath+'horizontalSlider.png' },
			{id:'well50b',   		url:game.sharedPath+'well50b.gif' },
			{id:'well100b',   		url:game.sharedPath+'well100b.gif' },
			{id:'wellleft2',   		url:game.sharedPath+'wellleft2.gif' },
			{id:'wellright2',   	url:game.sharedPath+'wellright2.gif' },
			{id:'horizThumb',		url:game.sharedPath+'horizThumb.gif' },
			
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
		if(i == 0) thisActorImg.setAnimationImageIndex([29]);
		if(i == 1) thisActorImg.setAnimationImageIndex([29]);
		if(i == 2) thisActorImg.setAnimationImageIndex([29]);
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
	
	game.bgVector = new CAAT.Foundation.ActorContainer()
									.setSize(director.width, director.height)
									.setLocation(0, 0)
									.setFillStyle('#DDD')
									.setClip(false);
	cont[0].addChild(game.bgVector);
	game.__createMainImgScene( cont[0], 0, game.mainEleImg.length);
	game.fgVector = new CAAT.Foundation.ActorContainer()
									.setSize(director.width, director.height)
									.setLocation(0, 0)
									.setClip(false);
	cont[0].addChild(game.fgVector);
	game.startTimer();
	
	game.sliderContainer = new CAAT.exemplarr()
			.setBounds(game.mainActors[4].x, game.mainActors[4].y, game.mainActors[4].width, game.mainActors[4].height)
			.setFillStyle('red')
			.setAlpha(0.0);
	game.sliderContainer.mouseDown = game.sliderClick;
	cont[0].addChild(game.sliderContainer);
	
	game.slider = new CAAT.exemplarr()
			.setBackgroundImage(new CAAT.Foundation.SpriteImage().initialize(director.getImage('horizThumb'), 1, 1))
			.setLocation(game.mainActors[5].x, game.mainActors[5].y)
			.setAlpha(0.0)
			.userDrag(game.onMouseDrag, game.onMouseUp);
	cont[0].addChild(game.slider);
	
	game.verticalRod = new CAAT.exemplarr()
			.setBackgroundImage(new CAAT.Foundation.SpriteImage().initialize(director.getImage('MediumWire'), 1, 1))
			.setLocation(game.mainActors[3].x, game.mainActors[3].y)
			.setAlpha(0.0)
			.setId('verticalRod')
			.userDrag(game.onMouseDragVR, game.onMouseUpVR);
	cont[0].addChild(game.verticalRod);
		
	game.circuitILbl = game.__addTextOnImage('#ff0000', 'I', 'italic bold 14px Arial', 'center', director );
	game.circuitILbl.setLocation(game.circuitILblX, game.circuitILblY).setAlpha(1);
	game.circuitIVect = new CAAT.Foundation.ActorContainer()
							.setLocation(game.mainEleImg[0][1] + 10, 0)
							//.setFillStyle('red')
							.setSize(30, director.height);
	game.circuitIVect.addChild(game.circuitILbl);
	cont[0].addChild(game.circuitIVect);
	
	game.__createBannerContainer( cont[0] );
	
	//plot the oscillation
	var canvas = document.createElement('canvas');
		canvas.width = 201;
		canvas.height = 101;
	game.oscilloscope = new CAAT.Foundation.ActorContainer()
							.setSize(207, 101)
							.setBackgroundImage( canvas )
							.setLocation(440, -6)
							.setClip(true);
	cont[1].addChild(game.oscilloscope);
	
	game.buildFieldStrength();
	CAAT.loop(60);
}