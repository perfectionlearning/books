var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		this.accleration=0;
		this.velocity=0;
		this.drag=0;
		this.displacement=295;
		this.diff=0;
		this.thrustforce=0;
		this.flag=0;
		
		this.TIMESTEP=0.035;
		this.DRAGCOE=0.6;
		this.AIR_DENSITY=1.2;
		this.AREA=22;
		this.MASS=2040;
		this.ACCELERATION_STEP=0.12249978;
		this.CONVERT_PIXEL=10;
		this.LEFT_BORDER=855;
		this.RIGHT_BORDER=4791;
		this.BG_RIGHT=3936;
		this.BG_INTIAL=0;
		this.MAX_THRUST=5000;
		this.MIN_THRUST=-5000;
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
		
		this.bg=this.layout.bg;
		this.layout.resetButton.enable().addEventListener("click", this.reset);
		this.layout.playButton.disable().addEventListener("click",this._play);
		this.layout.pauseButton.enable().addEventListener("click",this._pause);
		this.layout.stepper.horizontal=true;
		this.layout.stepper._dec.x=-63;
		this.layout.stepper._dec.y=0;
		this.layout.stepper.enable().addEventListener("valueChange", function(e){
			scope.layout.force.text = commafy(e.currentTarget.value);
			scope.thrustforce=e.currentTarget.value;
			
			if(e.currentTarget._direction==1 && e.currentTarget.value<scope.MAX_THRUST){
				scope.accleration=scope.accleration + scope.ACCELERATION_STEP;
			}
			else if(e.currentTarget._direction==-1 && e.currentTarget.value>scope.MIN_THRUST){
				scope.accleration=scope.accleration - scope.ACCELERATION_STEP;
			}
			
			if(scope.flag==0){
				if(scope.accleration.toFixed(2)==0.00){
					scope.layout.h_accleration.text="0.00";
				}
				else{
					scope.layout.h_accleration.text=scope.accleration.toFixed(2);
				}
			}
			
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
	
 	function calculator(){
		console.log(this.displacement);
		this.velocity=this.velocity + (this.accleration * this.TIMESTEP);
		this.drag = (.5 * this.DRAGCOE * this.AIR_DENSITY * this.AREA * this.velocity * this.velocity);
		
		if(this.velocity<0){
			this.drag *=-1;
		}
		this.accleration=(this.thrustforce-this.drag)/this.MASS;
		this.displacement=this.displacement + (this.velocity * this.CONVERT_PIXEL * this.TIMESTEP);
		if(this.accleration.toFixed(2)==0.00){
			this.layout.h_accleration.text="0.00";
		}
		else{
			this.layout.h_accleration.text=this.accleration.toFixed(2);
		}
		if(this.velocity.toFixed(2)==0.00){
					this.layout.h_velocity.text="0.00";
				}
				else{
					this.layout.h_velocity.text=this.velocity.toFixed(2);
				}
		this._checkDir();
		
		if(this.displacement>this.LEFT_BORDER && this.displacement<this.RIGHT_BORDER){
			
			this.diff=this.displacement - this.LEFT_BORDER;
			this.layout.bg.x=this.BG_INTIAL - this.diff;
			this.layout.helicopter.x=this.LEFT_BORDER;				
		}
		else if(this.displacement>=this.RIGHT_BORDER){
			this.layout.helicopter.x=this.displacement - this.BG_RIGHT;
		}
		else{
			this.layout.helicopter.x=this.displacement;
		}
	}
	
	function checkDir(){
		if(this.velocity<0){
			this.layout.helicopter.scaleX=-1.25;
		}
		else if(this.velocity>0){
			this.layout.helicopter.scaleX=1.25;
		}
	}
	 
	function play(){
		this.flag=0;
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
		this.flag=1;
		this._keyup();
		this._keyup();
		createjs.Ticker.removeEventListener("tick", this._calculator);
		this.layout.playButton.visible=true;
		this.layout.pauseButton.visible=false;
		this.layout.playButton.enable();
		this.layout.pauseButton.disable();
	}
	
	function keydown(e){
		if(e.keyCode==39){
			this.layout.stepper.handleEvent({type:"mousedown",currentTarget:this.layout.stepper._inc})
		}
		else if(e.keyCode==37){
			this.layout.stepper.handleEvent({type:"mousedown",currentTarget:this.layout.stepper._dec})
		}	
	}
	
	function keyup(e){
		this.layout.stepper.handleEvent({});
	}
	
	Activity.prototype.reset = function(){
		this.flag=0;
		this._keyup();
		createjs.Ticker.removeEventListener("tick", this._calculator);
		
		this.layout.playButton.disable().addEventListener("click",this._play);
		this.layout.pauseButton.enable().addEventListener("click",this._pause);
		this.layout.playButton.visible=false;
		this.layout.pauseButton.visible=true;
		this.layout.stepper.enable();
		
		this.layout.bg.x=this.BG_INTIAL;
		this.layout.helicopter.visible=true;
		this.layout.helicopter.play();
		this.layout.helicopter.setTransform(295,160,1.25,1.25,0,0,0,53.5,49.6);
		this.layout.helicopterBreak.gotoAndStop(0);
		this.layout.helicopterBreak.visible=false;
		this.layout.h_velocity.text="0.00";
		this.layout.h_accleration.text="0.00";
		this.layout.force.text=0;
		this.layout.stepper.value=0;
		
		document.addEventListener("keydown",this._keydown);
		document.addEventListener("keyup",this._keyup);
		
		this.accleration=0;
		this.velocity=0;
		this.drag=0;
		this.displacement=295;
		this.diff=0;
		this.thrustforce=0;
		
		this._calculator();
		createjs.Ticker.addEventListener("tick", this._calculator);

	}
	return Activity;
})();



