var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		this._x=470;
		this._y=560;
		this._Vy=0;
		this._Vx=0;
		this._time=0;
		this._timeStep=0.05;
		this.carX=0;
		this.carY=0;
		this.carRotation=0;
		this.v=0;
		this.running=false;
		this.cAccel=0;
		this._trackCenter={"x":512,"y":449};
		this._trackRadius = 250;
		this._unit = 10;
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		var scope = this;
		this._reset=this.reset.bind(this);
		this._play=play.bind(this);
		this._pause=pause.bind(this);
		this._keydown=keydown.bind(this);
		this._keyup=keyup.bind(this);
		enterFrame = enterFrame.bind(this);
		
		this.layout.line3.graphics.setStrokeStyle(2).beginStroke("black").moveTo(0,0).lineTo(44,0).endStroke();
		this.layout.line4.graphics.setStrokeStyle(2).beginStroke("black").moveTo(0,0).lineTo(0,37).endStroke();
		
		this.layout.carImg.snapToPixel = false;
		this.layout.needle1.snapToPixel = false;
		this.layout.needle2.snapToPixel = false;
		
		this.layout.resetButton.enable().addEventListener("click", this._reset);
		this.layout.playButton.addEventListener("click", this._play);
		this.layout.pauseButton.addEventListener("click", this._pause);
		
		this.layout.stepperV.enable().addEventListener("valueChange",function(e){
				scope.layout.velocity.text=e.currentTarget.value.toFixed(1);
		});
	
		this.reset();
	}
	
	
	function toPixel(_val)
	{
		return _val*4;
	}

	function enterFrame()
	{	
		this._currAngle -= this.angularV * this._timeStep;
		var p = Maths.getPoint(this._trackCenter, this._currAngle * Maths.TO_RADIANS, this._trackRadius);
		this.layout.carImg.x = p.x;
		this.layout.carImg.y = p.y;
		
		this._Vx = Math.sin(this._currAngle * Maths.TO_RADIANS) * this.v/10;
		this._Vy = Math.cos(this._currAngle * Maths.TO_RADIANS) * this.v/10;
		
		this.layout.xVelocity.text=this._Vx.toFixed(1);
		this.layout.yVelocity.text=this._Vy.toFixed(1);
		
		this.layout.line2.graphics.clear().setStrokeStyle(35).beginStroke("red").moveTo(0,0).lineTo(this._Vx,0).endStroke();
		this.layout.line1.graphics.clear().setStrokeStyle(40).beginStroke("red").moveTo(0,0).lineTo(0,-this._Vy).endStroke();

		this.layout.carImg.rotation = this._currAngle - 90;
	
	}
	
	function keydown(e){
		if(e.keyCode==38){
			this.layout.stepperV.handleEvent({type:"mousedown",currentTarget:this.layout.stepperV._inc})
		}
		else if(e.keyCode==40){
			this.layout.stepperV.handleEvent({type:"mousedown",currentTarget:this.layout.stepperV._dec})
		}		
	}
	
	function keyup(e){
		this.layout.stepperV.handleEvent({});
	}
	
	Activity.prototype.reset = function(){
		this.layout.stepperV.enable()
		document.removeEventListener("keydown",this._keydown);
		document.removeEventListener("keyup",this._keyup);
		this._keyup();
		this.running=false;
		angle=0;
		this.layout.line1.graphics.clear();
		this.layout.line2.graphics.clear();
		this.layout.xVelocity.text="0.0";
		this.layout.yVelocity.text="0.0";
		this._Vy=0;
		this._Vx=0;
		this._time=0;
		this._timeStep=0.0347;
		this.unit=4;
		this.carX=0;
		this.carY=0;
		this.carRotation=0;
		this.layout.carImg.x=512;
		this.layout.carImg.y=699;
		this.layout.carImg.rotation=0;
		this._x = this.layout.carImg.x / toPixel(1);
		this._y = this.layout.carImg.y / toPixel(1);
		this.v=0;
		this.cAccel=0;
		
		this.layout.playButton.enable().visible=true;
		this.layout.pauseButton.disable().visible=false;
		
		this.layout.speedometer1.value = this.v;
		this.layout.speedometer2.value = this.cAccel;
		createjs.Ticker.removeEventListener("tick", enterFrame);
		document.addEventListener("keydown",this._keydown);
		document.addEventListener("keyup",this._keyup);
	}
	
	function play(e){
		this.layout.stepperV.disable();
		this.layout.pauseButton.enable().visible = true;
		this.layout.playButton.disable().visible = false;
		if(!this.running){
			this.running=true;
			this.v = this.layout.velocity.text * this._unit;
			var time = (2 * Math.PI * this._trackRadius) / this.v;
			this.angularV = 360 / time;
			this._currAngle = 90;
			this.cAccel=(this.v * this.v)/(this._trackRadius*10);
			this.layout.speedometer1.value=this.layout.velocity.text;
			this.layout.speedometer2.value=this.cAccel;
		}
		createjs.Ticker.addEventListener("tick", enterFrame);
	}
	
	function pause(e){
		createjs.Ticker.removeEventListener("tick", enterFrame);
		this.layout.pauseButton.visible = false;
		this.layout.playButton.enable().visible = true;
	}
	return Activity;
})();
