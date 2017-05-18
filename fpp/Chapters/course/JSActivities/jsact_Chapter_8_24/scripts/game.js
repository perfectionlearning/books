//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {};

game = { 
	_scene : null,
	_director : null,
	substanceContainer: null,
	substanceArr: [],
	oDashTxtArr: [],
	mainPanel: null,
	smRed: null,
	smGreen: null,
	smPink: null,
	smBlue: null,
	smBrown: null,
	smBlack: null,
	substanceTxt1: null,
	substanceTxt2: null,
	substanceTxt3: null,
	
	aLeft:null,
	bLeft:null,
	cLeft:null,
	aRight:null,
	bRight:null,
	cRight:null,
	startTime:0,
	track: [],
	initialPos:[],
	startingPos:[],
	diskV:[],
	diskCV:[],
	diskVTxt:[],
	isPlay:false,
	isPause:false,
	diskVTxtC:[],
	ABCbtn:0,
	bannerFlag:0,
	oneMtInPx:125,
	isFirst:true
	
	};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	//window.onload = function(){
		CAAT.DEBUG = 0;
		
		game.mainEleImg =[];
		
			game.mainEleImg[game.mainEleImg.length] = ['background',  		0,   -100];//image_id, image_X_Position, image_Y_Position
			game.mainEleImg[game.mainEleImg.length] = ['mnRed',      	    66-13,	73];	
			game.mainEleImg[game.mainEleImg.length] = ['mnGreen',      		66-13,	113];
			game.mainEleImg[game.mainEleImg.length] = ['mnPink',      		66-13,	153];
			game.mainEleImg[game.mainEleImg.length] = ['mnBlue',      		442-13, 73];
			game.mainEleImg[game.mainEleImg.length] = ['mnBrown',      		442-13, 113];
			game.mainEleImg[game.mainEleImg.length] = ['mnBlack',      		442-13, 153];

		var assets = [
						{id:'background',      	url:game.actPath+'background.gif' },	
						{id:'mnBlack',      	url:game.sharedPath+'mnBlack.gif' },	
						{id:'mnRed',      		url:game.sharedPath+'mnRed.gif' },	
						{id:'mnBlue',      		url:game.sharedPath+'mnBlue.gif' },	
						{id:'mnBrown',      	url:game.sharedPath+'mnBrown.gif' },	
						{id:'mnGreen',      	url:game.sharedPath+'mnGreen.gif' },	
						{id:'mnPink',      		url:game.sharedPath+'mnPink.gif' },	
						//{id:'2kg',      		url:game.sharedPath+'2kg.gif' },	
						{id:'dashBG',      		url:game.sharedPath+'dash.gif' },
									
						//dashboard Image
						{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },
						{id:'well100',     		url:game.sharedPath+'well100.gif' },
						{id:'well50',     		url:game.sharedPath+'well50.gif' },
						{id:'wellright',   		url:game.sharedPath+'wellright.gif' },						
						{id:'smBlack',      	url:game.sharedPath+'smBlack.gif' },	
						{id:'smRed',      		url:game.sharedPath+'smRed.gif' },	
						{id:'smBlue',      		url:game.sharedPath+'smBlue.gif' },	
						{id:'smBrown',      	url:game.sharedPath+'smBrown.gif' },	
						{id:'smGreen',      	url:game.sharedPath+'smGreen.gif' },	
						{id:'smPink',      		url:game.sharedPath+'smPink.gif' },
						{id:'divider',   		url:game.sharedPath+'divider.gif' },
						{id:'PopUpMed',   		url:game.sharedPath+'PopUpMed.gif' },						
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
};		
game.__gameInitialize = function( director ){
	game._director = director;			
	game._scene = director.createScene();
	game.mainPanel = game.createPanels( game._director, game._scene );
	//add main panel image
	game.__createMainImgScene();	
	//CAAT.loop(60);
}
game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function(){
	for(var i=0;i<1;i++){
		var oActorImg = game.__addImageOnScene( game._director.getImage(game.mainEleImg[i][0]), 1, 1 );		
		oActorImg.
			setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);			
		game.mainPanel.addChild(oActorImg);
		oActorImg.mouseDown = game.popupMDownHandler;
	}
	//add main panel Text
	game.__createMainTxt();
	
	//Adding Ball 
	for(var i=0;i<3;i++)
	{
		var lActor=game.__addImageOnScene( game._director.getImage(game.mainEleImg[i+1][0]), 1, 1 );
		lActor.setLocation(game.mainEleImg[i+1][1], game.mainEleImg[i+1][2]);			
		game.mainPanel.addChild(lActor);
		
		var rActor=game.__addImageOnScene( game._director.getImage(game.mainEleImg[i+4][0]), 1, 1 );
		rActor.setLocation(game.mainEleImg[i+4][1], game.mainEleImg[i+4][2]);			
		game.mainPanel.addChild(rActor);
		game.track[i] = [lActor,rActor]
		game.initialPos[i]=[game.track[i][0].x ,game.track[i][1].x]
	}
	//Velocity Txt Container
	game.diskVTxtC[game.diskVTxtC.length] = [game.oDashTxtArr[0] ,game.oDashTxtArr[6] ];
	game.diskVTxtC[game.diskVTxtC.length] = [game.oDashTxtArr[2] ,game.oDashTxtArr[8] ];
	game.diskVTxtC[game.diskVTxtC.length] = [game.oDashTxtArr[4] ,game.oDashTxtArr[10] ];

	//Disc Velocity after Collision
	game.diskCV[0]=[-1.00, 1.00];
	game.diskCV[1]=[-0.60, 1.00];
	game.diskCV[2]=[-0.20, 0.60];
}	
	
//==================================================
//Create Main panel text
//==================================================
game.__createMainTxt = function (){			
		var AField = game.__addTextOnImage('#000', 'A', 'bold italic 14px Arial',  'left', game._director );				
		AField.
			setLocation(40, 77);
		game.mainPanel.addChild(AField);
		var BField = game.__addTextOnImage('#000', 'B', 'bold italic 14px Arial',  'left', game._director );				
		BField.
			setLocation(40, 117);
		game.mainPanel.addChild(BField);
		var CField = game.__addTextOnImage('#000', 'C', 'bold italic 14px Arial',  'left', game._director );				
		CField.
			setLocation(40, 157);
		game.mainPanel.addChild(CField);		
	
}