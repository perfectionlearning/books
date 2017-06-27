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
		this._set = set.bind(this);
		this._updateFrqText = updateFrqText.bind(this);

		this.layout.resetButton.enable().addEventListener("click", this.reset);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);
		for (i = 0; i <= 150; i++) {
			k = i + 24;
			for (j = 1; j <= 8; j++) {
				Model.wavePoints["wave_" + j].push({
					x: k * 5,
					y: Model.amplitude * Math.sin(((Model.phasediff * j * i) / (150)))
				});
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

		for (j = 2; j <= 8; j++) {
			Model.hand.xPoints.push(((Model.hand.x.max - Model.hand.x.min) / (j)) + Model.hand.x.min);
		}

		Model.hand.xCheckPoints.push(Model.hand.x.max);

		for (j = 2; j <= 7; j++) {
			Model.hand.xCheckPoints.push((((Model.hand.x.max - Model.hand.x.min) / (j)) + Model.hand.x.min + ((Model.hand.x.max - Model.hand.x.min) / (j + 1)) + Model.hand.x.min) / 2);
		}

		Model.hand.xCheckPoints.push(Model.hand.x.min);
		//	console.log(Model.hand.xPoints,Model.hand.xCheckPoints)
		this.redHand = new Hand(this.layout.redHand, this.layout.positionText);
		this.redHand.enable();

		this.wave = new Wave(scope.layout.wave);
		this.wave.draw();
		this.wave.addEventListener("updateFrqText", this._updateFrqText);

		this.redHand.addEventListener("drag", this._drag);
		this.redHand.addEventListener("set", this._set);
		//	console.log(this.redHand);
	}

	Activity.prototype.reset = function () {
		stopSound();
		Model.playclicked = false;
		lab.layout.frequencyValue.text = "--";
		lab.layout.note.text = "--";
		this.wave.pause();
		this.wave.draw();
		scope.layout.whiteHand.visible = true;
		scope.layout.whiteHand.gotoAndStop(1);
	}

	function updateFrqText(e) {
		stopSound();
		lab.layout.note.text = "--";
	}

	function set(e) {
		//	console.log("in set", e.target.droppedID);
	}

	function drag(e) {
		//	console.log("in drag", e.target.droppedID);
		Model.currentId = e.target.droppedID;
		if(Model.playclicked){
			playAnimation();
			Model.currentFrequency = Model.frequency * Model.currentId;
			lab.layout.frequencyValue.text = Model.currentFrequency;
			lab.layout.note.text = Model.waveNotes["wave_" + Model.currentId];
		}
		//	console.log("in for",p)
		//	console.log(Model.phase)
	}

	function playClicked(e) {
		//	for (j = 1; j <= 8; j++) {
		//		console.log(Model.timeMax/Model.waveCycles["wave_" + j]);
		//	}
		if(Model.playclicked== false)
			Model.playclicked= true;
		Model.currentFrequency = Model.frequency * Model.currentId;
		lab.layout.frequencyValue.text = Model.currentFrequency;
		lab.layout.note.text = Model.waveNotes["wave_" + Model.currentId];
		playAnimation();
	}

	function _tick() {
		if (Model.time < Model.timeMax)
			createjs.Ticker.removeEventListener("tick", this._tick);
		Model.time += Model.timeStep;
		draw(Model.wavePoints["wave_" + Model.currentId], ((Model.time * 100) % 32) / Model.currentId);
	}

	function animateWave() {}

	function playAnimation(e) {
		console.log(Model.currentId);
		var soundId = "sound"+ Model.currentId;
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
			}else if(mc.currentFrame == 1){
				scope.wave.play();
			}
		});
		mc.gotoAndPlay(0);
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
			if (p.x >= Model.hand.x.min && p.x <= (3 * Model.hand.x.max / 4) && p.y >= Model.hand.y - 100 && p.y <= Model.hand.y + 100) {
				// console.log("in if")
				this.text.visible = true;
				this.hand.y = Model.hand.y;
				this.text.y = this.hand.y - Model.redHand.height;
				Model.hand.xCheckPoints.forEach(function (h, i) {
					if (p.x < (Model.hand.xCheckPoints[i]) && p.x > (Model.hand.xCheckPoints[i + 1])) {
						scope.hand.x = Model.hand.xPoints[i];
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
			scope.draw();
		},
		play: function () {
			createjs.Ticker.addEventListener("tick", this._tick);
			Model.time = 0;
		},
		reset: function () {
			createjs.Ticker.removeEventListener("tick", this._tick);
		},
		_tick: function () {
			Model.period = Model.timeMax/Model.waveCycles["wave_" + Model.currentId];
			Model.time = Model.time + Model.timeStep;
			// console.log(Model.period);
			scope.draw(Model.wavePoints["wave_" + Model.currentId], ((Model.time * 100) % (Model.period* 100)));
			if (Model.time > (Model.timeMax - 2*Model.timeStep))
			{
				var event = new createjs.Event("updateFrqText");
				scope.dispatchEvent(event);
				scope.pause();
			}
		},
		draw: function (array, i) {
			if (array) {
				frq = Model.period*100/ 2;
				frq2 = frq/2;
				i = (i >= frq) ?  ((i > 3*frq2) ? ((i % frq2)) : -(frq2- (i % frq2))) : ((i > frq2) ? -((i % frq2)) : (frq2 - (i % frq2)));
				//	console.log(frq,i)
				scope.wave.graphics.clear().setStrokeStyle(Model.canvasData.lineWidth).beginStroke(Model.canvasData.color).moveTo(array[0].x, (330 - ((i/frq)*10 * array[0].y)));
				array.forEach(function (p, j) {
					scope.wave.graphics.lineTo(p.x, (330 - ((i/frq) *10* p.y)));
				});
			} else {
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
	time: 0,
	timeStep: 0.01,
	timeMax: 0.75,
	step: 0.1,
	playclicked: false,
	hand: {
		xCheckPoints: [],
		xPoints: [],
		x: {
			min: 120,
			max: 870,
		},
		y: 330,
	},
	wavePoints: {
		wave_1: [],
		wave_2: [],
		wave_3: [],
		wave_4: [],
		wave_5: [],
		wave_6: [],
		wave_7: [],
		wave_8: []
	},
	waveCycles: {
		wave_1: 2.25,
		wave_2: 4.25,
		wave_3: 6.25,
		wave_4: 8.25,
		wave_5: 10.25,
		wave_6: 12.25,
		wave_7: 14.25,
		wave_8: 16.25
	},
	waveNotes: {
		wave_1: "C",
		wave_2: "C",
		wave_3: "G",
		wave_4: "C",
		wave_5: "E",
		wave_6: "G",
		wave_7: "B"+'\u266D',
		wave_8: "C"
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
	redHand: {
		x: 90.95,
		y: 153.35,
		width: 66.65,
		height: 111.4
	},
	canvasData: {
		lineWidth: 3,
		color: "#000000"
	},
	wireEndPoint: {x: 914, y: 423},
	phasediff: 3.14,
	amplitude: 6,
	currentFrequency: 66,
	frequency: 66,
	currentId: 1,
}