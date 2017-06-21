var Lab = (function () {
	var scope;
	function Activity() {
		createjs.Container.call(this);
		
		this.CONVERT_PIXEL=5;
		this.TIMESTEP=1;
		
		this.greenBallReached=false;
		this.brownBallReached=false;
		this.collision=false;
		this.displacement=0;
		this.diff=0;
	}

	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function () {
		scope = this;
		
		console.log(this)
		
		this._pauseClicked = pauseClicked.bind(this);
		this._playClicked = playClicked.bind(this);
		this._checkCollision=checkCollision.bind(this);
		this._moveBall=moveBall.bind(this);
		this.reset = this.reset.bind(this);
		
		this.layout.pauseButton.enable().addEventListener("click", this._pauseClicked);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);

		this.reset();
	}

	Activity.prototype.reset = function () {
		var scope=this;
		var s=new createjs.Shape();
		s.graphics.drawRect(0,0,1000,700);
		scope.layout.popup.mask=s;
		this.greenBallReached=false;
		this.brownBallReached=false;
		scope.layout.popup.x=500;
		scope.layout.popup.y=770;
		createjs.Tween.get(scope.layout.popup, {override:true}).to({y:700}, 1000, createjs.Ease.linear);
		this.collision=false;
		createjs.Ticker.removeEventListener("tick",this._moveBall);
		
		this.layout.pauseButton.disable().visible=false;
		this.layout.playButton.enable().visible=true;

		this.layout.greenBall.x=90.5;
		this.layout.brownBall.x=578;
		
		this.layout.greenBallV.text="0.00";
		this.layout.brownBallV.text="0.00";
	}
	
	function moveBall(){
		this._checkCollision();
		if(this.collision==false){
			this.layout.greenBall.x=this.layout.greenBall.x + (0.60 * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.brownBall.x=this.layout.brownBall.x + (-1 * this.CONVERT_PIXEL * this.TIMESTEP);

			this.layout.greenBallV.text="0.60";
			this.layout.brownBallV.text="-1.00";
		}
		else{
			this.layout.greenBall.x=this.layout.greenBall.x + (-0.60 * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.brownBall.x=this.layout.brownBall.x + (0.20 * this.CONVERT_PIXEL * this.TIMESTEP);
			
			this.layout.greenBallV.text="-0.60";
			this.layout.brownBallV.text="0.20";
		}
		
		if(this.layout.greenBall.x<6.5){
			this.layout.greenBall.x=6.5;
			this.layout.greenBallV.text="0.00";
			this.greenBallReached=true;
		}
		
		if(this.layout.brownBall.x>979){
			this.layout.brownBall.x=979;
			this.layout.brownBallV.text="0.00";
			this.brownBallReached=true;
		}
		
		if((this.greenBallReached==true && this.brownBallReached==true)){
			this.layout.pauseButton.disable();
			this.layout.playButton.enable().visible=true;
		}
	}

	function checkCollision(){
		var p1={
			x:this.layout.greenBall.x,
			y:this.layout.greenBall.y
		}
		var p2={
			x:this.layout.brownBall.x,
			y:this.layout.brownBall.y
		}
		this.diff=Maths.getDistance(p1,p2);
		
		if(this.diff<=36.85){
			this.collision=true;
		}
	}
	
	function playClicked(e){
		if((this.greenBallReached==true && this.brownBallReached==true)){
			this.running=false;
			this.collision=false;
			this.greenBallReached=false;
			this.brownBallReached=false;
			this.layout.greenBall.x=90.5;
			this.layout.brownBall.x=578;
			this.diff=0;
		}
	
		createjs.Tween.get(scope.layout.popup).to({y:770}, 1000, createjs.Ease.linear);
		this.layout.pauseButton.enable().visible = true;
		this.layout.playButton.visible = false;
		this._moveBall();
		createjs.Ticker.addEventListener("tick",this._moveBall);
	}
	
	function pauseClicked(e){
		this.layout.pauseButton.visible = false;
		this.layout.playButton.enable().visible = true;
		createjs.Ticker.removeEventListener("tick",this._moveBall);
	}

	return Activity;
})();