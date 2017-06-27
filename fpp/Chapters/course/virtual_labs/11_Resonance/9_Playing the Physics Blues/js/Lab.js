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
		this._drag = drag.bind(this);
		this._checkClick = checkClick.bind(this);
		this._buttonClick = buttonClick.bind(this);
		this._updateFrqText = updateFrqText.bind(this);
		this._updateFrqText2 = updateFrqText2.bind(this);
		this._sequenceend = sequenceend.bind(this);

		this._keypress = keypress.bind(this);
		this._set = set.bind(this);
		this._handdrag = handdrag.bind(this);
		this._redhandset = redhandset.bind(this);
		this._enterFrameBass = enterFrameBass.bind(this);
		this._enterFrameGuitar = enterFrameGuitar.bind(this);
		this._enterFramePiano = enterFramePiano.bind(this);

		this.bassSound = new Howl({
				src: [Model.bassSource],
				loop: false
			});

		this.guitarSound = new Howl({
				src: [Model.guitarSource],
				loop: false
			});

		this.pianoSound = new Howl({
				src: [Model.pianoSource],
				loop: false
			});

		//	Model.sequence.piano.forEach(function (s, i) {
		//		console.log(s[0], Model.sequenceTime.piano[s[1]]);
		//	});

		this.layout.stepper.enable();
		this.layout.stepper.addEventListener("valueChange", this._set);

		this.layout.resetButton.enable().addEventListener("click", this.reset);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);

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

			var index = null;
			var lengthArray = Model.ref[(length * 4) - 1];
			for (i = 0; i < lengthArray.length; i++) {
				if (lengthArray[i] >= ((150 * length) / bridgePos) - 0.2 && lengthArray[i] <= ((150 * length) / bridgePos) + 0.2) {
					//	console.log(lengthArray[i]);
					index = i;
				}
			}

			var lengthMax = Model.target[(length * 4) - 1][index];
			//	console.log(lengthMax);

			for (i = 0; i <= 150; i++) {
				k = i + 24;
				//	for  wave
				if (i <= lengthMax) {
					//	console.log(i)
					array.wave.push({
						x: k * 5,
						y: Model.amplitude * Math.sin(((Model.phasediff * i * max) / ((lengthMax))))
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

			var index = null;
			var lengthArray = Model.ref[(length * 4) - 1];
			for (i = 0; i < lengthArray.length; i++) {
				if (lengthArray[i] >= ((150 * length) / bridgePos) - 0.2 && lengthArray[i] <= ((150 * length) / bridgePos) + 0.2) {
					//	console.log(lengthArray[i]);
					index = i;
				}
			}

			var lengthMax = Model.target[(length * 4) - 1][index];
			//	console.log(lengthMax);

			for (i = 0; i <= 150; i++) {
				k = i + 24;
				//	for  wave
				if (i <= lengthMax) {
					//	console.log(i)
					array.wave.push({
						x: k * 5,
						y: Model.amplitude * Math.sin(((Model.phasediff * i * max) / ((lengthMax))))
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

			var index = null;
			var lengthArray = Model.ref[(length * 4) - 1];
			for (i = 0; i < lengthArray.length; i++) {
				if (lengthArray[i] >= ((150 * length) / bridgePos) - 0.2 && lengthArray[i] <= ((150 * length) / bridgePos) + 0.2) {
					//	console.log(lengthArray[i]);
					index = i;
				}
			}

			var lengthMax = Model.target[(length * 4) - 1][index];
			//	console.log(lengthMax);

			for (i = 0; i <= 150; i++) {
				k = i + 24;
				//	for  wave
				if (i <= lengthMax) {
					//	console.log(i)
					array.wave.push({
						x: k * 5,
						y: Model.amplitude * Math.sin(((Model.phasediff * i * max) / ((lengthMax))))
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
		this.addEventListener("updateFrqText", this._updateFrqText);
		this.addEventListener("sequenceend", this._sequenceend);

		this.redHand = new Hand(this.layout.redHand, this.layout.positionText);
		this.redHand.enable();

		this.redHand.addEventListener("drag", this._handdrag);
		this.redHand.addEventListener("set", this._redhandset);

		document.addEventListener("keypress", this._keypress);
		//	console.log(this.bridge);
	}

	Activity.prototype.reset = function () {
		Model.timer = 0;
		clearTimeout(Model.timeoutbass)
		clearTimeout(Model.timeoutguitar)
		clearTimeout(Model.timeoutpiano)
		clearTimeout(Model.timeout1)
		clearTimeout(Model.timeout2)
		clearTimeout(Model.timeout3)
		scope.bassSound.stop();
		scope.guitarSound.stop();
		scope.pianoSound.stop();
		this.layout.bassCheck.addEventListener("click", this._checkClick);
		this.layout.guitarCheck.addEventListener("click", this._checkClick);
		this.layout.pianoCheck.addEventListener("click", this._checkClick);
		this.layout.stepper.addEventListener("valueChange", this._set);
		Model.playclicked = false;
		this.layout.frequencyValue.text = "--";
		this.layout.whiteHand.visible = true;
		this.layout.whiteHand.gotoAndStop(1);
		this.wave.pause();
		this.wave.draw(Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].wave);
	}

	function updateFrqText(e) {
		// console.log("in updateFrqText")
		this.layout.frequencyValue.text = "--";
		scope.bassSound.stop();
		scope.guitarSound.stop();
		scope.pianoSound.stop();
		
		if(Model.current == "bass"){
			createjs.Ticker.addEventListener("tick", this._enterFrameBass);
		}else if(Model.current == "guitar"){
			createjs.Ticker.addEventListener("tick", this._enterFrameGuitar);
		}else if(Model.current == "piano"){
			createjs.Ticker.addEventListener("tick", this._enterFramePiano);
		}
	}

	function updateFrqText2(e) {
		// console.log("in updateFrqText2")
		this.layout.frequencyValue.text = "--";
		
		if(Model.current == "bass"){
			createjs.Ticker.addEventListener("tick", this._enterFrameBass);
		}else if(Model.current == "guitar"){
			createjs.Ticker.addEventListener("tick", this._enterFrameGuitar);
		}else if(Model.current == "piano"){
			createjs.Ticker.addEventListener("tick", this._enterFramePiano);
		}
	}

	function drag(e) {
		scope.bassSound.stop();
		scope.guitarSound.stop();
		scope.pianoSound.stop();
		var length,
		hand,
		hposition,
		obj;
		Model.currentId = e.target.droppedID;
		resetOnDrag(Model.currentId);
		obj = Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value];
		var array = obj.wave;
		//	console.log("in drag", obj, Model.currentId);
		length = obj.length;
		hand = obj.hand;
		hposition = obj.hposition;
		bposition = obj.bposition;
		//	console.log("in drag", obj, Model.currentId)

		this.wave.draw(array);

		this.layout.lengthText.text = "Length " + Model.ratioText[Model.currentId - 1];
		this.layout.whiteHand.x = array[0].x + ((array[array.length - 1].x - array[0].x) / 2) - (Model.whiteHand.width / 2);
		if (obj.hand) {
			this.layout.redHand.x = obj.handPoints[hposition - 2];
			this.layout.redHand.y = Model.hand.y;
			this.layout.positionText.x = this.layout.redHand.x + Model.redHand.width;
		}
		if (Model.playclicked) {
			Model.currentFrequency = Model.waveFrequency["wave_" + Model.currentId];
			lab.layout.frequencyValue.text = Model.currentFrequency;
		}
	}

	function set(e) {
		//	console.log("in set " + scope.layout.stepper.value);
		scope.layout.index.text = scope.layout.stepper.value;
		Model.stepper.forEach(function (f, i) {
			if (f.id == Model.current)
				f.value = scope.layout.stepper.value;
		});
		resetWave();
	}

	function keypress(e) {
		if (Model.keyclicked == false) {
			Model.keyclicked = true;
			Model.playclicked = false;
		}
		// console.log(e);
		switch (e.code) {
		case "Digit1":
			playAnimationSingle(1);
			break;
		case "Digit2":
			playAnimationSingle(2);
			break;
		case "Digit3":
			playAnimationSingle(3);
			break;
		case "Digit4":
			playAnimationSingle(4);
			break;
		case "Digit5":
			playAnimationSingle(5);
			break;
		case "Digit6":
			playAnimationSingle(6);
			break;
		case "Digit7":
			playAnimationSingle(7);
			break;
		case "Digit8":
			playAnimationSingle(8);
			break;
		case "Digit9":
			playAnimationSingle(9);
			break;
		case "Digit0":
			playAnimationSingle(10);
			break;
		case "Minus":
			playAnimationSingle(11);
			break;
		}
	}

	function handdrag(e) {
		//	console.log("handdrag " + e.currentTarget.droppedID)
		Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].hand = true;
		Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].hposition = e.currentTarget.droppedID;

		//	console.log(Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].hand,Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].hposition)
		calculateWave();
	}

	function redhandset(e) {
		//	console.log("redhandset " + e.currentTarget.droppedID)
		Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].hand = false;
		Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].hposition = "";
		//	console.log(Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].hand,Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].hposition)
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
					y: Model.amplitude * Math.sin(((Model.phasediff * i * max * bridgePos) / ((150 * length))))
				});
			}
		}
		//	console.log(array.wave)
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

		var index = null;
		var lengthArray = Model.ref[(length * 4) - 1];
		for (i = 0; i < lengthArray.length; i++) {
			if (lengthArray[i] >= ((150 * length) / bridgePos) - 0.2 && lengthArray[i] <= ((150 * length) / bridgePos) + 0.2) {
				//	console.log(lengthArray[i]);
				index = i;
			}
		}

		var lengthMax = Model.target[(length * 4) - 1][index];
		//	console.log(lengthMax);

		for (i = 0; i <= 150; i++) {
			k = i + 24;
			//	for  wave
			if (i <= lengthMax) {
				//	console.log(i)
				obj.wave.push({
					x: k * 5,
					y: Model.amplitude * Math.sin(((Model.phasediff * i * max) / ((lengthMax))))
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
		index,
		obj;
		obj = Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value];
		length = obj.length;
		hand = obj.hand;
		hposition = obj.hposition;
		bposition = obj.bposition;
		//	console.log(" hand "+ hand+ " length " +length +" hposition " +hposition+" bposition " +bposition)
		Model.ratio.forEach(function (r, i) {
			if (r * 1 == bposition) {
				index = i;
			}
		});
		Model.currentId = index;

		var array = Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].wave;
		scope.layout.whiteHand.x = array[0].x + ((array[array.length - 1].x - array[0].x) / 2) - (Model.whiteHand.width / 2);

		if (obj.hand) {
			Model.handRatio.forEach(function (r, i) {
				//	console.log(obj.hposition == r);
				if ((1 / obj.hposition) == r) {
					//	console.log(r);
					scope.redHand.setHand(obj.handPoints[i], Model.handRatioText[i]);
				}
			});
		} else {
			scope.redHand.reset();
		}
		//	console.log(index, (4 * (length)))
		Model.currentLength = Model.maxLength * length;
		//	console.log(Model.currentLength, Model.hand.xPoints["xPoints" + "_" + (4 * (length))][index]);

		Model.bridge.newX = Model.hand.xPoints["xPoints" + "_" + (4 * (length))][index];
		scope.layout.lengthText.text = "Length " + Model.ratioText[index];
		scope.wave.draw(Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].wave);
		scope.bridge.set(Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].bridgeCheckPoints, Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].bridgePoints);
	}

	function checkClick(e) {
		//	console.log(" -------------------");
		Model.checkBox[Model.current][e.currentTarget.name].status = Model.checkBox[Model.current][e.currentTarget.name].status ? false : true;
		scope.layout[Model.checkBox[Model.current][e.currentTarget.name].tick].visible = Model.checkBox[Model.current][e.currentTarget.name].status;
	}

	function buttonClick(e) {
		//	console.log(e.currentTarget.name);
		Model.current = e.currentTarget.name;
		//	console.log(Model.current);
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
				scope.layout.instrument.text = Model.instrument[Model.current];
				//	console.log(Model.instrument)
				scope.layout.stepper.updateMinMax(stepVar.min, stepVar.max, stepVar.step, stepVar.value);
				scope.layout.stepper.enable();
			} else {
				scope.layout[b.notClick].visible = true;
				scope.layout[b.click].visible = false;
			}
		});
		scope.reset();
		resetWave();
	}

	function sequenceend(e) {
		this.layout.stepper.addEventListener("valueChange", this._set);
	}

	function playClicked(e) {
		this.reset();
		//	console.log(Model.timer)
		//	createjs.Ticker.("tick", this.tick);
		this.layout.bassCheck.removeEventListener("click", this._checkClick);
		this.layout.guitarCheck.removeEventListener("click", this._checkClick);
		this.layout.pianoCheck.removeEventListener("click", this._checkClick);
		this.layout.stepper.removeEventListener("valueChange", this._set);
		if (Model.playclicked == false) {
			Model.playclicked = true;
			Model.keyclicked = false;
		}
		Model.currentFrequency = Model.waveFrequency["wave_" + Model.currentId];
		var checkBoxArray = Model.checkBox[Model.current];
		for (i in checkBoxArray) {
			// console.log(i.split("C")[0], checkBoxArray[i].status)
			if (i.split("C")[0] == "bass" && (checkBoxArray[i].status || Model.current == "bass")) {
				scope.counter1 = 0;
				createjs.Ticker.addEventListener("tick", this._enterFrameBass);
			}
			if (i.split("C")[0] == "guitar" && (checkBoxArray[i].status || Model.current == "guitar")) {
				scope.counter2 = 0;
				createjs.Ticker.addEventListener("tick", this._enterFrameGuitar);
			}
			if (i.split("C")[0] == "piano" && (checkBoxArray[i].status || Model.current == "piano")) {
				scope.counter3 = 0;
				createjs.Ticker.addEventListener("tick", this._enterFramePiano);
			}
		}
	}

	function enterFrameBass() {
		if (Model.playclicked) {
			var array1 = Model.sequence["bass"];
			var array11 = Model.sequenceTime["bass"];
			// console.log(array1, array11);
			if (scope.counter1 > array1.length - 1) {
				var event = new createjs.Event("sequenceend");
				scope.dispatchEvent(event);
				createjs.Ticker.removeEventListener("tick", this._enterFrameBass);
			} else {
				createjs.Ticker.removeEventListener("tick", this._enterFrameBass);
				currentState1 = array1[scope.counter1][0];
				// console.log(currentState1)
				if (currentState1 != "pause") {
					if(Model.current == "bass"){
						currentArray1 = Model.dataWave["bass"]["bass" + "_" + currentState1];
						var poshand = currentArray1.hposition == "" ? 1 : currentArray1.hposition;
						//	console.log(currentArray1, (currentArray1.fundamentalFrequency*currentArray1.bposition*poshand)/Model.frequency);
						this.layout.stepper.value = currentState1;
						scope.layout.index.text = scope.layout.stepper.value;
						Model.ratio.forEach(function (r, i) {
							if (currentArray1.bposition == r) {
								Model.bridge.newX = currentArray1.bridgePoints[i];
							}
						});
						if (currentArray1.hand) {
							Model.handRatio.forEach(function (r, i) {
								if (1 / currentArray1.hposition == r) {
									scope.redHand.setHand(currentArray1.handPoints[i], Model.handRatioText[i]);
								}
							});
						} else {
							this.redHand.reset();
						}
						var array1 = Model.dataWave["bass"]["bass" + "_" + scope.layout.stepper.value].wave;
						scope.wave.draw(Model.dataWave["bass"]["bass" + "_" + scope.layout.stepper.value].wave);
						scope.layout.whiteHand.x = array1[0].x + ((array1[array1.length - 1].x - array1[0].x) / 2) - (Model.whiteHand.width / 2);
						scope.bridge.set(currentArray1.bridgeCheckPoints, currentArray1.bridgePoints)
						scope.layout.frequencyValue.text = (currentArray1.fundamentalFrequency * currentArray1.bposition * poshand).toFixed(0);
					}
					playAnimationBass(currentState1);
				} else if (currentState1 == "pause") {
					var time = Model.sequenceTime["bass"][array1[scope.counter1][1]] * 5000;
					Model.timeout1 = setTimeout(function () {
							createjs.Ticker.addEventListener("tick", scope._enterFrameBass);
						}, time);
				}
			}
			scope.counter1++;
		}
	}

	function playAnimationBass(currentState1) {
		var array1 = Model.sequence["bass"];
		//	console.log("playAnimationBass");
		currentStringArray1 = Model.dataWave["bass"]["bass" + "_" + currentState1];
		var idB = scope.bassSound.play();
		scope.bassSound.rate((currentStringArray1.fundamentalFrequency * currentStringArray1.bposition * (currentStringArray1.hposition == "" ? 1 : currentStringArray1.hposition)) / Model.frequency, idB);
		if (Model.current == "bass") {
			var time = Model.sequenceTime["bass"][array1[scope.counter1][1]]
			mc = scope.layout.whiteHand;
			mc.visible = true;
			mc.uncache();
			mc.addEventListener("tick", function () {
				if (mc.currentFrame == mc.totalFrames - 1) {
					mc.paused = true;
					mc.removeAllEventListeners("tick");
				} else if (mc.currentFrame == 1) {
					scope.wave.play(time);
				}
			});
			mc.gotoAndPlay(0);
			scope.hand = mc;
		} else {
			var array1 = Model.sequence["bass"];
			var time = Model.sequenceTime["bass"][array1[scope.counter1][1]] * 5000;
			//	console.log(time);
			Model.timeoutbass = setTimeout(function () {
					createjs.Ticker.addEventListener("tick", scope._enterFrameBass);
				}, time);
		}
	}

	function enterFrameGuitar() {
		if (Model.playclicked) {
			var array2 = Model.sequence["guitar"];
			var array22 = Model.sequenceTime["guitar"];
			// console.log(array2, array22);
			if (scope.counter2 > array2.length - 1) {
				var event = new createjs.Event("sequenceend");
				scope.dispatchEvent(event);
				createjs.Ticker.removeEventListener("tick", this._enterFrameGuitar);
			} else {
				createjs.Ticker.removeEventListener("tick", this._enterFrameGuitar);
				currentState2 = array2[scope.counter2][0];
				// console.log(currentState2)
				if (currentState2 != "pause") {
					if(Model.current == "guitar"){
						currentArray2 = Model.dataWave["guitar"]["guitar" + "_" + currentState2];
						var poshand = currentArray2.hposition == "" ? 1 : currentArray2.hposition;
						//	console.log(currentArray2, (currentArray2.fundamentalFrequency*currentArray2.bposition*poshand)/Model.frequency);
						this.layout.stepper.value = currentState2;
						scope.layout.index.text = scope.layout.stepper.value;
						Model.ratio.forEach(function (r, i) {
							if (currentArray2.bposition == r) {
								Model.bridge.newX = currentArray2.bridgePoints[i];
							}
						});
						if (currentArray2.hand) {
							Model.handRatio.forEach(function (r, i) {
								if (1 / currentArray2.hposition == r) {
									scope.redHand.setHand(currentArray2.handPoints[i], Model.handRatioText[i]);
								}
							});
						} else {
							this.redHand.reset();
						}
						var array2 = Model.dataWave["guitar"]["guitar" + "_" + scope.layout.stepper.value].wave;
						scope.wave.draw(Model.dataWave["guitar"]["guitar" + "_" + scope.layout.stepper.value].wave);
						scope.layout.whiteHand.x = array2[0].x + ((array2[array2.length - 1].x - array2[0].x) / 2) - (Model.whiteHand.width / 2);
						scope.bridge.set(currentArray2.bridgeCheckPoints, currentArray2.bridgePoints)
						scope.layout.frequencyValue.text = (currentArray2.fundamentalFrequency * currentArray2.bposition * poshand).toFixed(0);
					}
					playAnimationGuitar(currentState2);
				} else if (currentState2 == "pause") {
					var time = Model.sequenceTime["guitar"][array2[scope.counter2][1]] * 5000;
					//	console.log(time);
					Model.timeout2 = setTimeout(function () {
							createjs.Ticker.addEventListener("tick", scope._enterFrameGuitar);
						}, time);
				}
			}
			scope.counter2++;
		}
	}

	function playAnimationGuitar(currentState2) {
		//	console.log("playAnimationGuitar");
		var array2 = Model.sequence["guitar"];
		currentStringArray2 = Model.dataWave["guitar"]["guitar" + "_" + currentState2]
		var idG = scope.guitarSound.play();
		scope.guitarSound.rate((currentStringArray2.fundamentalFrequency * currentStringArray2.bposition * (currentStringArray2.hposition == "" ? 1 : currentStringArray2.hposition)) / Model.frequency, idG);

		if (Model.current == "guitar") {
			var time = Model.sequenceTime["guitar"][array2[scope.counter2][1]]
			//	console.log(time)
			mc = scope.layout.whiteHand;
			mc.visible = true;
			mc.uncache();
			mc.addEventListener("tick", function () {
				if (mc.currentFrame == mc.totalFrames - 1) {
					mc.paused = true;
					mc.removeAllEventListeners("tick");
				} else if (mc.currentFrame == 1) {
					scope.wave.play(time);
				}
			});
			mc.gotoAndPlay(0);
			scope.hand = mc;
		} else {
			//	console.log(array2)
			//	console.log(array2[scope.counter2])
			var time = Model.sequenceTime["guitar"][array2[scope.counter2][1]] * 5000;
			Model.timeoutguitar = setTimeout(function () {
					createjs.Ticker.addEventListener("tick", scope._enterFrameGuitar);
				},
					time);
		}
	}

	function enterFramePiano() {
		if (Model.playclicked) {
			var array3 = Model.sequence["piano"];
			var array33 = Model.sequenceTime["piano"];
			// console.log(array3, array33);
			if (scope.counter3 > array3.length - 1) {
				var event = new createjs.Event("sequenceend");
				scope.dispatchEvent(event);
				createjs.Ticker.removeEventListener("tick", this._enterFramePiano);
			} else {
				createjs.Ticker.removeEventListener("tick", this._enterFramePiano);
				currentState3 = array3[scope.counter3][0];
				// console.log(currentState3)
				if (currentState3 != "pause") {
					if(Model.current == "piano"){
						currentArray3 = Model.dataWave["piano"]["piano" + "_" + currentState3];
						var poshand = currentArray3.hposition == "" ? 1 : currentArray3.hposition;
						//	console.log(currentArray3, (currentArray3.fundamentalFrequency*currentArray3.bposition*poshand)/Model.frequency);
						this.layout.stepper.value = currentState3;
						scope.layout.index.text = scope.layout.stepper.value;
						Model.ratio.forEach(function (r, i) {
							if (currentArray3.bposition == r) {
								Model.bridge.newX = currentArray3.bridgePoints[i];
							}
						});
						if (currentArray3.hand) {
							Model.handRatio.forEach(function (r, i) {
								if (1 / currentArray3.hposition == r) {
									scope.redHand.setHand(currentArray3.handPoints[i], Model.handRatioText[i]);
								}
							});
						} else {
							this.redHand.reset();
						}
						var array3 = Model.dataWave["piano"]["piano" + "_" + scope.layout.stepper.value].wave;
						scope.wave.draw(Model.dataWave["piano"]["piano" + "_" + scope.layout.stepper.value].wave);
						scope.layout.whiteHand.x = array3[0].x + ((array3[array3.length - 1].x - array3[0].x) / 2) - (Model.whiteHand.width / 2);
						scope.bridge.set(currentArray3.bridgeCheckPoints, currentArray3.bridgePoints)
						scope.layout.frequencyValue.text = (currentArray3.fundamentalFrequency * currentArray3.bposition * poshand).toFixed(0);
					}
					playAnimationPiano(currentState3);
				} else if (currentState3 == "pause") {
					var time = Model.sequenceTime["piano"][array3[scope.counter3][1]] * 5000;
					//	console.log(time);
					Model.timeout3 = setTimeout(function () {
							createjs.Ticker.addEventListener("tick", scope._enterFramePiano);
					}, time);
				}
			}
			scope.counter3++;
		}
	}

	function playAnimationPiano(currentState3) {
		//	console.log("playAnimationPiano");
		var array3 = Model.sequence["piano"];
		currentStringArray3 = Model.dataWave["piano"]["piano" + "_" + currentState3]
			var idP = scope.pianoSound.play();
		scope.pianoSound.rate((currentStringArray3.fundamentalFrequency * currentStringArray3.bposition * (currentStringArray3.hposition == "" ? 1 : currentStringArray3.hposition)) / Model.frequency, idP);
		if (Model.current == "piano") {
			var time = Model.sequenceTime["piano"][array3[scope.counter3][1]]
			mc = scope.layout.whiteHand;
			mc.visible = true;
			mc.uncache();
			mc.addEventListener("tick", function () {
				if (mc.currentFrame == mc.totalFrames - 1) {
					mc.paused = true;
					mc.removeAllEventListeners("tick");
				} else if (mc.currentFrame == 1) {
					scope.wave.play(time);
				}
			});
			mc.gotoAndPlay(0);
			scope.hand = mc;
		} else {
			var array3 = Model.sequence["piano"];
			var time = Model.sequenceTime["piano"][array3[scope.counter3][1]] * 5000;
			Model.timeoutpiano = setTimeout(function () {
					createjs.Ticker.addEventListener("tick", scope._enterFramePiano);
				}, time);
		}
	}

	function playAnimationSingle(key) {
		//	console.log("playanimation");
		var currentStringArray = Model.dataWave[Model.current][Model.current + "_" + key];
		if (currentStringArray != undefined) {
			// console.log(key);
			hand = currentStringArray.hposition == "" ? 1 : currentStringArray.hposition;
			scope.layout.stepper.value = key;
			scope.layout.index.text = scope.layout.stepper.value;
			Model.ratio.forEach(function (r, i) {
				if (currentStringArray.bposition == r) {
					Model.bridge.newX = currentStringArray.bridgePoints[i];
				}
			});
			if (currentStringArray.hand) {
				Model.handRatio.forEach(function (r, i) {
					if (1 / currentStringArray.hposition == r) {
						scope.redHand.setHand(currentStringArray.handPoints[i], Model.handRatioText[i]);
					}
				});
			} else {
				scope.redHand.reset();
			}
			var array = Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].wave;
			scope.wave.draw(Model.dataWave[Model.current][Model.current + "_" + scope.layout.stepper.value].wave);
			scope.layout.whiteHand.x = array[0].x + ((array[array.length - 1].x - array[0].x) / 2) - (Model.whiteHand.width / 2);
			scope.bridge.set(currentStringArray.bridgeCheckPoints, currentStringArray.bridgePoints)
			scope.layout.frequencyValue.text = (currentStringArray.fundamentalFrequency * currentStringArray.bposition * (currentStringArray.hposition == "" ? 1 : currentStringArray.hposition)).toFixed(0);

			switch (Model.current) {
			case 'bass':
				var idB = scope.bassSound.play();
				scope.bassSound.rate((currentStringArray.fundamentalFrequency * currentStringArray.bposition * hand) / Model.frequency, idB);
				break;
			case 'guitar':
				var idG = scope.guitarSound.play();
				scope.guitarSound.rate((currentStringArray.fundamentalFrequency * currentStringArray.bposition * hand) / Model.frequency, idG);
				break;
			case 'piano':
				var idP = scope.pianoSound.play();
				scope.pianoSound.rate((currentStringArray.fundamentalFrequency * currentStringArray.bposition * hand) / Model.frequency, idP);
				break;
			}

			mc = scope.layout.whiteHand;
			mc.visible = true;
			mc.uncache();
			mc.addEventListener("tick", function () {
				if (mc.currentFrame == mc.totalFrames - 1) {
					mc.paused = true;
					mc.removeAllEventListeners("tick");
				} else if (mc.currentFrame == 1) {
					scope.wave.play();
				}
			});
			mc.gotoAndPlay(0);
			scope.hand = mc;
		}
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
		this.time;
		this.array;
	}

	Class.prototype = {
		constructor: Class,
		pause: function () {
			createjs.Ticker.removeEventListener("tick", this._tick);
			scope.draw(Model.dataWave[Model.current][Model.current + "_" + lab.layout.stepper.value].wave);
		},
		play: function (time) {
			createjs.Ticker.addEventListener("tick", this._tick);
			Model.time = 0;
			if(time){
				this.time = time;
			}
		},
		reset: function () {
			createjs.Ticker.removeEventListener("tick", this._tick);
		},
		_tick: function () {
			Model.period = Model.timeMaxSequence / Model.waveCycles["wave_" + Model.currentId];
			Model.time = Model.time + Model.timeStep;
			scope.array = Model.dataWave[Model.current][Model.current + "_" + lab.layout.stepper.value].wave;
			scope.draw(scope.array, ((Model.time * 100) % (Model.period * 100)));
			if (Model.playclicked) {
				var time = 0;
				if(scope.time){
					if (Model.time > (scope.time - 2 * Model.timeStep)) {
						var event = new createjs.Event("updateFrqText");
						scope.dispatchEvent(event);
						scope.pause();
					}
				}else{
					if (Model.time > (Model.timeMaxSequence - 2 * Model.timeStep)) {
						var event = new createjs.Event("updateFrqText");
						scope.dispatchEvent(event);
						scope.pause();
					}
				}
			} else if (Model.keyclicked) {
				if (Model.time > (Model.timeMax - 2 * Model.timeStep)) {
					var event = new createjs.Event("updateFrqText");
					scope.dispatchEvent(event);
					scope.pause();
				}
			}
		},
		draw: function (array, i) {
			scope.wave.graphics.linecap = "butt";
			if (array && i) {
				//	console.log("in if")
				frq = Model.period * 100 / 2;
				frq2 = frq / 2;
				i = (i >= frq) ? ((i > 3 * frq2) ? ((i % frq2)) :  - (frq2 - (i % frq2))) : ((i > frq2) ?  - ((i % frq2)) : (frq2 - (i % frq2)));
				//	console.log(i,frq,Model.period)
				scope.wave.graphics.clear().setStrokeStyle(Model.canvasData.lineWidth).beginStroke(Model.canvasData.color).moveTo(array[0].x, (330 - ((i / frq) * 10 * array[0].y)));
				array.forEach(function (p, j) {
					scope.wave.graphics.lineTo(p.x, (330 - ((i / frq) * 10 * p.y)));
				});
			} else if (array) {
				//	console.log("in else if")
				scope.wave.graphics.clear().setStrokeStyle(Model.canvasData.lineWidth).beginStroke(Model.canvasData.color).moveTo(array[0].x, (330));
				array.forEach(function (p, j) {
					scope.wave.graphics.lineTo(p.x, (330));
				});
			} else {
				//	console.log("in else")
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
		setWave: function () {},
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
						scope.text.x = scope.hand.x + (Model.redHand.width*2/3);
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
			this.text.visible = false;
		},
		setHand: function (x, i) {
			this.hand.x = x;
			this.text.x = this.hand.x + (Model.redHand.width*2/3);
			this.text.visible = true;
			this.hand.y = Model.hand.y;
			this.text.y = this.hand.y - Model.redHand.height;
			scope.text.text = i;
		},
	};

	createjs.EventDispatcher.initialize(Class.prototype);

	return Class;

})();

Model = {
	playclicked: false,
	keyclicked: false,
	timeoutbass: null,
	timeoutguitar: null,
	timeoutpiano: null,
	timeout1: null,
	timeout2: null,
	timeout3: null,
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
	frequency: 16.5,
	currentFrequency: 16.5,
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
		bass: [[1, "medium"], [3, "medium"], [5, "medium"], [6, "medium"], [7, "medium"], [6, "medium"], [5, "medium"], [3, "medium"], [1, "medium"], [3, "medium"], [5, "medium"], [6, "medium"], [7, "medium"], [6, "medium"], [5, "medium"], [3, "medium"], [4, "medium"], [6, "medium"], [9, "medium"], [10, "medium"], [11, "medium"], [10, "medium"], [9, "medium"], [6, "medium"], [1, "medium"], [3, "medium"], [5, "medium"], [6, "medium"], [7, "medium"], [6, "medium"], [5, "medium"], [3, "medium"], [5, "medium"], [8, "medium"], [10, "medium"], [8, "medium"], [4, "medium"], [6, "medium"], [9, "medium"], [6, "medium"], [1, "medium"], [3, "medium"], [5, "medium"], [6, "medium"], [5, "medium"], [4, "medium"], [3, "medium"], [2, "medium"], [1, "medium"]],
		guitar: [[2, "Short"], [4, "Short"], [2, "Short"], [1, "Short"], [2, "Long"], ["pause", "pauselong"], [2, "Short"], [4, "Short"], [2, "Short"], [1, "Short"], [2, "Long"], ["pause", "pauselong"], [5, "Short"], [7, "Short"], [5, "Short"], [4, "Short"], [5, "Long"], ["pause", "pauselong"], [2, "Short"], [4, "Short"], [2, "Short"], [1, "Short"], [2, "Long"], ["pause", "pausemedium"], [6, "Short"], [8, "Short"], [6, "Short"], [5, "Long"], [6, "Short"], [8, "Short"], [6, "Short"], [5, "Long"], [5, "Short"], [7, "Short"], [5, "Short"], [4, "Long"], [5, "Short"], [7, "Short"], [5, "Short"], [4, "Long"], [2, "Short"], [4, "Short"], [2, "Short"], [1, "Long"], [2, "Short"], [4, "Short"], [2, "Short"], [1, "Long"], [2, "Long"]],
		piano: [[1, "Long"],["pause", "pauselong"], [1, "Long"],["pause", "pauselong"], [2, "Long"],["pause", "pauselong"], [1, "Long"],["pause", "pauselong"], [3, "medium"], ["pause", "pausemedium"],[2, "medium"], ["pause", "pausemedium"],[1, "medium"]]
	},
	sequenceTime: {
		bass: {
			medium: 0.1
		},
		guitar: {
			Short: 0.08,
			Long: 0.16,
			pausemedium: 0.20,
			pauselong: 0.25
		},
		piano: {
			medium: 0.16,
			pausemedium: 0.55,
			Long: 0.20,
			pauselong: 0.85
		}
	},
	instrument:{bass:"Bass",guitar:"Guitar",piano:"Piano"},
	time: 0,
	timer: 0,
	timeStep: 0.01,
	timeMaxSequence: 0.30,
	timeMax: 0.15,
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
				handCheckPoints: [],
				fundamentalFrequency: 16.5,
				targetFrequency: 66
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
				handCheckPoints: [],
				fundamentalFrequency: 66,
				targetFrequency: 74.25
			},
			bass_3: {
				length: 1,
				bposition: 16 / 16,
				hand: true,
				hposition: 3,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: [],
				fundamentalFrequency: 16.5,
				targetFrequency: 82.5
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
				handCheckPoints: [],
				fundamentalFrequency: 66,
				targetFrequency: 88
			},
			bass_5: {
				length: 1,
				bposition: 16 / 16,
				hand: true,
				hposition: 3,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: [],
				fundamentalFrequency: 16.5,
				targetFrequency: 99
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
				handCheckPoints: [],
				fundamentalFrequency: 66,
				targetFrequency: 110
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
				handCheckPoints: [],
				fundamentalFrequency: 66,
				targetFrequency: 118.8
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
				handCheckPoints: [],
				fundamentalFrequency: 66,
				targetFrequency: 123.75
			},
			bass_9: {
				length: 1,
				bposition: 16 / 16,
				hand: true,
				hposition: 9,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: [],
				fundamentalFrequency: 16.5,
				targetFrequency: 132
			},
			bass_10: {
				length: 1,
				bposition: 16 / 16,
				hand: true,
				hposition: 3,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: [],
				fundamentalFrequency: 16.5,
				targetFrequency: 148.5
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
				handCheckPoints: [],
				fundamentalFrequency: 66,
				targetFrequency: 158.4,
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
				handCheckPoints: [],
				fundamentalFrequency: 66,
				targetFrequency: 88
			},
			guitar_2: {
				length: 1,
				bposition: 16 / 16,
				hand: true,
				hposition: 3,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: [],
				fundamentalFrequency: 16.5,
				targetFrequency: 99
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
				handCheckPoints: [],
				fundamentalFrequency: 66,
				targetFrequency: 110
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
				handCheckPoints: [],
				fundamentalFrequency: 66,
				targetFrequency: 118.8
			},
			guitar_5: {
				length: 1,
				bposition: 16 / 16,
				hand: true,
				hposition: 4,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: [],
				fundamentalFrequency: 16.5,
				targetFrequency: 132
			},
			guitar_6: {
				length: 1,
				bposition: 16 / 16,
				hand: true,
				hposition: 5,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 9,
				handPoints: [],
				handCheckPoints: [],
				fundamentalFrequency: 16.5,
				targetFrequency: 148.5
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
				handCheckPoints: [],
				fundamentalFrequency: 66,
				targetFrequency: 158.4
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
				handCheckPoints: [],
				fundamentalFrequency: 66,
				targetFrequency: 176
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
				handCheckPoints: [],
				fundamentalFrequency: 33,
				targetFrequency: 123.75
			},
			piano_2: {
				length: 0.75,
				bposition: 16 / 16,
				hand: true,
				hposition: 9,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 15,
				handPoints: [],
				handCheckPoints: [],
				fundamentalFrequency: 44,
				targetFrequency: 132
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
				handCheckPoints: [],
				fundamentalFrequency: 132,
				targetFrequency: 148.5
			},
			piano_4: {
				length: 0.25,
				bposition: 3 / 2,
				hand: false,
				hposition: "",
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 15,
				handPoints: [],
				handCheckPoints: [],
				fundamentalFrequency: 132,
				targetFrequency: 158.4

			},
			piano_5: {
				length: 1,
				bposition: 16 / 16,
				hand: true,
				hposition: 3,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 15,
				handPoints: [],
				handCheckPoints: [],
				fundamentalFrequency: 33,
				targetFrequency: 165
			},
			piano_6: {
				length: 0.75,
				bposition: 16 / 16,
				hand: true,
				hposition: 6,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 15,
				handPoints: [],
				handCheckPoints: [],
				fundamentalFrequency: 44,
				targetFrequency: 176
			},
			piano_7: {
				length: 0.5,
				bposition: 16 / 16,
				hand: true,
				hposition: 12,
				wave: [],
				bridgePoints: [],
				bridgeCheckPoints: [],
				handDivision: 15,
				handPoints: [],
				handCheckPoints: [],
				fundamentalFrequency: 66,
				targetFrequency: 198
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
				handCheckPoints: [],
				fundamentalFrequency: 132,
				targetFrequency: 220
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
				handCheckPoints: [],
				fundamentalFrequency: 132,
				targetFrequency: 237.6
			},
		}
	},
	ref: [[9.375, 10, 12.5, 14.0625, 15, 15.625, 18.75, 20, 20.83333333, 22.5, 23.4375, 25, 28.125, 31.25, 33.33333333, 35.15625, 37.5],
		[18.75, 20, 25, 28.125, 30, 31.25, 37.5, 40, 41.66666667, 45, 46.875, 50, 56.25, 62.5, 66.66666667, 70.3125, 75],
		[28.125, 30, 37.5, 42.1875, 45, 46.875, 56.25, 60, 62.5, 67.5, 70.3125, 75, 84.375, 93.75, 100, 105.46875, 112.5],
		[37.5, 40, 50, 56.25, 60, 62.5, 75, 80, 83.33333333, 90, 93.75, 100, 112.5, 125, 133.3333333, 140.625, 150]],
	target: [[10, 10, 13, 14.0625, 15, 16, 19, 20, 21, 23, 24, 25, 28.125, 31.25, 33.33333333, 35.15625, 38],
		[19, 20, 25, 28.125, 30, 31.25, 38, 40, 42, 45, 47, 50, 56.25, 62.5, 66.66666667, 70.3125, 75],
		[28.125, 30, 38, 42.1875, 45, 47, 56.25, 60, 62.5, 67.5, 70.3125, 75, 84.375, 93.75, 100, 105.46875, 112.5],
		[38, 40, 50, 56.25, 60, 62.5, 75, 80, 83.33333333, 90, 93.75, 100, 112.5, 125, 133.3333333, 140.625, 150]],
	bassSource: "data:audio/mp3;base64,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3b7TbMPWxstCVIVny981+ThAjtrHS5GRo4sEz12lyrT/Ka37Dn4NiUxv0891/8JgmETwFehM4oWIx0AUzA5AgFQHQEAkGAArWeySUtMWKFnMd1Z9vlH3N3ZaLvFwUAKwERup7eq9UdG/r2Oqj83brYdAkKyDX/XMNOT/tVHb//oOCWH/+5IAegACiU5K66gS+FGmqS14w1wKlTcWDyjrwUgmqTWjCX4xBblAXf7f/6a1N0Bz0ACkclgVBkiWDOrBEOy7CoptS+fXzG1tKW06rPs963/84wmEpvxOZ1kaVDpMdrq3djVR2ItbJ9QI7N////0//70CCxQQ///9VQZrbdtKrIkof3YFzauJlE6WqCR2kwyxQwtgbhiHU91CTUUl2Z13v84xxsckiUdkHkOy28y6MrKZTTJFVVFIeAwdAwd//Uptv/s//75BMQED//9/0cqBbb99vz9G3jfMqMxG0MHDugoDT8al8o/C7BYHgzAhDn5xKd1SiyAG595/GECy9jGJV2mF2E2UzKTddOtXmy/dAGBRICtb+iS5////+zoJjBBv/qDDRSgm1tQGS5hGXAYCRckRFgoKQ4AkgXOeOJUrjEO+9k9r0kECUo5ZzzuJBhIiLXajMxpgZXZy+paJ3qqoVsi5GCBTnDmr9vZWq//av/9Z0IBnd//SAGjMys0fL6tPHoWQY+BS6WahgCR9V06r5x+VVTg5nX28iupxyyEBN/Pl//uQAJQAAqlNz+tCKvxTaaltcGVfCq03FM6US8FMJuW9wZV8v5oJE2dckjuUaXd3oi0Juti5CkyJ5iB8Iqz//b//b//52Agu7v+fo9QB22iW2KxlIH1A5nQE0HNPpxVdOK8/012oN/SzSpD9+jQeBZ/v364IEwv1sVynUsSJCoQdLHVCHZtru6NuzdHCGML//RVpv///7uhmDgzC1AAo065KJYQ6bMwt5iXAZBAYaqZdppqun5fqP01nJV4BiSFTTa5rSziteG/frggICcvp3yhSmhjarm7NMZ2be2iHQMBO3//////+jHCh13///qAKlut2o+zcB9otZksIphuBACBZFFgzEX6k1alvmjA2H54+L47573n0iNb7qJv+nc9q1ZCVNOgsDO7Wef3RrsZClRUQ/exwMW5f/1d/////3IAC1gHddrtarIUofTfBw8KdYOArqLorWZrAUptCokAm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xSVntIbCjpLGtz//+5IA7wACzjTDTXjgAFgmmImvFAAeaZVDuayAE7qyqT81kANQDQHGqZpbEoizmcikrl4OTNYwxhAwR3Zp/oersZpr2zRHMMMvWZQRZCZf2M1o13PXObQoMcEtOkmAiC5Euqymzcpu5/zn7TUAwaAdS8tAgEVgl1WM2bkav0HP5vPv+WvRXWuXERUWogDTHZPul5qmz/HX//////+gATEZIimoOydFBQRpiRap/yu9xuc+rl/8/vf//////aemAqRpig6x3XUEXY6ix13uusRiGX/jr8t/jrVYFTeCPA5hxNKdQ1lxBesLLF0IjwNA08SrBU7eIga4Kuywd4K9R7iXqf0f////f0dR6+JaKj3EpdgbQKoTJpTp0stIL1Wq16MBosDQdWdEoKuSoGj2JQV4NPyoa4Ncqd4i6zvI9bulTEFNRTMuOTkuNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//uSAGQP8asHwIc8QAAvYOgw54wAAAABpAAAACAAADSAAAAEVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==",
	guitarSource: "data:audio/mp3;base64,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d5NgonQh3TVtJuJKNINjMf696el73OpQCAAAAAatA2IsLuYmwGZiHgoGjcTcYSwEZQAxFisBCXGA8A4YKgCU/fs8QvMAoAAmjFNQCrBA7m5ZZMmADgAWgMIvlEsJl8wI1YN2AoAXEF1BmsiZWN1E2XZ0LkDHBjAN8IMx4yScvqc3PG7h6ggwiwjwUQniWOOVZuZGyK1salEcAtg5wnAYBBhcBKlRkmZjByVQJlNmSMjAZBZAB2FYcA4C8LIN0VK+uijZlXrSJYmhwEgbEEJYyIgSBxB6N9DdnTUqgqq9JmOpkQLRkRAnDInDxkThqkTiBYugr///9FK////5OGpwnAAQgEAAAATOqEVMFkAsySgxDChAgNXocwwbAK0DLarKQwHAMDB6Agr3qK4GATmBIAoi//uSAPCAAxI0w614wABkprhRrpgAHQYRCLnpgANswiGTPTAAmpIBWAmSCZ1E3JwBQAEqCjGKaMrHjsA4AIqCcgbEHzM2qZIxL54LkCtg5QOYQY9KjLskbJom4jwQwiwgAJIRaaJnXOsnRRZTCdBJCeFwC2ESFwGZkpF55TseNWd1OgKULAzA0CaHAOwrDMO1aqq6SK6lt6x4KQ4CELxBCQMiIFoyS1/Z6FS9a2bVWyMghaMiIFQyIgWjInDyicNDKtf////S////k4eUTlUAB2B3B3CIB2D0fDYXDYfA0CdHSGrf+KxTSO1VLv+I1hKZh14v8DVsCtjEncIKgatgPsM8dJ3g0CAIcCogx0pLRMvAICFlwfiDfQwNRMqPxCEG6obMJtC30OSMqJlR/HJEFRSRARCos4gJlRMqJl/FyjlEVFykCJ0c0gRO1mVZlWc/4skZYiIuUc4iIzI5xERmRzqzlZxSzil//HaLJFzDyLJGaHkXCM0PIuEcRCC4RxHFCwqKCwqKN/mDQA1Gw2Gw2Go1Gw2Gw2B0XkAD7S//Fezcxf/7kgBqAAXbWE1+amAAvqvJvczMAAAAAaQcAAAgAAA0g4AABHhd/xWQlTjMBf4GaoIYHS7hIoACQQmIcs14ZyAQMEIA1EpLNSl4NyQvUIxCzoZComVH4nkLfQ6IUiGRQ/YyomVH8WaGRRHQyofCITDKmVEyomX8QVEJhzRBUVsOaJRFbEFomVZkpZl/xQIuYgooEXMREWSLmIiLJGaUsyUsyUsySX/8kRZIzQ8i4Rmh5GZHEQgzI4iEHCOIySWcSWcSWcSWcSb/AJpMQU1FMy45OS41VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=",
	pianoSource: "data:audio/mp3;base64,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",
}
