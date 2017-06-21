var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		this._massIDs = ["mass1", "mass2", "mass3", "mass4", "mass5"];
		this._masses = [];
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		var scope = this;
		
		this._updateView = this._updateView.bind(this);
		this._enterFrame = this._enterFrame.bind(this);
		this.reset = this.reset.bind(this);
		this.play = this.play.bind(this);
		this.pause = this.pause.bind(this);
		
		this.layout.resetButton.addEventListener("click", this.reset);
		this.layout.playButton.addEventListener("click", this.play);
		this.layout.pauseButton.addEventListener("click", this.pause);
		this.layout.playButton.enable();
		this.layout.pauseButton.enable();
		this.layout.resetButton.enable();
		
		initializeObjects.call(this);
	}
	
	Activity.prototype.reset = function(){
		this._masses.forEach(function(m){
			m.reset();
			m.playing = false;
		});
		Ticker.remove(this._enterFrame);
		this.layout.pauseButton.visible = false;
		this.layout.playButton.visible = true;
	}
	
	Activity.prototype.play = function(){
		Ticker.add({
			fps:30,
			callback:this._enterFrame
		});
		this._masses.forEach(function(m){
			if(m.active){
				m.started = true;
			}
			m.playing = true;
		}, this);
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
	}
	
	Activity.prototype.pause = function(){
		Ticker.remove(this._enterFrame);
		this.layout.pauseButton.visible = false;
		this.layout.playButton.visible = true;
	}
	
	Activity.prototype._enterFrame = function(){
		if(this._totalMasses() <= 1){
			return;
		}
		// console.log(this._totalMasses())
		this._masses.forEach(function(m){
			if(m.active){
				m.started = true;
			}
			m.updateState(this._masses);
		}, this);
		
		// this._masses.forEach(function(m1){
			// this._masses.forEach(function(m2){
				// if(m1 != m2){
					// // console.log("here")
					// m2._restrictIntersect(m1);
				// }
			// }, this);
		// }, this);
	}
	
	Activity.prototype._updateView = function(e){
		this._masses.forEach(function(m){
			// this._masses.forEach(function(m2){
				if(m != e.currentTarget){
					// console.log("here")
					e.currentTarget._restrictIntersect(m);
				}
			// }, this);
		}, this);
		if(e.currentTarget.playing && e.fromEventType == "pressup"){
			e.currentTarget.started = true;
		}
		if(this._totalMasses() <= 1){
			this._masses.forEach(function(m){
				m._arrow.visible = false;
				m.labelCont.visible = false;
			}, this);
			return;
		}
		this._masses.forEach(function(m){
			if(!m.started)
			m.updateState(this._masses);
		}, this);
	}
	
	Activity.prototype._totalMasses = function(){
		var l = 0;
		this._masses.forEach(function(m){
			if(m.active && !m.attached){
				l++;
			}
		});
		return l;
	}
	
	function initializeObjects(){
		var scope = this, i = 1, object;
		var labelCont = this.layout.forceLabelC1;
		for(; i <= 5; i++){
			object = new MassObject({
				displayObject:this.layout["mass" + i],
				arrowImg:this.layout["arrow" + i],
				shape:this.layout["shape" + i],
				labelCont:this.addChild(labelCont.clone(true))
			});
			object.id = i;
			object.addEventListener("onUpdate", this._updateView);
			this._masses.push(object);
		}
		labelCont.visible = false;
		this.reset();
	}
	
	return Activity;
})();

var MassObject = (function(){
	var Class = function(o){
		this.children = [];
		this.forces = [];
		this.G = 6.67e-11;
		this._deltaT = 0.005;
		this._baseY = 710;
		this._velocityVec = new Vector();
		this._accVec = new Vector();
		this._forceVec = new Vector();
		this.displayObject = o.displayObject;
		this.labelCont = o.labelCont;
		this._defaultPos = {
			x:this.displayObject.x,
			y:this.displayObject.y,
		}
		
		this._arrow = new VectorLine(o.arrowImg, {x:0, y:0}, {min:0, max:1024}, {min:0, max:360}, o.shape);
		this._mousedown = this._mousedown.bind(this);
		this._pressMove = this._pressMove.bind(this);
		this._pressUp = this._pressUp.bind(this);
		this._unit = 1e15;
		
		this._labelOffset = {
			x:this.radius * 1.5,
			y:this.radius * 1.5,
			width:152
		}
		
		var shape = this.labelCont.getChildByName("shapeBg1");
		shape.graphics.clear().beginFill("#fff").drawRect(-15,-17,160,32);
	}
	
	Object.defineProperty(Class.prototype, "started", {
		get:function(){
			return this._started;
		},
		set:function(value){
			this._started = value;
			this._arrow.visible = !value;
			this.labelCont.visible = !value;
			if(value){
				this.disable();
			} else {
				this.enable();
			}
		}
	});
	
	Class.prototype.enable = function(){
		this.disable();
		this.displayObject.addEventListener("mousedown", this._mousedown);
		this.displayObject.addEventListener("pressmove", this._pressMove);
		this.displayObject.addEventListener("pressup", this._pressUp);
		this.displayObject.cursor = "move";
	}
	
	Class.prototype.disable = function(){
		this.displayObject.removeEventListener("mousedown", this._mousedown);
		this.displayObject.removeEventListener("pressmove", this._pressMove);
		this.displayObject.removeEventListener("pressup", this._pressUp);
		this.displayObject.cursor = "default";
	}
	
	Class.prototype._mousedown = function(e){
		this._arrow._bmp.parent.addChild(this._arrow._bmp);
		this._arrow._shape.parent.addChild(this._arrow._shape);
		this.displayObject.parent.addChild(this.displayObject);
		this.labelCont.parent.addChild(this.labelCont);
	}
	
	Class.prototype._pressMove = function(e){
		var p = this.displayObject.parent.globalToLocal(e.stageX, e.stageY);
		this.x = p.x;
		this.y = p.y;
		this._updateArrow();
	}
	
	Class.prototype._pressUp = function(e){
		// var p = this.displayObject.parent.globalToLocal(e.stageX, e.stageY);
		if(this.displayObject.y >= this._baseY){
			this.reset();
		} else {
			if(!this.active){
				this.active = true;
				var e = new createjs.Event("onUpdate");
				e.fromEventType = "pressup";
				this.dispatchEvent(e);
			}
		}
	}
	
	Class.prototype.reset = function(){
		this.children.length = 0;
		this.parent = null;
		this.x = this._defaultPos.x;
		this.y = this._defaultPos.y;
		this.enable();
		this.attached = false;
		this.active = false;
		this.started = false;
		this._updateArrow();
		this._arrow.magnitude = 0;
		this._arrow.visible = false;
		this.labelCont.visible = false;
	}
	
	Class.prototype._updateArrow = function(){
		this._arrow._baseVector.x = this.x;
		this._arrow._baseVector.y = this.y;
		this._arrow.magnitude = this._arrow.magnitude;
		
		this.labelCont.x = this.x + this._labelOffset.x;
		this.labelCont.y = this.y + this._labelOffset.y;
		
		if(this.labelCont.x + this._labelOffset.width >= stageWidth){
			this.labelCont.x = this.x - this._labelOffset.x - this._labelOffset.width;
		}
		
		this.dispatchEvent("onUpdate");
	}
	
	Class.prototype.updateState = function(allMasses){
		if(!this.active || this.attached)
			return;
		
		// if(this.id == 1){
			// console.log(this.started)
		// }
		if(this.started && !this.attached){
			for(var i = 0; i < 20; i++){
				var displayArrow = this.findAccelVecs(allMasses);
				this._moveObject();
				if(this._arrow.visible){
					this._arrow.visible = false;
					this.labelCont.visible = false;
					this.disable();
				}
			}
		} else if(!this.attached){
			var displayArrow = this.findAccelVecs(allMasses);
			if(this.active && displayArrow){
				this._displayForce(allMasses);
			}
		}
	}
	
	Class.prototype._moveObject = function(){
		this._velocityVec = this._velocityVec.add(this._accVec.multiply(this._deltaT));
		
		this.x += this._velocityVec.x * this._deltaT * this._unit;
		this.y += this._velocityVec.y * this._deltaT * this._unit;
		
		this.children.forEach(function(m){
			m.x += this._velocityVec.x * this._deltaT * this._unit;
			m.y += this._velocityVec.y * this._deltaT * this._unit;
		}, this);
	}
	
	Class.prototype.getPos = function(pos){
		if(this.children.length == 0){
			pos.set(this.x, this.y);
			return this.mass;
		} else {
			var x = this.x * this.mass, y = this.y * this.mass;
			var totalMass = this.mass;
			
			this.children.forEach(function(m){
				x += m.x * m.mass;
				y += m.y * m.mass;
				totalMass += m.mass;
			});
			pos.set(x / totalMass, y / totalMass);
			return totalMass;
		}
	}
	
	Class.prototype.findAccelVecs = function(allMasses){
		var found = false, vecLength, a, aX, aY, angle, force, fX, fY;
		this._accVec.set(0, 0);
		//this._forceVec.set(0, 0);
		
		var tempPT = new Vector();
		var tempPos = new Vector();
		var myPos = new Vector();
		
		allMasses.forEach(function(m){
			if(m == this || !m.active || m.attached){
				return;
			}
			var otherMass = m.getPos(tempPos);
			var myMass = this.getPos(myPos);
			
			tempPT.set(myPos.x - tempPos.x, myPos.y - tempPos.y);
			
			//stop the particles if they intersect
			var collidedSO = this._checkRadii(m);
			if(collidedSO && this.started){
				//this.stopPart();
				//m.stopPart();
				this._velocityVec.set(0, 0);
				m._velocityVec.set(0, 0);
				
				//the only way to get here is if this object is unattached or is a parent
				//and the other object is unattached or is a parent
				
				
				//if I have children, or the other one doesn't have children
				//then I am going to be the parent
				if(this.children.length != 0 || m.children.length == 0){
					if(this.children.indexOf(m) == -1){
						this.children.push(m);
						m.attached = true;
						m.parent = this;
						//if the other object has children, then I will take them
						//all as my own.
						if(m.children.length != 0){
							m.children.forEach(function(_m){
								this.children.push(_m);
							}, this);
							m.children.length = 0;
						}	
					}
				} else {//this object must not be a parent and the other one must already be
					if(m.children.indexOf(this) == -1){
						m.children.push(this);
						this.attached = true;
						this.parent = m;
					}
				}
				return;
			}
			
			vecLength = tempPT.magnitude();
			//console.log(vecLength)
			//console.log(myPos)
			//console.log(tempPT)
			a = -1 * (this.G * otherMass) / (vecLength * vecLength);
			
			force = (this.G * otherMass * myMass) / (vecLength * vecLength);
			//console.log(force)
			angle = tempPT.angle(true)//Math.atan2(tempPT.y, tempPT.x);
			aX = Math.cos(angle) * a;
			aY = Math.sin(angle) * a;
			
			fX = Math.cos(angle) * force;
			fY = Math.sin(angle) * force;
			
			found = true;
			
			Vector.add(this._accVec, new Vector(aX, aY), this._accVec);
			//Vector.add(this._forceVec, new Vector(fX, fY), this._forceVec);
			this._forceVec.set(fX, fY);
			
		}, this);
		return found;
	}
	
	Class.prototype._displayForce = function(allMasses){
		var i = 0, object, object2; 
		this.forces = [];
		var finalF = 0;
		for(; i < allMasses.length; i++){
			object2 = allMasses[i];
			if(object2 != this && object2.active){
				var d = Maths.getDistance(object2, this) / this._unit;
				var f = this.G * object2.mass * this.mass * (7.702398800599701e+24 * 7.702398800599701e+24) / Math.pow(d, 2);
				var angle = Maths.getAngle(object2, this, true);
				if(angle < 0){
					angle = 2 * Math.PI + angle;
				}
				finalF += f;
				this.forces.push(Vector.components(f, angle));
			}
		}
		var v = new Vector(0, 0);
		for(var j = 0; j < this.forces.length; j++){
			Vector.add(this.forces[j], v, v);
		}
		
		var a = Vector.angleBetween(v, new Vector()) * Maths.TO_DEGREES;
		if(a < 0){
			a = 360 + a;
		}
		this._arrow.magnitude = v.magnitude() / 1.05e+63;
		
		if(this._arrow.magnitude != 0 && !this.playing){
			this._arrow.visible = true;
			this.labelCont.visible = true;
		}
		
		// console.log(this._arrow.magnitude)
		this._arrow.angle = a;
		var o = numberToPower(finalF / 1.5e43, 1);
		// console.log(o)
		// var value = this._forceVec.magnitude();
    	// var m_gSizeOfVec = value / 1e20;
    	
    	this.labelCont.getChildByName("t2").text = "= " + o.number.toFixed(2) + " × 10";
    	this.labelCont.getChildByName("t3").text = o.power;
	}
	
	Class.prototype._checkRadii = function(otherSO){
		var deltaX, deltaY;
		
		// check me against it
		// deltaX = this.x - otherSO.x;
		// deltaY = this.y - otherSO.y;
		// if(deltaX * deltaX + deltaY * deltaY < (this.radius + otherSO.radius)*(this.radius + otherSO.radius)){
		if(Maths.getDistance(this, otherSO) <= (this.radius + otherSO.radius)){
			// this._restrictIntersect(otherSO);
			// console.log(this.id, otherSO.id);
			return this;
		}
		
		// check me against all of its children
		// otherSO.children.forEach(function(otherSOChild){
		for(var i = 0; i < otherSO.children.length; i++){
			otherSOChild = otherSO.children[i];
			// deltaX = this.x - otherSOChild.x;
			// deltaY = this.y - otherSOChild.x;
			// if(deltaX * deltaX + deltaY * deltaY < (this.radius + otherSOChild.radius) * (this.radius + otherSOChild.radius)){
			if(Maths.getDistance(this, otherSOChild) <= (this.radius + otherSOChild.radius)){
				// this._restrictIntersect(otherSOChild);
				console.log(this.id, otherSOChild.id);
				return true;
			}
		};
		
		//check all of my children against it and its children
		// this.children.forEach(function(mySOChild){
		for(var i = 0; i < this.children.length; i++){
			mySOChild = this.children[i];
			// deltaX = mySOChild.x - otherSO.x;
			// deltaY = mySOChild.y - otherSO.y;
			// if(deltaX * deltaX + deltaY * deltaY < (mySOChild.radius + otherSO.radius)*(mySOChild.radius + otherSO.radius)){
			if(Maths.getDistance(mySOChild, otherSO) <= (mySOChild.radius + otherSO.radius)){
				// mySOChild._restrictIntersect(otherSO);
				console.log(mySOChild.id, otherSO.id);
				return true;
			}
			
			// otherSO.children.forEach(function(otherSOChild){
			for(var j = 0; j < otherSO.children.length; j++){
				otherSOChild = otherSO.children[j];
				// deltaX = mySOChild.x - otherSOChild.x;
				// deltaY = mySOChild.y - otherSOChild.x;
				// if(deltaX * deltaX + deltaY * deltaY < (mySOChild.radius + otherSOChild.radius) * (mySOChild.radius + otherSOChild.radius)){
				if(Maths.getDistance(mySOChild, otherSOChild) <= (mySOChild.radius + otherSOChild.radius)){
					// mySOChild._restrictIntersect(otherSOChild);
					console.log(mySOChild.id, otherSOChild.id);
					return true;
				}
			};
		};
		return false;
		
	}
	
	Class.prototype._restrictIntersect = function(otherSO){
		if(Maths.getDistance(this, otherSO) <= (this.radius + otherSO.radius)){
			console.log(this.displayObject._mass)
			var prevX = this.x, prevY = this.y;
			var angle = Maths.getAngle(this , otherSO , true);
			var _p = Maths.getPoint(otherSO, angle ,(this.radius + otherSO.radius));
			this.x = _p.x ;
			this.y = _p.y ;
		}
		// this.children.forEach(function(m){
			// m.x += (this.x - prevX);
			// m.y += (this.y - prevY);
		// }, this);
		// e.currentTarget._arrow._baseVector.x = _p.x;
		// e.currentTarget._arrow._baseVector.y = _p.y;
	}
	
	Object.defineProperty(Class.prototype, "x", {
		get:function(){
			return this.displayObject.x;
		},
		set:function(value){
			this.displayObject.x = value;
			this._arrow._baseVector.x = this.x;
			this.labelCont.x = this.x + this._labelOffset.x;
			if(this.labelCont.x + this._labelOffset.width >= stageWidth){
				this.labelCont.x = this.x - this._labelOffset.x - this._labelOffset.width;
			}
		}
	});
	
	Object.defineProperty(Class.prototype, "y", {
		get:function(){
			return this.displayObject.y;
		},
		set:function(value){
			this.displayObject.y = value;
			this._arrow._baseVector.y = this.y;
			this.labelCont.y = this.y + this._labelOffset.y;
		}
	});
	
	Object.defineProperty(Class.prototype, "mass", {
		get:function(){
			return this.displayObject._mass;
		}
	});
	
	Object.defineProperty(Class.prototype, "radius", {
		get:function(){
			return this.displayObject._radius;
		}
	});
	
	createjs.EventDispatcher.initialize(Class.prototype);
	
	return Class;
})();