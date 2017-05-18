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
		
		this.moon = new Slider(this.layout.moonImg,642, 990, stepper._min, stepper._max, this.layout.arrow1Line,{color:"rgba(0,0,0,0)"});
		scope.layout.distanceValue.text = scope.moon.value.toFixed(2);
		scope.layout.massValue.text = Number(10).toFixed(1)
		this.moon.enable().addEventListener("drag",function(e){
		scope.layout.distanceValue.text = scope.moon.value.toFixed(2);
		scope.layout.distanceStepper.value = scope.moon.value;
		if(scope.moon.value.toFixed(2) == 10)
		{
			scope.layout.distanceValue.text = Number(1).toFixed(2)
			scope.layout.tensValue.text = " x 10^7";
		}
		else
		{
			scope.layout.tensValue.text = " x 10^6";
		}
		calculateGravity.call(scope);
		});
		
		this.layout.massStepper.enable();
		this.layout.distanceStepper.enable();
		
		this.layout.massStepper.addEventListener("valueChange", function(e){
			scope.layout.massValue.text = e.currentTarget.value.toFixed(1);
	
			calculateGravity.call(scope);
		});
		
		this.layout.distanceStepper.addEventListener("valueChange", function(e){
			scope.layout.distanceValue.text = e.currentTarget.value.toFixed(2);
			scope.moon.value = e.currentTarget.value.toFixed(2);
			if(Number(e.currentTarget.value).toFixed(2) == 10.00)
			{
				scope.layout.distanceValue.text = Number(1).toFixed(2);
				scope.layout.tensValue.text = " x 10^7";
			}
			else
			{
				scope.layout.tensValue.text = " x 10^6";
			}
			
			calculateGravity.call(scope);
		});
	}
	
	function calculateGravity()
	{ 
		var scope = this;
		var _distance = scope.layout.distanceValue.text;
		if(_distance == 1.00)
		{
			_distance = 10;
		}
		var gravity = ((scope.layout.massValue.text * 5.97 * 6.674) / (_distance * _distance)) * 10;
	
		scope.layout.gravityValue.text = gravity.toFixed(2);
		
	}
	
	
	return Activity;
})();

