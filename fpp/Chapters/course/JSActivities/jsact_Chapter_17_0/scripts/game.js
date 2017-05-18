var game = game || {};

CAAT.Foundation.Actor.extend(
	{
		paint : function(director,time) {
			CAAT.exemplarr.superclass.paint.call(this,director,time);
		},
		defaultXPos:-1,
		defaultYPos:-1,
		reSetPosition: function(){
			//this.setRotationAnchored(0, 0, 0 );
			this.setLocation(this.defaultXPos, this.defaultYPos);
			return this;
		},
		setDefaultPos: function(x, y){
			this.setLocation(x, y);
			this.defaultXPos = x;
			this.defaultYPos = y;
			return this;
		},

		userDrag: function (callback, callback1, moveX, moveY) {
			this.ax = 0;
			this.ay = 0;
			this.asx = 1;
			this.asy = 1;
			this.ara = 0;
			this.screenx = 0;
			this.screeny = 0;

			this.mouseEnter = function (mouseEvent) {
				if(moveX)this.__d_ax = -1;
				if(moveY)this.__d_ay = -1;
				this.pointed = true;
				CAAT.setCursor('move');
			};

			this.mouseExit = function (mouseEvent) {
				if(moveX)this.__d_ax = -1;
				if(moveY)this.__d_ay = -1;
				this.pointed = false;
				CAAT.setCursor('default');
			};

			this.mouseMove = function (mouseEvent) {
			};

			this.mouseUp = function (mouseEvent) {
				if(moveX)this.__d_ax = -1;
				if(moveY)this.__d_ay = -1;

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

					if(moveX)this.x = pt.x;
					if(moveY)this.y = pt.y;
					if(moveX)this.__d_ax = pt.x;
					if(moveY)this.__d_ay = pt.y;
					if(moveX)this.__d_asx = this.scaleX;
					if(moveY)this.__d_asy = this.scaleY;
					this.__d_ara = this.rotationAngle;
					if(moveX)this.__d_screenx = mouseEvent.screenPoint.x;
					if(moveY)this.__d_screeny = mouseEvent.screenPoint.y;
				}

				if(callback){
					callback(this, mouseEvent, pt.x - this.__d_ax, pt.y - this.__d_ay);
				}
				if(moveX){
					//this.x += pt.x - this.__d_ax;
					this.__d_ax = pt.x;
				}
				if(moveY){
					//this.y += pt.y - this.__d_ay;
					this.__d_ay = pt.y;
				}


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
		var assets = [{id:'buttons', url:game.sharedPath + 'buttons.png'},
					{id:'dash', url:game.sharedPath + 'dash.gif'},
					{id:'incrbgmed', url:game.sharedPath + 'incrBgMed.gif'},
					{id:'incre_decre_btn', url:game.sharedPath + 'incre_decre_btn.png'},
					{id:'well50', url:game.sharedPath + 'well50.gif'},
					{id:'well100', url:game.sharedPath + 'well100.gif'},
					{id:'wellleft', url:game.sharedPath + 'wellleft.gif'},
					{id:'wellright', url:game.sharedPath + 'wellright.gif'},
					{id:'clock', url:game.sharedPath + 'clock.gif'},
					{id:'checkonoff', url:game.sharedPath + 'checkonoff.png'},
					{id:'Popupmed', url:game.sharedPath + 'PopUpMed.gif'},
					{id:'banner', url:game.sharedPath + 'banner.png'},
					{id:'b1', url:game.actPath + 'b1.png'},
					{id:'b2', url:game.actPath + 'b2.png'},
					{id:'magnet', url:game.actPath + 'magnet.gif'},
					{id:'spkrbase', url:game.actPath + 'spkrBase.gif'},
					{id:'redpoint', url:game.actPath + 'red_points.png'},//
					{id:'blackpoint', url:game.actPath + 'black_points.png'},
					{id:'patchwhite', url:game.actPath + 'patch_white.png'},
					{id:'horizline', url:game.actPath + 'HorizLine.gif'}];

		CAAT.Module.Initialization.Template.init(
			760, 	//Height of the canvas that will be created
			600,	//width of the canvas that will be created
			'activity',	// Leave this null to create a new canvas that will be appended to the body
			assets,
			function(director){
				var scene = director.createScene();
				game.__createAudioElement();
				game.banner = game.screening(director, scene);
				game.interaction(director, scene, game.banner);
			}
		);
		CAAT.bindEvent(window, 'blur', function (event) {
			if(game.pauseActivity) {
				game.pauseActivity();
			}
		}, false);
	},

	Cleanup: function(){
		game.endSound_dir();
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
game.__createAudioElement = function(){
	for(var i=200;i<=500;i+=50){
		this['audio_'+i] = document.createElement('audio');
		this['audio_'+i].setAttribute('id', 'audio_'+i);

		this['audio_'+i].setAttribute('preload', 'auto');
		this['audio_'+i].load();

		var audioSrc1 = document.createElement('source');
		audioSrc1.type = 'audio/mpeg';
		audioSrc1.setAttribute('src', game.actPath + 'audio/'+i+'.mp3');
		this['audio_'+i].appendChild(audioSrc1);

		var audioSrc2 = document.createElement('source');
		audioSrc2.type = 'audio/m4a';
		audioSrc2.setAttribute('src', game.actPath + 'audio/'+i+'.m4a');
		this['audio_'+i].appendChild(audioSrc2);

		var audioSrc3 = document.createElement('source');
		audioSrc3.type = 'audio/ogg';
		audioSrc3.setAttribute('src', game.actPath + 'audio/'+i+'.ogg');
		this['audio_'+i].appendChild(audioSrc3);

		var container = document.getElementById('act_controls');
		if (container)
			container.appendChild(this['audio_'+i]);
	}
}