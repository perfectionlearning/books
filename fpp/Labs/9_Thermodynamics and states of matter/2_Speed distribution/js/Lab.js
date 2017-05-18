var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		this._defaultPositions = [];
		
		this._defaultVelocity = 240;
		this._moleculeRadius = 13.8;
		this._moleculeMass = 0.018;
		this._totalMolecules = 50;
		
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
		
		this._pauseClicked = pauseClicked.bind(this);
		this._playClicked = playClicked.bind(this);
		this.reset = this.reset.bind(this);
		this.frame = tick.bind(this);

		this.layout.pauseButton.enable().addEventListener("click", this._pauseClicked);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);
		
		createMolecules.call(this);
		this.reset();
	}
	
	Activity.prototype.reset = function(){
		this._pauseClicked();
		m_accumParticles=0;
	    m_accumPercentage=[0,0,0,0,0,0,0,0,0,0,0]
		this.molecules.forEach(function(m, i){
			m.reset(this._defaultPositions[i], Model.pointToPixel(this._defaultVelocity));
		}, this);
		
		// updateBarGraph.call(this);
	}
	var m_accumParticles=0;
	var m_accumPercentage=[0,0,0,0,0,0,0,0,0,0,0]
	function updateBarGraph(){
		var speed;
		this.layout.barShape.graphics.clear().setStrokeStyle(10).beginStroke("#E79999");
	    for(var sample=0;sample<=10;sample++)
		{
			this.molecules.forEach(function(molecule){		
				 if (sample == 0)
                   ++m_accumParticles;
                  speed = Number((molecule.m_gSpeed).toFixed(0));
                 if (sample * 50 < speed && speed <= (sample + 1) * 50)
                    ++m_accumPercentage[sample];
				
			});        
		
		if (m_accumParticles == 0)
        break;
		this.layout.barShape.graphics.moveTo(sample * 24, 0).lineTo(sample * 24,-Math.ceil(m_accumPercentage[sample] * 300.0 / m_accumParticles));
		}
		this.layout.barShape.graphics.endStroke()
		
	}
	
	function tick(){		
		for(var i = 0; i < this.molecules.length; i++){
			for(var j = 0; j != i && j < this.molecules.length; j++){
				this.molecules[i].collide(this.molecules[j]);
			}
			this.molecules[i].propagate();
			this.molecules[i].wallCollision(Model.boundary);
		}
		updateBarGraph.call(this);
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
			// text = new createjs.Text(/* String.fromCharCode */(mc.name), "20px Arial");
			// text.color = "white";
			// text.x = this._moleculeRadius;
			// text.y = this._moleculeRadius;
			// text.regX = text.getBounds().width/2;
			// text.regY = text.getBounds().height/2;
			this.stage.addChildAt(mc, 0);
			// mc.addChild(text);
			m = new GasPart(mc, this._moleculeRadius * (mc.scaleX + mc.scaleY) / 2, this._moleculeMass, Model.step);
			this.molecules.push(m);
			mc.cache(-this._moleculeRadius, -this._moleculeRadius, this._moleculeRadius * 2 + 1, this._moleculeRadius * 2 + 1);
		}
		this.layout.molecule1.visible = false;
	}
	
	function playClicked(e){
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
		Ticker.add({
			fps:60,
			callback:this.frame
		});
	}
	
	function pauseClicked(e){
		this.layout.pauseButton.visible = false;
		this.layout.playButton.enable().visible = true;
		Ticker.remove(this.frame);
	}
	
	return Activity;
})();

var Model = {
	boundary:{
		x:40, y:90, width:950, height:550
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