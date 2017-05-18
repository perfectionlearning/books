var Lab = (function() {
	function Activity() {
		createjs.Container.call(this);
		this._unit = 1.5625e-9;
		this.d = 0;
		this.counter1 = 0;
		this.counter2 = 0;
		this.firstPlay = 0;
		this.secPlay = false;
		this.INDEXR1 = 25;
		this.INDEXR2 = 30;
		this.ARROWMAL = 6400;
		this.OUTOFPP = 13860;
		this.RIGHTLIMIT = 866;
		this.FOFFSETY = 22;
		this.FOFFSETY1 = 15;
	}
	
	Activity.prototype = Object.create(createjs.Container.prototype);
	Activity.prototype.constructor = Activity;
	
	Activity.prototype.startLab = function() {
		var scope = this;
		this.reset = this.reset.bind(this);
		this._play = enablePlay.bind(this);
		this._pause = enablePause.bind(this);
		this._mdown = mouseDown.bind(this);
		this._pmove = pressMove.bind(this);
		
		this.layout.resetButton.enable().addEventListener("click", this.reset);
		this.layout.playButton.enable().addEventListener("click",this._play);
		this.layout.pauseButton.enable().addEventListener("click",this._pause);
		this.layout.stepper1.enable().addEventListener("valueChange", function(e){
			scope.layout.inputcharge1.text = e.currentTarget.value;
			scope.layout.blueBall._charge = scope.layout.inputcharge1.text;
			if (counter1 + counter2 == 2) { scope._calculateForces(); }
		});
		this.layout.stepper2.enable().addEventListener("valueChange", function(e){
			scope.layout.inputcharge2.text = e.currentTarget.value;
			scope.layout.brownBall._charge = scope.layout.inputcharge2.text;
			if (counter1 + counter2 == 2) { scope._calculateForces(); }
		});
		
		rectangle1 = new createjs.Shape();
		lab.addChildAt(rectangle1 , this.INDEXR1);
		rectangle2 = new createjs.Shape();
		lab.addChildAt(rectangle2 , this.INDEXR2);
		
		
		this._calculateForces = calculateForces.bind(this);
		this._distanceBetweenBalls = distanceBetweenBalls.bind(this);
		
		this._forceDisplay1 = forceDisplay1.bind(this);
		this._forceDisplay2 = forceDisplay2.bind(this);
		
		this._objects = ["blueBall", "brownBall"];
		var arrows = ["arrow2", "arrow1"];
		var data = [{color:"brown"}, {color:"blue"}];
		var masses = [1, 1];
		var radius = [18, 18];
		this._pressMove = pressMove.bind(this);
		this._pressUp = pressUp.bind(this);
		this._enterFrame = enterFrame.bind(this);
		
		this._objects.forEach(function(name, i) {
			this.layout[name].on("pressmove",this._pressMove);
			this.layout[name].on("pressup",this._pressUp);
			var b = this.layout[arrows[i]];
			var s = new createjs.Shape();
			this.stage.addChildAt(b, 0).visible = true;
			this.stage.addChildAt(s, 0);
			var arrow = new VectorLine(b, {x:this.layout[name].regX, y:this.layout[name].regY}, {min:0, max:100}, {min:0, max:360}, s, data[i]);
			arrow.unit = this.ARROWMAL;
			arrow.magnitude = 0;
			arrow.angle = 0;
			this.layout[name]._arrow = arrow;
			this.layout[name]._charge = masses[i];
			this.layout[name]._line = s;
			this.layout[name]._radius = radius[i];
		}, this);
		
		this.reset();
	}
	
	function enablePlay() {
		counter1 = 0;
		counter2 = 0;
		firstPlay = 1;
		secPlay = true;
		Ticker.add({
			fps:60,
			callback:this._enterFrame,
		});
		this._objects.forEach(function(name, i){
			this.layout[name]._dragging = false;
			this.layout[name]._line.visible = false;
			this.layout[name]._arrow.visible = false;
		}, this);
		this.layout.pauseButton.enable();
		this.layout.pauseButton.visible = true;
		this.layout.playButton.visible = false;
		this.layout.stepper1.disable();
		this.layout.stepper2.disable();
		
		rectangle1.visible = false;
		rectangle2.visible = false;	
		this.layout.fdisplay1.visible = false;
		this.layout.fdisplay2.visible = false;
		this.layout.oForceValue1.visible = false;
		this.layout.oForceValue12.visible = false;
		this.layout.oForceValue2.visible = false;
		this.layout.oForceValue22.visible = false;
		this.layout.neuton1.visible = false;
		this.layout.neuton2.visible = false;
	}
	
	function enablePause() {
		Ticker.remove(this._enterFrame);
		Ticker.remove(this._play);
		this._objects.forEach(function(name, i){
			this.layout[name]._dragging = true;
			this.layout[name]._line.visible = true;
			this.layout[name]._arrow.visible = true;
		}, this);
		this.layout.playButton.visible = true;
		this.layout.pauseButton.visible = false;
		this.layout.stepper1.disable();
		this.layout.stepper2.disable();
		
		rectangle1.visible = true;
		rectangle2.visible = true;	
		this.layout.fdisplay1.visible = true;
		this.layout.fdisplay2.visible = true;
		this.layout.oForceValue1.visible = true;
		this.layout.oForceValue12.visible = true;
		this.layout.oForceValue2.visible = true;
		this.layout.oForceValue22.visible = true;
		this.layout.neuton1.visible = true;
		this.layout.neuton2.visible = true;
		
	}

	function pressUp(e) {	
		e.currentTarget._dragging = false;
		if (e.currentTarget.y > 710) {
			if(e.currentTarget == this.layout.blueBall) {
				counter1=0;
				this.layout.blueBall.x = 263;
				this.layout.blueBall.y = 738;
				if(secPlay == true) {
					this.reset();
				}
			}
			if(e.currentTarget == this.layout.brownBall) {
				counter2=0;
				this.layout.brownBall.x = 263;
				this.layout.brownBall.y = 778;
				if(secPlay == true) {
					this.reset();
				}
			}
		}
		else {
			if(e.currentTarget == this.layout.blueBall) {counter1 = 1;}
			if(e.currentTarget == this.layout.brownBall) {counter2 = 1;}
		}
		
		if (counter1 + counter2 == 2) {
			this._calculateForces();
			this.layout.pauseButton.enable();
			this.layout.playButton.enable();
			this._objects.forEach(function(name, i){
				this.layout[name]._line.visible = true;
				this.layout[name]._arrow.visible = true;
			}, this);
			rectangle1.visible = true;
			rectangle2.visible = true;	
			this.layout.fdisplay1.visible = true;
			this.layout.fdisplay2.visible = true;
			this.layout.oForceValue1.visible = true;
			this.layout.oForceValue12.visible = true;
			this.layout.oForceValue2.visible = true;
			this.layout.oForceValue22.visible = true;
			this.layout.neuton1.visible = true;
			this.layout.neuton2.visible = true;
		}
		else {
			this._objects.forEach(function(name, i){
				this.layout[name]._line.visible = false;
				this.layout[name]._arrow.visible = false;
			}, this);
			this.layout.distanceop1.text = "        --      ";
			this.layout.distanceop2.visible = false;
			//this.layout.playButton.disable();
			//this.layout.pauseButton.disable();
			rectangle1.visible = false;
			rectangle2.visible = false;	
			this.layout.fdisplay1.visible = false;
			this.layout.fdisplay2.visible = false;
			this.layout.oForceValue1.visible = false;
			this.layout.oForceValue12.visible = false;
			this.layout.oForceValue2.visible = false;
			this.layout.oForceValue22.visible = false;
			this.layout.neuton1.visible = false;
			this.layout.neuton2.visible = false;
		}
		if (firstPlay == 1) {
			Ticker.add({
				fps:60,
				callback:this._play,
			});
		}
	}
	
	function checkCollision(){
		var object1 = this.layout.blueBall;
		var object2 = this.layout.brownBall;
		var dist = Maths.getDistance(object1 , object2);
		if(dist <= (object1._radius + object2._radius)){
			this.layout.distanceop1.text = "       --      ";
			this.layout.distanceop2.visible = false;
			this.layout.pauseButton.disable();
			return true;
		}
		return false;
	}
	
	function enterFrame() {
		counter1 = 0;
		counter2 = 0;
		if ( (this.layout.blueBall.x > this.OUTOFPP) || (this.layout.blueBall.y > this.OUTOFPP) ||
		(this.layout.brownBall.x > this.OUTOFPP) || (this.layout.brownBall.y > this.OUTOFPP) ) {
			Ticker.remove(this._enterFrame);
			this.layout.playButton.disable();
			this.layout.pauseButton.disable();
		}
		
		this._calculateForces();
		var factor = (Math.abs(this.layout.blueBall._charge) + Math.abs(this.layout.brownBall._charge))/2;
		this._objects.forEach(function(name, i){
			var bool = checkCollision.call(this);
			var object = this.layout[name];
			if(!object._dragging && !bool){
				object.x += object._velocity.x;
				object.y += object._velocity.y;
				// Vector.add(object._velocity, object._arrow, object._velocity);
				var m = Math.max(1 , factor);
				object._velocity.x += object._arrow.x /(object._arrow.unit * m);//* this._unit * object._arrow.unit;
				object._velocity.y += object._arrow.y /(object._arrow.unit * m);//* this._unit * object._arrow.unit;
				// console.log(object._velocity.x)
			} else {
				// object._velocity.x = 0;
				// object._velocity.y = 0;
			}			
		}, this);
		if(checkCollision.call(this)){
			this._objects.forEach(function(name, i){
				var object = this.layout[name];
				object._velocity.x = 0;
				object._velocity.y = 0;
				// object._velocity.x = object._arrow.x * this._unit * object._arrow.unit;
				// object._velocity.y = object._arrow.y * this._unit * object._arrow.unit;
				// Vector.components(object._velocity.magnitude(), object._arrow.angle * Maths.TO_RADIANS, object._velocity);
			}, this);
			var ball1 = this.layout.blueBall, ball2 = this.layout.brownBall;
			var angle = Maths.getAngle(ball1 , ball2 , true);
			var _p = Maths.getPoint(ball2, angle ,(ball1._radius + ball2._radius - 1));
			ball1.x = _p.x ;
			ball1.y = _p.y ;
			ball1._arrow._baseVector.x = _p.x;
			ball1._arrow._baseVector.y = _p.y;
		}
		this._objects.forEach(function(name, i){
			this.layout[name]._arrow._baseVector.x = this.layout[name].x;
			this.layout[name]._arrow._baseVector.y = this.layout[name].y;
		}, this);
	}
	
	function mouseDown(e) {
		this.parent.addChild(e.currentTarget);
	}
	
	function pressMove(e) {
		if(e.currentTarget == this.layout.blueBall._arrow._bmp || e.currentTarget == this.layout.brownBall._arrow._bmp)
		{
			return;
		}
		var p = e.currentTarget.parent.globalToLocal(e.stageX, e.stageY);
		
		var ball1 ,ball2;
		if(e.currentTarget == this.layout.blueBall) {
			ball1 = this.layout.blueBall; 
			ball2 = this.layout.brownBall;
		}
		if(e.currentTarget == this.layout.brownBall) {
			ball1 = this.layout.brownBall; 
			ball2 = this.layout.blueBall;
		}
		ball1._dragging = true;
		ball1._velocity = new Vector(0,0);
		var dist = Maths.getDistance(p , ball2);
		if(dist <= (ball1._radius + ball2._radius)){
			var angle = Maths.getAngle(p , ball2 , true);
			var _p = Maths.getPoint(ball2, angle ,(ball1._radius + ball2._radius));
			ball1.x = _p.x ;
			ball1.y = _p.y ;
			e.currentTarget._arrow._baseVector.x = _p.x;
			e.currentTarget._arrow._baseVector.y = _p.y;
		} else {
			e.currentTarget.x = p.x;
			e.currentTarget.y = p.y;
			e.currentTarget._arrow._baseVector.x = p.x;
			e.currentTarget._arrow._baseVector.y = p.y;
		}
		if(this.layout.blueBall.y > 710 || this.layout.brownBall.y > 710) { 
			if(this.secPlay) {
				this.layout.distanceop1.text = "        --      ";
				this.layout.distanceop2.visible = false;
				this.layout.playButton.disable();
				this.layout.pauseButton.disable();
			}
			this._objects.forEach(function(name, i){
				this.layout[name]._line.visible = false;
				this.layout[name]._arrow.visible = false;
			}, this);
			rectangle1.visible = false;
			rectangle2.visible = false;	
			this.layout.fdisplay1.visible = false;
			this.layout.fdisplay2.visible = false;
			this.layout.oForceValue1.visible = false;
			this.layout.oForceValue12.visible = false;
			this.layout.oForceValue2.visible = false;
			this.layout.oForceValue22.visible = false;
			this.layout.neuton1.visible = false;
			this.layout.neuton2.visible = false;
		}
		else if(counter1 + counter2 == 2){ 
			this._calculateForces(); 
			this._forceDisplay1();
			this._forceDisplay2();
		}
		
		if (counter1 + counter2 == 2) {
			if(!this.secPlay) {
				this.layout.pauseButton.enable();
				this.layout.playButton.enable();
			}
			this.layout.distanceop2.visible = true;
			this._calculateForces();
			this._objects.forEach(function(name, i){
				this.layout[name]._line.visible = true;
				this.layout[name]._arrow.visible = true;
			}, this);
			rectangle1.visible = true;
			rectangle2.visible = true;	
			this.layout.fdisplay1.visible = true;
			this.layout.fdisplay2.visible = true;
			this.layout.oForceValue1.visible = true;
			this.layout.oForceValue12.visible = true;
			this.layout.oForceValue2.visible = true;
			this.layout.oForceValue22.visible = true;
			this.layout.neuton1.visible = true;
			this.layout.neuton2.visible = true;
		}
	}
	
	function calculateForces()
	{
		this.layout.distanceop2.visible = true;
		var KE = 8.99 * Math.pow(10,9);
		var i = 0, object, object2; 
		for(; i < this._objects.length; i++) {
			object = this.layout[this._objects[i]];
			object.forces = [];
			for(var j = 0; j < this._objects.length; j++){
				if(i != j){
					object2 = this.layout[this._objects[j]];
					d = Maths.getDistance(object2, object) * this._unit;
					
					if(object._charge * object2._charge == 0) {
						forceValue = 0;
					}
					else {
						forceValue = KE * object2._charge * object._charge / Math.pow(d, 2);
						forceValue = forceValue * Math.pow(10, -24);
					} 
					
					var angle = Maths.getAngle(object2, object, true) + Math.PI;
					if(angle < 0){
						angle = 2 * Math.PI + angle;
					}
					object.forces.push(Vector.components(forceValue, angle));
				}
			}
			var v = new Vector(0, 0);
			for(var j = 0; j < object.forces.length; j++){
				Vector.add(object.forces[j], v, v);
			}
			var a = Vector.angleBetween(v, new Vector()) * Maths.TO_DEGREES//v.angle();
			if(a < 0){
				a = 360 + a;
			}
			object._arrow.magnitude = v.magnitude();
			object._arrow.angle = a;
		}
		
		var absForce = Math.abs(forceValue);
		if(absForce == 0) {
			this.layout.oForceValue1.text = "0.00 × 10";
			this.layout.oForceValue12.text = "0";
			this.layout.oForceValue2.text = "0.00 × 10";
			this.layout.oForceValue22.text = "0";
		}
		else {
			var forceConvert = numberToPower(absForce);
			this.layout.oForceValue1.text = forceConvert.number.toFixed(2)+" × 10";
			this.layout.oForceValue12.text = forceConvert.power;
			this.layout.oForceValue2.text = forceConvert.number.toFixed(2)+" × 10";
			this.layout.oForceValue22.text = forceConvert.power;
		}
		this._distanceBetweenBalls();
		this._forceDisplay1();
		this._forceDisplay2();
	}
	
	function distanceBetweenBalls() {
		var distance2 = numberToPower(d);
		this.layout.distanceop1.text  = distance2.number.toFixed(2)+" × 10";
		this.layout.distanceop2.text  = distance2.power;
		this.layout.playButton.enable();
	}
	
	function forceDisplay1() {
		if(this.layout.blueBall.x > this.RIGHTLIMIT) {
			rectangle1.graphics.clear();	
			
			this.layout.fdisplay1.x = (this.layout.blueBall.x-149);
			this.layout.fdisplay1.y = (this.layout.blueBall.y+this.FOFFSETY);
			this.layout.oForceValue1.x = (this.layout.blueBall.x-97);
			this.layout.oForceValue1.y = (this.layout.blueBall.y+this.FOFFSETY);
			this.layout.oForceValue12.x = (this.layout.blueBall.x-56);
			this.layout.oForceValue12.y = (this.layout.blueBall.y+this.FOFFSETY1);
			this.layout.neuton1.x = (this.layout.blueBall.x-39);
			this.layout.neuton1.y = (this.layout.blueBall.y+this.FOFFSETY);
			rectangle1.graphics.beginFill("#ffffff").drawRect(this.layout.fdisplay1.x-16,this.layout.fdisplay1.y-10, 137, 37);
		}
		else{
			rectangle1.graphics.clear();	
			
			this.layout.fdisplay1.x = (this.layout.blueBall.x+53);
			this.layout.fdisplay1.y = (this.layout.blueBall.y+this.FOFFSETY);
			this.layout.oForceValue1.x = (this.layout.blueBall.x+104);
			this.layout.oForceValue1.y = (this.layout.blueBall.y+this.FOFFSETY);
			this.layout.oForceValue12.x = (this.layout.blueBall.x+146);
			this.layout.oForceValue12.y = (this.layout.blueBall.y+this.FOFFSETY1);
			this.layout.neuton1.x = (this.layout.blueBall.x+161);
			this.layout.neuton1.y = (this.layout.blueBall.y+this.FOFFSETY);
			rectangle1.graphics.beginFill("#ffffff").drawRect(this.layout.fdisplay1.x-16, this.layout.fdisplay1.y-10, 137, 37);
		}
	}
	
	function forceDisplay2() {
		
		if(this.layout.brownBall.x > 866) { 
			rectangle2.graphics.clear();
			
			this.layout.fdisplay2.x = (this.layout.brownBall.x-149);
			this.layout.fdisplay2.y = (this.layout.brownBall.y+this.FOFFSETY);
			this.layout.oForceValue2.x = (this.layout.brownBall.x-97);
			this.layout.oForceValue2.y = (this.layout.brownBall.y+this.FOFFSETY);
			this.layout.oForceValue22.x = (this.layout.brownBall.x-56);
			this.layout.oForceValue22.y = (this.layout.brownBall.y+this.FOFFSETY1);
			this.layout.neuton2.x = (this.layout.brownBall.x-39);
			this.layout.neuton2.y = (this.layout.brownBall.y+this.FOFFSETY);
			rectangle2.graphics.beginFill("#ffffff").drawRect(this.layout.fdisplay2.x -16, this.layout.fdisplay2.y-10, 137, 37);
		}
		else{
			rectangle2.graphics.clear();
			
			this.layout.fdisplay2.x = (this.layout.brownBall.x+53);
			this.layout.fdisplay2.y = (this.layout.brownBall.y+this.FOFFSETY);
			this.layout.oForceValue2.x = (this.layout.brownBall.x+104);
			this.layout.oForceValue2.y = (this.layout.brownBall.y+this.FOFFSETY);
			this.layout.oForceValue22.x = (this.layout.brownBall.x+146);
			this.layout.oForceValue22.y = (this.layout.brownBall.y+this.FOFFSETY1);
			this.layout.neuton2.x = (this.layout.brownBall.x+161);
			this.layout.neuton2.y = (this.layout.brownBall.y+this.FOFFSETY);
			rectangle2.graphics.beginFill("#ffffff").drawRect(this.layout.fdisplay2.x -16, this.layout.fdisplay2.y-10, 139, 37);
		}
	}
	
	
	Activity.prototype.reset = function() {
		counter1 = 0;
		counter2 = 0;
		firstPlay = 0;
		secPlay = false;
		this._objects.forEach(function(name, i){
			this.layout[name]._velocity = new Vector(0,0);
			this.layout[name]._dragging = false;
			this.layout[name]._line.visible = false;
			this.layout[name]._arrow.visible = false;
		}, this);
		
		this.layout.blueBall._charge = this.layout.stepper1.value;
		this.layout.brownBall._charge = this.layout.stepper2.value;
		
		Ticker.remove(this._enterFrame);
		Ticker.remove(this._play);
		this.layout.resetButton.enable();
		this.layout.playButton.disable();
		this.layout.pauseButton.disable();
		this.layout.playButton.visible = true;
		this.layout.pauseButton.visible = false;
		this.layout.stepper1.enable();
		this.layout.stepper2.enable();
		
		this.layout.distanceop1.text = "        --      ";
		this.layout.distanceop2.visible = false;
		rectangle1.visible = false;
		rectangle2.visible = false;	
		this.layout.fdisplay1.visible = false;
		this.layout.fdisplay2.visible = false;
		this.layout.oForceValue1.visible = false;
		this.layout.oForceValue12.visible = false;
		this.layout.oForceValue2.visible = false;
		this.layout.oForceValue22.visible = false;
		this.layout.neuton1.visible = false;
		this.layout.neuton2.visible = false;
		
		//this.layout.arrow1.visible = true;
		 this.layout.blueBall.x = 263;
		this.layout.blueBall.y = 738;
		this.layout.brownBall.x = 263;
		this.layout.brownBall.y = 778; 
		//this._calculateForces();
	}
	return Activity;
}) ();	