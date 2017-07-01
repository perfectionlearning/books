var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		this._unit =192.47;//  calculated from legacy and converted from 760 to 1024 px screen size.
		this._putterCharge = 0;
		this.started=false;
		this.stdDist=598;
		this.stdForce=8.16 * Math.pow(10,-26);
		this.stdMag=100/this._unit;
		
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
		this._reverse = this._reverse.bind(this);
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	
	Activity.prototype.constructor = Activity;
	
	Activity.prototype.startLab = function(){
		var scope = this;
		scope.layout.stepper.value=0;
		
		this.layout.playButton.enable().addEventListener("click",scope._play);
		this.layout.resetButton.enable().addEventListener("click",scope.reset);
		
		this.arrowline=this.layout.arrowline;
		this.arrow=this.layout.arrow;
		
		this.vector = new VectorLine(this.arrow,{x:this.layout.ball.x,y:this.layout.ball.y}, {min:-1000,max:2000}, {min:0, max:360},this.arrowline, {color:"black"});
		this.vector.unit = 1;
		this.vector.magnitude=0;
		this.vector.angle=0;
		
		this.layout.stepper.enable().addEventListener("valueChange", function(e){
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
		
		this.reset();
		this.layout.ball.snapToPixel=false;
	}
	
	Activity.prototype._vectorMag = function(){
		this.temp = (this.layout.stepper.value/0.235)/this._unit;
		this.vector.magnitude = Math.abs((this.stdDist * this.temp)/this.stdMag);
	}
	
	Activity.prototype.reset = function(){
		this.layout.ball.visible=true;
		this.layout.ball2.visible=false;
		this.layout.ball.x=150.7;
		this.layout.ball2.x=1000;
		createjs.Ticker.removeEventListener(this._checkPosition);
		createjs.Tween.get(this.layout.ball, {override:true}).to({scaleX:1.6,scaleY:1.6}, 0, createjs.Ease.linear);
		if(this.layout.stepper.value == 0){
			this.vector.visible=false;
		}
		else{
			this.vector.visible=true;
		}
		if(this.layout.stepper.value<0){
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
		
		
		this.started=true;
		this.layout.playButton.disable();
		this.vector.visible=false;
		this.ballPutterDist=0.235;
		this.force =  (this.K * this._putterCharge * this.protonCharge * this.protonCharge)/Math.pow(this.ballPutterDist,2);
		var ratio = this.force / this.stdForce;
		this.dist = this.stdDist * ratio;
		this.displacement = this.layout.ball.x + this.dist;
		// if(this.displacement >= 1000){
			// this.ball2_displacement = this.displacement - 1000;
			
		// }
		
		if(!(this.displacement <= this.layout.putter.x + 5)){
			createjs.Tween.get(this.layout.ball, {override:true}).to({x:(this.layout.ball.x + this.dist)}, 1000, createjs.Ease.quadOut).call(this._checkHole).addEventListener("change",this._reverse);
		}
		else{
			createjs.Tween.get(this.layout.ball, {override:true}).to({x:this.layout.putter.x + 5}, 300, createjs.Ease.quadOut);
		}
	}
	
	Activity.prototype._reverse = function() {
		if(this.layout.ball.x >= 1000){
			this.layout.ball.visible=false;
			this.layout.ball2.visible=true;
			this.temp = this.layout.ball.x - 1000;
			this.layout.ball2.x =1000 - this.temp; 
		}
	}
	
	Activity.prototype._checkHole = function(){
		if((this.layout.ball.x < 880 && this.layout.ball.x > 852)){
			this.layout.ball.x=865;
			createjs.Tween.get(this.layout.ball).to({scaleX:0.1,scaleY:0.1}, 1000, createjs.Ease.linear);
			this.layout.YouDidIt.visible=true;
		}
	}
	return Activity;
})();
