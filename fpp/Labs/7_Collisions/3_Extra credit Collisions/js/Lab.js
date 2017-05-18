var Lab = (function () {
	var scope;
	function Activity() {
		createjs.Container.call(this);
		this.balls = {redBall:{
				beforeVelocity:1,
				afterVelocity:-1,
			},
			greenBall:{
				beforeVelocity:1,
				afterVelocity:-0.60,
			},
			purpleBall:{
				beforeVelocity:1,
				afterVelocity:-0.20,
			},
			blueBall:{
				beforeVelocity:-0.60,
				afterVelocity:1,
			},
			brownBall:{
				beforeVelocity:-0.60,
				afterVelocity:1,
			},
			greyBall:{
				beforeVelocity:-0.60,
				afterVelocity:0.60,
		}};
		
		this.CONVERT_PIXEL=5;
		this.TIMESTEP=1;
		this._object=["startPop","ABCPop","ABPop","ACPop","BCPop","APop","BPop","CPop","correctPop"];
		this.ANSWER_A="impossible";
		this.ANSWER_B="elastic";
		this.ANSWER_C="inelastic";
		
		this.currentPopup="startPop";
		this.collision=false;
		this.displacement=0;
		this.diff=0;
		this.currentPosition=0;
	}

	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	Activity.prototype.startLab = function () {
		scope = this;
		
		console.log(this);
		
		var s=new createjs.Shape();
		s.graphics.drawRect(0,0,1000,700);
		scope.layout.startPop.mask=s;
		scope.layout.APop.mask=s;
		scope.layout.BPop.mask=s;
		scope.layout.CPop.mask=s;
		scope.layout.ABPop.mask=s;
		scope.layout.BCPop.mask=s;
		scope.layout.ACPop.mask=s;
		scope.layout.ABCPop.mask=s;
		scope.layout.correctPop.mask=s;
		
		this._pauseClicked = pauseClicked.bind(this);
		this._playClicked = playClicked.bind(this);
		this._checkCollision=checkCollision.bind(this);
		this._moveBall=moveBall.bind(this);
		this._openContainer=openContainer.bind(this);
		this._checkAnswers=checkAnswers.bind(this);
		this._clearpopup=clearpopup.bind(this);
		
		this.reset = this.reset.bind(this);
		
		this.layout.pauseButton.enable().addEventListener("click", this._pauseClicked);
		this.layout.playButton.enable().addEventListener("click", this._playClicked);
		this.layout.resetButton.enable().addEventListener("click", this.reset);
		this.layout.buttonA.enable().addEventListener("click",this._openContainer);
		this.layout.buttonB.enable().addEventListener("click",this._openContainer);
		this.layout.buttonC.enable().addEventListener("click",this._openContainer);
		
		this.layout.but1.enable().addEventListener("click",this._checkAnswers);
		this.layout.but2.enable().addEventListener("click",this._checkAnswers);
		this.layout.but3.enable().addEventListener("click",this._checkAnswers);
		this.layout.but4.enable().addEventListener("click",this._checkAnswers);
		this.layout.but5.enable().addEventListener("click",this._checkAnswers);

		this.reset();
	}

	Activity.prototype.reset = function () {
		var scope=this;
		this.first=false;
		this.third=false;
		this.third=false;
		this.currentPosition==0;
		this._object.forEach(function(name){
			this.layout[name].y=750;
		},this);
		
		this.a="Collision type:";
		this.b="Collision type:";
		this.c="Collision type:";
		this.currentPopup="startPop";
		
		this.stage.addEventListener("stagemousedown",function(){
			scope.layout.ansContainer.visible=false;
		});
		
		createjs.Tween.get(scope.layout.startPop, {override:true}).to({y:705}, 1000, createjs.Ease.linear);
		
		this.collision=false;
		createjs.Ticker.removeEventListener("tick",this._moveBall);
		
		this.layout.pauseButton.disable().visible=false;
		this.layout.playButton.enable().visible=true;
		this.layout.redBall.x=90.5;
		this.layout.greenBall.x=90.5;
		this.layout.purpleBall.x=90.5;
		this.layout.blueBall.x=574.4;
		this.layout.brownBall.x=574.4;
		this.layout.greyBall.x=574.4;
		this.layout.redBallV.text="0.00";
		this.layout.greenBallV.text="0.00";
		this.layout.purpleBallV.text="0.00";
		this.layout.blueBallV.text="0.00";
		this.layout.brownBallV.text="0.00";
		this.layout.greyBallV.text="0.00";
		
		this.layout.ansContainer.visible=false;
	}
	
	function clearpopup(){
		createjs.Tween.get(scope.layout[this.currentPopup]).to({y:750}, 1000, createjs.Ease.linear);
	}
	
	function checkAnswers(e){
		if(e.currentTarget.name=="but1"){
			this.selectedAns="Collision type:";
		}
		else if(e.currentTarget.name=="but2"){
			this.selectedAns="elastic";
		}
		else if(e.currentTarget.name=="but3"){
			this.selectedAns="cannot tell";
		}
		else if(e.currentTarget.name=="but4"){
			this.selectedAns="inelastic";
		}
		else{
			this.selectedAns="impossible";
		}
	
		if(this.currentPosition==1){
			this.layout.answer1.text=this.selectedAns;
			this.a=this.selectedAns;
			this.first=true;
		}
		else if(this.currentPosition==2){
			this.layout.answer2.text=this.selectedAns;
			this.b=this.selectedAns;
			this.second=true;
		}
		else{
			this.layout.answer3.text=this.selectedAns;
			this.c=this.selectedAns;
			this.third=true;
		}
		if(this.first==true && this.second==true && this.third==true){
		if(this.a=="Collision type:" && this.b=="Collision type:" && this.c=="Collision type:"){
			this._clearpopup();
			createjs.Tween.get(scope.layout.ABCPop, {override:true}).to({y:702}, 1000, createjs.Ease.linear);
			this.currentPopup="ABCPop";
		}
		else if(this.a=="cannot tell" && this.b=="cannot tell" && this.c=="cannot tell"){	
			this._clearpopup();
			createjs.Tween.get(scope.layout.ABCPop, {override:true}).to({y:702}, 1000, createjs.Ease.linear);
			this.currentPopup="ABCPop";
		}
		else if(this.a=="impossible" && this.b=="elastic" && this.c=="inelastic"){	
			this._clearpopup();
			createjs.Tween.get(scope.layout.correctPop, {override:true}).to({y:702}, 1000, createjs.Ease.linear);
			this.currentPopup="correctPop";
		}
		else if(this.a!=this.ANSWER_A && this.b!=this.ANSWER_B && this.c!=this.ANSWER_C){	
			this._clearpopup();
			createjs.Tween.get(scope.layout.ABCPop, {override:true}).to({y:702}, 1000, createjs.Ease.linear);
			this.currentPopup="ABCPop";
		}
		else if(this.a!=this.ANSWER_A && this.b!=this.ANSWER_B && this.c==this.ANSWER_C){	
			this._clearpopup();
			createjs.Tween.get(scope.layout.ABPop, {override:true}).to({y:702}, 1000, createjs.Ease.linear);
			this.currentPopup="ABPop";
		}
		else if(this.a!=this.ANSWER_A && this.b==this.ANSWER_B && this.c!=this.ANSWER_C){	
			this._clearpopup();
			createjs.Tween.get(scope.layout.ACPop, {override:true}).to({y:702}, 1000, createjs.Ease.linear);
			this.currentPopup="ACPop";
		}
		else if(this.a==this.ANSWER_A && this.b!=this.ANSWER_B && this.c!=this.ANSWER_C){	
			this._clearpopup();
			createjs.Tween.get(scope.layout.BCPop, {override:true}).to({y:702}, 1000, createjs.Ease.linear);
			this.currentPopup="BCPop";
		}
		else if(this.a!=this.ANSWER_A){	
			this._clearpopup();
			createjs.Tween.get(scope.layout.APop, {override:true}).to({y:702}, 1000, createjs.Ease.linear);
			this.currentPopup="APop";
		}
		else if(this.b!=this.ANSWER_B){	
			this._clearpopup();
			createjs.Tween.get(scope.layout.BPop, {override:true}).to({y:702}, 1000, createjs.Ease.linear);
			this.currentPopup="BPop";
		}
		else if(this.c!=this.ANSWER_C){	
			this._clearpopup();
			createjs.Tween.get(scope.layout.CPop, {override:true}).to({y:702}, 1000, createjs.Ease.linear);
			this.currentPopup="CPop";
		}
		else{	
			this._clearpopup();
			createjs.Tween.get(scope.layout.startPop, {override:true}).to({y:705}, 1000, createjs.Ease.linear);
			this.currentPopup="startPop";
		}
		}
		
	}
	
	function moveBall(){
		this._checkCollision();
		if(this.collision==false){
			
			this.layout.redBall.x=this.layout.redBall.x + (this.balls.redBall.beforeVelocity * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.greenBall.x=this.layout.greenBall.x + (this.balls.greenBall.beforeVelocity * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.purpleBall.x=this.layout.purpleBall.x + (this.balls.purpleBall.beforeVelocity * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.blueBall.x=this.layout.blueBall.x + (this.balls.blueBall.beforeVelocity * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.brownBall.x=this.layout.brownBall.x + (this.balls.brownBall.beforeVelocity * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.greyBall.x=this.layout.greyBall.x + (this.balls.greyBall.beforeVelocity * this.CONVERT_PIXEL * this.TIMESTEP);
			
			this.layout.redBallV.text=this.balls.redBall.beforeVelocity.toFixed(2);
			this.layout.greenBallV.text=this.balls.greenBall.beforeVelocity.toFixed(2);
			this.layout.purpleBallV.text=this.balls.purpleBall.beforeVelocity.toFixed(2);
			this.layout.blueBallV.text=this.balls.blueBall.beforeVelocity.toFixed(2);
			this.layout.brownBallV.text=this.balls.brownBall.beforeVelocity.toFixed(2);
			this.layout.greyBallV.text=this.balls.greyBall.beforeVelocity.toFixed(2);
		}
		else{
			this.layout.redBall.x=this.layout.redBall.x + (this.balls.redBall.afterVelocity * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.greenBall.x=this.layout.greenBall.x + (this.balls.greenBall.afterVelocity * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.purpleBall.x=this.layout.purpleBall.x + (this.balls.purpleBall.afterVelocity * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.blueBall.x=this.layout.blueBall.x + (this.balls.blueBall.afterVelocity * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.brownBall.x=this.layout.brownBall.x + (this.balls.brownBall.afterVelocity * this.CONVERT_PIXEL * this.TIMESTEP);
			this.layout.greyBall.x=this.layout.greyBall.x + (this.balls.greyBall.afterVelocity * this.CONVERT_PIXEL * this.TIMESTEP);
			
			this.layout.redBallV.text=this.balls.redBall.afterVelocity.toFixed(2);
			this.layout.greenBallV.text=this.balls.greenBall.afterVelocity.toFixed(2);
			this.layout.purpleBallV.text=this.balls.purpleBall.afterVelocity.toFixed(2);
			this.layout.blueBallV.text=this.balls.blueBall.afterVelocity.toFixed(2);
			this.layout.brownBallV.text=this.balls.brownBall.afterVelocity.toFixed(2);
			this.layout.greyBallV.text=this.balls.greyBall.afterVelocity.toFixed(2);
		}
		
		if(this.layout.redBall.x<6.5){
			this.layout.redBall.x=6.5;
			this.layout.redBallV.text="0.00";
			this.redBallReached=true;
		}
		
		if(this.layout.greenBall.x<6.5){
			this.layout.greenBall.x=6.5;
			this.layout.greenBallV.text="0.00";
			this.greenBallReached=true;
		}
		
		if(this.layout.purpleBall.x<6.5){
			this.layout.purpleBall.x=6.5;
			this.layout.purpleBallV.text="0.00";
			this.purpleBallReached=true;
		}
		
		if(this.layout.blueBall.x>979){
			this.layout.blueBall.x=979;
			this.layout.blueBallV.text="0.00";
			this.blueBallReached=true;
		}
		
		if(this.layout.brownBall.x>979){
			this.layout.brownBall.x=979;
			this.layout.brownBallV.text="0.00";
			this.brownBallReached=true;
		}
		
		if(this.layout.greyBall.x>979){
			this.layout.greyBall.x=979;
			this.layout.greyBallV.text="0.00";
			this.greyBallReached=true;
		}
		
		if(this.greenBallReached==true && this.brownBallReached==true && this.redBallReached==true && this.blueBallReached==true && this.greyBallReached==true && this.purpleBallReached==true){
			this.layout.pauseButton.disable();
			this.layout.playButton.enable().visible=true;
		}
	}
	
	function openContainer(e){
		if(e.currentTarget.name=="buttonA"){
			this.layout.ansContainer.x=65;
			this.layout.ansContainer.y=604;
			this.layout.ansContainer.visible=true;
			this.currentPosition=1;
		}
		else if(e.currentTarget.name=="buttonB"){
			this.layout.ansContainer.x=309;
			this.layout.ansContainer.y=604;
			this.layout.ansContainer.visible=true;
			this.currentPosition=2;
		}
		else{
			this.layout.ansContainer.x=555;
			this.layout.ansContainer.y=604;
			this.layout.ansContainer.visible=true;
			this.currentPosition=3;
		}
	}
	
	function checkCollision(){
		var p1={
			x:this.layout.redBall.x,
			y:this.layout.redBall.y
		}
		var p2={
			x:this.layout.blueBall.x,
			y:this.layout.blueBall.y
		}
		this.diff=Maths.getDistance(p1,p2);
		
		if(this.diff<=36.85){
			this.collision=true;
		}
	}
	
	function playClicked(e){
		
		if(this.greenBallReached==true && this.brownBallReached==true && this.redBallReached==true && this.blueBallReached==true && this.greyBallReached==true && this.purpleBallReached==true){
			this.running=false;
			this.collision=false;
			this.greenBallReached=false;
			this.brownBallReached=false;
			this.blueBallReached=false;
			this.purpleBallReached=false;
			this.redBallReached=false;
			this.greyBallReached=false;
			this.layout.redBall.x=90.5;
			this.layout.greenBall.x=90.5;
			this.layout.purpleBall.x=90.5;
			this.layout.blueBall.x=574.4;
			this.layout.brownBall.x=574.4;
			this.layout.greyBall.x=574.4;
			this.diff=0;
			this.first=false;
			this.third=false;
			this.third=false;
		}
	
		this._clearpopup();
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