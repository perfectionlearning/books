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
	game.stationX_init = 359, game.stationY_init = 420;	
	game.spaceShipWidth = 40, game.spaceShipHeight = 37;
											//image_id, image_X_Position, image_Y_Position
	game.mainEleImg[game.mainEleImg.length] = ['widestarfield', 0,   0, 760, 500];
	game.mainEleImg[game.mainEleImg.length] = ['earth',  		298, 165, 170, 170];
	game.mainEleImg[game.mainEleImg.length] = ['station1',  	359, 420, 42, 20];
	var assets = [
		{id:'widestarfield',    url:game.actPath+'widestarfield.gif' },				
		{id:'earth',      		url:game.actPath+'earth.gif' },				
		{id:'spacship',      	url:game.actPath+'spacship.png' },	
		{id:'space2',      		url:game.actPath+'space2.png' },	
		{id:'station1',      	url:game.actPath+'station1.gif' },
		{id:'thrust',   		url:game.actPath+'thrust.png' },			
		{id:'dashBG',      		url:game.sharedPath+'dash.gif' },			
		//dashboard Image
		{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },
		{id:'well100',     		url:game.sharedPath+'well100.gif' },
		//{id:'well50',     		url:game.sharedPath+'well50.gif' },
		{id:'wellright',   		url:game.sharedPath+'wellright.gif' },								
		//Buttons GO, RESET, PAUSE
		{id:'buttons',     		url:game.sharedPath+'buttons.png' },
		//Banner Image
		{id:'banner',     		url:game.sharedPath+'banner.png' }
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
	game.__createMainImgScene(0, 2);
	game.__createMainImgScene(2, 3);
	//draw white arc on which the space station keeps orbiting
	game.__createarc();
	//this actor is where the spaceship new path is drawn
	var canvas = document.createElement('canvas');
	canvas.width = director.width;
	canvas.height = director.height - game.panelHeight;								
	game.orbitPath = new CAAT.Foundation.Actor()
			.setSize(director.width, director.height - game.panelHeight)
			.setBackgroundImage( canvas )
			.enableEvents(false)
			.setLocation(0, 0)
			.setId('orbitPath');
	game.orbitPath.__ctx = canvas.getContext('2d');
	game.orbitPath.__ctx.lineWidth = 1;
	game.orbitPath.__ctx.strokeStyle = '#e1e102';
	game.orbitPath.__ctx.fillStyle = 'none';
	game.orbitPath.__ctx.beginPath();
	game.orbitPath.__ctx.arc(380, 250, 180, 0,2*Math.PI);
	game.orbitPath.__ctx.stroke();
	game.orbitPath.__ctx.closePath();
	game.mainPanel.addChild(game.orbitPath);
	
	game.spaceshipImgObj = new CAAT.Foundation.SpriteImage()
								.initialize( game._director.getImage('space2'), 4, 9 )
								.addAnimation('forwardThrust', [4, 5, 6], 100,
									function() {
										this.setAnimationImageIndex([0]);
										game.spaceshipImg.playAnimation('normalOrbit');
									}
								)
								.addAnimation('reverseThrust', [13, 14, 15], 100, 
									function() {
										this.setAnimationImageIndex([0]);				
										game.spaceshipImg.playAnimation('normalOrbit');					
									}
								)
								.addAnimation('normalOrbit', [0], 0, 
									function() {
										this.setAnimationImageIndex([0]);										
									}
								).addAnimation('collide', [20, 21, 22, 23, 24, 25, 26, 27], 100, 
									function() {
										game.spaceshipImg.setAlpha(0);
									}
								);
	game.spaceshipImg = game.__addImageOnScene( game._director.getImage('space2'), 4,9);
	game.spaceshipImg
		.setBackgroundImage(game.spaceshipImgObj)
		.setAnimationImageIndex([0])
		.setLocation(380 - (game.spaceshipImg.width/2), 250 - 180 - (game.spaceshipImg.height/2));
	game.mainPanel.addChild( game.spaceshipImg );
	
	//game.mainContainerActors[2].setLocation(380 - (game.spaceshipImg.width/2), 250 - 180 - (game.spaceshipImg.height/2));
	/*
	game.testPath = new CAAT.Foundation.Actor()
						.setLocation(0, 0)
						//.setFillStyle('red')
						.setSize(game._director.width, game._director.height);
	//game.mainPanel.addChild(game.testPath);
	*/
	game.spaceStation_spaceShipInit();
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function(startIndex, endIndex){
	
	for(var i=startIndex; i<endIndex; i++){
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
}