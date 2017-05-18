//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
game = {
	posIonOriXPos: 180,
	posIonOriYPos: 500,
	_director: null,
	_scene: null,
	posIon: null,
	ionGun: null,
	mainPanel: null,
	substanceTxt: null,
	substanceContainer: null,	
	oDashTxtArr: [],
	subTxtArr: [],	
	substanceArr: [],
	popupTxt: [],
	isCorrect: true,
	actPath: null,
	sharedPath: null
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;
	var assets = [			
		{id:'massSpec',      	url:game.actPath+'massSpec.gif' },					
		{id:'ion',      		url:game.actPath+'ion.gif' },
		{id:'ionGun',      		url:game.actPath+'ionGun.gif' },
		
		//dashboard Image
		{id:'dashBG',      		url:game.sharedPath+'dash.gif' },
		{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },
		{id:'divider',    		url:game.sharedPath+'divider.gif' },					
		{id:'well100',     		url:game.sharedPath+'well100.gif' },
		{id:'well50',     		url:game.sharedPath+'well50.gif' },
		{id:'wellright',   		url:game.sharedPath+'wellright.gif' },
		{id:'incre_decre_btn',  url:game.sharedPath+'incre_decre_btn.png' },
		{id:'exponentbox',   	url:game.sharedPath+'exponentbox.gif'},
		{id:'incrBgMed',   		url:game.sharedPath+'incrBgMed.gif'},
		{id:'PopUpWd',   		url:game.sharedPath+'PopUpWd.gif'},							
		
		//Buttons GO, RESET, PAUSE
		{id:'buttons',     		url:game.sharedPath+'buttons.png' },
		
		//Banner Image
		{id:'banner',      		url:game.sharedPath+'banner.png' }
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
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}
game.__gameInitialize = function( director ){			
	game._director = director;
	game._scene = director.createScene();
	game.mainPanel = game.createPanels( director, game._scene );
	game.__createMainImgScene();	
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function(){
	var massSpec = game.__addImageOnScene( game._director.getImage('massSpec'), 1, 1 );		
	massSpec.setLocation(0, 0);
	game.mainPanel.addChild(massSpec);			
	massSpec.mouseDown = game.subtanceShow;
		
	game.posIon = game.__addImageOnScene( game._director.getImage('ion'), 1, 1 );
	game.posIon.setLocation(game.posIonOriXPos, game.posIonOriYPos);
	game.mainPanel.addChild(game.posIon);			
	game.posIon.mouseDown = game.subtanceShow;
	
	game.ionGun = game.__addImageOnScene( game._director.getImage('ionGun'), 1, 1 );
	game.ionGun.setLocation(150, 472);
	game.mainPanel.addChild(game.ionGun);	
	game.ionGun.mouseDown = game.subtanceShow;
}