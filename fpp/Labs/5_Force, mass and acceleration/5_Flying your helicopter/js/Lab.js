var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		this.accelerationH=0;
		this.velocityH=0;
		this.displacementH=295;
		this.diffH=0;
		this.thrustforce=0;
		
		this.accelerationV=0;
		this.velocityV=0;
		this.displacementV=420;
		this.diffV=0;
		this.liftForce=0;
		this.myHeight=0;
		
		this.flag=false;
		
		this.TIMESTEP=0.03;
		this.ACCELERATION_STEP=0.12249978;
		this.CONVERT_PIXEL=7;
		this.LEFT_BORDER=855;
		this.RIGHT_BORDER=1150;
		this.BG_RIGHT=295;
		this.BG_INTIAL=569;
		this.BASE_HEIGHT=420;
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		var scope = this;
		
		this.reset = this.reset.bind(this);
		this._keydown= keydown.bind(this);
		this._keyup=keyup.bind(this);
		this._calculator=calculator.bind(this);
		this._checkDir=checkDir.bind(this);
		this._play=play.bind(this);
		this._pause=pause.bind(this);
		this._onGround=onGround.bind(this);
		this._checkLanding=checkLanding.bind(this);
		
		this.bg=this.layout.bg;
		this.layout.resetButton.enable().addEventListener("click", this.reset);
		this.layout.playButton.disable().addEventListener("click",this._play);
		this.layout.pauseButton.enable().addEventListener("click",this._pause);
		this.layout.stepperH.horizontal=true;
		this.layout.stepperH._dec.x=-60;
		this.layout.stepperH._dec.y=0;
		this.layout.stepperH.enable().addEventListener("valueChange", function(e){
			scope.layout.force.text = commafy(e.currentTarget.value);
			scope.thrustforce=e.currentTarget.value;
			scope.accelerationH=e.currentTarget.value/2041;
			
			if(!scope._onGround){
				scope.layout.h_acceleration.text=scope.accelerationH.toFixed(2);
			}
		});
		
		this.layout.stepperV.enable().addEventListener("valueChange", function(e){
			scope.layout.liftForce.text = commafy(e.currentTarget.value);
			scope.liftForce=e.currentTarget.value;
			
				if(e.currentTarget.value>20000 || !scope._onGround){
					scope.flag=true;
				}
				if(scope.flag==true){
					scope.accelerationV=(e.currentTarget.value-20000)/2041;
				}
			// if(!scope._onGround){
				scope.layout.v_acceleration.text=scope.accelerationV.toFixed(2);
			// }
		});
		
		this.reset();
	}
	
	function commafy( num ) {
		var str = num.toString().split('.');
		if (str[0].length >= 4) {
			str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
		}
		if (str[1] && str[1].length >= 4) {
			str[1] = str[1].replace(/(\d{3})/g, '$1 ');
		}
		return str.join('.');
	}
	
	function onGround(){
		if(this.myHeight==this.BASE_HEIGHT){
			return true;
		}	
		return false;
	}
	
 	function calculator(){
		if(this.myHeight<0){
			this._checkLanding();
			return false;
		}
		
		if(this.flag){
			this.layout.h_acceleration.text=this.accelerationH.toFixed(2);
			this.layout.v_acceleration.text=this.accelerationV.toFixed(2);
			this.velocityH=this.velocityH + (this.accelerationH * this.TIMESTEP);
			this.displacementH=this.displacementH + (this.velocityH * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.h_velocity.text=this.velocityH.toFixed(2);
		}
		
		this.velocityV=this.velocityV + (this.accelerationV * this.TIMESTEP);
		this.displacementV=this.displacementV - (this.velocityV * this.CONVERT_PIXEL * this.TIMESTEP);
		this.layout.v_velocity.text=this.velocityV.toFixed(2);
		this.myHeight=((this.BASE_HEIGHT-this.displacementV)/this.CONVERT_PIXEL).toFixed(1);
	
		this._checkDir();
		
		if(this.displacementH>this.LEFT_BORDER && this.displacementH<this.RIGHT_BORDER){
			
			this.diffH=this.displacementH - this.LEFT_BORDER;
			this.layout.bg.x=this.BG_INTIAL - this.diffH;
			this.layout.helicopter.x=this.LEFT_BORDER;	
			if(this.displacementV <= 420){
				this.layout.helicopter.y=this.displacementV;	
			}
		}
		else if(this.displacementH>=this.RIGHT_BORDER){
			this.layout.helicopter.x=this.displacementH - this.BG_RIGHT;
			if(this.displacementV <= 420){
				this.layout.helicopter.y=this.displacementV;	
			}
		}
		else{
			this.layout.helicopter.x=this.displacementH;
			if(this.displacementV <= 420){
				this.layout.helicopter.y=this.displacementV;	
			}
		}
		
		
	}
	
	function checkLanding(){

		if((this.displacementH<=305 && this.displacementH>=73) || (this.displacementH>=950 && this.displacementH<=1170)){
			if((this.velocityH<=2.6 && this.velocityH>=-2.6) && (this.velocityV<=2.6 && this.velocityV>=-2.6)){
				createjs.Ticker.removeEventListener("tick", this._calculator);
				this._keyup();
				document.removeEventListener("keydown",this._keydown);
				document.removeEventListener("keyup",this._keyup);
				this.layout.pauseButton.disable();
				this.layout.v_velocity.text="0.00";
				this.layout.v_acceleration.text="0.00";
				this.layout.h_velocity.text="0.00";
				this.layout.h_acceleration.text="0.00";
				this.layout.force.text=0;
				this.layout.liftForce.text=0;
				this.layout.stepperH.disable();
				this.layout.stepperV.disable();
			}
			else{
			createjs.Ticker.removeEventListener("tick", this._calculator);
			this.layout.helicopterBreak.x=this.layout.helicopter.x;
			this.layout.helicopterBreak.y=420;
			this.layout.pauseButton.disable();
			this.layout.helicopter.visible=false;
			this.layout.helicopterBreak.visible=true;
			this.layout.helicopterBreak.play();
			this.layout.helicopterBreak.loop=false;
			document.removeEventListener("keydown",this._keydown);
			document.removeEventListener("keyup",this._keyup);
			this._keyup();
			this.layout.v_velocity.text="0.00";
			this.layout.v_acceleration.text="0.00";
			this.layout.h_velocity.text="0.00";
			this.layout.h_acceleration.text="0.00";
			this.layout.force.text=0;
			this.layout.liftForce.text=0;
			this.layout.stepperH.disable();
			this.layout.stepperV.disable();
			}
		}
		else{
			createjs.Ticker.removeEventListener("tick", this._calculator);
			this._keyup();
			document.removeEventListener("keydown",this._keydown);
			document.removeEventListener("keyup",this._keyup);
			this.layout.helicopterBreak.x=this.layout.helicopter.x;
			this.layout.helicopterBreak.y=420;
			this.layout.pauseButton.disable();
			this.layout.helicopter.visible=false;
			this.layout.helicopterBreak.visible=true;
			this.layout.helicopterBreak.play();
			this.layout.helicopterBreak.loop=false;
			this.layout.v_velocity.text="0.00";
			this.layout.v_acceleration.text="0.00";
			this.layout.h_velocity.text="0.00";
			this.layout.h_acceleration.text="0.00";
			this.layout.force.text=0;
			this.layout.liftForce.text=0;
			this.layout.stepperH.disable();
			this.layout.stepperV.disable();
		}
		
		Ticker.add({
				delay:4000,
				callback:function(){
					lab.reset()},
				once:true,
		});
	}
	
	function checkDir(){
		if(this.velocityH<0){
			this.layout.helicopter.scaleX=-1.20;
			this.layout.helicopterBreak.scaleX=-1.20;
		}
		else if(this.velocityH>0){
			this.layout.helicopter.scaleX=1.20;
			this.layout.helicopterBreak.scaleX=1.20;
		}
	}
	 
	function play(){
		document.addEventListener("keydown",this._keydown);
		document.addEventListener("keyup",this._keyup);
		this._calculator();
		createjs.Ticker.addEventListener("tick", this._calculator);
		this.layout.playButton.disable();
		this.layout.pauseButton.enable();
		this.layout.playButton.visible=false;
		this.layout.pauseButton.visible=true;
	}
	
	function pause(){
		createjs.Ticker.removeEventListener("tick", this._calculator);
		this.layout.playButton.visible=true;
		this.layout.pauseButton.visible=false;
		this.layout.playButton.enable();
		this.layout.pauseButton.disable();
	}
	
	function keydown(e){
		if(e.keyCode==39){
			this.layout.stepperH.handleEvent({type:"mousedown",currentTarget:this.layout.stepperH._inc})
		}
		else if(e.keyCode==37){
			this.layout.stepperH.handleEvent({type:"mousedown",currentTarget:this.layout.stepperH._dec})
		}
		else if(e.keyCode==38){
			this.layout.stepperV.handleEvent({type:"mousedown",currentTarget:this.layout.stepperV._inc})
		}
		else if(e.keyCode==40){
			this.layout.stepperV.handleEvent({type:"mousedown",currentTarget:this.layout.stepperV._dec})
		}		
	}
	
	function keyup(e){
		this.layout.stepperH.handleEvent({});
		this.layout.stepperV.handleEvent({});
	}
	
	Activity.prototype.reset = function(){
		
			document.removeEventListener("keydown",this._keydown);
			document.removeEventListener("keyup",this._keyup);
		this.flag=false;
		this._keyup();
		createjs.Ticker.removeEventListener("tick", this._calculator);
		
		this.layout.playButton.disable().addEventListener("click",this._play);
		this.layout.pauseButton.enable().addEventListener("click",this._pause);
		this.layout.playButton.visible=false;
		this.layout.pauseButton.visible=true;
		this.layout.stepperH.enable();
		this.layout.stepperV.enable();
		
		this.layout.bg.x=this.BG_INTIAL;
		this.layout.helicopter.visible=true;
		//this.layout.helicopter.play();
		this.layout.helicopter.setTransform(190,420,1.20,1.20,0,0,0,53.5,49.6);
		this.layout.helicopterBreak.gotoAndStop(0);
		this.layout.helicopterBreak.visible=false;
		this.layout.h_velocity.text="0.00";
		this.layout.h_acceleration.text="0.00";
		this.layout.v_velocity.text="0.00";
		this.layout.v_acceleration.text="0.00";
		this.layout.force.text=0;
		this.layout.liftForce.text=0;
		this.layout.stepperH.value=0;
		this.layout.stepperV.value=0;
		
		document.addEventListener("keydown",this._keydown);
		document.addEventListener("keyup",this._keyup);
		
		this.accelerationH=0;
		this.velocityH=0;
		this.displacementH=190;
		this.diffH=0;
		this.thrustforce=0;
		
		this.accelerationV=0;
		this.velocityV=0;
		this.displacementV=420;
		this.diffV=0;
		this.liftForce=0;
		this.myHeight=0;
		
		this._calculator();
		createjs.Ticker.addEventListener("tick", this._calculator);

	}
	return Activity;
})();



