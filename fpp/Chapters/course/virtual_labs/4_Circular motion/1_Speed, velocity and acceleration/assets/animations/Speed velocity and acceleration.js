(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 808,
	fps: 24,
	color: "#999999",
	manifest: [
		{src:"images/car.png?1495448007945", id:"car"},
		{src:"images/car1.png?1495448007945", id:"car1"},
		{src:"images/Cutpng.jpg?1495448007945", id:"Cutpng"},
		{src:"images/road.jpg?1495448007945", id:"road"},
		{src:"images/road1.jpg?1495448007945", id:"road1"}
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


(lib.mc_line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D6D6D6").s().p("AAAJBIAAheIgZAAIAAhaIAZAAIAABaIAaAAIAABegAAAGJIAAhaIgZAAIAAhaIAZAAIAABaIAaAAIAABagAAADVIAAhaIgZAAIAAhZIAZAAIAABZIAaAAIAABagAAADVgAAAAiIAAhYIgZAAIAAhaIAZAAIAABaIAaAAIAABYgAAAiQIAAhaIAaAAIAABagAgZjqIAAhaIAZAAIAABagAAAlEIAAhaIgZAAIAAhaIAZAAIAABaIAaAAIAABagAAAn4IAAhJIAaAAIAABJg");
	this.shape.setTransform(2.6,57.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#262626").s().p("AgZJBIAAheIAZAAIAABegAAAHjIAAhaIgZAAIAAhaIAZAAIAABaIAaAAIAABagAAAHjgAAAEvIAAhaIgZAAIAAhaIAZAAIAABaIAaAAIAABagAAAB7IAAhZIgZAAIAAhYIAZAAIAABYIAaAAIAABZgAAAg2IAAhaIgZAAIAAhaIAZAAIAABaIAaAAIAABagAAAjqIAAhaIgZAAIAAhaIAZAAIAABaIAaAAIAABagAAAjqgAAAmeIAAhaIgZAAIAAhJIAZAAIAABJIAaAAIAABag");
	this.shape_1.setTransform(2.6,57.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.2,115.6);


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


(lib.mc_finish = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D0D0D").s().p("AhLFZIAAgZIBCAMIAAhQIhCgMIAAgYICXAbIAAAYIhDgMIAABQIBDAMIAAAZgAAuDBQAHgOADgLQAEgLgBgKQAAgMgDgHQgDgHgGgDQgFgCgFAAQgHAAgEADQgEAEgEAHIgHAQQgFAPgFAKQgDALgJAFQgHAGgNAAQgQAAgKgIQgKgHgGgNQgEgNAAgRQAAgTAEgRQAGgRAIgLIATAIQgKAQgEAOQgEAOAAANQABAOAFAIQAGAIALABQAHAAAFgFQAEgDADgJIAIgVIAIgUQAEgJAIgEQAHgGANAAQAQAAAKAIQALAHAFANQAEANAAAQQAAANgCALIgGASIgFANgAhLAgIAAgYICXAbIAAAYgAhLgjIAAgZIByg4IhygVIAAgYICXAbIAAAZIhwA4IBwAVIAAAYgAhLjOIAAgZICXAcIAAAYgAA5juIAAhVIg0gJIAABJIgRgDIAAhKIg/gLIAAgYICXAaIAABug");
	this.shape.setTransform(16.3,53.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E5E5E5").s().p("AiCG3IAAgKIEFBEIAAALgAiCnyIAAgJIEFBEIAAAJg");
	this.shape_1.setTransform(13.1,52.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#BEBFBF").s().p("AiCHFIAAgNIEFBFIAAAMgAiCn6IAAgOIEFBEIAAAOg");
	this.shape_2.setTransform(13.1,52.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F8F8F8").s().p("AhfG3IAAufIC/AyIAAOfg");
	this.shape_3.setTransform(16.7,53.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,26.3,104.4);


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
	this.shape_32.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_32.setTransform(488.8,286.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#E18F59").s().p("AgJAGIgBAAQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIADgEQADgDABgDQAGgDAFAEIgLAHIgHAGIgCgCg");
	this.shape_33.setTransform(479.8,291.7);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#EEC09E").s().p("AgHAkIgBgBIAEgGIADgEIAAgCIgBABIgFAGQgKALABgJIAHgJIAFgHQgPAMgDABQgDAAAIgMIAIgJQADgEgMAKIgCAAIgBgBQgCgDAGgEIAHgGIALgGIAHgFQgBADAAADQAAADABACQADAFAHgBIgBACIgGAQIgIANIgDABIAAAAIAEgMQgFALgEABIgCAAgAgCgTIgMgCQgEgDgEgFIgEgGQAIAGALgEQAEgBAFAAIALABQAJADAFgEIgDAFQgEAFgDACQgHADgHABIgBACQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAIAAABQgBAAgBgHg");
	this.shape_34.setTransform(480.7,291.8);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#5BB1B0").s().p("AgTAdQgEgBgGgDIgYgQQgTgNgGgPQgCgGAAgDQAGAKAcAJQAIADAKABIAKAKIAJAKQgBADgDAFIgDAEIgDACIAAAAgAAJAXQgCgCAAgEQAAgDACgCIAEgIIAEgEQAEAAADgEQAdgCAQgKQAJgDACgGIABAAQAAAEgDAEQgGAMgVAOIgSANQgJAHgGAAIgBAAQgGAAgCgGg");
	this.shape_35.setTransform(480.7,289.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgaAcIgBAAIgDgDQgDgHgBgJQgCgIADgGQACgIAFgFIAEgEIAIgGQAHgDAHAAQAFAAAGACIALAHIAEADQAJAJAAAKQABAOgDAHQgBAGgFACQgFAEgJgCIgLgCQgFAAgEACIgIABQgGAAgFgEg");
	this.shape_36.setTransform(480.7,285.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#6BD3D2").s().p("AAcAYQAEgDACgFQACgIAAgNQgBgLgJgJQAHABAFABQASAEAMALQAEACAEAGQAFAGAAABIgBABIAAAAQgCAGgJADQgQAKgdACIAEgFgAgcAcQgKgBgIgDQgcgIgGgLQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIACgCQAEgIAGgEIAJgFQANgHAOgCIAKgCIgDAEQgFAGgCAHQgDAIACAHQAAAIAEAHIADADIAAABIAEAGIgGgBg");
	this.shape_37.setTransform(480.7,285.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#372511").s().p("AAlAIQgFgCgHgBIgEgDIgLgEQgGgCgEAAQgIgBgHAEIgIADIgLACQgOADgNAGIgJAFQgDgDgCgEQgDgHAFgEQAEgGAPgGQAUgIAgAAQAggBAYAJQAQAGAEAGQAGAEgDAHQgDAFgHAGQgNgLgRgDg");
	this.shape_38.setTransform(480.8,282.6);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_39.setTransform(561.6,286.7);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E18F59").s().p("AgJAGIgBAAQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAgBIAEgEIADgGQAFgDAGAEIgLAHIgIAGIgBgCg");
	this.shape_40.setTransform(552.6,291.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#EEC09E").s().p("AgHAkIgBgBIAEgGIACgEIABgCIgCABIgEAGQgKALACgJIAFgJIAFgHQgOAMgDABQgEAAAJgMIAHgJQAEgEgNAKIgBAAIgBgBQgBgDAEgEIAIgGIALgGIAHgFIgBAGIABAFQACAFAIgBIgBACIgGAQQgEAIgEAFIgDABIAAAAIAEgMQgGALgDABIgCAAgAgDgTQgGgBgEgBQgFgDgEgFQgDgCgCgEQAIAGAMgEQAEgBAFAAIAKABQAJADAHgEIgFAFQgCAFgFACQgGADgIABIAAACQgBABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIAAABQgBAAgCgHg");
	this.shape_41.setTransform(553.6,291.8);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgaAcIgBAAIgCgDQgFgHAAgJQgBgIACgGQACgIAFgFIAEgEIAJgGQAHgDAGAAQAFAAAGACIALAHIADADQAKAJAAAKQABAOgDAHQgCAGgDACQgGAEgJgCIgLgCQgFAAgEACIgIABQgGAAgFgEg");
	this.shape_42.setTransform(553.5,285.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#609634").s().p("AAcAYQAEgDACgFQADgIgBgNQgBgLgJgJQAHABAFABQASAEANALIAHAIQAGAGgBABIgBABIAAAAQgDAGgIADQgQAKgdACIAEgFgAgcAcQgJgBgKgDQgagIgHgLIAAgDIACgCQAEgIAGgEIAJgFQAMgHAPgCIALgCIgEAEQgFAGgCAHQgDAIABAHQABAIAEAHIACADIABABQACAEADACIgHgBg");
	this.shape_43.setTransform(553.5,285.9);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#372511").s().p("AAkAIQgFgCgHgBIgDgDIgLgEQgGgCgEAAQgIgBgHAEIgIADIgLACQgPADgMAGIgJAFQgEgDgBgEQgEgHAFgEQAFgGAPgGQAUgIAgAAQAfgBAZAJQAPAGAFAGQAGAEgEAHQgCAFgHAGQgNgLgSgDg");
	this.shape_44.setTransform(553.7,282.6);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#4A7328").s().p("AgTAdQgEgBgFgDQgMgGgNgKQgTgNgGgPIgCgJQAHAKAaAJQAKADAJABIAKAKIAJAKIgDAIIgEAEIgDACIAAAAgAAJAXIgBgGIABgFQABgEADgEIAEgEQAEAAADgEQAdgCAQgKQAIgDADgGIABAAQAAAEgDAEQgGAMgVAOIgSANQgJAHgGAAIgBAAQgGAAgCgGg");
	this.shape_45.setTransform(553.5,289.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E18F59").s().p("AgHAHIgDgBQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBQACgBABgDQADgDAAgDQAHgDAEAEIgLAHIgGAGg");
	this.shape_46.setTransform(443.4,291.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#E64A00").s().p("AgUAdIgIgEQgLgGgNgKQgUgNgGgPIgCgJQAHALAbAIQAIADALABQACAFAIAFIAIAKQAAADgEAFQgBADgCABIgDACIgBAAgAAIAXQgBgCABgEIAAgFIAFgHIAEgFQAEAAADgDQAdgDAQgJQAJgEADgGIAAAAQAAAEgCAEQgHAMgUAOQgMAJgHAEQgKAHgFAAIgBAAQgGAAgDgGg");
	this.shape_47.setTransform(444.4,289.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EEC09E").s().p("AAAAjQAAAAAEgMQgFAMgEABIgDgBIAAgBIAEgGIACgEIABgCIgBABIgGAHQgIAKABgIIAGgKQAFgGgBAAQgNAMgDAAQgFAAAJgLIAIgKQACgDgLAJIgBABIgCgBQgCgDAGgEIAHgGIAKgHIAHgEIAAAFQAAAEAAACQADAEAHAAIAAABIgGARQgEAIgEAEIgDACIAAgBgAgCgTIgMgDQgEgCgDgFIgFgGQAJAGAJgEQAGgCAEABIALACQAJABAFgDQgBADgDADQgDADgEACQgGADgHABIgBADIgCAEIAAABQgBAAgBgIg");
	this.shape_48.setTransform(444.5,291.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#41210C").s().p("AgaAdIgBgCIgDgDQgDgGgBgIQgCgJADgHQACgHAFgGIAEgEIAIgFQAHgDAHAAQAFAAAGACQAGADAFADIADADQAKAJAAALQABAOgDAHQgCAGgEACQgFAEgJgCIgMgCQgDAAgGABQgEACgEAAQgFAAgFgDg");
	this.shape_49.setTransform(444.5,285.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EC672C").s().p("AAcAXQAEgCACgGQADgHgBgNQAAgLgKgJIANACQARAEAMAKQAEACAFAHQAFAFgBACIAAABQgDAGgJAEQgQAJgdACQADgCABgEgAgbAcQgLgBgIgEQgbgHgHgMIAAgCIADgDQADgHAGgFIAJgEQANgHAOgCIALgDIgEAFQgFAFgCAHQgDAKACAGQABAIADAHIADACIABACIAEAGIgGgBg");
	this.shape_50.setTransform(444.4,285.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#372511").s().p("AAlAHIgNgCIgDgDQgFgCgGgCQgGgDgEABQgIAAgHACIgIAEIgLACQgOACgNAHIgJAFIgGgHQgCgHAFgEQAEgGAPgGQAUgIAggBQAgAAAYAJQAQAGAFAGQAEAEgDAHQgDAFgHAGQgMgLgRgEg");
	this.shape_51.setTransform(444.6,282.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#E18F59").s().p("AABACIgLgHQAGgEAFADQAAADADADIAEAEQAAABABAAQAAABABAAQAAAAAAAAQABAAAAAAIgBABIgCABIgHgGg");
	this.shape_52.setTransform(354.8,291.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#393939").s().p("AASAbIgEgEQgDgFAAgDIAJgKQAGgFADgFIATgEQAagIAHgLQAAAEgCAFQgFAPgVANQgMAKgMAGIgIAEIgBAAIgCgCgAgRAdQgFAAgKgHQgHgEgLgJQgUgOgHgMQgDgEAAgEIAAAAQAEAGAIAEQAQAJAdADQADADAEAAIAEAFIAFAHIABAFIgBAGQgDAGgGAAIgBAAg");
	this.shape_53.setTransform(353.8,289.4);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#EEC09E").s().p("AgDAXIADAMIAAABIgCgCQgEgEgEgIIgGgRIAAgBQAHAAACgEIABgGIgBgFIAHAEIALAHIAHAGQAGAEgBADIgCABIgBgBQgNgJADADIAIAKQAJALgEAAQgDAAgOgMIAFAGIAFAKQACAIgKgKIgGgHIAAgBIAAACIADAEIADAGIAAABIgBABQgFgBgFgMgAAAgMIAAgEIgBgDQgIgBgGgDQgEgCgDgDIgEgGQAFADAJgBIAMgCQAEgBAEACQALAEAIgGIgEAGQgDAFgFACQgEACgHABQgCAIgCAAIAAgBg");
	this.shape_54.setTransform(353.7,291.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#424242").s().p("AhEASQgIgEgEgGIAAgBQgBgCAGgFIAIgJQANgKAQgEIANgCQgKAJAAALQAAANADAHQACAGADACIAEAGQgdgCgQgJgAAbAXIABgCIACgCQAEgHABgIQABgGgCgKQgDgHgFgFIgDgFIALADQAOACAMAHIAJAEQAGAFAEAHIACADIAAACQgHAMgaAHIgTAFIgGABIAEgGg");
	this.shape_55.setTransform(353.8,285.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#372511").s().p("AhLALQgEgHAFgEQAFgGAQgGQAYgJAgAAQAgABAUAIQAPAGAFAGQAEAEgDAHQgBAEgEADIgKgFQgLgHgPgCIgLgCIgIgEQgHgCgJAAQgDgBgGADIgMAEIgCADIgNACQgRAEgNALQgHgGgCgFg");
	this.shape_56.setTransform(353.6,282.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFF6CD").s().p("AAIAeQgFgBgEAAIgLACQgKACgFgEQgDgCgCgGQgDgHAAgOQAAgLAKgJIADgDIAMgGQAFgCAFAAQAHAAAHADIAJAFIADAEQAFAGADAHQACAHgBAJQgBAIgEAGIgCADIgBACQgFADgGAAQgEAAgEgCg");
	this.shape_57.setTransform(353.8,285.3);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#E18F59").s().p("AgIAHIgCgBQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIAEgEQADgDAAgDQAGgDAFAEIgLAHIgHAGg");
	this.shape_58.setTransform(334.7,291.7);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#447BCD").s().p("AgUAdIgIgEQgMgGgNgKQgUgNgFgPIgCgJQAHALAaAIQAJADAKABIAKAKIAJAKQAAADgEAFIgDAEIgDACIgBAAgAAIAXIgBgGIABgFQABgDAEgEIAEgFQAEAAADgDQAdgDAQgJQAIgEADgGIABAAIgCAIQgHAMgVAOQgLAJgHAEQgKAHgFAAIgBAAQgGAAgDgGg");
	this.shape_59.setTransform(335.7,289.4);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EEC09E").s().p("AAAAjIAEgMQgGAMgEABIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAIADgGIACgEIABgCIgBABIgFAHQgKAKACgIQAAgBAFgJQAGgGgBAAQgOAMgDAAQgEAAAJgLIAIgKQACgDgMAJIgBABIgCgBQgBgDAGgEIAHgGIALgHIAGgEIgBAFIABAGQAEAEAHAAIgBABIgGARQgFAIgDAEIgDACIAAgBgAgDgTQgGgBgFgCQgFgCgDgFIgEgGQAIAGALgEQAFgCADABIAMACQAJABAFgDIgEAGQgDADgEACQgGADgIABIgBADIgBAEIAAABQgBAAgCgIg");
	this.shape_60.setTransform(335.8,291.9);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgZAdIgCgCIgCgDQgEgGgBgIQgBgJADgHQACgHAFgGIADgEIAJgFQAHgDAGAAQAGAAAGACQAGADAFADIADADQAJAJAAALQABAOgCAHQgDAGgDACQgGAEgIgCIgMgCQgEAAgFABQgEACgEAAQgGAAgEgDg");
	this.shape_61.setTransform(335.7,285.3);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#628DD1").s().p("AAcAXQADgCADgGQACgHgBgNQAAgLgJgJIAMACQASAEAMAKQAEACAEAHQAGAFgBACIgBABQgDAGgIAEQgQAJgdACIAEgGgAgcAcQgKgBgJgEQgagHgHgMIAAgCIACgDQAEgHAFgFIAKgEQAMgHAPgCIAKgDIgDAFQgFAFgCAHQgDAKABAGQABAIAEAHIACACIACACIADAGIgGgBg");
	this.shape_62.setTransform(335.7,285.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#372511").s().p("AAkAHIgMgCIgDgDQgFgCgGgCQgGgDgEABQgIAAgHACIgJAEIgKACQgPACgMAHIgKAFQgEgDgBgEQgCgHADgEQAGgGAOgGQAVgIAggBQAfAAAZAJQAQAGAEAGQAFAEgDAHQgDAFgHAGQgMgLgSgEg");
	this.shape_63.setTransform(335.9,282.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_64.setTransform(380,286.7);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#E18F59").s().p("AgIAGIgCAAQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABgBIADgEQADgDAAgDQAGgDAFAEIgLAHIgHAGIgBgCg");
	this.shape_65.setTransform(371,291.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EEC09E").s().p("AgHAkIgBgBIAEgGIACgEIABgCIgBABIgFAGQgKALABgJIAHgJIAEgHQgOAMgDABQgDAAAIgMIAIgJQADgEgMAKIgCAAIgCgBQgBgDAFgEIAIgGIAKgGIAIgFIgBAGIAAAFQAEAFAHgBIgBACQgDAGgDAKQgEAIgEAFIgDABIAAAAIAEgMQgGALgEABIgBAAgAgCgTIgMgCQgEgDgEgFQgDgCgBgEQAIAGALgEQAEgBAFAAIAKABQAJADAGgEIgDAFQgEAFgDACQgHADgIABIAAACQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAIAAABQgBAAgBgHg");
	this.shape_66.setTransform(372,291.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgaAcIgBAAIgCgDQgEgHgBgJQgBgIADgGQABgIAGgFIADgEIAJgGQAHgDAGAAQAFAAAHACIAKAHQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAJAJAAAKQABAOgCAHQgCAGgEACQgGAEgJgCIgLgCQgEAAgFACIgIABQgGAAgFgEg");
	this.shape_67.setTransform(372,285.3);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#372511").s().p("AAkAIQgEgCgIgBQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBgBAAAAIgLgEQgGgCgEAAQgIgBgHAEIgIADIgLACQgOADgNAGIgJAFQgEgDgBgEQgDgHAEgEQAFgGAOgGQAVgIAgAAQAfgBAZAJQAPAGAFAGQAGAEgDAHQgDAFgHAGQgNgLgSgDg");
	this.shape_68.setTransform(372.1,282.6);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#48608E").s().p("AAcAYQAEgDACgFQADgIgBgNQgBgLgJgJQAIABAEABQASAEANALQADACAEAGQAGAGgBABIgBABIAAAAQgCAGgJADQgQAKgcACIADgFgAgcAcQgJgBgJgDQgbgIgHgLIAAgDIACgCQADgIAHgEIAJgFQANgHAOgCIALgCIgEAEQgFAGgCAHQgDAIACAHQAAAIAEAHIACADIACABQABAEADACIgHgBg");
	this.shape_69.setTransform(371.9,285.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#3A4D75").s().p("AgTAdQgEgBgFgDQgLgGgOgKQgTgNgGgPQgCgGAAgDQAHAKAbAJQAJADAJABIAKAKIAJAKQAAADgDAFIgEAEIgDACIAAAAgAAIAXIAAgGIABgFIAEgIIAFgEQADAAAEgEQAcgCAQgKQAJgDACgGIABAAQAAAEgCAEQgHAMgVAOIgRANQgKAHgFAAIgBAAQgHAAgDgGg");
	this.shape_70.setTransform(371.9,289.4);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E18F59").s().p("AgIAHIgCgBQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBQACgBABgDQADgDAAgDQAHgDAEAEIgLAHIgGAGg");
	this.shape_71.setTransform(389.1,291.7);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EEC09E").s().p("AAAAjIAEgMQgFAMgFABIgCgBIAAgBIAEgGIACgEIABgCIgBABIgGAHQgJAKACgIIAGgKQAFgGgBAAQgNAMgEAAQgEAAAJgLIAIgKQACgDgLAJIgCABIgCgBQgBgDAGgEIAHgGIALgHIAGgEIAAAFQAAAEAAACQAEAEAGAAIAAABIgGARQgEAIgEAEIgDACIAAgBgAgCgTQgHgBgFgCQgEgCgEgFIgEgGQAIAGAKgEQAFgCAFABIALACQAJABAFgDQgBADgDADQgDADgEACQgFADgJABIAAADIgCAEIAAABQgBAAgBgIg");
	this.shape_72.setTransform(390.1,291.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#41210C").s().p("AgaAdIgBgCIgDgDQgDgGgCgIQAAgJADgHQACgHAFgGIADgEIAIgFQAIgDAGAAQAFAAAGACQAHADAFADIADADQAJAJABALQAAAOgCAHQgDAGgEACQgFAEgJgCIgLgCQgEAAgFABQgEACgEAAQgGAAgFgDg");
	this.shape_73.setTransform(390.1,285.3);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#E64A00").s().p("AgUAdIgIgEQgLgGgNgKQgVgNgFgPIgCgJQAHALAaAIQAJADAKABQADAFAHAFIAJAKQAAADgEAFQgBADgCABIgDACIgBAAgAAIAXQgBgCABgEIAAgFIAFgHIAEgFQAEAAADgDQAdgDAQgJQAJgEADgGIAAAAQAAAEgCAEQgHAMgUAOQgMAJgHAEQgKAHgFAAIgBAAQgGAAgDgGg");
	this.shape_74.setTransform(390,289.4);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EC672C").s().p("AAcAXQADgCADgGQADgHgBgNQAAgLgKgJIANACQARAEAMAKQAEACAEAHQAGAFgBACIAAABQgDAGgJAEQgQAJgdACQADgCABgEgAgcAcQgKgBgJgEQgagHgHgMIAAgCIADgDQADgHAGgFIAJgEQANgHAOgCIALgDIgEAFQgFAFgCAHQgDAKABAGQACAIADAHIACACIACACIAEAGIgHgBg");
	this.shape_75.setTransform(390,285.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#372511").s().p("AAlAHIgNgCIgDgDQgFgCgGgCQgGgDgEABQgIAAgHACIgIAEIgLACQgOACgNAHIgJAFIgGgHQgCgHAFgEQAEgGAPgGQAUgIAggBQAfAAAZAJQAQAGAEAGQAFAEgDAHQgDAFgHAGQgMgLgRgEg");
	this.shape_76.setTransform(390.2,282.7);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E18F59").s().p("AABACIgLgHQAFgEAGADIADAGIAEAEQAAABABAAQAAABAAAAQABAAAAAAQABAAAAAAIgCAAIgBACIgHgGg");
	this.shape_77.setTransform(427.3,291.7);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_78.setTransform(418.2,286.7);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#EEC09E").s().p("AgCAYIACAMIAAAAIgCgBQgEgFgDgIIgHgQIgBgCQAIABACgFQABgCAAgDQAAgDgBgDIAHAFIALAGIAIAGQAFAEgCADIgBABIgCAAQgMgKADAEIAIAJQAIAMgDAAQgDgBgOgMIAEAHIAGAJQACAJgKgLIgFgGIgBgBIABACIACAEIAEAGIgBABIgCAAQgDgBgFgLgAAAgNIgBgDIAAgCQgIgBgGgDQgEgCgDgFIgFgFQAGAEAJgDIALgBQAFAAAEABQALAEAJgGQgCAEgDACQgEAFgEADIgMACQgBAHgCAAIAAgBg");
	this.shape_79.setTransform(426.2,291.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#4A7328").s().p("AASAbIgFgEIgCgIIAIgKIAKgKQAJgBAKgDQAbgJAGgKQAAADgCAGQgGAPgTANQgNAKgMAGQgEADgFABIAAAAIgCgCgAgRAdQgGAAgJgHIgSgNQgVgOgGgMQgDgEAAgEIABAAQADAGAIADQAQAKAdACQADAEAEAAIADAEQAEAEABAEQABACABADQgBAEgBACQgCAGgGAAIgBAAg");
	this.shape_80.setTransform(426.3,289.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#609634").s().p("AAbAXIAAgBIADgDQAEgHAAgIQACgHgDgIQgCgHgFgGIgEgEIALACQAOACANAHIAJAFQAGAEAEAIIACACIAAADQgHALgbAIQgJADgKABIgGABQADgCACgEgAhEARQgJgDgCgGIAAAAIgBgBQgBgBAFgGIAIgIQANgLARgEQAGgBAHgBQgJAJgBALQgBANADAIQACAFADADIAFAFQgdgCgQgKg");
	this.shape_81.setTransform(426.3,285.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AAIAfQgEgCgFAAIgLACQgJACgGgEQgDgCgCgGQgDgHABgOQABgKAJgJIADgDIALgHQAGgCAEAAQAHAAAIADIAIAGIAEAEQAFAFACAIQADAGgCAIQAAAJgEAHIgDADIAAAAQgGAEgGAAIgIgBg");
	this.shape_82.setTransform(426.2,285.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#372511").s().p("AhLALQgEgHAFgEQAGgGAPgGQAYgJAgABQAgAAAUAIQAPAGAFAGQAFAEgEAHQgBAEgEADIgJgFQgNgGgOgDIgLgCIgIgDQgHgEgJABQgDAAgGACIgLAEIgDADQgHABgGACQgRADgNALQgHgGgCgFg");
	this.shape_83.setTransform(426.1,282.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E18F59").s().p("AABACIgLgHQAGgEAFADQAAADADADIAEAEQAAABABAAQAAABABAAQAAAAAAAAQABAAAAAAIgBABIgCABIgHgGg");
	this.shape_84.setTransform(409.1,291.7);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#447BCD").s().p("AASAbIgEgEQgDgFAAgDIAJgKQAGgFADgFIATgEQAagIAHgLIgBAJQgGAPgUANQgNAKgMAGIgIAEIgBAAIgCgCgAgRAdQgFAAgKgHQgHgEgLgJQgUgOgHgMIgDgIIABAAQADAGAIAEQAQAJAdADQADADAEAAIAEAFQAEAEABADIABAFIgBAGQgDAGgGAAIgBAAg");
	this.shape_85.setTransform(408.1,289.4);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#EEC09E").s().p("AgDAXIADAMIAAABIgBgCQgFgEgEgIIgGgRIAAgBQAHAAACgEIABgGIgBgFIAHAEIALAHIAHAGQAGAEgBADIgCABIgBgBQgNgJADADIAIAKQAJALgEAAQgDAAgOgMQgBAAAGAGIAFAKQACAIgKgKIgFgHIgBgBIABACIACAEIADAGQABAAAAABQAAAAAAAAQAAAAAAAAQAAAAgBAAIgBABQgEgBgGgMgAAAgMIAAgEIgBgDQgIgBgGgDQgEgCgDgDIgEgGQAFADAJgBIAMgCQAEgBAEACQALAEAIgGQgBAEgDACQgDAFgFACQgEACgHABQgCAIgCAAIAAgBg");
	this.shape_86.setTransform(408.1,291.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#628DD1").s().p("AhEASQgIgEgDgGIgBgBQgBgCAGgFIAIgJQANgKARgEIANgCQgKAJAAALQgBANADAHQACAGADACIAEAGQgdgCgQgJgAAbAXIABgCIACgCQAFgHAAgIQABgGgCgKQgDgHgFgFIgDgFIALADQAOACAMAHIAKAEQAFAFAFAHIABADIAAACQgHAMgaAHIgTAFIgGABQACgCACgEg");
	this.shape_87.setTransform(408.1,285.9);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAIAeQgFgBgEAAIgMACQgIACgGgEQgDgCgCgGQgDgHABgOQAAgLAKgJIACgDIAMgGQAFgCAFAAQAHAAAHADIAJAFIADAEQAFAGADAHQACAHgBAJQAAAIgFAGIgCADIgBACQgFADgFAAQgFAAgEgCg");
	this.shape_88.setTransform(408.1,285.3);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#372511").s().p("AhLALQgEgHAFgEQAFgGAQgGQAYgJAgAAQAgABAUAIQAPAGAFAGQAEAEgDAHQgBAEgDADIgKgFQgMgHgPgCIgLgCIgIgEQgHgCgIAAQgEgBgGADIgMAEIgCADIgNACQgRAEgNALQgHgGgCgFg");
	this.shape_89.setTransform(408,282.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_90.setTransform(470.6,286.7);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E18F59").s().p("AgJAGIgBAAQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAgBIAEgEQADgDAAgDQAGgDAFAEIgLAHIgIAGIgBgCg");
	this.shape_91.setTransform(461.6,291.7);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#EEC09E").s().p("AgHAkIgBgBIAEgGIACgEIABgCIgBABIgFAGQgKALABgJIAHgJIAEgHQgOAMgDABQgDAAAIgMIAIgJQADgEgMAKIgCAAIgCgBQgBgDAFgEIAIgGIALgGIAHgFQgBADAAADIAAAFQAEAFAHgBIgBACQgDAGgDAKQgEAIgEAFIgDABIAAAAIAEgMQgGALgEABIgBAAgAgCgTIgMgCQgEgDgEgFQgDgCgBgEQAIAGALgEQAEgBAFAAIAKABQAJADAGgEIgDAFQgEAFgDACQgHADgIABIAAACQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAIAAABQgBAAgBgHg");
	this.shape_92.setTransform(462.6,291.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#3A4D75").s().p("AgTAdQgFgBgFgDQgLgGgNgKQgTgNgGgPIgCgJQAHAKAaAJQAKADAJABIAKAKIAJAKQAAADgDAFIgEAEIgDACIAAAAgAAIAXIgBgGQAAgDACgCQABgEADgEIAEgEQAEAAADgEQAdgCAQgKQAJgDACgGIAAAAQAAAEgCAEQgGAMgVAOIgSANQgJAHgFAAIgBAAQgHAAgDgGg");
	this.shape_93.setTransform(462.6,289.4);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#000000").s().p("AgaAcIgBAAQgBgBAAAAQAAAAgBgBQAAAAAAgBQAAAAAAAAQgFgHAAgJQgBgIACgGQACgIAFgFIAEgEIAIgGQAHgDAHAAQAFAAAGACIALAHQABAAAAAAQABAAAAABQABAAAAABQAAAAABABQAJAJAAAKQABAOgCAHQgDAGgEACQgFAEgKgCIgKgCQgFAAgEACIgIABQgGAAgFgEg");
	this.shape_94.setTransform(462.6,285.3);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#48608E").s().p("AAcAYQAEgDACgFQADgIgBgNQgBgLgJgJQAIABAEABQASAEANALQADACAEAGQAGAGgBABIgBABIAAAAQgCAGgIADQgRAKgcACIADgFgAgcAcQgJgBgJgDQgbgIgGgLQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBIABgCQADgIAHgEIAJgFQANgHAOgCIALgCIgEAEQgFAGgCAHQgCAIABAHQAAAIAEAHQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIABABQABAEADACIgHgBg");
	this.shape_95.setTransform(462.5,285.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#372511").s().p("AAkAIQgEgCgIgBQAAAAgBgBQAAAAAAgBQgBAAAAAAQgBgBAAAAIgLgEQgGgCgEAAQgIgBgHAEIgIADIgLACQgOADgNAGIgJAFQgEgDgBgEQgDgHAEgEQAFgGAOgGQAVgIAgAAQAggBAYAJQAPAGAFAGQAGAEgDAHQgDAFgHAGQgNgLgSgDg");
	this.shape_96.setTransform(462.7,282.6);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#E18F59").s().p("AgIAHIgCgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABgBQADgBAAgDQAEgDAAgDQAGgDAFAEIgLAHIgHAGg");
	this.shape_97.setTransform(534.1,291.7);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E64A00").s().p("AgTAdQgEgBgFgDQgLgGgNgKQgUgNgGgPIgCgJQAHALAbAIQAIADALABQACAFAIAFIAIAKQAAADgEAFQgBADgCABIgDACIAAAAgAAIAXQgBgCABgEIAAgFIAFgHIAEgFQAEAAADgDQAdgDAQgJQAJgEADgGIAAAAQAAAEgCAEQgHAMgUAOQgMAJgHAEQgKAHgFAAIgBAAQgGAAgDgGg");
	this.shape_98.setTransform(535,289.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#EEC09E").s().p("AAAAjQAAAAAEgMQgFAMgEABIgDgBIAAgBIAEgGIADgEIABgCIgBABIgHAHQgJAKACgIIAHgKIADgGQgNAMgEAAQgDAAAIgLIAJgKQACgDgLAJIgCABIgDgBQgBgDAGgEIAIgGIAKgHIAHgEIgBAFQgBAEACACQACAEAHAAIAAABIgGARQgEAIgEAEIgDACIAAgBgAgBgTIgNgDQgEgCgEgFIgEgGQAIAGAKgEQAGgCADABIAMACQAJABAFgDQgBADgCADQgEADgDACQgHADgIABIgBADIgBAEIAAABQgBAAAAgIg");
	this.shape_99.setTransform(535.1,291.9);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#41210C").s().p("AgaAdIgBgCIgDgDQgDgGgBgIQgBgJACgHQACgHAFgGIAEgEIAIgFQAHgDAHAAQAFAAAGACQAGADAFADIADADQAKAJAAALQABAOgDAHQgCAGgEACQgFAEgJgCIgMgCQgDAAgGABQgEACgEAAQgFAAgFgDg");
	this.shape_100.setTransform(535.1,285.3);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EC672C").s().p("AAcAXQAEgCACgGQADgHgBgNQAAgLgKgJIANACQARAEAMAKQAEACAFAHQAFAFgBACIAAABQgDAGgJAEQgQAJgdACQADgCABgEgAgbAcQgLgBgIgEQgbgHgHgMIABgCIACgDQADgHAGgFIAJgEQANgHAOgCIALgDIgEAFQgFAFgCAHQgCAKABAGQABAIADAHIADACIABACIAEAGIgGgBg");
	this.shape_101.setTransform(535,285.9);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#372511").s().p("AAlAHIgNgCIgDgDQgFgCgGgCQgGgDgEABQgIAAgHACIgIAEIgLACQgOACgNAHIgJAFIgGgHQgCgHAFgEQAEgGAPgGQAUgIAggBQAgAAAYAJQAQAGAFAGQAEAEgDAHQgDAFgHAGQgMgLgRgEg");
	this.shape_102.setTransform(535.2,282.7);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E18F59").s().p("AgJAHIgBgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABgBIADgEQAEgDAAgDQAGgDAFAEIgLAHIgHAGg");
	this.shape_103.setTransform(516,291.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#393939").s().p("AgUAdQgDgBgGgDQgLgGgNgKQgUgNgGgPIgBgJQAGALAbAIQAJADAJABIAKAKIAJAKQAAADgDAFIgEAEIgCACIgBAAgAAIAXIgBgGIABgFIAFgHIAEgFIAHgDQAcgDARgJQAIgEADgGIABAAIgDAIQgGAMgVAOQgLAJgHAEQgKAHgFAAIgBAAQgGAAgDgGg");
	this.shape_104.setTransform(516.9,289.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#EEC09E").s().p("AAAAjIAEgMQgGAMgEABIgBgBQgBAAAAAAQAAAAAAAAQAAAAAAAAQAAgBABAAIADgGIACgEIABgCIgBABIgFAHQgKAKABgIQAAgBAHgJQAFgGgBAAQgOAMgEAAQgCAAAIgLIAIgKQACgDgLAJIgBABIgDgBQgBgDAGgEIAIgGIAKgHIAHgEIgBAFIABAGQACAEAIAAIgBABIgGARQgFAIgEAEIgCACIAAgBgAgDgTQgGgBgFgCQgFgCgEgFIgDgGQAIAGALgEQAFgCADABIALACQAJABAGgDIgDAGIgHAFQgHADgIABIgBADIgBAEIAAABQgBAAgCgIg");
	this.shape_105.setTransform(517,291.9);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFF6CD").s().p("AgaAdIgBgCIgDgDQgEgGAAgIQgBgJACgHQACgHAGgGIADgEIAIgFQAHgDAHAAQAFAAAGACQAHADAFADIACADQAKAJAAALQABAOgDAHQgCAGgEACQgFAEgKgCIgKgCQgEAAgFABQgFACgDAAQgGAAgFgDg");
	this.shape_106.setTransform(516.9,285.3);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#424242").s().p("AAbAXQAEgCACgGQADgHgBgNQAAgLgKgJIANACQARAEANAKQADACAFAHQAFAFAAACIgBABQgDAGgIAEQgRAJgcACIADgGgAgdAcQgJgBgJgEQgbgHgGgMIAAgCIABgDQAEgHAGgFIAJgEQANgHAOgCIALgDIgDAFQgGAFgCAHQgCAKABAGQAAAIAEAHIADACIABACIAEAGIgHgBg");
	this.shape_107.setTransform(516.9,285.9);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#372511").s().p("AAkAHIgMgCIgDgDQgFgCgGgCQgGgDgEABQgIAAgHACIgJAEIgKACQgPACgMAHIgKAFQgEgDgBgEQgCgHADgEQAGgGAOgGQAVgIAggBQAgAAAYAJQAQAGAFAGQAEAEgDAHQgDAFgHAGQgMgLgSgEg");
	this.shape_108.setTransform(517.1,282.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#E18F59").s().p("AgIAHIgCgBQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAgBIAEgEQADgDAAgDQAGgDAFAEIgLAHIgHAGg");
	this.shape_109.setTransform(497.8,291.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EEC09E").s().p("AAAAjIAEgMQgGAMgEABIgCgBIAAgBIAEgGIACgEIABgCIgBABIgGAHQgJAKACgIQAAgBAGgJIAEgGQgNAMgEAAQgDAAAIgLIAIgKQADgDgMAJIgCABIgCgBQgBgDAGgEIAIgGIAKgHIAHgEQgCADAAACQAAAEACACQACAEAIAAIgBABIgGARIgIAMIgDACIAAgBgAgCgTIgMgDQgEgCgEgFIgEgGQAIAGAKgEQAGgCAEABIALACQAJABAFgDIgEAGIgHAFQgGADgIABIAAADIgCAEIAAABQgBAAgBgIg");
	this.shape_110.setTransform(498.8,291.9);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#447BCD").s().p("AgUAdIgIgEQgLgGgNgKQgUgNgGgPIgCgJQAHALAbAIQAJADAJABIAKAKIAJAKQAAADgEAFIgDAEQgBABAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgBAAgAAJAXQgCgCAAgEQAAgCACgDIAEgHIAEgFIAHgDQAdgDAQgJQAJgEADgGIAAAAQAAAEgCAEQgHAMgUAOQgMAJgHAEQgKAHgEAAIgBAAQgHAAgCgGg");
	this.shape_111.setTransform(498.7,289.4);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#000000").s().p("AgaAdIgBgCIgDgDQgDgGgBgIQAAgJABgHQADgHAFgGIADgEIAIgFQAHgDAHAAQAGAAAGACQAGADAFADIADADQAJAJAAALQABAOgDAHQgBAGgEACQgGAEgJgCIgLgCQgEAAgFABQgFACgEAAQgFAAgFgDg");
	this.shape_112.setTransform(498.8,285.3);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#628DD1").s().p("AAcAXQAEgCACgGQACgHAAgNQAAgLgKgJIANACQARAEAMAKQAEACAFAHQAFAFgBACIAAABQgDAGgJAEQgQAJgdACIAEgGgAgcAcQgJgBgJgEQgbgHgHgMIAAgCIACgDQAEgHAGgFIAJgEQANgHAOgCIALgDIgDAFQgGAFgCAHQgCAKABAGQAAAIAEAHIADACIABACIAEAGIgHgBg");
	this.shape_113.setTransform(498.7,285.9);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#372511").s().p("AAlAHIgNgCIgDgDQgEgCgHgCQgGgDgEABQgIAAgHACIgIAEIgLACQgOACgNAHIgJAFQgEgDgCgEQgCgHAEgEQAFgGAPgGQAUgIAggBQAgAAAYAJQAQAGAFAGQAEAEgDAHQgDAFgHAGQgMgLgRgEg");
	this.shape_114.setTransform(498.9,282.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_115.setTransform(506.4,272.9);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#E18F59").s().p("AABACIgLgGQAFgEAGACQAAAEADACIADAFQABAAAAAAQABABAAAAQABAAAAAAQAAAAABAAIgBAAIgCACIgHgGg");
	this.shape_116.setTransform(515.4,277.8);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#EEC09E").s().p("AAIAeIgFgGIgBgBIAAABQACAAABAEIAEAGIgBABIgCABQgEgBgFgLIAEALIgBAAIgCgBQgEgEgEgIIgGgRIAAgBQAGAAAEgEIAAgGIgBgFIAHAFIALAGIAIAGQAEAEgBADIgBAAIgBAAQgNgJADAEIAIAJQAIALgDAAQgDgBgPgLIAFAHIAGAJQABABAAABQAAABgBAAQAAABAAAAQAAAAgBAAQgCAAgFgGgAAAgNIgBgDIAAgDQgIAAgGgEIgHgGIgFgGQAHAEAIgCIALgCQAFAAAEACQALAEAJgGQgCADgDADQgEAFgFACQgEACgHABQgBAHgCAAIAAgBg");
	this.shape_117.setTransform(514.4,278);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#3A4D75").s().p("AARAcIgDgFQgDgEgBgEIAJgKIAKgKIASgEQAbgIAHgLQAAAEgCAFQgGAPgTAOIgZAPQgFADgEABIAAAAIgDgBgAgRAdQgFAAgKgHIgSgMQgVgOgGgNQgDgEAAgDIABAAQACAFAJAEQAQAIAdADIAHAEIAEAEQADAEABAEIABAFIAAAGQgDAGgGAAIgBAAg");
	this.shape_118.setTransform(514.5,275.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#000000").s().p("AAIAfQgEgCgFAAIgLACQgJACgGgEQgDgCgCgGQgDgHAAgOQABgLAJgJIADgCIALgHQAHgCAEAAQAHAAAHADQAFACAEAEIAEADQAFAGACAIQACAGgBAIQgBAJgEAGQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAABIgBAAQgFAEgGAAIgIgBg");
	this.shape_119.setTransform(514.4,271.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#372511").s().p("AhLAKQgEgGAGgEQAFgHAPgFQAZgJAfABQAgAAAVAIQAOAFAFAHQAEAEgDAGQgBAEgEAEIgJgFQgNgHgOgCIgLgCQgDgCgFgBQgHgEgJABQgDAAgGACIgLAEIgDADIgMACQgSAEgNAKQgHgFgCgGg");
	this.shape_120.setTransform(514.3,268.8);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#48608E").s().p("AAbAXIAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAgBQAEgGABgJQABgGgDgIQgCgHgFgHIgEgDIALABQAOADANAGIAJAGQAGADAEAIIACADIAAADQgHALgbAIIgSADIgHACQADgDACgDgAhEARQgJgDgCgGIAAAAIgBgBQgBgCAGgFIAHgJQANgKASgFIAMgCQgJAJgBAMQgBANADAIQACAFAEACIAEAGQgdgDgQgJg");
	this.shape_121.setTransform(514.5,272);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_122.setTransform(399.9,272.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#E18F59").s().p("AABACIgLgGQAEgEAHACQAAAEADACIADAFQABAAABAAQAAABABAAQAAAAAAAAQABAAAAAAIgBAAQgBAAAAABQAAAAAAAAQgBAAAAAAQAAAAAAABIgHgGg");
	this.shape_123.setTransform(409,277.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EEC09E").s().p("AAIAeIgFgGIgBgBIAAABIADAEIADAGIAAABIgCABQgEgBgFgLIADALIAAAAIgCgBQgEgEgEgIIgGgRIgBgBQAIAAACgEIABgGIgBgFIAHAFIALAGIAHAGQAFAEgBADIgBAAIgCAAQgMgJADAEIAHAJQAKALgEAAQgDgBgOgLIAEAHIAGAJQABABAAABQAAABgBAAQAAABAAAAQAAAAgBAAQgCAAgFgGgAAAgNIgBgDIgBgDQgHAAgHgEIgGgGIgFgGQAGAEAJgCIALgCQAFAAAEACQALAEAIgGIgEAGQgEAFgEACQgFACgHABQgBAHgCAAIAAgBg");
	this.shape_124.setTransform(408,278);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#4A7328").s().p("AARAcIgEgFQgCgEgBgEIAJgKIAKgKIASgEQAcgIAGgLQAAAEgCAFQgGAPgTAOIgZAPQgFADgEABIAAAAIgDgBgAgRAdQgGAAgJgHIgTgMQgTgOgHgNQgDgEAAgDIABAAQACAFAJAEQAQAIAdADIAHAEIADAEQAEAEACAEIABAFIgBAGQgDAGgGAAIgBAAg");
	this.shape_125.setTransform(408.1,275.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#609634").s().p("AAbAXIAAgBIADgEQAEgGAAgJQACgGgDgIQgCgHgFgHIgEgDIALABQAOADANAGIAJAGQAGADAEAIIACADIAAADQgHALgbAIIgSADIgHACIAFgGgAhEARQgJgDgDgGIAAAAIAAgBQgBgCAGgFIAHgJQANgKARgFIANgCQgKAJAAAMQgBANADAIQACAFAEACIAEAGQgdgDgQgJg");
	this.shape_126.setTransform(408.1,272);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#372511").s().p("AhLAKQgEgGAGgEQAFgHAPgFQAZgJAfABQAgAAAUAIQAPAFAFAHQAEAEgDAGQgBAEgEAEIgJgFQgNgHgOgCIgLgCQgEgCgEgBQgHgEgJABQgDAAgGACIgLAEIgDADIgNACQgRAEgNAKQgHgFgCgGg");
	this.shape_127.setTransform(407.9,268.8);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#000000").s().p("AAIAfQgEgCgEAAIgMACQgJACgFgEQgEgCgCgGQgDgHABgOQAAgLAKgJIADgCIALgHQAGgCAEAAQAHAAAIADQAEACAEAEIAEADQAEAGADAIQADAGgCAIQAAAJgEAGIgDAEIAAAAQgGAEgGAAIgIgBg");
	this.shape_128.setTransform(408,271.4);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#E18F59").s().p("AAAACQgEgDgGgDQAFgEAGACQAAAEADACIAEAFQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAIgCABIgBABIgIgGg");
	this.shape_129.setTransform(550.9,277.8);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#EEC09E").s().p("AAJAeIgGgGIgBgBQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAABAAIADAEIADAGIAAABIgCABQgEgBgGgLIADALIAAABIgBgCQgEgEgFgIIgGgRIAAgBQAHAAACgEQACgDAAgDIgCgFIAHAFQAFADAFADIAIAGQAGAFgBACIgCABIgBgBQgNgJADAEIAIAJQAJALgEAAQgDgBgOgLIAEAHQAGAIAAACQAAAAABABQAAABAAAAQAAAAgBABQAAAAAAAAQgCAAgFgGgAAAgMIAAgEIgBgDQgIAAgGgEIgHgFIgEgGQAFADAJgBIAMgCQAEgBAFACQAKAEAIgGIgEAGQgDAFgFACQgFADgGAAQgCAHgCAAIAAAAg");
	this.shape_130.setTransform(549.8,278);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#447BCD").s().p("AASAcIgEgFQgEgEAAgEIAJgKIAKgJIASgFQAbgIAHgLIgBAJQgHAPgUAOQgMAKgMAGIgIADIgBAAIgCgBgAgRAdQgFAAgKgHQgHgDgMgJQgTgOgIgNIgCgHIAAAAQAEAFAIAEQAQAIAdAEIAHADIAEAFQADAEACADIABAFQAAADgBADQgDAGgGAAIgBAAg");
	this.shape_131.setTransform(549.9,275.5);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#628DD1").s().p("AhEASQgIgFgDgFIgBgBQgBgCAGgFIAIgJQANgKARgFIANgCQgKAJAAAMQgBANADAHQACAGADADIAEAFQgdgDgQgIgAAbAXIABgBIADgEQAEgGAAgJQABgGgCgIQgDgIgFgGIgDgDIALABQAOADAMAGIAKAGQAGAEAEAHIABADIAAACQgHAMgaAIIgTAEIgGABIAEgGg");
	this.shape_132.setTransform(549.9,272);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#372511").s().p("AhLALQgDgHAEgEQAGgHAQgFQAXgIAgAAQAhAAATAIQAPAFAFAHQAEAEgDAHQgBAEgEADIgJgFQgNgHgNgCIgMgCQgDgCgFgBQgHgDgIAAQgEAAgGACQgGACgFACIgDADIgNACQgQAEgNAKQgIgFgCgFg");
	this.shape_133.setTransform(549.7,268.8);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#000000").s().p("AAIAeQgFgCgEABIgLACQgJABgGgDQgDgCgCgGQgDgHABgOQAAgMAKgIIACgDQAFgEAGgCQAGgCAFAAQAHAAAIADQAEACAEADIADAEQAFAGADAHQACAHgBAIQAAAJgEAGIgDADIgBABQgFAEgGAAIgIgCg");
	this.shape_134.setTransform(549.9,271.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E18F59").s().p("AABACQgFgDgGgDQAEgEAHACQAAAEADACQACADACACQABAAAAAAQAAABABAAQAAAAAAAAQABAAAAAAIgCABIgBABIgHgGg");
	this.shape_135.setTransform(497.7,277.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EEC09E").s().p("AAIAeIgFgGIgBgBIABABIACAEIADAGIAAABIgCABQgEgBgFgLQAEALgBAAIAAABIgCgCQgEgEgEgIIgGgRIgBgBQAIAAACgEQABgDgBgDIAAgFIAHAFQAEADAHADIAHAGQAGAFgBACIgCABIgDgBQgKgJABAEIAJAJQAJALgEAAQgEgBgNgLIADAHIAHAKQAAAAAAABQAAABAAAAQAAAAAAABQAAAAgBAAQgBAAgGgGgAAAgMIgBgEIAAgDQgJAAgGgEIgGgFQgDgDgBgDQAFADAJgBIALgCQAEgBAFACQAKAEAJgGIgEAGQgEAFgEACQgGADgGAAQgBAHgCAAIAAAAg");
	this.shape_136.setTransform(496.7,278);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#E64A00").s().p("AASAcQgDgCgCgDQgDgEAAgEIAJgKQAHgFACgEIATgFQAbgIAHgLIgCAJQgGAPgTAOQgNAKgMAGIgJADIAAAAIgCgBgAgRAdQgGAAgJgHQgHgDgMgJQgUgOgHgNIgCgHIABAAQACAFAJAEQAPAIAeAEIAHADIAEAFIAFAHIAAAFQABADgBADQgDAGgGAAIgBAAg");
	this.shape_137.setTransform(496.7,275.5);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#41210C").s().p("AAJAeQgGgCgDABIgMACQgJABgFgDQgEgCgCgGQgDgHABgOQAAgMAKgIIACgDQAGgEAGgCQAGgCAEAAQAIAAAHADQAEACAEADIAEAEQAFAGACAHQACAHgBAIQgBAJgDAGQAAABAAAAQgBABAAAAQAAABgBAAQAAAAgBAAIgBABQgFAEgGAAQgDAAgEgCg");
	this.shape_138.setTransform(496.6,271.5);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#372511").s().p("AhLALQgDgHAEgEQAFgHAQgFQAYgIAgAAQAgAAAUAIQAPAFAEAHQAFAEgCAHIgGAHIgJgFQgNgHgOgCIgLgCQgEgCgEgBQgHgDgJAAQgDAAgGACQgGACgGACIgCADIgNACQgRAEgNAKQgGgFgDgFg");
	this.shape_139.setTransform(496.5,268.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EC672C").s().p("AhEASQgIgFgDgFIgBgBQAAgCAEgFIAJgJQANgKAQgFIANgCQgJAJgBAMQAAANACAHQACAGAFADQABADACACQgdgDgQgIgAAbAXIABgBQAAgBAAAAQABAAAAgBQABAAAAgBQAAAAABgBQADgGABgJQABgGgDgIQgCgIgFgGIgEgDIALABQAOADANAGIAJAGQAHAEADAHIACADIAAACQgHAMgaAIIgUAEIgGABIAFgGg");
	this.shape_140.setTransform(496.7,272);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_141.setTransform(469.3,272.9);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#E18F59").s().p("AgJAGIgBAAQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAAAIAEgFQACgCABgEQAFgCAGAEIgLAGIgIAGIgBgCg");
	this.shape_142.setTransform(460.4,277.8);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#4A7328").s().p("AgTAdQgEgBgFgDQgMgGgNgJQgTgOgGgPIgCgJQAHALAbAIIATAEIAJAKIAJAKQgBAEgCAEIgEAFIgCABIgBAAgAAJAXIgBgGIABgFQABgEADgEIAEgEIAIgEQAdgDAQgIQAHgEADgFIABAAQgBADgBAEQgHANgVAOIgRAMQgKAHgGAAIAAAAQgHAAgCgGg");
	this.shape_143.setTransform(461.3,275.5);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#EEC09E").s().p("AgQAgIAHgJIAEgHQgOALgDABQgDAAAIgLIAIgJQADgEgMAJIgCAAIgBAAQgBgDAEgEIAIgGIALgGQAEgEADgBIgBAFIABAGQADAEAHAAIgBABIgGARQgEAIgEAEIgDABIAAAAIAEgLQgGALgDABIgCgBIgBgBIAEgGIACgEIABgBIgBABIgFAGQgFAGgCAAQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgBgAgCgTQgHgBgEgCQgFgCgEgFQgDgDgBgDQAIAGALgEQAEgCAFAAIAKACQAKACAFgEIgDAGIgHAGQgHAEgIAAIAAADQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAIAAABQgBAAgBgHg");
	this.shape_144.setTransform(461.3,278);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#000000").s().p("AgaAcIgBAAIgCgEQgFgGAAgJQgBgIACgGQACgIAFgGIAEgDQAEgEAFgCQAHgDAGAAQAFAAAGACQAGADAFAEIADACQAJAJABALQABAOgDAHQgCAGgEACQgFAEgKgCIgKgCQgFAAgEACIgIABQgGAAgFgEg");
	this.shape_145.setTransform(461.3,271.4);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#372511").s().p("AAkAHIgMgCIgDgDQgFgCgGgCQgHgCgDAAQgIgBgHAEQgFABgDACIgLACQgPACgMAHIgKAFQgDgEgBgEQgEgGAFgEQAFgHAOgFQAVgIAgAAQAfgBAZAJQAPAFAFAHQAFAEgDAGQgCAGgHAFQgNgKgSgEg");
	this.shape_146.setTransform(461.5,268.8);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#609634").s().p("AAcAXQAEgCACgFQADgIgBgNQgBgMgJgJIANACQARAFANAKIAIAJQAFAFgBACIgBABIAAAAQgCAGgIADQgQAJgdADIADgGgAgbAbIgTgDQgbgIgGgLIAAgDIABgDQAFgIAFgDIAJgGQANgGAOgDIALgBIgEADQgFAHgCAHQgCAIABAGQAAAJAFAGIACAEIABABQABADADADIgGgCg");
	this.shape_147.setTransform(461.2,272);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#E18F59").s().p("AgJAGIgBAAQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAIAEgFIADgGQAGgCAFAEIgLAGIgIAGIgBgCg");
	this.shape_148.setTransform(531.3,277.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#EEC09E").s().p("AgQAgIAHgJIAEgHQgNALgEABQgDAAAIgLIAIgJQADgEgMAJIgCAAIgBAAQgBgDAFgEIAIgGIAKgGIAIgFQgCACAAADQAAADACADQACAEAHAAIAAABIgHARQgEAIgEAEIgDABIAAAAIADgLQgEALgEABIgCgBIgBgBQADgCABgEIADgEIAAgBIgBABIgFAGQgGAGgCAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAgBAAgBgAgCgTQgHgBgFgCQgEgCgEgFIgEgGQAIAGALgEQAFgCAEAAIAKACQAKACAFgEIgDAGQgDAEgEACQgHAEgIAAIAAADQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAIAAABQgBAAgBgHg");
	this.shape_149.setTransform(532.3,278);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_150.setTransform(540.3,272.9);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#000000").s().p("AgaAcIgBAAIgCgEQgEgGgBgJQgBgIACgGQACgIAGgGIAEgDQADgEAFgCQAHgDAGAAQAFAAAHACQAGADAFAEIADACQAJAJAAALQABAOgCAHQgCAGgEACQgGAEgJgCIgLgCQgEAAgFACIgIABQgGAAgFgEg");
	this.shape_151.setTransform(532.2,271.4);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#5BB1B0").s().p("AgUAdQgDgBgFgDQgLgGgOgJQgTgOgGgPIgCgJQAHALAaAIIATAEIAKAKIAJAKIgDAIIgFAFIgCABIgBAAgAAJAXQgCgDAAgDQAAgDACgCQABgEADgEIAEgEQAEAAADgEQAdgDAQgIQAJgEACgFIAAAAQAAADgCAEQgHANgUAOIgSAMQgJAHgGAAIAAAAQgHAAgCgGg");
	this.shape_152.setTransform(532.2,275.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#372511").s().p("AAlAHIgNgCIgDgDQgFgCgGgCQgGgCgEAAQgHgBgIAEQgEABgEACIgLACQgOACgNAHIgJAFQgEgEgBgEQgDgGAEgEQAGgHAOgFQAUgIAgAAQAggBAYAJQAPAFAGAHQAEAEgDAGQgCAGgHAFQgNgKgRgEg");
	this.shape_153.setTransform(532.4,268.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#6BD3D2").s().p("AAcAXQAEgCACgFQACgIAAgNQgBgMgJgJIANACQARAFANAKIAIAJQAEAFAAACIgBABIAAAAQgCAGgIADQgQAJgdADIADgGgAgbAbIgTgDQgbgIgGgLQgBgBAAAAQAAAAAAgBQAAAAAAAAQAAgBABAAIABgDQAEgIAGgDIAJgGQANgGAOgDIALgBIgEADQgFAHgCAHQgCAIABAGQAAAJAEAGIADAEIAAABIAFAGIgGgCg");
	this.shape_154.setTransform(532.2,272);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#E18F59").s().p("AgIAHIgCgBQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQACgCABgDQADgCAAgEQAGgCAFAEQgGADgFADIgGAGg");
	this.shape_155.setTransform(442.5,277.8);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#393939").s().p("AgUAdIgIgDQgLgGgNgKQgUgOgGgPQgCgFAAgEQAHALAbAIIASAFIAKAJIAJAKQAAAEgEAEQgBADgCACIgDABIgBAAgAAJAXQgCgDAAgDIACgFQABgDADgEIAEgFIAHgDQAdgEAQgIQAIgEAEgFIAAAAQAAADgDAEQgGANgVAOQgLAJgHADQgKAHgEAAIgBAAQgHAAgCgGg");
	this.shape_156.setTransform(443.5,275.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EEC09E").s().p("AgPAhQAAgCAGgIIAEgHQgOALgDABQgDAAAIgLIAIgJQADgEgMAJIgCABIgBgBQgCgCAGgFIAIgGQAFgDAEgDIAIgFIgCAFQABADABADQACAEAIAAIgCABIgEARIgJAMIgDACIAAgBIAEgLQgFALgEABIgDgBIAAgBIAEgGIACgEIABgBIgBABIgGAGQgFAGgCAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAgAgCgTQgHAAgFgDQgEgCgEgFIgFgGQAKAGAJgEQAGgCAEABIALACQAJABAFgDIgEAGIgHAFQgGAEgIAAIAAADIgCAEIAAAAQgBAAgBgHg");
	this.shape_157.setTransform(443.6,278);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFF6CD").s().p("AgaAcIgBgBIgDgDQgEgGAAgJQgBgIACgHQADgHAFgGIADgEIAIgFQAHgDAHAAQAGAAAGACQAGACAFAEIADADQAJAIAAAMQABAOgDAHQgCAGgDACQgGADgJgBIgLgCQgEgBgFACQgEACgEAAQgGAAgFgEg");
	this.shape_158.setTransform(443.5,271.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#424242").s().p("AAcAYQAEgDACgGQACgHAAgNQAAgMgKgJIANACQAQAFANAKIAJAJQAFAFgBACIAAABQgEAFgIAFQgQAIgdADIAEgFgAgcAcIgSgEQgbgIgHgMIAAgCIACgDQAEgHAGgEIAJgGQANgGAOgDIALgBIgDADQgGAGgCAIQgCAIAAAGQABAJAEAGIACAEIABABIAFAGIgHgBg");
	this.shape_159.setTransform(443.5,272);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#372511").s().p("AAlAHIgNgCIgDgDQgEgCgHgCQgGgCgEAAQgIAAgHADIgIADIgLACQgOACgNAHIgJAFQgEgDgCgEQgCgHAEgEQAFgHAPgFQAUgIAgAAQAgAAAXAIQARAFAFAHQAEAEgDAHQgDAFgHAFQgNgKgQgEg");
	this.shape_160.setTransform(443.7,268.8);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#E18F59").s().p("AgJAHIgBgBQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAAAIAEgFQADgCAAgEQAGgCAFAEQgHADgEADIgHAGg");
	this.shape_161.setTransform(478,277.8);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#447BCD").s().p("AgUAdIgIgDQgMgGgNgKQgUgOgGgPIgBgJQAHALAaAIIATAFIAJAJIAKAKQAAAEgEAEIgDAFIgDABIgBAAgAAIAXIgBgGIABgFQABgDAEgEIAEgFIAHgDQAdgEAQgIQAIgEADgFIABAAIgCAHQgHANgVAOQgLAJgHADQgKAHgFAAIgBAAQgGAAgDgGg");
	this.shape_162.setTransform(479,275.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#EEC09E").s().p("AgPAhQAAgCAGgIQAFgHgBAAQgOALgDABQgDAAAIgLIAIgJQADgEgNAJIgBABIgCgBQgBgCAGgFIAIgGQAFgDAFgDIAHgFIgBAFIABAGQADAEAHAAIgBABIgGARQgEAIgEAEIgDACIAAgBIAEgLQgGALgEABIgBgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQABAAAAAAIADgGIACgEIABgBIgBABIgFAGQgGAGgCAAQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAgBAAAAgAgCgTQgHAAgFgDQgFgCgDgFIgEgGQAIAGALgEQAFgCADABIAMACQAJABAFgDIgEAGIgHAFQgFAEgJAAIgBADIgBAEIAAAAQgBAAgBgHg");
	this.shape_163.setTransform(479,278);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#000000").s().p("AgaAcIgBgBIgCgDQgFgGAAgJQgBgIADgHQACgHAFgGIADgEQAEgDAFgCQAHgDAGAAQAGAAAGACQAGACAFAEIADADQAJAIAAAMQABAOgCAHQgDAGgDACQgGADgIgBIgMgCQgEgBgFACQgEACgEAAQgGAAgFgEg");
	this.shape_164.setTransform(479,271.5);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#628DD1").s().p("AAcAYQADgDADgGQACgHgBgNQAAgMgJgJIAMACQARAFANAKQAEADAEAGQAGAFgBACIgBABQgDAFgIAFQgQAIgdADIAEgFgAgcAcIgTgEQgagIgHgMIAAgCIABgDQAFgHAFgEIAKgGQAMgGAPgDIAKgBIgDADQgFAGgCAIQgDAIABAGQAAAJAFAGIACAEIABABIAEAGIgGgBg");
	this.shape_165.setTransform(479,272);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#372511").s().p("AAlAHIgNgCIgCgDQgFgCgHgCQgGgCgEAAQgIAAgHADQgFABgDACIgLACQgOACgNAHIgJAFQgEgDgBgEQgDgHAEgEQAFgHAPgFQAUgIAgAAQAgAAAYAIQAQAFAFAHQAFAEgEAHQgCAFgHAFQgNgKgRgEg");
	this.shape_166.setTransform(479.1,268.8);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_167.setTransform(329,272.9);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#E18F59").s().p("AAAACQgDgDgHgDQAFgEAFACIAEAGIAEAFQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAIgBAAQAAAAgBABQAAAAAAAAQgBAAAAAAQAAAAAAABIgIgGg");
	this.shape_168.setTransform(338.1,277.8);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#EEC09E").s().p("AAIAeIgFgGIgCgBIABABQABAAACAEIADAGIAAABIgBABQgFgBgFgLIADALIAAAAIgCgBQgEgEgEgIIgGgRIgBgBQAHAAADgEIABgGIgBgFIAHAFQAFADAFADIAIAGQAGAEgBADIgCAAIgCAAQgMgJADAEIAIAJQAIALgDAAQgDgBgOgLIAEAHIAHAJQAAABAAABQAAABgBAAQAAABAAAAQAAAAgBAAQgCAAgFgGgAAAgNIAAgDIgBgDQgIAAgHgEIgHgGIgDgGQAFAEAJgCIAMgCQAEAAAEACQAMAEAHgGIgEAGQgDAFgFACQgFACgHABQgBAHgCAAIAAgBg");
	this.shape_169.setTransform(337.1,278);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#5BB1B0").s().p("AARAcIgEgFIgDgIIAKgKIAJgKIATgEQAbgIAGgLQAAAEgCAFQgGAPgTAOIgYAPQgGADgDABIgBAAIgDgBgAgRAdQgFAAgKgHIgSgMQgVgOgGgNQgDgEAAgDIABAAQADAFAIAEQAQAIAdADIAHAEIADAEQAEAEACAEIABAFIgBAGQgDAGgGAAIgBAAg");
	this.shape_170.setTransform(337.1,275.5);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AAIAfQgEgCgFAAIgLACQgJACgGgEQgDgCgCgGQgDgHAAgOQABgLAJgJIADgCIALgHQAHgCAEAAQAHAAAHADQAFACAEAEIAEADQAFAGACAIQACAGgBAIQgBAJgEAGIgCAEIgBAAQgFAEgGAAIgIgBg");
	this.shape_171.setTransform(337.1,271.4);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#6BD3D2").s().p("AAbAXIAAgBIADgEQAEgGABgJQABgGgDgIQgCgHgFgHIgEgDIALABQAOADANAGIAJAGQAGADAEAIIACADIAAADQgHALgbAIIgSADIgHACIAFgGgAhEARQgJgDgCgGIAAAAIgBgBQgBgCAGgFQAEgGADgDQANgKASgFIAMgCQgJAJgBAMQgBANADAIQACAFAEACIAEAGQgdgDgQgJg");
	this.shape_172.setTransform(337.1,272);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#372511").s().p("AhLAKQgEgGAGgEQAFgHAPgFQAZgJAfABQAgAAAUAIQAPAFAFAHQAEAEgDAGQgBAEgEAEIgJgFQgNgHgOgCIgLgCQgDgCgFgBQgHgEgJABQgDAAgGACIgLAEIgDADIgMACQgSAEgNAKQgHgFgCgGg");
	this.shape_173.setTransform(336.9,268.8);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#E18F59").s().p("AABACIgLgGQAFgEAGACQAAAEADACIAEAFQAAAAABAAQAAABAAAAQABAAAAAAQAAAAABAAIgBAAIgCACIgHgGg");
	this.shape_174.setTransform(426.7,277.8);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_175.setTransform(417.7,272.9);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#3A4D75").s().p("AARAcIgEgFQgCgEgBgEIAJgKIAKgKIATgEQAbgIAGgLQAAAEgCAFQgGAPgTAOIgYAPQgGADgEABIAAAAIgDgBgAgRAdQgGAAgJgHIgSgMQgVgOgGgNQgDgEAAgDIABAAQACAFAJAEQAQAIAdADIAHAEIAEAEIAEAIQACACAAADIgBAGQgDAGgGAAIgBAAg");
	this.shape_176.setTransform(425.8,275.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#EEC09E").s().p("AAIAeIgFgGIgBgBIAAABQAAAAABABQAAAAAAAAQABABAAABQAAAAABABIAEAGIgBABIgCABQgEgBgFgLIAEALIgBAAIgCgBQgEgEgEgIQgDgLgDgGIgBgBQAHAAADgEIABgGQAAgDgBgCIAHAFIALAGIAHAGQAGAEgBADIgCAAIgCAAQgMgJADAEIAIAJQAIALgDAAQgDgBgPgLIAFAHIAHAJQAAABAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgCAAgGgGgAAAgNIgBgDIAAgDQgIAAgHgEIgHgGIgDgGQAGAEAIgCIALgCQAFAAAEACQALAEAIgGIgEAGQgEAFgFACQgEACgHABQgBAHgCAAIAAgBg");
	this.shape_177.setTransform(425.7,278);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#000000").s().p("AAIAfQgEgCgFAAIgLACQgIACgGgEQgEgCgCgGQgDgHABgOQABgLAIgJIADgCQAGgEAGgDQAGgCAEAAQAIAAAGADQAFACAEAEIAEADQAFAGACAIQACAGgBAIQgBAJgDAGQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAABIgBAAQgFAEgGAAIgIgBg");
	this.shape_178.setTransform(425.7,271.4);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#372511").s().p("AhMAKQgDgGAFgEQAFgHAQgFQAYgJAgABQAgAAAVAIQAOAFAFAHQAEAEgDAGQgBAEgEAEIgJgFQgNgHgOgCIgLgCQgEgCgFgBQgGgEgJABQgDAAgGACQgGACgGACIgDADIgMACQgRAEgNAKQgHgFgDgGg");
	this.shape_179.setTransform(425.6,268.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#48608E").s().p("AAbAXIAAgBQABAAAAgBQABAAAAAAQABgBAAAAQAAgBAAgBQAEgGABgJQABgGgDgIQgBgHgGgHIgDgDIAKABQAPADANAGIAIAGQAHADADAIIACADIAAADQgGALgbAIIgTADIgGACIAEgGgAhEARQgJgDgCgGIAAAAIgBgBQAAgCAFgFIAHgJQANgKASgFIAMgCQgJAJgBAMQAAANACAIQACAFAEACIAEAGQgdgDgQgJg");
	this.shape_180.setTransform(425.8,272);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#E18F59").s().p("AABACQgFgDgGgDQAFgEAGACQAAAEADACIAEAFQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAIgBABIgCABIgHgGg");
	this.shape_181.setTransform(355.8,277.8);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#EEC09E").s().p("AAJAeIgGgGIgBgBIABABIACAEIAEAGQAAAAAAAAQAAAAAAABQAAAAAAAAQAAAAAAAAIgDABQgEgBgFgLIAEALIgBABIgCgCQgFgEgDgIIgGgRIAAgBQAGAAADgEQABgDAAgDIgBgFIAHAFQAEADAHADIAHAGQAGAFgBACIgCABIgCgBQgMgJADAEIAIAJQAJALgEAAQgDgBgOgLQgBAAAFAHIAHAKQAAAAAAABQAAABgBAAQAAAAAAABQAAAAAAAAQgCAAgFgGgAAAgMIgBgEIAAgDQgJAAgFgEIgHgFQgDgDgBgDQAFADAJgBIALgCQAEgBAGACQAKAEAIgGIgEAGQgDAFgGACQgEADgHAAQgBAHgCAAIAAAAg");
	this.shape_182.setTransform(354.8,278);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E64A00").s().p("AARAcIgDgFQgDgEgBgEIAJgKIAJgJIAUgFQAagIAHgLIgCAJQgFAPgUAOQgNAKgMAGIgIADIgBAAIgDgBgAgRAdQgGAAgJgHQgHgDgLgJQgVgOgHgNIgCgHIABAAQADAFAIAEQAPAIAeAEIAHADIAFAFIADAHIABAFQAAADgBADQgCAGgGAAIgBAAg");
	this.shape_183.setTransform(354.8,275.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#41210C").s().p("AAJAeQgGgCgEABIgLACQgJABgFgDQgEgCgCgGQgDgHABgOQABgMAJgIIACgDQAFgEAHgCQAGgCAEAAQAHAAAHADQAGACADADIAEAEQAFAGABAHQADAHAAAIQgCAJgDAGIgCADIgCABQgFAEgGAAIgHgCg");
	this.shape_184.setTransform(354.8,271.5);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#372511").s().p("AhLALQgDgHAEgEQAFgHAQgFQAYgIAgAAQAgAAAVAIQAOAFAFAHQAEAEgDAHQgBAEgEADIgJgFQgNgHgOgCIgLgCQgDgCgFgBQgIgDgHAAQgEAAgGACQgGACgGACIgCADIgNACQgRAEgNAKQgHgFgCgFg");
	this.shape_185.setTransform(354.6,268.8);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#EC672C").s().p("AhEASQgIgFgDgFIgBgBQAAgCAFgFIAIgJQANgKARgFIANgCQgKAJgBAMQAAANACAHQADAGAEADQABADACACQgdgDgQgIgAAbAXIABgBIADgEQADgGABgJQABgGgDgIQgBgIgGgGIgDgDIAKABQAPADANAGIAIAGQAHAEADAHIACADIAAACQgHAMgaAIIgTAEIgGABIAEgGg");
	this.shape_186.setTransform(354.8,272);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#E18F59").s().p("AAAACQgEgDgGgDQAFgEAFACQAAAEAEACIAEAFQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAIgBABIgCABIgIgGg");
	this.shape_187.setTransform(373.5,277.8);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#EEC09E").s().p("AAJAeIgGgGIgBgBIABABIADAEIADAGIAAABIgCABQgEgBgGgLIADALIAAABIgBgCQgEgEgFgIIgGgRIAAgBQAGAAADgEQACgDAAgDIgCgFIAHAFQAFADAFADIAIAGQAGAFgBACIgCABIgBgBQgNgJADAEIAIAJQAJALgEAAQgDgBgOgLIAEAHQAGAIAAACQAAAAABABQAAABAAAAQAAAAgBABQAAAAAAAAQgCAAgFgGgAAAgMIAAgEIgBgDQgJAAgFgEIgHgFIgEgGQAFADAKgBIALgCQADgBAGACQAKAEAIgGIgEAGQgDAFgFACQgFADgHAAQgBAHgCAAIAAAAg");
	this.shape_188.setTransform(372.5,278);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFF6CD").s().p("AAIAeQgFgCgEABIgLACQgJABgGgDQgDgCgDgGQgCgHABgOQAAgMAKgIIACgDQAFgEAGgCQAGgCAFAAQAHAAAIADQAEACAEADIADAEQAFAGADAHQACAHgBAIQAAAJgEAGIgDADIgBABQgFAEgGAAIgIgCg");
	this.shape_189.setTransform(372.5,271.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#372511").s().p("AhLALQgDgHAEgEQAGgHAQgFQAXgIAgAAQAhAAATAIQAPAFAFAHQAEAEgDAHQgBAEgEADIgJgFQgNgHgNgCIgMgCQgDgCgFgBQgHgDgIAAQgEAAgGACQgGACgFACIgDADIgNACQgQAEgNAKQgIgFgCgFg");
	this.shape_190.setTransform(372.4,268.8);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#424242").s().p("AhEASQgIgFgDgFIgBgBQgBgCAGgFIAIgJQANgKARgFIANgCQgKAJAAAMQgBANACAHQADAGADADIAEAFQgdgDgQgIgAAbAXIABgBIADgEQAEgGAAgJQABgGgCgIQgDgIgFgGIgDgDIALABQAOADAMAGIAKAGQAGAEAEAHIABADIAAACQgHAMgaAIIgTAEIgGABIAEgGg");
	this.shape_191.setTransform(372.5,272);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#393939").s().p("AARAcIgEgFQgDgEAAgEIAKgKIAJgJIATgFQAagIAHgLIgCAJQgFAPgVAOQgNAKgLAGIgIADIgBAAIgDgBgAgRAdQgFAAgJgHQgIgDgLgJQgUgOgGgNQgDgEgBgDIAAAAQAEAFAIAEQAQAIAdAEIAIADIADAFQAEAEAAADIACAFQAAADgCADQgCAGgGAAIgBAAg");
	this.shape_192.setTransform(372.6,275.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#E18F59").s().p("AAAACQgEgDgGgDQAFgEAGACQAAAEADACIAEAFQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAIgCABIgBABIgIgGg");
	this.shape_193.setTransform(391.3,277.8);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#EEC09E").s().p("AAJAeIgGgGIgBgBIABABIACAEIAEAGIAAABIgDABQgDgBgGgLIADALIAAABIgCgCIgIgMIgGgRIgBgBQAIAAACgEQACgDAAgDQAAgCgCgDIAHAFQAFADAFADIAIAGQAGAFgBACIgCABIgCgBQgMgJADAEIAIAJQAIALgDAAQgEgBgNgLIAEAHQAGAIAAACQAAAAABABQAAABAAAAQAAAAgBABQAAAAAAAAQgCAAgFgGgAAAgMIgBgEIAAgDQgIAAgGgEIgHgFIgEgGQAFADAJgBIALgCQAEgBAGACQAKAEAIgGIgEAGQgEAFgEACQgFADgHAAQgBAHgCAAIAAAAg");
	this.shape_194.setTransform(390.2,278);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#447BCD").s().p("AASAcIgFgFQgCgEAAgEIAIgKIAKgJIATgFQAagIAHgLIgCAJQgGAPgTAOQgNAKgMAGQgFACgEABIAAAAIgCgBgAgRAdQgGAAgJgHQgHgDgLgJQgVgOgGgNIgDgHIABAAQADAFAIAEQAQAIAdAEIAHADIAEAFIAEAHQACADAAACQAAADgCADQgCAGgGAAIgBAAg");
	this.shape_195.setTransform(390.3,275.5);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#628DD1").s().p("AhEASQgIgFgDgFIgBgBQAAgCAEgFIAJgJQANgKAQgFIANgCQgJAJAAAMQgBANADAHQABAGAEADIAEAFQgdgDgQgIgAAbAXIABgBIADgEQADgGABgJQAAgGgBgIQgDgIgFgGIgDgDIALABQAOADAMAGIAKAGQAGAEADAHIACADIAAACQgHAMgaAIIgTAEIgGABIAEgGg");
	this.shape_196.setTransform(390.3,272);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#372511").s().p("AhLALQgDgHAEgEQAFgHAQgFQAYgIAgAAQAgAAAUAIQAPAFAFAHQAEAEgCAHIgGAHIgJgFQgNgHgOgCIgLgCIgIgDQgHgDgJAAQgDAAgGACQgHACgFACIgCADIgNACQgRAEgNAKQgGgFgDgFg");
	this.shape_197.setTransform(390.1,268.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#000000").s().p("AAIAeQgFgCgEABIgLACQgKABgFgDQgEgCgBgGQgDgHABgOQAAgMAJgIIADgDQAFgEAGgCQAGgCAFAAQAIAAAHADIAIAFIADAEQAFAGADAHQABAHAAAIQgBAJgDAGIgDADIgBABQgFAEgGAAQgEAAgEgCg");
	this.shape_198.setTransform(390.3,271.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#E18F59").s().p("AAAACIgKgGQAFgEAFACQABAEADACIADAFQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIgBABIgCABIgIgGg");
	this.shape_199.setTransform(520.6,249.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#EEC09E").s().p("AAIAeIgFgGIgBgCIAAADQAAAAABAAQAAAAAAABQABAAAAABQABAAAAABIAEAGIgBABIgBABQgFgBgFgLIAEALIgBAAIgDgBQgDgEgEgIQgDgKgDgHIgBgBQAHABAEgFIAAgGIgBgFIAHAFIAKAGIAIAGQAGAEgCADIgBAAIgCAAQgMgJADAEIAIAKQAIAKgDAAQgDAAgPgMIAFAGIAHAKQAAABAAABQAAABgBAAQAAABAAAAQAAAAgBAAQgCAAgFgGgAAAgNIAAgDIgCgCQgHgBgGgDQgEgDgEgEIgDgFQAFADAJgCIAMgBQAEAAAEABQALAEAJgGIgFAGQgEAFgFACIgLADQgBAHgCAAIAAgBg");
	this.shape_200.setTransform(519.6,249.8);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#000000").s().p("AAIAfQgFgCgEAAIgLACQgJACgGgEQgDgDgDgFQgCgHAAgOQABgLAJgJIADgDIALgGQAHgCAEAAQAHgBAHAFQAFABAEADIADAEQAGAGABAIQADAGgBAIQgBAJgEAGQAAABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAIgBABQgFAEgGAAIgIgBg");
	this.shape_201.setTransform(519.6,243.3);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_202.setTransform(511.5,244.7);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#372511").s().p("AhMALQgDgHAGgEQAEgHAQgGQAZgIAfABQAgAAAVAHQAOAGAFAHQAEAEgDAHQgBADgEAEQgEgDgFgCQgNgGgOgDIgLgCQgEgCgEgBQgHgEgJABQgDAAgGACIgLAEIgEADQgHAAgEACQgSAEgNAKQgHgFgDgFg");
	this.shape_203.setTransform(519.4,240.6);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#48608E").s().p("AAbAXIAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQADgHACgIQABgHgDgHQgCgIgFgGIgEgEIALACQAOADANAGQAFACAEADQAGAEADAIIADACIAAADQgHAKgbAJQgJADgJABIgHABIAFgGgAhEASQgJgEgCgFIAAgBIgBgBQgBgCAGgFQAEgGADgDQANgKASgEQAEgCAHAAQgIAJgBALQgBAOADAGQACAGAEADIAEAFQgdgCgQgJg");
	this.shape_204.setTransform(519.6,243.8);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#3A4D75").s().p("AARAcIgDgFQgDgEgBgEIAKgKIAJgKQAKgBAJgDQAagJAHgKQAAAEgDAFQgFAPgTANQgOAKgKAGQgGADgDABIgBAAIgDgBgAgSAdQgFAAgJgHIgSgNQgVgOgGgLQgDgFAAgDIABAAQACAFAJAEQAQAJAdACQADAEAEABQADABABADIAEAHIABAFIAAAGQgDAGgGAAIgCAAg");
	this.shape_205.setTransform(519.6,247.3);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#E18F59").s().p("AAAACIgKgGQAFgEAGACQAAAEADACQABAEADABQABAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIgCABIgBABIgIgGg");
	this.shape_206.setTransform(502,249.6);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#EEC09E").s().p("AAJAeIgGgGQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIACACIACAEIAEAGQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgDAAQgEgBgFgKIADALIAAAAIgCgBQgFgEgDgJIgGgQIAAgCQAGABADgEQABgDAAgDIgBgFIAHAEIALAHIAIAFQAEAGgBABIgBACIgCgBQgMgKADAEIAJAKQAIALgFAAQgCgBgOgMIAEAHIAGAKQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBAAQgBAAgFgGgAAAgMIgBgEIAAgDQgIAAgGgEQgFgCgCgEIgEgFQAFADAJgBIALgCQAEgBAGACQAKAEAIgGIgFAGQgDAEgEADQgFADgHAAQgCAHgBAAIAAAAg");
	this.shape_207.setTransform(501,249.9);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#41210C").s().p("AAIAeQgFgBgEAAIgLACQgJABgFgDQgEgDgDgGQgDgGACgOQAAgLAKgJIACgDQAFgEAHgCQAGgCAEAAQAHAAAIADQAEACADADIAEAEQAGAGABAIQADAGgBAIQgBAJgDAGIgDADIgBACQgFADgFAAQgEAAgFgCg");
	this.shape_208.setTransform(501,243.3);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#E64A00").s().p("AASAcQgDgBgCgEQgDgEAAgEIAJgKQAHgFACgFIAUgEQAagHAHgMIgCAJQgGAPgTANQgNALgMAFQgFADgDABIgBAAIgCgBgAgRAdQgFAAgKgHQgHgDgMgKQgUgOgHgLIgCgIIABAAQADAFAIAEQAPAJAeADQACADAFABIAEAEIAEAHIABAFQABAEgCACQgCAGgFAAIgCAAg");
	this.shape_209.setTransform(501.1,247.3);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#EC672C").s().p("AhEASQgIgEgDgGIgBgBQgBgCAFgFIAJgJQANgKAQgEIANgDQgJAJgBANQgBAMADAHQACAGAEADIAEAGQgegDgPgJgAAaAXIACgBIACgDQAEgGABgJQAAgGgCgJQgCgHgFgGIgEgFIALADQAOACANAHIAJAFQAGAFAEAGIABADIABACQgHAMgaAIIgUAEIgGABIAEgGg");
	this.shape_210.setTransform(501.1,243.9);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#372511").s().p("AhLALQgDgHAEgEQAGgHAQgFQAXgIAfAAQAhAAAVAIQANAFAGAHQAEAEgDAHQgBAEgEADIgJgFQgNgGgOgDIgLgCQgDgCgFgBQgIgDgHAAQgEAAgGACQgGACgFACIgDADIgNACQgQAEgNAKQgIgFgCgFg");
	this.shape_211.setTransform(500.9,240.6);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#E18F59").s().p("AgJAHIgBgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAIAEgFIADgGQAGgCAFAEIgLAGIgIAGIgBgBg");
	this.shape_212.setTransform(463.2,249.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_213.setTransform(472.2,244.7);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#EEC09E").s().p("AgQAgIAHgKIAFgGQgPAMgDAAQgDAAAIgKIAIgKQADgEgMAJIgCAAIgBAAQgBgDAEgEIAIgGIALgGIAHgFQgCACABADQgBAEACACQADAFAHgBIgBABIgGARQgEAIgEAEIgDABIAAAAIAEgLQgGALgDABIgDgBIAAgBIAEgGIADgDIAAgDIgBACIgGAGQgFAGgCAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBgAgCgTIgMgDQgEgCgEgFIgFgGQAJAGAKgEQAGgBAEAAIALABQAIACAGgDIgDAFIgIAHQgGADgHABIgBACQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAIAAABQgBAAgBgHg");
	this.shape_214.setTransform(464.2,249.8);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#4A7328").s().p("AgUAdQgDgBgGgDQgKgGgOgKQgTgNgGgPIgBgJQAFAKAbAJQAJADAKABIAKAKIAJAKIgDAIIgEAFIgDABIgBAAgAAJAXQgCgCAAgEQAAgDACgCQABgEADgDIAEgEIAHgFQAdgCAQgJQAJgEACgFIABAAQAAADgDAFQgHALgUAOIgSANQgKAHgEAAIgCAAQgGAAgCgGg");
	this.shape_215.setTransform(464.1,247.3);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#609634").s().p("AAcAYQAEgDACgGQACgGAAgOQgBgLgJgJQAHAAAFACQASAEAMAKQAEADAFAGQAEAFAAACIgBABIAAABQgCAFgIAEQgRAJgcACIADgFgAgcAcQgJgBgJgDQgbgJgGgKQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBIABgCQAEgIAGgEIAJgFQANgGAOgDIALgCIgEAEQgFAGgCAIQgCAHABAHQAAAIAEAHIADADIAAABIAFAGIgHgBg");
	this.shape_216.setTransform(464.1,243.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#000000").s().p("AgaAcIgBgBIgDgDQgDgGgBgJQgBgIACgGQACgIAGgGIADgEIAIgEQAIgFAGABQAFAAAHACQAGADAEADIAEADQAJAJAAALQABAOgCAHQgCAFgEADQgGAEgJgCIgLgCQgEAAgFACIgIABQgGAAgFgEg");
	this.shape_217.setTransform(464.1,243.3);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#372511").s().p("AAkAHQgFgCgHAAIgDgDQgFgCgGgCQgGgCgEAAQgIgBgHAEIgIADIgLACQgOADgNAGIgJAFIgFgHQgDgHAEgEQAFgHAPgGQAUgHAgAAQAggBAYAIQAPAGAGAHQAEAEgDAHQgCAFgIAFQgMgKgSgEg");
	this.shape_218.setTransform(464.3,240.6);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#E18F59").s().p("AgJAHIgBgBQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAIAEgFQACgCABgEQAFgCAGAEIgLAGIgHAGIgCgBg");
	this.shape_219.setTransform(537.2,249.6);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_220.setTransform(546.2,244.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#EEC09E").s().p("AgQAgIAHgKIAFgGQgPAMgDAAQgDAAAIgKIAIgKQADgEgMAJIgCAAIgCAAQgBgDAGgEIAHgGIALgGIAHgFIgBAFIABAGQADAFAHgBIgBABIgGARQgEAIgEAEIgDABIAAAAIAEgLQgFALgEABIgCgBIgBgBIAEgGQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAAgDIgBACIgFAGQgGAGgCAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBgAgCgTIgLgDQgFgCgEgFQgDgCgBgEQAIAGALgEQAEgBAFAAIALABQAIACAGgDIgDAFIgHAHIgBAAQgGADgIABIAAACIgCADIAAABQgBAAgBgHg");
	this.shape_221.setTransform(538.2,249.8);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#5BB1B0").s().p("AgTAdQgEgBgGgDQgKgGgOgKQgTgNgGgPQgCgFAAgEQAHAKAaAJQAJADAKABIAKAKIAJAKQgBAEgCAEIgEAFIgCABIgBAAgAAJAXIgBgGIABgFQABgEADgDQABgCADgCIAAAAIAHgFQAdgCAQgJQAJgEACgFIABAAQAAADgDAFQgGALgVAOIgSANQgJAHgGAAIgCAAQgFAAgCgGg");
	this.shape_222.setTransform(538.1,247.3);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#372511").s().p("AAkAHQgFgCgHAAIgDgDIgLgEQgHgCgDAAQgIgBgHAEQgFABgEACIgKACQgPADgNAGIgIAFQgEgEgBgDQgEgHAFgEQAFgHAPgGQAUgHAgAAQAfgBAZAIQAPAGAFAHQAFAEgDAHQgCAFgHAFQgNgKgSgEg");
	this.shape_223.setTransform(538.3,240.6);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#6BD3D2").s().p("AAcAYQAEgDACgGQACgGAAgOQgBgLgJgJQAHAAAFACQASAEANAKIAHAJQAFAFAAACIgBABIAAABQgCAFgJAEQgQAJgdACIAEgFgAgcAcQgKgBgJgDQgagJgHgKIAAgDIACgCQAEgIAGgEIAIgFQANgGAPgDIAKgCIgDAEQgGAGgBAIQgDAHABAHQABAIAEAHIADADIAAABQACAEACACIgGgBg");
	this.shape_224.setTransform(538.1,243.8);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AgaAcIgBgBIgDgDQgDgGgBgJQgBgIACgGQACgIAFgGIAEgEQAEgDAFgBQAGgFAHABQAFAAAGACIAMAGIADADQAIAJABALQABAOgDAHQgCAFgEADQgGAEgIgCIgLgCQgFAAgEACIgIABQgGAAgFgEg");
	this.shape_225.setTransform(538.2,243.3);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#E18F59").s().p("AgIAHIgCgBQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQACgBACgEQADgCAAgEQAFgCAGAEIgLAGIgHAGg");
	this.shape_226.setTransform(481.6,249.6);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#EEC09E").s().p("AgPAgQAAgCAFgIIAFgHQgOAMgDABQgEAAAJgLIAIgKQADgEgNAKIgBABIgCgCQgBgBAGgGIAHgFIALgHIAHgEIgBAFIABAGQACAEAHgBIAAACIgGAQQgEAJgEAEIgDABIAAAAIAEgLQgFAKgFABIgBAAIAAgBIADgGIADgEIAAgCIAAACIgGAGQgGAGgCAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQABgBAAgBgAgDgTQgHAAgEgDQgFgDgDgEIgEgGQAIAGALgEQAEgCAEABIAMACQAJABAFgDIgEAFIgHAGQgGAEgIAAIgBADIgBAEIAAAAQgBAAgCgHg");
	this.shape_227.setTransform(482.6,249.9);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#000000").s().p("AgaAdIgBgCIgCgDQgEgGgBgJQgBgIACgGQADgIAFgGIADgEQAEgDAFgCQAHgDAGAAQAGAAAFACQAHACAFAEIADADQAKAJAAALQAAAOgDAGQgCAGgDADQgFADgJgBIgMgCQgEAAgFABQgEACgEAAQgGAAgFgDg");
	this.shape_228.setTransform(482.6,243.3);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#628DD1").s().p("AAcAYQADgDACgGQADgHAAgMQAAgNgKgJIANADQAQAEANAKIAIAJQAGAFgBACIAAABQgEAGgIAEQgQAJgdADIAEgGgAgcAcIgTgEQgagIgHgMIAAgCIACgDQAEgGAGgFQAEgDAFgCQAMgHAOgCIALgDIgDAFQgFAGgDAHQgCAJABAGQABAJAEAGIACADIABABIAEAGIgGgBg");
	this.shape_229.setTransform(482.6,243.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#447BCD").s().p("AgUAdIgIgEQgMgFgMgLQgVgNgFgPIgCgJQAHAMAaAHIATAEQADAFAGAFIAJAKQAAAEgDAEQgCAEgCABIgCABIgBAAgAAIAXIgBgGIABgFQACgDADgEIAEgEIAHgEQAdgDAQgJQAIgEAEgFIAAAAQAAADgDAFQgHALgTAOQgMAKgHADQgKAHgFAAIgCAAQgGAAgCgGg");
	this.shape_230.setTransform(482.6,247.3);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#372511").s().p("AAlAHIgNgCIgCgDQgGgCgGgCQgGgCgEAAQgIAAgHADQgFABgDACIgLACQgPADgLAGQgGACgEADQgEgDgBgEQgDgHAEgEQAFgHAPgFQAUgIAgAAQAgAAAYAIQAQAFAFAHQAFAEgEAHQgCAFgHAFQgNgKgRgEg");
	this.shape_231.setTransform(482.7,240.6);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_232.setTransform(400.5,244.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#E18F59").s().p("AAAACIgKgGQAFgEAFACIAEAGIAEAFQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAIgCABIgBABIgIgGg");
	this.shape_233.setTransform(409.5,249.6);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#4A7328").s().p("AARAcIgEgFIgDgIIAJgKIAKgKQAJgBAJgDQAbgJAHgKQAAAEgCAFQgGAPgTANQgOAKgLAGQgFADgDABIgCAAIgCgBgAgSAdQgEAAgKgHIgSgNQgVgOgGgLQgDgFAAgDIABAAQACAFAIAEQARAJAcACIAIAFIAEAEQADADABAEQACACAAADQAAAEgCACQgCAGgGAAIgCAAg");
	this.shape_234.setTransform(408.6,247.3);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#EEC09E").s().p("AAJAeIgGgGIgBgCIAAADIADADIAEAGIAAABIgCABQgFgBgFgLIAEALIgBAAIgCgBQgEgEgEgIIgGgRIgBgBQAHABADgFQACgCgBgEQABgDgCgCIAHAFIAKAGIAIAGQAGAEgCADIgBAAIgCAAQgMgJADAEIAIAKQAIAKgDAAQgDAAgOgMIAEAGIAHAKQAAABAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgCAAgFgGgAAAgNQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgCQgIgBgHgDIgHgHIgDgFQAGADAIgCIALgBQAFAAAFABQAKAEAIgGIgEAGQgEAFgEACIgMADQgBAHgBAAIgBgBg");
	this.shape_235.setTransform(408.5,249.8);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#000000").s().p("AAIAfQgFgCgEAAIgLACQgJACgGgEQgEgDgCgFQgCgHABgOQAAgLAJgJIAEgDQAEgDAGgDQAHgCAEAAQAHgBAIAFIAIAEIADAEQAGAGACAIQACAGgBAIQgBAJgDAGIgDADIgBABQgFAEgGAAIgIgBg");
	this.shape_236.setTransform(408.5,243.3);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#372511").s().p("AhLALQgDgHAFgEQAFgHAPgGQAZgIAfABQAgAAAUAHQAPAGAFAHQAEAEgDAHQgBADgEAEQgDgDgGgCQgNgGgOgDIgLgCIgIgDQgHgEgIABQgEAAgGACQgGACgFACIgDADQgHAAgFACQgSAEgMAKQgIgFgCgFg");
	this.shape_237.setTransform(408.4,240.6);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#609634").s().p("AAbAXIAAgBIADgDQAEgHAAgIQACgHgDgHQgCgIgFgGIgEgEIALACQAOADANAGQAGACADADQAGAEAEAIIACACQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQgHAKgbAJQgJADgJABIgHABIAFgGgAhFASQgIgEgCgFIAAgBIgBgBQAAgCAFgFQAEgGAEgDQAMgKASgEQAFgCAHAAQgJAJgBALQAAAOACAGQACAGAEADIADAFQgcgCgRgJg");
	this.shape_238.setTransform(408.6,243.8);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#E18F59").s().p("AABACIgLgGQAFgEAGACQAAAEADACIAEAFQAAAAABABQAAAAAAAAQABAAAAAAQAAAAABAAIgBABIgCABIgHgGg");
	this.shape_239.setTransform(428,249.6);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#EEC09E").s().p("AAIAeIgFgGIgCgCIABADQABAAAAAAQAAAAAAABQABAAAAABQAAAAABABIADAGIAAABIgCABQgEgBgFgLIADALIAAAAIgCgBQgEgEgEgIIgGgRIgBgBQAHABADgFIABgGIgBgFIAHAFIALAGIAHAGQAFAEgBADIgBAAIgCAAQgMgJADAEIAIAKQAIAKgDAAQgDAAgPgMIAFAGIAGAKQAAABAAABQAAABAAAAQAAABAAAAQAAAAgBAAQgCAAgFgGgAAAgNIgBgDIAAgCQgIgBgHgDQgEgDgDgEIgDgFQAFADAJgCIALgBQAFAAAEABQALAEAIgGQgBAEgDACQgEAFgFACIgLADQgBAHgCAAIAAgBg");
	this.shape_240.setTransform(427,249.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#3A4D75").s().p("AASAcIgEgFQgDgEgBgEIAJgKIAKgKIATgEQAagJAHgKQAAAEgCAFQgFAPgUANQgOAKgLAGQgEADgFABIAAAAIgCgBgAgRAdQgGAAgJgHIgSgNQgVgOgGgLQgDgFAAgDIABAAQACAFAJAEQAQAJAdACQADAEAEABQACABABADQAEADABAEIABAFIAAAGQgDAGgFAAIgCAAg");
	this.shape_241.setTransform(427.1,247.3);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_242.setTransform(419,244.7);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#48608E").s().p("AAbAXIAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAEgHABgIQABgHgDgHQgBgIgGgGIgEgEIALACQAPADAMAGIAJAFQAGAEAEAIIACACIAAADQgHAKgaAJIgTAEIgHABQADgCACgEgAhEASQgJgEgCgFIAAgBIgBgBQgBgCAGgFIAHgJQANgKASgEQAFgCAHAAQgJAJgBALQgBAOADAGQACAGAEADIAEAFQgdgCgQgJg");
	this.shape_243.setTransform(427.1,243.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#372511").s().p("AhLALQgEgHAGgEQAFgHAPgGQAZgIAfABQAgAAAVAHQAOAGAFAHQAFAEgEAHQgBADgEAEIgJgFQgMgGgPgDIgLgCQgDgCgFgBQgHgEgJABQgDAAgGACIgLAEIgDADQgHAAgFACQgSAEgNAKQgHgFgCgFg");
	this.shape_244.setTransform(426.9,240.6);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#000000").s().p("AAIAfQgEgCgFAAIgLACQgJACgFgEQgEgDgCgFQgDgHAAgOQACgLAIgJIADgDIAMgGQAGgCAEAAQAHgBAHAFQAFABAEADIAEAEQAFAGACAIQACAGgBAIQgBAJgEAGQAAABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAIgBABQgFAEgGAAIgIgBg");
	this.shape_245.setTransform(427,243.3);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_246.setTransform(488.8,259.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#E18F59").s().p("AgJAGIgBAAQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAAAIADgFQADgDABgDQAGgCAFADIgLAHIgHAGIgCgCg");
	this.shape_247.setTransform(479.8,264.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#EEC09E").s().p("AgQAhIAHgKIAFgHQgPAMgDABQgDAAAIgLIAIgKQADgEgMAKIgCAAIgBgBQgCgCAGgFIAHgGIALgGIAHgEQgBACAAADQAAADABACQADAFAHgBIgBACIgGAQIgIANIgDABIAAAAIAEgMQgFALgEABIgCAAIgBgBIAEgGIADgEIAAgCIgBABIgFAGQgGAGgCAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBgAgCgTIgMgCQgEgDgEgFIgEgGQAIAGALgDQAEgCAFAAIALACQAJACAFgEIgDAFQgEAFgDACQgHADgHABIgBACQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAIAAABQgBAAgBgHg");
	this.shape_248.setTransform(480.7,264.8);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#5BB1B0").s().p("AgTAdQgEgBgGgDQgKgGgOgKQgTgNgGgPQgCgGAAgDQAGAKAcAJQAIADAKABIAKAKIAJAKQgBADgDAFIgDAFIgDABIAAAAgAAJAXQgCgCAAgEQAAgDACgCQABgEADgDQABgDADgCQAEAAADgEQAdgCAQgJQAJgEACgGIABAAQAAAEgDAEQgGAMgVAOIgSANQgJAHgGAAIgBAAQgGAAgCgGg");
	this.shape_249.setTransform(480.7,262.4);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#6BD3D2").s().p("AAcAYQAEgDACgFQACgIAAgNQgBgLgJgJQAHABAFABQASAFAMAKQAEACAEAGQAFAGAAABIgBABIAAAAQgCAGgJAEQgQAJgdACIAEgFgAgcAcQgKgBgIgCQgcgKgGgKQAAAAAAAAQAAgBAAAAQAAAAAAgBQAAAAAAgBIACgCQAEgIAGgDIAJgGQANgHAOgCIAKgCIgDAEQgFAGgCAIQgDAHACAHQAAAIAEAHIADADIAAABIAEAGIgGgBg");
	this.shape_250.setTransform(480.7,258.9);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AgaAcIgBgBIgDgDQgDgGgBgJQgCgIADgGQACgIAFgGIAEgEIAIgFQAHgEAHABQAFAAAGACIALAGIAEADQAJAJAAALQABAOgDAHQgBAFgFADQgFAEgJgCIgLgCQgFAAgEACIgHABQgHAAgFgEg");
	this.shape_251.setTransform(480.7,258.3);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#372511").s().p("AAlAIQgFgCgHgBIgEgDIgLgEQgGgCgEAAQgIgBgHAEIgIADIgLADQgOACgNAGIgJAGIgFgIQgDgGAFgFQAEgGAPgGQAUgIAgAAQAggBAYAJQAQAGAEAGQAGAFgDAGQgDAFgHAGQgNgKgRgEg");
	this.shape_252.setTransform(480.8,255.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#E18F59").s().p("AgJAGIgBAAQAAAAABAAQAAAAAAAAQABAAAAgBQABAAAAAAIAEgFIADgGQAFgCAGADIgLAHIgIAGIgBgCg");
	this.shape_253.setTransform(552.6,264.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#EEC09E").s().p("AgPAhIAFgKIAFgHQgOAMgDABQgEAAAJgLIAHgKQAEgEgNAKIgBAAIgBgBQgBgCAEgFIAIgGIALgGIAHgEIgBAFIABAFQACAFAIgBIgBACIgGAQQgEAIgEAFIgDABIAAAAIAEgMQgGALgDABIgCAAIgBgBIAEgGIACgEIABgCIgCABIgEAGQgGAGgCAAQAAAAAAAAQAAAAgBgBQAAAAAAgBQAAAAABgBgAgDgTQgGgBgEgBQgFgDgEgFQgDgCgCgEQAIAGAMgDQAEgCAFAAIAKACQAJACAHgEIgFAFQgCAFgFACQgGADgIABIAAACQgBABAAAAQAAABAAAAQAAABgBAAQAAAAAAAAIAAABQgBAAgCgHg");
	this.shape_254.setTransform(553.6,264.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#000000").s().p("AgaAcIgBgBIgCgDQgFgGAAgJQgBgIACgGQACgIAFgGIAEgEQAEgDAFgCQAHgEAGABQAFAAAGACIALAGIADADQAKAJAAALQABAOgDAHQgCAFgDADQgGAEgJgCIgLgCQgFAAgEACIgHABQgHAAgFgEg");
	this.shape_255.setTransform(553.5,258.3);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#4A7328").s().p("AgTAdQgEgBgFgDQgMgGgNgKQgTgNgGgPIgCgJQAHAKAaAJIATAEIAKAKIAJAKIgDAIIgEAFIgDABIAAAAgAAJAXIgBgGIABgFQABgEADgDIAEgFQAEAAADgEQAdgCAQgJQAIgEADgGIABAAQAAAEgDAEQgGAMgVAOIgSANQgJAHgGAAIgBAAQgGAAgCgGg");
	this.shape_256.setTransform(553.5,262.4);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#372511").s().p("AAkAIQgFgCgHgBIgDgDIgLgEQgGgCgEAAQgIgBgHAEQgFABgDACIgLADQgPACgMAGIgJAGQgEgEgBgEQgEgGAFgFQAFgGAPgGQAUgIAgAAQAfgBAZAJQAPAGAFAGQAGAFgEAGQgCAFgHAGQgNgKgSgEg");
	this.shape_257.setTransform(553.7,255.6);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#609634").s().p("AAcAYQAEgDACgFQADgIgBgNQgBgLgJgJQAHABAFABQASAFANAKIAHAIQAGAGgBABIgBABIAAAAQgDAGgIAEQgQAJgdACIAEgFgAgcAcIgTgDQgagKgHgKIAAgDIACgCQAEgIAGgDIAJgGQAMgHAPgCIALgCIgEAEQgFAGgCAIQgDAHABAHQABAIAEAHIACADIABABQACAEADACIgHgBg");
	this.shape_258.setTransform(553.5,258.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_259.setTransform(561.6,259.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#E18F59").s().p("AgHAHIgDgBQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQACgCABgDQADgDAAgDQAHgCAEADIgLAHIgGAGg");
	this.shape_260.setTransform(443.4,264.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#E64A00").s().p("AgUAdIgIgEQgLgFgNgLQgUgNgGgPIgCgJQAHALAbAIIATAEQACAFAIAFIAIAKQAAADgEAFQgBADgCACIgDABIgBAAgAAIAXQgBgCABgEIAAgFIAFgHIAEgFQAEAAADgDQAdgDAQgJQAJgEADgGIAAAAQAAAEgCAEQgHAMgUAOQgMAJgHAEQgKAHgFAAIgBAAQgGAAgDgGg");
	this.shape_261.setTransform(444.4,262.4);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#EEC09E").s().p("AgPAhIAGgLQAFgGgBAAQgNAMgDAAQgFAAAJgLIAIgKQACgDgLAJIgBABIgCgBQgCgCAGgFIAHgGIAKgHIAHgEIAAAFQAAAEAAACQADAEAHAAIAAABIgGARQgEAIgEAEIgDACIAAgBQAAAAAEgMQgFAMgEABIgDgBIAAgBIAEgGIACgDIABgDIgBABIgGAHQgFAGgBAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAgAgCgSIgMgEQgEgCgDgFIgFgGQAJAGAJgEQAGgCAEABIALACQAJABAFgDQgBADgDADQgDADgEACQgGADgHACIgBACIgCAEIAAABQgBAAgBgHg");
	this.shape_262.setTransform(444.5,264.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#41210C").s().p("AgaAdIgBgCIgDgDQgDgGgBgIQgCgJADgGQACgIAFgGIAEgEIAIgFQAHgDAHAAQAFAAAGADQAGACAFADIADADQAKAJAAALQABAOgDAHQgCAGgEADQgFADgJgCIgMgBQgDgBgGACIgHABQgGAAgFgDg");
	this.shape_263.setTransform(444.5,258.3);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#372511").s().p("AAlAHIgNgCIgDgDQgFgCgGgCQgGgCgEAAQgIAAgHADIgIADIgLACQgOACgNAHIgJAGIgGgHQgCgIAFgEQAEgGAPgGQAUgIAggBQAgAAAYAJQAQAGAFAGQAEAEgDAIQgDAEgHAGQgMgKgRgFg");
	this.shape_264.setTransform(444.6,255.7);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#EC672C").s().p("AAcAYQAEgDACgGQADgHgBgNQAAgMgKgIIANACQARAEAMAKQAEACAFAHQAFAFgBACIAAABQgDAGgJAEQgQAJgdACQADgCABgDgAgbAcIgTgEQgbgJgHgLIAAgCIADgDQADgHAGgEIAJgFQANgHAOgCIALgDIgEAFQgFAFgCAIQgDAIACAHQABAIADAHIADACIABACIAEAGIgGgBg");
	this.shape_265.setTransform(444.4,258.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#E18F59").s().p("AABACIgLgHQAGgDAFACQAAADADADIAEAFQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAIgBABIgCABIgHgGg");
	this.shape_266.setTransform(354.8,264.7);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#EEC09E").s().p("AAIAeIgGgHIAAgBIAAADIADADIADAGIAAABIgBABQgFgBgFgMIADAMIAAABIgCgCQgEgEgEgIIgGgRIAAgBQAHAAACgEIABgGIgBgFIAHAEIALAHIAHAGQAGAFgBACIgCABIgBgBQgNgJADADIAIAKQAJALgEAAQgDAAgOgMIAFAGQAFAJAAACQAAAAABABQAAABAAAAQAAABgBAAQAAAAAAAAQgCAAgGgGgAAAgMIAAgEIgBgCQgIgCgGgDQgEgCgDgDIgEgGQAFADAJgBIAMgCQAEgBAEACQALAEAIgGIgEAGQgDAFgFACIgLAEQgCAHgCAAIAAgBg");
	this.shape_267.setTransform(353.7,264.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#393939").s().p("AASAcIgEgFQgDgFAAgDIAJgKQAGgFADgFIATgEQAagIAHgLQAAAEgCAFQgFAPgVANQgMALgMAFIgIAEIgBAAIgCgBgAgRAdQgFAAgKgHQgHgEgLgJQgUgOgHgMQgDgEAAgEIAAAAQAEAGAIAEQAQAJAdADQADADAEAAIAEAFQADAEACADIABAFIgBAGQgDAGgGAAIgBAAg");
	this.shape_268.setTransform(353.8,262.4);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#424242").s().p("AhEASQgIgEgEgGIAAgBQgBgCAGgFIAIgJQANgKAQgEIANgCQgKAIAAAMQAAANADAHQACAGADADIAEAFQgdgCgQgJgAAbAXIABgCIACgCQAEgHABgIQABgHgCgIQgDgIgFgFIgDgFIALADQAOACAMAHIAJAFQAGAEAEAHIACADIAAACQgHALgaAJIgTAEIgGABIAEgGg");
	this.shape_269.setTransform(353.8,258.9);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#372511").s().p("AhLAMQgEgIAFgEQAFgGAQgGQAYgJAgAAQAgABAUAIQAPAGAFAGQAEAEgDAIQgBADgEAEIgKgGQgLgHgPgCIgLgCQgDgCgFgBQgHgDgJAAQgDAAgGACQgGACgGACIgCADIgNACQgRAFgNAKQgHgGgCgEg");
	this.shape_270.setTransform(353.6,255.7);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFF6CD").s().p("AAIAfQgFgCgEABIgLABQgKACgFgDQgDgDgCgGQgDgHAAgOQAAgLAKgJIADgDQAFgDAHgCQAFgDAFAAQAHAAAHADQAFACAEADIADAEQAFAGADAIQACAGgBAJQgBAIgEAGIgCADIgBACQgFADgGAAIgIgBg");
	this.shape_271.setTransform(353.8,258.3);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#E18F59").s().p("AgIAHIgCgBQAAAAABAAQAAAAABAAQAAAAABgBQAAAAAAAAIAEgFQADgDAAgDQAGgCAFADIgLAHIgHAGg");
	this.shape_272.setTransform(334.7,264.7);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#EEC09E").s().p("AgPAhQAAgCAFgJQAGgGgBAAQgOAMgDAAQgEAAAJgLIAIgKQACgDgMAJIgBABIgCgBQgBgCAGgFIAHgGIALgHIAGgEIgBAFIABAGQAEAEAHAAIgBABIgGARQgFAIgDAEIgDACIAAgBIAEgMQgGAMgEABIgBgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIADgGIACgDIABgDIgBABIgFAHQgGAGgCAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBABAAgAgDgSIgLgEQgFgCgDgFIgEgGQAIAGALgEQAFgCADABIAMACQAJABAFgDIgEAGQgDADgEACQgGADgIACIgBACIgBAEIAAABQgBAAgCgHg");
	this.shape_273.setTransform(335.8,264.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#628DD1").s().p("AAcAYQADgDADgGQACgHgBgNQAAgMgJgIIAMACQASAEAMAKQAEACAEAHQAGAFgBACIgBABQgDAGgIAEQgQAJgdACIAEgFgAgcAcIgTgEQgagJgHgLIAAgCIACgDQAEgHAFgEIAKgFQAMgHAPgCQAFgCAFgBIgDAFQgFAFgCAIQgDAIABAHQABAIAEAHIACACIACACIADAGIgGgBg");
	this.shape_274.setTransform(335.7,258.9);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#447BCD").s().p("AgUAdIgIgEQgMgFgNgLQgUgNgFgPIgCgJQAHALAaAIIATAEIAKAKIAJAKQAAADgEAFIgDAFIgDABIgBAAgAAIAXIgBgGIABgFQABgDAEgEIAEgFQAEAAADgDQAdgDAQgJQAIgEADgGIABAAIgCAIQgHAMgVAOQgLAJgHAEQgKAHgFAAIgBAAQgGAAgDgGg");
	this.shape_275.setTransform(335.7,262.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#000000").s().p("AgZAdIgCgCIgCgDQgEgGgBgIQgBgJADgGQACgIAFgGIADgEIAJgFQAHgDAGAAQAGAAAGADQAGACAFADIADADQAJAJAAALQABAOgCAHQgDAGgDADQgGADgIgCIgMgBQgEgBgFACIgIABQgFAAgFgDg");
	this.shape_276.setTransform(335.7,258.3);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#372511").s().p("AAkAHIgMgCIgDgDQgFgCgGgCQgGgCgEAAQgIAAgHADIgJADQgFAAgFACQgPACgMAHIgKAGQgEgEgBgDQgCgIADgEQAGgGAOgGQAVgIAggBQAfAAAZAJQAQAGAEAGQAFAEgDAIQgDAEgHAGQgMgKgSgFg");
	this.shape_277.setTransform(335.9,255.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#E18F59").s().p("AgIAGIgCAAQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABAAIADgFQADgDAAgDQAGgCAFADIgLAHIgHAGIgBgCg");
	this.shape_278.setTransform(371,264.7);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#EEC09E").s().p("AgQAhIAHgKIAEgHQgOAMgDABQgDAAAIgLIAIgKQADgEgMAKIgCAAIgCgBQgBgCAFgFIAIgGIAKgGIAIgEIgBAFIAAAFQAEAFAHgBIgBACQgDAGgDAKQgEAIgEAFIgDABIAAAAIAEgMQgGALgEABIgBAAIgBgBIAEgGIACgEIABgCIgBABIgFAGQgGAGgCAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBgAgCgTIgMgCQgEgDgEgFQgDgCgBgEQAIAGALgDQAEgCAFAAIAKACQAJACAGgEIgDAFQgEAFgDACQgHADgIABIAAACQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAIAAABQgBAAgBgHg");
	this.shape_279.setTransform(372,264.8);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#000000").s().p("AgaAcIgBgBIgCgDQgEgGgBgJQgBgIADgGQABgIAGgGIADgEIAJgFQAHgEAGABQAFAAAHACQAGADAEADIAEADQAJAJAAALQABAOgCAHQgCAFgEADQgGAEgJgCIgLgCQgEAAgFACIgHABQgHAAgFgEg");
	this.shape_280.setTransform(372,258.3);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_281.setTransform(380,259.7);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#372511").s().p("AAkAIQgEgCgIgBIgDgDQgFgCgGgCQgGgCgEAAQgIgBgHAEIgIADQgGABgFACQgOACgNAGIgJAGQgEgEgBgEQgDgGAEgFQAFgGAOgGQAVgIAgAAQAfgBAZAJQAPAGAFAGQAGAFgDAGQgDAFgHAGQgNgKgSgEg");
	this.shape_282.setTransform(372.1,255.6);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#3A4D75").s().p("AgTAdQgEgBgFgDQgLgGgOgKQgTgNgGgPQgCgGAAgDQAHAKAbAJQAJADAJABIAKAKIAJAKQAAADgDAFIgEAFIgCABIgBAAgAAIAXIAAgGIABgFQABgEADgDIAFgFQADAAAEgEQAcgCAQgJQAJgEACgGIABAAQAAAEgCAEQgHAMgVAOIgRANQgKAHgFAAIgBAAQgHAAgDgGg");
	this.shape_283.setTransform(371.9,262.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#48608E").s().p("AAcAYQAEgDACgFQADgIgBgNQgBgLgJgJQAIABAEABQASAFANAKQADACAEAGQAGAGgBABIgBABIAAAAQgCAGgJAEQgQAJgcACIADgFgAgcAcQgJgBgJgCQgbgKgHgKIAAgDIACgCQADgIAHgDIAJgGQANgHAOgCQAFgCAGAAIgEAEQgFAGgCAIQgDAHACAHQAAAIAEAHIACADIACABQABAEADACIgHgBg");
	this.shape_284.setTransform(371.9,258.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#E18F59").s().p("AgIAHIgCgBQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQACgCABgDQADgDAAgDQAHgCAEADIgLAHIgGAGg");
	this.shape_285.setTransform(389.1,264.7);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#EEC09E").s().p("AgPAhIAGgLQAFgGgBAAQgNAMgEAAQgEAAAJgLIAIgKQACgDgLAJIgCABIgCgBQgBgCAGgFIAHgGIALgHIAGgEIAAAFQAAAEAAACQAEAEAGAAIAAABIgGARQgEAIgEAEIgDACIAAgBIAEgMQgFAMgFABIgCgBIAAgBIAEgGIACgDIABgDIgBABIgGAHQgFAGgCAAQAAAAAAAAQAAAAAAgBQgBAAAAgBQAAgBABAAgAgCgSIgMgEQgEgCgEgFIgEgGQAIAGAKgEQAFgCAFABIALACQAJABAFgDQgBADgDADQgDADgEACQgFADgJACIAAACIgCAEIAAABQgBAAgBgHg");
	this.shape_286.setTransform(390.1,264.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#41210C").s().p("AgaAdIgBgCIgDgDQgDgGgCgIQAAgJADgGQACgIAFgGIADgEIAIgFQAIgDAGAAQAFAAAGADQAHACAFADIADADQAJAJABALQAAAOgCAHQgDAGgEADQgFADgJgCIgLgBQgEgBgFACIgIABQgGAAgFgDg");
	this.shape_287.setTransform(390.1,258.3);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#E64A00").s().p("AgUAdIgIgEQgLgFgNgLQgVgNgFgPIgCgJQAHALAaAIIATAEQADAFAHAFIAJAKQAAADgEAFQgBADgCACIgDABIgBAAgAAIAXQgBgCABgEIAAgFIAFgHIAEgFQAEAAADgDQAdgDAQgJQAJgEADgGIAAAAQAAAEgCAEQgHAMgUAOQgMAJgHAEQgKAHgFAAIgBAAQgGAAgDgGg");
	this.shape_288.setTransform(390,262.4);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#EC672C").s().p("AAcAYQADgDADgGQADgHgBgNQAAgMgKgIIANACQARAEAMAKQAEACAEAHQAGAFgBACIAAABQgDAGgJAEQgQAJgdACQADgCABgDgAgcAcIgTgEQgagJgHgLIAAgCIADgDQADgHAGgEIAJgFQANgHAOgCQAFgCAGgBIgEAFQgFAFgCAIQgDAIABAHQACAIADAHIACACIACACIAEAGIgHgBg");
	this.shape_289.setTransform(390,258.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#372511").s().p("AAlAHIgNgCIgDgDQgFgCgGgCQgGgCgEAAQgIAAgHADIgIADQgGAAgFACQgOACgNAHIgJAGIgGgHQgCgIAFgEQAEgGAPgGQAUgIAggBQAfAAAZAJQAQAGAEAGQAFAEgDAIQgDAEgHAGQgMgKgRgFg");
	this.shape_290.setTransform(390.2,255.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_291.setTransform(418.2,259.7);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#E18F59").s().p("AABACIgLgHQAFgDAGACIADAGIAEAFQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAIgCAAIgBACIgHgGg");
	this.shape_292.setTransform(427.3,264.7);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#EEC09E").s().p("AAIAeIgFgGIgBgBIABACIACAEIAEAGIgBABIgCAAQgDgBgFgLIACAMIAAAAIgCgBQgEgFgDgIIgHgQIgBgCQAIABACgFQABgCAAgDQAAgDgBgCIAHAEIALAGIAIAGQAFAFgCACIgBABIgCAAQgMgKADAEIAIAKQAIALgDAAQgDgBgOgMIAEAHIAGAKQAAABABAAQAAABAAAAQgBABAAAAQAAAAAAAAQgCAAgGgGgAAAgNIgBgDIAAgCQgIgBgGgDQgEgCgDgFIgFgFQAGAEAJgCIALgCQAFAAAEACQALADAJgGQgCAEgDACQgEAFgEADIgMACQgBAHgCAAIAAgBg");
	this.shape_293.setTransform(426.2,264.8);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#4A7328").s().p("AASAcIgFgFIgCgIIAIgKIAKgKIATgEQAbgJAGgKQAAADgCAGQgGAPgTANQgNAKgMAGQgEADgFABIAAAAIgCgBgAgRAdQgGAAgJgHIgSgNQgVgOgGgMQgDgEAAgEIABAAQADAGAIAEQAQAJAdACQADAEAEAAIADAFQAEADABAEQABACABADQgBAEgBACQgCAGgGAAIgBAAg");
	this.shape_294.setTransform(426.3,262.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#609634").s().p("AAbAXIAAgBIADgDQAEgHAAgIQACgHgDgHQgCgIgFgGIgEgEIALACQAOACANAHIAJAGQAGADAEAIIACACIAAADQgHAKgbAKIgTADIgGABQADgCACgEgAhEASQgJgEgCgGIAAAAIgBgBQgBgBAFgGIAIgIQANgKARgFQAGgBAHgBQgJAJgBALQgBANADAIQACAFADADIAFAFQgdgCgQgJg");
	this.shape_295.setTransform(426.3,258.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#372511").s().p("AhLALQgEgGAFgFQAGgGAPgGQAYgJAgABQAgAAAUAIQAPAGAFAGQAFAFgEAGIgFAIIgJgGQgNgGgOgCIgLgDIgIgDQgHgEgJABQgDAAgGACIgLAEIgDADQgHABgGACQgRAEgNAKQgHgGgCgFg");
	this.shape_296.setTransform(426.1,255.6);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#000000").s().p("AAIAfQgEgCgFAAIgLACQgJACgGgEQgDgDgCgFQgDgHABgOQABgLAJgJIADgDIALgGQAGgCAEAAQAHgBAIAEIAIAFIAEAEQAFAGACAIQADAGgCAIQAAAJgEAGIgDADIAAABQgGAEgHAAIgHgBg");
	this.shape_297.setTransform(426.2,258.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#E18F59").s().p("AABACIgLgHQAGgDAFACQAAADADADIAEAFQAAAAABAAQAAABABAAQAAAAAAAAQABAAAAAAIgBABIgCABIgHgGg");
	this.shape_298.setTransform(409.1,264.7);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#447BCD").s().p("AASAcIgEgFQgDgFAAgDIAJgKQAGgFADgFIATgEQAagIAHgLIgBAJQgGAPgUANQgNALgMAFIgIAEIgBAAIgCgBgAgRAdQgFAAgKgHQgHgEgLgJQgUgOgHgMIgDgIIABAAQADAGAIAEQAQAJAdADQADADAEAAIAEAFQAEAEABADIABAFIgBAGQgDAGgGAAIgBAAg");
	this.shape_299.setTransform(408.1,262.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#EEC09E").s().p("AAIAeIgFgHIgBgBIABADIACADIADAGQABAAAAAAQAAAAAAABQAAAAAAAAQAAAAgBAAIgBABQgEgBgGgMIADAMIAAABIgBgCQgFgEgEgIIgGgRIAAgBQAHAAACgEIABgGIgBgFIAHAEIALAHIAHAGQAGAFgBACIgCABIgBgBQgNgJADADIAIAKQAJALgEAAQgDAAgOgMQgBAAAGAGQAFAJAAACQAAAAABABQAAABAAAAQAAABgBAAQAAAAAAAAQgCAAgGgGgAAAgMIAAgEIgBgCQgIgCgGgDQgEgCgDgDIgEgGQAFADAJgBIAMgCQAEgBAEACQALAEAIgGQgBAEgDACQgDAFgFACIgLAEQgCAHgCAAIAAgBg");
	this.shape_300.setTransform(408.1,264.9);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#000000").s().p("AAIAfQgFgCgEABIgMABQgIACgGgDQgDgDgCgGQgDgHABgOQAAgLAKgJIACgDQAFgDAHgCQAFgDAFAAQAHAAAHADQAFACAEADIADAEQAFAGADAIQACAGgBAJQAAAIgFAGIgCADIgBACQgFADgGAAIgIgBg");
	this.shape_301.setTransform(408.1,258.3);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#628DD1").s().p("AhEASQgIgEgDgGIgBgBQgBgCAGgFIAIgJQANgKARgEIANgCQgKAIAAAMQgBANADAHQACAGADADIAEAFQgdgCgQgJgAAbAXIABgCIACgCQAFgHAAgIQABgHgCgIQgDgIgFgFIgDgFIALADQAOACAMAHIAKAFQAFAEAFAHIABADIAAACQgHALgaAJIgTAEIgGABQACgCACgEg");
	this.shape_302.setTransform(408.1,258.9);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#372511").s().p("AhLAMQgEgIAFgEQAFgGAQgGQAYgJAgAAQAgABAUAIQAPAGAFAGQAEAEgDAIQgBADgDAEIgKgGQgMgHgPgCIgLgCQgDgCgFgBQgHgDgIAAQgEAAgGACQgGACgGACIgCADIgNACQgRAFgNAKQgHgGgCgEg");
	this.shape_303.setTransform(408,255.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#E18F59").s().p("AgJAGIgBAAQABAAAAAAQAAAAABAAQAAAAAAgBQABAAAAAAIAEgFQADgDAAgDQAGgCAFADIgLAHIgIAGIgBgCg");
	this.shape_304.setTransform(461.6,264.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#EEC09E").s().p("AgQAhIAHgKIAEgHQgOAMgDABQgDAAAIgLIAIgKQADgEgMAKIgCAAIgCgBQgBgCAFgFIAIgGIALgGIAHgEQgBACAAADIAAAFQAEAFAHgBIgBACQgDAGgDAKQgEAIgEAFIgDABIAAAAIAEgMQgGALgEABIgBAAIgBgBIAEgGIACgEIABgCIgBABIgFAGQgGAGgCAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBgAgCgTIgMgCQgEgDgEgFQgDgCgBgEQAIAGALgDQAEgCAFAAIAKACQAJACAGgEIgDAFQgEAFgDACQgHADgIABIAAACQAAABgBAAQAAABAAAAQAAABgBAAQAAAAAAAAIAAABQgBAAgBgHg");
	this.shape_305.setTransform(462.6,264.8);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#000000").s().p("AgaAcIgBgBQgBAAAAAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQgFgGAAgJQgBgIACgGQACgIAFgGIAEgEIAIgFQAHgEAHABQAFAAAGACQAHADAEADIAEADQAJAJAAALQABAOgCAHQgDAFgEADQgFAEgKgCIgKgCQgFAAgEACIgHABQgHAAgFgEg");
	this.shape_306.setTransform(462.6,258.3);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#3A4D75").s().p("AgTAdQgFgBgFgDQgLgGgNgKQgTgNgGgPIgCgJQAHAKAaAJQAKADAJABIAKAKIAJAKQAAADgDAFIgEAFIgCABIgBAAgAAIAXIgBgGQAAgDACgCQABgEADgDIAEgFQAEAAADgEQAdgCAQgJQAJgEACgGIAAAAQAAAEgCAEQgGAMgVAOIgSANQgJAHgFAAIgBAAQgHAAgDgGg");
	this.shape_307.setTransform(462.6,262.4);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_308.setTransform(470.6,259.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#48608E").s().p("AAcAYQAEgDACgFQADgIgBgNQgBgLgJgJQAIABAEABQASAFANAKQADACAEAGQAGAGgBABIgBABIAAAAQgCAGgIAEQgRAJgcACIADgFgAgcAcQgJgBgJgCQgbgKgGgKQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBIABgCQADgIAHgDIAJgGQANgHAOgCQAFgCAGAAIgEAEQgFAGgCAIQgCAHABAHQAAAIAEAHQAAABABAAQAAAAAAABQAAAAABAAQAAABABAAIABABQABAEADACIgHgBg");
	this.shape_309.setTransform(462.5,258.9);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#372511").s().p("AAkAIQgEgCgIgBIgDgDQgFgCgGgCQgGgCgEAAQgIgBgHAEIgIADQgGABgFACQgOACgNAGIgJAGIgFgIQgDgGAEgFQAFgGAOgGQAVgIAgAAQAggBAYAJQAPAGAFAGQAGAFgDAGQgDAFgHAGQgNgKgSgEg");
	this.shape_310.setTransform(462.7,255.6);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#E18F59").s().p("AgIAHIgCgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAQADgCAAgDQAEgDAAgDQAGgCAFADIgLAHIgHAGg");
	this.shape_311.setTransform(534.1,264.7);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#EEC09E").s().p("AgPAhIAHgLIADgGQgNAMgEAAQgDAAAIgLIAJgKQACgDgLAJIgCABIgDgBQgBgCAGgFIAIgGIAKgHIAHgEIgBAFQgBAEACACQACAEAHAAIAAABIgGARQgEAIgEAEIgDACIAAgBQAAAAAEgMQgFAMgEABIgDgBIAAgBIAEgGIADgDIABgDIgBABIgHAHQgFAGgBAAQgBAAAAAAQAAAAAAgBQAAAAAAgBQAAgBAAAAgAgBgSIgNgEQgEgCgEgFIgEgGQAIAGAKgEQAGgCADABIAMACQAJABAFgDQgBADgCADQgEADgDACQgHADgIACIgBACIgBAEIAAABQgBAAAAgHg");
	this.shape_312.setTransform(535.1,264.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#E64A00").s().p("AgTAdQgEgBgFgDQgLgFgNgLQgUgNgGgPIgCgJQAHALAbAIIATAEQACAFAIAFIAIAKQAAADgEAFQgBADgCACIgDABIAAAAgAAIAXQgBgCABgEIAAgFIAFgHIAEgFQAEAAADgDQAdgDAQgJQAJgEADgGIAAAAQAAAEgCAEQgHAMgUAOQgMAJgHAEQgKAHgFAAIgBAAQgGAAgDgGg");
	this.shape_313.setTransform(535,262.4);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#EC672C").s().p("AAcAYQAEgDACgGQADgHgBgNQAAgMgKgIIANACQARAEAMAKQAEACAFAHQAFAFgBACIAAABQgDAGgJAEQgQAJgdACQADgCABgDgAgbAcIgTgEQgbgJgHgLIABgCIACgDQADgHAGgEIAJgFQANgHAOgCIALgDIgEAFQgFAFgCAIQgCAIABAHQABAIADAHIADACIABACIAEAGIgGgBg");
	this.shape_314.setTransform(535,258.9);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#41210C").s().p("AgaAdIgBgCIgDgDQgDgGgBgIQgBgJACgGQACgIAFgGIAEgEIAIgFQAHgDAHAAQAFAAAGADQAGACAFADIADADQAKAJAAALQABAOgDAHQgCAGgEADQgFADgJgCIgMgBQgDgBgGACIgHABQgGAAgFgDg");
	this.shape_315.setTransform(535.1,258.3);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#372511").s().p("AAlAHIgNgCIgDgDQgFgCgGgCQgGgCgEAAQgIAAgHADIgIADIgLACQgOACgNAHIgJAGIgGgHQgCgIAFgEQAEgGAPgGQAUgIAggBQAgAAAYAJQAQAGAFAGQAEAEgDAIQgDAEgHAGQgMgKgRgFg");
	this.shape_316.setTransform(535.2,255.7);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#E18F59").s().p("AgJAHIgBgBQAAAAABAAQAAAAAAAAQABAAAAgBQAAAAABAAIADgFQAEgDAAgDQAGgCAFADIgLAHIgHAGg");
	this.shape_317.setTransform(516,264.7);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#EEC09E").s().p("AgQAhQAAgCAHgJQAFgGgBAAQgOAMgEAAQgCAAAIgLIAIgKQACgDgLAJIgBABIgDgBQgBgCAGgFIAIgGIAKgHIAHgEIgBAFIABAGQACAEAIAAIgBABIgGARQgFAIgEAEIgCACIAAgBIAEgMQgGAMgEABIgBgBQgBAAAAAAQAAAAAAAAQAAgBAAAAQAAAAABAAIADgGIACgDIABgDIgBABIgFAHQgGAGgCAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAAAgAgDgSIgLgEQgFgCgEgFIgDgGQAIAGALgEQAFgCADABIALACQAJABAGgDIgDAGIgHAFQgHADgIACIgBACIgBAEIAAABQgBAAgCgHg");
	this.shape_318.setTransform(517,264.9);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#393939").s().p("AgUAdQgDgBgGgDQgLgFgNgLQgUgNgGgPIgBgJQAGALAbAIIASAEIAKAKIAJAKQAAADgDAFIgEAFIgCABIgBAAgAAIAXIgBgGIABgFIAFgHIAEgFIAHgDQAcgDARgJQAIgEADgGIABAAIgDAIQgGAMgVAOQgLAJgHAEQgKAHgFAAIgBAAQgGAAgDgGg");
	this.shape_319.setTransform(516.9,262.4);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#424242").s().p("AAbAYQAEgDACgGQADgHgBgNQAAgMgKgIIANACQARAEANAKQADACAFAHQAFAFAAACIgBABQgDAGgIAEQgRAJgcACIADgFgAgdAcIgSgEQgbgJgGgLIAAgCIABgDQAEgHAGgEIAJgFQANgHAOgCIALgDIgDAFQgGAFgCAIQgCAIABAHQAAAIAEAHIADACIABACIAEAGIgHgBg");
	this.shape_320.setTransform(516.9,258.9);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#FFF6CD").s().p("AgaAdIgBgCIgDgDQgEgGAAgIQgBgJACgGQACgIAGgGIADgEIAIgFQAHgDAHAAQAFAAAGADQAHACAFADIACADQAKAJAAALQABAOgDAHQgCAGgEADQgFADgKgCIgKgBQgEgBgFACIgIABQgGAAgFgDg");
	this.shape_321.setTransform(516.9,258.3);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#372511").s().p("AAkAHIgMgCIgDgDQgFgCgGgCQgGgCgEAAQgIAAgHADIgJADIgKACQgPACgMAHIgKAGQgEgEgBgDQgCgIADgEQAGgGAOgGQAVgIAggBQAgAAAYAJQAQAGAFAGQAEAEgDAIQgDAEgHAGQgMgKgSgFg");
	this.shape_322.setTransform(517.1,255.7);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#E18F59").s().p("AgIAHIgCgBQAAAAABAAQAAAAABAAQAAAAAAgBQABAAAAAAIAEgFQADgDAAgDQAGgCAFADIgLAHIgHAGg");
	this.shape_323.setTransform(497.8,264.7);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#EEC09E").s().p("AgPAhQAAgCAGgJIAEgGQgNAMgEAAQgDAAAIgLIAIgKQADgDgMAJIgCABIgCgBQgBgCAGgFIAIgGIAKgHIAHgEQgCADAAACQAAAEACACQACAEAIAAIgBABIgGARIgIAMIgDACIAAgBIAEgMQgGAMgEABIgCgBIAAgBIAEgGIACgDIABgDIgBABIgGAHQgFAGgCAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQABgBAAAAgAgCgSIgMgEQgEgCgEgFIgEgGQAIAGAKgEQAGgCAEABIALACQAJABAFgDIgEAGIgHAFQgGADgIACIAAACIgCAEIAAABQgBAAgBgHg");
	this.shape_324.setTransform(498.8,264.9);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#000000").s().p("AgaAdIgBgCIgDgDQgDgGgBgIQAAgJABgGQADgIAFgGIADgEIAIgFQAHgDAHAAQAGAAAGADQAGACAFADIADADQAJAJAAALQABAOgDAHQgBAGgEADQgGADgJgCIgLgBQgEgBgFACIgIABQgGAAgFgDg");
	this.shape_325.setTransform(498.8,258.3);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#628DD1").s().p("AAcAYQAEgDACgGQACgHAAgNQAAgMgKgIIANACQARAEAMAKQAEACAFAHQAFAFgBACIAAABQgDAGgJAEQgQAJgdACIAEgFgAgcAcIgSgEQgbgJgHgLIAAgCIACgDQAEgHAGgEIAJgFQANgHAOgCIALgDIgDAFQgGAFgCAIQgCAIABAHQAAAIAEAHIADACIABACIAEAGIgHgBg");
	this.shape_326.setTransform(498.7,258.9);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#447BCD").s().p("AgUAdIgIgEQgLgFgNgLQgUgNgGgPIgCgJQAHALAbAIIASAEIAKAKIAJAKQAAADgEAFIgDAFIgDABIgBAAgAAJAXQgCgCAAgEQAAgCACgDQABgDADgEIAEgFIAHgDQAdgDAQgJQAJgEADgGIAAAAQAAAEgCAEQgHAMgUAOQgMAJgHAEQgKAHgEAAIgBAAQgHAAgCgGg");
	this.shape_327.setTransform(498.7,262.4);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#372511").s().p("AAlAHIgNgCIgDgDQgEgCgHgCQgGgCgEAAQgIAAgHADIgIADIgLACQgOACgNAHIgJAGIgGgHQgCgIAEgEQAFgGAPgGQAUgIAggBQAgAAAYAJQAQAGAFAGQAEAEgDAIQgDAEgHAGQgMgKgRgFg");
	this.shape_328.setTransform(498.9,255.7);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#E18F59").s().p("AAAACIgKgGQAFgEAGACQAAAEADACIAEAFQABAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAAAABQgBAAAAAAQAAAAgBAAIgBABIgIgGg");
	this.shape_329.setTransform(557.9,249.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#EEC09E").s().p("AAJAeIgGgGIgBgCQAAAAAAAAQAAAAAAABQAAAAAAAAQABABAAAAIACAEIAEAGIAAABIgCAAQgEgBgGgKQAEAKgBABIAAAAIgCgBQgEgEgEgJIgGgQIAAgCQAGABADgEQABgDABgDIgCgFIAHAEIALAHIAIAFQAFAGgCABIgCACIgBgBQgMgKADAEIAJAKQAHALgDAAQgDgBgOgMIAFAHQAFAIABACQAAABAAABQAAAAAAABQAAAAAAABQgBAAAAAAQgCAAgFgGgAAAgMIAAgEIgBgDQgJAAgFgEIgIgGIgDgFQAFADAJgBIAMgCQAEgBAFACQAKAEAIgGIgEAGQgEAEgEADQgEADgIAAQgBAHgCAAIAAAAg");
	this.shape_330.setTransform(556.9,249.9);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#447BCD").s().p("AASAcIgFgFQgDgEAAgEIAJgKQAHgFADgFIATgEQAagHAHgMIgCAJQgGAPgTANQgNALgMAFQgFADgDABIgBAAIgCgBgAgRAdQgFAAgKgHQgHgDgLgKQgUgOgIgLIgCgIIABAAQADAFAIAEQAQAJAdADIAHAEIAEAEQADAEABADIACAFQAAAEgCACQgCAGgFAAIgCAAg");
	this.shape_331.setTransform(557,247.3);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#628DD1").s().p("AhEASQgIgEgDgGIgBgBQgBgCAFgFIAJgJQANgKAQgEIANgDQgJAJAAANQgBAMACAHQACAGAEADIAEAGQgdgDgQgJgAAaAXIACgBIADgDQADgGABgJQAAgGgBgJQgDgHgFgGIgDgFIALADQAOACAMAHIAKAFQAGAFADAGIACADIAAACQgHAMgaAIIgTAEIgGABIADgGg");
	this.shape_332.setTransform(557,243.9);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#372511").s().p("AhLALQgDgHAEgEQAFgHARgFQAXgIAgAAQAgAAAVAIQAOAFAFAHQAEAEgDAHQgBAEgDADIgKgFQgMgGgOgDIgMgCQgEgCgEgBQgIgDgHAAQgEAAgGACQgHACgFACIgCADIgNACQgQAEgOAKQgHgFgCgFg");
	this.shape_333.setTransform(556.8,240.6);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#000000").s().p("AAIAeQgFgBgEAAIgLACQgKABgFgDQgEgDgCgGQgCgGABgOQAAgLAJgJIADgDQAFgEAGgCQAGgCAFAAQAHAAAHADQAFACAEADIADAEQAFAGADAIQABAGAAAIQgBAJgDAGIgDADIgCACQgEADgFAAQgEAAgFgCg");
	this.shape_334.setTransform(557,243.3);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#E18F59").s().p("AAAACIgKgGQAFgEAFACQABAEADACIADAFQABAAAAABQABAAAAAAQABAAAAAAQAAAAABAAIgBABIgCABIgIgGg");
	this.shape_335.setTransform(520.6,249.6);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#EEC09E").s().p("AAIAeIgFgGIgBgCIAAADQAAAAABAAQAAAAAAABQABAAAAABQABAAAAABIAEAGIgBABIgBABQgFgBgFgLIAEALIgBAAIgDgBQgDgEgEgIQgDgKgDgHIgBgBQAHABAEgFIAAgGIgBgFIAHAFIAKAGIAIAGQAGAEgCADIgBAAIgCAAQgMgJADAEIAIAKQAIAKgDAAQgDAAgPgMIAFAGIAHAKQAAABAAABQAAABgBAAQAAABAAAAQAAAAgBAAQgCAAgFgGgAAAgNIAAgDIgCgCQgHgBgGgDQgEgDgEgEIgDgFQAFADAJgCIAMgBQAEAAAEABQALAEAJgGIgFAGQgEAFgFACIgLADQgBAHgCAAIAAgBg");
	this.shape_336.setTransform(519.6,249.8);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#000000").s().p("AAIAfQgFgCgEAAIgLACQgJACgGgEQgDgDgDgFQgCgHAAgOQABgLAJgJIADgDIALgGQAHgCAEAAQAHgBAHAFQAFABAEADIADAEQAGAGABAIQADAGgBAIQgBAJgEAGQAAABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAIgBABQgFAEgGAAIgIgBg");
	this.shape_337.setTransform(519.6,243.3);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_338.setTransform(511.5,244.7);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#372511").s().p("AhMALQgDgHAGgEQAEgHAQgGQAZgIAfABQAgAAAVAHQAOAGAFAHQAEAEgDAHQgBADgEAEQgEgDgFgCQgNgGgOgDIgLgCQgEgCgEgBQgHgEgJABQgDAAgGACIgLAEIgEADQgHAAgEACQgSAEgNAKQgHgFgDgFg");
	this.shape_339.setTransform(519.4,240.6);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#48608E").s().p("AAbAXIAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQADgHACgIQABgHgDgHQgCgIgFgGIgEgEIALACQAOADANAGQAFACAEADQAGAEADAIIADACIAAADQgHAKgbAJQgJADgJABIgHABIAFgGgAhEASQgJgEgCgFIAAgBIgBgBQgBgCAGgFQAEgGADgDQANgKASgEQAEgCAHAAQgIAJgBALQgBAOADAGQACAGAEADIAEAFQgdgCgQgJg");
	this.shape_340.setTransform(519.6,243.8);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#3A4D75").s().p("AARAcIgDgFQgDgEgBgEIAKgKIAJgKQAKgBAJgDQAagJAHgKQAAAEgDAFQgFAPgTANQgOAKgKAGQgGADgDABIgBAAIgDgBgAgSAdQgFAAgJgHIgSgNQgVgOgGgLQgDgFAAgDIABAAQACAFAJAEQAQAJAdACQADAEAEABQADABABADIAEAHIABAFIAAAGQgDAGgGAAIgCAAg");
	this.shape_341.setTransform(519.6,247.3);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#E18F59").s().p("AAAACIgKgGQAFgEAGACQAAAEADACQABAEADABQABAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIgCABIgBABIgIgGg");
	this.shape_342.setTransform(502,249.6);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#EEC09E").s().p("AAJAeIgGgGQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAIACACIACAEIAEAGQAAAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAIgDAAQgEgBgFgKIADALIAAAAIgCgBQgFgEgDgJIgGgQIAAgCQAGABADgEQABgDAAgDIgBgFIAHAEIALAHIAIAFQAEAGgBABIgBACIgCgBQgMgKADAEIAJAKQAIALgFAAQgCgBgOgMIAEAHIAGAKQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBAAQgBAAgFgGgAAAgMIgBgEIAAgDQgIAAgGgEQgFgCgCgEIgEgFQAFADAJgBIALgCQAEgBAGACQAKAEAIgGIgFAGQgDAEgEADQgFADgHAAQgCAHgBAAIAAAAg");
	this.shape_343.setTransform(501,249.9);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#41210C").s().p("AAIAeQgFgBgEAAIgLACQgJABgFgDQgEgDgDgGQgDgGACgOQAAgLAKgJIACgDQAFgEAHgCQAGgCAEAAQAHAAAIADQAEACADADIAEAEQAGAGABAIQADAGgBAIQgBAJgDAGIgDADIgBACQgFADgFAAQgEAAgFgCg");
	this.shape_344.setTransform(501,243.3);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#E64A00").s().p("AASAcQgDgBgCgEQgDgEAAgEIAJgKQAHgFACgFIAUgEQAagHAHgMIgCAJQgGAPgTANQgNALgMAFQgFADgDABIgBAAIgCgBgAgRAdQgFAAgKgHQgHgDgMgKQgUgOgHgLIgCgIIABAAQADAFAIAEQAPAJAeADQACADAFABIAEAEIAEAHIABAFQABAEgCACQgCAGgFAAIgCAAg");
	this.shape_345.setTransform(501.1,247.3);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#EC672C").s().p("AhEASQgIgEgDgGIgBgBQgBgCAFgFIAJgJQANgKAQgEIANgDQgJAJgBANQgBAMADAHQACAGAEADIAEAGQgegDgPgJgAAaAXIACgBIACgDQAEgGABgJQAAgGgCgJQgCgHgFgGIgEgFIALADQAOACANAHIAJAFQAGAFAEAGIABADIABACQgHAMgaAIIgUAEIgGABIAEgGg");
	this.shape_346.setTransform(501.1,243.9);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#372511").s().p("AhLALQgDgHAEgEQAGgHAQgFQAXgIAfAAQAhAAAVAIQANAFAGAHQAEAEgDAHQgBAEgEADIgJgFQgNgGgOgDIgLgCQgDgCgFgBQgIgDgHAAQgEAAgGACQgGACgFACIgDADIgNACQgQAEgNAKQgIgFgCgFg");
	this.shape_347.setTransform(500.9,240.6);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#E18F59").s().p("AgJAHIgBgBQAAAAABAAQAAAAAAAAQABAAAAAAQAAgBABAAIAEgFIADgGQAGgCAFAEIgLAGIgIAGIgBgBg");
	this.shape_348.setTransform(463.2,249.6);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_349.setTransform(472.2,244.7);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#EEC09E").s().p("AgQAgIAHgKIAFgGQgPAMgDAAQgDAAAIgKIAIgKQADgEgMAJIgCAAIgBAAQgBgDAEgEIAIgGIALgGIAHgFQgCACABADQgBAEACACQADAFAHgBIgBABIgGARQgEAIgEAEIgDABIAAAAIAEgLQgGALgDABIgDgBIAAgBIAEgGIADgDIAAgDIgBACIgGAGQgFAGgCAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBgAgCgTIgMgDQgEgCgEgFIgFgGQAJAGAKgEQAGgBAEAAIALABQAIACAGgDIgDAFIgIAHQgGADgHABIgBACQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAIAAABQgBAAgBgHg");
	this.shape_350.setTransform(464.2,249.8);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#4A7328").s().p("AgUAdQgDgBgGgDQgKgGgOgKQgTgNgGgPIgBgJQAFAKAbAJQAJADAKABIAKAKIAJAKIgDAIIgEAFIgDABIgBAAgAAJAXQgCgCAAgEQAAgDACgCQABgEADgDIAEgEIAHgFQAdgCAQgJQAJgEACgFIABAAQAAADgDAFQgHALgUAOIgSANQgKAHgEAAIgCAAQgGAAgCgGg");
	this.shape_351.setTransform(464.1,247.3);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#609634").s().p("AAcAYQAEgDACgGQACgGAAgOQgBgLgJgJQAHAAAFACQASAEAMAKQAEADAFAGQAEAFAAACIgBABIAAABQgCAFgIAEQgRAJgcACIADgFgAgcAcQgJgBgJgDQgbgJgGgKQgBAAAAgBQAAAAAAAAQAAAAAAgBQAAAAABgBIABgCQAEgIAGgEIAJgFQANgGAOgDIALgCIgEAEQgFAGgCAIQgCAHABAHQAAAIAEAHIADADIAAABIAFAGIgHgBg");
	this.shape_352.setTransform(464.1,243.8);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#000000").s().p("AgaAcIgBgBIgDgDQgDgGgBgJQgBgIACgGQACgIAGgGIADgEIAIgEQAIgFAGABQAFAAAHACQAGADAEADIAEADQAJAJAAALQABAOgCAHQgCAFgEADQgGAEgJgCIgLgCQgEAAgFACIgIABQgGAAgFgEg");
	this.shape_353.setTransform(464.1,243.3);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#372511").s().p("AAkAHQgFgCgHAAIgDgDQgFgCgGgCQgGgCgEAAQgIgBgHAEIgIADIgLACQgOADgNAGIgJAFIgFgHQgDgHAEgEQAFgHAPgGQAUgHAgAAQAggBAYAIQAPAGAGAHQAEAEgDAHQgCAFgIAFQgMgKgSgEg");
	this.shape_354.setTransform(464.3,240.6);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#E18F59").s().p("AgJAHIgBgBQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAIAEgFQACgCABgEQAFgCAGAEIgLAGIgHAGIgCgBg");
	this.shape_355.setTransform(537.2,249.6);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_356.setTransform(546.2,244.7);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#EEC09E").s().p("AgQAgIAHgKIAFgGQgPAMgDAAQgDAAAIgKIAIgKQADgEgMAJIgCAAIgCAAQgBgDAGgEIAHgGIALgGIAHgFIgBAFIABAGQADAFAHgBIgBABIgGARQgEAIgEAEIgDABIAAAAIAEgLQgFALgEABIgCgBIgBgBIAEgGQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAAAIAAgDIgBACIgFAGQgGAGgCAAQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAgBAAgBgAgCgTIgLgDQgFgCgEgFQgDgCgBgEQAIAGALgEQAEgBAFAAIALABQAIACAGgDIgDAFIgHAHIgBAAQgGADgIABIAAACIgCADIAAABQgBAAgBgHg");
	this.shape_357.setTransform(538.2,249.8);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#5BB1B0").s().p("AgTAdQgEgBgGgDQgKgGgOgKQgTgNgGgPQgCgFAAgEQAHAKAaAJQAJADAKABIAKAKIAJAKQgBAEgCAEIgEAFIgCABIgBAAgAAJAXIgBgGIABgFQABgEADgDQABgCADgCIAAAAIAHgFQAdgCAQgJQAJgEACgFIABAAQAAADgDAFQgGALgVAOIgSANQgJAHgGAAIgCAAQgFAAgCgGg");
	this.shape_358.setTransform(538.1,247.3);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#372511").s().p("AAkAHQgFgCgHAAIgDgDIgLgEQgHgCgDAAQgIgBgHAEQgFABgEACIgKACQgPADgNAGIgIAFQgEgEgBgDQgEgHAFgEQAFgHAPgGQAUgHAgAAQAfgBAZAIQAPAGAFAHQAFAEgDAHQgCAFgHAFQgNgKgSgEg");
	this.shape_359.setTransform(538.3,240.6);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#6BD3D2").s().p("AAcAYQAEgDACgGQACgGAAgOQgBgLgJgJQAHAAAFACQASAEANAKIAHAJQAFAFAAACIgBABIAAABQgCAFgJAEQgQAJgdACIAEgFgAgcAcQgKgBgJgDQgagJgHgKIAAgDIACgCQAEgIAGgEIAIgFQANgGAPgDIAKgCIgDAEQgGAGgBAIQgDAHABAHQABAIAEAHIADADIAAABQACAEACACIgGgBg");
	this.shape_360.setTransform(538.1,243.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#000000").s().p("AgaAcIgBgBIgDgDQgDgGgBgJQgBgIACgGQACgIAFgGIAEgEQAEgDAFgBQAGgFAHABQAFAAAGACIAMAGIADADQAIAJABALQABAOgDAHQgCAFgEADQgGAEgIgCIgLgCQgFAAgEACIgIABQgGAAgFgEg");
	this.shape_361.setTransform(538.2,243.3);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#E18F59").s().p("AgJAHIgBgBQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQACgBACgEQADgCAAgEQAFgCAGAEIgLAGIgHAGg");
	this.shape_362.setTransform(444.6,249.6);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#424242").s().p("AAcAYQADgDACgGQADgHgBgMQAAgNgKgJIANADQARAEANAKIAIAJQAGAFgBACIgBABQgDAGgIAEQgQAJgdADIAEgGgAgcAcIgTgEQgagIgHgMIAAgCIABgDQAFgGAFgFIAKgFQAMgHAOgCIALgDIgDAFQgFAGgDAHQgCAJABAGQAAAJAFAGIACADIABABIAEAGIgGgBg");
	this.shape_363.setTransform(445.6,243.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#393939").s().p("AgUAdIgIgEQgMgFgNgLQgUgNgGgPIgBgJQAHAMAaAHIATAEQADAFAGAFIAJAKQAAAEgDAEQgCAEgCABIgCABIgBAAgAAIAXIgBgGIABgFQABgDAEgEIAEgEIAHgEQAdgDAQgJQAIgEADgFIABAAIgDAIQgHALgUAOQgLAKgHADQgKAHgFAAIgCAAQgGAAgCgGg");
	this.shape_364.setTransform(445.6,247.3);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#EEC09E").s().p("AgPAgQAAgCAFgIQAGgHgBAAQgOAMgDABQgEAAAJgLIAIgKQADgEgNAKIgBABIgCgCQgBgBAGgGIAHgFIALgHIAHgEIgBAFIABAGQACAEAHgBIAAACIgGAQQgEAJgFAEIgCABIAAAAIAEgLQgGAKgEABIgBAAQAAAAgBAAQAAgBAAAAQAAAAAAAAQABAAAAAAIADgGIACgEIABgCIgBACIgFAGQgGAGgCAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQABgBAAgBgAgDgTQgHAAgEgDQgFgDgDgEIgEgGQAIAGALgEQAEgCAEABIALACQAKABAFgDIgEAFIgHAGQgGAEgIAAIgBADIgBAEIAAAAQgBAAgCgHg");
	this.shape_365.setTransform(445.6,249.9);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#FFF6CD").s().p("AgaAdIgBgCIgCgDQgFgGAAgJQgBgIACgGQADgIAFgGIADgEQAEgDAFgCQAHgDAGAAQAGAAAFACQAHACAFAEIACADQAKAJAAALQABAOgDAGQgCAGgDADQgGADgJgBIgLgCQgEAAgFABQgEACgFAAQgFAAgFgDg");
	this.shape_366.setTransform(445.6,243.3);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#372511").s().p("AAlAHIgNgCIgCgDQgGgCgGgCQgGgCgEAAQgIAAgHADQgFABgDACIgLACQgPADgMAGIgKAFQgDgDgBgEQgDgHAEgEQAFgHAPgFQAUgIAgAAQAgAAAYAIQAQAFAFAHQAFAEgEAHQgCAFgHAFQgNgKgRgEg");
	this.shape_367.setTransform(445.7,240.6);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#E18F59").s().p("AgIAHIgCgBQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQACgBACgEQADgCAAgEQAFgCAGAEIgLAGIgHAGg");
	this.shape_368.setTransform(481.6,249.6);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#EEC09E").s().p("AgPAgQAAgCAFgIIAFgHQgOAMgDABQgEAAAJgLIAIgKQADgEgNAKIgBABIgCgCQgBgBAGgGIAHgFIALgHIAHgEIgBAFIABAGQACAEAHgBIAAACIgGAQQgEAJgEAEIgDABIAAAAIAEgLQgFAKgFABIgBAAIAAgBIADgGIADgEIAAgCIAAACIgGAGQgGAGgCAAQAAAAAAAAQAAgBgBAAQAAgBAAAAQABgBAAgBgAgDgTQgHAAgEgDQgFgDgDgEIgEgGQAIAGALgEQAEgCAEABIAMACQAJABAFgDIgEAFIgHAGQgGAEgIAAIgBADIgBAEIAAAAQgBAAgCgHg");
	this.shape_369.setTransform(482.6,249.9);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#000000").s().p("AgaAdIgBgCIgCgDQgEgGgBgJQgBgIACgGQADgIAFgGIADgEQAEgDAFgCQAHgDAGAAQAGAAAFACQAHACAFAEIADADQAKAJAAALQAAAOgDAGQgCAGgDADQgFADgJgBIgMgCQgEAAgFABQgEACgEAAQgGAAgFgDg");
	this.shape_370.setTransform(482.6,243.3);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#628DD1").s().p("AAcAYQADgDACgGQADgHAAgMQAAgNgKgJIANADQAQAEANAKIAIAJQAGAFgBACIAAABQgEAGgIAEQgQAJgdADIAEgGgAgcAcIgTgEQgagIgHgMIAAgCIACgDQAEgGAGgFQAEgDAFgCQAMgHAOgCIALgDIgDAFQgFAGgDAHQgCAJABAGQABAJAEAGIACADIABABIAEAGIgGgBg");
	this.shape_371.setTransform(482.6,243.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#447BCD").s().p("AgUAdIgIgEQgMgFgMgLQgVgNgFgPIgCgJQAHAMAaAHIATAEQADAFAGAFIAJAKQAAAEgDAEQgCAEgCABIgCABIgBAAgAAIAXIgBgGIABgFQACgDADgEIAEgEIAHgEQAdgDAQgJQAIgEAEgFIAAAAQAAADgDAFQgHALgTAOQgMAKgHADQgKAHgFAAIgCAAQgGAAgCgGg");
	this.shape_372.setTransform(482.6,247.3);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#372511").s().p("AAlAHIgNgCIgCgDQgGgCgGgCQgGgCgEAAQgIAAgHADQgFABgDACIgLACQgPADgLAGQgGACgEADQgEgDgBgEQgDgHAEgEQAFgHAPgFQAUgIAgAAQAgAAAYAIQAQAFAFAHQAFAEgEAHQgCAFgHAFQgNgKgRgEg");
	this.shape_373.setTransform(482.7,240.6);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_374.setTransform(400.5,244.7);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#E18F59").s().p("AAAACIgKgGQAFgEAFACIAEAGIAEAFQAAAAABABQAAAAABAAQAAAAABAAQAAAAAAAAIgCABIgBABIgIgGg");
	this.shape_375.setTransform(409.5,249.6);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#4A7328").s().p("AARAcIgEgFIgDgIIAJgKIAKgKQAJgBAJgDQAbgJAHgKQAAAEgCAFQgGAPgTANQgOAKgLAGQgFADgDABIgCAAIgCgBgAgSAdQgEAAgKgHIgSgNQgVgOgGgLQgDgFAAgDIABAAQACAFAIAEQARAJAcACIAIAFIAEAEQADADABAEQACACAAADQAAAEgCACQgCAGgGAAIgCAAg");
	this.shape_376.setTransform(408.6,247.3);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#EEC09E").s().p("AAJAeIgGgGIgBgCIAAADIADADIAEAGIAAABIgCABQgFgBgFgLIAEALIgBAAIgCgBQgEgEgEgIIgGgRIgBgBQAHABADgFQACgCgBgEQABgDgCgCIAHAFIAKAGIAIAGQAGAEgCADIgBAAIgCAAQgMgJADAEIAIAKQAIAKgDAAQgDAAgOgMIAEAGIAHAKQAAABAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgCAAgFgGgAAAgNQAAAAAAAAQAAgBAAAAQAAAAgBgBQAAAAAAgBIAAgCQgIgBgHgDIgHgHIgDgFQAGADAIgCIALgBQAFAAAFABQAKAEAIgGIgEAGQgEAFgEACIgMADQgBAHgBAAIgBgBg");
	this.shape_377.setTransform(408.5,249.8);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#000000").s().p("AAIAfQgFgCgEAAIgLACQgJACgGgEQgEgDgCgFQgCgHABgOQAAgLAJgJIAEgDQAEgDAGgDQAHgCAEAAQAHgBAIAFIAIAEIADAEQAGAGACAIQACAGgBAIQgBAJgDAGIgDADIgBABQgFAEgGAAIgIgBg");
	this.shape_378.setTransform(408.5,243.3);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#372511").s().p("AhLALQgDgHAFgEQAFgHAPgGQAZgIAfABQAgAAAUAHQAPAGAFAHQAEAEgDAHQgBADgEAEQgDgDgGgCQgNgGgOgDIgLgCIgIgDQgHgEgIABQgEAAgGACQgGACgFACIgDADQgHAAgFACQgSAEgMAKQgIgFgCgFg");
	this.shape_379.setTransform(408.4,240.6);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#609634").s().p("AAbAXIAAgBIADgDQAEgHAAgIQACgHgDgHQgCgIgFgGIgEgEIALACQAOADANAGQAGACADADQAGAEAEAIIACACQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQgHAKgbAJQgJADgJABIgHABIAFgGgAhFASQgIgEgCgFIAAgBIgBgBQAAgCAFgFQAEgGAEgDQAMgKASgEQAFgCAHAAQgJAJgBALQAAAOACAGQACAGAEADIADAFQgcgCgRgJg");
	this.shape_380.setTransform(408.6,243.8);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#E18F59").s().p("AABACIgLgGQAFgEAGACQABAEACACIAEAFQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAIgBABIgCABIgHgGg");
	this.shape_381.setTransform(335.5,249.6);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#EEC09E").s().p("AAIAeIgFgGIgBgCIAAADQAAAAABAAQAAAAAAABQABAAAAABQAAAAABABIAEAGIgBABIgCABQgEgBgFgLIAEALIgBAAIgCgBQgEgEgEgIIgGgRIgBgBQAHABADgFQABgCAAgEQAAgDgBgCIAHAFIALAGIAHAGQAGAEgBADIgCAAIgCAAQgMgJADAEIAIAKQAIAKgDAAQgDAAgPgMIAFAGIAHAKQAAABAAABQAAABAAAAQAAABgBAAQAAAAAAAAQgCAAgGgGgAAAgNIgBgDIAAgCQgIgBgGgDIgBAAIgHgHIgDgFQAGADAIgCIALgBQAFAAAEABQALAEAIgGQgBAEgDACQgEAFgEACIgMADQgBAHgBAAIgBgBg");
	this.shape_382.setTransform(334.5,249.8);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#5BB1B0").s().p("AARAcIgEgFQgCgEgBgEIAJgKIAKgKQAKgBAJgDQAbgJAGgKQAAAEgCAFQgGAPgTANQgOAKgKAGQgGADgEABIgBAAIgCgBgAgRAdQgGAAgJgHIgSgNQgVgOgGgLQgDgFAAgDIABAAQACAFAJAEQAQAJAdACIAHAFIAAAAQADACABACQADADABAEQACACAAADQAAAEgCACQgCAGgFAAIgCAAg");
	this.shape_383.setTransform(334.5,247.3);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_384.setTransform(326.5,244.7);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#6BD3D2").s().p("AAbAXIAAgBIADgDQAEgHABgIQABgHgDgHQgBgIgGgGIgDgEIAKACQAPADANAGIAIAFQAGAEAEAIIACACQAAABAAAAQAAABAAAAQAAAAAAAAQAAABAAAAQgGAKgbAJQgJADgKABIgGABQACgCACgEgAhEASQgJgEgCgFIAAgBIgBgBQAAgCAFgFIAHgJQANgKASgEQAFgCAHAAQgJAJgBALQAAAOACAGQACAGAEADIAEAFQgdgCgQgJg");
	this.shape_385.setTransform(334.5,243.8);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#372511").s().p("AhMALQgDgHAFgEQAFgHAQgGQAYgIAgABQAgAAAUAHQAPAGAFAHQAEAEgDAHQgBADgEAEIgJgFQgNgGgOgDIgLgCQgEgCgEgBQgHgEgJABQgDAAgGACIgLAEIgEADQgHAAgEACQgSAEgNAKQgHgFgDgFg");
	this.shape_386.setTransform(334.4,240.6);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#000000").s().p("AAIAfQgEgCgFAAIgLACQgIACgGgEQgEgDgCgFQgDgHABgOQABgLAIgJIAEgDIALgGQAGgCAEAAQAIgBAHAFQAEABAEADIAEAEQAFAGACAIQACAGgBAIQgBAJgDAGIgDADIgBABQgFAEgGAAIgIgBg");
	this.shape_387.setTransform(334.5,243.3);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#E18F59").s().p("AABACIgLgGQAFgEAGACQAAAEADACIAEAFQAAAAABABQAAAAAAAAQABAAAAAAQAAAAABAAIgBABIgCABIgHgGg");
	this.shape_388.setTransform(428,249.6);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#EEC09E").s().p("AAIAeIgFgGIgCgCIABADQABAAAAAAQAAAAAAABQABAAAAABQAAAAABABIADAGIAAABIgCABQgEgBgFgLIADALIAAAAIgCgBQgEgEgEgIIgGgRIgBgBQAHABADgFIABgGIgBgFIAHAFIALAGIAHAGQAFAEgBADIgBAAIgCAAQgMgJADAEIAIAKQAIAKgDAAQgDAAgPgMIAFAGIAGAKQAAABAAABQAAABAAAAQAAABAAAAQAAAAgBAAQgCAAgFgGgAAAgNIgBgDIAAgCQgIgBgHgDQgEgDgDgEIgDgFQAFADAJgCIALgBQAFAAAEABQALAEAIgGQgBAEgDACQgEAFgFACIgLADQgBAHgCAAIAAgBg");
	this.shape_389.setTransform(427,249.8);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_390.setTransform(419,244.7);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#3A4D75").s().p("AASAcIgEgFQgDgEgBgEIAJgKIAKgKIATgEQAagJAHgKQAAAEgCAFQgFAPgUANQgOAKgLAGQgEADgFABIAAAAIgCgBgAgRAdQgGAAgJgHIgSgNQgVgOgGgLQgDgFAAgDIABAAQACAFAJAEQAQAJAdACQADAEAEABQACABABADQAEADABAEIABAFIAAAGQgDAGgFAAIgCAAg");
	this.shape_391.setTransform(427.1,247.3);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#48608E").s().p("AAbAXIAAgBQABAAAAgBQABAAAAAAQAAgBABAAQAAgBAAAAQAEgHABgIQABgHgDgHQgBgIgGgGIgEgEIALACQAPADAMAGIAJAFQAGAEAEAIIACACIAAADQgHAKgaAJIgTAEIgHABQADgCACgEgAhEASQgJgEgCgFIAAgBIgBgBQgBgCAGgFIAHgJQANgKASgEQAFgCAHAAQgJAJgBALQgBAOADAGQACAGAEADIAEAFQgdgCgQgJg");
	this.shape_392.setTransform(427.1,243.8);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#372511").s().p("AhLALQgEgHAGgEQAFgHAPgGQAZgIAfABQAgAAAVAHQAOAGAFAHQAFAEgEAHQgBADgEAEIgJgFQgMgGgPgDIgLgCQgDgCgFgBQgHgEgJABQgDAAgGACIgLAEIgDADQgHAAgFACQgSAEgNAKQgHgFgCgFg");
	this.shape_393.setTransform(426.9,240.6);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#000000").s().p("AAIAfQgEgCgFAAIgLACQgJACgFgEQgEgDgCgFQgDgHAAgOQACgLAIgJIADgDIAMgGQAGgCAEAAQAHgBAHAFQAFABAEADIAEAEQAFAGACAIQACAGgBAIQgBAJgEAGQAAABAAAAQAAAAAAABQgBAAAAABQgBAAAAAAIgBABQgFAEgGAAIgIgBg");
	this.shape_394.setTransform(427,243.3);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#E18F59").s().p("AAAACIgKgGQAEgEAHACQAAAEADACQABAEADABQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAAAIgCABIgBABIgIgGg");
	this.shape_395.setTransform(354,249.6);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#EEC09E").s().p("AAJAeIgGgGIgBgCIABACIACAEIAEAGIAAABIgDAAQgEgBgFgKIADALIAAAAIgCgBQgEgEgFgJIgEgQIgBgCQAHABACgEQABgDAAgDIgBgFIAHAEIAKAHIAJAFQAFAGgCABIgBACIgCgBQgMgKADAEIAJAKQAIALgFAAQgCgBgOgMIAEAHIAGAKQAAABAAABQAAAAAAABQAAAAAAABQAAAAgBAAQgBAAgFgGgAAAgMIgBgEIAAgDQgIAAgGgEQgFgCgCgEIgEgFQAFADAJgBIALgCQAEgBAGACQAKAEAJgGIgGAGQgDAEgEADQgGADgGAAQgBAHgCAAIAAAAg");
	this.shape_396.setTransform(353,249.9);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#EC672C").s().p("AhEASQgIgEgEgGIAAgBQgBgCAFgFIAJgJQANgKAQgEIANgDQgKAJAAANQgBAMADAHQACAGAEADIAEAGQgegDgPgJgAAbAXIABgBIACgDQAEgGABgJQAAgGgCgJQgCgHgFgGIgEgFIALADQAOACANAHQAFACAEADQAGAFAEAGIABADIABACQgHAMgaAIIgUAEIgGABIAFgGg");
	this.shape_397.setTransform(353,243.9);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#E64A00").s().p("AASAcQgDgBgBgEQgDgEAAgEIAIgKQAHgFACgFIAUgEQAagHAHgMIgCAJQgGAPgUANQgMALgMAFIgIAEIgBAAIgCgBgAgRAdQgFAAgKgHQgHgDgMgKQgUgOgGgLQgDgFAAgDIAAAAQAEAFAIAEQAPAJAeADQACADAFABIAEAEIAEAHIABAFQABAEgCACQgBAGgGAAIgCAAg");
	this.shape_398.setTransform(353,247.3);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#372511").s().p("AhLALQgDgHAEgEQAGgHAQgFQAXgIAgAAQAgAAAUAIQAOAFAGAHQAEAEgCAHQgCAEgEADQgEgDgFgCQgNgGgOgDIgLgCQgDgCgFgBQgIgDgHAAQgEAAgGACQgGACgFACIgDADIgNACQgQAEgNAKQgHgFgDgFg");
	this.shape_399.setTransform(352.8,240.6);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#41210C").s().p("AAIAeQgFgBgEAAIgLACQgJABgGgDQgDgDgDgGQgCgGAAgOQABgLAKgJIACgDQAFgEAGgCQAGgCAFAAQAHAAAIADQAEACADADIAEAEQAFAGADAIQACAGgBAIQgBAJgDAGIgDADIgBACQgEADgGAAQgEAAgFgCg");
	this.shape_400.setTransform(353,243.3);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#E18F59").s().p("AAAACIgKgGQAFgEAGACQAAAEAEACIADAFQABAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAIgBABIgCABIgIgGg");
	this.shape_401.setTransform(372.5,249.6);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#EEC09E").s().p("AAIAeIgFgGIgBgCIABACIACAEIADAGQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAgBAAIgBAAQgEgBgGgKIADALIAAAAIgBgBQgEgEgFgJIgGgQIgBgCQAIABACgEQABgDAAgDIgBgFIAHAEIAKAHIAIAFQAGAGgBABIgCACIgCgBQgLgKACAEIAIAKQAIALgCAAQgEgBgOgMQgBAAAFAHQAHAIgBACQABABAAABQAAAAAAABQAAAAgBABQAAAAAAAAQgCAAgGgGgAAAgMIAAgEIgBgDQgIAAgHgEIgGgGIgEgFQAGADAJgBIALgCQADgBAFACQALAEAIgGIgDAGQgEAEgFADQgFADgGAAQgCAHgCAAIAAAAg");
	this.shape_402.setTransform(371.5,249.9);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#393939").s().p("AASAcIgEgFQgDgEAAgEIAJgKIAJgKIATgEQAbgHAGgMIgBAJQgHAPgTANQgNALgMAFQgFADgEABIAAAAIgCgBgAgRAdQgGAAgJgHQgHgDgLgKQgUgOgHgLIgDgIIABAAQADAFAIAEQAQAJAdADIAHAEIAEAEQAEAEABADIABAFQAAAEgBACQgDAGgFAAIgCAAg");
	this.shape_403.setTransform(371.5,247.3);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#372511").s().p("AhLALQgDgHAEgEQAFgHAQgFQAYgIAgAAQAgAAAVAIQAOAFAFAHQAEAEgCAHQgCAEgDADIgKgFQgMgGgPgDIgKgCQgEgCgFgBQgHgDgIAAQgEAAgGACQgGACgGACIgCADIgMACQgSAEgMAKQgHgFgDgFg");
	this.shape_404.setTransform(371.3,240.6);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#FFF6CD").s().p("AAIAeQgFgBgEAAIgKACQgKABgFgDQgEgDgCgGQgDgGABgOQAAgLAKgJIACgDQAFgEAHgCQAGgCAEAAQAIAAAHADQAEACAEADIADAEQAGAGACAIQACAGgBAIQAAAJgEAGIgDADIgBACQgFADgGAAQgDAAgFgCg");
	this.shape_405.setTransform(371.5,243.3);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#424242").s().p("AhEASQgIgEgDgGIgBgBQAAgCAFgFQAFgGADgDQANgKARgEIANgDQgKAJAAANQgBAMADAHQACAGAEADIADAGQgcgDgRgJgAAbAXIABgBIADgDQAEgGAAgJQABgGgCgJQgCgHgGgGIgDgFIALADQAOACANAHIAJAFQAGAFAEAGIABADIAAACQgGAMgbAIIgSAEIgHABIAEgGg");
	this.shape_406.setTransform(371.5,243.9);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#E18F59").s().p("AABACIgLgGQAFgEAGACQAAAEADACQACAEACABQABAAAAABQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAIgBABIgHgGg");
	this.shape_407.setTransform(391,249.6);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#EEC09E").s().p("AAIAeIgFgGIgBgCIABACIACAEIADAGIAAABIgCAAQgDgBgGgKQAEAKgBABIAAAAIgCgBQgEgEgEgJIgGgQIAAgCQAHABACgEIABgGIgBgFIAHAEIALAHIAHAFQAGAGgCABIgBACIgCgBQgMgKACAEIAJAKQAJALgEAAQgEgBgNgMIAFAHQAFAIAAACQAAABAAABQAAAAAAABQAAAAAAABQAAAAAAAAQgCAAgGgGgAAAgMIAAgEIgBgDQgIAAgGgEIgHgGIgEgFQAFADAJgBIAMgCQADgBAFACQALAEAIgGIgEAGQgEAEgEADQgEADgIAAQgBAHgCAAIAAAAg");
	this.shape_408.setTransform(390,249.9);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#000000").s().p("AAIAeQgFgBgDAAIgMACQgJABgFgDQgEgDgCgGQgDgGABgOQAAgLAKgJIACgDQAGgEAGgCQAFgCAFAAQAIAAAHADQAEACAEADIAEAEQAEAGADAIQACAGgBAIQAAAJgEAGIgDADIgBACQgFADgFAAQgEAAgFgCg");
	this.shape_409.setTransform(390,243.3);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#628DD1").s().p("AhEASQgIgEgEgGIAAgBQgBgCAFgFIAJgJQANgKAQgEIANgDQgKAJAAANQAAAMADAHQABAGAEADIAEAGQgdgDgQgJgAAbAXIABgBIACgDQAEgGABgJQABgGgCgJQgDgHgFgGIgDgFIALADQAOACAMAHQAFACAEADQAGAFAEAGIACADIAAACQgHAMgaAIIgTAEIgGABIAEgGg");
	this.shape_410.setTransform(390,243.9);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#447BCD").s().p("AASAcQgDgBgBgEQgDgEAAgEIAJgKQAGgFADgFIATgEQAagHAHgMIgCAJQgGAPgUANQgMALgMAFIgIAEIgBAAIgCgBgAgRAdQgFAAgKgHQgHgDgMgKQgTgOgHgLQgDgFAAgDIAAAAQAEAFAIAEQAQAJAdADIAHAEIAEAEQADAEACADIABAFIgBAGQgCAGgGAAIgCAAg");
	this.shape_411.setTransform(390,247.3);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#372511").s().p("AhLALQgEgHAFgEQAFgHAQgFQAYgIAgAAQAgAAAUAIQAPAFAFAHQAEAEgDAHQgBAEgEADQgEgDgGgCQgMgGgOgDIgLgCQgEgCgEgBQgHgDgJAAQgEAAgFACQgGACgGACIgCADIgNACQgRAEgNAKQgHgFgCgFg");
	this.shape_412.setTransform(389.9,240.6);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#D9D9D9").s().p("A2XAoIAAhPMAsvAAAIAABPg");
	this.shape_413.setTransform(449.6,306.2);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#FAFAFD").s().p("AUsESIhPAAIAlopIAGhUICQAAIAALYQhlhNgHgOgA2XlrIBxAAIAKBUIBGIpIhQAAQgQAXhhBEg");
	this.shape_414.setTransform(449.6,265.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#646262").s().p("ATpAqMgnTAAAIgiAAIgKhTMAouAAAIgGBTg");
	this.shape_415.setTransform(448,233.5);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#9F3D3D").s().p("A2XAtQBhhCAQgXIBQAAIAHA7MAmoAAAIAEg7IBPAAQAHAOBlBLg");
	this.shape_416.setTransform(449.6,297.7);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#985E2F").s().p("AyVD5IgLhDMAkPAAAIgWBUgAynCNIgRhpMAlQAAAIgdBpgAy+gDIgRhmMAmOAAAIgcBmgAzWiSIgTh3MAnTAAAIggB3g");
	this.shape_417.setTransform(447.9,264.4);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#402913").s().p("AyaClIgGgqMAkiAAAIgMAqgAyxASIgHgnMAlhAAAIgKAngAzIh7IgHgpMAmfAAAIgLApg");
	this.shape_418.setTransform(447.2,266.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#838383").s().p("AzCEzIgHg9IhFooIAhAAIATB3IAHApIARBmIAGApIARBnIAHAqIALBDMAjuAARIAWhUIAMgqIAdhnIALgpIAchmIALgpIAgh3IApAAIglIoIgEA9g");
	this.shape_419.setTransform(448.3,268.5);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#E30202").s().p("AwFGRIAAiDMAgLAAAIAACDgAwFkOIAAiCMAgLAAAIAACCg");
	this.shape_420.setTransform(219.1,404);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#D6D6D6").s().p("AQFEPIAAocIAbAAIAAIcgAwfEPIAAocIAaAAIAAIcg");
	this.shape_421.setTransform(219.2,403.9);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#D6D6D6").s().p("EhQ0AANIAAgYMChpAAAIAAAYg");
	this.shape_422.setTransform(511.9,404);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#404040").s().p("EhQ0AEPIAAocMChpAAAIAAIcg");
	this.shape_423.setTransform(511.9,403.9);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#75614B").s().p("EhQ0AGRIAAshMChpAAAIAAMhg");
	this.shape_424.setTransform(511.9,404);

	this.instance_3 = new lib.bg("synched",0);
	this.instance_3.setTransform(503.3,460.4,1.542,1.542,0,0,0,395.3,314.3);
	this.instance_3.alpha = 0.301;

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#459541").s().p("EhblBNFMAAAiaJMC3LAAAMAAACaJg");
	this.shape_425.setTransform(497,460.7);

	this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = this.shape_101.mask = this.shape_102.mask = this.shape_103.mask = this.shape_104.mask = this.shape_105.mask = this.shape_106.mask = this.shape_107.mask = this.shape_108.mask = this.shape_109.mask = this.shape_110.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.shape_114.mask = this.shape_115.mask = this.shape_116.mask = this.shape_117.mask = this.shape_118.mask = this.shape_119.mask = this.shape_120.mask = this.shape_121.mask = this.shape_122.mask = this.shape_123.mask = this.shape_124.mask = this.shape_125.mask = this.shape_126.mask = this.shape_127.mask = this.shape_128.mask = this.shape_129.mask = this.shape_130.mask = this.shape_131.mask = this.shape_132.mask = this.shape_133.mask = this.shape_134.mask = this.shape_135.mask = this.shape_136.mask = this.shape_137.mask = this.shape_138.mask = this.shape_139.mask = this.shape_140.mask = this.shape_141.mask = this.shape_142.mask = this.shape_143.mask = this.shape_144.mask = this.shape_145.mask = this.shape_146.mask = this.shape_147.mask = this.shape_148.mask = this.shape_149.mask = this.shape_150.mask = this.shape_151.mask = this.shape_152.mask = this.shape_153.mask = this.shape_154.mask = this.shape_155.mask = this.shape_156.mask = this.shape_157.mask = this.shape_158.mask = this.shape_159.mask = this.shape_160.mask = this.shape_161.mask = this.shape_162.mask = this.shape_163.mask = this.shape_164.mask = this.shape_165.mask = this.shape_166.mask = this.shape_167.mask = this.shape_168.mask = this.shape_169.mask = this.shape_170.mask = this.shape_171.mask = this.shape_172.mask = this.shape_173.mask = this.shape_174.mask = this.shape_175.mask = this.shape_176.mask = this.shape_177.mask = this.shape_178.mask = this.shape_179.mask = this.shape_180.mask = this.shape_181.mask = this.shape_182.mask = this.shape_183.mask = this.shape_184.mask = this.shape_185.mask = this.shape_186.mask = this.shape_187.mask = this.shape_188.mask = this.shape_189.mask = this.shape_190.mask = this.shape_191.mask = this.shape_192.mask = this.shape_193.mask = this.shape_194.mask = this.shape_195.mask = this.shape_196.mask = this.shape_197.mask = this.shape_198.mask = this.shape_199.mask = this.shape_200.mask = this.shape_201.mask = this.shape_202.mask = this.shape_203.mask = this.shape_204.mask = this.shape_205.mask = this.shape_206.mask = this.shape_207.mask = this.shape_208.mask = this.shape_209.mask = this.shape_210.mask = this.shape_211.mask = this.shape_212.mask = this.shape_213.mask = this.shape_214.mask = this.shape_215.mask = this.shape_216.mask = this.shape_217.mask = this.shape_218.mask = this.shape_219.mask = this.shape_220.mask = this.shape_221.mask = this.shape_222.mask = this.shape_223.mask = this.shape_224.mask = this.shape_225.mask = this.shape_226.mask = this.shape_227.mask = this.shape_228.mask = this.shape_229.mask = this.shape_230.mask = this.shape_231.mask = this.shape_232.mask = this.shape_233.mask = this.shape_234.mask = this.shape_235.mask = this.shape_236.mask = this.shape_237.mask = this.shape_238.mask = this.shape_239.mask = this.shape_240.mask = this.shape_241.mask = this.shape_242.mask = this.shape_243.mask = this.shape_244.mask = this.shape_245.mask = this.shape_246.mask = this.shape_247.mask = this.shape_248.mask = this.shape_249.mask = this.shape_250.mask = this.shape_251.mask = this.shape_252.mask = this.shape_253.mask = this.shape_254.mask = this.shape_255.mask = this.shape_256.mask = this.shape_257.mask = this.shape_258.mask = this.shape_259.mask = this.shape_260.mask = this.shape_261.mask = this.shape_262.mask = this.shape_263.mask = this.shape_264.mask = this.shape_265.mask = this.shape_266.mask = this.shape_267.mask = this.shape_268.mask = this.shape_269.mask = this.shape_270.mask = this.shape_271.mask = this.shape_272.mask = this.shape_273.mask = this.shape_274.mask = this.shape_275.mask = this.shape_276.mask = this.shape_277.mask = this.shape_278.mask = this.shape_279.mask = this.shape_280.mask = this.shape_281.mask = this.shape_282.mask = this.shape_283.mask = this.shape_284.mask = this.shape_285.mask = this.shape_286.mask = this.shape_287.mask = this.shape_288.mask = this.shape_289.mask = this.shape_290.mask = this.shape_291.mask = this.shape_292.mask = this.shape_293.mask = this.shape_294.mask = this.shape_295.mask = this.shape_296.mask = this.shape_297.mask = this.shape_298.mask = this.shape_299.mask = this.shape_300.mask = this.shape_301.mask = this.shape_302.mask = this.shape_303.mask = this.shape_304.mask = this.shape_305.mask = this.shape_306.mask = this.shape_307.mask = this.shape_308.mask = this.shape_309.mask = this.shape_310.mask = this.shape_311.mask = this.shape_312.mask = this.shape_313.mask = this.shape_314.mask = this.shape_315.mask = this.shape_316.mask = this.shape_317.mask = this.shape_318.mask = this.shape_319.mask = this.shape_320.mask = this.shape_321.mask = this.shape_322.mask = this.shape_323.mask = this.shape_324.mask = this.shape_325.mask = this.shape_326.mask = this.shape_327.mask = this.shape_328.mask = this.shape_329.mask = this.shape_330.mask = this.shape_331.mask = this.shape_332.mask = this.shape_333.mask = this.shape_334.mask = this.shape_335.mask = this.shape_336.mask = this.shape_337.mask = this.shape_338.mask = this.shape_339.mask = this.shape_340.mask = this.shape_341.mask = this.shape_342.mask = this.shape_343.mask = this.shape_344.mask = this.shape_345.mask = this.shape_346.mask = this.shape_347.mask = this.shape_348.mask = this.shape_349.mask = this.shape_350.mask = this.shape_351.mask = this.shape_352.mask = this.shape_353.mask = this.shape_354.mask = this.shape_355.mask = this.shape_356.mask = this.shape_357.mask = this.shape_358.mask = this.shape_359.mask = this.shape_360.mask = this.shape_361.mask = this.shape_362.mask = this.shape_363.mask = this.shape_364.mask = this.shape_365.mask = this.shape_366.mask = this.shape_367.mask = this.shape_368.mask = this.shape_369.mask = this.shape_370.mask = this.shape_371.mask = this.shape_372.mask = this.shape_373.mask = this.shape_374.mask = this.shape_375.mask = this.shape_376.mask = this.shape_377.mask = this.shape_378.mask = this.shape_379.mask = this.shape_380.mask = this.shape_381.mask = this.shape_382.mask = this.shape_383.mask = this.shape_384.mask = this.shape_385.mask = this.shape_386.mask = this.shape_387.mask = this.shape_388.mask = this.shape_389.mask = this.shape_390.mask = this.shape_391.mask = this.shape_392.mask = this.shape_393.mask = this.shape_394.mask = this.shape_395.mask = this.shape_396.mask = this.shape_397.mask = this.shape_398.mask = this.shape_399.mask = this.shape_400.mask = this.shape_401.mask = this.shape_402.mask = this.shape_403.mask = this.shape_404.mask = this.shape_405.mask = this.shape_406.mask = this.shape_407.mask = this.shape_408.mask = this.shape_409.mask = this.shape_410.mask = this.shape_411.mask = this.shape_412.mask = this.shape_413.mask = this.shape_414.mask = this.shape_415.mask = this.shape_416.mask = this.shape_417.mask = this.shape_418.mask = this.shape_419.mask = this.shape_420.mask = this.shape_421.mask = this.shape_422.mask = this.shape_423.mask = this.shape_424.mask = this.instance_3.mask = this.shape_425.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_425},{t:this.instance_3},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,808);


// stage content:
(lib.Speedvelocityandacceleration = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.mc_finish("synched",0);
	this.instance.setTransform(954.6,404,1,1,0,0,0,13.1,52.1);

	this.instance_1 = new lib.mc_line("synched",0);
	this.instance_1.setTransform(941.3,400.8,1,1,0,0,0,2.6,57.8);

	this.instance_2 = new lib.mc_nidle2();
	this.instance_2.setTransform(454,65.9,1,1,0,0,0,1,23.8);

	this.instance_3 = new lib.mc_nidle1();
	this.instance_3.setTransform(307.5,65.9,1,1,0,0,0,1,23.8);

	this.instance_4 = new lib.mc_bg();
	this.instance_4.setTransform(547.4,460.7,1,1,0,0,0,547.4,460.7);

	this.instance_5 = new lib.mc_purpleCar();
	this.instance_5.setTransform(530.2,470,1.1,1.1,0,0,0,18.8,9.7);

	this.instance_6 = new lib.mc_redCar();
	this.instance_6.setTransform(530.2,446.4,1.1,1.1,0,0,0,18.8,9.6);

	this.instance_7 = new lib.mc_patch();
	this.instance_7.setTransform(511.6,758.1,1.25,1.25,0,0,0,512.6,31.5);

	this.instance_8 = new lib.mc_perplecarAnimation();
	this.instance_8.setTransform(-71.2,323.6,1,1,0,0,0,23.2,13.6);

	this.instance_9 = new lib.mc_RedcarAnimation();
	this.instance_9.setTransform(-71.2,152.6,1,1,0,0,0,23.2,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_6},{t:this.instance_5}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_9},{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(405.7,371.3,1219.4,986.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;