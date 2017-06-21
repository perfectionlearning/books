var Lab = (function(){
var scope = this;

	function Activity(){
		createjs.Container.call(this);
		this.car1 = new control();
		this.car2 = new control();
		
		
		this.Track1 = [
			{
			"center":{"x":711,"y":429},
			"radius":13.97,
			},
		]
		this.Track2 = [
			{
				"center":{"x":711,"y":429},
				"radius":13.97,
			},
		]
		this.won=false;
		this.cars={
			"redCar":{
				name:"redCar",
				x:147,
				y:288,
				maxAcceleration:29.45,
				maxVelocity:0,
				velocity:0,
				velocityX:0,
				velocityY:0,
				accelerationX:0,
				accelerationY:0,
				accelerating:false,
				displacementX:147,
				displacementY:288,
				movingStraight:true,
				angle:0,
				position:0,
				finalVelocity:0,
				centripetalAcc:0,
				startConditions:false,
				animation:"redCarAnimation",
				acclPatch:387,
				reached:false,
			},
			"purpleCar":{
				name:"purpleCar",
				x:56,
				y:317,
				maxAcceleration:29.5,
				maxVelocity:15.5,
				velocity:0,
				velocityX:0,
				velocityY:0,
				accelerationX:0,
				accelerationY:0,
				accelerating:false,
				displacementX:56,
				displacementY:317,
				movingStraight:true,
				angle:0,
				position:0,
				finalVelocity:15.5,
				centripetalAcc:0,
				startConditions:false,
				animation:"purpleCarAnimation",
				acclPatch:296,
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
		
		this.arrowline=this.layout.arrowline;
		this.arrow=this.layout.arrow2;
		
		this.vector = new VectorLine(this.arrow,{x:this.layout.redCar.regX,y:this.layout.redCar.regY}, {min:0,max:120}, {min:0, max:360},this.arrowline, {color:"#994B2C"});
		this.vector.unit = 8;
		this.vector.magnitude=0;
		this.vector.angle=0;
		this.layout.redCar._line=this.arrowline;
		this.layout.redCar._arrow=this.arrow;
		
		this._reset = this.reset.bind(this);
		this._play = play.bind(this);
		this._pause = pause.bind(this);
		this._keydown=keydown.bind(this);
		this._keyup=keyup.bind(this);
		
		this.layout.line3.graphics.setStrokeStyle(2).beginStroke("black").moveTo(0,0).lineTo(44,0).endStroke();
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
	{	this.vector.visible=false;
		document.removeEventListener("keydown",this._keydown);
		document.removeEventListener("keyup",this._keyup);
		this._keyup();
		
		this.layout.redCar._line.visible = false;
		this.layout.redCar._arrow.visible = false;
		this.layout.line1.graphics.clear();
		this.layout.line2.graphics.clear();
		this.layout.xVelocity.text="0.0";
		this.layout.yVelocity.text="0.0";
		this.car1.reset();
		var scope = this;
		this.won=false;
		this.init=false;
		this.car1._pause();
		this.car2._pause();
		for(var name in this.cars){
			this.cars[name].velocity=0;
			this.cars[name].velocityY=0;
			this.cars[name].accelerationX=0;
			this.cars[name].accelerationY=0;
			this.cars[name].accelerating=false;
			this.cars[name].movingStraight=true;
			this.cars[name].position=0;
			this.cars[name].centripetalAcc=0;
		}
		
		this.layout.redCrash.visible=false;
		control.running=false;
		
		this.layout.redCar.x=this.cars.redCar.x;
		this.layout.redCar.y=this.cars.redCar.y;
		this.layout.redCar.rotation=0;
		this.layout.redCar.visible=true;
		
		this.layout.speedometer1.value=0;
		this.layout.speedometer2.value=0;
		
		this.layout.purpleCar.x=this.cars.purpleCar.x;
		this.layout.purpleCar.y=this.cars.purpleCar.y;
		this.layout.purpleCar.rotation=0,
		
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
			c1.track=this.Track1;
			c2.track=this.Track2;
			this.cars.redCar.finalVelocity = this.cars.redCar.maxVelocity ;
			this.car1._initialize(c1.name,c1.maxAcceleration,c1.maxVelocity,c1.velocity,c1.finalVelocity,c1.velocityX,c1.displacementX,c1.displacementY,c1.angle,c1.track,c1.animation,c1.acclPatch);
			this.car2._initialize(c2.name,c2.maxAcceleration,c2.maxVelocity,c2.velocity,c2.finalVelocity,c2.velocityX,c2.displacementX,c2.displacementY,c2.angle,c2.track,c2.animation,c2.acclPatch);
			this.init=true;
			
		}
		
		this.layout.stepper.disable();
		document.removeEventListener("keydown",this._keydown);
		document.removeEventListener("keyup",this._keyup);
		this._keyup();
		
		this.car2._play();
		if(!this.cars.redCar.reached){
			this.car1._play();
			this.layout.redCar._line.visible = true;
			this.layout.redCar._arrow.visible = true;
		}
		
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
	var timeStep =0.16;
	this.diffTime=0;
	this.time=0;
	this.turnStartTime=0;
	this._initialize=initialize.bind(this);
	this._updateState=updateState.bind(this);
	this._play=play.bind(this);
	this._checkSpeed=checkSpeed.bind(this);
	this._crash=crash.bind(this);
	this._pause=pause.bind(this);
	this.reset=reset.bind(this);
	this._startConditions=startConditions.bind(this);
	this.running=false;
	this.crash=false;
	this.TOTALPATHS=2;
	this.flag=false;
	
	function initialize(name,maxAcceleration,maxVelocity,velocity,finalVelocity,velocityX,displacementX,displacementY,angle,track,animation,acclPatch){
		
		this.name=name;
		this.maxAcceleration=maxAcceleration;
		this.maxVelocity=maxVelocity;
		this.velocity=velocity;
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
		this.finalVelocity=finalVelocity;
		this.centripetalAcc=0;
		this.startCondition=false;
		this.track=track;
		this.animation=animation;
		this.acclPatch=acclPatch;
		
	}
	
	function play(){
			if(this.name=="redCar"){
				lab.vector._baseVector.x=this.displacementX;
				lab.vector._baseVector.y=this.displacementY;
				lab.vector.angle=0;
				lab.vector.magnitude=0;
			}
			this.running=true;
			
			createjs.Ticker.addEventListener("tick",this._updateState);
	}
	
	function pause(){
		this.running=false;
		createjs.Ticker.removeEventListener("tick",this._updateState);
	}
	
	function reset(){
		lab.cars["redCar"].reached=false;
		lab.cars["purpleCar"].reached=false;
		this.running=false;
		this.crash=false;
		this.flag=false;
		this.diffTime=0;
		this.time=0;
		this.turnStartTime=0;
	}

	function updateState(){
		for(var i=0;i<2;i++){
		var scope=this;
		if(this.name=="redCar" && lab.cars.redCar.reached==false){
			lab.vector._baseVector.x=this.displacementX;
			lab.vector._baseVector.y=this.displacementY;
			lab.vector.magnitude=this.velocity;
			lab.vector.angle=this.angle;
			lab.layout.xVelocity.text=this.velocityX.toFixed(1);
			this.temp=-this.velocityY;
			lab.layout.yVelocity.text=this.temp.toFixed(1);
			lab.layout.line2.graphics.clear().setStrokeStyle(35).beginStroke("red").moveTo(0,0).lineTo(this.velocityX,0).endStroke();
			lab.layout.line1.graphics.clear().setStrokeStyle(42).beginStroke("red").moveTo(0,0).lineTo(0,this.velocityY).endStroke();
			lab.layout.speedometer1.value = this.velocity;
		}
		this.time=this.time+timeStep;
		if(this.angle>160 && this.displacementX<725){
			if(this.name=="redCar"){
				lab._pause();
				lab.cars[this.name].reached=true;
				lab.cars["purpleCar"].reached=true;
			}
			else{
				this._pause();
				lab.cars[this.name].reached=true;
			}
			lab.layout[this.name].x=724;
			if(lab.cars.redCar.reached && lab.cars.purpleCar.reached){
				lab.layout.playButton.visible=false;
				lab.layout.pauseButton.disable().visible=true;
			}
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
				lab.layout.yVelocity.text="0.0";
				if(this.velocityX < this.finalVelocity)
				{
					this.velocityX =this.velocityX +(this.accelerationX *timeStep * 0.1);
				}
				else{
					this.velocityX=this.finalVelocity;
					this.accelerationX=0;
				}
				
				if(this.crash){
					return false;
				}
				if(this.accelerating && this.velocityX >= this.maxVelocity){
					this.accelerating=false;
				}
				if(this.name=="redCar"){
					lab.layout.speedometer2.value = this.accelerationX;
				}
				this.displacementX =this.displacementX + this.velocityX * timeStep;
				lab.layout[this.name].x=this.displacementX;
				
				if(this.flag==true){
					this.displacementY =this.displacementY + this.velocityY * timeStep;
					lab.layout[this.name].y=this.displacementY;
				}
				
				if(this.name=="redCar" && this.flag==true){
					if(lab.layout.redCar.x > 905){ 
						lab.layout.redCrash.rotation = lab.layout.redCar.rotation;
						lab.layout.redCrash.x = lab.layout.redCar.x-7;
						lab.layout.redCrash.y = lab.layout.redCar.y-15;
						lab.layout.redCrash.visible=true;
						lab.layout.redCar.visible=false;
						lab.layout.redCrash.uncache();
						lab.layout.redCrash.addEventListener("end", function(){
							lab.layout.redCrash.removeAllEventListeners("end");
							lab.layout.redCrash.cache(0,0,50,30);
							return;
						});
						lab.layout.redCrash.gotoAndPlay(0);
						lab.layout.redCrash.loop=false;
						lab.layout.redCar._line.visible = false;
						lab.layout.redCar._arrow.visible = false;
						lab.layout.line1.graphics.clear();
						lab.layout.line2.graphics.clear();
						lab.layout.xVelocity.text="0.0";
						lab.layout.yVelocity.text="0.0";
						lab.layout.speedometer1.value=0;
						lab.layout.speedometer2.value=0;
						lab.car1._pause();
						lab.cars["redCar"].reached=true;
						lab.vector.visible=false;
						return;
					}
				}
				
				this.velocity = Math.sqrt(this.velocityX * this.velocityX + this.velocityY * this.velocityY);
				this.centripetalAcc =0;
				
				if(!this.flag){
				if(this.position < this.TOTALPATHS){
					if(this.velocityX > 0){
						if(this.displacementX >= this.track[this.position].center.x){ //need to start turn
							this.movingStraight = false;
							this.radius = Math.abs(this.displacementY - this.track[this.position].center.y);
							this.velocity = this.velocity;
							this.turnStartTime=this.time;
							this.accelerationX = 0;
							this.init_rotation = this.angle;
						}
					}
					else if(this.velocityX < 0){
						if(this.displacementX <= this.track[this.position].center.x){
							this.movingStraight = false;
							this.radius = Math.abs(this.displacementY - this.track[this.position].center.y);
							this.velocity = -(this.velocity);
							this.turnStartTime=this.time;
							this.accelerationX = 0;
							this.init_rotation = this.angle;
						}
					}
				}
				}
			}
			else {
				
				this.diffTime=(this.time - this.turnStartTime);
				this.angle = ((1 * this.diffTime)/ (2 * Math.PI * this.radius/this.velocity) * 360) + this.init_rotation;
				this.centripetalAcc = Math.abs( this.velocity * this.velocity/this.track[this.position].radius);
				if(this.name=="redCar"){
				lab.layout.speedometer2.value=this.centripetalAcc;
				}
				this.velocityX = (Math.abs(this.velocity) * Math.cos(this.angle * Math.PI/180));
				this.velocityY = (Math.abs(this.velocity) * Math.sin(this.angle * Math.PI/180));
				this.displacementX =(this.radius * Math.sin(this.diffTime * this.velocity/this.radius) + this.track[this.position].center.x);
				this.displacementY =(-this.radius * Math.cos(this.diffTime * this.velocity/this.radius) + this.track[this.position].center.y);
				lab.layout[this.name].rotation=this.angle;
				lab.layout[this.name].x=this.displacementX;
				lab.layout[this.name].y=this.displacementY;
				//this.init_rotation = this._rotation;
				if(this._checkSpeed.call()){
					if(Math.abs(this.angle - this.init_rotation) >= 35){
						this.flag=true;
						this._crash();
					}
				}
				
				if(this.velocity > 0){
	        		if(this.displacementX <= this.track[this.position].center.x){
	        			this.movingStraight = true;
	        		}
	        	}
	        	else{
	        		if(this.displacementX >= this.track[this.position].center.x){
	        			this.movingStraight = true;
	        		}
	        	}
	        	if(this.movingStraight){
        			this.position++;
        		}
			}
		}
	}
	}
	
	function checkSpeed(){
		if(this.maxAcceleration != 0){
			if(this.centripetalAcc > this.maxAcceleration){
				return true;
			}
			else{
				return false;
			}
		}
	}
	
	function crash(){
		this.centripetalAcc=0;
		this.crashed=true;
		this.accelerationX=0;
		this.velocityX=Math.abs(this.velocity) * Math.cos(this.angle * Math.PI/180);
		this.velocityY=Math.abs(this.velocity) * Math.sin(this.angle * Math.PI/180);
		this.movingStraight = true;	
	}
	
	function startConditions(){
		if(this.finalVelocity != 0){ 
			this.velocityX = 0;		
    		this.accelerationX = (0.5 * (this.finalVelocity * this.finalVelocity)/24);
			if(this.name=="redCar"){
					lab.layout.speedometer2.value = this.accelerationX;
			}
    		this.accelerating = true;
    	}
    	// else if(this.redVelocityX == 0 && this.redVelocityY ==0){ //figure out the acceleration in order to get to the right speed.
    		// var dist = this.redPatchEnd - this.redDisplacementX;
    		// this.accelerationX = (this.redVelocity * this.redVelocity)/(2*dist);
			// if(this.name=="redCar"){
					// lab.layout.speedometer2.value = this.accelerationX;
			// }
		// }
    	this.startCondition = true;
	}
});


