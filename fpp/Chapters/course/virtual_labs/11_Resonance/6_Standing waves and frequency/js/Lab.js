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
		this._updateFrqText = updateFrqText.bind(this);
		this.tick = tick.bind(this);

		this.layout.resetButton.enable().addEventListener("click", this.reset);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);
		for (i = 0; i <= 150; i++) {
			k = i + 24;
			for (j = 1; j <= 17; j++) {
				if(i <= Model.waveLength["wave_" + j]){
					Model.wavePoints["wave_" + j].push({
						x: k * 5,
						y: Model.amplitude * Math.sin(((Model.phasediff * i) / (Model.waveLength["wave_" + j])))
					});
				}
			}
		}

		for (i = 0; i <= 150; i++) {
			j = i + 24;
			Model.points.push({
				x: j * 5,
				y: 330
			});
			Model.phase.push(0);
		}
		
		//	Model.ratio
		for (j = 0; j <= Model.ratio.length-1; j++) {
			Model.hand.xPoints.push(((Model.hand.x.max - Model.hand.x.min) / (Model.ratio[j])) + Model.hand.x.min);
		}


		Model.hand.xCheckPoints.push(Model.hand.x.min2);
		for (j = 0; j <= Model.ratio.length-2; j++) {
			Model.hand.xCheckPoints.push((((Model.hand.x.max - Model.hand.x.min) / (Model.ratio[j])) + Model.hand.x.min + ((Model.hand.x.max - Model.hand.x.min) / (Model.ratio[j + 1])) + Model.hand.x.min) / 2);
		}
		Model.hand.xCheckPoints.push(Model.hand.x.max2);

		
		//	console.log(Model.hand.xCheckPoints,Model.hand.xPoints,Model.wavePoints)
		//	console.log(Model.hand.xPoints,Model.hand.xCheckPoints)
		this.bridge = new Bridge(this.layout.bridge);
		this.bridge.enable();

		this.wave = new Wave(scope.layout.wave);
		this.wave.draw();

		this.bridge.addEventListener("drag", this._drag);
		this.wave.addEventListener("updateFrqText", this._updateFrqText);
		//	console.log(this.bridge);
	}

	Activity.prototype.reset = function () {
		stopSound();
		Model.timer = 0;
		createjs.Ticker.removeEventListener("tick", this.tick);
		if(Model.playclicked)
			this.hand.removeAllEventListeners("tick");
		Model.playclicked = false;
		this.layout.frequencyValue.text = "--";
		this.layout.whiteHand.visible = true;
		this.layout.whiteHand.gotoAndStop(1);
		this.layout.timeText.text = "0.0 ms";
		this.wave.pause();
		this.wave.draw(Model.wavePoints["wave_" + Model.currentId]);
	}

	function updateFrqText(e) {
		stopSound();
		this.layout.frequencyValue.text = "--";
	}

	function drag(e) {
		Model.currentId = e.target.droppedID;
		this.wave.draw(Model.wavePoints["wave_" + Model.currentId]);
		this.layout.lengthText.text = "Length "+ Model.ratioText[Model.currentId-1];
		var array = Model.wavePoints["wave_" + Model.currentId];
		this.layout.whiteHand.x = array[0].x + ((array[array.length-1].x - array[0].x)*Model.positionFactor);
		if(Model.playclicked) {
			playAnimation();
			Model.currentFrequency = Model.waveFrequency["wave_" + Model.currentId];
			lab.layout.frequencyValue.text = Model.currentFrequency;
		}
	}

	function playClicked(e) {
		this.reset();
	//	console.log(Model.timer)
		createjs.Ticker.addEventListener("tick", this.tick);
		if (Model.playclicked == false){
			Model.playclicked = true;
		}
		Model.currentFrequency = Model.waveFrequency["wave_" + Model.currentId];
		this.layout.frequencyValue.text = Model.currentFrequency;
		playAnimation();
	}

	function tick() {
	//	console.log(Model.timer)
		Model.timer = Model.timer + Model.timeStep;
		this.layout.timeText.text = addCommas((Model.timer*10).toFixed(1)) + " ms";
	}

	function addCommas(x) {
		var parts = x.toString().split(".");
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
		return parts.join(".");
	}
	function playAnimation(e) {
		var soundId = "sound"+ Model.ratioText[Model.currentId-1];
		if(this.sound){
			createjs.Tween.get(this.sound).to({volume:0}, 100);
		}
		this.sound = playSound(soundId, false);
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

	return Activity;
})();

var Bridge = (function () {
	var scope;
	function Class(hand, text) {
		scope = this;
		this.hand = hand;
		this.text = text;
		this._drag = this._drag.bind(this);
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
			this.hand.cursor = "move";
			return this;
		},
		disable: function () {
			this._enabled = false;
			this.hand.removeEventListener("pressmove", this._drag);
			this.hand.cursor = "default";
			return this;
		},
		_drag: function (e) {
			// console.log(e)
			var p = this.hand.parent.globalToLocal(e.stageX, e.stageY);
			Model.bridge.newY = this.hand.y = Model.hand.y;
			Model.hand.xCheckPoints.forEach(function (h, i) {
				if (p.x > (Model.hand.xCheckPoints[i]) && p.x < (Model.hand.xCheckPoints[i + 1])) {
					Model.bridge.newX = scope.hand.x = Model.hand.xPoints[i];
					scope.droppedID = (i + 1);
					scope.dropped = true;
					if(scope.droppedID != scope.prevDroppedID){
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
			this.hand.x = Model.bridge.x;
			this.hand.y = Model.bridge.y;
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
	}

	Class.prototype = {
		constructor: Class,
		pause: function () {
			createjs.Ticker.removeEventListener("tick", this._tick);
			scope.draw(Model.wavePoints["wave_" + Model.currentId]);
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
			// console.log(Model.period);
			scope.draw(Model.wavePoints["wave_" + Model.currentId], ((Model.time * 100) % (Model.period * 100)));
			if (Model.time > (Model.timeMax - 2 * Model.timeStep)) {
				var event = new createjs.Event("updateFrqText");
				scope.dispatchEvent(event);
				scope.pause();
			}
		},
		draw: function (array, i) {
			if(array && i){
				frq = Model.period * 100 / 2;
				frq2 = frq / 2;
				i = (i >= frq) ? ((i > 3 * frq2) ? ((i % frq2)) :  - (frq2 - (i % frq2))) : ((i > frq2) ?  - ((i % frq2)) : (frq2 - (i % frq2)));
				//	console.log(i,frq,Model.period)
				scope.wave.graphics.clear().setStrokeStyle(Model.canvasData.lineWidth).beginStroke(Model.canvasData.color).moveTo(array[0].x, (330 - ((i / frq) * 10 * array[0].y)));
				array.forEach(function (p, j) {
					scope.wave.graphics.lineTo(p.x, (330 - ((i / frq) * 10 * p.y)));
				});
			}else if(array){
				scope.wave.graphics.clear().setStrokeStyle(Model.canvasData.lineWidth).beginStroke(Model.canvasData.color).moveTo(array[0].x, (330));
				array.forEach(function (p, j) {
					scope.wave.graphics.lineTo(p.x, (330));
				});
			}else{
				//	console.log("in else");
				scope.wave.graphics.clear().setStrokeStyle(Model.canvasData.lineWidth).beginStroke(Model.canvasData.color).moveTo(Model.points[0].x, Model.points[0].y);
				Model.points.forEach(function (p, i) {
					scope.wave.graphics.lineTo(p.x, p.y);
				});
			}
			scope.wave.graphics.endStroke();
			scope.wave.graphics.setStrokeStyle(Model.canvasData.lineWidth).beginStroke(Model.canvasData.color).moveTo(Model.bridge.newX, Model.bridge.newY);
			scope.wave.graphics.lineTo(Model.bridge.newX+(Model.bridge.width/2), Model.bridge.newY);
			scope.wave.graphics.lineTo(Model.wireEndPoint.x, Model.wireEndPoint.y);
			scope.wave.graphics.endStroke();
		},
	};

	createjs.EventDispatcher.initialize(Class.prototype);

	return Class;

})();

Model = {
	playclicked: false,
	hand: {
		xCheckPoints: [],
		xPoints: [],
		x: {
			min: 120,
			max: 862.65,
			min2: 0,
			max2: 1024,
		},
		y: 329.9,
	},
	wavePoints: {
		wave_1:  [],
		wave_2:  [],
		wave_3:  [],
		wave_4:  [],
		wave_5:  [],
		wave_6:  [],
		wave_7:  [],
		wave_8:  [],
		wave_9:  [],
		wave_10: [],
		wave_11: [],
		wave_12: [],
		wave_13: [],
		wave_14: [],
		wave_15: [],
		wave_16: [],
		wave_17: []
	},
	waveCycles: {
		wave_1:  13.25,
		wave_2:  12.25,
		wave_3:  10.25,
		wave_4:  9.25,
		wave_5:  9.25,
		wave_6:  8.25,
		wave_7:  7.25,
		wave_8:  6.5,
		wave_9:  6.25,
		wave_10: 5.75,
		wave_11: 5.25,
		wave_12: 5.25,
		wave_13: 4.25,
		wave_14: 4.0,
		wave_15: 3.75,
		wave_16: 3.50,
		wave_17: 3.25
	},
	waveLength: {
		wave_1: 38,
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
		wave_1: 440,
		wave_2: 422,
		wave_3: 330,
		wave_4: 297,
		wave_5: 275,
		wave_6: 264,
		wave_7: 220,
		wave_8: 211,
		wave_9: 198,
		wave_10:186,
		wave_11:176,
		wave_12:165,
		wave_13:149,
		wave_14:132,
		wave_15:124,
		wave_16:119,
		wave_17:110
	},
	points: [],
	phase: [],
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
	currentFrequency: 66,
	frequency: 66,
	currentId: 17,
	wireEndPoint: {x: 914, y: 423},
	ratio: [4/1,15/4,3/1,8/3,5/2,12/5,2/1,15/8,9/5,5/3,8/5,3/2,4/3,6/5,9/8,16/15,16/16],
	ratioText: ["1/4","4/15","1/3","3/8","2/5","5/12","1/2","8/15","5/9","3/5","5/8","2/3","3/4","5/6","8/9","15/16","16/16"],
	time: 0,
	timer: 0,
	timeStep: 0.01*4.26*0.8,
	timeMax: 0.75*4.26,
	step: 0.1,
	positionFactor: 0.47,
}
