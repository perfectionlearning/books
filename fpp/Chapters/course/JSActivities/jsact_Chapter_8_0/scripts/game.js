//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {};

game = {
	_scene : null,
	_director : null,
	oDashTxtArr: [],
	mainPanel: null,
	velRed: null,
	velBlue: null,
	momRed: null,
	momBlue: null,
	intvelRed: null,
	intvelBlue: null,

	isPause:false,
	blueV:0,
	redV:0,
	bluePuck:null,
	redPuck:null,
	bluePuckCx:0,
	bluePuckCx:0,
	bluePuckIx:0,
	redPuckIx:0,
	startTime:0,
	goTimer:null,
	isBp:false,
	isRp:false,
	isPlay:false,
	isCollision:false,
	lCPt:800,
	isLC:false,
	isRC:false,
	isReset:true,
	blueVTxt:0,
	redVTxt:0,
	oneMtInPx:125,
	bluePuckSx:0,
	redPuckSx:0,
	incDecTimer: null
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){

		CAAT.DEBUG = 0;

		game.mainEleImg =[];

		game.mainEleImg[game.mainEleImg.length] = ['background',  	0,   -100];//image_id, image_X_Position, image_Y_Position
		game.mainEleImg[game.mainEleImg.length] = ['1kg',  			175,   154];
		game.mainEleImg[game.mainEleImg.length] = ['2kg',  			540,   144];

		var assets = [
						{id:'background',      	url:game.actPath+'background.gif' },
						{id:'1kg',      		url:game.sharedPath+'1kg.gif' },
						{id:'2kg',      		url:game.sharedPath+'2kg.gif' },
						{id:'dashBG',      		url:game.sharedPath+'dash.gif' },

						//dashboard Image
						{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },
						{id:'well100',     		url:game.sharedPath+'well100.gif' },
						{id:'well50',     		url:game.sharedPath+'well50.gif' },
						{id:'wellright',   		url:game.sharedPath+'wellright.gif' },
						{id:'incre_decre_btn',  url:game.sharedPath+'incre_decre_btn.png' },
						{id:'incrBgMed',   		url:game.sharedPath+'incrBgMed.gif' },
						{id:'Blue',             url:game.sharedPath+'Blue.gif' },
						{id:'Red',   		    url:game.sharedPath+'Red.gif' },
						{id:'divider',   		url:game.sharedPath+'divider.gif' },


						//Buttons GO, RESET, PAUSE
						{id:'buttons',     url:game.sharedPath+'buttons.png' },
						//Banner Image
						{id:'banner',     url:game.sharedPath+'banner.png' },
					];

		// Start the game.  Loads the assets, creates the canvas, and starts it all running.
		CAAT.Module.Initialization.Template.init(
			760, 	//Height of the canvas that will be created
			430,	//width of the canvas that will be created
			'activity',	// Leave this null to create a new canvas that will be appended to the body
			assets,
			game.__gameInitialize
		);
		//
		// Timer collapses are fixed by freezing the activity
		//
		CAAT.bindEvent(window, 'blur', function (event) {
			if(game.isPlay){
				game.isPause=true;
				game.isReset=false;
				if(game.goTimer) {
					game.goTimer.cancel();
				}
				game.bluePuckSx = game.bluePuck.x;
				game.redPuckSx = game.redPuck.x;
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
	//add main panel image
	game.__createMainImgScene();
	//add main panel Text

	//CAAT.loop(60);
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function (){
	for(var i=0;i<1;i++){
		var oActorImg = game.__addImageOnScene( game._director.getImage(game.mainEleImg[i][0]), 1, 1 );
		oActorImg.
			setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);
		game.mainPanel.addChild(oActorImg);
	}
	//add Blue Puck
	game.bluePuck = game.__addImageOnScene( game._director.getImage(game.mainEleImg[1][0]), 1, 1 );
	game.bluePuck.setLocation(game.mainEleImg[1][1], game.mainEleImg[1][2]);
	game.mainPanel.addChild(game.bluePuck);

	game.bluePuckCx=game.bluePuck.x+game.bluePuck.width/2;
	game.bluePuckIx=game.bluePuck.x;

	//add Red Puck
	game.redPuck = game.__addImageOnScene( game._director.getImage(game.mainEleImg[2][0]), 1, 1 );
	game.redPuck.setLocation(game.mainEleImg[2][1], game.mainEleImg[2][2]);
	game.mainPanel.addChild(game.redPuck);

	game.redPuckCx=game.redPuck.x+game.redPuck.width/2;
	game.redPuckIx=game.redPuck.x;

}