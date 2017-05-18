var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		
		this.accleration=-9.80;
		this.velocity=0;
		this.height=0;
		this.myheight=0;
		this.position=0;
		this.previousAccl=0;
		this.flag=0;
		
		this.BASE_HEIGHT=499;
		this.TIMESTEP=0.03;
		this.ACCELERATION_STEP=0.122499;
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		var scope = this;
		
		this.reset = this.reset.bind(this);
		this._keydown= keydown.bind(this);
		this._keyup=keyup.bind(this);
		this._calculator=calculator.bind(this);
		this._play=play.bind(this);
		this._pause=pause.bind(this);
		this._checkcrash=checkcrash.bind(this);
		
		this.layout.resetButton.enable().addEventListener("click", this.reset);
		this.layout.playButton.enable().addEventListener("click",this._play);
		this.layout.pauseButton.disable().addEventListener("click",this._pause);
		
		this.layout.stepper.enable().addEventListener("valueChange", function (e){
			scope.layout.force.text = commafy(e.currentTarget.value);
			scope.accleration=((e.currentTarget.value-20000)/2041);
			scope.previousAccl=scope.accleration;
			
			if(scope.flag==1){
				scope.layout.accleration.text=(scope.accleration).toFixed(2);
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
		if(this.height<0 && (this.velocity>-2.00)){
			document.removeEventListener("keydown",this._keydown);
			document.removeEventListener("keyup",this._keyup);
			this.layout.stepper.disable();
			createjs.Ticker.removeEventListener("tick", this._calculator);
			this.layout.pauseButton.disable();
			this.layout.velocity.text="0.00";
			this.layout.accleration.text="0.00";
			this.layout.peoplesSuccess.visible=true;
			this.layout.peoplesBreak.visible=false;
			this.layout.peoplesNormal.visible=false;
			this.layout.peoplesSuccess.play();
		}
		else if(!this._checkcrash.call()){
			this.velocity = this.velocity + (this.accleration * this.TIMESTEP);
			this.myheight = this.myheight - (this.velocity * 8.5 * this.TIMESTEP);
			this.layout.velocity.text = this.velocity.toFixed(2);
			this.layout.accleration.text=(this.accleration).toFixed(2);
			this.layout.helicopter.y = this.myheight;
			this.height=((this.BASE_HEIGHT-this.myheight)).toFixed(1);
		}
		else{
			this.layout.velocity.text="0.00";
			this.layout.accleration.text="0.00";
			createjs.Ticker.removeEventListener("tick", this._calculator);
			this.layout.pauseButton.disable();
			this.layout.helicopter.visible=false;
			this.layout.helicopterBreak.visible=true;
			this.layout.helicopterBreak.play();
			this.layout.helicopterBreak.loop=false;
			this.layout.peoplesSuccess.visible=false;
			this.layout.peoplesBreak.visible=true;
			this.layout.peoplesBreak.play();
			this.layout.peoplesBreak.loop=false;
			this.layout.peoplesNormal.visible=false;
			document.removeEventListener("keydown",this._keydown);
			document.removeEventListener("keyup",this._keyup);
			this._keyup();
			this.layout.stepper.disable();
		}
	}
	
	function checkcrash(){
		if((this.velocity<-2.00) && this.height<0){
			return true;
		}
		return false;
	} 
	 
	function play(){
		
		this.flag=1;
		document.addEventListener("keydown",this._keydown);
		document.addEventListener("keyup",this._keyup);
		this.layout.stepper.enable();
		
		if(this.previousAccl!=this.accleration){
			this.accleration=this.previousAccl;
		}
			
		this.layout.accleration.text=(this.accleration).toFixed(2);
		this._keyup();
		this._calculator();
		createjs.Ticker.addEventListener("tick", this._calculator);
		this.layout.playButton.disable();
		this.layout.pauseButton.enable();
		this.layout.playButton.visible=false;
		this.layout.pauseButton.visible=true;
		
	}
	
	function pause(){
		this._keyup();
		document.removeEventListener("keydown",this._keydown);
		document.removeEventListener("keyup",this._keyup);
		createjs.Ticker.removeEventListener("tick", this._calculator);
		this.layout.playButton.visible=true;
		this.layout.pauseButton.visible=false;
		this.layout.playButton.enable();
		this.layout.pauseButton.disable();
		this.layout.stepper.disable();
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
	
	Activity.prototype.reset = function(){
		this.previousAccl=(this.layout.stepper.value-20000)/2040.82;
		
		this._keyup();
		createjs.Ticker.removeEventListener("tick", this._calculator);
		this.layout.peoplesNormal.visible=true;
		this.layout.peoplesNormal.play();
		this.layout.peoplesSuccess.gotoAndStop(0);
		this.layout.peoplesBreak.gotoAndStop(0);
		this.layout.peoplesSuccess.visible=false;
		this.layout.peoplesBreak.visible=false;
		this.layout.playButton.enable().addEventListener("click",this._play);
		this.layout.pauseButton.disable().addEventListener("click",this._pause);
		this.layout.playButton.visible=true;
		this.layout.pauseButton.visible=false;
		this.layout.stepper.enable();
		this.layout.helicopter.visible=true;
		//this.layout.helicopter.play();
		this.layout.helicopter.setTransform(540,170,1.25,1.25,0,0,0,53.5,49.6);
		this.layout.helicopterBreak.gotoAndStop(0);
		this.layout.helicopterBreak.visible=false;
		this.layout.velocity.text="0.00";
		this.layout.accleration.text="0.00";
		
		document.addEventListener("keydown",this._keydown);
		document.addEventListener("keyup",this._keyup);
		
		this.velocity=-21.5;
		this.accleration=-9.80;
		this.height=0;
		this.myheight=170;
		this.flag=0;
		
	}
	return Activity;
})();



