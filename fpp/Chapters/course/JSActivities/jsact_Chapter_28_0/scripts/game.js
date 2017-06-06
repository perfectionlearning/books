//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules

var game = { 
	_scene : null,
	_director : null,
	oDashTxtArr: [],
	mainPanel: null,
	IncDecTxt: null,
	qTxt:null,
	Qval:[]
	
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;
	var	minusRows = 2, 
		minusCols = 10,
		plusRows = 2,
		plusCols = 10;
		
	game.mainEleImg =[];	
		game.mainEleImg[game.mainEleImg.length] = ['background',  	0,   0];//image_id, image_X_Position, image_Y_Position
		game.mainEleImg[game.mainEleImg.length] = ['line',  		0,   200];//image_id, image_X_Position, image_Y_Position
		game.mainEleImg[game.mainEleImg.length] = ['line',  		344,   200];//image_id, image_X_Position, image_Y_Position
		game.mainEleImg[game.mainEleImg.length] = ['mark',  		224,   260];//image_id, image_X_Position, image_Y_Position
		game.mainEleImg[game.mainEleImg.length] = ['delta',  		180,   270];//image_id, image_X_Position, image_Y_Position
		//game.mainEleImg[game.mainEleImg.length] = ['incrBgMed',  	255,   280];//image_id, image_X_Position, image_Y_Position
	
		var assets = [
			{id:'background',   	url:game.actPath+'background.gif' },	
			{id:'plus',      		url:game.actPath+'plus.png' },				
			{id:'minus',      		url:game.actPath+'minus.png' },				
			{id:'line',      		url:game.actPath+'line.png' },	
			{id:'mark',      		url:game.actPath+'mark.png' },	
			{id:'delta',      		url:game.actPath+'delta.gif' },
			{id:'incrBgMed',      	url:game.actPath+'incrBgMed.gif' },
			{id:'incre_decre_btn',  url:game.actPath+'incre_decre_btn.png' },
			{id:'dashBG',      		url:game.sharedPath+'dash.gif' },	
			//dashboard Image
			{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },
			{id:'well100',     		url:game.sharedPath+'well100.gif' },
			{id:'wellright',   		url:game.sharedPath+'wellright.gif' },						
			//Buttons GO, RESET, PAUSE
			{id:'buttons',     		url:game.sharedPath+'buttons.png' },
			//Banner Image
			{id:'banner',     		url:game.sharedPath+'banner.png' },
		];
		
	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		550, 	//Height of the canvas that will be created
		500,	//width of the canvas that will be created
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
	game.__createMainImgScene();
	game.__createMainTxt();
	game.__createIncDecButton();	
	//CAAT.loop(60);
	game.Qval[0]=[0.00,0.18,0.35,0.53,0.71,0.89,1.06,1.24,1.42,1.59,1.77,1.95,2.13];
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function(){	

	for(var i=0;i<game.mainEleImg.length;i++){
			var oActorImg = game.__addImageOnScene( game._director.getImage(game.mainEleImg[i][0]), 1, 1 );		
			oActorImg.setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);			
			game.mainPanel.addChild(oActorImg);
	}
	
	game.minusImgAnim = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('minus'), 2, 10 )
	
	game.minusImg = game.__addImageOnScene( game._director.getImage('minus'), 1, 1 );
	game.minusImg.setBackgroundImage(game.minusImgAnim)
				 .setAnimationImageIndex([7])
				 .setLocation(205, 150);	
				
	game.mainPanel.addChild( game.minusImg );
	
	game.plusImgAnim = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('plus'), 2, 10 )
	
	game.plusImg = game.__addImageOnScene( game._director.getImage('plus'), 1, 1 );
	game.plusImg.setBackgroundImage(game.plusImgAnim)
				 .setAnimationImageIndex([7])
				 .setLocation(322, 150);	
				
	game.mainPanel.addChild( game.plusImg );
}	
	
//==================================================
//Create Main panel text
//==================================================
game.__createMainTxt = function(){
		
		game.incDecTxt = game.__addTextOnImage('#fff', '70', 'bold 14px Arial',  'left', game._director );				
		game.incDecTxt.
			setLocation(275, 282);
		game.mainPanel.addChild(game.incDecTxt);
		
	
}

game.__createIncDecButton =function(){
	var incDecBtnImg = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('incre_decre_btn'), 1, 2);
	var IncBtn = new CAAT.Foundation.Actor().
							setId('Inc').
							setAsButton(incDecBtnImg.getRef(), 0, 0, 0, 0, function(button){
								game.incDecHandler(this);
							}).setLocation(247, 300);
	var DecBtn = new CAAT.Foundation.Actor().
							setId('Dec').
							setAsButton(incDecBtnImg.getRef(), 1, 1, 1, 1, function(button){
								game.incDecHandler(this);
							}).setLocation(277, 300);
							
	game.mainPanel.addChild(IncBtn);
	game.mainPanel.addChild(DecBtn);
	IncBtn.mouseDown = game.incDecMDown;
	DecBtn.mouseDown = game.incDecMDown;
	IncBtn.mouseUp = game.incDecMUp;
	DecBtn.mouseUp = game.incDecMUp;
	IncBtn.mouseExit = game.incDecMUp;
	DecBtn.mouseExit = game.incDecMUp;
}	
		
