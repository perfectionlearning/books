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



(lib.square = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AlQlQIKhAAIAAKhIqhAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7F7F7F").s().p("AlQFRIAAqhIKhAAIAAKhg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.7,-34.7,69.6,69.6);


(lib.mc_play01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,2,1).p("AA6AAQAAAXgSARQgRARgXAAQgXAAgRgRQgRgRAAgXQAAgXARgRQARgQAXAAQAXAAARAQQASARAAAXg");
	this.shape.setTransform(0.1,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUgcIApAcIgpAdg");
	this.shape_1.setTransform(0.7,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0F2148").s().p("AhDBEQgcgcAAgoQAAgnAcgdQAcgcAnAAQAnAAAdAcQAcAdAAAnQAAAogcAcQgdAcgnABQgngBgcgcgAg4AAQAAAXARARQARARAWAAQAXAAARgRQASgRAAgXQAAgXgSgRQgRgQgXAAQgWAAgRAQQgRARAAAXIAAAAgAgnAoQgRgRAAgXQAAgXARgRQARgQAWAAQAXAAARAQQASARAAAXQAAAXgSARQgRARgXAAQgWAAgRgRgAgOAdIApgdIgpgcgAA6AAIAAAAg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-9.7,19.4,19.4);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2LXbMAAAgu2MAsXAAAMAAAAu2g");
	mask.setTransform(142,150);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00CC00").s().p("AiZCbQhBhBAAhaQAAhZBBhBQBAhABZAAQBbAAA/BAQBBBBAABZQAABahBBBQg/BAhbAAQhZAAhAhAg");
	this.shape.setTransform(49.2,180.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.2,158.2,43.9,43.9);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiXCYQg/g/AAhZQAAhXA/hAQA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	mask.setTransform(21.6,21.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#00EE00","#007F00"],[0,1],8.3,-9.8,0,8.3,-9.8,37.8).s().p("AjWDXIAAmtIGtAAIAAGtg");
	this.shape.setTransform(21.6,21.6);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.2,43.1);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ARuD3Mgh9AAAIgXAAIgDAAIgCAAIj6AAQhkAAAAhkIAAgRIAAkNIAAgHQAAhkBkAAID8AAIADAAMAlMAAAQBkAAAABkIAAAHIAAENIAAARQAABkhkAAg");
	this.shape.setTransform(224.4,22.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(82.5,-1.8,283.7,49.5);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg//ADZIAAmxMBZkAAAQBkAAAABkIAADpQAABkhkAAgEA89ACdQAyhGgBhZQAAhgg2hJIDHAAIAAFIgEAzvACdQAxhGABhZQgBhgg3hJICEAAQg4BJABBgQgBBZAyBGgEAqzACdQhkAAAAhkIAAiAQAAhkBkAAIBsAAQg4BJAABgQABBZAxBGg");
	this.shape.setTransform(409.6,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,819.2,43.5);


(lib.ClipGroup_1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiXCYQg/g/AAhZQAAhXA/hAQA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	mask.setTransform(21.6,21.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FF0000","#830000"],[0,1],8.3,-9.8,0,8.3,-9.8,37.8).s().p("AjWDXIAAmtIGtAAIAAGtg");
	this.shape.setTransform(21.6,21.6);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.2,43.1);


(lib.ClipGroup_1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("AiXCYQg/g/AAhZQAAhXA/hAQA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	mask_1.setTransform(21.6,21.6);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#4AE0F5","#004DD9"],[0,1],8.3,-9.8,0,8.3,-9.8,37.8).s().p("AjWDXIAAmtIGtAAIAAGtg");
	this.shape_1.setTransform(21.6,21.6);

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.2,43.1);


(lib.Bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP/AAAMCf/AAA");
	this.shape.setTransform(0,-336.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP/AAAMCf/AAA");
	this.shape_1.setTransform(0,-202.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP/AAAMCf/AAA");
	this.shape_2.setTransform(0,-135.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP/AAAMCf/AAA");
	this.shape_3.setTransform(0,-269.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP/AAAMCf/AAA");
	this.shape_4.setTransform(0,-68.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP/AAAMCf/AAA");
	this.shape_5.setTransform(0,-1.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP/AAAMCf/AAA");
	this.shape_6.setTransform(0,65.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP/AAAMCf/AAA");
	this.shape_7.setTransform(0,132.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP/AAAMCf/AAA");
	this.shape_8.setTransform(0,199.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP/AAAMCf/AAA");
	this.shape_9.setTransform(0,266.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP/AAAMCf/AAA");
	this.shape_10.setTransform(0,333.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP/AAAMCf/AAA");
	this.shape_11.setTransform(0,400.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP/AAAMCf/AAA");
	this.shape_12.setTransform(0,-403.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape_13.setTransform(-436.4,0.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape_14.setTransform(-302.4,0.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape_15.setTransform(-235.4,0.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape_16.setTransform(-369.4,0.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape_17.setTransform(-168.4,0.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape_18.setTransform(-101.4,0.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape_19.setTransform(-34.4,0.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape_20.setTransform(32.6,0.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape_21.setTransform(99.6,0.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape_22.setTransform(166.6,0.1);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape_23.setTransform(233.6,0.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape_24.setTransform(300.6,0.1);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape_25.setTransform(367.6,0.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape_26.setTransform(434.6,0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape_27.setTransform(501.6,0.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape_28.setTransform(-503.4,0.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F1E9BD").s().p("EhP9A/GMAAAh+LMCf7AAAMAAAB+Lg");
	this.shape_29.setTransform(0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-513,-404.9,1026.1,809.8);


(lib.Redball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAwA0IAAg5QAAgPgDgEQgDgHgIABQgGAAgFADQgFAEgDAGQgCAHAAANIAAAxIgZAAIAAg3QAAgOgCgFQgBgFgDgCQgDgBgGAAQgGAAgFADQgFAEgCAFQgDAHAAANIAAAyIgbAAIAAhlIAZAAIAAAOQAOgQATAAQAKAAAHADQAFAEAFAJQAHgJAIgEQAIgDAJAAQALgBAIAFQAIAEAEAKQADAGAAAPIAABAg");
	this.shape.setTransform(13.5,14.8);

	this.instance = new lib.ClipGroup_1copy();
	this.instance.setTransform(13.7,15.1,0.628,0.628,0,0,0,21.6,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.2,1.6,27.1,27.1);


(lib.Greenball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABrBHIAAg7QAAgNgCgFQgEgGgIAAQgGAAgFAEQgFADgDAFQgCAHAAAOIAAAyIgbAAIAAg5QAAgOgBgDQgCgFgDgCQgDgCgGAAQgGAAgFAEQgFADgCAFQgCAGgBAPIAAAyIgZAAIAAhlIAYAAIAAAOQANgRATAAQAKAAAHAEQAHAEAFAJQAHgJAIgEQAIgEAJAAQALAAAIAFQAIAEAEAJQADAHAAANIAABCgAiGBHQACgOAHgNQAIgNAXgVQATgQAEgGQAGgIAAgJQAAgJgFgFQgFgFgJAAQgJAAgFAFQgEAGgCAMIgbgDQACgXANgKQAOgJATAAQAVAAAMALQAMALAAARQAAAKgDAJQgEAIgIAIIgRASIgRAQIgFAIIA2AAIAAAZg");
	this.shape.setTransform(18.9,18.2);

	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(18.8,19.1,0.862,0.862,0,0,0,21.6,21.6);

	this.instance_1 = new lib.ClipGroup_2();
	this.instance_1.setTransform(99,-7,0.862,0.862,0,0,0,142.1,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.4,-136.3,244.7,258.5);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.setTransform(139.4,31.7,1,1,0,0,0,199.5,23);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",4,4,8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F204B").s().p("ADuE7IAAp1MAl7AAAQBkABAABjIAAGtQAABjhkABgEgprAE7QhhgDAAhhIAAmtQAAhjBkgBMAs9AAAIAAJ1g");
	this.shape.setTransform(290.8,31.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AE5E7IAAp1IAZAAIAAJ1gAlRE7IAAp1IAbAAIAAJ1g");
	this.shape_1.setTransform(178.5,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

	// Layer 1
	this.ikNode_1 = new lib.Symbol2();
	this.ikNode_1.setTransform(512.6,32.3,1,1,0,0,0,512.6,21.8);

	this.timeline.addTween(cjs.Tween.get(this.ikNode_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,819.2,72.8);


(lib.Button_Set_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLDZIAAmxIAXAAIAAGxg");
	this.shape.setTransform(313.3,32.3);

	this.instance = new lib.Symbol3();
	this.instance.setTransform(512.6,31.5,1,1,0,0,0,512.6,31.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,24);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-26,875,128);


(lib.Blueball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABsBHIAAg7QAAgNgDgFQgDgGgIAAQgGAAgFAEQgFADgDAFQgCAHAAAOIAAAyIgbAAIAAg5QAAgOgCgDQgBgFgDgCQgDgCgGAAQgGAAgFAEQgFADgCAFQgDAGAAAPIAAAyIgZAAIAAhlIAXAAIAAAOQAOgRATAAQAKAAAHAEQAHAEAFAJQAHgJAIgEQAIgEAJAAQALAAAIAFQAIAEAEAJQADAHAAANIAABCgAhMBHIAAgdIg7AAIAAgYIA/hYIAXAAIAABYIARAAIAAAYIgRAAIAAAdgAhtASIAhAAIAAgvg");
	this.shape.setTransform(26.8,27.2);

	this.instance = new lib.ClipGroup_1_1();
	this.instance.setTransform(27.3,27.6,1.25,1.25,0,0,0,21.6,21.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.3,0.6,53.9,53.9);


// stage content:
(lib.Gravityandmotion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.square();
	this.instance.setTransform(34.5,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4));

	// Layer 4
	this.instance_1 = new lib.Bg();
	this.instance_1.setTransform(512,403.9,1,1,0,0,0,0,-0.1);

	this.instance_2 = new lib.Redball();
	this.instance_2.setTransform(411.8,728.4);

	this.instance_3 = new lib.Greenball();
	this.instance_3.setTransform(714.8,719.2);

	this.instance_4 = new lib.Blueball();
	this.instance_4.setTransform(571.9,714.2);

	this.instance_5 = new lib.Button_Set_1();
	this.instance_5.setTransform(640.8,758.9,1.25,1.25,0,0,0,512.6,31.5);

	this.instance_6 = new lib.mc_play01();
	this.instance_6.setTransform(450.3,350.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(511.5,403.5,1025.1,808.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;