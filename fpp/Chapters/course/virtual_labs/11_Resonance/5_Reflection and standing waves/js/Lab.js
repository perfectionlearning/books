var cnt=1;
var n;
var waveLength;
var flewCount=0;
var num=2;
var strArr = [];
var tempTime;

var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		this._points = [];
		this._curTime = 0;
		this._noOfFrames = 0;
		var scope  = this;
		this._pointGapX = 0.0025;
		this.unit = 248;
		this._currTime = 0;
		this._prevTimeVal = 500;
		this._pause = true;
		this._inc = true;
		this._flag2 = false;
		this._countTimeStep = 0;
		for(var i = 0; i <= 3.750; i += this._pointGapX){
			this._points.push(new Vector(i, 0));
		}
		
		
		this.enterFrame = enterFrame.bind(this);
		this.enterFrameTimeDec = enterFrameTimeDec.bind(this);
		
		this.reset = this.reset.bind(this);
		this.moveWave = moveWave.bind(this);
		this._playClicked = playClicked.bind(this);
		this._pauseClicked = pauseClicked.bind(this);
		this.layout.pauseButton.enable().addEventListener("click", this._pauseClicked);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);
		
		this.layout.timeStepper.addEventListener("mousedown", function(e){
			scope._countTimeStep=0;
			/*
			Ticker.add({
				fps:60,
				callback:scope.moveWave
				});*/
			createjs.Ticker.addEventListener("tick", scope.moveWave);
			
		})
		this.layout.timeStepper.addEventListener("pressup", function(e){
			//Ticker.remove(scope.moveWave);
			createjs.Ticker.removeEventListener("tick", scope.moveWave);
			scope._countTimeStep=0;
		})
		
		this.layout.timeStepper.addEventListener("valueChange", function(e){
			//scope.layout.timerTxt.text = e.currentTarget.value.toFixed(2);
			//scope._A = e.currentTarget.value.toFixed(2) * 1;
			var k,m;
			if((scope._countTimeStep>100)&&(scope._curTime>0.4))
			{
				m = 4;
				
			}
			else{
				m = 1;
			}
			
			scope._pauseClicked();
			
				for(k=0;k<m;k++)
			{
			scope._currTimeVal = e.currentTarget.value.toFixed(2) * 1;
			if((scope._currTimeVal<scope._prevTimeVal)||((scope._currTimeVal==scope._prevTimeVal)&&(scope._inc == false)))
			{
			//console.log("innnn");
			scope._inc = false;
			if(scope._curTime>0)
			{
			//console.log("scope._waveStart---->"+scope._waveStart);
			if(scope._waveEnd>=(scope._points.length-1))
		{
			scope._waveEnd2+= 6;
			//scope._waveStart2+=6;
			
			scope._phase2 = scope._phase2 - scope._pointGapX * 6;	
		}
			scope._waveEnd -= 6;
			//scope._waveStart-=6;
			//if(scope._waveStart<0) scope._waveStart=0;
			scope._phase = scope._phase + scope._pointGapX * 6;	
			
				
			}
			}
			else{
				scope._inc = true;
			}
			
			//console.log("scope._inc"+scope._inc);
			scope._prevTimeVal = scope._currTimeVal;
			if(scope._curTime==0)
			{
				if(scope._inc == true)
				{
					
					scope.enterFrame({}, 1);
					
				}
				else
				{
					tempTime = scope._curTime.toFixed(2);
					scope._curTime =  Number(tempTime) - 0.1;
				scope.layout.timerTxt.text = scope._curTime.toFixed(2)+" ms";
					
				}
				
			}
			
			else{
			if(scope._curTime>0) scope.enterFrame({}, 1);		
			else{
				if(scope._inc == true)
				{
					tempTime = scope._curTime.toFixed(2);
				scope._curTime = Number(tempTime) + 0.1;
				scope.layout.timerTxt.text = scope._curTime.toFixed(2)+" ms";
				}
				else
				{
					tempTime = scope._curTime.toFixed(2);
					scope._curTime = Number(tempTime) - 0.1;
				scope.layout.timerTxt.text = scope._curTime.toFixed(2)+" ms";
				}
				
				
			}
			}
		
		}
	});
	this.reset();
	
	}
	
	function moveWave()
	{
		
		this._countTimeStep++;
		//console.log("_countTimStep"+this._countTimeStep);
	}
	
	function playClicked(){
		this._A = 0.25;
		this._F = 0.67;
		
		this._A2 = 0.25;
		this._F2 = 0.67;
		
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
		
		//console.log("this._curTime-->"+this._curTime);
		
		if(this._curTime<0) this._flag2 = true;
		
		if(this._flag2==true)
			{
				/*
				Ticker.add({
			fps:160,
			callback:this.enterFrameTimeDec
		});*/
		createjs.Ticker.addEventListener("tick", this.enterFrameTimeDec);
			}
			else
			{
				/*
		Ticker.add({
			fps:160,
			callback:this.enterFrame
		});*/
		createjs.Ticker.addEventListener("tick", this.enterFrame);
			}
			
		//console.log("play called");
		this._pause = false;
	}
	
	function pauseClicked(){
		//Ticker.remove(this.enterFrame);
		createjs.Ticker.removeEventListener("tick", this.enterFrame);
		
		this.layout.pauseButton.visible = false;
		this.layout.playButton.visible = true;
		
		this._pause = true;
	}
	function enterFrameTimeDec()
	{
		if((this._pause==false)&&(this._flag2))
		{
				tempTime = this._curTime.toFixed(2);
				this._curTime = Number(tempTime) + 0.1;
				if(this._curTime>=0) 
				{
					
				this._flag2 = false;
				/*
				Ticker.add({
				fps:160,
				callback:this.enterFrame
				});*/
				createjs.Ticker.addEventListener("tick", this.enterFrame);
				}
				this.layout.timerTxt.text = this._curTime.toFixed(2)+" ms";
		}
	}
	function enterFrame(e,val){
		var _ll = val || 4;
		for(var ll = 0; ll < _ll; ll++)
		{
		
		var p;
		var pAtStart = this._points[this._wInitial];
		//console.log("pAtStart--->"+);
			if(pAtStart)	
			{
		this._thetaAtStart = 2 * Math.PI * this._F * (pAtStart.x + this._phase);
		//console.log("this._thetaAtStart---->"+this._thetaAtStart);
			}
		
		this._noOfFrames++;
		//console.log("this._noOfFrames--->"+this._noOfFrames);
		//console.log("this._pause--->"+this._pause);
		//console.log("this._inc--->"+this._inc);
		if(this._pause)
		{
			
			if(this._inc)
			{
			this._curTime = this._curTime + 0.1;
			}
			else{
				this._curTime = this._curTime - 0.1;
				
				//console.log("i am inside---->"+this._curTime);
				var curTimeFix = this._curTime.toFixed(2);
				if(curTimeFix==0) this._curTime = 0; 
				//if(this._curTime<0) this._curTime = 0; 
			}
			this.layout.timeStepper.value = this._curTime;
			this._prevTimeVal = this._curTime.toFixed(1);;
			this._noOfFrames = Math.round(this._curTime*10);
			
		}
		else{
			
			this._curTime = this._noOfFrames/10;
			this.layout.timeStepper.value = this._curTime;
			this._prevTimeVal = this._curTime.toFixed(1);;
			
			//if(this._curTime>=3) Ticker.remove(this.enterFrame);
		}
		
		
		if(this._curTime>99) this.layout.timerTxt.x=37;
		else{
			if(this._curTime>9) this.layout.timerTxt.x=42;
		}
		
		this.layout.timerTxt.text = this._curTime.toFixed(1)+" ms";
		if(this._curTime>999) {
			var str;
			str = String(this._curTime.toFixed(1));
			//console.log("str--->"+str);
			strArr[0] = str.charAt(0);
			strArr[1] = ',';
			strArr[2] = str.charAt(1);
			strArr[3] = str.charAt(2);
			strArr[4] = str.charAt(3);
			strArr[5] = str.charAt(4);
			strArr[6] = str.charAt(5);
			
			
			var finalStr,j;
			finalStr="";
			for(j=0;j<strArr.length;j++)
			{
				finalStr+=strArr[j];
				//console.log("strArr[j]--->"+strArr[j]);
			}
			this.layout.timerTxt.text = finalStr+" ms";
			this.layout.timerTxt.x=28;
		}
		//if(this._thetaAtStart<=-1*Math.PI) this._waveStart+=3;
		
		i = this._waveStart;
		for(; i < this._waveEnd; i++){
			p = this._points[i];
			if(p){
				p.y = this._A * Math.sin(2 * Math.PI * this._F * (p.x + this._phase));
				
				
				//console.log("p.y----"+p.y);
				
			}
			else{
				break;
			}
		}
		
		for(i=this._waveEnd; i <this._points.length ; i++){
			p = this._points[i];
			if(p){
				
				p.y = 0;
				//console.log("p.y----"+p.y);
			}
		}
		
		for(i=this._wInitial; i < this._waveStart; i++){
			p = this._points[i];
			if(p){
				
				p.y = 0;
				
				//console.log("p.y----"+p.y);
			}
		}
		
		
		var i2;
		var pAtStart2 = this._points[this._wInitial2];
		
		
			if(pAtStart2)	
			{
				//console.log("pAtStart2---"+pAtStart2.x);
		this._thetaAtStart2 = 2 * Math.PI * this._F2 * (pAtStart2.x + this._phase2);
			}
			
		//console.log("this._thetaAtStart2---->"+this._thetaAtStart2);
		//if(this._thetaAtStart2>=Math.PI) { this._waveStart2-=3;   }
		
		
		//console.log("this._waveStart2--->"+this._waveStart2);
		//console.log("this._waveEnd------->"+this._waveEnd);
		
		i2 = this._waveStart2;
		for(; i2 > this._waveEnd2; i2--){
			p = this._points[i2];
			if(p){
				//console.log("before here p.y----"+p.y);
				p.y+= this._A2 * Math.sin(2 * Math.PI * this._F2 * (p.x + this._phase2));
				//var valS = 2*this._F2;
				
				//console.log("valS==="+valS);
				//console.log("this._phase2==="+this._phase2);
				//console.log("p.x==="+p.x);
				//console.log("here p.y----"+p.y);
				//console.log("here p.x----"+p.x);
				
			}
			else{
				break;
			}
		}
		//console.log("this._waveEnd---->"+this._waveEnd);
		
		if(this._waveEnd>=(this._points.length-1))
		{
		this._phase2 = this._phase2 + this._pointGapX * 3;
		this._waveEnd2-= 3;
		//console.log("hi this._phase2=="+this._phase2);
		}
		else{
			this._phase2 = (1/(2*this._F2))-3.750-this._pointGapX;
			this._waveStart2 = this._points.length-1;
		this._waveEnd2 = this._points.length-1;
		}
		this._phase = this._phase - this._pointGapX * 3;
		this._waveEnd+= 3;
		}
		//console.log("this._points[0].x==="+this._points[0].x);
		//console.log("this._points[0].y==="+this._points[0].y);
		
		this.layout.waveshape.graphics.clear().setStrokeStyle(3).beginStroke("#000").moveTo(this._points[0].x* this.unit, this._points[0].y* this.unit);
		this._points.forEach(function(v, i){
			this.layout.waveshape.graphics.lineTo(v.x * this.unit, v.y * this.unit);
			
		}, this);
		this.layout.waveshape.graphics.endStroke();
	
	}
	
	Activity.prototype.reset = function(){
		this._pauseClicked();
		
		this.layout.playButton.enable();
		
		// to make the wire straight again
		this._A = 0;
		this._F = 0.67;
		this._A2 = 0;
		this._F2 = 0.67;
		cnt=1;
		this._wInitial = 0;
		this._waveStart = 0;
		this._phase = 0;
		this._flag2 = false;
		
		this.enterFrame();
		
		this._A = 0.25;
		this._F = 0.67;
		this._A2 = 0.25;
		this._F2 = 0.67;
		
		this._curTime = 0;
		this._prevTimeVal = 0;
		this.layout.timeStepper.value = this._curTime;
		this._noOfFrames = 0;
		this._waveEnd = 4;
		this._inc = true;
		this._phase = -1/(2*this._F)- this._pointGapX * 3;
		this.layout.timerTxt.text="0.0 ms";
		this.layout.timerTxt.x=48;
		this.layout.timeStepper.enable();
		
		
		this._wInitial2 = this._points.length-1;
		this._waveStart2 = this._points.length-1;
		this._waveEnd2 = this._points.length-1;
		this._phase2 = (1/(2*this._F2))-3.750-this._pointGapX;
		//console.log("this._phase2==="+this._phase2);
	}
	
	return Activity;
})();