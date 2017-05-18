//=======================================================
//	create desktop for user interaction
//=======================================================
game.interaction = function(director, scene, banner){

	var desktop = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);

	var aActorLabelAmp = null;

	var aActorAmp = null;
	var aActorVolt = null;
	var aActorBulb1 = null;
	var aActorBulb2 = null;

	var text1 = banner.childrenList[1];
	var conBanner = banner.childrenList[0];

	var inputBx = null;
	var distance = 50;

	var direction = function(xA, yA, xB, yB){
		var dir = Math.atan2(yB-yA,xB-xA);
		return dir
	};

	var radius = function(xA, yA, xB, yB){
		var magnitude = Math.sqrt(Math.pow((xA - xB),2) + Math.pow((yA - yB),2));
		return magnitude;
	};

	var createCircle = function (x, y, r){
		var circPath= new CAAT.PathUtil.ArcPath().initialize(x, y, r, Math.PI*2).setClockWise(true);
		var path= new CAAT.PathUtil.Path().addSegment(circPath).endPath();
		var pa= new CAAT.Foundation.UI.PathActor().setBounds(0, 0, director.width, director.height).setInteractive(true).setPath(path);
		return pa;
	};

	var isIntersectCircle = function(cx, cy, x, y, r){
		var rad = radius(x, y, cx, cy);
		if (r>=rad){
			return true;
		}else{
			return false;
		}
	};

	var isIntersectRects = function(rect1, rect2){
		var r0 = new CAAT.Math.Rectangle();
		var r1 = new CAAT.Math.Rectangle();
		var result = false;

		r0.setBounds(rect1.x, rect1.y, rect1.width, rect1.height);
		r1.setBounds(rect2.x, rect2.y, rect2.width, rect2.height);

		if(r0.intersects(r1)){
			result = true;
		}
		r0.setEmpty();
		r1.setEmpty();

		return result;
	};

	var cleanInput  = function()
	{
		this.select();
	}

	function addInputBox(){
		inputBx = document.createElement('input');
		inputBx.type = 'text';
		inputBx.style.position = 'absolute';
		inputBx.value = '??';
		inputBx.style.left = '363px';
		inputBx.style.top = '181px';
		inputBx.style.width = '50px';
		inputBx.id = 'inputBx';
		inputBx.onclick = cleanInput;
		inputBx.style.textAlign = 'center';
		var container = document.getElementById('act_controls');
		if (container)
			container.appendChild(inputBx);
	}

	function getActor(drag, x, y, id, imgname, row, column){
		return new CAAT.exemplarr().setBackgroundImage(
										new CAAT.Foundation.SpriteImage().
											initialize(director.getImage(imgname), row, column), true).
											enableEvents(drag).
											setSpriteIndex(0).
											setDefaultPos(x, y).
											userDrag(snap, check).
											setId(id);
	}

	var check = function(cActor, mouseEvent){
		if(!cActor.lock){
			cActor.reSetPosition();
		}
	};

	// desktop.addChild(createCircle(165, 343, distance));
	// desktop.addChild(createCircle(100, 279, distance));
	// desktop.addChild(createCircle(165, 214, distance));
	// desktop.addChild(createCircle(295, 214, distance));
	// desktop.addChild(createCircle(360, 279, distance));
	// desktop.addChild(createCircle(295, 343, distance));

	var snap = function(cActor, mouseEvent, x, y){
		cActor.x = mouseEvent.screenPoint.x-cActor.width/2;
		cActor.y = mouseEvent.screenPoint.y-cActor.height/2;

		if(!snapObj(165, 343, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c1')){
			if(!snapObj(100, 279, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c2')){
				if(!snapObj(165, 214, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c3')){
					if(!snapObj(295, 214, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c4')){
						if(!snapObj(360, 279, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c5')){
							if(!snapObj(295, 343, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c6')){
							}
						}
					}
				}
			}
		}

		if(cActor.lock){
			aActorLabelAmp.visible = true;
			aActorLabelAmp.setText(' 0.12 A ');
			aActorLabelAmp.setPosition(cActor.x+cActor.width+5, cActor.y);
		}else{
			aActorLabelAmp.visible = false;
		}
	};


	function snapObj(cx, cy, x, y, cActor, id){
		var intersect = isIntersectCircle(cx, cy, x, y, distance);
		var dir = direction(cx, cy, x, y);
		cActor.lock = false;
		if(intersect){
			if(id.match(/c[25]/g)){
				if(dir > 0 && dir < 3){
					cActor.setPosition(cx-cActor.width/2, cy + distance/2);
					cActor.lock = true;
				}else if(dir < -0 && dir > -3){
					cActor.setPosition(cx-cActor.width/2, cy - distance);
					cActor.lock = true;
				}
			}else{
				if(Math.abs(dir) > 0 && Math.abs(dir) < 1.5){
					cActor.setPosition(cx + distance/2, cy-11.5);
					cActor.lock = true;
				}else if(Math.abs(dir) > 1.5 && Math.abs(dir) < 3){
					cActor.setPosition(cx - distance, cy-11.5);
					cActor.lock = true;
				}
			}
		}
		return cActor.lock;
	};

	function calcCircuit(){
		var totalVolt = 12;
		var Resistors = new Array(1);

		Resistors[0] = 75;
		Resistors[1] = 30;

		var AB = Resistors[0] + Resistors[1];
		var totalCurrent = totalVolt/AB;

		var ABVolt = totalCurrent * AB;
		var ABCurrent = ABVolt/AB;

		var AVolt = ABCurrent * Resistors[0];
		var ACurrent = ABVolt / Resistors[0];

		var BVolt = ABCurrent  * Resistors[1];
		var BCurrent = ABVolt / Resistors[1];

		var powerA = Math.round((80 * (AVolt * ABCurrent))/2.88);
			powerA = ((isNaN(powerA) || powerA == 0) ? 1 : powerA);

		var powerB = Math.round((80 * (BVolt * ABCurrent))/2.88);
			powerB = ((isNaN(powerB) || powerB == 0) ? 1 : powerB);

		aActorBulb1.setSpriteIndex(powerA-4);
		aActorBulb2.setSpriteIndex(powerB-4);

	}

	/*Amp meeter*/
	aActorAmp = getActor(true, 260, 540, 'amp', 'amp', 1, 1);
	/*Volt meeter*/
	aActorVolt = getActor(true, 213, 535, 'volt', 'volt', 1, 1);

	/*Bulb1*/
	aActorBulb1 = getActor(false, 340, 290, 'bulb1', 'lightbulb', 8, 10);
	aActorBulb1.setPosition(18, 227);
	aActorBulb1.setRotationAnchored(4.7, 0.5, 0.5);

	/*Bulb2*/
	aActorBulb2 = getActor(false, 430, 200, 'bulb2', 'lightbulb', 8, 10);
	aActorBulb2.setPosition(243, 132);

	aActorLabelAmp =  game.textActor(director, ' 00.0 A ', 'Bold 14px Arial', 'left', '#000000');
	aActorLabelAmp.setSize(50,18);
	aActorLabelAmp.setFillStyle('#FFFFFF');
	aActorLabelAmp.visible = false;

	/*Reset Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorReset = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 4, 4, 5, 4,
						function(button){
							aActorAmp.reSetPosition();
							aActorLabelAmp.visible = false;
							aActorLabelAmp.setText('0.00 A');
							inputBx.value = '??';
							bannerUpdate(-1);
						}).setLocation(370, 535);
	/*Check Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorCheck = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 1, 1,
						function(button){

							if(parseFloat(inputBx.value) == 25){
								bannerUpdate(0)
							}else{
								bannerUpdate(1)
								inputBx.value = (isNaN(parseFloat(inputBx.value)) ? '0.0' : inputBx.value);
							}
							inputBx.style.textAlign = 'left';
						}).setLocation(370, 510);;



	function bannerUpdate(result){

		if(result == 0){
			conBanner.setSpriteIndex(1);
			text1.setText("<b>That is correct, great job!</b>");
		}else if(result == 1){
			conBanner.setSpriteIndex(2);
			text1.setText("<b>That is not the correct answer for <i>R</i><style=sub><i>2</i></style>.<br>Enter a new answer and press CHECK.</b>");
		}else{
			conBanner.setSpriteIndex(0);
			text1.setText('<b>Use the ammeter to determine the current.<br>Then determine</b> <i><b>R</b></i><style=sub><i>2</i></style> <b>resistance, enter this value<br>in the box, and press CHECK.</b>');
		}
		text1.setBounds(10, 10, banner.width-5, 50);

		var pathBehaviour = new CAAT.PathBehavior().
			setValues(new CAAT.Path().
			setLinear(-3, 0, -3, -70).
			setInteractive(false)).
			setDelayTime(0, 300);

		banner.addBehavior(pathBehaviour);
	}
	desktop.addChild(aActorReset);
	desktop.addChild(aActorCheck);

	desktop.addChild(aActorBulb1);
	desktop.addChild(aActorBulb2);
	desktop.addChild(aActorLabelAmp);
	desktop.addChild(aActorAmp);

	scene.addChild(desktop, 'desktop');
	calcCircuit();
	addInputBox();
}