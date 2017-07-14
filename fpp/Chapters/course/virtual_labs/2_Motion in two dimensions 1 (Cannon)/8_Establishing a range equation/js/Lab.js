var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		
		this._totalTurns = 4;
		this.playerIndex = 0;
		this._minX = 766.8;
		this._maxX = 889.86;
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		var scope = this;
		
		this._fireClicked = fireClicked.bind(this);
		this._pauseClicked = pauseClicked.bind(this);
		this._playClicked = playClicked.bind(this);
		this._onDataChange = onDataChange.bind(this);
		this.reset = this.reset.bind(this);
		
		// this.layout.fireButton.addEventListener("click", this._fireClicked);
		this.layout.pauseButton.enable().addEventListener("click", this._pauseClicked);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);

		this.layout.speedStepper.addEventListener("valueChange", function(e){
			scope.activePlayer.velocity = e.currentTarget.value;
			scope.layout.speedText.text = e.currentTarget.value.toFixed(1);
			scope.activePlayer.data("velocity", scope.activePlayer.arrow.magnitude);
			// scope.activePlayer.data("velocity", scope.activePlayer.arrow.magnitude);
		});
		this.layout.angleStepper.addEventListener("valueChange", function(e){
			scope.activePlayer.angle = 360 - e.currentTarget.value;
			scope.layout.angleText.text = e.currentTarget.value//.toFixed(1);
			scope.activePlayer.data("angle", scope.activePlayer.arrow.angle);
			// scope.activePlayer.data("angle", scope.activePlayer.arrow.angle);
			scope.layout["cannon" + (scope.playerIndex + 1)].rotation = scope.layout["cannon" + (scope.playerIndex + 1)]._defAngle + scope.activePlayer.angle;
		});
		this._extraMCs = [];
		
		this.layout.arrow1.snapToPixel = false;
		this.layout.cannon1.snapToPixel = false;

		createPlayers.call(this);
		
		this.reset();
	}
	
	Activity.prototype.reset = function(){
		
		this.player1.reset().enable();
		
		// removing canonball from the ground
		this._extraMCs.forEach(function(mc){
			mc.removeAllEventListeners("tick");
			mc.gotoAndStop(0);
			mc.parent.removeChild(mc);
		});
		this._extraMCs = [];
		
		// this.layout.pauseButton.disable();
		this.layout.pauseButton.visible = false;
		this.layout.playButton.visible = true;
		
		// this.layout.fireButton.enable();
		this._onDataChange();
		this.layout.water.gotoAndStop(this.layout.water.totalFrames - 1);
		this._resetState = true;
		
		this.layout.txtAy.text = this.layout.txtAx.text = this.layout.txtVy.text = this.layout.txtVx.text = "---";
		this.layout.timeText.text = "0.00 s";
	}
	
	function playClicked(e){
		if(this._resetState){
			this._fireClicked();
			this._resetState = false;
		} else {
			this.activePlayer.fire();
		}
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
	}
	
	function pauseClicked(e){
		this.layout.pauseButton.visible = false;
		this.layout.playButton.enable().visible = true;
		this.activePlayer.pause();
	}
	
	function fireClicked(e){
		// this.layout.fireButton.disable();
		this.layout.angleStepper.disable();
		this.layout.speedStepper.disable();
		this.layout.pauseButton.enable();
		this.activePlayer.fire(true);
		var mc = this.layout["smoke" + (this.playerIndex + 1)];
		// mc.visible = true;
		// mc.addEventListener("tick", function(){
			// if(mc.currentFrame >= mc.totalFrames - 1){
				// mc.removeAllEventListeners("tick");
				// mc.visible = false;
			// }
		// });
		// mc.gotoAndPlay(0);
		this.layout.txtAx.text = "0.0";
		this.layout.txtVx.text = this.activePlayer.data("Vx").toFixed(1);
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
			
		this.vLine1 = new VectorLine(this.layout.arrow1, {x:this.layout.cannon1.x, y:this.layout.cannon1.y}, {min:20, max:65}, {min:270, max:270+60}, this.layout.arrow1Line, {}, 1);
		this.player1 = new Player(this.vLine1, this.layout.canonBall1);
		this.vLine1.unit = 7;

		
		for(i in Lab.data){
			for(j in Lab.data[i]){
				this[i].data(j, Lab.data[i][j]);
			}
		}
		this.player1/* .reset() */.addEventListener("dataChange", this._onDataChange);
		
		this._hit = hit.bind(this);
		this.player1.addEventListener("hit", this._hit);
		
		this.player1.data("velocity", this.player1.data("defaultV"));
		this.player1.data("angle", this.player1.data("defaultA"));
		
		this.player1.addEventListener("onUpdate", onUpdate.bind(this));
		this.activePlayer = this.player1;
	}
	
	function onDataChange(e){
		// to avoid disabling of both buttons at a time
		this.layout.speedStepper.value = this.layout.speedStepper._min + 1;
		this.layout.angleStepper.value = this.layout.angleStepper._min + 1;
		//
		this.layout.speedStepper.value = this.activePlayer.velocity.toFixed(1) * 1;
		this.layout.angleStepper.value = (360 - this.activePlayer.angle).toFixed(0) * 1;

		this.layout.speedText.text = this.activePlayer.velocity.toFixed(1);
		this.layout.angleText.text = this.layout.angleStepper.value//.toFixed(1);
		
		this.layout["cannon" + (this.playerIndex + 1)].rotation = this.layout["cannon" + (this.playerIndex + 1)]._defAngle + this.activePlayer.angle;
	}
	
	function checkLakeHit(e){
		var x = e.data.point.x.toFixed(2) * 1;
		if(x >= this._minX && x <= this._maxX){
			return true;
		}
		return false;
	}
	
	function hit(e){
		var mc, scope = this;
		this.layout.pauseButton.disable();
		this.activePlayer.turn++;
		switch (e.data.hit){
			case 0:
				var res = checkLakeHit.call(this, e);
				if(res){
					mc = this.layout.water;
				} else {
					
					mc = new lib.Ballanimation();
					mc.scaleX = mc.scaleY = 1;
					mc.x = e.data.point.x;
					mc.y = e.data.point.y;
					this._extraMCs.push(mc);
					this.addChild(mc);
					mc.loop = false;
				}
				// mc.regY = 0;
				mc.addEventListener("end", function(){
					mc.removeAllEventListeners("end");
					nextTurn.call(scope);
				});
				mc.gotoAndPlay(0);
				
			break;
			case 1:
				nextTurn.call(scope);
			break;
		}
		
		var v = Vector.components(this.layout.speedStepper.value, this.layout.angleStepper.value * Math.TO_RADIANS).y.toFixed(1) * 1;
		this.layout.txtVy.text = v.toFixed(1);
		var t = Math.abs(2 * v / Model.g).toFixed(2);
		this.layout.timeText.text = t + " s";
	}
	
	function nextTurn(){
		this.layout.angleStepper.enable();
		this.layout.speedStepper.enable();
		this.layout.playButton.enable();
		this.layout.playButton.visible = true;
		this.layout.pauseButton.visible = true;
		this.activePlayer.enable();
		this._resetState = true;
	}
	
	return Activity;
})();

Lab.data = {
	player1:{
		direction:1,
		defaultV:20,
		defaultA:315,
		startX:106,
		groundStartX:164,
		groundStartY:545,
	}
}

var Player = (function(){
	function Class(arrow, ball){
		this._data = {};
		this.arrow = arrow;
		this.ball = ball;

		this.disable();
		this._tick = this._tick.bind(this);
		this._onDrag = this._onDrag.bind(this);
		
		this.arrow.addEventListener("drag", this._onDrag);
	}
	
	Class.prototype = {
		constructor:Class,
		reset:function(){
			this.ball.visible = false;
			this.ball.x = this.arrow._baseVector.x;
			this.ball.y = this.arrow._baseVector.y;
			
			this.arrow.magnitude = this._data.velocity;
			this.arrow.angle = this._data.angle;
			this.pause();
			
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
		data:function(key, value){
			if(arguments.length == 1){
				return this._data[key];
			} else {
				this._data[key] = value;
			}
			return this;
		},
		setTargets:function(array){
			var x;
			this.targetValues = array;
			this.pointers.forEach(function(p, i){
				x = p.x = this.data("startX") + Model.pointToPixel(array[i]) * this.data("direction");
			}, this);
			return x;
		},
		_onDrag:function(e){
			var event = new createjs.Event("dataChange");
			this.data("velocity", this.arrow.magnitude);
			this.data("angle", this.arrow.angle);
			this.dispatchEvent(event);
		},
		fire:function(bool){
			if(arguments.length > 0){
				this.data("velocity", this.arrow.magnitude);
				this.data("angle", this.arrow.angle);
				var p = this.arrow._baseVector.add(Vector.components(39, this.arrow.angle * Maths.TO_RADIANS));
				this.ball.x = p.x;
				this.ball.y = p.y;
				if(p.y > this.data("groundStartY")){
					this.ball.y = this.data("groundStartY");
				}
				this.data("startY", p.y);
				var v = Vector.components(this.arrow.magnitude, this.arrow.angle * Maths.TO_RADIANS);
				this.data("Vx", v.x);
				this.data("Vy", -v.y);
				this.data("startVy", v.y);
				this.ball.visible = true;
				this.arrow.disable();
				this.arrow.visible = false;
				Model.time = 0;
			}
			this._tickCount = 0;
			this._paused = false;
			createjs.Ticker.addEventListener("tick", this._tick);
			// Ticker.add({
				// delay:60,
				// callback:this._tick
			// });
		},
		pause:function(){
			this._paused = true;
			createjs.Ticker.removeEventListener("tick", this._tick);
			// Ticker.remove(this._tick);
		},
		_tick:function(){
			for(var k = 0; k < 5; k++){
				if(this._paused){
					return;
				}
				
				var Vx = this.data("Vx"), Vy = this.data("Vy"), boundary = this.data("boundary");
				var p = Model.nextPoint(Vx, Vy), i = 0, hit = false, e;
				p.x = Model.pointToPixel(p.x), p.y = Model.pointToPixel(p.y);
				var _p = {
					x:this.ball.x + p.x,
					y:this.ball.y - p.y,
				}
				Model.time += Model.step;
				this.ball.x += p.x;
				this.ball.y -= p.y;
				
				this.data("Vy", Vy + Model.g * Model.step);
				if(this.data("Vy") < this.data("startVy")){
					this.pause();
					this.data("Vy", this.data("startVy") * 1);
					Model.time = (2 * this.data("startVy") / Model.g).toFixed(2) * 1;
					e = new createjs.Event("hit");
					e.currentTarget = this;
					e.data = {
						point:{
							x:this.ball.x,
							y:this.ball.y,
						}
					}
					if(this.ball.x > this.data("groundStartX")){
						e.data.hit = 0;
					} else {
						e.data.hit = 1;
					}
					this.dispatchEvent(e);
					this.ball.visible = false;
				}
				this.dispatchEvent("onUpdate");
			}
		}
	};
	Object.defineProperty(Class.prototype, "velocity", {
		get:function(){
			return this.arrow.magnitude;
		},
		set:function(value){
			this.arrow.magnitude = value;
		}
	});
	Object.defineProperty(Class.prototype, "angle", {
		get:function(){
			return this.arrow.angle;
		},
		set:function(value){
			this.arrow.angle = value;
		}
	});
	createjs.EventDispatcher.initialize(Class.prototype);
	
	return Class;
})();

var Model = {
	_data:null,
	g:-9.8,
	unit:3.12,
	step:0.01,
	startY:187,
	baseY:596
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