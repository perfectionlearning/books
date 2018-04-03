var Lab = (function(){
var scope = this;
var direction = 0;
	function Activity(){
		createjs.Container.call(this);
		this.engine = new control();
		this.coach1 = new control();
		this.coach2 = new control();
		
		this.Track1 = [
			{
				"center":{"x":672,"y":335},
				"radius":2000,
			},{
				"center":{"x":286,"y":576.25},
				"radius":1000,
			},
		]
		
		this.train={
			"engine":{
				name:"engine",
				x:243,
				y:190,
				maxAcceleration:4.8,
				maxVelocity:0,
				velocity:0,
				velocityX:0,
				velocityY:0,
				accelerationX:0,
				accelerationY:0,
				accelerating:false,
				displacementX:243,
				displacementY:190,
				movingStraight:true,
				angle:0,
				position:0,
				finalVelocity:0,
				centripetalAcc:0,
				startConditions:false,
				animation:"redCarAnimation",
				reached:false,
			},
			"coach1":{
				name:"coach1",
				x:155,
				y:190,
				maxAcceleration:4.8,
				maxVelocity:0,
				velocity:0,
				velocityX:0,
				velocityY:0,
				accelerationX:0,
				accelerationY:0,
				accelerating:false,
				displacementX:155,
				displacementY:190,
				movingStraight:true,
				angle:0,
				position:0,
				finalVelocity:0,
				centripetalAcc:0,
				startConditions:false,
				animation:"purpleCarAnimation",
				reached:false,
			},
			"coach2":{
				name:"coach2",
				x:78,
				y:190,
				maxAcceleration:4.8,
				maxVelocity:0,
				velocity:0,
				velocityX:0,
				velocityY:0,
				accelerationX:0,
				accelerationY:0,
				accelerating:false,
				displacementX:78,
				displacementY:190,
				movingStraight:true,
				angle:0,
				position:0,
				finalVelocity:0,
				centripetalAcc:0,
				startConditions:false,
				animation:"purpleCarAnimation",
				reached:false,
			}
		};
		this.won=false;
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
		
		this.layout.line3.graphics.setStrokeStyle(2).beginStroke("black").moveTo(0,0).lineTo(45,0).endStroke();
		this.layout.line4.graphics.setStrokeStyle(2).beginStroke("black").moveTo(0,0).lineTo(0,37).endStroke();
		
		scope.layout.needle1.snapToPixel = false;
		scope.layout.needle2.snapToPixel = false;
		this.layout.resetButton.addEventListener("click", this._reset);
		this.layout.playButton.addEventListener("click", this._play);
		this.layout.pauseButton.addEventListener("click", this._pause);
		this.layout.stepper.addEventListener("valueChange", function(e){
			scope.layout.speed.text = e.currentTarget.value.toFixed(1);			
			
			scope.train.engine.maxVelocity=(e.currentTarget.value)/10;
			scope.train.coach1.maxVelocity=(e.currentTarget.value)/10;
			scope.train.coach2.maxVelocity=(e.currentTarget.value)/10;
			
		});
		
		this.layout.engine.snapToPixel = false;
		this.layout.coach1.snapToPixel = false;
		this.layout.coach2.snapToPixel = false;
		
		this.reset();
		
		// this.layout.engine.snapToPixel = false;
		// this.layout.coach1.snapToPixel = false;
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
		
		// lab.layout.engine.visible = true; 
		// lab.layout.coach1.visible = true; 
		// lab.layout.coach2.visible = true; 
		
		// lab.layout.engine_crash.visible=false;
		// lab.layout.coach1_crash.visible=false;
		// lab.layout.coach2_crash.visible=false;
		direction = 0;
		this.layout.line1.graphics.clear();
		this.layout.line2.graphics.clear();
		this.layout.xVelocity.text="0.0";
		this.layout.yVelocity.text="0.0";
		this.engine.reset();
		this.coach1.reset();
		this.coach2.reset();
		var scope = this;
		this.won=false;
		this.init=false;
		this.engine._pause();
		this.coach1._pause();
		this.coach2._pause();
		for(var name in this.train){
			this.train[name].velocity=0;
			this.train[name].velocityY=0;
			this.train[name].accelerationX=0;
			this.train[name].accelerationY=0;
			this.train[name].accelerating=false;
			this.train[name].movingStraight=true;
			this.train[name].position=0;
			this.train[name].centripetalAcc=0;
		}
		
		// this.layout.redCrash.visible=false;
		// control.running=false;
		
		this.layout.engine.x=this.train.engine.x;
		this.layout.engine.y=this.train.engine.y;
		this.layout.engine.rotation=0;
		this.layout.engine.visible=true;
		lab.layout.engine.gotoAndStop(0);
		
		this.layout.coach1.x=this.train.coach1.x;
		this.layout.coach1.y=this.train.coach1.y;
		this.layout.coach1.rotation=0;
		this.layout.coach1.visible=true;
		lab.layout.coach1.gotoAndStop(0);
		
		this.layout.coach2.x=this.train.coach2.x;
		this.layout.coach2.y=this.train.coach2.y;
		this.layout.coach2.rotation=0;
		this.layout.coach2.visible=true;
		lab.layout.coach2.gotoAndStop(0);
		
		this.layout.speedometer1.value=0;
		this.layout.speedometer2.value=0;
		
		scope.layout.stepper.enable();
		
		scope.layout.resetButton.enable();
		
		scope.layout.playButton.enable().visible=true;
		scope.layout.pauseButton.disable().visible=false;
		
		document.addEventListener("keydown",this._keydown);
		document.addEventListener("keyup",this._keyup);
	}

	function play(){
		if(!this.init){
			var t1=this.train.engine;
			var t2=this.train.coach1;
			var t3=this.train.coach2;
			
			t1.track=this.Track1;
			t2.track=this.Track1;
			t3.track=this.Track1;
			
			this.train.engine.finalVelocity = this.train.engine.maxVelocity ;
			this.train.coach1.finalVelocity = this.train.coach1.maxVelocity ;
			this.train.coach2.finalVelocity = this.train.coach2.maxVelocity ;
			
			this.engine._initialize(t1.name,t1.maxAcceleration,t1.maxVelocity,t1.velocity,t1.finalVelocity,t1.velocityX,t1.displacementX,t1.displacementY,t1.angle,t1.track,t1.animation);
			this.coach1._initialize(t2.name,t2.maxAcceleration,t2.maxVelocity,t2.velocity,t2.finalVelocity,t2.velocityX,t2.displacementX,t2.displacementY,t2.angle,t2.track,t2.animation);
			this.coach2._initialize(t3.name,t3.maxAcceleration,t3.maxVelocity,t3.velocity,t3.finalVelocity,t3.velocityX,t3.displacementX,t3.displacementY,t3.angle,t3.track,t3.animation);
			this.init=true;
			
		}
		this.layout.stepper.disable();
		document.removeEventListener("keydown",this._keydown);
		document.removeEventListener("keyup",this._keyup);
		this._keyup();
		
		if(!this.train.coach2.reached){
			this.engine._play();
			this.coach1._play();
			this.coach2._play();
		}
		
		this.layout.playButton.disable().visible = false;
		this.layout.pauseButton.enable().visible = true;
		this.layout.resetButton.enable();
	}
	function pause(){
		this.layout.pauseButton.disable().visible = false;
		this.layout.playButton.enable().visible = true;
		this.engine._pause();
		this.coach1._pause();
		this.coach2._pause();
	}
	
	return Activity;
})();

//=========================================================================================================================================



var control=(function(){
	var timeStep =0.2;
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
	this.redPatchEnd=671;
	this.flag=false;
	
	function initialize(name,maxAcceleration,maxVelocity,velocity,finalVelocity,velocityX,displacementX,displacementY,angle,track,animation){
		
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
		
		// createjs.Ticker.addEventListener("tick", this._updateState);
	}
	
	function play(){
		this.running=true;
		createjs.Ticker.addEventListener("tick", this._updateState);
	}
	
	function pause(){
		this.running=false;
		createjs.Ticker.removeEventListener("tick", this._updateState);
	}
	
	function reset(){
		lab.train["engine"].reached=false;
		lab.train["coach1"].reached=false;
		lab.train["coach2"].reached=false;
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
		if(this.name=="engine"){
			lab.layout.speedometer1.value = Math.abs(this.velocity * 10);
			lab.layout.xVelocity.text=(this.velocityX * 10).toFixed(1);
			this.temp=-(this.velocityY);
			lab.layout.yVelocity.text=(this.temp * 10).toFixed(1);
			lab.layout.line2.graphics.clear().setStrokeStyle(34).beginStroke("red").moveTo(0,0).lineTo((this.velocityX * 1.6),0).endStroke();
			lab.layout.line1.graphics.clear().setStrokeStyle(42).beginStroke("red").moveTo(0,0).lineTo(0,(this.velocityY * 1.6)).endStroke();
		}
		this.time=this.time+timeStep;
		if(this.position>1 && this.displacementX>700){
			if(this.name=="coach2"){
				lab._pause();
				lab.train[this.name].reached=true;
				lab.train["coach1"].reached=true;
				lab.train["engine"].reached=true;
				lab.layout.playButton.disable().visible=false;
				lab.layout.pauseButton.disable().visible=true;
			}
			
			lab.layout.yVelocity.text="0.0";
				
			// if(lab.won==false){
				// lab.won=true;
				// lab.layout[this.animation].visible=true;
				// lab.layout[this.animation].uncache();
				// lab.layout[this.animation].addEventListener("end", function(){
						// lab.layout[scope.animation].removeAllEventListeners("end");
						// lab.layout[scope.animation].cache(-200,-200,1000,1000);
						// return;
				// });
				// lab.layout[this.animation].gotoAndPlay(0);
				// lab.layout[this.animation].loop=false;
			// }
			// return;
		}
		if(this.running){
			if(!this.startCondition){
				this._startConditions();
			}
			if(this.movingStraight == true){
				
				if(this.velocityX < this.finalVelocity)
				{
					this.velocityX =this.velocityX + (this.accelerationX *timeStep * 0.1);
				}
				else{
					this.velocityX=this.finalVelocity;
				}
				
				if(this.crash){
					return false;
				}
				if(this.accelerating && this.velocityX >= this.maxVelocity){
					this.accelerating=false;
				}
				if(this.name=="engine"){
					lab.layout.speedometer2.value = this.accelerationX * 10;
				}
				this.displacementX =this.displacementX + this.velocityX * timeStep;
				lab.layout[this.name].x=this.displacementX;
				
				if(this.flag==true){
					this.displacementY =this.displacementY + this.velocityY * timeStep;
					lab.layout[this.name].y=this.displacementY;
				}
				
				//Crash detection
				if(this.name=="engine" && this.flag==true){
					console.log(this.velocity);
					// if(lab.layout.engine.x > 863){ 
						// lab.layout.redCrash.rotation = lab.layout.engine.rotation - 70;
						// lab.layout.redCrash.x = lab.layout.engine.x;
						// lab.layout.redCrash.y = lab.layout.engine.y;
						// lab.layout.redCrash.visible=true;
						// lab.layout.engine.visible=false;
						// lab.layout.redCrash.uncache();
						// lab.layout.redCrash.addEventListener("end", function(){
							// lab.layout.redCrash.removeAllEventListeners("end");
							// lab.layout.redCrash.cache(0,0,50,30);
							// return;
						// });
						// lab.layout.redCrash.gotoAndPlay(0);
						// lab.layout.redCrash.loop=false;
						// lab.engine._pause();
						// lab.layout.line1.graphics.clear();
						// lab.layout.line2.graphics.clear();
						// lab.layout.xVelocity.text="0.0";
						// lab.layout.yVelocity.text="0.0";
						// lab.layout.speedometer1.value=0;
						// lab.layout.speedometer2.value=0;
						// lab.train["engine"].reached=true;
					// }
					// else if(lab.layout.engine.x < 134){
						// lab.layout.redCrash.rotation = lab.layout.engine.rotation + 70;
						// lab.layout.redCrash.x = lab.layout.engine.x;
						// lab.layout.redCrash.y = lab.layout.engine.y;
						// lab.layout.redCrash.visible=true;
						// lab.layout.engine.visible=false;
						// lab.layout.redCrash.uncache();
						// lab.layout.redCrash.addEventListener("end", function(){
							// lab.layout.redCrash.removeAllEventListeners("end");
							// lab.layout.redCrash.cache(0,0,50,30);
							// return;
						// });
						// lab.layout.redCrash.gotoAndPlay(0);
						// lab.layout.redCrash.loop=false;
						// lab.engine._pause();
						// lab.layout.line1.graphics.clear();
						// lab.layout.line2.graphics.clear();
						// lab.layout.xVelocity.text="0.0";
						// lab.layout.yVelocity.text="0.0";
						// lab.layout.speedometer1.value=0;
						// lab.layout.speedometer2.value=0;
						// lab.train["engine"].reached=true;
					// }
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
				this.centripetalAcc = Math.abs( this.velocity * this.velocity * 100/ this.track[this.position].radius);
				if(this.name=="engine"){
				lab.layout.speedometer2.value=(this.centripetalAcc);
				}
				this.velocityX = (Math.abs(this.velocity) * Math.cos(this.angle * Math.PI/180));
				this.velocityY = (Math.abs(this.velocity) * Math.sin(this.angle * Math.PI/180));
				this.displacementX =(this.radius * Math.sin(this.diffTime * this.velocity/this.radius) + this.track[this.position].center.x);
				this.displacementY =(-this.radius * Math.cos(this.diffTime * this.velocity/this.radius) + this.track[this.position].center.y);
				lab.layout[this.name].rotation=this.angle;
				lab.layout[this.name].x=this.displacementX;
				lab.layout[this.name].y=this.displacementY;
				//this.init_rotation = this._rotation;
				if(this.name=="engine"){
					if(this._checkSpeed.call()){
						if(Math.abs(this.angle - this.init_rotation) >= 60){
							this.flag=true;
							this._crash();
						}
					}
				}
				
				if(this.velocity > 0){
					direction = 0;
	        		if(this.displacementX <= this.track[this.position].center.x){
						this.velocityY=0;
	        			this.movingStraight = true;
	        		}
	        	}
	        	else{
					direction = 1;
	        		if(this.displacementX >= this.track[this.position].center.x){
						this.velocityY=0;
	        			this.movingStraight = true;
	        		}
	        	}
	        	if(this.movingStraight){
        			this.position++;
        		}
			}
		}
		}}
	
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
		lab.layout.pauseButton.disable();
		lab.layout.playButton.disable();
		this.centripetalAcc=0;
		this.crashed=true;
		this.accelerationX=0;
		this.velocityX=Math.abs(this.velocity) * Math.cos(this.angle * Math.PI/180);
		this.velocityY=Math.abs(this.velocity) * Math.sin(this.angle * Math.PI/180);
		this.movingStraight = true;	
		
		// lab.layout.coach2.addEventListener("end",function(){
			// console.log(1);
			// lab.layout.engine.gotoAndPlay(0);
			// lab.layout.engine.loop=false;
			// lab.layout.coach1.gotoAndPlay(0);
			// lab.layout.coach1.loop=false;
			// lab.layout.coach2.gotoAndPlay(0);
			// lab.layout.coach2.loop=false;
		// });
		if(direction == 0){
			createjs.Tween.get(lab.layout.engine, {override:true}).to({x:(lab.layout.engine.x+13),y:(lab.layout.engine.y + 13)}, 150, createjs.Ease.linear);
			createjs.Tween.get(lab.layout.coach1, {override:true}).to({rotation:(lab.layout.coach1.rotation + 10),x:(lab.layout.coach1.x+28),y:(lab.layout.coach1.y + 15)}, 150, createjs.Ease.linear);
			createjs.Tween.get(lab.layout.coach2, {override:true}).to({rotation:(lab.layout.coach2.rotation - 6),x:(lab.layout.coach2.x+38),y:(lab.layout.coach2.y + 6)}, 250, createjs.Ease.linear).call(function(){
				console.log(1);
				lab.layout.engine.gotoAndPlay(0);
				lab.layout.engine.loop=false;
				lab.layout.coach1.gotoAndPlay(0);
				lab.layout.coach1.loop=false;
				lab.layout.coach2.gotoAndPlay(0);
				lab.layout.coach2.loop=false;
			});
		}
		else{
			createjs.Tween.get(lab.layout.engine, {override:true}).to({x:(lab.layout.engine.x-10),y:(lab.layout.engine.y + 10)}, 150, createjs.Ease.linear);
			createjs.Tween.get(lab.layout.coach1, {override:true}).to({rotation:(lab.layout.coach1.rotation - 10),x:(lab.layout.coach1.x-22),y:(lab.layout.coach1.y + 12)}, 150, createjs.Ease.linear);
			createjs.Tween.get(lab.layout.coach2, {override:true}).to({rotation:(lab.layout.coach2.rotation - 8),x:(lab.layout.coach2.x-25),y:(lab.layout.coach2.y)}, 150, createjs.Ease.linear).call(function(){
				console.log(2);
				lab.layout.engine.gotoAndPlay(0);
				lab.layout.engine.loop=false;
				lab.layout.coach1.gotoAndPlay(0);
				lab.layout.coach1.loop=false;
				lab.layout.coach2.gotoAndPlay(0);
				lab.layout.coach2.loop=false;
			});
		}
		
		// lab.layout.engine.visible = false; 
		// lab.layout.coach1.visible = false; 
		// lab.layout.coach2.visible = false; 
		
		// lab.layout.engine_crash.visible=true;
		// lab.layout.coach1_crash.visible=true;
		// lab.layout.coach2_crash.visible=true;
		
		// lab.layout.engine_crash.x=lab.layout.engine.x;
		// lab.layout.coach1_crash.x=lab.layout.coach1.x;
		// lab.layout.coach2_crash.x=lab.layout.coach2.x;		
		// lab.layout.engine_crash.y=lab.layout.engine.y;
		// lab.layout.coach1_crash.y=lab.layout.coach1.y;
		// lab.layout.coach2_crash.y=lab.layout.coach2.y;
		// lab.layout.engine_crash.rotation=lab.layout.engine.rotation;
		// lab.layout.coach1_crash.rotation=lab.layout.coach1.rotation;
		// lab.layout.coach2_crash.rotation=lab.layout.coach2.rotation;
		// lab.layout.engine.gotoAndPlay(0);
			// lab.layout.engine.loop=false;
			// lab.layout.coach1.gotoAndPlay(0);
			// lab.layout.coach1.loop=false;
			// lab.layout.coach2.gotoAndPlay(0);
			// lab.layout.coach2.loop=false;
		lab.engine._pause();
		lab.coach1._pause();
		lab.coach2._pause();
	}
	
	function startConditions(){
		if(this.finalVelocity != 0){ 
			this.velocityX = 0;		
    		this.accelerationX = (0.5 * (this.finalVelocity * this.finalVelocity)/23.5);
			if(this.name=="engine"){
					lab.layout.speedometer2.value = this.accelerationX * 10;
			}
    		this.accelerating = true;
    	}
    	// else if(this.redVelocityX == 0 && this.redVelocityY ==0){ //figure out the acceleration in order to get to the right speed.
    		// var dist = this.redPatchEnd - this.redDisplacementX;
    		// this.accelerationX = (this.redVelocity * this.redVelocity)/(2*dist);
			// if(this.name=="engine"){
					// lab.layout.speedometer2.value = this.accelerationX;
			// }
		// }
    	this.startCondition = true;
	}
});


