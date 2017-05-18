var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		this._points = [];
		// var f = 0.825 / (2 * Math.PI);
		var scope  = this;
		this._pointGapX = 0.005;
		this.unit = 280;
		this._first = true;
		this._flag1  = true;
		this._once = false;
		this._onlyOnce = false;
		for(var i = 0; i <= 3.16; i += this._pointGapX){
			this._points.push(new Vector(i, 0));
		}
		this.enterFrame = enterFrame.bind(this);
		
		this._resumeClicked = resumeClicked.bind(this);
	
		this.layout.resume.enable().addEventListener("click", this._resumeClicked);
		
		this.playClicked = playClicked.bind(this);
		this.reset = this.reset.bind(this);
		
		this._playClicked = playClicked.bind(this);
		this._pauseClicked = pauseClicked.bind(this);
		this.layout.pauseButton.addEventListener("click", this._pauseClicked);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);
		
		this.layout.ampStepper.addEventListener("valueChange", function(e){
			scope.layout.ampText.text = e.currentTarget.value.toFixed(2);
			if(scope._flag1==false)  scope._A = e.currentTarget.value.toFixed(2) * 1;
			
		});
		

		
		positionBirds.call(this);
		this.reset();
	}
	
	function positionBirds(){
		var birds = ["parrot", "bird1", "bird2", "bird3","bird4"];
		this.birds = birds;
		birds.forEach(function(name){
			var index = this.layout[name]._wirePos / this._pointGapX;
			console.log(index)
			this._points[index].bird = this.layout[name];
			//this.layout[name].x = this.layout[name]._wirePos * this.unit;
		}, this);
	}
	
	function playClicked(){
		this.layout.pauseButton.enable();
		this.layout.pauseButton.visible = true;
		this.layout.resume.visible = false;
		//this.layout.playButton.visible = false;

		//this.layout.ampStepper.disable();
		
		this.layout.ampStepper.enable();

		this.replay();
		this._A = this.layout.ampStepper.value;
		this._phase = 0;
		this._onlyOnce = false;
		this._waveEnd = 1;
		//this._F = this.layout.freqStepper.value;
		
		if(this._first==false)
		{
		Ticker.add({
			fps:120,
			callback:this.enterFrame
		});
		}
		this._first = false;
		this._flag1 = false;
	}
	
	function pauseClicked(){
		this._first=false;
		this.layout.parrot.gotoAndStop(1);
		Ticker.remove(this.enterFrame);
		
		this.layout.pauseButton.visible = false;
		this.layout.resume.visible = true;
		
		this.layout.ampStepper.disable();
		

	}
	
    function resumeClicked(){
		this._A = this.layout.ampStepper.value;
		//this._F = this.layout.freqStepper.value;
		this.layout.ampStepper.enable();
		this._once = false; 
		this._first=true;
		Ticker.add({
			fps:60,
			callback:this.enterFrame
		});
		
		this.layout.pauseButton.visible = true;
		this.layout.resume.visible = false;
	}
	

	function enterFrame(){
		//console.log("enterframe called");
		var pAtStart = this._points[this._w];
			if(pAtStart)	
			{
				//yAtStart= this._A * Math.sin(2 * Math.PI * this._F * (pAtStart.x + this._phase));
		this._thetaAtStart = 2 * Math.PI * this._F *0.70* (pAtStart.x + this._phase);
			}
		
		if(this._thetaAtStart<=(-2 * Math.PI)) { /*console.log("complete---->"); */ this._waveStart+=3; 
		if(this._onlyOnce==false)
		{	
		this._first = true;
		this._once = false; 
		this._onlyOnce = true;
		}
		
					//waveLength = this._points[this._waveEnd-1].x-this._points[this._waveStart].x;
					//speed  = waveLength*this._F*0.70;
						//console.log("speed==="+speed);
				//Ticker.remove(this.enterFrame);
		}

		
		var p, i = this._waveStart;
		for(; i < this._waveEnd; i++){
			p = this._points[i];
			if(p){
				p.y = this._A * Math.sin(2 * Math.PI * this._F * 0.70*(p.x + this._phase));
				
				var t = p.x + this._phase;
				var period  = 1/this._F;
				 //console.log("this._thetaAtStart"+this._thetaAtStart);
				
				
				 
			}
		}
		for(i = 0; i < this._waveStart; i++){
			p = this._points[i];
			if(p&&this._points[this._waveStart]){
				p.y = (Math.exp(p.x * 10) - 1) * (this._points[this._waveStart].y / 12);
				if(this._thetaAtStart<=(-2 * Math.PI)) p.y=0;
			}
		}
		
		
		this._phase -= this._pointGapX * 3;
		
		this._waveEnd += 3;
		this._waveEnd = Math.min(this._points.length, this._waveEnd)
		this.layout.waveshape.graphics.clear().setStrokeStyle(3).beginStroke("#000").moveTo(0, 0);
		this._points.forEach(function(v, i){
			this.layout.waveshape.graphics.lineTo(v.x * this.unit, v.y * this.unit);
			if(v.bird){
				if(!v.bird._flew){
					v.bird.x = v.x * this.unit;
					v.bird.y = v.y * this.unit;
					if(v.bird._wingFlip){
					//this.stage.setChildIndex(this.layout.leftleg,this.stage.getNumChildren()-1);
					//this.stage.setChildIndex(this.layout.rightleg,this.stage.getNumChildren()-1);
					this.layout.leftleg.x = v.x * this.unit -7+this.layout.birdscontainer.x;
					this.layout.leftleg.y = v.y * this.unit -7+this.layout.birdscontainer.y;
					this.layout.rightleg.x = v.x * this.unit +7+this.layout.birdscontainer.x;
					this.layout.rightleg.y = v.y * this.unit -7+this.layout.birdscontainer.y;
					}
					if(v.bird._tilting){
						var nextPoint = this._points[i + 1];
						if(nextPoint){
							var angle = nextPoint.angleTo(v) * 180 / Math.PI;
							v.bird.rotation = v.bird._defaultR + angle;
						}
					}
				} else {
					if(!v.bird._frameNumber_){
						v.bird._frameNumber_ = 0;
					}
					v.bird.gotoAndStop(v.bird._frameNumber_.toFixed(0) * 1);
					v.bird._frameNumber_ += 0.5;
					
					v.bird.rotation = v.bird._flyDir * 45 / Math.PI;
					var pos = Maths.getPoint(v.bird, v.bird._flyDir, 2);
					v.bird.x = pos.x;
					v.bird.y = pos.y;
				}
				
				if(v.bird._thresholdA && (v.y.toFixed(2) * 1 <= -(v.bird._thresholdA - 0.01) && this._A != 0) && v.bird._thresholdA <= this._A){
					v.bird._flew = true;
				}
				
				if(v.bird._wingFlip){
					if(!v.bird._currentInterval){
						v.bird._currentInterval = 0;
					}
					if(v.bird._previousYPos > v.bird.y){
					v.bird._currentInterval++;
						if(v.bird._currentInterval % v.bird._wingFlipInterval == 0){
							if(v.bird.currentFrame == v.bird._wingFlipFrame2){
								v.bird.gotoAndStop(v.bird._wingFlipFrame);
							} else {
								v.bird.gotoAndStop(v.bird._wingFlipFrame2);
							}
						}
					} else {
						
						if(this._first)
					{
						if(this._once==false) 
						{ 
					v.bird.gotoAndPlay(v.bird._headAnimFrame); this._once = true; 
					};
					
					if(v.bird.currentFrame>=(v.bird.totalFrames-1))
					{
						this._once = false; 
					}
						
					}
					else{
						v.bird.gotoAndStop(0);
					}
					}
					v.bird._previousYPos = v.bird.y;
				}
			}
		}, this);
		this.layout.waveshape.graphics.endStroke();
	
	}
	
	Activity.prototype.reset = function(){
		
		
		this.birds.forEach(function(name, i){
			this.layout[name].gotoAndStop(0);
			this.layout[name]._flew = false;
		}, this);
		
		// to make the wire straight again
		this._A = 0;
		this._F = 1.9;
		this._first = true;
		this._flag1 = true;
		this._once = false; 
		this._onlyOnce = false;
		
		this._phase = 0;
		for(i=0;i<this._points.length;i++)
		{
			this._points[i].y=0;
		}
		
		Ticker.add({
			fps:120,
			callback:this.enterFrame
		});
		//
		
		this.birds.forEach(function(name, i){
			console.log(this.layout[name]._flew);
		}, this);
		//Ticker.remove(this.enterFrame);
		this._waveStart = 50;
		this._w = this._waveStart;
		this._waveEnd = 1;
		this._phase = 0;
		this._thetaAtStart = 0;
		this.layout.ampStepper.enable();
		this.layout.pauseButton.disable();
		this.layout.pauseButton.visible = true;
		this.layout.resume.visible = false;
	}
	
	Activity.prototype.replay = function(){

		//
		this._A = 0;
		this._F = 1.78;
		this.enterFrame();
		
		this.birds.forEach(function(name, i){
			console.log(this.layout[name]._flew);
		}, this);
		
		this._waveStart = 50;
		this._w = this._waveStart;
		this._waveEnd = 1;
		this._phase = 0;
		this._thetaAtStart = 0;
		this.layout.ampStepper.enable();
		
	}
	
	return Activity;
})();