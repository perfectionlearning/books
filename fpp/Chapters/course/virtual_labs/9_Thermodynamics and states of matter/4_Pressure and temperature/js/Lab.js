var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		this._defaultPositions = [];
		
		this._defaultVelocity = 200;
		this._moleculeRadius =  13.8;
		this._moleculeMass = 0.018;
		this._totalMolecules = 30;
		this._R = 8.31;
		this._temperature = 0;

		this._Pressure = 0;
		this._volume = 3.2* Math.pow(10,-22);		
		this._m_gIdealAvgSpeed=0;
		this._m_gSpeed=0;
		this._m_gSpeedInit=-1;
		this._m_fModifyNumParticles=false;
		this._m_gRandomSpeed=0
		this._m_gVolumeInit=-1;
		this._m_gVolume=-1;
		this._m_gPressure=0;
		this._m_gSystemTemp = 0;
        this._m_gParticlesEscaped = 0;
        this._m_gIdealPressure = 0.0;
		this._m_gAdminVolume = 0;
		this._m_gAvgPartSpd;
		
		
		
		var rows = 8, cols = 8;
		var w = Model.boundary.width / cols;
		var h = Model.boundary.height / rows;
		var combinations = [], row, col;
		while(this._defaultPositions.length < 50){
			r = getRandomNum(0, rows - 1),
			c = getRandomNum(0, cols - 1);
			var comb = c + "," + r;
			
			if(combinations.indexOf(comb) == -1){
				combinations.push(comb);
				
				this._defaultPositions.push({
					x:Model.boundary.x + (r * w) + getRandomNum(this._moleculeRadius, w - this._moleculeRadius),
					y:Model.boundary.y + (c * h) + getRandomNum(this._moleculeRadius, h - this._moleculeRadius),
				});
				
			}
		}
		
		this._speedCategories = [];
		this._totalCategories = 11;
		var gap = 50;
		for(var i = 0; i < this._totalCategories - 1; i++){
			var o = {
				min:i * gap,
				max:(i + 1) * gap,
				total:0
			}
			this._speedCategories.push(o);
		}
		this._speedCategories.push({
			min:this._speedCategories[this._speedCategories.length - 1].min,
			max:this._speedCategories[this._speedCategories.length - 1].min * 2,
			total:0
		});
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function(){
		var scope = this;
		
		this._stepperClicked = stepperClicked.bind(this);
		this._pauseClicked = pauseClicked.bind(this);
		this._playClicked = playClicked.bind(this);
		this.reset = this.reset.bind(this);
		this.frame = tick.bind(this);
		this.layout.pauseButton.enable().addEventListener("click", this._pauseClicked);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);
		this.layout.stepper.enable().addEventListener("valueChange",this._stepperClicked );
		createMolecules.call(this);
		this.reset();
		/*  var rect = new createjs.Shape();
                  rect.graphics.beginFill('red');
                  rect.graphics.drawRect(40, 88, 949, 549);
				  rect.alpha = 0.5;
                  rect.graphics.endFill();
				  this.stage.addChild(rect);
				  this.stage.update(); */
	}
	
	function stepperClicked(e)
	{
		setTemprature.call(this,e)
	}
	
	
	
	function setTemprature(e)
	{
	var newTemp = Number(e.currentTarget.value.toFixed(0))
	if(newTemp != this._temperature)
	{
	var i=0;
	this._temperature=newTemp
	this.layout.tempText.text=e.currentTarget.value.toFixed(0);
	this._m_gIdealAvgSpeed=Math.sqrt((8/Math.PI*this._R*this._temperature)/0.018)
	
	this.molecules.forEach(function(molecule){
     var fudgeFactor=i%2==0? 0.5:1.5  
	 
	 molecule.m_gSpeed=Math.sqrt((8/Math.PI* this._R * this._temperature)/0.018)*fudgeFactor
	 molecule.updateVelFromSpeed();
	i++
	},this);
	
	}
	}
	
	
	
	
	
	
	Activity.prototype.reset = function(){
		this.molecules.forEach(function(m, i){
			m.reset(this._defaultPositions[i], Model.pointToPixel(this._defaultVelocity));
		}, this);
		this._temperature=0
		setTemprature.call(this,{currentTarget:{value:300}})
		 this.layout.stepper.value=300
		this._playClicked()
	
	}
	
	
function calcPressure()
{

var sum=0
this.molecules.forEach(function(molecule){	
				pv = Number((molecule.m_gSpeed).toFixed(0));
				sum=sum+pv
			});	
this._m_gAvgPartSpd=sum/this._totalMolecules
var speed = this._m_gAvgPartSpd;
var volume = this._volume;
//* 6.022 * Math.pow(10,23)
this._Pressure = ((this._totalMolecules) / 6.022e23 * 0.018 * (Math.pow(speed * Math.sqrt(3/2.54), 2))) / (3 * volume);
           
this.layout.pressureText.text = this._Pressure.toFixed(0)



}
	
	
	
/* function meanVel()
{

var factor= (1- (this._temperature-100)/500)*0.8; 
var fudgeFactor= Math.random()
if(fudgeFactor> factor)
{
var n=(this._totalMolecules/(6.022*Math.pow(10,23)))
this._Pressure = (n*this._R*this._temperature)/this._volume
var randomSpeed= Model.randomNumber(6,-6)
this._Pressure =this._Pressure+ (randomSpeed/100)*this._Pressure
this.layout.pressureText.text = this._Pressure.toFixed(0)
}

} */

	
	function tick(){
		for(var m = 0; m < 2; m++){
			for(var i = 0; i < this.molecules.length; i++){
				
				for(var j = 0; j != i && j < this.molecules.length; j++){
					this.molecules[i].collide(this.molecules[j]);
				}
				this.molecules[i].propagate(this._temperature);
				this.molecules[i].wallCollision(Model.boundary);
			}
		}
		calcPressure.call(this);
	}
	
	function createMolecules(){
		this.molecules = [];
		var mc = this.layout.molecule1;
		var m, text;
		for(var i = 0; i < this._totalMolecules; i++){
            mc = new lib.mc_blue();
			mc.name = i + 1;
			mc.scaleX=0.7;
			mc.scaleY=0.7;
			
			
			/* text = new createjs.Text((mc.name), "20px Arial");
			text.color = "white";
			text.x = this._moleculeRadius;
			text.y = this._moleculeRadius;
			text.regX = text.getBounds().width/2;
			text.regY = text.getBounds().height/2;

			mc.addChild(text); */
			this.stage.addChildAt(mc, 0);
			m = new GasPart(mc, this._moleculeRadius * (mc.scaleX + mc.scaleY) / 2, this._moleculeMass, Model.step);
			this.molecules.push(m);
			mc.cache(-this._moleculeRadius,-this._moleculeRadius, this._moleculeRadius * 2 + 1, this._moleculeRadius * 2 + 1);
		}
		this.layout.molecule1.visible = false;
	}
	
	function playClicked(e){
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
		// Ticker.add({
			// fps:60,
			// callback:this.frame
		// });
		createjs.Ticker.addEventListener("tick", this.frame);
		this.layout.stepper.enable()
	}
	
	function pauseClicked(e){
		this.layout.pauseButton.visible = false;
		this.layout.playButton.enable().visible = true;
		// Ticker.remove(this.frame);
		createjs.Ticker.removeEventListener("tick", this.frame);
	    this.layout.stepper.disable()
	
	}
	
	return Activity;
})();

var Model = {
	boundary:{

		x:40, y:88, width:949, height:549
	},
	step:0.1,
	unit:0.2
};

Model.pointToPixel = function(value){
	return value * Model.unit;
}

Model.pixelToPoint = function(value){
	return value / Model.unit;
}

Model.randomNumber = function(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


