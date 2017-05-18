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
	scLength:66,
	isPlay:false,

		
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;
	
	game.mainEleImg =[];		
		game.mainEleImg[game.mainEleImg.length] = ['background',  	0,   0];//image_id, image_X_Position, image_Y_Position
						
	var assets = [
					{id:'background',      		url:game.actPath+'background.png' },
					{id:'hand',   				url:game.actPath+'hand.png' },		
					{id:'arrest',   			url:game.actPath+'arrest.png' },		
					{id:'dashBG',      			url:game.sharedPath+'dash.png' },		
					{id:'box',      			url:game.sharedPath+'box.png' },					
					{id:'wellleft',    			url:game.sharedPath+'wellleft.png' },	
					{id:'well100',     			url:game.sharedPath+'well100.png' },	
					{id:'wellright',   			url:game.sharedPath+'wellright.png' },	
									
					//Buttons GO, RESET, PAUSE
					{id:'buttons',     			url:game.sharedPath+'buttons.png' },	
					//Banner Image
					{id:'banner',      			url:game.sharedPath+'banner.png' },	
					{id:'scale',      		 url:game.actPath+'scale.png' },
					{id:'shutter',      			url:game.sharedPath+'shutter.png' }
			];
			
// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	CAAT.Module.Initialization.Template.init(
		634, 	//Height of the canvas that will be created
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
	
	CAAT.Foundation.Actor.extend(
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
	
		userDrag: function () {
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
				CAAT.setCursor('pointer');							
			};
	
			this.mouseExit = function (mouseEvent) {
				this.__d_ax = -1;
				this.__d_ay = -1;
				this.pointed = false;
				CAAT.setCursor('default');
			};
	
			this.mouseMove = function (mouseEvent) {};
						
			this.mouseUp = function (mouseEvent) {
				CAAT.setCursor('default');
				this.__d_ax = -1;
				this.__d_ay = -1;
				
				
				if(this.x>260 && this.x<360)
				{
					if(this.y>190 && this.y<350)
					{
						game.__bannerDisplayShutter(2);
						
						game.armImg.y=340;
						game.hCTimer=game._scene.createTimer(
										0,
										Number.MAX_VALUE,
										function (scene_time, timer_time, timertask_instance) {}, // timeout
										function (scene_time, timer_time, timertask_instance) {   // tick
												
											game.armImg.y=game.armImg.y-2;
												
											
											if(game.armImg.y<=280)
											{
												game.hCTimer.cancel();
											}
										
										},
										function (scene_time, timer_time, timertask_instance) {} // cancel
						)
					}
				}	
				else if(this.x>90 && this.x<240)
				{
					if(this.y>190 && this.y<350)
					{
						
						game.__bannerDisplayShutter(1);
					
					}
				}	
				else if(this.x>420 && this.x<540)
				{
					if(this.y>190 && this.y<350)
					{
						game.__bannerDisplayShutter(3);
					
					}
				}	
				
				game.handcuff.setLocation(10, 100);
				this.setLocation(10, 100);
			};
	
			this.mouseDrag = function (mouseEvent) {
				
				var pt;
				pt = this.modelToView(new CAAT.Math.Point(mouseEvent.x, mouseEvent.y));
				this.parent.setZOrder(this, Number.MAX_VALUE);
				this.parent.viewToModel(pt);
				
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
				
				
				//game.hzSliderMove(this);
				game.handcuff.x=this.x;
				game.handcuff.y=this.y;
				
				
			};
	
			return this;
		},
	},
	null,
	"CAAT.exemplarr"
	);
	
	for(var i=0;i<game.mainEleImg.length;i++){
		var oActorImg = game.__addImageOnScene( game._director.getImage(game.mainEleImg[i][0]), 1, 1 );		
		oActorImg.
			setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);			
		game.mainPanel.addChild(oActorImg);
	}
	
	game.armImg = game.__addImageOnScene( game._director.getImage('hand'), 1, 1 );
	game.armImg
			.setLocation(270, 340);		//280	
	game.mainPanel.addChild( game.armImg );	
	
	game.scaleImg = game.__addImageOnScene( game._director.getImage('scale'), 1, 1 );
	game.scaleImg
			.setLocation(0, 348);		//280	
	game.mainPanel.addChild( game.scaleImg );	
	
	game.drawGraphContainer();

	game.handcuff = game.__addImageOnScene( game._director.getImage('arrest'), 1, 1 );
	game.handcuff
			.setLocation(10, 100);			
	game.mainPanel.addChild( game.handcuff );
	
	
	game.handcuffdrag= new CAAT.exemplarr()
				
				.setBounds( 	
					game.handcuff.x, 
					game.handcuff.y, 
					game.handcuff.width, 
					game.handcuff.height
				)
				.setScale( 1, 1 )
				
	
	game.handcuffdrag.setLocation(game.handcuff.x,game.handcuff.y);
	
	game.handcuffdrag.userDrag();
	
	game.mainPanel.addChild(game.handcuffdrag);	

	
}	
game.drawGraphContainer = function() {	
	var canvas = document.createElement('canvas');
	canvas.width = 100;
	canvas.height = 14;

	game.drawingActor = new CAAT.Foundation.Actor().
						setBackgroundImage( canvas ).
							setBounds( 45, 390,100, 10 );
	game.drawingctx = canvas.getContext('2d');
	game.drawingctx.lineWidth = 15;
	//game.drawingctx.lineJoin = 'round';
	//game.drawingctx.lineCap = 'round';
	game.drawingctx.strokeStyle = '#00ccff';
	//game.drawingctx.setAntiAlias=true;
	game.drawingctx.beginPath();

	game.drawingctx.moveTo(0, 0);	
	game.drawingctx.lineTo(game.scLength,0);	
	game.drawingctx.stroke();
	
	game.mainPanel.addChild(game.drawingActor );
	

}