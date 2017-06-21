var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		
		this._totalTurns = 4;
		this.cacheData = {
			tower_blast:[-500, -500, 1000, 1000, 2]
		}
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		var scope = this;
		
		this._setGameMode = setGameMode.bind(this);
		this._fireClicked = fireClicked.bind(this);
		this._pauseClicked = pauseClicked.bind(this);
		this._playClicked = playClicked.bind(this);
		this._onDataChange = onDataChange.bind(this);
		this.reset = this.reset.bind(this);
		
		this.layout.compBtn.enable().addEventListener("click", this._setGameMode);
		this.layout.playerBtn.enable().addEventListener("click", this._setGameMode);

		// this.layout.fireButton.addEventListener("click", this._fireClicked);
		this.layout.pauseButton.addEventListener("click", this._pauseClicked);
		this.layout.playButton.addEventListener("click", this._playClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);
		this.layout.blur_bg.addEventListener("click", function(){});// to prevent click behind this image
		this.layout.blur_bg1.addEventListener("click", function(){});// to prevent click behind this image

		this.layout.playAgainBtn.addEventListener("click", this.reset);
		this.layout.playAgainBtn.cursor = "pointer";
		
		this.layout.speedStepper.addEventListener("valueChange", function(e){
			scope.activePlayer.velocity = e.currentTarget.value;
			scope.layout.speedText.text = e.currentTarget.value.toFixed(1);
		});
		this.layout.angleStepper.addEventListener("valueChange", function(e){
			scope.activePlayer.angle = 360 - e.currentTarget.value;
			scope.layout.angleText.text = e.currentTarget.value.toFixed(1);
			scope._onDataChange();
		});
		this._extraMCs = [];
		
		this.layout.arrow1.snapToPixel = false;
		this.layout.arrow2.snapToPixel = false;
		this.layout.cannon1.snapToPixel = false;
		this.layout.cannon2.snapToPixel = false;

		// this.vLine1 = new VectorLine(this.layout.arrow1, {x:this.layout.cannon1.x, y:this.layout.cannon1.y - 5}, {min:20, max:100}, {min:270, max:270+45}, this.layout.arrow1Line);
		// this.vLine1.unit = 2.5;
		// this.vLine1.enable();
		// this.layout.playerSelection.visible = false;
		createPlayers.call(this);
	}
	
	Activity.prototype.reset = function(){
		var targetValue1 = 160;
		var targetValue2 = 160;
		// if(targetValue2 == 90 - targetValue1){
			// targetValue2 = targetValue1;
		// }
		// console.log(targetValue1)
		// console.log(targetValue2)
		var x1 = this.player1.setTargets([200, targetValue1]);
		var x2 = this.player2.setTargets([200, targetValue2]);
		if(this.player2.auto){
			// this.player2.generateVx();
		}
		
		this.layout.peopleRun2.x = x1;
		this.layout.peopleRun1.x = x2;
		this.layout.peopleRun2.gotoAndStop(0);
		this.layout.peopleRun2.removeAllEventListeners("tick");
		this.layout.peopleRun1.gotoAndStop(0);
		this.layout.peopleRun1.removeAllEventListeners("tick");
		this.layout.blast.visible = false;
		this.layout.blast.gotoAndStop(0);
		this.layout.blast.removeAllEventListeners("tick");
		this.layout.tower_blast_1.gotoAndStop(0);
		this.layout.tower_blast_1.uncache();
		this.layout.tower_blast_1.removeAllEventListeners("tick");
		this.layout.tower_blast_2.uncache();
		this.layout.tower_blast_2.gotoAndStop(0);
		this.layout.tower_blast_2.removeAllEventListeners("tick");
		
		this.layout.peopleRun1.visible = true;
		this.layout.peopleDie1.visible = false;
		this.layout.peopleWin1.visible = false;
		this.layout.peopleRun2.visible = true;
		this.layout.peopleDie2.visible = false;
		this.layout.peopleWin2.visible = false;
		
		
		this.player1.data("point0", false).data("point1", false).reset();
		this.player2.data("point0", false).data("point1", false).reset();
		this.player1.turn = 0;
		this.player2.turn = 0;
		
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
		
		// removing canonball from the ground
		this._extraMCs.forEach(function(mc){
			mc.removeAllEventListeners("tick");
			mc.gotoAndStop(0);
			mc.parent.removeChild(mc);
		});
		this._extraMCs = [];
		
		clearTimeout(this.timeoutId);
		
		nextTurn.call(this);
		
		this.layout.playAgainScreen.visible = false;
		
		// this.layout.pauseButton.visible = true;
		// this.layout.playButton.visible = false;
	}
	
	function playClicked(e){
		if(this._resetState){
			this._resetState = false;
			this._fireClicked();
		} else {
			this.activePlayer.fire();
		}
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
		
	}
	
	function pauseClicked(e){
		this.layout.pauseButton.visible = false;
		this.layout.playButton.enable().visible = true;
		this.activePlayer.pause();
	}
	
	function fireClicked(e){
		// this.layout.fireButton.disable();
		this.layout.angleStepper.disable();
		this.layout.speedStepper.disable();
		this.layout.pauseButton.enable();
		this.activePlayer.fire(true);
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
		// var boundary = Lab.data.player1.boundary//.concat(Lab.data.player2.boundary);
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
		
		this.layout.angleStepper.updateMinMax(360 - Math.max(this.activePlayer.arrow._minAngle, this.activePlayer.arrow._maxAngle), 360 - Math.min(this.activePlayer.arrow._minAngle, this.activePlayer.arrow._maxAngle), 0.5);
		
		this.activePlayer.enable();
		this.activePlayer.reset();
		// Model.data = Lab.data["player" + (this.playerIndex + 1)];
		this.layout.pauseButton.visible = false;
		this.layout.playButton.visible = true;
		if(!this.activePlayer.auto){
			// this.layout.fireButton.enable();
			this.layout.playButton.enable();
			this.layout.speedStepper.enable();
			this.layout.angleStepper.enable();
		} else {
			this.layout.playButton.disable();
			this.activePlayer.nextV();
		}
		this.layout.speedStepper.value = this.activePlayer.velocity;
		this.layout.angleStepper.value = this.activePlayer.angle;
		this.layout.speedText.text = this.activePlayer.velocity.toFixed(1);
		this.layout.angleText.text = this.activePlayer.angle;
		this.layout["line" + (this.playerIndex + 1)].visible = true;
		
		console.log(this.activePlayer.data("point1"))
		if(!this.activePlayer.data("point1")){
			var mc = this.layout["peopleRun" + (this.playerIndex == 0 ? 2 : 1)];
			var nextPlayer = this["player" + (this.playerIndex == 0 ? 2 : 1)];
			var x1 = this.activePlayer.setTargets([200, 160 - 40 * this.activePlayer.turn]);
			console.log(160 - 40 * this.activePlayer.turn, this.activePlayer.turn)
			// if(this.activePlayer.auto){
				// this.activePlayer.generateVx();
			// }
			
			mc.x = x1;
		}
		
		if(this.activePlayer.auto){
			// Ticker.add({
				// delay:1000,
				// callback:function(){
					// fireClicked.call(scope);
				// },
				// once:true
			// });
			this.timeoutId = setTimeout(function(){
				fireClicked.call(scope);
			}, 1000);
		}
		this._resetState = true;
		this._onDataChange();
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
			
		this.vLine1 = new VectorLine(this.layout.arrow1, {x:this.layout.cannon1.x, y:this.layout.cannon1.y}, {min:15, max:60}, {min:270, max:270+45}, this.layout.arrow1Line, {color:"#0066FF"}, 0.5);
		this.player1 = new Player(this.layout.p1thumb, [this.layout.point2_1, this.layout.point2_2], this.vLine1, this.layout.canonBall1);
		this.vLine1.unit = 3;
		this.vLine1.enable();
		this.vLine2 = new VectorLine(this.layout.arrow2, {
			x:this.layout.cannon2.x, 
			y:this.layout.cannon2.y
		}, {min:15, max:60}, {min:270-45, max:270}, this.layout.arrow2Line, {color:"#F22E1E"}, 0.5);
		this.player2 = new Player(this.layout.p2thumb, [this.layout.point1_1, this.layout.point1_2], this.vLine2, this.layout.canonBall2);
		this.vLine2.unit = 3;
		this.vLine2.enable();
		
		for(i in Lab.data){
			for(j in Lab.data[i]){
				this[i].data(j, Lab.data[i][j]);
			}
		}
		this.player1.data("velocity", this.player1.data("defaultV")).data("angle", this.player1.data("defaultA")).addEventListener("dataChange", this._onDataChange);
		this.player2.data("velocity", this.player2.data("defaultV")).data("angle", this.player2.data("defaultA")).addEventListener("dataChange", this._onDataChange);
		
		this._hit = hit.bind(this);
		this.player1.addEventListener("hit", this._hit);
		this.player2.addEventListener("hit", this._hit);
	}
	
	function onDataChange(e){
		this.layout.speedStepper.value = this.activePlayer.velocity;
		this.layout.angleStepper.value = 360 - this.activePlayer.angle;

		this.layout.speedText.text = this.activePlayer.velocity.toFixed(1);
		this.layout.angleText.text = this.layout.angleStepper.value.toFixed(1);
		
		this.layout["cannon" + (this.playerIndex + 1)].rotation = this.layout["cannon" + (this.playerIndex + 1)]._defAngle + this.activePlayer.angle;
	}
	
	function checkSoldierHit(_i){
		var f1 = this.layout.peopleRun1;
		var f2 = this.layout.peopleRun2;
		var ltolerance = Model.pointToPixel(8.5);
		var rtolerance = Model.pointToPixel(9.5);
		if(this.playerIndex == 1){
			rtolerance = Model.pointToPixel(8.5);
			ltolerance = Model.pointToPixel(9.5);
		}
		var res = {};
		if(((f1.x - ltolerance) <= _i.x) && ((f1.x + rtolerance) >= _i.x)){
			f1.visible = false;
			res.mc = this.layout.peopleDie1;
			res.mc.x = f1.x;
			res.mc.y = f1.y;
			res.index = 2;
			return res;
		}
		if(((f2.x - ltolerance) <= _i.x) && ((f2.x + rtolerance) >= _i.x)){
			f2.visible = false;
			res.mc = this.layout.peopleDie2;
			res.mc.x = f2.x;
			res.mc.y = f2.y;
			res.index = 1;
			return res;
		}
		return false;
	}
	
	function hit(e){
		var mc, scope = this;
		this.layout.pauseButton.disable();
		this.activePlayer.turn++;
		switch (e.data.hit){
			case 7:
				var res = /* false// */checkSoldierHit.call(this, e.data.point);
				// console.log(res);
				if(res && !this["player" + res.index].data("point1")){
					mc = res.mc;
					mc.visible = true;
					console.log(res.index)
					this["player" + res.index].data("point1", true);
				} else {
					mc = new lib.Ballanimation();
					lab.mc = mc;
					mc.scaleX = mc.scaleY = 1;
					mc.loop = false;
					mc.regX = this.playerIndex == 0 ? -1 : 2;
					mc.x = e.data.point.x;
					mc.y = e.data.point.y;
					this._extraMCs.push(mc);
					this.addChild(mc);
				}
				console.log(this.activePlayer.data("point1"))
				mc.addEventListener("end", function(){
					// if(mc.currentFrame == mc.totalFrames - 1){
						// mc.paused = true;
						mc.removeAllEventListeners("end");
						bringEnemiesCloser.call(scope);
					// }
				});
				mc.gotoAndPlay(0);
			break;
			case 11:
				if(!this.activePlayer.data("point0")){
					this.activePlayer.turn--;
					this.activePlayer.data("point0", true);
					mc = this.layout["tower_blast_" + (this.playerIndex == 0 ? "2" : "1")];
					mc.uncache();
					mc.addEventListener("end", function(){
						mc.removeAllEventListeners("end");
						mc.cache.apply(mc, scope.cacheData.tower_blast);
						nextTurn.call(scope);
					});
					mc.gotoAndPlay(0);
				} else {
					// nextTurn.call(scope);
					bringEnemiesCloser.call(scope);
				}
			break;
			// case Model.DOOR:
			case 0:
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 8:
			case 9:
			case 10:
				mc = /* new lib.blast_Canvas();// */this.layout.blast;
				mc.visible = true;
				mc.x = e.data.point.x;
				mc.y = e.data.point.y;
				mc.addEventListener("end", function(){
					// if(mc.currentFrame == mc.totalFrames - 1){
						mc.parent.removeChild(mc);
						mc.removeAllEventListeners("end");
						bringEnemiesCloser.call(scope);
					// }
				});
				this.addChild(mc);
				mc.gotoAndPlay(0);
				
			break;
			// case 5:
				// console.log("boom");
			// break;
		}
	}
	
	function bringEnemiesCloser(){
		this.activePlayer.disable();
		var scope = this;
		var mc = this.layout["peopleRun" + (this.playerIndex == 0 ? 2 : 1)];
		var nextPlayer = this["player" + (this.playerIndex == 0 ? 2 : 1)];
		var total = 3, count = 0;
		console.log(this.activePlayer.data("point1"))
		if(!this.activePlayer.data("point1")){
			mc.addEventListener("tick", function(){
				if(mc.paused == false){
					if(count < total - 1 && mc.currentFrame == 26){
						count++;
						mc.gotoAndPlay(6);
					}
					if(mc.currentFrame >= mc.totalFrames - 1){
						count++;
						if(count >= total){
							mc.removeAllEventListeners("tick");
							mc.paused = true;
							nextTurn.call(scope);
							// if(Model.shootStep != Model.totalStep){
								// nextTurn.call(scope);
							// } else {
								// windowAnimation.call(scope);
							// }
						}
					}
					mc.x += nextPlayer.data("direction") * 1.95;
					if(nextPlayer.data("direction") == -1){
						if(mc.x <= nextPlayer.data("soldierEndX")){
							winAnimation.call(scope, scope.layout.peopleWin2, mc);
						}
					} else {
						if(mc.x >= nextPlayer.data("soldierEndX")){
							winAnimation.call(scope, scope.layout.peopleWin1, mc);
						}
					}
					// if(mc.x <= 384 && breaked == false){
						// total++;
						// breaked = true;
						// showEndAnimation.call(scope);
					// }
				}
			});
			mc.gotoAndPlay(0);
		} else {
			nextTurn.call(scope);
		}	
	}
	
	function winAnimation(mc, mc2){
		var player = this.playerIndex == 0 ? this.player2 : this.player1;
		player.data("point0", true).data("point1", true);
		var scope = this;
		mc2.removeAllEventListeners("tick");
		mc2.paused = true;
		mc2.visible = false;
		mc.visible = true;
		mc.x = mc2.x;
		mc.y = mc2.y;
		mc.addEventListener("end", function(){
			mc.removeAllEventListeners("end");
			nextTurn.call(scope);
		});
		mc.gotoAndPlay(0);
	}
	
	return Activity;
})();

Lab.data = {
	player1:{
		direction:1,
		defaultV:55,
		defaultA:295,
		startX:199,
		soldierEndX:786,
		boundary:[
			[{x:936 ,y:88}, {x:901,y:160}],		// wall
			[{x:901,y:160}, {x:914,y:245}],		// wall
			[{x:914,y:245}, {x:846,y:247}],		// wall
			[{x:846,y:247}, {x:866,y:320}],		// wall
			[{x:866,y:320}, {x:860,y:483}],		// wall  -8
			[{x:834,y:493}, {x:866,y:550}],		// wall
			[{x:869,y:550}, {x:820,y:610}],		// wall
			[{x:225,y:545}, {x:785,y:545}],		// ground
			[{x:242,y:550}, {x:234,y:585}],		// cannon area
			[{x:234,y:585}, {x:212,y:600}],		// cannon area
			[{x:212,y:600}, {x:188,y:600}],		// cannon area
			[{x:875,y:483}, {x:866,y:550}],		// door
		]
	},
	player2:{
		direction:-1,
		defaultV:55,
		defaultA:245,
		startX:812,
		soldierEndX:264,
		boundary:[
			[{x:69  ,y:62}, {x:121,y:204}],		// wall
			[{x:121,y:204}, {x:97,y:238}],		// wall
			[{x:97,y:238}, {x:166,y:247}],		// wall
			[{x:166,y:247}, {x:150,y:295}],		// wall
			[{x:154,y:295}, {x:150,y:483}],		// wall  +8
			[{x:177,y:493}, {x:145,y:556}],		// wall
			[{x:139,y:556}, {x:190,y:610}],		// wall
			[{x:225,y:545}, {x:785,y:545}],		// ground
			[{x:785,y:546}, {x:798,y:587}],		// cannon area
			[{x:798,y:587}, {x:815,y:600}],		// cannon area
			[{x:815,y:600}, {x:833,y:600}], 	// cannon area
			[{x:145,y:483}, {x:145,y:550}],		// door
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
			this.ball.x = this.arrow._baseVector.x;
			this.ball.y = this.arrow._baseVector.y;
			
			this.arrow.magnitude = this._data.velocity;
			this.arrow.angle = this._data.angle;
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
			var event = new createjs.Event("dataChange");
			
			this.data("velocity", this.velocity);
			this.data("angle", this.angle);
			
			this.dispatchEvent(event);
		},
		generateVx:function(){
			// var distance = this.targetValues[Model.randomNumber(0, this.targetValues.length - 1)];
			// var diff = diffs[Model.randomNumber(0, diffs.length - 1)];
			// var Vx = Model.calcVx(distance) + diff;
			// console.log(distance, diff, Model.calcVx(distance))
			// this.velocity = Vx;
			// if(!this._velocities){
				// var diffs = [2, 1, 0, 0, -0.5, 0.5];
				// var Vx;
				// var j, c = 0;
				// this._velocities = [];
				// this.targetValues.forEach(function(distance, i){
					// for(j = 0; j < 3; j++){
						// Vx = (Model.calcVx(distance) + diffs[c]).toFixed(1) * 1;
						// Vx = Math.max(this.arrow.minStep, Math.min(this.arrow.maxStep, Vx));
						// this._velocities.push(Vx);
						// c++;
					// }
				// }, this);
				// console.log(this._velocities)
			// }
		},
		nextV:function(){
			var angle = 55;
			var rand = Math.round(Math.random());
			var rand2 = Model.randomNumber(0,10);
			var hDist, spd, i;
			if(!this.data("point0") && rand == 1){
				hDist = this.targetValues[0];
				i = 0;
			} else {
				hDist = this.targetValues[1] - this.targetValues[1] / 20;
				i = 1;
			}
			spd = Math.sqrt(Math.abs(9.8 * hDist / Math.sin(2 * angle * Maths.TO_RADIANS)));
			if(i != 1){
				if(rand2 < 4){
					spd -= 0.1;
				} else if(rand2 < 7){
					spd += 0.2;
				}
				console.log("random")
			} else {
				// spd -= 0.02;
			}
			this.arrow.angle = angle;
			this.arrow.magnitude = spd;
			console.log(spd, angle)
		},
		fire:function(bool){
			if(arguments.length > 0){
				this.data("velocity", this.arrow.magnitude);
				this.data("angle", this.arrow.angle);
				var p = this.arrow._baseVector.add(Vector.components(22, this.arrow.angle * Maths.TO_RADIANS));
				// console.log(p)
				this.ball.x = p.x;
				this.ball.y = p.y;
				var v = Vector.components(this.arrow.magnitude, this.arrow.angle * Maths.TO_RADIANS);
				// console.log(this.data("direction"))
				this.data("Vx", v.x);
				this.data("Vy", -v.y);
				this.ball.visible = true;
				this.arrow.disable();
				this.arrow.visible = false;
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
			p.x = Model.pointToPixel(p.x), p.y = Model.pointToPixel(p.y);
			var _p = {
				x:this.ball.x + p.x,
				y:this.ball.y - p.y,
			}
			for(; i < boundary.length && this._tickCount > 20; i++){
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
			
			this.ball.x += p.x - 0.04 * this.data("direction") //+ this.data("startX");
			this.ball.y -= p.y //+ this.data("startY");
			
			this.data("Vy", Vy + Model.g * Model.step);
			
			// console.log(Vy)
			if(hit){
				
			}
			// if(this._tickCount >= 100){
				// this.pause();
			// }
			this._tickCount++;
		}
	};
	Object.defineProperty(Class.prototype, "velocity", {
		get:function(){
			return this.arrow.magnitude;
		},
		set:function(value){
			this.arrow.magnitude = value;
		}
	});
	Object.defineProperty(Class.prototype, "angle", {
		get:function(){
			return this.arrow.angle;
		},
		set:function(value){
			this.arrow.angle = value;
		}
	});
	createjs.EventDispatcher.initialize(Class.prototype);
	
	return Class;
})();

var Model = {
	_data:null,
	g:-9.8,
	unit:3.4,
	step:0.05,
	startY:187,
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