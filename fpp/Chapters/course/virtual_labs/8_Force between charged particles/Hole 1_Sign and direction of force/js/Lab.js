var TYPE_BALL = "ball";
var TYPE_CLUB = "putter";
var scores = {"score1":0,"score2":0,"score3":0,"score4":0,"score5":0,"total":0};
var diff = {"diff1":"--","diff2":"--","diff3":"--","diff4":"--","diff5":"--","totalDiff":"--"};
var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		this._unit = 192.47;// calculated from legacy and converted from 760 to 1024 px screen size.
		this._ballRadius = 6.25;
		this._ballWidth = 12.55;
		this._putterCharge = 0;
		this._updatePutter = this._updatePutter.bind(this);
		this._play = this._play.bind(this);
		this._onBallStop = this._onBallStop.bind(this);
		this._enterFrame = this._enterFrame.bind(this);
		this.reset = this.reset.bind(this);
		this.putCount=0;
		this.totalDiff =0;
		this.total=0;
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	
	Activity.prototype.constructor = Activity;
	
	Activity.prototype.startLab = function(){
		var scope = this;
		scope.layout.stepper.value=0;
		this._createInstances();
		this._updateTable = updateTable.bind(this);
		
		this.layout.playButton.enable().addEventListener("click",scope._play);
		this.layout.resetButton.enable().addEventListener("click",scope.reset);
		
		this.layout.stepper.enable().addEventListener("valueChange", function(e){
			if(e.currentTarget.value>0){
				scope.layout.chargePutter.color="red";
			}
			else{
				scope.layout.chargePutter.color="black";
			}
			
			scope.layout.charge.text=e.currentTarget.value;
			scope.layout.chargePutter.text=e.currentTarget.value;
			scope._allCharges.putter.charge = e.currentTarget.value;
			// scope._putterCharge = e.currentTarget.value;
		});
		
		this.reset();
	}
	
	function updateTable(){
		this.layout.score1.text = this.putCount;
		this.layout.total.text = this.putCount;
		
		this.temp = -(4 - this.putCount);
		this.total = -(this.totalDiff - this.putCount);
		
		if(this.temp < 0){
			this.layout.diff1.color="green";
			this.layout.diff1.text = this.temp;
		}
		else{
			this.layout.diff1.color="red";
			this.layout.diff1.text = "+"+this.temp;
		}
		
		if(this.total < 0){
			this.layout.totalDiff.color="green";
			this.layout.totalDiff.text = this.total;
		}
		else{
			this.layout.totalDiff.color="red";
			this.layout.totalDiff.text = "+"+this.total;
		}
		scores["score1"]=this.putCount;
		diff["diff1"]=this.temp;
	}
	
	Activity.prototype._initializeTable= function(){
		for(var i in scores){
			if(scores[i]!=0){
				this.layout[i].text=scores[i];
			}
		}
		
		for(var i in diff){
			if(diff[i]>0){
				this.layout[i].color="red";
				this.layout[i].text="+"+diff[i];
			}
			else{
				this.layout[i].color="black";
				this.layout[i].text=diff[i];
			}
		}
	}
	
	Activity.prototype.reset = function(){
		this._initializeTable();
		this.layout.distance.text="0.490";
		
		this._allCharges.putter.reset();
		// this._allCharges.putter.rotation=180;
		this._allCharges.ball.reset();
		
		createjs.Tween.get(this.layout.ball, {override:true}).to({scaleX:1.6,scaleY:1.6}, 0, createjs.Ease.linear);
		this.layout.ball.visible=true;
		this.totalDiff = diff["totalDiff"];
		if(this.totalDiff == "--"){
			this.totalDiff = 24;
			this.layout.totalDiff.color="black";
			this.layout.totalDiff.text="--";
		}
		else if(this.totalDiff < 0){
			this.layout.totalDiff.color="green";
			this.layout.totalDiff.text=this.totalDiff;
			this.totalDiff=-(this.totalDiff);
		}
		else{
			this.layout.totalDiff.color="red";
			this.layout.totalDiff.text=this.totalDiff;
			this.totalDiff=-(this.totalDiff);
		}
		
		if(scores["total"] !=0){
			this.total = scores["total"];
			this.layout.total.text=this.total;
		}
		else{
			this.layout.total.text="--";
			this.total=0;
		}
		this.layout.YouDidIt.visible=false;
		this.layout.playButton.enable();
		this.layout.score1.text=0;
		this.layout.diff1.color="black";
		this.layout.diff1.text="--";
		this.putCount=0;
		this._onBallStop();
	}
	
	Activity.prototype._enterFrame = function(){
		this._allCharges.putter.xRadius = Maths.getDistance(this._allCharges.putter, this._allCharges.ball);
		this._allCharges.ball.update(this._chargesActingOnBall);
	}
	
	Activity.prototype._play = function(){
		
		this.putCount++;
		this._updateTable();		
		
		this.layout.playButton.disable();
		this._allCharges.ball.started = true;
		this._allCharges.putter.disable();
		// this._allCharges.putter.charge = this._putterCharge;
		this._allCharges.ball.stopped = false;
		this._allCharges.ball.time = 0;
		
		createjs.Ticker.addEventListener("tick", this._enterFrame);
	}
	
	Activity.prototype._updatePutter = function(e){
		this._allCharges.putter.updateRotation(this._allCharges.ball, this._ballRadius/*  + 1.35 */);
		this._allCharges.putter.xRadius = Maths.getDistance(this._allCharges.putter, this._allCharges.ball);
		
		this.layout.putter._hitBounds = this.layout.putter.getBounds().clone();
		this.layout.putter._hitBounds.width *= 4;
		this.layout.putter._hitBounds.height *= 6;
		// this.layout.putter._hitBounds.x -= this.layout.putter.x;
		// this.layout.putter._hitBounds.y -= this.layout.putter.y;
		// console.log(this._allCharges.putter.distance(this._allCharges.ball, this._ballRadius))
	}
	
	Activity.prototype._createInstances = function(){
		var array = ["ball", "putter", "chargep10e"],
			object,
			scope = this;
		this._chargesActingOnBall = [];
		this._allCharges = {};
		array.forEach(function(value, i){
			object = new ChargeClass({
				displayObject:this.layout[value],
				unit:this._unit
			});
			this._allCharges[value] = object;
			if(value !== "ball" /* && value !== "putter" */){
				this._chargesActingOnBall.push(object);
			}
		}, this);
		this._allCharges.putter/* .enable() */.addEventListener("moved", this._updatePutter);
		this._allCharges.ball.addEventListener("stopped", this._onBallStop);
	}
	
	Activity.prototype._onBallStop = function(){
		this._allCharges.putter.enable();
		// this._allCharges.putter.charge = 0;
		this._allCharges.ball.started = false;
		createjs.Ticker.removeEventListener("tick", this._enterFrame);
	}
	
	return Activity;
})();

var ChargeClass = (function(){
	var Class = function(o){
		this._initData = {
			x:o.displayObject.x,
			y:o.displayObject.y,
			rotation:o.displayObject.rotation,
			hitBounds:(o.displayObject._hitBounds ? o.displayObject._hitBounds.clone() : new createjs.Rectangle())
		}
		this._charge = o.displayObject._charge || 0;
		this._unit = o.unit;
		this._timeStep = 0.01;
		this._velocity = new Vector;
		this._acc = new Vector;
		this._Fc = new Vector;
		this._Ff = new Vector;
		this._Fnet = new Vector;
		this._tempPt = new Vector;
		this._force = new Vector;
		this._pressmove = this._pressmove.bind(this);
		this._pressup = this._pressup.bind(this);
		
		this.displayObject = o.displayObject;
		
		if(this.displayObject._rect_){
			this._rect = this.displayObject._rect_;
			this._rectShape = new createjs.Shape();
			this.displayObject.parent.addChild(this._rectShape);
			
			this._updateCollisionArea();
		}
		if(this.displayObject._circle_){
			this._circle = this.displayObject._circle_;
			this._rectShape = new createjs.Shape();
			this.displayObject.parent.addChild(this._rectShape);
			
			this._updateCollisionArea();
		}
		this._updateHitBounds();
	}
	
	createjs.EventDispatcher.initialize(Class.prototype);
	
	Class.prototype.reset = function(){
		this.x = this._initData.x;
		this.y = this._initData.y;
		this.rotation =0;// this._initData.rotation;
		this._velocity.set(0, 0);
		this._acc.set(0, 0);
		this._xF = 0;
		this._yF = 0;
		return this;
	}
	
	Class.prototype.distance = function(_charge, _length){
		return (Maths.getDistance(this, _charge)/*  - _length */) / this._unit;
	}
	
	Class.prototype.update = function(_charges){
		for(var i = 0; i < 5 && !this.stopped; i++){
			this._update(_charges, i);
		}
	}
	
	Class.prototype._Hole = function(_charges){
		
				// lab.layout.ball.visible=false;
				lab.layout.YouDidIt.visible=true;
				lab.layout.YouDidIt.addEventListener("click", this._click);
				lab.layout.YouDidIt.cursor = "pointer";
				lab.layout.ball.x=171;
				lab.layout.ball.y=347;
				createjs.Tween.get(lab.layout.ball).to({scaleX:0.2,scaleY:0.2}, 1000, createjs.Ease.linear);
				createjs.Ticker.removeEventListener("tick",lab._enterFrame);
		
	}
	
	Class.prototype._update = function(_charges, count){
		if(this.started){
			if(!this._startConditionsBool){
				this._startConditionsBool = true;
				this._startConditions(_charges);
			}
			if((lab.layout.ball.x < 182 && lab.layout.ball.x > 158 && lab.layout.ball.y<359 && lab.layout.ball.y>337) && (this._velocity.magnitude()<0.2)){
				this._Hole(_charges);
			}
			else{
				this.time += this._timeStep;
				this._moveObject(_charges);
			}
		} 
		
		if(this.type == TYPE_CLUB){
			// var temp = new Vector(this.x - );
		}
	}
	
	var startTime=-1;
	var lastTime=-1;
	
	Class.prototype._moveObject = function(_charges){
		lab.layout.distance.text=(Maths.getDistance(lab.layout.ball,lab.layout.putter)/lab._unit).toFixed(3);
		var speed,
			Fc = this._Fc,
			Ff = this._Ff,
			Fnet = this._Fnet;
		
		if(this.type == TYPE_BALL){
			
    		if (lastTime == -1){
    			lastTime = this.time;
    		}
    		if(startTime == -1){
    			startTime = this.time;
    		}
			
			if(this._stopped){
				/* this.time > 100 &&  */this.dispatchEvent("stopped");
				this._stopped = false;
				return;
			}
			
			speed = this._velocity.magnitude();
			if ((speed < (7) && (this.time - startTime) > 3) || ((this.time - startTime) > 5)){
				this._velocity.set(0, 0);
				this._stopped = true;
				lab.layout.playButton.enable();
				lastTime = this.time;
				return;
			}
			
     		if (this._outOfRange){
     			return;
     		}
			
			this._findAccelVecs(_charges);
			//deal with negatively charged putter.
 			if (_charges[0].charge < 0 && (Maths.getDistance(_charges[0], this) / this._unit) < 0.1){
				this._velocity.set(0, 0);
				this.x = _charges[0].x + Math.cos(_charges[0].rotation * Maths.TO_RADIANS) * .03;
				this.y = _charges[0].y + Math.sin(_charges[0].rotation * Maths.TO_RADIANS) * .03;
				lab.layout.playButton.enable();
				if((lab.layout.ball.x < 182 && lab.layout.ball.x > 158 && lab.layout.ball.y<359 && lab.layout.ball.y>337) && (this._velocity.magnitude()<0.2)){
					this._Hole(_charges);
					lab.layout.playButton.disable();
				}
				lab.layout.distance.text="0.030";
				this.dispatchEvent("stopped");
				this._stopped = false;
				return;
			}
			var m_vxp0 = this._velocity.x;
			var m_vyp0 = this._velocity.y;
			/////////////////////
  			//What is the friction acting on the golf ball?
			if(Math.abs(m_vxp0) > 0.001 || Math.abs(m_vyp0) > 0.001){
				var fAng = this._angleFromVec(m_vxp0, -m_vyp0) + Math.PI;
				Ff.set((Math.cos(fAng) * this.friction * -this.gravity), (Math.sin(fAng) * this.friction * -this.gravity));
				if (Ff.x == -this._xF && Math.abs(m_vxp0) < /* m_swnd.xpFromXw */(5)){ //if the force of friction is the exact opposite from the previous cycle, it indicates that the particle has changed direction due to the force of friction
  					Ff.x = 0;
  					this._velocity.x = 0;
  				}
				
  				if (Ff.y == -this._yF && Math.abs(m_vyp0) < /* m_swnd.xpFromXw */(5)){
 					Ff.y = 0;
 					this._velocity.y = 0;
 				}
 				this._xF = Ff.x;
 				this._yF = Ff.y;
			} else {
				Ff.set(0, 0);
			}
			
			Fnet.set(0.0, 0.0, 0.0);
			//if the force is gigantic (due to being too close to center of trap usually) then set force to max size. Don't set too low or sim becomes inaccurate
			if (Fc.magnitude() > 250){
				Vector.multiply(Fc, 1 / Fc.magnitude(), Fc);
				Vector.multiply(Fc, 250, Fc);
			}
			
			// skipped
 			// if (m_fInTrap){
 				// PT3D.scale(Ff, 5);
 			// }
			//
			Vector.add(Fc, Ff, Fnet);
			
			m_vxp0 = this._velocity.x;
			m_vyp0 = this._velocity.y;
			
			if (Fc.x != 0){
				if((Ff.x / Fc.x) < -1.00){ //the only force acting on the ball is friction
					if (m_vxp0 / (m_vxp0 + Fnet.x * this._timeStep) <= 0){//did it switch directions?
						this._velocity.set(0, 0);
						this._stopped = true;
						lab.layout.playButton.enable();
					}
				}
			} else if((m_vxp0 + (Fc.x + Ff.x) * this._timeStep) != 0){ //the only force acting on the ball is friction
				if(m_vxp0 / (m_vxp0 + (Fc.x + Ff.x) * this._timeStep) <= 0){ //did it switch directions?
					this._velocity.set(0, 0);
					this._stopped = true;
				lab.layout.playButton.enable();
				}
			}
			
			//////////////////
 			// code for sand trap skipped.
 			/////////////////
			Vector.multiply(Fnet, this._timeStep, Fnet);
			Vector.add(this._velocity, Fnet, this._velocity);
			
			m_vxp0 = this._velocity.x;
			m_vyp0 = this._velocity.y;
			
			this.x += m_vxp0 * this._timeStep * this._unit;
			this.y += m_vyp0 * this._timeStep * this._unit;
			if (this.y < -10000 || this.y > 10000 || this.x > 10000 || this.x < -10000){
				 this._outOfRange = true;
			}
			
			this._wallBounce();
		}
	}
	
	Class.prototype._startConditions = function(_charges){
		if(this.type != TYPE_BALL){
			return;
		}
		// start in trap skipped
		
		this._findAccelVecs(_charges);
		
		// gForceTime skipping, didn't understood
	}
	
	Class.prototype._findAccelVecs = function(_charges){
		var k = 8990000000.0;
		var a, aX, aY, vecLength;
		var soTemp;
		var Fc = this._Fc;
		var tempPt = this._tempPt;
		Fc.set(0, 0, 0);
		
		//what is the acceleration vector for all objects acting on me?
		for(var iso = 0; iso < _charges.length; iso++){
			soTemp = _charges[iso];
			tempPt.set(this.x - soTemp.x, this.y - soTemp.y);
			// if(soTemp.m_Type == TYPE_CLUB){
				// vecLength = soTemp.xRadius;
			// } else {
				// vecLength = tempPt.magnitude();
			// }
				vecLength = tempPt.magnitude();
			
			if(Math.pow(vecLength, 2) == 0){
				return null;
			}
			
			// skipping sandtrap code
			vecLength = vecLength / this._unit;
			a = ((k * this.charge * soTemp.charge) / Math.pow(vecLength, 2)) / this.protonMass;
			aX = Math.cos(this._angleFromVec(tempPt.x, tempPt.y)) * a;
    		aY = Math.sin(this._angleFromVec(tempPt.x, tempPt.y)) * a;
			
			tempPt.set(aX, -aY);
    		Vector.add(Fc, tempPt, Fc);
		}
	}
	
	Class.prototype._angleFromVec = function(x, y){
		var rad = Math.PI;
        if (x == 0) {
            if (y > 0) {
		      rad = Math.PI/2;
		    } else {
		      rad = -Math.PI/2;
		    }
        } else {
            rad = Math.atan(y / x);
            if (x < 0) rad += Math.PI;
        }
        return -rad;
	}
	
	Class.prototype.updateRotation = function(_charge, _length){
		var dist = Maths.getDistance(this, _charge);
		var angle = Maths.getAngle(this , _charge).toFixed(1) * 1;
		this.rotation = angle;
		if(dist <= (_length)) {
			var _p = Maths.getPoint(_charge, angle * Maths.TO_RADIANS,(_length));
			this.x = _p.x;
			this.y = _p.y;
		}
		return this;
	}
	
	Class.prototype.enable = function(){
		this.disable();
		this.displayObject.addEventListener("pressmove", this._pressmove);
		this.displayObject.addEventListener("pressup", this._pressup);
		this.displayObject.cursor = "move";
		return this;
	}
	
	Class.prototype.disable = function(){
		this.displayObject.removeEventListener("pressmove", this._pressmove);
		this.displayObject.removeEventListener("pressup", this._pressup);
		this.displayObject.cursor = "default";
		return this;
	}
	
	Class.prototype._pressmove = function(e){
		var p = this.displayObject.parent.globalToLocal(e.stageX, e.stageY);
		if(p.x>25 && p.x<1000){
			this.x = p.x;
		}
		if(p.y<666 && p.y>20){
			this.y = p.y;
		}
		lab.layout.distance.text=(Maths.getDistance(lab.layout.ball,lab.layout.putter)/lab._unit).toFixed(3);
		this.dispatchEvent("moved");
	}
	
	Class.prototype._pressup = function(){
		this._updateHitBounds();
	}
	
	Class.prototype._wallBounce=function(){
		if(this.x + lab._ballWidth > 1000){
			this._velocity.x = Math.abs(this._velocity.x) * -1;
			this.x=(1000 - lab._ballWidth/2 - 25);
		}
		else if(this.x < 25){
			this._velocity.x = Math.abs(this._velocity.x);
			this.x=(12.55 + lab._ballWidth/2 + 25);
		}
		
		if(this.y < 25){
			this._velocity.y = Math.abs(this._velocity.y);
			this.y=(lab._ballWidth /2 + 25);
		}
		else if(this.y + lab._ballWidth > 660){
			this._velocity.y = Math.abs(this._velocity.y) * -1;
			this.y=(660 - (lab._ballWidth/2+16));
		}
	}
	
	Class.prototype._click=function(){
		scores["total"]=lab.putCount;
		diff["totalDiff"]=lab.total;
		var a=JSON.stringify(scores);
		var b=JSON.stringify(diff);
		window.location.href="../Hole 2_How electric forces change with distance/index.html?"+a+"&"+b;
	}
	
	Class.prototype._updateHitBounds = function(){
		// if(!this.displayObject._hitBounds){
			// return false;
		// }
		// var dHitBounds = this._initData.hitBounds.clone();
		// var hitBounds = this.displayObject._hitBounds;
		// var x = dHitBounds.x - this.displayObject.regX;
		// var y = dHitBounds.y - this.displayObject.regY;
		// var array = [new Vector(x, y), new Vector(x + dHitBounds.width, y), new Vector(x + dHitBounds.width, y + dHitBounds.height), new Vector(x, y + dHitBounds.height)];
		// var angle = this.rotation * Maths.TO_RADIANS;
		// console.log(angle)
		// if(!this._shape_){
			// this._shape_ = new createjs.Shape();
			// this.displayObject.parent.addChild(this._shape_);
		// }
		// this._shape_.graphics.clear().setStrokeStyle(2).beginStroke("#ff0000");
		// array.forEach(function(p, i){
			// Vector.components(p.magnitude(), p.angle(true) + angle, p);
			// this._shape_.graphics[i == 0 ? "moveTo" : "lineTo"](p.x + this.x, p.y + this.y);
		// }, this);
		// this._shape_.graphics.lineTo(array[0].x + this.x, array[0].y + this.y).endStroke();
		// hitBounds.x = array[0].x// + this.displayObject.regX;
		// hitBounds.y = array[0].y// + this.displayObject.regY;
		// console.log(array[0])
		// if(!this._rectPoints){
			// this._rectPoints = [];
			// this._rect.forEach(function(a, i){
				// this._rectPoints.push(new Vector());
				// this._rect[i] = new Vector(a.x, a.y);
			// }, this);
		// }
		// console.log(this._rectPoints)
		// this._rectShape.graphics.clear().setStrokeStyle(2).beginStroke("#ff0000");
		// this._rectPoints.forEach(function(p, i){
			// Vector.components(this._rect[i].magnitude(), this._rect[i].angle(true) + this.rotation * Maths.TO_RADIANS, p);
			// Vector.add(this, p, p);
			// this._rectShape.graphics[i == 0 ? "moveTo" : "lineTo"](p.x, p.y);
		// }, this);
		// this._rectShape.graphics.lineTo(this._rectPoints[0].x, this._rectPoints[0].y).endStroke();
	
	}
	
	Class.prototype._updateCollisionArea = function(){
		var points = [], p;
		if(!this._rect && !this._circle){
			return false;
		}
		if(this._rect){
			if(!this._rectPoints){
				this._rectPoints = [];
				this._rect.forEach(function(a, i){
					this._rectPoints.push(new Vector());
					this._rect[i] = new Vector(a.x, a.y);
				}, this);
			}
			this._rectShape.graphics.clear().setStrokeStyle(2).beginStroke("#ff0000");
			this._rectPoints.forEach(function(p, i){
				Vector.components(this._rect[i].magnitude(), this._rect[i].angle(true) + this.rotation * Maths.TO_RADIANS, p);
				Vector.add(this, p, p);
				this._rectShape.graphics[i == 0 ? "moveTo" : "lineTo"](p.x, p.y);
			}, this);
			this._rectShape.graphics.lineTo(this._rectPoints[0].x, this._rectPoints[0].y).endStroke();
		}
		if(this._circle){
			this._rectShape.graphics.clear().setStrokeStyle(1).beginStroke("#000000").drawCircle(this.x + this._circle.x, this.y + this._circle.y, this._circle.r).endStroke();
		}
	}
	
	Object.defineProperty(Class.prototype, "x", {
		get:function(){
			return this.displayObject.x;
		},
		set:function(value){
			this.displayObject.x = value;
		}
	});
	
	Object.defineProperty(Class.prototype, "y", {
		get:function(){
			return this.displayObject.y;
		},
		set:function(value){
			this.displayObject.y = value;
			this._updateCollisionArea();
		}
	});
	
	Object.defineProperty(Class.prototype, "rotation", {
		get:function(){
			return this.displayObject.rotation;
		},
		set:function(value){
			this.displayObject.rotation = this._initData.rotation + value;
		}
	});
	
	Object.defineProperty(Class.prototype, "charge", {
		get:function(){
			return this._charge * this.protonCharge;
		},
		set:function(value){
			this._charge = value;
		}
	});
	
	Object.defineProperty(Class.prototype, "frictionalForce", {
		get:function(){
			return .4 * this.protonMass * this.gravity;
		}
	});
	
	Object.defineProperty(Class.prototype, "frictionalAcc", {
		get:function(){
			return .4 /* * this.protonMass */ * this.gravity;
		}
	});
	
	Object.defineProperty(Class.prototype, "friction", {
		get:function(){
			return .4;
		}
	});
	
	Object.defineProperty(Class.prototype, "gravity", {
		get:function(){
			return -9.8;
		}
	});
	
	Object.defineProperty(Class.prototype, "protonCharge", {
		get:function(){
			return 1.6e-19;
		}
	});
	
	Object.defineProperty(Class.prototype, "protonMass", {
		get:function(){
			return 1.67e-27;
		}
	});
	
	Object.defineProperty(Class.prototype, "type", {
		get:function(){
			return this.displayObject.name;
		}
	});
	
	
	return Class;
})();