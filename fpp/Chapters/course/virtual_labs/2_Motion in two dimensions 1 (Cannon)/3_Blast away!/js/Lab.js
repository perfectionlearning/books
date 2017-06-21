var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		
		this._cacheData = {
			tower_blast_1:[-100, 0, 500, 500, 2],
			tower_blast_2:[-100, 0, 500, 500, 2],
		}
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		var scope = this;
		createPlayers.call(this);
		
		this._setGameMode = setGameMode.bind(this);
		this._fireClicked = fireClicked.bind(this);
		this._pauseClicked = pauseClicked.bind(this);
		this._playClicked = playClicked.bind(this);
		this.reset = this.reset.bind(this);
		
		this.layout.compBtn.enable().addEventListener("click", this._setGameMode);
		this.layout.playerBtn.enable().addEventListener("click", this._setGameMode);

		// this.layout.fireButton.addEventListener("click", this._fireClicked);
		this.layout.pauseButton.addEventListener("click", this._pauseClicked);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);
		this.layout.blur_bg.addEventListener("click", function(){});// to prevent click behind this image
		this.layout.blur_bg1.addEventListener("click", function(){});// to prevent click behind this image

		this.layout.playAgainBtn.addEventListener("click", this.reset);
		this.layout.playAgainBtn.cursor = "pointer";
		
		this.layout.stepper.addEventListener("valueChange", function(e){
			scope.layout.speedText.text = e.currentTarget.value.toFixed(1);
			scope.activePlayer.velocity = e.currentTarget.value;
		});
		this._extraMCs = [];
	}
	
	Activity.prototype.reset = function(){
		var targetValue1 = /* 0// */ Model.randomNumber(1, 6) * 15;
		var targetValue2 = /* 90// */ Model.randomNumber(1, 6) * 15;
		if(targetValue2 == 90 - targetValue1){
			targetValue2 = targetValue1;
		}
		if(targetValue2 == 45 && targetValue1 == 45){
			targetValue2 = 30;
		}
		var x1 = this.player1.setTargets([105, targetValue1]);
		var x2 = this.player2.setTargets([105, targetValue2]);
		if(this.player2.auto){
			this.player2.generateVx();
		}
		
		this.layout.flag1.x = x1;
		this.layout.flag2.x = x2;
		this.layout.flag1.gotoAndStop(0);
		this.layout.flag1.removeAllEventListeners("tick");
		this.layout.flag2.gotoAndStop(0);
		this.layout.flag2.removeAllEventListeners("tick");
		this.layout.blast.visible = false;
		this.layout.blast.gotoAndStop(0);
		this.layout.blast.removeAllEventListeners("tick");
		this.layout.tower_blast_1.uncache();
		this.layout.tower_blast_1.gotoAndStop(0);
		this.layout.tower_blast_1.removeAllEventListeners("tick");
		this.layout.tower_blast_2.uncache();
		this.layout.tower_blast_2.gotoAndStop(0);
		this.layout.tower_blast_2.removeAllEventListeners("tick");
		
		this.player1.data("Vx", this.player1.data("defaultVx")).data("point0", false).data("point1", false);
		this.player2.data("Vx", this.player2.data("defaultVx")).data("point0", false).data("point1", false);
		
		
		this._extraMCs.forEach(function(mc){
			mc.removeAllEventListeners("tick");
			mc.gotoAndStop(0);
			mc.parent.removeChild(mc);
		});
		this._extraMCs = [];
		
		if(this.gameMode == "PVC"){
			delete this.playerIndex;
		} else {
			if(this.previousIndex == undefined || this.previousIndex == 1){
				this.previousIndex = 0;
				this.playerIndex = 1;
			} else {
				this.previousIndex = 1;
				this.playerIndex = 0;
			}
		}
		
		nextTurn.call(this);
		
		this.layout.playAgainScreen.visible = false;
		
		// this.layout.pauseButton.visible = true;
		// this.layout.playButton.visible = false;
	}
	
	function playClicked(e){
		if(this._resetState){
			this._fireClicked();
			this._resetState = false;
		} else {
			this.activePlayer.fire();
		}
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
		
		
	}
	
	function pauseClicked(e){
		this.layout.pauseButton.visible = false;
		this.layout.playButton.visible = true;
		this.activePlayer.pause();
	}
	
	function fireClicked(e){
		// this.layout.fireButton.disable();
		this.layout.stepper.disable();
		this.layout.pauseButton.enable();
		this.activePlayer.fire(this.layout.stepper.value);
		this.activePlayer.disable();
		var mc = this.layout["smoke" + (this.playerIndex + 1)];
		mc.visible = true;
		mc.addEventListener("tick", function(){
			if(mc.currentFrame >= mc.totalFrames - 1){
				mc.removeAllEventListeners("tick");
				mc.visible = false;
			}
		});
		mc.gotoAndPlay(0);
	}
	
	function setGameMode(e){
		this.layout.compBtn.disable().removeEventListener("click", this._setGameMode);
		this.layout.playerBtn.disable().removeEventListener("click", this._setGameMode);
		this.layout.playerSelection.visible = false;
		if(e.currentTarget == this.layout.compBtn){
			this.player2.auto = true;
			this.gameMode = "PVC";
		} else {
			this.player2.auto = false;
			this.gameMode = "PVP";
		}
		
		this.reset();
		
		// var shape = new createjs.Shape();
		// this.stage.addChild(shape);
		// var boundary = Lab.data.player2.boundary//.concat(Lab.data.player2.boundary);
		// shape.graphics.setStrokeStyle(4).beginStroke("#0000ff")/* .moveTo(boundary[0].x, boundary[0].y).lineTo(this.bmp.x, this.bmp.y).endStroke() */;
		// boundary.forEach(function(a, i){
			// // if(i == 3){
				// a.forEach(function(p, j){				
					// shape.graphics[j == 0 ? "moveTo" : "lineTo"](p.x, p.y);
				// });
			// // }
		// });
		// shape.graphics.endStroke();
	}
	
	function getWin(){
		if(this.player1.data("point0") && this.player1.data("point1")){
			return 1;
		}
		if(this.player2.data("point0") && this.player2.data("point1")){
			return 2;
		}
		return false;
	}
	
	function nextTurn(){
		var scope = this;
		if(this.activePlayer){
			// console.log(this.activePlayer._data.point0)
			// console.log(this.activePlayer._data.point1)
			this.activePlayer.disable();
			this.activePlayer.reset();
			var player = getWin.call(this);
			if(player){
				var text;
				if(this.gameMode == "PVC"){
					text = player == 1 ? "You win!" : "Computer wins!"
				} else {
					text = player == 1 ? "Player 1 wins!" : "Player 2 wins!"
				}
				this.layout.winText.text = text;
				// You win!
				// Computer win!
				// Player 1 wins!
				// Player 2 wins!
				this.addChild(this.layout.playAgainScreen);
				this.layout.playAgainScreen.visible = true;
				this.layout.playAgainScreen.alpha = 0;
				createjs.Tween.get(this.layout.playAgainScreen).wait(500).to({alpha:1}, 500).call(function(){
					
				});
				return false;
			}
		}
		
		if(!this.hasOwnProperty("playerIndex")){
			this.playerIndex = 1;
		} else {
		}
		this.layout["line1"].visible = false;
		this.layout["line2"].visible = false;
		
		if(this.playerIndex == 1){
			this.playerIndex = 0;
		} else {
			this.playerIndex = 1;
		}
		
		this.activePlayer = this["player" + (this.playerIndex + 1)];
		this.activePlayer.enable();
		this.activePlayer.reset();
		// Model.data = Lab.data["player" + (this.playerIndex + 1)];
		if(!this.activePlayer.auto){
			// this.layout.fireButton.enable();
			this.layout.stepper.enable();
		} else {
			this.activePlayer.nextVx();
		}
		this.layout.stepper.value = this.activePlayer.velocity;
		this.layout.speedText.text = this.activePlayer.velocity.toFixed(1);
		this.layout["line" + (this.playerIndex + 1)].visible = true;
		if(this.activePlayer.auto){
			// Ticker.add({
				// delay:1000,
				// callback:function(){
					// fireClicked.call(scope);
				// },
				// once:true
			// });
			setTimeout(function(){
				fireClicked.call(scope);
			}, 1000);
			
		}
		this._resetState = true;
		this.layout.playButton.visible = true;
		this.layout.pauseButton.visible = false;
	}
	
	function createPlayers(){
		var scope = this,
			i, j, 
			p1Data = Lab.data.player1, 
			p2Data = Lab.data.player2, 
			stepper = this.layout.stepper;
			
		if(BrowserDetect.any()){
			this.layout.arrow1.scaleX = this.layout.arrow1.scaleY = 1;
			this.layout.arrow2.scaleX = this.layout.arrow2.scaleY = 1;
			// this.layout.arrow1.y--;
			// this.layout.arrow2.y--;
		}
			
		var a = new Slider(this.layout.arrow1, p1Data.draggableMin, p1Data.draggableMax, stepper._min, stepper._max, this.layout.arrow1Line, {direction:"left", lineWidth:BrowserDetect.any() ? 2 : 2});
		this.player1 = new Player(this.layout.p1thumb, [this.layout.point2_1, this.layout.point2_2], a, this.layout.canonBall1);
		this.player1.startPoint = a.startPoint = Lab.data.player1.draggableMin;
		
		a = new Slider(this.layout.arrow2, p2Data.draggableMin, p2Data.draggableMax, stepper._min, stepper._max, this.layout.arrow2Line, {direction:"right", lineWidth:BrowserDetect.any() ? 2 : 2, color:"#FF992C"});
		a.reverse = true;
		this.player2 = new Player(this.layout.p2thumb, [this.layout.point1_1, this.layout.point1_2], a, this.layout.canonBall2);
		this.player2.startPoint = a.startPoint = Lab.data.player2.draggableMax;
		
		for(i in Lab.data){
			for(j in Lab.data[i]){
				this[i].data(j, Lab.data[i][j]);
			}
		}
		this.player1.reset().addEventListener("velocityUpdated", function(e){
			scope.layout.stepper.value = e.currentTarget.velocity.toFixed(1) * 1;
			scope.layout.speedText.text = e.currentTarget.velocity.toFixed(1);
		});
		this.player2.reset().addEventListener("velocityUpdated", function(e){
			scope.layout.stepper.value = e.currentTarget.velocity.toFixed(1) * 1;
			scope.layout.speedText.text = e.currentTarget.velocity.toFixed(1);
		});
		
		this._hit = hit.bind(this);
		this.player1.addEventListener("hit", this._hit);
		this.player2.addEventListener("hit", this._hit);
	}
	
	function checkFlagHit(_i){
		var f1 = this.layout.flag1;
		var f2 = this.layout.flag2;
		var tolerance = Model.pointToPixel(2);
		var res = {};
		if(((f1.x - tolerance) < _i.x) && ((f1.x + tolerance) > _i.x)){
			res.mc = f1;
			res.index = 1;
			return res;
		}
		if(((f2.x - tolerance) < _i.x) && ((f2.x + tolerance) > _i.x)){
			res.mc = f2;
			res.index = 2;
			return res;
		}
		return false;
	}
	
	function hit(e){
		var mc, scope = this;
		this.layout.pauseButton.disable();
		switch (e.data.hit){
			case Model.GROUND:
				var res = checkFlagHit.call(this, e.data.point);
				if(res && !this["player" + res.index].data("point1")){
					mc = res.mc;
					// console.log(res.index)
					this["player" + res.index].data("point1", true);
				} else {
					mc = new lib.Ballanimation();
					lab.mc = mc;
					mc.scaleX = mc.scaleY = 1.34;
					// mc.regX = 1;
					// mc.regY = 0;
					mc.x = this.activePlayer.ball.x//e.data.point.x;
					mc.y = this.activePlayer.ball.y//e.data.point.y;
					this._extraMCs.push(mc);
					this.addChild(mc);
				}
				
				mc.addEventListener("tick", function(){
					if(mc.currentFrame == mc.totalFrames - 1){
						mc.paused = true;
						mc.removeAllEventListeners("tick");
						nextTurn.call(scope);
					}
				});
				mc.gotoAndPlay(0);
			break;
			case Model.BASE:
				if(!this.activePlayer.data("point0")){
					this.activePlayer.data("point0", true);
					mc = this.layout["tower_blast_" + (this.playerIndex == 0 ? "2" : "1")];
					mc.uncache();
					mc.addEventListener("tick", function(){
						if(mc.currentFrame == mc.totalFrames - 1){
							mc.paused = true;
							mc.cache.apply(mc, scope._cacheData[mc.name]);
							mc.removeAllEventListeners("tick");
							nextTurn.call(scope);
						}
					});
					mc.gotoAndPlay(0);
				} else {
					nextTurn.call(scope);
				}
			break;
			case Model.DOOR:
			case Model.WALL:
				mc = /* new lib.blast_Canvas();// */this.layout.blast;
				mc.visible = true;
				mc.x = e.data.point.x;
				mc.y = e.data.point.y;
				mc.addEventListener("tick", function(){
					if(mc.currentFrame == mc.totalFrames - 1){
						mc.parent.removeChild(mc);
						mc.removeAllEventListeners("tick");
						nextTurn.call(scope);
					}
				});
				this.stage.addChild(mc);
				mc.gotoAndPlay(0);
				
			break;
		}
	}
	
	return Activity;
})();

Lab.data = {
	player1:{
		draggableMin:sV(183),
		draggableMax:sV(1470 * 0.5 * 1.34),
		direction:1,
		defaultVx:5,
		startX:sV(191),
		boundary:[
			[{x:sV(90 * 1.34) ,y:sV(434 * 1.34 + 5)}, {x:sV(665 * 1.34),y:sV(434 * 1.34 + 5)}], 
			[{x:sV(665 * 1.34),y:sV(434 * 1.34 + 15)}, {x:sV(641 * 1.34),y:sV(380 * 1.34 + 8)}], 
			[{x:sV(675 * 1.34),y:sV(434 * 1.34 + 15)}, {x:sV(675 * 1.34),y:sV(382 * 1.34 + 15)}],
			[{x:sV(667 * 1.34),y:sV(378 * 1.34 + 15)}, {x:sV(667 * 1.34),y:sV(175 * 1.34 + 15)}]
		]
	},
	player2:{
		draggableMin:sV(39),
		draggableMax:sV(838),
		direction:-1,
		defaultVx:5,
		startX:sV(833),
		boundary:[
			[{x:sV(90 * 1.34) ,y:sV(434 * 1.34 + 1)}, {x:sV(665 * 1.34),y:sV(434 * 1.34 + 5)}], 
			[{x:sV(122 * 1.34),y:sV(381 * 1.34 + 8)}, {x:sV(95 * 1.34), y:sV(434 * 1.34 + 15)}], 
			[{x:sV(80 * 1.34) ,y:sV(371 * 1.34 + 15)}, {x:sV(80 * 1.34), y:sV(434 * 1.34 + 15)}],
			[{x:sV(94 * 1.34) ,y:sV(380 * 1.34 + 15)}, {x:sV(92 * 1.34), y:sV(175 * 1.34 + 15)}]
		]
	}
}

var Player = (function(){
	function Class(thumbnail, targetPointers, arrow, ball){
		this._data = {};
		this.thumbnail = thumbnail;
		this.pointers = targetPointers;
		this.arrow = arrow;
		this.ball = ball;

		targetPointers.forEach(function(p, i){
			this.data("point" + i, false);
		}, this);
		this.disable();
		this._tick = this._tick.bind(this);
		this._onDrag = this._onDrag.bind(this);
		
		this.arrow.addEventListener("drag", this._onDrag);
	}
	
	Class.prototype = {
		constructor:Class,
		reset:function(){
			this.ball.visible = false;
			this.ball.x = this._data.startX;
			this.ball.y = Model.startY;

			this.arrow.value = this._data.Vx;
			
			this.pause();
			
			return this;
		},
		enable:function(){
			this.thumbnail.alpha = 1;
			this.pointers.forEach(function(p, i){
				p.visible = !this.data("point" + i);
			}, this);
			if(!this.auto){
				this.arrow.visible = true;
				this.arrow.enable();
			}
			
			return this;
		},
		disable:function(){
			this.thumbnail.alpha = 0.5;
			this.pointers.forEach(function(p){
				p.visible = false;
			}, this);
			this.arrow.visible = false;
			this.arrow.disable();
			return this;
		},
		data:function(key, value){
			if(arguments.length == 1){
				return this._data[key];
			} else {
				this._data[key] = value;
			}
			return this;
		},
		setTargets:function(array){
			var x;
			this.targetValues = array;
			this.pointers.forEach(function(p, i){
				x = p.x = this.data("startX") + Model.pointToPixel(array[i]) * this.data("direction");
			}, this);
			return x;
		},
		_onDrag:function(e){
			var event = new createjs.Event("velocityUpdated");
			// event.target = this;
			// event.data = {
				// velocity:e.currentTarget.value
			// };
			
			this.dispatchEvent(event);
		},
		generateVx:function(){
			// var distance = this.targetValues[Model.randomNumber(0, this.targetValues.length - 1)];
			// var diff = diffs[Model.randomNumber(0, diffs.length - 1)];
			// var Vx = Model.calcVx(distance) + diff;
			// console.log(distance, diff, Model.calcVx(distance))
			// this.velocity = Vx;
			// if(!this._velocities){
				var diffs = [2, 1, 0, 0, -0.5, 0.5];
				var Vx;
				var j, c = 0;
				this._velocities = [];
				this.targetValues.forEach(function(distance, i){
					for(j = 0; j < 3; j++){
						Vx = (Model.calcVx(distance) + diffs[c]).toFixed(1) * 1;
						Vx = Math.max(this.arrow.minStep, Math.min(this.arrow.maxStep, Vx));
						this._velocities.push(Vx);
						c++;
					}
				}, this);
				// console.log(this._velocities)
			// }
		},
		nextVx:function(){
			if(Model.randomNumber(0, 1) == 1){				
				this.velocity = this._velocities.pop();
			} else {
				this.velocity = this._velocities.shift();
			}
		},
		fire:function(Vx){
			if(arguments.length > 0){
				this.data("Vx", Vx);
				this.data("Vy", 0);
				this.ball.visible = true;
				this.arrow.disable();
			}
			this._tickCount = 0;
			createjs.Ticker.addEventListener("tick", this._tick);
			// Ticker.add({
				// delay:60,
				// callback:this._tick
			// });
		},
		pause:function(){
			createjs.Ticker.removeEventListener("tick", this._tick);
			// Ticker.remove(this._tick);
		},
		_tick:function(){
			var Vx = this.data("Vx"), Vy = this.data("Vy"), boundary = this.data("boundary");
			var p = Model.nextPoint(Vx, Vy), i = 0, hit = false, e;
			p.x = sV(Model.pointToPixel(p.x)), p.y = sV(Model.pointToPixel(p.y));
			var _p = {
				x:this.ball.x + p.x * this.data("direction"),
				y:this.ball.y - p.y,
			}
			for(; i < boundary.length; i++){
				var _i = Model.doIntersect(_p, this.ball, boundary[i][0], boundary[i][1]);
				if(_i){
					hit = true;
					e = new createjs.Event("hit");
					e.currentTarget = this;
					e.data = {
						hit:i,
						point:_i
					}
					// if(i == Model.GROUND){
						// var tolerance = Model.pointToPixel(2);
						// if(!this.data("point1") && ((this.pointers[1].x - tolerance) < _i.x) && ((this.pointers[1].x + tolerance) > _i.x)){
							// this.data("point1", true);
							// e.data.targetHit = true;
						// }
					// }
					this.dispatchEvent(e);
					this.pause();
					this.ball.visible = false;
					return;
				}
			}
			
			this.ball.x += p.x * this.data("direction") //+ this.data("startX");
			this.ball.y -= p.y //+ this.data("startY");
			
			this.data("Vy", Vy + Model.g * Model.step);
			
			// console.log(Vy)
			if(hit){
				
			}
			// if(this._tickCount >= 100){
				// this.pause();
			// }
			// this._tickCount++;
		}
	};
	Object.defineProperty(Class.prototype, "velocity", {
		get:function(){
			return this.arrow.value;
		},
		set:function(value){
			this.arrow.value = value;
		}
	});
	createjs.EventDispatcher.initialize(Class.prototype);
	
	return Class;
})();

var Model = {
	_data:null,
	g:-9.8,
	unit:7.09,
	step:0.05,
	startY:228,
	baseY:596
};

Object.defineProperty(Model, "data", {
	get:function(){
		return this._data;
	},
	set:function(value){
		this._data = value;
	}
});

Model.nextPoint = function(Vx, Vy){
	var p = {};
	p.x = Vx * Model.step;
	p.y = Vy * Model.step;
	return p;
}

Model.pointToPixel = function(value){
	return value * Model.unit;
}

Model.calcVx = function(distance){
	return distance / Math.sqrt(2 * Model.height / Math.abs(Model.g));
}

Model.pixelToPoint = function(value){
	return value / Model.unit;
}

Model.randomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

Model.doIntersect = function(p1, q1, p2, q2/* , *i_x, *i_y */){
	var i = {};
    var s1_x, s1_y, s2_x, s2_y;
    s1_x = q1.x - p1.x;     s1_y = q1.y - p1.y;
    s2_x = q2.x - p2.x;     s2_y = q2.y - p2.y;

    var s, t;
    s = (-s1_y * (p1.x - p2.x) + s1_x * (p1.y - p2.y)) / (-s2_x * s1_y + s1_x * s2_y);
    t = ( s2_x * (p1.y - p2.y) - s2_y * (p1.x - p2.x)) / (-s2_x * s1_y + s1_x * s2_y);

    if (s >= 0 && s <= 1 && t >= 0 && t <= 1){
        // Collision detected
        // if (i.x != NULL)
		i.x = p1.x + (t * s1_x);
        // if (i_y != NULL)
		i.y = p1.y + (t * s1_y);
        return i;
    }

    return false; // No collision
}


Model.heightInPixel = Model.baseY - Model.startY;
Model.height = Model.pixelToPoint(Model.heightInPixel);

Model.GROUND = 0;
Model.DOOR = 1;
Model.BASE = 2;
Model.WALL = 3;