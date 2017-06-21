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
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		var scope = this;
		this._checkCrash=checkCrash.bind(this);
		this._reset=this.reset.bind(this);
		this._play=play.bind(this);
		this._pause=pause.bind(this);
		this._keydown=keydown.bind(this);
		this._keyup=keyup.bind(this);
		enterFrame = enterFrame.bind(this);
		this._stop=stop.bind(this);
		
		this.layout.carImg.snapToPixel = false;
		this.layout.needle1.snapToPixel = false;
	
		this.layout.line3.graphics.setStrokeStyle(1).beginStroke("black").moveTo(0,0).lineTo(42,0).endStroke();
		this.layout.line4.graphics.setStrokeStyle(1).beginStroke("black").moveTo(0,0).lineTo(0,34).endStroke();
		
		this.layout.resetButton.enable().addEventListener("click", this._reset);
		this.layout.playButton.addEventListener("click", this._play);
		this.layout.pauseButton.enable().addEventListener("click", this._pause);
		
		this.layout.stepperH.enable().addEventListener("valueChange",function(e){
			if(_timerStarted == false)
				{
				scope.layout.pauseButton.enable();
					startTime = 0;
					createjs.Ticker.addEventListener("tick", enterFrame);
					startTime = Date.now();
					countdownTimer = setInterval(function(){
						scope.layout.timerText.text = startTimer() + " s";
					}, 100);
					_timerStarted = true ;
				}
				scope._Vx = e.currentTarget.value;
				scope.layout.xVelocity.text=e.currentTarget.value.toFixed(1);
				scope.v=Math.sqrt((scope._Vx * scope._Vx) + (scope._Vy * scope._Vy));
				scope.layout.speedometer1.value = scope.v.toFixed(1);
				scope.layout.line2.graphics.clear().setStrokeStyle(36).beginStroke("red").moveTo(0,0).lineTo(scope._Vx,0).endStroke();
		});
		
		this.layout.stepperV.enable().addEventListener("valueChange",function(e){
			if(_timerStarted == false)
				{
				scope.layout.pauseButton.enable();
					startTime = 0;
					createjs.Ticker.addEventListener("tick", enterFrame);
					startTime = Date.now();
					countdownTimer = setInterval(function(){
						scope.layout.timerText.text = startTimer() + " s";
					}, 100);
					_timerStarted = true ;
				}
				scope._Vy = -e.currentTarget.value;
				scope.layout.yVelocity.text=e.currentTarget.value.toFixed(1);
				scope.v=Math.sqrt((scope._Vx * scope._Vx) + (scope._Vy * scope._Vy));
				scope.layout.speedometer1.value = scope.v.toFixed(1);
				scope.layout.line1.graphics.clear().setStrokeStyle(41).beginStroke("red").moveTo(0,0).lineTo(0,scope._Vy).endStroke();
		});
		
		this.layout.stepperH._dec.x=-147;
		this.layout.stepperH._dec.y=0;
	
		this.reset();
	}
	
	
	function toPixel(_val)
	{
		return _val*4;
	}
	
	function enterFrame()
	{	
		this._time += this._timeStep ;
		this._x += this._Vx * this._timeStep;
		this._y += this._Vy * this._timeStep;
		
		this.carX = toPixel(this._x);
		this.carY = toPixel(this._y);
		if(this._Vx<0){
			this.carRotation = Math.atan(this._Vy/this._Vx) * (180/Math.PI)-180;
		}
		else{
			this.carRotation = Math.atan(this._Vy/this._Vx) * (180/Math.PI);
		}
		
		this.layout.carImg.x = this.carX;
		this.layout.carImg.y = this.carY;
		this.layout.carImg.rotation = this.carRotation;
		
		this._checkCrash();
	}
	
	function checkCrash(){
			if(this.carX < 50 || this.carY < 50 || this.carX > 975 || this.carY > 600){
				
				this.layout.carCrash.x=this.carX;
				this.layout.carCrash.y=this.carY;
				this.layout.carCrash.rotation=this.carRotation;
				this.layout.carImg.visible=false;
				this.layout.carCrash.visible=true;
				this.layout.carCrash.gotoAndPlay(0);
				this.layout.carCrash.loop=false;
				this.layout.pauseButton.disable();
				this.layout.playButton.disable();
				this._stop();
			}
	}
	
	function keydown(e){
		this.layout.pauseButton.enable();
		if(e.keyCode==39){
			this.layout.stepperH.handleEvent({type:"mousedown",currentTarget:this.layout.stepperH._inc})
		}
		else if(e.keyCode==37){
			this.layout.stepperH.handleEvent({type:"mousedown",currentTarget:this.layout.stepperH._dec})
		}
		else if(e.keyCode==38){
			this.layout.stepperV.handleEvent({type:"mousedown",currentTarget:this.layout.stepperV._inc})
		}
		else if(e.keyCode==40){
			this.layout.stepperV.handleEvent({type:"mousedown",currentTarget:this.layout.stepperV._dec})
		}		
	}
	
	function keyup(e){
		this.layout.stepperH.handleEvent({});
		this.layout.stepperV.handleEvent({});
	}
	
	var _timerStarted = false ;
	var countdownTimer;
	var startTime = 0 ;
	var startTime = Date.now();
	var _time;
	
	function startTimer(){
		var elapsedTime = Date.now() - startTime;
		_time = (elapsedTime / 1000).toFixed(1);
		
		return _time;
	}
	
	function stop(){
		document.removeEventListener("keydown",this._keydown);
		document.removeEventListener("keyup",this._keyup);
		createjs.Ticker.removeEventListener("tick", enterFrame);
		this._keyup();
		clearInterval(countdownTimer);
		this.layout.xVelocity.text="0.0";
		this.layout.yVelocity.text="0.0";
		this.layout.stepperH.value=0;
		this.layout.stepperV.value=0;
		this.layout.line1.graphics.clear();
		this.layout.line2.graphics.clear();
		
		this.layout.stepperH.disable();
		this.layout.stepperV.disable();
		
		this._Vy=0;
		this._Vx=0;
		this._time=0;
		this._timeStep=0.05;
		this.unit=4;
		this.carX=0;
		this.carY=0;
		this.carRotation=0;
		this.v=0;
		this.layout.speedometer1.value = this.v;
	}
	
	Activity.prototype.reset = function(){
		clearInterval(countdownTimer);
		this._stop();
		this.layout.timerText.text = "0.0 s";
		startTime = 0;
		_timerStarted = false;
		this.layout.carImg.x=510;
		this.layout.carImg.y=570;
		this.layout.carImg.rotation=0;
		this._x = this.layout.carImg.x / toPixel(1);
		this._y = this.layout.carImg.y / toPixel(1);
		this.layout.carCrash.visible=false;
		this.layout.carImg.visible=true;
		
		this.layout.stepperH.enable();
		this.layout.stepperV.enable();
		this.layout.pauseButton.disable().visible = true;
		this.layout.playButton.visible = false;

		document.addEventListener("keydown",this._keydown);
		document.addEventListener("keyup",this._keyup);
	}
	
	function play(e){
		clearInterval(countdownTimer);
		startTime= Date.now() - pauseTime;
		countdownTimer = setInterval(function(){
						lab.layout.timerText.text = startTimer() + " s";
					}, 100);
		createjs.Ticker.addEventListener("tick", enterFrame);
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
	}
	
	function pause(e){
		pauseTime = Date.now() - startTime;
		console.log(_time,startTime,pauseTime);
		clearInterval(countdownTimer);
		createjs.Ticker.removeEventListener("tick", enterFrame);
		this.layout.pauseButton.visible = false;
		this.layout.playButton.enable().visible = true;
	}
	return Activity;
})();
