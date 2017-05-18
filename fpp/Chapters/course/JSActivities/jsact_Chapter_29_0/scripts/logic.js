//=======================================================
//	create desktop for user interaction
//=======================================================

game.interaction = function(director, scene, banner){

	var desktop = new CAAT.Foundation.ActorContainer().setBounds(0, 0, director.width, director.height);
	
	var r0 = new CAAT.Math.Rectangle();
	var r1 = new CAAT.Math.Rectangle();
	
	var aActorLabelVolt = null;
	var aActorLabelAmp = null;

	var aActorAmp = null;
	var aActorVolt = null;
	var aActorWire1 = null;
	var aActorWire2 = null;
	var aActorBulb1 = null;
	var aActorBulb2 = null;
	var aActorBulb3 = null;
	var aActorFixedBulb = null;
	var aActorWireBulb = null;
	var aActorTopLeftNode = null;
	var aActorTopRightNode = null;
	var aActorRightNode = null;
	var aActorLeftNode = null;
	
	var aActorBattery = null;
	var aActorLeft = null;
	var aActorRight = null;
	var aActorWireBulbDefault = null;
	
	var pt = new Array();
	var c1 = {wire:true, bulb:false, volt:false, amp:false, name:'c1', wname:'fwire', bname:'', x:100, y:284};
	var c2 = {wire:true, bulb:true, volt:false, amp:false, name:'c2', wname:'fixedbulb', bname:'fixedbulb', x:165, y:219};
	var c3 = {wire:true, bulb:false, volt:false, amp:false, name:'c3', wname:'fwire', bname:'', x:230, y:284};
	var c4 = {wire:false, bulb:false, volt:false, amp:false, name:'c4', wname:'', bname:'', x:100, y:155};
	var c5 = {wire:false, bulb:false, volt:false, amp:false, name:'c5', wname:'', bname:'', x:165, y:90};
	var c6 = {wire:false, bulb:false, volt:false, amp:false, name:'c6', wname:'', bname:'', x:230, y:155};
	var c7 = {wire:true, bulb:true, volt:false, amp:false, name:'c7', wname:'fwire', bname:'fbulb', x:165, y:350};
	
	pt.push(c7);
	pt.push(c6);
	pt.push(c5);
	pt.push(c4);
	pt.push(c3);
	pt.push(c2);
	pt.push(c1);
		
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
		var rad = radius(cx, cy, x, y);
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

	// desktop.addChild(createCircle(100, 284, distance));
	// desktop.addChild(createCircle(165, 219, distance));
	// desktop.addChild(createCircle(230, 284, distance));

	// desktop.addChild(createCircle(100, 155, distance));
	// desktop.addChild(createCircle(165, 90, distance));
	// desktop.addChild(createCircle(230, 155, distance));
	// desktop.addChild(createCircle(165, 350, distance));
	
	
	function snapbulbwire(cActor, cx, cy, dir, pos, c){
		
		if(cActor.id.match(/wire[0-9]/g)){
		
			if(!c.wire){
				if(pos == 1){
					cActor.setRotationAnchored(0, 0.5, 0.5);
				}else if(pos == 2){
					cActor.setRotationAnchored(-4.7, 0.5, 0.5);
				}else if(pos == 3){
					cActor.setRotationAnchored(4.7, 0.5, 0.5);
				}
				
				cx -= ((cActor.width/2)+1);
				cy -= 6;
				cActor.setPosition(cx, cy);
			
				
				cActor.lock = true;
				c.wire = true;
				c.wname = cActor.id;
			}else{
				cActor.lock = false;
				cActor.setRotationAnchored(0, 0.5, 0.5);
			}
		}else if(cActor.id.match(/bulb[0-9]/g)){
			if(c.wire && !c.bulb){
				if(pos == 1){
					cActor.setRotationAnchored(0, 0.5, 0.5);
					cx -= ((cActor.width/2)+1);
					cy -= (cActor.height - 22);
				}else if(pos == 2){
					cActor.setRotationAnchored(-4.7, 0.5, 0.5);
					cx -= ((cActor.width/3)-10);
					cy -= cActor.height/2;
				}else if(pos == 3){
					cActor.setRotationAnchored(4.7, 0.5, 0.5);
					cx -= ((cActor.width/2)+30);
					cy -= cActor.height/2;
				}
				cActor.setPosition(cx, cy);	
			
				
				cActor.lock = true;
				c.bulb = true;
				c.bname = cActor.id;
			}else{
				cActor.lock = false;
				cActor.setRotationAnchored(0, 0.5, 0.5);
			}
		}else if(cActor.id.match(/wirebulb/g)){
		
			if(!c.wire && !c.bulb){
				if(pos == 1){
					cActor.setRotationAnchored(0, 0.5, 0.5);
					cx -= ((cActor.width/2)+1);
					cy -= (cActor.height - 26);
				}else if(pos == 2){
					cActor.setRotationAnchored(-4.7, 0.5, 0.5);
					cx -= ((cActor.width/3)-5);
					cy -= (cActor.height/2);
				}else if(pos == 3){
					cActor.setRotationAnchored(4.7, 0.5, 0.5);
					cx -= ((cActor.width/2)+32);
					cy -= (cActor.height/2)+2;
				}
				cActor.setPosition(cx, cy);
				
				cActor.lock = true;
				c.bulb = true;
				c.wire = true;
				c.wname = cActor.id;
				c.bname = cActor.id;
			}else{
				cActor.lock = false;
				cActor.setRotationAnchored(0, 0.5, 0.5);
			}
		}
	}
	
	function snapamp(cActor, cx, cy, dir, pos, c){
		if(c.wire){
			if(pos == 1){
				if(Math.abs(dir) > 0 && Math.abs(dir) < 1.5){
					cActor.setPosition(cx + distance/2, cy-11.5);
					cActor.lock = true;
					c.amp = true;
				}else if(Math.abs(dir) > 1.5 && Math.abs(dir) < 3){
					cActor.setPosition(cx - distance, cy-11.5);
					cActor.lock = true;
					c.amp = true;
				}
				aActorLabelAmp.setLocation(cActor.x+cActor.width, cActor.y);
			}else if(pos == 2){
				if(dir > 0 && dir < 3){
					cActor.setPosition(cx-cActor.width/2, cy + distance/2);
					cActor.lock = true;
					c.amp = true;
				}else if(dir < -0 && dir > -3){
					cActor.setPosition(cx-cActor.width/2, cy - distance);
					cActor.lock = true;
					c.amp = true;
				}
				aActorLabelAmp.setLocation(cActor.x+cActor.width, cActor.y);
			}else if(pos == 3){
				if(dir > 0 && dir < 3){
					cActor.setPosition(cx-cActor.width/2, cy + distance/2);
					cActor.lock = true;
					c.amp = true;
				}else if(dir < -0 && dir > -3){
					cActor.setPosition(cx-cActor.width/2, cy - distance);
					cActor.lock = true;
					c.amp = true;
				}
				aActorLabelAmp.setLocation(cActor.x+cActor.width, cActor.y);
			}
		}else{
			cActor.lock = false;
			c.amp = false;
		}
	}
	
	function snapvolt(cActor, cx, cy, dir, pos, c){
		if(c.wire && c.name != 'c7'){
			if(pos == 1){
				cActor.setRotationAnchored(0, 0.5, 0.5);
				cActor.setPosition(cx-cActor.width/2, cy);
				cActor.lock = true;
				c.volt = true;
				aActorLabelVolt.setLocation(cActor.x+75, cActor.y-25);
			}else if(pos == 2){
				cActor.setRotationAnchored(-4.7, 0.5, 0.5);
				cActor.setPosition(cx-85, cy-20);
				cActor.lock = true;
				c.volt = true;
				aActorLabelVolt.setLocation(cActor.x+75, cActor.y-25);
			}else if(pos == 3){
				cActor.setRotationAnchored(4.7, 0.5, 0.5);
				cActor.setPosition(cx-45, cy-20);
				cActor.lock = true;
				c.volt = true;
				aActorLabelVolt.setLocation(cActor.x+75, cActor.y-25);
			}
		}else{
			cActor.lock = false;
			c.volt = false;
			cActor.setRotationAnchored(0, 0.5, 0.5);
		}
	}
	
	function snapObj(c, dir, cActor){
		var id = c.name;
		var cx = c.x;
		var cy = c.y;
		
		if(id.match(/c(2|5|7)/g)){
			if(cActor.id == 'amp'){
				snapamp(cActor, cx, cy, dir, 1, c);
			}else if(cActor.id == 'volt'){
				snapvolt(cActor, cx, cy, dir, 1, c);
			}else{
				snapbulbwire(cActor, cx, cy, dir, 1, c);
			}
		}else if(id.match(/c(3|6)/g)){
			if(cActor.id == 'amp'){
				snapamp(cActor, cx, cy, dir, 2, c);
			}else if(cActor.id == 'volt'){
				snapvolt(cActor, cx, cy, dir, 2, c);
			}else{
				snapbulbwire(cActor, cx, cy, dir, 2, c);
			}
		}else{
			if(cActor.id == 'amp'){
				snapamp(cActor, cx, cy, dir, 3, c);
			}else if(cActor.id == 'volt'){
				snapvolt(cActor, cx, cy, dir, 3, c);
			}else{
				snapbulbwire(cActor, cx, cy, dir, 3, c);
			}
		}
		return cActor.lock;
	};
	
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

	var check = function(cActor, holder){
	
	};
	
	function intersectionX(x, y){
		for(var i = 0; i<pt.length; i++){
			var intersect = isIntersectCircle(pt[i].x, pt[i].y, x, y, distance);
			var dir = direction(pt[i].x, pt[i].y, x, y);
			if(intersect){
				//console.log(pt[i]);
				return {instance:pt[i], directional:dir};
			}
		}
		return null;
	}
	
	function clearVariable(cActor){
		for(var i = 0; i<pt.length; i++){
			if(pt[i].bname == cActor.id){
				pt[i].bulb = false;
				pt[i].bname = "";
			}
			if(pt[i].wname == cActor.id){
				pt[i].wire = false;
				pt[i].wname = "";
			}
			if(cActor.id == 'volt'){
				pt[i].volt = false;
			}
			if(cActor.id == 'amp'){
				pt[i].amp = false;
			}
			cActor.lock = false;
		}
	}
	
	var snap = function(cActor, mouseEvent, x, y){
		
		cActor.x = mouseEvent.screenPoint.x-cActor.width/2;
		cActor.y = mouseEvent.screenPoint.y-cActor.height/2;

		var res = intersectionX(mouseEvent.screenPoint.x, mouseEvent.screenPoint.y);
		
		if(res != null)
		{
			clearVariable(cActor);
			snapObj(res.instance, res.directional, cActor);
		}else{
			if(cActor.lock){
				cActor.lock = false;
				cActor.setRotationAnchored(0, 0.5, 0.5);
				clearVariable(cActor);
			}
		}
		calcCircuit(cActor);
		return cActor.lock;
	};
	
	
	function calcCircuit(cActor){
	
		var totalVolt = 12;
		var Resistors = new Array(5);
		
		var circuitLock = ((c4.wire && c5.wire && c6.wire) ? true : false);
		
		Resistors[0] = ((c5.bulb && circuitLock) ? 50 : 0); // A
		Resistors[1] = ((c4.bulb && circuitLock) ? 50 : 0); // B
		Resistors[2] = ((c6.bulb && circuitLock) ? 50 : 0); // C
		Resistors[3] = (c2.bulb ? 50 : 0); // D
		Resistors[4] = (c1.bulb ? 50 : 0); // E
		Resistors[5] = (c3.bulb ? 50 : 0); // F
		
		var ABC = Resistors[0] + Resistors[1] + Resistors[2];
		var ABCD = 1/(isFinite(1/ABC) ? (1/ABC + (1/Resistors[3])) : (1/Resistors[3]));
		
		var ABCDEF = ABCD + Resistors[4] + Resistors[5];
		var totalCurrent = totalVolt / ABCDEF;
		
		var ABCDVolt = totalCurrent * ABCD;
		var ABCVolt = ABCDVolt;
		
		var abcCurrent = ABCVolt/ABC;
		
		
		
		var aVolt = abcCurrent * Resistors[0];

		var bCurrent = ABCDVolt/Resistors[1];
		var bVolt = abcCurrent * Resistors[1];
		
		var cVolt = abcCurrent * Resistors[2];
		
		var dVolt = ABCDVolt;
		var dCurrent = ABCDVolt/Resistors[3];
		
		var eVolt = totalCurrent * Resistors[4];
		
		var fVolt = totalCurrent * Resistors[5];
		var fCurrent = fVolt / Resistors[5];

		var powerA = Math.round((50 * (aVolt * abcCurrent))/2.88);
			powerA = ((isNaN(powerA) || powerA == 0) ? 1 : powerA);
		var powerB = Math.round((50 * (bVolt * abcCurrent))/2.88);
			powerB = ((isNaN(powerB) || powerB == 0) ? 1 : powerB);
		var powerC = Math.round((50 * (cVolt * abcCurrent))/2.88);
			powerC = ((isNaN(powerC) || powerC == 0) ? 1 : powerC);
		var powerD = Math.round((50 * (dVolt * dCurrent))/2.88);
			powerD = ((isNaN(powerD) || powerD == 0) ? 1 : powerD);
		var powerE = Math.round((50 * (eVolt * totalCurrent))/2.88);
			powerE = ((isNaN(powerE) || powerE == 0) ? 1 : powerE);
		var powerF = Math.round((50 * (fVolt * totalCurrent))/2.88);
			powerF = ((isNaN(powerF) || powerF == 0) ? 1 : powerF);
			
		// console.log([c5.bname, c4.bname, c6.bname, c2.bname, c1.bname, c3.bname, c3.bulb]);
		// console.log([powerA, powerB, powerC, powerD, powerE, powerF]);
		
		if(aActorVolt.snap){
			c = (c1.volt ? c1 : (c2.volt ? c2 : (c3.volt ? c3 : (c4.volt ? c4 : (c5.volt ? c5 : (c6.volt ? c6 : null))))));
			
			if(c != null){
				aActorLabelVolt.visible = true;
				if(c.name == 'c7'){
					aActorLabelVolt.setText(" 12.00 V ");
				}else if(c.name == 'c3'){
					fVolt = ((!isFinite(fVolt) || isNaN(fVolt)) ? 0 : fVolt);
					aActorLabelVolt.setText(" " + fVolt.toFixed(2) + " V ");
				}else if(c.name == 'c4'){
					bVolt = ((!isFinite(bVolt) || isNaN(bVolt)) ? 0 : bVolt);
					aActorLabelVolt.setText(" " + bVolt.toFixed(2) + " V ");
				}else if(c.name == 'c6'){
					cVolt = ((!isFinite(cVolt) || isNaN(cVolt)) ? 0 : cVolt);
					aActorLabelVolt.setText(" " + cVolt.toFixed(2) + " V ");
				}else if(c.name == 'c5'){
					aVolt = ((!isFinite(aVolt) || isNaN(aVolt)) ? 0 : aVolt);
					aActorLabelVolt.setText(" " + aVolt.toFixed(2) + " V ");
				}else if(c.name == 'c2'){
					ABCDVolt = ((!isFinite(ABCDVolt) || isNaN(ABCDVolt)) ? 0 : ABCDVolt);
					aActorLabelVolt.setText(" " + ABCDVolt.toFixed(2) + " V ");
				}else if(c.name == 'c1'){
					eVolt = ((!isFinite(eVolt) || isNaN(eVolt)) ? 0 : eVolt);
					aActorLabelVolt.setText(" " + eVolt.toFixed(2) + " V ");
				}else{
					aActorLabelVolt.setText(" 0.00 V ");
				}
			}else{
				aActorLabelVolt.visible = false;
			}
		}else{
			aActorLabelVolt.visible = false;
		}
		
		if(aActorAmp.snap){
			c = (c1.amp ? c1 : (c2.amp ? c2 : (c3.amp ? c3 : (c4.amp ? c4 : (c5.amp ? c5 : (c6.amp ? c6 : (c7.amp ? c7 : null)))))));
			
			if(c != null){
				aActorLabelAmp.visible = true;
				if(c.name == 'c7' || c.name == 'c3' || c.name=='c1'){
					totalCurrent = ((!isFinite(totalCurrent) || isNaN(totalCurrent)) ? 0 : totalCurrent);
					aActorLabelAmp.setText(" " + totalCurrent.toFixed(2) + " A ");
				}else if(c.name == 'c2'){
					dCurrent = ((!isFinite(dCurrent) || isNaN(dCurrent)) ? 0 : dCurrent);
					aActorLabelAmp.setText(" " + dCurrent.toFixed(2) + " A ");
				}else if(c.name == 'c5' || c.name == 'c4' || c.name == 'c6'){
					abcCurrent = ((!isFinite(abcCurrent) || isNaN(abcCurrent)) ? 0 : abcCurrent);
					aActorLabelAmp.setText(" " + abcCurrent.toFixed(2) + " A ");
				}else{
					aActorLabelAmp.setText(" 0.00 A ");
				}
			}else{
				aActorLabelAmp.visible = false;
			}
		}else{
			aActorLabelAmp.visible = false;
		}

		if(c5.bulb){findBulb(c5.bname).setSpriteIndex(powerA)}
		if(c4.bulb){findBulb(c4.bname).setSpriteIndex(powerB)}
		if(c6.bulb){findBulb(c6.bname).setSpriteIndex(powerC)}
		if(c2.bulb){findBulb(c2.bname).setSpriteIndex(powerD)}
		if(c1.bulb){findBulb(c1.bname).setSpriteIndex(powerE)}
		if(c3.bulb){findBulb(c3.bname).setSpriteIndex(powerF)}
		
		if(!cActor.lock && cActor.id.match(/bulb/g)){
			cActor.setSpriteIndex(1)
		}
	};
	
	function findBulb(name){
		
		if(name == aActorBulb1.id){
			return aActorBulb1;
		}else if(name == aActorBulb2.id){
			return aActorBulb2;
		}else if(name == aActorBulb3.id){
			return aActorBulb3;
		}else if(name == aActorWireBulb.id){
			return aActorWireBulb;
		}else if(name == aActorFixedBulb.id){
			return aActorFixedBulb;
		}else{
			return null;
		}
	};
	
	function isIntersect(rect1, rect2){
		r0.setBounds(rect1.x, rect1.y, rect1.width, rect1.height);
		r1.setBounds(rect2.x, rect2.y, rect2.width, rect2.height);
		
		if(r0.intersects(r1)){
			return true;
		}else{
			return false;
		}
	};
	
	(function(){
		var aActorDigram = getActor(false, 90, 80, 'digram', 'digram', 1, 1);
		aActorFixedBulb = getActor(false, 112, 136, 'fixedbulb', 'lightbulb', 8, 10);
		aActorFixedBulb.setSpriteIndex(50);

		desktop.addChild(aActorDigram);
		desktop.addChild(aActorFixedBulb);
		
	})();
	
	/*Amp meeter*/
	aActorAmp = getActor(true, 166, 543, 'amp', 'amp', 1, 1);
	/*Volt meeter*/
	aActorVolt = getActor(true, 213, 535, 'volt', 'volt', 1, 1);
	/*Wire1*/
	aActorWire1 = getActor(true, 370, 50, 'wire1', '130pixwire', 1, 1);
	/*Wire2*/
	aActorWire2 = getActor(true, 370, 100, 'wire2', '130pixwire', 1, 1);
	/*Bulb1*/
	aActorBulb1 = getActor(true, 340, 290, 'bulb1', 'lightbulb', 8, 10);
	/*Bulb2*/
	aActorBulb2 = getActor(true, 430, 200, 'bulb2', 'lightbulb', 8, 10);
	/*Bulb3*/
	aActorBulb3 = getActor(true, 340, 200, 'bulb3', 'lightbulb', 8, 10);
	/*Wire with Bulb*/
	aActorWireBulb = getActor(true, 370, 120, 'wirebulb', 'wiredbulb', 8, 10);
	
	aActorLabelVolt =  game.textActor(director, ' 00.0 V ', 'Bold 14px Arial', 'left', '#000000');
	aActorLabelAmp =  game.textActor(director, ' 00.0 A ', 'Bold 14px Arial', 'left', '#000000');
	aActorLabelAmp.setFillStyle('#FFFFFF');
	aActorLabelVolt.setFillStyle('#FFFFFF');
	//aActorLabel.setLocation(10, 14);
	aActorLabelVolt.visible = false;
	aActorLabelAmp.visible = false;
	
	/*Reset Button*/
	var btnImg = new CAAT.Foundation.SpriteImage().initialize(director.getImage('buttons'), 2, 3)
	var aActorReset = new CAAT.exemplarr().setAsButton(btnImg.getRef(), 4, 4, 5, 4, 
						function(button){
							aActorVolt.reSetPosition();
							aActorAmp.reSetPosition();
							aActorWire1.reSetPosition();
							aActorWire2.reSetPosition();
							aActorBulb1.reSetPosition();
							aActorBulb2.reSetPosition();
							aActorBulb3.reSetPosition();
							aActorWireBulb.reSetPosition();
							aActorLabelVolt.visible = false;
							aActorLabelAmp.visible = false;
							aActorLabelVolt.setText(' 0.00 V');
							aActorLabelAmp.setText(' 0.00 A');
							var pathBehaviour = new CAAT.PathBehavior().
								setValues(new CAAT.Path().
								setLinear(-3, 0, -3, -70).
								setInteractive(false)).
								setDelayTime(0, 300);
							banner.addBehavior(pathBehaviour);
							
							clearVariable(aActorVolt);
							clearVariable(aActorAmp);
							clearVariable(aActorWire1);
							clearVariable(aActorWire2);
							clearVariable(aActorBulb1);
							clearVariable(aActorBulb2);
							clearVariable(aActorBulb3);
							clearVariable(aActorWireBulb);
							aActorFixedBulb.setSpriteIndex(50);
								
						}).setLocation(370, 535);
	
	
	
	desktop.addChild(aActorReset);
	
	
	desktop.addChild(aActorWire1);
	desktop.addChild(aActorWire2);
	desktop.addChild(aActorBulb1);
	desktop.addChild(aActorBulb2);
	desktop.addChild(aActorBulb3);
	desktop.addChild(aActorWireBulb);
	desktop.addChild(aActorLabelVolt);
	desktop.addChild(aActorLabelAmp);
	desktop.addChild(aActorVolt);
	desktop.addChild(aActorAmp);
	
	scene.addChild(desktop, 'desktop');
}