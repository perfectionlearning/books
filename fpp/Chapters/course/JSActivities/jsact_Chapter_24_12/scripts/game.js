//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = { 
	_scene : null,
	_director : null,
	alAtom : null,
	alAtomOriXPos : 470,
	alAtomOriYPos : 332,
	alpha_particle : null,
	alpha_particleOriXPos : 30,
	alpha_particleOriYPos : 38,
	AlAtomAnim: null,
	alphaPartAnim: null,
	initXVelTxtBox: null,
	oDashTxtArr: [],
	mainPanel: null,
	oPathActContainer: null,	
	maxXDrawPath: 760,
	maxYDrawPath: 360,
	actPath: null,
	sharedPath: null
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;

	game.mainEleImg = [];
		game.mainEleImg[game.mainEleImg.length] = ['gridCM2',  	20,   -20];//image_id, image_X_Position, image_Y_Position
		game.mainEleImg[game.mainEleImg.length] = ['cannon',  	-3,   38];
		game.mainEleImg[game.mainEleImg.length] = ['field',  	15,   -140];
	
	game.mainEleTxt = [];
		game.mainEleTxt[game.mainEleTxt.length] = ['E ', 		'Italic Bold 14px Arial',  'left', 615, 410, 0];			
		game.mainEleTxt[game.mainEleTxt.length] = ['= 3.60x10', 'Bold 14px Arial', 		 'left', 630, 410, 0];
		game.mainEleTxt[game.mainEleTxt.length] = ['−4', 		'Bold 11px Arial', 		 'left', 695, 408, 0];			
		game.mainEleTxt[game.mainEleTxt.length] = ['N/C', 	  	'Bold 14px Arial', 		 'left', 720, 410, 0];
		

	var assets = [
		{id:'alAtom',      		url:game.actPath+'alAtom.png' },	
		{id:'gridCM2',      	url:game.actPath+'gridCM2.gif' },	
		{id:'cannon',      		url:game.actPath+'cannon.gif' },	
		{id:'field',      		url:game.actPath+'field.gif' },	
		{id:'alpha_particle',	url:game.actPath+'alpha_particle.png'},
		{id:'dashBG',      		url:game.sharedPath+'dash.gif' },	
		
		//dashboard Image
		{id:'divider',    		url:game.sharedPath+'divider.gif' },
		{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },
		{id:'well100',     		url:game.sharedPath+'well100.gif' },
		{id:'wellright',   		url:game.sharedPath+'wellright.gif' },						
		
		//Buttons GO, RESET, PAUSE
		{id:'buttons',     		url:game.sharedPath+'buttons.png' },
		{id:'banner',      		url:game.sharedPath+'banner.png' }
	];
		
	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		760, 	//Height of the canvas that will be created
		550,	//width of the canvas that will be created
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
	//add main panel Text
	game.__createMainTxt();
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function(){
	for(var i=0;i<game.mainEleImg.length;i++){
		var oActorMainImg = game.__addImageOnScene( game._director.getImage(game.mainEleImg[i][0]), 1, 1 );		
		oActorMainImg.				
			setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);			
		game.mainPanel.addChild(oActorMainImg);
	}
	
	game.drawPath();
	//Aluminium Atom animation
	game.AlAtomAnim = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('alAtom'), 3, 6 ).
									addAnimation('ALAnimation', [12, 13, 14, 15, 16, 17], 75, game.AlAtomAnimCallBack).
									addAnimation('AlStand', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 25);
	//Aluminium atom attach to the main Panel
	game.alAtom = game.__addImageOnScene( game._director.getImage('alAtom'), 3, 6 );
	game.alAtom
		.setBackgroundImage(game.AlAtomAnim).playAnimation('AlStand')
		.setLocation(game.alAtomOriXPos, game.alAtomOriYPos);
	game.mainPanel.addChild( game.alAtom );	
	
	//Alpha particle animation
	game.alphaPartAnim = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('alpha_particle'), 2, 6 )
									.addAnimation('blast', [0, 0], 20, game.alphaBlastCallback)
									.addAnimation('rotation', [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1], 100);
	//Alpha particles attach to the main Panel
	game.alpha_particle = game.__addImageOnScene( game._director.getImage('alpha_particle'), 2, 6 );
	game.alpha_particle
		//.setBackgroundImage(game.alphaPartAnim).playAnimation('rotation')
		.setLocation(game.alpha_particleOriXPos, game.alpha_particleOriYPos)
		.visible = false;
	game.mainPanel.addChild( game.alpha_particle );
}
//==================================================
//Create Main panel text
//==================================================
game.__createMainTxt = function(){
	for(var i=0;i<game.mainEleTxt.length; i++){			
		var EField = game.__addTextOnImage('#000', game.mainEleTxt[i][0], game.mainEleTxt[i][1], game.mainEleTxt[i][2], game._director );				
		EField.
			setLocation(game.mainEleTxt[i][3], game.mainEleTxt[i][4]);
		game.mainPanel.addChild(EField);			
	}
}
//Draw path of the moving aplpha particle
game.drawPath = function(){
	var canvas = document.createElement('canvas');
	canvas.width = game.maxXDrawPath;
	canvas.height = game.maxYDrawPath;
	
	game.oPathActContainer = new CAAT.Foundation.ActorContainer()
								.setBounds(0, 0, game.maxXDrawPath, game.maxYDrawPath)
								.setBackgroundImage(canvas)
								.setLocation(0, 0);
								
	game.oPathActContainer.__ctx = canvas.getContext('2d');
	game.oPathActContainer.__ctx.lineWidth = 1;
	game.oPathActContainer.__ctx.lineJoin = 'round';
	game.oPathActContainer.__ctx.strokeStyle = '#f8f815';			
	game.mainPanel.addChild(game.oPathActContainer);
}
