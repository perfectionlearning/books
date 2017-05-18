//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {
	_director: null,
	_scene: null,
	mainPanel: null,
	raysArr: [],
	actPath: null,
	sharedPath: null,
	no_rays: 6
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;

	game.mainEleImg = [];
	game.mainEleImg[game.mainEleImg.length] = ['penguinLeft',	 400,  178, 1, 1, true, 43, 72];//image_id, image_X_Position, image_Y_Position, sprite rows-cols, allow/stop drag, width, height
	//game.mainEleImg[game.mainEleImg.length] = ['penguinRight', 616,  150, 1, 1, false, 60, 104];
	game.mainEleImg[game.mainEleImg.length] = ['penguinRight', 616,  150, 1, 1, false, 60, 104];

	game.mainPanelTxt = [];
	game.mainPanelTxt[game.mainPanelTxt.length] = ['C', 'bold 14px Arial', 'left', 115, 255];
	game.mainPanelTxt[game.mainPanelTxt.length] = ['F', 'bold 14px Arial', 'left', 306, 255];

	var assets = [
		{id:'penguinLeft',  url:game.actPath+'penLeft.png'},
		{id:'penguinRight', url:game.actPath+'penRight.png'},
		{id:'dashBG',      	url:game.sharedPath+'dash.gif' },

		//dashboard Image
		{id:'wellleft',    	url:game.sharedPath+'wellleft.gif' },
		{id:'well100',     	url:game.sharedPath+'well100.gif' },
		{id:'wellright',   	url:game.sharedPath+'wellright.gif' },

		//Buttons GO, RESET, PAUSE
		{id:'buttons',      url:game.sharedPath+'buttons.png' },

		//Banner Image
		{id:'banner',       url:game.sharedPath+'InDash.png' }
	];

	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		760, 	//Height of the canvas that will be created
		600,	//width of the canvas that will be created
		'activity',	// Leave this null to create a new canvas that will be appended to the body
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
	game._director = director;
	game._scene = director.createScene();
	game.mainPanel = game.createPanels( game._director, game._scene );

	//add main line on the scene
	game.__createMidLine();
	//add main panel text on the scene
	game.__createMainPanelTxt();
	//create arc
	game.__createMainPanelArc();
	//add image on the scene
	game.__createMainImgScene();
	//create rays on the scene
	game.__createRays();
	//create Movement ActorContainer
	game.__createMovementActorContainer();
	game.onObjMove(game.oActorImg_0, false);
	CAAT.loop(60);
}

//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function(){
	for(var i=0;i<game.mainEleImg.length;i++){
		this['oActorImg_'+i] = game.__addImageOnScene( game._director.getImage(game.mainEleImg[i][0]), game.mainEleImg[i][3], game.mainEleImg[i][4] );
		this['oActorImg_'+i].setBounds(
				(game.mainEleImg[i][1]),
				(game.mainEleImg[i][2]),
				(game.mainEleImg[i][6]),
				(game.mainEleImg[i][7])
			)
			.setScale( 1, 1 )
			.setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);
		game.mainPanel.addChild(this['oActorImg_'+i] );
	}
}
game.__createMovementActorContainer = function(){
	var arc2 = new CAAT.Foundation.ActorContainer().setBounds(0, 0, game._director.width, 500);
	game.mainPanel.addChild(arc2);
	for(var i=0;i<game.mainEleImg.length;i++){
		this['oActorContainer_'+i] = new CAAT.exemplarr()
					.setBounds(
						(game.mainEleImg[i][1]),
						(game.mainEleImg[i][2]),
						(game.mainEleImg[i][6]),
						(game.mainEleImg[i][7])
					)
					.setScale( 1, 1 )
					.setLocation(parseFloat(game.mainEleImg[i][1]), parseFloat(game.mainEleImg[i][2]));

		if(game.mainEleImg[i][5]) {
			this['oActorContainer_'+i].userDrag();
			this['oActorContainer_'+i].mouseUp = game.mouseMoveHandler;
		}
		game.mainPanel.addChild(this['oActorContainer_'+i] );
	}

}
//=======================================================
//Create Middle Line
//=======================================================
game.__createMidLine = function() {
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

		var midLineDotWidth = line.width/2;
		var midLineDotheight = line.height/2;

		ctx.beginPath();
		ctx.arc(120,250,2,0,2*Math.PI);
		ctx.arc(310,250,2,0,2*Math.PI);
		ctx.fill();
		ctx.closePath();
		ctx.stroke();
	}
	game.mainPanel.addChild(line);
}
//=======================================================
//Create main panel text
//=======================================================
game.__createMainPanelTxt = function(){
	for(var i=0;i<game.mainPanelTxt.length; i++){
		var mainPanelText = game.__addTextOnImage('black', game.mainPanelTxt[i][0], game.mainPanelTxt[i][1], game.mainPanelTxt[i][2], game._director );
		mainPanelText.
			setLocation(game.mainPanelTxt[i][3], game.mainPanelTxt[i][4]);
		game.mainPanel.addChild(mainPanelText);
	}
}
//=======================================================
//Create Main Panel Arc
//=======================================================
game.__createMainPanelArc = function() {
	var arc = new CAAT.Foundation.Actor().
				setBounds( 0, 0, game.mainPanel.width, game.mainPanel.height ).
				setClip(true);
	arc.paint = function(director, time){
		var ctx = director.ctx;
		var x = 120;
		var y = game.mainPanel.height/2;
		var radius = 380;
		var startAngle = 1.5 * Math.PI;
		var endAngle = 0.5 * Math.PI;
		var counterClockwise = false;

		ctx.beginPath();
		ctx.arc(x, y, radius, startAngle, endAngle, counterClockwise);
		ctx.lineWidth = 4;

		// line color
		ctx.strokeStyle = 'blue';
		ctx.stroke();
	}
	game.mainPanel.addChild(arc);
}
//===============================================
//create Rays on the scene
//===============================================
game.__createRays = function(){
	//create rays on the scene
	for(var i=1; i<=game.no_rays; i++) {
		var rays = new CAAT.Foundation.ActorContainer().
			setBounds( 0, 0, game._director.width, game._director.height );
		rays.visible = false;
		game.mainPanel.addChild(rays);
		game.raysArr.push(rays);
	}
}