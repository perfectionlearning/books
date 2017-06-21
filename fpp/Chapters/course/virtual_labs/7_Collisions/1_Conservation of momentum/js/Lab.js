var Lab = (function () {
	var scope;
	function Activity() {
		createjs.Container.call(this);
		
		this.CONVERT_PIXEL=6;
		this.TIMESTEP=1;
		this.RED_MASS=2;
		this.BLUE_MASS=1;
		this.TOTAL_MASS=3;
		this.MASS_DIFF=-1;
		
		this.redInitVelocity=0;
		this.blueInitVelocity=0;
		this.blueVelocity=0;
		this.redVelocity=0;
		this.blueMomentum=0;
		this.redMomentum=0;
		this.collision=0;
		this.displacement=0;
		this.diff=0;
		this.redBallReached=false;
		this.blueBallReached=false;
		this.paused==false;
	}

	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function () {
		scope = this;
		
		console.log(this)
		this.layout.stepper1.value=0.3;
		this.blueInitVelocity=0.3;
		this.layout.stepper2.value=0;
		
		this._pauseClicked = pauseClicked.bind(this);
		this._playClicked = playClicked.bind(this);
		this._checkCollision=checkCollision.bind(this);
		this._moveBall=moveBall.bind(this);
		this.reset = this.reset.bind(this);
		
		this.layout.pauseButton.enable().addEventListener("click", this._pauseClicked);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);
		
		this.layout.stepper1.enable().addEventListener("valueChange",function(e){
		
			scope.layout.blueInitVelocity.text=e.currentTarget.value.toFixed(1);
			if(!scope.running){
				scope.blueInitVelocity=e.currentTarget.value;
			}
		});
		
		this.layout.stepper2.enable().addEventListener("valueChange",function(e){
			
			scope.layout.redInitVelocity.text=e.currentTarget.value.toFixed(1);
			if(!scope.running){
				scope.redInitVelocity=e.currentTarget.value;
			}
		});

		this.reset();
	}

	Activity.prototype.reset = function () {
		var scope=this;
		this.running=false;
		this._calculated=false;
		
		this.redBallReached=false;
		this.blueBallReached=false;
		this.layout.stepper1.enable();
		this.layout.stepper2.enable();
		this.layout.blueInitVelocity.text=this.layout.stepper1.value.toFixed(1);
		this.layout.redInitVelocity.text=this.layout.stepper2.value.toFixed(1);
		this.blueVelocity=0;
		this.redVelocity=0;
		this.blueMomentum=0;
		this.redMomentum=0;
		
		var s=new createjs.Shape();
		s.graphics.drawRect(0,0,1000,700);
		scope.layout.popup.mask=s;
		
		createjs.Tween.get(scope.layout.popup, {override:true}).to({y:705}, 1000, createjs.Ease.linear);
		
		this.collision=0;
		createjs.Ticker.removeEventListener("tick",this._moveBall);
		
		this.layout.pauseButton.disable().visible=false;
		this.layout.playButton.enable().visible=true;
		this.layout.redBall.x=725;
		this.layout.blueBall.x=250;
		
		this.layout.redVelocity.text="--";
		this.layout.blueVelocity.text="--";
		this.layout.redMomentum.text="--";
		this.layout.blueMomentum.text="--";
	}
	
	function moveBall(){
		this._checkCollision();
		if(this.collision==0){
			this.blueMomentum=this.BLUE_MASS * this.blueVelocity;
			this.redMomentum=this.RED_MASS * this.redVelocity;
			
			this.layout.blueBall.x=this.layout.blueBall.x + (this.blueVelocity * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.redBall.x=this.layout.redBall.x + (this.redVelocity * this.CONVERT_PIXEL * this.TIMESTEP);
			
			this.layout.blueVelocity.text=this.blueVelocity.toFixed(1);
			this.layout.redVelocity.text=this.redVelocity.toFixed(1);
			this.layout.redMomentum.text=this.redMomentum.toFixed(1);
			this.layout.blueMomentum.text=this.blueMomentum.toFixed(1);
		}
		else{
			
			if(!this._calculated){
				this._calculated = true;
				this.redVelocity=((2 * this.BLUE_MASS * this.currentBlue) - (this.MASS_DIFF * this.currentRed))/this.TOTAL_MASS;
				this.blueVelocity=(((this.MASS_DIFF * this.currentBlue)/this.TOTAL_MASS) + ((2 *  this.RED_MASS * this.currentRed)/this.TOTAL_MASS));
				this.blueMomentum=this.BLUE_MASS * this.blueVelocity;
				this.redMomentum=this.RED_MASS * this.redVelocity;
				this.currentBlue=this.blueVelocity;
				this.currentRed=this.redVelocity;		
			}
			
			this.layout.blueBall.x=this.layout.blueBall.x + (this.blueVelocity * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.redBall.x=this.layout.redBall.x + (this.redVelocity * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.redVelocity.text=this.redVelocity.toFixed(1);
			this.layout.blueVelocity.text=this.blueVelocity.toFixed(1);
			this.layout.redMomentum.text=this.redMomentum.toFixed(1);
			this.layout.blueMomentum.text=this.blueMomentum.toFixed(1);
		}
		
		if(this.layout.redBall.x>970 && this.collision<2 && this.redBallReached==false){
			this.redVelocity=0;
			this.currentRed=0;
			this.redMomentum=0;
			this.redBallReached=true;
			this.layout.redBall.x=970;
			this.layout.redVelocity.text="0.0";
			this.layout.redMomentum.text="0.0";
		}
		
		if(this.layout.blueBall.x<11 && this.collision<2 && this.blueBallReached==false){
			this.blueVelocity=0;
			this.currentBlue=0;
			this.blueMomentum=0;
			this.blueBallReached=true;
			this.layout.blueBall.x=11;
			this.layout.blueVelocity.text="0.0";
			this.layout.blueMomentum.text="0.0";
		}
		
		if(this.redBallReached==true && this.blueBallReached==true){
			this.layout.pauseButton.disable();
			this.layout.playButton.enable().visible=true;
		}
	}
	
	function checkCollision(){
		var p1={
			x:this.layout.redBall.x,
			y:this.layout.redBall.y
		}
		var p2={
			x:this.layout.blueBall.x,
			y:this.layout.blueBall.y
		}
		this.diff=Maths.getDistance(p1,p2);
		if(this.diff<47){
			this.collision++;
			this._calculated=false;
		}
	}
	
	function playClicked(e){
		
		if((this.redBallReached==true && this.blueBallReached==true)){
			this.running=false;
			this.collision=0;
			this.redBallReached=false;
			this.blueBallReached=false;
			this.layout.redBall.x=725;
			this.layout.blueBall.x=250;
			this.diff=0;
		}
	
		if(this.paused==false){
			this.blueInitVelocity=this.layout.stepper1.value;
			this.redInitVelocity=this.layout.stepper2.value;
		}
		if(this.running==false){
			this.blueVelocity=this.blueInitVelocity;
			this.redVelocity=this.redInitVelocity;
			this.currentBlue=this.blueInitVelocity;
			this.currentRed=this.redInitVelocity;
		}

		
		this.layout.stepper1.enable();
		this.layout.stepper2.enable();
		createjs.Tween.get(scope.layout.popup).to({y:760}, 1000, createjs.Ease.linear);
		this.layout.pauseButton.enable().visible = true;
		this.layout.playButton.visible = false;
		this._moveBall();
		createjs.Ticker.addEventListener("tick",this._moveBall);
		this.paused==false;
		this.running=true;
	}
	
	function pauseClicked(e){
		this.paused==true;
		this.layout.stepper1.disable();
		this.layout.stepper2.disable();
		
		this.layout.pauseButton.visible = false;
		this.layout.playButton.enable().visible = true;
		createjs.Ticker.removeEventListener("tick",this._moveBall);
	}

	return Activity;
})();