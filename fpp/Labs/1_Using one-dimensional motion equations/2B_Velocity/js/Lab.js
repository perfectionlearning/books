var Lab = (function () {
	var scope;
	function Activity() {
		createjs.Container.call(this);
	}

	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function () {
		scope = this;
		scope.velocity = 0;
		scope.time = 0;

		this._fireClicked = fireClicked.bind(this);
		this._pauseClicked = pauseClicked.bind(this);
		this._playClicked = playClicked.bind(this);
		this.reset = this.reset.bind(this);
		this.updateStage = updateStage.bind(this);

		this.layout.fireButton.addEventListener("click", this._fireClicked);
		this.layout.pauseButton.addEventListener("click", this._pauseClicked);
		this.layout.playButton.addEventListener("click", this._playClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);

		Model.vectorS = new Vector(0, 0);
		Model.vectorM = new Vector(0, 0);

		var ballData = Model.Ball;
		var a = this.a = new Hit(this.layout.hitbutton, this.layout.hitrod, this.layout.ball, ballData.draggableMin, ballData.draggableMax, ballData.draggableMin1, ballData.draggableMax1, ballData.minStep, ballData.maxStep);
		this.a.enable();

		var ball = this.ball = new Ball(this.layout.ball, Model.Ball);

		scope.layout.fireButton.enable();

		this.a.addEventListener("drag", drag);

		this.a.addEventListener("animComplete", animComplete);

		this.ball.addEventListener("updateTimer", updateTimer);
		
		this.ball.addEventListener("updateScore", updateScore);
		
		this.ball.addEventListener("updatePosition", updatePosition);
		
		this.ball.addEventListener("updateStage", updateStage);

		this.ball.addEventListener("openStopper", openStopper);
		
		scope.layout.circle10.gotoAndStop(3);
		scope.layout.circle20.gotoAndStop(3);
		scope.layout.circle30.gotoAndStop(3);
		scope.layout.circle50.gotoAndStop(3);
	}

	Activity.prototype.reset = function () {
	// 	console.log(" in reset")
		Model.velocityX = 0;
		Model.velocityY = 0;
		Model.score = 0;
		Model.time = 0;
		Model.shots = 5;
		scope.layout.info.text = "Slots open at time = 2 Sec.";
		scope.layout.scoreValue.text = Model.score;
		scope.layout.shotsValue.text = Model.shots;
		this.layout.ball.scaleX = 1;
		this.layout.ball.scaleY = 1;
		scope.layout.stopper.scaleX = 0;
		scope.a.enable();
		scope.layout.ball.visible = true;
		this.layout.circle10.gotoAndStop(3);
		this.layout.circle20.gotoAndStop(3);
		this.layout.circle30.gotoAndStop(3);
		this.layout.circle50.gotoAndStop(3);
		this.layout.fireButton.enable();
		this.layout.pauseButton.disable();
		this.layout.pauseButton.visible = true;
		Model.stopper = false;
		this.layout.playButton.visible = false;
		this.layout.speedText.text = (0).toFixed(2)  + " m/s";
		this.layout.time.text = (0).toFixed(2);
		this.layout.PositionValue.text = (0).toFixed(2) + " m";
		scope.velocity = 0;
		this.a.reset();
		this.ball.reset();
		clearTimeout(Model.timer);
	}

	function updateStage() {
		scope.layout.ball.visible = true;
		// console.log("updateStage");
		clearTimeout(Model.timer);
		scope.layout.scoreValue.text = Model.score;
		scope.layout.shotsValue.text = Model.shots;
		scope.layout.ball.scaleX = 1;
		scope.layout.ball.scaleY = 1;
		scope.layout.stopper.scaleX = 0;
		scope.a.enable();
		scope.layout.fireButton.enable();
		scope.layout.pauseButton.disable();
		scope.layout.stopper.scaleX = 0;
		scope.layout.pauseButton.visible = true;
		scope.layout.playButton.visible = false;
		Model.stopper = false;
		Model.velocityX = 0;
		Model.velocityY = 0;
		Model.currentSlot = -1;
		scope.velocity = 0;
		scope.layout.time.text = (0).toFixed(2);
		scope.layout.PositionValue.text = (0).toFixed(2) + " m";
		scope.layout.speedText.text = (0).toFixed(2)  + " m/s";
		scope.a.reset();
		scope.ball.reset();
		scope.layout.circle10.gotoAndStop(3);
		scope.layout.circle20.gotoAndStop(3);
		scope.layout.circle30.gotoAndStop(3);
		scope.layout.circle50.gotoAndStop(3);
	}

	function drag() {
		scope.velocity = scope.a.reverse ? (Math.round(-(scope.layout.hitbutton.x - Model.Ball.draggableMin1)/2) * 0.1).toFixed(2) : (Math.round((Model.Ball.draggableMax - scope.layout.hitbutton.x)/2) * 0.1).toFixed(2);
		scope.layout.speedText.text = scope.a.reverse ? (Math.round(-(scope.layout.hitbutton.x - Model.Ball.draggableMin1)/2) * 0.1).toFixed(2) + " m/s" : (Math.round((Model.Ball.draggableMax - scope.layout.hitbutton.x)/2) * 0.1).toFixed(2) + " m/s";
	}

	function animComplete() {
		scope.ball.fire(scope.velocity, 0);
	}

	function updateTimer() {
		scope.layout.time.text = Model.time.toFixed(2)
	}

	function updatePosition() {
		scope.layout.PositionValue.text = ((Model.currentPosition - Model.Ball.startX)/Model.unit).toFixed(2) + " m";
	}
	
	function updateScore() {
			// console.log(scope);
		// console.log("updateScore")
		scope.layout.playButton.disable();
		scope.layout.pauseButton.disable();
		Model.score = Model.currentSlot != -1 ? Model.score + Model.pPointsValue[Model.currentSlot] : Model.score - 10;
		if(Model.currentSlot == -1){
			scope.layout.ball.visible = false;
		}else{
			scope.layout.ball.visible = true;
		}
		Model.currentSlot = -1;
		Model.deflected = false;
		Model.timer = null;
		if (Model.shots == Model.maxShots) {
			scope.layout.fireButton.enable();
						// console.log("----------");
			scope.layout.scoreValue.text = Model.score;
			scope.layout.shotsValue.text = Model.shots;
			scope.a.disable();
			// scope.a._enabled = false;
			// console.log(Model.shots);
			if (Model.score >= 200) {
				scope.layout.info.text = "Game Over. Excellent";
			} else if (Model.score >= 150) {
				scope.layout.info.text = "Game Over. Great Job!";
			} else if (Model.score > 100) {
				scope.layout.info.text = "Game Over. Good";
			} else {
				scope.layout.info.text = "Game Over. Try Again.";
			}
			scope.layout.pauseButton.disable();
			scope.layout.fireButton.disable();
		} else {
			Model.timer = setTimeout(function () {
					scope.updateStage();
						// console.log("----------");
				}, 500);
		}
	}

	function openStopper() {
		animateStopper();

		var mc1 = scope.layout.circle10;
		scope.layout.circle10.addEventListener("tick", function () {
			if (mc1.currentFrame >= mc1.totalFrames - 1) {
				mc1.removeAllEventListeners("tick");
				mc1.paused = true;
			}
		});

		var mc2 = scope.layout.circle20;
		scope.layout.circle10.addEventListener("tick", function () {
			if (mc2.currentFrame >= mc2.totalFrames - 1) {
				mc2.removeAllEventListeners("tick");
				mc2.paused = true;
			}
		});

		var mc3 = scope.layout.circle30;
		scope.layout.circle30.addEventListener("tick", function () {
			if (mc3.currentFrame >= mc3.totalFrames - 1) {
				mc3.removeAllEventListeners("tick");
				mc3.paused = true;
			}
		});

		var mc5 = scope.layout.circle50;
		scope.layout.circle50.addEventListener("tick", function () {
			if (mc5.currentFrame >= mc5.totalFrames - 1) {
				mc5.removeAllEventListeners("tick");
				mc5.paused = true;
			}
		});
		scope.layout.circle10.gotoAndPlay(3);
		scope.layout.circle20.gotoAndPlay(3);
		scope.layout.circle30.gotoAndPlay(3);
		scope.layout.circle50.gotoAndPlay(3);
	}

	function playClicked(e) {
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
		this.ball.play();
	}

	function pauseClicked(e) {
		this.layout.pauseButton.visible = false;
		this.layout.playButton.enable().visible = true;
		this.ball.pause();
	}

	function fireClicked(e) {
		if (Model.shots == Model.maxShots) {
			this.reset();
		} else {
		scope.a.disable();
		Model.time = 0;
		Model.velocityX = scope.layout.speedText.text * 1;
		Model.fireTime = createjs.Ticker.getTime();
		this.layout.fireButton.disable();
		this.layout.pauseButton.enable();
		Model.shots = (Model.shots * 1) - 1;
		this.a.fire(lab.layout.speedText.text * 1);
		}
	}

	function startTimer() {
		Model.currentTime = createjs.Ticker.getTime() - Model.fireTime;
	}

	function animateStopper() {
		scope.layout.stopper.scaleX = 1;
	}
	
	return Activity;
})();

var Model = {
	Ball: {
		draggableMin: sV(16),
		draggableMax: sV(96),
		draggableMin1: sV(147),
		draggableMax1: sV(227),
		minStep: 0,
		maxStep: 4,
		startX: 127.15,
		startY: 396.6
	},
	step: 0.04,
	unit: 264,
	time: 0,
	acceleration: 0,
	pHolesRadiusOuter: 41,
	pHolesRadiusInner: 41,
	nHolesRadiusInner: 21,
	nHolesRadius: 21,
	ballRadius: 18,
	pHolesCenter: [{
			x: 513.5,
			y: 402.5
		}, {
			x: 647,
			y: 402.5
		}, {
			x: 782.5,
			y: 402.5
		}, {
			x: 917,
			y: 402.5
		}
	],
	pPointsValue: [10, 20, 30, 50],
	nHolesCenter: [{
			x: 36.45,
			y: 267.10
		}, {
			x: 984,
			y: 267.10
		}, {
			x: 36.45,
			y: 528.40
		}, {
			x: 984,
			y: 528.40
		}
	],
	stopperPoints: [{
			x: 23,
			y: 299
		}, {
			x: 47,
			y: 395
		}, {
			x: 23,
			y: 499
		}
	],
	offsetBall: {
		regX: 18,
		regY: 18.5
	},
	hitObj: null,
	fireTime: null,
	timer: null,
	vectorMVelocity: {
		x: 0,
		y: 0
	},
	vectorVVelocity: {
		x: 0,
		y: 0
	},
	velocityX: 0,
	velocityY: 0,
	nextVelocityX: 0,
	nextVelocityY: 0,
	vectorS: null,
	vectorM: null,
	first: true,
	velocityChanged: false,
	currentPosition: 0,
	deflected: false,
	stopper: false,
	score: 0,
	shots: 5,
	maxShots: 0,
	currentSlot: -1,
	boundryYMin: 265.5,
	boundryYMax: 535,
	scaleHit: 8,
	currentTime: null
};

Model.pointToPixel = function (value) {
	return value * Model.unit;
}

Model.pixelToPoint = function (value) {
	return value / Model.unit;
}

Model.nextPoint = function (Vx, Vy) {
	var p = {};
	p.x = Vx * Model.step;
	p.y = Vy * Model.step;
	return p;
}

Model.getX = function (p1, p2, y) {
	return ((y - p1.y) * (p2.x - p1.x) + (p1.x * (p2.y - p1.y))) / (p2.y - p1.y);
}

Model.getDistance = function (p1, p2) {
	return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
}

//////////////////////////////////////
// 			Ball Component			//
//////////////////////////////////////
var Ball = (function () {
	var scope;
	function Class(ball, obj) {
		scope = this;
		this.ball = ball;
		// console.log(this.ball)
		this.x = obj.x;
		this.y = obj.y;
		this._tick = this._tick.bind(this);
		this.acceleration = obj.acceleration;
		this.velocity = 0;
	}

	Class.prototype = {
		constructor: Class,
		reset: function () {
			this.ball.x = Model.Ball.startX;
			this.ball.y = Model.Ball.startY;
			this.pause();
			return this;
		},
		fire: function (velocity) {
			Model.velocityX = this.velocity = velocity;
			createjs.Ticker.addEventListener("tick", this._tick);
			this._tickCount = 0;
		},
		pause: function () {
			createjs.Ticker.removeEventListener("tick", this._tick);
		},
		play: function () {
			createjs.Ticker.addEventListener("tick", this._tick);
		},
		_tick: function () {
			//	console.log(this)
			Model.velocityChanged = false;
			var p = Model.nextPoint(Model.velocityX, Model.velocityY);
			// console.log(Model.currentPosition , p.x, Model.time)
			var pPointsValue = Model.pHolesCenter;
			var nPoints = Model.nHolesCenter;
			var i = 0,
			j = 0,
			offsetBall = Model.offsetBall;
			p.x = sV(Model.pointToPixel(p.x)),
			p.y = sV(Model.pointToPixel(p.y));

			var nextP = Model.nextPoint(Model.velocityX, Model.velocityY);
			nextP.x = sV(Model.pointToPixel(nextP.x)),
			nextP.y = sV(Model.pointToPixel(nextP.y));
			
			var nextP1 = Model.nextPoint(Model.velocityX, Model.velocityY);
			nextP1.x = sV(Model.pointToPixel(nextP.x)),
			nextP1.y = sV(Model.pointToPixel(nextP.y));

			//	console.log(this.ball)
			var _p = {
				x: this.ball.x + p.x,
				y: this.ball.y + p.y,
			}
			

			var _nextP = {
				x: this.ball.x + p.x + nextP.x,
				y: this.ball.y + p.y + nextP.y,
			}

			var _nextP1 = {
				x: this.ball.x + p.x + nextP1.x,
				y: this.ball.y + p.y + nextP1.y,
			}
			Model.time += Model.step;

			this.ball.x += p.x;
			this.ball.y += p.y;

			if (this.ball.y < Model.boundryYMin || this.ball.y > Model.boundryYMax) {
				Model.velocityY = 0;
			}
			Model.currentPosition = _p.x;
			if (Model.time < 2.01) {
				this.dispatchEvent("updateTimer");
				this.dispatchEvent("updatePosition");
				if (Model.time > 1.7) {
					if (Model.stopper == false) {
						Model.stopper = true;
						scope.dispatchEvent("openStopper");
					}
				}
			} else {
				if (Model.time > 5.01) {
					if(Model.velocityX == 0 && Model.velocityY == 0)
					{
						// // // console.log("----------");
						this.pause();
						this.dispatchEvent("updatePosition");
						scope.dispatchEvent("updateScore");
					}else if(this.ball.x > 1100 || this.ball.x < 0){
						// console.log(" in else")
						this.pause();
						Model.timer = setTimeout(function () {
							scope.dispatchEvent("updateScore");
						}, 2000);
					}else{
						this.dispatchEvent("updatePosition");
					}
				}else{
					this.dispatchEvent("updatePosition");
				}
				var innerDistance = Model.ballRadius + Model.pHolesRadiusInner;
				var outerDistance = (Model.ballRadius + Model.pHolesRadiusOuter).toFixed(0) * 1;

				// console.log(innerDistance, outerDistance)
				for (; i < pPointsValue.length; i++) {
					var currentDistance = Model.getDistance(pPointsValue[i], _p).toFixed(0) * 1;
					var nextDistance = Model.getDistance(pPointsValue[i], _nextP).toFixed(0) * 1;
					if (currentDistance >= outerDistance && nextDistance <= outerDistance) {
						Model.vectorS = new Vector(0, 0);
						Model.vectorM = new Vector(Model.velocityX, Model.velocityY);
						var current = Model.pHolesCenter[i];
						var n = Vector.subtract(new Vector(current.x, current.y, 0), new Vector(_p.x, _p.y, 0)).divide(currentDistance);
						var p = 2 * (Model.vectorM.dot(n) - Model.vectorS.dot(n)) / (129 + 129);
						Model.vectorM = Model.vectorS.subtract(n.multiply(p * 129));
						Model.velocityX = Model.vectorM.x;
						Model.velocityY = Model.vectorM.y;
						Model.deflected = true;
						Model.velocityChanged = true;
					} else if (currentDistance < outerDistance) {
						//	console.log("innner" +i);
						Model.currentSlot = i;
						this.ball.scaleX = 1;
						this.ball.scaleY = 1;
						this.ball.x = Model.pHolesCenter[i].x;
						this.ball.y = Model.pHolesCenter[i].y;
						this.pause();
						this.dispatchEvent("updateScore");
					}
				}
				if (this.ball.y >= Model.stopperPoints[0].y && this.ball.y <= Model.stopperPoints[2].y) {
					var x = Model.getX(Model.stopperPoints[0], Model.stopperPoints[1], this.ball.y)
						var stopperPoint = {
						x: x,
						y: this.ball.y
					};
					var _distance = Model.getDistance(stopperPoint, _p);
					// console.log(_distance)
					if (Model.ballRadius >= _distance || Model.ballRadius + 10 >= _distance) {
						Model.velocityX = -Model.velocityX;
						Model.velocityY = -2;
						Model.deflected = true;
						Model.velocityChanged = true;
					}
				}
			}
			var innerDistance1 = Model.ballRadius + Model.nHolesRadiusInner;
			for (; j < nPoints.length; j++) {
				var _j = Model.getDistance(nPoints[j], _p).toFixed(0) * 1;
				// console.log(innerDistance,_j)
				if (innerDistance1 >= _j) {
					// console.log("innner" + j + "negative")
					this.pause();
					this.ball.scaleX = 1;
					this.ball.scaleY = 1;
					this.ball.x = Model.nHolesCenter[j].x;
					this.ball.y = Model.nHolesCenter[j].y;
					this.dispatchEvent("updateScore");
				}
			}
			this._tickCount++;
		}
	};

	createjs.EventDispatcher.initialize(Class.prototype);

	return Class;

})();

//////////////////////////////////////
// 			Hit Component			//
//////////////////////////////////////
var Hit = (function () {
	function Class(hit, rod, ball, min, max, minR, maxR, minStep, maxStep) {
		var scope = this;
		this.hit = hit;
		this.rod = rod;
		this.ball = ball;
		this.speed = 0;
		var height = this.hit._hitBounds.width;
		var width = this.hit._hitBounds.width;
		this.scaleFactor = 1.421 / 92;
		this.minX = min;
		this.maxX = max;
		this.minXR = minR;
		this.maxXR = maxR;
		this.reverse = false;
		this.minStep = minStep;
		this.maxStep = maxStep;
		this._drag = this._drag.bind(this);
		this.startPoint = 0;
	}

	Class.prototype = {
		constructor: Class,
		enable: function () {
			this._enabled = true;
			this.hit.addEventListener("pressmove", this._drag);
			this.hit.cursor = "pointer";
			this.rod.addEventListener("pressmove", this._drag);
			this.rod.cursor = "pointer";
			return this;
		},
		disable: function () {
			this._enabled = false;
			this.hit.removeEventListener("pressmove", this._drag);
			this.hit.cursor = "default";
			this.rod.removeEventListener("pressmove", this._drag);
			this.rod.cursor = "default";
			// console.log(" in disable")
			return this;
		},
		_drag: function (e) {
			var p = this.hit.parent.globalToLocal(e.stageX, e.stageY);
			// console.log(e.stageX)
			if (e.stageX <= (this.ball.x - this.ball.regX) * foregroundStage.scaleX) {
				this.reverse = false;
				this.hit.x = Math.max(this.minX, Math.min(p.x, this.maxX));
				// console.log(this.hit.x)
				this.rod.scaleX = (this.scaleFactor * this.hit.x )>1.421 ? 1.421 : this.scaleFactor * this.hit.x;
				this.hit.rotation = 0;
				this.rod.rotation = 0;
				this.rod.x = -3;
			} else if (e.stageX >= (this.ball.x * foregroundStage.scaleX)) {
				// console.log(this.hit.x)
				this.reverse = true;
				this.rod.x = 243;
				this.hit.rotation = 180;
				this.rod.rotation = -180;
				this.hit.x = Math.max(this.minXR, Math.min(p.x, this.maxXR));
				this.rod.scaleX = ((this.rod.x - this.hit.x) * this.scaleFactor) >1.421 ? 1.421 : ((this.rod.x - this.hit.x) * this.scaleFactor);
			}
			// this.hit.x -= this.hit.x % this.step;
			// updateStage();// global function
			this.dispatchEvent("drag");
		},
		pause: function () {
			createjs.Ticker.removeEventListener("tick", this._tick);
			// Ticker.remove(this._tick);
		},
		reset: function () {
			createjs.Ticker.removeEventListener("tick", this._tick);
			this.hit.rotation = 0;
			this.rod.scaleX = 1.421;
			this.rod.rotation = 0;
			this.rod.x = -3;
			this.hit.x = 96;
		},
		fire: function (speed) {
			Model.hit = this;
			createjs.Ticker.addEventListener("tick", this._tick);
		},
		_tick: function () {
			var hitObj = Model.hit;
			Model.currentTime = createjs.Ticker.getTime() - Model.fireTime;
			if (hitObj.reverse == false) {
				if (hitObj.hit.x < hitObj.maxX) {
					hitObj.rod.scaleX += hitObj.scaleFactor * Model.scaleHit;
					hitObj.hit.x += Model.scaleHit;
				} else {
					hitObj.pause();
					hitObj.dispatchEvent("animComplete");
				}
			} else {
				if (hitObj.hit.x > hitObj.minXR) {
					hitObj.rod.scaleX += hitObj.scaleFactor * Model.scaleHit;
					hitObj.hit.x -= Model.scaleHit;
				} else {
					hitObj.pause();
					hitObj.dispatchEvent("animComplete");
				}
			}
			// this.hit.x++;
			// this.rod.scaleX += this.scaleFactor;
		},
	};

	createjs.EventDispatcher.initialize(Class.prototype);

	return Class;

})();
