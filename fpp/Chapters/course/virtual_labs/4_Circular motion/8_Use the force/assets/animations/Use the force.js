(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 808,
	fps: 24,
	color: "#999999",
	manifest: [
		{src:"images/car.png?1495534590258", id:"car"},
		{src:"images/car1.png?1495534590258", id:"car1"},
		{src:"images/Cutpng.jpg?1495534590258", id:"Cutpng"},
		{src:"images/road.jpg?1495534590258", id:"road"},
		{src:"images/road1.jpg?1495534590258", id:"road1"}
	]
};



// symbols:



(lib.car = function() {
	this.initialize(img.car);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,90);


(lib.car1 = function() {
	this.initialize(img.car1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,90);


(lib.Cutpng = function() {
	this.initialize(img.Cutpng);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,780,620);


(lib.road = function() {
	this.initialize(img.road);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,154);


(lib.road1 = function() {
	this.initialize(img.road1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,304,154);


(lib.Watchbg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#48525C").s().p("AgldAIAAlaIBLAAIAAFagAXlAlIAAhLIFaAAIAABLgA8+AlIAAhLIFaAAIAABLgAgl3lIAAlaIBLAAIAAFag");
	this.shape.setTransform(-1.2,0.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AMJWNIBBgmIB1DMIhAAngAvBY2IB4jPIBBAmIh2DNgAVmNJIAmhBIDPB1IgnBEgA5aN9IDPh1IAmBBIjOB4gAVmtKIDOh2IAnBBIjPB4gA5at/IAnhBIDOB2IgmBDgAMH2NIB4jMIBAAnIh1DMgAvB41IBDgkIB2DMIhBAng");
	this.shape_1.setTransform(-1.2,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.502)").s().p("AyHHuQlHjKhqkCQBiiJB/h/QFalaGyiFQC5g4DJgSQBegJBiAAQB2AAB1AOQCZARCPAoQHMCAFrFrQCNCOBrCaQhxDvkyC9QnkErqrAAQqrAAnjkrg");
	this.shape_2.setTransform(1.2,-112.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#FFFFFF","#CECECE"],[0.914,1],-0.4,-0.2,0,-0.4,-0.2,187).s().p("Ai9d2QjKgSi6g5QmxiFlalaQoxoxAAsbQAAsZIxozQFalZGyiFQC6g5DJgSQBdgIBgAAQB5AAB0ANQCZARCPAoQHMCBFsFqQIxIzAAMZQAAMboxIxQlrFrnLCAQiRApiaARQh0ANh4AAQhfAAhegIg");

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#A3A4A8").s().p("ArqcMQlSiSkZkaQo6o6AAsmQAAslI6o7QEZkZFSiSICfgfQmyCFlaFZQoxIzAAMZQAAMbIxIxQFaFaGxCFgAVCVMQIxoxAAsbQAAsZoxozQkckblXiMQFwB9EXEWQI6I7AAMlQAAMmo6I6QkYEYk9BnQE6iMEHkHg");
	this.shape_4.setTransform(1.1,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.rf(["#FFFFFF","#FFFFFF","#000000"],[0.588,0.82,1],-10.1,4.9,0,-10.1,4.9,206.5).s().p("AVhWFQJJpJAAs8QAAs7pJpKQkikglaiXQFpCOEoEpQJKJKAAM7QAAM8pKJJQkoEplpCPQFaiWEikigA2FVgQo6o6AAsmQAAslI6o7QEhkhFgiLQlSCTkZEZQo6I7AAMlQAAMmI6I6QEZEZFSCTQlgiLkhkhg");
	this.shape_5.setTransform(3.8,0);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#636363").s().p("A2FWGQpJpKAAs8QAAs7JJpKQJKpJM7AAQM8AAJKJJQJJJKAAM7QAAM8pJJKQpKJJs8AAQs7AApKpJgAi991QjJASi5A4QmyCFlbFaQoxIyAAMaQAAMbIxIxQFaFaGyCFQC6A5DKASQBdAIBfAAQB4AAB0gNQCagRCRgpQHLiBFrlqQIyoxgBsbQABsaoyoyQlslqnMiBQiPgoiZgRQh0gNh5AAQhgAAhdAIg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#040404").s().p("A3fQvQpupvAAtvQAArNGbohQgcChAACtQAALvIRITQIQIQLqABQLrgBIQoQQIRoTAArvQAAg3gCg3QEHHRAAI9QAANvpvJvQpvJvtwAAQtvAApwpvg");
	this.shape_7.setTransform(0,43.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.rf(["#FFFFFF","#000000"],[0,1],7.3,-151.7,0,7.3,-151.7,208.6).s().p("A3fXfQpupvAAtwQAAtwJupvQJwpuNvAAQNwAAJvJuQJvJvAANwQAANwpvJvQpvJvtwAAQtvAApwpvg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-212.6,-212.6,425.4,425.4);


(lib.Tree = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006D39").s().p("AAzAoQgJAFgGAGQgOAMgMAVIgBgCQACgGgFgQIgIgdIAAACQgDAJgLAVIgEAAQAAgDgDgGQgEgFgCgNQgIABgNAJQgNAJgCAIQgCgIgDgFIgHgJQgOABAAABQgEABgQAJQgGgHAFgJQAHgPAHgLQAFgLgDgCQAMgDAMAHQAKAJAIARQADglgCgUQgCgfgTgbQAaATAMAgQANAbACApQAIgOANgfQAJggAMgRQAAAFgHAlQgGAWAHAPQAOgaAagTQAYgPAdgIQggAXgYA0QA4gJAGAAQAGABgiAUQgiAVAGAeQgUgTANgcg");
	this.shape.setTransform(0.6,-4.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#367936").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1.setTransform(7,4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006D39").s().p("AhMALQgCgngNgiQgLgjAbgCIAYgBQAOgBAFgFQAHALgIATQgHARgSATQAygWAVgQQAlgYAbgmQgPApghAjQgdAfgzAfQATABAtgJQAqgIAXACIg1AQQgdAMgRARQAmgEAgAQQAcAOASAbQgmgShJAKQAbA4AAAJQAAAGgTgNQg/gngSAwQAShDgFg/g");
	this.shape_2.setTransform(-12.1,19.6,1.508,1.508,0,-52.9,127.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006D39").s().p("AgXBWQgYgfgeAKQARgXAeAKQgHgIgHgGQgNgNgWgJIACgBQAGABAPgHIAcgLIgCAAQgKgBgWgJIAAgEQADAAAFgDQAFgGAMgDQgBgIgLgMQgKgMgJgBQAIgDAFgDIAJgIQgDgNgBgBQgCgDgLgPQAHgHAJAEQAQAEAMAHQALADAEgDQAEALgHANQgIAMgQAJQAlgBATgEQAfgGAYgVQgQAbgdAQQgaAPgoAHQAOAHAhAJQAhAGASAJQgFABglgDQgZgDgMAIQAbALAWAYQASAWALAcQgagdg3gSQAPA2AAAGIAAABQgDAAgUgag");
	this.shape_3.setTransform(-21.2,-21.4,1.847,1.847,-101.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#367936").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(-5.5,-9.4,1.847,1.847,-101.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006D39").s().p("AhMALQgCgngNgiQgLgjAbgCIAYgBQAOgBAFgFQAHALgIATQgHARgSATQAygWAVgQQAlgYAbgmQgPApghAjQgdAfgzAfQATABAtgJQAqgIAXACIg1AQQgdAMgRARQAmgEAgAQQAcAOASAbQgmgShJAKQAbA4AAAJQAAAGgTgNQg/gngSAwQAShDgFg/g");
	this.shape_5.setTransform(22,8.2,1.157,1.157,22.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006D39").s().p("AAzAoQgJAFgGAGQgOAMgMAVIgBgCQACgGgFgQIgIgdIAAACQgDAJgLAVIgEAAQAAgDgDgGQgEgFgCgNQgIABgNAJQgNAJgCAIQgCgIgDgFIgHgJQgOABAAABQgEABgQAJQgGgHAFgJQAHgPAHgLQAFgLgDgCQAMgDAMAHQAKAJAIARQADglgCgUQgCgfgTgbQAaATAMAgQANAbACApQAIgOANgfQAJggAMgRQAAAFgHAlQgGAWAHAPQAOgaAagTQAYgPAdgIQggAXgYA0QA4gJAGAAQAGABgiAUQgiAVAGAeQgUgTANgcg");
	this.shape_6.setTransform(14.7,-18.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#367936").s().p("AAAAAIAAAAIAAAAg");
	this.shape_7.setTransform(21.1,-9.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#27AA6C").s().p("Ah/FBQhOgtgehmQhZAJgvgrQgmgkgEg/QgDg2AXgsQALgUANgKQAOgKAOAEQgMg3ARgtQAPgnAjgcQAegZAkgJQAjgJAYAJQAEgcARgNQAOgMATACQATACANANQAOANABAUQAOgbAigOQAdgMAlACQAjACAZANQAbAOACAVQAQgYAXgMQAXgLAWAFQAXAHAOAYQAQAcACAuQAXgLAWAJQAVAIAKAUQALAVgHAWQgHAZgbARQAPAFAVASQAaAVANAWQAkA+hPAqQgUAKgDAVQgCANAFAWQAHApgMAaQgLAWgZAHQgVAHgbgFQgZgFgRgMQAFA0g5AuQg4AthOAKQgVADgRAAQg+AAgygcg");
	this.shape_8.setTransform(-1.9,3.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#306D28").s().p("AjiHkQhvhGgliBQiMAOhKhFQg9g5gGhkQgEhWAkhGQARggAVgPQAWgRAWAHQgThWAchIQAXg+A3gtQAvgmA6gPQA3gOAmAOQAHgrAagWQAXgTAeADQAdADAVAVIAJAKQAOASABAZQAWgsA2gWQAugTA7AEQA4ADAoAVQAqAXAEAgQAZgnAkgSQAkgSAjAJQAkAKAXAnQAZAsADBIQAlgRAjAOQAhANAQAgQARAhgKAjQgMAngrAbQAYAJAiAbQAoAhAVAkQA6Bkh/BBQgeAQgFAiQgDAUAGAjQANBCgUAoQgRAjgnAMQgjALgpgJQgSgDgOgGQgUgHgPgLQgOBphjBBQhbA8h+ABIgEAAQh8AAhjg9g");

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#0C5130").s().p("Aj5IuQh7hRgoiVQibAQhRhPQgnglgSg1QgOgpgDgyQgFhjAohRQASglAYgSQAYgTAYAIQgUhkAehSQAahIA8gzQA0gtBAgRQA9gQApAQQAIgyAdgZQAZgWAiADQAgADAXAYQAZAaABAkQAZgzA7gZQAzgVBBADQA9AEAtAYQAuAaAEAlQAcgtAogUQAogVAmALQAoALAZAtQAcAzADBTQApgUAmAQQAlAQARAkQATAngLAoQgNAtgvAfQAaAKAlAgIAZAXQAaAbAQAeQBABziLBLQghASgGAoQgEAXAHAoQAPBMgWAuQgUApgrANQgmAOgtgLQgUgEgQgGQgVgIgRgNQgQB6hsBKQhlBGiLABIgDAAQiLAAhshHg");
	this.shape_10.setTransform(3.7,2.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-68.7,-60.5,144.8,126);


(lib.Textur = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Cutpng();
	this.instance.setTransform(0,0,1.014,1.014);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,790.7,628.6);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ah8CQQhjAAgBhjIAAhZQABhjBjAAID5AAQBjAAAABjIAABZQAABjhjAAg");
	this.shape.setTransform(239.5,31.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(217,17,45,29);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg//ADZIAAmxMAhvAAAQBkAAAABkIAADpQAABkhkAAgEA8+ACdQAyhFgBhaQAAhfg2hKIDHAAIAAFIgEAzwACdQAxhFABhaQgBhfg3hKICEAAQg4BJABBgQgBBaAyBFgEAq0ACdQhkAAAAhkIAAiAQAAhkBkAAIBsAAQg4BJAABgQABBaAxBFg");
	this.shape.setTransform(513,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103.3,0,819.4,43.5);


(lib.r875m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAhBIAACD");
	this.shape.setTransform(97.3,-15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAhBIAACD");
	this.shape_1.setTransform(-7.5,-15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("AoJAAIQTAA");
	this.shape_2.setTransform(45.4,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.5,-23.1,107.1,15.2);


(lib.r800m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAhBIAACD");
	this.shape.setTransform(71.5,-15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAhBIAACD");
	this.shape_1.setTransform(-58.9,-15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("AqHAAIUPAA");
	this.shape_2.setTransform(6.2,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,-23.1,132.4,15.2);


(lib.Obj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AgzA4IAAgRQAAgJAHgGIAMgKQAFgDAGgCQAFgBgCAKQgCAJgLABQgLABAAATIABAUQgJgCgBgKgAgBAFIgCgEQADgMAHgBQAFAAAFACIAEACQADADgIABQgCAAgEAEIgHAGIgDAAIgBgBgAAQgbQAAgMAHgHIAbgUQAJAEgiATQgFADAAAJIgBAMQgDAAAAgIg");
	this.shape.setTransform(3,1.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["#333333","#000000"],[0,1],1.8,3.5,0,1.8,3.5,8.2).s().p("AhRBoQgagOgBgSQgBgQAOABQAIABAFgNQAHgPAGgCQASgHAAgIIgGgYQgEgWAagMQAcgMAMgUQAFgHAEgNQAHgWAOgQQAcgCgFAQQgEAQAEACIAPAGQAJADAOAMQAOALgCAMQgDAQgZAUIgCAAQgTAGgBAXQAAAagZACQgZADgEAOQgEAOAGAEQAFAEgBALQgBAMgIALQgUAdgvgNQgbAOgJAAQgNAAAighgAAHAZQgHABgDADIgMALQgGAGAAAJIgBARQACAJAIACIgBgTQABgUALAAQAJgBACgJQABgKgDABIgBAAgAAkACQgJABgDAOIACAEQADACADgCIAHgGQAEgFADAAQAIgBgDgDIgFgDQgEgCgEAAIgCABgAA0geQgHAHAAAMQAAAHADABIABgNQABgIAFgDQAigTgKgFIgbAVg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.9,-13.7,21.8,27.4);


(lib.mc_redCar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car();
	this.instance.setTransform(37.8,-0.1,0.22,0.22,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.9,-0.1,38.7,19.8);


(lib.mc_perple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car1();
	this.instance.setTransform(49.8,-0.4,0.29,0.29,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,-0.4,51.1,26.1);


(lib.mc_perple_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAJIgTgBIgGAAIgigDIgJgBIgGgBIgogEIAegEIAFAAIANgBQAfgCAjAAIAqACIAKAAIAIABQAjACAmADIACABIAAAAIgdAEQggADgfABIgJAAIgKAAIgYAAgAg4gDIgJABIgEAAIgWACIAdABIAFABIAGAAIABAAIAZABIAEABIAOAAIARAAIAIAAIAHAAIAtgCIAWgCIAAAAIgCAAIg1gCIgGAAIgHgBIgfAAIgRgBIggABg");
	this.shape.setTransform(22.5,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgNAJQg4gBg5gHQAygFAtgCIAdgBIANgBIAKAAIAJAAQAaAAAYACIAJAAIAiAFIAEABIgLAAIgYACIgsAFIgJABIgJAAIgqABIgBAAgAgWgCQghABglABQAqAEApAAIAAAAIAfgBIAHAAIAGAAIAggCIASgBIAIAAIgDAAIgZgBIgGgBIglgBIgGAAIgIAAIgJAAIgVABg");
	this.shape_1.setTransform(23.1,3.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgZBFQgSgigCghIAAgEIAAgCIABgKQACgOAEgNIAFgOIAIgNIBGAAQgIApACArQACAaAFAbgAgTg6IgGALIgEAMQgEALgBAMIgBAIIAAACIAAAEQACAbAOAeIA3AAQgEgXgCgWQgCglAIgjg");
	this.shape_2.setTransform(9.5,12.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAwIAAhhQABgGAHgCIAtABQADAAADACQAFADgBAFIAAAGIABAJIABAQIAAAJIgBAeIAAAFIgBAHIAAAMQAAAGgHACIguABQgJAAgBgJgAgXgqIAABTQABAIAHAAIAhgBQAEgCAAgFIABgKIABgGIAAgFIAAgZIAAgHIAAgOIgBgIIAAgGQAAgDgEgDIgDgCIghgBQgFACgBAFg");
	this.shape_3.setTransform(25.6,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag1BOIAHgcIACgLIAAgCIACgJIABgTIAAgOIAAgJIgBgPIgBgIIgBgDIgBgKIgHgaIBDgKIABAAQAlAaABA5IAAABQABAmgPAZIgDAFIgIAJQgGAHgIAFIgBAAgAgphDIAFAYIACAJIAAABIABAIIABANIAAAIIAAAMIgBARIgBAIIgBACIgBAJQgCAMgEALIA3AJIAAgBQAHgEAFgFIAGgIIADgEQAMgXAAggIAAgBQgBgzgfgWIgBAAg");
	this.shape_4.setTransform(35.8,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFEF9").s().p("ADFBcIgBgBIABgFIAHgMIAKgJQAEgEACABQABACgCAFQgCAFgFAGQgFAGgEAEQgEADgBAAIgBgBgAjKBWQgEgDgFgGIgHgMQgCgFABgBQACgBAEADQAFAEAEAGQAFAGACAFQADAFgCABIgBABQgBAAgEgDgAjbg7QgBgBACgFIAHgLIAJgKQAFgDABABQACABgDAFQgCAGgFAGQgEAGgFADQgDADgCAAIgBgBgADVhAQgEgDgFgHIgHgLIgCgFIABgBQACgCAEAEQAFADAEAHIAHAJIAAACQACAFgBABIgBABQgCAAgDgDg");
	this.shape_5.setTransform(24.6,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D32C2C").s().p("AAAAAIAAAAIAAAAg");
	this.shape_6.setTransform(4.2,22.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#203548").s().p("AAAAAIABAAIgBAAg");
	this.shape_7.setTransform(35.2,21.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#38587E").s().p("AAbBSIAKABIgSAQIgKABgAAtBTQAjACAmAGIACAAIAAABIgdADQggADgfABgAgoBiIgigDIgJgBIgGAAIgogHIAegDIAFgBIANgBQAfgCAjAAIgTASIgGAAgABJBNIAHgcIACgKIAAgCIACgJIABgUIBIBDQgGAGgIAFIgBAAgAhsBFIhJhHIAAgCIABgKIBWBTgAihBFQgSgigCghIBEBDgABVgFIAAgJIBTBKIgDAGgAgGAwIAAgsIAxA0IgqABQgHgBAAgIgAAvA4Ig1g4IAAgdIA/BBIgBAMQAAAGgHACgAgGgkIAAgFIA/BAIAAAGgAiog3IAHgNIBJAAQgJApADArgABihQIAtgGIABAAQAlAZABA6gAAIg5IAmAAQAEABACABQAFAEAAAEIAAAHIAAAJIABAQIAAAJgAh9hXQAygHAsgDIASARQg4AAg4gHgAAMhjIAKAAIASASIgKAAgAAfhjQAaAAAYADIAIAAIAiAEIAEABIgKABIgZAEIgsAEg");
	this.shape_8.setTransform(23,12.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4B76A9").s().p("AgPBjIgTgBIATgSIAqACIgSASIgYgBgAATBjIASgQIAIAAIgRAQIgJAAgABVAIIAAgNIBQBHIgIAJgAheBFIhWhTQACgOAEgNIAGgOIBKBHQABAaAFAbgAhxBFIhEhDIAAgEIBJBHgABVgOIgBgQIgBgIIgBgCIgBgKIgHgaIAYgEIBUBNIAAAAQABAngPAYgAArA4Igxg0IAAgEIA1A4gAgGgdIAAgHIA/BBIAAAHgAgGgpIAAgIQABgGAFgCIAIAAIAyAzIgBAdgAgNhQIgSgRIAegBIANgBIASASIgqABIgBAAgAAWhjIAJAAIARARIgIABg");
	this.shape_9.setTransform(23,12.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8000FF").s().p("ABoBlQAQgEAEgDQASgDAOgYQAQgcAAgnQAAglgQgcQgNgYgTgDQgDgDgSgFQAYgCAZAAIAQACQARADAMAIQAOAHAJANQAKAPAEAWIABATIABAHIAAAEIAAAKIgBAXQgCAPgGAMIgGALQgJAOgOAIIgMAGIgCABIgNAEIgGABIgVAAQgVAAgTgCgAjdBCQgLgbgCgiQgCghAJgcQAIgYAYgOQBYAYBYgBIABAAQAUAAAVgCIAKgBIAIgBIATgCIAAABIAHAaIABAKIABADIABAIIABAPIAAAJIAAAOIgBAUIgCAJIAAACIgCAKIgHAcIAAAAIgGAAIgEgBIgKgBIgIgBIgJAAQgWgCgVAAQgoAAgoAEIgMACIgFABQgnAFgnAKQgOgEgLgZgAivhDIgHANIgGANQgEAOgCANIgBAKIAAADIAAAEQACAgASAjIAwAAIAFAAIAOAAIAGAAQgFgbgBgaQgDgrAJgqgAgUgxIAAAJIAAAFIAAAHIAAAcIAAAFIAAArQAAAJAJABIAogBIAEAAIACAAQAHgCAAgHIABgLIAAgHIAAgGIABgeIAAgIIgBgRIAAgJIAAgGQAAgFgFgDQgCgCgEAAIgkAAIgJAAQgGABgBAGg");
	this.shape_10.setTransform(24.4,12.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5401A9").s().p("ABRB8IgBgFQgCgOAKgIIgPACIgQABIgJABIgmABIgJAAIgIAAIgMAAQgLALgOgKIgCgCIgrgCIgDABIgEACIAAAAQgRAFgngCIgIAAQgOAAgLgDQgIgCgHgDIgBAAIAAgBIgBABIgBgBQgPgEgMgbQgLgagCgjQgDggAKgdQAJgZAZgOIABAAIAAAAQAHgDAIgDQAMgDANAAIAIABQAngDARAFIABABQAEABADACIAqgCIADgDQANgIALAJIAPAAIAIAAIAJAAIAkACIAJABIAGABIAKABIAPABQgKgJACgNIAAgFQATgFABAZIADAAQAcgDAdAAIARABQA4AMAKA7IABAUIAAAHIAAAEIABAAIAAALIgBAYQgDAQgFAMQgMAcgdAMIgGADIgOAEIgBAAQgnABgigFQgCAVgNAAIgFAAgABmhkQASAFADADQATADANAYQAQAbAAAmQAAAngQAbQgOAYgSADQgEAEgQAEQAdADAggCIAGgBIANgDIACgBIAMgGQAOgJAJgNIAGgMQAGgMACgPIABgWIAAgLIAAgEIgBgGIgBgUQgEgVgKgPQgJgNgOgHQgMgIgRgDIgQgCIgJAAQgUAAgUACgAhgBSIgNABIgFABIgeAEIAoAGIAGAAIAJACIAiADIAGAAIATABIAaAAIAIAAIAJAAQAfgBAggDIAdgEIADgBIgDAAIgCAAQgmgFgjgDIgIAAIgKgBIgqgBIgOAAQgbAAgZABgAjkg5QgJAdACAgQACAjALAaQALAaAOAEQAngKAngFIAFgBIAMgCQAogEAogBQAWAAAVACIAJABIAIABIAKABIAEABIAGAAIAAAAIBFAJIABAAQAIgFAGgHIAIgJIADgFQAPgZgBgmIAAgBQgBg5glgaIgBAAIgtAHIgYADIAAgBIgTACIgIABIgKABQgVACgUAAIgBAAQhYABhYgYQgYAOgIAXgAgQhhIgeABQgsACgyAHQA4AHA4ABIABAAIAqgBIAKAAIAIgBIAsgFIAZgDIAKgBIgEgBIgigFIgIAAQgYgCgaAAIgJAAIgIAAIgPABg");
	this.shape_11.setTransform(24.5,12.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.1,25);


(lib.mc_nidle2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgIDtIAInZIAJHZg");
	this.shape.setTransform(1,23.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,47.5);


(lib.mc_nidle1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AgIDtIAInZIAJHZg");
	this.shape.setTransform(1,23.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,47.5);


(lib.mc_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7BE93").s().p("AABAFQADAPAAAFQABAHgEgDQgOgJgHgMQgIgJABgKQABgHACgEQADgEAFgDQAVADALAQQAJAKACALQACAQgPADIAAAAQgDAAgKgZg");
	this.shape.setTransform(26.6,7.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8897B4").s().p("AhrAuQgJgEgEgHQgEgHACgEQAUgkAsgTQAhgQAgAAQAggCAqAUQAnARAEAJQgFADgDACQgCADgBAIQgQABgpgOQgegLgaAIQgRADgaAXQgeAZgWAAQgGAAgGgCg");
	this.shape_1.setTransform(12.4,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,29.4,10.5);


(lib.mc_fire01_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#EF7AFC","#FFEE5E","#F74900","rgba(255,128,0,0.8)"],[0,0.337,0.753,1],-6.6,99.5,0,-6.6,99.5,40.1).s().p("AhfBCQAbABgKApgAAJgsQAJgVAQACQApAkgThQQATAEAPAiQAWA+hAAGQgwgBAJgqg");
	this.shape.setTransform(24.6,10.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FB6B0D").s().p("AgcFkQgOgWABgSQACgSgkgSQgwgxAyg7QAXgcAjAKQgigsAHgqQAJAgAhAWQBRAngGBEQgFAKgMABQhOAZAvBbgAA+AfQAVgDANgOQAKAHgQATIgRABQgUAAAJgKgAhRhNQAEgyACAKQASgYAigPQAggPASglQALBDgqAvQgxAmAIBBQgngmADgwgABGljIAbALIgbARg");
	this.shape_1.setTransform(20.2,79.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FBAC38").s().p("ABFHUIgNAAQgxhcBQgYQAMgCAFgKQAGhDhSgoQgggWgJgfQgHApAgAsQghgKgXAcQgyA8AwAwQAkASgCASQgBASANAXIgMAAQgKgbgWAAQhtAMgOhnQgRhFAqghQAZhAAKAKQAdAyAVhFQgEhLgigDQgkAQgOgaQgah8B2hNQgMA3A2giQBHg9gYiGQhHhAgDB6QAAAagjgNQg9grAlg+QBLhfBFAyQAZAJgIgiQgDgOgOgIIgrgSQgHgSAQgSQAWgLAPAWQAfBKARg5IAGAyQAmAmgEA6QgIAxgmgVQhCBRBEBcQBCBnhIBWQgihUgeBOQgQBJAfAVQAzALA3A1QA9BZhLA9IgNgQQgSgIgCBFQgGAdgMAAQgFAAgGgEgAg0AgQgDAwAnAoQgIhDAvgmQAsgtgLhDQgSAmgiAOQggAPgSAYIAAgBQgDAAgDAng");
	this.shape_2.setTransform(17.3,68);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.rf(["#EF7AFC","#FFEE5E","#F74900","rgba(255,128,0,0.8)"],[0,0.337,0.753,1],-12.5,106.3,0,-12.5,106.3,40.1).s().p("AgVAKQAggKgDgfQAgAsglAQQgGADgGAAQgRAAAFgWg");
	this.shape_3.setTransform(29.8,3.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FBAC38").s().p("AhFGXQiwhGB8imQANgSAmgaQAcgSAHgEQAbg8gqgtQgegGgJAdQgbgEgQgbQgfhzCBgjQANgEgNAvQATAcAsgwQARgWgegqQgEgdAaAdQBZBMgKBRQgEAXgoABQgQAHgMAOQglBQA1AUQCYB0g2B6QgvAvAQg3QgNg9g0BhQgRAzAgAoQgDAcgLABIgCAAIgKgQIgeAAQAYg4grhMQABhRAdA5QALhBAIAOQAHAjASgjQANgng4gZIAAgRQglgRgfAUQhUBIA6BSIACAFQBKA9gbBBIgCAAIgSAXQg0AAAOhZgAgGAQQAOAGABgnIAdAAQAfgzgQg1Qg+BbgRgsQgjApA3AxgAhCl2QARhTBIAEQgUAJABAWQAvAxAahHIgGgzQAkAogCA4QgVBqg8g9IgYAYQgQAGgNAAQgmAAABgyg");
	this.shape_4.setTransform(17.4,67.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FB6B0D").s().p("AggFyQAdhAhMg9IgCgFQg6hSBUhJQAfgTAlARIAAARQA4AYgNAoQgSAigHgiQgIgPgLBCQgbg5gBBRQApBMgYA3gAgbhUQg3g0AjgpQARAtA+hbQAQA1gfAyIgbAAQgBAlgMAAIgEgBgABKlbIASgWIAOAWg");
	this.shape_5.setTransform(19.5,77.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FBAC38").s().p("ABJH0IgCgCQgRgFgQgCIAAgCQArg2guhKIgBgBIgQAAQgqhOAVgvQAQg1BGA5QAWgEgNgcQgjgsgUgOQAGgUgRgIQgggQAAAjQg6AqgSBXQgLBWBeA6QAVAegSAuIAAACIgOADQhGAYgFhtQhFgmgOgtQgWgwAVhIQAjhuAvAAQBwhOg+gyQgKAJgSABQg/gKAJg0QAThaBEgdIAAAgQAYAOAehkQALAXATASQBwBug0A8QgKAKgUgCQgegFgLAjQgSBLBTA6IAcAWQBOBcg1BjQgNAFgGgLQgBgggXACQg5AFAQA+QA6BWg8AugAgBiBQgvABAlBKQAWgpAOAGQA1gYgjhPQAJA2g1AJgAAEm+QAOgPAOAAQgLAvAgAHQARgBgDgeIgFg+QAxAygGA+QgGAugzgRIgrAdQg8gpA7hLg");
	this.shape_6.setTransform(18.1,65.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FB6B0D").s().p("AAAFWIAAgCQAQgugTgeQhgg6ALhWQAShXA6goQAAgjAgAQQARAIgGASQAUAOAjAsQANAcgWAEQhGg5gQA1QgVAvAqBOIAQAAIABABQAuBKgrA2IAAACQgRgCgPACgAgHkWQA1gJgJg2QAjBPg1AYQgOgGgWApQglhKAvgBg");
	this.shape_7.setTransform(18.7,80.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FBAC38").s().p("ABMIJIABgNQAJhTgvggQg2hhAIhcQAUhGBHAsQAoBGgYhMQgNgfglgHQgBgogFgGQgtgYgyBEQgzBfAdAqIASgcQA2BEADAzQgRAUARAQIAAAhIgBAEQgaAGAQA+QgQAJgXgGQgvgjAdhCIARAXQAVgfghg2IgDAAQhdAFgZhhQgkh+CjhCQASANAZgoIATgFQBEhLgzghQgFgGAFgjQgogSgBAyQgBAzgQgMQhFhMBihZIACABQAQgJAEAiQAPAJAIgTQgMhTAbgGQgHAGAxAvQAcAbAAAOQApBgg+AGIgCAEQghAAgLBsIADAnQADAlAlAGQA4gRAaBIQAaBghMAsQgUASAHgpQgmgUAAA6QAAAFAnAoQAQAZgEAZQAoBLgtAVQgLAHgXgHQgHAVgKAAIgBAAgAAyiTQAPANAHARQAkgegkg4QgBAngxgCIgDAAQgXAZAegGgAA9l7QgggQAOgfQALgUAXgGQAOgdgegnQAYALAYAnQASA6gdAfQgJAHgLAAQgIAAgJgFg");
	this.shape_8.setTransform(19,64.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FB6B0D").s().p("AgVFeQgQg+AcgHIABgEIAAggQgTgRATgTQgFg0g2hEIgSAcQgdgqAzhdQAyhEAtAYQAFAGABAoQAlAHANAdQAYBNgohGQhHgrgUBEQgIBcA2BiQAvAggJBSgAAmkrIgYAAQgeAHAXgaIADAAQAxACABgnQAkA4gkAfQgHgSgPgNg");
	this.shape_9.setTransform(20.2,79.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FBAC38").s().p("ABMIbQAThIgigdQg/g9gDhIQgQiyBHghQATAHgCAZQAPANAEgUQAKgbgYgbQgOgkgoAbQgPATgFgKIAHgnQgCgNgVAkQguAVgNAxQgXBQAxgRQAQgKADALQAEB9ALAjQAbBwgLAPQgYAOAHAuQgLgVgqgLQhHg+A7hFQAagbgLg3QgNg3gjACQgLAPALAOQACAOgNgHQgegOgHgPQgqgaANhiQAnhvBTgSIAAARQBjACAEh2QgPhPgrA1QAFAWgMAEIgEgDQgSgKgEggQgIheBbgcQAfArgFg1QgSgqAXgaIAEAAQADAoAaAPQA/AygbBnQgJAbgPAHQASgngSgZQgZgHgDAoQgDAhgRAXQgXA8AfA8QAIAJAugCQBCgEAPBbQAIBCgXA7QgPAUgIgbQgKgCgVAXQgGg6gxAxQgvBTA9AFQAzAEgMAsQBhBYhqBIIgjANgAAcjoQglAYAYAdQALADAKgNQAJAHAbgHQAZgcgKgWQgPAUgTAEQgSgSgFAAQgBAAAAAAQAAAAgBAAQAAAAAAABQAAAAAAAAgAApm4QgEgZAVgGQAVgGgNgSQglgXANgrQALAeAlAZQAiAcgiAsQgRAPgMAAQgOAAgGgVg");
	this.shape_10.setTransform(19.7,61.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FB6B0D").s().p("AgRGGIgDgJQgHguAYgOQALgQgbhwQgLgigEh9QgDgLgQAJQgxASAXhOQANgxAugVQAVgkACAMIgHAoQAFAKAPgUQAogbAOAlQAYAbgKAbQgEATgPgNQACgZgTgGQhHAhAQCvQADBIA/A9QAiAegTBIgAANlIQgYgdAlgYQADgHAWAYQATgEAPgVQAKAXgZAbQgbAIgJgIQgJALgJAAIgDAAg");
	this.shape_11.setTransform(19.9,76.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FBAC38").s().p("ABNJCQAcgLgFgYQgEgQgTgXQgDgjgjgXQgPg/gYgkQgWgfgDilQALg0AqADQAqgcAOAcQAZAigBgwQgEgZgigNQgiAGgEgdQAeg8g9AxQgBgWgPAGQhCAmAGA4QAQgjAMAiQADAbAPgOQgHBNADgEQAFDjAUAvQAIA3gsgkQgFArAuAbIACABQh4gKADhCQgDhfBHgiQAViChJgeQgZgWgCApQgfAmgThAQABhjA7g4QA5g0A6AEQAdgNAEgnQAYA+ASgzQAQBJAqAYQBKA7giBjQg0A3gQgwQgBgkgyAkQgyBFAdAzIAbAQQA6AEgCAjQABAfAWAPQAiACAFBHQAAApgeAOQgWArgcAAQgIAAgJgDgAAJiYQgegZgLAZQgPgKAAghQAEhRA5gbQgMAzAlAHQAsgggkgaQgXgjAmglQgLAoA7A7IABACQAiAzguAkQgZgXgaBRQgRg/gWAogAAQjhQgMAuAigWIAgAAQAhgdgQghQgBAagfAHQgKgDgIAAQgOAAgHAIgABCmnQgGgJALgPQALghgsgcQgKgsAYgVIAAgEQAIgKAGATIgJApQgBAQAPgFIADAAIAKgNQAOgKALATQAIANgIAaQAMAHgGAYQgGAmgSAAQgLAAgOgLg");
	this.shape_12.setTransform(18,61);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FB6B0D").s().p("AgSGSQgvgbAFgqQAuAjgJg2QgUgwgGjjQgCAFAHhMQgPAOgDgbQgMgigQAkQgHg4BDgpQAOgGAEAYQA6gzgeA+QAEAdAigGQAiANAEAZQABAwgZghQgOgdgqAdQgpgEgMAyQAEClAXAgQAXAkAPA+QAjAXACAjQAUAXADARgAAAltQALgMAdAHQAegHACgZQAQAggiAdIgfAAQgMAHgGAAQgLAAAGgfg");
	this.shape_13.setTransform(19.6,75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.rf(["#FFFFFF","#FD802D"],[0.086,1],-8.1,18.1,0,-8.1,18.1,52.6).s().p("AgDgFQgegTgBgkQAZAjAcAJQAVAggcgMQAIAnAPAJIgJAJQgagcgDgmg");
	this.shape_14.setTransform(29.3,96.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.rf(["#EF7AFC","#FFEE5E","#F74900","rgba(255,128,0,0.8)"],[0,0.337,0.753,1],-5.7,108.4,0,-5.7,108.4,40.1).s().p("AgUgPQAjgrAWAVQAqApg0AeQgRhBg2BMQgdgyA1gKg");
	this.shape_15.setTransform(25.6,1.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FBAC38").s().p("ABIHgQgBgeA2ggQAOgbgqgTIgGgDIgKABQgYABAFgTQATgkg/hGIgRgxIgMh1QABhcAKgnQAZgjAQAFQAtATgmgpQgMgWAMgcIglAKQAMgJgeAOQggAOgbBSQAhgjASAMIAIAiQgrAzAfBEIAOCXQAIBUgsgdQgWAPgGAxQAcBaAgACQATAJgBAaIAAAAIgZACQAIgLgTgMQg2gBgEgJQg/gLgRhgQgHh2B+gtQAfgwgwhhQgjgBgHgXQgSgJgEATQgJAogpguIgHgIQgShAAZguQALgXAVgRQAngwB3gPQgLAkAQgGQARgsARAUQgJglATg1QgCBWAvg7IgHBHQAYAhgGAnQAYAgAIhFQBOCrhtAPQAChVhBA3QhAAsArBnQAjg/gEA1QAZAFgIAtQABA2AigHQApgKAHBKQgXAJAVAgQBBBihTAsIgZAAQgdgLgIAdgABfEmQADAoAcAdIAJgJQgPgKgIgnQAcAMgVghQgegKgZgiQABAjAeATgAAjlgQgRgNgDAcQgNAKgHgKQgwghAwg/QgCAnAigFQAZgCAAgkQAAgkAIgcQATApAWAbQAWAagIAkQgZgCgoAtQgDACgDAAQgJAAAAgagABKmxQgCAggeAWQAdAPAYgiQAFgmgQAAQgEAAgGADg");
	this.shape_16.setTransform(19.3,66.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FB6B0D").s().p("AgmGrQgggCgchbQAGgwAWgPQAuAcgKhUIgOiWQgfhDArg1IgIgiQgSgLghAiQAbhSAggOQAggNgMAIIAjgKQgMAcAMAWQAmApgtgSQgOgGgZAjQgMAngBBdIAOB1IARAwQA9BGgTAkQgFAUAYgCIAKgBIAGADQAqAUgOAaQg2AgABAeIg9AFQABgagVgIgAANmTQAegVACghQAbgNgGAwQgQAYgUAAQgIAAgJgFg");
	this.shape_17.setTransform(22.2,68.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.rf(["#EF7AFC","#FFEE5E","#F74900","rgba(255,128,0,0.8)"],[0,0.337,0.753,1],-11.4,113.1,0,-11.4,113.1,40.1).s().p("AgPAKQgIgPAXgSQgIAhAaAAQgKAOgIAAQgHAAgIgOg");
	this.shape_18.setTransform(29.6,-3.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FBAC38").s().p("AAxH5QgRhEAkADQA6gXhBhMQAMgVgjgUIgchsQgKhdgMBdIAABQQgPAugmglQgVgbgLA9QAGBOBKBDQAUAVAAAVIgkgCQgPgogbABQhpgfgCgvQggigBuhAQA/BKAMiKQgVgCADguQgKg7glAMIgFgGQgbgagGAqQgnAEgNg1QgKimCfglQAFAuA8gVIATgQQAhALARhHQAMATAFAjQAlAVgMBKQA0gGgGBpQgOA+gjAKQAGhkgcAjQgdAigBgKQg9gegUBSQgGBGAUAPQAOAHAEAYQgIhJAwgUQgXBSAjA4QBHAuACBDQgNAkAYANQAvBYhXASQgsgGgaAtgAAzD5QAGAbAqAjQAUgcgvg1QgSgXgDgwQgOAoAOAygAghhiIAAARIALCCQAOgugBhAIAJgIIAAgmQAvgzAIAzQAZAhgOg/IARghQgCgQgkAVQgMgOgNADQhZAFAIBYQAYgkAGAAQAFAAgHAVgAA3mXQgYAGgcAfIgFgXQgIgzA7AOQAXgBgXgnQgRgoA4AGQAfADgCAqQAyAAggA/QgGAbg2AXQAZg/gtACgABNneIAHAuQADAmAWgHQAXgOgegVIAAgQQgEgbgNAAQgEAAgEABg");
	this.shape_19.setTransform(19,64.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FB6B0D").s().p("AAAFTQAAgWgUgVQhKhCgGhPQALg9AVAcQAmAlAPgvIAAhQQAMhbAKBbIAcBsQAjAVgMAVQBBBMg6AWQgkgCARBEgAAwBVQgOgyAOglQADAuASAXQAvA1gUAcQgqgkgGgbgAgkj0IAAgRQAPgygrBAQgIhYBZgEQANgEAMAOQAkgVACARIgRAgQAOBAgZghQgIg0gtA0IAAAmIgLAIQABBCgOAtg");
	this.shape_20.setTransform(19.3,80.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.rf(["#EF7AFC","#FFEE5E","#F74900","rgba(255,128,0,0.8)"],[0,0.337,0.753,1],-5.5,63.9,0,-5.5,63.9,40.1).s().p("AglCoIATgKQgRARgJAwgAhEjHIAagXQgRAiAaACQgJAFgHAAQgOAAgFgSgAAwjIQAGABAPgEIgIAPg");
	this.shape_21.setTransform(25.7,46.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FBAC38").s().p("AA1IBQgQgfAPgbQA/glgPhAQgDgRgOgWQglgwADgPQABgTgLAPQgRAqgWAKQhHAGATg+QgzAQAPAtQATBMAsAfQASASAMAfQAPAegIAWIgTAAQgIgcgZgbQgYgWglAWQgsARgDg2QglgPgJhvQAPhuBLgnQAqA0AmglQAag5goAcQAKgYgDghQgQhOgogHQgUg5gWBFQhAgwAchpQA5h1BWADQgHASAKAMQAcAiAWhEQgGAmAegeQgDAVACALQARAUAGhBQgEg6ASgCQARgEgFAVQggAeAeAkQB0BehQBvQgQASAGg3QgKgHgQAYQgfBDgIg4IgCgFQgOgTgSAdQgiANgCBJQAEA6AXAhQALAJAOgRQASg+AUgIQgWBZAgAjQBtBvgaAsQAsBMg5AjQgpALgRAaQgTATgEASgAB/GPQAeghgQgwQgbg5gWgJQAxBTgOBAgAAwDKIAqAoQgFgjgYghIgEguQgQAqAHAggAgdhrQgZA/AaApQgFhCAageQAJgSgHAAQgGAAgSAKgAgxi2QgxAyAgAZIAVgmQAUgOAFAOQAEAdAiglQA0gVACAyQAjglgegsQgDgQgdAnQgdgIgWAAQgYAAgTAIgABJmPQASgdgNgGQgRgngKAXQgHAMgLADQgfgNAWgfIAXgSQgBgjAuAtQAWAAgFAqQAPAsgWAPQgRAGgJAAQgPAAAMgTg");
	this.shape_22.setTransform(19.5,64);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FB6B0D").s().p("AgNFqQAIgXgPgeQgOgegSgSQgsgfgThNQgPgtAzgPQgTA9BHgFQAYgLAPgqQALgOgBASQgDAPAlAwQAOAXADARQAPBAg/AlQgPAbAQAfgABBBlQAWAIAbA6QAQAvgeAiQAOhAgxhTgAAVAyQgHggAQgnIAEArQAYAhAFAkgAg4kCQApgZgTAhQgaAdAFBDQgagpAZg/gAhMlOQAlgPA5APQAdgmADAPQAeAsgjAlQgCgygyAVQgkAlgEgdQgFgOgUAOIgVAmQgggZAxgyg");
	this.shape_23.setTransform(22.2,79.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FBAC38").s().p("ABFIUQAAhSAbASQAWgXgKg9QgJgggHgLQg3g1AHheQgUAQgCAiQgfBIgVhGQhEATAThNQhLA4BUBzQBmBbgCBSIgegBQgQgmgagTQgpgZgMARQgoAUgWhEQgHhYgggJQgSgYAOhGQAYh2BPgeQgFAjAKAOQAyA4AahHQgngxABgXQgeg6AqhEQANgrguATQgfAaAMAvQhggVAliMQAuh+B+AAQgdA8ApgRQBDgWAKhDQAZAlgfAlQgbAvA0gOQBYACgJCFQgQA2glAXQgNhZg4BAQAMhFgvAoQhEBVAHBpQAdBeAgg8QgLh0AxgCQgNBjAjA8QBZBUAHA6IAAADQANBkgwAQQARA7gwABQgLgGgeA4gAB1EhQAYAXAHAkQANgngkgjIgIgCQgJAAAJARgABLDbQAmAbgUgpQgXgegFgjQgSAjAcAsgAAAhyQgsBHANAnQAOg8AagjQAUgegHAAQgFAAgRAPgAgQinQAIBEAIg5QAegvAdAcQA8ApgvhAQgOgNAIgpIgiAfQgmAWANgqQglAAgkA6QgSA2AigbQAKgSAKAAQAHAAAHAHgABOnMQgPgggfA0QgigjAsgsQAPgSANAJQAJAKgEAQQAfALgDAKQAKAogVAEg");
	this.shape_24.setTransform(20.8,61);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FB6B0D").s().p("AAMGIQAChShmhbQhUhyBLg5QgTBNBEgSQAVBFAfhIQACghAUgQQgHBdA3A1QAHAMAJAfQAKA9gWAXQgbgSAABSgABjCVQgMgWAUAHQAkAjgNAnQgHgkgYgXgAA5BPQgcgrASgkQAFAjAXAeQAMAZgJAAQgGAAgPgLgAgRj+QApgjgfAyQgcAjgOA9QgNgoAthHgAgikyQgSgTgQAdQgiAbASg1QAkg7AnAAQgPAqAmgVIAiggQgIApAOANQAvBAg8gpQgdgbgcAuQgFAagEAAQgFAAgEgkg");
	this.shape_25.setTransform(22.6,75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},2).to({state:[{t:this.shape_7},{t:this.shape_6}]},2).to({state:[{t:this.shape_9},{t:this.shape_8}]},2).to({state:[{t:this.shape_11},{t:this.shape_10}]},2).to({state:[{t:this.shape_13},{t:this.shape_12}]},2).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},2).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]},2).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},2).to({state:[{t:this.shape_25},{t:this.shape_24}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.7,115.3);


(lib.flag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ABABAB").s().p("AiMg/IAGgJIETCIIgEAJg");
	this.shape.setTransform(-4.5,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhWBOIAagzIA2AcIgaAzgAgGA3IAghAIA9AfIgeBBgAgGA3gAgbgkIAihFIA2AbIgjBFg");
	this.shape_1.setTransform(6.5,-2.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag/BMIAbg0IA/AhIgZA1gAhbgCIAhhBIA3AcIAhhGIA+AfIgjBHIg8ggIghA/g");
	this.shape_2.setTransform(9.5,0.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-12.8,37.3,25.8);


(lib.FinishLIne = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D0D0D").s().p("Ag0AVIAAgTIAuAPIAAgmIgugQIAAgUIBpAlIAAATIgtgPIAAAnIAtAPIAAAUg");
	this.shape.setTransform(2.4,32.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D0D0D").s().p("AAiAvQAHgRAAgOQAAgSgNgEQgGgCgDACQgDADgEAIIgEAKIgDAIQgGAUgUgHQgQgFgJgPQgJgQAAgSQAAgNAGgVIATAHQgJATAAAPQAAAKAEAHQAEAHAHADQAFACAEgDQADgDAGgMIADgHQADgNAHgFQAHgFALAEQAPAFAIANQAIAMAAARQAAAOgFASg");
	this.shape_1.setTransform(2.4,20.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D0D0D").s().p("AAmAyIAAgcIhLgYIAAAaIgPgFIAAhKIAPAGIAAAcIBLAYIAAgaIAPAFIAABKg");
	this.shape_2.setTransform(2.4,8.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D0D0D").s().p("Ag0AVIAAgRIBGgUIAEACIAAgDIgEABIhGgYIAAgRIBqAlIAAASIhGATIgFgCIAAADIAFgBIBGAYIAAARgAgVAPIAFACIgFABgAgQARgAASgQIAEgBIAAADg");
	this.shape_3.setTransform(2.4,-3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D0D0D").s().p("AAmAyIAAgcIhLgYIAAAaIgPgFIAAhKIAPAGIAAAcIBLAYIAAgaIAPAFIAABKg");
	this.shape_4.setTransform(2.4,-14.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D0D0D").s().p("AAmAzIAAg4IghgLIAAAwIgNgFIAAgwIgsgPIAAgUIBpAlIAABMg");
	this.shape_5.setTransform(2.4,-25.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BEBFBF").s().p("AhlFgIAAgKIDLA2IAAAKgAhlmKIAAgKIDLA1IAAALg");
	this.shape_6.setTransform(0,2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5E5E5").s().p("AhlFWIAAgIIDLA1IAAAIgAhlmDIAAgHIDLA1IAAAHg");
	this.shape_7.setTransform(0,2.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F8F8F8").s().p("AhJFWIAArRICTAmIAALRg");
	this.shape_8.setTransform(2.8,3.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#262626").s().p("AgTHBIAAhJIATAAIAABJgAAAF4IAAhGIAUAAIAABGgAgTEyIAAhGIATAAIAAhGIAUAAIAABGIgUAAIAABGgAgTCmIAAhGIATAAIAABGgAAABgIAAhGIgTAAIAAhEIATAAIAABEIAUAAIAABGgAAABggAAAgqIAAhGIgTAAIAAhGIATAAIAABGIAUAAIAABGgAAAgqgAAAi2IAAhGIAUAAIAABGgAAAi2gAgTj8IAAhGIATAAIAABGgAAAlCIAAhGIAUAAIAABGgAgTmIIAAg4IATAAIAAA4g");
	this.shape_9.setTransform(-10.4,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D6D6D6").s().p("AAAHBIAAhJIgTAAIAAhGIATAAIAAhGIAUAAIAABGIgUAAIAABGIAUAAIAABJgAgTDsIAAhGIATAAIAABGgAAACmIAAhGIAUAAIAABGgAAACmgAgTBgIAAhGIATAAIAABGgAAAAaIAAhEIAUAAIAABEgAgTgqIAAhGIATAAIAABGgAAAhwIAAhGIgTAAIAAhGIATAAIAABGIAUAAIAABGgAAAj8IAAhGIgTAAIAAhGIATAAIAAg4IAUAAIAAA4IgUAAIAABGIAUAAIAABGg");
	this.shape_10.setTransform(-10.4,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.4,-44.9,24.8,90);


(lib.car_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car();
	this.instance.setTransform(18.7,-9.4,0.21,0.21,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.3,-9.4,37,18.9);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F204B").s().p("AttE7QhkgBAAhjIAAmtQAAhjBkgBIbbAAQBkABAABjIAAGtQAABjhkABg");
	this.shape.setTransform(214.5,31.5);

	this.ikNode_1 = new lib.Symbol2();
	this.ikNode_1.setTransform(512.6,32.3,1,1,0,0,0,512.6,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(103.3,0,819.4,63);


(lib.mc_RedcarAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3tL/IAA39MAvbAAAIAAX9g");
	mask.setTransform(-10.4,12);

	// Layer 3
	this.instance = new lib.mc_redCar();
	this.instance.setTransform(233,8.9,4.655,4.668,0,0,180,18.8,9.6);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:18.7,x:43.4},21).wait(17));

	// Layer 4
	this.instance_1 = new lib.mc_hand("synched",0);
	this.instance_1.setTransform(-100.2,2.2,1,1,0,0,0,14.7,5.2);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({regX:1.7,regY:6.2,x:-113.2,y:2.7},0).to({rotation:26.5,x:-111.6,y:1.4},4).to({regY:6.1,rotation:-32.5,x:-112.5,y:2.1},4).to({regY:6.2,rotation:0,x:-113.2,y:2.7},4).to({rotation:26.5,x:-111.6,y:1.4},4).to({rotation:0,x:-113.2,y:2.7},4).wait(1));

	// Layer 5
	this.instance_2 = new lib.flag();
	this.instance_2.setTransform(-80.7,0);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({rotation:13.7,x:-81,y:10.5},4).to({rotation:-32.5,x:-86.5,y:-17.5},4).to({rotation:0.9,x:-80.7,y:-0.2},4).to({rotation:13.7,x:-81,y:10.5},4).to({rotation:0,x:-80.7,y:0},4).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7BE93").s().p("AgQAPQgDgFAAgDIAAgIIABAAQABgIAHgFQAIgEAJgBQAAAAABABQAAAAABABQAAAAAAABQAAABAAABIgIANQAMgOACABQAJAKgFAHQgEAJgIAEQgFAEgEAAQgGAAgIgFg");
	this.shape.setTransform(-96.1,36.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8897B4").s().p("AApBDQgfgEgRgOQgTgPgTgaQgUgfgGgkQAAgDAEgEQAFgDAFABQASAEAQAoQALAZAKANQAMAQAVAEQAbAGAKAIIAAAKQAAAEADAFQgCACgHAAQgIAAgNgCg");
	this.shape_1.setTransform(-105,31.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2218").s().p("AgMA/QgtgGgRgmQgBgDAAgMIAAgOQAXg2AzABQAQABATAHQAOAGAHAHQAUARABAZQABAZgSARQgbAWggAAIgMgBg");
	this.shape_2.setTransform(-109.9,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8897B4").s().p("AggB0QgagjgHg/QAQAmAuAGQAoAEAegZIgBAFQgCATgNAmQgSAngcABIgBAAQgQAAgUgbgAgohrQATgiASgBQAZAAAVAlIAIAVQAJAXACAMIACAGQgIgHgOgGQgTgHgSgBQgxgBgWA2QADg3AXgpg");
	this.shape_3.setTransform(-110.8,14.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383431").s().p("AgfBnQANglACgUQA5AcgNATQgFAIgRADIgPABQgKAAgMgCgAgehUIgJgUQBcACgPAYQgFAJgUAIQgPAJgRAEQgCgNgJgXg");
	this.shape_4.setTransform(-102.4,14.5);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(38));

	// Layer 7
	this.instance_3 = new lib.road();
	this.instance_3.setTransform(-162.5,-65.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-162.5,-65.2,304,154);


(lib.mc_redCarcras = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.mc_fire01_01("synched",0,false);
	this.instance.setTransform(27.8,6.8,0.26,0.158,-105,0,0,17.4,57.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).wait(21));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAZAbIg0ARIg/gUIA/ANIAvgVIBBAdIgHAIgAATAIIARgCIhGgKIB3ACIgjAEIAOAJgAAfgpIg0ARIg/gUIA/ANIAvgVIBBAdIgHAIg");
	this.shape.setTransform(28.7,9.3);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(6).to({_off:false},0).wait(22));

	// Layer 1
	this.instance_1 = new lib.car_1();
	this.instance_1.setTransform(18.9,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:0.83,x:22},6).wait(22));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0.2,37,18.9);


(lib.mc_perplecarAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3tL/IAA39MAvbAAAIAAX9g");
	mask.setTransform(-2.4,24);

	// Layer 4
	this.instance = new lib.mc_perple();
	this.instance.setTransform(242.5,20.9,3.525,3.524,180,0,0,24.9,12.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:61.8},21).wait(17));

	// Layer 6
	this.instance_1 = new lib.mc_hand("synched",0);
	this.instance_1.setTransform(-92.2,14.2,1,1,0,0,0,14.7,5.2);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({regX:1.7,regY:6.2,x:-105.2,y:14.7},0).to({rotation:26.5,x:-103.6,y:13.4},4).to({regY:6.1,rotation:-32.5,x:-104.5,y:14.1},4).to({regY:6.2,rotation:0,x:-105.2,y:14.7},4).to({rotation:26.5,x:-103.6,y:13.4},4).to({rotation:0,x:-105.2,y:14.7},4).wait(1));

	// Layer 7
	this.instance_2 = new lib.flag();
	this.instance_2.setTransform(-72.7,12);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({rotation:13.7,x:-73,y:22.5},4).to({rotation:-32.5,x:-78.5,y:-5.5},4).to({rotation:0.9,x:-72.7,y:11.8},4).to({rotation:13.7,x:-73,y:22.5},4).to({rotation:0,x:-72.7,y:12},4).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F7BE93").s().p("AgQAPQgDgFAAgDIAAgIIABAAQABgIAHgFQAIgEAJgBQAAAAABABQAAAAABABQAAAAAAABQAAABAAABIgIANQAMgOACABQAJAKgFAHQgEAJgIAEQgFAEgEAAQgGAAgIgFg");
	this.shape.setTransform(-88.1,48.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8897B4").s().p("AApBDQgfgEgRgOQgUgPgSgaQgUgfgGgkQAAgDAEgEQAFgDAFABQASAEAQAoQALAZALANQALAQAVAEQAbAGALAIIgBAKQAAAEADAFQgCACgHAAQgIAAgNgCg");
	this.shape_1.setTransform(-97,43.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#2C2218").s().p("AgMA/QgtgGgRgmQgBgDAAgMIAAgOQAXg2AzABQAQABATAHQAOAGAHAHQAUARABAZQABAZgSARQgbAWggAAIgMgBg");
	this.shape_2.setTransform(-101.9,26.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8897B4").s().p("AggB0QgagjgHg/QAQAmAuAGQAoAEAegZIgBAFQgCATgNAmQgSAngcABIgBAAQgQAAgUgbgAgohrQATgiASgBQAZAAAVAlIAIAVQAJAXACAMIACAGQgIgHgOgGQgTgHgSgBQgxgBgWA2QADg3AXgpg");
	this.shape_3.setTransform(-102.8,26.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#383431").s().p("AgfBnQANglACgUQA5AcgNATQgFAIgRADIgPABQgKAAgMgCgAgehUIgJgUQBcACgPAYQgFAJgUAIQgPAJgRAEQgCgNgJgXg");
	this.shape_4.setTransform(-94.4,26.5);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(38));

	// Layer 2
	this.instance_3 = new lib.road1();
	this.instance_3.setTransform(-154.9,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-154.9,-53.5,304,154);


(lib.mc_patch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.setTransform(206.1,23,1,1,0,0,0,199.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(512.6,31.5,1,1,0,0,0,512.6,31.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(77.3,-26,875,119);


(lib.Bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhP/A/IMAAAh+PMCf+AAAMAAAB+Pg");
	mask.setTransform(8.7,-56.7);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAdAAIAAALg");
	this.shape.setTransform(279.4,-341.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAdAAIAAALg");
	this.shape_1.setTransform(279.4,-360.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAdAAIAAALg");
	this.shape_2.setTransform(279.4,-379.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAdAAIAAALg");
	this.shape_3.setTransform(279.4,-399.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgOAGIAAgLIAdAAIAAALg");
	this.shape_4.setTransform(279.4,-418.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,2,1).p("ADoAAInPAA");
	this.shape_5.setTransform(252.5,-380);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#959595").s().p("AC4AJIluAAIgEAAIAAAAIACAAIAAgRIFzAAIAAARg");
	this.shape_6.setTransform(252.1,-340.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#133412").s().p("AjiALIAOgGIAAgPIAgAAIAAAAIADAAIFuAAIADAAIAAABIAiAAIABAAIAAAUg");
	this.shape_7.setTransform(251.6,-338.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ADLGYIgBAAIgiAAIAAgBIAAgTIlzAAIAAsIIFzAAIAAgSIAAgBIAiAAIACAAIAAMvg");
	this.shape_8.setTransform(254,-380);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8DAC8A").s().p("AgNGuIAAgWIABAAIAAsvIgCAAIAAgVIAAgBIAdAAIAAA2IAAIAIAAElg");
	this.shape_9.setTransform(275.8,-379.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#79807D").s().p("AAOGXIgdAAIAAstIAGAAIACAAIAXAAIAAASIAAMIIAAATg");
	this.shape_10.setTransform(231.9,-380);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BAB9BA").s().p("Ai5AIIAAgQIFzAAIAAAQg");
	this.shape_11.setTransform(252.2,-419.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#0F2C0C").s().p("AgMGsIAAtWIAYAAIAAAQIAAABIAAMtIAAARIgMAHg");
	this.shape_12.setTransform(229,-379.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#163217").s().p("ADGAKIlyAAIgZAAIgCAAIgGAAIAAgPIgaAAIAAgEIHPAAIAAATg");
	this.shape_13.setTransform(250.9,-421.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFAPIAAgcIALAAIAAAcg");
	this.shape_14.setTransform(133.6,-378.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFAPIAAgcIALAAIAAAcg");
	this.shape_15.setTransform(114.4,-378.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAPIAAgcIALAAIAAAcg");
	this.shape_16.setTransform(95.3,-378.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAPIAAgcIALAAIAAAcg");
	this.shape_17.setTransform(76.1,-378.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFAPIAAgcIALAAIAAAcg");
	this.shape_18.setTransform(56.9,-378.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,2,1).p("AAAjFIAAGL");
	this.shape_19.setTransform(95.3,-401.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#0F2C0C").s().p("AmrALIAAgVIARAAIABAAIMtAAIASAAIAFALIAAAKg");
	this.shape_20.setTransform(95.7,-381.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#79807D").s().p("AmWANIAAgEIAAgCIAAgUIASAAIMJAAIASAAIAAABIAAAZg");
	this.shape_21.setTransform(95.4,-383.6);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#959595").s().p("AAICfIAAgBIgQAAIAAk8IARAAIAAADIAAE4IAAACg");
	this.shape_22.setTransform(135.2,-400.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#133412").s().p("AAFC1IgPAAIAAgbIAAAAIAAgCIAAk4IAAgDIABAAIAAgdIAAgBIAUAAIAAGCg");
	this.shape_23.setTransform(137.3,-400.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8DAC8A").s().p("AmtANIAAAAIAAgZIA2AAIH/AAIEmAAIAAAYIgXAAIAAgBIsuAAIAAACg");
	this.shape_24.setTransform(95.4,-421);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#163217").s().p("AgJDGIAAmLIATAAIAAAdIAAE8IAAAVIAAACIAAAFIgPAAIAAAWg");
	this.shape_25.setTransform(53.5,-399.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#BAB9BA").s().p("AgHCeIAAk7IAQAAIAAE7g");
	this.shape_26.setTransform(55.5,-400.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AmECuIAAk8IgSAAIgBAAIAAgdIAAgCIMvAAIAAABIAAABIAAAdIgBAAIgTAAIAAE8g");
	this.shape_27.setTransform(95.4,-402.4);

	this.instance = new lib.Tree("synched",0);
	this.instance.setTransform(484.7,-294.6,0.332,0.332,-174.5);

	this.instance_1 = new lib.Tree("synched",0);
	this.instance_1.setTransform(489.1,-223.6,0.239,0.239,41.9);

	this.instance_2 = new lib.Tree("synched",0);
	this.instance_2.setTransform(437.9,-263.5,0.239,0.239,-40.8);

	this.instance_3 = new lib.Tree("synched",0);
	this.instance_3.setTransform(382.5,-281.5,0.398,0.398,0,87.8,-92.2);

	this.instance_4 = new lib.Tree("synched",0);
	this.instance_4.setTransform(362.8,41,0.238,0.238,30.9);

	this.instance_5 = new lib.Tree("synched",0);
	this.instance_5.setTransform(266.4,63.5,0.378,0.378,2.7);

	this.instance_6 = new lib.Tree("synched",0);
	this.instance_6.setTransform(336.3,85.2,0.322,0.322,165.5);

	this.instance_7 = new lib.Tree("synched",0);
	this.instance_7.setTransform(388.9,88.9,0.378,0.378,-23.1);

	this.instance_8 = new lib.Tree("synched",0);
	this.instance_8.setTransform(474.4,91.7,0.371,0.371,169.4);

	this.instance_9 = new lib.Tree("synched",0);
	this.instance_9.setTransform(485.3,25.5,0.216,0.216,-80.4);

	this.instance_10 = new lib.Tree("synched",0);
	this.instance_10.setTransform(85.8,84,0.378,0.378,2.7);

	this.instance_11 = new lib.Tree("synched",0);
	this.instance_11.setTransform(-27.5,87.5,0.315,0.315,86.4);

	this.instance_12 = new lib.Tree("synched",0);
	this.instance_12.setTransform(25,62.5,0.378,0.378,-80.7);

	this.instance_13 = new lib.Tree("synched",0);
	this.instance_13.setTransform(-395.6,-126.7,0.397,0.353,3.9);

	this.instance_14 = new lib.Tree("synched",0);
	this.instance_14.setTransform(-330.8,-140.5,0.332,0.332,-87.8);

	this.instance_15 = new lib.Tree("synched",0);
	this.instance_15.setTransform(-341.6,-89.8,0.397,0.353,0,16.7,-163.3);

	this.instance_16 = new lib.Tree("synched",0);
	this.instance_16.setTransform(-254.9,-92.2,0.401,0.356,0,-11.9,168.1);

	this.instance_17 = new lib.Tree("synched",0);
	this.instance_17.setTransform(-157.3,-87.6,0.332,0.332,173.3);

	this.instance_18 = new lib.FinishLIne("synched",0);
	this.instance_18.setTransform(152.7,189.8,1.3,1.3);

	this.instance_19 = new lib.Obj("synched",0);
	this.instance_19.setTransform(-225.7,-5.5,1.3,1.3,0,0,180);

	this.instance_20 = new lib.Obj("synched",0);
	this.instance_20.setTransform(244.5,-245.8,1.3,1.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#E18F59").s().p("AAFAIIgFgEQgCgDgEAAQgCgGAEgFIAGALIAGAHIgBACIgBABQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_28.setTransform(-426.7,61.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AgFAiQgIgCgGgFIgEgEQgDgEgCgEQgEgIABgHQAAgEACgHQACgGAEgFIADgDQAJgJALgBQAOAAAHACQAFACADAEQAEAGgCAJIgCALQAAAEACAFQAEALgHAJIAAAAIgEADQgGAEgJAAIgGABQgDAAgFgCg");
	this.shape_29.setTransform(-433.1,60.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_30.setTransform(-431.7,52.7);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#6BD3D2").s().p("AACBSIgCgCQgIgEgEgGIgFgJQgHgNgCgOIgCgMIADAEQAGAGAIACQAIACAGgBQAJgBAHgEIADgCIABgBQAEgCACgDIgBAHIgEATQgIAbgLAHIgBAAIgCAAgAAYgcQgDgDgFgCQgHgDgOABQgMAAgJAJQABgHACgFQAEgRAKgNQADgEAGgEQAFgFACAAIABABIABAAQAFACAEAJQAJAQACAdIgFgEg");
	this.shape_31.setTransform(-432.6,60.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#5BB1B0").s().p("AgJAwIAEgTIAKgKIALgJQADABAFACIAEAEQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAADgDAGQgGALgKANQgOAUgPAGQgFACgEAAQALgHAIgbgAANgIQgEgBgEgEIgEgDIgFgIQgCgdgJgQQgEgJgFgCIAAgBQADAAAEADQANAGAOAVIANASQAGAKAAAFQABAHgGADIgGABQgDAAgCgBg");
	this.shape_32.setTransform(-429.1,60.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#372511").s().p("AAABMQgHgFgGgPQgIgUAAghQAAggAIgYQAGgQAHgFQAEgFAHADQAFACAGAIQgLANgEARQgCAFAAAHIgDAEQgCAFgCAGQgCAGAAADQgBAJAEAHQABAFACADIACAMQADAOAGANIAFAJQgEAEgDABIgFABQgEAAgCgCg");
	this.shape_33.setTransform(-435.8,60.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EEC09E").s().p("AghAJQgCgGAAgEIACgLQACgJgEgGIAGAEIAGAIQAEAGAAAHIADABIADABQADACgJABIgDAMQgDAEgEAEQgDADgEACQAHgJgEgKgAASASIgKgIQgEgDAKANIAAACIgBAAQgDACgEgFIgGgIIgGgLIgFgHQACABADAAIAGgBQAFgDgBgHIABABIARAGQAJAEADAEIACACIAAABIgMgEQALAGABADIAAADIgCAAIgFgEIgEgCIgCgBIABABIAHAGQAKAJgIgCIgKgGIgHgFQAMAPABADIgBABQgCAAgIgGg");
	this.shape_34.setTransform(-426.5,60.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#E18F59").s().p("AAFAIIgFgEQgCgDgEAAQgCgGAEgFIAGALIAGAIIgBABIgBABQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_35.setTransform(-413.5,-28.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#372511").s().p("AAABMQgHgFgGgPQgIgUAAghQAAggAIgYQAGgQAHgFQAEgFAHADQAFACAGAIQgLANgEARQgCAFAAAIIgDADQgCAFgCAGQgCAGAAAEQgBAIAEAHQABAFACAEIACALQADAOAGANIAFAJQgEAEgDABIgFABQgEAAgCgCg");
	this.shape_36.setTransform(-422.6,-29.5);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#EEC09E").s().p("AghAIQgCgEAAgFIACgLQACgJgEgGIAGAEIAGAHQAEAHAAAHIADABQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQADACgJABQgBAHgCAFIgHAIIgHAFQAHgJgEgLgAASASIgKgIQgEgDAKAMIAAACIgBABQgDACgEgFIgGgIIgGgLIgFgHIAFABIAGgBQAFgDgBgHIABAAIARAHQAJAEAEAEIABACIAAAAIgMgDQALAFABAEIAAACIgBABIgGgEIgEgDIgCAAIABABIAHAFQAKAKgIgBIgKgHIgHgEQAMAOABADIgBABQgCAAgIgGg");
	this.shape_37.setTransform(-413.3,-29.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgFAiQgIgCgGgFIgEgEQgDgEgCgEQgEgIABgHQAAgEACgHQACgGAEgFIADgDQAJgJALgBQAOAAAHACQAFACADAEQAEAGgCAJIgCALQAAAFACAEQAEALgHAJIAAAAIgDADQgHAEgJAAIgHABQgDAAgEgCg");
	this.shape_38.setTransform(-419.9,-29.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#4A7328").s().p("AgJAwIAEgTIAKgKIAKgJQAEABAEACIAFAEQAAABABAAQAAABAAAAQABABAAAAQAAAAgBABIgEAJQgGALgJANQgOAUgQAGQgFACgEAAQALgHAJgbgAAMgIIgIgEIgEgEIgEgIQgDgdgJgQQgEgIgFgDIAAgBQADAAAFADQAMAGAPAVIANASQAGAKAAAFQABAHgHADIgGABIgFgBg");
	this.shape_39.setTransform(-415.8,-29.3);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_40.setTransform(-418.4,-37.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#609634").s().p("AACBSIgCgCQgIgEgEgGIgFgJQgHgNgCgOIgCgLIAEADQAFAGAIACQAIACAGgBQAKgBAGgEIADgCIABgBIAGgEIgBAGIgEATQgIAbgLAHIgBAAIgCAAgAAYgbQgDgEgFgCQgHgDgOABQgMAAgJAKQABgIACgFQAEgRAKgNQADgEAGgEQAFgFACAAIABABIABAAQAFADAEAIQAJAQACAdIgFgDg");
	this.shape_41.setTransform(-419.3,-29.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_42.setTransform(-404.4,124);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgFACgEQAEgLgGgJQAEACACADQAEADADAFIADAMQAKABgEABIgDACIgCAAQgBAIgEAHIgGAHIgGAEQAEgGgCgJgAAAAJIgGgCQgDAAgCACIAFgIIAGgLIAGgHQAEgGADABIABABIAAADQgKAMAEgDIAKgIQALgJAAAEQgBADgLAOIAGgEIAKgGQAIgCgLAKIgGAFIgBABIACgBIAEgCIAGgEIABABIAAABQAAAFgMAEIAMgDIAAAAIgBADQgFAEgIAEIgQAHIgCAAQABgHgFgCg");
	this.shape_43.setTransform(-399.2,115.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#E18F59").s().p("AgGAAIAGgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABABIABACIgGAHIgGALQgEgFACgGg");
	this.shape_44.setTransform(-399.4,114.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#5BB1B0").s().p("AgZBRQAGgCAEgJQAJgQACgdIAFgIIAEgDQAEgEADgBQACgBAEAAIAGABQAGADgBAHQAAAFgGAKIgNASQgOAVgNAGQgEADgEAAgAAFgSIgKgKQgBgKgDgJQgIgbgLgHQADAAAGACQAPAGAOAUQAKANAFALQAEAGAAADQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgEAEIgIADIgLgJg");
	this.shape_45.setTransform(-401.8,115.8);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AAAAkQgLgBgJgJIgDgDIgHgLIgBgMQgBgGAEgIIAFgIIAEgEQAGgFAIgCQAFgDAJACQAJAAAGAEIAEADIAAAAQAHAJgEALQgCAFAAAEIACALQACAJgEAGQgDAEgFACQgGACgMAAIgDAAg");
	this.shape_46.setTransform(-405.8,115.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#372511").s().p("AAABLQgHgFgFgQQgJgYABggQAAghAIgUQAFgPAHgFQAEgEAHADQAEABAEAEIgFAJQgHANgDAOIgCAMIgDAIQgEAHABAIIACAKIAEALIADAEQABAHACAFQAEARAKANQgFAIgGACIgFABQgEAAgCgDg");
	this.shape_47.setTransform(-408.6,116);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#6BD3D2").s().p("AAABNQgGgEgDgEQgKgNgEgRQgCgFAAgHQAJAJALAAQAOABAHgDQAFgCACgDIAGgEQgCAdgJAQQgEAJgFACIgBAAIAAABIgBAAQgCAAgFgFgAAXgaIgBgBIgDgCQgGgEgKgBQgGgBgIACQgHACgGAGIgFAEIADgMQADgOAGgNIAFgJQAEgGAHgEIADgCIADAAQALAHAIAbQADAJABAKIABAHQgCgDgEgCg");
	this.shape_48.setTransform(-405.3,115.8);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_49.setTransform(-404.4,197.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#E18F59").s().p("AgGAAIAGgDIAFgEQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIABABIABABIgGAIIgGALQgEgFACgGg");
	this.shape_50.setTransform(-399.4,188.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgFACgEQAEgLgGgJIAGAFQAEAEADAEQACAFABAHQAKABgEABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgCAAQgBAIgEAHQgCAEgEADIgGAEQAEgGgCgJgAAAAIIgGgBQgDAAgCABIAFgHIAGgLIAGgIQAEgFADABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAAACQgKAMAEgDIAKgIQALgJAAAEQgBADgLAOIAGgEIAKgHQAIgBgLAKIgGAFIgBABIACAAQAAgBAEgCIAGgEIABABIAAACQAAAEgMAFIAMgEIAAAAIgBADQgFAEgIAEIgQAGIgCABQABgHgFgDg");
	this.shape_51.setTransform(-399.2,189.5);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4A7328").s().p("AgZBRQAGgDAEgIQAJgQACgdQAEgDABgEIAEgEIAHgFQACgCAEABIAGABQAGADgBAGQAAAGgGAKIgNASQgOAVgNAGQgEADgEgBgAAFgSIgKgKQgBgKgDgJQgIgbgLgGQADAAAGABQAPAGAOAUQAKAOAFALQAEAEAAAFQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAIgEAEIgIAEIgLgJg");
	this.shape_52.setTransform(-401.8,189.5);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AAAAkQgLgBgJgJIgDgDIgHgMIgBgLQgBgHAEgHIAFgIIAEgEQAGgFAIgCQAFgDAJABQAJABAGAEIAEADIAAAAQAHAJgEALQgCAEAAAFIACALQACAJgEAGQgDAEgFACQgGACgMAAIgDAAg");
	this.shape_53.setTransform(-405.8,189.5);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#372511").s().p("AAABLQgHgFgFgPQgJgZABggQAAggAIgUQAFgPAHgGQAEgEAHADQAEABAEAEIgFAJQgHANgDAPIgCALIgDAIQgEAHABAIIACAKIAEAMIADADQABAHACAFQAEASAKANQgFAHgGACIgFABQgEAAgCgDg");
	this.shape_54.setTransform(-408.6,189.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#609634").s().p("AAABNIgJgHQgKgNgEgSQgCgFAAgHQAJAJALABQAOAAAHgCQAFgCACgEIAGgEQgCAdgJAQQgEAJgFACIgBAAIAAABIgBAAQgDAAgEgFgAAXgaIgBAAIgDgDQgGgEgKgBQgGgBgIADQgHACgGAFIgFAEIADgLQADgPAGgNIAFgJQAEgGAHgDIADgCQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAABQALAGAIAbQADAJABAKIABAHIgGgFg");
	this.shape_55.setTransform(-405.3,189.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#372511").s().p("AAABMQgHgFgFgRQgJgYAAgfQABghAIgVQAFgOAHgFQAEgFAIADQADACAEAEIgGAJQgGANgDAOIgCALQgCADgBAFQgDAIAAAHQAAAEACAGQACAHACAFIADACIACANQAFARAJANQgEAHgFADIgGABQgEAAgCgCg");
	this.shape_56.setTransform(-408.5,79.3);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#41210C").s().p("AAAAkQgLgBgJgKIgDgCQgEgFgCgHQgCgGAAgFQAAgGADgIQACgFADgDIAEgEQAGgFAIgCQAGgDAIABQAKABAFAEIAEACIABACQAGAIgEAKQgCAGABADIACAMQABAJgDAFQgDAEgGADQgGACgLAAIgEAAg");
	this.shape_57.setTransform(-405.8,79.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#EC672C").s().p("AAABNIgJgIQgKgNgEgRIgDgNQAJAKANAAQAMABAIgDQAFgCADgEQADgBADgDQgDAegJAPQgEAJgGADIgBABIAAAAQgCAAgFgFgAAXgaIgBgBIgDgDQgGgDgJgBQgHgBgIADQgIABgGAGIgEAEIACgLQADgPAHgNIAFgJQAEgGAHgEIADgCIADAAQALAHAIAbIAFATIAAAHQgCgDgEgCg");
	this.shape_58.setTransform(-405.3,79.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#EEC09E").s().p("AggANIgCgMQgBgDACgGQAEgKgGgIQADABADADQAEADADAFQADAFAAAHQAKACgDAAIgEABIgDABQAAAIgEAGQgCAFgEACQgCADgDABQADgFgBgJgAAAAIIgGgBIgFABIAFgHIAGgLIAGgHQAFgGACABIABACIAAACQgKAMAEgDIAJgIQAMgJAAAEQgBADgMAOQAAABAHgFIAKgGQAIgCgLAJIgGAGIgBACIACgCIAEgCIAFgEIACAAIAAACQgBAFgLAFIAMgEIAAAAIgCADQgEAEgIAEIgRAGIgBABQABgIgFgCg");
	this.shape_59.setTransform(-399.2,79.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#E18F59").s().p("AgGAAQADAAADgDQADgBACgDQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABACIABABIgGAHIgGALQgEgEACgHg");
	this.shape_60.setTransform(-399.4,78.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E64A00").s().p("AgZBSQAGgEAEgJQAJgPADgeQADgDABgEIAEgEIAHgFIAGAAIAGAAQAGADgBAIQAAAEgGAKQgEAIgJALQgOAVgNAGIgIADgAAFgSQgFgHgEgDIgFgTQgIgbgLgHIAJACQAPAGAOAUQAKANAGALIADAJQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQgBADgDACQgFACgDAAIgLgIg");
	this.shape_61.setTransform(-401.8,79.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#E18F59").s().p("AAFAIIgFgEQgDgDgDAAQgCgGAEgFIAGAKIAGAIIgBACIgBABQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_62.setTransform(-399.4,-11.5);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#EEC09E").s().p("AghAJQgCgGABgDIACgMQABgJgDgFIAFADIAGAIQAEAFAAAJIADABIAEAAQADABgKACQAAAIgDAEQgDAFgEAEIgGADQAGgIgEgKgAARASIgJgIQgEgDAKANIAAABIgBACQgCABgFgGIgGgHIgGgLIgFgHIAFABIAGgBQAFgDgBgHIABABIARAGQAIAEAEAEIACACIAAAAIgMgDQALAGABAEIAAACIgCAAIgFgEIgEgCIgCgBIABABIAGAGQALAJgIgCQgCAAgIgFIgHgFQAMAOABAEIgBABQgCAAgJgHg");
	this.shape_63.setTransform(-399.2,-12.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#393939").s().p("AgJAwIAFgTIAJgJIALgJQADAAAFACIAEAFQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgDAIQgGAMgKANQgOAUgPAGQgFACgEAAQALgHAIgbgAAMgHIgHgGIgEgDIgEgHQgDgdgJgRQgEgIgGgDIAAgBQAEAAAEADQANAGAOAWQAJAKAEAIQAGAJAAAGQABAGgGAEIgGABIgGgBg");
	this.shape_64.setTransform(-401.8,-12.4);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFF6CD").s().p("AgFAiQgIgDgGgFIgEgDIgFgIQgDgIAAgHQAAgFACgGQACgGAEgFIADgDQAJgKALAAQAOAAAHACQAGACADAEQADAFgBAKIgCALQgBAEACAFQAEAKgGAJIgBABIgEADQgFAEgKAAIgEABIgKgCg");
	this.shape_65.setTransform(-405.8,-12.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#424242").s().p("AACBSIgDgCQgHgEgEgGIgFgJQgHgNgDgOIgCgLIAEADQAGAFAIADQAIACAHgBQAJAAAGgEIADgDIABgBIAGgEIAAAGIgFATQgIAbgLAHgAAYgbQgDgEgFgCQgIgCgMAAQgNAAgJAKIADgNQAEgRAKgNIAJgIQAFgGACABIABABQAGADAEAIQAJARADAdIgGgEg");
	this.shape_66.setTransform(-405.3,-12.5);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#372511").s().p("AAABMQgHgFgFgPQgIgUgBghQAAggAJgYQAFgRAHgFQAEgEAIADQAFACAEAIQgJANgFAQIgCANIgDADQgCAFgCAHQgCAGAAADQAAAJADAHIADAJIACALQADAOAGAMIAGAKQgEAEgDABIgGABQgEAAgCgCg");
	this.shape_67.setTransform(-408.5,-12.6);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#E18F59").s().p("AgGAAQADAAADgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIABABIgGAHIgGALQgEgFACgGg");
	this.shape_68.setTransform(-399.4,-31.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EEC09E").s().p("AggANIgCgMQgBgDACgGQAEgKgGgIIAGADQAEAEADAFQADAEAAAIQAKACgDAAIgEABIgDABQAAAJgEAFIgGAIIgFADQADgFgBgJgAAAAIIgGgBIgFABIAFgHIAGgLIAGgHQAFgGACABIABACIAAABQgKANAEgDIAJgIQAMgJAAADQgBAEgMAOIAHgFQAIgFACAAQAIgCgLAJIgGAGIgBABQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABgBIAEgCIAFgEIACAAIAAACQgBAEgLAGIAMgEIAAAAIgCADQgEAEgIAEIgRAGIgBABQABgHgFgDg");
	this.shape_69.setTransform(-399.2,-30.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#447BCD").s().p("AgZBSQAGgEAEgIQAJgQADgdIAEgIIAEgEIAHgEIAGgBIAGABQAGACgBAIQAAAEgGALIgNATQgOATgNAIIgIACgAAFgSIgJgLIgFgSQgIgbgLgHIAJACQAPAGAOAUQAKANAGALIADAJQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgEADQgFADgDABIgLgJg");
	this.shape_70.setTransform(-401.8,-30.8);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AAAAkQgLAAgJgKIgDgDQgEgFgCgGQgCgGAAgGQAAgGADgIIAFgIIAEgDQAGgFAIgDQAGgCAIABQAKAAAFAEIAEADIABABQAGAJgEAKQgCAFABAEIACAMQABAJgDAFQgDAEgGACQgGACgLAAIgEAAg");
	this.shape_71.setTransform(-405.8,-30.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#372511").s().p("AAABMQgHgFgFgRQgJgYAAggQABghAIgUQAFgPAHgFQAEgEAIADQADABAEAEIgGAKQgGAMgDAOIgCALIgDAJQgDAHAAAIQAAAEACAGQACAHACAFIADADIACANQAFAQAJANQgEAIgFACIgGABQgEAAgCgCg");
	this.shape_72.setTransform(-408.5,-30.6);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#628DD1").s().p("AAABNIgJgIQgKgNgEgRIgDgNQAJAKANAAQAMAAAIgCQAFgCADgEIAGgEQgDAdgJARQgEAIgGADIgBABIAAAAQgDAAgEgFgAAXgaIgBgBIgDgDQgGgEgJAAQgHgBgIACQgIADgGAFIgEADIACgLQADgOAHgNIAFgJQAEgGAHgEIADgCIADAAQALAHAIAbIAFASIAAAHIgGgEg");
	this.shape_73.setTransform(-405.3,-30.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_74.setTransform(-404.4,14.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAAAkQgLgBgJgJIgDgDIgHgLIgBgMQgBgGAEgHIAFgJIAEgEQAGgFAIgCQAFgDAJACQAJAAAGAEQABAAAAAAQABABAAAAQABAAAAABQAAAAABABIAAABQAHAIgEALQgCAFAAAEIACALQACAJgEAGQgDAEgFACQgFACgKAAIgGAAg");
	this.shape_75.setTransform(-405.8,5.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#E18F59").s().p("AgGAAIAGgDIAFgEQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIABABIABACIgGAHIgGALQgEgFACgGg");
	this.shape_76.setTransform(-399.4,4.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgFACgEQAEgLgGgJIAGAFQAEAEADAEQACAFABAHQAKABgEABIgDACIgCAAQgBAIgEAHIgGAHIgGAEQAEgGgCgJgAAAAHIgGAAQgDAAgCABIAFgIIAGgKIAGgIQAEgFADABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAAACQgKAMAEgDIAKgIQALgJAAAEQgBADgLAOIAGgEIAKgHQAIgBgLAKIgGAFIgBABIACgBIAEgCIAGgEIABABIAAABQAAAEgMAGIAMgEIAAAAIgBADQgFAEgIAEQgKADgGADIgCABQABgHgFgEg");
	this.shape_77.setTransform(-399.2,6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#3A4D75").s().p("AgZBRQAGgCAEgJQAJgQACgdIAFgHIAEgEQAEgEADgBQACgBAEAAIAGAAQAGAEgBAHQAAAFgGAKIgNASQgOAVgNAGQgEADgEAAgAAFgSIgKgKQgBgKgDgJQgIgbgLgHQADAAAGACQAPAGAOAUQAKANAFALQAEAGAAAEQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABIgEAEIgIADIgLgJg");
	this.shape_78.setTransform(-401.8,5.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#372511").s().p("AAABLQgHgFgFgPQgJgZABggQAAggAIgVQAFgPAHgFQAEgEAHADQAEABAEAEIgFAJQgHANgDAPIgCALIgDAIQgEAHABAIIACAKIAEALIADAEQABAHACAFQAEASAKANQgFAHgGACIgFACQgEAAgCgEg");
	this.shape_79.setTransform(-408.6,6.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#48608E").s().p("AAABNIgJgHQgKgNgEgSQgCgFAAgHQAJAJALAAQAOABAHgDQAFgCACgDIAGgEQgCAdgJAQQgEAJgFACIgBAAIAAABIgBAAQgDAAgEgFgAAXgaIgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgGgEgKgBQgGgBgIADQgHACgGAFIgFAEIADgLQADgPAGgNIAFgJQAEgGAHgEIADgCIADAAQALAHAIAbQADAJABAKIABAHIgGgFg");
	this.shape_80.setTransform(-405.3,5.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#372511").s().p("AAABMQgHgGgFgQQgJgYAAggQABggAIgVQAFgOAHgFQAEgFAIADIAHAFIgGAKQgGANgDAOIgCALIgDAIQgDAHAAAIQAAAEACAGQACAGACAGIADACIACANQAFARAJANQgEAHgFADIgHABQgDAAgCgCg");
	this.shape_81.setTransform(-408.5,24.4);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E18F59").s().p("AgGAAQADAAADgDQADgCACgCQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIABACIABABIgGAHIgGALQgEgFACgGg");
	this.shape_82.setTransform(-399.4,23.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EEC09E").s().p("AggANIgCgLQgBgFACgFQAEgKgGgJIAGAFQAEAEADAEQADAFAAAHQAKACgDAAIgEACIgDAAQAAAJgEAFQgCAFgEACIgFAFQADgGgBgJgAAAAIQgDgBgDAAIgFABIAFgHIAGgLIAGgIQAFgFACABIABACIAAACQgKAMAEgDIAJgJQAMgIAAAEQgBAEgMANIAHgEIAKgGQAIgCgLAJIgGAGIgBABIACgBIAEgCIAFgEQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAADQgBAEgLAFQALgEABAAIAAAAIgCADQgEAEgIAEIgRAGIgBAAQABgGgFgDg");
	this.shape_83.setTransform(-399.2,24.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#41210C").s().p("AAAAkQgLgBgJgKIgDgCQgEgFgCgHQgCgFAAgGQAAgGADgIIAFgIIAEgEQAGgFAIgCQAGgCAIAAQAKACAFADIAEACIABABQAGAJgEAKQgCAFABAFIACALQABAJgDAGQgDAEgGACQgGACgLAAIgEAAg");
	this.shape_84.setTransform(-405.8,24.3);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#EC672C").s().p("AAABNIgJgIQgKgNgEgRIgDgNQAJAJANABQAMABAIgDQAFgCADgEIAGgEQgDAegJAPQgEAJgGADIgBABIAAAAQgCAAgFgFgAAXgaIgBgCIgDgCQgGgDgJgCQgHAAgIACQgIACgGAFIgEAEIACgLQADgOAHgNIAFgJQAEgHAHgDIADgCIADAAQALAHAIAaIAFAUIAAAGIgGgEg");
	this.shape_85.setTransform(-405.3,24.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#E64A00").s().p("AgZBRQAGgDAEgIQAJgQADgeQADgCABgFIAEgEIAHgEIAGgBQADgBADACQAGACgBAHQAAAFgGAKQgEAIgJALQgOAVgNAHIgIACgAAFgSQgFgHgEgDIgFgUQgIgagLgHIAJACQAPAGAOAUQAKANAGAMIADAIQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQgBADgDABQgFAEgDAAIgLgJg");
	this.shape_86.setTransform(-401.8,24.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#372511").s().p("AAABMQgHgFgFgPQgIgUAAghQgBggAJgYQAFgQAHgFQAEgFAHADQAGACAFAIQgKANgEARQgCAFgBAHIgDAEIgEALIgCAJQgBAJAEAHIADAIIACAMQADAOAHANIAFAJQgEAEgEABIgGABQgDAAgCgCg");
	this.shape_87.setTransform(-408.6,60.7);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#E18F59").s().p("AAFAIIgFgEIgGgDQgCgGAEgFIAGALIAGAHIgBACIgBABQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_88.setTransform(-399.4,61.8);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#EEC09E").s().p("AghAJQgCgGAAgEIACgLQACgJgEgGIAGAEIAGAIQAEAGABAHIACABIADABQAEACgKABIgDAMQgDAEgEAEQgCADgEACQAGgJgEgKgAASASIgKgIQgEgDAKANIAAACIgBAAQgDACgEgFIgGgIIgGgLIgFgHQACABADAAIAGgBQAFgDgBgHIACABIAQAGQAIAEAFAEIABACIAAABIgMgEQAMAGAAADIAAADIgBAAIgGgEIgEgCIgCgBIABABIAGAGQALAJgIgCIgKgGIgGgFQALAPABADIgBABQgCAAgIgGg");
	this.shape_89.setTransform(-399.2,60.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgFAiQgIgCgGgFIgEgEIgFgIQgEgIABgHIABgLIAHgLIADgDQAJgJALgBQAOAAAHACQAFACADAEQAEAGgCAJIgCALQAAAEACAFQAEALgHAJIAAAAIgEADQgGAEgJAAIgGABQgDAAgFgCg");
	this.shape_90.setTransform(-405.8,60.8);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#609634").s().p("AACBSIgDgCQgHgEgEgGIgFgJQgGgNgDgOIgDgMIAFAEQAGAGAHACQAIACAGgBQAKgBAGgEIADgCIABgBQAEgCACgDIgBAHQgBAKgDAJQgIAbgLAHIgBAAIgCAAgAAXgcQgCgDgFgCQgHgDgOABQgLAAgJAJQAAgHACgFQAEgRAKgNQADgEAGgEQAFgFADAAIAAABIABAAQAFACAEAJQAJAQACAdIgGgEg");
	this.shape_91.setTransform(-405.3,60.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_92.setTransform(-404.4,52.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#4A7328").s().p("AgJAwQADgJABgKIAKgKIALgJIAIADIAEAEQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAADgEAGQgFALgKANQgOAUgPAGQgGACgDAAQALgHAIgbgAAMgIQgDgBgEgEIgEgDIgFgIQgCgdgJgQQgEgJgGgCIAAgBQAEAAAEADQANAGAOAVIANASQAGAKAAAFQABAHgGADIgGABQgEAAgCgBg");
	this.shape_93.setTransform(-401.8,60.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#372511").s().p("AAABMQgHgFgFgPQgIgUgBghQAAggAJgYQAFgQAHgGQAEgEAIADQAFADAEAHQgJANgFARIgCANIgDACQgCAFgCAHQgCAGAAAEQAAAIADAHIADAJIACALQADAOAGAMIAGAKQgEAEgDABIgGABQgEAAgCgCg");
	this.shape_94.setTransform(-408.5,42.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E18F59").s().p("AAFAIIgFgEQgDgDgDAAQgCgGAEgFIAGAKIAGAIIgBABQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_95.setTransform(-399.4,43.5);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgFAiQgIgCgGgGIgEgDIgFgIQgDgHAAgIQAAgFACgGQACgGAEgFIADgDQAJgKALAAQAOAAAHACQAGACADAEQADAFgBAKIgCALQgBAEACAFQAEALgGAIIgBABIgEADQgFAEgKABIgDAAQgGAAgFgCg");
	this.shape_96.setTransform(-405.8,42.5);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#EEC09E").s().p("AghAJQgCgGABgEIACgLQABgKgDgEIAFADIAGAIQAEAFAAAJIADAAIAEABQADABgKACQAAAIgDAEQgDAEgEAEIgGAFQAGgJgEgKgAARATIgJgJQgEgDAKANIAAABIgBACQgCABgFgFIgGgIIgGgLIgFgHIAFACIAGgCQAFgCgBgIIABABIARAFIAMAJIACACIAAAAIgMgDQALAFABAEIAAADIgCAAIgFgEIgEgDIgCAAIABAAIAGAHQALAJgIgBQgCgBgIgFIgHgFQAMAOABADIgBABQgCAAgJgFg");
	this.shape_97.setTransform(-399.2,42.5);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#628DD1").s().p("AACBSIgDgCQgHgEgEgFIgFgKQgHgMgDgPIgCgLIAEADQAGAGAIACQAIACAHAAQAJgBAGgEIADgDIABgBIAGgEIAAAHIgFATQgIAagLAHgAAYgbQgDgEgFgCQgIgCgMAAQgNAAgJAKIADgNQAEgRAKgNIAJgIQAFgFACAAIABABQAGADAEAJQAJAQADAdIgGgEg");
	this.shape_98.setTransform(-405.3,42.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#447BCD").s().p("AgJAxIAFgTIAJgLIALgJQADAAAFAEIAEAEQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgDAJQgGALgKANQgOAUgPAGIgJACQALgHAIgagAAMgIIgHgEIgEgEIgEgHQgDgdgJgRQgEgIgGgEIAAAAIAIACQANAIAOAUQAJALAEAIQAGAKAAAEQABAIgGACIgGACIgGgCg");
	this.shape_99.setTransform(-401.8,42.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_100.setTransform(-404.4,105.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#372511").s().p("AAABMQgHgGgFgPQgJgZABggQAAggAIgVQAFgOAHgGQAEgEAHADQAEABAEAEIgFAJQgHANgDAPIgCALIgDAIQgEAHABAIIACALIAEALIADADQABAHACAFQAEASAKANQgFAHgGACIgGABQgDAAgCgCg");
	this.shape_101.setTransform(-408.6,97.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#E18F59").s().p("AgGAAIAGgDIAFgEQAAAAABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIABACIABABIgGAHIgGALQgEgFACgGg");
	this.shape_102.setTransform(-399.4,96.5);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgFACgEQAEgLgGgJIAGAFQAEAEADAEQACAFABAHQAKABgEABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgCAAQgBAIgEAHQgCAEgEADIgGAEQAEgGgCgJgAAAAIIgGgBQgDAAgCABIAFgIIAGgKIAGgIQAEgFADABQAAAAAAAAQABAAAAABQAAAAAAAAQAAAAAAABIAAACQgKAMAEgDIAKgIQALgIAAADQgBADgLAOIAGgEIAKgHQAIgBgLAKIgGAFIgBABIACAAQAAgBAEgCIAGgEIABABIAAACQAAAEgMAFIAMgEIAAAAIgBADQgFAEgIAEIgQAGIgCABQABgHgFgDg");
	this.shape_103.setTransform(-399.2,97.6);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#000000").s().p("AAAAkQgLgBgJgJIgDgDIgHgLIgBgMQgBgHAEgHIAFgIIAEgEQAGgFAIgCQAFgDAJABQAJABAGAEIAEADIAAAAQAHAJgEALQgCAEAAAFIACALQACAJgEAGQgDAEgFACQgGACgMAAIgDAAg");
	this.shape_104.setTransform(-405.8,97.6);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#48608E").s().p("AAABNIgJgIQgKgNgEgRQgCgGAAgHQAJAJALABQAOABAHgDQAFgCACgEIAGgEQgCAegJAQQgEAIgFADIgBAAIAAABIgBAAQgCAAgFgFgAAXgaIgBgBIgDgDQgGgDgKgBQgGgBgIACQgHACgGAFIgFAEIADgLQADgOAGgNIAFgJQAEgHAHgDIADgCIADAAQALAHAIAbIAEATIABAGIgGgEg");
	this.shape_105.setTransform(-405.3,97.5);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#3A4D75").s().p("AgZBRQAGgDAEgIQAJgQACgeQAEgDABgEIAEgEIAHgEQACgCAEAAIAGABQAGADgBAIQAAAFgGAJIgNATQgOAUgNAHQgEADgEAAgAAFgSIgKgKIgEgTQgIgbgLgHQADAAAGACQAPAGAOATQAKAOAFALQAEAFAAAEQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAIgEAEIgIAEIgLgJg");
	this.shape_106.setTransform(-401.8,97.5);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#E18F59").s().p("AgGAAQADAAADgDQADgBACgDQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABACIABABIgGAHIgGALQgEgEACgHg");
	this.shape_107.setTransform(-399.4,169.8);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#EEC09E").s().p("AggANIgCgLQgBgEACgGQAEgKgGgJIAGAFQAEADADAFQADAFAAAHQAKACgDAAIgEACIgDAAQAAAJgEAFQgCAFgEACIgFAEQADgFgBgJgAAAAIQgDgBgDAAIgFABIAFgIIAGgKIAGgIQAFgFACABIABACIAAACQgKAMAEgDIAJgJQAMgIAAAEQgBADgMAOIAHgEIAKgHQAIgBgLAJIgGAGIgBABIACgBIAEgCIAFgEQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAACQgBAFgLAFIAMgEIAAAAIgCADQgEAEgIAEIgRAGIgBAAQABgGgFgDg");
	this.shape_108.setTransform(-399.2,170.9);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E64A00").s().p("AgZBRQAGgDAEgIQAJgQADgeQADgCABgFIAEgEIAHgEIAGgBQADgBADACQAGACgBAHQAAAGgGAJIgNATQgOAVgNAGIgIADgAAFgSQgFgHgEgDIgFgTQgIgbgLgHIAJACQAPAGAOAUQAKANAGAMIADAIQAAABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQgBADgDABQgFADgDAAIgLgIg");
	this.shape_109.setTransform(-401.8,170.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#41210C").s().p("AAAAkQgLgBgJgKIgDgCQgEgFgCgHQgCgGAAgFQAAgGADgIQACgFADgDIAEgEQAGgFAIgCQAGgCAIAAQAKACAFADIAEACIABABQAGAJgEAKQgCAGABAEIACALQABAJgDAFQgDAEgGADQgGACgLAAIgEAAg");
	this.shape_110.setTransform(-405.8,170.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#372511").s().p("AAABLQgHgFgFgQQgJgYAAggQABggAIgVQAFgOAHgGQAEgEAIACQADACAEAEIgGAJQgGANgDAPIgCALQgCADgBAFQgDAHAAAIQAAAEACAGQACAGACAGIADACIACANQAFARAJANQgEAHgFADIgGABQgEAAgCgDg");
	this.shape_111.setTransform(-408.5,171);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EC672C").s().p("AAABNIgJgIQgKgNgEgRIgDgNQAJAKANABQAMAAAIgCQAFgDADgEIAGgEQgDAegJAQQgEAIgGADIgBABIAAAAQgCAAgFgFgAAXgaIgBgBIgDgDQgGgDgJgBQgHgBgIADQgIACgGAFIgEAEIACgLQADgPAHgNIAFgJQAEgGAHgDIADgCIADgBQALAHAIAbIAFATIAAAHIgGgFg");
	this.shape_112.setTransform(-405.3,170.8);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E18F59").s().p("AgGAAQADAAADgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABABIABACIgGAHIgGALQgEgFACgGg");
	this.shape_113.setTransform(-399.4,151.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EEC09E").s().p("AggANIgCgLQgBgEACgGQAEgKgGgJIAGAFQAEAEADAEQADAFAAAHQAKABgDACIgEABIgDABQAAAHgEAGIgGAHIgFAFQADgGgBgJgAAAAIIgGgBIgFABIAFgHIAGgLIAGgHQAFgGACACIABABIAAABQgKANAEgDIAJgIQAMgIAAADQgBADgMAOQAAABAHgGQAIgFACAAQAIgCgLAJIgGAGIgBABIACgBIAEgCIAFgEIACAAIAAADQgBAEgLAFIAMgEIAAABIgCACQgEAEgIAFIgRAFIgBABQABgIgFgCg");
	this.shape_114.setTransform(-399.2,152.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#393939").s().p("AgZBRQAGgDAEgIQAJgRADgdIAEgHIAEgEIAHgEIAGgBIAGABQAGACgBAHQAAAFgGALQgEAGgJAMQgOAUgNAHQgEADgEAAgAAFgSIgJgKIgFgTQgIgbgLgHQAEAAAFACQAPAGAOAUQAKANAGAMIADAIQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgEADQgFAEgDAAIgLgJg");
	this.shape_115.setTransform(-401.8,152.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFF6CD").s().p("AAAAkQgLAAgJgKIgDgDQgEgFgCgGQgCgGAAgGQAAgHADgHIAFgIIAEgDQAGgGAIgCQAGgCAIABQAKAAAFAEIAEADIABABQAGAIgEALQgCAFABAEIACALQABAKgDAFQgDAEgGACQgGACgLAAIgEAAg");
	this.shape_116.setTransform(-405.8,152.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#372511").s().p("AAABMQgHgFgFgRQgJgYAAggQABghAIgUQAFgPAHgFQAEgEAIADQADABAEAEIgGAKQgGAMgDAOIgCALIgDAJQgDAHAAAIQAAAEACAGQACAHACAFIADACIACANQAFARAJANQgEAHgFADIgGABQgEAAgCgCg");
	this.shape_117.setTransform(-408.5,152.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#424242").s().p("AAABNIgJgIQgKgNgEgRIgDgNQAJAKANAAQAMAAAIgCQAFgCADgEIAGgEQgDAdgJAQQgEAJgGADIgBABIAAAAQgCAAgFgFgAAXgaIgBgBIgDgDQgGgEgJAAQgHgBgIACQgIACgGAGIgEADIACgLQADgOAHgNIAFgKQAEgFAHgEIADgCIADAAQALAHAIAbIAFASIAAAHIgGgEg");
	this.shape_118.setTransform(-405.3,152.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#E18F59").s().p("AgGAAQADAAADgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIABABIgGAHIgGALQgEgFACgGg");
	this.shape_119.setTransform(-399.4,133.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#EEC09E").s().p("AggANIgCgMQgBgEACgFQAEgKgGgJIAGAEQAEAFADAEQADAEAAAIQAKABgDABIgEABIgDABQAAAJgEAFIgGAIIgFADQADgFgBgJgAAAAIIgGgBIgFABIAFgIIAGgJIAGgIQAFgGACABIABACIAAACQgKAMAEgDIAJgIQAMgJAAADQgBAFgMANIAHgEQAIgHACAAQAIgCgLAKIgGAGIgBABIACgBIAEgDIAFgDQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAACQgBAEgLAGQALgEABAAIAAAAIgCACQgEAFgIAEIgRAGIgBAAQABgGgFgDg");
	this.shape_120.setTransform(-399.2,134.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#447BCD").s().p("AgZBRQAGgDAEgIQAJgRADgdIAEgHIAEgEQAEgDADgBIAGgCIAGACQAGACgBAHQAAAGgGAJIgNATQgOAUgNAHIgIADgAAFgTIgJgJIgFgTQgIgbgLgHIAJACQAPAGAOAUQAKANAGAMIADAIQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgEAEQgFADgDAAIgLgJg");
	this.shape_121.setTransform(-401.8,134.1);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#000000").s().p("AAAAjQgLAAgJgJIgDgDQgEgFgCgHQgCgFAAgGQAAgHADgHIAFgIIAEgEQAGgFAIgCQAGgCAIAAQAKABAFAEIAEACIABACQAGAIgEALQgCAFABAEIACALQABAJgDAGQgDAEgGABQgFADgKAAIgGgBg");
	this.shape_122.setTransform(-405.8,134.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#372511").s().p("AAABMQgHgFgFgQQgJgYAAghQABggAIgVQAFgPAHgFQAEgEAIADQADABAEAEIgGAKQgGAMgDAPIgCALIgDAIQgDAHAAAIQAAAFACAFQACAHACAFIADADIACANQAFARAJANQgEAHgFACIgGABQgEAAgCgCg");
	this.shape_123.setTransform(-408.5,134.3);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#628DD1").s().p("AAABNIgJgIQgKgNgEgRIgDgNQAJAKANAAQAMABAIgDQAFgCADgEIAGgEQgDAdgJARQgEAIgGADIgBABIAAAAQgCAAgFgFgAAXgaIgBgBIgDgDQgGgEgJAAQgHgBgIACQgIADgGAFIgEADIACgLQADgOAHgNIAFgJQAEgGAHgEIADgCIADAAQALAHAIAbIAFATIAAAGIgGgEg");
	this.shape_124.setTransform(-405.3,134.1);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E18F59").s().p("AAFAIIgFgFQgCgCgEAAQgCgHAEgEIAGALIAGAHIgBACIgBABQAAAAAAgBQAAAAAAgBQAAAAAAgBQgBAAAAAAg");
	this.shape_125.setTransform(-413.5,151);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#EEC09E").s().p("AghAIQgCgEAAgFIACgLQACgJgEgGIAGAEIAGAHQAEAHAAAIIADAAIADABQADACgJABQgBAHgCAFQgDAFgEADQgDADgEACQAHgJgEgLgAASASIgKgIQgEgDAKAMIAAADIgBABQgDABgEgGIgGgHIgGgLIgFgIQACACADAAIAGgBQAFgDgBgHIABAAQAHAEAKADQAJAEAEAEIABACIAAAAIgMgCQALAFABAEIAAABIgBABIgGgEIgEgDIgCAAIABABIAHAFQAKAKgIgCIgKgGIgHgEQAMAOABADIgBABQgCAAgIgGg");
	this.shape_126.setTransform(-413.3,150);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#000000").s().p("AgFAiQgIgCgGgFIgEgEQgDgEgCgEQgEgIABgHQAAgEACgHQACgGAEgFIADgDQAJgJALgBQAOAAAHACQAFACADAEQAEAGgCAJIgCALQAAAEACAFQAEALgHAJIAAAAIgDADQgHAEgJAAIgGABQgDAAgFgCg");
	this.shape_127.setTransform(-419.9,150);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#372511").s().p("AAABMQgHgFgGgPQgIgVAAggQAAggAIgYQAGgQAHgFQAEgFAHADQAFACAGAIQgLANgEARQgCAFAAAHIgDAEQgCAFgCAGQgCAGAAADQgBAJAEAHQABAFACADIACALQADAPAGANIAFAJQgEAEgDABIgFABQgEAAgCgCg");
	this.shape_128.setTransform(-422.6,149.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#48608E").s().p("AACBSIgCgCQgIgEgEgGIgFgJQgHgNgCgPIgCgLIAEAEQAFAGAIABQAIADAGgBQAKgBAGgEIADgCIABgBQAEgCACgDIgBAHIgEATQgIAbgLAHIgBAAIgCAAgAAYgcQgDgDgFgCQgHgDgOABQgMAAgJAJQABgHACgFQAEgRAKgNQADgEAGgEQAFgFACAAIABABIABAAQAFACAEAJQAJAQACAdIgFgEg");
	this.shape_129.setTransform(-419.3,150);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_130.setTransform(-418.4,141.8);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#3A4D75").s().p("AgJAwIAEgTIAKgKIAKgJQAEABAEACIAFAEQAAABABAAQAAABAAAAQABABAAAAQAAAAgBABIgEAJQgGALgJANQgOAUgQAGQgFACgEAAQALgHAJgbgAAMgIQgEgBgEgEIgEgDIgEgIQgDgdgJgQQgEgJgFgCIAAgBQADAAAFADQAMAGAPAVIANASQAGAKAAAFQABAHgHAEIgGAAQgDAAgCgBg");
	this.shape_131.setTransform(-415.8,150);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E18F59").s().p("AAFAIIgFgEQgCgDgEAAQgCgGAEgFIAGALIAGAIIgBABIgBABQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_132.setTransform(-413.5,43.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#000000").s().p("AgFAiQgIgCgGgFIgEgEQgDgEgCgFQgEgHABgHQAAgEACgHQACgGAEgFIADgDQAJgJALgBQAOgBAHADQAFACADAEQAEAGgCAJIgCALQAAAEACAFQAEALgHAIIAAABIgDADQgHAEgJAAIgGABQgDAAgFgCg");
	this.shape_133.setTransform(-419.9,42.4);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EEC09E").s().p("AghAIQgCgEAAgFIACgLQACgJgEgGIAGAEIAGAHQAEAHAAAIIADAAIADABQADACgJABQgBAHgCAFQgDAFgEADQgDADgEACQAHgIgEgMgAASASIgKgIQgEgDAKANIAAABIgBACQgDABgEgFIgGgIIgGgLIgFgHQACABADAAQAEAAACgBQAFgDgBgHIABABIARAGQAJAEAEAEIABACIAAABIgMgEQALAGABAEIAAABIgBABIgGgEIgEgCIgCgBIABABIAHAFQAKAKgIgBIgKgHIgHgEQAMAOABADIgBABQgCAAgIgGg");
	this.shape_134.setTransform(-413.3,42.3);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_135.setTransform(-418.4,34.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#609634").s().p("AACBSIgCgCQgIgEgEgGIgFgJQgHgNgCgPIgCgLIAEAEQAFAGAIABQAIADAGgBQAKgBAGgEIADgCIABgBQAEgCACgDIgBAHIgEATQgIAbgLAHIgBAAIgCAAgAAYgcQgDgDgFgCQgHgDgOABQgMAAgJAJQABgHACgFQAEgSAKgNIAJgHQAFgFACAAIABABIABAAQAFACAEAJQAJAQACAdIgFgEg");
	this.shape_136.setTransform(-419.3,42.4);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#4A7328").s().p("AgJAwIAEgTIAKgKIAKgJQAEABAEACIAFAEQAAABABAAQAAABAAAAQABAAAAABQAAAAgBAAIgEAKQgGALgJANQgOAUgQAGQgFACgEAAQALgHAJgbgAAMgIQgEgBgEgEIgEgEIgEgHQgDgdgJgQQgEgJgFgCIAAgBQADAAAFADQAMAGAPAVIANASQAGAKAAAFQABAHgHADQgCABgEAAQgDAAgCgBg");
	this.shape_137.setTransform(-415.8,42.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#372511").s().p("AAABMQgHgFgGgPQgIgVAAggQAAggAIgZQAGgPAHgFQAEgFAHADQAFACAGAHQgLANgEASQgCAFAAAHIgDAEQgCAFgCAGQgCAGAAADQgBAJAEAHQABAFACADIACALQADAPAGANIAFAJQgEAEgDABIgFABQgEAAgCgCg");
	this.shape_138.setTransform(-422.6,42.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E18F59").s().p("AAFAIIgFgEQgCgDgEAAQgCgGAEgFIAGAKIAGAIIgBABIgBACQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_139.setTransform(-413.5,186.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#000000").s().p("AgFAiQgIgCgGgGIgEgDQgDgEgCgEQgDgHAAgIQAAgFACgGQACgGAEgFIADgDQAJgKALAAQAOAAAHACQAGACADAEQADAFgBAJIgCAMQgBAEACAFQAEALgGAIIgBABIgDADQgGAEgJAAIgGABIgJgCg");
	this.shape_140.setTransform(-419.9,185.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#372511").s().p("AAABMQgHgFgFgPQgIgUgBghQAAggAJgYQAFgRAHgFQAEgEAHADQAFADAGAHQgLANgEARIgCANIgDACQgCAFgCAHQgCAGAAAEQAAAIADAHQABAFACAEIACALQADAOAGAMIAFAKQgDAEgEABIgFABQgEAAgCgCg");
	this.shape_141.setTransform(-422.6,185.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#628DD1").s().p("AACBSIgDgCQgHgEgFgFIgFgKQgGgNgDgOIgCgLIAEADQAGAGAIACQAIACAHgBQAJAAAGgEIADgDIABgBIAGgEIgBAHIgEASQgIAbgMAHgAAYgbQgDgEgGgCQgHgCgNAAQgMAAgJAKIACgNQAEgRALgNQACgDAHgFQAFgFACAAIABABQAFADAFAJQAIAQAEAdIgGgEg");
	this.shape_142.setTransform(-419.3,185.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#EEC09E").s().p("AghAIQgCgFAAgEIACgLQABgJgDgGIAGAFIAGAHQADAGABAHIACABIAEABQAEACgKABQgBAHgCAFIgIAIIgFAFQAFgJgDgLgAARASIgKgIQgDgDAJANIABABIgBABQgCACgGgGIgFgHIgHgLIgEgHIAFABIAGgBQAEgDAAgHIABABIARAFQAIAFAEAEIACACIgBAAIgLgDQALAGABADIgBACIgBAAIgGgDIgEgCIgCgBIACABIAGAFQALAKgIgCQgCAAgJgFQgGgGAAABQAMAOAAADIAAABQgDAAgIgGg");
	this.shape_143.setTransform(-413.2,185.8);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#447BCD").s().p("AgJAwIAEgTIAKgKIAKgJQAEABAEADIAFADQAAABABAAQAAABAAAAQABABAAAAQAAABgBAAIgDAIQgGAMgKANQgOAUgQAGIgJACQAMgHAIgbgAAMgIIgHgEIgFgEIgDgHQgEgegIgQQgFgIgFgDIAAgBQAEAAAEACQAMAIAPAUQAJAMAEAGQAGALAAAFQABAHgHACIgGABIgFgBg");
	this.shape_144.setTransform(-415.8,185.9);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#372511").s().p("AAABLQgHgFgFgOQgIgVgBggQAAggAJgYQAFgRAHgFQAEgEAHADQAFADAGAHQgLANgEARIgCANIgDACQgCAFgCAHQgCAGAAAEQAAAHADAIQABAFACADIACALQADAOAGANIAFAJQgDAEgEACIgFABQgEAAgCgDg");
	this.shape_145.setTransform(-422.6,131.9);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#41210C").s().p("AgFAiQgIgCgGgFIgEgEQgDgDgCgFQgDgIAAgHQAAgEACgGQACgHAEgFIADgCQAJgKALgBQAOAAAHACQAGADADAEQADAFgBAJIgCAMQgBADACAGQAEAKgGAJIgBABIgDACQgGAEgJABIgFAAQgFAAgFgCg");
	this.shape_146.setTransform(-419.9,132);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#EC672C").s().p("AACBSIgDgCQgHgEgFgGIgFgJQgGgNgDgOIgCgMIAEAEQAGAGAIACQAIACAHgBQAJgBAGgDIADgDIABgBIAGgFIgBAHIgEATQgIAbgMAHgAAYgbQgDgEgGgCQgHgDgNABQgMAAgJAKIACgNQAEgRALgNQACgDAHgFQAFgFACAAIABABQAFADAFAJQAIAPAEAeQgDgDgDgBg");
	this.shape_147.setTransform(-419.3,132);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E18F59").s().p("AAFAIQgCgDgDgBQgCgDgEAAQgCgHAEgEIAGAKIAGAIIgBABIgBACQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_148.setTransform(-413.5,133);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EEC09E").s().p("AghAJQgCgGAAgEIACgMQABgJgDgEQADABADACQADADADAFQADAGABAHIACABIAEABQAEACgKABQgBAGgCAGQgDAEgFADIgFAGQAFgJgDgKgAARASIgKgIQgDgDAJAMIABACIgBABQgCACgGgGIgFgHIgHgLIgEgHIAFABQADAAADgBQAEgCAAgIIABABIARAFQAIAEAEAFIACACIgBAAIgLgDQALAFABAEIgBADIgBAAIgGgEIgEgCIgCgBIACABIAGAGQALAIgIgBIgLgGQgGgFAAABQAMAOAAACQAAABAAAAQAAAAAAAAQAAABAAAAQgBAAAAAAQgCAAgIgGg");
	this.shape_149.setTransform(-413.2,132);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#E64A00").s().p("AgJAwIAEgUQAFgCAFgHIAKgJQAEAAAEAEQADABACACQAAABABAAQAAABAAAAQABABAAAAQAAABgBAAIgDAJQgGALgKANQgOAUgQAGIgJACQAMgHAIgbgAARgHIgFgBIgHgEIgFgEQAAgFgDgCQgEgegIgQQgFgIgFgEIAAAAQAEABAEABQAMAHAPAVQAJAMAEAGQAGALAAAEQABAIgHACIgDABIgDAAg");
	this.shape_150.setTransform(-415.8,132.1);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_151.setTransform(-418.4,104.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#E18F59").s().p("AgGAAIAGgDIAFgEQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABABIABABIgGAIIgGALQgEgFACgGg");
	this.shape_152.setTransform(-413.5,95.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgFACgEQAEgLgHgJIAHAFIAHAIQACAFABAHQAJABgDABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDAAQAAAIgEAHQgCAEgEADIgGAEQAEgGgCgJgAAAAIQgCgBgEAAQgDAAgCABIAFgHIAGgLIAGgIQAEgFADABIABACIAAACQgKAMAEgDIAKgIQALgIAAADQgBADgMAOIAHgEIAKgHQAIgBgKAKIgHAFIgBABIACAAQAAgBAEgCIAGgEIABABIAAACQgBAEgLAFIAMgEIAAAAIgBADQgEAEgJAEIgRAGIgBABQABgHgFgDg");
	this.shape_153.setTransform(-413.3,96.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#000000").s().p("AAAAkQgLgBgJgJIgDgDIgGgLQgCgHAAgFQgBgHAEgHQACgEADgEIAEgEQAGgFAIgCQAFgDAJABQAJABAHAEIADADIAAAAQAHAJgEALQgCAEAAAFIACALQACAJgEAGQgDAEgFACQgGACgLAAIgEAAg");
	this.shape_154.setTransform(-419.9,96.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#372511").s().p("AAABMQgHgGgGgPQgIgZAAggQAAggAIgUQAGgPAHgGQAEgEAHADQADABAEAEIgFAJQgGANgDAPIgCALQgCAEgBAEQgEAHABAIQAAAEACAHIAEALIADADQAAAHACAFQAEASALANQgGAHgFACIgGABQgDAAgCgCg");
	this.shape_155.setTransform(-422.6,96.4);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#609634").s().p("AAABNIgJgIQgKgNgEgRQgCgGgBgHQAJAJAMABQAOABAHgDQAFgCADgEIAFgEQgCAegJAQQgEAIgFADIgBAAIgBABIAAAAQgCAAgFgFgAAXgaIgBgBIgDgCQgGgEgKgBQgGgBgIACQgIACgFAFIgEAEIACgLQACgOAHgNIAFgJQAEgGAIgEIACgCIADAAQALAHAIAbIAEATIABAGIgGgEg");
	this.shape_156.setTransform(-419.3,96.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#4A7328").s().p("AgZBRQAFgDAEgIQAJgQADgeQAEgDAAgEIAEgEIAIgEQACgCADAAQAEAAACACQAHACgBAIQAAAFgGAJIgNATQgPAUgMAHQgFADgDAAgAAFgSIgKgKIgEgTQgJgbgLgHQAEAAAFACQAQAGAOATIAPAZIAEAJQABABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAIgFAEIgIAEIgKgJg");
	this.shape_157.setTransform(-415.8,96.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_158.setTransform(-418.4,176.1);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#E18F59").s().p("AgGAAIAGgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABABIABACIgGAHIgGALQgEgFACgGg");
	this.shape_159.setTransform(-413.5,167);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#000000").s().p("AAAAkQgLgBgJgJIgDgDQgEgFgCgGQgCgHAAgFQgBgGAEgHQACgFADgEIAEgEQAGgFAIgCQAFgCAJABQAJAAAHAEIADADIAAABQAHAIgEALQgCAFAAAEIACALQACAJgEAGQgDAEgFACQgFACgKAAIgGAAg");
	this.shape_160.setTransform(-419.9,168);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgFACgEQAEgLgHgJIAHAFIAHAIQACAFABAHQAJABgDABIgDACIgDAAQAAAIgEAHIgGAHIgGAEQAEgGgCgJgAAAAIQgCgBgEAAQgDAAgCABIAFgHIAGgLIAGgIQAEgFADABIABACIAAACQgKAMAEgDIAKgIQALgJAAAEQgBADgMAOIAHgEIAKgHQAIgBgKAKIgHAFIgBABIACgBIAEgCIAGgEIABABIAAACQgBADgLAGIAMgEIAAAAIgBADQgEAEgJAEIgRAGIgBABQABgHgFgDg");
	this.shape_161.setTransform(-413.3,168);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#372511").s().p("AAABLQgHgFgGgPQgIgZAAggQAAggAIgVQAGgOAHgGQAEgEAHADQADABAEAEIgFAJQgGANgDAPIgCALQgCAEgBAEQgEAHABAIQAAAEACAGQACAGACAFIADAEQAAAHACAFQAEASALANQgGAHgFACIgFABQgEAAgCgDg");
	this.shape_162.setTransform(-422.6,168.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#5BB1B0").s().p("AgZBRQAFgDAEgIQAJgRADgcIAEgIIAEgDQAEgEAEgBQACgBADAAQAEAAACABQAHADgBAGQAAAGgGAKIgNASQgPAVgMAGQgFADgDgBgAAFgSIgKgKIgEgTQgJgbgLgGIAJABQAQAGAOATQAJAOAGAMIAEAJQABAAAAAAQAAAAgBABQAAAAAAABQgBAAAAAAIgFAFIgIADIgKgJg");
	this.shape_163.setTransform(-415.8,168);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#6BD3D2").s().p("AAABNIgJgHQgKgNgEgSQgCgFgBgHQAJAJAMAAQAOABAHgDQAFgBADgEIAFgEQgCAdgJAQQgEAJgFACIgBAAIgBABIAAAAQgDAAgEgFgAAXgaIgBgBIgDgCQgGgEgKgBQgGgBgIADQgIACgFAFIgEAEIACgLQACgPAHgNIAFgJQAEgGAIgEIACgBQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABQALAGAIAbIAEATIABAHIgGgFg");
	this.shape_164.setTransform(-419.3,167.9);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFF6CD").s().p("AAAAkQgLAAgJgKIgDgDQgEgFgCgGQgCgGAAgGQAAgHADgHQACgEADgEIAEgDQAGgGAIgCQAGgCAJAAQAJABAGAEIADADIABABQAGAIgEALQgCAFABAEIACALQABAKgDAFQgDAEgGACQgGACgLAAIgEAAg");
	this.shape_165.setTransform(-419.9,78.3);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABABIABACIgGAHIgGALQgEgFACgGg");
	this.shape_166.setTransform(-413.5,77.3);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#EEC09E").s().p("AghAMIgCgLQAAgEACgEQADgLgFgIIAFADIAIAJQACAEABAIQAKACgEAAIgEABIgCABQgBAIgDAHIgGAHIgGADQADgEgBgLgAAAAIIgGgBIgFABIAEgHIAHgKIAFgIQAGgGACABIABACIgBACQgJAMADgDIAKgIQALgIAAACQAAAEgMAOQAAABAGgFQAJgHACAAQAIgBgLAKIgGAGIgCAAIACAAIAEgDIAGgDIABAAIABABQgBAFgLAFIALgEIABAAIgCADQgEAEgIAEIgRAGIgBABQAAgHgEgDg");
	this.shape_167.setTransform(-413.2,78.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#393939").s().p("AgZBSQAFgEAFgJQAIgPAEgeIADgHIAFgEIAHgFIAFgBIAGABQAHADgBAIQAAAEgGAKQgEAHgJALQgPAVgMAGQgEADgEABgAAFgTIgKgKIgEgTQgIgagMgHQAFAAAEACQAQAFAOAVQAKANAGALIADAJQABAAAAABQAAAAgBABQAAAAAAABQgBAAAAAAIgFAEQgEAEgEgBIgKgJg");
	this.shape_168.setTransform(-415.8,78.3);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#424242").s().p("AAABNIgJgIQgLgNgEgRIgCgNQAJAKAMAAQANAAAHgCQAGgCADgEIAGgEQgEAdgIAQQgFAJgFADIgBABIgBAAQgCAAgEgFgAAXgaIgBgBIgDgDQgGgEgJgBQgHAAgIACQgIACgGAGIgEADIACgLQADgPAGgMIAFgKQAFgFAHgEIADgCIACAAQAMAHAIAaIAEATIABAHIgGgEg");
	this.shape_169.setTransform(-419.3,78.3);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#372511").s().p("AAABMQgHgGgFgQQgJgYAAggQABghAIgUQAFgPAHgFQAEgEAHADQAEABADAEIgFAKQgGAMgDAOIgCALQgCAEgBAFQgDAHAAAIQAAAEACAGQACAHACAFIADACIACANQAEARALANQgGAHgFADIgGABQgDAAgCgCg");
	this.shape_170.setTransform(-422.6,78.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABACIABABIgGAHIgGALQgEgFACgGg");
	this.shape_171.setTransform(-413.5,113.1);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#EEC09E").s().p("AghANIgCgMQAAgDACgGQADgKgFgIIAFADIAIAJQACAEABAIQAKACgEAAIgEABIgCABQgBAJgDAFIgGAIIgGADQADgFgBgJgAAAAIIgGgBIgFABIAEgHIAHgLIAFgHQAGgGACABIABACIgBABQgJANADgDIAKgIQALgJAAADQAAAEgMAOIAGgFQAJgFACAAQAIgCgLAJIgGAGIgCABQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAAAgBIAEgCIAGgEIABAAIABACQgBAEgLAGIALgEIABAAIgCADQgEAEgIAEIgRAGIgBABQAAgHgEgDg");
	this.shape_172.setTransform(-413.2,114.2);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#000000").s().p("AAAAkQgLAAgJgKIgDgDQgEgFgCgGQgCgGAAgGQAAgGADgIQACgEADgEIAEgDQAGgFAIgDQAGgCAJABQAJAAAGAEIADADIABABQAGAJgEAKQgCAFABAEIACAMQABAJgDAFQgDAEgGACQgGACgLAAIgEAAg");
	this.shape_173.setTransform(-419.9,114.1);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#628DD1").s().p("AAABNQgHgFgCgDQgLgNgEgRIgCgNQAJAKAMAAQANAAAHgCQAGgCADgEIAGgEQgEAdgIARQgFAIgFADIgBABIgBAAQgCAAgEgFgAAXgaIgBgBIgDgDQgGgEgJAAQgHgBgIACQgIADgGAFIgEADIACgLQADgOAGgNIAFgJQAFgGAHgEIADgCIACAAQAMAHAIAbIAEASIABAHIgGgEg");
	this.shape_174.setTransform(-419.3,114.1);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#372511").s().p("AAABMQgHgFgFgRQgJgYAAggQABghAIgUQAFgPAHgFQAEgEAHADQAEABADAEIgFAKQgGAMgDAOIgCALQgCAEgBAFQgDAHAAAIQAAAEACAGQACAHACAFIADADIACANQAEAQALANQgGAIgFACIgFABQgEAAgCgCg");
	this.shape_175.setTransform(-422.6,114.3);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#447BCD").s().p("AgZBSQAFgDAFgJQAIgQAEgdIADgIIAFgEIAHgEIAFgBIAGABQAHACgBAIQAAAEgGALIgNATQgPATgMAIQgEABgEABgAAFgSIgKgLIgEgSQgIgagMgIIAJACQAQAGAOAUQAKANAGALIADAJQABAAAAABQAAAAgBABQAAAAAAABQgBAAAAABIgFADQgEADgEABIgKgJg");
	this.shape_176.setTransform(-415.8,114.1);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#000000").s().p("AgFAiQgIgCgGgFIgEgEQgDgEgCgEQgEgHABgIQAAgEACgGQACgGAEgGIADgDQAJgJALgBQAOAAAHACQAFACADAEQAEAGgCAJIgCALQAAAFACAEQAEALgHAJIAAAAIgDADQgHAEgJABIgFAAQgEAAgFgCg");
	this.shape_177.setTransform(-419.9,60.3);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#372511").s().p("AAABMQgHgGgGgOQgIgVAAggQAAggAIgZQAGgPAHgFQAEgGAHAEQAFACAGAHQgLANgEASQgCAFAAAHIgDADQgCAGgCAGQgCAGAAADQgBAJAEAHQABAEACAEIACALQADAPAGANIAFAJQgEAEgDABIgGABQgDAAgCgCg");
	this.shape_178.setTransform(-422.6,60.2);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#48608E").s().p("AACBSIgCgCQgIgDgEgHIgFgJQgHgNgCgOIgCgLIAEAEQAFAFAIACQAIACAGgBQAKgBAGgDIADgDIABgBIAGgEIgBAGIgEATQgIAbgLAHIgBAAIgCAAgAAYgbQgDgEgFgCQgHgDgOABQgMABgJAJQABgHACgGQAEgRAKgNIAJgIQAFgFACAAIABABIABAAQAFADAEAIQAJAQACAeIgFgEg");
	this.shape_179.setTransform(-419.3,60.3);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_180.setTransform(-418.4,52.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#E18F59").s().p("AAFAIIgFgEIgGgEQgCgFAEgFIAGAKIAGAIIgBACIgBABQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_181.setTransform(-413.5,61.3);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#EEC09E").s().p("AghAIQgCgEAAgFIACgLQACgJgEgGIAGAEQAEADACAEQAEAHAAAIIADAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQADACgJABQgBAHgCAFIgHAIIgHAFQAHgJgEgLgAASASIgKgIQgEgDAKAMIAAACIgBACQgDABgEgFIgGgIIgGgLIgFgHQACABADAAIAGgBQAFgDgBgHIABABIARAGQAJAEAEAEIABACIAAABIgMgEQALAFABAEIAAACIgBABIgGgEQgEgCAAgBIgCAAIABABIAHAFQAKAKgIgBIgKgHIgHgEQAMAOABADIgBABQgCAAgIgGg");
	this.shape_182.setTransform(-413.3,60.3);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#3A4D75").s().p("AgJAwIAEgTIAKgJIAKgKIAIAEIAFAEQAAAAABABQAAAAAAAAQABABAAAAQAAAAgBABIgEAJIgPAZQgOATgQAGQgFACgEAAQALgHAJgbgAAMgIIgIgEIgEgEQAAgEgEgDQgDgegJgQQgEgIgFgDIAAgBQADAAAFADQAMAHAPAUIANATQAGAJAAAGQABAHgHADIgGABQgDAAgCgCg");
	this.shape_183.setTransform(-415.8,60.3);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#E18F59").s().p("AAFAIQgCgDgDgBQgCgDgEAAQgCgHAEgEIAGAKIAGAIIgBABIgBACQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_184.setTransform(-413.5,-10.4);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#41210C").s().p("AgFAiQgIgCgGgFIgEgEQgDgDgCgFQgDgHAAgIQAAgEACgGQACgGAEgGIADgDQAJgJALgBQAOAAAHACQAGADADADQADAGgBAJIgCALQgBAEACAFQAEALgGAIIgBACIgDADQgGADgJABIgDAAQgHAAgFgCg");
	this.shape_185.setTransform(-419.9,-11.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#372511").s().p("AAABMQgHgGgFgOQgIgVgBggQAAggAJgYQAFgQAHgFQAEgFAHADQAFADAGAHQgLANgEARIgCANIgDACQgCAGgCAGQgCAGAAAEQAAAIADAHQABAFACADIACALQADAPAGANIAFAJQgDAEgEACIgFAAQgEAAgCgCg");
	this.shape_186.setTransform(-422.6,-11.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#EC672C").s().p("AACBRIgDgCQgHgDgFgGIgFgJQgGgNgDgPIgCgLIAEAEQAGAFAIACQAIADAHgBQAJgBAGgDIADgDIABgBIAGgFIgBAHIgEATQgIAbgMAHgAAYgbQgDgEgGgDQgHgCgNAAQgMABgJAKIACgNQAEgRALgNIAJgIQAFgGACABIABABQAFADAFAIQAIAQAEAeIgGgEg");
	this.shape_187.setTransform(-419.3,-11.4);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#E64A00").s().p("AgJAwIAEgTQAFgDAFgHIAKgIQAEAAAEADQADABACADQAAAAABABQAAAAAAAAQABABAAAAQAAABgBAAIgDAIQgGAMgKANQgOAUgQAGIgJACQAMgHAIgbgAARgHIgFgBIgHgEIgFgEQAAgFgDgCQgEgegIgQQgFgIgFgDIAAgBIAIADQAMAGAPAVIANATQAGAJAAAGQABAHgHACIgEABIgCAAg");
	this.shape_188.setTransform(-415.8,-11.4);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#EEC09E").s().p("AghAIQgCgFAAgEIACgLQABgJgDgGIAGAFQADACADAEQADAHABAIIACAAIAEABQAEACgKABQgBAHgCAFQgDAFgFADIgFAEQAFgIgDgLgAARASIgKgIQgDgCAJALIABACIgBACQgCABgGgGIgFgIIgHgKIgEgHIAFABQADABADgCQAEgCAAgIIABABIARAGQAIAEAEAFIACABIgBAAIgLgDQALAFABAFIgBABQAAABAAAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIgGgCIgEgDIgCgCIACACIAGAFQALAKgIgCIgLgGIgGgEQAMANAAAEQAAAAAAABQAAAAAAAAQAAAAAAAAQgBAAAAAAQgCAAgIgGg");
	this.shape_189.setTransform(-413.2,-11.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFF6CD").s().p("AgFAiQgIgCgGgGIgEgDQgDgEgCgEQgDgHAAgIQAAgFACgGQACgGAEgFIADgDQAJgKALAAQAOAAAHACQAGACADAEQADAFgBAKIgCALQgBAEACAFQAEALgGAIIgBABIgDADQgGAEgJABIgEAAQgGAAgFgCg");
	this.shape_190.setTransform(-419.9,6.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E18F59").s().p("AAFAIIgFgEQgCgDgEAAQgCgGAEgFIAGAKIAGAIIgBACIgBABQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_191.setTransform(-413.5,7.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#EEC09E").s().p("AghAJQgCgGAAgEIACgLQABgKgDgEIAGADIAGAIQADAFABAJIACAAIAEABQAEABgKACQgBAIgCAEIgIAIIgFAFQAFgJgDgKgAARATIgKgJQgDgDAJANIABABIgBACQgCABgGgFIgFgIIgHgLIgEgHIAFACQADgBADgBQAEgDAAgGIABAAIARAFIAMAJIACACIgBAAIgLgDQALAFABAEIgBADIgBAAIgGgEIgEgDIgCAAIACAAIAGAHQALAJgIgBQgCgBgJgFIgGgFQAMAOAAADIgBABQgCAAgIgFg");
	this.shape_192.setTransform(-413.2,6.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#372511").s().p("AAABMQgHgFgFgPQgIgUgBghQAAggAJgYQAFgQAHgGQAEgEAHADQAFADAGAHQgLANgEARIgCANIgDACQgCAGgCAGQgCAGAAAEQAAAIADAHQABAFACAEIACALQADAOAGAMIAFAKQgDAEgEABIgFABQgEAAgCgCg");
	this.shape_193.setTransform(-422.6,6.3);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#393939").s().p("AgJAxIAEgTIAKgLIAKgJQAEAAAEAEIAFAEQAAAAABABQAAAAAAABQABAAAAAAQAAABgBAAIgDAJQgGALgKANQgOAUgQAGQgEACgFAAQAMgHAIgagAAMgIIgHgEIgFgEIgDgHQgEgdgIgRQgFgIgFgEIAAAAQAEABAEACQAMAHAPAUQAJALAEAIQAGAJAAAGQABAHgHACQgCACgEAAIgFgCg");
	this.shape_194.setTransform(-415.8,6.5);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#424242").s().p("AACBSIgDgCQgHgDgFgGIgFgKQgGgMgDgPIgCgLIAEADQAGAGAIACQAIACAHAAQAJgBAGgEIADgDIABgBIAGgEIgBAHIgEATQgIAagMAHgAAYgbQgDgEgGgCQgHgCgNAAQgMAAgJAKIACgNQAEgRALgNIAJgIQAFgFACAAIABABQAFADAFAJQAIAQAEAdIgGgEg");
	this.shape_195.setTransform(-419.3,6.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#E18F59").s().p("AAFAIIgFgEQgCgDgEAAQgCgGAEgFIAGAKIAGAIIgBABIgBACQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_196.setTransform(-413.5,25.4);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#EEC09E").s().p("AghAJQgCgGAAgDIACgMQABgJgDgFIAGADIAGAIQADAFABAJIACABIAEAAQAEABgKACQgBAIgCAEIgIAJIgFADQAFgIgDgKgAARASIgKgIQgDgDAJANIABABIgBACQgCABgGgGIgFgHIgHgLIgEgHIAFABIAGgBQAEgDAAgHIABABIARAGQAIAEAEAEIACACIgBAAIgLgDQALAGABAEIgBACIgBAAIgGgEIgEgCQAAgBAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAIACABIAGAGQALAJgIgCQgCAAgJgFQgGgGAAABQAMAOAAAEIAAABQgDAAgIgHg");
	this.shape_197.setTransform(-413.2,24.4);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AgFAiQgIgCgGgGIgEgDQgDgEgCgEQgDgIAAgHQAAgFACgGQACgGAEgFIADgDQAJgKALAAQAOAAAHACQAGACADAEQADAFgBAJIgCAMQgBAEACAFQAEALgGAIIgBABIgDADQgGAEgJAAIgGABIgJgCg");
	this.shape_198.setTransform(-419.9,24.4);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#372511").s().p("AAABMQgHgFgFgPQgIgUgBghQAAggAJgYQAFgRAHgFQAEgEAHADQAFADAGAHQgLANgEARIgCANIgDACQgCAFgCAHQgCAGAAAEQAAAIADAHQABAFACAEIACALQADAOAGAMIAFAKQgDAEgEABIgFABQgEAAgCgCg");
	this.shape_199.setTransform(-422.6,24.3);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#628DD1").s().p("AACBSIgDgCQgHgEgFgFIgFgKQgGgNgDgOIgCgLIAEADQAGAGAIACQAIACAHgBQAJAAAGgEIADgDIABgBIAGgEIgBAHIgEASQgIAbgMAHgAAYgbQgDgEgGgCQgHgCgNAAQgMAAgJAKIACgNQAEgRALgNQACgDAHgFQAFgFACAAIABABQAFADAFAJQAIAQAEAdIgGgEg");
	this.shape_200.setTransform(-419.3,24.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#447BCD").s().p("AgJAwIAEgTIAKgJIAKgJQAEAAAEACIAFAFQAAAAABAAQAAABAAAAQABABAAAAQAAABgBAAIgDAIQgGAMgKANQgOAUgQAGIgJACQAMgHAIgbgAAMgHIgHgFIgFgEIgDgHQgEgdgIgQQgFgJgFgDIAAgBQAEABAEACQAMAGAPAVQAJALAEAIQAGAJAAAGQABAGgHAEIgGABIgFgBg");
	this.shape_201.setTransform(-415.8,24.5);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#E18F59").s().p("AAFAIIgFgEQgCgDgEAAQgCgGAEgFIAGALIAGAHIgBACIgBABQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_202.setTransform(-441.9,156.2);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#EEC09E").s().p("AghAIQgCgEAAgFIACgLQACgJgEgGIAGAEIAGAHQAEAHAAAIIADAAIADABQAEACgKABQgBAHgCAFQgDAFgEADQgCADgEACQAGgIgEgMgAASASIgKgIQgEgDAKANIAAABQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgCABgFgFIgGgIIgGgLIgFgHQACABAEAAIAFAAQAFgEgBgHIABABQAHADAKADQAJAEAEAEIABACIAAABIgMgEQAMAGABAEIgBABIgBABIgGgEIgEgCIgCgBIABABIAHAFQAKAKgJgBIgJgHIgGgEQALAOABADIgBABQgCAAgIgGg");
	this.shape_203.setTransform(-441.7,155.1);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#000000").s().p("AgFAiQgIgCgGgFIgEgEQgDgEgCgFQgEgHABgHQAAgEACgHQACgGAEgFIADgDQAJgJALgBQAOAAAHACQAFACADAEQAEAGgCAJIgCALQAAAEACAFQAEALgHAIIAAABQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgGAEgJAAIgGABQgDAAgFgCg");
	this.shape_204.setTransform(-448.3,155.2);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#3A4D75").s().p("AgJAwIAEgTIAKgKIALgJQADABAFACIAEAEQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAEgEAGQgFALgKANQgOAUgPAGQgFACgEAAQALgHAIgbgAANgIQgEgBgEgEIgEgEIgFgHQgCgdgJgQQgEgJgFgCIAAgBQADAAAEADQANAGAOAVIANASQAGAKAAAFQABAHgGAEIgGAAQgEAAgBgBg");
	this.shape_205.setTransform(-444.3,155.2);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_206.setTransform(-446.9,147);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#48608E").s().p("AACBSIgDgCQgHgEgEgGIgFgJQgHgNgDgPIgBgLIADAEQAGAGAIABQAIADAGgBQAJgBAHgEQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAIABgBQAEgCACgDIgBAHIgEATQgIAbgLAHIgBAAIgCAAgAAXgcQgCgDgFgCQgHgDgOABQgMAAgJAJQABgHACgFQAEgRAKgNQADgEAGgEQAFgFACAAIABABIABAAQAFACAEAJQAJAQACAdIgGgEg");
	this.shape_207.setTransform(-447.8,155.2);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#372511").s().p("AAABMQgHgFgGgPQgIgVAAggQAAggAIgYQAGgQAHgFQAEgFAGADQAGACAGAIQgLANgEARQgCAFAAAHIgDAEQgCAFgCAGQgCAGAAADQgBAJAEAHQABAFACADIACALQADAPAGANIAFAJQgEAEgEABIgFABQgDAAgCgCg");
	this.shape_208.setTransform(-451,155);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#372511").s().p("AAABLQgHgFgFgOQgIgVgBggQAAggAJgYQAFgQAHgGQAEgEAHADQAFADAGAHQgLANgEARIgCANIgDACQgCAGgCAGQgCAGAAAEQAAAIADAHQABAFACADIACALQADAOAGANIAFAKQgDADgEACIgFABQgEAAgCgDg");
	this.shape_209.setTransform(-451,136.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#E18F59").s().p("AAFAIQgCgCgDgCQgCgDgEAAQgCgGAEgFIAGAKIAGAIIgBABIgBACQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_210.setTransform(-441.9,137.4);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#41210C").s().p("AgFAiQgIgCgGgFIgEgEQgDgEgCgEQgDgIAAgHQAAgFACgFQACgHAEgFIADgCQAJgKALgBQAOAAAHACQAGACADAEQADAGgBAJIgCALQgBAEACAGQAEAKgGAJIgBABIgEACQgFADgKACIgCAAQgHAAgFgCg");
	this.shape_211.setTransform(-448.3,136.4);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#EC672C").s().p("AACBSIgDgCQgHgDgFgHIgEgJQgHgNgDgOIgBgLIADAEQAGAFAIACQAJACAFAAQAKgCAFgDIAEgDIABgBIAGgEIgBAGIgEAUQgIAagLAHgAAYgbQgDgEgFgCQgIgDgNABQgMABgJAJIACgNQAFgRAKgNIAJgIQAFgFACAAIABABQAFADAFAJQAIAPADAeIgFgEg");
	this.shape_212.setTransform(-447.7,136.4);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#E64A00").s().p("AgJAxIAFgUQAEgDAFgHIALgJQADAAAFAEQADABABADQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgDAIQgGAMgKANQgOAUgPAGIgJACQALgHAIgagAASgHIgFgBIgIgEIgEgEQgBgFgDgCQgDgegJgQQgEgIgFgDIAAgBIAHACQANAHAOAVQAJALAEAIQAGAKAAAFQABAHgGACIgEABIgCAAg");
	this.shape_213.setTransform(-444.3,136.5);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#EEC09E").s().p("AghAJQgCgGABgEIACgLQABgJgDgGIAFAFQAEACACAFQAEAFAAAJIADAAIAEABQADABgKACQAAAHgDAFQgDAEgEAEIgGAFQAGgJgEgKgAASATIgKgJQgEgDAKAMIAAACIgBACQgCABgFgFIgGgIIgGgLIgFgHIAFABQADAAADgBQAFgDgBgGIABAAIARAGQAJAEADAEIACACIAAAAQgBABgLgEQALAFABAEIAAADQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgFgEIgEgCIgCgBIABABIAHAGQAKAJgIgCIgKgGIgHgEQAMANABAEQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQgDAAgHgFg");
	this.shape_214.setTransform(-441.7,136.4);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_215.setTransform(-446.9,107.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABABIABABIgGAIIgGALQgEgFACgGg");
	this.shape_216.setTransform(-441.9,98.1);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgFACgEQAEgLgGgJIAGAFQAEAEADAEQACAFABAHQAKABgEABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDABQAAAHgEAHQgCAEgEADIgGAEQAEgGgCgJgAAAAIIgFgBIgGABIAFgHIAGgLIAGgIQAEgFADACIABABIAAACQgKAMAEgDIAKgIQALgIAAADQgBADgLAOIAGgEIAJgHQAJgBgKAKIgHAFIgBABIACAAIAEgDIAGgEIABABIABACQgBAEgMAFIAMgEIAAAAIgBADQgEAEgJAEIgRAGIgBABQABgHgFgDg");
	this.shape_217.setTransform(-441.7,99.1);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#000000").s().p("AAAAkQgLgBgJgJIgDgDIgGgLQgCgHAAgFQgBgHAEgHQACgEADgEIAEgEQAGgFAIgCQAFgDAJACQAJAAAGAEIAEADIAAAAQAHAJgEALQgCAEAAAFIACALQACAJgEAGQgDAEgFACQgFACgNAAIgDAAg");
	this.shape_218.setTransform(-448.3,99.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#4A7328").s().p("AgYBRQAFgDAEgIQAJgQACgeQAEgDABgEIAEgEIAIgEIAFgBIAGABQAGACgBAIQAAAFgGAKIgNASQgOAVgNAGQgEADgDAAgAAFgSIgKgKIgEgTQgIgbgLgHQAEAAAFACQAPAGAOAUQAKANAFALQAEAFAAAEQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgEADQgFADgDABIgLgJg");
	this.shape_219.setTransform(-444.3,99.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#609634").s().p("AAABNQgGgEgDgEQgKgNgEgRQgCgFgBgIQAJAKAMAAQAOABAHgDQAFgCACgEIAGgEQgCAegJAQQgEAIgFADIgBAAIgBABIAAAAQgCAAgFgFgAAXgaIgBgBIgDgCQgHgEgJgBQgGgBgIACQgIACgGAFIgDAEIABgLQADgOAHgNIAFgJQAEgGAHgEIADgCIADAAQALAHAIAbIAEATIABAGIgGgEg");
	this.shape_220.setTransform(-447.8,99.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#372511").s().p("AAABLQgHgFgGgQQgIgYAAggQAAghAIgUQAGgPAHgFQAEgEAGADQAEABAEAEIgFAJQgGANgDAOIgCALQgCAEgBAFQgEAHABAIQAAAEACAGIAEALIADADQAAAIACAFQAEARALANQgGAHgGADIgEABQgEAAgCgDg");
	this.shape_221.setTransform(-451,99.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABABIABABIgGAIIgGALQgEgFACgGg");
	this.shape_222.setTransform(-441.9,173);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgFACgEQAEgLgGgJIAGAFQAEAEADAEQACAFABAHQAKABgEABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDABQAAAHgEAHIgGAHIgGAEQAEgGgCgJgAAAAIIgFgBIgGABIAFgHIAGgLIAGgIQAEgFADACIABABIAAACQgKAMAEgDIAKgIQALgIAAADQgBADgLAOIAGgEIAJgHQAJgBgKAKIgHAFIgBABIACAAIAEgDIAGgEIABABIABACQgBAEgMAFIAMgEIAAAAIgBADQgEAEgJAEIgRAHIgBAAQABgHgFgDg");
	this.shape_223.setTransform(-441.7,174);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_224.setTransform(-446.9,182.1);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AAAAkQgLgBgJgJIgDgDQgEgFgCgGQgCgHAAgFQgBgGAEgIQACgEADgEIAEgEQAGgFAIgCQAFgDAJACQAJAAAGAEIAEADIAAAAQAHAJgEALQgCAEAAAFIACALQACAJgEAGQgDAEgFACQgFACgNAAIgDAAg");
	this.shape_225.setTransform(-448.3,174);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#372511").s().p("AAABLQgHgFgGgQQgIgYAAggQAAghAIgUQAGgPAHgFQAEgEAGADQAEABAEAEIgFAJQgGANgDAOIgCALQgCAEgBAFQgEAHABAIQAAAEACAGQACAGACAFIADADQAAAIACAFQAEARALANQgGAIgGACIgEABQgEAAgCgDg");
	this.shape_226.setTransform(-451,174.1);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#6BD3D2").s().p("AAABNQgGgEgDgEQgKgNgEgRQgCgFgBgIQAJAKAMAAQAOABAHgDQAFgCACgEIAGgDQgCAdgJAQQgEAIgFADIgBAAIgBABIAAAAQgCAAgFgFgAAXgaIgBgBIgDgCQgHgEgJgBQgGgBgIACQgIACgGAGIgDADIABgLQADgOAHgNIAFgJQAEgGAHgEIADgCIADAAQALAHAIAbIAEATIABAGIgGgEg");
	this.shape_227.setTransform(-447.8,173.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#5BB1B0").s().p("AgYBRQAFgDAEgIQAJgQACgdIAFgIIAEgEIAIgEIAFgBIAGABQAGADgBAHQAAAFgGAKIgNASQgOAVgNAGQgEADgDAAgAAFgSIgKgKIgEgTQgIgbgLgHQAEAAAFACQAPAGAOAUQAKANAFALQAEAFAAAEQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgEAEQgFACgDABIgLgJg");
	this.shape_228.setTransform(-444.3,173.9);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#372511").s().p("AAABMQgHgFgFgRQgJgYAAggQABghAIgUQAFgPAHgFQAEgEAHADQAEABADAEIgFAKQgGAMgDAOIgCALQgCAEgBAFQgDAHAAAIQAAAEACAGQACAHACAFIADACIACANQAEARALANQgGAHgFADIgFABQgEAAgCgCg");
	this.shape_229.setTransform(-451,117.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIABABIgGAHIgGALQgEgFACgGg");
	this.shape_230.setTransform(-441.9,116.8);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#000000").s().p("AAAAkQgLAAgJgKIgDgDQgEgFgCgGQgCgGAAgGQAAgHADgHQACgEADgEIAEgDQAGgGAIgCQAGgCAIABQAKAAAFAEIAEADIABABQAGAIgEALQgCAFABAEIACAMQABAJgDAFQgDAEgGACQgGACgLAAIgEAAg");
	this.shape_231.setTransform(-448.3,117.8);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#628DD1").s().p("AAABNQgGgFgDgDQgKgNgFgRIgCgNQAJAKAMAAQANAAAIgCQAFgCADgEIAFgEQgDAdgIAQQgFAJgFADIgBABIAAAAQgDAAgEgFgAAXgaIgBgBIgEgDQgFgEgKAAQgFgBgJACQgIACgGAGIgDADIABgLQADgOAHgNIAEgKQAFgFAHgEIADgCIADAAQALAHAIAbIAEASIABAHIgGgEg");
	this.shape_232.setTransform(-447.7,117.8);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#447BCD").s().p("AgYBRQAFgDAEgJQAJgPADgeIAEgHIAEgEIAIgFIAFgBIAGABQAGADgBAHQAAAFgGAKQgEAIgJALQgOAVgNAGIgHADgAAFgTIgJgKIgFgSQgIgbgLgHIAJACQAPAGAOAUQAKANAGALIADAJQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAIgEAEQgFADgDAAIgLgJg");
	this.shape_233.setTransform(-444.3,117.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#EEC09E").s().p("AggANIgCgMQgBgDACgFQAEgLgGgIIAGADQAEAFADAEQADAEAAAIQAKACgDABIgEAAIgDABQAAAIgEAHIgGAHIgFADQADgEgBgKgAAAAIIgGgBIgFABIAFgHIAGgKIAGgIQAFgGACABIABACIAAACQgKAMAEgCIAKgJQALgIAAACQgBAFgMANQAAABAHgFQAIgGACAAQAIgCgKAKIgHAGIgBAAIACAAIAEgDIAFgDIACAAIAAABQgBAEgLAGIAMgEIAAABIgCACQgDAEgJAEIgRAGIgBABQABgHgFgDg");
	this.shape_234.setTransform(-441.7,117.8);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_235.setTransform(-446.9,34.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#372511").s().p("AAABMQgHgFgGgPQgIgUAAghQAAggAIgYQAGgQAHgFQAEgFAGADQAGADAGAHQgLANgEARQgCAFAAAIIgDADIgEALQgCAGAAAEQgBAIAEAHQABAFACAEIACALQADAOAGANIAFAJQgEAEgEABIgFABQgDAAgCgCg");
	this.shape_236.setTransform(-451,42.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#E18F59").s().p("AAFAIIgFgEQgCgDgEAAQgCgGAEgFIAGALIAGAIIgBABIgBABQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_237.setTransform(-441.9,43.9);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#609634").s().p("AACBSIgDgCQgHgEgEgGIgFgJQgHgNgDgOIgBgLIADAEQAGAFAIACQAIACAGgBQAJgBAHgEIADgCIABgBIAGgEIgBAGIgEATQgIAbgLAHIgBAAIgCAAgAAXgbQgCgEgFgCQgHgDgOABQgMAAgJAKQABgIACgFQAEgRAKgNQADgEAGgEQAFgFACAAIABABIABAAQAFADAEAIQAJAQACAeIgGgEg");
	this.shape_238.setTransform(-447.8,42.9);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgFAiQgIgCgGgFIgEgEQgDgEgCgEQgEgHABgIQAAgEACgHIAGgLIADgDQAJgJALgBQAOAAAHACQAFACADAEQAEAGgCAJIgCALQAAAFACAEQAEALgHAJIAAAAIgEADQgGAEgJAAIgGABQgDAAgFgCg");
	this.shape_239.setTransform(-448.3,42.9);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#4A7328").s().p("AgJAwIAEgTIAKgKIALgJQADABAFADIAEADQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAEgEAFQgFALgKANQgOAUgPAGQgFACgEAAQALgHAIgbgAANgIIgIgEIgEgEQgBgEgEgDQgCgegJgQQgEgIgFgDIAAgBQADAAAEADQANAGAOAVIANASQAGAKAAAFQABAIgGACIgGABIgFgBg");
	this.shape_240.setTransform(-444.3,42.9);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#EEC09E").s().p("AghAIQgCgEAAgFIACgLQACgJgEgGIAGAEQAEADACAEQAEAHAAAHIADABQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAEACgKABQgBAHgCAFQgDAEgEAEIgGAFQAGgJgEgLgAASASIgKgIQgEgDAKAMIAAACIgBABQgCACgFgFIgGgIIgGgLIgFgHIAGABIAFgBQAFgDgBgHIABABIARAGQAJAEAEAEIABACIAAAAIgMgDQAMAFABAEIgBACIgBABIgGgEIgEgDIgCAAIABABIAHAFQAKAKgJgBIgJgHIgGgEQALAOABADIgBABQgCAAgIgGg");
	this.shape_241.setTransform(-441.7,42.9);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#E18F59").s().p("AAFAIIgFgEIgGgEQgCgFAEgFIAGAKIAGAIIgBACIgBABQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_242.setTransform(-441.9,62.6);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#EEC09E").s().p("AghAIQgCgEAAgFIACgLQACgJgEgGIAGAEQAEADACAEQAEAHAAAIIADAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAEACgKABQgBAHgCAFQgDAEgEAEIgGAFQAGgJgEgLgAASASIgKgIQgEgDAKAMIAAACQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgCABgFgFIgGgIIgGgLIgFgHQACABAEAAIAFgBQAFgDgBgHIABABIARAGQAJAEAEAEIABACIAAABIgMgEQAMAFABAEIgBACIgBABIgGgEQgEgCAAgBIgCAAIABABIAHAFQAKAKgJgBIgJgHIgGgEQALAOABADIgBABQgCAAgIgGg");
	this.shape_243.setTransform(-441.7,61.6);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AgFAiQgIgCgGgFIgEgEQgDgEgCgEQgEgHABgIQAAgEACgGQACgGAEgGIADgDQAJgJALgBQAOAAAHACQAFACADAEQAEAGgCAJIgCALQAAAFACAEQAEALgHAJIAAAAIgEADQgGAEgJABIgFAAQgEAAgFgCg");
	this.shape_244.setTransform(-448.3,61.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#3A4D75").s().p("AgJAwIAEgTIAKgJIALgKIAIAEIAEAEQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAEgEAFQgFALgKAOQgOATgPAGQgFACgEAAQALgHAIgbgAANgIIgIgEIgEgEQgBgEgEgDQgCgegJgQQgEgIgFgDIAAgBQADAAAEADQANAHAOAUIANATQAGAJAAAGQABAHgGADIgGABQgEAAgBgCg");
	this.shape_245.setTransform(-444.3,61.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_246.setTransform(-446.9,53.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#48608E").s().p("AACBSIgDgCQgHgDgEgHIgFgJQgHgNgDgOIgBgLIADAEQAGAFAIACQAIACAGgBQAJgBAHgDIADgDIABgBIAGgEIgBAGIgEATQgIAbgLAHIgBAAIgCAAgAAXgbQgCgEgFgCQgHgDgOABQgMABgJAJQABgHACgGQAEgRAKgNIAJgIQAFgFACAAIABABIABAAQAFADAEAIQAJAQACAeIgGgEg");
	this.shape_247.setTransform(-447.8,61.6);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#372511").s().p("AAABMQgHgGgGgOQgIgVAAggQAAggAIgZQAGgPAHgFQAEgGAGAEQAGACAGAHQgLANgEASQgCAFAAAHIgDADQgCAGgCAGQgCAGAAADQgBAJAEAHQABAEACAEIACALQADAPAGANIAFAJQgEAEgEABIgFABQgEAAgBgCg");
	this.shape_248.setTransform(-451,61.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_249.setTransform(-431.7,124);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABABIABACIgGAHIgGALQgEgFACgGg");
	this.shape_250.setTransform(-426.7,114.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AAAAkQgLgBgJgJIgDgDQgEgFgCgGQgCgHAAgFQgBgGAEgIQACgEADgEIAEgEQAGgFAIgCQAFgDAJACQAJAAAGAEIAEADIAAAAQAHAJgEALQgCAFAAAEIACALQACAJgEAGQgDAEgFACQgFACgNAAIgDAAg");
	this.shape_251.setTransform(-433.1,115.9);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#372511").s().p("AAABLQgHgFgGgQQgIgYAAggQAAghAIgUQAGgPAHgFQAEgEAHADQADABAEAEIgFAJQgGANgDAOIgCAMQgCADgBAFQgEAHABAIQAAAEACAGQACAGACAFIADAEQAAAHACAFQAEARALANQgGAIgFACIgFABQgEAAgCgDg");
	this.shape_252.setTransform(-435.8,116);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#5BB1B0").s().p("AgYBRQAFgCAEgJQAJgQACgdIAFgIIAEgDQAEgEAEgBQACgBADAAIAGABQAGADgBAHQAAAFgGAKIgNASQgOAVgNAGQgEADgDAAgAAFgSIgKgKIgEgTQgIgbgLgHQAEAAAFACQAPAGAOAUQAKANAGALQADAGAAADQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgEAEQgFACgDABIgLgJg");
	this.shape_253.setTransform(-429.1,115.8);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#6BD3D2").s().p("AAABNQgGgEgDgEQgKgNgEgRQgCgFgBgHQAJAJAMAAQAOABAHgDQAFgCADgDIAFgEQgCAdgJAQQgEAJgFACIgBAAIgBABIAAAAQgCAAgFgFgAAXgaIgBgBIgDgCQgHgEgJgBQgGgBgIACQgIACgGAGIgDAEIACgMQACgOAHgNIAFgJQAEgGAIgEIACgCIADAAQALAHAIAbIAEATIABAHQgCgDgEgCg");
	this.shape_254.setTransform(-432.6,115.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgFACgEQAEgLgHgJQAEACADADQAEADADAFIADAMQAJABgDABIgDACIgDAAQAAAIgEAHIgGAHIgGAEQAEgGgCgJgAAAAJIgGgCQgDAAgCACIAFgIIAGgLIAGgHQAEgGADABIABABIAAADQgKAMAEgDIAKgIQALgJAAAEQgBADgMAOIAHgEIAKgGQAIgCgKAKIgHAFIgBABIACgBIAEgCIAFgEIACABIAAABQgBAFgLAEIAMgDIAAAAIgCADQgDAEgJAEIgRAHIgBAAQABgHgFgCg");
	this.shape_255.setTransform(-426.5,115.9);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_256.setTransform(-431.7,197.6);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgFACgEQAEgLgHgJIAHAFIAHAIIADAMQAJABgDABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDAAQAAAIgEAHQgCAEgEADIgGAEQAEgGgCgJgAAAAIIgGgBQgDAAgCABIAFgHIAGgLIAGgIQAEgFADABIABACIAAACQgKAMAEgDIAKgIQALgJAAAEQgBADgMAOIAHgEIAKgHQAIgBgKAKIgHAFIgBABIACAAQAAgBAEgCIAFgEIACABIAAACQgBAEgLAFIAMgEIAAAAIgCADQgDAEgJAEIgRAGIgBABQABgHgFgDg");
	this.shape_257.setTransform(-426.5,189.5);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#E18F59").s().p("AgGAAIAGgDIAFgEQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIABABIABABIgGAIIgGALQgEgFACgGg");
	this.shape_258.setTransform(-426.7,188.5);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#000000").s().p("AAAAkQgLgBgJgJIgDgDQgEgGgCgGQgCgGAAgFQgBgHAEgHQACgEADgEIAEgEQAGgFAIgCQAFgDAJABQAJABAGAEIAEADIAAAAQAHAJgEALQgCAEAAAFIACALQACAJgEAGQgDAEgFACQgFACgNAAIgDAAg");
	this.shape_259.setTransform(-433.1,189.5);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#4A7328").s().p("AgYBRQAFgDAEgIQAJgQACgdQAEgDABgEIAEgEIAIgFQACgCADABIAGABQAGADgBAGQAAAGgGAKIgNASQgOAVgNAGQgEADgDgBgAAFgSIgKgKIgEgTQgIgbgLgGQAEAAAFABQAPAGAOAUQAKAOAGALQADAEAAAFQAAAAAAAAQAAAAAAABQAAAAAAABQAAAAgBAAIgEAEIgIAEIgLgJg");
	this.shape_260.setTransform(-429.1,189.5);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#372511").s().p("AAABLQgHgFgGgPQgIgZAAggQAAggAIgUQAGgPAHgGQAEgEAHADQADABAEAEIgFAJQgGANgDAPIgCALQgCAEgBAEQgEAHABAIQAAAEACAGQACAGACAGIADADQAAAHACAFQAEASALANQgGAHgFACIgFABQgEAAgCgDg");
	this.shape_261.setTransform(-435.8,189.6);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#609634").s().p("AAABNIgJgHQgKgNgEgSQgCgFgBgHQAJAJAMABQAOAAAHgCQAFgCADgEIAFgEQgCAdgJAQQgEAJgFACIgBAAIgBABIAAAAQgDAAgEgFgAAXgaIgBAAIgDgDQgHgEgJgBQgGgBgIADQgIACgGAFIgDAEIACgLQACgPAHgNIAFgJQAEgGAIgDIACgCQABgBAAAAQABAAAAAAQAAAAAAAAQABAAAAABQALAGAIAbIAEATIABAHIgGgFg");
	this.shape_262.setTransform(-432.6,189.4);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#41210C").s().p("AAAAkQgLgBgJgKIgDgCQgEgFgCgHQgCgGAAgFQAAgGADgIQACgFADgDIAEgEQAGgFAIgCQAGgDAJABQAJABAFAEIAEACIABACQAGAIgEAKQgCAGABADIACAMQABAJgDAFQgDAEgGADQgGACgLAAIgEAAg");
	this.shape_263.setTransform(-433.1,79.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#EEC09E").s().p("AghANIgCgMQAAgDABgGQAEgKgFgIIAFAEQAFADADAFQACAFABAHQAKACgEAAIgEABIgCABQgBAIgDAGQgDAFgDACQgDADgDABQADgFgBgJgAAAAIIgGgBIgFABIAEgHQAEgFADgGIAFgHQAGgGACABIABACIgBACQgKAMAEgDIAKgIQALgJAAAEQgBADgLAOQAAABAGgFIALgGQAHgCgKAJIgGAGIgCACIACgCIAEgCIAGgEIABAAIABACQgBAFgLAFIALgEIABAAIgCADQgEAEgIAEIgRAGIgCABQABgIgEgCg");
	this.shape_264.setTransform(-426.5,79.2);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDQADgBACgDQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABACIABABIgGAHQgDAFgDAGQgEgEACgHg");
	this.shape_265.setTransform(-426.7,78.2);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#E64A00").s().p("AgYBSQAFgEAEgJQAJgPADgeQADgDABgEIAEgEIAIgFIAFAAIAGAAQAGADgBAIQAAAEgGAKQgEAIgJALQgOAVgNAGIgHADgAAFgSQgFgHgEgDIgFgTQgIgbgLgHIAJACQAPAGAOAUQAKANAGALIADAJQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAQgBADgDACQgFACgDAAIgLgIg");
	this.shape_266.setTransform(-429.1,79.2);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#EC672C").s().p("AAABNQgHgFgCgDQgLgNgEgRIgCgNQAJAKAMAAQANABAHgDQAGgCADgEQADgBADgDQgEAegIAPQgFAJgFADIgBABIgBAAQgCAAgEgFgAAXgaIgBgBIgEgDQgFgDgJgBQgHgBgIADQgIABgGAGIgEAEIACgLQADgPAGgNIAFgJQAFgGAHgEIADgCIACAAQAMAHAIAbIAEATIABAHIgGgFg");
	this.shape_267.setTransform(-432.5,79.2);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#372511").s().p("AAABMQgHgFgFgRQgJgYAAgfQABghAIgVQAFgOAHgFQAEgFAHADQAEACADAEIgFAJQgGANgDAOIgCALQgCADgBAFQgDAIAAAHQAAAEACAGQACAHACAFIADACIACANQAEARALANQgGAHgFADIgFABQgEAAgCgCg");
	this.shape_268.setTransform(-435.8,79.3);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#E18F59").s().p("AAFAIIgFgEQgCgDgEAAQgCgGAEgFQADAGADAEIAGAIIgBACIgBABQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_269.setTransform(-426.7,-11.5);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#EEC09E").s().p("AgiAJQgBgGAAgDIACgMQABgJgDgFIAGADIAGAIQADAFABAJIACABIAEAAQAEABgKACQgBAIgCAEIgIAJIgFADQAFgIgEgKgAARASIgKgIQgEgDAKANIABABIgBACQgCABgGgGIgFgHQgDgGgEgFIgEgHIAFABIAGgBQAEgDgBgHIACABIARAGQAIAEAEAEIACACIgBAAIgLgDQALAGABAEIgBACIgBAAIgGgEIgEgCIgCgBIACABIAGAGQAKAJgHgCQgCAAgJgFIgGgFQALAOABAEIAAABQgCAAgJgHg");
	this.shape_270.setTransform(-426.5,-12.5);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFF6CD").s().p("AgFAiQgIgDgGgFIgEgDQgDgEgCgEQgDgIAAgHQAAgFACgGQACgGAEgFIADgDQAJgKALAAQAOAAAHACQAGACADAEQADAFgBAKIgCALQgBAEACAFQAEAKgGAJIgBABIgEADQgFAEgJAAIgFABIgKgCg");
	this.shape_271.setTransform(-433.1,-12.5);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#424242").s().p("AACBSIgDgCQgHgEgFgGIgFgJQgGgNgDgOIgCgLIAEADQAGAFAIADQAIACAHgBQAJAAAFgEIAEgDIABgBIAGgEIgBAGIgEATQgIAbgMAHgAAYgbQgDgEgGgCQgHgCgNAAQgMAAgJAKIACgNQAEgRALgNQACgDAHgFQAFgGACABIABABQAFADAFAIQAIARAEAdIgGgEg");
	this.shape_272.setTransform(-432.5,-12.5);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#393939").s().p("AgJAwIAFgTIAJgJIALgJQADAAAFACIAEAFQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgDAIQgGAMgKANQgOAUgPAGQgFACgEAAQALgHAIgbgAANgHIgIgGIgEgDIgEgHQgDgdgJgRQgEgIgFgDIAAgBQADAAAEADQANAGAOAWQAJAKAEAIQAGAJAAAGQABAGgGAEIgGABIgFgBg");
	this.shape_273.setTransform(-429.1,-12.4);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#372511").s().p("AAABMQgHgFgFgPQgIgUgBghQAAggAJgYQAFgRAHgFQAEgEAHADQAFACAGAIQgLANgEAQIgCANIgDADQgCAFgCAHQgCAGAAADQAAAJADAHQABAFACAEIACALQADAOAGAMIAFAKQgDAEgEABIgFABQgEAAgCgCg");
	this.shape_274.setTransform(-435.8,-12.6);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIABABIgGAHQgDAFgDAGQgEgFACgGg");
	this.shape_275.setTransform(-426.7,-31.8);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AAAAkQgLAAgJgKIgDgDQgEgFgCgGQgCgGAAgGQAAgGADgIQACgEADgEIAEgDQAGgFAIgDQAGgCAJABQAJAAAFAEIAEADIABABQAGAJgEAKQgCAFABAEIACAMQABAJgDAFQgDAEgGACQgGACgLAAIgEAAg");
	this.shape_276.setTransform(-433.1,-30.8);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#447BCD").s().p("AgYBSQAFgEAEgIQAJgQADgdIAEgIIAEgEIAIgEIAFgBIAGABQAGACgBAIQAAAEgGALQgEAGgJANQgOATgNAIIgHACgAAFgSIgJgLIgFgSQgIgbgLgHIAJACQAPAGAOAUQAKANAGALIADAJQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgEADQgFADgDABIgLgJg");
	this.shape_277.setTransform(-429.1,-30.8);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#628DD1").s().p("AAABNQgHgFgCgDQgLgNgEgRIgCgNQAJAKAMAAQANAAAHgCQAGgCADgEIAGgEQgEAdgIARQgFAIgFADIgBABIgBAAQgCAAgEgFgAAXgaIgBgBIgEgDQgFgEgJAAQgHgBgIACQgIADgGAFIgEADIACgLQADgOAGgNIAFgJQAFgGAHgEIADgCIACAAQAMAHAIAbIAEASIABAHIgGgEg");
	this.shape_278.setTransform(-432.5,-30.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#372511").s().p("AAABMQgHgFgFgRQgJgYAAggQABghAIgUQAFgPAHgFQAEgEAHADQAEABADAEIgFAKQgGAMgDAOIgCALQgCAEgBAFQgDAHAAAIQAAAEACAGQACAHACAFIADADIACANQAEAQALANQgGAIgFACIgFABQgEAAgCgCg");
	this.shape_279.setTransform(-435.8,-30.6);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#EEC09E").s().p("AghANIgCgMQAAgDABgGQAEgKgFgIIAFADIAIAJQACAEABAIQAKACgEAAIgEABIgCABQgBAJgDAFIgGAIIgGADQADgFgBgJgAAAAIIgGgBIgFABIAEgHQAEgFADgGIAFgHQAGgGACABIABACIgBABQgKANAEgDIAKgIQALgJAAADQgBAEgLAOIAGgFQAJgFACAAQAHgCgKAJIgGAGIgCABQABAAAAAAQAAAAAAAAQAAAAABAAQAAAAAAgBIAEgCIAGgEIABAAIABACQgBAEgLAGIALgEIABAAIgCADQgEAEgIAEIgRAGIgCABQABgHgEgDg");
	this.shape_280.setTransform(-426.5,-30.7);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_281.setTransform(-431.7,14.1);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDIAFgEQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIABABIABACIgGAHIgGALQgEgFACgGg");
	this.shape_282.setTransform(-426.7,4.9);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#000000").s().p("AAAAkQgLgBgJgJIgDgDQgEgFgCgGQgCgHAAgFQgBgGAEgHQACgFADgEIAEgEQAGgFAIgCQAFgDAJACQAJAAAGAEQABAAAAAAQABABAAAAQABAAAAABQAAAAABABIAAABQAHAIgEALQgCAFAAAEIACALQACAJgEAGQgDAEgFACQgFACgKAAIgGAAg");
	this.shape_283.setTransform(-433.1,5.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgFACgEQAEgLgHgJIAHAFIAHAIIADAMQAJABgDABIgDACIgDAAQAAAIgEAHIgGAHIgGAEQAEgGgCgJgAAAAHIgGAAQgDAAgCABIAFgIIAGgKIAGgIQAEgFADABIABACIAAACQgKAMAEgDIAKgIQALgJAAAEQgBADgMAOIAHgEIAKgHQAIgBgKAKIgHAFIgBABIACgBIAEgCIAFgEIACABIAAABQgBAEgLAGIAMgEIAAAAIgCADQgDAEgJAEQgKADgHADIgBABQABgHgFgEg");
	this.shape_284.setTransform(-426.5,6);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#3A4D75").s().p("AgYBRQAFgCAEgJQAJgQACgdIAFgHIAEgEQAEgEAEgBQACgBADAAIAGAAQAGAEgBAHQAAAFgGAKIgNASQgOAVgNAGQgEADgDAAgAAFgSIgKgKIgEgTQgIgbgLgHQAEAAAFACQAPAGAOAUQAKANAGALQADAGAAAEQAAAAAAAAQAAABAAAAQAAAAAAABQAAAAgBABIgEAEQgFACgDABIgLgJg");
	this.shape_285.setTransform(-429.1,5.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#48608E").s().p("AAABNIgJgHQgKgNgEgSQgCgFgBgHQAJAJAMAAQAOABAHgDQAFgCADgDIAFgEQgCAdgJAQQgEAJgFACIgBAAIgBABIAAAAQgDAAgEgFgAAXgaIgBgBQAAAAgBgBQAAAAAAAAQgBgBAAAAQgBAAAAAAQgHgEgJgBQgGgBgIADQgIACgGAFIgDAEIACgLQACgPAHgNIAFgJQAEgGAIgEIACgCIADAAQALAHAIAbIAEATIABAHIgGgFg");
	this.shape_286.setTransform(-432.6,5.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#372511").s().p("AAABLQgHgFgGgPQgIgZAAggQAAggAIgVQAGgPAHgFQAEgEAHADQADABAEAEIgFAJQgGANgDAPIgCALQgCAEgBAEQgEAHABAIQAAAEACAGQACAGACAFIADAEQAAAHACAFQAEASALANQgGAHgFACIgFACQgEAAgCgEg");
	this.shape_287.setTransform(-435.8,6.1);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDQADgCACgCQAAgBABAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIABACIABABIgGAHQgDAFgDAGQgEgFACgGg");
	this.shape_288.setTransform(-426.7,23.2);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#E64A00").s().p("AgYBRQAFgDAEgIQAJgQADgeQADgCABgFIAEgEIAIgEIAFgBQADgBADACQAGACgBAHQAAAFgGAKQgEAIgJALQgOAVgNAHIgHACgAAFgSQgFgHgEgDIgFgUQgIgagLgHIAJACQAPAGAOAUQAKANAGAMIADAIQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQgBADgDABQgFAEgDAAIgLgJg");
	this.shape_289.setTransform(-429.1,24.2);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#EC672C").s().p("AAABNIgJgIQgLgNgEgRIgCgNQAJAJAMABQANABAHgDQAGgCADgEIAGgEQgEAegIAPQgFAJgFADIgBABIgBAAQgCAAgEgFgAAXgaIgBgCIgEgCQgFgDgJgCQgHAAgIACQgIACgGAFIgEAEIACgLQADgOAGgNIAFgJQAFgHAHgDIADgCIACAAQAMAHAIAaIAEAUIABAGIgGgEg");
	this.shape_290.setTransform(-432.5,24.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#41210C").s().p("AAAAkQgLgBgJgKIgDgCQgEgFgCgHQgCgFAAgGQAAgGADgIQACgEADgEIAEgEQAGgFAIgCQAGgCAJAAQAJACAFADIAEACIABABQAGAJgEAKQgCAFABAFIACALQABAJgDAGQgDAEgGACQgGACgLAAIgEAAg");
	this.shape_291.setTransform(-433.1,24.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#372511").s().p("AAABMQgHgGgFgQQgJgYAAggQABggAIgVQAFgOAHgFQAEgFAHADQAEACADADIgFAKQgGANgDAOIgCALQgCADgBAFQgDAHAAAIQAAAEACAGQACAGACAGIADACIACANQAEARALANQgGAHgFADIgGABQgDAAgCgCg");
	this.shape_292.setTransform(-435.8,24.4);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgFABgFQAEgKgFgJIAFAFQAFAEADAEQACAFABAHQAKACgEAAIgEACIgCAAQgBAJgDAFQgDAFgDACIgGAFQADgGgBgJgAAAAIQgDgBgDAAIgFABIAEgHQAEgEADgHIAFgIQAGgFACABIABACIgBACQgKAMAEgDIAKgJQALgIAAAEQgBAEgLANIAGgEIALgGQAHgCgKAJIgGAGIgCABIACgBIAEgCIAGgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIABADQgBAEgLAFQALgEAAAAIABAAIgCADQgEAEgIAEIgRAGIgCAAQABgGgEgDg");
	this.shape_293.setTransform(-426.5,24.3);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#E18F59").s().p("AAFAIIgFgEQgCgDgEAAQgCgGAEgFQADAGADAEIAGAIIgBABQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_294.setTransform(-426.7,43.5);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#EEC09E").s().p("AgiAJQgBgGAAgEIACgLQABgKgDgEIAGADIAGAIQADAFABAJIACAAIAEABQAEABgKACQgBAIgCAEIgIAIIgFAFQAFgJgEgKgAARATIgKgJQgEgDAKANIABABIgBACQgCABgGgFIgFgIQgDgHgEgEIgEgHIAFACIAGgCQAEgCgBgIIACABIARAFQAIAGAEADIACACIgBAAIgLgDQALAFABAEIgBADIgBAAIgGgEIgEgDIgCAAIACAAIAGAHQAKAJgHgBQgCgBgJgFIgGgFQALAOABADIAAABQgDAAgIgFg");
	this.shape_295.setTransform(-426.5,42.5);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgFAiQgIgCgGgGIgEgDQgDgEgCgEQgDgHAAgIQAAgFACgGQACgGAEgFIADgDQAJgKALAAQAOAAAHACQAGACADAEQADAFgBAKIgCALQgBAEACAFQAEALgGAIIgBABIgEADQgFAEgJABIgEAAQgGAAgFgCg");
	this.shape_296.setTransform(-433.1,42.5);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#372511").s().p("AAABMQgHgFgFgPQgIgUgBghQAAggAJgYQAFgQAHgGQAEgEAHADQAFADAGAHQgLANgEARIgCANIgDACQgCAFgCAHQgCAGAAAEQAAAIADAHQABAFACAEIACALQADAOAGAMIAFAKQgDAEgEABIgFABQgEAAgCgCg");
	this.shape_297.setTransform(-435.8,42.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#628DD1").s().p("AACBSIgDgCQgHgEgFgFIgFgKQgGgMgDgPIgCgLIAEADQAGAGAIACQAIACAHAAQAJgBAFgEIAEgDIABgBIAGgEIgBAHIgEATQgIAagMAHgAAYgbQgDgEgGgCQgHgCgNAAQgMAAgJAKIACgNQAEgRALgNIAJgIQAFgFACAAIABABQAFADAFAJQAIAQAEAdIgGgEg");
	this.shape_298.setTransform(-432.5,42.5);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#447BCD").s().p("AgJAxIAFgTIAJgLIALgJQADAAAFAEIAEAEQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgDAJQgGALgKANQgOAUgPAGIgJACQALgHAIgagAANgIIgIgEIgEgEIgEgHQgDgdgJgRQgEgIgFgEIAAAAIAHACQANAIAOAUQAJALAEAIQAGAKAAAEQABAIgGACIgGACIgFgCg");
	this.shape_299.setTransform(-429.1,42.5);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_300.setTransform(-431.7,105.7);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgFACgEQAEgLgHgJIAHAFIAHAIIADAMQAJABgDABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDAAQAAAIgEAHQgCAEgEADIgGAEQAEgGgCgJgAAAAIIgGgBQgDAAgCABIAFgIIAGgKIAGgIQAEgFADABIABACIAAACQgKAMAEgDIAKgIQALgIAAADQgBADgMAOIAHgEIAKgHQAIgBgKAKIgHAFIgBABIACAAQAAgBAAAAQAAAAABAAQAAgBABAAQABgBABAAIAFgEIACABIAAACQgBAEgLAFIAMgEIAAAAIgCADQgDAEgJAEIgRAGIgBABQABgHgFgDg");
	this.shape_301.setTransform(-426.5,97.6);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#E18F59").s().p("AgGAAIAGgDIAFgEQAAAAABAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIABACIABABIgGAHIgGALQgEgFACgGg");
	this.shape_302.setTransform(-426.7,96.5);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#3A4D75").s().p("AgYBRQAFgDAEgIQAJgQACgeQAEgDABgEIAEgEIAIgEQACgCADAAIAGABQAGADgBAIQAAAFgGAJIgNATQgOAUgNAHQgEADgDAAgAAFgSIgKgKIgEgTQgIgbgLgHQAEAAAFACQAPAGAOATQAKAOAGALQADAFAAAEQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAIgEAEIgIAEIgLgJg");
	this.shape_303.setTransform(-429.1,97.5);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#48608E").s().p("AAABNIgJgIQgKgNgEgRQgCgGgBgHQAJAJAMABQAOABAHgDQAFgCADgEIAFgEQgCAegJAQQgEAIgFADIgBAAIgBABIAAAAQgCAAgFgFgAAXgaIgBgBIgDgDQgHgDgJgBQgGgBgIACQgIACgGAFIgDAEIACgLQACgOAHgNIAFgJQAEgHAIgDIACgCIADAAQALAHAIAbIAEATIABAGIgGgEg");
	this.shape_304.setTransform(-432.6,97.5);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#372511").s().p("AAABMQgHgGgGgPQgIgZAAggQAAggAIgVQAGgOAHgGQAEgEAHADQADABAEAEIgFAJQgGANgDAPIgCALQgCAEgBAEQgEAHABAIQAAAEACAHIAEALIADADQAAAHACAFQAEASALANQgGAHgFACIgFABQgEAAgCgCg");
	this.shape_305.setTransform(-435.8,97.7);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AAAAkQgLgBgJgJIgDgDIgGgLQgCgHAAgFQgBgHAEgHQACgEADgEIAEgEQAGgFAIgCQAFgDAJABQAJABAGAEIAEADIAAAAQAHAJgEALQgCAEAAAFIACALQACAJgEAGQgDAEgFACQgFACgNAAIgDAAg");
	this.shape_306.setTransform(-433.1,97.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDQADgBACgDQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABACIABABIgGAHQgDAFgDAGQgEgEACgHg");
	this.shape_307.setTransform(-426.7,169.8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#E64A00").s().p("AgYBRQAFgDAEgIQAJgQADgeQADgCABgFIAEgEIAIgEIAFgBQADgBADACQAGACgBAHQAAAGgGAJQgEAHgJAMQgOAVgNAGIgHADgAAFgSQgFgHgEgDIgFgTQgIgbgLgHIAJACQAPAGAOAUQAKANAGAMIADAIQAAABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAQgBADgDABQgFADgDAAIgLgIg");
	this.shape_308.setTransform(-429.1,170.8);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#EC672C").s().p("AAABNIgJgIQgLgNgEgRIgCgNQAJAKAMABQANAAAHgCQAGgDADgEIAGgEQgEAegIAQQgFAIgFADIgBABIgBAAQgCAAgEgFgAAXgaIgBgBIgEgDQgFgDgJgBQgHgBgIADQgIACgGAFIgEAEIACgLQADgPAGgNIAFgJQAFgGAHgDIADgCIACgBQAMAHAIAbIAEATIABAHIgGgFg");
	this.shape_309.setTransform(-432.5,170.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#372511").s().p("AAABLQgHgFgFgQQgJgYAAggQABggAIgVQAFgOAHgGQAEgEAHACQAEACADAEIgFAJQgGANgDAPIgCALQgCADgBAFQgDAHAAAIQAAAEACAGQACAGACAGIADACIACANQAEARALANQgGAHgFADIgFABQgEAAgCgDg");
	this.shape_310.setTransform(-435.8,171);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#41210C").s().p("AAAAkQgLgBgJgKIgDgCQgEgFgCgHQgCgGAAgFQAAgGADgIQACgFADgDIAEgEQAGgFAIgCQAGgCAJAAQAJACAFADIAEACIABABQAGAJgEAKQgCAGABAEIACALQABAJgDAFQgDAEgGADQgGACgLAAIgEAAg");
	this.shape_311.setTransform(-433.1,170.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgEABgGQAEgKgFgJIAFAFQAFADADAFQACAFABAHQAKACgEAAIgEACIgCAAQgBAJgDAFQgDAFgDACIgGAEQADgFgBgJgAAAAIQgDgBgDAAIgFABIAEgIQAEgEADgGIAFgIQAGgFACABIABACIgBACQgKAMAEgDIAKgJQALgIAAAEQgBADgLAOIAGgEIALgHQAHgBgKAJIgGAGIgCABIACgBIAEgCIAGgEQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIABACQgBAFgLAFIALgEIABAAIgCADQgEAEgIAEIgRAGIgCAAQABgGgEgDg");
	this.shape_312.setTransform(-426.5,170.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#FFF6CD").s().p("AAAAkQgLAAgJgKIgDgDQgEgFgCgGQgCgGAAgGQAAgHADgHQACgEADgEIAEgDQAGgGAIgCQAGgCAJABQAJAAAFAEIAEADIABABQAGAIgEALQgCAFABAEIACALQABAKgDAFQgDAEgGACQgGACgLAAIgEAAg");
	this.shape_313.setTransform(-433.1,152.5);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABABIABACIgGAHQgDAFgDAGQgEgFACgGg");
	this.shape_314.setTransform(-426.7,151.5);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgEABgGQAEgKgFgJIAFAFIAIAIQACAFABAHQAKABgEACIgEABIgCABQgBAHgDAGIgGAHIgGAFQADgGgBgJgAAAAIIgGgBIgFABIAEgHQAEgEADgHIAFgHQAGgGACACIABABIgBABQgKANAEgDIAKgIQALgIAAADQgBADgLAOQAAABAGgGQAJgFACAAQAHgCgKAJIgGAGIgCABIACgBIAEgCIAGgEIABAAIABADQgBAEgLAFIALgEIABABIgCACQgEAEgIAFIgRAFIgCABQABgIgEgCg");
	this.shape_315.setTransform(-426.5,152.5);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#393939").s().p("AgYBRQAFgDAEgIQAJgRADgdIAEgHIAEgEIAIgEIAFgBIAGABQAGACgBAHQAAAFgGALQgEAGgJAMQgOAUgNAHQgEADgDAAgAAFgSIgJgKIgFgTQgIgbgLgHQAEAAAFACQAPAGAOAUQAKANAGAMIADAIQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABIgEADQgFAEgDAAIgLgJg");
	this.shape_316.setTransform(-429.1,152.5);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#424242").s().p("AAABNQgHgFgCgDQgLgNgEgRIgCgNQAJAKAMAAQANAAAHgCQAGgCADgEIAGgEQgEAdgIAQQgFAJgFADIgBABIgBAAQgCAAgEgFgAAXgaIgBgBIgEgDQgFgEgJAAQgHgBgIACQgIACgGAGIgEADIACgLQADgOAGgNIAFgKQAFgFAHgEIADgCIACAAQAMAHAIAbIAEASIABAHIgGgEg");
	this.shape_317.setTransform(-432.5,152.5);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#372511").s().p("AAABMQgHgFgFgRQgJgYAAggQABghAIgUQAFgPAHgFQAEgEAHADQAEABADAEIgFAKQgGAMgDAOIgCALQgCAEgBAFQgDAHAAAIQAAAEACAGQACAHACAFIADACIACANQAEARALANQgGAHgFADIgFABQgEAAgCgCg");
	this.shape_318.setTransform(-435.8,152.6);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#EEC09E").s().p("AghANIgCgMQAAgEABgFQAEgKgFgJIAFAEIAIAJQACAEABAIQAKABgEABIgEABIgCABQgBAJgDAFIgGAIIgGADQADgFgBgJgAAAAIIgGgBIgFABIAEgIQAEgEADgFIAFgIQAGgGACABIABACIgBACQgKAMAEgDIAKgIQALgJAAADQgBAFgLANIAGgEQAJgHACAAQAHgCgKAKIgGAGIgCABIACgBIAEgDIAGgDQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAIABACQgBAEgLAGQALgEAAAAIABAAIgCACQgEAFgIAEIgRAGIgCAAQABgGgEgDg");
	this.shape_319.setTransform(-426.5,134.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAIABABIgGAHQgDAFgDAGQgEgFACgGg");
	this.shape_320.setTransform(-426.7,133.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AAAAjQgLAAgJgJIgDgDQgEgFgCgHQgCgFAAgGQAAgHADgHQACgEADgEIAEgEQAGgFAIgCQAGgCAJAAQAJABAFAEIAEACIABACQAGAIgEALQgCAFABAEIACALQABAJgDAGQgDAEgGABQgFADgKAAIgGgBg");
	this.shape_321.setTransform(-433.1,134.2);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#372511").s().p("AAABMQgHgFgFgQQgJgYAAghQABggAIgVQAFgPAHgFQAEgEAHADQAEABADAEIgFAKQgGAMgDAPIgCALQgCAEgBAEQgDAHAAAIQAAAFACAFQACAHACAFIADADIACANQAEARALANQgGAHgFACIgFABQgEAAgCgCg");
	this.shape_322.setTransform(-435.8,134.3);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#628DD1").s().p("AAABNIgJgIQgLgNgEgRIgCgNQAJAKAMAAQANABAHgDQAGgCADgEIAGgEQgEAdgIARQgFAIgFADIgBABIgBAAQgCAAgEgFgAAXgaIgBgBIgEgDQgFgEgJAAQgHgBgIACQgIADgGAFIgEADIACgLQADgOAGgNIAFgJQAFgGAHgEIADgCIACAAQAMAHAIAbIAEATIABAGIgGgEg");
	this.shape_323.setTransform(-432.5,134.1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#447BCD").s().p("AgYBRQAFgDAEgIQAJgRADgdIAEgHIAEgEQAEgDAEgBIAFgCIAGACQAGACgBAHQAAAGgGAJQgEAHgJAMQgOAUgNAHIgHADgAAFgTIgJgJIgFgTQgIgbgLgHIAJACQAPAGAOAUQAKANAGAMIADAIQAAABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAIgEAEQgFADgDAAIgLgJg");
	this.shape_324.setTransform(-429.1,134.1);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#E18F59").s().p("AAFAIIgFgEQgCgDgEAAQgCgGAEgFIAGAKIAGAIIgBABQAAABAAAAQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_325.setTransform(-441.9,194);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#EEC09E").s().p("AghAJQgCgGABgDIACgNQABgIgDgFIAFADIAGAIQAEAFAAAJIADABIAEAAQADACgKABQAAAHgDAFQgDAEgEAFIgGAEQAGgJgEgKgAASASIgKgJQgEgCAKAMIAAACIgBABQgCACgFgGIgGgIIgGgKIgFgHIAFABIAGgBQAFgCgBgIIABABIARAGQAJAEADAEIACACIAAAAIgMgDQALAFABAFIAAACIgCAAIgFgEIgEgDIgCAAIABAAIAHAHQAKAJgIgCQgCAAgIgGQgHgFAAABQAMANABAFIgBAAQgCAAgIgGg");
	this.shape_326.setTransform(-441.7,193);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#000000").s().p("AgFAiQgIgCgGgGIgEgDQgDgEgCgEQgDgHAAgIQAAgFACgGQACgGAEgFIADgDQAJgKALAAQAOAAAHACQAGACADAEQADAFgBAJIgCAMQgBAEACAFQAEALgGAIIgBABIgEADQgFAEgKAAIgFABIgJgCg");
	this.shape_327.setTransform(-448.3,193);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#628DD1").s().p("AACBSIgDgCQgHgEgFgFIgEgKQgHgNgDgOIgBgLIADADQAGAGAIACQAJACAFgBQAKAAAFgEIAEgDIABgBIAGgEIgBAHIgEASQgIAbgLAHgAAYgbQgDgEgFgCQgIgCgNAAQgMAAgJAKIACgNQAFgRAKgNQADgDAGgFQAFgFACAAIABABQAFADAFAJQAIAQADAdIgFgEg");
	this.shape_328.setTransform(-447.7,193);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#372511").s().p("AAABMQgHgFgFgPQgIgUgBghQAAggAJgYQAFgRAHgFQAEgEAHADQAFADAGAHQgLANgEARIgCANIgDACQgCAFgCAHQgCAGAAAEQAAAIADAHQABAFACAEIACALQADAOAGAMIAFAKQgDAEgEABIgFABQgEAAgCgCg");
	this.shape_329.setTransform(-451,192.8);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#447BCD").s().p("AgJAwIAFgSIAJgKIALgJQADgBAFAEIAEADQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgDAJQgGALgKANQgOAUgPAGIgJACQALgHAIgbgAANgIIgIgEIgEgEIgEgHQgDgdgJgQQgEgJgFgEIAAAAIAHADQANAHAOAUQAJALAEAIQAGAJAAAFQABAIgGACIgGACIgFgCg");
	this.shape_330.setTransform(-444.3,193);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#E18F59").s().p("AAFAIIgFgEQgCgDgEAAQgCgGAEgFIAGALIAGAHIgBACIgBABQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_331.setTransform(-441.9,156.2);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#EEC09E").s().p("AghAIQgCgEAAgFIACgLQACgJgEgGIAGAEIAGAHQAEAHAAAIIADAAIADABQAEACgKABQgBAHgCAFQgDAFgEADQgCADgEACQAGgIgEgMgAASASIgKgIQgEgDAKANIAAABQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgCABgFgFIgGgIIgGgLIgFgHQACABAEAAIAFAAQAFgEgBgHIABABQAHADAKADQAJAEAEAEIABACIAAABIgMgEQAMAGABAEIgBABIgBABIgGgEIgEgCIgCgBIABABIAHAFQAKAKgJgBIgJgHIgGgEQALAOABADIgBABQgCAAgIgGg");
	this.shape_332.setTransform(-441.7,155.1);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgFAiQgIgCgGgFIgEgEQgDgEgCgFQgEgHABgHQAAgEACgHQACgGAEgFIADgDQAJgJALgBQAOAAAHACQAFACADAEQAEAGgCAJIgCALQAAAEACAFQAEALgHAIIAAABQgBABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgGAEgJAAIgGABQgDAAgFgCg");
	this.shape_333.setTransform(-448.3,155.2);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#3A4D75").s().p("AgJAwIAEgTIAKgKIALgJQADABAFACIAEAEQABABAAAAQAAABAAAAQAAAAAAABQAAAAAAAAQAAAEgEAGQgFALgKANQgOAUgPAGQgFACgEAAQALgHAIgbgAANgIQgEgBgEgEIgEgEIgFgHQgCgdgJgQQgEgJgFgCIAAgBQADAAAEADQANAGAOAVIANASQAGAKAAAFQABAHgGAEIgGAAQgEAAgBgBg");
	this.shape_334.setTransform(-444.3,155.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_335.setTransform(-446.9,147);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#48608E").s().p("AACBSIgDgCQgHgEgEgGIgFgJQgHgNgDgPIgBgLIADAEQAGAGAIABQAIADAGgBQAJgBAHgEQAAAAABAAQAAAAABgBQAAAAAAAAQABgBAAAAIABgBQAEgCACgDIgBAHIgEATQgIAbgLAHIgBAAIgCAAgAAXgcQgCgDgFgCQgHgDgOABQgMAAgJAJQABgHACgFQAEgRAKgNQADgEAGgEQAFgFACAAIABABIABAAQAFACAEAJQAJAQACAdIgGgEg");
	this.shape_336.setTransform(-447.8,155.2);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#372511").s().p("AAABMQgHgFgGgPQgIgVAAggQAAggAIgYQAGgQAHgFQAEgFAGADQAGACAGAIQgLANgEARQgCAFAAAHIgDAEQgCAFgCAGQgCAGAAADQgBAJAEAHQABAFACADIACALQADAPAGANIAFAJQgEAEgEABIgFABQgDAAgCgCg");
	this.shape_337.setTransform(-451,155);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#372511").s().p("AAABLQgHgFgFgOQgIgVgBggQAAggAJgYQAFgQAHgGQAEgEAHADQAFADAGAHQgLANgEARIgCANIgDACQgCAGgCAGQgCAGAAAEQAAAIADAHQABAFACADIACALQADAOAGANIAFAKQgDADgEACIgFABQgEAAgCgDg");
	this.shape_338.setTransform(-451,136.3);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#E18F59").s().p("AAFAIQgCgCgDgCQgCgDgEAAQgCgGAEgFIAGAKIAGAIIgBABIgBACQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_339.setTransform(-441.9,137.4);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#41210C").s().p("AgFAiQgIgCgGgFIgEgEQgDgEgCgEQgDgIAAgHQAAgFACgFQACgHAEgFIADgCQAJgKALgBQAOAAAHACQAGACADAEQADAGgBAJIgCALQgBAEACAGQAEAKgGAJIgBABIgEACQgFADgKACIgCAAQgHAAgFgCg");
	this.shape_340.setTransform(-448.3,136.4);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#EC672C").s().p("AACBSIgDgCQgHgDgFgHIgEgJQgHgNgDgOIgBgLIADAEQAGAFAIACQAJACAFAAQAKgCAFgDIAEgDIABgBIAGgEIgBAGIgEAUQgIAagLAHgAAYgbQgDgEgFgCQgIgDgNABQgMABgJAJIACgNQAFgRAKgNIAJgIQAFgFACAAIABABQAFADAFAJQAIAPADAeIgFgEg");
	this.shape_341.setTransform(-447.7,136.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#EEC09E").s().p("AghAJQgCgGABgEIACgLQABgJgDgGIAFAFQAEACACAFQAEAFAAAJIADAAIAEABQADABgKACQAAAHgDAFQgDAEgEAEIgGAFQAGgJgEgKgAASATIgKgJQgEgDAKAMIAAACIgBACQgCABgFgFIgGgIIgGgLIgFgHIAFABQADAAADgBQAFgDgBgGIABAAIARAGQAJAEADAEIACACIAAAAQgBABgLgEQALAFABAEIAAADQAAAAgBAAQAAAAAAAAQAAAAAAAAQgBAAAAAAIgFgEIgEgCIgCgBIABABIAHAGQAKAJgIgCIgKgGIgHgEQAMANABAEQAAAAAAABQgBAAAAAAQAAAAAAAAQAAAAAAAAQgDAAgHgFg");
	this.shape_342.setTransform(-441.7,136.4);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#E64A00").s().p("AgJAxIAFgUQAEgDAFgHIALgJQADAAAFAEQADABABADQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAIgDAIQgGAMgKANQgOAUgPAGIgJACQALgHAIgagAASgHIgFgBIgIgEIgEgEQgBgFgDgCQgDgegJgQQgEgIgFgDIAAgBIAHACQANAHAOAVQAJALAEAIQAGAKAAAFQABAHgGACIgEABIgCAAg");
	this.shape_343.setTransform(-444.3,136.5);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_344.setTransform(-446.9,107.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABABIABABIgGAIIgGALQgEgFACgGg");
	this.shape_345.setTransform(-441.9,98.1);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgFACgEQAEgLgGgJIAGAFQAEAEADAEQACAFABAHQAKABgEABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDABQAAAHgEAHQgCAEgEADIgGAEQAEgGgCgJgAAAAIIgFgBIgGABIAFgHIAGgLIAGgIQAEgFADACIABABIAAACQgKAMAEgDIAKgIQALgIAAADQgBADgLAOIAGgEIAJgHQAJgBgKAKIgHAFIgBABIACAAIAEgDIAGgEIABABIABACQgBAEgMAFIAMgEIAAAAIgBADQgEAEgJAEIgRAGIgBABQABgHgFgDg");
	this.shape_346.setTransform(-441.7,99.1);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AAAAkQgLgBgJgJIgDgDIgGgLQgCgHAAgFQgBgHAEgHQACgEADgEIAEgEQAGgFAIgCQAFgDAJACQAJAAAGAEIAEADIAAAAQAHAJgEALQgCAEAAAFIACALQACAJgEAGQgDAEgFACQgFACgNAAIgDAAg");
	this.shape_347.setTransform(-448.3,99.1);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#4A7328").s().p("AgYBRQAFgDAEgIQAJgQACgeQAEgDABgEIAEgEIAIgEIAFgBIAGABQAGACgBAIQAAAFgGAKIgNASQgOAVgNAGQgEADgDAAgAAFgSIgKgKIgEgTQgIgbgLgHQAEAAAFACQAPAGAOAUQAKANAFALQAEAFAAAEQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgEADQgFADgDABIgLgJg");
	this.shape_348.setTransform(-444.3,99.1);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#609634").s().p("AAABNQgGgEgDgEQgKgNgEgRQgCgFgBgIQAJAKAMAAQAOABAHgDQAFgCACgEIAGgEQgCAegJAQQgEAIgFADIgBAAIgBABIAAAAQgCAAgFgFgAAXgaIgBgBIgDgCQgHgEgJgBQgGgBgIACQgIACgGAFIgDAEIABgLQADgOAHgNIAFgJQAEgGAHgEIADgCIADAAQALAHAIAbIAEATIABAGIgGgEg");
	this.shape_349.setTransform(-447.8,99.1);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#372511").s().p("AAABLQgHgFgGgQQgIgYAAggQAAghAIgUQAGgPAHgFQAEgEAGADQAEABAEAEIgFAJQgGANgDAOIgCALQgCAEgBAFQgEAHABAIQAAAEACAGIAEALIADADQAAAIACAFQAEARALANQgGAHgGADIgEABQgEAAgCgDg");
	this.shape_350.setTransform(-451,99.3);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABABIABABIgGAIIgGALQgEgFACgGg");
	this.shape_351.setTransform(-441.9,173);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#EEC09E").s().p("AghANIgCgLQAAgFACgEQAEgLgGgJIAGAFQAEAEADAEQACAFABAHQAKABgEABQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAIgDABQAAAHgEAHIgGAHIgGAEQAEgGgCgJgAAAAIIgFgBIgGABIAFgHIAGgLIAGgIQAEgFADACIABABIAAACQgKAMAEgDIAKgIQALgIAAADQgBADgLAOIAGgEIAJgHQAJgBgKAKIgHAFIgBABIACAAIAEgDIAGgEIABABIABACQgBAEgMAFIAMgEIAAAAIgBADQgEAEgJAEIgRAHIgBAAQABgHgFgDg");
	this.shape_352.setTransform(-441.7,174);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_353.setTransform(-446.9,182.1);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#000000").s().p("AAAAkQgLgBgJgJIgDgDQgEgFgCgGQgCgHAAgFQgBgGAEgIQACgEADgEIAEgEQAGgFAIgCQAFgDAJACQAJAAAGAEIAEADIAAAAQAHAJgEALQgCAEAAAFIACALQACAJgEAGQgDAEgFACQgFACgNAAIgDAAg");
	this.shape_354.setTransform(-448.3,174);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#372511").s().p("AAABLQgHgFgGgQQgIgYAAggQAAghAIgUQAGgPAHgFQAEgEAGADQAEABAEAEIgFAJQgGANgDAOIgCALQgCAEgBAFQgEAHABAIQAAAEACAGQACAGACAFIADADQAAAIACAFQAEARALANQgGAIgGACIgEABQgEAAgCgDg");
	this.shape_355.setTransform(-451,174.1);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#6BD3D2").s().p("AAABNQgGgEgDgEQgKgNgEgRQgCgFgBgIQAJAKAMAAQAOABAHgDQAFgCACgEIAGgDQgCAdgJAQQgEAIgFADIgBAAIgBABIAAAAQgCAAgFgFgAAXgaIgBgBIgDgCQgHgEgJgBQgGgBgIACQgIACgGAGIgDADIABgLQADgOAHgNIAFgJQAEgGAHgEIADgCIADAAQALAHAIAbIAEATIABAGIgGgEg");
	this.shape_356.setTransform(-447.8,173.9);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#5BB1B0").s().p("AgYBRQAFgDAEgIQAJgQACgdIAFgIIAEgEIAIgEIAFgBIAGABQAGADgBAHQAAAFgGAKIgNASQgOAVgNAGQgEADgDAAgAAFgSIgKgKIgEgTQgIgbgLgHQAEAAAFACQAPAGAOAUQAKANAFALQAEAFAAAEQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBABIgEAEQgFACgDABIgLgJg");
	this.shape_357.setTransform(-444.3,173.9);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDIAFgEQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABABIABACIgGAHIgGALQgEgFACgGg");
	this.shape_358.setTransform(-441.9,79.4);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#EEC09E").s().p("AggANIgCgLQgBgEACgGQAEgKgGgJIAGAFQAEAEADAEQADAEAAAIQAKACgDAAIgEACIgDAAQAAAJgEAFIgGAHIgFAEQADgFgBgJgAAAAIIgGgCIgFACIAFgIIAGgKIAGgIQAFgFACABIABACIAAABQgKANAEgDIAKgJQALgIAAAEQgBACgMAPIAHgFQAIgFACgBQAIgBgKAJIgHAGIgBABIACgBIAEgCIAFgEQAAAAABAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAAACQgBAEgLAGIAMgEIAAAAIgCADQgDAEgJAEIgRAGIgBAAQABgGgFgDg");
	this.shape_359.setTransform(-441.7,80.4);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#FFF6CD").s().p("AAAAjQgLAAgJgJIgDgDQgEgFgCgHQgCgGAAgFQAAgHADgHQACgEADgEIAEgEQAGgFAIgCQAGgCAIAAQAKABAFAEIAEACIABACQAGAIgEALQgCAFABAEIACALQABAJgDAGQgDADgGACQgFADgKAAIgGgBg");
	this.shape_360.setTransform(-448.3,80.4);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#393939").s().p("AgYBRQAFgDAEgIQAJgRADgdIAEgHIAEgEQAEgDAEgBIAFgCIAGACQAGACgBAHQAAAGgGAJQgEAHgJALQgOAVgNAHIgHADgAAFgTIgJgJIgFgTQgIgbgLgHQAEAAAFACQAPAGAOAUQAKANAGAMIADAIQAAABAAAAQAAAAAAAAQAAABAAAAQAAABgBAAIgEAEQgFADgDAAIgLgJg");
	this.shape_361.setTransform(-444.3,80.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#372511").s().p("AAABMQgHgFgFgQQgJgZAAggQABggAIgVQAFgPAHgFQAEgEAHADQAEABADAEIgFAKQgGAMgDAPIgCALQgCAEgBAEQgDAHAAAIQAAAEACAGQACAHACAFIADADIACANQAEARALANQgGAHgFACIgGABQgEAAgBgCg");
	this.shape_362.setTransform(-451,80.5);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#424242").s().p("AAABNIgJgIQgKgNgFgRIgCgNQAJAKAMAAQANABAIgDQAFgCADgEIAFgEQgDAdgIARQgFAIgFADIgBABIAAAAQgDAAgEgFgAAXgaIgBgBIgEgDQgFgEgKAAQgFgBgJACQgIADgGAFIgDADIABgLQADgOAHgNIAEgJQAFgGAHgEIADgCIADAAQALAHAIAbIAEATIABAGIgGgEg");
	this.shape_363.setTransform(-447.7,80.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#372511").s().p("AAABMQgHgFgFgRQgJgYAAggQABghAIgUQAFgPAHgFQAEgEAHADQAEABADAEIgFAKQgGAMgDAOIgCALQgCAEgBAFQgDAHAAAIQAAAEACAGQACAHACAFIADACIACANQAEARALANQgGAHgFADIgFABQgEAAgCgCg");
	this.shape_364.setTransform(-451,117.9);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#E18F59").s().p("AgGAAQAEAAACgDIAFgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQAAABAAAAQAAAAAAABIABABIgGAHIgGALQgEgFACgGg");
	this.shape_365.setTransform(-441.9,116.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#000000").s().p("AAAAkQgLAAgJgKIgDgDQgEgFgCgGQgCgGAAgGQAAgHADgHQACgEADgEIAEgDQAGgGAIgCQAGgCAIABQAKAAAFAEIAEADIABABQAGAIgEALQgCAFABAEIACAMQABAJgDAFQgDAEgGACQgGACgLAAIgEAAg");
	this.shape_366.setTransform(-448.3,117.8);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#628DD1").s().p("AAABNQgGgFgDgDQgKgNgFgRIgCgNQAJAKAMAAQANAAAIgCQAFgCADgEIAFgEQgDAdgIAQQgFAJgFADIgBABIAAAAQgDAAgEgFgAAXgaIgBgBIgEgDQgFgEgKAAQgFgBgJACQgIACgGAGIgDADIABgLQADgOAHgNIAEgKQAFgFAHgEIADgCIADAAQALAHAIAbIAEASIABAHIgGgEg");
	this.shape_367.setTransform(-447.7,117.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#447BCD").s().p("AgYBRQAFgDAEgJQAJgPADgeIAEgHIAEgEIAIgFIAFgBIAGABQAGADgBAHQAAAFgGAKQgEAIgJALQgOAVgNAGIgHADgAAFgTIgJgKIgFgSQgIgbgLgHIAJACQAPAGAOAUQAKANAGALIADAJQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBAAIgEAEQgFADgDAAIgLgJg");
	this.shape_368.setTransform(-444.3,117.8);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#EEC09E").s().p("AggANIgCgMQgBgDACgFQAEgLgGgIIAGADQAEAFADAEQADAEAAAIQAKACgDABIgEAAIgDABQAAAIgEAHIgGAHIgFADQADgEgBgKgAAAAIIgGgBIgFABIAFgHIAGgKIAGgIQAFgGACABIABACIAAACQgKAMAEgCIAKgJQALgIAAACQgBAFgMANQAAABAHgFQAIgGACAAQAIgCgKAKIgHAGIgBAAIACAAIAEgDIAFgDIACAAIAAABQgBAEgLAGIAMgEIAAABIgCACQgDAEgJAEIgRAGIgBABQABgHgFgDg");
	this.shape_369.setTransform(-441.7,117.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_370.setTransform(-446.9,34.7);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#372511").s().p("AAABMQgHgFgGgPQgIgUAAghQAAggAIgYQAGgQAHgFQAEgFAGADQAGADAGAHQgLANgEARQgCAFAAAIIgDADIgEALQgCAGAAAEQgBAIAEAHQABAFACAEIACALQADAOAGANIAFAJQgEAEgEABIgFABQgDAAgCgCg");
	this.shape_371.setTransform(-451,42.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#E18F59").s().p("AAFAIIgFgEQgCgDgEAAQgCgGAEgFIAGALIAGAIIgBABIgBABQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_372.setTransform(-441.9,43.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#609634").s().p("AACBSIgDgCQgHgEgEgGIgFgJQgHgNgDgOIgBgLIADAEQAGAFAIACQAIACAGgBQAJgBAHgEIADgCIABgBIAGgEIgBAGIgEATQgIAbgLAHIgBAAIgCAAgAAXgbQgCgEgFgCQgHgDgOABQgMAAgJAKQABgIACgFQAEgRAKgNQADgEAGgEQAFgFACAAIABABIABAAQAFADAEAIQAJAQACAeIgGgEg");
	this.shape_373.setTransform(-447.8,42.9);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#000000").s().p("AgFAiQgIgCgGgFIgEgEQgDgEgCgEQgEgHABgIQAAgEACgHIAGgLIADgDQAJgJALgBQAOAAAHACQAFACADAEQAEAGgCAJIgCALQAAAFACAEQAEALgHAJIAAAAIgEADQgGAEgJAAIgGABQgDAAgFgCg");
	this.shape_374.setTransform(-448.3,42.9);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#4A7328").s().p("AgJAwIAEgTIAKgKIALgJQADABAFADIAEADQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAEgEAFQgFALgKANQgOAUgPAGQgFACgEAAQALgHAIgbgAANgIIgIgEIgEgEQgBgEgEgDQgCgegJgQQgEgIgFgDIAAgBQADAAAEADQANAGAOAVIANASQAGAKAAAFQABAIgGACIgGABIgFgBg");
	this.shape_375.setTransform(-444.3,42.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#EEC09E").s().p("AghAIQgCgEAAgFIACgLQACgJgEgGIAGAEQAEADACAEQAEAHAAAHIADABQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAEACgKABQgBAHgCAFQgDAEgEAEIgGAFQAGgJgEgLgAASASIgKgIQgEgDAKAMIAAACIgBABQgCACgFgFIgGgIIgGgLIgFgHIAGABIAFgBQAFgDgBgHIABABIARAGQAJAEAEAEIABACIAAAAIgMgDQAMAFABAEIgBACIgBABIgGgEIgEgDIgCAAIABABIAHAFQAKAKgJgBIgJgHIgGgEQALAOABADIgBABQgCAAgIgGg");
	this.shape_376.setTransform(-441.7,42.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#E18F59").s().p("AAFAIIgFgEQgCgDgEAAQgCgGAEgFIAGALIAGAIIgBABIgBABQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_377.setTransform(-441.9,-31);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#EEC09E").s().p("AghAIQgCgEAAgFIACgLQACgJgEgGIAGAEIAGAHQAEAHAAAHIADABQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAEACgKABQgBAHgCAFQgDAEgEAEIgGAFQAGgJgEgLgAASASIgKgIQgEgDAKAMIAAACIgBABQgCACgFgFIgGgIIgGgLIgFgHIAGABIAFgBQAFgDgBgHIABAAIARAHQAJAEAEAEIABACIAAAAIgMgDQAMAFABAEIgBACIgBABIgGgEIgEgDIgCAAIABABIAHAFQAKAKgJgBIgJgHIgGgEQALAOABADIgBABQgCAAgIgGg");
	this.shape_378.setTransform(-441.7,-32);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgFAiQgIgCgGgFIgEgEQgDgEgCgEQgEgIABgHQAAgEACgHQACgGAEgFIADgDQAJgJALgBQAOAAAHACQAFACADAEQAEAGgCAJIgCALQAAAFACAEQAEALgHAJIAAAAIgEADQgGAEgJAAIgGABQgDAAgFgCg");
	this.shape_379.setTransform(-448.3,-32);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#5BB1B0").s().p("AgJAwIAEgTIAKgKIALgJQADABAFACIAEAEQABABAAAAQAAABAAAAQAAABAAAAQAAAAAAABQAAAEgEAFQgFALgKANQgOAUgPAGQgFACgEAAQALgHAIgbgAANgIIgIgEIgEgEIgFgIQgCgdgJgQQgEgIgFgDIAAgBQADAAAEADQANAGAOAVIANASQAGAKAAAFQABAHgGADIgGABIgFgBg");
	this.shape_380.setTransform(-444.3,-31.9);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#6BD3D2").s().p("AACBSIgDgCQgHgEgEgGIgFgJQgHgNgDgOIgBgLIADADQAGAGAIACQAIACAGgBQAJgBAHgEIADgCIABgBIAGgEIgBAGIgEATQgIAbgLAHIgBAAIgCAAgAAXgbQgCgEgFgCQgHgDgOABQgMAAgJAKQABgIACgFQAEgRAKgNQADgEAGgEQAFgFACAAIABABIABAAQAFADAEAIQAJAQACAdIgGgDg");
	this.shape_381.setTransform(-447.8,-31.9);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_382.setTransform(-446.9,-40.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#372511").s().p("AAABMQgHgFgGgPQgIgUAAghQAAggAIgYQAGgQAHgFQAEgFAGADQAGADAGAHQgLANgEARQgCAFAAAIIgDADQgCAFgCAGQgCAGAAAEQgBAIAEAHQABAFACAEIACALQADAOAGANIAFAJQgEAEgEABIgFABQgDAAgCgCg");
	this.shape_383.setTransform(-451,-32.1);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#E18F59").s().p("AAFAIIgFgEIgGgEQgCgFAEgFIAGAKIAGAIIgBACIgBABQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_384.setTransform(-441.9,62.6);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#EEC09E").s().p("AghAIQgCgEAAgFIACgLQACgJgEgGIAGAEQAEADACAEQAEAHAAAIIADAAQABAAAAABQABAAAAAAQABAAAAAAQAAAAAAAAQAEACgKABQgBAHgCAFQgDAEgEAEIgGAFQAGgJgEgLgAASASIgKgIQgEgDAKAMIAAACQAAABAAAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgCABgFgFIgGgIIgGgLIgFgHQACABAEAAIAFgBQAFgDgBgHIABABIARAGQAJAEAEAEIABACIAAABIgMgEQAMAFABAEIgBACIgBABIgGgEQgEgCAAgBIgCAAIABABIAHAFQAKAKgJgBIgJgHIgGgEQALAOABADIgBABQgCAAgIgGg");
	this.shape_385.setTransform(-441.7,61.6);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#000000").s().p("AgFAiQgIgCgGgFIgEgEQgDgEgCgEQgEgHABgIQAAgEACgGQACgGAEgGIADgDQAJgJALgBQAOAAAHACQAFACADAEQAEAGgCAJIgCALQAAAFACAEQAEALgHAJIAAAAIgEADQgGAEgJABIgFAAQgEAAgFgCg");
	this.shape_386.setTransform(-448.3,61.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#3A4D75").s().p("AgJAwIAEgTIAKgJIALgKIAIAEIAEAEQABAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABQAAAEgEAFQgFALgKAOQgOATgPAGQgFACgEAAQALgHAIgbgAANgIIgIgEIgEgEQgBgEgEgDQgCgegJgQQgEgIgFgDIAAgBQADAAAEADQANAHAOAUIANATQAGAJAAAGQABAHgGADIgGABQgEAAgBgCg");
	this.shape_387.setTransform(-444.3,61.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_388.setTransform(-446.9,53.5);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#48608E").s().p("AACBSIgDgCQgHgDgEgHIgFgJQgHgNgDgOIgBgLIADAEQAGAFAIACQAIACAGgBQAJgBAHgDIADgDIABgBIAGgEIgBAGIgEATQgIAbgLAHIgBAAIgCAAgAAXgbQgCgEgFgCQgHgDgOABQgMABgJAJQABgHACgGQAEgRAKgNIAJgIQAFgFACAAIABABIABAAQAFADAEAIQAJAQACAeIgGgEg");
	this.shape_389.setTransform(-447.8,61.6);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#372511").s().p("AAABMQgHgGgGgOQgIgVAAggQAAggAIgZQAGgPAHgFQAEgGAGAEQAGACAGAHQgLANgEASQgCAFAAAHIgDADQgCAGgCAGQgCAGAAADQgBAJAEAHQABAEACAEIACALQADAPAGANIAFAJQgEAEgEABIgFABQgEAAgBgCg");
	this.shape_390.setTransform(-451,61.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#E18F59").s().p("AAFAIQgCgDgDgBQgCgDgEAAQgCgHAEgEIAGAKIAGAIIgBABIgBACQAAAAAAAAQAAgBAAAAQAAgBAAAAQgBAAAAgBg");
	this.shape_391.setTransform(-441.9,-12.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#EEC09E").s().p("AghAIQgCgFABgEIACgLQABgJgDgGIAFAFQAEACACAEQAEAHAAAIIADAAIAEABQADABgKACQAAAHgDAFQgDAFgEADIgGAEQAGgIgEgLgAASASIgKgIQgEgDAKAMIAAACIgBACQgCABgFgGIgGgIIgGgKIgFgHIAFAAQADABADgBQAFgDgBgHIABABIARAGQAJADADAFIACACIAAAAIgMgDQALAFABAEIAAACIgCAAIgFgCIgEgDIgCgCIABACIAHAFQAKAKgIgCIgKgGIgHgEQAMANABAEIgBABQgDAAgHgGg");
	this.shape_392.setTransform(-441.7,-13.3);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#41210C").s().p("AgFAiQgIgCgGgGIgEgDQgDgDgCgFQgDgIAAgHQAAgFACgFQACgHAEgFIADgDQAJgJALgBQAOAAAHACQAGADADADQADAGgBAJIgCALQgBAEACAFQAEALgGAIIgBABIgEAEQgFADgKABIgCAAQgHAAgFgCg");
	this.shape_393.setTransform(-448.3,-13.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#372511").s().p("AAABLQgHgFgFgOQgIgVgBggQAAggAJgYQAFgQAHgGQAEgEAHADQAFADAGAHQgLANgEARIgCANIgDACQgCAFgCAHQgCAGAAAEQAAAHADAIQABAFACADIACALQADAOAGANIAFAJQgDAEgEACIgFABQgEAAgCgDg");
	this.shape_394.setTransform(-451,-13.4);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#E64A00").s().p("AgJAwIAFgTIAJgKIALgJQADABAFADQADABABADQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgDAIQgGAMgKANQgOAVgPAFIgJACQALgHAIgbgAASgHIgFAAIgIgFIgEgEQgBgEgDgDQgDgegJgQQgEgIgFgDIAAgBIAHADQANAGAOAVQAJALAEAIQAGAJAAAGQABAHgGADIgEAAIgCAAg");
	this.shape_395.setTransform(-444.3,-13.2);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#EC672C").s().p("AACBSIgDgCQgHgEgFgGIgEgJQgHgNgDgOIgBgLIADADQAGAGAIACQAJACAFAAQAKgCAFgDIAEgDIABgBIAGgEIgBAGIgEAUQgIAagLAHgAAYgbQgDgEgFgCQgIgDgNABQgMAAgJAKIACgNQAFgRAKgNIAJgIQAFgFACAAIABABQAFADAFAJQAIAPADAeIgFgEg");
	this.shape_396.setTransform(-447.7,-13.3);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#E18F59").s().p("AAFAIIgFgEQgCgDgEAAQgCgGAEgFIAGAKIAGAIIgBACIgBABQAAAAAAAAQAAgBAAAAQAAAAAAgBQgBAAAAgBg");
	this.shape_397.setTransform(-441.9,6.4);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#FFF6CD").s().p("AgFAiQgIgCgGgFIgEgEQgDgEgCgEQgDgHAAgIQAAgFACgFQACgHAEgFIADgDQAJgJALAAQAOgBAHADQAGABADAEQADAGgBAJIgCALQgBAEACAFQAEALgGAIIgBACIgEACQgFAEgKABIgDAAQgGAAgFgCg");
	this.shape_398.setTransform(-448.3,5.4);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#EEC09E").s().p("AghAIQgCgEABgEIACgLQABgKgDgFIAFADIAGAHQAEAHAAAIIADABIAEAAQADACgKABQAAAIgDAEQgDAFgEAEIgGADQAGgIgEgLgAASASIgKgIQgEgDAKAMIAAACIgBACQgCABgFgGIgGgIIgGgKIgFgHIAFABIAGgBQAFgDgBgHIABABIARAGQAJAFADAEIACABIAAAAQgBABgLgEQALAGABAEIAAABQAAABgBAAQAAAAAAAAQAAAAAAAAQgBAAAAgBIgFgCIgEgDIgCgBIABABIAHAFQAKALgIgCQgCAAgIgHIgHgEQAMAOABAEIgBABQgDAAgHgHg");
	this.shape_399.setTransform(-441.7,5.4);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#393939").s().p("AgJAwIAFgSIAJgKIALgJQADgBAFAEIAEAEQABAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgDAJQgGAMgKANQgOATgPAHIgJABQALgHAIgbgAANgHQgEgCgEgDIgEgEIgEgHQgDgdgJgQQgEgJgFgDIAAgBIAHAEQANAGAOAVQAJALAEAHQAGAKAAAFQABAHgGADIgGABIgFgBg");
	this.shape_400.setTransform(-444.3,5.5);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#424242").s().p("AACBSIgDgBQgHgEgFgGIgEgKQgHgMgDgPIgBgLIADAEQAGAFAIACQAJACAFAAQAKgBAFgEIAEgCIABgCIAGgEIgBAHIgEATQgIAagLAHgAAYgbQgDgEgFgBQgIgDgNABQgMAAgJAJIACgNQAFgRAKgNIAJgIQAFgFACAAIABABQAFADAFAJQAIAQADAdIgFgEg");
	this.shape_401.setTransform(-447.7,5.4);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#372511").s().p("AAABMQgHgFgFgPQgIgUgBghQAAggAJgYQAFgQAHgGQAEgEAHADQAFADAGAHQgLANgEARIgCANIgDACQgCAGgCAGQgCAGAAAEQAAAIADAHQABAFACAEIACALQADAOAGANIAFAJQgDAEgEABIgGABQgEAAgBgCg");
	this.shape_402.setTransform(-451,5.3);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#372511").s().p("AAABMQgHgFgFgPQgIgUgBghQAAggAJgYQAFgRAHgFQAEgEAHADQAFACAGAIQgLANgEAQIgCANIgDADQgCAFgCAHQgCAGAAADQAAAJADAHQABAFACADIACAMQADAOAGAMIAFAKQgDAEgEABIgFABQgEAAgCgCg");
	this.shape_403.setTransform(-451,24);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#E18F59").s().p("AAFAIIgFgEQgCgDgEAAQgCgGAEgFIAGAKIAGAIIgBABQAAABAAAAQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_404.setTransform(-441.9,25.2);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#628DD1").s().p("AACBSIgDgCQgHgEgFgGIgEgJQgHgNgDgOIgBgLIADADQAGAFAIADQAJACAFgBQAKAAAFgEIAEgDIABgBIAGgEIgBAGIgEATQgIAbgLAHgAAYgbQgDgEgFgCQgIgCgNAAQgMAAgJAKIACgNQAFgRAKgNQADgDAGgFQAFgGACABIABABQAFADAFAIQAIARADAdIgFgEg");
	this.shape_405.setTransform(-447.7,24.2);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#447BCD").s().p("AgJAwIAFgTIAJgKIALgJQADAAAFADIAEAFQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAIgDAIQgGAMgKANQgOAUgPAGIgJACQALgHAIgbgAANgIQgEgBgEgEIgEgDIgEgIQgDgcgJgRQgEgJgFgCIAAgBIAHACQANAIAOATQAJANAEAGQAGAKAAAGQABAGgGADIgGABIgFgBg");
	this.shape_406.setTransform(-444.3,24.2);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#000000").s().p("AgFAiQgIgDgGgFIgEgDQgDgEgCgEQgDgIAAgHQAAgFACgGQACgGAEgFIADgDQAJgKALAAQAOAAAHACQAGACADAEQADAFgBAJIgCAMQgBAEACAFQAEAKgGAJIgBABIgEADQgFAEgKAAIgEABIgKgCg");
	this.shape_407.setTransform(-448.3,24.2);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#EEC09E").s().p("AghAJQgCgFABgEIACgMQABgJgDgFIAFADIAGAIQAEAFAAAJIADABIAEAAQADABgKACQAAAHgDAGQgDAEgEADIgGAFQAGgJgEgKgAASATIgKgJQgEgCAKAMIAAABIgBACQgCABgFgFIgGgJIgGgKIgFgHIAFABIAGgBQAFgDgBgGIABAAIARAGQAJAEADAEIACACIAAABIgMgEQALAGABAEIAAACIgCAAIgFgEIgEgCQgBAAAAgBQAAAAgBAAQAAAAAAAAQAAAAAAAAIABABIAHAGQAKAKgIgCQgCgBgIgGIgHgEQAMAOABADIgBACQgDAAgHgGg");
	this.shape_408.setTransform(-441.7,24.1);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#9F3D3D").s().p("AgsU6IAAhPIA7gEMAAAgnEIg7gIIAAhQQAXgQBChiMAAAAtPQhLhmgOgIg");
	this.shape_409.setTransform(-393.4,84.4);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#D9D9D9").s().p("AgoWoMAAAgtPIBQAAMAAAAtPg");
	this.shape_410.setTransform(-384.7,84.4);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#985E2F").s().p("AkMz3IB4ATMAAAAm8Ih4AhgAhrzcIBnARMAAAAl8IhnAcgAAkzFIBqARMAAAAk8IhqAegAC4ytIBDALMAASAkHIhVAYg");
	this.shape_411.setTransform(-427,82.7);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#402913").s().p("AimzdIAqAHMAAAAmpIgqAMgAgVzFIAnAGMAAAAlrIgnALgAB9ytIAqAHMAAAAkpIgqAMg");
	this.shape_412.setTransform(-425.2,82);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#838383").s().p("Ak1T0IB4ggIAqgMIBmgcIAqgLIBogdIAqgMIBWgXMgASgkHIhEgLIgqgHIhogRIgqgHIhmgRIgqgHIh4gUIAAghIIuBGIA9AHMAAAAnEIg9AEIouAmg");
	this.shape_413.setTransform(-422.9,83.1);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#646262").s().p("Agq0lIBVALIAAAhMAAAAnwIAAAqIhVAFg");
	this.shape_414.setTransform(-458.3,82.8);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FAFAFD").s().p("AlwWoIAAiSIBXgGIIuglIAABPQAOAIBNBmgAkZ0qIhXgLIAAhyILgAAQhEBigXAQIAABQg");
	this.shape_415.setTransform(-425.7,84.4);

	this.instance_21 = new lib.Tree("synched",0);
	this.instance_21.setTransform(-410.2,-75.2,0.315,0.315,-87.8);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_416.setTransform(410.4,-56.9);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#000000").s().p("AgUAiQgFgCgDgEQgEgGACgJIACgLQAAgFgCgEQgEgLAHgJIAAAAIAEgDQAGgEAJgBQAIgBAGADQAIACAGAFIAEAEQADAEACAEQAEAHgBAHQAAAFgCAGQgCAGgEAGIgDADQgJAJgLABIgDAAQgNAAgFgCg");
	this.shape_417.setTransform(411.8,-65.1);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#6BD3D2").s().p("AgGBSIgBgBIgBAAQgFgDgEgIQgJgQgCgeIAFAEQADAEAFACQAHADAOgBQAMgBAJgJQgBAHgCAGQgEARgKANIgJAIQgFAFgCAAIAAAAgAAagaQgGgFgIgCQgIgCgGABQgJABgHADIgDADIgBABIgGAEIABgGIAEgTQAIgbALgHQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAIACACQAIAEAEAGIAFAJQAHANACAOIACALIgDgEg");
	this.shape_418.setTransform(411.2,-65.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#372511").s().p("AgKBNQgFgCgGgHQALgNAEgSQACgFAAgHIADgDQACgGACgGQACgGAAgEQABgIgEgHQgCgEgBgEIgCgLQgDgPgGgNIgFgJQAEgEADgBQAHgDAEAEQAHAGAGAPQAIAUAAAgQAAAggIAZQgGAPgHAFQgCADgEAAIgFgBg");
	this.shape_419.setTransform(414.5,-65);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#EEC09E").s().p("AAeAYQgEgDgCgEQgEgHAAgIIgDAAQAAAAgBgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgDgBAJgBIADgMIAHgIIAHgFQgHAJAEALQACAEAAAFIgCALQgCAJAEAGIgGgEgAgEARIgRgGQgJgEgEgEIgBgDIAAAAIAMAEQgLgFgBgEIAAgCIABgBIAGAEQAEACAAABIACAAIgBgBIgHgFQgKgKAIABIAKAHIAHAEQgMgOgBgDQAAgDALAIIAKAIQAEADgKgMIAAgCIABgCQADgBAEAFIAFAIIAHALIAFAHQgCgBgDAAQgEAAgCABQgFADABAHIgBgBg");
	this.shape_420.setTransform(405.2,-65.1);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#5BB1B0").s().p("AASBPQgNgHgOgUIgNgTQgGgJAAgGQgBgHAGgCQADgCADAAQADAAACACIAIAEIAEAEQABAEAEADQACAeAJAQQAEAIAFADIAAABQgDAAgEgDgAgXgNIgEgEQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAgEADgFQAGgLAKgOQAOgTAPgGQAFgCAEAAQgLAHgIAbIgEATIgKAJIgLAKIgIgEg");
	this.shape_421.setTransform(407.7,-65.1);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#E18F59").s().p("AgBAAIgGgIIABgBIABgBQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAABIAEAEIAHADQACAGgEAFIgGgLg");
	this.shape_422.setTransform(405.4,-66.1);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_423.setTransform(410.4,16.7);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#E18F59").s().p("AgBAAIgGgIIABgBIABgBQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAIAEAEQADADAEAAQACAGgEAFIgGgLg");
	this.shape_424.setTransform(405.4,7.5);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#4A7328").s().p("AASBPQgNgGgOgVIgNgSQgGgKAAgFQgBgHAGgDIAGgBIAFABIAIAEIAEAEIAFAIQACAdAJAQQAEAIAFADIAAABQgDAAgEgDgAgXgMIgEgEQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAgDADgGQAGgLAKgNQAOgUAPgGQAFgCAEAAQgLAHgIAbIgEATIgKAKIgLAJQgDgBgFgCg");
	this.shape_425.setTransform(407.7,8.5);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgEgHAAgHIgDgBQAAAAgBgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgDgBAJgBIADgMIAHgIIAHgFQgHAJAEALQACAEAAAFIgCALQgCAJAEAGIgGgEgAgEASIgRgHQgJgEgEgEIgBgDIAAAAIAMAEQgLgFgBgEIAAgCIABgBIAGAEIAEADIACAAIgBgBIgHgFQgKgKAIABIAKAHIAHAEQgMgOgBgDQAAgDALAIIAKAIQAEADgKgMIAAgCIABgBQADgCAEAFIAFAIIAHALIAFAHIgFgBIgGABQgFADABAHIgBAAg");
	this.shape_426.setTransform(405.2,8.5);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#000000").s().p("AgUAiQgFgCgDgEQgEgGACgJIACgLQAAgFgCgEQgEgLAHgJIAAAAIAEgDQAGgEAJAAQAIgCAGADQAIACAGAFIAEAEQADAEACAEQAEAIgBAGQAAAFgCAHQgCAGgEAFIgDADQgJAJgLABIgDAAQgNAAgFgCg");
	this.shape_427.setTransform(411.8,8.5);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#609634").s().p("AgGBSIgBgBIgBAAQgFgDgEgIQgJgQgCgdIAFADQADAEAFACQAHADAOgBQAMAAAJgKQgBAIgCAFQgEARgKANQgDAEgGAEQgFAFgCAAIAAAAgAAagZQgGgGgIgCQgIgCgGABQgJABgHAEIgDACIgBABIgGAEIABgGIAEgTQAIgbALgHIADAAIACACQAIAEAEAGIAFAJQAHANACAOIACALIgDgDg");
	this.shape_428.setTransform(411.2,8.5);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#372511").s().p("AgKBNQgFgCgGgIQALgNAEgRQACgFAAgIIADgDQACgFACgGQACgGAAgEQABgIgEgHQgCgFgBgEIgCgLQgDgOgGgNIgFgJQAEgEADgBQAHgDAEAEQAHAFAGAPQAIAUAAAhQAAAggIAYQgGAQgHAFQgCADgEAAIgFgBg");
	this.shape_429.setTransform(414.5,8.7);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQACADACABQADADAEAAQACAGgEAFIgGgLg");
	this.shape_430.setTransform(405.4,-102.8);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#EEC09E").s().p("AAeAXQgDgCgDgFQgDgFgBgJIgCAAIgEgCQgEAAAKgCQABgHACgFQADgEAFgEIAFgFQgFAJAEAKQABAFAAAFIgCALQgBAJADAGIgGgFgAgEARIgRgGQgIgEgEgEIgCgDIABAAQAAAAALAEQgLgFgBgEIABgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAGAEIAEACIACABIgCgBIgGgGQgLgJAIACIALAGIAGAEQgMgNAAgEQAAgEALAIIAKAJQAEADgKgMIgBgCIABgCQACgBAGAFIAEAIIAIALIAEAHIgFgBQgDAAgDABQgEADABAGIgCAAg");
	this.shape_431.setTransform(405.1,-101.7);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#E64A00").s().p("AASBPQgNgGgOgVQgJgMgEgHQgGgJAAgGQgBgHAGgCQADgCADABIAFABIAIAEIAEAEQABAFADACQADAeAJAQQAEAIAFADIAAABIgHgDgAgXgNQgDgBgBgDQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIADgIQAGgMAKgNQAOgUAPgGIAJgCQgLAHgIAbIgFATQgEADgFAHIgLAIQgDAAgFgDg");
	this.shape_432.setTransform(407.7,-101.8);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#41210C").s().p("AgUAiQgGgCgDgEQgDgGABgJIACgLQABgFgCgFQgEgKAGgJIABgBIAEgCQAFgDAJgCQAJAAAGACQAIACAGAFIAEAEQADAEACAEQADAIAAAGQAAAGgCAFQgCAHgEAFIgDACQgJAKgMABIgDAAQgLAAgGgCg");
	this.shape_433.setTransform(411.8,-101.7);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#EC672C").s().p("AgGBSIgBgBQgFgDgFgIQgIgQgEgeIAGAEQADAEAGADQAHACANAAQAMgBAJgKIgCANQgEARgLANIgJAIQgEAFgCAAIgBAAgAAagZQgGgFgIgCQgIgDgHABQgJABgFADIgEADIgBABIgGAFIABgHIAEgTQAIgbAMgHIACABIADACQAHADAFAGIAFAJQAGANADAPIACALIgEgEg");
	this.shape_434.setTransform(411.2,-101.8);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#372511").s().p("AgKBNQgFgDgGgHQALgNAEgRIACgNIADgCQACgGACgGQACgGAAgEQAAgIgDgHQgCgFgBgDIgCgLQgDgPgGgNIgFgJQADgEAEgCQAHgCAEAEQAHAGAFAOQAIAVABAgQAAAggJAYQgFAQgHAFQgCADgEAAIgFgBg");
	this.shape_435.setTransform(414.5,-101.6);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#E18F59").s().p("AgGAKIgBgCIAGgIIAGgKQAEAFgCAGQgEAAgDADIgEAEQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBgBg");
	this.shape_436.setTransform(405.4,-192.5);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#EEC09E").s().p("AAfAYIgIgJQgCgEgBgIQgKgBAEgCIAEAAIACgBQABgIADgHIAGgHIAGgDQgDAEABALIACALQAAAEgBAEQgEALAFAIIgFgDgAgbAYQAAgEAMgOIgGAEQgJAHgCAAQgIACALgLIAGgGIACAAIgCAAIgEAEIgGACIgBAAIgBgBQABgFALgFIgLADIgBAAIACgCIAMgIIARgGIACgBQgBAHAEADQADACADgBIAFgBIgEAHIgIAKIgEAIQgGAGgCgBIgBgCIABgCQAKgMgEADIgKAIQgIAGgCAAIgBAAg");
	this.shape_437.setTransform(405.1,-193.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#FFF6CD").s().p("AgJAkQgJgBgFgEIgEgDIgBgBQgGgIAEgLQACgFgBgEIgCgLQgBgKADgFQADgEAGgCQAHgCANAAQAMAAAJAKIADADQAEAFACAGQACAGAAAFQAAAIgDAHQgCAEgDAEIgEADQgGAGgIACQgGACgFAAIgEAAg");
	this.shape_438.setTransform(411.8,-193.5);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#372511").s().p("AgKBNQgEgBgDgEIAFgKQAGgMADgOIACgLQABgEACgFQADgHAAgIQAAgEgCgGQgCgHgCgFIgDgCIgCgNQgEgRgLgNQAGgHAFgDQAHgDAEAEQAHAGAFAQQAJAYAAAgQgBAhgIAUQgFAPgHAFQgCACgEAAIgFgBg");
	this.shape_439.setTransform(414.5,-193.6);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#424242").s().p("AgDBSQgMgHgIgaIgEgTIgBgHIAGAEIABABIAEADQAFAEAJABQAHAAAIgCQAIgCAGgGIAEgDIgCALQgDAPgGAMIgFAKQgFAGgHADIgDACgAgRhEQAFgJAFgDIABgBQACAAAFAFIAJAIQALANAEARIACANQgJgKgMAAQgNAAgHACQgGACgDAEIgGAEQAEgdAIgQg");
	this.shape_440.setTransform(411.2,-193.5);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#393939").s().p("AAUBQQgPgFgOgVQgKgNgGgLIgDgJQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAIAEgEQAFgEADABIALAJIAJAKIAFASQAIAbALAHQgEAAgFgCgAgXgHQgGgDABgIQAAgEAGgKQAEgHAJgLQAOgVANgGQAEgDADgBIAAAAQgFAEgEAJQgJAPgDAeIgEAHIgEAEIgIAFIgFABQgDAAgDgBg");
	this.shape_441.setTransform(407.7,-193.4);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgUAiQgGgCgDgEQgDgGABgJIACgLQABgEgCgFQgEgLAGgIIABgCIAEgCQAFgEAJgBQAJAAAGACQAIACAGAFIAEAEQADAEACAEQADAHAAAHQAAAGgCAFQgCAHgEAFIgDADQgJAJgMAAIgGABQgJAAgFgCg");
	this.shape_442.setTransform(411.8,-211.7);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#628DD1").s().p("AgGBSIgBgBQgFgDgFgJQgIgQgEgdIAGAEQADAEAGACQAHACANgBQAMAAAJgJIgCANQgEARgLANIgJAIQgEAFgCAAIgBAAgAAagaQgGgFgIgCQgIgCgHAAQgJABgFAEIgEACIgBACIgGAEIABgHIAEgTQAIgaAMgHIACAAIADACQAHADAFAGIAFAKQAGAMADAPIACALIgEgEg");
	this.shape_443.setTransform(411.2,-211.7);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#372511").s().p("AgKBNQgFgDgGgHQALgNAEgRIACgNIADgCQACgGACgGQACgGAAgEQAAgIgDgHQgCgFgBgEIgCgLQgDgOgGgMIgFgKQADgEAEgBQAHgDAEAEQAHAFAFAPQAIAUABAhQAAAggJAYQgFAQgHAGQgCACgDAAIgGgBg");
	this.shape_444.setTransform(414.5,-211.6);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#EEC09E").s().p("AAeAXIgGgGQgDgHgBgIIgCgBIgEgBQgEgBAKgCQABgGACgFIAIgJIAFgDQgFAIAEALQABAFAAADIgCAMQgBAJADAGIgGgFgAgEARIgRgGQgIgFgEgEIgCgCIABAAQAAAAALAEQgLgGgBgEIABgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAABIAGACIAEADIACABIgCgBIgGgFQgLgKAIACQACgBAJAHIAGAEQgMgOAAgEQAAgDALAJIAKAIQAEACgKgLIgBgCIABgCQACgBAGAGIAEAIIAIAKIAEAHIgFgBQgDAAgDABQgEACABAIIgCgBg");
	this.shape_445.setTransform(405.1,-211.7);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#447BCD").s().p("AASBPQgNgHgOgUQgJgLgEgIQgGgJAAgGQgBgHAGgDQADgBADAAIAFABQAEABAEAEIAEAEIAEAHQADAeAJAPQAEAJAFADIAAABIgHgDgAgXgNIgEgEQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIADgIQAGgMAKgNQAOgVAPgFIAJgCQgLAHgIAbIgFATIgJAJIgLAJQgDAAgFgDg");
	this.shape_446.setTransform(407.7,-211.7);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBQAAgBAAAAQAAgBAAAAQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAABIAEAEQADADAEAAQACAGgEAFIgGgLg");
	this.shape_447.setTransform(405.4,-212.7);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_448.setTransform(410.4,-166.9);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAAAIAEAEQADADAEAAQACAGgEAFIgGgLg");
	this.shape_449.setTransform(405.4,-176);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#EEC09E").s().p("AAeAYQgEgDgCgEQgEgHAAgIIgDAAQAAAAgBgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgDgBAJgBIADgMIAHgIIAHgFQgHAJAEALQACAEAAAFIgCALQgCAJAEAGIgGgEgAgEARIgRgGQgJgEgEgEIgBgDIAAAAIAMAEQgLgFgBgEIAAgCIABgBIAGAEQABABABAAQABAAAAABQABAAAAAAQAAAAAAABIACAAIgBgBIgHgFQgKgKAIABIAKAHIAHAEQgMgOgBgDQAAgDALAIIAKAIQAEADgKgMIAAgCIABgCQADgBAEAFIAFAIIAHALIAFAHIgFgBIgGABQgFADABAHIgBgBg");
	this.shape_450.setTransform(405.2,-175);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#000000").s().p("AgUAiQgFgCgDgEQgEgGACgJIACgLQAAgFgCgEQgEgLAHgJIAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAGgEAJgBQAIgBAGADQAIACAGAFIAEAEQADAEACAEQAEAHgBAHQAAAFgCAHIgGALIgDADQgJAJgLABIgDAAQgNAAgFgCg");
	this.shape_451.setTransform(411.8,-175);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#3A4D75").s().p("AASBPQgNgHgOgUIgNgSQgGgKAAgFQgBgIAGgDIAGAAIAFABIAIAEIAEAEQABAEAEADQACAeAJAQQAEAIAFADIAAABQgDAAgEgDgAgXgNIgEgDQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAgEADgFQAGgLAKgOQAOgTAPgGQAFgCAEAAQgLAHgIAbIgEATIgKAKIgLAJQgDgBgFgDg");
	this.shape_452.setTransform(407.7,-175.1);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#372511").s().p("AgKBNQgFgCgGgHQALgNAEgSQACgFAAgHIADgDIAEgLQACgHAAgEQABgIgEgHQgCgEgBgEIgCgLQgDgPgGgNIgFgJQAEgEADgBQAHgDAEAEQAHAGAGAOQAIAVAAAgQAAAggIAZQgGAPgHAGQgCACgEAAIgFgBg");
	this.shape_453.setTransform(414.5,-174.9);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#48608E").s().p("AgGBSIgBgBIgBAAQgFgDgEgIQgJgQgCgeIAFAEQADAEAFACQAHADAOgBQAMgBAJgJQgBAIgCAFQgEARgKANIgJAIQgFAFgCAAIAAAAgAAagaQgGgFgIgCQgIgCgGABQgJABgHAEQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIgBABIgGAEIABgGIAEgTQAIgbALgHIADAAIACACQAIADAEAHIAFAJQAHANACAOIACALIgDgEg");
	this.shape_454.setTransform(411.2,-175.1);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAQACADACABQADADAEAAQACAHgEAEIgGgLg");
	this.shape_455.setTransform(405.4,-157.8);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#EEC09E").s().p("AAeAXQgDgCgDgFQgDgGgBgIIgCgBIgEgBQgEAAAKgCQABgHACgFQADgFAFgDIAFgEQgFAIAEAKQABAGAAADIgCAMQgBAJADAFQgDgBgDgDgAgEARIgRgGQgIgEgEgEIgCgDIABAAIALAEQgLgFgBgFIABgCIABAAIAGAEIAEACIACACIgCgCIgGgGQgLgJAIACIALAGQAGAFAAgBQgMgOAAgDQAAgEALAJIAKAIQAEADgKgMIgBgCIABgCQACgBAGAGIAEAHIAIALIAEAHIgFgBQgDAAgDABQgEACABAIIgCgBg");
	this.shape_456.setTransform(405.1,-156.7);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#41210C").s().p("AgUAiQgGgDgDgEQgDgFABgJIACgMQABgDgCgGQgEgKAGgIIABgCIAEgCQAFgEAJgBQAJgBAGADQAIACAGAFIAEAEQADADACAFQADAIAAAGQAAAFgCAGQgCAHgEAFIgDACQgJAKgMABIgDAAQgLAAgGgCg");
	this.shape_457.setTransform(411.8,-156.7);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#EC672C").s().p("AgGBSIgBgBQgFgDgFgJQgIgPgEgeQADADADABQADAEAGACQAHADANgBQAMAAAJgKIgCANQgEARgLANQgCADgHAFQgEAFgCAAIgBAAgAAagZQgGgGgIgBQgIgDgHABQgJABgFADIgEADIgBABIgGAFIABgHIAEgTQAIgbAMgHIACAAIADACQAHAEAFAGIAFAJQAGANADAPIACALIgEgEg");
	this.shape_458.setTransform(411.2,-156.8);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#372511").s().p("AgKBNQgFgDgGgHQALgNAEgRIACgNIADgCQACgFACgHQACgGAAgEQAAgHgDgIQgCgFgBgDIgCgLQgDgOgGgNIgFgJQADgEAEgCQAHgDAEAFQAHAFAFAOQAIAVABAhQAAAfgJAYQgFARgHAFQgCACgEAAIgFgBg");
	this.shape_459.setTransform(414.5,-156.6);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#E64A00").s().p("AASBQQgNgHgOgVQgJgMgEgGQgGgLAAgEQgBgIAGgCQADgBADAAIAFABIAIAEIAEAEQABAFADACQADAeAJAQQAEAIAFAEIAAAAIgHgCgAgXgNQgDgBgBgCQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIADgJQAGgLAKgNQAOgUAPgGIAJgCQgLAHgIAbIgFAUQgEACgFAHIgLAJQgDgBgFgDg");
	this.shape_460.setTransform(407.7,-156.8);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#E18F59").s().p("AgGAKIgBgBIAGgIIAGgLQAEAFgCAGQgEAAgDADIgEAEQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_461.setTransform(405.4,-119.2);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#EEC09E").s().p("AAeAXIgHgIIgDgMQgJgBADgCQAAAAAAAAQABAAAAAAQAAAAABAAQABgBAAAAIADAAQAAgIAEgHQACgEAEgDIAGgEQgEAGACAJIACALQAAAFgCAEQgEALAHAJIgHgFgAgcAXQABgDAMgOIgHAEIgKAHQgIABAKgKIAHgFIABgBIgCAAQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgBABIgGAEIgBgBIAAgCQABgEALgFIgMADIAAAAIABgCQAEgEAJgEIARgGIABgBQgBAHAFADIAGABIAFgBIgFAHIgHALIgFAIQgEAFgDgBIgBgCIAAgCQAKgMgEADIgKAIQgIAGgCAAIgBgBg");
	this.shape_462.setTransform(405.2,-120.2);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AgIAkQgJgBgGgEIgEgDIAAAAQgHgJAEgLQACgEAAgFIgCgLQgCgJAEgGQADgEAFgCQAHgCAOAAQALABAJAJIADADIAGALQACAHAAAEQABAIgEAHQgCAEgDAEIgEAEQgGAFgIACQgFACgEAAIgFAAg");
	this.shape_463.setTransform(411.8,-120.2);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#609634").s().p("AgEBSQgLgHgIgbIgEgTIgBgGIAGAEIABABIADACQAHAEAJABQAGABAIgCQAIgCAGgFIADgEIgCALQgCAOgHANIgFAJQgEAGgIAEIgCACIgCAAIgBAAgAgRhFQAEgIAFgDIABAAIABgBQACAAAFAFIAJAIQAKANAEARQACAFABAIQgJgJgMgBQgOgBgHADQgFACgDAEIgFAEQACgeAJgQg");
	this.shape_464.setTransform(411.2,-120.1);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_465.setTransform(410.4,-128.3);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#372511").s().p("AgKBNQgDgBgEgEIAFgJQAGgNADgPIACgLQABgEACgEQAEgHgBgJQAAgDgCgHIgEgLIgDgDQAAgHgCgFQgEgSgLgNQAGgHAFgCQAHgEAEAFQAHAGAGAPQAIAZAAAgQAAAggIAUQgGAPgHAGQgCACgDAAIgGgBg");
	this.shape_466.setTransform(414.5,-120.3);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#4A7328").s().p("AAUBQQgPgGgOgTQgKgOgGgLQgDgFAAgEQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABgBIAEgDQAFgDADgBIALAJIAKAKIAEATQAIAbALAHQgEAAgFgCgAgXgIQgGgCABgIQAAgFAGgKIANgSQAOgUANgHQAEgDADAAIAAABQgFADgEAIQgJAQgCAeQgEADgBAEIgEAEIgIAEIgFABIgGgBg");
	this.shape_467.setTransform(407.7,-120.1);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAGgKQAEAFgCAGQgEAAgDADIgEAEQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_468.setTransform(405.4,-137.5);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#EEC09E").s().p("AAfAXQgFgDgDgFQgCgFgBgHQgKgCAEgBIAEgBIACAAQABgJADgFIAGgHIAGgFQgDAGABAJIACALQAAAEgBAGQgEAKAFAJIgFgFgAgbAXQAAgDAMgOIgGAFQgJAFgCAAQgIADALgKIAGgGIACgBIgCABIgEACIgGAEQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBgCQABgEALgGIgLAEIgBgBIACgCQAEgEAIgEIARgGIACAAQgBAGAEADQADABADABIAFgCIgEAHIgIALIgEAIQgGAFgCgBIgBgCIABgBQAKgNgEADIgKAJQgIAGgCAAIgBgCg");
	this.shape_469.setTransform(405.1,-138.5);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#000000").s().p("AgJAjQgJAAgFgEIgEgDIgBgBQgGgJAEgKQACgFgBgEIgCgMQgBgJADgFQADgEAGgCQAHgCANAAQAMAAAJAKIADACQAEAGACAGQACAGAAAFQAAAHgDAHQgCAFgDAEIgEADQgGAFgIADQgGACgFAAIgEgBg");
	this.shape_470.setTransform(411.8,-138.5);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#447BCD").s().p("AAUBQQgPgGgOgUQgKgNgGgMIgDgJQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAIAEgFQAFgCADAAIALAJIAJAJIAFATQAIAbALAHIgJgCgAgXgIQgGgDABgGQAAgGAGgJQAEgIAJgLQAOgVANgGIAHgDIAAABQgFADgEAIQgJARgDAdIgEAHIgEADQgEAEgEABIgFACQgDgBgDgBg");
	this.shape_471.setTransform(407.7,-138.4);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#628DD1").s().p("AgDBSQgMgHgIgbIgEgTIgBgGIAGAEIABABIAEADQAFAEAJAAQAHABAIgCQAIgDAGgFIAEgDIgCALQgDAOgGANIgFAJQgFAGgHAEIgDACgAgRhFQAFgIAFgDIABgBQACgBAFAGQAHAFACADQALANAEARIACANQgJgKgMAAQgNAAgHACQgGACgDAEIgGAEQAEgdAIgRg");
	this.shape_472.setTransform(411.2,-138.5);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#372511").s().p("AgKBNQgEgBgDgEIAFgKQAGgMADgPIACgLQABgDACgFQADgHAAgJQAAgDgCgGQgCgHgCgFIgDgDIgCgNQgEgQgLgNQAGgIAFgCQAHgDAEAEQAHAFAFARQAJAYAAAgQgBAggIAVQgFAPgHAFQgCACgEAAIgFgBg");
	this.shape_473.setTransform(414.5,-138.6);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_474.setTransform(410.4,-75.3);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#000000").s().p("AgUAiQgFgCgDgEQgEgGACgJIACgLQAAgEgCgFQgEgLAHgJIAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAGgEAJAAQAIgCAGADQAIACAGAFIAEAEQADAEACAEQAEAIgBAGQAAAFgCAHQgCAGgEAFIgDADQgJAJgLABIgDAAQgNAAgFgCg");
	this.shape_475.setTransform(411.8,-83.4);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#48608E").s().p("AgGBSIgBgBIgBAAQgFgCgEgJQgJgQgCgdIAFADQADAEAFACQAHADAOgBQAMAAAJgJQgBAHgCAFQgEARgKANQgDAEgGAEQgFAFgCAAIAAAAgAAagZQgGgGgIgCQgIgCgGABQgJABgHAEQAAAAgBAAQAAAAgBABQAAAAAAAAQgBABAAAAIgBABQgEACgCADIABgHIAEgTQAIgbALgHIADAAIACACQAIAEAEAGIAFAJQAHANACAOIACAMIgDgEg");
	this.shape_476.setTransform(411.2,-83.5);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#372511").s().p("AgKBNQgFgCgGgIQALgNAEgRQACgFAAgHIADgEQACgFACgGQACgGAAgEQABgIgEgHQgCgFgBgDIgCgMQgDgOgGgNIgFgJQAEgEADgBQAHgDAEAEQAHAFAGAPQAIAUAAAhQAAAggIAYQgGAQgHAFQgCADgEAAIgFgBg");
	this.shape_477.setTransform(414.5,-83.3);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgEgHAAgHIgDgBIgDgCQgDgBAJgBIADgMQADgEAEgEQADgDAEgCQgHAJAEALQACAFAAAEIgCALQgCAJAEAGIgGgEgAgEASQgHgEgKgDQgJgEgEgEIgBgDIAAAAIAMAEQgLgFgBgEIAAgCIABgBIAGAEIAEADIACAAIgBgBIgHgFQgKgKAIACIAKAGIAHAFQgMgPgBgDQAAgDALAIIAKAIQAEADgKgMIAAgCIABgBQADgCAEAGIAFAHIAHALIAFAIQgCgCgDAAIgGABQgFADABAHIgBAAg");
	this.shape_478.setTransform(405.2,-83.4);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#3A4D75").s().p("AASBPQgNgGgOgVIgNgSQgGgKAAgFQgBgHAGgEIAGAAQADAAACABQAEABAEAEIAEADIAFAIQACAdAJAQQAEAJAFACIAAABQgDAAgEgDgAgXgMIgEgEQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBQAAgDADgGQAGgLAKgNQAOgUAPgGQAFgCAEAAQgLAHgIAbIgEATIgKAKIgLAJQgDgBgFgCg");
	this.shape_479.setTransform(407.7,-83.5);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABIAEADQADADAEAAQACAGgEAFIgGgLg");
	this.shape_480.setTransform(405.4,-84.4);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#372511").s().p("AgKBNQgFgDgGgHQALgNAEgRIACgNIADgCQACgFACgHQACgGAAgEQAAgHgDgIQgCgFgBgDIgCgLQgDgOgGgNIgFgJQADgEAEgCQAHgDAEAFQAHAFAFAOQAIAVABAgQAAAggJAYQgFAQgHAGQgCACgDAAIgGgBg");
	this.shape_481.setTransform(414.5,-10);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#41210C").s().p("AgUAiQgGgDgDgEQgDgFABgIIACgNQABgDgCgGQgEgKAGgJIABgBIAEgCQAFgDAJgCQAJAAAGACQAIACAGAFIAEAEQADADACAFQADAIAAAGQAAAGgCAGQgCAGgEAFIgDACQgJALgMAAIgDAAQgLAAgGgCg");
	this.shape_482.setTransform(411.8,-10.1);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#EC672C").s().p("AgGBSIgBgBQgFgDgFgJQgIgPgEgeIAGAEQADAEAGACQAHADANgBQAMAAAJgKIgCANQgEARgLANIgJAIQgEAFgCAAIgBAAgAAagZQgGgGgIgCQgIgCgHAAQgJACgFADIgEADIgBABIgGAEIABgGIAEgUQAIgaAMgHIACAAIADACQAHAEAFAGIAFAJQAGANADAOIACALIgEgDg");
	this.shape_483.setTransform(411.2,-10.2);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#EEC09E").s().p("AAeAYQgDgDgDgFQgDgFgBgJIgCgBIgEgBQgEgBAKAAQABgIACgFQADgFAFgDIAFgFQgFAJAEAKQABAGAAADIgCANQgBAIADAFIgGgDgAgEARIgRgFQgIgFgEgEIgCgDIABAAIALAEQgLgFgBgFIABgCIABAAIAGAEIAEADIACAAIgCAAIgGgHQgLgIAIAAIALAHQAGAFAAgBQgMgOAAgDQAAgDALAIIAKAIQAEADgKgMIgBgCIABgCQACgBAGAGIAEAHIAIALIAEAHIgFgBQgDAAgDABQgEACABAIIgCgBg");
	this.shape_484.setTransform(405.1,-10.1);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#E64A00").s().p("AASBQQgNgHgOgVQgJgMgEgHQgGgKAAgEQgBgIAGgCQADgBADAAIAFABIAIAEIAEAEQABAEADADQADAeAJAPQAEAJAFAEIAAAAIgHgCgAgXgNQgDgBgBgCQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIADgJQAGgLAKgNQAOgUAPgGIAJgCQgLAHgIAaIgFAUIgJAKIgLAIQgDAAgFgDg");
	this.shape_485.setTransform(407.7,-10.2);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAQACADACABQADADAEAAQACAHgEAEIgGgLg");
	this.shape_486.setTransform(405.4,-11.2);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#FFF6CD").s().p("AgUAhQgGgCgDgDQgDgGABgJIACgLQABgEgCgFQgEgLAGgIIABgCIAEgCQAFgEAJgBQAJAAAGACQAIACAGAFIAEAEQADADACAFQADAHAAAHQAAAFgCAGQgCAHgEAFIgDADQgJAJgMAAIgFABQgKAAgFgDg");
	this.shape_487.setTransform(411.8,-28.5);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#424242").s().p("AgGBSIgBgBQgFgDgFgIQgIgRgEgdIAGAEQADAEAGACQAHADANgBQAMAAAJgKIgCANQgEARgLANQgCADgHAFQgEAFgCAAIgBAAgAAagZQgGgFgIgDQgIgCgHABQgJAAgFAEIgEADIgBABIgGAEIABgGIAEgTQAIgbAMgHIACAAIADACQAHAEAFAGIAFAJQAGANADAOIACALIgEgDg");
	this.shape_488.setTransform(411.2,-28.5);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#372511").s().p("AgKBNQgFgCgGgIQALgNAEgQIACgNIADgDQACgFACgHQACgGAAgEQAAgIgDgHQgCgFgBgDIgCgLQgDgPgGgMIgFgKQADgEAEgBQAHgDAEAEQAHAFAFAPQAIAVABAgQAAAggJAYQgFARgHAFQgCACgEAAIgFgBg");
	this.shape_489.setTransform(414.5,-28.4);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgHgBgIIgCgBIgEgBQgEAAAKgDQABgGACgFQADgFAFgEIAFgDQgFAIAEALQABAFAAADIgCALQgBAKADAFIgGgDgAgEARIgRgGQgIgEgEgFIgCgCIABAAIALAEQgLgGgBgEIABgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAABIAGACIAEADIACABIgCgBIgGgFQgLgLAIACQACAAAJAHIAGAEQgMgPAAgDQAAgDALAJIAKAIQAEACgKgMIgBgBIABgCQACgCAGAHIAEAIIAIAJIAEAIIgFgBQgDAAgDABQgEADABAHIgCgBg");
	this.shape_490.setTransform(405.1,-28.4);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#393939").s().p("AASBPQgNgGgOgVQgJgMgEgGQgGgKAAgFQgBgHAGgDQADgBADAAIAFABQAEABAEADIAEAFIAEAHQADAdAJAQQAEAJAFADIAAAAQgDgBgEgCgAgXgNIgEgDQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIADgIQAGgMAKgNQAOgUAPgGQAFgCAEAAQgLAIgIAaIgFATIgJAKIgLAJQgDgBgFgDg");
	this.shape_491.setTransform(407.7,-28.5);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgCIABgBQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAIAEAEQADADAEAAQACAGgEAFIgGgLg");
	this.shape_492.setTransform(405.4,-29.5);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#372511").s().p("AgKBNQgFgDgGgHQALgNAEgRIACgNIADgCQACgFACgHQACgGAAgEQAAgIgDgHQgCgFgBgEIgCgLQgDgOgGgMIgFgKQADgEAEgBQAHgDAEAEQAHAFAFAPQAIAUABAhQAAAggJAYQgFARgHAFQgCACgEAAIgFgBg");
	this.shape_493.setTransform(414.5,-46.7);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#000000").s().p("AgUAiQgGgCgDgEQgDgFABgJIACgMQABgEgCgFQgEgLAGgIIABgBIAEgDQAFgEAJgBQAJAAAGACQAIACAGAGIAEADQADAEACAEQADAHAAAHQAAAGgCAGQgCAGgEAFIgDADQgJAKgMAAIgDAAQgLAAgGgCg");
	this.shape_494.setTransform(411.8,-46.8);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#628DD1").s().p("AgGBSIgBgBQgFgDgFgJQgIgQgEgdIAGAEQADAEAGACQAHACANAAQAMAAAJgKIgCANQgEARgLANQgCADgHAFQgEAFgCAAIgBAAgAAagZQgGgGgIgCQgIgCgHAAQgJABgFAEIgEADIgBABIgGAEIABgHIAEgTQAIgaAMgHIACAAIADACQAHAEAFAFIAFAKQAGAMADAPIACALIgEgDg");
	this.shape_495.setTransform(411.2,-46.8);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgHgBgIIgCgBIgEgBQgEAAAKgCQABgIACgEIAIgJIAFgDQgFAIAEAKQABAFAAAEIgCANQgBAIADAFIgGgDgAgEARIgRgGQgIgEgEgEIgCgDIABAAIALAEQgLgFgBgFIABgCIABAAIAGAEIAEADIACAAIgCAAIgGgHQgLgJAIABQACAAAJAHQAGAFAAgBQgMgNAAgFQAAgCALAIIAKAIQAEADgKgMIgBgCIABgCQACgBAGAGIAEAIIAIAKIAEAHIgFgBIgGABQgEADABAHIgCgBg");
	this.shape_496.setTransform(405.1,-46.8);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#447BCD").s().p("AASBPQgNgHgOgUQgJgLgEgIQgGgKAAgEQgBgIAGgDIAGgBIAFABIAIAFIAEAEIAEAHQADAeAJAPQAEAJAFAEIAAAAIgHgDgAgXgNIgEgEQgBAAAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIADgJQAGgLAKgNQAOgUAPgGIAJgCQgLAHgIAaIgFATIgJAKIgLAJQgDABgFgEg");
	this.shape_497.setTransform(407.7,-46.8);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAIAEAEQADADAEAAQACAGgEAFIgGgLg");
	this.shape_498.setTransform(405.4,-47.8);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#E18F59").s().p("AgFAKIgCgBIAGgIIAHgLQAEAFgDAGQgDAAgEADIgDAEQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAg");
	this.shape_499.setTransform(419.4,-30);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#EEC09E").s().p("AAeAXQgFgEgCgEQgCgFgBgHQgKgBAEgCQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAIADAAQABgIACgHIAHgHIAGgEQgEAGACAJIACALQAAAFgCAEQgEALAHAJIgHgFgAgbAXQAAgDAMgOIgHAEIgKAHQgIABAKgKIAHgFIABgBIgCAAQAAAAAAABQAAAAAAAAQgBABgBAAQAAAAgBABIgGAEIgBgBIgBgCQABgEALgFIgLADQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIABgCQADgEAJgEIARgGIABgBQAAAHAEADIAGABIAFgBIgEAHIgIALIgFAIQgFAFgCgBIgBgCIAAgCQAKgMgEADIgJAIQgJAGgCAAIAAgBg");
	this.shape_500.setTransform(419.2,-31);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_501.setTransform(424.4,-39.1);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#3A4D75").s().p("AAVBQQgQgGgOgTIgPgZIgEgJQgBgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAFgDQAEgDAEgBIAKAJIAKAKIAEATQAJAbALAHQgEAAgFgCgAgWgHQgHgDABgIQAAgFAGgKIANgSQAPgUAMgHQAFgDADAAIAAABQgFADgEAIQgJAQgDAeIgFAHIgDAEIgIAEIgFABIgGAAg");
	this.shape_502.setTransform(421.7,-31);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#000000").s().p("AgIAkQgJgBgHgEQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBgBIgBAAQgGgJAEgLQACgEAAgFIgCgLQgCgJAEgGQACgEAGgCQAHgCANAAQAMABAJAJIADADIAGALQACAHAAAEQABAIgEAHQgCAEgDAEIgEAEQgGAFgIACQgFACgEAAIgFAAg");
	this.shape_503.setTransform(425.8,-31);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#48608E").s().p("AgEBSQgKgHgJgbIgEgTIgBgGIAGAEIABABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAQAHAEAJABQAGABAIgCQAIgCAGgFIADgEIgCALQgCAOgHANIgEAJQgFAHgIADIgCACIgCAAIgBAAgAgRhFQAFgIAFgDIAAAAIABgBQACAAAFAFIAJAIQAKANAFARQACAFAAAIQgJgJgMgBQgNgBgIADQgFACgDAEIgFAEQACgeAJgQg");
	this.shape_504.setTransform(425.3,-31);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#372511").s().p("AgKBNQgEgBgDgEIAFgJQAGgNADgPIACgLQABgEACgEQAEgHgBgJQAAgDgCgHIgEgLIgDgDQAAgHgCgFQgEgSgLgNQAFgHAGgCQAHgEAEAFQAHAGAGAPQAIAZgBAgQAAAggHAVQgGAOgHAGQgBACgEAAIgGgBg");
	this.shape_505.setTransform(428.5,-31.1);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#E18F59").s().p("AgFAKIgCgBIAGgIIAHgLQAEAFgDAGQgDAAgEADIgDAEQgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_506.setTransform(419.4,-137.6);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#EEC09E").s().p("AAeAXQgFgEgCgEQgCgFgBgHQgKgBAEgCQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAIADgBQABgHACgHIAHgHIAGgEQgEAGACAJIACALQAAAFgCAEQgEALAHAJIgHgFgAgbAXQAAgDAMgOIgHAEIgKAHQgIABAKgKIAHgFIABgBIgCAAIgDADIgGAEIgBgBIgBgCQABgEALgFIgLADQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIABgCQADgEAJgEIARgGIABgBQAAAHAEADIAGABIAFgBIgEAHIgIALIgFAIQgFAFgCgCIgBgBIAAgCQAKgMgEADIgJAIQgJAGgCAAIAAgBg");
	this.shape_507.setTransform(419.2,-138.6);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#4A7328").s().p("AAVBQQgQgGgOgUQgJgNgGgLIgEgJQgBgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAFgDQAEgDAEgBIAKAJIAKAKIAEATQAJAbALAHQgEAAgFgCgAgWgIQgHgCABgIQAAgFAGgKIANgSQAPgVAMgGQAFgDADAAIAAABQgFADgEAIQgJAQgDAeIgFAHIgDAEIgIAEIgFABIgGgBg");
	this.shape_508.setTransform(421.7,-138.6);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_509.setTransform(424.4,-146.7);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#000000").s().p("AgIAjQgJAAgHgEIgDgDIgBAAQgGgJAEgLQACgEAAgFIgCgLQgCgJAEgGQACgEAGgCQAHgCANAAQAMABAJAJIADADIAGALQACAHAAAEQABAIgEAHQgCAEgDAEIgEAEQgGAFgIACQgFACgDAAIgGgBg");
	this.shape_510.setTransform(425.8,-138.6);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#609634").s().p("AgEBSQgKgHgJgbIgEgTIgBgGIAGAEIABABIADACQAHAEAJABQAGABAIgCQAIgCAGgFIADgEIgCALQgCAOgHANIgEAJQgFAGgIAEIgCACIgCAAIgBAAgAgRhFQAFgIAFgDIAAAAIABgBQACAAAFAFQAGAEADAEQAKANAFARQACAFAAAIQgJgJgMgBQgNgBgIADQgFACgDAEIgFAEQACgeAJgQg");
	this.shape_511.setTransform(425.3,-138.6);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#372511").s().p("AgKBNQgEgBgDgEIAFgJQAGgNADgOIACgLQABgEACgFQAEgHgBgIQAAgEgCgGIgEgLIgDgDQAAgIgCgFQgEgRgLgNQAFgHAGgDQAHgDAEAFQAHAFAGAQQAIAYgBAgQAAAhgHAUQgGAPgHAFQgCADgDAAIgGgCg");
	this.shape_512.setTransform(428.5,-138.8);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAHgKQAEAFgDAGQgDAAgEADQgCACgBACQgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_513.setTransform(419.4,5.9);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#EEC09E").s().p("AAeAXQgEgDgDgFQgCgFgBgGQgKgCAEgCIADgBIADAAQABgIADgHIAGgGIAGgFQgEAGACAJIACALQAAAFgCAEQgEALAGAIIgGgEgAgbAXQAAgDAMgOIgGAFQgJAFgCAAQgIACALgKIAGgFIACgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAIgEADIgGACQAAABAAAAQgBAAAAAAQAAAAAAAAQAAAAAAgBIgBgCQABgDALgGQgLAEAAgBIgBAAIACgBQAEgEAIgFIARgGIABgBQAAAIAEACQADACADAAIAFgCIgEAHIgIALIgFAHQgFAGgCgBIgBgCIABgBQAJgMgEACIgJAIQgIAHgCAAIgBgCg");
	this.shape_514.setTransform(419.2,4.8);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#000000").s().p("AgIAkQgJgBgGgEIgDgCIgCgCQgGgIAEgLQACgFAAgEIgCgLQgCgJAEgGQACgEAGgBQAHgDANABQANAAAJAJIACADQAEAFACAHQADAFAAAFQAAAIgEAHQgBAEgEAEIgEAEQgFAFgIACQgHACgFAAIgDAAg");
	this.shape_515.setTransform(425.8,4.8);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#372511").s().p("AgKBNQgEgBgDgEIAFgJQAHgNACgOIACgLQACgEABgFQADgHABgIQgBgEgCgGQgCgGgCgGIgCgCIgDgNQgEgRgKgNQAFgHAFgDQAHgDAEAEQAHAGAGAQQAHAYABAgQgBAhgHAUQgGAPgHAFQgBACgEAAIgGgBg");
	this.shape_516.setTransform(428.5,4.7);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#628DD1").s().p("AgDBSQgMgHgIgaIgEgTIgBgHIAGAEIABACIADACQAGAEAJABQAHAAAIgCQAIgCAGgFIAEgEIgCALQgDAPgGAMIgFAKQgFAGgHAEIgDABgAgRhEQAFgJAFgDIABgBQACAAAFAFIAJAIQALANAEARIACANQgJgJgMAAQgNgBgHADQgGABgDAEIgGAEQAEgdAIgQg");
	this.shape_517.setTransform(425.2,4.8);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#447BCD").s().p("AAVBRQgQgHgOgUQgKgNgGgMIgDgIQgBAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABgCAEgCQAEgDAEAAIAKAJIAKAJIAEATQAIAbAMAHIgJgBgAgWgHQgHgDABgHQAAgGAGgJIANgTQAPgUAMgHIAIgDIAAABQgFADgFAIQgIARgEAdIgEAHIgEAEQgEADgDACIgFABQgEAAgCgBg");
	this.shape_518.setTransform(421.7,4.9);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAHgKQAEAFgDAGQgDAAgEADQgCACgBACQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIgBgCg");
	this.shape_519.setTransform(419.4,-48);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#372511").s().p("AgKBNQgEgBgDgEIAFgJQAHgNACgPIACgLQACgDABgFQADgHABgIQgBgEgCgGQgCgGgCgGIgCgCIgDgNQgEgRgKgNQAFgHAFgDQAHgDAEAEQAHAGAGAQQAHAYABAgQgBAggHAVQgGAOgHAGQgCACgEAAIgFgBg");
	this.shape_520.setTransform(428.5,-49.1);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#41210C").s().p("AgIAkQgJgCgGgDIgDgCIgCgBQgGgJAEgKQACgGAAgEIgCgLQgCgJAEgGQACgEAGgCQAHgCANAAQANABAJAKIACACQAEAFACAHQADAFAAAFQAAAHgEAIQgBAEgEAEIgEAEQgFAFgIACQgHACgGAAIgCAAg");
	this.shape_521.setTransform(425.8,-49);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#EEC09E").s().p("AAeAXQgEgEgDgEQgCgFgBgHQgKgCAEgBIADgBIADAAQABgJADgFIAGgHIAGgFQgEAGACAJIACALQAAAEgCAGQgEAKAGAJIgGgFgAgbAXQAAgEAMgNIgGAEIgLAGQgIACALgJIAGgGIACgBIgCABIgEACIgGAEQAAAAAAAAQgBAAAAAAQAAAAAAAAQAAAAAAAAIgBgDQABgEALgFQgLAEAAgBIgBAAIACgCQAEgEAIgEIARgGIABAAQAAAGAEADQADABADAAIAFgBIgEAHIgIALIgFAIQgFAFgCgBIgBgCIABgCQAJgMgEADIgJAJQgIAFgCAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_522.setTransform(419.2,-49);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#E64A00").s().p("AAVBQQgQgFgOgVQgKgNgGgMIgDgIQgBAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABgDAEgBQAEgEAEAAIAKAJQAFAHAFADIAEAUQAIAaAMAHIgJgCgAgWgIQgHgCABgHQAAgFAGgKIANgTQAPgVAMgGIAIgDIAAABQgFADgFAIQgIAQgEAeIgEAHIgEAEIgHAEIgFABIgDAAIgDgBg");
	this.shape_523.setTransform(421.7,-48.9);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#EC672C").s().p("AgXAxIgEgUIgBgGIAGAEIABACIADACQAGADAJACQAHAAAIgCQAIgCAGgFIAEgEIgCALQgDAOgGANIgFAJQgFAHgHADIgDACIgCAAQgMgHgIgagAgRhEQAFgJAFgDIABgBQACAAAFAFIAJAIQALANAEARIACANQgJgJgMgBQgNgBgHADQgGACgDAEIgGAEQAEgeAIgPg");
	this.shape_524.setTransform(425.2,-49);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_525.setTransform(424.4,-76.6);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#EEC09E").s().p("AAeAYIgHgHQgCgHgBgHIgDgBIgDgCQgEgBAKgBQABgHACgFQACgEAFgEIAHgFQgHAJAEALQACAFAAAEIgCALQgCAJAEAGIgGgEgAgEASIgRgHQgJgEgDgEIgBgDQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIALAEQgLgFgBgEIABgCIABgBIAGAEIADADIACAAIgBgBIgHgFQgKgKAIACIAKAGIAHAFQgMgPAAgDQAAgDALAIIAJAIQAEADgKgMIAAgCIABgBQACgCAFAGIAFAHIAIALIAEAIQgCgCgDAAQgDAAgDACQgEACAAAHIgBAAg");
	this.shape_526.setTransform(419.2,-84.7);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#4A7328").s().p("AASBPQgMgGgPgVIgNgSQgGgKAAgFQgBgHAHgDQACgBAEAAQADAAACABQAEABAEAEIADADIAFAIQADAdAJAQQAEAJAFACIAAABQgDAAgFgDgAgWgMIgFgEQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAABgBIAEgJQAGgLAJgNQAOgUAQgGQAFgCAEAAQgLAHgJAbIgEATIgKAKIgKAJQgEgBgEgCg");
	this.shape_527.setTransform(421.7,-84.8);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#E18F59").s().p("AgBAAIgGgHIACgCIAAgBQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAIADAEQAEADADAAQADAGgEAFIgHgLg");
	this.shape_528.setTransform(419.4,-85.7);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#000000").s().p("AgUAiQgGgCgCgEQgEgGACgJIACgLQAAgEgCgFQgEgLAGgJIABAAIADgDQAHgEAJAAQAIgCAGADQAIACAGAFIAEAEQADAEACAEQAEAIgBAGQAAAFgCAHQgCAGgEAFIgDADQgJAJgMABIgCAAQgMAAgGgCg");
	this.shape_529.setTransform(425.8,-84.7);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#609634").s().p("AgGBSIgBgBIAAAAQgFgCgFgJQgJgQgCgdIAFADQADAEAFACQAIADANgBQAMAAAJgJQAAAHgCAFQgFARgKANQgDAEgGAEQgEAFgDAAIAAAAgAAagZQgGgGgIgCQgIgCgGABQgJABgHAEIgDACIgBABIgGAFIABgHIAEgTQAJgbAKgHIADAAIACACQAIAEAFAGIAEAJQAHANACAOIACAMIgDgEg");
	this.shape_530.setTransform(425.3,-84.8);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#372511").s().p("AgKBNQgGgCgFgIQALgNAEgRQACgFAAgHIADgEQACgFACgGQACgGAAgEQABgIgEgHQgCgFgBgDIgCgMQgDgOgGgNIgFgJQADgEAEgBQAHgDAEAEQAHAFAGAPQAHAUAAAhQABAggIAYQgGAQgHAFQgCADgEAAIgFgBg");
	this.shape_531.setTransform(428.5,-84.6);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#372511").s().p("AgKBNQgGgDgFgHQALgNAEgRQACgFAAgIIADgDIAEgLQACgGAAgEQABgIgEgHQgCgFgBgEIgCgLQgDgOgGgNIgFgJQADgEAEgBQAHgEAEAFQAHAFAGAPQAHAUAAAhQABAggIAYQgGAQgHAFQgCAEgEAAIgFgCg");
	this.shape_532.setTransform(428.5,-12.8);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_533.setTransform(424.4,-4.8);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#000000").s().p("AgUAiQgGgCgCgEQgEgGACgJIACgLQAAgFgCgEQgEgLAGgJIABAAIADgDQAHgEAJAAQAIgCAGADQAIACAGAFIAEAEQADAEACAEQAEAHgBAHQAAAFgCAHIgGALIgDADQgJAJgMABIgCAAQgMAAgGgCg");
	this.shape_534.setTransform(425.8,-13);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#E18F59").s().p("AgBAAIgGgIIACgBIAAgBQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAIADAEQAEADADAAQADAGgEAFIgHgLg");
	this.shape_535.setTransform(419.4,-14);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#EEC09E").s().p("AAeAYIgHgHQgCgHgBgHIgDgBQgBAAAAgBQgBAAAAAAQAAAAgBgBQAAAAAAAAQgEgBAKgBQABgHACgFQACgEAFgEIAHgFQgHAJAEALQACAEAAAFIgCALQgCAJAEAGIgGgEgAgEARIgRgGQgJgEgDgEIgBgDQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIALAEQgLgFgBgEIABgCIABgBIAGAEIADADIACAAIgBgBIgHgFQgKgKAIABIAKAHIAHAEQgMgOAAgDQAAgDALAIIAJAIQAEADgKgMIAAgCIABgBQACgCAFAFIAFAIIAIALIAEAHIgFgBIgGABQgEADAAAHIgBgBg");
	this.shape_536.setTransform(419.2,-13);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#5BB1B0").s().p("AASBPQgMgGgPgVIgNgSQgGgKAAgFQgBgIAHgCIAGgBIAFABIAIAEIADAEIAFAHQADAeAJAQQAEAIAFADIAAABQgDAAgFgDgAgWgNIgFgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAABgBIAEgJQAGgLAJgNQAOgUAQgGQAFgCAEAAQgLAHgJAbIgEATIgKAKIgKAJQgEgBgEgDg");
	this.shape_537.setTransform(421.7,-13);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#6BD3D2").s().p("AgGBSIgBgBIAAAAQgFgDgFgIQgJgQgCgeIAFAEQADAEAFACQAIADANgBQAMAAAJgKQAAAIgCAFQgFARgKANQgDAEgGAEQgEAFgDAAIAAAAgAAagaQgGgFgIgCQgIgCgGABQgJABgHAEIgDACIgBABIgGAEIABgGIAEgTQAJgbAKgHIADAAIACACQAIAEAFAGIAEAJQAHANACAOIACALIgDgEg");
	this.shape_538.setTransform(425.3,-13);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#372511").s().p("AgKBNQgFgCgFgIQAKgNAEgQIADgNIACgDQACgFACgHQACgGABgEQgBgIgDgHQgBgFgCgDIgCgMQgCgOgHgMIgFgKQADgEAEgBQAHgDAEAEQAHAFAGAPQAHAUABAhQgBAggHAYQgGARgHAFQgCACgEAAIgFgBg");
	this.shape_539.setTransform(428.5,-102.6);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#EEC09E").s().p("AAeAXIgGgHQgDgGgBgIIgDAAIgDgCQgEAAAKgDQABgHACgEQADgFAEgDIAGgFQgGAJAEAKQACAFAAAFIgCALQgCAJAEAGIgGgFgAgEARIgRgGQgIgEgEgEIgCgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIALAEQgLgGgBgEIABgCIABAAIAGAEIAEACIACAAIgCAAIgGgGQgLgKAIADQACAAAJAFIAGAFQgMgPAAgCQAAgEALAIIAJAJQAEADgJgNIgBgBIABgCQACgBAFAFIAFAIIAIALIAEAHIgFgCQgDABgDABQgEADAAAGIgBAAg");
	this.shape_540.setTransform(419.2,-102.6);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgCIABgBQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAQABACACACQAEADADAAQADAGgEAFIgHgLg");
	this.shape_541.setTransform(419.4,-103.7);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#424242").s().p("AgGBSIgBgBQgFgDgFgIQgIgRgEgdIAGAEQADAEAGACQAHACANAAQAMAAAJgKIgCANQgEARgLANQgCADgHAFQgEAFgCAAIgBAAgAAagZQgGgFgIgDQgIgCgHABQgJAAgGAEIgDADIgBABIgGAEIABgGIAEgTQAIgbAMgHIACAAIADACQAHAEAFAGIAFAJQAGANADAOIACALIgEgDg");
	this.shape_542.setTransform(425.2,-102.7);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#FFF6CD").s().p("AgUAiQgGgCgCgEQgEgFACgKIACgLQAAgEgCgFQgEgKAGgJIACgBIADgDQAGgEAJAAQAIgBAHACQAIADAFAFIAEADQAEAEABAEQAEAIAAAGQAAAGgDAGQgCAGgEAFIgCADQgJAKgNAAIgDAAQgLAAgGgCg");
	this.shape_543.setTransform(425.8,-102.7);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#393939").s().p("AASBPQgMgGgPgWQgJgKgEgIQgGgKAAgFQgBgGAHgDQACgBAEgBIAFACQADABAEAEIAEADIAEAHQAEAdAIARQAFAIAFADIAAABQgEAAgEgDgAgWgMQgEgDgBgCQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAIADgIQAGgMAKgNQAOgUAQgGQAEgCAFAAQgMAHgIAbIgEATIgKAJIgKAJQgEAAgEgCg");
	this.shape_544.setTransform(421.7,-102.7);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABQABACACACQAEADADAAQADAGgEAFIgHgLg");
	this.shape_545.setTransform(419.4,-67.8);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#000000").s().p("AgUAiQgGgCgCgEQgEgGACgJIACgLQAAgEgCgFQgEgLAGgIIACgBIADgDQAGgEAJgBQAIAAAHACQAIACAFAFIAEAEQAEAEABAEQAEAHAAAHQAAAGgDAFQgCAHgEAFIgCADQgJAJgNAAIgGABQgJAAgFgCg");
	this.shape_546.setTransform(425.8,-66.8);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#EEC09E").s().p("AAeAXIgGgGQgDgHgBgIIgDgBIgDgBQgEgBAKgCQABgGACgFQADgFAEgEIAGgDQgGAIAEALQACAFAAADIgCAMQgCAJAEAGIgGgFgAgEARIgRgGQgIgFgEgEIgCgCIABAAQAAAAALAEQgLgGgBgEIABgBIABAAIAGACIAEADQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAIgCgBIgGgFQgLgKAIACQACgBAJAHIAGAEQgMgOAAgEQAAgDALAJIAJAIQAEACgJgLIgBgCIABgCQACgBAFAGIAFAIIAIAKIAEAHIgFgBQgDAAgDABQgEACAAAIIgBgBg");
	this.shape_547.setTransform(419.2,-66.8);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#447BCD").s().p("AASBPQgMgHgPgUQgJgLgEgIQgGgJAAgGQgBgHAHgDQACgBAEAAIAFABQADABAEAEIAEAEIAEAHQAEAeAIAPQAFAJAFADIAAABIgIgDgAgWgNQgEgCgBgCQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBABAAIADgIQAGgMAKgNQAOgVAQgFIAJgCQgMAHgIAbIgEATIgKAJIgKAJQgEAAgEgDg");
	this.shape_548.setTransform(421.7,-66.8);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#628DD1").s().p("AgGBSIgBgBQgFgDgFgJQgIgQgEgdIAGAEQADAEAGACQAHACANgBQAMAAAJgJIgCANQgEARgLANIgJAIQgEAFgCAAIgBAAgAAagaQgGgFgIgCQgIgCgHAAQgJABgGAEIgDADIgBABIgGAEIABgHIAEgTQAIgaAMgHIACAAIADACQAHADAFAGIAFAKQAGAMADAPIACALIgEgEg");
	this.shape_549.setTransform(425.2,-66.8);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#372511").s().p("AgKBNQgFgDgFgHQAKgNAEgRIADgNIACgCQACgGACgGQACgGABgEQgBgIgDgHQgBgFgCgEIgCgLQgCgOgHgMIgFgKQADgEAEgBQAHgDAEAEQAHAFAGAPQAHAUABAhQgBAggHAYQgGAQgHAGQgBACgEAAIgGgBg");
	this.shape_550.setTransform(428.5,-66.7);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#372511").s().p("AgKBNQgEgBgDgEIAFgJQAGgNADgPIACgLQABgEACgEQAEgHgBgJQAAgDgCgGQgCgGgCgGIgDgDQAAgHgCgFQgEgSgLgNQAFgHAGgCQAHgEAEAGQAHAFAGAPQAIAZgBAgQAAAggHAUQgGAPgHAGQgBACgEAAIgGgBg");
	this.shape_551.setTransform(428.5,-210.5);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#E18F59").s().p("AgFAKIgCgBIAGgIIAHgLQAEAFgDAGIgHADIgDAEQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_552.setTransform(419.4,-209.4);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#000000").s().p("AgIAkQgJgBgHgEIgDgDIgBAAQgGgJAEgLQACgEAAgFIgCgLQgCgJAEgGQACgEAGgCQAHgCANAAQAMABAJAJIADADQAEAGACAGQACAGAAAEQABAIgEAHQgCAEgDAEIgEAEQgGAFgIACQgFACgEAAIgFAAg");
	this.shape_553.setTransform(425.8,-210.4);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#EEC09E").s().p("AAeAXQgFgEgCgEQgCgFgBgHQgKgBAEgCQAAAAAAAAQABAAAAAAQAAAAABAAQAAgBABAAIADAAQABgIACgHIAHgHIAGgEQgEAGACAJIACALQAAAFgCAEQgEALAHAJIgHgFgAgbAXQAAgDAMgOIgHAEIgKAHQgIABAKgKIAHgFIABgBIgCAAQAAABAAAAQAAAAAAABQgBAAgBAAQAAABgBAAIgGAEIgBgBIgBgCQABgEALgFIgLAEQgBAAAAgBQAAAAAAAAQAAAAAAAAQAAAAABAAIABgCQADgEAJgEIARgGIABgBQAAAHAEADQADABADAAQADAAACgBIgEAHIgIALIgFAIQgFAFgCgBIgBgCIAAgCQAKgMgEADIgJAIQgIAGgDAAIAAgBg");
	this.shape_554.setTransform(419.2,-210.4);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_555.setTransform(424.4,-218.5);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#5BB1B0").s().p("AAVBPQgQgFgOgUIgPgYIgEgJQgBgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAFgDIAIgEIAKAKIAKAJIAEATQAJAbALAGQgEAAgFgCgAgWgIQgHgCABgIQAAgFAGgJIANgTQAPgVAMgGQAFgCADgBIAAABQgFACgEAJQgJAQgDAeIgFAGIgDAFIgIAEQgCABgDAAQgEAAgCgBg");
	this.shape_556.setTransform(421.7,-210.3);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#6BD3D2").s().p("AgEBRQgKgGgJgbIgEgTIgBgHIAGAFIABAAIADADQAHAEAJABQAGABAIgDQAIgCAGgFIADgEIgCALQgCAPgHANIgEAJQgFAGgIADIgCACIgCABIgBgBgAgRhFQAFgJAFgCIAAAAIABgBQACgBAFAGIAJAHQAKANAFASQACAFAAAHQgJgJgMgBQgNAAgIACQgFACgDAEIgFAEQACgdAJgQg");
	this.shape_557.setTransform(425.3,-210.3);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#E18F59").s().p("AgFAKIgCgCIAGgHIAHgLQAEAEgDAHQgDAAgEACIgDAEQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAg");
	this.shape_558.setTransform(419.4,-119.6);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#000000").s().p("AgIAjQgJAAgHgEQAAAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBIgBAAQgGgJAEgLQACgFAAgEIgCgLQgCgJAEgGQACgEAGgCQAHgCANAAQAMABAJAJIADADQAEAFACAGQACAHAAAEQABAHgEAIQgCAEgDAEIgEAEQgGAFgIACQgFACgDAAIgGgBg");
	this.shape_559.setTransform(425.8,-120.7);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#EEC09E").s().p("AAeAXQgFgEgCgEQgCgFgBgHQgKgBAEgCIADgBIADAAQABgIACgHIAHgHIAGgEQgEAGACAJIACALQAAAFgCAFQgEALAHAIIgHgFgAgbAXQAAgDAMgOIgHAEIgKAHQgIABAKgJIAHgGIABgBIgCAAIgDADIgGAEIgBAAIgBgCQABgFALgFIgLADQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAAAABAAIABgCQADgEAJgEQALgDAGgDIABgBQAAAHAEADIAGABQADAAACgBIgEAHIgIALIgFAHQgFAGgCgCIgBgBIAAgCQAKgMgEADIgJAIQgIAGgDAAIAAgBg");
	this.shape_560.setTransform(419.2,-120.7);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#3A4D75").s().p("AAVBQQgQgGgOgUQgJgNgGgLIgEgJQgBgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAFgEQAEgCAEgBIAKAJIAKAKIAEATQAJAbALAHQgEAAgFgCgAgWgHQgHgEABgHQAAgFAGgKIANgSQAPgVAMgGQAFgDADAAIAAABQgFACgEAJQgJAQgDAdIgFAIIgDADQgEAEgEABQgCABgDAAIgGAAg");
	this.shape_561.setTransform(421.7,-120.6);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_562.setTransform(424.4,-128.8);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#372511").s().p("AgKBNQgEgBgDgEIAFgJQAGgNADgOIACgMQABgDACgFQAEgHgBgJQAAgDgCgGQgCgGgCgFIgDgEQAAgHgCgFQgEgRgLgNQAFgIAGgCQAHgDAEAFQAHAFAGAQQAIAYgBAgQAAAhgHAUQgGAPgHAFQgCACgDAAIgGgBg");
	this.shape_563.setTransform(428.5,-120.8);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#48608E").s().p("AgEBSQgKgHgJgbIgEgTIgBgHIAGAFIABABQAAAAABABQAAAAAAAAQABABAAAAQAAAAABAAQAHAEAJABQAGABAIgCQAIgCAGgGIADgEIgCAMQgCAOgHANIgEAJQgFAGgIAEIgCACIgCAAIgBAAgAgRhFQAFgJAFgCIAAAAIABgBQACAAAFAFQAGAEADAEQAKANAFARQACAFAAAHQgJgJgMAAQgNgBgIADQgFACgDADIgFAEQACgdAJgQg");
	this.shape_564.setTransform(425.3,-120.6);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAHgKQAEAEgDAHQgDAAgEADQgCABgBADQgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_565.setTransform(419.4,-191.4);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#EEC09E").s().p("AAeAWQgEgDgDgEQgCgGgBgHQgKAAAEgCIADgBIADgBQABgHADgGIAGgIQACgCAEgBQgEAEACAJIACAMQAAAEgCAGQgEAKAGAJIgGgGgAgbAWQAAgCAMgOQAAgBgGAFIgLAGQgIABALgIIAGgHIACAAIgCAAIgEADIgGAEIgBAAIgBgDQABgEALgFIgLADQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACgCQAEgFAIgEIARgFIABgBQAAAIAEACQADABADAAIAFgBIgEAHIgIALIgFAHQgFAGgCgCIgBgBIABgCQAJgMgEADIgJAIQgIAGgCAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBg");
	this.shape_566.setTransform(419.2,-192.4);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#41210C").s().p("AgIAkQgJgBgGgEIgDgCIgCgBQgGgJAEgKQACgGAAgDIgCgMQgCgJAEgFQACgEAGgDQAHgCANAAQANABAJAKIACACQAEAFACAHQADAGAAAEQAAAHgEAIQgBAFgEADIgEAEQgFAFgIACQgHACgEAAIgEAAg");
	this.shape_567.setTransform(425.8,-192.5);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#372511").s().p("AgKBNQgEgCgDgEIAFgJQAHgNACgOIACgLQACgDABgFQADgIABgHQgBgEgCgGQgCgHgCgFIgCgCIgDgNQgEgRgKgNQAFgHAFgDQAHgDAEAEQAHAFAGARQAHAYABAgQgBAggHAVQgGAOgHAFQgCADgEAAIgFgBg");
	this.shape_568.setTransform(428.5,-192.6);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#E64A00").s().p("AAVBQQgQgGgOgUQgKgNgGgLIgDgJQgBAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABgCAEgBQAEgEAEAAIAKAJQAFAHAFACIAEAUQAIAbAMAHIgJgCgAgWgIQgHgCABgIQAAgEAGgLQAEgGAJgMQAPgVAMgHIAIgCIAAAAQgFAEgFAIQgIAQgEAeIgEAHIgEAEIgHAEIgFABIgDAAIgDgBg");
	this.shape_569.setTransform(421.7,-192.4);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#EC672C").s().p("AgXAwIgEgTIgBgHIAGAFIABABIADADQAGADAJABQAHABAIgCQAIgCAGgGIAEgEIgCAMQgDAOgGANIgFAJQgFAGgHAEIgDACIgCAAQgMgHgIgbgAgRhEQAFgJAFgDIABgBQACAAAFAFQAHAFACADQALANAEARIACANQgJgKgMAAQgNgBgHADQgGACgDAEQgDABgDADQAEgeAIgPg");
	this.shape_570.setTransform(425.2,-192.4);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#E18F59").s().p("AgGAKIgBgCIAGgIIAHgKQAEAFgDAGQgDAAgEADQgCACgBACQgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAIgBgBg");
	this.shape_571.setTransform(419.4,-173.5);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#EEC09E").s().p("AAeAXQgEgDgDgFQgCgEgBgIQgKgCAEgBIADgBIADAAQABgIADgGIAGgHIAGgFQgEAGACAJIACALQAAAFgCAFQgEAKAGAJIgGgFgAgbAXQAAgCAMgPIgGAFQgJAFgCAAQgIADALgKIAGgGIACAAIgCAAIgEACIgGAEIgBAAIgBgCQABgEALgGIgLAEQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIACgCQAEgEAIgEIARgGIABAAQAAAGAEADQADABADABIAFgCIgEAHIgIALIgFAIQgFAFgCgBIgBgCIABgBQAJgNgEADIgJAJQgIAGgCAAIgBgCg");
	this.shape_572.setTransform(419.2,-174.5);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#393939").s().p("AAVBQQgQgGgOgUQgKgNgGgMIgDgIQgBAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQABgCAEgDQAEgCAEAAIAKAJIAKAJIAEATQAIAbAMAHQgFAAgEgCgAgWgIQgHgDABgGQAAgGAGgJQAEgIAJgKQAPgWAMgGQAEgDAEAAIAAABQgFADgFAIQgIARgEAdIgEAHIgEADQgEAEgDABIgFACQgEgBgCgBg");
	this.shape_573.setTransform(421.7,-174.4);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#FFF6CD").s().p("AgIAjQgJAAgGgEIgDgDIgCgBQgGgJAEgKQACgFAAgEIgCgLQgCgKAEgFQACgEAGgCQAHgCANAAQANAAAJAKIACADQAEAFACAGQADAGAAAFQAAAHgEAIQgBAEgEAEIgEADQgFAFgIADIgLACIgEgBg");
	this.shape_574.setTransform(425.8,-174.5);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#372511").s().p("AgKBNQgEgBgDgEIAFgKQAHgMACgOIACgMQACgDABgFQADgHABgJQgBgDgCgGQgCgHgCgFIgCgDIgDgNQgEgQgKgNQAFgIAFgCQAHgDAEAEQAHAFAGARQAHAYABAgQgBAhgHAUQgGAPgHAFQgCACgEAAIgFgBg");
	this.shape_575.setTransform(428.5,-174.6);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#424242").s().p("AgDBSQgMgHgIgbIgEgTIgBgGIAGAEIABABIADADQAGAEAJAAQAHABAIgCQAIgDAGgFIAEgDIgCALQgDAOgGANIgFAJQgFAGgHAEIgDACgAgRhFQAFgIAFgDIABgBQACgBAFAGQAHAFACADQALANAEARIACANQgJgKgMAAQgNAAgHACQgGACgDAEIgGAEQAEgdAIgRg");
	this.shape_576.setTransform(425.2,-174.5);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#372511").s().p("AgKBNQgEgBgDgEIAFgKQAHgMACgOIACgLQACgEABgFQADgHABgIQgBgEgCgGQgCgGgCgGIgCgCIgDgNQgEgRgKgNQAFgHAFgDQAHgDAEAEQAHAGAGAQQAHAYABAgQgBAhgHAUQgGAPgHAFQgBACgEAAIgGgBg");
	this.shape_577.setTransform(428.5,-156.7);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAHgKQAEAFgDAGQgDAAgEADQgCACgBACQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIgBgCg");
	this.shape_578.setTransform(419.4,-155.6);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#EEC09E").s().p("AAeAYQgEgEgDgFQgCgEgBgIQgKgBAEgCIADAAIADgBQABgIADgHIAGgHIAGgDQgEAFACAJIACAMQAAAEgCAEQgEALAGAIIgGgDgAgbAYQAAgFAMgNIgGAEQgJAHgCAAQgIACALgLIAGgFIACgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAIgEADIgGACIgBAAIgBgBQABgEALgGQgLAEAAgBIgBAAIACgBQAEgEAIgFIARgGIABgBQAAAHAEADQADACADgBIAFgBIgEAHIgIAKIgFAIQgFAGgCgBIgBgCIABgCQAJgMgEADIgJAIQgIAHgCAAIgBgBg");
	this.shape_579.setTransform(419.2,-156.6);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#000000").s().p("AgIAkQgJgBgGgEIgDgDIgCgBQgGgIAEgLQACgFAAgEIgCgLQgCgJAEgGQACgEAGgCQAHgCANABQANAAAJAJIACADQAEAFACAHQADAFAAAFQAAAIgEAHQgBAEgEAEIgEAEQgFAFgIACQgHACgFAAIgDAAg");
	this.shape_580.setTransform(425.8,-156.6);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#447BCD").s().p("AAVBQQgQgFgOgVQgKgNgGgLIgDgJQgBAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQABgCAEgCQAEgEAEABIAKAJIAKAKIAEASQAIAbAMAHIgJgCgAgWgHQgHgDABgHQAAgFAGgKQAEgHAJgMQAPgUAMgHIAIgDIAAABQgFADgFAJQgIAPgEAeIgEAHIgEAEQgEADgDACIgFABQgEAAgCgBg");
	this.shape_581.setTransform(421.7,-156.5);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#628DD1").s().p("AgDBSQgMgHgIgaIgEgTIgBgHIAGAEIABABIADADQAGAEAJABQAHAAAIgCQAIgCAGgFIAEgEIgCALQgDAPgGAMIgFAKQgFAGgHADIgDACgAgRhEQAFgJAFgDIABgBQACAAAFAFIAJAIQALANAEARIACANQgJgJgMAAQgNgBgHACQgGACgDAEIgGAEQAEgdAIgQg");
	this.shape_582.setTransform(425.2,-156.6);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#E18F59").s().p("AgGAKIgBgCIAGgHIAGgLQAEAFgCAGQgEAAgDADIgEADQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAg");
	this.shape_583.setTransform(447.9,-24.8);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#372511").s().p("AgKBNIgHgFIAFgJQAGgNADgOIACgLQABgEACgFQAEgHgBgIQAAgEgCgGIgEgLIgDgDQAAgIgCgFQgEgRgLgNQAGgHAFgDQAHgDAEAFQAHAFAGAQQAIAYAAAgQAAAhgIAUQgGAPgHAFQgCADgEAAIgFgCg");
	this.shape_584.setTransform(457,-26);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#000000").s().p("AgIAjQgJAAgHgEIgDgDIAAAAQgHgJAEgLQACgEAAgFIgCgLQgCgJAEgGQADgEAFgCQAHgCANAAQAMABAJAJIADADIAGALQACAHAAAEQABAIgEAHQgCAEgDAEIgEAEQgGAFgIACQgEACgDAAIgHgBg");
	this.shape_585.setTransform(454.3,-25.8);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_586.setTransform(452.9,-33.9);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#48608E").s().p("AgEBSQgLgHgIgbIgEgTIgBgGIAGAEIABABIADACQAGAEAKABQAGABAIgCQAIgCAFgFIAEgEIgCALQgCAOgHANIgFAJQgEAHgIADIgCACIgCAAIgBAAgAgRhFQAEgIAFgDIABAAIABgBQACAAAFAFQAGAEADAEQAKANAEARQACAFABAIQgJgJgMgBQgOgBgHADQgFACgDAEIgFAEQACgeAJgQg");
	this.shape_587.setTransform(453.7,-25.8);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#3A4D75").s().p("AAVBQQgQgGgOgUQgJgNgGgLIgEgJQgBgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAFgDQAEgDAEgBIAKAJIAKAKIAEATQAJAbALAHQgEAAgFgCgAgWgHQgHgDABgIQAAgFAGgKIANgSQAPgVAMgGQAFgDADAAIAAABQgFADgEAIQgJAQgDAeQgEADgBAEIgDAEIgIAEIgFABIgGAAg");
	this.shape_588.setTransform(450.2,-25.8);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#EEC09E").s().p("AAeAXIgHgIQgCgFgBgHQgJgBADgCQAAAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAIADAAQAAgIAEgHQACgEAEgDIAGgEQgEAGACAJIACALQAAAFgCAEQgEALAHAJIgHgFgAgcAXQABgDAMgOIgHAEIgKAHQgIABAKgKIAHgFIABgBIgCAAQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBABIgGAEIgBgBIAAgCQABgEALgFIgMADIAAAAIABgCQAEgEAJgEIARgGIABgBQgBAHAFADIAGABIAFgBIgFAHIgHALIgFAIQgFAFgCgBIgBgCIAAgCQAKgMgEADIgKAIQgIAGgCAAIgBgBg");
	this.shape_589.setTransform(447.7,-25.8);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAGgKQAEAEgCAHQgEAAgDADQgCABgCADQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_590.setTransform(447.9,-43.5);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#41210C").s().p("AgJAkQgJgBgGgEIgDgCIgBgCQgGgIAEgKQACgGgBgDIgCgMQgBgJADgFQADgEAGgDQAHgDANABQAMABAJAJIADADQAEAFACAHQACAGAAAEQAAAHgDAIQgCAFgDADIgEAEQgGAFgIACQgGACgEAAIgFAAg");
	this.shape_591.setTransform(454.3,-44.6);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#EEC09E").s().p("AAfAXQgFgDgDgFQgCgFgBgHQgKgCAEgBIAEAAIACgBQABgJADgFIAGgIIAGgDQgDAFABAJIACAMQAAADgCAGQgDAKAFAIIgFgEgAgbAXQAAgDAMgOIgGAEIgLAGQgIACALgJIAGgGIACgCIgCACIgEACIgGAEIgBAAIgBgCQABgFALgFIgLADIgBAAIACgCQAEgEAIgEIARgGIABgBQAAAHAEADQADABADAAIAFgBIgEAHIgIALIgEAHQgGAGgCgBIgBgCIABgCQAJgMgDADIgKAIQgIAGgCAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_592.setTransform(447.6,-44.6);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#372511").s().p("AgKBNQgEgCgDgEIAFgJQAGgNADgOIACgLQABgDACgFQADgIAAgIQAAgDgCgGQgCgHgCgFIgDgDIgCgNQgEgQgLgNQAGgIAFgCQAHgDAEAEQAHAFAFARQAJAYAAAfQgBAhgIAVQgFAOgHAFQgCADgEAAIgFgBg");
	this.shape_593.setTransform(457,-44.7);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#EC672C").s().p("AgXAwIgEgTIgBgHIAGAFIABABIADADQAGADAJABQAHABAIgDQAIgCAGgFIAEgEIgCALQgDAPgGANIgFAJQgFAGgHAEIgDABIgCABQgMgHgIgbgAgRhFQAFgIAFgDIABgBQACgBAFAGQAHAFACADQALANAEARIACANQgJgKgMAAQgNgBgHADQgGACgDAEIgGAEQAEgeAIgQg");
	this.shape_594.setTransform(453.7,-44.5);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#E64A00").s().p("AAVBQQgQgGgOgUQgKgNgGgLIgDgJQgBAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQACgDADgCQAEgCAEAAIAKAIQAFAHAFADIAEATQAIAbAMAHIgJgCgAgWgHQgHgEABgHQAAgEAGgKIANgTQAPgVAMgGQAEgCAEgBIAAAAQgFAEgFAIQgIAQgEAeIgEAHIgEADIgHAGIgFAAIgDAAIgDAAg");
	this.shape_595.setTransform(450.2,-44.5);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_596.setTransform(452.9,-73.7);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#E18F59").s().p("AgBAAIgGgIIABgBIABgBQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAIAEAEQADADAEAAQACAGgEAFIgGgLg");
	this.shape_597.setTransform(447.9,-82.8);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgEgHAAgIIgDAAIgDgCQgDgBAJgBQABgHACgFIAHgIIAHgFQgHAJAEALQACAEAAAFIgCALQgCAJAEAGIgGgEgAgEARIgRgGQgJgEgEgEIgBgDIAAAAIAMAEQgLgGgBgDIAAgCIABgBIAGAEIAEACIACABIgBgBIgHgFQgKgKAIABIAKAHIAHAEQgMgOgBgDQAAgEALAJIAKAIQAEADgKgMIAAgCIABgCQACgBAFAFIAFAIIAHALIAFAHQgCgBgDAAQgEAAgCABQgFADABAHIgBgBg");
	this.shape_598.setTransform(447.7,-81.8);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#000000").s().p("AgUAiQgFgCgDgEQgEgGACgJIACgLQAAgEgCgFQgEgLAHgIIAAgBIADgDQAHgEAJAAQAIgCAGADQAIACAGAFIAEAEQADAEACAFQAEAHgBAGQAAAFgCAHQgCAGgEAFIgDADQgJAJgMABIgFAAQgKAAgFgCg");
	this.shape_599.setTransform(454.3,-81.9);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#4A7328").s().p("AASBPQgMgGgPgVIgNgSQgGgKAAgFQgBgHAHgDQACgBAEAAQADAAACABQAEABAEAEIADAEIAFAHQADAdAJAQQAEAJAFACIAAABQgDAAgFgDgAgWgMIgFgEQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAABAAIAEgKQAGgLAJgNQAOgUAQgGQAFgCAEAAQgLAHgJAbIgEATIgKAKIgKAJQgEgBgEgCg");
	this.shape_600.setTransform(450.2,-81.9);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#609634").s().p("AgGBSIgBgBIgBAAQgFgCgEgJQgJgQgCgdIAFAEQADADAFACQAHADAOgBQAMAAAJgJQgBAHgCAFQgEASgKANIgJAHQgEAFgDAAIAAAAgAAZgZQgFgFgIgCQgIgDgGABQgKABgGAEIgDACIgBABIgGAFIABgHIAEgTQAIgbALgHIADAAIACACQAIAEAEAGIAFAJQAHANACAPIACALIgEgEg");
	this.shape_601.setTransform(453.7,-81.9);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#372511").s().p("AgKBNQgFgCgGgHQALgNAEgSQACgFAAgHIADgEQACgFACgGQACgGAAgEQABgIgEgHQgCgEgBgEIgCgLQgDgPgGgNIgFgJQAEgEADgBQAHgDAEAEQAHAFAGAPQAIAVAAAgQAAAggIAZQgGAPgHAFQgCAEgEAAIgFgCg");
	this.shape_602.setTransform(457,-81.7);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_603.setTransform(452.9,1.1);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#E18F59").s().p("AgBAAIgGgIIABgBIABgBQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAIAEAEQADACAEABQACAGgEAFIgGgLg");
	this.shape_604.setTransform(447.9,-8);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#000000").s().p("AgUAiQgFgCgDgEQgEgGACgJIACgLQAAgEgCgFQgEgLAHgIIAAgBIADgDQAHgEAJAAQAIgBAGACQAIACAGAFIAEAEQADAEACAFQAEAHgBAGQAAAFgCAHQgCAGgEAFIgDADQgJAJgMABIgFAAQgKAAgFgCg");
	this.shape_605.setTransform(454.3,-7);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#5BB1B0").s().p("AASBPQgMgGgPgVIgNgTQgGgJAAgFQgBgIAHgCQACgBAEAAQADAAACABQAEABAEADIADAFIAFAGQADAeAJAQQAEAJAFACIAAABQgDgBgFgCgAgWgNIgFgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAABgBIAEgJQAGgLAJgNQAOgUAQgGIAJgBQgLAGgJAbIgEATIgKAJIgKAJQgEAAgEgDg");
	this.shape_606.setTransform(450.2,-7);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#6BD3D2").s().p("AgGBSIgBgBIgBAAQgFgCgEgJQgJgQgCgdIAFAEQADAEAFABQAHADAOgBQAMAAAJgJQgBAHgCAFQgEASgKANIgJAHQgEAFgDAAIAAAAgAAZgZQgFgFgIgCQgIgDgGABQgKABgGAEIgDACIgBABIgGAFIABgHIAEgTQAIgbALgGQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABIACABQAIAEAEAGIAFAJQAHANACAPIACALIgEgEg");
	this.shape_607.setTransform(453.7,-7.1);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#372511").s().p("AgKBNQgFgCgGgHQALgNAEgSQACgFAAgHIADgEQACgFACgGQACgGAAgEQABgIgEgHQgCgEgBgEIgCgLQgDgPgGgNIgFgJQAEgEADgBQAHgDAEAEQAHAGAGAOQAIAVAAAgQAAAggIAZQgGAPgHAFQgCADgEAAIgFgBg");
	this.shape_608.setTransform(457,-6.9);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgEgHAAgIIgDAAIgDgCQgDgBAJgBQABgHACgFIAHgIIAHgFQgHAJAEALQACAEAAAFIgCALQgCAJAEAGIgGgEgAgEARIgRgGQgJgEgEgEIgBgDIAAAAIAMAEQgLgGgBgDIAAgCIABgBIAGAEIAEACIACABIgBgBIgHgFQgKgKAIABIAKAHIAHAEQgMgOgBgDQAAgEALAJIAKAIQAEADgKgMIAAgCIABgCQACgBAFAFIAFAIIAHALIAFAHQgCgBgDAAQgEAAgCABQgFADABAHIgBgBg");
	this.shape_609.setTransform(447.7,-7);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#EEC09E").s().p("AAeAXIgGgHQgDgFgBgJIgCAAIgEgCQgEAAAKgCQABgIACgEQADgFAFgDIAFgFQgFAJADAKQACAGAAAEIgCALQgBAJADAFIgGgEgAgEARIgRgGQgIgEgEgEIgCgDIABAAIALAEQgLgGgBgEIABgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAGAEIAEACQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAIgCgBIgGgGQgLgJAIABQACABAJAFIAGAFQgMgOAAgDQAAgEALAIIAKAJQADACgJgMIgBgBIABgCQACgBAGAFIAEAIIAIAKIAEAIIgFgCQgDABgDABQgEADAAAGIgBAAg");
	this.shape_610.setTransform(447.6,-63.1);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABIAEAEQADADAEAAQACAGgEAFIgGgLg");
	this.shape_611.setTransform(447.9,-64.2);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#447BCD").s().p("AASBPQgMgHgPgUIgNgTQgGgJAAgGQgBgHAHgCQACgCAEAAIAFACQADABAEADIAEAEIAEAHQAEAdAIARQAFAIAFADIAAABIgIgDgAgWgNIgFgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAABgBIADgIQAGgMAKgNQAOgUAQgGIAJgCQgMAHgIAbIgEATIgKAJIgKAJQgEAAgEgDg");
	this.shape_612.setTransform(450.2,-63.2);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#000000").s().p("AgUAhQgGgCgDgDQgDgGABgJIACgLQABgEgCgFQgEgLAGgIIABgCIADgCQAGgEAJgBQAJAAAGACQAIACAGAFIAEAEQADADACAFQADAHAAAHQAAAFgCAGQgCAHgEAFIgDADQgJAJgMAAIgFABQgKAAgFgDg");
	this.shape_613.setTransform(454.3,-63.2);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#628DD1").s().p("AgGBSIgBgBQgFgDgFgIQgIgRgEgdIAGAEQADAEAGACQAHADANgBQAMAAAJgKIgCANQgEARgLANIgJAIQgEAFgCAAIgBAAgAAagZQgGgFgIgDQgIgCgHABQgJAAgGAEIgDADIgBABIgGAEIABgGIAEgTQAIgbAMgHIACAAIADACQAHAEAFAGIAFAJQAGANADAOIACALIgEgDg");
	this.shape_614.setTransform(453.7,-63.2);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#372511").s().p("AgKBNQgFgCgGgHQALgNAEgRIACgNIADgDQACgFACgHQACgGAAgEQAAgIgDgHQgCgFgBgDIgCgLQgDgPgGgMIgFgKQADgEAEgBQAHgDAEAEQAHAFAFAPQAIAVABAgQAAAggJAZQgFAQgHAFQgCACgEAAIgFgBg");
	this.shape_615.setTransform(457,-63.1);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#E18F59").s().p("AgGAKIgBgBIAGgIIAGgLQAEAFgCAGIgHADIgEAEQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_616.setTransform(447.9,-137.1);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_617.setTransform(452.9,-146.2);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#4A7328").s().p("AAVBQQgQgGgOgUQgJgNgGgMIgEgJQgBAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAFgDIAIgEIAKAJIAKAKIAEATQAJAbALAGIgJgBgAgWgIQgHgDABgHQAAgFAGgKIANgSQAPgVAMgGQAFgCADgBIAAABQgFACgEAJQgJAQgDAdQgEAEgBADIgDAFQgEADgEABQgCACgDgBQgEABgCgCg");
	this.shape_618.setTransform(450.2,-138);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#000000").s().p("AgIAjQgJAAgHgEIgDgDIAAgBQgHgIAEgLQACgFAAgEIgCgLQgCgJAEgGQADgEAFgCQAHgDANABQAMABAJAJIADADQAEAFACAGQACAHAAAEQABAHgEAHQgCAFgDAEIgEAEQgGAFgIACQgFACgEAAIgFgBg");
	this.shape_619.setTransform(454.3,-138.1);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#372511").s().p("AgKBNQgDgBgEgEIAFgJQAGgNADgPIACgLQABgEACgEQAEgHgBgJQAAgDgCgGQgCgGgCgFIgDgEQAAgHgCgFQgEgSgLgNQAGgHAFgCQAHgEAEAGQAHAFAGAPQAIAZAAAgQAAAggIAVQgGAOgHAGQgCACgDAAIgGgBg");
	this.shape_620.setTransform(457,-138.2);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#609634").s().p("AgEBRQgLgGgIgbIgEgTIgBgHIAGAFIABABIADACQAGAEAKABQAGABAIgDQAIgCAFgFIAEgEIgCALQgCAPgHANIgFAJQgEAGgIAEIgCABIgCABIgBgBgAgRhFQAEgJAFgCIABAAIABgBQACgBAFAGIAJAHQAKANAEASQACAFABAHQgJgJgMAAQgOgBgHADQgFABgDAEIgFAEQACgdAJgQg");
	this.shape_621.setTransform(453.7,-138);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#EEC09E").s().p("AAeAXIgHgIQgCgFgBgHQgJgBADgCQAAAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAIADAAQAAgIAEgHQACgEAEgDIAGgEQgEAGACAJIACALQAAAFgCAEQgEALAHAJIgHgFgAgcAXQABgDAMgOIgHAEIgKAHQgIABAKgKIAHgFIABgBIgCABIgEACIgGAEIgBgBIAAgCQABgDALgGIgMAEIAAgBIABgCQAEgEAJgEIARgGIABgBQgBAHAFADQACABAEAAQADAAACgBIgFAHIgHALIgFAIQgFAFgCgBIgBgCIAAgCQAKgMgEADIgKAIQgIAGgCAAIgBgBg");
	this.shape_622.setTransform(447.7,-138.1);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAGgKQAEAFgCAFQgEABgDACIgEAFQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAg");
	this.shape_623.setTransform(447.9,-118.3);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#000000").s().p("AgIAjQgJAAgHgEIgDgDIAAAAQgHgJAEgLQACgFAAgEIgCgLQgCgJAEgGQADgEAFgCQAHgCANAAQAMABAJAJIADADQAEAFACAGQACAHAAAEQABAHgEAIQgCAEgDAEIgEAEQgGAFgIACQgEACgDAAIgHgBg");
	this.shape_624.setTransform(454.3,-119.4);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#372511").s().p("AgKBNQgDgBgEgEIAFgJQAGgNADgOIACgMQABgDACgFQAEgHgBgJQAAgDgCgGQgCgGgCgFIgDgEQAAgHgCgFQgEgRgLgNQAGgIAFgCQAHgDAEAFQAHAFAGAQQAIAYAAAgQAAAhgIAUQgGAPgHAFQgCACgEAAIgFgBg");
	this.shape_625.setTransform(457,-119.5);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_626.setTransform(452.9,-127.5);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#3A4D75").s().p("AAVBQQgQgGgOgUQgJgNgGgLIgEgJQgBgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAFgEQAEgCAEgBIAKAJIAKAKIAEATQAJAbALAHQgEAAgFgCgAgWgHQgHgEABgHQAAgFAGgKIANgSQAPgVAMgGQAFgDADAAIAAABQgFACgEAJQgJAQgDAdIgFAIIgDADQgEAEgEABQgCABgDAAIgGAAg");
	this.shape_627.setTransform(450.2,-119.3);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#48608E").s().p("AgEBSQgLgHgIgbIgEgTIgBgHQACADAEACIABABIADACQAGAEAKABQAGABAIgCQAIgCAFgGIAEgEIgCAMQgCAOgHANIgFAJQgEAGgIAEIgCACIgCAAIgBAAgAgRhFQAEgJAFgCIABAAIABgBQACAAAFAFQAGAEADAEQAKANAEARQACAFABAHQgJgJgMAAQgOgBgHADQgFACgDADIgFAEQACgdAJgQg");
	this.shape_628.setTransform(453.7,-119.3);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#EEC09E").s().p("AAeAXQgEgEgDgEQgCgFgBgHQgJgBADgCIADgBIADgBQAAgHAEgHIAGgHIAGgEQgEAGACAJIACALQAAAEgCAFQgEALAHAJQgEgCgDgDgAgcAXQABgDAMgPIgHAFIgKAGQgIACAKgKIAHgFIABgBIgCABIgEACIgGAEIgBgBIAAgCQABgEALgEIgMACIAAAAIABgCQAEgEAJgEQAKgDAHgEIABAAQgBAHAFADIAGABQADAAACgCIgFAIIgHALIgFAHQgFAGgCgBIgBgBIAAgCQAKgNgEADIgKAIQgIAGgCAAIgBgBg");
	this.shape_629.setTransform(447.7,-119.4);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_630.setTransform(437.6,-56.9);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#E18F59").s().p("AgBAAIgGgIIACgBIAAgBQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABIADAEIAHADQADAGgEAFIgHgLg");
	this.shape_631.setTransform(432.6,-66.1);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#EEC09E").s().p("AAeAYQgEgDgCgEQgEgHAAgIIgDAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQgDgBAJgBQABgHACgFQACgEAFgEIAHgFQgHAJAEALQACAEAAAFIgCALQgCAJAEAGIgGgEgAgEARIgRgGQgJgEgEgEIgBgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAMAEQgLgFgCgEIABgCIABgBIAGAEQABAAABABQABAAAAABQABAAAAAAQAAABAAAAIACAAIgBgBIgHgFQgKgKAIABIAKAHIAHAEQgMgOgBgDQAAgDALAIIAKAIQAEADgKgMIAAgCIABgCQACgBAFAFIAFAIIAHALIAFAHQgCgBgDAAQgEAAgCABQgFADABAHIgBgBg");
	this.shape_632.setTransform(432.5,-65.1);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#000000").s().p("AgUAiQgGgCgCgEQgEgGACgJIACgLQAAgFgCgEQgEgLAHgJIAAAAIADgDQAHgEAJgBQAIgBAGADQAIACAGAFIAEAEQADAEACAEQAEAHgBAHQAAAFgCAGQgCAGgEAGIgDADQgJAJgMABIgDAAQgLAAgGgCg");
	this.shape_633.setTransform(439.1,-65.1);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#5BB1B0").s().p("AASBPQgMgHgPgUIgNgTQgGgJAAgGQgBgHAHgCQACgCAEAAQADAAACACIAIAEIADAEQABAEAEADQADAeAJAQQAEAIAFADIAAABQgDAAgFgDgAgWgNIgFgEQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAABgBIAEgJIAPgZQAOgTAQgGQAFgCAEAAQgLAHgJAbIgEATIgKAJIgKAKIgIgEg");
	this.shape_634.setTransform(435,-65.1);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#6BD3D2").s().p("AgGBSIgBgBIgBAAQgFgDgEgIQgJgQgCgeIAFAEQADAEAFACQAHADAOgBQAMgBAJgJQgBAHgCAGQgEARgKANIgJAIQgFAFgCAAIAAAAgAAZgaQgFgFgIgCQgIgCgGABQgKABgGADIgDADIgBABIgGAEIABgGIAEgTQAIgbALgHQAAAAABAAQAAAAAAAAQAAAAABAAQAAAAABAAIACACQAIAEAEAGIAFAJQAHANACAOIACALIgEgEg");
	this.shape_635.setTransform(438.5,-65.1);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#372511").s().p("AgKBNQgFgCgGgHQALgNAEgSQACgFAAgHIADgDQACgGACgGQACgGAAgEQABgIgEgHQgCgEgBgEIgCgLQgDgPgGgNIgFgJQADgEAEgBQAHgDAEAEQAHAGAGAPQAIAUAAAgQAAAggIAZQgGAPgHAFQgCADgEAAIgFgBg");
	this.shape_636.setTransform(441.8,-65);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_637.setTransform(437.6,16.7);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#E18F59").s().p("AgBAAIgGgIIACgBIAAgBQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAIADAEQAEADADAAQADAGgEAFIgHgLg");
	this.shape_638.setTransform(432.6,7.5);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgEgHAAgHIgDgBQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQgDgBAJgBQABgHACgFQACgEAFgEIAHgFQgHAJAEALQACAEAAAFIgCALQgCAJAEAGIgGgEgAgEASIgRgHQgJgEgEgEIgBgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAMAEQgLgFgCgEIABgCIABgBIAGAEIAEADIACAAIgBgBIgHgFQgKgKAIABIAKAHIAHAEQgMgOgBgDQAAgDALAIIAKAIQAEADgKgMIAAgCIABgBQACgCAFAFIAFAIIAHALIAFAHIgFgBIgGABQgFADABAHIgBAAg");
	this.shape_639.setTransform(432.5,8.5);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#4A7328").s().p("AASBPQgMgGgPgVIgNgSQgGgKAAgFQgBgHAHgDIAGgBIAFABIAIAEIADAEIAFAIQADAdAJAQQAEAIAFADIAAABQgDAAgFgDgAgWgMIgFgEQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAABgBIAEgJQAGgLAJgNQAOgUAQgGQAFgCAEAAQgLAHgJAbIgEATIgKAKIgKAJQgEgBgEgCg");
	this.shape_640.setTransform(435,8.5);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#000000").s().p("AgUAiQgGgCgCgEQgEgGACgJIACgLQAAgFgCgEQgEgLAHgJIAAAAIADgDQAHgEAJAAQAIgCAGADQAIACAGAFIAEAEQADAEACAEQAEAIgBAGQAAAFgCAHQgCAGgEAFIgDADQgJAJgMABIgDAAQgLAAgGgCg");
	this.shape_641.setTransform(439.1,8.5);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#609634").s().p("AgGBSIgBgBIgBAAQgFgDgEgIQgJgQgCgdIAFADQADAEAFACQAHADAOgBQAMAAAJgKQgBAIgCAFQgEARgKANQgDAEgGAEQgFAFgCAAIAAAAgAAZgZQgFgGgIgCQgIgCgGABQgKABgGAEIgDACIgBABIgGAEIABgGIAEgTQAIgbALgHIADAAIACACQAIAEAEAGIAFAJQAHANACAOIACALIgEgDg");
	this.shape_642.setTransform(438.5,8.5);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#372511").s().p("AgKBNQgFgCgGgIQALgNAEgRQACgFAAgIIADgDQACgFACgGQACgGAAgEQABgIgEgHQgCgFgBgEIgCgLQgDgOgGgNIgFgJQADgEAEgBQAHgDAEAEQAHAFAGAPQAIAUAAAhQAAAggIAYQgGAQgHAFQgCADgEAAIgFgBg");
	this.shape_643.setTransform(441.8,8.7);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#41210C").s().p("AgUAiQgGgCgDgEQgDgGABgJIACgLQABgFgCgFQgEgKAGgJIABgBIADgCQAGgDAJgCQAJAAAGACQAIACAGAFIAEAEQADAEACAEQADAIAAAGQAAAGgCAFQgCAHgEAFIgDACQgJAKgMABIgDAAQgLAAgGgCg");
	this.shape_644.setTransform(439.1,-101.7);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#EC672C").s().p("AgGBSIgBgBQgFgDgFgIQgIgQgEgeIAGAEQADAEAGADQAHACANAAQAMgBAJgKIgCANQgEARgLANIgJAIQgEAFgCAAIgBAAgAAagZQgGgFgIgCQgIgDgHABQgJABgGADIgDADIgBABIgGAFIABgHIAEgTQAIgbAMgHIACABIADACQAHADAFAGIAFAJQAGANADAPIACALIgEgEg");
	this.shape_645.setTransform(438.5,-101.8);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#372511").s().p("AgKBNQgFgDgGgHQALgNAEgRIACgNIADgCQACgGACgGQACgGAAgEQAAgIgDgHQgCgFgBgDIgCgLQgDgPgGgNIgFgJQADgEAEgCQAHgCAEAEQAHAGAFAOQAIAVABAgQAAAggJAYQgFAQgHAFQgCADgEAAIgFgBg");
	this.shape_646.setTransform(441.8,-101.6);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABQABADACABQAEADADAAQADAGgEAFIgHgLg");
	this.shape_647.setTransform(432.6,-102.8);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#E64A00").s().p("AASBPQgMgGgPgVIgNgTQgGgJAAgGQgBgHAHgCQACgCAEABIAFABIAHAEIAEAEQABAFADACQAEAeAIAQQAFAIAFADIAAABIgIgDgAgWgNQgDgBgCgDQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBABAAIADgIQAGgMAKgNQAOgUAQgGIAJgCQgMAHgIAbIgEATQgFADgFAHIgKAIQgEAAgEgDg");
	this.shape_648.setTransform(435,-101.8);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#EEC09E").s().p("AAeAXQgDgCgDgFQgDgFgBgJIgCAAIgEgCQgEAAAKgCQABgHACgFQADgEAFgEIAFgFQgFAJADAKQACAFAAAFIgCALQgCAJAEAGIgGgFgAgEARIgRgGQgIgEgEgEIgCgDIABAAQAAAAALAEQgLgFgBgEIABgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAGAEIAEACIACABIgCgBIgGgGQgLgJAIACIALAGIAGAEQgMgNAAgEQAAgEALAIIAKAJQADADgJgMIgBgCIABgCQACgBAFAFIAFAIIAIALIAEAHIgFgBQgDAAgDABQgEADAAAGIgBAAg");
	this.shape_649.setTransform(432.4,-101.7);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#E18F59").s().p("AgGAKIgBgCIAGgIIAHgKQAEAFgDAGQgDAAgEADIgDAEQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIgBgBg");
	this.shape_650.setTransform(432.6,-192.5);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#EEC09E").s().p("AAfAYQgFgEgDgFQgCgEgBgIQgKgBAEgCIAEAAIACgBQABgIADgHIAGgHIAGgDQgEAEACALIACALQAAAEgCAEQgDALAFAIIgFgDgAgbAYQAAgEAMgOIgGAEQgJAHgCAAQgIACALgLIAGgGIACAAIgCAAIgEAEIgGACIgBAAIgBgBQABgFALgFIgLADIgBAAIACgCIAMgIIARgGIABgBQAAAHAEADQADACADgBIAFgBIgEAHIgIAKIgFAIQgFAGgCgBIgBgCIABgCQAJgMgDADIgKAIQgIAGgCAAIgBAAg");
	this.shape_651.setTransform(432.4,-193.5);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#FFF6CD").s().p("AgJAkQgJgBgGgEIgDgDIgBgBQgGgIAEgLQACgFgBgEIgCgLQgBgKADgFQADgEAGgCQAHgCANAAQAMAAAJAKIADADQAEAFACAGQACAGAAAFQAAAIgDAHQgCAEgDAEIgEADQgGAGgIACQgGACgFAAIgEAAg");
	this.shape_652.setTransform(439.1,-193.5);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#372511").s().p("AgKBNQgEgBgDgEIAFgKQAGgMADgOIACgLQABgEACgFQADgHAAgIQAAgEgCgGQgCgHgCgFIgDgCIgCgNQgEgRgLgNQAGgHAFgDQAHgDAEAEQAHAGAFAQQAJAYAAAgQgBAhgIAUQgFAPgHAFQgCACgEAAIgFgBg");
	this.shape_653.setTransform(441.8,-193.6);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#393939").s().p("AAVBQQgQgFgOgVQgKgNgGgLIgDgJQgBAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAFgEQAEgEAEABIAKAJIAKAKIAEASQAIAbAMAHQgFAAgEgCgAgWgHQgHgDABgIQAAgEAGgKQAEgHAJgLQAPgVAMgGQAEgDAEgBIAAAAQgFAEgFAJQgIAPgEAeIgEAHIgEAEIgHAFIgFABQgEAAgCgBg");
	this.shape_654.setTransform(435,-193.4);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#424242").s().p("AgDBSQgMgHgIgaIgEgTIgBgHIAGAEIABABIADADQAGAEAJABQAHAAAIgCQAIgCAGgGIAEgDIgCALQgDAPgGAMIgFAKQgFAGgHADIgDACgAgRhEQAFgJAFgDIABgBQACAAAFAFIAJAIQALANAEARIACANQgJgKgMAAQgNAAgHACQgGACgDAEIgGAEQAEgdAIgQg");
	this.shape_655.setTransform(438.5,-193.5);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABIADAEQAEADADAAQADAGgEAFIgHgLg");
	this.shape_656.setTransform(432.6,-212.7);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#000000").s().p("AgUAiQgGgCgDgEQgDgGABgJIACgLQABgEgCgFQgEgLAGgIIABgCIADgCQAGgEAJgBQAJAAAGACQAIACAGAFIAEAEQADAEACAEQADAHAAAHQAAAGgCAFQgCAHgEAFIgDADQgJAJgMAAIgGABQgJAAgFgCg");
	this.shape_657.setTransform(439.1,-211.7);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#EEC09E").s().p("AAeAXIgGgGQgDgHgBgIIgCgBIgEgBQgEgBAKgCQABgGACgFQADgFAFgEIAFgDQgFAIADALQACAFAAADIgCAMQgCAJAEAGIgGgFgAgEARIgRgGQgIgFgEgEIgCgCIABAAQAAAAALAEQgLgGgBgEIABgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAABIAGACIAEADQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAIgCgBIgGgFQgLgKAIACQACgBAJAHIAGAEQgMgOAAgEQAAgDALAJIAKAIQADACgJgLIgBgCIABgCQACgBAFAGIAFAIIAIAKIAEAHIgFgBQgDAAgDABQgEACAAAIIgBgBg");
	this.shape_658.setTransform(432.4,-211.7);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#628DD1").s().p("AgGBSIgBgBQgFgDgFgJQgIgQgEgdIAGAEQADAEAGACQAHACANgBQAMAAAJgJIgCANQgEARgLANIgJAIQgEAFgCAAIgBAAgAAagaQgGgFgIgCQgIgCgHAAQgJABgGAEIgDACIgBACIgGAEIABgHIAEgTQAIgaAMgHIACAAIADACQAHADAFAGIAFAKQAGAMADAPIACALIgEgEg");
	this.shape_659.setTransform(438.5,-211.7);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#447BCD").s().p("AASBPQgMgHgPgUQgJgLgEgIQgGgJAAgGQgBgHAHgDQACgBAEAAIAFABQADABAEAEIAEAEIAEAHQAEAeAIAPQAFAJAFADIAAABIgIgDgAgWgNIgFgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAgBABAAIADgIQAGgMAKgNQAOgVAQgFIAJgCQgMAHgIAbIgEATIgKAJIgKAJQgEAAgEgDg");
	this.shape_660.setTransform(435,-211.7);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#372511").s().p("AgKBNQgFgDgGgHQALgNAEgRIACgNIADgCQACgGACgGQACgGAAgEQAAgIgDgHQgCgFgBgEIgCgLQgDgOgGgMIgFgKQADgEAEgBQAHgDAEAEQAHAFAFAPQAIAUABAhQAAAggJAYQgFAQgHAGQgCACgDAAIgGgBg");
	this.shape_661.setTransform(441.8,-211.6);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_662.setTransform(437.6,-166.9);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#000000").s().p("AgUAiQgGgCgCgEQgEgGACgJIACgLQAAgFgCgEQgEgLAHgJIAAAAQABgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAHgEAJgBQAIgBAGADQAIACAGAFIAEAEQADAEACAEQAEAHgBAHQAAAFgCAHIgGALIgDADQgJAJgMABIgDAAQgLAAgGgCg");
	this.shape_663.setTransform(439.1,-175);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#48608E").s().p("AgGBSIgBgBIgBAAQgFgDgEgIQgJgQgCgeIAFAEQADAEAFACQAHADAOgBQAMgBAJgJQgBAIgCAFQgEARgKANIgJAIQgFAFgCAAIAAAAgAAZgaQgFgFgIgCQgIgCgGABQgKABgGAEQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIgBABIgGAEIABgGIAEgTQAIgbALgHIADAAIACACQAIADAEAHIAFAJQAHANACAOIACALIgEgEg");
	this.shape_664.setTransform(438.5,-175.1);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#372511").s().p("AgKBNQgFgCgGgHQALgNAEgSQACgFAAgHIADgDIAEgLQACgHAAgEQABgIgEgHQgCgEgBgEIgCgLQgDgPgGgNIgFgJQADgEAEgBQAHgDAEAEQAHAGAGAOQAIAVAAAgQAAAggIAZQgGAPgHAGQgCACgDAAIgGgBg");
	this.shape_665.setTransform(441.8,-174.9);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#E18F59").s().p("AgBAAIgGgHIACgBIAAgCQAAAAAAABQAAAAAAABQAAAAABABQAAAAABAAIADAEQAEADADAAQADAGgEAFIgHgLg");
	this.shape_666.setTransform(432.6,-176);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#3A4D75").s().p("AASBPQgMgHgPgUIgNgSQgGgKAAgFQgBgIAHgDIAGAAIAFABIAIAEIADAEQABAEAEADQADAeAJAQQAEAIAFADIAAABQgDAAgFgDgAgWgNIgFgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAABgBIAEgJIAPgZQAOgTAQgGQAFgCAEAAQgLAHgJAbIgEATIgKAKIgKAJQgEgBgEgDg");
	this.shape_667.setTransform(435,-175.1);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#EEC09E").s().p("AAeAYQgEgDgCgEQgEgHAAgIIgDAAQAAAAgBgBQgBAAAAAAQgBAAAAgBQAAAAAAAAQgDgBAJgBQABgHACgFQACgEAFgEIAHgFQgHAJAEALQACAEAAAFIgCALQgCAJAEAGIgGgEgAgEARIgRgGQgJgEgEgEIgBgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAMAEQgLgFgCgEIABgCIABgBIAGAEQABABABAAQABAAAAABQABAAAAAAQAAAAAAABIACAAIgBgBIgHgFQgKgKAIABIAKAHIAHAEQgMgOgBgDQAAgDALAIIAKAIQAEADgKgMIAAgCIABgCQACgBAFAFIAFAIIAHALIAFAHIgFgBIgGABQgFADABAHIgBgBg");
	this.shape_668.setTransform(432.5,-175);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#41210C").s().p("AgUAiQgGgDgDgEQgDgFABgJIACgMQABgDgCgGQgEgKAGgIIABgCIADgCQAGgEAJgBQAJgBAGADQAIACAGAFIAEAEQADADACAFQADAIAAAGQAAAFgCAGQgCAHgEAFIgDACQgJAKgMABIgDAAQgLAAgGgCg");
	this.shape_669.setTransform(439.1,-156.7);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAQABADACABQAEADADAAQADAHgEAEIgHgLg");
	this.shape_670.setTransform(432.6,-157.8);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#EEC09E").s().p("AAeAXQgDgCgDgFQgDgGgBgIIgCgBIgEgBQgEAAAKgCQABgHACgFQADgFAFgDIAFgEQgFAIADAKQACAGAAADIgCAMQgCAJAEAFQgEgBgCgDgAgEARIgRgGQgIgEgEgEIgCgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIALAEQgLgFgBgFIABgCIABAAIAGAEIAEACIACACIgCgCIgGgGQgLgJAIACIALAGQAGAFAAgBQgMgOAAgDQAAgEALAJIAKAIQADADgJgMIgBgCIABgCQACgBAFAGIAFAHIAIALIAEAHIgFgBQgDAAgDABQgEACAAAIIgBgBg");
	this.shape_671.setTransform(432.4,-156.7);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#E64A00").s().p("AASBQQgMgHgPgVQgJgMgEgGQgGgLAAgEQgBgIAHgCQACgBAEAAIAFABIAHAEIAEAEQABAFADACQAEAeAIAQQAFAIAFAEIAAAAQgEgBgEgBgAgWgNQgDgBgCgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAIADgJQAGgLAKgNQAOgUAQgGIAJgCQgMAHgIAbIgEAUQgFACgFAHIgKAJQgEgBgEgDg");
	this.shape_672.setTransform(435,-156.8);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#EC672C").s().p("AgGBSIgBgBQgFgDgFgJQgIgPgEgeQADADADABQADAEAGACQAHADANgBQAMAAAJgKIgCANQgEARgLANQgCADgHAFQgEAFgCAAIgBAAgAAagZQgGgGgIgBQgIgDgHABQgJABgGADIgDADIgBABIgGAFIABgHIAEgTQAIgbAMgHIACAAIADACQAHAEAFAGIAFAJQAGANADAPIACALIgEgEg");
	this.shape_673.setTransform(438.5,-156.8);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#372511").s().p("AgKBNQgFgDgGgHQALgNAEgRIACgNIADgCQACgFACgHQACgGAAgEQAAgHgDgIQgCgFgBgDIgCgLQgDgOgGgNIgFgJQADgEAEgCQAHgDAEAFQAHAFAFAOQAIAVABAhQAAAfgJAYQgFARgHAFQgCACgEAAIgFgBg");
	this.shape_674.setTransform(441.8,-156.6);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#E18F59").s().p("AgFAKIgCgBIAGgIIAHgLQAEAFgDAGQgDAAgEADIgDAEQgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_675.setTransform(432.6,-119.2);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#EEC09E").s().p("AAeAXQgFgEgCgEQgCgFgBgHQgJgBADgCQAAAAAAAAQAAAAABAAQAAAAABAAQABgBAAAAIADAAQAAgIAEgHQACgEAEgDIAGgEQgEAGACAJIACALQAAAFgCAEQgEALAHAJIgHgFgAgcAXQABgDAMgOIgHAEIgKAHQgIABAKgKIAHgFIABgBIgCAAQAAABAAAAQAAAAgBAAQAAABgBAAQgBAAgBABIgGAEIgBgBIgBgCQACgEALgFIgMADQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIABgCQAEgEAJgEIARgGIABgBQgBAHAFADIAGABIAFgBIgFAHIgHALIgFAIQgFAFgCgBIgBgCIAAgCQAKgMgEADIgKAIQgIAGgCAAIgBgBg");
	this.shape_676.setTransform(432.5,-120.2);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#000000").s().p("AgIAkQgJgBgHgEIgDgDIAAAAQgHgJAEgLQACgEAAgFIgCgLQgCgJAEgGQACgEAGgCQAHgCANAAQAMABAJAJIADADIAGALQACAHAAAEQABAIgEAHQgCAEgDAEIgEAEQgGAFgIACQgFACgEAAIgFAAg");
	this.shape_677.setTransform(439.1,-120.2);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#372511").s().p("AgKBNQgEgBgDgEIAFgJQAGgNADgPIACgLQABgEACgEQAEgHgBgJQAAgDgCgHIgEgLIgDgDQAAgHgCgFQgEgSgLgNQAGgHAFgCQAHgEAEAFQAHAGAGAPQAIAZAAAgQAAAggIAUQgGAPgHAGQgCACgDAAIgGgBg");
	this.shape_678.setTransform(441.8,-120.3);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#4A7328").s().p("AAVBQQgQgGgOgTIgPgZIgEgJQgBgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAFgDQAEgDAEgBIAKAJIAKAKIAEATQAJAbALAHQgEAAgFgCgAgWgIQgHgCABgIQAAgFAGgKIANgSQAPgUAMgHQAFgDADAAIAAABQgFADgEAIQgJAQgDAeQgEADgBAEIgDAEIgIAEIgFABIgGgBg");
	this.shape_679.setTransform(435,-120.1);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#609634").s().p("AgEBSQgLgHgIgbIgEgTIgBgGIAGAEIABABIADACQAGAEAKABQAGABAIgCQAIgCAFgFIAEgEIgCALQgCAOgHANIgFAJQgEAGgIAEIgCACIgCAAIgBAAgAgRhFQAEgIAFgDIABAAIABgBQACAAAFAFIAJAIQAKANAEARQACAFABAIQgJgJgMgBQgOgBgHADQgFACgDAEIgFAEQACgeAJgQg");
	this.shape_680.setTransform(438.5,-120.1);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_681.setTransform(437.6,-128.3);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAHgKQAEAFgDAGQgDAAgEADIgDAEQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_682.setTransform(432.6,-137.5);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#000000").s().p("AgJAjQgJAAgGgEIgDgDIgBgBQgGgJAEgKQACgFgBgEIgCgMQgBgJADgFQADgEAGgCQAHgCANAAQAMAAAJAKIADACQAEAGACAGQACAGAAAFQAAAHgDAHQgCAFgDAEIgEADQgGAFgIADQgGACgFAAIgEgBg");
	this.shape_683.setTransform(439.1,-138.5);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#EEC09E").s().p("AAfAXQgFgDgDgFQgCgFgBgHQgKgCAEgBIAEgBIACAAQABgJADgFIAGgHIAGgFQgEAGACAJIACALQAAAEgCAGQgDAKAFAJIgFgFgAgbAXQAAgDAMgOIgGAFQgJAFgCAAQgIADALgKIAGgGIACgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAIgEACIgGAEQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBgCQABgEALgGIgLAEQAAAAgBgBQAAAAAAAAQAAAAAAAAQAAAAAAAAIACgCQAEgEAIgEIARgGIABAAQAAAGAEADQADABADABIAFgCIgEAHIgIALIgFAIQgFAFgCgBIgBgCIABgBQAJgNgDADIgKAJQgIAGgCAAIgBgCg");
	this.shape_684.setTransform(432.4,-138.5);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#447BCD").s().p("AAVBQQgQgGgOgUQgKgNgGgMIgDgJQgBAAAAAAQAAAAABgBQAAAAAAgBQABAAAAAAIAFgFQAEgCAEAAIAKAJIAKAJIAEATQAIAbAMAHIgJgCgAgWgIQgHgDABgGQAAgGAGgJIANgTQAPgVAMgGQAEgCAEgBIAAABQgFADgFAIQgIARgEAdIgEAHIgEADQgEAEgDABIgFACQgEgBgCgBg");
	this.shape_685.setTransform(435,-138.4);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#628DD1").s().p("AgDBSQgMgHgIgbIgEgTIgBgGIAGAEIABABIADADQAGAEAJAAQAHABAIgCQAIgDAGgFIAEgDIgCALQgDAOgGANIgFAJQgFAGgHAEIgDACgAgRhFQAFgIAFgDIABgBQACgBAFAGQAHAFACADQALANAEARIACANQgJgKgMAAQgNAAgHACQgGACgDAEIgGAEQAEgdAIgRg");
	this.shape_686.setTransform(438.5,-138.5);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#372511").s().p("AgKBNQgEgBgDgEIAFgKQAGgMADgPIACgLQABgDACgFQADgHAAgJQAAgDgCgGQgCgHgCgFIgDgDIgCgNQgEgQgLgNQAGgIAFgCQAHgDAEAEQAHAFAFARQAJAYAAAgQgBAggIAVQgFAPgHAFQgCACgEAAIgFgBg");
	this.shape_687.setTransform(441.8,-138.6);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_688.setTransform(437.6,-75.3);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#E18F59").s().p("AgBAAIgGgHIACgBIAAgCQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIADADQAEADADAAQADAGgEAFIgHgLg");
	this.shape_689.setTransform(432.6,-84.4);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgEgHAAgHIgDgBIgDgCQgDgBAJgBQABgHACgFQACgEAFgEQADgDAEgCQgHAJAEALQACAFAAAEIgCALQgCAJAEAGIgGgEgAgEASQgHgEgKgDQgJgEgEgEIgBgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAMAEQgLgFgCgEIABgCIABgBIAGAEIAEADIACAAIgBgBIgHgFQgKgKAIACIAKAGIAHAFQgMgPgBgDQAAgDALAIIAKAIQAEADgKgMIAAgCIABgBQACgCAFAGIAFAHIAHALIAFAIQgCgCgDAAIgGABQgFADABAHIgBAAg");
	this.shape_690.setTransform(432.5,-83.4);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#372511").s().p("AgKBNQgFgCgGgIQALgNAEgRQACgFAAgHIADgEQACgFACgGQACgGAAgEQABgIgEgHQgCgFgBgDIgCgMQgDgOgGgNIgFgJQADgEAEgBQAHgDAEAEQAHAFAGAPQAIAUAAAhQAAAggIAYQgGAQgHAFQgCADgEAAIgFgBg");
	this.shape_691.setTransform(441.8,-83.3);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#000000").s().p("AgUAiQgGgCgCgEQgEgGACgJIACgLQAAgEgCgFQgEgLAHgJIAAAAQABgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAHgEAJAAQAIgCAGADQAIACAGAFIAEAEQADAEACAEQAEAIgBAGQAAAFgCAHQgCAGgEAFIgDADQgJAJgMABIgDAAQgLAAgGgCg");
	this.shape_692.setTransform(439.1,-83.4);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#48608E").s().p("AgGBSIgBgBIgBAAQgFgCgEgJQgJgQgCgdIAFADQADAEAFACQAHADAOgBQAMAAAJgJQgBAHgCAFQgEARgKANQgDAEgGAEQgFAFgCAAIAAAAgAAZgZQgFgGgIgCQgIgCgGABQgKABgGAEQgBAAAAAAQgBAAAAABQAAAAgBAAQAAABAAAAIgBABQgEACgCADIABgHIAEgTQAIgbALgHIADAAIACACQAIAEAEAGIAFAJQAHANACAOIACAMIgEgEg");
	this.shape_693.setTransform(438.5,-83.5);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#3A4D75").s().p("AASBPQgMgGgPgVIgNgSQgGgKAAgFQgBgHAHgEIAGAAQADAAACABQAEABAEAEIADADIAFAIQADAdAJAQQAEAJAFACIAAABQgDAAgFgDgAgWgMIgFgEQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAABgBIAEgJQAGgLAJgNQAOgUAQgGQAFgCAEAAQgLAHgJAbIgEATIgKAKIgKAJQgEgBgEgCg");
	this.shape_694.setTransform(435,-83.5);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAQABADACABQAEADADAAQADAHgEAEIgHgLg");
	this.shape_695.setTransform(432.6,-11.2);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#EEC09E").s().p("AAeAYQgDgDgDgFQgDgFgBgJIgCgBIgEgBQgEgBAKAAQABgIACgFQADgFAFgDIAFgFQgFAJADAKQACAGAAADIgCANQgCAIAEAFIgGgDgAgEARIgRgFQgIgFgEgEIgCgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIALAEQgLgFgBgFIABgCIABAAIAGAEIAEADIACAAIgCAAIgGgHQgLgIAIAAIALAHQAGAFAAgBQgMgOAAgDQAAgDALAIIAKAIQADADgJgMIgBgCIABgCQACgBAFAGIAFAHIAIALIAEAHIgFgBQgDAAgDABQgEACAAAIIgBgBg");
	this.shape_696.setTransform(432.4,-10.1);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#E64A00").s().p("AASBQQgMgHgPgVQgJgMgEgHQgGgKAAgEQgBgIAHgCQACgBAEAAIAFABIAHAEIAEAEQABAEADADQAEAeAIAPQAFAJAFAEIAAAAQgEgBgEgBgAgWgNQgDgBgCgCQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAIADgJQAGgLAKgNQAOgUAQgGIAJgCQgMAHgIAaIgEAUIgKAKIgKAIQgEAAgEgDg");
	this.shape_697.setTransform(435,-10.2);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#41210C").s().p("AgUAiQgGgDgDgEQgDgFABgIIACgNQABgDgCgGQgEgKAGgJIABgBIADgCQAGgDAJgCQAJAAAGACQAIACAGAFIAEAEQADADACAFQADAIAAAGQAAAGgCAGQgCAGgEAFIgDACQgJALgMAAIgDAAQgLAAgGgCg");
	this.shape_698.setTransform(439.1,-10.1);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#EC672C").s().p("AgGBSIgBgBQgFgDgFgJQgIgPgEgeIAGAEQADAEAGACQAHADANgBQAMAAAJgKIgCANQgEARgLANIgJAIQgEAFgCAAIgBAAgAAagZQgGgGgIgCQgIgCgHAAQgJACgGADIgDADIgBABIgGAEIABgGIAEgUQAIgaAMgHIACAAIADACQAHAEAFAGIAFAJQAGANADAOIACALIgEgDg");
	this.shape_699.setTransform(438.5,-10.2);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#372511").s().p("AgKBNQgFgDgGgHQALgNAEgRIACgNIADgCQACgFACgHQACgGAAgEQAAgHgDgIQgCgFgBgDIgCgLQgDgOgGgNIgFgJQADgEAEgCQAHgDAEAFQAHAFAFAOQAIAVABAgQAAAggJAYQgFAQgHAGQgCACgDAAIgGgBg");
	this.shape_700.setTransform(441.8,-10);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#FFF6CD").s().p("AgUAhQgGgCgDgDQgDgGABgJIACgLQABgEgCgFQgEgLAGgIIABgCIADgCQAGgEAJgBQAJAAAGACQAIACAGAFIAEAEQADADACAFQADAHAAAHQAAAFgCAGQgCAHgEAFIgDADQgJAJgMAAIgFABQgKAAgFgDg");
	this.shape_701.setTransform(439.1,-28.5);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#424242").s().p("AgGBSIgBgBQgFgDgFgIQgIgRgEgdIAGAEQADAEAGACQAHADANgBQAMAAAJgKIgCANQgEARgLANQgCADgHAFQgEAFgCAAIgBAAgAAagZQgGgFgIgDQgIgCgHABQgJAAgGAEIgDADIgBABIgGAEIABgGIAEgTQAIgbAMgHIACAAIADACQAHAEAFAGIAFAJQAGANADAOIACALIgEgDg");
	this.shape_702.setTransform(438.5,-28.5);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#372511").s().p("AgKBNQgFgCgGgIQALgNAEgQIACgNIADgDQACgFACgHQACgGAAgEQAAgIgDgHQgCgFgBgDIgCgLQgDgPgGgMIgFgKQADgEAEgBQAHgDAEAEQAHAFAFAPQAIAVABAgQAAAggJAYQgFARgHAFQgCACgEAAIgFgBg");
	this.shape_703.setTransform(441.8,-28.4);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgCIABgBQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAIADAEQAEADADAAQADAGgEAFIgHgLg");
	this.shape_704.setTransform(432.6,-29.5);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgHgBgIIgCgBIgEgBQgEAAAKgDQABgGACgFQADgFAFgEIAFgDQgFAIADALQACAFAAADIgCALQgCAKAEAFIgGgDgAgEARIgRgGQgIgEgEgFIgCgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIALAEQgLgGgBgEIABgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQABAAAAABIAGACIAEADIACABIgCgBIgGgFQgLgLAIACQACAAAJAHIAGAEQgMgPAAgDQAAgDALAJIAKAIQADACgJgMIgBgBIABgCQACgCAFAHIAFAIIAIAJIAEAIIgFgBQgDAAgDABQgEADAAAHIgBgBg");
	this.shape_705.setTransform(432.4,-28.4);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#393939").s().p("AASBPQgMgGgPgVQgJgMgEgGQgGgKAAgFQgBgHAHgDQACgBAEAAIAFABQADABAEADIAEAFIAEAHQAEAdAIAQQAFAJAFADIAAAAQgEgBgEgCgAgWgNIgFgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAABgBIADgIQAGgMAKgNQAOgUAQgGQAEgCAFAAQgMAIgIAaIgEATIgKAKIgKAJQgEgBgEgDg");
	this.shape_706.setTransform(435,-28.5);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAIADAEQAEADADAAQADAGgEAFIgHgLg");
	this.shape_707.setTransform(432.6,-47.8);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgHgBgIIgCgBIgEgBQgEAAAKgCQABgIACgEQADgFAFgEIAFgDQgFAIADAKQACAFAAAEIgCANQgCAIAEAFIgGgDgAgEARIgRgGQgIgEgEgEIgCgDQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIALAEQgLgFgBgFIABgCIABAAIAGAEIAEADIACAAIgCAAIgGgHQgLgJAIABQACAAAJAHQAGAFAAgBQgMgNAAgFQAAgCALAIIAKAIQADADgJgMIgBgCIABgCQACgBAFAGIAFAIIAIAKIAEAHIgFgBIgGABQgEADAAAHIgBgBg");
	this.shape_708.setTransform(432.4,-46.8);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#000000").s().p("AgUAiQgGgCgDgEQgDgFABgJIACgMQABgEgCgFQgEgLAGgIIABgBIADgDQAGgEAJgBQAJAAAGACQAIACAGAGIAEADQADAEACAEQADAHAAAHQAAAGgCAGQgCAGgEAFIgDADQgJAKgMAAIgDAAQgLAAgGgCg");
	this.shape_709.setTransform(439.1,-46.8);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#628DD1").s().p("AgGBSIgBgBQgFgDgFgJQgIgQgEgdIAGAEQADAEAGACQAHACANAAQAMAAAJgKIgCANQgEARgLANQgCADgHAFQgEAFgCAAIgBAAgAAagZQgGgGgIgCQgIgCgHAAQgJABgGAEIgDADIgBABIgGAEIABgHIAEgTQAIgaAMgHIACAAIADACQAHAEAFAFIAFAKQAGAMADAPIACALIgEgDg");
	this.shape_710.setTransform(438.5,-46.8);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#372511").s().p("AgKBNQgFgDgGgHQALgNAEgRIACgNIADgCQACgFACgHQACgGAAgEQAAgIgDgHQgCgFgBgEIgCgLQgDgOgGgMIgFgKQADgEAEgBQAHgDAEAEQAHAFAFAPQAIAUABAhQAAAggJAYQgFARgHAFQgCACgEAAIgFgBg");
	this.shape_711.setTransform(441.8,-46.7);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#447BCD").s().p("AASBPQgMgHgPgUQgJgLgEgIQgGgKAAgEQgBgIAHgDIAGgBIAFABIAHAFIAEAEIAEAHQAEAeAIAPQAFAJAFAEIAAAAQgEgBgEgCgAgWgNIgFgEQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAIADgJQAGgLAKgNQAOgUAQgGIAJgCQgMAHgIAaIgEATIgKAKIgKAJQgEABgEgEg");
	this.shape_712.setTransform(435,-46.8);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAGgKQAEAFgCAGQgEAAgDADIgEAEQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAAAIgBgCg");
	this.shape_713.setTransform(447.9,13);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#EEC09E").s().p("AAfAXIgIgIQgCgEgBgIQgKgCAEgBIAEAAIACgBQABgJADgFIAGgIIAGgDQgDAFABAJIACAMQAAADgCAGQgDAKAFAJIgFgFgAgbAXQAAgEAMgNIgGAFQgJAFgCABQgIACALgKIAGgGIACgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAABAAAAIgEACIgGAEQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBgCQABgEALgGQgLAEAAgBIgBAAIACgCQAEgEAIgEIARgGIABAAQAAAGAEADQADABADABIAFgCIgEAHIgIALIgEAIQgGAFgCgBIgBgCIABgCQAJgMgDADIgKAJQgIAGgCAAIgBgCg");
	this.shape_714.setTransform(447.6,12);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#447BCD").s().p("AAVBQQgQgFgOgVQgKgMgGgMIgDgJQgBAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBIAFgEQAEgDAEAAIAKAJIAKAKIAEATQAIAaAMAHIgJgCgAgWgIQgHgCABgHQAAgGAGgJQAEgHAJgMQAPgUAMgHIAIgDIAAABQgFADgFAJQgIAQgEAdIgEAHIgEAEQgEAEgDAAIgFACQgEAAgCgCg");
	this.shape_715.setTransform(450.2,12);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#000000").s().p("AgJAkQgJgBgGgEIgDgCIgBgCQgGgIAEgLQACgFgBgEIgCgLQgBgJADgGQADgEAGgCQAHgCANABQAMAAAJAJIADADQAEAFACAHQACAFAAAFQAAAIgDAHQgCAEgDAEIgEAEQgGAFgIACQgGACgFAAIgEAAg");
	this.shape_716.setTransform(454.3,12);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#372511").s().p("AgKBNQgEgBgDgEIAFgJQAGgNADgOIACgLQABgEACgFQADgHAAgIQAAgEgCgGQgCgGgCgGIgDgCIgCgNQgEgRgLgNQAGgHAFgDQAHgDAEAEQAHAGAFAQQAJAYAAAgQgBAhgIAUQgFAPgHAFQgCACgDAAIgGgBg");
	this.shape_717.setTransform(457,11.8);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#628DD1").s().p("AgDBSQgMgHgIgaIgEgTIgBgHIAGAEIABACIADACQAGAEAJABQAHAAAIgCQAIgCAGgFIAEgEIgCALQgDAPgGAMIgFAKQgFAGgHAEIgDABgAgRhEQAFgJAFgDIABgBQACAAAFAFIAJAIQALANAEARIACANQgJgJgMAAQgNgBgHACQgGACgDAEIgGAEQAEgdAIgQg");
	this.shape_718.setTransform(453.7,12);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#E18F59").s().p("AgGAKIgBgCIAGgHIAGgLQAEAFgCAGQgEAAgDADIgEADQAAABgBAAQAAABAAAAQAAABAAAAQAAABAAAAg");
	this.shape_719.setTransform(447.9,-24.8);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#372511").s().p("AgKBNIgHgFIAFgJQAGgNADgOIACgLQABgEACgFQAEgHgBgIQAAgEgCgGIgEgLIgDgDQAAgIgCgFQgEgRgLgNQAGgHAFgDQAHgDAEAFQAHAFAGAQQAIAYAAAgQAAAhgIAUQgGAPgHAFQgCADgEAAIgFgCg");
	this.shape_720.setTransform(457,-26);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#000000").s().p("AgIAjQgJAAgHgEIgDgDIAAAAQgHgJAEgLQACgEAAgFIgCgLQgCgJAEgGQADgEAFgCQAHgCANAAQAMABAJAJIADADIAGALQACAHAAAEQABAIgEAHQgCAEgDAEIgEAEQgGAFgIACQgEACgDAAIgHgBg");
	this.shape_721.setTransform(454.3,-25.8);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_722.setTransform(452.9,-33.9);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#48608E").s().p("AgEBSQgLgHgIgbIgEgTIgBgGIAGAEIABABIADACQAGAEAKABQAGABAIgCQAIgCAFgFIAEgEIgCALQgCAOgHANIgFAJQgEAHgIADIgCACIgCAAIgBAAgAgRhFQAEgIAFgDIABAAIABgBQACAAAFAFQAGAEADAEQAKANAEARQACAFABAIQgJgJgMgBQgOgBgHADQgFACgDAEIgFAEQACgeAJgQg");
	this.shape_723.setTransform(453.7,-25.8);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#3A4D75").s().p("AAVBQQgQgGgOgUQgJgNgGgLIgEgJQgBgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAFgDQAEgDAEgBIAKAJIAKAKIAEATQAJAbALAHQgEAAgFgCgAgWgHQgHgDABgIQAAgFAGgKIANgSQAPgVAMgGQAFgDADAAIAAABQgFADgEAIQgJAQgDAeQgEADgBAEIgDAEIgIAEIgFABIgGAAg");
	this.shape_724.setTransform(450.2,-25.8);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#EEC09E").s().p("AAeAXIgHgIQgCgFgBgHQgJgBADgCQAAAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAIADAAQAAgIAEgHQACgEAEgDIAGgEQgEAGACAJIACALQAAAFgCAEQgEALAHAJIgHgFgAgcAXQABgDAMgOIgHAEIgKAHQgIABAKgKIAHgFIABgBIgCAAQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBABIgGAEIgBgBIAAgCQABgEALgFIgMADIAAAAIABgCQAEgEAJgEIARgGIABgBQgBAHAFADIAGABIAFgBIgFAHIgHALIgFAIQgFAFgCgBIgBgCIAAgCQAKgMgEADIgKAIQgIAGgCAAIgBgBg");
	this.shape_725.setTransform(447.7,-25.8);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAGgKQAEAEgCAHQgEAAgDADQgCABgCADQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_726.setTransform(447.9,-43.5);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#41210C").s().p("AgJAkQgJgBgGgEIgDgCIgBgCQgGgIAEgKQACgGgBgDIgCgMQgBgJADgFQADgEAGgDQAHgDANABQAMABAJAJIADADQAEAFACAHQACAGAAAEQAAAHgDAIQgCAFgDADIgEAEQgGAFgIACQgGACgEAAIgFAAg");
	this.shape_727.setTransform(454.3,-44.6);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#EEC09E").s().p("AAfAXQgFgDgDgFQgCgFgBgHQgKgCAEgBIAEAAIACgBQABgJADgFIAGgIIAGgDQgDAFABAJIACAMQAAADgCAGQgDAKAFAIIgFgEgAgbAXQAAgDAMgOIgGAEIgLAGQgIACALgJIAGgGIACgCIgCACIgEACIgGAEIgBAAIgBgCQABgFALgFIgLADIgBAAIACgCQAEgEAIgEIARgGIABgBQAAAHAEADQADABADAAIAFgBIgEAHIgIALIgEAHQgGAGgCgBIgBgCIABgCQAJgMgDADIgKAIQgIAGgCAAQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAg");
	this.shape_728.setTransform(447.6,-44.6);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#372511").s().p("AgKBNQgEgCgDgEIAFgJQAGgNADgOIACgLQABgDACgFQADgIAAgIQAAgDgCgGQgCgHgCgFIgDgDIgCgNQgEgQgLgNQAGgIAFgCQAHgDAEAEQAHAFAFARQAJAYAAAfQgBAhgIAVQgFAOgHAFQgCADgEAAIgFgBg");
	this.shape_729.setTransform(457,-44.7);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#EC672C").s().p("AgXAwIgEgTIgBgHIAGAFIABABIADADQAGADAJABQAHABAIgDQAIgCAGgFIAEgEIgCALQgDAPgGANIgFAJQgFAGgHAEIgDABIgCABQgMgHgIgbgAgRhFQAFgIAFgDIABgBQACgBAFAGQAHAFACADQALANAEARIACANQgJgKgMAAQgNgBgHADQgGACgDAEIgGAEQAEgeAIgQg");
	this.shape_730.setTransform(453.7,-44.5);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#E64A00").s().p("AAVBQQgQgGgOgUQgKgNgGgLIgDgJQgBAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAQACgDADgCQAEgCAEAAIAKAIQAFAHAFADIAEATQAIAbAMAHIgJgCgAgWgHQgHgEABgHQAAgEAGgKIANgTQAPgVAMgGQAEgCAEgBIAAAAQgFAEgFAIQgIAQgEAeIgEAHIgEADIgHAGIgFAAIgDAAIgDAAg");
	this.shape_731.setTransform(450.2,-44.5);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_732.setTransform(452.9,-73.7);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#E18F59").s().p("AgBAAIgGgIIABgBIABgBQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAIAEAEQADADAEAAQACAGgEAFIgGgLg");
	this.shape_733.setTransform(447.9,-82.8);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgEgHAAgIIgDAAIgDgCQgDgBAJgBQABgHACgFIAHgIIAHgFQgHAJAEALQACAEAAAFIgCALQgCAJAEAGIgGgEgAgEARIgRgGQgJgEgEgEIgBgDIAAAAIAMAEQgLgGgBgDIAAgCIABgBIAGAEIAEACIACABIgBgBIgHgFQgKgKAIABIAKAHIAHAEQgMgOgBgDQAAgEALAJIAKAIQAEADgKgMIAAgCIABgCQACgBAFAFIAFAIIAHALIAFAHQgCgBgDAAQgEAAgCABQgFADABAHIgBgBg");
	this.shape_734.setTransform(447.7,-81.8);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#000000").s().p("AgUAiQgFgCgDgEQgEgGACgJIACgLQAAgEgCgFQgEgLAHgIIAAgBIADgDQAHgEAJAAQAIgCAGADQAIACAGAFIAEAEQADAEACAFQAEAHgBAGQAAAFgCAHQgCAGgEAFIgDADQgJAJgMABIgFAAQgKAAgFgCg");
	this.shape_735.setTransform(454.3,-81.9);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#4A7328").s().p("AASBPQgMgGgPgVIgNgSQgGgKAAgFQgBgHAHgDQACgBAEAAQADAAACABQAEABAEAEIADAEIAFAHQADAdAJAQQAEAJAFACIAAABQgDAAgFgDgAgWgMIgFgEQAAgBgBAAQAAgBAAAAQgBAAAAgBQAAAAABAAIAEgKQAGgLAJgNQAOgUAQgGQAFgCAEAAQgLAHgJAbIgEATIgKAKIgKAJQgEgBgEgCg");
	this.shape_736.setTransform(450.2,-81.9);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#609634").s().p("AgGBSIgBgBIgBAAQgFgCgEgJQgJgQgCgdIAFAEQADADAFACQAHADAOgBQAMAAAJgJQgBAHgCAFQgEASgKANIgJAHQgEAFgDAAIAAAAgAAZgZQgFgFgIgCQgIgDgGABQgKABgGAEIgDACIgBABIgGAFIABgHIAEgTQAIgbALgHIADAAIACACQAIAEAEAGIAFAJQAHANACAPIACALIgEgEg");
	this.shape_737.setTransform(453.7,-81.9);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#372511").s().p("AgKBNQgFgCgGgHQALgNAEgSQACgFAAgHIADgEQACgFACgGQACgGAAgEQABgIgEgHQgCgEgBgEIgCgLQgDgPgGgNIgFgJQAEgEADgBQAHgDAEAEQAHAFAGAPQAIAVAAAgQAAAggIAZQgGAPgHAFQgCAEgEAAIgFgCg");
	this.shape_738.setTransform(457,-81.7);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_739.setTransform(452.9,1.1);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#E18F59").s().p("AgBAAIgGgIIABgBIABgBQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAIAEAEQADACAEABQACAGgEAFIgGgLg");
	this.shape_740.setTransform(447.9,-8);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#000000").s().p("AgUAiQgFgCgDgEQgEgGACgJIACgLQAAgEgCgFQgEgLAHgIIAAgBIADgDQAHgEAJAAQAIgBAGACQAIACAGAFIAEAEQADAEACAFQAEAHgBAGQAAAFgCAHQgCAGgEAFIgDADQgJAJgMABIgFAAQgKAAgFgCg");
	this.shape_741.setTransform(454.3,-7);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#5BB1B0").s().p("AASBPQgMgGgPgVIgNgTQgGgJAAgFQgBgIAHgCQACgBAEAAQADAAACABQAEABAEADIADAFIAFAGQADAeAJAQQAEAJAFACIAAABQgDgBgFgCgAgWgNIgFgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAAAABgBIAEgJQAGgLAJgNQAOgUAQgGIAJgBQgLAGgJAbIgEATIgKAJIgKAJQgEAAgEgDg");
	this.shape_742.setTransform(450.2,-7);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#6BD3D2").s().p("AgGBSIgBgBIgBAAQgFgCgEgJQgJgQgCgdIAFAEQADAEAFABQAHADAOgBQAMAAAJgJQgBAHgCAFQgEASgKANIgJAHQgEAFgDAAIAAAAgAAZgZQgFgFgIgCQgIgDgGABQgKABgGAEIgDACIgBABIgGAFIABgHIAEgTQAIgbALgGQAAgBABAAQAAAAAAAAQAAAAABAAQAAAAABABIACABQAIAEAEAGIAFAJQAHANACAPIACALIgEgEg");
	this.shape_743.setTransform(453.7,-7.1);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#372511").s().p("AgKBNQgFgCgGgHQALgNAEgSQACgFAAgHIADgEQACgFACgGQACgGAAgEQABgIgEgHQgCgEgBgEIgCgLQgDgPgGgNIgFgJQAEgEADgBQAHgDAEAEQAHAGAGAOQAIAVAAAgQAAAggIAZQgGAPgHAFQgCADgEAAIgFgBg");
	this.shape_744.setTransform(457,-6.9);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgEgHAAgIIgDAAIgDgCQgDgBAJgBQABgHACgFIAHgIIAHgFQgHAJAEALQACAEAAAFIgCALQgCAJAEAGIgGgEgAgEARIgRgGQgJgEgEgEIgBgDIAAAAIAMAEQgLgGgBgDIAAgCIABgBIAGAEIAEACIACABIgBgBIgHgFQgKgKAIABIAKAHIAHAEQgMgOgBgDQAAgEALAJIAKAIQAEADgKgMIAAgCIABgCQACgBAFAFIAFAIIAHALIAFAHQgCgBgDAAQgEAAgCABQgFADABAHIgBgBg");
	this.shape_745.setTransform(447.7,-7);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#FFF6CD").s().p("AgUAiQgGgCgDgEQgDgFABgKIACgLQABgEgCgFQgEgLAGgIIABgBIADgDQAGgEAJgBQAJAAAGACQAIACAGAGIAEADQADAEACAEQADAHAAAHQAAAGgCAGQgCAGgEAFIgDADQgJAKgMAAIgDAAQgLAAgGgCg");
	this.shape_746.setTransform(454.3,-100.6);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgCIABgBQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAIAEAEQADADAEAAQACAGgEAFIgGgLg");
	this.shape_747.setTransform(447.9,-101.6);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#393939").s().p("AASBOQgMgGgPgVQgJgKgEgIQgGgJAAgFQgBgIAHgCIAGgBIAFABIAHAEIAEAEIAEAHQAEAdAIAQQAFAJAFAEIAAAAQgEAAgEgEgAgWgNIgFgDQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAIADgJQAGgLAKgNQAOgUAQgGQAEgCAFAAQgMAHgIAaIgEATIgKAKIgKAJQgEAAgEgDg");
	this.shape_748.setTransform(450.2,-100.6);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#424242").s().p("AgGBSIgBgBQgFgDgFgJQgIgQgEgdIAGAEQADAEAGACQAHACANAAQAMAAAJgKIgCANQgEARgLANIgJAIQgEAFgCAAIgBAAgAAagZQgGgGgIgCQgIgCgHAAQgJABgGAEIgDADIgBABIgGAEIABgHIAEgTQAIgaAMgHIACAAIADACQAHAEAFAFIAFAKQAGAMADAPIACALIgEgDg");
	this.shape_749.setTransform(453.7,-100.6);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#372511").s().p("AgKBNQgFgDgGgHQALgNAEgRIACgNIADgCQACgFACgHQACgGAAgEQAAgIgDgHQgCgFgBgEIgCgLQgDgOgGgMIgFgKQADgEAEgBQAHgDAEAEQAHAFAFAPQAIAUABAhQAAAggJAYQgFAQgHAGQgCACgDAAIgGgBg");
	this.shape_750.setTransform(457,-100.5);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#EEC09E").s().p("AAeAYIgGgIQgDgFgBgJIgCgBIgEgBQgEgBAKgBQABgIACgEIAIgIIAFgFQgFAJADAKQACAGAAADIgCAMQgBAJADAFIgGgDgAgEARIgRgFQgIgFgEgEIgCgDIABAAIALAEQgLgFgBgFIABgCIABAAIAGAEIAEADIACAAIgCAAIgGgHQgLgJAIABQACABAJAFQAGAGAAgBQgMgOAAgDQAAgEALAJIAKAIQADADgJgNIgBgBIABgCQACgBAGAGIAEAHIAIALIAEAHIgFgBIgGABQgEACAAAIIgBgBg");
	this.shape_751.setTransform(447.6,-100.6);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#EEC09E").s().p("AAeAXIgGgHQgDgFgBgJIgCAAIgEgCQgEAAAKgCQABgIACgEQADgFAFgDIAFgFQgFAJADAKQACAGAAAEIgCALQgBAJADAFIgGgEgAgEARIgRgGQgIgEgEgEIgCgDIABAAIALAEQgLgGgBgEIABgCQAAAAAAAAQAAAAAAAAQAAAAAAAAQABAAAAAAIAGAEIAEACQAAAAAAABQAAAAABAAQAAAAAAAAQAAAAABAAIgCgBIgGgGQgLgJAIABQACABAJAFIAGAFQgMgOAAgDQAAgEALAIIAKAJQADACgJgMIgBgBIABgCQACgBAGAFIAEAIIAIAKIAEAIIgFgCQgDABgDABQgEADAAAGIgBAAg");
	this.shape_752.setTransform(447.6,-63.1);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABIAEAEQADADAEAAQACAGgEAFIgGgLg");
	this.shape_753.setTransform(447.9,-64.2);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#447BCD").s().p("AASBPQgMgHgPgUIgNgTQgGgJAAgGQgBgHAHgCQACgCAEAAIAFACQADABAEADIAEAEIAEAHQAEAdAIARQAFAIAFADIAAABIgIgDgAgWgNIgFgEQAAAAgBgBQAAAAAAgBQgBAAAAAAQAAAAABgBIADgIQAGgMAKgNQAOgUAQgGIAJgCQgMAHgIAbIgEATIgKAJIgKAJQgEAAgEgDg");
	this.shape_754.setTransform(450.2,-63.2);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#000000").s().p("AgUAhQgGgCgDgDQgDgGABgJIACgLQABgEgCgFQgEgLAGgIIABgCIADgCQAGgEAJgBQAJAAAGACQAIACAGAFIAEAEQADADACAFQADAHAAAHQAAAFgCAGQgCAHgEAFIgDADQgJAJgMAAIgFABQgKAAgFgDg");
	this.shape_755.setTransform(454.3,-63.2);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#628DD1").s().p("AgGBSIgBgBQgFgDgFgIQgIgRgEgdIAGAEQADAEAGACQAHADANgBQAMAAAJgKIgCANQgEARgLANIgJAIQgEAFgCAAIgBAAgAAagZQgGgFgIgDQgIgCgHABQgJAAgGAEIgDADIgBABIgGAEIABgGIAEgTQAIgbAMgHIACAAIADACQAHAEAFAGIAFAJQAGANADAOIACALIgEgDg");
	this.shape_756.setTransform(453.7,-63.2);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#372511").s().p("AgKBNQgFgCgGgHQALgNAEgRIACgNIADgDQACgFACgHQACgGAAgEQAAgIgDgHQgCgFgBgDIgCgLQgDgPgGgMIgFgKQADgEAEgBQAHgDAEAEQAHAFAFAPQAIAVABAgQAAAggJAZQgFAQgHAFQgCACgEAAIgFgBg");
	this.shape_757.setTransform(457,-63.1);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#E18F59").s().p("AgGAKIgBgBIAGgIIAGgLQAEAFgCAGIgHADIgEAEQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_758.setTransform(447.9,-137.1);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_759.setTransform(452.9,-146.2);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#4A7328").s().p("AAVBQQgQgGgOgUQgJgNgGgMIgEgJQgBAAAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAFgDIAIgEIAKAJIAKAKIAEATQAJAbALAGIgJgBgAgWgIQgHgDABgHQAAgFAGgKIANgSQAPgVAMgGQAFgCADgBIAAABQgFACgEAJQgJAQgDAdQgEAEgBADIgDAFQgEADgEABQgCACgDgBQgEABgCgCg");
	this.shape_760.setTransform(450.2,-138);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#000000").s().p("AgIAjQgJAAgHgEIgDgDIAAgBQgHgIAEgLQACgFAAgEIgCgLQgCgJAEgGQADgEAFgCQAHgDANABQAMABAJAJIADADQAEAFACAGQACAHAAAEQABAHgEAHQgCAFgDAEIgEAEQgGAFgIACQgFACgEAAIgFgBg");
	this.shape_761.setTransform(454.3,-138.1);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#372511").s().p("AgKBNQgDgBgEgEIAFgJQAGgNADgPIACgLQABgEACgEQAEgHgBgJQAAgDgCgGQgCgGgCgFIgDgEQAAgHgCgFQgEgSgLgNQAGgHAFgCQAHgEAEAGQAHAFAGAPQAIAZAAAgQAAAggIAVQgGAOgHAGQgCACgDAAIgGgBg");
	this.shape_762.setTransform(457,-138.2);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#609634").s().p("AgEBRQgLgGgIgbIgEgTIgBgHIAGAFIABABIADACQAGAEAKABQAGABAIgDQAIgCAFgFIAEgEIgCALQgCAPgHANIgFAJQgEAGgIAEIgCABIgCABIgBgBgAgRhFQAEgJAFgCIABAAIABgBQACgBAFAGIAJAHQAKANAEASQACAFABAHQgJgJgMAAQgOgBgHADQgFABgDAEIgFAEQACgdAJgQg");
	this.shape_763.setTransform(453.7,-138);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#EEC09E").s().p("AAeAXIgHgIQgCgFgBgHQgJgBADgCQAAAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAIADAAQAAgIAEgHQACgEAEgDIAGgEQgEAGACAJIACALQAAAFgCAEQgEALAHAJIgHgFgAgcAXQABgDAMgOIgHAEIgKAHQgIABAKgKIAHgFIABgBIgCABIgEACIgGAEIgBgBIAAgCQABgDALgGIgMAEIAAgBIABgCQAEgEAJgEIARgGIABgBQgBAHAFADQACABAEAAQADAAACgBIgFAHIgHALIgFAIQgFAFgCgBIgBgCIAAgCQAKgMgEADIgKAIQgIAGgCAAIgBgBg");
	this.shape_764.setTransform(447.7,-138.1);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#E18F59").s().p("AgGAKIgBgBIAGgIIAGgLQAEAFgCAGIgHADIgEAEQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_765.setTransform(447.9,-212);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_766.setTransform(452.9,-221.1);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#5BB1B0").s().p("AAVBPQgQgFgOgTIgPgZIgEgJQgBgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAFgEIAIgDIAKAKIAKAJIAEATQAJAbALAHQgEgBgFgCgAgWgIQgHgCABgIQAAgFAGgJIANgTQAPgUAMgHQAFgDADAAIAAABQgFACgEAJQgJAQgDAeQgEACgBAEIgDAFIgIAEQgCACgDAAQgEAAgCgCg");
	this.shape_767.setTransform(450.2,-212.9);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#6BD3D2").s().p("AgEBRQgLgGgIgbIgEgTIgBgHIAGAFIABAAIADADQAGAEAKABQAGABAIgDQAIgCAFgFIAEgEIgCALQgCAPgHANIgFAJQgEAGgIADIgCACIgCABIgBgBgAgRhFQAEgJAFgCIABAAIABgBQACgBAFAGIAJAHQAKANAEASQACAFABAHQgJgJgMAAQgOgBgHACQgFACgDAEIgFAEQACgdAJgQg");
	this.shape_768.setTransform(453.7,-212.9);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#000000").s().p("AgIAkQgJgCgHgDIgDgDIAAgBQgHgIAEgLQACgEAAgFIgCgLQgCgJAEgGQADgEAFgCQAHgDANACQAMAAAJAJIADADQAEAFACAHQACAGAAAEQABAHgEAIQgCAEgDAEIgEAEQgGAFgIACQgFACgEAAIgFAAg");
	this.shape_769.setTransform(454.3,-212.9);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#372511").s().p("AgKBNQgDgBgEgEIAFgJQAGgNADgPIACgLQABgEACgEQAEgHgBgJQAAgDgCgGQgCgGgCgGIgDgDQAAgHgCgFQgEgSgLgNQAGgHAFgCQAHgEAEAGQAHAFAGAPQAIAZAAAgQAAAggIAUQgGAPgHAGQgCACgDAAIgGgBg");
	this.shape_770.setTransform(457,-213.1);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#EEC09E").s().p("AAeAXIgHgIQgCgFgBgHQgJgBADgCQAAAAAAAAQAAAAABAAQAAAAABAAQAAgBABAAIADAAQAAgIAEgHQACgEAEgDIAGgEQgEAGACAJIACALQAAAFgCAEQgEALAHAJIgHgFgAgcAXQABgDAMgOIgHAEIgKAHQgIABAKgKIAHgFIABgBIgCAAQAAABAAAAQAAAAgBABQAAAAgBAAQgBABgBAAIgGAEIgBgBIAAgCQABgEALgFIgMAEIAAgBIABgCQAEgEAJgEIARgGIABgBQgBAHAFADQACABAEAAQADAAACgBIgFAHIgHALIgFAIQgFAFgCgBIgBgCIAAgCQAKgMgEADIgKAIQgIAGgCAAIgBgBg");
	this.shape_771.setTransform(447.7,-213);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAGgKQAEAFgCAFQgEABgDACIgEAFQAAAAgBAAQAAABAAAAQAAABAAAAQAAABAAAAg");
	this.shape_772.setTransform(447.9,-118.3);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#000000").s().p("AgIAjQgJAAgHgEIgDgDIAAAAQgHgJAEgLQACgFAAgEIgCgLQgCgJAEgGQADgEAFgCQAHgCANAAQAMABAJAJIADADQAEAFACAGQACAHAAAEQABAHgEAIQgCAEgDAEIgEAEQgGAFgIACQgEACgDAAIgHgBg");
	this.shape_773.setTransform(454.3,-119.4);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#372511").s().p("AgKBNQgDgBgEgEIAFgJQAGgNADgOIACgMQABgDACgFQAEgHgBgJQAAgDgCgGQgCgGgCgFIgDgEQAAgHgCgFQgEgRgLgNQAGgIAFgCQAHgDAEAFQAHAFAGAQQAIAYAAAgQAAAhgIAUQgGAPgHAFQgCACgEAAIgFgBg");
	this.shape_774.setTransform(457,-119.5);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_775.setTransform(452.9,-127.5);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#3A4D75").s().p("AAVBQQgQgGgOgUQgJgNgGgLIgEgJQgBgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBIAFgEQAEgCAEgBIAKAJIAKAKIAEATQAJAbALAHQgEAAgFgCgAgWgHQgHgEABgHQAAgFAGgKIANgSQAPgVAMgGQAFgDADAAIAAABQgFACgEAJQgJAQgDAdIgFAIIgDADQgEAEgEABQgCABgDAAIgGAAg");
	this.shape_776.setTransform(450.2,-119.3);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#48608E").s().p("AgEBSQgLgHgIgbIgEgTIgBgHQACADAEACIABABIADACQAGAEAKABQAGABAIgCQAIgCAFgGIAEgEIgCAMQgCAOgHANIgFAJQgEAGgIAEIgCACIgCAAIgBAAgAgRhFQAEgJAFgCIABAAIABgBQACAAAFAFQAGAEADAEQAKANAEARQACAFABAHQgJgJgMAAQgOgBgHADQgFACgDADIgFAEQACgdAJgQg");
	this.shape_777.setTransform(453.7,-119.3);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#EEC09E").s().p("AAeAXQgEgEgDgEQgCgFgBgHQgJgBADgCIADgBIADgBQAAgHAEgHIAGgHIAGgEQgEAGACAJIACALQAAAEgCAFQgEALAHAJQgEgCgDgDgAgcAXQABgDAMgPIgHAFIgKAGQgIACAKgKIAHgFIABgBIgCABIgEACIgGAEIgBgBIAAgCQABgEALgEIgMACIAAAAIABgCQAEgEAJgEQAKgDAHgEIABAAQgBAHAFADIAGABQADAAACgCIgFAIIgHALIgFAHQgFAGgCgBIgBgBIAAgCQAKgNgEADIgKAIQgIAGgCAAIgBgBg");
	this.shape_778.setTransform(447.7,-119.4);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#E18F59").s().p("AgGAKIgBgCIAGgIIAGgKQAEAEgCAHQgEAAgDADQgCACgCACQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAIgBgBg");
	this.shape_779.setTransform(447.9,-193.2);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#EEC09E").s().p("AAfAXQgFgDgDgFQgCgFgBgHQgKgBAEgCIAEAAIACgBQABgIADgHQADgEADgDIAGgEQgDAGABAJIACAMQAAADgCAFQgDALAFAIIgFgEgAgbAXQAAgDAMgOIgGAEIgLAGQgIACALgKIAGgFIACgCIgCACIgEADIgGACQAAABgBAAQAAAAAAAAQAAAAAAAAQAAAAAAgBIgBgBQABgFALgFIgLADIgBAAIACgBQAEgFAIgEIARgGIABgBQAAAHAEADQADACADgBIAFgBIgEAHIgIAKIgEAIQgGAHgCgCIgBgCIABgCQAJgLgDACIgKAIQgIAGgCAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAgBAAAAg");
	this.shape_780.setTransform(447.6,-194.3);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#41210C").s().p("AgJAkQgJgBgGgDIgDgDIgBgCQgGgIAEgLQACgFgBgDIgCgMQgBgJADgGQADgDAGgDQAHgCANAAQAMABAJAJIADADQAEAFACAHQACAGAAAEQAAAIgDAHQgCAFgDADIgEAEQgGAFgIACQgGACgGAAIgDAAg");
	this.shape_781.setTransform(454.3,-194.3);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#372511").s().p("AgKBNQgEgCgDgEIAFgJQAGgNADgOIACgLQABgDACgFQADgIAAgIQAAgDgCgGQgCgHgCgFIgDgDIgCgNQgEgRgLgMQAGgIAFgCQAHgDAEAEQAHAFAFAQQAJAZAAAfQgBAhgIAVQgFAOgHAFQgCADgEAAIgFgBg");
	this.shape_782.setTransform(457,-194.4);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#EC672C").s().p("AgXAwIgEgTIgBgHIAGAFIABABIADADQAGADAJABQAHABAIgDQAIgCAGgFIAEgEIgCALQgDAPgGANIgFAJQgFAGgHADIgDACIgCABQgMgHgIgbgAgRhFQAFgIAFgDIABgBQACgBAFAGQAHAFACADQALANAEARIACANQgJgKgMgBQgNAAgHACQgGADgDAEIgGAEQAEgeAIgQg");
	this.shape_783.setTransform(453.7,-194.2);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#E64A00").s().p("AAVBQQgQgGgOgUQgKgNgGgMIgDgIQgBgBAAAAQAAAAABgBQAAAAAAgBQABAAAAgBQACgCADgBQAEgDAEgBIAKAJQAFAHAFACIAEAUQAIAaAMAIIgJgCgAgWgIQgHgDABgHQAAgFAGgKIANgTQAPgUAMgHQAEgBAEgBIAAAAQgFADgFAJQgIAPgEAeQgDADgBAEIgEAFIgHAEIgFABIgCAAIgEgBg");
	this.shape_784.setTransform(450.2,-194.2);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#372511").s().p("AgKBNQgEgBgDgEIAFgKQAGgMADgOIACgLQABgEACgFQADgHAAgIQAAgEgCgGQgCgHgCgFIgDgCIgCgNQgEgRgLgNQAGgIAFgCQAHgDAEAEQAHAFAFARQAJAYAAAgQgBAhgIAUQgFAPgHAFQgCACgEAAIgFgBg");
	this.shape_785.setTransform(457,-175.7);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#FFF6CD").s().p("AgJAjQgJAAgGgEIgDgDIgBgBQgGgIAEgLQACgFgBgEIgCgLQgBgKADgFQADgEAGgCQAHgCANAAQAMAAAJAKIADADQAEAFACAGQACAGAAAFQAAAHgDAIQgCAEgDAEIgEADQgGAGgIACIgJACIgGgBg");
	this.shape_786.setTransform(454.3,-175.5);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#E18F59").s().p("AgGAKIgBgCIAGgIIAGgKQAEAFgCAGQgEAAgDADIgEAEQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAIgBgBg");
	this.shape_787.setTransform(447.9,-174.5);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#EEC09E").s().p("AAfAYIgIgJQgCgEgBgIQgKgCAEgBIAEAAIACgBQABgJADgFIAGgIIAGgDQgDAFABAKIACALQAAADgCAGQgDAKAFAIIgFgDgAgbAYQAAgEAMgOQAAgBgGAGQgJAFgCAAQgIACALgJIAGgGIACgBIgCABIgEACIgGAEIgBAAIgBgCQABgEALgGIgLADIgBAAIACgCQAEgEAIgEIARgGIABgBQAAAHAEADIAGABIAFgBIgEAHIgIALIgEAHQgGAGgCgBIgBgCIABgBQAJgNgDADIgKAIQgIAHgDAAIAAgBg");
	this.shape_788.setTransform(447.6,-175.6);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#424242").s().p("AgDBSQgMgHgIgbIgEgSIgBgHIAGAEIABABIADADQAGAEAJAAQAHABAIgCQAIgCAGgGIAEgDIgCALQgDAOgGANIgFAJQgFAGgHAEIgDACgAgRhFQAFgIAFgDIABgBQACgBAFAGQAHAFACADQALANAEARIACANQgJgKgMAAQgNAAgHACQgGACgDAEIgGAEQAEgdAIgRg");
	this.shape_789.setTransform(453.7,-175.5);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#393939").s().p("AAVBQQgQgGgOgUQgKgNgGgMIgDgIQgBAAAAgBQAAAAABgBQAAAAAAgBQABAAAAgBIAFgDQAEgEAEAAIAKAJIAKAKIAEATQAIAbAMAHQgFAAgEgCgAgWgIQgHgDABgGQAAgFAGgLQAEgGAJgMQAPgUAMgHQAEgDAEAAIAAABQgFADgFAIQgIAQgEAdIgEAIIgEAEIgHAEIgFABIgGgBg");
	this.shape_790.setTransform(450.2,-175.5);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAGgKQAEAFgCAGQgEAAgDADIgEAEQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_791.setTransform(447.9,-155.8);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#000000").s().p("AgJAkQgJgBgGgEIgDgDIgBgBQgGgIAEgLQACgFgBgEIgCgLQgBgKADgFQADgEAGgCQAHgCANAAQAMAAAJAKIADADQAEAFACAGQACAGAAAFQAAAIgDAHQgCAEgDAEIgEADQgGAGgIACQgGACgFAAIgEAAg");
	this.shape_792.setTransform(454.3,-156.8);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#EEC09E").s().p("AAfAYIgIgJQgCgFgBgGQgKgCAEgCIAEgBIACAAQABgIADgHIAGgGIAGgFQgDAGABAJIACALQAAAEgCAFQgDALAFAIIgFgDgAgbAYQAAgEAMgOIgGAEQgJAHgCgBQgIACALgKIAGgFIACgBIgCABIgEADIgGACIgBAAIgBgCQABgDALgGIgLADIgBAAIACgCIAMgIIARgGIABgBQAAAHAEADQADABADAAIAFgBIgEAHIgIAKIgEAIQgGAGgCgBIgBgCIABgCQAJgMgDADIgKAIQgIAGgDAAIAAAAg");
	this.shape_793.setTransform(447.6,-156.8);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#447BCD").s().p("AAVBQQgQgFgOgVQgKgNgGgMIgDgIQgBAAAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAFgEQAEgDAEgBIAKAJIAKAKIAEATQAIAbAMAHIgJgCgAgWgHQgHgDABgHQAAgGAGgJQAEgIAJgLQAPgUAMgHQAEgCAEgBIAAABQgFADgFAIQgIAQgEAeIgEAHIgEAEIgHAFIgFABQgEAAgCgBg");
	this.shape_794.setTransform(450.2,-156.8);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#628DD1").s().p("AgDBSQgMgHgIgaIgEgTIgBgHIAGAEIABABIADADQAGAEAJABQAHAAAIgCQAIgCAGgGIAEgDIgCALQgDAPgGAMIgFAKQgFAFgHAEIgDACgAgRhEQAFgJAFgDIABgBQACAAAFAFIAJAIQALANAEARIACANQgJgKgMAAQgNAAgHACQgGACgDAEIgGAEQAEgdAIgQg");
	this.shape_795.setTransform(453.7,-156.8);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#372511").s().p("AgKBNQgEgBgDgEIAFgKQAGgMADgOIACgLQABgEACgFQADgHAAgIQAAgEgCgGQgCgHgCgFIgDgCIgCgNQgEgRgLgNQAGgHAFgDQAHgDAEAEQAHAGAFAQQAJAYAAAgQgBAhgIAUQgFAPgHAFQgCACgEAAIgFgBg");
	this.shape_796.setTransform(457,-157);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#646262").s().p("AgqUhIAAgqMAAAgnwIAAggIBVgMMAAAApLg");
	this.shape_797.setTransform(464.2,-98.2);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#402913").s().p("AB9TTMAAAgmpIApgIMAAAAm8gAgRSrMAAAglqIAngGMAAAAl8gAilSDMAAAgkqIApgHMAAAAk8g");
	this.shape_798.setTransform(431.2,-98.9);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#985E2F").s().p("ACVTYMAAAgm8IB4gUMAAAAnwgAAFSwMAAAgl8IBmgRMAAAAmpgAiNSIMAAAgk8IBqgRMAAAAlqgAkMRmMAARgkIIBEgLMAAAAkpg");
	this.shape_799.setTransform(432.9,-98.3);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#D9D9D9").s().p("AgnWoMAAAgtPIBPAAMAAAAtPg");
	this.shape_800.setTransform(390.6,-96.5);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#838383").s().p("Aj4T4Ig9gEMAAAgnEIA9gHIIuhGIAAAhIh5AUIgpAHIhnARIgpAGIhoASIgqAGIhEALMgARAkIIBVAXIAqAMIBoAdIApALIBnAcIApAMIB5AgIAAAqg");
	this.shape_801.setTransform(428.9,-97.9);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#FAFAFD").s().p("AlwWoQBOhmAOgIIAAhQIIuAmIBXAGIAACSgAkU01QgXgQhFhiILhAAIAAByIhXALIouBGg");
	this.shape_802.setTransform(431.6,-96.5);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#9F3D3D").s().p("Ags2nQBDBiAXAQIAABRIg8AHMAAAAnEIA8ADIAABQQgPAIhLBmg");
	this.shape_803.setTransform(399.3,-96.5);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#D6D6D6").s().p("AgMCIIAAkPIAZAAIAAEPg");
	this.shape_804.setTransform(-38.8,-250.5);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#D6D6D6").s().p("AgMCIIAAkPIAZAAIAAEPg");
	this.shape_805.setTransform(-38.8,-277.9);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#D6D6D6").s().p("EgdPAj2IAAgBIgCAAQm6AAk3k5Qk4k4AAm6QAAm6E4k4QE3k4G6AAIACAAIAAABMA3xgACQDQgLCzhIQDihWC4i3QFnliAAn1QAAmKjckuQg9hVhOhOQlmlon8AAMhtgAACIAAgbMBthgABQIHAAFuFwQBVBWBCBfQDXEwAAGHQAAH/luFqQjBC9jtBbIAAgBQizBGjQALMg3xAADIgCAAQmuAAkwEwQkvExgBGvQABGvEvEwQEwExGuAAIACAAIAAAAMBxTAAAIAAAbg");
	this.shape_806.setTransform(15.3,-36.5);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#404040").s().p("EgdQAn7QomAAmGmFQmFmFAAomQAAonGFmGQGGmDImAAIABAAIAAACMA3xgAEQDUgLCvhbQB6hCBqhoQEbkXAAmLQAAmKkbkXIgYgYQkUkDl+AAMhtiAAAIAAolMBtjAABQJxAAG7G7QCoCqBoDCQCrE6gBF/QAAJpm6GzQkRENlWBoIAAgBQi2A7jNALMg3xAACIAAgBQlDAAjkDkQjkDkAAFDQAAFCDkDlQDkDkFDgBIAAACMBxTAAAIAAEfIAAEGMhxTAAAIAAABg");
	this.shape_807.setTransform(15.3,-36.4);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#75614B").s().p("EANcAp9Iy4AAIksAAIurAAIkcAAIAAgBQpdABmrmrQmqmsAApcQAApcGqmrQGrmpJdAAIAAgBMA1xAAAQAfgDASAAIAcAAIAqgDQAhgCAtgGIAOgCQCmgYCKhaIAAABQBGgwBBg+QDzjwAAlUQAAlTjzjxQhFhDhKgwQjFh/j5AAIhDAAMhsfAAAIAAiFIAAqnMBZfAAAITAAAIANAAIA2ABQKoAAHgHhQDRDSB1D3QCbE9AAF7QgBKfngHXQk3E0mLBsQi2A3jNAMIAAADMg3xgABIAAgBIgBAAQkNAAi9C+Qi9C+AAEMQAAENC9C+QC9C+ENAAIABAAIAAgBMBxTAAAIAAKqIAACCg");
	this.shape_808.setTransform(15.3,-36.4);

	this.instance_22 = new lib.mc_redCar();
	this.instance_22.setTransform(-288.2,-426.7,1.319,1.324,90,0,0,18.8,9.6);

	this.instance_23 = new lib.Watchbg("synched",0);
	this.instance_23.setTransform(-49.1,-375.4,0.23,0.23);

	this.instance_24 = new lib.Watchbg("synched",0);
	this.instance_24.setTransform(-195.8,-375.4,0.23,0.23);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#2A571B").s().p("AkaJGQgkgWgagYIkZgBQhQAAAAhQIAAwMQAAhQBQAAITjAFQBQAAAABQIAAQMQAABQhQAAIjUgBQgZAWgiAVQiEBQi7AAQi6AAiEhQg");
	this.shape_809.setTransform(244,-386.7);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#2A571B").s().p("AkaJGQgkgWgagYIkagBQhPAAAAhQIAAwMQAAhQBPAAITlAFQBQAAAABQIAAQMQAABQhQAAIjVgBQgZAWghAVQiFBQi8AAQi5AAiEhQg");
	this.shape_810.setTransform(96,-386.7);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#2A571B").s().p("AkaJGQgkgWgagYIkZgBQhQAAAAhQIAAwMQAAhQBQAAITkAFQBQAAAABQIAAQMQAABQhQAAIjVgBQgZAWghAVQiFBQi8AAQi5AAiEhQg");
	this.shape_811.setTransform(-51.5,-386.7);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#2A571B").s().p("AkbJGQgjgWgagYIkagBQhQAAAAhQIAAwMQAAhQBQAAITkAFQBQAAAABQIAAQMQAABQhQAAIjUgBQgZAWgiAVQiEBQi7AAQi6AAiFhQg");
	this.shape_812.setTransform(-199.5,-386.7);

	this.instance_25 = new lib.Textur("synched",0);
	this.instance_25.setTransform(0,-0.3,1.542,1.542,0,0,0,395.3,314.3);
	this.instance_25.alpha = 0.301;

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#459541").s().p("EhblBNFMAAAiaJMC3LAAAMAAACaJg");
	this.shape_813.setTransform(-6.4,0);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = this.shape_101.mask = this.shape_102.mask = this.shape_103.mask = this.shape_104.mask = this.shape_105.mask = this.shape_106.mask = this.shape_107.mask = this.shape_108.mask = this.shape_109.mask = this.shape_110.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.shape_114.mask = this.shape_115.mask = this.shape_116.mask = this.shape_117.mask = this.shape_118.mask = this.shape_119.mask = this.shape_120.mask = this.shape_121.mask = this.shape_122.mask = this.shape_123.mask = this.shape_124.mask = this.shape_125.mask = this.shape_126.mask = this.shape_127.mask = this.shape_128.mask = this.shape_129.mask = this.shape_130.mask = this.shape_131.mask = this.shape_132.mask = this.shape_133.mask = this.shape_134.mask = this.shape_135.mask = this.shape_136.mask = this.shape_137.mask = this.shape_138.mask = this.shape_139.mask = this.shape_140.mask = this.shape_141.mask = this.shape_142.mask = this.shape_143.mask = this.shape_144.mask = this.shape_145.mask = this.shape_146.mask = this.shape_147.mask = this.shape_148.mask = this.shape_149.mask = this.shape_150.mask = this.shape_151.mask = this.shape_152.mask = this.shape_153.mask = this.shape_154.mask = this.shape_155.mask = this.shape_156.mask = this.shape_157.mask = this.shape_158.mask = this.shape_159.mask = this.shape_160.mask = this.shape_161.mask = this.shape_162.mask = this.shape_163.mask = this.shape_164.mask = this.shape_165.mask = this.shape_166.mask = this.shape_167.mask = this.shape_168.mask = this.shape_169.mask = this.shape_170.mask = this.shape_171.mask = this.shape_172.mask = this.shape_173.mask = this.shape_174.mask = this.shape_175.mask = this.shape_176.mask = this.shape_177.mask = this.shape_178.mask = this.shape_179.mask = this.shape_180.mask = this.shape_181.mask = this.shape_182.mask = this.shape_183.mask = this.shape_184.mask = this.shape_185.mask = this.shape_186.mask = this.shape_187.mask = this.shape_188.mask = this.shape_189.mask = this.shape_190.mask = this.shape_191.mask = this.shape_192.mask = this.shape_193.mask = this.shape_194.mask = this.shape_195.mask = this.shape_196.mask = this.shape_197.mask = this.shape_198.mask = this.shape_199.mask = this.shape_200.mask = this.shape_201.mask = this.shape_202.mask = this.shape_203.mask = this.shape_204.mask = this.shape_205.mask = this.shape_206.mask = this.shape_207.mask = this.shape_208.mask = this.shape_209.mask = this.shape_210.mask = this.shape_211.mask = this.shape_212.mask = this.shape_213.mask = this.shape_214.mask = this.shape_215.mask = this.shape_216.mask = this.shape_217.mask = this.shape_218.mask = this.shape_219.mask = this.shape_220.mask = this.shape_221.mask = this.shape_222.mask = this.shape_223.mask = this.shape_224.mask = this.shape_225.mask = this.shape_226.mask = this.shape_227.mask = this.shape_228.mask = this.shape_229.mask = this.shape_230.mask = this.shape_231.mask = this.shape_232.mask = this.shape_233.mask = this.shape_234.mask = this.shape_235.mask = this.shape_236.mask = this.shape_237.mask = this.shape_238.mask = this.shape_239.mask = this.shape_240.mask = this.shape_241.mask = this.shape_242.mask = this.shape_243.mask = this.shape_244.mask = this.shape_245.mask = this.shape_246.mask = this.shape_247.mask = this.shape_248.mask = this.shape_249.mask = this.shape_250.mask = this.shape_251.mask = this.shape_252.mask = this.shape_253.mask = this.shape_254.mask = this.shape_255.mask = this.shape_256.mask = this.shape_257.mask = this.shape_258.mask = this.shape_259.mask = this.shape_260.mask = this.shape_261.mask = this.shape_262.mask = this.shape_263.mask = this.shape_264.mask = this.shape_265.mask = this.shape_266.mask = this.shape_267.mask = this.shape_268.mask = this.shape_269.mask = this.shape_270.mask = this.shape_271.mask = this.shape_272.mask = this.shape_273.mask = this.shape_274.mask = this.shape_275.mask = this.shape_276.mask = this.shape_277.mask = this.shape_278.mask = this.shape_279.mask = this.shape_280.mask = this.shape_281.mask = this.shape_282.mask = this.shape_283.mask = this.shape_284.mask = this.shape_285.mask = this.shape_286.mask = this.shape_287.mask = this.shape_288.mask = this.shape_289.mask = this.shape_290.mask = this.shape_291.mask = this.shape_292.mask = this.shape_293.mask = this.shape_294.mask = this.shape_295.mask = this.shape_296.mask = this.shape_297.mask = this.shape_298.mask = this.shape_299.mask = this.shape_300.mask = this.shape_301.mask = this.shape_302.mask = this.shape_303.mask = this.shape_304.mask = this.shape_305.mask = this.shape_306.mask = this.shape_307.mask = this.shape_308.mask = this.shape_309.mask = this.shape_310.mask = this.shape_311.mask = this.shape_312.mask = this.shape_313.mask = this.shape_314.mask = this.shape_315.mask = this.shape_316.mask = this.shape_317.mask = this.shape_318.mask = this.shape_319.mask = this.shape_320.mask = this.shape_321.mask = this.shape_322.mask = this.shape_323.mask = this.shape_324.mask = this.shape_325.mask = this.shape_326.mask = this.shape_327.mask = this.shape_328.mask = this.shape_329.mask = this.shape_330.mask = this.shape_331.mask = this.shape_332.mask = this.shape_333.mask = this.shape_334.mask = this.shape_335.mask = this.shape_336.mask = this.shape_337.mask = this.shape_338.mask = this.shape_339.mask = this.shape_340.mask = this.shape_341.mask = this.shape_342.mask = this.shape_343.mask = this.shape_344.mask = this.shape_345.mask = this.shape_346.mask = this.shape_347.mask = this.shape_348.mask = this.shape_349.mask = this.shape_350.mask = this.shape_351.mask = this.shape_352.mask = this.shape_353.mask = this.shape_354.mask = this.shape_355.mask = this.shape_356.mask = this.shape_357.mask = this.shape_358.mask = this.shape_359.mask = this.shape_360.mask = this.shape_361.mask = this.shape_362.mask = this.shape_363.mask = this.shape_364.mask = this.shape_365.mask = this.shape_366.mask = this.shape_367.mask = this.shape_368.mask = this.shape_369.mask = this.shape_370.mask = this.shape_371.mask = this.shape_372.mask = this.shape_373.mask = this.shape_374.mask = this.shape_375.mask = this.shape_376.mask = this.shape_377.mask = this.shape_378.mask = this.shape_379.mask = this.shape_380.mask = this.shape_381.mask = this.shape_382.mask = this.shape_383.mask = this.shape_384.mask = this.shape_385.mask = this.shape_386.mask = this.shape_387.mask = this.shape_388.mask = this.shape_389.mask = this.shape_390.mask = this.shape_391.mask = this.shape_392.mask = this.shape_393.mask = this.shape_394.mask = this.shape_395.mask = this.shape_396.mask = this.shape_397.mask = this.shape_398.mask = this.shape_399.mask = this.shape_400.mask = this.shape_401.mask = this.shape_402.mask = this.shape_403.mask = this.shape_404.mask = this.shape_405.mask = this.shape_406.mask = this.shape_407.mask = this.shape_408.mask = this.shape_409.mask = this.shape_410.mask = this.shape_411.mask = this.shape_412.mask = this.shape_413.mask = this.shape_414.mask = this.shape_415.mask = this.instance_21.mask = this.shape_416.mask = this.shape_417.mask = this.shape_418.mask = this.shape_419.mask = this.shape_420.mask = this.shape_421.mask = this.shape_422.mask = this.shape_423.mask = this.shape_424.mask = this.shape_425.mask = this.shape_426.mask = this.shape_427.mask = this.shape_428.mask = this.shape_429.mask = this.shape_430.mask = this.shape_431.mask = this.shape_432.mask = this.shape_433.mask = this.shape_434.mask = this.shape_435.mask = this.shape_436.mask = this.shape_437.mask = this.shape_438.mask = this.shape_439.mask = this.shape_440.mask = this.shape_441.mask = this.shape_442.mask = this.shape_443.mask = this.shape_444.mask = this.shape_445.mask = this.shape_446.mask = this.shape_447.mask = this.shape_448.mask = this.shape_449.mask = this.shape_450.mask = this.shape_451.mask = this.shape_452.mask = this.shape_453.mask = this.shape_454.mask = this.shape_455.mask = this.shape_456.mask = this.shape_457.mask = this.shape_458.mask = this.shape_459.mask = this.shape_460.mask = this.shape_461.mask = this.shape_462.mask = this.shape_463.mask = this.shape_464.mask = this.shape_465.mask = this.shape_466.mask = this.shape_467.mask = this.shape_468.mask = this.shape_469.mask = this.shape_470.mask = this.shape_471.mask = this.shape_472.mask = this.shape_473.mask = this.shape_474.mask = this.shape_475.mask = this.shape_476.mask = this.shape_477.mask = this.shape_478.mask = this.shape_479.mask = this.shape_480.mask = this.shape_481.mask = this.shape_482.mask = this.shape_483.mask = this.shape_484.mask = this.shape_485.mask = this.shape_486.mask = this.shape_487.mask = this.shape_488.mask = this.shape_489.mask = this.shape_490.mask = this.shape_491.mask = this.shape_492.mask = this.shape_493.mask = this.shape_494.mask = this.shape_495.mask = this.shape_496.mask = this.shape_497.mask = this.shape_498.mask = this.shape_499.mask = this.shape_500.mask = this.shape_501.mask = this.shape_502.mask = this.shape_503.mask = this.shape_504.mask = this.shape_505.mask = this.shape_506.mask = this.shape_507.mask = this.shape_508.mask = this.shape_509.mask = this.shape_510.mask = this.shape_511.mask = this.shape_512.mask = this.shape_513.mask = this.shape_514.mask = this.shape_515.mask = this.shape_516.mask = this.shape_517.mask = this.shape_518.mask = this.shape_519.mask = this.shape_520.mask = this.shape_521.mask = this.shape_522.mask = this.shape_523.mask = this.shape_524.mask = this.shape_525.mask = this.shape_526.mask = this.shape_527.mask = this.shape_528.mask = this.shape_529.mask = this.shape_530.mask = this.shape_531.mask = this.shape_532.mask = this.shape_533.mask = this.shape_534.mask = this.shape_535.mask = this.shape_536.mask = this.shape_537.mask = this.shape_538.mask = this.shape_539.mask = this.shape_540.mask = this.shape_541.mask = this.shape_542.mask = this.shape_543.mask = this.shape_544.mask = this.shape_545.mask = this.shape_546.mask = this.shape_547.mask = this.shape_548.mask = this.shape_549.mask = this.shape_550.mask = this.shape_551.mask = this.shape_552.mask = this.shape_553.mask = this.shape_554.mask = this.shape_555.mask = this.shape_556.mask = this.shape_557.mask = this.shape_558.mask = this.shape_559.mask = this.shape_560.mask = this.shape_561.mask = this.shape_562.mask = this.shape_563.mask = this.shape_564.mask = this.shape_565.mask = this.shape_566.mask = this.shape_567.mask = this.shape_568.mask = this.shape_569.mask = this.shape_570.mask = this.shape_571.mask = this.shape_572.mask = this.shape_573.mask = this.shape_574.mask = this.shape_575.mask = this.shape_576.mask = this.shape_577.mask = this.shape_578.mask = this.shape_579.mask = this.shape_580.mask = this.shape_581.mask = this.shape_582.mask = this.shape_583.mask = this.shape_584.mask = this.shape_585.mask = this.shape_586.mask = this.shape_587.mask = this.shape_588.mask = this.shape_589.mask = this.shape_590.mask = this.shape_591.mask = this.shape_592.mask = this.shape_593.mask = this.shape_594.mask = this.shape_595.mask = this.shape_596.mask = this.shape_597.mask = this.shape_598.mask = this.shape_599.mask = this.shape_600.mask = this.shape_601.mask = this.shape_602.mask = this.shape_603.mask = this.shape_604.mask = this.shape_605.mask = this.shape_606.mask = this.shape_607.mask = this.shape_608.mask = this.shape_609.mask = this.shape_610.mask = this.shape_611.mask = this.shape_612.mask = this.shape_613.mask = this.shape_614.mask = this.shape_615.mask = this.shape_616.mask = this.shape_617.mask = this.shape_618.mask = this.shape_619.mask = this.shape_620.mask = this.shape_621.mask = this.shape_622.mask = this.shape_623.mask = this.shape_624.mask = this.shape_625.mask = this.shape_626.mask = this.shape_627.mask = this.shape_628.mask = this.shape_629.mask = this.shape_630.mask = this.shape_631.mask = this.shape_632.mask = this.shape_633.mask = this.shape_634.mask = this.shape_635.mask = this.shape_636.mask = this.shape_637.mask = this.shape_638.mask = this.shape_639.mask = this.shape_640.mask = this.shape_641.mask = this.shape_642.mask = this.shape_643.mask = this.shape_644.mask = this.shape_645.mask = this.shape_646.mask = this.shape_647.mask = this.shape_648.mask = this.shape_649.mask = this.shape_650.mask = this.shape_651.mask = this.shape_652.mask = this.shape_653.mask = this.shape_654.mask = this.shape_655.mask = this.shape_656.mask = this.shape_657.mask = this.shape_658.mask = this.shape_659.mask = this.shape_660.mask = this.shape_661.mask = this.shape_662.mask = this.shape_663.mask = this.shape_664.mask = this.shape_665.mask = this.shape_666.mask = this.shape_667.mask = this.shape_668.mask = this.shape_669.mask = this.shape_670.mask = this.shape_671.mask = this.shape_672.mask = this.shape_673.mask = this.shape_674.mask = this.shape_675.mask = this.shape_676.mask = this.shape_677.mask = this.shape_678.mask = this.shape_679.mask = this.shape_680.mask = this.shape_681.mask = this.shape_682.mask = this.shape_683.mask = this.shape_684.mask = this.shape_685.mask = this.shape_686.mask = this.shape_687.mask = this.shape_688.mask = this.shape_689.mask = this.shape_690.mask = this.shape_691.mask = this.shape_692.mask = this.shape_693.mask = this.shape_694.mask = this.shape_695.mask = this.shape_696.mask = this.shape_697.mask = this.shape_698.mask = this.shape_699.mask = this.shape_700.mask = this.shape_701.mask = this.shape_702.mask = this.shape_703.mask = this.shape_704.mask = this.shape_705.mask = this.shape_706.mask = this.shape_707.mask = this.shape_708.mask = this.shape_709.mask = this.shape_710.mask = this.shape_711.mask = this.shape_712.mask = this.shape_713.mask = this.shape_714.mask = this.shape_715.mask = this.shape_716.mask = this.shape_717.mask = this.shape_718.mask = this.shape_719.mask = this.shape_720.mask = this.shape_721.mask = this.shape_722.mask = this.shape_723.mask = this.shape_724.mask = this.shape_725.mask = this.shape_726.mask = this.shape_727.mask = this.shape_728.mask = this.shape_729.mask = this.shape_730.mask = this.shape_731.mask = this.shape_732.mask = this.shape_733.mask = this.shape_734.mask = this.shape_735.mask = this.shape_736.mask = this.shape_737.mask = this.shape_738.mask = this.shape_739.mask = this.shape_740.mask = this.shape_741.mask = this.shape_742.mask = this.shape_743.mask = this.shape_744.mask = this.shape_745.mask = this.shape_746.mask = this.shape_747.mask = this.shape_748.mask = this.shape_749.mask = this.shape_750.mask = this.shape_751.mask = this.shape_752.mask = this.shape_753.mask = this.shape_754.mask = this.shape_755.mask = this.shape_756.mask = this.shape_757.mask = this.shape_758.mask = this.shape_759.mask = this.shape_760.mask = this.shape_761.mask = this.shape_762.mask = this.shape_763.mask = this.shape_764.mask = this.shape_765.mask = this.shape_766.mask = this.shape_767.mask = this.shape_768.mask = this.shape_769.mask = this.shape_770.mask = this.shape_771.mask = this.shape_772.mask = this.shape_773.mask = this.shape_774.mask = this.shape_775.mask = this.shape_776.mask = this.shape_777.mask = this.shape_778.mask = this.shape_779.mask = this.shape_780.mask = this.shape_781.mask = this.shape_782.mask = this.shape_783.mask = this.shape_784.mask = this.shape_785.mask = this.shape_786.mask = this.shape_787.mask = this.shape_788.mask = this.shape_789.mask = this.shape_790.mask = this.shape_791.mask = this.shape_792.mask = this.shape_793.mask = this.shape_794.mask = this.shape_795.mask = this.shape_796.mask = this.shape_797.mask = this.shape_798.mask = this.shape_799.mask = this.shape_800.mask = this.shape_801.mask = this.shape_802.mask = this.shape_803.mask = this.shape_804.mask = this.shape_805.mask = this.shape_806.mask = this.shape_807.mask = this.shape_808.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.shape_809.mask = this.shape_810.mask = this.shape_811.mask = this.shape_812.mask = this.instance_25.mask = this.shape_813.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_813},{t:this.instance_25},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.instance_21},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-503.3,-460.7,1024,808);


// stage content:
(lib.Usetheforce = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bg();
	this.instance.setTransform(503.4,460.7);

	this.instance_1 = new lib.mc_perple_1();
	this.instance_1.setTransform(437,181.4,1,1,0,0,0,24.5,12.5);

	this.instance_2 = new lib.mc_redCar();
	this.instance_2.setTransform(436.9,209.6,1.299,1.303,0,0,0,18.8,9.6);

	this.instance_3 = new lib.mc_nidle2();
	this.instance_3.setTransform(454,65.9,1,1,0,0,0,1,23.8);

	this.instance_4 = new lib.mc_nidle1();
	this.instance_4.setTransform(307.5,65.9,1,1,0,0,0,1,23.8);

	this.instance_5 = new lib.r800m();
	this.instance_5.setTransform(270.1,565.2,1,1,0,0,0,-0.3,-0.3);

	this.instance_6 = new lib.r875m();
	this.instance_6.setTransform(695.1,330.7,1,1,0,0,0,0.3,-0.3);

	this.instance_7 = new lib.mc_perplecarAnimation();
	this.instance_7.setTransform(569.2,489.1,1,1,0,0,0,23.2,13.6);

	this.instance_8 = new lib.mc_RedcarAnimation();
	this.instance_8.setTransform(552,332.5,1,1,0,0,0,-2,16);

	this.instance_9 = new lib.mc_redCarcras();
	this.instance_9.setTransform(670.6,175.7,1.318,1.323,0,180,0,18.9,9.6);

	this.instance_10 = new lib.mc_patch();
	this.instance_10.setTransform(511.6,758.1,1.25,1.25,0,0,0,512.6,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_4},{t:this.instance_3}]},1).to({state:[{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_10}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(405.7,371.3,1219.4,986.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;