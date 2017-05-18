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
	//enable/disable debug
	CAAT.DEBUG = 0;
	game.mainEleImg = [];			//image_id, image_X_Position, image_Y_Position, sprite rows-cols, allow/stop drag
									//width, height
	game.mainEleImg[game.mainEleImg.length] = ['penguinLeft',	 170,  178, 1, 1, true, 43, 72];
	game.mainEleImg[game.mainEleImg.length] = ['penguinRight', 450,  197, 1, 1, false, 60, 104];
	var assets = [
		{id:'penguinLeft', url:game.actPath+'penLeft.png'},
		{id:'penguinRight', url:game.actPath+'penRight.png'},
		{id:'dashBG', url:game.sharedPath+'dash.gif'},
		{id:'wellleft', url:game.sharedPath+'wellleft.gif'},
		{id:'well100', url:game.sharedPath+'well100.gif'},
		{id:'wellright', url:game.sharedPath+'wellright.gif'},
		{id:'buttons', url:game.sharedPath+'buttons.png'},
		{id:'banner', url:game.sharedPath+'InDash.png'},
		{id:'wellBottom', url:game.sharedPath+'bottom.png'}
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
//=======================================================
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}

	//====================================================
	//create main panel image on scene
	//====================================================
	game.__createMainImgScene = function( cont ){
		var oActorContainer_0 = null, oActorContainer_1 = null;
		var oActorImg_0 = null, oActorImg_1 = null;
		game.actorImg = [];
		game.actorContainer = [];
		var director = game.getDirector();
		for(var i=0;i<game.mainEleImg.length;i++){
			//this['oActorContainer_'+i] = new CAAT.Foundation.ActorContainer()
			this['oActorContainer_'+i] = new CAAT.exemplarr()
						.setBounds(
							game.mainEleImg[i][1],
							game.mainEleImg[i][2],
							game.mainEleImg[i][6],
							game.mainEleImg[i][7]
						)
						//.setFillStyle( '#CCC')
						.setScale( 1, 1 );
			this['oActorImg_'+i] = game.__addImageOnScene( director.getImage(game.mainEleImg[i][0]), game.mainEleImg[i][3], game.mainEleImg[i][4] );
			this['oActorImg_'+i]
				.setBounds(
					game.mainEleImg[i][1],
					game.mainEleImg[i][2],
					game.mainEleImg[i][6],
					game.mainEleImg[i][7]
				)
				//.setFillStyle( '#CCC')
				.setScale( 1, 1 );
			this['oActorImg_'+i]
				.setLocation(parseFloat(game.mainEleImg[i][1]), parseFloat(game.mainEleImg[i][2]));
			this['oActorContainer_'+i]
				.setLocation(parseFloat(game.mainEleImg[i][1]), parseFloat(game.mainEleImg[i][2]));

			if(game.mainEleImg[i][5]) {
				//this['oActorContainer_'+i].setFillStyle('#CCC');
				this['oActorContainer_'+i].userDrag();
				this['oActorContainer_'+i].mouseUp = game.mouseMoveHandler;
			}
			cont.addChild( this['oActorImg_'+i] );
			game.actorImg.push( this['oActorImg_'+i] );
			cont.addChild( this['oActorContainer_'+i] );
			game.actorContainer.push( this['oActorContainer_'+i] );
		}
	}
	//====================================================
	// Init function
	//====================================================
	game.__gameInitialize = function( director ){
		var scene = director.createScene();
		game.getDirector = function(){return director};
		game.Rays = [];
		//rays container
		for(var i=0; i<5; i++) {
			var thisRay = new CAAT.Foundation.ActorContainer().
				setBounds( 0, 0, director.width, director.height );
			thisRay.setGestureEnabled(false);
			thisRay.visible = false;
			scene.addChild(thisRay);
			game.Rays.push(thisRay);
		}
		var cont = game.createPanels( director, scene);
		game.onObjMove(game.actorImg[0], false);
		CAAT.loop(60);
	}