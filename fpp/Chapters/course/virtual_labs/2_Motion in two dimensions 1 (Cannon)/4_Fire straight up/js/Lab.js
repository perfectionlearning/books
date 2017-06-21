var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		this._cacheData = {
			towerman:[0, -10, 500, 500, 2],
			windowAnim:[0, 0, 200, 800],
			enemyrun:[0,0,1100, 500],
		}
		
		this._enemyMaskRect = [200, 0, 800, 800]
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		var scope = this;
		
		this._fireClicked = fireClicked.bind(this);
		this._pauseClicked = pauseClicked.bind(this);
		this._playClicked = playClicked.bind(this);
		this._checkBallHeight = checkBallHeight.bind(this);
		this.reset = this.reset.bind(this);
		
		// this.layout.fireButton.addEventListener("click", this._fireClicked);
		this.layout.pauseButton.addEventListener("click", this._pauseClicked);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);

		// this.layout.playAgainBtn.addEventListener("click", this.reset);
		// this.layout.playAgainBtn.cursor = "pointer";
		
		this.layout.stepper.addEventListener("valueChange", function(e){
			scope.layout.speedText.text = e.currentTarget.value.toFixed(1);
			scope.cannon.velocity = e.currentTarget.value;
		});
		// this._extraMCs = [];
		createPlayers.call(this);
		this.reset();
		
		var shape = new createjs.Shape();
		shape.graphics.clear().beginFill("#fff").rect.apply(shape.graphics, this._enemyMaskRect).endFill();
		this.layout.enemyrun.mask = shape;
	}
	
	Activity.prototype.reset = function(){
		this.cannon.data("Vy", this.cannon.data("defaultVy"));
		
		
		nextTurn.call(this);
		
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
		this.layout.towerman.gotoAndStop(0);
		this.layout.towerman.cache.apply(this.layout.towerman, this._cacheData.towerman);
		
		this.layout.enemydie.visible = false;
		this.layout.enemydie.gotoAndStop(0);
		this.layout.enemyrun.visible = true;
		this.layout.enemyrun.x = 920;
		this.layout.enemyrun.gotoAndStop(this.layout.enemyrun.totalFrames - 1);
		this.layout.windowAnim.gotoAndStop(0);
		this.layout.windowAnim.cache.apply(this.layout.windowAnim, this._cacheData.windowAnim);
		this.layout.door.gotoAndStop(0);
		Model.shootStep = 0;
		
		this.cannon2.reset();
		// this.paused = false;
		this.layout.enemyrun.removeAllEventListeners("tick");
		this.layout.enemydie.removeAllEventListeners("tick");
		this.layout.towerman.removeAllEventListeners("tick");
		this.layout.door.removeAllEventListeners("tick");
		this.layout.windowAnim.removeAllEventListeners("tick");
		cacheSoldiers.call(this);
		this.ballReached = false;
		
		this.layout.timeText.text = "0.00 s";
		this.layout.txtVy.text = this.layout.txtAy.text = this.layout.txtAx.text = this.layout.txtVx.text = "---";
		
		this.layout["backupCannon1"].visible = true;
		this.layout["backupCannon2"].visible = true;
		this.layout["backupCannon3"].visible = true;
		
		this.layout.playButton.visible = true;
		this.layout.pauseButton.visible = false;
		
		this._resetState = true;
	}
	
	function cacheSoldiers(){
		this.layout.enemyrun.cache.apply(this.layout.enemyrun, this._cacheData.enemyrun);
	}
	
	function playClicked(e){
		if(this._resetState){
			this._resetState = false;this._resetState = false;
			this._fireClicked();
		} else {
			if(this.ballReached){
				this.cannon2.fire();
			} else {
				this.cannon.fire();
			}
		}
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
		
		this.layout.txtAx.text = this.layout.txtVx.text = "0.0";
		// this.paused = false;
		
		// this.layout.enemyrun.play();
	}
	
	function pauseClicked(e){
		this.layout.pauseButton.visible = false;
		this.layout.playButton.enable().visible = true;
		this.cannon.pause();
		this.cannon2.pause();
		// this.paused = true;
		
		this.layout.enemyrun.stop();
	}
	
	function fireClicked(e){
		Model.shootStep++;
		this.layout["backupCannon" + Model.shootStep].visible = false;
		// this.layout.fireButton.disable();
		this.layout.stepper.disable();
		this.layout.pauseButton.enable();
		this.cannon.fire(0, this.layout.stepper.value);
		var mc = this.layout.smoke1;
		this.layout.smoke1.addEventListener("tick", function(){
			if(mc.currentFrame >= mc.totalFrames - 1){
				mc.removeAllEventListeners("tick");
				mc.paused = true;
				mc.visible = false;
			}
		});
		this.layout.smoke1.gotoAndPlay(0);
		this.layout.smoke1.visible = true;
	}
	
	function nextTurn(){
		var scope = this;
		
		this.layout.pauseButton.disable();
		// this.cannon = this.cannon;
		this.cannon.enable();
		this.cannon.reset();
		// Model.data = Lab.data["player" + (this.playerIndex + 1)];
		// this.layout.fireButton.enable();
		this.layout.stepper.enable();
		this.cannon.velocity = this.layout.stepper.value;
		// this.layout.speedText.text = this.cannon.velocity.toFixed(1);
		this.layout.playButton.visible = true;
		this.layout.pauseButton.visible = false;
		this._resetState = true;
	}
	
	function createPlayers(){
		var scope = this,
			i, j, 
			p1Data = Lab.data.cannon, 
			p2Data = Lab.data.player2, 
			stepper = this.layout.stepper;
			
			
		if(BrowserDetect.any()){
			this.layout.arrow1.scaleX = this.layout.arrow1.scaleY = 1;
			// this.layout.arrow1.y--;
			// this.layout.arrow2.y--;
		}
		
		var a = new Slider(this.layout.arrow1, p1Data.draggableMin, p1Data.draggableMax, stepper._min, stepper._max, this.layout.arrow1Line, {direction:"left",lineWidth:BrowserDetect.any() ? 4 : 2}, "y");
		a.reverse = true;
		this.cannon = new Cannon(a, this.layout.canonBall1);
		
		// a = new Slider(this.layout.arrow1, p1Data.draggableMin, p1Data.draggableMax, stepper._min, stepper._max, this.layout.arrow1Line, {direction:"left",lineWidth:2}, "y");
		// a.reverse = true;
		this.cannon2 = new Cannon(undefined, this.layout.canonBall2);
		
		for(i in Lab.data){
			for(j in Lab.data[i]){
				this[i].data(j, Lab.data[i][j]);
			}
		}
		this.cannon.reset().addEventListener("velocityUpdated", function(e){
			scope.layout.stepper.value = e.currentTarget.velocity.toFixed(1) * 1;
			scope.layout.speedText.text = e.currentTarget.velocity.toFixed(1);
		});
		this.cannon.addEventListener("onUpdate", this._checkBallHeight);
		
		this._hit = hit.bind(this);
		this._enemyHit = enemyHit.bind(this);
		this.cannon.addEventListener("hit", this._hit);
		this.cannon2.addEventListener("hit", this._enemyHit);
	}

	function checkBallHeight(){
		var mc, scope = this;
		var velocities = [20, 13, 7];
		var caught = false;
		// console.log(Math.abs(this.cannon.data("Vy")))
		if(Math.abs(this.cannon.ballHeight - Model.targetHeight) <= 0.7/*  && Math.abs(this.cannon.data("Vy")) < 0.2 */){
			if(this.cannon.data("Vy") <= 0.5 && this.cannon.data("Vy") >= -4.25){
			console.log(Math.abs(this.cannon.ballHeight - Model.targetHeight))
			console.log(this.cannon.data("Vy"))
				caught = true;
				// console.log(this.cannon.data("Vy"))
				this.layout.pauseButton.disable();
				this.cannon.pause();
				this.cannon.ball.visible = false;
				mc = this.layout.towerman;
				mc.addEventListener("tick", function(){
					if(mc.currentFrame >= mc.totalFrames - 1){
						mc.removeAllEventListeners("tick");
						mc.paused = true;
						scope.cannon2.fire(velocities[Model.shootStep - 1], 0);
						var mc2 = scope.layout.smoke2;
						scope.layout.smoke2.addEventListener("tick", function(){
							if(mc2.currentFrame >= mc2.totalFrames - 1){
								mc2.removeAllEventListeners("tick");
								mc2.paused = true;
								mc2.visible = false;
							}
						});
						scope.layout.smoke2.gotoAndPlay(0);
						scope.layout.smoke2.visible = true;
						scope.ballReached = true;
					}
				});
				mc.uncache();
				mc.gotoAndPlay(0);
			}
		}
		this.layout.txtAy.text = Model.g.toFixed(2);
		this.layout.txtVy.text = Math.max(-1 * this.layout.stepper.value, this.cannon.data("Vy")).toFixed(1);
		if(this.cannon.data("Vy") >= -1 * this.layout.stepper.value){
			this.layout.txtVy.text = Math.max(-1 * this.layout.stepper.value, this.cannon.data("Vy")).toFixed(1);
			this.layout.timeText.text = Model.time.toFixed(2) + " s";
			// console.log(Model.time)
		} else {
			// console.log(this.layout.timeText.text)
			this.layout.timeText.text = Math.abs(2 * this.layout.stepper.value / Model.g).toFixed(2) + " s";
		}
		if(caught){
			this.layout.timeText.text = Math.abs(this.layout.stepper.value / Model.g).toFixed(2) + " s";
			// console.log(this.layout.timeText.text)
			this.layout.txtVy.text = this.layout.txtAy.text = this.layout.txtAx.text = this.layout.txtVx.text = "---";
		}
	}
	
	function enemyHit(e){
		var mc, scope = this;
		switch (e.data.hit){
			case Model.GROUND:
				this.layout.enemyrun.visible = false;
				this.layout.enemydie.visible = true;
				mc = this.layout.enemydie;
				mc.x = this.layout.enemyrun.x;
				mc.addEventListener("tick", function(){
					if(mc.currentFrame >= mc.totalFrames - 1){
						mc.removeAllEventListeners("tick");
						mc.paused = true;
					}
				});
				mc.gotoAndPlay(0);
			break;
		}
	}
	
	function hit(e){
		var mc, scope = this;
		switch (e.data.hit){
			case Model.GROUND:
				bringEnemyCloser.call(this);
				this.layout.pauseButton.disable();
			break;
		}
	}
	
	function bringEnemyCloser(){
		var scope = this, breaked = false;
		var mc = this.layout.enemyrun;
		mc.uncache();
		var count = 0, total = 2;
		mc.addEventListener("tick", function(){
			if(mc.paused == false){
				if(count < total - 1 && mc.currentFrame == 26){
					count++;
					mc.gotoAndPlay(6);
				}
				if(mc.currentFrame >= mc.totalFrames - 1){
					count++;
					if(count >= total){
						mc.removeAllEventListeners("tick");
						mc.paused = true;
						cacheSoldiers.call(scope);
						if(Model.shootStep != Model.totalStep){
							nextTurn.call(scope);
						} else {
							windowAnimation.call(scope);
						}
					}
				}
				mc.x -= 4;
				if(mc.x <= 384 && breaked == false){
					total++;
					breaked = true;
					showEndAnimation.call(scope);
				}
			}
		});
		mc.gotoAndPlay(0);
	}
	
	function showEndAnimation(){
		var scope = this, breaked = false;
		var mc = this.layout.door;
		var count = 0, total = 1;
		mc.addEventListener("tick", function(){
			if(mc.currentFrame >= mc.totalFrames - 1){
				count++;
				if(count >= total){
					mc.removeAllEventListeners("tick");
					mc.paused = true;
				}
			}
		});
		mc.gotoAndPlay(0);
	}
	
	function windowAnimation(){
		var mc = this.layout.windowAnim;
		mc.addEventListener("tick", function(){
			if(mc.currentFrame >= mc.totalFrames - 1){
				mc.removeAllEventListeners("tick");
				mc.paused = true;
			}
		});
		mc.uncache();
		mc.gotoAndPlay(0);
	}
	
	return Activity;
})();

Lab.data = {
	cannon:{
		draggableMin:155,
		draggableMax:572,
		direction:1,
		defaultVy:5,
		startX:98,
		boundary:[
			[{x:25 ,y:680}, {x:155,y:680}]
		]
	},
	cannon2:{
		draggableMin:155,
		draggableMax:572,
		direction:1,
		defaultVy:5,
		startX:297,
		startY:94,
		boundary:[
			[{x:307 ,y:585}, {x:1000,y:585}]
		]
	}
}

var Cannon = (function(){
	function Class(arrow, ball){
		this._data = {};
		this.arrow = arrow;
		this.ball = ball;

		this.disable();
		this._tick = this._tick.bind(this);
		this._onDrag = this._onDrag.bind(this);
		if(this.arrow){
			this.arrow.addEventListener("drag", this._onDrag);
		}
		
	}
	
	Class.prototype = {
		constructor:Class,
		reset:function(){
			this.ball.visible = false;
			this.ball.x = this._data.startX;
			if(this._data.startY){
				this.ball.y = this._data.startY;
			} else {
				this.ball.y = Model.startY;
			}
		
			// this.arrow.value = this._data.Vy;
			
			this.pause();
			
			return this;
		},
		enable:function(){
			this.arrow.visible = true;
			this.arrow.enable();
			
			return this;
		},
		disable:function(){
			if(this.arrow){
				this.arrow.visible = false;
				this.arrow.disable();
			}
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
		_onDrag:function(e){
			var event = new createjs.Event("velocityUpdated");
			// event.target = this;
			// event.data = {
				// velocity:e.currentTarget.value
			// };
			
			this.dispatchEvent(event);
		},
		fire:function(Vx, Vy){
			if(arguments.length > 0){
				Model.time = 0;
				this.data("Vx", Vx || 0);
				this.data("Vy", Vy || 0);
				this.ball.visible = true;
				if(this.arrow){
					this.arrow.disable().visible = false;
				}
			}
			this._tickCount = 0;
			createjs.Ticker.addEventListener("tick", this._tick);
			// Ticker.add({
				// fps:30,
				// callback:this._tick
			// });
			this._pause = false;
		},
		pause:function(){
			createjs.Ticker.removeEventListener("tick", this._tick);
			// Ticker.remove(this._tick);
			this._pause = true;
		},
		_tick:function(bool){
			// console.log(bool)
			var scope = this;
			var Vx = this.data("Vx"), Vy = this.data("Vy"), boundary = this.data("boundary");
			var p = Model.nextPoint(Vx, Vy), i = 0, hit = false, e;
			p.x = Model.pointToPixel(p.x), p.y = Model.pointToPixel(p.y);
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
			
			this.ball.x = _p.x// * this.data("direction") //+ this.data("startX");
			this.ball.y = _p.y //+ this.data("startY");
			
			this.data("Vy", Vy + Model.g * Model.step);
			this.ballHeight = Model.pixelToPoint(Model.baseY - this.ball.y);
			// console.log(this.ballHeight)
			this.dispatchEvent("onUpdate");
			
			if(!bool && !this._pause){
				// for(var i = 0; i < 5 && !this._pause ; i++){
					scope._tick(true);
				// }
			}
			// if(this._tickCount >= 200){
				// this.pause();
			// }
			// this._tickCount++;
		}
	};
	Object.defineProperty(Class.prototype, "velocity", {
		get:function(){
			return this.arrow ? this.arrow.value : 0;
		},
		set:function(value){
			if(this.arrow){
				this.arrow.value = value;
			}
		}
	});
	createjs.EventDispatcher.initialize(Class.prototype);
	
	return Class;
})();

var Model = {
	_data:null,
	g:-9.8,
	unit:9.35,
	step:0.05,
	startY:572,
	baseY:690,
	totalStep:3
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

// Model.calcVx = function(distance){
	// return distance / Math.sqrt(2 * Model.height / Math.abs(Model.g));
// }

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


// Model.heightInPixel = Model.baseY - Model.startY;
Model.targetHeight = Model.pixelToPoint(Model.baseY - 102);

Model.GROUND = 0;