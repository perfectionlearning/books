var cnt=1;
var n;
var waveStartArray = [];
var waveLength;
var flewCount=0;
var num=2;
var strArr = [];

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
		this.unit = 340;
		this._currTime = 0;
		this._prevTimeVal = 0;
		this._pause = true;
		this._inc = true;
		this._countTimeStep = 0;
		for(var i = 0; i <= 3.75; i += this._pointGapX){
			this._points.push(new Vector(i, 0));
		}
		this.enterFrame = enterFrame.bind(this);
		
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
			//console.log("_countTimeStep==="+scope._countTimeStep);
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
			console.log("scope._currTimeVal==="+scope._currTimeVal);
			console.log("scope._prevTimeVal==="+scope._prevTimeVal);
			if((scope._currTimeVal<scope._prevTimeVal)||((scope._currTimeVal==scope._prevTimeVal)&&(scope._inc == false)))
			{
			scope._inc = false;
			scope._waveEnd -= 6;
			/*
					for(n=1;n<cnt;n++)
		{
		//console.log("inside for loop");
		
		waveStartArray[n-1]-=6;
		}*/
			
			
			for(n=0;n<cnt;n++)
			{
			scope._phaseArray[n] = scope._phaseArray[n] + scope._pointGapX * 6;	
			}
			}
			else{
				scope._inc = true;
			}
			console.log("scope._inc"+scope._inc);
			scope._prevTimeVal = scope._currTimeVal;
			
			scope.enterFrame({}, 1);
			//console.log("scope._waveEnd==="+scope._waveEnd);
			//console.log("waveStartArray[0]==="+waveStartArray[0]);
			
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
		this._F = 1.6;
		
		this._AmpArray[0]=0.25;
		this._FreqArray[0]=1.6;
		
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
		/*
		Ticker.add({
			fps:100,
			callback:this.enterFrame
		});*/
		createjs.Ticker.addEventListener("tick",this.enterFrame);
		//console.log("play called");
		this._pause = false;
	}
	
	function pauseClicked(){
		//Ticker.remove(this.enterFrame);
		createjs.Ticker.removeEventListener("tick",this.enterFrame);
		
		this.layout.pauseButton.visible = false;
		this.layout.playButton.visible = true;
		
		this._pause = true;
	}
	
	function enterFrame(e,val){
		
		var _ll = val || 4;
		for(var ll = 0; ll < _ll; ll++)
		{
			
		var p;
		var pAtStart = this._points[this._wInitial];
		
			if(pAtStart)	
			{
		this._thetaAtStart = 2 * Math.PI * this._FreqArray[this._FreqArray.length-1] *1.25* (pAtStart.x + this._phaseArray[this._phaseArray.length-1]);
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
			}
			var curTimeFix = this._curTime.toFixed(1);
			if(curTimeFix==0) this._curTime = 0;
			this._noOfFrames = Math.round(this._curTime*10);
			this.layout.timeStepper.value = this._curTime;
			this._prevTimeVal = this._curTime.toFixed(1);
			
		}
		else{
			this._curTime = this._noOfFrames/10;
			this.layout.timeStepper.value = this._curTime;
			this._prevTimeVal = this._curTime.toFixed(1);
		}
		//console.log("this._curTime---->"+this._curTime);
		//console.log("this._noOfFrames---->"+this._noOfFrames);
		
		
		if(this._curTime>99) this.layout.timerTxt.x=37;
		else{
			if(this._curTime>9) this.layout.timerTxt.x=42;
			else this.layout.timerTxt.x=48;
		}
		
		this.layout.timerTxt.text = this._curTime.toFixed(1)+" ms";
		if(this.layout.timerTxt.text =="-0.0 ms") this.layout.timerTxt.text = "0.0 ms";
		//if(this._curTime>12) Ticker.remove(this.enterFrame);
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
		/*
		if((this._pause)&&(this._inc==false))
		{
			if(this._thetaAtStart>=(-1*num*Math.PI)) 
		{
			
		//this._AmpArray[cnt]=this._A;
		//this._FreqArray[cnt]=this._F;
		//this._phaseArray[cnt] = this._phaseArray[cnt-1];
		num-=2;
		cnt--;
				
		}
		}*/
		
			
		
		if(this._thetaAtStart<=(-1*num*Math.PI)) 
		{
			
		this._AmpArray[cnt]=this._A;
		this._FreqArray[cnt]=this._F;
		//this._phaseArray[cnt/2] = -1*cnt/(2*this._FreqArray[cnt/2-1])-0.25;
		
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
		console.log("cnt==="+cnt);
		//waveStartArray[cnt-1]--;
		waveStartArray.push(0);
		if(cnt==1)
				{
					//waveLength = this._points[this._waveEnd-1].x-this._points[waveStartArray[0]].x;
					speed  = waveLength*this._FreqArray[0];
					
				}
				else
				{
					
					//waveLength = this._points[waveStartArray[cnt-2]].x-this._points[waveStartArray[cnt-1]].x;
				}
				//console.log("waveLength---"+waveLength);
		cnt++;
		
		
				
		}
		
		
		
		
		for(n=1;n<cnt;n++)
		{
		//console.log("inside for loop");
		
		waveStartArray[n-1]+=3;
				
			
		
		waveStartArray[n-1] = Math.min(this._points.length, waveStartArray[n-1]);
		
		for(i = waveStartArray[n]; i < waveStartArray[n-1]; i++){
			p = this._points[i];
			
			if(p){
				p.y = this._AmpArray[n] * Math.sin(2 * Math.PI * this._FreqArray[n] *1.25* (p.x + this._phaseArray[n]));
		
				//if(i==waveStartArray[n])  {  console.log(n+"---p.y====inside"+p.y); console.log(n+"---p.x====inside"+p.x);  }
			}
			else{
				break;
			}
			
		}
	
		}

		console.log("inside waveStartArray[0]"+waveStartArray[0]);
		
		i = waveStartArray[0];
		for(; i < this._waveEnd; i++){
			p = this._points[i];
			if(p){
				
				p.y = this._AmpArray[0] * Math.sin(2 * Math.PI * this._FreqArray[0] *1.25* (p.x + this._phaseArray[0]));
				//console.log("p.y----here"+p.y);
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
		
		
		//console.log("inside this._waveEnd==="+this._waveEnd);
		
		}
		
		//this._waveEnd = Math.min(this._points.length, this._waveEnd);
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
		this._prevTimeVal = 0;
		// to make the wire straight again
		this._A = 0;
		this._F = 1.6;
		waveStartArray = [];
		cnt=1;
		waveStartArray[0]=0;
		this._wInitial = 0;
		this._AmpArray = [];
		this._FreqArray = [];
		this._phaseArray = [];
		this._AmpArray[0]=0;
		this._FreqArray.push(1.6);
		this._phaseArray[0]=0;
		
		
		this._phase = 0;
		
		this.enterFrame();
		this._AmpArray[0]=0.25;
		this._A = 0.25;
		this._F = 1.6;
		this._curTime = 0;
		this.layout.timeStepper.value = 0;
		this._prevTimeVal = this._curTime;
		this._noOfFrames = 0;
		this._waveEnd = 4;
		num=2;
		this._inc = true;
		this._phaseArray[0]=Math.PI/(2 * Math.PI * this._FreqArray[0] *1.25)- this._pointGapX * 3;
		this.layout.timerTxt.text="0.0 ms";
		this.layout.timerTxt.x=48;
		this.layout.timeStepper.enable();

		
	}
	
	return Activity;
})();