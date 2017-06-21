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
		this._enableGo = enableGo.bind(this);
		this._angleUpdated = angleUpdated.bind(this);
		this._updateVelocity = updateVelocity.bind(this);
		this._playAnimation = playAnimation.bind(this);
		this._enableDisableUser = enableDisableUser.bind(this);

		this.player_1.addEventListener("playAnimation", this._playAnimation);
		this.player_2.addEventListener("playAnimation", this._playAnimation);
		this.player_3.addEventListener("playAnimation", this._playAnimation);
		this.player_4.addEventListener("playAnimation", this._playAnimation);
		this.player_5.addEventListener("playAnimation", this._playAnimation);
		this.player_6.addEventListener("playAnimation", this._playAnimation);

		this.player_1.addEventListener("checkWinner", this._checkWinner);
		this.player_2.addEventListener("checkWinner", this._checkWinner);
		this.player_3.addEventListener("checkWinner", this._checkWinner);
		this.player_4.addEventListener("checkWinner", this._checkWinner);
		this.player_5.addEventListener("checkWinner", this._checkWinner);
		this.player_6.addEventListener("checkWinner", this._checkWinner);

		this.player_1.addEventListener("enableGo", this._enableGo);
		this.player_2.addEventListener("enableGo", this._enableGo);
		this.player_3.addEventListener("enableGo", this._enableGo);
		this.player_4.addEventListener("enableGo", this._enableGo);
		this.player_5.addEventListener("enableGo", this._enableGo);
		this.player_6.addEventListener("enableGo", this._enableGo);

		this.player_1.addEventListener("updateVelocity", this._updateVelocity);
		this.player_2.addEventListener("updateVelocity", this._updateVelocity);
		this.player_3.addEventListener("updateVelocity", this._updateVelocity);
		this.player_4.addEventListener("updateVelocity", this._updateVelocity);
		this.player_5.addEventListener("updateVelocity", this._updateVelocity);
		this.player_6.addEventListener("updateVelocity", this._updateVelocity);

		this.player_1.addEventListener("enableDisableUser", this._enableDisableUser);
		this.player_2.addEventListener("enableDisableUser", this._enableDisableUser);
		this.player_3.addEventListener("enableDisableUser", this._enableDisableUser);
		this.player_4.addEventListener("enableDisableUser", this._enableDisableUser);
		this.player_5.addEventListener("enableDisableUser", this._enableDisableUser);
		this.player_6.addEventListener("enableDisableUser", this._enableDisableUser);

		this.player_1.addEventListener("angleUpdated", this._angleUpdated);
		this.player_3.addEventListener("angleUpdated", this._angleUpdated);
		this.player_5.addEventListener("angleUpdated", this._angleUpdated);

		this.layout.goButton.addEventListener("click", this._goClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);

		this.layout.goButton.enable();
	}

	Activity.prototype.reset = function () {
		//	console.log(" in reset")
		// console.log(this);
		clearInterval(Model.timeout)
		var scope = this;
		this.player_1.pause();
		this.player_2.pause();
		this.player_3.pause();
		this.player_4.pause();
		this.player_5.pause();
		this.player_6.pause();
		var mc = scope.layout.blast;
		mc.visible = false;
		mc.uncache();
		mc.gotoAndStop(0);		
		Model.actComplete = false;
		scope.layout.goButton.enable();
		Model.submarine.hit = [false, false, false];
		Model.helicopter.hit = [false, false, false];
		Model.canvas.forEach(function (c, i) {
			scope.stage.removeChild(Model.canvas[i]);
		});
		this.player_1.reset();
		this.player_3.reset();
		this.player_5.reset();
		this.player_1._arrow(1);
		this.player_3._arrow(1);
		this.player_5._arrow(1);
		this.activePlayer = this.player_1;
		this.activePlayer.enable();
		this.player_3.enable();
		this.player_5.enable();
		this.activePlayer.angle = 90;
		this.player_3.angle = 90;
		this.player_5.angle = 90;
		this.layout.velocity1.text = "0.0";
		this.layout.velocity2.text = "0.0";
		this.layout.velocity3.text = "0.0";
		this.playerIndex = 0;
		Model.currentHit = -1;
		Model.nextsub = -1;
		Model.prevsub = -1;
		Model.canvasData = null;
		Model.currentHelAngle = null;
		Model.currentSubAngle = null;
		this.layout.correct.visible = false;
		this.layout.incorrect.visible = false;
		this.layout.instructionU1.visible = false;
		this.layout.instructionU2.visible = false;
		this.layout.instructionU3.visible = false;
		this.layout.instructionC1.visible = false;
		this.layout.instructionC2.visible = false;
		this.layout.instructionC3.visible = false;
	}

	function angleUpdated(e) {
		var scope = this;
		//console.log(e.id)
		scope.layout.goButton.enable();
		Model.players.user.forEach(function (p, i) {
			if (p.id != e.id) {
				p.arrow.angle = 90;
				p._arrow(1);
				//	console.log(p.id)
			} else {
				scope.activePlayer = p;
				scope.playerIndex = p.playerIndex;
				//	console.log(p)
			}
		});
	}

	function updateVelocity(e) {
		//	console.log(e.status, this.playerIndex / 2 + 1)
		var velocity;
		if(e.boundry){
			velocity = (0).toFixed(1);		
			this.layout["velocity" + (Math.floor(this.playerIndex / 2) * 1 + 1)].text = velocity;	
		}else if (!e.status) {
			if (this.activePlayer.auto) {
				velocity = (3 / Model.refractiveIndex[this.playerIndex]).toFixed(1);
			} else {
				velocity = (3).toFixed(1);
			}
			//	console.log("velocity" + (Math.floor(this.playerIndex / 2) * 1 + 1))
			this.layout["velocity" + (Math.floor(this.playerIndex / 2) * 1 + 1)].text = velocity;
		} else if (e.status) {
			if (this.activePlayer.auto) {
				velocity = (3).toFixed(1);
			} else {
				velocity = (3 / Model.refractiveIndex[this.playerIndex]).toFixed(1);
			}
			//	console.log("velocity" + (Math.floor(this.playerIndex / 2) * 1 + 1))
			this.layout["velocity" + (Math.floor(this.playerIndex / 2) * 1 + 1)].text = velocity;
		}
	}

	function createPlayers() {
		var scope = this,
		i,
		j,
		p1Data = Lab.data.player1,
		p2Data = Lab.data.player2;

		var a = new VectorLine(this.layout.arrowLeft, {
				x: 55,
				y: 85
			}, {
				min: 60,
				max: 60
			}, {
				min: 0,
				max: 360
			}, this.layout.arrowLeftLine, {
				color: "#0000ff",
				lineWidth: 2,
				direction: "left"
			});
		var e = {
			stageX: 55,
			stageY: 200
		};
		a._drag(e);
		a.enable();

		this.player_1 = new Player(Model.submarine.options, a, "player_1", Model.boundry[0]);
		this.player_1.startPoints = Lab.data.player1.options[0];
		this.player_1.playerIndex = 0;

		this.player_2 = new Player(Model.helicopter.options, null, "player_2", Model.boundry[0]);
		this.player_2.startPoints = Lab.data.player2.options[0];
		this.player_2.playerIndex = 1;

		this.player_1.reset();
		this.player_2.reset();

		var a1 = new VectorLine(this.layout.arrowMiddle, {
				x: 390,
				y: 75
			}, {
				min: 60,
				max: 60
			}, {
				min: 0,
				max: 360
			}, this.layout.arrowMiddleLine, {
				color: "#0000ff",
				lineWidth: 2,
				direction: "left"
			});
		var e = {
			stageX: 390,
			stageY: 200
		};
		a1._drag(e);
		a1.enable();

		this.player_3 = new Player(Model.submarine.options, a1, "player_3", Model.boundry[1]);
		this.player_3.startPoints = Lab.data.player1.options[1];
		this.player_3.playerIndex = 2;

		this.player_4 = new Player(Model.helicopter.options, null, "player_4", Model.boundry[1]);
		this.player_4.startPoints = Lab.data.player2.options[1];
		this.player_4.playerIndex = 3;

		this.player_3.reset();
		this.player_4.reset();

		var a2 = new VectorLine(this.layout.arrowRight, {
				x: 735,
				y: 80
			}, {
				min: 60,
				max: 60
			}, {
				min: 0,
				max: 360
			}, this.layout.arrowRightLine, {
				color: "#0000ff",
				lineWidth: 2,
				direction: "left"
			});
		var e = {
			stageX: 735,
			stageY: 200
		};
		a2._drag(e);
		a2.enable();

		this.player_5 = new Player(Model.submarine.options, a2, "player_5", Model.boundry[2]);
		this.player_5.startPoints = Lab.data.player1.options[2];
		this.player_5.playerIndex = 4;

		this.player_6 = new Player(Model.helicopter.options, null, "player_6", Model.boundry[2]);
		this.player_6.startPoints = Lab.data.player2.options[2];
		this.player_6.playerIndex = 5;

		this.player_5.reset();
		this.player_6.reset();

		Model.players.user.push(this.player_1);
		Model.players.user.push(this.player_3);
		Model.players.user.push(this.player_5);
		
		Model.players.comp.push(this.player_2);
		Model.players.comp.push(this.player_4);
		Model.players.comp.push(this.player_6);

		this.activePlayer = this.player_1;
		this.playerIndex = this.activePlayer.playerIndex;

		this._hit = hit.bind(this);
		this.player_1.addEventListener("hit", this._hit);
		this.player_2.addEventListener("hit", this._hit);
		this.player_3.addEventListener("hit", this._hit);
		this.player_4.addEventListener("hit", this._hit);
		this.player_5.addEventListener("hit", this._hit);
		this.player_6.addEventListener("hit", this._hit);

		//	console.log(this.player1.startPoints);
		//	console.log(this.player2.startPoints);
		//	console.log(this.player3.startPoints);
		//	console.log(this.player4.startPoints);
		//	console.log(this.player5.startPoints);
		//	console.log(this.player6.startPoints);

		//	console.log( Lab.data.player2);
		//	console.log( Lab.data.player1);
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

			//	console.log(this.activePlayer.id)
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
		//	console.log(this.playerIndex)
		if (count < 3) {
			if (!this.hasOwnProperty("playerIndex")) {
				this.playerIndex = 0;
			} else {
				if (!this.activePlayer.auto) {			
					this.activePlayer = this["player_" + (this.activePlayer.playerIndex + 2)];
					this.activePlayer.enable();
					this.playerIndex = this.activePlayer.playerIndex;
				} else {
					this.activePlayer = this["player_" + (this.activePlayer.playerIndex)];
					this.activePlayer.enable();
					this.playerIndex = this.activePlayer.playerIndex;
				}
			}
			//	console.log(this.playerIndex)
			//	console.log(this.activePlayer.auto)
			//	console.log( this["player" + (this.playerIndex + 1)])


			//	console.log(this.playerIndex)
			if (this.activePlayer) {
				if (!this.activePlayer.auto) {
					//	console.log("not auto");
					enableDisableUser(true);
					this.layout.goButton.enable();
				} else {
					this.activePlayer.nextAngle();
					//	console.log("in else of auto")
				}

				if (this.activePlayer.auto) {
					Model.timeout = setTimeout(function () {
						//	console.log("in goClicked call")
						goClicked.call(scope);
					}, 1000);
				}
			}
		}
	}

	function checkWinner(e) {
		//	console.log("in checkWinner");
		//	console.log(Model.currentHit);
		/*
		var text,
		count = 0;
		if (!this.activePlayer.auto) {
		Model.submarine.hit.forEach(function (h, i) {
		if (h == true) {
		count++;
		}
		});
		if (count == 3) {
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
		for (var i = 1; i <= 3; i++)
		this.layout["instruction" + i].visible = false;
		for (var j = 1; j <= 2; j++)
		this.layout["incorrect" + j].visible = true;
		//	console.log(text);
		}
		}*/

		this.layout.velocity1.text = "0.0";
		this.layout.velocity2.text = "0.0";
		this.layout.velocity3.text = "0.0";

		var countsub = 0,
		counthel = 0;
		Model.submarine.hit.forEach(function (h, i) {
			if (h == true) {
				countsub++;
			}
		});

		Model.helicopter.hit.forEach(function (h, i) {
			if (h == true) {
				counthel++;
			}
		});
		if ((countsub + counthel) == 3) {
			if (countsub > counthel) {
				this.layout.correct.visible = true;
				this.layout.instructionU1.visible = true;
				this.layout.instructionU2.visible = true;
				this.layout.instructionU3.visible = true;
				Model.actComplete = true;
				//	console.log("user hit more than computer");
			} else if (countsub < counthel) {
				this.layout.incorrect.visible = true;
				this.layout.instructionC1.visible = true;
				this.layout.instructionC2.visible = true;
				this.layout.instructionC3.visible = true;
				//	console.log(" computer hit more than computer user");
				Model.actComplete = true;
			}
			this.layout.goButton.enable();
		} else{
			enableDisableUser(true);
		}
	}

	function goClicked(e) {
		//	console.log(e)
		//	console.log(this.layout.stepper.value)
		//	console.log(this.activePlayer)
		//	console.log(this.activePlayer)
		if(Model.actComplete){
			this.reset();
		}else{
		enableGo(false);
		var shape = new createjs.Shape();
		this.stage.addChildAt(shape,0);
		var shape2 = new createjs.Shape();
		this.stage.addChild(shape2);
		if (!this.activePlayer.auto) {
			this.activePlayer.fire(shape, shape2, this.activePlayer.arrow.value);
			this.layout.goButton.disable();
			enableDisableUser(false);
		} else {
			this.activePlayer.fire(shape, shape2);
		}}
	}

	function enableDisableUser(action) {
		//	console.log("in enabledisable");
		Model.players.user.forEach(function (p, i) {
			if(action){
				//	console.log((p.playerIndex/2))
				if(Model.helicopter.hit[(p.playerIndex/2)] == false && Model.submarine.hit[(p.playerIndex/2)] == false )
					p.enable();
			}else{
				p.disable();
			}
		});
	}

	function enableGo(e) {
		// if(e)
		// 	this.layout.goButton.enable();
		// else
		// 	this.layout.goButton.enable(false);
	}

	function playAnimation(e) {
		var scope = this;
		scope.layout.goButton.disable();
		if (scope.activePlayer.auto) {
			var blast = Model.helicopter.options[Model.currentHit];
		} else {
			var blast = Model.submarine.options[Model.currentHit];
		}
		mc = scope.layout.blast;
		mc.visible = true;
		mc.x = blast.x + (blast.width / 2);
		mc.y = blast.y + (blast.height / 2);
		mc.uncache();
		mc.addEventListener("tick", function () {
			if (mc.currentFrame == mc.totalFrames - 1) {
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
		//	if (scope.activePlayer.auto) {
		//		// var cross = scope.layout["cross_h_" + (Model.currentHit+1)];
		//		var crossPoint = Model.helicopter.options[Model.currentHit];
		//	} else {
		//		// var cross = scope.layout["cross_s_" + (Model.currentHit+1)];
		//		var crossPoint = Model.submarine.options[Model.currentHit];
		//	}
		//	cross = new lib.cross();
		//	scope.stage.addChild(cross);
		//	cross.scaleX = cross.scaleY = 1;
		//	cross.visible = true;
		//	cross.x = crossPoint.x + (crossPoint.width / 2);
		//	cross.y = crossPoint.y + (crossPoint.height / 2);
		//	//	console.log(" in displayCross");
		//	Model.canvas.push(cross);
		//	scope.activePlayer.reset(); 
	}

	return Activity;
})();

Lab.data = {
	player1: {
		options: [{
				x: 55,
				y: 85
			}, {
				x: 390,
				y: 75
			}, {
				x: 735,
				y: 80
			}
		]
	},
	player2: {
		options: [{
				x: 299.5,
				y: 663.15
			}, {
				x: 630,
				y: 674.2
			}, {
				x: 981.25,
				y: 636.05
			}
		],
	}
}

var Player = (function () {
	function Class(targetPointers, arrow, id, boundry) {
		this._data = {};
		this.canvas;
		this.id = id;
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
		this.boundry = boundry;
		this.pointOnSurface = null;
		this.touchedBoundry = false;
		this.aAngle = false;

		targetPointers.forEach(function (p, i) {
			this.data("point" + i, false);
		}, this);

		this._tick = this._tick.bind(this);
		if (this.arrow) {
			this._onDrag = this._onDrag.bind(this);
			this.arrow.addEventListener("drag", this._onDrag);
			this.auto = false;
		} else {
			//	console.log("player 2")
			this.auto = true;
		}
		//console.log(this.auto,this.playerIndex)
	}

	Class.prototype = {
		constructor: Class,
		reset: function () {
			//this.arrow.value = this._data.Vx;
			this.currentStartPoint = null;
			this.pointOnSurface = null;
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
			//	console.log(this.id, this.playerIndex)
			this._arrow(2);
			var event = new createjs.Event("angleUpdated");
			event.id = this.id;
			this.dispatchEvent(event);
		},
		fire: function (shape, shape2, angle) {
			//	console.log("in fire")
			this.canvas = shape;
			this.cross = shape2;
			Model.canvas.push(this.canvas);
			Model.canvas.push(this.cross);
			//	console.log(this.canvas);
			if (!this.auto) {
				Model.helAngle = this.arrow.angle;
				this.arrow.visible = false;
				this.currentStartPoint = this.startPoints;
				this.firstPoint = this.currentStartPoint;
				this.cAngle = this.arrow.angle;
			} else {
				this.currentStartPoint = this.startPoints;
				this.firstPoint = this.currentStartPoint;
				Model.subAngle = this.cAngle;
			}
			this._tickCount = 0;
			e = new createjs.Event("updateVelocity");
			e.status = this.touchedBoundry;
			this.dispatchEvent(e);
			createjs.Ticker.addEventListener("tick", this._tick);
		},
		pause: function () {
			// console.log("pause")
			createjs.Ticker.removeEventListener("tick", this._tick);
		},
		nextAngle: function () {
			//	console.log("in next angle " + (this.playerIndex + 1) / 2)
			var variation = Model.randomNumber(0,4);
			this.angle = this.cAngle = Model.submarine.Angles[(this.playerIndex - 1) / 2] - Model.variation[variation];
		},
		refractedAngle: function (angle) {
			//	console.log(angle, this.id.split("_")[1] * 1)
			var index = (this.id.split("_")[1] * 1) - 1;
			if (!this.auto) {
				var angle = 90 - Math.asin(Math.sin((90 - angle) * Maths.TO_RADIANS) / Model.refractiveIndex[index]) * Maths.TO_DEGREES;
				//	console.log(angle)
				Model.subAngle = angle;
			} else {
				//console.log(angle)
				var angle = -90 + Math.asin(Math.sin((angle + 90) * Maths.TO_RADIANS) * Model.refractiveIndex[index]) * Maths.TO_DEGREES;
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
						if (s.x <= point.x && s.x + s.width >= point.x && s.y + (s.height / 3) <= point.y && s.y + s.height >= point.y) {
							status = true;
							Model.submarine.hit[i] = true;
							Model.currentHit = i;
							//console.log(i, Model.currentHit)
						}
					}
				});
			} else {
				Model.helicopter.options.forEach(function (s, i) {
					if (s.x <= point.x && s.x + s.width >= point.x && s.y <= point.y && s.y + (2 * s.height / 3) >= point.y) {
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
				var cross = Model.submarine.options[Model.currentHit];
			}else{
				var cross = Model.helicopter.options[Model.currentHit];
			}
			this.cross.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(cross.x, cross.y).lineTo(cross.x + cross.width, cross.y + cross.height).endStroke();
			this.cross.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(cross.x + cross.width, cross.y).lineTo(cross.x, cross.y + cross.height).endStroke();
			this.reset();
			this.dispatchEvent("checkWinner");
		},
		_tick: function () {
			//	console.log("in tick", this.id)
			var step;
			if (this.touchedBoundry == false) {
				if (this.auto) {
					step = Model.step / Model.refractiveIndex[(this.id.split("_")[1] * 1) - 1];
				} else {
					step = Model.step;
				}
			} else {
				if (this.auto) {
					step = Model.step;
				} else {
					step = Model.step / Model.refractiveIndex[(this.id.split("_")[1] * 1) - 1];
				}
			}
			var curr = Model.getPoint(this.currentStartPoint, this.cAngle * Maths.TO_RADIANS, step);
			//	console.log(curr)
			curr.x = Model.pointToPixel(curr.x),
			curr.y = Model.pointToPixel(curr.y);
			if (curr.x > this.boundry.xMin && curr.x < this.boundry.xMax && curr.y > this.boundry.yMin && curr.y < this.boundry.yMax) {
				if (!this.auto) {
					if (curr.y >= Model.waterBoundry) {
						var hit = this._checkHit(curr);
						//	console.log(hit)
						if (!hit) {
							if (this.touchedBoundry == false) {
								this.pointOnSurface = this.currentStartPoint;
								this.touchedBoundry = true;
								e = new createjs.Event("updateVelocity");
								e.status = this.touchedBoundry;
								this.dispatchEvent(e);

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
							this.pause();
							d = new createjs.Event("updateVelocity");
							d.boundry = true;
							this.dispatchEvent(d);
							Model.submarine.hit[Model.currentHit] = true;
							//	console.log(cross, Model.currentHit);
							this.canvas.graphics.clear().setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.firstPoint.x, this.firstPoint.y).lineTo(this.pointOnSurface.x, this.pointOnSurface.y).endStroke();
							this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.pointOnSurface.x, this.pointOnSurface.y).lineTo(curr.x, curr.y).endStroke();

							//	this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(cross.x, cross.y).lineTo(cross.x + cross.width, cross.y + cross.height).endStroke();
							//	this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(cross.x + cross.width, cross.y).lineTo(cross.x, cross.y + cross.height).endStroke();
							//	this.drawAngles();
							this.dispatchEvent("playAnimation");
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
								e = new createjs.Event("updateVelocity");
								e.status = this.touchedBoundry;
								this.dispatchEvent(e);

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
							d = new createjs.Event("updateVelocity");
							d.boundry = true;
							this.dispatchEvent(d);
							var cross = Model.helicopter.options[Model.currentHit];
							Model.helicopter.hit[Model.currentHit] = true;
							//console.log(cross, Model.currentHit);
							this.canvas.graphics.clear().setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.firstPoint.x, this.firstPoint.y).lineTo(this.pointOnSurface.x, this.pointOnSurface.y).endStroke();
							this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(this.pointOnSurface.x, this.pointOnSurface.y).lineTo(curr.x, curr.y).endStroke();
							//	this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(cross.x, cross.y).lineTo(cross.x + cross.width, cross.y + cross.height).endStroke();
							//	this.canvas.graphics.setStrokeStyle(this.canvasData.lineWidth).beginStroke(this.canvasData.color).moveTo(cross.x + cross.width, cross.y).lineTo(cross.x, cross.y + cross.height).endStroke();
							//	Model.canvasData = this.canvas.graphics.clone();
							//	this.drawAngles();
							this.dispatchEvent("playAnimation");
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
				d = new createjs.Event("updateVelocity");
				d.boundry = true;
				this.dispatchEvent(d);
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
	players: {comp:[],user:[]},
	helicopter: {
		options: [{
				x: 9.8,
				y: 56.5,
				width: 109.2,
				height: 32.2,
			}, {
				x: 366.5,
				y: 54.13,
				width: 59.8,
				height: 23.95,
			}, {
				x: 715.4,
				y: 61,
				width: 51,
				height: 24.2,
			}
		],
		hit: [false, false, false],
	},
	submarine: {
		options: [{
				x: 278.2,
				y: 657.7,
				width: 42.6,
				height: 10.9
			}, {
				x: 600.9,
				y: 666.8,
				width: 58.2,
				height: 14.8
			}, {
				x: 960.2,
				y: 630.7,
				width: 42.1,
				height: 10.7
			}
		],
		hit: [false, false, false],
		Angles: [-112, -103, -100]
	},
	refractiveIndex: [1, 1, 2, 2, 3, 3],
	step: 8,
	unit: 1,
	currentHit: -1,
	actComplete : false,
	variation: [-2,-1,0,1,2],
	nextsub: -1,
	prevsub: -1,
	timeout: null,
	canvasData: null,
	currentHelAngle: null,
	currentSubAngle: null,
	pointOnBoundry: null,
	waterBoundry: 418,
	canvas: [],
	boundry: [{
			xMin: 0,
			xMax: 342,
			yMin: 0,
			yMax: 725,
		}, {
			xMin: 343,
			xMax: 684,
			yMin: 0,
			yMax: 725,
		}, {
			xMin: 684,
			xMax: 1026,
			yMin: 0,
			yMax: 725,
		}
	]
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
