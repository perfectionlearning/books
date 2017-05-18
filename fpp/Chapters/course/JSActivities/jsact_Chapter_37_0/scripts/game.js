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
	var oActorContainer_0 = null, oActorContainer_1 = null, oActorContainer_2 = null, oActorContainer_3 = null, oActorContainer_4 = null;
	var oActorImg_0 = null, oActorImg_1 = null, oActorImg_2 = null, oActorImg_3 = null, oActorImg_4 = null;
	game.actorImg = [];
	game.actorContainer = [];
	game.Rays = [];
									//image_id, image_X_Position, image_Y_Position, rows, column,allow/stop drag
									//width, height, id
	game.mainEleImg[game.mainEleImg.length] = ['lens',	     339,  125, 6, 12, false, 960, 1560, 'lens'];
	game.mainEleImg[game.mainEleImg.length] = ['penguinRight', 600,  250, 1, 1,  false, 60, 104, 'p2'];
	game.mainEleImg[game.mainEleImg.length] = ['penguinLeft',	 170,  178, 1, 1,  true, 43, 72, 'p1'];
	game.mainEleImg[game.mainEleImg.length] = ['fDot',	     280,  248, 1, 1,  true, 9, 25, 'f1'];
	game.mainEleImg[game.mainEleImg.length] = ['fDot',	     470,  248, 1, 1,  true, 9, 25, 'f2'];

	// List of all assets used by this game
	// Includes a path to the asset and an ID that is used throughout the code to reference it.
	var assets = [
		{id:'penguinLeft', url:game.actPath+'penLeft.png'},
		{id:'penguinRight', url:game.actPath+'penRight.png'},
		{id:'lens', url:game.actPath+'lens_sprite.png'},
		{id:'fDot', url:game.actPath+'focalPt.gif'},
		{id:'dashBG', url:game.sharedPath+'dash.gif'},
		//dashboard Image
		{id:'wellleft', url:game.sharedPath+'wellleft.gif'},
		{id:'well100', url:game.sharedPath+'well100.gif'},
		{id:'wellright', url:game.sharedPath+'wellright.gif'},
		//Buttons GO, RESET, PAUSE
		{id:'buttons', url:game.sharedPath+'buttons.png'},
		//Banner Image
		{id:'banner', url:game.sharedPath+'InDash.png'},
		{id:'wellBottom', url:game.sharedPath+'bottom.png'}
	];

		// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		760, 600,	// Height and width of the canvas that will be created
		'activity',		// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize
	);
};

//=======================================================
//=======================================================
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}

	game.__gameInitialize = function( director ){
		game.mainPanel = null;
		var numOfRays = 5;
		var _scene = director.createScene();
		game.getDirector = function(){return director};
		game.getScene = function(){return _scene};

		game.mainPanel = game.createPanels( director, _scene );
		//just build lens image and right penguin as bottom most layer
		game.__createMainImgAC( director, 0, 2);
		game.__createMainImgScene( director, 0, 2);
		//build rest of the images on to the scene
		game.__createMainImgScene( director, 2, numOfRays);
		game.__createMidLine();
		//now build rays that passes on top of lens and right penguin
		for(var i=0; i<5; i++) {
			var thisRay = new CAAT.Foundation.ActorContainer().
				setBounds( 0, 0, director.width, director.height );
			//this['ray_'+i].setGestureEnabled(true);
			thisRay.visible = false;
			game.mainPanel.addChild(thisRay);
			game.Rays.push(thisRay);

		}
		game.__createMainImgAC( director, 2, numOfRays);
		//on load set the lens thickness
		game.actorImg[0].setAnimationImageIndex([7]);
		//draw rays onload of the activity
		game.onObjMove(game.actorImg[2], false);
		CAAT.loop(60);
	}

	//====================================================
	//create main panel image on scene
	//====================================================
	game.__createMainImgAC = function(director, startIndex, endIndex){
		for(var i=startIndex; i<endIndex; i++){
			var thisActorContainer = new CAAT.exemplarr()
						.setBounds(
							game.mainEleImg[i][1],
							game.mainEleImg[i][2],
							game.mainEleImg[i][6],
							game.mainEleImg[i][7]
						)
						.setScale( 1, 1 )
						.setId(game.mainEleImg[i][8]+'_c');
			if(game.mainEleImg[i][1] == 'p2') {
				thisActorContainer.setFillStyle( '#CCC');
			}
			thisActorContainer
				.setLocation(parseFloat(game.mainEleImg[i][1]), parseFloat(game.mainEleImg[i][2]));
			if(game.mainEleImg[i][5]) {
				thisActorContainer.userDrag();
				thisActorContainer.mouseDown = game.mouseMoveHandler;
				thisActorContainer.mouseUp = game.mouseMoveHandler;
			}
			game.mainPanel.addChild(thisActorContainer);
			game.actorContainer.push(thisActorContainer);
		}
	};

	game.__createMainImgScene = function(director, startIndex, endIndex){
		for(var i=startIndex; i<endIndex; i++){
				var thisActorImg = game.__addImageOnScene( director.getImage(game.mainEleImg[i][0]), game.mainEleImg[i][3], game.mainEleImg[i][4] );
				thisActorImg
					.setBounds(
						game.mainEleImg[i][1],
						game.mainEleImg[i][2],
						game.mainEleImg[i][6],
						game.mainEleImg[i][7]
					)
					//.setFillStyle( '#CCC')
					.setScale( 1, 1 )
					.setId(game.mainEleImg[i][8]+'_img');
				thisActorImg
					.setLocation(parseFloat(game.mainEleImg[i][1]), parseFloat(game.mainEleImg[i][2]));
				game.mainPanel.addChild(thisActorImg);
				game.actorImg.push(thisActorImg);
		}
	}
	//=======================================================
	//					Create Middle Line
	//=======================================================
	game.__createMidLine = function( ) {
		var line = new CAAT.Foundation.Actor().
					setBounds( 0, 0, game.mainPanel.width, game.mainPanel.height ).
					setClip(true);
		line.paint = function(director, time){
			var ctx = director.ctx;
			ctx.strokeStyle='#000000';
			ctx.beginPath();
			ctx.lineWidth = 1;
			ctx.moveTo( 0, game.mainPanel.height/2);
			ctx.lineTo( game.mainPanel.width, game.mainPanel.height/2);
			ctx.closePath();
			ctx.stroke();
		}
		game.mainPanel.addChild(line);
	}