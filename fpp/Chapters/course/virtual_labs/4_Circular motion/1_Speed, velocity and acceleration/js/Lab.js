var Lab = (function(){
var scope = this;

	function Activity(){
		createjs.Container.call(this);
		this.car1 = new control();
		this.car2 = new control();
		
		this.won=false;
		this.cars={
			"redCar":{
				name:"redCar",
				x:90,
				y:390,
				maxAcceleration:29.5,
				maxVelocity:0,
				velocity:0,
				velocityX:0,
				velocityY:0,
				accelerationX:0,
				accelerationY:0,
				accelerating:false,
				displacementX:90,
				displacementY:390,
				movingStraight:true,
				angle:0,
				position:0,
				finalVelocity:0,
				centripetalAcc:0,
				startConditions:false,
				animation:"redCarAnimation",
				acclPatch:334,
				reached:false,
			},
			"purpleCar":{
				name:"purpleCar",
				x:90,
				y:418,
				maxAcceleration:29.5,
				maxVelocity:20,
				velocity:0,
				velocityX:0,
				velocityY:0,
				accelerationX:0,
				accelerationY:0,
				accelerating:false,
				displacementX:90,
				displacementY:418,
				movingStraight:true,
				angle:0,
				position:0,
				finalVelocity:20,
				centripetalAcc:0,
				startConditions:false,
				animation:"purpleCarAnimation",
				acclPatch:334,
				reached:false,
			}
		};
		
		this.init=false;
		this.running=false;
		this.centripetalAcc =0;
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		var scope = this;
		
		this._reset = this.reset.bind(this);
		this._play = play.bind(this);
		this._pause = pause.bind(this);
		this._keydown=keydown.bind(this);
		this._keyup=keyup.bind(this);
		
		this.layout.line4.graphics.setStrokeStyle(2).beginStroke("black").moveTo(0,0).lineTo(0,37).endStroke();
		
		scope.layout.needle1.snapToPixel = false;
		scope.layout.needle2.snapToPixel = false;
		this.layout.resetButton.addEventListener("click", this._reset);
		this.layout.playButton.addEventListener("click", this._play);
		this.layout.pauseButton.addEventListener("click", this._pause);
		this.layout.stepper.addEventListener("valueChange", function(e){
			scope.layout.speed.text = e.currentTarget.value.toFixed(1);			
			
			scope.cars.redCar.maxVelocity=e.currentTarget.value;
			
		});
		
		this.reset();
		
		this.layout.redCar.snapToPixel = false;
		this.layout.purpleCar.snapToPixel = false;
	}
	
	function keydown(e){
		if(e.keyCode==38){
			this.layout.stepper.handleEvent({type:"mousedown",currentTarget:this.layout.stepper._inc})
		}
		else if(e.keyCode==40){
			this.layout.stepper.handleEvent({type:"mousedown",currentTarget:this.layout.stepper._dec})
		}		
	}
	
	function keyup(e){
		this.layout.stepper.handleEvent({});
	}
	
	Activity.prototype.reset = function()
	{	
		document.removeEventListener("keydown",this._keydown);
		document.removeEventListener("keyup",this._keyup);
		this._keyup();
		
		this.layout.line2.graphics.clear();
		this.layout.xVelocity.text="0.0";
		this.car1.reset();
		var scope = this;
		this.won=false;
		this.init=false;
		this.car1._pause();
		this.car2._pause();
		for(var name in this.cars){
			this.cars[name].velocity=0;
			this.cars[name].accelerationX=0;
			this.cars[name].accelerating=false;
			this.cars[name].movingStraight=true;
			this.cars[name].position=0;
		}
		
		control.running=false;
		
		this.layout.redCar.x=this.cars.redCar.x;
		this.layout.redCar.y=this.cars.redCar.y;
		this.layout.redCar.visible=true;
		this.layout.speedometer1.value=0;
		this.layout.speedometer2.value=0;
		
		this.layout.purpleCar.x=this.cars.purpleCar.x;
		this.layout.purpleCar.y=this.cars.purpleCar.y;
		
		scope.layout.redCarAnimation.visible = false;
		scope.layout.purpleCarAnimation.visible = false;
		
		scope.layout.stepper.enable();
		
		scope.layout.resetButton.enable();
		scope.layout.playButton.enable().visible=true;
		scope.layout.pauseButton.disable().visible=false;
		
		document.addEventListener("keydown",this._keydown);
		document.addEventListener("keyup",this._keyup);
	}
		
	function play(){
		if(!this.init){
			var c1=this.cars.redCar;
			var c2=this.cars.purpleCar;
			this.cars.redCar.finalVelocity = this.cars.redCar.maxVelocity ;
			this.car1._initialize(c1.name,c1.maxAcceleration,c1.maxVelocity,c1.velocity,c1.finalVelocity,c1.velocityX,c1.displacementX,c1.displacementY,c1.angle,c1.animation,c1.acclPatch);
			this.car2._initialize(c2.name,c2.maxAcceleration,c2.maxVelocity,c2.velocity,c2.finalVelocity,c2.velocityX,c2.displacementX,c2.displacementY,c2.angle,c2.animation,c2.acclPatch);
			this.init=true;
			
		}
		
		this.layout.stepper.disable();
		document.removeEventListener("keydown",this._keydown);
		document.removeEventListener("keyup",this._keyup);
		this._keyup();
		
		this.car2._play();
		this.car1._play();
		this.layout.playButton.disable().visible = false;
		this.layout.pauseButton.enable().visible = true;
		this.layout.resetButton.enable();
	}
	function pause(){
		this.layout.pauseButton.disable().visible = false;
		this.layout.playButton.enable().visible = true;
		this.car1._pause();
		this.car2._pause();
	}
	
	return Activity;
})();

//=========================================================================================================================================



var control=(function(){
	var timeStep =0.18;
	this.diffTime=0;
	this.time=0;
	this.turnStartTime=0;
	this._initialize=initialize.bind(this);
	this._updateState=updateState.bind(this);
	this._play=play.bind(this);
	this._pause=pause.bind(this);
	this.reset=reset.bind(this);
	this._startConditions=startConditions.bind(this);
	this.running=false;
	this.crash=false;
	this.TOTALPATHS=2;
	this.flag=false;
	
	function initialize(name,maxAcceleration,maxVelocity,velocity,finalVelocity,velocityX,displacementX,displacementY,angle,animation,acclPatch){
		
		this.name=name;
		this.maxAcceleration=maxAcceleration;
		this.maxVelocity=maxVelocity;
		this.velocity=velocity;
		this.finalVelocity=finalVelocity;
		this.velocityX=velocityX;
		this.velocityY=0;
		this.accelerationX=0;
		this.accelerationY=0;
		this.accelerating=false;
		this.displacementX=displacementX;
		this.displacementY=displacementY;
		this.movingStraight=true;
		this.angle=angle;
		this.position=0;
		this.radius=0;
		this.centripetalAcc=0;
		this.startCondition=false;
		this.animation=animation;
		this.acclPatch=acclPatch;
		
	}
	
	function play(){
		this.running=true;
		Ticker.add({
				fps:60,
				callback:this._updateState,
		});
	}
	
	function pause(){
		this.running=false;
		Ticker.remove(this._updateState);
	}
	
	function reset(){
		lab.cars["redCar"].reached=false;
		lab.cars["purpleCar"].reached=false;
		this.running=false;
		this.flag=false;
		this.diffTime=0;
		this.time=0;
		this.turnStartTime=0;
	}

	function updateState(){
		var scope=this;
		this.time=this.time+timeStep;
		if(this.displacementX > 919){
			if(this.name=="redCar"){
				lab._pause();
				lab.cars[this.name].reached=true;
				lab.cars["purpleCar"].reached=true;
			}
			else{
				this._pause();
				lab.cars[this.name].reached=true;
			}
			if(lab.cars.redCar.reached && lab.cars.purpleCar.reached){
				lab.layout.playButton.disable();
				lab.layout.pauseButton.disable();
			}
			lab.layout[this.name].x=920;
			if(lab.won==false){
				lab.won=true;
				lab.layout[this.animation].visible=true;
				lab.layout[this.animation].uncache();
				lab.layout[this.animation].addEventListener("end", function(){
						lab.layout[scope.animation].removeAllEventListeners("end");
						lab.layout[scope.animation].cache(0,0,1000,1000);
						return;
				});
				lab.layout[this.animation].gotoAndPlay(0);
				lab.layout[this.animation].loop=false;
			}
			return;
		}
		if(this.running){
			if(!this.startCondition){
				this._startConditions();
			}
			if(this.movingStraight == true){
				if(this.velocityX < this.finalVelocity)
				{
					this.velocityX =this.velocityX +(this.accelerationX *timeStep * 0.1);
				}
				else{
					this.velocityX=this.finalVelocity;
					this.accelerationX=0;
				}
				
				if(this.accelerating && this.velocityX >= this.maxVelocity){
					this.accelerating=false;
				}
				if(this.name=="redCar"){
					lab.layout.speedometer2.value = this.accelerationX;
				}
				this.displacementX =this.displacementX + this.velocityX * timeStep;
				lab.layout[this.name].x=this.displacementX;
				this.velocity = Math.sqrt(this.velocityX * this.velocityX + this.velocityY * this.velocityY);
				this.centripetalAcc =0;
				if(this.name=="redCar"){
					lab.layout.speedometer1.value = this.velocity;
					lab.layout.xVelocity.text=this.velocityX.toFixed(1);
				}
			}
		}
		if(this.name=="redCar"){
			
			lab.layout.line2.graphics.clear().setStrokeStyle(35).beginStroke("red").moveTo(0,0).lineTo(this.velocityX,0).endStroke();
		}
	}
	
	function startConditions(){
		if(this.finalVelocity != 0){ 
			this.velocityX = 0;		
    		this.accelerationX = (0.5 * (this.finalVelocity * this.finalVelocity)/22);
			if(this.name=="redCar"){
					lab.layout.speedometer2.value = this.accelerationX;
			}
    		this.accelerating = true;
    	}
    	this.startCondition = true;
	}
});


