//=======================================================
//	create desktop for user interaction
//=======================================================
game.interaction = function(director, scene, banner){

	var desktop = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);

	var aActorLabelVolt = null;
	var aActorLabelAmp = null;

	var aActorAmp = null;
	var aActorVolt = null;
	var aActorBulb1 = null;
	var aActorBulb2 = null;
	var aActorBulb3 = null;

	var ABCurrent = 0;
	var CCurrent = 0;
	var totalCurrent = 0;

	var inputBx = null;
	var distance = 50;

	var text1 = banner.childrenList[1];
	// var text2 = banner.childrenList[2];
	// var text3 = banner.childrenList[3];
	// var text4 = banner.childrenList[4];
	var conBanner = banner.childrenList[0];


	var direction = function(xA, yA, xB, yB){
		var dir = Math.atan2(yB-yA,xB-xA);
		return dir
	};

	var radius = function(xA, yA, xB, yB){
		var magnitude = Math.sqrt(Math.pow((xA - xB),2) + Math.pow((yA - yB),2));
		return magnitude;
	};

	var isIntersectCircle = function(cx, cy, x, y, r){
		var rad = radius(x, y, cx, cy);
		if (r>=rad){
			return true;
		}else{
			return false;
		}
	};

	var createCircle = function (x, y, r){
		var circPath= new CAAT.PathUtil.ArcPath().initialize(x, y, r, Math.PI*2).setClockWise(true);
		var path= new CAAT.PathUtil.Path().addSegment(circPath).endPath();
		var pa= new CAAT.Foundation.UI.PathActor().setBounds(0, 0, director.width, director.height).setInteractive(true).setPath(path);
		return pa;
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
		inputBx.style.left = '364px';
		inputBx.style.top = '59px';
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


	var snap = function(cActor, mouseEvent, x, y){
		cActor.x = mouseEvent.screenPoint.x-cActor.width/2;
		cActor.y = mouseEvent.screenPoint.y-cActor.height/2;

		aActorLabelAmp.setText(totalCurrent.toFixed(2) + " A");
		if(!snapObj(165, 348, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c1')){
			if(!snapObj(100, 284, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c2')){
				aActorLabelAmp.setText(CCurrent.toFixed(2) + " A");
				if(!snapObj(165, 219, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c3')){
					if(!snapObj(295, 219, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c4')){
						aActorLabelAmp.setText(totalCurrent.toFixed(2) + " A");
						if(!snapObj(360, 284, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c5')){
							if(!snapObj(295, 348, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c6')){
								aActorLabelAmp.setText(ABCurrent.toFixed(2) + " A");
								if(!snapObj(100, 155, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c7')){
									if(!snapObj(165, 90, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c8')){
										if(!snapObj(295, 90, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c9')){
										if(!snapObj(360, 155, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c10')){
										}
										}
									}
								}
							}
						}
					}
				}
			}
		}

		if(cActor.lock){
			aActorLabelAmp.visible = true;
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
			if(id.match(/c(10|2|5|7)/g)){
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
		var Resistors = new Array(2);

		Resistors[0] = 20;
		Resistors[1] = 60;
		Resistors[2] = 10;

		var AB = Resistors[0] + Resistors[1];

		var ABVolt = totalVolt;
		ABCurrent = ABVolt/AB;

		var AVolt = ABCurrent * Resistors[0];
		var BVolt = ABCurrent * Resistors[1];

		var CVolt = totalVolt;
		CCurrent = CVolt/Resistors[2];

		totalCurrent = ABCurrent + CCurrent;

		var powerA = Math.round((80 * (AVolt * ABCurrent))/2.88);
			powerA = ((isNaN(powerA) || powerA == 0) ? 1 : powerA);

		var powerB = Math.round((80 * (BVolt * ABCurrent))/2.88);
			powerB = ((isNaN(powerB) || powerB == 0) ? 1 : powerB);

		var powerC = Math.round((80 * (CVolt * ABCurrent))/2.88);
			powerC = ((isNaN(powerC) || powerC == 0) ? 1 : powerC);

		aActorBulb1.setSpriteIndex(powerA-4);
		aActorBulb2.setSpriteIndex(powerB-10);
		aActorBulb3.setSpriteIndex(powerC);
	}

	/*Amp meeter*/
	aActorAmp = getActor(true, 260, 540, 'amp', 'amp', 1, 1);
	/*Volt meeter*/
	aActorVolt = getActor(true, 213, 535, 'volt', 'volt', 1, 1);

	/*Bulb1*/
	aActorBulb1 = getActor(false, 340, 290, 'bulb1', 'lightbulb', 8, 10);
	aActorBulb1.setPosition(114, 7);

	/*Bulb2*/
	aActorBulb2 = getActor(false, 430, 200, 'bulb2', 'lightbulb', 8, 10);
	aActorBulb2.setPosition(243, 7);

	/*Bulb3*/
	aActorBulb3 = getActor(false, 430, 200, 'bulb3', 'lightbulb', 8, 10);
	aActorBulb3.setPosition(243, 137);


	aActorLabelVolt =  game.textActor(director, ' 00.0 V ', 'Bold 14px Arial', 'left', '#000000');
	aActorLabelAmp =  game.textActor(director, ' 00.0 A ', 'Bold 14px Arial', 'left', '#000000');
	aActorLabelAmp.setFillStyle('#FFFFFF');
	aActorLabelAmp.setSize(50, 18);
	aActorLabelVolt.setFillStyle('#FFFFFF');

	aActorLabelVolt.visible = false;
	aActorLabelAmp.visible = false;

	/*Reset Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorReset = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 4, 4, 5, 4,
						function(button){
							aActorAmp.reSetPosition();
							aActorLabelAmp.visible = false;
							aActorLabelAmp.setText(' 0.00 A');
							inputBx.value = "??";
							inputBx.style.textAlign = 'center';
							bannerUpdate(-1);
						}).setLocation(370, 535);
	/*Check Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorCheck = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 1, 1,
						function(button){
							if(parseFloat(inputBx.value) == 60){
								bannerUpdate(0);
							}else{
								 inputBx.value = (isNaN(parseFloat(inputBx.value)) ? '0.0' : inputBx.value);
								bannerUpdate(1);
							}
							inputBx.style.textAlign = 'left';
						}).setLocation(370, 510);;


	function bannerUpdate(result){

		if(result == 0){
			conBanner.setSpriteIndex(1);
			text1.setText("<b>That is correct, great job!</b>");
		}else if(result == 1){
			conBanner.setSpriteIndex(2);
			text1.setText("<b>That is not the correct answer for <i>R</i>. <br>Enter a new answer and press CHECK.</b>");
		}else{
			conBanner.setSpriteIndex(0);
			text1.setText("<b>Use the ammeter to determine the currents in <br>this circuit. Calculate the resistance <i>R</i>, <br>enter this value in the box, and press CHECK.</b>");
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
	desktop.addChild(aActorBulb3);
	desktop.addChild(aActorLabelVolt);
	desktop.addChild(aActorLabelAmp);
	// desktop.addChild(aActorVolt);
	desktop.addChild(aActorAmp);

	scene.addChild(desktop, 'desktop');
	calcCircuit();
	addInputBox();
}