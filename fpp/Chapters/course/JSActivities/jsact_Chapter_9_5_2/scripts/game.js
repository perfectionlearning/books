var game = game || {};

CAAT.Foundation.Actor.extend(
	{
		paint : function(director,time) {
			CAAT.exemplarr.superclass.paint.call(this,director,time);
		},

		defaultXPos:-1,
		defaultYPos:-1,
		reSetPosition: function(){
		//	this.setRotationAnchored(0, 0, 0 )
			this.setLocation(this.defaultXPos, this.defaultYPos);
			this.setSpriteIndex(0);
			return this;
		},
		setDefaultPos: function(x, y){
			this.setLocation(x, y);
			this.defaultXPos = x;
			this.defaultYPos = y;
			return this;
		},

		userDrag: function (callback, callback1) {
			this.ax = 0;
			this.ay = 0;
			this.asx = 1;
			this.asy = 1;
			this.ara = 0;
			this.screenx = 0;
			this.screeny = 0;

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

				if(callback1){
					callback1(this, mouseEvent);
				}
			};

			this.mouseDrag = function (mouseEvent) {
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

				//this.x += pt.x - this.__d_ax;
				//this.y += pt.y - this.__d_ay;


				if(callback){
					callback(this, mouseEvent, pt.x - this.__d_ax, pt.y - this.__d_ay);
				}

				this.__d_ax = pt.x;
				this.__d_ay = pt.y;
			};

			return this;
		},
	},
	null,
	"CAAT.exemplarr"
);


game = {
	sharedPath: '',
	actPath: '',
	// Start the game.  Loads the assets, creates the canvas, and starts it all running.
	StartGame : function(){
		CAAT.DEBUG = 0;
		var assets = [{id:'background', url:game.actPath + 'background.gif'},
					{id:'wellleft', url:game.sharedPath + 'wellleft.gif'},
					{id:'wellright', url:game.sharedPath + 'wellright.gif'},
					{id:'well100', url:game.sharedPath + 'well100.gif'},
					{id:'buttons', url:game.sharedPath + 'buttons.png'},
					{id:'banner', url:game.sharedPath + 'banner.png'},
					{id:'speed', url:game.sharedPath + 'speed.gif'},
					{id:'dash', url:game.sharedPath + 'dash.gif'},
					{id:'blueicon', url:game.sharedPath + 'blueicon.gif'},
					{id:'incrBgMed', url:game.sharedPath + 'incrBgMed.gif' },
					{id:'incre_decre_btn', url:game.sharedPath + 'incre_decre_btn.png'},
					{id:'bluerace', url:game.actPath+'blueRace.gif'},
					{id:'redrace', url:game.actPath+'redRace.gif'},
					{id:'startline', url:game.actPath+'startLine.gif'},
					{id:'checkline', url:game.actPath+'checkline.gif' },
					{id:'gauge_x', url:game.sharedPath + 'gauge_x.gif'},
					{id:'gauge_y', url:game.sharedPath + 'gauge_y.gif'},
					{id:'finish', url:game.actPath+'finish.gif'}];


		CAAT.Module.Initialization.Template.init(
			760,	//width of the canvas that will be created
			600, 	//Height of the canvas that will be created
			'activity',	// Leave this null to create a new canvas that will be appended to the body
			assets,
			function(director){
				var scene = director.createScene();
				var banner = game.screening(director, scene);
				game.interaction(director, scene, banner);
			}
		);
		CAAT.bindEvent(window, 'blur', function (event) {
			if(typeof game.pauseActivity == 'function') {
				game.pauseActivity();
			}
		}, false);
	},
	Cleanup: function(){
        CAAT.clearEvents();
        CAAT.currentDirector.clean();
	},
}

game.textActor = function(director, txt, fontStyle, fontAlign, fontColor) {
	var text = new CAAT.Foundation.UI.TextActor().
	setFont(fontStyle).
	setText(txt).
	setTextAlign(fontAlign).
	setTextFillStyle(fontColor).
	calcTextSize(director).
	setOutline( false );
	return text;
}
