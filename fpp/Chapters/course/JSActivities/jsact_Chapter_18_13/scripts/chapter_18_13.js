//=======================================================
//Game Logic
//=======================================================
(function () {
game.amplitude = 1.50, game.width = 1.50;
game.gameStatus = null, game.graphTimer = null;
game.ctrRight = 0;
game.phi_1 = 0, game.phi_2 = Math.PI/2;
var eachGridInPx = 30;
var oneMtInPx = eachGridInPx * 2;
var xAxis = ( eachGridInPx * 8 ) + 22;
var _scene  = null;
var displacement_1 = 0, displacement_2 = 0, displacement_c = 0;
var ratio = 0;
//=======================================================
// Let's build the elements on load
//=======================================================
game.createGraphContainer = function( director, scene, parent) {
	_scene = scene;
	var canvas_w1 = document.createElement('canvas');
		canvas_w1.width = director.width;
		canvas_w1.height = director.height - game.panelHeight;
	var canvas_w2 = document.createElement('canvas');
		canvas_w2.width = director.width;
		canvas_w2.height = director.height - game.panelHeight;
	var canvas_c = document.createElement('canvas');
		canvas_c.width = director.width;
		canvas_c.height = director.height - game.panelHeight;
	game.graphCont_w1 = new CAAT.Foundation.ActorContainer()
					.setBounds( 0, 0, director.width, director.height - game.panelHeight)
					.setFillStyle('red')
					.setBackgroundImage( canvas_w1 )
					.setClip(false);
	parent.addChild(game.graphCont_w1);
	game.graphCont_w2 = new CAAT.Foundation.ActorContainer()
					.setBounds( 0, 0, director.width, director.height - game.panelHeight)
					.setFillStyle('red')
					.setBackgroundImage( canvas_w2 )
					.setClip(false);
	parent.addChild(game.graphCont_w2);
	game.graphCont_c = new CAAT.Foundation.ActorContainer()
					.setBounds( 0, 0, director.width, director.height - game.panelHeight)
					.setFillStyle('red')
					.setBackgroundImage( canvas_c )
					.setClip(false);
	parent.addChild(game.graphCont_c);
	//just draw a single x-axis line on load
	game.graphCont_c.__ctx = canvas_c.getContext('2d');		
	game.graphCont_c.__ctx.moveTo(0, xAxis);
	game.graphCont_c.__ctx.lineTo(750, xAxis);
	game.graphCont_c.__ctx.strokeStyle = '#000000';
	game.graphCont_c.__ctx.lineWidth = 2;
	game.graphCont_c.__ctx.stroke();	
	game.dashBoardEleArr[14]
		.setAlpha(0)
		.userDrag(null, null, game.onSliderMouseUp, game.onSliderMouseDrag);
}
//=======================================================
// This function calculates and plots the curve
//=======================================================
function updateArray() {
	game.wavelength = 2 * game.width;
	var k = (( 2 * Math.PI ) / ( game.wavelength * oneMtInPx ));	
	var director = game.getDirector();
	
	var canvas_w1 = document.createElement('canvas');
		canvas_w1.width = director.width;
		canvas_w1.height = director.height - game.panelHeight;	
	var canvas_c = document.createElement('canvas');
		canvas_c.width = director.width;
		canvas_c.height = director.height - game.panelHeight;
		
	game.graphCont_w1.setBackgroundImage( canvas_w1 );
	game.graphCont_c.setBackgroundImage( canvas_c );	
	game.graphCont_w1.__ctx = canvas_w1.getContext('2d');
	game.graphCont_w1.__ctx.beginPath();
	game.graphCont_w1.__ctx.moveTo(-5, xAxis);	
	game.graphCont_w1.__ctx.lineWidth = 2;
	
	for(var p = 0; p <= 750; p += 5){	
		var cR = p + game.ctrRight;
		//this displacement is plotted for the curve in orange color
		displacement_1 = (game.amplitude * oneMtInPx * Math.sin((k * cR) + game.phi_1));
		game.graphCont_w1.__ctx.lineTo(p, xAxis - displacement_1);
	}
	game.graphCont_w1.__ctx.strokeStyle = '#ff9900';
	game.graphCont_w1.__ctx.stroke();
	game.graphCont_w1.__ctx.closePath();
	game.graphCont_w1.__ctx.beginPath();
	game.graphCont_w1.__ctx.moveTo(-5, xAxis);
	for(var p = 0; p <= 750; p += 5){	
		var cR = p + game.ctrRight;
		//this displacement is plotted for the curve in pink
		displacement_2 = (game.amplitude * oneMtInPx * Math.sin((k * cR) + game.phi_2));
		game.graphCont_w1.__ctx.lineTo(p, xAxis - displacement_2);
	}
	game.graphCont_w1.__ctx.strokeStyle = '#ffccff';
	game.graphCont_w1.__ctx.stroke();
	game.graphCont_w1.__ctx.closePath();
	game.graphCont_w1.__ctx.beginPath();
	game.graphCont_w1.__ctx.moveTo(-5, xAxis);
	for(var p = 0; p <= 750; p += 5){	
		var cR = p + game.ctrRight;
		//this displacement is plotted for the curve in orange color
		displacement_1 = (game.amplitude * oneMtInPx * Math.sin((k * cR) + game.phi_1));
		//this displacement is plotted for the curve in pink
		displacement_2 = (game.amplitude * oneMtInPx * Math.sin((k * cR) + game.phi_2));
		//this displacement is plotted for the curve combined of orange and pink
		displacement_c = displacement_1 + displacement_2;
		game.graphCont_w1.__ctx.lineTo(p, xAxis - displacement_c);
		
	}
	game.graphCont_w1.__ctx.strokeStyle = '#000000';
	game.graphCont_w1.__ctx.stroke();
	game.graphCont_w1.__ctx.closePath();
}
//=======================================================
// When the input values are updated
//=======================================================
game.valuesChanged = function() {
	updateArray();
}
//=======================================================
// On clicking the go btn
//=======================================================
game.goBtnMDownHandler = function() {
	//don't allow further go button clicks when the game is already running
	if(game.gameStatus == 'started') return;
	game.gameStatus = 'started';
	//If already time instance is running by any chance then cancel it out
	if(game.graphTimer) game.graphTimer.cancel();
	game.graphTimer = _scene.createTimer( 
		_scene.time, 
		Number.MAX_VALUE, 
		null, 
		function(scene_time, time_time, time_instance){ 
			updateArray();
			game.ctrRight-=3;
		}, 
		null 
	); 
}
//=======================================================
// On clicking the reset button
//=======================================================
game.resetBtnMDownHandler =  function() {
	var director = game.getDirector();
	game.ctrRight = 0;
	game.gameStatus = null;
	if(game.graphTimer) game.graphTimer.cancel();
	game.__bannerDisplay(0, 0, 430, 500, false);
	var canvas_w1 = document.createElement('canvas');
		canvas_w1.width = director.width;
		canvas_w1.height = director.height - game.panelHeight;
	var canvas_c = document.createElement('canvas');
		canvas_c.width = director.width;
		canvas_c.height = director.height - game.panelHeight;
	game.graphCont_w1.setBackgroundImage( canvas_w1 );
	game.graphCont_c.setBackgroundImage( canvas_c );
	game.graphCont_c.__ctx = canvas_c.getContext('2d');	
	game.graphCont_c.__ctx.moveTo(0, xAxis);
	game.graphCont_c.__ctx.lineTo(750, xAxis);
	game.graphCont_c.__ctx.stroke();
}
//=======================================================
// On clicking the pause button
//=======================================================
game.pauseBtnMDownHandler = function() {
	game.gameStatus = 'paused';
	if(game.graphTimer) game.graphTimer.cancel();
}
//=======================================================
// Extend actor container's enable drag and use it as userDrag 
// which draws the rays on every movement
//=======================================================
CAAT.Foundation.Actor.extend(
	{
		paint : function(director,time) {
			CAAT.exemplarr.superclass.paint.call(this,director,time);
		},

		userDrag: function (mEnterCallBack, mExitCallBack, mUpCallBack, mDragCallBack) {
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
				if(mEnterCallBack) {
					mEnterCallBack(this);	
				}
			};

			this.mouseExit = function (mouseEvent) {
				this.__d_ax = -1;
				this.__d_ay = -1;
				this.pointed = false;
				CAAT.setCursor('default');
				if(mExitCallBack) {
					mExitCallBack(this);	
				}
			};

			this.mouseMove = function (mouseEvent) {
			};

			this.mouseUp = function (mouseEvent) {
				this.__d_ax = -1;
				this.__d_ay = -1;
				if(mUpCallBack) {
					mUpCallBack(this);
				}
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
				
				if(mDragCallBack) {
					mDragCallBack(this);	
				}
			};

			return this;
		},
	},
	null,
	"CAAT.exemplarr"
);

game.onSliderMouseUp = function(obj) {
	game.dashBoardEleArr[14].x = game.dashBoardEleArr[13].x;
	game.dashBoardEleArr[14].y = game.dashBoardEleArr[13].y;
}

game.onSliderMouseDrag = function(obj) {
	if(obj.x > game.dashBoardEleArr[12].x && obj.x < (game.dashBoardEleArr[12].x + game.dashBoardEleArr[12].width - obj.width)) {
		game.dashBoardEleArr[13].x = obj.x;
	} else if(obj.x > (game.dashBoardEleArr[12].x+game.dashBoardEleArr[12].width)) {
		game.dashBoardEleArr[13].x = ( game.dashBoardEleArr[12].x + game.dashBoardEleArr[12].width) - obj.width;		
	} else if(obj.x < (game.dashBoardEleArr[12].x)){
		game.dashBoardEleArr[13].x = game.dashBoardEleArr[12].x;
	}
	var sliderLeft = game.sliderX;
	var sliderHolderLeft = game.sliderMidX;
	var oriDiff = sliderHolderLeft - sliderLeft;
	var newDiff, ratio_1, deg, direction;
	if(Math.floor(game.dashBoardEleArr[13].x) < game.sliderMidX) {
		//slider holder in left half of the slider
		newDiff = game.dashBoardEleArr[13].x - sliderLeft;
		//360 deg equals 160px
		ratio_1 = newDiff * (360/160);
		deg = 360 - parseInt(ratio_1);		
		direction = -1;
	} else if(Math.floor(game.dashBoardEleArr[13].x) > game.sliderMidX) {
		//slider holder in right half of the slider
		newDiff = game.dashBoardEleArr[13].x - sliderLeft - 160;
		//360 deg equals 160px
		ratio_1 = newDiff * (360/160);
		deg = parseInt(ratio_1);	
		direction = 1;
	} else {
		//when the sliderHolder is exactly in the middle of the slider
		ratio = 0;
		direction = 0;
		deg = 0;
	}
	game.phi_2 = (deg * direction)*(Math.PI/180);
}

})();