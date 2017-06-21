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
	this.shape.graphics.f("#FFFFFF").s().p("EAkJADZIgBAAIilAAQALgJANgOQBVhSAAh2QAAh4hVhVIgFgFICSAAIABAAIAEAAQBkAAAABkIAADpQAABkhkAAgEg//ADZIAAmxMBbqAAAIgGAFQhVBVABB4QgBB2BVBSQALALAOAMgEA89ACdQAyhGgBhZQAAhgg2hJIDHAAIAAFIgEAzvACdQAxhGABhZQgBhgg3hJICEAAQg4BJABBgQgBBZAyBGgEAqzACdQhkAAAAhkIAAiAQAAhkBkAAIBsAAQg4BJAABgQABBZAxBGg");
	this.shape.setTransform(409.6,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,819.2,43.5);


(lib.ClipGroup_2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2LXbMAAAgu2MAsXAAAMAAAAu2g");
	mask.setTransform(142,150);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#660000").s().p("AiZCbQhBhBAAhaQAAhZBBhBQBAhABZAAQBbAAA/BAQBBBBAABZQAABahBBBQg/BAhbAAQhZAAhAhAg");
	this.shape.setTransform(49.2,180.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.2,158.2,43.9,43.9);


(lib.ClipGroup_2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	mask_1.graphics.p("A2LXbMAAAgu2MAsXAAAMAAAAu2g");
	mask_1.setTransform(142,150);

	// Layer 3
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0038FF").s().p("AiZCbQhBhBAAhaQAAhZBBhBQBAhABZAAQBbAAA/BAQBBBBAABZQAABahBBBQg/BAhbAAQhZAAhAhAg");
	this.shape_1.setTransform(49.2,180.2);

	this.shape_1.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.2,158.2,43.9,43.9);


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
	this.shape.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/FMAAAh+J");
	this.shape.setTransform(0.4,403.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAg/EMAAAB+J");
	this.shape_1.setTransform(1023.8,403.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/GMAAAh+L");
	this.shape_2.setTransform(409.4,403.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAg/FMAAAB+L");
	this.shape_3.setTransform(955,403.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/GMAAAh+L");
	this.shape_4.setTransform(818.6,403.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/GMAAAh+L");
	this.shape_5.setTransform(750.4,403.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/GMAAAh+L");
	this.shape_6.setTransform(682.2,403.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/GMAAAh+L");
	this.shape_7.setTransform(545.8,403.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/GMAAAh+L");
	this.shape_8.setTransform(614,403.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/GMAAAh+L");
	this.shape_9.setTransform(477.6,403.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/GMAAAh+L");
	this.shape_10.setTransform(341.2,403.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/GMAAAh+L");
	this.shape_11.setTransform(273,403.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/GMAAAh+L");
	this.shape_12.setTransform(204.8,403.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/GMAAAh+L");
	this.shape_13.setTransform(136.6,403.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAg/FMAAAB+L");
	this.shape_14.setTransform(886.8,403.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#CDC07A").ss(1,1,1).p("EAAAA/GMAAAh+L");
	this.shape_15.setTransform(68.4,403.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#006633").s().p("EBP/ABEIAAiHIABAAIAACHgEhP/ABEIAAg3IACAAIAAA3g");
	this.shape_16.setTransform(512,35.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP7AAAMCf4AAA");
	this.shape_17.setTransform(512.3,746.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP9AAAMCf7AAA");
	this.shape_18.setTransform(512.1,678.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP9AAAMCf7AAA");
	this.shape_19.setTransform(512.1,610.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP9AAAMCf7AAA");
	this.shape_20.setTransform(512.1,475.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP9AAAMCf7AAA");
	this.shape_21.setTransform(512.1,543);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP9AAAMCf7AAA");
	this.shape_22.setTransform(512.1,407.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP9AAAMCf7AAA");
	this.shape_23.setTransform(512.1,339.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP9AAAMCf7AAA");
	this.shape_24.setTransform(512.1,271.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP8AAAMCf4AAA");
	this.shape_25.setTransform(512.1,203.7);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP9AAAMCf7AAA");
	this.shape_26.setTransform(512.1,135.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP9AAAMCf7AAA");
	this.shape_27.setTransform(512.1,203.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#CDC07A").ss(1,1,1).p("EBP8AAAMif4AAA");
	this.shape_28.setTransform(512.1,807.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP8AAAMCf4AAA");
	this.shape_29.setTransform(512.1,0.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#CDC07A").ss(1,1,1).p("EhP9AAAMCf7AAA");
	this.shape_30.setTransform(512.1,68);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F1E9BD").s().p("EhP9A/GMAAAh+LMCf7AAAMAAAB+Lg");
	this.shape_31.setTransform(512.1,403.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.8,-1,1025.8,809.8);


(lib.Redball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAtA0IAAg/QAAgFgCgFQgDgFgIAAQgHAAgDAEQgDAEgCAEIAAAJIAAA5IggAAIAAg/IgBgHQgBgDgDgCQgDgDgFAAQgGAAgEADQgDADgCAEQgBAEAAAGIAAA6IgiAAIAAhlIAeAAIACAOQADgHAHgFQAHgEALAAQAJAAAHAEQAFADAEALQAFgIAIgFQAJgGAOABQAJAAAIADQAIADAGAIQAFAJAAARIAAA/g");
	this.shape.setTransform(13.7,15.7);

	this.instance = new lib.ClipGroup_1copy();
	this.instance.setTransform(13.7,15.1,0.628,0.628,0,0,0,21.6,21.6);

	this.instance_1 = new lib.ClipGroup_2copy();
	this.instance_1.setTransform(72.2,-3.9,0.628,0.628,0,0,0,142.1,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-98.1,178.4,188.4);


(lib.Greenball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAtA0IAAg/QAAgFgCgFQgDgFgIAAQgHAAgDAEQgDADgCAFIAAAJIAAA5IggAAIAAg/IgBgHQgBgDgDgCQgDgDgFAAQgGAAgEADQgDADgCAEQgBAEAAAFIAAA7IgiAAIAAhlIAeAAIACAOQADgHAHgFQAHgEALgBQAJABAHAEQAFAEAEAJQAFgHAIgFQAJgGAOAAQAJABAIADQAIADAGAIQAFAKAAAQIAAA/g");
	this.shape.setTransform(25.7,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AguBHIAAgbIAvgqIALgLQAEgFAAgIQAAgEgCgFQgCgEgFgDQgFgDgGAAQgGAAgHACIgNAFIgKAEIgLgaQAMgHAOgEQANgDAMAAQAPAAAMAGQAMAFAGALQAHAKAAAOQAAAMgEAHQgEAGgHAIIgPANIgWATIA0AAIAAAeg");
	this.shape_1.setTransform(10.6,19.2);

	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(18.8,19.1,0.862,0.862,0,0,0,21.6,21.6);

	this.instance_1 = new lib.ClipGroup_2();
	this.instance_1.setTransform(99,-7,0.862,0.862,0,0,0,142.1,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.instance = new lib.Symbol3();
	this.instance.setTransform(512.6,31.5,1,1,0,0,0,512.6,31.5);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-26,875,128);


(lib.Blueball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAtA0IAAg/QAAgFgCgFQgDgFgIABQgHAAgDADQgDAEgCAEIAAAJIAAA5IggAAIAAg/IgBgHQgBgDgDgCQgDgCgFAAQgGAAgEACQgDADgCAEQgBAEAAAGIAAA6IgiAAIAAhlIAeAAIACAOQADgHAHgFQAHgEALAAQAJAAAHADQAFAEAEALQAFgIAIgFQAJgGAOABQAJAAAIACQAIAEAGAIQAFAJAAARIAAA/g");
	this.shape.setTransform(33.8,29.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAJBFIAAgcIhBAAIAAgZIBDhUIAgAAIAABSIAOAAIAAAbIgOAAIAAAcgAgWAOIAfAAIAAglg");
	this.shape_1.setTransform(18.2,27.6);

	this.instance = new lib.ClipGroup_1_1();
	this.instance.setTransform(27.3,27.6,1.25,1.25,0,0,0,21.6,21.6);

	this.instance_1 = new lib.ClipGroup_2_1();
	this.instance_1.setTransform(143.6,-10.2,1.25,1.25,0,0,0,142.1,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34,-197.7,354.9,374.9);


// stage content:
(lib.Gravityandmotion = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.square();
	this.instance.setTransform(34.5,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Layer 4
	this.instance_1 = new lib.Bg();
	this.instance_1.setTransform(512,404.1,1,1,0,0,0,512,403.9);

	this.instance_2 = new lib.Redball();
	this.instance_2.setTransform(411.8,728.4);

	this.instance_3 = new lib.Greenball();
	this.instance_3.setTransform(652,723.1);

	this.instance_4 = new lib.Blueball();
	this.instance_4.setTransform(572.5,714.8);

	this.instance_5 = new lib.Button_Set_1();
	this.instance_5.setTransform(640.8,758.9,1.25,1.25,0,0,0,512.6,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(511.7,403.7,1024.8,808.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;