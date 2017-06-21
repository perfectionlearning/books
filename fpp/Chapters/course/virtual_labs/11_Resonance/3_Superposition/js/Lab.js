var cnt=1;
var n;
var waveLength;
var flewCount=0;
var num=1;
var tempTime;
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
		this._pointGapX = 0.01//005; //works with 0.008,0.01,0.04
		this.unit = 68;
		this._pause = true;
		this._inc = true;
		this._firstTime = true;
		this._prevTimeVal = 500;
		this.layout.rightTxt._width = 100;
		this._flag1 = false;
		this._ampChange = false;
		this._flag2 = false;
		this._countTimeStep = 0;
		
		for(var i = 0; i <= 15; i += this._pointGapX){
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
		
		this.layout.ampStepper1.addEventListener("valueChange", function(e){
			//console.log("e----"+e);
			scope.layout.ampText1.text = e.currentTarget.value.toFixed(1);
			scope._A1 = e.currentTarget.value.toFixed(1) * 1;
			
			if((scope._ampChange==false)&&(scope._pause==true))
			{
			scope._waveEnd -= 3;
			scope._phase1 = scope._phase1 + scope._pointGapX * 3;	
			scope._waveEnd2+= 3;
			scope._phase2 = scope._phase2 - scope._pointGapX * 3;	
			}
			
			if(scope._pause) scope._ampChange = true;
			
			if(scope._pause) { scope._flag1 = true; }
			else { scope._flag1 = false; }
			
			scope.enterFrame();	
			
			
			
		});
		
		this.layout.ampStepper2.addEventListener("valueChange", function(e){
			scope.layout.ampText2.text = e.currentTarget.value.toFixed(1);
			scope._A2 = e.currentTarget.value.toFixed(1) * 1;
			if((scope._ampChange==false)&&(scope._pause==true))
			{
			scope._waveEnd -= 3;
			scope._phase1 = scope._phase1 + scope._pointGapX * 3;	
			scope._waveEnd2+= 3;
			scope._phase2 = scope._phase2 - scope._pointGapX * 3;	
			}
			
			if(scope._pause) scope._ampChange = true;
			
			if(scope._pause) { scope._flag1 = true; }
			else { scope._flag1 = false; }
			
			scope.enterFrame();	
			
			//console.log("scope._waveEnd2--->"+scope._waveEnd2);
		});
		
		this.layout.timeStepper.addEventListener("mousedown", function(e){
			//console.log("exec1");
			scope._countTimeStep=0;
			// Ticker.add({
				// fps:60,
				// callback:scope.moveWave
				// });
			createjs.Ticker.addEventListener("tick", scope.moveWave);
		})
		this.layout.timeStepper.addEventListener("pressup", function(e){
			// Ticker.remove(scope.moveWave);
			scope._countTimeStep=0;
			createjs.Ticker.removeEventListener("tick", scope.moveWave);
			
		})
		this.layout.timeStepper.addEventListener("valueChange", function(e){
			//scope.layout.timerTxt.text = e.currentTarget.value.toFixed(2);
			//console.log("exec2");
			var k,m;
			if((scope._countTimeStep>100)&&(scope._curTime>0.4))
			{
				m = 4;
				//console.log("hi m----->"+m);
			}
			else{
				m = 1;
			}
			
			scope._flag1 = false;
			if(scope._ampChange==true)
			{
			scope._waveEnd+= 3;
			scope._phase1 = scope._phase1 - scope._pointGapX * 3;	
			scope._waveEnd2-= 3;
			scope._phase2 = scope._phase2 + scope._pointGapX * 3;	
			}
			scope._ampChange = false;
			
			scope._pauseClicked();
			for(k=0;k<m;k++)
			{
			scope._currTimeVal = e.currentTarget.value.toFixed(2) * 1;
						//console.log("scope._currTimeVal==="+scope._currTimeVal);
			//console.log("scope._prevTimeVal==="+scope._prevTimeVal);
			//console.log("scope._prevTimeVal---->"+scope._prevTimeVal);
			
			if((scope._currTimeVal<scope._prevTimeVal)||((scope._currTimeVal==scope._prevTimeVal)&&(scope._inc == false)))
			{
				//console.log("innnn");
			scope._inc = false;
			if(scope._curTime>0)
			{
			//console.log("scope._waveStart---->"+scope._waveStart);
			
			scope._waveEnd -= 6;
			scope._waveStart-=6;
			if(scope._waveStart<0) scope._waveStart=0;
			scope._phase1 = scope._phase1 + scope._pointGapX * 6;	
			
			scope._waveEnd2+= 6;
			scope._waveStart2+=6;
			if(scope._waveStart2>(scope._points.length-1)) scope._waveStart2=scope._points.length-1;
			
			scope._phase2 = scope._phase2 - scope._pointGapX * 6;	
			}
			}
			else{
				scope._inc = true;
			}
			
			//console.log("scope._inc"+scope._inc);
			scope._prevTimeVal = scope._currTimeVal;
			//console.log("scope._currTime before-->"+scope._curTime);
			if(scope._curTime==0)
			{
				if(scope._inc == true)
				{
					
					scope.enterFrame({}, 1);
					
				}
				else
				{
					tempTime = scope._curTime.toFixed(1);
					scope._curTime =  Number(tempTime) - 0.1;
				scope.layout.timerTxt.text = scope._curTime.toFixed(1)+" ms";
					
				}
				
			}
			
			else{
			if(scope._curTime>0) scope.enterFrame({}, 1);	
			else{
				if(scope._inc == true)
				{
					tempTime = scope._curTime.toFixed(1);
				scope._curTime = Number(tempTime) + 0.1;
				scope.layout.timerTxt.text = scope._curTime.toFixed(1)+" ms";
				}
				else
				{
					tempTime = scope._curTime.toFixed(1);
					scope._curTime = Number(tempTime) - 0.1;
				scope.layout.timerTxt.text = scope._curTime.toFixed(1)+" ms";
				}
				
				
			}
			}
			
			scope._currTimeVal = e.currentTarget.value.toFixed(2) * 1;
				scope._prevTimeVal = scope._currTimeVal;
				//console.log("scope._currTime step-->"+scope._curTime);
				//console.log("scope._waveEnd==="+scope._waveEnd);
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
		
		
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
		if(this._curTime<0) this._flag2 = true;
		
		if(this._ampChange==true)
			{
			this._waveEnd+= 3;
			this._phase1 = this._phase1 - this._pointGapX * 3;	
			this._waveEnd2-= 3;
			this._phase2 = this._phase2 + this._pointGapX * 3;	
			}
			this._ampChange = false;
			
			if(this._flag2==true)
			{
				// Ticker.add({
					// fps:160,
					// callback:this.enterFrameTimeDec
				// });
				createjs.Ticker.addEventListener("tick", this.enterFrameTimeDec);
			}
			else
			{
				// Ticker.add({
					// fps:160,
					// callback:this.enterFrame
				// });
				createjs.Ticker.addEventListener("tick", this.enterFrame);
			}
		//console.log("play called");
		this._pause = false;
		this._flag1 = false;
	}
	
	function pauseClicked(){
		// Ticker.remove(this.enterFrame);
		createjs.Ticker.removeEventListener("tick", this.enterFrame);
		
		this.layout.pauseButton.visible = false;
		this.layout.playButton.visible = true;
		
		this._pause = true;
		
		//console.log("this._waveEnd2--->"+this._waveEnd2);
	}
	function enterFrameTimeDec()
	{
		if((this._pause==false)&&(this._flag2))
		{
		tempTime = this._curTime.toFixed(1);
				this._curTime = Number(tempTime) + 0.1;
				if(this._curTime>=0) 
				{
					
					this._flag2 = false;
					// Ticker.add({
						// fps:160,
						// callback:this.enterFrame
					// });
					createjs.Ticker.addEventListener("tick", this.enterFrame);
				}
				this.layout.timerTxt.text = this._curTime.toFixed(1)+" ms";
		}
	}
	function enterFrame(e, val){
		var _ll = val || 4;
		for(var ll = 0; ll < _ll; ll++){
			
			var p,i;
			var pAtStart = this._points[this._wInitial];
			
				if(pAtStart)	
				{
			this._thetaAtStart = 2 * Math.PI * this._F1 * (pAtStart.x + this._phase1);
				}
				
			
			
			if(!this._pause) this._noOfFrames++;
			
			
			if(this._pause)
			{
				if(!this._flag1)
				{
				if(this._inc)
				{
				this._curTime = this._curTime + 0.1;
				}
				else{
					this._curTime = this._curTime - 0.1;
					
					//console.log("i am inside---->"+this._curTime);
					var curTimeFix = this._curTime.toFixed(1);
					if(curTimeFix==0) this._curTime = 0; 
					//if(this._curTime<0) this._curTime = 0; 
				}
				this.layout.timeStepper.value = this._curTime;
				this._prevTimeVal = this._curTime.toFixed(1);
				this._noOfFrames = Math.round(this._curTime*10);
				}
			}
			else{
				
				this._curTime = this._noOfFrames/10;
				this.layout.timeStepper.value = this._curTime;
				this._prevTimeVal = this._curTime.toFixed(1);
				
			}
			//console.log("this._curTime here---->"+this._curTime);
			//console.log("this._noOfFrames---->"+this._noOfFrames);
			
			
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
				this.layout.timerTxt.x=522;
			}
			
			if((this._thetaAtStart<=-1*Math.PI)&&(this._ampChange==false)) this._waveStart+=3;
			
			i = this._waveStart;
			for(; i < this._waveEnd; i++){
				p = this._points[i];
				if(p){
					p.y = this._A1 * Math.sin(2 * Math.PI * this._F1 * (p.x + this._phase1));
					
					//console.log("p.y----"+p.y);
					
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
			this._thetaAtStart2 = 2 * Math.PI * this._F2 * (pAtStart2.x + this._phase2);
				}
				
				//console.log("this._thetaAtStart2---->"+this._thetaAtStart2);
			if((this._thetaAtStart2>=Math.PI)&&(this._ampChange==false)) { this._waveStart2-=3;   }
			
			i2 = this._waveStart2;
			for(; i2 > this._waveEnd2; i2--){
				p = this._points[i2];
				if(p){
					
					p.y+= -this._A2 * Math.sin(2 * Math.PI * this._F2 * (p.x + this._phase2));
					
					//console.log("p.y----"+p.y);
					
				}
			}
			/*
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
			*/
			if(this._ampChange==false)
			{
			this._phase1 = this._phase1 - this._pointGapX * 3;	
			this._phase2 = this._phase2 + this._pointGapX * 3;	
			
			
			this._waveEnd+= 3;
			//this._waveEnd = Math.min(this._points.length, this._waveEnd);
			
			this._waveEnd2-= 3;
			//this._waveEnd2 = Math.max(0, this._waveEnd2);
			}
			
		}
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
		this._A1 = 0;
		this._F1 = 0.165;		
		this._A2 = 0;
		this._F2 = 0.165;		
		cnt=1;
		this._wInitial = 0;
		this._waveStart = 0;
		this._wInitial2 = this._points.length-1;
		this._waveStart2 = this._points.length-1;
		
		this._phase1 =  this._pointGapX * 3;
		
		this._phase2 =  -15;
		this._ampChange = false;
		this.enterFrame();
		this._waveEnd = 4;
		this._waveEnd2 = this._points.length-5;
		
		this._phase1 = -1*this._pointGapX * 3
		this._phase2 =  -15+this._pointGapX * 3;
		this._A1 = this.layout.ampStepper1.value;
		this._F1 = 0.165;
		
		this._A2 = this.layout.ampStepper2.value;
		this._F2 = 0.165;
		this._curTime = 0;
		this.layout.timeStepper.value = this._curTime;
		this.layout.timerTxt.x = 540;
		this._prevTimeVal = this._curTime;
		this._noOfFrames = 0;
		//this._prevTimeVal = 500;
		this.layout.timerTxt.text="0.0 ms";
		this.layout.timeStepper.enable();
		this.layout.ampStepper1.enable();
		this.layout.ampStepper2.enable();
		
	}
	
	return Activity;
})();