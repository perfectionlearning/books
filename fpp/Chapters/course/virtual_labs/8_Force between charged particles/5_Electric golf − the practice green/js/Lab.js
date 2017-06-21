var TYPE_BALL = "ball";
var TYPE_CLUB = "putter";

var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		this._unit =192.47;// calculated from legacy and converted from 760 to 1024 px screen size.
		this._ballRadius = 6.25;
		this._ballWidth = 12.55;
		this._putterCharge = 0;
		this.started=false;
		
		this._play = this._play.bind(this);
		this._onBallStop = this._onBallStop.bind(this);
		this._enterFrame = this._enterFrame.bind(this);
		this.reset = this.reset.bind(this);
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	
	Activity.prototype.constructor = Activity;
	
	Activity.prototype.startLab = function(){
		var scope = this;
		scope.layout.stepper.value=0;
		this._createInstances();
		
		this.layout.playButton.enable().addEventListener("click",scope._play);
		this.layout.resetButton.enable().addEventListener("click",scope.reset);
		
		this.arrowline=this.layout.arrowline;
		this.arrow=this.layout.arrow;
		
		this.vector = new VectorLine(this.arrow,{x:this.layout.ball.x,y:this.layout.ball.y}, {min:-1000,max:2000}, {min:0, max:360},this.arrowline, {color:"black"});
		this.vector.unit = 16;
		this.vector.magnitude=0;
		this.vector.angle=0;
		
		this.layout.stepper.enable().addEventListener("valueChange", function(e){
			if(e.currentTarget.value>0){
				scope.layout.chargePutter.color="red";
			}
			else{
				scope.layout.chargePutter.color="black";
			}
			
			scope.layout.charge.text=e.currentTarget.value;
			if(!scope.started){
				if(e.currentTarget.value != 0){
					scope.vector.visible=true;
					scope.vector.magnitude = e.currentTarget.value;
				}
				else{
					scope.vector.visible=false;
				}
			}
			if(e.currentTarget.value<0){
				scope.vector.angle=180;
			}
			else{
				scope.vector.angle=0;
			}
			scope._allCharges.putter.charge = e.currentTarget.value;
			scope.layout.chargePutter.text=e.currentTarget.value;
		});
		
		this.layout.ball.snapToPixel=false;
		this.reset();
	}
	
	Activity.prototype.reset = function(){
		this._allCharges.putter.reset();
		this._allCharges.ball.reset();
		
		createjs.Tween.get(this.layout.ball, {override:true}).to({scaleX:1.6,scaleY:1.6}, 0, createjs.Ease.linear);
		
		this.layout.stepper.enable();
		if(this.layout.stepper.value !=0){
			this.vector.visible=true;
		}
		else{
			this.vector.visible=false;
		}
		this.vector.magnitude=this.layout.stepper.value;
		
		if(this.layout.stepper.value<0){
			this.vector.angle=180;
			}
		else{
			this.vector.angle=0;
		}
		this.layout.playButton.enable();
		this.layout.ball.visible=true;
		this.layout.YouDidIt.visible=false;
		this.started=false;
		this._onBallStop();
	}
	
	Activity.prototype._enterFrame = function(){
		this._allCharges.putter.xRadius = Maths.getDistance(this._allCharges.putter, this._allCharges.ball);
		this._allCharges.ball.update(this._chargesActingOnBall);
	}
	
	Activity.prototype._play = function(){
		this.started=true;
		this.vector.visible=false;
		this.layout.stepper.disable();
		this._allCharges.ball.started = true;
		this._allCharges.ball.stopped = false;
		this._allCharges.ball.time = 0;
		createjs.Ticker.addEventListener("tick", this._enterFrame);
		this.layout.playButton.disable();
	}
	
	Activity.prototype._createInstances = function(){
		var array = ["ball", "putter"],
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
		
		this.displayObject = o.displayObject;
	}
	
	createjs.EventDispatcher.initialize(Class.prototype);
	
	Class.prototype.reset = function(){
		this.x = this._initData.x;
		this.y = this._initData.y;
		this.rotation = this._initData.rotation;
		this._velocity.set(0, 0);
		this._acc.set(0, 0);
		this._xF = 0;
		this._yF = 0;
		return this;
	}
	
	Class.prototype.distance = function(_charge, _length){
		return ((Maths.getDistance(this, _charge)) / this._unit);
	}
	
	Class.prototype.update = function(_charges){
		for(var i = 0; i < 5 && !this.stopped; i++){
			this._update(_charges, i);
		}
	}
	
	Class.prototype._update = function(_charges, count){
		if(this.started){
			if(!this._startConditionsBool){
				this._startConditionsBool = true;
				this._startConditions(_charges);
			}
			if((lab.layout.ball.x < 884 && lab.layout.ball.x > 845) && (this._velocity.magnitude()<0.1)){
				// lab.layout.ball.visible=false;
				lab.layout.ball.x=865;
				createjs.Tween.get(lab.layout.ball).to({scaleX:0.1,scaleY:0.1}, 1000, createjs.Ease.linear);
				lab.layout.YouDidIt.visible=true;
				createjs.Ticker.removeEventListener("tick",lab._enterFrame);
			}
			else{
				this.time += this._timeStep;
				this._moveObject(_charges);
			}
		}
	}
	
	Class.prototype._moveObject = function(_charges){
		var speed,
			Fc = this._Fc,
			Ff = this._Ff,
			Fnet = this._Fnet;
		
		if(this.type == TYPE_BALL){
			
    		if (this._lastTime == -1){
    			this._lastTime = this.time;
    		}
    		if(this._startTime == -1){
    			this._startTime = this.time;
    		}
			
			if(this._stopped){
				this.dispatchEvent("stopped");
				this._stopped = false;
				return;
			}
			
			speed = this._velocity.magnitude();
			if ((speed < (7) && (this.time - this._startTime) > 3) || ((this.time - this._startTime) > 5)){
				this._velocity.set(0, 0);
				this._stopped = true;
				this._lastTime = this.time;
				return;
			}
			
     		if (this._outOfRange){
     			return;
     		}
			
			this._findAccelVecs(_charges);
			//deal with negatively charged putter.
 			if (_charges[0].charge < 0 && (_charges[0].xRadius / this._unit)-0.062 < (.1)){
				this._velocity.set(0, 0);
				this.x = _charges[0].x + 7 + Math.cos(_charges[0].rotation * Maths.TO_RADIANS) * .03;
				this.y = _charges[0].y + Math.sin(_charges[0].rotation * Maths.TO_RADIANS) * .03;
				this._stopped = true;
				return;
			}
			var m_vxp0 = this._velocity.x;
			var m_vyp0 = this._velocity.y;
			/////////////////////
  			//What is the friction acting on the golf ball?
			if(Math.abs(m_vxp0) > 0.001 || Math.abs(m_vyp0) > 0.001){
				var fAng = this._angleFromVec(m_vxp0, -m_vyp0) + Math.PI;
				Ff.set((Math.cos(fAng) * this.friction * -this.gravity), (Math.sin(fAng) * this.friction * -this.gravity));
				if (Ff.x == -this._xF && Math.abs(m_vxp0) <(1)){ //if the force of friction is the exact opposite from the previous cycle, it indicates that the particle has changed direction due to the force of friction
  					Ff.x = 0;
  					this._velocity.x = 0;
  				}
				
  				if (Ff.y == -this._yF && Math.abs(m_vyp0) < (5)){
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
			
			Vector.add(Fc, Ff, Fnet);
			
			m_vxp0 = this._velocity.x;
			m_vyp0 = this._velocity.y;
			
			if (Fc.x != 0){
				if((Ff.x / Fc.x) < -1.00){ //the only force acting on the ball is friction
					if (m_vxp0 / (m_vxp0 + Fnet.x * this._timeStep) <= 0.0){//did it switch directions?
						this._velocity.set(0, 0);
						this._stopped = true;
					}
				}
			} else if((m_vxp0 + (Fc.x + Ff.x) * this._timeStep) != 0){ //the only force acting on the ball is friction
				if(m_vxp0 / (m_vxp0 + (Fc.x + Ff.x) * this._timeStep) <= 0){ //did it switch directions?
					this._velocity.set(0, 0);
					this._stopped = true;
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
	
	Class.prototype._findAccelVecs = function(_charge){
		var k = 8990000000.0;
		var a, aX, aY, vecLength;
		var soTemp;
		var Fc = this._Fc;
		var tempPt = this._tempPt;
		Fc.set(0, 0, 0);
		
		//what is the acceleration vector for all objects acting on me?
		for(var iso = 0; iso < _charge.length; iso++){
			soTemp = _charge[iso];
			tempPt.set(this.x - soTemp.x, this.y - soTemp.y);
			vecLength = tempPt.magnitude();
		
			if(Math.pow(vecLength, 2) == 0){
				return null;
			}
			
			// skipping sandtrap code
			vecLength = (vecLength / this._unit)-0.0615;
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
	
	Class.prototype._wallBounce=function(){
		if(this.x + lab._ballWidth  > 1000){
			this._velocity.x = Math.abs(this._velocity.x) * -1;
			this.x=(1000 - lab._ballWidth/2 - 25);
		}
		else if(this.x < 16){
			this._velocity.x = Math.abs(this._velocity.x);
			this.x=(12.55 + lab._ballWidth/2 + 20);
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