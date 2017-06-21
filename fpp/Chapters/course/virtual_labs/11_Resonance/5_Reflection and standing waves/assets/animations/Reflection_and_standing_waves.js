(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 808,
	fps: 24,
	color: "#999999",
	manifest: []
};



// symbols:



(lib.Waves = function() {
	this.initialize();

	// String
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EBJ7AAAMiT1AAA");
	this.shape.setTransform(-40.2,-45.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-514.9,-46.6,949.4,3);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#63BEFA").s().p("Ego6AgSMAAAhAjMBR1AAAMAAABAjg");
	this.shape.setTransform(206.9,150.7,1,1,0,0,0,-6,-22.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-49.1,-33.4,524,413.4);


(lib.Line3 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D7D7D7").ss(1,2,0,3).p("EhJuAAAMBVJAAAAWnAAMAzIAAA");
	this.shape.setTransform(472,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,945.9,2);


(lib.Line = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D7D7D7").ss(1,2,0,3).p("EhJuAAAMCTdAAA");
	this.shape.setTransform(472,0);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,945.9,2);


(lib.texture_1 = function() {
	this.initialize();

}).prototype = p = new cjs.Container();
p.nominalBounds = null;


(lib.Symbol2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg//ADZIAAmxMArNAAAQBkAAAABkIAADpQAABkhkAAgEA9xACdQAxhGAAhZQAAhgg3hJICVAAIAAFIgEA0jACdQAxhGABhZQAAhgg3hJICDAAQg3BJgBBgQAABZAyBGgEArnACdQhkAAAAhkIAAiAQAAhkBkAAIBsAAQg3BJAABgQAABZAxBGg");
	this.shape.setTransform(413.6,21.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,0,819.2,43.5);


(lib.break1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D48453","#B45426","#B86E40","#D08A5F"],[0,0.42,0.741,1],-20.3,-9.5,69.5,-9.5).s().p("AlVB7QgFAAgDgEQgDgDgBgFIAAjdQABgFADgDQADgEAFAAIKqAAQAGAAADAEQAEADAAAFIAADdQAAAFgEADQgDAEgGAAg");
	this.shape.setTransform(35.4,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.8,24.7);


(lib._break = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D48453","#B45426","#B86E40","#D08A5F"],[0,0.42,0.741,1],-20.3,-9.5,69.5,-9.5).s().p("AlVB7QgFAAgDgEQgDgDgBgFIAAjdQABgFADgDQADgEAFAAIKqAAQAGAAADAEQAEADAAAFIAADdQAAAFgEADQgDAEgGAAg");
	this.shape.setTransform(35.4,12.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,70.8,24.7);


(lib.Symbol3 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F204B").s().p("AlEE7IAAp1IX7AAQBkABAABjIAAGtQAABjhkABgAy5E7QhhgDAAhhIAAmtQAAhjBkgBINZAAIAAJ1g");
	this.shape.setTransform(145.8,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AHZE7IAAp1IAZAAIAAJ1gAnxE7IAAp1IAbAAIAAJ1g");
	this.shape_1.setTransform(201.6,31.5);

	// Layer 1
	this.ikNode_1 = new lib.Symbol2();
	this.ikNode_1.setTransform(512.6,32.3,1,1,0,0,0,512.6,21.8);

	this.addChild(this.ikNode_1,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(4,0,819.2,63);


(lib.part_2 = function() {
	this.initialize();

	// Layer 5
	this.instance = new lib.texture_1();
	this.instance.setTransform(96.6,706.2,1.67,6.831,0,0,0,56,138.8);
	this.instance.alpha = 0.199;

	// Layer 6
	this.instance_1 = new lib.break1();
	this.instance_1.setTransform(157.5,-149.7,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_2 = new lib._break();
	this.instance_2.setTransform(157.5,-115.3,0.34,0.282,0,0,0,35.4,13.2);
	this.instance_2.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_3 = new lib._break();
	this.instance_3.setTransform(132.3,-115.2,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_3.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_4 = new lib._break();
	this.instance_4.setTransform(170.3,-124.1,0.34,0.282,0,0,0,35.4,12.4);
	this.instance_4.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_5 = new lib._break();
	this.instance_5.setTransform(145.1,-123.9,0.34,0.282,0,0,0,35.5,13);
	this.instance_5.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_6 = new lib._break();
	this.instance_6.setTransform(157.7,-132.6,0.34,0.282,0,0,0,35.5,12.6);
	this.instance_6.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_7 = new lib._break();
	this.instance_7.setTransform(132.5,-132.5,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_7.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_8 = new lib._break();
	this.instance_8.setTransform(132.1,-149.9,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_8.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_9 = new lib._break();
	this.instance_9.setTransform(170.4,-141.6,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_9.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_10 = new lib._break();
	this.instance_10.setTransform(144.5,-141.5,0.34,0.282,0,0,0,35.5,12.4);
	this.instance_10.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_11 = new lib._break();
	this.instance_11.setTransform(144.8,-158.4,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_11.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_12 = new lib._break();
	this.instance_12.setTransform(170.5,-158.4,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_12.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_13 = new lib.break1();
	this.instance_13.setTransform(151.1,-55.1,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_13.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_14 = new lib.break1();
	this.instance_14.setTransform(150.8,-37.7,0.34,0.282,0,0,0,35.4,12.4);
	this.instance_14.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_15 = new lib.break1();
	this.instance_15.setTransform(151,-72.4,0.34,0.282,0,0,0,35.5,13);
	this.instance_15.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_16 = new lib._break();
	this.instance_16.setTransform(163.6,-63.8,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_16.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_17 = new lib._break();
	this.instance_17.setTransform(163.8,-80.9,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_17.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_18 = new lib._break();
	this.instance_18.setTransform(163.7,-97.9,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_18.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_19 = new lib._break();
	this.instance_19.setTransform(151,-106.6,0.34,0.282,0,0,0,35.5,12.6);
	this.instance_19.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_20 = new lib._break();
	this.instance_20.setTransform(125.7,-106.6,0.34,0.282,0,0,0,35.5,12.6);
	this.instance_20.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_21 = new lib._break();
	this.instance_21.setTransform(150.8,-3.2,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_21.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_22 = new lib._break();
	this.instance_22.setTransform(125.6,-3.1,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_22.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_23 = new lib._break();
	this.instance_23.setTransform(163.6,-11.9,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_23.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_24 = new lib._break();
	this.instance_24.setTransform(138.4,-11.7,0.34,0.282,0,0,0,35.5,13);
	this.instance_24.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_25 = new lib._break();
	this.instance_25.setTransform(151,-20.5,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_25.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_26 = new lib._break();
	this.instance_26.setTransform(125.8,-20.3,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_26.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_27 = new lib._break();
	this.instance_27.setTransform(125.4,-37.7,0.34,0.282,0,0,0,35.4,13);
	this.instance_27.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_28 = new lib._break();
	this.instance_28.setTransform(163.7,-29.4,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_28.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_29 = new lib._break();
	this.instance_29.setTransform(137.8,-29.3,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_29.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_30 = new lib._break();
	this.instance_30.setTransform(138.1,-46.3,0.34,0.282,0,0,0,35.5,12.6);
	this.instance_30.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_31 = new lib._break();
	this.instance_31.setTransform(163.8,-46.3,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_31.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_32 = new lib._break();
	this.instance_32.setTransform(150.8,-89.3,0.34,0.282,0,0,0,35.5,13);
	this.instance_32.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_33 = new lib._break();
	this.instance_33.setTransform(138.2,-97.7,0.34,0.282,0,0,0,35.5,13);
	this.instance_33.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_34 = new lib._break();
	this.instance_34.setTransform(138,-63.6,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_34.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_35 = new lib._break();
	this.instance_35.setTransform(125,-54.9,0.34,0.282,0,0,0,35.4,13.2);
	this.instance_35.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_36 = new lib._break();
	this.instance_36.setTransform(125.1,-72.2,0.34,0.282,0,0,0,35.4,13);
	this.instance_36.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_37 = new lib._break();
	this.instance_37.setTransform(138,-80.8,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_37.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_38 = new lib._break();
	this.instance_38.setTransform(125.1,-89.3,0.34,0.282,0,0,0,35.4,13);
	this.instance_38.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_39 = new lib.break1();
	this.instance_39.setTransform(157.8,74,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_39.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_40 = new lib.break1();
	this.instance_40.setTransform(157.5,91.5,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_40.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_41 = new lib.break1();
	this.instance_41.setTransform(157.7,56.7,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_41.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_42 = new lib._break();
	this.instance_42.setTransform(170.3,65.3,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_42.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_43 = new lib._break();
	this.instance_43.setTransform(170.5,48.1,0.34,0.282,0,0,0,35.4,12.4);
	this.instance_43.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_44 = new lib._break();
	this.instance_44.setTransform(170.4,31.2,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_44.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_45 = new lib._break();
	this.instance_45.setTransform(157.7,5.2,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_45.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_46 = new lib._break();
	this.instance_46.setTransform(132.4,5.2,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_46.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_47 = new lib._break();
	this.instance_47.setTransform(170.1,14.1,0.34,0.282,0,0,0,35.5,13);
	this.instance_47.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_48 = new lib._break();
	this.instance_48.setTransform(144.8,14.1,0.34,0.282,0,0,0,35.5,13);
	this.instance_48.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_49 = new lib._break();
	this.instance_49.setTransform(157.7,22.5,0.34,0.282,0,0,0,35.5,12.6);
	this.instance_49.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_50 = new lib._break();
	this.instance_50.setTransform(132.4,22.5,0.34,0.282,0,0,0,35.5,12.6);
	this.instance_50.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_51 = new lib._break();
	this.instance_51.setTransform(157.5,125.9,0.34,0.282,0,0,0,35.4,13);
	this.instance_51.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_52 = new lib._break();
	this.instance_52.setTransform(132.3,126,0.34,0.282,0,0,0,35.4,13);
	this.instance_52.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_53 = new lib._break();
	this.instance_53.setTransform(170.3,117.2,0.34,0.282,0,0,0,35.4,12.4);
	this.instance_53.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_54 = new lib._break();
	this.instance_54.setTransform(145.1,117.3,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_54.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_55 = new lib._break();
	this.instance_55.setTransform(157.7,108.6,0.34,0.282,0,0,0,35.5,13);
	this.instance_55.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_56 = new lib._break();
	this.instance_56.setTransform(132.5,108.8,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_56.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_57 = new lib._break();
	this.instance_57.setTransform(132.1,91.4,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_57.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_58 = new lib._break();
	this.instance_58.setTransform(170.4,99.7,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_58.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_59 = new lib._break();
	this.instance_59.setTransform(144.5,99.8,0.34,0.282,0,0,0,35.5,12.4);
	this.instance_59.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_60 = new lib._break();
	this.instance_60.setTransform(144.8,82.9,0.34,0.282,0,0,0,35.5,13);
	this.instance_60.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_61 = new lib._break();
	this.instance_61.setTransform(170.5,82.9,0.34,0.282,0,0,0,35.4,13);
	this.instance_61.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_62 = new lib._break();
	this.instance_62.setTransform(157.5,39.8,0.34,0.282,0,0,0,35.5,13);
	this.instance_62.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_63 = new lib._break();
	this.instance_63.setTransform(144.9,31.4,0.34,0.282,0,0,0,35.5,13);
	this.instance_63.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_64 = new lib._break();
	this.instance_64.setTransform(144.7,65.5,0.34,0.282,0,0,0,35.4,13);
	this.instance_64.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_65 = new lib._break();
	this.instance_65.setTransform(131.7,74.2,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_65.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_66 = new lib._break();
	this.instance_66.setTransform(131.8,56.9,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_66.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_67 = new lib._break();
	this.instance_67.setTransform(144.7,48.3,0.34,0.282,0,0,0,35.4,13);
	this.instance_67.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_68 = new lib._break();
	this.instance_68.setTransform(131.8,39.8,0.34,0.282,0,0,0,35.4,13);
	this.instance_68.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_69 = new lib.break1();
	this.instance_69.setTransform(151.1,185.9,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_69.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_70 = new lib.break1();
	this.instance_70.setTransform(150.8,203.3,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_70.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_71 = new lib.break1();
	this.instance_71.setTransform(151,168.5,0.34,0.282,0,0,0,35.5,12.6);
	this.instance_71.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_72 = new lib._break();
	this.instance_72.setTransform(163.6,177.1,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_72.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_73 = new lib._break();
	this.instance_73.setTransform(163.8,160,0.34,0.282,0,0,0,35.4,13);
	this.instance_73.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_74 = new lib._break();
	this.instance_74.setTransform(163.7,143,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_74.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_75 = new lib._break();
	this.instance_75.setTransform(151,134.4,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_75.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_76 = new lib._break();
	this.instance_76.setTransform(125.7,134.4,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_76.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_77 = new lib._break();
	this.instance_77.setTransform(150.8,237.7,0.34,0.282,0,0,0,35.4,13);
	this.instance_77.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_78 = new lib._break();
	this.instance_78.setTransform(125.6,237.8,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_78.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_79 = new lib._break();
	this.instance_79.setTransform(163.6,229,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_79.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_80 = new lib._break();
	this.instance_80.setTransform(138.4,229.2,0.34,0.282,0,0,0,35.5,13);
	this.instance_80.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_81 = new lib._break();
	this.instance_81.setTransform(151,220.5,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_81.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_82 = new lib._break();
	this.instance_82.setTransform(125.8,220.6,0.34,0.282,0,0,0,35.4,13);
	this.instance_82.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_83 = new lib._break();
	this.instance_83.setTransform(125.4,203.3,0.34,0.282,0,0,0,35.4,13.3);
	this.instance_83.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_84 = new lib._break();
	this.instance_84.setTransform(163.7,211.5,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_84.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_85 = new lib._break();
	this.instance_85.setTransform(137.8,211.6,0.34,0.282,0,0,0,35.5,12.6);
	this.instance_85.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_86 = new lib._break();
	this.instance_86.setTransform(138.1,194.6,0.34,0.282,0,0,0,35.5,12.6);
	this.instance_86.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_87 = new lib._break();
	this.instance_87.setTransform(163.8,194.6,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_87.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_88 = new lib._break();
	this.instance_88.setTransform(150.8,151.7,0.34,0.282,0,0,0,35.5,13);
	this.instance_88.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_89 = new lib._break();
	this.instance_89.setTransform(138.2,143.2,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_89.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_90 = new lib._break();
	this.instance_90.setTransform(138,177.4,0.34,0.282,0,0,0,35.4,13);
	this.instance_90.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_91 = new lib._break();
	this.instance_91.setTransform(125,186,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_91.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_92 = new lib._break();
	this.instance_92.setTransform(125.1,168.7,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_92.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_93 = new lib._break();
	this.instance_93.setTransform(138,160.1,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_93.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_94 = new lib._break();
	this.instance_94.setTransform(125.1,151.7,0.34,0.282,0,0,0,35.4,13);
	this.instance_94.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_95 = new lib.break1();
	this.instance_95.setTransform(157.8,314.9,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_95.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_96 = new lib.break1();
	this.instance_96.setTransform(157.7,297.7,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_96.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_97 = new lib._break();
	this.instance_97.setTransform(170.3,306.2,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_97.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_98 = new lib._break();
	this.instance_98.setTransform(170.5,289.1,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_98.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_99 = new lib._break();
	this.instance_99.setTransform(170.4,272.2,0.34,0.282,0,0,0,35.4,13.2);
	this.instance_99.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_100 = new lib._break();
	this.instance_100.setTransform(157.7,246.1,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_100.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_101 = new lib._break();
	this.instance_101.setTransform(132.4,246.1,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_101.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_102 = new lib._break();
	this.instance_102.setTransform(170.1,255,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_102.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_103 = new lib._break();
	this.instance_103.setTransform(144.8,255,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_103.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_104 = new lib._break();
	this.instance_104.setTransform(157.7,263.4,0.34,0.282,0,0,0,35.5,12.6);
	this.instance_104.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_105 = new lib._break();
	this.instance_105.setTransform(132.4,263.4,0.34,0.282,0,0,0,35.5,12.6);
	this.instance_105.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_106 = new lib._break();
	this.instance_106.setTransform(144.8,323.8,0.34,0.282,0,0,0,35.5,12.8);
	this.instance_106.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_107 = new lib._break();
	this.instance_107.setTransform(170.5,323.8,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_107.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_108 = new lib._break();
	this.instance_108.setTransform(157.5,280.7,0.34,0.282,0,0,0,35.5,12.6);
	this.instance_108.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_109 = new lib._break();
	this.instance_109.setTransform(144.9,272.3,0.34,0.282,0,0,0,35.5,12.6);
	this.instance_109.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_110 = new lib._break();
	this.instance_110.setTransform(144.7,306.5,0.34,0.282,0,0,0,35.4,13);
	this.instance_110.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_111 = new lib._break();
	this.instance_111.setTransform(131.7,315.1,0.34,0.282,0,0,0,35.4,13);
	this.instance_111.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_112 = new lib._break();
	this.instance_112.setTransform(131.8,297.8,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_112.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_113 = new lib._break();
	this.instance_113.setTransform(144.7,289.2,0.34,0.282,0,0,0,35.4,12.8);
	this.instance_113.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	this.instance_114 = new lib._break();
	this.instance_114.setTransform(131.8,280.7,0.34,0.282,0,0,0,35.4,12.6);
	this.instance_114.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",1,1,0);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#641A00").s().p("EgGZApcMAAAhS3ILwAAIAAAwMAAAAwzIAADJIAAB6IAAAMIAADmIBDAAIAAYfg");
	this.shape.setTransform(152.5,86.3);

	this.addChild(this.shape,this.instance_114,this.instance_113,this.instance_112,this.instance_111,this.instance_110,this.instance_109,this.instance_108,this.instance_107,this.instance_106,this.instance_105,this.instance_104,this.instance_103,this.instance_102,this.instance_101,this.instance_100,this.instance_99,this.instance_98,this.instance_97,this.instance_96,this.instance_95,this.instance_94,this.instance_93,this.instance_92,this.instance_91,this.instance_90,this.instance_89,this.instance_88,this.instance_87,this.instance_86,this.instance_85,this.instance_84,this.instance_83,this.instance_82,this.instance_81,this.instance_80,this.instance_79,this.instance_78,this.instance_77,this.instance_76,this.instance_75,this.instance_74,this.instance_73,this.instance_72,this.instance_71,this.instance_70,this.instance_69,this.instance_68,this.instance_67,this.instance_66,this.instance_65,this.instance_64,this.instance_63,this.instance_62,this.instance_61,this.instance_60,this.instance_59,this.instance_58,this.instance_57,this.instance_56,this.instance_55,this.instance_54,this.instance_53,this.instance_52,this.instance_51,this.instance_50,this.instance_49,this.instance_48,this.instance_47,this.instance_46,this.instance_45,this.instance_44,this.instance_43,this.instance_42,this.instance_41,this.instance_40,this.instance_39,this.instance_38,this.instance_37,this.instance_36,this.instance_35,this.instance_34,this.instance_33,this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(111.4,-178.9,82.2,530.6);


(lib.Button_Set_1 = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLDZIAAmxIAXAAIAAGxg");
	this.shape.setTransform(112,32.2);

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(512.6,31.5,1,1,0,0,0,512.6,31.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,24);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8,-12,847,91);


(lib.Symbol2_1 = function() {
	this.initialize();

	// Masking (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhmZiMAAAgzDIDNAAMAAAAzDg");
	mask.setTransform(10.4,163.5);

	// Layer 3
	this.instance = new lib.part_2();
	this.instance.setTransform(72.6,140.1,0.672,0.672,0,0,180,55,46.8);

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,20.8,327);


(lib.Bg = function() {
	this.initialize();

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,2,1).p("AAHAAIgNAA");
	this.shape.setTransform(932,280.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AjjBmQgrgqAAg8IABgKQAEg1AmglQArgrA7AAIAYgBIgTAVIgFAAQgyAAglAlQghAggDAsIgBAKQAAAzAlAlQAlAlAyAAQA0AAAkglQAlglAAgzQAAgOgDgPIgBgEIESAAIAAAfIjoACIAAAAIgTAAIAAAAQAAA8gpAqQgqAsg9gBQg7ABgrgsg");
	this.shape_1.setTransform(959.3,281.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AjoB3QgygxAAhGIABgLQAEg+AtgtQAxgyBHAAIAEAAIATAXIgXABQg8AAgrArQgmAlgEA1IAAALQAAA7AqAqQArAsA8gBQA8ABAqgsQApgqAAg7IAAAAIATAAIAAgBIDpgCIAAAdIjlAAQgIA2gpAnQgvAyhGAAQhHAAgxgyg");
	this.shape_2.setTransform(958,281.4);

	this.text = new cjs.Text("1.0 m ", "bold 11px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 13;
	this.text.setTransform(715.6,476.5,1.843,1.843);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AE5hMIAABMIpxAAAE5BNIAAhNAk4hMIAABMIAABN");
	this.shape_3.setTransform(713.1,474.2);

	// Layer 1
	this.instance = new lib.Symbol2_1("synched",0);
	this.instance.setTransform(1005.5,405.7,1.843,2.475,0,0,0,10.4,163.5);

	this.instance_1 = new lib.Line();
	this.instance_1.setTransform(806,0,0.856,1,90);

	this.instance_2 = new lib.Line3();
	this.instance_2.setTransform(744,0,0.856,1,90);

	this.instance_3 = new lib.Line3();
	this.instance_3.setTransform(682,0,0.856,1,90);

	this.instance_4 = new lib.Line();
	this.instance_4.setTransform(868,0,0.856,1,90);

	this.instance_5 = new lib.Line();
	this.instance_5.setTransform(620,0,0.856,1,90);

	this.instance_6 = new lib.Line();
	this.instance_6.setTransform(558,0,0.856,1,90);

	this.instance_7 = new lib.Line();
	this.instance_7.setTransform(496,0,0.856,1,90);

	this.instance_8 = new lib.Line();
	this.instance_8.setTransform(434,0,0.856,1,90);

	this.instance_9 = new lib.Line();
	this.instance_9.setTransform(372,0,0.856,1,90);

	this.instance_10 = new lib.Line();
	this.instance_10.setTransform(310,0,0.856,1,90);

	this.instance_11 = new lib.Line();
	this.instance_11.setTransform(248,0,0.856,1,90);

	this.instance_12 = new lib.Line();
	this.instance_12.setTransform(186,0,0.856,1,90);

	this.instance_13 = new lib.Line();
	this.instance_13.setTransform(124,0,0.856,1,90);

	this.instance_14 = new lib.Line();
	this.instance_14.setTransform(62,0,0.856,1,90);

	this.instance_15 = new lib.Line();
	this.instance_15.setTransform(930,0,0.856,1,90);

	this.instance_16 = new lib.Line();
	this.instance_16.setTransform(0,0,0.856,1,90);

	this.instance_17 = new lib.Line();
	this.instance_17.setTransform(1024.7,808.6,1.085,1,180);

	this.instance_18 = new lib.Line();
	this.instance_18.setTransform(1024.7,0.6,1.085,1,180);

	this.instance_19 = new lib.Line();
	this.instance_19.setTransform(1024.7,776.6,1.085,1,180);

	this.instance_20 = new lib.Line();
	this.instance_20.setTransform(1024.7,714.6,1.085,1,180);

	this.instance_21 = new lib.Line();
	this.instance_21.setTransform(1024.7,652.6,1.085,1,180);

	this.instance_22 = new lib.Line();
	this.instance_22.setTransform(1024.7,590.6,1.085,1,180);

	this.instance_23 = new lib.Line();
	this.instance_23.setTransform(1024.7,528.6,1.085,1,180);

	this.instance_24 = new lib.Line();
	this.instance_24.setTransform(1024.7,466.6,1.085,1,180);

	this.instance_25 = new lib.Line();
	this.instance_25.setTransform(1024.7,404.6,1.085,1,180);

	this.instance_26 = new lib.Line();
	this.instance_26.setTransform(1024.7,342.6,1.085,1,180);

	this.instance_27 = new lib.Line();
	this.instance_27.setTransform(1024.7,280.6,1.085,1,180);

	this.instance_28 = new lib.Line();
	this.instance_28.setTransform(1024.7,218.6,1.085,1,180);

	this.instance_29 = new lib.Line();
	this.instance_29.setTransform(1024.7,156.6,1.085,1,180);

	this.instance_30 = new lib.Line();
	this.instance_30.setTransform(1024.7,94.6,1.085,1,180);

	this.instance_31 = new lib.Line();
	this.instance_31.setTransform(1024.7,32.6,1.085,1,180);

	this.instance_32 = new lib.Symbol1("synched",0);
	this.instance_32.setTransform(636.2,475.5,1.956,1.954,0,0,0,276.1,209.2);

	this.addChild(this.instance_32,this.instance_31,this.instance_30,this.instance_29,this.instance_28,this.instance_27,this.instance_26,this.instance_25,this.instance_24,this.instance_23,this.instance_22,this.instance_21,this.instance_20,this.instance_19,this.instance_18,this.instance_17,this.instance_16,this.instance_15,this.instance_14,this.instance_13,this.instance_12,this.instance_11,this.instance_10,this.instance_9,this.instance_8,this.instance_7,this.instance_6,this.instance_5,this.instance_4,this.instance_3,this.instance_2,this.instance_1,this.instance,this.shape_3,this.text,this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.6,-0.5,1026.1,810.8);


// stage content:
(lib.Reflectionandstandingwaves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Graph BG
	this.instance = new lib.Bg();
	this.instance.setTransform(591.1,655,1,1,0,0,0,591.8,655.6);

	this.instance_1 = new lib.Waves();
	this.instance_1.setTransform(512,341.2);

	this.instance_2 = new lib.Button_Set_1();
	this.instance_2.setTransform(635.9,758.8,1.25,1.25,0,0,0,512.6,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(510.7,270.9,1184.9,986.9);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;