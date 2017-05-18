var Lab = (function(){
	function Activity(){
		createjs.Container.call(this);
		this._defaultPositions = [
			{x:945, y:562},
			{x:70, y:245},
			{x:544, y:453},
			{x:777, y:360},
			{x:220, y:470},
			{x:286, y:370},
			{x:460, y:600},
			{x:625, y:115},
		];
		this._totalMolecules=8;
		this._defaultVelocity = 200;
		this._moleculeRadius = 21.5;
		this._moleculeMass = 0.018;
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
		
		  /*  var rect = new createjs.Shape();
                  rect.graphics.beginFill('red');
                  rect.graphics.drawCircle(945,562,21.5);
				  rect.alpha = 0.5;
                  rect.graphics.endFill();
				  this.stage.addChild(rect);
				  this.stage.update();  */
		
	}
	
	function createMolecules(){
		this.molecules = [];
		var mc = this.layout.molecule1;
		var m, text;
		for(var i = 0; i < this._totalMolecules; i++){
			mc = new lib.mc_redBall();
			mc.regX=21.5;
			mc.regY=21.5;
			mc.name = i + 1;
			text = new createjs.Text(/* String.fromCharCode */(mc.name), "20px Arial");
			text.color = "white";
			text.x = this._moleculeRadius;
			text.y = this._moleculeRadius;
			text.regX = text.getBounds().width/2;
			text.regY = text.getBounds().height/2;
			this.stage.addChild(mc);
			mc.addChild(text);
			m = new GasPart(mc, this._moleculeRadius, this._moleculeMass, Model.step);
			this.molecules.push(m);
			mc.cache(0, 0, this._moleculeRadius * 2 + 1, this._moleculeRadius * 2 + 1);
		}
		this.layout.molecule1.visible = false;
	}
	
	
	
	
	Activity.prototype.reset = function(){
		this._pauseClicked();
		this.molecules.forEach(function(m, i){
			m.reset(this._defaultPositions[i], Model.pointToPixel(this._defaultVelocity));
		}, this);
		
		updateTexts.call(this);
	}
	
	function updateTexts(){
		this.molecules.forEach(function(m, i){
			this.layout["textv" + (i + 1)].text = Model.pixelToPoint(m.velocityMagnitude).toFixed(0);
		}, this);
	}
	
	function tick(){
		for(var i = 0; i < this.molecules.length; i++){
			
			for(var j = 0; j != i && j < this.molecules.length; j++){
				this.molecules[i].collide(this.molecules[j]);
			}
			this.molecules[i].propagate();
			this.molecules[i].wallCollision(Model.boundary);
			
			
		}
		updateTexts.call(this);
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