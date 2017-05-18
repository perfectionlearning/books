var game = { 
	_scene : null,
	_director : null,
	oDashTxtArr: [],
	mainPanel: null,
	distanceTxt: null,
	peTxt:null,
	testChgImg: null,
	arcDot: null,
	
	redX:175,
	redY:235,
	lastX:75,
	lastY:250-102.6,
	graphValue:[],
	lastD:5.00,
	botBoxY:147.4,
	botTopY:149.4
	
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
	
		game.mainEleImg[game.mainEleImg.length] = ['graph',  	390,   0];//image_id, image_X_Position, image_Y_Position
		game.mainEleImg[game.mainEleImg.length] = ['grid',  	0,   0];//image_id, image_X_Position, image_Y_Position
		game.mainEleImg[game.mainEleImg.length] = ['proton',  	175,   235];//image_id, image_X_Position, image_Y_Position
		
			
	
		var assets = [
			{id:'graph',      	url:game.actPath+'graph.png' },	
			{id:'grid',      	url:game.actPath+'grid.gif' },				
			{id:'proton',      	url:game.actPath+'proton.gif' },				
			{id:'testChg',      url:game.actPath+'testChg.gif' },	
			
			{id:'dashBG',      	url:game.sharedPath+'dash.gif' },	
			
			//dashboard Image
			
			{id:'wellleft',    		url:game.sharedPath+'wellleft.gif' },
			{id:'well100',     		url:game.sharedPath+'well100.gif' },
			{id:'wellright',   		url:game.sharedPath+'wellright.gif' },						
			
			//Buttons GO, RESET, PAUSE
			{id:'buttons',     	url:game.sharedPath+'buttons.png' },
			
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
	//add main panel Text
	game.__createMainTxt();
	game.createBottomBox(75, 149.4,90);
	game.createTopBox(75, 147.4);
	game.__createMidLine(75, 250-102.6);
	//CAAT.loop(60);
	
	game.testChgImg = game.__addImageOnScene( game._director.getImage('testChg'), 1, 1 );
	game.testChgImg.setLocation(255, 235); 
	game.mainPanel.addChild(game.testChgImg);
	
	game.testChgDrag = new CAAT.exemplarr().
			setBounds( game.testChgImg.x,game.testChgImg.y,game.testChgImg.width, game.testChgImg.height )
	game.testChgDrag.userDrag();
	game.mainPanel.addChild( game.testChgDrag );
}
//====================================================
//create main panel image on scene
//====================================================
game.__createMainImgScene = function(){


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
				//alert('lksdjglk');				
			};
	
			this.mouseExit = function (mouseEvent) {
				this.__d_ax = -1;
				this.__d_ay = -1;
				this.pointed = false;
				CAAT.setCursor('default');
			};
	
			this.mouseMove = function (mouseEvent) {};
						
			this.mouseUp = function (mouseEvent) {
				this.__d_ax = -1;
				this.__d_ay = -1;
				
				game.testChgDrag.x = game.testChgImg.x ;
				game.testChgDrag.y = game.testChgImg.y ;
				
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
				
				game.onMoveTestCharge();
				
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
	
	game.intializeGraphArray();
	game.drawGraphContainer(); 
}	
	
//==================================================
//Create Main panel text
//==================================================
game.__createMainTxt = function(){
	//for(var i=0;i<mainEleTxt.length; i++){			
		
		game.incDecTxt = game.__addTextOnImage('#000', '1 grid square = 1 mm', 'bold 14px Arial',  'left', game._director );				
		game.incDecTxt.
			setLocation(233, 475);
		game.mainPanel.addChild(game.incDecTxt);
		
		
	//}
}
 game.__createMidLine = function(x,y) {		
		game.arcDot = new CAAT.Foundation.ActorContainer().					
					//setBounds( 0, 0, game.mainPanel.width, game.mainPanel.height ).
					setBounds(453, 0,310, 250).
					setClip(true);
		game.arcDot.paint = function(director, time){			
			var ctx = director.ctx;
			ctx.strokeStyle='red';
			ctx.fillStyle='red';
			ctx.beginPath();
			//ctx.arc(528,146,2,0,2*Math.PI);
			ctx.arc(x, y,2.5,0,2*Math.PI);
			ctx.fill();
			ctx.closePath();
			ctx.stroke();			
		}
		game.mainPanel.addChild(game.arcDot);
}

game.createBottomBox=function(x,y,h){

game.bottomBox = new CAAT.Foundation.ActorContainer().					
					//setBounds( 0, 0, game.mainPanel.width, game.mainPanel.height ).
					setBounds(453, 0,310, 250).
					setClip(true);
		game.bottomBox.paint = function(director, time){			
			var ctx = director.ctx;
			ctx.strokeStyle='white';
			ctx.fillStyle='white';
			ctx.beginPath();
			ctx.fillRect(x,y,300,h);
			ctx.fill();
			ctx.closePath();
			ctx.stroke();			
		}
		game.mainPanel.addChild(game.bottomBox);

}


game.createTopBox=function(w,h){

game.topBox = new CAAT.Foundation.ActorContainer().					
					//setBounds( 0, 0, game.mainPanel.width, game.mainPanel.height ).
					setBounds(453, 0,310, 250).
					setClip(true);
		game.topBox.paint = function(director, time){			
			var ctx = director.ctx;
			ctx.strokeStyle='white';
			ctx.fillStyle='white';
			ctx.beginPath();
			ctx.fillRect(0,0,w,h);
			ctx.fill();
			ctx.closePath();
			ctx.stroke();			
		}
		game.mainPanel.addChild(game.topBox);

}

game.drawGraphContainer = function() {	
	var canvas = document.createElement('canvas');
	canvas.width = 310;
	canvas.height = 250;

	game.drawingActor = new CAAT.Foundation.Actor().
						setBackgroundImage( canvas ).
							setBounds( 453, game.mainEleImg[0][2],310, 250 );
	game.drawingctx = canvas.getContext('2d');
	game.drawingctx.lineWidth = 0.5;
	game.drawingctx.lineJoin = 'round';
	game.drawingctx.lineCap = 'round';
	game.drawingctx.strokeStyle = 'black';
	game.drawingctx.setAntiAlias=true;
	game.drawingctx.beginPath();

	/*game.drawingctx.moveTo(0, 0);	
	game.drawingctx.lineTo(100,100);	
	game.drawingctx.stroke();*/
	game.drawingctx.moveTo(game.graphValue[0][1],game.graphValue[0][2]);
	for(var i=1;i<game.graphValue.length;i++)
	{
		game.drawingctx.lineTo(game.graphValue[i][1],game.graphValue[i][2]);	
		game.drawingctx.stroke();
	}
	
	game.mainPanel.addChild(game.drawingActor );
	

}

game.intializeGraphArray = function(){

var rd=1.87;
var i=0;
var k=8.99;


while(rd<=18.31)//18.31
{

var tempPE=8.99/rd;
var tempX=rd*15;
var tempY= 250-(tempPE*57)

game.graphValue[i]=[rd,tempX,tempY];
i++;
var temprd=Number(rd)+0.01;
rd=temprd.toFixed(2);
}


}