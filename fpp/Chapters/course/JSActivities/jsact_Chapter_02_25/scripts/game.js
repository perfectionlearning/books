//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {
	_director: null,
	_scene: null,
	soccerBall: null,
	mainPanel: null,
	_graphLayoutContainer: null,
	graphMidPoint: 334,
	iniVelocityVal: 0,
	accVal: 0,
	oDashTxtArr: [],
	svGraph: null,
	actPath: null,
	sharedPath: null,
	isGameStart: false
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;

	game.mainPanelTxt = [];
		game.mainPanelTxt[game.mainPanelTxt.length] = ['y ',     'Italic Bold 14px Arial', 'left', 135, 40];
		game.mainPanelTxt[game.mainPanelTxt.length] = ['(m)',    'Bold 14px Arial',        'left', 145, 40];
		game.mainPanelTxt[game.mainPanelTxt.length] = ['t ',     'Italic Bold 14px Arial', 'left', 720, 365];
		game.mainPanelTxt[game.mainPanelTxt.length] = ['(s)',    'Bold 14px Arial', 	   	 'left', 730, 365];

	var assets = [
		{id:'soccersky',   		url:game.actPath+'soccersky.gif'},
		{id:'soccer_ball', 		url:game.actPath+'soccer_ball.gif'},
		{id:'posvel_negacc', 	url:game.actPath+'posvel_negacc.gif'},
		{id:'dashBG',      		url:game.sharedPath+'dash.gif' },

		//dashboard Image
		{id:'divider',     		url:game.sharedPath+'divider.gif' },
		{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },
		{id:'well100',     		url:game.sharedPath+'well100.gif' },
		{id:'well50',   	  	url:game.sharedPath+'well50.gif' },
		{id:'wellright',   		url:game.sharedPath+'wellright.gif' },
		{id:'incre_decre_btn',  url:game.sharedPath+'incre_decre_btn.png' },
		{id:'checkonoff',   	url:game.sharedPath+'checkonoff.png'},
		{id:'incrBgMed',   		url:game.sharedPath+'incrBgMed.gif'},

		//Buttons GO, RESET, PAUSE
		{id:'buttons',     url:game.sharedPath+'buttons.png' },

		//Banner Image
		{id:'banner',      url:game.actPath+'banner.png' }		
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
		if(game.isGameStart) {
			game.pauseBtnMDownHandler();
		}
	}, false);
}

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

	//Add main Panel images on scene
	game.__addMainImgScene();
	//draw grph layout
	game.__drawGraphLayout();
	//add main panel text
	game.__addMainPanelTxt();
	//create show velocity graph
	game.__createSVGraph();

	CAAT.loop(60);
}
//====================================================
//create main panel image on scene
//====================================================
game.__addMainImgScene = function(){

	var oActorImg = game.__addImageOnScene( game._director.getImage('soccersky'), 1, 1 );
	oActorImg.
		setLocation( 0, 0 );
	game.mainPanel.addChild( oActorImg );


	game.soccerBall = game.__addImageOnScene( game._director.getImage('soccer_ball'), 1, 1 );
	game.soccerBall
		.centerOn(oActorImg.width/2, oActorImg.height/2)
		.setLocation( 50,  334 );
	game.mainPanel.addChild(game.soccerBall);

	/*var posvel_negacc = game.__addImageOnScene( game._director.getImage('posvel_negacc'), 1, 1 );
	posvel_negacc.
		setLocation( 167, 44 );
	game.mainPanel.addChild( posvel_negacc );*/
}
//=======================================================
//Draw graph layout
//=======================================================
game.__drawGraphLayout = function(){
	var graphXValDiff = 17.83,
		graphYValDiff = 33.3,
		graphXPos = 170,
		graphYPos = 18,
		graphRows = 14,
		graphCols = 30,
		graphWidth = graphCols * graphXValDiff,
		graphHeight = graphRows * graphYValDiff;

	game._graphLayoutContainer = new CAAT.Foundation.ActorContainer().
									setPreferredSize( graphWidth, graphHeight ).
									setBounds(graphXPos, graphYPos, graphWidth, graphHeight ).
									setClip(false);

	game._graphLayoutContainer.paint = function(director, time){
		var ctx = director.ctx;

		//XY Initialize
		ctx.strokeStyle = '#000';
		ctx.lineWidth = 1;
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(0, game._graphLayoutContainer.height);
		ctx.moveTo(0, game.graphMidPoint);
		ctx.lineTo(game._graphLayoutContainer.width, game.graphMidPoint);
		ctx.stroke();
		ctx.closePath();

		ctx.strokeStyle = '#FFD3D3D3';
		ctx.lineWidth = 0.3;
		ctx.beginPath();

		//XAxis
		ctx.beginPath();
		for(var i=0;i<15;i++){
			if(i<8){
				ctx.font = 'bold 14px Arial ';
				ctx.textAlign = 'center';
				ctx.fillText(50-(i*10)+'.0', -20, (2*i*graphYValDiff)+5);
			}
			ctx.moveTo(0, (i*graphYValDiff));
			ctx.lineTo(game._graphLayoutContainer.width, (i*graphYValDiff));
		}
		//YAxis
		for(var j=0;j<31;j++){
			if(j<15){
				ctx.font = 'bold 14px Arial ';
				ctx.textAlign = 'center';
				ctx.fillText(1+(j*1)+'.0', 35+(2*j*graphXValDiff), 350 );
			}
			ctx.moveTo((j*graphXValDiff), 0);
			ctx.lineTo((j*graphXValDiff), game._graphLayoutContainer.height);
		}
		ctx.closePath();
		ctx.stroke();
		//draw bezier curve
		ctx.beginPath();
		ctx.bezierCurveTo(0, game.graphMidPoint, 250, -339, game._graphLayoutContainer.width, game.graphMidPoint);
		ctx.lineWidth = 2;
		ctx.strokeStyle = 'red';
		ctx.stroke();
		ctx.closePath();
	}
	game.mainPanel.addChild(game._graphLayoutContainer);
}
//=======================================================
//Create main panel text
//=======================================================
game.__addMainPanelTxt = function(){
	for(var i=0;i<game.mainPanelTxt.length; i++){
		var mainPanelText = game.__addTextOnImage('black', game.mainPanelTxt[i][0], game.mainPanelTxt[i][1], game.mainPanelTxt[i][2], game._director );
		mainPanelText.
			setLocation(game.mainPanelTxt[i][3], game.mainPanelTxt[i][4]);
		game.mainPanel.addChild(mainPanelText);
	}
}
//==================================================
//Show the velocity Graph
//==================================================
game.__createSVGraph = function(){
	game.svGraph = new CAAT.Foundation.ActorContainer().
						setPreferredSize( game._graphLayoutContainer.width, game._graphLayoutContainer.height ).
						setBounds(game._graphLayoutContainer.x, game._graphLayoutContainer.y, game._graphLayoutContainer.width, game._graphLayoutContainer.height ).
						setClip(false);
	game.svGraph.paint = function(director, time){
		var ctx = director.ctx;
		ctx.beginPath();
		ctx.strokeStyle = 'blue';
		ctx.moveTo(game._graphLayoutContainer.width, 0);
		ctx.lineTo(game._graphLayoutContainer.width, game._graphLayoutContainer.height);
		for(var i=0;i<8;i++){
			ctx.font = 'bold 14px Arial ';
			ctx.fillStyle = 'blue';
			ctx.textAlign = 'center';
			ctx.fillText(25-(i*5)+'.0', 555, (2*i*32)+12.5);
		}
		ctx.font = 'Italic Bold 14px Arial';
		ctx.fillText('v ', 545, 25);
		ctx.font = 'Bold 14px Arial';
		ctx.fillText('(m/s)', 565, 25);
		ctx.moveTo(0, 173);
		ctx.lineTo(488, game._graphLayoutContainer.height);
		ctx.closePath();
		ctx.stroke();
	}
	game.svGraph.visible = false;
	game.mainPanel.addChild(game.svGraph);
}
