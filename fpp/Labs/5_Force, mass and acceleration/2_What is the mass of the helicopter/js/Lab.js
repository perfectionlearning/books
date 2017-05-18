var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		
		this.accleration=0;
		this.velocity=0;
		this.height=0;
		this.myheight=420;
		this.position=0;
		
		this.TIMESTEP=0.02;
		this.BASEHEIGHT=420;
		this.CONVERT_PIXEL=5;
		this.CRASH_VELOCITY=-5.00;
	}
	var cal;
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		var scope = this;
		
		this.reset = this.reset.bind(this);
		this._keydown= keydown.bind(this);
		this._keyup=keyup.bind(this);
		this._calculator=calculator.bind(this);
		this._checkcarsh=checkcrash.bind(this);
		this._updateHelicopter=updateHelicopter.bind(this);
		
		this.layout.resetButton.enable().addEventListener("click", this.reset);
		
		this.layout.stepper.enable().addEventListener("valueChange", function(e){
			scope.layout.force.text = commafy(e.currentTarget.value);
			scope.accleration=(e.currentTarget.value/2041).toFixed(2) * 1;
			scope.layout.accleration.text=(scope.accleration).toFixed(2);
			if(scope.accleration==0){
				scope.layout.accleration.text="0.00";
			}
			scope.position=1;
			scope.layout.stepper.enable(2);
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
		if(this.height<0 && (this.velocity>this.CRASH_VELOCITY)){
			this.reset();
		}
		else if(!this._checkcarsh.call()){
			if(this.height<6000){
			this.velocity=this.velocity+(this.accleration*this.TIMESTEP);
			//console.log(Math.pow(this.velocity,2)/2*this.accleration);
			this.myheight=this.myheight-(this.velocity * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.velocity.text=this.velocity.toFixed(2);
			this.height=((this.BASEHEIGHT-this.myheight)/this.CONVERT_PIXEL).toFixed(2) * 1;
			this.layout.height.text=commafy(this.height.toFixed(2));
			if(this.height==0){
				this.layout.height.text="0.00";
			}
			}
		else{
			this.layout.popup.visible=true;
			this.layout.popup.play();
			this.layout.popup.loop=false;
			document.removeEventListener("keydown",this._keydown);
			document.removeEventListener("keyup",this._keyup);
			this.layout.stepper.disable();
		}
		}
		else{
			this.layout.velocity.text="0.00";
			this.layout.height.text="0.00";
			this.layout.accleration.text="0.00";
			this.layout.force.text=0;
			this.layout.stepper.value=0;
			Ticker.remove(this._updateHelicopter);
			Ticker.remove(this._calculator);
			this.layout.helicopter.visible=false;
			this.layout.helicopterBreak.visible=true;
			this.layout.helicopterBreak.play();
			this.layout.helicopterBreak.loop=false;
			document.removeEventListener("keydown",this._keydown);
			document.removeEventListener("keyup",this._keyup);
			this._keyup();
			this.layout.stepper.disable();

			Ticker.add({
				delay:5000,
				callback:function(){
					lab.reset()},
				once:true,
			});
		}
	}
	
	function updateHelicopter(){
		this.layout.helicopter.y=this.myheight;
	}
	
	function checkcrash(){
		if((this.velocity<this.CRASH_VELOCITY) && this.height<0){
			return true;
		}
		return false;
	} 
	 
	function keydown(e){
		if(e.keyCode==38){
			this.layout.stepper.handleEvent({type:"mousedown",currentTarget:this.layout.stepper._inc})
		}
		else if(e.keyCode==40 && this.position==1){
			this.layout.stepper.handleEvent({type:"mousedown",currentTarget:this.layout.stepper._dec})
		}	
	}
	
	function keyup(e){
		this.layout.stepper.handleEvent({});
	}
	
	Activity.prototype.reset = function(){
		this.layout.stepper.value=0;
		this.position=0;
		this.layout.stepper.disable(2);
		this.layout.stepper.enable(1);
		this._keyup();
		Ticker.remove(this._updateHelicopter);
		Ticker.remove(this._calculator);
		this.layout.popup.visible=false;
		this.layout.popup.gotoAndStop(0);
		this.layout.helicopter.visible=true;
		this.layout.helicopter.setTransform(290,420,1.5,1.5,0,0,0,53.5,49.6);
		this.layout.helicopterBreak.visible=false;
		this.layout.velocity.text="0.00";
		this.layout.height.text="0.00";
		this.layout.accleration.text="0.00";
		this.layout.force.text="0";
		
		document.addEventListener("keydown",this._keydown);
		document.addEventListener("keyup",this._keyup);
		
		
		this.velocity=0;
		this.accleration=0;
		this.height=0;
		this.myheight=420;
		this._calculator();
		Ticker.add({
			fps:60,
			callback:this._calculator
		});
		Ticker.add({
			fps:30,
			callback:this._updateHelicopter
		});
	}
	return Activity;
})();



