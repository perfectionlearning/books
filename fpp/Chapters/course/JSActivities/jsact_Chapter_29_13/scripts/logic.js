//=======================================================
//	create desktop for user interaction
//=======================================================
game.interaction = function(director, scene, banner){

	var desktop = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);

	var aActorLabelVolt = null;
	var aActorLabelAmp = null;

	var aActorVolt = null;
	var aActorBulb1 = null;
	var aActorBulb2 = null;
	var aActorBulb3 = null;

	var inputBx1 = null;
	var inputBx2 = null;
	var inputBx3 = null;

	var AVolt = 0;
	var BVolt = 0;
	var CVolt = 0;

	var text1 = banner.childrenList[1];
	var conBanner = banner.childrenList[0];

	var distance = 50;

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

		var container = document.getElementById('act_controls');

		inputBx2 = document.createElement('input');
		inputBx2.type = 'text';
		inputBx2.style.position = 'absolute';
		inputBx2.value = '??';
		inputBx2.style.left = '141px';
		inputBx2.style.top = '67px';
		inputBx2.style.width = '50px';
		inputBx2.id = 'inputBx2';
		inputBx2.onclick = cleanInput;
		inputBx2.style.textAlign = 'center';
		if (container)
			container.appendChild(inputBx2);

		inputBx1 = document.createElement('input');
		inputBx1.type = 'text';
		inputBx1.style.position = 'absolute';
		inputBx1.value = '??';
		inputBx1.style.left = '398px';
		inputBx1.style.top = '196px';
		inputBx1.style.width = '50px';
		inputBx1.id = 'inputBx1';
		inputBx1.onclick = cleanInput;
		inputBx1.style.textAlign = 'center';
		if (container)
			container.appendChild(inputBx1);

		inputBx3 = document.createElement('input');
		inputBx3.type = 'text';
		inputBx3.style.position = 'absolute';
		inputBx3.value = '??';
		inputBx3.style.left = '360px';
		inputBx3.style.top = '378px';
		inputBx3.style.width = '50px';
		inputBx3.id = 'inputBx3';
		inputBx3.onclick = cleanInput;
		inputBx3.style.textAlign = 'center';
		if (container)
			container.appendChild(inputBx3);

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

	// desktop.addChild(createCircle(165, 348, distance));
	// desktop.addChild(createCircle(100, 284, distance));
	// desktop.addChild(createCircle(165, 219, distance));
	// desktop.addChild(createCircle(295, 219, distance));
	// desktop.addChild(createCircle(360, 284, distance));

	// desktop.addChild(createCircle(100, 155, distance));
	// desktop.addChild(createCircle(165, 90, distance));
	// desktop.addChild(createCircle(295, 90, distance));
	// desktop.addChild(createCircle(360, 155, distance));

	var snap = function(cActor, mouseEvent, x, y){
		cActor.x = mouseEvent.screenPoint.x-cActor.width/2;
		cActor.y = mouseEvent.screenPoint.y-cActor.height/2;

		aActorLabelVolt.setText(" 0.0 V ");
		if(!snapObj(165, 348, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c1')){
			if(!snapObj(100, 284, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c2')){
				aActorLabelVolt.setText(" " + BVolt.toFixed(1) + " V ");
				if(!snapObj(165, 219, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c3')){
					aActorLabelVolt.setText(" " + CVolt.toFixed(1) + " V ");
					if(!snapObj(295, 219, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c4')){
						aActorLabelVolt.setText(" 0.0 V ");
						if(!snapObj(360, 284, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c5')){
							aActorLabelVolt.setText(" 0.0 V ");
							if(!snapObj(100, 155, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c7')){
								aActorLabelVolt.setText(" 0.0 V ");
								if(!snapObj(165, 90, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c8')){
									aActorLabelVolt.setText(" " + AVolt.toFixed(1) + " V ");
									if(!snapObj(295, 90, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c9')){
									aActorLabelVolt.setText(" 0.0 V ");
									if(!snapObj(360, 155, mouseEvent.screenPoint.x, mouseEvent.screenPoint.y, cActor, 'c10')){
									aActorLabelVolt.setText(" 0.0 V ");
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
			aActorLabelVolt.visible = true;
			aActorLabelVolt.setPosition(cActor.x+cActor.width/2+20, cActor.y-10);
		}else{
			aActorLabelVolt.visible = false;
		}
	};

	function snapObj(cx, cy, x, y, cActor, id){
		var intersect = isIntersectCircle(cx, cy, x, y, distance);
		var dir = direction(cx, cy, x, y);
		cActor.lock = false;
		if(intersect){
			if(id.match(/c(2|7)/g)){
				cActor.setRotationAnchored(4.7, 0.5, 0.5);
				cActor.setPosition(cx-45, cy-20);
				cActor.lock = true;
			}else if(id.match(/c(10|5)/g)){
				cActor.setRotationAnchored(-4.7, 0.5, 0.5);
				cActor.setPosition(cx-85, cy-20);
				cActor.lock = true;
			}else{
				cActor.setRotationAnchored(0, 0.5, 0.5);
				cActor.setPosition(cx-cActor.width/2, cy);
				cActor.lock = true;
			}
		}else{
			cActor.setRotationAnchored(0, 0.5, 0.5);
		}
		return cActor.lock;
	};

	function calcCircuit(){
		var totalVolt = 12;

		AVolt = 12;
		var ACurrent = 0.3;

		BVolt = 4.0;
		var BCurrent = 0.4;

		CVolt = 8.0;
		var CCurrent = 0.4;

		var powerA = Math.round((50 * (AVolt * ACurrent))/2.88);
			powerA = ((isNaN(powerA) || powerA == 0) ? 1 : powerA);

		var powerB = Math.round((50 * (BVolt * BCurrent))/2.88);
			powerB = ((isNaN(powerB) || powerB == 0) ? 1 : powerB);

		var powerC = Math.round((50 * (CVolt * CCurrent))/2.88);
			powerC = ((isNaN(powerC) || powerC == 0) ? 1 : powerC);


		aActorBulb1.setSpriteIndex(powerB-8);
		aActorBulb2.setSpriteIndex(powerA-8);
		aActorBulb3.setSpriteIndex(powerC-8);
	}

	/*Volt meeter*/
	aActorVolt = getActor(true, 213, 535, 'volt', 'volt', 1, 1);

	/*Bulb1*/
	aActorBulb1 = getActor(false, 340, 290, 'bulb1', 'lightbulb', 8, 10);
	aActorBulb1.setPosition(114, 137);

	/*Bulb2*/
	aActorBulb2 = getActor(false, 430, 200, 'bulb2', 'lightbulb', 8, 10);
	aActorBulb2.setPosition(243, 7);

	/*Bulb3*/
	aActorBulb3 = getActor(false, 430, 200, 'bulb3', 'lightbulb', 8, 10);
	aActorBulb3.setPosition(243, 137);


	aActorLabelVolt =  game.textActor(director, ' 00.0 V ', 'Bold 14px Arial', 'left', '#000000');
	aActorLabelAmp =  game.textActor(director, ' 00.0 A ', 'Bold 14px Arial', 'left', '#000000');
	aActorLabelAmp.setFillStyle('#FFFFFF');
	aActorLabelVolt.setFillStyle('#FFFFFF');
	aActorLabelVolt.setSize(50, 18);

	aActorLabelVolt.visible = false;
	aActorLabelAmp.visible = false;

	/*Reset Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorReset = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 4, 4, 5, 4,
						function(button){
							aActorVolt.reSetPosition();
							aActorLabelVolt.visible = false;
							aActorLabelVolt.setText(' 0.00 V');

							inputBx1.value = "??";
							inputBx1.style.textAlign = 'center';
							inputBx2.value = "??";
							inputBx2.style.textAlign = 'center';
							inputBx3.value = "??";
							inputBx3.style.textAlign = 'center';
							bannerUpdate(-1, '');

						}).setLocation(370, 535);
	/*Check Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorCheck = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 0, 0, 1, 1,
						function(button){
							if(parseFloat(inputBx1.value) == 20 && parseFloat(inputBx2.value) == 0.3 && parseFloat(inputBx3.value) == 12){
								bannerUpdate(0, '');
							}else{
								var val1 = (isNaN(parseFloat(inputBx1.value)) ? '0.0' : inputBx1.value);
								var val2 = (isNaN(parseFloat(inputBx2.value)) ? '0.0' : inputBx2.value);
								var val3 = (isNaN(parseFloat(inputBx3.value)) ? '0.0' : inputBx3.value);
								var msg = '';

								inputBx1.value = val1;
								inputBx1.style.textAlign = 'left';
								inputBx2.value = val2;
								inputBx2.style.textAlign = 'left';
								inputBx3.value = val3;
								inputBx3.style.textAlign = 'left';

								if(val3 != 12 && val1 != 20 && val2 != 0.3){
									msg = "<b>Those are not the correct answers for <i><fontsize=18>" + String.fromCharCode(949) + "</fontsize></i><fontsize=14><i>, R</i><style=sub>3</style>, and <i>I</i></fontsize>";
								}else if(val3 == 12 && val1 != 20 && val2 != 0.3){
									msg = "<b>Those are not the correct answers for <i>R</i><style=sub>3</style> and <i>I</i>";
								}else if(val3 != 12 && val1 == 20 && val2 != 0.3){
									msg = "<b>Those are not the correct answers for <i><fontsize=18>" + String.fromCharCode(949) + "</fontsize></i><fontsize=14> and <i>I</i></fontsize>";
								}else if(val3 != 12 && val1 != 20 && val2 == 0.3){
									msg = "<b>Those are not the correct answers for <i><fontsize=18>" + String.fromCharCode(949) + "</fontsize></i><fontsize=14> and <i>R</i><style=sub>3</style></fontsize>";
								}else if(val3 == 12 && val1 == 20 && val2 != 0.3){
									msg = "<b>That is not the correct answer for <i>I</i>";
								}else if(val3 == 12 && val1 != 20 && val2 == 0.3){
									msg = "<b>That is not the correct answer for <i>R</i><style=sub>3</style>";
								}else if(val3 != 12 && val1 == 20 && val2 == 0.3){
									msg = "<b>That is not the correct answer for <i><fontsize=18>" + String.fromCharCode(949) + "</fontsize></i><fontsize=14>";
								}
								bannerUpdate(1, msg);
							}
						}).setLocation(370, 510);;

	function bannerUpdate(result, msg){

		if(result == 0){
			conBanner.setSpriteIndex(1);
			text1.setText("<b>That is correct, great job!</b>");
		}else if(result == 1){
			conBanner.setSpriteIndex(2);
			text1.setText(msg + ".<br>Enter new answers and press CHECK.</b>");
		}else{
			conBanner.setSpriteIndex(0);
			text1.setText("<b>Use voltmeter to help you determine the unknown <br>values. The voltmeter does not measure the <i><fontsize=18>" + String.fromCharCode(949) + "</fontsize></i><fontsize=14> of<br>the battery. Press CHECK to see if you are correct.</fontsize></b>");
		}

		text1.setBounds(10,10, conBanner.width-5, 10);

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
	desktop.addChild(aActorVolt);

	scene.addChild(desktop, 'desktop');
	calcCircuit();
	addInputBox();
}