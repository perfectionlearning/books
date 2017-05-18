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
	isReset:true,
	isPlay:false
	
	//sharedPath: null
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
	//	game.mainEleImg[game.mainEleImg.length] = ['mark',  	224,   260];//image_id, image_X_Position, image_Y_Position
		//game.mainEleImg[game.mainEleImg.length] = ['delta',  	180,   270];//image_id, image_X_Position, image_Y_Position
		
			
	
		var assets = [
			{id:'background',      	url:game.actPath+'background.gif' },	
			{id:'plus',      		url:game.actPath+'plus.png' },				
			{id:'minus',      		url:game.actPath+'minus.png' },				
			
					
			{id:'dashBG',      		url:game.sharedPath+'dash.gif' },	
			
			//dashboard Image
			
			
			{id:'divider',    		url:game.sharedPath+'divider.gif' },
			{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },
			{id:'well100',     		url:game.sharedPath+'well100.gif' },
			{id:'wellright',   		url:game.sharedPath+'wellright.gif' },						
			{id:'incrBgMed',      	url:game.sharedPath+'incrBgMed.gif' },
			{id:'incre_decre_btn',  url:game.sharedPath+'incre_decre_btn.png' },

			//Buttons GO, RESET, PAUSE
			{id:'buttons',     	url:game.sharedPath+'buttons.png' },
			//Banner Image
			{id:'banner',     	url:game.sharedPath+'banner.png' },
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
	
	//add main panel image
	game.__createMainImgScene();
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
	
				
	var minusImgAnim = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('minus'), 2, 10 ).
											addAnimation('minusImgAnimation', [0 ], 100);
						
			game.minusImg = game.__addImageOnScene( game._director.getImage('minus'), 1, 1 );
			game.minusImg
				.setBackgroundImage(minusImgAnim)//.playAnimation('minusImgAnimation')
				.setAnimationImageIndex([1])
				.setLocation(180, 150);		//205	
			game.mainPanel.addChild( game.minusImg );
			
			game.negIniPos=game.minusImg.x;
			

	var plusImgAnim = new CAAT.Foundation.SpriteImage().initialize( game._director.getImage('plus'), 2, 10 ).
											addAnimation('plusImgAnimation', [0 ], 100);
						
			game.plusImg = game.__addImageOnScene( game._director.getImage('plus'), 1, 1 );
			game.plusImg
				.setBackgroundImage(plusImgAnim)//.playAnimation('plusImgAnimation')
				.setAnimationImageIndex([1])
				.setLocation(350, 150);		//332	
			game.mainPanel.addChild( game.plusImg );
			
			game.posIniPos=	game.plusImg.x;		
			
			
			game.thirdPtX=game.mainPanel.width-45;
			game.thirdPtY=200-20;
			
			game.thirdPtey=200-20;
			game.thirdPtey1=200;
			
			game.drawGraphContainer();
			game.mainPanel.removeChild( game.minusImg );
			game.mainPanel.removeChild( game.plusImg );
			game.mainPanel.addChild( game.minusImg );
			game.mainPanel.addChild( game.plusImg );
			
			game.deltav=game.__addTextOnImage('#2d86b1',String.fromCharCode(916)+'V= 0 volts', 'bold 20px Arial', 'center', game._director );
			game.deltav.setLocation(280,275);
			game.mainPanel.addChild( game.deltav );
}	
	



game.drawGraphContainer = function() {	
	var canvas = document.createElement('canvas');
	canvas.width = game.mainPanel.width;
	canvas.height = game.mainPanel.height;

	game.drawingActor = new CAAT.Foundation.Actor().
						setBackgroundImage( canvas ).
							setBounds( 0,0,game.mainPanel.width, game.mainPanel.height );
	game.drawingctx = canvas.getContext('2d');
	game.drawingctx.lineWidth = 4;
	//game.drawingctx.lineJoin = 'round';
	game.drawingctx.lineCap = 'round';
	//game.drawingctx.strokeStyle = 'black';
	
	game.drawingctx.beginPath();

	game.drawingctx.moveTo(0,200);
	
	game.drawingctx.lineTo(game.minusImg.x+2,200);	
	
	game.drawingctx.moveTo(game.mainPanel.width,200);
	
	game.drawingctx.lineTo(game.mainPanel.width-40,200);
	
	game.drawingctx.moveTo(game.thirdPtX,game.thirdPtY);
	
	game.drawingctx.lineTo(game.mainPanel.width-65,200);
	
	game.drawingctx.moveTo(game.mainPanel.width-65,200);
	
	game.drawingctx.lineTo(game.plusImg.x+game.plusImg.width-2,200);
	
	game.drawingctx.moveTo(game.thirdPtX,game.thirdPtey);
	game.drawingctx.lineTo(game.mainPanel.width-65,game.thirdPtey1);
	
	game.drawingctx.stroke();
	
	//game.drawingctx.closePath();
	
	game.drawingctx.beginPath();
	game.drawingctx.lineWidth = 3;
	game.drawingctx.strokeStyle = '#0099ff';
	
	game.drawingctx.moveTo(game.minusImg.x+game.minusImg.width,game.minusImg.y+100+10);
	game.drawingctx.lineTo(game.plusImg.x,game.minusImg.y+100+10);
	
	game.drawingctx.moveTo(game.minusImg.x+game.minusImg.width,game.minusImg.y+100+5);
	game.drawingctx.lineTo(game.minusImg.x+game.minusImg.width,game.minusImg.y+100+19);
	
	game.drawingctx.moveTo(game.plusImg.x,game.plusImg.y+100+5);
	game.drawingctx.lineTo(game.plusImg.x,game.plusImg.y+100+19);
	
	game.drawingctx.stroke();
	
	game.mainPanel.addChild(game.drawingActor );
	//console.log('MWWW:  '+game.mainPanel.width);

}
	