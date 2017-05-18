//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {
	_scene : null,
	_director : null,
	oDashTxtArr: [],
	mainPanel: null,
	speedmeterline: null,
	ringImg: null,
	power:0,
	brakeForce:0,
	isRunning: false,
	car:null
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;

	var	victroy_flagRows = 2,
		victroy_flagCols = 11,
		haystackRows = 2,
		haystackCols = 6;

	var assets = [
		{id:'background',      	url:game.actPath+'background.gif' },
		{id:'car',      		url:game.actPath+'car.png' },
		{id:'dashBG',      		url:game.sharedPath+'dash.gif' },
		{id:'victroy_flag',     url:game.actPath+'victroy_flag.png' },
		{id:'haystack',      	url:game.actPath+'haystack.png' },
		{id:'foreground',      	url:game.actPath+'foreground.gif' },
		{id:'stick',      	    url:game.actPath+'pole.gif' },
		//dashboard Image

		{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },
		{id:'well100',     		url:game.sharedPath+'well100.gif' },
		{id:'well50',     		url:game.sharedPath+'well50.gif' },
		{id:'wellright',   		url:game.sharedPath+'wellright.gif' },
		{id:'incre_decre_btn',  url:game.sharedPath+'incre_decre_btn.png' },
		{id:'incrBgMed',   		url:game.sharedPath+'incrBgMed.gif' },


		//Buttons GO, RESET, PAUSE
		{id:'buttons',     url:game.sharedPath+'buttons.png' },
		//Banner Image
		{id:'banner',     url:game.sharedPath+'InDash.png' },
	];

	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		760, 	//Height of the canvas that will be created
		400,	//width of the canvas that will be created
		'activity',	// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize
	);
	//
	// Timer collapses are fixed by freezing the activity
	//
	CAAT.bindEvent(window, 'blur', function (event) {
		if(game.isRunning) {
			game.pauseBtnMDownHandler();
		}
	}, false);
};

//=======================================================
//=======================================================
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}
game.__gameInitialize = function( director ){
	game._director = director;
	game._scene = director.createScene();
	game.mainPanel = game.createPanels( game._director, game._scene );
	game.__createMainImgScene();
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function(){
	//for(var i=0;i<mainEleImg.length;i++){
		var oActorImg = game.__addImageOnScene( game._director.getImage('background'), 1, 1 );
		oActorImg.
			setLocation(0, 0);
			game.mainPanel.addChild(oActorImg);
	//}

	game.haystackImg = game.__addImageOnScene( game._director.getImage('haystack'), 2,6);
	game.haystackImg
		.setLocation(697, 164);
	game.mainPanel.addChild( game.haystackImg );

	game.victroy_flagImg = game.__addImageOnScene( game._director.getImage('victroy_flag'), 2,11 );
	game.victroy_flagImg
		.setLocation(668, 135);
	game.mainPanel.addChild( game.victroy_flagImg );


	game.car = game.__addImageOnScene( game._director.getImage('car'), 1, 1 );
	game.car.setLocation(0, 215.5);
	game.mainPanel.addChild( game.car );

	var foreground = game.__addImageOnScene( game._director.getImage("foreground"), 1, 1 );
		foreground.
			setLocation(374,   125);
			game.mainPanel.addChild(foreground);

	game.stick = game.__addImageOnScene( game._director.getImage('stick'), 1,1);
	game.stick
		.setLocation(694, 166);
	game.mainPanel.addChild( game.stick );
}