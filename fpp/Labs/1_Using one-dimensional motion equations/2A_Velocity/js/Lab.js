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
		
		this.ball.addEventListener("updateStage", resetStage);

		scope.layout.circle10.gotoAndStop(3);
		scope.layout.circle20.gotoAndStop(3);
		scope.layout.circle30.gotoAndStop(3);
		scope.layout.circle50.gotoAndStop(3);
	}

	Activity.prototype.reset = function () {
	// 	console.log(" in reset")
		scope.a.enable();
		scope.layout.ball.visible = true;
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
		this.layout.PositionValue.text = (0).toFixed(2) +" m";
		Model.velocityX = 0;
		Model.velocityY = 0;
		scope.velocity = 0;
		this.a.reset();
		this.ball.reset();
		clearTimeout(Model.timer);
	}

	function resetStage() {
		scope.a.enable();
		scope.layout.fireButton.enable();
		scope.layout.pauseButton.disable();
		scope.layout.stopper.scaleX = 0;
		scope.layout.pauseButton.visible = true;
		scope.layout.playButton.visible = false;
		Model.stopper = false;
		Model.velocityX = 0;
		Model.velocityY = 0;
		scope.velocity = 0;
		scope.layout.time.text = (0).toFixed(2);
		scope.layout.PositionValue.text = (0).toFixed(2) +" m";
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
		scope.layout.PositionValue.text = (Model.time*Model.velocityX).toFixed(2) +" m";
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
		clearTimeout(Model.timer)
	}

	function fireClicked(e) {
		scope.a.disable();
		Model.time = 0;
		Model.velocityX = scope.layout.speedText.text * 1;
		Model.fireTime = createjs.Ticker.getTime();
		this.layout.fireButton.disable();
		this.layout.pauseButton.enable();
		this.a.fire(lab.layout.speedText.text * 1);
	}

	function startTimer() {
		Model.currentTime = createjs.Ticker.getTime() - Model.fireTime;
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
	hitObj: null,
	fireTime: null,
	timer: null,
	pause: true,
	velocityX: 0,
	velocityY: 0,
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
			var p = Model.nextPoint(Model.velocityX, Model.velocityY);
			offsetBall = Model.offsetBall;
			p.x = sV(Model.pointToPixel(p.x)),
			p.y = sV(Model.pointToPixel(p.y));
			
			Model.time += Model.step;

			this.ball.x += p.x;
			this.ball.y += p.y;

			if (this.ball.y < Model.boundryYMin || this.ball.y > Model.boundryYMax) {
				Model.velocityY = 0;
			}
			if (Model.time < 5.03) {
				this.dispatchEvent("updateTimer");
			} else {
				if (Model.time > 5) {
					if(Model.velocityX == 0)
					{
						scope.dispatchEvent("updateStage");
					}else if(this.ball.x > 1100 || this.ball.x < 0){
						this.pause();
						Model.timer = setTimeout(function () {
							scope.dispatchEvent("updateStage");
						}, 2000);
					}
				}else{
					this.dispatchEvent("updateTimer");
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
				this.hit.rotation = 180;
				this.rod.rotation = -180;
				this.rod.x = 243;
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
