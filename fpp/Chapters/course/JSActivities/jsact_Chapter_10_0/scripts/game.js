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
	rocketImg: null,
	armImg: null,
	rotateContainer:null,
	degree:45,
	minDistance:277.2,
	distance:8,
	revolution:14,		
		
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;
	
	game.mainEleImg =[];		
		game.mainEleImg[game.mainEleImg.length] = ['support',  	288,   233];//image_id, image_X_Position, image_Y_Position
				
	var assets = [
					{id:'arm',      		url:game.actPath+'arm.gif' },
					{id:'support',      	url:game.actPath+'support.gif' },					
					{id:'rocket',    		url:game.actPath+'rocket.png' },	
					{id:'dashBG',      		url:game.sharedPath+'dash.gif' },		
					{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },	
					{id:'well50',     		url:game.sharedPath+'well50.gif' },	
					{id:'well100',     		url:game.sharedPath+'well100.gif' },	
					{id:'wellright',   		url:game.sharedPath+'wellright.gif' },	
					{id:'incre_decre_btn',  url:game.sharedPath+'incre_decre_btn.png' },	
					{id:'incrBgMed',   		url:game.sharedPath+'incrBgMed.gif' },	
					//Buttons GO, RESET, PAUSE
					{id:'buttons',     		url:game.sharedPath+'buttons.png' },	
					//Banner Image
					{id:'banner',      		url:game.sharedPath+'banner.png' },	
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
	
	
	game.rotateContainer = new CAAT.Foundation.ActorContainer().
	                           setBounds( 80, -90, 600, 600);
    game.rotateContainer.setGestureEnabled(false);
   	game.mainPanel.addChild(game.rotateContainer);
	                     
	
	                           
	game.armImg = game.__addImageOnScene( game._director.getImage('arm'), 1, 1 );
	game.armImg.setLocation(268, 101);			
	game.rotateContainer.addChild(game.armImg);	

	game.rocketImg = game.__addImageOnScene( game._director.getImage('rocket'), 1, 1 );
	game.rocketImg.setLocation(245,game.minDistance+(game.distance*19));
	
	game.rotateContainer.addChild(game.rocketImg);	
	game.rotateContainer.setRotation((game.degree-90) * Math.PI/180);
	
    

	
}	
