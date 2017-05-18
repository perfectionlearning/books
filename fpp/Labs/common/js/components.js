///////////////////////////////
// Component: Button 		 //
///////////////////////////////
var Button = (function(){
	function Button(o){
		createjs.Container.call(this);
		if(!o.up || !o.down || !o.over){
			console.error("Please provide image names for up, over and down state for button - " + o.name);
		}
		this.up = new createjs.Bitmap(images[o.up]);
		this.over = new createjs.Bitmap(images[o.over]);
		this.down = new createjs.Bitmap(images[o.down]);
		// this.out = new createjs.Bitmap(images[o.out]);
		this.up.snapToPixel = this.over.snapToPixel = this.down.snapToPixel = true;
		this.addChild(this.up, this.over, this.down);
		
		this.up.name = o.name + "-up";
		this.over.name = o.name + "-over";
		this.down.name = o.name + "-down";
		
		this.disable();
		this.handleEvent({});
		
		this.addEventListener("click", function(e){
			if(!(e.target instanceof Button)){
				/* 
				** preventing default click from createjs
				** only allowing if dispatched from Button Class
				*/
				e.stopPropagation();
				e.stopImmediatePropagation();
				e.preventDefault();
			}
		});
	}
	Button.frames = {up:0, over:1, down:2, out:0};
	Button.prototype = Object.create(createjs.Container.prototype);
	Button.prototype.constructor = Button;

	Button.prototype.handleEvent = function(e){
		var p;
		var type = e.type;
		this.down.visible = false;
		this.up.visible = false;
		this.over.visible = false;
		if (type == "mousedown") {
			this._down = true;
			this.down.visible = true;
		} else if (type == "pressup") {
			this.up.visible = true;
			p = this.globalToLocal(e.stageX, e.stageY)
			if(this.hitTest(p.x, p.y)){
				this.dispatchEvent("click");
			}
			this._down = false;
		} else if (type == "rollover") {
			this._over = true;
			this.over.visible = true;
		} else { // rollout and default
			this._over = false;
			this._down = false;
			this.up.visible = true;
		}
	}

	Button.prototype.enable = function(){
		this._enabled = true;
		this.addEventListener("rollover", this);
		this.addEventListener("rollout", this);
		this.addEventListener("mousedown", this);
		this.addEventListener("pressup", this);
		this.alpha = 1;
		this.cursor = "pointer";
		
		return this;
	};

	Button.prototype.disable = function(){
		this._enabled = false;
		this.removeEventListener("rollover", this);
		this.removeEventListener("rollout", this);
		this.removeEventListener("mousedown", this);
		this.removeEventListener("pressup", this);
		this.alpha = 0.5;
		this.cursor = "default";
		this.handleEvent({});
		return this;
	};

	return Button;
})();

///////////////////////////////
// Component: NumericStepper //
///////////////////////////////
var NumericStepper = (function(){
	function NumericStepper(o){
		createjs.Container.call(this);
		console.log(o)
		// this._data = o.data;
		this.updateMinMax(o.min || 0, o.max || 10, o.step || 1);
		this._value = o.value || this._min;
		this._delay = o.delay || 2;
		
		this._inc = this.addChild(new Button(o.inc));
		this._dec = this.addChild(new Button(o.dec));
		
		if(o.horizontal){
			if(this._inc.getBounds().width){
				this._dec.x = this._inc.getBounds().width + (o.hasOwnProperty("gap") ? o.gap : 5);
			} else {
				this._dec.x = this._inc.children[0].image.naturalWidth + (o.hasOwnProperty("gap") ? o.gap : 5);
			}
			
		} else {
			if(this._inc.getBounds().height){
				this._dec.y = this._inc.getBounds().height + (o.hasOwnProperty("gap") ? o.gap : 5);
			} else {
				this._dec.y = this._inc.children[0].image.naturalHeight + (o.hasOwnProperty("gap") ? o.gap : 5);
			}
			
		}
		this._incDec = this._incDec.bind(this);
		this.disable();
	}

	NumericStepper.prototype = Object.create(createjs.Container.prototype);
	NumericStepper.prototype.constructor = NumericStepper;

	// private function, not to be used from outside
	NumericStepper.prototype._incDec = function(bool){
		var value;
		// console.log("here")
		if(bool || (this._counter >= 10 && this._counter % this._delay == 0)){
			value = this._value;
			value += this._direction * this._step;
			this.value = value.toFixed(5) * 1;// to fixed for removing 16 bit 0's and 9's
			this.dispatchEvent("valueChange");
		}
		this._counter++;
	}

	Object.defineProperty(NumericStepper.prototype, "value", {
		get:function(){
			return this._value;
		},
		set:function(value){
			// if(this._value == value || value > this._max || value < this._min){
				// return false;
			// }
			if(value > this._max){
				value = this._max;
			}
			if(value < this._min){
				value = this._min;
			}
			if(!isNaN(value)){
				this._value = value;
				if(value == this._min){
					this.handleEvent({});
					this.disable(2);
				} else if(value == this._max){
					this.handleEvent({});
					this.disable(1);
				} else {
					if(!this._inc._enabled){
						this.enable(1);
					}
					if(!this._dec._enabled){
						this.enable(2);
					}
				}
			} else {
				console.warn(value + " is not a number.");
			}
		}
	});

	NumericStepper.prototype.handleEvent = function(e){
		// console.log(e.currentTarget);
		this._direction = e.currentTarget == this._inc ? 1 : -1;
		// console.log(this._direction)
		var type = e.type;
		if (type == "mousedown") {
			this._counter = 0;
			Ticker.add({
				callback:this._incDec,
				fps:40
			});
			this._incDec(true);
		} /* else if(type == "pressup"){
			
		}  */else { // rollout or pressup
			Ticker.remove(this._incDec);
		}
	}

	NumericStepper.prototype.enable = function(type){
		if(type == 1){
			this._inc.enable();
			this._inc.addEventListener("mousedown", this);
			this._inc.addEventListener("pressup", this);
			this._inc.addEventListener("rollout", this);
		} else if(type == 2){
			this._dec.enable();
			this._dec.addEventListener("mousedown", this);
			this._dec.addEventListener("pressup", this);
			this._dec.addEventListener("rollout", this);
		} else {
			this.enable(1);
			this.enable(2);
			this.value = this.value;
		}
		
		
		return this;
	}

	NumericStepper.prototype.disable = function(type){
		if(type == 1){
			this._inc.disable();
			this._inc.removeEventListener("mousedown", this);
			this._inc.removeEventListener("pressup", this);
			this._inc.removeEventListener("rollout", this);
		} else if(type == 2){
			this._dec.disable();
			this._dec.removeEventListener("mousedown", this);
			this._dec.removeEventListener("pressup", this);
			this._dec.removeEventListener("rollout", this);
		} else {
			this.disable(1);
			this.disable(2);
		}
		return this;
	}

	NumericStepper.prototype.updateMinMax = function(min, max, step, value){
		this._min = min;
		this._max = max;
		this._step = step;
		if(value){
			this.value = value;
		}
		
		// console.log(this._min, this._max, this._step)
		
		return this;
	};

	return NumericStepper;
})();

//////////////////////////////////////
// Slider Component					//
//////////////////////////////////////
var Slider = (function(){
	function Slider(bmp, min, max, minStep, maxStep, shape, object, prop){
		this.bmp = bmp;
		var hitArea = new createjs.Shape();
		hitArea.graphics.beginFill("#FFF").rect(-5, -5, this.bmp.getBounds().width + 10, this.bmp.getBounds().height + 10).endFill();
		this.bmp.hitArea = hitArea;
		// console.log(this.bmp.getBounds())
		this.shape = shape;
		this.shapeData = {
			color:"#0000ff",
			lineWidth:sV(4),
			direction:"left",
		};
		this.prop = prop || "x";
		if(object){
			if(object.color){
				this.shapeData.color = object.color;
			}
			if(object.lineWidth){
				this.shapeData.lineWidth = object.lineWidth;
			}
			if(object.direction){
				this.shapeData.direction = object.direction;
			}
		}
		
		this.minX = min;
		this.maxX = max;
		this.minStep = minStep;
		this.maxStep = maxStep;
		this._drag = this._drag.bind(this);
		this.startPoint = 0;
	}

	Slider.prototype = {
		constructor:Slider,
		enable:function(){
			this._enabled = true;
			
			this.bmp.addEventListener("pressmove", this._drag);
			this.bmp.cursor = "move";
			return this;
		},
		disable:function(){
			this._enabled = false;
			
			this.bmp.removeEventListener("pressmove", this._drag);
			this.bmp.cursor = "default";
			return this;
		},
		distance:function(){
			return this.bmp.x - this.min;
		},
		_drag:function(e){
			var p = this.bmp.parent.globalToLocal(e.stageX, e.stageY);
			this.bmp[this.prop] = Math.round(Math.max(this.minX, Math.min(p[this.prop], this.maxX)));
			// this.bmp.x -= this.bmp.x % this.step;
			this._updateLine();
			// updateStage();// global function
			
			this.dispatchEvent("drag");
		},
		_updateLine:function (){
			if(this.shape){
				if(this.prop == "x"){
					this.shape.graphics.clear().setStrokeStyle(this.shapeData.lineWidth).beginStroke(this.shapeData.color).moveTo(this.shapeData.direction == "left" ? this.minX : this.maxX, this.bmp.y).lineTo(this.bmp.x, this.bmp.y).endStroke();
				} else {
					this.shape.graphics.clear().setStrokeStyle(this.shapeData.lineWidth).beginStroke(this.shapeData.color).moveTo(this.bmp.x, this.shapeData.direction == "top" ? this.minX : this.maxX).lineTo(this.bmp.x, this.bmp.y).endStroke();
				}
			}
		}
		
	};
	createjs.EventDispatcher.initialize(Slider.prototype);

	Object.defineProperty(Slider.prototype, "visible", {
		get:function(){
			return this.bmp.visible //&& this.shape.visible;
		},
		set:function(value){
			this.bmp.visible = value;
			if(this.shape){
				this.shape.visible = value;
			}
		}
	});

	Object.defineProperty(Slider.prototype, "value", {
		get:function(){
			var value = ((this.bmp[this.prop] - this.minX) / (this.maxX - this.minX)) * (this.maxStep - this.minStep);
			if(this.reverse){
				value = (this.maxStep - this.minStep) - value;
			}
			return value + this.minStep;
		},
		set:function(value){
			value -= this.minStep;
			if(this.reverse){
				value = (this.maxStep - this.minStep) - value;
			}
			var x = this.minX + value * (this.maxX - this.minX) / (this.maxStep - this.minStep);

			this.bmp[this.prop] = x;
			this._updateLine();
		}
	});

	return Slider;
})();

//////////////////////////////////////
// SSText Component					//
//////////////////////////////////////
var SSText = (function(){
	function SSText(o){
		createjs.Container.call(this);
		
		this._mainText = new createjs.Text("", o.fonts[0]);
		this._supText = new createjs.Text("", o.fonts[1]);
		this._subText = new createjs.Text("", o.fonts[2]);
		
		this.addChild(this._mainText, this._supText, this._subText);
		
		this._vgap = o.hasOwnProperty("vgap") ? o.vgap : 5;
		this._hgap = o.hasOwnProperty("hgap") ? o.hgap : 5;
	}

	SSText.prototype = Object.create(createjs.Container.prototype);
	SSText.prototype.constructor = SSText;
	SSText.prototype._refreshPosition = function(){
		var bounds = this._mainText.getBounds();
		this._subText.x = this._supText.x = this._mainText.getMeasuredWidth() + this._hgap;
		this._subText.y = this._vgap;
		this._supText.y = -this._vgap;
	};

	Object.defineProperty(SSText.prototype, "text", {
		get:function(){
			return {
				stem:this._mainText.text,
				sub:this._subText.text,
				sup:this._supText.text,
				rawText:this._mainText.text + "^" + this._supText.text + "^" + this._subText.text
			};
		},
		set:function(value){
			array = value.split("^");
			this._mainText.text = array[0];
			this._supText.text = array[1] || "";
			this._subText.text = array[2] || "";
			this._refreshPosition();
		}
	});
	Object.defineProperty(SSText.prototype, "color", {
		get:function(){
			return this._mainText.color;
		},
		set:function(value){
			this._mainText.color = value;
			this._supText.color = value;
			this._subText.color = value;
		}
	});

	return SSText;
})();

///////////////////////////////////
// SpeedoMeter		///////////////
///////////////////////////////////
var SpeedoMeter = (function(){
	function SpeedoMeter(o){
		createjs.Container.call(this);
		this._inited = false;
		
		this._minAngle = o.minAngle || 0;
		this._maxAngle = o.maxAngle || 360;
		this._minValue = o.minValue || 0;
		this._maxValue = o.maxValue || 360;
		this._value = o.value || 0;
	}

	SpeedoMeter.prototype = Object.create(createjs.Container.prototype);
	SpeedoMeter.prototype.constructor = SpeedoMeter;

	SpeedoMeter.prototype.init = function(){
		if(this._inited){
			return false;
		}
		this._inited = true;
		
		this.needle = this.children[0];
		this.valueText = this.children[1];
	};

	Object.defineProperty(SpeedoMeter.prototype, "value", {
		get:function(){
			return this._value;
		},
		set:function(value){
			this.init();
			this._value = Math.max(this._minValue, Math.min(this._maxValue, value));
			this.needle.rotation = this._minAngle + this._value * (this._maxAngle - this._minAngle) / (this._maxValue - this._minValue);
			
			if(this.valueText){
				this.valueText.text = this._value;
			}
		}
	});

	return SpeedoMeter;
})();

//////////////////////////////////////
// VectorLine Component				//
//////////////////////////////////////
var VectorLine = (function(){
	function VectorLine(bmp, startPoint, magnitude, angle, shape, object, toFixedData){
		this._bmp = bmp;
		this._baseVector = new Vector(startPoint.x, startPoint.y);
		this._vector = new Vector();
		this._unit = 1;
		this._minMagnitude = magnitude.min;
		this._maxMagnitude = magnitude.max;
		this._minAngle = angle.min || 0;
		this._maxAngle = angle.max || 90;
		this._angle = this._minAngle;
		
		this._shape = shape;
		this._shapeData = {
			color:"#0000ff",
			lineWidth:2,
			direction:"left",
		};
		if(object){
			if(object.color){
				this._shapeData.color = object.color;
			}
			if(object.lineWidth){
				this._shapeData.lineWidth = object.lineWidth;
			}
			if(object.direction){
				this._shapeData.direction = object.direction;
			}
		}
		this.toFixed = toFixedData ? toFixedData : 0;
		
		this.debugShape = new createjs.Shape();
		this._bmp.stage.addChild(this.debugShape);
		
		this._drag = this._drag.bind(this);
	}
	VectorLine.prototype = {
		constructor:VectorLine,
		enable:function(){
			this._enabled = true;
			
			this._bmp.addEventListener("pressmove", this._drag);
			this._bmp.cursor = "move";
			return this;
		},
		disable:function(){
			this._enabled = false;
			
			this._bmp.removeEventListener("pressmove", this._drag);
			this._bmp.cursor = "default";
			return this;
		},
		_drag:function(e){
			var p = new Vector(e.stageX / this._bmp.stage.scaleX - this._baseVector.x, e.stageY / this._bmp.stage.scaleY - this._baseVector.y);
			var prevAngle = this.angle;
			this.magnitude = p.length() / this._unit;
			var angle = p.angle().toFixed(this.toFixed) * 1;
			angle = (angle < 0) ?  180 * 2 + angle : angle;
			this.angle = angle;
			this.dispatchEvent("drag");
		},
		_updateLine:function (){
			var p = Vector.add(this._baseVector, this._vector);
			if(this._shape && this._shape.graphics){
				this._shape.graphics.clear().setStrokeStyle(this._shapeData.lineWidth).beginStroke(this._shapeData.color).moveTo(this._baseVector.x, this._baseVector.y).lineTo(p.x, p.y).endStroke();
			}
			this._bmp.x = p.x;
			this._bmp.y = p.y;
			this._bmp.rotation = this._angle;
		}
	}
	createjs.EventDispatcher.initialize(VectorLine.prototype);
	
	Object.defineProperty(VectorLine.prototype, "visible", {
		get:function(){
			return this._bmp.visible;
		},
		set:function(value){
			this._bmp.visible = value;
			if(this._shape){
				this._shape.visible = value;
			}
		}
	});
	
	Object.defineProperty(VectorLine.prototype, "x", {
		get:function(){
			return this._vector.x;
		}
	});
	
	Object.defineProperty(VectorLine.prototype, "y", {
		get:function(){
			return this._vector.y;
		}
	});
	
	Object.defineProperty(VectorLine.prototype, "angle", {
		get:function(){
			return this._angle;
		},
		set:function(value){
			this._angle = Math.max(this._minAngle, Math.min(this._maxAngle, value));
			this.magnitude = this.magnitude;
		}
	});
	
	Object.defineProperty(VectorLine.prototype, "magnitude", {
		get:function(){
			return this._vector.magnitude() / this._unit;
		},
		set:function(value){
			value = Math.max(this._minMagnitude, Math.min(this._maxMagnitude, value)) * this._unit;
			Vector.components(value, this._angle * Maths.TO_RADIANS, this._vector);
			this._updateLine();
		}
	});
	
	Object.defineProperty(VectorLine.prototype, "unit", {
		get:function(){
			return this._unit;
		},
		set:function(value){
			this._unit = value;
		}
	});
	
	return VectorLine;
})();
