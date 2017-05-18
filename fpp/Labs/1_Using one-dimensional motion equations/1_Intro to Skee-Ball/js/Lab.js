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
		this.resetStage = resetStage.bind(this);

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

		this.ball.addEventListener("openStopper", openStopper);

		scope.layout.circle10.gotoAndStop(3);
		scope.layout.circle20.gotoAndStop(3);
		scope.layout.circle30.gotoAndStop(3);
		scope.layout.circle50.gotoAndStop(3);
	}

	Activity.prototype.reset = function () {
	// 	console.log(" in reset")
		scope.a.enable();
		scope.layout.ball.visible = true;
		this.layout.ball.scaleX = 1;
		this.layout.ball.scaleY = 1;
		this.layout.circle10.gotoAndStop(3);
		this.layout.circle20.gotoAndStop(3);
		this.layout.circle30.gotoAndStop(3);
		this.layout.circle50.gotoAndStop(3);
		this.layout.fireButton.enable();
		this.layout.pauseButton.disable();
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
		this.layout.speedText.text = (0).toFixed(2)  + " m/s";
		this.layout.time.text = (0).toFixed(2);
		this.layout.scoreValue.text = "0";
		this.layout.shotsValue.text = "5";
		this.layout.openTime.text = "Slots open at time = 2 Sec.";
		this.layout.stopper.scaleX = 0;
		Model.stopper = false;
		Model.deflected = false;
		Model.velocityX = 0;
		Model.velocityY = 0;
		scope.velocity = 0;
		Model.shots = 5;
		Model.score = 0;
		Model.currentSlot = -1;
		this.a.reset();
		this.ball.reset();
		clearTimeout(Model.timer);
	}

	function resetStage() {
		scope.layout.ball.visible = true;
		scope.layout.shotsValue.text = Model.shots;
		scope.layout.scoreValue.text = Model.score;
		this.layout.ball.scaleX = 1;
		this.layout.ball.scaleY = 1;
		scope.a.enable();
		this.layout.fireButton.enable();
		this.layout.pauseButton.disable();
		scope.layout.stopper.scaleX = 0;
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
		Model.stopper = false;
		Model.velocityX = 0;
		Model.velocityY = 0;
		scope.velocity = 0;
		this.layout.time.text = (0).toFixed(2);
		this.layout.speedText.text = (0).toFixed(2) + " m/s";
		this.a.reset();
		this.ball.reset();
		scope.layout.circle10.gotoAndStop(3);
		scope.layout.circle20.gotoAndStop(3);
		scope.layout.circle30.gotoAndStop(3);
		scope.layout.circle50.gotoAndStop(3);
	}

	function drag() {
		// console.log(scope.layout.hitrod.scaleX)
		// console.log((Math.round((Model.Ball.draggableMax - scope.layout.hitrod.x)/8) * 0.1).toFixed(2))
		scope.velocity = scope.a.reverse ? (Math.round(-(scope.layout.hitbutton.x - Model.Ball.draggableMin1)/2) * 0.1).toFixed(2) : (Math.round((Model.Ball.draggableMax - scope.layout.hitbutton.x)/2) * 0.1).toFixed(2);
		scope.layout.speedText.text = scope.a.reverse ? (Math.round(-(scope.layout.hitbutton.x - Model.Ball.draggableMin1)/2) * 0.1).toFixed(2) + " m/s" : (Math.round((Model.Ball.draggableMax - scope.layout.hitbutton.x)/2) * 0.1).toFixed(2) + " m/s";
	}

	function animComplete() {
		scope.ball.fire(scope.velocity, 0);
	}

	function updateTimer() {
		scope.layout.time.text = Model.time.toFixed(2)
	}

	function updateScore() {
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
			scope.layout.shotsValue.text = Model.shots;
			scope.layout.scoreValue.text = Model.score;
			scope.a.disable();
			if (Model.score >= 200) {
				scope.layout.openTime.text = "Game Over. Excellent";
			} else if (Model.score >= 150) {
				scope.layout.openTime.text = "Game Over. Great Job!";
			} else if (Model.score > 100) {
				scope.layout.openTime.text = "Game Over. Good";
			} else {
				scope.layout.openTime.text = "Game Over. Try Again.";
			}
			scope.layout.pauseButton.disable();
		} else {
			Model.timer = setTimeout(function () {
					scope.resetStage();
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
	acceleration: 2,
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
	score: 0,
	vectorS: null,
	vectorM: null,
	first: true,
	velocityChanged: false,
	deflected: false,
	stopper: false,
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
	function Class(ball, obj) {
		var scope = this;
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
			//	console.log(this.velocity)
			//	console.log(this.velocity)
			//	console.log(this)
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
			var pPointsValue = Model.pHolesCenter;
			var nPoints = Model.nHolesCenter;
			var i = 0,
			j = 0,
			offsetBall = Model.offsetBall;
			p.x = sV(Model.pointToPixel(p.x)),
			p.y = sV(Model.pointToPixel(p.y));

			var changeVelocity;
			changeVelocity = Model.acceleration * Model.step;
			Model.NextVelocityX = Model.velocityX * 1 - 2 * changeVelocity;
			Model.NextVelocityX1 = Model.velocityX * 1 - changeVelocity;
			var nextP = Model.nextPoint(Model.NextVelocityX, Model.velocityY);
			nextP.x = sV(Model.pointToPixel(nextP.x)),
			nextP.y = sV(Model.pointToPixel(nextP.y));
			var nextP1 = Model.nextPoint(Model.NextVelocityX1, Model.velocityY);
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
			if (Model.time < 2.01) {
				this.dispatchEvent("updateTimer");
				if (Model.time > 1.9) {
					if (Model.stopper == false) {
						Model.stopper = true;
						this.dispatchEvent("openStopper");
					}
				}
			} else {
				if (Model.time > 5 && Model.deflected == false) {
					this.pause();
					this.dispatchEvent("updateScore");
				}
				if (Model.stopper == false) {
					Model.stopper = true;
					//	console.log("openStopper")
					this.dispatchEvent("openStopper");
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
					} else if (currentDistance <= outerDistance) {
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

			if (Model.velocityChanged == false) {
				Model.velocityX = Model.velocityX * 1 - changeVelocity;
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
			return this;
		},
		_drag: function (e) {
			var p = this.hit.parent.globalToLocal(e.stageX, e.stageY);
			// console.log(e.stageX)
			if (e.stageX <= (this.ball.x - this.ball.regX) * foregroundStage.scaleX) {
				// console.log(this.hit.x)
				this.reverse = false;
				this.hit.x = Math.max(this.minX, Math.min(p.x, this.maxX));
				this.rod.scaleX = (this.scaleFactor * this.hit.x )>1.421 ? 1.421 : this.scaleFactor * this.hit.x;
				this.hit.rotation = 0;
				this.rod.rotation = 0;
				this.rod.x = -3;
			} else if (e.stageX >= (this.ball.x * foregroundStage.scaleX)) {
				// console.log(this.hit.x)
				this.reverse = true;
				this.hit.rotation = 180;
				this.rod.rotation = -180;
				this.rod.x = 243;
				this.hit.x = Math.max(this.minXR, Math.min(p.x, this.maxXR));
				this.rod.scaleX = ((this.rod.x - this.hit.x) * this.scaleFactor) > 1.421 ? 1.421 : ((this.rod.x - this.hit.x) * this.scaleFactor);
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
