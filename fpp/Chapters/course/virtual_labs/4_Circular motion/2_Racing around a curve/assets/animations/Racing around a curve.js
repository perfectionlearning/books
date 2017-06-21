(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 808,
	fps: 24,
	color: "#CCCCCC",
	manifest: [
		{src:"images/car.png?1495629700482", id:"car"},
		{src:"images/car1.png?1495629700482", id:"car1"},
		{src:"images/Cutpng.jpg?1495629700482", id:"Cutpng"},
		{src:"images/road.jpg?1495629700482", id:"road"},
		{src:"images/road1.jpg?1495629700482", id:"road1"}
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


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ABABAB").s().p("AiMg/IAGgJIETCIIgEAJg");
	this.shape.setTransform(-4.5,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag/BMIAbg0IA/AhIgZA1gAhbgCIAhhBIA3AcIghA/gAgDgnIAhhGIA+AfIgjBHg");
	this.shape_1.setTransform(9.5,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhWBOIAagzIA2AcIgaAzgAgGA3IAghAIg1gbIAihFIA2AbIgjBFIA9AfIgeBBgAgGA3g");
	this.shape_2.setTransform(6.5,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-12.8,37.3,25.8);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ABABAB").s().p("AiMg/IAGgJIETCIIgEAJg");
	this.shape.setTransform(-4.5,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag/BMIAbg0IA/AhIgZA1gAhbgCIAhhBIA3AcIAhhGIA+AfIgjBHIg8ggIghA/g");
	this.shape_1.setTransform(9.5,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhWBOIAagzIA2AcIgaAzgAgGA3IAghAIA9AfIgeBBgAgGA3gAgbgkIAihFIA2AbIgjBFg");
	this.shape_2.setTransform(6.5,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-12.8,37.3,25.8);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ABABAB").s().p("AiMg/IAGgJIETCIIgEAJg");
	this.shape.setTransform(-4.5,5.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag/BMIAbg0IA/AhIgZA1gAhbgCIAhhBIA3AcIghA/gAgDgnIAhhGIA+AfIgjBHg");
	this.shape_1.setTransform(9.5,0.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhWBOIAagzIA2AcIgaAzgAgGA3IAghAIg1gbIAihFIA2AbIgjBFIA9AfIgeBBgAgGA3g");
	this.shape_2.setTransform(6.5,-2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.6,-12.8,37.3,25.8);


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


(lib.mc_redCar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKAHIgRgBIgPAAIgEAAIgbgDIgHAAIgFgBIgegCIAXgDIAEgBIAJgBQAZgBAbAAIAgABIAHABIAGAAIA4AEIADAAIAAABIgYACQgYADgXAAIgHABIgJAAgAhFAAIAWABIAEAAIAEAAIAUABIAEAAIAKABIANAAIAFAAIAGAAIAjgCIARgBIgBAAIgqgBIgFgBIgFAAIgXAAQgUgBgRABIgIABIgCAAIgRABg");
	this.shape.setTransform(17.4,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKAHQgrAAgrgHQAmgDAigCIAXgBIAJAAIAIAAIAHAAQAUAAATABIAGABIAaADIADABIgIAAIgTABQgQADgRABIgHABIgHAAIggABIgBAAgAgRgBIg1ABQAgADAfAAIABAAIAXgBIAFAAIAFAAIAZgCIAOAAIAFAAIgCAAIgTgBIgFAAIgcgBIgFAAIgGAAIgGAAIgRABg");
	this.shape_1.setTransform(17.8,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTA1QgOgbgCgZIAAgCIAAgCIABgHQACgLADgKIAEgLIAGgKIA2gBQgHAhACAhQACAUADAUgAgTgkIgEAJQgCAJgBAJIgBAHIAAABIAAACQACAWAKAWIAqAAQgCgRgBgRQgDgcAGgcIgqAAIgEAJg");
	this.shape_2.setTransform(7.3,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAlIAAhKQABgEAFgCIAiABIAFABQAEADgBADIAAAFIABAHIAAAMIAAAHIAAAXIgBADIAAAGIAAAJQgBAFgFACIgjAAQgGAAgBgHgAgRggIAAA/QAAAHAFAAIAZAAQAEgCAAgFIABgHIAAgEIAAgEIAAgUIAAgFIAAgLIAAgFIgBgFQABgDgDgCIgDgCIgZAAQgDACgBADg");
	this.shape_3.setTransform(19.7,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgoA7IAFgVIACgIIAAgBIABgHIABgPIAAgLIAAgGIgBgMIgBgGIAAgCIgCgIIgEgUIAygIIABABQAcATABAtQABAdgLATIgDAEIgGAHQgFAFgGADIAAABgAgfgzIAEASIABAHIAAABIABAGIABAKIAAAGIAAAJIgBANIgBAGIAAABIgCAHIgEATIAqAHIAAgBIAJgHIAFgGIACgEQAKgRgBgZQgBgngXgRIgBgBg");
	this.shape_4.setTransform(27.6,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFEF9").s().p("ACXBHIAAgBIABgEIAFgJIAIgHQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABgBABIgFAJIgHAHIgEACIgBAAgAibBCQgEgCgDgFIgFgJQgCgEABgBQACAAADACIAHAHIAFAJQAAABABABQAAABAAAAQAAABAAAAQAAABAAAAIgBAAIgEgCgAiogtQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBIAFgJIAHgHQADgDACABQABABgCAEIgFAIIgHAIIgEACIgBgBgACkgxIgIgHIgFgJIgBgEIABgBQAAAAABAAQAAAAABAAQAAAAABABQABAAABABIAHAHIAEAIIABABQAAABABABQAAABAAAAQAAABAAAAQAAABgBAAIAAAAIgEgCg");
	this.shape_5.setTransform(19,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D32C2C").s().p("AAAAAIAAAAIAAAAg");
	this.shape_6.setTransform(3.3,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#203548").s().p("AAAAAIABAAIgBAAg");
	this.shape_7.setTransform(27.2,16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4B76A9").s().p("AAcA/IAHABIgNAMIgHABgAgLBMIgPAAIAPgOIAgABIgOAOIgSgBgABBAGIABgKIA9A3IgGAHgAhIA1IhCg/QABgLAEgKIAEgLIA5A3QABAUAEAUgAhXA1Ig0g0IAAgCIA5A2gABBgKIgBgMIAAgGIgBgCIgBgIIgFgUIATgEIBAA9QABAcgMATgAAhArIglgoIAAgDIAoArgAgEgVIAAgGIAwAxIAAAFgAgEgfIAAgGQABgFADgCIAGAAIAmAoIAAAWgAgJg9IgOgNIAWgBIAKAAIAOANIggABIAAAAgAARhLIAHAAIANAMIgGABg");
	this.shape_8.setTransform(17.7,9.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#38587E").s().p("AAHBNIAOgOIAHAAIgNAOIgIAAgAAjBAIA4AFIACABIAAAAIgXADQgYACgYABgAgeBMIgbgDIgGgBIgFAAIgfgEIAXgEIAEAAIAKgBQAYgBAbAAIgPAOIgEAAgABRA+IgZgDIAGgVIABgIIAAgCIABgGIABgQIA4A0QgFAFgGADIgBABgAhSA1Ig5g2IAAgCIABgHIBCA/gAh8A1QgOgbgBgZIA0A0gABCgEIgBgGIBAA4IgCAFgAgEAkIAAghIAlAoIggAAQgFABAAgIgAAkArIgogrIAAgVIAwAwIgBAJQAAAFgFACgAgEgbIAAgEIAwAxIAAAEgAiBgqIAFgKIA5gBQgHAhACAhgABMg+IAFAAIAdgEIABABQAcATABAtgAAGgsIAeABIAEABQAEADgBADIABAGIAAAGIAAANIAAAHgAhghDQAngFAigCIAOANQgrAAgsgGgAAJhLIAIAAIAOANIgIAAgAAYhLQAUAAASABIAHABIAaACIADABIgIABIgTADQgRACgRABg");
	this.shape_9.setTransform(17.7,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("ABQBOQAMgEADgCQAOgCALgTQAMgVAAgeQAAgcgMgWQgLgSgOgDQgDgCgNgEQASgCATABIANABQANACAKAGQAKAGAHAKQAIAMADAQIABAPIAAAFIAAADIAAAAIAAAIIgBASQgBALgEAJIgFAJQgHAKgLAHIgJAEIgCABIgKADIgEABIgQAAIgfgBgAiqAyQgIgUgCgbQgCgYAIgWQAGgTASgKQBEASBEgBIAAAAIAggBIAHgBIAGAAIAPgCIAFgBIAUgDIgBABIgFABIgTADIAFAUIABAIIABACIAAAGIABAMIABAGIgBALIgBAPIgBAHIAAABIgBAIIgGAVIAZAEIABABIgPgDIgLgBIgEgBIgEAAIgHgBIgGAAIgIgBIgggBQgfAAgeADIgKABIgEABQgdAEgeAIQgLgEgJgTgAiHg0IgFAKIgEALQgEAKgBALIgBAHIAAACIAAADQABAZAOAbIAlAAIAFAAIAKAAIAFAAQgEgVgBgUQgCghAHgggAgPglIAAAGIAAAEIAAAGIAAAVIAAADIAAAiQAAAHAHAAIAegBIADAAIACAAQAFgBAAgFIABgJIAAgGIAAgEIAAgWIAAgHIAAgNIAAgGIgBgFQABgEgEgDIgEgBIgcAAIgHAAQgEABgBAFg");
	this.shape_10.setTransform(18.8,9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#C60000").s().p("AA+BfIAAgDQgCgLAIgHIgMACIgMABIgHAAIgdACIgHAAIgGAAIgJAAQgJAHgKgHIgCgBIghgCIgCABIgDABIgBABQgNADgegBIgGAAQgKAAgJgCIgLgEIgBgBIAAAAIgBAAIgBgBQgMgCgIgVQgJgUgCgbQgBgYAHgWQAHgUATgKIABAAIAAgBIAMgEQAIgCALAAIAGAAQAegCANAEIAGADIAggCIACgBQALgHAIAHIAMAAIAFAAIAHAAIAcABIAHABIAFAAIAHABIALACQgHgHABgLIABgDQAOgEABATIADAAQAVgDAWABIANABQArAJAIAtIABAQIAAAFIAAADIAAAAIAAAIIgBASQgBAMgEAKQgKAWgWAJIgFACIgKADIgBAAQgeABgagDQgCAQgJAAIgFgBgABPhNQANAEADACQAOADAKASQANAWAAAcQAAAegNAVQgKATgPACQgDACgMAEQAXACAYgBIAFgBIAKgDIACgBIAJgEQAKgHAHgKIAFgJQAEgJACgLIABgSIAAgIIgBAAIAAgDIAAgFIgBgPQgDgQgIgMQgHgKgKgGQgKgGgMgCIgNgBIgIAAQgPAAgOABgAhKA/IgJABIgEABIgYADIAfAEIAFABIAHAAIAaADIAFAAIAOAAIAUABIAGAAIAHgBQAYAAAYgDIAXgCIACgBIgCAAIgCAAIg4gGIgGAAIgIgBIgggBIgNAAIgmABgAivgrQgHAWACAYQABAbAJAUQAIATALAEQAegIAegEIAEgBIAJgBQAfgDAfAAIAgABIAHABIAGAAIAIABIADAAIAFABIAKABIAQADIgBgBIAcAEIAAgBQAGgDAFgFIAGgHIADgEQALgTgBgdQgBgtgcgTIgBgBIgcAEIABgBIgUADIgGABIgOACIgHAAIgHABIgfABIgBAAQhDABhFgSQgRAKgHATgAgUg8IAggBIAHgBIAHAAQARgBAQgDIATgCIAIgCIgDAAIgagDIgGgBQgTgBgUAAIgHAAIgGAAIgLAAIgXABQgiACgmAFQArAGArABIABAAIAAAAg");
	this.shape_11.setTransform(18.9,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.8,19.2);


(lib.mc_redcar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car();
	this.instance.setTransform(0,1.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1.1,176,90);


(lib.mc_purpleCar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAKAHIgRgBIgPAAIgEAAIgbgDIgHAAIgFgBIgegCIAXgDIAEgBIAJgBQAZgBAbAAIAgABIAHABIAGAAIA4AEIADAAIAAABIgYACQgYADgXAAIgHABIgJAAgAhFAAIAWABIAEAAIAEAAIAUABIAEAAIAKABIANAAIAFAAIAGAAIAjgCIARgBIgBAAIgqgBIgFgBIgFAAIgXAAQgUgBgRABIgIABIgCAAIgRABg");
	this.shape.setTransform(17.4,16.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgKAHQgrAAgrgHQAmgDAigCIAXgBIAJAAIAIAAIAHAAQAUAAATABIAGABIAaADIADABIgIAAIgTABQgQADgRABIgHABIgHAAIggABIgBAAgAgRgBIg1ABQAgADAfAAIABAAIAXgBIAFAAIAFAAIAZgCIAOAAIAFAAIgCAAIgTgBIgFAAIgcgBIgFAAIgGAAIgGAAIgRABg");
	this.shape_1.setTransform(17.8,2.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgTA1QgOgbgCgZIAAgCIAAgCIABgHQACgLADgKIAEgLIAGgKIA2gBQgHAhACAhQACAUADAUgAgTgkIgEAJQgCAJgBAJIgBAHIAAABIAAACQACAWAKAWIAqAAQgCgRgBgRQgDgcAGgcIgqAAIgEAJg");
	this.shape_2.setTransform(7.3,9.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYAlIAAhKQABgEAFgCIAiABIAFABQAEADgBADIAAAFIABAHIAAAMIAAAHIAAAXIgBADIAAAGIAAAJQgBAFgFACIgjAAQgGAAgBgHgAgRggIAAA/QAAAHAFAAIAZAAQAEgCAAgFIABgHIAAgEIAAgEIAAgUIAAgFIAAgLIAAgFIgBgFQABgDgDgCIgDgCIgZAAQgDACgBADg");
	this.shape_3.setTransform(19.7,9.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgoA7IAFgVIACgIIAAgBIABgHIABgPIAAgLIAAgGIgBgMIgBgGIAAgCIgCgIIgEgUIAygIIABABQAcATABAtQABAdgLATIgDAEIgGAHQgFAFgGADIAAABgAgfgzIAEASIABAHIAAABIABAGIABAKIAAAGIAAAJIgBANIgBAGIAAABIgCAHIgEATIAqAHIAAgBIAJgHIAFgGIACgEQAKgRgBgZQgBgngXgRIgBgBg");
	this.shape_4.setTransform(27.6,9.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFEF9").s().p("ACXBHIAAgBIABgEIAFgJIAIgHQAAgBABAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABgBABIgFAJIgHAHIgEACIgBAAgAibBCQgEgCgDgFIgFgJQgCgEABgBQACAAADACIAHAHIAFAJQAAABABABQAAABAAAAQAAABAAAAQAAABAAAAIgBAAIgEgCgAiogtQAAAAAAAAQAAgBAAAAQAAgBAAgBQAAAAABgBIAFgJIAHgHQADgDACABQABABgCAEIgFAIIgHAIIgEACIgBgBgACkgxIgIgHIgFgJIgBgEIABgBQAAAAABAAQAAAAABAAQAAAAABABQABAAABABIAHAHIAEAIIABABQAAABABABQAAABAAAAQAAABAAAAQAAABgBAAIAAAAIgEgCg");
	this.shape_5.setTransform(19,9.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D32C2C").s().p("AAAAAIAAAAIAAAAg");
	this.shape_6.setTransform(3.3,17.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#203548").s().p("AAAAAIABAAIgBAAg");
	this.shape_7.setTransform(27.2,16.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4B76A9").s().p("AAcA/IAHABIgNAMIgHABgAgLBMIgPAAIAPgOIAgABIgOAOIgSgBgABBAGIABgKIA9A3IgGAHgAhIA1IhCg/QABgLAEgKIAEgLIA5A3QABAUAEAUgAhXA1Ig0g0IAAgCIA5A2gABBgKIgBgMIAAgGIgBgCIgBgIIgFgUIATgEIBAA9QABAcgMATgAAhArIglgoIAAgDIAoArgAgEgVIAAgGIAwAxIAAAFgAgEgfIAAgGQABgFADgCIAGAAIAmAoIAAAWgAgJg9IgOgNIAWgBIAKAAIAOANIggABIAAAAgAARhLIAHAAIANAMIgGABg");
	this.shape_8.setTransform(17.7,9.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#38587E").s().p("AAHBNIAOgOIAHAAIgNAOIgIAAgAAjBAIA4AFIACABIAAAAIgXADQgYACgYABgAgeBMIgbgDIgGgBIgFAAIgfgEIAXgEIAEAAIAKgBQAYgBAbAAIgPAOIgEAAgAA4A7IAGgVIABgIIAAgCIABgGIABgQIA4A0QgFAFgGADIgBABgAhSA1Ig5g2IAAgCIABgHIBCA/gAh8A1QgOgbgBgZIA0A0gABCgEIgBgGIBAA4IgCAFgAgEAkIAAghIAlAoIggAAQgFABAAgIgAAkArIgogrIAAgVIAwAwIgBAJQAAAFgFACgAgEgbIAAgEIAwAxIAAAEgAiBgqIAFgKIA5gBQgHAhACAhgABMg+IAigEIABABQAcATABAtgAAGgsIAeABIAEABQAEADgBADIABAGIAAAGIAAANIAAAHgAhghDQAngFAigCIAOANQgrAAgsgGgAAJhLIAIAAIAOANIgIAAgAAYhLQAUAAASABIAHABIAaACIADABIgIABIgTADQgRACgRABg");
	this.shape_9.setTransform(17.7,9.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8000FF").s().p("ABQBOQAMgEADgCQAOgCALgTQAMgVAAgeQAAgcgMgWQgLgSgOgDQgDgCgNgEQASgCATABIANABQANACAKAGQAKAGAHAKQAIAMADAQIABAPIAAAFIAAADIAAAAIAAAIIgBASQgBALgEAJIgFAJQgHAKgLAHIgJAEIgCABIgKADIgEABIgQAAIgfgBgAiqAyQgIgUgCgbQgCgYAIgWQAGgTASgKQBEASBEgBIAAAAIAggBIAHgBIAGAAIAPgCIAAABIAFAUIABAIIABACIAAAGIABAMIABAGIgBALIgBAPIgBAHIAAABIgBAIIgGAVIAAABIgEgBIgEAAIgHgBIgGAAIgIgBIgggBQgfAAgeADIgKABIgEABQgdAEgeAIQgLgEgJgTgAiHg0IgFAKIgEALQgEAKgBALIgBAHIAAACIAAADQABAZAOAbIAlAAIAFAAIAKAAIAFAAQgEgVgBgUQgCghAHgggAgPglIAAAGIAAAEIAAAGIAAAVIAAADIAAAiQAAAHAHAAIAegBIADAAIACAAQAFgBAAgFIABgJIAAgGIAAgEIAAgWIAAgHIAAgNIAAgGIgBgFQABgEgEgDIgEgBIgcAAIgHAAQgEABgBAFg");
	this.shape_10.setTransform(18.8,9.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5401A9").s().p("AA+BfIAAgDQgCgLAIgHIgMACIgMABIgHAAIgdACIgHAAIgGAAIgJAAQgJAHgKgHIgCgBIghgCIgCABIgDABIgBABQgNADgegBIgGAAQgKAAgJgCIgLgEIgBgBIAAAAIgBAAIgBgBQgMgCgIgVQgJgUgCgbQgBgYAHgWQAHgUATgKIABAAIAAgBIAMgEQAIgCALAAIAGAAQAegCANAEIAGADIAggCIACgBQALgHAIAHIAMAAIAFAAIAHAAIAcABIAHABIAFAAIAHABIALACQgHgHABgLIABgDQAOgEABATIADAAQAVgDAWABIANABQArAJAIAtIABAQIAAAFIAAADIAAAAIAAAIIgBASQgBAMgEAKQgKAWgWAJIgFACIgKADIgBAAQgeABgagDQgCAQgJAAIgFgBgABPhNQANAEADACQAOADAKASQANAWAAAcQAAAegNAVQgKATgPACQgDACgMAEQAXACAYgBIAFgBIAKgDIACgBIAJgEQAKgHAHgKIAFgJQAEgJACgLIABgSIAAgIIgBAAIAAgDIAAgFIgBgPQgDgQgIgMQgHgKgKgGQgKgGgMgCIgNgBIgIAAQgPAAgOABgAhKA/IgJABIgEABIgYADIAfAEIAFABIAHAAIAaADIAFAAIAOAAIAUABIAGAAIAHgBQAYAAAYgDIAXgCIACgBIgCAAIgCAAIg4gGIgGAAIgIgBIgggBIgNAAIgmABgAivgrQgHAWACAYQABAbAJAUQAIATALAEQAegIAegEIAEgBIAJgBQAfgDAfAAIAgABIAHABIAGAAIAIABIADAAIAFABIAAgBIA1AIIAAgBQAGgDAFgFIAGgHIADgEQALgTgBgdQgBgtgcgTIgBgBIgiAFIgSADIgBgBIgOACIgHAAIgHABIgfABIgBAAQhDABhFgSQgRAKgHATgAgUg8IAggBIAHgBIAHAAQARgBAQgDIATgCIAIgCIgDAAIgagDIgGgBQgTgBgUAAIgHAAIgGAAIgLAAIgXABQgiACgmAFQArAGArABIABAAIAAAAg");
	this.shape_11.setTransform(18.9,9.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.8,19.2);


(lib.mc_perple = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car1();
	this.instance.setTransform(0.1,1.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,1.5,176,90);


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


(lib.mc_finishline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6D6D6").s().p("AgZJRIAAhgIAZAAIAABggAAAHxIAAhdIgZAAIAAhcIAZAAIAABcIAaAAIAABdgAAAE4IAAhcIgZAAIAAhdIAZAAIAABdIAaAAIAABcgAAAE4gAAAB/IAAhcIAaAAIAABcgAgZAjIAAhbIAZAAIAABbgAAAg4IAAhcIAaAAIAABcgAAAg4gAgZiUIAAhcIAZAAIAABcgAAAjwIAAhdIgZAAIAAhcIAZAAIAAhdIgZAAIAAhKIAZAAIAABKIAaAAIAABdIgaAAIAABcIAaAAIAABdgAAAjwg");
	this.shape.setTransform(2.7,59.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262626").s().p("AAAJRIAAhgIgZAAIAAhdIAZAAIAABdIAaAAIAABggAAAGUIAAhcIAaAAIAABcgAgZE4IAAhcIAZAAIAABcgAAADcIAAhdIgZAAIAAhcIAZAAIAABcIAaAAIAABdgAAAAjIAAhbIAaAAIAABbgAAAAjgAgZg4IAAhcIAZAAIAABcgAAAiUIAAhcIAaAAIAABcgAAAiUgAgZjwIAAhdIAZAAIAABdgAAAlNIAAhcIAaAAIAABcgAgZmpIAAhdIAZAAIAABdgAAAoGIAAhKIAaAAIAABKg");
	this.shape_1.setTransform(2.7,59.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.4,118.8);


(lib.car_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.car();
	this.instance.setTransform(18.9,-9.3,0.21,0.21,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18,-9.3,37,18.9);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Cutpng();
	this.instance.setTransform(0,0,1.014,1.014);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,790.7,628.6);


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

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACtLhIAAjPIUeAAIAADPgAA4LhIAAjPIA7AAIAADPgA3KLhIAAjPIYCAAIAADPgACtISIg6AAIg7AAI4CAAIAAg9IAAvSIYCAAIAAPSIAAvSIA7AAIA6AAIUeAAIAAPSIAAA9gACtn9Ig6AAIg7AAI4CAAIAAjjMAuVAAAIAADjg");
	mask.setTransform(529.5,192.1);

	// Layer 4
	this.instance = new lib.mc_redcar("synched",0);
	this.instance.setTransform(773.9,188.9,1,1,0,0,0,87.8,44.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:583.9},21).wait(17));

	// Layer 6
	this.instance_1 = new lib.mc_hand("synched",0);
	this.instance_1.setTransform(439.8,182.2,1,1,0,0,0,14.7,5.2);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({regX:1.7,regY:6.2,x:426.8,y:182.7},0).to({rotation:26.5,x:428.4,y:181.4},4).to({regY:6.1,rotation:-32.5,x:427.5,y:182.1},4).to({regY:6.2,rotation:0,x:426.8,y:182.7},4).to({rotation:26.5,x:428.4,y:181.4},4).to({rotation:0,x:426.8,y:182.7},4).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ABABAB").s().p("AiMg/IAGgJIETCIIgEAJg");
	this.shape.setTransform(454.8,186);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag/BMIAbg0Ig3gaIAihBIA3AcIgiA/IA/AhIgZA1gAgCgnIAhhGIA9AfIgjBHg");
	this.shape_1.setTransform(468.8,181.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhWBOIAagzIA2AcIgaAzgAgGA3IAghAIg1gbIAihFIA2AbIgjBFIA9AfIgeBBgAgGA3g");
	this.shape_2.setTransform(465.7,178.3);

	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(459.3,180);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(459,190.5,1,1,13.4);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.setTransform(453.5,162.4,1,1,-32.5);
	this.instance_4._off = true;

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_2}]},17).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({_off:true,rotation:13.4,x:459,y:190.5},4).wait(4).to({_off:false,rotation:0,x:459.3,y:180},4).to({_off:true,rotation:13.4,x:459,y:190.5},4).to({_off:false,rotation:0,x:459.3,y:180},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},4).to({_off:true,rotation:-32.5,x:453.5,y:162.4},4).wait(4).to({_off:false,rotation:13.4,x:459,y:190.5},4).to({_off:true,rotation:0,x:459.3,y:180},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},4).to({_off:true,rotation:0,x:459.3,y:180},4).wait(9));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7BE93").s().p("AgQAPQgDgFAAgDIAAgIIABAAQABgIAHgFQAIgEAJgBQAAAAABABQAAAAABABQAAAAAAABQAAABAAABIgIANQAMgOACABQAJAKgFAHQgEAJgIAEQgFAEgEAAQgGAAgIgFg");
	this.shape_3.setTransform(443.9,216.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8897B4").s().p("AApBDQgfgEgRgOQgTgPgTgaQgUgfgGgkQAAgDAEgEQAFgDAFABQASAEAQAoQALAZAKANQAMAQAVAEQAbAGAKAIIAAAKQAAAEADAFQgCACgHAAQgIAAgNgCg");
	this.shape_4.setTransform(435,211.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383431").s().p("AgfBnQANglACgUQA5AcgNATQgFAIgRADIgPABQgKAAgMgCgAgehUIgJgUQBcACgPAYQgFAJgUAIQgPAJgRAEQgCgNgJgXg");
	this.shape_5.setTransform(437.6,194.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C2218").s().p("AgMA/QgtgGgRgmQgBgDAAgMIAAgOQAXg2AzABQAQABATAHQAOAGAHAHQAUARABAZQABAZgSARQgbAWggAAIgMgBg");
	this.shape_6.setTransform(430.1,194.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8897B4").s().p("AggB0QgagjgHg/QAQAmAuAGQAoAEAegZIgBAFQgCATgNAmQgSAngcABIgBAAQgQAAgUgbgAgohrQATgiASgBQAZAAAVAlIAIAVQAJAXACAMIACAGQgIgHgOgGQgTgHgSgBQgxgBgWA2QADg3AXgpg");
	this.shape_7.setTransform(429.2,194.6);

	this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(38));

	// Layer 2
	this.instance_5 = new lib.road();
	this.instance_5.setTransform(381.2,118.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(381.2,118.4,304,154);


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
p.nominalBounds = new cjs.Rectangle(0.8,0.3,37,18.9);


(lib.mc_perplecarAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ACtLhIAAjPIUeAAIAADPgAA4LhIAAjPIA7AAIAADPgA3KLhIAAjPIYCAAIAADPgACtISIg6AAIg7AAI4CAAIAAg9IAAvSIYCAAIAAPSIAAvSIA7AAIA6AAIUeAAIAAPSIAAA9gACtn9Ig6AAIg7AAI4CAAIAAjjMAuVAAAIAADjg");
	mask.setTransform(529.5,192.1);

	// Layer 4
	this.instance = new lib.mc_perple("synched",0);
	this.instance.setTransform(773.9,188.9,1,1,0,0,0,87.8,44.8);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:583.9},21).wait(17));

	// Layer 6
	this.instance_1 = new lib.mc_hand("synched",0);
	this.instance_1.setTransform(439.8,182.2,1,1,0,0,0,14.7,5.2);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(17).to({regX:1.7,regY:6.2,x:426.8,y:182.7},0).to({rotation:26.5,x:428.4,y:181.4},4).to({regY:6.1,rotation:-32.5,x:427.5,y:182.1},4).to({regY:6.2,rotation:0,x:426.8,y:182.7},4).to({rotation:26.5,x:428.4,y:181.4},4).to({rotation:0,x:426.8,y:182.7},4).wait(1));

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ABABAB").s().p("AiMg/IAGgJIETCIIgEAJg");
	this.shape.setTransform(454.8,186);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag/BMIAbg0Ig3gaIAihBIA3AcIgiA/IA/AhIgZA1gAgCgnIAhhGIA9AfIgjBHg");
	this.shape_1.setTransform(468.8,181.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhWBOIAagzIA2AcIgaAzgAgGA3IAghAIg1gbIAihFIA2AbIgjBFIA9AfIgeBBgAgGA3g");
	this.shape_2.setTransform(465.7,178.3);

	this.instance_2 = new lib.Tween1("synched",0);
	this.instance_2.setTransform(459.3,180);
	this.instance_2._off = true;

	this.instance_3 = new lib.Tween2("synched",0);
	this.instance_3.setTransform(459,190.5,1,1,13.4);
	this.instance_3._off = true;

	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.setTransform(453.5,162.4,1,1,-32.5);
	this.instance_4._off = true;

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.instance_2}]},17).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_4}]},4).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(17).to({_off:false},0).to({_off:true,rotation:13.4,x:459,y:190.5},4).wait(4).to({_off:false,rotation:0,x:459.3,y:180},4).to({_off:true,rotation:13.4,x:459,y:190.5},4).to({_off:false,rotation:0,x:459.3,y:180},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(17).to({_off:false},4).to({_off:true,rotation:-32.5,x:453.5,y:162.4},4).wait(4).to({_off:false,rotation:13.4,x:459,y:190.5},4).to({_off:true,rotation:0,x:459.3,y:180},4).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({_off:false},4).to({_off:true,rotation:0,x:459.3,y:180},4).wait(9));

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F7BE93").s().p("AgQAPQgDgFAAgDIAAgIIABAAQABgIAHgFQAIgEAJgBQAAAAABABQAAAAABABQAAAAAAABQAAABAAABIgIANQAMgOACABQAJAKgFAHQgEAJgIAEQgFAEgEAAQgGAAgIgFg");
	this.shape_3.setTransform(443.9,216.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8897B4").s().p("AApBDQgfgEgRgOQgTgPgTgaQgUgfgGgkQAAgDAEgEQAFgDAFABQASAEAQAoQALAZAKANQAMAQAVAEQAbAGAKAIIAAAKQAAAEADAFQgCACgHAAQgIAAgNgCg");
	this.shape_4.setTransform(435,211.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#383431").s().p("AgfBnQANglACgUQA5AcgNATQgFAIgRADIgPABQgKAAgMgCgAgehUIgJgUQBcACgPAYQgFAJgUAIQgPAJgRAEQgCgNgJgXg");
	this.shape_5.setTransform(437.6,194.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#2C2218").s().p("AgMA/QgtgGgRgmQgBgDAAgMIAAgOQAXg2AzABQAQABATAHQAOAGAHAHQAUARABAZQABAZgSARQgbAWggAAIgMgBg");
	this.shape_6.setTransform(430.1,194.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8897B4").s().p("AggB0QgagjgHg/QAQAmAuAGQAoAEAegZIgBAFQgCATgNAmQgSAngcABIgBAAQgQAAgUgbgAgohrQATgiASgBQAZAAAVAlIAIAVQAJAXACAMIACAGQgIgHgOgGQgTgHgSgBQgxgBgWA2QADg3AXgpg");
	this.shape_7.setTransform(429.2,194.6);

	this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(38));

	// Layer 2
	this.instance_5 = new lib.road1();
	this.instance_5.setTransform(377.8,115.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(377.8,115.3,304,154);


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


(lib.mc_bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 7
	this.instance = new lib.mc_redCar();
	this.instance.setTransform(219.3,30.1,1.1,1.1,90.3,0,0,18.9,9.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape.setTransform(782.7,119.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_1.setTransform(782.7,99.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_2.setTransform(782.7,80.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_3.setTransform(782.7,61.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgNAGIAAgLIAbAAIAAALg");
	this.shape_4.setTransform(782.7,42.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(2,2,1).p("ADoAAInPAA");
	this.shape_5.setTransform(755.9,80.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#959595").s().p("AC3AJIluAAIgDAAIAAgBIACAAIAAgQIFzAAIAAARg");
	this.shape_6.setTransform(755.5,120.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#133412").s().p("AjiALIAOgGIAAgPIAgAAIAAAAIADAAIFuAAIADAAIAAABIAiAAIABAAIAAAUg");
	this.shape_7.setTransform(754.9,122.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#0F2C0C").s().p("AgMGsIAAtXIAYAAIAAARIAAABIAAMtIAAASIgMAGg");
	this.shape_8.setTransform(732.3,81);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#79807D").s().p("AAOGXIgdAAIAAstIAGAAIACAAIAXAAIAAASIAAMJIAAASg");
	this.shape_9.setTransform(735.3,80.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BAB9BA").s().p("Ai5AJIAAgQIFzAAIAAAQg");
	this.shape_10.setTransform(755.5,40.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#163217").s().p("ADGAKIlyAAIgZAAIgCAAIgGAAIAAgPIgaAAIAAgEIHPAAIAAATg");
	this.shape_11.setTransform(754.3,38.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("ADLGYIgCAAIghAAIAAgBIAAgTIlzAAIAAsIIFzAAIAAgSIAAgBIAhAAIADAAIAAMvg");
	this.shape_12.setTransform(757.4,80.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8DAC8A").s().p("AgNGuIAAgWIABAAIAAsvIgCAAIAAgWIAAAAIAdAAIAAA2IAAH/IAAEmg");
	this.shape_13.setTransform(779.1,80.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgFAPIAAgdIALAAIAAAdg");
	this.shape_14.setTransform(636.9,82.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgFAPIAAgdIALAAIAAAdg");
	this.shape_15.setTransform(617.8,82.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgFAPIAAgdIALAAIAAAdg");
	this.shape_16.setTransform(598.6,82.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgFAPIAAgdIALAAIAAAdg");
	this.shape_17.setTransform(579.5,82.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgFAPIAAgdIALAAIAAAdg");
	this.shape_18.setTransform(560.3,82.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(2,2,1).p("AAAjFIAAGL");
	this.shape_19.setTransform(598.7,59.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#163217").s().p("AgJDGIAAmLIATAAIAAAdIAAE8IAAAVIAAACIAAAFIgPAAIAAAWg");
	this.shape_20.setTransform(556.8,60.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BAB9BA").s().p("AgICeIAAk7IAQAAIAAE7g");
	this.shape_21.setTransform(558.9,59.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#0F2C0C").s().p("AmqALIAAgVIARAAIAAAAIMtAAIARAAIAGALIAAAKg");
	this.shape_22.setTransform(599,79.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#79807D").s().p("AmWANIAAgEIAAgDIAAgTIASAAIMIAAIATAAIAAABIAAAZg");
	this.shape_23.setTransform(598.7,77.1);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#959595").s().p("AAJCfIAAgBIgRAAIAAk8IARAAIAAADIAAE3IAAADg");
	this.shape_24.setTransform(638.6,59.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#133412").s().p("AAFC1IgPAAIAAgbIAAAAIAAgDIAAk3IAAgDIABAAIAAgdIAAAAIAUAAIAAGBg");
	this.shape_25.setTransform(640.6,60.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AmECuIAAk8IgSAAIgBAAIAAgdIAAgCIMvAAIAAACIAAAAIAAAdIgBAAIgTAAIAAE8g");
	this.shape_26.setTransform(598.7,58.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8DAC8A").s().p("AmtANIAAAAIAAgZIA2AAIIAAAIElAAIAAAYIgXAAIAAgBIsuAAIAAACg");
	this.shape_27.setTransform(598.8,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 5
	this.instance_1 = new lib.Watchbg("synched",0);
	this.instance_1.setTransform(454.3,85.2,0.23,0.23);

	this.instance_2 = new lib.Watchbg("synched",0);
	this.instance_2.setTransform(307.5,85.2,0.23,0.23);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	// Layer 4
	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#2A571B").s().p("AkaJGQgkgWgagYIkZgBQhQAAAAhQIAAwMQAAhQBQAAITkAFQBQAAAABQIAAQMQAABQhQAAIjVgBQgZAWghAVQiFBQi8AAQi5AAiEhQg");
	this.shape_28.setTransform(747.3,73.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#2A571B").s().p("AkbJGQgjgWgagYIkagBQhQAAAAhQIAAwMQAAhQBQAAITlAFQBPAAAABQIAAQMQAABQhPAAIjVgBQgZAWgiAVQiEBQi7AAQi6AAiFhQg");
	this.shape_29.setTransform(599.3,73.9);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#2A571B").s().p("AkbJGQgjgWgagYIkagBQhQAAAAhQIAAwMQAAhQBQAAITlAFQBQAAAABQIAAQMQAABQhQAAIjVgBQgZAWghAVQiFBQi8AAQi5AAiFhQg");
	this.shape_30.setTransform(451.8,73.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#2A571B").s().p("AkbJGQgjgWgagYIkZgBQhRAAAAhQIAAwMQAAhQBRAAITjAFQBQAAAABQIAAQMQAABQhQAAIjUgBQgZAWgiAVQiEBQi7AAQi6AAiFhQg");
	this.shape_31.setTransform(303.8,73.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28}]}).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhP/A/IMAAAh+PMCf/AAAMAAAB+Pg");
	mask.setTransform(512,404);

	// Layer 1
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E30202").s().p("A3hGcIAAiHMAhCAAAIAACHgApgkVIAAiGMAhDAAAIAACGg");
	this.shape_32.setTransform(234.6,302.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#D6D6D6").s().p("AgMCLIAAkUIAZAAIAAEUg");
	this.shape_33.setTransform(297.9,316.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D6D6D6").s().p("AgMCLIAAkUIAZAAIAAEUg");
	this.shape_34.setTransform(389.3,288.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#D6D6D6").s().p("AgMCLIAAkUIAZAAIAAEUg");
	this.shape_35.setTransform(79.2,316.6);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#D6D6D6").s().p("AgMCLIAAkUIAZAAIAAEUg");
	this.shape_36.setTransform(170.6,288.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#D6D6D6").s().p("EAspAT6IAAgZIBEABQIDAAFsluQFtlugBoGQABoEltluQlsluoDAAMhvPAACIAAgbMBvQgABQIOAAF0F1QF0F2gBIPQABIQl0F2Ql0F1oOAAIhFgBg");
	this.shape_37.setTransform(421.5,428.8);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#404040").s().p("EAqkAYDIAAotQAiACAjAAQGWAAEgkgQEekgABmYQgBmWkekgQkgkgmWAAMhvQAAAIAAkJIAAkkMBvRAABQJ8AAHBHCQHBHEABJ8QgBJ+nBHEQnBHCp8AAIhGgBg");
	this.shape_38.setTransform(434.8,428.9);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_39.setTransform(949.7,454.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#372511").s().p("AgKBPQgGgDgFgHQAKgNAEgSQACgGABgHIADgDIAEgLQACgHAAgEQABgIgEgHIgDgJIgCgLQgDgOgHgOIgFgJQAEgEAEgBQAHgDADAEQAIAGAGAPQAIAUAAAhQAAAggIAaQgGAPgIAGQgBADgEAAIgFgBg");
	this.shape_40.setTransform(953.9,446.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgVAiQgFgCgDgEQgEgGACgJIACgLQAAgFgCgEQgEgMAHgIIABgBIADgDQAGgDAKgBQAIgBAGACQAIACAGAFIAEAEIAFAJQAEAHAAAHQAAAFgCAHIgHALIgDADQgJAJgMABIgDAAQgMAAgGgCg");
	this.shape_41.setTransform(951.1,446.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgCIABgCQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAIAEAEQAEACADABQADAGgEAFIgHgLg");
	this.shape_42.setTransform(944.6,445.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#5BB1B0").s().p("AASBQQgNgGgOgWIgNgSQgHgKAAgFQgBgHAHgDIAGgBIAFABQAEABAEAEIAEADIAFAIQACAeAKAQQAEAJAFADIAAAAQgDAAgFgDgAgXgMIgFgFQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgEADgFQAGgLAKgOQAOgUAQgGQAFgCAEAAQgLAGgJAdQgDAJgBAJIgKAKIgLAJQgDAAgFgCg");
	this.shape_43.setTransform(947,446.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#6BD3D2").s().p("AgGBTIgBAAIgBAAQgFgDgEgJQgKgQgCgeIAGAEQADAEAFACQAHADAOgBQAMgBAJgJQAAAHgDAGQgEASgKANQgDADgGAFQgFAEgCAAIAAAAgAAagaQgGgFgIgCQgIgCgHABQgJABgHADIgDADIgBABIgGAEIABgGQACgKADgJQAIgcALgHIADAAIADACQAHAEAEAGIAGAJQAGAOADAOIACALIgEgEg");
	this.shape_44.setTransform(950.6,446.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#EEC09E").s().p("AAfAYIgHgHQgEgHAAgIIgDAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgEgBALgBIACgMQADgFAFgEIAGgEQgGAIADAMQACAEAAAFIgCALQgCAJAEAGIgFgEgAgEASIgRgHQgJgEgEgEIgCgDIAAAAIANAEQgMgFgBgEIAAgCIACgBIAGAEQABAAABABQABAAAAABQABAAAAAAQAAAAAAABIACAAIgBgBIgHgFQgKgKAIABIAKAHIAGAEQgLgOgBgEQAAgDALAJIAKAIQAEADgKgNIAAgCIABgBQADgBAEAFIAFAIIAHALIAFAHIgFgBIgGABQgFADABAHIgBAAg");
	this.shape_45.setTransform(944.4,446.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_46.setTransform(949.7,529.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EEC09E").s().p("AAfAZIgHgIQgEgGAAgJIgDAAIgDgCQgEgBALgBQABgHABgFQADgFAFgEIAGgEQgGAIADAMQACAEAAAFIgCALQgCAJAEAGIgFgDgAgEARIgRgGQgJgEgEgEIgCgDIAAAAIANAEQgMgFgBgFIAAgBIACgBIAGAEIAEADIACAAIgBgBIgHgFQgKgLAIACIAKAHIAGAEQgLgOgBgEQAAgDALAJIAKAIQAEADgKgMIAAgCIABgCQADgBAEAFIAFAIIAHALIAFAHQgCgBgDAAQgEAAgCABQgFADABAHIgBgBg");
	this.shape_47.setTransform(944.4,521.1);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E18F59").s().p("AgBAAIgGgIIABgBIABgBQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAABIAEAEQAEADADAAQADAGgEAFIgHgLg");
	this.shape_48.setTransform(944.6,520.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4A7328").s().p("AASBQQgNgHgOgVIgNgSQgHgKAAgFQgBgHAHgDQADgCADAAQADAAACACQAEABAEAEIAEADIAFAIQACAeAKAQQAEAIAFADIAAABQgDAAgFgDgAgXgNIgFgEQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgEADgFIAQgaQAOgTAQgGQAFgCAEAAQgLAGgJAcQgDAJgBAKIgKAKIgLAJQgDAAgFgDg");
	this.shape_49.setTransform(947,521.1);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgVAiQgFgCgDgEQgEgFACgKIACgLQAAgFgCgEQgEgLAHgJIABgBIADgCQAGgEAKgBQAIgBAGACQAIACAGAGIAEAEIAFAIQAEAIAAAGQAAAFgCAHIgHALIgDADQgJAKgMAAIgFAAQgKAAgGgCg");
	this.shape_50.setTransform(951.1,521.1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#609634").s().p("AgGBTIgBgBIgBAAQgFgCgEgJQgKgQgCgeIAGAEQADAEAFACQAHADAOgBQAMgBAJgJQAAAHgDAGQgEARgKAOQgDADgGAEQgFAFgCAAIAAAAgAAagaQgGgFgIgCQgIgDgHACQgJAAgHAEIgDADIgBABIgGAEIABgGQACgKADgKQAIgbALgHQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIADACQAHAEAEAGIAGAJQAGANADAPIACALIgEgEg");
	this.shape_51.setTransform(950.6,521);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#372511").s().p("AgKBOQgGgCgFgHQAKgOAEgRQACgGABgHIADgDIAEgMQACgGAAgEQABgIgEgHIgDgJIgCgLQgDgPgHgNIgFgJQAEgEAEgBQAHgEADAFQAIAFAGAPQAIAVAAAhQAAAggIAZQgGAQgIAFQgBAEgEAAIgFgCg");
	this.shape_52.setTransform(953.9,521.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#EEC09E").s().p("AAeAYQgDgDgDgEQgDgGgBgJIgCgBIgEgBQgEgBAKgBQABgHADgFQACgFAFgDIAGgFQgGAJAEAKQACAFgBAEIgCAMQgBAKADAFIgGgEgAgEARIgRgGQgJgEgEgEIgCgDIABAAIAMAEQgMgFgBgFIABgCIABAAIAGADIAEADIACABIgBgBIgHgGQgKgJAHABIALAHIAHAEQgMgOgBgDQAAgEALAIIAKAJQAEACgKgLIAAgCIABgCQACgCAFAGIAFAIIAIALIAEAHIgFgBQgDAAgDABQgFADABAHIgBgBg");
	this.shape_53.setTransform(944.4,409.1);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgCIABgCQAAABAAAAQAAABAAAAQAAABAAAAQABABAAAAQACACACACQAEADADAAQADAHgEAFIgHgMg");
	this.shape_54.setTransform(944.6,408);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#E64A00").s().p("AASBQQgNgGgOgVIgNgTQgHgKAAgFQgBgHAHgEQADgBADABIAFAAIAIAFIAEAEQABAFADACQADAfAJAQQAFAIAFAEIAAABIgIgEgAgXgNQgDgCgCgCQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIADgIQAGgLALgOQAOgUAQgHIAJgCQgMAIgIAbIgFAUQgEADgFAGIgLAJQgDABgFgEg");
	this.shape_55.setTransform(947,409);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EC672C").s().p("AgGBTIgCgBQgFgDgEgIQgJgQgDgfIAGAEQACAEAGADQAHADAOgBQAMgBAJgKIgCAOQgEARgLANQgCADgIAFQgEAGgCAAIAAgBgAAagaQgGgFgIgCQgIgDgHABQgJABgGAEIgDACIgCACIgGAEIABgGIAFgUQAHgbAMgIIADABIADACQAHADAFAHIAFAJQAGANADAPIACALIgEgEg");
	this.shape_56.setTransform(950.5,409);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#41210C").s().p("AgUAiQgGgCgDgEQgDgFABgKIACgMQABgEgCgFQgEgKAGgJIABgBIADgDQAGgDAKgCQAIAAAHACQAIACAGAGIAEAEQADADACAFQADAHAAAHQAAAFgDAGQgCAHgDAFIgDADQgJAKgNAAIgFABQgKAAgFgDg");
	this.shape_57.setTransform(951.1,409.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#372511").s().p("AgLBOQgFgCgFgIQAKgNAEgRIADgNIADgDQABgFADgHQADgGAAgEQgBgIgDgHQgCgFgBgDIgCgMQgDgOgGgNIgGgKQADgDAEgCQAIgDADAFQAIAFAGAOQAHAVABAhQAAAhgIAYQgGARgIAFQgBADgEAAIgGgCg");
	this.shape_58.setTransform(953.9,409.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E18F59").s().p("AgGAKIgBgCIAGgIIAHgKQAEAFgDAGQgDAAgEADIgEAEQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAAAIgBgBg");
	this.shape_59.setTransform(944.6,316.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EEC09E").s().p("AAfAYQgFgEgCgFQgDgEgBgIQgKgCAEgBIAEAAIACgBQABgJADgGIAGgHIAGgEQgDAFABAKIACAMQABADgCAGQgEAKAGAJIgGgEgAgcAYQABgDAMgPQAAgBgHAGQgJAGgCAAQgHACAKgKIAHgGIABgBIgCABIgEACIgGAEIgBAAIgBgCQABgEAMgGIgMADIgBAAIACgCQAEgEAJgEIARgGIABgBQgBAHAFADQADABADAAIAFgBIgEAHIgIALIgFAIQgFAGgCgCIgBgCIAAgBQAKgNgEADIgKAJQgHAGgDAAIgBgBg");
	this.shape_60.setTransform(944.4,315.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#393939").s().p("AAVBRQgQgFgOgVQgLgNgGgMIgDgJQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBIAFgEQAFgDADAAIALAJIAJAKIAFATQAIAbAMAHQgFAAgEgCgAgXgIQgHgCABgHQAAgGAHgKQAEgHAJgLQAOgVANgHQAEgDAEAAIAAAAQgFAEgFAIQgJARgDAeIgEAHIgEAEQgEADgEABIgFACQgDAAgDgCg");
	this.shape_61.setTransform(947,315.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#424242").s().p("AgEBTQgMgHgHgbIgFgTIgBgHIAGAEIACACIADACQAGAEAJABQAHABAIgCQAIgDAGgFIAEgEIgCAMQgDAOgGANIgFAKQgFAGgHADIgDACgAgRhGQAEgIAFgEIACAAQACgBAEAFQAIAGACADQALANAEARIACAOQgJgKgMAAQgOgBgHADQgGACgCAEIgGAEQADgeAJgRg");
	this.shape_62.setTransform(950.5,315.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFF6CD").s().p("AgIAkQgKgBgGgEIgDgCIgBgCQgGgIAEgLQACgFgBgEIgCgLQgBgKADgFQADgEAGgCQAHgDANABQANAAAJAKIADACQADAGACAGQADAGAAAFQAAAIgDAHIgFAIIgEAEQgGAFgIADIgKABIgFAAg");
	this.shape_63.setTransform(951.1,315.9);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#372511").s().p("AgLBOQgEgBgDgEIAGgKQAGgMADgPIACgLIADgJQADgHABgJQAAgDgDgGQgDgHgBgFIgDgDIgDgNQgEgRgKgNQAFgIAFgCQAIgEADAFQAIAFAGARQAIAYAAAhQgBAhgHAVQgGAPgIAFQgBADgDAAIgHgCg");
	this.shape_64.setTransform(953.9,315.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#372511").s().p("AgLBOQgFgDgFgHQAKgNAEgRIADgNIADgDQABgFADgHQADgGAAgEQgBgIgDgIIgDgIIgCgLQgDgPgGgNIgGgJQADgEAEgCQAIgCADAEQAIAFAGAPQAHAVABAhQAAAhgIAYQgGAQgIAGQgBADgEAAIgGgCg");
	this.shape_65.setTransform(953.9,297.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgUAiQgGgCgDgEQgDgFABgJIACgMQABgEgCgGQgEgKAGgJIABgBIADgDQAGgEAKAAQAIgBAHACQAIADAGAFIAEADIAFAJQADAHAAAHQAAAGgDAGQgCAGgDAFIgDADQgJAKgNAAIgGAAQgJAAgFgCg");
	this.shape_66.setTransform(951.1,297.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBQAAgBAAAAQAAgBAAAAQAAAAABAAQAAgBAAAAQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABIAEAEQAEADADAAQADAGgEAFIgHgLg");
	this.shape_67.setTransform(944.6,296.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#447BCD").s().p("AASBRQgNgIgOgUQgJgMgEgHQgHgKAAgFQgBgIAHgCQADgCADAAIAFACIAIAEIAEAEIAEAIQADAdAJARQAFAIAFAEIAAAAIgIgCgAgXgNIgFgEQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIADgJQAGgMALgNQAOgUAQgGIAJgCQgMAHgIAbIgFATIgJAKIgLAJQgDAAgFgDg");
	this.shape_68.setTransform(947,297.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#628DD1").s().p("AgGBTIgCAAQgFgEgEgIQgJgRgDgdIAGAEQACAEAGACQAHACAOgBQAMAAAJgJIgCANQgEARgLANIgKAJQgDAEgDAAIAAAAgAAagaQgGgFgIgCQgIgCgHAAQgJABgGAEIgDACIgCACIgGAEIABgHIAFgTQAHgbAMgHIADAAIADACQAHAEAFAGIAFAJQAGANADAPIACALIgEgEg");
	this.shape_69.setTransform(950.5,297.3);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#EEC09E").s().p("AAeAYIgGgIQgDgFgBgJIgCAAIgEgCQgEgBAKgBQABgIADgEQACgFAFgEIAGgEQgGAIAEALQACAFgBAFIgCALQgBAKADAFIgGgEgAgEARIgRgFQgJgGgEgDIgCgDIABAAQAAAAAMAEQgMgGgBgEIABgCIABAAIAGAEIAEACQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIgBgBIgHgGQgKgKAHADQACgBAJAGIAHAFQgMgOgBgEQAAgDALAIIAKAJQAEADgKgNIAAgCIABgBQACgBAFAFIAFAIIAIALIAEAHIgFgCQgDABgDABQgFACABAIIgBgBg");
	this.shape_70.setTransform(944.4,297.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#372511").s().p("AgKBOQgGgCgFgHQAKgOAEgRQACgGABgHIADgDIAEgMQACgGAAgEQABgIgEgHIgDgJIgCgLQgDgPgHgNIgFgJQAEgEAEgBQAHgEADAFQAIAFAGAPQAIAVAAAhQAAAggIAZQgGAQgIAFQgBAEgEAAIgFgCg");
	this.shape_71.setTransform(953.9,334.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_72.setTransform(949.7,342.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgVAiQgFgCgDgEQgEgFACgKIACgLQAAgFgCgEQgEgLAHgJIABgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAGgEAKgBQAIgBAGACQAIACAGAGIAEAEIAFAIQAEAIAAAGQAAAFgCAHIgHALIgDADQgJAKgMAAIgFAAQgKAAgGgCg");
	this.shape_73.setTransform(951.1,334.6);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#EEC09E").s().p("AAfAYIgHgHQgEgHAAgHIgDgBIgDgCQgEgBALgBQABgIABgEQADgEAFgEIAGgFQgGAJADAKQACAFAAAFIgCALQgCAKAEAFIgFgEgAgEARIgRgGQgJgEgEgEIgCgDIAAAAIANAEQgMgFgBgEIAAgDIACAAIAGAEIAEADIACAAIgBgBIgHgGQgKgJAIABIAKAGIAGAFQgLgOgBgDQAAgEALAIIAKAIQAEAEgKgNIAAgBIABgCQADgBAEAFIAFAIIAHAKIAFAIQgCgBgDAAIgGABQgFADABAHIgBgBg");
	this.shape_74.setTransform(944.4,334.7);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgCIABgBQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAIAEAEQAEADADAAQADAGgEAFIgHgLg");
	this.shape_75.setTransform(944.6,333.6);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#48608E").s().p("AgGBTIgBgBIgBAAQgFgCgEgJQgKgQgCgeIAGAEQADAEAFACQAHADAOgBQAMgBAJgJQAAAHgDAGQgEARgKAOQgDADgGAEQgFAFgCAAIAAAAgAAagaQgGgFgIgCQgIgDgHACQgJAAgHAEQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBABIgBABIgGAEIABgGQACgKADgKQAIgbALgHQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIADACQAHADAEAHIAGAJQAGANADAPIACALIgEgEg");
	this.shape_76.setTransform(950.6,334.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#3A4D75").s().p("AASBQQgNgHgOgUIgNgTQgHgKAAgFQgBgHAHgDIAGgBQADAAACABQAEABAEADIAEAFIAFAHQACAdAKARQAEAJAFACIAAABQgDAAgFgDgAgXgNIgFgEQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgEADgGIAQgYQAOgUAQgGQAFgCAEAAQgLAGgJAcQgDAJgBAKIgKAKIgLAKQgDgBgFgDg");
	this.shape_77.setTransform(947,334.6);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAABQACADACABQAEADADAAQADAHgEAEIgHgLg");
	this.shape_78.setTransform(944.6,352.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EEC09E").s().p("AAeAYQgDgDgDgEQgDgGgBgJIgCAAIgEgCQgEAAAKgCQABgHADgFQACgFAFgDIAGgFQgGAJAEAKQACAGgBAEIgCALQgBAKADAFQgDgBgDgDgAgEARIgRgGQgJgEgEgEIgCgDIABAAIAMAEQgMgFgBgFIABgCIABAAIAGAEIAEACIACACIgBgCIgHgGQgKgJAHABIALAHQAHAFAAgBQgMgOgBgDQAAgEALAIIAKAJQAEADgKgMIAAgCIABgCQACgCAFAGIAFAIIAIALIAEAHIgFgBQgDAAgDABQgFADABAHIgBgBg");
	this.shape_79.setTransform(944.4,353.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#41210C").s().p("AgUAjQgGgDgDgEQgDgFABgKIACgLQABgEgCgGQgEgKAGgJIABgBIADgDQAGgDAKgBQAIgBAHADQAIACAGAFIAEAEIAFAIQADAIAAAGQAAAFgDAGQgCAHgDAFIgDADQgJAKgNABIgDAAQgMAAgFgCg");
	this.shape_80.setTransform(951.1,353.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EC672C").s().p("AgGBTIgCAAQgFgEgEgIQgJgQgDgfQACADAEABQACAEAGADQAHADAOgBQAMgBAJgKIgCAOQgEARgLANIgKAJQgEAEgCAAIAAAAgAAagaQgGgFgIgCQgIgDgHABQgJABgGAEIgDACIgCACIgGAEIABgGIAFgUQAHgbAMgHIADAAIADACQAHAEAFAGIAFAJQAGAOADAOIACALIgEgEg");
	this.shape_81.setTransform(950.5,353.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#E64A00").s().p("AASBRQgNgHgOgVIgNgTQgHgKAAgFQgBgIAHgCQADgCADABIAFABIAIAEIAEAEQABAFADACQADAfAJAQQAFAIAFAEIAAAAIgIgCgAgXgNQgDgBgCgDQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgJQAGgMALgNQAOgVAQgFIAJgCQgMAHgIAbIgFAUQgEACgFAIIgLAIQgDAAgFgDg");
	this.shape_82.setTransform(947,353.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#372511").s().p("AgLBOQgFgDgFgHQAKgNAEgRIADgOIADgCQABgFADgHQADgGAAgEQgBgIgDgIIgDgIIgCgLQgDgOgGgOIgGgJQADgEAEgCQAIgCADAEQAIAFAGAPQAHAVABAhQAAAggIAZQgGAQgIAGQgBACgDAAIgHgBg");
	this.shape_83.setTransform(953.9,353.4);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#372511").s().p("AgKBOQgEgBgEgEIAFgJQAHgNADgPIACgLIADgJQAEgHgBgJQAAgDgCgGIgEgMIgDgDQgBgHgCgFQgEgSgKgNQAFgIAGgCQAHgEADAGQAIAFAGAQQAIAZAAAgQAAAhgIAVQgGAPgIAFQgBADgDAAIgGgCg");
	this.shape_84.setTransform(953.9,390.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#E18F59").s().p("AgGAKIgBgBIAGgIIAHgLQAEAFgDAGIgHADIgEAEQAAABgBAAQAAABAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_85.setTransform(944.6,391.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgIAkQgKgBgGgEIgDgCIgBgBQgHgJAEgLQACgEAAgFIgCgLQgCgJAEgGQADgEAFgCQAHgDAOABQAMAAAJAKIADADIAHALQACAHAAAEQAAAIgEAHIgFAIIgEAEQgGAGgIACQgFABgDAAIgGAAg");
	this.shape_86.setTransform(951.1,390.4);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#EEC09E").s().p("AAfAXQgFgEgDgEQgBgFgBgHQgLgBAEgCIADgBIADgBQAAgIAEgGQACgEAFgDIAFgEQgEAGACAJIACALQAAAFgCAEQgDALAGAJQgEgCgCgDgAgcAXQABgDALgOIgGAEIgKAHQgIABAKgKIAHgFIABgBIgCAAIgEADIgGAEIgCgBIAAgCQABgEAMgFIgNADIAAAAIACgCQAEgEAJgEIARgHIABgBQgBAIAFACQACACAEAAQADAAACgCIgFAIIgHALIgFAIQgEAFgDgBIgBgCIAAgCQAKgMgEADIgKAIQgIAGgCAAIgBgBg");
	this.shape_87.setTransform(944.4,390.4);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#4A7328").s().p("AAVBRQgQgGgOgTIgQgaQgDgFgBgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAIAFgEIAIgDIALAJIAKAJQABALADAJQAJAbALAHQgEAAgFgCgAgXgIQgHgCABgIQAAgFAHgKIANgSQAOgWANgGQAFgDADAAIAAABQgFADgEAIQgKARgCAdQgEADgBAFIgEADQgEAEgEABQgCABgDABQgDgBgDgBg");
	this.shape_88.setTransform(947,390.4);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_89.setTransform(949.7,382.1);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#609634").s().p("AgEBTQgLgHgIgbQgDgKgCgKIgBgGQADADADACIABAAIADADQAHAEAJAAQAHACAIgDQAIgCAGgFIAEgEIgCALQgDAPgGANIgGAJQgEAGgHAEIgDACIgCAAIgBAAgAgRhGQAEgJAFgCIABAAIABgBQABgBAGAGQAGAEADAEQAKANAEASQADAFAAAHQgJgJgMgBQgOAAgHACQgFACgDAEIgGAEQACgeAKgQg");
	this.shape_90.setTransform(950.6,390.4);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAHgKQAEAFgDAGQgDAAgEADIgEAEQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQAAAAAAgBg");
	this.shape_91.setTransform(944.6,372.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EEC09E").s().p("AAfAYQgFgEgCgEQgDgFgBgIQgKgBAEgCIAEAAIACgBQABgIADgHIAGgHIAGgEQgDAGABAIIACANQABADgCAGQgEAKAGAJIgGgEgAgcAYQABgEAMgOIgHAFQgJAGgCAAQgHACAKgKIAHgGIABgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAABgBAAIgEADIgGADIgBAAIgBgCQABgEAMgGIgMADIgBAAIACgBQAEgFAJgEIARgGIABgBQgBAHAFADQADACADgBIAFgBIgEAHIgIALIgFAHQgFAHgCgBIgBgDIAAgBQAKgNgEADIgKAIQgIAHgCAAIgBgBg");
	this.shape_92.setTransform(944.4,371.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#447BCD").s().p("AAVBRQgQgGgOgUQgLgNgGgMIgDgJQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAIAFgEQAFgDADAAIALAJIAJAKIAFATQAIAbAMAHIgJgCgAgXgIQgHgCABgIQAAgFAHgKQAEgHAJgMQAOgUANgIIAIgCIAAAAQgFAEgFAIQgJARgDAdIgEAIIgEAEIgIAEIgFACQgDAAgDgCg");
	this.shape_93.setTransform(947,371.8);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#628DD1").s().p("AgEBTQgMgHgHgbIgFgTIgBgHIAGAEIACACIADACQAGAEAJABQAHAAAIgCQAIgCAGgFIAEgEIgCALQgDAPgGANIgFAJQgFAGgHAEIgDACgAgRhGQAEgIAFgEIACAAQACgBAEAFIAKAJQALANAEARIACANQgJgJgMAAQgOgBgHADQgGACgCADIgGAEQADgdAJgRg");
	this.shape_94.setTransform(950.5,371.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#372511").s().p("AgLBPQgEgCgDgEIAGgJQAGgNADgPIACgLIADgIQADgIABgIQAAgEgDgGQgDgHgBgFIgDgDIgDgNQgEgRgKgNQAFgHAFgDQAIgDADAEQAIAGAGAQQAIAZAAAgQgBAhgHAVQgGAPgIAFQgBADgEAAIgGgBg");
	this.shape_95.setTransform(953.9,371.6);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#000000").s().p("AgIAkQgKAAgGgEIgDgDIgBgBQgGgJAEgKQACgGgBgEIgCgMQgBgJADgFQADgEAGgCQAHgDANABQANAAAJAKIADADQADAFACAGQADAGAAAFQAAAIgDAHIgFAJIgEADQgGAFgIADQgHABgFAAIgDAAg");
	this.shape_96.setTransform(951.1,371.7);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_97.setTransform(949.7,436);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgCIABgBQAAAAAAABQAAAAAAABQAAAAAAABQABAAAAABIAEADQAEADADAAQADAHgEAEIgHgLg");
	this.shape_98.setTransform(944.6,426.7);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#000000").s().p("AgVAjQgFgCgDgEQgEgGACgKIACgLQAAgEgCgFQgEgLAHgJIABgBIADgCQAGgEAKgBQAIgBAGADQAIACAGAFIAEAEIAFAIQAEAIAAAGQAAAFgCAHIgHALIgDAEQgJAJgMAAIgGAAQgKAAgFgBg");
	this.shape_99.setTransform(951.1,427.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#EEC09E").s().p("AAfAYIgHgHQgEgHAAgIIgDAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgEgBALgBQABgIABgEQADgFAFgEIAGgEQgGAIADALQACAFAAAFIgCALQgCAJAEAGIgFgEgAgEASQgHgEgKgDQgJgEgEgEIgCgDIAAAAIANAEQgMgGgBgEIAAgCIACAAIAGAEIAEACIACABIgBgBIgHgGQgKgJAIABIAKAGIAGAFQgLgOgBgEQAAgDALAJIAKAHQAEAEgKgNIAAgCIABgBQADgBAEAFIAFAIIAHAKIAFAIQgCgBgDAAIgGABQgFADABAHIgBAAg");
	this.shape_100.setTransform(944.4,427.7);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#3A4D75").s().p("AASBRQgNgIgOgUIgNgTQgHgKAAgFQgBgHAHgDIAGgBQADAAACABIAIAEIAEAFIAFAHQACAdAKARQAEAJAFADIAAAAQgDAAgFgCgAgXgNIgFgDQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgEADgFQAGgMAKgOQAOgTAQgGQAFgCAEAAQgLAGgJAcQgDAKgBAJQgFAEgFAGIgLAJQgDAAgFgDg");
	this.shape_101.setTransform(947,427.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#48608E").s().p("AgGBTIgBAAIgBAAQgFgDgEgJQgKgQgCgeIAGAEQADAEAFACQAHADAOgBQAMgBAJgJQAAAHgDAGQgEARgKAOIgJAIQgFAEgCAAIAAAAgAAagaQgGgFgIgCQgIgDgHACQgJAAgHAEIgDADIgBABIgGAEIABgGQACgKADgJQAIgcALgHIADAAIADACQAHADAEAHIAGAJQAGAOADAOIACALIgEgEg");
	this.shape_102.setTransform(950.6,427.6);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#372511").s().p("AgKBPQgGgDgFgHQAKgOAEgRQACgGABgHIADgDIAEgLQACgHAAgEQABgIgEgHIgDgJIgCgLQgDgOgHgOIgFgJQAEgEAEgBQAHgDADAEQAIAFAGAPQAIAVAAAhQAAAggIAZQgGAQgIAGQgBADgEAAIgFgBg");
	this.shape_103.setTransform(953.9,427.8);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAAAQAAABAAAAQAAAAAAABQABAAAAABQACADACABQAEADADAAQADAHgEAEIgHgLg");
	this.shape_104.setTransform(944.6,501.1);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#EEC09E").s().p("AAeAYQgDgDgDgEQgDgGgBgJIgCgBIgEgBQgEAAAKgCQABgHADgFQACgFAFgDIAGgFQgGAJAEAKQACAGgBADIgCAMQgBAKADAFQgDgBgDgDgAgEARIgRgGQgJgEgEgEIgCgDIABAAIAMAEQgMgFgBgFIABgCIABAAIAGAEIAEACIACACIgBgCIgHgGQgKgJAHABIALAHQAHAFAAgBQgMgOgBgDQAAgEALAIIAKAJQAEADgKgMIAAgCIABgCQACgCAFAGIAFAIIAIALIAEAHIgFgBQgDAAgDABQgFADABAHIgBgBg");
	this.shape_105.setTransform(944.4,502.1);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#41210C").s().p("AgUAiQgGgCgDgEQgDgFABgKIACgMQABgDgCgGQgEgKAGgJIABgBIADgDQAGgDAKgBQAIgBAHADQAIACAGAFIAEAEIAFAIQADAIAAAGQAAAFgDAGQgCAHgDAFIgDADQgJAKgNAAIgFAAQgKAAgFgCg");
	this.shape_106.setTransform(951.1,502.1);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EC672C").s().p("AgGBTIgCAAQgFgEgEgIQgJgQgDgfQACADAEABQACAEAGADQAHADAOgBQAMgBAJgKIgCAOQgEARgLANQgCADgIAGQgEAEgCAAIAAAAgAAagaQgGgFgIgCQgIgDgHABQgJABgGAEIgDACIgCACIgGAEIABgGIAFgUQAHgbAMgHIADAAIADACQAHADAFAHIAFAJQAGAOADAOIACALIgEgEg");
	this.shape_107.setTransform(950.5,502.1);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E64A00").s().p("AASBRQgNgHgOgVIgNgTQgHgKAAgGQgBgHAHgCQADgCADABIAFABIAIAEIAEAEQABAFADACQADAfAJAQQAFAIAFAEIAAAAIgIgCgAgXgNQgDgBgCgDQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgJQAGgMALgNQAOgVAQgFIAJgCQgMAHgIAbIgFAUQgEACgFAIIgLAIQgDAAgFgDg");
	this.shape_108.setTransform(947,502.1);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#372511").s().p("AgLBOQgFgCgFgIQAKgNAEgRIADgNIADgDQABgFADgHQADgGAAgEQgBgHgDgIIgDgIIgCgLQgDgPgGgNIgGgJQADgEAEgCQAIgDADAFQAIAFAGAOQAHAWABAhQAAAggIAYQgGARgIAFQgBADgDAAIgHgCg");
	this.shape_109.setTransform(953.9,502.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#372511").s().p("AgLBOQgFgCgFgIQAKgNAEgRIADgNIADgDQABgFADgHQADgGAAgEQgBgIgDgHIgDgJIgCgLQgDgPgGgMIgGgKQADgEAEgBQAIgDADAEQAIAFAGAPQAHAVABAhQAAAhgIAYQgGARgIAFQgBADgEAAIgGgCg");
	this.shape_110.setTransform(953.9,483.6);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFF6CD").s().p("AgUAiQgGgCgDgEQgDgFABgKIACgLQABgEgCgFQgEgLAGgIIABgCIADgCQAGgEAKgBQAIgBAHACQAIADAGAFIAEADIAFAJQADAHAAAHQAAAGgDAGQgCAGgDAGIgDACQgJAKgNAAIgDAAQgMAAgFgCg");
	this.shape_111.setTransform(951.1,483.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgGgBgJIgCgBIgEgBQgEgBAKgCQABgHADgEQACgFAFgEIAGgEQgGAJAEAKQACAFgBAEIgCAMQgBAJADAGIgGgEgAgEARIgRgGQgJgEgEgEIgCgDIABAAIAMAEQgMgGgBgEIABgCQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAGADIAEADIACABIgBgBIgHgGQgKgKAHACQACAAAJAGIAHAFQgMgPgBgDQAAgDALAIIAKAJQAEACgKgMIAAgBIABgCQACgCAFAGIAFAIIAIALIAEAHIgFgBIgGABQgFADABAHIgBgBg");
	this.shape_112.setTransform(944.4,483.5);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgCIABgCQAAABAAAAQAAABAAAAQAAABAAAAQABAAAAABIAEAEQAEADADAAQADAGgEAGIgHgMg");
	this.shape_113.setTransform(944.6,482.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#393939").s().p("AASBQQgNgGgOgVQgJgMgEgHQgHgKAAgFQgBgIAHgCIAGgBIAFABIAIAEIAEAFIAEAGQADAfAJAQQAFAJAFADIAAABIgIgEgAgXgNIgFgEQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIADgIQAGgMALgNQAOgVAQgFQAEgDAFAAQgMAIgIAbIgFATIgJAKIgLAJQgDAAgFgDg");
	this.shape_114.setTransform(947,483.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#424242").s().p("AgGBTIgCgBQgFgDgEgIQgJgRgDgeIAGAEQACAEAGACQAHADAOgBQAMAAAJgKIgCANQgEASgLANQgCADgIAFQgEAGgCAAIAAgBgAAagaQgGgFgIgDQgIgCgHABQgJABgGAEIgDACIgCACIgGADIABgGIAFgTQAHgbAMgIIADAAIADACQAHAEAFAGIAFAKQAGANADAOIACALIgEgDg");
	this.shape_115.setTransform(950.5,483.5);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBQAAgBAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAQAAABAAAAQAAABAAAAQABAAAAABIAEAEQAEADADAAQADAGgEAFIgHgLg");
	this.shape_116.setTransform(944.6,463.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EEC09E").s().p("AAeAYIgGgIQgDgFgBgJIgCAAIgEgCQgEgBAKgCQABgGADgFQACgFAFgEIAGgEQgGAJAEALQACAEgBAFIgCALQgBAKADAFIgGgEgAgEASIgRgGQgJgFgEgEIgCgDIABAAQAAAAAMAEQgMgGgBgDIABgCQAAgBAAAAQAAAAAAAAQABAAAAAAQAAAAAAABIAGADIAEACQABAAAAABQAAAAAAAAQABAAAAAAQAAAAAAAAIgBgBIgHgFQgKgKAHACQACAAAJAFIAHAFQgMgOgBgEQAAgDALAIIAKAJQAEADgKgNIAAgCIABgBQACgCAFAGIAFAIIAIALIAEAHIgFgBIgGABQgFADABAHIgBAAg");
	this.shape_117.setTransform(944.4,464.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#447BCD").s().p("AASBRQgNgHgOgVQgJgMgEgHQgHgKAAgFQgBgIAHgCIAGgBIAFABIAIAEIAEAEIAEAIQADAdAJARQAFAIAFAEIAAAAIgIgCgAgXgNIgFgEQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIADgJQAGgMALgNQAOgUAQgGIAJgCQgMAHgIAbIgFATIgJAKIgLAJQgDAAgFgDg");
	this.shape_118.setTransform(947,464.8);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#628DD1").s().p("AgGBTIgCAAQgFgEgEgIQgJgRgDgdIAGAEQACAEAGACQAHACAOAAQAMAAAJgKIgCANQgEARgLANQgCAEgIAFQgDAEgDAAIAAAAgAAagZQgGgGgIgCQgIgCgHAAQgJABgGAEIgDADIgCABIgGAEIABgHIAFgTQAHgbAMgHIADAAIADACQAHAEAFAGIAFAKQAGAMADAPIACALIgEgDg");
	this.shape_119.setTransform(950.5,464.8);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgUAiQgGgCgDgEQgDgFABgJIACgMQABgEgCgFQgEgLAGgJIABgBIADgDQAGgEAKAAQAIgBAHACQAIADAGAFIAEADIAFAJQADAHAAAHQAAAGgDAGQgCAGgDAGIgDACQgJAKgNAAIgDAAQgMAAgFgCg");
	this.shape_120.setTransform(951.1,464.9);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#372511").s().p("AgLBOQgFgDgFgHQAKgNAEgRIADgNIADgDQABgFADgHQADgGAAgEQgBgIgDgIIgDgIIgCgLQgDgPgGgMIgGgKQADgEAEgCQAIgCADAEQAIAFAGAPQAHAVABAhQAAAhgIAYQgGARgIAFQgBADgEAAIgGgCg");
	this.shape_121.setTransform(953.9,465);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#E18F59").s().p("AgFAKIgCgBIAGgJIAHgKQAEAFgDAFIgHAEIgDAEQgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_122.setTransform(958.8,482);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#EEC09E").s().p("AAeAXQgEgEgDgEQgCgFAAgHQgKgBADgCIAEgBIACgBQABgIADgGQADgEADgDIAHgEQgFAGADAJIACALQAAAFgCAEQgFALAHAJQgEgCgDgDgAgcAXQABgDAMgOIgHAEIgKAHQgIABAKgKIAHgFIABgBIgCAAIgEADIgGAEIgBgBIgBgCQABgEAMgFIgMADIAAAAIABgCQAEgEAIgEIARgHIACAAQAAAHAEADIAGABQADAAACgCIgEAIIgIALIgFAIQgFAFgDgBIAAgCIAAgCQAKgMgEADIgKAIQgIAGgCAAIgBgBg");
	this.shape_123.setTransform(958.7,480.9);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#000000").s().p("AgIAkQgJgBgHgEQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAIgBgBQgHgJAEgLQACgEAAgFIgCgLQgCgJAEgGQADgEAFgCQAHgDAOABQAMAAAJAKIADADQAEAFADAGQACAHAAAEQAAAIgEAHIgFAIIgEAEQgGAGgIACQgFABgDAAIgGAAg");
	this.shape_124.setTransform(965.4,480.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#3A4D75").s().p("AAVBRQgQgFgOgVQgKgOgGgLQgDgFgBgEQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIAEgEIAIgEIALAKIAKAKQABAJADAKQAJAbALAHQgEAAgFgCgAgXgHQgGgEAAgGQAAgGAHgKIANgTQAPgVAMgGQAFgDADAAIAAABQgFACgEAJQgKARgCAdQgEAEgBAEIgEADQgEAEgEABQgCABgDAAIgGAAg");
	this.shape_125.setTransform(961.2,481);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_126.setTransform(963.9,472.7);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#48608E").s().p("AgEBTQgLgHgJgbQgCgKgBgJIgCgHQACADAEACIABAAQABABAAAAQAAABABAAQAAAAABAAQAAABABAAQAGAEAKAAQAGACAIgDQAIgCAGgFIAEgEIgCALQgDAPgHANIgEAJQgFAHgIADIgCACIgCAAIgBAAgAgRhGQAEgJAFgCIABAAIAAgBQACgBAGAGQAGAEADAEQAKANAFASQABAFABAHQgJgJgMgBQgOAAgHACQgGACgCAEIgGAEQADgeAJgQg");
	this.shape_127.setTransform(964.8,481);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#372511").s().p("AgKBOQgEgBgEgEIAFgJQAHgNADgPIACgLIADgJQAEgHgBgJQAAgDgCgGQgCgGgCgGIgDgDQgBgHgCgFQgEgSgKgNQAFgIAGgCQAHgEAEAGQAHAFAGAQQAIAZAAAgQAAAhgIAVQgGAPgHAFQgBADgEAAIgGgCg");
	this.shape_128.setTransform(968.1,480.8);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E18F59").s().p("AgFAKIgCgBIAGgIIAHgLQAEAFgDAGIgHADIgDAEQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_129.setTransform(958.8,372.6);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#000000").s().p("AgIAkQgJgBgHgEIgDgCIgBgBQgHgJAEgLQACgEAAgFIgCgLQgCgJAEgGQADgEAFgCQAHgDAOABQAMAAAJAKIADADQAEAFADAGQACAHAAAEQAAAIgEAHIgFAIIgEAEQgGAGgIACQgFABgDAAIgGAAg");
	this.shape_130.setTransform(965.4,371.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#609634").s().p("AgEBTQgLgHgJgcQgCgJgBgKIgCgHQACADAEACIABABIAEACQAGAEAKABQAGABAIgCQAIgCAGgGIAEgEIgCAMQgDAOgHANIgEAKQgFAGgIAEIgCACIgCAAIgBAAgAgRhHQAEgIAFgDIABAAIAAAAQACgBAGAFQAGAFADADQAKANAFASQABAFABAIQgJgKgMAAQgOgBgHADQgGACgCAEIgGAEQADgeAJgRg");
	this.shape_131.setTransform(964.8,371.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_132.setTransform(963.9,363.4);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#372511").s().p("AgKBOQgEgBgEgEIAFgJQAHgNADgPIACgLIADgJQAEgHgBgIQAAgEgCgGQgCgGgCgGIgDgDQgBgHgCgFQgEgSgKgNQAFgIAGgCQAHgEAEAGQAHAFAGAQQAIAZAAAgQAAAhgIAVQgGAPgHAFQgBADgEAAIgGgCg");
	this.shape_133.setTransform(968.1,371.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EEC09E").s().p("AAeAXQgEgEgDgEQgCgFAAgHQgKgBADgCQAAAAABAAQAAAAAAAAQABAAAAAAQABgBABAAIACgBQABgIADgGQADgEADgDIAHgEQgFAGADAJIACALQAAAFgCAEQgFALAHAJQgEgCgDgDgAgcAXQABgDAMgOIgHAEIgKAHQgIABAKgKIAHgFIABgBIgCAAIgEADIgGAEIgBgBIgBgCQABgEAMgFIgMADIAAAAIABgCQAEgEAIgEIARgHIACAAQAAAHAEACQADACADAAQADAAACgCIgEAIIgIALIgFAIQgFAFgDgBIAAgCIAAgCQAKgMgEADIgKAIQgIAGgCAAIgBgBg");
	this.shape_134.setTransform(958.7,371.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#4A7328").s().p("AAVBRQgQgGgOgUQgKgOgGgLQgDgGgBgEQAAAAAAAAQAAAAAAgBQABAAAAgBQAAAAABgBIAEgDIAIgEIALAJIAKAKQABAKADAJQAJAcALAHQgEAAgFgCgAgXgIQgGgDAAgHQAAgFAHgLIANgSQAPgVAMgGQAFgDADAAIAAABQgFACgEAIQgKARgCAeQgEADgBAEIgEAEQgEADgEACQgCABgDAAQgDAAgDgBg");
	this.shape_135.setTransform(961.2,371.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#000000").s().p("AgIAkQgKAAgGgEIgDgDIgBgBQgGgJAEgKQACgGgBgEIgCgMQgBgJADgFQADgEAGgCQAHgDANABQANAAAJAKIADADQAEAFACAGQACAGAAAFQAAAIgDAHIgFAJIgEADQgGAFgIADQgHABgFAAIgDAAg");
	this.shape_136.setTransform(965.3,517.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#628DD1").s().p("AgEBTQgLgHgIgbQgDgJgCgKIgBgHIAGAEIACACIADACQAGAEAJABQAHAAAIgCQAIgCAGgFIAEgEIgCALQgDAPgGANIgFAJQgFAGgHAEIgDACgAgRhGQAEgIAFgEIACAAQACgBAEAFIAKAJQALANAEARIACANQgJgJgMAAQgOgBgHACQgGACgCAEIgGAEQADgdAJgRg");
	this.shape_137.setTransform(964.8,517.4);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#372511").s().p("AgLBPQgDgCgDgEIAEgJQAHgNADgPIACgLIADgIQAEgIgBgIQAAgEgCgGQgCgHgCgFIgDgDIgCgNQgFgRgKgNQAFgHAFgDQAIgDAEAEQAHAGAFAQQAJAYAAAhQgBAhgIAVQgFAPgHAFQgCADgEAAIgGgBg");
	this.shape_138.setTransform(968.1,517.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#E18F59").s().p("AgGAKIgBgCIAGgHIAHgMQAEAGgDAGQgDAAgEADQgCACgBACQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIgBgCg");
	this.shape_139.setTransform(958.8,518.4);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#447BCD").s().p("AAVBRQgQgGgOgUQgLgNgFgMQgDgFgBgEQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQABgCADgCQAFgDADAAIALAJQAFAHAFADQABAKADAJQAIAbAMAHIgJgCgAgXgIQgGgCAAgIQAAgFAHgKQAEgHAJgMQAPgUAMgIIAIgCIAAAAQgFAEgFAIQgJARgDAdIgEAIIgEAEIgIAEIgFACQgDAAgDgCg");
	this.shape_140.setTransform(961.2,517.4);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#EEC09E").s().p("AAfAYQgFgEgCgEQgDgFgBgIQgKgCAEgBIAEAAIACgBQABgJADgFIAGgIIAGgEQgDAFABAJIACANQABADgCAGQgEALAGAIIgGgEgAgcAYQABgEAMgOIgHAFIgKAGQgIACAKgKIAHgGIABgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAIgEACIgGAEIgBAAIgBgCQACgEALgGQgLAEgBgBIgBAAIACgCQAEgDAJgGIARgFIABgBQAAAIAEACQADABADAAIAFgBIgEAHIgIALIgFAIQgFAFgCgBIgBgCIAAgBQAKgMgEACIgKAJQgIAGgCAAIgBgBg");
	this.shape_141.setTransform(958.6,517.3);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#41210C").s().p("AgIAlQgKgCgGgDIgDgCIgBgCQgGgIAEgLQACgFgBgFIgCgLQgBgKADgFQADgEAGgCQAHgDANAAQANACAJAJIADADQAEAFACAGQACAHAAAEQAAAIgDAHIgFAIIgEAFQgGAEgIACQgHADgGAAIgCAAg");
	this.shape_142.setTransform(965.3,462.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAHgKQAEAEgDAHQgDAAgEADQgCABgBADQgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_143.setTransform(958.8,463.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#EEC09E").s().p("AAfAXQgFgDgCgFQgDgFgBgHQgKgCAEgBIAEgBIACAAQABgJADgFQADgFADgDIAGgEQgDAFABAKIACALQABAFgCAFQgEALAGAIIgGgFgAgcAXQABgDAMgOIgHAEIgKAGQgIACAKgJIAHgGIABgBIgCABIgEACIgGAEIgBAAIgBgCQACgFALgFQgLAEgBgBIgBAAIACgCQAEgEAJgFIARgFIABgBQAAAIAEACQADABADAAIAFgBIgEAHIgIALIgFAIQgFAFgCgBIgBgBIAAgCQAKgMgEACIgKAJQgHAGgDAAQAAAAAAAAQAAAAAAgBQgBAAAAAAQAAAAAAgBg");
	this.shape_144.setTransform(958.6,462.7);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#372511").s().p("AgLBPQgDgCgDgEIAEgJQAHgOADgOIACgLIADgIQAEgIgBgIQAAgEgCgGQgCgHgCgFIgDgDIgCgNQgFgRgKgNQAFgHAFgDQAIgDAEAEQAHAGAFAQQAJAYAAAhQgBAhgIAVQgFAOgHAGQgCADgEAAIgGgBg");
	this.shape_145.setTransform(968.1,462.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#EC672C").s().p("AgXAxQgDgJgCgLIgBgGIAGAEIACACIADACQAGADAJACQAHAAAIgCQAIgCAGgFIAEgEIgCALQgDAOgGAOIgFAJQgFAGgHAEIgDACIgDAAQgLgHgIgbgAgRhGQAEgIAFgEIACAAQACgBAEAFIAKAJQALANAEARIACANQgJgJgMgBQgOgBgHADQgGACgCAEIgGAEQADgeAJgQg");
	this.shape_146.setTransform(964.8,462.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#E64A00").s().p("AAVBRQgQgGgOgUQgLgNgFgMQgDgFgBgEQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQABgDADgBQAFgDADAAIALAIQAFAIAFACQABALADAJQAIAbAMAHIgJgCgAgXgIQgGgCAAgIQAAgFAHgKQAEgHAJgMQAPgVAMgHIAIgCIAAAAQgFAEgFAIQgJAQgDAeQgDADgBAFIgEAEIgIAEIgFABIgCAAIgEgBg");
	this.shape_147.setTransform(961.2,462.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_148.setTransform(963.9,434.6);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#E18F59").s().p("AgBAAIgGgIIACgBIAAgBQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABIADAEIAHADQADAGgEAFIgHgLg");
	this.shape_149.setTransform(958.8,425.4);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EEC09E").s().p("AAeAYQgDgDgDgEQgDgGgBgIIgCgBQgBAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgDgBAKgBQAAgHACgFQADgEAEgEQADgDAEgCQgHAJAFALQACAEAAAFIgCALQgDAJAFAGIgHgEgAgFASIgRgHQgIgEgEgEIgBgDIAAAAIAMAEQgMgFgBgEIABgCIABgBIAGAEIAEADIACAAIgBgBIgHgFQgKgKAIABIAKAHIAHAEQgMgOgBgDQAAgEALAJIAKAIQAEADgKgMIAAgCIAAgCQADgBAFAFIAFAIIAIALIAEAIQgCgCgDAAQgDAAgDACQgEACAAAHIgCAAg");
	this.shape_150.setTransform(958.7,426.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgVAiQgFgCgDgEQgEgGACgJIACgLQAAgFgCgEQgEgLAHgJIABgBIADgCQAHgEAJgBQAIgBAGACQAIACAGAGIAEAEIAFAIQAEAHAAAHQAAAFgCAHQgDAGgEAFIgDADQgJAKgMAAIgDAAQgMAAgGgCg");
	this.shape_151.setTransform(965.4,426.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#609634").s().p("AgHBTIAAgBIgBAAQgFgCgEgJQgJgQgDgeIAGAEQACAEAGACQAHACAOAAQAMgBAJgJQgBAHgBAFQgFASgKANQgDAEgGAEQgEAFgDAAIgBAAgAAagaQgGgFgIgCQgIgDgGACQgKAAgGAEIgEADIgBAAQgEACgCADIACgHQABgJACgKQAJgbALgHQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIACACQAIAEAFAGIAEAJQAHANADAPIACALIgEgEg");
	this.shape_152.setTransform(964.8,426.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#372511").s().p("AgKBOQgGgCgFgIQAKgNAEgSQACgFABgHIADgDQACgGACgGQACgGAAgEQABgIgEgHIgDgJIgCgLQgDgPgHgNIgFgJQAEgEAEgBQAHgEAEAFQAHAFAGAPQAIAVAAAhQAAAggIAZQgGAQgHAFQgCAEgEAAIgFgCg");
	this.shape_153.setTransform(968.1,426.5);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#4A7328").s().p("AASBQQgMgGgPgVIgNgTQgHgKAAgFQAAgHAGgDQADgBADAAQADAAACABQAEABAEAEIAEAEQABAEAEADQACAeAKAQQAEAJAFACIAAABQgDAAgFgDgAgXgNIgEgEQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAAAAAgBQABgEADgFQAGgLAKgOQAOgUAQgGIAJgCQgLAHgJAbQgDAKgBAJIgKAKIgLAKIgIgEg");
	this.shape_154.setTransform(961.2,426.3);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_155.setTransform(963.9,507.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#E18F59").s().p("AgBAAIgGgIIACgBIAAgBQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABABIADAEQAEADADAAQADAGgEAFIgHgLg");
	this.shape_156.setTransform(958.8,498.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgHgBgIIgCAAIgEgCQgDgBAKgBQAAgIACgEQADgFAEgEIAHgEQgHAIAFALQACAFAAAFIgCALQgDAJAFAGIgHgEgAgFARIgRgGQgIgEgEgEIgBgDIAAAAIAMAEQgMgGgBgEIABgCIABAAIAGAEIAEACIACABIgBgBIgHgGQgKgKAIACIAKAGIAHAFQgMgOgBgEQAAgDALAIIAKAIQAEAEgKgNIAAgCIAAgBQADgBAFAFIAFAIIAIALIAEAHQgCgBgDAAQgDAAgDABQgEADAAAHIgCgBg");
	this.shape_157.setTransform(958.7,499.3);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AgVAiQgFgCgDgDQgEgGACgKIACgLQAAgEgCgFQgEgLAHgJIABgBIADgCQAHgEAJgBQAIgBAGACQAIACAGAGIAEAEIAFAIQAEAIAAAGQAAAFgCAHIgHALIgDAEQgJAJgMAAIgFAAQgKAAgGgCg");
	this.shape_158.setTransform(965.4,499.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#372511").s().p("AgKBOQgGgCgFgHQAKgOAEgRQACgGABgHIADgDIAEgLQACgHAAgEQABgIgEgHIgDgJIgCgLQgDgPgHgNIgFgJQAEgEAEgBQAHgEAEAFQAHAFAGAQQAIAUAAAhQAAAggIAZQgGAQgHAGQgCADgDAAIgGgCg");
	this.shape_159.setTransform(968.1,499.4);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#6BD3D2").s().p("AgHBTIAAgBIgBAAQgFgCgEgJQgJgQgDgeIAGAEQACAEAGACQAHADAOgBQAMgBAJgJQgBAHgBAGQgFARgKAOIgJAIQgFAEgCAAIgBAAgAAagaQgGgFgIgCQgIgDgGACQgKAAgGAEIgEADIgBABIgGAEIACgGQABgKACgKQAJgbALgHQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAABAAIACACQAIAEAFAGIAEAJQAHANADAPIACALIgEgEg");
	this.shape_160.setTransform(964.8,499.2);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#5BB1B0").s().p("AASBQQgMgGgPgVIgNgTQgHgKAAgFQAAgIAGgCQADgBADAAQADAAACABIAIAEIAEAFIAFAHQACAdAKARQAEAJAFACIAAABQgDAAgFgDgAgXgNIgEgEQgBAAAAgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQABgEADgGQAGgLAKgOQAOgTAQgGQAFgCAEAAQgLAGgJAcQgDAKgBAJIgKAKIgLAJQgDAAgFgDg");
	this.shape_161.setTransform(961.2,499.2);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgCIABgBQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAQABACACACQAEADADAAQADAGgEAFIgHgLg");
	this.shape_162.setTransform(958.8,407.1);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgHgBgIIgCgBIgEgBQgEgBAKgBQABgIADgFQACgEAFgEIAGgEQgGAJAEAKQACAGgBADIgCALQgBAKADAGIgGgEgAgEARIgRgGQgJgEgEgFIgCgCIABAAQABAAALAEQgLgGgCgEIABgCIABAAIAGADIAEADIACABIgBgBIgHgGQgKgJAIABIAKAGIAHAFQgMgOgBgEQAAgDALAJIAKAIQAEADgKgNIAAgBIABgDQACgBAFAHIAFAHIAIAKIAEAIIgFgBQgDgBgDACQgEADAAAHIgBgBg");
	this.shape_163.setTransform(958.6,408.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFF6CD").s().p("AgUAiQgGgCgDgEQgDgFABgKIACgLQABgEgCgGQgEgKAGgJIABgBIADgDQAGgEAKAAQAIgBAHACQAIADAGAFIAEADIAFAJQADAHAAAHQAAAGgCAGQgCAGgEAFIgDADQgJAKgNAAIgFAAQgKAAgFgCg");
	this.shape_164.setTransform(965.3,408.1);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#393939").s().p("AASBQQgMgHgPgVQgJgLgEgHQgHgKAAgFQAAgIAGgCQADgCADAAIAFACIAIAEIAEAEIAEAIQADAdAJARQAFAIAFAEIAAAAQgEAAgEgDgAgXgNQgDgCgBgCQgBAAAAgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQABgEADgFQAFgMALgNQAOgUAQgGQAEgCAFAAQgMAHgIAbQgDAJgBAKQgFADgFAHIgLAJQgDAAgFgDg");
	this.shape_165.setTransform(961.2,408.1);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#424242").s().p("AgGBTIgCAAQgFgEgEgIQgJgRgDgdIAGAEQACAEAGABQAHADAOgBQAMAAAJgJIgCANQgEARgLANIgKAJQgEAEgCAAIAAAAgAAagaQgGgFgIgCQgIgCgHAAQgJABgGAEIgDACIgCACIgGAEIABgHQACgKADgJQAIgbALgHIADAAIADACQAHAEAFAGIAFAJQAGANADAPIACALIgEgEg");
	this.shape_166.setTransform(964.8,408.1);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#372511").s().p("AgLBOQgFgDgFgHQAKgNAFgRIACgNIADgDQACgFACgHQACgGAAgEQABgIgEgIIgDgIIgCgLQgDgPgHgNIgEgJQADgEADgCQAIgCAEAEQAHAFAFAPQAIAVABAhQAAAhgJAYQgFAQgHAGQgCADgEAAIgGgCg");
	this.shape_167.setTransform(968.1,408.3);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#000000").s().p("AgUAiQgGgCgDgEQgDgFABgJIACgMQABgEgCgFQgEgLAGgIIABgCIADgCQAGgEAKgBQAIgBAHACQAIADAGAFIAEAEIAFAIQADAHAAAHQAAAGgCAGQgCAGgEAGIgDACQgJAKgNAAIgDAAQgMAAgFgCg");
	this.shape_168.setTransform(965.3,444.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#372511").s().p("AgLBOQgFgCgFgIQAKgNAFgRIACgNIADgDQACgFACgHQACgGAAgEQABgIgEgHIgDgJIgCgLQgDgPgHgMIgEgKQADgEADgBQAIgDAEAEQAHAFAFAPQAIAVABAhQAAAhgJAYQgFARgHAFQgBADgEAAIgHgCg");
	this.shape_169.setTransform(968.1,444.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABQABACACACQAEADADAAQADAGgEAFIgHgLg");
	this.shape_170.setTransform(958.8,443.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#447BCD").s().p("AASBRQgMgIgPgUQgJgMgEgHQgHgKAAgGQAAgHAGgCQADgCADAAIAFACQAEABAEADIAEAEIAEAHQADAeAJARQAFAIAFADIAAABIgIgCgAgXgNQgDgCgBgCQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAAAAAQABgEADgFQAFgMALgNQAOgVAQgGIAJgBQgMAHgIAbIgEATIgKAKIgLAJQgDAAgFgDg");
	this.shape_171.setTransform(961.2,444.5);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#628DD1").s().p("AgGBTIgCgBQgFgDgEgIQgJgRgDgeIAGAEQACAEAGACQAHADAOgBQAMAAAJgKIgCAOQgEARgLANQgCADgIAGQgEAEgCAAIAAAAgAAagaQgGgFgIgDQgIgCgHABQgJABgGAEIgDACIgCACIgGAEIABgHIAFgTQAIgbALgHIADAAIADABQAHAEAFAGIAFAKQAGANADAOIACAMIgEgEg");
	this.shape_172.setTransform(964.8,444.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgGgBgJIgCgBIgEgBQgEAAAKgCQABgIADgEQACgFAFgEIAGgEQgGAJAEAKQACAGgBADIgCAMQgBAKADAFIgGgEgAgEARIgRgGQgJgEgEgEIgCgDIABAAQABAAALAEQgLgGgCgEIABgCIABAAIAGAEIAEACQAAABABAAQAAAAAAAAQAAAAABAAQAAAAAAAAIgBgBIgHgGQgKgKAIACIAKAGQAHAGAAgBQgMgOgBgEQAAgDALAIIAKAJQAEADgKgNIAAgBIABgCQACgCAFAGIAFAIIAIALIAEAHIgFgBQgDAAgDABQgEADAAAHIgBgBg");
	this.shape_173.setTransform(958.6,444.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E18F59").s().p("AgFAKIgCgBIAGgIIAHgLQAEAFgDAGQgDAAgEADIgDAEQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_174.setTransform(958.8,299.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#372511").s().p("AgKBOQgEgBgEgEIAFgJQAHgNADgPIACgLIADgJQAEgHgBgJQAAgDgCgGQgCgGgCgGIgDgDQgBgHgCgGQgEgRgKgOQAFgHAGgCQAHgEAEAGQAHAFAGAQQAIAZAAAgQAAAhgIAUQgGAQgHAFQgCADgDAAIgGgCg");
	this.shape_175.setTransform(968.1,298.6);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#000000").s().p("AgIAkQgJgBgHgEIgDgCIgBgBQgHgJAEgLQACgEAAgFIgCgLQgCgKAEgFQADgEAFgCQAHgDAOABQAMAAAJAJIADAEQAEAFADAGQACAHAAAEQAAAHgEAIIgFAIIgEAEQgGAGgIACQgFABgDAAIgGAAg");
	this.shape_176.setTransform(965.4,298.8);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#6BD3D2").s().p("AgEBTQgLgHgJgbQgCgKgBgKIgCgGIAGAEIABABIAEADQAGAEAKAAQAGACAIgDQAIgCAGgFIAEgEIgCALQgDAPgHANIgEAJQgFAGgIAEIgCACIgCAAIgBAAgAgRhGQAEgJAFgCIABAAIAAgBQACgBAGAGIAJAHQAKAOAFARQABAGABAHQgJgJgMgBQgOgBgHADQgGACgCAEIgGAEQADgeAJgQg");
	this.shape_177.setTransform(964.8,298.8);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_178.setTransform(963.9,290.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#5BB1B0").s().p("AAVBRQgQgGgOgUQgKgOgGgLQgDgFgBgEQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAIAEgEQAFgDADgBIALAKIAKAJQABAKADAKQAJAbALAHQgEAAgFgCgAgXgIQgGgCAAgIQAAgFAHgKIANgTQAPgUAMgHQAFgDADAAIAAABQgFADgEAIQgKAQgCAeIgFAIIgEADIgIAFQgCACgDgBQgDABgDgCg");
	this.shape_179.setTransform(961.2,298.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#EEC09E").s().p("AAeAXQgEgDgDgFQgCgFAAgHQgKgBADgCIAEgBIACgBQABgIADgGIAGgHIAHgEQgFAGADAJIACALQAAAFgCAEQgFALAHAJIgHgFgAgcAXQABgDAMgPIgHAGIgKAGQgIABAKgKIAHgFIABgBIgCABIgEACIgGAEIgBgBIgBgCQABgDAMgGIgMAEIAAgBIABgCQAEgEAIgEIARgHIACgBQAAAIAEACQADACADAAQADAAACgCIgEAIIgIALIgFAIQgFAFgDgBIAAgBIAAgCQAKgNgEAEIgKAIQgIAGgCAAIgBgCg");
	this.shape_180.setTransform(958.7,298.8);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#000000").s().p("AgIAkQgJgBgHgDIgDgDIgBgBQgHgIAEgMQACgEAAgFIgCgLQgCgJAEgGQADgEAFgCQAHgDAOABQAMABAJAJIADADQAEAFADAGQACAHAAAEQAAAIgEAHIgFAJIgEAEQgGAFgIACQgFABgEAAIgFAAg");
	this.shape_181.setTransform(965.4,389.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#E18F59").s().p("AgFAJIgCgBIAGgIIAHgKQAEAFgDAFQgDABgEADIgDADQgBABAAAAQgBABAAAAQAAABAAAAQAAABAAAAg");
	this.shape_182.setTransform(958.8,390.9);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#EEC09E").s().p("AAeAYQgEgEgDgFIgCgMQgKgBADgCQAAAAABAAQAAAAAAAAQABAAAAAAQABgBABAAIACAAQABgIADgHIAGgHIAHgEQgFAGADAJIACALQAAAFgCAEQgFAMAHAIIgHgEgAgcAYQABgEAMgOIgHAEIgKAHQgIABAKgKIAHgFIABgBIgCAAQAAABgEACIgGAEIgBgBIgBgCQABgEAMgFIgMAEIAAgBIABgCQAEgEAIgEQALgDAGgEIACAAQAAAHAEADIAGABIAFgBIgEAHIgIALIgFAIQgFAFgDgBIAAgBIAAgCQAKgNgEADIgKAIQgIAHgCAAIgBgBg");
	this.shape_183.setTransform(958.7,389.8);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#372511").s().p("AgKBOQgEgBgEgEIAFgJQAHgOADgOIACgLIADgJQAEgHgBgJQAAgDgCgHQgCgGgCgFIgDgDQgBgHgCgGQgEgSgKgNQAFgHAGgDQAHgDAEAFQAHAGAGAPQAIAaAAAgQAAAhgIAVQgGAOgHAGQgCADgEAAIgFgCg");
	this.shape_184.setTransform(968.1,389.7);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_185.setTransform(963.9,381.6);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#3A4D75").s().p("AAVBRQgQgGgOgUQgKgNgGgMQgDgFgBgEQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIAEgDQAFgDADgBIALAJIAKALQABAJADAKQAJAcALAGQgEAAgFgCgAgXgIQgGgDAAgHQAAgFAHgKIANgTQAPgVAMgHQAFgCADAAIAAABQgFACgEAJQgKARgCAdIgFAHIgEAEQgEADgEACIgFABIgGgBg");
	this.shape_186.setTransform(961.2,389.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#48608E").s().p("AgEBTQgLgHgJgcQgCgJgBgKIgCgGIAGAEIABABIAEADQAGADAKABQAGABAIgCQAIgCAGgFIAEgEIgCALQgDAOgHAOIgEAJQgFAGgIAEIgCACIgCAAIgBAAgAgRhGQAEgJAFgDIABAAIAAAAQACgBAGAFQAGAFADADQAKANAFASQABAGABAHQgJgJgMgBQgOgBgHADQgGACgCAEIgGAEQADgeAJgQg");
	this.shape_187.setTransform(964.8,389.9);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#41210C").s().p("AgIAlQgKgCgGgDIgDgDIgBgBQgGgJAEgKQACgFgBgEIgCgMQgBgKADgFQADgEAGgCQAHgDANABQANAAAJAKIADADQAEAFACAHQACAGAAAEQAAAHgDAIQgCAFgDADIgEAEQgGAGgIACQgHACgGAAIgCAAg");
	this.shape_188.setTransform(965.3,316.9);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E18F59").s().p("AgGAKIgBgCIAGgIIAHgKQAEAEgDAHQgDAAgEADQgCACgBACQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIgBgBg");
	this.shape_189.setTransform(958.8,318);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#EEC09E").s().p("AAfAXQgFgDgCgFQgDgFgBgHQgKgBAEgCIAEAAIACgBQABgJADgGQADgEADgDQADgDADgBQgDAFABAKIACAMQABAEgCAFQgEAKAGAJIgGgFgAgcAXQABgDAMgOQAAgBgHAFIgKAHQgIABAKgJIAHgGIABgBIgCABIgEACIgGAEIgBAAIgBgCQACgFALgFQgLAEgBgBIgBAAIACgCQAEgEAJgEIARgGIABgBQAAAHAEADQADABADAAIAFgBIgEAHIgIALIgFAIQgFAGgCgCIgBgCIAAgCQAKgMgEADIgKAJQgHAGgDAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAgBg");
	this.shape_190.setTransform(958.6,316.9);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#E64A00").s().p("AAVBRQgQgGgOgUQgLgNgFgMQgDgGgBgDQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQABgDADgBQAFgEADAAIALAJQAFAIAFACQABALADAJQAIAbAMAIIgJgDgAgXgIQgGgDAAgHQAAgFAHgKQAEgHAJgMQAPgVAMgHIAIgCIAAAAQgFADgFAJQgJAQgDAeQgDADgBAEIgEAFIgIAEIgFABIgBAAIgFgBg");
	this.shape_191.setTransform(961.2,317);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#EC672C").s().p("AgXAxQgDgJgCgLIgBgGIAGAEIACACIADACQAGAEAJABQAHABAIgDQAIgCAGgFIAEgEIgCALQgDAPgGANIgFAJQgFAHgHADIgDACIgDABQgLgIgIgbgAgRhGQAEgIAFgDIACgBQACgBAEAGQAIAFACADQALANAEARIACAOQgJgKgMgBQgOgBgHADQgGADgCAEQgEABgCADQADgfAJgQg");
	this.shape_192.setTransform(964.8,317);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#372511").s().p("AgLBOQgDgCgDgEIAEgJQAHgNADgOIACgMQABgDACgFQAEgIgBgHQAAgEgCgGQgCgHgCgFIgDgDIgCgNQgFgRgKgNQAFgIAFgCQAIgEAEAFQAHAFAFARQAJAYAAAhQgBAhgIAVQgFAOgHAFQgCAEgEAAIgGgCg");
	this.shape_193.setTransform(968.1,316.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#E18F59").s().p("AgGAKIgBgCIAGgIIAHgLQAEAGgDAGQgDAAgEADQgCACgBACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABIgBgCg");
	this.shape_194.setTransform(958.8,336.2);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#372511").s().p("AgLBPQgDgCgDgEIAEgKQAHgMADgPIACgLIADgIQAEgIgBgIQAAgEgCgGQgCgHgCgFIgDgDIgCgNQgFgRgKgNQAFgIAFgCQAIgDAEAEQAHAFAFARQAJAYAAAhQgBAhgIAVQgFAPgHAFQgCADgEAAIgGgBg");
	this.shape_195.setTransform(968.1,335);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#EEC09E").s().p("AAfAYQgFgEgCgEQgDgGgBgHQgKgBAEgCIAEAAIACgBQABgJADgGIAGgHIAGgEQgDAGABAJIACAMQABAEgCAFQgEALAGAIIgGgEgAgcAYQABgDAMgPIgHAEIgKAHQgIACAKgKIAHgGIABgBIgCABIgEADIgGADQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBgCQACgEALgGQgLAEgBgBIgBAAIACgCQAEgEAJgEIARgGIABgBQAAAHAEADIAGABIAFgBIgEAHIgIAKIgFAIQgFAGgCgBIgBgCIAAgBQAKgNgEADIgKAIQgIAHgCAAIgBgBg");
	this.shape_196.setTransform(958.6,335.2);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFF6CD").s().p("AgIAkQgKAAgGgEIgDgDIgBgBQgGgJAEgLQACgFgBgEIgCgLQgBgKADgFQADgEAGgCQAHgDANABQANAAAJAKIADACQAEAGACAGQACAGAAAFQAAAIgDAHIgFAJIgEADQgGAFgIADQgHABgFAAIgDAAg");
	this.shape_197.setTransform(965.3,335.2);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#393939").s().p("AAVBRQgQgGgOgUQgLgNgFgMIgEgJQAAAAAAgBQAAAAAAAAQABgBAAAAQAAgBABAAQABgCADgCQAFgDADAAIALAJIAKAKQABAKADAJQAIAbAMAHQgFAAgEgCgAgXgIQgGgDAAgHQAAgFAHgKQAEgHAJgLQAPgWAMgGQAEgDAEAAIAAAAQgFAEgFAIQgJARgDAdIgEAIIgEAEIgIAEIgFABIgGgBg");
	this.shape_198.setTransform(961.2,335.2);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#424242").s().p("AgEBTQgLgHgIgbQgDgJgCgKIgBgHIAGAEIACABIADADQAGAEAJABQAHAAAIgCQAIgCAGgGIAEgDIgCALQgDAPgGAMIgFAKQgFAGgHAEIgDACgAgRhGQAEgIAFgEIACAAQACgBAEAFQAIAFACAEQALANAEARIACANQgJgKgMAAQgOAAgHACQgGACgCAEIgGAEQADgdAJgRg");
	this.shape_199.setTransform(964.8,335.2);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAHgKQAEAFgDAGQgDAAgEADQgCACgBACQgBABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_200.setTransform(958.8,354.4);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#EEC09E").s().p("AAfAYQgFgEgCgEQgDgFgBgHQgKgDAEgBIAEAAIACgBQABgIADgHIAGgHIAGgEQgDAFABAKIACAMQABADgCAGQgEAKAGAJIgGgEgAgcAYQABgEAMgOIgHAFIgKAGQgIACAKgKIAHgGIABgBQAAAAAAAAQgBAAAAAAQAAAAAAAAQgBABAAAAIgEADIgGADIgBAAIgBgCQACgEALgGQgLAEgBgBIgBAAIACgBQAEgFAJgEIARgGIABgBQAAAHAEADQADABADAAIAFgBIgEAHIgIALIgFAIQgFAFgCAAIgBgCIAAgCQAKgMgEACIgKAJQgIAGgCAAIgBgBg");
	this.shape_201.setTransform(958.6,353.4);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#000000").s().p("AgIAkQgKAAgGgEIgDgDIgBgBQgGgJAEgKQACgGgBgEIgCgLQgBgKADgFQADgEAGgCQAHgDANABQANAAAJAKIADADQAEAFACAGQACAGAAAFQAAAIgDAHIgFAJIgEADQgGAFgIADIgLABIgEAAg");
	this.shape_202.setTransform(965.3,353.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#372511").s().p("AgLBPQgDgCgDgEIAEgJQAHgNADgOIACgMIADgIQAEgIgBgIQAAgEgCgGQgCgHgCgFIgDgDIgCgNQgFgRgKgNQAFgHAFgDQAIgDAEAEQAHAGAFAQQAJAZAAAhQgBAhgIAUQgFAPgHAFQgCACgEAAIgGAAg");
	this.shape_203.setTransform(968.1,353.2);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#447BCD").s().p("AAVBRQgQgGgOgUQgLgNgFgMQgDgFgBgEQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQABgCADgCQAFgDADAAIALAJQAFAHAFADQABAKADAJQAIAbAMAHIgJgCgAgXgIQgGgCAAgIQAAgFAHgKQAEgHAJgMQAPgUAMgIIAIgCIAAAAQgFAEgFAIQgJARgDAdIgEAIIgEAEIgIAEIgFACQgDAAgDgCg");
	this.shape_204.setTransform(961.2,353.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#628DD1").s().p("AgEBTQgLgHgIgbQgDgJgCgKIgBgHIAGAEIACACIADACQAGAEAJABQAHAAAIgBQAIgDAGgFIAEgEIgCAMQgDAOgGANIgFAJQgFAGgHAEIgDACgAgRhGQAEgIAFgEIACAAQACgBAEAFIAKAJQALANAEARIACANQgJgJgMAAQgOgBgHADQgGACgCADIgGAEQADgdAJgRg");
	this.shape_205.setTransform(964.8,353.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_206.setTransform(992.8,477.9);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#372511").s().p("AgKBOQgEgBgEgEIAFgJQAHgOADgOIACgLIADgJQAEgHgBgJQAAgDgCgHQgCgGgCgFIgDgDIgDgNQgEgRgKgOQAFgHAGgDQAHgDAEAFQAHAGAGAQQAIAZAAAgQAAAhgIAVQgGAPgHAFQgCADgDAAIgGgCg");
	this.shape_207.setTransform(997,486.1);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#E18F59").s().p("AgFAKIgCgBIAGgIIAHgLQAEAEgDAHQgDAAgEACIgDAFQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAg");
	this.shape_208.setTransform(987.7,487.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#EEC09E").s().p("AAeAYQgEgEgDgFQgCgEAAgIQgKgBADgCQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIADAAQABgIADgHIAGgHIAGgEQgEAGACAJIACALQAAAFgCAFQgEALAHAIIgHgEgAgcAYQAAgEAMgOIgGAFIgKAGQgJABALgJIAGgGIACgBIgCABIgEACIgGAEIgCAAIAAgCQABgEALgGIgMAEIAAgBIACgCQAEgEAIgEQALgDAGgEIACAAQgBAHAFADIAGABQADAAACgBIgFAHIgHALIgFAIQgFAFgCgBQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgCQAKgNgEAEIgKAHQgIAHgCAAIgBgBg");
	this.shape_209.setTransform(987.6,486.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#48608E").s().p("AgDBTQgMgHgJgcIgDgTIgCgGIAHAEIABABIADADQAGAEAKAAQAGACAIgDQAIgCAGgFIAEgEIgCALQgCAOgIAOIgEAJQgFAGgIAEIgCACIgCAAIAAAAgAgRhGQAEgJAFgDIABAAIAAAAQACgBAGAFIAJAIQALAOAEARIACANQgJgJgMgBQgOgBgHADQgFACgDAEIgGAEQADgeAJgQg");
	this.shape_210.setTransform(993.7,486.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AgIAkQgJAAgHgEIgDgDIgBgBQgHgIAEgLQACgFAAgFIgCgLQgCgJAEgGQADgEAFgCQAIgDANABQAMABAKAJIACADQAEAFADAGQACAHAAAEQAAAIgEAHIgFAJIgEAEQgGAFgIACQgFACgDAAIgGgBg");
	this.shape_211.setTransform(994.3,486.2);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#3A4D75").s().p("AAVBRQgQgGgOgTQgKgOgGgMQgDgFgBgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAEgFQAFgCADAAIALAJIAKAJIAEATQAJAcALAHQgEAAgFgCgAgXgHQgGgDAAgIQAAgFAHgKIANgSQAPgWAMgGQAFgDADAAIAAABQgFADgEAIQgJARgDAdIgFAIIgEADIgIAFQgCABgDABIgGgBg");
	this.shape_212.setTransform(990.1,486.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAHgKQAEAEgDAHQgDAAgEADQgCABgBADQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIgBgDg");
	this.shape_213.setTransform(987.7,468.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#EEC09E").s().p("AAfAXQgFgDgCgFQgDgFgBgHQgKgCAEgBIAEgBIACAAQABgJADgFQADgFADgDIAGgEQgDAFABAKIACALQABAEgCAGQgEAKAGAJIgGgFgAgcAXQABgDAMgOIgHAEIgKAGQgIACAKgJIAHgGIABgBIgCABIgEACIgGAEQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBgDQACgEALgFQgLAEgBgBIgBAAIACgCQAEgEAJgFIARgFIABgBQAAAHAEADQADABADAAIAFgBIgEAHIgIALIgFAIQgFAFgCgBIgBgCIAAgBQAKgMgEACIgKAJQgHAFgDAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_214.setTransform(987.5,467.2);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#41210C").s().p("AgIAlQgKgCgGgDIgDgDIgBgBQgGgJAEgKQACgGgBgEIgCgLQgBgKADgFQADgEAGgCQAHgDANAAQANABAJAKIADADQAEAFACAGQACAHAAAEQAAAIgDAHQgCAFgDADIgEAEQgGAGgIABQgHADgGAAIgCAAg");
	this.shape_215.setTransform(994.2,467.2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#372511").s().p("AgLBPQgDgCgDgEIAEgKQAIgNACgOIACgMQABgDACgEQADgIAAgIQAAgEgCgGQgCgHgCgFIgDgDIgCgNQgEgRgLgNQAFgIAFgCQAIgDAEAEQAHAFAFARQAJAYAAAhQAAAhgJAVQgFAOgHAGQgCADgEAAIgGgBg");
	this.shape_216.setTransform(997,467);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#E64A00").s().p("AAVBRQgQgGgOgUQgKgNgGgMIgEgJQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQABgDADgBQAFgDADAAIALAIQAFAHAFADIAEAUQAIAbAMAHIgJgCgAgXgIQgGgDAAgHQAAgFAHgKQAEgHAJgMQAPgVAMgHIAIgCIAAAAQgFAEgFAIQgIAQgEAeQgDADgBAFIgEAEIgIAEIgFABIgCAAIgEgBg");
	this.shape_217.setTransform(990.1,467.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#EC672C").s().p("AgXAxIgFgUIgBgHIAGAFIACABIADADQAGADAJACQAHAAAIgCQAIgCAGgGIAEgEIgCAMQgCAOgHANIgFAKQgFAGgHAEIgDACIgCAAQgMgHgIgbgAgRhGQAEgIAGgEIABAAQACgBAEAFQAIAFACAEQALANAEARIADANQgKgKgMAAQgNgBgIADQgGACgCAEIgGAEQADgeAJgQg");
	this.shape_218.setTransform(993.7,467.2);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_219.setTransform(992.8,437.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#372511").s().p("AgKBOQgGgCgFgIQAKgNAEgSQACgFABgHIADgDQACgGACgGQACgGAAgEQABgIgEgHIgDgJIgCgLQgDgPgHgNIgFgJQAEgEAEgBQAHgEAEAFQAHAFAGAPQAIAVAAAhQAAAggIAZQgGAQgHAFQgCAEgEAAIgFgCg");
	this.shape_220.setTransform(997,429.4);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#E18F59").s().p("AgBAAIgGgIIACgBIAAgBQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABIADAEIAHADQADAGgEAFIgHgLg");
	this.shape_221.setTransform(987.7,428.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#4A7328").s().p("AASBQQgMgHgPgVIgNgSQgHgKAAgFQAAgHAGgDQADgCADAAQADAAACACQAEABAEADIAEAEQABAFAEACQADAeAJARQAEAJAFACIAAABQgDAAgFgDgAgXgNIgEgEQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgEADgGQAGgLAKgOQAOgTAQgGQAFgCAEAAQgLAGgJAcIgEATIgKAKIgLAJIgIgDg");
	this.shape_222.setTransform(990.1,429.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#000000").s().p("AgVAiQgFgCgDgEQgEgGACgJIACgLQAAgFgCgEQgEgLAHgJIABgBIADgCQAHgEAJgBQAIgBAGACQAIACAGAGIAEAEIAFAIQAEAHAAAHQAAAFgCAHQgDAGgEAFIgCADQgKAKgMAAIgCAAQgMAAgHgCg");
	this.shape_223.setTransform(994.3,429.3);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#609634").s().p("AgHBTIAAgBIgBAAQgFgCgEgJQgJgQgDgeIAGAEQADAEAFACQAHACAOAAQAMgBAJgJQgBAHgBAFQgEASgLANQgDAEgGAEQgFAFgCAAIgBAAgAAagaQgGgFgIgCQgIgDgGACQgKAAgGAEIgDADIgBAAIgHAFIACgGIADgUQAJgbAMgHQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIACACQAIAEAFAGIAEAJQAIANACAPIACALIgEgEg");
	this.shape_224.setTransform(993.7,429.2);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#EEC09E").s().p("AAeAYQgEgDgCgEQgDgGgBgIIgDgBIgDgCQgDgBAKgBQAAgHACgFQADgEAEgEIAHgFQgHAJAEALQACAEAAAFIgCALQgCAJAEAGIgGgEgAgFASIgRgHQgIgEgEgEIgCgDIAAAAIAMAEQgLgFgBgEIAAgCIACgBIAGAEIAEADIACAAIgCgBIgGgFQgLgKAJABIAKAHIAGAEQgMgOAAgDQAAgEALAJIAKAIQAEADgKgMIAAgCQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQACgBAFAFIAFAIIAHALIAFAIQgCgCgDAAQgEAAgCACQgFACABAIIgCgBg");
	this.shape_225.setTransform(987.6,429.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgHgBgIIgDAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgDgBAKgBQAAgHACgFQADgFAEgEIAHgEQgHAIAEAMQACAEAAAFIgCALQgCAJAEAGIgGgEgAgFASIgRgHQgIgEgEgEIgCgDIAAAAIAMAEQgLgFgBgEIAAgCIACgBIAGAEQAEACAAABIACAAIgCgBIgGgFQgLgKAJABIAKAHIAGAEQgMgOAAgEQAAgDALAJIAKAIQAEADgKgNIAAgCIABgBQACgBAFAFIAFAIIAHALIAFAHIgFgBIgGABQgFADABAHIgCAAg");
	this.shape_226.setTransform(987.6,505.3);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#E18F59").s().p("AgBAAIgGgIIACgBIAAgBQAAAAAAAAQAAABAAAAQAAABABAAQAAABABAAIADAEQAEADADAAQADAGgEAGIgHgMg");
	this.shape_227.setTransform(987.7,504.3);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_228.setTransform(992.8,513.6);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#000000").s().p("AgVAiQgFgCgDgEQgEgGACgJIACgLQAAgFgCgEQgEgMAHgIIABgBIADgCQAHgEAJgBQAIgBAGACQAIACAGAFIAEAEIAFAJQAEAHAAAHQAAAFgCAHQgDAGgEAFIgCADQgKAJgMABIgCAAQgMAAgHgCg");
	this.shape_229.setTransform(994.3,505.3);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#6BD3D2").s().p("AgHBTIAAAAIgBAAQgFgDgEgJQgJgQgDgeIAGAEQADAEAFACQAHADAOgBQAMgBAJgJQgBAIgBAFQgEASgLANQgDADgGAFQgEAEgDAAIgBAAgAAagaQgGgFgIgCQgIgCgGABQgKABgGAEIgDACIgBABIgHAEIACgGIADgTQAJgcAMgHIACAAIACACQAIAEAFAGIAEAJQAIAOACAOIACALIgEgEg");
	this.shape_230.setTransform(993.7,505.2);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#5BB1B0").s().p("AASBRQgMgHgPgVIgNgSQgHgLAAgFQAAgHAGgDIAGgBIAFABQAEACAEADIAEAEIAFAHQADAdAJARQAEAJAFACIAAABQgDAAgFgCgAgXgNIgEgDQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgEADgFQAGgMAKgNQAOgUAQgGQAFgCAEAAQgLAHgJAbIgEAUIgKAKIgLAJQgDgBgFgDg");
	this.shape_231.setTransform(990.1,505.3);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#372511").s().p("AgKBOQgGgCgFgIQAKgNAEgSQACgFABgHIADgEQACgFACgGQACgGAAgEQABgIgEgHIgDgJIgCgLQgDgPgHgNIgFgJQAEgEAEgCQAHgDAEAFQAHAFAGAPQAIAVAAAhQAAAggIAZQgGAQgHAFQgCAEgEAAIgFgCg");
	this.shape_232.setTransform(997,505.5);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgCIABgBQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABQABACACACQAEADADAAQADAGgEAFIgHgLg");
	this.shape_233.setTransform(987.7,447.2);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgGgBgJIgCgBIgEgBQgEgBAKgCQABgHADgEQACgFAFgEIAGgEQgGAJAEAKQACAFgBAEIgCAMQgBAKADAFIgGgEgAgEARIgRgGQgJgEgEgEIgCgDIABAAQABAAALAEQgLgGgCgEIABgCIABAAIAGAEIAEACIACABIgBgBIgHgGQgKgKAIACQACAAAIAGQAHAGAAgBQgMgOgBgEQAAgDALAIIAKAJQAEADgKgNIAAgBIABgCQACgCAFAGIAFAIIAIALIAEAHIgFgBQgDAAgDABQgEADAAAHIgBgBg");
	this.shape_234.setTransform(987.5,448.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#372511").s().p("AgLBOQgFgCgFgIQALgNAEgRIACgNIADgDQACgFACgHQACgGAAgEQAAgIgDgHQgCgFgBgEIgCgLQgCgPgIgMIgEgKQADgEADgBQAIgDAEAEQAHAFAFAPQAJAVAAAhQAAAhgJAYQgFARgHAFQgCADgEAAIgGgCg");
	this.shape_235.setTransform(997,448.4);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AgUAiQgGgCgDgEQgDgFABgJIACgMQABgEgCgFQgEgLAGgIIABgCIADgCQAGgEAKgBQAIgBAHACQAIADAGAFIAEAEQADADACAFQADAHAAAHQAAAGgCAGQgCAGgEAGIgDACQgJAKgNAAIgDAAQgLAAgGgCg");
	this.shape_236.setTransform(994.2,448.2);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#628DD1").s().p("AgGBTIgBgBQgGgDgEgIQgJgRgDgeIAGAEQACAEAGACQAIADANgBQAMAAAKgKIgDAOQgEARgLANQgCADgIAFQgEAGgCAAIAAgBgAAagaQgGgFgIgDQgIgCgHABQgJABgGAEIgDACIgCACIgGAEIABgHIAFgTQAIgbAMgIIACAAIADACQAHAEAFAGIAFAKQAHANACAOIACAMIgEgEg");
	this.shape_237.setTransform(993.7,448.2);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#447BCD").s().p("AASBQQgMgHgPgUQgJgMgEgHQgHgKAAgGQAAgGAGgDQADgCADABIAFABQAEABAEAEIAEADIAEAIQAEAdAIARQAFAJAFACIAAABIgIgDgAgXgNQgDgCgBgCQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgDADgGQAGgMAKgNQAOgVAQgFIAJgCQgMAHgIAbIgEATIgKAKIgLAKQgDgBgFgDg");
	this.shape_238.setTransform(990.1,448.2);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#E18F59").s().p("AgFAKIgCgBIAGgIIAHgLQAEAFgDAGQgDABgEACIgDAEQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAg");
	this.shape_239.setTransform(987.7,373.2);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#EEC09E").s().p("AAeAYQgEgEgDgFQgCgEAAgIQgKgBADgCQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIADAAQABgIADgHIAGgHIAGgEQgEAGACAJIACALQAAAFgCAFQgEALAHAIIgHgEgAgcAYQAAgEAMgOIgGAFIgKAGQgJABALgJIAGgGIACgBIgCABIgEACIgGAEIgCAAIAAgCQABgEALgGIgMAEIAAgBIACgCQAEgEAIgEIARgHIACAAQgBAHAFADQACABAEAAQADAAACgBIgFAHIgHALIgFAIQgFAFgCgBQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgCQAKgNgEAEIgKAHQgIAHgCAAIgBgBg");
	this.shape_240.setTransform(987.6,372.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#000000").s().p("AgIAkQgJgBgHgEIgDgCIgBgBQgHgJAEgLQACgFAAgEIgCgLQgCgKAEgGQADgEAFgCQAIgCANABQAMAAAKAJIACAEQAEAFADAGQACAHAAAEQAAAHgEAIIgFAIIgEAEQgGAFgIACQgFACgDAAIgGAAg");
	this.shape_241.setTransform(994.3,372.2);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#372511").s().p("AgKBOQgEgBgEgEIAFgJQAHgOADgOIACgLIADgJQAEgHgBgJQAAgDgCgHQgCgGgCgFIgDgDIgDgNQgEgRgKgOQAFgHAGgDQAHgDAEAFQAHAGAGAQQAIAZAAAgQAAAhgIAUQgGAQgHAFQgCADgDAAIgGgCg");
	this.shape_242.setTransform(997,372);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#609634").s().p("AgDBTQgMgHgJgcIgDgTIgCgGIAHAEIABABIADADQAGAEAKAAQAGACAIgDQAIgCAGgFIAEgEIgCALQgCAOgIAOIgEAJQgFAGgIAEIgCACIgCAAIAAAAgAgRhGQAEgJAFgDIABAAIAAAAQACgBAGAFIAJAIQALAOAEARIACANQgJgJgMgBQgOgBgHADQgFACgDAEIgGAEQADgeAJgQg");
	this.shape_243.setTransform(993.7,372.2);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_244.setTransform(992.8,363.9);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#4A7328").s().p("AAVBRQgQgGgOgTQgKgOgGgMQgDgFgBgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAEgFQAFgCADAAIALAJIAKAKIAEATQAJAcALAGQgEAAgFgCgAgXgIQgGgDAAgHQAAgFAHgKIANgSQAPgWAMgGQAFgDADAAIAAAAQgFAEgEAIQgJAQgDAeIgFAIIgEADIgIAFQgCACgDAAQgDAAgDgCg");
	this.shape_245.setTransform(990.1,372.2);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_246.setTransform(992.8,382.9);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#372511").s().p("AgKBOQgEgBgEgEIAFgJQAHgNADgPIACgLIADgJQAEgHgBgJQAAgDgCgGQgCgGgCgGIgDgDIgDgNQgEgRgKgOQAFgHAGgCQAHgEAEAGQAHAFAGAQQAIAZAAAgQAAAhgIAVQgGAPgHAFQgCADgDAAIgGgCg");
	this.shape_247.setTransform(997,391);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#E18F59").s().p("AgFAKIgCgBIAGgIIAHgLQAEAEgDAHQgDAAgEADIgDAEQgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_248.setTransform(987.7,392.2);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#EEC09E").s().p("AAeAYQgEgFgDgEQgCgEAAgIQgKgBADgCIADgBIADAAQABgJADgGIAGgIIAGgDQgEAFACAKIACALQAAAFgCAEQgEALAHAJIgHgEgAgcAYQAAgDAMgPIgGAEIgKAHQgJACALgLIAGgFIACgBIgCAAIgEADIgGAEIgCgBIAAgBQABgEALgGIgMADIAAAAIACgCQAEgEAIgEIARgHIACAAQgBAHAFADIAGABQADAAACgCIgFAIIgHALIgFAIQgFAFgCgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgDQAKgMgEADIgKAIQgIAHgCAAIgBgBg");
	this.shape_249.setTransform(987.6,391.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#3A4D75").s().p("AAVBRQgQgGgOgTQgKgOgGgMQgDgFgBgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAIAEgEQAFgDADAAIALAJIAKAJIAEAUQAJAcALAGQgEAAgFgCgAgXgHQgGgEAAgHQAAgFAHgKIANgSQAPgVAMgHQAFgDADAAIAAABQgFADgEAIQgJAQgDAeIgFAIIgEADIgIAFQgCABgDABIgGgBg");
	this.shape_250.setTransform(990.1,391.2);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#48608E").s().p("AgDBTQgMgHgJgbIgDgUIgCgGIAHAEIABABIADADQAGAEAKAAQAGACAIgDQAIgCAGgFIAEgEIgCALQgCAPgIANIgEAJQgFAHgIADIgCACIgCAAIAAAAgAgRhGQAEgJAFgCIABAAIAAgBQACgBAGAGIAJAHQALAOAEARIACANQgJgJgMgBQgOgBgHADQgFACgDAEIgGAEQADgeAJgQg");
	this.shape_251.setTransform(993.7,391.2);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#000000").s().p("AgIAkQgJgBgHgEIgDgCIgBgBQgHgJAEgLQACgEAAgFIgCgLQgCgKAEgFQADgEAFgCQAIgDANABQAMAAAKAJIACAEQAEAFADAGQACAHAAAEQAAAHgEAIIgFAIIgEAEQgGAGgIACQgFABgDAAIgGAAg");
	this.shape_252.setTransform(994.3,391.2);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_253.setTransform(977.4,454.6);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#000000").s().p("AgVAiQgFgCgDgEQgEgGACgJIACgLQAAgFgCgEQgEgMAHgIIABgBIADgDQAHgDAJgBQAIgBAGACQAIACAGAFIAEAEQAEAEABAFQAEAHAAAHQAAAFgCAHQgDAGgEAFIgCADQgKAJgMABIgCAAQgMAAgHgCg");
	this.shape_254.setTransform(978.8,446.3);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#6BD3D2").s().p("AgGBTIgBAAIgBAAQgFgDgEgJQgJgQgDgeIAGAEQADAEAFACQAHADAOgBQAMgBAKgJIgEANQgDASgLANQgCADgHAFQgFAEgCAAIAAAAgAAagaQgGgFgIgCQgIgCgHABQgJABgGADIgDADIgBABIgHAEIABgGIAFgTQAIgcAMgHIACAAIADACQAHAEAEAGIAGAJQAGAOADAOIACALIgEgEg");
	this.shape_255.setTransform(978.3,446.2);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#372511").s().p("AgKBPQgGgDgFgHQAKgNAEgSIADgNIADgDQACgFACgGQACgHAAgEQABgIgEgHQgCgFgBgEIgCgLQgDgOgHgOIgFgJQAEgEAEgBQAHgDAEAEQAHAGAGAPQAIAUAAAhQAAAggIAaQgGAPgHAGQgCADgEAAIgFgBg");
	this.shape_256.setTransform(981.6,446.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#5BB1B0").s().p("AASBQQgMgGgPgWIgNgSQgHgKAAgFQAAgHAGgDIAGgBIAGABIAHAFIAEADIAFAIQADAeAJAQQAEAJAFADIAAAAQgDAAgFgDgAgXgMIgEgFQgBAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAEgJQAGgLAKgOQAOgUAQgGQAFgCAEAAQgLAGgJAdIgEASIgKAKIgLAJQgDAAgFgCg");
	this.shape_257.setTransform(974.7,446.3);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#E18F59").s().p("AgBAAIgGgHIACgCIAAgCQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAIADAEQAEACADABQADAGgEAFIgHgLg");
	this.shape_258.setTransform(972.3,445.3);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgHgBgIIgDAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgDgBAKgBQAAgHACgFQADgFAEgEIAHgEQgHAIAEAMQACAEAAAFIgCALQgCAJAEAGIgGgEgAgEASIgSgHQgIgEgEgEIgBgDQAAAAgBAAQAAAAAAAAQAAAAAAAAQABAAAAAAIALAEQgLgFgBgEIABgCIABgBIAGAEQAEACAAABIACAAIgCgBIgGgFQgLgKAJABIAKAHIAGAEQgMgOAAgEQAAgDALAJIAKAIQAEADgKgNIAAgCIABgBQACgBAFAFIAFAIIAHALIAFAHIgFgBIgGABQgFADABAHIgBAAg");
	this.shape_259.setTransform(972.1,446.3);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_260.setTransform(977.4,529.4);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#000000").s().p("AgVAiQgFgCgDgEQgEgFACgKIACgLQAAgFgCgEQgEgLAHgJIABgBIADgCQAHgEAJgBQAIgBAGACQAIACAGAGIAEAEQAEAEABAEQAEAIAAAGQAAAFgCAHQgDAGgEAFIgCADQgKAKgMAAIgFAAQgKAAgGgCg");
	this.shape_261.setTransform(978.8,521.1);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#609634").s().p("AgGBTIgBgBIgBAAQgFgCgEgJQgJgQgDgeIAGAEQADAEAFACQAHADAOgBQAMgBAKgJIgEANQgDARgLAOIgJAHQgFAFgCAAIAAAAgAAagaQgGgFgIgCQgIgDgHACQgJAAgGAEIgDADIgBABIgHAEIABgGIAFgUQAIgbAMgHQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIADACQAHAEAEAGIAGAJQAGANADAPIACALIgEgEg");
	this.shape_262.setTransform(978.3,521);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#372511").s().p("AgKBOQgGgCgFgHQAKgOAEgRIADgNIADgDQACgGACgGQACgGAAgEQABgIgEgHQgCgFgBgEIgCgLQgDgPgHgNIgFgJQAEgEAEgBQAHgEAEAFQAHAFAGAPQAIAVAAAhQAAAggIAZQgGAQgHAFQgCAEgEAAIgFgCg");
	this.shape_263.setTransform(981.6,521.2);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#EEC09E").s().p("AAeAZIgGgIQgDgGgBgJIgDAAIgDgCQgDgBAKgBQAAgHACgFQADgFAEgEIAHgEQgHAIAEAMQACAEAAAFIgCALQgCAJAEAGIgGgDgAgEARIgSgGQgIgEgEgEIgBgDQAAAAgBAAQAAAAAAAAQAAAAAAAAQABAAAAAAIALAEQgLgFgBgFIABgBIABgBIAGAEIAEADIACAAIgCgBIgGgFQgLgLAJACIAKAHIAGAEQgMgOAAgEQAAgDALAJIAKAIQAEADgKgMIAAgCQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQACgBAFAFIAFAIIAHALIAFAHQgCgBgDAAQgEAAgCABQgFADABAHIgBgBg");
	this.shape_264.setTransform(972.1,521.1);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#4A7328").s().p("AASBQQgMgHgPgVIgNgSQgHgKAAgFQAAgHAGgDQADgCADAAQAEAAACACQADABAEAEIAEADIAFAIQADAeAJAQQAEAIAFADIAAABQgDAAgFgDgAgXgNIgEgEQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIAEgJQAGgMAKgOQAOgTAQgGQAFgCAEAAQgLAGgJAcIgEATIgKAKIgLAJQgDAAgFgDg");
	this.shape_265.setTransform(974.7,521.1);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#E18F59").s().p("AgBAAIgGgIIACgBIAAgBQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABIADAEQAEADADAAQADAGgEAFIgHgLg");
	this.shape_266.setTransform(972.3,520.1);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#41210C").s().p("AgUAiQgGgCgDgEQgDgFABgKIACgMQABgEgCgFQgEgKAGgJIABgBIAEgDQAFgDAKgCQAIAAAHACQAIACAGAGIAEAEQADADACAFQADAHAAAHQAAAFgCAGQgCAHgEAFIgDADQgJAKgNAAIgFABQgKAAgFgDg");
	this.shape_267.setTransform(978.8,409.1);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#372511").s().p("AgKBOQgFgCgGgIQALgNADgRIAEgNIACgDQACgFACgHQACgGABgEQgBgIgDgHQgBgFgCgDIgCgMQgDgOgGgNIgGgKIAIgFQAHgDAEAFQAHAFAGAOQAHAVABAhQAAAhgIAYQgGARgHAFQgCADgEAAIgFgCg");
	this.shape_268.setTransform(981.6,409.2);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#EC672C").s().p("AgGBTIgBgBQgGgDgEgIQgJgQgDgfIAGAEQACAEAGADQAIADANgBQAMgBAKgKIgDAOQgEARgLANQgCADgHAFQgFAGgCAAIAAgBgAAagaQgGgFgIgCQgIgDgHABQgJABgGAEIgDACIgCACIgGAEIABgGIAFgUQAIgbAMgIIACABIADACQAHADAFAHIAFAJQAHANACAPIACALIgEgEg");
	this.shape_269.setTransform(978.2,409);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgCIABgCQAAABAAAAQAAABAAAAQAAABABAAQAAABABAAQABACACACQAEADADAAQADAHgEAFIgHgMg");
	this.shape_270.setTransform(972.3,408);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#E64A00").s().p("AASBQQgMgGgPgVQgJgMgEgHQgHgKAAgFQAAgHAGgEQADgBADABIAGAAIAHAFIAEAEIAEAHQAEAfAIAQQAFAIAFAEIAAABIgIgEgAgXgNQgDgCgBgCQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIAEgIQAGgLAKgOQAOgUAQgHIAJgCQgMAIgIAbIgEAUQgFADgFAGIgLAJQgDABgFgEg");
	this.shape_271.setTransform(974.7,409);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgGgBgJIgCgBIgEgBQgDgBAJgBQABgHADgFQACgFAFgDIAGgFQgGAJAEAKQACAFgBAEIgCAMQgBAKADAFIgGgEgAgEARIgRgGQgJgEgEgEIgCgDQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAMAEQgLgFgCgFIABgCIABAAIAGADIAEADIACABIgBgBIgHgGQgKgJAIABIAKAHIAHAEQgMgOgBgDQAAgEALAIIAKAJQAEACgKgLIAAgCIABgCQACgCAFAGIAFAIIAIALIAFAHIgGgBQgDAAgDABQgEADAAAHIgBgBg");
	this.shape_272.setTransform(972.1,409.1);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#E18F59").s().p("AgGAKIgBgCIAGgIIAHgKQAEAFgDAGQgDAAgEADQgCACgBACQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIgBgBg");
	this.shape_273.setTransform(972.3,316.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#EEC09E").s().p("AAfAYQgFgEgCgFQgDgEgBgIQgJgCADgBIAEAAIACgBQABgJADgGIAGgHIAGgEQgDAFABAKIACAMQABADgCAGQgEAKAGAJIgGgEgAgcAYQABgDAMgPQAAgBgHAGQgIAGgCAAQgIACAKgKIAHgGIABgBIgCABIgEACIgGAEIgBAAIgBgCQACgEALgGIgMADQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIACgCQAEgEAJgEIARgGIABgBQAAAHAEADQADABADAAIAGgBIgFAHIgIALIgFAIQgFAGgCgCIgBgCIAAgBQAKgNgEADIgKAJQgIAGgCAAIgBgBg");
	this.shape_274.setTransform(972.1,315.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFF6CD").s().p("AgIAkQgKgBgFgEIgEgCIgBgCQgGgIAEgLQACgFgBgEIgCgLQgBgKADgFQADgEAGgCQAHgDANABQANAAAJAKIADACQAEAGACAGQACAGAAAFQAAAIgDAHQgCAEgDAEIgEAEQgGAFgIADIgKABIgFAAg");
	this.shape_275.setTransform(978.8,315.9);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#424242").s().p("AgDBTQgMgHgIgbIgFgTIgBgHIAGAEIACACIADACQAGAEAJABQAHABAIgCQAIgDAGgFIAEgEIgCAMQgCAOgHANIgFAKQgFAGgHADIgDACgAgRhGQAEgIAGgEIABAAQACgBAFAFQAHAGACADQALANAEARIADAOQgKgKgMAAQgNgBgIADQgGACgCAEIgGAEQADgeAJgRg");
	this.shape_276.setTransform(978.2,315.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#393939").s().p("AAVBRQgQgFgOgVQgKgNgGgMIgEgJQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABgBQABgCADgCQAFgDADAAIALAJIAKAKIAEATQAIAbAMAHQgFAAgEgCgAgXgIQgGgCAAgHQAAgGAHgKQAEgHAJgLQAPgVAMgHQAEgDAEAAIAAAAQgFAEgFAIQgIARgEAeIgEAHIgEAEQgEADgDABIgGACQgDAAgDgCg");
	this.shape_277.setTransform(974.7,315.9);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#372511").s().p("AgKBOQgEgBgEgEIAGgKQAGgMADgPIACgLQACgEABgFQADgHABgJQgBgDgCgGQgCgHgCgFIgCgDIgEgNQgDgRgLgNQAGgIAFgCQAHgEAEAFQAHAFAGARQAIAYAAAhQgBAhgHAVQgGAPgHAFQgBADgEAAIgGgCg");
	this.shape_278.setTransform(981.6,315.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AgUAiQgGgCgDgEQgDgFABgJIACgMQABgEgCgGQgEgKAGgJIABgBIAEgDQAFgEAKAAQAIgBAHACQAIADAGAFIAEADQADAEACAFQADAHAAAHQAAAGgCAGQgCAGgEAFIgDADQgJAKgNAAIgGAAQgJAAgFgCg");
	this.shape_279.setTransform(978.8,297.4);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#EEC09E").s().p("AAeAYIgGgIQgDgFgBgJIgCAAIgEgCQgDgBAJgBQABgIADgEQACgFAFgEIAGgEQgGAIAEALQACAFgBAFIgCALQgBAKADAFIgGgEgAgEARIgRgFQgJgGgEgDIgCgDIABAAQABAAALAEQgLgGgCgEIABgCIABAAIAGAEIAEACIACABIgBgBIgHgGQgKgKAIADQACgBAIAGIAHAFQgMgOgBgEQAAgDALAIIAKAJQAEADgKgNIAAgCIABgBQACgBAFAFIAFAIIAIALIAFAHIgGgCQgDABgDABQgEACAAAIIgBgBg");
	this.shape_280.setTransform(972.1,297.4);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#447BCD").s().p("AASBRQgMgIgPgUQgJgMgEgHQgHgKAAgFQAAgIAGgCQADgCADAAIAGACIAHAEIAEAEIAEAIQAEAdAIARQAFAIAFAEIAAAAIgIgCgAgXgNQgDgCgBgCQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIAEgJQAGgMAKgNQAOgUAQgGIAJgCQgMAHgIAbIgEATIgKAKIgLAJQgDAAgFgDg");
	this.shape_281.setTransform(974.7,297.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgDQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABQABACACACQAEADADAAQADAGgEAFIgHgLg");
	this.shape_282.setTransform(972.3,296.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#372511").s().p("AgKBOQgFgDgGgHQALgNADgRIAEgNIACgDQACgFACgHQACgGABgEQgBgIgDgIQgBgEgCgEIgCgLQgDgPgGgNIgGgJQAEgEAEgCQAHgCAEAEQAHAFAGAPQAHAVABAhQAAAhgIAYQgGAQgHAGQgCADgEAAIgFgCg");
	this.shape_283.setTransform(981.6,297.5);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#628DD1").s().p("AgGBTIgBAAQgGgEgEgIQgJgRgDgdIAGAEQACAEAGACQAIACANgBQAMAAAKgJIgDANQgEARgLANIgJAJQgEAEgDAAIAAAAgAAagaQgGgFgIgCQgIgCgHAAQgJABgGAEIgDACIgCACIgGAEIABgHIAFgTQAIgbAMgHIACAAIADACQAHAEAFAGIAFAJQAHANACAPIACALIgEgEg");
	this.shape_284.setTransform(978.2,297.3);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_285.setTransform(977.4,342.9);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#000000").s().p("AgVAiQgFgCgDgEQgEgFACgKIACgLQAAgFgCgEQgEgLAHgJIABgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQAHgEAJgBQAIgBAGACQAIACAGAGIAEAEQAEAEABAEQAEAIAAAGQAAAFgCAHQgDAGgEAFIgCADQgKAKgMAAIgFAAQgKAAgGgCg");
	this.shape_286.setTransform(978.8,334.6);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgHgBgHIgDgBIgDgCQgDgBAKgBQAAgIACgEQADgEAEgEIAHgFQgHAJAEAKQACAFAAAFIgCALQgCAKAEAFIgGgEgAgEARIgSgGQgIgEgEgEIgBgDQAAAAgBAAQAAAAAAAAQAAAAAAAAQABAAAAAAIALAEQgLgFgBgEIABgDIABAAIAGAEIAEADIACAAIgCgBIgGgGQgLgJAJABIAKAGIAGAFQgMgOAAgDQAAgEALAIIAKAIQAEAEgKgNIAAgBQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAABAAQACgBAFAFIAFAIIAHAKIAFAIQgCgBgDAAIgGABQgFADABAHIgBgBg");
	this.shape_287.setTransform(972.1,334.7);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#3A4D75").s().p("AASBQQgMgHgPgUIgNgTQgHgKAAgFQAAgHAGgDIAGgBQAEAAACABQADABAEADIAEAFIAFAHQADAdAJARQAEAJAFACIAAABQgDAAgFgDgAgXgNIgEgEQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIAEgKQAGgKAKgOQAOgUAQgGQAFgCAEAAQgLAGgJAcIgEATIgKAKIgLAKQgDgBgFgDg");
	this.shape_288.setTransform(974.7,334.6);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#E18F59").s().p("AgBAAIgGgHIACgCIAAgBQAAAAAAABQAAAAAAAAQAAABABAAQAAABABAAIADAEQAEADADAAQADAGgEAFIgHgLg");
	this.shape_289.setTransform(972.3,333.6);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#372511").s().p("AgKBOQgGgCgFgHQAKgOAEgRIADgNIADgDQACgGACgGQACgGAAgEQABgIgEgHQgCgFgBgEIgCgLQgDgPgHgNIgFgJQAEgEAEgBQAHgEAEAFQAHAFAGAPQAIAVAAAhQAAAggIAZQgGAQgHAFQgCAEgEAAIgFgCg");
	this.shape_290.setTransform(981.6,334.8);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#48608E").s().p("AgGBTIgBgBIgBAAQgFgCgEgJQgJgQgDgeIAGAEQADAEAFACQAHADAOgBQAMgBAKgJIgEANQgDARgLAOIgJAHQgFAFgCAAIAAAAgAAagaQgGgFgIgCQgIgDgHACQgJAAgGAEQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAABIgBABIgHAEIABgGIAFgUQAIgbAMgHQAAAAAAAAQAAAAAAAAQABAAAAAAQABAAAAAAIADACQAHADAEAHIAGAJQAGANADAPIACALIgEgEg");
	this.shape_291.setTransform(978.3,334.6);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgGgBgJIgCAAIgEgCQgDAAAJgCQABgHADgFQACgFAFgDIAGgFQgGAJAEAKQACAGgBAEIgCALQgBAKADAFQgDgBgDgDgAgEARIgRgGQgJgEgEgEIgCgDQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAMAEQgLgFgCgFIABgCIABAAIAGAEIAEACIACACIgBgCIgHgGQgKgJAIABIAKAHQAHAFAAgBQgMgOgBgDQAAgEALAIIAKAJQAEADgKgMIAAgCIABgCQACgCAFAGIAFAIIAIALIAFAHIgGgBQgDAAgDABQgEADAAAHIgBgBg");
	this.shape_292.setTransform(972.1,353.2);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABQABADACABQAEADADAAQADAHgEAEIgHgLg");
	this.shape_293.setTransform(972.3,352.2);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#41210C").s().p("AgUAjQgGgDgDgEQgDgFABgKIACgLQABgEgCgGQgEgKAGgJIABgBIAEgDQAFgDAKgBQAIgBAHADQAIACAGAFIAEAEQADADACAFQADAIAAAGQAAAFgCAGQgCAHgEAFIgDADQgJAKgNABIgDAAQgLAAgGgCg");
	this.shape_294.setTransform(978.8,353.2);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#EC672C").s().p("AgGBTIgBAAQgGgEgEgIQgJgQgDgfQACADAEABQACAEAGADQAIADANgBQAMgBAKgKIgDAOQgEARgLANIgJAJQgFAEgCAAIAAAAgAAagaQgGgFgIgCQgIgDgHABQgJABgGAEIgDACIgCACIgGAEIABgGIAFgUQAIgbAMgHIACAAIADACQAHAEAFAGIAFAJQAHAOACAOIACALIgEgEg");
	this.shape_295.setTransform(978.2,353.2);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#E64A00").s().p("AASBRQgMgHgPgVQgJgMgEgHQgHgKAAgFQAAgIAGgCQADgCADABIAGABIAHAEIAEAEIAEAHQAEAfAIAQQAFAIAFAEIAAAAIgIgCgAgXgNQgDgBgBgDQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAEgJQAGgMAKgNQAOgVAQgFIAJgCQgMAHgIAbIgEAUQgFACgFAIIgLAIQgDAAgFgDg");
	this.shape_296.setTransform(974.7,353.2);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#372511").s().p("AgKBOQgFgDgGgHQALgNADgRIAEgOIACgCQACgFACgHQACgGABgEQgBgIgDgIQgBgEgCgEIgCgLQgDgOgGgOIgGgJQAEgEAEgCQAHgCAEAEQAHAFAGAPQAHAVABAhQAAAggIAZQgGAQgHAGQgBACgEAAIgGgBg");
	this.shape_297.setTransform(981.6,353.4);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#E18F59").s().p("AgFAKIgCgBIAGgIIAHgLQAEAFgDAGIgHADIgDAEQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_298.setTransform(972.3,391.4);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#EEC09E").s().p("AAeAXQgEgEgDgEQgCgFAAgHQgKgBADgCIADgBIADgBQABgIADgGIAGgHIAGgEQgEAGACAJIACALQAAAFgCAEQgEALAHAJIgHgFgAgcAXQAAgDAMgOIgGAEIgKAHQgJABALgKIAGgFIACgBIgCAAIgEADIgGAEIgBgBIgBgCQABgEALgFIgLADQAAAAgBAAQAAAAAAAAQAAAAAAAAQABAAAAAAIABgCQAEgEAIgEIASgHIABgBQgBAIAFACQACACAEAAQADAAACgCIgFAIIgHALIgFAIQgFAFgCgBQgBAAAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgCQAKgMgEADIgKAIQgIAGgCAAIgBgBg");
	this.shape_299.setTransform(972.1,390.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#000000").s().p("AgIAkQgJgBgHgEIgDgCIgBgBQgHgJAEgLQACgEAAgFIgCgLQgCgJAEgGQADgEAFgCQAIgDANABQAMAAAKAKIACADQAEAFADAGQACAHAAAEQAAAIgEAHQgBAEgEAEIgEAEQgGAGgIACQgFABgDAAIgGAAg");
	this.shape_300.setTransform(978.8,390.4);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#4A7328").s().p("AAVBRQgQgGgOgTQgKgOgGgMIgEgJQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAIAEgEIAIgDIALAJIAKAJIAEAUQAJAbALAHQgEAAgFgCgAgXgIQgGgCAAgIQAAgFAHgKIANgSQAPgWAMgGQAFgDADAAIAAABQgFADgEAIQgJARgDAdIgFAIIgEADQgEAEgDABQgCABgEABQgDgBgDgBg");
	this.shape_301.setTransform(974.7,390.4);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#372511").s().p("AgKBOQgEgBgEgEIAFgJQAHgNADgPIACgLQABgEACgFQAEgHgBgJQAAgDgCgGQgCgGgCgGIgDgDQgBgHgCgFQgEgSgKgNQAFgIAGgCQAHgEAEAGQAHAFAGAQQAIAZAAAgQAAAhgIAVQgGAPgHAFQgBADgEAAIgGgCg");
	this.shape_302.setTransform(981.6,390.2);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#609634").s().p("AgDBTQgMgHgIgbIgFgUIgBgGIAHAFIABAAIADADQAGAEAJAAQAHACAIgDQAIgCAGgFIAEgEIgCALQgDAPgGANIgGAJQgEAGgHAEIgDACIgCAAIAAAAgAgRhGQAEgJAFgCIABAAIABgBQACgBAFAGQAHAEACAEQALANADASQACAFACAHQgKgJgMgBQgNAAgIACQgFACgDAEIgGAEQADgeAJgQg");
	this.shape_303.setTransform(978.3,390.4);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_304.setTransform(977.4,382.1);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAHgKQAEAFgDAGQgDAAgEADIgDAEQgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_305.setTransform(972.3,372.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgIAkQgKAAgFgEIgEgDIgBgBQgGgJAEgKQACgGgBgEIgCgMQgBgJADgFQADgEAGgCQAHgDANABQANAAAJAKIADADQAEAFACAGQACAGAAAFQAAAIgDAHQgCAFgDAEIgEADQgGAFgIADQgHABgFAAIgDAAg");
	this.shape_306.setTransform(978.8,371.7);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#EEC09E").s().p("AAfAYQgFgEgCgEQgDgFgBgIQgJgBADgCIAEAAIACgBQABgIADgHIAGgHIAGgEQgDAGABAIIACANQABADgCAGQgEAKAGAJIgGgEgAgcAYQABgEAMgOIgHAFQgIAGgCAAQgIACAKgKIAHgGIABgBIgCABIgEADIgGADIgBAAIgBgCQACgEALgGIgMADQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIACgBQAEgFAJgEIARgGIABgBQAAAHAEADQADACADgBIAGgBIgFAHIgIALIgFAHQgFAHgCgBIgBgDIAAgBQAKgNgEADIgKAIQgIAHgCAAIgBgBg");
	this.shape_307.setTransform(972.1,371.7);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#372511").s().p("AgKBPQgEgCgEgEIAGgJQAGgNADgPIACgLQACgEABgEQADgIABgIQgBgEgCgGQgCgHgCgFIgCgDIgEgNQgDgRgLgNQAGgHAFgDQAHgDAEAEQAHAGAGAQQAIAZAAAgQgBAhgHAVQgGAPgHAFQgCADgEAAIgFgBg");
	this.shape_308.setTransform(981.6,371.6);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#628DD1").s().p("AgDBTQgMgHgIgbIgFgTIgBgHIAGAEIACACIADACQAGAEAJABQAHAAAIgCQAIgCAGgFIAEgEIgCALQgCAPgHANIgFAJQgFAGgHAEIgDACgAgRhGQAEgIAGgEIABAAQACgBAFAFIAJAJQALANAEARIADANQgKgJgMAAQgNgBgIADQgGACgCADIgGAEQADgdAJgRg");
	this.shape_309.setTransform(978.2,371.8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#447BCD").s().p("AAVBRQgQgGgOgUQgKgNgGgMIgEgJQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAIAEgEQAFgDADAAIALAJIAKAKIAEATQAIAbAMAHIgJgCgAgXgIQgGgCAAgIQAAgFAHgKQAEgHAJgMQAPgUAMgIIAIgCIAAAAQgFAEgFAIQgIARgEAdIgEAIIgEAEIgHAEIgGACQgDAAgDgCg");
	this.shape_310.setTransform(974.7,371.8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_311.setTransform(977.4,436);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#000000").s().p("AgVAjQgFgCgDgEQgEgGACgKIACgLQAAgEgCgFQgEgLAHgJIABgBIADgCQAHgEAJgBQAIgBAGADQAIACAGAFIAEAEQAEAEABAEQAEAIAAAGQAAAFgCAHQgDAGgEAFIgCAEQgKAJgMAAIgGAAQgJAAgGgBg");
	this.shape_312.setTransform(978.8,427.7);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#372511").s().p("AgKBPQgGgDgFgHQAKgOAEgRIADgNIADgDQACgFACgGQACgHAAgEQABgIgEgHQgCgFgBgEIgCgLQgDgOgHgOIgFgJQAEgEAEgBQAHgDAEAEQAHAFAGAPQAIAVAAAhQAAAggIAZQgGAQgHAGQgCADgEAAIgFgBg");
	this.shape_313.setTransform(981.6,427.8);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#48608E").s().p("AgGBTIgBAAIgBAAQgFgDgEgJQgJgQgDgeIAGAEQADAEAFACQAHADAOgBQAMgBAKgJIgEANQgDARgLAOIgJAIQgFAEgCAAIAAAAgAAagaQgGgFgIgCQgIgDgHACQgJAAgGAEIgDADIgBABIgHAEIABgGIAFgTQAIgcAMgHIACAAIADACQAHADAEAHIAGAJQAGAOADAOIACALIgEgEg");
	this.shape_314.setTransform(978.3,427.6);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#3A4D75").s().p("AASBRQgMgIgPgUIgNgTQgHgKAAgFQAAgHAGgDIAGgBQAEAAACABIAHAEIAEAFIAFAHQADAdAJARQAEAJAFADIAAAAQgDAAgFgCgAgXgNIgEgDQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAIAEgJQAGgMAKgOQAOgTAQgGQAFgCAEAAQgLAGgJAcIgEATIgKAKIgLAJQgDAAgFgDg");
	this.shape_315.setTransform(974.7,427.7);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#E18F59").s().p("AgBAAIgGgHIACgCIAAgBQAAAAAAABQAAAAAAABQAAAAABABQAAAAABABIADADQAEADADAAQADAHgEAEIgHgLg");
	this.shape_316.setTransform(972.3,426.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgHgBgIIgDAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgDgBAKgBQAAgIACgEQADgFAEgEIAHgEQgHAIAEALQACAFAAAFIgCALQgCAJAEAGIgGgEgAgEASIgSgHQgIgEgEgEIgBgDQAAAAgBAAQAAAAAAAAQAAAAAAAAQABAAAAAAIALAEQgLgGgBgEIABgCIABAAIAGAEIAEACIACABIgCgBIgGgGQgLgJAJABIAKAGIAGAFQgMgOAAgEQAAgDALAJIAKAHQAEAEgKgNIAAgCQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAAAABAAQACgBAFAFIAFAIIAHAKIAFAIQgCgBgDAAIgGABQgFADABAHIgBAAg");
	this.shape_317.setTransform(972.1,427.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#41210C").s().p("AgUAiQgGgCgDgEQgDgFABgKIACgMQABgDgCgGQgEgKAGgJIABgBIAEgDQAFgDAKgBQAIgBAHADQAIACAGAFIAEAEQADADACAFQADAIAAAGQAAAFgCAGQgCAHgEAFIgDADQgJAKgNAAIgFAAQgKAAgFgCg");
	this.shape_318.setTransform(978.8,502.1);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#EC672C").s().p("AgGBTIgBAAQgGgEgEgIQgJgQgDgfQACADAEABQACAEAGADQAIADANgBQAMgBAKgKIgDAOQgEARgLANQgCADgHAGQgFAEgCAAIAAAAgAAagaQgGgFgIgCQgIgDgHABQgJABgGAEIgDACIgCACIgGAEIABgGIAFgUQAIgbAMgHIACAAIADACQAHADAFAHIAFAJQAHAOACAOIACALIgEgEg");
	this.shape_319.setTransform(978.2,502.1);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#372511").s().p("AgKBOQgFgCgGgIQALgNADgRIAEgNIACgDQACgFACgHQACgGABgEQgBgHgDgIQgBgFgCgDIgCgLQgDgPgGgNIgGgJQAEgEAEgCQAHgDAEAFQAHAFAGAOQAHAWABAhQAAAggIAYQgGARgHAFQgBADgEAAIgGgCg");
	this.shape_320.setTransform(981.6,502.2);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#E64A00").s().p("AASBRQgMgHgPgVQgJgMgEgHQgHgKAAgGQAAgHAGgCQADgCADABIAGABIAHAEIAEAEIAEAHQAEAfAIAQQAFAIAFAEIAAAAIgIgCgAgXgNQgDgBgBgDQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIAEgJQAGgMAKgNQAOgVAQgFIAJgCQgMAHgIAbIgEAUQgFACgFAIIgLAIQgDAAgFgDg");
	this.shape_321.setTransform(974.7,502.1);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABQABADACABQAEADADAAQADAHgEAEIgHgLg");
	this.shape_322.setTransform(972.3,501.1);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgGgBgJIgCgBIgEgBQgDAAAJgCQABgHADgFQACgFAFgDIAGgFQgGAJAEAKQACAGgBADIgCAMQgBAKADAFQgDgBgDgDgAgEARIgRgGQgJgEgEgEIgCgDQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAMAEQgLgFgCgFIABgCIABAAIAGAEIAEACIACACIgBgCIgHgGQgKgJAIABIAKAHQAHAFAAgBQgMgOgBgDQAAgEALAIIAKAJQAEADgKgMIAAgCIABgCQACgCAFAGIAFAIIAIALIAFAHIgGgBQgDAAgDABQgEADAAAHIgBgBg");
	this.shape_323.setTransform(972.1,502.1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#FFF6CD").s().p("AgUAiQgGgCgDgEQgDgFABgKIACgLQABgEgCgFQgEgLAGgIIABgCIAEgCQAFgEAKgBQAIgBAHACQAIADAGAFIAEADQADAEACAFQADAHAAAHQAAAGgCAGQgCAGgEAGIgDACQgJAKgNAAIgDAAQgLAAgGgCg");
	this.shape_324.setTransform(978.8,483.5);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#424242").s().p("AgGBTIgBgBQgGgDgEgIQgJgRgDgeIAGAEQACAEAGACQAIADANgBQAMAAAKgKIgDANQgEASgLANQgCADgHAFQgFAGgCAAIAAgBgAAagaQgGgFgIgDQgIgCgHABQgJABgGAEIgDACIgCACIgGADIABgGIAFgTQAIgbAMgIIACAAIADACQAHAEAFAGIAFAKQAHANACAOIACALIgEgDg");
	this.shape_325.setTransform(978.2,483.5);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#372511").s().p("AgKBOQgFgCgGgIQALgNADgRIAEgNIACgDQACgFACgHQACgGABgEQgBgIgDgHQgBgFgCgEIgCgLQgDgPgGgMIgGgKQAEgEAEgBQAHgDAEAEQAHAFAGAPQAHAVABAhQAAAhgIAYQgGARgHAFQgCADgEAAIgFgCg");
	this.shape_326.setTransform(981.6,483.6);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#393939").s().p("AASBQQgMgGgPgVQgJgMgEgHQgHgKAAgFQAAgIAGgCIAGgBIAGABIAHAEIAEAFIAEAGQAEAfAIAQQAFAJAFADIAAABIgIgEgAgXgNQgDgCgBgCQgBgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBIAEgIQAGgMAKgNQAOgVAQgFQAEgDAFAAQgMAIgIAbIgEATIgKAKIgLAJQgDAAgFgDg");
	this.shape_327.setTransform(974.7,483.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgCIABgCQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABQABACACACQAEADADAAQADAGgEAGIgHgMg");
	this.shape_328.setTransform(972.3,482.5);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgGgBgJIgCgBIgEgBQgDgBAJgCQABgHADgEQACgFAFgEIAGgEQgGAJAEAKQACAFgBAEIgCAMQgBAJADAGIgGgEgAgEARIgRgGQgJgEgEgEIgCgDQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAAAAAIAMAEQgLgGgCgEIABgCQAAAAABAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAGADIAEADIACABIgBgBIgHgGQgKgKAIACQACAAAIAGIAHAFQgMgPgBgDQAAgDALAIIAKAJQAEACgKgMIAAgBIABgCQACgCAFAGIAFAIIAIALIAFAHIgGgBIgGABQgEADAAAHIgBgBg");
	this.shape_329.setTransform(972.1,483.5);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#000000").s().p("AgUAiQgGgCgDgEQgDgFABgJIACgMQABgEgCgFQgEgLAGgJIABgBIAEgDQAFgEAKAAQAIgBAHACQAIADAGAFIAEADQADAEACAFQADAHAAAHQAAAGgCAGQgCAGgEAGIgDACQgJAKgNAAIgDAAQgLAAgGgCg");
	this.shape_330.setTransform(978.8,464.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#628DD1").s().p("AgGBTIgBAAQgGgEgEgIQgJgRgDgdIAGAEQACAEAGACQAIACANAAQAMAAAKgKIgDANQgEARgLANQgCAEgHAFQgEAEgDAAIAAAAgAAagZQgGgGgIgCQgIgCgHAAQgJABgGAEIgDADIgCABIgGAEIABgHIAFgTQAIgbAMgHIACAAIADACQAHAEAFAGIAFAKQAHAMACAPIACALIgEgDg");
	this.shape_331.setTransform(978.2,464.8);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#372511").s().p("AgKBOQgFgDgGgHQALgNADgRIAEgNIACgDQACgFACgHQACgGABgEQgBgIgDgIQgBgEgCgEIgCgLQgDgPgGgMIgGgKQAEgEAEgCQAHgCAEAEQAHAFAGAPQAHAVABAhQAAAhgIAYQgGARgHAFQgCADgEAAIgFgCg");
	this.shape_332.setTransform(981.6,465);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#447BCD").s().p("AASBRQgMgHgPgVQgJgMgEgHQgHgKAAgFQAAgIAGgCIAGgBIAGABIAHAEIAEAEIAEAIQAEAdAIARQAFAIAFAEIAAAAIgIgCgAgXgNQgDgCgBgCQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIAEgJQAGgMAKgNQAOgUAQgGIAJgCQgMAHgIAbIgEATIgKAKIgLAJQgDAAgFgDg");
	this.shape_333.setTransform(974.7,464.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgBIABgCQAAAAAAAAQAAABAAAAQAAABABAAQAAAAABABQABACACACQAEADADAAQADAGgEAFIgHgLg");
	this.shape_334.setTransform(972.3,463.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#EEC09E").s().p("AAeAYIgGgIQgDgFgBgJIgCAAIgEgCQgDgBAJgCQABgGADgFQACgFAFgEIAGgEQgGAJAEALQACAEgBAFIgCALQgBAKADAFIgGgEgAgEASIgRgGQgJgFgEgEIgCgDIABAAQABAAALAEQgLgGgCgDIABgCQAAgBABAAQAAAAAAAAQAAAAAAAAQAAAAAAABIAGADIAEACIACABIgBgBIgHgFQgKgKAIACQACAAAIAFIAHAFQgMgOgBgEQAAgDALAIIAKAJQAEADgKgNIAAgCIABgBQACgCAFAGIAFAIIAIALIAFAHIgGgBIgGABQgEADAAAHIgBAAg");
	this.shape_335.setTransform(972.1,464.9);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAHgKQAEAFgDAGQgDAAgEADQgCACgBACQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAAAIgBgCg");
	this.shape_336.setTransform(987.7,525.6);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#EEC09E").s().p("AAfAYQgFgEgCgFQgDgEgBgIQgKgCAEgBIAEgBIACAAQABgJADgGIAGgHIAGgEQgDAFABAKIACALQABAEgCAGQgEAKAGAJIgGgEgAgcAYQABgEAMgOQAAgBgHAGQgIAGgCAAQgIACAKgKIAHgGIABgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBAAAAABIgEACIgGAEIgBAAIgBgCQACgEALgGQgLAEgBgBIgBAAIACgCQAEgEAJgEIARgGIABgBQAAAHAEADQADABADAAIAFgBIgEAHIgIALIgFAIQgFAFgCgBIgBgCIAAgBQAKgNgEADIgKAJQgIAGgCAAIgBgBg");
	this.shape_337.setTransform(987.5,524.6);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#000000").s().p("AgIAkQgKgBgGgEIgDgCIgBgCQgGgIAEgLQACgFgBgEIgCgMQgBgJADgFQADgEAGgCQAHgDANABQANAAAJAKIADACQAEAFACAHQACAGAAAFQAAAHgDAIIgFAIIgEAEQgGAFgIADIgKABIgFAAg");
	this.shape_338.setTransform(994.2,524.6);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#447BCD").s().p("AAVBRQgQgGgOgUQgKgNgGgMQgDgFgBgEQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABgBQABgCADgCQAFgDADAAIALAJQAFAHAFADIAEATQAIAbAMAHIgJgCgAgXgIQgGgCAAgIQAAgFAHgKQAEgHAJgMQAPgUAMgIIAIgCIAAAAQgFAEgFAIQgIARgEAdIgEAIIgEAEQgEADgEABIgFACQgDAAgDgCg");
	this.shape_339.setTransform(990.1,524.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#628DD1").s().p("AgDBTQgMgHgIgbIgFgTIgBgHIAGAEIACACIADACQAGAEAJABQAHABAIgCQAIgDAGgFIAEgEIgCAMQgCAOgHANIgFAKQgFAFgHAEIgDACgAgRhGQAEgIAGgEIABAAQACgBAEAFIAKAJQALANAEARIADAOQgKgKgMAAQgNgBgIADQgGACgCAEIgGADQADgdAJgRg");
	this.shape_340.setTransform(993.7,524.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#372511").s().p("AgLBPQgDgCgDgDIAEgKQAIgNACgOIACgMIADgIQADgIAAgIQAAgEgCgGQgCgHgCgFIgDgCIgCgOQgEgRgLgNQAFgHAFgDQAIgDAEAEQAHAGAFAQQAJAZAAAhQAAAhgJAUQgFAPgHAFQgCACgEAAIgGAAg");
	this.shape_341.setTransform(997,524.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_342.setTransform(992.8,477.9);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#372511").s().p("AgKBOQgEgBgEgEIAFgJQAHgOADgOIACgLIADgJQAEgHgBgJQAAgDgCgHQgCgGgCgFIgDgDIgDgNQgEgRgKgOQAFgHAGgDQAHgDAEAFQAHAGAGAQQAIAZAAAgQAAAhgIAVQgGAPgHAFQgCADgDAAIgGgCg");
	this.shape_343.setTransform(997,486.1);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#E18F59").s().p("AgFAKIgCgBIAGgIIAHgLQAEAEgDAHQgDAAgEACIgDAFQgBAAAAAAQgBABAAAAQAAABAAAAQAAABAAAAg");
	this.shape_344.setTransform(987.7,487.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#EEC09E").s().p("AAeAYQgEgEgDgFQgCgEAAgIQgKgBADgCQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIADAAQABgIADgHIAGgHIAGgEQgEAGACAJIACALQAAAFgCAFQgEALAHAIIgHgEgAgcAYQAAgEAMgOIgGAFIgKAGQgJABALgJIAGgGIACgBIgCABIgEACIgGAEIgCAAIAAgCQABgEALgGIgMAEIAAgBIACgCQAEgEAIgEQALgDAGgEIACAAQgBAHAFADIAGABQADAAACgBIgFAHIgHALIgFAIQgFAFgCgBQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgCQAKgNgEAEIgKAHQgIAHgCAAIgBgBg");
	this.shape_345.setTransform(987.6,486.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#48608E").s().p("AgDBTQgMgHgJgcIgDgTIgCgGIAHAEIABABIADADQAGAEAKAAQAGACAIgDQAIgCAGgFIAEgEIgCALQgCAOgIAOIgEAJQgFAGgIAEIgCACIgCAAIAAAAgAgRhGQAEgJAFgDIABAAIAAAAQACgBAGAFIAJAIQALAOAEARIACANQgJgJgMgBQgOgBgHADQgFACgDAEIgGAEQADgeAJgQg");
	this.shape_346.setTransform(993.7,486.3);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AgIAkQgJAAgHgEIgDgDIgBgBQgHgIAEgLQACgFAAgFIgCgLQgCgJAEgGQADgEAFgCQAIgDANABQAMABAKAJIACADQAEAFADAGQACAHAAAEQAAAIgEAHIgFAJIgEAEQgGAFgIACQgFACgDAAIgGgBg");
	this.shape_347.setTransform(994.3,486.2);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#3A4D75").s().p("AAVBRQgQgGgOgTQgKgOgGgMQgDgFgBgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAEgFQAFgCADAAIALAJIAKAJIAEATQAJAcALAHQgEAAgFgCgAgXgHQgGgDAAgIQAAgFAHgKIANgSQAPgWAMgGQAFgDADAAIAAABQgFADgEAIQgJARgDAdIgFAIIgEADIgIAFQgCABgDABIgGgBg");
	this.shape_348.setTransform(990.1,486.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAHgKQAEAEgDAHQgDAAgEADQgCABgBADQgBABAAAAQgBAAAAABQAAAAAAABQAAAAAAABIgBgDg");
	this.shape_349.setTransform(987.7,468.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#EEC09E").s().p("AAfAXQgFgDgCgFQgDgFgBgHQgKgCAEgBIAEgBIACAAQABgJADgFQADgFADgDIAGgEQgDAFABAKIACALQABAEgCAGQgEAKAGAJIgGgFgAgcAXQABgDAMgOIgHAEIgKAGQgIACAKgJIAHgGIABgBIgCABIgEACIgGAEQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIgBgDQACgEALgFQgLAEgBgBIgBAAIACgCQAEgEAJgFIARgFIABgBQAAAHAEADQADABADAAIAFgBIgEAHIgIALIgFAIQgFAFgCgBIgBgCIAAgBQAKgMgEACIgKAJQgHAFgDAAQAAAAAAAAQAAAAAAAAQgBAAAAAAQAAgBAAAAg");
	this.shape_350.setTransform(987.5,467.2);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#41210C").s().p("AgIAlQgKgCgGgDIgDgDIgBgBQgGgJAEgKQACgGgBgEIgCgLQgBgKADgFQADgEAGgCQAHgDANAAQANABAJAKIADADQAEAFACAGQACAHAAAEQAAAIgDAHQgCAFgDADIgEAEQgGAGgIABQgHADgGAAIgCAAg");
	this.shape_351.setTransform(994.2,467.2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#372511").s().p("AgLBPQgDgCgDgEIAEgKQAIgNACgOIACgMQABgDACgEQADgIAAgIQAAgEgCgGQgCgHgCgFIgDgDIgCgNQgEgRgLgNQAFgIAFgCQAIgDAEAEQAHAFAFARQAJAYAAAhQAAAhgJAVQgFAOgHAGQgCADgEAAIgGgBg");
	this.shape_352.setTransform(997,467);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#E64A00").s().p("AAVBRQgQgGgOgUQgKgNgGgMIgEgJQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQABgDADgBQAFgDADAAIALAIQAFAHAFADIAEAUQAIAbAMAHIgJgCgAgXgIQgGgDAAgHQAAgFAHgKQAEgHAJgMQAPgVAMgHIAIgCIAAAAQgFAEgFAIQgIAQgEAeQgDADgBAFIgEAEIgIAEIgFABIgCAAIgEgBg");
	this.shape_353.setTransform(990.1,467.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#EC672C").s().p("AgXAxIgFgUIgBgHIAGAFIACABIADADQAGADAJACQAHAAAIgCQAIgCAGgGIAEgEIgCAMQgCAOgHANIgFAKQgFAGgHAEIgDACIgCAAQgMgHgIgbgAgRhGQAEgIAGgEIABAAQACgBAEAFQAIAFACAEQALANAEARIADANQgKgKgMAAQgNgBgIADQgGACgCAEIgGAEQADgeAJgQg");
	this.shape_354.setTransform(993.7,467.2);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_355.setTransform(992.8,437.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#372511").s().p("AgKBOQgGgCgFgIQAKgNAEgSQACgFABgHIADgDQACgGACgGQACgGAAgEQABgIgEgHIgDgJIgCgLQgDgPgHgNIgFgJQAEgEAEgBQAHgEAEAFQAHAFAGAPQAIAVAAAhQAAAggIAZQgGAQgHAFQgCAEgEAAIgFgCg");
	this.shape_356.setTransform(997,429.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#E18F59").s().p("AgBAAIgGgIIACgBIAAgBQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABIADAEIAHADQADAGgEAFIgHgLg");
	this.shape_357.setTransform(987.7,428.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#4A7328").s().p("AASBQQgMgHgPgVIgNgSQgHgKAAgFQAAgHAGgDQADgCADAAQADAAACACQAEABAEADIAEAEQABAFAEACQADAeAJARQAEAJAFACIAAABQgDAAgFgDgAgXgNIgEgEQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgEADgGQAGgLAKgOQAOgTAQgGQAFgCAEAAQgLAGgJAcIgEATIgKAKIgLAJIgIgDg");
	this.shape_358.setTransform(990.1,429.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#000000").s().p("AgVAiQgFgCgDgEQgEgGACgJIACgLQAAgFgCgEQgEgLAHgJIABgBIADgCQAHgEAJgBQAIgBAGACQAIACAGAGIAEAEIAFAIQAEAHAAAHQAAAFgCAHQgDAGgEAFIgCADQgKAKgMAAIgCAAQgMAAgHgCg");
	this.shape_359.setTransform(994.3,429.3);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#609634").s().p("AgHBTIAAgBIgBAAQgFgCgEgJQgJgQgDgeIAGAEQADAEAFACQAHACAOAAQAMgBAJgJQgBAHgBAFQgEASgLANQgDAEgGAEQgFAFgCAAIgBAAgAAagaQgGgFgIgCQgIgDgGACQgKAAgGAEIgDADIgBAAIgHAFIACgGIADgUQAJgbAMgHQAAAAAAAAQAAAAAAAAQABAAAAAAQAAAAABAAIACACQAIAEAFAGIAEAJQAIANACAPIACALIgEgEg");
	this.shape_360.setTransform(993.7,429.2);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#EEC09E").s().p("AAeAYQgEgDgCgEQgDgGgBgIIgDgBIgDgCQgDgBAKgBQAAgHACgFQADgEAEgEIAHgFQgHAJAEALQACAEAAAFIgCALQgCAJAEAGIgGgEgAgFASIgRgHQgIgEgEgEIgCgDIAAAAIAMAEQgLgFgBgEIAAgCIACgBIAGAEIAEADIACAAIgCgBIgGgFQgLgKAJABIAKAHIAGAEQgMgOAAgDQAAgEALAJIAKAIQAEADgKgMIAAgCQAAgBAAAAQAAAAAAAAQAAgBAAAAQABAAAAAAQACgBAFAFIAFAIIAHALIAFAIQgCgCgDAAQgEAAgCACQgFACABAIIgCgBg");
	this.shape_361.setTransform(987.6,429.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgHgBgIIgDAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAAAQgDgBAKgBQAAgHACgFQADgFAEgEIAHgEQgHAIAEAMQACAEAAAFIgCALQgCAJAEAGIgGgEgAgFASIgRgHQgIgEgEgEIgCgDIAAAAIAMAEQgLgFgBgEIAAgCIACgBIAGAEQAEACAAABIACAAIgCgBIgGgFQgLgKAJABIAKAHIAGAEQgMgOAAgEQAAgDALAJIAKAIQAEADgKgNIAAgCIABgBQACgBAFAFIAFAIIAHALIAFAHIgFgBIgGABQgFADABAHIgCAAg");
	this.shape_362.setTransform(987.6,505.3);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#E18F59").s().p("AgBAAIgGgIIACgBIAAgBQAAAAAAAAQAAABAAAAQAAABABAAQAAABABAAIADAEQAEADADAAQADAGgEAGIgHgMg");
	this.shape_363.setTransform(987.7,504.3);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_364.setTransform(992.8,513.6);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#000000").s().p("AgVAiQgFgCgDgEQgEgGACgJIACgLQAAgFgCgEQgEgMAHgIIABgBIADgCQAHgEAJgBQAIgBAGACQAIACAGAFIAEAEIAFAJQAEAHAAAHQAAAFgCAHQgDAGgEAFIgCADQgKAJgMABIgCAAQgMAAgHgCg");
	this.shape_365.setTransform(994.3,505.3);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#6BD3D2").s().p("AgHBTIAAAAIgBAAQgFgDgEgJQgJgQgDgeIAGAEQADAEAFACQAHADAOgBQAMgBAJgJQgBAIgBAFQgEASgLANQgDADgGAFQgEAEgDAAIgBAAgAAagaQgGgFgIgCQgIgCgGABQgKABgGAEIgDACIgBABIgHAEIACgGIADgTQAJgcAMgHIACAAIACACQAIAEAFAGIAEAJQAIAOACAOIACALIgEgEg");
	this.shape_366.setTransform(993.7,505.2);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#5BB1B0").s().p("AASBRQgMgHgPgVIgNgSQgHgLAAgFQAAgHAGgDIAGgBIAFABQAEACAEADIAEAEIAFAHQADAdAJARQAEAJAFACIAAABQgDAAgFgCgAgXgNIgEgDQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQABgEADgFQAGgMAKgNQAOgUAQgGQAFgCAEAAQgLAHgJAbIgEAUIgKAKIgLAJQgDgBgFgDg");
	this.shape_367.setTransform(990.1,505.3);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#372511").s().p("AgKBOQgGgCgFgIQAKgNAEgSQACgFABgHIADgEQACgFACgGQACgGAAgEQABgIgEgHIgDgJIgCgLQgDgPgHgNIgFgJQAEgEAEgCQAHgDAEAFQAHAFAGAPQAIAVAAAhQAAAggIAZQgGAQgHAFQgCAEgEAAIgFgCg");
	this.shape_368.setTransform(997,505.5);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgCIABgCQAAABAAAAQAAABAAAAQAAABABAAQAAAAABABQABACACACQAEADADAAQADAGgEAFIgHgLg");
	this.shape_369.setTransform(987.7,409.2);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#EEC09E").s().p("AAeAYIgGgIQgDgFgBgJIgCAAIgEgCQgEAAAKgCQABgIADgEQACgFAFgEIAGgEQgGAJAEAKQACAGgBAEIgCALQgBAKADAFIgGgEgAgEARIgRgFQgJgFgEgEIgCgDIABAAQABAAALAEQgLgGgCgDIABgDQAAAAAAAAQAAAAABAAQAAAAAAAAQAAAAAAAAIAGAEIAEACIACABIgBgBIgHgGQgKgJAIABQACABAIAFIAHAFQgMgPgBgDQAAgDALAIIAKAJQAEACgKgMIAAgBIABgCQACgBAFAFIAFAIIAIALIAEAHIgFgBIgGABQgEADAAAHIgBgBg");
	this.shape_370.setTransform(987.5,410.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#372511").s().p("AgLBOQgFgCgFgIQALgNAEgRIACgNIADgDQACgFACgHQACgGAAgEQAAgIgDgIIgDgIIgCgLQgCgPgIgMIgEgKQADgEADgCQAIgCAEAEQAHAFAFAPQAJAVAAAhQAAAhgJAYQgFARgHAFQgCADgEAAIgGgCg");
	this.shape_371.setTransform(997,410.4);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#FFF6CD").s().p("AgUAiQgGgCgDgEQgDgFABgKIACgLQABgEgCgFQgEgLAGgJIABgBIADgDQAGgEAKAAQAIgBAHACQAIADAGAFIAEADIAFAJQADAHAAAHQAAAGgCAGQgCAGgEAGIgDACQgJAKgNAAIgDAAQgLAAgGgCg");
	this.shape_372.setTransform(994.2,410.2);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#424242").s().p("AgGBTIgBAAQgGgEgEgIQgJgRgDgdIAGAEQACAEAGACQAIACANAAQAMAAAKgKIgDANQgEARgLANQgCAEgIAFQgDAEgDAAIAAAAgAAagZQgGgGgIgCQgIgCgHAAQgJABgGAEIgDADIgCABIgGAEIABgHIAFgTQAIgbAMgHIACAAIADACQAHAEAFAGIAFAKQAHAMACAPIACALIgEgDg");
	this.shape_373.setTransform(993.7,410.2);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#393939").s().p("AASBQQgMgGgPgWQgJgLgEgHQgHgKAAgFQAAgHAGgDIAGgBIAFABIAIAEIAEAEIAEAIQAEAdAIARQAFAIAFAEIAAAAQgEAAgEgDgAgXgNQgDgCgBgCQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAIAEgJQAGgMAKgNQAOgUAQgGQAEgCAFAAQgMAHgIAbIgEATIgKAKIgLAJQgDAAgFgDg");
	this.shape_374.setTransform(990.1,410.2);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#E18F59").s().p("AgBAAIgGgHIABgCIABgBQAAAAAAAAQAAABAAAAQAAAAABABQAAAAABABQABACACACQAEADADAAQADAGgEAFIgHgLg");
	this.shape_375.setTransform(987.7,447.2);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#EEC09E").s().p("AAeAYIgGgHQgDgGgBgJIgCgBIgEgBQgEgBAKgCQABgHADgEQACgFAFgEIAGgEQgGAJAEAKQACAFgBAEIgCAMQgBAKADAFIgGgEgAgEARIgRgGQgJgEgEgEIgCgDIABAAQABAAALAEQgLgGgCgEIABgCIABAAIAGAEIAEACIACABIgBgBIgHgGQgKgKAIACQACAAAIAGQAHAGAAgBQgMgOgBgEQAAgDALAIIAKAJQAEADgKgNIAAgBIABgCQACgCAFAGIAFAIIAIALIAEAHIgFgBQgDAAgDABQgEADAAAHIgBgBg");
	this.shape_376.setTransform(987.5,448.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#372511").s().p("AgLBOQgFgCgFgIQALgNAEgRIACgNIADgDQACgFACgHQACgGAAgEQAAgIgDgHQgCgFgBgEIgCgLQgCgPgIgMIgEgKQADgEADgBQAIgDAEAEQAHAFAFAPQAJAVAAAhQAAAhgJAYQgFARgHAFQgCADgEAAIgGgCg");
	this.shape_377.setTransform(997,448.4);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AgUAiQgGgCgDgEQgDgFABgJIACgMQABgEgCgFQgEgLAGgIIABgCIADgCQAGgEAKgBQAIgBAHACQAIADAGAFIAEAEQADADACAFQADAHAAAHQAAAGgCAGQgCAGgEAGIgDACQgJAKgNAAIgDAAQgLAAgGgCg");
	this.shape_378.setTransform(994.2,448.2);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#628DD1").s().p("AgGBTIgBgBQgGgDgEgIQgJgRgDgeIAGAEQACAEAGACQAIADANgBQAMAAAKgKIgDAOQgEARgLANQgCADgIAFQgEAGgCAAIAAgBgAAagaQgGgFgIgDQgIgCgHABQgJABgGAEIgDACIgCACIgGAEIABgHIAFgTQAIgbAMgIIACAAIADACQAHAEAFAGIAFAKQAHANACAOIACAMIgEgEg");
	this.shape_379.setTransform(993.7,448.2);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#447BCD").s().p("AASBQQgMgHgPgUQgJgMgEgHQgHgKAAgGQAAgGAGgDQADgCADABIAFABQAEABAEAEIAEADIAEAIQAEAdAIARQAFAJAFACIAAABIgIgDgAgXgNQgDgCgBgCQgBgBAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgDADgGQAGgMAKgNQAOgVAQgFIAJgCQgMAHgIAbIgEATIgKAKIgLAKQgDgBgFgDg");
	this.shape_380.setTransform(990.1,448.2);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#E18F59").s().p("AgFAKIgCgBIAGgIIAHgLQAEAFgDAGQgDABgEACIgDAEQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAg");
	this.shape_381.setTransform(987.7,373.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#EEC09E").s().p("AAeAYQgEgEgDgFQgCgEAAgIQgKgBADgCQAAAAAAAAQABAAAAAAQABAAAAAAQABgBAAAAIADAAQABgIADgHIAGgHIAGgEQgEAGACAJIACALQAAAFgCAFQgEALAHAIIgHgEgAgcAYQAAgEAMgOIgGAFIgKAGQgJABALgJIAGgGIACgBIgCABIgEACIgGAEIgCAAIAAgCQABgEALgGIgMAEIAAgBIACgCQAEgEAIgEIARgHIACAAQgBAHAFADQACABAEAAQADAAACgBIgFAHIgHALIgFAIQgFAFgCgBQAAAAgBAAQAAAAAAAAQAAAAAAgBQAAAAAAAAIAAgCQAKgNgEAEIgKAHQgIAHgCAAIgBgBg");
	this.shape_382.setTransform(987.6,372.1);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#000000").s().p("AgIAkQgJgBgHgEIgDgCIgBgBQgHgJAEgLQACgFAAgEIgCgLQgCgKAEgGQADgEAFgCQAIgCANABQAMAAAKAJIACAEQAEAFADAGQACAHAAAEQAAAHgEAIIgFAIIgEAEQgGAFgIACQgFACgDAAIgGAAg");
	this.shape_383.setTransform(994.3,372.2);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#372511").s().p("AgKBOQgEgBgEgEIAFgJQAHgOADgOIACgLIADgJQAEgHgBgJQAAgDgCgHQgCgGgCgFIgDgDIgDgNQgEgRgKgOQAFgHAGgDQAHgDAEAFQAHAGAGAQQAIAZAAAgQAAAhgIAUQgGAQgHAFQgCADgDAAIgGgCg");
	this.shape_384.setTransform(997,372);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#4A7328").s().p("AAVBRQgQgGgOgTQgKgOgGgMQgDgFgBgEQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABAAIAEgFQAFgCADAAIALAJIAKAKIAEATQAJAcALAGQgEAAgFgCgAgXgIQgGgDAAgHQAAgFAHgKIANgSQAPgWAMgGQAFgDADAAIAAAAQgFAEgEAIQgJAQgDAeIgFAIIgEADIgIAFQgCACgDAAQgDAAgDgCg");
	this.shape_385.setTransform(990.1,372.2);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_386.setTransform(992.8,363.9);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#609634").s().p("AgDBTQgMgHgJgcIgDgTIgCgGIAHAEIABABIADADQAGAEAKAAQAGACAIgDQAIgCAGgFIAEgEIgCALQgCAOgIAOIgEAJQgFAGgIAEIgCACIgCAAIAAAAgAgRhGQAEgJAFgDIABAAIAAAAQACgBAGAFIAJAIQALAOAEARIACANQgJgJgMgBQgOgBgHADQgFACgDAEIgGAEQADgeAJgQg");
	this.shape_387.setTransform(993.7,372.2);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#E18F59").s().p("AgFAKIgCgBIAGgIIAHgLQAEAFgDAGIgHADIgDAEQgBABAAAAQgBABAAAAQAAAAAAABQAAAAAAAAg");
	this.shape_388.setTransform(987.7,297.1);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#372511").s().p("AgKBOQgEgBgEgEIAFgJQAHgNADgPIACgLIADgJQAEgHgBgJQAAgDgCgGQgCgGgCgGIgDgDQgBgHgCgFQgEgSgKgNQAFgIAGgCQAHgEAEAGQAHAFAGAQQAIAZAAAgQAAAhgIAVQgGAPgHAFQgBADgEAAIgGgCg");
	this.shape_389.setTransform(997,296);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_390.setTransform(992.8,287.9);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#5BB1B0").s().p("AAVBRQgQgFgOgUQgKgOgGgLQgDgGgBgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAIAEgEIAIgDIALAJIAKAKIAEATQAJAcALAGQgEAAgFgCgAgXgIQgGgCAAgIQAAgFAHgKIANgSQAPgVAMgHQAFgDADAAIAAABQgFACgEAJQgJARgDAeQgEACgBAFIgEAEQgEADgEABQgCACgDAAQgDAAgDgCg");
	this.shape_391.setTransform(990.1,296.2);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#000000").s().p("AgIAkQgJgBgHgEIgDgCIgBgBQgHgJAEgLQACgEAAgFIgCgLQgCgJAEgGQADgEAFgCQAIgDANABQAMAAAKAKIACADQAEAFADAGQACAHAAAEQAAAIgEAHIgFAIIgEAEQgGAGgIACQgFABgDAAIgGAAg");
	this.shape_392.setTransform(994.3,296.1);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#6BD3D2").s().p("AgDBTQgMgHgJgbIgDgTIgCgHIAHAFIABAAIADADQAGAEAKAAQAGACAIgDQAIgCAGgFIAEgEIgCALQgCAPgIANIgEAJQgFAGgIAEIgCACIgCAAIAAAAgAgRhGQAEgJAFgCIABAAIAAgBQACgBAGAGQAGAEADAEQALANAEASQABAFABAHQgJgJgMgBQgOAAgHACQgFACgDAEIgGAEQADgeAJgQg");
	this.shape_393.setTransform(993.7,296.2);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#EEC09E").s().p("AAeAXQgEgEgDgEQgCgFAAgHQgKgBADgCIADgBIADgBQABgIADgGQACgEAEgDIAGgEQgEAGACAJIACALQAAAFgCAEQgEALAHAJIgHgFgAgcAXQAAgDAMgOIgGAEIgKAHQgJABALgKIAGgFIACgBIgCAAIgEADIgGAEIgCgBIAAgCQABgEALgFIgMADIAAAAIACgCQAEgEAIgEIARgHIACAAQgBAHAFACQACACAEAAQADAAACgCIgFAIIgHALIgFAIQgFAFgCgBQAAAAgBAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIAAgCQAKgMgEADIgKAIQgIAGgCAAIgBgBg");
	this.shape_394.setTransform(987.6,296.1);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_395.setTransform(992.8,382.9);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#372511").s().p("AgKBOQgEgBgEgEIAFgJQAHgNADgPIACgLIADgJQAEgHgBgJQAAgDgCgGQgCgGgCgGIgDgDIgDgNQgEgRgKgOQAFgHAGgCQAHgEAEAGQAHAFAGAQQAIAZAAAgQAAAhgIAVQgGAPgHAFQgCADgDAAIgGgCg");
	this.shape_396.setTransform(997,391);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#E18F59").s().p("AgFAKIgCgBIAGgIIAHgLQAEAEgDAHQgDAAgEADIgDAEQgBAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAg");
	this.shape_397.setTransform(987.7,392.2);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#EEC09E").s().p("AAeAYQgEgFgDgEQgCgEAAgIQgKgBADgCIADgBIADAAQABgJADgGIAGgIIAGgDQgEAFACAKIACALQAAAFgCAEQgEALAHAJIgHgEgAgcAYQAAgDAMgPIgGAEIgKAHQgJACALgLIAGgFIACgBIgCAAIgEADIgGAEIgCgBIAAgBQABgEALgGIgMADIAAAAIACgCQAEgEAIgEIARgHIACAAQgBAHAFADIAGABQADAAACgCIgFAIIgHALIgFAIQgFAFgCgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgDQAKgMgEADIgKAIQgIAHgCAAIgBgBg");
	this.shape_398.setTransform(987.6,391.2);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#3A4D75").s().p("AAVBRQgQgGgOgTQgKgOgGgMQgDgFgBgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAIAEgEQAFgDADAAIALAJIAKAJIAEAUQAJAcALAGQgEAAgFgCgAgXgHQgGgEAAgHQAAgFAHgKIANgSQAPgVAMgHQAFgDADAAIAAABQgFADgEAIQgJAQgDAeIgFAIIgEADIgIAFQgCABgDABIgGgBg");
	this.shape_399.setTransform(990.1,391.2);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#48608E").s().p("AgDBTQgMgHgJgbIgDgUIgCgGIAHAEIABABIADADQAGAEAKAAQAGACAIgDQAIgCAGgFIAEgEIgCALQgCAPgIANIgEAJQgFAHgIADIgCACIgCAAIAAAAgAgRhGQAEgJAFgCIABAAIAAgBQACgBAGAGIAJAHQALAOAEARIACANQgJgJgMgBQgOgBgHADQgFACgDAEIgGAEQADgeAJgQg");
	this.shape_400.setTransform(993.7,391.2);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#000000").s().p("AgIAkQgJgBgHgEIgDgCIgBgBQgHgJAEgLQACgEAAgFIgCgLQgCgKAEgFQADgEAFgCQAIgDANABQAMAAAKAJIACAEQAEAFADAGQACAHAAAEQAAAHgEAIIgFAIIgEAEQgGAGgIACQgFABgDAAIgGAAg");
	this.shape_401.setTransform(994.3,391.2);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#E18F59").s().p("AgGAKIgBgCIAGgIIAHgLQAEAFgDAHQgDAAgEADQgCACgBACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAIgBgBg");
	this.shape_402.setTransform(987.7,316.2);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#EEC09E").s().p("AAfAXQgFgDgCgFQgDgFgBgHQgKgBAEgCIAEAAIACgBQABgJADgGQADgEADgDIAGgEQgDAFABAKIACAMQABAEgCAFQgEAKAGAJIgGgFgAgcAXQABgDAMgOIgHAEIgKAHQgIABAKgJIAHgGIABgBIgCABIgEADIgGADIgBAAIgBgCQACgFALgFQgLAEgBgBIgBAAIACgCQAEgEAJgEIARgGIABgBQAAAHAEADQADABADAAIAFgBIgEAHIgIALIgFAIQgFAGgCgCIgBgCIAAgCQAKgMgEADIgKAJQgHAGgDAAQAAAAAAgBQAAAAAAAAQgBAAAAAAQAAAAAAgBg");
	this.shape_403.setTransform(987.5,315.1);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#41210C").s().p("AgIAlQgKgCgGgDIgDgDIgBgBQgGgJAEgKQACgFgBgEIgCgMQgBgKADgFQADgEAGgCQAHgDANABQANAAAJAKIADADQAEAFACAHQACAGAAAEQAAAHgDAIQgCAFgDADIgEAEQgGAGgIACQgHACgGAAIgCAAg");
	this.shape_404.setTransform(994.2,315.1);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#E64A00").s().p("AAVBSQgQgHgOgUQgKgOgGgLIgEgJQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQABgCADgCQAFgDADAAIALAJQAFAGAFADIAEAUQAIAbAMAHIgJgBgAgXgIQgGgDAAgGQAAgGAHgKQAEgHAJgMQAPgVAMgGIAIgEIAAABQgFAEgFAIQgIAQgEAfQgDACgBAFIgEADIgIAFIgFABIgCAAIgEgBg");
	this.shape_405.setTransform(990.1,315.2);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#EC672C").s().p("AgXAxIgFgUIgBgGIAGAEIACACIADACQAGAEAJABQAHABAIgDQAIgCAGgFIAEgEIgCALQgCAPgHANIgFAJQgFAHgHADIgDACIgCABQgMgIgIgbgAgRhGQAEgIAGgDIABgBQACgBAEAGQAIAFACADQALANAEARIADAOQgKgKgMgBQgNgBgIADQgGADgCAEIgGAEQADgfAJgQg");
	this.shape_406.setTransform(993.7,315.1);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#372511").s().p("AgLBOQgDgCgDgDIAEgKQAIgNACgOIACgMQABgDACgFQADgIAAgHQAAgEgCgGQgCgHgCgFIgDgDIgCgNQgEgRgLgNQAFgIAFgCQAIgEAEAFQAHAFAFARQAJAYAAAhQAAAhgJAVQgFAOgHAFQgCAEgEAAIgGgCg");
	this.shape_407.setTransform(997,315);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#372511").s().p("AgLBPQgDgCgDgEIAEgKQAIgMACgPIACgLIADgJQADgHAAgIQAAgEgCgGQgCgHgCgFIgDgDIgCgNQgEgRgLgNQAFgIAFgCQAIgEAEAFQAHAFAFARQAJAYAAAhQAAAhgJAVQgFAPgHAFQgCADgEAAIgGgBg");
	this.shape_408.setTransform(997,334);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#E18F59").s().p("AgGAKIgBgCIAGgIIAHgKQAEAFgDAGQgDAAgEADQgCACgBACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAIgBgBg");
	this.shape_409.setTransform(987.7,335.2);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#FFF6CD").s().p("AgIAkQgKgBgGgEIgDgCIgBgBQgGgJAEgLQACgFgBgEIgCgLQgBgKADgFQADgEAGgCQAHgDANABQANAAAJAKIADACQAEAGACAGQACAGAAAFQAAAIgDAHIgFAJIgEADQgGAFgIADQgHABgFAAIgDAAg");
	this.shape_410.setTransform(994.2,334.1);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#424242").s().p("AgDBUQgMgIgIgbIgFgTIgBgGIAGAEIACABIADACQAGAEAJABQAHABAIgCQAIgDAGgFIAEgDIgCALQgCAOgHANIgFAKQgFAGgHAEIgDACgAgRhFQAEgJAGgDIABgBQACgBAEAGQAIAFACADQALANAEASIADANQgKgKgMAAQgNgBgIADQgGACgCAEIgGAEQADgeAJgQg");
	this.shape_411.setTransform(993.7,334.1);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#393939").s().p("AAVBSQgQgHgOgUQgKgNgGgMIgEgJQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQABgCADgCQAFgDADAAIALAJIAKAKIAEATQAIAbAMAHQgFAAgEgBgAgXgHQgGgDAAgHQAAgGAHgKQAEgHAJgLQAPgVAMgHIAIgEIAAACQgFACgFAKQgIAQgEAdIgEAIIgEADIgIAGIgFABIgGgBg");
	this.shape_412.setTransform(990.1,334.2);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#EEC09E").s().p("AAfAYQgFgEgCgFQgDgFgBgGQgKgCAEgCIAEgBIACAAQABgJADgGIAGgHIAGgEQgDAGABAJIACALQABAEgCAFQgEALAGAJIgGgEgAgcAYQABgDAMgPIgHAEQgIAHgCgBQgIACAKgKIAHgFIABgBIgCABIgEADIgGACQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIgBgCQACgDALgGQgLAEgBgBIgBAAIACgCQAEgEAJgEIARgHIABAAQAAAHAEADIAGABIAFgBIgEAHIgIAKIgFAIQgFAGgCgBIgBgCIAAgBQAKgMgEACIgKAIQgIAHgCAAIgBgBg");
	this.shape_413.setTransform(987.5,334.1);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#E18F59").s().p("AgGAJIgBgBIAGgIIAHgKQAEAFgDAGQgDAAgEADQgCACgBACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAAAIgBgCg");
	this.shape_414.setTransform(987.7,354.2);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#EEC09E").s().p("AAfAYQgFgEgCgFQgDgFgBgGQgKgCAEgCIAEgBIACAAQABgIADgHIAGgHIAGgEQgDAFABAKIACALQABAFgCAEQgEALAGAJIgGgEgAgcAYQABgEAMgOIgHAFQgIAFgCAAQgIACAKgKIAHgFIABgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAIgEACIgGADQAAABAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBIgBgCQACgDALgGQgLAEgBgBIgBAAIACgCQAEgEAJgFIARgGIABAAQAAAHAEADIAGABIAFgBIgEAHIgIALIgFAHQgFAHgCgCIgBgBIAAgCQAKgMgEACIgKAIQgIAHgCAAIgBgBg");
	this.shape_415.setTransform(987.5,353.1);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#000000").s().p("AgIAkQgKAAgGgEIgDgDIgBgBQgGgJAEgLQACgFgBgEIgCgMQgBgJADgFQADgEAGgCQAHgDANABQANAAAJAKIADACQAEAGACAGQACAGAAAFQAAAIgDAHIgFAJIgEADQgGAFgIADQgHABgFAAIgDAAg");
	this.shape_416.setTransform(994.2,353.1);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#447BCD").s().p("AAVBRQgQgGgOgUQgKgNgGgMIgEgJQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAQABgCADgCQAFgDADAAIALAJIAKAKIAEATQAIAbAMAHIgJgCgAgXgIQgGgCAAgIQAAgFAHgKQAEgHAJgMQAPgVAMgHIAIgCIAAAAQgFAEgFAIQgIARgEAdIgEAIIgEAEIgIAEIgFABIgGgBg");
	this.shape_417.setTransform(990.1,353.2);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#628DD1").s().p("AgDBTQgMgHgIgbIgFgTIgBgHIAGAEIACABIADADQAGAEAJABQAHAAAIgCQAIgCAGgGIAEgDIgCALQgCAPgHAMIgFAKQgFAGgHAEIgDACgAgRhGQAEgIAGgEIABAAQACgBAEAFQAIAFACAEQALANAEARIADANQgKgKgMAAQgNAAgIACQgGACgCAEIgGAEQADgdAJgRg");
	this.shape_418.setTransform(993.7,353.2);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#372511").s().p("AgLBPQgDgCgDgEIAEgKQAIgMACgPIACgLIADgIQADgIAAgIQAAgEgCgGQgCgHgCgFIgDgDIgCgNQgEgRgLgNQAFgHAFgDQAIgDAEAEQAHAFAFARQAJAYAAAhQAAAhgJAVQgFAPgHAFQgCADgEAAIgGgBg");
	this.shape_419.setTransform(997,353);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#D9D9D9").s().p("AgoW+MAAAgt8IBRAAMAAAAt8g");
	this.shape_420.setTransform(929.6,414.4);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#9F3D3D").s().p("Agt2+QBDBkAYAQIAABRIg8AIMAAAAnsIA8ADIAABRQgPAJhMBmg");
	this.shape_421.setTransform(938.5,414.4);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#402913").s().p("AB/TmMAAAgnPIAqgIMAAAAnjgAgRS/MAAAgmRIAngGMAAAAmigAioSVMAAAglPIAqgGMAAAAlhg");
	this.shape_422.setTransform(970.8,411.9);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#FAFAFD").s().p("Al1W+QBOhmAPgJIAAhRII2AnIBYAFIAACUgAkY1KQgYgQhFhkILrAAIAAB0IhYALIo2BGg");
	this.shape_423.setTransform(971.3,414.4);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#646262").s().p("AgqU2IAAgrMAAAgoYIAAgiIBVgKMAAAApzg");
	this.shape_424.setTransform(1004.4,412.7);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#985E2F").s().p("ACXTsMAAAgnkIB6gUMAAAAoZgAAFTDMAAAgmiIBogRMAAAAnQgAiQSbMAAAglhIBtgSMAAAAmQgAkQR4MAASgktIBEgLMAAAAlPg");
	this.shape_425.setTransform(972.6,412.6);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#838383").s().p("Aj8UMIg+gEMAAAgnrIA+gIII3hHIAAAiIh6AUIgqAIIhpARIgqAGIhqASIgqAGIhFALMgASAktIBXAXIAqAMIBqAeIAqALIBpAcIAqAMIB6AhIAAArg");
	this.shape_426.setTransform(968.4,413);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#75614B").s().p("EAuEAaIIAAs7QC/AZC1hJQChhBCFiGQD3j4AAleQAAlfj3j4Qj3j4leAAQgjAAgiADIAAgDMh3NAAAIAAs5MB3NAAAIAAADQAigCAjAAQKyAAHoHqQHoHqAAKzQAAK1noHqQnoHqqyAAIhFgBg");
	this.shape_427.setTransform(412.4,428.9);

	this.instance_3 = new lib.bg("synched",0);
	this.instance_3.setTransform(503.3,460.4,1.542,1.542,0,0,0,395.3,314.3);
	this.instance_3.alpha = 0.301;

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#459541").s().p("EhblBNFMAAAiaJMC3LAAAMAAACaJg");
	this.shape_428.setTransform(497,460.7);

	this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = this.shape_101.mask = this.shape_102.mask = this.shape_103.mask = this.shape_104.mask = this.shape_105.mask = this.shape_106.mask = this.shape_107.mask = this.shape_108.mask = this.shape_109.mask = this.shape_110.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.shape_114.mask = this.shape_115.mask = this.shape_116.mask = this.shape_117.mask = this.shape_118.mask = this.shape_119.mask = this.shape_120.mask = this.shape_121.mask = this.shape_122.mask = this.shape_123.mask = this.shape_124.mask = this.shape_125.mask = this.shape_126.mask = this.shape_127.mask = this.shape_128.mask = this.shape_129.mask = this.shape_130.mask = this.shape_131.mask = this.shape_132.mask = this.shape_133.mask = this.shape_134.mask = this.shape_135.mask = this.shape_136.mask = this.shape_137.mask = this.shape_138.mask = this.shape_139.mask = this.shape_140.mask = this.shape_141.mask = this.shape_142.mask = this.shape_143.mask = this.shape_144.mask = this.shape_145.mask = this.shape_146.mask = this.shape_147.mask = this.shape_148.mask = this.shape_149.mask = this.shape_150.mask = this.shape_151.mask = this.shape_152.mask = this.shape_153.mask = this.shape_154.mask = this.shape_155.mask = this.shape_156.mask = this.shape_157.mask = this.shape_158.mask = this.shape_159.mask = this.shape_160.mask = this.shape_161.mask = this.shape_162.mask = this.shape_163.mask = this.shape_164.mask = this.shape_165.mask = this.shape_166.mask = this.shape_167.mask = this.shape_168.mask = this.shape_169.mask = this.shape_170.mask = this.shape_171.mask = this.shape_172.mask = this.shape_173.mask = this.shape_174.mask = this.shape_175.mask = this.shape_176.mask = this.shape_177.mask = this.shape_178.mask = this.shape_179.mask = this.shape_180.mask = this.shape_181.mask = this.shape_182.mask = this.shape_183.mask = this.shape_184.mask = this.shape_185.mask = this.shape_186.mask = this.shape_187.mask = this.shape_188.mask = this.shape_189.mask = this.shape_190.mask = this.shape_191.mask = this.shape_192.mask = this.shape_193.mask = this.shape_194.mask = this.shape_195.mask = this.shape_196.mask = this.shape_197.mask = this.shape_198.mask = this.shape_199.mask = this.shape_200.mask = this.shape_201.mask = this.shape_202.mask = this.shape_203.mask = this.shape_204.mask = this.shape_205.mask = this.shape_206.mask = this.shape_207.mask = this.shape_208.mask = this.shape_209.mask = this.shape_210.mask = this.shape_211.mask = this.shape_212.mask = this.shape_213.mask = this.shape_214.mask = this.shape_215.mask = this.shape_216.mask = this.shape_217.mask = this.shape_218.mask = this.shape_219.mask = this.shape_220.mask = this.shape_221.mask = this.shape_222.mask = this.shape_223.mask = this.shape_224.mask = this.shape_225.mask = this.shape_226.mask = this.shape_227.mask = this.shape_228.mask = this.shape_229.mask = this.shape_230.mask = this.shape_231.mask = this.shape_232.mask = this.shape_233.mask = this.shape_234.mask = this.shape_235.mask = this.shape_236.mask = this.shape_237.mask = this.shape_238.mask = this.shape_239.mask = this.shape_240.mask = this.shape_241.mask = this.shape_242.mask = this.shape_243.mask = this.shape_244.mask = this.shape_245.mask = this.shape_246.mask = this.shape_247.mask = this.shape_248.mask = this.shape_249.mask = this.shape_250.mask = this.shape_251.mask = this.shape_252.mask = this.shape_253.mask = this.shape_254.mask = this.shape_255.mask = this.shape_256.mask = this.shape_257.mask = this.shape_258.mask = this.shape_259.mask = this.shape_260.mask = this.shape_261.mask = this.shape_262.mask = this.shape_263.mask = this.shape_264.mask = this.shape_265.mask = this.shape_266.mask = this.shape_267.mask = this.shape_268.mask = this.shape_269.mask = this.shape_270.mask = this.shape_271.mask = this.shape_272.mask = this.shape_273.mask = this.shape_274.mask = this.shape_275.mask = this.shape_276.mask = this.shape_277.mask = this.shape_278.mask = this.shape_279.mask = this.shape_280.mask = this.shape_281.mask = this.shape_282.mask = this.shape_283.mask = this.shape_284.mask = this.shape_285.mask = this.shape_286.mask = this.shape_287.mask = this.shape_288.mask = this.shape_289.mask = this.shape_290.mask = this.shape_291.mask = this.shape_292.mask = this.shape_293.mask = this.shape_294.mask = this.shape_295.mask = this.shape_296.mask = this.shape_297.mask = this.shape_298.mask = this.shape_299.mask = this.shape_300.mask = this.shape_301.mask = this.shape_302.mask = this.shape_303.mask = this.shape_304.mask = this.shape_305.mask = this.shape_306.mask = this.shape_307.mask = this.shape_308.mask = this.shape_309.mask = this.shape_310.mask = this.shape_311.mask = this.shape_312.mask = this.shape_313.mask = this.shape_314.mask = this.shape_315.mask = this.shape_316.mask = this.shape_317.mask = this.shape_318.mask = this.shape_319.mask = this.shape_320.mask = this.shape_321.mask = this.shape_322.mask = this.shape_323.mask = this.shape_324.mask = this.shape_325.mask = this.shape_326.mask = this.shape_327.mask = this.shape_328.mask = this.shape_329.mask = this.shape_330.mask = this.shape_331.mask = this.shape_332.mask = this.shape_333.mask = this.shape_334.mask = this.shape_335.mask = this.shape_336.mask = this.shape_337.mask = this.shape_338.mask = this.shape_339.mask = this.shape_340.mask = this.shape_341.mask = this.shape_342.mask = this.shape_343.mask = this.shape_344.mask = this.shape_345.mask = this.shape_346.mask = this.shape_347.mask = this.shape_348.mask = this.shape_349.mask = this.shape_350.mask = this.shape_351.mask = this.shape_352.mask = this.shape_353.mask = this.shape_354.mask = this.shape_355.mask = this.shape_356.mask = this.shape_357.mask = this.shape_358.mask = this.shape_359.mask = this.shape_360.mask = this.shape_361.mask = this.shape_362.mask = this.shape_363.mask = this.shape_364.mask = this.shape_365.mask = this.shape_366.mask = this.shape_367.mask = this.shape_368.mask = this.shape_369.mask = this.shape_370.mask = this.shape_371.mask = this.shape_372.mask = this.shape_373.mask = this.shape_374.mask = this.shape_375.mask = this.shape_376.mask = this.shape_377.mask = this.shape_378.mask = this.shape_379.mask = this.shape_380.mask = this.shape_381.mask = this.shape_382.mask = this.shape_383.mask = this.shape_384.mask = this.shape_385.mask = this.shape_386.mask = this.shape_387.mask = this.shape_388.mask = this.shape_389.mask = this.shape_390.mask = this.shape_391.mask = this.shape_392.mask = this.shape_393.mask = this.shape_394.mask = this.shape_395.mask = this.shape_396.mask = this.shape_397.mask = this.shape_398.mask = this.shape_399.mask = this.shape_400.mask = this.shape_401.mask = this.shape_402.mask = this.shape_403.mask = this.shape_404.mask = this.shape_405.mask = this.shape_406.mask = this.shape_407.mask = this.shape_408.mask = this.shape_409.mask = this.shape_410.mask = this.shape_411.mask = this.shape_412.mask = this.shape_413.mask = this.shape_414.mask = this.shape_415.mask = this.shape_416.mask = this.shape_417.mask = this.shape_418.mask = this.shape_419.mask = this.shape_420.mask = this.shape_421.mask = this.shape_422.mask = this.shape_423.mask = this.shape_424.mask = this.shape_425.mask = this.shape_426.mask = this.shape_427.mask = this.instance_3.mask = this.shape_428.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_428},{t:this.instance_3},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,808);


// stage content:
(lib.Racingaroundacurve = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mc_finishline("synched",0);
	this.instance.setTransform(707.4,556.8,1,1,0,0,0,2.6,59.4);

	this.instance_1 = new lib.mc_nidle2();
	this.instance_1.setTransform(454,65.9,1,1,0,0,0,1,23.8);

	this.instance_2 = new lib.mc_nidle1();
	this.instance_2.setTransform(307.5,65.9,1,1,0,0,0,1,23.8);

	this.instance_3 = new lib.mc_bg();
	this.instance_3.setTransform(547.4,460.7,1,1,0,0,0,547.4,460.7);

	this.instance_4 = new lib.mc_purpleCar();
	this.instance_4.setTransform(530.2,470,1.1,1.1,0,0,0,18.8,9.7);

	this.instance_5 = new lib.mc_redCar();
	this.instance_5.setTransform(530.2,446.4,1.1,1.1,0,0,0,18.8,9.6);

	this.instance_6 = new lib.mc_patch();
	this.instance_6.setTransform(511.6,758.1,1.25,1.25,0,0,0,512.6,31.5);

	this.instance_7 = new lib.mc_redCarcras();
	this.instance_7.setTransform(562.2,175.7,1.318,1.323,0,180,0,18.9,9.6);

	this.instance_8 = new lib.mc_perplecarAnimation();
	this.instance_8.setTransform(-71.2,323.6,1,1,0,0,0,23.2,13.6);

	this.instance_9 = new lib.mc_RedcarAnimation();
	this.instance_9.setTransform(-71.2,152.6,1,1,0,0,0,23.2,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(405.7,371.3,1219.4,986.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;