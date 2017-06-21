var Lab = (function () {
	function Activity() {
		createjs.Container.call(this);
		this.unit = 200;
		this.timeStep = 0.0025;
		this._enterFrame = this._enterFrame.bind(this);
		this._play = this._play.bind(this);
		this._pause = this._pause.bind(this);
		this.reset = this.reset.bind(this);
		this._delay = 0.2;
		this._multiplier = 0.9;
	}

	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function () {
		var scope = this;

		this.layout.resetButton.enable().addEventListener("click", this.reset);
		this.layout.playButton.enable().addEventListener("click", this._play);
		this.layout.pauseButton.enable().addEventListener("click", this._pause);

		this.layout.stepperT.addEventListener("valueChange", function(e){
			scope.layout.timeInterval.text = e.currentTarget.value.toFixed(1);
			scope._delay = e.currentTarget.value;
		});
		
		// this.layout.stepperX.addEventListener("valueChange", function(e){
		// 	scope.layout.velocityX.text = e.currentTarget.value.toFixed(1);
		// });
		
		this.layout.stepperY.addEventListener("valueChange", function(e){
			scope.layout.velocityY.text = e.currentTarget.value.toFixed(1);
		});

		this.allBalls = ["redBall", "greenBall"/*, "greendBall"*/];
		this.allBalls.forEach(function(name, i){
			this.allBalls[i] = new BallClass({
				displayObject:this.layout[name],
				timeStep:this.timeStep,
				unit:this.unit
			});
			this.allBalls[i].id = i;
		}, this);
		this.allBalls[0].isPrime = true;

		this.leftHand = new HandClass({
			displayObject:this.layout.leftHand,
			direction:1,
			leftThreshold:22,
			rightThreshold:17,
			_multiplier:this._multiplier,
		});
		this.leftHand.addEventListener("ballThrown", function(e){
			if(e.data.ball){
				e.data.ball.Vy = -scope.layout.stepperY.value;
				e.data.ball.Vx = -e.data.ball.Vx;
				var ball = scope._nextBall(e.data.ball.id);
				if(ball){
					ball.visible = true;
					scope.leftHand.catch(ball);
				}
			}
		});

		this.rightHand = new HandClass({
			displayObject:this.layout.rightHand,
			direction:-1,
			leftThreshold:17,
			rightThreshold:25,
			// duration:200,
			_multiplier:this._multiplier,
		});
		this.rightHand.addEventListener("ballThrown", function(e){
			if(e.data.ball){
				e.data.ball.Vy = -scope.layout.stepperY.value;
				e.data.ball.Vx = -e.data.ball.Vx;
			}
		});
		this.reset();
	}

	Activity.prototype._checkBallInHand = function (ball, hand) {
		if(hand.ball){
			if(hand.ball.isPrime){
				ball.inHand = false;
				ball.Vx = 0;
				ball.Vy = 0;
			} else {
				hand.ball.inHand = false;
				hand.ball.Vx = 0;
				hand.ball.Vy = 0;
				return true;
			}
		}
	}

	Activity.prototype._enterFrame = function () {
		for(var r = 0; r < 20 * this._multiplier; r++){
			this.time = (this.time + this.timeStep).toFixed(5) * 1;

			// start the simulation with throwing the first ball
			if(this.time == 0){
				this.leftHand.catchAndThrow(this.allBalls[0]);
			}
			//
			// console.log(Number((this.time % this._delay).toFixed(4)))
			if(this.leftHand.ball){
				if(this._delay < 1 || true){
					var t = this.time * 10;
					var d = this._delay * 10;
					if(d == 2 ){
						// d = 3;
					}
					if(d == 10 ){
						// d = 9;
					}
					if(Number((t % d).toFixed(4)) == 0){
						console.log(this.time, this.leftHand.ball.displayObject.name, "throw")
						this.leftHand.catchAndThrow(this.leftHand.ball);
					}
				}
			}
			
			this.allBalls.forEach(function(ball){
				if(!ball.inHand && !ball.outOfRange){
					ball.propogate();
					if(ball.Vy > 0 && !ball.fallDown){
						if(this.leftHand.catchCondition(ball)){
							if(this.leftHand.ball && this.leftHand.ball != ball){
								if(ball.isPrime){
									this.leftHand.ball.inHand = false;
									this.leftHand.ball.fallDown = true;
								}
								if(this.leftHand.ball.isPrime){
									return;
								}
							}
							this.leftHand.catch(ball);
							console.log(this.time, ball.displayObject.name, "catch");
						}
					}
				}

				// if(this.time == Number((ball.startTime + 0.15).toFixed(5)) && !ball.started){
				// 	// if(this._checkBallInHand(ball, ball.hand)){
				// 	// 	ball.hand.catchAndThrow(ball);
				// 	// 	ball.started = true;
				// 	// }
				// 	console.log(ball.id)
				// 	ball.visible = true;
				// 	if(ball.hand.ball && ball.hand.ball.isPrime){
				// 		ball.inHand = false;
				// 		// ball.Vx = 0;
				// 		// ball.Vy = 0;
				// 		ball.fallDown = true;
				// 		return false;
				// 	}
				// 	ball.hand.catchAndThrow(ball);
				// 	ball.started = true;
				// 	if(this.allBalls[ball.id + 1]){
				// 		this.allBalls[ball.id + 1].visible = true;
				// 	}
					
				// }
				// if(!ball.inHand && !ball.outOfRange){
				// 	ball.propogate();
				// 	if(ball.Vy > 0 && !ball.fallDown){
				// 		if(this.leftHand.catchCondition(ball)){
				// 			if(this.leftHand.ball){
				// 				if(this.leftHand.ball.isPrime){
				// 					return;
				// 				}
				// 				if(ball.isPrime || true){
				// 					// this.leftHand.ball.Vy = 0;
				// 					// this.leftHand.ball.Vx = 0;
				// 					this.leftHand.ball.fallDown = true;
				// 					this.leftHand.ball.inHand = false;
				// 					ball.hand = this.leftHand;
				// 					this.leftHand.catchAndThrow(ball);
									
				// 					return false;
				// 				}
				// 			}
							
				// 			for(var k = ball.id; k < this.allBalls.length; k++){
				// 				if(!this.allBalls[k].started){
				// 					this.allBalls[k].started = true;
				// 					this.allBalls[k].visible = true;
				// 					this.allBalls[k].fallDown = true;
				// 					this.allBalls[k].inHand = false;
				// 				}
				// 			}
				// 			ball.hand = this.leftHand;
				// 			this.leftHand.catchAndThrow(ball);
				// 		} else if(this.rightHand.catchCondition(ball)){
				// 			if(this.rightHand.ball){
				// 				if(this.rightHand.ball.isPrime){
				// 					return;
				// 				}
				// 				if(ball.isPrime || true){
				// 					// this.rightHand.ball.Vy = 0;
				// 					// this.rightHand.ball.Vx = 0;
				// 					this.rightHand.ball.fallDown = true;
				// 					this.rightHand.ball.inHand = false;
				// 					ball.hand = this.rightHand;
				// 					this.rightHand.catchAndThrow(ball);
				// 					return false;
				// 				}
				// 			}
				// 			ball.hand = this.rightHand;
				// 			this.rightHand.catchAndThrow(ball);
				// 		}
						
				// 	}
				// }
			}, this);
		}
		this.layout.time.text = this.time.toFixed(2) + " s";
	}

	Activity.prototype._nextBall = function (id) {
		for(var i = id + 1; i < this.allBalls.length; i++){
			if(this.allBalls[i] && !this.allBalls[i].started){
				this.allBalls[i].started = true;
				return this.allBalls[i];
			}
		}
	}

	Activity.prototype._play = function () {
		var startTime = 0;
		this.layout.velocityX.text = "0.0";
		if(!this.started){
			this.started = true;
			this.allBalls.forEach(function(ball, i){
				ball.startTime = startTime;
				ball.hand = this.leftHand;
				ball.Vx = 0//this.layout.stepperX.value;
				ball.Vy = -this.layout.stepperY.value;
				ball.inHand = true;
				ball.started = false;
				ball.visible = i == 0;
				// console.log(ball.startTime + 0.15)
				startTime += this._delay;
			}, this);
			
			// this.layout.stepperX.disable();
			this.layout.stepperY.disable();
			this.layout.stepperT.disable();
		}
		this.layout.playButton.visible = false;
		this.layout.pauseButton.visible = true;
		if(/*this.layout.stepperX.value ||*/ this.layout.stepperY.value){
			createjs.Ticker.addEventListener("tick", this._enterFrame);
		}
		createjs.Tween.resumeAllTweens();
	}

	Activity.prototype._pause = function () {
		this.layout.playButton.visible = true;
		this.layout.pauseButton.visible = false;
		createjs.Ticker.removeEventListener("tick", this._enterFrame);
		createjs.Tween.pauseAllTweens();
	}

	Activity.prototype.reset = function (e) {
		var scope = this;
		if(e && e.type == "click"){
			setTimeout(function(){
				scope.reset();
			}, 100)
		}
		
		this.leftHand.reset();
		this.rightHand.reset();
		this._pause();
		this.time = -this.timeStep;
		this.allBalls.forEach(function(ball, i){
			ball.reset();
		});

		this.layout.time.text = "0.0 s";
		// this.layout.stepperX.enable();
		this.layout.stepperY.enable();
		this.layout.stepperT.enable();
		this.layout.playButton.visible = true;
		this.layout.pauseButton.visible = false;
		this.started = false;

		this.layout.velocityX.text = "---";
	}

	return Activity;
})();
var pausedTweenObjs = [];

createjs.Tween.pauseAllTweens = function() 
{
    var i = 0, 
        tweenObjs = createjs.Tween._tweens.slice().reverse(), 
        tweenObj;

    for ( ; tweenObj = tweenObjs[i++]; )
    {
        pausedTweenObjs.push(tweenObj);
        tweenObj.setPaused(true);
    }
};

createjs.Tween.resumeAllTweens = function() 
{
    var i = 0, tweenObj;

    for ( ; tweenObj = pausedTweenObjs[i++]; )
        tweenObj.setPaused(false);

    pausedTweenObjs.length = 0;
};

var HandClass = (function(){
	var Class = function(o){
		this.displayObject = o.displayObject;
		this.direction = o.direction;
		this.duration = o.duration;
		this._multiplier = o._multiplier;
		this.defaults = {
			x:o.displayObject.x,
			y:o.displayObject.y
		}
		this.leftThreshold = o.leftThreshold;
		this.rightThreshold = o.rightThreshold;

		this.offset = 10;

		this._updateBall = this._updateBall.bind(this);
	}
	
	Class.prototype.constructor = Class;

	Class.prototype.reset = function(){
		this.x = this.defaults.x;
		this.y = this.defaults.y;
		this.ball = null;
		createjs.Tween.get(this.displayObject, {override:true});
	};

	Class.prototype.catch = function(ball){
		this.ball = ball;
		ball.inHand = true;
		ball.hand = this;
		this._updateBall();
	}

	Class.prototype.catchCondition = function(ball){
		if(ball.y >= this.y - 5 && ball.y <= this.y){
			if((ball.x >= this.x - this.leftThreshold) && (ball.x <= this.x + this.rightThreshold)){
				return true;
			}
		}
	};
	
	Class.prototype.catchAndThrow = function(ball){
		var scope = this;
		this.catched = true;
		this.ball = ball;
		ball.inHand = true;
		var d = (this.duration || 120) / this._multiplier;
		
		createjs.Tween.get(this.displayObject, {override:true}).to({x:this.defaults.x}, 0).to({x:this.defaults.x + this.offset * this.direction}, d);
		createjs.Tween.get(this.displayObject).to({y:this.defaults.y + this.offset / 2}, d/2, createjs.Ease.circOut).to({y:this.defaults.y}, d / 2, createjs.Ease.circIn).call(function(){
			scope.catched = false;
			scope._updateBall();
			
			var e = new createjs.Event("ballThrown");
			var ball = scope.ball;
			
			if(scope.ball)
				scope.ball.inHand = false;
			scope.ball = null;
			e.data = {
				ball:ball
			}
			scope.reset();
			scope.dispatchEvent(e);
		}).addEventListener("change", this._updateBall);
	}
	
	Class.prototype._updateBall = function(){
		if(this.ball){
			this.ball.y = this.y - 3.5;
			this.ball.x = this.x /*- 3 * this.direction*/;
		}
	}
	
	Object.defineProperty(Class.prototype, "x", {
		get:function(){
			return this.displayObject.x;
		},
		set:function(value){
			this.displayObject.x = value;
		}
	});

	Object.defineProperty(Class.prototype, "y", {
		get:function(){
			return this.displayObject.y;
		},
		set:function(value){
			this.displayObject.y = value;
		}
	});

	createjs.EventDispatcher.initialize(Class.prototype);

	return Class;
})();

var BallClass = (function(){
	var Class = function(o){
		this.displayObject = o.displayObject;
		this.timeStep = o.timeStep;
		this.unit = o.unit;
		this.defaults = {
			x:o.displayObject.x,
			y:o.displayObject.y
		}
		this._velocity = new Vector();
		this._gravity = +9.8;
	}
	
	Class.prototype.reset = function(){
		this.x = this.defaults.x;
		this.y = this.defaults.y;
		this.outOfRange = false;
		this.fallDown = false;
	}

	Class.prototype.propogate = function(){
		// this.Vx = this.Vx + this.Vx * this.timeStep;
		this.Vy = this.Vy + /*this.Vy * this.timeStep + this.timeStep **/ this.timeStep * this._gravity;
		this.x += this.unit * this.Vx * this.timeStep;
		this.y += this.unit * this.Vy * this.timeStep;
		if(this.y > 900){
			this.outOfRange = true;
		}
	}

	Object.defineProperty(Class.prototype, "fallDown", {
		get:function(){
			return this._fallDown;
		},
		set:function(value){
			this._fallDown = value;
			this.Vx = 0;
			this.Vy = 0;
		}
	});

	Object.defineProperty(Class.prototype, "visible", {
		get:function(){
			return this.displayObject.visible;
		},
		set:function(value){
			this.displayObject.visible = value;
		}
	});

	Object.defineProperty(Class.prototype, "Vx", {
		get:function(){
			return this._velocity.x;
		},
		set:function(value){
			this._velocity.x = value;
		}
	});

	Object.defineProperty(Class.prototype, "Vy", {
		get:function(){
			return this._velocity.y;
		},
		set:function(value){
			this._velocity.y = value;
		}
	});

	Object.defineProperty(Class.prototype, "x", {
		get:function(){
			return this.displayObject.x;
		},
		set:function(value){
			this.displayObject.x = value;
		}
	});

	Object.defineProperty(Class.prototype, "y", {
		get:function(){
			return this.displayObject.y;
		},
		set:function(value){
			this.displayObject.y = value;
		}
	});

	return Class;
})();