(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 808,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F6F3C5").s().p("EgpPAbrMAAAg3VMBSfAAAMAAAA3Vg");
	this.shape.setTransform(286,176.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#171901").s().p("EgsfAjMMAAAhGXIDcAAMAAAA3WMBSfAAAMAAAg3WIDEAAMAAABGXg");
	this.shape_1.setTransform(284.8,224.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.1,569.6,450.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AiJCeQhlAAAAhlIAAhxQAAhlBlAAIEUAAQBkAAAABlIAABxQAABlhkAAg");
	this.shape.setTransform(30.5,-6.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.6,-22.5,48,31.7);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiXCYQg/g/AAhZQAAhXA/hAQA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	mask.setTransform(21.6,21.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#2621FF","#000000"],[0,1],8.3,-9.8,0,8.3,-9.8,37.8).s().p("AjWDXIAAmtIGtAAIAAGtg");
	this.shape.setTransform(21.6,21.6);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.2,43.1);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIAgQAkgjAThLIALgGQgCAjgUAnQgpBNhUASQBAgkARgRg");
	this.shape.setTransform(7.2,8.6);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.3,0,15,17.2);


(lib.Symbol2copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg//ADZIACmxMBl0AAAQBkAAAABkIAADpQAABkhkAAgEA8+ACdQAxhFAAhaQAAhfg3hKIDIAAIAAFIgEAzwACdQAxhFAAhaQAAhfg3hKICEAAQg4BJAABgQAABaAyBFgEAq0ACdQhkAAAAhkIAAiAQAAhkBkAAIBsAAQg4BJAABgQAABaAyBFg");
	this.shape.setTransform(513,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103.4,0,819.4,43.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F204B").s().p("EAosgGQIT+ADQBdAPAABrIAAInQAABthdAOIz+ACgAHwGRIAAshIADAAMAgkAAAIAEAAIAAMhgEgrTAGRIAAshMAywAAAIAAMhgEg8JAGRQh9AAAAh9IAAonQAAh9B9AAIQkAAIAAMhg");
	this.shape.setTransform(-97.9,0);

	this.ikNode_1 = new lib.Symbol2copy3();
	this.ikNode_1.setTransform(-0.5,-0.4,1.25,1.25,0,0,0,512.6,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512.1,-40.1,1024.2,80.3);


(lib.mc_patch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EAp4AEPIAAodIARAAIAAIdgAI6EPIAAodIATAAIAAIdgEgqIAEPIAAodIASAAIAAIdg");
	this.shape.setTransform(-107.3,-0.4);

	this.instance = new lib.Symbol1();
	this.instance.setTransform(-118.9,6.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.shadow = new cjs.Shadow("#000000",0,0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-538.1,-66.1,1080,136);


(lib.mc_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(8.4,7.8,0.64,0.64,0,0,0,8.1,9);

	this.instance_1 = new lib.ClipGroup_1();
	this.instance_1.setTransform(0,0,0.64,0.64,0,0,0,21.6,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-13.8,-13.8,27.6,27.6);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#696969","#353535","#696969","#353535","#696969","#353535","#696969"],[0,0.176,0.369,0.537,0.706,0.843,1],522.7,-0.1,-522.2,8.7).s().p("EhKSAEiIAApDMCUlAAAIAAJDg");
	this.shape.setTransform(513.9,384.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#2D300C").s().p("EhKSABRIAAgdMCUlAAAIAAAdgEhKSgA0IAAgcMCUlAAAIAAAcg");
	this.shape_1.setTransform(513.9,432.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#696969","#353535","#696969","#353535","#696969","#353535","#696969"],[0,0.176,0.369,0.537,0.706,0.843,1],63.9,-37.6,-1349.8,-28.8).s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_2.setTransform(989.5,422.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#4D4D4D","#333333","#434343","#272727","#4D4D4D","#232323","#434343"],[0,0.176,0.369,0.537,0.706,0.843,1],522.7,33.2,-522.2,42).s().p("EhKSgAoMCUlAAAIAABJIgSAAIAAAGMiUTAACg");
	this.shape_3.setTransform(513.9,418.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#4D4D4D","#333333","#434343","#272727","#4D4D4D","#232323","#434343"],[0,0.176,0.369,0.537,0.706,0.843,1],64.8,29.4,-1348.9,38.2).s().p("AAIAEIAAgDIgQAAIAAgEIAQAAIABAAIAAAHg");
	this.shape_4.setTransform(988.6,421.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("EBHMAAVIAAgpIDHAAIAAApgEhKSAAUIAAgoICpAAIAAAog");
	this.shape_5.setTransform(513.9,433.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#171901").s().p("EhKTABIMCUmAAAIAAAlMiUmAACgEhKTAArIAAgYICqAAIAAgoIiqAAIAAgoMCUmAAAIAAAoIjHAAIAAApIDHAAIAAAXgEhKTgBaIAAgRMCUUgADIASAAIAAADIAAACIAAAPg");
	this.shape_6.setTransform(514,433.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#404040").s().p("EhKTAGZIAAsxMCUmAAAIAAMxg");
	this.shape_7.setTransform(514,386.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhP+A/IMAAAh+PMCf+AAAMAAAB+Pg");
	mask.setTransform(512.3,760.5);

	// Layer 1
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(159.5,719.4,0.64,0.64,0,0,0,8.1,9);

	this.instance_1 = new lib.Symbol4("single",0);
	this.instance_1.setTransform(512.3,694.6,1.799,1.799,0,0,0,284.8,187.3);

	this.instance.mask = this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,345.6,1024,818.9);


// stage content:
(lib.PressureandnumberofmoleculesN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.bg();
	this.instance.setTransform(512.1,226.5,1,1,0,0,0,512.3,583);

	this.instance_1 = new lib.mc_blue();
	this.instance_1.setTransform(512.4,405.4);

	this.instance_2 = new lib.mc_patch();
	this.instance_2.setTransform(512.1,744.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(511.8,393.1,1024.7,820.5);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;