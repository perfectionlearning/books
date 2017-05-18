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
	game.mainContainerActors = [];
	game.mainEleImg =[];	
	game.mainEleImg[game.mainEleImg.length] = ['widestarfield', 0,   0, 760, 500];//image_id, image_X_Position, image_Y_Position
	game.mainEleImg[game.mainEleImg.length] = ['smEarth',  		350,   250, 60, 60];//image_id, image_X_Position, image_Y_Position		
	
		var assets = [
			{id:'widestarfield',      	url:game.actPath+'widestarfield.gif' },				
			{id:'smEarth',      		url:game.actPath+'smEarth.gif' },				
			{id:'satellite',   			url:game.actPath+'satellite.png' },
			{id:'dashBG',      			url:game.sharedPath+'dash.gif' },	
			//dashboard Image			
			{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },
			{id:'well100',     		url:game.sharedPath+'well100.gif' },
			{id:'wellright',   		url:game.sharedPath+'wellright.gif' },
			//Banner Image
			{id:'InDash',     		url:game.sharedPath+'InDash.png' },
			{id:'buttons',     		url:game.sharedPath+'buttons.png' },
			{id:'bottom',     		url:game.sharedPath+'bottom.png' }
		];
		
	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		760, 	//Height of the canvas that will be created
		600,	//width of the canvas that will be created
		'activity',	// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize
	);
	//
	// Timer collapses are fixed by freezing the activity
	//
	CAAT.bindEvent(window, 'blur', function (event) {
		if(game.status == 'started') {
			game.pauseBtnMDownHandler();
		}
	}, false);			
};	
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}	
game.__gameInitialize = function( director ){
	game._director = director;			
	game._scene = director.createScene();
	game.mainPanel = game.createPanels( game._director, game._scene );
	game.__createMainImgScene();
	game.__createarc();
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function(){
	
	for(var i=0;i<game.mainEleImg.length;i++){
		var oActorImg = game.__addImageOnScene(game._director.getImage(game.mainEleImg[i][0]), 1, 1 );
		if(i == 1) {
			var xVal = game._director.width/2 - (game.mainEleImg[i][3]/2);
			var yVal = (game._director.height - game.panelHeight)/2 - (game.mainEleImg[i][4]/2);
			//console.log([xVal, yVal]);
			oActorImg.setLocation(xVal, yVal);			
		} else {
			oActorImg.setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);			
		}
		game.mainPanel.addChild(oActorImg);
		game.mainContainerActors.push(oActorImg);
	}
	
	
	game.spaceshipImgObj = new CAAT.Foundation.SpriteImage()
								.initialize( game._director.getImage('satellite'), 4, 10 )
								.addAnimation('beforeLaunch', [0, 1, 2, 3], 100)
								.addAnimation('beforeOrbit', [12, 13, 14, 15, 16, 17, 18, 19, 20], 100)
								.addAnimation('onReachingOrbit', [4, 5, 6, 7, 8, 9, 10, 11], 100, 
									function() {
										this.setAnimationImageIndex([0]);										
									}
								);
				
	game.spaceshipImg = game.__addImageOnScene( game._director.getImage('satellite'), 4, 10 );
	game.spaceshipImg
		.setBackgroundImage(game.spaceshipImgObj).playAnimation("beforeLaunch")
		.setLocation(180 - (game.spaceshipImg.width/2), 300 - (game.spaceshipImg.height/2));
				

	game.redPoint =  new CAAT.ShapeActor()
					.setFillStyle('red')
					.setSize(6, 6);
	
	game.inputElementsArr[0].value = 0;
	game.inputElementsArr[1].value = 0;
	
	game.mainPanel.addChild(game.redPoint);
	game.mainPanel.addChild( game.spaceshipImg );
	game.testPath = new CAAT.Foundation.Actor()
						.setLocation(0, 0)
						//.setFillStyle('red')
						.setSize(game._director.width, game._director.height);
	game.mainPanel.addChild(game.testPath);
	var canvas1 = document.createElement('canvas');
		canvas1.width = game._director.width;
		canvas1.height = game._director.height - 100;
		game.graphCont = new CAAT.Foundation.ActorContainer()
						.setBounds( 0, 0, game._director.width, game._director.height - 100)
						.setFillStyle('red')
						.setBackgroundImage( canvas1 )
						.setClip(false);
		game.mainPanel.addChild(game.graphCont);
	game.spaceshipImg.setLocation(380 - (game.spaceshipImg.width/2), 250-50);
	game.redPoint.setLocation(380 - Math.ceil(game.redPoint.width/2), 250-33);
	game.rotateEarth();
}