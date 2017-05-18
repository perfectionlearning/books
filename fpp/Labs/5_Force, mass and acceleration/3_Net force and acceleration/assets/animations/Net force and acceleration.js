(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 808,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/img01.png", id:"img01"},
		{src:"images/img02.png", id:"img02"},
		{src:"images/img03.png", id:"img03"}
	]
};



// symbols:



(lib.img01 = function() {
	this.initialize(img.img01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,44);


(lib.img02 = function() {
	this.initialize(img.img02);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,15,43);


(lib.img03 = function() {
	this.initialize(img.img03);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,27,30);


(lib.wings = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A0000").s().p("AAAAFQgFgBABgEQABgFADABIABAAQAFABgBADQgBAFgEAAIAAAAg");
	this.shape.setTransform(-67.6,-12.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#808080").s().p("AjZgdIADgNIGwBIIAAANg");
	this.shape_1.setTransform(-22.1,-4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#840701").s().p("AjDgbIACgNICYAbQgFAAgBAFQgBAGAGABQAFABACgGQABgFgGgCIDsApIgDANg");
	this.shape_2.setTransform(-63.3,-11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#961004").s().p("AjBgaIADgPIGABEIgDAOg");
	this.shape_3.setTransform(63.6,11.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#808080").s().p("AjggkIAAgNIHBBUIgDAPg");
	this.shape_4.setTransform(21.9,3.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-82.9,-15.7,166,31.4);


(lib.Symbol4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADC1IgDAAIgCAAIk4AAQh9AAAAh9IAAhvQAAh9B9AAIE4AAIACAAIADAAIE4AAQB9AAAAB9IAABvQAAB9h9AAg");
	this.shape.setTransform(270.5,0.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(226.5,-17.9,88.1,36.3);


(lib.patch = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgRAKIAEgaIAfAGIgFAbg");

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.9,-1.7,3.8,3.6);


(lib.gr_ch_forarm_Lcopy_new_031 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AEcnKQAKBggZCEQguDmkcIFAkeHKIBJmaQAMhMAXiEQACgJACgKQACgMACgOQAHgmBHj+QABgJACgK");
	this.shape.setTransform(-1.5,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBA75").s().p("AjBImQAuiUA5iIQA5iIBKjUQA9isAkjHQAJgvAHgxIADAAQAbAzAHBHQALBfgaCEQgtDnkcIEQAAADgUAAIgUAAg");
	this.shape_1.setTransform(7.7,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9C6C").s().p("AAAABIAAgBIABABg");
	this.shape_2.setTransform(23.3,-52.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC488").s().p("AkKIQIBImaIAkjQIAEgTIAEgaQAHgmBHj+IACgSQAPAQAUgnIAFgKIAFgIQAZggAWgYQA5goA/gHQAzAFApAkIACACQARAOAOATIAAADQgIAxgIAwQgkDGg+CtQhMDUg5CIQg3CIguCTQiIgNgxgwg");
	this.shape_3.setTransform(-3.5,-0.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.2,-59.8,59.5,118.7);


(lib.gr_Ch_Body_01_021 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("AEnnJIACAfQAAAhgYBPQgjByg+BoQi+E8lyBpAGBixQgZBnhGB1QiJDqkJC1");
	this.shape.setTransform(4.5,54.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AFSpTIACAfQAAAigYBPQgjByg+BoQi/E7mYFRAF7nyQAPFchtDUQhtDVkEFB");
	this.shape_1.setTransform(0.2,68.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("ADN1EIgsghIgXgLIAFAdQADALgBALQAAABgBABQgBAFgBAGQgFARgPASIAAAAQgTAXgjAYQhAArhOASIgKACQgFABgGABQgIABgIACQgQACgRABQgfADghgBQiigFg+g8Qg9g8AFgyIhFAaQgMCVCtA6QBFAYBFAIQAMABAKABQAGAAAGABQANAAANABQAGAAAGAAIAAAAQALAAAKAAQAlgBAmgFQAxgGAqgPQBkghBHhJQAWgVAKgYQAAgBABAAIAAgBQARgpgRgwIA3AQQHRCBAPA1IAAAAIgEgHAJlt5IgHBfIAAAGIgBAHIAAABQAAAEAAADQAAAGgBAHQABABgBABQAAAIAAAJQgCA0gCEHQAAAkAAAjIACCRQACAmACAjQAEA4AFAuQABAIABAIQAEAcADAcIAAABQAFAnAEAjQAFA1ADAtQAAAFABAFQAZCZAeCqQABAJACAJIAAAAIAFAcQABAEABAFQADAMADAOQAAACABACQACANAEAPIACAOIAGAZAK4IgIACAKIACAMIAHAkIAJArIAAgBQAAACAAACQACAFABAFIgXhrQgKg1AIAkIACAKIAAAAIAEARALMKFIABACIAJAxIBZG7QgGAoguASIgchbIAABvQizA7imAnQhRAUhPAOQgQADgRADQjvAqjTgFQgkAAgjgCQhogHhggSQhagRhTgbIAAqHIgitSALBJNQABAGABAHALPKSQABAKACAKQABABAAABQABAIACAIALNKHIALAwAsZtHIAWByIAPEaIAZEKAot0qIkBBc");
	this.shape_2.setTransform(-1.1,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C8CFD").s().p("AAGU0QhQgThbgZIAAqHIghtSIAAgBIgakKIgPkaIgWhyQhOldA6gqIEBhcQgMCVCrA6QBEAYBGAIIAWACIAMAAQgeAfhaCcQhUCThfEbIgCAOQAAALgGA2QgJA2AAAKQAAALgIA3QgJA3AAALQAAD+AzEAQANBAAWBlQARBOAAAoQAAAFgNBNQgNBNAAB0QAAB7BCCqQAcBHA+CSQhogGhhgSgABJrSQgKAZAAALIgSA2QgSA2AAAHIgBAGQAyifgCAAIgBACg");
	this.shape_3.setTransform(-54.3,36.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002B2B").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(19.4,-92.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#016564").s().p("AAAAAIAAAAIAAAAg");
	this.shape_5.setTransform(11.3,-96.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("ArSS0QBaAZBTATQhagRhTgbgAK0ISIALAwIgCAAgAK/JCIgLgwIgBgCIgJgrIgCgNIACAJIAEASIAHAiIABAEIADAQIAGAZgAK/JCgAKjHBIgBgGIgBgGIgCgKIAEARIAAAAIAFAcIACANgAKoHYIgFgcIAAAAIgDgSIg3lDIgBgLIACAPIA5FRIAFAaIACALIgCgJgAKjG8gAKfGrIAAAAIAAAAIACAKQgBgEgBgCQAAgCAAAAQgBgBABACQAAABAAACQgLg0AJAkIACAKIABgBIADASgAKjG8IAAAAgAKfGrgAKfGrgAKfGrgALQzfQAGACgEAGg");
	this.shape_6.setTransform(1.4,44.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003333").s().p("AAAgCIAAADIABACg");
	this.shape_7.setTransform(72.8,-82.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D2D202").s().p("AhaSzIiGAiIghAGQBlgpBCABgACVuEIACAAIgCAHgAECzaIAAAAIgCABIACgBg");
	this.shape_8.setTransform(44.6,44.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#45A2FE").s().p("Al9VaIhGgCQg+iTgchHQhCiqAAh7QAAh0ANhNQAMhNAAgFQAAgogQhOQgXhlgNhAQg0kAAAj+QAAgLAJg3QAIg3AAgLQAAgKAIg2QAJg2AAgLIACgOQBfkbBUiTQBaicAegeIAZABIAMAAIAAAAIAWAAQAkgBAmgFQAxgGAsgPQBkghBFhJQAXgVAKgYIAAAAIAAgBIAAgBQARgpgQgwIA3AQQHQCBAPA1IABAFIAFAPIACAIQALAvgBArQAAAhgIAgQgXBjhDAnQgsAZgKAKIAHhfIgHBfQgFAFAEABIABAAIgBAHIAAABIAAAHIAAANIAAACIgBARQgCA0gCEHIABBHIABCRIAEBJQAEA4AFAuIACAQIAIA4IAAABIAIBKQAGA1ACAtIABAKIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIAAACIADAQIABAAIBYG7QgGAoguASIgchbIAABvQizA7imAnQhRAUhPAOICHgiQhCgChlAqQjYAmjBAAIgqgBgAJJx/IACgBIgBAAIgBABgAp3owQgBgHATg2IASg2QAAgLAKgZQAIgTg3CxIABgHgAI7zvIACADIAKAXg");
	this.shape_9.setTransform(11.7,35.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AB6C43").s().p("AgOCcIgLAAIgagCIgMAAIgWgCQhGgIhEgYQitg6AMiTIBEgaQgEAyA9A8QA9A6CjAFQAhAAAdgCIAggEIARgCIALgCIAKgCQBPgSBAgpQAkgYATgXIABAAIgBgBQAOgSAFgQIACgLIABgCIgCgUIAAgCQADAIAAAIIgBAGIABgGQAAgIgDgIIgEgdIAWALIAtAhQAQAwgRApIAAABIgBABIABAAQgKAWgWAVQhIBJhjAhQgsAOgyAHQglAFglABIgTAAg");
	this.shape_10.setTransform(-18.3,-90.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#A06B4B").ss(1,1,1).p("AAAAAIAAAA");
	this.shape_11.setTransform(-30,-72.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AiAFUQgMgCgMgCQgOgEgOgEQg1gRgugcQiYhiA9g8QAfgeADgoQAhggAGgoIAAhJQABgBAHhMQC2iDFTgwQACBFAHAZQgBAvABAPQASCqAxAfQBFAuALA4Qg8CPiqA6QgeAKgiAHQh4AbhlgS");
	this.shape_12.setTransform(-17.1,-106.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFC184").s().p("AAAACIABgDIgBADg");
	this.shape_13.setTransform(-30,-72.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC9C6C").s().p("Ag2FUIABgEIgCAEIgYgEIgcgIQg0gRgvgcQiXhiA9g8QAfgeADgoQAhggAFgoIAAhJQABgBAIhMQC1iDFUgwQABBFAIAZIi3DjQgwA0gXBDQgiBiB7AGIAGAPIgQAgIAKALIBVAQIAHAKIgLAgQgeAKghAHQhKAQhCAAQgpAAgpgHg");
	this.shape_14.setTransform(-24.5,-106.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFC488").s().p("AgPD8IgGgLIhWgPIgKgLIARggIgHgQQh6gFAihiQAWhBAwg2IC1jkQgBAvABAQQASCqAxAhQBFAsALA4Qg8CPioA5g");
	this.shape_15.setTransform(1.4,-103.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AoHyrQAcgjApAJQgFAyA9A8QA+A8CiAFQBCACA6gMIAKgCQBOgSBAgrQAjgYATgXIAAAAQALgOAGgNQABgDABgCQAAgCABgBQABgGABgFQABgBAAgBQAAgFgCgPQAAgBAAgBIghhRQAdgMAxAtQAaAiABAxQAAAEAAADQAAADAAACQgCAbgIAeIAAABQgBAAAAABQgKAYgWAVQhHBJhkAhQgqAPgxAGQhLAJhHgFQgKgBgMgBQhFgIhFgYQitg6AMiVIhGAZQisBOgpAnADi0EQCzANCoA5QADABADABQAGACAFACQARAGARAGAJ7p/QAAAAAAAAQAJgNADgOQABgBAAgBQAAgCAAgDQABgJAEgIAJ7p/IgBACIAJgQQAAAKgBAKQABABgBABQAAAIAAAJQAAABAAABQgCAzgCAxQAAATgBASQgECkAACDQABD4AVB+QAMBKANBPQAZCZAeCqQABAJACAJAJ7p/IAAAAQgDAEgDAEAJ7p/IADgcIANhfAJwysQAwATAvAWALeKfIACAKIACAMIAHAkIAJArIABACIALA6IgCgHQgBgJgCgJQAAgBgBgBQgCgKgCgKALnLMIgFgcIAAAAIgEgRIAAAAIgCgKQgIgkAKA1IAWBrAMBNFIgJgoIgCgOQgEgPgCgNQgBgCAAgCQgDgOgDgMQgBgEgBgFALyMEIAAgBQABAHABAHALpLZQgBgGgBgHAL+NAIABADIAAABIACALAGSUXQDEgkA4gUQAFgCAEgCQATgHASgJQBbgjAKhKQAHgxgQhqQgHgwgNg8QAAgCAAgCIAAgBQgBgFgCgGIAAgBIgOhAAMCNUIgBgFAMCNTIgBgEArzrIIAWByIBKHMQgCB7gFB+QgECAAMG8QABAggrDcQgsDcA+BJQA+BJCFgMQAUACAUACQISAxE+gnQABAAAAAAQAAAAgBAAQADAAACAAQgCAAgCAA");
	this.shape_16.setTransform(-4.9,20.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("Aj1kgQADALgBALAD2EfQgBABgBABQgEAAgOgH");
	this.shape_17.setTransform(37.9,-74.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D2D202").s().p("AAAAAIABAAIgBAAg");
	this.shape_18.setTransform(44.6,131.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BFD8E1").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAg");
	this.shape_19.setTransform(59.3,-41);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#80AFC4").s().p("ABCL1IACAAIAAAEIgCABgAhAr5IAJACQgDANgJANIAAAAg");
	this.shape_20.setTransform(65.5,29.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFF00").s().p("Ai4PZIABAAIgBAAgAC2IQIABAFIAAAAgAC0IFIgBgEIgLg5IAOBAIABABIACALIAAAAIgCAAIAAAAgAC2IIIAAgBIABACgACoHIIgBgCIgJgrIgCgNIACANIgHglIgBgFIgBgHIgCgKIACAKQgBgDgBgCQAAgCAAAAQAAgBAAABQAAABABADQgLg1AIAkIACAKIAAAAIAEARIAAABIAFAcIgFgcIAAgBIgDgRIg3lEIgZiWQgVh+gBj7QAAiCAEikIABglIAEhkIAAgCIAHgNIgEByIgCAlQgFCkAACDQABEPAVCEIAVCBIA5FRIAFAaIACAKIAEASIAHAjIABAEIAEAPIAIAoIAAACgACeGWIgCgIIACAIgACXFxIAAAAgACXFxgACTFgIAAAAIABAAIADARgAA4u4IAAgTIgJAQIABgCIAAAAIAAAAQAJgOADgNIAHACIgCAHIAAAFIgCAOIABgNIgEAPIgEACIAAACIAAgCgABDvWQAOAHAEAAIgTAPQACgLgBgLg");
	this.shape_21.setTransform(53.8,52.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#002B2B").s().p("AAAAAIAAAAIAAAAg");
	this.shape_22.setTransform(19.4,-92.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#017676").s().p("AAAAAIAAAAIAAAAg");
	this.shape_23.setTransform(11.3,-96.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#45A2FE").s().p("Am3T7IgpgEQiFAMg9hJQg+hJArjcQAsjcgBggQgNm8AFiAQAFh+ACh7IhLnMIgWhyQhdjoAuhtQAqgnCrhOIBHgZQgMCVCtA6QBEAYBGAIIAWACQBHAFBKgJQAwgGAsgPQBjghBIhJQAWgVAKgYIAAAAIAAgBIAAgBQAJgeABgbIABgFIAAgHQgBgxgagiQCzAOCoA4IAGACIALAEIAiAMIAAAAQAwATAvAWIARApQADACALAVQAJASAEAKIABAEIAAAAQAIAVAHAUIADAKIABAFQAFACgDAGIABAGIABAAIAEAVQAFAhAAAeIgCAZQgCAVgEATQgYBjhbBTIgCABQgEABgOgIIgGgCIAAgCIABgFQABgIAEgJQgEAJgBAIIgBAFIAAACIgJgBIANhfIgNBfIgEAcIAAAAIgGAIIAGgIIAAACIAJgQIgBAUIAAACIgIAbIAGgIIAAAAIgBACIABgCIABAAIgDBkIgBAlQgFCkABCDQABD4AUB+IAZCZIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIABACIADASIACAHIAAADIAAABIACALIABAFIAAAAIABABIAAACIACAAQAMA8AIAwQAQBqgHAxQgLBKhbAjIgkAQIgJAEQg4AVjEAjIgBAAQiMASi2AAQjlAAkpgcgAH1RHIACgCIAAAAgAKCqRg");
	this.shape_24.setTransform(-5.6,22.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#016564").s().p("AgKAiIAAAAIACABgAAJggIAAgBQADAKgBALIgCgUg");
	this.shape_25.setTransform(12.3,-99.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AB6C43").s().p("AhAC1IgWgCQhGgIhEgXQitg7AMiTQAbgjApAJQgEAzA9A5QA9A8CjAFQBAACA6gMIAKgCQBPgRBAgrQAkgWATgYIABABIAAAAIgBgBQALgOAGgNIABgFIABgDIACgKIABgDQABgLgDgKIghhSQAegLAxAtQAaAiABAwIAAAIIgBAEQgBAbgJAdIAAAAIgEAAIgBABIAFABQgKAXgWAWQhIBJhjAgQgsAPgyAHQguAFgrAAQgbAAgbgCg");
	this.shape_26.setTransform(-18.2,-93.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AiAFUQgMgCgMgCQgOgEgOgEQg1gRgugcQiYhiA9g8QAfgeADgoQAhggAGgoIAAhJQABgBAHhMQC2iDFTgwQACBEAHAaQgBAvABAPQASCqAxAfQBFAuALA4Qg8CPiqA6QgeAKgiAHQh4AbhlgS");
	this.shape_27.setTransform(-17,-106.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC9C6C").s().p("Ag2FUIABgEIgCAEIgYgEIgcgIQg0gRgvgcQiXhiA9g8QAfgeADgoQAhggAFgoIAAhJQABgBAIhMQC1iDFUgwQABBEAIAaIi3DjQgwA0gXBDQgiBiB7AGIAGAPIgQAgIAKALIBVAQIAHAKIgLAgQgeAKghAHQhKAQhCAAQgpAAgpgHg");
	this.shape_28.setTransform(-24.4,-106.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFC488").s().p("AgPD8IgGgLIhWgPIgKgLIARggIgHgQQh6gFAihiQAWhBAwg2IC1jkQgBAwABAPQASCqAxAhQBFAsALA4Qg8CPioA5g");
	this.shape_29.setTransform(1.5,-103.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AoHyrQAcgjApAJQgFAyA9A8QA+A8CiAFQBCACA6gMIAKgCQBLgRA+goQACgCADgCQAjgYATgXIAAAAQALgOAGgNQABgDABgCQAAgCABgBQABgGABgFQABgBAAgBQAAgFgCgPQAAgBAAgBIghhRQAdgMAxAtQAaAiABAxQAAAEAAADQAAADAAACQgCAbgIAeIAAABQgBAAAAABQgKAYgWAVQgYAZgcAVQgDACgDACQgzAkg+AUQgqAPgxAGQhLAJhHgFQgKgBgMgBQhFgIhFgYQitg6AMiVIhGAZQisBOgpAnADi0EQCzANCoA5QADABADABQAGACAFACQARAGARAGAJ7p/QAAAAAAAAQAJgNADgOQABgBAAgBQAAgCAAgDQABgJAEgIAJ7p/IgBACIAJgQQAAAKgBAKQABABgBABQAAAIAAAJQgCA0gCAyQAAATgBASQgECkAACDQABD4AVB+QAMBKANBPQAZCZAeCqQABAJACAJIgEgRIACAKIACAMIAHAkIAJArIABACIAOBAIAAABQACAGABAFIAAABQAMA+AIAyQAQBqgHAxQgKBKhbAjQgSAJgTAHQgEACgFACQg4AUjEAkAJ7p/IAAAAQgDAEgDAEAJ7p/IAAAAIAQh7AJwysQAwATAvAWALnLMIgFgcIAAAAAL0MRIgWhrQgKg1AIAkIACAKIAAAAALyMEIAAgBQABAHABAHQACAKACAKQABABAAABQACAJABAJIACAHIABADIAAABIACALAMBNFIgJgoIgCgOQgEgPgCgNQgBgCAAgCQgDgOgDgMQgBgEgBgFALpLZQgBgGgBgHAMCNUIgBgFAMCNTIgBgEArzrIIAWByIBKHMQgCB7gFB+QgECAAMG8QABAggrDcQgsDcA+BJQA+BJCFgMQAUACAUACQISAxE+gnQABAAAAAAQAAAAgBAAQADAAACAAQgCAAgCAAAL+NAIgLg6");
	this.shape_30.setTransform(-4.9,20.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF00").s().p("Ai3PYIABAAIgBAAgAhZMXIABABIgDABgAC3IPIABAFIAAAAgAC3IHIAAgBIABACgACpHHIgBgCIgJgrIgCgNIACANIgHglIgBgFIgBgHIgCgKIAEARIAAABIAFAcIgFgcIAAgBIgDgRIg3lEIgZiWQgVh+gBj7QAAiCAEikIABglIAEhmIAHgNIgFByIgBAlQgFCkAACDQABEPAVCEIAVCBIA5FRIAFAaIACAKIAEASIAHAjIABAEIAEAPIAIAoIAAACgACfGVIgCgIIACAIgACVFmQgLg1AIAkIACAKIAAAAIACAKQgBgDgBgCQAAgCAAAAQAAgBAAABQAAABABADgABEvXQAOAHAEAAIgTAPQACgLgBgLg");
	this.shape_31.setTransform(53.7,52.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D2D202").s().p("AAAAAIAAAAIAAAAg");
	this.shape_32.setTransform(58.7,-43.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC00").s().p("AA/LnIAAgDIgMg6IAPBAIAAABIACALIAAABIgBAAIgBAAgAAeJDIAAAAIABgBIADASgAg7rWIABgTIgJAQIAAgCIAAAAIABAAQAJgNADgOIAGACIgCAIIAAAEIgCAOIABgNIgEAPIgEACIAAADIAAgDg");
	this.shape_33.setTransform(65.5,29.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#45A2FE").s().p("Am3T7IgpgEQiFAMg9hJQg+hJArjcQAsjcgBggQgNm8AFiAQAFh+ACh7IhLnMIgWhyQhdjoAuhtQAqgnCrhOIBHgZQgMCVCtA6QBEAYBGAIIAWACQBHAFBKgJQAwgGAsgPQA+gUAzgkIAFgEQAcgUAZgaQAWgVAKgYIAAAAIAAgBIAAgBQAJgeABgbIABgFIAAgHQgBgxgagiQCzAOCoA4IAGACIALAEIAiAMIAAAAQAwATAvAWIARApQADACALAVQAJASAEAKIABAEIAAAAQAIAVAHAUIADAKIABAFQAFACgDAGIABAGIABAAIAEAVQAFAhAAAeIgCAZQgCAVgEATQgUBThEBIIgbAbIgCABQgEABgOgIIgGgCIAAgCIABgFQABgIAEgJQgEAJgBAIIgBAFIAAACQgDAOgJANIgBAAIARh7IgRB7IAAAAIAAAAIgGAIIAGgIIAAACIAJgQIgBAUIAAACIgIAbIAGgIIAAgBIgBADIACgEIgDBmIgBAlQgFCkABCDQABD4AUB+IAZCZIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIABACIADASIACAHIAAADIAAABIACALIABAFIAAAAIABABIAAACIAAgEIABAAQANA+AIAyQAQBqgHAxQgLBKhbAjIgkAQIgJAEQg4AVjEAjIgBAAQiMASi2AAQjlAAkpgcgAH1RHIACgCIAAAAgAKCqRg");
	this.shape_34.setTransform(-5.6,22.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AB6C43").s().p("AhAC1IgWgCQhGgIhEgXQitg7AMiTQAbgjApAJQgEAzA9A5QA9A8CjAFQBAACA6gMIAKgCQBMgRA/goIAEgDQAkgWATgYIABABIAAAAIgBgBQALgOAGgNIABgFIABgDIACgKIABgDQABgLgDgKIghhSQAegLAxAtQAaAiABAwIAAAIIgBAEQgBAbgJAdIAAAAIgBACIABAAQgKAXgWAWQgZAZgcAUIgFAEQgzAkg+AUQgsAPgyAHQguAFgrAAQgbAAgbgCg");
	this.shape_35.setTransform(-18.2,-93.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AB9FFQAMgDALgEQAOgGANgFQAzgXAtgjQCTh1g7g3QgegcgDgpQgggbgFgrIAAhMQgBgBgHhNQiwh0lJgMQgBBHgHAaQABAxgBAQQgRCxgwAmQhDA3gLA7QA7CNCkAoQAdAIAhAEQB0AOBigd");
	this.shape_36.setTransform(-18.2,-106);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFC184").s().p("AAAACIAAgDIABADg");
	this.shape_37.setTransform(-5.7,-73.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFC488").s().p("AkVBqQAKg6BDg2QAwgoARixQABgQgBgwIDxDTQCMBQAeBSQAdBSkagIIgHARIAQAfIgJANIhRAZIgGALIAKAfQilgog6iOg");
	this.shape_38.setTransform(-27.9,-101.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC9C6C").s().p("AihFUQghgEgdgIIgKgfIAGgLIBTgZIAKgNIgQgfIAGgRQEYAIgdhSQgdhRiLhRIjyjTQAHgaABhHQFJAMCwB0QAHBNABABIAABMQAFArAgAbQADApAeAcQA7A3iTB1QgtAjgzAXIgbALIgXAHIgCgEIABAEQhAAUhMAAQgkAAgmgFg");
	this.shape_39.setTransform(-11.1,-106);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ADD1EIgtghIgWgLIAEAdQADALgBALQAAABgBABQAAAFgCAGQgEAQgOASQAAAAgBABIAAAAQgTAXgkAYQg+ArhPASIgKACQgFABgGABQgIABgJACQgPACgRABQgfADghgBQijgFg9g8Qg9g8AEgyIhEAaQgMCVCtA6QBEAYBGAIQALABALABQAGAAAGABQANAAANABQAGAAAFAAIABAAQALAAAKAAQAlgBAlgFQAygGAsgPQBhghBIhJQAPgPAKgQIAAAAQAEgHADgHQAAgBAAAAIAAgBQARgpgQgwgAKxzaIgBAAIm2haIg3gQAJbt5IgCAWIgFBJIAAAGIgBAHIAAABQAAAEAAADQgBAGAAAHQAAABAAABQAAAIAAAJQgCA0gCEHQgBAkABAjIACCRQABAmADAjQADA4AGAuQABAIABAIQAEAcADAcIAAABQAFAnAEAjQAFA1ADAtQAAAFABAFQAZCZAeCqQABAJACAJIAAAAIAFAcQABAEABAFQADAMADAOQAAACAAACQADANAEAPIACAOIAGAZALEKSIgWhrQgLg1AIAkIADAKIAAAAIAEARAKuIgIACAKIACAMIAHAkQgBgHgBgGALDKHIgBgCIgJgrALEKSQgBgFgBgFQAAgCAAgCIAAABALEKSQACAKACAKQAAABABABQABAIACAIALDKHIAJAxIBZG7QgGAoguASIgchbIAABvQizA7imAnQhSAUhOAOQgRADgQADQgcAFgbAEQjRAgi7gEQgjAAgjgCQhogHhhgSQhZgRhUgbIAAqHIghtSALOK3IgLgwArlixIgakKIgPkaIgWhyAryzvIC7g7");
	this.shape_40.setTransform(0,33.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1C8CFD").s().p("AD0QTQDliQhqhcQhqhdg/iKQg/iJAmnkIAnnmIAGgyQASigBmiAQBmiBARgKIgFBJQgGAFAEABIABAAIAAAHIAAABIgBAHIAAANIAAACIgBARQgCA0gCEHIABBHIABCRIAEBJQAEA5AFAtIACAQIAIA6IAAABIAIBKQAGAzADAtIAAAKIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIAAACIADAQIABAAIBYG7QgGAoguASIgchbIAABvQizA7ilAnQhSAUhOAOIghAGIg2AJQAaglDliPgAqTqgIAFABIAAAAgAmGzGIAMABIgFAFg");
	this.shape_41.setTransform(14.4,47.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#002B2B").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAgAAAAAg");
	this.shape_42.setTransform(19.4,-92.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF00").s().p("ArSS0QBaAZBTATQhagRhTgbgAK0ISIALAwIgCAAgAK/JCIgLgwIgBgCIgJgrIgCgNIACAJIgCgJIACANIgHgkIgBgGIgBgGIgCgKIAEARIAAAAIAFAcIgFgcIAAAAIgEgRIAAAAIAAAAIACAKQgBgEgBgCQAAgCAAAAQgBgBABACQAAABAAACQgLg0AJAkIACAKIABgBIADASIgDgSIg3lDIgBgLIACAPIA5FRIAFAaIACALIAEASIAHAiIABAEIADAQIAGAZgAK0ISgAKfGrgAKfGrgALQzfQAGACgEAGg");
	this.shape_43.setTransform(1.4,44.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D2D202").s().p("Ag1CnIACAAIgCAHgAA2itIAAAAIgCAAIACAAg");
	this.shape_44.setTransform(65,-62.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#003333").s().p("AAAAAIAAAAIAAAAg");
	this.shape_45.setTransform(68.9,-91.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#45A2FE").s().p("AjWVaIhHgCQhogHhggSQhTgThagZIAAqHIgitSIAAgBIgZkKIgPkaIgWhyQhol/CagpIC6g7QgMCVCtA6QBFAYBFAIIAWACIAIAGIAEgFIAaABIAMAAIAAAAIAVAAQAlgBAmgFQAxgGAqgPQBkghBHhJQAQgPAJgQIAAAAIAHgOIAAAAIABgBIAAgBQARgpgRgwIA3AQIG3BaIAAABQACACAMAVQALAXADAJQAIAVAGAUIAEAPIACAIQAMAvgBArQgBAhgHAgQgYBjhCAnQgsAZgKAKIAFhJIACgWIgCAWQgRAKhmCBQhmCAgSCgIgGAyIgmHkQgnHmA/CJQBACKBqBdQBqBcjlCQQjlCPgcAlQi5AdipAAIgpgBgAnNooIAAAAIgFgBgALvx/IACgBIAAAAIgCABg");
	this.shape_46.setTransform(-5,35.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AB6C43").s().p("AgOCcIgLAAIgagCIgMAAIgWgCQhGgIhEgYQitg6AMiTIBEgaQgEAyA9A8QA9A6CjAFQAhAAAdgCIAggEIARgCIALgCIAKgCQBPgSBAgpQAkgYATgXIABAAIgBgBIABgBQANgRAFgQIACgLIABgCIgCgUIAAgCQADAIAAAIIgBAGIABgGQAAgIgDgIIgEgdIAWALIAtAhQAQAwgRApIAAABIgBABIABAAIgHAOIAAAAQgKAOgPAPQhIBJhjAhQgsAOgyAHQglAFglABIgTAAg");
	this.shape_47.setTransform(-18.3,-90.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("ACBFUQAMgCAMgCQAOgEAOgEQA1gRAugcQCYhig9g8QgfgegDgoQghgggGgoQhdhtgWivABoktQh2gPjZgeQgCBFgHAZQABAvgBAPQgSCqgxAfQhFAugLA4QA8CPCqA6QAeAKAiAHQB4AbBlgS");
	this.shape_48.setTransform(-17,-104.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFC184").s().p("AAAACIAAgDIAAADg");
	this.shape_49.setTransform(-4.1,-70.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFC488").s().p("AjKBTQALg4BFgsQAxghASiqQABgQgBguIC1DjQAwA1AWBBQAiBjh6AGIgHAPIARAgIgKALIhWAPIgGALIAKAgQiog6g8iPg");
	this.shape_50.setTransform(-35.5,-101.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFBA75").s().p("AinFLQghgHgegKIgLggIAHgKIBVgQIAKgLIgQggIAGgPQB7gGgihiQgXhDgwg0Ii3jjQAIgZABhFQDaAeB2APIBPAAQAVCvBeBtQAFAoAhAgQADAoAfAeQA9A8iXBiQgvAcg0ARIgcAIIgYAEIgCgEIABAEQgpAHgpAAQhCAAhKgQg");
	this.shape_51.setTransform(-9.7,-104.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("Aot0qIBFgaQgFAyA9A8QA+A8CiAFQAhABAfgDQARgBAQgCQAIgCAIgBQAGgBAFgBIAKgCQBOgSBAgrQAjgYATgXIAAAAQAPgSAFgRQABgGABgFQABgBAAgBQABgLgDgLIgFgdIAXALIAsAhQARAwgRApIAAABQgBAAAAABQgKAYgWAVQhHBJhkAhQgqAPgxAGQgmAFglABQgKAAgLAAIAAAAQgGAAgGAAQgNgBgNAAQgGgBgGAAQgKgBgMgBQhFgIhFgYQitg6AMiVgAJlt5IgFBHIgCAYIAAAGIgBAHIAAABQAAAEAAADQAAAGgBAHQABABgBABQAAAIAAAJQgCA0gCEHQAAAkAAAjIACCRQACAmACAjQAEA4AFAuQABAIABAIQAEAcADAcIAAABQAFAnAEAjQAFA1ADAtQAAAFABAFQAZCZAeCqQABAJACAJIAAAAIAFAcQABAEABAFQADAMADAOQAAACABACQACANAEAPIACAOIAGAZADN1EQFLApBOA3AK4IgIAAAAIgCgKQgIgkAKA1IAXBrQABAKACAKQABABAAABIACAIQAAAEABAEAK4IgIAEARALDJaIgHgkIgCgMIgCgKALMKFIAAgBQAAACAAACQACAFABAFALMKFIgJgrALNKHIgBgCALBJNQABAGABAHArbiwIAiNSIAAKHQBTAbBaARQBgASBoAHQAjACAkAAQDTAFDvgqQARgDAQgDQBAgMBCgPQAPgDAPgEQCmgnDchUIgRhxIAkBfQARgGADgdIhZm7ALNKHIAJAxALYK3IgLgwArbixIgZkKIgPkaIgWhyAsuzOIEBhc");
	this.shape_52.setTransform(-1.1,33.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1C8CFD").s().p("AAGU0QhQgThbgZIAAqHIghtSIAAgBIgakKIgPkaIgWhyQhOldA6gqIEBhcQgMCVCrA6QBEAYBGAIIAWACIAMAAQgeAfhaCcQhUCThfEbIgCAOQAAALgGA2QgJA2AAAKQAAALgIA3QgJA3AAALQAAD+AzEAQANBAAWBlQARBOAeAeQAeAeAcBFQAcBEgJBjQgIBkAMCDQANCEAGCmQhogGhhgSgABJrSQgKAZAAALIgSA2QgSA2AAAHIgBAGQAyifgCAAIgBACg");
	this.shape_53.setTransform(-54.3,36.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF00").s().p("ArIIVQBaAZBTATQhagQhTgcgAK+iLIALAwIgCABgALJhbIgLgwIgBgCIgIgrIgDgNIACAJIAEASIAHAiIABAEIAEAQIAFAZgALJhbgAKtjcIgBgGIgBgGIgCgKIAEARIAAAAIAFAcIADANgAKyjFIgFgcIAAAAIgDgSIg3lDIgBgKIADAOIA5FRIAEAaIACALIgCgJgAKtjhgAKpjyIACAKQgBgEAAgCQgBgCAAAAQAAgBAAACQAAABABADQgLg1AIAkIACAKIAAAAIAAAAIABgBIADASgAKtjhIAAAAg");
	this.shape_54.setTransform(0.4,112);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#45A2FE").s().p("Al9VaIhGgCQgGingNiDQgNiEAJhjQAJhkgchEQgchFgegeQgfgegQhOQgXhlgNhAQg0kAAAj+QAAgLAJg3QAIg3AAgLQAAgKAIg2QAJg2AAgLIACgOQBfkbBUiTQBaicAegeIAZABIAMAAIAAAAIAWAAQAkgBAmgFQAxgGAsgPQBkghBFhJQAXgVAKgYIAAAAIAAgBIAAgBQARgpgQgwQFKApBOA3IgNDcQAMBBgEA6QgEA7ADAgIgCAYQgFAFAEABIABAAIgBAHIAAABIAAAHIAAANIAAACIgBARQgCA0gCEHIABBHIABCRIAEBJQAEA4AFAuIACAQIAIA4IAAABIAIBKQAGA1ACAtIABAKIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIAAACIACAIIABAIIABAAIBYG7QgDAdgRAGIgkhfIARBxQjcBUimAnIgeAHQhCAPhAAMIggAGQjYAmjBAAIgqgBgAp3owQgBgHATg2IASg2QAAgLAKgZQAIgTg3CxIABgHg");
	this.shape_55.setTransform(11.7,35.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D2D202").s().p("Ag1CnIACAAIgCAHgAA1itIABAAIAAAAIgBAAIgBAAIABAAg");
	this.shape_56.setTransform(65,-62.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("Ah/FUQBlASB4gbQAigHAegKQCqg6A8iPQgLg4hFguQgxgfgSiqQgBgPABgvQgHgZgChFQlTAwi2CDQgHBMgBABIAABJQgGAoghAgQgDAogfAeQg9A8CYBiQAuAcA1ARQAOAEAOAEQAMACAMAC");
	this.shape_57.setTransform(-17.1,-106.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-30}},{t:this.shape_12},{t:this.shape_11,p:{x:-30,y:-72.4}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_13,p:{x:-29.9}},{t:this.shape_27},{t:this.shape_11,p:{x:-29.9,y:-72.4}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_11,p:{x:-5.6,y:-73.4}},{t:this.shape_35},{t:this.shape_25},{t:this.shape_34},{t:this.shape_23},{t:this.shape_4},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_17},{t:this.shape_30}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_11,p:{x:-4.1,y:-70.4}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_5},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_14},{t:this.shape_15},{t:this.shape_13,p:{x:-30}},{t:this.shape_57},{t:this.shape_11,p:{x:-30,y:-72.4}},{t:this.shape_10},{t:this.shape_56},{t:this.shape_55},{t:this.shape_5},{t:this.shape_4},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-142.2,166.5,315.7);


(lib.gr_cH_Arm_01_02_new_031 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AGmnXQA4HXkfI1IgDBLQgzAGg1gCQgMgBgMgBQi7gNjThvQg0gbgpgWQAcgmASgaQAMgRAIgMQAWggAUgoQCxnKAXikQAbjCBshUQAUgUCKgbQABAAACgB");
	this.shape.setTransform(5.7,-21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AB6C43").s().p("ADNB3IgZgCQi7gNjThtIhdgxIAuhAIBEAkQDSBsC9AOIAYABQArACArgEIgEBMQglAEgnAAIgbAAg");
	this.shape_1.setTransform(-6.3,30.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C8CFD").s().p("ABTJeIgYgCQi8gNjThvIhEgkIAUgdQAWgfAUgpQCxnKAXijQAbjDBuhUQASgTCKgcIADAAQBXgHBHAnQBHAnAUBlIAAAAQA4HXkfI1QgcACgdAAIgcAAg");
	this.shape_2.setTransform(8,-25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AkYFUQAFBhABANQACAOANAPQANAPAZAOQAYAMAbAGQAcAGAdAAQAcAAAcgEQANgCANgFQAggFAkgfIANgUQBsnCCBmwImghyIh7IyQgwCtAUCIg");
	this.shape_3.setTransform(1.2,33.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC488").s().p("AiqINQgbgFgYgNQgZgNgNgPQgNgPgCgNIgGhwQgUiHAwitIB7oyIGgByQiBGxhsHBIgNAUQgkAfggAFQgNAFgNACQgcAEgcAAQgdAAgcgHg");
	this.shape_4.setTransform(1.2,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-87.3,88.4,175.1);


(lib.gr_boy03_rightleg_new_021 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ACSkfIAqAFIgQDJIgaAVgACSg8IhBGHAicFLIgcm7QgIhWAOhHQAHggALgdIEyAr");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A475A").s().p("AicFLIgcm7QgIhWAOhHQAHggALgdIEyArIAADjIAAjjIAqAFIgQDJIgaAVIhBGHg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.8,-34.1,39.7,68.3);


(lib.gr_boy_leftleg021 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ABshvIAAAEIAVCxIg3AqQhmgDg7gRQgYgHgRgKIAZiiIgBgY");
	this.shape.setTransform(-10.7,-25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A475A").s().p("AhaBVIAZiiIgCgYICeAAIgBA0QAAA2gJAZQgUA/hvAJQgYgHgQgKg");
	this.shape_1.setTransform(-14.5,-26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#47566B").s().p("AhsBbQBvgIAUg/QAJgYAAg4IABgzIA3AAIAAAEIAUCxIg3AqQhlgDg8gSg");
	this.shape_2.setTransform(-8.7,-25.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AgVhBQABgCAAgCQADgDACgCQAKgIAKAGQAAAAACABQARAOAGAKIAAAMQACAMAEAEQAYANACAAIABgBQACgCACAAQADAAACACQACABABADQAAADgCADQgDACgHAAQgLgBgWgKQgBgBAAAAQgHgFgGgOQgNAAgUgEIAKgMIAAgBQARAEAGAAIABAAIgLgOQgDgCgDgEQgDgBgDACQgCABgBADQgBABAAABQgDgDgDgDQgDgCgCgBQgCACgBADIAAAAQgBABgCAAQgCAAgDgBQAAAAgBAAQgDgBgCAAQgTgDgIAGQgQAJANAeQAAAAABABQAKAOAJAAQAEAAADgBQABATAMAbQAAABAAAAQAGAIgBAFQgDAGgJAFQgDABgBACQgBADABADQACADACABQACABADgBQARgIADgLQAEgLgKgPQgPggAFgTQAFgHAEgKQgBgQgUgLAgHgvQAAgFgDgEAgdgqQAAgBAAgCQgVgFgHAEQgFAEAGAQQAFAGAEABQAEAAAFgFIABgBQAEgGAEgLg");
	this.shape_3.setTransform(2.1,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#53412F").s().p("AgjBPIgEgEQgBgDABgDQAAAAABgBQAAAAABgBQAAAAABgBQAAAAABAAQAJgFADgGQABgFgGgIIAAgBQgMgbgBgTIgHABQgJAAgKgOIgBgBQgNgeAQgJQAIgGATADQAUALABAQQgEAKgFAHQgFATAPAgQAKAPgEALQgDALgRAIIgDAAIgCAAgAg5guQgFAEAGAQQAFAGAEABQAEAAAFgFIABgBQAEgGAEgLIAAgDQgLgDgIAAQgGAAgDACgAA/ABQgLgBgWgKIgBgBQgHgFgGgOQgNAAgUgEIAKgMIAAgBIAXAEIABAAIgLgOIgGgGQgDgBgDACIgDAEIgBACQADAEAAAFIAAABIgKAMQgBgQgUgLIAFABIABAAIAFABIADgBIAAAAIADgFIAFADIAGAGIgGgGIgFgDIABgEIAFgFQAKgIAKAGIACABQARAOAGAKIAAAMQACAMAEAEQAYANACAAIABgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQADAAACACQACABABADQAAADgCADQgCACgHAAIgBAAg");
	this.shape_4.setTransform(2.1,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAFhhQgCgCgCgBQAAgBgDgFQgbgPgfA0QAFAFAFAEQALAIAKAHQAGAEAFAEAA8g1QABABABABQAIAFAIAFQBVAJAeBAQABACABADAArhBQgEgDgEgDQgCgCgDgCQgDgDgHgGQgCgCgHgFQgDgDgDgDAArhBQABABABAAQAAABABAAIAFADQAEAEAFADQgbgRgWAxQgGgCgFgDAALgVQAFADAFABQArAQAOgoAAehLQgbgLgVAxQAKAGAIAFQAVg1AWAOAjHgSIAAANQAdAQBFAOQABAAABAAQDuBpA9hNQgCgJgDgHIAVAWIgBA4QhCBNkAhpQgEgBgFAAQhFgNgegSIAAhFIAQgEIAIhOIAOgOQAVARAeAFQAVAEAZgCQAKAJAKAIAhQhWIAAgLQARg4AZAHQAFABAFAEQAAABABABQAHARASAQAAUhUQgZgOgYA1Agyg8QAdgwAaAL");
	this.shape_5.setTransform(2.1,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#80664D").s().p("AiZAAIgJAAQgGgJAAgJQAAgKALgIQANgJAEgJIgGgFIABgBQDuBnA9hLQgCgJgEgHIAVAWIAAA2QgcAhg+AAQhTAAiVg9g");
	this.shape_6.setTransform(6.7,30.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AB6C43").s().p("AiIAbIgCgBIgNgNQgLgNAAgSQAAgGADgQQAEgQAAgLIgHgTQAVADAZgCIATARIALAJIAUAQIALAHIATALIAMAGIAKAEQApAPAOgoQBVAJAeBAIACAFQADAIACAIQgaAhg6AAQhPAAiIg8g");
	this.shape_7.setTransform(5.8,22.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#714D2D").s().p("AiKA2IAAgMIAIhNIAOgOQAWARAdAGIAHATQAAAJgDAQQgDAQgBAGQAAATAMAOIANANQhFgOgdgSgABSArIgKgEQAWgvAaAOIADACIAQAKQgKAdgaAAQgJAAgMgEgAApAWQAWguAcALIAEAEIAJAGQgWgPgXAzIgSgLgAAKAAQAcguAcAKIAGAHIAJAGQgbgOgYA0IgUgPgAgTgZIAAgKQARg4AXAHQAFABAEADIABACQAIARASARQgbgPgeAzIgTgRg");
	this.shape_8.setTransform(-4,16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#53412F").s().p("AiJBDIAAhFIAQgEIAAALQAdASBFAOIACAAIgBABIAGAFQgEAJgNAJQgLAIAAAKQAAAJAGAKQhFgNgegSgABMgOQAXg1AWAOIABABIACABIAEADIAJAHQgagRgWAxIgNgFgAAvghQAYg1AbAOIAKAJQgcgLgWAxIgLgIgAAPg5QAgg0AbAPIAFAGIAEADQgcgLgcAwIgMgJg");
	this.shape_9.setTransform(-5.7,21);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AgLBCQAcAFAfgUQAYgcgTgbIAJg+Ig3AAIhEAAIAKA9QgTAXAYAhQARAMASADg");
	this.shape_10.setTransform(-9.4,7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3F8FA").s().p("AgkBBIAAgMQAAgTALgfQALgcAAgRIgCgYIA1AAIgJA+QATAbgYAbQgXAQgYAAIgMgBg");
	this.shape_11.setTransform(-6.9,7.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DBE8F0").s().p("AgUAzQgXghATgWIgKg9IBDAAIADAXQAAASgMAcQgKAegBATIAAANQgPgDgSgMg");
	this.shape_12.setTransform(-12.1,7.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AgdDaQgWhdgXi1QgCgNgBgNQgEgbgDgeIAAgDIgGhLABbjZQgQEmgYCN");
	this.shape_13.setTransform(-10.2,-8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFC488").s().p("AATDaQACivgUh8QgKhGhLAJIgFhLIC0AAQgQEmgZCNg");
	this.shape_14.setTransform(-10.2,-8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC9C6C").s().p("AACC1QgUhdgXi1IgDgaIgHg5IAAgDQBJgJAMBGQAUB8gCCvg");
	this.shape_15.setTransform(-13.5,-4.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.302)").s().p("AAAAAIABAAIAAAAIgBAAIAAAAg");
	this.shape_16.setTransform(1.9,12.7);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.6,-38,49.3,76.1);


(lib.gr_boy_leftleg01_new_021 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("ABvE8IAlmsIADjLIhBAAIjsAAIAxJ3");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#47566B").s().p("AhFE7Igxp1IDtAAQgfBTgCDXQgBCGAGCRQgCASAAAig");
	this.shape_1.setTransform(-3.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A475A").s().p("AgtE7QABgiACgSQgGiRABiGQACjXAehTIA/AAIgDDKIglGrg");
	this.shape_2.setTransform(10.3,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.1,-32.6,32.3,65.2);


(lib.gr_boy_leftleg_new_031 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ACFiEIgMBJIANCOQhAArgqAHQhMgDg6gtQgOgLgNgOIAgiTIgDgt");
	this.shape.setTransform(-4.3,-28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A475A").s().p("AhqBVQgOgLgNgOIAgiTIgDgtIDtAAIgMBJIANCOQhAAqgqAIQhMgDg6gtg");
	this.shape_1.setTransform(-4.3,-28.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(102,102,102,0.2)").ss(1,1,1).p("AgVg8QgRgMgKADQgSAAAAAiQAAABABAAQAEARAIAFQADABAEABQgIARACAeIAAABQABAJgDAFQgEAEgKAAQgDAAgCADQgCABAAAEQAAACACADQACACADAAQARAAAIgJQAHgJgDgRQgBgkAMgPQAHgFAIgHQAaAVAMgBQAGAHAEAIQABABAAABQARAXALAEQAFABADgCQACgCABgCQABgDgBgDQgCgCgCgCQgDAAgCABQgBAAgBgBQgEgEgNgRQgFgJgHgJQABgLgLgVQAAgBAAAAQgBgCgBgCIgBgBQgEgFgFgCQAAgBgBAAQgFgCgFACQgDABgFAEQgDgHgMAFAgBgsQABgBAAgBQADgCACgBQADAAADADQADAFACAEIAFARQgEAAgSgPQAAACgBABIgOAFQAGgNgLgUIAAAAQAAgBgBAAQABAAAAABAgUgqQgRgOgJABQgGACAAARQACAIAEADQAEABAGgDIAAAAIAAgBQAHgEAIgHQAAgBABgCgAgGg6QAEAJABAFAgBgjQABgEgBgF");
	this.shape_2.setTransform(3,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#53412F").s().p("AhEBHQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAQgCgDAAgCQAAgEACgBQACgDADAAQAKAAAEgEQADgFgBgJIAAgBQgCgeAIgRIgHgCQgIgFgEgRIgBgBQAAgiASAAQAKgDARAMQAHANAAAKQAAAGgCAEIAOgFIABgDQASAPAEAAIgFgRIgFgJQgDgDgDAAIgFADIgBACQABAFgBAEIgBADIgOAFQACgEAAgGQAAgKgHgNIAAAAQAMgFADAHQAFgEADgBQAFgCAFACIABABQAFACAEAFIABABIACAEIAAABQALAVgBALQAHAJAFAJQANARAEAEIACABQACgBADAAIAEAEQABADgBADQgBACgCACQgDACgFgBQgLgEgRgXIgBgCQgEgIgGgHQgMABgagVQgIAHgHAFQgMAPABAkQADARgHAJQgHAJgQAAIgCAAgAgug3QgGACAAARQACAIAEADQAEABAGgDIAAAAIAAgBQAHgEAIgHIABgDQgQgNgJAAIgBAAgAgBgsQgBgFgEgJQAEAJABAFgAgVg8IgBgBIABABgAgVg8g");
	this.shape_3.setTransform(3,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AAugTQg/gRgcA7");
	this.shape_4.setTransform(5.8,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AArgSIgNgiQg4gxgwBFIAUAeIAIAKIAMARIAHAMIAKAOIAHALIAIAMQAfgWAuAIIgEgKIgFgNIgEgJIgFgNIgIgSgAA+AcQgkgYg1AhAA5APQgkgXg3AhABHAyQghgSgwAeABCAlQgigSgxAgAg2gCQA9gpAkAZAAxgDQglgZg6Ak");
	this.shape_5.setTransform(0.6,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#714D2D").s().p("AgKA+QAwgeAhASIAEAKQgugIgfAWgAgbAlQA1ghAkAYIAEAJQgigSgxAggAguAIQA6gkAlAZIAIASQgkgXg3AhgAhKggQAwhFA4AxIANAiQgkgZg9Apg");
	this.shape_6.setTransform(0.6,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#53412F").s().p("AgaAiQAyggAiASIAFANQghgSgwAegAgrAIQA3ghAlAZIAFALQglgWg1AfgAg+gTQA+gpAjAZIAGAPQglgZg6Amg");
	this.shape_7.setTransform(1.5,14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("ACZA+QACg1g3gqQguhEgNg7IgJgJQgoAug+gRQgQgEgSgJIgMgVIgUAdIgKBHIgRAYIAAAkIAkAwIANAAIApBLIAXAqQB7A0Bbg/IAAg/gAiShKIgCAPIAhAuIAQALIANAUIAEAFIAkA4QAOAYA/AKQBCAJAygnQAEgLACgK");
	this.shape_8.setTransform(1.3,24.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#80664D").s().p("AACARIgLAAIgjgwIAAgkIAQgYIgBAPIAeAuIAQALIAOAUIADAFIAGAQQAAAEgFALIgEANQAAAOAOAbIgBABg");
	this.shape_9.setTransform(-10.6,25.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AB6C43").s().p("AAIBKIgOgLIghguIACgPIAKhEIAVgdIAJAUQASAJAQAFIACASQAAAcgMAbQgNAeAAATQABALAHAXIgBABg");
	this.shape_10.setTransform(-9.6,16.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#714D2D").s().p("AABCMQg/gKgOgXIgkg5IgDgFIABgBQgIgXAAgLQAAgRAMgeQANgdAAgcIgDgSQA+ARAoguIAJAIQANA8AuBEQA3AqgCA0IgGAWQgoAfgyAAQgNAAgNgCg");
	this.shape_11.setTransform(4.2,21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#53412F").s().p("AhYA0IgXgqIABgBQgOgZAAgOIAEgNQAFgLAAgEIgGgQIAkA4QAOAWBCAKQA/AJAzglIAFgVIALAPIAAA9QgxAig8AAQgvAAg5gXg");
	this.shape_12.setTransform(5.1,34);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAFg7QgDAAgCAAQgjABgYgOIAJA+QgTAXAWAlQAcAaAYgEQAWgEAUgXQAIgJAEgKQAFgSgMgRIAGg/QgUALgeAC");
	this.shape_13.setTransform(-4.5,4.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3F8FA").s().p("AgWAyQgWglATgXIgIg+QAXAOAjgBIAGAAIACAAIABAJIAAAMQAAALgIAOQgHANAAARIABAPQACAPAEAJIAFAQIgHABQgXAAgXgXg");
	this.shape_14.setTransform(-7.1,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DBE8F0").s().p("AgZA5QgEgJgCgQIgBgPQAAgRAHgMQAIgPAAgKIAAgMIgBgJQAcgCAVgLIgHA/QANAQgGATQgDAJgIAKQgUAXgUADIgFgPg");
	this.shape_15.setTransform(-1.8,4.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAUDJIAZAAQAwkGgKiKIinAAQADBeAMBmQAMBiAVBqg");
	this.shape_16.setTransform(-5,-13.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFC488").s().p("AgLBmQgVhogMhjQArAYAUAtQAaAyAABUg");
	this.shape_17.setTransform(-7.5,-3.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC9C6C").s().p("AAUDJQAAhUgYg0QgWgugrgVQgMhngDhfICnAAQAKCLgwEGg");
	this.shape_18.setTransform(-5,-13.2);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.7,-42.5,37.3,85.1);


(lib.Symbol6copy5 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,1.4).s().p("AgGAYQgEgKAAgOQAAgNAEgKQADgKADAAQAEAAAEAKQADAKAAANQAAAOgDAKQgEAKgEAAQgDAAgDgKg");
	this.shape.setTransform(10.3,5.4,0.522,0.997,0,23,18.3,-0.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF0000","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,1.4).s().p("AgQAeQgEgCACgLQADgLAGgKQAHgMAHgHQAHgIAEACQAFADgDAKQgBALgIAKQgHANgFAHQgHAFgDAAIgDAAg");
	this.shape_1.setTransform(0.3,4.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.7,1.4,13.5,7.4);


(lib.Symbol6copy4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,1.4).s().p("AgGAYQgEgKAAgOQAAgNAEgKQADgKADAAQAEAAAEAKQADAKAAANQAAAOgDAKQgEAKgEAAQgDAAgDgKg");
	this.shape.setTransform(10.3,5.4,0.522,0.997,0,23,18.3,-0.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF0000","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,1.4).s().p("AgQAeQgEgCACgLQADgLAGgKQAHgMAHgHQAHgIAEACQAFADgDAKQgBALgIAKQgHANgFAHQgHAFgDAAIgDAAg");
	this.shape_1.setTransform(0.3,4.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.7,1.4,13.5,7.4);


(lib.Symbol6copy3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,1.4).s().p("AgGAYQgEgKAAgOQAAgNAEgKQADgKADAAQAEAAAEAKQADAKAAANQAAAOgDAKQgEAKgEAAQgDAAgDgKg");
	this.shape.setTransform(10.3,5.4,0.522,0.997,0,23,18.3,-0.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF0000","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,1.4).s().p("AgQAeQgEgCACgLQADgLAGgKQAHgMAHgHQAHgIAEACQAFADgDAKQgBALgIAKQgHANgFAHQgHAFgDAAIgDAAg");
	this.shape_1.setTransform(0.3,4.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.7,1.4,13.5,7.4);


(lib.Symbol6copy2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,1.4).s().p("AgGAYQgEgKAAgOQAAgNAEgKQADgKADAAQAEAAAEAKQADAKAAANQAAAOgDAKQgEAKgEAAQgDAAgDgKg");
	this.shape.setTransform(10.3,5.4,0.522,0.997,0,23,18.3,-0.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF0000","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,1.4).s().p("AgQAeQgEgCACgLQADgLAGgKQAHgMAHgHQAHgIAEACQAFADgDAKQgBALgIAKQgHANgFAHQgHAFgDAAIgDAAg");
	this.shape_1.setTransform(0.3,4.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.7,1.4,13.5,7.4);


(lib.Symbol6copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,1.4).s().p("AgGAYQgEgKAAgOQAAgNAEgKQADgKADAAQAEAAAEAKQADAKAAANQAAAOgDAKQgEAKgEAAQgDAAgDgKg");
	this.shape.setTransform(10.3,5.4,0.522,0.997,0,23,18.3,-0.2,-0.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#FF0000","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,1.4).s().p("AgQAeQgEgCACgLQADgLAGgKQAHgMAHgHQAHgIAEACQAFADgDAKQgBALgIAKQgHANgFAHQgHAFgDAAIgDAAg");
	this.shape_1.setTransform(0.3,4.4);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.7,1.4,13.5,7.4);


(lib.Symbol6 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#666666").s().p("AiGB7QgEgBAAgCIACgJQAAgKADgXIAEgPQgMgEgMgDIgWgGQAAgEAGAAQAVAAAWAHIAAgCIATgiQAOgVAKAAQAJAAAEAFQgIAJgQAaQgJAOgFALQALAGAMAHQAXAQASATQgDACgGAAQgJAAgHgJQgLgOgYgNIgHgEQgDAFAAAEIgBAPIgCALQADATgLAAQgFAAgEgCgAgXByQgIgFAAgDQAAgCgEgGQgEgHAAgCIACgJQAAgMATgYIAGgHIgCAAQgKAAgSgQIgRgSIgMgHIgOgIIgWgFQgPgEgEAGQAHgNACAAQAgAAApAcIAkAfQAIgNAAgDQAAgHABgHIABgIIACgOQAAgHgDgOIgBgIQAAgEAGAAQALAAAEALQADAIAAASQAAASgHASQAKgGANgPQAUgaAJAAQAIAAACACIADAEQgDACgXAcQgRAXgRAAIgJgBQgFAIgHAIQgUAcAAARQAAADAKALIAJAMQgCADgEAAQgIAAgJgGgABhAIIABgIIACgJIgPgSQgRgTABgLIgDgJIgDgMIgBgJIACgBQgdgHgJgJQACgCAFAAQAIAAAPAFIAXAHQAqAJAJAHQgGgLAAgGIACgMQAAgDAOgHQANgHAIAAIAIACQAHACAAABIAAACIgcAMQgEADAAAKQAFAKAAADQgBACAFAGQAEAGAAACIABATQgEABgDAAQgIAAgEgEQgEgDAAgCIACgLQAAgCgFgJQAAADgIAAQgHAAgGgEIgHgGIgTgEIgFAAIACADIABAIQAAAGAEAJIAHARQAEANALALIALAJQgCAYgGAAQgQAAABgHgAAjgzQgagUgMAAQgMAAgLgEQgIgEgCgDIAHgCQAKAAA1ASIAWAPQAUAOAAADIAAACIgBgBIgGACQgHAAgbgUg");
	this.shape.setTransform(17.7,12.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,35.3,25.1);


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg//ADZIAAmxMBEpAAAQBkAAAABkIAADpQAABkhkAAgEA89ACdQAyhGgBhZQAAhgg2hJIDHAAIAAFIgEAzvACdQAxhGABhZQgBhgg3hJICEAAQg4BJABBgQgBBZAyBGgEAqzACdQhkAAAAhkIAAiAQAAhkBkAAIBsAAQg4BJAABgQABBZAxBGg");
	this.shape.setTransform(409.6,21.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,819.2,43.5);


(lib.r2copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.302)").ss(0.1,1,1).p("AA/ASQgOgCgLgDQgxgSgzgMQAdgBA9AOQAPADAUAC");
	this.shape.setTransform(17.6,-25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161620").s().p("AjuG/IAThHIAIgiIAAgSIgFioQgDhrAOiSQAPiUA8loQERARBgAUIAADaIgkgHIgFgBIgKgCIAAAAIgCgBQgngIgYgBIgHAAIgBAAIgCAAIgCAAQAzAMA0AUIAZAFIAAFoQgOAZgMAaQgtBsgHCGQgDBGgFA5QhaCfhgAAQhjAAhqifgADWlSQg0gUgzgMIACAAIACAAIABAAIAHAAQAYABAnAIIACABIAAAAIAKACIAFABIAkAHIAAARIgZgFgADvleIAAAAg");
	this.shape_1.setTransform(0,9.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.9,-50.9,48.8,121.2);


(lib.r2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.302)").ss(0.1,1,1).p("AA/ASQgOgCgLgDQgxgSgzgMQAdgBA9AOQAPADAUAC");
	this.shape.setTransform(17.6,-25.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161620").s().p("AjuG/IAThHIAIgiIAAgSIgFioQgDhrAOiSQAPiUA8loQERARBgAUIAADaIgkgHIgFgBIgKgCIAAAAIgCgBQgngIgYgBIgHAAIgBAAIgCAAIgCAAQAzAMA0AUIAZAFIAAFoQgOAZgMAaQgtBsgHCGQgDBGgFA5QhaCfhgAAQhjAAhqifgADWlSQg0gUgzgMIACAAIACAAIABAAIAHAAQAYABAnAIIACABIAAAAIAKACIAFABIAkAHIAAARIgZgFgADvleIAAAAg");
	this.shape_1.setTransform(0,9.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-23.9,-50.9,48.8,121.2);


(lib.r1copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161620").s().p("AglH1QgegCgdADQhPAIhSArQgIgegKg+QgKg+Azg5QAngwgBguQABgLgCgKIgCgKQgIg1AYg8QAYhDADgUQgQg1AChRQAChRARg3QAMglAZhfQEEmBCDGBIgCATQgDAvgNBrQgEAmgOAoQgJAbgNAbQgNAZgGAXQgKAfAAAWQABALAHAsQAIAsAAAKQAAAfgOAeIgCAEIgCADQgSAiAAAQIACAKQADALAHAQIABAAQAsA6gkA3QglA2AAAfQgBAfABADQAGAiAKAcQhmhIhpgGg");
	this.shape.setTransform(0,-9.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.8,-67.5,55.6,115.8);


(lib.r1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161620").s().p("AglH1QgegCgdADQhPAIhSArQgIgegKg+QgKg+Azg5QAngwgBguQABgLgCgKIgCgKQgIg1AYg8QAYhDADgUQgQg1AChRQAChRARg3QAMglAZhfQEEmBCDGBIgCATQgDAvgNBrQgEAmgOAoQgJAbgNAbQgNAZgGAXQgKAfAAAWQABALAHAsQAIAsAAAKQAAAfgOAeIgCAEIgCADQgSAiAAAQIACAKQADALAHAQIABAAQAsA6gkA3QglA2AAAfQgBAfABADQAGAiAKAcQhmhIhpgGg");
	this.shape.setTransform(0,-9.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27.8,-67.5,55.6,115.8);


(lib.mc_fan01d = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#02102D").s().p("AgQARQgGgHgBgKQABgJAGgGQAIgIAIAAQAJAAAIAIQAGAGABAJQgBAKgGAHQgIAGgJAAQgIAAgIgGg");
	this.shape.setTransform(15.8,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000066").ss(0.5,1,1).p("ABKhDQAVBNgrA6IiEhag");
	this.shape_1.setTransform(23.4,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#03205C").s().p("AhQgWICagtQAVBNgrA6g");
	this.shape_2.setTransform(23.4,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000066").ss(0.5,1,1).p("AhChJQBNgVA4AuIhZCAg");
	this.shape_3.setTransform(18.3,8.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#03205C").s().p("AhChJQBNgVA4AuIhZCAg");
	this.shape_4.setTransform(18.3,8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000066").ss(0.5,1,1).p("AhGBFQgahMAog9ICJBOg");
	this.shape_5.setTransform(8.2,14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#03205C").s().p("Ag4hEICJBOIiXA7QgahLAog+g");
	this.shape_6.setTransform(8.2,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000066").ss(0.5,1,1).p("ABEBHQhKAag9goIBTiJg");
	this.shape_7.setTransform(14.4,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#03205C").s().p("AhDA5IBTiJIA0CXQgeAKgcAAQgoAAglgYg");
	this.shape_8.setTransform(14.4,23.4);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,33.5,33.6);


(lib.mc_fan01copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#02102D").s().p("AgQARQgGgHgBgKQABgJAGgGQAIgIAIAAQAJAAAIAIQAGAGABAJQgBAKgGAHQgIAGgJAAQgIAAgIgGg");
	this.shape.setTransform(15.8,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000066").ss(0.5,1,1).p("ABKhDQAVBNgrA6IiEhag");
	this.shape_1.setTransform(23.4,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#03205C").s().p("AhQgWICagtQAVBNgrA6g");
	this.shape_2.setTransform(23.4,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000066").ss(0.5,1,1).p("AhChJQBNgVA4AuIhZCAg");
	this.shape_3.setTransform(18.3,8.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#03205C").s().p("AhChJQBNgVA4AuIhZCAg");
	this.shape_4.setTransform(18.3,8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000066").ss(0.5,1,1).p("AhGBFQgahMAog9ICJBOg");
	this.shape_5.setTransform(8.2,14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#03205C").s().p("Ag4hEICJBOIiXA7QgahLAog+g");
	this.shape_6.setTransform(8.2,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000066").ss(0.5,1,1).p("ABEBHQhKAag9goIBTiJg");
	this.shape_7.setTransform(14.4,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#03205C").s().p("AhDA5IBTiJIA0CXQgeAKgcAAQgoAAglgYg");
	this.shape_8.setTransform(14.4,23.4);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,33.5,33.6);


(lib.mc_fan01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#02102D").s().p("AgQARQgGgHgBgKQABgJAGgGQAIgIAIAAQAJAAAIAIQAGAGABAJQgBAKgGAHQgIAGgJAAQgIAAgIgGg");
	this.shape.setTransform(15.8,16);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000066").ss(0.5,1,1).p("ABKhDQAVBNgrA6IiEhag");
	this.shape_1.setTransform(23.4,17.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#03205C").s().p("AhQgWICagtQAVBNgrA6g");
	this.shape_2.setTransform(23.4,17.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000066").ss(0.5,1,1).p("AhChJQBNgVA4AuIhZCAg");
	this.shape_3.setTransform(18.3,8.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#03205C").s().p("AhChJQBNgVA4AuIhZCAg");
	this.shape_4.setTransform(18.3,8.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000066").ss(0.5,1,1).p("AhGBFQgahMAog9ICJBOg");
	this.shape_5.setTransform(8.2,14.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#03205C").s().p("Ag4hEICJBOIiXA7QgahLAog+g");
	this.shape_6.setTransform(8.2,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000066").ss(0.5,1,1).p("ABEBHQhKAag9goIBTiJg");
	this.shape_7.setTransform(14.4,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#03205C").s().p("AhDA5IBTiJIA0CXQgeAKgcAAQgoAAglgYg");
	this.shape_8.setTransform(14.4,23.4);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,33.5,33.6);


(lib.mc_02 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#3DE4F7").ss(0.5,1,1).p("Ag/AuIByg9ABUguIinBd");
	this.shape.setTransform(18.6,19.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#22EEFF").ss(1,1,1).p("ACMhtQgBALgCAMQgEAPgIAPQgFALgGAKQgKANgLAPQgJAKgLAMQgPAPgRAQQgJAIgJAJQgMAIgLAHQgoAZgiAGQgKABgJAAQgJAAgIAAQgQgCgMgB");
	this.shape_1.setTransform(19.7,13);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0ACDE2").ss(0.5,1,1).p("AChh9QANACgDAVQgBAHgDAJQgGARgIAOIAAABQgFALgGAJQgJAQgKAOQgBAAAAAAQgHALgKALQAAABAAAAQgLANgLALIAAAAQgPAOgPAMQgBgBAAABQgLAJgLAIQhBAqg/gDQgNgBgNgCQgvgKAAgoQABgcAZglQABgBABgC");
	this.shape_2.setTransform(17.2,13.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9CEDF3").s().p("Ah9BGIAAgCID7iMIgUAcIjLB1IgcgDg");
	this.shape_3.setTransform(18.4,16.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#82E7EF").s().p("AhlA7IDLh1IgUAYIimBdIgRAAgABSgiIggAfIhzA9IgTABgAAygDIgSAPIgYAPQgnAZgiAGgABSgiIAAAAg");
	this.shape_4.setTransform(18.8,18.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#076D77","#CCF5F7"],[0,1],-84.1,24.4,-73.6,43.6).s().p("Ah4BwQgZgFgKgOIgCgIQgHgXAYgmQAIgNAMgNQAvgxBIgdQAWgKAagIIAZgGIACAAQA8gPARAKIABAAIABABQADACABAEIABACIABABQAAAKgDAMQgDAPgIAQIgMAUIj8CMIgBgCg");
	this.shape_5.setTransform(17.7,12.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#22EEFF").s().p("Ah4B3QgcgGgJgPIgFgKQgHgZAagpQAIgNALgOIABAAQAagcAigUQAcgSAigOQAVgJAbgIIAZgGIABAAQAigJAVgBQATgBAJAGIABABIABAAQAFAEABAHIAAACIgCABIgBAAIgCgBIgBgBQgBgEgDgDIgBAAIAAAAQgRgLg9APIgBAAIgZAHQgbAHgWAKQhIAdgvAxQgLANgIANQgYAnAGAWIADAIQAJAOAZAGIACABIAAACIgBACIgCAAg");
	this.shape_6.setTransform(17.5,11.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#3DE4F7").s().p("AhiB9QgNgBgNgCQgvgKAAgoQABgcAZglIACgDIAUgXIABgBQAcgaAigTQgiAUgaAcIgBAAQgLAQgIALQgaApAHAZIAFAKQAJAPAcAGIACAAIABgCIAcADIARAAIATAAQAigGAngZIAYgQIASgQIAgggIAUgVIAVgcIAEACIgTAeIgBAAQgHALgKALIAAABIgWAYIAAAAQgPAOgPAMIgBAAIgWARQg9Aog6AAIgJgBgACVg5QAIgPAEgPQACgMABgLIABAAIACgBIAAgCQgBgHgFgEIAAgBQANACgDAVIgEAQQgGARgIAOg");
	this.shape_7.setTransform(17.2,13.1);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-0.5,36.5,27.2);


(lib.mc_01 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#001C55").ss(0.5,1,1).p("Al1g7ILiCFAl/hJIL/CF");
	this.shape.setTransform(42.2,52.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#031F4B").ss(1,1,1).p("AAAAAQAAAAAAAA");
	this.shape_1.setTransform(7.6,42.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#002671").ss(1,1,1).p("Ah8CDQgmgGgNgUQgDgEgBgFQgDgMADgPQAHgcAdgoIAAAAQADgCAEgFQAHgIAIgHQABAAABgBQAbgZAigUQAdgRAfgOQAYgKAbgIQANgDAMgCQAAgBAAAAQAigIAWgBQAPgCAMACQAAAAABAAIABAAQABAAABAAIABABQANADADALQgBAGAAAIIAAAAQgFAhgYAmIAAABQgJAOgLAOQgBABAAAAQgJAJgKAMQgBAAAAABIAAAAQgLALgMAMIAAAAQgNAOgPANQgFAFgFAEQgHAFgHAFIAAAAQg0AkgsAGQgTABgRAAIAAAAQgOAAgNgC");
	this.shape_2.setTransform(20.1,28.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#6B756A").ss(0.6,1,1).p("AAMgFQgFAHgHACQgDACgIgB");
	this.shape_3.setTransform(63.7,33);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2897A4").ss(0.5,1,1).p("AAPgJIgBALQgBAJgIgBQgSgBgBgGIAAgK");
	this.shape_4.setTransform(63.1,31.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#4ABDCA").ss(0.5,1,1).p("AAZgIIgCgQQAAgCgBgBQAAgBAAgCQgBgBgBgBIgpgHQgGgBgBAHIgCA2IgBAGQACAHAIABIArAFQAJABABgJIgFggg");
	this.shape_5.setTransform(72.5,29.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#0CE0DB").ss(0.5,1,1).p("AAfgCIgBgNIgDgMQAAgCAAgBQgCgGgCAAIgygKQgGAAgBAHIgDBHQADAHAIABIA1AHQAKABAAgKIgGgm");
	this.shape_6.setTransform(72.4,29.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#031F4B").ss(0.5,1,1).p("AgPAGIAfgEIAAgIIgeAEg");
	this.shape_7.setTransform(56.6,37);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#8AFAFF").ss(0.5,1,1).p("AgfA+IgsgBQgqgCAUgOIA7hpQAEgGAJACIB0AVQANAEABAKIgBANIgCANIgEA6QgBAMgSgBIhigDg");
	this.shape_8.setTransform(47,25.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#74E3E7").ss(1,1,1).p("AhyA2IBGh9QAFgHAKACICHAZQAOADABANIgJBlQAAANgUgBIi0gGQgwgCAWgQg");
	this.shape_9.setTransform(47.1,25.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#022146").ss(1,1,1).p("AhiBRIDJAGQAXACABgQIAKhxQgCgOgPgEIiYgbQgMgDgGAHIhOCOQgaASA4ACg");
	this.shape_10.setTransform(46.9,25.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#AE7600").ss(0.5,1,1).p("AAtiYQAIACAEAIQACADAAAEQABADABADQADAMADAOQAJAlACAtIAAAAQABAHABAHQAAANABARQAAAEAAAEQAAAUgBAVQgCAygHAXQgDANgDAEQgJAIhdgUQgOgDgRgEQgQgCAGgVQAAgBABgBQADgOAFgOQAXhYAGhZIAFg9IAAgEQAAgFADgDQADgFALACIA9ALQABAAABAAgAhLB3ICAAVQAJADAFggQADgUABgUQACgUAAgTQABgVgBgSQAAgHAAgGQgEg2gNg1QgDgUgIgF");
	this.shape_11.setTransform(71,38.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#74E3E7").ss(0.5,1,1).p("AgPAvIAFhcQgBgGAFABQASgBAFAdQABAJAAANIgEAsIAAABQgBAIgIgCQgPAAgFgEQgBgBgBgB");
	this.shape_12.setTransform(63.2,26.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#6B756A").ss(0.5,1,1).p("ABAg6QAFAHgEANIgMB6QgEAIgGABIj2gHQgagBACgNIBdicQAGgLAIACICyAgQAEABACACQAmgBgBAnQABADAAAEQACAJAAALAB7gOIgBgOQABgBAAAAQgBgNAQADIBBALQAPACACAPQACAEAFAgIACAJADRAkIAGAxQAAAMgLgCIg9gHQgKgBgDgJIAEhRQAAgJAIABIA5AKQAEAAABAJIADAOgABoAIIgDAuIgDASABKBUQgLgCgBgFIABgXIADhZ");
	this.shape_13.setTransform(55,25.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#1A3555").ss(0.5,1,1).p("AgQgIQABgGAGABQAUAAAGAb");
	this.shape_14.setTransform(63.5,21.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#B6B9B5").ss(0.5,1,1).p("AAVAAIAcAFIgBAEIgFAeAAVAAIgNgBIgXgFIABgJQAWgBAIgSIALACgAAQgiIgGgBQgMgCgJAMIACgNIATADAgsACQALgEASAAQALgBAMACAgvAPIADgNAgLgZIgDAKAgPgGIgbgFIgCANAAtAIQguASgugLAgwAWIABgH");
	this.shape_15.setTransform(66.1,4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#D7B306").ss(0.5,1,1).p("AATAKIAQgPIgWgEIgDgIIgGgSIgIAOIgFAGIgZAEIAPAOAARALIACAZIgTgOIgXAGIAEgZ");
	this.shape_16.setTransform(111,35.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(0.5,1,1).p("ABhgZIABADQAGAAAGAAIAAAAABugWQABAAABAAAD+BOIABgBQAAAAgBAAADYBHIAAAAAj/hFIABgIAjZgYIAAAA");
	this.shape_17.setTransform(87.3,28.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#5B605A").ss(1,1,1).p("AITg2IhXgTIghgHIgBAAIgNgCIg3gMQhIgGgLg2QgRhCgegTQgJgGgKgCIgRgDABOEaQAFABAFABQACAAABAAQAGABAFABQAGAAAFABQAoAFAJgFIAhgQIASgNIATgPIBJgyIAfgXIATgNIAkgZIA7grQAcgdA8APIAjAEAggkfQACgBADABIAGABIA5ALIBdARIAcAEIAQADAglkgQg7gEhABPAiijTQhIAEhCARQgOAEgMADQhfAdhCAyQhBAygQA2QgKAjAPAdQAGAOANANQAEAJAFAJQAFAHAFAGQAJALAMAKQAuAlBYAaQAJADAKADQABAAAAAAAlaDUQAIADAIACQAGABAGACQABAAABAAQAEABAEABQBKAQBgAKQADABAFAAAiAD5IADAAQAFABAGAAQBwAUBCAKQAGABAFAB");
	this.shape_18.setTransform(57.4,34.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#333333").s().p("ADRA7IgBgBIAAAAIAIgPIAGgPQgDATgIALIAAABIgBAAIgBAAgAACAZIgBgBIAGgQQADgKABgJQAAARgHASIgBABIgBAAgAjXgJIgBAAIAAgCQgEgLAAgMIgBgFQABgJADgJIABgBIgCAMIAAARQABAHAEALIAAABIAAAAIgBABIgBAAIAAAAg");
	this.shape_19.setTransform(44,56.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#002671").s().p("Al1g7IgKgOIL/CEIgTAPg");
	this.shape_20.setTransform(42.2,52.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#C3A200").s().p("AA4A1IiAgUIgDgBIAIgdQBlgKAqguIgCAnIgFAnQgEAdgIAAIgBgBg");
	this.shape_21.setTransform(70.8,47.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#BF8300").s().p("AglA4IgfgHQgQgCAGgVIABgCIACABICAAVQAJADAFggIAEgmIACgnIAIgJIAAAIQAAAUgBAVQgCAwgHAXQgDANgDAEQgDACgJAAQgYAAhCgOg");
	this.shape_22.setTransform(71,48);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#C2CDE1").s().p("AgEAGIAAgCQAFgDAEgGIAAAFQgBAGgGAAIgCAAg");
	this.shape_23.setTransform(64.4,33.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#001B4A").s().p("AgGAOQgLgCgBgEIABgVIACACIAAALQABAFASABQAIABABgHIABgNIAAgBIAFAAIgDAQQgEAJgHACIgGACIgFgBg");
	this.shape_24.setTransform(63.2,32.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#3BF5F2").s().p("AAcAvIg2gHQgIgBgDgHIADhHQABgHAGAAIAyAKQADAAABAGIABADIACAMIABANIAAACIAHAmQgBAJgHAAIgCAAgAgbghIgCA2IgBAHQACAGAIABIArAFQAJACAAgJIgEghIgCgHIgCgQIgBgDIAAgDIgCgCIgqgIIAAAAQgFAAgBAGg");
	this.shape_25.setTransform(72.4,29.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FCF7F1").s().p("ABiAkIA6geIABAIIg7AdgAicAlICJhPIgBAOIh8BBg");
	this.shape_26.setTransform(59.5,27.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#72CCD5").s().p("ACQAqIgtgFQgIgBgCgGIA7gdIAFAiQAAAHgGAAIgDAAgAg0AbIhkgDIB7hBIgEA6QgBAKgPAAIgDAAg");
	this.shape_27.setTransform(60.3,29.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#042A6B").s().p("AgOgCIAegDIAAAHIgfAEg");
	this.shape_28.setTransform(56.6,37);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#32BACA").s().p("ABOBGQgUAAgBgHIAAgLQAFAEAQAAQAJABABgIIgBANQgBAIgHAAIgBAAgAijA5QgqgCAUgOIA7hpQAEgGAJABIB0AWQANADABALIgBAMIiHBPgACJABQABgEAFAAIArAGIADACIAAADIABADIACAQIg5Aeg");
	this.shape_29.setTransform(55.8,25.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#AFEFF1").s().p("ABcBOIi0gGQgwgCAWgQIBGh9QAFgHAKACICHAZQAOADABANIgJBlQAAAMgRAAIgDAAgAgmg7Ig8BpQgTAOAqACIArABIAMAAIBjADQARABABgLIAFg6IABgOIABgMQgBgLgNgDIhzgWIgDAAQgHAAgDAFg");
	this.shape_30.setTransform(47.1,25.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#033067").s().p("AjrCDIgBAAQgmgGgNgUQgDgEgBgFQgDgMADgPQAHgcAdgoIAAAAIAHgHQAHgIAIgHIgTAYIgCADQgZAlgBAcQgBAoAvAJQANADAOABQA+ADBDgrIAXgRIAAAAQAPgMAPgOIABABIAVgYIABgBQAHgMAIgKIABgBIATgdIALgVIAAAAQAIgPAGgRIAEgPQACgVgMgCIgBABIgBAAIgBgBQgJgGgSABQAPgCAMACIABAAIABAAIACAAIABABQANADADALIgBAOIAAAAQgFAhgYAmIAAABQgJAOgLAOIgBABIgTAVIAAABIAAAAIgWAXIAAAAQgNAOgPANIgKAJIgOAKIAAAAQg2AkgsAGIgkABIAAAAIgbgCgAEDAxIjLgGQg3gCAZgTIBPiNQAGgHALACICaAcQAQAEACANIgKBxQgCAPgTAAIgEAAgABwhtIhGB+QgWAQAwACIC2AFQAUABAAgNIAJhlQgBgMgOgEIiJgZIgEAAQgHAAgEAFg");
	this.shape_31.setTransform(31.3,28.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#CACCC7").s().p("AAzAhIgGgaIgCgGQAAgDgCgDQgEgIgIgBIgCAAIg9gMQgLgCgDAFIgEgCIABgBQgBgNAQADIA/AMQAPABACAQIAHAjIACAJg");
	this.shape_32.setTransform(72.6,24.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#CBCBC3").s().p("AAeA1Ig6gHQgKgBgDgIIAEhSQAAgIAIAAIA3AKQAEABABALIADANIgEACIgCgMIAAgDQgCgGgCAAIgygJQgGgBgCAHIgCBIQACAHAJABIA1AGQAJACABgKIgGgnIAAgBIAEgBIAGAvQAAAKgIAAIgEgBg");
	this.shape_33.setTransform(72.4,29.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FBD800").s().p("AgtgxIAEg9IABgEQAAgGADgDQADgFAKACIA9AMIACAAQAJABAEAIQACADAAAFIACAGIAGAaQAIAlADAqIAAABIABANIABAgIgHAJIAAgOIAAgbIAAgGIAAgHQgFg0gMg1QgDgTgJgFQAJAFADATQAMA1AFA0IAAAHIAAAGIAAAbIAAAOQgqAuhkAMQAXhXAGhZgAgdhkIgEBUQADAIAKABIA6AHQALAAABgJIgGgxIgCgPIgDgNQgBgLgEgBIg3gKIgBAAQgHAAAAAIg");
	this.shape_34.setTransform(71.6,34.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D5FDFF").s().p("AADAzQgOAAgFgEIAFhcQgBgGAFABQASgBAFAdIABAWIgEAsIAAABQgBAGgGAAIgDAAg");
	this.shape_35.setTransform(63.3,26.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#C5C7C4").s().p("Ah6BXQgagBACgNIBdicQAGgLAIACICyAgQAEABACACQAFAHgEANIgMB6QgEAIgGABgAgyhRIhOCOQgaASA4ACIDJAGQAXACABgQIAKhxQgCgOgPgEIiYgbIgGgBQgIAAgEAFg");
	this.shape_36.setTransform(46.9,25.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#0D3B76").s().p("AAKA0IAEgvIgBgUQgEgcgSAAQgFgBAAAHIgDAAIAAgJQABgGAGABQAUAAAGAdIABAHQACAJgBALIAAABIgDAug");
	this.shape_37.setTransform(63.6,25.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#707270").s().p("AEVDzIgLgBQAFgXAPgFIBJANIghARQgEACgLAAQgNAAgVgDgAAwDPQAOgcAsADIBXAPQAoAQgFAYQhEgKhwgUgAiQCyIgIgCIgCAAIgMgCQgCgeAlgCQA1ABBNAXQAdARgEAWQhegLhKgQgAlUBjIB3AWQAXABAAARIgBAGQgCAIgFAKQhYgagugmgAhEBXQh/gKhSgQQhUgRgmgXQgPgcAKgkQAQg2BBgzQBCgyBfgcIAagIQARADAVgEIACAAQCAgXCSAfQB9AFBTBHQAsA4gpBpIgGAJIgCAEIgBgeIgBgOIAAAAQgDgtgIglIABAFIgBgJIgHgmQgDgPgOgCIhBgLQgQgDAAANIAAABIAAAOIgFA9QgFBZgYBYIgoAEgAmEgaQgDAQADAKQABAEADAFQANAUAmAFIABABIAbACIAAgBIAkAAQAsgHA2ghIAAgBIAOgJIAKgJQAPgOANgNIAAAAIAXgYIAAAAIABAAIATgXIABgBQALgOAJgPIAAAAQAYgmAFghIAAgBIABgOQgDgKgNgEIgBAAIgCgBIgBAAIgBAAQgMgBgPABQgWABgiAJIAAAAIgZAGQgbAIgYAJQghAOgdASQgiATgbAaIgCABQgIAGgHAJIgHAJIAAgBQgdApgHAbgACNgSIgCAKIAhgEIAAgKgAAEjaIhbCeQgCANAaABID3AHQAGgBADgIIAMh8QAFgNgGgHIADAAIAAAAIAAAAQAjAAAAAkIAAACIAAgCQAAgkgjAAIAAAAIAAAAIgDAAQgCgCgDgBIi1ggIgCgBQgHAAgFAKgADPiyIAAAJIgEBbIAAAXQABAFALACIANABQAKABABgJIAAgFIACgSIADguIAAgBQABgNgCgJIgBgHQgGgdgWAAIgCAAQgEAAgBAFg");
	this.shape_38.setTransform(41,38.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A9B2AD").s().p("AgYAGIAZAFIAYAFQgNgCgLABQgQAAgMAFgAAHgTIAVADQgOgCgKAMg");
	this.shape_39.setTransform(64.3,2.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgwAWIABgEIABgHQAuALAtgSIAEABIgFAeIgBAEgAAIgFIgWgFIACgJQAVgBAIgSIAKACIgFAhg");
	this.shape_40.setTransform(66,4.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6B756A").s().p("ACRA4IhUgNQg9gLgwgCIg9gFIgsgCIgegBQCtgCC6AogACtA3IAAgCQAHgSgCg3IAAAAIAAgBIACAAIABAAIAAABQAFAtgFAPIgGAPIgBABIgBgBgAicASIgBAAIAAgBIAAgCIABAAIABAAIBbgCQALABAIgKIAPgyIAAAAQACgEAAgDQAAAAgBgBQAAgBAAAAQAAgBgBAAQAAAAgBAAIgBgBIAAgBIAAgBIACAAIADACIACADIgBAJQgGAagLAYIAAABQgIALgNACQgUABgWAAQgYAAgagCg");
	this.shape_41.setTransform(56.9,11.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#383838").s().p("AgvAXIACgNQAMgFARgBQALAAAMABIANACIAcAGIgBAEIgDgBQgeALgbAAQgRAAgRgEgAgMgQQAKgMALACIAHABQgIARgWACg");
	this.shape_42.setTransform(66.2,3.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#3E433E").s().p("ADFEeIgEAAIgKgCQAIgKADgTIgGAOIgIAPIgKgCQAFgYgogPIhXgQQgsgDgNAcIgLgBIgCAAQAHgTAAgTQgBAJgDAMIgGARIgIgBQAEgWgfgRQhMgWg2gBQglABADAeIgRgFIAAAAQgEgMgBgHIAAgQIACgNIgBABQgDAJgBAJIABAGQAAALAEAMIgCAAIgTgGQAFgKACgIIABgGQAAgQgWgCIh3gVQgMgKgJgLILhCIIgSANIhIgNQgPAEgFAYIgLgCgAmuBvIgIgSIBlAVQCpAjDJAbQBNANA+AEIAfACQBfAVAJgIQADgFADgNQAdgEAUgIQAngZAmgcIgcBGIhJAygACIjKQhJgLAOg6IABgCIAFgLIA7ALIBdARIAbAEQgMA2hHAAQgTAAgYgEgABCkeIAAABIACAAQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQABACgCAFIAAAAIgQA0QgHAKgLgBIhZACQA+hPA6AEg");
	this.shape_43.setTransform(46.8,34);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#093F87").s().p("AAnAtIARgQIgWgEIgEgJIApAIIgGAZIgagEgAgmAeQgdgfgDgvIBWATIAHAIIhNgRQgCAVANARIA6AMIgFAHIgXADIANAQIAAABQgWgFgQgEg");
	this.shape_44.setTransform(108.9,31.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1270C7").s().p("AAXAXIgGgRIgKAOIg6gMQgNgRACgVIBNAQIAIAKQASASAWAQIAAABIgogIg");
	this.shape_45.setTransform(109.7,31);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#F8D00E").s().p("AAAAVIgWAIIADgaIAAAAIgPgPIAZgCIAFgHIAIgNIAFARIAEAJIAWADIgRAPIgBAAIAAABIABAZg");
	this.shape_46.setTransform(111,35.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7A8B81").s().p("AADgYIAYgUIgiBMIgTAMg");
	this.shape_47.setTransform(93.8,46.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#BF2300").s().p("AgeAAIAfgWIgcBEIggAXgAAagqIAigbIgjBNIghAag");
	this.shape_48.setTransform(94,46.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#A0A398").s().p("AAHAOIgbhnIAZABIATBnIgYA4IgXATg");
	this.shape_49.setTransform(96.6,35.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F06200").s().p("AANgGIgehgIAUABIAdBnIggBNIgfAYg");
	this.shape_50.setTransform(94.1,36.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#03205C").s().p("Ag7AbIALgbIgbhpIACAAIAgAHQADAvAdAgQAOAFAYAEIgDAXIAWgHIAUAOIgBgXIABAAIAaADIgCAOIgGAnIgigEQg6gPgcAdIg8Arg");
	this.shape_51.setTransform(106,36.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EE5D02").s().p("AACAYIgRhnIAMAAIAZBoIgLAcIggAbg");
	this.shape_52.setTransform(98.8,34.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#899388").s().p("ABBBOIgWgBQgbgDgagFQgpgOgHgWIgJgwQgOg3gKgJQAeATARBAQALA3BGAGIA3ALIAAAEIgbgCg");
	this.shape_53.setTransform(87.9,18.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#5B605A").s().p("ACeDvQg+gFhNgMQjJgcipgiIhlgWQgNgMgGgOQAmAXBUARQBSAQB/AKIEBAHIAogEIgIAcIAAACQgHAVARACIAeAHIgfgCgAE0CjQACgVgBgUIAAgIIACgEIAGgJQAphpgsg4QhThHh9gFQiQgfiCAXIgCAAQgVAEgRgDQBCgRBIgEIAAABIABAAQAwAEAqgDQANgBAIgMIAAAAQALgaAGgaIABgKIgCgDIAFAAIAGACIgFAKIgBACQgNA7BJAKQBuATAQhEIAQADIAAAAQACA5gHASIAAACIABABIABgBIAGgPQAFgPgFguIARADQAKACAJAFQAKAJAOA3IAJAyQAHAWApAOQAcAFAbADIAgBdIguBwQgmAbgnAZQgUAIgdAFQAGgXACgygAhgifIAeACIAsACIA7AEQAyADA9AKIBUANIAfAFQi4gnimAAIgJAAg");
	this.shape_54.setTransform(48.2,29.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#217DE0").s().p("AD3BNIoIhcQgMgDgJgDQgPgHgJgJIgGgGIgCgEIAEADQALAHATAHIAgALIADABIH8BaIBMAFgAD4AoIgSgCIABgFIASACQAfADAogBIABAEIgIACIgJAAQgeAAgagDgAi0giIAAgEIGPBGIgBAEgAj3gtIgTgGQgPgHgIgIIgFgHIgCgDIAEACQAKAHARAIQANAFASAFIACABIApAHIAAAGg");
	this.shape_55.setTransform(41.7,67.3);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#46AFE8").s().p("AC+BPIADgTIABgGIABgEIAMg/IAMAAIgKA9IgBADIgBAFIgCAHIgDASgAjaAFIACgQIABgFIABgCIAAgCIACgGIAAgCIAGgUIAFgLQAFgLAIgKIADABIAIACIAAAAQgLANgHASIgGAVIgBABIgBAEIAAAEIgCAGIgDARg");
	this.shape_56.setTransform(44.1,65.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#19479F").s().p("AD8BeIgFAAIoIheQgKgBgHgEQgRgGgKgMIgBAAIAAgBQgFgEgDgGIAAAAIgCgEIgBgBQgLgTAIADIATATQAdASAfAHIA/ALIAKAAIGOBIIANADIAWAFIBSACQADACgFAFQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQgaACgnAAIgRAAgAk/ggIAGAGQAIAKAQAGQAIAEAMACIIIBdIBQAAIhLgGIn9hZIgCgBIghgLQgSgHgLgHIgEgDIACADgADqA4IABgHIASACQAeAEAjgBQgVAFgvAAgAixgQIACgHIGOBGIgCAHgAD+AvIgSgCIABgEIARADIBJAEIgCAAIgaABQgYAAgVgCgAivgbIABgEIAVAFIAAgBIABgEIAAgDIADgPIABgMIAAgHIgBgPIAAgBIgIgCIgDgBIAEgGIAJABQBKAQBdAMIAIABIABABIABAAIABgBIACABIALABIC1AfIAKACIABABIABAAIABgBIAAAAIAKABIAEABIAKACIgPAEIgMAAIgMA/gADdAmIALg6QhEgLhtgUIgPgCIgKAAQhEgKg6gKIgHgBIgWgFIgNgDIAAAQIAAAHIgBAMIgDAOIAAAEIgBAEIAuAJIgFAAgAj2gcIgRgGQgPgHgKgLIAAAAIgBgBQgEgFgDgFIAAgBIgCgDIgBgBQgKgTAHADIASATQAZARAfAGIArAIIgBAFIgpgIIgCAAQgSgFgNgGQgRgHgLgHIgDgDIACAEIAFAGQAIAJAOAGIAUAHIA3AKIgBAGg");
	this.shape_57.setTransform(41.2,66.2);

	this.addChild(this.shape_57,this.shape_56,this.shape_55,this.shape_54,this.shape_53,this.shape_52,this.shape_51,this.shape_50,this.shape_49,this.shape_48,this.shape_47,this.shape_46,this.shape_45,this.shape_44,this.shape_43,this.shape_42,this.shape_41,this.shape_40,this.shape_39,this.shape_38,this.shape_37,this.shape_36,this.shape_35,this.shape_34,this.shape_33,this.shape_32,this.shape_31,this.shape_30,this.shape_29,this.shape_28,this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,117.1,76.6);


(lib.l2copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.302)").ss(0.1,1,1).p("AjhAAQAvAFBHAFQgMgDgOgEQg5gLgUgQIABgIQAMADAzATQBHAPCAgCQAGAAAWgEIAGABQgLACgUAEQgcAGgtABQAKACAJAAIBxgDIBogKIADAAQAEABAAABQgcAJgQAFQgeAJgvAEIhbACQimgHhJgL");
	this.shape.setTransform(-1.7,-26.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161923").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(-22.6,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161620").s().p("AiWGeQACg/gKgvIgEgSIAAAAQgFgWgLiCQgGhLgcgpIgEgHIgGgFIgBAAIAAABIAAABIAAAAIgCABIgRAdIAAloQBJALCpAGIBYgBQAvgFAegJIAsgOQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgEAAIhoAKIhvACIgVgBQAtgCAcgGQAVgDAKgEIgGgCQgVAGgHAAIggABIAAAAIAAAAQhmAAg9gOIgBgBIgCAAIg/gXIgBAJQATAQA5ANIAaAGQhHgFgvgHIAAjaQBHAKBDAEQAfACAdAAQCAABB1gYIACANQAGAjAMBdIACAWIADAbQAQCJAAAaIABA+IgBANIAAAEIABAFQgCBvgICiIgFB/IAAABIAAANIgDCAQgwCYheAAQhcAAiNiYgAjylCIAAgSQAvAHBHAFIgagGQg5gNgTgQIABgJIA/AXIACAAIABABQA9AOBmAAIAAAAIAAAAIAggBQAHAAAVgGIAGACQgKAEgVADQgcAGgtACIAVABIBvgCIBogKIAEAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAAAAAIgsAOQgeAJgvAFIhYABQipgGhJgLgAjylCIAAAAgAjylUIAAAAg");
	this.shape_2.setTransform(0,7.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.3,-49,49.7,113.3);


(lib.l2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.302)").ss(0.1,1,1).p("AjhAAQAvAFBHAFQgMgDgOgEQg5gLgUgQIABgIQAMADAzATQBHAPCAgCQAGAAAWgEIAGABQgLACgUAEQgcAGgtABQAKACAJAAIBxgDIBogKIADAAQAEABAAABQgcAJgQAFQgeAJgvAEIhbACQimgHhJgL");
	this.shape.setTransform(-1.7,-26.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161923").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(-22.6,8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#161620").s().p("AiWGeQACg/gKgvIgEgSIAAAAQgFgWgLiCQgGhLgcgpIgEgHIgGgFIgBAAIAAABIAAABIAAAAIgCABIgRAdIAAloIAAgSIAAjaQBHAKBDAEQAfACAdAAQCAABB1gYIACANQAGAjAMBdIACAWIADAbQAQCJAAAaIABA+IgBANIAAAEIABAFQgCBvgICiIgFB/IAAABIAAANIgDCAQgwCYheAAQhcAAiNiYgAAAkxIBYgBQAvgFAegJIAsgOQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBAAAAAAIgEAAIhoAKIhvACIgVgBQAtgCAcgGQAVgDAKgEIgGgCQgVAGgHAAIggABIAAAAIAAAAQhmAAg9gOIgBgBIgCAAIg/gXIgBAJQATAQA5ANIAaAGQhHgFgvgHQAvAHBHAFIgagGQg5gNgTgQIABgJIA/AXIACAAIABABQA9AOBmAAIAAAAIAAAAIAggBQAHAAAVgGIAGACQgKAEgVADQgcAGgtACIAVABIBvgCIBogKIAEAAQAAAAABAAQABAAAAAAQABABAAAAQAAAAAAAAIgsAOQgeAJgvAFIhYABQipgGhJgLQBJALCpAGgAh8lIIAAAAg");
	this.shape_2.setTransform(0,7.6);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-25.3,-49,49.7,113.3);


(lib.l1copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161923").s().p("AAAgQIAFARIgKAQQACgRADgQg");
	this.shape.setTransform(18.6,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161620").s().p("AjGIVQgIgGgEgIQgUggARhHQgMgPgJgPIgCgDIgCgRQgDgTAFgMQAGgRAYgaQAXgaAFgkQADgOgBgNQAAgTgFgPQgIgbAAgLQAAgFADgHQAFgSARgcIATgjQAGgMAAgEQgBgTgQgLIgFgDQgWgPgBghQAAgOAVgrQAVgrAAgVQAAgLgMgZQgLgaAAgSQAAgMAKgPQAGgJADgMQACgMAAgOQAAgRgJgSQgGgMgKgNQgXgfADguIACgeQDglBCXFBIgCBGIAAAUQAvFFABAhQAAAKgKAQQgGAKgKANQgRAQgGAbQgFAQgBATIAMgQIARAwQAFAMAJA2QAGAhgJAaQgFARgKAPIAEAGIAIALQAWAgACApQiBE2iFAAQhXAAhZiCg");
	this.shape_1.setTransform(0,-1.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24,-67.8,48.1,132.6);


(lib.l1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#161923").s().p("AAAgQIAFARIgKAQQACgRADgQg");
	this.shape.setTransform(18.6,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#161620").s().p("AjGIVQgIgGgEgIQgUggARhHQgMgPgJgPIgCgDIgCgRQgDgTAFgMQAGgRAYgaQAXgaAFgkQADgOgBgNQAAgTgFgPQgIgbAAgLQAAgFADgHQAFgSARgcIATgjQAGgMAAgEQgBgTgQgLIgFgDQgWgPgBghQAAgOAVgrQAVgrAAgVQAAgLgMgZQgLgaAAgSQAAgMAKgPQAGgJADgMQACgMAAgOQAAgRgJgSQgGgMgKgNQgXgfADguIACgeQDglBCXFBIgCBGIAAAUQAvFFABAhQAAAKgKAQQgGAKgKANQgRAQgGAbQgFAQgBATIAMgQIARAwQAFAMAJA2QAGAhgJAaQgFARgKAPIAEAGIAIALQAWAgACApQiBE2iFAAQhXAAhZiCg");
	this.shape_1.setTransform(0,-1.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24,-67.8,48.1,132.6);


(lib.gr_ch_forarm_Lcopy4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AEcnKQAKBggZCEQguDmkcIFAkeHKIBJmaQAMhMAXiEQACgJACgKQACgMACgOQAHgmBHj+QABgJACgK");
	this.shape.setTransform(-1.5,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBA75").s().p("AjBImQAuiUA5iIQA5iIBKjUQA9isAkjHQAJgvAHgxIADAAQAbAzAHBHQALBfgaCEQgtDnkcIEQAAADgUAAIgUAAg");
	this.shape_1.setTransform(7.7,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9C6C").s().p("AAAABIAAgBIABABg");
	this.shape_2.setTransform(23.3,-52.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC488").s().p("AkKIQIBImaIAkjQIAEgTIAEgaQAHgmBHj+IACgSQAPAQAUgnIAFgKIAFgIQAZggAWgYQA5goA/gHQAzAFApAkIACACQARAOAOATIAAADQgIAxgIAwQgkDGg+CtQhMDUg5CIQg3CIguCTQiIgNgxgwg");
	this.shape_3.setTransform(-3.5,-0.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.2,-59.8,59.5,118.7);


(lib.gr_ch_forarm_Lcopy3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AEcnKQAKBggZCEQguDmkcIFAkeHKIBJmaQAMhMAXiEQACgJACgKQACgMACgOQAHgmBHj+QABgJACgK");
	this.shape.setTransform(-1.5,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBA75").s().p("AjBImQAuiUA5iIQA5iIBKjUQA9isAkjHQAJgvAHgxIADAAQAbAzAHBHQALBfgaCEQgtDnkcIEQAAADgUAAIgUAAg");
	this.shape_1.setTransform(7.7,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9C6C").s().p("AAAABIAAgBIABABg");
	this.shape_2.setTransform(23.3,-52.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC488").s().p("AkKIQIBImaIAkjQIAEgTIAEgaQAHgmBHj+IACgSQAPAQAUgnIAFgKIAFgIQAZggAWgYQA5goA/gHQAzAFApAkIACACQARAOAOATIAAADQgIAxgIAwQgkDGg+CtQhMDUg5CIQg3CIguCTQiIgNgxgwg");
	this.shape_3.setTransform(-3.5,-0.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.2,-59.8,59.5,118.7);


(lib.gr_ch_forarm_Lcopy2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0.2)").ss(1,1,1).p("AEcnKQAKBggZCEQguDmkcIFAkeHKIBJmaQAMhMAXiEQACgJACgKQACgMACgOQAHgmBHj+QABgJACgK");
	this.shape.setTransform(-1.5,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBA75").s().p("AjBImQAuiUA5iIQA5iIBKjUQA9isAkjHQAJgvAHgxIADAAQAbAzAHBHQALBfgaCEQgtDnkcIEQAAADgUAAIgUAAg");
	this.shape_1.setTransform(7.7,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9C6C").s().p("AAAABIAAgBIABABg");
	this.shape_2.setTransform(23.3,-52.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC488").s().p("AkKIQIBImaIAkjQIAEgTIAEgaQAHgmBHj+IACgSQAPAQAUgnIAFgKIAFgIQAZggAWgYQA5goA/gHQAzAFApAkIACACQARAOAOATIAAADQgIAxgIAwQgkDGg+CtQhMDUg5CIQg3CIguCTQiIgNgxgwg");
	this.shape_3.setTransform(-3.5,-0.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.2,-59.8,59.5,118.7);


(lib.gr_ch_forarm_Lcopy_new_031_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AEcnKQAKBggZCEQguDmkcIFAkeHKIBJmaQAMhMAXiEQACgJACgKQACgMACgOQAHgmBHj+QABgJACgK");
	this.shape_4.setTransform(-1.5,6.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFBA75").s().p("AjBImQAuiUA5iIQA5iIBKjUQA9isAkjHQAJgvAHgxIADAAQAbAzAHBHQALBfgaCEQgtDnkcIEQAAADgUAAIgUAAg");
	this.shape_5.setTransform(7.7,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9C6C").s().p("AAAABIAAgBIABABg");
	this.shape_6.setTransform(23.3,-52.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC488").s().p("AkKIQIBImaIAkjQIAEgTIAEgaQAHgmBHj+IACgSQAPAQAUgnIAFgKIAFgIQAZggAWgYQA5goA/gHQAzAFApAkIACACQARAOAOATIAAADQgIAxgIAwQgkDGg+CtQhMDUg5CIQg3CIguCTQiIgNgxgwg");
	this.shape_7.setTransform(-3.5,-0.8);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.2,-59.8,59.5,118.7);


(lib.gr_ch_forarm_Lcopy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0.2)").ss(1,1,1).p("AEcnKQAKBggZCEQguDmkcIFAkeHKIBJmaQAMhMAXiEQACgJACgKQACgMACgOQAHgmBHj+QABgJACgK");
	this.shape.setTransform(-1.5,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFBA75").s().p("AjBImQAuiUA5iIQA5iIBKjUQA9isAkjHQAJgvAHgxIADAAQAbAzAHBHQALBfgaCEQgtDnkcIEQAAADgUAAIgUAAg");
	this.shape_1.setTransform(7.7,3.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#CC9C6C").s().p("AAAABIAAgBIABABg");
	this.shape_2.setTransform(23.3,-52.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFC488").s().p("AkKIQIBImaIAkjQIAEgTIAEgaQAHgmBHj+IACgSQAPAQAUgnIAFgKIAFgIQAZggAWgYQA5goA/gHQAzAFApAkIACACQARAOAOATIAAADQgIAxgIAwQgkDGg+CtQhMDUg5CIQg3CIguCTQiIgNgxgwg");
	this.shape_3.setTransform(-3.5,-0.8);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-31.2,-59.8,59.5,118.7);


(lib.gr_Ch_Body_01_021copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("AEnnJIACAfQAAAhgYBPQgjByg+BoQi+E8lyBpAGBixQgZBnhGB1QiJDqkJC1");
	this.shape.setTransform(4.5,54.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AFSpTIACAfQAAAigYBPQgjByg+BoQi/E7mYFRAF7nyQAPFchtDUQhtDVkEFB");
	this.shape_1.setTransform(0.2,68.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("ADN1EIgsghIgXgLIAFAdQADALgBALQAAABgBABQgBAFgBAGQgFARgPASIAAAAQgTAXgjAYQhAArhOASIgKACQgFABgGABQgIABgIACQgQACgRABQgfADghgBQiigFg+g8Qg9g8AFgyIhFAaQgMCVCtA6QBFAYBFAIQAMABAKABQAGAAAGABQANAAANABQAGAAAGAAIAAAAQALAAAKAAQAlgBAmgFQAxgGAqgPQBkghBHhJQAWgVAKgYQAAgBABAAIAAgBQARgpgRgwIA3AQQHRCBAPA1IAAAAIgEgHAJlt5IgHBfIAAAGIgBAHIAAABQAAAEAAADQAAAGgBAHQABABgBABQAAAIAAAJQgCA0gCEHQAAAkAAAjIACCRQACAmACAjQAEA4AFAuQABAIABAIQAEAcADAcIAAABQAFAnAEAjQAFA1ADAtQAAAFABAFQAZCZAeCqQABAJACAJIAAAAIAFAcQABAEABAFQADAMADAOQAAACABACQACANAEAPIACAOIAGAZAK4IgIACAKIACAMIAHAkIAJArIAAgBQAAACAAACQACAFABAFIgXhrQgKg1AIAkIACAKIAAAAIAEARALMKFIABACIAJAxIBZG7QgGAoguASIgchbIAABvQizA7imAnQhRAUhPAOQgQADgRADQjvAqjTgFQgkAAgjgCQhogHhggSQhagRhTgbIAAqHIgitSALBJNQABAGABAHALPKSQABAKACAKQABABAAABQABAIACAIALNKHIALAwAsZtHIAWByIAPEaIAZEKAot0qIkBBc");
	this.shape_2.setTransform(-1.1,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C8CFD").s().p("AAGU0QhQgThbgZIAAqHIghtSIAAgBIgakKIgPkaIgWhyQhOldA6gqIEBhcQgMCVCrA6QBEAYBGAIIAWACIAMAAQgeAfhaCcQhUCThfEbIgCAOQAAALgGA2QgJA2AAAKQAAALgIA3QgJA3AAALQAAD+AzEAQANBAAWBlQARBOAAAoQAAAFgNBNQgNBNAAB0QAAB7BCCqQAcBHA+CSQhogGhhgSgABJrSQgKAZAAALIgSA2QgSA2AAAHIgBAGQAyifgCAAIgBACg");
	this.shape_3.setTransform(-54.3,36.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002B2B").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(19.4,-92.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#016564").s().p("AAAAAIAAAAIAAAAg");
	this.shape_5.setTransform(11.3,-96.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("ArSS0QBaAZBTATQhagRhTgbgAK0ISIALAwIgCAAgAK/JCIgLgwIgBgCIgJgrIgCgNIACAJIAEASIAHAiIABAEIADAQIAGAZgAK/JCgAKjHBIgBgGIgBgGIgCgKIAEARIAAAAIAFAcIACANgAKoHYIgFgcIAAAAIgDgSIg3lDIgBgLIACAPIA5FRIAFAaIACALIgCgJgAKjG8gAKfGrIAAAAIAAAAIACAKQgBgEgBgCQAAgCAAAAQgBgBABACQAAABAAACQgLg0AJAkIACAKIABgBIADASgAKjG8IAAAAgAKfGrgAKfGrgAKfGrgALQzfQAGACgEAGg");
	this.shape_6.setTransform(1.4,44.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003333").s().p("AAAgCIAAADIABACg");
	this.shape_7.setTransform(72.8,-82.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D2D202").s().p("AhaSzIiGAiIghAGQBlgpBCABgACVuEIACAAIgCAHgAECzaIAAAAIgCABIACgBg");
	this.shape_8.setTransform(44.6,44.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#45A2FE").s().p("Al9VaIhGgCQg+iTgchHQhCiqAAh7QAAh0ANhNQAMhNAAgFQAAgogQhOQgXhlgNhAQg0kAAAj+QAAgLAJg3QAIg3AAgLQAAgKAIg2QAJg2AAgLIACgOQBfkbBUiTQBaicAegeIAZABIAMAAIAAAAIAWAAQAkgBAmgFQAxgGAsgPQBkghBFhJQAXgVAKgYIAAAAIAAgBIAAgBQARgpgQgwIA3AQQHQCBAPA1IABAFIAFAPIACAIQALAvgBArQAAAhgIAgQgXBjhDAnQgsAZgKAKIAHhfIgHBfQgFAFAEABIABAAIgBAHIAAABIAAAHIAAANIAAACIgBARQgCA0gCEHIABBHIABCRIAEBJQAEA4AFAuIACAQIAIA4IAAABIAIBKQAGA1ACAtIABAKIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIAAACIADAQIABAAIBYG7QgGAoguASIgchbIAABvQizA7imAnQhRAUhPAOICHgiQhCgChlAqQjYAmjBAAIgqgBgAJJx/IACgBIgBAAIgBABgAp3owQgBgHATg2IASg2QAAgLAKgZQAIgTg3CxIABgHgAI7zvIACADIAKAXg");
	this.shape_9.setTransform(11.7,35.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AB6C43").s().p("AgOCcIgLAAIgagCIgMAAIgWgCQhGgIhEgYQitg6AMiTIBEgaQgEAyA9A8QA9A6CjAFQAhAAAdgCIAggEIARgCIALgCIAKgCQBPgSBAgpQAkgYATgXIABAAIgBgBQAOgSAFgQIACgLIABgCIgCgUIAAgCQADAIAAAIIgBAGIABgGQAAgIgDgIIgEgdIAWALIAtAhQAQAwgRApIAAABIgBABIABAAQgKAWgWAVQhIBJhjAhQgsAOgyAHQglAFglABIgTAAg");
	this.shape_10.setTransform(-18.3,-90.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#A06B4B").ss(1,1,1).p("AAAAAIAAAA");
	this.shape_11.setTransform(-30,-72.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AiAFUQgMgCgMgCQgOgEgOgEQg1gRgugcQiYhiA9g8QAfgeADgoQAhggAGgoIAAhJQABgBAHhMQC2iDFTgwQACBFAHAZQgBAvABAPQASCqAxAfQBFAuALA4Qg8CPiqA6QgeAKgiAHQh4AbhlgS");
	this.shape_12.setTransform(-17.1,-106.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFC184").s().p("AAAACIABgDIgBADg");
	this.shape_13.setTransform(-30,-72.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC9C6C").s().p("Ag2FUIABgEIgCAEIgYgEIgcgIQg0gRgvgcQiXhiA9g8QAfgeADgoQAhggAFgoIAAhJQABgBAIhMQC1iDFUgwQABBFAIAZIi3DjQgwA0gXBDQgiBiB7AGIAGAPIgQAgIAKALIBVAQIAHAKIgLAgQgeAKghAHQhKAQhCAAQgpAAgpgHg");
	this.shape_14.setTransform(-24.5,-106.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFC488").s().p("AgPD8IgGgLIhWgPIgKgLIARggIgHgQQh6gFAihiQAWhBAwg2IC1jkQgBAvABAQQASCqAxAhQBFAsALA4Qg8CPioA5g");
	this.shape_15.setTransform(1.4,-103.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AoHyrQAcgjApAJQgFAyA9A8QA+A8CiAFQBCACA6gMIAKgCQBOgSBAgrQAjgYATgXIAAAAQALgOAGgNQABgDABgCQAAgCABgBQABgGABgFQABgBAAgBQAAgFgCgPQAAgBAAgBIghhRQAdgMAxAtQAaAiABAxQAAAEAAADQAAADAAACQgCAbgIAeIAAABQgBAAAAABQgKAYgWAVQhHBJhkAhQgqAPgxAGQhLAJhHgFQgKgBgMgBQhFgIhFgYQitg6AMiVIhGAZQisBOgpAnADi0EQCzANCoA5QADABADABQAGACAFACQARAGARAGAJ7p/QAAAAAAAAQAJgNADgOQABgBAAgBQAAgCAAgDQABgJAEgIAJ7p/IgBACIAJgQQAAAKgBAKQABABgBABQAAAIAAAJQAAABAAABQgCAzgCAxQAAATgBASQgECkAACDQABD4AVB+QAMBKANBPQAZCZAeCqQABAJACAJAJ7p/IAAAAQgDAEgDAEAJ7p/IADgcIANhfAJwysQAwATAvAWALeKfIACAKIACAMIAHAkIAJArIABACIALA6IgCgHQgBgJgCgJQAAgBgBgBQgCgKgCgKALnLMIgFgcIAAAAIgEgRIAAAAIgCgKQgIgkAKA1IAWBrAMBNFIgJgoIgCgOQgEgPgCgNQgBgCAAgCQgDgOgDgMQgBgEgBgFALyMEIAAgBQABAHABAHALpLZQgBgGgBgHAL+NAIABADIAAABIACALAGSUXQDEgkA4gUQAFgCAEgCQATgHASgJQBbgjAKhKQAHgxgQhqQgHgwgNg8QAAgCAAgCIAAgBQgBgFgCgGIAAgBIgOhAAMCNUIgBgFAMCNTIgBgEArzrIIAWByIBKHMQgCB7gFB+QgECAAMG8QABAggrDcQgsDcA+BJQA+BJCFgMQAUACAUACQISAxE+gnQABAAAAAAQAAAAgBAAQADAAACAAQgCAAgCAA");
	this.shape_16.setTransform(-4.9,20.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("Aj1kgQADALgBALAD2EfQgBABgBABQgEAAgOgH");
	this.shape_17.setTransform(37.9,-74.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D2D202").s().p("AAAAAIABAAIgBAAg");
	this.shape_18.setTransform(44.6,131.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BFD8E1").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAg");
	this.shape_19.setTransform(59.3,-41);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#80AFC4").s().p("ABCL1IACAAIAAAEIgCABgAhAr5IAJACQgDANgJANIAAAAg");
	this.shape_20.setTransform(65.5,29.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFF00").s().p("Ai4PZIABAAIgBAAgAC2IQIABAFIAAAAgAC0IFIgBgEIgLg5IAOBAIABABIACALIAAAAIgCAAIAAAAgAC2IIIAAgBIABACgACoHIIgBgCIgJgrIgCgNIACANIgHglIgBgFIgBgHIgCgKIACAKQgBgDgBgCQAAgCAAAAQAAgBAAABQAAABABADQgLg1AIAkIACAKIAAAAIAEARIAAABIAFAcIgFgcIAAgBIgDgRIg3lEIgZiWQgVh+gBj7QAAiCAEikIABglIAEhkIAAgCIAHgNIgEByIgCAlQgFCkAACDQABEPAVCEIAVCBIA5FRIAFAaIACAKIAEASIAHAjIABAEIAEAPIAIAoIAAACgACeGWIgCgIIACAIgACXFxIAAAAgACXFxgACTFgIAAAAIABAAIADARgAA4u4IAAgTIgJAQIABgCIAAAAIAAAAQAJgOADgNIAHACIgCAHIAAAFIgCAOIABgNIgEAPIgEACIAAACIAAgCgABDvWQAOAHAEAAIgTAPQACgLgBgLg");
	this.shape_21.setTransform(53.8,52.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#002B2B").s().p("AAAAAIAAAAIAAAAg");
	this.shape_22.setTransform(19.4,-92.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#017676").s().p("AAAAAIAAAAIAAAAg");
	this.shape_23.setTransform(11.3,-96.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#45A2FE").s().p("Am3T7IgpgEQiFAMg9hJQg+hJArjcQAsjcgBggQgNm8AFiAQAFh+ACh7IhLnMIgWhyQhdjoAuhtQAqgnCrhOIBHgZQgMCVCtA6QBEAYBGAIIAWACQBHAFBKgJQAwgGAsgPQBjghBIhJQAWgVAKgYIAAAAIAAgBIAAgBQAJgeABgbIABgFIAAgHQgBgxgagiQCzAOCoA4IAGACIALAEIAiAMIAAAAQAwATAvAWIARApQADACALAVQAJASAEAKIABAEIAAAAQAIAVAHAUIADAKIABAFQAFACgDAGIABAGIABAAIAEAVQAFAhAAAeIgCAZQgCAVgEATQgYBjhbBTIgCABQgEABgOgIIgGgCIAAgCIABgFQABgIAEgJQgEAJgBAIIgBAFIAAACIgJgBIANhfIgNBfIgEAcIAAAAIgGAIIAGgIIAAACIAJgQIgBAUIAAACIgIAbIAGgIIAAAAIgBACIABgCIABAAIgDBkIgBAlQgFCkABCDQABD4AUB+IAZCZIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIABACIADASIACAHIAAADIAAABIACALIABAFIAAAAIABABIAAACIACAAQAMA8AIAwQAQBqgHAxQgLBKhbAjIgkAQIgJAEQg4AVjEAjIgBAAQiMASi2AAQjlAAkpgcgAH1RHIACgCIAAAAgAKCqRg");
	this.shape_24.setTransform(-5.6,22.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#016564").s().p("AgKAiIAAAAIACABgAAJggIAAgBQADAKgBALIgCgUg");
	this.shape_25.setTransform(12.3,-99.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AB6C43").s().p("AhAC1IgWgCQhGgIhEgXQitg7AMiTQAbgjApAJQgEAzA9A5QA9A8CjAFQBAACA6gMIAKgCQBPgRBAgrQAkgWATgYIABABIAAAAIgBgBQALgOAGgNIABgFIABgDIACgKIABgDQABgLgDgKIghhSQAegLAxAtQAaAiABAwIAAAIIgBAEQgBAbgJAdIAAAAIgEAAIgBABIAFABQgKAXgWAWQhIBJhjAgQgsAPgyAHQguAFgrAAQgbAAgbgCg");
	this.shape_26.setTransform(-18.2,-93.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AiAFUQgMgCgMgCQgOgEgOgEQg1gRgugcQiYhiA9g8QAfgeADgoQAhggAGgoIAAhJQABgBAHhMQC2iDFTgwQACBEAHAaQgBAvABAPQASCqAxAfQBFAuALA4Qg8CPiqA6QgeAKgiAHQh4AbhlgS");
	this.shape_27.setTransform(-17,-106.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC9C6C").s().p("Ag2FUIABgEIgCAEIgYgEIgcgIQg0gRgvgcQiXhiA9g8QAfgeADgoQAhggAFgoIAAhJQABgBAIhMQC1iDFUgwQABBEAIAaIi3DjQgwA0gXBDQgiBiB7AGIAGAPIgQAgIAKALIBVAQIAHAKIgLAgQgeAKghAHQhKAQhCAAQgpAAgpgHg");
	this.shape_28.setTransform(-24.4,-106.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFC488").s().p("AgPD8IgGgLIhWgPIgKgLIARggIgHgQQh6gFAihiQAWhBAwg2IC1jkQgBAwABAPQASCqAxAhQBFAsALA4Qg8CPioA5g");
	this.shape_29.setTransform(1.5,-103.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AoHyrQAcgjApAJQgFAyA9A8QA+A8CiAFQBCACA6gMIAKgCQBLgRA+goQACgCADgCQAjgYATgXIAAAAQALgOAGgNQABgDABgCQAAgCABgBQABgGABgFQABgBAAgBQAAgFgCgPQAAgBAAgBIghhRQAdgMAxAtQAaAiABAxQAAAEAAADQAAADAAACQgCAbgIAeIAAABQgBAAAAABQgKAYgWAVQgYAZgcAVQgDACgDACQgzAkg+AUQgqAPgxAGQhLAJhHgFQgKgBgMgBQhFgIhFgYQitg6AMiVIhGAZQisBOgpAnADi0EQCzANCoA5QADABADABQAGACAFACQARAGARAGAJ7p/QAAAAAAAAQAJgNADgOQABgBAAgBQAAgCAAgDQABgJAEgIAJ7p/IgBACIAJgQQAAAKgBAKQABABgBABQAAAIAAAJQgCA0gCAyQAAATgBASQgECkAACDQABD4AVB+QAMBKANBPQAZCZAeCqQABAJACAJIgEgRIACAKIACAMIAHAkIAJArIABACIAOBAIAAABQACAGABAFIAAABQAMA+AIAyQAQBqgHAxQgKBKhbAjQgSAJgTAHQgEACgFACQg4AUjEAkAJ7p/IAAAAQgDAEgDAEAJ7p/IAAAAIAQh7AJwysQAwATAvAWALnLMIgFgcIAAAAAL0MRIgWhrQgKg1AIAkIACAKIAAAAALyMEIAAgBQABAHABAHQACAKACAKQABABAAABQACAJABAJIACAHIABADIAAABIACALAMBNFIgJgoIgCgOQgEgPgCgNQgBgCAAgCQgDgOgDgMQgBgEgBgFALpLZQgBgGgBgHAMCNUIgBgFAMCNTIgBgEArzrIIAWByIBKHMQgCB7gFB+QgECAAMG8QABAggrDcQgsDcA+BJQA+BJCFgMQAUACAUACQISAxE+gnQABAAAAAAQAAAAgBAAQADAAACAAQgCAAgCAAAL+NAIgLg6");
	this.shape_30.setTransform(-4.9,20.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF00").s().p("Ai3PYIABAAIgBAAgAhZMXIABABIgDABgAC3IPIABAFIAAAAgAC3IHIAAgBIABACgACpHHIgBgCIgJgrIgCgNIACANIgHglIgBgFIgBgHIgCgKIAEARIAAABIAFAcIgFgcIAAgBIgDgRIg3lEIgZiWQgVh+gBj7QAAiCAEikIABglIAEhmIAHgNIgFByIgBAlQgFCkAACDQABEPAVCEIAVCBIA5FRIAFAaIACAKIAEASIAHAjIABAEIAEAPIAIAoIAAACgACfGVIgCgIIACAIgACVFmQgLg1AIAkIACAKIAAAAIACAKQgBgDgBgCQAAgCAAAAQAAgBAAABQAAABABADgABEvXQAOAHAEAAIgTAPQACgLgBgLg");
	this.shape_31.setTransform(53.7,52.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D2D202").s().p("AAAAAIAAAAIAAAAg");
	this.shape_32.setTransform(58.7,-43.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC00").s().p("AA/LnIAAgDIgMg6IAPBAIAAABIACALIAAABIgBAAIgBAAgAAeJDIAAAAIABgBIADASgAg7rWIABgTIgJAQIAAgCIAAAAIABAAQAJgNADgOIAGACIgCAIIAAAEIgCAOIABgNIgEAPIgEACIAAADIAAgDg");
	this.shape_33.setTransform(65.5,29.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#45A2FE").s().p("Am3T7IgpgEQiFAMg9hJQg+hJArjcQAsjcgBggQgNm8AFiAQAFh+ACh7IhLnMIgWhyQhdjoAuhtQAqgnCrhOIBHgZQgMCVCtA6QBEAYBGAIIAWACQBHAFBKgJQAwgGAsgPQA+gUAzgkIAFgEQAcgUAZgaQAWgVAKgYIAAAAIAAgBIAAgBQAJgeABgbIABgFIAAgHQgBgxgagiQCzAOCoA4IAGACIALAEIAiAMIAAAAQAwATAvAWIARApQADACALAVQAJASAEAKIABAEIAAAAQAIAVAHAUIADAKIABAFQAFACgDAGIABAGIABAAIAEAVQAFAhAAAeIgCAZQgCAVgEATQgUBThEBIIgbAbIgCABQgEABgOgIIgGgCIAAgCIABgFQABgIAEgJQgEAJgBAIIgBAFIAAACQgDAOgJANIgBAAIARh7IgRB7IAAAAIAAAAIgGAIIAGgIIAAACIAJgQIgBAUIAAACIgIAbIAGgIIAAgBIgBADIACgEIgDBmIgBAlQgFCkABCDQABD4AUB+IAZCZIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIABACIADASIACAHIAAADIAAABIACALIABAFIAAAAIABABIAAACIAAgEIABAAQANA+AIAyQAQBqgHAxQgLBKhbAjIgkAQIgJAEQg4AVjEAjIgBAAQiMASi2AAQjlAAkpgcgAH1RHIACgCIAAAAgAKCqRg");
	this.shape_34.setTransform(-5.6,22.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AB6C43").s().p("AhAC1IgWgCQhGgIhEgXQitg7AMiTQAbgjApAJQgEAzA9A5QA9A8CjAFQBAACA6gMIAKgCQBMgRA/goIAEgDQAkgWATgYIABABIAAAAIgBgBQALgOAGgNIABgFIABgDIACgKIABgDQABgLgDgKIghhSQAegLAxAtQAaAiABAwIAAAIIgBAEQgBAbgJAdIAAAAIgBACIABAAQgKAXgWAWQgZAZgcAUIgFAEQgzAkg+AUQgsAPgyAHQguAFgrAAQgbAAgbgCg");
	this.shape_35.setTransform(-18.2,-93.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AB9FFQAMgDALgEQAOgGANgFQAzgXAtgjQCTh1g7g3QgegcgDgpQgggbgFgrIAAhMQgBgBgHhNQiwh0lJgMQgBBHgHAaQABAxgBAQQgRCxgwAmQhDA3gLA7QA7CNCkAoQAdAIAhAEQB0AOBigd");
	this.shape_36.setTransform(-18.2,-106);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFC184").s().p("AAAACIAAgDIABADg");
	this.shape_37.setTransform(-5.7,-73.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFC488").s().p("AkVBqQAKg6BDg2QAwgoARixQABgQgBgwIDxDTQCMBQAeBSQAdBSkagIIgHARIAQAfIgJANIhRAZIgGALIAKAfQilgog6iOg");
	this.shape_38.setTransform(-27.9,-101.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC9C6C").s().p("AihFUQghgEgdgIIgKgfIAGgLIBTgZIAKgNIgQgfIAGgRQEYAIgdhSQgdhRiLhRIjyjTQAHgaABhHQFJAMCwB0QAHBNABABIAABMQAFArAgAbQADApAeAcQA7A3iTB1QgtAjgzAXIgbALIgXAHIgCgEIABAEQhAAUhMAAQgkAAgmgFg");
	this.shape_39.setTransform(-11.1,-106);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ADD1EIgtghIgWgLIAEAdQADALgBALQAAABgBABQAAAFgCAGQgEAQgOASQAAAAgBABIAAAAQgTAXgkAYQg+ArhPASIgKACQgFABgGABQgIABgJACQgPACgRABQgfADghgBQijgFg9g8Qg9g8AEgyIhEAaQgMCVCtA6QBEAYBGAIQALABALABQAGAAAGABQANAAANABQAGAAAFAAIABAAQALAAAKAAQAlgBAlgFQAygGAsgPQBhghBIhJQAPgPAKgQIAAAAQAEgHADgHQAAgBAAAAIAAgBQARgpgQgwgAKxzaIgBAAIm2haIg3gQAJbt5IgCAWIgFBJIAAAGIgBAHIAAABQAAAEAAADQgBAGAAAHQAAABAAABQAAAIAAAJQgCA0gCEHQgBAkABAjIACCRQABAmADAjQADA4AGAuQABAIABAIQAEAcADAcIAAABQAFAnAEAjQAFA1ADAtQAAAFABAFQAZCZAeCqQABAJACAJIAAAAIAFAcQABAEABAFQADAMADAOQAAACAAACQADANAEAPIACAOIAGAZALEKSIgWhrQgLg1AIAkIADAKIAAAAIACAKIACAMIAHAkQgBgHgBgGAKuIgIAEARALDKHIgBgCIgJgrALEKSQgBgFgBgFQAAgCAAgCIAAABALEKSQACAKACAKQAAABABABQABAIACAIALDKHIAJAxIBZG7QgGAoguASIgchbIAABvQizA7imAnQhSAUhOAOQgRADgQADQgcAFgbAEQjRAgi7gEQgjAAgjgCQhogHhhgSQhZgRhUgbIAAqHIghtSALOK3IgLgwArlixIgakKIgPkaIgWhyAryzvIC7g7");
	this.shape_40.setTransform(0,33.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1C8CFD").s().p("AD0QTQDliQhqhcQhqhdg/iKQg/iJAmnkIAnnmIAGgyQASigBmiAQBmiBARgKIgFBJQgGAFAEABIABAAIAAAHIAAABIgBAHIAAANIAAACIgBARQgCA0gCEHIABBHIABCRIAEBJQAEA5AFAtIACAQIAIA6IAAABIAIBKQAGAzADAtIAAAKIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIAAACIADAQIABAAIBYG7QgGAoguASIgchbIAABvQizA7ilAnQhSAUhOAOIghAGIg2AJQAaglDliPgAqTqgIAFABIAAAAgAmGzGIAMABIgFAFg");
	this.shape_41.setTransform(14.4,47.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#002B2B").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAgAAAAAg");
	this.shape_42.setTransform(19.4,-92.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF00").s().p("ArSS0QBaAZBTATQhagRhTgbgAK0ISIALAwIgCAAgAK/JCIgLgwIgBgCIgJgrIgCgNIACAJIgCgJIACANIgHgkIgBgGIgBgGIgCgKIAEARIAAAAIAFAcIgFgcIAAAAIgEgRIAAAAIAAAAIACAKQgBgEgBgCQAAgCAAAAQgBgBABACQAAABAAACQgLg0AJAkIACAKIABgBIADASIgDgSIg3lDIgBgLIACAPIA5FRIAFAaIACALIAEASIAHAiIABAEIADAQIAGAZgAK0ISgAKfGrgAKfGrgALQzfQAGACgEAGg");
	this.shape_43.setTransform(1.4,44.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D2D202").s().p("Ag1CnIACAAIgCAHgAA2itIAAAAIgCAAIACAAg");
	this.shape_44.setTransform(65,-62.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#003333").s().p("AAAAAIAAAAIAAAAg");
	this.shape_45.setTransform(68.9,-91.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#45A2FE").s().p("AjWVaIhHgCQhogHhggSQhTgThagZIAAqHIgitSIAAgBIgZkKIgPkaIgWhyQhol/CagpIC6g7QgMCVCtA6QBFAYBFAIIAWACIAIAGIAEgFIAaABIAMAAIAAAAIAVAAQAlgBAmgFQAxgGAqgPQBkghBHhJQAQgPAJgQIAAAAIAHgOIAAAAIABgBIAAgBQARgpgRgwIA3AQIG3BaIAAABQACACAMAVQALAXADAJQAIAVAGAUIAEAPIACAIQAMAvgBArQgBAhgHAgQgYBjhCAnQgsAZgKAKIAFhJIACgWIgCAWQgRAKhmCBQhmCAgSCgIgGAyIgmHkQgnHmA/CJQBACKBqBdQBqBcjlCQQjlCPgcAlQi5AdipAAIgpgBgAnNooIAAAAIgFgBgALvx/IACgBIAAAAIgCABg");
	this.shape_46.setTransform(-5,35.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AB6C43").s().p("AgOCcIgLAAIgagCIgMAAIgWgCQhGgIhEgYQitg6AMiTIBEgaQgEAyA9A8QA9A6CjAFQAhAAAdgCIAggEIARgCIALgCIAKgCQBPgSBAgpQAkgYATgXIABAAIgBgBIABgBQANgRAFgQIACgLIABgCIgCgUIAAgCQADAIAAAIIgBAGIABgGQAAgIgDgIIgEgdIAWALIAtAhQAQAwgRApIAAABIgBABIABAAIgHAOIAAAAQgKAOgPAPQhIBJhjAhQgsAOgyAHQglAFglABIgTAAg");
	this.shape_47.setTransform(-18.3,-90.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("ACBFUQAMgCAMgCQAOgEAOgEQA1gRAugcQCYhig9g8QgfgegDgoQghgggGgoQhdhtgWivABoktQh2gPjZgeQgCBFgHAZQABAvgBAPQgSCqgxAfQhFAugLA4QA8CPCqA6QAeAKAiAHQB4AbBlgS");
	this.shape_48.setTransform(-17,-104.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFC184").s().p("AAAACIAAgDIAAADg");
	this.shape_49.setTransform(-4.1,-70.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFC488").s().p("AjKBTQALg4BFgsQAxghASiqQABgQgBguIC1DjQAwA1AWBBQAiBjh6AGIgHAPIARAgIgKALIhWAPIgGALIAKAgQiog6g8iPg");
	this.shape_50.setTransform(-35.5,-101.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFBA75").s().p("AinFLQghgHgegKIgLggIAHgKIBVgQIAKgLIgQggIAGgPQB7gGgihiQgXhDgwg0Ii3jjQAIgZABhFQDaAeB2APIBPAAQAVCvBeBtQAFAoAhAgQADAoAfAeQA9A8iXBiQgvAcg0ARIgcAIIgYAEIgCgEIABAEQgpAHgpAAQhCAAhKgQg");
	this.shape_51.setTransform(-9.7,-104.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("Aot0qIBFgaQgFAyA9A8QA+A8CiAFQAhABAfgDQARgBAQgCQAIgCAIgBQAGgBAFgBIAKgCQBOgSBAgrQAjgYATgXIAAAAQAPgSAFgRQABgGABgFQABgBAAgBQABgLgDgLIgFgdIAXALIAsAhQARAwgRApIAAABQgBAAAAABQgKAYgWAVQhHBJhkAhQgqAPgxAGQgmAFglABQgKAAgLAAIAAAAQgGAAgGAAQgNgBgNAAQgGgBgGAAQgKgBgMgBQhFgIhFgYQitg6AMiVgAJlt5IgFBHIgCAYIAAAGIgBAHIAAABQAAAEAAADQAAAGgBAHQABABgBABQAAAIAAAJQgCA0gCEHQAAAkAAAjIACCRQACAmACAjQAEA4AFAuQABAIABAIQAEAcADAcIAAABQAFAnAEAjQAFA1ADAtQAAAFABAFQAZCZAeCqQABAJACAJIAAAAIAFAcQABAEABAFQADAMADAOQAAACABACQACANAEAPIACAOIAGAZADN1EQFLApBOA3AK4IgIAEARAK4IgIAAAAIgCgKQgIgkAKA1IAXBrQABAKACAKQABABAAABIACAIQAAAEABAEALDJaIgHgkIgCgMIgCgKALMKFIAAgBQAAACAAACQACAFABAFALMKFIgJgrALNKHIgBgCALBJNQABAGABAHArbiwIAiNSIAAKHQBTAbBaARQBgASBoAHQAjACAkAAQDTAFDvgqQARgDAQgDQBAgMBCgPQAPgDAPgEQCmgnDchUIgRhxIAkBfQARgGADgdIhZm7ALNKHIAJAxALYK3IgLgwArbixIgZkKIgPkaIgWhyAsuzOIEBhc");
	this.shape_52.setTransform(-1.1,33.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1C8CFD").s().p("AAGU0QhQgThbgZIAAqHIghtSIAAgBIgakKIgPkaIgWhyQhOldA6gqIEBhcQgMCVCrA6QBEAYBGAIIAWACIAMAAQgeAfhaCcQhUCThfEbIgCAOQAAALgGA2QgJA2AAAKQAAALgIA3QgJA3AAALQAAD+AzEAQANBAAWBlQARBOAeAeQAeAeAcBFQAcBEgJBjQgIBkAMCDQANCEAGCmQhogGhhgSgABJrSQgKAZAAALIgSA2QgSA2AAAHIgBAGQAyifgCAAIgBACg");
	this.shape_53.setTransform(-54.3,36.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF00").s().p("ArIIVQBaAZBTATQhagQhTgcgAK+iLIALAwIgCABgALJhbIgLgwIgBgCIgIgrIgDgNIACAJIAEASIAHAiIABAEIAEAQIAFAZgALJhbgAKtjcIgBgGIgBgGIgCgKIAEARIAAAAIAFAcIADANgAKyjFIgFgcIAAAAIgDgSIg3lDIgBgKIADAOIA5FRIAEAaIACALIgCgJgAKtjhgAKpjyIAAAAIABgBIADASgAKtjhIAAAAgAKqjrQgLg1AIAkIACAKIAAAAIACAKQgBgEAAgCQgBgCAAAAQAAgBAAACQAAABABADgAKpjyg");
	this.shape_54.setTransform(0.4,112);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#45A2FE").s().p("Al9VaIhGgCQgGingNiDQgNiEAJhjQAJhkgchEQgchFgegeQgfgegQhOQgXhlgNhAQg0kAAAj+QAAgLAJg3QAIg3AAgLQAAgKAIg2QAJg2AAgLIACgOQBfkbBUiTQBaicAegeIAZABIAMAAIAAAAIAWAAQAkgBAmgFQAxgGAsgPQBkghBFhJQAXgVAKgYIAAAAIAAgBIAAgBQARgpgQgwQFKApBOA3IgNDcQAMBBgEA6QgEA7ADAgIgCAYQgFAFAEABIABAAIgBAHIAAABIAAAHIAAANIAAACIgBARQgCA0gCEHIABBHIABCRIAEBJQAEA4AFAuIACAQIAIA4IAAABIAIBKQAGA1ACAtIABAKIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIAAACIACAIIABAIIABAAIBYG7QgDAdgRAGIgkhfIARBxQjcBUimAnIgeAHQhCAPhAAMIggAGQjYAmjBAAIgqgBgAp3owQgBgHATg2IASg2QAAgLAKgZQAIgTg3CxIABgHg");
	this.shape_55.setTransform(11.7,35.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D2D202").s().p("Ag1CnIACAAIgCAHgAA1itIABAAIAAAAIgBAAIgBAAIABAAg");
	this.shape_56.setTransform(65,-62.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("Ah/FUQBlASB4gbQAigHAegKQCqg6A8iPQgLg4hFguQgxgfgSiqQgBgPABgvQgHgZgChFQlTAwi2CDQgHBMgBABIAABJQgGAoghAgQgDAogfAeQg9A8CYBiQAuAcA1ARQAOAEAOAEQAMACAMAC");
	this.shape_57.setTransform(-17.1,-106.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-30}},{t:this.shape_12},{t:this.shape_11,p:{x:-30,y:-72.4}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_13,p:{x:-29.9}},{t:this.shape_27},{t:this.shape_11,p:{x:-29.9,y:-72.4}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_11,p:{x:-5.6,y:-73.4}},{t:this.shape_35},{t:this.shape_25},{t:this.shape_34},{t:this.shape_23},{t:this.shape_4},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_17},{t:this.shape_30}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_11,p:{x:-4.1,y:-70.4}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_5},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_14},{t:this.shape_15},{t:this.shape_13,p:{x:-30}},{t:this.shape_57},{t:this.shape_11,p:{x:-30,y:-72.4}},{t:this.shape_10},{t:this.shape_56},{t:this.shape_55},{t:this.shape_5},{t:this.shape_4},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-142.2,166.5,315.7);


(lib.gr_Ch_Body_01_021copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("AEnnJIACAfQAAAhgYBPQgjByg+BoQi+E8lyBpAGBixQgZBnhGB1QiJDqkJC1");
	this.shape.setTransform(4.5,54.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AFSpTIACAfQAAAigYBPQgjByg+BoQi/E7mYFRAF7nyQAPFchtDUQhtDVkEFB");
	this.shape_1.setTransform(0.2,68.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},4).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("ADN1EIgsghIgXgLIAFAdQADALgBALQAAABgBABQgBAFgBAGQgFARgPASIAAAAQgTAXgjAYQhAArhOASIgKACQgFABgGABQgIABgIACQgQACgRABQgfADghgBQiigFg+g8Qg9g8AFgyIhFAaQgMCVCtA6QBFAYBFAIQAMABAKABQAGAAAGABQANAAANABQAGAAAGAAIAAAAQALAAAKAAQAlgBAmgFQAxgGAqgPQBkghBHhJQAWgVAKgYQAAgBABAAIAAgBQARgpgRgwIA3AQQHRCBAPA1IAAAAIgEgHAJlt5IgHBfIAAAGIgBAHIAAABQAAAEAAADQAAAGgBAHQABABgBABQAAAIAAAJQgCA0gCEHQAAAkAAAjIACCRQACAmACAjQAEA4AFAuQABAIABAIQAEAcADAcIAAABQAFAnAEAjQAFA1ADAtQAAAFABAFQAZCZAeCqQABAJACAJIAAAAIAFAcQABAEABAFQADAMADAOQAAACABACQACANAEAPIACAOIAGAZAK4IgIACAKIACAMIAHAkIAJArIAAgBQAAACAAACQACAFABAFIgXhrQgKg1AIAkIACAKIAAAAIAEARALMKFIABACIAJAxIBZG7QgGAoguASIgchbIAABvQizA7imAnQhRAUhPAOQgQADgRADQjvAqjTgFQgkAAgjgCQhogHhggSQhagRhTgbIAAqHIgitSALBJNQABAGABAHALPKSQABAKACAKQABABAAABQABAIACAIALNKHIALAwAsZtHIAWByIAPEaIAZEKAot0qIkBBc");
	this.shape_2.setTransform(-1.1,33.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1C8CFD").s().p("AAGU0QhQgThbgZIAAqHIghtSIAAgBIgakKIgPkaIgWhyQhOldA6gqIEBhcQgMCVCrA6QBEAYBGAIIAWACIAMAAQgeAfhaCcQhUCThfEbIgCAOQAAALgGA2QgJA2AAAKQAAALgIA3QgJA3AAALQAAD+AzEAQANBAAWBlQARBOAAAoQAAAFgNBNQgNBNAAB0QAAB7BCCqQAcBHA+CSQhogGhhgSgABJrSQgKAZAAALIgSA2QgSA2AAAHIgBAGQAyifgCAAIgBACg");
	this.shape_3.setTransform(-54.3,36.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#002B2B").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(19.4,-92.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#016564").s().p("AAAAAIAAAAIAAAAg");
	this.shape_5.setTransform(11.3,-96.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("ArSS0QBaAZBTATQhagRhTgbgAK0ISIALAwIgCAAgAK/JCIgLgwIgBgCIgJgrIgCgNIACAJIAEASIAHAiIABAEIADAQIAGAZgAK/JCgAKjHBIgBgGIgBgGIgCgKIAEARIAAAAIAFAcIACANgAKoHYIgFgcIAAAAIgDgSIg3lDIgBgLIACAPIA5FRIAFAaIACALIgCgJgAKjG8gAKfGrIAAAAIAAAAIACAKQgBgEgBgCQAAgCAAAAQgBgBABACQAAABAAACQgLg0AJAkIACAKIABgBIADASgAKjG8IAAAAgAKfGrgAKfGrgAKfGrgALQzfQAGACgEAGg");
	this.shape_6.setTransform(1.4,44.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#003333").s().p("AAAgCIAAADIABACg");
	this.shape_7.setTransform(72.8,-82.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D2D202").s().p("AhaSzIiGAiIghAGQBlgpBCABgACVuEIACAAIgCAHgAECzaIAAAAIgCABIACgBg");
	this.shape_8.setTransform(44.6,44.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#45A2FE").s().p("Al9VaIhGgCQg+iTgchHQhCiqAAh7QAAh0ANhNQAMhNAAgFQAAgogQhOQgXhlgNhAQg0kAAAj+QAAgLAJg3QAIg3AAgLQAAgKAIg2QAJg2AAgLIACgOQBfkbBUiTQBaicAegeIAZABIAMAAIAAAAIAWAAQAkgBAmgFQAxgGAsgPQBkghBFhJQAXgVAKgYIAAAAIAAgBIAAgBQARgpgQgwIA3AQQHQCBAPA1IABAFIAFAPIACAIQALAvgBArQAAAhgIAgQgXBjhDAnQgsAZgKAKIAHhfIgHBfQgFAFAEABIABAAIgBAHIAAABIAAAHIAAANIAAACIgBARQgCA0gCEHIABBHIABCRIAEBJQAEA4AFAuIACAQIAIA4IAAABIAIBKQAGA1ACAtIABAKIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIAAACIADAQIABAAIBYG7QgGAoguASIgchbIAABvQizA7imAnQhRAUhPAOICHgiQhCgChlAqQjYAmjBAAIgqgBgAJJx/IACgBIgBAAIgBABgAp3owQgBgHATg2IASg2QAAgLAKgZQAIgTg3CxIABgHgAI7zvIACADIAKAXg");
	this.shape_9.setTransform(11.7,35.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AB6C43").s().p("AgOCcIgLAAIgagCIgMAAIgWgCQhGgIhEgYQitg6AMiTIBEgaQgEAyA9A8QA9A6CjAFQAhAAAdgCIAggEIARgCIALgCIAKgCQBPgSBAgpQAkgYATgXIABAAIgBgBQAOgSAFgQIACgLIABgCIgCgUIAAgCQADAIAAAIIgBAGIABgGQAAgIgDgIIgEgdIAWALIAtAhQAQAwgRApIAAABIgBABIABAAQgKAWgWAVQhIBJhjAhQgsAOgyAHQglAFglABIgTAAg");
	this.shape_10.setTransform(-18.3,-90.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#A06B4B").ss(1,1,1).p("AAAAAIAAAA");
	this.shape_11.setTransform(-30,-72.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AiAFUQgMgCgMgCQgOgEgOgEQg1gRgugcQiYhiA9g8QAfgeADgoQAhggAGgoIAAhJQABgBAHhMQC2iDFTgwQACBFAHAZQgBAvABAPQASCqAxAfQBFAuALA4Qg8CPiqA6QgeAKgiAHQh4AbhlgS");
	this.shape_12.setTransform(-17.1,-106.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFC184").s().p("AAAACIABgDIgBADg");
	this.shape_13.setTransform(-30,-72.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CC9C6C").s().p("Ag2FUIABgEIgCAEIgYgEIgcgIQg0gRgvgcQiXhiA9g8QAfgeADgoQAhggAFgoIAAhJQABgBAIhMQC1iDFUgwQABBFAIAZIi3DjQgwA0gXBDQgiBiB7AGIAGAPIgQAgIAKALIBVAQIAHAKIgLAgQgeAKghAHQhKAQhCAAQgpAAgpgHg");
	this.shape_14.setTransform(-24.5,-106.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFC488").s().p("AgPD8IgGgLIhWgPIgKgLIARggIgHgQQh6gFAihiQAWhBAwg2IC1jkQgBAvABAQQASCqAxAhQBFAsALA4Qg8CPioA5g");
	this.shape_15.setTransform(1.4,-103.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AoHyrQAcgjApAJQgFAyA9A8QA+A8CiAFQBCACA6gMIAKgCQBOgSBAgrQAjgYATgXIAAAAQALgOAGgNQABgDABgCQAAgCABgBQABgGABgFQABgBAAgBQAAgFgCgPQAAgBAAgBIghhRQAdgMAxAtQAaAiABAxQAAAEAAADQAAADAAACQgCAbgIAeIAAABQgBAAAAABQgKAYgWAVQhHBJhkAhQgqAPgxAGQhLAJhHgFQgKgBgMgBQhFgIhFgYQitg6AMiVIhGAZQisBOgpAnADi0EQCzANCoA5QADABADABQAGACAFACQARAGARAGAJ7p/QAAAAAAAAQAJgNADgOQABgBAAgBQAAgCAAgDQABgJAEgIAJ7p/IgBACIAJgQQAAAKgBAKQABABgBABQAAAIAAAJQAAABAAABQgCAzgCAxQAAATgBASQgECkAACDQABD4AVB+QAMBKANBPQAZCZAeCqQABAJACAJAJ7p/IAAAAQgDAEgDAEAJ7p/IADgcIANhfAJwysQAwATAvAWALeKfIACAKIACAMIAHAkIAJArIABACIALA6IgCgHQgBgJgCgJQAAgBgBgBQgCgKgCgKALnLMIgFgcIAAAAIgEgRIAAAAIgCgKQgIgkAKA1IAWBrAMBNFIgJgoIgCgOQgEgPgCgNQgBgCAAgCQgDgOgDgMQgBgEgBgFALyMEIAAgBQABAHABAHALpLZQgBgGgBgHAL+NAIABADIAAABIACALAGSUXQDEgkA4gUQAFgCAEgCQATgHASgJQBbgjAKhKQAHgxgQhqQgHgwgNg8QAAgCAAgCIAAgBQgBgFgCgGIAAgBIgOhAAMCNUIgBgFAMCNTIgBgEArzrIIAWByIBKHMQgCB7gFB+QgECAAMG8QABAggrDcQgsDcA+BJQA+BJCFgMQAUACAUACQISAxE+gnQABAAAAAAQAAAAgBAAQADAAACAAQgCAAgCAA");
	this.shape_16.setTransform(-4.9,20.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("Aj1kgQADALgBALAD2EfQgBABgBABQgEAAgOgH");
	this.shape_17.setTransform(37.9,-74.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D2D202").s().p("AAAAAIABAAIgBAAg");
	this.shape_18.setTransform(44.6,131.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#BFD8E1").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAg");
	this.shape_19.setTransform(59.3,-41);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#80AFC4").s().p("ABCL1IACAAIAAAEIgCABgAhAr5IAJACQgDANgJANIAAAAg");
	this.shape_20.setTransform(65.5,29.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFF00").s().p("Ai4PZIABAAIgBAAgAC2IQIABAFIAAAAgAC0IFIgBgEIgLg5IAOBAIABABIACALIAAAAIgCAAIAAAAgAC2IIIAAgBIABACgACoHIIgBgCIgJgrIgCgNIACANIgHglIgBgFIgBgHIgCgKIACAKQgBgDgBgCQAAgCAAAAQAAgBAAABQAAABABADQgLg1AIAkIACAKIAAAAIAEARIAAABIAFAcIgFgcIAAgBIgDgRIg3lEIgZiWQgVh+gBj7QAAiCAEikIABglIAEhkIAAgCIAHgNIgEByIgCAlQgFCkAACDQABEPAVCEIAVCBIA5FRIAFAaIACAKIAEASIAHAjIABAEIAEAPIAIAoIAAACgACeGWIgCgIIACAIgACXFxIAAAAgACXFxgACTFgIAAAAIABAAIADARgAA4u4IAAgTIgJAQIABgCIAAAAIAAAAQAJgOADgNIAHACIgCAHIAAAFIgCAOIABgNIgEAPIgEACIAAACIAAgCgABDvWQAOAHAEAAIgTAPQACgLgBgLg");
	this.shape_21.setTransform(53.8,52.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#002B2B").s().p("AAAAAIAAAAIAAAAg");
	this.shape_22.setTransform(19.4,-92.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#017676").s().p("AAAAAIAAAAIAAAAg");
	this.shape_23.setTransform(11.3,-96.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#45A2FE").s().p("Am3T7IgpgEQiFAMg9hJQg+hJArjcQAsjcgBggQgNm8AFiAQAFh+ACh7IhLnMIgWhyQhdjoAuhtQAqgnCrhOIBHgZQgMCVCtA6QBEAYBGAIIAWACQBHAFBKgJQAwgGAsgPQBjghBIhJQAWgVAKgYIAAAAIAAgBIAAgBQAJgeABgbIABgFIAAgHQgBgxgagiQCzAOCoA4IAGACIALAEIAiAMIAAAAQAwATAvAWIARApQADACALAVQAJASAEAKIABAEIAAAAQAIAVAHAUIADAKIABAFQAFACgDAGIABAGIABAAIAEAVQAFAhAAAeIgCAZQgCAVgEATQgYBjhbBTIgCABQgEABgOgIIgGgCIAAgCIABgFQABgIAEgJQgEAJgBAIIgBAFIAAACIgJgBIANhfIgNBfIgEAcIAAAAIgGAIIAGgIIAAACIAJgQIgBAUIAAACIgIAbIAGgIIAAAAIgBACIABgCIABAAIgDBkIgBAlQgFCkABCDQABD4AUB+IAZCZIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIABACIADASIACAHIAAADIAAABIACALIABAFIAAAAIABABIAAACIACAAQAMA8AIAwQAQBqgHAxQgLBKhbAjIgkAQIgJAEQg4AVjEAjIgBAAQiMASi2AAQjlAAkpgcgAH1RHIACgCIAAAAgAKCqRg");
	this.shape_24.setTransform(-5.6,22.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#016564").s().p("AgKAiIAAAAIACABgAAJggIAAgBQADAKgBALIgCgUg");
	this.shape_25.setTransform(12.3,-99.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#AB6C43").s().p("AhAC1IgWgCQhGgIhEgXQitg7AMiTQAbgjApAJQgEAzA9A5QA9A8CjAFQBAACA6gMIAKgCQBPgRBAgrQAkgWATgYIABABIAAAAIgBgBQALgOAGgNIABgFIABgDIACgKIABgDQABgLgDgKIghhSQAegLAxAtQAaAiABAwIAAAIIgBAEQgBAbgJAdIAAAAIgEAAIgBABIAFABQgKAXgWAWQhIBJhjAgQgsAPgyAHQguAFgrAAQgbAAgbgCg");
	this.shape_26.setTransform(-18.2,-93.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AiAFUQgMgCgMgCQgOgEgOgEQg1gRgugcQiYhiA9g8QAfgeADgoQAhggAGgoIAAhJQABgBAHhMQC2iDFTgwQACBEAHAaQgBAvABAPQASCqAxAfQBFAuALA4Qg8CPiqA6QgeAKgiAHQh4AbhlgS");
	this.shape_27.setTransform(-17,-106.5);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC9C6C").s().p("Ag2FUIABgEIgCAEIgYgEIgcgIQg0gRgvgcQiXhiA9g8QAfgeADgoQAhggAFgoIAAhJQABgBAIhMQC1iDFUgwQABBEAIAaIi3DjQgwA0gXBDQgiBiB7AGIAGAPIgQAgIAKALIBVAQIAHAKIgLAgQgeAKghAHQhKAQhCAAQgpAAgpgHg");
	this.shape_28.setTransform(-24.4,-106.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFC488").s().p("AgPD8IgGgLIhWgPIgKgLIARggIgHgQQh6gFAihiQAWhBAwg2IC1jkQgBAwABAPQASCqAxAhQBFAsALA4Qg8CPioA5g");
	this.shape_29.setTransform(1.5,-103.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AoHyrQAcgjApAJQgFAyA9A8QA+A8CiAFQBCACA6gMIAKgCQBLgRA+goQACgCADgCQAjgYATgXIAAAAQALgOAGgNQABgDABgCQAAgCABgBQABgGABgFQABgBAAgBQAAgFgCgPQAAgBAAgBIghhRQAdgMAxAtQAaAiABAxQAAAEAAADQAAADAAACQgCAbgIAeIAAABQgBAAAAABQgKAYgWAVQgYAZgcAVQgDACgDACQgzAkg+AUQgqAPgxAGQhLAJhHgFQgKgBgMgBQhFgIhFgYQitg6AMiVIhGAZQisBOgpAnADi0EQCzANCoA5QADABADABQAGACAFACQARAGARAGAJ7p/QAAAAAAAAQAJgNADgOQABgBAAgBQAAgCAAgDQABgJAEgIAJ7p/IgBACIAJgQQAAAKgBAKQABABgBABQAAAIAAAJQgCA0gCAyQAAATgBASQgECkAACDQABD4AVB+QAMBKANBPQAZCZAeCqQABAJACAJIgEgRIACAKIACAMIAHAkIAJArIABACIAOBAIAAABQACAGABAFIAAABQAMA+AIAyQAQBqgHAxQgKBKhbAjQgSAJgTAHQgEACgFACQg4AUjEAkAJ7p/IAAAAQgDAEgDAEAJ7p/IAAAAIAQh7AJwysQAwATAvAWALnLMIgFgcIAAAAAL0MRIgWhrQgKg1AIAkIACAKIAAAAALyMEIAAgBQABAHABAHQACAKACAKQABABAAABQACAJABAJIACAHIABADIAAABIACALAMBNFIgJgoIgCgOQgEgPgCgNQgBgCAAgCQgDgOgDgMQgBgEgBgFALpLZQgBgGgBgHAMCNUIgBgFAMCNTIgBgEArzrIIAWByIBKHMQgCB7gFB+QgECAAMG8QABAggrDcQgsDcA+BJQA+BJCFgMQAUACAUACQISAxE+gnQABAAAAAAQAAAAgBAAQADAAACAAQgCAAgCAAAL+NAIgLg6");
	this.shape_30.setTransform(-4.9,20.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFF00").s().p("Ai3PYIABAAIgBAAgAhZMXIABABIgDABgAC3IPIABAFIAAAAgAC3IHIAAgBIABACgACpHHIgBgCIgJgrIgCgNIACANIgHglIgBgFIgBgHIgCgKIAEARIAAABIAFAcIgFgcIAAgBIgDgRIg3lEIgZiWQgVh+gBj7QAAiCAEikIABglIAEhmIAHgNIgFByIgBAlQgFCkAACDQABEPAVCEIAVCBIA5FRIAFAaIACAKIAEASIAHAjIABAEIAEAPIAIAoIAAACgACfGVIgCgIIACAIgACVFmQgLg1AIAkIACAKIAAAAIACAKQgBgDgBgCQAAgCAAAAQAAgBAAABQAAABABADgABEvXQAOAHAEAAIgTAPQACgLgBgLg");
	this.shape_31.setTransform(53.7,52.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#D2D202").s().p("AAAAAIAAAAIAAAAg");
	this.shape_32.setTransform(58.7,-43.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFCC00").s().p("AA/LnIAAgDIgMg6IAPBAIAAABIACALIAAABIgBAAIgBAAgAAeJDIAAAAIABgBIADASgAg7rWIABgTIgJAQIAAgCIAAAAIABAAQAJgNADgOIAGACIgCAIIAAAEIgCAOIABgNIgEAPIgEACIAAADIAAgDg");
	this.shape_33.setTransform(65.5,29.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#45A2FE").s().p("Am3T7IgpgEQiFAMg9hJQg+hJArjcQAsjcgBggQgNm8AFiAQAFh+ACh7IhLnMIgWhyQhdjoAuhtQAqgnCrhOIBHgZQgMCVCtA6QBEAYBGAIIAWACQBHAFBKgJQAwgGAsgPQA+gUAzgkIAFgEQAcgUAZgaQAWgVAKgYIAAAAIAAgBIAAgBQAJgeABgbIABgFIAAgHQgBgxgagiQCzAOCoA4IAGACIALAEIAiAMIAAAAQAwATAvAWIARApQADACALAVQAJASAEAKIABAEIAAAAQAIAVAHAUIADAKIABAFQAFACgDAGIABAGIABAAIAEAVQAFAhAAAeIgCAZQgCAVgEATQgUBThEBIIgbAbIgCABQgEABgOgIIgGgCIAAgCIABgFQABgIAEgJQgEAJgBAIIgBAFIAAACQgDAOgJANIgBAAIARh7IgRB7IAAAAIAAAAIgGAIIAGgIIAAACIAJgQIgBAUIAAACIgIAbIAGgIIAAgBIgBADIACgEIgDBmIgBAlQgFCkABCDQABD4AUB+IAZCZIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIABACIADASIACAHIAAADIAAABIACALIABAFIAAAAIABABIAAACIAAgEIABAAQANA+AIAyQAQBqgHAxQgLBKhbAjIgkAQIgJAEQg4AVjEAjIgBAAQiMASi2AAQjlAAkpgcgAH1RHIACgCIAAAAgAKCqRg");
	this.shape_34.setTransform(-5.6,22.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#AB6C43").s().p("AhAC1IgWgCQhGgIhEgXQitg7AMiTQAbgjApAJQgEAzA9A5QA9A8CjAFQBAACA6gMIAKgCQBMgRA/goIAEgDQAkgWATgYIABABIAAAAIgBgBQALgOAGgNIABgFIABgDIACgKIABgDQABgLgDgKIghhSQAegLAxAtQAaAiABAwIAAAIIgBAEQgBAbgJAdIAAAAIgBACIABAAQgKAXgWAWQgZAZgcAUIgFAEQgzAkg+AUQgsAPgyAHQguAFgrAAQgbAAgbgCg");
	this.shape_35.setTransform(-18.2,-93.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AB9FFQAMgDALgEQAOgGANgFQAzgXAtgjQCTh1g7g3QgegcgDgpQgggbgFgrIAAhMQgBgBgHhNQiwh0lJgMQgBBHgHAaQABAxgBAQQgRCxgwAmQhDA3gLA7QA7CNCkAoQAdAIAhAEQB0AOBigd");
	this.shape_36.setTransform(-18.2,-106);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFC184").s().p("AAAACIAAgDIABADg");
	this.shape_37.setTransform(-5.7,-73.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFC488").s().p("AkVBqQAKg6BDg2QAwgoARixQABgQgBgwIDxDTQCMBQAeBSQAdBSkagIIgHARIAQAfIgJANIhRAZIgGALIAKAfQilgog6iOg");
	this.shape_38.setTransform(-27.9,-101.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#CC9C6C").s().p("AihFUQghgEgdgIIgKgfIAGgLIBTgZIAKgNIgQgfIAGgRQEYAIgdhSQgdhRiLhRIjyjTQAHgaABhHQFJAMCwB0QAHBNABABIAABMQAFArAgAbQADApAeAcQA7A3iTB1QgtAjgzAXIgbALIgXAHIgCgEIABAEQhAAUhMAAQgkAAgmgFg");
	this.shape_39.setTransform(-11.1,-106);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ADD1EIgtghIgWgLIAEAdQADALgBALQAAABgBABQAAAFgCAGQgEAQgOASQAAAAgBABIAAAAQgTAXgkAYQg+ArhPASIgKACQgFABgGABQgIABgJACQgPACgRABQgfADghgBQijgFg9g8Qg9g8AEgyIhEAaQgMCVCtA6QBEAYBGAIQALABALABQAGAAAGABQANAAANABQAGAAAFAAIABAAQALAAAKAAQAlgBAlgFQAygGAsgPQBhghBIhJQAPgPAKgQIAAAAQAEgHADgHQAAgBAAAAIAAgBQARgpgQgwgAKxzaIgBAAIm2haIg3gQAJbt5IgCAWIgFBJIAAAGIgBAHIAAABQAAAEAAADQgBAGAAAHQAAABAAABQAAAIAAAJQgCA0gCEHQgBAkABAjIACCRQABAmADAjQADA4AGAuQABAIABAIQAEAcADAcIAAABQAFAnAEAjQAFA1ADAtQAAAFABAFQAZCZAeCqQABAJACAJIAAAAIAFAcQABAEABAFQADAMADAOQAAACAAACQADANAEAPIACAOIAGAZALEKSIgWhrQgLg1AIAkIADAKIAAAAIACAKIACAMIAHAkQgBgHgBgGAKuIgIAEARALDKHIgBgCIgJgrALEKSQgBgFgBgFQAAgCAAgCIAAABALEKSQACAKACAKQAAABABABQABAIACAIALDKHIAJAxIBZG7QgGAoguASIgchbIAABvQizA7imAnQhSAUhOAOQgRADgQADQgcAFgbAEQjRAgi7gEQgjAAgjgCQhogHhhgSQhZgRhUgbIAAqHIghtSALOK3IgLgwArlixIgakKIgPkaIgWhyAryzvIC7g7");
	this.shape_40.setTransform(0,33.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#1C8CFD").s().p("AD0QTQDliQhqhcQhqhdg/iKQg/iJAmnkIAnnmIAGgyQASigBmiAQBmiBARgKIgFBJQgGAFAEABIABAAIAAAHIAAABIgBAHIAAANIAAACIgBARQgCA0gCEHIABBHIABCRIAEBJQAEA5AFAtIACAQIAIA6IAAABIAIBKQAGAzADAtIAAAKIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIAAACIADAQIABAAIBYG7QgGAoguASIgchbIAABvQizA7ilAnQhSAUhOAOIghAGIg2AJQAaglDliPgAqTqgIAFABIAAAAgAmGzGIAMABIgFAFg");
	this.shape_41.setTransform(14.4,47.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#002B2B").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAgAAAAAg");
	this.shape_42.setTransform(19.4,-92.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF00").s().p("ArSS0QBaAZBTATQhagRhTgbgAK0ISIALAwIgCAAgAK/JCIgLgwIgBgCIgJgrIgCgNIACAJIgCgJIACANIgHgkIgBgGIgBgGIgCgKIAEARIAAAAIAFAcIgFgcIAAAAIgEgRIAAAAIAAAAIACAKQgBgEgBgCQAAgCAAAAQgBgBABACQAAABAAACQgLg0AJAkIACAKIABgBIADASIgDgSIg3lDIgBgLIACAPIA5FRIAFAaIACALIAEASIAHAiIABAEIADAQIAGAZgAK0ISgAKfGrgAKfGrgALQzfQAGACgEAGg");
	this.shape_43.setTransform(1.4,44.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D2D202").s().p("Ag1CnIACAAIgCAHgAA2itIAAAAIgCAAIACAAg");
	this.shape_44.setTransform(65,-62.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#003333").s().p("AAAAAIAAAAIAAAAg");
	this.shape_45.setTransform(68.9,-91.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#45A2FE").s().p("AjWVaIhHgCQhogHhggSQhTgThagZIAAqHIgitSIAAgBIgZkKIgPkaIgWhyQhol/CagpIC6g7QgMCVCtA6QBFAYBFAIIAWACIAIAGIAEgFIAaABIAMAAIAAAAIAVAAQAlgBAmgFQAxgGAqgPQBkghBHhJQAQgPAJgQIAAAAIAHgOIAAAAIABgBIAAgBQARgpgRgwIA3AQIG3BaIAAABQACACAMAVQALAXADAJQAIAVAGAUIAEAPIACAIQAMAvgBArQgBAhgHAgQgYBjhCAnQgsAZgKAKIAFhJIACgWIgCAWQgRAKhmCBQhmCAgSCgIgGAyIgmHkQgnHmA/CJQBACKBqBdQBqBcjlCQQjlCPgcAlQi5AdipAAIgpgBgAnNooIAAAAIgFgBgALvx/IACgBIAAAAIgCABg");
	this.shape_46.setTransform(-5,35.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AB6C43").s().p("AgOCcIgLAAIgagCIgMAAIgWgCQhGgIhEgYQitg6AMiTIBEgaQgEAyA9A8QA9A6CjAFQAhAAAdgCIAggEIARgCIALgCIAKgCQBPgSBAgpQAkgYATgXIABAAIgBgBIABgBQANgRAFgQIACgLIABgCIgCgUIAAgCQADAIAAAIIgBAGIABgGQAAgIgDgIIgEgdIAWALIAtAhQAQAwgRApIAAABIgBABIABAAIgHAOIAAAAQgKAOgPAPQhIBJhjAhQgsAOgyAHQglAFglABIgTAAg");
	this.shape_47.setTransform(-18.3,-90.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("ACBFUQAMgCAMgCQAOgEAOgEQA1gRAugcQCYhig9g8QgfgegDgoQghgggGgoQhdhtgWivABoktQh2gPjZgeQgCBFgHAZQABAvgBAPQgSCqgxAfQhFAugLA4QA8CPCqA6QAeAKAiAHQB4AbBlgS");
	this.shape_48.setTransform(-17,-104.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFC184").s().p("AAAACIAAgDIAAADg");
	this.shape_49.setTransform(-4.1,-70.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFC488").s().p("AjKBTQALg4BFgsQAxghASiqQABgQgBguIC1DjQAwA1AWBBQAiBjh6AGIgHAPIARAgIgKALIhWAPIgGALIAKAgQiog6g8iPg");
	this.shape_50.setTransform(-35.5,-101.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFBA75").s().p("AinFLQghgHgegKIgLggIAHgKIBVgQIAKgLIgQggIAGgPQB7gGgihiQgXhDgwg0Ii3jjQAIgZABhFQDaAeB2APIBPAAQAVCvBeBtQAFAoAhAgQADAoAfAeQA9A8iXBiQgvAcg0ARIgcAIIgYAEIgCgEIABAEQgpAHgpAAQhCAAhKgQg");
	this.shape_51.setTransform(-9.7,-104.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("Aot0qIBFgaQgFAyA9A8QA+A8CiAFQAhABAfgDQARgBAQgCQAIgCAIgBQAGgBAFgBIAKgCQBOgSBAgrQAjgYATgXIAAAAQAPgSAFgRQABgGABgFQABgBAAgBQABgLgDgLIgFgdIAXALIAsAhQARAwgRApIAAABQgBAAAAABQgKAYgWAVQhHBJhkAhQgqAPgxAGQgmAFglABQgKAAgLAAIAAAAQgGAAgGAAQgNgBgNAAQgGgBgGAAQgKgBgMgBQhFgIhFgYQitg6AMiVgAJlt5IgFBHIgCAYIAAAGIgBAHIAAABQAAAEAAADQAAAGgBAHQABABgBABQAAAIAAAJQgCA0gCEHQAAAkAAAjIACCRQACAmACAjQAEA4AFAuQABAIABAIQAEAcADAcIAAABQAFAnAEAjQAFA1ADAtQAAAFABAFQAZCZAeCqQABAJACAJIAAAAIAFAcQABAEABAFQADAMADAOQAAACABACQACANAEAPIACAOIAGAZADN1EQFLApBOA3AK4IgIAEARAK4IgIAAAAIgCgKQgIgkAKA1IAXBrQABAKACAKQABABAAABIACAIQAAAEABAEALDJaIgHgkIgCgMIgCgKALMKFIAAgBQAAACAAACQACAFABAFALMKFIgJgrALNKHIgBgCALBJNQABAGABAHArbiwIAiNSIAAKHQBTAbBaARQBgASBoAHQAjACAkAAQDTAFDvgqQARgDAQgDQBAgMBCgPQAPgDAPgEQCmgnDchUIgRhxIAkBfQARgGADgdIhZm7ALNKHIAJAxALYK3IgLgwArbixIgZkKIgPkaIgWhyAsuzOIEBhc");
	this.shape_52.setTransform(-1.1,33.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1C8CFD").s().p("AAGU0QhQgThbgZIAAqHIghtSIAAgBIgakKIgPkaIgWhyQhOldA6gqIEBhcQgMCVCrA6QBEAYBGAIIAWACIAMAAQgeAfhaCcQhUCThfEbIgCAOQAAALgGA2QgJA2AAAKQAAALgIA3QgJA3AAALQAAD+AzEAQANBAAWBlQARBOAeAeQAeAeAcBFQAcBEgJBjQgIBkAMCDQANCEAGCmQhogGhhgSgABJrSQgKAZAAALIgSA2QgSA2AAAHIgBAGQAyifgCAAIgBACg");
	this.shape_53.setTransform(-54.3,36.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF00").s().p("ArIIVQBaAZBTATQhagQhTgcgAK+iLIALAwIgCABgALJhbIgLgwIgBgCIgIgrIgDgNIACAJIAEASIAHAiIABAEIAEAQIAFAZgALJhbgAKtjcIgBgGIgBgGIgCgKIAEARIAAAAIAFAcIADANgAKyjFIgFgcIAAAAIgDgSIg3lDIgBgKIADAOIA5FRIAEAaIACALIgCgJgAKtjhgAKpjyIAAAAIABgBIADASgAKtjhIAAAAgAKqjrQgLg1AIAkIACAKIAAAAIACAKQgBgEAAgCQgBgCAAAAQAAgBAAACQAAABABADgAKpjyg");
	this.shape_54.setTransform(0.4,112);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#45A2FE").s().p("Al9VaIhGgCQgGingNiDQgNiEAJhjQAJhkgchEQgchFgegeQgfgegQhOQgXhlgNhAQg0kAAAj+QAAgLAJg3QAIg3AAgLQAAgKAIg2QAJg2AAgLIACgOQBfkbBUiTQBaicAegeIAZABIAMAAIAAAAIAWAAQAkgBAmgFQAxgGAsgPQBkghBFhJQAXgVAKgYIAAAAIAAgBIAAgBQARgpgQgwQFKApBOA3IgNDcQAMBBgEA6QgEA7ADAgIgCAYQgFAFAEABIABAAIgBAHIAAABIAAAHIAAANIAAACIgBARQgCA0gCEHIABBHIABCRIAEBJQAEA4AFAuIACAQIAIA4IAAABIAIBKQAGA1ACAtIABAKIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIAAACIACAIIABAIIABAAIBYG7QgDAdgRAGIgkhfIARBxQjcBUimAnIgeAHQhCAPhAAMIggAGQjYAmjBAAIgqgBgAp3owQgBgHATg2IASg2QAAgLAKgZQAIgTg3CxIABgHg");
	this.shape_55.setTransform(11.7,35.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D2D202").s().p("Ag1CnIACAAIgCAHgAA1itIABAAIAAAAIgBAAIgBAAIABAAg");
	this.shape_56.setTransform(65,-62.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("Ah/FUQBlASB4gbQAigHAegKQCqg6A8iPQgLg4hFguQgxgfgSiqQgBgPABgvQgHgZgChFQlTAwi2CDQgHBMgBABIAABJQgGAoghAgQgDAogfAeQg9A8CYBiQAuAcA1ARQAOAEAOAEQAMACAMAC");
	this.shape_57.setTransform(-17.1,-106.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13,p:{x:-30}},{t:this.shape_12},{t:this.shape_11,p:{x:-30,y:-72.4}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_13,p:{x:-29.9}},{t:this.shape_27},{t:this.shape_11,p:{x:-29.9,y:-72.4}},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},1).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_11,p:{x:-5.6,y:-73.4}},{t:this.shape_35},{t:this.shape_25},{t:this.shape_34},{t:this.shape_23},{t:this.shape_4},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_17},{t:this.shape_30}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_11,p:{x:-4.1,y:-70.4}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_5},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40}]},1).to({state:[{t:this.shape_14},{t:this.shape_15},{t:this.shape_13,p:{x:-30}},{t:this.shape_57},{t:this.shape_11,p:{x:-30,y:-72.4}},{t:this.shape_10},{t:this.shape_56},{t:this.shape_55},{t:this.shape_5},{t:this.shape_4},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-142.2,166.5,315.7);


(lib.gr_Ch_Body_01_021copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("ADN1EIgsghIgXgLIAFAdQADALgBALQAAABgBABQgBAFgBAGQgFARgPASIAAAAQgTAXgjAYQhAArhOASIgKACQgFABgGABQgIABgIACQgQACgRABQgfADghgBQiigFg+g8Qg9g8AFgyIhFAaQgMCVCtA6QBFAYBFAIQAMABAKABQAGAAAGABQANAAANABQAGAAAGAAIAAAAQALAAAKAAQAlgBAmgFQAxgGAqgPQBkghBHhJQAWgVAKgYQAAgBABAAIAAgBQARgpgRgwIA3AQQHRCBAPA1IAAAAIgEgHAJlt5IgHBfIAAAGIgBAHIAAABQAAAEAAADQAAAGgBAHQABABgBABQAAAIAAAJQgCA0gCEHQAAAkAAAjIACCRQACAmACAjQAEA4AFAuQABAIABAIQAEAcADAcIAAABQAFAnAEAjQAFA1ADAtQAAAFABAFQAZCZAeCqQABAJACAJIAAAAIAFAcQABAEABAFQADAMADAOQAAACABACQACANAEAPIACAOIAGAZAK4IgIACAKIACAMIAHAkIAJArIAAgBQAAACAAACQACAFABAFIgXhrQgKg1AIAkIACAKIAAAAIAEARALMKFIABACIAJAxIBZG7QgGAoguASIgchbIAABvQizA7imAnQhRAUhPAOQgQADgRADQjvAqjTgFQgkAAgjgCQhogHhggSQhagRhTgbIAAqHIgitSALBJNQABAGABAHALPKSQABAKACAKQABABAAABQABAIACAIALNKHIALAwAsZtHIAWByIAPEaIAZEKAot0qIkBBc");
	this.shape.setTransform(-1.1,33.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1C8CFD").s().p("AAGU0QhQgThbgZIAAqHIghtSIAAgBIgakKIgPkaIgWhyQhOldA6gqIEBhcQgMCVCrA6QBEAYBGAIIAWACIAMAAQgeAfhaCcQhUCThfEbIgCAOQAAALgGA2QgJA2AAAKQAAALgIA3QgJA3AAALQAAD+AzEAQANBAAWBlQARBOAAAoQAAAFgNBNQgNBNAAB0QAAB7BCCqQAcBHA+CSQhogGhhgSgABJrSQgKAZAAALIgSA2QgSA2AAAHIgBAGQAyifgCAAIgBACg");
	this.shape_1.setTransform(-54.3,36.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#002B2B").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(19.4,-92.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#016564").s().p("AAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(11.3,-96.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFF00").s().p("ArSS0QBaAZBTATQhagRhTgbgAK0ISIALAwIgCAAgAK/JCIgLgwIgBgCIgJgrIgCgNIACAJIAEASIAHAiIABAEIADAQIAGAZgAK/JCgAKjHBIgBgGIgBgGIgCgKIAEARIAAAAIAFAcIACANgAKoHYIgFgcIAAAAIgDgSIg3lDIgBgLIACAPIA5FRIAFAaIACALIgCgJgAKjG8gAKfGrIAAAAIAAAAIACAKQgBgEgBgCQAAgCAAAAQgBgBABACQAAABAAACQgLg0AJAkIACAKIABgBIADASgAKjG8IAAAAgAKfGrgAKfGrgAKfGrgALQzfQAGACgEAGg");
	this.shape_4.setTransform(1.4,44.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#003333").s().p("AAAgCIAAADIABACg");
	this.shape_5.setTransform(72.8,-82.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2D202").s().p("AhaSzIiGAiIghAGQBlgpBCABgACVuEIACAAIgCAHgAECzaIAAAAIgCABIACgBg");
	this.shape_6.setTransform(44.6,44.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#45A2FE").s().p("Al9VaIhGgCQg+iTgchHQhCiqAAh7QAAh0ANhNQAMhNAAgFQAAgogQhOQgXhlgNhAQg0kAAAj+QAAgLAJg3QAIg3AAgLQAAgKAIg2QAJg2AAgLIACgOQBfkbBUiTQBaicAegeIAZABIAMAAIAAAAIAWAAQAkgBAmgFQAxgGAsgPQBkghBFhJQAXgVAKgYIAAAAIAAgBIAAgBQARgpgQgwIA3AQQHQCBAPA1IABAFIAFAPIACAIQALAvgBArQAAAhgIAgQgXBjhDAnQgsAZgKAKIAHhfIgHBfQgFAFAEABIABAAIgBAHIAAABIAAAHIAAANIAAACIgBARQgCA0gCEHIABBHIABCRIAEBJQAEA4AFAuIACAQIAIA4IAAABIAIBKQAGA1ACAtIABAKIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIAAACIADAQIABAAIBYG7QgGAoguASIgchbIAABvQizA7imAnQhRAUhPAOICHgiQhCgChlAqQjYAmjBAAIgqgBgAJJx/IACgBIgBAAIgBABgAp3owQgBgHATg2IASg2QAAgLAKgZQAIgTg3CxIABgHgAI7zvIACADIAKAXg");
	this.shape_7.setTransform(11.7,35.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AB6C43").s().p("AgOCcIgLAAIgagCIgMAAIgWgCQhGgIhEgYQitg6AMiTIBEgaQgEAyA9A8QA9A6CjAFQAhAAAdgCIAggEIARgCIALgCIAKgCQBPgSBAgpQAkgYATgXIABAAIgBgBQAOgSAFgQIACgLIABgCIgCgUIAAgCQADAIAAAIIgBAGIABgGQAAgIgDgIIgEgdIAWALIAtAhQAQAwgRApIAAABIgBABIABAAQgKAWgWAVQhIBJhjAhQgsAOgyAHQglAFglABIgTAAg");
	this.shape_8.setTransform(-18.3,-90.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#A06B4B").ss(1,1,1).p("AAAAAIAAAA");
	this.shape_9.setTransform(-30,-72.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AiAFUQgMgCgMgCQgOgEgOgEQg1gRgugcQiYhiA9g8QAfgeADgoQAhggAGgoIAAhJQABgBAHhMQC2iDFTgwQACBFAHAZQgBAvABAPQASCqAxAfQBFAuALA4Qg8CPiqA6QgeAKgiAHQh4AbhlgS");
	this.shape_10.setTransform(-17.1,-106.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFC184").s().p("AAAACIABgDIgBADg");
	this.shape_11.setTransform(-30,-72.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC9C6C").s().p("Ag2FUIABgEIgCAEIgYgEIgcgIQg0gRgvgcQiXhiA9g8QAfgeADgoQAhggAFgoIAAhJQABgBAIhMQC1iDFUgwQABBFAIAZIi3DjQgwA0gXBDQgiBiB7AGIAGAPIgQAgIAKALIBVAQIAHAKIgLAgQgeAKghAHQhKAQhCAAQgpAAgpgHg");
	this.shape_12.setTransform(-24.5,-106.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFC488").s().p("AgPD8IgGgLIhWgPIgKgLIARggIgHgQQh6gFAihiQAWhBAwg2IC1jkQgBAvABAQQASCqAxAhQBFAsALA4Qg8CPioA5g");
	this.shape_13.setTransform(1.4,-103.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AoHyrQAcgjApAJQgFAyA9A8QA+A8CiAFQBCACA6gMIAKgCQBOgSBAgrQAjgYATgXIAAAAQALgOAGgNQABgDABgCQAAgCABgBQABgGABgFQABgBAAgBQAAgFgCgPQAAgBAAgBIghhRQAdgMAxAtQAaAiABAxQAAAEAAADQAAADAAACQgCAbgIAeIAAABQgBAAAAABQgKAYgWAVQhHBJhkAhQgqAPgxAGQhLAJhHgFQgKgBgMgBQhFgIhFgYQitg6AMiVIhGAZQisBOgpAnADi0EQCzANCoA5QADABADABQAGACAFACQARAGARAGAJ7p/QAAAAAAAAQAJgNADgOQABgBAAgBQAAgCAAgDQABgJAEgIAJ7p/IgBACIAJgQQAAAKgBAKQABABgBABQAAAIAAAJQAAABAAABQgCAzgCAxQAAATgBASQgECkAACDQABD4AVB+QAMBKANBPQAZCZAeCqQABAJACAJAJ7p/IAAAAQgDAEgDAEAJ7p/IADgcIANhfAJwysQAwATAvAWALeKfIACAKIACAMIAHAkIAJArIABACIALA6IgCgHQgBgJgCgJQAAgBgBgBQgCgKgCgKALnLMIgFgcIAAAAIgEgRIAAAAIgCgKQgIgkAKA1IAWBrAMBNFIgJgoIgCgOQgEgPgCgNQgBgCAAgCQgDgOgDgMQgBgEgBgFALyMEIAAgBQABAHABAHALpLZQgBgGgBgHAL+NAIABADIAAABIACALAGSUXQDEgkA4gUQAFgCAEgCQATgHASgJQBbgjAKhKQAHgxgQhqQgHgwgNg8QAAgCAAgCIAAgBQgBgFgCgGIAAgBIgOhAAMCNUIgBgFAMCNTIgBgEArzrIIAWByIBKHMQgCB7gFB+QgECAAMG8QABAggrDcQgsDcA+BJQA+BJCFgMQAUACAUACQISAxE+gnQABAAAAAAQAAAAgBAAQADAAACAAQgCAAgCAA");
	this.shape_14.setTransform(-4.9,20.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("Aj1kgQADALgBALAD2EfQgBABgBABQgEAAgOgH");
	this.shape_15.setTransform(37.9,-74.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D2D202").s().p("AAAAAIABAAIgBAAg");
	this.shape_16.setTransform(44.6,131.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BFD8E1").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAg");
	this.shape_17.setTransform(59.3,-41);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#80AFC4").s().p("ABCL1IACAAIAAAEIgCABgAhAr5IAJACQgDANgJANIAAAAg");
	this.shape_18.setTransform(65.5,29.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFF00").s().p("Ai4PZIABAAIgBAAgAC2IQIABAFIAAAAgAC0IFIgBgEIgLg5IAOBAIABABIACALIAAAAIgCAAIAAAAgAC2IIIAAgBIABACgACoHIIgBgCIgJgrIgCgNIACANIgHglIgBgFIgBgHIgCgKIACAKQgBgDgBgCQAAgCAAAAQAAgBAAABQAAABABADQgLg1AIAkIACAKIAAAAIAEARIAAABIAFAcIgFgcIAAgBIgDgRIg3lEIgZiWQgVh+gBj7QAAiCAEikIABglIAEhkIAAgCIAHgNIgEByIgCAlQgFCkAACDQABEPAVCEIAVCBIA5FRIAFAaIACAKIAEASIAHAjIABAEIAEAPIAIAoIAAACgACeGWIgCgIIACAIgACXFxIAAAAgACXFxgACTFgIAAAAIABAAIADARgAA4u4IAAgTIgJAQIABgCIAAAAIAAAAQAJgOADgNIAHACIgCAHIAAAFIgCAOIABgNIgEAPIgEACIAAACIAAgCgABDvWQAOAHAEAAIgTAPQACgLgBgLg");
	this.shape_19.setTransform(53.8,52.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#002B2B").s().p("AAAAAIAAAAIAAAAg");
	this.shape_20.setTransform(19.4,-92.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#017676").s().p("AAAAAIAAAAIAAAAg");
	this.shape_21.setTransform(11.3,-96.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#45A2FE").s().p("Am3T7IgpgEQiFAMg9hJQg+hJArjcQAsjcgBggQgNm8AFiAQAFh+ACh7IhLnMIgWhyQhdjoAuhtQAqgnCrhOIBHgZQgMCVCtA6QBEAYBGAIIAWACQBHAFBKgJQAwgGAsgPQBjghBIhJQAWgVAKgYIAAAAIAAgBIAAgBQAJgeABgbIABgFIAAgHQgBgxgagiQCzAOCoA4IAGACIALAEIAiAMIAAAAQAwATAvAWIARApQADACALAVQAJASAEAKIABAEIAAAAQAIAVAHAUIADAKIABAFQAFACgDAGIABAGIABAAIAEAVQAFAhAAAeIgCAZQgCAVgEATQgYBjhbBTIgCABQgEABgOgIIgGgCIAAgCIABgFQABgIAEgJQgEAJgBAIIgBAFIAAACIgJgBIANhfIgNBfIgEAcIAAAAIgGAIIAGgIIAAACIAJgQIgBAUIAAACIgIAbIAGgIIAAAAIgBACIABgCIABAAIgDBkIgBAlQgFCkABCDQABD4AUB+IAZCZIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIABACIADASIACAHIAAADIAAABIACALIABAFIAAAAIABABIAAACIACAAQAMA8AIAwQAQBqgHAxQgLBKhbAjIgkAQIgJAEQg4AVjEAjIgBAAQiMASi2AAQjlAAkpgcgAH1RHIACgCIAAAAgAKCqRg");
	this.shape_22.setTransform(-5.6,22.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#016564").s().p("AgKAiIAAAAIACABgAAJggIAAgBQADAKgBALIgCgUg");
	this.shape_23.setTransform(12.3,-99.7);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AB6C43").s().p("AhAC1IgWgCQhGgIhEgXQitg7AMiTQAbgjApAJQgEAzA9A5QA9A8CjAFQBAACA6gMIAKgCQBPgRBAgrQAkgWATgYIABABIAAAAIgBgBQALgOAGgNIABgFIABgDIACgKIABgDQABgLgDgKIghhSQAegLAxAtQAaAiABAwIAAAIIgBAEQgBAbgJAdIAAAAIgEAAIgBABIAFABQgKAXgWAWQhIBJhjAgQgsAPgyAHQguAFgrAAQgbAAgbgCg");
	this.shape_24.setTransform(-18.2,-93.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AiAFUQgMgCgMgCQgOgEgOgEQg1gRgugcQiYhiA9g8QAfgeADgoQAhggAGgoIAAhJQABgBAHhMQC2iDFTgwQACBEAHAaQgBAvABAPQASCqAxAfQBFAuALA4Qg8CPiqA6QgeAKgiAHQh4AbhlgS");
	this.shape_25.setTransform(-17,-106.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#CC9C6C").s().p("Ag2FUIABgEIgCAEIgYgEIgcgIQg0gRgvgcQiXhiA9g8QAfgeADgoQAhggAFgoIAAhJQABgBAIhMQC1iDFUgwQABBEAIAaIi3DjQgwA0gXBDQgiBiB7AGIAGAPIgQAgIAKALIBVAQIAHAKIgLAgQgeAKghAHQhKAQhCAAQgpAAgpgHg");
	this.shape_26.setTransform(-24.4,-106.5);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFC488").s().p("AgPD8IgGgLIhWgPIgKgLIARggIgHgQQh6gFAihiQAWhBAwg2IC1jkQgBAwABAPQASCqAxAhQBFAsALA4Qg8CPioA5g");
	this.shape_27.setTransform(1.5,-103.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AoHyrQAcgjApAJQgFAyA9A8QA+A8CiAFQBCACA6gMIAKgCQBLgRA+goQACgCADgCQAjgYATgXIAAAAQALgOAGgNQABgDABgCQAAgCABgBQABgGABgFQABgBAAgBQAAgFgCgPQAAgBAAgBIghhRQAdgMAxAtQAaAiABAxQAAAEAAADQAAADAAACQgCAbgIAeIAAABQgBAAAAABQgKAYgWAVQgYAZgcAVQgDACgDACQgzAkg+AUQgqAPgxAGQhLAJhHgFQgKgBgMgBQhFgIhFgYQitg6AMiVIhGAZQisBOgpAnADi0EQCzANCoA5QADABADABQAGACAFACQARAGARAGAJ7p/QAAAAAAAAQAJgNADgOQABgBAAgBQAAgCAAgDQABgJAEgIAJ7p/IgBACIAJgQQAAAKgBAKQABABgBABQAAAIAAAJQgCA0gCAyQAAATgBASQgECkAACDQABD4AVB+QAMBKANBPQAZCZAeCqQABAJACAJIgEgRIACAKIACAMIAHAkIAJArIABACIAOBAIAAABQACAGABAFIAAABQAMA+AIAyQAQBqgHAxQgKBKhbAjQgSAJgTAHQgEACgFACQg4AUjEAkAJ7p/IAAAAQgDAEgDAEAJ7p/IAAAAIAQh7AJwysQAwATAvAWALnLMIgFgcIAAAAAL0MRIgWhrQgKg1AIAkIACAKIAAAAALyMEIAAgBQABAHABAHQACAKACAKQABABAAABQACAJABAJIACAHIABADIAAABIACALAMBNFIgJgoIgCgOQgEgPgCgNQgBgCAAgCQgDgOgDgMQgBgEgBgFALpLZQgBgGgBgHAMCNUIgBgFAMCNTIgBgEArzrIIAWByIBKHMQgCB7gFB+QgECAAMG8QABAggrDcQgsDcA+BJQA+BJCFgMQAUACAUACQISAxE+gnQABAAAAAAQAAAAgBAAQADAAACAAQgCAAgCAAAL+NAIgLg6");
	this.shape_28.setTransform(-4.9,20.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFF00").s().p("Ai3PYIABAAIgBAAgAhZMXIABABIgDABgAC3IPIABAFIAAAAgAC3IHIAAgBIABACgACpHHIgBgCIgJgrIgCgNIACANIgHglIgBgFIgBgHIgCgKIAEARIAAABIAFAcIgFgcIAAgBIgDgRIg3lEIgZiWQgVh+gBj7QAAiCAEikIABglIAEhmIAHgNIgFByIgBAlQgFCkAACDQABEPAVCEIAVCBIA5FRIAFAaIACAKIAEASIAHAjIABAEIAEAPIAIAoIAAACgACfGVIgCgIIACAIgACVFmQgLg1AIAkIACAKIAAAAIACAKQgBgDgBgCQAAgCAAAAQAAgBAAABQAAABABADgABEvXQAOAHAEAAIgTAPQACgLgBgLg");
	this.shape_29.setTransform(53.7,52.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D2D202").s().p("AAAAAIAAAAIAAAAg");
	this.shape_30.setTransform(58.7,-43.6);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFCC00").s().p("AA/LnIAAgDIgMg6IAPBAIAAABIACALIAAABIgBAAIgBAAgAAeJDIAAAAIABgBIADASgAg7rWIABgTIgJAQIAAgCIAAAAIABAAQAJgNADgOIAGACIgCAIIAAAEIgCAOIABgNIgEAPIgEACIAAADIAAgDg");
	this.shape_31.setTransform(65.5,29.7);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#45A2FE").s().p("Am3T7IgpgEQiFAMg9hJQg+hJArjcQAsjcgBggQgNm8AFiAQAFh+ACh7IhLnMIgWhyQhdjoAuhtQAqgnCrhOIBHgZQgMCVCtA6QBEAYBGAIIAWACQBHAFBKgJQAwgGAsgPQA+gUAzgkIAFgEQAcgUAZgaQAWgVAKgYIAAAAIAAgBIAAgBQAJgeABgbIABgFIAAgHQgBgxgagiQCzAOCoA4IAGACIALAEIAiAMIAAAAQAwATAvAWIARApQADACALAVQAJASAEAKIABAEIAAAAQAIAVAHAUIADAKIABAFQAFACgDAGIABAGIABAAIAEAVQAFAhAAAeIgCAZQgCAVgEATQgUBThEBIIgbAbIgCABQgEABgOgIIgGgCIAAgCIABgFQABgIAEgJQgEAJgBAIIgBAFIAAACQgDAOgJANIgBAAIARh7IgRB7IAAAAIAAAAIgGAIIAGgIIAAACIAJgQIgBAUIAAACIgIAbIAGgIIAAgBIgBADIACgEIgDBmIgBAlQgFCkABCDQABD4AUB+IAZCZIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIABACIADASIACAHIAAADIAAABIACALIABAFIAAAAIABABIAAACIAAgEIABAAQANA+AIAyQAQBqgHAxQgLBKhbAjIgkAQIgJAEQg4AVjEAjIgBAAQiMASi2AAQjlAAkpgcgAH1RHIACgCIAAAAgAKCqRg");
	this.shape_32.setTransform(-5.6,22.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AB6C43").s().p("AhAC1IgWgCQhGgIhEgXQitg7AMiTQAbgjApAJQgEAzA9A5QA9A8CjAFQBAACA6gMIAKgCQBMgRA/goIAEgDQAkgWATgYIABABIAAAAIgBgBQALgOAGgNIABgFIABgDIACgKIABgDQABgLgDgKIghhSQAegLAxAtQAaAiABAwIAAAIIgBAEQgBAbgJAdIAAAAIgBACIABAAQgKAXgWAWQgZAZgcAUIgFAEQgzAkg+AUQgsAPgyAHQguAFgrAAQgbAAgbgCg");
	this.shape_33.setTransform(-18.2,-93.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AB9FFQAMgDALgEQAOgGANgFQAzgXAtgjQCTh1g7g3QgegcgDgpQgggbgFgrIAAhMQgBgBgHhNQiwh0lJgMQgBBHgHAaQABAxgBAQQgRCxgwAmQhDA3gLA7QA7CNCkAoQAdAIAhAEQB0AOBigd");
	this.shape_34.setTransform(-18.2,-106);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFC184").s().p("AAAACIAAgDIABADg");
	this.shape_35.setTransform(-5.7,-73.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFC488").s().p("AkVBqQAKg6BDg2QAwgoARixQABgQgBgwIDxDTQCMBQAeBSQAdBSkagIIgHARIAQAfIgJANIhRAZIgGALIAKAfQilgog6iOg");
	this.shape_36.setTransform(-27.9,-101.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#CC9C6C").s().p("AihFUQghgEgdgIIgKgfIAGgLIBTgZIAKgNIgQgfIAGgRQEYAIgdhSQgdhRiLhRIjyjTQAHgaABhHQFJAMCwB0QAHBNABABIAABMQAFArAgAbQADApAeAcQA7A3iTB1QgtAjgzAXIgbALIgXAHIgCgEIABAEQhAAUhMAAQgkAAgmgFg");
	this.shape_37.setTransform(-11.1,-106);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AI8x0IgCAWIgFBJIgBAGIAAAHIAAABQgBADAAAEQAAAGAAAGQAAABAAABQAAAJgBAJQgCA0gCEHQAAAkABAjIABCRQACAmACAjQAEA4AFAuQABAIABAHQAEAfAEAcIAAABQAFAmADAjQAGA2ADAsQAAAFAAAGQAaCXAdCqQACAJABAJIAAAAIAGAcQABAEABAFQACAMADAOQABACAAACQADANADAPIADANIAFAaAKlGXIgWhsQgLg1AIAlIACAJIAAABIAEARAKOElIACAKIADALIAHAlQgBgHgBgGAKjGMIAAgCIgJgrAKlGXQgBgFgBgGQAAgCgBgBIABABAKlGXQACAJACAKQAAACAAABQACAHABAIAKjGMIAKAwIBYG8QgGAoguASIgchbIAABvQizA7ilAnQhSAThOAPQgRADgQADQgcAFgcAEQjQAgi7gEQgjgBgjgCQhogGhhgSQhagRhTgbIAAqHIghtSAKuG8IgLgw");
	this.shape_38.setTransform(3.1,58.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("AD9oyIgtghIgWgLIAEAdQADALgBALQAAABgBABQAAAFgCAGQgFAQgNARQgBABAAAAIAAABQgTAXgkAYQhAArhOASIgJACQgGABgFABQgIABgJABQgQADgQABQgfACghAAQijgFg9g8Qg9g8AEgyIhEAaQgMCVCtA6QBEAYBGAIQALABALABQAGAAAGAAQANABAMABQAGAAAGAAIABAAQAKAAALAAQAlgBAlgFQAwgHArgOQBkghBIhJQAPgPAJgQIABAAQAEgHADgHQAAgBAAAAIAAgBQARgpgQgwgALrnIIgBAAIm2haIg3gQAqrJfIgakKIgPkaIgWhwAq4ndIC7g7");
	this.shape_39.setTransform(-5.8,-45.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#1C8CFD").s().p("AiLESIAFABIAAAAgACAkSIAMABIgFAFg");
	this.shape_40.setTransform(-37.6,-47.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#6C64B5").s().p("AhOOoQDjiQhqhcQhohdg/iKQhAiJAnnkIAnnmIAGgyQARigBkiAQBmiBASgKIgGBJQgFAFAEABIABAAIgBAHIAAABIAAAHIAAANIAAACIgBARQgCA0gCEHIAABHIACCRIAEBJQAEA5AFAtIACAQIAIA6IAAABIAIBKQAGA1ACAtIABAKIA3FBIgBABIgCgKQgIgkALA1IAWBrIAEAUIAAACIADAQIAAAAIBZG7QgGAoguASIgchbIAABvQizA7ikAnQhRAUhPAOIghAGIg3AJQAcglDliPg");
	this.shape_41.setTransform(46.8,58);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#002B2B").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAgAAAAAg");
	this.shape_42.setTransform(19.4,-92.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF00").s().p("ArSS0QBaAZBTATQhagRhTgbgAK0ISIALAwIgCAAgAK/JCIgLgwIgBgCIgJgrIgCgNIACAJIgCgJIACANIgHgkIgBgGIgBgGIgCgKIAEARIAAAAIAFAcIgFgcIAAAAIgEgRIAAAAIAAAAIACAKQgBgEgBgCQAAgCAAAAQgBgBABACQAAABAAACQgLg0AJAkIACAKIABgBIADASIgDgSIg3lDIgBgLIACAPIA5FRIAFAaIACALIAEASIAHAiIABAEIADAQIAGAZgAK0ISgAKfGrgAKfGrgALQzfQAGACgEAGg");
	this.shape_43.setTransform(1.4,44.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#D2D202").s().p("Ag1CnIACAAIgCAHgAA2itIAAAAIgCAAIACAAg");
	this.shape_44.setTransform(65,-62.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#003333").s().p("AAAAAIAAAAIAAAAg");
	this.shape_45.setTransform(68.9,-91.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#7D77B5").s().p("AjWVaIhHgCQhogHhggSQhTgThagZIAAqHIgitSIAAgBIgZkKIgPkaIgWhyQhol/CagpIC6g7QgMCVCtA6QBFAYBFAIIAWACIAIAGIAEgFIAaABIAMAAIAAAAIAVAAQAlgBAmgFQAxgGAqgPQBkghBHhJQAQgPAJgQIAAAAIAHgOIAAAAIABgBIAAgBQARgpgRgwIA3AQIG3BaIAAABQACACAMAVQALAXADAJQAIAVAGAUIAEAPIACAIQAMAvgBArQgBAhgHAgQgYBjhCAnQgsAZgKAKIAFhJIACgWIgCAWQgRAKhmCBQhmCAgSCgIgGAyIgmHkQgnHmA/CJQBACKBqBdQBqBcjlCQQjlCPgcAlQi5AdipAAIgpgBgAnNooIAAAAIgFgBgALvx/IACgBIAAAAIgCABg");
	this.shape_46.setTransform(-5,35.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#AB6C43").s().p("AgOCcIgLAAIgagCIgMAAIgWgCQhGgIhEgYQitg6AMiTIBEgaQgEAyA9A8QA9A6CjAFQAhAAAdgCIAggEIARgCIALgCIAKgCQBPgSBAgpQAkgYATgXIABAAIgBgBIABgBQANgRAFgQIACgLIABgCIgCgUIAAgCQADAIAAAIIgBAGIABgGQAAgIgDgIIgEgdIAWALIAtAhQAQAwgRApIAAABIgBABIABAAIgHAOIAAAAQgKAOgPAPQhIBJhjAhQgsAOgyAHQglAFglABIgTAAg");
	this.shape_47.setTransform(-18.3,-90.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ABoktQh2gPjZgeQgCBFgHAZQABAvgBAPQgSCqgxAfQhFAugLA4QA8CPCqA6QAeAKAiAHQB4AbBlgSIABAAQAMgCAMgCQAOgEAOgEQA1gRAugcQCYhig9g8QgfgegDgoQghgggGgoQhdhtgWiv");
	this.shape_48.setTransform(-17,-104.5);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFC184").s().p("AAAACIAAgDIAAADg");
	this.shape_49.setTransform(-4.1,-70.7);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFC488").s().p("AjKBTQALg4BFgsQAxghASiqQABgQgBguIC1DjQAwA1AWBBQAiBjh6AGIgHAPIARAgIgKALIhWAPIgGALIAKAgQiog6g8iPg");
	this.shape_50.setTransform(-35.5,-101.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFBA75").s().p("AinFLQghgHgegKIgLggIAHgKIBVgQIAKgLIgQggIAGgPQB7gGgihiQgXhDgwg0Ii3jjQAIgZABhFQDaAeB2APIBPAAQAVCvBeBtQAFAoAhAgQADAoAfAeQA9A8iXBiQgvAcg0ARIgcAIIgYAEIgCgEIABAEQgpAHgpAAQhCAAhKgQg");
	this.shape_51.setTransform(-9.7,-104.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("Aot0qIBFgaQgFAyA9A8QA+A8CiAFQAhABAfgDQARgBAQgCQAIgCAIgBQAGgBAFgBIAKgCQBOgSBAgrQAjgYATgXIAAAAQAPgSAFgRQABgGABgFQABgBAAgBQABgLgDgLIgFgdIAXALIAsAhQARAwgRApIAAABQgBAAAAABQgKAYgWAVQhHBJhkAhQgqAPgxAGQgmAFglABQgKAAgLAAIAAAAQgGAAgGAAQgNgBgNAAQgGgBgGAAQgKgBgMgBQhFgIhFgYQitg6AMiVgAJlt5IgFBHIgCAYIAAAGIgBAHIAAABQAAAEAAADQAAAGgBAHQABABgBABQAAAIAAAJQgCA0gCEHQAAAkAAAjIACCRQACAmACAjQAEA4AFAuQABAIABAIQAEAcADAcIAAABQAFAnAEAjQAFA1ADAtQAAAFABAFQAZCZAeCqQABAJACAJIAAAAIAFAcQABAEABAFQADAMADAOQAAACABACQACANAEAPIACAOIAGAZADN1EQFLApBOA3AK4IgIAEARAK4IgIAAAAIgCgKQgIgkAKA1IAXBrQABAKACAKQABABAAABIACAIQAAAEABAEALDJaIgHgkIgCgMIgCgKALMKFIAAgBQAAACAAACQACAFABAFALMKFIgJgrALNKHIgBgCALBJNQABAGABAHArbiwIAiNSIAAKHQBTAbBaARQBgASBoAHQAjACAkAAQDTAFDvgqQARgDAQgDQBAgMBCgPQAPgDAPgEQCmgnDchUIgRhxIAkBfQARgGADgdIhZm7ALNKHIAJAxALYK3IgLgwArbixIgZkKIgPkaIgWhyAsuzOIEBhc");
	this.shape_52.setTransform(-1.1,33.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#1C8CFD").s().p("AAGU0QhQgThbgZIAAqHIghtSIAAgBIgakKIgPkaIgWhyQhOldA6gqIEBhcQgMCVCrA6QBEAYBGAIIAWACIAMAAQgeAfhaCcQhUCThfEbIgCAOQAAALgGA2QgJA2AAAKQAAALgIA3QgJA3AAALQAAD+AzEAQANBAAWBlQARBOAeAeQAeAeAcBFQAcBEgJBjQgIBkAMCDQANCEAGCmQhogGhhgSgABJrSQgKAZAAALIgSA2QgSA2AAAHIgBAGQAyifgCAAIgBACg");
	this.shape_53.setTransform(-54.3,36.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFF00").s().p("ArIIVQBaAZBTATQhagQhTgcgAK+iLIALAwIgCABgALJhbIgLgwIgBgCIgIgrIgDgNIACAJIAEASIAHAiIABAEIAEAQIAFAZgALJhbgAKtjcIgBgGIgBgGIgCgKIAEARIAAAAIAFAcIADANgAKyjFIgFgcIAAAAIgDgSIg3lDIgBgKIADAOIA5FRIAEAaIACALIgCgJgAKtjhgAKpjyIAAAAIABgBIADASgAKtjhIAAAAgAKqjrQgLg1AIAkIACAKIAAAAIACAKQgBgEAAgCQgBgCAAAAQAAgBAAACQAAABABADgAKpjyg");
	this.shape_54.setTransform(0.4,112);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#45A2FE").s().p("Al9VaIhGgCQgGingNiDQgNiEAJhjQAJhkgchEQgchFgegeQgfgegQhOQgXhlgNhAQg0kAAAj+QAAgLAJg3QAIg3AAgLQAAgKAIg2QAJg2AAgLIACgOQBfkbBUiTQBaicAegeIAZABIAMAAIAAAAIAWAAQAkgBAmgFQAxgGAsgPQBkghBFhJQAXgVAKgYIAAAAIAAgBIAAgBQARgpgQgwQFKApBOA3IgNDcQAMBBgEA6QgEA7ADAgIgCAYQgFAFAEABIABAAIgBAHIAAABIAAAHIAAANIAAACIgBARQgCA0gCEHIABBHIABCRIAEBJQAEA4AFAuIACAQIAIA4IAAABIAIBKQAGA1ACAtIABAKIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIAAACIACAIIABAIIABAAIBYG7QgDAdgRAGIgkhfIARBxQjcBUimAnIgeAHQhCAPhAAMIggAGQjYAmjBAAIgqgBgAp3owQgBgHATg2IASg2QAAgLAKgZQAIgTg3CxIABgHg");
	this.shape_55.setTransform(11.7,35.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#D2D202").s().p("Ag1CnIACAAIgCAHgAA1itIABAAIAAAAIgBAAIgBAAIABAAg");
	this.shape_56.setTransform(65,-62.5);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("Ah/FUQBlASB4gbQAigHAegKQCqg6A8iPQgLg4hFguQgxgfgSiqQgBgPABgvQgHgZgChFQlTAwi2CDQgHBMgBABIAABJQgGAoghAgQgDAogfAeQg9A8CYBiQAuAcA1ARQAOAEAOAEQAMACAMAC");
	this.shape_57.setTransform(-17.1,-106.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11,p:{x:-30}},{t:this.shape_10},{t:this.shape_9,p:{x:-30,y:-72.4}},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_11,p:{x:-29.9}},{t:this.shape_25},{t:this.shape_9,p:{x:-29.9,y:-72.4}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_9,p:{x:-5.6,y:-73.4}},{t:this.shape_33},{t:this.shape_23},{t:this.shape_32},{t:this.shape_21},{t:this.shape_2},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_15},{t:this.shape_28}]},1).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_3},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},1).to({state:[{t:this.shape_12},{t:this.shape_13},{t:this.shape_11,p:{x:-30}},{t:this.shape_57},{t:this.shape_9,p:{x:-30,y:-72.4}},{t:this.shape_8},{t:this.shape_56},{t:this.shape_55},{t:this.shape_3},{t:this.shape_2},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-142.2,166.5,315.7);


(lib.gr_Ch_Body_01_021_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("ADN1EIgsghIgXgLIAFAdQADALgBALQAAABgBABQgBAFgBAGQgFARgPASIAAAAQgTAXgjAYQhAArhOASIgKACQgFABgGABQgIABgIACQgQACgRABQgfADghgBQiigFg+g8Qg9g8AFgyIhFAaQgMCVCtA6QBFAYBFAIQAMABAKABQAGAAAGABQANAAANABQAGAAAGAAIAAAAQALAAAKAAQAlgBAmgFQAxgGAqgPQBkghBHhJQAWgVAKgYQAAgBABAAIAAgBQARgpgRgwIA3AQQHRCBAPA1IAAAAIgEgHAJlt5IgHBfIAAAGIgBAHIAAABQAAAEAAADQAAAGgBAHQABABgBABQAAAIAAAJQgCA0gCEHQAAAkAAAjIACCRQACAmACAjQAEA4AFAuQABAIABAIQAEAcADAcIAAABQAFAnAEAjQAFA1ADAtQAAAFABAFQAZCZAeCqQABAJACAJIAAAAIAFAcQABAEABAFQADAMADAOQAAACABACQACANAEAPIACAOIAGAZAK4IgIACAKIACAMIAHAkIAJArIAAgBQAAACAAACQACAFABAFIgXhrQgKg1AIAkIACAKIAAAAIAEARALMKFIABACIAJAxIBZG7QgGAoguASIgchbIAABvQizA7imAnQhRAUhPAOQgQADgRADQjvAqjTgFQgkAAgjgCQhogHhggSQhagRhTgbIAAqHIgitSALBJNQABAGABAHALPKSQABAKACAKQABABAAABQABAIACAIALNKHIALAwAsZtHIAWByIAPEaIAZEKAot0qIkBBc");
	this.shape_58.setTransform(-1.1,33.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1C8CFD").s().p("AAGU0QhQgThbgZIAAqHIghtSIAAgBIgakKIgPkaIgWhyQhOldA6gqIEBhcQgMCVCrA6QBEAYBGAIIAWACIAMAAQgeAfhaCcQhUCThfEbIgCAOQAAALgGA2QgJA2AAAKQAAALgIA3QgJA3AAALQAAD+AzEAQANBAAWBlQARBOAAAoQAAAFgNBNQgNBNAAB0QAAB7BCCqQAcBHA+CSQhogGhhgSgABJrSQgKAZAAALIgSA2QgSA2AAAHIgBAGQAyifgCAAIgBACg");
	this.shape_59.setTransform(-54.3,36.5);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#002B2B").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAg");
	this.shape_60.setTransform(19.4,-92.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#016564").s().p("AAAAAIAAAAIAAAAg");
	this.shape_61.setTransform(11.3,-96.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFF00").s().p("ArSS0QBaAZBTATQhagRhTgbgAK0ISIALAwIgCAAgAK/JCIgLgwIgBgCIgJgrIgCgNIACAJIAEASIAHAiIABAEIADAQIAGAZgAK/JCgAKjHBIgBgGIgBgGIgCgKIAEARIAAAAIAFAcIACANgAKoHYIgFgcIAAAAIgDgSIg3lDIgBgLIACAPIA5FRIAFAaIACALIgCgJgAKjG8gAKfGrIAAAAIAAAAIACAKQgBgEgBgCQAAgCAAAAQgBgBABACQAAABAAACQgLg0AJAkIACAKIABgBIADASgAKjG8IAAAAgAKfGrgAKfGrgAKfGrgALQzfQAGACgEAGg");
	this.shape_62.setTransform(1.4,44.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#003333").s().p("AAAgCIAAADIABACg");
	this.shape_63.setTransform(72.8,-82.4);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#D2D202").s().p("AhaSzIiGAiIghAGQBlgpBCABgACVuEIACAAIgCAHgAECzaIAAAAIgCABIACgBg");
	this.shape_64.setTransform(44.6,44.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#45A2FE").s().p("Al9VaIhGgCQg+iTgchHQhCiqAAh7QAAh0ANhNQAMhNAAgFQAAgogQhOQgXhlgNhAQg0kAAAj+QAAgLAJg3QAIg3AAgLQAAgKAIg2QAJg2AAgLIACgOQBfkbBUiTQBaicAegeIAZABIAMAAIAAAAIAWAAQAkgBAmgFQAxgGAsgPQBkghBFhJQAXgVAKgYIAAAAIAAgBIAAgBQARgpgQgwIA3AQQHQCBAPA1IABAFIAFAPIACAIQALAvgBArQAAAhgIAgQgXBjhDAnQgsAZgKAKIAHhfIgHBfQgFAFAEABIABAAIgBAHIAAABIAAAHIAAANIAAACIgBARQgCA0gCEHIABBHIABCRIAEBJQAEA4AFAuIACAQIAIA4IAAABIAIBKQAGA1ACAtIABAKIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIAAACIADAQIABAAIBYG7QgGAoguASIgchbIAABvQizA7imAnQhRAUhPAOICHgiQhCgChlAqQjYAmjBAAIgqgBgAJJx/IACgBIgBAAIgBABgAp3owQgBgHATg2IASg2QAAgLAKgZQAIgTg3CxIABgHgAI7zvIACADIAKAXg");
	this.shape_65.setTransform(11.7,35.4);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#AB6C43").s().p("AgOCcIgLAAIgagCIgMAAIgWgCQhGgIhEgYQitg6AMiTIBEgaQgEAyA9A8QA9A6CjAFQAhAAAdgCIAggEIARgCIALgCIAKgCQBPgSBAgpQAkgYATgXIABAAIgBgBQAOgSAFgQIACgLIABgCIgCgUIAAgCQADAIAAAIIgBAGIABgGQAAgIgDgIIgEgdIAWALIAtAhQAQAwgRApIAAABIgBABIABAAQgKAWgWAVQhIBJhjAhQgsAOgyAHQglAFglABIgTAAg");
	this.shape_66.setTransform(-18.3,-90.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#A06B4B").ss(1,1,1).p("AAAAAIAAAA");
	this.shape_67.setTransform(-30,-72.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AiAFUQgMgCgMgCQgOgEgOgEQg1gRgugcQiYhiA9g8QAfgeADgoQAhggAGgoIAAhJQABgBAHhMQC2iDFTgwQACBFAHAZQgBAvABAPQASCqAxAfQBFAuALA4Qg8CPiqA6QgeAKgiAHQh4AbhlgS");
	this.shape_68.setTransform(-17.1,-106.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFC184").s().p("AAAACIABgDIgBADg");
	this.shape_69.setTransform(-30,-72.6);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#CC9C6C").s().p("Ag2FUIABgEIgCAEIgYgEIgcgIQg0gRgvgcQiXhiA9g8QAfgeADgoQAhggAFgoIAAhJQABgBAIhMQC1iDFUgwQABBFAIAZIi3DjQgwA0gXBDQgiBiB7AGIAGAPIgQAgIAKALIBVAQIAHAKIgLAgQgeAKghAHQhKAQhCAAQgpAAgpgHg");
	this.shape_70.setTransform(-24.5,-106.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFC488").s().p("AgPD8IgGgLIhWgPIgKgLIARggIgHgQQh6gFAihiQAWhBAwg2IC1jkQgBAvABAQQASCqAxAhQBFAsALA4Qg8CPioA5g");
	this.shape_71.setTransform(1.4,-103.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AoHyrQAcgjApAJQgFAyA9A8QA+A8CiAFQBCACA6gMIAKgCQBOgSBAgrQAjgYATgXIAAAAQALgOAGgNQABgDABgCQAAgCABgBQABgGABgFQABgBAAgBQAAgFgCgPQAAgBAAgBIghhRQAdgMAxAtQAaAiABAxQAAAEAAADQAAADAAACQgCAbgIAeIAAABQgBAAAAABQgKAYgWAVQhHBJhkAhQgqAPgxAGQhLAJhHgFQgKgBgMgBQhFgIhFgYQitg6AMiVIhGAZQisBOgpAnADi0EQCzANCoA5QADABADABQAGACAFACQARAGARAGAJ7p/QAAAAAAAAQAJgNADgOQABgBAAgBQAAgCAAgDQABgJAEgIAJ7p/IgBACIAJgQQAAAKgBAKQABABgBABQAAAIAAAJQAAABAAABQgCAzgCAxQAAATgBASQgECkAACDQABD4AVB+QAMBKANBPQAZCZAeCqQABAJACAJAJ7p/IAAAAQgDAEgDAEAJ7p/IADgcIANhfAJwysQAwATAvAWALeKfIACAKIACAMIAHAkIAJArIABACIALA6IgCgHQgBgJgCgJQAAgBgBgBQgCgKgCgKALnLMIgFgcIAAAAIgEgRIAAAAIgCgKQgIgkAKA1IAWBrAMBNFIgJgoIgCgOQgEgPgCgNQgBgCAAgCQgDgOgDgMQgBgEgBgFALyMEIAAgBQABAHABAHALpLZQgBgGgBgHAL+NAIABADIAAABIACALAGSUXQDEgkA4gUQAFgCAEgCQATgHASgJQBbgjAKhKQAHgxgQhqQgHgwgNg8QAAgCAAgCIAAgBQgBgFgCgGIAAgBIgOhAAMCNUIgBgFAMCNTIgBgEArzrIIAWByIBKHMQgCB7gFB+QgECAAMG8QABAggrDcQgsDcA+BJQA+BJCFgMQAUACAUACQISAxE+gnQABAAAAAAQAAAAgBAAQADAAACAAQgCAAgCAA");
	this.shape_72.setTransform(-4.9,20.5);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("Aj1kgQADALgBALAD2EfQgBABgBABQgEAAgOgH");
	this.shape_73.setTransform(37.9,-74.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#D2D202").s().p("AAAAAIABAAIgBAAg");
	this.shape_74.setTransform(44.6,131.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#BFD8E1").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAg");
	this.shape_75.setTransform(59.3,-41);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#80AFC4").s().p("ABCL1IACAAIAAAEIgCABgAhAr5IAJACQgDANgJANIAAAAg");
	this.shape_76.setTransform(65.5,29.8);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFF00").s().p("Ai4PZIABAAIgBAAgAC2IQIABAFIAAAAgAC0IFIgBgEIgLg5IAOBAIABABIACALIAAAAIgCAAIAAAAgAC2IIIAAgBIABACgACoHIIgBgCIgJgrIgCgNIACANIgHglIgBgFIgBgHIgCgKIACAKQgBgDgBgCQAAgCAAAAQAAgBAAABQAAABABADQgLg1AIAkIACAKIAAAAIAEARIAAABIAFAcIgFgcIAAgBIgDgRIg3lEIgZiWQgVh+gBj7QAAiCAEikIABglIAEhkIAAgCIAHgNIgEByIgCAlQgFCkAACDQABEPAVCEIAVCBIA5FRIAFAaIACAKIAEASIAHAjIABAEIAEAPIAIAoIAAACgACeGWIgCgIIACAIgACXFxIAAAAgACXFxgACTFgIAAAAIABAAIADARgAA4u4IAAgTIgJAQIABgCIAAAAIAAAAQAJgOADgNIAHACIgCAHIAAAFIgCAOIABgNIgEAPIgEACIAAACIAAgCgABDvWQAOAHAEAAIgTAPQACgLgBgLg");
	this.shape_77.setTransform(53.8,52.3);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#002B2B").s().p("AAAAAIAAAAIAAAAg");
	this.shape_78.setTransform(19.4,-92.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#017676").s().p("AAAAAIAAAAIAAAAg");
	this.shape_79.setTransform(11.3,-96.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#45A2FE").s().p("Am3T7IgpgEQiFAMg9hJQg+hJArjcQAsjcgBggQgNm8AFiAQAFh+ACh7IhLnMIgWhyQhdjoAuhtQAqgnCrhOIBHgZQgMCVCtA6QBEAYBGAIIAWACQBHAFBKgJQAwgGAsgPQBjghBIhJQAWgVAKgYIAAAAIAAgBIAAgBQAJgeABgbIABgFIAAgHQgBgxgagiQCzAOCoA4IAGACIALAEIAiAMIAAAAQAwATAvAWIARApQADACALAVQAJASAEAKIABAEIAAAAQAIAVAHAUIADAKIABAFQAFACgDAGIABAGIABAAIAEAVQAFAhAAAeIgCAZQgCAVgEATQgYBjhbBTIgCABQgEABgOgIIgGgCIAAgCIABgFQABgIAEgJQgEAJgBAIIgBAFIAAACIgJgBIANhfIgNBfIgEAcIAAAAIgGAIIAGgIIAAACIAJgQIgBAUIAAACIgIAbIAGgIIAAAAIgBACIABgCIABAAIgDBkIgBAlQgFCkABCDQABD4AUB+IAZCZIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIABACIADASIACAHIAAADIAAABIACALIABAFIAAAAIABABIAAACIACAAQAMA8AIAwQAQBqgHAxQgLBKhbAjIgkAQIgJAEQg4AVjEAjIgBAAQiMASi2AAQjlAAkpgcgAH1RHIACgCIAAAAgAKCqRg");
	this.shape_80.setTransform(-5.6,22.3);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#016564").s().p("AgKAiIAAAAIACABgAAJggIAAgBQADAKgBALIgCgUg");
	this.shape_81.setTransform(12.3,-99.7);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#AB6C43").s().p("AhAC1IgWgCQhGgIhEgXQitg7AMiTQAbgjApAJQgEAzA9A5QA9A8CjAFQBAACA6gMIAKgCQBPgRBAgrQAkgWATgYIABABIAAAAIgBgBQALgOAGgNIABgFIABgDIACgKIABgDQABgLgDgKIghhSQAegLAxAtQAaAiABAwIAAAIIgBAEQgBAbgJAdIAAAAIgEAAIgBABIAFABQgKAXgWAWQhIBJhjAgQgsAPgyAHQguAFgrAAQgbAAgbgCg");
	this.shape_82.setTransform(-18.2,-93.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AiAFUQgMgCgMgCQgOgEgOgEQg1gRgugcQiYhiA9g8QAfgeADgoQAhggAGgoIAAhJQABgBAHhMQC2iDFTgwQACBEAHAaQgBAvABAPQASCqAxAfQBFAuALA4Qg8CPiqA6QgeAKgiAHQh4AbhlgS");
	this.shape_83.setTransform(-17,-106.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#CC9C6C").s().p("Ag2FUIABgEIgCAEIgYgEIgcgIQg0gRgvgcQiXhiA9g8QAfgeADgoQAhggAFgoIAAhJQABgBAIhMQC1iDFUgwQABBEAIAaIi3DjQgwA0gXBDQgiBiB7AGIAGAPIgQAgIAKALIBVAQIAHAKIgLAgQgeAKghAHQhKAQhCAAQgpAAgpgHg");
	this.shape_84.setTransform(-24.4,-106.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFC488").s().p("AgPD8IgGgLIhWgPIgKgLIARggIgHgQQh6gFAihiQAWhBAwg2IC1jkQgBAwABAPQASCqAxAhQBFAsALA4Qg8CPioA5g");
	this.shape_85.setTransform(1.5,-103.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AoHyrQAcgjApAJQgFAyA9A8QA+A8CiAFQBCACA6gMIAKgCQBLgRA+goQACgCADgCQAjgYATgXIAAAAQALgOAGgNQABgDABgCQAAgCABgBQABgGABgFQABgBAAgBQAAgFgCgPQAAgBAAgBIghhRQAdgMAxAtQAaAiABAxQAAAEAAADQAAADAAACQgCAbgIAeIAAABQgBAAAAABQgKAYgWAVQgYAZgcAVQgDACgDACQgzAkg+AUQgqAPgxAGQhLAJhHgFQgKgBgMgBQhFgIhFgYQitg6AMiVIhGAZQisBOgpAnADi0EQCzANCoA5QADABADABQAGACAFACQARAGARAGAJ7p/QAAAAAAAAQAJgNADgOQABgBAAgBQAAgCAAgDQABgJAEgIAJ7p/IgBACIAJgQQAAAKgBAKQABABgBABQAAAIAAAJQgCA0gCAyQAAATgBASQgECkAACDQABD4AVB+QAMBKANBPQAZCZAeCqQABAJACAJIgEgRIACAKIACAMIAHAkIAJArIABACIAOBAIAAABQACAGABAFIAAABQAMA+AIAyQAQBqgHAxQgKBKhbAjQgSAJgTAHQgEACgFACQg4AUjEAkAJ7p/IAAAAQgDAEgDAEAJ7p/IAAAAIAQh7AJwysQAwATAvAWALnLMIgFgcIAAAAAL0MRIgWhrQgKg1AIAkIACAKIAAAAALyMEIAAgBQABAHABAHQACAKACAKQABABAAABQACAJABAJIACAHIABADIAAABIACALAMBNFIgJgoIgCgOQgEgPgCgNQgBgCAAgCQgDgOgDgMQgBgEgBgFALpLZQgBgGgBgHAMCNUIgBgFAMCNTIgBgEArzrIIAWByIBKHMQgCB7gFB+QgECAAMG8QABAggrDcQgsDcA+BJQA+BJCFgMQAUACAUACQISAxE+gnQABAAAAAAQAAAAgBAAQADAAACAAQgCAAgCAAAL+NAIgLg6");
	this.shape_86.setTransform(-4.9,20.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFF00").s().p("Ai3PYIABAAIgBAAgAhZMXIABABIgDABgAC3IPIABAFIAAAAgAC3IHIAAgBIABACgACpHHIgBgCIgJgrIgCgNIACANIgHglIgBgFIgBgHIgCgKIAEARIAAABIAFAcIgFgcIAAgBIgDgRIg3lEIgZiWQgVh+gBj7QAAiCAEikIABglIAEhmIAHgNIgFByIgBAlQgFCkAACDQABEPAVCEIAVCBIA5FRIAFAaIACAKIAEASIAHAjIABAEIAEAPIAIAoIAAACgACfGVIgCgIIACAIgACVFmQgLg1AIAkIACAKIAAAAIACAKQgBgDgBgCQAAgCAAAAQAAgBAAABQAAABABADgABEvXQAOAHAEAAIgTAPQACgLgBgLg");
	this.shape_87.setTransform(53.7,52.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#D2D202").s().p("AAAAAIAAAAIAAAAg");
	this.shape_88.setTransform(58.7,-43.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFCC00").s().p("AA/LnIAAgDIgMg6IAPBAIAAABIACALIAAABIgBAAIgBAAgAAeJDIAAAAIABgBIADASgAg7rWIABgTIgJAQIAAgCIAAAAIABAAQAJgNADgOIAGACIgCAIIAAAEIgCAOIABgNIgEAPIgEACIAAADIAAgDg");
	this.shape_89.setTransform(65.5,29.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#45A2FE").s().p("Am3T7IgpgEQiFAMg9hJQg+hJArjcQAsjcgBggQgNm8AFiAQAFh+ACh7IhLnMIgWhyQhdjoAuhtQAqgnCrhOIBHgZQgMCVCtA6QBEAYBGAIIAWACQBHAFBKgJQAwgGAsgPQA+gUAzgkIAFgEQAcgUAZgaQAWgVAKgYIAAAAIAAgBIAAgBQAJgeABgbIABgFIAAgHQgBgxgagiQCzAOCoA4IAGACIALAEIAiAMIAAAAQAwATAvAWIARApQADACALAVQAJASAEAKIABAEIAAAAQAIAVAHAUIADAKIABAFQAFACgDAGIABAGIABAAIAEAVQAFAhAAAeIgCAZQgCAVgEATQgUBThEBIIgbAbIgCABQgEABgOgIIgGgCIAAgCIABgFQABgIAEgJQgEAJgBAIIgBAFIAAACQgDAOgJANIgBAAIARh7IgRB7IAAAAIAAAAIgGAIIAGgIIAAACIAJgQIgBAUIAAACIgIAbIAGgIIAAgBIgBADIACgEIgDBmIgBAlQgFCkABCDQABD4AUB+IAZCZIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIABACIADASIACAHIAAADIAAABIACALIABAFIAAAAIABABIAAACIAAgEIABAAQANA+AIAyQAQBqgHAxQgLBKhbAjIgkAQIgJAEQg4AVjEAjIgBAAQiMASi2AAQjlAAkpgcgAH1RHIACgCIAAAAgAKCqRg");
	this.shape_90.setTransform(-5.6,22.3);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#AB6C43").s().p("AhAC1IgWgCQhGgIhEgXQitg7AMiTQAbgjApAJQgEAzA9A5QA9A8CjAFQBAACA6gMIAKgCQBMgRA/goIAEgDQAkgWATgYIABABIAAAAIgBgBQALgOAGgNIABgFIABgDIACgKIABgDQABgLgDgKIghhSQAegLAxAtQAaAiABAwIAAAIIgBAEQgBAbgJAdIAAAAIgBACIABAAQgKAXgWAWQgZAZgcAUIgFAEQgzAkg+AUQgsAPgyAHQguAFgrAAQgbAAgbgCg");
	this.shape_91.setTransform(-18.2,-93.3);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("AB9FFQAMgDALgEQAOgGANgFQAzgXAtgjQCTh1g7g3QgegcgDgpQgggbgFgrIAAhMQgBgBgHhNQiwh0lJgMQgBBHgHAaQABAxgBAQQgRCxgwAmQhDA3gLA7QA7CNCkAoQAdAIAhAEQB0AOBigd");
	this.shape_92.setTransform(-18.2,-106);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFC184").s().p("AAAACIAAgDIABADg");
	this.shape_93.setTransform(-5.7,-73.6);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFC488").s().p("AkVBqQAKg6BDg2QAwgoARixQABgQgBgwIDxDTQCMBQAeBSQAdBSkagIIgHARIAQAfIgJANIhRAZIgGALIAKAfQilgog6iOg");
	this.shape_94.setTransform(-27.9,-101.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#CC9C6C").s().p("AihFUQghgEgdgIIgKgfIAGgLIBTgZIAKgNIgQgfIAGgRQEYAIgdhSQgdhRiLhRIjyjTQAHgaABhHQFJAMCwB0QAHBNABABIAABMQAFArAgAbQADApAeAcQA7A3iTB1QgtAjgzAXIgbALIgXAHIgCgEIABAEQhAAUhMAAQgkAAgmgFg");
	this.shape_95.setTransform(-11.1,-106);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ADD1EIgtghIgWgLIAEAdQADALgBALQAAABgBABQAAAFgCAGQgEAQgOASQAAAAgBABIAAAAQgTAXgkAYQg+ArhPASIgKACQgFABgGABQgIABgJACQgPACgRABQgfADghgBQijgFg9g8Qg9g8AEgyIhEAaQgMCVCtA6QBEAYBGAIQALABALABQAGAAAGABQANAAANABQAGAAAFAAIABAAQALAAAKAAQAlgBAlgFQAygGAsgPQBhghBIhJQAPgPAKgQIAAAAQAEgHADgHQAAgBAAAAIAAgBQARgpgQgwgAKxzaIgBAAIm2haIg3gQAJbt5IgCAWIgFBJIAAAGIgBAHIAAABQAAAEAAADQgBAGAAAHQAAABAAABQAAAIAAAJQgCA0gCEHQgBAkABAjIACCRQABAmADAjQADA4AGAuQABAIABAIQAEAcADAcIAAABQAFAnAEAjQAFA1ADAtQAAAFABAFQAZCZAeCqQABAJACAJIAAAAIAFAcQABAEABAFQADAMADAOQAAACAAACQADANAEAPIACAOIAGAZALEKSIgWhrQgLg1AIAkIADAKIAAAAIACAKIACAMIAHAkQgBgHgBgGAKuIgIAEARALDKHIgBgCIgJgrALEKSQgBgFgBgFQAAgCAAgCIAAABALEKSQACAKACAKQAAABABABQABAIACAIALDKHIAJAxIBZG7QgGAoguASIgchbIAABvQizA7imAnQhSAUhOAOQgRADgQADQgcAFgbAEQjRAgi7gEQgjAAgjgCQhogHhhgSQhZgRhUgbIAAqHIghtSALOK3IgLgwArlixIgakKIgPkaIgWhyAryzvIC7g7");
	this.shape_96.setTransform(0,33.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#1C8CFD").s().p("AiLESIAFABIAAAAgACAkSIAMABIgFAFg");
	this.shape_97.setTransform(-37.6,-47.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#6C64B5").s().p("AhOOoQDjiQhqhcQhohdg/iKQhAiJAnnkIAnnmIAGgyQARigBkiAQBmiBASgKIgGBJQgFAFAEABIABAAIgBAHIAAABIAAAHIAAANIAAACIgBARQgCA0gCEHIAABHIACCRIAEBJQAEA5AFAtIACAQIAIA6IAAABIAIBKQAGA1ACAtIABAKIA3FBIgBABIgCgKQgIgkALA1IAWBrIAEAUIAAACIADAQIAAAAIBZG7QgGAoguASIgchbIAABvQizA7ikAnQhRAUhPAOIghAGIg3AJQAcglDliPg");
	this.shape_98.setTransform(46.8,58);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#002B2B").s().p("AAAAAIAAAAIAAAAgAAAAAIAAAAIAAAAIAAAAgAAAAAg");
	this.shape_99.setTransform(19.4,-92.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFF00").s().p("ArSS0QBaAZBTATQhagRhTgbgAK0ISIALAwIgCAAgAK/JCIgLgwIgBgCIgJgrIgCgNIACAJIgCgJIACANIgHgkIgBgGIgBgGIgCgKIAEARIAAAAIAFAcIgFgcIAAAAIgEgRIACAKQgBgEgBgCQAAgCAAAAQgBgBABACQAAABAAACQgLg0AJAkIACAKIABgBIADASIgDgSIg3lDIgBgLIACAPIA5FRIAFAaIACALIAEASIAHAiIABAEIADAQIAGAZgAKfGrIAAAAgAK0ISgALQzfQAGACgEAGg");
	this.shape_100.setTransform(1.4,44.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#D2D202").s().p("Ag1CnIACAAIgCAHgAA2itIAAAAIgCAAIACAAg");
	this.shape_101.setTransform(65,-62.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#003333").s().p("AAAAAIAAAAIAAAAg");
	this.shape_102.setTransform(68.9,-91.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#7D77B5").s().p("AjWVaIhHgCQhogHhggSQhTgThagZIAAqHIgitSIAAgBIgZkKIgPkaIgWhyQhol/CagpIC6g7QgMCVCtA6QBFAYBFAIIAWACIAIAGIAEgFIAaABIAMAAIAAAAIAVAAQAlgBAmgFQAxgGAqgPQBkghBHhJQAQgPAJgQIAAAAIAHgOIAAAAIABgBIAAgBQARgpgRgwIA3AQIG3BaIAAABQACACAMAVQALAXADAJQAIAVAGAUIAEAPIACAIQAMAvgBArQgBAhgHAgQgYBjhCAnQgsAZgKAKIAFhJIACgWIgCAWQgRAKhmCBQhmCAgSCgIgGAyIgmHkQgnHmA/CJQBACKBqBdQBqBcjlCQQjlCPgcAlQi5AdipAAIgpgBgAnNooIAAAAIgFgBgALvx/IACgBIAAAAIgCABg");
	this.shape_103.setTransform(-5,35.4);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#AB6C43").s().p("AgOCcIgLAAIgagCIgMAAIgWgCQhGgIhEgYQitg6AMiTIBEgaQgEAyA9A8QA9A6CjAFQAhAAAdgCIAggEIARgCIALgCIAKgCQBPgSBAgpQAkgYATgXIABAAIgBgBIABgBQANgRAFgQIACgLIABgCIgCgUIAAgCQADAIAAAIIgBAGIABgGQAAgIgDgIIgEgdIAWALIAtAhQAQAwgRApIAAABIgBABIABAAIgHAOIAAAAQgKAOgPAPQhIBJhjAhQgsAOgyAHQglAFglABIgTAAg");
	this.shape_104.setTransform(-18.3,-90.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("ACBFUQAMgCAMgCQAOgEAOgEQA1gRAugcQCYhig9g8QgfgegDgoQghgggGgoQhdhtgWivABoktQh2gPjZgeQgCBFgHAZQABAvgBAPQgSCqgxAfQhFAugLA4QA8CPCqA6QAeAKAiAHQB4AbBlgS");
	this.shape_105.setTransform(-17,-104.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFC184").s().p("AAAACIAAgDIAAADg");
	this.shape_106.setTransform(-4.1,-70.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFC488").s().p("AjKBTQALg4BFgsQAxghASiqQABgQgBguIC1DjQAwA1AWBBQAiBjh6AGIgHAPIARAgIgKALIhWAPIgGALIAKAgQiog6g8iPg");
	this.shape_107.setTransform(-35.5,-101.5);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFBA75").s().p("AinFLQghgHgegKIgLggIAHgKIBVgQIAKgLIgQggIAGgPQB7gGgihiQgXhDgwg0Ii3jjQAIgZABhFQDaAeB2APIBPAAQAVCvBeBtQAFAoAhAgQADAoAfAeQA9A8iXBiQgvAcg0ARIgcAIIgYAEIgCgEIABAEQgpAHgpAAQhCAAhKgQg");
	this.shape_108.setTransform(-9.7,-104.5);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("Aot0qIBFgaQgFAyA9A8QA+A8CiAFQAhABAfgDQARgBAQgCQAIgCAIgBQAGgBAFgBIAKgCQBOgSBAgrQAjgYATgXIAAAAQAPgSAFgRQABgGABgFQABgBAAgBQABgLgDgLIgFgdIAXALIAsAhQARAwgRApIAAABQgBAAAAABQgKAYgWAVQhHBJhkAhQgqAPgxAGQgmAFglABQgKAAgLAAIAAAAQgGAAgGAAQgNgBgNAAQgGgBgGAAQgKgBgMgBQhFgIhFgYQitg6AMiVgAJlt5IgFBHIgCAYIAAAGIgBAHIAAABQAAAEAAADQAAAGgBAHQABABgBABQAAAIAAAJQgCA0gCEHQAAAkAAAjIACCRQACAmACAjQAEA4AFAuQABAIABAIQAEAcADAcIAAABQAFAnAEAjQAFA1ADAtQAAAFABAFQAZCZAeCqQABAJACAJIAAAAIAFAcQABAEABAFQADAMADAOQAAACABACQACANAEAPIACAOIAGAZADN1EQFLApBOA3AK4IgIAEARAK4IgIAAAAIgCgKQgIgkAKA1IAXBrQABAKACAKQABABAAABIACAIQAAAEABAEALDJaIgHgkIgCgMIgCgKALMKFIAAgBQAAACAAACQACAFABAFALMKFIgJgrALNKHIgBgCALBJNQABAGABAHArbiwIAiNSIAAKHQBTAbBaARQBgASBoAHQAjACAkAAQDTAFDvgqQARgDAQgDQBAgMBCgPQAPgDAPgEQCmgnDchUIgRhxIAkBfQARgGADgdIhZm7ALNKHIAJAxALYK3IgLgwArbixIgZkKIgPkaIgWhyAsuzOIEBhc");
	this.shape_109.setTransform(-1.1,33.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#1C8CFD").s().p("AAGU0QhQgThbgZIAAqHIghtSIAAgBIgakKIgPkaIgWhyQhOldA6gqIEBhcQgMCVCrA6QBEAYBGAIIAWACIAMAAQgeAfhaCcQhUCThfEbIgCAOQAAALgGA2QgJA2AAAKQAAALgIA3QgJA3AAALQAAD+AzEAQANBAAWBlQARBOAeAeQAeAeAcBFQAcBEgJBjQgIBkAMCDQANCEAGCmQhogGhhgSgABJrSQgKAZAAALIgSA2QgSA2AAAHIgBAGQAyifgCAAIgBACg");
	this.shape_110.setTransform(-54.3,36.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFF00").s().p("ArIIVQBaAZBTATQhagQhTgcgAK+iLIALAwIgCABgALJhbIgLgwIgBgCIgIgrIgDgNIACAJIAEASIAHAiIABAEIAEAQIAFAZgALJhbgAKtjcIgBgGIgBgGIgCgKIAEARIAAAAIAFAcIADANgAKyjFIgFgcIAAAAIgDgSIg3lDIgBgKIADAOIA5FRIAEAaIACALIgCgJgAKtjhgAKpjyIAAAAIABgBIADASgAKtjhIAAAAgAKqjrQgLg1AIAkIACAKIAAAAIACAKQgBgEAAgCQgBgCAAAAQAAgBAAACQAAABABADgAKpjyg");
	this.shape_111.setTransform(0.4,112);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#45A2FE").s().p("Al9VaIhGgCQgGingNiDQgNiEAJhjQAJhkgchEQgchFgegeQgfgegQhOQgXhlgNhAQg0kAAAj+QAAgLAJg3QAIg3AAgLQAAgKAIg2QAJg2AAgLIACgOQBfkbBUiTQBaicAegeIAZABIAMAAIAAAAIAWAAQAkgBAmgFQAxgGAsgPQBkghBFhJQAXgVAKgYIAAAAIAAgBIAAgBQARgpgQgwQFKApBOA3IgNDcQAMBBgEA6QgEA7ADAgIgCAYQgFAFAEABIABAAIgBAHIAAABIAAAHIAAANIAAACIgBARQgCA0gCEHIABBHIABCRIAEBJQAEA4AFAuIACAQIAIA4IAAABIAIBKQAGA1ACAtIABAKIA3FDIgBABIgCgKQgIgkALA1IAWBrIAEAUIAAACIACAIIABAIIABAAIBYG7QgDAdgRAGIgkhfIARBxQjcBUimAnIgeAHQhCAPhAAMIggAGQjYAmjBAAIgqgBgAp3owQgBgHATg2IASg2QAAgLAKgZQAIgTg3CxIABgHg");
	this.shape_112.setTransform(11.7,35.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#D2D202").s().p("Ag1CnIACAAIgCAHgAA1itIABAAIAAAAIgBAAIgBAAIABAAg");
	this.shape_113.setTransform(65,-62.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("Ah/FUQBlASB4gbQAigHAegKQCqg6A8iPQgLg4hFguQgxgfgSiqQgBgPABgvQgHgZgChFQlTAwi2CDQgHBMgBABIAABJQgGAoghAgQgDAogfAeQg9A8CYBiQAuAcA1ARQAOAEAOAEQAMACAMAC");
	this.shape_114.setTransform(-17.1,-106.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_71},{t:this.shape_70},{t:this.shape_69,p:{x:-30}},{t:this.shape_68},{t:this.shape_67,p:{x:-30,y:-72.4}},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]}).to({state:[{t:this.shape_85},{t:this.shape_84},{t:this.shape_69,p:{x:-29.9}},{t:this.shape_83},{t:this.shape_67,p:{x:-29.9,y:-72.4}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72}]},1).to({state:[{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_67,p:{x:-5.6,y:-73.4}},{t:this.shape_91},{t:this.shape_81},{t:this.shape_90},{t:this.shape_79},{t:this.shape_60},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_73},{t:this.shape_86}]},1).to({state:[{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_67,p:{x:-4.1,y:-70.4}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_61},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96}]},1).to({state:[{t:this.shape_70},{t:this.shape_71},{t:this.shape_69,p:{x:-30}},{t:this.shape_114},{t:this.shape_67,p:{x:-30,y:-72.4}},{t:this.shape_66},{t:this.shape_113},{t:this.shape_112},{t:this.shape_61},{t:this.shape_60},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85,-142.2,166.5,315.7);


(lib.gr_cH_Arm_01_02_new_031copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AGmnXQA4HXkfI1IgDBLQgzAGg1gCQgMgBgMgBQi7gNjThvQg0gbgpgWQAcgmASgaQAMgRAIgMQAWggAUgoQCxnKAXikQAbjCBshUQAUgUCKgbQABAAACgB");
	this.shape.setTransform(5.7,-21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AB6C43").s().p("ADNB3IgZgCQi7gNjThtIhdgxIAuhAIBEAkQDSBsC9AOIAYABQArACArgEIgEBMQglAEgnAAIgbAAg");
	this.shape_1.setTransform(-6.3,30.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C8CFD").s().p("ABTJeIgYgCQi8gNjThvIhEgkIAUgdQAWgfAUgpQCxnKAXijQAbjDBuhUQASgTCKgcIADAAQBXgHBHAnQBHAnAUBlIAAAAQA4HXkfI1QgcACgdAAIgcAAg");
	this.shape_2.setTransform(8,-25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AkYFUQAFBhABANQACAOANAPQANAPAZAOQAYAMAbAGQAcAGAdAAQAcAAAcgEQANgCANgFQAggFAkgfIANgUQBsnCCBmwImghyIh7IyQgwCtAUCIg");
	this.shape_3.setTransform(1.2,33.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC488").s().p("AiqINQgbgFgYgNQgZgNgNgPQgNgPgCgNIgGhwQgUiHAwitIB7oyIGgByQiBGxhsHBIgNAUQgkAfggAFQgNAFgNACQgcAEgcAAQgdAAgcgHg");
	this.shape_4.setTransform(1.2,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-87.3,88.4,175.1);


(lib.gr_cH_Arm_01_02_new_031copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AGmnXQA4HXkfI1IgDBLQgzAGg1gCQgMgBgMgBQi7gNjThvQg0gbgpgWQAcgmASgaQAMgRAIgMQAWggAUgoQCxnKAXikQAbjCBshUQAUgUCKgbQABAAACgBAEcgaIAAAAIAEgCAErglIgCAH");
	this.shape.setTransform(5.7,-21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AB6C43").s().p("ADNB3IgZgCQi7gNjThtIhdgxIAuhAIBEAkQDSBsC9AOIAYABQArACArgEIgEBMQglAEgnAAIgbAAg");
	this.shape_1.setTransform(-6.3,30.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C64B5").s().p("ABTJeIgYgCQi8gNjThvIhEgkIAUgdQAWgfAUgpQCxnKAXijQAbjDBuhUQASgTCKgcIADAAQBXgHBHAnQBHAnAUBlIAAAAQA4HXkfI1QgcACgdAAIgcAAgAEFALIAAAAIAEgBIAJgDIACgGQgOAFgBAFg");
	this.shape_2.setTransform(8,-25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAyHRQBsnCCBmwImghyIh7IyQgwCtAUCIQAFBhABANQACAOANAPQANAPAZAOQAYAMAbAGQAcAGAdAAQAcAAAcgEQANgCANgFQAggFAkgfg");
	this.shape_3.setTransform(1.2,33.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC488").s().p("AiqINQgbgFgYgNQgZgNgNgPQgNgPgCgNIgGhwQgUiHAwitIB7oyIGgByQiBGxhsHBIgNAUQgkAfggAFQgNAFgNACQgcAEgcAAQgdAAgcgHg");
	this.shape_4.setTransform(1.2,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-87.3,88.4,175.1);


(lib.gr_cH_Arm_01_02_new_031copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0.2)").ss(1,1,1).p("AGmnXQA4HXkfI1IgDBLQgzAGg1gCQgMgBgMgBQi7gNjThvQg0gbgpgWQAcgmASgaQAMgRAIgMQAWggAUgoQCxnKAXikQAbjCBshUQAUgUCKgbQABAAACgB");
	this.shape.setTransform(5.7,-21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AB6C43").s().p("ADNB3IgZgCQi7gNjThtIhdgxIAuhAIBEAkQDSBsC9AOIAYABQArACArgEIgEBMQglAEgnAAIgbAAg");
	this.shape_1.setTransform(-6.3,30.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1C8CFD").s().p("ABTJeIgYgCQi8gNjThvIhEgkIAUgdQAWgfAUgpQCxnKAXijQAbjDBuhUQASgTCKgcIADAAQBXgHBHAnQBHAnAUBlIAAAAQA4HXkfI1QgcACgdAAIgcAAgAEFALIAAAAIAAAAg");
	this.shape_2.setTransform(8,-25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAyHRQBsnCCBmwImghyIh7IyQgwCtAUCIQAFBhABANQACAOANAPQANAPAZAOQAYAMAbAGQAcAGAdAAQAcAAAcgEQANgCANgFQAggFAkgfg");
	this.shape_3.setTransform(1.2,33.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC488").s().p("AiqINQgbgFgYgNQgZgNgNgPQgNgPgCgNIgGhwQgUiHAwitIB7oyIGgByQiBGxhsHBIgNAUQgkAfggAFQgNAFgNACQgcAEgcAAQgdAAgcgHg");
	this.shape_4.setTransform(1.2,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-87.3,88.4,175.1);


(lib.gr_cH_Arm_01_02_new_031copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0.2)").ss(1,1,1).p("AGmnXQA4HXkfI1IgDBLQgzAGg1gCQgMgBgMgBQi7gNjThvQg0gbgpgWQAcgmASgaQAMgRAIgMQAWggAUgoQCxnKAXikQAbjCBshUQAUgUCKgbQABAAACgBAEcgaIAAAAIAEgC");
	this.shape.setTransform(5.7,-21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AB6C43").s().p("ADNB3IgZgCQi7gNjThtIhdgxIAuhAIBEAkQDSBsC9AOIAYABQArACArgEIgEBMQglAEgnAAIgbAAg");
	this.shape_1.setTransform(-6.3,30.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6C64B5").s().p("ABTJeIgYgCQi8gNjThvIhEgkIAUgdQAWgfAUgpQCxnKAXijQAbjDBuhUQASgTCKgcIADAAQBXgHBHAnQBHAnAUBlIAAAAQA4HXkfI1QgcACgdAAIgcAAgAEFALIAAAAIAEgBIAJgDIACgGQgOAFgBAFg");
	this.shape_2.setTransform(8,-25.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAyHRQBsnCCBmwImghyIh7IyQgwCtAUCIQAFBhABANQACAOANAPQANAPAZAOQAYAMAbAGQAcAGAdAAQAcAAAcgEQANgCANgFQAggFAkgfg");
	this.shape_3.setTransform(1.2,33.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC488").s().p("AiqINQgbgFgYgNQgZgNgNgPQgNgPgCgNIgGhwQgUiHAwitIB7oyIGgByQiBGxhsHBIgNAUQgkAfggAFQgNAFgNACQgcAEgcAAQgdAAgcgHg");
	this.shape_4.setTransform(1.2,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-87.3,88.4,175.1);


(lib.gr_cH_Arm_01_02_new_031_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AGmnXQA4HXkfI1IgDBLQgzAGg1gCQgMgBgMgBQi7gNjThvQg0gbgpgWQAcgmASgaQAMgRAIgMQAWggAUgoQCxnKAXikQAbjCBshUQAUgUCKgbQABAAACgBAEcgaIAAAAIAEgCAErglIgCAH");
	this.shape_5.setTransform(5.7,-21.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#AB6C43").s().p("ADNB3IgZgCQi7gNjThtIhdgxIAuhAIBEAkQDSBsC9AOIAYABQArACArgEIgEBMQglAEgnAAIgbAAg");
	this.shape_6.setTransform(-6.3,30.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#6C64B5").s().p("ABTJeIgYgCQi8gNjThvIhEgkIAUgdQAWgfAUgpQCxnKAXijQAbjDBuhUQASgTCKgcIADAAQBXgHBHAnQBHAnAUBlIAAAAQA4HXkfI1QgcACgdAAIgcAAgAEFALIAAAAIAEgBIAJgDIACgGQgOAFgBAFg");
	this.shape_7.setTransform(8,-25.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAyHRQBsnCCBmwImghyIh7IyQgwCtAUCIQAFBhABANQACAOANAPQANAPAZAOQAYAMAbAGQAcAGAdAAQAcAAAcgEQANgCANgFQAggFAkgfg");
	this.shape_8.setTransform(1.2,33.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC488").s().p("AiqINQgbgFgYgNQgZgNgNgPQgNgPgCgNIgGhwQgUiHAwitIB7oyIGgByQiBGxhsHBIgNAUQgkAfggAFQgNAFgNACQgcAEgcAAQgdAAgcgHg");
	this.shape_9.setTransform(1.2,33.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]}).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-38.5,-87.3,88.4,175.1);


(lib.gr_boy03_rightleg_new_021copy4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ACSkfIAqAFIgQDJIgaAVgACSg8IhBGHAicFLIgcm7QgIhWAOhHQAHggALgdIEyAr");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A475A").s().p("AicFLIgcm7QgIhWAOhHQAHggALgdIEyArIAADjIAAjjIAqAFIgQDJIgaAVIhBGHg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.8,-34.1,39.7,68.3);


(lib.gr_boy03_rightleg_new_021copy3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ACSg8IAAjjIAqAFIgQDJIgaAVIhBGHAicFLIgcm7QgIhWAOhHQAHggALgdIEyAr");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#45A2FE").s().p("AicFLIgcm7QgIhWAOhHQAHggALgdIEyArIAADjIAAjjIAqAFIgQDJIgaAVIhBGHgACSkfg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.8,-34.1,39.7,68.3);


(lib.gr_boy03_rightleg_new_021copy2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("ACSkfIAqAFIgQDJIgaAVgACSg8IhBGHAicFLIgcm7QgIhWAOhHQAHggALgdIEyAr");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A475A").s().p("AicFLIgcm7QgIhWAOhHQAHggALgdIEyArIAADjIAAjjIAqAFIgQDJIgaAVIhBGHg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.8,-34.1,39.7,68.3);


(lib.gr_boy03_rightleg_new_021copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0.2)").ss(0.4,1,1).p("ACSkfIAqAFIgQDJIgaAVgACSg8IhBGHAicFLIgcm7QgIhWAOhHQAHggALgdIEyAr");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#45A2FE").s().p("AicFLIgcm7QgIhWAOhHQAHggALgdIEyArIAADjIAAjjIAqAFIgQDJIgaAVIhBGHg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.8,-34.1,39.7,68.3);


(lib.gr_boy03_rightleg_new_021_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ACSkfIAqAFIgQDJIgaAVgACSg8IhBGHAicFLIgcm7QgIhWAOhHQAHggALgdIEyAr");

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#45A2FE").s().p("AicFLIgcm7QgIhWAOhHQAHggALgdIEyArIAADjIAAjjIAqAFIgQDJIgaAVIhBGHg");

	this.addChild(this.shape_3,this.shape_2);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-19.8,-34.1,39.7,68.3);


(lib.gr_boy_leftleg021copy4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ABshvIAAAEIAVCxIg3AqQhmgDg7gRQgYgHgRgKIAZiiIgBgY");
	this.shape.setTransform(-10.7,-25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A475A").s().p("AhaBVIAZiiIgCgYICeAAIgBA0QAAA2gJAZQgUA/hvAJQgYgHgQgKg");
	this.shape_1.setTransform(-14.5,-26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#47566B").s().p("AhsBbQBvgIAUg/QAJgYAAg4IABgzIA3AAIAAAEIAUCxIg3AqQhlgDg8gSg");
	this.shape_2.setTransform(-8.7,-25.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AgVhBQABgCAAgCQADgDACgCQAKgIAKAGQAAAAACABQARAOAGAKIAAAMQACAMAEAEQAYANACAAIABgBQACgCACAAQADAAACACQACABABADQAAADgCADQgDACgHAAQgLgBgWgKQgBgBAAAAQgHgFgGgOQgNAAgUgEIAKgMIAAgBQARAEAGAAIABAAIgLgOQgDgCgDgEQgDgBgDACQgCABgBADQgBABAAABQgDgDgDgDQgDgCgCgBQgCACgBADIAAAAQgBABgCAAQgCAAgDgBQAAAAgBAAQgDgBgCAAQgTgDgIAGQgQAJANAeQAAAAABABQAKAOAJAAQAEAAADgBQABATAMAbQAAABAAAAQAGAIgBAFQgDAGgJAFQgDABgBACQgBADABADQACADACABQACABADgBQARgIADgLQAEgLgKgPQgPggAFgTQAFgHAEgKQgBgQgUgLAgHgvQAAgFgDgEAgdgqQAAgBAAgCQgVgFgHAEQgFAEAGAQQAFAGAEABQAEAAAFgFIABgBQAEgGAEgLg");
	this.shape_3.setTransform(2.1,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#53412F").s().p("AgjBPIgEgEQgBgDABgDQAAAAABgBQAAAAABgBQAAAAABgBQAAAAABAAQAJgFADgGQABgFgGgIIAAgBQgMgbgBgTIgHABQgJAAgKgOIgBgBQgNgeAQgJQAIgGATADQAUALABAQQgEAKgFAHQgFATAPAgQAKAPgEALQgDALgRAIIgDAAIgCAAgAg5guQgFAEAGAQQAFAGAEABQAEAAAFgFIABgBQAEgGAEgLIAAgDQgLgDgIAAQgGAAgDACgAA/ABQgLgBgWgKIgBgBQgHgFgGgOQgNAAgUgEIAKgMIAAgBIAXAEIABAAIgLgOIgGgGQgDgBgDACIgDAEIgBACQADAEAAAFIAAABIgKAMQgBgQgUgLIAFABIABAAIAFABIADgBIAAAAIADgFIAFADIAGAGIgGgGIgFgDIABgEIAFgFQAKgIAKAGIACABQARAOAGAKIAAAMQACAMAEAEQAYANACAAIABgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQADAAACACQACABABADQAAADgCADQgCACgHAAIgBAAg");
	this.shape_4.setTransform(2.1,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAFhhQgCgCgCgBQAAgBgDgFQgbgPgfA0QAFAFAFAEQALAIAKAHQAGAEAFAEAA8g1QABABABABQAIAFAIAFQBVAJAeBAQABACABADAArhBQgEgDgEgDQgCgCgDgCQgDgDgHgGQgCgCgHgFQgDgDgDgDAArhBQABABABAAQAAABABAAIAFADQAEAEAFADQgbgRgWAxQgGgCgFgDAALgVQAFADAFABQArAQAOgoAAehLQgbgLgVAxQAKAGAIAFQAVg1AWAOAjHgSIAAANQAdAQBFAOQABAAABAAQDuBpA9hNQgCgJgDgHIAVAWIgBA4QhCBNkAhpQgEgBgFAAQhFgNgegSIAAhFIAQgEIAIhOIAOgOQAVARAeAFQAVAEAZgCQAKAJAKAIAhQhWIAAgLQARg4AZAHQAFABAFAEQAAABABABQAHARASAQAAUhUQgZgOgYA1Agyg8QAdgwAaAL");
	this.shape_5.setTransform(2.1,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#80664D").s().p("AiZAAIgJAAQgGgJAAgJQAAgKALgIQANgJAEgJIgGgFIABgBQDuBnA9hLQgCgJgEgHIAVAWIAAA2QgcAhg+AAQhTAAiVg9g");
	this.shape_6.setTransform(6.7,30.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AB6C43").s().p("AiIAbIgCgBIgNgNQgLgNAAgSQAAgGADgQQAEgQAAgLIgHgTQAVADAZgCIATARIALAJIAUAQIALAHIATALIAMAGIAKAEQApAPAOgoQBVAJAeBAIACAFQADAIACAIQgaAhg6AAQhPAAiIg8g");
	this.shape_7.setTransform(5.8,22.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#714D2D").s().p("AiKA2IAAgMIAIhNIAOgOQAWARAdAGIAHATQAAAJgDAQQgDAQgBAGQAAATAMAOIANANQhFgOgdgSgABSArIgKgEQAWgvAaAOIADACIAQAKQgKAdgaAAQgJAAgMgEgAApAWQAWguAcALIAEAEIAJAGQgWgPgXAzIgSgLgAAKAAQAcguAcAKIAGAHIAJAGQgbgOgYA0IgUgPgAgTgZIAAgKQARg4AXAHQAFABAEADIABACQAIARASARQgbgPgeAzIgTgRg");
	this.shape_8.setTransform(-4,16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#53412F").s().p("AiJBDIAAhFIAQgEIAAALQAdASBFAOIACAAIgBABIAGAFQgEAJgNAJQgLAIAAAKQAAAJAGAKQhFgNgegSgABMgOQAXg1AWAOIABABIACABIAEADIAJAHQgagRgWAxIgNgFgAAvghQAYg1AbAOIAKAJQgcgLgWAxIgLgIgAAPg5QAgg0AbAPIAFAGIAEADQgcgLgcAwIgMgJg");
	this.shape_9.setTransform(-5.7,21);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AgLBCQAcAFAfgUQAYgcgTgbIAJg+Ig3AAIhEAAIAKA9QgTAXAYAhQARAMASADg");
	this.shape_10.setTransform(-9.4,7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3F8FA").s().p("AgkBBIAAgMQAAgTALgfQALgcAAgRIgCgYIA1AAIgJA+QATAbgYAbQgXAQgYAAIgMgBg");
	this.shape_11.setTransform(-6.9,7.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DBE8F0").s().p("AgUAzQgXghATgWIgKg9IBDAAIADAXQAAASgMAcQgKAegBATIAAANQgPgDgSgMg");
	this.shape_12.setTransform(-12.1,7.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AgdDaQgWhdgXi1QgCgNgBgNQgEgbgDgeIAAgDIgGhLABbjZQgQEmgYCN");
	this.shape_13.setTransform(-10.2,-8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFC488").s().p("AATDaQACivgUh8QgKhGhLAJIgFhLIC0AAQgQEmgZCNg");
	this.shape_14.setTransform(-10.2,-8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC9C6C").s().p("AACC1QgUhdgXi1IgDgaIgHg5IAAgDQBJgJAMBGQAUB8gCCvg");
	this.shape_15.setTransform(-13.5,-4.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.302)").s().p("AAAAAIABAAIAAAAIgBAAIAAAAg");
	this.shape_16.setTransform(1.9,12.7);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.6,-38,49.3,76.1);


(lib.gr_boy_leftleg021copy3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ABshvIAAAEIAVCxIg3AqQhmgDg7gRQgYgHgRgKIAZiiIgBgY");
	this.shape.setTransform(-10.7,-25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#45A2FE").s().p("AhXBbQgYgHgRgJIAZijIgBgXIDUAAIAAAEIAVCxIg3AqQhmgDg7gSg");
	this.shape_1.setTransform(-10.7,-25.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(66,66,66,0.2)").ss(1,1,1).p("AgLBCQAcAFAfgUQAYgcgTgbIAJg+Ig3AAIhEAAIAKA9QgTAXAYAhQARAMASADg");
	this.shape_2.setTransform(-9.4,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3F8FA").s().p("AgkBBIAAgMQAAgTALgfQALgcAAgRIgCgYIA1AAIgJA+QATAbgYAbQgXAQgYAAIgMgBg");
	this.shape_3.setTransform(-6.9,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DBE8F0").s().p("AgUAzQgXghATgWIgKg9IBDAAIADAXQAAASgMAcQgKAegBATIAAANQgPgDgSgMg");
	this.shape_4.setTransform(-12.1,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(66,66,66,0.2)").ss(1,1,1).p("AgdDaQgWhdgXi1QgCgNgBgNQgEgbgDgeIAAgDIgGhLABbjZQgQEmgYCN");
	this.shape_5.setTransform(-10.2,-8.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC488").s().p("AATDaQACivgUh8QgKhGhLAJIgFhLIC0AAQgQEmgZCNg");
	this.shape_6.setTransform(-10.2,-8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC9C6C").s().p("AACC1QgUhdgXi1IgDgaIgHg5IAAgDQBJgJAMBGQAUB8gCCvg");
	this.shape_7.setTransform(-13.5,-4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.302)").s().p("AAAAAIABAAIAAAAIgBAAIAAAAg");
	this.shape_8.setTransform(1.9,12.7);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.6,-38,27.9,53.2);


(lib.gr_boy_leftleg021copy2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("ABshvIAAAEIAVCxIg3AqQhmgDg7gRQgYgHgRgKIAZiiIgBgY");
	this.shape.setTransform(-10.7,-25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A475A").s().p("AhaBVIAZiiIgCgYICeAAIgBA0QAAA2gJAZQgUA/hvAJQgYgHgQgKg");
	this.shape_1.setTransform(-14.5,-26.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#47566B").s().p("AhsBbQBvgIAUg/QAJgYAAg4IABgzIA3AAIAAAEIAUCxIg3AqQhlgDg8gSg");
	this.shape_2.setTransform(-8.7,-25.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(66,66,66,0.2)").ss(1,1,1).p("AgVhBQABgCAAgCQADgDACgCQAKgIAKAGQAAAAACABQARAOAGAKIAAAMQACAMAEAEQAYANACAAIABgBQACgCACAAQADAAACACQACABABADQAAADgCADQgDACgHAAQgLgBgWgKQgBgBAAAAQgHgFgGgOQgNAAgUgEIAKgMIAAgBQARAEAGAAIABAAIgLgOQgDgCgDgEQgDgBgDACQgCABgBADQgBABAAABQgDgDgDgDQgDgCgCgBQgCACgBADIAAAAQgBABgCAAQgCAAgDgBQAAAAgBAAQgDgBgCAAQgTgDgIAGQgQAJANAeQAAAAABABQAKAOAJAAQAEAAADgBQABATAMAbQAAABAAAAQAGAIgBAFQgDAGgJAFQgDABgBACQgBADABADQACADACABQACABADgBQARgIADgLQAEgLgKgPQgPggAFgTQAFgHAEgKQgBgQgUgLAgHgvQAAgFgDgEAgdgqQAAgBAAgCQgVgFgHAEQgFAEAGAQQAFAGAEABQAEAAAFgFIABgBQAEgGAEgLg");
	this.shape_3.setTransform(2.1,16.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#53412F").s().p("AgjBPIgEgEQgBgDABgDQAAAAABgBQAAAAABgBQAAAAABgBQAAAAABAAQAJgFADgGQABgFgGgIIAAgBQgMgbgBgTIgHABQgJAAgKgOIgBgBQgNgeAQgJQAIgGATADQAUALABAQQgEAKgFAHQgFATAPAgQAKAPgEALQgDALgRAIIgDAAIgCAAgAg5guQgFAEAGAQQAFAGAEABQAEAAAFgFIABgBQAEgGAEgLIAAgDQgLgDgIAAQgGAAgDACgAA/ABQgLgBgWgKIgBgBQgHgFgGgOQgNAAgUgEIAKgMIAAgBIAXAEIABAAIgLgOIgGgGQgDgBgDACIgDAEIgBACQADAEAAAFIAAABIgKAMQgBgQgUgLIAFABIABAAIAFABIADgBIAAAAIADgFIAFADIAGAGIgGgGIgFgDIABgEIAFgFQAKgIAKAGIACABQARAOAGAKIAAAMQACAMAEAEQAYANACAAIABgBQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAQADAAACACQACABABADQAAADgCADQgCACgHAAIgBAAg");
	this.shape_4.setTransform(2.1,16.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AAFhhQgCgCgCgBQAAgBgDgFQgbgPgfA0QAFAFAFAEQALAIAKAHQAGAEAFAEAA8g1QABABABABQAIAFAIAFQBVAJAeBAQABACABADAArhBQgEgDgEgDQgCgCgDgCQgDgDgHgGQgCgCgHgFQgDgDgDgDAArhBQABABABAAQAAABABAAIAFADQAEAEAFADQgbgRgWAxQgGgCgFgDAALgVQAFADAFABQArAQAOgoAAehLQgbgLgVAxQAKAGAIAFQAVg1AWAOAjHgSIAAANQAdAQBFAOQABAAABAAQDuBpA9hNQgCgJgDgHIAVAWIgBA4QhCBNkAhpQgEgBgFAAQhFgNgegSIAAhFIAQgEIAIhOIAOgOQAVARAeAFQAVAEAZgCQAKAJAKAIAhQhWIAAgLQARg4AZAHQAFABAFAEQAAABABABQAHARASAQAAUhUQgZgOgYA1Agyg8QAdgwAaAL");
	this.shape_5.setTransform(2.1,22.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#80664D").s().p("AiZAAIgJAAQgGgJAAgJQAAgKALgIQANgJAEgJIgGgFIABgBQDuBnA9hLQgCgJgEgHIAVAWIAAA2QgcAhg+AAQhTAAiVg9g");
	this.shape_6.setTransform(6.7,30.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AB6C43").s().p("AiIAbIgCgBIgNgNQgLgNAAgSQAAgGADgQQAEgQAAgLIgHgTQAVADAZgCIATARIALAJIAUAQIALAHIATALIAMAGIAKAEQApAPAOgoQBVAJAeBAIACAFQADAIACAIQgaAhg6AAQhPAAiIg8g");
	this.shape_7.setTransform(5.8,22.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#714D2D").s().p("AiKA2IAAgMIAIhNIAOgOQAWARAdAGIAHATQAAAJgDAQQgDAQgBAGQAAATAMAOIANANQhFgOgdgSgABSArIgKgEQAWgvAaAOIADACIAQAKQgKAdgaAAQgJAAgMgEgAApAWQAWguAcALIAEAEIAJAGQgWgPgXAzIgSgLgAAKAAQAcguAcAKIAGAHIAJAGQgbgOgYA0IgUgPgAgTgZIAAgKQARg4AXAHQAFABAEADIABACQAIARASARQgbgPgeAzIgTgRg");
	this.shape_8.setTransform(-4,16.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#53412F").s().p("AiJBDIAAhFIAQgEIAAALQAdASBFAOIACAAIgBABIAGAFQgEAJgNAJQgLAIAAAKQAAAJAGAKQhFgNgegSgABMgOQAXg1AWAOIABABIACABIAEADIAJAHQgagRgWAxIgNgFgAAvghQAYg1AbAOIAKAJQgcgLgWAxIgLgIgAAPg5QAgg0AbAPIAFAGIAEADQgcgLgcAwIgMgJg");
	this.shape_9.setTransform(-5.7,21);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgLBCQAcAFAfgUQAYgcgTgbIAJg+Ig3AAIhEAAIAKA9QgTAXAYAhQARAMASADg");
	this.shape_10.setTransform(-9.4,7.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F3F8FA").s().p("AgkBBIAAgMQAAgTALgfQALgcAAgRIgCgYIA1AAIgJA+QATAbgYAbQgXAQgYAAIgMgBg");
	this.shape_11.setTransform(-6.9,7.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DBE8F0").s().p("AgUAzQgXghATgWIgKg9IBDAAIADAXQAAASgMAcQgKAegBATIAAANQgPgDgSgMg");
	this.shape_12.setTransform(-12.1,7.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgdDaQgWhdgXi1QgCgNgBgNQgEgbgDgeIAAgDIgGhLABbjZQgQEmgYCN");
	this.shape_13.setTransform(-10.2,-8.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFC488").s().p("AATDaQACivgUh8QgKhGhLAJIgFhLIC0AAQgQEmgZCNg");
	this.shape_14.setTransform(-10.2,-8.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC9C6C").s().p("AACC1QgUhdgXi1IgDgaIgHg5IAAgDQBJgJAMBGQAUB8gCCvg");
	this.shape_15.setTransform(-13.5,-4.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(0,0,0,0.302)").s().p("AAAAAIABAAIAAAAIgBAAIAAAAg");
	this.shape_16.setTransform(1.9,12.7);

	this.addChild(this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.6,-38,49.3,76.1);


(lib.gr_boy_leftleg021copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0.2)").ss(0.4,1,1).p("ABshvIAAAEIAVCxIg3AqQhmgDg7gRQgYgHgRgKIAZiiIgBgY");
	this.shape.setTransform(-10.7,-25.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#45A2FE").s().p("AhXByQgYgHgRgKIAZiiIgBgYQBVhZB/BZIAAAEIAVCxIg3AqQhmgDg7gRg");
	this.shape_1.setTransform(-10.7,-28);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AgLBCQAcAFAfgUQAYgcgTgbIAJg+Ig3AAIhEAAIAKA9QgTAXAYAhQARAMASADg");
	this.shape_2.setTransform(-9.4,7.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3F8FA").s().p("AgkBBIAAgMQAAgTALgfQALgcAAgRIgCgYIA1AAIgJA+QATAbgYAbQgXAQgYAAIgMgBg");
	this.shape_3.setTransform(-6.9,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DBE8F0").s().p("AgUAzQgXghATgWIgKg9IBDAAIADAXQAAASgMAcQgKAegBATIAAANQgPgDgSgMg");
	this.shape_4.setTransform(-12.1,7.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AgdDaQgWhdgXi1QgCgNgBgNQgEgbgDgeIAAgDIgGhLABbjZQgQEmgYCN");
	this.shape_5.setTransform(-10.2,-8.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC488").s().p("AATDaQACivgUh8QgKhGhLAJIgFhLIC0AAQgQEmgZCNg");
	this.shape_6.setTransform(-10.2,-8.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC9C6C").s().p("AACC1QgUhdgXi1IgDgaIgHg5IAAgDQBJgJAMBGQAUB8gCCvg");
	this.shape_7.setTransform(-13.5,-4.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.302)").s().p("AAAAAIABAAIAAAAIgBAAIAAAAg");
	this.shape_8.setTransform(1.9,12.7);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.6,-41.5,27.9,56.7);


(lib.gr_boy_leftleg021_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ABshvIAAAEIAVCxIg3AqQhmgDg7gRQgYgHgRgKIAZiiIgBgY");
	this.shape_17.setTransform(-10.7,-25.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#45A2FE").s().p("AhXBbQgYgHgRgJIAZijIgBgXIDUAAIAAAEIAVCxIg3AqQhmgDg7gSg");
	this.shape_18.setTransform(-10.7,-25.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(66,66,66,0.2)").ss(1,1,1).p("AgLBCQAcAFAfgUQAYgcgTgbIAJg+Ig3AAIhEAAIAKA9QgTAXAYAhQARAMASADg");
	this.shape_19.setTransform(-9.4,7.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F3F8FA").s().p("AgkBBIAAgMQAAgTALgfQALgcAAgRIgCgYIA1AAIgJA+QATAbgYAbQgXAQgYAAIgMgBg");
	this.shape_20.setTransform(-6.9,7.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DBE8F0").s().p("AgUAzQgXghATgWIgKg9IBDAAIADAXQAAASgMAcQgKAegBATIAAANQgPgDgSgMg");
	this.shape_21.setTransform(-12.1,7.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(66,66,66,0.2)").ss(1,1,1).p("AgdDaQgWhdgXi1QgCgNgBgNQgEgbgDgeIAAgDIgGhLABbjZQgQEmgYCN");
	this.shape_22.setTransform(-10.2,-8.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFC488").s().p("AATDaQACivgUh8QgKhGhLAJIgFhLIC0AAQgQEmgZCNg");
	this.shape_23.setTransform(-10.2,-8.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CC9C6C").s().p("AACC1QgUhdgXi1IgDgaIgHg5IAAgDQBJgJAMBGQAUB8gCCvg");
	this.shape_24.setTransform(-13.5,-4.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("rgba(0,0,0,0.302)").s().p("AAAAAIABAAIAAAAIgBAAIAAAAg");
	this.shape_25.setTransform(1.9,12.7);

	this.addChild(this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-24.6,-38,27.9,53.2);


(lib.gr_boy_leftleg01_new_021copy3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("ABvE8IAlmsIADjLIhBAAIjsAAIAxJ3");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#47566B").s().p("AhFE7Igxp1IDtAAQgfBTgCDXQgBCGAGCRQgCASAAAig");
	this.shape_1.setTransform(-3.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A475A").s().p("AgtE7QABgiACgSQgGiRABiGQACjXAehTIA/AAIgDDKIglGrg");
	this.shape_2.setTransform(10.3,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.1,-32.6,32.3,65.2);


(lib.gr_boy_leftleg01_new_021copy2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ABvE8IAlmsIADjLIktAAIAxJ3");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#45A2FE").s().p("AhlE7Igxp1IEtAAIgDDKIglGrg");

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.1,-32.6,32.3,65.2);


(lib.gr_boy_leftleg01_new_021copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(0.4,1,1).p("ABvE8IAlmsIADjLIhBAAIjsAAIAxJ3");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#47566B").s().p("AhFE7Igxp1IDtAAQgfBTgCDXQgBCGAGCRQgCASAAAig");
	this.shape_1.setTransform(-3.2,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#3A475A").s().p("AgtE7QABgiACgSQgGiRABiGQACjXAehTIA/AAIgDDKIglGrg");
	this.shape_2.setTransform(10.3,0);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.1,-32.6,32.3,65.2);


(lib.gr_boy_leftleg01_new_021_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ABvE8IAlmsIADjLIktAAIAxJ3");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#45A2FE").s().p("AhlE7Igxp1IEtAAIgDDKIglGrg");

	this.addChild(this.shape_4,this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-16.1,-32.6,32.3,65.2);


(lib.gr_boy_leftleg_new_031copy4 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ACFiEIgMBJIANCOQhAArgqAHQhMgDg6gtQgOgLgNgOIAgiTIgDgt");
	this.shape.setTransform(-4.3,-28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A475A").s().p("AhqBVQgOgLgNgOIAgiTIgDgtIDtAAIgMBJIANCOQhAAqgqAIQhMgDg6gtg");
	this.shape_1.setTransform(-4.3,-28.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(102,102,102,0.2)").ss(1,1,1).p("AgBgsQABgBAAgBQADgCACgBQADAAADADQADAFACAEIAFARQgEAAgSgPQAAACgBABIgOAFQAGgNgLgUQgRgMgKADQgSAAAAAiQAAABABAAQAEARAIAFQADABAEABQgIARACAeIAAABQABAJgDAFQgEAEgKAAQgDAAgCADQgCABAAAEQAAACACADQACACADAAQARAAAIgJQAHgJgDgRQgBgkAMgPQAHgFAIgHQAaAVAMgBQAGAHAEAIQABABAAABQARAXALAEQAFABADgCQACgCABgCQABgDgBgDQgCgCgCgCQgDAAgCABQgBAAgBgBQgEgEgNgRQgFgJgHgJQABgLgLgVQAAgBAAAAQgBgCgBgCIgBgBQgEgFgFgCQAAgBgBAAQgFgCgFACQgDABgFAEQgDgHgMAFAgUgqQgRgOgJABQgGACAAARQACAIAEADQAEABAGgDIAAAAIAAgBQAHgEAIgHQAAgBABgCgAgVg8IAAAAQAAgBgBAAQABAAAAABgAgGg6QAEAJABAFAgBgjQABgEgBgF");
	this.shape_2.setTransform(3,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#53412F").s().p("AhEBHQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAQgCgDAAgCQAAgEACgBQACgDADAAQAKAAAEgEQADgFgBgJIAAgBQgCgeAIgRIgHgCQgIgFgEgRIgBgBQAAgiASAAQAKgDARAMQAHANAAAKQAAAGgCAEIAOgFIABgDIgBADIgOAFQACgEAAgGQAAgKgHgNIAAAAQAMgFADAHQAFgEADgBQAFgCAFACIABABQAFACAEAFIABABIACAEIAAABQALAVgBALQAHAJAFAJQANARAEAEIACABQACgBADAAIAEAEQABADgBADQgBACgCACQgDACgFgBQgLgEgRgXIgBgCQgEgIgGgHQgMABgagVQgIAHgHAFQgMAPABAkQADARgHAJQgHAJgQAAIgCAAgAgBgsQABAFgBAEQASAPAEAAIgFgRIgFgJQgDgDgDAAIgFADIgBACQgBgFgEgJQAEAJABAFgAgug3QgGACAAARQACAIAEADQAEABAGgDIAAAAIAAgBQAHgEAIgHIABgDQgQgNgJAAIgBAAgAgVg8IgBgBIABABgAgVg8g");
	this.shape_3.setTransform(3,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AAugTQg/gRgcA7");
	this.shape_4.setTransform(5.8,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAxgDIgGgPIgNgiQg4gxgwBFIAUAeIAIAKIAMARIAHAMIAKAOIAHALIAIAMQAfgWAuAIIgEgKIgFgNIgEgJIgFgNIgIgSQglgZg6AkAg2gCQA9gpAkAZABCAlQgigSgxAgABHAyQghgSgwAeAA5APQgkgXg3AhAA+AcQgkgYg1Ah");
	this.shape_5.setTransform(0.6,12.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#714D2D").s().p("AgKA+QAwgeAhASIAEAKQgugIgfAWgAgbAlQA1ghAkAYIAEAJQgigSgxAggAguAIQA6gkAlAZIAIASQgkgXg3AhgAhKggQAwhFA4AxIANAiQgkgZg9Apg");
	this.shape_6.setTransform(0.6,12.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#53412F").s().p("AgaAiQAyggAiASIAFANQghgSgwAegAgrAIQA3ghAlAZIAFALQglgWg1AfgAg+gTQA+gpAjAZIAGAPQglgZg6Amg");
	this.shape_7.setTransform(1.5,14);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AiShKIgCAPIAhAuIAQALIANAUIAEAFIAkA4QAOAYA/AKQBCAJAygnQAEgLACgKAiShKIgRAYIAAAkIAkAwIANAAIApBLIAXAqQB7A0Bbg/IAAg/IgLgPQACg1g3gqQguhEgNg7IgJgJQgoAug+gRQgQgEgSgJIgMgVIgUAdg");
	this.shape_8.setTransform(1.3,24.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#80664D").s().p("AACARIgLAAIgjgwIAAgkIAQgYIgBAPIAeAuIAQALIAOAUIADAFIAGAQQAAAEgFALIgEANQAAAOAOAbIgBABg");
	this.shape_9.setTransform(-10.6,25.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AB6C43").s().p("AAIBKIgOgLIghguIACgPIAKhEIAVgdIAJAUQASAJAQAFIACASQAAAcgMAbQgNAeAAATQABALAHAXIgBABg");
	this.shape_10.setTransform(-9.6,16.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#714D2D").s().p("AABCMQg/gKgOgXIgkg5IgDgFIABgBQgIgXAAgLQAAgRAMgeQANgdAAgcIgDgSQA+ARAoguIAJAIQANA8AuBEQA3AqgCA0IgGAWQgoAfgyAAQgNAAgNgCg");
	this.shape_11.setTransform(4.2,21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#53412F").s().p("AhYA0IgXgqIABgBQgOgZAAgOIAEgNQAFgLAAgEIgGgQIAkA4QAOAWBCAKQA/AJAzglIAFgVIALAPIAAA9QgxAig8AAQgvAAg5gXg");
	this.shape_12.setTransform(5.1,34);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAFg7QgDAAgCAAQgjABgYgOIAJA+QgTAXAWAlQAcAaAYgEQAWgEAUgXQAIgJAEgKQAFgSgMgRIAGg/QgUALgeAC");
	this.shape_13.setTransform(-4.5,4.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3F8FA").s().p("AgWAyQgWglATgXIgIg+QAXAOAjgBIAGAAIACAAIABAJIAAAMQAAALgIAOQgHANAAARIABAPQACAPAEAJIAFAQIgHABQgXAAgXgXg");
	this.shape_14.setTransform(-7.1,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DBE8F0").s().p("AgZA5QgEgJgCgQIgBgPQAAgRAHgMQAIgPAAgKIAAgMIgBgJQAcgCAVgLIgHA/QANAQgGATQgDAJgIAKQgUAXgUADIgFgPg");
	this.shape_15.setTransform(-1.8,4.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAUDJIAZAAQAwkGgKiKIinAAQADBeAMBmQAMBiAVBqg");
	this.shape_16.setTransform(-5,-13.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFC488").s().p("AgLBmQgVhogMhjQArAYAUAtQAaAyAABUg");
	this.shape_17.setTransform(-7.5,-3.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CC9C6C").s().p("AAUDJQAAhUgYg0QgWgugrgVQgMhngDhfICnAAQAKCLgwEGg");
	this.shape_18.setTransform(-5,-13.2);

	this.addChild(this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.7,-42.5,37.3,85.1);


(lib.gr_boy_leftleg_new_031copy3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(7,7,7,0.2)").ss(0.4,1,1).p("ACFiEIgMBJIANCOQhAArgqAHQhMgDg6gtQgOgLgNgOIAgiTIgDgt");
	this.shape.setTransform(-4.3,-28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#45A2FE").s().p("AhqBVQgOgLgNgOIAgiTIgDgtIDtAAIgMBJIANCOQhAAqgqAIQhMgDg6gtg");
	this.shape_1.setTransform(-4.3,-28.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAFg7QgDAAgCAAQgjABgYgOIAJA+QgTAXAWAlQAcAaAYgEQAWgEAUgXQAIgJAEgKQAFgSgMgRIAGg/QgUALgeAC");
	this.shape_2.setTransform(-4.5,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3F8FA").s().p("AgWAyQgWglATgXIgIg+QAXAOAjgBIAGAAIACAAIABAJIAAAMQAAALgIAOQgHANAAARIABAPQACAPAEAJIAFAQIgHABQgXAAgXgXg");
	this.shape_3.setTransform(-7.1,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DBE8F0").s().p("AgZA5QgEgJgCgQIgBgPQAAgRAHgMQAIgPAAgKIAAgMIgBgJQAcgCAVgLIgHA/QANAQgGATQgDAJgIAKQgUAXgUADIgFgPg");
	this.shape_4.setTransform(-1.8,4.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(7,7,7,0.2)").ss(1,1,1).p("AgshlQAMBjAVBoIA4AA");
	this.shape_5.setTransform(-7.5,-3.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(7,7,7,0.2)").ss(0.4,1,1).p("AAUDJIAZAAQAwkGgKiKIinAAQADBeAMBm");
	this.shape_6.setTransform(-5,-13.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC488").s().p("AgLBmQgVhogMhjQArAYAUAtQAaAyAABUg");
	this.shape_7.setTransform(-7.5,-3.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC9C6C").s().p("AAUDJQAAhUgYg0QgWgugrgVQgMhngDhfICnAAQAKCLgwEGg");
	this.shape_8.setTransform(-5,-13.2);

	this.addChild(this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.7,-42.5,28.9,55);


(lib.gr_boy_leftleg_new_031copy2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(0.4,1,1).p("ACFiEIgMBJIANCOQhAArgqAHQhMgDg6gtQgOgLgNgOIAgiTIgDgt");
	this.shape.setTransform(-4.3,-28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3A475A").s().p("AhqBVQgOgLgNgOIAgiTIgDgtIDtAAIgMBJIANCOQhAAqgqAIQhMgDg6gtg");
	this.shape_1.setTransform(-4.3,-28.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgBgsQABgBAAgBQADgCACgBQADAAADADQADAFACAEIAFARQgEAAgSgPQAAACgBABIgOAFQAGgNgLgUQgRgMgKADQgSAAAAAiQAAABABAAQAEARAIAFQADABAEABQgIARACAeIAAABQABAJgDAFQgEAEgKAAQgDAAgCADQgCABAAAEQAAACACADQACACADAAQARAAAIgJQAHgJgDgRQgBgkAMgPQAHgFAIgHQAaAVAMgBQAGAHAEAIQABABAAABQARAXALAEQAFABADgCQACgCABgCQABgDgBgDQgCgCgCgCQgDAAgCABQgBAAgBgBQgEgEgNgRQgFgJgHgJQABgLgLgVQAAgBAAAAQgBgCgBgCIgBgBQgEgFgFgCQAAgBgBAAQgFgCgFACQgDABgFAEQgDgHgMAFAgUgqQgRgOgJABQgGACAAARQACAIAEADQAEABAGgDIAAAAIAAgBQAHgEAIgHQAAgBABgCgAgVg8IAAAAQAAgBgBAAQABAAAAABgAgGg6QAEAJABAFAgBgjQABgEgBgF");
	this.shape_2.setTransform(3,13.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#53412F").s().p("AhEBHQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAgBgBAAQgCgDAAgCQAAgEACgBQACgDADAAQAKAAAEgEQADgFgBgJIAAgBQgCgeAIgRIgHgCQgIgFgEgRIgBgBQAAgiASAAQAKgDARAMQAHANAAAKQAAAGgCAEIAOgFIABgDIgBADIgOAFQACgEAAgGQAAgKgHgNIAAAAQAMgFADAHQAFgEADgBQAFgCAFACIABABQAFACAEAFIABABIACAEIAAABQALAVgBALQAHAJAFAJQANARAEAEIACABQACgBADAAIAEAEQABADgBADQgBACgCACQgDACgFgBQgLgEgRgXIgBgCQgEgIgGgHQgMABgagVQgIAHgHAFQgMAPABAkQADARgHAJQgHAJgQAAIgCAAgAgBgsQABAFgBAEQASAPAEAAIgFgRIgFgJQgDgDgDAAIgFADIgBACQgBgFgEgJQAEAJABAFgAgug3QgGACAAARQACAIAEADQAEABAGgDIAAAAIAAgBQAHgEAIgHIABgDQgQgNgJAAIgBAAgAgVg8IgBgBIABABgAgVg8g");
	this.shape_3.setTransform(3,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AhegmQCDggA6B0");
	this.shape_4.setTransform(5.8,24.9,0.481,0.514,0,0,180);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AhfgmIAdhHQB/hmBqCPIgtA/IgSAWIgZAkIgQAXIgWAeIgQAXIgRAXQhHgthnASIAJgVIAMgcIAIgTIAMgaQBQgxB8BHAiRBMQBLgkBvBCAidBoQBJglBtA+AiJA5QBQgwB4BDAh9AfIARgnQBSg1CCBOAB6gFQiIhXhRA2AhsgIIANge");
	this.shape_5.setTransform(0.6,12.3,0.453,0.484,0,0,180);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#714D2D").s().p("AimB9IAJgVQBJglBtA+IgRAXQhHgthnASgAiRBMIAIgTQBQgwB4BDIgWAeQhvhChLAkgAh9AfIARgnQBSg1CCBOIgZAkQh8hHhQAxgAhggmIAehHQB/hmBqCPIgtA/QiIhXhSA2g");
	this.shape_6.setTransform(0.6,12.3,0.453,0.484,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#53412F").s().p("AiLBGIAMgdQBLgjBvBCIgQAWQhtg9hJAlgAh3AXIAMgZQBQgyB8BGIgQAYQh4hChQAvgAhagqIAMgfQBQg1CKBWIgSAZQiChQhSA1g");
	this.shape_7.setTransform(1.5,14,0.453,0.484,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("ACZA+QACg1g3gqQguhEgNg7IgKgJQgnAvg+gSQgQgEgSgJIgMgVIgUAdIgKBHIgCAPIAhAuIAQALIANAUIAEAFIAjA4QAPAYA/AKQBCAJAygnQAEgLACgKgAiShKIgRAYIAAAkIAkAwIANAAIAqBLIAXAqQB6A0Bbg/IAAg/IgLgP");
	this.shape_8.setTransform(1.3,24.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#80664D").s().p("AACARIgLAAIgjgwIAAgkIAQgYIgBAPIAeAuIAQALIANAUIAEAEIAGARQAAAEgFALIgEANQAAAOAOAbIgBABg");
	this.shape_9.setTransform(-10.6,25.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#AB6C43").s().p("AAHBKIgNgLIghguIACgPIAKhEIAVgdIAJAUQASAJAQAFIADASQAAAcgNAbQgNAeAAATQAAALAIAXIgBABg");
	this.shape_10.setTransform(-9.6,16.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#714D2D").s().p("AABCMQg/gKgOgXIgkg5IgDgFIABgBQgIgXAAgLQAAgRAMgeQANgdAAgcIgDgSQA+ARAoguIAJAIQANA8AuBEQA3AqgCA0IgGAWQgoAfgyAAQgNAAgNgCg");
	this.shape_11.setTransform(4.2,21.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#53412F").s().p("AhYA0IgXgqIABgBQgOgZAAgOIAFgNQAEgLAAgEIgGgQIAkA4QAOAWBCAKQA/AJAyglIAGgVIALAPIAAA9QgxAig8AAQgvAAg5gXg");
	this.shape_12.setTransform(5.1,34);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AAFg7QgDABgCAAQgjAAgYgNIAJA9QgTAXAWAlQAcAaAYgEQAWgDAUgXQAIgKAEgJQAFgTgMgQIAGg/QgUAKgfAC");
	this.shape_13.setTransform(-4.5,4.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F3F8FA").s().p("AgWAyQgWglATgXIgIg9QAYANAiAAIAGgBIACAAQABAEAAAGIAAAMQAAAKgIAPQgHAMAAARIABAPQACAQAEAJIAFAPIgIAAQgXAAgWgWg");
	this.shape_14.setTransform(-7.1,4.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DBE8F0").s().p("AgZA5QgEgJgCgQIgBgPQAAgRAHgMQAIgPAAgKIAAgMQAAgGgBgDQAdgCAUgLIgHA/QANAQgGATQgDAJgIAKQgUAXgUADIgFgPg");
	this.shape_15.setTransform(-1.8,4.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AgkDJIBRAAQAwkGgKiKIinAAQADBeAMBmQAMBiAVBqg");
	this.shape_16.setTransform(-5,-13.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CC9C6C").s().p("AgkDJQgVhqgMhhQgMhngDhfICnAAQAKCLgwEGg");
	this.shape_17.setTransform(-5,-13.2);

	this.addChild(this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.7,-42.5,37.3,85.1);


(lib.gr_boy_leftleg_new_031copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0.2)").ss(0.4,1,1).p("ACFiEIgMBJIANCOQhAArgqAHQhMgDg6gtQgOgLgNgOIAgiTIgDgt");
	this.shape.setTransform(-4.3,-28.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#45A2FE").s().p("AhqBrQgOgLgNgNIAgiUIgDgtQB6hZBzBZIgMBJIANCOQhAArgqAHQhMgDg6gtg");
	this.shape_1.setTransform(-4.3,-30.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("rgba(102,102,102,0.2)").ss(1,1,1).p("AAFg7QgDAAgCAAQgjABgYgOIAJA+QgTAXAWAlQAcAaAYgEQAWgEAUgXQAIgJAEgKQAFgSgMgRIAGg/QgUALgeAC");
	this.shape_2.setTransform(-4.5,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F3F8FA").s().p("AgWAyQgWglATgXIgIg+QAXAOAjgBIAGAAIACAAIABAJIAAAMQAAALgIAOQgHANAAARIABAPQACAPAEAJIAFAQIgHABQgXAAgXgXg");
	this.shape_3.setTransform(-7.1,4.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DBE8F0").s().p("AgZA5QgEgJgCgQIgBgPQAAgRAHgMQAIgPAAgKIAAgMIgBgJQAcgCAVgLIgHA/QANAQgGATQgDAJgIAKQgUAXgUADIgFgPg");
	this.shape_4.setTransform(-1.8,4.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(102,102,102,0.2)").ss(1,1,1).p("AAUDJIAZAAQAwkGgKiKIinAAQADBeAMBmQAMBiAVBqg");
	this.shape_5.setTransform(-5,-13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFC488").s().p("AgLBmQgVhogMhjQArAYAUAtQAaAyAABUg");
	this.shape_6.setTransform(-7.5,-3.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC9C6C").s().p("AAUDJQAAhUgYg0QgWgugrgVQgMhngDhfICnAAQAKCLgwEGg");
	this.shape_7.setTransform(-5,-13.2);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.7,-46,28.9,58.5);


(lib.gr_boy_leftleg_new_031_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(7,7,7,0.2)").ss(0.4,1,1).p("ACFiEIgMBJIANCOQhAArgqAHQhMgDg6gtQgOgLgNgOIAgiTIgDgt");
	this.shape_19.setTransform(-4.3,-28.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#45A2FE").s().p("AhqBVQgOgLgNgOIAgiTIgDgtIDtAAIgMBJIANCOQhAAqgqAIQhMgDg6gtg");
	this.shape_20.setTransform(-4.3,-28.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAFg7QgDAAgCAAQgjABgYgOIAJA+QgTAXAWAlQAcAaAYgEQAWgEAUgXQAIgJAEgKQAFgSgMgRIAGg/QgUALgeAC");
	this.shape_21.setTransform(-4.5,4.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#F3F8FA").s().p("AgWAyQgWglATgXIgIg+QAXAOAjgBIAGAAIACAAIABAJIAAAMQAAALgIAOQgHANAAARIABAPQACAPAEAJIAFAQIgHABQgXAAgXgXg");
	this.shape_22.setTransform(-7.1,4.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#DBE8F0").s().p("AgZA5QgEgJgCgQIgBgPQAAgRAHgMQAIgPAAgKIAAgMIgBgJQAcgCAVgLIgHA/QANAQgGATQgDAJgIAKQgUAXgUADIgFgPg");
	this.shape_23.setTransform(-1.8,4.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("rgba(7,7,7,0.2)").ss(1,1,1).p("AgshlQAMBjAVBoIA4AA");
	this.shape_24.setTransform(-7.5,-3.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(7,7,7,0.2)").ss(0.4,1,1).p("AAUDJIAZAAQAwkGgKiKIinAAQADBeAMBm");
	this.shape_25.setTransform(-5,-13.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFC488").s().p("AgLBmQgVhogMhjQArAYAUAtQAaAyAABUg");
	this.shape_26.setTransform(-7.5,-3.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#CC9C6C").s().p("AAUDJQAAhUgYg0QgWgugrgVQgMhngDhfICnAAQAKCLgwEGg");
	this.shape_27.setTransform(-5,-13.2);

	this.addChild(this.shape_27,this.shape_26,this.shape_25,this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.7,-42.5,28.9,55);


(lib.GO_talkcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/////////* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(20));

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AANgIQgMAAgFAHQgFADgDAH");
	this.shape.setTransform(5.3,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("ABrAMQgBAAAAAAQh5ANhbgn");
	this.shape_1.setTransform(15.5,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#704608").s().p("AhsgLQBYgLBGAIQBIAJgQAUIgCABIgBgBQgdADgcAAQhVAAhFgdg");
	this.shape_2.setTransform(15.7,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#704108").s().p("AAEAhQgTgEgTgIQgTgJgSgMQgTgLgMgSIgEgEQBaAnB5gLIABAAQAEAMgSAKIgBABQgUALgXADQgMACgLAAQgLAAgKgBg");
	this.shape_3.setTransform(15.5,7.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AgKANQAAgJAIgGQAFgJAJgB");
	this.shape_4.setTransform(2.3,2.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#704608").s().p("AATA+QgogFgmgaQgXgQgVgWIAPAHIAfANQApASAqAAIABAAIApgBIAtgHQgEAIgHAGQgaAbgmAAIgTgCgAh5gsQAFgCAvgJQAvgLBDAEQBEADAJAeIgMAAQgZACgaAAQhUAAhggRg");
	this.shape_5.setTransform(14.9,6.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#870101").s().p("AgZAAIgfgPQBWAKAbAVQgsAAgmgQg");
	this.shape_6.setTransform(11.7,8.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhugGIgJgGIAJgCQB6ATBsgFIgFANIgeABIgGABIgRAAQhgAAhMgVg");
	this.shape_7.setTransform(13.8,3.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#330000").s().p("AA2AlQgbgXhXgKIgPgFIgFgGIgWgdIAKAGQBRAZBrgCIAHgBIAAABQgPAYAIASIgpACIgBAAg");
	this.shape_8.setTransform(12.1,6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#704608").s().p("AAUA8QgtgCgdgTQgdgUgNgXIABAAIAIAFQAxAlBjgNIABAAIABAAQALACAEAFQAFAEgIANQgIALgjAAIgMAAgAhggeQALgJAMgFQAagJAWgDQBQgMAoAdIABADIABAEIgJABQgvAEguAAQgsAAgvgDg");
	this.shape_9.setTransform(13.5,6.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#870101").s().p("AglAKIgJgHIAAgBQgJgJAJgOQAaAHAdAEQAhAJAKAXQglgBg0gLg");
	this.shape_10.setTransform(8.6,5.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#330000").s().p("AgEAQQgKgXghgJQA1ANAqgGQgDAEgBAFQgBAFABAHQgPAFgXAAIgKgBg");
	this.shape_11.setTransform(14.4,5.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhSACQA2AMAjABQAfABATgGQgBgHABgEIAQAEIgGAYIgBAAQgaADgXAAQg/AAgkgcgAgigRQgfgEgagIQBeAGBZgGIgEAOQgGADgVABQgOACgPAAQgfAAgjgIg");
	this.shape_12.setTransform(13.1,5.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#704608").s().p("AgtAiQgUgOgKgUIAAAAIAHAEQAbAaBdgJIAIABQAFABACAGQABAFgOAHQgPAGghAAQggAAgTgNgAhMgNIgBAAIABgBQALgKAYgJQAXgKAYgCQAagDASAEQASAEAKARIgGAAQhJgBhKALg");
	this.shape_13.setTransform(15.3,6.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#330000").s().p("Ag0AIIgHgGQgEgDACgGIABABIACgCQAwALBJgGQgCADgBAJgAg8gGIgBgBIAAgBIAAAAIABAAIAAACg");
	this.shape_14.setTransform(13.6,6.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhCAEIBwACIANAAIgEAPQgZADgVAAQg3AAgUgUgAhIgMIgBAAQBJgMBKACIgDAMQgFADgRABQgcADgWAAQgpAAgegJg");
	this.shape_15.setTransform(15,6.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("ABwAQQgVgIgWgCQgWgDgXgCQgYgBgWgCQgWgEgWAAQgSgCgTgCQAKgCAKgCQgMgDgIAHQgFAFgDAG");
	this.shape_16.setTransform(15.2,5.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#704608").s().p("AgSAiQgagHgYgOQgZgOgTgWIAlAEQAWAAAWAEQAXABAWAEIAtAEQAWACAVAGQgVgGgWgCIgtgEQgWgEgXgBQgWgEgWAAIglgEIAUgFQBQgRA+AKQBHALgKAOIgJAMIAAAGQgGAPgJAEIgCABQgXAMgbAAQgbAAgagGgAhwgXIAAAAg");
	this.shape_17.setTransform(16.1,6.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgGAwQgKgHAAgGIAGAEQAVAJALgXIgBAFQgEASgRAAIgGAAgAgQAPQgDgCgBgDIgBgKIAAgBQAAgiAfgMQgFAEAAALQAAAMAEALIABADIABACIAAABIACAHQAAAHgBADQgDAHgJAAQgMAAgEgGg");
	this.shape_18.setTransform(20.7,7.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgJBEQgQgHgBgGIAKAEQAjAIARgXIgBAGQgHASgaAAIgLAAgAgBAkQgIAAgHgFQgTgNABgVQAAgWAKgRQAKgSASgGIAHgBIAEADQAPAPACAXQADAVgFATQgGAWgVAAIgEAAg");
	this.shape_19.setTransform(15.9,8.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#704608").s().p("AAAA1QgSgDgUgJQgSgIgTgNQgSgNgNgPIgBgCIgCgCQAeAMAjAHIAZAFQArAMAygIIAcgCIABAAQADAOgTAKQgUALgXADQgMADgNAAQgJAAgKgCgAAxg2QBIACgMAfIgGAAQhygKheALQBUglBGADg");
	this.shape_20.setTransform(15.6,6.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#330000").s().p("Ag1gFIgBAAIAAgBIABgHIAAACIABgCIADAAQAxAJA3ACQgIACgIADQgRAJgMACQgggIgfgLg");
	this.shape_21.setTransform(10,6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#870101").s().p("AghAHIgagFQANgCAQgHQAJgEAHgDIAOABIAYAAQAKABAJACQARAFgBAQQgUAEgUAAQgaAAgagIg");
	this.shape_22.setTransform(17,7.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AAQAIIgQAAQg2gCgygHQBegMBzAKIgIAIQgdADgbAAIgOAAIgLAAg");
	this.shape_23.setTransform(15.4,4.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAeAGIgIAAIgPgBIgzgFIAAgFIBZAKIgIABIgHAAg");
	this.shape_24.setTransform(9,5.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#704608").s().p("AAAA1QgSgDgUgJQgSgIgTgNQgSgNgNgPIgBgCIgCgCQBYAjBugIIANgBIABAAQADAOgTAKQgUALgXADQgMADgNAAQgJAAgKgCgABngVQh3gKhdAKIAAgCIABgDIAAAAIABAAQBUgfBIADQBIACgMAfIgGAAg");
	this.shape_25.setTransform(15.6,6.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhpgHIAAABIgBgBIAAgBIABgGIAAgBIAAgBQBdgKB3AKIgPARIABATIgnACQhXAAhIgdg");
	this.shape_26.setTransform(15.2,6.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#704608").s().p("AAzAzQgVgBgagDQgXgDgUgJQgTgJgUgOQgMgJgKgIIgEgFIgHgIIgBgCIgBgFIAAgBIgBAAIAAAAIAAgDIAAgBIAAAEIAAgGIACgEIAAAAIAAAAQBSgSBMAFQBOAGgKAbIgGgBIgBAAQhZAGiDgPQAGAHAFADQBTAoBxgGIAAAAIANAAIABAAQAEAPgTAKQgSAIgUAAIgEAAg");
	this.shape_27.setTransform(15,6.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhjgMQgFgCgGgIQCDAPBZgGIAAABIABAAIgPAQIABASIAAAAIgcABQhfAAhJgjgAhugWIAAAAIAAABIAAADIAAgEg");
	this.shape_28.setTransform(14.7,5.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},2).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13}]},2).to({state:[{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_18}]},2).to({state:[{t:this.shape_19}]},2).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},2).to({state:[{t:this.shape_28},{t:this.shape_27}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(3,2.4,24.3,8.6);


(lib.GO_talk = function() {
	this.initialize();

	// mouth
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AANgIQgMAAgFAHQgFADgDAH");
	this.shape.setTransform(5.3,4.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("ABrAMQgBAAAAAAQh5ANhbgn");
	this.shape_1.setTransform(15.5,5.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#704608").s().p("AhsgLQBYgLBGAIQBIAJgQAUIgCABIgBgBQgdADgcAAQhVAAhFgdg");
	this.shape_2.setTransform(15.7,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#704108").s().p("AAEAhQgTgEgTgIQgTgJgSgMQgTgLgMgSIgEgEQBaAnB5gLIABAAQAEAMgSAKIgBABQgUALgXADQgMACgLAAQgLAAgKgBg");
	this.shape_3.setTransform(15.5,7.5);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(3,2.4,24.3,8.6);


(lib.GO_shoescopy = function() {
	this.initialize();

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AC0AUQi2glitAzQgKgUAQgVQCkgrClAcQAUASAAAYg");
	this.shape.setTransform(27.9,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#090909").s().p("AipgHQCkgrClAcQAUASAAAYQi2glitAzQgKgUAQgVg");
	this.shape_1.setTransform(27.9,15.2);

	// Layer 10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ACdg6QixAFiTBFQgKAVASAWQCJhOC6ABQARgbgYgNg");
	this.shape_2.setTransform(27.1,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#090909").s().p("AinAQQCThFCxgFQAYANgRAbQi6gBiJBOQgSgWAKgVg");
	this.shape_3.setTransform(27.1,11.5);

	// Layer 11
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AClAvQiQhDi5AQQgTgaAXgPQCxgJCYA5QALAVgPAXg");
	this.shape_4.setTransform(27,11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#090909").s().p("AikgEQgTgaAXgPQCxgJCYA5QALAVgPAXQiQhDi5AQg");
	this.shape_5.setTransform(27,11.2);

	// Layer 12
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.3,1,1).p("AALANQgEAFgHAAQgGAAgFgFQgFgGAAgHQAAgFAFgGQAFgEAGAAQAHAAAEAEQAGAGAAAFQAAAHgGAGgAAUgTQAJAJAAAKQAAAMgJAJQgJAIgLAAQgKAAgJgIQgJgJAAgMQAAgKAJgJQAJgJAKAAQALAAAJAJg");
	this.shape_6.setTransform(10.4,8.8);

	// Layer 13
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.3,1,1).p("AAAgcQALAAAJAJQAJAJAAAKQAAAMgJAJQgJAIgLAAQgKAAgJgIQgJgJAAgMQAAgKAJgJQAJgJAKAAgAgLANQgFgGAAgHQAAgFAFgGQAFgEAGAAQAHAAAEAEQAGAGAAAFQAAAHgGAGQgEAFgHAAQgGAAgFgFg");
	this.shape_7.setTransform(43,7.6);

	// Layer 14
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.3,1,1).p("ACFg8QA5AJAyAlQADADADACAEBBHIgcAAQgHgxg6gjQhCgphdAAQhbAAhCApQg6AjgHAxIgnAAAj4AHIAAAAQA7g3A9gMAj6ARQADgDADgDQA5gyA7gLACFhGQA8AKAyApADlBHIm+AA");
	this.shape_8.setTransform(27,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkNAxIAAhRIAMgPIIBAAIAOARIAABPg");
	this.shape_9.setTransform(27,36.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#090909").s().p("Ah4BPIAAgsIglhhIAWgJIAoB7IAAAbgAB6BEIAQiTIAUABIAAABIgRCTg");
	this.shape_10.setTransform(26.2,8.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#130E15").s().p("Aj2BtIABAAIADAEIgGAGIACgKgADyBWIAEgFIADAKIgHgFgACZh1IAAgBIAQADg");
	this.shape_11.setTransform(26.7,12.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#151B3A").s().p("AiBCdIABAAIgBAAgAB/icIABAAIACAAIgCARg");
	this.shape_12.setTransform(15,8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#33200E").s().p("AkADFIAAgQQACgdAEgZIAGgFIgEgFQA7g5A9gMIAZAAIAAgbIgoh8IgXAJIAmBiIAAAsQg9AMg7A5IAAAAQAMg2AcgkIgnhmIBEgQIgFgXQgFgYAtgWQBIgjBQgBIABARIABgRQA6AAA/ARQAvAPgFAaIgGAfIBEALIgaB/QAXAWALAkQgygpg8gKQA8AKAyApIgDAGQgyglg5gJQA5AJAyAlIAGAEQAKAjABAvIAAAQgAEBC1IgcAAgADlC1QgHgxg6gkQhCgphdAAQhbAAhCApQg6AkgHAxQAHgxA6gkQBCgpBbAAQBdAABCApQA6AkAHAxIm+AAgAjZC1IgnAAgAj0B6QA6g0A6gMQg6AMg6A0gAByAkIATACIARiTIARACIgRgDIgVAAgAg8igQgdATAAAbQAAAbAdATQAeATAnAAQApAAAegTQAdgTAAgbQAAgbgdgTQgegTgpAAQgnAAgeATgADzBZIAAAAgAgghXQgRgLAAgQQAAgQARgMQASgLAXAAQAYAAASALQASAMAAAQQAAAQgSALQgSAMgYAAQgXAAgSgMg");
	this.shape_13.setTransform(27,12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1A151C").s().p("AhFAtQgegTAAgaQAAgZAegUQAdgTAoAAQApAAAdATQAeAUAAAZQAAAageATQgdAUgpAAQgoAAgdgUgAgpgbQgSAMAAAPQAAAPASAMQARALAYABQAYgBASgLQARgMAAgPQAAgPgRgMQgSgKgYgBQgYABgRAKg");
	this.shape_14.setTransform(27.9,0.5);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-7.7,54.1,49.3);


(lib.GO_shoes = function() {
	this.initialize();

	// Layer 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AC0AUQi2glitAzQgKgUAQgVQCkgrClAcQAUASAAAYg");
	this.shape.setTransform(27.9,15.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#090909").s().p("AipgHQCkgrClAcQAUASAAAYQi2glitAzQgKgUAQgVg");
	this.shape_1.setTransform(27.9,15.2);

	// Layer 10
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ACdg6QixAFiTBFQgKAVASAWQCJhOC6ABQARgbgYgNg");
	this.shape_2.setTransform(27.1,11.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#090909").s().p("AinAQQCThFCxgFQAYANgRAbQi6gBiJBOQgSgWAKgVg");
	this.shape_3.setTransform(27.1,11.5);

	// Layer 11
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AClAvQiQhDi5AQQgTgaAXgPQCxgJCYA5QALAVgPAXg");
	this.shape_4.setTransform(27,11.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#090909").s().p("AikgEQgTgaAXgPQCxgJCYA5QALAVgPAXQiQhDi5AQg");
	this.shape_5.setTransform(27,11.2);

	// Layer 12
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.3,1,1).p("AAUgTQAJAJAAAKQAAAMgJAJQgJAIgLAAQgKAAgJgIQgJgJAAgMQAAgKAJgJQAJgJAKAAQALAAAJAJgAALANQgEAFgHAAQgGAAgFgFQgFgGAAgHQAAgFAFgGQAFgEAGAAQAHAAAEAEQAGAGAAAFQAAAHgGAGg");
	this.shape_6.setTransform(10.4,8.8);

	// Layer 13
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(0.3,1,1).p("AAAgcQALAAAJAJQAJAJAAAKQAAAMgJAJQgJAIgLAAQgKAAgJgIQgJgJAAgMQAAgKAJgJQAJgJAKAAgAgLANQgFgGAAgHQAAgFAFgGQAFgEAGAAQAHAAAEAEQAGAGAAAFQAAAHgGAGQgEAFgHAAQgGAAgFgFg");
	this.shape_7.setTransform(43,7.6);

	// Layer 14
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.3,1,1).p("ACFg8QA5AJAyAlQADADADACAEBBHIgcAAQgHgxg6gjQhCgphdAAQhbAAhCApQg6AjgHAxIgnAAAj4AHIAAAAQA7g3A9gMAj6ARQADgDADgDQA5gyA7gLADlBHIm+AAACFhGQA8AKAyAp");
	this.shape_8.setTransform(27,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AkNAxIAAhRIAMgPIIBAAIAOARIAABPg");
	this.shape_9.setTransform(27,36.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#090909").s().p("Ah4BPIAAgsIglhhIAWgJIAoB7IAAAbgAB6BEIAQiTIAUABIAAABIgRCTg");
	this.shape_10.setTransform(26.2,8.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#130E15").s().p("Aj2BtIABAAIADAEIgGAGIACgKgADyBWIAEgFIADAKIgHgFgACZh1IAAgBIAQADg");
	this.shape_11.setTransform(26.7,12.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#151B3A").s().p("AiBCdIABAAIgBAAgAB/icIABAAIACAAIgCARg");
	this.shape_12.setTransform(15,8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#33200E").s().p("AkADFIAAgQQACgdAEgZIAGgFIgEgFQA7g5A9gMIAZAAIAAgbIgoh8IgXAJIAmBiIAAAsQg9AMg7A5IAAAAQAMg2AcgkIgnhmIBEgQIgFgXQgFgYAtgWQBIgjBQgBIABARQgnAAgeATQgdATAAAbQAAAbAdATQAeATAnAAQApAAAegTQAdgTAAgbQAAgbgdgTQgegTgpAAIABgRQA6AAA/ARQAvAPgFAaIgGAfIgRgDIgVAAIgPCSIATACIARiTIARACIBEALIgaB/QAXAWALAkQgygpg8gKQA8AKAyApIgDAGQgyglg5gJQA5AJAyAlIAGAEQAKAjABAvIAAAQgACkBgQA6AkAHAxIAcAAIgcAAQgHgxg6gkQhCgphdAAQhbAAhCApQg6AkgHAxQAHgxA6gkQBCgpBbAAQBdAABCApgAjZC1IG+AAIm+AAIgnAAgAj0B6QA6g0A6gMQg6AMg6A0gAgghXQgRgLAAgQQAAgQARgMQASgLAXAAQAYAAASALQASAMAAAQQAAAQgSALQgSAMgYAAQgXAAgSgMg");
	this.shape_13.setTransform(27,12);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1A151C").s().p("AhFAtQgegTAAgaQAAgZAegUQAdgTAoAAQApAAAdATQAeAUAAAZQAAAageATQgdAUgpAAQgoAAgdgUgAgpgbQgSAMAAAPQAAAPASAMQARALAYABQAYgBASgLQARgMAAgPQAAgPgRgMQgSgKgYgBQgYABgRAKg");
	this.shape_14.setTransform(27.9,0.5);

	this.addChild(this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-7.7,54.1,49.3);


(lib.GO_RightForeArmcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// xtra
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF9E83").s().p("AiLgMQB0gfByANIAyAJIAAAFIgHAyQiWgWh8AXg");
	this.shape.setTransform(16,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(62,67,48,0.302)").ss(1,1,1).p("AhegIQBaAEBfgWIAEAgQhVAbhkgIg");
	this.shape_1.setTransform(9.6,83.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C658C").s().p("AhaAZIgEghQBaAEBfgWIADAgQhBAVhJAAQgXAAgXgCg");
	this.shape_2.setTransform(9.6,83.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(62,67,48,0.302)").ss(1,1,1).p("AhegIQBaAEBfgWIAEAgQhVAbhkgIg");
	this.shape_3.setTransform(9.5,79.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D4A1B").s().p("AhaAZIgEghQBaAEBfgWIADAgQhBAVhJAAQgXAAgXgCg");
	this.shape_4.setTransform(9.5,79.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(62,67,48,0.302)").ss(1,1,1).p("AhdgIQBZAEBfgWIAEAgQhVAbhkgIg");
	this.shape_5.setTransform(9.9,67.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C658C").s().p("AhaAZIgEghQBaAEBfgWIAEAgQhCAVhJAAQgXAAgXgCg");
	this.shape_6.setTransform(9.9,67.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{x:9.5,y:79.2}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:9.6,y:83.3}},{t:this.shape}]}).to({state:[{t:this.shape_4,p:{x:9.8,y:63.8}},{t:this.shape_1,p:{x:9.8,y:63.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape}]},1).wait(1));

	// arm
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#4F330A","#8E590B"],[0,1],-2.6,-64.1,-8.1,-6.7).s().p("AhyFmQgLjZgChIQgChGABicQABh1AKhkID3ALQgcC0g1CAQg4CJANENIAEAKIh/AOg");
	this.shape_7.setTransform(15.5,47.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF9E83").s().p("Ah8gBIABgGID4AAIgCAPg");
	this.shape_8.setTransform(16.2,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#4F330A","#8E590B"],[0,1],0,-48.1,0,6.5).s().p("AhzEPQgBisgFhAQgGg9gBhbQgBhcALhKID3AIQgeDDg1B9QgzCAAKBdIAFAIIiAAKg");
	this.shape_9.setTransform(15.5,38.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BF9E83").s().p("Ah8gBIABgEID4AAIgCALg");
	this.shape_10.setTransform(16.2,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,6.5,31.2,80.6);


(lib.GO_RightForeArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// xtra
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF9E83").s().p("AiLgMQB0gfByANIAyAJIAAAFIgHAyQiWgWh8AXg");
	this.shape.setTransform(16,10.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(62,67,48,0.302)").ss(1,1,1).p("AhegIQBaAEBfgWIAEAgQhVAbhkgIg");
	this.shape_1.setTransform(9.6,83.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0C658C").s().p("AhaAZIgEghQBaAEBfgWIADAgQhBAVhJAAQgXAAgXgCg");
	this.shape_2.setTransform(9.6,83.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(62,67,48,0.302)").ss(1,1,1).p("AhegIQBaAEBfgWIAEAgQhVAbhkgIg");
	this.shape_3.setTransform(9.5,79.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#2D4A1B").s().p("AhaAZIgEghQBaAEBfgWIADAgQhBAVhJAAQgXAAgXgCg");
	this.shape_4.setTransform(9.5,79.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(62,67,48,0.302)").ss(1,1,1).p("AhdgIQBZAEBfgWIAEAgQhVAbhkgIg");
	this.shape_5.setTransform(9.9,67.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0C658C").s().p("AhaAZIgEghQBaAEBfgWIAEAgQhCAVhJAAQgXAAgXgCg");
	this.shape_6.setTransform(9.9,67.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4,p:{x:9.5,y:79.2}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1,p:{x:9.6,y:83.3}},{t:this.shape}]}).to({state:[{t:this.shape_4,p:{x:9.8,y:63.8}},{t:this.shape_1,p:{x:9.8,y:63.8}},{t:this.shape_6},{t:this.shape_5},{t:this.shape}]},1).wait(1));

	// arm
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#4F330A","#8E590B"],[0,1],-2.6,-64.1,-8.1,-6.7).s().p("AhyFmQgLjZgChIQgChGABicQABh1AKhkID3ALQgcC0g1CAQg4CJANENIAEAKIh/AOg");
	this.shape_7.setTransform(15.5,47.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BF9E83").s().p("Ah8gBIABgGID4AAIgCAPg");
	this.shape_8.setTransform(16.2,10.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#4F330A","#8E590B"],[0,1],0,-48.1,0,6.5).s().p("AhzEPQgBisgFhAQgGg9gBhbQgBhcALhKID3AIQgeDDg1B9QgzCAAKBdIAFAIIiAAKg");
	this.shape_9.setTransform(15.5,38.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BF9E83").s().p("Ah8gBIABgEID4AAIgCALg");
	this.shape_10.setTransform(16.2,9.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.shape_10},{t:this.shape_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,6.5,31.2,80.6);


(lib.GO_RightArmcopy = function() {
	this.initialize();

	// xtra
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#745B47").s().p("ABnAyIAAgBIgBgDQhAgZhDAHQgiACgjAEQA6gQA8gGIANgBQAVAAAVAEQAcAFAaAKIgCAIIgIAMIAAAAIAAABIAAgBIABACgAB3AwIAAABIAAABIAAAAIADgHgABUgVIAUACIACAFIgHAMIgQgDQg3gHg4AKIgPABQA9gYBCAEgAiAgWIAMgIIgJgVQArAVBUgIQgjAFglAHQgTAFgUAAIgTgBg");
	this.shape.setTransform(15.4,70.2);

	// xtra
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#745B47").s().p("ABnAyIAAgBIgBgDQhAgZhDAHQgiACgjAEQA6gQA8gGIANgBQAVAAAVAEQAcAFAaAKIgCAIIgIAMIAAAAIAAABIAAgBIABACgAB3AwIAAABIAAABIAAAAIADgHgABUgVIAUACIACAFIgHAMIgQgDQg3gHg4AKIgPABQA9gYBCAEgAiAgWIAMgIIgJgVQArAVBUgIQgjAFglAHQgTAFgUAAIgTgBg");
	this.shape_1.setTransform(15.4,70.2);

	// arm
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#8E745F","#BF9E83"],[0,1],35.2,7.1,-11,-5.2).s().p("AjZF1IgKgRQgagyAlgmQgNgTAOgTQALgRAegQIgJgVQgCgYAjgYIACgMQCBpdCtADQCgBniOC2IhmFRQABAQADAQQAGAkgaAWIAJAMQAIALABAKIgDAIIgHAMIAAgBIgBABIABAAIAAABIAFAVQADAOgZApIgIAMQABAcgIAYQgEAMgJAHQg2AuhQACIgFAAQhsAAANhygAA9EUIAAABIABABIAAAAIACgGg");
	this.shape_2.setTransform(21.2,47.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AAAAAIAAABIAAAAIAAgBgAAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(27.4,75.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAABIAAAAIABgDIgBAFg");
	this.shape_4.setTransform(27.5,74.9);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.7,-1.3,47.9,97.4);


(lib.GO_RightArm = function() {
	this.initialize();

	// xtra
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#745B47").s().p("ABnAyIAAgBIgBgDQhAgZhDAHQgiACgjAEQA6gQA8gGIANgBQAVAAAVAEQAcAFAaAKIgCAIIgIAMIAAAAIAAABIAAgBIABACgAB3AwIAAABIAAABIAAAAIADgHgABUgVIAUACIACAFIgHAMIgQgDQg3gHg4AKIgPABQA9gYBCAEgAiAgWIAMgIIgJgVQArAVBUgIQgjAFglAHQgTAFgUAAIgTgBg");
	this.shape.setTransform(15.4,70.2);

	// xtra
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#745B47").s().p("ABnAyIAAgBIgBgDQhAgZhDAHQgiACgjAEQA6gQA8gGIANgBQAVAAAVAEQAcAFAaAKIgCAIIgIAMIAAAAIAAABIAAgBIABACgAB3AwIAAABIAAABIAAAAIADgHgABUgVIAUACIACAFIgHAMIgQgDQg3gHg4AKIgPABQA9gYBCAEgAiAgWIAMgIIgJgVQArAVBUgIQgjAFglAHQgTAFgUAAIgTgBg");
	this.shape_1.setTransform(15.4,70.2);

	// arm
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#8E745F","#BF9E83"],[0,1],35.2,7.1,-11,-5.2).s().p("AjZF1IgKgRQgagyAlgmQgNgTAOgTQALgRAegQIgJgVQgCgYAjgYIACgMQCBpdCtADQCgBniOC2IhmFRQABAQADAQQAGAkgaAWIAJAMQAIALABAKIgDAIIgHAMIAAgBIACgGIgDAEIAAABIABABIAAAAIgBABIABAAIAAABIAFAVQADAOgZApIgIAMQABAcgIAYQgEAMgJAHQg2AuhQACIgFAAQhsAAANhyg");
	this.shape_2.setTransform(21.2,47.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#990000").s().p("AAAAAIAAABIAAAAIAAgBgAAAAAIAAAAIAAAAg");
	this.shape_3.setTransform(27.4,75.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAAABIAAAAIABgDIgBAFg");
	this.shape_4.setTransform(27.5,74.9);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.7,-1.3,47.9,97.4);


(lib.GO_Right_handcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#583705").ss(1,1,1).p("Ag8hkQgBAdABAaQABAvAHArQADARAEAQAA+BYIgWhYIgHhvAgShvIAABzIAWBs");
	this.shape.setTransform(9.7,42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E590B").s().p("AgYEVIgIgiIgXhsIAAh1IAAB1IAXBsQgQAQgRgGQgNgVgFgXIgGghQgHgrgCgxIAAgSIABglIgBAlIAAASQACAxAHArIAGAhQgPAQgPgMQgTg3gBhKQAAgzACgcIBIkaICDgEIAAAAIA+EOIgHBrIgFAWQgZAQgSgeIAChoIgYgzIgJBFQAAAnACAbQABAWAKAzQAHApAEAOQgPAZgbgTIgGABIAJAzQgQAMgRAAQgLAAgNgFgAADCCIAVBZIgVhZIgGhwgAggDzgAhTDRIAAAAg");
	this.shape_1.setTransform(13.4,28.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#583705").ss(1,1,1).p("AgMj7QAHCVA6AMAgLD8IAAhoIgHh0AAnDjIAAhaIgHhoAgvDTIgFiv");
	this.shape_2.setTransform(12.6,28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E590B").s().p("AgkEJIAAgUQgaAEgGgMQgGgMACgVIgFivIAFCvQgdAQgFgnIAAgtIgOhmQgOhZAIhgQAIhfArgcICAgFIACgBIABACIBKEQIgYB+QgZARgSgeIAChpIgWgyIANBYIAACuQgPAagbgUIAAhaIgHhnIAHBnIAABaIADA0QgLAJgKAAQgPAAgRgQgAgkD1IAAhoIgHh0IAHB0gAAchhQg5gMgIiUQAICUA5AMgAhIDMg");
	this.shape_3.setTransform(15,28.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#583705").ss(1,1,1).p("AA9BwQgFANgSADIg9hcIglheIAAhF");
	this.shape_4.setTransform(14,36.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E590B").s().p("AgiDfIg8hkIgch0IApkMIgBgLQB5AEAAABIA/B5IAVB7IgTBnQgQAAgSgTQgRgUACgyQADg0gngpIgfA1IAFA+IASBBQAqAwgDAdQgEAcgHALQgFANgRADIg9hdIglhfIAAhDIAABDIAlBfIA9BdQARgDAFgNQAaApgqAmg");
	this.shape_5.setTransform(16.1,27.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8E590B").s().p("Ag7ELIAAjNIgbC6QgYAZgWghIAai/IgnCgQgoAVgGglIAvinQAJh3Aph8IAYgvIB/gLIBbDBIALBPIAhA8QgIAigjgaQgpg3gTg4QgVgPgQgBQgWAqAFBIIAOCzQgOAYgbgRIgUisIgKDMQgHAGgIAAQgKAAgMgJg");
	this.shape_6.setTransform(14.6,27.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIABAA");
	this.shape_7.setTransform(10.7,38.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#583705").ss(1,1,1).p("ABaAQQg3gkgkhDIgGhZAAuAvIgIgeQgYgIgeARQgEA2AIAzAAuAvIAcgIIASAZAA8BmIg/AAQgSgdAagPIApgLAhbBoQgDgkACglQAdgQAVAHIAbBtIAHAcQggAcgngQQgDgMgDgMQgEgWgCgVgAiLAiQARgHANAFIASBIABNCpQAAAAAAAAIgRhDAB+gGIgkAWACMAvIgYA2Ig4ABABKAnIAQgX");
	this.shape_8.setTransform(12.2,25.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8E590B").s().p("ABqEOIgjiPIAAgBIgRhDIA4AAIAYg3IgYA3Ig4AAIARBDIAAABQgkAfgqgTQgHgZgEgaQgGgjAAgkIACgfIABgBIABAAIABgBIABgBQASgJAPAAIABAAIAAAAQAHAAAGABIACABIAAAAIABAAIAIAcIgoAMQgQAIAAAPQAAAJAHALIA/AAIg/AAQgHgLAAgJQAAgPAQgIIAogMIgIgcIgBAAIAAAAIgCgBQgGgBgHAAIAAAAIgBAAQgPAAgSAJIgBABIgBABIgBAAIgBABIgCAfQAAAkAGAjIgDAAIgbhqIAAAAIAAAAIgCgBQgGgCgGAAIAAAAIgBAAQgPABgRAIIgCABIAAABIgBAAIgBAYQAAAYACAXQgCgXAAgYIABgYIABAAIAAgBIACgBQARgIAPgBIABAAIAAAAQAGAAAGACIACABIAAAAIAAAAIAbBqIAHAdQggAcgngQIgGgZQgEgVgCgWQACAWAEAVQgZAUgdgNQgOg3ADg5IALgGIAGhBQAJh1BCg0IAJgvICMAAIAABCIBJCoIgYA6IAXEFQgKAYgNAAQgNAAgPgTgAhzgIIASBFIgShFIgBgBIgBAAIgKgBIAAAAIgBAAQgGAAgHACIgEABIAEgBQAHgCAGAAIABAAIAAAAIAKABIABAAIABABIAAAAgABWAVIgSgWIAQgYQg3glgkhDIgGhaIAGBaQAkBDA3AlIgQAYIgcAFIAcgFgABUgZIAkgXgAhbBoIAAAAgABUgZIAAAAg");
	this.shape_9.setTransform(12.8,29.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#583705").ss(1,1,1).p("AgFANIgQgcAAWARIgMgh");
	this.shape_10.setTransform(8.6,30.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8E590B").s().p("AgVC8IgWhDIgMgjIAMAjIgcgEIgQgeIAQAeIgSgCIgbgbIgagNIAAgDIAHg5QALhWAXhFIAYgvICAgKIBaDAQAEAHgEANQgGATgYAaQgTgBgfgTQADgPgEgKQgCgGgEgEIgGAKQgZAvAFBDIAFA1QgPAQgQAAQgKAAgNgKg");
	this.shape_11.setTransform(15.3,19.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#583705").ss(1,1,1).p("AglgmQAEADAEADIAGAMIAGAMAACAtIAkgoIgIgxAgXgUIgKAO");
	this.shape_12.setTransform(19.2,25.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8E590B").s().p("ABFCqIAZgRIASg5IgVhfIAABTIgmBGIguAiQgYgHANgnIAbgVIATgwIABhEIgQBAIgjAoQgUALgOgXIgDgPIAkgpIgIgxIAIAxIgkApQgRAFgSgKIgYggIgFgiQAGgYASALQgzgqgPhMQgIgoABgrIB5gJIAUAvICWCGIAaB6IgaBQIg+AqQghgVAfgWgAhSAdIAKgPgAhOACIAGAMIAGAMIgGgMIgGgMIgHgEIAHAEg");
	this.shape_13.setTransform(24.1,22.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#583705").ss(1,1,1).p("AAAgGIAKgLAgJArIAIhU");
	this.shape_14.setTransform(26.8,22.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8E590B").s().p("AAOCqQgXgCgIgOQgMAHgLADQgLADgKgBQgMgDgKgIQgLgIgJgNQghAGgLgRQgDgGgBgHIAAgKIgBAAIAGgrIAIgzQARhPAihXICAgKIBsCIQALAtgTAfIgkApIAAAoQAAAVgIAHQgTAOgWgOQgPAUgWAAIgFgBgABfBfIAIhWgABnAsIAMgLg");
	this.shape_15.setTransform(16.2,17.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8E590B").s().p("AgGCqQgZgCgJgOQgLAHgLADQgLADgKgBQgMgDgKgIQgLgIgJgNQghAGgLgRQgCgFgBgGIgCAAIAAgMIAEggQAOhrAvh5ICAgKIBrCIIAjBRIAOByQgdAGgVgSQgOgrAEgTIgbg8IgGBnQgBAPgHAGQgSAOgWgOQgPAUgUAAIgFgBg");
	this.shape_16.setTransform(18.5,17.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#583705").ss(1,1,1).p("AglgmQAEADAEADIAGAMIgKAOAACAtIAkgoIgIgxAgXgUIAGAM");
	this.shape_17.setTransform(19.2,25.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8E590B").s().p("ABFCqIAZgRIASg5IgVhfIAABTIgmBGIguAiQgYgHANgnIAbgVIATgwIABhEIgQBAIgjAoQgUALgOgXIgDgPIAkgpIgIgxIAIAxIgkApQgRAFgSgKIgYggIgFgiQAGgYASALQgzgqgPhMQgIgoABgrIB5gJIAUAvICWCGIAaB6IgaBQIg+AqQghgVAfgWgAhSAdIAKgPIgGgMIgHgEIAHAEIAGAMgAhCAaIgGgMg");
	this.shape_18.setTransform(24.1,22.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#583705").ss(1,1,1).p("AgxAnQgCgOgCgOAAWAXQAEAZAHAZABxA9IgGgYAhnhIIgJBJ");
	this.shape_19.setTransform(8,35.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8E590B").s().p("ABpEOIgjiPQgkAfgqgTIgGgWQggAcgogQIgFgZQgZAUgegNQgFgWgDgWQgFgjACghIAMgGIAFhBQAKh1BCg0IAIgvICMAAIAABCIBKCoQACAVgJARQgGALgMAHIACATIACAQIAUDkQgKAYgOAAQgMAAgQgTg");
	this.shape_20.setTransform(12.3,28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.6,26.9,56.5);


(lib.GO_Right_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#583705").ss(1,1,1).p("AgShvIAABzIAWBsAA+BYIgWhYIgHhvAg8hkQgBAdABAaQABAvAHArQADARAEAQ");
	this.shape.setTransform(9.7,42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E590B").s().p("AgYEVIgIgiIgXhsIAAh1IAAB1IAXBsQgQAQgRgGQgNgVgFgXIgGghQgHgrgCgxIAAgSIABglIgBAlIAAASQACAxAHArIAGAhQgPAQgPgMQgTg3gBhKQAAgzACgcIBIkaICDgEIAAAAIA+EOIgHBrIgFAWQgZAQgSgeIAChoIgYgzIgJBFQAAAnACAbQABAWAKAzQAHApAEAOQgPAZgbgTIgGABIAJAzQgQAMgRAAQgLAAgNgFgAADCCIAVBZIgVhZIgGhwgAggDzgAhTDRIAAAAg");
	this.shape_1.setTransform(13.4,28.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#583705").ss(1,1,1).p("AgMj7QAHCVA6AMAgvDTIgFivAAnDjIAAhaIgHhoAgLD8IAAhoIgHh0");
	this.shape_2.setTransform(12.6,28);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E590B").s().p("AgkEJIAAgUQgaAEgGgMQgGgMACgVIgFivIAFCvQgdAQgFgnIAAgtIgOhmQgOhZAIhgQAIhfArgcICAgFIACgBIABACIBKEQIgYB+QgZARgSgeIAChpIgWgyIANBYIAACuQgPAagbgUIAAhaIgHhnIAHBnIAABaIADA0QgLAJgKAAQgPAAgRgQgAgkD1IAAhoIgHh0IAHB0gAAchhQg5gMgIiUQAICUA5AMgAhIDMg");
	this.shape_3.setTransform(15,28.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#583705").ss(1,1,1).p("AA9BwQgFANgSADIg9hcIglheIAAhF");
	this.shape_4.setTransform(14,36.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E590B").s().p("AgiDfIg8hkIgch0IApkMIgBgLQB5AEAAABIA/B5IAVB7IgTBnQgQAAgSgTQgRgUACgyQADg0gngpIgfA1IAFA+IASBBQAqAwgDAdQgEAcgHALQgFANgRADIg9hdIglhfIAAhDIAABDIAlBfIA9BdQARgDAFgNQAaApgqAmg");
	this.shape_5.setTransform(16.1,27.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8E590B").s().p("Ag7ELIAAjNIgbC6QgYAZgWghIAai/IgnCgQgoAVgGglIAvinQAJh3Aph8IAYgvIB/gLIBbDBIALBPIAhA8QgIAigjgaQgpg3gTg4QgVgPgQgBQgWAqAFBIIAOCzQgOAYgbgRIgUisIgKDMQgHAGgIAAQgKAAgMgJg");
	this.shape_6.setTransform(14.6,27.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIABAA");
	this.shape_7.setTransform(10.7,38.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#583705").ss(1,1,1).p("ABaAQQg3gkgkhDIgGhZAAuAvIgIgeQgYgIgeARQgEA2AIAzAAuAvIAcgIIAQgXAA8BmIg/AAQgSgdAagPIApgLAiLAiQARgHANAFIASBIQgDgkACglQAdgQAVAHIAbBtIAHAcQggAcgngQQgDgMgDgMQgEgWgCgVABNCpQAAAAAAAAIgRhDACMAvIgYA2Ig4ABAB+gGIgkAWABKAnIASAZ");
	this.shape_8.setTransform(12.2,25.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8E590B").s().p("ABqEOIgjiPIAAgBIgRhDIA4AAIAYg3IgYA3Ig4AAIARBDIAAABQgkAfgqgTQgHgZgEgaQgGgjAAgkIACgfIABgBIABAAIABgBIABgBQASgJAPAAIABAAIAAAAQAHAAAGABIACABIAAAAIABAAIAIAcIgoAMQgQAIAAAPQAAAJAHALIA/AAIg/AAQgHgLAAgJQAAgPAQgIIAogMIgIgcIgBAAIAAAAIgCgBQgGgBgHAAIAAAAIgBAAQgPAAgSAJIgBABIgBABIgBAAIgBABIgCAfQAAAkAGAjIgDAAIgbhqIAAAAIAAAAIgCgBQgGgCgGAAIAAAAIgBAAQgPABgRAIIgCABIAAABIgBAAIgBAYQAAAYACAXIgShFIgBgBIgBAAIgKgBIAAAAIgBAAQgGAAgHACIgEABIAGhBQAJh1BCg0IAJgvICMAAIAABCIBJCoIgYA6IAXEFQgKAYgNAAQgNAAgPgTgABEgBIASAWIgSgWIAQgYQg3glgkhDIgGhaIAGBaQAkBDA3AlIgQAYIgcAFIAcgFgABUgZIAkgXgAhVCBIgGgZQgEgVgCgWQACAWAEAVQgZAUgdgNQgOg3ADg5IALgGIAEgBQAHgCAGAAIABAAIAAAAIAKABIABAAIABABIASBFQgCgXAAgYIABgYIABAAIAAgBIACgBQARgIAPgBIABAAIAAAAQAGAAAGACIACABIAAAAIAAAAIAbBqIAHAdQgUARgYAAQgNAAgOgFgAhbBoIAAAAgAA2A7gABUgZIAAAAg");
	this.shape_9.setTransform(12.8,29.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#583705").ss(1,1,1).p("AgFANIgQgcAAWARIgMgh");
	this.shape_10.setTransform(8.6,30.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8E590B").s().p("AgVC8IgWhDIgMgjIAMAjIgcgEIgQgeIAQAeIgSgCIgbgbIgagNIAAgDIAHg5QALhWAXhFIAYgvICAgKIBaDAQAEAHgEANQgGATgYAaQgTgBgfgTQADgPgEgKQgCgGgEgEIgGAKQgZAvAFBDIAFA1QgPAQgQAAQgKAAgNgKg");
	this.shape_11.setTransform(15.3,19.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#583705").ss(1,1,1).p("AglgmQAEADAEADIAGAMIgKAOAACAtIAkgoIgIgxAgXgUIAGAM");
	this.shape_12.setTransform(19.2,25.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8E590B").s().p("ABFCqIAZgRIASg5IgVhfIAABTIgmBGIguAiQgYgHANgnIAbgVIATgwIABhEIgQBAIgjAoQgUALgOgXIgDgPIAkgpIgIgxIAIAxIgkApQgRAFgSgKIgYggIgFgiQAGgYASALQgzgqgPhMQgIgoABgrIB5gJIAUAvICWCGIAaB6IgaBQIg+AqQghgVAfgWgAhSAdIAKgPIgGgMIgHgEIAHAEIAGAMgAhCAaIgGgMg");
	this.shape_13.setTransform(24.1,22.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#583705").ss(1,1,1).p("AAAgGIAKgLAgJArIAIhU");
	this.shape_14.setTransform(26.8,22.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8E590B").s().p("AAOCqQgXgCgIgOQgMAHgLADQgLADgKgBQgMgDgKgIQgLgIgJgNQghAGgLgRQgDgGgBgHIAAgKIgBAAIAGgrIAIgzQARhPAihXICAgKIBsCIQALAtgTAfIgkApIAAAoQAAAVgIAHQgTAOgWgOQgPAUgWAAIgFgBgABfBfIAIhWgABnAsIAMgLg");
	this.shape_15.setTransform(16.2,17.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8E590B").s().p("AgGCqQgZgCgJgOQgLAHgLADQgLADgKgBQgMgDgKgIQgLgIgJgNQghAGgLgRQgCgFgBgGIgCAAIAAgMIAEggQAOhrAvh5ICAgKIBrCIIAjBRIAOByQgdAGgVgSQgOgrAEgTIgbg8IgGBnQgBAPgHAGQgSAOgWgOQgPAUgUAAIgFgBg");
	this.shape_16.setTransform(18.5,17.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#583705").ss(1,1,1).p("AglgmQAEADAEADIAGAMIAGAMAACAtIAkgoIgIgxAgXgUIgKAO");
	this.shape_17.setTransform(19.2,25.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8E590B").s().p("ABFCqIAZgRIASg5IgVhfIAABTIgmBGIguAiQgYgHANgnIAbgVIATgwIABhEIgQBAIgjAoQgUALgOgXIgDgPIAkgpIgIgxIAIAxIgkApQgRAFgSgKIgYggIgFgiQAGgYASALQgzgqgPhMQgIgoABgrIB5gJIAUAvICWCGIAaB6IgaBQIg+AqQghgVAfgWgAhSAdIAKgPgAhOACIAGAMIAGAMIgGgMIgGgMIgHgEIAHAEg");
	this.shape_18.setTransform(24.1,22.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#583705").ss(1,1,1).p("ABxA9IgGgYAAWAXQAEAZAHAZAgxAnQgCgOgCgOAhnhIIgJBJ");
	this.shape_19.setTransform(8,35.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8E590B").s().p("ABpEOIgjiPQgkAfgqgTIgGgWQggAcgogQIgFgZQgZAUgegNQgFgWgDgWQgFgjACghIAMgGIAFhBQAKh1BCg0IAIgvICMAAIAABCIBKCoQACAVgJARQgGALgMAHIACATIACAQIAUDkQgKAYgOAAQgMAAgQgTg");
	this.shape_20.setTransform(12.3,28.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]},1).to({state:[{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_13},{t:this.shape_12}]},1).to({state:[{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_20},{t:this.shape_19}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0.6,26.9,56.5);


(lib.GO_pupilscopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AAGALQgFACgDgCQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADg");
	this.shape.setTransform(41.3,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCALQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADIgGABIgCgBg");
	this.shape_1.setTransform(41.3,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AARAgQgOAIgNgFQgPgFgHgNQgHgOAFgNQAFgOAOgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgOAHg");
	this.shape_2.setTransform(39.1,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKAjQgPgFgHgNQgHgOAFgNQAEgOAPgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgPAHQgIAFgIAAQgFAAgFgCg");
	this.shape_3.setTransform(39.1,5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.5,1,1).p("AAIAJQgEAEgEAAQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEg");
	this.shape_4.setTransform(6.1,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAANQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_5.setTransform(6.1,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("AgdAaQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAQgSgBgLgNg");
	this.shape_6.setTransform(4.1,4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAAoQgSgBgLgNQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAIAAAAg");
	this.shape_7.setTransform(4.1,4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.5,1,1).p("AAGALQgFACgDgCQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADg");
	this.shape_8.setTransform(41.3,4.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCALQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADIgGABIgCgBg");
	this.shape_9.setTransform(41.3,4.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.5,1,1).p("AARAgQgOAIgNgFQgPgFgHgNQgHgOAFgNQAFgOAOgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgOAHg");
	this.shape_10.setTransform(39.1,5.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKAjQgPgFgHgNQgHgOAFgNQAEgOAPgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgPAHQgIAFgIAAQgFAAgFgCg");
	this.shape_11.setTransform(39.1,5.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.5,1,1).p("AAIAJQgEAEgEAAQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEg");
	this.shape_12.setTransform(6.1,3.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAANQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_13.setTransform(6.1,3.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.5,1,1).p("AgdAaQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAQgSgBgLgNg");
	this.shape_14.setTransform(4.1,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAAAoQgSgBgLgNQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAIAAAAg");
	this.shape_15.setTransform(4.1,4.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.5,1,1).p("AAGALQgFACgDgCQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADg");
	this.shape_16.setTransform(41.3,4.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCALQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADIgGABIgCgBg");
	this.shape_17.setTransform(41.3,4.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.5,1,1).p("AARAgQgOAIgNgFQgPgFgHgNQgHgOAFgNQAFgOAOgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgOAHg");
	this.shape_18.setTransform(39.1,5.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKAjQgPgFgHgNQgHgOAFgNQAEgOAPgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgPAHQgIAFgIAAQgFAAgFgCg");
	this.shape_19.setTransform(39.1,5.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.5,1,1).p("AAIAJQgEAEgEAAQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEg");
	this.shape_20.setTransform(6.1,3.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAANQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_21.setTransform(6.1,3.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.5,1,1).p("AgdAaQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAQgSgBgLgNg");
	this.shape_22.setTransform(4.1,4.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAAAoQgSgBgLgNQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAIAAAAg");
	this.shape_23.setTransform(4.1,4.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.5,1,1).p("AAGALQgFACgDgCQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADg");
	this.shape_24.setTransform(41.3,4.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCALQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADIgGABIgCgBg");
	this.shape_25.setTransform(41.3,4.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(0.5,1,1).p("AARAgQgOAIgNgFQgPgFgHgNQgHgOAFgNQAFgOAOgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgOAHg");
	this.shape_26.setTransform(39.1,5.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgKAjQgPgFgHgNQgHgOAFgNQAEgOAPgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgPAHQgIAFgIAAQgFAAgFgCg");
	this.shape_27.setTransform(39.1,5.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.5,1,1).p("AAIAJQgEAEgEAAQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEg");
	this.shape_28.setTransform(6.1,3.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAAANQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_29.setTransform(6.1,3.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.5,1,1).p("AgdAaQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAQgSgBgLgNg");
	this.shape_30.setTransform(4.1,4.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAAAoQgSgBgLgNQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAIAAAAg");
	this.shape_31.setTransform(4.1,4.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(0.5,1,1).p("AAGALQgFACgDgCQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADg");
	this.shape_32.setTransform(41.3,4.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgCALQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADIgGABIgCgBg");
	this.shape_33.setTransform(41.3,4.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.5,1,1).p("AARAgQgOAIgNgFQgPgFgHgNQgHgOAFgNQAFgOAOgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgOAHg");
	this.shape_34.setTransform(39.1,5.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgKAjQgPgFgHgNQgHgOAFgNQAEgOAPgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgPAHQgIAFgIAAQgFAAgFgCg");
	this.shape_35.setTransform(39.1,5.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.5,1,1).p("AAIAJQgEAEgEAAQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEg");
	this.shape_36.setTransform(6.1,3.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAAANQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_37.setTransform(6.1,3.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.5,1,1).p("AgdAaQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAQgSgBgLgNg");
	this.shape_38.setTransform(4.1,4.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAAAoQgSgBgLgNQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAIAAAAg");
	this.shape_39.setTransform(4.1,4.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.5,1,1).p("AAGALQgFACgDgCQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADg");
	this.shape_40.setTransform(41.3,4.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgCALQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADIgGABIgCgBg");
	this.shape_41.setTransform(41.3,4.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.5,1,1).p("AARAgQgOAIgNgFQgPgFgHgNQgHgOAFgNQAFgOAOgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgOAHg");
	this.shape_42.setTransform(39.1,5.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgKAjQgPgFgHgNQgHgOAFgNQAEgOAPgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgPAHQgIAFgIAAQgFAAgFgCg");
	this.shape_43.setTransform(39.1,5.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.5,1,1).p("AAIAJQgEAEgEAAQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEg");
	this.shape_44.setTransform(6.1,3.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAAANQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_45.setTransform(6.1,3.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.5,1,1).p("AgdAaQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAQgSgBgLgNg");
	this.shape_46.setTransform(4.1,4.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAAAoQgSgBgLgNQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAIAAAAg");
	this.shape_47.setTransform(4.1,4.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(0.5,1,1).p("AAGALQgFACgDgCQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADg");
	this.shape_48.setTransform(41.3,4.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgCALQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADIgGABIgCgBg");
	this.shape_49.setTransform(41.3,4.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(0.5,1,1).p("AARAgQgOAIgNgFQgPgFgHgNQgHgOAFgNQAFgOAOgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgOAHg");
	this.shape_50.setTransform(39.1,5.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgKAjQgPgFgHgNQgHgOAFgNQAEgOAPgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgPAHQgIAFgIAAQgFAAgFgCg");
	this.shape_51.setTransform(39.1,5.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(0.5,1,1).p("AAIAJQgEAEgEAAQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEg");
	this.shape_52.setTransform(6.1,3.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAAANQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_53.setTransform(6.1,3.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(0.5,1,1).p("AgdAaQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAQgSgBgLgNg");
	this.shape_54.setTransform(4.1,4.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAAAoQgSgBgLgNQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAIAAAAg");
	this.shape_55.setTransform(4.1,4.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(0.5,1,1).p("AALgEQACAEgCADQgBAFgEADQgFACgDgCQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFg");
	this.shape_56.setTransform(41.3,4.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgCALQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADIgGABIgCgBg");
	this.shape_57.setTransform(41.3,4.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(0.5,1,1).p("AARAgQgOAIgNgFQgPgFgHgNQgHgOAFgNQAFgOAOgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgOAHg");
	this.shape_58.setTransform(39.1,5.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgKAjQgPgFgHgNQgHgOAFgNQAEgOAPgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgPAHQgIAFgIAAQgFAAgFgCg");
	this.shape_59.setTransform(39.1,5.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(0.5,1,1).p("AAJgIQAFAEgBAEQAAAFgFAEQgEAEgEAAQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEg");
	this.shape_60.setTransform(6.1,3.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAAANQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_61.setTransform(6.1,3.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(0.5,1,1).p("AgdAaQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAQgSgBgLgNg");
	this.shape_62.setTransform(4.1,4.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAAAoQgSgBgLgNQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAIAAAAg");
	this.shape_63.setTransform(4.1,4.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(0.5,1,1).p("AAHgGQAEADAAADQAAAEgEADQgEAEgDgBQgEAAgDgDQgDgEAAgDQAAgEAEgDQADgDADAAQAEABADADg");
	this.shape_64.setTransform(5.7,2.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAAAKQgEAAgDgDQgDgEAAgDQAAgEAEgDQADgDADAAQAEABADADQAEADAAADQAAAEgEADQgDAEgEAAIAAgBg");
	this.shape_65.setTransform(5.7,2.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(0.5,1,1).p("AgTAAQAAgRAHgLQAGgMAHABQAIABAGAMQAGAMgBAPQAAARgGALQgHALgHAAQgIgBgGgNQgGgMABgOg");
	this.shape_66.setTransform(6.3,4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAAAoQgIgBgGgNQgGgMABgOQAAgRAHgLQAGgMAHABQAIABAGAMQAGAMgBAPQAAARgGALQgGALgIAAIAAAAg");
	this.shape_67.setTransform(6.3,4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(0.5,1,1).p("AAHAHQgEAEgDgBQgEAAgDgDQgDgEAAgDQAAgEAEgDQADgDADAAQAEABADADQAEADAAADQAAAEgEADg");
	this.shape_68.setTransform(5.7,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_68}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.8,44.9,10.9);


(lib.GO_pupils = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("AAGALQgFACgDgCQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADg");
	this.shape.setTransform(41.3,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCALQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADIgGABIgCgBg");
	this.shape_1.setTransform(41.3,4.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AARAgQgOAIgNgFQgPgFgHgNQgHgOAFgNQAFgOAOgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgOAHg");
	this.shape_2.setTransform(39.1,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgKAjQgPgFgHgNQgHgOAFgNQAEgOAPgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgPAHQgIAFgIAAQgFAAgFgCg");
	this.shape_3.setTransform(39.1,5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.5,1,1).p("AAIAJQgEAEgEAAQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEg");
	this.shape_4.setTransform(6.1,3.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAAANQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_5.setTransform(6.1,3.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("AgdAaQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAQgSgBgLgNg");
	this.shape_6.setTransform(4.1,4.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAAAoQgSgBgLgNQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAIAAAAg");
	this.shape_7.setTransform(4.1,4.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.5,1,1).p("AAGALQgFACgDgCQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADg");
	this.shape_8.setTransform(41.3,4.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgCALQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADIgGABIgCgBg");
	this.shape_9.setTransform(41.3,4.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(0.5,1,1).p("AARAgQgOAIgNgFQgPgFgHgNQgHgOAFgNQAFgOAOgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgOAHg");
	this.shape_10.setTransform(39.1,5.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgKAjQgPgFgHgNQgHgOAFgNQAEgOAPgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgPAHQgIAFgIAAQgFAAgFgCg");
	this.shape_11.setTransform(39.1,5.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.5,1,1).p("AAIAJQgEAEgEAAQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEg");
	this.shape_12.setTransform(6.1,3.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAAANQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_13.setTransform(6.1,3.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(0.5,1,1).p("AgdAaQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAQgSgBgLgNg");
	this.shape_14.setTransform(4.1,4.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AAAAoQgSgBgLgNQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAIAAAAg");
	this.shape_15.setTransform(4.1,4.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(0.5,1,1).p("AAGALQgFACgDgCQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADg");
	this.shape_16.setTransform(41.3,4.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgCALQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADIgGABIgCgBg");
	this.shape_17.setTransform(41.3,4.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(0.5,1,1).p("AARAgQgOAIgNgFQgPgFgHgNQgHgOAFgNQAFgOAOgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgOAHg");
	this.shape_18.setTransform(39.1,5.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgKAjQgPgFgHgNQgHgOAFgNQAEgOAPgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgPAHQgIAFgIAAQgFAAgFgCg");
	this.shape_19.setTransform(39.1,5.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(0.5,1,1).p("AAIAJQgEAEgEAAQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEg");
	this.shape_20.setTransform(6.1,3.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAAANQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_21.setTransform(6.1,3.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(0.5,1,1).p("AgdAaQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAQgSgBgLgNg");
	this.shape_22.setTransform(4.1,4.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AAAAoQgSgBgLgNQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAIAAAAg");
	this.shape_23.setTransform(4.1,4.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.5,1,1).p("AAGALQgFACgDgCQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADg");
	this.shape_24.setTransform(41.3,4.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgCALQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADIgGABIgCgBg");
	this.shape_25.setTransform(41.3,4.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#000000").ss(0.5,1,1).p("AARAgQgOAIgNgFQgPgFgHgNQgHgOAFgNQAFgOAOgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgOAHg");
	this.shape_26.setTransform(39.1,5.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgKAjQgPgFgHgNQgHgOAFgNQAEgOAPgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgPAHQgIAFgIAAQgFAAgFgCg");
	this.shape_27.setTransform(39.1,5.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#000000").ss(0.5,1,1).p("AAIAJQgEAEgEAAQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEg");
	this.shape_28.setTransform(6.1,3.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAAANQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_29.setTransform(6.1,3.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(0.5,1,1).p("AgdAaQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAQgSgBgLgNg");
	this.shape_30.setTransform(4.1,4.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAAAoQgSgBgLgNQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAIAAAAg");
	this.shape_31.setTransform(4.1,4.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#000000").ss(0.5,1,1).p("AAGALQgFACgDgCQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADg");
	this.shape_32.setTransform(41.3,4.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgCALQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADIgGABIgCgBg");
	this.shape_33.setTransform(41.3,4.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#000000").ss(0.5,1,1).p("AARAgQgOAIgNgFQgPgFgHgNQgHgOAFgNQAFgOAOgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgOAHg");
	this.shape_34.setTransform(39.1,5.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgKAjQgPgFgHgNQgHgOAFgNQAEgOAPgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgPAHQgIAFgIAAQgFAAgFgCg");
	this.shape_35.setTransform(39.1,5.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#000000").ss(0.5,1,1).p("AAIAJQgEAEgEAAQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEg");
	this.shape_36.setTransform(6.1,3.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AAAANQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_37.setTransform(6.1,3.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#000000").ss(0.5,1,1).p("AgdAaQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAQgSgBgLgNg");
	this.shape_38.setTransform(4.1,4.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AAAAoQgSgBgLgNQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAIAAAAg");
	this.shape_39.setTransform(4.1,4.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#000000").ss(0.5,1,1).p("AAGALQgFACgDgCQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADg");
	this.shape_40.setTransform(41.3,4.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgCALQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADIgGABIgCgBg");
	this.shape_41.setTransform(41.3,4.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#000000").ss(0.5,1,1).p("AARAgQgOAIgNgFQgPgFgHgNQgHgOAFgNQAFgOAOgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgOAHg");
	this.shape_42.setTransform(39.1,5.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgKAjQgPgFgHgNQgHgOAFgNQAEgOAPgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgPAHQgIAFgIAAQgFAAgFgCg");
	this.shape_43.setTransform(39.1,5.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#000000").ss(0.5,1,1).p("AAIAJQgEAEgEAAQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEg");
	this.shape_44.setTransform(6.1,3.1);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAAANQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_45.setTransform(6.1,3.1);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.5,1,1).p("AgdAaQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAQgSgBgLgNg");
	this.shape_46.setTransform(4.1,4.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AAAAoQgSgBgLgNQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAIAAAAg");
	this.shape_47.setTransform(4.1,4.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#000000").ss(0.5,1,1).p("AAGALQgFACgDgCQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADg");
	this.shape_48.setTransform(41.3,4.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgCALQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADIgGABIgCgBg");
	this.shape_49.setTransform(41.3,4.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#000000").ss(0.5,1,1).p("AARAgQgOAIgNgFQgPgFgHgNQgHgOAFgNQAFgOAOgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgOAHg");
	this.shape_50.setTransform(39.1,5.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgKAjQgPgFgHgNQgHgOAFgNQAEgOAPgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgPAHQgIAFgIAAQgFAAgFgCg");
	this.shape_51.setTransform(39.1,5.3);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#000000").ss(0.5,1,1).p("AAIAJQgEAEgEAAQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEg");
	this.shape_52.setTransform(6.1,3.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AAAANQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_53.setTransform(6.1,3.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#000000").ss(0.5,1,1).p("AgdAaQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAQgSgBgLgNg");
	this.shape_54.setTransform(4.1,4.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AAAAoQgSgBgLgNQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAIAAAAg");
	this.shape_55.setTransform(4.1,4.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#000000").ss(0.5,1,1).p("AALgEQACAEgCADQgBAFgEADQgFACgDgCQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFg");
	this.shape_56.setTransform(41.3,4.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgCALQgFgBgDgFQgCgEACgDQACgFAEgCQAEgDADACQAGABACAFQACAEgCADQgBAFgEADIgGABIgCgBg");
	this.shape_57.setTransform(41.3,4.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#000000").ss(0.5,1,1).p("AARAgQgOAIgNgFQgPgFgHgNQgHgOAFgNQAFgOAOgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgOAHg");
	this.shape_58.setTransform(39.1,5.3);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgKAjQgPgFgHgNQgHgOAFgNQAEgOAPgIQAOgHAMAFQAPAEAHAOQAHAOgFANQgEAOgPAHQgIAFgIAAQgFAAgFgCg");
	this.shape_59.setTransform(39.1,5.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#000000").ss(0.5,1,1).p("AAJgIQAFAEgBAEQAAAFgFAEQgEAEgEAAQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEg");
	this.shape_60.setTransform(6.1,3.1);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AAAANQgFAAgEgFQgEgEAAgEQABgFAEgEQAEgDAEAAQAFAAAEAEQAFAEgBAEQAAAFgFAEQgDAEgFAAIAAAAg");
	this.shape_61.setTransform(6.1,3.1);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(0.5,1,1).p("AgdAaQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAQgSgBgLgNg");
	this.shape_62.setTransform(4.1,4.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AAAAoQgSgBgLgNQgLgMAAgOQABgRANgLQAMgMAQABQARABALAMQAMAMgBAPQgBARgMALQgNALgPAAIAAAAg");
	this.shape_63.setTransform(4.1,4.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#000000").ss(0.5,1,1).p("AAHgGQAEADAAADQAAAEgEADQgEAEgDgBQgEAAgDgDQgDgEAAgDQAAgEAEgDQADgDADAAQAEABADADg");
	this.shape_64.setTransform(5.7,2.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAAAKQgEAAgDgDQgDgEAAgDQAAgEAEgDQADgDADAAQAEABADADQAEADAAADQAAAEgEADQgDAEgEAAIAAgBg");
	this.shape_65.setTransform(5.7,2.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#000000").ss(0.5,1,1).p("AgTAAQAAgRAHgLQAGgMAHABQAIABAGAMQAGAMgBAPQAAARgGALQgHALgHAAQgIgBgGgNQgGgMABgOg");
	this.shape_66.setTransform(6.3,4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AAAAoQgIgBgGgNQgGgMABgOQAAgRAHgLQAGgMAHABQAIABAGAMQAGAMgBAPQAAARgGALQgGALgIAAIAAAAg");
	this.shape_67.setTransform(6.3,4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#000000").ss(0.5,1,1).p("AAHAHQgEAEgDgBQgEAAgDgDQgDgEAAgDQAAgEAEgDQADgDADAAQAEABADADQAEADAAADQAAAEgEADg");
	this.shape_68.setTransform(5.7,2.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_68}]},1).to({state:[{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_68}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.8,44.9,10.9);


(lib.GO_LeftForeArmcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// xtra
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#101319").s().p("AgbA0QALg9gGg2QAWgDAYgCQAJBLgLA+QgXgIgagJg");
	this.shape.setTransform(17.4,84.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF9E83").s().p("AiLgMQB0gfByANIAyAJIAAAFIgHAyQiWgWh8AXg");
	this.shape_1.setTransform(16,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3F0E7").s().p("AgGAIQgEgDAAgFQAAgDADgDQADgDAEgBQAEAAADADQADADABAEQAAAEgDADQgDAEgFAAIAAAAQgDAAgDgDg");
	this.shape_2.setTransform(27.6,85.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9F9C94").s().p("AAFASIgKgLIgVgQIAAgBIAVgHIAhAjg");
	this.shape_3.setTransform(29.9,92.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13161F").s().p("AgRAgIAFhSIAZgJQAMBFgNAyg");
	this.shape_4.setTransform(33,86.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3F0E7").s().p("AAIBWIgggmIAAhqIABgBIAqgaIAGAhIgZAKIgFBSIAdAcIgGASg");
	this.shape_5.setTransform(31.8,85.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BDBAB1").s().p("AgfA/IAAgXIADhXIAYgTIAGgHIAfAGIAAAAIgqAbIgBAAIAABrIgWAHg");
	this.shape_6.setTransform(30.4,84.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#191C25").s().p("AgYA6QgagIgZgJQAKg9gFg2QAYgEAYgBQAxgEAxAGIgYATIgDBXIgBAWIAAABIAAAKIAAABIAVATQgwgKgtgOg");
	this.shape_7.setTransform(22.2,85.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#101319").s().p("AgdA5QAHg5gNg1QAggGAigCQAKBIgIAzQgfAAgfgFg");
	this.shape_8.setTransform(18,84.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#191C25").s().p("AhLA6QAIg6gOg0QAggGAkgCQAqgDAtAEQgBA1AJA5QguALgvABQgfAAghgFg");
	this.shape_9.setTransform(22.6,84.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#191C25").s().p("AhKA6QAGg6gNg0QAggGAlgCQAqgDAsAEQgCA1AKA5QguALgvABQgfAAgggFg");
	this.shape_10.setTransform(22.4,83);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AARARIgKghIgXAQ");
	this.shape_11.setTransform(22,83.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#13161F").s().p("AgqApIgMgQIACgzIAQgTIBQAFIALARIgEA5IgNAMgAAQAZIgJggIgYANIAYgNg");
	this.shape_12.setTransform(22.1,82.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3F0E7").s().p("Ag8A/IgUgXIACgpIAAAGIgKgBIABgNIAKAAIABggIAYgdIB7AIIASAZIgHBaIgTASgAgvgaIgDAzIANAQIBQAFIAMgMIAEg6IgLgQIhQgFg");
	this.shape_13.setTransform(21.6,82.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#191C25").s().p("Agvg8QAsgDArAEQgCA1AKA5QguALgvABQAIgzgKhIg");
	this.shape_14.setTransform(25.8,83);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#13161F").s().p("AgpApIgNgQIACgzIAQgTIBPAFIAMAQIgEA6IgMAMgAAQAZIgKghIgXAPIAXgPg");
	this.shape_15.setTransform(23.3,52.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BF9E83").s().p("Ah4BEQghgaAMg2QBvh0ChB6QAbAYgXAzQihh0heBzg");
	this.shape_16.setTransform(17.7,9.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BF9E83").s().p("AiMAhIABgvQB0gfByANIAyAJIgBA8Qicgbh8AXg");
	this.shape_17.setTransform(17.3,12.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F3F0E7").s().p("AgGAIQgDgDgBgFQAAgDADgDQADgEAEAAQAEAAADADQAEADAAAEQABAEgEADQgDADgFABQgCAAgEgDg");
	this.shape_18.setTransform(18.7,84.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#101319").s().p("AgVhEQAXAHAaAKQgKA9AFA2QgXADgXACQgIhLAKg+g");
	this.shape_19.setTransform(28.9,85.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#13161F").s().p("AgLg7IAdAbIgFBTIgYAJQgNhFANgyg");
	this.shape_20.setTransform(13.3,83);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F3F0E7").s().p("AgYA1IAZgKIAEhSIgcgcIAGgSIAKAAIAgAlIAABrIgBAAIgpAbIgHghg");
	this.shape_21.setTransform(14.6,83.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#191C25").s().p("AgxBOIAYgTIAChXIABgWIAAgBIAAgKIAAgBIgVgTQAuAKAvAOQgKA8AJBNQgVACgWAAQgbAAgcgEg");
	this.shape_22.setTransform(21.6,84.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BDBAB1").s().p("AgfBFIAAAAIApgbIABgBIAAhqIAWgHIgBAKIAAAWIgDBXIgYAUIgFAGg");
	this.shape_23.setTransform(16,85.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9F9C94").s().p("AgagRIAVgBIAMAMIAVARIAAABIgWAHg");
	this.shape_24.setTransform(16.5,76.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#13161F").s().p("AgpApIgNgQIACgzIAQgTIBPAFIAMARIgEA5IgMAMgAAQAZIgKghIgXAOIAXgOg");
	this.shape_25.setTransform(21.9,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_1},{t:this.shape_8,p:{x:18,y:84.2}}]},1).to({state:[{t:this.shape_10},{t:this.shape_1},{t:this.shape_8,p:{x:17.8,y:83.1}}]},1).to({state:[{t:this.shape_1},{t:this.shape_8,p:{x:17.8,y:83.1}},{t:this.shape_14,p:{x:25.8,y:83}},{t:this.shape_13,p:{x:21.6,y:82.9}},{t:this.shape_12},{t:this.shape_11,p:{x:22,y:83.7}}]},1).to({state:[{t:this.shape_16,p:{y:9.9}},{t:this.shape_14,p:{x:27,y:52.9}},{t:this.shape_8,p:{x:19,y:53}},{t:this.shape_13,p:{x:22.8,y:52.8}},{t:this.shape_15},{t:this.shape_11,p:{x:23.2,y:53.6}}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_16,p:{y:9.2}},{t:this.shape_8,p:{x:17.6,y:49.2}},{t:this.shape_14,p:{x:25.6,y:49.1}},{t:this.shape_13,p:{x:21.5,y:49}},{t:this.shape_25},{t:this.shape_11,p:{x:21.8,y:49.8}}]},1).to({state:[{t:this.shape_22},{t:this.shape_24},{t:this.shape_23},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_1}]},1).wait(1));

	// arm
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#4F330A","#8E590B"],[0,1],-1.3,-60.3,-1.3,-5.7).s().p("AgwgzQg1iKgci7ID5gNQAJBoABB5QABCqgCBQQgCBMgKDhIh5ADQAMklg4iUg");
	this.shape_26.setTransform(16.9,50.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#4F330A","#8E590B"],[0,1],-0.8,-60.3,-0.8,-5.7).s().p("AABElQgXiIgqizQgqi1gSitID5gNQABAXgFBoQgFBogLCzQgMC0AdC6Ih6ADQABgzAAgug");
	this.shape_27.setTransform(16.4,50.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#4F330A","#8E590B"],[0,1],-1.5,-57.7,-1.5,-3.1).s().p("AhJgRQgliqgVikID5gMIALB5QAKBjgUCsQgUCuAQCeIh5ADQgejWgling");
	this.shape_28.setTransform(17.1,47.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#4F330A","#8E590B"],[0,1],-1.9,-39.2,-1.9,15.4).s().p("Ag2gGQg0hTgdhyQB8hvB9BnQAUA1ACBYQACBWgJA1QgIA1gKCJIh5ACQAMiyg4hZg");
	this.shape_29.setTransform(17.5,29.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#4F330A","#8E590B"],[0,1],-2.1,-60.3,-2.1,-5.7).s().p("Ag2g4Qg0iMgfi0ID6gNQAUBEAEBaQADBZgLCUQgKCWgJDnIh6ADQAKkzg0iLg");
	this.shape_30.setTransform(17.6,50.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#4F330A","#8E590B"],[0,1],-1.9,-34.3,-1.9,20.3).s().p("AgKDUQAChvgyhXQgxhUgchfQB8haB9BUQAUAqACBIQACBFgIAsQgJArgTBxg");
	this.shape_31.setTransform(17.5,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_28}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,8.3,33.1,86.4);


(lib.GO_LeftForeArm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// xtra
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#101319").s().p("AgbA0QALg9gGg2QAWgDAYgCQAJBLgLA+QgXgIgagJg");
	this.shape.setTransform(17.4,84.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF9E83").s().p("AiLgMQB0gfByANIAyAJIAAAFIgHAyQiWgWh8AXg");
	this.shape_1.setTransform(16,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F3F0E7").s().p("AgGAIQgEgDAAgFQAAgDADgDQADgDAEgBQAEAAADADQADADABAEQAAAEgDADQgDAEgFAAIAAAAQgDAAgDgDg");
	this.shape_2.setTransform(27.6,85.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9F9C94").s().p("AAFASIgKgLIgVgQIAAgBIAVgHIAhAjg");
	this.shape_3.setTransform(29.9,92.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#13161F").s().p("AgRAgIAFhSIAZgJQAMBFgNAyg");
	this.shape_4.setTransform(33,86.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F3F0E7").s().p("AAIBWIgggmIAAhqIABgBIAqgaIAGAhIgZAKIgFBSIAdAcIgGASg");
	this.shape_5.setTransform(31.8,85.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BDBAB1").s().p("AgfA/IAAgXIADhXIAYgTIAGgHIAfAGIAAAAIgqAbIgBAAIAABrIgWAHg");
	this.shape_6.setTransform(30.4,84.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#191C25").s().p("AgYA6QgagIgZgJQAKg9gFg2QAYgEAYgBQAxgEAxAGIgYATIgDBXIgBAWIAAABIAAAKIAAABIAVATQgwgKgtgOg");
	this.shape_7.setTransform(22.2,85.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#101319").s().p("AgdA5QAHg5gNg1QAggGAigCQAKBIgIAzQgfAAgfgFg");
	this.shape_8.setTransform(18,84.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#191C25").s().p("AhLA6QAIg6gOg0QAggGAkgCQAqgDAtAEQgBA1AJA5QguALgvABQgfAAghgFg");
	this.shape_9.setTransform(22.6,84.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#191C25").s().p("AhKA6QAGg6gNg0QAggGAlgCQAqgDAsAEQgCA1AKA5QguALgvABQgfAAgggFg");
	this.shape_10.setTransform(22.4,83);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#FFFFFF").ss(0.5,1,1).p("AARARIgKghIgXAQ");
	this.shape_11.setTransform(22,83.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#13161F").s().p("AgqApIgMgQIACgzIAQgTIBQAFIALARIgEA5IgNAMgAAQAZIgJggIgYANIAYgNg");
	this.shape_12.setTransform(22.1,82.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F3F0E7").s().p("Ag8A/IgUgXIACgpIAAAGIgKgBIABgNIAKAAIABggIAYgdIB7AIIASAZIgHBaIgTASgAgvgaIgDAzIANAQIBQAFIAMgMIAEg6IgLgQIhQgFg");
	this.shape_13.setTransform(21.6,82.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#191C25").s().p("Agvg8QAsgDArAEQgCA1AKA5QguALgvABQAIgzgKhIg");
	this.shape_14.setTransform(25.8,83);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#13161F").s().p("AgpApIgNgQIACgzIAQgTIBPAFIAMAQIgEA6IgMAMgAAQAZIgKghIgXAPIAXgPg");
	this.shape_15.setTransform(23.3,52.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#BF9E83").s().p("Ah4BEQghgaAMg2QBvh0ChB6QAbAYgXAzQihh0heBzg");
	this.shape_16.setTransform(17.7,9.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#BF9E83").s().p("AiMAhIABgvQB0gfByANIAyAJIgBA8Qicgbh8AXg");
	this.shape_17.setTransform(17.3,12.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F3F0E7").s().p("AgGAIQgDgDgBgFQAAgDADgDQADgEAEAAQAEAAADADQAEADAAAEQABAEgEADQgDADgFABQgCAAgEgDg");
	this.shape_18.setTransform(18.7,84.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#101319").s().p("AgVhEQAXAHAaAKQgKA9AFA2QgXADgXACQgIhLAKg+g");
	this.shape_19.setTransform(28.9,85.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#13161F").s().p("AgLg7IAdAbIgFBTIgYAJQgNhFANgyg");
	this.shape_20.setTransform(13.3,83);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F3F0E7").s().p("AgYA1IAZgKIAEhSIgcgcIAGgSIAKAAIAgAlIAABrIgBAAIgpAbIgHghg");
	this.shape_21.setTransform(14.6,83.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#191C25").s().p("AgxBOIAYgTIAChXIABgWIAAgBIAAgKIAAgBIgVgTQAuAKAvAOQgKA8AJBNQgVACgWAAQgbAAgcgEg");
	this.shape_22.setTransform(21.6,84.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BDBAB1").s().p("AgfBFIAAAAIApgbIABgBIAAhqIAWgHIgBAKIAAAWIgDBXIgYAUIgFAGg");
	this.shape_23.setTransform(16,85.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#9F9C94").s().p("AgagRIAVgBIAMAMIAVARIAAABIgWAHg");
	this.shape_24.setTransform(16.5,76.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#13161F").s().p("AgpApIgNgQIACgzIAQgTIBPAFIAMARIgEA5IgMAMgAAQAZIgKghIgXAOIAXgOg");
	this.shape_25.setTransform(21.9,49);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_1},{t:this.shape_8,p:{x:18,y:84.2}}]},1).to({state:[{t:this.shape_10},{t:this.shape_1},{t:this.shape_8,p:{x:17.8,y:83.1}}]},1).to({state:[{t:this.shape_1},{t:this.shape_8,p:{x:17.8,y:83.1}},{t:this.shape_14,p:{x:25.8,y:83}},{t:this.shape_13,p:{x:21.6,y:82.9}},{t:this.shape_12},{t:this.shape_11,p:{x:22,y:83.7}}]},1).to({state:[{t:this.shape_16,p:{y:9.9}},{t:this.shape_14,p:{x:27,y:52.9}},{t:this.shape_8,p:{x:19,y:53}},{t:this.shape_13,p:{x:22.8,y:52.8}},{t:this.shape_15},{t:this.shape_11,p:{x:23.2,y:53.6}}]},1).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_16,p:{y:9.2}},{t:this.shape_8,p:{x:17.6,y:49.2}},{t:this.shape_14,p:{x:25.6,y:49.1}},{t:this.shape_13,p:{x:21.5,y:49}},{t:this.shape_25},{t:this.shape_11,p:{x:21.8,y:49.8}}]},1).to({state:[{t:this.shape_22},{t:this.shape_24},{t:this.shape_23},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_1}]},1).wait(1));

	// arm
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#4F330A","#8E590B"],[0,1],-1.3,-60.3,-1.3,-5.7).s().p("AgwgzQg1iKgci7ID5gNQAJBoABB5QABCqgCBQQgCBMgKDhIh5ADQAMklg4iUg");
	this.shape_26.setTransform(16.9,50.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#4F330A","#8E590B"],[0,1],-0.8,-60.3,-0.8,-5.7).s().p("AABElQgXiIgqizQgqi1gSitID5gNQABAXgFBoQgFBogLCzQgMC0AdC6Ih6ADQABgzAAgug");
	this.shape_27.setTransform(16.4,50.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#4F330A","#8E590B"],[0,1],-1.5,-57.7,-1.5,-3.1).s().p("AhJgRQgliqgVikID5gMIALB5QAKBjgUCsQgUCuAQCeIh5ADQgejWgling");
	this.shape_28.setTransform(17.1,47.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#4F330A","#8E590B"],[0,1],-1.9,-39.2,-1.9,15.4).s().p("Ag2gGQg0hTgdhyQB8hvB9BnQAUA1ACBYQACBWgJA1QgIA1gKCJIh5ACQAMiyg4hZg");
	this.shape_29.setTransform(17.5,29.3);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#4F330A","#8E590B"],[0,1],-2.1,-60.3,-2.1,-5.7).s().p("Ag2g4Qg0iMgfi0ID6gNQAUBEAEBaQADBZgLCUQgKCWgJDnIh6ADQAKkzg0iLg");
	this.shape_30.setTransform(17.6,50.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#4F330A","#8E590B"],[0,1],-1.9,-34.3,-1.9,20.3).s().p("AgKDUQAChvgyhXQgxhUgchfQB8haB9BUQAUAqACBIQACBFgIAsQgJArgTBxg");
	this.shape_31.setTransform(17.5,24.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26}]}).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_28}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.9,8.3,33.1,86.4);


(lib.GO_LeftArmcopy = function() {
	this.initialize();

	// xtra
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#745B47").s().p("Ah2AyIAAAAIAAAAIAAAAIgIgMIgCgIQAugRAygCQBDAFBAASQgjgEgigCQhCgIhAAaIgCADIABAAIgSADgAh2AyIAAgBIAAAAIAAgBIAAgBIgCgEgAAdgDQhAgLg/ALIgHgLIACgFQBMgJBHAbIgPgCgABHgaQglgIgigFQBTAJArgVIgJAVIANAIIgUABQgUAAgTgFg");
	this.shape.setTransform(10.9,70.3);

	// arm
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAgCIAAACIABABIgBAAIAAABIAAABg");
	this.shape_1.setTransform(-1.2,75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AAAABIAAAAIAAAAgAAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(-1.1,75.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#8E745F","#BF9E83"],[0,1],-18.3,2.5,13.8,-2.7).s().p("AAOHKQgcgKgNgdIgcg/QgMgZACgNIAEgUIABgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIgCgEIACAHIAAABIgHgNIgDgIQABgKAIgLIAJgMQgagWAGgjQADgQAAgQIhllSQiOi2CghmQCugDCCJoQAjAZgCAXIgJAVQBCAlgZAiQAhAggTAaIgUATQgmBrhcABQgfAAgkgMgAg8Eog");
	this.shape_3.setTransform(5,45.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.8,-1.3,47.7,94);


(lib.GO_LeftArm = function() {
	this.initialize();

	// xtra
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#745B47").s().p("Ah2AyIgIgMIgCgIQAugRAygCQBDAFBAASQgjgEgigCQhCgIhAAaIgCADIABAAIgSADgAh2AyIAAAAIAAAAIAAAAIAAgBIAAAAIAAgBIAAgBIgCgEgAAdgDQhAgLg/ALIgHgLIACgFQBMgJBHAbIgPgCgABHgaQglgIgigFQBTAJArgVIgJAVIANAIIgUABQgUAAgTgFg");
	this.shape.setTransform(10.9,70.3);

	// arm
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAAgCIAAACIABABIgBAAIAAABIAAABg");
	this.shape_1.setTransform(-1.2,75);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#990000").s().p("AAAABIAAAAIAAAAgAAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(-1.1,75.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#8E745F","#BF9E83"],[0,1],-18.3,2.5,13.8,-2.7).s().p("AAOHKQgcgKgNgdIgcg/QgMgZACgNIAEgUIABgBIAAAAIAAgBIAAAAIAAgBIAAgBIAAgBIgCgEIACAHIAAABIgHgNIgDgIQABgKAIgLIAJgMQgagWAGgjQADgQAAgQIhllSQiOi2CghmQCugDCCJoQAjAZgCAXIgJAVQBCAlgZAiQAhAggTAaIgUATQgmBrhcABQgfAAgkgMgAg8Eog");
	this.shape_3.setTransform(5,45.6);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-18.8,-1.3,47.7,94);


(lib.GO_Left_handcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#583705").ss(1,1,1).p("AhNiFIgBgMIgCgPAgqCJIAWhZIAHhuAAmg+IAABzIgYBsABBB/QAEgQADgRQAHgrABgxQABgYgBgd");
	this.shape.setTransform(16.4,37.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E590B").s().p("AgaERIAJgzIgGgBQgbATgPgZIAIghQALguADgxQACgbAAgnIgLhVIgCAEIgBgPIABAPIACAMIgWAzIACBoQgSAegZgQIgMhYIgMgmIAAgaIBKj3IAAAAIADgGICAAKIBIEaQACAcAAAzQgBBKgTA3QgPAMgPgQIAGghQAHgrACgxIAAgSIgBglIABAlIAAASQgCAxgHArIgGAhQgFAXgNAVQgRAGgQgQIAXhsIAAh1IAAB1IgXBsIgIAiQgNAFgLAAQgRAAgQgMgAACCFIgTBZIAThZIAIhwg");
	this.shape_1.setTransform(14,28.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#583705").ss(1,1,1).p("Ag8BZQAFAMASADIAvg8IAnhWIAMg9");
	this.shape_2.setTransform(13.4,38.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E590B").s().p("AgmDAQAFAMARADIAwg8IAmhYIAMg7IgMA7IgmBYIgwA8QgRgDgFgMQgHgLgFgRQgEgQAngvIAcg9IAAhbIgfg1QgnAoADA1QACAygRATQgSAUgQgBIgThnIAVh7IA/h4QB4ACAAADIApENIgcB0Ig8BkIg5AxQgqglAagpg");
	this.shape_3.setTransform(11.3,28.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E590B").s().p("Ag7ELIAAjNIgbC6QgYAZgWghIAai/IgnCgQgoAVgGglIAvinQAJh3Aph8IAYgvIB/gLIBbDBIALBPIAhA8QgIAigjgaIgugwIgOg/QgVgPgQgBQgWAqAFBIIAOCzQgOAYgbgRIgUisIgKDMQgHAGgIAAQgKAAgMgJg");
	this.shape_4.setTransform(14.6,27.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AABAAIgBAA");
	this.shape_5.setTransform(9.7,34.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#583705").ss(1,1,1).p("ABUgIQgygigig9IgJgqAAqAOQANgBANADIASARAA4BDIg5ABQgSgYAngWQALgGALgCAA4BDIALAoQAAADABADIAEAQIAAAAQghAcgngRQgFgWgEgXQgHgvAEgwQAbgPAVAIIAGAVAiAAIQARgIAOAFIARBBQgEghACgiQAbgMATAHIAZBgIAGAaQgdAagkgPQgDgLgCgLQgDgTgCgUACBARIgVAyIg0AAABEAQIAQgYAB1geIghAW");
	this.shape_6.setTransform(10.9,25.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8E590B").s().p("ABfD1IggiCIAAAAIgEgQIgBgGIgLgnIA0gBIAVgyIgVAyIg0ABIg5AAQgFgHAAgHQAAgQAagQQALgGAMgBIAAAAIAJgBIAAAAIABAAIANABIACABIASARIgSgRIAQgYIgQAYIgCgBIgNgBIgBAAIAAAAIgJABIAAAAIgHgWIgBAAQgGgCgHgBIAAAAIgBABQgMAAgRAIIgBAAIgBABIAAAAIgBABIgBAAIgBAeQAAAhAFAfIgDgBIgZhgIAAAAIgCgBQgFgBgGAAIAAAAIgBAAQgOAAgRAJIgBAAIAAAXQAAAVACAWQgCgWAAgVIAAgXIABAAQARgJAOAAIABAAIAAAAQAGAAAFABIACABIAAAAIAZBgIAGAaQgdAagkgPIgFgWQgDgTgCgTQACATADATQgWASgbgMQgNgyADg0IAGgDIABgtQAAgNADgNQAGgcAIgbQAVg1AngkIAIgqIB7AUIAEAoIBDCYIgQAmIAAAAIgHAOIAZDoQgHAbgPAAQgLAAgRgRgAhqgHIARBAIgRhAIgBAAQgEgCgFAAIgBAAIAAAAQgJAAgKAFIgBAAIABAAQAKgFAJAAIAAAAIABAAQAFAAAEACIABAAgABLgWIAhgWgAgIh1QAhA9AyAiQgygighg9IgKgqgAgIB+QgGgWgDgXQgFgfAAghIABgeIABAAIABgBIAAAAIABgBIABAAQARgIAMAAIABgBIAAAAQAHABAGACIABAAIAHAWQgMABgLAGQgaAQAAAQQAAAHAFAHIA5AAIALAnIABAGIAEAQIAAAAQgUASgYAAQgOAAgNgHgAhUBfIAAAAgAAvA2gAAiABg");
	this.shape_7.setTransform(11.8,26.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIAAAA");
	this.shape_8.setTransform(16.6,32);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#583705").ss(1,1,1).p("ABZgcIgKAcIgEAJIgJAMQgHgCgIABQAAgIABgJQAMgEAKgCQgugigfg5IgKgqABCAVIAQAWAAnAXQgIACgIAEQgpAUAOAcIA5AAABMCIQgFgBgEgBQgBgBAAAAQgHgXgEgXQgBgFAAgFIAyAAIANgfIAJgTAAnAXQAGgCAGgBAhSCJQgCgSAAgSQAAgFAAgEQAAgpAIgqQAcgKASAIIALBgQAAACAAADIACAQIAAADIABAHAiFAuQAEgQAFgQQAYgGAOAKIACBKAgRB8QgChEADgvQAbgOAWAFIAGAXAB1AuIARA7");
	this.shape_9.setTransform(11.3,24.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8E590B").s().p("AgFC/QgHgWgIAAIAAgEIgBgzQAAgkACgcIABAAIABgBIABAAIABgBIAAAAQAPgJAOAAIABAAIAAAAQAHAAAHACIABABIAFAXIgPAGQgfAOAAAUQAAAHADAHIA6gBIg6ABQgDgHAAgHQAAgUAfgOIAPgGIANgDIgNADIgFgXIgBgBQgHgCgHAAIAAAAIgBAAQgOAAgPAJIAAAAIgBABIgBAAIgBABIgBAAQgCAcAAAkIABAzIgCgQIAAgFIgLhfIgCgCQgIgDgIAAIgBAAIAAAAQgKAAgMAEIgBAAIAAAAIAAAAIgDACIgBAAQgIApAAApIAAACIAAAIIgEAWQgcAPgZgUQAAgkAIgjQAEhVACgNQAGgxAVgtQATgkAbgOIAIgqIB8AUIADAoIBDCWIgWA2IAIBOIAEASQgcAXgjgJIgIgDIgCgBQgGgWgEgYIgBgKIAyAAIANgeIgNAeIgyAAIABAKQAEAYAGAWIACABIAIADIgGACIgBAAQgUARgXAAQgOAAgNgGgAByBYIARA6IgRg6IAJgUIgJAUgAhZA7IACBLIgChLIgBAAIAAgBIgBAAIAAAAIAAAAQgIgFgLAAIgBAAIAAAAQgHAAgIACIgBAAQgFAQgEARQAEgRAFgQIABAAQAIgCAHAAIAAAAIABAAQALAAAIAFIAAAAIAAAAIABAAIAAABIABAAIAAAAgAAzB2IgBAAgABPBUIgRgWgAA+A+IgBAAIgGgBIgBAAIAAAAIgDAAIgDABIABgSQAMgGAKgCQgughgeg3IgLgqIALAqQAeA3AuAhQgKACgMAGIgBASIADgBIADAAIAAAAIABAAIAGABIABAAgABMApIgFAJIgJAMIAJgMIAFgJIAKgegAhUCyQgDgSAAgSIAAgIIAAgCQAAgpAIgpIABAAIADgCIAAAAIAAAAIABAAQAMgEAKAAIAAAAIABAAQAIAAAIADIACACIALBfIAAAFIACAQIAAAEIABAHQgRALgSAAQgPAAgPgJgABICyIAAAAgAgUClgAhXCOIAAAAgAAjBBg");
	this.shape_10.setTransform(11.6,20.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#583705").ss(1,1,1).p("AgegqIAeAfIAagFAAAgLIAfA2");
	this.shape_11.setTransform(36.3,18.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8E590B").s().p("AhIB7IhdjqIgGg/IBvAAIgEAiQBiARA0BbIAeAfIAbgFIgbAFIgegfQABgZAYgGQAcAhAgAPIgEB6QgbAggVgKQgPAQgKAJQgLAJgPgNIgXARQgWAQgXgUQAEAHgdAFIgEAAQgWAAgVg0gACVA1Ighg2g");
	this.shape_12.setTransform(24.5,17.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#583705").ss(1,1,1).p("AAjgLIgLgNIgFAMAAYgYIAFgMIAAgBAADArIglgkIAEgy");
	this.shape_13.setTransform(10.5,24.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8E590B").s().p("AhvC5IgdhJIAKiAICJiTIAQgxIB2AGQgHAgAFAsQgCBRg0AwQAUgSALAXIgDAhIgVAjIgiAHIADAAQgLApgagJIgmgmIgWg9IAGBLIAYAuQAqAWgXAdIgtgYIgkg4IgQhcIgNBgIAXA3IADADQAqAggeAPgAATAqIAnAlIgnglIAEgxIgEAxgABaAXIgLgNIAFgLIABAAIgBAAIgFALIgFAMIAFgMgABPAKg");
	this.shape_14.setTransform(4.9,20.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#583705").ss(1,1,1).p("AgKATIAFggQAkgMAYAXAB2AOQgVgNgcAJIgEAZAhjACQACgPACgNQAegSAiAYAh0AJIALgX");
	this.shape_15.setTransform(9.5,21.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#724707").s().p("AgwApQgLgHgCgNQgCgNAMgEQAMgEAMgIIASgSIBHgVIAAABIAAACIgVAJQgQAUglAZQgEACgBAEIgEAfIgHABQgLAAgJgHg");
	this.shape_16.setTransform(-5.9,17.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8E590B").s().p("ABPCpIAMhUIgOgDQgHAngQAzQglAFgQgVIANhXIgXgFIgLBkQgVASgjgRQgChCAFgvIAAAAIAFgeIACgCQAMgGAMAAIAAAAIABAAQARAAASANIABABIgBgBQgSgNgRAAIgBAAIAAAAQgMAAgMAGIgCACIgFAeIgBgBIgQAIIAMgZIgMAZIgHBgQgwAUgEgwQgDggADgiIAFgfQABgEADgCQAogZAQgUIAUgJIABgCIABgCQAQgXAQgbIAUgiIAOgxQA/gkA3AqQAqCOgUBTIAHAGQgDAtgVBEIgNABQgXAAgMgPgABfA8IgEAZIAEgZIABAAIAEgCQAIgCAIAAIABAAIAAAAQAOAAALAHIABABIABAAIgBAAIgBgBQgLgHgOAAIAAAAIgBAAQgIAAgIACIgEACIgBAAIAAAAgAATAjIgFAiIAFgiIACgBIABAAQALgDAKAAIAAAAIAAAAQAUAAAPANIAAAAIACABIABABIgBgBIgCgBIAAAAQgPgNgUAAIAAAAIAAAAQgKAAgLADIgBAAIgCABIAAAAgAg/ghIAAAAIAAABg");
	this.shape_17.setTransform(6.8,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.1,57.1);


(lib.GO_Left_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#583705").ss(1,1,1).p("AhNiFIgBgMIgCgPAgqCJIAWhZIAHhuABBB/QAEgQADgRQAHgrABgxQABgYgBgdAAmg+IAABzIgYBs");
	this.shape.setTransform(16.4,37.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8E590B").s().p("AgaERIAJgzIgGgBQgbATgPgZIAIghQALguADgxQACgbAAgnIgLhVIgCAEIgBgPIABAPIACAMIgWAzIACBoQgSAegZgQIgMhYIgMgmIAAgaIBKj3IAAAAIADgGICAAKIBIEaQACAcAAAzQgBBKgTA3QgPAMgPgQIAGghQAHgrACgxIAAgSIgBglIABAlIAAASQgCAxgHArIgGAhQgFAXgNAVQgRAGgQgQIAXhsIAAh1IAAB1IgXBsIgIAiQgNAFgLAAQgRAAgQgMgAACCFIgTBZIAThZIAIhwg");
	this.shape_1.setTransform(14,28.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#583705").ss(1,1,1).p("Ag8BZQAFAMASADIAvg8IAnhWIAMg9");
	this.shape_2.setTransform(13.4,38.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E590B").s().p("AgmDAQAFAMARADIAwg8IAmhYIAMg7IgMA7IgmBYIgwA8QgRgDgFgMQgHgLgFgRQgEgQAngvIAcg9IAAhbIgfg1QgnAoADA1QACAygRATQgSAUgQgBIgThnIAVh7IA/h4QB4ACAAADIApENIgcB0Ig8BkIg5AxQgqglAagpg");
	this.shape_3.setTransform(11.3,28.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8E590B").s().p("Ag7ELIAAjNIgbC6QgYAZgWghIAai/IgnCgQgoAVgGglIAvinQAJh3Aph8IAYgvIB/gLIBbDBIALBPIAhA8QgIAigjgaIgugwIgOg/QgVgPgQgBQgWAqAFBIIAOCzQgOAYgbgRIgUisIgKDMQgHAGgIAAQgKAAgMgJg");
	this.shape_4.setTransform(14.6,27.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AABAAIgBAA");
	this.shape_5.setTransform(9.7,34.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#583705").ss(1,1,1).p("ABUgIQgygigig9IgJgqAAqAOQANgBANADIASARAA4BDIg5ABQgSgYAngWQALgGALgCAA4BDIALAoQAAADABADIAEAQIAAAAQghAcgngRQgFgWgEgXQgHgvAEgwQAbgPAVAIIAGAVAhQBGQgEghACgiQAbgMATAHIAZBgIAGAaQgdAagkgPQgDgLgCgLQgDgTgCgUgAiAAIQARgIAOAFIARBBACBARIgVAyIg0AAAB1geIghAWABEAQIAQgY");
	this.shape_6.setTransform(10.9,25.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8E590B").s().p("ABfD1IggiCIAAAAIgEgQIgBgGIgLgnIA0gBIAVgyIgVAyIg0ABIg5AAQgFgHAAgHQAAgQAagQQALgGAMgBIAAAAIAJgBIAAAAIABAAIANABIACABIASARIgSgRIAQgYIgQAYIgCgBIgNgBIgBAAIAAAAIgJABIAAAAIgHgWIgBAAQgGgCgHgBIAAAAIgBABQgMAAgRAIIgBAAIgBABIAAAAIgBABIgBAAIgBAeQAAAhAFAfIgDgBIAGAaQgdAagkgPIgFgWQgDgTgCgTQACATADATQgWASgbgMQgNgyADg0IAGgDIABgtQAAgNADgNQAGgcAIgbQAVg1AngkIAIgqIB7AUIAEAoIBDCYIgQAmIAAAAIgHAOIAZDoQgHAbgPAAQgLAAgRgRgAgtgQIAZBgIgZhgIAAAAIgCgBQgFgBgGAAIAAAAIgBAAQgOAAgRAJIgBAAIAAAXQAAAVACAWIgRhAIgBAAQgEgCgFAAIgBAAIAAAAQgJAAgKAFIgBAAIABAAQAKgFAJAAIAAAAIABAAQAFAAAEACIABAAIARBAQgCgWAAgVIAAgXIABAAQARgJAOAAIABAAIAAAAQAGAAAFABIACABIAAAAgABLgWIAhgWgAgIh1QAhA9AyAiQgygighg9IgKgqgAgIB+QgGgWgDgXQgFgfAAghIABgeIABAAIABgBIAAAAIABgBIABAAQARgIAMAAIABgBIAAAAQAHABAGACIABAAIAHAWQgMABgLAGQgaAQAAAQQAAAHAFAHIA5AAIALAnIABAGIAEAQIAAAAQgUASgYAAQgOAAgNgHgAhUBfIAAAAgAAvA2gAAiABg");
	this.shape_7.setTransform(11.8,26.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AAAAAIAAAA");
	this.shape_8.setTransform(16.6,32);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#583705").ss(1,1,1).p("ABZgcIgKAcIgEAJIgJAMIAQAWAAzAUQAAgIABgJQAMgEAKgCQgugigfg5IgKgqABCAVQgHgCgIABAAnAXQgIACgIAEQgpAUAOAcIA5AAABMCIQgFgBgEgBQgBgBAAAAQgHgXgEgXQgBgFAAgFIAyAAIANgfIARA7AAnAXQAGgCAGgBAhSCJQgCgSAAgSQAAgFAAgEQAAgpAIgqQAcgKASAIIALBgQAAACAAADIACAQIAAADIABAHAiFAuQAEgQAFgQQAYgGAOAKIACBKAgRB8QgChEADgvQAbgOAWAFIAGAXAB1AuIAJgT");
	this.shape_9.setTransform(11.3,24.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8E590B").s().p("AgFC/QgHgWgIAAIAAgEIgBgzQAAgkACgcIABAAIABgBIABAAIABgBIAAAAQAPgJAOAAIABAAIAAAAQAHAAAHACIABABIAFAXIgPAGQgfAOAAAUQAAAHADAHIA6gBIg6ABQgDgHAAgHQAAgUAfgOIAPgGIANgDIgNADIgFgXIgBgBQgHgCgHAAIAAAAIgBAAQgOAAgPAJIAAAAIgBABIgBAAIgBABIgBAAQgCAcAAAkIABAzIgCgQIAAgFIgLhfIgCgCQgIgDgIAAIgBAAIAAAAQgKAAgMAEIgBAAIAAAAIAAAAIgDACIgBAAQgIApAAApIAAACIAAAIIgEAWQgcAPgZgUQAAgkAIgjQAEhVACgNQAGgxAVgtQATgkAbgOIAIgqIB8AUIADAoIBDCWIgWA2IAIBOIAEASQgcAXgjgJIgIgDIgCgBQgGgWgEgYIgBgKIAyAAIANgeIgNAeIgyAAIABAKQAEAYAGAWIACABIAIADIgGACIgBAAQgUARgXAAQgOAAgNgGgAByBYIARA6IgRg6IAJgUIgJAUgAhZA7IACBLIgChLIgBAAIAAgBIgBAAIAAAAIAAAAQgIgFgLAAIgBAAIAAAAQgHAAgIACIgBAAQgFAQgEARQAEgRAFgQIABAAQAIgCAHAAIAAAAIABAAQALAAAIAFIAAAAIAAAAIABAAIAAABIABAAIAAAAgAAzB2IgBAAgAA+A+IARAWIgRgWIAJgMIAFgJIAKgeIgKAeIgFAJIgJAMIgBAAIgGgBIgBAAIAAAAIgDAAIgDABIABgSQAMgGAKgCQgughgeg3IgLgqIALAqQAeA3AuAhQgKACgMAGIgBASIADgBIADAAIAAAAIABAAIAGABIABAAIAAAAgAhUCyQgDgSAAgSIAAgIIAAgCQAAgpAIgpIABAAIADgCIAAAAIAAAAIABAAQAMgEAKAAIAAAAIABAAQAIAAAIADIACACIALBfIAAAFIACAQIAAAEIABAHQgRALgSAAQgPAAgPgJgABICyIAAAAgAgUClgAhXCOIAAAAgAAjBBg");
	this.shape_10.setTransform(11.6,20.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#583705").ss(1,1,1).p("AAAgLIAfA2AAAgLIAagFAgegqIAeAf");
	this.shape_11.setTransform(36.3,18.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8E590B").s().p("AhIB7IhdjqIgGg/IBvAAIgEAiQBiARA0BbIAeAfIgegfQABgZAYgGQAcAhAgAPIgEB6QgbAggVgKQgPAQgKAJQgLAJgPgNIgXARQgWAQgXgUQAEAHgdAFIgEAAQgWAAgVg0gAB0gBIAhA2Ighg2IAbgFIgbAFg");
	this.shape_12.setTransform(24.5,17.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#583705").ss(1,1,1).p("AAYgYIAFgMIAAgBAAYgYIgFAMAAjgLIgLgNAADArIglgkIAEgy");
	this.shape_13.setTransform(10.5,24.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8E590B").s().p("AhvC5IgdhJIAKiAICJiTIAQgxIB2AGQgHAgAFAsQgCBRg0AwQAUgSALAXIgDAhIgVAjIgiAHIADAAQgLApgagJIgmgmIgWg9IAGBLIAYAuQAqAWgXAdIgtgYIgkg4IgQhcIgNBgIAXA3IADADQAqAggeAPgAATAqIAnAlIgnglIAEgxIgEAxgABaAXIgLgNgABUgBIgFALIgFAMIAFgMIAFgLIABAAg");
	this.shape_14.setTransform(4.9,20.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#583705").ss(1,1,1).p("AgKATIAFggQAkgMAYAXAB2AOQgVgNgcAJIgEAZAhjACQACgPACgNQAegSAiAYAh0AJIALgX");
	this.shape_15.setTransform(9.5,21.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#724707").s().p("AgwApQgLgHgCgNQgCgNAMgEQAMgEAMgIIASgSIBHgVIAAABIAAACIgVAJQgQAUglAZQgEACgBAEIgEAfIgHABQgLAAgJgHg");
	this.shape_16.setTransform(-5.9,17.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8E590B").s().p("ABPCpIAMhUIgOgDQgHAngQAzQglAFgQgVIANhXIgXgFIgLBkQgVASgjgRQgChCAFgvIAAAAIAFgeIACgCQAMgGAMAAIAAAAIABAAQARAAASANIABABIgBgBQgSgNgRAAIgBAAIAAAAQgMAAgMAGIgCACIgFAeIgBgBIgQAIIAMgZIgMAZIgHBgQgwAUgEgwQgDggADgiIAFgfQABgEADgCQAogZAQgUIAUgJIABgCIABgCQAQgXAQgbIAUgiIAOgxQA/gkA3AqQAqCOgUBTIAHAGQgDAtgVBEIgNABQgXAAgMgPgABfA8IgEAZIAEgZIABAAIAEgCQAIgCAIAAIABAAIAAAAQAOAAALAHIABABIABAAIgBAAIgBgBQgLgHgOAAIAAAAIgBAAQgIAAgIACIgEACIgBAAIAAAAgAATAjIgFAiIAFgiIACgBIABAAQALgDAKAAIAAAAIAAAAQAUAAAPANIAAAAIACABIABABIgBgBIgCgBIAAAAQgPgNgUAAIAAAAIAAAAQgKAAgLADIgBAAIgCABIAAAAgAg/ghIAAAAIAAABg");
	this.shape_17.setTransform(6.8,16.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_14},{t:this.shape_13}]},1).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,28.1,57.1);


(lib.GO_headcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// xtra
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#170E02").s().p("AkZDVQgUhbgPAPIgGgsIgBgQQgHhSAShSQAWhlBPg9QBJg4BYgNQBPgLBTATQBMASA5A7QA9BBAUBhQkCh2kPBiIgNBoQhABVAUDhQgKhDgLgrg");
	this.shape.setTransform(43.3,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#170E02").s().p("AkgDVIgCgKQgHgggHgRIgBgBIAAgCIgBgEQgFgRgGAHIgFgsIgBgLIAAgFIgBgZIAAALQgKhQAOhGQAXhlBPg9QBJg4BXgNQBQgLBTATQBMASA4A7QA+BBAUBhQAGAcADAjQACAugDA8QgBAugJA1QgFh9grg7IgLhgQh2gyh5gDQhwADh1AqIgNBoQhABVAUDhQgKhDgLgrg");
	this.shape_1.setTransform(44,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// head
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AgKgPQAfAGAFAbQgfgOgFgTgAgZgRQAIAAAHAC");
	this.shape_2.setTransform(8.2,53.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E590B").s().p("AgRgQQAfAGAFAbQgfgOgFgTg");
	this.shape_3.setTransform(8.9,53.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhZBBQAOAKA7ADQA6ACAUgQQAVgRgCgIQAAgLgHgJQAjAWgoAdQgmAcgkAAQgpAAgrghgAAngnQgFgdAFgdQgDApATAkIAGARQgRgMgFgYg");
	this.shape_4.setTransform(52.3,56.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E590B").s().p("AhjFxQhihXgohZQgMgZgGgYQgZAXgggDQghgCgNgdQgNgbgHglQgJglAXgaQAXgYAjAHQATAFARAMIgHgqIgBgQQgHhUAShRQAXhmBPg8QBIg4BYgOQBPgLBTAUQBNASA4A7QA+BBATBgQAHAdADAjQACAwgDA8QgCAugKA4QgYCshFBTQhEBThcAjQgWAJgYAAQhKAAhehVg");
	this.shape_5.setTransform(38.7,45.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("AgTgRQAHAAAFACQAXAGAEAbQgYgOgDgT");
	this.shape_6.setTransform(9.5,53.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8E590B").s().p("AhzFxQhihXgohZQgJgTgGgTIgBgFIAAAAIAAgGQgTAXgZgDQgYgCgKgdQgKgbgFglQgHglARgaQARgYAbAHQAPAFAMAMIgFgqIAAgLIgBgFIgBgZIAAALQgKhSAPhFQAXhmBPg8QBIg4BYgOQBPgLBTAUQBNASA4A7QA+BBATBgQAHAdADAjQACAwgDA8QgCAsgJA1IgBAFQgYCshFBTQhEBThcAjQgWAJgYAAQhKAAhehVg");
	this.shape_7.setTransform(40.3,45.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.5,1,1).p("AAagRQgJAAgGACQggAGgEAbQAfgOAFgT");
	this.shape_8.setTransform(74.8,53.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8E590B").s().p("AASgQQgEATggAOQAFgbAfgGg");
	this.shape_9.setTransform(74,53.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8E590B").s().p("AAAgEIABAAIgBAJg");
	this.shape_10.setTransform(69.7,60.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#4F330A","#8E590B"],[0,1],-3.1,0,6.1,0).s().p("Ag8BEIgDAAIAAh2QAKgZAJAIQAQgOATgFQAigHAXAZQAWAbgJAkQgHAjgNAcQgNAdgeACIgHAAQgcAAgXgVg");
	this.shape_11.setTransform(75.9,53.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4,p:{x:52.3}},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_4,p:{x:48.2}},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0.1,76.4,90.8);


(lib.GO_head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// xtra
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#170E02").s().p("AkZDVQgUhbgPAPIgGgsIgBgQQgHhSAShSQAWhlBPg9QBJg4BYgNQBPgLBTATQBMASA5A7QA9BBAUBhQkCh2kPBiIgNBoQhABVAUDhQgKhDgLgrg");
	this.shape.setTransform(43.3,32.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#170E02").s().p("AkgDVIgCgKQgHgggHgRIgBgBIAAgCIgBgEQgFgRgGAHIgFgsIgBgLIAAgFIgBgZIAAALQgKhQAOhGQAXhlBPg9QBJg4BXgNQBQgLBTATQBMASA4A7QA+BBAUBhQAGAcADAjQACAugDA8QgBAugJA1QgFh9grg7IgLhgQh2gyh5gDQhwADh1AqIgNBoQhABVAUDhQgKhDgLgrg");
	this.shape_1.setTransform(44,32.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// head
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(0.5,1,1).p("AgZgRQAIAAAHACQAfAGAFAbQgfgOgFgT");
	this.shape_2.setTransform(8.2,53.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E590B").s().p("AgRgQQAfAGAFAbQgfgOgFgTg");
	this.shape_3.setTransform(8.9,53.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AhZBBQAOAKA7ADQA6ACAUgQQAVgRgCgIQAAgLgHgJQAjAWgoAdQgmAcgkAAQgpAAgrghgAAngnQgFgdAFgdQgDApATAkIAGARQgRgMgFgYg");
	this.shape_4.setTransform(52.3,56.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8E590B").s().p("AhjFxQhihXgohZQgMgZgGgYQgZAXgggDQghgCgNgdQgNgbgHglQgJglAXgaQAXgYAjAHQATAFARAMIgHgqIgBgQQgHhUAShRQAXhmBPg8QBIg4BYgOQBPgLBTAUQBNASA4A7QA+BBATBgQAHAdADAjQACAwgDA8QgCAugKA4QgYCshFBTQhEBThcAjQgWAJgYAAQhKAAhehVg");
	this.shape_5.setTransform(38.7,45.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("AgHgPQAXAGAEAbQgYgOgDgTgAgTgRQAHAAAFAC");
	this.shape_6.setTransform(9.5,53.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8E590B").s().p("AhzFxQhihXgohZQgJgTgGgTIgBgFIAAAAIAAgGQgTAXgZgDQgYgCgKgdQgKgbgFglQgHglARgaQARgYAbAHQAPAFAMAMIgFgqIAAgLIgBgFIgBgZIAAALQgKhSAPhFQAXhmBPg8QBIg4BYgOQBPgLBTAUQBNASA4A7QA+BBATBgQAHAdADAjQACAwgDA8QgCAsgJA1IgBAFQgYCshFBTQhEBThcAjQgWAJgYAAQhKAAhehVg");
	this.shape_7.setTransform(40.3,45.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.5,1,1).p("AALgPQggAGgEAbQAfgOAFgTgAAagRQgJAAgGAC");
	this.shape_8.setTransform(74.8,53.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8E590B").s().p("AASgQQgEATggAOQAFgbAfgGg");
	this.shape_9.setTransform(74,53.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8E590B").s().p("AAAgEIABAAIgBAJg");
	this.shape_10.setTransform(69.7,60.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#4F330A","#8E590B"],[0,1],-3.1,0,6.1,0).s().p("Ag8BEIgDAAIAAh2QAKgZAJAIQAQgOATgFQAigHAXAZQAWAbgJAkQgHAjgNAcQgNAdgeACIgHAAQgcAAgXgVg");
	this.shape_11.setTransform(75.9,53.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4,p:{x:52.3}},{t:this.shape_3},{t:this.shape_2}]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_4,p:{x:48.2}},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0.1,76.4,90.8);


(lib.GO_Browcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEeAXQgRgGgJgBQhFgIglAMQgmAMgNgCQgFAAgDgFQgFgEAAgEQACgLAdgHQAqgNBJAHQAXADAGAEQAzAZABACQABABABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAADQAAABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgDABIgegMgAiZAAQgkgNhFABQgJAAgRAFIggAHIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIABgDQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABgBQABgCA2gVQAHgFAWAAQBLgBAoARQAcAMAAAJQAAAEgEAEQgFAEgEAAIgBAAQgPAAgjgPg");
	this.shape.setTransform(32.1,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AE5AzIgbgTQgOgKgJgDQhBgXgmACQgnABgNgEQgFgCgDgEQgCgGABgEQAEgLAegBQArgCBGAaQAWAIAEAEQArAmABACIACACIgBADIgBADIgCAAIgBAAgAk7AQIgCgEIAAgDIACgBQABgCAvggQAGgGAVgFQBJgTArAIQAeAEACALQABAEgEAFQgDAEgEACQgOADgngGQglgGhDARQgKADgPAHIgdAQIgCAAg");
	this.shape_1.setTransform(32.2,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABpAkQgGAAgDgEQgFgEAAgFQABgLAcgKQApgNBKAFQAXABAHAFQA0AVABACQABAAAAABQABAAAAAAQAAABAAAAQAAgBABAAIAAADIgBAEIgCAAIgggLQgRgFgJgBQhFgEglAOQghAMgOAAIgCAAgAhoASQgNAAgkgQQgjgOhGgBQgKAAgQAEIggAIIgDgBIgBgDIABgDIADgBQABgCA3gUQAGgEAWAAQBLACAoASQAbAMAAAKQAAAEgFAEQgDADgFAAIgBAAg");
	this.shape_2.setTransform(32,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABQAKQgQgGgKgBQhDgFglAKQglALgOgBQgFgBgDgEQgFgEABgFQABgJAdgIQAqgOBIAIQAWACAGAFQAzAYACADQAAAAABAAQAAABABAAQAAAAAAAAQAAAAAAgBIAAAEQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgCABIgfgNg");
	this.shape_3.setTransform(52.6,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AAIAzIgOgBQgPAAgOgEIAqgHQAKgCADgLIgJhMIASAmQALATgFAWQgCANgNAGQgGADgFAAIgBAAg");
	this.shape_4.setTransform(28.8,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABdAtQgFAAgEgEQgFgEAAgEQABgLAcgLQAogPBLABQAWABAHACQA1AWABADQABAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgDABIgfgKQgRgFgJAAQhGgCgkAPQgjAOgOAAIgBAAgAhkAeQgNgCghgVQgggUhEgMQgKgCgQACIgjADIgBgBQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBABAAIADgEQACgBA5gLQAHgEAWAEQBKANAkAYQAaAPgDALQgBAEgFADQgEACgDAAIgDAAg");
	this.shape_5.setTransform(33.1,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.1,7.2);


(lib.GO_Brow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AEeAXQgRgGgJgBQhFgIglAMQgmAMgNgCQgFAAgDgFQgFgEAAgEQACgLAdgHQAqgNBJAHQAXADAGAEQAzAZABACQABABABAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAAADQAAABAAABQAAAAAAABQAAAAgBAAQAAAAAAAAIgDABIgegMgAiZAAQgkgNhFABQgJAAgRAFIggAHIgCAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBIABgDQAAAAAAAAQAAAAAAAAQAAAAABAAQAAAAABgBQABgCA2gVQAHgFAWAAQBLgBAoARQAcAMAAAJQAAAEgEAEQgFAEgEAAIgBAAQgPAAgjgPg");
	this.shape.setTransform(32.1,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AE5AzIgbgTQgOgKgJgDQhBgXgmACQgnABgNgEQgFgCgDgEQgCgGABgEQAEgLAegBQArgCBGAaQAWAIAEAEQArAmABACIACACIgBADIgBADIgCAAIgBAAgAk7AQIgCgEIAAgDIACgBQABgCAvggQAGgGAVgFQBJgTArAIQAeAEACALQABAEgEAFQgDAEgEACQgOADgngGQglgGhDARQgKADgPAHIgdAQIgCAAg");
	this.shape_1.setTransform(32.2,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABpAkQgGAAgDgEQgFgEAAgFQABgLAcgKQApgNBKAFQAXABAHAFQA0AVABACQABAAAAABQABAAAAAAQAAABAAAAQAAgBABAAIAAADIgBAEIgCAAIgggLQgRgFgJgBQhFgEglAOQghAMgOAAIgCAAgAhoASQgNAAgkgQQgjgOhGgBQgKAAgQAEIggAIIgDgBIgBgDIABgDIADgBQABgCA3gUQAGgEAWAAQBLACAoASQAbAMAAAKQAAAEgFAEQgDADgFAAIgBAAg");
	this.shape_2.setTransform(32,3.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ABQAKQgQgGgKgBQhDgFglAKQglALgOgBQgFgBgDgEQgFgEABgFQABgJAdgIQAqgOBIAIQAWACAGAFQAzAYACADQAAAAABAAQAAABABAAQAAAAAAAAQAAAAAAgBIAAAEQAAABAAAAQAAABAAAAQAAAAAAABQAAAAgBAAIgCABIgfgNg");
	this.shape_3.setTransform(52.6,4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.298)").s().p("AAIAzIgOgBQgPAAgOgEIAqgHQAKgCADgLIgJhMIASAmQALATgFAWQgCANgNAGQgGADgFAAIgBAAg");
	this.shape_4.setTransform(28.8,6.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("ABdAtQgFAAgEgEQgFgEAAgEQABgLAcgLQAogPBLABQAWABAHACQA1AWABADQABAAABAAQAAAAABAAQAAAAAAAAQAAAAABAAIAAADQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABIgDABIgfgKQgRgFgJAAQhGgCgkAPQgjAOgOAAIgBAAgAhkAeQgNgCghgVQgggUhEgMQgKgCgQACIgjADIgBgBQAAgBAAAAQgBAAAAAAQAAgBAAAAQAAgBABAAIADgEQACgBA5gLQAHgEAWAEQBKANAkAYQAaAPgDALQgBAEgFADQgEACgDAAIgDAAg");
	this.shape_5.setTransform(33.1,5.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,64.1,7.2);


(lib.GO_bodycopy = function() {
	this.initialize();

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1).p("AmdgpQHwCHFLhT");
	this.shape.setTransform(44.2,162.7);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmoKhQhrgOBEkhQgahpApkqQgqitAUkKIAAAAQAGhOANhXIEMh2QA5BWCsAwQCtAxARi5IDXCeQAWAzAKBMQAcDvhQHQQADBOgIBZQgIBYAJA6QAJA6gBAzQgCA0geAWQh9AfiVAAQjzAAk2hVg");
	mask.setTransform(45.3,91.1);

	// design
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C642E").s().p("AiEAKICEj6ICFDuIiFDzg");
	this.shape_1.setTransform(-11.2,148.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C642E").s().p("AiEALICEj7ICFDuIiFDzg");
	this.shape_2.setTransform(-11.2,101);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9C642E").s().p("AiEALICEj7ICFDuIiFDzg");
	this.shape_3.setTransform(-11.2,51.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.502)").ss(1,1,1).p("AJFFDIlEIJAJQi0IpdP7AISpdIseWHAFcr3ItQX0ABMrxIqKSUAh5tLInWLs");
	this.shape_4.setTransform(52.6,92.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.502)").ss(1,1,1).p("AlMtXQHeMBGHMVAgnsrQFAIhD/IfADQtOIGhMvAoiseIONZ2ApwCIQDyE/CeE/ApnlnQGDI1FBJ2");
	this.shape_5.setTransform(54.4,99.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9C642E").s().p("AiDgEICDjsICED8IiEDlg");
	this.shape_6.setTransform(94.7,148);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#102129").s().p("AiEgEICEjsICFD8IiFDlg");
	this.shape_7.setTransform(68.2,146.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9C642E").s().p("AiEALICEj7ICFDuIiFDzg");
	this.shape_8.setTransform(41.9,146);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#102129").s().p("AiEALICEj7ICFDvIiFDyg");
	this.shape_9.setTransform(15.4,147.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9C642E").s().p("AiDgEICDjsICED8IiEDlg");
	this.shape_10.setTransform(94.7,100.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#102129").s().p("AiEgEICEjsICFD8IiFDlg");
	this.shape_11.setTransform(68.2,98.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9C642E").s().p("AiEALICEj7ICFDuIiFDzg");
	this.shape_12.setTransform(41.9,98.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#102129").s().p("AiEALICEj7ICFDvIiFDyg");
	this.shape_13.setTransform(15.4,99.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9C642E").s().p("AiDgEICDjsICED9IiEDkg");
	this.shape_14.setTransform(94.7,50.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#102129").s().p("AiEgEICEjsICFD8IiFDlg");
	this.shape_15.setTransform(68.2,49.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9C642E").s().p("AiEALICEj7ICFDuIiFDzg");
	this.shape_16.setTransform(41.9,48.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#102129").s().p("AiEALICEj7ICFDvIiFDyg");
	this.shape_17.setTransform(15.4,50.3);

	this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = mask;

	// shirt
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#4F330A","#8E590B"],[0,1],3.6,-16.7,-4.8,14.6).s().p("AhaCJQgzgbgiglIAQgHQAQh6gQh9IETAAIAADoIA0AxIAIgTQgkBlhZAAQg6AAhTgtg");
	this.shape_18.setTransform(49.2,6.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag5AoQhLgjgng1IgDgFQgEgFgFgNIALALQAiAlAzAZQDPBwA7imIAAAAIABgBIAAgBIABgBIAAgBIADACQgTB+hlAAQgzAAhGggg");
	this.shape_19.setTransform(48.9,19.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.302)").ss(1,1,1).p("ADUhDQAFA4ghAoQgjAug5gBQhVgChOgjQhPgkg+hL");
	this.shape_20.setTransform(47.7,22.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#483A2E").s().p("AgNgGIAbgEIAAACIgBABIAAABIAAAAIgIARg");
	this.shape_21.setTransform(65.5,15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0.102)").ss(1,1,1).p("AmdgpQHwCHFLhT");
	this.shape_22.setTransform(44.2,162.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BF9E83").s().p("AmuLWIAGhPQhrgOBEkhQgahpApkqQgqitAUkKIAAAAQAGhOANhXIEwiWQAFANAEAGIADAFQAnA3BLAiQDVBiAcjBIDnCqQAWAzAKBMQAcDvhQHQQADBOgIBZQgIBYAJA6QAJA6gBAzQgCA0geAWIAABHQilAqiqAAQj0AAj+hYg");
	this.shape_23.setTransform(45.3,93.7);

	this.addChild(this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.8,-12.2,98.1,187.4);


(lib.GO_body = function() {
	this.initialize();

	// outline
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.502)").ss(1,1,1).p("AmdgpQHwCHFLhT");
	this.shape.setTransform(44.2,162.7);

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmoKhQhrgOBEkhQgahpApkqQgqitAUkKIAAAAQAGhOANhXIEMh2QA5BWCsAwQCtAxARi5IDXCeQAWAzAKBMQAcDvhQHQQADBOgIBZQgIBYAJA6QAJA6gBAzQgCA0geAWQh9AfiVAAQjzAAk2hVg");
	mask.setTransform(45.3,91.1);

	// design
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9C642E").s().p("AiEAKICEj6ICFDuIiFDzg");
	this.shape_1.setTransform(-11.2,148.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9C642E").s().p("AiEALICEj7ICFDuIiFDzg");
	this.shape_2.setTransform(-11.2,101);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9C642E").s().p("AiEALICEj7ICFDuIiFDzg");
	this.shape_3.setTransform(-11.2,51.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(255,255,255,0.502)").ss(1,1,1).p("AFcr3ItQX0AISpdIseWHAJQi0IpdP7AJFFDIlEIJAh5tLInWLsABMrxIqKSU");
	this.shape_4.setTransform(52.6,92.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(255,255,255,0.502)").ss(1,1,1).p("ADQtOIGhMvAgnsrQFAIhD/IfAlMtXQHeMBGHMVApnlnQGDI1FBJ2ApwCIQDyE/CeE/AoiseIONZ2");
	this.shape_5.setTransform(54.4,99.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9C642E").s().p("AiDgEICDjsICED8IiEDlg");
	this.shape_6.setTransform(94.7,148);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#102129").s().p("AiEgEICEjsICFD8IiFDlg");
	this.shape_7.setTransform(68.2,146.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#9C642E").s().p("AiEALICEj7ICFDuIiFDzg");
	this.shape_8.setTransform(41.9,146);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#102129").s().p("AiEALICEj7ICFDvIiFDyg");
	this.shape_9.setTransform(15.4,147.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#9C642E").s().p("AiDgEICDjsICED8IiEDlg");
	this.shape_10.setTransform(94.7,100.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#102129").s().p("AiEgEICEjsICFD8IiFDlg");
	this.shape_11.setTransform(68.2,98.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9C642E").s().p("AiEALICEj7ICFDuIiFDzg");
	this.shape_12.setTransform(41.9,98.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#102129").s().p("AiEALICEj7ICFDvIiFDyg");
	this.shape_13.setTransform(15.4,99.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#9C642E").s().p("AiDgEICDjsICED9IiEDkg");
	this.shape_14.setTransform(94.7,50.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#102129").s().p("AiEgEICEjsICFD8IiFDlg");
	this.shape_15.setTransform(68.2,49.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9C642E").s().p("AiEALICEj7ICFDuIiFDzg");
	this.shape_16.setTransform(41.9,48.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#102129").s().p("AiEALICEj7ICFDvIiFDyg");
	this.shape_17.setTransform(15.4,50.3);

	this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = mask;

	// shirt
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#4F330A","#8E590B"],[0,1],3.6,-16.7,-4.8,14.6).s().p("AhaCJQgzgbgiglIAQgHQAQh6gQh9IETAAIAADoIA0AxIAIgTQgkBlhZAAQg6AAhTgtg");
	this.shape_18.setTransform(49.2,6.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("Ag5AoQhLgjgng1IgDgFQgEgFgFgNIALALQAiAlAzAZQDPBwA7imIAAAAIABgBIAAgBIABgBIAAgBIADACQgTB+hlAAQgzAAhGggg");
	this.shape_19.setTransform(48.9,19.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.302)").ss(1,1,1).p("ADUhDQAFA4ghAoQgjAug5gBQhVgChOgjQhPgkg+hL");
	this.shape_20.setTransform(47.7,22.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#483A2E").s().p("AgNgGIAbgEIAAACIgBABIAAABIAAAAIgIARg");
	this.shape_21.setTransform(65.5,15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0.102)").ss(1,1,1).p("AmdgpQHwCHFLhT");
	this.shape_22.setTransform(44.2,162.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BF9E83").s().p("AmuLWIAGhPQhrgOBEkhQgahpApkqQgqitAUkKIAAAAQAGhOANhXIEwiWQAFANAEAGIADAFQAnA3BLAiQDVBiAcjBIDnCqQAWAzAKBMQAcDvhQHQQADBOgIBZQgIBYAJA6QAJA6gBAzQgCA0geAWIAABHQilAqiqAAQj0AAj+hYg");
	this.shape_23.setTransform(45.3,93.7);

	this.addChild(this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.8,-12.2,98.1,187.4);


(lib.fan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A0000").s().p("AAAAFQgFgBABgEQABgFADABIABAAQAFABgBADQgBAFgEAAIAAAAg");
	this.shape.setTransform(15.4,3.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#840701").s().p("AjDgbIADgNICYAbQgGAAgBAFQgBAGAGABQAFABABgGQACgFgGgCIDsApIgCANg");
	this.shape_1.setTransform(19.7,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A9B2AD").s().p("AgMAAIABgHIAaAFQgSACgLAIg");
	this.shape_2.setTransform(81.3,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#808080").s().p("AjLgdIADgNIGUBIIgBAJIgBAEg");
	this.shape_3.setTransform(59.5,11.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383838").s().p("AgRAIIAAgCIABgEQALgGASgEIAFABIgDAOQgIACgJAAIgPgBg");
	this.shape_4.setTransform(81.5,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgQAAIABgEQASACAOgDIgCALg");
	this.shape_5.setTransform(81.4,16.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#A9B2AD").s().p("AgLAAIABgHIAYAGQgRABgKAIg");
	this.shape_6.setTransform(81.8,14.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#808080").s().p("AjBgiIACgNIGBBSIgCAJIgBAEg");
	this.shape_7.setTransform(61,10.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPAAIABgFQAQACAOgCIgCALg");
	this.shape_8.setTransform(81.8,16.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#383838").s().p("AgQAHIAAgCIABgEQAKgGARgDIAFABIgDAOIgOACIgQgCg");
	this.shape_9.setTransform(82,15.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#840701").s().p("Ai5ggIACgNICRAfQgGAAAAAEQgCAGAGACQAGABABgGQABgFgGgCIDgAvIgCANg");
	this.shape_10.setTransform(23.1,2.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape,p:{x:15.4,y:3.3}}]}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape,p:{x:19.1,y:1.7}}]},1).wait(1));

	// Layer 1
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#383838").s().p("AgJgGIAVADQgJAHgOAEg");
	this.shape_11.setTransform(84.4,15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgSAJIACgLQAQgDAIgJIAKACIgBAJIgCAMIgBAGg");
	this.shape_12.setTransform(84.8,16.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#808080").s().p("AjMgcIADgOIGWBHIgDAPg");
	this.shape_13.setTransform(106.8,20.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#961004").s().p("AjBgaIADgOIGABDIgDAPg");
	this.shape_14.setTransform(146.5,27.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#383838").s().p("AgJgHIAVAFQgJAHgOACg");
	this.shape_15.setTransform(84.7,15.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgRAIIACgLQAPgCAIgJIAKACIgCAIIgCANIgCAGg");
	this.shape_16.setTransform(85.1,16.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#808080").s().p("AjGggIADgPIGKBQIgDAPg");
	this.shape_17.setTransform(106.4,20.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#961004").s().p("Ai7geIACgPIF1BMIgCAPg");
	this.shape_18.setTransform(145,28.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166,31.4);


(lib.dfsdSymbol248copy3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("AgIAKQABgQAQgD");
	this.shape.setTransform(11.8,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DB8733").ss(1,1,1).p("AhsgBQB2AeBjgn");
	this.shape_1.setTransform(23.3,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.102)").s().p("AhhAAQgLgJANgCQAdAJAyACQAvAAAjgHQAjgKACAKQg+AUg1AAQgtAAgogNg");
	this.shape_2.setTransform(22.9,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DB8733").ss(0.5,1,1).p("AgagBQAPAGAmgD");
	this.shape_3.setTransform(21.4,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.102)").s().p("AgagHQAPAHAmgCQgGAKgMAAQgNAAgWgPg");
	this.shape_4.setTransform(21.4,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#DB8733").ss(0.5,1,1).p("AAJAIQgCgPgPAA");
	this.shape_5.setTransform(35,3.7);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.9,1.9,27.1,8.9);


(lib.dfsdSymbol248copy2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("AgIAKQABgQAQgD");
	this.shape.setTransform(11.8,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DB8733").ss(1,1,1).p("AhsgBQB2AeBjgn");
	this.shape_1.setTransform(23.3,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.102)").s().p("AhhAAQgLgJANgCQAdAJAyACQAvAAAjgHQAjgKACAKQg+AUg1AAQgtAAgogNg");
	this.shape_2.setTransform(22.9,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DB8733").ss(0.5,1,1).p("AgagBQAPAGAmgD");
	this.shape_3.setTransform(21.4,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.102)").s().p("AgagHQAPAHAmgCQgGAKgMAAQgNAAgWgPg");
	this.shape_4.setTransform(21.4,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#DB8733").ss(0.5,1,1).p("AAJAIQgCgPgPAA");
	this.shape_5.setTransform(35,3.7);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.9,1.9,27.1,8.9);


(lib.dfsdSymbol248copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("AgIAKQABgQAQgD");
	this.shape.setTransform(11.8,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DB8733").ss(1,1,1).p("AhsgBQB2AeBjgn");
	this.shape_1.setTransform(23.3,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.102)").s().p("AhhAAQgLgJANgCQAdAJAyACQAvAAAjgHQAjgKACAKQg+AUg1AAQgtAAgogNg");
	this.shape_2.setTransform(22.9,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DB8733").ss(0.5,1,1).p("AgagBQAPAGAmgD");
	this.shape_3.setTransform(21.4,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.102)").s().p("AgagHQAPAHAmgCQgGAKgMAAQgNAAgWgPg");
	this.shape_4.setTransform(21.4,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#DB8733").ss(0.5,1,1).p("AAJAIQgCgPgPAA");
	this.shape_5.setTransform(35,3.7);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.9,1.9,27.1,8.9);


(lib.dfsdSymbol248 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("AgIAKQABgQAQgD");
	this.shape.setTransform(11.8,4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#DB8733").ss(1,1,1).p("AhsgBQB2AeBjgn");
	this.shape_1.setTransform(23.3,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.102)").s().p("AhhAAQgLgJANgCQAdAJAyACQAvAAAjgHQAjgKACAKQg+AUg1AAQgtAAgogNg");
	this.shape_2.setTransform(22.9,6.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DB8733").ss(0.5,1,1).p("AgagBQAPAGAmgD");
	this.shape_3.setTransform(21.4,9.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(0,0,0,0.102)").s().p("AgagHQAPAHAmgCQgGAKgMAAQgNAAgWgPg");
	this.shape_4.setTransform(21.4,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#DB8733").ss(0.5,1,1).p("AAJAIQgCgPgPAA");
	this.shape_5.setTransform(35,3.7);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.9,1.9,27.1,8.9);


(lib.dfsdSymbol10copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#923F07").ss(1,1,1).p("AgsADQABABAIAAQAMAAAPgEQANgDAKAAQAIAAAWAC");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#923F07").ss(1,1,1).p("AAngQQACABADABQACABAFAFQAEAEABABQgJAJgWAHQgXAGgdgCQgJAAgFAAQgDAAgCAAAgdgOQAUgBAigCQAKAAABAAQAAAAABABQABAAABAAQAAACAAADIAAADQgkAGgegDQAAgCgCgHQgFAAgEAAQgIAAgEAAQAEAGACAIQACACABAPAg3gPQAAAAAFAB");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAFIgCgHIA2gDIAKAAIACABIABAAIAAAEIAAACQgYAEgVAAIgUgBg");
	this.shape_2.setTransform(0.4,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E0000").s().p("AgdARIgPgBQgBgOgBgDQgDgIgDgGIALAAIAJAAIACAKQAeADAkgHIAAgDIAAgEIAFABIAHAGIAFAGQgJAJgWAGQgSAFgVAAIgMAAg");
	this.shape_3.setTransform(0.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#923F07").ss(1,1,1).p("AgogiIADAPIBFgHQABAAABgCQAEACAEAFQAQAQACADQAAACgBABQgHATgbAJQgLAEgKACQgOAEgLgBQgRgBgFgEQgDgCgFgHQAAgBAAgCQABgFABgJQAAgKgCgLQgDgLgFgIQAKgBAJAAQAegDAOgBQARAAANAKAA7ABQgQAAgOAHQgTAJgGAS");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF4444").s().p("AgBgIQAMgHAQgBQgHARgZAKIgVAGQAGgRATgIg");
	this.shape_5.setTransform(3.2,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E0000").s().p("AgVAlQgRgBgFgFQgDgBgFgIIAAgDIACgNQAAgLgCgLQgDgLgFgHIATgCIADAPIBFgGIACgDQAEADAEAEIASAUIgBADQgQAAgOAHQgTAJgGASQgMADgKAAIgDAAg");
	this.shape_6.setTransform(0,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkgEIAsgEQAQAAANAIIgBACIhGAHg");
	this.shape_7.setTransform(-0.4,-3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#923F07").ss(1,1,1).p("AAggmQAGAEAEAGQAIAKANAYQgBAAgBABQgOAPgIAHQgQAOgVADQgBABgBAAQgSACgUgJQgGgCgEgCQgMgGAAgDAgjgqQABADABAEQAAAFACAAQABAAAKABQAVAAAJgCQASgEAEgDQgMgIgPAAQgTADgVABQgHAAgGAAIgHABIgHAAAA9AHQgSADgRAKQgWAMgEAPAg3gpQAKAQAAAnQAAAHgDAP");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF4444").s().p("AgDgGQAPgJASgDIgVAUQgPAOgUADIgEAAQAGgOAVgLg");
	this.shape_9.setTransform(3.1,2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E0000").s().p("AgpAmIgLgEQAEgPAAgHQgBgngJgQIAGgBIAOAAIABAHQABAFABAAIAMABQAXAAAHgCQARgEAFgDQAGAEAEAGQAIAKAMAYIgBABQgSADgRAKQgWAMgDAPIgHAAQgQAAgQgHg");
	this.shape_10.setTransform(0.3,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAGQgCAAAAgEIgCgFQAVgBATgDQAPAAAMAHQgEACgSADQgJADgVAAIgLgCg");
	this.shape_11.setTransform(-0.2,-3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#923F07").ss(1,1,1).p("AAdgnQgGACgKACQgNADgNAAQgQAAAAgCQABgGgDgIQgEAAgCAAQgIAAgHgBQACAAAFAVQAGAogHAXQAPAQAUABQAGABAFAAQAGgqAzgGQgGgVgRgRQgDgDgCgDQgPgNgOAAQgWADgJABAA5AFQABADABADQgYAZgLAJQgJAHgPABAg6gzQADABADABAguAjQgDgEgEgF");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF4444").s().p("AAcgWIABAFQgXAYgKAJQgJAGgQACQAHgoAygGg");
	this.shape_13.setTransform(3,2.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5E0000").s().p("AgNAzQgUgBgOgQQAGgXgFgoQgFgVgDgBQAHACAJAAIAFAAQADAIgBAGQABACAPAAQANAAANgDIAPgEIAGAFQARASAGAVQgzAGgFAqIgMgBg");
	this.shape_14.setTransform(0.2,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbAIQABgGgDgHIAdgDQAQAAAOAKIgPAEQgPAEgLAAQgQAAAAgCg");
	this.shape_15.setTransform(-0.2,-4.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#923F07").ss(1,1,1).p("AAsgUQgPgJgUAAQgfADgSAAQADACADAMQADABAUAAQABAAAAAAQAOACAVgFQgIAEgGAFQgKAGgBAGQAAAAgBAAQgXAAgEAAIADAXQACAAACAAQAMAAAogKQARgEAWgPQgEgFgFgEQggAOgdABAAZgOQAHgCAHgCQADgBACgBQAJAEAIAIAg8gbQgBAAAAAAQgHgCgBAAAg8gbQAGABAFAAQAEAAAFAAAgyAaQgBgRgEgPQgDgPgCgGAgyAaQgGgBgHgCAgZAeQgMAAgIgCQgCgBgCAAQgBgBAAAA");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF4444").s().p("AgRAAQAFgDAIgEIAMgEIAFgCQAJAEAIAIQgeAOgdABQABgGALgIg");
	this.shape_17.setTransform(3.1,-0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5E0000").s().p("AgbAaIgEAAIgBgBQgBgSgEgOQgDgPgCgFIALAAIAJAAQAEACADAMQACACASAAIABAAQAQABAVgFQgIAEgFAFQgLAGgBAGIgDAAIgZAAIAEAWQgMAAgJgCg");
	this.shape_18.setTransform(-1.8,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgnAdIgDgWIAbAAIACAAQAcgBAfgOQAFAFAFAEQgXAOgQAFQgpAJgMAAIgDAAgAgYgKIgBAAQgVAAgCgCQgDgMgEgCIA0gCQARgBAQAJIgGACIgOAEQgNAEgMAAIgJAAg");
	this.shape_19.setTransform(1.4,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#923F07").ss(1,1,1).p("AA1gTQACABACACQAEAEAEAIQgXAOgOAFQgZAKghAAQgEAAgEgBQgGAAgFgBQgHgBgHgCAA1gTQgBgBgBgBQgGgDgLAAQgIAAghAFQgcAEgNABQABACADAJQAfAAAMgCQAfgDAXgLgAA5gQQgWAOgmACQgZAAgPAAQACAJADAPAg0gOIgBAAQgFAAgGgCAg0gOQABAAADAAAgxAXIAAgLQAAgFAAgEQgBgNgCgE");
	this.shape_20.setTransform(0.8,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5E0000").s().p("AgzAUIAAgKIAAgJQAAgNgDgEIAEAAIAEAKQAfAAAMgBQAfgDAYgLIADADQgWANgmADIgoACIAFAWIgLgCg");
	this.shape_21.setTransform(1,0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgvAYIgFgYIApAAQAmgCAWgOQAEAEAEAIQgYAOgNAFQgXAKgjAAIgJgBgAg4gOIApgFQAhgFAHAAQAMAAAFADIADACQgXALggADQgLACggAAIgDgLg");
	this.shape_22.setTransform(1.7,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#923F07").ss(1,1,1).p("AgsgLQAWgBAHgCQAVgFAYAAQAPAAAKADQAEABAMAFQgWADgSAGQgCAAgBABQgPAEAAAJAgsgLQgBAAgBAAQgSAAgGAAAgQAGQgLAFgEAJAgpAEQgRAAgDAGAgQAGQgSgCgEAAQgCAAgBAAQgDgJAAgGAAcAAQgPAAgNAAQgJACgHAE");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgzALIgDAAQgDgKAAgFQAXgBAGgCQAXgFAXAAQAOAAAKADIAQAGQgWADgSAEIgCABQgPAAgMACQgLACgGAEIgXgCg");
	this.shape_24.setTransform(1.3,-0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#923F07").ss(1,1,1).p("AALAuQgLAEgNAAQgTAAgJgIQgHgGgDgFQABgCAAgCQADgMAAgOQAAgFgFgRQgEgSgBgDQgDAAgDgBAg5gqQAGABAGAAQAEAAAHgBQAGgBAHgCQAQgEACAAQAGAAAGADQAFADAQAKAALAuQgKgJgHgOQgKgPgCgIQgDgKAJgGQAKgGAHgBQAIgCAHAKQAGAKABAGQAAAHACANQACAHAGAEAgigqIADASQACgBAdAAQASgCAMgGQACACACABQATANAKAVQABABAAACQgPAPgMAKQgIAGgHAEQgGACgFAC");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgfgEIANgDIASgEQAFAAAHADIAUALQgMAGgTACIgdABg");
	this.shape_26.setTransform(-0.2,-3.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF4444").s().p("AgPANQgJgNgDgKQgDgKAKgGQAKgGAIgCQAGgCAHALQAGAKABAHIACATQACAGAGAEQgIAHgHADIgLAEQgIgJgJgNg");
	this.shape_27.setTransform(0.9,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5E0000").s().p("AgsAmQgHgFgDgGIABgDQADgMAAgMQAAgHgFgSIgFgUIAMABIALgBIADASIAfgBQASgDALgFIAFADQATAMAKAVIABADQgPAQgMAJQgGgDgDgHIgCgSQgBgIgGgKQgGgLgIADQgHABgKAGQgJAGADAKQACAIAKAPQAIAOAIAJQgKADgNAAQgTABgJgJg");
	this.shape_28.setTransform(0.3,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#923F07").ss(1,1,1).p("AA5gOQgcACgTABQgOAIgCADAgjgTQAIgBALgBQAdgDAVAAQAMAAALAKQACACADACQAFAFAEAFQgNAKgLAEQgjALgXAAQgFAAgGAAQgNgBgOgDQgDgBgCgBQgIgDgCgDAg7gRQgGgBgFgDAgjgTQgQACgFAAIAAAAQgCAAgBAAQAFAVAAAPAgHgKQgXABgDAAQgCgIAAgCAgVAMIAAgCQAAgEAFgGQADgGAGgEQAHgBAKAAAA+gKQgvAWgfAAQgDAAgCAAQAAAAgBAAQgCgBgBAAQABADACAL");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF4444").s().p("AgoANIgBgBQAAgFAFgHQAEgFAFgDIATgBQgPAHgDAEQADgEAPgHIAtgEIAFAFQgtAVghAAIgEAAg");
	this.shape_30.setTransform(2,-0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgnAZIgDgOIADABIABAAIAFAAQAgAAAtgWQAFAFAEAFQgNAKgLAEQghALgYAAIgLAAgAg1gTIAUgCQAfgDASAAQAMAAAMAKIgtADIgTABIgaABIgDgKg");
	this.shape_31.setTransform(1.8,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5E0000").s().p("AgOASIgFgBQAAgQgFgVIACAAIABAAIAUgCIABAKIAagBQgGAEgDAGQgGAGAAAFIAAABIgDgBIADAOQgMgBgNgDg");
	this.shape_32.setTransform(-3.4,0.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#923F07").ss(1,1,1).p("AAAgUQABAAACAAQAKAAABAAQADABAFAHQABAAABABIgBABIgNABQgFAAgBgCQgCgHgCgCgAAYgLQACAEAEAFQADACAAAGQAAAOgMAHQgKAFgNAAQgJAAgEgCQgFgDAAgIIABgSQAAgIgCgFQgCgGgCgFQgCgBgBgCQgDgCgBgDAgZgXQADABAFABQAEABANAA");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5E0000").s().p("AgSAaQgFgDgBgIIABgRQAAgJgCgFIgDgLIAHACQAFABAPAAQABACAAAIQABACAGAAIAMgCIABAAIAGAIQADAEAAAEQAAANgMAIQgKAFgNAAQgJAAgDgCg");
	this.shape_34.setTransform(0.4,0.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgGADQgCgFgCgCIADAAIAJAAQADABAFAFIABACIgLABQgFAAgBgCg");
	this.shape_35.setTransform(1.2,-1.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#923F07").ss(1,1,1).p("AgJgQQAIADAIADQAMAEAAAMQAAAGgFAFQgEAEgGAAQgEAAgGgGQgHgGAAgDQAEgGAAgKQAAgDAAgDQgFgCgEgC");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5E0000").s().p("AgJANQgHgGAAgDQAEgGAAgKIAAgGIARAGQAMAEAAAMQAAAGgFAFQgFAEgFAAQgDAAgIgGg");
	this.shape_37.setTransform(0.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},2).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},2).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},2).to({state:[{t:this.shape_37},{t:this.shape_36}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-1.4,11,2.8);


(lib.dfsdSymbol10copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#923F07").ss(1,1,1).p("AAigcQgNgKgRAAQgOABgeADQgJAAgKABQAFAIADALQACALAAAKQgBAJgBAFQAAACAAABQAFAHADACQAFAEARABQALABAOgEQAGgSATgJQAOgHAQAAQABgBAAgCQgCgDgQgQQgEgFgEgCQgBACgBAAIhFAHIgDgPAAEAjQAKgCALgEQAbgJAHgT");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF4444").s().p("AgBgIQAMgHAQgBQgHARgZAKIgVAGQAGgRATgIg");
	this.shape_1.setTransform(3.2,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E0000").s().p("AgVAlQgRgBgFgFQgDgBgFgIIAAgDIACgNQAAgLgCgLQgDgLgFgHIATgCIADAPIBFgGIACgDQAEADAEAEIASAUIgBADQgQAAgOAHQgTAJgGASQgMADgKAAIgDAAg");
	this.shape_2.setTransform(0,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkgEIAsgEQAQAAANAIIgBACIhGAHg");
	this.shape_3.setTransform(-0.4,-3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#923F07").ss(1,1,1).p("AAggmQgMgIgPAAQgTADgVABQABADABAEQAAAFACAAQABAAAKABQAVAAAJgCQASgEAEgDQAGAEAEAGQAIAKANAYQgBAAgBABQgOAPgIAHQgQAOgVADQgBABgBAAQgSACgUgJQgGgCgEgCQgMgGAAgDAA9AHQgSADgRAKQgWAMgEAPAg3gpIgHAAAg3gpIAHgBQAGAAAHAAAgwAkQADgPAAgHQAAgngKgQ");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF4444").s().p("AgDgGQAPgJASgDIgVAUQgPAOgUADIgEAAQAGgOAVgLg");
	this.shape_5.setTransform(3.1,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E0000").s().p("AgpAmIgLgEQAEgPAAgHQgBgngJgQIAGgBIAOAAIABAHQABAFABAAIAMABQAXAAAHgCQARgEAFgDQAGAEAEAGQAIAKAMAYIgBABQgSADgRAKQgWAMgDAPIgHAAQgQAAgQgHg");
	this.shape_6.setTransform(0.3,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAGQgCAAAAgEIgCgFQAVgBATgDQAPAAAMAHQgEACgSADQgJADgVAAIgLgCg");
	this.shape_7.setTransform(-0.2,-3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#923F07").ss(1,1,1).p("AAAgUQABAAACAAQAKAAABAAQADABAFAHQABAAABABIgBABIgNABQgFAAgBgCQgCgHgCgCgAAYgLQACAEAEAFQADACAAAGQAAAOgMAHQgKAFgNAAQgJAAgEgCQgFgDAAgIIABgSQAAgIgCgFQgCgGgCgFQgCgBgBgCQgDgCgBgDAgZgXQADABAFABQAEABANAA");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E0000").s().p("AgSAaQgFgDgBgIIABgRQAAgJgCgFIgDgLIAHACQAFABAPAAQABACAAAIQABACAGAAIAMgCIABAAIAGAIQADAEAAAEQAAANgMAIQgKAFgNAAQgJAAgDgCg");
	this.shape_9.setTransform(0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGADQgCgFgCgCIADAAIAJAAQADABAFAFIABACIgLABQgFAAgBgCg");
	this.shape_10.setTransform(1.2,-1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#923F07").ss(1,1,1).p("AgsADQABABAIAAQAMAAAPgEQANgDAKAAQAIAAAWAC");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#923F07").ss(1,1,1).p("AAngQQACABADABQACABAFAFQAEAEABABQgJAJgWAHQgXAGgdgCQgJAAgFAAQgDAAgCAAAgdgOQAUgBAigCQAKAAABAAQAAAAABABQABAAABAAQAAACAAADIAAADQgkAGgegDQAAgCgCgHQgFAAgEAAQgIAAgEAAQAEAGACAIQACACABAPAg3gPQAAAAAFAB");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfAFIgCgHIA2gDIAKAAIACABIABAAIAAAEIAAACQgYAEgVAAIgUgBg");
	this.shape_13.setTransform(0.4,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5E0000").s().p("AgdARIgPgBQgBgOgBgDQgDgIgDgGIALAAIAJAAIACAKQAeADAkgHIAAgDIAAgEIAFABIAHAGIAFAGQgJAJgWAGQgSAFgVAAIgMAAg");
	this.shape_14.setTransform(0.3,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#923F07").ss(1,1,1).p("AgfgwQADAIgBAGQAAACAQAAQANAAANgDQAKgCAGgCQgPgNgOAAQgWADgJABQgEAAgCAAQgIAAgHgBQgDgBgDgBAA5AFQgGgVgRgRQgDgDgCgDAA5AFQABADABADQgYAZgLAJQgJAHgPABAg0gxQACAAAFAVQAGAogHAXQgDgEgEgFAguAjQAPAQAUABQAGABAFAAQAGgqAzgG");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF4444").s().p("AAcgWIABAFQgXAYgKAJQgJAGgQACQAHgoAygGg");
	this.shape_16.setTransform(3,2.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5E0000").s().p("AgNAzQgUgBgOgQQAGgXgFgoQgFgVgDgBQAHACAJAAIAFAAQADAIgBAGQABACAPAAQANAAANgDIAPgEIAGAFQARASAGAVQgzAGgFAqIgMgBg");
	this.shape_17.setTransform(0.2,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAIQABgGgDgHIAdgDQAQAAAOAKIgPAEQgPAEgLAAQgQAAAAgCg");
	this.shape_18.setTransform(-0.2,-4.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#923F07").ss(1,1,1).p("AAsgUQgCABgDABQgHACgHACQgIAEgGAFQgKAGgBAGQAAAAgBAAQgXAAgEAAIADAXQgMAAgIgCQgCgBgCAAQgBgBAAAAQgGgBgHgCAAsgUQAJAEAIAIQAFAEAEAFQgWAPgRAEQgoAKgMAAQgCAAgCAAAgogaQASAAAfgDQAUAAAPAJAgyAaQgBgRgEgPQgDgPgCgGQAGABAFAAQAEAAAFAAQADACADAMQADABAUAAQABAAAAAAQAOACAVgFAhFgdQABAAAHACQAAAAABAAAA9gIQggAOgdAB");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF4444").s().p("AgRAAQAFgDAIgEIAMgEIAFgCQAJAEAIAIQgeAOgdABQABgGALgIg");
	this.shape_20.setTransform(3.1,-0.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5E0000").s().p("AgbAaIgEAAIgBgBQgBgSgEgOQgDgPgCgFIALAAIAJAAQAEACADAMQACACASAAIABAAQAQABAVgFQgIAEgFAFQgLAGgBAGIgDAAIgZAAIAEAWQgMAAgJgCg");
	this.shape_21.setTransform(-1.8,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnAdIgDgWIAbAAIACAAQAcgBAfgOQAFAFAFAEQgXAOgQAFQgpAJgMAAIgDAAgAgYgKIgBAAQgVAAgCgCQgDgMgEgCIA0gCQARgBAQAJIgGACIgOAEQgNAEgMAAIgJAAg");
	this.shape_22.setTransform(1.4,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#923F07").ss(1,1,1).p("AA+gTQABABACACQAFAEAEAIQgYAOgNAFQgZAKghAAQgEAAgFgBQgDgPgCgJQAQAAAXAAQAogCAVgOAA+gTQgBgBgCgBQgFgDgMAAQgIAAgiAFQgaAEgNABQABACACAJQAfAAAKgCQAhgDAYgLgAg6gQQgBgBAAAAQgHgCgCgCAgngOQgDAAgCAAQgGAAgIgCQADAEABANQAAAEAAAFIgBAKQgRgEgBAAAgeAYQgLgBgNgDIgBAA");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5E0000").s().p("Ag5ASIgBAAIABgKIAAgIQgBgOgDgEQAHACAHAAIAEAAIAEAKQAfAAAKgBQAhgDAYgLIADADQgWANgoADIgmACIAFAWQgLgBgNgDg");
	this.shape_24.setTransform(0.3,0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgvAYIgFgYIApAAQAmgCAWgOQAEAEAEAIQgYAOgNAFQgXAKgjAAIgJgBgAg4gOIApgFQAhgFAHAAQAMAAAFADIADACQgXALggADQgLACggAAIgDgLg");
	this.shape_25.setTransform(1.7,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#923F07").ss(1,1,1).p("AgsgLQAWgBAHgCQAVgFAYAAQAPAAAKADQAEABAMAFQgWADgSAGQgCAAgBABQgPAAgNAAQgJACgHAEQgLAFgEAJAgsgLQgBAAgBAAQgSAAgGAAAgpAEQgRAAgDAGAgQAGQgSgCgEAAQgCAAgBAAQgDgJAAgGAAcAAQgPAEAAAJ");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgzALIgDAAQgDgKAAgFQAXgBAGgCQAXgFAXAAQAOAAAKADIAQAGQgWADgSAEIgCABQgPAAgMACQgLACgGAEIgXgCg");
	this.shape_27.setTransform(1.3,-0.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#923F07").ss(1,1,1).p("AALAuQgLAEgNAAQgTAAgJgIQgHgGgDgFQABgCAAgCQADgMAAgOQAAgFgFgRQgEgSgBgDQgDAAgDgBAg5gqQAGABAGAAQAEAAAHgBIADASQACgBAdAAQASgCAMgGAAlAgQgGgEgCgHQgCgNAAgHQgBgGgGgKQgHgKgIACQgHABgKAGQgJAGADAKQACAIAKAPQAHAOAKAJQAFgCAGgCQAHgEAIgGgAgigqQAGgBAHgCQAQgEACAAQAGAAAGADQAFADAQAKQACACACABQATANAKAVQABABAAACQgPAPgMAK");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgfgEIANgDIASgEQAFAAAHADIAUALQgMAGgTACIgdABg");
	this.shape_29.setTransform(-0.2,-3.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF4444").s().p("AgPANQgJgNgDgKQgDgKAKgGQAKgGAIgCQAGgCAHALQAGAKABAHIACATQACAGAGAEQgIAHgHADIgLAEQgIgJgJgNg");
	this.shape_30.setTransform(0.9,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5E0000").s().p("AgsAmQgHgFgDgGIABgDQADgMAAgMQAAgHgFgSIgFgUIAMABIALgBIADASIAfgBQASgDALgFIAFADQATAMAKAVIABADQgPAQgMAJQgGgDgDgHIgCgSQgBgIgGgKQgGgLgIADQgHABgKAGQgJAGADAKQACAIAKAPQAIAOAIAJQgKADgNAAQgTABgJgJg");
	this.shape_31.setTransform(0.3,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#923F07").ss(1,1,1).p("AA5gOQgcACgTABQgOAIgCADAgjgTQAIgBALgBQAdgDAVAAQAMAAALAKQACACADACQAFAFAEAFQgNAKgLAEQgjALgXAAQgFAAgGAAQgNgBgOgDQgDgBgCgBQgIgDgCgDAg7gRQgGgBgFgDAgjgTQgQACgFAAIAAAAQgCAAgBAAQAFAVAAAPAgHgKQgXABgDAAQgCgIAAgCAgVAMIAAgCQAAgEAFgGQADgGAGgEQAHgBAKAAAA+gKQgvAWgfAAQgDAAgCAAQAAAAgBAAQgCgBgBAAQABADACAL");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF4444").s().p("AgoANIgBgBQAAgFAFgHQAEgFAFgDIATgBQgPAHgDAEQADgEAPgHIAtgEIAFAFQgtAVghAAIgEAAg");
	this.shape_33.setTransform(2,-0.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgnAZIgDgOIADABIABAAIAFAAQAgAAAtgWQAFAFAEAFQgNAKgLAEQghALgYAAIgLAAgAg1gTIAUgCQAfgDASAAQAMAAAMAKIgtADIgTABIgaABIgDgKg");
	this.shape_34.setTransform(1.8,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5E0000").s().p("AgOASIgFgBQAAgQgFgVIACAAIABAAIAUgCIABAKIAagBQgGAEgDAGQgGAGAAAFIAAABIgDgBIADAOQgMgBgNgDg");
	this.shape_35.setTransform(-3.4,0.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#923F07").ss(1,1,1).p("AgJgQQAIADAIADQAMAEAAAMQAAAGgFAFQgEAEgGAAQgEAAgGgGQgHgGAAgDQAEgGAAgKQAAgDAAgDQgFgCgEgC");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5E0000").s().p("AgJANQgHgGAAgDQAEgGAAgKIAAgGIARAGQAMAEAAAMQAAAGgFAFQgFAEgFAAQgDAAgIgGg");
	this.shape_37.setTransform(0.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},5).to({state:[{t:this.shape_11}]},13).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},6).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},2).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_37},{t:this.shape_36}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,-4.9,14.2,9.8);


(lib.dfsdSymbol10copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#923F07").ss(1,1,1).p("AgsADQABABAIAAQAMAAAPgEQANgDAKAAQAIAAAWAC");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#923F07").ss(1,1,1).p("AAngQQACABADABQACABAFAFQAEAEABABQgJAJgWAHQgXAGgdgCQgJAAgFAAQgDAAgCAAAgdgOQAUgBAigCQAKAAABAAQAAAAABABQABAAABAAQAAACAAADIAAADQgkAGgegDQAAgCgCgHQgFAAgEAAQgIAAgEAAQAEAGACAIQACACABAPAg3gPQAAAAAFAB");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAFIgCgHIA2gDIAKAAIACABIABAAIAAAEIAAACQgYAEgVAAIgUgBg");
	this.shape_2.setTransform(0.4,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E0000").s().p("AgdARIgPgBQgBgOgBgDQgDgIgDgGIALAAIAJAAIACAKQAeADAkgHIAAgDIAAgEIAFABIAHAGIAFAGQgJAJgWAGQgSAFgVAAIgMAAg");
	this.shape_3.setTransform(0.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#923F07").ss(1,1,1).p("AgogiIADAPIBFgHQABAAABgCQAEACAEAFQAQAQACADQAAACgBABQgHATgbAJQgLAEgKACQgOAEgLgBQgRgBgFgEQgDgCgFgHQAAgBAAgCQABgFABgJQAAgKgCgLQgDgLgFgIQAKgBAJAAQAegDAOgBQARAAANAKAA7ABQgQAAgOAHQgTAJgGAS");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF4444").s().p("AgBgIQAMgHAQgBQgHARgZAKIgVAGQAGgRATgIg");
	this.shape_5.setTransform(3.2,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E0000").s().p("AgVAlQgRgBgFgFQgDgBgFgIIAAgDIACgNQAAgLgCgLQgDgLgFgHIATgCIADAPIBFgGIACgDQAEADAEAEIASAUIgBADQgQAAgOAHQgTAJgGASQgMADgKAAIgDAAg");
	this.shape_6.setTransform(0,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkgEIAsgEQAQAAANAIIgBACIhGAHg");
	this.shape_7.setTransform(-0.4,-3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#923F07").ss(1,1,1).p("AAggmQAGAEAEAGQAIAKANAYQgBAAgBABQgOAPgIAHQgQAOgVADQgBABgBAAQgSACgUgJQgGgCgEgCQgMgGAAgDAgjgqQABADABAEQAAAFACAAQABAAAKABQAVAAAJgCQASgEAEgDQgMgIgPAAQgTADgVABQgHAAgGAAIgHABIgHAAAA9AHQgSADgRAKQgWAMgEAPAg3gpQAKAQAAAnQAAAHgDAP");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF4444").s().p("AgDgGQAPgJASgDIgVAUQgPAOgUADIgEAAQAGgOAVgLg");
	this.shape_9.setTransform(3.1,2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E0000").s().p("AgpAmIgLgEQAEgPAAgHQgBgngJgQIAGgBIAOAAIABAHQABAFABAAIAMABQAXAAAHgCQARgEAFgDQAGAEAEAGQAIAKAMAYIgBABQgSADgRAKQgWAMgDAPIgHAAQgQAAgQgHg");
	this.shape_10.setTransform(0.3,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAGQgCAAAAgEIgCgFQAVgBATgDQAPAAAMAHQgEACgSADQgJADgVAAIgLgCg");
	this.shape_11.setTransform(-0.2,-3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#923F07").ss(1,1,1).p("AAdgnQgGACgKACQgNADgNAAQgQAAAAgCQABgGgDgIQgEAAgCAAQgIAAgHgBQACAAAFAVQAGAogHAXQAPAQAUABQAGABAFAAQAGgqAzgGQgGgVgRgRQgDgDgCgDQgPgNgOAAQgWADgJABAA5AFQABADABADQgYAZgLAJQgJAHgPABAg6gzQADABADABAguAjQgDgEgEgF");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF4444").s().p("AAcgWIABAFQgXAYgKAJQgJAGgQACQAHgoAygGg");
	this.shape_13.setTransform(3,2.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5E0000").s().p("AgNAzQgUgBgOgQQAGgXgFgoQgFgVgDgBQAHACAJAAIAFAAQADAIgBAGQABACAPAAQANAAANgDIAPgEIAGAFQARASAGAVQgzAGgFAqIgMgBg");
	this.shape_14.setTransform(0.2,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbAIQABgGgDgHIAdgDQAQAAAOAKIgPAEQgPAEgLAAQgQAAAAgCg");
	this.shape_15.setTransform(-0.2,-4.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#923F07").ss(1,1,1).p("AAsgUQgPgJgUAAQgfADgSAAQADACADAMQADABAUAAQABAAAAAAQAOACAVgFQgIAEgGAFQgKAGgBAGQAAAAgBAAQgXAAgEAAIADAXQACAAACAAQAMAAAogKQARgEAWgPQgEgFgFgEQggAOgdABAAZgOQAHgCAHgCQADgBACgBQAJAEAIAIAg8gbQgBAAAAAAQgHgCgBAAAg8gbQAGABAFAAQAEAAAFAAAgyAaQgBgRgEgPQgDgPgCgGAgyAaQgGgBgHgCAgZAeQgMAAgIgCQgCgBgCAAQgBgBAAAA");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF4444").s().p("AgRAAQAFgDAIgEIAMgEIAFgCQAJAEAIAIQgeAOgdABQABgGALgIg");
	this.shape_17.setTransform(3.1,-0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5E0000").s().p("AgbAaIgEAAIgBgBQgBgSgEgOQgDgPgCgFIALAAIAJAAQAEACADAMQACACASAAIABAAQAQABAVgFQgIAEgFAFQgLAGgBAGIgDAAIgZAAIAEAWQgMAAgJgCg");
	this.shape_18.setTransform(-1.8,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgnAdIgDgWIAbAAIACAAQAcgBAfgOQAFAFAFAEQgXAOgQAFQgpAJgMAAIgDAAgAgYgKIgBAAQgVAAgCgCQgDgMgEgCIA0gCQARgBAQAJIgGACIgOAEQgNAEgMAAIgJAAg");
	this.shape_19.setTransform(1.4,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#923F07").ss(1,1,1).p("AA1gTQACABACACQAEAEAEAIQgXAOgOAFQgZAKghAAQgEAAgEgBQgGAAgFgBQgHgBgHgCAA1gTQgBgBgBgBQgGgDgLAAQgIAAghAFQgcAEgNABQABACADAJQAfAAAMgCQAfgDAXgLgAA5gQQgWAOgmACQgZAAgPAAQACAJADAPAg0gOIgBAAQgFAAgGgCAg0gOQABAAADAAAgxAXIAAgLQAAgFAAgEQgBgNgCgE");
	this.shape_20.setTransform(0.8,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5E0000").s().p("AgzAUIAAgKIAAgJQAAgNgDgEIAEAAIAEAKQAfAAAMgBQAfgDAYgLIADADQgWANgmADIgoACIAFAWIgLgCg");
	this.shape_21.setTransform(1,0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgvAYIgFgYIApAAQAmgCAWgOQAEAEAEAIQgYAOgNAFQgXAKgjAAIgJgBgAg4gOIApgFQAhgFAHAAQAMAAAFADIADACQgXALggADQgLACggAAIgDgLg");
	this.shape_22.setTransform(1.7,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#923F07").ss(1,1,1).p("AgsgLQAWgBAHgCQAVgFAYAAQAPAAAKADQAEABAMAFQgWADgSAGQgCAAgBABQgPAEAAAJAgsgLQgBAAgBAAQgSAAgGAAAgQAGQgLAFgEAJAgpAEQgRAAgDAGAgQAGQgSgCgEAAQgCAAgBAAQgDgJAAgGAAcAAQgPAAgNAAQgJACgHAE");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgzALIgDAAQgDgKAAgFQAXgBAGgCQAXgFAXAAQAOAAAKADIAQAGQgWADgSAEIgCABQgPAAgMACQgLACgGAEIgXgCg");
	this.shape_24.setTransform(1.3,-0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#923F07").ss(1,1,1).p("AALAuQgLAEgNAAQgTAAgJgIQgHgGgDgFQABgCAAgCQADgMAAgOQAAgFgFgRQgEgSgBgDQgDAAgDgBAg5gqQAGABAGAAQAEAAAHgBQAGgBAHgCQAQgEACAAQAGAAAGADQAFADAQAKAALAuQgKgJgHgOQgKgPgCgIQgDgKAJgGQAKgGAHgBQAIgCAHAKQAGAKABAGQAAAHACANQACAHAGAEAgigqIADASQACgBAdAAQASgCAMgGQACACACABQATANAKAVQABABAAACQgPAPgMAKQgIAGgHAEQgGACgFAC");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgfgEIANgDIASgEQAFAAAHADIAUALQgMAGgTACIgdABg");
	this.shape_26.setTransform(-0.2,-3.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF4444").s().p("AgPANQgJgNgDgKQgDgKAKgGQAKgGAIgCQAGgCAHALQAGAKABAHIACATQACAGAGAEQgIAHgHADIgLAEQgIgJgJgNg");
	this.shape_27.setTransform(0.9,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5E0000").s().p("AgsAmQgHgFgDgGIABgDQADgMAAgMQAAgHgFgSIgFgUIAMABIALgBIADASIAfgBQASgDALgFIAFADQATAMAKAVIABADQgPAQgMAJQgGgDgDgHIgCgSQgBgIgGgKQgGgLgIADQgHABgKAGQgJAGADAKQACAIAKAPQAIAOAIAJQgKADgNAAQgTABgJgJg");
	this.shape_28.setTransform(0.3,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#923F07").ss(1,1,1).p("AA5gOQgcACgTABQgOAIgCADAgjgTQAIgBALgBQAdgDAVAAQAMAAALAKQACACADACQAFAFAEAFQgNAKgLAEQgjALgXAAQgFAAgGAAQgNgBgOgDQgDgBgCgBQgIgDgCgDAg7gRQgGgBgFgDAgjgTQgQACgFAAIAAAAQgCAAgBAAQAFAVAAAPAgHgKQgXABgDAAQgCgIAAgCAgVAMIAAgCQAAgEAFgGQADgGAGgEQAHgBAKAAAA+gKQgvAWgfAAQgDAAgCAAQAAAAgBAAQgCgBgBAAQABADACAL");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF4444").s().p("AgoANIgBgBQAAgFAFgHQAEgFAFgDIATgBQgPAHgDAEQADgEAPgHIAtgEIAFAFQgtAVghAAIgEAAg");
	this.shape_30.setTransform(2,-0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgnAZIgDgOIADABIABAAIAFAAQAgAAAtgWQAFAFAEAFQgNAKgLAEQghALgYAAIgLAAgAg1gTIAUgCQAfgDASAAQAMAAAMAKIgtADIgTABIgaABIgDgKg");
	this.shape_31.setTransform(1.8,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5E0000").s().p("AgOASIgFgBQAAgQgFgVIACAAIABAAIAUgCIABAKIAagBQgGAEgDAGQgGAGAAAFIAAABIgDgBIADAOQgMgBgNgDg");
	this.shape_32.setTransform(-3.4,0.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#923F07").ss(1,1,1).p("AAAgUQABAAACAAQAKAAABAAQADABAFAHQABAAABABIgBABIgNABQgFAAgBgCQgCgHgCgCgAAYgLQACAEAEAFQADACAAAGQAAAOgMAHQgKAFgNAAQgJAAgEgCQgFgDAAgIIABgSQAAgIgCgFQgCgGgCgFQgCgBgBgCQgDgCgBgDAgZgXQADABAFABQAEABANAA");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5E0000").s().p("AgSAaQgFgDgBgIIABgRQAAgJgCgFIgDgLIAHACQAFABAPAAQABACAAAIQABACAGAAIAMgCIABAAIAGAIQADAEAAAEQAAANgMAIQgKAFgNAAQgJAAgDgCg");
	this.shape_34.setTransform(0.4,0.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgGADQgCgFgCgCIADAAIAJAAQADABAFAFIABACIgLABQgFAAgBgCg");
	this.shape_35.setTransform(1.2,-1.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#923F07").ss(1,1,1).p("AgJgQQAIADAIADQAMAEAAAMQAAAGgFAFQgEAEgGAAQgEAAgGgGQgHgGAAgDQAEgGAAgKQAAgDAAgDQgFgCgEgC");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5E0000").s().p("AgJANQgHgGAAgDQAEgGAAgKIAAgGIARAGQAMAEAAAMQAAAGgFAFQgFAEgFAAQgDAAgIgGg");
	this.shape_37.setTransform(0.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},2).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},2).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},2).to({state:[{t:this.shape_37},{t:this.shape_36}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-1.4,11,2.8);


(lib.dfsdSymbol10copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#923F07").ss(1,1,1).p("AAigcQgNgKgRAAQgOABgeADQgJAAgKABQAFAIADALQACALAAAKQgBAJgBAFQAAACAAABQAFAHADACQAFAEARABQALABAOgEQAGgSATgJQAOgHAQAAQABgBAAgCQgCgDgQgQQgEgFgEgCQgBACgBAAIhFAHIgDgPAAEAjQAKgCALgEQAbgJAHgT");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF4444").s().p("AgBgIQAMgHAQgBQgHARgZAKIgVAGQAGgRATgIg");
	this.shape_1.setTransform(3.2,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E0000").s().p("AgVAlQgRgBgFgFQgDgBgFgIIAAgDIACgNQAAgLgCgLQgDgLgFgHIATgCIADAPIBFgGIACgDQAEADAEAEIASAUIgBADQgQAAgOAHQgTAJgGASQgMADgKAAIgDAAg");
	this.shape_2.setTransform(0,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkgEIAsgEQAQAAANAIIgBACIhGAHg");
	this.shape_3.setTransform(-0.4,-3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#923F07").ss(1,1,1).p("AAggmQgMgIgPAAQgTADgVABQABADABAEQAAAFACAAQABAAAKABQAVAAAJgCQASgEAEgDQAGAEAEAGQAIAKANAYQgBAAgBABQgOAPgIAHQgQAOgVADQgBABgBAAQgSACgUgJQgGgCgEgCQgMgGAAgDAA9AHQgSADgRAKQgWAMgEAPAg3gpIgHAAAg3gpIAHgBQAGAAAHAAAgwAkQADgPAAgHQAAgngKgQ");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF4444").s().p("AgDgGQAPgJASgDIgVAUQgPAOgUADIgEAAQAGgOAVgLg");
	this.shape_5.setTransform(3.1,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E0000").s().p("AgpAmIgLgEQAEgPAAgHQgBgngJgQIAGgBIAOAAIABAHQABAFABAAIAMABQAXAAAHgCQARgEAFgDQAGAEAEAGQAIAKAMAYIgBABQgSADgRAKQgWAMgDAPIgHAAQgQAAgQgHg");
	this.shape_6.setTransform(0.3,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAGQgCAAAAgEIgCgFQAVgBATgDQAPAAAMAHQgEACgSADQgJADgVAAIgLgCg");
	this.shape_7.setTransform(-0.2,-3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#923F07").ss(1,1,1).p("AAAgUQABAAACAAQAKAAABAAQADABAFAHQABAAABABIgBABIgNABQgFAAgBgCQgCgHgCgCgAAYgLQACAEAEAFQADACAAAGQAAAOgMAHQgKAFgNAAQgJAAgEgCQgFgDAAgIIABgSQAAgIgCgFQgCgGgCgFQgCgBgBgCQgDgCgBgDAgZgXQADABAFABQAEABANAA");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E0000").s().p("AgSAaQgFgDgBgIIABgRQAAgJgCgFIgDgLIAHACQAFABAPAAQABACAAAIQABACAGAAIAMgCIABAAIAGAIQADAEAAAEQAAANgMAIQgKAFgNAAQgJAAgDgCg");
	this.shape_9.setTransform(0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGADQgCgFgCgCIADAAIAJAAQADABAFAFIABACIgLABQgFAAgBgCg");
	this.shape_10.setTransform(1.2,-1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#923F07").ss(1,1,1).p("AgsADQABABAIAAQAMAAAPgEQANgDAKAAQAIAAAWAC");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#923F07").ss(1,1,1).p("AAngQQACABADABQACABAFAFQAEAEABABQgJAJgWAHQgXAGgdgCQgJAAgFAAQgDAAgCAAAgdgOQAUgBAigCQAKAAABAAQAAAAABABQABAAABAAQAAACAAADIAAADQgkAGgegDQAAgCgCgHQgFAAgEAAQgIAAgEAAQAEAGACAIQACACABAPAg3gPQAAAAAFAB");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfAFIgCgHIA2gDIAKAAIACABIABAAIAAAEIAAACQgYAEgVAAIgUgBg");
	this.shape_13.setTransform(0.4,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5E0000").s().p("AgdARIgPgBQgBgOgBgDQgDgIgDgGIALAAIAJAAIACAKQAeADAkgHIAAgDIAAgEIAFABIAHAGIAFAGQgJAJgWAGQgSAFgVAAIgMAAg");
	this.shape_14.setTransform(0.3,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#923F07").ss(1,1,1).p("AgfgwQADAIgBAGQAAACAQAAQANAAANgDQAKgCAGgCQgPgNgOAAQgWADgJABQgEAAgCAAQgIAAgHgBQgDgBgDgBAA5AFQgGgVgRgRQgDgDgCgDAA5AFQABADABADQgYAZgLAJQgJAHgPABAg0gxQACAAAFAVQAGAogHAXQgDgEgEgFAguAjQAPAQAUABQAGABAFAAQAGgqAzgG");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF4444").s().p("AAcgWIABAFQgXAYgKAJQgJAGgQACQAHgoAygGg");
	this.shape_16.setTransform(3,2.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5E0000").s().p("AgNAzQgUgBgOgQQAGgXgFgoQgFgVgDgBQAHACAJAAIAFAAQADAIgBAGQABACAPAAQANAAANgDIAPgEIAGAFQARASAGAVQgzAGgFAqIgMgBg");
	this.shape_17.setTransform(0.2,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAIQABgGgDgHIAdgDQAQAAAOAKIgPAEQgPAEgLAAQgQAAAAgCg");
	this.shape_18.setTransform(-0.2,-4.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#923F07").ss(1,1,1).p("AAsgUQgCABgDABQgHACgHACQgIAEgGAFQgKAGgBAGQAAAAgBAAQgXAAgEAAIADAXQgMAAgIgCQgCgBgCAAQgBgBAAAAQgGgBgHgCAAsgUQAJAEAIAIQAFAEAEAFQgWAPgRAEQgoAKgMAAQgCAAgCAAAgogaQASAAAfgDQAUAAAPAJAgyAaQgBgRgEgPQgDgPgCgGQAGABAFAAQAEAAAFAAQADACADAMQADABAUAAQABAAAAAAQAOACAVgFAhFgdQABAAAHACQAAAAABAAAA9gIQggAOgdAB");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF4444").s().p("AgRAAQAFgDAIgEIAMgEIAFgCQAJAEAIAIQgeAOgdABQABgGALgIg");
	this.shape_20.setTransform(3.1,-0.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5E0000").s().p("AgbAaIgEAAIgBgBQgBgSgEgOQgDgPgCgFIALAAIAJAAQAEACADAMQACACASAAIABAAQAQABAVgFQgIAEgFAFQgLAGgBAGIgDAAIgZAAIAEAWQgMAAgJgCg");
	this.shape_21.setTransform(-1.8,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnAdIgDgWIAbAAIACAAQAcgBAfgOQAFAFAFAEQgXAOgQAFQgpAJgMAAIgDAAgAgYgKIgBAAQgVAAgCgCQgDgMgEgCIA0gCQARgBAQAJIgGACIgOAEQgNAEgMAAIgJAAg");
	this.shape_22.setTransform(1.4,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#923F07").ss(1,1,1).p("AA+gTQABABACACQAFAEAEAIQgYAOgNAFQgZAKghAAQgEAAgFgBQgDgPgCgJQAQAAAXAAQAogCAVgOAA+gTQgBgBgCgBQgFgDgMAAQgIAAgiAFQgaAEgNABQABACACAJQAfAAAKgCQAhgDAYgLgAg6gQQgBgBAAAAQgHgCgCgCAgngOQgDAAgCAAQgGAAgIgCQADAEABANQAAAEAAAFIgBAKQgRgEgBAAAgeAYQgLgBgNgDIgBAA");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5E0000").s().p("Ag5ASIgBAAIABgKIAAgIQgBgOgDgEQAHACAHAAIAEAAIAEAKQAfAAAKgBQAhgDAYgLIADADQgWANgoADIgmACIAFAWQgLgBgNgDg");
	this.shape_24.setTransform(0.3,0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgvAYIgFgYIApAAQAmgCAWgOQAEAEAEAIQgYAOgNAFQgXAKgjAAIgJgBgAg4gOIApgFQAhgFAHAAQAMAAAFADIADACQgXALggADQgLACggAAIgDgLg");
	this.shape_25.setTransform(1.7,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#923F07").ss(1,1,1).p("AgsgLQAWgBAHgCQAVgFAYAAQAPAAAKADQAEABAMAFQgWADgSAGQgCAAgBABQgPAAgNAAQgJACgHAEQgLAFgEAJAgsgLQgBAAgBAAQgSAAgGAAAgpAEQgRAAgDAGAgQAGQgSgCgEAAQgCAAgBAAQgDgJAAgGAAcAAQgPAEAAAJ");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgzALIgDAAQgDgKAAgFQAXgBAGgCQAXgFAXAAQAOAAAKADIAQAGQgWADgSAEIgCABQgPAAgMACQgLACgGAEIgXgCg");
	this.shape_27.setTransform(1.3,-0.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#923F07").ss(1,1,1).p("AALAuQgLAEgNAAQgTAAgJgIQgHgGgDgFQABgCAAgCQADgMAAgOQAAgFgFgRQgEgSgBgDQgDAAgDgBAg5gqQAGABAGAAQAEAAAHgBIADASQACgBAdAAQASgCAMgGAAlAgQgGgEgCgHQgCgNAAgHQgBgGgGgKQgHgKgIACQgHABgKAGQgJAGADAKQACAIAKAPQAHAOAKAJQAFgCAGgCQAHgEAIgGgAgigqQAGgBAHgCQAQgEACAAQAGAAAGADQAFADAQAKQACACACABQATANAKAVQABABAAACQgPAPgMAK");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgfgEIANgDIASgEQAFAAAHADIAUALQgMAGgTACIgdABg");
	this.shape_29.setTransform(-0.2,-3.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF4444").s().p("AgPANQgJgNgDgKQgDgKAKgGQAKgGAIgCQAGgCAHALQAGAKABAHIACATQACAGAGAEQgIAHgHADIgLAEQgIgJgJgNg");
	this.shape_30.setTransform(0.9,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5E0000").s().p("AgsAmQgHgFgDgGIABgDQADgMAAgMQAAgHgFgSIgFgUIAMABIALgBIADASIAfgBQASgDALgFIAFADQATAMAKAVIABADQgPAQgMAJQgGgDgDgHIgCgSQgBgIgGgKQgGgLgIADQgHABgKAGQgJAGADAKQACAIAKAPQAIAOAIAJQgKADgNAAQgTABgJgJg");
	this.shape_31.setTransform(0.3,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#923F07").ss(1,1,1).p("AA5gOQgcACgTABQgOAIgCADAgjgTQAIgBALgBQAdgDAVAAQAMAAALAKQACACADACQAFAFAEAFQgNAKgLAEQgjALgXAAQgFAAgGAAQgNgBgOgDQgDgBgCgBQgIgDgCgDAg7gRQgGgBgFgDAgjgTQgQACgFAAIAAAAQgCAAgBAAQAFAVAAAPAgHgKQgXABgDAAQgCgIAAgCAgVAMIAAgCQAAgEAFgGQADgGAGgEQAHgBAKAAAA+gKQgvAWgfAAQgDAAgCAAQAAAAgBAAQgCgBgBAAQABADACAL");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF4444").s().p("AgoANIgBgBQAAgFAFgHQAEgFAFgDIATgBQgPAHgDAEQADgEAPgHIAtgEIAFAFQgtAVghAAIgEAAg");
	this.shape_33.setTransform(2,-0.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgnAZIgDgOIADABIABAAIAFAAQAgAAAtgWQAFAFAEAFQgNAKgLAEQghALgYAAIgLAAgAg1gTIAUgCQAfgDASAAQAMAAAMAKIgtADIgTABIgaABIgDgKg");
	this.shape_34.setTransform(1.8,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5E0000").s().p("AgOASIgFgBQAAgQgFgVIACAAIABAAIAUgCIABAKIAagBQgGAEgDAGQgGAGAAAFIAAABIgDgBIADAOQgMgBgNgDg");
	this.shape_35.setTransform(-3.4,0.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#923F07").ss(1,1,1).p("AgJgQQAIADAIADQAMAEAAAMQAAAGgFAFQgEAEgGAAQgEAAgGgGQgHgGAAgDQAEgGAAgKQAAgDAAgDQgFgCgEgC");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5E0000").s().p("AgJANQgHgGAAgDQAEgGAAgKIAAgGIARAGQAMAEAAAMQAAAGgFAFQgFAEgFAAQgDAAgIgGg");
	this.shape_37.setTransform(0.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},5).to({state:[{t:this.shape_11}]},13).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},6).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},2).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_37},{t:this.shape_36}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,-4.9,14.2,9.8);


(lib.dfsdSymbol10copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#923F07").ss(1,1,1).p("AgsADQABABAIAAQAMAAAPgEQANgDAKAAQAIAAAWAC");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#923F07").ss(1,1,1).p("AAngQQACABADABQACABAFAFQAEAEABABQgJAJgWAHQgXAGgdgCQgJAAgFAAQgDAAgCAAAgdgOQAUgBAigCQAKAAABAAQAAAAABABQABAAABAAQAAACAAADIAAADQgkAGgegDQAAgCgCgHQgFAAgEAAQgIAAgEAAQAEAGACAIQACACABAPAg3gPQAAAAAFAB");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAFIgCgHIA2gDIAKAAIACABIABAAIAAAEIAAACQgYAEgVAAIgUgBg");
	this.shape_2.setTransform(0.4,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E0000").s().p("AgdARIgPgBQgBgOgBgDQgDgIgDgGIALAAIAJAAIACAKQAeADAkgHIAAgDIAAgEIAFABIAHAGIAFAGQgJAJgWAGQgSAFgVAAIgMAAg");
	this.shape_3.setTransform(0.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#923F07").ss(1,1,1).p("AgogiIADAPIBFgHQABAAABgCQAEACAEAFQAQAQACADQAAACgBABQgHATgbAJQgLAEgKACQgOAEgLgBQgRgBgFgEQgDgCgFgHQAAgBAAgCQABgFABgJQAAgKgCgLQgDgLgFgIQAKgBAJAAQAegDAOgBQARAAANAKAA7ABQgQAAgOAHQgTAJgGAS");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF4444").s().p("AgBgIQAMgHAQgBQgHARgZAKIgVAGQAGgRATgIg");
	this.shape_5.setTransform(3.2,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E0000").s().p("AgVAlQgRgBgFgFQgDgBgFgIIAAgDIACgNQAAgLgCgLQgDgLgFgHIATgCIADAPIBFgGIACgDQAEADAEAEIASAUIgBADQgQAAgOAHQgTAJgGASQgMADgKAAIgDAAg");
	this.shape_6.setTransform(0,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkgEIAsgEQAQAAANAIIgBACIhGAHg");
	this.shape_7.setTransform(-0.4,-3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#923F07").ss(1,1,1).p("AAggmQAGAEAEAGQAIAKANAYQgBAAgBABQgOAPgIAHQgQAOgVADQgBABgBAAQgSACgUgJQgGgCgEgCQgMgGAAgDAgjgqQABADABAEQAAAFACAAQABAAAKABQAVAAAJgCQASgEAEgDQgMgIgPAAQgTADgVABQgHAAgGAAIgHABIgHAAAA9AHQgSADgRAKQgWAMgEAPAg3gpQAKAQAAAnQAAAHgDAP");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF4444").s().p("AgDgGQAPgJASgDIgVAUQgPAOgUADIgEAAQAGgOAVgLg");
	this.shape_9.setTransform(3.1,2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E0000").s().p("AgpAmIgLgEQAEgPAAgHQgBgngJgQIAGgBIAOAAIABAHQABAFABAAIAMABQAXAAAHgCQARgEAFgDQAGAEAEAGQAIAKAMAYIgBABQgSADgRAKQgWAMgDAPIgHAAQgQAAgQgHg");
	this.shape_10.setTransform(0.3,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAGQgCAAAAgEIgCgFQAVgBATgDQAPAAAMAHQgEACgSADQgJADgVAAIgLgCg");
	this.shape_11.setTransform(-0.2,-3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#923F07").ss(1,1,1).p("AAdgnQgGACgKACQgNADgNAAQgQAAAAgCQABgGgDgIQgEAAgCAAQgIAAgHgBQACAAAFAVQAGAogHAXQAPAQAUABQAGABAFAAQAGgqAzgGQgGgVgRgRQgDgDgCgDQgPgNgOAAQgWADgJABAA5AFQABADABADQgYAZgLAJQgJAHgPABAg6gzQADABADABAguAjQgDgEgEgF");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF4444").s().p("AAcgWIABAFQgXAYgKAJQgJAGgQACQAHgoAygGg");
	this.shape_13.setTransform(3,2.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5E0000").s().p("AgNAzQgUgBgOgQQAGgXgFgoQgFgVgDgBQAHACAJAAIAFAAQADAIgBAGQABACAPAAQANAAANgDIAPgEIAGAFQARASAGAVQgzAGgFAqIgMgBg");
	this.shape_14.setTransform(0.2,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbAIQABgGgDgHIAdgDQAQAAAOAKIgPAEQgPAEgLAAQgQAAAAgCg");
	this.shape_15.setTransform(-0.2,-4.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#923F07").ss(1,1,1).p("AAsgUQgPgJgUAAQgfADgSAAQADACADAMQADABAUAAQABAAAAAAQAOACAVgFQgIAEgGAFQgKAGgBAGQAAAAgBAAQgXAAgEAAIADAXQACAAACAAQAMAAAogKQARgEAWgPQgEgFgFgEQggAOgdABAAZgOQAHgCAHgCQADgBACgBQAJAEAIAIAg8gbQgBAAAAAAQgHgCgBAAAg8gbQAGABAFAAQAEAAAFAAAgyAaQgBgRgEgPQgDgPgCgGAgyAaQgGgBgHgCAgZAeQgMAAgIgCQgCgBgCAAQgBgBAAAA");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF4444").s().p("AgRAAQAFgDAIgEIAMgEIAFgCQAJAEAIAIQgeAOgdABQABgGALgIg");
	this.shape_17.setTransform(3.1,-0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5E0000").s().p("AgbAaIgEAAIgBgBQgBgSgEgOQgDgPgCgFIALAAIAJAAQAEACADAMQACACASAAIABAAQAQABAVgFQgIAEgFAFQgLAGgBAGIgDAAIgZAAIAEAWQgMAAgJgCg");
	this.shape_18.setTransform(-1.8,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgnAdIgDgWIAbAAIACAAQAcgBAfgOQAFAFAFAEQgXAOgQAFQgpAJgMAAIgDAAgAgYgKIgBAAQgVAAgCgCQgDgMgEgCIA0gCQARgBAQAJIgGACIgOAEQgNAEgMAAIgJAAg");
	this.shape_19.setTransform(1.4,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#923F07").ss(1,1,1).p("AA1gTQACABACACQAEAEAEAIQgXAOgOAFQgZAKghAAQgEAAgEgBQgGAAgFgBQgHgBgHgCAA1gTQgBgBgBgBQgGgDgLAAQgIAAghAFQgcAEgNABQABACADAJQAfAAAMgCQAfgDAXgLgAA5gQQgWAOgmACQgZAAgPAAQACAJADAPAg0gOIgBAAQgFAAgGgCAg0gOQABAAADAAAgxAXIAAgLQAAgFAAgEQgBgNgCgE");
	this.shape_20.setTransform(0.8,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5E0000").s().p("AgzAUIAAgKIAAgJQAAgNgDgEIAEAAIAEAKQAfAAAMgBQAfgDAYgLIADADQgWANgmADIgoACIAFAWIgLgCg");
	this.shape_21.setTransform(1,0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgvAYIgFgYIApAAQAmgCAWgOQAEAEAEAIQgYAOgNAFQgXAKgjAAIgJgBgAg4gOIApgFQAhgFAHAAQAMAAAFADIADACQgXALggADQgLACggAAIgDgLg");
	this.shape_22.setTransform(1.7,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#923F07").ss(1,1,1).p("AgsgLQAWgBAHgCQAVgFAYAAQAPAAAKADQAEABAMAFQgWADgSAGQgCAAgBABQgPAEAAAJAgsgLQgBAAgBAAQgSAAgGAAAgQAGQgLAFgEAJAgpAEQgRAAgDAGAgQAGQgSgCgEAAQgCAAgBAAQgDgJAAgGAAcAAQgPAAgNAAQgJACgHAE");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgzALIgDAAQgDgKAAgFQAXgBAGgCQAXgFAXAAQAOAAAKADIAQAGQgWADgSAEIgCABQgPAAgMACQgLACgGAEIgXgCg");
	this.shape_24.setTransform(1.3,-0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#923F07").ss(1,1,1).p("AALAuQgLAEgNAAQgTAAgJgIQgHgGgDgFQABgCAAgCQADgMAAgOQAAgFgFgRQgEgSgBgDQgDAAgDgBAg5gqQAGABAGAAQAEAAAHgBQAGgBAHgCQAQgEACAAQAGAAAGADQAFADAQAKAALAuQgKgJgHgOQgKgPgCgIQgDgKAJgGQAKgGAHgBQAIgCAHAKQAGAKABAGQAAAHACANQACAHAGAEAgigqIADASQACgBAdAAQASgCAMgGQACACACABQATANAKAVQABABAAACQgPAPgMAKQgIAGgHAEQgGACgFAC");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgfgEIANgDIASgEQAFAAAHADIAUALQgMAGgTACIgdABg");
	this.shape_26.setTransform(-0.2,-3.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF4444").s().p("AgPANQgJgNgDgKQgDgKAKgGQAKgGAIgCQAGgCAHALQAGAKABAHIACATQACAGAGAEQgIAHgHADIgLAEQgIgJgJgNg");
	this.shape_27.setTransform(0.9,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5E0000").s().p("AgsAmQgHgFgDgGIABgDQADgMAAgMQAAgHgFgSIgFgUIAMABIALgBIADASIAfgBQASgDALgFIAFADQATAMAKAVIABADQgPAQgMAJQgGgDgDgHIgCgSQgBgIgGgKQgGgLgIADQgHABgKAGQgJAGADAKQACAIAKAPQAIAOAIAJQgKADgNAAQgTABgJgJg");
	this.shape_28.setTransform(0.3,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#923F07").ss(1,1,1).p("AA5gOQgcACgTABQgOAIgCADAgjgTQAIgBALgBQAdgDAVAAQAMAAALAKQACACADACQAFAFAEAFQgNAKgLAEQgjALgXAAQgFAAgGAAQgNgBgOgDQgDgBgCgBQgIgDgCgDAg7gRQgGgBgFgDAgjgTQgQACgFAAIAAAAQgCAAgBAAQAFAVAAAPAgHgKQgXABgDAAQgCgIAAgCAgVAMIAAgCQAAgEAFgGQADgGAGgEQAHgBAKAAAA+gKQgvAWgfAAQgDAAgCAAQAAAAgBAAQgCgBgBAAQABADACAL");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF4444").s().p("AgoANIgBgBQAAgFAFgHQAEgFAFgDIATgBQgPAHgDAEQADgEAPgHIAtgEIAFAFQgtAVghAAIgEAAg");
	this.shape_30.setTransform(2,-0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgnAZIgDgOIADABIABAAIAFAAQAgAAAtgWQAFAFAEAFQgNAKgLAEQghALgYAAIgLAAgAg1gTIAUgCQAfgDASAAQAMAAAMAKIgtADIgTABIgaABIgDgKg");
	this.shape_31.setTransform(1.8,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5E0000").s().p("AgOASIgFgBQAAgQgFgVIACAAIABAAIAUgCIABAKIAagBQgGAEgDAGQgGAGAAAFIAAABIgDgBIADAOQgMgBgNgDg");
	this.shape_32.setTransform(-3.4,0.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#923F07").ss(1,1,1).p("AAAgUQABAAACAAQAKAAABAAQADABAFAHQABAAABABIgBABIgNABQgFAAgBgCQgCgHgCgCgAAYgLQACAEAEAFQADACAAAGQAAAOgMAHQgKAFgNAAQgJAAgEgCQgFgDAAgIIABgSQAAgIgCgFQgCgGgCgFQgCgBgBgCQgDgCgBgDAgZgXQADABAFABQAEABANAA");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5E0000").s().p("AgSAaQgFgDgBgIIABgRQAAgJgCgFIgDgLIAHACQAFABAPAAQABACAAAIQABACAGAAIAMgCIABAAIAGAIQADAEAAAEQAAANgMAIQgKAFgNAAQgJAAgDgCg");
	this.shape_34.setTransform(0.4,0.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgGADQgCgFgCgCIADAAIAJAAQADABAFAFIABACIgLABQgFAAgBgCg");
	this.shape_35.setTransform(1.2,-1.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#923F07").ss(1,1,1).p("AgJgQQAIADAIADQAMAEAAAMQAAAGgFAFQgEAEgGAAQgEAAgGgGQgHgGAAgDQAEgGAAgKQAAgDAAgDQgFgCgEgC");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5E0000").s().p("AgJANQgHgGAAgDQAEgGAAgKIAAgGIARAGQAMAEAAAMQAAAGgFAFQgFAEgFAAQgDAAgIgGg");
	this.shape_37.setTransform(0.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},2).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},2).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},2).to({state:[{t:this.shape_37},{t:this.shape_36}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-1.4,11,2.8);


(lib.dfsdSymbol10copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#923F07").ss(1,1,1).p("AAigcQgNgKgRAAQgOABgeADQgJAAgKABQAFAIADALQACALAAAKQgBAJgBAFQAAACAAABQAFAHADACQAFAEARABQALABAOgEQAGgSATgJQAOgHAQAAQABgBAAgCQgCgDgQgQQgEgFgEgCQgBACgBAAIhFAHIgDgPAAEAjQAKgCALgEQAbgJAHgT");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF4444").s().p("AgBgIQAMgHAQgBQgHARgZAKIgVAGQAGgRATgIg");
	this.shape_1.setTransform(3.2,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E0000").s().p("AgVAlQgRgBgFgFQgDgBgFgIIAAgDIACgNQAAgLgCgLQgDgLgFgHIATgCIADAPIBFgGIACgDQAEADAEAEIASAUIgBADQgQAAgOAHQgTAJgGASQgMADgKAAIgDAAg");
	this.shape_2.setTransform(0,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkgEIAsgEQAQAAANAIIgBACIhGAHg");
	this.shape_3.setTransform(-0.4,-3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#923F07").ss(1,1,1).p("AAggmQgMgIgPAAQgTADgVABQABADABAEQAAAFACAAQABAAAKABQAVAAAJgCQASgEAEgDQAGAEAEAGQAIAKANAYQgBAAgBABQgOAPgIAHQgQAOgVADQgBABgBAAQgSACgUgJQgGgCgEgCQgMgGAAgDAA9AHQgSADgRAKQgWAMgEAPAg3gpIgHAAAg3gpIAHgBQAGAAAHAAAgwAkQADgPAAgHQAAgngKgQ");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF4444").s().p("AgDgGQAPgJASgDIgVAUQgPAOgUADIgEAAQAGgOAVgLg");
	this.shape_5.setTransform(3.1,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E0000").s().p("AgpAmIgLgEQAEgPAAgHQgBgngJgQIAGgBIAOAAIABAHQABAFABAAIAMABQAXAAAHgCQARgEAFgDQAGAEAEAGQAIAKAMAYIgBABQgSADgRAKQgWAMgDAPIgHAAQgQAAgQgHg");
	this.shape_6.setTransform(0.3,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAGQgCAAAAgEIgCgFQAVgBATgDQAPAAAMAHQgEACgSADQgJADgVAAIgLgCg");
	this.shape_7.setTransform(-0.2,-3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#923F07").ss(1,1,1).p("AAAgUQABAAACAAQAKAAABAAQADABAFAHQABAAABABIgBABIgNABQgFAAgBgCQgCgHgCgCgAAYgLQACAEAEAFQADACAAAGQAAAOgMAHQgKAFgNAAQgJAAgEgCQgFgDAAgIIABgSQAAgIgCgFQgCgGgCgFQgCgBgBgCQgDgCgBgDAgZgXQADABAFABQAEABANAA");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E0000").s().p("AgSAaQgFgDgBgIIABgRQAAgJgCgFIgDgLIAHACQAFABAPAAQABACAAAIQABACAGAAIAMgCIABAAIAGAIQADAEAAAEQAAANgMAIQgKAFgNAAQgJAAgDgCg");
	this.shape_9.setTransform(0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGADQgCgFgCgCIADAAIAJAAQADABAFAFIABACIgLABQgFAAgBgCg");
	this.shape_10.setTransform(1.2,-1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#923F07").ss(1,1,1).p("AgsADQABABAIAAQAMAAAPgEQANgDAKAAQAIAAAWAC");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#923F07").ss(1,1,1).p("AAngQQACABADABQACABAFAFQAEAEABABQgJAJgWAHQgXAGgdgCQgJAAgFAAQgDAAgCAAAgdgOQAUgBAigCQAKAAABAAQAAAAABABQABAAABAAQAAACAAADIAAADQgkAGgegDQAAgCgCgHQgFAAgEAAQgIAAgEAAQAEAGACAIQACACABAPAg3gPQAAAAAFAB");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfAFIgCgHIA2gDIAKAAIACABIABAAIAAAEIAAACQgYAEgVAAIgUgBg");
	this.shape_13.setTransform(0.4,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5E0000").s().p("AgdARIgPgBQgBgOgBgDQgDgIgDgGIALAAIAJAAIACAKQAeADAkgHIAAgDIAAgEIAFABIAHAGIAFAGQgJAJgWAGQgSAFgVAAIgMAAg");
	this.shape_14.setTransform(0.3,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#923F07").ss(1,1,1).p("AgfgwQADAIgBAGQAAACAQAAQANAAANgDQAKgCAGgCQgPgNgOAAQgWADgJABQgEAAgCAAQgIAAgHgBQgDgBgDgBAA5AFQgGgVgRgRQgDgDgCgDAA5AFQABADABADQgYAZgLAJQgJAHgPABAg0gxQACAAAFAVQAGAogHAXQgDgEgEgFAguAjQAPAQAUABQAGABAFAAQAGgqAzgG");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF4444").s().p("AAcgWIABAFQgXAYgKAJQgJAGgQACQAHgoAygGg");
	this.shape_16.setTransform(3,2.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5E0000").s().p("AgNAzQgUgBgOgQQAGgXgFgoQgFgVgDgBQAHACAJAAIAFAAQADAIgBAGQABACAPAAQANAAANgDIAPgEIAGAFQARASAGAVQgzAGgFAqIgMgBg");
	this.shape_17.setTransform(0.2,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAIQABgGgDgHIAdgDQAQAAAOAKIgPAEQgPAEgLAAQgQAAAAgCg");
	this.shape_18.setTransform(-0.2,-4.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#923F07").ss(1,1,1).p("AAsgUQgCABgDABQgHACgHACQgIAEgGAFQgKAGgBAGQAAAAgBAAQgXAAgEAAIADAXQgMAAgIgCQgCgBgCAAQgBgBAAAAQgGgBgHgCAAsgUQAJAEAIAIQAFAEAEAFQgWAPgRAEQgoAKgMAAQgCAAgCAAAgogaQASAAAfgDQAUAAAPAJAgyAaQgBgRgEgPQgDgPgCgGQAGABAFAAQAEAAAFAAQADACADAMQADABAUAAQABAAAAAAQAOACAVgFAhFgdQABAAAHACQAAAAABAAAA9gIQggAOgdAB");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF4444").s().p("AgRAAQAFgDAIgEIAMgEIAFgCQAJAEAIAIQgeAOgdABQABgGALgIg");
	this.shape_20.setTransform(3.1,-0.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5E0000").s().p("AgbAaIgEAAIgBgBQgBgSgEgOQgDgPgCgFIALAAIAJAAQAEACADAMQACACASAAIABAAQAQABAVgFQgIAEgFAFQgLAGgBAGIgDAAIgZAAIAEAWQgMAAgJgCg");
	this.shape_21.setTransform(-1.8,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnAdIgDgWIAbAAIACAAQAcgBAfgOQAFAFAFAEQgXAOgQAFQgpAJgMAAIgDAAgAgYgKIgBAAQgVAAgCgCQgDgMgEgCIA0gCQARgBAQAJIgGACIgOAEQgNAEgMAAIgJAAg");
	this.shape_22.setTransform(1.4,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#923F07").ss(1,1,1).p("AA+gTQABABACACQAFAEAEAIQgYAOgNAFQgZAKghAAQgEAAgFgBQgDgPgCgJQAQAAAXAAQAogCAVgOAA+gTQgBgBgCgBQgFgDgMAAQgIAAgiAFQgaAEgNABQABACACAJQAfAAAKgCQAhgDAYgLgAg6gQQgBgBAAAAQgHgCgCgCAgngOQgDAAgCAAQgGAAgIgCQADAEABANQAAAEAAAFIgBAKQgRgEgBAAAgeAYQgLgBgNgDIgBAA");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5E0000").s().p("Ag5ASIgBAAIABgKIAAgIQgBgOgDgEQAHACAHAAIAEAAIAEAKQAfAAAKgBQAhgDAYgLIADADQgWANgoADIgmACIAFAWQgLgBgNgDg");
	this.shape_24.setTransform(0.3,0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgvAYIgFgYIApAAQAmgCAWgOQAEAEAEAIQgYAOgNAFQgXAKgjAAIgJgBgAg4gOIApgFQAhgFAHAAQAMAAAFADIADACQgXALggADQgLACggAAIgDgLg");
	this.shape_25.setTransform(1.7,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#923F07").ss(1,1,1).p("AgsgLQAWgBAHgCQAVgFAYAAQAPAAAKADQAEABAMAFQgWADgSAGQgCAAgBABQgPAAgNAAQgJACgHAEQgLAFgEAJAgsgLQgBAAgBAAQgSAAgGAAAgpAEQgRAAgDAGAgQAGQgSgCgEAAQgCAAgBAAQgDgJAAgGAAcAAQgPAEAAAJ");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgzALIgDAAQgDgKAAgFQAXgBAGgCQAXgFAXAAQAOAAAKADIAQAGQgWADgSAEIgCABQgPAAgMACQgLACgGAEIgXgCg");
	this.shape_27.setTransform(1.3,-0.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#923F07").ss(1,1,1).p("AALAuQgLAEgNAAQgTAAgJgIQgHgGgDgFQABgCAAgCQADgMAAgOQAAgFgFgRQgEgSgBgDQgDAAgDgBAg5gqQAGABAGAAQAEAAAHgBIADASQACgBAdAAQASgCAMgGAAlAgQgGgEgCgHQgCgNAAgHQgBgGgGgKQgHgKgIACQgHABgKAGQgJAGADAKQACAIAKAPQAHAOAKAJQAFgCAGgCQAHgEAIgGgAgigqQAGgBAHgCQAQgEACAAQAGAAAGADQAFADAQAKQACACACABQATANAKAVQABABAAACQgPAPgMAK");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgfgEIANgDIASgEQAFAAAHADIAUALQgMAGgTACIgdABg");
	this.shape_29.setTransform(-0.2,-3.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF4444").s().p("AgPANQgJgNgDgKQgDgKAKgGQAKgGAIgCQAGgCAHALQAGAKABAHIACATQACAGAGAEQgIAHgHADIgLAEQgIgJgJgNg");
	this.shape_30.setTransform(0.9,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5E0000").s().p("AgsAmQgHgFgDgGIABgDQADgMAAgMQAAgHgFgSIgFgUIAMABIALgBIADASIAfgBQASgDALgFIAFADQATAMAKAVIABADQgPAQgMAJQgGgDgDgHIgCgSQgBgIgGgKQgGgLgIADQgHABgKAGQgJAGADAKQACAIAKAPQAIAOAIAJQgKADgNAAQgTABgJgJg");
	this.shape_31.setTransform(0.3,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#923F07").ss(1,1,1).p("AA5gOQgcACgTABQgOAIgCADAgjgTQAIgBALgBQAdgDAVAAQAMAAALAKQACACADACQAFAFAEAFQgNAKgLAEQgjALgXAAQgFAAgGAAQgNgBgOgDQgDgBgCgBQgIgDgCgDAg7gRQgGgBgFgDAgjgTQgQACgFAAIAAAAQgCAAgBAAQAFAVAAAPAgHgKQgXABgDAAQgCgIAAgCAgVAMIAAgCQAAgEAFgGQADgGAGgEQAHgBAKAAAA+gKQgvAWgfAAQgDAAgCAAQAAAAgBAAQgCgBgBAAQABADACAL");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF4444").s().p("AgoANIgBgBQAAgFAFgHQAEgFAFgDIATgBQgPAHgDAEQADgEAPgHIAtgEIAFAFQgtAVghAAIgEAAg");
	this.shape_33.setTransform(2,-0.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgnAZIgDgOIADABIABAAIAFAAQAgAAAtgWQAFAFAEAFQgNAKgLAEQghALgYAAIgLAAgAg1gTIAUgCQAfgDASAAQAMAAAMAKIgtADIgTABIgaABIgDgKg");
	this.shape_34.setTransform(1.8,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5E0000").s().p("AgOASIgFgBQAAgQgFgVIACAAIABAAIAUgCIABAKIAagBQgGAEgDAGQgGAGAAAFIAAABIgDgBIADAOQgMgBgNgDg");
	this.shape_35.setTransform(-3.4,0.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#923F07").ss(1,1,1).p("AgJgQQAIADAIADQAMAEAAAMQAAAGgFAFQgEAEgGAAQgEAAgGgGQgHgGAAgDQAEgGAAgKQAAgDAAgDQgFgCgEgC");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5E0000").s().p("AgJANQgHgGAAgDQAEgGAAgKIAAgGIARAGQAMAEAAAMQAAAGgFAFQgFAEgFAAQgDAAgIgGg");
	this.shape_37.setTransform(0.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},5).to({state:[{t:this.shape_11}]},13).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},6).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},2).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_37},{t:this.shape_36}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,-4.9,14.2,9.8);


(lib.dfsdSymbol10copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#923F07").ss(1,1,1).p("AAigcQgNgKgRAAQgOABgeADQgJAAgKABQAFAIADALQACALAAAKQgBAJgBAFQAAACAAABQAFAHADACQAFAEARABQALABAOgEQAGgSATgJQAOgHAQAAQABgBAAgCQgCgDgQgQQgEgFgEgCQgBACgBAAIhFAHIgDgPAAEAjQAKgCALgEQAbgJAHgT");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF4444").s().p("AgBgIQAMgHAQgBQgHARgZAKIgVAGQAGgRATgIg");
	this.shape_1.setTransform(3.2,1.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5E0000").s().p("AgVAlQgRgBgFgFQgDgBgFgIIAAgDIACgNQAAgLgCgLQgDgLgFgHIATgCIADAPIBFgGIACgDQAEADAEAEIASAUIgBADQgQAAgOAHQgTAJgGASQgMADgKAAIgDAAg");
	this.shape_2.setTransform(0,0.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkgEIAsgEQAQAAANAIIgBACIhGAHg");
	this.shape_3.setTransform(-0.4,-3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#923F07").ss(1,1,1).p("AAggmQgMgIgPAAQgTADgVABQABADABAEQAAAFACAAQABAAAKABQAVAAAJgCQASgEAEgDQAGAEAEAGQAIAKANAYQgBAAgBABQgOAPgIAHQgQAOgVADQgBABgBAAQgSACgUgJQgGgCgEgCQgMgGAAgDAA9AHQgSADgRAKQgWAMgEAPAg3gpIgHAAAg3gpIAHgBQAGAAAHAAAgwAkQADgPAAgHQAAgngKgQ");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF4444").s().p("AgDgGQAPgJASgDIgVAUQgPAOgUADIgEAAQAGgOAVgLg");
	this.shape_5.setTransform(3.1,2.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E0000").s().p("AgpAmIgLgEQAEgPAAgHQgBgngJgQIAGgBIAOAAIABAHQABAFABAAIAMABQAXAAAHgCQARgEAFgDQAGAEAEAGQAIAKAMAYIgBABQgSADgRAKQgWAMgDAPIgHAAQgQAAgQgHg");
	this.shape_6.setTransform(0.3,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgdAGQgCAAAAgEIgCgFQAVgBATgDQAPAAAMAHQgEACgSADQgJADgVAAIgLgCg");
	this.shape_7.setTransform(-0.2,-3.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#923F07").ss(1,1,1).p("AAAgUQABAAACAAQAKAAABAAQADABAFAHQABAAABABIgBABIgNABQgFAAgBgCQgCgHgCgCgAAYgLQACAEAEAFQADACAAAGQAAAOgMAHQgKAFgNAAQgJAAgEgCQgFgDAAgIIABgSQAAgIgCgFQgCgGgCgFQgCgBgBgCQgDgCgBgDAgZgXQADABAFABQAEABANAA");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5E0000").s().p("AgSAaQgFgDgBgIIABgRQAAgJgCgFIgDgLIAHACQAFABAPAAQABACAAAIQABACAGAAIAMgCIABAAIAGAIQADAEAAAEQAAANgMAIQgKAFgNAAQgJAAgDgCg");
	this.shape_9.setTransform(0.4,0.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgGADQgCgFgCgCIADAAIAJAAQADABAFAFIABACIgLABQgFAAgBgCg");
	this.shape_10.setTransform(1.2,-1.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#923F07").ss(1,1,1).p("AgsADQABABAIAAQAMAAAPgEQANgDAKAAQAIAAAWAC");

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#923F07").ss(1,1,1).p("AAngQQACABADABQACABAFAFQAEAEABABQgJAJgWAHQgXAGgdgCQgJAAgFAAQgDAAgCAAAgdgOQAUgBAigCQAKAAABAAQAAAAABABQABAAABAAQAAACAAADIAAADQgkAGgegDQAAgCgCgHQgFAAgEAAQgIAAgEAAQAEAGACAIQACACABAPAg3gPQAAAAAFAB");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgfAFIgCgHIA2gDIAKAAIACABIABAAIAAAEIAAACQgYAEgVAAIgUgBg");
	this.shape_13.setTransform(0.4,-1.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5E0000").s().p("AgdARIgPgBQgBgOgBgDQgDgIgDgGIALAAIAJAAIACAKQAeADAkgHIAAgDIAAgEIAFABIAHAGIAFAGQgJAJgWAGQgSAFgVAAIgMAAg");
	this.shape_14.setTransform(0.3,0);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#923F07").ss(1,1,1).p("AgfgwQADAIgBAGQAAACAQAAQANAAANgDQAKgCAGgCQgPgNgOAAQgWADgJABQgEAAgCAAQgIAAgHgBQgDgBgDgBAA5AFQgGgVgRgRQgDgDgCgDAA5AFQABADABADQgYAZgLAJQgJAHgPABAg0gxQACAAAFAVQAGAogHAXQgDgEgEgFAguAjQAPAQAUABQAGABAFAAQAGgqAzgG");

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FF4444").s().p("AAcgWIABAFQgXAYgKAJQgJAGgQACQAHgoAygGg");
	this.shape_16.setTransform(3,2.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#5E0000").s().p("AgNAzQgUgBgOgQQAGgXgFgoQgFgVgDgBQAHACAJAAIAFAAQADAIgBAGQABACAPAAQANAAANgDIAPgEIAGAFQARASAGAVQgzAGgFAqIgMgBg");
	this.shape_17.setTransform(0.2,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgbAIQABgGgDgHIAdgDQAQAAAOAKIgPAEQgPAEgLAAQgQAAAAgCg");
	this.shape_18.setTransform(-0.2,-4.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#923F07").ss(1,1,1).p("AAsgUQgCABgDABQgHACgHACQgIAEgGAFQgKAGgBAGQAAAAgBAAQgXAAgEAAIADAXQgMAAgIgCQgCgBgCAAQgBgBAAAAQgGgBgHgCAAsgUQAJAEAIAIQAFAEAEAFQgWAPgRAEQgoAKgMAAQgCAAgCAAAgogaQASAAAfgDQAUAAAPAJAgyAaQgBgRgEgPQgDgPgCgGQAGABAFAAQAEAAAFAAQADACADAMQADABAUAAQABAAAAAAQAOACAVgFAhFgdQABAAAHACQAAAAABAAAA9gIQggAOgdAB");

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF4444").s().p("AgRAAQAFgDAIgEIAMgEIAFgCQAJAEAIAIQgeAOgdABQABgGALgIg");
	this.shape_20.setTransform(3.1,-0.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5E0000").s().p("AgbAaIgEAAIgBgBQgBgSgEgOQgDgPgCgFIALAAIAJAAQAEACADAMQACACASAAIABAAQAQABAVgFQgIAEgFAFQgLAGgBAGIgDAAIgZAAIAEAWQgMAAgJgCg");
	this.shape_21.setTransform(-1.8,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgnAdIgDgWIAbAAIACAAQAcgBAfgOQAFAFAFAEQgXAOgQAFQgpAJgMAAIgDAAgAgYgKIgBAAQgVAAgCgCQgDgMgEgCIA0gCQARgBAQAJIgGACIgOAEQgNAEgMAAIgJAAg");
	this.shape_22.setTransform(1.4,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#923F07").ss(1,1,1).p("AA+gTQABABACACQAFAEAEAIQgYAOgNAFQgZAKghAAQgEAAgFgBQgDgPgCgJQAQAAAXAAQAogCAVgOAA+gTQgBgBgCgBQgFgDgMAAQgIAAgiAFQgaAEgNABQABACACAJQAfAAAKgCQAhgDAYgLgAg6gQQgBgBAAAAQgHgCgCgCAgngOQgDAAgCAAQgGAAgIgCQADAEABANQAAAEAAAFIgBAKQgRgEgBAAAgeAYQgLgBgNgDIgBAA");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#5E0000").s().p("Ag5ASIgBAAIABgKIAAgIQgBgOgDgEQAHACAHAAIAEAAIAEAKQAfAAAKgBQAhgDAYgLIADADQgWANgoADIgmACIAFAWQgLgBgNgDg");
	this.shape_24.setTransform(0.3,0.3);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgvAYIgFgYIApAAQAmgCAWgOQAEAEAEAIQgYAOgNAFQgXAKgjAAIgJgBgAg4gOIApgFQAhgFAHAAQAMAAAFADIADACQgXALggADQgLACggAAIgDgLg");
	this.shape_25.setTransform(1.7,0);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#923F07").ss(1,1,1).p("AgsgLQAWgBAHgCQAVgFAYAAQAPAAAKADQAEABAMAFQgWADgSAGQgCAAgBABQgPAAgNAAQgJACgHAEQgLAFgEAJAgsgLQgBAAgBAAQgSAAgGAAAgpAEQgRAAgDAGAgQAGQgSgCgEAAQgCAAgBAAQgDgJAAgGAAcAAQgPAEAAAJ");

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgzALIgDAAQgDgKAAgFQAXgBAGgCQAXgFAXAAQAOAAAKADIAQAGQgWADgSAEIgCABQgPAAgMACQgLACgGAEIgXgCg");
	this.shape_27.setTransform(1.3,-0.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#923F07").ss(1,1,1).p("AALAuQgLAEgNAAQgTAAgJgIQgHgGgDgFQABgCAAgCQADgMAAgOQAAgFgFgRQgEgSgBgDQgDAAgDgBAg5gqQAGABAGAAQAEAAAHgBIADASQACgBAdAAQASgCAMgGAAlAgQgGgEgCgHQgCgNAAgHQgBgGgGgKQgHgKgIACQgHABgKAGQgJAGADAKQACAIAKAPQAHAOAKAJQAFgCAGgCQAHgEAIgGgAgigqQAGgBAHgCQAQgEACAAQAGAAAGADQAFADAQAKQACACACABQATANAKAVQABABAAACQgPAPgMAK");

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgfgEIANgDIASgEQAFAAAHADIAUALQgMAGgTACIgdABg");
	this.shape_29.setTransform(-0.2,-3.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF4444").s().p("AgPANQgJgNgDgKQgDgKAKgGQAKgGAIgCQAGgCAHALQAGAKABAHIACATQACAGAGAEQgIAHgHADIgLAEQgIgJgJgNg");
	this.shape_30.setTransform(0.9,1.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#5E0000").s().p("AgsAmQgHgFgDgGIABgDQADgMAAgMQAAgHgFgSIgFgUIAMABIALgBIADASIAfgBQASgDALgFIAFADQATAMAKAVIABADQgPAQgMAJQgGgDgDgHIgCgSQgBgIgGgKQgGgLgIADQgHABgKAGQgJAGADAKQACAIAKAPQAIAOAIAJQgKADgNAAQgTABgJgJg");
	this.shape_31.setTransform(0.3,0.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#923F07").ss(1,1,1).p("AA5gOQgcACgTABQgOAIgCADAgjgTQAIgBALgBQAdgDAVAAQAMAAALAKQACACADACQAFAFAEAFQgNAKgLAEQgjALgXAAQgFAAgGAAQgNgBgOgDQgDgBgCgBQgIgDgCgDAg7gRQgGgBgFgDAgjgTQgQACgFAAIAAAAQgCAAgBAAQAFAVAAAPAgHgKQgXABgDAAQgCgIAAgCAgVAMIAAgCQAAgEAFgGQADgGAGgEQAHgBAKAAAA+gKQgvAWgfAAQgDAAgCAAQAAAAgBAAQgCgBgBAAQABADACAL");

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FF4444").s().p("AgoANIgBgBQAAgFAFgHQAEgFAFgDIATgBQgPAHgDAEQADgEAPgHIAtgEIAFAFQgtAVghAAIgEAAg");
	this.shape_33.setTransform(2,-0.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgnAZIgDgOIADABIABAAIAFAAQAgAAAtgWQAFAFAEAFQgNAKgLAEQghALgYAAIgLAAgAg1gTIAUgCQAfgDASAAQAMAAAMAKIgtADIgTABIgaABIgDgKg");
	this.shape_34.setTransform(1.8,0);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5E0000").s().p("AgOASIgFgBQAAgQgFgVIACAAIABAAIAUgCIABAKIAagBQgGAEgDAGQgGAGAAAFIAAABIgDgBIADAOQgMgBgNgDg");
	this.shape_35.setTransform(-3.4,0.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#923F07").ss(1,1,1).p("AgJgQQAIADAIADQAMAEAAAMQAAAGgFAFQgEAEgGAAQgEAAgGgGQgHgGAAgDQAEgGAAgKQAAgDAAgDQgFgCgEgC");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5E0000").s().p("AgJANQgHgGAAgDQAEgGAAgKIAAgGIARAGQAMAEAAAMQAAAGgFAFQgFAEgFAAQgDAAgIgGg");
	this.shape_37.setTransform(0.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},5).to({state:[{t:this.shape_11}]},13).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},6).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]},2).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_27},{t:this.shape_26}]},2).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]},2).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]},2).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_37},{t:this.shape_36}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,-4.9,14.2,9.8);


(lib.dfsdSymbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#923F07").ss(1,1,1).p("AgsADQABABAIAAQAMAAAPgEQANgDAKAAQAIAAAWAC");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#923F07").ss(1,1,1).p("AAngQQACABADABQACABAFAFQAEAEABABQgJAJgWAHQgXAGgdgCQgJAAgFAAQgDAAgCAAAgdgOQAUgBAigCQAKAAABAAQAAAAABABQABAAABAAQAAACAAADIAAADQgkAGgegDQAAgCgCgHQgFAAgEAAQgIAAgEAAQAEAGACAIQACACABAPAg3gPQAAAAAFAB");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgfAFIgCgHIA2gDIAKAAIACABIABAAIAAAEIAAACQgYAEgVAAIgUgBg");
	this.shape_2.setTransform(0.4,-1.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5E0000").s().p("AgdARIgPgBQgBgOgBgDQgDgIgDgGIALAAIAJAAIACAKQAeADAkgHIAAgDIAAgEIAFABIAHAGIAFAGQgJAJgWAGQgSAFgVAAIgMAAg");
	this.shape_3.setTransform(0.3,0);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#923F07").ss(1,1,1).p("AgogiIADAPIBFgHQABAAABgCQAEACAEAFQAQAQACADQAAACgBABQgHATgbAJQgLAEgKACQgOAEgLgBQgRgBgFgEQgDgCgFgHQAAgBAAgCQABgFABgJQAAgKgCgLQgDgLgFgIQAKgBAJAAQAegDAOgBQARAAANAKAA7ABQgQAAgOAHQgTAJgGAS");

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF4444").s().p("AgBgIQAMgHAQgBQgHARgZAKIgVAGQAGgRATgIg");
	this.shape_5.setTransform(3.2,1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5E0000").s().p("AgVAlQgRgBgFgFQgDgBgFgIIAAgDIACgNQAAgLgCgLQgDgLgFgHIATgCIADAPIBFgGIACgDQAEADAEAEIASAUIgBADQgQAAgOAHQgTAJgGASQgMADgKAAIgDAAg");
	this.shape_6.setTransform(0,0.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkgEIAsgEQAQAAANAIIgBACIhGAHg");
	this.shape_7.setTransform(-0.4,-3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#923F07").ss(1,1,1).p("AAggmQAGAEAEAGQAIAKANAYQgBAAgBABQgOAPgIAHQgQAOgVADQgBABgBAAQgSACgUgJQgGgCgEgCQgMgGAAgDAgjgqQABADABAEQAAAFACAAQABAAAKABQAVAAAJgCQASgEAEgDQgMgIgPAAQgTADgVABQgHAAgGAAIgHABIgHAAAA9AHQgSADgRAKQgWAMgEAPAg3gpQAKAQAAAnQAAAHgDAP");

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF4444").s().p("AgDgGQAPgJASgDIgVAUQgPAOgUADIgEAAQAGgOAVgLg");
	this.shape_9.setTransform(3.1,2.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5E0000").s().p("AgpAmIgLgEQAEgPAAgHQgBgngJgQIAGgBIAOAAIABAHQABAFABAAIAMABQAXAAAHgCQARgEAFgDQAGAEAEAGQAIAKAMAYIgBABQgSADgRAKQgWAMgDAPIgHAAQgQAAgQgHg");
	this.shape_10.setTransform(0.3,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgdAGQgCAAAAgEIgCgFQAVgBATgDQAPAAAMAHQgEACgSADQgJADgVAAIgLgCg");
	this.shape_11.setTransform(-0.2,-3.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#923F07").ss(1,1,1).p("AAdgnQgGACgKACQgNADgNAAQgQAAAAgCQABgGgDgIQgEAAgCAAQgIAAgHgBQACAAAFAVQAGAogHAXQAPAQAUABQAGABAFAAQAGgqAzgGQgGgVgRgRQgDgDgCgDQgPgNgOAAQgWADgJABAA5AFQABADABADQgYAZgLAJQgJAHgPABAg6gzQADABADABAguAjQgDgEgEgF");

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF4444").s().p("AAcgWIABAFQgXAYgKAJQgJAGgQACQAHgoAygGg");
	this.shape_13.setTransform(3,2.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#5E0000").s().p("AgNAzQgUgBgOgQQAGgXgFgoQgFgVgDgBQAHACAJAAIAFAAQADAIgBAGQABACAPAAQANAAANgDIAPgEIAGAFQARASAGAVQgzAGgFAqIgMgBg");
	this.shape_14.setTransform(0.2,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgbAIQABgGgDgHIAdgDQAQAAAOAKIgPAEQgPAEgLAAQgQAAAAgCg");
	this.shape_15.setTransform(-0.2,-4.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#923F07").ss(1,1,1).p("AAsgUQgPgJgUAAQgfADgSAAQADACADAMQADABAUAAQABAAAAAAQAOACAVgFQgIAEgGAFQgKAGgBAGQAAAAgBAAQgXAAgEAAIADAXQACAAACAAQAMAAAogKQARgEAWgPQgEgFgFgEQggAOgdABAAZgOQAHgCAHgCQADgBACgBQAJAEAIAIAg8gbQgBAAAAAAQgHgCgBAAAg8gbQAGABAFAAQAEAAAFAAAgyAaQgBgRgEgPQgDgPgCgGAgyAaQgGgBgHgCAgZAeQgMAAgIgCQgCgBgCAAQgBgBAAAA");

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF4444").s().p("AgRAAQAFgDAIgEIAMgEIAFgCQAJAEAIAIQgeAOgdABQABgGALgIg");
	this.shape_17.setTransform(3.1,-0.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#5E0000").s().p("AgbAaIgEAAIgBgBQgBgSgEgOQgDgPgCgFIALAAIAJAAQAEACADAMQACACASAAIABAAQAQABAVgFQgIAEgFAFQgLAGgBAGIgDAAIgZAAIAEAWQgMAAgJgCg");
	this.shape_18.setTransform(-1.8,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgnAdIgDgWIAbAAIACAAQAcgBAfgOQAFAFAFAEQgXAOgQAFQgpAJgMAAIgDAAgAgYgKIgBAAQgVAAgCgCQgDgMgEgCIA0gCQARgBAQAJIgGACIgOAEQgNAEgMAAIgJAAg");
	this.shape_19.setTransform(1.4,0);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#923F07").ss(1,1,1).p("AA1gTQACABACACQAEAEAEAIQgXAOgOAFQgZAKghAAQgEAAgEgBQgGAAgFgBQgHgBgHgCAA1gTQgBgBgBgBQgGgDgLAAQgIAAghAFQgcAEgNABQABACADAJQAfAAAMgCQAfgDAXgLgAA5gQQgWAOgmACQgZAAgPAAQACAJADAPAg0gOIgBAAQgFAAgGgCAg0gOQABAAADAAAgxAXIAAgLQAAgFAAgEQgBgNgCgE");
	this.shape_20.setTransform(0.8,0);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#5E0000").s().p("AgzAUIAAgKIAAgJQAAgNgDgEIAEAAIAEAKQAfAAAMgBQAfgDAYgLIADADQgWANgmADIgoACIAFAWIgLgCg");
	this.shape_21.setTransform(1,0.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgvAYIgFgYIApAAQAmgCAWgOQAEAEAEAIQgYAOgNAFQgXAKgjAAIgJgBgAg4gOIApgFQAhgFAHAAQAMAAAFADIADACQgXALggADQgLACggAAIgDgLg");
	this.shape_22.setTransform(1.7,0);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#923F07").ss(1,1,1).p("AgsgLQAWgBAHgCQAVgFAYAAQAPAAAKADQAEABAMAFQgWADgSAGQgCAAgBABQgPAEAAAJAgsgLQgBAAgBAAQgSAAgGAAAgQAGQgLAFgEAJAgpAEQgRAAgDAGAgQAGQgSgCgEAAQgCAAgBAAQgDgJAAgGAAcAAQgPAAgNAAQgJACgHAE");

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgzALIgDAAQgDgKAAgFQAXgBAGgCQAXgFAXAAQAOAAAKADIAQAGQgWADgSAEIgCABQgPAAgMACQgLACgGAEIgXgCg");
	this.shape_24.setTransform(1.3,-0.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#923F07").ss(1,1,1).p("AALAuQgLAEgNAAQgTAAgJgIQgHgGgDgFQABgCAAgCQADgMAAgOQAAgFgFgRQgEgSgBgDQgDAAgDgBAg5gqQAGABAGAAQAEAAAHgBQAGgBAHgCQAQgEACAAQAGAAAGADQAFADAQAKAALAuQgKgJgHgOQgKgPgCgIQgDgKAJgGQAKgGAHgBQAIgCAHAKQAGAKABAGQAAAHACANQACAHAGAEAgigqIADASQACgBAdAAQASgCAMgGQACACACABQATANAKAVQABABAAACQgPAPgMAKQgIAGgHAEQgGACgFAC");

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgfgEIANgDIASgEQAFAAAHADIAUALQgMAGgTACIgdABg");
	this.shape_26.setTransform(-0.2,-3.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FF4444").s().p("AgPANQgJgNgDgKQgDgKAKgGQAKgGAIgCQAGgCAHALQAGAKABAHIACATQACAGAGAEQgIAHgHADIgLAEQgIgJgJgNg");
	this.shape_27.setTransform(0.9,1.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#5E0000").s().p("AgsAmQgHgFgDgGIABgDQADgMAAgMQAAgHgFgSIgFgUIAMABIALgBIADASIAfgBQASgDALgFIAFADQATAMAKAVIABADQgPAQgMAJQgGgDgDgHIgCgSQgBgIgGgKQgGgLgIADQgHABgKAGQgJAGADAKQACAIAKAPQAIAOAIAJQgKADgNAAQgTABgJgJg");
	this.shape_28.setTransform(0.3,0.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#923F07").ss(1,1,1).p("AA5gOQgcACgTABQgOAIgCADAgjgTQAIgBALgBQAdgDAVAAQAMAAALAKQACACADACQAFAFAEAFQgNAKgLAEQgjALgXAAQgFAAgGAAQgNgBgOgDQgDgBgCgBQgIgDgCgDAg7gRQgGgBgFgDAgjgTQgQACgFAAIAAAAQgCAAgBAAQAFAVAAAPAgHgKQgXABgDAAQgCgIAAgCAgVAMIAAgCQAAgEAFgGQADgGAGgEQAHgBAKAAAA+gKQgvAWgfAAQgDAAgCAAQAAAAgBAAQgCgBgBAAQABADACAL");

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FF4444").s().p("AgoANIgBgBQAAgFAFgHQAEgFAFgDIATgBQgPAHgDAEQADgEAPgHIAtgEIAFAFQgtAVghAAIgEAAg");
	this.shape_30.setTransform(2,-0.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgnAZIgDgOIADABIABAAIAFAAQAgAAAtgWQAFAFAEAFQgNAKgLAEQghALgYAAIgLAAgAg1gTIAUgCQAfgDASAAQAMAAAMAKIgtADIgTABIgaABIgDgKg");
	this.shape_31.setTransform(1.8,0);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5E0000").s().p("AgOASIgFgBQAAgQgFgVIACAAIABAAIAUgCIABAKIAagBQgGAEgDAGQgGAGAAAFIAAABIgDgBIADAOQgMgBgNgDg");
	this.shape_32.setTransform(-3.4,0.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#923F07").ss(1,1,1).p("AAAgUQABAAACAAQAKAAABAAQADABAFAHQABAAABABIgBABIgNABQgFAAgBgCQgCgHgCgCgAAYgLQACAEAEAFQADACAAAGQAAAOgMAHQgKAFgNAAQgJAAgEgCQgFgDAAgIIABgSQAAgIgCgFQgCgGgCgFQgCgBgBgCQgDgCgBgDAgZgXQADABAFABQAEABANAA");

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5E0000").s().p("AgSAaQgFgDgBgIIABgRQAAgJgCgFIgDgLIAHACQAFABAPAAQABACAAAIQABACAGAAIAMgCIABAAIAGAIQADAEAAAEQAAANgMAIQgKAFgNAAQgJAAgDgCg");
	this.shape_34.setTransform(0.4,0.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgGADQgCgFgCgCIADAAIAJAAQADABAFAFIABACIgLABQgFAAgBgCg");
	this.shape_35.setTransform(1.2,-1.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#923F07").ss(1,1,1).p("AgJgQQAIADAIADQAMAEAAAMQAAAGgFAFQgEAEgGAAQgEAAgGgGQgHgGAAgDQAEgGAAgKQAAgDAAgDQgFgCgEgC");

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#5E0000").s().p("AgJANQgHgGAAgDQAEgGAAgKIAAgGIARAGQAMAEAAAMQAAAGgFAFQgFAEgFAAQgDAAgIgGg");
	this.shape_37.setTransform(0.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},2).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},2).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},2).to({state:[{t:this.shape_24},{t:this.shape_23}]},2).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25}]},2).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]},2).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33}]},2).to({state:[{t:this.shape_37},{t:this.shape_36}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-1.4,11,2.8);


(lib.dfsdgr_r_nose_new_021copy3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABEApIAZAAQAKgHAHgNQACgFACgHIgZgwAAsAgIAKgGIACAAQASgGAIAGQgEAJgigDIgfATQgWABgSgGIgagbQgtgGAPgJIAVAFIAJAKAhJAfIgYgEQgMgLgEgVIAhgu");
	this.shape.setTransform(11.5,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#550000").s().p("AAvANIAKgFIACAAQASgHAIAHQgDAGgTAAIgQgBgAhQgNIAVAGIAJAIQgtgEAPgKg");
	this.shape_1.setTransform(11.2,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.102)").s().p("AAQApQgRgBgSgCQgpgGgcgTQgbgSAAgPQAAgOAJgGQAOAHgCACIAMAAQARAAAWAUQALALANAEQALAEAJAAQAUAAAVgLQAUgNANAAQALAAADAEQADADAEAAQALAAABgJQABgIgBgDIgBgBIADABIAGAPQgBASgVAQQgcAVgwAAIgCAAgAhqgZIAAAAIAAgBg");
	this.shape_2.setTransform(11.4,8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,25,13.1);


(lib.dfsdgr_r_nose_new_021copy2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABEApIAZAAQAKgHAHgNQACgFACgHIgZgwAAsAgIAKgGIACAAQASgGAIAGQgEAJgigDIgfATQgWABgSgGIgagbQgtgGAPgJIAVAFIAJAKAhJAfIgYgEQgMgLgEgVIAhgu");
	this.shape.setTransform(11.5,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#550000").s().p("AAvANIAKgFIACAAQASgHAIAHQgDAGgTAAIgQgBgAhQgNIAVAGIAJAIQgtgEAPgKg");
	this.shape_1.setTransform(11.2,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.102)").s().p("AAQApQgRgBgSgCQgpgGgcgTQgbgSAAgPQAAgOAJgGQAOAHgCACIAMAAQARAAAWAUQALALANAEQALAEAJAAQAUAAAVgLQAUgNANAAQALAAADAEQADADAEAAQALAAABgJQABgIgBgDIgBgBIADABIAGAPQgBASgVAQQgcAVgwAAIgCAAgAhqgZIAAAAIAAgBg");
	this.shape_2.setTransform(11.4,8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,25,13.1);


(lib.dfsdgr_r_nose_new_021copy = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABEApIAZAAQAKgHAHgNQACgFACgHIgZgwAAsAgIAKgGIACAAQASgGAIAGQgEAJgigDIgfATQgWABgSgGIgagbQgtgGAPgJIAVAFIAJAKAhJAfIgYgEQgMgLgEgVIAhgu");
	this.shape.setTransform(11.5,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#550000").s().p("AAvANIAKgFIACAAQASgHAIAHQgDAGgTAAIgQgBgAhQgNIAVAGIAJAIQgtgEAPgKg");
	this.shape_1.setTransform(11.2,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.102)").s().p("AAQApQgRgBgSgCQgpgGgcgTQgbgSAAgPQAAgOAJgGQAOAHgCACIAMAAQARAAAWAUQALALANAEQALAEAJAAQAUAAAVgLQAUgNANAAQALAAADAEQADADAEAAQALAAABgJQABgIgBgDIgBgBIADABIAGAPQgBASgVAQQgcAVgwAAIgCAAgAhqgZIAAAAIAAgBg");
	this.shape_2.setTransform(11.4,8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,25,13.1);


(lib.dfsdgr_r_nose_new_021 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABEApIAZAAQAKgHAHgNQACgFACgHIgZgwAAsAgIAKgGIACAAQASgGAIAGQgEAJgigDIgfATQgWABgSgGIgagbQgtgGAPgJIAVAFIAJAKAhJAfIgYgEQgMgLgEgVIAhgu");
	this.shape.setTransform(11.5,5.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#550000").s().p("AAvANIAKgFIACAAQASgHAIAHQgDAGgTAAIgQgBgAhQgNIAVAGIAJAIQgtgEAPgKg");
	this.shape_1.setTransform(11.2,7.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,0,0,0.102)").s().p("AAQApQgRgBgSgCQgpgGgcgTQgbgSAAgPQAAgOAJgGQAOAHgCACIAMAAQARAAAWAUQALALANAEQALAEAJAAQAUAAAVgLQAUgNANAAQALAAADAEQADADAEAAQALAAABgJQABgIgBgDIgBgBIADABIAGAPQgBASgVAQQgcAVgwAAIgCAAgAhqgZIAAAAIAAgBg");
	this.shape_2.setTransform(11.4,8);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,25,13.1);


(lib.dfsdgr_eyebrow_01_02_new_021copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABOgCQhtgLiKgBIgOgkQANACAQAJQAyAAA7ABQBHACA4AMQBKArAcAgQgngWhCgeIAAgBIgBAAQABAAAAAB");
	this.shape.setTransform(60,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#180A0A").s().p("ABPgBIAAgBIAAAAQhtgLiLAAIgOglQANACAQAJQAyAAA7ABQBIACA3AMQBKAqAcAhQgogXhBgdg");
	this.shape_1.setTransform(60,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ACPglQAEgOgkAQQgbACgdABQgcgBgjAEQglADgRAFQgOAEgVARQgUAPgZAeQAegVASgKQATgKAUgEQAWgEAogEQArgDAbAAQAcgBAIAAQAIAAAJABg");
	this.shape_2.setTransform(13.2,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#180A0A").s().p("AhhAAQAVgRAOgEQARgFAlgDQAjgEAcABQAdgBAbgCQAkgQgEAOIgNAaIgRgBIgkABQgbAAgrADQgoAEgWAEQgUAEgTAKQgSAKgeAVQAZgeAUgPg");
	this.shape_3.setTransform(13.2,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#180A0A").s().p("AljgYQAVgNAggEQAhgFA9AbQA9AZBMggQgNAbgQALQgQAKgmgCQgngDg2gTQg2gUgQAFQgQAFgYAKQgZAIgXAuQAIgyAqgagAEwgaIgPAAQgJABg3ATQg4ARhMAIQhLAIgLgxQBtASBOgbQBOgbAkAJQBcAdAGAyQgfguhHgKg");
	this.shape_4.setTransform(39.9,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#180A0A").s().p("AlkAhQARgYAOgIQAQgHAlgKQAlgLAcgBQAdgCAmgLQAmgLALgkIgFArQgFAKgLANQgMAOglAGQgkAEgvAEQguADgVALQgVALgQAQQgQAOgaAeQARgkARgWgAGGBTIgFgFQgMgLgagSQgZgUgfgNIgHgFQABABAAAAQABABAAAAQAAAAAAgBQgBAAAAgBIgygLQidAHgXggQgYgjgJgeQALASAYANQA4AgBEgBQBFgBAzAbQA8AuAaAjIACABIACAEIgBgBg");
	this.shape_5.setTransform(36.6,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,4.6,81.6,12.3);


(lib.dfsdgr_eyebrow_01_02_new_021copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABOgCQhtgLiKgBIgOgkQANACAQAJQAyAAA7ABQBHACA4AMQBKArAcAgQgngWhCgeIAAgBIgBAAQABAAAAAB");
	this.shape.setTransform(60,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#180A0A").s().p("ABPgBIAAgBIAAAAQhtgLiLAAIgOglQANACAQAJQAyAAA7ABQBIACA3AMQBKAqAcAhQgogXhBgdg");
	this.shape_1.setTransform(60,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ACPglQAEgOgkAQQgbACgdABQgcgBgjAEQglADgRAFQgOAEgVARQgUAPgZAeQAegVASgKQATgKAUgEQAWgEAogEQArgDAbAAQAcgBAIAAQAIAAAJABg");
	this.shape_2.setTransform(13.2,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#180A0A").s().p("AhhAAQAVgRAOgEQARgFAlgDQAjgEAcABQAdgBAbgCQAkgQgEAOIgNAaIgRgBIgkABQgbAAgrADQgoAEgWAEQgUAEgTAKQgSAKgeAVQAZgeAUgPg");
	this.shape_3.setTransform(13.2,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#180A0A").s().p("AljgYQAVgNAggEQAhgFA9AbQA9AZBMggQgNAbgQALQgQAKgmgCQgngDg2gTQg2gUgQAFQgQAFgYAKQgZAIgXAuQAIgyAqgagAEwgaIgPAAQgJABg3ATQg4ARhMAIQhLAIgLgxQBtASBOgbQBOgbAkAJQBcAdAGAyQgfguhHgKg");
	this.shape_4.setTransform(39.9,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#180A0A").s().p("AlkAhQARgYAOgIQAQgHAlgKQAlgLAcgBQAdgCAmgLQAmgLALgkIgFArQgFAKgLANQgMAOglAGQgkAEgvAEQguADgVALQgVALgQAQQgQAOgaAeQARgkARgWgAGGBTIgFgFQgMgLgagSQgZgUgfgNIgHgFQABABAAAAQABABAAAAQAAAAAAgBQgBAAAAgBIgygLQidAHgXggQgYgjgJgeQALASAYANQA4AgBEgBQBFgBAzAbQA8AuAaAjIACABIACAEIgBgBg");
	this.shape_5.setTransform(36.6,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,4.6,81.6,12.3);


(lib.dfsdgr_eyebrow_01_02_new_021copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABPgBIAAgBIgBAAQABAAAAABgABOgCQhtgLiKgBIgOgkQANACAQAJQAyAAA7ABQBHACA4AMQBKArAcAgQgngWhCge");
	this.shape.setTransform(60,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#180A0A").s().p("ABPgBIAAgBIAAAAQhtgLiLAAIgOglQANACAQAJQAyAAA7ABQBIACA3AMQBKAqAcAhQgogXhBgdg");
	this.shape_1.setTransform(60,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ACPglQAEgOgkAQQgbACgdABQgcgBgjAEQglADgRAFQgOAEgVARQgUAPgZAeQAegVASgKQATgKAUgEQAWgEAogEQArgDAbAAQAcgBAIAAQAIAAAJABg");
	this.shape_2.setTransform(13.2,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#180A0A").s().p("AhhAAQAVgRAOgEQARgFAlgDQAjgEAcABQAdgBAbgCQAkgQgEAOIgNAaIgRgBIgkABQgbAAgrADQgoAEgWAEQgUAEgTAKQgSAKgeAVQAZgeAUgPg");
	this.shape_3.setTransform(13.2,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#180A0A").s().p("AljgYQAVgNAggEQAhgFA9AbQA9AZBMggQgNAbgQALQgQAKgmgCQgngDg2gTQg2gUgQAFQgQAFgYAKQgZAIgXAuQAIgyAqgagAEwgaIgPAAQgJABg3ATQg4ARhMAIQhLAIgLgxQBtASBOgbQBOgbAkAJQBcAdAGAyQgfguhHgKg");
	this.shape_4.setTransform(39.9,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#180A0A").s().p("AlkAhQARgYAOgIQAQgHAlgKQAlgLAcgBQAdgCAmgLQAmgLALgkIgFArQgFAKgLANQgMAOglAGQgkAEgvAEQguADgVALQgVALgQAQQgQAOgaAeQARgkARgWgAGGBTIgFgFQgMgLgagSQgZgUgfgNIgHgFQABABAAAAQABABAAAAQAAAAAAgBQgBAAAAgBIgygLQidAHgXggQgYgjgJgeQALASAYANQA4AgBEgBQBFgBAzAbQA8AuAaAjIACABIACAEIgBgBg");
	this.shape_5.setTransform(36.6,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,4.6,81.6,12.3);


(lib.dfsdgr_eyebrow_01_02_new_021 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABOgCQABAAAAABABOgCQhtgLiKgBIgOgkQANACAQAJQAyAAA7ABQBHACA4AMQBKArAcAgQgngWhCgeIAAgBg");
	this.shape.setTransform(60,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#180A0A").s().p("ABPgBIAAgBIAAAAQhtgLiLAAIgOglQANACAQAJQAyAAA7ABQBIACA3AMQBKAqAcAhQgogXhBgdg");
	this.shape_1.setTransform(60,10.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ACPglQAEgOgkAQQgbACgdABQgcgBgjAEQglADgRAFQgOAEgVARQgUAPgZAeQAegVASgKQATgKAUgEQAWgEAogEQArgDAbAAQAcgBAIAAQAIAAAJABg");
	this.shape_2.setTransform(13.2,10.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#180A0A").s().p("AhhAAQAVgRAOgEQARgFAlgDQAjgEAcABQAdgBAbgCQAkgQgEAOIgNAaIgRgBIgkABQgbAAgrADQgoAEgWAEQgUAEgTAKQgSAKgeAVQAZgeAUgPg");
	this.shape_3.setTransform(13.2,10.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#180A0A").s().p("AljgYQAVgNAggEQAhgFA9AbQA9AZBMggQgNAbgQALQgQAKgmgCQgngDg2gTQg2gUgQAFQgQAFgYAKQgZAIgXAuQAIgyAqgagAEwgaIgPAAQgJABg3ATQg4ARhMAIQhLAIgLgxQBtASBOgbQBOgbAkAJQBcAdAGAyQgfguhHgKg");
	this.shape_4.setTransform(39.9,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#180A0A").s().p("AlkAhQARgYAOgIQAQgHAlgKQAlgLAcgBQAdgCAmgLQAmgLALgkIgFArQgFAKgLANQgMAOglAGQgkAEgvAEQguADgVALQgVALgQAQQgQAOgaAeQARgkARgWgAGGBTIgFgFQgMgLgagSQgZgUgfgNIgHgFQABABAAAAQABABAAAAQAAAAAAgBQgBAAAAgBIgygLQidAHgXggQgYgjgJgeQALASAYANQA4AgBEgBQBFgBAzAbQA8AuAaAjIACABIACAEIgBgBg");
	this.shape_5.setTransform(36.6,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,4.6,81.6,12.3);


(lib.dfsdgr_eye_pupilMcopy4 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOAgQgegFgCgbQgBgYAggHQBCgCgEApIAAAKQgYAOgaAAIgLAAg");
	mask.setTransform(-2.2,0.6);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMgEQAFAEAAAEIghABg");
	this.shape.setTransform(0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AAAgMQgHAAgFAEQgFAEAAAEQAAAEAFAEQAFAEAHAAQAHAAAEgEQAFgEAAgEQAAgEgFgEQgEgEgHAAgAgbgTQgLAJAAAKQAAALALAIQAMAIAPAAQAPAAANgIQALgIAAgLQAAgKgLgJQgNgHgPAAQgPAAgMAHg");
	this.shape_1.setTransform(-2.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLAIQgFgEAAgEQAAgDAFgEQAFgEAGAAQAIAAAEAEQAFAEAAADQAAAEgFAEQgEAEgIAAQgGAAgFgEg");
	this.shape_2.setTransform(-2.4,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#924011").s().p("AgbATQgLgIAAgLQAAgKALgJQANgHAOAAQAQAAAMAHQALAJAAAKQAAALgLAIQgMAIgQAAQgOAAgNgIgAgMgHQgFADAAAEQAAAEAFAEQAFADAHAAQAHAAAEgDQAGgEgBgEQABgEgGgDQgEgFgHAAQgHAAgFAFg");
	this.shape_3.setTransform(-2.3,0.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-2.7,9.4,6.6);


(lib.dfsdgr_eye_pupilMcopy3 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOAgQgegFgCgbQgBgYAggHQBCgCgEApIAAAKQgYAOgaAAIgLAAg");
	mask.setTransform(-2.2,0.6);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMgEQAFAEAAAEIghABg");
	this.shape.setTransform(0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AAAgMQgHAAgFAEQgFAEAAAEQAAAEAFAEQAFAEAHAAQAHAAAEgEQAFgEAAgEQAAgEgFgEQgEgEgHAAgAgbgTQgLAJAAAKQAAALALAIQAMAIAPAAQAPAAANgIQALgIAAgLQAAgKgLgJQgNgHgPAAQgPAAgMAHg");
	this.shape_1.setTransform(-2.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLAIQgFgEAAgEQAAgDAFgEQAFgEAGAAQAIAAAEAEQAFAEAAADQAAAEgFAEQgEAEgIAAQgGAAgFgEg");
	this.shape_2.setTransform(-2.4,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#924011").s().p("AgbATQgLgIAAgLQAAgKALgJQANgHAOAAQAQAAAMAHQALAJAAAKQAAALgLAIQgMAIgQAAQgOAAgNgIgAgMgHQgFADAAAEQAAAEAFAEQAFADAHAAQAHAAAEgDQAGgEgBgEQABgEgGgDQgEgFgHAAQgHAAgFAFg");
	this.shape_3.setTransform(-2.3,0.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-2.7,9.4,6.6);


(lib.dfsdgr_eye_pupilMcopy2 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOAgQgegFgCgbQgBgYAggHQBCgCgEApIAAAKQgYAOgaAAIgLAAg");
	mask.setTransform(-2.2,0.6);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMgEQAFAEAAAEIghABg");
	this.shape.setTransform(0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AAAgMQgHAAgFAEQgFAEAAAEQAAAEAFAEQAFAEAHAAQAHAAAEgEQAFgEAAgEQAAgEgFgEQgEgEgHAAgAgbgTQgLAJAAAKQAAALALAIQAMAIAPAAQAPAAANgIQALgIAAgLQAAgKgLgJQgNgHgPAAQgPAAgMAHg");
	this.shape_1.setTransform(-2.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLAIQgFgEAAgEQAAgDAFgEQAFgEAGAAQAIAAAEAEQAFAEAAADQAAAEgFAEQgEAEgIAAQgGAAgFgEg");
	this.shape_2.setTransform(-2.4,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#924011").s().p("AgbATQgLgIAAgLQAAgKALgJQANgHAOAAQAQAAAMAHQALAJAAAKQAAALgLAIQgMAIgQAAQgOAAgNgIgAgMgHQgFADAAAEQAAAEAFAEQAFADAHAAQAHAAAEgDQAGgEgBgEQABgEgGgDQgEgFgHAAQgHAAgFAFg");
	this.shape_3.setTransform(-2.3,0.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-2.7,9.4,6.6);


(lib.dfsdgr_eye_pupilMcopy_01_02_new_021 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOAgQgegFgCgbQgBgYAggHQBCgCgEApIAAAKQgYAOgaAAIgLAAg");
	mask.setTransform(-2.2,0.6);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMgEQAFAEAAAEIghABg");
	this.shape.setTransform(0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AAAgMQgHAAgFAEQgFAEAAAEQAAAEAFAEQAFAEAHAAQAHAAAEgEQAFgEAAgEQAAgEgFgEQgEgEgHAAgAgbgTQgLAJAAAKQAAALALAIQAMAIAPAAQAPAAANgIQALgIAAgLQAAgKgLgJQgNgHgPAAQgPAAgMAHg");
	this.shape_1.setTransform(-2.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLAIQgFgEAAgEQAAgDAFgEQAFgEAGAAQAIAAAEAEQAFAEAAADQAAAEgFAEQgEAEgIAAQgGAAgFgEg");
	this.shape_2.setTransform(-2.4,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#924011").s().p("AgbATQgLgIAAgLQAAgKALgJQANgHAOAAQAQAAAMAHQALAJAAAKQAAALgLAIQgMAIgQAAQgOAAgNgIgAgMgHQgFADAAAEQAAAEAFAEQAFADAHAAQAHAAAEgDQAGgEgBgEQABgEgGgDQgEgFgHAAQgHAAgFAFg");
	this.shape_3.setTransform(-2.3,0.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-2.7,9.4,6.6);


(lib.dfsdgr_eye_pupilMcopy = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgOAgQgegFgCgbQgBgYAggHQBCgCgEApIAAAKQgYAOgaAAIgLAAg");
	mask.setTransform(-2.2,0.6);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAMgEQAFAEAAAEIghABg");
	this.shape.setTransform(0.2,-0.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AAAgMQgHAAgFAEQgFAEAAAEQAAAEAFAEQAFAEAHAAQAHAAAEgEQAFgEAAgEQAAgEgFgEQgEgEgHAAgAgbgTQgLAJAAAKQAAALALAIQAMAIAPAAQAPAAANgIQALgIAAgLQAAgKgLgJQgNgHgPAAQgPAAgMAHg");
	this.shape_1.setTransform(-2.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgLAIQgFgEAAgEQAAgDAFgEQAFgEAGAAQAIAAAEAEQAFAEAAADQAAAEgFAEQgEAEgIAAQgGAAgFgEg");
	this.shape_2.setTransform(-2.4,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#924011").s().p("AgbATQgLgIAAgLQAAgKALgJQANgHAOAAQAQAAAMAHQALAJAAAKQAAALgLAIQgMAIgQAAQgOAAgNgIgAgMgHQgFADAAAEQAAAEAFAEQAFADAHAAQAHAAAEgDQAGgEgBgEQABgEgGgDQgEgFgHAAQgHAAgFAFg");
	this.shape_3.setTransform(-2.3,0.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-2.7,9.4,6.6);


(lib.dfsdgr_eye_pupilM_01_02_new_021copy3 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgVAgQgWgHgBgXQgFgbAegGQBHgIgHAxIAAAKQgaANgbAAIgNgBg");
	mask.setTransform(-2.1,0.4);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANgFQAEAEAAAGIghAAg");
	this.shape.setTransform(0.2,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgbgVQgMAKAAALQAAAMAMAJQAMAJAPAAQAQAAAMgJQAMgJAAgMQAAgLgMgKQgMgIgQAAQgPAAgMAIgAAAgNQgHAAgFAFQgFADAAAFQAAAFAFAEQAFAEAHAAQAHAAAFgEQAFgEAAgFQAAgFgFgDQgFgFgHAAg");
	this.shape_1.setTransform(-2.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#924011").s().p("AgbAVQgMgIAAgNQAAgLAMgKQAMgIAPAAQAQAAAMAIQAMAKAAALQAAANgMAIQgMAJgQAAQgPAAgMgJgAgMgIQgFADAAAFQAAAFAFAEQAFAEAHAAQAHAAAFgEQAFgEAAgFQAAgFgFgDQgFgEgHgBQgHABgFAEg");
	this.shape_2.setTransform(-2.3,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLAJQgGgEAAgFQAAgEAGgEQAFgEAGAAQAIAAAEAEQAGAEAAAEQAAAFgGAEQgEAEgIAAQgGAAgFgEg");
	this.shape_3.setTransform(-2.4,0.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-2.9,9.2,6.7);


(lib.dfsdgr_eye_pupilM_01_02_new_021copy2 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgVAgQgWgHgBgXQgFgbAegGQBHgIgHAxIAAAKQgaANgbAAIgNgBg");
	mask.setTransform(-2.1,0.4);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANgFQAEAEAAAGIghAAg");
	this.shape.setTransform(0.2,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgbgVQgMAKAAALQAAAMAMAJQAMAJAPAAQAQAAAMgJQAMgJAAgMQAAgLgMgKQgMgIgQAAQgPAAgMAIgAAAgNQgHAAgFAFQgFADAAAFQAAAFAFAEQAFAEAHAAQAHAAAFgEQAFgEAAgFQAAgFgFgDQgFgFgHAAg");
	this.shape_1.setTransform(-2.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#924011").s().p("AgbAVQgMgIAAgNQAAgLAMgKQAMgIAPAAQAQAAAMAIQAMAKAAALQAAANgMAIQgMAJgQAAQgPAAgMgJgAgMgIQgFADAAAFQAAAFAFAEQAFAEAHAAQAHAAAFgEQAFgEAAgFQAAgFgFgDQgFgEgHgBQgHABgFAEg");
	this.shape_2.setTransform(-2.3,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLAJQgGgEAAgFQAAgEAGgEQAFgEAGAAQAIAAAEAEQAGAEAAAEQAAAFgGAEQgEAEgIAAQgGAAgFgEg");
	this.shape_3.setTransform(-2.4,0.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-2.9,9.2,6.7);


(lib.dfsdgr_eye_pupilM_01_02_new_021copy = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgVAgQgWgHgBgXQgFgbAegGQBHgIgHAxIAAAKQgaANgbAAIgNgBg");
	mask.setTransform(-2.1,0.4);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANgFQAEAEAAAGIghAAg");
	this.shape.setTransform(0.2,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgbgVQgMAKAAALQAAAMAMAJQAMAJAPAAQAQAAAMgJQAMgJAAgMQAAgLgMgKQgMgIgQAAQgPAAgMAIgAAAgNQgHAAgFAFQgFADAAAFQAAAFAFAEQAFAEAHAAQAHAAAFgEQAFgEAAgFQAAgFgFgDQgFgFgHAAg");
	this.shape_1.setTransform(-2.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#924011").s().p("AgbAVQgMgIAAgNQAAgLAMgKQAMgIAPAAQAQAAAMAIQAMAKAAALQAAANgMAIQgMAJgQAAQgPAAgMgJgAgMgIQgFADAAAFQAAAFAFAEQAFAEAHAAQAHAAAFgEQAFgEAAgFQAAgFgFgDQgFgEgHgBQgHABgFAEg");
	this.shape_2.setTransform(-2.3,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLAJQgGgEAAgFQAAgEAGgEQAFgEAGAAQAIAAAEAEQAGAEAAAEQAAAFgGAEQgEAEgIAAQgGAAgFgEg");
	this.shape_3.setTransform(-2.4,0.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-2.9,9.2,6.7);


(lib.dfsdgr_eye_pupilM_01_02_new_021 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgVAgQgWgHgBgXQgFgbAegGQBHgIgHAxIAAAKQgaANgbAAIgNgBg");
	mask.setTransform(-2.1,0.4);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AANgFQAEAEAAAGIghAAg");
	this.shape.setTransform(0.2,-0.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgbgVQgMAKAAALQAAAMAMAJQAMAJAPAAQAQAAAMgJQAMgJAAgMQAAgLgMgKQgMgIgQAAQgPAAgMAIgAAAgNQgHAAgFAFQgFADAAAFQAAAFAFAEQAFAEAHAAQAHAAAFgEQAFgEAAgFQAAgFgFgDQgFgFgHAAg");
	this.shape_1.setTransform(-2.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#924011").s().p("AgbAVQgMgIAAgNQAAgLAMgKQAMgIAPAAQAQAAAMAIQAMAKAAALQAAANgMAIQgMAJgQAAQgPAAgMgJgAgMgIQgFADAAAFQAAAFAFAEQAFAEAHAAQAHAAAFgEQAFgEAAgFQAAgFgFgDQgFgEgHgBQgHABgFAEg");
	this.shape_2.setTransform(-2.3,0.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLAJQgGgEAAgFQAAgEAGgEQAFgEAGAAQAIAAAEAEQAGAEAAAEQAAAFgGAEQgEAEgIAAQgGAAgFgEg");
	this.shape_3.setTransform(-2.4,0.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-2.9,9.2,6.7);


(lib.dfsdccccopy3 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AkHA/QgohjARh1QABgGABgHQADgMADgMQAEgKAEgKQAHgQAIgPQAKgQALgQQBfh7DQASQABAAABAAQB8ANAKBiQACAAABAAQAzgEAaBaIAAAAQASBJgdBAQgMAjgEA3QAGgBAEABQABAAABAAIAAAAQANADAEAMIABABQAAACAAADQAAADgBAEQgBAEgCAEQgCADgCADQgDADgDAEQgCABgBABQgPARgCAdIAAAUQAAABAAACQgBACAAABQAAAEgCAEQgBAAAAAAQgCAEgEACQgEADgFABQgHACgJgDIAAAXQAAAPgIAOQgBACgBABQgDAEgCAFQglAzhLA9QgBABgBABQgBABgCABQgBABgCACQgHAKgSACQgDAAgCAAIguAAQgNgBgSgJQgHgDgHgFQgJgFgKgGQhIgthGg9QgCgBgBgBQgKgKgCgKQAAgBAAgCIgBgXAAUgYIABAAQgBABgBAAQAAAAABgBIAAAAIAAgBQABAAAAABgADsBAQADgSABgQQAEhghChZQhBAvifgIQgHAAgGABQhcAKgeA3QgBACgBADQgLAfgEAbQgBAKAAALQAAAKABAKQABANACANQAGA1gbgZQAAAAAAgBQgDgIgEgHQgDgFgDgFQgCgCgCgDQgHgIgIgEQgDgCgDgBIAAAAQgBAAgBAAQgEABgDAAAhNgnIAAgBQgBABgBABQABgBABAAgAjWDHQAAAAAAABQgEAHgGgBQgDAAgDgBIgBAAQgFgDgCgFIgFgYQgRgqgTgTQgBgBgBgCQgJgIgBgIQAAgCAAgBQAAgCAAgBQACgFADgFQAHgLAQgDAjvBoIABAAQACACACADQAAABABABIACADIABABQABACABABIAAAAQADAGADAHQABACABADQgCgFgCgEQgCgFgCgEAjqBtIgBAAQgCgDgCgCQgEgFgFgCQgIgEgJAAAjWDHQAAgBAAgBIAAABgAjgB/QgFgKgGgIQgLAIAIAWAECAuQgBAAAAAAQgFABgGAFIgDACIAAABQgBAAAAABIgBAAIgBACIgEAGIAAAAQAAAAAAAAQgKAjgEAdIAAABQgBABAAABQAAABAAAAIgBABQAAAAAAAAIABgBQgDAWAAASQAAADAAACIAAAJIABAAADzA3QgBAAgBABIAAAAADsBAIAAAAADyCAQACgNgEgHQgBgDgDgBQABgBAAgBQAGgGAEgFQADgDADgCQAIgFAHgBADdCAIAAAAIAAABgADaC6IAAAAIABAA");
	this.shape.setTransform(0,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCC791").s().p("AA4ENIguAAQgNgBgSgJIgOgIIgTgMQhIgthGg9IgDgCQgKgKgCgJIAAgDIgBgXIAAgBIAAABIAAABQgEAHgGAAIgGgCIgBAAQgFgCgCgFIgFgYQgRgrgTgSIgCgBQgJgJgBgIIAAgCIAAgDIAFgKQAHgLAQgDIAHgBIACAAIAAAAIAGACQAIAFAHAIIAEAFIAGAKIAHAPIAAAAQAbAYgGg0IgDgaIgBgTIABgWQADgcAMggIACgEQAeg4BcgKIANgBQCfAIBBgvQBCBagEBhQgBARgDARIAAAAIgBABIABAAIAEgGIABgCIABgBIABgBIAAAAIADgDQAGgEAFgCIABAAIAKAAIACABIAAAAQANADAEAMIABABIAAAEIgBAHQgBAEgCAEIgEAGIgGAHIgDADQgPAPgCAdIAAAUIAAADIgBACQAAAFgCADIgBABQgCAEgEACQgEACgFABQgHACgJgDIgBAAIAAAAIABAAIAAAXQAAAPgIAOIgCAEIgFAIQglA0hLA9IgCABIgFAAIACADIgDACQgHALgSACIgFAAgADcBAIAAAJIAAgJIAAgCIAAgCIAAgCQAAgRADgVIACgCIgCAAIAAACIgBAAIAAABIABgBQgDAVAAARIAAACIAAACIAAACgAjsAaQgEgIAAgHQAAgJAHgDIALAQIAEAJIgCgGIgGgNIAAABIgCgEIgBgBIgCgBIgBgCIgEgEIgBgBIAEAGQgHADAAAJQAAAHAEAIgADiAUIAAAAIgBgCgADgAQIAAAAIgBACIABgCIAAAAQAEgbAJgjQgJAjgEAbgADfARIAAgBIAAAAgAD0APIABgHQAAgIgDgCQgBgDgDgCIABgBIAKgLIAGgFQAIgGAHgBQgHABgIAGIgGAFIgKALIgBABQADACABADQADACAAAIIgBAHgAj2gOQAFADAEAEQgEgEgFgDIgBAAQgGgDgIAAIAAAAIAAAAIgBAAIgBAAIABAAIABAAIAAAAIAAAAQAIAAAGADIABAAgAAWiJIAAABIgBAAIACAAIgBAAIABgBIgBAAgAhNiXIACAAIAAgCIgCACgADdBJg");
	this.shape_1.setTransform(-0.2,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#151515").s().p("AjYDxIAAgBIAAAAIgHgPIgGgKIgEgFQgHgIgIgFIgGgCIAAAAIgCAAIgHABQgohlARhzIACgOIAGgYIAIgUQAHgQAIgOIAVggQBfh8DQATIACAAQB8AMAKBiIADAAQAzgDAaBZIAAAAQASBIgdA/QgMAkgEA4IgBAAQgFACgGAEIgDADIAAAAIgCABIAAABIgBACIgEAFQADgRABgRQAEhhhChYQhBAtifgIIgNABQhcALgeA3IgCAEQgLAggEAcIgBAWIABATIADAaQAEAlgLAAQgFAAgJgIg");
	this.shape_2.setTransform(0,-12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3C19F").s().p("AgGAgIACAAIgCACIAAgCgAAHggIAAgBIAAABg");
	this.shape_3.setTransform(22.9,10.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC488").s().p("ABUCZIAFAAIgDACgADZgXIAAAAIAAAAgADdhOIACACIAAAAgADbhRIABAAIgBABgAjshkIAAAAIABACIADADIAAABIACADIAFAJIgLgSgAjwhpIAAAAIAEAFIAAAAIgEgFgAjshkIAAAAgAjahmIABAAIAAABIgBgBgADwiZIABgBIgBABIAAAAg");
	this.shape_4.setTransform(0.1,21.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.2,-38.6,60.5,78.4);


(lib.dfsdccccopy2 = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AkHA/QgohjARh1QABgGABgHQADgMADgMQAEgKAEgKQAHgQAIgPQAKgQALgQQBfh7DQASQABAAABAAQB8ANAKBiQACAAABAAQAzgEAaBaIAAAAQASBJgdBAQgMAjgEA3QgBAAAAAAQgFABgGAFIgDACIAAABQgBAAgBABIAAAAIgBACIgEAGQADgSABgQQAEhghChZQhBAvifgIQgHAAgGABQhcAKgeA3QgBACgBADQgLAfgEAbQgBAKAAALQAAAKABAKQABANACANQAGA1gbgZQAAAAAAgBQgDgIgEgHQgDgFgDgFQgCgCgCgDQgHgIgIgEQgDgCgDgBIAAAAQgBAAgBAAQgEABgDAAgAjWDHQAAAAAAABQgEAHgGgBQgDAAgDgBIgBAAQgFgDgCgFIgFgYQgRgqgTgTQgBgBgBgCQgJgIgBgIQAAgCAAgBQAAgCAAgBQACgFADgFQAHgLAQgDAjvBoQgEgFgFgCQgIgEgJAAAjrBtQgCgDgCgCIABAAQACACACADIgBAAQgLAIAIAWAjqBtQAAABABABIACADIABABQABACABABAjgB/QgCgFgCgEIAAAAQADAGADAHQABACABADQgCgFgCgEQgFgKgGgIAjWDHQAAgBAAgBIAAABgADbC6IAAAXQAAAPgIAOQgBACgBABQgDAEgCAFQglAzhLA9QgBABgBABQgBABgCABQgBABgCACQgHAKgSACQgDAAgCAAIguAAQgNgBgSgJQgHgDgHgFQgJgFgKgGQhIgthGg9QgCgBgBgBQgKgKgCgKQAAgBAAgCIgBgXAECAuQAGgBAEABQABAAABAAIAAAAQANADAEAMIABABQAAACAAADQAAADgBAEQgBAEgCAEQgCADgCADQgDADgDAEQgCABgBABQgPARgCAdIAAAUQAAABAAACQgBACAAABQAAAEgCAEQgBAAAAAAQgCAEgEACQgEADgFABQgHACgJgDADzA3QgBAAAAABIgBAAADsBAQAAAAAAAAQgKAjgEAdIAAABQgBABAAABQAAABAAAAIgBABQAAAAAAAAIABgBQgDAWAAASQAAADAAACIAAAJIAAAAIABAAADsBAIAAAAIAAAAADyCAQACgNgEgHQgBgDgDgBQABgBAAgBQAGgGAEgFQADgDADgCQAIgFAHgBADdCAIAAAAIAAABgADaC6IABAA");
	this.shape.setTransform(0,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCC791").s().p("AA4ENIguAAQgNgBgSgJIgOgIIgTgMQhIgthGg9IgDgCQgKgKgCgJIAAgDIgBgXIAAgBIAAABIAAABQgEAHgGAAIgGgCIgBAAQgFgCgCgFIgFgYQgRgrgTgSIgCgBQgJgJgBgIIAAgCIAAgDIAFgKQAHgLAQgDIAHgBIACAAIAAAAIAGACQAIAFAHAIIAEAFIAGAKIAHAPIAAAAQAbAYgGg0IgDgaIgBgTIABgWQADgcAMggIACgEQAeg4BcgKIANgBQCfAIBBgvQBCBagEBhQgBARgDARIAAAAIgBABQgJAjgEAbIAAAAIgBACIABgCIAAAAQAEgbAJgjIABAAIAEgGIABgCIABgBIABgBIAAAAIADgDQAGgEAFgCIABAAIAKAAIACABIAAAAQANADAEAMIABABIAAAEIgBAHQgBAEgCAEIgEAGIgGAHIgDADQgPAPgCAdIAAAUIAAADIgBACQAAAFgCADIgBABQgCAEgEACQgEACgFABQgHACgJgDIgBAAIAAAAIABAAIAAAXQAAAPgIAOIgCAEIgFAIQglA0hLA9IgCABIgFAAIACADIgDACQgHALgSACIgFAAgADcBAIAAAJIAAgJIAAgCIAAgCIAAgCQAAgRADgVIACgCIABACIAAAAIgBgCIgCAAIAAACIgBAAIAAABIABgBQgDAVAAARIAAACIAAACIAAACgAjsAaQgEgIAAgHQAAgJAHgDIALAQIAEAJIgCgGIgGgNIAAABIgCgEIgBgBIgCgBIgBgCIgEgEIgBgBQgEgEgFgDIgBAAQgGgDgIAAIAAAAIAAAAIgBAAIgBAAIABAAIABAAIAAAAIAAAAQAIAAAGADIABAAQAFADAEAEIAEAGQgHADAAAJQAAAHAEAIgADfARIAAgBIAAAAgAD0APIABgHQAAgIgDgCQgBgDgDgCIABgBIAKgLIAGgFQAIgGAHgBQgHABgIAGIgGAFIgKALIgBABQADACABADQADACAAAIIgBAHgAAWiJIAAABIgBAAIACAAIgBAAIABgBIgBAAgAhNiXIACAAIAAgCIgCACgADdBJg");
	this.shape_1.setTransform(-0.2,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#151515").s().p("AjYDxIAAgBIAAAAIgHgPIgGgKIgEgFQgHgIgIgFIgGgCIAAAAIgCAAIgHABQgohlARhzIACgOIAGgYIAIgUQAHgQAIgOIAVggQBfh8DQATIACAAQB8AMAKBiIADAAQAzgDAaBZIAAAAQASBIgdA/QgMAkgEA4IgBAAQgFACgGAEIgDADIAAAAIgCABIAAABIgBACIgEAFQADgRABgRQAEhhhChYQhBAtifgIIgNABQhcALgeA3IgCAEQgLAggEAcIgBAWIABATIADAaQAEAlgLAAQgFAAgJgIg");
	this.shape_2.setTransform(0,-12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3C19F").s().p("AgGAgIACAAIgCACIAAgCgAAHggIAAgBIAAABg");
	this.shape_3.setTransform(22.9,10.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC488").s().p("ABUCZIAFAAIgDACgADZgXIAAAAIAAAAgADdhOIACACIAAAAgADbhRIABAAIgBABgAjshkIAAAAIABACIADADIAAABIACADIAFAJIgLgSgAjwhpIAAAAIAEAFIAAAAIgEgFgAjshkIAAAAgAjahmIABAAIAAABIgBgBgADwiZIABgBIgBABIAAAAg");
	this.shape_4.setTransform(0.1,21.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.2,-38.6,60.5,78.4);


(lib.dfsdccccopy = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AkHA/QgohjARh1QABgGABgHQADgMADgMQAEgKAEgKQAHgQAIgPQAKgQALgQQBfh7DQASQABAAABAAQB8ANAKBiQACAAABAAQAzgEAaBaIAAAAQASBJgdBAQgMAjgEA3QAGgBAEABQABAAABAAIAAAAQANADAEAMIABABQAAACAAADQAAADgBAEQgBAEgCAEQgCADgCADQgDADgDAEQgCABgBABQgPARgCAdIAAAUQAAABAAACQgBACAAABQAAAEgCAEQgBAAAAAAQgCAEgEACQgEADgFABQgHACgJgDIAAAXQAAAPgIAOQgBACgBABQgDAEgCAFQglAzhLA9QgBABgBABQgBABgCABQgBABgCACQgHAKgSACQgDAAgCAAIguAAQgNgBgSgJQgHgDgHgFQgJgFgKgGQhIgthGg9QgCgBgBgBQgKgKgCgKQAAgBAAgCIgBgXAAUgYIABAAQgBABgBAAQAAAAABgBIAAAAIAAgBQABAAAAABgADsBAQADgSABgQQAEhghChZQhBAvifgIQgHAAgGABQhcAKgeA3QgBACgBADQgLAfgEAbQgBAKAAALQAAAKABAKQABANACANQAGA1gbgZQAAAAAAgBQgDgIgEgHQgDgFgDgFQgCgCgCgDQgHgIgIgEQgDgCgDgBIAAAAQgBAAgBAAQgEABgDAAAhNgnIAAgBQgBABgBABQABgBABAAgAjWDHQAAAAAAABQgEAHgGgBQgDAAgDgBIgBAAQgFgDgCgFIgFgYQgRgqgTgTQgBgBgBgCQgJgIgBgIQAAgCAAgBQAAgCAAgBQACgFADgFQAHgLAQgDAjvBoIABAAQACACACADQAAABABABIACADIABABQABACABABIAAAAQADAGADAHQABACABADQgCgFgCgEQgCgFgCgEAjvBoQgEgFgFgCQgIgEgJAAAjrBtQgCgDgCgCAjqBtIgBAAAjWDHQAAgBAAgBIAAABgAjgB/QgFgKgGgIQgLAIAIAWAECAuQgBAAAAAAQgFABgGAFIgDACIAAABQgBAAAAABIgBAAIgBACIgEAGIAAAAQAAAAAAAAQgKAjgEAdIAAABQgBABAAABQAAABAAAAIgBABQAAAAAAAAIABgBQgDAWAAASQAAADAAACIAAAJIABAAADzA3QgBAAgBABIAAAAADsBAIAAAAADyCAQACgNgEgHQgBgDgDgBQABgBAAgBQAGgGAEgFQADgDADgCQAIgFAHgBADdCAIAAAAIAAABgADaC6IAAAAIABAA");
	this.shape.setTransform(0,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCC791").s().p("AA4ENIguAAQgNgBgSgJIgOgIIgTgMQhIgthGg9IgDgCQgKgKgCgJIAAgDIgBgXIAAgBIAAABIAAABQgEAHgGAAIgGgCIgBAAQgFgCgCgFIgFgYQgRgrgTgSIgCgBQgJgJgBgIIAAgCIAAgDIAFgKQAHgLAQgDIAHgBIACAAIAAAAIAGACQAIAFAHAIIAEAFIAGAKIAHAPIAAAAQAbAYgGg0IgDgaIgBgTIABgWQADgcAMggIACgEQAeg4BcgKIANgBQCfAIBBgvQBCBagEBhQgBARgDARIAAAAIgBABIABAAIAEgGIABgCIABgBIABgBIAAAAIADgDQAGgEAFgCIABAAIAKAAIACABIAAAAQANADAEAMIABABIAAAEIgBAHQgBAEgCAEIgEAGIgGAHIgDADQgPAPgCAdIAAAUIAAADIgBACQAAAFgCADIgBABQgCAEgEACQgEACgFABQgHACgJgDIgBAAIAAAAIABAAIAAAXQAAAPgIAOIgCAEIgFAIQglA0hLA9IgCABIgFAAIACADIgDACQgHALgSACIgFAAgADcBAIAAAJIAAgJIAAgCIAAgCIAAgCQAAgRADgVIACgCIgCAAIAAACIgBAAIAAABIABgBQgDAVAAARIAAACIAAACIAAACgAjsAaQgEgIAAgHQAAgJAHgDIALAQIAEAJIgCgGIgGgNIAAABIgCgEIgBgBIgCgBIgBgCIgEgEIgBgBQgEgEgFgDIgBAAQgGgDgIAAIAAAAIAAAAIgBAAIgBAAIABAAIABAAIAAAAIAAAAQAIAAAGADIABAAQAFADAEAEIAEAGQgHADAAAJQAAAHAEAIgADiAUIAAAAIgBgCgADgAQIAAAAIgBACIABgCIAAAAQAEgbAJgjQgJAjgEAbgADfARIAAgBIAAAAgAD0APIABgHQAAgIgDgCQgBgDgDgCIABgBIAKgLIAGgFQAIgGAHgBQgHABgIAGIgGAFIgKALIgBABQADACABADQADACAAAIIgBAHgAAWiJIAAABIgBAAIACAAIgBAAIABgBIgBAAgAhNiXIACAAIAAgCIgCACgADdBJg");
	this.shape_1.setTransform(-0.2,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#151515").s().p("AjYDxIAAgBIAAAAIgHgPIgGgKIgEgFQgHgIgIgFIgGgCIAAAAIgCAAIgHABQgohlARhzIACgOIAGgYIAIgUQAHgQAIgOIAVggQBfh8DQATIACAAQB8AMAKBiIADAAQAzgDAaBZIAAAAQASBIgdA/QgMAkgEA4IgBAAQgFACgGAEIgDADIAAAAIgCABIAAABIgBACIgEAFQADgRABgRQAEhhhChYQhBAtifgIIgNABQhcALgeA3IgCAEQgLAggEAcIgBAWIABATIADAaQAEAlgLAAQgFAAgJgIg");
	this.shape_2.setTransform(0,-12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3C19F").s().p("AgGAgIACAAIgCACIAAgCgAAHggIAAgBIAAABg");
	this.shape_3.setTransform(22.9,10.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC488").s().p("ABUCZIAFAAIgDACgADZgXIAAAAIAAAAgADdhOIACACIAAAAgADbhRIABAAIgBABgAjshkIAAAAIABACIADADIAAABIACADIAFAJIgLgSgAjwhpIAAAAIAEAFIAAAAIgEgFgAjshkIAAAAgAjahmIABAAIAAABIgBgBgADwiZIABgBIgBABIAAAAg");
	this.shape_4.setTransform(0.1,21.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.2,-38.6,60.5,78.4);


(lib.dfsdccc = function() {
	this.initialize();

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AkHA/QgohjARh1QABgGABgHQADgMADgMQAEgKAEgKQAHgQAIgPQAKgQALgQQBfh7DQASQABAAABAAQB8ANAKBiQACAAABAAQAzgEAaBaIAAAAQASBJgdBAQgMAjgEA3QAGgBAEABQABAAABAAIAAAAQANADAEAMIABABQAAACAAADQAAADgBAEQgBAEgCAEQgCADgCADQgDADgDAEQgCABgBABQgPARgCAdIAAAUQAAABAAACQgBACAAABQAAAEgCAEQgBAAAAAAQgCAEgEACQgEADgFABQgHACgJgDIAAAXQAAAPgIAOQgBACgBABQgDAEgCAFQglAzhLA9QgBABgBABQgBABgCABQgBABgCACQgHAKgSACQgDAAgCAAIguAAQgNgBgSgJQgHgDgHgFQgJgFgKgGQhIgthGg9QgCgBgBgBQgKgKgCgKQAAgBAAgCIgBgXAAUgYIABAAQgBABgBAAQAAAAABgBIAAAAIAAgBQABAAAAABgADsBAQADgSABgQQAEhghChZQhBAvifgIQgHAAgGABQhcAKgeA3QgBACgBADQgLAfgEAbQgBAKAAALQAAAKABAKQABANACANQAGA1gbgZQAAAAAAgBQgDgIgEgHQgDgFgDgFQgCgCgCgDQgHgIgIgEQgDgCgDgBIAAAAQgBAAgBAAQgEABgDAAAhNgnIAAgBQgBABgBABQABgBABAAgAjWDHQAAAAAAABQgEAHgGgBQgDAAgDgBIgBAAQgFgDgCgFIgFgYQgRgqgTgTQgBgBgBgCQgJgIgBgIQAAgCAAgBQAAgCAAgBQACgFADgFQAHgLAQgDAjvBoIABAAQACACACADQAAABABABIACADIABABQABACABABIAAAAQADAGADAHQABACABADQgCgFgCgEQgCgFgCgEAjvBoQgEgFgFgCQgIgEgJAAAjrBtQgCgDgCgCAjqBtIgBAAAjWDHQAAgBAAgBIAAABgAjgB/QgFgKgGgIQgLAIAIAWAECAuQgBAAAAAAQgFABgGAFIgDACIAAABQgBAAAAABIgBAAIgBACIgEAGIAAAAQAAAAAAAAQgKAjgEAdIAAABQgBABAAABQAAABAAAAIgBABQAAAAAAAAIABgBQgDAWAAASQAAADAAACIAAAJIABAAADzA3QgBAAgBABIAAAAADsBAIAAAAADyCAQACgNgEgHQgBgDgDgBQABgBAAgBQAGgGAEgFQADgDADgCQAIgFAHgBADdCAIAAAAIAAABgADaC6IAAAAIABAA");
	this.shape.setTransform(0,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCC791").s().p("AA4ENIguAAQgNgBgSgJIgOgIIgTgMQhIgthGg9IgDgCQgKgKgCgJIAAgDIgBgXIAAgBIAAABIAAABQgEAHgGAAIgGgCIgBAAQgFgCgCgFIgFgYQgRgrgTgSIgCgBQgJgJgBgIIAAgCIAAgDIAFgKQAHgLAQgDIAHgBIACAAIAAAAIAGACQAIAFAHAIIAEAFIAGAKIAHAPIAAAAQAbAYgGg0IgDgaIgBgTIABgWQADgcAMggIACgEQAeg4BcgKIANgBQCfAIBBgvQBCBagEBhQgBARgDARIAAAAIgBABIABAAIAEgGIABgCIABgBIABgBIAAAAIADgDQAGgEAFgCIABAAIAKAAIACABIAAAAQANADAEAMIABABIAAAEIgBAHQgBAEgCAEIgEAGIgGAHIgDADQgPAPgCAdIAAAUIAAADIgBACQAAAFgCADIgBABQgCAEgEACQgEACgFABQgHACgJgDIgBAAIAAAAIABAAIAAAXQAAAPgIAOIgCAEIgFAIQglA0hLA9IgCABIgFAAIACADIgDACQgHALgSACIgFAAgADcBAIAAAJIAAgJIAAgCIAAgCIAAgCQAAgRADgVIACgCIgCAAIAAACIgBAAIAAABIABgBQgDAVAAARIAAACIAAACIAAACgAjsAaQgEgIAAgHQAAgJAHgDIALAQIAEAJIgCgGIgGgNIAAABIgCgEIgBgBIgCgBIgBgCIgEgEIgBgBQgEgEgFgDIgBAAQgGgDgIAAIAAAAIAAAAIgBAAIgBAAIABAAIABAAIAAAAIAAAAQAIAAAGADIABAAQAFADAEAEIAEAGQgHADAAAJQAAAHAEAIgADiAUIAAAAIgBgCgADgAQIAAAAIgBACIABgCIAAAAQAEgbAJgjQgJAjgEAbgADfARIAAgBIAAAAgAD0APIABgHQAAgIgDgCQgBgDgDgCIABgBIAKgLIAGgFQAIgGAHgBQgHABgIAGIgGAFIgKALIgBABQADACABADQADACAAAIIgBAHgAAWiJIAAABIgBAAIACAAIgBAAIABgBIgBAAgAhNiXIACAAIAAgCIgCACgADdBJg");
	this.shape_1.setTransform(-0.2,11.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#151515").s().p("AjYDxIAAgBIAAAAIgHgPIgGgKIgEgFQgHgIgIgFIgGgCIAAAAIgCAAIgHABQgohlARhzIACgOIAGgYIAIgUQAHgQAIgOIAVggQBfh8DQATIACAAQB8AMAKBiIADAAQAzgDAaBZIAAAAQASBIgdA/QgMAkgEA4IgBAAQgFACgGAEIgDADIAAAAIgCABIAAABIgBACIgEAFQADgRABgRQAEhhhChYQhBAtifgIIgNABQhcALgeA3IgCAEQgLAggEAcIgBAWIABATIADAaQAEAlgLAAQgFAAgJgIg");
	this.shape_2.setTransform(0,-12.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E3C19F").s().p("AgGAgIACAAIgCACIAAgCgAAHggIAAgBIAAABg");
	this.shape_3.setTransform(22.9,10.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFC488").s().p("ABUCZIAFAAIgDACgADZgXIAAAAIAAAAgADdhOIACACIAAAAgADbhRIABAAIgBABgAjshkIAAAAIABACIADADIAAABIACADIAFAJIgLgSgAjwhpIAAAAIAEAFIAAAAIgEgFgAjshkIAAAAgAjahmIABAAIAAABIgBgBgADwiZIABgBIgBABIAAAAg");
	this.shape_4.setTransform(0.1,21.7);

	this.addChild(this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.2,-38.6,60.5,78.4);


(lib.coconutTree1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#017D3F").s().p("AAAAAIABAAIgBAAg");
	this.shape.setTransform(-5.6,-31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#708A33").s().p("AguCSQg3AUgbgVQgiAIgdgGQgagGgQgOQg1AAgNgPQgKgMATgXQgggdAsgSQgWhBBvAPQAlggAeAjQALAEAGgCQAHgDgLgIQgegmA6gFQgOgQANgRQANgQAWAHQADggAZgNIACABQgNAYARAPQgiANALAcQgXAGgEAOQgEAOAPAMQgVALAFAPQgQAAgGAFQgogKghAIQggAHgKAWQgyAmBJAVQAKAcA1gNQAqAVAlgaQAjAlA3gnQApAjA+gjQApAaAlgaQAngDAGgcQAJAFgCAMQAiAOgUAUQgUAUgxgEQgzAWhPgHQgjAOgagOQgdAKgTAAQgWAAgNgLg");
	this.shape_1.setTransform(-3.7,-15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9DAE50").s().p("AhBCAQglAagpgVQg2ANgJgcQhJgVAxgmQAKgWAhgIQAggJAoAMQAGgHAQAAQgFgPAWgKQgQgLAEgOQAFgOAXgGQgLgcAhgNQgQgPANgYIAAgCQAYgLAZANQAFgRATgDQAQgBAPAJIAGAEQAfgTAXAPQAaAOgLAmQAYACALAMQAKAKgGAOQAaAFAFAOQAGAPgTAOQAXAbgiAbQA7gBgHAkQAKABAFAEQgFAcgnADQgmAagpgaQg9AjgqgjQgbAUgXAAQgXAAgRgSg");
	this.shape_2.setTransform(-1.2,-18.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#AA8E78").s().p("ACVGCQgLgFgLAIIgKAGQhKiAg4ibIgCgEIgDgIIgWg9IgDgKQgehWgZhhIgBAAIgEgQIgBgEIgCgIIgJgjIAZgFIADALIgGAZQAFgFAEgHIAKAmQAaBgAgBUIADAJQANAlAOAiIADAIQA+CSBSB0QgDANALAXQgKgQgKgEgAh/kDIgeheIgLgfQAQAJADATQAEgZgJgVIAKgDQAmB9APA4IgYAHIgMgqg");
	this.shape_3.setTransform(-25.5,-52.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#708A33").s().p("AALgCIABACIgXADg");
	this.shape_4.setTransform(-35.9,-74.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#86B241").s().p("AgaEvIgBgBIgGgRQgTAMAAAHQgTgrASgpQgXgDgCATQgDgVACgTQABgMAEgMQAFgSAKgSQgaAHgDAZQgGgmAXgfQAIgJAKgJQgbgHgVAfIgCAGQgLALgIAVQgGAPgFAVQgKAGgFgXQgEALgEAcIgCANIgJgSIAAAFQAAAVgRAeQgWAngJAyIgEAAQgVghANgyQAFgSAJgUQgfAPAAAUQgEgdANgZQAEgIAGgIQAKgNAPgLIABgBQgKgQgdAfQAIgfAcgXQARgOAYgMQgUgGggARQAignApgTQgtgTgvATQgbALgbAYQgSAPgSAWQgHgeAhgeQALgKgogGQASgQAVgEQAUgEAXAJQAAgFgCgEIgCgDQgIgPgUgJQAlgWAoAhQAKgNgZgbQATABATALQARAKAQAPIgZglQARAHANAIIANAJQALAJAHAJQgHgPgLgNIgIgIQgVgUgggJQgMgDgNgBQgigEgqAGQgOACgPADQgOgRAngJQgBgNgjgIQBOgJAUAVQAFgVgRgMQA5ARAGAVQANgVgNgVQAjAZASAYIAGAKQAEAFACAFIACAEQADgHABgHIAAgEQACgMgFgKQALALAIALQAUAdADAdQAPgNgDgOQAUAYgFASIgBACIACgCQADgCABgEQAGgRgQgYIgBgBIgEgFQgLgPgSgQIgYgTIgBgCIgUgPIgogbIgtgcIgCgGQgGgNgWgLQAxAFARATQAEAEACAFQAFgEADgFQAJgOgRgPQAWAOAMAPIAHAKIACADQAFALACALQANgQgKgRQAoAgAIAoIAAggQAYAWgDAXIgCAJQAJgDAGgEIAEgFIAAgBIgBgCIgBgFQgHgYAGgeQAAAZARAFQgJgdgBgdQAAgUAEgVQAAASAOgEIABAAIgBgCQgHgmANgtQgBAHANALIAFgSQAHgXAMgUQAHAVgFAdIgEARIANgqQAEAQgCAMQgDAagVAtQAPABACgTQACAbgGAdQgFAWgKAYQASgJAEgaQAAAOgCANIgBAHQgEASgIAQIAeAVIgBgCQgJgRAAgOQABgJAEgIIAPASQgEgNADgNQADgOALgOIACAfQADgoAggjQgHARAMAQQABgLAEgMIACgEIAEgJQAKgQARgQQgNAQAJAPIAHAIIAFgKQAMgUAqgIQgSANgEANIgCAGQgUARgRAQIgBAAIgVAUIgIAHIgSATIAAAAIgBABQgfAhgMAZIAAABIgBABQgIARABANIAAACQABAKAIAIQgIgVAPgaQgBANAPANQgBgeAQgdQAFgMAJgMQgEALADAMIABADQABAHADAHIACgGIADgJIAFgJQANgaAcgbQgJAVANAVQADgWAvgVQgNAOAGAVQAPgXBDAEQgcALgBAMQAiAGgKASIgZgDQgagCgWACIgSADIgSAFQgaAKgQATIgBABIgIAMIgEAHQgGALgEANQAGgLAJgKQAGgIAJgGQAIgHALgGIgSApQAbgnAegFQgSAdAIANQAgglAiAUQgRAMgFAPQgDAGAAAHQAUgLARADQASACAQAPQghAHAKAKQAfAagEAfQgRgVgQgNIgIgHQhBgxg3AfQAkAQAhAlQgdgQgRAIQAUAJAPAMQAcAWAKAgQgcgdgHAQQANAKAKAMQAGAIAFAIQANAZgBAdQgBgUgcgNIAKAWIAFAQQAOAwgSAiQgMgxgWglQgQgcgCgWIAAgEIgHASIgCgOIgIgeIAAgBIgDgHIgBAIQgDAPgHgEQgGgkgbgWQgMgJgQgHIgLgEIAIAIQAIAIAHAJIAFAHIAFAGQAOAVAJAZQAGASAEAUQgSgfgUgGQAPAXAIAVQAKAegIAaQgJgngQAGQAIATACAQIABAOQgCAZgSASQAKgOgSgcQgEAigNAWIgDgNQAHgiAEgjIACgdQAChXg2gmQgKgDgJAAQAGALAFANQgJgQgKgHIAJAfIgJADQAIAVgDAZQgDgTgQgJIgDgIIgGAEQAIASAGATQAIAfgFAgQgCgTgUADIALAWQAJASAEAOIADAOQABAMgHAQIgPgoIAFATQADAagJAWQgQgTgJgVg");
	this.shape_5.setTransform(-43.2,-105.1);

	this.addChild(this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-75.7,-139.4,102.6,139.5);


(lib.CoconutTree = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#86B241").s().p("AgvIHIAAgCQgHgOgDgOQghAUAAAMQghhKAehFQgmgGgEAhQgGgkADghQADgUAHgVQAJgeARggQgtANgGAqQgKhBAog0QANgRARgPQgtgMgkA2QgCAHgCADQgTATgOAjQgLAagHAkQgRALgKgpQgGAUgHAvIgDAXIgQgeIAAAHQAAAlgeA0QglBCgPBVIgHAAQgkg3AXhWQAHgfAQgiQg0AZAAAjQgIgyAWgsQAIgNAKgNQARgXAagTIABgBQgRgbgyA0QAPg0AvgpQAegYApgTQgkgLg2AeQA7hEBGghQhOgghPAhQgvASgvApQgeAbggAlQgKg0A3gyQAUgRhFgLQAegcAkgHQAigHApAQQgBgIgEgHQAAgDgCgDQgOgagjgQQBAglBFA4QAQgWgrgwQAhAEAgASQAeARAcAbIgshCQAdANAWANIAXAQQATAQAMAQQgMgbgTgWIgNgNQgkgjg4gPQgUgGgWgBQg6gHhJAKQgYAEgZAFQgXgdBCgQQgDgWg6gNQCFgQAhAkQAKgkgdgVQBiAdAKAkQAVgkgVgkQA7ArAfAqIALARQAGAIAEAJIADAHQAFgNACgLIAAgIQADgVgIgRQATATANATQAjAyAFAyQAagXgFgYQAhAqgIAgIgCAEIADgEQAGgFABgGQAMgegdgpIgBgCIgGgIQgTgagggcQgTgQgVgQIgDgDIgigaQgggXglgYIhMgwIgEgJQgKgWgmgTQBVAIAcAhQAHAHADAIQAJgHAFgIQAPgZgdgZQAmAXAWAbIALAQIADAGQAJASAEAUQAVgcgQgeQBFA3AMBFIAAg2QApAlgEAoIgDAOQAPgDAJgHIAJgKIgCgCIAAgDIgDgIQgLgqAJgzQABAqAdAJQgPgxgCgzQAAghAHgkQAAAfAXgHIACAAIgBgEQgNhBAZhNQgCANAVARIAKgeQAMgnAUgiQAMAkgIAxIgGAbIAVhFQAGAagCAWQgGAsgkBNQAaABAEgfQADAugLAxQgIAmgSAoQAfgPAHgsQABAYgEAWIgCANQgHAegNAcIA0AjIgCgDQgQgdABgYQAAgPAIgPIAaAgQgIgWAFgYQAFgWAUgZIADA2QAGhGA2g7QgLAdAUAcQACgUAGgUQACgEACgDQADgIAEgHQAQgcAfgbQgYAcAPAZIANANIAIgQQAVgiBIgPQgfAWgGAXQgDAFAAAFQgjAdgeAbIAAACQgVAQgQARIgOANIgeAgIgBAAQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQg1A5gVArIgBABIAAACQgOAdACAWIAAADQABASANAOQgNgjAaguQgCAXAZAVQgBgyAbgyQAKgVAPgUQgHASAFAVIABAGQACAMAFAMIADgMIAGgOIAJgQQAWgtAwguQgPAlAVAjQAFglBRgkQgXAXALAkQAagmByAGQgvASgCAWQA7AKgSAfQgWgDgVgCQgtgEglAEQgRACgNADQgRADgOAGQgtAQgcAhIgBACIgOAUIgHANQgKATgHAWQAKgTAPgSQALgNAPgLQAPgMASgKIggBGQAvhCA0gJQggAxAPAYQA3hAA5AiQgcAUgKAaQgEALgBALQAjgSAeAEQAfAEAbAbQg5AMARARQA1AtgGA1QgdgjgcgXIgOgMQhwhWheA4QA/AaA4A/QgxgageAOQAhAPAbAUQAvAmARA3QgvgzgMAdQAXARAQAUQALANAJAPQAVAqgBAyQgCgjgvgVQAJAUAHASIAIAaQAZBTggA7QgThVgmg/QgcgwgDgmIgBgHIgLAfIgEgXQgIgigFgSIAAgCQgEgHgBgFIgCAOQgGAagMgIQgKg+guglQgUgQgdgLQgJgEgJgDQAIAGAHAIQANANALAQIAKAMIAIALQAYAjAPAqQALAfAHAjQgfg0gigMQAZAoANAjQATA1gOAtQgQhDgbAKQANAgAEAcIABAXQgDAsgeAfQAQgZgegwQgIA7gWAlQgHAMgIAJIAKgrQAMg6AGg8IAEgyQAEiWhdhBQgRgFgPABQAKATAIAWQgPgbgSgNIAQA1IgQAFQAPAlgGAqQgFghgcgOIgFgPIgLAHQAQAgAJAgQAPA2gKA2QgCghglAGQAMAUAIASQARAeAGAYQAEAMAAAMQADAVgNAbIgZhEQAGAQACAPQAFAtgQAmQgcgggQglg");
	this.shape.setTransform(-59.4,-159.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AA8E78").s().p("AEAKWQgTgJgTAOIgRAKQh/jahikKIgDgIIgFgNQgTgzgSg1IgHgRQgziWgrimIAAgBIgHgaIgCgHIgEgOQgGgcgKghIgUhHQgXhJgdhZIgSg0QAcAPAFAgQAGgqgPglIAQgFQBCDXAbBgIAAgBIAFAYIgKAqQAIgJAHgMIASBBQAtClA3CSIAFAQQAXA+AYA7IAFANQBrD8CMDGQgEAWASAoQgQgbgSgIg");
	this.shape_1.setTransform(-29,-69.7);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-115.2,-218.8,115.2,218.8);


(lib.dfsdSymbol248_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#DB8733").ss(1,1,1).p("AgIAKQABgQAQgD");
	this.shape_6.setTransform(11.8,4.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DB8733").ss(1,1,1).p("AhsgBQB2AeBjgn");
	this.shape_7.setTransform(23.3,5.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("rgba(0,0,0,0.102)").s().p("AhhAAQgLgJANgCQAdAJAyACQAvAAAjgHQAjgKACAKQg+AUg1AAQgtAAgogNg");
	this.shape_8.setTransform(22.9,6.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#DB8733").ss(0.5,1,1).p("AgagBQAPAGAmgD");
	this.shape_9.setTransform(21.4,9.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(0,0,0,0.102)").s().p("AgagHQAPAHAmgCQgGAKgMAAQgNAAgWgPg");
	this.shape_10.setTransform(21.4,9.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#DB8733").ss(0.5,1,1).p("AAJAIQgCgPgPAA");
	this.shape_11.setTransform(35,3.7);

	this.addChild(this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(9.9,1.9,27.1,8.9);


(lib.dfsdSymbol10copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#923F07").ss(1,1,1).p("AAigcQgNgKgRAAQgOABgeADQgJAAgKABQAFAIADALQACALAAAKQgBAJgBAFQAAACAAABQAFAHADACQAFAEARABQALABAOgEQAGgSATgJQAOgHAQAAQABgBAAgCQgCgDgQgQQgEgFgEgCQgBACgBAAIhFAHIgDgPAAEAjQAKgCALgEQAbgJAHgT");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FF4444").s().p("AgBgIQAMgHAQgBQgHARgZAKIgVAGQAGgRATgIg");
	this.shape_39.setTransform(3.2,1.9);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#5E0000").s().p("AgVAlQgRgBgFgFQgDgBgFgIIAAgDIACgNQAAgLgCgLQgDgLgFgHIATgCIADAPIBFgGIACgDQAEADAEAEIASAUIgBADQgQAAgOAHQgTAJgGASQgMADgKAAIgDAAg");
	this.shape_40.setTransform(0,0.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgkgEIAsgEQAQAAANAIIgBACIhGAHg");
	this.shape_41.setTransform(-0.4,-3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#923F07").ss(1,1,1).p("AAggmQgMgIgPAAQgTADgVABQABADABAEQAAAFACAAQABAAAKABQAVAAAJgCQASgEAEgDQAGAEAEAGQAIAKANAYQgBAAgBABQgOAPgIAHQgQAOgVADQgBABgBAAQgSACgUgJQgGgCgEgCQgMgGAAgDAA9AHQgSADgRAKQgWAMgEAPAg3gpIgHAAAg3gpIAHgBQAGAAAHAAAgwAkQADgPAAgHQAAgngKgQ");

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF4444").s().p("AgDgGQAPgJASgDIgVAUQgPAOgUADIgEAAQAGgOAVgLg");
	this.shape_43.setTransform(3.1,2.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5E0000").s().p("AgpAmIgLgEQAEgPAAgHQgBgngJgQIAGgBIAOAAIABAHQABAFABAAIAMABQAXAAAHgCQARgEAFgDQAGAEAEAGQAIAKAMAYIgBABQgSADgRAKQgWAMgDAPIgHAAQgQAAgQgHg");
	this.shape_44.setTransform(0.3,0.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgdAGQgCAAAAgEIgCgFQAVgBATgDQAPAAAMAHQgEACgSADQgJADgVAAIgLgCg");
	this.shape_45.setTransform(-0.2,-3.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#923F07").ss(1,1,1).p("AAAgUQABAAACAAQAKAAABAAQADABAFAHQABAAABABIgBABIgNABQgFAAgBgCQgCgHgCgCgAAYgLQACAEAEAFQADACAAAGQAAAOgMAHQgKAFgNAAQgJAAgEgCQgFgDAAgIIABgSQAAgIgCgFQgCgGgCgFQgCgBgBgCQgDgCgBgDAgZgXQADABAFABQAEABANAA");

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#5E0000").s().p("AgSAaQgFgDgBgIIABgRQAAgJgCgFIgDgLIAHACQAFABAPAAQABACAAAIQABACAGAAIAMgCIABAAIAGAIQADAEAAAEQAAANgMAIQgKAFgNAAQgJAAgDgCg");
	this.shape_47.setTransform(0.4,0.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgGADQgCgFgCgCIADAAIAJAAQADABAFAFIABACIgLABQgFAAgBgCg");
	this.shape_48.setTransform(1.2,-1.6);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#923F07").ss(1,1,1).p("AgsADQABABAIAAQAMAAAPgEQANgDAKAAQAIAAAWAC");

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#923F07").ss(1,1,1).p("AAngQQACABADABQACABAFAFQAEAEABABQgJAJgWAHQgXAGgdgCQgJAAgFAAQgDAAgCAAAgdgOQAUgBAigCQAKAAABAAQAAAAABABQABAAABAAQAAACAAADIAAADQgkAGgegDQAAgCgCgHQgFAAgEAAQgIAAgEAAQAEAGACAIQACACABAPAg3gPQAAAAAFAB");

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AgfAFIgCgHIA2gDIAKAAIACABIABAAIAAAEIAAACQgYAEgVAAIgUgBg");
	this.shape_51.setTransform(0.4,-1.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5E0000").s().p("AgdARIgPgBQgBgOgBgDQgDgIgDgGIALAAIAJAAIACAKQAeADAkgHIAAgDIAAgEIAFABIAHAGIAFAGQgJAJgWAGQgSAFgVAAIgMAAg");
	this.shape_52.setTransform(0.3,0);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#923F07").ss(1,1,1).p("AgfgwQADAIgBAGQAAACAQAAQANAAANgDQAKgCAGgCQgPgNgOAAQgWADgJABQgEAAgCAAQgIAAgHgBQgDgBgDgBAA5AFQgGgVgRgRQgDgDgCgDAA5AFQABADABADQgYAZgLAJQgJAHgPABAg0gxQACAAAFAVQAGAogHAXQgDgEgEgFAguAjQAPAQAUABQAGABAFAAQAGgqAzgG");

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FF4444").s().p("AAcgWIABAFQgXAYgKAJQgJAGgQACQAHgoAygGg");
	this.shape_54.setTransform(3,2.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#5E0000").s().p("AgNAzQgUgBgOgQQAGgXgFgoQgFgVgDgBQAHACAJAAIAFAAQADAIgBAGQABACAPAAQANAAANgDIAPgEIAGAFQARASAGAVQgzAGgFAqIgMgBg");
	this.shape_55.setTransform(0.2,0.1);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgbAIQABgGgDgHIAdgDQAQAAAOAKIgPAEQgPAEgLAAQgQAAAAgCg");
	this.shape_56.setTransform(-0.2,-4.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#923F07").ss(1,1,1).p("AAsgUQgCABgDABQgHACgHACQgIAEgGAFQgKAGgBAGQAAAAgBAAQgXAAgEAAIADAXQgMAAgIgCQgCgBgCAAQgBgBAAAAQgGgBgHgCAAsgUQAJAEAIAIQAFAEAEAFQgWAPgRAEQgoAKgMAAQgCAAgCAAAgogaQASAAAfgDQAUAAAPAJAgyAaQgBgRgEgPQgDgPgCgGQAGABAFAAQAEAAAFAAQADACADAMQADABAUAAQABAAAAAAQAOACAVgFAhFgdQABAAAHACQAAAAABAAAA9gIQggAOgdAB");

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FF4444").s().p("AgRAAQAFgDAIgEIAMgEIAFgCQAJAEAIAIQgeAOgdABQABgGALgIg");
	this.shape_58.setTransform(3.1,-0.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5E0000").s().p("AgbAaIgEAAIgBgBQgBgSgEgOQgDgPgCgFIALAAIAJAAQAEACADAMQACACASAAIABAAQAQABAVgFQgIAEgFAFQgLAGgBAGIgDAAIgZAAIAEAWQgMAAgJgCg");
	this.shape_59.setTransform(-1.8,0.1);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgnAdIgDgWIAbAAIACAAQAcgBAfgOQAFAFAFAEQgXAOgQAFQgpAJgMAAIgDAAgAgYgKIgBAAQgVAAgCgCQgDgMgEgCIA0gCQARgBAQAJIgGACIgOAEQgNAEgMAAIgJAAg");
	this.shape_60.setTransform(1.4,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#923F07").ss(1,1,1).p("AA+gTQABABACACQAFAEAEAIQgYAOgNAFQgZAKghAAQgEAAgFgBQgDgPgCgJQAQAAAXAAQAogCAVgOAA+gTQgBgBgCgBQgFgDgMAAQgIAAgiAFQgaAEgNABQABACACAJQAfAAAKgCQAhgDAYgLgAg6gQQgBgBAAAAQgHgCgCgCAgngOQgDAAgCAAQgGAAgIgCQADAEABANQAAAEAAAFIgBAKQgRgEgBAAAgeAYQgLgBgNgDIgBAA");

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#5E0000").s().p("Ag5ASIgBAAIABgKIAAgIQgBgOgDgEQAHACAHAAIAEAAIAEAKQAfAAAKgBQAhgDAYgLIADADQgWANgoADIgmACIAFAWQgLgBgNgDg");
	this.shape_62.setTransform(0.3,0.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgvAYIgFgYIApAAQAmgCAWgOQAEAEAEAIQgYAOgNAFQgXAKgjAAIgJgBgAg4gOIApgFQAhgFAHAAQAMAAAFADIADACQgXALggADQgLACggAAIgDgLg");
	this.shape_63.setTransform(1.7,0);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#923F07").ss(1,1,1).p("AgsgLQAWgBAHgCQAVgFAYAAQAPAAAKADQAEABAMAFQgWADgSAGQgCAAgBABQgPAAgNAAQgJACgHAEQgLAFgEAJAgsgLQgBAAgBAAQgSAAgGAAAgpAEQgRAAgDAGAgQAGQgSgCgEAAQgCAAgBAAQgDgJAAgGAAcAAQgPAEAAAJ");

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AgzALIgDAAQgDgKAAgFQAXgBAGgCQAXgFAXAAQAOAAAKADIAQAGQgWADgSAEIgCABQgPAAgMACQgLACgGAEIgXgCg");
	this.shape_65.setTransform(1.3,-0.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#923F07").ss(1,1,1).p("AALAuQgLAEgNAAQgTAAgJgIQgHgGgDgFQABgCAAgCQADgMAAgOQAAgFgFgRQgEgSgBgDQgDAAgDgBAg5gqQAGABAGAAQAEAAAHgBIADASQACgBAdAAQASgCAMgGAAlAgQgGgEgCgHQgCgNAAgHQgBgGgGgKQgHgKgIACQgHABgKAGQgJAGADAKQACAIAKAPQAHAOAKAJQAFgCAGgCQAHgEAIgGgAgigqQAGgBAHgCQAQgEACAAQAGAAAGADQAFADAQAKQACACACABQATANAKAVQABABAAACQgPAPgMAK");

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgfgEIANgDIASgEQAFAAAHADIAUALQgMAGgTACIgdABg");
	this.shape_67.setTransform(-0.2,-3.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF4444").s().p("AgPANQgJgNgDgKQgDgKAKgGQAKgGAIgCQAGgCAHALQAGAKABAHIACATQACAGAGAEQgIAHgHADIgLAEQgIgJgJgNg");
	this.shape_68.setTransform(0.9,1.1);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#5E0000").s().p("AgsAmQgHgFgDgGIABgDQADgMAAgMQAAgHgFgSIgFgUIAMABIALgBIADASIAfgBQASgDALgFIAFADQATAMAKAVIABADQgPAQgMAJQgGgDgDgHIgCgSQgBgIgGgKQgGgLgIADQgHABgKAGQgJAGADAKQACAIAKAPQAIAOAIAJQgKADgNAAQgTABgJgJg");
	this.shape_69.setTransform(0.3,0.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#923F07").ss(1,1,1).p("AA5gOQgcACgTABQgOAIgCADAgjgTQAIgBALgBQAdgDAVAAQAMAAALAKQACACADACQAFAFAEAFQgNAKgLAEQgjALgXAAQgFAAgGAAQgNgBgOgDQgDgBgCgBQgIgDgCgDAg7gRQgGgBgFgDAgjgTQgQACgFAAIAAAAQgCAAgBAAQAFAVAAAPAgHgKQgXABgDAAQgCgIAAgCAgVAMIAAgCQAAgEAFgGQADgGAGgEQAHgBAKAAAA+gKQgvAWgfAAQgDAAgCAAQAAAAgBAAQgCgBgBAAQABADACAL");

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FF4444").s().p("AgoANIgBgBQAAgFAFgHQAEgFAFgDIATgBQgPAHgDAEQADgEAPgHIAtgEIAFAFQgtAVghAAIgEAAg");
	this.shape_71.setTransform(2,-0.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgnAZIgDgOIADABIABAAIAFAAQAgAAAtgWQAFAFAEAFQgNAKgLAEQghALgYAAIgLAAgAg1gTIAUgCQAfgDASAAQAMAAAMAKIgtADIgTABIgaABIgDgKg");
	this.shape_72.setTransform(1.8,0);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#5E0000").s().p("AgOASIgFgBQAAgQgFgVIACAAIABAAIAUgCIABAKIAagBQgGAEgDAGQgGAGAAAFIAAABIgDgBIADAOQgMgBgNgDg");
	this.shape_73.setTransform(-3.4,0.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#923F07").ss(1,1,1).p("AgJgQQAIADAIADQAMAEAAAMQAAAGgFAFQgEAEgGAAQgEAAgGgGQgHgGAAgDQAEgGAAgKQAAgDAAgDQgFgCgEgC");

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5E0000").s().p("AgJANQgHgGAAgDQAEgGAAgKIAAgGIARAGQAMAEAAAMQAAAGgFAFQgFAEgFAAQgDAAgIgGg");
	this.shape_75.setTransform(0.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]}).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},2).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},5).to({state:[{t:this.shape_49}]},13).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},2).to({state:[{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},6).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57}]},2).to({state:[{t:this.shape_63},{t:this.shape_62},{t:this.shape_61}]},2).to({state:[{t:this.shape_65},{t:this.shape_64}]},2).to({state:[{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66}]},2).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70}]},2).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},2).to({state:[{t:this.shape_75},{t:this.shape_74}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,-4.9,14.2,9.8);


(lib.dfsdSymbol10_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#923F07").ss(1,1,1).p("AgsADQABABAIAAQAMAAAPgEQANgDAKAAQAIAAAWAC");

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#923F07").ss(1,1,1).p("AAngQQACABADABQACABAFAFQAEAEABABQgJAJgWAHQgXAGgdgCQgJAAgFAAQgDAAgCAAAgdgOQAUgBAigCQAKAAABAAQAAAAABABQABAAABAAQAAACAAADIAAADQgkAGgegDQAAgCgCgHQgFAAgEAAQgIAAgEAAQAEAGACAIQACACABAPAg3gPQAAAAAFAB");

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgfAFIgCgHIA2gDIAKAAIACABIABAAIAAAEIAAACQgYAEgVAAIgUgBg");
	this.shape_40.setTransform(0.4,-1.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5E0000").s().p("AgdARIgPgBQgBgOgBgDQgDgIgDgGIALAAIAJAAIACAKQAeADAkgHIAAgDIAAgEIAFABIAHAGIAFAGQgJAJgWAGQgSAFgVAAIgMAAg");
	this.shape_41.setTransform(0.3,0);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#923F07").ss(1,1,1).p("AgogiIADAPIBFgHQABAAABgCQAEACAEAFQAQAQACADQAAACgBABQgHATgbAJQgLAEgKACQgOAEgLgBQgRgBgFgEQgDgCgFgHQAAgBAAgCQABgFABgJQAAgKgCgLQgDgLgFgIQAKgBAJAAQAegDAOgBQARAAANAKAA7ABQgQAAgOAHQgTAJgGAS");

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FF4444").s().p("AgBgIQAMgHAQgBQgHARgZAKIgVAGQAGgRATgIg");
	this.shape_43.setTransform(3.2,1.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#5E0000").s().p("AgVAlQgRgBgFgFQgDgBgFgIIAAgDIACgNQAAgLgCgLQgDgLgFgHIATgCIADAPIBFgGIACgDQAEADAEAEIASAUIgBADQgQAAgOAHQgTAJgGASQgMADgKAAIgDAAg");
	this.shape_44.setTransform(0,0.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgkgEIAsgEQAQAAANAIIgBACIhGAHg");
	this.shape_45.setTransform(-0.4,-3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#923F07").ss(1,1,1).p("AAggmQAGAEAEAGQAIAKANAYQgBAAgBABQgOAPgIAHQgQAOgVADQgBABgBAAQgSACgUgJQgGgCgEgCQgMgGAAgDAgjgqQABADABAEQAAAFACAAQABAAAKABQAVAAAJgCQASgEAEgDQgMgIgPAAQgTADgVABQgHAAgGAAIgHABIgHAAAA9AHQgSADgRAKQgWAMgEAPAg3gpQAKAQAAAnQAAAHgDAP");

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FF4444").s().p("AgDgGQAPgJASgDIgVAUQgPAOgUADIgEAAQAGgOAVgLg");
	this.shape_47.setTransform(3.1,2.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#5E0000").s().p("AgpAmIgLgEQAEgPAAgHQgBgngJgQIAGgBIAOAAIABAHQABAFABAAIAMABQAXAAAHgCQARgEAFgDQAGAEAEAGQAIAKAMAYIgBABQgSADgRAKQgWAMgDAPIgHAAQgQAAgQgHg");
	this.shape_48.setTransform(0.3,0.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgdAGQgCAAAAgEIgCgFQAVgBATgDQAPAAAMAHQgEACgSADQgJADgVAAIgLgCg");
	this.shape_49.setTransform(-0.2,-3.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#923F07").ss(1,1,1).p("AAdgnQgGACgKACQgNADgNAAQgQAAAAgCQABgGgDgIQgEAAgCAAQgIAAgHgBQACAAAFAVQAGAogHAXQAPAQAUABQAGABAFAAQAGgqAzgGQgGgVgRgRQgDgDgCgDQgPgNgOAAQgWADgJABAA5AFQABADABADQgYAZgLAJQgJAHgPABAg6gzQADABADABAguAjQgDgEgEgF");

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FF4444").s().p("AAcgWIABAFQgXAYgKAJQgJAGgQACQAHgoAygGg");
	this.shape_51.setTransform(3,2.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#5E0000").s().p("AgNAzQgUgBgOgQQAGgXgFgoQgFgVgDgBQAHACAJAAIAFAAQADAIgBAGQABACAPAAQANAAANgDIAPgEIAGAFQARASAGAVQgzAGgFAqIgMgBg");
	this.shape_52.setTransform(0.2,0.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgbAIQABgGgDgHIAdgDQAQAAAOAKIgPAEQgPAEgLAAQgQAAAAgCg");
	this.shape_53.setTransform(-0.2,-4.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#923F07").ss(1,1,1).p("AAsgUQgPgJgUAAQgfADgSAAQADACADAMQADABAUAAQABAAAAAAQAOACAVgFQgIAEgGAFQgKAGgBAGQAAAAgBAAQgXAAgEAAIADAXQACAAACAAQAMAAAogKQARgEAWgPQgEgFgFgEQggAOgdABAAZgOQAHgCAHgCQADgBACgBQAJAEAIAIAg8gbQgBAAAAAAQgHgCgBAAAg8gbQAGABAFAAQAEAAAFAAAgyAaQgBgRgEgPQgDgPgCgGAgyAaQgGgBgHgCAgZAeQgMAAgIgCQgCgBgCAAQgBgBAAAA");

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FF4444").s().p("AgRAAQAFgDAIgEIAMgEIAFgCQAJAEAIAIQgeAOgdABQABgGALgIg");
	this.shape_55.setTransform(3.1,-0.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#5E0000").s().p("AgbAaIgEAAIgBgBQgBgSgEgOQgDgPgCgFIALAAIAJAAQAEACADAMQACACASAAIABAAQAQABAVgFQgIAEgFAFQgLAGgBAGIgDAAIgZAAIAEAWQgMAAgJgCg");
	this.shape_56.setTransform(-1.8,0.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgnAdIgDgWIAbAAIACAAQAcgBAfgOQAFAFAFAEQgXAOgQAFQgpAJgMAAIgDAAgAgYgKIgBAAQgVAAgCgCQgDgMgEgCIA0gCQARgBAQAJIgGACIgOAEQgNAEgMAAIgJAAg");
	this.shape_57.setTransform(1.4,0);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#923F07").ss(1,1,1).p("AA1gTQACABACACQAEAEAEAIQgXAOgOAFQgZAKghAAQgEAAgEgBQgGAAgFgBQgHgBgHgCAA1gTQgBgBgBgBQgGgDgLAAQgIAAghAFQgcAEgNABQABACADAJQAfAAAMgCQAfgDAXgLgAA5gQQgWAOgmACQgZAAgPAAQACAJADAPAg0gOIgBAAQgFAAgGgCAg0gOQABAAADAAAgxAXIAAgLQAAgFAAgEQgBgNgCgE");
	this.shape_58.setTransform(0.8,0);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#5E0000").s().p("AgzAUIAAgKIAAgJQAAgNgDgEIAEAAIAEAKQAfAAAMgBQAfgDAYgLIADADQgWANgmADIgoACIAFAWIgLgCg");
	this.shape_59.setTransform(1,0.3);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgvAYIgFgYIApAAQAmgCAWgOQAEAEAEAIQgYAOgNAFQgXAKgjAAIgJgBgAg4gOIApgFQAhgFAHAAQAMAAAFADIADACQgXALggADQgLACggAAIgDgLg");
	this.shape_60.setTransform(1.7,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#923F07").ss(1,1,1).p("AgsgLQAWgBAHgCQAVgFAYAAQAPAAAKADQAEABAMAFQgWADgSAGQgCAAgBABQgPAEAAAJAgsgLQgBAAgBAAQgSAAgGAAAgQAGQgLAFgEAJAgpAEQgRAAgDAGAgQAGQgSgCgEAAQgCAAgBAAQgDgJAAgGAAcAAQgPAAgNAAQgJACgHAE");

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgzALIgDAAQgDgKAAgFQAXgBAGgCQAXgFAXAAQAOAAAKADIAQAGQgWADgSAEIgCABQgPAAgMACQgLACgGAEIgXgCg");
	this.shape_62.setTransform(1.3,-0.7);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#923F07").ss(1,1,1).p("AALAuQgLAEgNAAQgTAAgJgIQgHgGgDgFQABgCAAgCQADgMAAgOQAAgFgFgRQgEgSgBgDQgDAAgDgBAg5gqQAGABAGAAQAEAAAHgBQAGgBAHgCQAQgEACAAQAGAAAGADQAFADAQAKAALAuQgKgJgHgOQgKgPgCgIQgDgKAJgGQAKgGAHgBQAIgCAHAKQAGAKABAGQAAAHACANQACAHAGAEAgigqIADASQACgBAdAAQASgCAMgGQACACACABQATANAKAVQABABAAACQgPAPgMAKQgIAGgHAEQgGACgFAC");

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgfgEIANgDIASgEQAFAAAHADIAUALQgMAGgTACIgdABg");
	this.shape_64.setTransform(-0.2,-3.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FF4444").s().p("AgPANQgJgNgDgKQgDgKAKgGQAKgGAIgCQAGgCAHALQAGAKABAHIACATQACAGAGAEQgIAHgHADIgLAEQgIgJgJgNg");
	this.shape_65.setTransform(0.9,1.1);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#5E0000").s().p("AgsAmQgHgFgDgGIABgDQADgMAAgMQAAgHgFgSIgFgUIAMABIALgBIADASIAfgBQASgDALgFIAFADQATAMAKAVIABADQgPAQgMAJQgGgDgDgHIgCgSQgBgIgGgKQgGgLgIADQgHABgKAGQgJAGADAKQACAIAKAPQAIAOAIAJQgKADgNAAQgTABgJgJg");
	this.shape_66.setTransform(0.3,0.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#923F07").ss(1,1,1).p("AA5gOQgcACgTABQgOAIgCADAgjgTQAIgBALgBQAdgDAVAAQAMAAALAKQACACADACQAFAFAEAFQgNAKgLAEQgjALgXAAQgFAAgGAAQgNgBgOgDQgDgBgCgBQgIgDgCgDAg7gRQgGgBgFgDAgjgTQgQACgFAAIAAAAQgCAAgBAAQAFAVAAAPAgHgKQgXABgDAAQgCgIAAgCAgVAMIAAgCQAAgEAFgGQADgGAGgEQAHgBAKAAAA+gKQgvAWgfAAQgDAAgCAAQAAAAgBAAQgCgBgBAAQABADACAL");

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FF4444").s().p("AgoANIgBgBQAAgFAFgHQAEgFAFgDIATgBQgPAHgDAEQADgEAPgHIAtgEIAFAFQgtAVghAAIgEAAg");
	this.shape_68.setTransform(2,-0.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AgnAZIgDgOIADABIABAAIAFAAQAgAAAtgWQAFAFAEAFQgNAKgLAEQghALgYAAIgLAAgAg1gTIAUgCQAfgDASAAQAMAAAMAKIgtADIgTABIgaABIgDgKg");
	this.shape_69.setTransform(1.8,0);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#5E0000").s().p("AgOASIgFgBQAAgQgFgVIACAAIABAAIAUgCIABAKIAagBQgGAEgDAGQgGAGAAAFIAAABIgDgBIADAOQgMgBgNgDg");
	this.shape_70.setTransform(-3.4,0.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#923F07").ss(1,1,1).p("AAAgUQABAAACAAQAKAAABAAQADABAFAHQABAAABABIgBABIgNABQgFAAgBgCQgCgHgCgCgAAYgLQACAEAEAFQADACAAAGQAAAOgMAHQgKAFgNAAQgJAAgEgCQgFgDAAgIIABgSQAAgIgCgFQgCgGgCgFQgCgBgBgCQgDgCgBgDAgZgXQADABAFABQAEABANAA");

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#5E0000").s().p("AgSAaQgFgDgBgIIABgRQAAgJgCgFIgDgLIAHACQAFABAPAAQABACAAAIQABACAGAAIAMgCIABAAIAGAIQADAEAAAEQAAANgMAIQgKAFgNAAQgJAAgDgCg");
	this.shape_72.setTransform(0.4,0.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgGADQgCgFgCgCIADAAIAJAAQADABAFAFIABACIgLABQgFAAgBgCg");
	this.shape_73.setTransform(1.2,-1.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#923F07").ss(1,1,1).p("AgJgQQAIADAIADQAMAEAAAMQAAAGgFAFQgEAEgGAAQgEAAgGgGQgHgGAAgDQAEgGAAgKQAAgDAAgDQgFgCgEgC");

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#5E0000").s().p("AgJANQgHgGAAgDQAEgGAAgKIAAgGIARAGQAMAEAAAMQAAAGgFAFQgFAEgFAAQgDAAgIgGg");
	this.shape_75.setTransform(0.3,0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38}]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},2).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},2).to({state:[{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]},2).to({state:[{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50}]},2).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54}]},2).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58}]},2).to({state:[{t:this.shape_62},{t:this.shape_61}]},2).to({state:[{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63}]},2).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67}]},2).to({state:[{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},2).to({state:[{t:this.shape_75},{t:this.shape_74}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.5,-1.4,11,2.8);


(lib.dfsdgr_r_nose_new_021_1 = function() {
	this.initialize();

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DB8733").ss(1,1,1).p("ABEApIAZAAQAKgHAHgNQACgFACgHIgZgwAAsAgIAKgGIACAAQASgGAIAGQgEAJgigDIgfATQgWABgSgGIgagbQgtgGAPgJIAVAFIAJAKAhJAfIgYgEQgMgLgEgVIAhgu");
	this.shape_3.setTransform(11.5,5.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#550000").s().p("AAvANIAKgFIACAAQASgHAIAHQgDAGgTAAIgQgBgAhQgNIAVAGIAJAIQgtgEAPgKg");
	this.shape_4.setTransform(11.2,7.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(0,0,0,0.102)").s().p("AAQApQgRgBgSgCQgpgGgcgTQgbgSAAgPQAAgOAJgGQAOAHgCACIAMAAQARAAAWAUQALALANAEQALAEAJAAQAUAAAVgLQAUgNANAAQALAAADAEQADADAEAAQALAAABgJQABgIgBgDIgBgBIADABIAGAPQgBASgVAQQgcAVgwAAIgCAAgAhqgZIAAAAIAAgBg");
	this.shape_5.setTransform(11.4,8);

	this.addChild(this.shape_5,this.shape_4,this.shape_3);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,25,13.1);


(lib.dfsdgr_eyebrow_01_02_new_021_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("ABPgBIAAgBIgBAAQABAAAAABgABOgCQhtgLiKgBIgOgkQANACAQAJQAyAAA7ABQBHACA4AMQBKArAcAgQgngWhCge");
	this.shape_6.setTransform(60,10.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#180A0A").s().p("ABPgBIAAgBIAAAAQhtgLiLAAIgOglQANACAQAJQAyAAA7ABQBIACA3AMQBKAqAcAhQgogXhBgdg");
	this.shape_7.setTransform(60,10.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("ACPglQAEgOgkAQQgbACgdABQgcgBgjAEQglADgRAFQgOAEgVARQgUAPgZAeQAegVASgKQATgKAUgEQAWgEAogEQArgDAbAAQAcgBAIAAQAIAAAJABg");
	this.shape_8.setTransform(13.2,10.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#180A0A").s().p("AhhAAQAVgRAOgEQARgFAlgDQAjgEAcABQAdgBAbgCQAkgQgEAOIgNAaIgRgBIgkABQgbAAgrADQgoAEgWAEQgUAEgTAKQgSAKgeAVQAZgeAUgPg");
	this.shape_9.setTransform(13.2,10.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#180A0A").s().p("AljgYQAVgNAggEQAhgFA9AbQA9AZBMggQgNAbgQALQgQAKgmgCQgngDg2gTQg2gUgQAFQgQAFgYAKQgZAIgXAuQAIgyAqgagAEwgaIgPAAQgJABg3ATQg4ARhMAIQhLAIgLgxQBtASBOgbQBOgbAkAJQBcAdAGAyQgfguhHgKg");
	this.shape_10.setTransform(39.9,3.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#180A0A").s().p("AlkAhQARgYAOgIQAQgHAlgKQAlgLAcgBQAdgCAmgLQAmgLALgkIgFArQgFAKgLANQgMAOglAGQgkAEgvAEQguADgVALQgVALgQAQQgQAOgaAeQARgkARgWgAGGBTIgFgFQgMgLgagSQgZgUgfgNIgHgFQABABAAAAQABABAAAAQAAAAAAgBQgBAAAAgBIgygLQidAHgXggQgYgjgJgeQALASAYANQA4AgBEgBQBFgBAzAbQA8AuAaAjIACABIACAEIgBgBg");
	this.shape_11.setTransform(36.6,4.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.1,4.6,81.6,12.3);


(lib.dfsdgr_eye_pupilMcopy_01_02_new_021_1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgOAgQgegFgCgbQgBgYAggHQBCgCgEApIAAAKQgYAOgaAAIgLAAg");
	mask_1.setTransform(-2.2,0.6);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAMgEQAFAEAAAEIghABg");
	this.shape_4.setTransform(0.2,-0.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.4,1,1).p("AAAgMQgHAAgFAEQgFAEAAAEQAAAEAFAEQAFAEAHAAQAHAAAEgEQAFgEAAgEQAAgEgFgEQgEgEgHAAgAgbgTQgLAJAAAKQAAALALAIQAMAIAPAAQAPAAANgIQALgIAAgLQAAgKgLgJQgNgHgPAAQgPAAgMAHg");
	this.shape_5.setTransform(-2.3,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLAIQgFgEAAgEQAAgDAFgEQAFgEAGAAQAIAAAEAEQAFAEAAADQAAAEgFAEQgEAEgIAAQgGAAgFgEg");
	this.shape_6.setTransform(-2.4,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#924011").s().p("AgbATQgLgIAAgLQAAgKALgJQANgHAOAAQAQAAAMAHQALAJAAAKQAAALgLAIQgMAIgQAAQgOAAgNgIgAgMgHQgFADAAAEQAAAEAFAEQAFADAHAAQAHAAAEgDQAGgEgBgEQABgEgGgDQgEgFgHAAQgHAAgFAFg");
	this.shape_7.setTransform(-2.3,0.6);

	this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = mask_1;

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.9,-2.7,9.4,6.6);


(lib.dfsdgr_eye_pupilM_01_02_new_021_1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AgVAgQgWgHgBgXQgFgbAegGQBHgIgHAxIAAAKQgaANgbAAIgNgBg");
	mask_1.setTransform(-2.1,0.4);

	// Layer 1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AANgFQAEAEAAAGIghAAg");
	this.shape_4.setTransform(0.2,-0.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.4,1,1).p("AgbgVQgMAKAAALQAAAMAMAJQAMAJAPAAQAQAAAMgJQAMgJAAgMQAAgLgMgKQgMgIgQAAQgPAAgMAIgAAAgNQgHAAgFAFQgFADAAAFQAAAFAFAEQAFAEAHAAQAHAAAFgEQAFgEAAgFQAAgFgFgDQgFgFgHAAg");
	this.shape_5.setTransform(-2.3,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#924011").s().p("AgbAVQgMgIAAgNQAAgLAMgKQAMgIAPAAQAQAAAMAIQAMAKAAALQAAANgMAIQgMAJgQAAQgPAAgMgJgAgMgIQgFADAAAFQAAAFAFAEQAFAEAHAAQAHAAAFgEQAFgEAAgFQAAgFgFgDQgFgEgHgBQgHABgFAEg");
	this.shape_6.setTransform(-2.3,0.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgLAJQgGgEAAgFQAAgEAGgEQAFgEAGAAQAIAAAEAEQAGAEAAAEQAAAFgGAEQgEAEgIAAQgGAAgFgEg");
	this.shape_7.setTransform(-2.4,0.6);

	this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = mask_1;

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.7,-2.9,9.2,6.7);


(lib.dfsdccc_1 = function() {
	this.initialize();

	// Layer 3
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AkHA/QgohjARh1QABgGABgHQADgMADgMQAEgKAEgKQAHgQAIgPQAKgQALgQQBfh7DQASQABAAABAAQB8ANAKBiQACAAABAAQAzgEAaBaIAAAAQASBJgdBAQgMAjgEA3QAGgBAEABQABAAABAAIAAAAQANADAEAMIABABQAAACAAADQAAADgBAEQgBAEgCAEQgCADgCADQgDADgDAEQgCABgBABQgPARgCAdIAAAUQAAABAAACQgBACAAABQAAAEgCAEQgBAAAAAAQgCAEgEACQgEADgFABQgHACgJgDIAAAXQAAAPgIAOQgBACgBABQgDAEgCAFQglAzhLA9QgBABgBABQgBABgCABQgBABgCACQgHAKgSACQgDAAgCAAIguAAQgNgBgSgJQgHgDgHgFQgJgFgKgGQhIgthGg9QgCgBgBgBQgKgKgCgKQAAgBAAgCIgBgXAAUgYIABAAQgBABgBAAQAAAAABgBIAAAAIAAgBQABAAAAABgADsBAQADgSABgQQAEhghChZQhBAvifgIQgHAAgGABQhcAKgeA3QgBACgBADQgLAfgEAbQgBAKAAALQAAAKABAKQABANACANQAGA1gbgZQAAAAAAgBQgDgIgEgHQgDgFgDgFQgCgCgCgDQgHgIgIgEQgDgCgDgBIAAAAQgBAAgBAAQgEABgDAAAhNgnIAAgBQgBABgBABQABgBABAAgAjWDHQAAAAAAABQgEAHgGgBQgDAAgDgBIgBAAQgFgDgCgFIgFgYQgRgqgTgTQgBgBgBgCQgJgIgBgIQAAgCAAgBQAAgCAAgBQACgFADgFQAHgLAQgDAjvBoIABAAQACACACADQAAABABABIACADIABABQABACABABIAAAAQADAGADAHQABACABADQgCgFgCgEQgCgFgCgEAjqBtIgBAAQgCgDgCgCQgEgFgFgCQgIgEgJAAAjWDHQAAgBAAgBIAAABgAjgB/QgFgKgGgIQgLAIAIAWAECAuQgBAAAAAAQgFABgGAFIgDACIAAABQgBAAAAABIgBAAIgBACIgEAGIAAAAQAAAAAAAAQgKAjgEAdIAAABQgBABAAABQAAABAAAAIgBABQAAAAAAAAIABgBQgDAWAAASQAAADAAACIAAAJIABAAADzA3QgBAAgBABIAAAAADsBAIAAAAADyCAQACgNgEgHQgBgDgDgBQABgBAAgBQAGgGAEgFQADgDADgCQAIgFAHgBADdCAIAAAAIAAABgADaC6IAAAAIABAA");
	this.shape_5.setTransform(0,0.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCC791").s().p("AA4ENIguAAQgNgBgSgJIgOgIIgTgMQhIgthGg9IgDgCQgKgKgCgJIAAgDIgBgXIAAgBIAAABIAAABQgEAHgGAAIgGgCIgBAAQgFgCgCgFIgFgYQgRgrgTgSIgCgBQgJgJgBgIIAAgCIAAgDIAFgKQAHgLAQgDIAHgBIACAAIAAAAIAGACQAIAFAHAIIAEAFIAGAKIAHAPIAAAAQAbAYgGg0IgDgaIgBgTIABgWQADgcAMggIACgEQAeg4BcgKIANgBQCfAIBBgvQBCBagEBhQgBARgDARIAAAAIgBABIABAAIAEgGIABgCIABgBIABgBIAAAAIADgDQAGgEAFgCIABAAIAKAAIACABIAAAAQANADAEAMIABABIAAAEIgBAHQgBAEgCAEIgEAGIgGAHIgDADQgPAPgCAdIAAAUIAAADIgBACQAAAFgCADIgBABQgCAEgEACQgEACgFABQgHACgJgDIgBAAIAAAAIABAAIAAAXQAAAPgIAOIgCAEIgFAIQglA0hLA9IgCABIgFAAIACADIgDACQgHALgSACIgFAAgADcBAIAAAJIAAgJIAAgCIAAgCIAAgCQAAgRADgVIACgCIgCAAIAAACIgBAAIAAABIABgBQgDAVAAARIAAACIAAACIAAACgAjsAaQgEgIAAgHQAAgJAHgDIALAQIAEAJIgCgGIgGgNIAAABIgCgEIgBgBIgCgBIgBgCIgEgEIgBgBIAEAGQgHADAAAJQAAAHAEAIgADiAUIAAAAIgBgCgADgAQIAAAAIgBACIABgCIAAAAQAEgbAJgjQgJAjgEAbgADfARIAAgBIAAAAgAD0APIABgHQAAgIgDgCQgBgDgDgCIABgBIAKgLIAGgFQAIgGAHgBQgHABgIAGIgGAFIgKALIgBABQADACABADQADACAAAIIgBAHgAj2gOQAFADAEAEQgEgEgFgDIgBAAQgGgDgIAAIAAAAIAAAAIgBAAIgBAAIABAAIABAAIAAAAIAAAAQAIAAAGADIABAAgAAWiJIAAABIgBAAIACAAIgBAAIABgBIgBAAgAhNiXIACAAIAAgCIgCACgADdBJg");
	this.shape_6.setTransform(-0.2,11.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#151515").s().p("AjYDxIAAgBIAAAAIgHgPIgGgKIgEgFQgHgIgIgFIgGgCIAAAAIgCAAIgHABQgohlARhzIACgOIAGgYIAIgUQAHgQAIgOIAVggQBfh8DQATIACAAQB8AMAKBiIADAAQAzgDAaBZIAAAAQASBIgdA/QgMAkgEA4IgBAAQgFACgGAEIgDADIAAAAIgCABIAAABIgBACIgEAFQADgRABgRQAEhhhChYQhBAtifgIIgNABQhcALgeA3IgCAEQgLAggEAcIgBAWIABATIADAaQAEAlgLAAQgFAAgJgIg");
	this.shape_7.setTransform(0,-12.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E3C19F").s().p("AgGAgIACAAIgCACIAAgCgAAHggIAAgBIAAABg");
	this.shape_8.setTransform(22.9,10.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC488").s().p("ABUCZIAFAAIgDACgADZgXIAAAAIAAAAgADdhOIACACIAAAAgADbhRIABAAIgBABgAjshkIAAAAIABACIADADIAAABIACADIAFAJIgLgSgAjwhpIAAAAIAEAFIAAAAIgEgFgAjshkIAAAAgAjahmIABAAIAAABIgBgBgADwiZIABgBIgBABIAAAAg");
	this.shape_9.setTransform(0.1,21.7);

	this.addChild(this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30.2,-38.6,60.5,78.4);


(lib.tree_Iceland = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#845744").s().p("AGCCNQmAhnnSgmIC9iCQAKgLAOgIQA0gcBuAgIGbCJQAfAIAtA8QAfAoAkA/IhPgWg");
	this.shape.setTransform(197.9,-24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DBBA91").s().p("AGZBZIs5hgQhsAGAggtIA/grQHSAnGABmIBPAWQgDAQg3AAIghgBg");
	this.shape_1.setTransform(194.4,-15.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#017D3F").s().p("AgBAAIADAAIgBABg");
	this.shape_2.setTransform(1.1,-87.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#708A33").s().p("AhQGZQheA2gvg7Qg6AXgzgSQgsgOgbgpQhbABgWgqQgRgiAhg+Qg3hSBKgzQgli4C+AqQA/hZA0BiQAUAJAKgGQAMgGgTgXQg0hqBjgPQgXgtAWgtQAXguAkAVQAGhaArgkIAEABQgXBEAeApQg7AlATBPQgnAPgIApQgHAlAbAkQgkAeAIAqQgcgBgKASQhEgfg5AXQg3AUgSBAQhUBoB9A7QARBOBbgjQBHA5A/hJQA8BnBghrQBHBiBqhjQBGBJBAhJQBDgJAKhOQAPAQgDAgQA7ApgiA3QgkA4hTgMQhYA8iHgRQg8AngtgnQgxAagiAAQglAAgXgdg");
	this.shape_3.setTransform(4.4,-44);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9DAE50").s().p("AhxFlQg/BJhHg5QhbAjgRhOQh9g7BUhoQAShAA3gWQA5gXBEAhQAKgUAcABQgIgqAkgeQgbgiAHglQAIgpAngPQgThPA7glQgegpAXhEIABgEQAogfAsAiQAKgvAggGQAbgEAZAZIAMAMQA1g0AoAnQArAogTBrQAqAGATAfQARAegKAmQAsAOAJAoQAJAqgfAqQAmBKg5BMQBlgEgNBmQARACAKALQgKBOhDAJQhABJhGhJQhqBjhHhiQgwA2goAAQgmAAgegyg");
	this.shape_4.setTransform(8.6,-52.4);

	this.instance = new lib.CoconutTree();
	this.instance.setTransform(-9.6,-42.9,1.232,1.232);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F6B25").s().p("AgRDNQhDgDgUgVQgiABACgfQg0gfAjggQghg4A7gGQAGgtAoAhQAqgWAHAhQAfgYASAdIATgEQgTgPAGgeQgugXAbgvQgkgKAbggQgjgiArgOQgchIBOAeQAQgfAaAmQgxAIALAnQgUARAJAmQgHAmAgAGQAIAnAhAAQgHAuA7gCIAEATQgngIgKAbQg8gIgLArQhAABATA7QgWAeAjA6QgTgMgOgTg");
	this.shape_5.setTransform(31.1,-38.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#91A439").s().p("AgUE7QhUAfgignQhOAggkgoQgwANgpgNQgMgDgJgGQglg5AXgfQgVg6BDgBQAKgsA9AIQAJgaAoAHIgFgSQg6ABAHgvQghgBgJgkQgggGAHgnQgJglAUgRQgLgoAxgIIAGALQAWgYAUAoQARAQAIgLQAIgKgFgWQgXgKARgfQADgLgIgHQgNgRAKgQQAJgQAXgCQgGgbAPgKQAPgJAVARQAdgqAbAkQARgfASAKQATAKgEApQAUgNAMANQALAMgHAZQAcgFAEAQQAEAQgQAUQAAAUgRACQATAng0AUQAKAKgFALQAOgNAOARQAqgyAVA1QAsgRABAzQAigHgCAsQATADADAPQAEAOgNASQATANgJAWQALgQAQAIQANgqAgAOQATgfARABQAQADAEAkQAZgJANALQANAKgHAYQAQAEADAMQADAOgLAKQBEAUgxAyQANAnglgNQAcAagZAdQgeAjhEgLQhJAlhugQQgWALgUAAQgVAAgUgPg");
	this.shape_6.setTransform(69.2,-44.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#708A33").s().p("AAVgEIAAACIgpAHg");
	this.shape_7.setTransform(-60.8,-157.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#845744").s().p("AwEGBIFQrTQAKgrATgiQBOh7DzA0IOmD5QBDANCRC5QBhB4CBDFQAKBJivAbI6rBmQg/AXgqAAQhfAAAOh2g");
	this.shape_8.setTransform(47,-64.2);

	this.instance_1 = new lib.coconutTree1();
	this.instance_1.setTransform(-25.1,-33.6,1.232,1.232,-33.9);

	this.addChild(this.instance_1,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.instance,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-198.4,-312.4,442.9,318.8);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F204B").s().p("A1hGJIAAsRMApGAAAQB+AAgBB9IAAIXQABB9h+AAg");
	this.shape.setTransform(-110.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F204B").s().p("AsjGJIjLAAIgmAAQh9AAAAh9IAAoXQAAh9B9AAIAmAAIDLAAIe1AAIAAMRg");
	this.shape_1.setTransform(-368.2,0);

	this.ikNode_1 = new lib.Symbol2();
	this.ikNode_1.setTransform(128.8,1,1.25,1.25,0,0,0,512.6,21.8);

	this.addChild(this.ikNode_1,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-512,-39.3,1024,78.8);


(lib.rs2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GO_shoescopy("single",0);
	this.instance.setTransform(0.1,4.3,1,1,0,0,0,27.1,21.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,-24.6,54.1,49.3);


(lib.mc_backFand = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(168,168,168,0.447)").s().p("AhwBwQgvguAAhCQAAhBAvgvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAuQguAwhCAAQhBAAgvgwg");
	this.shape.setTransform(16,16);

	// Layer 1
	this.instance = new lib.mc_fan01d("synched",0);
	this.instance.setTransform(16,16,1,1,0,0,0,15.8,15.8);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,33.5,33.6);


(lib.mc_backFancopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(168,168,168,0.447)").s().p("AhwBwQgvguAAhCQAAhBAvgvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAuQguAwhCAAQhBAAgvgwg");
	this.shape.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer 1
	this.instance = new lib.mc_fan01copy("synched",0);
	this.instance.setTransform(16,16,1,1,0,0,0,15.8,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:15.7,rotation:-44.2,y:15.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,33.5,33.6);


(lib.mc_backFan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(168,168,168,0.447)").s().p("AhwBwQgvguAAhCQAAhBAvgvQAvgvBBAAQBCAAAuAvQAwAvAABBQAABCgwAuQguAwhCAAQhBAAgvgwg");
	this.shape.setTransform(16,16);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// Layer 1
	this.instance = new lib.mc_fan01("synched",0);
	this.instance.setTransform(16,16,1,1,0,0,0,15.8,15.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regY:15.7,rotation:-12,y:15.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-0.8,33.5,33.6);


(lib.ls1copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GO_shoescopy("single",0);
	this.instance.setTransform(-0.1,4.2,1,1,0,0,0,26.9,21.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,-24.6,54.1,49.3);


(lib.ls1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.GO_shoes("single",0);
	this.instance.setTransform(-0.1,4.2,1,1,0,0,0,26.9,21.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-27,-24.6,54.1,49.3);


(lib.GO_eyes_copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// GO_Brow
	this.instance = new lib.GO_Browcopy("single",0);
	this.instance.setTransform(24.6,2.8,0.769,0.769,0,0,0,32,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({startPosition:0},0).to({y:4.3},2).to({y:2.8},2).wait(155));

	// lid
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADaAeQgKgagggLQgigNgmAFQgJAAgKADQgGANACARQAAAGACAGIgIgEQgDgPADgLIAGgPQAdgQAjAGQAiAFAYAUQASAQAAAYIgDgKgAhFAPQAEgRgGgQQgJgGgKAAQgngJgmAMQgkALgNAaIgEALQACgbAWgOQAbgWAlgCQAlgEAeAUIADASQAEAMgHAQIgIAEQADgGABgHg");
	this.shape.setTransform(22.6,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhCgGQg9gMhJASIgHAAABWgBQBEgHA2AT");
	this.shape_1.setTransform(22.3,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E590B").s().p("ABQAKIgGgBIACgFIACgEQAegPAiAGQAiAFAYAUIAEADIAKAEIgHgBQgJgBAEAEQg2gVhEAGgAjVANQAGgIAIgFIACAAQAagVAkgCQAlgEAeAUIABAHQALAEgJABIgGAAQg+gJhJARg");
	this.shape_2.setTransform(22.9,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ADaAPQgEgLgJgIQgEgEAIABQAMAMAAAUIgDgKgABLALQgDgNADgMIACgFIAGABQgEALACAKQAAAGACAGgAhFAAQACgLgCgMIAHgBIAAAFQAEAOgHAOIgIAEQADgGABgHgAjSgQIAHABQgIAIgFAIIgEALQABgPAJgNg");
	this.shape_3.setTransform(22.6,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AjbgKIACACQA7AUBUgKABSAEQBSANA4gN");
	this.shape_4.setTransform(22.7,14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("ADUACIgGAAQg+AGg+gIAjTgDIAFAAQBFAIBGgH");
	this.shape_5.setTransform(22.5,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABHAYQgEgPAEgLIAFgQIACgBIgCAYIAAAKQAAAHADAGgAhKAMIACgLIAAgcIADACIADATQADAMgGAPIgJAFQAEgHAAgHg");
	this.shape_6.setTransform(23,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8E590B").s().p("ABSAgQgCgGAAgHIAAgKIABgYQAdgOAiAGQAiAFAYAUQAFAEADAFQAHAJADAMIAAAAQgbAGgiAAQgjAAgqgGgACYANQAWAAAXgCIADAAIAEAAIAGAAIgGAAIgEAAIgDAAQgXACgWAAIgBAAIAAAAQgeAAgegDIgBAAIgKgBIAKABIABAAQAeADAeAAIAAAAIABAAgAjZASIgCgCQACgHAEgGQAFgIALgIQAbgWAlgCQAhgEAcARIADgBIAAACIAAAcIgDAAIgBAAQgeAEgeAAIAAAAIAAAAQgfAAgfgEIgHgBIAAAAIAAAAIgGgBIgFAAIAFAAIAGABIAAAAIAAAAIAHABQAfAEAfAAIAAAAIAAAAQAeAAAegEIABAAIADAAIgBALQgBAHgDAHQgbADgYAAQg0AAgogPgAhFAFIAAAAg");
	this.shape_7.setTransform(22.7,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape}]},1).wait(155));

	// GO_pupils
	this.instance_1 = new lib.GO_pupilscopy("single",0);
	this.instance_1.setTransform(21.8,11.3,0.769,0.769,0,0,0,21.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(163));

	// eyes
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABTAaQgDgGAAgGQgBgPAFgPQAKgDAJAAQAmgFAiANQAgALALAaIgFACQgbAFgfAAQgiAAgmgHgAjTAPIgBgBIgFgCQANgaAlgLQAlgMAnAJQAKAAAKAGQAFAQgEARQgBAHgDAGQgXADgWAAQgxAAgrgMg");
	this.shape_8.setTransform(22.7,11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ACJAKQgggCgXgIQBIAMA7gLIgKADQgcAHgZAAIgNgBgAjLgHIgJgDQA+APBLgGQgaAFghAAQghAAgkgLg");
	this.shape_9.setTransform(22.7,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(163));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.3,16);


(lib.GO_eyes_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// GO_Brow
	this.instance = new lib.GO_Brow("single",0);
	this.instance.setTransform(24.6,2.8,0.769,0.769,0,0,0,32,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({startPosition:0},0).to({y:4.3},2).to({y:2.8},2).wait(155));

	// lid
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ADaAeQgKgagggLQgigNgmAFQgJAAgKADQgGANACARQAAAGACAGIgIgEQgDgPADgLIAGgPQAdgQAjAGQAiAFAYAUQASAQAAAYIgDgKgAhFAPQAEgRgGgQQgJgGgKAAQgngJgmAMQgkALgNAaIgEALQACgbAWgOQAbgWAlgCQAlgEAeAUIADASQAEAMgHAQIgIAEQADgGABgHg");
	this.shape.setTransform(22.6,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhCgGQg9gMhJASIgHAAABWgBQBEgHA2AT");
	this.shape_1.setTransform(22.3,11.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8E590B").s().p("ABQAKIgGgBIACgFIACgEQAegPAiAGQAiAFAYAUIAEADIAKAEIgHgBQgJgBAEAEQg2gVhEAGgAjVANQAGgIAIgFIACAAQAagVAkgCQAlgEAeAUIABAHQALAEgJABIgGAAQg+gJhJARg");
	this.shape_2.setTransform(22.9,9.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("ADaAPQgEgLgJgIQgEgEAIABQAMAMAAAUIgDgKgABLALQgDgNADgMIACgFIAGABQgEALACAKQAAAGACAGgAhFAAQACgLgCgMIAHgBIAAAFQAEAOgHAOIgIAEQADgGABgHgAjSgQIAHABQgIAIgFAIIgEALQABgPAJgNg");
	this.shape_3.setTransform(22.6,12.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.1,1,1).p("AjbgKIACACQA7AUBUgKABSAEQBSANA4gN");
	this.shape_4.setTransform(22.7,14);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("ADUACIgGAAQg+AGg+gIAjTgDIAFAAQBFAIBGgH");
	this.shape_5.setTransform(22.5,12);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("ABHAYQgEgPAEgLIAFgQIACgBIgCAYIAAAKQAAAHADAGgAhKAMIACgLIAAgcIADACIADATQADAMgGAPIgJAFQAEgHAAgHg");
	this.shape_6.setTransform(23,11.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8E590B").s().p("ABSAgQgCgGAAgHIAAgKIAKABIABAAQAeADAeAAIAAAAIABAAQAWAAAXgCIADAAIAEAAIAGAAQAHAJADAMIAAAAQgbAGgiAAQgjAAgqgGgAjZASIgCgCQACgHAEgGQAFgIALgIQAbgWAlgCQAhgEAcARIADgBIAAACIAAAcIgDAAIgBAAQgeAEgeAAIAAAAIAAAAQgfAAgfgEIgHgBIAAAAIAAAAIgGgBIgFAAIAFAAIAGABIAAAAIAAAAIAHABQAfAEAfAAIAAAAIAAAAQAeAAAegEIABAAIADAAIgBALQgBAHgDAHQgbADgYAAQg0AAgogPgACXANQgeAAgegDIgBAAIgKgBIABgYQAdgOAiAGQAiAFAYAUQAFAEADAFIgGAAIgEAAIgDAAQgXACgWAAIgBAAIAAAAgADSALgAhFAFIAAAAg");
	this.shape_7.setTransform(22.7,11.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},4).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape}]},1).wait(155));

	// GO_pupils
	this.instance_1 = new lib.GO_pupils("single",0);
	this.instance_1.setTransform(21.8,11.3,0.769,0.769,0,0,0,21.3,4.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(163));

	// eyes
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABTAaQgDgGAAgGQgBgPAFgPQAKgDAJAAQAmgFAiANQAgALALAaIgFACQgbAFgfAAQgiAAgmgHgAjTAPIgBgBIgFgCQANgaAlgLQAlgMAnAJQAKAAAKAGQAFAQgEARQgBAHgDAGQgXADgWAAQgxAAgrgMg");
	this.shape_8.setTransform(22.7,11.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("ACJAKQgggCgXgIQBIAMA7gLIgKADQgcAHgZAAIgNgBgAjLgHIgJgDQA+APBLgGQgaAFghAAQghAAgkgLg");
	this.shape_9.setTransform(22.7,14.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).wait(163));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.3,16);


(lib.go_eyes = function() {
	this.initialize();

	// eye
	this.instance = new lib.GO_eyes_();
	this.instance.setTransform(28.8,10.1,1,1,0,0,0,28.8,10.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,49.3,15.6);


(lib.fancopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A9B2AD").s().p("AgKgHIAYAGQgRABgKAIg");
	this.shape.setTransform(81.8,14.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#383838").s().p("AgbAHIAAgCIABgEQALgGAQgDIAGABIAAABIAVAEQgJAGgQADIAAAAIgNACIgRgCg");
	this.shape_1.setTransform(83.1,15.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgCAIIAAABIgfgHIABgFQASADAOgDIAAAAQAOgDAJgIIALACIgGAbg");
	this.shape_2.setTransform(83.5,16.3);

	this.instance = new lib.patch();
	this.instance.setTransform(82.9,15.6);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Layer 2
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8A0000").s().p("AAAAFQgFgBABgEQABgFADABIABAAQAFABgBADQgBAFgEAAIAAAAg");
	this.shape_3.setTransform(15.4,3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#840701").s().p("AjDgbIADgNICYAbQgGAAgBAFQgBAGAGABQAFABABgGQACgFgGgCIDsApIgCANg");
	this.shape_4.setTransform(19.7,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#808080").s().p("AjZgdIADgNIGwBIIAAANg");
	this.shape_5.setTransform(60.9,11.4);

	this.instance_1 = new lib.wings();
	this.instance_1.setTransform(83,15.7);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},1).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#808080").s().p("AjgglIAAgMIHBBVIgDAOg");
	this.shape_6.setTransform(104.8,19.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#961004").s().p("AjBgaIADgOIGABDIgDAPg");
	this.shape_7.setTransform(146.5,27.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6}]}).to({state:[]},1).to({state:[{t:this.shape_7},{t:this.shape_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,166,31.4);


(lib.dfsdSymbol37copy4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol6copy5("synched",0);
	this.instance.setTransform(41.5,41.8,1.697,1.697,-75.5,0,0,6.1,4);
	this.instance.alpha = 0.211;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AhVlAIAAABQAeArA7AuQA/AxAoAaIAHAFQAPASAtA8QAzBLAyAlQgCAJAAABQgEALgKACQgIAAgMgCQgZgFgOgJQgYgOglgmQgngngQgLQgagPgKACQACBZAUA3QAWA/ANAVQAKAIASANQAoAiAEADQANAOADASQgBAJAAAFQgIAKgIgEQgDgBgBgBQgHgCABAAQgWgNgnggQgUgPgMgKQgFgGgFgDQgGgGgLgLQgJgMgHgJQgFgIgJgMQgbgsgRgXIgKgNAitB+QAAARAGAdQAEAdAKAKQAiAYAWAnQATAggGAMQgDADgIAAQgkgagagSQg5gogQgVQgCgJgCgMQgKglgHg0QgNhDADgQQALhigTg/IgFgqAjDBxQAKAGADAAQADACAGAFABuEjIgBAAQghgTgjgWQgpgYgNgQIgjgtIgBgCQgxg7gYgXACsEMQAIAUgEAMQgDAEgFABQgOABgRgEQAAABgBgBQgJgBgEgDQgEgBgCgDIgCAAQgCAAgBgCIgCgBQAJAWgPABQgLACgFgBQgFgCgEgCQgQgFgggNQgegKgJgEQgGgCgCgCQgMgGgHgGQgMgEgJgNIgMgLQgWgXgQgUQgsgugXgU");
	this.shape.setTransform(26.3,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC488").s().p("AB5E2IAAgBIAAABQgKgBgEgDQgDgBgDgDIgBAAIgGgDIAAAAIhFgpQgogYgNgQIgkgtIgBgCQgxg7gXgXQAXAXAxA7IAAABIgSgMQgOgLgJAAQgJgGgDAAQgCgEgDAAQgDAAgehCIgPgfQgMgaAAgIQAAgagLglIgQgsIgQg3QgDgKgdghICEhpIAagKIAAABQAeArA8AuQA9AxAoAaIAHAFQAQASAsA8QA0BLAxAlIgCAKQgEALgJACQgJAAgMgCQgYgFgOgJQgYgOgmgoQgnglgPgLQgbgPgKACQADBZAUA3QAWA/ANAVIAbAVIAsAlQAOAOACASIgBAOQgHAKgJgEIgEgCIgGgCIAAAAQgVgNgnggIgggZQgFgGgGgDIgQgRIgQgVIgOgUIgthDIgKgNIAKANIAtBDIAOAUIAQAVIAQARQAGADAFAGIAgAZQAnAgAVANIAAAAIAGACQAJAUgFAMQgCAEgGABIgFAAQgMAAgOgDgAhBCrIAAAAg");
	this.shape_1.setTransform(27.9,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("ABdBEIAAAAIAAAAIAAABIAAgBgAhchDIAAgBIABABIgBAAg");
	this.shape_2.setTransform(30.6,55.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBA75").s().p("AhMEVQg5gogQgVIgEgVQgKglgHg0QgNhDADgQQALhigTg/IgFgqIAfgZQAeAhADAKIAQA3IAPAsQALAlAAAaQAAAIAMAaIAQAfQAeBCACAAQADAAADAEQADAAAIAGQAJAAAMALIATAMIABABIAjAtQANAQArAYIBEApIABAAQAIAWgPABQgLACgFgBIgJgEIgvgSIgpgOIgIgEIgUgMQgLgEgJgNIgMgLQgUgXgQgUQgsgugXgUQAAARAGAdQAEAdAKAKQAiAYAWAnQARAggEAMQgDADgIAAIg+gsgAhlB3IAJAHIgJgHIgNgGIANAGgAgElAIAAAAIAAABg");
	this.shape_3.setTransform(18.2,32.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.2,-1,57.1,66.4);


(lib.dfsdSymbol37copy3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol6copy4("synched",0);
	this.instance.setTransform(41.5,41.8,1.697,1.697,-75.5,0,0,6.1,4);
	this.instance.alpha = 0.211;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AhVlAIAAABQAeArA7AuQA/AxAoAaIAHAFQAPASAtA8QAzBLAyAlQgCAJAAABQgEALgKACQgIAAgMgCQgZgFgOgJQgYgOglgmQgngngQgLQgagPgKACQACBZAUA3QAWA/ANAVQAKAIASANQAoAiAEADQANAOADASQgBAJAAAFQgIAKgIgEQgDgBgBgBQgHgCABAAQgWgNgnggQgUgPgMgKQgFgGgFgDQgGgGgLgLQgJgMgHgJQgFgIgJgMQgbgsgRgXIgKgNAitB+QAAARAGAdQAEAdAKAKQAiAYAWAnQATAggGAMQgDADgIAAQgkgagagSQg5gogQgVQgCgJgCgMQgKglgHg0QgNhDADgQQALhigTg/IgFgqAjDBxQAKAGADAAQADACAGAFABuEjIgBAAQghgTgjgWQgpgYgNgQIgjgtIgBgCQgxg7gYgXACsEMQAIAUgEAMQgDAEgFABQgOABgRgEQAAABgBgBQgJgBgEgDQgEgBgCgDIgCAAQgCAAgBgCIgCgBQAJAWgPABQgLACgFgBQgFgCgEgCQgQgFgggNQgegKgJgEQgGgCgCgCQgMgGgHgGQgMgEgJgNIgMgLQgWgXgQgUQgsgugXgU");
	this.shape.setTransform(26.3,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC488").s().p("AB5E2IAAgBIAAABQgKgBgEgDQgDgBgDgDIgBAAIgGgDIAAAAIhFgpQgogYgNgQIgkgtIgBgCQgxg7gXgXQAXAXAxA7IAAABIgSgMQgOgLgJAAQgJgGgDAAQgCgEgDAAQgDAAgehCIgPgfQgMgaAAgIQAAgagLglIgQgsIgQg3QgDgKgdghICEhpIAagKIAAABQAeArA8AuQA9AxAoAaIAHAFQAQASAsA8QA0BLAxAlIgCAKQgEALgJACQgJAAgMgCQgYgFgOgJQgYgOgmgoQgnglgPgLQgbgPgKACQADBZAUA3QAWA/ANAVIAbAVIAsAlQAOAOACASIgBAOQgHAKgJgEIgEgCIgGgCIAAAAQgVgNgnggIgggZQgFgGgGgDIgQgRIgQgVIgOgUIgthDIgKgNIAKANIAtBDIAOAUIAQAVIAQARQAGADAFAGIAgAZQAnAgAVANIAAAAIAGACQAJAUgFAMQgCAEgGABIgFAAQgMAAgOgDgAhBCrIAAAAg");
	this.shape_1.setTransform(27.9,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("ABdBEIAAAAIAAAAIAAABIAAgBgAhchDIAAgBIABABIgBAAg");
	this.shape_2.setTransform(30.6,55.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBA75").s().p("AhMEVQg5gogQgVIgEgVQgKglgHg0QgNhDADgQQALhigTg/IgFgqIAfgZQAeAhADAKIAQA3IAPAsQALAlAAAaQAAAIAMAaIAQAfQAeBCACAAQADAAADAEQADAAAIAGQAJAAAMALIATAMIABABIAjAtQANAQArAYIBEApIABAAQAIAWgPABQgLACgFgBIgJgEIgvgSIgpgOIgIgEIgUgMQgLgEgJgNIgMgLQgUgXgQgUQgsgugXgUQAAARAGAdQAEAdAKAKQAiAYAWAnQARAggEAMQgDADgIAAIg+gsgAhlB3IAJAHIgJgHIgNgGIANAGgAgElAIAAAAIAAABg");
	this.shape_3.setTransform(18.2,32.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.2,-1,57.1,66.4);


(lib.dfsdSymbol37copy2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol6copy3("synched",0);
	this.instance.setTransform(41.5,41.8,1.697,1.697,-75.5,0,0,6.1,4);
	this.instance.alpha = 0.211;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0.2)").ss(1,1,1).p("AhVlAIAAABQAeArA7AuQA/AxAoAaIAHAFQAPASAtA8QAzBLAyAlQgCAJAAABQgEALgKACQgIAAgMgCQgZgFgOgJQgYgOglgmQgngngQgLQgagPgKACQACBZAUA3QAWA/ANAVQAKAIASANQAoAiAEADQANAOADASQgBAJAAAFQgIAKgIgEQgDgBgBgBQgHgCABAAQgWgNgnggQgUgPgMgKQgFgGgFgDQgGgGgLgLQgJgMgHgJQgFgIgJgMQgbgsgRgXIgKgNAjDBxQAKAGADAAQADACAGAFQAAARAGAdQAEAdAKAKQAiAYAWAnQATAggGAMQgDADgIAAQgkgagagSQg5gogQgVQgCgJgCgMQgKglgHg0QgNhDADgQQALhigTg/IgFgqABuEjIgBAAQghgTgjgWQgpgYgNgQIgjgtIgBgCQgxg7gYgXACsEMQAIAUgEAMQgDAEgFABQgOABgRgEQAAABgBgBQgJgBgEgDQgEgBgCgDIgCAAQgCAAgBgCIgCgBQAJAWgPABQgLACgFgBQgFgCgEgCQgQgFgggNQgegKgJgEQgGgCgCgCQgMgGgHgGQgMgEgJgNIgMgLQgWgXgQgUQgsgugXgU");
	this.shape.setTransform(26.3,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC488").s().p("AB5E2IAAgBIAAABQgKgBgEgDQgDgBgDgDIgBAAIgGgDIAAAAIhFgpQgogYgNgQIgkgtIgBgCQgxg7gXgXQAXAXAxA7IAAABIgSgMQgOgLgJAAQgJgGgDAAQgCgEgDAAQgDAAgehCIgPgfQgMgaAAgIQAAgagLglIgQgsIgQg3QgDgKgdghICEhpIAagKIAAABQAeArA8AuQA9AxAoAaIAHAFQAQASAsA8QA0BLAxAlIgCAKQgEALgJACQgJAAgMgCQgYgFgOgJQgYgOgmgoQgnglgPgLQgbgPgKACQADBZAUA3QAWA/ANAVIAbAVIAsAlQAOAOACASIgBAOQgHAKgJgEIgEgCIgGgCIAAAAQgVgNgnggIgggZQgFgGgGgDIgQgRIgQgVIgOgUIgthDIgKgNIAKANIAtBDIAOAUIAQAVIAQARQAGADAFAGIAgAZQAnAgAVANIAAAAIAGACQAJAUgFAMQgCAEgGABIgFAAQgMAAgOgDg");
	this.shape_1.setTransform(27.9,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("ABdBEIAAAAIAAAAIAAABIAAgBgAhchDIAAgBIABABIgBAAg");
	this.shape_2.setTransform(30.6,55.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBA75").s().p("AhMEVQg5gogQgVIgEgVQgKglgHg0QgNhDADgQQALhigTg/IgFgqIAfgZQAeAhADAKIAQA3IAPAsQALAlAAAaQAAAIAMAaIAQAfQAeBCACAAQADAAADAEQADAAAIAGQAJAAAMALIATAMIABABIAjAtQANAQArAYIBEApIABAAQAIAWgPABQgLACgFgBIgJgEIgvgSIgpgOIgIgEIgUgMQgLgEgJgNIgMgLQgUgXgQgUQgsgugXgUIgJgHIgNgGIANAGIAJAHQAAARAGAdQAEAdAKAKQAiAYAWAnQARAggEAMQgDADgIAAIg+gsgAgElAIAAAAIAAABg");
	this.shape_3.setTransform(18.2,32.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.2,-1,57.1,66.4);


(lib.dfsdSymbol37copy = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Symbol6copy2("synched",0);
	this.instance.setTransform(41.5,41.8,1.697,1.697,-75.5,0,0,6.1,4);
	this.instance.alpha = 0.211;

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AhVlAIAAABQAeArA7AuQA/AxAoAaIAHAFQAPASAtA8QAzBLAyAlQgCAJAAABQgEALgKACQgIAAgMgCQgZgFgOgJQgYgOglgmQgngngQgLQgagPgKACQACBZAUA3QAWA/ANAVQAKAIASANQAoAiAEADQANAOADASQgBAJAAAFQgIAKgIgEQgDgBgBgBQgHgCABAAQgWgNgnggQgUgPgMgKQgFgGgFgDQgGgGgLgLQgJgMgHgJQgFgIgJgMQgbgsgRgXIgKgNAjDBxQAKAGADAAQADACAGAFQAAARAGAdQAEAdAKAKQAiAYAWAnQATAggGAMQgDADgIAAQgkgagagSQg5gogQgVQgCgJgCgMQgKglgHg0QgNhDADgQQALhigTg/IgFgqABuEjIgBAAQghgTgjgWQgpgYgNgQIgjgtIgBgCQgxg7gYgXACsEMQAIAUgEAMQgDAEgFABQgOABgRgEQAAABgBgBQgJgBgEgDQgEgBgCgDIgCAAQgCAAgBgCIgCgBQAJAWgPABQgLACgFgBQgFgCgEgCQgQgFgggNQgegKgJgEQgGgCgCgCQgMgGgHgGQgMgEgJgNIgMgLQgWgXgQgUQgsgugXgU");
	this.shape.setTransform(26.3,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFC488").s().p("AB5E2IAAgBIAAABQgKgBgEgDQgDgBgDgDIgBAAIgGgDIAAAAIhFgpQgogYgNgQIgkgtIgBgCQgxg7gXgXQAXAXAxA7IAAABIgSgMQgOgLgJAAQgJgGgDAAQgCgEgDAAQgDAAgehCIgPgfQgMgaAAgIQAAgagLglIgQgsIgQg3QgDgKgdghICEhpIAagKIAAABQAeArA8AuQA9AxAoAaIAHAFQAQASAsA8QA0BLAxAlIgCAKQgEALgJACQgJAAgMgCQgYgFgOgJQgYgOgmgoQgnglgPgLQgbgPgKACQADBZAUA3QAWA/ANAVIAbAVIAsAlQAOAOACASIgBAOQgHAKgJgEIgEgCQAJAUgFAMQgCAEgGABIgFAAQgMAAgOgDgACcEUIgGgCIAAAAQgVgNgnggIgggZQgFgGgGgDIgQgRIgQgVIgOgUIgthDIgKgNIAKANIAtBDIAOAUIAQAVIAQARQAGADAFAGIAgAZQAnAgAVANIAAAAIAGACgAhBCrIAAAAg");
	this.shape_1.setTransform(27.9,31.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC99").s().p("ABdBEIAAAAIAAAAIAAABIAAgBgAhchDIAAgBIABABIgBAAg");
	this.shape_2.setTransform(30.6,55.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFBA75").s().p("AhMEVQg5gogQgVIgEgVQgKglgHg0QgNhDADgQQALhigTg/IgFgqIAfgZQAeAhADAKIAQA3IAPAsQALAlAAAaQAAAIAMAaIAQAfQAeBCACAAQADAAADAEQADAAAIAGQAJAAAMALIATAMIABABIAjAtQANAQArAYIBEApIABAAQAIAWgPABQgLACgFgBIgJgEIgvgSIgpgOIgIgEIgUgMQgLgEgJgNIgMgLQgUgXgQgUQgsgugXgUIgJgHIgNgGIANAGIAJAHQAAARAGAdQAEAdAKAKQAiAYAWAnQARAggEAMQgDADgIAAIg+gsgAgElAIAAAAIAAABg");
	this.shape_3.setTransform(18.2,32.2);

	this.addChild(this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.2,-1,57.1,66.4);


(lib.dfsdgr_Eye_CH_r_01_02_new_021copy9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(34));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIgBADg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(34));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(34));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(34));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAQQgSgMgFgYQBZAeA6gdQgGAYgRAJQgUAHgcAAQgXAAgegFg");
	this.shape_5.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(34));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilMcopy4("synched",0);
	this.instance.setTransform(1.9,2.7,0.75,1.1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(34));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.7);


(lib.dfsdgr_Eye_CH_r_01_02_new_021copy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(34));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIgBADg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(34));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(34));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(34));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAQQgSgMgFgYQBZAeA6gdQgGAYgRAJQgUAHgcAAQgXAAgegFg");
	this.shape_5.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(34));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilMcopy4("synched",0);
	this.instance.setTransform(1.7,2,0.75,1.1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(34));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.7);


(lib.dfsdgr_Eye_CH_r_01_02_new_021copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(34));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIgBADg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(34));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(34));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(34));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAQQgSgMgFgYQBZAeA6gdQgGAYgRAJQgUAHgcAAQgXAAgegFg");
	this.shape_5.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(34));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilMcopy3("synched",0);
	this.instance.setTransform(1.9,2.7,0.75,1.1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(34));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.7);


(lib.dfsdgr_Eye_CH_r_01_02_new_021copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(34));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIgBADg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(34));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(34));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(34));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAQQgSgMgFgYQBZAeA6gdQgGAYgRAJQgUAHgcAAQgXAAgegFg");
	this.shape_5.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(34));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilMcopy2("synched",0);
	this.instance.setTransform(1.9,2.7,0.75,1.1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(34));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.7);


(lib.dfsdgr_Eye_CH_r_01_02_new_021copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(34));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIgBADg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(34));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(34));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(34));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAQQgSgMgFgYQBZAeA6gdQgGAYgRAJQgUAHgcAAQgXAAgegFg");
	this.shape_5.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(34));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilMcopy2("synched",0);
	this.instance.setTransform(1.7,2,0.75,1.1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(34));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.7);


(lib.dfsdgr_Eye_CH_r_01_02_new_021copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(34));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIgBADg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(34));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(34));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(34));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAQQgSgMgFgYQBZAeA6gdQgGAYgRAJQgUAHgcAAQgXAAgegFg");
	this.shape_5.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(34));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilMcopy("synched",0);
	this.instance.setTransform(1.9,2.7,0.75,1.1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(34));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.7);


(lib.dfsdgr_Eye_CH_r_01_02_new_021copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(34));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIgBADg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(34));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(34));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(34));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAQQgSgMgFgYQBZAeA6gdQgGAYgRAJQgUAHgcAAQgXAAgegFg");
	this.shape_5.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(34));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilMcopy_01_02_new_021("synched",0);
	this.instance.setTransform(1.7,2,0.75,1.1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(34));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.7);


(lib.dfsdgr_Eye_CH_r_01_02_new_021copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(34));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIgBADg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(34));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(34));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(34));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAQQgSgMgFgYQBZAeA6gdQgGAYgRAJQgUAHgcAAQgXAAgegFg");
	this.shape_5.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(34));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilMcopy_01_02_new_021("synched",0);
	this.instance.setTransform(1.9,2.7,0.75,1.1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(34));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.7);


(lib.dfsdgr_Eye_CH_r_01_02_new_021copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(34));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIgBADg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(34));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(34));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(34));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAQQgSgMgFgYQBZAeA6gdQgGAYgRAJQgUAHgcAAQgXAAgegFg");
	this.shape_5.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(34));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilMcopy("synched",0);
	this.instance.setTransform(1.7,2,0.75,1.1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(34));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.7);


(lib.dfsdgr_Eye_CH_L_01_02_new_021copy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(30));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIAAACIgBABg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(30));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(30));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(30));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAPQgSgLgFgYQBZAdA6gdQgGAYgRAKQgHAHgcAAQgYAAgqgGg");
	this.shape_5.setTransform(0,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(30));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilM_01_02_new_021copy3("synched",0);
	this.instance.setTransform(1.4,3,0.75,1.102);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(30));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.8);


(lib.dfsdgr_Eye_CH_L_01_02_new_021copy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(30));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIAAACIgBABg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(30));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(30));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(30));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAPQgSgLgFgYQBZAdA6gdQgGAYgRAKQgHAHgcAAQgYAAgqgGg");
	this.shape_5.setTransform(0,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(30));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilM_01_02_new_021copy3("synched",0);
	this.instance.setTransform(0.8,2,0.75,1.102);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(30));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.8);


(lib.dfsdgr_Eye_CH_L_01_02_new_021copy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(30));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIAAACIgBABg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(30));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(30));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(30));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAPQgSgLgFgYQBZAdA6gdQgGAYgRAKQgHAHgcAAQgYAAgqgGg");
	this.shape_5.setTransform(0,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(30));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilM_01_02_new_021copy2("synched",0);
	this.instance.setTransform(1.4,3,0.75,1.102);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(30));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.8);


(lib.dfsdgr_Eye_CH_L_01_02_new_021copy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(30));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIAAACIgBABg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(30));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(30));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(30));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAPQgSgLgFgYQBZAdA6gdQgGAYgRAKQgHAHgcAAQgYAAgqgGg");
	this.shape_5.setTransform(0,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(30));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilM_01_02_new_021copy2("synched",0);
	this.instance.setTransform(0.8,2,0.75,1.102);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(30));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.8);


(lib.dfsdgr_Eye_CH_L_01_02_new_021copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(30));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIAAACIgBABg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(30));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(30));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(30));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAPQgSgLgFgYQBZAdA6gdQgGAYgRAKQgHAHgcAAQgYAAgqgGg");
	this.shape_5.setTransform(0,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(30));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilM_01_02_new_021copy("synched",0);
	this.instance.setTransform(1.4,3,0.75,1.102);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(30));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.8);


(lib.dfsdgr_Eye_CH_L_01_02_new_021copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(30));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIAAACIgBABg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(30));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(30));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(30));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAPQgSgLgFgYQBZAdA6gdQgGAYgRAKQgHAHgcAAQgYAAgqgGg");
	this.shape_5.setTransform(0,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(30));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilM_01_02_new_021("synched",0);
	this.instance.setTransform(0.8,2,0.75,1.102);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(30));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.8);


(lib.dfsdgr_Eye_CH_L_01_02_new_021copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(30));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIAAACIgBABg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(30));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(30));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(30));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAPQgSgLgFgYQBZAdA6gdQgGAYgRAKQgHAHgcAAQgYAAgqgGg");
	this.shape_5.setTransform(0,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(30));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilM_01_02_new_021("synched",0);
	this.instance.setTransform(1.4,3,0.75,1.102);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(30));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.8);


(lib.dfsdgr_Eye_CH_L_01_02_new_021copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(30));

	// Layer 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_1.setTransform(0.3,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIAAACIgBABg");
	this.shape_2.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1}]}).to({state:[]},1).wait(30));

	// Layer 7
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_3.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).to({_off:true},1).wait(30));

	// Layer 3
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_4.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).to({_off:true},1).wait(30));

	// Layer 8
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FAB774").s().p("AgyAPQgSgLgFgYQBZAdA6gdQgGAYgRAKQgHAHgcAAQgYAAgqgGg");
	this.shape_5.setTransform(0,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).to({_off:true},1).wait(30));

	// gr_eye_pupilM
	this.instance = new lib.dfsdgr_eye_pupilM_01_02_new_021copy("synched",0);
	this.instance.setTransform(0.8,2,0.75,1.102);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(30));

	// Layer 5
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_6.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.8);


(lib.dfsdSymbol37copy_1 = function() {
	this.initialize();

	// Layer 1
	this.instance_1 = new lib.Symbol6copy("synched",0);
	this.instance_1.setTransform(41.5,41.8,1.697,1.697,-75.5,0,0,6.1,4);
	this.instance_1.alpha = 0.211;

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AhVlAIAAABQAeArA7AuQA/AxAoAaIAHAFQAPASAtA8QAzBLAyAlQgCAJAAABQgEALgKACQgIAAgMgCQgZgFgOgJQgYgOglgmQgngngQgLQgagPgKACQACBZAUA3QAWA/ANAVQAKAIASANQAoAiAEADQANAOADASQgBAJAAAFQgIAKgIgEQgDgBgBgBQgHgCABAAQgWgNgnggQgUgPgMgKQgFgGgFgDQgGgGgLgLQgJgMgHgJQgFgIgJgMQgbgsgRgXIgKgNAitB+QAAARAGAdQAEAdAKAKQAiAYAWAnQATAggGAMQgDADgIAAQgkgagagSQg5gogQgVQgCgJgCgMQgKglgHg0QgNhDADgQQALhigTg/IgFgqAjDBxQAKAGADAAQADACAGAFABuEjIgBAAQghgTgjgWQgpgYgNgQIgjgtIgBgCQgxg7gYgXACsEMQAIAUgEAMQgDAEgFABQgOABgRgEQAAABgBgBQgJgBgEgDQgEgBgCgDIgCAAQgCAAgBgCIgCgBQAJAWgPABQgLACgFgBQgFgCgEgCQgQgFgggNQgegKgJgEQgGgCgCgCQgMgGgHgGQgMgEgJgNIgMgLQgWgXgQgUQgsgugXgU");
	this.shape_4.setTransform(26.3,32.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC488").s().p("AB5E2IAAgBIAAABQgKgBgEgDQgDgBgDgDIgBAAIgGgDIAAAAIhFgpQgogYgNgQIgkgtIgBgCQgxg7gXgXQAXAXAxA7IAAABIgSgMQgOgLgJAAQgJgGgDAAQgCgEgDAAQgDAAgehCIgPgfQgMgaAAgIQAAgagLglIgQgsIgQg3QgDgKgdghICEhpIAagKIAAABQAeArA8AuQA9AxAoAaIAHAFQAQASAsA8QA0BLAxAlIgCAKQgEALgJACQgJAAgMgCQgYgFgOgJQgYgOgmgoQgnglgPgLQgbgPgKACQADBZAUA3QAWA/ANAVIAbAVIAsAlQAOAOACASIgBAOQgHAKgJgEIgEgCIgGgCIAAAAQgVgNgnggIgggZQgFgGgGgDIgQgRIgQgVIgOgUIgthDIgKgNIAKANIAtBDIAOAUIAQAVIAQARQAGADAFAGIAgAZQAnAgAVANIAAAAIAGACQAJAUgFAMQgCAEgGABIgFAAQgMAAgOgDgAhBCrIAAAAg");
	this.shape_5.setTransform(27.9,31.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC99").s().p("ABdBEIAAAAIAAAAIAAABIAAgBgAhchDIAAgBIABABIgBAAg");
	this.shape_6.setTransform(30.6,55.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFBA75").s().p("AhMEVQg5gogQgVIgEgVQgKglgHg0QgNhDADgQQALhigTg/IgFgqIAfgZQAeAhADAKIAQA3IAPAsQALAlAAAaQAAAIAMAaIAQAfQAeBCACAAQADAAADAEQADAAAIAGQAJAAAMALIATAMIABABIAjAtQANAQArAYIBEApIABAAQAIAWgPABQgLACgFgBIgJgEIgvgSIgpgOIgIgEIgUgMQgLgEgJgNIgMgLQgUgXgQgUQgsgugXgUQAAARAGAdQAEAdAKAKQAiAYAWAnQARAggEAMQgDADgIAAIg+gsgAhlB3IAJAHIgJgHIgNgGIANAGgAgElAIAAAAIAAABg");
	this.shape_7.setTransform(18.2,32.2);

	this.addChild(this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.instance_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.2,-1,57.1,66.4);


(lib.dfsdgr_Eye_CH_r_01_02_new_021copy3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape_7.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).to({_off:true},1).wait(34));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_8.setTransform(0.3,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIgBADg");
	this.shape_9.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[]},1).wait(34));

	// Layer 7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_10.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).to({_off:true},1).wait(34));

	// Layer 3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_11.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},1).wait(34));

	// Layer 8
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FAB774").s().p("AgyAQQgSgMgFgYQBZAeA6gdQgGAYgRAJQgUAHgcAAQgXAAgegFg");
	this.shape_12.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).to({_off:true},1).wait(34));

	// gr_eye_pupilM
	this.instance_1 = new lib.dfsdgr_eye_pupilMcopy_01_02_new_021_1("synched",0);
	this.instance_1.setTransform(1.7,2,0.75,1.1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(34));

	// Layer 5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_13.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.7);


(lib.dfsdgr_Eye_CH_r_01_02_new_021copy2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape_7.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).to({_off:true},1).wait(34));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_8.setTransform(0.3,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIgBADg");
	this.shape_9.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[]},1).wait(34));

	// Layer 7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_10.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).to({_off:true},1).wait(34));

	// Layer 3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_11.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},1).wait(34));

	// Layer 8
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FAB774").s().p("AgyAQQgSgMgFgYQBZAeA6gdQgGAYgRAJQgUAHgcAAQgXAAgegFg");
	this.shape_12.setTransform(0,5);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).to({_off:true},1).wait(34));

	// gr_eye_pupilM
	this.instance_1 = new lib.dfsdgr_eye_pupilMcopy_01_02_new_021_1("synched",0);
	this.instance_1.setTransform(1.9,2.7,0.75,1.1,0,0,0,-0.1,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(34));

	// Layer 5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_13.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},1).wait(34));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.7);


(lib.dfsdgr_Eye_CH_L_01_02_new_021copy3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape_7.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).to({_off:true},1).wait(30));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_8.setTransform(0.3,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIAAACIgBABg");
	this.shape_9.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[]},1).wait(30));

	// Layer 7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_10.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).to({_off:true},1).wait(30));

	// Layer 3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_11.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},1).wait(30));

	// Layer 8
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FAB774").s().p("AgyAPQgSgLgFgYQBZAdA6gdQgGAYgRAKQgHAHgcAAQgYAAgqgGg");
	this.shape_12.setTransform(0,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).to({_off:true},1).wait(30));

	// gr_eye_pupilM
	this.instance_1 = new lib.dfsdgr_eye_pupilM_01_02_new_021_1("synched",0);
	this.instance_1.setTransform(0.8,2,0.75,1.102);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(30));

	// Layer 5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_13.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.8);


(lib.dfsdgr_Eye_CH_L_01_02_new_021copy2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 6
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#DB8733").ss(1,1,1).p("ABMALIgWgTQgmgNgyAEQgYAIgRAc");
	this.shape_7.setTransform(0,-2.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).to({_off:true},1).wait(30));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(0.4,1,1).p("AgPgWQAQgCAtAHQARAQAIAYQgOgXgPgKQgmgHgpAIQgRAJgQAQQAXgbAFgFQAIgEATgCg");
	this.shape_8.setTransform(0.3,0.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AArgKQgngHgoAIQgRAJgQAQIAbggQAJgEASgCQARgCAsAHQASAQAHAYQgOgXgOgKgAhGAPIABgBIAAACIgBABg");
	this.shape_9.setTransform(0.3,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8}]}).to({state:[]},1).wait(30));

	// Layer 7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FAB774").s().p("AAxgMQgtgJgrAKIglAmQAMgbATgTQAwgTAwASQAWAUAEAdg");
	this.shape_10.setTransform(0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_10).to({_off:true},1).wait(30));

	// Layer 3
	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#D4A97F").ss(0.4,1,1).p("ABJgFQgmAehmgZQgJgDAJgG");
	this.shape_11.setTransform(-0.1,3.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_11).to({_off:true},1).wait(30));

	// Layer 8
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FAB774").s().p("AgyAPQgSgLgFgYQBZAdA6gdQgGAYgRAKQgHAHgcAAQgYAAgqgGg");
	this.shape_12.setTransform(0,5.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).to({_off:true},1).wait(30));

	// gr_eye_pupilM
	this.instance_1 = new lib.dfsdgr_eye_pupilM_01_02_new_021_1("synched",0);
	this.instance_1.setTransform(1.4,3,0.75,1.102);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true},1).wait(30));

	// Layer 5
	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEFEFE").s().p("AgIAZQg1gGgJgIQANgTAVgNQAogIAnAHQAOAMAOAVIAAACQgWANgjAAIgWgBg");
	this.shape_13.setTransform(0.3,1.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_13).to({_off:true},1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-5.5,17.2,12.8);


(lib.Button_Set_1 = function() {
	this.initialize();

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A53DuQgIgIAAgMQAAgOAIgJQAJgIAWgCQATgCAGgBIACgJQAAgFgDgCQgEgDgHAAQgHAAgEADQgEADgBAFIgagCQAFgNALgIQAKgHATAAQASAAAJAHQAJAIAAALIgBAJIgFAaQgEASAAAGQAAAHACAIIgZAAIgCgMQgGAHgHADQgIAEgHAAQgNAAgHgIgA5IDIQgUACgGAEQgFADAAAGQAAAFAEADQADADAFAAQAGAAAGgDQAFgDADgEQACgEACgKIABgEIgGACgAoRDrIAiiMIATAAIgiCMgAnJDiQgLgIgEgOIAagDQACAHAFAEQAFADAJAAQAKAAAFgDQADgDAAgEQAAgDgCgCIgIgDQgfgHgJgGQgLgIAAgNQAAgNAKgJQAKgJAVAAQAUABAJAGQAKAHAEAMIgZAFQgBgGgEgDQgFgDgIAAQgKAAgEADQgDACAAADQAAADACACQAEACAUAFQAVAEAIAIQAIAGAAANQAAANgLAJQgLAKgWAAQgUAAgMgIgAo2DoIAAg4QAAgOgDgEQgEgGgHAAQgFABgFADQgFADgCAHQgCAFAAAOIAAAvIgaAAIAAg2QAAgNgBgFQgCgDgDgCQgCgCgFgBQgGABgFADQgFACgCAHQgCAGAAAOIAAAvIgaAAIAAhhIAYAAIAAANQANgQARAAQAKAAAHAFQAGAEAFAHQAGgHAIgEQAHgFAIAAQALABAIAEQAHAFAEAHQACAHAAAOIAAA+gAl0CLQACgLAGgKQAFgKASgQQAOgNADgEQAEgHAAgGQAAgHgEgEQgDgDgHAAQgGAAgEADQgEAFgBAJIgUgDQACgQAJgIQAKgHAPAAQAPgBAKAKQAJAIAAAMQAAAIgDAHQgDAGgFAHQgEAFgKAJIgMALIgEAHIApAAIAAATgAKLAuQgKgNAAgUQAAgXANgNQAMgOAUAAQAVAAANAPQANANgBAdIhAAAQAAAKAGAHQAGAHAJgBQAGABAEgEQAEgDACgHIAaAEQgFAOgLAIQgLAGgQAAQgZAAgMgQgAKhgLQgFAGAAAJIAmAAQAAgKgFgGQgGgFgIAAQgIAAgGAGgAInAxQgMgNAAgYQAAgWAMgNQANgOAWAAQARAAALAIQAKAHAFAQIgZAEQgCgHgEgEQgFgEgHAAQgKAAgFAHQgGAGAAAOQAAARAGAHQAGAIAJgBQAIAAAEgDQAFgFACgKIAZAFQgEARgLAJQgLAJgTgBQgVAAgNgNgAF4A5QgMgHgGgLQgHgMAAgQQAAgLAHgMQAGgNAMgFQALgHAOAAQAWAAAPAPQAOANAAAVQAAAVgPAPQgOAOgVAAQgOAAgMgFgAGAgJQgGAJAAAMQAAAOAGAIQAHAHAKAAQAKAAAHgHQAHgIAAgOQAAgMgHgJQgHgHgKAAQgKAAgHAHgADDA8QgGgCgDgDQgCgFgBgGQgBgEAAgOIAAgoIgMAAIAAgVIAMAAIAAgTIAagPIAAAiIARAAIAAAVIgRAAIAAAlIAAAOQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQABAAABAAQAAAAABAAQADABAHgDIACAUQgJADgLAAQgHAAgFgCgA97A3QgJgIAAgNQAAgJAEgFQAEgHAHgDQAHgEAOgCQASgEAHgBIAAgCQAAgIgEgDQgDgDgLAAQgGAAgEADQgEACgDAHIgXgFQAEgNAKgHQAJgHATAAQARAAAJAEQAIAEAEAHQADAGAAAQIAAAdQAAAMABAHQABAGAEAGIgaAAIgCgHIgBgDQgHAGgHADQgIADgIAAQgPAAgJgHgA9XARQgLADgDACQgFAEAAAFQAAAFAEAFQAEADAGAAQAHABAHgFQAEgEACgFIABgMIAAgFIgQADgA/eAxQgNgNAAgYQAAgWANgNQAMgOAWAAQASAAAKAIQALAHAEAQIgZAEQgBgHgFgEQgEgEgHAAQgKAAgGAHQgGAGAAAOQAAARAGAHQAGAIAKgBQAHAAAFgDQAFgFABgKIAaAFQgEARgLAJQgMAJgSgBQgWAAgMgNgEghJAA8QgGgCgDgDQgCgFgBgGQgBgEAAgOIAAgoIgMAAIAAgSIAAgDIAMAAIAAgTIAagPIAAAiIARAAIAAAVIgRAAIAAAlIAAAOQAAAAABABQAAAAAAABQAAAAABAAQAAABABAAQAAAAABABQAAAAABAAQAAAAABAAQAAAAABAAQADABAHgDIACAUQgJADgLAAQgHAAgFgCgEgkGAAuQgKgNAAgUQAAgXANgNQAMgOAUAAQAVAAANAPQANANgBAdIhAAAQAAAKAGAHQAGAHAJgBQAGABAEgEQAEgDACgHIAaAEQgFAOgLAIQgLAGgQAAQgZAAgMgQgEgjwgALQgFAGAAAJIAmAAQAAgKgFgGQgGgFgIAAQgIAAgGAGgEAluAA8Ig2hVIAABVIgZAAIAAiEIAaAAIA3BYIAAhYIAZAAIAACEgAHXA8IAAhfIAYAAIAAAOQAGgJAFgEQAEgDAHAAQAIAAAJAFIgIAWQgHgEgFAAQgGAAgEADQgDADgCAIQgDAFAAAaIAAAdgAEqA8IAAhKIgPAAIAAgVIAPAAIAAgHQAAgNACgFQADgHAHgDQAHgEALAAQALAAAKADIgDASIgMgBQgGAAgCADQgDACAAAIIAAAGIAUAAIAAAVIgUAAIAABKgAB5A8IAAhKIgOAAIAAgVIAOAAIAAgHQAAgNADgFQACgHAHgDQAHgEALAAQALAAALADIgEASIgMgBQgFAAgDADQgCACAAAIIAAAGIATAAIAAAVIgTAAIAABKgABCA8IAAhfIAaAAIAABfgAgtA8IAAiDIAbAAIAABtIBBAAIAAAWgA8UA8IAAiEIAZAAIAACEgEggZAA8IAAhfIAaAAIAABfgEgihAA8IAAhfIAYAAIAAAOQAGgJAFgEQAFgDAGAAQAJAAAIAFIgIAWQgGgEgGAAQgFAAgEADQgEADgCAIQgCAFAAAaIAAAdgEglYAA8IgwiEIAdAAIAiBhIAhhhIAdAAIgwCEgABCgwIAAgYIAaAAIAAAYgEggZgAwIAAgYIAaAAIAAAYgAoRhqIAiiLIATAAIgiCLgAnJhyQgLgIgEgOIAagEQACAIAFADQAFAEAJAAQAKAAAFgEQADgCAAgFQAAgCgCgCQgCgCgGgCQgfgGgJgGQgLgIAAgOQAAgMAKgKQAKgIAVAAQAUAAAJAHQAKAGAEANIgZAFQgBgHgEgCQgFgEgIAAQgKAAgEAEQgDACAAACQAAAEACACQAEACAUAEQAVAFAIAHQAIAHAAAMQAAANgLAKQgLAKgWgBQgUAAgMgHgAo2htIAAg3QAAgPgDgEQgEgFgHAAQgFAAgFADQgFADgCAHQgCAGAAAOIAAAuIgaAAIAAg1QAAgOgBgEQgCgEgDgCQgCgCgFAAQgGAAgFADQgFADgCAGQgCAHAAANIAAAvIgaAAIAAhhIAYAAIAAAOQANgQARAAQAKAAAHAEQAGAEAFAIQAGgIAIgEQAHgEAIAAQALAAAIAFQAHAEAEAIQACAGAAAOIAAA+gA5mh4IgUhhIAaAAIAHAqIADAXIAHgMIAHgMIAYgpIAcAAIg8Bhg");
	this.shape.setTransform(-228.8,0.4);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOEPIAAodIAdAAIAAIdg");
	this.shape_1.setTransform(-249.6,0.9);

	this.instance = new lib.Symbol4();
	this.instance.setTransform(-319.9,-0.1);

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,24);

	this.addChild(this.instance_1,this.instance,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-524,-51.3,1052,106);


(lib.Bg = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhP/A/IMAAAh+OMCf+AAAMAAAB+Og");
	mask.setTransform(538.5,428.6);

	// Layer 1
	this.instance = new lib.tree_Iceland();
	this.instance.setTransform(471.5,495.6,0.9,0.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(172,243,235,0.576)").s().p("AlIDLQjJgkhWg3QkBijEehMQBYgohMgiQgBgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAQhZgnksghQDCgEDNAyIAEACQBFARBGAXQAVAMAEAMQAEAVg1AUQgsAQhTAPQicA9BoBEQA1AoBMAfQBOAeBlAUIBGALICMAIIFMAUQOFA3i+AXQteAAmQhJg");
	this.shape.setTransform(394,550.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(172,243,235,0.588)").s().p("AgZAmQl+AAkQgOQkQgNgHgcQgHgeEXAOQEXANF+AAQF8AAEbAJIAmABQD3AJAhAJQAjAMk+AJIgiACQkwAHlnAAIgBAAg");
	this.shape_1.setTransform(500.5,590.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("Ag8CNQhfgKgng8QgXAjg8AAQg+ABgEgkQhaAPhNgJQhDgJgmgaQglgYAJgYQAHgcA5gNQA0g7BmAOQBvhcCDByQAugUBRAMQAJgfAlgQQAggQAyAAQBsABApBBQBZgEASAjIAvAAQAugZBKAOQBKANACAlQAvAFATAPQAQAMgNALQgNALgiABQgmABgtgPQhiBUixgsQgXAthtgUQg5AphMAAIgegBg");
	this.shape_2.setTransform(313.5,92.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.286)").s().p("AhmBlQhtAUgXgtQixAshihUQgtAPgmgBQgigBgNgLQgNgLAQgMQATgPAvgFQACglBKgNQBKgOAuAZIAvAAQASgjBZAEQAphBBsgBQAyAAAgAQQAlAQAJAfQBRgMAuAUQCDhyBvBcQBmgOA0A7QA5ANAHAcQAJAYglAYQgmAahDAJQhNAJhagPQgEAkg+gBQg8AAgXgjQgnA8hfAKIgeABQhMAAg5gpg");
	this.shape_3.setTransform(169.5,260.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(255,255,255,0.286)").s().p("Ah+CHQiIAbgdg8QjbA6h5hvIgjALQglAIggAAQgpgBgRgPQgQgRAUgPQAYgTA7gHQABghAngTQAVgJAggIQBcgSA4AhIA7AAQAWguBvAFQAyhXCHgBQA9AAAoAVQAuAWAKAqQBlgSA5AdQCliZCIB6QB+gTA/BPQBHASALAlQAKAhguAgQgvAkhSAKQhhAPhugXQgGAxhNgBQhLAAgbgwQgvBSh7AMQgTACgRAAQhdAAhFg3g");
	this.shape_4.setTransform(971.1,293.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(255,255,255,0.286)").s().p("Ag5A9Qg+AMgNgbQhlAbg3gzIgQAFQgQAEgPAAQgTgBgIgHQgHgHAJgHQALgJAbgCQAAgPASgIQAJgFAQgDQAqgIAaAOIAbAAQAKgVAyADQAXgpA9AAQAcAAASAKQAUAKAGATQAugIAZAMQBMhEA+A3QA6gJAdAkQAgAJAFARQAEANgUAPQgWAQgmAFQgsAHgygKQgDAWgjgBQgiAAgNgVQgVAlg4AGIgRABQgpAAgggag");
	this.shape_5.setTransform(848,222.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ah6AbIgDgCQAAgBAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAQAlguDVgBQgoAGgwANQiZAggCACIgFAAg");
	this.shape_6.setTransform(617.2,844.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjqAHQAxABASgBQBagEAhgPIAFgBIADACICwgCQCwgEiZAPQiYAKiyAGIAAAAIgHABQgXAAglgIg");
	this.shape_7.setTransform(777.4,845.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ai5ANQkWgHCVgFQCWgCAAgBIABgDQAAAAAAAAQABgBAAAAQAAAAABAAQABgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABABQAuAHBrAGQBeAHAkAAQAqAAArgOQAsgSBrAAQABAAAAAAQABAAABAAQAAAAABABQAAAAABABIAAABIAAADIgFABQhnAAgrAPQguARgsAAQgkAAkTgHg");
	this.shape_8.setTransform(213.8,526.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiKAKQiQgKDlAAQDigCgDgCQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQABAAABAAQAAABABAAQAAAAABABIAKAGIAHACQiKANhtAAQgtAAgpgCg");
	this.shape_9.setTransform(55.2,481.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("rgba(255,255,255,0.576)").s().p("AkMAiQgngFg3gWQk5gkE+AdQE8AeCCggQCIgiBeAAQAsAAAoALQAvANBCAfQABABAAAAQABAAAAAAQAAABAAAAQAAAAAAABIgBADIgDABIgEAAQhAgfgWAKQgXAMhJgJQhLgIiTATQiRAShXAAQh4ABgWgEg");
	this.shape_10.setTransform(67.6,722.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("rgba(51,255,255,0.22)").s().p("AlAAfQksgdDRgBIC1gBIgEAAIgBgCIABgCQABgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAbAABkAGQBiAEARAAQC/AACBgUQCOgYATAAIAEABIABACIgBADIgMAFQgLAEj5ApQiXAZioAAQhtAAh1gKg");
	this.shape_11.setTransform(138.1,625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9EE6F2").s().p("AmTAMQjHgPgiAAIgDgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAIDnAFIArACQDlAEC9gUIASgCQBVgKBcAJQKGAjmjgLQmkgJAAABIgBADQgzAhi7AAQgXAAjHgRg");
	this.shape_12.setTransform(378.2,709.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9EE6F2").s().p("AjRgBQgMgiCrAGIBQACIB0ADQAaAAAmAgIgygUQgpAAhcAUQhbAXgjAAQg4AAg2ggg");
	this.shape_13.setTransform(527.6,744.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(51,255,255,0.22)").s().p("ADsAAQgigKhWAAQgVAAh8AKQiAALgTAAQghAAgtgJQgigGgdgJQBCgJCmgLQClgLALgBQCAABAdAEQBGAKAABLQg4glgagIg");
	this.shape_14.setTransform(896.3,450.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("rgba(158,230,242,0.847)").s().p("AgLAUIgEgBQihgKjMgDQjPgDhOgKIgDgCQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAAAgBIAEgCQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAABQBOAMDNACQDMACCogQQCngTDYAQQDYAQAmgHQAlgGACAAIADABIAAAEIgDACQhNAXjfAHQhdAChSAAQhyAAhagFg");
	this.shape_15.setTransform(797.3,694.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("rgba(255,255,255,0.267)").s().p("AiiASQkigHgqgLQgogLgCgCIgBgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIACgBQBsAPE2AAQE0gBFUgOQAAAAABAAQAAAAAAABQABAAAAAAQAAAAABABIABABIgBAEQgBABjNARQiZAOjIAAIiMgCg");
	this.shape_16.setTransform(1023.9,574.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#28CEF5","#94FBFD"],[0,1],970.1,-29.7,969.9,26.8).s().p("AoTBKQjYgdADgtQADgrDaggQDageE2AAQE0AADWAeQDdAggDArQgCAtjhAdQjaAgkxAAQk4AAjWggg");
	this.shape_17.setTransform(713.4,603.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#ACF3EB").s().p("ANgHSQgigHAAgLQAAgKAigIQAigGAyAAQAvAAAiAGQAkAIAAAKQAAALgkAHQgiAHgvAAQgyAAgigHgAgsGNQgYgGAAgMQAAgJAYgIQAZgHAiAAQAjAAAYAHQAaAIAAAJQAAAMgaAGQgYAIgjAAQgiAAgZgIgEgkvAF3QgUgFAAgJQAAgIAUgGQAVgGAeAAQAdAAAVAGQAVAGAAAIQAAAJgVAFQgVAHgdAAQgeAAgVgHgAn2ErQg2gIAAgKQAAgLA2gIQA1gGBNAAQBNAAA2AGQA2AIAAALQAAAKg2AIQg2AIhNAAQhNAAg1gIgA7NEQQgwgGAAgJQAAgJAwgHQAvgGBDAAQBDAAAvAGQAvAHAAAJQAAAJgvAGQgvAHhDAAQhDAAgvgHgAkGASQhRgFAAgIQAAgFBRgGQBNgFBqAAIAPAAQByAABRAFQBSAGAAAFQAAAIhSAFQhRAFhyAAQhzAAhTgFgAE6ALQgegGAAgHQAAgJAegGQAPgEASgBQASgCAVAAQApAAAfAHQAdAGAAAJQAAAHgdAGQgfAHgpAAQgqAAgegHgAMngQIgQAAQjOgRDegRIBHgEQCTgMCagaQETguEtheIBXgcQBzgnB5gsIAYgKQA3gPACARQAEAQg1AXIgTAIQh5AshzAmIgCABIhWAcQn9Cel5ARIgCAAQglACgjAAgEAi7gGGQgEgHARgRQASgPAcgRQAbgQAYgIQAWgFAEAGQAFAHgSAPQgRARgcAQQgcARgYAGQgMAEgHAAQgFAAgCgDg");
	this.shape_18.setTransform(535.4,576.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AMpC4IABAAIFNgxIACAAQGKg8BIgXQoKDCuWAaQFsgxESgngAh8ELQgOgCAAgDQAAgCAOgCQAOgDAUAAQAUAAAOADQAPACAAACQAAADgPACQgOACgUAAQgUAAgOgCgAncEEQg2ggC9ALIABAAQA2ACBLAHQAGAGAAAEQAAAGgEAFgAu5CMQg+g6CMgaQAtgLAAgRQgBgPgogDIgEgBImcgZQCXgEDAAOIBKAGIA6AFQBcAWhcAbIhNAaQhEAlBlAkQBAAeBUAVIABAAQA0ANA7AJIAoAGQkDABiKhdgAhaDiIAAAAIh6gDIh/gIQh8gHhYgNQgUgDgRgEQhBgMgqgPIgCgBQidgiCzhXQAegNgOgRQgNgPgxgDIvChPQiTgdgWhEQgIgnAfgZQAbgWAkAAQgJAKABAKQAAAKAKAIQBZBaPIAqQD6AVgbA9QhAAhgIAcQgBAFAAAFQAFBPILAJQNiggK7icIA0gMQEEhihhhPQAngXAzA2QA6BUi4BbIgTAIQgnARg5APQidAwkvA0IgBAAQiiAhiqAYIgBAAQkyAqlLAPIiaAEIhpgBgAaRASIAagLIAUgHQAegKAhgFQghAihDAAIgJgBg");
	this.shape_19.setTransform(528,515.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FCE4C2").s().p("AouEGQAAgFABgEQAIgcBAgjQAbg+j6gVQvIgphZhYQgKgJAAgKQgBgJAJgKIACgCQAkgmCtgvQMri1LkgUIBrgBICFABQBCgBBCACIAJABQFRAWE9AqQE9ArEDCZQAfAIAZAIIAFACQA4ATAbAWQBhBOkEBiIg0AMQq7CetiAfQoLgIgFhQg");
	this.shape_20.setTransform(528.1,494.7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#16B6DB","#49D9FA"],[0,1],-1165,-225.1,-1165,-110.4).s().p("EhVoAk0MAAAgjOMAAAgmOMApCgALMCCOAABMAAAAmYMAAAAjOgALhjlQgjAHAAAKQAAAMAjAGQAhAIAyAAQAwAAAigIQAjgGAAgMQAAgKgjgHQgigHgwAAQgxAAgiAHgAirkqQgYAIAAAKQAAALAYAHQAZAIAkAAQAiAAAZgIQAagHgBgLQABgKgagIQgZgGgiAAQgkAAgZAGgEgmvgE5QgTAGgBAIQABAJATAGQAWAGAdAAQAdAAAWgGQAUgGAAgJQAAgIgUgGQgWgGgdAAQgdAAgWAGgARonRQjaAggDAsQgDAvDYAdQDWAgE4AAQEzAADaggQDhgdADgvQACgsjdggQjWgdk0AAQk4AAjaAdgAp1mNQg2AIAAAKQAAALA2AHQA1AIBMAAQBOAAA2gIQA2gHAAgLQAAgKg2gIQg2gHhOAAQhMAAg1AHgA9NmiQgvAGAAAKQAAAJAvAGQAwAHBDAAQBDAAAvgHQAvgGAAgJQAAgKgvgGQgvgHhDAAQhDAAgwAHgAmFqbQhRAFAAAIQAAAHBRAFQBTAGBzAAQB0AABPgGQBSgFAAgHQAAgIhSgFQhPgFh0AAIgPAAQhqAAhNAFgADcqsQgSACgPADQgeAHAAAJQAAAJAeAGQAeAHAqAAQApAAAfgHQAcgGAAgJQAAgJgcgHQgfgGgpAAQgVAAgSABgAe2v2IgXAJQh5AthzAmIhXAcQktBekTAvQiaAaiTALIhHAFQjfAQDPASIAQAAIAAAAQAjAAAlgDIACAAQF5gRH8ieIBXgcIABgBQBzglB6gsIATgIQA1gYgEgQQgBgIgQAAQgOAAgbAHgA8F7qQvbDKgECpQgCA6B1A3IMZClQEjA+kHA9QhCAQguAPQi5A7CCAvQBhAiETAbQClAQCpAMQIQAjJEgKQDPgDDXgJQDggKDpgQQC1gMC7gRQI7h9E9h6QB8gwBWgwQEVibiJiYQlLkGr5g7QgngDgogCIgpgDIgOAAQnBgXmtgIIgIAAQhCgChCAAIiEgBIhtABQsxgDrfA5IAAgGIgoAIgEAipgRrQgXAHgbARQgcAQgSAQQgSARAEAGQAFAHAVgIQAZgGAcgQQAcgQARgSQARgPgEgHQgCgDgHAAQgHAAgLADg");
	this.shape_21.setTransform(548.1,642.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#28CEF5","#94FBFD"],[0,1],939.8,-67.9,939.2,71.5).s().p("Aw5IBQiqgMikgQQkTgchhgiQiCgvC4g6QAvgQBCgPQEHg+kjg+IsaijQh0g2ACg6QAEipPbjKIAogIIAAAFQLfg4MvADQriAUsrC1QitAvgkAmIgCACQgkAAgbAWQgfAZAIAnQAWBECTAdIPCBNQAxADANARQAOARgeANQizBXCdAiIACABQAqAPBBAMQARAEAUACQBYANB8AIIB/AHIB6AEIAAAAIBpABICagFQFLgOEygrIADATQkSAnlsAxQOWgaIKjDQhIAYmKA8IgCAAIlNAxIgDgTQCqgXCighIABAAQEvg1CdgvQA5gRAngPIATgIQC4hbg6hUQgzg2gnAWQgbgWg4gTIgFgCQgZgIgfgIQkDiZk9grQk9gqlRgWQGsAIHCAWIANABIAqACQAoACAnAEQL5A6FLEHQCJCXkWCZQhVAwh8AwQk9B7o8B9Qi6AQi2ANQjoAPjgALQjYAJjQADQh/ACh/AAQm6AAmagbgAhdEVQgOACAAADQAAADAOACQAOACAUAAQAUAAAOgCQAPgCAAgDQAAgDgPgCQgOgCgUAAQgUAAgOACgAm9EYIELAIQAEgEAAgGQAAgFgGgFQhLgHg2gCIgBAAQgvgDggAAQhhAAApAYgAzoACIGcAbIAEABQAoADABAPQAAAQgtAMQiMAaA+A5QCKBdEDAAIgogGQg7gJg0gNIgBAAQhUgVhAgeQhlgkBEglIBNgaQBcgchcgVIg6gHIhKgGQiQgLh5AAIhOABgAbeASIgUAIIgaAMQBKADAjgmQghAFgeAKg");
	this.shape_22.setTransform(524.9,513.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#28CEF5","#94FBFD"],[0,1],-232.5,-94.8,-233.9,211.7).s().p("EhVogf2MCrQAAAMAAAA/jMiCOgABMgpCAALgAcHaoIgBABIgBAGIgBAJQAAAFAEgTIAAgBIgBgCIAAABgALuavIABAFIADgCIACgDgAdPSqIACABIAAgFIgCAEgAdpRyIAAABIAEADIAAgIIgEAEgAISRFIABADIABgGQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAgA+yQVIABgCIgBgDIAAAFgAGZPkIAEAAIgEgRQgBAJABAIg");
	this.shape_23.setTransform(548.1,204);

	this.instance.mask = this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = mask;

	this.addChild(this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(26.5,24.6,1024,808);


(lib.mc_Helicopter1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.fan();
	this.instance.setTransform(84.5,-76.2,1,1,-10.2,0,0,83,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(22));

	// Layer 1
	this.instance_1 = new lib.mc_backFan("synched",0);
	this.instance_1.setTransform(188.5,-63.9,1,1,0,0,0,16,16);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#EF3216").ss(0.5,1,1).p("AA3gHQgygLg7Ad");
	this.shape.setTransform(185.3,-35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#010F2C").ss(0.5,1,1).p("Ag8AWIB5gr");
	this.shape_1.setTransform(185.3,-38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#990202").ss(0.5,1,1).p("Ag5AIQBAgYAzAN");
	this.shape_2.setTransform(185.2,-36);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E9A00A").ss(0.5,1,1).p("AAqAPQgcgrg3AV");
	this.shape_3.setTransform(170.9,-44.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#C68809").ss(0.5,1,1).p("AAoATIAPAAIAAgJIgNgcIhgAAIAAAEIALALIAMAJ");
	this.shape_4.setTransform(171.1,-45);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#001C55").ss(0.5,1,1).p("Al5AGILuACAmFgDIMLgE");
	this.shape_5.setTransform(69.2,-19.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#6B756A").ss(0.6,1,1).p("AAKgHQgCAHgHAEQgDADgHAB");
	this.shape_6.setTransform(87,-42.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#2897A4").ss(0.5,1,1).p("AANgKIACALQAAAJgIAAQgSADgCgGIgBgJ");
	this.shape_7.setTransform(86.1,-43.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#0CE0DB").ss(0.5,1,1).p("AAdgJIgEgNIgEgLQgBgCAAgBQgDgGgCAAIgzAAQgGABAAAHIALBHQADAGAJAAIA1gEQAKAAgBgKIgNgk");
	this.shape_8.setTransform(95,-47.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#4ABDCA").ss(0.5,1,1).p("AAWgOIgFgPQgBgCAAgBQgBgBAAgBQgCgCgBAAIgqAAQgFABAAAGIAIA2IAAAGQADAGAIAAIAsgDQAIAAgBgJIgLgfg");
	this.shape_9.setTransform(95.1,-47.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#AE7600").ss(0.5,1,1).p("AAAicQAJAAAFAHQACADABAEQACADABADQAGALAFANQAPAjALAsIAAAAQABAGACAHQADAPAEAOQABAEAAAFQAEATADAVQAGAygCAXQgBANgCAFQgHAKhggDQgOgBgRgBQgRABADgWQAAAAAAgBQACgPABgPQAIhagLhZIgGg9IAAgEQgBgFACgDQACgGALAAIBAAAQAAAAAAAAgAhFCEICCgDQAJACgBggQgBgVgCgUQgCgTgDgUQgDgTgEgTQgCgGgBgGQgNg1gWgyQgHgSgJgE");
	this.shape_10.setTransform(96.8,-38.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#74E3E7").ss(0.5,1,1).p("AgHAxIgNhcQgBgGAFAAQASgEAJAbQADAJACANIAFAsIAAABQAAAIgIAAQgPADgFgDQgBgCgCAA");
	this.shape_11.setTransform(85.4,-49.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(0.5,1,1).p("AofhQIgBgIAnygrIAAAAAi7hkIABADQAGgCAGgBIAAAAAiuhkQABAAAAAAAgOgZIABAAQgBAAAAAAAg1gZIAAAAAHRhWQAdAAAUAUQAVAVAAAdQAAAbgVAUQgUAVgdAAQgdAAgVgVQgUgUAAgbQAAgdAUgVQATgSAYgCQAEAAADAAgAIWBfIgFACAIhBcQgFgBgFgCAGiBmIAAAA");
	this.shape_12.setTransform(137.4,-45.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#1A3555").ss(0.5,1,1).p("AgSgDQgBgHAHAAQATgEAMAZ");
	this.shape_13.setTransform(84.8,-53.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#D7B306").ss(0.5,1,1).p("AAWAIIANgRIgWAAIgFgIIgIgQIgGAPIgEAHIgYAIIASALAAVAJIAFAYIgWgKIgTALIgBgZ");
	this.shape_14.setTransform(133.7,-49);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#3DE4F7").ss(0.5,1,1).p("Ag2A5IBlhQABKg8IiTB5");
	this.shape_15.setTransform(46,-33.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#031F4B").ss(0.5,1,1).p("AgOAJIAdgJIgBgIIgcAIg");
	this.shape_16.setTransform(80.7,-37.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#031F4B").ss(1,1,1).p("AAAAAQAAAAAAAA");
	this.shape_17.setTransform(33.4,-23.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#6B756A").ss(0.5,1,1).p("AAqhdQAHAFgCAOIAKB6QgCAJgGABIjzAmQgaAEAAgNIA/irQAEgMAIABIC1AAQAEAAACACQAmgJAGAnQABADABADQAEAKACAMABsg9IgDgOQAAAAAAgBQgCgNAQAAIBCAAQAOgBAGAPQACAEALAgIADAIADKgZIAPAtQACAMgMAAIg9AEQgJAAgFgHIgKhRQgCgJAIgBIA6AAQAEAAADALIAEANgABegiIAFAsIABASABOAsQgLAAgCgEIgDgXIgNhZ");
	this.shape_18.setTransform(78,-46.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#8AFAFF").ss(0.5,1,1).p("AgaA7IgrAHQgpAGAQgSIAohyQADgGAJAAIB2AAQANABADAKIABANIABANIAGA6QABAMgRACIhiAPg");
	this.shape_19.setTransform(69.8,-46.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#022146").ss(1,1,1).p("AhaBYIDHgfQAXgCgCgQIgKhxQgEgNgRgBIiaAAQgMgBgEAJIg0CZQgWAWA3gHg");
	this.shape_20.setTransform(69.8,-46.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#74E3E7").ss(1,1,1).p("AhtBAIAtiHQAFgIAKAAICJAAQAOABAEAMIAJBlQACANgUADIixAbQgwAGATgUg");
	this.shape_21.setTransform(69.9,-46.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#B6B9B5").ss(0.5,1,1).p("AguAaIAAgNQALgIARgDQALgCAMAAIgXAAIgcAAIAAANAguAhIAAgHAAHghIgGAAQgMABgHANIAAgOIATAAAAHghIALAAIAAAhIAdAAIAAADIAAAeAgSAAIAAgJQAVgFAEgTAgSgTIAAAKAASAAIgNAAAArADQgrAagugD");
	this.shape_22.setTransform(84.4,-71.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#22EEFF").ss(1,1,1).p("AB1iCQACALgBAMQgBAPgFARQgDAKgEAMQgHAPgJAQQgHANgIALQgMASgOAUQgHAJgIAKQgKAKgKAJQgiAgghAMQgKACgJACQgIABgIACQgQACgMAA");
	this.shape_23.setTransform(45.9,-39.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#0ACDE2").ss(0.5,1,1).p("ACLiSQANgBABAVQAAAHgBAJQgDASgFAQIAAAAQgEAMgDALQgHAQgHAQQAAAAAAABQgGANgHALQgBABAAAAQgIAOgIANIgBAAQgMARgNAOQAAAAAAAAQgKALgKAKQg4A2g+AIQgNABgNAAQgwgBgHgnQgEgcASgpQAAgBABgC");
	this.shape_24.setTransform(43.2,-39.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#002671").ss(1,1,1).p("AhgCbQgnABgQgRQgDgEgDgFQgFgLABgPQABgdAWgsIAAAAQACgFADgFQAGgKAHgIQAAAAABgBQAXgcAegZQAYgXAfgTQATgOAagMQAMgGALgFQAAAAABAAQAggOAUgFQAQgEALgBQAAAAABAAIABAAQABAAABAAIABAAQAOABAEAKQABAHABAHIAAAAQABAigRAqIAAAAQgGAQgJAQQAAAAAAABQgHAMgIAMQgBAAAAABIAAAAQgIANgKAOIAAAAQgLAPgMARQgEAFgEAFQgGAGgGAGIAAAAQgvAtgoAOQgTAEgQADIgBAAQgOACgMAB");
	this.shape_25.setTransform(43.1,-39.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#5B605A").ss(1,1,1).p("AnuiYQhGARg+AdQgNAGgLAGQhZAtg3A7Qg4A9gGA4QgDAmATAaQAKAMAOAKQAFAJAHAIQAGAGAHAFQAKAJAOAIQAzAcBcAKQAJABAKABQABAAABAAAl8j6QADAAACAAIAHAAIA8AAIBeAAIAcAAIARAAAmBj6Qg6AIgxBYApYEqQAJABAJABQAFAAAGAAQABAAABAAQAFAAAEABQBLACBhgHQADAAAEAAAl6EnIACAAQAGAAAGgBQBxAABFgCQAGAAAFAAAMdBJIAQgFIAIgCIgNgnIgBgCIAbgOQAAgxgYhGQgXgXAKgYIAPgjIAOgiIAGgOIAFgLIAGgPIAOgkIhnAAIgVAkIgIAPIgGAKIgJAPIhDByIoEgNIgigBIgBAAIgNAAIg4gCQhGAHgVgzQgcg+ghgOQgKgEgKAAIgRAAAioEjQAFAAAFAAQACAAACAAQAFgBAGAAQAFAAAGAAQAogDAIgGIAdgWIAQgQIAQgRIA9hAIAagbIARgRIAegfIAzg1QAXghA9AEIFGgRIAOAMIA7AAIAYBNIAPgGIAAACIACAFIAEANIADALIBtgf");
	this.shape_26.setTransform(110.6,-43);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#F25039").s().p("Ag3AFQA9gcAyAKIhsAdg");
	this.shape_27.setTransform(185.3,-34.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EDA40A").s().p("AAoATQgcgrg3AVIgLgKIAAgFIBgAAIANAcIAAAJg");
	this.shape_28.setTransform(171.1,-45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#580000").s().p("AhDAUIB5gsIAOAlIgIACIgKgDQgygMhBAZg");
	this.shape_29.setTransform(186,-37.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BA0204").s().p("Ag5ABIAAAAQBBgXAyANIgBAGQgygLg8Adg");
	this.shape_30.setTransform(185.1,-35.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#0A4386").s().p("AAOAEIAFgIIAgAAIgFAJgAgyAEIAGgIIAHAAIgFAIg");
	this.shape_31.setTransform(187.7,-67.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BA0300").s().p("AANAUIAIgPIAgAAIgFAMIgCADgAg0AUIAJgPIAIAAIgJAPgAglgEIAIgPIAHAAIgIAPg");
	this.shape_32.setTransform(187,-67.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E74994").s().p("AgkAUIAIgPIA1AAIgHAPgAgWgEIAIgPIAzAAIgHAPg");
	this.shape_33.setTransform(186.6,-67.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#167CD1").s().p("AhBBMIAuhSIA2AAIghBEIgNAHQgTAHgaAAIgJAAgAgKgVIAGgLIA0AAIgFALgAACgvIAPgcIAsAAQAEABACADIgMAYg");
	this.shape_34.setTransform(184.8,-64.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9A0A02").s().p("AgKAHIADgDIAEgKIAOAAIgHANg");
	this.shape_35.setTransform(192.8,-66.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#0B2D75").s().p("AABASIAMgXQgCgDgEAAIgqAAIgDAAIgQAaIgHAAIAWgiIBkAAIgOAig");
	this.shape_36.setTransform(190.2,-71.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#8F0100").s().p("AAEAHIgdAAIAHgNIAsAAIgGANg");
	this.shape_37.setTransform(192.3,-68.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#003267").s().p("AgJAFIAFgJIANAAIgEAJg");
	this.shape_38.setTransform(193.4,-67.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#A2A8A8").s().p("AgwAxQgVgVAAgcQAAgcAVgUQASgSAZgCIAFAAQAcgBAVAVQAUAUABAcQgBAcgUAVQgVAUgcAAQgcAAgUgUgAgogsIgCADIgBABQgRARAAAXIAAAAIAAAFQACAVAQAQIAHAHIAFADQAOAJAQgBQAFAAAHgBIAFgCQANgDALgMQAGgFAEgHIADgEQAFgMAAgOQAAgJgDgJIgBgBIgBgDQgEgLgJgIQgMgMgOgEIgGgBIgJgBQgWAAgSAPg");
	this.shape_39.setTransform(184,-47.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#02276E").s().p("AgFA8QAngkAbg7IAQAAIgOAhQgiAzgrAbIgGABgAhMAuIAvhRIAJgPIAFgLIAIgPIAEAAIgIAPIgGALIgJAPIguBSIgEgBg");
	this.shape_40.setTransform(185.5,-61.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#C2CDE1").s().p("AgEAFQAFgEACgHIABAFQABAIgIAAg");
	this.shape_41.setTransform(87.7,-42.7);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#001B4A").s().p("AgOAMIgEgUIADACIACAIQACAHASgEQAIAAAAgHIgCgMIAAgBIAEAAIABAPQgCAJgHAEQgEADgGABQgLAAgCgFg");
	this.shape_42.setTransform(86.2,-43.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#7A8B81").s().p("AAAgZIASgXIgTBQIgRAQg");
	this.shape_43.setTransform(119,-34.4);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#BF2300").s().p("AgdAGIAcgcIgSBJIgaAcgAARgtIAdghIgUBSIgcAfg");
	this.shape_44.setTransform(119.1,-34.7);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#BF8300").s().p("AgeBIIgfgBQgRABADgWIAAgCIADABICCgDQAJABgBggQgBgSgCgUIgFgnIAGgKIABAIQAEATADAVQAGAwgCAYQgBANgCAFQgFAHg6AAIgogBg");
	this.shape_45.setTransform(97.1,-30.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#C3A200").s().p("AhGA3IADgdQBigdAgg0IAFAnQACASABAVQABAggJgCIiCADg");
	this.shape_46.setTransform(96.6,-30.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#A0A398").s().p("AAOAKIgthgIAcgEIAjBiIgQA8IgSAXg");
	this.shape_47.setTransform(119.2,-46.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EE5D02").s().p("AAIAVIgjhiIAMgDIArBhIgHAeIgaAig");
	this.shape_48.setTransform(121.6,-47.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#03205C").s().p("AlLA3IAHgeIgthhIABAAIAhABQALAuAiAZQARABAYAAIABAaIAVgMIAXAKIgGgYIABAAIAbgBIFOgNQAVgBAMgNQAigzA8AEIgQAQQgZACgSASQgVAVAAAbQAAAdAVAUQAUAVAdAAQAdAAAVgVQAUgUAAgdQAAgbgUgVQgVgUgdAAQAtgcAjg0IgPAjQgLAYAXAXQAYBEAAAzIgaAOIAAACIh7AuIgBgCIgPAGIgYhOIAQAAIAAgKIgOgdIhiAAIAAAEIAMALIALALIlDATQg+gEgWAhIgzA1gADuA+IgGgDIgHgGQgQgQgBgWIgBgFIAAgBQABgWAQgRIABgBIADgDQARgPAXAAIALABIAGACQAOADAMAMQAJAJAEAKIABADIABACQADAHAAAKQAAAOgGAMIgCAEQgEAHgGAGQgLALgOAEIgEABQgHACgHAAQgRAAgNgJg");
	this.shape_49.setTransform(157,-48.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F06200").s().p("AAOgMIgvhYIAWgDIAtBiIgSBPIgaAeg");
	this.shape_50.setTransform(117.2,-44.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#3BF5F2").s().p("AgfAlIgLhHQAAgHAGgBIAzAAQACAAADAGIABADIAEALIAEANIABACIANAkQABAKgKAAIg1AEIgCAAQgHAAgDgGgAghgdIAHA2IABAGQADAGAIAAIArgDQAJAAgBgJIgLgfIgDgIIgFgPIgBgDIgBgCIgDgCIgqAAQgFABABAGg");
	this.shape_51.setTransform(95,-47.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#CBCBC3").s().p("AgkAqIgKhRQgCgIAIgBIA4AAQAEgBADALIAEANIgDADIgEgMIgBgDQgCgGgDABIgyAAQgHAAABAIIAKBGQAEAHAIgBIA2gDQAKAAgCgKIgNglIAAgBIADgCIAPAtQACALgMAAIg7AEIgBAAQgIAAgFgHg");
	this.shape_52.setTransform(95,-47.6);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#CACCC7").s().p("AA4AZIgLgZIgDgDIgEgHQgFgHgIAAIgCAAIg+AAQgLAAgDAFIgDgBIAAgBQgDgNARAAIBAAAQAOgBAFAPIAOAhIADAJg");
	this.shape_53.setTransform(94.4,-52.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FBD800").s().p("AhCgyIgFg8IgBgFQgBgEACgEQADgGALABIA+AAIACAAQAIAAAFAGIAEAHIADAGIALAZQAOAjALArIAAAAIAEALIAGAfIgFAKQgDgUgFgTIgDgLQgNg1gWgyQgHgSgIgDQAIADAHASQAWAyANA1IADALQAFATADAUQghA1hhAfQAHhbgLhZgAg6hmIALBTQAEAIAKgBIA7gEQALAAgBgLIgQgvIgEgOIgFgNQgDgLgEABIg4AAQgHAAABAJgABEAuIAAAAg");
	this.shape_54.setTransform(96.2,-41.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#D5FDFF").s().p("AgHAxIgNhcQgBgGAFAAQASgEAJAbQADAJACANIAFAsIAAABQAAAIgIAAIgNABQgEAAgDgBg");
	this.shape_55.setTransform(85.4,-49.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0D3B76").s().p("AAQADQgCgLgDgJQgJgbgSAEQgFAAABAGIgDABIgBgIQgBgHAHAAQATgEAMAbIACAHQADAJACALIAAAAIAFAvIgEAAg");
	this.shape_56.setTransform(85.4,-50.1);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#899388").s().p("AgzAnIgSgtQgXg0gMgHQAhAOAcA8QAVAzBGgHIA4ACIABADIgbAEIgWACQgbACgcAAQgqgHgKgUg");
	this.shape_57.setTransform(108.1,-61.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F8D00E").s().p("ACmAuIgPgMIgLgLQA5gVAbAsgAjOgBIAAgBIgSgNIAZgIIADgHIAIgPIAJAQIAFAIIAWAAIgNATIgCAAIAAABIAGAWIgWgKIgWALg");
	this.shape_58.setTransform(152.7,-47.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#1270C7").s().p("AiWATIgIgQIgIAPIg9gBQgQgRgCgSIHrAMQgNAZkkAAIhbAAg");
	this.shape_59.setTransform(149.7,-52.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#093F87").s().p("AknB4QgigbgLguIICANIBDhwIAIAAIgvBSIAEAAQAfACAXgIIAPgIIAhhEIAhAAQgbA8gpAkQg8gEghAzQgMANgWABIlNAPIgbABIAOgUIgXAAIgFgIQF9AFAPgfInrgNQACAVAQARIA9ABIgEAHIgYAHIASAOIAAAAQgZAAgQgBgAEPhcIAQgcIADAAIgPAcg");
	this.shape_60.setTransform(157.5,-60.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#333333").s().p("AjVAYIAAgBIgBgBQgGgLgCgLIgBgDQgBgJABgKIABgBIAAANIADAOQACAHAGALIAAAAIAAABIAAABIgBAAIgBAAgAAHAUIgBAAIADgSQABgKAAgJQACARgDATIgBABIgBAAgADZARIgBgBIAAAAIAFgQIADgOQABARgGAMIAAABIgBABIgBAAg");
	this.shape_61.setTransform(71.7,-15.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#72CCD5").s().p("AgpgrIAGA6QABAMgRACIhkAPgABYAGIA1glIALAfQABAIgJAAIgtADIgCAAQgHAAgCgFg");
	this.shape_62.setTransform(83.5,-45.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#042A6B").s().p("AgOAAIAcgIIABAIIgdAJg");
	this.shape_63.setTransform(80.7,-37.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#002671").s().p("Al5AGIgMgJIMLgEIgQAPg");
	this.shape_64.setTransform(69.2,-19.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#82E7EF").s().p("ABZhLIgPAaIiSB6IgRADgABKgxIgaAmIhlBQIgTAEgAAwgLIgOARIgVATQgiAgggAMgABKgxIAAAAg");
	this.shape_65.setTransform(45.9,-34.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#9CEDF3").s().p("AhvBaIDfi2QgHAPgJARIiyCWQgQADgMAAIgBgDg");
	this.shape_66.setTransform(45.2,-35.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FCF7F1").s().p("AgfgyIABANIhtBXIgMABgABjAFIAzgmIACAIIg1Alg");
	this.shape_67.setTransform(82.3,-45.7);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#32BACA").s().p("Ai2A2IAohyQADgGAJAAIB4AAQALABADAKIABANIh3BlIgrAHIgRABQgUAAAMgNgAA9AhIgCgLQAFADARgDQAIAAAAgIIABANQABAIgIABIgLABQgKAAgBgEgACBgoQgBgHAFAAIAsAAIADABIABADIABADIAFAPIgzAmg");
	this.shape_68.setTransform(78.6,-46.5);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#C5C7C4").s().p("AiKBXIA/irQAEgMAIABIC1AAIAGACQAHAFgCAOIAKB6QgCAJgGABIjzAmIgLAAQgPAAAAgJgAhHhSIg0CZQgWAXA3gIIDHgeQAXgDgCgQIgKhxQgEgNgRgBIiaAAIgCAAQgKAAgEAIg");
	this.shape_69.setTransform(69.8,-46.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#AFEFF1").s().p("AhtBAIAtiHQAFgIAKAAICJAAQAOABAEAMIAJBlQACANgUADIixAbIgUACQgXAAAOgQgAg4g9IgnByQgRASAqgGIArgHIAMgBIBhgPQARgCgBgMIgGg6IgBgNIgBgNQgDgKgNgBIh1AAQgJAAgEAGg");
	this.shape_70.setTransform(69.9,-46.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#3E433E").s().p("AjaESIAAgBQgHgKgCgHIgCgQIgBgNIAAABQgCAJABAJIABAGQACALAGALIgBAAIgUgCQADgLABgIIAAgGQgDgQgWADIh5AAQgOgIgLgJILuACIgQAQIhJAAQgOAHgBAYIgLABIgDAAIgKAAQAFgMAAgTIgEAQIgEAQIgLAAQAAgZgqgIIhYAAQgsAFgJAeIgLABIgDAAQAEgTgDgTQABAJgCAMIgBARIgHABQAAgXghgLQhQgIg0AIQglAIAIAeIgRgCgAmyC9IBnADQCtAEDKgIQBOgCA+gGIAfgEQBiADAGgJQADgGABgMQAbgKATgMQAigfAggiIgQBJIg+A/IsLAFQgHgJgFgIgAgDkSIAAABIABAAQABABAAAAQABAAAAAAQAAABAAAAQAAABAAABIAAAHIAAABIgFA1QgFALgLABIhaASQAyhZA6gHgAAIkEIAAgDIADgMIA8AAIBfAAIAcAAQgEBGhvABIgHABQhDAAADg5g");
	this.shape_71.setTransform(72.5,-40.6);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6B756A").s().p("AC0AcIggABIhVACQg+ABgvAGIg9AHIgrAGIgeADQCpggC/AGgAicAuIAAgBIAAgCIABAAIABAAIBZgSQALgBAGgLIAGg0IAAAAIAAgIQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAIgCAAIAAgBIABgBIABgBIADACIADADIABAJQgCAbgFAZIAAABQgHANgMADQgrALgwAFIgBAAgACwAXIgBgBQAEgUgMg1IAAgBIAAAAIABgBIACAAIAAABQANAtgCAOIgDAQIgBABIgBgBg");
	this.shape_72.setTransform(76.8,-62.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#383838").s().p("AguAeIAAgOQALgHARgEQALgCAMgBIANAAIAdAAIAAAEIgEAAQgoAYgpAAIgIAAgAgSgQQAHgNAMAAIAGAAQgEASgVAGg");
	this.shape_73.setTransform(84.4,-72.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#A9B2AD").s().p("AgZAJIAaAAIAZAAQgOABgLACQgPAEgLAHgAABgWIAVAAQgOAAgHANg");
	this.shape_74.setTransform(82.3,-73);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AguAjIAAgDIAAgHQAuACArgaIAEAAIAAAfIAAADgAAFgBIgXAAIAAgJQAVgGAEgSIALAAIAAAhg");
	this.shape_75.setTransform(84.4,-71.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#3DE4F7").s().p("AiYBrQgEgcASgpIABgDIAPgdIABgBQAXgcAegZQgdAagVAeIgBAAQgIARgGAPQgSAtALAXIAGAJQAMANAdACIACgBIABgCQAMAAAQgCIAQgDIATgEQAfgMAkggIAUgTIAPgTIAagmIAPgYQAJgQAHgPIAFACIgOAgIAAABIgNAYIgBABIgQAbIgBAAQgMARgNAOIAAAAIgUAVQg4A2g+AIQgNABgNAAQgwgBgHgngACLhNQAFgRABgPQABgMgCgLIABAAIACgCIAAgCQgDgGgFgDIAAgBQANgBABAVIgBAQQgDASgFAQg");
	this.shape_76.setTransform(43.2,-39.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#033067").s().p("AkNCOIgGgJQgFgLABgPQABgdAWgsIAAAAIAFgKIANgSIgPAdIgCADQgRApAEAcQAGAnAwABQANAAANgBQA/gIA6g2IATgVIABAAQAMgOANgRIAAAAIARgbIAAgBIALgYIABgBIANggIAHgXIAAAAQAFgQAEgSIABgQQgBgVgNABIgBABIgBAAIgBgBQgJgEgRAEQAOgEALgBIABAAIABAAIACAAIABAAQAOABAEAKIACAOIAAAAQABAigRAqIAAAAQgGAQgJAQIAAABIgNAYIgBABIAAAAIgSAbIAAAAIgXAgIgIAKIgMAMIAAAAQgvAtgqAOIgjAHIgBAAIgaADIgBAAIgGAAQgiAAgPgQgAAYAEIA0iZQAFgIALAAICdAAQAQABAEANIALBzQABAQgWADIjKAcIgWACQgbAAAQgRgABViMIguCKQgTASAwgHICzgZQAUgCgBgOIgKhmQgDgMgPgBIiLAAQgKAAgEAHg");
	this.shape_77.setTransform(54.9,-39.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#5B605A").s().p("AlMDpIhngDQgPgKgJgNQAqARBVABQBUACB/gNID9goQAVgFATgGIgDAeIgBABQgCAWARgBIAfACIgfADQg+AHhOABQiPAHiBAAIhngCgAE9B3QgCgVgEgTIgCgJIACgDIAEgKQAVhvg1gvQheg4h9ASQiSgFh8AuIgCAAQgUAIgSAAQA+gcBGgRIABABIABAAQAwgFAqgLQANgDAGgNIAAgBQAEgbABgbIgBgJIgBgDIAEgBIAGAAIgDAMIAAACQgDA8BKgDQBvgBAEhGIARAAIAAABQALA3gDAUIAAABIABABIABgBIADgQQADgQgNgtIARAAQAKABAJADQAMAIAXAzIATAvQAKAVArAHQAdAAAagCIAxBYIgaB0QggAhgiAgQgTAMgbAJQACgXgHgygAiKh+IAegDIAsgGIA8gHQAvgGA/gBIBVgCIAfgBIg8AAQifAAiNAag");
	this.shape_78.setTransform(72.6,-44.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#707270").s().p("AhnDnIgIgBIgCAAIgMAAQgIgdAlgIQA0gJBOAJQAhALAAAWQhFAFg8AAIgpAAgAk1C8IB5AAQAWgDADAQIAAAGQgBAIgDALQhbgKgzgcgACQC9IBYAAQAqAIAAAZQhFAChyAAQAJgeAsgFgAFHC9IBJAAIgdAWQgIAGgoADIgLAAQABgYAOgHgAj/CLQhVgCgqgQQgUgaAEgmQAGg4A3g7QA4g9BYgtIAYgMQASAAAUgIIACgBQB8gtCSAEQB9gRBeA3QA1AvgVBxIgEAKIgCAEIgGggIgEgMIAAgBQgLgrgOgjIACAEIgDgJIgOgjQgFgPgOABIhCAAQgRAAADANIAAABIADAOIAFA9QALBagHBZQgTAGgVAFIj9AnQhyAMhPAAIgSAAgAl7BHQgBAQAFALIAGAIQAQASAngCIABAAIAagCIABgBIAjgHQAqgOAvgsIAAgBIAMgMIAIgKIAXgfIAAAAIASgaIAAAAIABAAIAPgbIAAgBQAJgQAGgPIAAgBQARgqgBghIAAgBIgCgNQgEgKgOgBIgBAAIgCAAIgBAAIgBAAQgLAAgQAFQgUAEggAOIgBABIgXAKQgaANgVAOQgfATgYAWQgeAagXAeIgBABIgNARIgFAKIAAAAQgWArgBAcgACOgOIAAALIAggKIgCgKgAgai6Ig/CsQAAANAagEIDzglQAHgCACgIIgLh9QACgOgGgFIABAAIAAAAIALgCIAAAAIAAAAQAaABAGAfQgGgfgagBIAAAAIAAAAIgLACIAAAAIgBAAIgGgCIi2AAIgBAAQgHAAgEAMgAC5i9QgHAAABAHIABAIIANBbIAEAWQACAFALAAIANgBQAKgBgBgKIgBgFIgBgRIgFgvIAAAAQgCgNgDgJIgCgHQgKgYgSAAIgFABg");
	this.shape_79.setTransform(64.9,-36);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#076D77","#CCF5F7"],[0,1],-78.2,39.1,-64.4,56.2).s().p("AhgCGQgZgBgMgMIgEgHQgKgWARgqQAFgOAJgRQAlg2BCgqQAUgOAZgMIAXgLIABAAQA5gZATAHIAAAAIABAAQAEACABAEIACABIABABQACALgBAMQgBAPgFARIgHAWIjfC2IgCgBg");
	this.shape_80.setTransform(43.5,-40.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#22EEFF").s().p("AiHB9IgGgIQgLgXASgtQAGgPAIgRIABgBQAVgdAdgbQAZgWAegTQAUgOAZgNIAYgKIAAgBQAggOAVgEQASgFAKAFIABAAIABAAQAFADADAGIAAACIgCACIgBAAIgBAAIgCgCQgBgDgEgCIgBgBIAAAAQgTgHg5AZIgBABIgXALQgZAMgUAOQhCApglA3QgJAQgFAPQgRAqAKAVIAEAHQAMAMAZABIACABIABADIgBACIgCAAQgdgBgMgOg");
	this.shape_81.setTransform(43.3,-40.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#46AFE8").s().p("ADKAwIAAgSIAAgHIAAgEIAAhAIAMgDIAAA+IAAAEIAAAEIAAAIIAAASgAjUAwIgBgRIAAgGIAAgCIAAgCIAAgGIAAgCIADgSIACgMQAEgMAFgLIAEAAIAHAAIAAABQgHAPgEATIgDATIAAABIAAAEIAAAEIAAAHIAAASg");
	this.shape_82.setTransform(73.3,-7.6);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#217DE0").s().p("AkTAbQgLAAgKgCQgQgDgLgIIgGgFIgDgDIAFACQAMAFATAEQAPACATACIADABIIFgBIBKgHIhOANgAj9gFIgVgDQgPgDgKgHIgGgGIgCgCIADABQAMAFASAEQAOAEASACIADAAIApAAIAAAFgAi6gGIAAgEIGUAAIAAAEgADngLIATgBQAegDAogIIABAEIgIADQgiAGgdACIgTABg");
	this.shape_83.setTransform(71.7,-4.5);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#19479F").s().p("AkhA5QgSgEgMgKIgBAAIAAAAQgFgEgEgFIgBAAIgCgDIgBgBQgPgRAJACIAWAPQAfAMAgACIBBAAIAKAAIGUAAIANAAIAXABIBRgMQAEABgFAFQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgdAIgyAJIgFABIoRAAQgKgBgIgCgAlCAjIAGAFQALAIAQADQAJACAMABIIRAAIBOgOIhLAIIoEAAIgDAAQgTgCgPgDQgTgEgNgFIgEgCIADADgAj6AaQgJgBgIgCQgRgFgLgJIgBAAIAAAAIgJgJIAAAAIgDgBIgBgBQgNgRAIACIAUAPQAcALAgAAIArAAIAAAFIgpAAIgDAAQgSgCgOgDQgSgEgMgFIgEAAIADABIAGAFQAKAHAPAEIAUADIA4AAIAAAGgADuAZIAAgHIASgBQAegCAigHQgUAIgtAJgAizAZIAAgHIGUAAIAAAHgAizAOIAAgEIAVABIAAgBIAAgEIAAgDIAAgNIgCgMIgBgHIgDgPIAAAAIgIgBIgDAAIADgHIAIAAQBMACBegFIAIgBIABABIABAAIAAgBIADAAIALgBQByAABFgBIALAAIABABIABAAIABgBIAAgBIAKAAIADAAIALAAIgOAHIgMACIAABAgAiWgdIABAHIABAMIAAANIAAADIAAAFIAvAAIgFABIFIgCIAAg8QhFAChvAAIgPAAIgJABQhFADg7ABIgHAAIgXgBIgNAAIADAPgADuAKIASAAIBIgJIgCAAQgnAJgfACIgSABg");
	this.shape_84.setTransform(71,-7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1}]}).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-92.3,205.2,91.3);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.mc_backFand("synched",0);
	this.instance.setTransform(68.9,21.9,1,1,0,0,0,16,16);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#E9A00A").ss(0.5,1,1).p("AArAJQgmgigvAh");
	this.shape.setTransform(40.2,33.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#EF3216").ss(0.5,1,1).p("AAzgWQgzACgyAr");
	this.shape_1.setTransform(56.5,39.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#990202").ss(0.5,1,1).p("Ag1AVQA4goAzgB");
	this.shape_2.setTransform(56.1,39);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#010F2C").ss(0.5,1,1).p("Ag0AmIBphK");
	this.shape_3.setTransform(55.7,36.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B6B9B5").ss(1,1,1).p("AgDgMIgFgGIAAgCIAHgGAgGAbIAMgJIADgB");
	this.shape_4.setTransform(62,35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.5,1,1).p("Ag7AVIABAAAA8gUQgFAAgGAAAAxgOIgEAD");
	this.shape_5.setTransform(56.6,39);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#C68809").ss(0.5,1,1).p("AArAPIAPgEIgCgJIgVgXIhdAXIABAFIAPAHIANAI");
	this.shape_6.setTransform(40.2,33);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#5B605A").ss(1,1,1).p("AE3A9QgPgngfgtQgcgQAEgaIAFglIAFgkIACgQIACgMIACgQIAEgmIhjAaIgLApIgFAQIgCAMIgFARIgjB9ImeBkAjWDdIEShbIASAIIA4gPIAsBGIAMgKIABABIADAFIAIAMIAFAKIBhg6");
	this.shape_7.setTransform(31.2,22.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8D00E").s().p("AgdAIIgNgIQAvghAmAiIg2APg");
	this.shape_8.setTransform(40.2,34.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1270C7").s().p("AiHA6QgcgGgYgKIgLgGIGNheQgEAYjDA4IhqAcIgdAJIAAgBg");
	this.shape_9.setTransform(21.1,30.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#580000").s().p("Ag9AjIBphKIAEAHIgEAcIATADIgDABIgLAAQgxAAg6Aog");
	this.shape_10.setTransform(56.6,37.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BA0204").s().p("Ag2APIABAAQA4goAzgBIAAAHQgyACgyArg");
	this.shape_11.setTransform(56.1,39.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F25039").s().p("AgyASQAygrAzgCIhfA3g");
	this.shape_12.setTransform(56.5,40.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EDA40A").s().p("AgqASIgPgIIgBgFIBegWIAUAWIACAJIgOAFQgmgigwAhg");
	this.shape_13.setTransform(40.2,32.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#03205C").s().p("AkKB9IgEgPIE/hmQAUgGAJgNQASg7A7gMIgLAUIAGgCQAkgmAUg7IgFAlQgEAaAcAQQAfAvAPAlIgGAnIgHAHIABABIhsBMIgBgBIgMAKIgshGIAPgEIgCgJIgVgZIhdAZIABAFIANAHIANAIIkSBbIgMglg");
	this.shape_14.setTransform(35.1,28.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#003267").s().p("AgFgDIANgDIgCAKIgNADg");
	this.shape_15.setTransform(55.8,6.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#02276E").s().p("AAIA4QAegtAKhAIAQgEIgFAkQgUA5gkAmIgEACgAgngdIAEgRIADgLIAEgRIAEgBIgFARIgCALIgEARIgYBbIgEAAg");
	this.shape_16.setTransform(49.9,14.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9A0A02").s().p("AgGAGIABgKIANgEIgBANIgOAEg");
	this.shape_17.setTransform(55.6,7.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#093F87").s().p("AjHCaIAegJIBqgcQDDg6AEgYImOBgIgKgEIGehkIAih9IAIgCIgYBcIAEAAQAfgHATgNQAIgGAFgGIAPhMIAfgIQgKBCgeAtQg7AMgTA5QgJAPgUAGIk/BmIgGgZgADLixIADgBIgHAgIgEABg");
	this.shape_18.setTransform(27.4,21.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0A4386").s().p("AgsAGIAHgBIgCALIgIACgAARgIIAfgJIgCAMIgfAGg");
	this.shape_19.setTransform(50.4,7.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#BA0300").s().p("AgrAGIAHgCIgEARIgIACgAASgJIAfgIIgBANIgBADIggAGgAgkgUIAHgCIgFARIgHACg");
	this.shape_20.setTransform(50,8.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E74994").s().p("AgaAMIAzgMIgDAOIg0APgAgTgOIAygOIgEARIgyAMg");
	this.shape_21.setTransform(49.3,8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#167CD1").s().p("AgUgBIA0gPIgPBKQgFAGgHAGQgSANgfAHgAgNgdIAygOIgCALIgzAOgAgBhOIAogLQAEAAACACIgEAbIgyAOg");
	this.shape_22.setTransform(48.4,11.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#0B2D75").s().p("AgrgGIBigaIgFAlIgsALIAFgZQgDgCgEABIgoAKIgDAAIgIAfIgHACg");
	this.shape_23.setTransform(51.8,3.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8F0100").s().p("AgTgBIAqgMIgCAOIgPAEIgcAJg");
	this.shape_24.setTransform(54.5,5.3);

	this.addChild(this.shape_24,this.shape_23,this.shape_22,this.shape_21,this.shape_20,this.shape_19,this.shape_18,this.shape_17,this.shape_16,this.shape_15,this.shape_14,this.shape_13,this.shape_12,this.shape_11,this.shape_10,this.shape_9,this.shape_8,this.shape_7,this.shape_6,this.shape_5,this.shape_4,this.shape_3,this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,86.6,46.4);


(lib.mc_Helicopter1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance_2 = new lib.fancopy();
	this.instance_2.setTransform(84.5,-76.2,1,1,-10.2,0,0,83,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(22));

	// Layer 1
	this.instance_3 = new lib.mc_backFancopy("synched",0);
	this.instance_3.setTransform(188.5,-63.9,1,1,0,0,0,16,16);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#EF3216").ss(0.5,1,1).p("AA3gHQgygLg7Ad");
	this.shape_85.setTransform(185.3,-35);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#010F2C").ss(0.5,1,1).p("Ag8AWIB5gr");
	this.shape_86.setTransform(185.3,-38);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#990202").ss(0.5,1,1).p("Ag5AIQBAgYAzAN");
	this.shape_87.setTransform(185.2,-36);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#E9A00A").ss(0.5,1,1).p("AAqAPQgcgrg3AV");
	this.shape_88.setTransform(170.9,-44.6);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#C68809").ss(0.5,1,1).p("AAoATIAPAAIAAgJIgNgcIhgAAIAAAEIALALIAMAJ");
	this.shape_89.setTransform(171.1,-45);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#001C55").ss(0.5,1,1).p("Al5AGILuACAmFgDIMLgE");
	this.shape_90.setTransform(69.2,-19.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#6B756A").ss(0.6,1,1).p("AAKgHQgCAHgHAEQgDADgHAB");
	this.shape_91.setTransform(87,-42.6);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#2897A4").ss(0.5,1,1).p("AANgKIACALQAAAJgIAAQgSADgCgGIgBgJ");
	this.shape_92.setTransform(86.1,-43.9);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#0CE0DB").ss(0.5,1,1).p("AAdgJIgEgNIgEgLQgBgCAAgBQgDgGgCAAIgzAAQgGABAAAHIALBHQADAGAJAAIA1gEQAKAAgBgKIgNgk");
	this.shape_93.setTransform(95,-47.7);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#4ABDCA").ss(0.5,1,1).p("AAWgOIgFgPQgBgCAAgBQgBgBAAgBQgCgCgBAAIgqAAQgFABAAAGIAIA2IAAAGQADAGAIAAIAsgDQAIAAgBgJIgLgfg");
	this.shape_94.setTransform(95.1,-47.7);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#AE7600").ss(0.5,1,1).p("AAAicQAJAAAFAHQACADABAEQACADABADQAGALAFANQAPAjALAsIAAAAQABAGACAHQADAPAEAOQABAEAAAFQAEATADAVQAGAygCAXQgBANgCAFQgHAKhggDQgOgBgRgBQgRABADgWQAAAAAAgBQACgPABgPQAIhagLhZIgGg9IAAgEQgBgFACgDQACgGALAAIBAAAQAAAAAAAAgAhFCEICCgDQAJACgBggQgBgVgCgUQgCgTgDgUQgDgTgEgTQgCgGgBgGQgNg1gWgyQgHgSgJgE");
	this.shape_95.setTransform(96.8,-38.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#74E3E7").ss(0.5,1,1).p("AgHAxIgNhcQgBgGAFAAQASgEAJAbQADAJACANIAFAsIAAABQAAAIgIAAQgPADgFgDQgBgCgCAA");
	this.shape_96.setTransform(85.4,-49.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#000000").ss(0.5,1,1).p("AofhQIgBgIAnygrIAAAAAi7hkIABADQAGgCAGgBIAAAAAiuhkQABAAAAAAAgOgZIABAAQgBAAAAAAAg1gZIAAAAAHRhWQAdAAAUAUQAVAVAAAdQAAAbgVAUQgUAVgdAAQgdAAgVgVQgUgUAAgbQAAgdAUgVQATgSAYgCQAEAAADAAgAIWBfIgFACAIhBcQgFgBgFgCAGiBmIAAAA");
	this.shape_97.setTransform(137.4,-45.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#1A3555").ss(0.5,1,1).p("AgSgDQgBgHAHAAQATgEAMAZ");
	this.shape_98.setTransform(84.8,-53.9);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#D7B306").ss(0.5,1,1).p("AAWAIIANgRIgWAAIgFgIIgIgQIgGAPIgEAHIgYAIIASALAAVAJIAFAYIgWgKIgTALIgBgZ");
	this.shape_99.setTransform(133.7,-49);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#3DE4F7").ss(0.5,1,1).p("Ag2A5IBlhQABKg8IiTB5");
	this.shape_100.setTransform(46,-33.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#031F4B").ss(0.5,1,1).p("AgOAJIAdgJIgBgIIgcAIg");
	this.shape_101.setTransform(80.7,-37.5);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#031F4B").ss(1,1,1).p("AAAAAQAAAAAAAA");
	this.shape_102.setTransform(33.4,-23.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#6B756A").ss(0.5,1,1).p("AAqhdQAHAFgCAOIAKB6QgCAJgGABIjzAmQgaAEAAgNIA/irQAEgMAIABIC1AAQAEAAACACQAmgJAGAnQABADABADQAEAKACAMABsg9IgDgOQAAAAAAgBQgCgNAQAAIBCAAQAOgBAGAPQACAEALAgIADAIADKgZIAPAtQACAMgMAAIg9AEQgJAAgFgHIgKhRQgCgJAIgBIA6AAQAEAAADALIAEANgABegiIAFAsIABASABOAsQgLAAgCgEIgDgXIgNhZ");
	this.shape_103.setTransform(78,-46.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#022146").ss(1,1,1).p("AhaBYIDHgfQAXgCgCgQIgKhxQgEgNgRgBIiaAAQgMgBgEAJIg0CZQgWAWA3gHg");
	this.shape_104.setTransform(69.8,-46.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#74E3E7").ss(1,1,1).p("AhtBAIAtiHQAFgIAKAAICJAAQAOABAEAMIAJBlQACANgUADIixAbQgwAGATgUg");
	this.shape_105.setTransform(69.9,-46.4);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#8AFAFF").ss(0.5,1,1).p("AgaA7IgrAHQgpAGAQgSIAohyQADgGAJAAIB2AAQANABADAKIABANIABANIAGA6QABAMgRACIhiAPg");
	this.shape_106.setTransform(69.8,-46.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#B6B9B5").ss(0.5,1,1).p("AguAaIAAgNQALgIARgDQALgCAMAAIgXAAIgcAAIAAANAguAhIAAgHAAHghIALAAIAAAhIAdAAIAAADIAAAeAAHghIgGAAQgMABgHANIAAgOIATAAAgSAAIAAgJQAVgFAEgTAgSgTIAAAKAASAAIgNAAAArADQgrAagugD");
	this.shape_107.setTransform(84.4,-71.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f().s("#22EEFF").ss(1,1,1).p("AB1iCQACALgBAMQgBAPgFARQgDAKgEAMQgHAPgJAQQgHANgIALQgMASgOAUQgHAJgIAKQgKAKgKAJQgiAgghAMQgKACgJACQgIABgIACQgQACgMAA");
	this.shape_108.setTransform(45.9,-39.8);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f().s("#0ACDE2").ss(0.5,1,1).p("ACLiSQANgBABAVQAAAHgBAJQgDASgFAQIAAAAQgEAMgDALQgHAQgHAQQAAAAAAABQgGANgHALQgBABAAAAQgIAOgIANIgBAAQgMARgNAOQAAAAAAAAQgKALgKAKQg4A2g+AIQgNABgNAAQgwgBgHgnQgEgcASgpQAAgBABgC");
	this.shape_109.setTransform(43.2,-39.6);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#002671").ss(1,1,1).p("AhgCbQgnABgQgRQgDgEgDgFQgFgLABgPQABgdAWgsIAAAAQACgFADgFQAGgKAHgIQAAAAABgBQAXgcAegZQAYgXAfgTQATgOAagMQAMgGALgFQAAAAABAAQAggOAUgFQAQgEALgBQAAAAABAAIABAAQABAAABAAIABAAQAOABAEAKQABAHABAHIAAAAQABAigRAqIAAAAQgGAQgJAQQAAAAAAABQgHAMgIAMQgBAAAAABIAAAAQgIANgKAOIAAAAQgLAPgMARQgEAFgEAFQgGAGgGAGIAAAAQgvAtgoAOQgTAEgQADIgBAAQgOACgMAB");
	this.shape_110.setTransform(43.1,-39.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#5B605A").ss(1,1,1).p("AnuiYQhGARg+AdQgNAGgLAGQhZAtg3A7Qg4A9gGA4QgDAmATAaQAKAMAOAKQAFAJAHAIQAGAGAHAFQAKAJAOAIQAzAcBcAKQAJABAKABQABAAABAAAl8j6QADAAACAAIAHAAIA8AAIBeAAIAcAAIARAAAmBj6Qg6AIgxBYApYEqQAJABAJABQAFAAAGAAQABAAABAAQAFAAAEABQBLACBhgHQADAAAEAAAl6EnIACAAQAGAAAGgBQBxAABFgCQAGAAAFAAAMdBJIAQgFIAIgCIgNgnIgBgCIAbgOQAAgxgYhGQgXgXAKgYIAPgjIAOgiIAGgOIAFgLIAGgPIAOgkIhnAAIgVAkIgIAPIgGAKIgJAPIhDByIoEgNIgigBIgBAAIgNAAIg4gCQhGAHgVgzQgcg+ghgOQgKgEgKAAIgRAAAioEjQAFAAAFAAQACAAACAAQAFgBAGAAQAFAAAGAAQAogDAIgGIAdgWIAQgQIAQgRIA9hAIAagbIARgRIAegfIAzg1QAXghA9AEIFGgRIAOAMIA7AAIAYBNIAPgGIAAACIACAFIAEANIADALIBtgf");
	this.shape_111.setTransform(110.6,-43);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#F25039").s().p("Ag3AFQA9gcAyAKIhsAdg");
	this.shape_112.setTransform(185.3,-34.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#EDA40A").s().p("AAoATQgcgrg3AVIgLgKIAAgFIBgAAIANAcIAAAJg");
	this.shape_113.setTransform(171.1,-45);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#580000").s().p("AhDAUIB5gsIAOAlIgIACIgKgDQgygMhBAZg");
	this.shape_114.setTransform(186,-37.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#BA0204").s().p("Ag5ABIAAAAQBBgXAyANIgBAGQgygLg8Adg");
	this.shape_115.setTransform(185.1,-35.4);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#0A4386").s().p("AAOAEIAFgIIAgAAIgFAJgAgyAEIAGgIIAHAAIgFAIg");
	this.shape_116.setTransform(187.7,-67.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#BA0300").s().p("AANAUIAIgPIAgAAIgFAMIgCADgAg0AUIAJgPIAIAAIgJAPgAglgEIAIgPIAHAAIgIAPg");
	this.shape_117.setTransform(187,-67.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#E74994").s().p("AgkAUIAIgPIA1AAIgHAPgAgWgEIAIgPIAzAAIgHAPg");
	this.shape_118.setTransform(186.6,-67.6);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#167CD1").s().p("AhBBMIAuhSIA2AAIghBEIgNAHQgTAHgaAAIgJAAgAgKgVIAGgLIA0AAIgFALgAACgvIAPgcIAsAAQAEABACADIgMAYg");
	this.shape_119.setTransform(184.8,-64.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#9A0A02").s().p("AgKAHIADgDIAEgKIAOAAIgHANg");
	this.shape_120.setTransform(192.8,-66.3);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#0B2D75").s().p("AABASIAMgXQgCgDgEAAIgqAAIgDAAIgQAaIgHAAIAWgiIBkAAIgOAig");
	this.shape_121.setTransform(190.2,-71.4);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#8F0100").s().p("AAEAHIgdAAIAHgNIAsAAIgGANg");
	this.shape_122.setTransform(192.3,-68.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#003267").s().p("AgJAFIAFgJIANAAIgEAJg");
	this.shape_123.setTransform(193.4,-67.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#A2A8A8").s().p("AgwAxQgVgVAAgcQAAgcAVgUQASgSAZgCIAFAAQAcgBAVAVQAUAUABAcQgBAcgUAVQgVAUgcAAQgcAAgUgUgAgogsIgCADIgBABQgRARAAAXIAAAAIAAAFQACAVAQAQIAHAHIAFADQAOAJAQgBQAFAAAHgBIAFgCQANgDALgMQAGgFAEgHIADgEQAFgMAAgOQAAgJgDgJIgBgBIgBgDQgEgLgJgIQgMgMgOgEIgGgBIgJgBQgWAAgSAPg");
	this.shape_124.setTransform(184,-47.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#02276E").s().p("AgFA8QAngkAbg7IAQAAIgOAhQgiAzgrAbIgGABgAhMAuIAvhRIAJgPIAFgLIAIgPIAEAAIgIAPIgGALIgJAPIguBSIgEgBg");
	this.shape_125.setTransform(185.5,-61.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#C2CDE1").s().p("AgEAFQAFgEACgHIABAFQABAIgIAAg");
	this.shape_126.setTransform(87.7,-42.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#001B4A").s().p("AgOAMIgEgUIADACIACAIQACAHASgEQAIAAAAgHIgCgMIAAgBIAEAAIABAPQgCAJgHAEQgEADgGABQgLAAgCgFg");
	this.shape_127.setTransform(86.2,-43.5);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#7A8B81").s().p("AAAgZIASgXIgTBQIgRAQg");
	this.shape_128.setTransform(119,-34.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#BF2300").s().p("AgdAGIAcgcIgSBJIgaAcgAARgtIAdghIgUBSIgcAfg");
	this.shape_129.setTransform(119.1,-34.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#BF8300").s().p("AgeBIIgfgBQgRABADgWIAAgCIADABICCgDQAJABgBggQgBgSgCgUIgFgnIAGgKIABAIQAEATADAVQAGAwgCAYQgBANgCAFQgFAHg6AAIgogBg");
	this.shape_130.setTransform(97.1,-30.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#C3A200").s().p("AhGA3IADgdQBigdAgg0IAFAnQACASABAVQABAggJgCIiCADg");
	this.shape_131.setTransform(96.6,-30.9);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#A0A398").s().p("AAOAKIgthgIAcgEIAjBiIgQA8IgSAXg");
	this.shape_132.setTransform(119.2,-46.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#EE5D02").s().p("AAIAVIgjhiIAMgDIArBhIgHAeIgaAig");
	this.shape_133.setTransform(121.6,-47.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#03205C").s().p("AlLA3IAHgeIgthhIABAAIAhABQALAuAiAZQARABAYAAIABAaIAVgMIAXAKIgGgYIABAAIAbgBIFOgNQAVgBAMgNQAigzA8AEIgQAQQgZACgSASQgVAVAAAbQAAAdAVAUQAUAVAdAAQAdAAAVgVQAUgUAAgdQAAgbgUgVQgVgUgdAAQAtgcAjg0IgPAjQgLAYAXAXQAYBEAAAzIgaAOIAAACIh7AuIgBgCIgPAGIgYhOIAQAAIAAgKIgOgdIhiAAIAAAEIAMALIALALIlDATQg+gEgWAhIgzA1gADuA+IgGgDIgHgGQgQgQgBgWIgBgFIAAgBQABgWAQgRIABgBIADgDQARgPAXAAIALABIAGACQAOADAMAMQAJAJAEAKIABADIABACQADAHAAAKQAAAOgGAMIgCAEQgEAHgGAGQgLALgOAEIgEABQgHACgHAAQgRAAgNgJg");
	this.shape_134.setTransform(157,-48.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F06200").s().p("AAOgMIgvhYIAWgDIAtBiIgSBPIgaAeg");
	this.shape_135.setTransform(117.2,-44.5);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#3BF5F2").s().p("AgfAlIgLhHQAAgHAGgBIAzAAQACAAADAGIABADIAEALIAEANIABACIANAkQABAKgKAAIg1AEIgCAAQgHAAgDgGgAghgdIAHA2IABAGQADAGAIAAIArgDQAJAAgBgJIgLgfIgDgIIgFgPIgBgDIgBgCIgDgCIgqAAQgFABABAGg");
	this.shape_136.setTransform(95,-47.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#CBCBC3").s().p("AgkAqIgKhRQgCgIAIgBIA4AAQAEgBADALIAEANIgDADIgEgMIgBgDQgCgGgDABIgyAAQgHAAABAIIAKBGQAEAHAIgBIA2gDQAKAAgCgKIgNglIAAgBIADgCIAPAtQACALgMAAIg7AEIgBAAQgIAAgFgHg");
	this.shape_137.setTransform(95,-47.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#CACCC7").s().p("AA4AZIgLgZIgDgDIgEgHQgFgHgIAAIgCAAIg+AAQgLAAgDAFIgDgBIAAgBQgDgNARAAIBAAAQAOgBAFAPIAOAhIADAJg");
	this.shape_138.setTransform(94.4,-52.4);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FBD800").s().p("AhCgyIgFg8IgBgFQgBgEACgEQADgGALABIA+AAIACAAQAIAAAFAGIAEAHIADAGIALAZQAOAjALArIAAAAIAEALIAGAfIgFAKQgDgUgFgTIgDgLQgNg1gWgyQgHgSgIgDQAIADAHASQAWAyANA1IADALQAFATADAUQghA1hhAfQAHhbgLhZgAg6hmIALBTQAEAIAKgBIA7gEQALAAgBgLIgQgvIgEgOIgFgNQgDgLgEABIg4AAQgHAAABAJgABEAuIAAAAg");
	this.shape_139.setTransform(96.2,-41.3);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#D5FDFF").s().p("AgHAxIgNhcQgBgGAFAAQASgEAJAbQADAJACANIAFAsIAAABQAAAIgIAAIgNABQgEAAgDgBg");
	this.shape_140.setTransform(85.4,-49.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#0D3B76").s().p("AAQADQgCgLgDgJQgJgbgSAEQgFAAABAGIgDABIgBgIQgBgHAHAAQATgEAMAbIACAHQADAJACALIAAAAIAFAvIgEAAg");
	this.shape_141.setTransform(85.4,-50.1);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#899388").s().p("AgzAnIgSgtQgXg0gMgHQAhAOAcA8QAVAzBGgHIA4ACIABADIgbAEIgWACQgbACgcAAQgqgHgKgUg");
	this.shape_142.setTransform(108.1,-61.1);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#F8D00E").s().p("ACmAuIgPgMIgLgLQA5gVAbAsgAjOgBIAAgBIgSgNIAZgIIADgHIAIgPIAJAQIAFAIIAWAAIgNATIgCAAIAAABIAGAWIgWgKIgWALg");
	this.shape_143.setTransform(152.7,-47.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#1270C7").s().p("AiWATIgIgQIgIAPIg9gBQgQgRgCgSIHrAMQgNAZkkAAIhbAAg");
	this.shape_144.setTransform(149.7,-52.8);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#093F87").s().p("AknB4QgigbgLguIICANIBDhwIAIAAIgvBSIAEAAQAfACAXgIIAPgIIAhhEIAhAAQgbA8gpAkQg8gEghAzQgMANgWABIlNAPIgbABIAOgUIgXAAIgFgIQF9AFAPgfInrgNQACAVAQARIA9ABIgEAHIgYAHIASAOIAAAAQgZAAgQgBgAEPhcIAQgcIADAAIgPAcg");
	this.shape_145.setTransform(157.5,-60.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#333333").s().p("AjVAYIAAgBIgBgBQgGgLgCgLIgBgDQgBgJABgKIABgBIAAANIADAOQACAHAGALIAAAAIAAABIAAABIgBAAIgBAAgAAHAUIgBAAIADgSQABgKAAgJQACARgDATIgBABIgBAAgADZARIgBgBIAAAAIAFgQIADgOQABARgGAMIAAABIgBABIgBAAg");
	this.shape_146.setTransform(71.7,-15.4);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#72CCD5").s().p("AgpgrIAGA6QABAMgRACIhkAPgABYAGIA1glIALAfQABAIgJAAIgtADIgCAAQgHAAgCgFg");
	this.shape_147.setTransform(83.5,-45.1);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#042A6B").s().p("AgOAAIAcgIIABAIIgdAJg");
	this.shape_148.setTransform(80.7,-37.5);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#002671").s().p("Al5AGIgMgJIMLgEIgQAPg");
	this.shape_149.setTransform(69.2,-19.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#82E7EF").s().p("ABZhLIgPAaIiSB6IgRADgABKgxIgaAmIhlBQIgTAEgAAwgLIgOARIgVATQgiAgggAMgABKgxIAAAAg");
	this.shape_150.setTransform(45.9,-34.5);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#9CEDF3").s().p("AhvBaIDfi2QgHAPgJARIiyCWQgQADgMAAIgBgDg");
	this.shape_151.setTransform(45.2,-35.9);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FCF7F1").s().p("AgfgyIABANIhtBXIgMABgABjAFIAzgmIACAIIg1Alg");
	this.shape_152.setTransform(82.3,-45.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#C5C7C4").s().p("AiKBXIA/irQAEgMAIABIC1AAIAGACQAHAFgCAOIAKB6QgCAJgGABIjzAmIgLAAQgPAAAAgJgAhHhSIg0CZQgWAXA3gIIDHgeQAXgDgCgQIgKhxQgEgNgRgBIiaAAIgCAAQgKAAgEAIg");
	this.shape_153.setTransform(69.8,-46.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#32BACA").s().p("Ai2A2IAohyQADgGAJAAIB4AAQALABADAKIABANIh3BlIgrAHIgRABQgUAAAMgNgAA9AhIgCgLQAFADARgDQAIAAAAgIIABANQABAIgIABIgLABQgKAAgBgEgACBgoQgBgHAFAAIAsAAIADABIABADIABADIAFAPIgzAmg");
	this.shape_154.setTransform(78.6,-46.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#AFEFF1").s().p("AhtBAIAtiHQAFgIAKAAICJAAQAOABAEAMIAJBlQACANgUADIixAbIgUACQgXAAAOgQgAg4g9IgnByQgRASAqgGIArgHIAMgBIBhgPQARgCgBgMIgGg6IgBgNIgBgNQgDgKgNgBIh1AAQgJAAgEAGg");
	this.shape_155.setTransform(69.9,-46.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#3E433E").s().p("AjaESIAAgBQgHgKgCgHIgCgQIgBgNIAAABQgCAJABAJIABAGQACALAGALIgBAAIgUgCQADgLABgIIAAgGQgDgQgWADIh5AAQgOgIgLgJILuACIgQAQIhJAAQgOAHgBAYIgLABIgDAAIgKAAQAFgMAAgTIgEAQIgEAQIgLAAQAAgZgqgIIhYAAQgsAFgJAeIgLABIgDAAQAEgTgDgTQABAJgCAMIgBARIgHABQAAgXghgLQhQgIg0AIQglAIAIAeIgRgCgAmyC9IBnADQCtAEDKgIQBOgCA+gGIAfgEQBiADAGgJQADgGABgMQAbgKATgMQAigfAggiIgQBJIg+A/IsLAFQgHgJgFgIgAgDkSIAAABIABAAQABABAAAAQABAAAAAAQAAABAAAAQAAABAAABIAAAHIAAABIgFA1QgFALgLABIhaASQAyhZA6gHgAAIkEIAAgDIADgMIA8AAIBfAAIAcAAQgEBGhvABIgHABQhDAAADg5g");
	this.shape_156.setTransform(72.5,-40.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#6B756A").s().p("AC0AcIggABIhVACQg+ABgvAGIg9AHIgrAGIgeADQCpggC/AGgAicAuIAAgBIAAgCIABAAIABAAIBZgSQALgBAGgLIAGg0IAAAAIAAgIQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAIgCAAIAAgBIABgBIABgBIADACIADADIABAJQgCAbgFAZIAAABQgHANgMADQgrALgwAFIgBAAgACwAXIgBgBQAEgUgMg1IAAgBIAAAAIABgBIACAAIAAABQANAtgCAOIgDAQIgBABIgBgBg");
	this.shape_157.setTransform(76.8,-62.9);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#383838").s().p("AguAeIAAgOQALgHARgEQALgCAMgBIANAAIAdAAIAAAEIgEAAQgoAYgpAAIgIAAgAgSgQQAHgNAMAAIAGAAQgEASgVAGg");
	this.shape_158.setTransform(84.4,-72.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#A9B2AD").s().p("AgZAJIAaAAIAZAAQgOABgLACQgPAEgLAHgAABgWIAVAAQgOAAgHANg");
	this.shape_159.setTransform(82.3,-73);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AguAjIAAgDIAAgHQAuACArgaIAEAAIAAAfIAAADgAAFgBIgXAAIAAgJQAVgGAEgSIALAAIAAAhg");
	this.shape_160.setTransform(84.4,-71.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#3DE4F7").s().p("AiYBrQgEgcASgpIABgDIAPgdIABgBQAXgcAegZQgdAagVAeIgBAAQgIARgGAPQgSAtALAXIAGAJQAMANAdACIACgBIABgCQAMAAAQgCIAQgDIATgEQAfgMAkggIAUgTIAPgTIAagmIAPgYQAJgQAHgPIAFACIgOAgIAAABIgNAYIgBABIgQAbIgBAAQgMARgNAOIAAAAIgUAVQg4A2g+AIQgNABgNAAQgwgBgHgngACLhNQAFgRABgPQABgMgCgLIABAAIACgCIAAgCQgDgGgFgDIAAgBQANgBABAVIgBAQQgDASgFAQg");
	this.shape_161.setTransform(43.2,-39.6);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#033067").s().p("AkNCOIgGgJQgFgLABgPQABgdAWgsIAAAAIAFgKIANgSIgPAdIgCADQgRApAEAcQAGAnAwABQANAAANgBQA/gIA6g2IATgVIABAAQAMgOANgRIAAAAIARgbIAAgBIALgYIABgBIANggIAHgXIAAAAQAFgQAEgSIABgQQgBgVgNABIgBABIgBAAIgBgBQgJgEgRAEQAOgEALgBIABAAIABAAIACAAIABAAQAOABAEAKIACAOIAAAAQABAigRAqIAAAAQgGAQgJAQIAAABIgNAYIgBABIAAAAIgSAbIAAAAIgXAgIgIAKIgMAMIAAAAQgvAtgqAOIgjAHIgBAAIgaADIgBAAIgGAAQgiAAgPgQgAAYAEIA0iZQAFgIALAAICdAAQAQABAEANIALBzQABAQgWADIjKAcIgWACQgbAAAQgRgABViMIguCKQgTASAwgHICzgZQAUgCgBgOIgKhmQgDgMgPgBIiLAAQgKAAgEAHg");
	this.shape_162.setTransform(54.9,-39.6);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#5B605A").s().p("AlMDpIhngDQgPgKgJgNQAqARBVABQBUACB/gNID9goQAVgFATgGIgDAeIgBABQgCAWARgBIAfACIgfADQg+AHhOABQiPAHiBAAIhngCgAE9B3QgCgVgEgTIgCgJIACgDIAEgKQAVhvg1gvQheg4h9ASQiSgFh8AuIgCAAQgUAIgSAAQA+gcBGgRIABABIABAAQAwgFAqgLQANgDAGgNIAAgBQAEgbABgbIgBgJIgBgDIAEgBIAGAAIgDAMIAAACQgDA8BKgDQBvgBAEhGIARAAIAAABQALA3gDAUIAAABIABABIABgBIADgQQADgQgNgtIARAAQAKABAJADQAMAIAXAzIATAvQAKAVArAHQAdAAAagCIAxBYIgaB0QggAhgiAgQgTAMgbAJQACgXgHgygAiKh+IAegDIAsgGIA8gHQAvgGA/gBIBVgCIAfgBIg8AAQifAAiNAag");
	this.shape_163.setTransform(72.6,-44.7);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#707270").s().p("AhnDnIgIgBIgCAAIgMAAQgIgdAlgIQA0gJBOAJQAhALAAAWQhFAFg8AAIgpAAgAk1C8IB5AAQAWgDADAQIAAAGQgBAIgDALQhbgKgzgcgACQC9IBYAAQAqAIAAAZQhFAChyAAQAJgeAsgFgAFHC9IBJAAIgdAWQgIAGgoADIgLAAQABgYAOgHgAj/CLQhVgCgqgQQgUgaAEgmQAGg4A3g7QA4g9BYgtIAYgMQASAAAUgIIACgBQB8gtCSAEQB9gRBeA3QA1AvgVBxIgEAKIgCAEIgGggIgEgMIAAgBQgLgrgOgjIACAEIgDgJIgOgjQgFgPgOABIhCAAQgRAAADANIAAABIADAOIAFA9QALBagHBZQgTAGgVAFIj9AnQhyAMhPAAIgSAAgAl7BHQgBAQAFALIAGAIQAQASAngCIABAAIAagCIABgBIAjgHQAqgOAvgsIAAgBIAMgMIAIgKIAXgfIAAAAIASgaIAAAAIABAAIAPgbIAAgBQAJgQAGgPIAAgBQARgqgBghIAAgBIgCgNQgEgKgOgBIgBAAIgCAAIgBAAIgBAAQgLAAgQAFQgUAEggAOIgBABIgXAKQgaANgVAOQgfATgYAWQgeAagXAeIgBABIgNARIgFAKIAAAAQgWArgBAcgACOgOIAAALIAggKIgCgKgAgai6Ig/CsQAAANAagEIDzglQAHgCACgIIgLh9QACgOgGgFIABAAIAAAAIALgCIAAAAIAAAAQAaABAGAfQgGgfgagBIAAAAIAAAAIgLACIAAAAIgBAAIgGgCIi2AAIgBAAQgHAAgEAMgAC5i9QgHAAABAHIABAIIANBbIAEAWQACAFALAAIANgBQAKgBgBgKIgBgFIgBgRIgFgvIAAAAQgCgNgDgJIgCgHQgKgYgSAAIgFABg");
	this.shape_164.setTransform(64.9,-36);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.lf(["#076D77","#CCF5F7"],[0,1],-78.2,39.1,-64.4,56.2).s().p("AhgCGQgZgBgMgMIgEgHQgKgWARgqQAFgOAJgRQAlg2BCgqQAUgOAZgMIAXgLIABAAQA5gZATAHIAAAAIABAAQAEACABAEIACABIABABQACALgBAMQgBAPgFARIgHAWIjfC2IgCgBg");
	this.shape_165.setTransform(43.5,-40.4);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#22EEFF").s().p("AiHB9IgGgIQgLgXASgtQAGgPAIgRIABgBQAVgdAdgbQAZgWAegTQAUgOAZgNIAYgKIAAgBQAggOAVgEQASgFAKAFIABAAIABAAQAFADADAGIAAACIgCACIgBAAIgBAAIgCgCQgBgDgEgCIgBgBIAAAAQgTgHg5AZIgBABIgXALQgZAMgUAOQhCApglA3QgJAQgFAPQgRAqAKAVIAEAHQAMAMAZABIACABIABADIgBACIgCAAQgdgBgMgOg");
	this.shape_166.setTransform(43.3,-40.4);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#46AFE8").s().p("ADKAwIAAgSIAAgHIAAgEIAAhAIAMgDIAAA+IAAAEIAAAEIAAAIIAAASgAjUAwIgBgRIAAgGIAAgCIAAgCIAAgGIAAgCIADgSIACgMQAEgMAFgLIAEAAIAHAAIAAABQgHAPgEATIgDATIAAABIAAAEIAAAEIAAAHIAAASg");
	this.shape_167.setTransform(73.3,-7.6);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#217DE0").s().p("AkTAbQgLAAgKgCQgQgDgLgIIgGgFIgDgDIAFACQAMAFATAEQAPACATACIADABIIFgBIBKgHIhOANgAj9gFIgVgDQgPgDgKgHIgGgGIgCgCIADABQAMAFASAEQAOAEASACIADAAIApAAIAAAFgAi6gGIAAgEIGUAAIAAAEgADngLIATgBQAegDAogIIABAEIgIADQgiAGgdACIgTABg");
	this.shape_168.setTransform(71.7,-4.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#19479F").s().p("AkhA5QgSgEgMgKIgBAAIAAAAQgFgEgEgFIgBAAIgCgDIgBgBQgPgRAJACIAWAPQAfAMAgACIBBAAIAKAAIGUAAIANAAIAXABIBRgMQAEABgFAFQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgdAIgyAJIgFABIoRAAQgKgBgIgCgAlCAjIAGAFQALAIAQADQAJACAMABIIRAAIBOgOIhLAIIoEAAIgDAAQgTgCgPgDQgTgEgNgFIgEgCIADADgAj6AaQgJgBgIgCQgRgFgLgJIgBAAIAAAAIgJgJIAAAAIgDgBIgBgBQgNgRAIACIAUAPQAcALAgAAIArAAIAAAFIgpAAIgDAAQgSgCgOgDQgSgEgMgFIgEAAIADABIAGAFQAKAHAPAEIAUADIA4AAIAAAGgADuAZIAAgHIASgBQAegCAigHQgUAIgtAJgAizAZIAAgHIGUAAIAAAHgAizAOIAAgEIAVABIAAgBIAAgEIAAgDIAAgNIgCgMIgBgHIgDgPIAAAAIgIgBIgDAAIADgHIAIAAQBMACBegFIAIgBIABABIABAAIAAgBIADAAIALgBQByAABFgBIALAAIABABIABAAIABgBIAAgBIAKAAIADAAIALAAIgOAHIgMACIAABAgAiWgdIABAHIABAMIAAANIAAADIAAAFIAvAAIgFABIFIgCIAAg8QhFAChvAAIgPAAIgJABQhFADg7ABIgHAAIgXgBIgNAAIADAPgADuAKIASAAIBIgJIgCAAQgnAJgfACIgSABg");
	this.shape_169.setTransform(71,-7.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.instance_3}]}).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-92.2,205.2,91.2);


(lib.mc_Helicoptercopy = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.mc_Helicopter1_1();
	this.instance.setTransform(94.5,38.9,0.638,0.638,0,0,180);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-35.9,-19.9,130.4,58.2);


(lib.mc_Helicopter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.mc_Helicopter1();
	this.instance.setTransform(94.5,36.3,0.638,0.638,0,0,180);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8A0000").s().p("AgDAAQABgCACAAIAAAAQADAAABACQgBADgDABQgCgBgBgDg");
	this.shape.setTransform(-1.4,-10.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgJAEIAAgEQAKAAAJgDIAAAHg");
	this.shape_1.setTransform(42.3,-9.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#A9B2AD").s().p("AgHAAIAAgEIAQAAQgLAEgFAFg");
	this.shape_2.setTransform(42.1,-10.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#383838").s().p("AgJAGIAAgDQAFgFALgEIADAAIAAAIQgJAEgKABg");
	this.shape_3.setTransform(42.3,-10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#840701").s().p("Ah/AEIAAgHIBkAAQgEABAAACQAAADAEAAQAEAAAAgDQAAgCgEgBICbAAIAAAHg");
	this.shape_4.setTransform(1.5,-10.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#808080").s().p("AiFAEIAAgHIELAAIAAAEIAAADg");
	this.shape_5.setTransform(27.8,-10.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#961004").s().p("Ah+AEIAAgHID9AAIAAAHg");
	this.shape_6.setTransform(85.3,-10.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#808080").s().p("AiFAEIAAgHIELAAIAAAHg");
	this.shape_7.setTransform(59,-10.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#383838").s().p("AgGgEIANAAQgFAFgIAEg");
	this.shape_8.setTransform(44.1,-10.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgKAAQAKgCADgGIAHAAIAAAFIABAIIAAAEIgUAAg");
	this.shape_9.setTransform(44.5,-10.1);

	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(-18.9,30.6,0.596,0.646,0,-16.9,160.5,42.1,22.1);

	this.instance_2 = new lib.Symbol6("synched",0);
	this.instance_2.setTransform(67.8,14.6,0.594,0.648,0,9.8,-168.7,17.8,12.5);
	this.instance_2.alpha = 0;

	this.instance_3 = new lib.mc_02("synched",0);
	this.instance_3.setTransform(67.6,14.6,0.594,0.648,0,9.8,-168.7,17.3,13);

	this.instance_4 = new lib.mc_01("synched",0);
	this.instance_4.setTransform(44.9,15.8,0.594,0.648,0,9.8,-168.7,57.6,37.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance,p:{y:36.3}}]}).to({state:[{t:this.instance,p:{y:38.9}}]},2).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.9,-22.6,130.4,58.3);


(lib.dfsdSymbol4copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 248
	this.instance = new lib.dfsdSymbol248copy3("synched",0);
	this.instance.setTransform(12.9,25.4,0.463,0.463,0,4,-176);

	this.instance_1 = new lib.dfsdSymbol10copy7("single",4);
	this.instance_1.setTransform(1.9,27.7,0.829,0.829,0,0.8,-179.2);

	this.instance_2 = new lib.dfsdSymbol10copy6("synched",4,false);
	this.instance_2.setTransform(1.9,27.7,0.829,0.829,0,0.8,-179.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:4}}]},14).to({state:[{t:this.instance_2}]},17).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},8).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:12}}]},14).wait(1577));

	// gr_eyebrow_01_02_new_02.1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgbgDIAAAAQAnADAyAMIAIgMQgEAAgHACQgSgDgVgEQgZgGgVgBQgfAKgMAIQAQgFAagEg");
	this.shape.setTransform(-4.4,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#180A0A").s().p("AgbgDIAAAAIgqAJQAMgIAfgKQAVABAZAGIAnAHQAHgCAEAAIgIAMQgygMgngDg");
	this.shape_1.setTransform(-4.4,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Ag1gHQgCgFAOAFQAKgBALAAQAKgCAMAAQAOAAAGABQAFABAIAGQAJADAKAKQgMgHgHgCQgHgCgIAAQgIgCgOABQgQAAgKABQgKAAgDAAQgDAAgDAAg");
	this.shape_2.setTransform(12.7,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#180A0A").s().p("AAjACQgHgCgIAAQgIgCgOABIgaABIgNAAIgGAAIgGgHQgCgFAOAFIAVgBQAKgCAMAAQAOAAAGABQAFABAIAGQAJADAKAKIgTgJg");
	this.shape_3.setTransform(12.7,6.8);

	this.instance_3 = new lib.dfsdgr_eyebrow_01_02_new_021copy3("single",0);
	this.instance_3.setTransform(3,3.9,0.371,0.371,0,4,-176,40.1,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_3}]},14).wait(1616));

	// gr_Eye_CH_L_01_02_new_02.1 copy
	this.instance_4 = new lib.dfsdgr_Eye_CH_L_01_02_new_021copy7("single",0);
	this.instance_4.setTransform(12,11,0.564,0.518,0.1);

	this.instance_5 = new lib.dfsdgr_Eye_CH_L_01_02_new_021copy8("single",0);
	this.instance_5.setTransform(12,11,0.564,0.518,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},14).wait(1616));

	// gr_Eye_CH_r_01_02_new_02.1 copy
	this.instance_6 = new lib.dfsdgr_Eye_CH_r_01_02_new_021copy8("single",0);
	this.instance_6.setTransform(-5,9.2,0.605,0.554,4.3);

	this.instance_7 = new lib.dfsdgr_Eye_CH_r_01_02_new_021copy9("single",0);
	this.instance_7.setTransform(-5,9.2,0.605,0.554,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},14).wait(1616));

	// gr_r_nose_new_02.1
	this.instance_8 = new lib.dfsdgr_r_nose_new_021copy3("single",0);
	this.instance_8.setTransform(3.4,20.1,0.371,0.371,0,12,-168,11.2,5.2);
	this.instance_8.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1630));

	// ccc
	this.instance_9 = new lib.dfsdccccopy3("synched",0);
	this.instance_9.setTransform(0.1,2.6,0.886,0.886,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1630));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-31.6,55.1,69.8);


(lib.dfsdSymbol4copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 248
	this.instance = new lib.dfsdSymbol248copy2("synched",0);
	this.instance.setTransform(12.9,25.4,0.463,0.463,0,4,-176);

	this.instance_1 = new lib.dfsdSymbol10copy5("single",4);
	this.instance_1.setTransform(1.9,27.7,0.829,0.829,0,0.8,-179.2);

	this.instance_2 = new lib.dfsdSymbol10copy4("synched",4,false);
	this.instance_2.setTransform(1.9,27.7,0.829,0.829,0,0.8,-179.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:4}}]},14).to({state:[{t:this.instance_2}]},17).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},8).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:12}}]},14).wait(1577));

	// gr_eyebrow_01_02_new_02.1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgbgDIAAAAQAnADAyAMIAIgMQgEAAgHACQgSgDgVgEQgZgGgVgBQgfAKgMAIQAQgFAagEg");
	this.shape.setTransform(-4.4,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#180A0A").s().p("AgbgDIAAAAIgqAJQAMgIAfgKQAVABAZAGIAnAHQAHgCAEAAIgIAMQgygMgngDg");
	this.shape_1.setTransform(-4.4,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Ag1gHQgCgFAOAFQAKgBALAAQAKgCAMAAQAOAAAGABQAFABAIAGQAJADAKAKQgMgHgHgCQgHgCgIAAQgIgCgOABQgQAAgKABQgKAAgDAAQgDAAgDAAg");
	this.shape_2.setTransform(12.7,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#180A0A").s().p("AAjACQgHgCgIAAQgIgCgOABIgaABIgNAAIgGAAIgGgHQgCgFAOAFIAVgBQAKgCAMAAQAOAAAGABQAFABAIAGQAJADAKAKIgTgJg");
	this.shape_3.setTransform(12.7,6.8);

	this.instance_3 = new lib.dfsdgr_eyebrow_01_02_new_021copy2("single",0);
	this.instance_3.setTransform(3,3.9,0.371,0.371,0,4,-176,40.1,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_3}]},14).wait(1616));

	// gr_Eye_CH_L_01_02_new_02.1 copy
	this.instance_4 = new lib.dfsdgr_Eye_CH_L_01_02_new_021copy5("single",0);
	this.instance_4.setTransform(12,11,0.564,0.518,0.1);

	this.instance_5 = new lib.dfsdgr_Eye_CH_L_01_02_new_021copy6("single",0);
	this.instance_5.setTransform(12,11,0.564,0.518,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},14).wait(1616));

	// gr_Eye_CH_r_01_02_new_02.1 copy
	this.instance_6 = new lib.dfsdgr_Eye_CH_r_01_02_new_021copy5("single",0);
	this.instance_6.setTransform(-5,9.2,0.605,0.554,4.3);

	this.instance_7 = new lib.dfsdgr_Eye_CH_r_01_02_new_021copy6("single",0);
	this.instance_7.setTransform(-5,9.2,0.605,0.554,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},14).wait(1616));

	// gr_r_nose_new_02.1
	this.instance_8 = new lib.dfsdgr_r_nose_new_021copy2("single",0);
	this.instance_8.setTransform(3.4,20.1,0.371,0.371,0,12,-168,11.2,5.2);
	this.instance_8.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1630));

	// ccc
	this.instance_9 = new lib.dfsdccccopy2("synched",0);
	this.instance_9.setTransform(0.1,2.6,0.886,0.886,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1630));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-31.6,55.1,69.8);


(lib.dfsdSymbol4copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 248
	this.instance = new lib.dfsdSymbol248copy("synched",0);
	this.instance.setTransform(12.9,25.4,0.463,0.463,0,4,-176);

	this.instance_1 = new lib.dfsdSymbol10copy3("single",4);
	this.instance_1.setTransform(1.9,27.7,0.829,0.829,0,0.8,-179.2);

	this.instance_2 = new lib.dfsdSymbol10copy2("synched",4,false);
	this.instance_2.setTransform(1.9,27.7,0.829,0.829,0,0.8,-179.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:4}}]},14).to({state:[{t:this.instance_2}]},17).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},8).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:12}}]},14).wait(1577));

	// gr_eyebrow_01_02_new_02.1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgbgDIAAAAQAnADAyAMIAIgMQgEAAgHACQgSgDgVgEQgZgGgVgBQgfAKgMAIQAQgFAagEg");
	this.shape.setTransform(-4.4,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#180A0A").s().p("AgbgDIAAAAIgqAJQAMgIAfgKQAVABAZAGIAnAHQAHgCAEAAIgIAMQgygMgngDg");
	this.shape_1.setTransform(-4.4,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Ag1gHQgCgFAOAFQAKgBALAAQAKgCAMAAQAOAAAGABQAFABAIAGQAJADAKAKQgMgHgHgCQgHgCgIAAQgIgCgOABQgQAAgKABQgKAAgDAAQgDAAgDAAg");
	this.shape_2.setTransform(12.7,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#180A0A").s().p("AAjACQgHgCgIAAQgIgCgOABIgaABIgNAAIgGAAIgGgHQgCgFAOAFIAVgBQAKgCAMAAQAOAAAGABQAFABAIAGQAJADAKAKIgTgJg");
	this.shape_3.setTransform(12.7,6.8);

	this.instance_3 = new lib.dfsdgr_eyebrow_01_02_new_021copy("single",0);
	this.instance_3.setTransform(3,3.9,0.371,0.371,0,4,-176,40.1,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_3}]},14).wait(1616));

	// gr_Eye_CH_L_01_02_new_02.1 copy
	this.instance_4 = new lib.dfsdgr_Eye_CH_L_01_02_new_021copy("single",0);
	this.instance_4.setTransform(12,11,0.564,0.518,0.1);

	this.instance_5 = new lib.dfsdgr_Eye_CH_L_01_02_new_021copy4("single",0);
	this.instance_5.setTransform(12,11,0.564,0.518,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},14).wait(1616));

	// gr_Eye_CH_r_01_02_new_02.1 copy
	this.instance_6 = new lib.dfsdgr_Eye_CH_r_01_02_new_021copy("single",0);
	this.instance_6.setTransform(-5,9.2,0.605,0.554,4.3);

	this.instance_7 = new lib.dfsdgr_Eye_CH_r_01_02_new_021copy4("single",0);
	this.instance_7.setTransform(-5,9.2,0.605,0.554,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},14).wait(1616));

	// gr_r_nose_new_02.1
	this.instance_8 = new lib.dfsdgr_r_nose_new_021copy("single",0);
	this.instance_8.setTransform(3.4,20.1,0.371,0.371,0,12,-168,11.2,5.2);
	this.instance_8.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1630));

	// ccc
	this.instance_9 = new lib.dfsdccccopy("synched",0);
	this.instance_9.setTransform(0.1,2.6,0.886,0.886,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1630));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-31.6,55.1,69.8);


(lib.dfsdSymbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 248
	this.instance = new lib.dfsdSymbol248("synched",0);
	this.instance.setTransform(12.9,25.4,0.463,0.463,0,4,-176);

	this.instance_1 = new lib.dfsdSymbol10("single",4);
	this.instance_1.setTransform(1.9,27.7,0.829,0.829,0,0.8,-179.2);

	this.instance_2 = new lib.dfsdSymbol10copy("synched",4,false);
	this.instance_2.setTransform(1.9,27.7,0.829,0.829,0,0.8,-179.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:4}}]},14).to({state:[{t:this.instance_2}]},17).to({state:[{t:this.instance_1,p:{mode:"synched",startPosition:0}}]},8).to({state:[{t:this.instance_1,p:{mode:"single",startPosition:12}}]},14).wait(1577));

	// gr_eyebrow_01_02_new_02.1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgbgDIAAAAQAnADAyAMIAIgMQgEAAgHACQgSgDgVgEQgZgGgVgBQgfAKgMAIQAQgFAagEg");
	this.shape.setTransform(-4.4,5.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#180A0A").s().p("AgbgDIAAAAIgqAJQAMgIAfgKQAVABAZAGIAnAHQAHgCAEAAIgIAMQgygMgngDg");
	this.shape_1.setTransform(-4.4,5.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Ag1gHQgCgFAOAFQAKgBALAAQAKgCAMAAQAOAAAGABQAFABAIAGQAJADAKAKQgMgHgHgCQgHgCgIAAQgIgCgOABQgQAAgKABQgKAAgDAAQgDAAgDAAg");
	this.shape_2.setTransform(12.7,6.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#180A0A").s().p("AAjACQgHgCgIAAQgIgCgOABIgaABIgNAAIgGAAIgGgHQgCgFAOAFIAVgBQAKgCAMAAQAOAAAGABQAFABAIAGQAJADAKAKIgTgJg");
	this.shape_3.setTransform(12.7,6.8);

	this.instance_3 = new lib.dfsdgr_eyebrow_01_02_new_021("single",0);
	this.instance_3.setTransform(3,3.9,0.371,0.371,0,4,-176,40.1,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_3}]},14).wait(1616));

	// gr_Eye_CH_L_01_02_new_02.1 copy
	this.instance_4 = new lib.dfsdgr_Eye_CH_L_01_02_new_021copy3("single",0);
	this.instance_4.setTransform(12,11,0.564,0.518,0.1);

	this.instance_5 = new lib.dfsdgr_Eye_CH_L_01_02_new_021copy2("single",0);
	this.instance_5.setTransform(12,11,0.564,0.518,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},14).wait(1616));

	// gr_Eye_CH_r_01_02_new_02.1 copy
	this.instance_6 = new lib.dfsdgr_Eye_CH_r_01_02_new_021copy3("single",0);
	this.instance_6.setTransform(-5,9.2,0.605,0.554,4.3);

	this.instance_7 = new lib.dfsdgr_Eye_CH_r_01_02_new_021copy2("single",0);
	this.instance_7.setTransform(-5,9.2,0.605,0.554,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6}]}).to({state:[{t:this.instance_7}]},14).wait(1616));

	// gr_r_nose_new_02.1
	this.instance_8 = new lib.dfsdgr_r_nose_new_021("single",0);
	this.instance_8.setTransform(3.4,20.1,0.371,0.371,0,12,-168,11.2,5.2);
	this.instance_8.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(1630));

	// ccc
	this.instance_9 = new lib.dfsdccc("synched",0);
	this.instance_9.setTransform(0.1,2.6,0.886,0.886,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(1630));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-31.6,55.1,69.8);


(lib.dfsdSymbol4copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol 248
	this.instance_10 = new lib.dfsdSymbol248_1("synched",0);
	this.instance_10.setTransform(12.9,25.4,0.463,0.463,0,4,-176);

	this.instance_11 = new lib.dfsdSymbol10_1("single",4);
	this.instance_11.setTransform(1.9,27.7,0.829,0.829,0,0.8,-179.2);

	this.instance_12 = new lib.dfsdSymbol10copy_1("synched",4,false);
	this.instance_12.setTransform(1.9,27.7,0.829,0.829,0,0.8,-179.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11,p:{mode:"single",startPosition:4}}]},14).to({state:[{t:this.instance_12}]},17).to({state:[{t:this.instance_11,p:{mode:"synched",startPosition:0}}]},8).to({state:[{t:this.instance_11,p:{mode:"single",startPosition:12}}]},14).wait(1577));

	// gr_eyebrow_01_02_new_02.1
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AgbgDIAAAAQAnADAyAMIAIgMQgEAAgHACQgSgDgVgEQgZgGgVgBQgfAKgMAIQAQgFAagEg");
	this.shape_4.setTransform(-4.4,5.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#180A0A").s().p("AgbgDIAAAAIgqAJQAMgIAfgKQAVABAZAGIAnAHQAHgCAEAAIgIAMQgygMgngDg");
	this.shape_5.setTransform(-4.4,5.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("Ag1gHQgCgFAOAFQAKgBALAAQAKgCAMAAQAOAAAGABQAFABAIAGQAJADAKAKQgMgHgHgCQgHgCgIAAQgIgCgOABQgQAAgKABQgKAAgDAAQgDAAgDAAg");
	this.shape_6.setTransform(12.7,6.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#180A0A").s().p("AAjACQgHgCgIAAQgIgCgOABIgaABIgNAAIgGAAIgGgHQgCgFAOAFIAVgBQAKgCAMAAQAOAAAGABQAFABAIAGQAJADAKAKIgTgJg");
	this.shape_7.setTransform(12.7,6.8);

	this.instance_13 = new lib.dfsdgr_eyebrow_01_02_new_021_1("single",0);
	this.instance_13.setTransform(3,3.9,0.371,0.371,0,4,-176,40.1,6.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]}).to({state:[{t:this.instance_13}]},14).wait(1616));

	// gr_Eye_CH_L_01_02_new_02.1 copy
	this.instance_14 = new lib.dfsdgr_Eye_CH_L_01_02_new_021copy3_1("single",0);
	this.instance_14.setTransform(12,11,0.564,0.518,0.1);

	this.instance_15 = new lib.dfsdgr_Eye_CH_L_01_02_new_021copy2_1("single",0);
	this.instance_15.setTransform(12,11,0.564,0.518,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14}]}).to({state:[{t:this.instance_15}]},14).wait(1616));

	// gr_Eye_CH_r_01_02_new_02.1 copy
	this.instance_16 = new lib.dfsdgr_Eye_CH_r_01_02_new_021copy3_1("single",0);
	this.instance_16.setTransform(-5,9.2,0.605,0.554,4.3);

	this.instance_17 = new lib.dfsdgr_Eye_CH_r_01_02_new_021copy2_1("single",0);
	this.instance_17.setTransform(-5,9.2,0.605,0.554,4.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_16}]}).to({state:[{t:this.instance_17}]},14).wait(1616));

	// gr_r_nose_new_02.1
	this.instance_18 = new lib.dfsdgr_r_nose_new_021_1("single",0);
	this.instance_18.setTransform(3.4,20.1,0.371,0.371,0,12,-168,11.2,5.2);
	this.instance_18.alpha = 0.77;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1630));

	// ccc
	this.instance_19 = new lib.dfsdccc_1("synched",0);
	this.instance_19.setTransform(0.1,2.6,0.886,0.886,4);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(1630));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.3,-31.6,55.1,69.8);


(lib.sdSymbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dfsdSymbol4copy_1("synched",0);
	this.instance.setTransform(-12.5,31.4,1.11,1.11,3.3,0,0,-13.1,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regX:0,regY:0,x:3.7,y:-0.5,startPosition:3},0).wait(4).to({scaleX:1.11,scaleY:1.11,rotation:5.6,x:4,y:2.9,startPosition:7},0).wait(5).to({scaleX:1.11,scaleY:1.11,rotation:3.3,x:3.7,y:-0.5,startPosition:14},0).wait(2).to({x:3.9,y:-1.9,mode:"single",startPosition:23},0).wait(7).to({mode:"synched"},0).wait(2814));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-37,62,77.3);


(lib.sdSymbol4copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dfsdSymbol4copy4("synched",0);
	this.instance.setTransform(-12.5,31.4,1.11,1.11,3.3,0,0,-13.1,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regX:0,regY:0,x:3.7,y:-0.5,startPosition:3},0).wait(4).to({scaleX:1.11,scaleY:1.11,rotation:5.6,x:4,y:2.9,startPosition:7},0).wait(5).to({scaleX:1.11,scaleY:1.11,rotation:3.3,x:3.7,y:-0.5,startPosition:14},0).wait(2).to({x:3.9,y:-1.9,mode:"single",startPosition:23},0).wait(7).to({mode:"synched"},0).wait(2814));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-37,62,77.3);


(lib.sdSymbol4copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dfsdSymbol4copy3("synched",0);
	this.instance.setTransform(-12.5,31.4,1.11,1.11,3.3,0,0,-13.1,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regX:0,regY:0,x:3.7,y:-0.5,startPosition:3},0).wait(4).to({scaleX:1.11,scaleY:1.11,rotation:5.6,x:4,y:2.9,startPosition:7},0).wait(5).to({scaleX:1.11,scaleY:1.11,rotation:3.3,x:3.7,y:-0.5,startPosition:14},0).wait(2).to({x:3.9,y:-1.9,mode:"single",startPosition:23},0).wait(7).to({mode:"synched"},0).wait(2814));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-37,62,77.3);


(lib.sdSymbol4copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.dfsdSymbol4copy2("synched",0);
	this.instance.setTransform(-12.5,31.4,1.11,1.11,3.3,0,0,-13.1,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({regX:0,regY:0,x:3.7,y:-0.5,startPosition:3},0).wait(4).to({scaleX:1.11,scaleY:1.11,rotation:5.6,x:4,y:2.9,startPosition:7},0).wait(5).to({scaleX:1.11,scaleY:1.11,rotation:3.3,x:3.7,y:-0.5,startPosition:14},0).wait(2).to({x:3.9,y:-1.9,mode:"single",startPosition:23},0).wait(7).to({mode:"synched"},0).wait(2814));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-37,62,77.3);


(lib.sdSymbol4copy_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance_1 = new lib.dfsdSymbol4copy("synched",0);
	this.instance_1.setTransform(-12.5,31.4,1.11,1.11,3.3,0,0,-13.1,30.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(3).to({regX:0,regY:0,x:3.7,y:-0.5,startPosition:3},0).wait(4).to({scaleX:1.11,scaleY:1.11,rotation:5.6,x:4,y:2.9,startPosition:7},0).wait(5).to({scaleX:1.11,scaleY:1.11,rotation:3.3,x:3.7,y:-0.5,startPosition:14},0).wait(2).to({x:3.9,y:-1.9,mode:"single",startPosition:23},0).wait(7).to({mode:"synched"},0).wait(2814));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.8,-37,62,77.3);


(lib.Cherecter2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// GO_shoes
	this.instance = new lib.ls1("synched",0);
	this.instance.setTransform(125.2,29.6,0.096,0.096,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({x:126,y:29.9},0).wait(7).to({x:125.2,y:29.6},0).wait(7).to({x:126,y:29.9},0).wait(7));

	// GO_shoes
	this.instance_1 = new lib.GO_shoes("single",0);
	this.instance_1.setTransform(133.4,30.2,0.096,0.096,0,0,180,27.1,21.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({x:132.7},0).wait(7).to({x:133.4},0).wait(7).to({x:132.7},0).wait(7));

	// GO_LeftForeArm
	this.instance_2 = new lib.GO_LeftForeArm("single",0);
	this.instance_2.setTransform(119.1,8,0.093,0.093,0,109.8,-70.2,17.1,-1.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(7).to({regX:17.3,regY:-1,skewX:122.8,skewY:-57.2,x:121.6,y:3.5},0).wait(7).to({regX:17.1,regY:-1.3,skewX:109.8,skewY:-70.2,x:119.1,y:8},0).wait(7).to({regX:17.3,regY:-1,skewX:122.8,skewY:-57.2,x:121.6,y:3.5},0).wait(7));

	// GO_Left_hand
	this.instance_3 = new lib.GO_Left_hand("single",1);
	this.instance_3.setTransform(111.3,4.6,0.096,0.096,0,112.8,-67.2,13.3,3.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(7).to({regX:12.9,regY:3.5,skewX:125.8,skewY:-54.2,x:114.8,y:-1.6},0).wait(7).to({regX:13.3,regY:3.3,skewX:112.8,skewY:-67.2,x:111.3,y:4.6},0).wait(7).to({regX:12.9,regY:3.5,skewX:125.8,skewY:-54.2,x:114.8,y:-1.6},0).wait(7));

	// GO_talk
	this.mouth = new lib.GO_talk();
	this.mouth.setTransform(126.5,-4.1,0.096,0.096,0,4.7,-175.3,3.1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.mouth).wait(7).to({regX:2.5,skewX:18.6,skewY:-161.4,x:132,y:-5.4},0).wait(7).to({regX:3.1,skewX:4.7,skewY:-175.3,x:126.5,y:-4.1},0).wait(7).to({regX:2.5,skewX:18.6,skewY:-161.4,x:132,y:-5.4},0).wait(7));

	// GO_eyes
	this.eye = new lib.go_eyes();
	this.eye.setTransform(124.6,-6.8,0.096,0.096,0,4.7,-175.3,28.9,10.8);

	this.timeline.addTween(cjs.Tween.get(this.eye).wait(7).to({regX:29.6,regY:10,skewX:18.6,skewY:-161.4,x:130.8,y:-8.5},0).wait(7).to({regX:28.9,regY:10.8,skewX:4.7,skewY:-175.3,x:124.6,y:-6.8},0).wait(7).to({regX:29.6,regY:10,skewX:18.6,skewY:-161.4,x:130.8,y:-8.5},0).wait(7));

	// GO_head
	this.instance_4 = new lib.GO_head("single",0);
	this.instance_4.setTransform(126.6,-2.4,0.096,0.096,0,4.7,-175.3,30.9,87.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(7).to({regX:31.2,regY:88.5,skewX:18.6,skewY:-161.4,x:131.7,y:-3.7},0).wait(7).to({regX:30.9,regY:87.7,skewX:4.7,skewY:-175.3,x:126.6,y:-2.4},0).wait(7).to({regX:31.2,regY:88.5,skewX:18.6,skewY:-161.4,x:131.7,y:-3.7},0).wait(7));

	// GO_RightForeArm
	this.instance_5 = new lib.GO_RightForeArm("single",0);
	this.instance_5.setTransform(134.8,4.9,0.096,0.096,0,-129.3,50.7,14.2,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(7).to({regX:14.1,regY:-1.5,skewX:-89.8,skewY:90.2,x:136,y:6.1},0).wait(7).to({regX:14.2,regY:-0.8,skewX:-129.3,skewY:50.7,x:134.8,y:4.9},0).wait(7).to({regX:14.1,regY:-1.5,skewX:-89.8,skewY:90.2,x:136,y:6.1},0).wait(7));

	// GO_Right_hand
	this.instance_6 = new lib.GO_Right_hand("single",0);
	this.instance_6.setTransform(141.1,-0.7,0.096,0.096,0,-151,29,12.9,3.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(7).to({regX:12.8,regY:3.9,skewX:-111.6,skewY:68.4,x:144.4,y:5.8},0).wait(7).to({regX:12.9,regY:3.6,skewX:-151,skewY:29,x:141.1,y:-0.7},0).wait(7).to({regX:12.8,regY:3.9,skewX:-111.6,skewY:68.4,x:144.4,y:5.8},0).wait(7));

	// GO_body
	this.instance_7 = new lib.GO_body("single",0);
	this.instance_7.setTransform(126.2,10.6,0.096,0.096,0,-2.7,177.3,49.1,146.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({regX:49.8,regY:147.5,skewX:8.4,skewY:188.4,x:128.5,y:8.6},0).wait(7).to({regX:49.1,regY:146.8,skewX:-2.7,skewY:177.3,x:126.2,y:10.6},0).wait(7).to({regX:49.8,regY:147.5,skewX:8.4,skewY:188.4,x:128.5,y:8.6},0).wait(7));

	// GO_LeftArm
	this.instance_8 = new lib.GO_LeftArm("single",0);
	this.instance_8.setTransform(121.3,1.9,0.096,0.096,0,13.7,-166.3,2.5,18.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(7).to({regX:2.3,regY:18.7,skewX:26.7,skewY:-153.3,x:125.1,y:-1.9},0).wait(7).to({regX:2.5,regY:18.3,skewX:13.7,skewY:-166.3,x:121.3,y:1.9},0).wait(7).to({regX:2.3,regY:18.7,skewX:26.7,skewY:-153.3,x:125.1,y:-1.9},0).wait(7));

	// GO_RightArm
	this.instance_9 = new lib.GO_RightArm("single",0);
	this.instance_9.setTransform(130.3,0.9,0.096,0.096,0,-25.8,154.2,34.6,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(7).to({regX:34,regY:19,skewX:13.7,skewY:193.7,x:135.1,y:0.2},0).wait(7).to({regX:34.6,regY:19.2,skewX:-25.8,skewY:154.2,x:130.3,y:0.9},0).wait(7).to({regX:34,regY:19,skewX:13.7,skewY:193.7,x:135.1,y:0.2},0).wait(7));

	// Layer 35
	this.instance_10 = new lib.l1("synched",0);
	this.instance_10.setTransform(124,23.8,0.096,0.096,0,-15,165);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(7).to({skewX:-20.7,skewY:159.3,x:124.7,y:24.6},0).wait(7).to({skewX:-15,skewY:165,x:124,y:23.8},0).wait(7).to({skewX:-20.7,skewY:159.3,x:124.7,y:24.6},0).wait(7));

	// Layer 36
	this.instance_11 = new lib.l2("synched",0);
	this.instance_11.setTransform(124.5,15.9,0.096,0.096,0,15,-165);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(7).to({skewX:25.5,skewY:-154.5,x:125.7,y:14.9},0).wait(7).to({skewX:15,skewY:-165,x:124.5,y:15.9},0).wait(7).to({skewX:25.5,skewY:-154.5,x:125.7,y:14.9},0).wait(7));

	// Layer 37
	this.instance_12 = new lib.r2("synched",0);
	this.instance_12.setTransform(130.9,16.5,0.096,0.096,0,-15,165);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(7).to({x:132,y:15.8},0).wait(7).to({x:130.9,y:16.5},0).wait(7).to({x:132,y:15.8},0).wait(7));

	// Layer 38
	this.instance_13 = new lib.r1("synched",0);
	this.instance_13.setTransform(132.7,24.8,0.096,0.096,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(7).to({skewX:14,skewY:194,x:133.5,y:24.2},0).wait(7).to({skewX:0,skewY:180,x:132.7,y:24.8},0).wait(7).to({skewX:14,skewY:194,x:133.5,y:24.2},0).wait(7));

	// Layer 13
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(102,102,102,0.2)").ss(1,1,1).p("AgCAEIACABIgFACQgJgBAAAGQAMgCADADQAKgCAJAAAAXAAIgOgJIgKgDIgLABQgCABADABIgFABQgBABACABIgFgBQgCABAAACQABAAABABIAAAAIASADAAFgHIgFgBQgDAAgCgBIAAAAIgGAAAgPgGIABABIABgBIAGABIAAAAIAFABQACABADAAAgCAEIAAAAIgCgBIgBAAIAAABIgPgDIgBAAIAAgBQAAAAALAAQAAAAABAAQAAAAAAAAIABAAQAAAAACAAQABAAACAAIABAAIABAAIABAAAgDAEIABAAAgBAEIgBAA");
	this.shape.setTransform(86.1,-8.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9C6C").s().p("AAFgBIgFgBIgHgCIgEAAIgFAAQgBAAgBAAQAAgBgBAAQAAAAAAgBQABAAAAAAIAMgBIAKADIANAHIADAFg");
	this.shape_1.setTransform(86.6,-8.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC488").s().p("AgPALQAAgHAJACIAGgCIgDgBIABAAIAAAAIgBAAIAAAAIgBAAIABAAIgCgBIgBAAIAAABIgPgDIgBAAIAAAAQAAgBALAAIABABIAAgBIABABIACAAIADAAIABAAIABAAIACAAIgCAAIgBAAIgSgEIAAAAIgCgBQAAgBAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIAFABQgBAAAAgBQgBAAAAAAQAAAAAAgBQABAAAAgBIAFAAIAGAAIAAAAIAGABIAEAAIAGACIAOAJQABABgDADIgDAEIgTACQgDgDgMACgAgIgGIAAAAIAFABIAFABIgFgBIgFgBIAAAAgAgIgGIgGgBIgBABIgBgBIABABIABgBgAAEgJgAAAgJIgGgBIAAAAIAEgBIAGACg");
	this.shape_2.setTransform(86.2,-8);

	this.instance_14 = new lib.gr_ch_forarm_Lcopy("single",0);
	this.instance_14.setTransform(88.9,-2.5,0.059,0.06,0,-172.4,11.3,10.7,-33.8);

	this.instance_15 = new lib.gr_cH_Arm_01_02_new_031copy("single",1);
	this.instance_15.setTransform(97.4,0.3,0.057,0.061,0,91.3,91.4,26,-58.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgCAEIACABIgFACQgJgBAAAGQAMgCADADQAKgCAJAAAAXAAIgOgJIgKgDIgLABQgCABADABIgFABQgBABACABIgFgBQgCABAAACQABAAABABIAAAAIASADAAFgHIgFgBQgDAAgCgBIAAAAIgGAAAgPgGIABABIABgBIAGABIAAAAIAFABQACABADAAAgCAEIAAAAIgCgBIgBAAIAAABIgPgDIgBAAIAAgBQAAAAALAAQAAAAABAAQAAAAAAAAIABAAQAAAAACAAQABAAACAAIABAAIABAAIABAAAgDAEIABAAAgBAEIgBAA");
	this.shape_3.setTransform(86.1,-8.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AABgKIAFACQADADACAAIAAABIAFAEIADABQABACgDgBAAAgGIAGAEIAEACIABAAIAFABIAAAAIABABIAEADQACACgCABQAAAAgBAAIgBgBIgQgHAgPgQIAPABIAKAGIAJAIQAAABgDAAAAAADIAAAAIAAAAIABABIABAAIAAABIAOAIIAAAAIABAAQABgCgJgHQAAAAgBAAQAAAAAAgBIgBAAQAAAAgBAAQgBgCgBAAIgBgBIgDAAAgCgBIABgBAAAAEIgBgCIABAGQAIAEgEAFQgGgIgFgDQgIgGgGgE");
	this.shape_4.setTransform(95.1,16.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC488").s().p("AgHAGIgOgMIAAgEQgBgEACgBIASABIADADIAFACIAFADIAAAAIAFAFIADABQABABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIAEADQABAAAAABQAAAAAAABQAAAAAAAAQAAAAgBABIgBAAIgBgBIgQgGIgDgBIADABIABAAIACABIABABIABAAIAAABIABAAQAJAGgBACIgBABIAAgBIgOgHIAAgBIgBAAIgBgBIAAgBIAAABIAAAAIAAAAIAAAAIgBgBIABAGQAIAEgEAFQgGgIgFgCgAAKgBIABAAIAFABIAAAAIABABIgBgBIAAAAIgFgBIgBAAgAAGgDIAEACIgEgCIgGgFIAAAAIAGAFgAgCgCIACABIgBgCgAALgGIAAAAgAAGgJIgFgCIAIADIACACIgFgDgAABgLg");
	this.shape_5.setTransform(95.1,16.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#CC9C6C").s().p("AARAHIgFgEIAAgBIgCgCIgIgBIgCgDIgTgBIAFgCIAOABIALAGIAJAGQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAIgCgBgAAAABIABAAIAHAEIgIgEg");
	this.shape_6.setTransform(95,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15,p:{regX:26,regY:-58.3,skewX:91.3,skewY:91.4,x:97.4,y:0.3}},{t:this.instance_14,p:{regX:10.7,regY:-33.8,skewX:-172.4,skewY:11.3,x:88.9,y:-2.5}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_15,p:{regX:25.7,regY:-58.1,skewX:22.6,skewY:22.7,x:96.5,y:3}},{t:this.instance_14,p:{regX:9.8,regY:-31.8,skewX:-5.1,skewY:178.6,x:91.6,y:9.9}}]},7).to({state:[{t:this.instance_15,p:{regX:26,regY:-58.3,skewX:91.3,skewY:91.4,x:97.4,y:0.3}},{t:this.instance_14,p:{regX:10.7,regY:-33.8,skewX:-172.4,skewY:11.3,x:88.9,y:-2.5}},{t:this.shape_2},{t:this.shape_1},{t:this.shape_3}]},7).to({state:[{t:this.instance_15,p:{regX:25.7,regY:-58.1,skewX:22.6,skewY:22.7,x:96.5,y:3}},{t:this.instance_14,p:{regX:9.8,regY:-31.8,skewX:-5.1,skewY:178.6,x:91.6,y:9.9}},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},7).wait(7));

	// Layer 17
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("rgba(102,102,102,0.2)").ss(1,1,1).p("AADAEIAAAAIACgBIABAAIAAABIAPgDIABAAIAAgBQAAAAgLAAQAAAAgBAAQAAAAAAAAIgBAAQAAAAgCAAQgBAAgCAAIgBAAIgBAAIgCAAAAQgGIAFgBQACABAAACQgBAAgBABIAAAAIgSADAAMgJIAFABQABABgCABIgBABIgBgBIgGABIAAAAIgFABQgDABgCAAAgEgHIAEgBQAEAAACgBIAAAAIAGAAAADAEIgDABIAGACQAJgBAAAGQgMgCgDADQgKgCgJAAAgWAAIAOgJIAKgDIALABQACABgDABAACAEIABAAAAEAEIgBAA");
	this.shape_7.setTransform(116.1,-8.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#CC9C6C").s().p("AgQADIANgHIAKgDIAMABQAAAAABAAQAAABAAAAQgBAAAAABQgBAAgBAAIgFAAIgEAAIgIACIgEABIgPAJIADgFg");
	this.shape_8.setTransform(115.5,-8.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFC488").s().p("AgSAJIgDgCQgDgEABgCIAOgIIAGgCIAGgBIAEAAIAAAAIgGABIgEAAIAEAAIAGgBIAAAAIAGAAIAFABQAAAAABAAQAAABAAAAQAAAAgBAAQAAABgBAAIgBAAIgBAAIgGABIAAgBIAAABIgFAAIgFABIAFgBIAFAAIAAAAIAGgBIABAAIABAAIAFgBQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIgCABIAAAAIgSAFIgBAAIgDAAIADAAIABAAIABAAIADAAIACAAIABAAIAAAAIABAAQALgBAAABIAAAAIgBAAIgPACIAAAAIgBAAIgCAAIgBAAIAAABIABAAIAAgBIABAAIgBABIgDABIAGACQAJgBAAAFQgMgBgEACIgSgCg");
	this.shape_9.setTransform(116,-8);

	this.instance_16 = new lib.gr_ch_forarm_Lcopy("single",0);
	this.instance_16.setTransform(113.3,-2.5,0.059,0.06,0,172.4,168.7,10.7,-33.8);

	this.instance_17 = new lib.gr_cH_Arm_01_02_new_031copy("single",1);
	this.instance_17.setTransform(104.8,0.4,0.057,0.061,0,-91.3,88.6,26,-58.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAAADIACgBIgCAGQgHAEAEAFQAGgJAFgCQAIgGAGgEAAAgKIgFACQgDADgCAAIAAABIgFAEIgDABQgBACADgBIgEADQgCACACABQAAAAABAAIABgBIAQgHIACAAAAQgQIgQABIgJAGIgJAHQAAACADAAAADgCIgBAAAAAADIAAAAIAAAAIAAABIgBAAIAAABIgOAIIAAAAIgBAAQgBgCAJgHQAAAAABAAQAAgBAAAAIABAAQAAAAABAAQABgCABAAIABgBAAAgHIgFAEIgEADIgBAAIgFABIAAAAIgBAB");
	this.shape_10.setTransform(105.5,16);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFC488").s().p("AAAAHIACgGIgCABIAAAAIAAAAIAAAAIAAgBIAAABIAAABIgBAAIAAAAIgOAIIAAABIgBgBQgBgCAJgGIABAAIAAgBIABAAIABgBIACgBIABAAIACgBIgCABIgQAGIgBABIgBAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAAAABgBIAEgDIABgBIAAAAIAFgBIABAAIAEgDIgEADIAAAAIgBAAIgFABIAAAAIgBABQgBAAgBAAQAAAAAAAAQAAAAAAAAQgBAAABgBIADgBIAFgFIAAAAIAFgDIAFgDIADgCIASgBQACABgBAEIAAAEIgOAMQgFACgGAIQgEgFAHgEgAAAgBIADgCIgBAAIgCACgAgFgEIAFgDIAAAAIgFADIAAAAgAgIgIIAIgEIgFADIgFADgAAAgMg");
	this.shape_11.setTransform(105.5,16.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC9C6C").s().p("AgTAGIAJgGIAKgGIAPgBIAFACIgSABIgEADIgHABIgCACIAAABIgGAEIgBABQAAAAAAgBQgBAAAAAAQAAAAAAAAQAAgBAAAAgAAAABIAAAAIgHAEg");
	this.shape_12.setTransform(105.6,15.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AABgKIAFACQADADACAAIAAABIAFAEIADABQABACgDgBAAAgGIAGAEIAEACIABAAIAFABIAAAAIABABIAEADQACACgCABQAAAAgBAAIgBgBIgQgHAgPgQIAPABIAKAGIAJAIQAAABgDAAAAAADIAAAAIAAAAIABABIABAAIAAABIAOAIIAAAAIABAAQABgCgJgHQAAAAgBAAQAAAAAAgBIgBAAQAAAAgBAAQgBgCgBAAIgBgBIgDAAAgCgBIABgBAAAAEIgBgCIABAGQAIAEgEAFQgGgIgFgDQgIgGgGgE");
	this.shape_13.setTransform(95.1,16.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFC488").s().p("AgHAGIgOgMIAAgEQgBgEACgBIASABIADADIAFACIAFADIAAAAIAFAFIADABQABABgBAAQAAAAAAAAQAAAAgBAAQAAAAgBAAIAEADQABAAAAABQAAAAAAABQAAAAAAAAQAAAAgBABIgBAAIgBgBIgQgGIgDgBIADABIABAAIACABIABABIABAAIAAABIABAAQAJAGgBACIgBABIAAgBIgOgHIAAgBIgBAAIgBgBIAAgBIAAABIAAAAIAAAAIAAAAIgBgBIABAGQAIAEgEAFQgGgIgFgCgAAKgBIABAAIAFABIAAAAIABABIgBgBIAAAAIgFgBIgBAAgAAGgDIAEACIgEgCIgGgFIAAAAIAGAFgAgCgCIACABIgBgCgAALgGIAAAAgAAGgJIgFgCIAIADIACACIgFgDgAABgLg");
	this.shape_14.setTransform(95.1,16.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#CC9C6C").s().p("AARAHIgFgEIAAgBIgCgCIgIgBIgCgDIgTgBIAFgCIAOABIALAGIAJAGQAAAAAAABQAAAAAAAAQAAAAgBAAQAAABAAAAIgCgBgAAAABIABAAIAHAEIgIgEg");
	this.shape_15.setTransform(95,15.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AAMgJIAFABQABABgCABIAFgBQACABAAACQgBAAgBABIAAAAIgSADIgBAAIgCAAAADAEIAAAAIACgBIABAAIAAABIAPgDIABAAIAAgBQAAAAgLAAQAAAAgBAAQAAAAAAAAIgBAAQAAAAgCAAQgBAAgCAAIgBAAAAQgGIgBABIgBgBIgGABIAAAAIgFABQgDABgCAAAgEgHIAEgBQAEAAACgBIAAAAIAGAAAADAEIgDABIAGACQAJgBAAAGQgMgCgDADQgKgCgJAAAgWAAIAOgJIAKgDIALABQACABgDABAACAEIABAAAAEAEIgBAA");
	this.shape_16.setTransform(116.1,-8.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFC488").s().p("AgSAJIgDgCQgDgEABgCIAOgIIAGgCIAGgBIAEAAIAAAAIgGABIgEAAIAEAAIAGgBIAAAAIAGAAIAFABQAAAAABAAQAAABAAAAQAAAAgBAAQAAABgBAAIAFgBQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAAAIgCABIAAAAIgSAFIgBAAIgDAAIADAAIABAAIABAAIADAAIACAAIABAAIAAAAIABAAQALgBAAABIAAAAIgBAAIgPACIAAAAIgBAAIgCAAIABAAIgBABIAAgBIgBAAIAAABIABAAIgDABIAGACQAJgBAAAFQgMgBgEACIgSgCgAAJgGIgFAAIgFABIAFgBIAFAAIAAAAIAAgBgAAJgGIAGgBIABAAIABAAIgBAAIgBAAg");
	this.shape_17.setTransform(116,-8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AAAADIACgBIgCAGQgHAEAEAFQAGgJAFgCQAIgGAGgEAAQgQIgQABIgJAGIgJAHQAAACADAAIgDABQgBACADgBIgEADQgCACACABQAAAAABAAIABgBIAQgHIACAAAAAgKIgFACQgDADgCAAIAAABIgFAEAADgCIgBAAAAAADIAAAAIAAAAIAAABIgBAAIAAABIgOAIIAAAAIgBAAQgBgCAJgHQAAAAABAAQAAgBAAAAIABAAQAAAAABAAQABgCABAAIABgBAAAgHIgFAEIgEADIgBAAIgFABIAAAAIgBAB");
	this.shape_18.setTransform(105.5,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17,p:{regX:26,regY:-58.3,skewX:-91.3,skewY:88.6,x:104.8,y:0.4}},{t:this.instance_16,p:{regX:10.7,regY:-33.8,skewX:172.4,skewY:168.7,x:113.3,y:-2.5}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7}]}).to({state:[{t:this.instance_17,p:{regX:25.7,regY:-58.1,skewX:-22.6,skewY:157.3,x:103.8,y:3}},{t:this.instance_16,p:{regX:9.8,regY:-31.8,skewX:5.1,skewY:1.4,x:108.6,y:9.9}},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},7).to({state:[{t:this.instance_17,p:{regX:26,regY:-58.3,skewX:-91.3,skewY:88.6,x:104.8,y:0.4}},{t:this.instance_16,p:{regX:10.7,regY:-33.8,skewX:172.4,skewY:168.7,x:113.3,y:-2.5}},{t:this.shape_17},{t:this.shape_8},{t:this.shape_16}]},7).to({state:[{t:this.instance_17,p:{regX:25.7,regY:-58.1,skewX:-22.6,skewY:157.3,x:103.8,y:3}},{t:this.instance_16,p:{regX:9.8,regY:-31.8,skewX:5.1,skewY:1.4,x:108.6,y:9.9}},{t:this.shape_12},{t:this.shape_11},{t:this.shape_18}]},7).wait(7));

	// Layer 14
	this.instance_18 = new lib.sdSymbol4copy2("synched",769);
	this.instance_18.setTransform(101,-6.9,0.121,0.121,0,4.5,-175.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(7).to({y:-4.2},0).wait(7).to({y:-6.9},0).wait(7).to({y:-4.2},0).wait(7));

	// Layer 15
	this.instance_19 = new lib.gr_Ch_Body_01_021copy("single",3);
	this.instance_19.setTransform(100.8,13,0.057,0.061,0,-3.5,175.9,-3,141.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(7).to({y:15.6},0).wait(7).to({y:13},0).wait(7).to({y:15.6},0).wait(7));

	// Layer 16
	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("rgba(102,102,102,0.2)").ss(1,1,1).p("AgCgIQgCgBgBAAQgDAAAAAFQABADABAAQAAABABAAQgBAAAAAFQAAABAAABQgBAAgBAAQgBAAAAABQAAAAAAABIAAAAQAAABABAAQACAAABgCQABgBAAgCQAAgFABgBQABgBACgBQACADABAAQABAAABABQACADACABQABAAAAAAIABgBQAAAAAAgBQgBAAAAAAIgBAAQgBgBgBgCQgBAAgBgBQAAgCgCgDIAAgBIAAAAQgBgBAAAAQgBAAgBAAQAAAAAAABQAAABAAABIAAAAIAAgBQABAAAAABQABAAAAABIABACQgBAAgCgCIAAABIgBAAQABgCgCgDgAAAgEQAAgBAAAAAgBgFQgDgCgBAAQgBAAAAADQAAABABAAQAAABABgBQABAAABgCgAAAgHQAAgBgBAAIgBAA");
	this.shape_19.setTransform(98.2,32);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#53412F").s().p("AgJAJIAAAAIAAgBIAAgBIACAAIAAgCIABgFIgBgBIgBgDQAAgFACAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABAEIAAABIABAAIAAgBIACACIAAgCIgBgBIgBgBIAAABIAAAAIAAABIAAABIgBAAIAAgBIgBgEIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIAAACIAAgCIAAgBIABAAIABABIABAAIAAABIACAFIACABIACADIAAAAIABAAIAAABIAAABIgBAAQgCgBgCgDIgCgBIgDgDIgDACQgCABAAAFQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAIAAgBgAgGgEIAAABIACAAIACgCIABAAIgFgCIAAADg");
	this.shape_20.setTransform(98.2,32);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("rgba(66,66,66,0.2)").ss(1,1,1).p("AAGgBQgHgDgEAH");
	this.shape_21.setTransform(98.6,33.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(102,102,102,0.2)").ss(1,1,1).p("AAAAJIAAABQAEgDAHABIgBgBIgBgCIAAgBIgBgCIgBgCIgBgBIgCgFQgGgHgHAKIADADIABABIABACIACACIABACgAgGAAQAHgFAFAEAAHAAQgFgDgHAEAAIACQgFgCgHADAAJAFQgEgDgGAFAAKAHQgFgDgFAFAAJAEQgFgEgGAF");
	this.shape_22.setTransform(97.9,31.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#714D2D").s().p("AAAAJQAFgFAFADIAAABQgGgBgEADgAgCAFQAFgFAFAEIABABQgFgDgFAFgAgFABQAHgEAEADIACACQgGgCgFADgAgJgDQAHgKAGAHIACAFQgFgEgIAFg");
	this.shape_23.setTransform(97.9,31.9);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#53412F").s().p("AgCAFQAFgFAFACIABACQgFgCgFAEgAgFABQAGgDAGACIAAABQgFgBgGACgAgIgBQAIgGAFADIAAACQgFgDgGAFg");
	this.shape_24.setTransform(98,32.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(102,102,102,0.2)").ss(1,1,1).p("AgUgJIgCADIAAAFIAFAGIACAAIAGAKIADAGQAQAIANgJIAAgJIgBgCQAAgIgIgEQgGgKgCgJIgCgBQgEAHgJgDQgCAAgCgCIgCgDIgDAFIgCAKIAAACIAFAHIACAAIACACIABABIAFAIQACAEAHABQAKABAHgFQAAgCABgB");
	this.shape_25.setTransform(98,33.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#80664D").s().p("AAAACIAAAAIgFgFIAAgFIACgEIAAACIADAHIACACIACABIABAAIAAADIAAACIgBACIACAGg");
	this.shape_26.setTransform(96.3,33.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AB6C43").s().p("AABAKIgBgBIgEgHIAAgCIABgIIADgFIAAAEIAFACIAAACQAAAEgCACIgBAHIABAGg");
	this.shape_27.setTransform(96.4,32.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#714D2D").s().p("AAAAUQgIgBgCgEIgFgIIAAgBIgBgFIABgFQACgEAAgEIAAgDQAJADAEgHIABABQACAJAHAJQAIAFgBAIIgBADQgFAEgHAAIgEAAg");
	this.shape_28.setTransform(98.4,33.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#53412F").s().p("AgMAHIgCgGIgDgEIABgCIABgCIgBgCIAFAIQACACAJABQAIABAHgDIABgDIABACIAAAHQgHAEgIAAQgFAAgJgDg");
	this.shape_29.setTransform(98.5,34.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("rgba(0,0,0,0.2)").ss(1,1,1).p("AgCgIQgCgBgBAAQgDAAAAAFQABADABAAQAAABABAAQgBAAAAAFQAAABAAABQgBAAgBAAQgBAAAAABQAAAAAAABIAAAAQAAABABAAQACAAABgCQABgBAAgCQAAgFABgBQABgBACgBQACADABAAQABAAABABQACADACABQABAAAAAAIABgBQAAAAAAgBQgBAAAAAAIgBAAQgBgBgBgCQgBAAgBgBQAAgCgCgDIAAgBIAAAAQgBgBAAAAQgBAAgBAAQAAAAAAABQAAABAAABIAAAAIAAgBQABAAAAABQABAAAAABIABACQgBAAgCgCIAAABIgBAAQABgCgCgDgAAAgHQAAgBgBAAIgBAAAgBgFQgDgCgBAAQgBAAAAADQAAABABAAQAAABABgBQABAAABgCgAAAgEQAAgBAAAA");
	this.shape_30.setTransform(98,32);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#53412F").s().p("AgJAJIgBAAIABgBIAAgBIACAAIAAgCIACgFIgCgBIgBgDQAAgFADAAQAAAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABAEIAAABIABAAIAAgBIADACIgBgCIgBgBIgBgBIAAABIAAAAIAAABIAAABIgBAAIAAgBIgBgEIABAAQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIAAACIAAgCIAAgBIACAAIABABIAAAAIAAABIACAFIABABIADADIAAAAIACAAIAAABIgBABIgBAAQgCgBgCgDIgCgBIgEgDIgCACQgBABAAAFQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAIAAgBgAgGgEIABABIABAAIACgCIABAAIgEgCIgBADgAgCgIg");
	this.shape_31.setTransform(98,32);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AhegmQCDggA6B0");
	this.shape_32.setTransform(98.4,33.7,0.069,0.074,0,0,180);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AhfgmIAdhHQB/hmBqCPIgtA/IgSAWIgZAkIgQAXIgWAeIgQAXIgRAXQhHgthnASIAJgVIAMgcIAIgTIAMgaIARgngAiJA5QBQgwB4BDAh9AfQBQgxB8BHAidBoQBJglBtA+AiRBMQBLgkBvBCAB6gFQiIhXhRA2AhsgIQBSg1CCBO");
	this.shape_33.setTransform(97.6,31.9,0.065,0.07,0,0,180);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#714D2D").s().p("AimB9IAJgVQBJglBtA+IgRAXQhHgthnASgAiRBMIAIgTQBQgwB4BDIgWAeQhvhChLAkgAh9AfIARgnQBSg1CCBOIgZAkQh8hHhQAxgAhggmIAehHQB/hmBqCPIgtA/QiIhXhSA2g");
	this.shape_34.setTransform(97.6,31.9,0.065,0.07,0,0,180);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#53412F").s().p("AiLBGIAMgdQBLgjBvBCIgQAWQhtg9hJAlgAh3AXIAMgZQBQgyB8BGIgQAYQh4hChQAvgAhagqIAMgfQBQg1CKBWIgSAZQiChQhSA1g");
	this.shape_35.setTransform(97.7,32.1,0.065,0.07,0,0,180);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("ACZA+QACg1g3gqQguhEgNg7IgKgJQgnAvg+gSQgQgEgSgJIgMgVIgUAdIgKBHIgCAPIAhAuIAQALIANAUIAEAFIAjA4QAPAYA/AKQBCAJAygnQAEgLACgKgAiShKIgRAYIAAAkIAkAwIANAAIAqBLIAXAqQB6A0Bbg/IAAg/IgLgP");
	this.shape_36.setTransform(97.7,33.5,0.144,0.144);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#80664D").s().p("AACARIgLAAIgjgwIAAgkIAQgYIgBAPIAeAuIAQALIANAUIAEAEIAGARQAAAEgFALIgEANQAAAOAOAbIgBABg");
	this.shape_37.setTransform(96,33.8,0.144,0.144);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#AB6C43").s().p("AAHBKIgNgLIghguIACgPIAKhEIAVgdIAJAUQASAJAQAFIADASQAAAcgNAbQgNAeAAATQAAALAIAXIgBABg");
	this.shape_38.setTransform(96.1,32.4,0.144,0.144);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#714D2D").s().p("AABCMQg/gKgOgXIgkg5IgDgFIABgBQgIgXAAgLQAAgRAMgeQANgdAAgcIgDgSQA+ARAoguIAJAIQANA8AuBEQA3AqgCA0IgGAWQgoAfgyAAQgNAAgNgCg");
	this.shape_39.setTransform(98.1,33.1,0.144,0.144);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#53412F").s().p("AhYA0IgXgqIABgBQgOgZAAgOIAFgNQAEgLAAgEIgGgQIAkA4QAOAWBCAKQA/AJAyglIAGgVIALAPIAAA9QgxAig8AAQgvAAg5gXg");
	this.shape_40.setTransform(98.3,35,0.144,0.144);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgCgIQgCgBgBAAQgDAAAAAFQABADABAAQAAABABAAQgBAAAAAFQAAABAAABQgBAAgBAAQgBAAAAABQAAAAAAABIAAAAQAAABABAAQACAAABgCQABgBAAgCQAAgFABgBQABgBACgBQACADABAAQABAAABABQACADACABQABAAAAAAIABgBQAAAAAAgBQgBAAAAAAIgBAAQgBgBgBgCQgBAAgBgBQAAgCgCgDIAAgBIAAAAQgBgBAAAAQgBAAgBAAQAAAAAAABQAAABAAABIAAAAIAAgBQABAAAAABQABAAAAABIABACQgBAAgCgCIAAABIgBAAQABgCgCgDgAAAgEQAAgBAAAAAgBgFQgDgCgBAAQgBAAAAADQAAABABAAQAAABABgBQABAAABgCgAAAgHQAAgBgBAAIgBAA");
	this.shape_41.setTransform(98.2,32);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#53412F").s().p("AgJAJIAAAAIAAgBIAAgBIACAAIAAgCIABgFIgBgBIgBgDQAAgFACAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABAEIAAABIABAAIAAgBIAAABIgBAAIAAgBIgBgEIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIAAACIAAABIACACIAAgCIgBgBIgBgBIAAABIAAAAIAAgCIAAgBIABAAIABABIABAAIAAABIACAFIACABIACADIAAAAIABAAIAAABIAAABIgBAAQgCgBgCgDIgCgBIgDgDIgDACQgCABAAAFQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAIAAgBgAgGgEIAAABIACAAIACgCIABAAIgFgCIAAADgAAAgHIAAAAg");
	this.shape_42.setTransform(98.2,32);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgCgIQgCgBgBAAQgDAAAAAFQABADABAAQAAABABAAQgBAAAAAFQAAABAAABQgBAAgBAAQgBAAAAABQAAAAAAABIAAAAQAAABABAAQACAAABgCQABgBAAgCQAAgFABgBQABgBACgBQACADABAAQABAAABABQACADACABQABAAAAAAIABgBQAAAAAAgBQgBAAAAAAIgBAAQgBgBgBgCQgBAAgBgBQAAgCgCgDIAAgBIAAAAQgBgBAAAAQgBAAgBAAQAAAAAAABQAAABAAABIAAAAIAAgBQABAAAAABQABAAAAABIABACQgBAAgCgCIAAABIgBAAQABgCgCgDgAAAgHQAAgBgBAAIgBAAAgBgFQgDgCgBAAQgBAAAAADQAAABABAAQAAABABgBQABAAABgCgAAAgEQAAgBAAAA");
	this.shape_43.setTransform(98,32);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AhfgmIAdhHQB/hmBqCPIgtA/IgSAWIgZAkIgQAXIgWAeIgQAXIgRAXQhHgthnASIAJgVIAMgcIAIgTIAMgaQBQgxB8BHAiRBMQBLgkBvBCAidBoQBJglBtA+AiJA5QBQgwB4BDAh9AfIARgnQBSg1CCBOAB6gFQiIhXhRA2AhsgIIANge");
	this.shape_44.setTransform(97.6,31.9,0.065,0.07,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19}]}).to({state:[{t:this.shape_40,p:{x:98.3}},{t:this.shape_39,p:{x:98.1}},{t:this.shape_38,p:{x:96.1}},{t:this.shape_37,p:{x:96}},{t:this.shape_36,p:{x:97.7}},{t:this.shape_35,p:{x:97.7}},{t:this.shape_34,p:{x:97.6}},{t:this.shape_33,p:{x:97.6}},{t:this.shape_32,p:{x:98.4}},{t:this.shape_31},{t:this.shape_30}]},7).to({state:[{t:this.shape_40,p:{x:98.5}},{t:this.shape_39,p:{x:98.4}},{t:this.shape_38,p:{x:96.4}},{t:this.shape_37,p:{x:96.2}},{t:this.shape_36,p:{x:97.9}},{t:this.shape_35,p:{x:98}},{t:this.shape_34,p:{x:97.9}},{t:this.shape_33,p:{x:97.9}},{t:this.shape_32,p:{x:98.6}},{t:this.shape_42},{t:this.shape_41}]},7).to({state:[{t:this.shape_40,p:{x:98.3}},{t:this.shape_39,p:{x:98.1}},{t:this.shape_38,p:{x:96.1}},{t:this.shape_37,p:{x:96}},{t:this.shape_36,p:{x:97.7}},{t:this.shape_35,p:{x:97.7}},{t:this.shape_34,p:{x:97.6}},{t:this.shape_44},{t:this.shape_32,p:{x:98.4}},{t:this.shape_31},{t:this.shape_43}]},7).wait(7));

	// Layer 18
	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("rgba(66,66,66,0.2)").ss(1,1,1).p("AgCgIQgCgBgCAAQgCAAAAAFQAAADABAAQABABAAAAQgBAAABAFQAAABgBABQAAAAgCAAQAAAAAAABQgBAAAAABIABAAQAAABAAAAQADAAABgCQABgBAAgCQgBgFACgBQABgBABgBQACADACAAQABAAABABIAAAAQACADACABQABAAAAAAIAAgBQAAAAAAgBIAAAAQAAAAgBAAQgBgBgCgCQgBAAAAgBQAAgCgCgDIAAAAIAAgBQgBgBgBAAQgBAAAAAAQAAAAAAABQAAgBgCAAgAAAgFIAAAAQAAgBAAAAQABAAAAABQAAAAABABIAAACQAAAAgCgCIAAABIgBAAQABgCgCgDAAAgHQAAABAAABAAAgEQAAgBAAAAAgCgFQgCgCgBAAQgBAAAAADQAAABAAAAQABABABgBQABAAABgCg");
	this.shape_45.setTransform(104.2,32);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#53412F").s().p("AgJAJIgBAAIABgBIAAgBIACAAIABgCQgBgFABAAIgBgBIgBgDQAAgFACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAEIAAABIABAAIAAgBIADACIgBgCIgBgBIgBgBIAAABIAAAAIAAABIAAABIgBAAIAAgBIAAgEQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIAAgBIABAAIACABIAAABIABAAQAAABAAABQAAAAABABQAAAAAAABQAAAAAAABIABABIADADIABAAIAAAAIAAABIAAABIgBAAIgEgEIAAAAIgBgBQgCAAgDgDIgBACQgCABAAAFIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAIAAgBgAgGgEIAAABIACAAIADgCIgEgCQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABgAAAgFIAAgCIAAACg");
	this.shape_46.setTransform(104.2,32);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("rgba(102,102,102,0.2)").ss(1,1,1).p("AAGgBQgHgDgEAH");
	this.shape_47.setTransform(104.6,33.7);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(66,66,66,0.2)").ss(1,1,1).p("AAJAEIgBgCIgBgCIgBgBIgCgFQgGgHgHAKIADADIABABIABACIACACIABACIABACIAAABQAEgDAHABIgBgBIgBgCIAAgBQgFgEgGAFAAJAFQgEgDgGAFAAKAHQgFgDgFAFAAIACQgFgCgHADAAHAAQgFgDgHAEAgGAAQAHgFAFAE");
	this.shape_48.setTransform(103.9,31.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#714D2D").s().p("AAAAJQAFgFAFADIAAABQgGgBgEADgAgDAFQAHgFAFAEIAAABQgEgDgGAFgAgFABQAGgEAGADIABACQgFgCgHADgAgJgDQAGgKAHAHIACAFQgFgEgIAFg");
	this.shape_49.setTransform(103.9,31.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#53412F").s().p("AgCAFQAFgFAFACIABACQgFgCgFAEgAgFABQAGgDAGACIAAABQgFgBgGACgAgIgBQAIgGAFADIAAACQgFgDgGAFg");
	this.shape_50.setTransform(104,32.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("rgba(102,102,102,0.2)").ss(1,1,1).p("AAVAJQABgIgIgEQgHgKgCgJIgBgBQgEAHgJgDQgCAAgDgCIgCgDIgDAFIgBAKIgCADIAAAFIAFAGIACAAIAGAKIADAGQAQAIANgJIAAgJgAgUgJIAAACIAEAHIADAAIACACIAAABIAFAIQACAEAIABQAJABAHgFQABgCAAgB");
	this.shape_51.setTransform(103.9,33.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#80664D").s().p("AAAACIAAAAIgFgFIAAgFIACgEIAAACIADAHIACACIACABIAAAAIABADIgBACIAAACIACAGg");
	this.shape_52.setTransform(102.2,33.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#AB6C43").s().p("AABAKIgBgBIgEgHIAAgCIABgIIADgFIAAAEIAFACIAAACQAAAEgCACIgBAHIABAGg");
	this.shape_53.setTransform(102.3,32.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#714D2D").s().p("AAAAUQgIgBgCgEIgFgIIAAgBIgBgFIABgFQACgEAAgEIAAgDQAJADAEgHIABABQACAJAHAJQAIAFgBAIIgBADQgFAEgHAAIgEAAg");
	this.shape_54.setTransform(104.3,33.1);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#53412F").s().p("AgMAHIgCgGIgCgEIAAgCIABgCIgBgCIAFAIQACACAJABQAIABAHgDIABgDIACACIAAAHQgIAEgIAAQgFAAgJgDg");
	this.shape_55.setTransform(104.5,34.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AADgFQACgCABAAQABAAAAADQAAABAAAAQgBABgBgBQgBAAgBgCgAADgIQACgBACAAQACAAAAAFQAAADgBAAQgBABAAAAQABAAgBAFQAAABABABQAAAAACAAQAAAAAAABQABAAAAABIgBAAQAAABAAAAQgDAAgBgCQgBgBAAgCQABgFgCgBQgBgBgBgBQgCADgCAAQgBAAgBABIAAAAQgCADgCABQgBAAAAAAIAAgBQAAAAAAgBIAAAAQAAAAABAAQABgBACgCQABAAAAgBQAAgCACgDIAAAAIAAgBQABgBABAAQAAAAAAAAQAAAAABABQgBABAAABIAAAAQAAgBAAAAQAAAAAAABQAAAAgBABIAAACQAAAAABgCIAAABIACAAQgBgCACgDgAAAgEQAAgBAAAAAABgHQAAgBACAA");
	this.shape_56.setTransform(102.6,32);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#53412F").s().p("AAGAIIgBgDQABgFgDgBIgCgCQgBADgCAAIgCABIAAAAIgEAEIgBAAIAAgBIAAgBIAAAAIABAAIACgDIACgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABgBIAAAAIAAgBIACgBIAAAAIAAABIAAACIAAgCQABAAAAgBQAAAAAAAAQAAAAABAAQAAAAAAAAIAAAEIAAABIgCAAIAAgBIAAgBIAAAAIAAgBIAAABIgBABIAAACIABgCIAAABIACAAIAAgBIAAgEQABAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQACAAAAAFIgBADIgBABQAAAAAAAFIABACIABAAIABABIAAABIAAAAIgBABQAAAAgBAAQAAAAgBgBQAAAAAAAAQgBAAAAgBgAACgFIADACIACAAIAAgBQAAgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAIgEACgAACgDg");
	this.shape_57.setTransform(102.6,32);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AhegmQCDggA6B0");
	this.shape_58.setTransform(102.2,33.7,0.069,0.074);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AhfgmIAdhHQB/hmBqCPIgtA/IgSAWIgZAkIgQAXIgWAeIgQAXIgRAXQhHgthnASIAJgVIAMgcIAIgTIAMgaIARgngAiJA5QBQgwB4BDAh9AfQBQgxB8BHAidBoQBJglBtA+AiRBMQBLgkBvBCAB6gFQiIhXhRA2AhsgIQBSg1CCBO");
	this.shape_59.setTransform(102.9,31.9,0.065,0.07);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#714D2D").s().p("AimB9IAJgVQBJglBtA+IgRAXQhHgthnASgAiRBMIAIgTQBQgwB4BDIgWAeQhvhChLAkgAh9AfIARgnQBSg1CCBOIgZAkQh8hHhQAxgAhggmIAehHQB/hmBqCPIgtA/QiIhXhSA2g");
	this.shape_60.setTransform(102.9,31.9,0.065,0.07);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#53412F").s().p("AiLBGIAMgdQBLgjBvBCIgQAWQhtg9hJAlgAh3AXIAMgZQBQgyB8BGIgQAYQh4hChQAvgAhagqIAMgfQBQg1CKBWIgSAZQiChQhSA1g");
	this.shape_61.setTransform(102.8,32.1,0.065,0.07);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("ACZA+QACg1g3gqQguhEgNg7IgKgJQgnAvg+gSQgQgEgSgJIgMgVIgUAdIgKBHIgCAPIAhAuIAQALIANAUIAEAFIAjA4QAPAYA/AKQBCAJAygnQAEgLACgKgAiShKIgRAYIAAAkIAkAwIANAAIAqBLIAXAqQB6A0Bbg/IAAg/IgLgP");
	this.shape_62.setTransform(103,33.5,0.144,0.144,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#80664D").s().p("AACARIgLAAIgjgwIAAgkIAQgYIgBAPIAeAuIAQALIANAUIAEAEIAGARQAAAEgFALIgEANQAAAOAOAbIgBABg");
	this.shape_63.setTransform(104.7,33.8,0.144,0.144,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#AB6C43").s().p("AAHBKIgNgLIghguIACgPIAKhEIAVgdIAJAUQASAJAQAFIADASQAAAcgNAbQgNAeAAATQAAALAIAXIgBABg");
	this.shape_64.setTransform(104.5,32.4,0.144,0.144,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#714D2D").s().p("AABCMQg/gKgOgXIgkg5IgDgFIABgBQgIgXAAgLQAAgRAMgeQANgdAAgcIgDgSQA+ARAoguIAJAIQANA8AuBEQA3AqgCA0IgGAWQgoAfgyAAQgNAAgNgCg");
	this.shape_65.setTransform(102.5,33.1,0.144,0.144,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#53412F").s().p("AhYA0IgXgqIABgBQgOgZAAgOIAFgNQAEgLAAgEIgGgQIAkA4QAOAWBCAKQA/AJAyglIAGgVIALAPIAAA9QgxAig8AAQgvAAg5gXg");
	this.shape_66.setTransform(102.4,35,0.144,0.144,0,0,180);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgCgIQgCgBgCAAQgCAAAAAFQAAADABAAQABABAAAAQgBAAABAFQAAABgBABQAAAAgCAAQAAAAAAABQgBAAAAABIABAAQAAABAAAAQADAAABgCQABgBAAgCQgBgFACgBQABgBABgBQACADACAAQABAAABABIAAAAQACADACABQABAAAAAAIAAgBQAAAAAAgBIAAAAQAAAAgBAAQgBgBgCgCQgBAAAAgBQAAgCgCgDIAAAAIAAgBQgBgBgBAAQgBAAAAAAQAAAAAAABQAAgBgCAAgAAAgFIAAAAQAAgBAAAAQABAAAAABQAAAAABABIAAACQAAAAgCgCIAAABIgBAAQABgCgCgDAAAgEQAAgBAAAAAAAgHQAAABAAABAgCgFQgCgCgBAAQgBAAAAADQAAABAAAAQABABABgBQABAAABgCg");
	this.shape_67.setTransform(104.2,32);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#53412F").s().p("AgJAJIgBAAIABgBIAAgBIACAAIABgCQgBgFABAAIgBgBIgBgDQAAgFACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAEIAAABIABAAIAAgBIADACIgBgCIgBgBIgBgBIAAABIAAAAIAAgCIAAgBIABAAIACABIAAABIABAAQAAABAAABQAAAAABABQAAAAAAABQAAAAAAABIABABIADADIABAAIAAAAIAAABIAAABIgBAAIgEgEIAAAAIgBgBQgCAAgDgDIgBACQgCABAAAFIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAIAAgBgAgGgEIAAABIACAAIADgCIgEgCQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABgAgBgEIAAgEQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIAAACIAAABIAAABIgBAAIAAgBgAAAgHIAAAAg");
	this.shape_68.setTransform(104.2,32);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AhfgmIAdhHQB/hmBqCPIgtA/IgSAWIgZAkIgQAXIgWAeIgQAXIgRAXQhHgthnASIAJgVIAMgcIAIgTIAMgaQBQgxB8BHAiRBMQBLgkBvBCAidBoQBJglBtA+AiJA5QBQgwB4BDAh9AfIARgnQBSg1CCBOAB6gFQiIhXhRA2AhsgIIANge");
	this.shape_69.setTransform(102.9,31.9,0.065,0.07);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45}]}).to({state:[{t:this.shape_66,p:{skewY:180,x:102.4}},{t:this.shape_65,p:{skewY:180,x:102.5}},{t:this.shape_64,p:{skewY:180,x:104.5}},{t:this.shape_63,p:{skewY:180,x:104.7}},{t:this.shape_62,p:{skewY:180,x:103}},{t:this.shape_61,p:{skewY:0,x:102.8}},{t:this.shape_60,p:{skewY:0,x:102.9}},{t:this.shape_59,p:{skewY:0,x:102.9}},{t:this.shape_58,p:{skewY:0,x:102.2}},{t:this.shape_57},{t:this.shape_56}]},7).to({state:[{t:this.shape_66,p:{skewY:0,x:104.5}},{t:this.shape_65,p:{skewY:0,x:104.3}},{t:this.shape_64,p:{skewY:0,x:102.3}},{t:this.shape_63,p:{skewY:0,x:102.2}},{t:this.shape_62,p:{skewY:0,x:103.9}},{t:this.shape_61,p:{skewY:180,x:104}},{t:this.shape_60,p:{skewY:180,x:103.9}},{t:this.shape_59,p:{skewY:180,x:103.9}},{t:this.shape_58,p:{skewY:180,x:104.6}},{t:this.shape_68},{t:this.shape_67}]},7).to({state:[{t:this.shape_66,p:{skewY:180,x:102.4}},{t:this.shape_65,p:{skewY:180,x:102.5}},{t:this.shape_64,p:{skewY:180,x:104.5}},{t:this.shape_63,p:{skewY:180,x:104.7}},{t:this.shape_62,p:{skewY:180,x:103}},{t:this.shape_61,p:{skewY:0,x:102.8}},{t:this.shape_60,p:{skewY:0,x:102.9}},{t:this.shape_69},{t:this.shape_58,p:{skewY:0,x:102.2}},{t:this.shape_57},{t:this.shape_56}]},7).wait(7));

	// Layer 19
	this.instance_20 = new lib.gr_boy_leftleg_new_031copy("synched",0);
	this.instance_20.setTransform(98.3,23.5,0.149,0.16,3.5,0,0,0.3,-41.5);

	this.instance_21 = new lib.gr_boy03_rightleg_new_021copy("synched",0);
	this.instance_21.setTransform(99,13.1,0.149,0.16,3.5,0,0,-0.2,-33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21,p:{regX:-0.2,regY:-33.3,rotation:3.5,x:99,y:13.1}},{t:this.instance_20,p:{regX:0.3,regY:-41.5,rotation:3.5,x:98.3,y:23.5}}]}).to({state:[{t:this.instance_21,p:{regX:-0.4,regY:-33.8,rotation:25.3,x:98.7,y:15.5}},{t:this.instance_20,p:{regX:0.1,regY:-41.1,rotation:-28,x:93.9,y:23.6}}]},7).to({state:[{t:this.instance_21,p:{regX:-0.2,regY:-33.3,rotation:3.5,x:99,y:13.1}},{t:this.instance_20,p:{regX:0.3,regY:-41.5,rotation:3.5,x:98.3,y:23.5}}]},7).to({state:[{t:this.instance_21,p:{regX:-0.4,regY:-33.8,rotation:25.3,x:98.7,y:15.5}},{t:this.instance_20,p:{regX:0.3,regY:-41,rotation:-25.7,x:93.9,y:23.6}}]},7).wait(7));

	// Layer 20
	this.instance_22 = new lib.gr_boy_leftleg021copy("synched",0);
	this.instance_22.setTransform(103.9,24,0.148,0.159,2.6,0,0,-7.5,-37.1);

	this.instance_23 = new lib.gr_boy03_rightleg_new_021copy("synched",0);
	this.instance_23.setTransform(102.1,13.8,0.149,0.16,0,-3.5,176.5,-0.1,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23,p:{regX:-0.1,scaleX:0.149,skewX:-3.5,skewY:176.5,x:102.1,y:13.8}},{t:this.instance_22,p:{regX:-7.5,rotation:2.6,x:103.9,y:24}}]}).to({state:[{t:this.instance_23,p:{regX:0.2,scaleX:0.148,skewX:-22.6,skewY:157.4,x:101.9,y:15.7}},{t:this.instance_22,p:{regX:-7.9,rotation:24.6,x:107.5,y:24.4}}]},7).to({state:[{t:this.instance_23,p:{regX:-0.1,scaleX:0.149,skewX:-3.5,skewY:176.5,x:102.1,y:13.8}},{t:this.instance_22,p:{regX:-7.5,rotation:2.6,x:103.9,y:24}}]},7).to({state:[{t:this.instance_23,p:{regX:0.2,scaleX:0.148,skewX:-22.6,skewY:157.4,x:101.9,y:15.7}},{t:this.instance_22,p:{regX:-7.7,rotation:21.9,x:107,y:24.1}}]},7).wait(7));

	// Layer 7
	this.instance_24 = new lib.dfsdSymbol37copy2("synched",0);
	this.instance_24.setTransform(-112.7,-26.2,0.06,0.06,0,-164.5,15.5,2.3,7.5);

	this.instance_25 = new lib.gr_ch_forarm_Lcopy2("single",0);
	this.instance_25.setTransform(-116.2,-23.8,0.058,0.051,0,-142,-141.2,9,-31.7);

	this.instance_26 = new lib.gr_cH_Arm_01_02_new_031copy2("single",1);
	this.instance_26.setTransform(-123,-23,0.055,0.049,0,-74.3,105.6,25.2,-58.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26,p:{regY:-58.8,skewX:-74.3,skewY:105.6,x:-123,y:-23}},{t:this.instance_25,p:{regY:-31.7,skewX:-142,skewY:-141.2,x:-116.2,y:-23.8}},{t:this.instance_24,p:{regX:2.3,regY:7.5,skewX:-164.5,skewY:15.5,x:-112.7,y:-26.2}}]}).to({state:[{t:this.instance_26,p:{regY:-59.1,skewX:-95.5,skewY:84.4,x:-123.4,y:-23.4}},{t:this.instance_25,p:{regY:-30.9,skewX:-163.2,skewY:-162.3,x:-117.3,y:-26.8}},{t:this.instance_24,p:{regX:1.7,regY:8.2,skewX:174.3,skewY:-5.7,x:-115,y:-30.3}}]},7).to({state:[{t:this.instance_26,p:{regY:-58.8,skewX:-74.3,skewY:105.6,x:-123,y:-23}},{t:this.instance_25,p:{regY:-31.7,skewX:-142,skewY:-141.2,x:-116.2,y:-23.8}},{t:this.instance_24,p:{regX:2.3,regY:7.5,skewX:-164.5,skewY:15.5,x:-112.7,y:-26.2}}]},7).to({state:[{t:this.instance_26,p:{regY:-59.1,skewX:-95.5,skewY:84.4,x:-123.4,y:-23.4}},{t:this.instance_25,p:{regY:-30.9,skewX:-163.2,skewY:-162.3,x:-117.3,y:-26.8}},{t:this.instance_24,p:{regX:1.7,regY:8.2,skewX:174.3,skewY:-5.7,x:-115,y:-30.3}}]},7).wait(7));

	// Layer 8
	this.instance_27 = new lib.dfsdSymbol37copy2("synched",0);
	this.instance_27.setTransform(-131.8,-13.7,0.06,0.06,22,0,0,1.7,6.5);

	this.instance_28 = new lib.gr_ch_forarm_Lcopy2("single",0);
	this.instance_28.setTransform(-134.5,-16.5,0.058,0.051,0,-23.5,155.7,9.7,-31.6);

	this.instance_29 = new lib.gr_cH_Arm_01_02_new_031copy2("single",1);
	this.instance_29.setTransform(-130.7,-22.6,0.055,0.049,0,17.9,18,25.3,-58.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29,p:{x:-130.7,y:-22.6}},{t:this.instance_28,p:{x:-134.5,y:-16.5}},{t:this.instance_27,p:{x:-131.8,y:-13.7}}]}).to({state:[{t:this.instance_29,p:{x:-130.2,y:-22.4}},{t:this.instance_28,p:{x:-134,y:-16.4}},{t:this.instance_27,p:{x:-131.3,y:-13.5}}]},7).to({state:[{t:this.instance_29,p:{x:-130.2,y:-22.4}},{t:this.instance_28,p:{x:-134,y:-16.4}},{t:this.instance_27,p:{x:-131.3,y:-13.5}}]},7).to({state:[{t:this.instance_29,p:{x:-130.2,y:-22.4}},{t:this.instance_28,p:{x:-134,y:-16.4}},{t:this.instance_27,p:{x:-131.3,y:-13.5}}]},7).wait(7));

	// Layer 9
	this.instance_30 = new lib.sdSymbol4copy3("synched",762);
	this.instance_30.setTransform(-126.5,-29.9,0.121,0.121,0,4.5,-175.5);

	this.instance_31 = new lib.gr_Ch_Body_01_021copy2("single",3);
	this.instance_31.setTransform(-126.7,-10,0.057,0.061,0,-3.5,175.9,-2.1,141.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31,p:{x:-126.7,y:-10}},{t:this.instance_30,p:{x:-126.5,y:-29.9,startPosition:762}}]}).to({state:[{t:this.instance_31,p:{x:-126.2,y:-9.9}},{t:this.instance_30,p:{x:-126,y:-29.7,startPosition:776}}]},7).to({state:[{t:this.instance_31,p:{x:-126.2,y:-9.9}},{t:this.instance_30,p:{x:-126,y:-29.7,startPosition:776}}]},7).to({state:[{t:this.instance_31,p:{x:-126.2,y:-9.9}},{t:this.instance_30,p:{x:-126,y:-29.7,startPosition:783}}]},7).wait(7));

	// Layer 10
	this.instance_32 = new lib.gr_boy_leftleg_new_031copy2("synched",0);
	this.instance_32.setTransform(-129.2,0.5,0.149,0.16,3.5,0,0,-0.1,-41.5);

	this.instance_33 = new lib.gr_boy03_rightleg_new_021copy2("synched",0);
	this.instance_33.setTransform(-128.5,-9.9,0.149,0.16,3.5,0,0,-0.2,-33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33,p:{x:-128.5,y:-9.9}},{t:this.instance_32,p:{x:-129.2,y:0.5}}]}).to({state:[{t:this.instance_33,p:{x:-128,y:-9.7}},{t:this.instance_32,p:{x:-128.7,y:0.7}}]},7).to({state:[{t:this.instance_33,p:{x:-128,y:-9.7}},{t:this.instance_32,p:{x:-128.7,y:0.7}}]},7).to({state:[{t:this.instance_33,p:{x:-128,y:-9.7}},{t:this.instance_32,p:{x:-128.7,y:0.7}}]},7).wait(7));

	// Layer 11
	this.instance_34 = new lib.gr_boy_leftleg01_new_021copy("synched",0);
	this.instance_34.setTransform(-124.9,-9.3,0.148,0.159,-7.2,0,0,-0.1,-31.4);

	this.instance_35 = new lib.gr_boy_leftleg021copy2("synched",0);
	this.instance_35.setTransform(-122.5,-1.1,0.148,0.159,35.1,0,0,-7.5,-37.3);

	this.instance_36 = new lib.gr_boy03_rightleg_new_021copy2("synched",0);
	this.instance_36.setTransform(-124.9,-9,0.149,0.16,0,-3.5,176.5,0.2,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_35,p:{regX:-7.5,regY:-37.3,rotation:35.1,x:-122.5,y:-1.1}},{t:this.instance_34}]}).to({state:[{t:this.instance_36},{t:this.instance_35,p:{regX:-7.4,regY:-37.2,rotation:-9.9,x:-123.3,y:0.9}}]},7).to({state:[{t:this.instance_36},{t:this.instance_35,p:{regX:-7.4,regY:-37.2,rotation:-9.9,x:-123.3,y:0.9}}]},7).to({state:[{t:this.instance_36},{t:this.instance_35,p:{regX:-7.4,regY:-37.2,rotation:-9.9,x:-123.3,y:0.9}}]},7).wait(7));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.6,-35.3,281.1,72.4);


(lib.Cherecter3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 21
	this.instance = new lib.ls1copy("synched",0);
	this.instance.setTransform(125.8,29.5,0.093,0.093,0,0,180);

	this.instance_1 = new lib.rs2("synched",0);
	this.instance_1.setTransform(132.8,29.5,0.093,0.093,0,0,180);

	this.instance_2 = new lib.GO_LeftForeArmcopy("single",0);
	this.instance_2.setTransform(123,5,0.09,0.09,0,-4.2,175.8,18.8,-0.8);

	this.instance_3 = new lib.GO_Left_handcopy("single",1);
	this.instance_3.setTransform(123,13.2,0.093,0.093,0,4.3,-175.7,16,1.8);

	this.mouth = new lib.GO_talkcopy();
	this.mouth.setTransform(128.7,-5.5,0.093,0.093,0,4.7,-175.3,2.6,0.2);

	this.eye = new lib.GO_eyes_copy();
	this.eye.setTransform(126.8,-8.3,0.093,0.093,0,4.7,-175.3,27.8,8.2);

	this.instance_4 = new lib.GO_headcopy("single",0);
	this.instance_4.setTransform(128.7,-3.7,0.093,0.093,0,4.7,-175.3,32.5,89.2);

	this.instance_5 = new lib.GO_RightForeArmcopy("single",0);
	this.instance_5.setTransform(135.3,5.2,0.093,0.093,0,5.2,-174.8,13,-0.5);

	this.instance_6 = new lib.GO_Right_handcopy("single",0);
	this.instance_6.setTransform(134.8,13.3,0.093,0.093,0,10.5,-169.5,15.1,3.9);

	this.instance_7 = new lib.GO_bodycopy("single",0);
	this.instance_7.setTransform(128.2,9,0.093,0.093,0,1.7,-178.3,50.1,148.3);

	this.instance_8 = new lib.GO_LeftArmcopy("single",0);
	this.instance_8.setTransform(124,-0.1,0.093,0.093,0,-3.8,176.2,1.2,18.2);

	this.instance_9 = new lib.GO_RightArmcopy("single",0);
	this.instance_9.setTransform(133.2,-0.2,0.093,0.093,0,2,-178,33.6,18.3);

	this.instance_10 = new lib.l1copy("synched",0);
	this.instance_10.setTransform(126.3,24.4,0.093,0.093,0,0,180);

	this.instance_11 = new lib.l2copy("synched",0);
	this.instance_11.setTransform(126.6,15.1,0.093,0.093,0,0,180);

	this.instance_12 = new lib.r2copy("synched",0);
	this.instance_12.setTransform(131.1,15,0.093,0.093,0,0,180);

	this.instance_13 = new lib.r1copy("synched",0);
	this.instance_13.setTransform(132.3,24.4,0.093,0.093,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4,p:{rotation:0,skewX:4.7,skewY:-175.3,x:128.7}},{t:this.eye,p:{rotation:0,skewX:4.7,skewY:-175.3,x:126.8}},{t:this.mouth,p:{rotation:0,skewX:4.7,skewY:-175.3,x:128.7}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4,p:{rotation:-4.7,skewX:0,skewY:0,x:128.2}},{t:this.eye,p:{rotation:-4.7,skewX:0,skewY:0,x:130.2}},{t:this.mouth,p:{rotation:-4.7,skewX:0,skewY:0,x:128.3}},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]},27).wait(32));

	// Layer 13
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgKgUIgEAQIACALIAGAKQABABAAgEIACAFQADAAgBgDQAAAAAAgBAADABIABACIAAAAIAEAPQAAABgBAAQAAAAAAAAQgCABgDgKQAAAAgBgBQAAAAAAgBQAAgBAAAAQgBgCAAgBIAAgBIACASIAAAAQgBABAAABQgBAAAAgBIgBgHAADABIAAgBIAEACQACAIAGgBQgGgJAAgFQgFgJgEgIAADAAIAAABAgFAOIgBgDIgBgCIgBgBIgCgJAgGgBIADAKIAAABIACAF");
	this.shape.setTransform(99,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9C6C").s().p("AACAVIgEgKIgCgLIAEgQIABgEIgDASIACAMIACAFIABADQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIAAAAgAACABIADALIAAABgAAAAMIAAgLIAAAGIABAGIAAAAg");
	this.shape_1.setTransform(98,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC488").s().p("AAAAXIgCgHIgCgFIAAAAIAAgBIgDgKIADALIAAAAIACAFIAAACQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgCgFIgBgDIgDgGIgDgMIAFgRQABgCAEACIADABIAIARQAAAEAGALQgGABgCgIIgEgEIAAACIABACIgBgCIAAAAIAAAAIABADIAEAPIgBAAIAAABQgCABgDgKIgBgBIAAgBIAAgCIAAgDIAAgBIABASIAAABIgBABIAAAAIAAgBgAgJAKIABABIABACIgBgCIAAgBIgCgGIgBgEgAgCAQgAACACg");
	this.shape_2.setTransform(99.1,17.6);

	this.instance_14 = new lib.gr_ch_forarm_Lcopy3("single",0);
	this.instance_14.setTransform(98.4,10.3,0.059,0.06,0,14.8,-161.4,9.7,-31.9);

	this.instance_15 = new lib.gr_cH_Arm_01_02_new_031copy3("single",1);
	this.instance_15.setTransform(100.4,1.8,0.057,0.061,0,-2.8,-2.7,25.3,-58.2);

	this.instance_16 = new lib.dfsdSymbol37copy3("synched",0);
	this.instance_16.setTransform(103,9.1,0.06,0.06,-8,0,0,1.6,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_15,p:{regX:25.3,regY:-58.2,scaleX:0.057,scaleY:0.061,skewX:-2.8,skewY:-2.7,x:100.4,y:1.8}},{t:this.instance_14,p:{regX:9.7,scaleX:0.059,scaleY:0.06,skewX:14.8,skewY:-161.4,x:98.4,y:10.3}},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_15,p:{regX:25.2,regY:-58.6,scaleX:0.055,scaleY:0.049,skewX:-12.1,skewY:-12,x:99.5,y:0.8}},{t:this.instance_14,p:{regX:10.1,scaleX:0.058,scaleY:0.051,skewX:-53.5,skewY:125.7,x:99.2,y:8}},{t:this.instance_16}]},27).wait(32));

	// Layer 14
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgDAAQAEAAAHAAIABgBQgBAAgBABQgCgBgDAAQgCAAgDABQgEAAgBACQACgCADAAg");
	this.shape_3.setTransform(102.7,-6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#180A0A").s().p("AgDAAIAFAAIAFAAIACAAIgBAAIgLAAIgFABIAFgBg");
	this.shape_4.setTransform(102.7,-6.7);

	this.instance_17 = new lib.dfsdgr_Eye_CH_r_01_02_new_021copy7("single",0);
	this.instance_17.setTransform(102.9,-6.2,0.081,0.075,0,-3,177);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AAmgOQAAgEgGgKQgGgJgMgCQgLgCgFAAQgHgBgKAKQgBAAgEABQgFACgDAHQgEAHAAAIQgBAHAFAJQAFALgDAOQAMAAAFgJQgCgDgBgDQgDAAAAgEQgBgEgCgEQAAgDABgBQABgDAEAAQABABABACQABAAAAABIAAABQAAAAAAABQACAHACgBQACgBABAAQABgBAAgDQAAgCACgFQADgIAHgDQABgBABAAQAGgDADABAgQATQAEgBgBgFAAYgZQAEAEABAHQAAAEgBAGQABAFAIAKQACAGgGgBQgBABAAADAAgAXQACACgCABQgBAAgCgBQgEAAABACQABABAAAIQAAAHgPgBAAgAXQABgBAAAAQAAgBgBgBQgEAAgEACQgBAAAAAAAAdAZQgDAAgDgDQAEABAFAA");
	this.shape_5.setTransform(100.9,-6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E79871").s().p("AABACQgCgBgDgBIABAAIADAAIAAAAIAAAAIABAAIAAAAIABAAIACAAIgCAAIgBAAIAAAAIgBAAIAAAAIAAAAIgDAAIgBAAIABAAIAHgBQAAAAAAAAQAAAAAAAAQABABAAAAQgBAAAAAAIAAAAQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAAAIgDAAg");
	this.shape_6.setTransform(103.8,-3.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCC791").s().p("AAEAdQgFgBgGgDIgGgDQgFgEgDgHIgCgFQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIgBgCIABACQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQgDAAgBgEQAAgDgCgDIABgFQABgCADAAIADACIAAACIAAAAIABABQACAGACAAIACgBIACgDIACgIQADgJAHgEIACgBQAGgDADABIAKAAIgBAKQACAIAHAJQADAFgHgCIAAAFIgJABIgBABQADACAEABQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAIABAJQAAAHgMAAIgEAAg");
	this.shape_7.setTransform(101.7,-4.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#151515").s().p("AggANQgFgLABgFQAAgIAEgHQADgHAFgCIAFgBQAKgKAHABQAFAAALACQAMACAGAJQAGAKAAAEIgJAAQgBgHgEgEQAEAEABAHIgLAAQgDgBgGADIgCABQgHADgDAIIgCAHIgBAEIgDABQgCABgCgHIAAgBIAAgBIgBgBIgCgDQgEAAgBADIgBAEQACAEABAEQAAAEADAAIADAGQgFAJgMAAQADgOgFgLg");
	this.shape_8.setTransform(100.9,-6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_17},{t:this.shape_4},{t:this.shape_3}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_17},{t:this.shape_4},{t:this.shape_3}]},27).wait(32));

	// Layer 15
	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("rgba(0,0,0,0.2)").ss(0.1,1,1).p("AAZhRQABAJgJAEQgFACgEABQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAAAAAQgBAAgBAAQgBAAgCAAQgBAAgDgBQgGgBgFgFQAAAAgBgBQAAgBAAAAQgCgDACgDAgkAQIAAgBQAAgDAAgDQAAgCABgCQAAgCAAgCQAAAAAAgBQAAgBAAgDQAAgCAAgDIgBgIQAAgCAAgDQAAgQgBgDIgBgJQAAgFACgCQAAgDACgEQACgEAMgKIAEgCIACgCIABgBIAAACQgBABABABIAAAAQAAABACABQAAACACABQAEACAFABIAAAAQAAAAAAAAQABAAABABQABgBACAAQAKgBADgEQADgDgBgDIAFABAgnAtIgCAbQAAADACABIABgGIABAHQALADAJABQAEABAFABQABAAABAAQABAAACAAQAKABAKgBQADAAACAAQAFgBAGgBQAFgCAEgCIgDh6IABgGQAAgBAAgBQAAgTgPgJAglAkIAAgBQAAgBAAgBIAAgBIABgOIAAgCAgmAkIAAADIABgDgAgmAnIAAABQAAAAAAAAIAAACIAAABIgBAAIAAABIAAABIABgBIgBAAAglAkIAAAAAglAkQAAAAgBAAAgmArIAAAAIAAAAIAAAAQAAAAAAABIAAgBIgBABAgmAqIAAgC");
	this.shape_9.setTransform(100.5,6.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AAAAFIAAAAIAAAAgAAAAEIAAAAIAAABIAAAAgAAAAFIAAgBIAAABgAAAAEIAAAAIAAABgAAAAEgAAAgBIAAAAIAAAAgAAAgEIAAACIAAABIAAAAIAAgDg");
	this.shape_10.setTransform(96.5,10.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6C64B5").s().p("AAQBDIgCAAIgJgCIgSgFIgBgGIgBAFQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIADgbIAAgBIAAAAIABgBIAAgBIAAgBIAAgBIAAgBIABgDIAAAAIAAgBIAAgDIAAAAIABgOIAAgCIAAAAIAAAAIAAgFIABgFIAAgDIAAgBIAAgGIAAgFIgBgJIAAgEIgBgTIgBgJQAJAMADAHIACAKIAEAdQAEAcgDAJQgEAIgDAGQgGAHAMAHQANAIACACIgDAAgAgPAdIAAgBg");
	this.shape_11.setTransform(98.1,8.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1C8CFD").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_12.setTransform(101.2,0.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#AB6C43").s().p("AABAIIgBAAIgCAAIgFgBQgGgBgFgFIgBgBIAAAAQgCgCABgCIADgDIABgBIAAACIAAACIAAABIABACIADABIAJADIABAAIABAAIABAAIACAAQAJgCAEgCQADgDgBgDIAEABQACAHgKAFIgIACIgBAAIgBAAIgBAAIgBAAg");
	this.shape_13.setTransform(100.8,-0.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7D77B5").s().p("AgFBSQgCgCgNgIQgOgHAGgGQAFgGAEgJQADgJgEgdIgEgbIgEgLQgDgHgIgMQAAgFABgCIACgHQACgEANgKIACgBQAAADABACIAAABIABACQAFAEAGACIAFABIADAAIABAAIABAAIABgBIAAABIAAgBIABAAIAJgCQAJgFgBgJQAQAJgBAUIAAABIgBAGIAEB6IgKAEIgLACIgFAAIgKABIgKgBg");
	this.shape_14.setTransform(100.7,6.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0.4)").ss(0.1,1,1).p("AgGgQQAGgCAKgCQABAEAAABQABADAAABQABAKADABQAEACABADQgDAJgJAEQgCABgCAAQgFADgFgBQgBAAgBAAQgBAAAAgBQgDAAgDgCQgJgFADgEQACgCAAgDQACgCAAgCQAFgFAAgL");
	this.shape_15.setTransform(100.8,-1.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFC488").s().p("AAAAPIAAAAIgEgBIgBgBIABgCIAAgBQgHABABgHQABgEADgCIAHgOIABAEQABAKADACQAEABABADQgDAIgIAFg");
	this.shape_16.setTransform(101.8,-1.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFBA75").s().p("AAAAVIgCAAIgBgBIgGgCQgJgFADgEQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAFgFAAgLIAFAAIAQgEIABAFIgJAPQgDABgBAEQgBAHAHgBIAAABIgBACIABABIAFABIAAAAIAAACIgEABQgFACgEAAIgBAAg");
	this.shape_17.setTransform(100.3,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]}).to({state:[{t:this.shape_16},{t:this.shape_17},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9}]},27).wait(32));

	// Layer 16
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgCgLIAAAAQAAgBABAAQABgCABABIAAABQADACABACIAAACQABACAAABIAFACIAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQgBAAgBAAQgCAAgEgBIAAAAQgBgBgBgCQgDAAgCgBIACgCQAAgBAAgBAAAgHQACAAABAAIgCgCQgBgBAAAAQAAAAAAAAQAAAAAAABQgBgBAAAAQgBAAAAgBQgBABAAAAIAAABQgBgBAAAAIgBAAQgEAAgBABQgDABACAGQACACACAAQAAAAABAAQAAACACAFIAAAAQABABAAABQAAABgCABQAAAAgBABQAAAAAAABQABAAAAABQABAAAAAAQADgCABgCQAAgCgBgCQgDgGABgCQABgBAAgCQAAgDgDgCAgEgGIAAgBQgEgBgBABQgBABABACQABACABAAQABAAABgBQABgCAAgBg");
	this.shape_18.setTransform(100.4,32.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#53412F").s().p("AgFAOIgBgBIAAgBIABgBIACgCIgBgCIAAAAQgCgFAAgCIgBAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBgBQgCgGADgBQABgBAEAAQADACAAADIgBADQgBACADAGQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgBAAgAgJgHQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIACACIACgBIABgDIAAgBIgEAAIgBAAgAAFgBIAAAAIgCgDIgFgBIACgCIADAAIgCgCIgBgBIAAAAIAAABIAAACIgCACQAAgDgDgCIABAAIABABIAAgBIABgBIABABIABABIgBgBIgBgBIAAAAIABgBQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAIAAABIAEAEIAAACIABADIAFACIAAAAIABAAIABAAIAAABIAAAAIgCAAQgCAAgEgBgAgFgKg");
	this.shape_19.setTransform(100.4,32.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgNgOIAAgCQADgKAFABQAAAAABABIAAAAQACADACADQgEgDgGAKAAHgLQgBAAAAgBIgBAAQAAgBgCgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBAgNgOQACABABACQACABAAAAQACACACABQABABABAAQACACAAAAQADgIAEABQAAAAABAAIAAABIAAAAIABAAQABABAAABIABAAQABABACABQAPABAGAKQAAABAAAAAACgDQABABAAAAQAIACADgGAACgDQgBAAgBgBAAFgMQgFgCgCAIAgIgKQAGgIADACAACgOQgCgCgEAJAgigCIABgOIADgDQADADAGABQAEABAEAAAgigCIAAACQAFABAMADQAAAAABAAQApATALgOQgBgCAAgBIAEAEIgBAKQgLAOgtgTQgBAAAAAAQgNgCgFgEIAAgKgAAKgIQgEgDgEAI");
	this.shape_20.setTransform(100.5,33.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#80664D").s().p("AgaAAIgCAAIgBgCQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIADgDIgBgBIAAAAQApAQALgMIgBgCIAEAEIAAAIQgFAFgLAAQgOAAgagKg");
	this.shape_21.setTransform(101.3,34.9);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#AB6C43").s().p("AgXAFIAAgBIgDgCQgCgCAAgCIAAgEIABgFIgBgDIAJAAIACADIADACIAEADIABABIAEACIACABIABABQAGABADgGQAQACAFAKIAAABIABACQgFAGgKAAQgOAAgXgKg");
	this.shape_22.setTransform(101.1,33.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#53412F").s().p("AgXAMIAAgMIADAAIAAABQAFADAMACIABABIgBAAIABABIgDADQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAIACADQgNgCgFgDgAANgBQAEgJAEABIABABIAAAAIAAAAIABABIABABQgEgDgEAJIgDgBgAAIgEQAEgKAFACIAAAAIACACQgFgCgEAJIgCgBgAACgJQAGgJAFADIABABIABAAQgFgCgGAJIgCgCg");
	this.shape_23.setTransform(99,33.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#714D2D").s().p("AgYAKIAAgDIACgMIADgCQADADAGABIABADIgBADIAAAEQAAADACADIACACQgNgCgFgDgAAOAIIgCgBQAEgHAFABIAAAAIAEACQgCAFgFAAIgEAAgAAHAEQAEgHAFACIABABIABAAQgEgBgEAHIgDgCgAABAAQAGgHAEACIABABIABABQgEgCgEAIIgEgDgAgCgDIAAgCQACgKADABIACABIAAABQABADAEADQgFgDgFAJIgCgDg");
	this.shape_24.setTransform(99.4,32.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgNgOIAAgCQADgKAFABQAAAAABABIAAAAQACADACADQgEgDgGAKAABgQQgBgBAAAAQAAAAAAgBAAHgLQgBAAAAgBIgBAAQAAgBgCgBQAAAAgBAAQAAgBAAAAQgBgBAAAAAgNgOQACABABACQACABAAAAQACACACABQABABABAAQACACAAAAQADgIAEABQAAAAABAAIAAABIAAAAIABAAQABABAAABIABAAQABABACABQAPABAGAKQAAABAAAAIAEAEIgBAKQgLAOgtgTQgBAAAAAAQgNgCgFgEIAAgKIADgBIAAACQAFABAMADQAAAAABAAQApATALgOQgBgCAAgBAACgDQABABAAAAQAIACADgGAACgDQgBAAgBgBAAFgMQgFgCgCAIAgIgKQAGgIADACAACgOQgCgCgEAJAgigCIABgOIADgDQADADAGABQAEABAEAAAAKgIQgEgDgEAI");
	this.shape_25.setTransform(100.5,33.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_25},{t:this.shape_19},{t:this.shape_18}]},27).wait(32));

	// Layer 17
	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AAAgWQgDAIgFAJQAAAFgGAJQAGACACgIIAEgDIAAABIgBACIAAABIgEAPIABAAQAAABAAAAQACAAADgJQABgBAAgBIAAAAQAAgBAAgBQAAgBAAgCIAAgBIAAgBIgBATIAAAAIABABQAAAAAAABQAAABAAgCIACgGAALgTIAEAPIgCALIgGAKQgBABAAgDIABgEIABgBIABgBIACgJAAGAPIgCAFQgCAAAAgDIAAgBAAHAAIgDAKIAAAAIgBAFQgBABAAAA");
	this.shape_26.setTransform(103.9,16);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFC488").s().p("AAAAYIAAgBIAAgBIAAAAIABgTIAAABIgBABIAAADIAAACIAAAAIAAACQgDAJgCAAIAAgBIgBAAIAEgPIABgDIgBACIABgCIAAgCIgEAEQgCAIgGgCQAGgKAAgEIAHgRIAEgBQABgBABAAQABAAAAAAQABAAAAAAQABAAAAABIAFARIgDAMIgBADIACgKIgBAEIgCAGIAAABIgBABIgBAEIgCAFQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAIAAgBIgCAGIgBABIAAAAgAAFALIAAAAIgBAFIgBABIABgBIABgFIAAAAIADgLQgCADgBAHIAAABg");
	this.shape_27.setTransform(103.8,15.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#CC9C6C").s().p("AgCASIABgDIABgCIAAAAIAAgGIABgGIgBALIAAABIAAgBIAAgCIADgMIgDgSIABAEIAEAQIgCALIgEAJIgBABIAAgDgAgEAMQABgHACgEIgDAMIAAgBg");
	this.shape_28.setTransform(104.9,15.7);

	this.instance_18 = new lib.gr_ch_forarm_Lcopy3("single",0);
	this.instance_18.setTransform(104.7,8.6,0.059,0.06,0,-14.8,-18.6,9.7,-31.9);

	this.instance_19 = new lib.gr_cH_Arm_01_02_new_031copy3("single",1);
	this.instance_19.setTransform(102.6,0.5,0.057,0.061,0,2.8,-177.3,24.4,-58.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_19},{t:this.instance_18},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26}]}).to({state:[]},27).wait(32));

	// Layer 18
	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgFgGQgDAAgBABQgCACADADIAAAAQACAAABAAQABAAAAAAQABACADAEQAAABAAABQAAAAAAABQAAABgBAAIABABQAAAAAAAAQAAAAAAAAQABgCAAgBQAAgCgBgCQgCgEAAgBQAAgBABgBIAAgCIAAgBQABAAABAAIgBgBQAAgBAAAAQgBAAAAAAIAAABQgBAAAAAAQgBgBAAAAIAAAAQAAgBAAAAQABgBACAAIAAAAQACABABABIAAACQABACABAAQADABABAAQAAgBAAAAQABAAAAAAIABABQAAAAAAABQgBAAgBABQgBAAgEgBIAAAAQgBAAgCgCQgBAAgBABQgBgDgDAAgAgDgIQAAABAAAAIgCAAQAAAAAAABAgDgEIAAgBQgEABAAAAQgBABABACQABABABAAQABAAAAgBIAAAAQAAgBABgCgAgBgGQAAAAAAgB");
	this.shape_29.setTransform(103.5,30.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#53412F").s().p("AAAALIgBgBIABgBIAAgBIAAgCIgEgGIgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIAAAAQgDgDACgCQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABAAIAAgBIACAAIAAgBIABABIABAAIgBAAIgBgBIAAAAIAAgBIADgBIAAAAIADACIAAACIACACIAEABIAAgBIABAAIABABIAAABIgCABIgFgBIAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgCABIAAgCIAAgBIAAABIAAACQgBgDgDAAQADAAABADIgBACQAAABACAEQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABIAAAAIAAAAgAgHgEQgBABAAAAQAAAAAAABQAAAAABAAQAAABAAAAIACABIABgBIAAAAIABgDIAAgBIgEABgAgBgIIAAABIAAABIACAAIgBgBIAAgBIgBAAgAgBgDIAAAAgAgBgDIAAAAg");
	this.shape_30.setTransform(103.5,30.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgdAFIgCgJIACgDQADACAFAAQADgBADgBIAAgBQAAgJAEAAQAAAAABAAIAAABQACACADABAAbAAIADAAIACAIQgGANgmgFQgBAAgBABQgKAAgEgBIgDgKIACgBIAAACQAFABAKAAIABAAQAjAFAFgNQAAAAAAAAgAgBgKQAAgBgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBQgEgBgCAJQAAAAABABQACAAACABQAAAAABABQACAAACAAQABgHABAAAgPgHQACABACABAADgIQAAAAgBAAIAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAQgEgBgBAIAADgIQABAAAAAAIABABQABAAABAAQAMgCAHAJIABAAAAAgBQAAAAAAAAQAHAAAAgGAAAgBQgBAAAAgBAADgIQgDAAAAAHAAAgJQgDgBgCAIAgKgEQACgHAEgB");
	this.shape_31.setTransform(104,31.6);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#80664D").s().p("AgUAIIgCAAIgBgCIABgDIABgDIAAAAQAjAFAFgLIAAgCIADACIACAGQgEAJgUAAIgUgBg");
	this.shape_32.setTransform(104.8,32.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#AB6C43").s().p("AgQAHIAAAAIgDgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIgBgCIAAgDIgCgDIAHgBIADABIACABIADABIACABIADABIACAAIABAAQAFABAAgGQAMgCAHAIIABABIABAAQgEAJgUAAIgRgCg");
	this.shape_33.setTransform(104.2,31.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#53412F").s().p("AgOAOIgDgJIADgBIAAABQAFACAJgBIAAAAIAAABIAAADIgBADIABACIgEAAIgKgBgAALgDQABgHADAAIABAAIAAAAIABAAIABABQgEgBgBAHIgCAAgAAGgFQABgIAFABIABABQgEgBgBAIIgCgBgAABgHQACgIAFABIAAABQgDAAgCAHIgCgBg");
	this.shape_34.setTransform(102.5,31.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#714D2D").s().p("AgQAMIAAgCIgCgKIABgCQAEACAEAAIACAAIAAAEIABADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIADACIgFAAIgKgBgAAMACIgBAAQABgFAEAAIAAAAIABABIACAAQAAAEgGAAIgBAAgAAGABQABgGAEABIABAAIABAAQgDAAgBAFIgDAAgAABAAQACgGADgBIABAAIABABIACABQgFgBgBAGIgDAAgAgCgCIgBgBQAAgJADAAIABAAIAAABQABACAEABQgFgBgBAJIgCgCg");
	this.shape_35.setTransform(102.7,31.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgdAFIAAACQAFABAKAAIABAAQAjAFAFgNQAAAAAAAAIADAAIACAIQgGANgmgFQgBAAgBABQgKAAgEgBIgDgKIACgBIgCgJIACgDQADACAFAAQADgBADgBIAAgBQAAgJAEAAQAAAAABAAIAAABQACACADABQgEgBgCAJQAAAAABABQACAAACABQAAAAABABQACAAACAAQABgHABAAAgBgKQAAgBgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBAgPgHQACABACABAADgIQAAAAgBAAIAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAQgEgBgBAIAADgIQABAAAAAAIABABQABAAABAAQAMgCAHAJIABAAAAAgBQAAAAAAAAQAHAAAAgGAAAgBQgBAAAAgBAADgIQgDAAAAAHAAAgJQgDgBgCAIAgKgEQACgHAEgB");
	this.shape_36.setTransform(104,31.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29}]}).to({state:[{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_36},{t:this.shape_30},{t:this.shape_29}]},27).wait(32));

	// Layer 19
	this.instance_20 = new lib.gr_boy_leftleg_new_031copy3("synched",0);
	this.instance_20.setTransform(99.3,24,0.149,0.16,3.5,0,0,-0.1,-41.5);

	this.instance_21 = new lib.gr_boy03_rightleg_new_021copy3("synched",0);
	this.instance_21.setTransform(100.1,13.6,0.149,0.16,3.5,0,0,0.2,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21},{t:this.instance_20}]}).to({state:[{t:this.instance_21},{t:this.instance_20}]},27).wait(32));

	// Layer 20
	this.instance_22 = new lib.gr_boy_leftleg01_new_021copy2("synched",0);
	this.instance_22.setTransform(101.3,14.2,0.148,0.159,-7.2,0,0,-0.1,-31.7);

	this.instance_23 = new lib.gr_boy_leftleg021copy3("synched",0);
	this.instance_23.setTransform(103.1,23.5,0.148,0.159,5.1,0,0,-7.7,-37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22}]}).to({state:[{t:this.instance_23},{t:this.instance_22}]},27).wait(32));

	// Layer 7
	this.instance_24 = new lib.dfsdSymbol37copy4("synched",0);
	this.instance_24.setTransform(-112.7,-26.2,0.06,0.06,0,-164.5,15.5,2.3,7.5);

	this.instance_25 = new lib.gr_ch_forarm_Lcopy4("single",0);
	this.instance_25.setTransform(-116.2,-23.8,0.058,0.051,0,-142,-141.2,9,-31.7);

	this.instance_26 = new lib.gr_cH_Arm_01_02_new_031copy4("single",1);
	this.instance_26.setTransform(-123,-23,0.055,0.049,0,-74.3,105.6,25.2,-58.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]}).to({state:[{t:this.instance_26},{t:this.instance_25},{t:this.instance_24}]},27).wait(32));

	// Layer 8
	this.instance_27 = new lib.dfsdSymbol37copy4("synched",0);
	this.instance_27.setTransform(-131.8,-13.7,0.06,0.06,22,0,0,1.7,6.5);

	this.instance_28 = new lib.gr_ch_forarm_Lcopy4("single",0);
	this.instance_28.setTransform(-134.5,-16.5,0.058,0.051,0,-23.5,155.7,9.7,-31.6);

	this.instance_29 = new lib.gr_cH_Arm_01_02_new_031copy4("single",1);
	this.instance_29.setTransform(-130.7,-22.6,0.055,0.049,0,17.9,18,25.3,-58.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27}]}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27}]},27).wait(32));

	// Layer 9
	this.instance_30 = new lib.sdSymbol4copy4("synched",762);
	this.instance_30.setTransform(-126.5,-29.9,0.121,0.121,0,4.5,-175.5);

	this.instance_31 = new lib.gr_Ch_Body_01_021copy3("single",3);
	this.instance_31.setTransform(-126.7,-10,0.057,0.061,0,-3.5,175.9,-2.1,141.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_31},{t:this.instance_30,p:{skewX:4.5,skewY:-175.5,x:-126.5,y:-29.9}}]}).to({state:[{t:this.instance_31},{t:this.instance_30,p:{skewX:24,skewY:-156,x:-125,y:-29.3}}]},27).wait(32));

	// Layer 10
	this.instance_32 = new lib.gr_boy_leftleg_new_031copy4("synched",0);
	this.instance_32.setTransform(-129.2,0.5,0.149,0.16,3.5,0,0,-0.1,-41.5);

	this.instance_33 = new lib.gr_boy03_rightleg_new_021copy4("synched",0);
	this.instance_33.setTransform(-128.5,-9.9,0.149,0.16,3.5,0,0,-0.2,-33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_33},{t:this.instance_32}]}).to({state:[{t:this.instance_33},{t:this.instance_32}]},27).wait(32));

	// Layer 11
	this.instance_34 = new lib.gr_boy_leftleg01_new_021copy3("synched",0);
	this.instance_34.setTransform(-124.9,-9.3,0.148,0.159,-7.2,0,0,-0.1,-31.4);

	this.instance_35 = new lib.gr_boy_leftleg021copy4("synched",0);
	this.instance_35.setTransform(-122.5,-1.1,0.148,0.159,35.1,0,0,-7.5,-37.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_35},{t:this.instance_34}]}).to({state:[{t:this.instance_35},{t:this.instance_34}]},27).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.6,-35.3,273.4,72.4);


(lib.Cherecter1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.img01();
	this.instance.setTransform(121.3,-12.5);

	this.instance_1 = new lib.img02();
	this.instance_1.setTransform(119.6,-9.9);

	this.instance_2 = new lib.img03();
	this.instance_2.setTransform(111.8,6.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},7).wait(8));

	// Layer 13
	this.instance_3 = new lib.dfsdSymbol37copy("synched",0);
	this.instance_3.setTransform(103,9.1,0.06,0.06,-8,0,0,1.6,7);

	this.instance_4 = new lib.gr_ch_forarm_Lcopy_new_031_1("single",0);
	this.instance_4.setTransform(99.2,8,0.058,0.051,0,-53.5,125.7,10.1,-31.9);

	this.instance_5 = new lib.gr_cH_Arm_01_02_new_031_1("single",1);
	this.instance_5.setTransform(99.5,0.8,0.055,0.049,0,-12.1,-12,25.2,-58.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgKgUIgEAQIACALIAGAKQABABAAgEIACAFQADAAgBgDQAAAAAAgBAADABIABACIAAAAIAEAPQAAABgBAAQAAAAAAAAQgCABgDgKQAAAAgBgBQAAAAAAgBQAAgBAAAAQgBgCAAgBIAAgBIACASIAAAAQgBABAAABQgBAAAAgBIgBgHAADABIAAgBIAEACQACAIAGgBQgGgJAAgFQgFgJgEgIAADAAIAAABAgFAOIgBgDIgBgCIgBgBIgCgJAgGgBIADAKIAAABIACAF");
	this.shape.setTransform(99,17.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC9C6C").s().p("AACAVIgEgKIgCgLIAEgQIABgEIgDASIACAMIACAFIABADQAAABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAIAAAAgAACABIADALIAAABgAAAAMIAAgLIAAAGIABAGIAAAAg");
	this.shape_1.setTransform(98,17.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFC488").s().p("AAAAXIgCgHIgCgFIAAAAIAAgBIgDgKIADALIAAAAIACAFIAAACQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgCgFIgBgDIgBgCIAAgBIgCgGIgBgEIACAKIABABIABACIgDgGIgDgMIAFgRQABgCAEACIADABIAIARQAAAEAGALQgGABgCgIIgEgEIAAACIABACIgBgCIAAAAIAAAAIABADIAEAPIgBAAIAAABQgCABgDgKIgBgBIAAgBIAAgCIAAgDIAAgBIABASIAAABIgBABIAAAAIAAgBgAgCAQgAACACg");
	this.shape_2.setTransform(99.1,17.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AAEABIgBgBIAFACQABAJAGgCQgGgJAAgFQgFgJgEgIAADAAIAAABIAAAAIABABIAAABIAAAAIAEAQIAAAAIgBABQgCAAgDgKQAAAAAAgBQAAAAgBAAIAAgBQAAAAAAgBQgBgCAAgBIAAgBIAAgBIAAgCAAAgCIgBAAAgKAAIABADQACAEAAACIAAAAIACAGIADAEQABABAAgDIABAFQAAACABgBQABgBAAgBIAAAAIgCgSAgKgUIgEAQIADALIAFAKQACABgBgDAgGAAIACAFIABAEIAAABIACAFIAAABIAAAB");
	this.shape_3.setTransform(95.6,16.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CC9C6C").s().p("AACAVIgDgKIgDgLIAEgQIACgEIgDASIABAEIAAAIIABADIACAGQABAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgBAAgAADACIAAgBIABAIg");
	this.shape_4.setTransform(94.6,16.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFC488").s().p("AgBAXIgBgFIAAgBIgBgBIgBgFIAAgBIgBgEIABAEIgBAAIABABIABAFIABABIAAABQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgCgEIgDgGIAAAAIgBgGIgCgEIACAEIABAGIAAAAIgBgDIgCgHIgBgFIAFgSQABgBAEACIADABIAIARQAAAEAGAKQgGACgCgJIgEgDIAAACIAAAAIAAAAIAAgBIgBAAIABABIAAABIAAABIABAAIADAQIAAAAIAAABQgCAAgEgKIAAgBIAAAAIAAgBIAAgBIAAgDIAAgBIAAgBIgBgDIABADIAAABIAAASIAAAAIAAACIAAAAIgBgBgAgHAAIACAGIgCgGgAgBAAIgBgBIAAAAg");
	this.shape_5.setTransform(95.7,16.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgFAOIgBgDIgBgCIgBgBIgCgJAgGgBIADAKIAAABIACAFAADAAIAAABIAAgBIAEACQACAIAGgBQgGgJAAgFQgFgJgEgIAADABIABACIAAAAIAEAPQAAABgBAAQAAAAAAAAQgCABgDgKQAAAAgBgBQAAAAAAgBQAAgBAAAAQgBgCAAgBIAAgBIACASIAAAAQgBABAAABQgBAAAAgBIgBgHAgFAOIACAFQADAAgBgDQAAAAAAgBAgKgUIgEAQIACALIAGAKQABABAAgE");
	this.shape_6.setTransform(97.7,17.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFC488").s().p("AAAAXIgCgHIgCgFIAAAAIAAgBIgDgKIADALIAAAAIACAFIAAACQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAIgCgFIgBgDIgBgCIAAgBIgCgGIgBgEIACAKIABABIABACIgDgGIgDgMIAFgRQABgCAEACIADABIAIARQAAAEAGALQgGABgCgIIgEgEIAAACIAAAAIAAAAIABACIgBgCIABADIAEAPIgBAAIAAABQgCABgDgKIgBgBIAAgBIAAgCIAAgDIAAgBIABASIAAABIgBABIAAAAIAAgBgAgEALg");
	this.shape_7.setTransform(97.8,17.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5,p:{regX:25.2,regY:-58.6,scaleX:0.055,scaleY:0.049,skewX:-12.1,skewY:-12,x:99.5,y:0.8}},{t:this.instance_4,p:{regX:10.1,scaleX:0.058,scaleY:0.051,skewX:-53.5,skewY:125.7,x:99.2,y:8,regY:-31.9}},{t:this.instance_3}]}).to({state:[{t:this.instance_5,p:{regX:25.3,regY:-58.2,scaleX:0.057,scaleY:0.061,skewX:-2.8,skewY:-2.7,x:100.4,y:1.8}},{t:this.instance_4,p:{regX:9.7,scaleX:0.059,scaleY:0.06,skewX:14.8,skewY:-161.4,x:98.4,y:10.3,regY:-31.9}},{t:this.shape_2},{t:this.shape_1,p:{x:98,y:17.4}},{t:this.shape}]},7).to({state:[{t:this.instance_5,p:{regX:25.3,regY:-58.2,scaleX:0.057,scaleY:0.061,skewX:-2.8,skewY:-2.7,x:96.9,y:0.6}},{t:this.instance_4,p:{regX:9.9,scaleX:0.059,scaleY:0.06,skewX:14.8,skewY:-161.4,x:94.9,y:9,regY:-32.8}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},7).to({state:[{t:this.instance_5,p:{regX:25.3,regY:-58.2,scaleX:0.057,scaleY:0.061,skewX:-2.8,skewY:-2.7,x:99,y:1.6}},{t:this.instance_4,p:{regX:9.9,scaleX:0.059,scaleY:0.06,skewX:14.8,skewY:-161.4,x:97,y:10,regY:-32.8}},{t:this.shape_7},{t:this.shape_1,p:{x:96.7,y:17.1}},{t:this.shape_6}]},7).wait(1));

	// Layer 14
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AgDAAQAEAAAHAAIABgBQgBAAgBABQgCgBgDAAQgCAAgDABQgDAAgCACQACgCADAAg");
	this.shape_8.setTransform(102.2,-7.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#180A0A").s().p("AgDAAIAFAAIAFAAIACAAIgBAAIgLAAIgFABIAFgBg");
	this.shape_9.setTransform(102.2,-7.3);

	this.instance_6 = new lib.dfsdgr_Eye_CH_r_01_02_new_021copy2("single",0);
	this.instance_6.setTransform(102.5,-6.7,0.081,0.075,0,-3,177);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AAmgOQAAgEgGgKQgGgJgMgCQgLgCgFAAQgHgBgKAKQgBAAgEABQgFACgDAHQgEAHAAAIQgBAHAFAJQAFALgDAOQAMAAAFgJQgCgDgBgDQgDAAAAgEQgBgEgCgEQAAgDABgBQABgDAEAAQABABABACQABAAAAABIAAABQAAAAAAABQACAHACgBQACgBABAAQABgBAAgDQAAgCACgFQADgIAHgDQABgBABAAQAGgDADABAgQATQAEgBgBgFAAYgZQAEAEABAHQAAAEgBAGQABAFAIAKQACAGgGgBQgBABAAADQgEAAgEACQgBAAAAAAQAEABAFAAQACACgCABQgBAAgCgBQgDAAgDgDAAdAZQgEAAABACQABABAAAIQAAAHgPgBAAgAXQABgBAAAAQAAgBgBgB");
	this.shape_10.setTransform(100.5,-6.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E79871").s().p("AABACQgCgBgDgBIABAAIADAAIAAAAIAAAAIABAAIAAAAIABAAIACAAIgCAAIgBAAIAAAAIgBAAIAAAAIAAAAIgDAAIgBAAIABAAIAHgBQAAAAAAAAQAAAAAAAAQABABAAAAQgBAAAAAAIAAAAQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAAAIgDAAg");
	this.shape_11.setTransform(103.3,-4.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FCC791").s().p("AAEAdQgFgBgGgDIgGgDQgFgEgDgHIgCgFQABAAAAgBQABAAAAgBQAAAAAAgBQABAAAAgBIgBgCIABACQAAABgBAAQAAABAAAAQAAABgBAAQAAABgBAAQgDAAgBgEQAAgDgCgDIABgFQABgCADAAIADACIAAACIAAAAIABABQACAGACAAIACgBIACgDIACgIQADgJAHgEIACgBQAGgDADABIAKAAIgBAKQACAIAHAJQADAFgHgCIAAAFIgJABIgBABQADACAEABQgBAAgBAAQAAAAgBAAQAAAAAAAAQAAABAAAAIABAJQAAAHgMAAIgEAAg");
	this.shape_12.setTransform(101.2,-5.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#151515").s().p("AggANQgFgLABgFQAAgIAEgHQADgHAFgCIAFgBQAKgKAHABQAFAAALACQAMACAGAJQAGAKAAAEIgJAAQgBgHgEgEQAEAEABAHIgLAAQgDgBgGADIgCABQgHADgDAIIgCAHIgBAEIgDABQgCABgCgHIAAgBIAAgBIgBgBIgCgDQgEAAgBADIgBAEQACAEABAEQAAAEADAAIADAGQgFAJgMAAQADgOgFgLg");
	this.shape_13.setTransform(100.5,-7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AgDAAQAEAAAHAAIABgBQgBAAgBABQgCgBgDAAQgCAAgDABQgEAAgBACQACgCADAAg");
	this.shape_14.setTransform(102.7,-6.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AAmgOQAAgEgGgKQgGgJgMgCQgLgCgFAAQgHgBgKAKQgBAAgEABQgFACgDAHQgEAHAAAIQgBAHAFAJQAFALgDAOQAMAAAFgJQgCgDgBgDQgDAAAAgEQgBgEgCgEQAAgDABgBQABgDAEAAQABABABACQABAAAAABIAAABQAAAAAAABQACAHACgBQACgBABAAQABgBAAgDQAAgCACgFQADgIAHgDQABgBABAAQAGgDADABAgQATQAEgBgBgFAAYgZQAEAEABAHQAAAEgBAGQABAFAIAKQACAGgGgBQgBABAAADAAgAXQACACgCABQgBAAgCgBQgEAAABACQABABAAAIQAAAHgPgBAAgAXQABgBAAAAQAAgBgBgBQgEAAgEACQgBAAAAAAAAdAZQgDAAgDgDQAEABAFAA");
	this.shape_15.setTransform(100.9,-6);

	this.instance_7 = new lib.sdSymbol4copy_1("synched",769);
	this.instance_7.setTransform(101,-6.9,0.121,0.121,0,4.5,-175.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AgCgBQADABAGADIACgBQgBAAgBAAQgCgCgDAAQgCgBgBgBQgFAAgCAAQADABADAAg");
	this.shape_16.setTransform(104.9,-4.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#180A0A").s().p("AgCgBIgGgBIAHAAIADACIAFACIACAAIgCABIgJgEg");
	this.shape_17.setTransform(104.9,-4.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AApABQACgBAAgLQgBgLgJgIQgIgIgGgDQgHgEgMADQAAAAgEgBQgFgBgGAFQgHAEgEAGQgEAGgBAMQgCALgJAKQAKAGAJgFQAAgDABgDQADAAACgEAgWAFQgDgCACgDQABgDABgEQABgDABgBQACgBADACQABABAAACIAAAAQAAABAAABIAAAAQAAABAAAAQgCAFACABQACAAABAAQABgBACgBQABAAAFgEQAFgHAJABQABAAACABQAGABACACAANAhQgDgCAAACQAAACgEAGQgDAHgMgJAAjgMQACAFgDAGQgCACgEAEQgDAHACAMQgBAHgFgEQgBAAgCADQgDgCgFAAIAAAAQADACAEADQAAACgCAAQgBgBgBgBQgCgCgCgEIABABAARAhIABgBQABgBgBgB");
	this.shape_18.setTransform(103,-4.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E79871").s().p("AABADIgBgBIgDgEIAAAAIABAAQACABAEABQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBABIAAAAIgGgDIAGADQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIAAAAgAADABIAAAAg");
	this.shape_19.setTransform(104.4,-1.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FCC791").s().p("AgNAXQgGgFgEgFIgDgGQgCgGAAgEIABgGIABAAIAAAAIABAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBABAAIAAgBIAAAAIAAAAIAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBABAAAAIgBAAIAAAAIgBAAQgCgCABgEIACgIIADgEQACgBADACIABADIAAAAIAAACIAAAAIgBABQgBAHACABIADAAIACgCIAGgGQAGgHAJABIACABQAHABACACIAJAFIgGAIQgCAHACAKQgCAHgEgEQgBAAAAAAQAAAAgBABQAAAAAAABQgBABAAAAQgEgCgEAAIgBAAIAAgBIAEAGQgBAAgBgBQAAAAgBAAQAAAAAAAAQgBAAAAABQAAACgDAGQgCADgBAAQgFAAgHgFg");
	this.shape_20.setTransform(103.4,-3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#151515").s().p("AgqAaQAJgMACgMQABgJAEgGQAEgGAHgFQAGgEAFABIAEABQAMgDAHADQAGAEAIAIQAJAHABAJQAAALgCAEIgHgFQACgDAAgEIgBgEIABAEQAAAEgCADIgKgFQgCgCgGgBIgDAAQgJgBgFAGIgGAGIgDACIgDAAQgCAAACgHIAAgBIAAgBIAAgBIAAgBIgBgDQgDgBgCABIgCAEIgCAIQgCAEADABIgBAGQgEADgFAAQgFAAgFgDg");
	this.shape_21.setTransform(103,-6.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13,p:{x:100.5,y:-7}},{t:this.shape_12,p:{x:101.2,y:-5.2}},{t:this.shape_11,p:{x:103.3,y:-4.2}},{t:this.shape_10},{t:this.instance_6,p:{x:102.5,y:-6.7,skewX:-3,skewY:177}},{t:this.shape_9,p:{x:102.2,y:-7.3}},{t:this.shape_8}]}).to({state:[{t:this.shape_13,p:{x:100.9,y:-6.4}},{t:this.shape_12,p:{x:101.7,y:-4.7}},{t:this.shape_11,p:{x:103.8,y:-3.7}},{t:this.shape_15},{t:this.instance_6,p:{x:102.9,y:-6.2,skewX:-3,skewY:177}},{t:this.shape_9,p:{x:102.7,y:-6.7}},{t:this.shape_14}]},7).to({state:[{t:this.instance_7}]},7).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.instance_6,p:{x:104.9,y:-4.2,skewX:27,skewY:-153}},{t:this.shape_17},{t:this.shape_16}]},7).wait(1));

	// Layer 15
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("rgba(0,0,0,0.2)").ss(0.1,1,1).p("AgQhQIACgBIABgBIAAABQgBABABABIAAABQAAABACABQAAABACACQAFACAEAAIAAAAQAAAAAAAAQABAAABABQACgBABAAQAKAAADgFQADgDgBgDIAFABQABAJgJAEQgFACgDABQgBAAgBAAQAAAAAAAAQgBAAgBABQAAAAAAAAQgBAAAAAAQgCAAgCAAQgBgBgDgBQgGgBgEgEQgBgBgBgBQAAAAAAgBQgCgCACgEgAgjguQAAgCABgBQABgHADgGQAEgIACgDQADgEACgBIADgCAgnAtIgCAbQAAADACABIABgGIABAHQALADAJABQAEABAFABQABAAABAAQACAAABAAQAKABAKgBQADAAACAAQAFgBAGgBQAFgCAEgCIgDh6IABgGQAAAAAAgBQAAgUgPgJAgkAQIAAgBQAAgCAAgEQAAgCABgCQAAgCAAgCQAAAAAAgBQABgBAAgDQAAgCAAgCIgCgJQAAgCAAgDQAAgBAAAAQAAgFAAgFQAAgFABgEQAAgCABgBQAAgCAAgBAglAkIAAgBQAAgBAAgBIAAgBIABgOIAAgCAglAkIgBAAIAAADgAglAkIAAAAAglAkQAAAAgBAAAgmAoQAAAAAAAAIAAABQAAAAAAABIAAABIAAAAIAAAAIAAAAIgBAAIAAABIAAABIABgBIAAgBIgBABAgmAoIAAgBAgmArQAAAAAAABIgBAAAgmAqIAAgC");
	this.shape_22.setTransform(100,6.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFF00").s().p("AAAAEIAAAAIAAABIAAgBIAAABIAAAAIAAAAIAAAAIAAAAIAAAAgAAAAFgAAAAFgAAAAEIAAAAIAAABgAAAAEgAAAgBIAAAAIAAAAgAAAgEIAAACIAAABIAAAAIAAgDg");
	this.shape_23.setTransform(96.1,10.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#6C64B5").s().p("AAQBBIgCAAIgJgCIgSgEIgBgHIgBAGQAAgBgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIADgbIAAgBIAAAAIABgBIAAAAIAAgBIAAgCIAAgBIABgDIAAAAIAAgBIAAgCIAAgBIABgOIAAAAIAAAAIAAgBIAAgGIABgEIAAgEIAAgBIAAgGIAAgEIgBgJIAAgFIAAgBIAAgKQAAABAAAAQAAABABgBQAAAAAAgBQAAgCAAgCIAAgFIABgDQAGAIACAGIACAIIAAADIAEAdQAEAbgDAJQgEAJgDAGQgGAGAMAHQANAIACACIgDAAgAgPAbIAAgBgAgLg8IAAgEIABABIgBADIAAAAg");
	this.shape_24.setTransform(97.6,8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#1C8CFD").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_25.setTransform(100.8,-0.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#7D77B5").s().p("AgHBSQgBgCgOgIQgNgHAFgGQAGgGADgJQADgJgEgdIgEgbIgBgDIgDgIQgCgFgGgJIABgDIgBgBQABgHAEgGIAGgLIAEgFIADgBQgBADABACIAAABIACACQAEAEAGACIAFABIADAAIABAAIABAAIABgBIAAABIABgBIABAAIAIgCQAJgFgBgJQAQAJgBAUIAAABIgBAGIAEB6IgKAEIgLACIgEAAIgLABIgKgBg");
	this.shape_26.setTransform(100.4,6.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#AB6C43").s().p("AABAIIgBAAIgCAAIgFgBQgGgBgFgFIgBgBIAAAAQgCgCABgDIADgCIABgBIAAACIAAACIAAABIABACIADABIAJACIABAAIABAAIABABIACgBQAJgBAEgBQADgEgBgDIAEABQACAHgKAFIgIACIgBAAIgBAAIgBAAIgBAAg");
	this.shape_27.setTransform(100.3,-1.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("rgba(0,0,0,0.4)").ss(0.1,1,1).p("AgGgQQAGgCAKgCQABAEAAABQABADAAABQABAKADABQAEACABADQgDAJgJAEQgCABgCAAQgFADgFgBQgBAAgBAAQgBAAAAgBQgDAAgDgCQgJgFADgEQACgCAAgDQACgCAAgCQAFgFAAgL");
	this.shape_28.setTransform(100.3,-2.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFC488").s().p("AAAAPIAAAAIgEgBIgBgBIABgCIAAgBQgHABABgHQABgEADgBIAHgPIABAEQABAKADACQAEABABADQgDAIgIAFg");
	this.shape_29.setTransform(101.3,-2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFBA75").s().p("AAAAVIgCAAIgBgBIgGgCQgJgFADgEQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAFgFAAgLIAFAAIAQgEIABAFIgJAPQgDABgBAEQgBAHAHgBIAAABIgBACIABABIAFABIAAAAIAAACIgEABQgEACgFAAIgBAAg");
	this.shape_30.setTransform(99.8,-2.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("rgba(0,0,0,0.2)").ss(0.1,1,1).p("AAZhRQABAJgJAEQgFACgEABQAAAAgBAAQAAAAAAAAQgBAAgBAAQAAAAAAAAQgBAAgBAAQgBAAgCAAQgBAAgDgBQgGgBgFgFQAAAAgBgBQAAgBAAAAQgCgDACgDAgkAQIAAgBQAAgDAAgDQAAgCABgCQAAgCAAgCQAAAAAAgBQAAgBAAgDQAAgCAAgDIgBgIQAAgCAAgDQAAgQgBgDIgBgJQAAgFACgCQAAgDACgEQACgEAMgKIAEgCIACgCIABgBIAAACQgBABABABIAAAAQAAABACABQAAACACABQAEACAFABIAAAAQAAAAAAAAQABAAABABQABgBACAAQAKgBADgEQADgDgBgDIAFABAgnAtIgCAbQAAADACABIABgGIABAHQALADAJABQAEABAFABQABAAABAAQABAAACAAQAKABAKgBQADAAACAAQAFgBAGgBQAFgCAEgCIgDh6IABgGQAAgBAAgBQAAgTgPgJAglAkIAAgBQAAgBAAgBIAAgBIABgOIAAgCAgmAkIAAADIABgDgAgmAnIAAABQAAAAAAAAIAAACIAAABIgBAAIAAABIAAABIABgBIgBAAAglAkIAAAAAglAkQAAAAgBAAAgmArIAAAAIAAAAIAAAAQAAAAAAABIAAgBIgBABAgmAqIAAgC");
	this.shape_31.setTransform(100.5,6.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF00").s().p("AAAAFIAAAAIAAAAgAAAAEIAAAAIAAABIAAAAgAAAAFIAAgBIAAABgAAAAEIAAAAIAAABgAAAAEgAAAgBIAAAAIAAAAgAAAgEIAAACIAAABIAAAAIAAgDg");
	this.shape_32.setTransform(96.5,10.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6C64B5").s().p("AAQBDIgCAAIgJgCIgSgFIgBgGIgBAFQAAAAgBAAQgBAAAAgBQAAAAgBgBQAAAAAAgBIADgbIAAgBIAAAAIABgBIAAgBIAAgBIAAgBIAAgBIABgDIAAAAIAAgBIAAgDIAAAAIABgOIAAgCIAAAAIAAAAIAAgFIABgFIAAgDIAAgBIAAgGIAAgFIgBgJIAAgEIgBgTIgBgJQAJAMADAHIACAKIAEAdQAEAcgDAJQgEAIgDAGQgGAHAMAHQANAIACACIgDAAgAgPAdIAAgBg");
	this.shape_33.setTransform(98.1,8.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AB6C43").s().p("AABAIIgBAAIgCAAIgFgBQgGgBgFgFIgBgBIAAAAQgCgCABgCIADgDIABgBIAAACIAAACIAAABIABACIADABIAJADIABAAIABAAIABAAIACAAQAJgCAEgCQADgDgBgDIAEABQACAHgKAFIgIACIgBAAIgBAAIgBAAIgBAAg");
	this.shape_34.setTransform(100.8,-0.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#7D77B5").s().p("AgFBSQgCgCgNgIQgOgHAGgGQAFgGAEgJQADgJgEgdIgEgbIgEgLQgDgHgIgMQAAgFABgCIACgHQACgEANgKIACgBQAAADABACIAAABIABACQAFAEAGACIAFABIADAAIABAAIABAAIABgBIAAABIAAgBIABAAIAJgCQAJgFgBgJQAQAJgBAUIAAABIgBAGIAEB6IgKAEIgLACIgFAAIgKABIgKgBg");
	this.shape_35.setTransform(100.7,6.9);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFC488").s().p("AAAAPIAAAAIgEgBIgBgBIABgCIAAgBQgHABABgHQABgEADgCIAHgOIABAEQABAKADACQAEABABADQgDAIgIAFg");
	this.shape_36.setTransform(101.8,-1.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFBA75").s().p("AAAAVIgCAAIgBgBIgGgCQgJgFADgEQABgBAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQAAgBAAAAQAFgFAAgLIAFAAIAQgEIABAFIgJAPQgDABgBAEQgBAHAHgBIAAABIgBACIABABIAFABIAAAAIAAACIgEABQgFACgEAAIgBAAg");
	this.shape_37.setTransform(100.3,-1.6);

	this.instance_8 = new lib.gr_Ch_Body_01_021_1("single",3);
	this.instance_8.setTransform(100.8,13,0.057,0.061,0,-3.5,175.9,-3,141.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("rgba(0,0,0,0.4)").ss(0.1,1,1).p("AgjAKIAAAAIAAgBQAAgCABgEQAAgCABgBQAAgBAAgCQABAAAAAAQAAgDABgEQAAgCAAgCIABgJQAAgCAAgCQACgQAAgDIABgJQAAgGABgBQACgDACgDQADgEANgJIADAAAASg/QAAAAgBAAQAAgBgBABQAAgBgBAAQgCAAgCAAQgDgBgCgBQgGgCgBgFQgBgBgBgBQAAAAAAgBIAAAAQgBgDABgCIADgCIAAgBIAAACQAAABAAAAQAAABAAAAQAAABAAABQABACACABQADADAFACIABAAQAAAAABAAQAAAAABABQACAAACAAQAJAAAEgDQAEgDAAgEIADACQAAAJgKADQgEABgEABQAAAAgBAAIAAAAAgqAmIgHAbQAAACACACIACgGIAAAHQAKAEAJADQAEACAFABQAAAAABABQACAAACAAQALADAJABQACAAACAAQAGAAAFgBQAFAAAFgCIAQh/QAAgBAAAAQAEgUgPgLAgoAeIAAgBQABgBAAgBIAAgBIAAAAIAEgOAgoAeIAAAAQAAABAAAAIAAABIgBABAgoAeIAAAAAgoAeIAAAAAgpAiIABgBIgBAAAgpAiIAAgBAgpAiIAAAAAgoAhIAAgBIAAgCIAAABAgpAjIAAAAIAAgBIAAAAAgpAkIAAgBQAAABgBAAAgqAlIABgBIgBAAIAAABIAAAAIAAABIAAAAAgqAlIAAABIAAgBAgpAjIAAgB");
	this.shape_38.setTransform(98.9,6.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFF00").s().p("AAAAEIAAgBIAAABIAAgBIAAAAIAAABIAAAAgAAAACIAAAAgAAAACIAAgBIAAAAIAAABgAAAABIAAABIAAAAIAAgBgAAAABgAAAAAIAAAAIAAAAgAAAgCIABAAIgBAAIABAAIAAAAIgBABIAAgBgAAAgCgAAAgCIABgBIAAABIgBAAgAABgCg");
	this.shape_39.setTransform(94.6,10);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#6C64B5").s().p("AAOBEIgBAAIgJgDIgRgHIAAgHIgCAFQAAAAgBgBQAAAAAAAAQgBgBAAgBQAAAAAAgBIAHgaIABgBIAAAAIAAgBIAAAAIAAgBIAAAAIABgBIAAgBIAAgBIAAgBIABgBIAAgBIAAgBIAAgBIABgBIAAgBIADgNIAAAAIAAgBIAAAAIABgGIABgFIABgDIAAgBIAAgGIAAgEIABgJIAAgFIABgTIABgJQAHANABAIQADAJgBACIAAAdQABAcgFAIQgEAIgFAFQgGAFAKAKIAOAMIgEgBgAgJAZIAAgCg");
	this.shape_40.setTransform(95.7,7.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#AB6C43").s().p("AACAKIAAAAIgBAAIgBAAIAAAAIAAgBIgEAAIgFgCQgGgCgDgFIgCAAIAAgBIAAAAQgBgDABgCIADgCIABgBIAAACIAAABIAAABIABACIADADQADABAFACIABAAIABAAIABABIACAAQAJAAAEgDQAEgBAAgEIADACQAAAHgKADIgIACIgBAAg");
	this.shape_41.setTransform(100.6,-0.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#7D77B5").s().p("AAABUQgIgBgMgDIgOgMQgMgJAHgGQAGgFAEgIQAFgIAAgdIAAgcQAAgCgCgJQgCgIgHgNIACgHIAEgFQACgFAOgIIADgBQgBADABADIgBAAIABABIABABQAEAFAFADIADABIAFABIABAAIABAAIABAAIAAAAIABAAIABAAIAIgBQAKgDAAgJQAOALgDATIgBACIgPB/IgKACIgMABIgEAAg");
	this.shape_42.setTransform(99.6,6.7);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("rgba(0,0,0,0.4)").ss(0.1,1,1).p("AAEgSQAGADAMADQgCAEAAACQgBACgBABQgDAIABADQADAEgBADQgHAHgLgCQAAAAgBAAQgHgCgFgDQAAgBgBAAQgBgBAAAAQgCgCgCgDQgFgIAFgBQACgBABgCQADgBABgCQAIgEAEgJ");
	this.shape_43.setTransform(100.9,-1.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFC488").s().p("AgGAOIABgCIAAAAIgEgDIAAgBIACgBIAAgBQgGgEAEgCIAHgFIAOgIIgCADQgEAKACABQACAEgBAEQgGAFgGAAIgDAAg");
	this.shape_44.setTransform(101.8,-1.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFBA75").s().p("AgBAUQgHgCgEgDIgCgBIgBgBIgEgFQgFgIAFAAIADgEIAFgDQAHgEAEgIIAEACIATAFIgDAGIgPAGIgFAEQgFAFAFADIAAABIAAACIAAABIACADIAAAAIgCABIgBAAg");
	this.shape_45.setTransform(100.9,-1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:100.3,y:-2.2}},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25,p:{x:100.8,y:-0.4}},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22}]}).to({state:[{t:this.shape_37},{t:this.shape_36},{t:this.shape_28,p:{x:100.8,y:-1.6}},{t:this.shape_35},{t:this.shape_34},{t:this.shape_25,p:{x:101.2,y:0.2}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31}]},7).to({state:[{t:this.instance_8}]},7).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38}]},7).wait(1));

	// Layer 16
	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AAAgJQgBgBAAAAQgBAAAAgBQgBABAAAAQAAABAAAAQgBgBAAAAQgBAAAAAAQgEAAgBABQgDABACAGQACACACAAQABAAAAAAQAAACADAFIAAAAQABABgBABQAAABgCABQAAAAAAABQgBAAABABIAAABQABAAAAAAQADgCABgCQAAgCgBgCQgDgGABgCQABgBAAgCQAAgDgDgCAgCgLIAAAAQAAgBABAAQABgCABABIAAABQADACABACIAAACQABACAAABQAFACAAAAIABAAQAAAAABAAQAAAAAAABQAAAAAAAAQAAAAgCAAQgCAAgEgBQgBgBgBgCQgDAAgCgBIACgCQACAAABAAIgCgCQgBgBAAAAQAAAAAAAAQAAAAAAABAAAgHQAAgBAAgBAgEgGIAAgBQgDgBgCABQgBABABACQABACABAAQABAAABgBQABgCAAgBg");
	this.shape_46.setTransform(98.9,31.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#53412F").s().p("AgFAOIAAgBIAAgBIAAgBIACgCIAAgCIAAAAQgDgFAAgCIgBAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBgBQgCgGADgBQABgBAEAAQADACAAADIgBADQgBACADAGQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgBAAgAgJgHQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIACACIACgBIABgDIAAgBIgEAAIgBAAgAAFgBIgCgDIgFgBIACgCIgCACQAAgDgDgCIABAAIABABIAAgBIABgBIABABIABABIAAACIADAAIgCgCIgBgBIAAAAIAAABIgBgBIgBgBIAAAAIABgBQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAIAAABIAEAEIAAACIABADIAFACIABAAIABAAIAAABIAAAAIgCAAQgCAAgEgBgAgFgKIAAAAgAgCgLIAAAAg");
	this.shape_47.setTransform(98.9,31.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgNgOIAAgCQADgKAEABQABAAABABIAAAAQABADADADQgEgDgGAKQABABABAAQACACACABQABABABAAQABACABAAQADgJAEACQgBAAAAgBQgBAAAAAAQAAgBgCgBQAAAAgBAAQAAgBgBAAQAAgBgBAAIAAgBQAAAAAAgBAgjgCIAAACQAFABANADQAAAAAAAAQAqATAKgOQAAgCAAgBIADAEIAAAKQgMAOgsgTQgBAAgBAAQgMgCgGgEIAAgKIADgBIACgOIACgDQAEADAFABQAEABAFAAQABABACACAAKgIIAAAAIABAAQABABABABQAQABAGAKQAAABAAAAAAHgLQAAAAAAAAIAAABIABAAIAAAAQABABABABQgFgDgEAIQgBAAAAgBAABgDQABABABAAQAIACACgGAgIgKQAFgIADACAAFgMQgFgCgCAIAACgOQgCgCgEAJ");
	this.shape_48.setTransform(98.9,32.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#80664D").s().p("AgbAAIgBAAIgBgCQAAAAAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIADgDIgBgBQApAQALgMIgBgCIAEAEIAAAIQgFAFgLAAQgOAAgbgKg");
	this.shape_49.setTransform(99.8,34.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#AB6C43").s().p("AgXAFIgBgBIgCgCQgCgCAAgCIABgEIABgFIgCgDIAJAAIADADIACACIAEADIABABIAEACIACABIACABQAGABACgGQAQACAFAKIAAABIABACQgFAGgKAAQgOAAgXgKg");
	this.shape_50.setTransform(99.6,32.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#53412F").s().p("AgXAMIAAgMIADAAIAAABQAFADAMACIABABIABABIgDADQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAAAIABADQgNgCgFgDgAAOgBQAEgJADABIABABIAAAAIAAAAIABABIABABQgEgDgEAJIgCgBgAAIgEQAEgKAEACIABAAIACACQgFgCgEAJIgCgBgAADgJQAFgJAFADIABABIABAAQgFgCgFAJIgCgCg");
	this.shape_51.setTransform(97.5,32.6);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#714D2D").s().p("AgXAKIAAgDIABgMIACgCQAEADAFABIACADIgBADIgBAEQAAADADADIACACQgNgCgEgDgAAOAIIgCgBQAEgHAFABIAAAAIABAAIACACQgBAFgFAAIgEAAgAAHAEQAEgHAFACIABABIABAAQgEgBgDAHIgEgCgAACAAQAFgHAFACIAAABIABABQgEgCgEAIIgDgDgAgCgDIAAgCQACgKADABIACABIAAABQABADAEADQgFgDgFAJIgCgDg");
	this.shape_52.setTransform(97.8,31.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgCgLIAAAAQAAgBABAAQABgCABABIAAABQADACABACIAAACQABACAAABIAFACIAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQgBAAgBAAQgCAAgEgBIAAAAQgBgBgBgCQgDAAgCgBIACgCQAAgBAAgBAAAgHQACAAABAAIgCgCQgBgBAAAAQAAAAAAAAQAAAAAAABQgBgBAAAAQgBAAAAgBQgBABAAAAIAAABQgBgBAAAAIgBAAQgEAAgBABQgDABACAGQACACACAAQAAAAABAAQAAACACAFIAAAAQABABAAABQAAABgCABQAAAAgBABQAAAAAAABQABAAAAABQABAAAAAAQADgCABgCQAAgCgBgCQgDgGABgCQABgBAAgCQAAgDgDgCAgEgGIAAgBQgEgBgBABQgBABABACQABACABAAQABAAABgBQABgCAAgBg");
	this.shape_53.setTransform(100.4,32.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#53412F").s().p("AgFAOIgBgBIAAgBIABgBIACgCIgBgCIAAAAQgCgFAAgCIgBAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBgBQgCgGADgBQABgBAEAAQADACAAADIgBADQgBACADAGQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgBAAgAgJgHQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIACACIACgBIABgDIAAgBIgEAAIgBAAgAAFgBIAAAAIgCgDIgFgBIACgCIADAAIgCgCIgBgBIAAAAIAAABIAAACIgCACQAAgDgDgCIABAAIABABIAAgBIABgBIABABIABABIgBgBIgBgBIAAAAIABgBQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAIAAABIAEAEIAAACIABADIAFACIAAAAIABAAIABAAIAAABIAAAAIgCAAQgCAAgEgBgAgFgKg");
	this.shape_54.setTransform(100.4,32.3);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgNgOIAAgCQADgKAFABQAAAAABABIAAAAQACADACADQgEgDgGAKAAFgMQAAgBgCgBQAAAAgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBAAHgLQgBAAAAgBIgBAAQgFgCgCAIQACACAAAAQADgIAEABQAAAAABAAIAAABIAAAAIABAAQABABAAABIABAAQABABACABQAPABAGAKQAAABAAAAIAEAEIgBAKQgLAOgtgTQgBAAAAAAQgNgCgFgEIAAgKIADgBIAAACQAFABAMADQAAAAABAAQApATALgOQgBgCAAgBAgNgOQACABABACQACABAAAAQACACACABQABABABAAAACgDQABABAAAAQAIACADgGAACgDQgBAAgBgBAgIgKQAGgIADACAACgOQgCgCgEAJAgigCIABgOIADgDQADADAGABQAEABAEAAAAKgIQgEgDgEAI");
	this.shape_55.setTransform(100.5,33.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#80664D").s().p("AgaAAIgCAAIgBgCQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIADgDIgBgBIAAAAQApAQALgMIgBgCIAEAEIAAAIQgFAFgLAAQgOAAgagKg");
	this.shape_56.setTransform(101.3,34.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#AB6C43").s().p("AgXAFIAAgBIgDgCQgCgCAAgCIAAgEIABgFIgBgDIAJAAIACADIADACIAEADIABABIAEACIACABIABABQAGABADgGQAQACAFAKIAAABIABACQgFAGgKAAQgOAAgXgKg");
	this.shape_57.setTransform(101.1,33.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#53412F").s().p("AgXAMIAAgMIADAAIAAABQAFADAMACIABABIgBAAIABABIgDADQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAIACADQgNgCgFgDgAANgBQAEgJAEABIABABIAAAAIAAAAIABABIABABQgEgDgEAJIgDgBgAAIgEQAEgKAFACIAAAAIACACQgFgCgEAJIgCgBgAACgJQAGgJAFADIABABIABAAQgFgCgGAJIgCgCg");
	this.shape_58.setTransform(99,33.1);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#714D2D").s().p("AgYAKIAAgDIACgMIADgCQADADAGABIABADIgBADIAAAEQAAADACADIACACQgNgCgFgDgAAOAIIgCgBQAEgHAFABIAAAAIAEACQgCAFgFAAIgEAAgAAHAEQAEgHAFACIABABIABAAQgEgBgEAHIgDgCgAABAAQAGgHAEACIABABIABABQgEgCgEAIIgEgDgAgCgDIAAgCQACgKADABIACABIAAABQABADAEADQgFgDgFAJIgCgDg");
	this.shape_59.setTransform(99.4,32.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgCgIQgCgBgBAAQgDAAAAAFQABADABAAQAAABABAAQgBAAAAAFQAAABAAABQgBAAgBAAQgBAAAAABQAAAAAAABIAAAAQAAABABAAQACAAABgCQABgBAAgCQAAgFABgBQABgBACgBQACADABAAQABAAABABQACADACABQABAAAAAAIABgBQAAAAAAgBQgBAAAAAAIgBAAQgBgBgBgCQgBAAgBgBQAAgCgCgDIAAgBIAAAAQgBgBAAAAQgBAAgBAAQAAAAAAABQAAABAAABIAAAAIAAgBQABAAAAABQABAAAAABIABACQgBAAgCgCIAAABIgBAAQABgCgCgDgAAAgEQAAgBAAAAAgBgFQgDgCgBAAQgBAAAAADQAAABABAAQAAABABgBQABAAABgCgAAAgHQAAgBgBAAIgBAA");
	this.shape_60.setTransform(98.2,32);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#53412F").s().p("AgJAJIAAAAIAAgBIAAgBIACAAIAAgCIABgFIgBgBIgBgDQAAgFACAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAABAAIABAEIAAABIABAAIAAgBIACACIAAgCIgBgBIgBgBIAAABIAAAAIAAABIAAABIgBAAIAAgBIgBgEIABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAABAAAAIAAACIAAgCIAAgBIABAAIABABIABAAIAAABIACAFIACABIACADIAAAAIABAAIAAABIAAABIgBAAQgCgBgCgDIgCgBIgDgDIgDACQgCABAAAFQABAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAIAAgBgAgGgEIAAABIACAAIACgCIABAAIgFgCIAAADg");
	this.shape_61.setTransform(98.2,32);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AhegmQCDggA6B0");
	this.shape_62.setTransform(98.6,33.7,0.069,0.074,0,0,180);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AhfgmIAdhHQB/hmBqCPIgtA/IgSAWIgZAkIgQAXIgWAeIgQAXIgRAXQhHgthnASIAJgVIAMgcIAIgTIAMgaQBQgxB8BHAiRBMQBLgkBvBCAidBoQBJglBtA+AiJA5QBQgwB4BDAh9AfIARgnQBSg1CCBOAB6gFQiIhXhRA2AhsgIIANge");
	this.shape_63.setTransform(97.9,31.9,0.065,0.07,0,0,180);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#714D2D").s().p("AimB9IAJgVQBJglBtA+IgRAXQhHgthnASgAiRBMIAIgTQBQgwB4BDIgWAeQhvhChLAkgAh9AfIARgnQBSg1CCBOIgZAkQh8hHhQAxgAhggmIAehHQB/hmBqCPIgtA/QiIhXhSA2g");
	this.shape_64.setTransform(97.9,31.9,0.065,0.07,0,0,180);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#53412F").s().p("AiLBGIAMgdQBLgjBvBCIgQAWQhtg9hJAlgAh3AXIAMgZQBQgyB8BGIgQAYQh4hChQAvgAhagqIAMgfQBQg1CKBWIgSAZQiChQhSA1g");
	this.shape_65.setTransform(98,32.1,0.065,0.07,0,0,180);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("ACZA+QACg1g3gqQguhEgNg7IgKgJQgnAvg+gSQgQgEgSgJIgMgVIgUAdIgKBHIgCAPIAhAuIAQALIANAUIAEAFIAjA4QAPAYA/AKQBCAJAygnQAEgLACgKgAiShKIgRAYIAAAkIAkAwIANAAIAqBLIAXAqQB6A0Bbg/IAAg/IgLgP");
	this.shape_66.setTransform(97.9,33.5,0.144,0.144);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#80664D").s().p("AACARIgLAAIgjgwIAAgkIAQgYIgBAPIAeAuIAQALIANAUIAEAEIAGARQAAAEgFALIgEANQAAAOAOAbIgBABg");
	this.shape_67.setTransform(96.2,33.8,0.144,0.144);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#AB6C43").s().p("AAHBKIgNgLIghguIACgPIAKhEIAVgdIAJAUQASAJAQAFIADASQAAAcgNAbQgNAeAAATQAAALAIAXIgBABg");
	this.shape_68.setTransform(96.4,32.4,0.144,0.144);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#714D2D").s().p("AABCMQg/gKgOgXIgkg5IgDgFIABgBQgIgXAAgLQAAgRAMgeQANgdAAgcIgDgSQA+ARAoguIAJAIQANA8AuBEQA3AqgCA0IgGAWQgoAfgyAAQgNAAgNgCg");
	this.shape_69.setTransform(98.4,33.1,0.144,0.144);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#53412F").s().p("AhYA0IgXgqIABgBQgOgZAAgOIAFgNQAEgLAAgEIgGgQIAkA4QAOAWBCAKQA/AJAyglIAGgVIALAPIAAA9QgxAig8AAQgvAAg5gXg");
	this.shape_70.setTransform(98.5,35,0.144,0.144);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AAAgHQACAAABAAIgCgCQgBgBAAAAQAAAAAAAAQAAAAAAABQgBgBAAAAQgBAAAAgBIAAAAQAAgBABAAQABgCABABIAAABQADACABACIAAACQABACAAABIAFACIAAAAQAAAAABAAQAAAAABAAQAAAAAAABQAAAAAAAAQgBAAgBAAQgCAAgEgBIAAAAQgBgBgBgCQgDAAgCgBIACgCQAAgBAAgBAgFgKQgEAAgBABQgDABACAGQACACACAAQAAAAABAAQAAACACAFIAAAAQABABAAABQAAABgCABQAAAAgBABQAAAAAAABQABAAAAABQABAAAAAAQADgCABgCQAAgCgBgCQgDgGABgCQABgBAAgCQAAgDgDgCgAgEgGIAAgBQgEgBgBABQgBABABACQABACABAAQABAAABgBQABgCAAgBgAgCgLQgBABAAAAIAAABQgBgBAAAAIgBAA");
	this.shape_71.setTransform(99.1,32.1);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#53412F").s().p("AgFAOIgBgBIAAgBIABgBIACgCIgBgCIAAAAQgCgFAAgCIgBAAQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBgBQgCgGADgBQABgBAEAAQADACAAADIgBADQgBACADAGQAAABAAAAQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAQAAABgBAAIgBAAgAgJgHQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIACACIACgBIABgDIAAgBIgEAAIgBAAgAAFgBIAAAAIgCgDIgFgBIACgCIADAAIgCgCIgBgBIAAAAIAAABIgBgBIgBgBIABABIABABIAAACIgCACQAAgDgDgCIABAAIABABIAAgBIABgBIAAAAIABgBQAAAAABgBQAAAAAAAAQAAAAAAAAQAAAAABAAIAAABIAEAEIAAACIABADIAFACIAAAAIABAAIABAAIAAABIAAAAIgCAAQgCAAgEgBg");
	this.shape_72.setTransform(99.1,32.1);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgNgOIAAgCQADgKAFABQAAAAABABIAAAAQACADACADQgEgDgGAKAgigCIAAACQAFABAMADQAAAAABAAQApATALgOQgBgCAAgBIAEAEIgBAKQgLAOgtgTQgBAAAAAAQgNgCgFgEIAAgKIADgBIABgOIADgDQADADAGABQAEABAEAAQACABABACQABABABAAQACACACABAAKgIIABAAQABABACABQAPABAGAKQAAABAAAAAAHgLIABAAIAAABIAAAAIABAAQABABAAABQgEgDgEAIQABABAAAAQAIACADgGAAFgMQAAgBgCgBIAAAAQgBgBAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBAAHgLQgBAAAAgBIgBAAQgFgCgCAIQACACAAAAQADgJAEACgAACgDQgBAAgBgBAADgOQgDgCgEAJQABABABAAAgIgKQAGgIADAC");
	this.shape_73.setTransform(99.1,33.1);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#AB6C43").s().p("AgXAFIAAgBIgDgCQgCgCAAgCIAAgEIABgFIgBgDIAJAAIACADIADACIADADIACABIAEACIACABIABABQAGABADgGQAQACAFAKIAAABIABACQgFAGgKAAQgOAAgXgKg");
	this.shape_74.setTransform(99.8,33.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#53412F").s().p("AgXAMIAAgMIADAAIAAABQAFADAMACIABABIgBAAIABABIgDADQAAAAgBAAQAAABAAAAQgBABAAAAQAAABAAAAIACADQgNgCgFgDgAANgBQAEgJAEACIABAAIAAAAIAAAAIABABIABABQgEgDgEAJIgDgBgAAIgEQAEgJAFABIAAAAIACACQgFgCgEAJIgCgBgAACgJQAGgJAFADIABABIABAAQgFgCgGAJIgCgCg");
	this.shape_75.setTransform(97.7,32.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#714D2D").s().p("AgYAKIAAgDIACgMIADgCQADADAGABIABADIgBADIAAAEQAAADACADIACACQgNgCgFgDgAAOAIIgCgBQAEgHAFABIAAAAIAEACQgCAFgFAAIgEAAgAAHAEQAEgHAFACIABABIABAAQgEgBgEAHIgDgCgAABAAQAGgHAEACIABABIABABQgEgBgEAHIgEgDgAgCgDIAAgCQACgKADABIACABIAAABQABADAEADQgFgDgFAJIgCgDg");
	this.shape_76.setTransform(98,32);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46}]}).to({state:[{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56,p:{x:101.3,y:34.9}},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53}]},7).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60}]},7).to({state:[{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_56,p:{x:99.9,y:34.7}},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71}]},7).wait(1));

	// Layer 17
	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AAAgWQgDAIgFAJQAAAFgGAJQAGACACgIIAEgDIAAABIgBACIAAABIgEAPIABAAQAAABAAAAQACAAADgJQABgBAAgBIAAAAQAAgBAAgBQAAgBAAgCIAAgBIAAgBIgBATIAAAAIABABQAAAAAAABQAAABAAgCIACgGAALgTIAEAPIgCALIgGAKQgBABAAgDIABgEIABgBIABgBIACgJAAGAPIgCAFQgCAAAAgDIAAgBAAHAAIgDAKIAAAAIgBAFQgBABAAAA");
	this.shape_77.setTransform(103.9,16);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFC488").s().p("AAAAYIAAgBIAAgBIAAAAIABgTIAAABIgBABIAAADIAAACIAAAAIAAACQgDAJgCAAIAAgBIgBAAIAEgPIABgDIgBACIABgCIAAgCIgEAEQgCAIgGgCQAGgKAAgEIAHgRIAEgBQABgBABAAQABAAAAAAQABAAAAAAQABAAAAABIAFARIgDAMIgBADIACgKIgBAEIgCAGIAAABIgBABIgBAEIgCAFQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAIAAgBIgCAGIgBABIAAAAgAAFALIAAAAIgBAFIgBABIABgBIABgFIAAAAIADgLQgCADgBAHIAAABg");
	this.shape_78.setTransform(103.8,15.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#CC9C6C").s().p("AgCASIABgDIABgCIAAAAIAAgGIABgGIgBALIAAABIAAgBIAAgCIADgMIgDgSIABAEIAEAQIgCALIgEAJIgBABIAAgDgAgEAMQABgHACgEIgDAMIAAgBg");
	this.shape_79.setTransform(104.9,15.7);

	this.instance_9 = new lib.gr_ch_forarm_Lcopy_new_031_1("single",0);
	this.instance_9.setTransform(104.7,8.6,0.059,0.06,0,-14.8,-18.6,9.7,-31.9);

	this.instance_10 = new lib.gr_cH_Arm_01_02_new_031_1("single",1);
	this.instance_10.setTransform(102.6,0.5,0.057,0.061,0,2.8,-177.3,24.4,-58.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AALgTIAEAPIgCALIgGAKQgBABAAgDAAAgWQgDAIgFAJQAAAFgGAJQAGACACgIIAEgDIAAABIgBACIAAABIgEAPIABAAQAAABAAAAQACAAADgJQABgBAAgBIAAAAIAAAAQAAgBAAgBQAAgBAAgCIAAgBAACARIgBAFQgBACAAgBQAAgBAAAAQAAgBgBAAIAAAAIABgSIABgDIAAAAIAAAAAAHAAIgDAKIAAAAIgBAFQgBABAAABAALAAIgCAJIgBABIAAABIgCAEIgCAFQgCAAAAgD");
	this.shape_80.setTransform(105.3,16.1);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFC488").s().p("AAAAYIAAgBIAAgBIAAAAIABgSIAAAAIgBABIAAADIAAACIAAAAIAAAAIAAACQgDAJgCAAIAAgBIgBAAIAEgPIABgDIgBACIABgCIAAgCIgEAEQgCAIgGgCQAGgKAAgEIAHgRIAEgBQABgBABAAQABAAAAAAQABAAAAAAQABAAAAABIAFARIgDAMIgCAFIAAgBIABgBIACgKIgBAEIgCAGIAAABIAAABIgCAEIgCAFQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAIABgCIABgFIAAAAIADgLIgDAKIAAABIAAAAIgBAFIgBACIgBAFIgCABIAAAAgAACABIgBADIABgDIAAgBIABAAIgBAAIAAABg");
	this.shape_81.setTransform(105.2,16);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CC9C6C").s().p("AgCASIACgDIAAgFIADgMIgDgSIABAEIAEAQIgCALIgEAJIAAABIgBgDgAAAANIAAgGIABgGIgBALIAAABgAgEAMIADgLIgDAMIAAgBg");
	this.shape_82.setTransform(106.3,15.7);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AAAgWQgDAIgFAJQAAAFgGAJQAGACACgIIAEgDIAAABIgBACIAAABIgEAPIABAAQAAABAAAAQACAAADgJQABgBAAgBIAAAAQAAgBAAgBQAAgBAAgCIAAgBIAAgBIgBATIAAAAIABABQAAAAAAABQAAABAAgCIACgFAAHAAIgDAKIAAAAIgBAFQgBABAAABAAGAPIgCAFQgCAAAAgDAALgTIAEAPIgCALIgGAKQgBABAAgDAALAAIgCAJIgBABIgBABIgBAE");
	this.shape_83.setTransform(103,16.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFC488").s().p("AAAAYIAAgBIAAgBIAAAAIABgTIAAABIgBABIAAADIAAACIAAAAIAAACQgDAJgCAAIAAgBIgBAAIAEgPIABgDIgBACIABgCIAAgCIgEAEQgCAIgGgCQAGgKAAgEIAHgRIAEgBQABgBABAAQABAAAAAAQABAAAAAAQABAAAAABIAFARIgDAMIgBADIACgKIgBAEIgCAGIAAABIgBABIgBAEIgCAFQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAIABgCIABgFIAAAAIADgLQgCADgBAHIAAABIAAAAIgBAFIgBACIgCAFIgBABIAAAAg");
	this.shape_84.setTransform(102.9,16.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#CC9C6C").s().p("AgCASIABgDIABgCIAAgBIAAgCIADgMIgDgSIABAEIAEAQIgCALIgEAJIgBABIAAgDgAAAANIAAgGIABgGIgBALIAAABgAgEAMQABgHACgEIgDAMIAAgBg");
	this.shape_85.setTransform(104,16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10,p:{regX:24.4,regY:-58.3,x:102.6,y:0.5}},{t:this.instance_9,p:{regX:9.7,regY:-31.9,x:104.7,y:8.6}},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77}]}).to({state:[]},7).to({state:[{t:this.instance_10,p:{regX:25.3,regY:-58.2,x:104,y:0.2}},{t:this.instance_9,p:{regX:9.9,regY:-32.8,x:106,y:8.6}},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80}]},7).to({state:[{t:this.instance_10,p:{regX:25.3,regY:-59.1,x:101.7,y:0.8}},{t:this.instance_9,p:{regX:9.7,regY:-31.9,x:103.7,y:8.9}},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83}]},7).wait(1));

	// Layer 18
	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgDgEIAAgBQgEAAAAABQgBABABACQABABABAAQAAgBABgBIAAAAQAAgBABgBgAgFgHQgDABgBABQgCACADADIAAAAQACAAABAAQABAAAAAAQABACADADIAAABQAAAAAAABQAAABAAABIgBABQAAAAABABIAAAAQAAAAAAAAQABgCAAgCQAAgBgBgCQgCgEAAgBQAAgBABgCIAAgCQAAgBAAAAAgDgIIAAAAQAAgBAAAAQABgCACABIAAAAQACABABABIAAACQABABABABQADABABAAIAAgBIAAAAQABAAAAAAQAAAAABABIAAAAQgBABgBAAQgBABgEgBQgBgBgCgBQgBAAgBAAQgBgCgDgBAgDgIIAAABIgCAAAgBgGQABAAABAAIAAAAIgBgCQAAAAAAAAQgBAAAAAAIAAABQgBAAAAgBQgBAAAAAA");
	this.shape_86.setTransform(104.3,30.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#53412F").s().p("AAAALIAAAAIgBgBIABgBIAAgCIAAgBIAAgBIgEgFIgBAAIgDAAIAAAAQgDgDACgCIAEgCIACAAIAAgBIABAAIABABIAAABIACAAIAAAAIgBgCIAAAAIgBAAIAAABIgBgBIgBAAIAAAAIAAgBQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIAAAAIADACIAAACIACACIAEABIAAgBIAAAAIABAAIABABIAAAAIgCABIgFAAIgDgCIgCAAIAAgCIAAACQgBgCgDgBQADABABACIgBADQAAABACAEQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAIAAAAIAAAAgAgHgEQAAABgBAAQAAAAAAAAQAAABABAAQAAAAAAABIACABIABgCIAAAAIABgCIAAgBQgBAAgBAAQAAABgBAAQAAAAgBAAQAAAAAAAAgAgBgEIAAAAgAgBgEIAAAAg");
	this.shape_87.setTransform(104.3,30.3);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AAHgHQAMgCAHAIQAAABAAAAAgPgHIAAgBQAAgJAEAAQAAAAACAAIAAABQABACADABQgEgBgCAJQAAAAACABQABgIAEAAIAAAAIgBgBAgdAFIgCgJIACgDQADACAFgBQADAAADgBQACABACABAABgJQgBAAAAAAQAAAAAAgBIAAAAQAAAAgBAAQAAgBgBAAQgBAAgBgBAABgJQAAAAABAAIAAAAIAAABQABAAABAAQAAAAAAAAQABAAAAABQABAAABAAAgGgDQAAAAACAAQABABACAAQAAgHACAAAAAgBQAAAAAAAAQAHAAAAgGAAAgBQgBAAAAgBAgBgKQgEgBgBAIAAAgKQgDAAgBAHAAEgIQgEAAAAAHAgJgEQABAAACABAgdAFIAAACQAFABAKAAIAAgBQAkAGAFgNQAAAAgBAAIAEAAIACAIQgHANglgFQgBAAgBABQgKAAgEgBIgDgKg");
	this.shape_88.setTransform(104.8,31);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#80664D").s().p("AgUAIIgBAAIgCgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIACgDIgBAAIAAAAQAjAFAGgLIgCgCIAEACIACAGQgFAJgUAAIgTgBg");
	this.shape_89.setTransform(105.5,31.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#53412F").s().p("AgOAOIgDgJIACgCIABACQAFACAJgBIAAABIAAADQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAAAABIABACIgEAAIgKgBgAALgDQABgHADAAIABAAIAAAAIABAAIABABQgEgBgBAHIgCAAgAAGgFQABgIAFABIABABQgEgBgBAIIgCgBgAABgHQACgIAEABIABAAIABABQgEgBgCAIIgCgBg");
	this.shape_90.setTransform(103.3,31.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#714D2D").s().p("AgQAMIgBgCIgBgKIABgCQAEACAEgBIACABIAAAEIABADQAAADACABIADACIgFAAIgKgBgAAMACIgBAAQABgFAEAAIAAAAIABABIACAAQAAAEgGAAIgBAAgAAGAAQABgFAEAAIAAAAIABABIABAAQgDAAgBAFIgDgBgAABAAQACgHAEAAIABABIACABQgFgBgBAGIgDAAgAgDgCIAAgBQAAgJADAAIABAAIAAABIAEADQgEgBgBAJIgDgCg");
	this.shape_91.setTransform(103.5,30.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#AB6C43").s().p("AgQAHIAAAAIgDgBQgBgCgBgDIgBgBIAAgEIgCgCQAEAAADgCIADACIACABIADABIACABIADABIACAAIABAAQAFABAAgGQANgCAGAIIAAABIACAAQgEAJgSAAQgHAAgMgCg");
	this.shape_92.setTransform(105,31.1);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgFgGQgDAAgBABQgCACADADIAAAAQACAAABAAQABAAAAAAQABACADAEQAAABAAABQAAAAAAABQAAABgBAAIABABQAAAAAAAAQAAAAAAAAQABgCAAgBQAAgCgBgCQgCgEAAgBQAAgBABgBIAAgCIAAgBQABAAABAAIgBgBQAAgBAAAAQgBAAAAAAIAAABQgBAAAAAAQgBgBAAAAIAAAAQAAgBAAAAQABgBACAAIAAAAQACABABABIAAACQABACABAAQADABABAAQAAgBAAAAQABAAAAAAIABABQAAAAAAABQgBAAgBABQgBAAgEgBIAAAAQgBAAgCgCQgBAAgBABQgBgDgDAAgAgDgIQAAABAAAAIgCAAQAAAAAAABAgDgEIAAgBQgEABAAAAQgBABABACQABABABAAQABAAAAgBIAAAAQAAgBABgCgAgBgGQAAAAAAgB");
	this.shape_93.setTransform(103.5,30.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#53412F").s().p("AAAALIgBgBIABgBIAAgBIAAgCIgEgGIgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIAAAAQgDgDACgCQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABAAIAAgBIACAAIAAgBIABABIABAAIgBAAIgBgBIAAAAIAAgBIADgBIAAAAIADACIAAACIACACIAEABIAAgBIABAAIABABIAAABIgCABIgFgBIAAAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgBgBAAIgCABIAAgCIAAgBIAAABIAAACQgBgDgDAAQADAAABADIgBACQAAABACAEQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAAAQgBABAAAAQAAAAAAABIAAAAIAAAAgAgHgEQgBABAAAAQAAAAAAABQAAAAABAAQAAABAAAAIACABIABgBIAAAAIABgDIAAgBIgEABgAgBgIIAAABIAAABIACAAIgBgBIAAgBIgBAAgAgBgDIAAAAgAgBgDIAAAAg");
	this.shape_94.setTransform(103.5,30.9);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgdAFIAAACQAFABAKAAIABAAQAjAFAFgNQAAAAAAAAIADAAIACAIQgGANgmgFQgBAAgBABQgKAAgEgBIgDgKIACgBIgCgJIACgDQADACAFAAQADgBADgBIAAgBQAAgJAEAAQAAAAABAAIAAABQACACADABQgEgBgCAJQAAAAABABQACAAACABQAAAAABABQACAAACAAQABgHABAAAgBgKQAAgBgBAAQgBAAAAgBQgBAAAAAAQAAAAgBgBAgPgHQACABACABAADgIQAAAAgBAAIAAAAQAAAAAAgBQgBAAAAAAQgBAAAAAAQAAAAAAAAQAAgBgBAAQgEgBgBAIAADgIQABAAAAAAIABABQABAAABAAQAMgCAHAJIABAAAAAgBQAAAAAAAAQAHAAAAgGAAAgBQgBAAAAgBAADgIQgDAAAAAHAAAgJQgDgBgCAIAgKgEQACgHAEgB");
	this.shape_95.setTransform(104,31.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#80664D").s().p("AgUAIIgCAAIgBgCIABgDIABgDIAAAAQAjAFAFgLIAAgCIADACIACAGQgEAJgUAAIgUgBg");
	this.shape_96.setTransform(104.8,32.4);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#AB6C43").s().p("AgQAHIAAAAIgDgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIgBgCIAAgDIgCgDIAHgBIADABIACABIADABIACABIADABIACAAIABAAQAFABAAgGQAMgCAHAIIABABIABAAQgEAJgUAAIgRgCg");
	this.shape_97.setTransform(104.2,31.6);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#53412F").s().p("AgOAOIgDgJIADgBIAAABQAFACAJgBIAAAAIAAABIAAADIgBADIABACIgEAAIgKgBgAALgDQABgHADAAIABAAIAAAAIABAAIABABQgEgBgBAHIgCAAgAAGgFQABgIAFABIABABQgEgBgBAIIgCgBgAABgHQACgIAFABIAAABQgDAAgCAHIgCgBg");
	this.shape_98.setTransform(102.5,31.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#714D2D").s().p("AgQAMIAAgCIgCgKIABgCQAEACAEAAIACAAIAAAEIABADQAAABAAAAQAAABABAAQAAABAAAAQABABAAAAIADACIgFAAIgKgBgAAMACIgBAAQABgFAEAAIAAAAIABABIACAAQAAAEgGAAIgBAAgAAGABQABgGAEABIABAAIABAAQgDAAgBAFIgDAAgAABAAQACgGADgBIABAAIABABIACABQgFgBgBAGIgDAAgAgCgCIgBgBQAAgJADAAIABAAIAAABQABACAEABQgFgBgBAJIgCgCg");
	this.shape_99.setTransform(102.7,31.1);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgCgIQgCgBgCAAQgCAAAAAFQAAADABAAQABABAAAAQgBAAABAFQAAABgBABQAAAAgCAAQAAAAAAABQgBAAAAABIABAAQAAABAAAAQADAAABgCQABgBAAgCQgBgFACgBQABgBABgBQACADACAAQABAAABABIAAAAQACADACABQABAAAAAAIAAgBQAAAAAAgBIAAAAQAAAAgBAAQgBgBgCgCQgBAAAAgBQAAgCgCgDIAAAAIAAgBQgBgBgBAAQgBAAAAAAQAAAAAAABQAAgBgCAAgAAAgFIAAAAQAAgBAAAAQABAAAAABQAAAAABABIAAACQAAAAgCgCIAAABIgBAAQABgCgCgDAAAgHQAAABAAABAAAgEQAAgBAAAAAgCgFQgCgCgBAAQgBAAAAADQAAABAAAAQABABABgBQABAAABgCg");
	this.shape_100.setTransform(104.2,32);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#53412F").s().p("AgJAJIgBAAIABgBIAAgBIACAAIABgCQgBgFABAAIgBgBIgBgDQAAgFACAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABAAIAAAEIAAABIABAAIAAgBIADACIgBgCIgBgBIgBgBIAAABIAAAAIAAABIAAABIgBAAIAAgBIAAgEQAAAAAAAAQAAAAABAAQAAAAAAAAQAAABAAAAIAAgBIABAAIACABIAAABIABAAQAAABAAABQAAAAABABQAAAAAAABQAAAAAAABIABABIADADIABAAIAAAAIAAABIAAABIgBAAIgEgEIAAAAIgBgBQgCAAgDgDIgBACQgCABAAAFIgBADQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAgBAAIAAgBgAgGgEIAAABIACAAIADgCIgEgCQAAAAAAAAQgBABAAAAQAAAAAAABQAAAAAAABgAAAgFIAAgCIAAACg");
	this.shape_101.setTransform(104.2,32);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AhegmQCDggA6B0");
	this.shape_102.setTransform(104.6,33.7,0.069,0.074,0,0,180);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AhfgmIAdhHQB/hmBqCPIgtA/IgSAWIgZAkIgQAXIgWAeIgQAXIgRAXQhHgthnASIAJgVIAMgcIAIgTIAMgaQBQgxB8BHAiRBMQBLgkBvBCAidBoQBJglBtA+AiJA5QBQgwB4BDAh9AfIARgnQBSg1CCBOAB6gFQiIhXhRA2AhsgIIANge");
	this.shape_103.setTransform(103.9,31.9,0.065,0.07,0,0,180);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#714D2D").s().p("AimB9IAJgVQBJglBtA+IgRAXQhHgthnASgAiRBMIAIgTQBQgwB4BDIgWAeQhvhChLAkgAh9AfIARgnQBSg1CCBOIgZAkQh8hHhQAxgAhggmIAehHQB/hmBqCPIgtA/QiIhXhSA2g");
	this.shape_104.setTransform(103.9,31.9,0.065,0.07,0,0,180);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#53412F").s().p("AiLBGIAMgdQBLgjBvBCIgQAWQhtg9hJAlgAh3AXIAMgZQBQgyB8BGIgQAYQh4hChQAvgAhagqIAMgfQBQg1CKBWIgSAZQiChQhSA1g");
	this.shape_105.setTransform(104,32.1,0.065,0.07,0,0,180);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("ACZA+QACg1g3gqQguhEgNg7IgKgJQgnAvg+gSQgQgEgSgJIgMgVIgUAdIgKBHIgCAPIAhAuIAQALIANAUIAEAFIAjA4QAPAYA/AKQBCAJAygnQAEgLACgKgAiShKIgRAYIAAAkIAkAwIANAAIAqBLIAXAqQB6A0Bbg/IAAg/IgLgP");
	this.shape_106.setTransform(103.9,33.5,0.144,0.144);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#80664D").s().p("AACARIgLAAIgjgwIAAgkIAQgYIgBAPIAeAuIAQALIANAUIAEAEIAGARQAAAEgFALIgEANQAAAOAOAbIgBABg");
	this.shape_107.setTransform(102.2,33.8,0.144,0.144);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#AB6C43").s().p("AAHBKIgNgLIghguIACgPIAKhEIAVgdIAJAUQASAJAQAFIADASQAAAcgNAbQgNAeAAATQAAALAIAXIgBABg");
	this.shape_108.setTransform(102.3,32.4,0.144,0.144);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#714D2D").s().p("AABCMQg/gKgOgXIgkg5IgDgFIABgBQgIgXAAgLQAAgRAMgeQANgdAAgcIgDgSQA+ARAoguIAJAIQANA8AuBEQA3AqgCA0IgGAWQgoAfgyAAQgNAAgNgCg");
	this.shape_109.setTransform(104.3,33.1,0.144,0.144);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#53412F").s().p("AhYA0IgXgqIABgBQgOgZAAgOIAFgNQAEgLAAgEIgGgQIAkA4QAOAWBCAKQA/AJAyglIAGgVIALAPIAAA9QgxAig8AAQgvAAg5gXg");
	this.shape_110.setTransform(104.5,35,0.144,0.144);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#53412F").s().p("AAAALIgBgBIABgBIAAgBIAAgCIgEgGIgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAIAAAAQgDgDACgCQAAgBABAAQAAAAAAAAQABAAAAAAQABAAABAAQADAAABADIgBACQAAABACAEQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAAAABIAAAAIAAAAgAgHgEQgBAAAAABQAAAAAAAAQAAABABAAQAAABAAAAIACABIABgBIAAAAIABgDIAAgBIgEABgAAEgCIAAAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAIgCABIAAgCIAAgBIACAAIgBgBIAAgBIgBAAIAAABIgBAAIgBgBIABABIABAAIAAABIAAABIAAACQgBgDgDAAIAAgBIACAAIAAgBIAAAAIAAgBIADgBIAAAAIADACIAAACIACACIAEABIAAgBIABAAIABABIAAABIgCABIgFgBgAgBgGIAAAAgAgFgGIAAAAg");
	this.shape_111.setTransform(102.1,30.7);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgOgHIgBgBQAAgJAEAAQABAAABAAIAAABQABACAEABQgFgBgCAJQABAAABABQABAAACABQABAAABABQABAAACAAQABgHABAAAgdAFIgBgJIABgDQAEACAEAAQADgBAEgBQABABACABAgdAFIAAACQAFABAKAAIABAAQAjAFAGgNQgBAAAAAAIADAAIACAIQgGANgmgFQAAAAgCABQgKAAgEgBIgDgKgAAAgKQgBgBgBAAQAAAAgBgBQgBAAAAAAQAAAAAAgBAAAgKQgFgBgBAIAgJgEQACgHADgBAAHgHQgBAAgBAAIgBgBIgBAAQAAAAAAAAIgBAAQAAAAAAgBIgBAAQgBAAAAAAQAAAAAAAAQAAgBAAAAAAAgBQAAAAAAAAQAHAAAAgGQAMgCAHAJIABAAAAAgBQAAAAgBgBAAAgJQgDgBgBAIAADgIQgDAAAAAH");
	this.shape_112.setTransform(102.6,31.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#80664D").s().p("AgUAIIgCAAIgBgCIABgDIABgDIAAAAQAjAFAFgLIgBgCIAEACIACAGQgEAJgUAAIgUgBg");
	this.shape_113.setTransform(103.4,32.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86}]}).to({state:[{t:this.shape_99,p:{x:102.7,y:31.1}},{t:this.shape_98,p:{x:102.5,y:31.7}},{t:this.shape_97,p:{x:104.2,y:31.6}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93,p:{x:103.5,y:30.9}}]},7).to({state:[{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100}]},7).to({state:[{t:this.shape_97,p:{x:102.9,y:31.4}},{t:this.shape_99,p:{x:101.4,y:30.8}},{t:this.shape_98,p:{x:101.2,y:31.5}},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_93,p:{x:102.1,y:30.7}}]},7).wait(1));

	// Layer 19
	this.instance_11 = new lib.gr_boy_leftleg_new_031_1("synched",0);
	this.instance_11.setTransform(97.8,23.4,0.149,0.16,3.5,0,0,0.3,-41.5);

	this.instance_12 = new lib.gr_boy03_rightleg_new_021_1("synched",0);
	this.instance_12.setTransform(98.6,13.1,0.149,0.16,3.5,0,0,-0.1,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12,p:{regX:-0.1,x:98.6,y:13.1,regY:-33}},{t:this.instance_11,p:{regX:0.3,x:97.8,y:23.4}}]}).to({state:[{t:this.instance_12,p:{regX:0.2,x:100.1,y:13.6,regY:-33}},{t:this.instance_11,p:{regX:-0.1,x:99.3,y:24}}]},7).to({state:[{t:this.instance_12,p:{regX:-0.2,x:99,y:13.1,regY:-33.3}},{t:this.instance_11,p:{regX:0.3,x:98.3,y:23.5}}]},7).to({state:[{t:this.instance_12,p:{regX:-0.2,x:98.7,y:13.4,regY:-33.3}},{t:this.instance_11,p:{regX:0.3,x:98,y:23.8}}]},7).wait(1));

	// Layer 20
	this.instance_13 = new lib.gr_boy_leftleg01_new_021_1("synched",0);
	this.instance_13.setTransform(102.1,13.6,0.148,0.159,-7.2,0,0,-0.1,-31.7);

	this.instance_14 = new lib.gr_boy_leftleg021_1("synched",0);
	this.instance_14.setTransform(103.9,23,0.148,0.159,5.1,0,0,-7.7,-37.5);

	this.instance_15 = new lib.gr_boy03_rightleg_new_021_1("synched",0);
	this.instance_15.setTransform(102.1,13.8,0.149,0.16,0,-3.5,176.5,-0.1,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14,p:{x:103.9,y:23,regX:-7.7,regY:-37.5,rotation:5.1}},{t:this.instance_13,p:{x:102.1,y:13.6}}]}).to({state:[{t:this.instance_14,p:{x:103.1,y:23.5,regX:-7.7,regY:-37.5,rotation:5.1}},{t:this.instance_13,p:{x:101.3,y:14.2}}]},7).to({state:[{t:this.instance_15},{t:this.instance_14,p:{x:103.9,y:24,regX:-7.5,regY:-37.1,rotation:2.6}}]},7).to({state:[{t:this.instance_14,p:{x:101.7,y:23.3,regX:-7.7,regY:-37.2,rotation:5.1}},{t:this.instance_13,p:{x:99.9,y:13.9}}]},7).wait(1));

	// Layer 7
	this.instance_16 = new lib.dfsdSymbol37copy_1("synched",0);
	this.instance_16.setTransform(-112.7,-26.2,0.06,0.06,0,-164.5,15.5,2.3,7.5);

	this.instance_17 = new lib.gr_ch_forarm_Lcopy_new_031("single",0);
	this.instance_17.setTransform(-116.2,-23.8,0.058,0.051,0,-142,-141.2,9,-31.7);

	this.instance_18 = new lib.gr_cH_Arm_01_02_new_031("single",1);
	this.instance_18.setTransform(-123,-23,0.055,0.049,0,-74.3,105.6,25.2,-58.8);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgCABIABgBAgCABIAAAAIgBACIAAAAIAAAAIAAABIgDAPIAAAAQAAABAAAAQACAAADgJQAAgBAAgBQABAAAAAAQAAgBAAgBQAAgBAAgCIAAgBIAAAAIAAgBIAAABAgCABIAAgBIgEADQgCAIgGgCQAGgJAAgFQAFgJADgIAACARIgCAFQAAACAAgBQgBgBAAAAIAAgBIABgSAAMAAQgBAAgBADIgBAGIAAAAIAAABIgCABIgBAEIgCAFQgCAAAAgDAAMgTIADAPIgDALIgFAKQgCABABgDAAHAAIgCAKIgBAAIgCAH");
	this.shape_114.setTransform(-121.5,-6.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#CC9C6C").s().p("AgCASIACgDIAAgCIAAAAIAAgDIACgJIABgDIgDgSIABAEIAEAQIgDALIgCAJIgBABQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBgAAAANIAAAAIAAACgAgEANIABgBIACgLIgCAMgAAAANg");
	this.shape_115.setTransform(-120.5,-7.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFC488").s().p("AAAAYIAAgBIAAgBIABgSIgBABIAAADIAAACIAAAAIAAACQgDAJgCAAIgBgBIAAAAIAEgPIABgBIAAAAIABgDIgBABIAAgCIgFAEQgBAIgGgCQAGgKAAgEIAHgRIAEgBQAEgCABACIAFARIgBAFIgCAEIgCAGIAAAAIAAACIgCAEIgDAFQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAgBAAAAIACgHIABAAIACgLIgCAKIgBABIAAAAIgCAHIgCAFIgBABIAAAAgAABAEIAAAAIAAgBIAAABgAAJAKgAAJAKIACgGIACgEIgCAHIgCADgAABAEgAABADIAAABIAAAAgAANAAg");
	this.shape_116.setTransform(-121.6,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_18,p:{regX:25.2,regY:-58.8,scaleX:0.055,scaleY:0.049,skewX:-74.3,skewY:105.6,x:-123,y:-23}},{t:this.instance_17,p:{regX:9,regY:-31.7,scaleX:0.058,scaleY:0.051,skewX:-142,skewY:-141.2,x:-116.2,y:-23.8}},{t:this.instance_16,p:{regX:2.3,regY:7.5,skewX:-164.5,skewY:15.5,x:-112.7,y:-26.2}}]}).to({state:[{t:this.instance_18,p:{regX:25.3,regY:-58.2,scaleX:0.057,scaleY:0.061,skewX:2.8,skewY:-177.3,x:-122.8,y:-22.7}},{t:this.instance_17,p:{regX:9.9,regY:-32.8,scaleX:0.059,scaleY:0.06,skewX:-14.8,skewY:-18.6,x:-120.7,y:-14.3}},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114}]},7).to({state:[{t:this.instance_18,p:{regX:24.7,regY:-57.1,scaleX:0.055,scaleY:0.049,skewX:-17.9,skewY:162,x:-122.4,y:-23}},{t:this.instance_17,p:{regX:9.7,regY:-31.6,scaleX:0.058,scaleY:0.051,skewX:23.5,skewY:24.3,x:-118.6,y:-16.9}},{t:this.instance_16,p:{regX:2.8,regY:7,skewX:-22,skewY:158,x:-121.4,y:-14.1}}]},7).to({state:[{t:this.instance_18,p:{regX:24.7,regY:-57.1,scaleX:0.055,scaleY:0.049,skewX:-17.9,skewY:162,x:-122.4,y:-23}},{t:this.instance_17,p:{regX:9.7,regY:-31.6,scaleX:0.058,scaleY:0.051,skewX:23.5,skewY:24.3,x:-118.6,y:-16.9}},{t:this.instance_16,p:{regX:2.8,regY:7,skewX:-22,skewY:158,x:-121.4,y:-14.1}}]},7).wait(1));

	// Layer 8
	this.instance_19 = new lib.dfsdSymbol37copy_1("synched",0);
	this.instance_19.setTransform(-131.8,-13.7,0.06,0.06,22,0,0,1.7,6.5);

	this.instance_20 = new lib.gr_ch_forarm_Lcopy_new_031("single",0);
	this.instance_20.setTransform(-134.5,-16.5,0.058,0.051,0,-23.5,155.7,9.7,-31.6);

	this.instance_21 = new lib.gr_cH_Arm_01_02_new_031("single",1);
	this.instance_21.setTransform(-130.7,-22.6,0.055,0.049,0,17.9,18,25.3,-58.4);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("rgba(0,0,0,0.4)").ss(1,1,1).p("AgBgCIAAAAAAAACIAAAAIAAgCAgLgUIgDAQIACALIAFAKQACABAAgDIACAEQACABAAgDIABAFQAAACABgBQAAgBAAgBIAAAAIgBgTAACAAIABABIAAAAIAAABIAAABIAAAAIABAAIADAQIAAAAIAAABQgCAAgEgKQAAAAAAgBQAAAAAAAAIAAgBQAAAAgBgBQAAgCAAgBIAAgCAgGAAIACAFIABAEIAAAAIAAABIABAFIABABAgLAAIACADQABAEAAACIAAAAIADAGAgBARQAAAAAAgBIAAAAgAADABIAAgBIAEACQACAJAGgCQgGgJAAgFQgFgJgEgI");
	this.shape_117.setTransform(-131.7,-6.5);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#CC9C6C").s().p("AACAVIgDgKIgDgLIAEgQIABgEIgCASIABAEIAAAIIABADIACAGQABAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgBAAgAACACIAAgBIADAIg");
	this.shape_118.setTransform(-132.7,-6.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFC488").s().p("AgBAXIgBgFIAAAAIAAgBIgBAAIABABQAAABAAAAQAAABgBAAQAAAAAAAAQAAAAgBAAIgCgEIgDgGIAAAAIgBgGIgCgEIACAEIABAGIAAAAIgBgDIgCgHIgBgFIAFgSQABgBAEACIADABIAIARQAAAEAGAKQgGACgCgJIgEgDIAAACIAAAAIAAAAIAAgBIgBAAIABACIAAABIAAAAIABAAIADAQIAAAAIAAABQgCAAgEgKIAAgBIAAAAIAAgBIAAgBIAAgDIAAgBIAAgBIgBgDIABADIAAABIAAASIAAAAIAAACIAAAAIgBgBgAgEALIABAFIAAABIAAgBIgBgFIAAgBIAAAAIgBgEIgCgGIAAAAIACAGIABAEIAAAAIgBAAgAgBAAIgBgBIAAAAgAgCASIAAAAgAgCASgAgDARIABAAIAAABIAAAAg");
	this.shape_119.setTransform(-131.6,-6.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_21,p:{regY:-58.4,scaleX:0.055,scaleY:0.049,skewX:17.9,skewY:18,x:-130.7,y:-22.6}},{t:this.instance_20,p:{regX:9.7,regY:-31.6,scaleX:0.058,scaleY:0.051,skewX:-23.5,skewY:155.7,x:-134.5,y:-16.5}},{t:this.instance_19,p:{x:-131.8,y:-13.7}}]}).to({state:[{t:this.instance_21,p:{regY:-58.2,scaleX:0.057,scaleY:0.061,skewX:-2.8,skewY:-2.7,x:-130.4,y:-22.3}},{t:this.instance_20,p:{regX:9.9,regY:-32.8,scaleX:0.059,scaleY:0.06,skewX:14.8,skewY:-161.4,x:-132.4,y:-13.9}},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117}]},7).to({state:[{t:this.instance_21,p:{regY:-58.4,scaleX:0.055,scaleY:0.049,skewX:17.9,skewY:18,x:-130.2,y:-22.4}},{t:this.instance_20,p:{regX:9.7,regY:-31.6,scaleX:0.058,scaleY:0.051,skewX:-23.5,skewY:155.7,x:-134,y:-16.4}},{t:this.instance_19,p:{x:-131.3,y:-13.5}}]},7).to({state:[{t:this.instance_21,p:{regY:-58.4,scaleX:0.055,scaleY:0.049,skewX:17.9,skewY:18,x:-130.2,y:-22.4}},{t:this.instance_20,p:{regX:9.7,regY:-31.6,scaleX:0.058,scaleY:0.051,skewX:-23.5,skewY:155.7,x:-134,y:-16.4}},{t:this.instance_19,p:{x:-131.3,y:-13.5}}]},7).wait(1));

	// Layer 9
	this.instance_22 = new lib.sdSymbol4copy("synched",762);
	this.instance_22.setTransform(-126.5,-29.9,0.121,0.121,0,4.5,-175.5);

	this.instance_23 = new lib.gr_Ch_Body_01_021("single",3);
	this.instance_23.setTransform(-126.7,-10,0.057,0.061,0,-3.5,175.9,-2.1,141.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23,p:{regX:-2.1,regY:141.8,x:-126.7,y:-10}},{t:this.instance_22,p:{x:-126.5,y:-29.9,startPosition:762}}]}).to({state:[{t:this.instance_23,p:{regX:-3,regY:141.9,x:-126.5,y:-10}},{t:this.instance_22,p:{x:-126.3,y:-29.8,startPosition:769}}]},7).to({state:[{t:this.instance_23,p:{regX:-2.1,regY:141.8,x:-126.2,y:-9.9}},{t:this.instance_22,p:{x:-126,y:-29.7,startPosition:776}}]},7).to({state:[{t:this.instance_23,p:{regX:-2.1,regY:141.8,x:-126.2,y:-9.9}},{t:this.instance_22,p:{x:-126,y:-29.7,startPosition:783}}]},7).wait(1));

	// Layer 10
	this.instance_24 = new lib.gr_boy_leftleg_new_031("synched",0);
	this.instance_24.setTransform(-129.2,0.5,0.149,0.16,3.5,0,0,-0.1,-41.5);

	this.instance_25 = new lib.gr_boy03_rightleg_new_021("synched",0);
	this.instance_25.setTransform(-128.5,-9.9,0.149,0.16,3.5,0,0,-0.2,-33.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_25,p:{x:-128.5,y:-9.9}},{t:this.instance_24,p:{regX:-0.1,x:-129.2,y:0.5}}]}).to({state:[{t:this.instance_25,p:{x:-128.3,y:-9.8}},{t:this.instance_24,p:{regX:0.3,x:-129,y:0.6}}]},7).to({state:[{t:this.instance_25,p:{x:-128,y:-9.7}},{t:this.instance_24,p:{regX:-0.1,x:-128.7,y:0.7}}]},7).to({state:[{t:this.instance_25,p:{x:-128,y:-9.7}},{t:this.instance_24,p:{regX:-0.1,x:-128.7,y:0.7}}]},7).wait(1));

	// Layer 11
	this.instance_26 = new lib.gr_boy_leftleg01_new_021("synched",0);
	this.instance_26.setTransform(-124.9,-9.3,0.148,0.159,-7.2,0,0,-0.1,-31.4);

	this.instance_27 = new lib.gr_boy_leftleg021("synched",0);
	this.instance_27.setTransform(-122.5,-1.1,0.148,0.159,35.1,0,0,-7.5,-37.3);

	this.instance_28 = new lib.gr_boy03_rightleg_new_021("synched",0);
	this.instance_28.setTransform(-124.9,-9,0.149,0.16,0,-3.5,176.5,0.2,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_27,p:{x:-122.5,regX:-7.5,regY:-37.3,rotation:35.1,y:-1.1}},{t:this.instance_26,p:{x:-124.9,y:-9.3}}]}).to({state:[{t:this.instance_27,p:{x:-122.4,regX:-7.5,regY:-37.3,rotation:35.1,y:-1.1}},{t:this.instance_26,p:{x:-124.8,y:-9.2}}]},7).to({state:[{t:this.instance_28},{t:this.instance_27,p:{x:-123.3,regX:-7.4,regY:-37.2,rotation:-9.9,y:0.9}}]},7).to({state:[{t:this.instance_28},{t:this.instance_27,p:{x:-123.3,regX:-7.4,regY:-37.2,rotation:-9.9,y:0.9}}]},7).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-136.6,-35.3,272.9,71.8);


// stage content:



(lib.Netforceandacceleration = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bg();
	this.instance.setTransform(521.6,414.6,1,1,0,0,0,548.1,439.1);

	this.instance_1 = new lib.Cherecter1();
	this.instance_1.setTransform(490.1,453.8);

	this.instance_2 = new lib.Cherecter2();
	this.instance_2.setTransform(490.1,453.8);

	this.instance_3 = new lib.Cherecter3();
	this.instance_3.setTransform(490.1,453.8);

	this.instance_4 = new lib.mc_Helicoptercopy();
	this.instance_4.setTransform(310.8,370.5,1.736,1.736,0,0,0,53.5,49.6);

	this.instance_5 = new lib.mc_Helicopter();
	this.instance_5.setTransform(589.5,373.2,1.736,1.736,0,0,0,53.5,49.6);

	this.instance_6 = new lib.Button_Set_1();
	this.instance_6.setTransform(512,758.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(485.5,379.5,1096.2,878.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;