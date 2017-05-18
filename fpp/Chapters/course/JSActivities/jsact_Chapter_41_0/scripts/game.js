//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {
	_scene : null,
	_director : null,
	oDashTxtArr: [],
	mainPanel: null,
	orbitspeed: null,
	orbitradius: null,
	torchImg: null,
	hi_lowImg: null,
	hi_lowImgAnim: null,
	torchImgAnim: null,
	redClicked:false,
	violetClicked:false,
	lowClicked:false,
	highClicked:false,
	ellapseTime:0,
	lowElecArr:[0,95,268,499],
	highElecArr:[95,326,499,594],
	lineColor:'red',
	circleColor:'red',
	cirCount:0,
	isPause:false

};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;

	game.mainEleImg =[];
		game.mainEleImg[game.mainEleImg.length] = ['layer',  	450,   55];//image_id, image_X_Position, image_Y_Position
		game.mainEleImg[game.mainEleImg.length] = ['light',  	50,   75];//image_id, image_X_Position, image_Y_Position


	var assets = [
					{id:'layer',      			url:game.actPath+'layer.png' },
					{id:'light',   				url:game.actPath+'light.png' },
					{id:'hi_low',   			url:game.actPath+'hi_low.png' },
					{id:'torch',   				url:game.actPath+'torch.png' },
					{id:'dashBG',      			url:game.sharedPath+'dash.png' },
					{id:'wellleft',    			url:game.sharedPath+'wellleft.png' },
					{id:'well100',     			url:game.sharedPath+'well100.png' },
					{id:'wellright',   			url:game.sharedPath+'wellright.png' },

					//Buttons GO, RESET, PAUSE
					{id:'buttons',     			url:game.sharedPath+'buttons.png' },
					{id:'buttonA',     			url:game.sharedPath+'buttonA.png' },
					//Banner Image
					{id:'banner',      			url:game.sharedPath+'banner.png' },
					{id:'electron',      			url:game.actPath+'electron.gif' },
					{id:'shutter',      			url:game.sharedPath+'shutter.png' },

			];

// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		631, 	//width of the canvas that will be created
		500,	//Height of the canvas that will be created
		'activity',	// Leave this null to create a new canvas that will be appended to the body
		assets,
		game.__gameInitialize
	);
};
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
	game.beamBGContainer();
	game.electronsBGContainer();
	//game.beamContainer();
	//add main panel Text
	//game.__createMainTxt();
	//CAAT.loop(60);
}
	//====================================================
	//create main panel image on scene
	//====================================================
	game.__createMainImgScene = function(){

	for(var i=0;i<game.mainEleImg.length;i++){
		var oActorImg = game.__addImageOnScene( game._director.getImage(game.mainEleImg[i][0]), 1, 1 );
		oActorImg.
			setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);
		game.mainPanel.addChild(oActorImg);
	}


	game.hi_lowImg = game.__addImageOnScene(game._director.getImage('hi_low'), 1, 3 );
	game.hi_lowImg.setLocation(150,92);
	game.mainPanel.addChild(game.hi_lowImg);
	game.hi_lowImg.setAnimationImageIndex([0]);


	game.torchImg = game.__addImageOnScene(game._director.getImage('torch'), 1, 5 );
	game.mainPanel.addChild(game.torchImg);
	game.torchImg.setLocation(-500,-500);
	//game.torchImg.setAnimationImageIndex([0]); //240,61


}

game.beamBGContainer = function(){

		game.beamBG = new CAAT.Foundation.ActorContainer().setBounds(257,128,243,70 );//255, 125,250, 70 //255, 55,250, 210
		game.beamBG.setClip(true);
		//game.beamBG.setFillStyle('white');
		game.mainPanel.addChild(game.beamBG );
		game.beamContainer();
}

game.beamContainer = function() {	//350,430 //-250 -25.3
	var canvas = document.createElement('canvas');
	canvas.width = 250;
	canvas.height = 70;

	game.beamActor = new CAAT.Foundation.Actor().
						setBackgroundImage( canvas ).
							setBounds( -250,-25.3,canvas.width,canvas.height);
	game.drawingctx = canvas.getContext('2d');
	game.drawingctx.lineWidth = 1;
	game.drawingctx.strokeStyle =game.lineColor;// '#df9797';//#f6cdcd
	game.drawingctx.beginPath();
	game.drawingctx.moveTo(10, 10);
	game.drawingctx.lineTo(209,30);
	game.drawingctx.stroke();

	var x1=10,y1=10;
	var x2=209,y2=30;

	var m = (y2-y1)/(x2-x1);
	var c = y2-m*x2;
	//game.cirCount=8;
	var gap = (x2-x1)/game.cirCount;

	game.drawingctx.beginPath();
	game.drawingctx.fillStyle = game.circleColor;

	for(var x=x1;x<=x2;x=x+gap)
	{
		var y = m*x+c;

		game.drawingctx.arc(x,y, 3.5, 0, 2*Math.PI, true);

		game.drawingctx.fill();

	}

	//draw Arrow
	game.drawingctx.beginPath();

	game.drawingctx.strokeStyle =game.lineColor;
	var arrowx=x2+8;
	var arrowy=m*arrowx+c;
	game.drawingctx.moveTo(x2, y2);
	game.drawingctx.lineTo(arrowx,arrowy);
	game.drawingctx.stroke();

	game.drawingctx.beginPath();
	game.drawingctx.fillStyle =game.lineColor;
	game.drawingctx.moveTo(arrowx,arrowy-3);
	game.drawingctx.lineTo(arrowx+12,arrowy);
	game.drawingctx.lineTo(arrowx,arrowy+3);
	game.drawingctx.fill();


	game.beamBG.addChild(game.beamActor );

}

game.electronsBGContainer = function(){
		game.electronsBG = new CAAT.Foundation.ActorContainer().setBounds(0,215,476,100);
		game.electronsBG.setClip(true);
		game.mainPanel.addChild(game.electronsBG );
		//game.electronsBG.setFillStyle('green');
		game.electronsContainer();


}
game.electronsContainer = function() {
	game.elecContainer = new CAAT.Foundation.ActorContainer().setBounds(520+500,0,620,100);
	for (var i=0;i<game.lowElecArr.length;i++)
	{
		var elecImg = game.__addImageOnScene(game._director.getImage('electron'), 1, 1 );
		elecImg.setLocation(game.lowElecArr[i],20);
		game.elecContainer.addChild(elecImg);
	}
	if(game.highClicked)
	{
		for (var i=0;i<game.highElecArr.length;i++)
		{
			var elecImg = game.__addImageOnScene(game._director.getImage('electron'), 1, 1 );
			elecImg.setLocation(game.highElecArr[i],67);
			game.elecContainer.addChild(elecImg);
		}
	}
	game.electronsBG.addChild(game.elecContainer);
}
