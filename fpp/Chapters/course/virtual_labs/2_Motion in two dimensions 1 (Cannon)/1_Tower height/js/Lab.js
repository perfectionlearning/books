var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		createPlayers.call(this);
		
		this._fireClicked = fireClicked.bind(this);
		this._pauseClicked = pauseClicked.bind(this);
		this._playClicked = playClicked.bind(this);
		this.reset = this.reset.bind(this);
		
		// this.layout.fireButton.addEventListener("click", this._fireClicked);
		this.layout.pauseButton.addEventListener("click", this._pauseClicked);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);
		
		this.reset();
	}
	
	Activity.prototype.reset = function(){
		this.layout.pauseButton.visible = false;
		this.layout.playButton.visible = true;
		// this.layout.fireButton.enable();
		this.player1.reset();
		this.layout.mudBall.visible = false;
		
		this.layout.timeText.text = "0.00 s";
		this.layout.txtAy.text = this.layout.txtVy.text = this.layout.txtAx.text = this.layout.txtVx.text = "---";
		this._resetState = true;
	}
	
	function playClicked(e){
		if(this._resetState){
			this._fireClicked();
			this._resetState = false;
		} else {
			this.player1.fire();
		}
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
		// this.player1.fire();
		
	}
	
	function pauseClicked(e){
		this.layout.pauseButton.visible = false;
		this.layout.playButton.enable().visible = true;
		this.player1.pause();
	}
	
	function fireClicked(e){
		this.layout.txtVx.text = this.layout.txtAx.text = "0.0";
		// this.layout.fireButton.disable();
		this.layout.pauseButton.enable();
		this.player1.reset();
		this.player1.fire(0);
		// var mc = this.layout["smoke" + (this.playerIndex + 1)];
		// mc.visible = true;
		// mc.addEventListener("tick", function(){
			// if(mc.currentFrame >= mc.totalFrames - 1){
				// mc.removeAllEventListeners("tick");
				// mc.visible = false;
			// }
		// });
		// mc.gotoAndPlay(0);
	}
	
	function onUpdate(){
		this.layout.txtAy.text = Model.g.toFixed(2);
		this.layout.txtVy.text = this.player1.data("Vy").toFixed(1);
		this.layout.timeText.text = Model.time.toFixed(2) + " s";
	}
	
	function createPlayers(){
		var scope = this,
			i, j, 
			p1Data = Lab.data.player1, 
			p2Data = Lab.data.player2, 
			stepper = this.layout.stepper;
			
		this.player1 = new Player(this.layout.canonBall1);
		
		for(i in Lab.data){
			for(j in Lab.data[i]){
				this[i].data(j, Lab.data[i][j]);
			}
		}
		this.player1.reset();
		this._hit = hit.bind(this);
		this.player1.addEventListener("hit", this._hit);
		this.player1.addEventListener("onUpdate", onUpdate.bind(this));
	}
	
	function hit(e){
		var mc, scope = this;
		this.layout.pauseButton.disable();
		switch (e.data.hit){
			case Model.GROUND:
				mc = this.layout.mudBall;
				mc.visible = true;
				mc.x = e.data.point.x;
				mc.y = e.data.point.y;
				
				mc.addEventListener("end", function(){
					mc.removeAllEventListeners("end");
					// scope.layout.fireButton.enable();
					nextTurn.call(scope);
				});
				mc.gotoAndPlay(0);
				
				var d = (e.data.point.y - this.player1.data("startY")) / Model.unit;
				var t = Math.sqrt(-2 * (d) / Model.g).toFixed(2);
				var v = (Model.g * t).toFixed(1);
				this.layout.txtVy.text = v;
				this.layout.timeText.text = t + " s";
			break;
		}
	}
	
	function nextTurn(){
		this.layout.playButton.visible = true;
		this.layout.pauseButton.visible = false;
		this._resetState = true;
	}
	
	return Activity;
})();

Lab.data = {
	player1:{
		direction:1,
		defaultVx:0,
		startX:543,
		startY:145,
		boundary:[
			[{x:0 ,y:546}, {x:1024,y:546}]
		]
	}
}

var Player = (function(){
	function Class(ball){
		this._data = {};
		this.ball = ball;

		this._tick = this._tick.bind(this);
	}
	
	Class.prototype = {
		constructor:Class,
		reset:function(){
			this.ball.visible = false;
			this.ball.x = this._data.startX;
			this.ball.y = this._data.startY;
			
			this.pause();
			
			return this;
		},
		data:function(key, value){
			if(arguments.length == 1){
				return this._data[key];
			} else {
				this._data[key] = value;
			}
			return this;
		},
		fire:function(Vx){
			if(arguments.length > 0){
				this.data("Vx", Vx);
				this.data("Vy", 0);
				this.ball.visible = true;
				Model.time = 0;
			}
			createjs.Ticker.addEventListener("tick", this._tick);
		},
		pause:function(){
			createjs.Ticker.removeEventListener("tick", this._tick);
		},
		_tick:function(){
			var Vx = this.data("Vx"), Vy = this.data("Vy"), boundary = this.data("boundary");
			var p = Model.nextPoint(Vx, Vy), i = 0, hit = false, e;
			p.x = sV(Model.pointToPixel(p.x)), p.y = sV(Model.pointToPixel(p.y));
			var _p = {
				x:this.ball.x + p.x * this.data("direction"),
				y:this.ball.y - p.y,
			}
			Model.time += Model.step;
			for(; i < boundary.length; i++){
				var _i = Model.doIntersect(_p, this.ball, boundary[i][0], boundary[i][1]);
				if(_i){
					hit = true;
					e = new createjs.Event("hit");
					e.currentTarget = this;
					e.data = {
						hit:i,
						point:_i
					}
					this.dispatchEvent(e);
					this.pause();
					this.ball.visible = false;
					return;
				}
			}
			
			this.ball.x += p.x * this.data("direction");
			this.ball.y -= p.y;
			
			this.data("Vy", Vy + Model.g * Model.step);
			
			this.dispatchEvent("onUpdate");
		}
	};
	createjs.EventDispatcher.initialize(Class.prototype);
	
	return Class;
})();

var Model = {
	_data:null,
	g:-9.8,
	unit:8.05,
	step:0.05,
	startY:228,
	baseY:546
};

Object.defineProperty(Model, "data", {
	get:function(){
		return this._data;
	},
	set:function(value){
		this._data = value;
	}
});

Model.nextPoint = function(Vx, Vy){
	var p = {};
	p.x = Vx * Model.step;
	p.y = Vy * Model.step;
	return p;
}

Model.pointToPixel = function(value){
	return value * Model.unit;
}

Model.calcVx = function(distance){
	return distance / Math.sqrt(2 * Model.height / Math.abs(Model.g));
}

Model.pixelToPoint = function(value){
	return value / Model.unit;
}

Model.randomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Model.doIntersect = function(p1, q1, p2, q2/* , *i_x, *i_y */){
	var i = {};
    var s1_x, s1_y, s2_x, s2_y;
    s1_x = q1.x - p1.x;     s1_y = q1.y - p1.y;
    s2_x = q2.x - p2.x;     s2_y = q2.y - p2.y;

    var s, t;
    s = (-s1_y * (p1.x - p2.x) + s1_x * (p1.y - p2.y)) / (-s2_x * s1_y + s1_x * s2_y);
    t = ( s2_x * (p1.y - p2.y) - s2_y * (p1.x - p2.x)) / (-s2_x * s1_y + s1_x * s2_y);

    if (s >= 0 && s <= 1 && t >= 0 && t <= 1){
        // Collision detected
        // if (i.x != NULL)
		i.x = p1.x + (t * s1_x);
        // if (i_y != NULL)
		i.y = p1.y + (t * s1_y);
        return i;
    }

    return false; // No collision
}


Model.heightInPixel = Model.baseY - Model.startY;
Model.height = Model.pixelToPoint(Model.heightInPixel);

Model.GROUND = 0;
Model.DOOR = 1;
Model.BASE = 2;
Model.WALL = 3;