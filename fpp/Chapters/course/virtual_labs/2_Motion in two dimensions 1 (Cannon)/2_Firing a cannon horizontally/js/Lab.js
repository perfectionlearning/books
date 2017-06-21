var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		this._targetValue = 15.6;
		this._tolerance = 0.6;
		this.cacheData = {
			ballAnimation:[-50, -20, 100, 100, 2],
			egg:[-50, -20, 100, 100, 2],
		}
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		var scope = this;
		createPlayers.call(this);
		
		this._fireClicked = fireClicked.bind(this);
		this._pauseClicked = pauseClicked.bind(this);
		this._playClicked = playClicked.bind(this);
		this.reset = this.reset.bind(this);
		
		// this.layout.fireButton.addEventListener("click", this._fireClicked);
		this.layout.pauseButton.addEventListener("click", this._pauseClicked);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);
		
		this._extraMCs = [];
		this.layout.stepper.addEventListener("valueChange", function(e){
			scope.layout.speedText.text = e.currentTarget.value.toFixed(1);
			scope.player1.velocity = e.currentTarget.value;
		});
		this.reset();
	}
	
	Activity.prototype.reset = function(){
		this.layout.pauseButton.visible = false;
		this.layout.playButton.visible = true;
		this.layout.stepper.enable();
		this.layout.pauseButton.disable();
		// this.layout.fireButton.enable();
		this.player1.reset(true).enable().data("point1", false);
		this.layout.mudBall.visible = false;
		
		this.layout.timeText.text = "0.00 s";
		this.layout.txtAy.text = this.layout.txtVy.text = this.layout.txtAx.text = this.layout.txtVx.text = "---";
		
		this._extraMCs.forEach(function(mc){
			mc.removeAllEventListeners("tick");
			mc.parent.removeChild(mc);
		});
		this._extraMCs = [];
		
		this.layout.egg.gotoAndStop(0);
		this.layout.egg.cache.apply(this.layout.egg, this.cacheData.egg);
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
		this.layout.txtVx.text = this.layout.stepper.value.toFixed(1);
		this.layout.txtAx.text = "0.0";
		// this.layout.fireButton.disable();
		this.layout.stepper.disable();
		this.layout.pauseButton.enable();
		this.player1.reset();
		this.player1.disable();
		this.player1.fire(this.layout.stepper.value);
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
			
		if(BrowserDetect.any()){
			this.layout.arrow1.scaleX = this.layout.arrow1.scaleY = 1;
		}
		
		var arrow = new Slider(this.layout.arrow1, p1Data.draggableMin, p1Data.draggableMax, stepper._min, stepper._max, this.layout.arrow1Line, {direction:"left", lineWidth:BrowserDetect.any() ? 2 : 2, color:"#0000FF"});
		this.player1 = new Player(this.layout.canonBall1, arrow);
		
		for(i in Lab.data){
			for(j in Lab.data[i]){
				this[i].data(j, Lab.data[i][j]);
			}
		}
		this.player1.reset();
		this.player1.addEventListener("velocityUpdated", function(e){
			scope.layout.stepper.value = e.currentTarget.velocity.toFixed(1) * 1;
			scope.layout.speedText.text = e.currentTarget.velocity.toFixed(1);
		});
		this._hit = hit.bind(this);
		this.player1.addEventListener("hit", this._hit);
		this.player1.addEventListener("onUpdate", onUpdate.bind(this));
		this.player1.data("Vx", this.player1.data("defaultVx"));
	}
	
	function hit(e){
		var mc, scope = this;
		var value = this.layout.stepper.value, t = this._tolerance, v = this._targetValue;
		this.layout.pauseButton.disable();
		var bool = false;
		switch (e.data.hit){
			case Model.GROUND:
				if(!this.player1.data("point1") && (v - t) <= value && (v + t) >= value){
					bool = true;
					this.player1.data("point1", true);
					this.layout.egg.addEventListener("end", function(){
						scope.layout.egg.removeAllEventListeners("end");
						scope.layout.egg.cache.apply(scope.layout.egg, scope.cacheData.egg);
					});
					this.layout.egg.uncache();
					this.layout.egg.gotoAndPlay(0);
					// scope.layout.fireButton.enable();
					// scope.layout.stepper.enable();
					// scope.player1.enable();
					nextTurn.call(scope);

				}
				// mc = this.layout.mudBall;
				mc = new lib.Ballanimation();
				mc.visible = true;
				mc.x = e.data.point.x;
				mc.y = e.data.point.y;
				mc.scaleX = mc.scaleY = 1.6;
				mc.loop = false;
				this._extraMCs.push(mc);
				this.addChildAt(mc, this.getNumChildren() - 2);
				
				mc.addEventListener("end", function(){
					mc.removeAllEventListeners("end");
					mc.cache.apply(mc, scope.cacheData.ballAnimation);
					// !bool && scope.layout.fireButton.enable();
					// !bool && scope.layout.stepper.enable();
					// !bool && scope.player1.enable();
					if(!bool){
						nextTurn.call(scope);
					}
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
		this.player1.enable();
		this.layout.stepper.enable();
	}
	
	return Activity;
})();

Lab.data = {
	player1:{
		draggableMin:324,
		draggableMax:900,
		direction:1,
		defaultVx:5,
		startX:330,
		startY:145,
		boundary:[
			[{x:0 ,y:539}, {x:2000,y:539}]
		]
	}
}

var Player = (function(){
	function Class(ball, arrow){
		this._data = {};
		this.ball = ball;

		this.arrow = arrow;
		
		this._tick = this._tick.bind(this);
		this._onDrag = this._onDrag.bind(this);
		
		this.arrow.addEventListener("drag", this._onDrag);
	}
	
	Class.prototype = {
		constructor:Class,
		reset:function(bool){
			this.ball.visible = false;
			this.ball.x = this._data.startX;
			this.ball.y = this._data.startY;
			
			bool && (this.arrow.value = this._data.Vx);
			
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
		enable:function(){
			if(!this.auto){
				this.arrow.visible = true;
				this.arrow.enable();
			}
			
			return this;
		},
		disable:function(){
			this.arrow.visible = false;
			this.arrow.disable();
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
		_onDrag:function(e){
			var event = new createjs.Event("velocityUpdated");
			this.dispatchEvent(event);
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
	Object.defineProperty(Class.prototype, "velocity", {
		get:function(){
			return this.arrow.value;
		},
		set:function(value){
			this.arrow.value = value;
		}
	});
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