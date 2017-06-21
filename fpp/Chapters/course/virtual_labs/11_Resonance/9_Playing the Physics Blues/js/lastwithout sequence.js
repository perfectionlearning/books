var Lab = (function () {
	var scope;

	function Activity() {
		createjs.Container.call(this);
	}

	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function () {
		scope = this;
		this.reset = this.reset.bind(this);
		this._playClicked = playClicked.bind(this);
		this._playAnimation = playAnimation.bind(this);
		this._drag = drag.bind(this);
		this._checkClick = checkClick.bind(this);
		this._buttonClick = buttonClick.bind(this);
		this._updateFrqText = updateFrqText.bind(this);
		//	this.tick = tick.bind(this);
		this._set = set.bind(this);
		this._handdrag = handdrag.bind(this);
		this._redhandset = redhandset.bind(this);

		this.layout.stepper.enable();
		this.layout.stepper.addEventListener("valueChange", this._set);

		this.layout.resetButton.enable().addEventListener("click", this.reset);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);
		for (i = 0; i <= 150; i++) {
			k = i + 24;
			for (j = 1; j <= 17; j++) {
				for (l = 1; l <= 4; l++) {
					if (i <= ((Model.waveLength["wave_" + j] * l) / 4)) {
						Model.wavePoints["length_" + l]["wave_" + j].push({
							x: k * 5,
							y: Model.amplitude * Math.sin(((Model.phasediff * i) / ((Model.waveLength["wave_" + j] * l) / 4)))
						});
					}
				}
			}
		}

		for (f in Model.dataWave.bass) {
			var array = Model.dataWave.bass[f];
			//console.log(array.bposition, array.hand, array.hposition, array.length);
			var max;
			bridgePos = array.bposition;
			length = array.length;
			if (array.hand) {
				max = array.hposition;
			} else {
				max = 1;
			}

			for (i = 0; i <= 150; i++) {
				k = i + 24;

				//	for  wave
				if (i <= ((150 * length) / bridgePos)) {
					//	console.log(i)
					array.wave.push({
						x: k * 5,
						y: Model.amplitude * Math.sin(((Model.phasediff * i * bridgePos) / ((150 * length * max))))
					});
				}
			}

			//	for bridge
			Model.ratio.forEach(function (r, k) {
				array.bridgePoints.push((((Model.hand.x.max - Model.hand.x.min) / r) * length) + Model.hand.x.min);
			});

			//	for	bridgecheck
			array.bridgeCheckPoints.push(Model.hand.x.min2);
			for (i = 0; i <= array.bridgePoints.length - 2; i++) {
				array.bridgeCheckPoints.push((array.bridgePoints[i] + array.bridgePoints[i + 1]) / 2);
			}
			array.bridgeCheckPoints.push(Model.hand.x.max2);

			//	for hand
			var maxPoint = array.wave[array.wave.length - 1];
			var minPoint = array.wave[0];
			// console.log(maxPoint,minPoint)


			Model.handRatio.forEach(function (r, k) {
				if (k < array.handDivision - 1)
					array.handPoints.push(((maxPoint.x - minPoint.x) * r) + minPoint.x);
			});

			//	for handcheck
			array.handCheckPoints.push(Model.hand.x.max);
			for (i = 0; i <= array.handPoints.length - 2; i++) {
				array.handCheckPoints.push((array.handPoints[i] + array.handPoints[i + 1]) / 2);
			}
			array.handCheckPoints.push(Model.hand.x.min);
		}

		for (f in Model.dataWave.guitar) {
			var array = Model.dataWave.guitar[f];
			//	console.log(array);
			var max;
			bridgePos = array.bposition;
			length = array.length;
			if (array.hand) {
				max = array.hposition;
			} else {
				max = 1;
			}

			for (i = 0; i <= 150; i++) {
				k = i + 24;

				//	for  wave
				if (i <= ((150 * length) / bridgePos)) {
					//	console.log(i)
					array.wave.push({
						x: k * 5,
						y: Model.amplitude * Math.sin(((Model.phasediff * i * bridgePos) / ((150 * length * max))))
					});
				}
			}

			//	for bridge
			Model.ratio.forEach(function (r, k) {
				array.bridgePoints.push((((Model.hand.x.max - Model.hand.x.min) / r) * length) + Model.hand.x.min);
			});

			//	for	bridgecheck
			array.bridgeCheckPoints.push(Model.hand.x.min2);
			for (i = 0; i <= array.bridgePoints.length - 2; i++) {
				array.bridgeCheckPoints.push((array.bridgePoints[i] + array.bridgePoints[i + 1]) / 2);
			}
			array.bridgeCheckPoints.push(Model.hand.x.max2);

			//	for hand
			var maxPoint = array.wave[array.wave.length - 1];
			var minPoint = array.wave[0];

			Model.handRatio.forEach(function (r, k) {
				if (k < array.handDivision - 1)
					array.handPoints.push(((maxPoint.x - minPoint.x) * r) + minPoint.x);
			});

			//	for handcheck
			array.handCheckPoints.push(Model.hand.x.max);
			for (i = 0; i <= array.handPoints.length - 2; i++) {
				array.handCheckPoints.push((array.handPoints[i] + array.handPoints[i + 1]) / 2);
			}
			array.handCheckPoints.push(Model.hand.x.min);
		}

		for (f in Model.dataWave.piano) {
			var array = Model.dataWave.piano[f];
			//	console.log(array);
			var max;
			bridgePos = array.bposition;
			length = array.length;
			if (array.hand) {
				max = array.hposition;
			} else {
				max = 1;
			}

			for (i = 0; i <= 150; i++) {
				k = i + 24;

				//	for  wave
				if (i <= ((150 * length) / bridgePos)) {
					//	console.log(i)
					array.wave.push({
						x: k * 5,
						y: Model.amplitude * Math.sin(((Model.phasediff * i * bridgePos) / ((150 * length * max))))
					});
				}
			}

			//	for bridge
			Model.ratio.forEach(function (r, k) {
				array.bridgePoints.push((((Model.hand.x.max - Model.hand.x.min) / r) * length) + Model.hand.x.min);
			});

			//	for	bridgecheck
			array.bridgeCheckPoints.push(Model.hand.x.min2);
			for (i = 0; i <= array.bridgePoints.length - 2; i++) {
				array.bridgeCheckPoints.push((array.bridgePoints[i] + array.bridgePoints[i + 1]) / 2);
			}
			array.bridgeCheckPoints.push(Model.hand.x.max2);

			//	for hand
			var maxPoint = array.wave[array.wave.length - 1];
			var minPoint = array.wave[0];

			Model.handRatio.forEach(function (r, k) {
				if (k < array.handDivision - 1)
					array.handPoints.push(((maxPoint.x - minPoint.x) * r) + minPoint.x);
			});

			//	for handcheck
			array.handCheckPoints.push(Model.hand.x.max);
			for (i = 0; i <= array.handPoints.length - 2; i++) {
				array.handCheckPoints.push((array.handPoints[i] + array.handPoints[i + 1]) / 2);
			}
			array.handCheckPoints.push(Model.hand.x.min);
		}

		for (i = 0; i <= 150; i++) {
			j = i + 24;
			for (k = 1; k <= 4; k++) {
				if (i <= (150 * k / 4) + 1) {
					var array = Model.points["points" + "_" + k];
					array.push({
						x: j * 5,
						y: 330
					});
				}
				Model.phase["phase" + "_" + k].push(0);
			}
		}

		//	Model.ratio
		for (j = 0; j <= Model.ratio.length - 1; j++) {
			for (k = 1; k <= 4; k++) {
				Model.hand.xPoints["xPoints" + "_" + k].push((((Model.hand.x.max - Model.hand.x.min) / (Model.ratio[j])) * k / 4) + Model.hand.x.min);
			}
		}

		for (k = 1; k <= 4; k++) {
			Model.hand.xCheckPoints["xCheckPoints" + "_" + k].push(Model.hand.x.min2);

			for (j = 0; j <= Model.ratio.length - 2; j++) {
				Model.hand.xCheckPoints["xCheckPoints" + "_" + k].push(((((Model.hand.x.max - Model.hand.x.min) / (Model.ratio[j])) + ((Model.hand.x.max - Model.hand.x.min) / (Model.ratio[j + 1]))) * k / (2 * 4)) + Model.hand.x.min);
			}

			Model.hand.xCheckPoints["xCheckPoints" + "_" + k].push(Model.hand.x.max2);
		}

		this.bridge = new Bridge(this.layout.bridge, "", Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].bridgeCheckPoints, Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].bridgePoints);
		this.bridge.enable();

		this.wave = new Wave(scope.layout.wave);
		this.wave.draw(Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].wave);

		this.layout.bassCheck.addEventListener("click", this._checkClick);
		this.layout.guitarCheck.addEventListener("click", this._checkClick);
		this.layout.pianoCheck.addEventListener("click", this._checkClick);

		this.layout.bass.addEventListener("click", this._buttonClick);
		this.layout.guitar.addEventListener("click", this._buttonClick);
		this.layout.piano.addEventListener("click", this._buttonClick);

		this.bridge.addEventListener("drag", this._drag);
		this.wave.addEventListener("updateFrqText", this._updateFrqText);

		this.redHand = new Hand(this.layout.redHand, this.layout.positionText);
		this.redHand.enable();

		this.redHand.addEventListener("drag", this._handdrag);
		this.redHand.addEventListener("set", this._redhandset);
		//	console.log(this.bridge);
	}

	Activity.prototype.reset = function () {
		Model.timer = 0;
		//	createjs.Ticker.removeEventListener("tick", this.tick);
		//	if(Model.playclicked)
		//		this.hand.removeAllEventListeners("tick");
		Model.playclicked = false;
		this.layout.frequencyValue.text = "--";
		this.layout.whiteHand.visible = true;
		this.layout.whiteHand.gotoAndStop(1);
		//	this.layout.timeText.text = "0.0 ms";
		this.wave.pause();
		this.wave.draw(Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].wave);
	}

	function updateFrqText(e) {
		this.layout.frequencyValue.text = "--";
	}

	function drag(e) {
		var length,
		hand,
		hposition;
		Model.currentId = e.target.droppedID;
		resetOnDrag(Model.currentId);
		obj = Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value];
		var array = obj.wave;
		//	console.log("in drag", obj, Model.currentId);
		length = obj.length;
		hand = obj.hand;
		hposition = obj.hposition;
		bposition = obj.bposition;
		console.log("in drag", obj, Model.currentId)

		this.wave.draw(array);

		this.layout.lengthText.text = "Length " + Model.ratioText[Model.currentId - 1];
		this.layout.whiteHand.x = array[0].x + ((array[array.length - 1].x - array[0].x) / 2) - (Model.whiteHand.width / 2);
		if (obj.hand) {
			this.layout.redHand.x = obj.handPoints[hposition - 2];
			this.layout.redHand.y = Model.hand.y;
			this.layout.positionText.x = this.layout.redHand.x + Model.redHand.width;
		}
		if (Model.playclicked) {
			playAnimation();
			Model.currentFrequency = Model.waveFrequency["wave_" + Model.currentId];
			lab.layout.frequencyValue.text = Model.currentFrequency;
		}
	}

	function set(e) {
		console.log(scope.layout.stepper.value);
		scope.layout.index.text = scope.layout.stepper.value;
		Model.stepper.forEach(function (f, i) {
			if (f.id == Model.current)
				f.value = scope.layout.stepper.value;
		});
		resetWave();
	}

	function handdrag(e) {
		console.log(e.currentTarget.droppedID)
		Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].hand = true;
		Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].hposition = e.currentTarget.droppedID;
		calculateWave();
	}

	function redhandset(e) {
		console.log(e.currentTarget.droppedID)
		Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].hand = false;
		Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].hposition = "";
		calculateWave();
	}

	function calculateWave() {		
		var array = Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value];
		//console.log(array.bposition, array.hand, array.hposition, array.length);
		var max;
		bridgePos = array.bposition;
		length = array.length;
		if (array.hand) {
			max = array.hposition;
		} else {
			max = 1;
		}
		array.wave = [];
		for (i = 0; i <= 150; i++) {
			k = i + 24;
			//	for  wave
			if (i <= ((150 * length) / bridgePos)) {
				//	console.log(i)
				array.wave.push({
					x: k * 5,
					y: Model.amplitude * Math.sin(((Model.phasediff * i * max* bridgePos) / ((150 * length))))
				});
			}
		}
		console.log(array.wave)
	}

	function resetOnDrag(currentId) {
		obj = Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value];
		//	console.log("in resetOnDrag", obj, currentId);

		Model.ratio[currentId];

		var max;
		bridgePos = obj.bposition = Model.ratio[currentId - 1];
		length = obj.length;
		if (obj.hand) {
			max = obj.hposition;
		} else {
			max = 1;
		}
		obj.wave = [];

		for (i = 0; i <= 150; i++) {
			k = i + 24;

			//	for  wave
			if (i <= ((150 * length) / bridgePos)) {
				//	console.log(i)
				obj.wave.push({
					x: k * 5,
					y: Model.amplitude * Math.sin(((Model.phasediff * i * bridgePos) / ((150 * length * max))))
				});
			}
		}

		//	for hand
		var maxPoint = obj.wave[obj.wave.length - 1];
		var minPoint = obj.wave[0];

		obj.handPoints = [];
		Model.handRatio.forEach(function (r, k) {
			if (k < obj.handDivision - 1)
				obj.handPoints.push(((maxPoint.x - minPoint.x) * r) + minPoint.x);
		});

		//	for handcheck
		obj.handCheckPoints = [];
		obj.handCheckPoints.push(Model.hand.x.max);
		for (i = 0; i <= obj.handPoints.length - 2; i++) {
			obj.handCheckPoints.push((obj.handPoints[i] + obj.handPoints[i + 1]) / 2);
		}
		obj.handCheckPoints.push(Model.hand.x.min);

	}

	function resetWave() {
		var length,
		hand,
		hposition,
		index;
		obj = Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value];
		length = obj.length;
		hand = obj.hand;
		hposition = obj.hposition;
		bposition = obj.bposition;
		Model.ratio.forEach(function (r, i) {
			if (r * 1 == bposition) {
				index = i;
			}
		});
		Model.currentId = index;

		var array = Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].wave;
		scope.layout.whiteHand.x = array[0].x + ((array[array.length - 1].x - array[0].x) / 2) - (Model.whiteHand.width / 2);

		//	console.log(index, (4 * (length)))
		Model.currentLength = Model.maxLength * length;
		//	console.log(Model.currentLength, Model.hand.xPoints["xPoints" + "_" + (4 * (length))][index]);

		Model.bridge.newX = Model.hand.xPoints["xPoints" + "_" + (4 * (length))][index];
		scope.layout.lengthText.text = "Length " + Model.ratioText[index];
		scope.bridge.set(Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].bridgeCheckPoints, Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].bridgePoints);
		scope.wave.draw(Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].wave);
	}

	function checkClick(e) {
		//	console.log(" -------------------");
		Model.checkBox[Model.current][e.currentTarget.name].status = Model.checkBox[Model.current][e.currentTarget.name].status ? false : true;
		scope.layout[Model.checkBox[Model.current][e.currentTarget.name].tick].visible = Model.checkBox[Model.current][e.currentTarget.name].status;
	}

	function buttonClick(e) {
		console.log(e.currentTarget.name);
		Model.current = e.currentTarget.name;
		Model.button.forEach(function (b, i) {
			if (b.notClick == e.currentTarget.name) {
				var stepVar;
				Model.stepper.forEach(function (f, i) {
					if (f.id == Model.current)
						stepVar = f;
				});
				scope.layout[b.notClick].visible = false;
				scope.layout[b.click].visible = true;
				scope.layout[Model.checkBox[Model.current]["bassCheck"].tick].visible = Model.checkBox[Model.current]["bassCheck"].status;
				scope.layout[Model.checkBox[Model.current]["guitarCheck"].tick].visible = Model.checkBox[Model.current]["guitarCheck"].status;
				scope.layout[Model.checkBox[Model.current]["pianoCheck"].tick].visible = Model.checkBox[Model.current]["pianoCheck"].status;

				scope.layout.index.text = stepVar.value;
				scope.layout.stepper.updateMinMax(stepVar.min, stepVar.max, stepVar.step, stepVar.value);
				scope.layout.stepper.enable();
			} else {
				scope.layout[b.notClick].visible = true;
				scope.layout[b.click].visible = false;
			}
		});
		resetWave();
	}

	function playClicked(e) {
		this.reset();
		//	console.log(Model.timer)
		//	createjs.Ticker.addEventListener("tick", this.tick);
		if (Model.playclicked == false) {
			Model.playclicked = true;
		}
		Model.currentFrequency = Model.waveFrequency["wave_" + Model.currentId];
		this.layout.frequencyValue.text = Model.currentFrequency;
		playAnimation();
	}

	function playAnimation(e) {
		mc = scope.layout.whiteHand;
		mc.visible = true;
		mc.uncache();
		mc.addEventListener("tick", function () {
			if (mc.currentFrame == mc.totalFrames - 1) {
				mc.paused = true;
				mc.removeAllEventListeners("tick");
			} else if (mc.currentFrame == mc.totalFrames - 2) {
				scope.wave.play();
			}
		});
		mc.gotoAndPlay(0);
		scope.hand = mc;
	}

	return Activity;
})();

var Bridge = (function () {
	var scope;
	function Class(hand, text, boundry, points) {
		scope = this;
		this.bridge = hand;
		this.text = text;
		this._drag = this._drag.bind(this);
		this.startPoint = 0;
		this.droppedID = 1;
		this.prevDroppedID = 1;
		this.dropped = false;
		this.boundry = boundry;
		this.points = points;
		//	console.log(this.boundry, this.points)
	}

	Class.prototype = {
		constructor: Class,
		enable: function () {
			//	console.log("in enable");
			this._enabled = true;
			this.bridge.addEventListener("pressmove", this._drag);
			this.bridge.cursor = "move";
			return this;
		},
		disable: function () {
			this._enabled = false;
			this.bridge.removeEventListener("pressmove", this._drag);
			this.bridge.cursor = "default";
			return this;
		},
		_drag: function (e) {
			//	console.log(e)
			var p = this.bridge.parent.globalToLocal(e.stageX, e.stageY);
			Model.bridge.newY = this.bridge.y = Model.hand.y;
			scope.boundry.forEach(function (h, i) {
				if (p.x > (scope.boundry[i]) && p.x < (scope.boundry[i + 1])) {
					Model.bridge.newX = scope.bridge.x = scope.points[i];
					scope.droppedID = (i + 1);
					scope.dropped = true;
					if (scope.droppedID != scope.prevDroppedID) {
						var event = new createjs.Event("drag");
						Model.currentId = event.droppedID = scope.droppedID;
						scope.dispatchEvent(event);
						//	console.log(Model.bridge.newX);
					}
				}
			});
			scope.prevDroppedID = scope.droppedID;
		},
		pause: function () {
			createjs.Ticker.removeEventListener("tick", this._tick);
		},
		reset: function () {
			createjs.Ticker.removeEventListener("tick", this._tick);
			this.bridge.x = Model.bridge.x;
			this.bridge.y = Model.bridge.y;
		},
		set: function (boundry, points) {
			this.bridge.x = Model.bridge.newX;
			this.bridge.y = Model.bridge.newY;
			this.boundry = boundry;
			this.points = points;
		},
	};

	createjs.EventDispatcher.initialize(Class.prototype);

	return Class;

})();

var Wave = (function () {
	var scope;
	function Class(wave) {
		scope = this;
		this.wave = wave;
		this.array;
	}

	Class.prototype = {
		constructor: Class,
		pause: function () {
			createjs.Ticker.removeEventListener("tick", this._tick);
			scope.draw(Model.dataWave[Model.current][Model.current + "_" + lab.layout.stepper.value].wave);
		},
		play: function () {
			createjs.Ticker.addEventListener("tick", this._tick);
			Model.time = 0;
		},
		reset: function () {
			createjs.Ticker.removeEventListener("tick", this._tick);
		},
		_tick: function () {
			Model.period = Model.timeMax / Model.waveCycles["wave_" + Model.currentId];
			Model.time = Model.time + Model.timeStep;
			scope.array = Model.dataWave[Model.current][Model.current + "_" + lab.layout.stepper.value].wave;
			//	console.log(Model.period);
			scope.draw(scope.array, ((Model.time * 100) % (Model.period * 100)));
			if (Model.time > (Model.timeMax - 2 * Model.timeStep)) {
				var event = new createjs.Event("updateFrqText");
				scope.dispatchEvent(event);
				scope.pause();
			}
		},
		draw: function (array, i) {
			if (array && i) {
				console.log("in if")
				frq = Model.period * 100 / 2;
				frq2 = frq / 2;
				i = (i >= frq) ? ((i > 3 * frq2) ? ((i % frq2)) :  - (frq2 - (i % frq2))) : ((i > frq2) ?  - ((i % frq2)) : (frq2 - (i % frq2)));
				//	console.log(i,frq,Model.period)
				scope.wave.graphics.clear().setStrokeStyle(Model.canvasData.lineWidth).beginStroke(Model.canvasData.color).moveTo(array[0].x, (330 - ((i / frq) * 10 * array[0].y)));
				array.forEach(function (p, j) {
					scope.wave.graphics.lineTo(p.x, (330 - ((i / frq) * 10 * p.y)));
				});
			} else if (array) {
				console.log("in else if")
				scope.wave.graphics.clear().setStrokeStyle(Model.canvasData.lineWidth).beginStroke(Model.canvasData.color).moveTo(array[0].x, (330));
				array.forEach(function (p, j) {
					scope.wave.graphics.lineTo(p.x, (330));
				});
			} else {
				console.log("in else")
				//	console.log("in else");
				scope.wave.graphics.clear().setStrokeStyle(Model.canvasData.lineWidth).beginStroke(Model.canvasData.color).moveTo(Model.points["points_4"].x, Model.points["points_4"].y);
				Model.points["points_4"].forEach(function (p, i) {
					scope.wave.graphics.lineTo(p.x, p.y);
				});
			}
			scope.wave.graphics.endStroke();
			scope.wave.graphics.setStrokeStyle(Model.canvasData.lineWidth).beginStroke(Model.canvasData.color).moveTo(Model.bridge.newX, Model.bridge.newY);
			scope.wave.graphics.lineTo(Model.bridge.newX + (Model.bridge.width / 2), Model.bridge.newY);
			scope.wave.graphics.lineTo(Model.wireEndPoint.x, Model.wireEndPoint.y);
			scope.wave.graphics.endStroke();
		},
	};

	createjs.EventDispatcher.initialize(Class.prototype);

	return Class;

})();

var Hand = (function () {
	var scope;
	function Class(hand, text) {
		scope = this;
		this.hand = hand;
		this.text = text;
		this._drag = this._drag.bind(this);
		this._set = this._set.bind(this);
		this.startPoint = 0;
		this.droppedID = 1;
		this.prevDroppedID = 1;
		this.dropped = false;
	}

	Class.prototype = {
		constructor: Class,
		enable: function () {
			//	console.log("in enable");
			this._enabled = true;
			this.hand.addEventListener("pressmove", this._drag);
			this.hand.addEventListener("pressup", this._set);
			this.hand.cursor = "move";
			return this;
		},
		disable: function () {
			this._enabled = false;
			this.hand.removeEventListener("pressmove", this._drag);
			this.hand.removeEventListener("pressup", this._set);
			this.hand.cursor = "default";
			return this;
		},
		_drag: function (e) {
			// console.log(e)
			var p = this.hand.parent.globalToLocal(e.stageX, e.stageY);

			var checkArray = Model.dataWave[Model.current][Model.current + "_" + lab.layout.stepper.value].handCheckPoints;
			var array = Model.dataWave[Model.current][Model.current + "_" + lab.layout.stepper.value].handPoints;
			//	console.log(checkArray,array);
			if (p.x >= Model.hand.x.min && p.x <= (3 * Model.hand.x.max / 4) && p.y >= Model.hand.y - 100 && p.y <= Model.hand.y + 100) {
				// console.log("in if")
				this.text.visible = true;
				this.hand.y = Model.hand.y;
				this.text.y = this.hand.y - Model.redHand.height;
				checkArray.forEach(function (h, i) {
					if (p.x < (checkArray[i]) && p.x > (checkArray[i + 1])) {
						scope.hand.x = array[i];
						scope.text.x = scope.hand.x + Model.redHand.width;
						scope.text.text = "1/" + (i + 2);
						scope.droppedID = (i + 2);
						scope.dropped = true;
					}
				});
			} else {
				//console.log(p)
				this.hand.x = p.x;
				this.hand.y = p.y;
				this.text.visible = false;
				this.droppedID = 1;
				this.dropped = false;
			}
			this.prev = p;
			//	var event = new createjs.Event("drag");
			//	event.droppedID = this.droppedID;
			//	this.dispatchEvent(event);
			if (this.droppedID != this.prevDroppedID)
				this.dispatchEvent("drag");
			this.prevDroppedID = this.droppedID;
		},
		_set: function (e) {
			//	console.log(this.dropped);
			if (!this.dropped) {
				//	console.log("in set");
				var p = this.hand.parent.globalToLocal(e.stageX, e.stageY);
				//	console.log(p)
				if (p.x >= Model.redHand.x.min && p.x <= (3 * Model.hand.x.max / 4) && p.y >= Model.redHand.y - 100 && p.y <= Model.redHand.y + 100) {}
				else {
					this.hand.x = Model.redHand.x;
					this.hand.y = Model.redHand.y;
				}
				this.dispatchEvent("set");
			}
		},
		pause: function () {
			createjs.Ticker.removeEventListener("tick", this._tick);
		},
		reset: function () {
			createjs.Ticker.removeEventListener("tick", this._tick);
			this.hand.x = Model.redHand.x;
			this.hand.y = Model.redHand.y;
		},
	};

	createjs.EventDispatcher.initialize(Class.prototype);

	return Class;

})();

Model = {
	playclicked: false,
	hand: {
		xCheckPoints: {
			xCheckPoints_1: [],
			xCheckPoints_2: [],
			xCheckPoints_3: [],
			xCheckPoints_4: []
		},
		xPoints: {
			xPoints_1: [],
			xPoints_2: [],
			xPoints_3: [],
			xPoints_4: []
		},
		x: {
			min: 120,
			max: 862.65,
			min2: 0,
			max2: 1024,
		},
		y: 330,

	},
	wavePoints: {
		length_1: {
			wave_1: [],
			wave_2: [],
			wave_3: [],
			wave_4: [],
			wave_5: [],
			wave_6: [],
			wave_7: [],
			wave_8: [],
			wave_9: [],
			wave_10: [],
			wave_11: [],
			wave_12: [],
			wave_13: [],
			wave_14: [],
			wave_15: [],
			wave_16: [],
			wave_17: []
		},
		length_2: {
			wave_1: [],
			wave_2: [],
			wave_3: [],
			wave_4: [],
			wave_5: [],
			wave_6: [],
			wave_7: [],
			wave_8: [],
			wave_9: [],
			wave_10: [],
			wave_11: [],
			wave_12: [],
			wave_13: [],
			wave_14: [],
			wave_15: [],
			wave_16: [],
			wave_17: []
		},
		length_3: {
			wave_1: [],
			wave_2: [],
			wave_3: [],
			wave_4: [],
			wave_5: [],
			wave_6: [],
			wave_7: [],
			wave_8: [],
			wave_9: [],
			wave_10: [],
			wave_11: [],
			wave_12: [],
			wave_13: [],
			wave_14: [],
			wave_15: [],
			wave_16: [],
			wave_17: []
		},
		length_4: {
			wave_1: [],
			wave_2: [],
			wave_3: [],
			wave_4: [],
			wave_5: [],
			wave_6: [],
			wave_7: [],
			wave_8: [],
			wave_9: [],
			wave_10: [],
			wave_11: [],
			wave_12: [],
			wave_13: [],
			wave_14: [],
			wave_15: [],
			wave_16: [],
			wave_17: []
		},
	},
	waveCycles: {
		wave_1: 6.25,
		wave_2: 6.25,
		wave_3: 6.25,
		wave_4: 6.25,
		wave_5: 6.25,
		wave_6: 6.25,
		wave_7: 6.25,
		wave_8: 6.25,
		wave_9: 6.25,
		wave_10: 6.25,
		wave_11: 6.25,
		wave_12: 6.25,
		wave_13: 6.25,
		wave_14: 6.25,
		wave_15: 6.25,
		wave_16: 6.25,
		wave_17: 6.25
	},
	waveLength: {
		wave_1: 39,
		wave_2: 40,
		wave_3: 50,
		wave_4: 56,
		wave_5: 60,
		wave_6: 63,
		wave_7: 75,
		wave_8: 80,
		wave_9: 84,
		wave_10: 90,
		wave_11: 94,
		wave_12: 100,
		wave_13: 113,
		wave_14: 125,
		wave_15: 134,
		wave_16: 141,
		wave_17: 150,
	},
	waveFrequency: {
		wave_1: "A",
		wave_2: "A" + '\u266D',
		wave_3: "E",
		wave_4: "D",
		wave_5: "D" + '\u266D',
		wave_6: "C",
		wave_7: "A",
		wave_8: "A" + '\u266D',
		wave_9: "G",
		wave_10: "G" + '\u266D',
		wave_11: "F",
		wave_12: "E",
		wave_13: "D",
		wave_14: "C",
		wave_15: "B",
		wave_16: "B" + '\u266D',
		wave_17: "A",
	},
	points: {
		points_1: [],
		points_2: [],
		points_3: [],
		points_4: [],
	},
	phase: {
		phase_1: [],
		phase_2: [],
		phase_3: [],
		phase_4: [],
	},
	bridge: {
		x: 862.65,
		y: 329.9,
		newX: 862.65,
		newY: 329.9,
		width: 16.2,
		height: 90.35
	},
	canvasData: {
		lineWidth: 3,
		color: "#000000"
	},
	phasediff: 3.14,
	amplitude: 6,
	current: "bass",
	maxLength: 742.65,
	currentLength: 742.65,
	frequency: 66,
	currentFrequency: 66,
	currentId: 17,
	checkBox: {
		bass: {
			bassCheck: {
				status: true,
				tick: "bassTick"
			},
			guitarCheck: {
				status: false,
				tick: "guitarTick"
			},
			pianoCheck: {
				status: false,
				tick: "pianoTick"
			}
		},
		guitar: {
			bassCheck: {
				status: false,
				tick: "bassTick"
			},
			guitarCheck: {
				status: true,
				tick: "guitarTick"
			},
			pianoCheck: {
				status: false,
				tick: "pianoTick"
			}
		},
		piano: {
			bassCheck: {
				status: false,
				tick: "bassTick"
			},
			guitarCheck: {
				status: false,
				tick: "guitarTick"
			},
			pianoCheck: {
				status: true,
				tick: "pianoTick"
			}
		}
	},
	button: [{
			status: false,
			click: "bassClick",
			notClick: "bass",
		}, {
			status: true,
			click: "guitarClick",
			notClick: "guitar",
		}, {
			status: true,
			click: "pianoClick",
			notClick: "piano",
		}
	],
	stepper: [{
			id: "bass",
			min: 1,
			max: 11,
			step: 1,
			value: 1
		}, {
			id: "guitar",
			min: 1,
			max: 8,
			step: 1,
			value: 1
		}, {
			id: "piano",
			min: 1,
			max: 9,
			step: 1,
			value: 1
		},
	],
	wireEndPoint: {
		x: 914,
		y: 423
	},
	redHand: {
		x: 90.95,
		y: 153.35,
		width: 66.65,
		height: 111.4
	},
	whiteHand: {
		x: 475.1,
		y: 222.55,
		width: 68.3,
		height: 112.65
	},
	ratio: [4 / 1, 15 / 4, 3 / 1, 8 / 3, 5 / 2, 12 / 5, 2 / 1, 15 / 8, 9 / 5, 5 / 3, 8 / 5, 3 / 2, 4 / 3, 6 / 5, 9 / 8, 16 / 15, 16 / 16],
	ratioText: ["1/4", "4/15", "1/3", "3/8", "2/5", "5/12", "1/2", "8/15", "5/9", "3/5", "5/8", "2/3", "3/4", "5/6", "8/9", "15/16", "16/16"],
	handRatio: [1 / 2, 1 / 3, 1 / 4, 1 / 5, 1 / 6, 1 / 7, 1 / 8, 1 / 9, 1 / 10, 1 / 11, 1 / 12, 1 / 13, 1 / 14, 1 / 15],
	handRatioText: ["1/2", "1/3", "1/4", "1/5", "1/6", "1/7", "1/8", "1/9", "1/10", "1/11", "1/12", "1/13", "1/14", "1/15"],
	sequence: {
		bass: [1, 3, 5, 6, 7, 6, 5, 3, 1, 3, 5, 6, 7, 6, 5, 3, 4, 6, 9, 10, 11, 10, 9, 6, 1, 3, 5, 6, 7, 6, 5, 3, 5, 8, 10, 8, 4, 6, 9, 6, 1, 3, 5, 6, 5, 4, 3, 2, 1],
		guiter: [1, 2, 4, 2, 1, 2, 4, 2, 1, 2, 5, 7, 5, 4, 5, 2, 4, 2, 1, 2, 6, 8, 6, 5, 6, 8, 6, 5, 7, 5, 4, 5, 7, 5, 4, 2, 4, 2, 1, 2, 4, 2, 1, 2],
		piano: [1, 2, 1, 3, 2, 1]
	},
	time: 0,
	timer: 0,
	timeStep: 0.01,
	timeMax: 1.92,
	step: 0.1,
	positionFactor: 0.47,
	dataWave: {
		bass: {
			bass_1: {
				length: 1,
				bposition: 16 / 16,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			bass_2: {
				length: 0.25,
				bposition: 12 / 5,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			bass_3: {
				length: 1,
				bposition: 16 / 16,
				hand: true,
				hposition: 1 / 3,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			bass_4: {
				length: 0.25,
				bposition: 15 / 8,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			bass_5: {
				length: 1,
				bposition: 16 / 16,
				hand: true,
				hposition: 1 / 3,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			bass_6: {
				length: 0.25,
				bposition: 9 / 5,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			bass_7: {
				length: 0.25,
				bposition: 16 / 15,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			bass_8: {
				length: 0.25,
				bposition: 3 / 1,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			bass_9: {
				length: 1,
				bposition: 16 / 16,
				hand: true,
				hposition: 1 / 9,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			bass_10: {
				length: 1,
				bposition: 16 / 16,
				hand: true,
				hposition: 1 / 3,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			bass_11: {
				length: 0.25,
				bposition: 3 / 1,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
		},
		guitar: {
			guitar_1: {
				length: 0.25,
				bposition: 9 / 5,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			guitar_2: {
				length: 1,
				bposition: 16 / 16,
				hand: true,
				hposition: 1 / 3,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			guitar_3: {
				length: 0.25,
				bposition: 12 / 5,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			guitar_4: {
				length: 0.25,
				bposition: 16 / 16,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			guitar_5: {
				length: 1,
				bposition: 16 / 16,
				hand: true,
				hposition: 1 / 4,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			guitar_6: {
				length: 1,
				bposition: 16 / 16,
				hand: true,
				hposition: 1 / 5,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			guitar_7: {
				length: 0.25,
				bposition: 3 / 2,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
			guitar_8: {
				length: 0.25,
				bposition: 2 / 1,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: []
			},
		},
		piano: {
			piano_1: {
				length: 1,
				bposition: 8 / 5,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 15,
				handPoints: [],
				handCheckPoints: []
			},
			piano_2: {
				length: 0.75,
				bposition: 16 / 16,
				hand: true,
				hposition: 1 / 9,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 15,
				handPoints: [],
				handCheckPoints: []
			},
			piano_3: {
				length: 0.25,
				bposition: 2 / 1,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 15,
				handPoints: [],
				handCheckPoints: []
			},
			piano_4: {
				length: 1,
				bposition: 3 / 2,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 15,
				handPoints: [],
				handCheckPoints: []
			},
			piano_5: {
				length: 1,
				bposition: 16 / 16,
				hand: true,
				hposition: 1 / 3,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 15,
				handPoints: [],
				handCheckPoints: []
			},
			piano_6: {
				length: 0.75,
				bposition: 16 / 16,
				hand: true,
				hposition: 1 / 6,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 15,
				handPoints: [],
				handCheckPoints: []
			},
			piano_7: {
				length: 0.5,
				bposition: 16 / 16,
				hand: true,
				hposition: 1 / 12,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 15,
				handPoints: [],
				handCheckPoints: []
			},
			piano_8: {
				length: 0.25,
				bposition: 2 / 1,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 15,
				handPoints: [],
				handCheckPoints: []
			},
			piano_9: {
				length: 0.25,
				bposition: 16 / 16,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 15,
				handPoints: [],
				handCheckPoints: []
			},
		}
	},
}
