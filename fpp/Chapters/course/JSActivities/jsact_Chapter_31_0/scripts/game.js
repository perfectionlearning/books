//==========================================================================
// This is the main entry point of the game
//==========================================================================
// Create a top-level shared namespace for the high-level modules

var game = { 
	_scene : null,
	_director : null,
	oDashTxtArr: [],
	mainPanel: null,
	oDashSlider2: [],
	
};
//=======================================================
// Main entry point.  Load assets and create the scene.
//=======================================================
game.StartGame = function(){
	CAAT.DEBUG = 0;
	var oActorContainer_0 = null, oActorContainer_1 = null;
	game.actorContainer = [];
	game.draggerContainer = [];
	
	game.DFlag = false;
	
	game.mainEleImg =[];	
		game.mainEleImg[game.mainEleImg.length] = ['slider',  		20,   470];//image_id, image_X_Position, image_Y_Position
	//	game.mainEleImg[game.mainEleImg.length] = ['slider_move',  		20,   470];//image_id, image_X_Position, image_Y_Position
		var assets = [
			{id:'slider',   		url:game.actPath+'slider.png' },	
			{id:'slider_move',      url:game.actPath+'slider_move.png' },				
			{id:'FieldMeter',      	url:game.actPath+'FieldMeter.gif' },				
			{id:'dashBG',      		url:game.sharedPath+'dash.gif' },	
			
			//dashboard Image
			
			{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },
			{id:'well100',     		url:game.sharedPath+'well100.gif' },
			{id:'wellright',   		url:game.sharedPath+'wellright.gif' },
			{id:'slider',   		url:game.sharedPath+'slider.png' },	
			{id:'slider_move',   	url:game.sharedPath+'slider_move.png' },	
			
			//Banner Image
			{id:'InDash',     		url:game.sharedPath+'InDash.png' },
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
	game.__createletterI();
	
	game.__createCirclesBG1();
	game.__createCirclesBG2();
	game._createAngleLine();
	game.__createCirclesFG1();
	game.__createCirclesFG2();
	
	
	
	game.__createMainImgScene();
	game.__createMainTxt();	
	game.__createCircleend();
	game.__createMidLine();	
	game.__createRedLine();
	

	game.NewCircle();
	game.NewLine();
	
	game.midPoint =  new CAAT.ShapeActor()
					.setLocation(0, 0)
					.setAlpha('0.0')
					.setFillStyle('')
					.setSize(2, 2);
					
	game.midPoint1 =  new CAAT.ShapeActor()
					.setLocation(0, 0)
					.setFillStyle('red')
					.setAlpha('0.0')
					.setSize(2, 2);
	game.midPoint2 =  new CAAT.ShapeActor()
					.setLocation(0, 0)
					.setFillStyle('red')
					.setAlpha('0.0')
					.setSize(2, 2);
	game.midPoint3 =  new CAAT.ShapeActor()
					.setLocation(0, 0)
					.setFillStyle('black')
					.setAlpha('0.0')
					.setSize(3, 3);
					
	game._scene.addChild(game.midPoint);
	game._scene.addChild(game.midPoint1);
	game._scene.addChild(game.midPoint2);
	game._scene.addChild(game.midPoint3);
	//CAAT.loop(60);
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function(){	

//Drawing dragPutter
	game.sliderDrag = [];
	game.sliderDrag[game.sliderDrag.length] = ['drag_1',300,415, 1, 1, true, 134, 70,'red'];
	game.sliderDrag[game.sliderDrag.length] = ['drag_2',30,470, 1, 1, true, 11, 20,'blue'];	
	game.sliderDrag[game.sliderDrag.length] = ['drag_3',514,530, 1, 1, true, 11, 20,'green'];		

//=======================================================
// Extend actor container's enable drag and use it as userDrag 
// which draws the rays on every movement
//=======================================================
	CAAT.Foundation.ActorContainer.extend(
	{
		paint : function(director,time) {
			CAAT.exemplarr.superclass.paint.call(this,director,time);
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
				CAAT.setCursor('move');
				// if(!game._timerInstance == null){
				// game._timerInstance.cancel();}
			};
	
			this.mouseExit = function (mouseEvent) {
				this.__d_ax = -1;
				this.__d_ay = -1;
				this.pointed = false;
				CAAT.setCursor('default');
			};
	
			this.mouseMove = function (mouseEvent) {
			
			};
			
			this.mouseDown = function (mouseEvent) {
				if(this.id == 2){
					game.DFlag = true;
				}
			};
			
			this.mouseUp = function (mouseEvent) {
				this.__d_ax = -1;
				this.__d_ay = -1;
				
				game.actorContainer[0].x = game.magnetImg.x ;
				game.actorContainer[0].y = game.magnetImg.y ;	
			
				game.actorContainer[1].x = game.oDashSlider1.x ;
				game.actorContainer[1].y = game.oDashSlider1.y ;
				
				game.actorContainer[2].x = game.oDashSlider2.x ;
				game.actorContainer[2].y = game.oDashSlider2.y ;
				
				//game.update();
				 
			};
	
			this.mouseDrag = function (mouseEvent) {
				if(this.id == 2){
					game.DFlag = true;
				}else if(this.id == 1){
				   game.DFlag = false;
				}
				var pt;
				pt = this.modelToView(new CAAT.Math.Point(mouseEvent.x, mouseEvent.y));
				//this.parent.setZOrder(this, Number.MAX_VALUE);
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
				game.onObjMove(game.actorContainer[0],game.actorContainer[1],game.actorContainer[2],this.getId());
			};
			
	
			return this;
		},
	},
	null,
	"CAAT.exemplarr"
	
	);	

	

game.magnetImg = game.__addImageOnScene( game._director.getImage('FieldMeter'), 1, 1 );
	game.magnetImg
		.setLocation(300, 415);
	game.mainPanel.addChild( game.magnetImg );
	
game.mag_FieldVal = game.__addTextOnImage('#000', '1.00 x 10', 'bold 14px Arial',  'left', game._director );				
	game.mag_FieldVal.setLocation(game.magnetImg.x + 33, game.magnetImg.y + 13);
	game.mainPanel.addChild( game.mag_FieldVal );
	
game.mag_FieldPowerVal = game.__addTextOnImage('#000', '-6', 'bold 10px Arial',  'left', game._director );				
	game.mag_FieldPowerVal.setLocation(game.magnetImg.x + 93, game.magnetImg.y + 9);
	game.mainPanel.addChild( game.mag_FieldPowerVal );
	
game.mag_FieldTVal = game.__addTextOnImage('#000', 'T', 'bold 14px Arial',  'left', game._director );				
	game.mag_FieldTVal.setLocation(game.magnetImg.x + 108, game.magnetImg.y + 13);
	game.mainPanel.addChild( game.mag_FieldTVal );
	
game.oDashSlider1 = game.__addImageOnScene( game._director.getImage('slider_move'), 1, 1 );
	game.oDashSlider1
		.setLocation(30, 470);
	game._scene.addChild( game.oDashSlider1 );
	game.ang1 = 80;

game.oDashSlider2 = game.__addImageOnScene( game._director.getImage('slider_move'), 1, 1 );
	game.oDashSlider2
		.setLocation(514, 530);
	game._scene.addChild( game.oDashSlider2 );
	
	
	for(var i=0;i<game.sliderDrag.length;i++){

	this['oActorContainer_'+i] = new CAAT.exemplarr()
			.setBounds( 	
				game.sliderDrag[i][1], 
				game.sliderDrag[i][2], 
				game.sliderDrag[i][6], 
				game.sliderDrag[i][7]
			)
			.setId(i)
			.setFillStyle(game.sliderDrag[i][8])
			.setScale( 1, 1 );

		this['oActorContainer_'+i]
			.setLocation(parseFloat(game.sliderDrag[i][1]), parseFloat(game.sliderDrag[i][2]));
						
		if(game.sliderDrag[i][5]){
			this['oActorContainer_'+i].userDrag();
			this['oActorContainer_'+i].setAlpha('0.0');
		}
		//this['oActorContainer_'+i] = game.__addImageOnScene( game._director.getImage('ball'), 1, 1 );
		game._scene.addChild( this['oActorContainer_'+i] );
		game.actorContainer.push( this['oActorContainer_'+i] );	
	}
	
	
	for(var i=0;i<game.mainEleImg.length;i++){
		var oActorImg = game.__addImageOnScene( game._director.getImage(game.mainEleImg[i][0]), 1, 1 );		
		oActorImg.
			setLocation(game.mainEleImg[i][1], game.mainEleImg[i][2]);			
		game.mainPanel.addChild(oActorImg);
		//game.oDashSlider1.push(oActorImg);
	}		
}	

game.__createMainTxt = function(){
				var Vangle = game.__addTextOnImage('#000', 'Viewing angle', 'bold 14px Arial',  'left', game._director );				
				Vangle.
					setLocation(20, 450);
				game.mainPanel.addChild(Vangle);
				
				game.rTxt = game.__addTextOnImage('#000', 'R = 0.200 m', 'bold italic 14px Arial',  'left', game._director );				
				game.rTxt.
					setLocation(375, 330);
				game.mainPanel.addChild(game.rTxt);				
				
	}
//=======================================================
//Create Letter 'I'
//=======================================================
game.__createletterI = function() {		
	game.letterI = game.__addTextOnImage('#ff0000', 'I', 'bold italic 19px TimesNewRoman',  'left', game._director );	
	game.letterI.setLocation(367,210);
	game.mainPanel.addChild(game.letterI);

}
	
//=======================================================
//Create length Line
//=======================================================
game.__createMidLine = function() {		
	game.line = new CAAT.Foundation.Actor().					
			setBounds( 0, 0, game.mainPanel.width, game.mainPanel.height ).
			setClip(true);
	game.line.paint = function(director, time){			
		var ctx = director.ctx;
		ctx.strokeStyle='#000000';
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.moveTo( 367, 250);
		ctx.lineTo( 367, game.magnetImg.y+4);
		ctx.closePath();
		ctx.stroke();
		
	}
	game.mainPanel.addChild(game.line);
}	 	
	
	game.CircleX = 367;
	game.CircleY = 250;
	game.CircleRadius1 = 23;
	game.CircleRadius2 = 55;
	game.CircleRadius3 = 120;
	game.CircleRadius4 = 248;
	
	
//=======================================================
//Create Middle Circle
//=======================================================
game.__createCirclesBG1 = function() {	
   game.Circle = new CAAT.Foundation.Actor().					
			setBounds( 0, 0, game.mainPanel.width, game.mainPanel.height ).
			setClip(true);
	game.Circle.paint = function(director, time){	
		var ctx = director.ctx;
		ctx.strokeStyle = 'red';
		game.drawCirclesBG(ctx, 1);
		
	}
	
	game.mainPanel.addChild(game.Circle);
   	
}	

//=======================================================
//Create Middle Circle2
//=======================================================
game.__createCirclesFG1 = function() {	
   game.Circle2 = new CAAT.Foundation.Actor().					
			//setBounds(0, 0 , game.mainPanel.width, game.mainPanel.height ).
			setLocation(300,200).	
			setClip(true);
	
	game.Circle2.paint = function(director, time){
		
		var ctx = director.ctx;
		//ctx.strokeStyle = 'blue';
		//ctx.fillStyle='red';
		ctx.strokeStyle = 'red';
		game.drawCirclesFG(ctx, 1, game.Circle2);
		game.Circle2.setLocation(0,0);
		
	}	
	
	game.mainPanel.addChild(game.Circle2);
   
}	

//=======================================================
//Create Middle Circle3
//=======================================================
game.__createCirclesBG2 = function() {	
   game.Circle3 = new CAAT.Foundation.Actor().					
			setBounds( 0, 0, game.mainPanel.width, game.mainPanel.height ).
			setClip(true);
	game.Circle3.paint = function(director, time){
		var ctx = director.ctx;
		ctx.strokeStyle = 'red';
		game.drawCirclesBG(ctx, 2);
	}
	
	game.mainPanel.addChild(game.Circle3);
   
}	




//=======================================================
//Create Middle Circle4
//=======================================================
game.__createCirclesFG2 = function() {	
   game.Circle4 = new CAAT.Foundation.Actor().					
			setBounds( 0, 0, game.mainPanel.width, game.mainPanel.height ).
			setSize(300, 200).
			setClip(true);
	game.Circle4.paint = function(director, time){
	
		
		var ctx = director.ctx;
		//ctx.fillStyle = 'red';
		ctx.strokeStyle = 'red';
		game.drawCirclesFG(ctx, 2, game.Circle4);
		game.Circle4.setLocation(0,0);
	}
	
	game.mainPanel.addChild(game.Circle4);
   
}	

//=======================================================
//Create Red Line
//=======================================================


	game.Move1X = 367;
	game.Move1Y = 238;

	game.Line1X = 410;
	game.Line1Y = 239;


	game.Move2X = 410;
	game.Move2Y = 239;

	game.Line2X = 400;
	game.Line2Y = 234;

	game.Move3X = 410;
	game.Move3Y = 239;

	game.Line3X = 400;
	game.Line3Y = 243;


game.__createRedLine = function() {		
	game.Redline = new CAAT.Foundation.Actor().					
			setBounds( 0, 0, game.mainPanel.width, game.mainPanel.height ).
			setClip(true);
	game.Redline.paint = function(director, time){			
		var ctx = director.ctx;
		ctx.strokeStyle='red';
		ctx.beginPath();
		ctx.lineWidth = 2.0;
		ctx.moveTo(game.Move1X,game.Move1Y);
		ctx.lineTo(game.Line1X,game.Line1Y);
		//
		ctx.moveTo(game.Move2X,game.Move2Y);
		ctx.lineTo(game.Line2X,game.Line2Y);
		//
		ctx.moveTo(game.Move3X,game.Move3Y);
		ctx.lineTo(game.Line3X,game.Line3Y);
		ctx.closePath();
		ctx.stroke();
	}
	game.mainPanel.addChild(game.Redline);
}	
//=======================================================
//Create Circle at end of Center line
//=======================================================
game.__createCircleend = function() {	
   game.endCircle = new CAAT.Foundation.Actor().					
			setBounds( 0, 0, game.mainPanel.width, game.mainPanel.height ).
			setClip(true);
	game.endCircle.paint = function(director, time){
	
		//Circle 1
		var ctx = director.ctx;
		ctx.fillStyle='gray';
        ctx.beginPath();
        ctx.arc(game.nn1[0],game.nn1[1],6,0,2*Math.PI,false);
        ctx.fill();
	}
	
	game.mainPanel.addChild(game.endCircle);
	
}	


game.NewCircle = function(){

 game.NC = new CAAT.Foundation.Actor().					
					 setBounds( 0, 0, game.mainPanel.width, game.mainPanel.height ).
					 setClip(true);
					 game.NC.paint = function(director, time){
	   
					 //Circle 1
					var ctx = director.ctx;
					 ctx.fillStyle='red';
					 ctx.beginPath();
					 ctx.arc(367,238,5,0,2*Math.PI,false);
					 ctx.fill();
					 }
				 game.mainPanel.addChild(game.NC);
				 game.NC.visible=false;
}


//=======================================================
//Center 'X' Symbol draw...
//=======================================================
game.NewLine = function(){

 game.NL = new CAAT.Foundation.Actor().					
			setBounds( 0, 0, game.mainPanel.width, game.mainPanel.height ).
			setClip(true);
	game.NL.paint = function(director, time){			
		var ctx = director.ctx;
		ctx.strokeStyle='red';
		ctx.beginPath();
		ctx.lineWidth = 2.0;
		ctx.moveTo(364,234);
		ctx.lineTo(372,244);
		
		ctx.moveTo(364,244);
		ctx.lineTo(372,234);

		ctx.closePath();
		ctx.stroke();
	}
	game.mainPanel.addChild(game.NL);
	game.NL.visible=false;
				
}
//=======================================================
// Ang Line:
//=======================================================

// game._createAngleLine = function(){

 // game.angLine = new CAAT.Foundation.Actor().					
			// setBounds( 0, 0, game.mainPanel.width, game.mainPanel.height ).
			// setClip(true);
	// game.angLine.paint = function(director, time){			
		// var ctx = director.ctx;
		// ctx.strokeStyle='red';
		// ctx.beginPath();
		// ctx.lineWidth = 2.0;
		// ctx.moveTo(364,234);
		// ctx.lineTo(372,244);
		
		// ctx.moveTo(364,244);
		// ctx.lineTo(372,234);

		// ctx.closePath();
		// ctx.stroke();
	// }
	// game.mainPanel.addChild(game.angLine);			
// }


