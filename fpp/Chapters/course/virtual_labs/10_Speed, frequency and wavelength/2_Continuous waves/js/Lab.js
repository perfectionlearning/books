var cnt=1;
var n;
var waveStartArray = [];
var num=2;

var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		this._points = [];
		var scope  = this;
		this._pointGapX = 0.005;
		this.unit = 280;
		this._first = true;
		for(var i = 0; i <= 3.15; i += this._pointGapX){
			this._points.push(new Vector(i, 0));
		}
		this.enterFrame = enterFrame.bind(this);
		this.playClicked = playClicked.bind(this);
		this.reset = this.reset.bind(this);
		this._once = false;
		this._flagOnce = false;
		
		this._playClicked = playClicked.bind(this);
		this._pauseClicked = pauseClicked.bind(this);
		this.layout.pauseButton.enable().addEventListener("click", this._pauseClicked);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);
		
		this.layout.ampStepper.addEventListener("valueChange", function(e){
			scope.layout.ampText.text = e.currentTarget.value.toFixed(2);
			scope._A = e.currentTarget.value.toFixed(2) * 1;
			
		});
		
		this.layout.freqStepper.addEventListener("valueChange", function(e){
			scope.layout.freqText.text = e.currentTarget.value.toFixed(1);
			scope._F = e.currentTarget.value.toFixed(1) * 1;
			
		});
		
		positionBirds.call(this);
		this.reset();
	}
	
	function positionBirds(){
		var birds = ["parrot", "bird1", "bird2", "bird3"];
		this.birds = birds;
		birds.forEach(function(name){
			var index = this.layout[name]._wirePos / this._pointGapX;
			console.log(index)
			this._points[index].bird = this.layout[name];
			//this.layout[name].x = this.layout[name]._wirePos * this.unit;
		}, this);
	}
	
	function playClicked(){
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;

		this.layout.ampStepper.enable();
		this.layout.freqStepper.enable();
		
		this._A = this.layout.ampStepper.value;
		this._F = this.layout.freqStepper.value;
		if((cnt==1)&&(this._flagOnce==false))
		{
		this._AmpArray[0] = this._A;
		this._FreqArray[0] = this._F;
		this._phaseArray[0]=0;
		this._waveEnd = 1;
		this._flagOnce = true;
		}
		
		if(this._first==false)
		{
		// Ticker.add({
			// fps:120,
			// callback:this.enterFrame
		// });
		createjs.Ticker.addEventListener("tick", this.enterFrame);
		}
		this._first = false;
	}
	
	function pauseClicked(){
		// Ticker.remove(this.enterFrame);
		createjs.Ticker.removeEventListener("tick", this.enterFrame);
		this.layout.pauseButton.visible = false;
		this.layout.playButton.visible = true;
		
		this.layout.ampStepper.disable();
		this.layout.freqStepper.disable();
	}
	
	function enterFrame(){
		for(var ll = 0; ll < 2; ll++){
			var p;
			var pAtStart = this._points[this._wInitial];
			
				if(pAtStart)	
				{
			this._thetaAtStart = 2 * Math.PI * this._FreqArray[this._FreqArray.length-1] *1.25* (pAtStart.x + this._phaseArray[this._phaseArray.length-1]);
				}
			
			
			if(this._thetaAtStart<=(-1*num * Math.PI)&&(this._first == false)) 
			{
				
			this._AmpArray[cnt]=this._A;
			this._FreqArray[cnt]=this._F;
			//this._phaseArray[cnt/2] = -1*cnt/(2*this._FreqArray[cnt/2-1])-0.25;
			if(cnt==1)
					{
						waveLength = this._points[this._waveEnd-1].x-this._points[waveStartArray[0]].x;
						speed  = waveLength*this._FreqArray[0]*1.25;
						console.log("speed--->"+speed);
						//Ticker.remove(this.enterFrame);
					}
			if(this._FreqArray[cnt]==this._FreqArray[cnt-1])
			{
				this._phaseArray[cnt] = this._phaseArray[cnt-1];
				num+=2;
				
			}
			else
			{
			this._phaseArray[cnt] = -0.255;
			num=2;
			}
			//console.log("cnt==="+cnt);
			//waveStartArray[cnt-1]--;
			cnt++;
			waveStartArray.push(49);
			
			}
			
			
			for(n=1;n<cnt;n++)
			{
			waveStartArray[n-1]+=3;
			waveStartArray[n-1] = Math.min(this._points.length, waveStartArray[n-1]);
			
			for(i = waveStartArray[n]; i < waveStartArray[n-1]; i++){
				p = this._points[i];
				
				if(p){
					p.y = this._AmpArray[n] * Math.sin(2 * Math.PI * this._FreqArray[n] *1.25* (p.x + this._phaseArray[n]));
					//if(i==waveStartArray[n])  {  console.log(n+"---p.y====inside"+p.y); console.log(n+"---p.x====inside"+p.x);  }
				}
			}
		
			}

			
			
			i = waveStartArray[0];
			for(; i < this._waveEnd; i++){
				p = this._points[i];
				if(p){
					
					p.y = this._AmpArray[0] * Math.sin(2 * Math.PI * this._FreqArray[0] *1.25* (p.x + this._phaseArray[0]));
					
				}
			}
			for(i = 0; i < this._wInitial; i++){
				p = this._points[i];
				if(p){
					p.y = (Math.exp(p.x * 10) - 1) * (this._points[this._wInitial].y / 12);
				}
			}
			for(n=0;n<cnt;n++)
			{
			this._phaseArray[n] = this._phaseArray[n] - this._pointGapX * 3;	
			}
			
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
					if(v.bird._thresholdF && (v.y.toFixed(2) * 1 <= -(this._A - 0.01) && this._A != 0) && v.bird._thresholdF <= this._F){
						v.bird._flew = true;
					}
					
					if(v.bird._wingFlip){
						if(!v.bird._currentInterval){
							v.bird._currentInterval = 0;
						}
						if(v.bird._previousYPos > v.bird.y){
						v.bird._currentInterval++;
							if(v.bird._currentInterval % v.bird._wingFlipInterval == 0){
								//console.log("v.bird.currentFrame---"+v.bird.currentFrame);
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
	}
	
	Activity.prototype.reset = function(){
		this._pauseClicked();
		
		this.birds.forEach(function(name, i){
			this.layout[name].gotoAndStop(0);
			this.layout[name]._flew = false;
		}, this);
		
		// to make the wire straight again
		this._A = 0;
		this._F = 0.3;
		waveStartArray = [];
		cnt=1;
		num=2;
		waveStartArray[0]=49;
		this._wInitial = 49;
		this._AmpArray = [];
		this._FreqArray = [];
		this._phaseArray = [];
		this._AmpArray[0]=0;
		this._FreqArray[0]=0.3;
		this._phaseArray[0]=0;
		this._first = true;
		this._once = false;
		this._flagOnce = false;
		this._phase = 0;
		for(i=0;i<this._points.length;i++)
		{
			this._points[i].y=0;
		}
		// Ticker.add({
			// fps:120,
			// callback:this.enterFrame
		// });
		createjs.Ticker.addEventListener("tick", this.enterFrame);
		this._waveEnd = 1;
		this._phaseArray[0]=0;
		
		this.birds.forEach(function(name, i){
			console.log(this.layout[name]._flew);
		}, this);
		
		
		this.layout.ampStepper.enable();
		this.layout.freqStepper.enable();
		
	}
	
	return Activity;
})();