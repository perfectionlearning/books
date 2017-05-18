//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules
var game = {
	isReset:true,
	isPause:false,
	isplay:false,
	Timer: null
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG= false;		
	var assets = [
					//Dash Board image
					{id:'dashBG',      		url:game.sharedPath+'dash.gif' },
					{id:'endleft',     		url:game.sharedPath+'endleft.gif' },
					{id:'endright',    		url:game.sharedPath+'endright.gif' },
					{id:'wellleft2',   		url:game.sharedPath+'wellleft.gif' },
					{id:'well100b',    		url:game.sharedPath+'well100b.gif' },
					{id:'wellright2',  		url:game.sharedPath+'wellright.gif' },
					{id:'incre_decre_btn',  url:game.sharedPath+'incre_decre_btn.png' },
					{id:'incrBgMed',   		url:game.sharedPath+'incrBgMed.gif' },
					{id:'banner',      		url:game.sharedPath+'banner_sprite.png' }, //Banner
					{id:'buttons',     		url:game.sharedPath+'buttons.png' }, //Buttons FIRE, RESET, PAUSE
					{id:'ball',        		url:game.actPath+'ball.png' }, //ball
				 ];
		
	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		760, 	
		600,	
		'activity',	
		assets,
		game.__gameInitialize
	);
	//
	// Timer collapses are fixed by freezing the activity
	//
	CAAT.bindEvent(window, 'blur', function (event) {
		if(game.isPlay) {
			game.pauseBtnMDownHandler();
		}
	}, false);
};		
	
game.__gameInitialize = function (director){
	game._director = director;
	game._scene = director.createScene();
	
	game.getDirector = function() { return game._director ; }; 
	game.getScene = function() { return game._scene; };	
	
	game.mainPanel = game.__createPanels(game._director, game._scene);
	
	game.drawGraphContainer();
	
	game.__createBannerContainer();
	CAAT.loop(60);
}	

game.Cleanup = function() {
	CAAT.clearEvents();
	CAAT.currentDirector.clean();
}	

game.drawGraphContainer = function() {	
	var canvas = document.createElement('canvas');
	canvas.width =game.graph_actor.width;
	canvas.height = game.graph_actor.height;

	game.drawingActor = new CAAT.Foundation.Actor().
						setBackgroundImage( canvas ).
							setBounds( game.graph_actor.x, game.graph_actor.y, game.graph_actor.width, game.graph_actor.height );
	game.drawingctx = canvas.getContext('2d');
	game.drawingctx.lineWidth = 1.5;
	game.drawingctx.lineJoin = 'round';
	game.drawingctx.lineCap = 'round';
	game.drawingctx.strokeStyle = 'black';
	game.drawingctx.setAntiAlias=true;
	game.drawingctx.beginPath();
	game.drawingctx.moveTo(0, 180);		
	game.mainPanel.addChild(game.drawingActor );
}
