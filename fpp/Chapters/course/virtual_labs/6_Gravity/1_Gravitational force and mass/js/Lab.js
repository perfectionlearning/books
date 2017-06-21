var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		var scope = this;
		createPlayers.call(this);
	}
	
	function createPlayers(){
		var scope = this,stepper = this.layout.distanceStepper;
		
		//this.layout.moonImg.snapToPixel = false;
		this.moon = new Slider(this.layout.moonImg,638, 990, stepper._min, stepper._max, this.layout.arrow1Line,{color:"rgba(0,0,0,0)"});
		this.moon.value = 9;
		scope.layout.distanceValue.text = scope.moon.value.toFixed(2);
		scope.layout.massValue.text = Number(10).toFixed(1)
		this.moon.enable().addEventListener("drag",sliderEvent.bind(this));
		
		this.layout.massStepper.enable();
		this.layout.distanceStepper.enable();
		
		this.layout.massStepper.addEventListener("valueChange", function(e){
			scope.layout.massValue.text = e.currentTarget.value.toFixed(1);
	
			calculateGravity.call(scope);
		});
		
		this.layout.distanceStepper.addEventListener("valueChange", function(e){
			scope.moon.value = scope.layout.distanceStepper.value;
			sliderEvent.call(scope)
		});
	}
	
	function sliderEvent(){
		var scope = this;
		var v = scope.moon.value.toFixed(2) * 1;
		var p = 6;
		scope.layout.distanceStepper._step = 0.01;
		if(v >= 10){
			v = (v / 10).toFixed(2) * 1;
			p = 7;
			scope.layout.distanceStepper._step = 0.1;
		}
		scope.layout.distanceValue.text = v.toFixed(2);
		scope.layout.distanceStepper.value = scope.moon.value;
		scope.layout.tensValue.text = " x 10^" + p;
		calculateGravity.call(scope);
	}
	
	function calculateGravity()
	{ 
		var scope = this;
		var _distance = scope.layout.distanceValue.text * 1;
		if(_distance >= 1.00 && this.layout.tensValue.text.sup == 7)
		{
			_distance = _distance * 10;
		}
		var gravity = ((scope.layout.massValue.text * 5.97 * 6.67) / (_distance * _distance)) * 10;
	
		scope.layout.gravityValue.text = gravity.toFixed(2);
		
	}
	
	
	return Activity;
})();

