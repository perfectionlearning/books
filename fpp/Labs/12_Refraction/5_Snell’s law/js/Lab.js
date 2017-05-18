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
		this._fireClicked = fireClicked.bind(this);
		this._checkWinner = checkWinner.bind(this);
		this._playAnimation = playAnimation.bind(this);
		this._displayAngles = displayAngles.bind(this);

		this.player1.addEventListener("checkWinner", this._checkWinner);
		this.player2.addEventListener("checkWinner", this._checkWinner);

		this.player1.addEventListener("playAnimation", this._playAnimation);
		this.player2.addEventListener("playAnimation", this._playAnimation);

		this.player1.addEventListener("displayAngles", this._displayAngles);

		this.player1.addEventListener("enableFire", this._enableFire);
		this.player2.addEventListener("enableFire", this._enableFire);

		this.layout.fireButton.addEventListener("click", this._fireClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);

		this.layout.stepper.enable();
		this.layout.fireButton.enable();
	}

	Activity.prototype.reset = function () {
		//	console.log(" in reset")
		// console.log(this);
		var scope = this;
		this.activePlayer.pause();
		this.activePlayer.disable();
		Model.submarine.hit = [false, false, false];
		Model.helicopter.hit = [false];
		//	console.log(Model.submarine.hit)
		//	console.log(Model.helicopter.hit)
		for (var j = 1; j <= 2; j++) {
			this.layout["incorrect" + j].visible = false;
			this.layout["correct" + j].visible = false;
		}
		for (var i = 1; i <= 3; i++)
			this.layout["instruction" + i].visible = true;
		//	console.log(scope.stage)
		Model.canvas.forEach(function (c, i) {
			//	console.log(i)
			scope.stage.removeChild(Model.canvas[i]);
		});
		for (var j = 1; j <= 3; j++) {
			this.layout["helAngle" + j].visible = false;
			this.layout["subAngle" + j].visible = false;
			this.layout["cross_s_" + j].visible = false;
		}
		this.layout["cross_h"].visible = false;
		this.layout["angle_1"].visible = true;
		this.layout["angle_3"].visible = true;
		this.layout["angle_2"].visible = true;
		this.activePlayer = this.player1;
		this.activePlayer.enable();
		this.player1.reset();
		this.player2.reset();
		this.playerIndex = 0;
		Model.currentHit = -1;
		Model.nextsub = -1;
		Model.prevsub = -1;
		Model.canvasData = null;
		Model.currentHelAngle = null;
		Model.currentSubAngle = null;
		this.layout.fireButton.enable();
	}

	function createPlayers() {
		var scope = this,
		i,
		j,
		p1Data = Lab.data.player1,
		p2Data = Lab.data.player2,
		stepper = this.layout.stepper;

		var a = new VectorLine(this.layout.arrow1, {
				x: 928,
				y: 100
			}, {
				min: 100,
				max: 100
			}, {
				min: 0,
				max: 360
			}, this.layout.arrow1Line, {
				color: "#0000ff",
				lineWidth: 2,
				direction: "left"
			}, 1);
		var e = {
			stageX: 928,
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
			//	console.log(a.angle);
			//	console.log(scope.layout.stepper.value);
			a.angle = scope.layout.stepper.value;
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
			//	console.log(e.currentTarget.arrow._angle)
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
	}

	function hit(e) {
		var scope = this;
		nextTurn.call(scope);
	}

	function nextTurn() {
		//	console.log("in next turn")
		var count = 0,
		text = null,
		scope = this,
		flag = false;
		if (this.activePlayer) {
			//	console.log(Model.submarine.hit)
			//	console.log(Model.helicopter.hit)
			if (!this.activePlayer.auto) {
				Model.submarine.hit.forEach(function (h, i) {
					if (h == true) {
						count++;
					}
				});
				if (count == 3) {
					text = "You Win!";
					//	console.log(text);
				} else if (count == 2) {
					Model.submarine.hit.forEach(function (h, i) {
						if (h == false) {
							Model.nextsub = i;
						}
					});
				} else if (count == 1) {
					Model.submarine.hit.forEach(function (h, i) {
						//	console.log(h == false, Model.nextsub, i)
						if (h == false && Model.nextsub != i && flag == false) {
							flag = true;
							Model.nextsub = i;
						}
					});
				} else {
					Model.submarine.hit.forEach(function (h, i) {
						if (h == false) {
							if (flag == false) {
								//	console.log("flag")
								flag = true;
								Model.nextsub = (Model.prevsub + 1) % 3;
								//	console.log(Model.nextsub, Model.nextsub)
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
				//	console.log(count)
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
				this.layout.fireButton.enable();
				this.layout.stepper.enable();
				Model.submarine.hit.forEach(function (h, i) {
					if (h == false) {
						scope.layout["angle_" + (i + 1)].visible = true;
					}
				});
			} else {
				this.activePlayer.nextAngle();
				//	console.log("in else of auto")
			}

			if (this.activePlayer.auto) {
				setTimeout(function () {
					//	console.log("in fireclicked call")
					fireClicked.call(scope);
				}, 1000);
			}
		}
	}

	function checkWinner(e) {
		//	console.log("in checkWinner");
		//	console.log(Model.currentHit);

		var helAnglePoint,
		subAnglePoint,
		ended = false;
		helAnglePoint = Model.getPoint(Model.pointOnBoundry, 90, -90 * Maths.TO_RADIANS);
		subAnglePoint = Model.getPoint(Model.pointOnBoundry, 90, 90 * Maths.TO_RADIANS);

		if (Model.currentHit >= 0 && this.activePlayer.auto == false) {
			lab.layout["helAngle" + (Model.currentHit + 1)].text = Model.currentHelAngle.toFixed(1) + '\u00B0';
			lab.layout["subAngle" + (Model.currentHit + 1)].text = Model.currentSubAngle.toFixed(1) + '\u00B0';
			lab.layout["helAngle" + (Model.currentHit + 1)].x = helAnglePoint.x + 10;
			lab.layout["subAngle" + (Model.currentHit + 1)].x = subAnglePoint.x - 10;
			lab.layout["helAngle" + (Model.currentHit + 1)].visible = true;
			lab.layout["subAngle" + (Model.currentHit + 1)].visible = true;
		}

		if (Model.currentHit >= 0 && this.activePlayer.auto == true) {
			lab.layout["helAngle" + (Model.prevsub + 1)].text = Model.currentHelAngle.toFixed(1) + '\u00B0';
			lab.layout["subAngle" + (Model.prevsub + 1)].text = Model.currentSubAngle.toFixed(1) + '\u00B0';
			lab.layout["helAngle" + (Model.prevsub + 1)].x = helAnglePoint.x + 10;
			lab.layout["subAngle" + (Model.prevsub + 1)].x = subAnglePoint.x - 10;
			lab.layout["helAngle" + (Model.prevsub + 1)].visible = true;
			lab.layout["subAngle" + (Model.prevsub + 1)].visible = true;
		}
		var text,
		count = 0;
		if (!this.activePlayer.auto) {
			Model.submarine.hit.forEach(function (h, i) {
				if (h == true) {
					count++;
				}
			});
			if (count == 3) {
				ended = true;
				text = "You Win!";
				for (var i = 1; i <= 3; i++)
					this.layout["instruction" + i].visible = false;
				for (var j = 1; j <= 2; j++)
					this.layout["correct" + j].visible = true;
				//	console.log(text);
			}
		} else {
			Model.helicopter.hit.forEach(function (h, i) {
				if (h == true) {
					count++;
					text = "Computer Win!";
				}
			});
			if (count == 1) {
				ended = true;
				for (var i = 1; i <= 3; i++)
					this.layout["instruction" + i].visible = false;
				for (var j = 1; j <= 2; j++)
					this.layout["incorrect" + j].visible = true;
				//	console.log(text);
			}
		}
		if (!ended) {
			this.layout.fireButton.enable();
		}
	}

	function fireClicked(e) {
		var scope = this;
		//	console.log(e)
		//	console.log(this.layout.stepper.value)
		//	console.log(this.activePlayer)
		//	console.log(this.activePlayer)
		enableFire(false);
		var shape = new createjs.Shape();
		this.stage.addChild(shape)
		if (!this.activePlayer.auto) {
			Model.submarine.hit.forEach(function (h, i) {
				scope.layout["angle_" + (i + 1)].visible = false;
			});
			this.layout.fireButton.disable();
			this.activePlayer.fire(shape, this.layout.stepper.value);
		} else {
			this.activePlayer.fire(shape);
			//	this.activePlayer.nextAngle();
			//console.log("in else of auto")
		}
	}

	function displayAngles() {
		var scope = this;
		Model.submarine.hit.forEach(function (h, i) {
			if (h == false) {
				scope.layout["angle_" + (i + 1)].visible = true;
			}
		});
	}

	function enableFire(e) {
		// if(e)
		// 	this.layout.fireButton.enable();
		// else
		// 	this.layout.fireButton.enable(false);
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
		if(scope.activePlayer.auto){
			//	var cross = scope.layout["cross_h"];
			var crossPoint = Model.helicopter.options[0];
		}else{
			//	var cross = scope.layout["cross_s_" + (Model.currentHit+1)];
			var crossPoint = Model.submarine.options[Model.currentHit];
		}
		cross = new lib.cross();
		scope.stage.addChild(cross);
		cross.scaleX = cross.scaleY = 1;
		cross.visible = true;
		cross.x = crossPoint.x + (crossPoint.width/2);
		cross.y = crossPoint.y + (crossPoint.height/2);
		cross.visible = true;
		//	console.log(" in displayCross");
		Model.canvas.push(cross);
		scope.activePlayer.reset();
	}

	return Activity;
})();

Lab.data = {
	player1: {
		options: [{
				x: 928,
				y: 100,
			}
		]
	},
	player2: {
		options: [{
				x: 121.5,
				y: 596.6
			}, {
				x: 405.7,
				y: 588.94
			}, {
				x: 650.2,
				y: 566.72
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
			//	console.log("player 1")
			this._onDrag = this._onDrag.bind(this);
			this.arrow.addEventListener("drag", this._onDrag);
			this.auto = false;
		} else {
			//	console.log("player 2")
			this.auto = true;
		}
		//console.log(this.auto)
	}

	Class.prototype = {
		constructor: Class,
		reset: function () {
			//this.arrow.value = this._data.Vx;
			//	console.log(" in reset");
			this.currentStartPoint = null;
			this.touchedBoundry = false;
			this.pointOnSurface = null;
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
			var event = new createjs.Event("angleUpdated");
			this.dispatchEvent(event);
		},
		fire: function (shape, angle) {
			this.canvas = shape;
			Model.canvas.push(this.canvas);
			//console.log(this.canvas);
			if (!this.auto) {
				Model.helAngle = this.arrow.angle;
				this.arrow.visible = false;
				this.currentStartPoint = this.startPoints[0];
				this.firstPoint = this.currentStartPoint;
				this.cAngle = this.arrow.angle;
			} else {
				this.currentStartPoint = this.startPoints[Model.nextsub];
				this.firstPoint = this.currentStartPoint;
				Model.subAngle = this.cAngle;
			}
			this._tickCount = 0;
			createjs.Ticker.addEventListener("tick", this._tick);
		},
		pause: function () {
			//console.log("pause")
			createjs.Ticker.removeEventListener("tick", this._tick);
		},
		nextAngle: function () {
			if (Model.nextsub >= 0){
				var variation = Model.randomNumber(0,6);
				this.angle = this.cAngle = Model.submarine.Angles[Model.nextsub] - Model.variation[variation];
			}
		},
		refractedAngle: function (angle) {
			//console.log(angle)
			if (!this.auto) {
				if (90 - angle < 0)
					var angle = 90 + Math.asin(Math.sin((angle - 90) * Maths.TO_RADIANS) / 1.33) * Maths.TO_DEGREES;
				else
					var angle = 90 - Math.asin(Math.sin((90 - angle) * Maths.TO_RADIANS) / 1.33) * Maths.TO_DEGREES;
				Model.subAngle = angle;
			} else {
				//	console.log(angle)
				var angle = -90 + Math.asin(Math.sin((90 + angle) * Maths.TO_RADIANS) * 1.33) * Maths.TO_DEGREES;
				//	console.log(angle)
				Model.helAngle = angle;
			}
			return angle;
		},
		_checkHit: function (point) {
			var status = false;
			var curr = null;
			if (!this.auto) {
				Model.submarine.options.forEach(function (s, i) {
					if (Model.submarine.hit[i] == false) {
						
						if(s.y <= point.y && s.y + s.height >= point.y) 
							console.log(point , s)
						if (s.x <= point.x && s.x + s.width >= point.x && s.y + (s.height/2) <= point.y && s.y + s.height >= point.y) {
							status = true;
							Model.submarine.hit[i] = true;
							Model.currentHit = i;
							//	console.log(point)
							//	console.log(i, Model.currentHit)
						}
					}
				});
			} else {
				Model.helicopter.options.forEach(function (s, i) {
					if (s.x <= point.x && s.x + s.width >= point.x && s.y + (s.height / 2) <= point.y && s.y + s.height >= point.y) {
						status = true;
						Model.helicopter.hit[i] = true;
						Model.currentHit = i;
						//	console.log(i, Model.currentHit)
					}
				});
			}
			return status;
		},
		drawAngles: function () {
			this.drawDotted(this.pointOnSurface.x, 0, this.pointOnSurface.x, 750, 15)
			this.drawArc();
		},
		drawArc: function () {
			var point = this.pointOnSurface;
			Model.pointOnBoundry = point;
			var displayHelAngle = Model.helAngle >= 0 ? Model.helAngle - 90 : 90 + Model.helAngle,
			displaySubAngle = Model.subAngle >= 0 ? Model.subAngle - 90 : (90 + Model.subAngle);
			//	console.log(Model.helAngle, Model.subAngle, displayHelAngle, displaySubAngle, this.canvas)

			Model.currentHelAngle = displayHelAngle;
			Model.currentSubAngle = displaySubAngle;
			var firstHelPoint,
			firstSubPoint;
			firstHelPoint = Model.getPoint(point, -90 * Maths.TO_RADIANS, 50);
			firstSubPoint = Model.getPoint(point, 90 * Maths.TO_RADIANS, 50);
			var textHelPoint = Model.getPoint(point, (-90 + (displayHelAngle / 2)) * Maths.TO_RADIANS, 100);

			if (this.auto) {
				this.canvas.graphics.setStrokeStyle(2).moveTo(firstHelPoint.x, firstHelPoint.y).beginStroke("#000000");
				this.canvas.graphics.arc(point.x, point.y, 90, -90 * Maths.TO_RADIANS,  - (90 - displayHelAngle) * Maths.TO_RADIANS);
				this.canvas.graphics.endStroke();
				this.canvas.graphics.setStrokeStyle(2).moveTo(firstSubPoint.x, firstSubPoint.y).beginStroke("#000000");
				this.canvas.graphics.arc(point.x, point.y, 90, 90 * Maths.TO_RADIANS, (displaySubAngle + 90) * Maths.TO_RADIANS);
				this.canvas.graphics.endStroke();
			} else {
				this.canvas.graphics.setStrokeStyle(2).moveTo(firstHelPoint.x, firstHelPoint.y).beginStroke("#000000");
				this.canvas.graphics.arc(point.x, point.y, 90, -90 * Maths.TO_RADIANS,  - (90 - displayHelAngle) * Maths.TO_RADIANS);
				this.canvas.graphics.endStroke();
				this.canvas.graphics.setStrokeStyle(2).moveTo(firstSubPoint.x, firstSubPoint.y).beginStroke("#000000");
				this.canvas.graphics.arc(point.x, point.y, 90, 90 * Maths.TO_RADIANS, Model.subAngle * Maths.TO_RADIANS);
				this.canvas.graphics.endStroke();
			}

		},
		drawDotted: function (x1, y1, x2, y2, dashLen) {
			if (dashLen == undefined)
				dashLen = 2;
			this.canvas.graphics.setStrokeStyle(3).moveTo(x1, y1).beginStroke("#000000");

			var dX = x2 - x1;
			var dY = y2 - y1;
			var dashes = Math.floor(Math.sqrt(dX * dX + dY * dY) / dashLen);
			var dashX = dX / dashes;
			var dashY = dY / dashes;

			var q = 1;
			while (q++ < dashes) {
				x1 += dashX;
				y1 += dashY;
				if (q % 2 == 0) {
					this.canvas.graphics.moveTo(x1, y1);
				} else {
					this.canvas.graphics.lineTo(x1, y1);
				}
			}
			this.canvas.graphics.moveTo(x1, y1).endStroke();
		},
		_tick: function () {
			//console.log("in tick")
			var curr = Model.getPoint(this.currentStartPoint, this.cAngle * Maths.TO_RADIANS, Model.step);
			//	console.log(curr)
			curr.x = Model.pointToPixel(curr.x),
			curr.y = Model.pointToPixel(curr.y);
			if (curr.x > Model.boundry.xMin && curr.x < Model.boundry.xMax && curr.y > Model.boundry.yMin && curr.y < Model.boundry.yMax) {
				if (!this.auto) {
					if (curr.y >= Model.waterBoundry) {
						var hit = this._checkHit(curr);
						if (Model.canvasData) {}
						//	console.log(hit)
						if (!hit) {
							if (this.touchedBoundry == false) {
								this.pointOnSurface = this.currentStartPoint;
								this.touchedBoundry = true;

								this.cAngle = this.refractedAngle(this.angle);
								//	console.log(this.cAngle, Math.asin(Math.sin((90 - this.arrow.angle) * Maths.TO_RADIANS) * 1.33) * Maths.TO_DEGREES)
								curr = Model.getPoint(this.currentStartPoint, this.cAngle * Maths.TO_RADIANS, Model.step);
								curr.x = Model.pointToPixel(curr.x),
								curr.y = Model.pointToPixel(curr.y);
								//	console.log(curr)
							}
							this.canvas.graphics.clear().setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.firstPoint.x, this.firstPoint.y).lineTo(this.pointOnSurface.x, this.pointOnSurface.y).endStroke();
							this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.pointOnSurface.x, this.pointOnSurface.y).lineTo(curr.x, curr.y).endStroke();
						} else {
							//	console.log(Model.currentHit);
							this.arrow.visible = true;
							//	console.log(cross, Model.currentHit);
							this.canvas.graphics.clear().setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.firstPoint.x, this.firstPoint.y).lineTo(this.pointOnSurface.x, this.pointOnSurface.y).endStroke();
							this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.pointOnSurface.x, this.pointOnSurface.y).lineTo(curr.x, curr.y).endStroke();
							//	this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(cross.x, cross.y).lineTo(cross.x + cross.width, cross.y + cross.height).endStroke();
							//	this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(cross.x + cross.width, cross.y).lineTo(cross.x, cross.y + cross.height).endStroke();
							//	Model.canvasData = this.canvas.graphics.clone();
							this.dispatchEvent("playAnimation");
							this.drawAngles();
							this.pause();
							this.dispatchEvent("checkWinner");
							this.dispatchEvent("displayAngles");
						}
					} else {
						this.canvas.graphics.clear().setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.firstPoint.x, this.firstPoint.y).lineTo(curr.x, curr.y).endStroke();
					}
				} else if (this.auto) {
					if (curr.y <= Model.waterBoundry - 4) {
						var hit = this._checkHit(curr);
						if (Model.canvasData) {}
						//	console.log(hit)
						if (!hit) {
							if (this.touchedBoundry == false) {
								this.pointOnSurface = this.currentStartPoint;
								this.touchedBoundry = true;

								this.cAngle = this.refractedAngle(this.angle);
								curr = Model.getPoint(this.currentStartPoint, this.cAngle * Maths.TO_RADIANS, Model.step);
								curr.x = Model.pointToPixel(curr.x),
								curr.y = Model.pointToPixel(curr.y);
								//	console.log(curr)
							}
							this.canvas.graphics.clear().setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.firstPoint.x, this.firstPoint.y).lineTo(this.pointOnSurface.x, this.pointOnSurface.y).endStroke();
							this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.pointOnSurface.x, this.pointOnSurface.y).lineTo(curr.x, curr.y).endStroke();
						} else {
							this.pause();
							var cross = Model.helicopter.options[Model.currentHit];
							//	console.log(cross, Model.currentHit);
							this.canvas.graphics.clear().setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.firstPoint.x, this.firstPoint.y).lineTo(this.pointOnSurface.x, this.pointOnSurface.y).endStroke();
							this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.pointOnSurface.x, this.pointOnSurface.y).lineTo(curr.x, curr.y).endStroke();
							//	this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(cross.x, cross.y).lineTo(cross.x + cross.width, cross.y + cross.height).endStroke();
							//	this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(cross.x + cross.width, cross.y).lineTo(cross.x, cross.y + cross.height).endStroke();
							//	Model.canvasData = this.canvas.graphics.clone();
							this.dispatchEvent("playAnimation");
							Model.canvas.push(this.canvas);
							this.drawAngles();
							this.dispatchEvent("checkWinner");
						}
					} else {
						this.canvas.graphics.clear().setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.firstPoint.x, this.firstPoint.y).lineTo(curr.x, curr.y).endStroke();
					}
				}
			} else {
				//	console.log("in else boundry")
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
				x: 894.4,
				y: 69,
				width: 109.2,
				height: 32.2,
				startX: 894.4,
				startY: 117.4,
			}
		],
		hit: [false]
	},
	submarine: {
		options: [{
				x: 100.2,
				y: 592.9,
				width: 43,
				height: 11
			}, {
				x: 390.4,
				y: 585.15,
				width: 40.4,
				height: 11
			}, {
				x: 632.5,
				y: 561,
				width: 59,
				height: 15.25
			}
		],
		hit: [false, false, false],
		Angles: [-46.8, -53.5, -66.1]
	},
	step: 8,
	unit: 1,
	currentHit: -1,
	nextsub: -1,
	prevsub: -1,
	variation: [-4,-2,-1,0,1,2,4],
	canvasData: null,
	currentHelAngle: null,
	currentSubAngle: null,
	pointOnBoundry: null,
	waterBoundry: 368,
	canvas: [],
	boundry: {
		xMin: 0,
		xMax: 1100,
		yMin: 0,
		yMax: 725,
	}
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
