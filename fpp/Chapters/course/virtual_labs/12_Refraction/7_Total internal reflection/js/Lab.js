//	50.5 - 48.8
var Lab = (function () {
	var scope;
	function Activity() {
		createjs.Container.call(this);
	}

	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function () {
		var scope = this;
		createPlayers.call(this);
		this.reset = this.reset.bind(this);
		this._goClicked = goClicked.bind(this);
		this._checkWinner = checkWinner.bind(this);
		this._playAnimation = playAnimation.bind(this);

		this.player1.addEventListener("checkWinner", this._checkWinner);
		this.player2.addEventListener("checkWinner", this._checkWinner);

		this.player1.addEventListener("playAnimation", this._playAnimation);
		this.player2.addEventListener("playAnimation", this._playAnimation);

		this.layout.goButton.addEventListener("click", this._goClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);

		this.layout.stepper.enable();
		this.layout.goButton.enable();
	}

	Activity.prototype.reset = function () {
		//// 	console.log(" in reset")
		// console.log(this);
		clearInterval(Model.timeInterval)
		Model.count = 0;
		var mc = this.layout.blast;
		mc.visible = false;
		mc.uncache();
		mc.gotoAndStop(0);
		var scope = this;
		Model.actComplete = false;
		this.activePlayer.pause();
		this.activePlayer.disable();
		Model.submarine.hit = [false];
		this.layout["playerWin"].visible = false;
		this.layout["computerWin"].visible = false;
		Model.helicopter.hit = [false];
		// console.log(Model.submarine.hit)
		// console.log(Model.helicopter.hit)
		// console.log(scope.stage)
		Model.canvas.forEach(function (c, i) {
			// console.log(i)
			scope.stage.removeChild(Model.canvas[i]);
		});
		if(this.player2.auto){
			this.player2.generateAngle();
		}
		this.layout.goButton.enable();
		this.activePlayer = this.player1;
		this.player1._arrow(1);
		this.activePlayer.enable();
		this.playerIndex = 0;
		Model.currentHit = -1;
		Model.nextsub = -1;
		Model.prevsub = -1;
		Model.canvasData = null;
		Model.currentHelAngle = null;
		Model.currentSubAngle = null;
	}

	function createPlayers() {
		var scope = this,
		i,
		j,
		p1Data = Lab.data.player1,
		p2Data = Lab.data.player2,
		stepper = this.layout.stepper;

		var a = new VectorLine(this.layout.arrow1, {x: 914,y: 450}, {min: 60,max: 60}, {min: 0,max: 360}, this.layout.arrow1Line, {color: "#0000ff",lineWidth: 2,	direction: "left"
			},Model.snapValue);
		var e = {
			stageX: 664,
			stageY: 200
		};
		a._drag(e);
		a.enable();

		this.player1 = new Player(this.layout.player_1, Model.submarine.options, a);
		this.player1.startPoints = Lab.data.player1.options;

		this.player2 = new Player(this.layout.player_2, Model.helicopter.options, null);
		this.player2.startPoints = Lab.data.player2.options;

		this.layout.stepper.enable();
		this.layout.stepper.addEventListener("valueChange", function (e) {
			//// 	console.log(a.angle);
			//// 	console.log(scope.layout.stepper.value);
			a.angle = scope.layout.stepper.value%360 > 0 ? scope.layout.stepper.value%360 : -1 * (scope.layout.stepper.value%360);
			if (a.angle <= 90) {
				scope.layout.angleValue.text = (90 - a.angle).toFixed(1);
			} else if (a.angle > 90 && a.angle <= 180) {
				scope.layout.angleValue.text = (a.angle - 90).toFixed(1);
			} else if (a.angle > 180 && a.angle <= 270) {
				scope.layout.angleValue.text = (270 - a.angle).toFixed(1);
			} else if (a.angle > 270 && a.angle <= 360) {
				scope.layout.angleValue.text = (a.angle - 270).toFixed(1);
			}
		});
		this.player1.reset().addEventListener("angleUpdated", function (e) {
			//// 	console.log(e.currentTarget.arrow._angle)
			var angle = e.currentTarget.arrow._angle;
			scope.layout.stepper.value = e.currentTarget.arrow._angle.toFixed(1) * 1;
			//	scope.layout.angleValue.text = e.currentTarget.arrow._angle.toFixed(1);
			if (angle <= 90) {
				scope.layout.angleValue.text = (90 - angle).toFixed(1);
			} else if (angle > 90 && angle <= 180) {
				scope.layout.angleValue.text = (angle - 90).toFixed(1);
			} else if (angle > 180 && angle <= 270) {
				scope.layout.angleValue.text = (270 - angle).toFixed(1);
			} else if (angle > 270 && angle <= 360) {
				scope.layout.angleValue.text = (angle - 270).toFixed(1);
			}
		});
		this.player2.reset();

		this.activePlayer = this.player1;

		this._hit = hit.bind(this);
		this.player1.addEventListener("hit", this._hit);
		this.player2.addEventListener("hit", this._hit);
		this.reset();
	}

	function hit(e) {
		var scope = this;
		nextTurn.call(scope);
	}

	function nextTurn() {
		// console.log("in next turn");
		var count = 0,
		text = null,
		scope = this,
		flag = false;
		if (this.activePlayer) {
			// console.log(Model.submarine.hit)
			// console.log(Model.helicopter.hit)
			if (!this.activePlayer.auto) {
				Model.submarine.hit.forEach(function (h, i) {
					if (h == true) {
						count++;
					}
				});
				if (count == 3) {
					text = "You Win!";
					// console.log(text);
				} else if (count == 2) {
					Model.submarine.hit.forEach(function (h, i) {
						if (h == false) {
							Model.nextsub = i;
						}
					});
				} else if (count == 1) {
					Model.submarine.hit.forEach(function (h, i) {
						// console.log(h == false, Model.nextsub, i)
						if (h == false && Model.nextsub != i && flag == false) {
							flag = true;
							Model.nextsub = i;
						}
					});
				} else {
					Model.submarine.hit.forEach(function (h, i) {
						if (h == false) {
							if (flag == false) {
								// console.log("flag")
								flag = true;
								Model.nextsub = (Model.prevsub + 1) % 3;
								// console.log(Model.nextsub, Model.nextsub)
							}
						}
					});
				}
				Model.prevsub = Model.nextsub;
			} else {
				Model.helicopter.hit.forEach(function (h, i) {
					if (h == true) {
						count++;
						text = "Computer Win!";
					}
				});
				// console.log(count)
			}
			this.activePlayer.disable();
			this.activePlayer.reset();
			//	if(text){
			//	}
		}
		//console.log(this.playerIndex)
		if (count < 3) {
			if (!this.hasOwnProperty("playerIndex")) {
				this.playerIndex = 0;
			}
			if (this.playerIndex == 1) {
				this.playerIndex = 0;
			} else {
				this.playerIndex = 1;
			}
			//console.log(this.playerIndex)
			//console.log( this["player" + (this.playerIndex + 1)])

			this.activePlayer = this["player" + (this.playerIndex + 1)];
			this.activePlayer.enable();

			//console.log(this.playerIndex)
			if (!this.activePlayer.auto) {
				//console.log("not auto")
				this.layout.goButton.enable();
				this.layout.stepper.enable();
				Model.helAngle = 0;
			} else {
				this.activePlayer.nextAngle();
				// console.log("in else of auto")
			}

			if (this.activePlayer.auto) {
				Model.timeInterval = setTimeout(function () {
					//console.log("in goClicked call")
					goClicked.call(scope);
				}, 1000);
			}
		}
	}

	function checkWinner(e) {
		// console.log(Model.currentHit);

		/*if (Model.currentHit >= 0 && this.activePlayer.auto == false) {
		lab.layout["helAngle" + (Model.currentHit + 1)].text = Model.currentHelAngle.toFixed(1);
		lab.layout["subAngle" + (Model.currentHit + 1)].text = Model.currentSubAngle.toFixed(1);
		lab.layout["helAngle" + (Model.currentHit + 1)].visible = true;
		lab.layout["subAngle" + (Model.currentHit + 1)].visible = true;
		}

		if (Model.currentHit >= 0 && this.activePlayer.auto == true) {
		lab.layout["helAngle" + (Model.currentHit + 1)].text = Model.currentHelAngle.toFixed(1);
		lab.layout["subAngle" + (Model.currentHit + 1)].text = Model.currentSubAngle.toFixed(1);
		lab.layout["helAngle" + (Model.prevsub + 1)].visible = true;
		lab.layout["subAngle" + (Model.prevsub + 1)].visible = true;
		}*/
		var text,
		count = 0;
		if (!this.activePlayer.auto) {
			this.layout["playerWin"].visible = true;
		} else {
			this.layout["computerWin"].visible = true;
		}
		Model.actComplete = true;
		this.layout.goButton.enable();
	}

	function goClicked(e) {
		if(Model.actComplete){
			this.reset();
		}else{
		var shape = new createjs.Shape();
		this.stage.addChildAt(shape,0);
		var shape2 = new createjs.Shape();
		this.stage.addChild(shape2);
		this.activePlayer.reset();
		if (!this.activePlayer.auto) {
			this.layout.goButton.disable();
			this.activePlayer.fire(shape, shape2, this.layout.stepper.value);
		} else {
			this.activePlayer.fire(shape, shape2);
			//	this.activePlayer.nextAngle();
			//console.log("in else of auto")
		}
		}
	}

	function playAnimation(e) {
		var scope = this;
		if(scope.activePlayer.auto){
			var blast = Model.helicopter.options[Model.currentHit];
		}else{
			var blast = Model.submarine.options[Model.currentHit];
		}
		mc = scope.layout.blast;
		mc.visible = true;
		mc.x = blast.x + (blast.width/2);
		mc.y = blast.y + (blast.height/2);
		mc.uncache();
		mc.addEventListener("tick", function(){
			if(mc.currentFrame == mc.totalFrames - 1){
				mc.paused = true;
				mc.removeAllEventListeners("tick");
				displayCross.call(scope);
			}
		});
		mc.gotoAndPlay(0);
		//	console.log(" in playAnimation");	
	}
	
	function displayCross() {	
		var scope = this;
		scope.activePlayer._displayCross();
		//	if(scope.activePlayer.auto){
		//		var crossPoint = Model.helicopter.options[0];
		//	}else{
		//		var crossPoint = Model.submarine.options[0];
		//	}
		//	cross = new lib.cross();
		//	scope.stage.addChild(cross);
		//	cross.scaleX = cross.scaleY = 1;
		//	cross.visible = true;
		//	cross.x = crossPoint.x + (crossPoint.width / 2);
		//	cross.y = crossPoint.y + (crossPoint.height / 2);
		//	//	console.log(" in displayCross");
		//	Model.canvas.push(cross);
		//	scope.activePlayer.dispatchEvent("checkWinner");
		//	scope.activePlayer.reset();
	}

	return Activity;
})();

Lab.data = {
	player1: {
		options: [{
				x: 914,
				y: 450,
			}
		]
	},
	player2: {
		options: [{
				x: 254.659,
				y: 365.85,
			}
		],

	}
}

var Player = (function () {
	function Class(canvas, targetPointers, arrow) {
		this._data = {};
		this.canvas = canvas;
		//console.log(canvas)
		this.canvasData = {
			color: "#ff0000",
			lineWidth: sV(2),
			direction: "left",
		};
		this.auto = false;
		this.targetValues =[];
		this.pointers = targetPointers;
		this.arrow = arrow;
		this.currentStartPoint = null;
		this.pointOnSurface = null;
		this.touchedBoundry = false;
		this.aAngle = false;

		targetPointers.forEach(function (p, i) {
			this.data("point" + i, false);
		}, this);

		this._tick = this._tick.bind(this);
		if (this.arrow) {
		// 	console.log("player 1")
			this._onDrag = this._onDrag.bind(this);
			this.arrow.addEventListener("drag", this._onDrag);
			this.auto = false;
		} else {
		// 	console.log("player 2")
			this.auto = true;
		}
		if(this.auto){
			this.targetValues.push(15);
		}
		//console.log(this.auto)
	}

	Class.prototype = {
		constructor: Class,
		reset: function () {
			this.currentStartPoint = null;
			this.pointOnSurface = null;
			this.touchedBoundry = false;
			Model.currentHit = -1;
			this.pause();
			return this;
		},
		enable: function () {
			if (!this.auto) {
				this.arrow.visible = true;
				this.arrow.enable();
			}
			return this;
		},
		disable: function () {
			if (!this.auto) {
				this.arrow.visible = false;
				this.arrow.disable();
			}
			return this;
		},
		data: function (key, value) {
			if (arguments.length == 1) {
				return this._data[key];
			} else {
				this._data[key] = value;
			}
			return this;
		},
		setTargets: function (array) {
			var x;
			this.targetValues = array;
			this.pointers.forEach(function (p, i) {
				x = p.x = this.data("startX") + Model.pointToPixel(array[i]) * this.data("direction");
			}, this);
			return x;
		},
		_onDrag: function (e) {
			this._arrow(2);
			var event = new createjs.Event("angleUpdated");
			this.dispatchEvent(event);
		},
		fire: function (shape, shape2, angle) {
			this.canvas = shape;
			this.cross = shape2;
			Model.canvas.push(this.canvas);
			Model.canvas.push(this.cross);
		// 	console.log(this.cAngle);
			if (!this.auto) {
				Model.helAngle = this.cAngle = this.arrow.angle;
				this.arrow.visible = false;
				this.currentStartPoint = this.startPoints[0];
				this.firstPoint = this.currentStartPoint;
			} else {
				this.currentStartPoint = this.startPoints[0];
				this.firstPoint = this.currentStartPoint;
				Model.subAngle = this.cAngle;
			}
			// console.log(this.cAngle);
			this._tickCount = 0;
			createjs.Ticker.addEventListener("tick", this._tick);
		},
		pause: function () {
			//console.log("pause")
			createjs.Ticker.removeEventListener("tick", this._tick);
		},
		generateAngle: function () {
			var diffs = [-9, -5, -2, 2, 9, 6];
			var Angle;
			var j,
			c = 0;
			this._angles = [];
			this.targetValues.forEach(function (distance, i) {
				for (j = 0; j < 6; j++) {
					Angle = (Model.critAngle + diffs[c]) * 1;
					this._angles.push(Angle);
					c++;
				}
			}, this);
			// console.log(this._angles)
		},
		nextAngle: function () {
		// 	console.log(Model.helAngle)
			var value,sign,additionalAngle;
			value = Model.randomNumber(0, 3)
			if(Model.count < Model.Max){
			// 	console.log("in if")
				/*var diffs = [9,8,7,6,5,4,3,2,1];
				sign = Model.randomNumber(0, 1)
				additionalAngle = diffs[value]*0.1;
				if (sign >= 0.7) {
					this.cAngle = this.angle = 270 + (270 - Model.helAngle) + additionalAngle;
				} else if (sign >= 0.4){
					this.cAngle = this.angle = 270 + (270 - Model.helAngle);
				} else{
					this.cAngle = this.angle = 270 + (270 - Model.helAngle) - additionalAngle;
				}*/
				if (Model.randomNumber(0, 1) == 1) {
					this.cAngle = this.angle = this._angles.pop();
				} else {
					this.cAngle = this.angle = this._angles.shift();
				}
				Model.count++;
			}else {
				this.cAngle = this.angle = Model.correctAngle[value];
				//	console.log("in else",value,this.cAngle)
			}
		// 	console.log(this.cAngle);
		},
		refractedAngle: function (angle) {
			// console.log(angle, "refractedAngle")
			if (!this.auto) {
				var angle = 270 - Math.asin(Math.sin((angle - 90) * Maths.TO_RADIANS) * 1.33) * Maths.TO_DEGREES;
			} else {
				// console.log(90 + angle)
				var angle = 270 + Math.asin(Math.sin((angle-270) * Maths.TO_RADIANS) * 1.33) * Maths.TO_DEGREES;
				Model.helAngle = angle;
			}
			// console.log(angle)
			return angle;
		},
		reflectedAngle: function (angle) {
			// console.log(270 - angle, angle, "reflectedAngle")
			if (!this.auto) {
				var angle = 90 + (270 - angle);
			} else {
				//console.log(angle)
				var angle =  - (angle);
				//console.log(angle)
				Model.helAngle = angle;
			}
			// console.log(angle)
			return angle;
		},
		_checkHit: function (point) {
			var status = false;
			var curr = null;
			if (!this.auto) {
				Model.submarine.options.forEach(function (s, i) {
					// console.log("_checkHit", s.x <= point.x, s.x + s.width >= point.x, s.y + (s.height / 2) <= point.y, s.y + s.height >= point.y)
					if(s.y + (s.height / 2) <= point.y && s.y + s.height >= point.y)
						// console.log(point)
					if (s.x <= point.x && s.x + s.width >= point.x && s.y + (s.height / 2) <= point.y && s.y + s.height >= point.y) {
						status = true;
						Model.submarine.hit[i] = true;
						Model.currentHit = i;
						//console.log(i, Model.currentHit)
					}
				});
			} else {
				Model.helicopter.options.forEach(function (s, i) {
					if(s.y + (s.height / 2) <= point.y && s.y + s.height >= point.y)
						//	console.log(point)
					if (s.x <= point.x && s.x + s.width >= point.x && s.y + (s.height / 2) <= point.y && s.y + s.height >= point.y) {
						status = true;
						Model.helicopter.hit[i] = true;
						Model.currentHit = i;
						//console.log(i, Model.currentHit)
					}
				});
			}
			return status;
		},
		_arrow: function (number) {
			this.arrow.unit = number;
			this.arrow.angle = this.arrow.angle;
		},
		_displayCross: function () {
			if (!this.auto) {
				var cross = Model.submarine.options[0];
			}else{
				var cross = Model.helicopter.options[0];
			}
			this.cross.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(cross.x, cross.y).lineTo(cross.x + cross.width, cross.y + cross.height).endStroke();
			this.cross.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(cross.x + cross.width, cross.y).lineTo(cross.x, cross.y + cross.height).endStroke();
			this.reset();
			this.dispatchEvent("checkWinner");
		},
		_tick: function () {
			var curr = Model.getPoint(this.currentStartPoint, this.cAngle * Maths.TO_RADIANS, Model.step);
			curr.x = Model.pointToPixel(curr.x),
			curr.y = Model.pointToPixel(curr.y);
			var status = Model.isPointInPoly(Model.boundryStone, curr)
			// console.log(status, curr, this.cAngle);
			if ((curr.x > Model.boundry.xMin && curr.x < Model.boundry.xMax && curr.y > Model.boundry.yMin && curr.y < Model.boundry.yMax) && !status) {
				if (!this.auto) {
					if (curr.y <= Model.waterBoundry) {
						var hit = this._checkHit(curr);
						if (Model.canvasData) {}
						if (!hit) {
							if (this.touchedBoundry == false) {
								this.pointOnSurface = this.currentStartPoint;
								this.touchedBoundry = true;
								if (this.angle < 221.3 && this.angle >= 180) {
									this.cAngle = this.reflectedAngle(this.angle);
								} else {
									this.cAngle = this.refractedAngle(this.angle);
								}
								curr = Model.getPoint(this.currentStartPoint, this.cAngle * Maths.TO_RADIANS, Model.step);
								curr.x = Model.pointToPixel(curr.x),
								curr.y = Model.pointToPixel(curr.y);
							}
							this.canvas.graphics.clear().setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.firstPoint.x, this.firstPoint.y).lineTo(this.pointOnSurface.x, this.pointOnSurface.y).endStroke();
							this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.pointOnSurface.x, this.pointOnSurface.y).lineTo(curr.x, curr.y).endStroke();
						}
					} else {
						if (this.touchedBoundry == false) {
							this.pointOnSurface = curr;
							this.canvas.graphics.clear().setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.firstPoint.x, this.firstPoint.y).lineTo(this.pointOnSurface.x, this.pointOnSurface.y).endStroke();
							this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.pointOnSurface.x, this.pointOnSurface.y).lineTo(curr.x, curr.y).endStroke();
						} else {
							var hit = this._checkHit(curr);
							if (Model.canvasData) {}
							if (!hit) {
								this.canvas.graphics.clear().setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.firstPoint.x, this.firstPoint.y).lineTo(this.pointOnSurface.x, this.pointOnSurface.y).endStroke();
								this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.pointOnSurface.x, this.pointOnSurface.y).lineTo(curr.x, curr.y).endStroke();
							} else {
								// console.log(Model.currentHit);
								this.arrow.visible = true;
								var cross = Model.submarine.options[Model.currentHit];
								this.canvas.graphics.clear().setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.firstPoint.x, this.firstPoint.y).lineTo(this.pointOnSurface.x, this.pointOnSurface.y).endStroke();
								this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.pointOnSurface.x, this.pointOnSurface.y).lineTo(curr.x, curr.y).endStroke();
								// this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(cross.x, cross.y).lineTo(cross.x + cross.width, cross.y + cross.height).endStroke();
								// this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(cross.x + cross.width, cross.y).lineTo(cross.x, cross.y + cross.height).endStroke();
								this.dispatchEvent("playAnimation");
								this.reset();
							}
						}
					}
				} else if (this.auto) {
					if (curr.y <= Model.waterBoundry) {
						var hit = this._checkHit(curr);
						if (!hit) {
							if (this.touchedBoundry == false) {
								this.pointOnSurface = this.currentStartPoint;
								this.touchedBoundry = true;
								if (this.angle > 318.7 && this.angle < 360) {
									this.cAngle = this.reflectedAngle(this.angle);
								} else {
									this.cAngle = this.refractedAngle(this.angle);
								}
								curr = Model.getPoint(this.currentStartPoint, this.cAngle * Maths.TO_RADIANS, Model.step);
								curr.x = Model.pointToPixel(curr.x),
								curr.y = Model.pointToPixel(curr.y);
							}
							this.canvas.graphics.clear().setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.firstPoint.x, this.firstPoint.y).lineTo(this.pointOnSurface.x, this.pointOnSurface.y).endStroke();
							this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.pointOnSurface.x, this.pointOnSurface.y).lineTo(curr.x, curr.y).endStroke();
						}
					} else {
						if (this.touchedBoundry == false) {
							this.pointOnSurface = curr;
							this.canvas.graphics.clear().setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.firstPoint.x, this.firstPoint.y).lineTo(this.pointOnSurface.x, this.pointOnSurface.y).endStroke();
							this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.pointOnSurface.x, this.pointOnSurface.y).lineTo(curr.x, curr.y).endStroke();
						} else {
							var hit = this._checkHit(curr);
							if (!hit) {
								this.canvas.graphics.clear().setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.firstPoint.x, this.firstPoint.y).lineTo(this.pointOnSurface.x, this.pointOnSurface.y).endStroke();
								this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.pointOnSurface.x, this.pointOnSurface.y).lineTo(curr.x, curr.y).endStroke();
							} else {
								// console.log(Model.currentHit);
								var cross = Model.helicopter.options[Model.currentHit];
								this.canvas.graphics.clear().setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.firstPoint.x, this.firstPoint.y).lineTo(this.pointOnSurface.x, this.pointOnSurface.y).endStroke();
								this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.pointOnSurface.x, this.pointOnSurface.y).lineTo(curr.x, curr.y).endStroke();
								// this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(cross.x, cross.y).lineTo(cross.x + cross.width, cross.y + cross.height).endStroke();
								// this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(cross.x + cross.width, cross.y).lineTo(cross.x, cross.y + cross.height).endStroke();
								this.dispatchEvent("playAnimation");
								this.reset();
							}
						}
					}
				}
			} else {
				// console.log("in else boundry")
				this.canvas.graphics.clear();
				this.pause();
				e = new createjs.Event("hit");
				this.dispatchEvent(e);
			}
			this.currentStartPoint = curr;
			this._tickCount++;
		}
	};
	Object.defineProperty(Class.prototype, "angle", {
		get: function () {
			if (this.auto) {
				return this.aAngle;
			} else {
				return this.arrow.angle;
			}
		},
		set: function (value) {
			if (this.auto) {
				this.aAngle = value;
			} else {
				this.arrow.angle = value;
			}
		}
	});
	createjs.EventDispatcher.initialize(Class.prototype);

	return Class;
})();

var Model = {
	helicopter: {
		options: [{
				x: 874.3,
				y: 447.1,
				width: 160.1*0.46,
				height: 40.85*0.46,
			}
		],
		hit: [false]
	},
	submarine: {
		options: [{
				x: 222.15,
				y: 356.55,
				width: 112.1*0.58,
				height: 28.6*0.58,
			}
		],
		hit: [false],
		Angles: [321]
	},
	step: 8,
	unit: 1,
	count:0,
	currentHit: -1,
	nextsub: -1,
	prevsub: -1,
	critAngle: 315,
	actComplete : false,
	canvasData: null,
	timeInterval: null,
	currentHelAngle: null,
	currentSubAngle: null,
	waterBoundry: 122,
	canvas: [],
	boundry: {
		xMin: 0,
		xMax: 1100,
		yMin: 0,
		yMax: 725,
	},
	Max:5,
	snapValue:0.1,
	correctAngle : [319,319.5,320,320.5,321,321.5,322,322.5,323,323.5],
	boundryStone: [{
			x: 224,
			y: 725
		}, {
			x: 387,
			y: 707
		}, {
			x: 363,
			y: 660
		}, {
			x: 385,
			y: 452
		}, {
			x: 484,
			y: 311
		}, {
			x: 551,
			y: 268
		}, {
			x: 590,
			y: 272
		}, {
			x: 616,
			y: 363
		}, {
			x: 630,
			y: 392
		}, {
			x: 618,
			y: 436
		}, {
			x: 662,
			y: 438
		}, {
			x: 683,
			y: 564
		}, {
			x: 664,
			y: 715
		}
	]
};

Model.pointToPixel = function (value) {
	return value * Model.unit;
}

Model.isPointInPoly = function (polygon, point) {
	for (var c = false, i = -1, l = polygon.length, j = l - 1; ++i < l; j = i)
		((polygon[i].y <= point.y && point.y < polygon[j].y) || (polygon[j].y <= point.y && point.y < polygon[i].y))
		 && (point.x < (polygon[j].x - polygon[i].x) * (point.y - polygon[i].y) / (polygon[j].y - polygon[i].y) + polygon[i].x)
		 && (c = !c);
	return c;
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

Model.getPoint = function (p, angle, rad) {
	var temp = new Object();
	temp.x = p.x + (rad * Math.cos(angle));
	temp.y = p.y + (rad * Math.sin(angle));
	return temp;
}

Model.getX = function (p1, p2, y) {
	return ((y - p1.y) * (p2.x - p1.x) + (p1.x * (p2.y - p1.y))) / (p2.y - p1.y);
}

Model.randomNumber = function (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

Model.getDistance = function (p1, p2) {
	return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
}
