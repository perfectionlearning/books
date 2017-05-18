//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules

var game = { 
	_scene : null,
	_director : null,
	oDashTxtArr: [],
	mainPanel: null,
	actorContainer : [],
	dragContainer : [],
	txtContainer : [],
	moveIndex:null,
	dragStart:false,
	isRunning:false,
	trunsTxt:null,
	isGameOver:false,
	//sharedPath: null
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;
	
	
	game.initialPlace = [];
	
	game.Values = [7.000, 3.000,0.000,0.000,0.000];
	game.mainEleTxt = [];
        game.mainEleTxt[game.mainEleTxt.length] = ['+7.000 '+String.fromCharCode(181)+'C', 'Bold 14px Arial', '#f00f00', 15, 240];
        game.mainEleTxt[game.mainEleTxt.length] = ['+3.000 '+String.fromCharCode(181)+'C', 'Bold 14px Arial',  '#f00f00', 15, 290];
		game.mainEleTxt[game.mainEleTxt.length] = ['0.000 '+String.fromCharCode(181)+'C', 'Bold 14px Arial',  '#000', 15, 240];
        game.mainEleTxt[game.mainEleTxt.length] = ['0.000 '+String.fromCharCode(181)+'C', 'Bold 14px Arial',  '#000', 15, 290];
		game.mainEleTxt[game.mainEleTxt.length] = ['0.000 '+String.fromCharCode(181)+'C', 'Bold 14px Arial',  '#000', 15, 240];
         
	
		var assets = [
			{id:'cone',      		url:game.actPath+'cone.gif' },	
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
		580, 	//Height of the canvas that will be created
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
	//CAAT.loop(60);
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function(){
	for(var i=0; i<5;i++){
		//This container is used to drag and update the value to the original rod container 
		this['oRodDragContainer_'+i] = new CAAT.exemplarr()
										.setSize(100, 35)
										.setFillStyle('#F00')
										
										.setScale( 1, 1 )
										.setAlpha(0.0)
										
										.setLocation(52, 60+i*75);
										
		
										
	    game.initialPlace[game.initialPlace.length] = [52, 60+i*75];
										
		this['oRodContainer_'+i] = new CAAT.Foundation.ActorContainer()
									.setSize(100, 35)
									.setLocation(52, 60+i*75)
									//.setFillStyle('#FF0');
		game._scene.addChild(this['oRodContainer_'+i]);	
								
		var oRodImgActor = game.__addImageOnScene( game._director.getImage('cone'), 1, 1 );
			oRodImgActor.setLocation(0, 0);			 
		
		this['oRodContainer_'+i].addChild(oRodImgActor);
		
		this['oRodTxt_'+i] = game.__addTextOnImage(game.mainEleTxt[i][2], game.mainEleTxt[i][0], 'bold 14px Arial',  'left', game._director );
		this['oRodTxt_'+i].setLocation(8, 8);
		this['oRodContainer_'+i].addChild(this['oRodTxt_'+i]);	
		
		
		game.txtContainer.push(this['oRodTxt_'+i]);
		game.actorContainer.push(this['oRodContainer_'+i]);	
		
		this['oRodDragContainer_'+i].userDrag(i);
		//this['oRodDragContainer_'+i].mouseDown = game.imageMouseDown;
		//this['oRodDragContainer_'+i].mouseUp = game.imageMouseUp;

		
		game.dragContainer.push(this['oRodDragContainer_'+i]);
		game._scene.addChild(this['oRodDragContainer_'+i]);			
	}		
}
//=======================================================
// Extend actor container's enable drag and use it as userDrag 
// which draws the rays on every movement
//=======================================================
CAAT.Foundation.ActorContainer.extend(
	{
		paint : function(director,time) {
			CAAT.exemplarr.superclass.paint.call(this,director,time);
		},
		
		defaultXPos:-1,
		defaultYPos:-1,
		reSetPosition: function(){
			this.setRotationAnchored(0, 0, 0 )								
			this.setLocation(this.defaultXPos, this.defaultYPos);
			return this;
		},
		setDefaultPos: function(x, y){
			this.setLocation(x, y);
			this.defaultXPos = x;
			this.defaultYPos = y;
			return this;
		},

		userDrag: function (index) {
		
			this.ax = 0;
			this.ay = 0;
			this.asx = 1;
			this.asy = 1;
			this.ara = 0;
			this.screenx = 0;
			this.screeny = 0;
			var holder;
			
			this.mouseEnter = function (mouseEvent) {
				this.__d_ax = -1;
				this.__d_ay = -1;
				this.pointed = true;
				CAAT.setCursor('move');
			};

			this.mouseExit = function (mouseEvent) {
				this.__d_ax = -1;
				this.__d_ay = -1;
				this.pointed = false;
				CAAT.setCursor('default');
			};

			this.mouseMove = function (mouseEvent) {
			};

			this.mouseUp = function (mouseEvent) {
			
				this.__d_ax = -1;
				this.__d_ay = -1;				
						
				
			     game.performActions(game.moveIndex);
		
			};

			this.mouseDrag = function (mouseEvent) {
				if(game.isGameOver){
					return;
				}
			
				if(!game.dragStart){
					game.__bannerDisplay(0, 0, 0, -70, false);
					game.dragStart= true;
				}				
				
				var pt;
				pt = this.modelToView(new CAAT.Math.Point(mouseEvent.x, mouseEvent.y));
				
				this.parent.viewToModel(pt);
				game.actorContainer[index].parent.setZOrder(game.actorContainer[index],Number.MAX_VALUE-1);
				this.parent.setZOrder(this, Number.MAX_VALUE);
				if (this.__d_ax === -1 || this.__d_ay === -1) {
					
					this.x = pt.x - this.width/2;
					this.y = pt.y - this.height/2;
					this.__d_ax = pt.x;
					this.__d_ay = pt.y;
					this.__d_asx = this.scaleX;
					this.__d_asy = this.scaleY;
					this.__d_ara = this.rotationAngle;
					this.__d_screenx = mouseEvent.screenPoint.x;
					this.__d_screeny = mouseEvent.screenPoint.y;
				}
				
				this.x += pt.x - this.__d_ax;
				this.y += pt.y - this.__d_ay;
				
				this.__d_ax = pt.x;
				this.__d_ay = pt.y;
				game.moveIndex= index;
				game.actorContainer[index].x = game.dragContainer[index].x;
				game.actorContainer[index].y = game.dragContainer[index].y;						
				
			
			};

			return this;
		
		},
	},
	null,
	"CAAT.exemplarr"
);  