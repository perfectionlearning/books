var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		this._unit =192.47;//  calculated from legacy and converted from 760 to 1024 px screen size.
		this._putterCharge = 0;
		this.started=false;
		this.stdDist=48;
		this.stdForce=2.30 * Math.pow(10,-26);
		this.stdMag=10/this._unit;
		
		this.K=8990000000;
		this.protonMass = 1.6 * Math.pow(10,-27);
		this.protonCharge = 1.6 * Math.pow(10,-19);
		
		this.ballPutterDist=0;
		this.force=0;
		this.dist=0;
		
		this._vectorMag = this._vectorMag.bind(this);
		this._play = this._play.bind(this);
		this.reset = this.reset.bind(this);
		this._checkHole = this._checkHole.bind(this);
		this._checkPosition = this._checkPosition.bind(this);
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	
	Activity.prototype.constructor = Activity;
	
	Activity.prototype.startLab = function(){
		var scope = this;
		scope.layout.stepper1.value=0;
		scope.layout.stepper2.value=0.100;
		
		this.layout.playButton.enable().addEventListener("click",scope._play);
		this.layout.resetButton.enable().addEventListener("click",scope.reset);
		
		this.arrowline=this.layout.arrowline;
		this.arrow=this.layout.arrow;
		
		this.vector = new VectorLine(this.arrow,{x:this.layout.ball.x,y:this.layout.ball.y}, {min:-1000,max:2000}, {min:0, max:360},this.arrowline, {color:"black"});
		this.vector.unit = 1;
		this.vector.magnitude=0;
		this.vector.angle=0;
		
		this.layout.stepper1.enable().addEventListener("valueChange", function(e){
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
			scope._vectorMag();
			
			scope._putterCharge = e.currentTarget.value;
			scope.layout.chargePutter.text=e.currentTarget.value;
		});
		
		this.layout.stepper2.enable().addEventListener("valueChange", function (e){
			scope.layout.distance.text=e.currentTarget.value.toFixed(3);
			if(e.currentTarget._direction==1){
				scope.layout.putter.x-=0.19247;
			}
			else{
				scope.layout.putter.x+=0.19247;
			}
			if(!scope.started){
				if(scope.layout.stepper1.value<0){
					scope.vector.angle=180;
				}
				else{
					scope.vector.angle=0;
				}
			}
			scope._vectorMag();
		});
		
		this.reset();
		this.layout.ball.snapToPixel=false;
	}
	
	Activity.prototype._vectorMag = function(){
		this.temp = (this.layout.stepper1.value/this.layout.stepper2.value)/this._unit;
		this.vector.magnitude = Math.abs((this.stdDist * this.temp)/this.stdMag);
	}
	
	Activity.prototype.reset = function(){
		this.layout.ball.x=150.7;
		createjs.Ticker.removeEventListener(this._checkPosition);
		createjs.Tween.get(this.layout.ball, {override:true}).to({scaleX:1.6,scaleY:1.6}, 0, createjs.Ease.linear);
		if(this.layout.stepper1.value == 0){
			this.vector.visible=false;
		}
		else{
			this.vector.visible=true;
		}
		if(this.layout.stepper1.value<0){
			this.vector.angle=180;
			}
		else{
			this.vector.angle=0;
		}
		this.layout.YouDidIt.visible=false;
		this.layout.playButton.enable();
		this.layout.ball.visible=true;
		this.started=false;
	}
	
	Activity.prototype._play = function(){
		
		createjs.Ticker.addEventListener("tick",this._checkPosition);
		this.started=true;
		this.layout.playButton.disable();
		this.vector.visible=false;
		this.ballPutterDist=this.layout.stepper2.value;
		this.force =  (this.K * this._putterCharge * this.protonCharge * this.protonCharge)/Math.pow(this.ballPutterDist,2);
		var ratio = this.force / this.stdForce;
		this.dist = this.stdDist * ratio;
		this.displacement = this.layout.ball.x + this.dist;
		if(!(this.displacement <= this.layout.putter.x + 5)){
			createjs.Tween.get(this.layout.ball, {override:true}).to({x:(this.layout.ball.x + this.dist)}, 1000, createjs.Ease.quadOut).call(this._checkHole);
		}
		else{
			createjs.Tween.get(this.layout.ball, {override:true}).to({x:this.layout.putter.x + 5}, 300, createjs.Ease.quadOut);
		}
	}
	
	Activity.prototype._checkPosition = function (){
		if(this.layout.ball.x > 847)
		{
			this.layout.ball.visible=false;
			this.layout.wave.visible=true;
			this.layout.wave.gotoAndPlay(0);
			this.layout.wave.loop=false;
			createjs.Ticker.removeEventListener("tick",this._checkPosition);
		}
	}
	
	Activity.prototype._checkHole = function(){
		if((this.layout.ball.x < 766 && this.layout.ball.x > 740)){
			this.layout.ball.x=753;
			createjs.Tween.get(this.layout.ball).to({scaleX:0.1,scaleY:0.1}, 1000, createjs.Ease.linear);
			this.layout.YouDidIt.visible=true;
		}
	}
	return Activity;
})();
