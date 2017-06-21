(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 808,
	fps: 24,
	color: "#999999",
	manifest: [
		{src:"images/car.png?1495534605314", id:"car"},
		{src:"images/car1.png?1495534605314", id:"car1"},
		{src:"images/Cutpng.jpg?1495534605314", id:"Cutpng"},
		{src:"images/road.jpg?1495534605314", id:"road"},
		{src:"images/road1.jpg?1495534605314", id:"road1"}
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
	this.shape.graphics.f("#FFFFFF").s().p("AibC1Qh9AAAAh9IAAhvQAAh9B9AAIE3AAQB9AAAAB9IAABvQAAB9h9AAg");
	this.shape.setTransform(333.3,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AibC1Qh9AAAAh9IAAhvQAAh9B9AAIE3AAQB9AAAAB9IAABvQAAB9h9AAg");
	this.shape_1.setTransform(76,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AibC1Qh9AAAAh9IAAhvQAAh9B9AAIE3AAQB9AAAAB9IAABvQAAB9h9AAg");
	this.shape_2.setTransform(-180.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-208.4,-18.1,569.8,36.3);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg//ADZIAAmxMBirAAAQBkAAAABkIAADpQAABkhkAAgEA8+ACdQAyhFgBhaQAAhfg2hKIDHAAIAAFIgEAzwACdQAxhFABhaQgBhfg3hKICEAAQg4BJABBgQgBBaAyBFgEAq0ACdQhkAAAAhkIAAiAQAAhkBkAAIBsAAQg4BJAABgQABBaAxBFg");
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
	this.shape_1.setTransform(-30,-15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("Ap9AAIT7AA");
	this.shape_2.setTransform(33.7,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.1,-23.1,129.7,15.2);


(lib.r800m = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAhBIAACD");
	this.shape.setTransform(7.5,-15.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(2,1,1).p("AAAhBIAACD");
	this.shape_1.setTransform(-58.9,-15.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#FFFFFF").ss(2,1,1).p("AlJAAIKTAA");
	this.shape_2.setTransform(-25.6,-15.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.9,-23.1,68.4,15.2);


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


(lib.Finishline = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0D0D0D").s().p("Ag0AVIAAgTIAtAPIAAgnIgtgPIAAgUIBpAlIAAATIgugPIAAAmIAuAQIAAAUg");
	this.shape.setTransform(-5,-31);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D0D0D").s().p("AAfAvQAJgVAAgNQAAgMgEgFQgEgJgHgCQgFgBgEACQgDACgGAMIgDAIQgEAOgGAEQgHAFgLgFQgPgFgIgNQgIgLAAgRQAAgPAFgRIARAGQgHASAAANQAAASANAEQAGACADgDQADgCAEgHIAEgKIADgJQAGgUAUAGQAQAGAJAPQAJAPAAATQAAANgGAVg");
	this.shape_1.setTransform(-5,-18.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D0D0D").s().p("AAmAyIAAgcIhLgYIAAAaIgPgFIAAhKIAPAGIAAAcIBLAYIAAgaIAPAFIAABKg");
	this.shape_2.setTransform(-5,-7.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D0D0D").s().p("Ag0AVIAAgSIBGgSIADABIAAgDIgDACIhGgZIAAgRIBqAlIAAARIhHAUIBHAYIAAARgAgVASIAEgBIgEgCIAAADgAgVASgAgVAPIAEACIgEABgAgRARgAASgPIADgCIAAADgAASgPg");
	this.shape_3.setTransform(-5,4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0D0D0D").s().p("AAmAyIAAgcIhLgYIAAAaIgPgFIAAhKIAPAGIAAAcIBLAYIAAgaIAPAFIAABKg");
	this.shape_4.setTransform(-5,16.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0D0D0D").s().p("Ag0AUIAAhMIAPAGIAAA4IAhALIAAgwIANAFIAAAwIAsAPIAAAUg");
	this.shape_5.setTransform(-5,27.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F8F8F8").s().p("AhJFWIAArRICTAmIAALRg");
	this.shape_6.setTransform(-5.4,-2.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E5E5E5").s().p("Ah/FPIAAgHID/BDIAAAHgAhKl7IAAAAIg1gOIAAgIIA1AOIANADIC9AyIAAAIg");
	this.shape_7.setTransform(0,-0.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BEBFBF").s().p("Ah/FZIAAgKID/BDIAAAKgAg9mAIgNgDIAAAAIg1gOIAAgKID/BDIAAAKg");
	this.shape_8.setTransform(0,-0.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D6D6D6").s().p("AgTHBIAAhJIATAAIAABJgAAAF4IAAhGIgTAAIAAhGIATAAIAABGIAUAAIAABGgAAAF4gAAADsIAAhGIgTAAIAAhGIATAAIAABGIAUAAIAABGgAAADsgAAABgIAAhGIAUAAIAABGgAAABggAgTAaIAAhEIATAAIAABEgAAAgqIAAhGIgTAAIAAhGIATAAIAABGIAUAAIAABGgAAAi2IAAhGIgTAAIAAhGIATAAIAABGIAUAAIAABGgAAAi2gAAAlCIAAhGIAUAAIAABGgAgTmIIAAg4IATAAIAAA4g");
	this.shape_9.setTransform(13,0);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#262626").s().p("AAAHBIAAhJIAUAAIAABJgAgTF4IAAhGIATAAIAABGgAAAEyIAAhGIAUAAIAABGgAAAEygAgTDsIAAhGIATAAIAABGgAAACmIAAhGIAUAAIAABGgAgTBgIAAhGIATAAIAABGgAAAAaIAAhEIgTAAIAAhGIATAAIAABGIAUAAIAABEgAAAAagAAAhwIAAhGIgTAAIAAhGIATAAIAABGIAUAAIAABGgAAAj8IAAhGIgTAAIAAhGIATAAIAAg4IAUAAIAAA4IgUAAIAABGIAUAAIAABGg");
	this.shape_10.setTransform(13,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15,-44.9,30.1,90);


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
	this.shape.graphics.f("#0F204B").s().p("EA5FAGJMgk1gABIAAsPMAk1gABIBTAAIAAABQBpAJABBzIAAIXQgBBzhpAKIAAAAgATAGJIn+AAI+1AAIAAsRIe1AAIH+AAIAzAAIAAMRgEg5EAGJIg/AAQh9AAgBh9IAAoXQABh9B9AAIA/AAMAk0AAAIAAMRg");
	this.shape.setTransform(-111.2,0);

	this.ikNode_1 = new lib.Symbol2();
	this.ikNode_1.setTransform(-0.5,1,1.25,1.25,0,0,0,512.6,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512.1,-39.3,1024.3,78.8);


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

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ATzEPIAAgLIAAoSIAeAAIAAISIABALgA0REPIAAgLIAAoSIAfAAIAAISIAAALg");
	this.shape.setTransform(-111.1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.Symbol4();
	this.instance.setTransform(-136.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.shadow = new cjs.Shadow("#000000",0,0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-538.1,-65.3,1080,134);


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

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_28.setTransform(-428,-49.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#E18F59").s().p("AgFAAIAFgCIAEgEQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIABABIABACIgFAGIgGAKQgDgFACgFg");
	this.shape_29.setTransform(-423.6,-57.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#EEC09E").s().p("AgdALIgCgJQAAgEACgEQAEgKgGgHIAGAEQAEADACAEQACAEAAAGQAJACgDAAIgDACIgCAAQgBAHgDAGIgFAGIgGADQAEgFgCgIgAAAAHIgFgBIgEABIAEgGIAFgJIAFgHQAEgFADABIAAABIAAACQgIALADgDIAJgHQAJgHAAADQAAACgLANIAGgEIAJgGQAHgBgJAJIgGAEIgBACIACgBIADgCIAGgEIABABIAAACQgBADgKAEIALgDIAAAAIgBADQgEADgHAEIgPAFIgBABQAAgGgEgDg");
	this.shape_30.setTransform(-423.5,-56.5);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AAAAfQgKAAgIgIIgCgDQgEgFgCgFQgCgGAAgEQAAgGADgGQACgEADgDIADgEQAFgEAHgCQAFgCAIABQAIAAAFAEIADACIABABQAGAHgEAKQgCAEAAAEIACAJQACAIgEAFQgCAEgEACQgFABgKAAIgEAAg");
	this.shape_31.setTransform(-429.3,-56.5);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#372511").s().p("AAABDQgGgFgFgOQgIgWABgbQAAgdAHgSQAFgNAGgFQAEgEAFADQAEABADAEIgEAIQgGALgCANIgCAKQgCADgBAEQgDAGAAAHQAAADACAGQACAFACAFIACADIACALQAEAPAJAMQgFAGgFACIgEABQgEAAgBgCg");
	this.shape_32.setTransform(-431.7,-56.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#6BD3D2").s().p("AAABEQgFgEgCgDQgKgLgEgQIgBgLQAIAIAKABQALAAAHgCQAFgCACgDIAFgDQgCAZgJAPQgDAHgFACIAAAAIgBABIAAAAQgCAAgEgEgAAUgXIAAAAIgEgDQgFgDgIgBQgFgBgIACQgHACgFAFIgDADIACgKQACgMAGgMIAEgIQAEgFAGgDIADgCIACAAQAKAGAHAYIADAQIACAGIgGgEg");
	this.shape_33.setTransform(-428.8,-56.5);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#5BB1B0").s().p("AgWBHQAFgCADgHQAIgPADgZIADgHIAEgDQADgDAEgBIAEgBIAFABQAGACAAAGQAAAFgGAJIgMAQQgMASgLAGQgEACgDAAgAAEgQIgJgJIgDgQQgHgYgKgGQADAAAFACQAOAFALARIAOAWQADAEABAEQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBABIgEADIgGADIgKgIg");
	this.shape_34.setTransform(-425.7,-56.5);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_35.setTransform(-428,15.7);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#372511").s().p("AAABCQgGgEgFgOQgIgWABgbQAAgdAHgSQAFgNAGgFQAEgEAFADQAEABADAEIgEAIQgGALgCANIgCAKQgCADgBAEQgDAGAAAHQAAADACAGQACAFACAFIACADIACALQAEAPAJAMQgFAGgFACIgEABQgEAAgBgDg");
	this.shape_36.setTransform(-431.7,8.6);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AAAAfQgKAAgIgIIgCgDQgEgFgCgFQgCgGAAgEQAAgGADgGQACgEADgDIADgEQAFgEAHgCQAFgCAIABQAIAAAFAEIADACIABABQAGAHgEAKQgCAEAAAEIACAJQACAIgEAFQgCAEgEACQgFABgKAAIgEAAg");
	this.shape_37.setTransform(-429.3,8.5);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#609634").s().p("AAABEIgHgHQgKgLgEgQIgBgLQAIAIAKABQALAAAHgCQAFgCACgDIAFgDQgCAZgJAPQgDAHgFACIAAAAIgBABIAAAAQgCAAgEgEgAAUgXIAAgBIgEgCQgFgDgIgBQgFgBgIACQgHACgFAFIgDADIACgKQACgMAGgMIAEgIQAEgFAGgDIADgCIACAAQAKAGAHAYIADAQIACAGIgGgEg");
	this.shape_38.setTransform(-428.8,8.5);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#E18F59").s().p("AgFAAIAFgCIAEgEQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIABABIABACIgFAGIgGAKQgDgFACgFg");
	this.shape_39.setTransform(-423.6,7.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EEC09E").s().p("AgdALIgCgJQAAgEACgEQAEgKgGgHIAGAEQAEADACAEQACAEAAAGQAJACgDAAIgDACIgCAAQgBAHgDAGIgFAGIgGADQAEgFgCgIgAAAAHIgFgBIgEABIAEgGIAFgKIAFgGQAEgFADABIAAABIAAACQgIALADgDIAJgHQAJgHAAADQAAACgLANIAGgEIAJgGQAHgBgJAJIgGAEIgBACIACgBIADgCIAGgEIABABIAAABQgBAEgKAEIALgDIAAAAIgBADQgEADgHAEIgPAFIgBABQAAgGgEgDg");
	this.shape_40.setTransform(-423.5,8.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#4A7328").s().p("AgWBHQAFgCADgHQAIgPADgZIADgHIAEgDQADgDAEgBIAEgBIAFABQAGACAAAGQAAAFgGAJIgMAQQgMASgLAGQgEACgDAAgAAEgQIgJgJIgDgQQgHgYgKgGQADAAAFACQAOAFALARIAOAWQADAEABAEQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBABIgEADIgGADIgKgIg");
	this.shape_41.setTransform(-425.7,8.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#41210C").s().p("AAAAfQgKAAgIgJIgCgCQgEgFgBgFQgDgGAAgEQAAgGADgHQACgEADgCIADgEQAFgEAHgCQAGgCAHAAQAIABAFAEIADACIABABQAGAHgEAKQgCAEABADIACAKQABAJgDAEQgCADgFADQgFACgKAAIgEgBg");
	this.shape_42.setTransform(-429.3,-88.8);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#372511").s().p("AAABCQgGgEgFgOQgHgWAAgbQABgdAGgTQAFgMAGgFQAEgDAFACQAEACADADIgFAIQgGALgCANIgCAKQgBACgBAEQgDAHAAAHQAAADADAGQABAFABAFIADACIACAMQADAPAKAMQgFAGgFACIgEABQgEAAgBgDg");
	this.shape_43.setTransform(-431.6,-88.7);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#EC672C").s().p("AAABEIgIgHQgJgLgEgPIgCgMQAIAJALAAQALABAHgCQAFgDACgDIAFgEQgDAbgHAOQgEAHgFADIgBAAIgBAAQgCAAgDgEgAAUgWIgBgCIgDgCQgFgDgIgBQgFAAgIACQgHACgFAEIgDAEIACgKQACgNAGgLIAEgIQAEgGAGgDIADgCIACAAQAKAGAHAYIAEARIABAGIgGgEg");
	this.shape_44.setTransform(-428.8,-88.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#E64A00").s().p("AgWBIQAFgDAEgHQAHgOADgbQADgCAAgEIAEgDIAHgEIAEgBQADAAACABQAGACAAAGQAAAFgGAIIgMARQgMASgLAGIgHACgAAEgQIgIgIIgEgRQgHgYgKgGIAIABQAOAGALARQAKAMAFAKIADAIQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBABQgBACgDABQgEADgCAAIgKgIg");
	this.shape_45.setTransform(-425.7,-88.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#E18F59").s().p("AgFAAQADAAACgCQADgCABgCQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABACIABABIgFAGIgGAKQgDgEACgGg");
	this.shape_46.setTransform(-423.6,-89.8);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#EEC09E").s().p("AgdALIgBgKQgBgDACgEQADgKgFgHIAFAEQAEACACAEQADAGAAAFQAJACgDAAIgDABIgDAAQAAAIgDAFQgCAFgDABIgFAEQACgEgBgJgAAAAHQgCgBgDABIgFAAIAEgGIAGgJIAFgHQAEgFACABIABACIAAABQgJAKAEgBIAIgIQAKgHAAADQgBACgKAMQAAABAGgDIAJgHQAHgBgJAJIgGAEIgBACIABgCIAEgCIAFgCIABAAIABABQgBAEgKAEIAKgDIABAAIgCACQgDAEgIAEIgPAFIgBABQABgHgEgCg");
	this.shape_47.setTransform(-423.4,-88.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#E18F59").s().p("AAEAHIgEgEQgCgCgDAAQgCgFADgFIAGAJIAFAHIgBACIgBABQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_48.setTransform(-423.6,-168.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFF6CD").s().p("AgFAeQgHgCgFgFIgDgDQgDgDgCgEQgDgGAAgHQAAgEADgFQABgGAEgEIACgDQAIgIAKAAQAMgBAHACQAFACACAEQADAEgBAJIgCAJQgBAEACAEQAEAJgGAIIgBABIgDACQgFAEgIAAIgDAAIgKgBg");
	this.shape_49.setTransform(-429.3,-169.8);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#EEC09E").s().p("AgdAIQgCgFABgDIABgKQABgJgCgEIAFADIAFAGQADAFAAAIIADABIADAAQADABgJACQAAAGgDAEQgCAEgEADIgFAEQAFgIgDgIgAAPAQIgIgHQgEgDAJALIAAACIgBABQgCABgEgFIgFgHIgGgJIgEgGIAFABIAFgBQAEgDgBgGIABABIAPAFQAIAEADADIACACIgBAAIgKgDQAKAGABACIgBADIgBAAIgFgEIgEgCIgBgBIABABIAGAGQAJAIgHgCQgCABgHgGIgGgEQAKANABACIgBABQgCAAgHgFg");
	this.shape_50.setTransform(-423.4,-169.8);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#393939").s().p("AgIAqIAEgQIAIgJIAKgIQACAAAEADIAEADQABABAAAAQABABAAAAQAAABAAAAQAAAAAAAAIgDAIQgFAKgKAMQgLASgOAEQgEACgEAAQAKgGAHgYgAALgHIgHgEIgEgDIgDgGQgDgagHgPQgEgHgFgDIAAgBQAEABADADQALAGAMARIAMAQQAGAKAAAEQAAAGgGACIgFACIgEgCg");
	this.shape_51.setTransform(-425.7,-169.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#424242").s().p("AACBJIgDgCQgGgEgEgFIgEgIQgGgLgCgNIgCgKIADADQAFAFAHACQAIACAFgBQAIAAAFgEIADgCIABgBIAGgEIgBAGIgEARQgHAXgKAHgAAVgXQgCgEgFgCQgHgCgLABQgLAAgIAIIACgLQAEgPAJgMIAIgHQAEgFACABIABAAQAFADAEAIQAHAOADAaIgFgDg");
	this.shape_52.setTransform(-428.8,-169.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#372511").s().p("AAABDQgGgEgFgOQgGgRgBgdQAAgcAHgWQAFgOAGgFQAEgEAFADQAFADAFAGQgKALgDAPIgCAMIgDACQgBAFgBAFQgDAGAAADQAAAHADAGQABAEABAEIACAKQACAMAGALIAFAJQgDADgEABIgEABQgEAAgBgCg");
	this.shape_53.setTransform(-431.6,-170);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAAAgQgKAAgIgJIgCgCQgEgFgBgGQgDgFAAgFQAAgFADgHQACgEADgDIADgDQAFgFAHgCQAGgCAHABQAIABAFADIADACIABABQAGAIgEAJQgCAFABADIACAKQABAIgDAFQgCADgFACQgGACgKAAIgDAAg");
	this.shape_54.setTransform(-429.3,-186);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#372511").s().p("AAABDQgGgFgFgOQgHgVAAgdQABgcAGgSQAFgNAGgFQAEgDAFACQAEABADADIgFAJQgGALgCANIgCAJQgBAEgBAEQgDAGAAAHQAAAEADAFQABAGABAEIADADIACALQADAPAKALQgFAHgFACIgFABQgDAAgBgCg");
	this.shape_55.setTransform(-431.6,-185.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#628DD1").s().p("AAABEQgGgEgCgDQgJgMgEgPIgCgLQAIAJALAAQALAAAHgCQAFgCACgDIAFgEQgDAagHAOQgEAIgFADIgBAAIAAAAQgCAAgEgEgAAUgXIgBgBIgDgCQgFgDgIgBQgFgBgIACQgHACgFAFIgDADIACgKQACgNAGgKIAEgJQAEgFAGgEIADgBIACAAQAKAGAHAXIAEARIABAGIgGgEg");
	this.shape_56.setTransform(-428.8,-186);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EEC09E").s().p("AgdAMIgBgLQgBgDACgEQADgKgFgHIAFADQAEAEACAEQADAEAAAGQAJACgDAAIgDABIgDABQAAAHgDAFIgFAHIgFADQACgEgBgIgAAAAHQgCgBgDAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgBAAgBAAIAEgGIAGgJIAFgHQAEgFACABIABACIAAABQgJALAEgDIAIgHQAKgIAAADQgBAEgKAMIAGgEIAJgFQAHgCgJAJIgGAFIgBAAIABAAIAEgDIAFgCQABAAAAgBQAAAAAAAAQAAAAAAAAQAAABAAAAIABABQgBAEgKAFIAKgEIABAAIgCACQgDAEgIAEIgPAFIgBABQABgHgEgCg");
	this.shape_57.setTransform(-423.4,-185.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#447BCD").s().p("AgWBIQAFgDAEgIQAHgOADgaIADgGIAEgDIAHgEQAAgBABAAQABAAAAAAQABgBAAAAQABAAAAAAQADAAACACQAGACAAAGQAAAFgGAIQgEAHgIAKQgMASgLAGIgHACgAAEgQIgIgJIgEgRQgHgXgKgGIAIABQAOAGALARQAKAMAFAKIADAIQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgBACgDACQgEADgCAAIgKgIg");
	this.shape_58.setTransform(-425.7,-186);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#E18F59").s().p("AgFAAQADAAACgDQADgBABgCQAAgBABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIABACIABABIgFAGIgGAKQgDgFACgFg");
	this.shape_59.setTransform(-423.6,-186.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_60.setTransform(-428,-146.4);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E18F59").s().p("AgFAAIAFgDIAEgDQAAAAABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAIABABIABAAIgFAHIgGAJQgDgEACgFg");
	this.shape_61.setTransform(-423.6,-154.4);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#372511").s().p("AAABCQgGgEgFgOQgIgWABgcQAAgcAHgTQAFgMAGgFQAEgEAFADQAEABADAEIgEAIQgGALgCANIgCAJQgCAEgBAEQgDAGAAAHQAAADACAGQACAFACAFIACADIACALQAEAPAJALQgFAHgFACIgEABQgDAAgCgDg");
	this.shape_62.setTransform(-431.7,-153.4);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#3A4D75").s().p("AgWBHQAFgCADgHQAIgOADgaQADgDAAgEIAEgDQADgDAEgBQAAAAABgBQAAAAABAAQAAAAABAAQABgBAAAAIAFABQAGADAAAGQAAAFgGAJIgMAPQgMATgLAGQgEACgDAAgAAEgQIgJgJIgDgQQgHgZgKgFIAIABQAOAGALARIAOAWQADAFABADQAAAAAAABQAAAAAAAAQAAABgBAAQAAABgBAAIgEADIgGADIgKgIg");
	this.shape_63.setTransform(-425.7,-153.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#EEC09E").s().p("AgdALIgCgKQAAgDACgEQAEgKgGgIIAGAFQAEADACAEQACAEAAAHQAJABgDAAIgDABIgCABQgBAHgDAGQgCADgDADIgGAEQAEgGgCgIgAAAAHIgFgBQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABIAEgIIAFgIIAFgIQAEgEADACIAAABIAAABQgIALADgDIAJgHQAJgHAAADQAAADgLAMIAGgEIAJgGQAHgBgJAJIgGAFIgBABIACgBIADgCIAGgEIABABIAAABQgBAEgKAEIALgDIAAAAIgBADQgEADgHADQgKADgFAEIgBAAQAAgHgEgCg");
	this.shape_64.setTransform(-423.5,-153.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AAAAfQgKAAgIgIIgCgDQgEgFgCgFQgCgGAAgEQAAgGADgGQACgEADgEIADgDQAFgFAHgBQAFgDAIACQAIAAAFAEIADACIABAAQAGAIgEAKQgCAEAAADIACAKQACAIgEAFQgCAEgEACQgFACgKAAIgEgBg");
	this.shape_65.setTransform(-429.3,-153.5);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#48608E").s().p("AAABEQgFgEgCgDQgKgLgEgPIgBgLQAIAIAKAAQALABAHgCQAFgCACgEIAFgDQgCAagJAOQgDAIgFACIAAAAIgBAAIAAAAQgCAAgEgEgAAUgXIAAAAIgEgCQgFgEgIAAQgFgCgIADQgHABgFAFIgDADIACgJQACgNAGgLIAEgIQAEgGAGgDIADgCIACAAQAKAGAHAYIADARIACAFIgGgEg");
	this.shape_66.setTransform(-428.8,-153.6);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#41210C").s().p("AAAAgQgKgBgIgJIgCgCQgEgFgBgFQgDgFAAgFQAAgGADgGQACgEADgDIADgEQAFgEAHgCQAGgCAHAAQAIABAFADIADADIABABQAGAHgEAJQgCAFABADIACAKQABAIgDAFQgCADgFADQgGACgKAAIgDAAg");
	this.shape_67.setTransform(-429.3,-137.4);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#372511").s().p("AAABDQgGgFgFgOQgHgWAAgbQABgdAGgSQAFgNAGgFQAEgEAFADQAEABADAEIgFAIQgGALgCANIgCAKQgBADgBAEQgDAGAAAHQAAAEADAFQABAFABAFIADACIACAMQADAPAKALQgFAHgFACIgFABQgDAAgBgCg");
	this.shape_68.setTransform(-431.6,-137.3);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EC672C").s().p("AAABEQgGgEgCgDQgJgMgEgPIgCgLQAIAIALABQALABAHgDQAFgCACgDIAFgEQgDAagHAOQgEAIgFADIgBAAIAAABQgCAAgEgFgAAUgXIgBgBIgDgCQgFgDgIgBQgFgBgIACQgHACgFAFIgDADIACgKQACgMAGgMIAEgIQAEgFAGgDIADgCIACgBQAKAHAHAXIAEARIABAGIgGgEg");
	this.shape_69.setTransform(-428.8,-137.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#E18F59").s().p("AgFAAQADAAACgCQADgCABgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABACIABABIgFAGIgGAKQgDgEACgGg");
	this.shape_70.setTransform(-423.6,-138.3);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#E64A00").s().p("AgWBIQAFgDAEgHQAHgOADgbQADgCAAgEIAEgEIAHgDIAEgBQADAAACABQAGACAAAGQAAAFgGAIIgMARQgMATgLAFIgHADgAAEgPQgEgHgEgCIgEgSQgHgXgKgGIAIACQAOAEALASQAKAMAFAKIADAIQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgBADgDABQgEADgCAAIgKgHg");
	this.shape_71.setTransform(-425.7,-137.4);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#EEC09E").s().p("AgdALIgBgKQgBgDACgFQADgJgFgHIAFAEQAEADACAEQADAEAAAHQAJABgDAAIgDABIgDABQAAAHgDAFQgCAEgDADIgFADQACgFgBgIgAAAAHQgCgBgDAAIgFABIAEgGIAGgJIAFgHQAEgFACABIABABIAAACQgJAKAEgCIAIgHQAKgIAAAEQgBADgKAMIAGgEIAJgGQAHgBgJAIIgGAGIgBABIABgBIAEgDIAFgDIABAAIABACQgBAEgKAEIAKgDIABAAIgCACQgDAEgIAEIgPAFIgBAAQABgGgEgCg");
	this.shape_72.setTransform(-423.4,-137.4);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#E18F59").s().p("AAEAHIgEgEIgFgCQgCgFADgFIAGAKIAFAGIgBACIgBABQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_73.setTransform(-423.6,-104.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgFAeQgHgBgFgFIgDgDQgDgEgCgEQgDgGAAgHQAAgDACgGQACgFAEgFIACgDQAIgIAKAAQAMgBAHACQAEACACAEQAEAFgCAIIgCAKQAAADACAEQAEAKgGAIIgBAAIgDACQgFAEgIAAIgGABQgCAAgFgCg");
	this.shape_74.setTransform(-429.3,-105.1);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EEC09E").s().p("AgdAHQgCgEAAgEIACgJQACgJgEgFIAGAEQADADACADQADAGABAHIACAAIADABQADABgJACQAAAGgCAEQgCAEgEAEIgGADQAGgHgEgKgAAQAPIgJgGQgDgDAIALIAAABIAAABQgDACgEgFIgFgHIgFgJIgEgHIAEABIAFgBQAEgCAAgGIABAAIAPAGQAHADAEAEIABACIAAAAIgLgCQAKAEABAEIAAABIgBAAIgGgDIgDgCIgCgBIABACIAGAEQAJAIgHAAIgJgGIgGgEQALAMAAAEIAAAAQgCAAgHgGg");
	this.shape_75.setTransform(-423.5,-105.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#372511").s().p("AAABDQgGgFgFgNQgHgSAAgcQgBgcAIgWQAFgOAGgEQAEgFAFADQAFACAFAGQgJAMgEAPIgCALIgCADQgCAFgCAFQgCAGAAACQAAAIADAGQABAEACAEIACAJQACANAGALIAEAIQgDAEgEABIgFABQgDAAgBgCg");
	this.shape_76.setTransform(-431.7,-105.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#4A7328").s().p("AgIAqIADgQIAJgJIAKgIIAGACIAEAEQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQgBAEgDAEIgOAWQgLARgOAFQgFACgDAAQAKgGAHgYgAALgHQgEgBgDgDIgEgEQAAgDgDgDQgDgagIgOQgDgHgFgCIAAgBQADAAAEACQALAGAMASIAMAQQAGAJAAAFQAAAGgGACIgFABIgEgBg");
	this.shape_77.setTransform(-425.7,-105);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#609634").s().p("AACBIIgDgCQgGgDgEgGIgEgIQgGgLgCgNIgCgJIADADQAFAFAHABQAIADAFgCQAIAAAFgEIAEgCIAAAAIAGgEIgCAFIgDARQgHAYgKAGIgBAAIgBAAgAAVgYQgCgEgFgCQgHgCgLABQgKAAgIAIIABgLQAEgPAKgMIAHgGQAFgFABABIABAAIAAAAQAFACADAIQAJAOACAaIgFgDg");
	this.shape_78.setTransform(-428.8,-105);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_79.setTransform(-428,-112.3);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#E18F59").s().p("AAEAHQgBgCgDgBQgCgEgDAAQgCgEADgFIAGAJIAFAHIgBABIgBACQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_80.setTransform(-423.6,-120.4);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#EEC09E").s().p("AgdAIQgCgFABgDIABgLQABgIgCgEIAFADIAFAHQADAFAAAHIADABIADAAQADABgJACQAAAGgDAEQgCAEgEAEIgFADQAFgHgDgJgAAPAQIgIgHQgEgDAJALIAAABIgBACQgCABgEgFIgFgHIgGgJIgEgGIAFABIAFgBQAEgCgBgHIABABIAPAFQAIAEADAEIACABIgBAAIgKgDQAKAFABAEIgBACIgBAAIgFgDIgEgDIgBAAIABAAIAGAGQAJAIgHgCIgJgFIgGgEQAKAMABAEIgBABQgCAAgHgGg");
	this.shape_81.setTransform(-423.4,-121.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgFAeQgHgCgFgFIgDgDQgDgDgCgEQgDgHAAgGQAAgEADgFQABgGAEgFIACgCQAIgJAKAAQAMAAAHACQAFACACADQADAFgBAIIgCAKQgBADACAFQAEAJgGAIIgBABIgDACQgFAEgIAAIgDABQgFAAgFgCg");
	this.shape_82.setTransform(-429.3,-121.3);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#628DD1").s().p("AACBIIgDgBQgGgEgEgFIgEgIQgGgLgCgNIgCgKIADADQAFAFAHACQAIACAFgBQAIAAAFgEIADgCIABgBIAGgEIgBAGIgEARQgHAXgKAGgAAVgYQgCgDgFgCQgHgCgLAAQgLAAgIAJIACgLQAEgPAJgMQACgDAGgEQAEgFACABIABAAQAFADAEAIQAHAOADAaIgFgEg");
	this.shape_83.setTransform(-428.8,-121.3);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#372511").s().p("AAABDQgGgFgFgNQgGgSgBgcQAAgdAHgVQAFgOAGgFQAEgEAFADQAFACAFAHQgKALgDAPIgCAMIgDACQgBAEgBAGQgDAFAAAEQAAAHADAGQABAEABAEIACAJQACANAGALIAFAJQgDADgEABIgEABQgEAAgBgCg");
	this.shape_84.setTransform(-431.6,-121.4);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#447BCD").s().p("AgIArIAEgRIAIgJIAKgIQACAAAEADQADACABACQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAABIgDAHQgFAKgKAMQgLASgOAFIgIABQAKgGAHgXgAALgGIgHgEIgEgEIgDgGQgDgagHgOQgEgIgFgDIAAAAIAHACQALAGAMASQAIAKAEAHQAGAIAAAFQAAAGgGADIgFABIgEgBg");
	this.shape_85.setTransform(-425.7,-121.3);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_86.setTransform(-428,-65.5);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#372511").s().p("AAABCQgGgEgFgOQgIgWABgbQAAgdAHgTQAFgMAGgFQAEgEAFADIAHAFIgEAIQgGALgCANIgCAJQgCAEgBAEQgDAGAAAHQAAAEACAFQACAFACAFIACADIACALQAEAPAJAMQgFAGgFACIgEABQgEAAgBgDg");
	this.shape_87.setTransform(-431.7,-72.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AAAAgQgKgBgIgIIgCgDQgEgEgCgGQgCgFAAgFQAAgFADgHQACgEADgDIADgEQAFgEAHgCQAFgCAIABQAIABAFADIADACIABABQAGAHgEAKQgCAEAAAEIACAKQACAIgEAFQgCADgEACQgGACgKAAIgDAAg");
	this.shape_88.setTransform(-429.3,-72.7);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#48608E").s().p("AAABEQgFgEgCgDQgKgLgEgQIgBgKQAIAIAKAAQALABAHgDQAFgBACgEIAFgDQgCAagJAOQgDAHgFADIAAAAIgBAAIAAAAQgCAAgEgEgAAUgXIAAAAIgEgDQgFgDgIgBQgFgBgIADQgHABgFAFIgDADIACgJQACgNAGgMIAEgIQAEgFAGgDIADgCIACAAQAKAGAHAYIADARIACAFIgGgEg");
	this.shape_89.setTransform(-428.8,-72.7);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#EEC09E").s().p("AgdALIgCgKQAAgDACgEQAEgKgGgIIAGAEQAEAEACAEQACAEAAAGQAJACgDAAIgDABIgCABQgBAHgDAFIgFAHIgGAEQAEgGgCgIgAAAAHIgFgBQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABIAEgHIAFgJIAFgHQAEgFADABIAAACIAAABQgIALADgDIAJgHQAJgHAAACQAAAEgLAMIAGgEIAJgGQAHgBgJAJIgGAEIgBACIACgBIADgDIAGgDIABABIAAABQgBAEgKAEIALgDIAAAAIgBACQgEAEgHAEQgKACgFAEIgBAAQAAgGgEgDg");
	this.shape_90.setTransform(-423.5,-72.6);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#E18F59").s().p("AgFAAIAFgDIAEgDQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIABABIABABIgFAGIgGAKQgDgEACgGg");
	this.shape_91.setTransform(-423.6,-73.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#3A4D75").s().p("AgWBHQAFgCADgIQAIgNADgaIADgHIAEgDQADgDAEgBQAAAAABgBQAAAAABAAQAAAAABAAQABgBAAAAIAFABQAGADAAAGQAAAFgGAJIgMAPQgMATgLAFQgEADgDAAgAAEgQIgJgJIgDgRQgHgXgKgGIAIABQAOAGALARIAOAWQADAEABAEQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAIgEAEIgGADIgKgIg");
	this.shape_92.setTransform(-425.7,-72.7);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#E18F59").s().p("AgFAAQADAAACgDQADgBABgCQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABACIABABIgFAGIgGAKQgDgEACgGg");
	this.shape_93.setTransform(-423.6,-8.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#41210C").s().p("AAAAgQgKgBgIgIIgCgDQgEgEgBgGQgDgFAAgFQAAgFADgHQACgEADgDIADgEQAFgEAHgCQAGgCAHAAQAIACAFACIADADIABABQAGAHgEAKQgCAEABADIACALQABAIgDAEQgCAEgFACQgGACgKAAIgDAAg");
	this.shape_94.setTransform(-429.3,-8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#EEC09E").s().p("AgdAMIgBgLQgBgDACgEQADgKgFgHIAFAEQAEADACAEQADAEAAAHQAJABgDAAIgDABIgDABQAAAHgDAFQgCAFgDACIgFADQACgEgBgIgAAAAHQgCgBgDAAIgFABIAEgGIAGgJIAFgHQAEgFACABIABACIAAABQgJALAEgDIAIgHQAKgIAAAEQgBADgKAMIAGgEIAJgFQAHgBgJAIIgGAFIgBABIABgBIAEgDIAFgCQABAAAAgBQAAAAAAAAQAAAAAAAAQAAABAAAAIABABQgBAEgKAFQAKgEAAAAIABAAIgCACQgDAEgIAEIgPAFIgBABQABgHgEgCg");
	this.shape_95.setTransform(-423.4,-8);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#E64A00").s().p("AgWBIQAFgDAEgIQAHgNADgbQADgCAAgEIAEgDIAHgEIAEgBQADgBACACQAGACAAAGQAAAFgGAIQgEAHgIAKQgMASgLAGIgHACgAAEgQQgEgGgEgCIgEgSQgHgXgKgGIAIABQAOAGALARQAKAMAFAKIADAIQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgBADgDABQgEADgCAAIgKgIg");
	this.shape_96.setTransform(-425.7,-8);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#372511").s().p("AAABDQgGgFgFgOQgHgVAAgcQABgdAGgSQAFgNAGgEQAEgEAFACIAHAFIgFAIQgGAMgCAMIgCAKQgBADgBAEQgDAHAAAGQAAAEADAFQABAGABAEIADADIACALQADAPAKALQgFAHgFACIgFABQgDAAgBgCg");
	this.shape_97.setTransform(-431.6,-7.9);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EC672C").s().p("AAABEQgGgEgCgDQgJgMgEgPIgCgLQAIAJALAAQALABAHgDQAFgCACgDIAFgEQgDAbgHANQgEAIgFADIgBAAIAAAAQgCAAgEgEgAAUgXIgBgBIgDgCQgFgDgIgBQgFgBgIADQgHABgFAFIgDADIACgJQACgNAGgLIAEgIQAEgGAGgDIADgCIACAAQAKAGAHAXIAEASIABAFIgGgEg");
	this.shape_98.setTransform(-428.8,-8);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#372511").s().p("AAABDQgGgFgFgOQgHgWAAgcQABgdAGgRQAFgOAGgEQAEgEAFADQAEABADADIgFAJQgGALgCAMIgCAKQgBAEgBAEQgDAGAAAHQAAADADAGQABAFABAFIADACIACAMQADAPAKALQgFAGgFADIgFABQgDAAgBgCg");
	this.shape_99.setTransform(-431.6,-24);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFF6CD").s().p("AAAAfQgKAAgIgIIgCgDQgEgEgBgGQgDgFAAgFQAAgGADgGQACgEADgDIADgDQAFgFAHgCQAGgCAHABQAIAAAFAEIADACIABABQAGAIgEAJQgCAEABAEIACAJQABAJgDAEQgCAEgFACQgFABgKAAIgEAAg");
	this.shape_100.setTransform(-429.3,-24.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#424242").s().p("AAABEIgIgHQgJgMgEgPIgCgLQAIAIALAAQALABAHgCQAFgCACgEIAFgDQgDAagHAOQgEAIgFADIgBAAIAAABQgCAAgEgFgAAUgXIgBgBIgDgCQgFgEgIAAQgFgBgIACQgHACgFAFIgDADIACgKQACgNAGgLIAEgIQAEgFAGgEIADgCIACAAQAKAHAHAXIAEARIABAGIgGgEg");
	this.shape_101.setTransform(-428.8,-24.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EEC09E").s().p("AgdALIgBgJQgBgEACgEQADgKgFgHIAFADQAEAEACAEQADAEAAAGQAJACgDAAIgDACIgDAAQAAAIgDAEIgFAHIgFADQACgEgBgJgAAAAHIgFgBIgFABIAEgGIAGgJIAFgHQAEgFACABIABACIAAABQgJALAEgCIAIgIQAKgHAAACQgBADgKANIAGgEQAHgFACgBQAHgBgJAJIgGAEIgBABIABgBIAEgCIAFgCIABAAIABABQgBAEgKAEIAKgDIABAAIgCACQgDAEgIAEIgPAFIgBAAQABgGgEgCg");
	this.shape_102.setTransform(-423.4,-24.1);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#E18F59").s().p("AgFAAQADAAACgCIAEgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABABIABACIgFAGIgGAKQgDgFACgFg");
	this.shape_103.setTransform(-423.6,-25.1);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#393939").s().p("AgWBIQAFgDAEgIQAHgOADgZIADgHIAEgEIAHgEIAEAAIAFAAQAGADAAAGQAAAFgGAIIgMAQQgMATgLAGQgDACgEAAgAAEgRIgIgIIgEgRQgHgXgKgHQAEAAAEACQAOAFALATQAKALAFAKIADAHQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBAAIgEAEQgEACgCAAIgKgIg");
	this.shape_104.setTransform(-425.7,-24.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#372511").s().p("AAABDQgGgFgFgOQgHgVAAgdQABgcAGgSQAFgNAGgFQAEgDAFACQAEABADADIgFAJQgGALgCANIgCAJQgBAEgBAEQgDAGAAAHQAAAEADAFQABAGABAEIADACIACAMQADAPAKALQgFAHgFACIgFABQgDAAgBgCg");
	this.shape_105.setTransform(-431.6,-40.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#000000").s().p("AAAAgQgKAAgIgJIgCgCQgEgFgBgGQgDgFAAgFQAAgFADgHQACgEADgDIADgDQAFgFAHgCQAGgCAHABQAIAAAFAEIADACIABABQAGAIgEAJQgCAFABADIACAKQABAIgDAFQgCADgFACQgGACgKAAIgDAAg");
	this.shape_106.setTransform(-429.3,-40.4);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#628DD1").s().p("AAABEQgGgEgCgDQgJgMgEgPIgCgLQAIAJALAAQALAAAHgCQAFgCACgDIAFgEQgDAagHAOQgEAIgFADIgBAAIAAAAQgCAAgEgEgAAUgXIgBgBIgDgCQgFgEgIAAQgFgBgIACQgHACgFAFIgDADIACgKQACgNAGgKIAEgJQAEgFAGgEIADgBIACAAQAKAGAHAXIAEARIABAGIgGgEg");
	this.shape_107.setTransform(-428.8,-40.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E18F59").s().p("AgFAAQADAAACgDQADgBABgCQAAgBABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIABACIABABIgFAGIgGAKQgDgFACgFg");
	this.shape_108.setTransform(-423.6,-41.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#447BCD").s().p("AgWBIQAFgDAEgIQAHgOADgaIADgGIAEgDIAHgFIAEgBIAFABQAGADAAAGQAAAFgGAIQgEAHgIAKQgMASgLAGIgHACgAAEgQIgIgJIgEgRQgHgXgKgGIAIABQAOAFALASQAKAMAFAKIADAIQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgBACgDACQgEADgCAAIgKgIg");
	this.shape_109.setTransform(-425.7,-40.4);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#EEC09E").s().p("AgdAMIgBgLQgBgDACgFQADgJgFgHIAFADQAEAEACAEQADAEAAAGQAJACgDAAIgDABIgDABQAAAHgDAFIgFAHIgFADQACgEgBgIgAAAAHIgFgBIgFABIAEgGIAGgJIAFgHQAEgFACABIABACIAAABQgJALAEgDIAIgHQAKgIAAADQgBAEgKAMIAGgEIAJgFQAHgCgJAIIgGAGIgBAAIABAAIAEgDIAFgDIABAAIABACQgBAEgKAFIAKgEIABAAIgCACQgDAEgIAEIgPAFIgBABQABgHgEgCg");
	this.shape_110.setTransform(-423.4,-40.3);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#E18F59").s().p("AAEAGIgEgDIgFgCQgCgGADgDIAGAJIAFAHIgBABIgBABQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBg");
	this.shape_111.setTransform(-436,-25.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#EEC09E").s().p("AgdAHQgBgEAAgEIABgKQACgHgDgFIAFADIAFAGQADAGABAHIACAAIADABQADABgJABIgCALIgGAHIgGAEQAGgHgEgKgAAQAPIgJgGQgDgDAIALIAAACIAAABQgDABgEgEIgFgHIgFgKIgEgGQAAAAABAAQAAAAABABQAAAAABAAQABAAAAAAIAFgBQAEgCAAgHIABABIAPAGQAHADAEADIABACIAAABIgLgEQAKAFABADIAAACIgBABIgGgEIgDgCIgCAAIABAAIAGAFQAJAJgHgCIgJgFIgFgEQAKANAAACIAAABQgCAAgHgGg");
	this.shape_112.setTransform(-435.9,-26.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#000000").s().p("AgFAeQgGgBgGgFIgDgDIgFgIQgDgGAAgHQAAgDACgGQACgFAEgFIACgDQAIgIAKAAQAMgBAHADQAEABADAEQADAFgCAIIgBAKQAAADABAEQAEAKgGAIIgBAAIgCACQgGAEgIAAIgGABQgCAAgFgCg");
	this.shape_113.setTransform(-441.7,-26.4);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#372511").s().p("AAABDQgGgFgFgMQgHgTAAgcQAAgcAHgWQAFgOAGgEQAEgFAFADQAGACAEAHQgJALgDAQQgCAEgBAGIgCADQgCAFgCAFQgCAGAAACQAAAIADAGIADAIIACAJQACANAGALIAEAIQgDAEgEABIgEABQgEAAgBgCg");
	this.shape_114.setTransform(-444.1,-26.5);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#48608E").s().p("AACBIIgCgCQgHgDgEgGIgEgIQgGgLgCgNIgCgJIADADQAGAFAHABQAGADAGgCQAIAAAGgEIACgCIABAAIAGgEIgBAFIgEARQgHAYgKAGIgBAAIgBAAgAAVgYQgDgEgEgBQgHgDgLABQgKAAgJAIQABgGACgEQADgQAKgLQABgDAGgEQAEgFADABIAAAAIABAAQAEADAEAHQAHAOADAaIgFgDg");
	this.shape_115.setTransform(-441.2,-26.3);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#3A4D75").s().p("AgIAqIAEgRIAIgIIAKgIIAHADIAEADQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQgBADgDAFQgFAKgJAMQgLARgOAFIgIACQAKgGAHgYgAALgHQgEgBgDgDIgEgEIgDgFQgDgagIgPQgDgHgFgDIAAAAQADAAAEACQALAGAMASIAMARQAGAIAAAEQAAAHgFACIgGABQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_116.setTransform(-438.1,-26.3);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_117.setTransform(-440.4,-33.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#E18F59").s().p("AAEAHIgEgDIgFgDQgCgFADgFIAGAKIAFAHIgBABIgBABQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAg");
	this.shape_118.setTransform(-436,-120.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#EEC09E").s().p("AgdAHQgBgEAAgDIABgKQACgIgDgGIAFAEIAFAGQADAGABAHIACABIADAAQADABgJABIgCALIgGAHIgGAFQAGgIgEgKgAAQAQIgJgHQgDgDAIALIAAABIAAACQgDABgEgFIgFgHIgFgJIgEgHQAAABABAAQAAAAABABQAAAAABAAQABAAAAAAQADAAACgCQAEgCAAgGIABAAIAPAGQAHAEAEADIABACIAAAAIgLgCQAKAEABAEIAAABIgBAAIgGgCIgDgDIgCgBIABABIAGAFQAJAJgHgBIgJgGIgFgEQAKAMAAADIAAABQgCAAgHgFg");
	this.shape_119.setTransform(-435.9,-121.4);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#000000").s().p("AgFAeQgGgBgGgFIgDgDIgFgIQgDgGAAgHQAAgDACgGQACgFAEgFIACgDQAIgIAKAAQAMgBAHADQAEABADAEQADAFgCAIIgBAKQAAADABAEQAEAKgGAIIgBAAIgCACQgGAEgIAAIgGABQgCAAgFgCg");
	this.shape_120.setTransform(-441.7,-121.4);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_121.setTransform(-440.4,-128.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#4A7328").s().p("AgIAqIAEgQIAIgJIAKgIIAHADIAEADQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQgBADgDAFQgFAKgJAMQgLARgOAGIgIABQAKgFAHgZgAALgHQgEgBgDgDIgEgDIgDgHQgDgagIgOQgDgHgFgCIAAgBQADAAAEACQALAGAMATIAMAPQAGAJAAAFQAAAGgFACQgDABgDABQAAAAgBgBQgBAAAAAAQgBAAAAAAQgBgBAAAAg");
	this.shape_122.setTransform(-438.1,-121.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#372511").s().p("AAABDQgGgFgFgNQgHgSAAgcQAAgcAHgWQAFgOAGgEQAEgFAFADQAGACAEAHQgJALgDAQQgCAEgBAGIgCADQgCAFgCAFQgCAGAAACQAAAIADAGIADAIIACAJQACANAGALIAEAIQgDAEgEABIgEABQgEAAgBgCg");
	this.shape_123.setTransform(-444.1,-121.5);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#609634").s().p("AACBIIgCgCQgHgDgEgGIgEgIQgGgLgCgNIgCgJIADADQAGAFAHABQAGADAGgCQAIAAAGgEIACgCIABAAIAGgEIgBAFIgEARQgHAYgKAGIgBAAIgBAAgAAVgYQgDgEgEgBQgHgDgLABQgKAAgJAIQABgGACgEQADgQAKgLQABgDAGgEQAEgFADABIAAAAIABAAQAEADAEAHQAHAOADAaIgFgDg");
	this.shape_124.setTransform(-441.2,-121.3);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#000000").s().p("AgFAeQgGgCgGgFIgDgDIgFgHQgDgHAAgGQAAgEADgFQABgGAEgFIACgCQAIgJAKAAQAMAAAHACQAFACACADQADAFgBAIIgCAKQAAADABAFQAEAJgFAIIgCABIgCACQgGAEgIAAIgDABIgKgCg");
	this.shape_125.setTransform(-441.7,5.3);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#E18F59").s().p("AAEAHIgEgDQgCgDgDgBQgCgEADgFIAGAJIAFAHIgBABIgBACQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAg");
	this.shape_126.setTransform(-436,6.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#EEC09E").s().p("AgdAIQgCgFABgDIABgLQABgIgCgEIAFADIAFAHQADAFAAAHIADABIADAAQADABgJACQAAAGgCAEIgHAIIgFADQAFgHgDgJgAAPAQIgIgHQgEgDAJALIAAABIgBACQgCABgEgFIgFgHIgGgJIgEgGIAFABIAFgBQAEgCgBgHIABABIAPAFQAIAEADAEIACABIgBAAIgKgCQAKAEABAEIgBACIgBAAIgFgDIgDgDIgCAAIABAAIAGAGQAJAIgHgCIgJgFIgGgEQAKAMABAEIgBABQgCAAgHgGg");
	this.shape_127.setTransform(-435.8,5.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#372511").s().p("AAABDQgGgFgEgNQgIgRAAgdQAAgdAIgVQAEgOAGgFQAEgEAFADQAFACAFAHQgKALgCAPIgDAMIgDACQgBAEgBAGQgDAFAAAEQAAAHADAGIACAIIADAKQACAMAFALIAFAJQgDADgEABIgEABQgEAAgBgCg");
	this.shape_128.setTransform(-444,5.1);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#447BCD").s().p("AgIArIAEgRIAIgJIAKgIQACAAAFADIAEAEQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABIgDAHQgFAKgKAMQgLASgOAFIgIABQAKgGAHgXgAALgGIgHgEIgEgEIgDgGQgDgagHgOQgEgIgFgDIAAAAIAHACQALAGAMASQAIAKAEAHQAGAIAAAFQAAAGgFADIgGABIgEgBg");
	this.shape_129.setTransform(-438.1,5.3);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#628DD1").s().p("AACBIIgCgBQgHgEgEgFIgEgIQgGgLgCgNIgCgKIADADQAGAFAGACQAIACAFgBQAIAAAGgEIACgCIACgBIAFgEIgBAGIgEARQgHAXgKAGgAAVgYQgCgDgFgCQgHgCgLAAQgLAAgIAJIADgLQADgPAJgMQACgDAGgEQAEgFACABIABAAQAFADAEAIQAHAOADAaIgFgEg");
	this.shape_130.setTransform(-441.2,5.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#372511").s().p("AAABCQgGgEgEgNQgIgSAAgdQAAgcAIgVQAEgOAGgFQAEgEAFADQAFACAFAHQgKALgCAPIgDAMIgDACQgBAEgBAGQgDAFAAAEQAAAGADAHIACAHIADAKQACANAFALIAFAIIgHAFIgEABQgDAAgCgDg");
	this.shape_131.setTransform(-444,-42.4);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#41210C").s().p("AgFAeQgGgCgGgEIgDgEIgFgHQgDgHAAgGQAAgEADgFQABgGAEgEIACgCQAIgJAKgBQAMAAAHACQAFACACAEQADAEgBAIIgCALQAAADABAFQAEAJgFAHIgCABIgCADQgGADgIABIgCAAQgGAAgFgCg");
	this.shape_132.setTransform(-441.7,-42.3);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#E64A00").s().p("AgIArIAEgSQAEgCAEgGIAKgIQACAAAFADQACABACADQAAAAABABQAAAAAAAAQAAABAAAAQAAAAAAABIgDAHQgFAKgKAMQgLASgOAFIgIABQAKgGAHgXgAAPgGIgEAAIgHgEIgEgEQAAgEgDgCQgDgbgHgNQgEgIgFgDIAAAAIAHACQALAGAMASQAIAKAEAHQAGAIAAAFQAAAGgFADIgEAAIgCAAg");
	this.shape_133.setTransform(-438.1,-42.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#EC672C").s().p("AACBIIgCgCQgHgDgEgFIgEgIQgGgMgCgNIgCgJIADADQAGAFAGABQAIADAFgBQAIgBAGgDIACgCIACgBIAFgEIgBAFIgEASQgHAXgKAGgAAVgYQgCgDgFgCQgHgDgLABQgLAAgIAJIADgLQADgPAJgMQACgDAGgEQAEgFACABIABAAQAFADAEAIQAHANADAbIgFgEg");
	this.shape_134.setTransform(-441.2,-42.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#E18F59").s().p("AAEAHQgBgCgDgCQgCgCgDAAQgCgGADgEIAGAJIAFAHIgBABIgBACQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAg");
	this.shape_135.setTransform(-436,-41.3);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#EEC09E").s().p("AgdAIQgCgFABgDIABgLQABgIgCgEIAFADQADADACAEQADAFAAAHIADABIADAAQADABgJABQAAAHgCAEQgDAEgEADIgFAEQAFgHgDgJgAAPAQIgIgHQgEgDAJALIAAABIgBACQgCABgEgFIgFgHIgGgJIgEgGIAFABQADAAACgBQAEgCgBgHIABABIAPAFQAIAEADAEIACABIgBAAIgKgCQAKAEABAEIgBACIgBAAIgFgDIgDgDIgCgBIABABIAGAGQAJAIgHgCIgJgFIgGgEQAKAMABADIgBABQgCAAgHgFg");
	this.shape_136.setTransform(-435.8,-42.3);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_137.setTransform(-440.4,-66.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#E18F59").s().p("AgFAAIAFgDIAEgDQABgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIABABIABABIgFAHIgGAKQgDgFACgFg");
	this.shape_138.setTransform(-436,-74.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#4A7328").s().p("AgWBHQAFgCADgIQAIgOADgZIADgHIAEgDQADgDAEgBQAAAAABgBQAAAAABAAQAAAAABAAQABgBAAAAQADABADABQAFACAAAGQAAAFgGAJIgMAQQgMASgLAFQgEADgDAAgAAEgQIgIgIIgEgRQgHgZgKgFIAIACQAOAFALARQAJAMAFAKQADAEABAEQAAAAAAABQAAAAAAAAQAAAAAAABQgBAAAAABIgEADIgHADIgKgIg");
	this.shape_139.setTransform(-438.1,-73.8);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EEC09E").s().p("AgdALIgBgKQAAgDABgEQAEgKgGgIIAGAFIAGAHIACALQAJAAgDABIgDABIgCABQgBAHgDAGIgFAGIgFAEQADgGgCgIgAAAAIQgCgCgDAAQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABIAEgHIAFgJIAFgIQAEgEADABIAAACIAAABQgIALADgDIAJgHQAJgIAAAEQAAACgKANIAFgEIAJgGQAHgBgJAJIgGAFIgBABIACgBIADgDIAGgDIABABIAAABQgBAEgKAEIALgDIAAAAIgBACQgEAEgHADIgPAHIgBAAQAAgGgEgCg");
	this.shape_140.setTransform(-435.9,-73.8);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#000000").s().p("AAAAgQgKgBgIgIIgCgDQgEgEgCgGQgCgFAAgFQAAgFADgHIAFgHIADgEQAGgEAGgCQAFgCAIABQAIABAGADIACACIABABQAGAHgEAKQgBAEAAAEIABAKQACAIgDAFQgDADgEACQgGACgKAAIgDAAg");
	this.shape_141.setTransform(-441.7,-73.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#372511").s().p("AAABCQgGgEgFgOQgHgWAAgcQAAgcAHgSQAFgNAGgFQAEgEAFADIAHAEIgEAJQgGALgCANIgCAJIgDAIQgDAGAAAHQAAADACAGQACAFACAFIACADQABAGACAEQADAQAJALQgEAHgGACIgEABQgEAAgBgDg");
	this.shape_142.setTransform(-444.1,-73.7);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#609634").s().p("AAABEQgGgEgBgDQgKgLgDgQQgCgEgBgGQAJAIAKAAQALABAHgDQAEgBADgEIAFgDQgDAagHAOQgEAHgEADIgBAAIAAAAIgBAAQgCAAgEgEgAAUgXIgBAAIgCgDQgGgDgIgBQgGgBgGADQgHABgGAFIgDADIACgJQACgNAGgLIAEgJQAEgFAHgDIACgCIACAAQAKAGAHAYIAEARIABAFIgGgEg");
	this.shape_143.setTransform(-441.2,-73.9);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_144.setTransform(-440.4,-3.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#E18F59").s().p("AgFAAIAFgDIAEgDQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABACIABAAIgFAHIgGAKQgDgFACgFg");
	this.shape_145.setTransform(-436,-11.3);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#5BB1B0").s().p("AgWBIQAFgDADgHQAIgPADgZIADgHIAEgDIAHgEIAEgBIAGABQAFACAAAGQAAAFgGAJIgMAQQgMASgLAGQgEACgDAAgAAEgQIgIgJIgEgQQgHgYgKgGQADAAAFACQAOAFALARQAJAMAFAKQADAEABAEQAAAAAAABQAAAAAAAAQAAABAAAAQgBAAAAABIgEADIgHADIgKgIg");
	this.shape_146.setTransform(-438.1,-10.5);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#000000").s().p("AAAAfQgKAAgIgIIgCgDQgEgFgCgFQgCgFAAgFQAAgGADgGIAFgHIADgEQAGgEAGgCQAFgCAIABQAIAAAGAEIACACIABABQAGAHgEAKQgBAEAAAEIABAJQACAIgDAGQgDADgEACQgFACgIAAIgGgBg");
	this.shape_147.setTransform(-441.7,-10.5);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#372511").s().p("AAABDQgGgFgFgOQgHgWAAgbQAAgdAHgSQAFgNAGgFQAEgEAFADQAEABADAEIgEAIQgGALgCANIgCAKIgDAHQgDAGAAAHQAAAEACAFQACAFACAFIACADQABAGACAFQADAPAJAMQgEAGgGACIgEABQgEAAgBgCg");
	this.shape_148.setTransform(-444.1,-10.4);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#6BD3D2").s().p("AAABEQgGgEgBgDQgKgLgDgQQgCgEgBgHQAJAIAKABQALABAHgDQAEgBADgEIAFgDQgDAZgHAPQgEAHgEADIgBAAIAAAAIgBAAQgCAAgEgEgAAUgXIgBAAIgCgDQgGgDgIgBQgGgBgGACQgHACgGAFIgDADIACgKQACgMAGgMIAEgIQAEgFAHgDIACgCIACAAQAKAGAHAYIAEAQIABAGIgGgEg");
	this.shape_149.setTransform(-441.2,-10.5);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#EEC09E").s().p("AgdALIgBgKQAAgDABgFQAEgJgGgIIAGAFIAGAHIACAKQAJACgDAAIgDABIgCABQgBAHgDAGIgFAGIgFAEQADgGgCgIgAAAAHIgFgBIgEABIAEgGIAFgJIAFgIQAEgEADABIAAABIAAACQgIALADgDIAJgHQAJgIAAAEQAAADgKAMIAFgEIAJgGQAHgBgJAIIgGAFIgBACIACgBQAAAAAAgBQABAAAAAAQAAAAABgBQABAAAAgBIAGgDIABAAIAAACQgBAEgKAEIALgDIAAAAIgBACQgEAEgHADIgPAGIgBABQAAgHgEgCg");
	this.shape_150.setTransform(-435.9,-10.4);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFF6CD").s().p("AAAAfQgKAAgIgIIgCgDQgEgEgBgGQgDgFAAgFQAAgGADgGIAFgIIADgCQAGgFAGgCQAGgCAHABQAIAAAGAEIACACIACABQAFAHgEAKQgBAEAAADIACAKQABAJgDAEQgCAEgFACQgFABgKAAIgEAAg");
	this.shape_151.setTransform(-441.7,-89.7);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#372511").s().p("AAABDQgGgFgEgOQgIgVAAgdQAAgcAIgSQAEgNAGgFQAEgDAFACQAEABADAEIgFAIQgFALgCANIgDAJIgCAIQgDAGAAAHQAAAEADAFQABAGABAEIADADIADALQACAPAKALQgFAHgFACIgEABQgEAAgBgCg");
	this.shape_152.setTransform(-444,-89.6);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#424242").s().p("AAABEQgGgEgCgDQgJgLgDgPIgDgMQAIAJALAAQALAAAHgCQAFgCACgDIAFgEQgDAagHAPQgEAHgFADIgBAAIgBAAQgCAAgDgEgAAVgWIgCgCIgCgCQgGgDgIgBQgFgBgIACQgGACgGAFIgDADIACgKQACgMAGgLIAEgJQAEgFAHgEIACgBIACAAQAKAGAHAYIAEAQIABAGIgFgDg");
	this.shape_153.setTransform(-441.2,-89.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#393939").s().p("AgWBIQAFgDAEgHQAHgPADgaIADgGIAEgDIAHgEIAEgCQADAAADACQAFACAAAGQAAAFgGAIQgEAHgIAJQgMATgLAGIgHACgAAEgQIgIgJIgEgQQgHgYgKgGIAIABQAOAGALARQAKAMAFAKIADAIQAAAAAAAAQAAABAAAAQAAAAAAABQgBAAAAABIgEADQgFADgCAAIgKgIg");
	this.shape_154.setTransform(-438.1,-89.7);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#E18F59").s().p("AgFAAQADAAACgDIAEgDQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABABIABACIgFAGIgGAKQgDgFACgFg");
	this.shape_155.setTransform(-436,-90.6);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#EEC09E").s().p("AgdALIgBgKQgBgDACgFQADgJgFgHIAFADIAHAHQACAFAAAGQAJABgDABIgDABIgDAAQAAAIgDAGIgFAFIgFAEQACgFgBgIgAAAAHQgCgBgDAAIgFABIAEgHIAGgIIAFgHQAEgGACACIABACIAAABQgJALAEgDIAIgHQAKgHAAACQgBADgKAMQAAABAGgEIAJgGQAHgBgJAIIgGAGIgBAAIACAAIADgDIAFgDIABAAIABACQgBAEgKAEIAKgDIABAAIgCACIgLAHIgPAGIgBABQABgHgEgCg");
	this.shape_156.setTransform(-435.8,-89.6);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#EEC09E").s().p("AgdALIgBgKQgBgDACgFQADgJgFgHIAFADIAHAIQACAEAAAGQAJACgDAAIgDABIgDABQAAAHgDAFIgFAHIgFADQACgFgBgIgAAAAHIgFgBIgFABIAEgHIAGgIIAFgHQAEgFACABIABABIAAACQgJAKAEgCIAIgHQAKgIAAADQgBAEgKAMIAGgEQAHgGACAAQAHgBgJAIIgGAFIgBABIACgBIADgCIAFgDIABAAIABACQgBADgKAFIAKgDIABAAIgCACQgDAEgIAEIgPAFIgBAAQABgGgEgCg");
	this.shape_157.setTransform(-435.8,-58);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#000000").s().p("AAAAfQgKAAgIgIIgCgDQgEgEgBgGQgDgFAAgFQAAgGADgGIAFgHIADgDQAGgFAGgCQAGgCAHABQAIAAAGAEIACACIACABQAFAIgEAJQgBAEAAAEIACAKQABAIgDAFQgCADgFACQgFABgKAAIgEAAg");
	this.shape_158.setTransform(-441.7,-58);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#E18F59").s().p("AgFAAQADAAACgCIAEgEQABAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBIABACIABABIgFAGIgGAKQgDgFACgFg");
	this.shape_159.setTransform(-436,-58.9);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#447BCD").s().p("AgWBIQAFgDAEgHQAHgPADgaIADgGIAEgEIAHgDIAEgBIAGABQAFACAAAGQAAAFgGAIIgMARQgMASgLAGIgHACgAAEgRIgIgIIgEgRQgHgXgKgGIAIABQAOAFALATQAKALAFAKIADAIQAAAAAAAAQAAAAAAABQAAAAAAABQgBAAAAAAIgEAEQgFADgCAAIgKgJg");
	this.shape_160.setTransform(-438.1,-58);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#372511").s().p("AAABDQgGgFgEgOQgIgWAAgcQAAgdAIgRQAEgOAGgEQAEgEAFADQAEABADADIgFAJQgFALgCAMIgDAKIgCAIQgDAGAAAHQAAAEADAFQABAFABAFIADACIADAMQACAPAKALQgFAGgFADIgFABQgDAAgBgCg");
	this.shape_161.setTransform(-444,-57.9);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#628DD1").s().p("AAABEQgGgEgCgDQgJgMgDgPIgDgLQAIAIALAAQALABAHgCQAFgCACgDIAFgEQgDAagHAOQgEAIgFADIgBAAIAAABQgCAAgEgFgAAVgXIgCgBIgCgCQgGgEgIAAQgFgBgIACQgGACgGAFIgDADIACgKQACgNAGgLIAEgIQAEgFAHgEIACgCIACAAQAKAHAHAXIAEARIABAGIgFgEg");
	this.shape_162.setTransform(-441.2,-58);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#E18F59").s().p("AAEAHIgEgDIgFgEQgCgEADgFIAGAJIAFAHIgBABIgBACQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAg");
	this.shape_163.setTransform(-436,-183.8);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#372511").s().p("AAABDQgGgFgFgNQgHgSAAgdQAAgcAHgVQAFgOAGgFQAEgEAFADQAGACAEAGQgJAMgDAPQgCAFgBAGIgCADIgEAKQgCAFAAADQAAAHADAHIADAHIACAKQACANAGALIAEAIQgDAEgEABIgFABQgDAAgBgCg");
	this.shape_164.setTransform(-444.1,-184.8);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#000000").s().p("AgFAeQgGgCgGgEIgDgEIgFgHQgDgHAAgGQAAgEACgFIAGgKIACgDQAIgIAKgBQAMAAAHACQAEACADADQADAGgCAIIgBAJQAAAEABAEQAEAKgGAHIgBABIgCACQgGAEgIAAIgFABIgIgCg");
	this.shape_165.setTransform(-441.7,-184.7);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#6BD3D2").s().p("AACBIIgCgCQgHgDgEgFIgEgIQgGgMgCgMIgCgKIADADQAGAFAHACQAGACAGgBQAIgBAGgDIACgDIABAAIAGgEIgBAFIgEARQgHAYgKAGIgBAAIgBAAgAAVgYQgDgEgEgBQgHgDgLABQgKABgJAIQABgHACgEQADgQAKgLQABgDAGgEQAEgFADABIAAAAIABAAQAEADAEAHQAHAOADAaIgFgDg");
	this.shape_166.setTransform(-441.2,-184.7);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#5BB1B0").s().p("AgIArIAEgRIAIgJIAKgIIAHADIAEAEQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABIgEAIQgFAJgJAMQgLARgOAGIgIABQAKgGAHgXgAALgGIgHgFIgEgDIgDgHQgDgagIgNQgDgIgFgCIAAgBQADAAAEACQALAGAMATIAMAPQAGAJAAAFQAAAGgFADIgGAAIgEAAg");
	this.shape_167.setTransform(-438.1,-184.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_168.setTransform(-440.4,-191.9);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#EEC09E").s().p("AgdAHQgBgEAAgEIABgJQACgIgDgGIAFAEIAFAHQADAFABAHIACAAIADABQADABgJACIgCAKIgGAIIgGADQAGgHgEgKgAAQAQIgJgHQgDgDAIALIAAACIAAABQgDABgEgFIgFgHIgFgJIgEgGIAEABIAFgBQAEgDAAgGIABABIAPAFQAHAEAEAEIABABIAAAAIgLgCQAKAEABAEIAAABIgBABIgGgDIgDgDIgCgBIABACIAGAEQAJAJgHgBIgJgGIgFgEQAKAMAAAEIgBAAQgBAAgHgFg");
	this.shape_169.setTransform(-435.9,-184.7);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#E18F59").s().p("AAEAGIgEgDIgFgDQgCgFADgEIAGAJIAFAHIgBABIgBABQAAAAAAAAQAAAAAAgBQAAAAAAgBQAAAAgBgBg");
	this.shape_170.setTransform(-436,-104.6);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#000000").s().p("AgFAeQgGgCgGgEIgDgEIgFgHQgDgGAAgHQAAgDACgGQACgFAEgFIACgDQAIgIAKAAQAMgBAHACQAEACADAEQADAFgCAIIgBAJQAAAEABAEQAEAKgGAHIgBABIgCACQgGAEgIAAIgFAAIgIgBg");
	this.shape_171.setTransform(-441.7,-105.6);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#EEC09E").s().p("AgdAHQgBgEAAgEIABgJQACgIgDgFIAFADIAFAGQADAGABAHIACAAIADABQADABgJACIgCAKIgGAHIgGAEQAGgHgEgKgAAQAQIgJgHQgDgDAIALIAAACIAAABQgDABgEgFIgFgGIgFgKIgEgGIAEABIAFgBQAEgDAAgGIABABQAGADAJACQAHAEAEADIABACIAAAAIgLgCQAKAEABAEIAAABIgBABIgGgEIgDgCIgCgBIABACIAGAEQAJAJgHgBIgJgGIgFgEQAKANAAACIgBABQgBAAgHgFg");
	this.shape_172.setTransform(-435.9,-105.6);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#3A4D75").s().p("AgIAqIAEgQIAIgJIAKgIIAHADIAEADQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAAAQgBAEgDAEQgFAKgJAMQgLARgOAFQgFACgDAAQAKgGAHgYgAALgHQgEgBgDgDIgEgDIgDgHQgDgZgIgPQgDgHgFgCIAAgBQADAAAEACQALAGAMASIAMAQQAGAJAAAFQAAAGgFADIgGAAIgEgBg");
	this.shape_173.setTransform(-438.1,-105.5);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_174.setTransform(-440.4,-112.7);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#48608E").s().p("AACBIIgCgCQgHgCgEgGIgEgIQgGgMgCgMIgCgKIADADQAGAFAHACQAGACAGgBQAIgBAGgDIACgCIABgBIAGgEIgBAGIgEAQQgHAYgKAGIgBAAIgBAAgAAVgYQgDgDgEgCQgHgCgLAAQgKABgJAIQABgHACgEQADgQAKgLIAHgHQAEgFADABIAAABIABAAQAEACAEAHQAHAPADAZIgFgDg");
	this.shape_175.setTransform(-441.2,-105.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#372511").s().p("AAABDQgGgFgFgMQgHgTAAgdQAAgbAHgWQAFgOAGgEQAEgFAFADQAGACAEAGQgJAMgDAPQgCAFgBAGIgCADQgCAFgCAFQgCAGAAACQAAAIADAGIADAHIACAKQACANAGALIAEAIQgDAEgEABIgFABQgDAAgBgCg");
	this.shape_176.setTransform(-444.1,-105.7);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#41210C").s().p("AgFAeQgGgCgGgFIgDgDIgFgHQgDgHAAgGQAAgEADgFQABgGAEgEIACgDQAIgIAKgBQAMAAAHACQAFACACAEQADAEgBAIIgCALQAAADABAEQAEAKgFAHIgCABIgCACQgGADgIABIgEABQgEAAgFgCg");
	this.shape_177.setTransform(-441.7,-168.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#E18F59").s().p("AAEAHIgEgDQgCgDgDAAQgCgGADgEIAGAJIAFAHIgBABIgBACQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAgBgBAAg");
	this.shape_178.setTransform(-436,-168);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#EEC09E").s().p("AgdAHQgCgEABgDIABgLQABgIgCgEIAFADQADACACAEQADAGAAAHIADABIADAAQADABgJABQAAAHgCAEQgDAEgEADIgFAEQAFgHgDgKgAAPAQIgIgHQgEgDAJALIAAABIgBACQgCABgEgFIgFgHIgGgJIgEgGIAFAAQADABACgBQAEgCgBgHIABABIAPAFQAIADADAEIACACIgBAAQAAABgKgEQAKAFABAEIgBABIgBAAIgFgCIgDgDIgCgBIABABIAGAFQAJAIgHgBIgJgFIgGgEQAKAMABADIgBABQgCAAgHgFg");
	this.shape_179.setTransform(-435.8,-168.9);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#E64A00").s().p("AgIAqIAEgRIAIgIIAKgIQACAAAFADIAEADQAAABABAAQAAABAAAAQAAAAAAABQAAAAAAAAIgDAIQgFAKgKAMQgLARgOAGIgIABQAKgGAHgYgAAPgGIgEgBIgHgEIgEgDQAAgEgDgCQgDgbgHgOQgEgHgFgDIAAAAIAHACQALAGAMASQAIAKAEAHQAGAIAAAFQAAAGgFACIgDABIgDAAg");
	this.shape_180.setTransform(-438.1,-168.9);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#EC672C").s().p("AACBIIgCgCQgHgDgEgGIgEgIQgGgLgCgNIgCgJIADADQAGAFAGABQAIADAFgBQAIgBAGgDIACgCIACgBIAFgEIgBAFIgEARQgHAYgKAGgAAVgYQgCgDgFgDQgHgCgLABQgLAAgIAJIADgMQADgOAJgMQACgDAGgEQAEgFACABIABAAQAFADAEAHQAHAOADAbIgFgEg");
	this.shape_181.setTransform(-441.2,-168.9);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#372511").s().p("AAABCQgGgEgEgNQgIgSAAgdQAAgcAIgVQAEgOAGgFQAEgEAFADQAFACAFAHQgKALgCAPIgDALIgDADQgBAEgBAGQgDAFAAADQAAAHADAHIACAHIADAKQACAMAFAMIAFAIIgHAFIgDABQgEAAgCgDg");
	this.shape_182.setTransform(-444,-169);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E18F59").s().p("AAEAHIgEgEQgCgCgDAAQgCgFADgFIAGAJIAFAHIgBACIgBABQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAg");
	this.shape_183.setTransform(-436,-152.2);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#372511").s().p("AAABDQgGgEgEgOQgIgRAAgdQAAgcAIgWQAEgOAGgFQAEgEAFADQAFADAFAGQgKALgCAPIgDAMIgDACQgBAFgBAFQgDAGAAADQAAAHADAGIACAIIADAKQACAMAFALIAFAJQgDADgEABIgEABQgEAAgBgCg");
	this.shape_184.setTransform(-444,-153.2);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#EEC09E").s().p("AgdAIQgCgFABgDIABgKQABgJgCgEIAFADIAFAGQADAGAAAHIADABIADAAQADABgJACQAAAGgCAEIgHAHIgFAEQAFgIgDgIgAAPAQIgIgHQgEgCAJAKIAAABIgBACQgCABgEgFIgFgHIgGgJIgEgGIAFABIAFgBQAEgDgBgGIABABIAPAFQAIAEADAEIACABIgBAAIgKgDQAKAGABADIgBACIgBAAIgFgEIgDgCIgCgBIABABIAGAGQAJAIgHgBQgCAAgHgGIgGgEQAKANABACIgBABQgCAAgHgFg");
	this.shape_185.setTransform(-435.8,-153.1);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFF6CD").s().p("AgFAeQgGgCgGgFIgDgDIgFgHQgDgGAAgHQAAgEADgFQABgGAEgEIACgDQAIgIAKAAQAMgBAHACQAFACACAEQADAEgBAJIgCAJQAAAEABAEQAEAJgFAIIgCABIgCACQgGAEgIAAIgDAAIgKgBg");
	this.shape_186.setTransform(-441.7,-153.1);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#393939").s().p("AgIAqIAEgQIAIgJIAKgHQACAAAFACIAEADQAAABABAAQAAABAAAAQAAABAAAAQAAAAAAABIgDAHQgFAKgKAMQgLARgOAFQgEACgEABQAKgHAHgYgAALgGIgHgFIgEgDIgDgHQgDgZgHgOQgEgIgFgDIAAgBQAEABADADQALAFAMASIAMAQQAGAKAAAEQAAAGgFADIgGABIgEgBg");
	this.shape_187.setTransform(-438.1,-153);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#424242").s().p("AACBJIgCgCQgHgEgEgFIgEgIQgGgLgCgNIgCgKIADADQAGAFAGACQAIACAFgBQAIAAAGgEIACgCIACgBIAFgEIgBAGIgEARQgHAXgKAHgAAVgXQgCgEgFgCQgHgCgLABQgLAAgIAIIADgLQADgPAJgMIAIgHQAEgFACABIABAAQAFADAEAIQAHAOADAaIgFgDg");
	this.shape_188.setTransform(-441.2,-153.1);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#E18F59").s().p("AAEAHIgEgEQgCgDgDAAQgCgEADgFIAGAJIAFAHIgBABIgBACQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAg");
	this.shape_189.setTransform(-436,-136.3);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#000000").s().p("AgFAeQgGgCgGgFIgDgDIgFgHQgDgHAAgGQAAgEADgFQABgGAEgFIACgCQAIgJAKAAQAMAAAHACQAFACACADQADAFgBAIIgCAKQAAADABAFQAEAJgFAIIgCABIgCACQgGAEgIAAIgDABIgKgCg");
	this.shape_190.setTransform(-441.7,-137.2);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#372511").s().p("AAABDQgGgFgEgNQgIgRAAgdQAAgdAIgVQAEgOAGgFQAEgEAFADQAFACAFAHQgKALgCAPIgDAMIgDACQgBAEgBAGQgDAFAAAEQAAAHADAGIACAIIADAKQACAMAFALIAFAJQgDADgEABIgEABQgEAAgBgCg");
	this.shape_191.setTransform(-444,-137.4);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#628DD1").s().p("AACBIIgCgBQgHgEgEgFIgEgIQgGgLgCgNIgCgKIADADQAGAFAGACQAIACAFgBQAIAAAGgEIACgCIACgBIAFgEIgBAGIgEARQgHAXgKAGgAAVgYQgCgDgFgCQgHgCgLAAQgLAAgIAJIADgLQADgPAJgMQACgDAGgEQAEgFACABIABAAQAFADAEAIQAHAOADAaIgFgEg");
	this.shape_192.setTransform(-441.2,-137.2);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#447BCD").s().p("AgIArIAEgRIAIgJIAKgIQACAAAFADIAEAEQAAAAABAAQAAABAAAAQAAABAAAAQAAAAAAABIgDAHQgFAKgKAMQgLASgOAFIgIABQAKgGAHgXgAALgGIgHgEIgEgEIgDgGQgDgagHgOQgEgIgFgDIAAAAIAHACQALAGAMASQAIAKAEAHQAGAIAAAFQAAAGgFADIgGABIgEgBg");
	this.shape_193.setTransform(-438.1,-137.2);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#EEC09E").s().p("AgdAIQgCgFABgDIABgLQABgIgCgEIAFADIAFAHQADAFAAAHIADABIADAAQADABgJACQAAAGgCAEIgHAIIgFADQAFgHgDgJgAAPAQIgIgHQgEgDAJALIAAABIgBACQgCABgEgFIgFgHIgGgJIgEgGIAFABIAFgBQAEgCgBgHIABABIAPAFQAIAEADAEIACABIgBAAIgKgCQAKAEABAEIgBACIgBAAIgFgDIgDgDIgCAAIABAAIAGAGQAJAIgHgCIgJgFIgGgEQAKAMABAEIgBABQgCAAgHgGg");
	this.shape_194.setTransform(-435.8,-137.3);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#E18F59").s().p("AAEAHIgEgEIgFgCQgCgGADgDIAFAJIAGAGIgCACIAAABQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAg");
	this.shape_195.setTransform(-461.1,-20.9);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#EEC09E").s().p("AgdAHQgCgEAAgDIACgKQACgIgEgFIAFADIAGAGQADAGABAHIACABIADAAQADACgJABIgCAKQgDAEgEADQgCADgDABQAFgHgDgKgAAPAQIgIgHQgEgDAJALIAAACIgBABQgCABgEgFIgFgGIgFgKIgFgGIAFABIAFgBQAEgDgBgGIACABQAFADAJACQAIAEADADIACACIAAAAIgLgCQAKAEABAEIAAABIgCABIgFgEIgDgCIgCAAIABABIAGAEQAJAJgHgBIgJgGIgGgEQALANAAACIgBABQgCAAgHgFg");
	this.shape_196.setTransform(-461,-21.8);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#000000").s().p("AgEAeQgHgBgFgFIgEgEQgDgDgBgEQgEgGABgHIABgJIAGgKIACgDQAIgIAKAAQANgBAGACQAEACADAEQADAFgCAIIgBAKQAAADABAEQAEAKgGAHIAAABIgDACQgGAEgIAAIgGABQgCAAgEgCg");
	this.shape_197.setTransform(-466.8,-21.8);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#372511").s().p("AAABDQgGgFgFgMQgHgTAAgcQAAgcAHgWQAFgOAGgEQAEgFAGADQAFACAEAGQgJAMgDAPIgDALIgCADIgEAKIgBAIQgBAIAEAGQAAAEACADIACAKQACANAGALIAEAIQgDAEgDABIgFABQgEAAgBgCg");
	this.shape_198.setTransform(-469.2,-21.9);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_199.setTransform(-465.5,-29);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#48608E").s().p("AACBIIgCgCQgHgDgEgGIgEgIQgGgLgCgNIgCgKIAEAEQAFAFAHABQAHADAFgCQAIAAAGgEIADgCIAAgBQAEgBACgDIgBAGQgBAJgDAIQgHAYgKAGIgBAAIgBAAgAAVgYQgDgEgEgCQgGgCgMABQgLAAgIAIIADgLQADgPAJgMIAIgGQAFgFABABIABAAIABAAQAEACAEAIQAIAOACAaIgFgDg");
	this.shape_200.setTransform(-466.3,-21.7);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#3A4D75").s().p("AgIAqQADgIABgJIAJgIIAJgIIAHADIAEADQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQgBADgDAFQgFAKgIAMQgMARgOAFQgEACgEAAQAKgGAHgYgAALgHIgHgEIgDgDIgEgGQgCgbgIgOQgEgIgEgCIAAAAIAGACQALAGANASIALAQQAGAJAAAEQAAAHgFACIgFABIgFgBg");
	this.shape_201.setTransform(-463.2,-21.7);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#372511").s().p("AAABDQgGgFgFgNQgGgSgBgdQAAgcAHgVQAFgOAGgFQAEgEAGADQAFACAEAHQgJALgEAPIgCAMIgCACQgCAEgCAGQgCAFAAAEQAAAGADAHQABAEACADIABAKQADANAFALIAFAIQgCAEgEABIgFABQgDAAgCgCg");
	this.shape_202.setTransform(-469.2,-38.5);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#E18F59").s().p("AAEAHQgBgDgDgBQgCgDgDAAQgCgFADgEIAFAJIAGAHIgBABIgBACQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_203.setTransform(-461.1,-37.4);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#EEC09E").s().p("AgdAIQgCgFABgDIABgLQABgIgCgEIAFADIAFAHQADAFAAAHIADABIADAAQADABgJABQAAAHgDAEQgCAEgEADIgFAEQAFgHgDgJgAAPAQIgJgHQgDgDAJALIABABIgCACQgBABgFgFIgFgHIgFgJIgFgGIAFABIAFgBQADgCAAgHIACABIAOAFQAIAEADAEIACABIAAAAQgBABgKgDQAJAEACAEIAAACIgCAAIgFgDIgDgDIgCgBIABABIAFAGQAKAIgHgCIgJgFIgGgEQALAMAAADIgBABQgCAAgHgFg");
	this.shape_204.setTransform(-460.9,-38.4);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#41210C").s().p("AgEAeQgHgCgFgEIgEgEQgDgDgBgEQgDgHAAgGQAAgEACgFQACgGADgEIACgCQAIgJAKgBQANAAAGACQAFACACAEQADAEgBAIIgCALQAAADABAFQAEAJgFAHIgBABIgDADQgFADgIABIgDAAQgGAAgEgCg");
	this.shape_205.setTransform(-466.8,-38.4);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#E64A00").s().p("AgIArIAEgSQAEgCAFgGIAJgIQADAAAEADQADABABADQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIgDAHQgFAKgJAMQgMASgOAFIgIABQAKgGAHgXgAAQgGIgFAAIgGgEIgEgEIgDgGQgDgbgIgNQgEgIgEgDIAAAAQADAAADACQALAGANASQAIAKADAHQAGAIAAAFQAAAGgFADIgEAAIgBAAg");
	this.shape_206.setTransform(-463.2,-38.3);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#EC672C").s().p("AABBIIgCgCQgGgDgEgFIgFgIQgFgMgDgNIgBgJIADADQAFAFAHABQAIADAFgBQAIgBAFgDIADgCIABgBIAFgEIAAAFIgEASQgHAXgKAGgAAVgYQgCgDgGgCQgGgDgLABQgLAAgIAJIACgLQAEgPAJgMIAIgHQAEgFACABIABAAQAFADAEAIQAHANADAbIgFgEg");
	this.shape_207.setTransform(-466.3,-38.3);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_208.setTransform(-465.5,-64.1);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#E18F59").s().p("AgFAAIAFgCIAEgEQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBIAAABIACACIgGAGIgFAKQgDgFACgFg");
	this.shape_209.setTransform(-461.1,-72.2);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#EEC09E").s().p("AgdALIgCgJQAAgEACgEQADgKgFgHQADABACADIAHAHIACAKQAJACgDAAIgDACIgCAAQgBAHgDAGIgGAGIgFADQAEgFgCgIgAAAAHIgFgBIgFABIAFgGIAFgKIAFgGQAEgFACABIABABIAAACQgJALAEgDIAIgHQAKgHAAADQAAACgLANIAGgEIAJgGQAHgBgJAJIgGAEIgBACIACgBIADgCIAFgEIACABIAAACQgBADgKAEIALgDIAAAAIgCADQgDADgIAEIgOAFIgCABQABgGgEgDg");
	this.shape_210.setTransform(-461,-71.3);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#000000").s().p("AAAAfQgKAAgIgIIgCgDIgGgKIgBgKQgBgGAEgGQABgEADgDIAEgEQAFgEAHgCQAFgCAHABQAIAAAGAEIADACIAAABQAGAHgEAKQgBAEAAAEIABAJQACAIgDAFQgDAEgEACQgFABgKAAIgEAAg");
	this.shape_211.setTransform(-466.8,-71.3);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#609634").s().p("AAABEIgIgHQgJgLgDgQIgDgLQAIAIALABQAMAAAGgCQAEgCADgDIAFgDQgCAZgIAPQgEAHgEACIgBAAIgBABIAAAAQgCAAgEgEgAAUgXIAAAAIgDgDQgGgDgIgBQgFgBgHACQgHACgFAFIgEADIACgKQACgMAGgMIAEgIQAEgFAHgDIACgCIACAAQAKAGAHAYQADAIABAIIABAGQgCgCgEgCg");
	this.shape_212.setTransform(-466.3,-71.3);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#372511").s().p("AAABDQgGgFgFgOQgHgWAAgbQAAgdAHgSQAFgNAGgFQAEgEAGADQADABADAEIgEAIQgGALgCANIgCAKQgCADAAAEQgEAGABAHIABAJIAEAKIACADIADALQADAPAJAMQgEAGgFACIgFABQgDAAgCgCg");
	this.shape_213.setTransform(-469.2,-71.2);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#4A7328").s().p("AgVBHQAEgCAEgHQAIgPACgZIAEgHIADgDIAHgEIAFgBIAFABQAFACAAAGQAAAFgGAJIgLAQQgNASgLAGQgEACgCAAgAAFgQIgJgJQgBgIgDgIQgHgYgKgGQAEAAAEACQAOAFAMARIANAWQADAEABAEQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABIgEADIgHADIgJgIg");
	this.shape_214.setTransform(-463.2,-71.3);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_215.setTransform(-465.5,2);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#5BB1B0").s().p("AgVBIQAEgCAEgIQAIgPACgaIAEgGIADgDIAHgEQACgCADAAIAFACQAFACAAAHQAAAEgGAIIgLARQgNASgLAGIgGACgAAFgQIgJgIQgBgJgDgIQgHgYgKgGIAIACQAOAFAMARQAIAMAFAKQADAFABADQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAIgEADIgHADIgJgIg");
	this.shape_216.setTransform(-463.2,-5.2);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#EEC09E").s().p("AgdAMIgCgLQAAgDACgEQADgKgFgIIAFAFIAHAHIACALQAJABgDAAIgDABIgCABQgBAHgDAGIgGAGIgFADQAEgEgCgIgAAAAHIgFgBQgDAAgCABIAFgGIAFgKIAFgHQAEgEACABIABABIAAACQgJALAEgDIAIgHQAKgHAAADQAAACgLANIAGgEIAJgFQAHgCgJAJIgGAFIgBAAIACAAIADgCIAFgEIACABIAAACQgBADgKAFIALgEIAAAAIgCADQgDADgIADIgOAGIgCABQABgHgEgCg");
	this.shape_217.setTransform(-461,-5.2);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#E18F59").s().p("AgFAAIAFgDIAEgDQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBIAAABIACABIgGAHIgFAKQgDgFACgFg");
	this.shape_218.setTransform(-461.1,-6.1);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#000000").s().p("AAAAfQgKAAgIgIIgCgDIgGgKIgBgKQgBgGAEgGQABgEADgEIAEgDQAFgFAHgBQAFgDAHACQAIAAAGAEIADACIAAAAQAGAIgEAKQgBAEAAADIABAKQACAIgDAFQgDAEgEACQgFACgKAAIgEgBg");
	this.shape_219.setTransform(-466.8,-5.2);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#372511").s().p("AAABCQgGgEgFgOQgHgWAAgcQAAgcAHgSQAFgNAGgFQAEgEAGADQADABADAEIgEAIQgGALgCANIgCAJQgCAEAAAEQgEAGABAHIABAJIAEAKIACADIADALQADAPAJALQgEAHgFACIgFABQgDAAgCgDg");
	this.shape_220.setTransform(-469.2,-5.1);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#6BD3D2").s().p("AAABEIgIgHQgJgLgDgPIgDgLQAIAIALAAQAMABAGgCQAEgCADgEIAFgDQgCAagIAOQgEAIgEACIgBAAIgBAAIAAAAQgCAAgEgEgAAUgXIAAAAIgDgCQgGgEgIAAQgFgCgHADQgHABgFAFIgEADIACgJQACgNAGgLIAEgIQAEgGAHgDIACgCIACAAQAKAGAHAYQADAIABAJIABAFIgGgEg");
	this.shape_221.setTransform(-466.3,-5.3);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#447BCD").s().p("AgVBIQAEgDAEgIQAIgOADgaIADgGIAEgEIAGgEIAFgBIAFABQAFADAAAGQAAAFgGAIQgDAHgIAKQgNASgLAGQgDACgDAAgAAFgQIgJgJIgEgRQgHgXgKgGIAIABQAOAFAMASQAJAMAFAKIADAHQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBACgDACQgEADgDAAIgJgIg");
	this.shape_222.setTransform(-463.2,-54.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#EEC09E").s().p("AgdAMIgBgLQgBgDACgFQADgJgFgHIAFADIAGAIQADAEAAAGQAJACgDAAIgDABIgDABQAAAHgDAFIgFAHIgFADQACgEgBgIgAAAAHIgFgBIgFABIAFgGIAFgJIAFgHQAFgFABABIACACIgBABQgJALADgDIAJgHQAKgIAAADQAAAEgLAMIAGgEQAHgFACAAQAHgCgKAIIgFAGIgBAAIACAAIADgDIAFgDIACAAIAAACQgCAEgJAEQAKgDABAAIAAAAIgCACQgDAEgIAEIgOAFIgCABQAAgHgDgCg");
	this.shape_223.setTransform(-460.9,-54.8);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#E18F59").s().p("AgFAAQADAAACgCQADgCABgCQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIABACIABABIgGAGIgFAKQgDgFACgFg");
	this.shape_224.setTransform(-461.1,-55.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#000000").s().p("AAAAgQgKAAgIgJIgCgCQgDgFgCgGQgCgFAAgFQAAgFADgHQABgEADgDIAEgDQAFgFAHgCQAFgCAIABQAIAAAFAEIADACIABABQAFAIgEAJQgBAFAAADIACAKQABAIgDAFQgCADgFACQgFACgLAAIgDAAg");
	this.shape_225.setTransform(-466.8,-54.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#372511").s().p("AAABDQgGgFgFgOQgHgVAAgdQABgdAGgRQAFgNAGgFQAEgEAGADQAEABACADIgFAJQgFALgDAMIgBAKQgCAEgBAEQgDAGAAAHQAAAEACAFQACAGACAEIACACIACAMQAEAPAJALQgEAHgFACIgFABQgEAAgBgCg");
	this.shape_226.setTransform(-469.2,-54.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#628DD1").s().p("AAABEIgIgHQgJgMgEgPIgCgLQAIAJALAAQALAAAGgCQAGgCACgDIAFgEQgDAagHAOQgEAIgFADIgBAAIgBAAQgBAAgEgEgAAUgXIgBgBIgDgCQgFgEgIAAQgFgBgIACQgHACgFAFIgDADIABgKQADgNAFgLIAFgIQAEgFAGgEIACgBIADAAQAKAGAHAXIAEARIAAAGIgFgEg");
	this.shape_227.setTransform(-466.3,-54.8);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#E18F59").s().p("AAEAHIgEgDIgFgDQgCgFADgFIAFAKIAGAHIgCABIAAABQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_228.setTransform(-461.1,-120.1);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#EEC09E").s().p("AgdAHQgCgEAAgDIACgKQACgIgEgGIAFAEIAGAGQADAGABAHIACABIADAAQADABgJABIgCALIgHAHIgFAFQAFgIgDgKgAAPAQIgIgHQgEgDAJALIAAABQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgCABgEgFIgFgHIgFgJIgFgHQACACADAAIAFgCQAEgCgBgGIACAAIAOAGQAIAEADAEIACABIAAAAIgLgCQAKAEABAEIAAABIgCABIgFgDIgDgDIgCgBIABABIAGAFQAJAJgHgBIgJgGIgGgEQALAMAAADIgBABQgCAAgHgFg");
	this.shape_229.setTransform(-461,-120.9);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#000000").s().p("AgEAeQgHgCgFgEIgEgEQgDgDgBgEQgEgHABgGIABgJIAGgKIACgDQAIgIAKgBQANAAAGACQAEACADADQADAFgCAIIgBAKQAAAEABAEQAEAKgGAHIAAABIgDACQgGAEgIAAIgEABQgEAAgEgCg");
	this.shape_230.setTransform(-466.8,-120.9);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#372511").s().p("AAABCQgGgEgFgNQgHgSAAgdQAAgbAHgWQAFgOAGgEQAEgFAGADQAFACAEAGQgJAMgDAPIgDAMIgCACIgEAKIgBAIQgBAIAEAGQAAAEACADIACAKQACANAGALIAEAIQgDADgDACIgFABQgDAAgCgDg");
	this.shape_231.setTransform(-469.2,-121);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_232.setTransform(-465.5,-128.1);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#609634").s().p("AACBIIgCgCQgHgDgEgFIgEgIQgGgMgCgNIgCgJIAEADQAFAFAHABQAHADAFgBQAIgBAGgDIADgDIAAAAIAGgEIgBAFQgBAJgDAIQgHAYgKAGIgBAAIgBAAgAAVgYQgDgEgEgBQgGgDgMABQgLAAgIAJIADgLQADgQAJgLIAIgHQAFgFABABIABAAIABAAQAEADAEAHQAIAOACAaIgFgDg");
	this.shape_233.setTransform(-466.3,-120.9);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#4A7328").s().p("AgIAqQADgIABgIIAJgJIAJgIIAHADIAEADQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQgBADgDAFQgFAKgIAMQgMARgOAGIgIABQAKgFAHgZgAALgHIgHgEIgDgDIgEgHQgCgagIgNQgEgIgEgCIAAgBQACAAAEADQALAFANATIALAPQAGAJAAAFQAAAGgFACIgFACQgDgBgCgBg");
	this.shape_234.setTransform(-463.2,-120.9);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#E18F59").s().p("AAEAHIgEgEIgFgDQgCgFADgDIAFAIIAGAHIgCABIAAABQAAAAAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAg");
	this.shape_235.setTransform(-461.1,-103.5);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#EEC09E").s().p("AgdAHQgCgDAAgFIACgJQACgIgEgFIAFADIAGAHQADAFABAHIACAAIADABQADACgJABIgCAKIgHAIQgCACgDABQAFgHgDgKgAAPAQIgIgHQgEgCAJAKIAAACIgBABQgCABgEgFIgFgGIgFgKIgFgGIAFABIAFAAQAEgEgBgFIACAAQAFADAJACQAIAEADADIACACIAAABIgLgDQAKAEABADIAAACIgCABIgFgEIgDgBIgCgBIABABIAGAEQAJAJgHgBIgJgGIgGgEQALANAAADIgBAAQgCAAgHgFg");
	this.shape_236.setTransform(-461,-104.4);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#3A4D75").s().p("AgIAqQADgIABgIIAJgJIAJgIIAHADIAEADQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAAAQgBAEgDAEIgNAWQgMARgOAFQgEACgEAAQAKgGAHgYgAALgHIgHgEIgDgDIgEgHQgCgZgIgPQgEgHgEgCIAAgBQACAAAEACQALAGANASIALAQQAGAJAAAFQAAAGgFADIgFAAIgFgBg");
	this.shape_237.setTransform(-463.2,-104.4);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_238.setTransform(-465.5,-111.6);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#000000").s().p("AgEAeQgHgCgFgEIgEgEQgDgDgBgEQgEgGABgHIABgJIAGgKIACgDQAIgIAKAAQANgBAGACQAEACADADQADAGgCAIIgBAJQAAAEABAEQAEAKgGAHIAAABIgDACQgGAEgIAAIgFAAIgHgBg");
	this.shape_239.setTransform(-466.8,-104.4);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#48608E").s().p("AACBIIgCgCQgHgCgEgGIgEgIQgGgMgCgMIgCgKIAEADQAFAFAHACQAHACAFgBQAIgBAGgDIADgDIAAAAQAEgCACgCIgBAGQgBAIgDAIQgHAYgKAGIgBAAIgBAAgAAVgYQgDgDgEgCQgGgCgMAAQgLABgIAIIADgLQADgQAJgLIAIgHQAFgFABABIABABIABAAQAEACAEAHQAIAPACAZIgFgDg");
	this.shape_240.setTransform(-466.3,-104.4);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#372511").s().p("AAABDQgGgFgFgMQgHgTAAgdQAAgbAHgWQAFgOAGgFQAEgEAGADQAFACAEAGQgJAMgDAPIgDALIgCADIgEAKIgBAIQgBAIAEAGQAAAEACADIACAKQACANAGALIAEAIQgDAEgDABIgFABQgEAAgBgCg");
	this.shape_241.setTransform(-469.2,-104.5);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_242.setTransform(-452.1,-49.3);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#E18F59").s().p("AgFAAIAFgCIAEgEQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIABABIABACIgFAGIgGAKQgDgFACgFg");
	this.shape_243.setTransform(-447.7,-57.4);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#000000").s().p("AAAAfQgKAAgIgIIgCgDQgEgFgCgFQgCgGAAgEQAAgGADgGIAFgHIADgEQAFgEAHgCQAFgCAIABQAIAAAFAEIADACIABABQAGAHgEAKQgBAEAAAEIABAJQACAIgDAFQgDAEgEACQgFABgKAAIgEAAg");
	this.shape_244.setTransform(-453.4,-56.5);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#372511").s().p("AAABDQgGgFgFgOQgHgWAAgbQAAgdAHgSQAFgNAGgFQAEgEAFADQAEABADAEIgEAIQgGALgCANIgCAKIgDAHQgDAGAAAHQAAADACAGQACAFACAFIACADIACALQAEAPAJAMQgEAGgGACIgEABQgEAAgBgCg");
	this.shape_245.setTransform(-455.8,-56.4);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#6BD3D2").s().p("AAABEQgGgEgBgDQgKgLgEgQIgCgLQAJAIAKABQALAAAHgCQAFgCACgDIAFgDQgDAZgHAPQgEAHgEACIgBAAIAAABIgBAAQgCAAgEgEgAAUgXIgBAAIgCgDQgGgDgIgBQgGgBgGACQgHACgGAFIgDADIACgKQACgMAGgMIAEgIQAEgFAHgDIACgCIACAAQAKAGAHAYIAEAQIABAGIgGgEg");
	this.shape_246.setTransform(-452.9,-56.5);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#5BB1B0").s().p("AgWBHQAFgCADgHQAIgPADgZIADgHIAEgDQADgDAEgBIAEgBIAFABQAGACAAAGQAAAFgGAJIgMAQQgMASgLAGQgEACgDAAgAAEgQIgIgJIgEgQQgHgYgKgGQADAAAFACQAOAFALARQAJAMAFAKQADAEABAEQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBABIgEADIgGADIgKgIg");
	this.shape_247.setTransform(-449.8,-56.5);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#EEC09E").s().p("AgdALIgBgJQAAgEABgEQAEgKgGgHIAGAEQAEADACAEQACAEAAAGQAJACgDAAIgDACIgCAAQgBAHgDAGIgFAGIgFADQADgFgCgIgAAAAHIgFgBIgEABIAEgGIAFgJIAFgHQAEgFADABIAAABIAAACQgIALADgDIAJgHQAJgHAAADQAAACgKANIAFgEIAJgGQAHgBgJAJIgGAEIgBACIACgBIADgCIAGgEIABABIAAACQgBADgKAEIALgDIAAAAIgBADQgEADgHAEIgPAFIgBABQAAgGgEgDg");
	this.shape_248.setTransform(-447.6,-56.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_249.setTransform(-452.1,15.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#E18F59").s().p("AgFAAIAFgCIAEgEQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIABABIABACIgFAGIgGAKQgDgFACgFg");
	this.shape_250.setTransform(-447.7,7.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#000000").s().p("AAAAfQgKAAgIgIIgCgDQgEgFgCgFQgCgGAAgEQAAgGADgGIAFgHIADgEQAFgEAHgCQAFgCAIABQAIAAAFAEIADACIABABQAGAHgEAKQgBAEAAAEIABAJQACAIgDAFQgDAEgEACQgFABgKAAIgEAAg");
	this.shape_251.setTransform(-453.4,8.5);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#372511").s().p("AAABCQgGgEgFgOQgHgWAAgbQAAgdAHgSQAFgNAGgFQAEgEAFADQAEABADAEIgEAIQgGALgCANIgCAKIgDAHQgDAGAAAHQAAADACAGQACAFACAFIACADIACALQAEAPAJAMQgEAGgGACIgEABQgEAAgBgDg");
	this.shape_252.setTransform(-455.8,8.6);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#609634").s().p("AAABEIgHgHQgKgLgEgQIgCgLQAJAIAKABQALAAAHgCQAFgCACgDIAFgDQgDAZgHAPQgEAHgEACIgBAAIAAABIgBAAQgCAAgEgEgAAUgXIgBgBIgCgCQgGgDgIgBQgGgBgGACQgHACgGAFIgDADIACgKQACgMAGgMIAEgIQAEgFAHgDIACgCIACAAQAKAGAHAYIAEAQIABAGIgGgEg");
	this.shape_253.setTransform(-452.9,8.5);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#4A7328").s().p("AgWBHQAFgCADgHQAIgPADgZIADgHIAEgDQADgDAEgBIAEgBIAFABQAGACAAAGQAAAFgGAJIgMAQQgMASgLAGQgEACgDAAgAAEgQIgIgJIgEgQQgHgYgKgGQADAAAFACQAOAFALARQAJAMAFAKQADAEABAEQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBABIgEADIgGADIgKgIg");
	this.shape_254.setTransform(-449.8,8.5);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#EEC09E").s().p("AgdALIgBgJQAAgEABgEQAEgKgGgHIAGAEQAEADACAEQACAEAAAGQAJACgDAAIgDACIgCAAQgBAHgDAGIgFAGIgFADQADgFgCgIgAAAAHIgFgBIgEABIAEgGIAFgKIAFgGQAEgFADABIAAABIAAACQgIALADgDIAJgHQAJgHAAADQAAACgKANIAFgEIAJgGQAHgBgJAJIgGAEIgBACIACgBIADgCIAGgEIABABIAAABQgBAEgKAEIALgDIAAAAIgBADQgEADgHAEIgPAFIgBABQAAgGgEgDg");
	this.shape_255.setTransform(-447.6,8.5);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#E18F59").s().p("AgFAAQADAAACgCQADgCABgCQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABACIABABIgFAGIgGAKQgDgEACgGg");
	this.shape_256.setTransform(-447.7,-89.8);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#41210C").s().p("AAAAfQgKAAgIgJIgCgCQgEgFgBgFQgDgGAAgEQAAgGADgHIAFgGIADgEQAFgEAHgCQAGgCAHAAQAIABAFAEIADACIACABQAFAHgEAKQgBAEAAADIACAKQABAJgDAEQgCADgFADQgFACgKAAIgEgBg");
	this.shape_257.setTransform(-453.4,-88.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#E64A00").s().p("AgWBIQAFgDAEgHQAHgOADgbQADgCAAgEIAEgDIAHgEIAEgBQADAAACABQAGACAAAGQAAAFgGAIIgMARQgMASgLAGIgHACgAAEgQIgIgIIgEgRQgHgYgKgGIAIABQAOAGALARQAKAMAFAKIADAIQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBABQgBACgDABQgEADgCAAIgKgIg");
	this.shape_258.setTransform(-449.8,-88.9);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#372511").s().p("AAABCQgGgEgEgOQgIgWAAgbQABgdAHgTQAEgMAGgFQAEgDAFACQAEACADADIgFAIQgFALgCANIgDAKIgCAGQgDAHAAAHQAAADADAGQABAFABAFIADACIACAMQAEAPAJAMQgFAGgFACIgEABQgEAAgBgDg");
	this.shape_259.setTransform(-455.7,-88.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#EC672C").s().p("AAABEIgIgHQgJgLgEgPIgCgMQAIAJALAAQALABAHgCQAFgDACgDIAFgEQgDAbgHAOQgEAHgFADIgBAAIgBAAQgCAAgDgEgAAVgWIgCgCIgDgCQgFgDgIgBQgFAAgIACQgHACgFAEIgDAEIACgKQACgNAGgLIAEgIQAEgGAHgDIACgCIACAAQAKAGAHAYIAEARIABAGIgFgEg");
	this.shape_260.setTransform(-452.9,-88.9);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#EEC09E").s().p("AgdALIgBgKQgBgDACgEQADgKgFgHIAFAEQAEACACAEQADAGAAAFQAJACgDAAIgDABIgDAAQAAAIgDAFQgCAFgDABIgFAEQACgEgBgJgAAAAHQgCgBgDABIgFAAIAEgGIAGgJIAFgHQAEgFACABIABACIAAABQgJAKAEgBIAIgIQAKgHAAADQgBACgKAMQAAABAGgDIAJgHQAHgBgJAJIgGAEIgBACIACgCIADgCIAFgCIABAAIABABQgBAEgKAEIAKgDIABAAIgCACQgDAEgIAEIgPAFIgBABQABgHgEgCg");
	this.shape_261.setTransform(-447.5,-88.8);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFF6CD").s().p("AgFAeQgHgCgFgFIgDgDIgFgHQgDgGAAgHQAAgEADgFQABgGAEgEIACgDQAIgIAKAAQAMgBAHACQAFACACAEQADAEgBAJIgCAJQAAAEABAEQAEAJgFAIIgCABIgDACQgFAEgIAAIgDAAIgKgBg");
	this.shape_262.setTransform(-453.4,-169.8);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#E18F59").s().p("AAEAHIgEgEQgCgCgDAAQgCgFADgFIAGAJIAFAHIgBACIgBABQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_263.setTransform(-447.7,-168.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#393939").s().p("AgIAqIAEgQIAIgJIAKgIQACAAAEADIAEADQABABAAAAQABABAAAAQAAABAAAAQAAAAAAAAIgDAIQgFAKgKAMQgLASgOAEQgEACgEAAQAKgGAHgYgAALgHIgHgEIgEgDIgDgGQgDgagHgPQgEgHgFgDIAAgBQAEABADADQALAGAMARIAMAQQAGAKAAAEQAAAGgGACIgFACIgEgCg");
	this.shape_264.setTransform(-449.8,-169.8);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#424242").s().p("AACBJIgCgCQgHgEgEgFIgEgIQgGgLgCgNIgCgKIADADQAFAFAHACQAIACAFgBQAIAAAFgEIADgCIACgBIAFgEIgBAGIgEARQgHAXgKAHgAAVgXQgCgEgFgCQgHgCgLABQgLAAgIAIIACgLQAEgPAJgMIAIgHQAEgFACABIABAAQAFADAEAIQAHAOADAaIgFgDg");
	this.shape_265.setTransform(-452.9,-169.8);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#372511").s().p("AAABDQgGgEgEgOQgHgRgBgdQAAgcAIgWQAEgOAGgFQAEgEAFADQAFADAFAGQgJALgEAPIgCAMIgDACQgBAFgBAFQgDAGAAADQAAAHADAGIACAIIADAKQACAMAFALIAFAJQgDADgEABIgEABQgEAAgBgCg");
	this.shape_266.setTransform(-455.7,-170);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#EEC09E").s().p("AgdAIQgCgFABgDIABgKQABgJgCgEIAFADIAFAGQADAFAAAIIADABIADAAQADABgJACQAAAGgDAEQgCAEgEADIgFAEQAFgIgDgIgAAPAQIgIgHQgEgDAJALIAAACIgBABQgCABgEgFIgFgHIgGgJIgEgGIAFABIAFgBQAEgDgBgGIABABIAPAFQAIAEADADIACACIgBAAIgKgDQAKAGABACIgBADIgBAAIgFgEIgDgCIgCgBIABABIAGAGQAJAIgHgCQgCABgHgGIgGgEQAKANABACIgBABQgCAAgHgFg");
	this.shape_267.setTransform(-447.5,-169.8);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#E18F59").s().p("AgFAAQADAAACgDQADgBABgCQAAgBABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIABACIABABIgFAGIgGAKQgDgFACgFg");
	this.shape_268.setTransform(-447.7,-186.8);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#000000").s().p("AAAAgQgKAAgIgJIgCgCQgEgFgBgGQgDgFAAgFQAAgFADgHIAFgHIADgDQAFgFAHgCQAGgCAHABQAIABAFADIADACIACABQAFAIgEAJQgBAFAAADIACAKQABAIgDAFQgCADgFACQgGACgKAAIgDAAg");
	this.shape_269.setTransform(-453.4,-186);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#447BCD").s().p("AgWBIQAFgDAEgIQAHgOADgaIADgGIAEgDIAHgEIAEgCQADAAACACQAGACAAAGQAAAFgGAIQgEAHgIAKQgMASgLAGIgHACgAAEgQIgIgJIgEgRQgHgXgKgGIAIABQAOAGALARQAKAMAFAKIADAIQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgBACgDACQgEADgCAAIgKgIg");
	this.shape_270.setTransform(-449.8,-186);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#628DD1").s().p("AAABEQgGgEgCgDQgJgMgEgPIgCgLQAIAJALAAQALAAAHgCQAFgCACgDIAFgEQgDAagHAOQgEAIgFADIgBAAIAAAAQgCAAgEgEgAAVgXIgCgBIgDgCQgFgDgIgBQgFgBgIACQgHACgFAFIgDADIACgKQACgNAGgKIAEgJQAEgFAHgEIACgBIACAAQAKAGAHAXIAEARIABAGIgFgEg");
	this.shape_271.setTransform(-452.9,-186);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#372511").s().p("AAABDQgGgFgEgOQgIgVAAgdQABgcAHgSQAEgNAGgFQAEgDAFACQAEABADADIgFAJQgFALgCANIgDAJIgCAIQgDAGAAAHQAAAEADAFQABAGABAEIADADIACALQAEAPAJALQgFAHgFACIgFABQgDAAgBgCg");
	this.shape_272.setTransform(-455.7,-185.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#EEC09E").s().p("AgdAMIgBgLQgBgDACgEQADgKgFgHIAFADQAEAEACAEQADAEAAAGQAJACgDAAIgDABIgDABQAAAHgDAFIgFAHIgFADQACgEgBgIgAAAAHQgCgBgDAAIgFABIAEgGIAGgJIAFgHQAEgFACABIABACIAAABQgJALAEgDIAIgHQAKgIAAADQgBAEgKAMIAGgEIAJgFQAHgCgJAJIgGAFIgBAAIACAAIADgDIAFgCQAAAAAAgBQABAAAAAAQAAAAAAAAQAAABAAAAIABABQgBAEgKAFIAKgEIABAAIgCACQgDAEgIAEIgPAFIgBABQABgHgEgCg");
	this.shape_273.setTransform(-447.5,-185.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_274.setTransform(-452.1,-146.4);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#E18F59").s().p("AgFAAIAFgDIAEgDQAAAAABAAQAAgBAAAAQAAgBAAAAQAAAAAAAAIABABIABAAIgFAHIgGAJQgDgEACgFg");
	this.shape_275.setTransform(-447.7,-154.4);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#3A4D75").s().p("AgWBHQAFgCADgHQAIgOADgaQADgDAAgEIAEgDQADgDAEgBQAAAAABgBQAAAAABAAQAAAAABAAQABgBAAAAIAFABQAGADAAAGQAAAFgGAJIgMAPQgMATgLAGQgEACgDAAgAAEgQIgIgJIgEgQQgHgZgKgFIAIABQAOAGALARQAJAMAFAKQADAFABADQAAAAAAABQAAAAAAAAQAAABgBAAQAAABgBAAIgEADIgGADIgKgIg");
	this.shape_276.setTransform(-449.8,-153.6);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#48608E").s().p("AAABEQgGgEgBgDQgKgLgEgPIgCgLQAJAIAKAAQALABAHgCQAFgCACgEIAFgDQgDAagHAOQgEAIgEACIgBAAIAAAAIgBAAQgCAAgEgEgAAUgXIgBAAIgCgCQgGgEgIAAQgGgCgGADQgHABgGAFIgDADIACgJQACgNAGgLIAEgIQAEgGAHgDIACgCIACAAQAKAGAHAYIAEARIABAFIgGgEg");
	this.shape_277.setTransform(-452.9,-153.6);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#372511").s().p("AAABCQgGgEgFgOQgHgWAAgcQAAgcAHgTQAFgMAGgFQAEgEAFADQAEABADAEIgEAIQgGALgCANIgCAJIgDAIQgDAGAAAHQAAADACAGQACAFACAFIACADIACALQAEAPAJALQgEAHgGACIgEABQgDAAgCgDg");
	this.shape_278.setTransform(-455.8,-153.4);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#000000").s().p("AAAAfQgKAAgIgIIgCgDQgEgFgCgFQgCgGAAgEQAAgGADgGIAFgIIADgDQAFgFAHgBQAFgDAIACQAIAAAFAEIADACIABAAQAGAIgEAKQgBAEAAADIABAKQACAIgDAFQgDAEgEACQgFACgKAAIgEgBg");
	this.shape_279.setTransform(-453.4,-153.5);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#EEC09E").s().p("AgdALIgBgKQAAgDABgEQAEgKgGgIIAGAFQAEADACAEQACAEAAAHQAJABgDAAIgDABIgCABQgBAHgDAGQgCADgDADIgFAEQADgGgCgIgAAAAHIgFgBQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABIAEgIIAFgIIAFgIQAEgEADACIAAABIAAABQgIALADgDIAJgHQAJgHAAADQAAADgKAMIAFgEIAJgGQAHgBgJAJIgGAFIgBABIACgBIADgCIAGgEIABABIAAABQgBAEgKAEIALgDIAAAAIgBADQgEADgHADIgPAHIgBAAQAAgHgEgCg");
	this.shape_280.setTransform(-447.6,-153.5);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#E18F59").s().p("AgFAAQADAAACgCQADgCABgCQAAAAABgBQAAAAAAAAQAAgBAAAAQAAgBAAAAIABACIABABIgFAGIgGAKQgDgEACgGg");
	this.shape_281.setTransform(-447.7,-138.3);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#EEC09E").s().p("AgdALIgBgKQgBgDACgFQADgJgFgHIAFAEQAEADACAEQADAEAAAHQAJABgDAAIgDABIgDABQAAAHgDAFQgCAEgDADIgFADQACgFgBgIgAAAAHQgCgBgDAAIgFABIAEgGIAGgJIAFgHQAEgFACABIABABIAAACQgJAKAEgCIAIgHQAKgIAAAEQgBADgKAMIAGgEIAJgGQAHgBgJAIIgGAGIgBABIACgBIADgDIAFgDIABAAIABACQgBAEgKAEIAKgDIABAAIgCACQgDAEgIAEIgPAFIgBAAQABgGgEgCg");
	this.shape_282.setTransform(-447.5,-137.4);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#41210C").s().p("AAAAgQgKgBgIgJIgCgCQgEgFgBgFQgDgFAAgFQAAgGADgGIAFgHIADgEQAFgEAHgCQAGgCAHAAQAIABAFADIADADIACABQAFAHgEAJQgBAFAAADIACAKQABAIgDAFQgCADgFADQgGACgKAAIgDAAg");
	this.shape_283.setTransform(-453.4,-137.4);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#E64A00").s().p("AgWBIQAFgDAEgHQAHgOADgbQADgCAAgEIAEgEIAHgDIAEgBQADAAACABQAGACAAAGQAAAFgGAIIgMARQgMATgLAFIgHADgAAEgPQgEgHgEgCIgEgSQgHgXgKgGIAIACQAOAEALASQAKAMAFAKIADAIQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgBADgDABQgEADgCAAIgKgHg");
	this.shape_284.setTransform(-449.8,-137.4);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#372511").s().p("AAABDQgGgFgEgOQgIgWAAgbQABgdAHgSQAEgNAGgFQAEgEAFADQAEABADAEIgFAIQgFALgCANIgDAKIgCAHQgDAGAAAHQAAAEADAFQABAFABAFIADACIACAMQAEAPAJALQgFAHgFACIgFABQgDAAgBgCg");
	this.shape_285.setTransform(-455.7,-137.3);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#EC672C").s().p("AAABEQgGgEgCgDQgJgMgEgPIgCgLQAIAIALABQALABAHgDQAFgCACgDIAFgEQgDAagHAOQgEAIgFADIgBAAIAAABQgCAAgEgFgAAVgXIgCgBIgDgCQgFgDgIgBQgFgBgIACQgHACgFAFIgDADIACgKQACgMAGgMIAEgIQAEgFAHgDIACgCIACgBQAKAHAHAXIAEARIABAGIgFgEg");
	this.shape_286.setTransform(-452.9,-137.4);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#E18F59").s().p("AAEAHIgEgEIgFgCQgCgFADgFIAGAKIAFAGIgBACIgBABQAAgBAAAAQAAAAAAgBQAAAAAAAAQgBgBAAAAg");
	this.shape_287.setTransform(-447.7,-104.2);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#EEC09E").s().p("AgdAHQgBgEAAgEIABgJQACgJgDgFIAFAEQADADACADQADAGABAHIACAAIADABQADABgJACQAAAGgCAEQgCAEgEAEIgGADQAGgHgEgKgAAQAPIgJgGQgDgDAIALIAAABIAAABQgDACgEgFIgFgHIgFgJIgEgHIAEABIAFgBQAEgCAAgGIABAAIAPAGQAHADAEAEIABACIAAAAIgLgCQAKAEABAEIAAABIgBAAIgGgDIgDgCIgCgBIABACIAGAEQAJAIgHAAIgJgGIgFgEQAKAMAAAEIAAAAQgCAAgHgGg");
	this.shape_288.setTransform(-447.6,-105.1);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#000000").s().p("AgFAeQgHgBgFgFIgDgDIgFgIQgDgGAAgHQAAgDACgGQACgFAEgFIACgDQAIgIAKAAQAMgBAHACQAEACADAEQADAFgCAIIgBAKQAAADABAEQAEAKgGAIIgBAAIgDACQgFAEgIAAIgGABQgCAAgFgCg");
	this.shape_289.setTransform(-453.4,-105.1);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#372511").s().p("AAABDQgGgFgFgNQgHgSAAgcQAAgcAHgWQAFgOAGgEQAEgFAFADQAGACAEAGQgJAMgEAPIgCALIgCADQgCAFgCAFQgCAGAAACQAAAIADAGIADAIIACAJQACANAGALIAEAIQgDAEgEABIgFABQgDAAgBgCg");
	this.shape_290.setTransform(-455.8,-105.2);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#609634").s().p("AACBIIgCgCQgHgDgEgGIgEgIQgGgLgCgNIgCgJIADADQAGAFAHABQAGADAGgCQAIAAAGgEIACgCIABAAIAGgEIgBAFIgEARQgHAYgKAGIgBAAIgBAAgAAVgYQgCgEgFgCQgHgCgLABQgKAAgJAIIACgLQAEgPAKgMIAHgGQAEgFADABIAAAAIABAAQAEACAEAIQAHAOADAaIgFgDg");
	this.shape_291.setTransform(-452.9,-105);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_292.setTransform(-452.1,-112.3);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#4A7328").s().p("AgIAqIAEgQIAIgJIAKgIIAGACIAEAEQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQgBAEgDAEQgFAKgJAMQgLARgOAFQgFACgDAAQAKgGAHgYgAALgHQgEgBgDgDIgEgEQAAgDgDgDQgDgagIgOQgDgHgFgCIAAgBQADAAAEACQALAGAMASIAMAQQAGAJAAAFQAAAGgGACIgFABIgEgBg");
	this.shape_293.setTransform(-449.8,-105);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#E18F59").s().p("AAEAHQgBgCgDgBQgCgEgDAAQgCgEADgFIAGAJIAFAHIgBABIgBACQAAAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAg");
	this.shape_294.setTransform(-447.7,-120.4);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#EEC09E").s().p("AgdAIQgCgFABgDIABgLQABgIgCgEIAFADIAFAHQADAFAAAHIADABIADAAQADABgJACQAAAGgDAEQgCAEgEAEIgFADQAFgHgDgJgAAPAQIgIgHQgEgDAJALIAAABIgBACQgCABgEgFIgFgHIgGgJIgEgGIAFABIAFgBQAEgCgBgHIABABIAPAFQAIAEADAEIACABIgBAAIgKgDQAKAFABAEIgBACIgBAAIgFgDIgDgDIgCAAIABAAIAGAGQAJAIgHgCIgJgFIgGgEQAKAMABAEIgBABQgCAAgHgGg");
	this.shape_295.setTransform(-447.5,-121.3);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#000000").s().p("AgFAeQgHgCgFgFIgDgDIgFgHQgDgHAAgGQAAgEADgFQABgGAEgFIACgCQAIgJAKAAQAMAAAHACQAFACACADQADAFgBAIIgCAKQAAADABAFQAEAJgFAIIgCABIgDACQgFAEgIAAIgDABQgFAAgFgCg");
	this.shape_296.setTransform(-453.4,-121.3);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#447BCD").s().p("AgIArIAEgRIAIgJIAKgIQACAAAEADQADACABACQABAAAAABQABAAAAAAQAAABAAAAQAAAAAAABIgDAHQgFAKgKAMQgLASgOAFIgIABQAKgGAHgXgAALgGIgHgEIgEgEIgDgGQgDgagHgOQgEgIgFgDIAAAAIAHACQALAGAMASQAIAKAEAHQAGAIAAAFQAAAGgGADIgFABIgEgBg");
	this.shape_297.setTransform(-449.8,-121.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#628DD1").s().p("AACBIIgCgBQgHgEgEgFIgEgIQgGgLgCgNIgCgKIADADQAFAFAHACQAIACAFgBQAIAAAFgEIADgCIACgBIAFgEIgBAGIgEARQgHAXgKAGgAAVgYQgCgDgFgCQgHgCgLAAQgLAAgIAJIACgLQAEgPAJgMQACgDAGgEQAEgFACABIABAAQAFADAEAIQAHAOADAaIgFgEg");
	this.shape_298.setTransform(-452.9,-121.3);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#372511").s().p("AAABDQgGgFgEgNQgHgSgBgcQAAgdAIgVQAEgOAGgFQAEgEAFADQAFACAFAHQgJALgEAPIgCAMIgDACQgBAEgBAGQgDAFAAAEQAAAHADAGIACAIIADAJQACANAFALIAFAJQgDADgEABIgEABQgEAAgBgCg");
	this.shape_299.setTransform(-455.7,-121.4);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_300.setTransform(-452.1,-65.5);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#E18F59").s().p("AgFAAIAFgDIAEgDQAAAAABgBQAAAAAAAAQAAgBAAAAQAAAAAAAAIABABIABABIgFAGIgGAKQgDgEACgGg");
	this.shape_301.setTransform(-447.7,-73.5);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#000000").s().p("AAAAgQgKgBgIgIIgCgDQgEgEgCgGQgCgFAAgFQAAgFADgHIAFgHIADgEQAFgEAHgCQAFgCAIABQAIABAFADIADACIABABQAGAHgEAKQgBAEAAAEIABAKQACAIgDAFQgDADgEACQgGACgKAAIgDAAg");
	this.shape_302.setTransform(-453.4,-72.7);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#48608E").s().p("AAABEQgGgEgBgDQgKgLgEgQIgCgKQAJAIAKAAQALABAHgDQAFgBACgEIAFgDQgDAagHAOQgEAHgEADIgBAAIAAAAIgBAAQgCAAgEgEgAAUgXIgBAAIgCgDQgGgDgIgBQgGgBgGADQgHABgGAFIgDADIACgJQACgNAGgMIAEgIQAEgFAHgDIACgCIACAAQAKAGAHAYIAEARIABAFIgGgEg");
	this.shape_303.setTransform(-452.9,-72.7);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#3A4D75").s().p("AgWBHQAFgCADgIQAIgNADgaIADgHIAEgDQADgDAEgBQAAAAABgBQAAAAABAAQAAAAABAAQABgBAAAAIAFABQAGADAAAGQAAAFgGAJIgMAPQgMATgLAFQgEADgDAAgAAEgQIgIgJIgEgRQgHgXgKgGIAIABQAOAGALARQAJAMAFAKQADAEABAEQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAIgEAEIgGADIgKgIg");
	this.shape_304.setTransform(-449.8,-72.7);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#372511").s().p("AAABCQgGgEgFgOQgHgWAAgbQAAgdAHgTQAFgMAGgFQAEgEAFADIAHAFIgEAIQgGALgCANIgCAJIgDAIQgDAGAAAHQAAAEACAFQACAFACAFIACADIACALQAEAPAJAMQgEAGgGACIgEABQgEAAgBgDg");
	this.shape_305.setTransform(-455.8,-72.5);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#EEC09E").s().p("AgdALIgBgKQAAgDABgEQAEgKgGgIIAGAEQAEAEACAEQACAEAAAGQAJACgDAAIgDABIgCABQgBAHgDAFIgFAHIgFAEQADgGgCgIgAAAAHIgFgBQAAAAgBAAQgBAAAAAAQgBABAAAAQgBAAAAABIAEgHIAFgJIAFgHQAEgFADABIAAACIAAABQgIALADgDIAJgHQAJgHAAACQAAAEgKAMIAFgEIAJgGQAHgBgJAJIgGAEIgBACIACgBIADgDIAGgDIABABIAAABQgBAEgKAEIALgDIAAAAIgBACQgEAEgHAEIgPAGIgBAAQAAgGgEgDg");
	this.shape_306.setTransform(-447.6,-72.6);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#EEC09E").s().p("AgdAMIgBgLQgBgDACgEQADgKgFgHIAFAEQAEADACAEQADAEAAAHQAJABgDAAIgDABIgDABQAAAHgDAFQgCAFgDACIgFADQACgEgBgIgAAAAHQgCgBgDAAIgFABIAEgGIAGgJIAFgHQAEgFACABIABACIAAABQgJALAEgDIAIgHQAKgIAAAEQgBADgKAMIAGgEIAJgFQAHgBgJAIIgGAFIgBABIACgBIADgDIAFgCQAAAAAAgBQABAAAAAAQAAAAAAAAQAAABAAAAIABABQgBAEgKAFQAKgEAAAAIABAAIgCACQgDAEgIAEIgPAFIgBABQABgHgEgCg");
	this.shape_307.setTransform(-447.5,-8);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#E18F59").s().p("AgFAAQADAAACgDQADgBABgCQAAgBABAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIABACIABABIgFAGIgGAKQgDgEACgGg");
	this.shape_308.setTransform(-447.7,-8.9);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#41210C").s().p("AAAAgQgKgBgIgIIgCgDQgEgEgBgGQgDgFAAgFQAAgFADgHIAFgHIADgEQAFgEAHgCQAGgCAHAAQAIACAFACIADADIACABQAFAHgEAKQgBAEAAADIACALQABAIgDAEQgCAEgFACQgGACgKAAIgDAAg");
	this.shape_309.setTransform(-453.4,-8);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#E64A00").s().p("AgWBIQAFgDAEgIQAHgNADgbQADgCAAgEIAEgDIAHgEIAEgBQADgBACACQAGACAAAGQAAAFgGAIQgEAHgIAKQgMASgLAGIgHACgAAEgQQgEgGgEgCIgEgSQgHgXgKgGIAIABQAOAGALARQAKAMAFAKIADAIQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgBADgDABQgEADgCAAIgKgIg");
	this.shape_310.setTransform(-449.8,-8);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#EC672C").s().p("AAABEQgGgEgCgDQgJgMgEgPIgCgLQAIAJALAAQALABAHgDQAFgCACgDIAFgEQgDAbgHANQgEAIgFADIgBAAIAAAAQgCAAgEgEgAAVgXIgCgBIgDgCQgFgDgIgBQgFgBgIADQgHABgFAFIgDADIACgJQACgNAGgLIAEgIQAEgGAHgDIACgCIACAAQAKAGAHAXIAEASIABAFIgFgEg");
	this.shape_311.setTransform(-452.9,-8);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#372511").s().p("AAABDQgGgFgEgOQgIgVAAgcQABgdAHgSQAEgNAGgEQAEgEAFACIAHAFIgFAIQgFAMgCAMIgDAKIgCAHQgDAHAAAGQAAAEADAFQABAGABAEIADADIACALQAEAPAJALQgFAHgFACIgFABQgDAAgBgCg");
	this.shape_312.setTransform(-455.7,-7.9);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#E18F59").s().p("AgFAAQADAAACgCIAEgEQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIABABIABACIgFAGIgGAKQgDgFACgFg");
	this.shape_313.setTransform(-447.7,-25.1);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#EEC09E").s().p("AgdALIgBgJQgBgEACgEQADgKgFgHIAFADQAEAEACAEQADAEAAAGQAJACgDAAIgDACIgDAAQAAAIgDAEIgFAHIgFADQACgEgBgJgAAAAHIgFgBIgFABIAEgGIAGgJIAFgHQAEgFACABIABACIAAABQgJALAEgCIAIgIQAKgHAAACQgBADgKANIAGgEQAHgFACgBQAHgBgJAJIgGAEIgBABIACgBIADgCIAFgCIABAAIABABQgBAEgKAEIAKgDIABAAIgCACQgDAEgIAEIgPAFIgBAAQABgGgEgCg");
	this.shape_314.setTransform(-447.5,-24.1);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#FFF6CD").s().p("AAAAfQgKAAgIgIIgCgDQgEgEgBgGQgDgFAAgFQAAgGADgGIAFgHIADgDQAFgFAHgCQAGgCAHABQAIAAAFAEIADACIACABQAFAIgEAJQgBAEAAAEIACAJQABAJgDAEQgCAEgFACQgFABgKAAIgEAAg");
	this.shape_315.setTransform(-453.4,-24.2);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#393939").s().p("AgWBIQAFgDAEgIQAHgOADgZIADgHIAEgEIAHgEIAEAAIAFAAQAGADAAAGQAAAFgGAIIgMAQQgMATgLAGQgDACgEAAgAAEgRIgIgIIgEgRQgHgXgKgHQAEAAAEACQAOAFALATQAKALAFAKIADAHQAAABAAAAQAAAAAAABQAAAAgBABQAAAAgBAAIgEAEQgEACgCAAIgKgIg");
	this.shape_316.setTransform(-449.8,-24.2);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#424242").s().p("AAABEIgIgHQgJgMgEgPIgCgLQAIAIALAAQALABAHgCQAFgCACgEIAFgDQgDAagHAOQgEAIgFADIgBAAIAAABQgCAAgEgFgAAVgXIgCgBIgDgCQgFgEgIAAQgFgBgIACQgHACgFAFIgDADIACgKQACgNAGgLIAEgIQAEgFAHgEIACgCIACAAQAKAHAHAXIAEARIABAGIgFgEg");
	this.shape_317.setTransform(-452.9,-24.2);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#372511").s().p("AAABDQgGgFgEgOQgIgWAAgcQABgdAHgRQAEgOAGgEQAEgEAFADQAEABADADIgFAJQgFALgCAMIgDAKIgCAIQgDAGAAAHQAAADADAGQABAFABAFIADACIACAMQAEAPAJALQgFAGgFADIgFABQgDAAgBgCg");
	this.shape_318.setTransform(-455.7,-24);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#E18F59").s().p("AgFAAQADAAACgDQADgBABgCQAAgBABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIABACIABABIgFAGIgGAKQgDgFACgFg");
	this.shape_319.setTransform(-447.7,-41.2);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#EEC09E").s().p("AgdAMIgBgLQgBgDACgFQADgJgFgHIAFADQAEAEACAEQADAEAAAGQAJACgDAAIgDABIgDABQAAAHgDAFIgFAHIgFADQACgEgBgIgAAAAHIgFgBIgFABIAEgGIAGgJIAFgHQAEgFACABIABACIAAABQgJALAEgDIAIgHQAKgIAAADQgBAEgKAMIAGgEIAJgFQAHgCgJAIIgGAGIgBAAIACAAIADgDIAFgDIABAAIABACQgBAEgKAFIAKgEIABAAIgCACQgDAEgIAEIgPAFIgBABQABgHgEgCg");
	this.shape_320.setTransform(-447.5,-40.3);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#000000").s().p("AAAAgQgKAAgIgJIgCgCQgEgFgBgGQgDgFAAgFQAAgFADgHIAFgHIADgDQAFgFAHgCQAGgCAHABQAIAAAFAEIADACIACABQAFAIgEAJQgBAFAAADIACAKQABAIgDAFQgCADgFACQgGACgKAAIgDAAg");
	this.shape_321.setTransform(-453.4,-40.4);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#372511").s().p("AAABDQgGgFgEgOQgIgVAAgdQABgcAHgSQAEgNAGgFQAEgDAFACQAEABADADIgFAJQgFALgCANIgDAJIgCAIQgDAGAAAHQAAAEADAFQABAGABAEIADACIACAMQAEAPAJALQgFAHgFACIgFABQgDAAgBgCg");
	this.shape_322.setTransform(-455.7,-40.2);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#628DD1").s().p("AAABEQgGgEgCgDQgJgMgEgPIgCgLQAIAJALAAQALAAAHgCQAFgCACgDIAFgEQgDAagHAOQgEAIgFADIgBAAIAAAAQgCAAgEgEgAAVgXIgCgBIgDgCQgFgEgIAAQgFgBgIACQgHACgFAFIgDADIACgKQACgNAGgKIAEgJQAEgFAHgEIACgBIACAAQAKAGAHAXIAEARIABAGIgFgEg");
	this.shape_323.setTransform(-452.9,-40.4);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f("#447BCD").s().p("AgWBIQAFgDAEgIQAHgOADgaIADgGIAEgDIAHgFIAEgBIAFABQAGADAAAGQAAAFgGAIQgEAHgIAKQgMASgLAGIgHACgAAEgQIgIgJIgEgRQgHgXgKgGIAIABQAOAFALASQAKAMAFAKIADAIQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgBACgDACQgEADgCAAIgKgIg");
	this.shape_324.setTransform(-449.8,-40.4);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f("#372511").s().p("AAABDQgGgEgFgOQgGgRgBgdQAAgcAHgWQAFgOAGgFQAEgEAGADQAFADAEAGQgJALgEAPIgCAMIgCACQgCAFgCAFQgCAFAAAEQAAAHADAGQABAEACAEIABAKQADAMAFALIAFAJQgCADgEABIgFABQgEAAgBgCg");
	this.shape_325.setTransform(-469.2,11.4);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f("#E18F59").s().p("AAEAHIgEgDQgCgDgDgBQgCgEADgFIAFAJIAGAHIgBABIgBACQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_326.setTransform(-461.1,12.5);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f("#EEC09E").s().p("AgdAIQgCgFABgDIABgKQABgIgCgFIAFADIAFAHQADAFAAAHIADABIADAAQADABgJACQAAAGgDAEIgGAIIgFADQAFgHgDgJgAAPAQIgJgHQgDgCAJAKIABACIgCABQgBABgFgFIgFgHIgFgJIgFgGIAFABIAFgBQADgCAAgGIACAAIAOAFQAIAEADAEIACABIAAAAQgBABgKgDQAJAEACAEIAAACIgCAAIgFgDIgDgDIgCAAIABAAIAFAGQAKAIgHgBQgCAAgHgGIgGgEQALAMAAAEIgBABQgCAAgHgGg");
	this.shape_327.setTransform(-460.9,11.5);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f("#000000").s().p("AgEAeQgHgCgFgFIgEgDQgDgDgBgEQgDgGAAgHQAAgEACgFQACgGADgFIACgCQAIgIAKAAQANgBAGACQAFACACADQADAFgBAIIgCAKQAAAEABAEQAEAJgFAIIgBABIgDACQgFAEgIAAIgEAAIgJgBg");
	this.shape_328.setTransform(-466.8,11.6);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f("#628DD1").s().p("AABBJIgCgCQgGgEgEgFIgFgIQgFgLgDgNIgBgKIADADQAFAFAHACQAIACAFgBQAIAAAFgEIADgCIABgBIAFgEIAAAGIgEARQgHAXgKAHgAAVgYQgCgDgGgCQgGgCgLABQgLAAgIAIIACgLQAEgPAJgMIAIgHQAEgFACABIABAAQAFADAEAIQAHAOADAaIgFgEg");
	this.shape_329.setTransform(-466.3,11.6);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f("#447BCD").s().p("AgIArIAEgRIAJgJIAJgIQADAAAEADIAEAEQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIgDAHQgFAKgJALQgMATgOAFIgIABQAKgGAHgXgAALgGIgGgEIgEgEIgDgHQgDgZgIgOQgEgIgEgDIAAAAQADAAADACQALAGANASIALARQAGAIAAAFQAAAGgFADIgFAAIgFAAg");
	this.shape_330.setTransform(-463.2,11.6);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f("#E18F59").s().p("AAEAHIgEgEIgFgCQgCgGADgDIAFAJIAGAGIgCACIAAABQAAgBAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAg");
	this.shape_331.setTransform(-461.1,-20.9);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f("#EEC09E").s().p("AgdAHQgCgEAAgDIACgKQACgIgEgFIAFADIAGAGQADAGABAHIACABIADAAQADACgJABIgCAKQgDAEgEADQgCADgDABQAFgHgDgKgAAPAQIgIgHQgEgDAJALIAAACIgBABQgCABgEgFIgFgGIgFgKIgFgGIAFABIAFgBQAEgDgBgGIACABQAFADAJACQAIAEADADIACACIAAAAIgLgCQAKAEABAEIAAABIgCABIgFgEIgDgCIgCAAIABABIAGAEQAJAJgHgBIgJgGIgGgEQALANAAACIgBABQgCAAgHgFg");
	this.shape_332.setTransform(-461,-21.8);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f("#000000").s().p("AgEAeQgHgBgFgFIgEgEQgDgDgBgEQgEgGABgHIABgJIAGgKIACgDQAIgIAKAAQANgBAGACQAEACADAEQADAFgCAIIgBAKQAAADABAEQAEAKgGAHIAAABIgDACQgGAEgIAAIgGABQgCAAgEgCg");
	this.shape_333.setTransform(-466.8,-21.8);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f("#372511").s().p("AAABDQgGgFgFgMQgHgTAAgcQAAgcAHgWQAFgOAGgEQAEgFAGADQAFACAEAGQgJAMgDAPIgDALIgCADIgEAKIgBAIQgBAIAEAGQAAAEACADIACAKQACANAGALIAEAIQgDAEgDABIgFABQgEAAgBgCg");
	this.shape_334.setTransform(-469.2,-21.9);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_335.setTransform(-465.5,-29);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f("#48608E").s().p("AACBIIgCgCQgHgDgEgGIgEgIQgGgLgCgNIgCgKIAEAEQAFAFAHABQAHADAFgCQAIAAAGgEIADgCIAAgBQAEgBACgDIgBAGQgBAJgDAIQgHAYgKAGIgBAAIgBAAgAAVgYQgDgEgEgCQgGgCgMABQgLAAgIAIIADgLQADgPAJgMIAIgGQAFgFABABIABAAIABAAQAEACAEAIQAIAOACAaIgFgDg");
	this.shape_336.setTransform(-466.3,-21.7);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f("#3A4D75").s().p("AgIAqQADgIABgJIAJgIIAJgIIAHADIAEADQAAAAAAABQABAAAAABQAAAAAAAAQAAABAAAAQgBADgDAFQgFAKgIAMQgMARgOAFQgEACgEAAQAKgGAHgYgAALgHIgHgEIgDgDIgEgGQgCgbgIgOQgEgIgEgCIAAAAIAGACQALAGANASIALAQQAGAJAAAEQAAAHgFACIgFABIgFgBg");
	this.shape_337.setTransform(-463.2,-21.7);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f("#372511").s().p("AAABDQgGgFgFgNQgGgSgBgdQAAgcAHgVQAFgOAGgFQAEgEAGADQAFACAEAHQgJALgEAPIgCAMIgCACQgCAEgCAGQgCAFAAAEQAAAGADAHQABAEACADIABAKQADANAFALIAFAIQgCAEgEABIgFABQgDAAgCgCg");
	this.shape_338.setTransform(-469.2,-38.5);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f("#E18F59").s().p("AAEAHQgBgDgDgBQgCgDgDAAQgCgFADgEIAFAJIAGAHIgBABIgBACQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_339.setTransform(-461.1,-37.4);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f("#EEC09E").s().p("AgdAIQgCgFABgDIABgLQABgIgCgEIAFADIAFAHQADAFAAAHIADABIADAAQADABgJABQAAAHgDAEQgCAEgEADIgFAEQAFgHgDgJgAAPAQIgJgHQgDgDAJALIABABIgCACQgBABgFgFIgFgHIgFgJIgFgGIAFABIAFgBQADgCAAgHIACABIAOAFQAIAEADAEIACABIAAAAQgBABgKgDQAJAEACAEIAAACIgCAAIgFgDIgDgDIgCgBIABABIAFAGQAKAIgHgCIgJgFIgGgEQALAMAAADIgBABQgCAAgHgFg");
	this.shape_340.setTransform(-460.9,-38.4);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f("#41210C").s().p("AgEAeQgHgCgFgEIgEgEQgDgDgBgEQgDgHAAgGQAAgEACgFQACgGADgEIACgCQAIgJAKgBQANAAAGACQAFACACAEQADAEgBAIIgCALQAAADABAFQAEAJgFAHIgBABIgDADQgFADgIABIgDAAQgGAAgEgCg");
	this.shape_341.setTransform(-466.8,-38.4);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f("#E64A00").s().p("AgIArIAEgSQAEgCAFgGIAJgIQADAAAEADQADABABADQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIgDAHQgFAKgJAMQgMASgOAFIgIABQAKgGAHgXgAAQgGIgFAAIgGgEIgEgEIgDgGQgDgbgIgNQgEgIgEgDIAAAAQADAAADACQALAGANASQAIAKADAHQAGAIAAAFQAAAGgFADIgEAAIgBAAg");
	this.shape_342.setTransform(-463.2,-38.3);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f("#EC672C").s().p("AABBIIgCgCQgGgDgEgFIgFgIQgFgMgDgNIgBgJIADADQAFAFAHABQAIADAFgBQAIgBAFgDIADgCIABgBIAFgEIAAAFIgEASQgHAXgKAGgAAVgYQgCgDgGgCQgGgDgLABQgLAAgIAJIACgLQAEgPAJgMIAIgHQAEgFACABIABAAQAFADAEAIQAHANADAbIgFgEg");
	this.shape_343.setTransform(-466.3,-38.3);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_344.setTransform(-465.5,-64.1);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#E18F59").s().p("AgFAAIAFgCIAEgEQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBIAAABIACACIgGAGIgFAKQgDgFACgFg");
	this.shape_345.setTransform(-461.1,-72.2);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#EEC09E").s().p("AgdALIgCgJQAAgEACgEQADgKgFgHQADABACADIAHAHIACAKQAJACgDAAIgDACIgCAAQgBAHgDAGIgGAGIgFADQAEgFgCgIgAAAAHIgFgBIgFABIAFgGIAFgKIAFgGQAEgFACABIABABIAAACQgJALAEgDIAIgHQAKgHAAADQAAACgLANIAGgEIAJgGQAHgBgJAJIgGAEIgBACIACgBIADgCIAFgEIACABIAAACQgBADgKAEIALgDIAAAAIgCADQgDADgIAEIgOAFIgCABQABgGgEgDg");
	this.shape_346.setTransform(-461,-71.3);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#000000").s().p("AAAAfQgKAAgIgIIgCgDIgGgKIgBgKQgBgGAEgGQABgEADgDIAEgEQAFgEAHgCQAFgCAHABQAIAAAGAEIADACIAAABQAGAHgEAKQgBAEAAAEIABAJQACAIgDAFQgDAEgEACQgFABgKAAIgEAAg");
	this.shape_347.setTransform(-466.8,-71.3);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#609634").s().p("AAABEIgIgHQgJgLgDgQIgDgLQAIAIALABQAMAAAGgCQAEgCADgDIAFgDQgCAZgIAPQgEAHgEACIgBAAIgBABIAAAAQgCAAgEgEgAAUgXIAAAAIgDgDQgGgDgIgBQgFgBgHACQgHACgFAFIgEADIACgKQACgMAGgMIAEgIQAEgFAHgDIACgCIACAAQAKAGAHAYQADAIABAIIABAGQgCgCgEgCg");
	this.shape_348.setTransform(-466.3,-71.3);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#372511").s().p("AAABDQgGgFgFgOQgHgWAAgbQAAgdAHgSQAFgNAGgFQAEgEAGADQADABADAEIgEAIQgGALgCANIgCAKQgCADAAAEQgEAGABAHIABAJIAEAKIACADIADALQADAPAJAMQgEAGgFACIgFABQgDAAgCgCg");
	this.shape_349.setTransform(-469.2,-71.2);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#4A7328").s().p("AgVBHQAEgCAEgHQAIgPACgZIAEgHIADgDIAHgEIAFgBIAFABQAFACAAAGQAAAFgGAJIgLAQQgNASgLAGQgEACgCAAgAAFgQIgJgJQgBgIgDgIQgHgYgKgGQAEAAAEACQAOAFAMARIANAWQADAEABAEQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAABIgEADIgHADIgJgIg");
	this.shape_350.setTransform(-463.2,-71.3);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_351.setTransform(-465.5,2);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#5BB1B0").s().p("AgVBIQAEgCAEgIQAIgPACgaIAEgGIADgDIAHgEQACgCADAAIAFACQAFACAAAHQAAAEgGAIIgLARQgNASgLAGIgGACgAAFgQIgJgIQgBgJgDgIQgHgYgKgGIAIACQAOAFAMARQAIAMAFAKQADAFABADQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAIgEADIgHADIgJgIg");
	this.shape_352.setTransform(-463.2,-5.2);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#EEC09E").s().p("AgdAMIgCgLQAAgDACgEQADgKgFgIIAFAFIAHAHIACALQAJABgDAAIgDABIgCABQgBAHgDAGIgGAGIgFADQAEgEgCgIgAAAAHIgFgBQgDAAgCABIAFgGIAFgKIAFgHQAEgEACABIABABIAAACQgJALAEgDIAIgHQAKgHAAADQAAACgLANIAGgEIAJgFQAHgCgJAJIgGAFIgBAAIACAAIADgCIAFgEIACABIAAACQgBADgKAFIALgEIAAAAIgCADQgDADgIADIgOAGIgCABQABgHgEgCg");
	this.shape_353.setTransform(-461,-5.2);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#E18F59").s().p("AgFAAIAFgDIAEgDQAAAAAAgBQABAAAAAAQAAgBAAAAQAAAAAAgBIAAABIACABIgGAHIgFAKQgDgFACgFg");
	this.shape_354.setTransform(-461.1,-6.1);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#000000").s().p("AAAAfQgKAAgIgIIgCgDIgGgKIgBgKQgBgGAEgGQABgEADgEIAEgDQAFgFAHgBQAFgDAHACQAIAAAGAEIADACIAAAAQAGAIgEAKQgBAEAAADIABAKQACAIgDAFQgDAEgEACQgFACgKAAIgEgBg");
	this.shape_355.setTransform(-466.8,-5.2);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#372511").s().p("AAABCQgGgEgFgOQgHgWAAgcQAAgcAHgSQAFgNAGgFQAEgEAGADQADABADAEIgEAIQgGALgCANIgCAJQgCAEAAAEQgEAGABAHIABAJIAEAKIACADIADALQADAPAJALQgEAHgFACIgFABQgDAAgCgDg");
	this.shape_356.setTransform(-469.2,-5.1);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#6BD3D2").s().p("AAABEIgIgHQgJgLgDgPIgDgLQAIAIALAAQAMABAGgCQAEgCADgEIAFgDQgCAagIAOQgEAIgEACIgBAAIgBAAIAAAAQgCAAgEgEgAAUgXIAAAAIgDgCQgGgEgIAAQgFgCgHADQgHABgFAFIgEADIACgJQACgNAGgLIAEgIQAEgGAHgDIACgCIACAAQAKAGAHAYQADAIABAJIABAFIgGgEg");
	this.shape_357.setTransform(-466.3,-5.3);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#372511").s().p("AAABDQgGgFgFgOQgHgVAAgdQABgcAGgSQAFgNAGgFQAEgDAGACQAEABACADIgFAJQgFALgDANIgBAJQgCAEgBAEQgDAGAAAHQAAAEACAFQACAGACAEIACACIACAMQAEAPAJALQgEAHgFACIgFABQgEAAgBgCg");
	this.shape_358.setTransform(-469.2,-87.7);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#E18F59").s().p("AgFAAQADAAACgDQADgBABgCQAAgBAAAAQABAAAAgBQAAAAAAAAQAAAAAAgBIABABIABACIgGAGIgFAKQgDgFACgFg");
	this.shape_359.setTransform(-461.1,-88.7);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#EEC09E").s().p("AgdALIgBgKQgBgDACgFQADgJgFgHIAFADIAGAIQADAEAAAGQAJACgDAAIgDABIgDABQAAAHgDAFIgFAHIgFADQACgEgBgJgAAAAHIgFgBIgFABIAFgGIAFgJIAFgHQAFgFABABIACACIgBABQgJALADgDIAJgHQAKgIAAADQAAADgLANIAGgEQAHgFACAAQAHgCgKAIIgFAGIgBAAIACAAIADgDIAFgDIACAAIAAACQgCAEgJAFQAKgEABAAIAAAAIgCACQgDAEgIAEIgOAFIgCABQAAgHgDgCg");
	this.shape_360.setTransform(-460.9,-87.8);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#FFF6CD").s().p("AAAAgQgKAAgIgJIgCgCQgDgFgCgGQgCgFAAgFQAAgFADgHQABgEADgDIAEgDQAFgFAHgCQAFgCAIABQAIAAAFAEIADACIABABQAFAIgEAJQgBAFAAADIACAKQABAIgDAFQgCADgFACQgFACgLAAIgDAAg");
	this.shape_361.setTransform(-466.8,-87.9);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f("#424242").s().p("AAABEIgIgHQgJgMgEgPIgCgLQAIAJALAAQALAAAGgCQAGgCACgDIAFgEQgDAagHAOQgEAIgFADIgBAAIgBAAQgBAAgEgEgAAUgXIgBgBIgDgCQgFgEgIAAQgFgBgIACQgHACgFAFIgDADIABgKQADgNAFgKIAFgJQAEgFAGgEIACgBIADAAQAKAGAHAXIAEARIAAAGIgFgEg");
	this.shape_362.setTransform(-466.3,-87.9);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f("#393939").s().p("AgVBIQAEgDAEgIQAIgOADgaIADgGIAEgDIAGgFIAFgBIAFABQAFADAAAGQAAAFgGAIQgDAHgIAJQgNATgLAFQgDADgDAAgAAFgQIgJgJIgEgRQgHgXgKgGIAIABQAOAFAMASQAJAMAFAKIADAIQAAAAAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBACgDACQgEADgDAAIgJgIg");
	this.shape_363.setTransform(-463.2,-87.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f("#447BCD").s().p("AgVBIQAEgDAEgIQAIgOADgaIADgGIAEgEIAGgEIAFgBIAFABQAFADAAAGQAAAFgGAIQgDAHgIAKQgNASgLAGQgDACgDAAgAAFgQIgJgJIgEgRQgHgXgKgGIAIABQAOAFAMASQAJAMAFAKIADAHQAAABAAAAQAAAAAAABQAAAAgBABQAAAAAAAAQgBACgDACQgEADgDAAIgJgIg");
	this.shape_364.setTransform(-463.2,-54.8);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f("#EEC09E").s().p("AgdAMIgBgLQgBgDACgFQADgJgFgHIAFADIAGAIQADAEAAAGQAJACgDAAIgDABIgDABQAAAHgDAFIgFAHIgFADQACgEgBgIgAAAAHIgFgBIgFABIAFgGIAFgJIAFgHQAFgFABABIACACIgBABQgJALADgDIAJgHQAKgIAAADQAAAEgLAMIAGgEQAHgFACAAQAHgCgKAIIgFAGIgBAAIACAAIADgDIAFgDIACAAIAAACQgCAEgJAEQAKgDABAAIAAAAIgCACQgDAEgIAEIgOAFIgCABQAAgHgDgCg");
	this.shape_365.setTransform(-460.9,-54.8);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f("#E18F59").s().p("AgFAAQADAAACgCQADgCABgCQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAIABACIABABIgGAGIgFAKQgDgFACgFg");
	this.shape_366.setTransform(-461.1,-55.7);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f("#000000").s().p("AAAAgQgKAAgIgJIgCgCQgDgFgCgGQgCgFAAgFQAAgFADgHQABgEADgDIAEgDQAFgFAHgCQAFgCAIABQAIAAAFAEIADACIABABQAFAIgEAJQgBAFAAADIACAKQABAIgDAFQgCADgFACQgFACgLAAIgDAAg");
	this.shape_367.setTransform(-466.8,-54.8);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f("#372511").s().p("AAABDQgGgFgFgOQgHgVAAgdQABgdAGgRQAFgNAGgFQAEgEAGADQAEABACADIgFAJQgFALgDAMIgBAKQgCAEgBAEQgDAGAAAHQAAAEACAFQACAGACAEIACACIACAMQAEAPAJALQgEAHgFACIgFABQgEAAgBgCg");
	this.shape_368.setTransform(-469.2,-54.7);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f("#628DD1").s().p("AAABEIgIgHQgJgMgEgPIgCgLQAIAJALAAQALAAAGgCQAGgCACgDIAFgEQgDAagHAOQgEAIgFADIgBAAIgBAAQgBAAgEgEgAAUgXIgBgBIgDgCQgFgEgIAAQgFgBgIACQgHACgFAFIgDADIABgKQADgNAFgLIAFgIQAEgFAGgEIACgBIADAAQAKAGAHAXIAEARIAAAGIgFgEg");
	this.shape_369.setTransform(-466.3,-54.8);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f("#E18F59").s().p("AAEAHIgEgDIgFgDQgCgFADgFIAFAKIAGAHIgCABIAAABQAAgBAAAAQAAAAAAAAQAAgBgBAAQAAAAAAgBg");
	this.shape_370.setTransform(-461.1,-120.1);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f("#EEC09E").s().p("AgdAHQgCgEAAgDIACgKQACgIgEgGIAFAEIAGAGQADAGABAHIACABIADAAQADABgJABIgCALIgHAHIgFAFQAFgIgDgKgAAPAQIgIgHQgEgDAJALIAAABQAAABAAAAQAAAAAAABQAAAAAAAAQgBAAAAAAQgCABgEgFIgFgHIgFgJIgFgHQACACADAAIAFgCQAEgCgBgGIACAAIAOAGQAIAEADAEIACABIAAAAIgLgCQAKAEABAEIAAABIgCABIgFgDIgDgDIgCgBIABABIAGAFQAJAJgHgBIgJgGIgGgEQALAMAAADIgBABQgCAAgHgFg");
	this.shape_371.setTransform(-461,-120.9);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f("#000000").s().p("AgEAeQgHgCgFgEIgEgEQgDgDgBgEQgEgHABgGIABgJIAGgKIACgDQAIgIAKgBQANAAAGACQAEACADADQADAFgCAIIgBAKQAAAEABAEQAEAKgGAHIAAABIgDACQgGAEgIAAIgEABQgEAAgEgCg");
	this.shape_372.setTransform(-466.8,-120.9);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f("#372511").s().p("AAABCQgGgEgFgNQgHgSAAgdQAAgbAHgWQAFgOAGgEQAEgFAGADQAFACAEAGQgJAMgDAPIgDAMIgCACIgEAKIgBAIQgBAIAEAGQAAAEACADIACAKQACANAGALIAEAIQgDADgDACIgFABQgDAAgCgDg");
	this.shape_373.setTransform(-469.2,-121);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_374.setTransform(-465.5,-128.1);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#609634").s().p("AACBIIgCgCQgHgDgEgFIgEgIQgGgMgCgNIgCgJIAEADQAFAFAHABQAHADAFgBQAIgBAGgDIADgDIAAAAIAGgEIgBAFQgBAJgDAIQgHAYgKAGIgBAAIgBAAgAAVgYQgDgEgEgBQgGgDgMABQgLAAgIAJIADgLQADgQAJgLIAIgHQAFgFABABIABAAIABAAQAEADAEAHQAIAOACAaIgFgDg");
	this.shape_375.setTransform(-466.3,-120.9);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#4A7328").s().p("AgIAqQADgIABgIIAJgJIAJgIIAHADIAEADQAAABAAAAQABABAAAAQAAAAAAAAQAAABAAAAQgBADgDAFQgFAKgIAMQgMARgOAGIgIABQAKgFAHgZgAALgHIgHgEIgDgDIgEgHQgCgagIgNQgEgIgEgCIAAgBQACAAAEADQALAFANATIALAPQAGAJAAAFQAAAGgFACIgFACQgDgBgCgBg");
	this.shape_376.setTransform(-463.2,-120.9);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#372511").s().p("AAABDQgGgFgFgNQgHgSAAgdQAAgbAHgWQAFgOAGgFQAEgEAGADQAFACAEAGQgJAMgDAPIgDALIgCADIgEAKIgBAIQgBAIAEAGQAAAEACADIACAKQACANAGALIAEAIQgDAEgDABIgFABQgEAAgBgCg");
	this.shape_377.setTransform(-469.2,-187.1);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#E18F59").s().p("AAEAHIgEgEIgFgCQgCgFADgFIAFAKIAGAHIgCABIAAABQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_378.setTransform(-461.1,-186.1);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#000000").s().p("AgEAeQgHgCgFgEIgEgEQgDgDgBgEQgEgGABgHIABgJIAGgKIACgDQAIgIAKAAQANgBAGACQAEACADADQADAGgCAIIgBAJQAAAEABAEQAEAKgGAHIAAABIgDACQgGAEgIAAIgFABIgHgCg");
	this.shape_379.setTransform(-466.8,-187);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#EEC09E").s().p("AgdAIQgCgFAAgEIACgJQACgIgEgFIAFADIAGAGQADAGABAHIACAAQAAABABAAQAAAAABAAQAAAAAAAAQABAAAAAAQADABgJACIgCAKIgHAHQgCADgDABQAFgHgDgJgAAPAQIgIgHQgEgDAJALIAAACIgBABQgCABgEgEIgFgHIgFgKIgFgGIAFABIAFgBQAEgDgBgFIACAAIAOAGQAIADADADIACACIAAABIgLgDQAKAEABADIAAADIgCAAIgFgEQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAgBAAAAIgCAAIABABIAGAFQAJAIgHgBIgJgGIgGgEQALANAAACIgBABQgCAAgHgFg");
	this.shape_380.setTransform(-461,-187);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_381.setTransform(-465.5,-194.2);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#6BD3D2").s().p("AACBIIgCgCQgHgDgEgFIgEgIQgGgMgCgMIgCgKIAEADQAFAFAHACQAHACAFgBQAIgBAGgDIADgDIAAAAQAEgCACgCIgBAGQgBAIgDAIQgHAYgKAGIgBAAIgBAAgAAVgYQgDgEgEgBQgGgDgMABQgLABgIAIIADgLQADgQAJgLIAIgHQAFgFABABIABAAIABAAQAEADAEAHQAIAPACAZIgFgDg");
	this.shape_382.setTransform(-466.3,-187);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#5BB1B0").s().p("AgIAqQADgIABgIIAJgJIAJgIIAHADIAEADQAAABAAAAQABAAAAABQAAAAAAAAQAAABAAAAQgBAEgDAEQgFAKgIAMQgMARgOAFQgEACgEAAQAKgGAHgYgAALgHIgHgEIgDgDIgEgHQgCgZgIgPQgEgHgEgDIAAAAQACAAAEACQALAGANASIALAQQAGAJAAAFQAAAGgFACIgFABIgFgBg");
	this.shape_383.setTransform(-463.2,-187);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#E18F59").s().p("AAEAHIgEgEIgFgDQgCgFADgDIAFAIIAGAHIgCABIAAABQAAAAAAAAQAAAAAAgBQAAAAgBgBQAAAAAAAAg");
	this.shape_384.setTransform(-461.1,-103.5);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f("#EEC09E").s().p("AgdAHQgCgDAAgFIACgJQACgIgEgFIAFADIAGAHQADAFABAHIACAAIADABQADACgJABIgCAKIgHAIQgCACgDABQAFgHgDgKgAAPAQIgIgHQgEgCAJAKIAAACIgBABQgCABgEgFIgFgGIgFgKIgFgGIAFABIAFAAQAEgEgBgFIACAAQAFADAJACQAIAEADADIACACIAAABIgLgDQAKAEABADIAAACIgCABIgFgEIgDgBIgCgBIABABIAGAEQAJAJgHgBIgJgGIgGgEQALANAAADIgBAAQgCAAgHgFg");
	this.shape_385.setTransform(-461,-104.4);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f("#3A4D75").s().p("AgIAqQADgIABgIIAJgJIAJgIIAHADIAEADQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAAAQgBAEgDAEIgNAWQgMARgOAFQgEACgEAAQAKgGAHgYgAALgHIgHgEIgDgDIgEgHQgCgZgIgPQgEgHgEgCIAAgBQACAAAEACQALAGANASIALAQQAGAJAAAFQAAAGgFADIgFAAIgFgBg");
	this.shape_386.setTransform(-463.2,-104.4);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_387.setTransform(-465.5,-111.6);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f("#000000").s().p("AgEAeQgHgCgFgEIgEgEQgDgDgBgEQgEgGABgHIABgJIAGgKIACgDQAIgIAKAAQANgBAGACQAEACADADQADAGgCAIIgBAJQAAAEABAEQAEAKgGAHIAAABIgDACQgGAEgIAAIgFAAIgHgBg");
	this.shape_388.setTransform(-466.8,-104.4);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f("#48608E").s().p("AACBIIgCgCQgHgCgEgGIgEgIQgGgMgCgMIgCgKIAEADQAFAFAHACQAHACAFgBQAIgBAGgDIADgDIAAAAQAEgCACgCIgBAGQgBAIgDAIQgHAYgKAGIgBAAIgBAAgAAVgYQgDgDgEgCQgGgCgMAAQgLABgIAIIADgLQADgQAJgLIAIgHQAFgFABABIABABIABAAQAEACAEAHQAIAPACAZIgFgDg");
	this.shape_389.setTransform(-466.3,-104.4);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#372511").s().p("AAABDQgGgFgFgMQgHgTAAgdQAAgbAHgWQAFgOAGgFQAEgEAGADQAFACAEAGQgJAMgDAPIgDALIgCADIgEAKIgBAIQgBAIAEAGQAAAEACADIACAKQACANAGALIAEAIQgDAEgDABIgFABQgEAAgBgCg");
	this.shape_390.setTransform(-469.2,-104.5);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#E18F59").s().p("AAEAHQgBgCgDgCQgCgCgDAAQgCgGADgEIAFAJIAGAHIgBABIgBACQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_391.setTransform(-461.1,-169.6);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#EEC09E").s().p("AgdAIQgCgFABgDIABgKQABgJgCgEQADABACADIAFAFQADAGAAAIIADAAIADAAQADACgJAAQAAAGgDAGQgCAEgEACIgFAEQAFgHgDgJgAAPAQIgJgIQgDgBAJAKIABABIgCACQgBACgFgGIgFgHIgFgJIgFgGIAFAAIAFAAQADgCAAgHIACABIAOAFQAIAEADAEIACABIAAAAQgBABgKgDQAJAEACAEIAAACIgCAAIgFgDIgDgDIgCgBIABABIAFAGQAKAHgHAAIgJgHQgGgDAAABQALAMAAACIgBABQgCAAgHgFg");
	this.shape_392.setTransform(-460.9,-170.5);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#41210C").s().p("AgEAeQgHgCgFgEIgEgEQgDgCgBgEQgDgHAAgHQAAgDACgGQACgFADgFIACgDQAIgIAKgBQANAAAGACQAFADACADQADAEgBAJIgCAKQAAADABAFQAEAJgFAHIgBACIgDABQgFADgIACIgDAAQgGAAgEgCg");
	this.shape_393.setTransform(-466.8,-170.5);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#372511").s().p("AAABCQgGgEgFgNQgGgSgBgdQAAgbAHgWQAFgOAGgFQAEgDAGACQAFADAEAFQgJAMgEAPIgCALIgCADQgCAFgCAFQgCAGAAACQAAAIADAHQABAEACACIABAKQADANAFALIAFAIQgCAEgEABIgFABQgDAAgCgDg");
	this.shape_394.setTransform(-469.2,-170.6);

	this.shape_395 = new cjs.Shape();
	this.shape_395.graphics.f("#E64A00").s().p("AgIAqIAEgRIAJgIIAJgIQADAAAEADQADABABACQAAABAAAAQABABAAAAQAAAAAAABQAAAAAAAAIgDAIQgFAKgJAMQgMARgOAGIgIABQAKgGAHgYgAAQgGIgFgBIgGgEIgEgDIgDgGQgDgbgIgOQgEgHgEgDIAAAAIAGACQALAGANASIALARQAGAIAAAFQAAAGgFACIgEABIgBAAg");
	this.shape_395.setTransform(-463.2,-170.5);

	this.shape_396 = new cjs.Shape();
	this.shape_396.graphics.f("#EC672C").s().p("AABBIIgCgCQgGgDgEgGIgFgIQgFgLgDgNIgBgKIADAEQAFAEAHACQAIACAFAAQAIgBAFgDIADgCIABgCIAFgEIAAAGIgEARQgHAYgKAGgAAVgYQgCgDgGgDQgGgCgLABQgLAAgIAJIACgMQAEgPAJgLIAIgHQAEgFACABIABAAQAFADAEAHQAHAOADAbQgCgDgDgBg");
	this.shape_396.setTransform(-466.3,-170.5);

	this.shape_397 = new cjs.Shape();
	this.shape_397.graphics.f("#E18F59").s().p("AAEAHQgBgCgDgCQgCgDgDAAQgCgEADgFIAFAJIAGAHIgBACIgBABQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAg");
	this.shape_397.setTransform(-461.1,-153.1);

	this.shape_398 = new cjs.Shape();
	this.shape_398.graphics.f("#EEC09E").s().p("AgdAIQgCgFABgDIABgKQABgJgCgEIAFADIAFAHQADAFAAAHIADABIADAAQADABgJACQAAAGgDAEIgGAIIgFADQAFgHgDgJgAAPAQIgJgHQgDgDAJALIABABIgCACQgBABgFgFIgFgHIgFgJIgFgGIAFABIAFgBQADgCAAgHIACABIAOAFQAIAEADAEIACABIAAAAQgBABgKgDQAJAEACAEIAAACIgCAAIgFgDIgDgDIgCAAIABAAIAFAGQAKAIgHgCQgCAAgHgFIgGgEQALANAAADIgBABQgCAAgHgGg");
	this.shape_398.setTransform(-460.9,-154);

	this.shape_399 = new cjs.Shape();
	this.shape_399.graphics.f("#393939").s().p("AgIArIAEgRIAJgJIAJgIQADAAAEADQADACABACQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIgDAHQgFAKgJAMQgMASgOAFIgIABQAKgGAHgXgAALgGIgGgEIgEgEIgDgGQgDgagIgOQgEgIgEgDIAAAAQADAAADADQALAFANATQAIAJADAHQAGAIAAAFQAAAGgFADIgFABIgFgBg");
	this.shape_399.setTransform(-463.2,-154);

	this.shape_400 = new cjs.Shape();
	this.shape_400.graphics.f("#FFF6CD").s().p("AgEAeQgHgCgFgFIgEgDQgDgDgBgEQgDgHAAgGQAAgEACgFQACgGADgFIACgCQAIgJAKAAQANAAAGACQAFACACADQADAFgBAJIgCAJQAAADABAFQAEAJgFAIIgBABIgDACQgFAEgIAAIgDABQgGAAgEgCg");
	this.shape_400.setTransform(-466.8,-154);

	this.shape_401 = new cjs.Shape();
	this.shape_401.graphics.f("#424242").s().p("AABBIIgCgBQgGgEgEgFIgFgIQgFgLgDgNIgBgKIADADQAFAFAHACQAIACAFgBQAIAAAFgEIADgCIABgBIAFgEIAAAGIgEARQgHAXgKAGgAAVgYQgCgDgGgCQgGgCgLAAQgLAAgIAJIACgLQAEgPAJgMIAIgHQAEgFACABIABAAQAFADAEAIQAHAOADAaIgFgEg");
	this.shape_401.setTransform(-466.3,-154);

	this.shape_402 = new cjs.Shape();
	this.shape_402.graphics.f("#372511").s().p("AAABDQgGgFgFgNQgGgSgBgcQAAgdAHgVQAFgOAGgFQAEgEAGADQAFACAEAHQgJALgEAPIgCAMIgCACQgCAEgCAGQgCAFAAAEQAAAHADAGQABAEACAEIABAJQADANAFALIAFAJQgCADgEABIgFABQgEAAgBgCg");
	this.shape_402.setTransform(-469.2,-154.1);

	this.shape_403 = new cjs.Shape();
	this.shape_403.graphics.f("#372511").s().p("AAABDQgGgEgFgOQgGgRgBgdQAAgcAHgWQAFgOAGgFQAEgEAGADQAFADAEAGQgJALgEAPIgCAMIgCACQgCAFgCAFQgCAGAAADQAAAHADAHQABAEACADIABAKQADAMAFALIAFAJQgCADgEABIgFABQgEAAgBgCg");
	this.shape_403.setTransform(-469.2,-137.6);

	this.shape_404 = new cjs.Shape();
	this.shape_404.graphics.f("#E18F59").s().p("AAEAHIgEgEQgCgCgDAAQgCgFADgFIAFAJIAGAHIgBABIgBACQAAAAAAgBQAAAAAAAAQAAgBgBAAQAAgBAAAAg");
	this.shape_404.setTransform(-461.1,-136.6);

	this.shape_405 = new cjs.Shape();
	this.shape_405.graphics.f("#EEC09E").s().p("AgdAHQgCgEABgDIABgKQABgJgCgEIAFAEIAFAGQADAFAAAHIADABIADAAQADABgJACQAAAGgDAFQgCADgEAEIgFADQAFgHgDgKgAAPAQIgJgIQgDgCAJALIABABIgCACQgBABgFgFIgFgHIgFgJIgFgGIAFABIAFgBQADgCAAgHIACABIAOAFQAIAEADAEIACABIAAAAQgBAAgKgCQAJAEACAEIAAABIgCAAIgFgCIgDgCQgBgBAAAAQAAAAAAAAQgBAAAAAAQAAAAAAAAIABABIAFAEQAKAJgHgBQgCgBgHgFIgGgEQALAMAAAEIgBAAQgCAAgHgFg");
	this.shape_405.setTransform(-460.9,-137.5);

	this.shape_406 = new cjs.Shape();
	this.shape_406.graphics.f("#000000").s().p("AgEAeQgHgCgFgFIgEgDQgDgDgBgEQgDgGAAgHQAAgEACgFQACgGADgEIACgDQAIgIAKAAQANgBAGACQAFACACAEQADAEgBAIIgCALQAAADABAEQAEAJgFAIIgBABIgDACQgFAEgIAAIgEAAIgJgBg");
	this.shape_406.setTransform(-466.8,-137.5);

	this.shape_407 = new cjs.Shape();
	this.shape_407.graphics.f("#628DD1").s().p("AABBJIgCgCQgGgDgEgGIgFgIQgFgLgDgNIgBgKIADADQAFAFAHACQAIACAFgBQAIAAAFgEIADgCIABgBIAFgEIAAAGIgEARQgHAXgKAHgAAVgXQgCgEgGgCQgGgCgLABQgLAAgIAIIACgLQAEgPAJgMIAIgHQAEgFACABIABABQAFACAEAIQAHAOADAaIgFgDg");
	this.shape_407.setTransform(-466.3,-137.5);

	this.shape_408 = new cjs.Shape();
	this.shape_408.graphics.f("#447BCD").s().p("AgIArIAEgRIAJgIIAJgIQADgBAEADIAEAEQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABIgDAHQgFAKgJALQgMASgOAGIgIACQAKgHAHgXgAALgGIgGgFIgEgDIgDgGQgDgagIgOQgEgIgEgCIAAgBIAGACQALAHANARIALAQQAGAKAAAEQAAAGgFADIgFAAIgFAAg");
	this.shape_408.setTransform(-463.2,-137.4);

	this.shape_409 = new cjs.Shape();
	this.shape_409.graphics.f("#985E2F").s().p("AjtxiIBqARMAAAAiYIhqAcgAhexLIBbAPMAAAAhgIhbAYgAAfw2IBfAPMAAAAgnIhfAagACjwhIA7AKIAPf5IhKAUg");
	this.shape_409.setTransform(-447.9,-85.8);

	this.shape_410 = new cjs.Shape();
	this.shape_410.graphics.f("#402913").s().p("AiSxLIAlAGMAAAAiHIglAKgAgSw2IAiAFMAAAAhQIgiAKgABuwhIAlAGMAAAAgWIglALg");
	this.shape_410.setTransform(-446.4,-86.4);

	this.shape_411 = new cjs.Shape();
	this.shape_411.graphics.f("#D9D9D9").s().p("AgjT+MAAAgn7IBHAAMAAAAn7g");
	this.shape_411.setTransform(-410.6,-84.3);

	this.shape_412 = new cjs.Shape();
	this.shape_412.graphics.f("#9F3D3D").s().p("AgnSdIAAhGIA0gDMAAAgifIg0gHIAAhGQAUgOA7hXMAAAAn7QhChZgNgIg");
	this.shape_412.setTransform(-418.3,-84.3);

	this.shape_413 = new cjs.Shape();
	this.shape_413.graphics.f("#838383").s().p("AkRRfIBqgcIAlgLIBbgYIAkgKIBdgaIAlgKIBKgUIgP/5Ig7gKIglgGIhdgPIgkgGIhbgPIglgGIhqgRIAAgdIHtA9IA1AGMAAAAifIg1AEIntAhg");
	this.shape_413.setTransform(-444.3,-85.4);

	this.shape_414 = new cjs.Shape();
	this.shape_414.graphics.f("#646262").s().p("AglyLIBLALIAAAdMAAAAjFIAAAlIhLAEg");
	this.shape_414.setTransform(-475.6,-85.7);

	this.shape_415 = new cjs.Shape();
	this.shape_415.graphics.f("#FAFAFD").s().p("AlET+IAAiBIBMgEIHtgiIAABGQAMAIBEBZgAj4yPIhMgKIAAhkIKJAAQg8BXgUAOIAABGg");
	this.shape_415.setTransform(-446.8,-84.3);

	this.shape_416 = new cjs.Shape();
	this.shape_416.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_416.setTransform(432.7,-135.9);

	this.shape_417 = new cjs.Shape();
	this.shape_417.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgCIABgBQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADAEIAGACQACAFgDAFIgGgKg");
	this.shape_417.setTransform(428.3,-144);

	this.shape_418 = new cjs.Shape();
	this.shape_418.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGgBgHIgCAAIgDgCQgDAAAJgCQAAgGACgEQACgEAEgDIAGgEQgGAHAEAKQACAEAAAEIgCAJQgCAIAEAFIgGgDgAgEAPIgPgFQgHgEgEgDIgBgDIAAAAIALADQgKgEgBgDIAAgCIABgBIAGAEIADACIACABIgBgCIgGgEQgJgJAHABIAJAGIAGAEQgLgNAAgCQAAgDAJAHIAJAHQADADgIgLIAAgCIAAgBQADgBAEAFIAEAHIAGAJIAEAGIgEgBIgFABQgEADAAAGIgBgBg");
	this.shape_418.setTransform(428.1,-143.1);

	this.shape_419 = new cjs.Shape();
	this.shape_419.graphics.f("#000000").s().p("AgSAeQgEgCgCgEQgEgFACgIIACgJQAAgEgCgEQgEgKAGgHIABgBIADgCQAFgEAIAAQAHgBAGACQAHACAFAEIADAEQADADACAEQADAGAAAGQAAAEgCAGQgCAFgEAFIgCADQgIAIgKAAIgEAAQgKAAgFgBg");
	this.shape_419.setTransform(433.9,-143.1);

	this.shape_420 = new cjs.Shape();
	this.shape_420.graphics.f("#5BB1B0").s().p("AAQBGQgLgGgMgSIgMgQQgGgJAAgFQAAgGAGgCIAFgBIAEABQAEABADADIADADIAEAHQADAZAIAPQADAHAFACIAAABQgDAAgEgCgAgTgLIgEgDQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQABgEADgEIAOgWQALgRAOgFQAFgCADAAQgKAGgHAYIgDAQIgJAJIgKAIIgGgDg");
	this.shape_420.setTransform(430.3,-143.2);

	this.shape_421 = new cjs.Shape();
	this.shape_421.graphics.f("#6BD3D2").s().p("AgGBIIAAgBIgBAAQgEgCgEgHQgHgPgDgZIAGADQACADAEACQAGACANAAQAKgBAIgIIgCALQgEAQgKALQgBADgHAEQgDAEgCAAIgBAAgAAXgWQgGgFgHgCQgGgCgGABQgIABgGADIgCADIgBAAIgGAEIABgGIAEgQQAHgYAKgGIACAAIACACQAHADADAFIAFAIQAGAMACAMIACAKIgDgDg");
	this.shape_421.setTransform(433.5,-143.2);

	this.shape_422 = new cjs.Shape();
	this.shape_422.graphics.f("#372511").s().p("AgIBEQgFgCgFgGQAJgMAEgPIACgLIACgDQACgFACgFQACgGAAgDQAAgHgDgGQgCgEgBgDIgCgKQgCgNgGgLIgEgIQADgEAEgBQAFgDAEAEQAGAFAFANQAHASAAAdQABAbgIAWQgFAOgGAFQgBACgEAAIgEgBg");
	this.shape_422.setTransform(436.3,-143);

	this.shape_423 = new cjs.Shape();
	this.shape_423.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_423.setTransform(432.7,-70.9);

	this.shape_424 = new cjs.Shape();
	this.shape_424.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGgBgHIgCAAIgDgCQgDAAAJgCQAAgGACgEQACgEAEgDIAGgEQgGAHAEAKQACAEAAAEIgCAJQgCAIAEAFIgGgDgAgEAPIgPgFQgHgEgEgDIgBgDIAAAAIALADQgKgEgBgEIAAgBIABgBIAGAEIADACIACABIgBgCIgGgEQgJgJAHABIAJAGIAGAEQgLgNAAgCQAAgDAJAHIAJAHQADADgIgLIAAgCIAAgBQADgBAEAFIAEAGIAGAKIAEAGIgEgBIgFABQgEADAAAGIgBgBg");
	this.shape_424.setTransform(428.1,-78.1);

	this.shape_425 = new cjs.Shape();
	this.shape_425.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgCIABgBQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADAEIAGACQACAFgDAFIgGgKg");
	this.shape_425.setTransform(428.3,-79);

	this.shape_426 = new cjs.Shape();
	this.shape_426.graphics.f("#000000").s().p("AgSAeQgEgCgCgEQgEgFACgIIACgJQAAgEgCgEQgEgKAGgHIABgBIADgCQAFgEAIAAQAHgBAGACQAHACAFAEIADAEQADADACAEQADAGAAAGQAAAEgCAGQgCAFgEAFIgCADQgIAIgKAAIgEAAQgKAAgFgBg");
	this.shape_426.setTransform(433.9,-78.1);

	this.shape_427 = new cjs.Shape();
	this.shape_427.graphics.f("#4A7328").s().p("AAQBGQgLgGgMgSIgMgQQgGgJAAgFQAAgGAGgCIAFgBIAEABQAEABADADIADADIAEAHQADAZAIAPQADAHAFACIAAABQgDAAgEgCgAgTgLIgEgDQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQABgEADgEIAOgWQALgRAOgFQAFgCADAAQgKAGgHAYIgDAQIgJAJIgKAIIgGgDg");
	this.shape_427.setTransform(430.3,-78.2);

	this.shape_428 = new cjs.Shape();
	this.shape_428.graphics.f("#609634").s().p("AgGBIIAAgBIgBAAQgEgCgEgHQgHgPgDgZIAGADQACADAEACQAGACANAAQAKgBAIgIIgCALQgEAQgKALIgIAHQgDAEgCAAIgBAAgAAXgWQgGgFgHgCQgGgCgGABQgIABgGADIgCACIgBABIgGAEIABgGIAEgQQAHgYAKgGIACAAIACACQAHADADAFIAFAIQAGAMACAMIACAKIgDgDg");
	this.shape_428.setTransform(433.5,-78.2);

	this.shape_429 = new cjs.Shape();
	this.shape_429.graphics.f("#372511").s().p("AgIBEQgFgCgFgGQAJgMAEgPIACgLIACgDQACgFACgFQACgGAAgDQAAgHgDgGQgCgEgBgDIgCgKQgCgNgGgLIgEgIQADgEAEgBQAFgDAEAEQAGAFAFANQAHASAAAdQABAbgIAWQgFAOgGAEQgBADgEAAIgEgBg");
	this.shape_429.setTransform(436.3,-78);

	this.shape_430 = new cjs.Shape();
	this.shape_430.graphics.f("#41210C").s().p("AgSAeQgFgDgCgDQgDgEABgJIACgKQABgDgCgFQgEgJAGgHIABgCIADgBQAFgDAIgCQAHAAAGACQAHACAFAEIADAEQADACACAEQADAHAAAGQAAAEgDAGQgBAFgEAFIgCADQgIAIgLABIgDAAQgKAAgFgCg");
	this.shape_430.setTransform(433.9,-175.5);

	this.shape_431 = new cjs.Shape();
	this.shape_431.graphics.f("#EEC09E").s().p("AAaAUQgDgCgCgDQgDgGAAgIIgDAAIgDgBQgDgBAJAAQAAgHADgFQACgEAEgCIAFgEQgFAHADAJQACAFgBADIgBAKQgBAJACAEIgFgEgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKADQgKgEgBgEIABgCIABAAIAFADIAEADIABABIgBgBIgGgGQgJgHAHAAIAJAGQAGAEAAgBQgKgMgBgCQAAgEAKAIIAIAHQAEACgJgKIAAgBIABgCQACgCAEAGIAEAHIAHAIIAEAHIgFAAQgDgBgCABQgEACABAHIgBgBg");
	this.shape_431.setTransform(428.1,-175.5);

	this.shape_432 = new cjs.Shape();
	this.shape_432.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQABACACACQADACADAAQACAGgDAEIgGgKg");
	this.shape_432.setTransform(428.3,-176.4);

	this.shape_433 = new cjs.Shape();
	this.shape_433.graphics.f("#E64A00").s().p("AAQBGQgLgGgMgSQgIgKgEgHQgGgIAAgFQAAgGAGgCQACgBADAAIAEABIAHAEIADADQABAEADACQADAbAHAOQAEAHAFADIAAAAIgHgCgAgTgLQgDgBgBgCQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgRAOgGIAIgBQgKAGgHAYIgEARIgIAIIgKAIQgCAAgEgDg");
	this.shape_433.setTransform(430.3,-175.6);

	this.shape_434 = new cjs.Shape();
	this.shape_434.graphics.f("#EC672C").s().p("AgFBIIgBAAQgFgDgEgHQgHgOgDgbIAFAEQACADAFADQAHACALgBQALAAAIgJIgCAMQgEAPgJALIgJAHQgCAEgCAAIgBAAgAAXgWQgFgEgHgCQgIgCgFAAQgIABgFADIgDACIgBACIgGAEIABgGIAEgRQAHgYAKgGIACAAIADACQAGADAEAGIAEAIQAGALACANIACAKIgDgEg");
	this.shape_434.setTransform(433.4,-175.6);

	this.shape_435 = new cjs.Shape();
	this.shape_435.graphics.f("#372511").s().p("AgIBEQgFgDgFgFQAJgMAEgPIACgLIADgDQABgFABgFQADgGAAgDQAAgHgDgHQgCgEAAgCIgDgKQgBgNgHgLIgEgIQADgEAEgBQAFgDAEAFQAGAEAFANQAGASABAdQAAAbgHAWQgFAOgGAFQgBACgEAAIgEgBg");
	this.shape_435.setTransform(436.3,-175.4);

	this.shape_436 = new cjs.Shape();
	this.shape_436.graphics.f("#E18F59").s().p("AgFAJIgBgCIAFgHIAGgJQADAFgCAFQgDAAgDACIgDAEQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIgBgBg");
	this.shape_436.setTransform(428.3,-255.6);

	this.shape_437 = new cjs.Shape();
	this.shape_437.graphics.f("#FFF6CD").s().p("AgHAfQgIAAgFgEIgDgCIgBgBQgGgIAEgJQACgEgBgEIgCgJQgBgJADgEQACgEAFgCQAHgCALABQALAAAIAIIACADQAEAEABAGQADAFAAAEQAAAHgDAGQgCAEgDADIgDADQgFAFgHACIgKABIgDAAg");
	this.shape_437.setTransform(433.9,-256.5);

	this.shape_438 = new cjs.Shape();
	this.shape_438.graphics.f("#424242").s().p("AgDBJQgKgHgHgXIgEgRIgBgGIAGAEIABABIADACQAFAEAIAAQAFABAIgCQAHgCAFgFIADgDIgCAKQgCANgGALIgEAIQgEAFgGAEIgDACgAgPg8QAEgIAFgDIABAAQACgBADAFIAJAHQAJAMAEAPIACALQgIgIgLAAQgLgBgHACQgFACgCAEIgFADQADgaAHgOg");
	this.shape_438.setTransform(433.4,-256.5);

	this.shape_439 = new cjs.Shape();
	this.shape_439.graphics.f("#393939").s().p("AASBGQgOgFgLgRQgKgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABgBIAEgDQAEgCACAAIAKAIIAIAIIAEAQQAHAYAKAHQgEAAgEgDgAgTgGQgGgDAAgGQAAgEAGgKIAMgQQAMgSALgFQADgDAEgBIAAABQgFADgEAIQgHAOgDAZIgEAHIgDADIgHAFIgEABIgFgBg");
	this.shape_439.setTransform(430.3,-256.4);

	this.shape_440 = new cjs.Shape();
	this.shape_440.graphics.f("#372511").s().p("AgIBEQgEgBgDgDIAEgJQAHgLABgMIADgKQAAgEACgEQADgGAAgHQAAgDgDgGQgBgFgBgFIgDgCIgCgMQgEgPgJgLQAFgGAFgDQAFgDAEAEQAGAFAFAOQAHAWAAAcQgBAdgGARQgFAOgGAEQgBACgEAAIgEgBg");
	this.shape_440.setTransform(436.3,-256.6);

	this.shape_441 = new cjs.Shape();
	this.shape_441.graphics.f("#EEC09E").s().p("AAbAUQgEgDgCgEQgDgEAAgGQgJgCADgBIADAAIADgBQAAgHADgGIAFgGIAFgDQgCAFABAIIABAKQABADgCAFQgDAJAFAHIgFgEgAgYAUQABgCAKgNIgGAEQgHAGgCAAQgHABAJgIIAGgGIABgBIgBABIgEADIgFADIgBAAIgBgCQABgEAKgEIgKACIgBAAIACgBQADgEAIgEIAPgFIABgBQgBAGAEADIAFABIAFgBIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgKgEABIgIAIQgHAFgCAAIgBgBg");
	this.shape_441.setTransform(428.1,-256.5);

	this.shape_442 = new cjs.Shape();
	this.shape_442.graphics.f("#000000").s().p("AgSAeQgFgCgCgDQgDgFABgIIACgKQABgDgCgFQgEgJAGgIIABgBIADgCQAFgDAIgBQAHgBAGACQAHACAFAFIADADQADADACAEQADAHAAAFQAAAFgDAFQgBAGgEAFIgCACQgIAJgLAAIgCAAQgKAAgGgCg");
	this.shape_442.setTransform(433.9,-272.6);

	this.shape_443 = new cjs.Shape();
	this.shape_443.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFAAgHIgDgBIgDgBQgDAAAJgCQAAgGADgEQACgEAEgEIAFgDQgFAHADAKQACAEgBADIgBALQgBAIACAEIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKAEQgKgFgBgEIABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAABABAAIAFACIAEADIABAAIgBAAIgGgFQgJgJAHACIAJAFIAGAEQgKgMgBgEQAAgDAKAIIAIAHQAEADgJgLIAAgBIABgCQACgBAEAFIAEAHIAHAJIAEAGQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAgBAAQgDAAgCABQgEACABAHIgBgBg");
	this.shape_443.setTransform(428.1,-272.6);

	this.shape_444 = new cjs.Shape();
	this.shape_444.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQABACACABQADADADAAQACAFgDAFIgGgKg");
	this.shape_444.setTransform(428.3,-273.5);

	this.shape_445 = new cjs.Shape();
	this.shape_445.graphics.f("#372511").s().p("AgIBEQgFgCgFgHQAJgLAEgPIACgLIADgDQABgEABgGQADgFAAgEQAAgHgDgGQgCgEAAgEIgDgJQgBgNgHgLIgEgJQADgDAEgBQAFgCAEADQAGAFAFANQAGASABAcQAAAdgHAVQgFAOgGAFQgBACgDAAIgFgBg");
	this.shape_445.setTransform(436.3,-272.5);

	this.shape_446 = new cjs.Shape();
	this.shape_446.graphics.f("#628DD1").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAFACQAHACALAAQALAAAIgJIgCALQgEAPgJAMQgCADgHAEQgDAEgCAAIAAAAgAAXgWQgFgFgHgCQgIgCgFABQgIABgFADIgDACIgBABIgGAEIABgGIAEgRQAHgXAKgGIACAAIADABQAGAEAEAFIAEAJQAGAKACANIACAKIgDgDg");
	this.shape_446.setTransform(433.4,-272.6);

	this.shape_447 = new cjs.Shape();
	this.shape_447.graphics.f("#447BCD").s().p("AAQBGQgLgGgMgSQgIgKgEgHQgGgIAAgFQAAgGAGgCQACgCADAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAHAEIADADIAEAGQADAaAHAOQAEAIAFADIAAAAIgHgCgAgTgLQgDgCgBgCQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgRAOgGIAIgBQgKAGgHAXIgEARIgIAJIgKAIQgCAAgEgDg");
	this.shape_447.setTransform(430.3,-272.6);

	this.shape_448 = new cjs.Shape();
	this.shape_448.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_448.setTransform(432.7,-233);

	this.shape_449 = new cjs.Shape();
	this.shape_449.graphics.f("#E18F59").s().p("AgBAAIgFgHIABgBIABgBQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAAAIADAEIAGACQACAGgDADIgGgJg");
	this.shape_449.setTransform(428.3,-241.1);

	this.shape_450 = new cjs.Shape();
	this.shape_450.graphics.f("#3A4D75").s().p("AAQBGQgLgGgMgSIgMgQQgGgJAAgFQAAgGAGgDIAFgBQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQAEABADADIADADQABAEADACQADAbAIAOQADAHAFADIAAAAQgDAAgEgCgAgTgLIgEgDQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgEADgEIAOgWQALgRAOgFIAIgCQgKAGgHAYIgDARIgJAIIgKAIIgGgDg");
	this.shape_450.setTransform(430.3,-240.2);

	this.shape_451 = new cjs.Shape();
	this.shape_451.graphics.f("#EEC09E").s().p("AAaAVQgDgCgCgEQgDgGgBgHIgCgBIgDgBQgDgBAJAAQAAgHACgEQACgEAEgDIAGgFQgGAIAEAKQACAEAAADIgCAKQgCAJAEAFIgGgEgAgEAQIgPgHQgHgDgEgDIgBgDIAAAAIALAEQgKgFgBgEIAAgBIABgBIAGAEIADACIACABIgBgBIgGgFQgJgJAHABIAJAGIAGAEQgLgNAAgCQAAgDAJAHIAJAHQADADgIgLIAAgCIAAAAQADgCAEAEIAEAHIAGAJIAEAHQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgFABQgEADAAAGIgBAAg");
	this.shape_451.setTransform(428.1,-240.2);

	this.shape_452 = new cjs.Shape();
	this.shape_452.graphics.f("#000000").s().p("AgSAeQgEgCgCgEQgEgFACgIIACgKQAAgDgCgEQgEgKAGgIIABAAIADgCQAFgEAIAAQAHgCAGADQAHABAFAFIADADQADAEACAEQADAGAAAGQAAAEgCAGQgCAFgEAFIgCADQgIAIgKAAIgEABQgKAAgFgCg");
	this.shape_452.setTransform(433.9,-240.2);

	this.shape_453 = new cjs.Shape();
	this.shape_453.graphics.f("#48608E").s().p("AgGBIIAAAAIgBAAQgEgCgEgIQgHgOgDgaIAGADQACAEAEACQAGACANgBQAKAAAIgIIgCALQgEAPgKALQgBADgHAEQgDAEgCAAIgBAAgAAXgWQgGgFgHgBQgGgDgGACQgIAAgGAEIgCACIgBAAIgGAEIABgFIAEgRQAHgYAKgGIACAAIACACQAHADADAGIAFAIQAGALACANIACAJIgDgDg");
	this.shape_453.setTransform(433.5,-240.3);

	this.shape_454 = new cjs.Shape();
	this.shape_454.graphics.f("#372511").s().p("AgIBEQgFgCgFgHQAJgLAEgPIACgLIACgDQACgFACgFQACgGAAgDQAAgHgDgGQgCgEgBgEIgCgJQgCgNgGgLIgEgIQADgEAEgBQAFgDAEAEQAGAFAFAMQAHATAAAcQABAcgIAWQgFAOgGAEQgCADgDAAIgEgBg");
	this.shape_454.setTransform(436.3,-240.1);

	this.shape_455 = new cjs.Shape();
	this.shape_455.graphics.f("#41210C").s().p("AgSAeQgFgDgCgDQgDgFABgIIACgKQABgDgCgFQgEgJAGgHIABgBIADgDQAFgDAIgBQAHAAAGACQAHACAFAEIADAEQADADACAEQADAGAAAGQAAAFgDAFQgBAFgEAFIgCACQgIAJgLABIgCAAQgKAAgGgCg");
	this.shape_455.setTransform(433.9,-224);

	this.shape_456 = new cjs.Shape();
	this.shape_456.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAQABACACABQADADADAAQACAGgDAEIgGgKg");
	this.shape_456.setTransform(428.3,-224.9);

	this.shape_457 = new cjs.Shape();
	this.shape_457.graphics.f("#EEC09E").s().p("AAaAVQgDgDgCgEQgDgFAAgHIgDgBIgDgBQgDAAAJgBQAAgHADgEQACgEAEgDIAFgEQgFAHADAJQACAFgBADIgBAKQgBAIACAFIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKADQgKgEgBgEIABgCIABAAIAFADIAEADIABABIgBgBIgGgGQgJgIAHABIAJAGIAGAEQgKgMgBgDQAAgEAKAIIAIAHQAEACgJgKIAAgCIABgBQACgBAEAFIAEAHIAHAJIAEAGIgFgBQgDAAgCABQgEACABAGIgBAAg");
	this.shape_457.setTransform(428.1,-224);

	this.shape_458 = new cjs.Shape();
	this.shape_458.graphics.f("#372511").s().p("AgIBEQgFgCgFgHQAJgLAEgPIACgMIADgCQABgFABgFQADgFAAgEQAAgHgDgGQgCgEAAgDIgDgKQgBgNgHgLIgEgIQADgEAEgBQAFgDAEAEQAGAFAFANQAGASABAdQAAAbgHAWQgFAOgGAFQgBACgDAAIgFgBg");
	this.shape_458.setTransform(436.3,-223.9);

	this.shape_459 = new cjs.Shape();
	this.shape_459.graphics.f("#E64A00").s().p("AAQBGQgLgFgMgTIgMgRQgGgIAAgFQAAgGAGgCQACgCADABIAEABIAHADIADAEQABAEADACQADAaAHAPQAEAHAFADIAAAAIgHgCgAgTgLQgDgBgBgDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgLQALgTAOgFIAIgBQgKAGgHAXIgEARQgEADgEAGIgKAIQgCAAgEgDg");
	this.shape_459.setTransform(430.3,-224.1);

	this.shape_460 = new cjs.Shape();
	this.shape_460.graphics.f("#EC672C").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAFACQAHADALgBQALgBAIgIIgCALQgEAPgJAMQgCADgHAEQgDAFgCAAIAAgBgAAXgWQgFgFgHgCQgIgCgFABQgIABgFADIgDACIgBABIgGAEIABgGIAEgRQAHgXAKgHIACABIADACQAGADAEAFIAEAIQAGAMACAMIACAKIgDgDg");
	this.shape_460.setTransform(433.4,-224.1);

	this.shape_461 = new cjs.Shape();
	this.shape_461.graphics.f("#E18F59").s().p("AgFAJIgBgCIAFgGIAGgKQADAFgCAFIgGACIgDAEQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABg");
	this.shape_461.setTransform(428.3,-190.9);

	this.shape_462 = new cjs.Shape();
	this.shape_462.graphics.f("#EEC09E").s().p("AAaAVQgEgEgCgEQgCgEAAgGQgJgBADgCIADgBIACgBQABgGADgGQACgDADgDIAGgDQgEAFACAHIACAKQAAAEgCAEQgEAKAGAHIgGgDgAgYAVQAAgEALgMIgGAEIgJAFQgHABAJgIIAGgEIABgBIgCAAIgDACIgGADIgBAAIAAgCQABgDAKgFIgLADIAAAAIABgCQAEgDAHgEIAPgFIABgBQAAAGAEADIAFABIAEgBIgEAGIgGAKIgEAGQgEAFgDgBIAAgBIAAgCQAIgLgDADIgJAGQgHAGgCAAIAAAAg");
	this.shape_462.setTransform(428.1,-191.7);

	this.shape_463 = new cjs.Shape();
	this.shape_463.graphics.f("#000000").s().p("AgHAfQgIAAgFgEIgDgCIgBAAQgGgIAEgKQACgEAAgDIgCgKQgCgIAEgFQACgEAEgCQAHgCAMABQAKAAAIAIIACADQAEAFACAFQACAGAAADQAAAHgDAGQgCAEgDAEIgDADQgFAFgHABQgFACgCAAIgGgBg");
	this.shape_463.setTransform(433.9,-191.8);

	this.shape_464 = new cjs.Shape();
	this.shape_464.graphics.f("#609634").s().p("AgDBIQgKgGgHgYIgEgRIgBgFIAGAEIABAAIACACQAGAEAIAAQAGACAGgDQAHgBAGgFIADgDIgCAJQgCANgGALIgFAIQgDAGgHADIgCACIgBAAIgBAAgAgPg9QAEgIAEgCIABAAIAAAAQACgBAEAFIAIAGQAKAMAEAPIACALQgIgIgKAAQgNgBgGACQgEACgCAEIgGADQADgaAHgOg");
	this.shape_464.setTransform(433.5,-191.7);

	this.shape_465 = new cjs.Shape();
	this.shape_465.graphics.f("#4A7328").s().p("AASBGQgOgFgLgRIgOgWQgDgEgBgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAIAEgEIAGgCIAKAIIAJAJIADAQQAHAYAKAGQgDAAgFgCgAgTgHQgGgCAAgHQAAgEAGgIIAMgRQAMgSALgGQAEgCADAAIAAAAQgFACgDAIQgIAPgDAaQgDACgBADIgDAEQgDADgEABIgEABIgFgBg");
	this.shape_465.setTransform(430.3,-191.7);

	this.shape_466 = new cjs.Shape();
	this.shape_466.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_466.setTransform(432.7,-198.9);

	this.shape_467 = new cjs.Shape();
	this.shape_467.graphics.f("#372511").s().p("AgIBEQgEgBgDgEIAEgIQAGgLACgNIACgJQABgEACgEQADgGAAgIQAAgCgCgGQgCgFgCgFIgCgDIgCgLQgEgPgJgMQAFgGAFgCQAFgDAEAFQAGAEAFAOQAIAWgBAcQAAAcgHASQgFANgGAFQgBACgDAAIgFgBg");
	this.shape_467.setTransform(436.3,-191.9);

	this.shape_468 = new cjs.Shape();
	this.shape_468.graphics.f("#E18F59").s().p("AgFAIIgBgBIAFgHIAGgJQADAEgCAGQgDAAgDADQgCABgBACQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_468.setTransform(428.3,-207);

	this.shape_469 = new cjs.Shape();
	this.shape_469.graphics.f("#000000").s().p("AgHAfQgIAAgFgEIgDgCIgBgBQgGgIAEgJQACgFgBgDIgCgKQgBgIADgFQACgDAFgCQAHgCALAAQALAAAIAJIACACQAEAFABAGQADAFAAAEQAAAGgDAHQgCAEgDADIgDADQgFAFgHACQgGACgEAAIgDgBg");
	this.shape_469.setTransform(433.9,-207.9);

	this.shape_470 = new cjs.Shape();
	this.shape_470.graphics.f("#628DD1").s().p("AgDBIQgKgGgHgXIgEgRIgBgGIAGAEIABABIADACQAFAEAIAAQAFABAIgCQAHgCAFgFIADgDIgCAKQgCANgGALIgEAIQgEAFgGAEIgDABgAgPg8QAEgIAFgDIABAAQACgBADAFQAHAEACADQAJAMAEAPIACALQgIgJgLAAQgLAAgHACQgFACgCADIgFAEQADgaAHgOg");
	this.shape_470.setTransform(433.4,-207.9);

	this.shape_471 = new cjs.Shape();
	this.shape_471.graphics.f("#447BCD").s().p("AASBHQgOgFgLgSQgKgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBABAAQABgCADgCQAEgDACAAIAKAIIAIAJIAEARQAHAXAKAGIgIgBgAgTgGQgGgDAAgGQAAgFAGgIQAEgHAIgKQAMgSALgGIAHgCIAAAAQgFADgEAIQgHAOgDAaIgEAGIgDAEIgHAEIgEABIgFgBg");
	this.shape_471.setTransform(430.3,-207.9);

	this.shape_472 = new cjs.Shape();
	this.shape_472.graphics.f("#372511").s().p("AgIBEQgEgBgDgDIAEgJQAHgLABgNIADgJQAAgEACgEQADgGAAgHQAAgEgDgFQgBgGgBgEIgDgCIgCgMQgEgPgJgLQAFgHAFgCQAFgDAEAEQAGAFAFAOQAHAVAAAdQgBAcgGASQgFANgGAFQgBACgEAAIgEgBg");
	this.shape_472.setTransform(436.3,-208.1);

	this.shape_473 = new cjs.Shape();
	this.shape_473.graphics.f("#EEC09E").s().p("AAbAVQgEgEgCgEQgDgEAAgGQgJgCADgBIADAAIADgBQAAgHADgFIAFgHIAFgDQgCAEABAIIABALQABADgCAFQgDAJAFAHIgFgDgAgYAVQABgEAKgMIgGAEIgJAFQgHACAJgIIAGgGIABAAIgBAAIgEADIgFADIgBAAIgBgCQABgEAKgFIgKADIgBAAIACgBQADgEAIgEIAPgFIABgBQgBAHAEACIAFABIAFgBIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgEADIgIAHQgHAGgCAAIgBgBg");
	this.shape_473.setTransform(428.1,-208);

	this.shape_474 = new cjs.Shape();
	this.shape_474.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_474.setTransform(432.7,-152.1);

	this.shape_475 = new cjs.Shape();
	this.shape_475.graphics.f("#3A4D75").s().p("AAQBFQgLgFgMgSIgMgQQgGgJAAgFQAAgGAGgDIAFgBQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQAEABADADIADADIAEAHQADAZAIAOQADAIAFACIAAABQgDAAgEgDgAgTgLIgEgDQgBgBAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQABgEADgEIAOgWQALgRAOgFIAIgCQgKAFgHAZIgDARIgJAIIgKAIIgGgDg");
	this.shape_475.setTransform(430.3,-159.3);

	this.shape_476 = new cjs.Shape();
	this.shape_476.graphics.f("#E18F59").s().p("AgBAAIgFgHIABgBIABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADAEIAGACQACAFgDAEIgGgJg");
	this.shape_476.setTransform(428.3,-160.2);

	this.shape_477 = new cjs.Shape();
	this.shape_477.graphics.f("#48608E").s().p("AgGBIIAAAAIgBAAQgEgDgEgHQgHgOgDgaIAGADQACAEAEABQAGADANgBQAKAAAIgIIgCAKQgEAQgKALQgBADgHAEQgDAEgCAAIgBAAgAAXgWQgGgFgHgBQgGgDgGABQgIABgGADIgCADIgBAAIgGAEIABgFIAEgRQAHgYAKgGIACAAIACACQAHADADAFIAFAIQAGAMACANIACAJIgDgDg");
	this.shape_477.setTransform(433.5,-159.4);

	this.shape_478 = new cjs.Shape();
	this.shape_478.graphics.f("#000000").s().p("AgSAeQgEgCgCgDQgEgFACgIIACgKQAAgEgCgEQgEgKAGgHIABgBIADgCQAFgDAIgBQAHgBAGACQAHACAFAEIADAEQADADACAEQADAHAAAFQAAAFgCAFQgCAGgEAEIgCADQgIAIgKABIgDAAQgKAAgGgCg");
	this.shape_478.setTransform(433.9,-159.3);

	this.shape_479 = new cjs.Shape();
	this.shape_479.graphics.f("#372511").s().p("AgIBEQgFgCgFgGQAJgMAEgPIACgLIACgDQACgFACgFQACgGAAgDQAAgHgDgGQgCgEgBgDIgCgKQgCgNgGgLIgEgJIAHgEQAFgDAEAFQAGAEAFANQAHASAAAdQABAbgIAWQgFAOgGAFQgBACgEAAIgEgBg");
	this.shape_479.setTransform(436.3,-159.2);

	this.shape_480 = new cjs.Shape();
	this.shape_480.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGgBgHIgCgBIgDgBQgDgBAJAAQAAgHACgEQACgEAEgDIAGgFQgGAIAEAKQACAEAAADIgCAKQgCAIAEAGIgGgEgAgEAQIgPgHQgHgDgEgEIgBgCIAAAAIALADQgKgEgBgEIAAgBIABgBIAGADIADADIACABIgBgBIgGgFQgJgJAHABIAJAGIAGAEQgLgNAAgCQAAgEAJAIIAJAHQADADgIgLIAAgBIAAgCQADgBAEAEIAEAIIAGAIIAEAIQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgFABQgEADAAAGIgBAAg");
	this.shape_480.setTransform(428.1,-159.3);

	this.shape_481 = new cjs.Shape();
	this.shape_481.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQABACACABQADADADAAQACAGgDAEIgGgKg");
	this.shape_481.setTransform(428.3,-95.5);

	this.shape_482 = new cjs.Shape();
	this.shape_482.graphics.f("#EEC09E").s().p("AAaAVQgDgCgCgFQgDgFAAgHIgDgBIgDgBQgDAAAJgBQAAgHADgEQACgEAEgDIAFgEQgFAHADAKQACAEgBADIgBALQgBAIACAEIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAQAAAAAKAEQgKgFgBgEIABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAABABAAIAFACIAEADIABABIgBgBIgGgFQgJgIAHABIAJAFIAGAEQgKgMgBgDQAAgEAKAIIAIAHQAEADgJgLIAAgBIABgCQACgBAEAFIAEAHIAHAJIAEAGIgFgBQgDAAgCABQgEACABAHIgBgBg");
	this.shape_482.setTransform(428.1,-94.6);

	this.shape_483 = new cjs.Shape();
	this.shape_483.graphics.f("#41210C").s().p("AgSAeQgFgCgCgEQgDgEABgIIACgLQABgDgCgEQgEgKAGgHIABgBIADgDQAFgCAIgCQAHAAAGACQAHACAFAEIADAEQADADACAEQADAHAAAFQAAAFgDAFQgBAGgEAEIgCADQgIAIgLABIgCAAQgKAAgGgCg");
	this.shape_483.setTransform(433.9,-94.6);

	this.shape_484 = new cjs.Shape();
	this.shape_484.graphics.f("#E64A00").s().p("AAQBGQgLgGgMgSQgIgKgEgHQgGgIAAgFQAAgGAGgCQACgCADABIAEABIAHAEIADADQABAEADACQADAbAHANQAEAIAFADIAAAAIgHgCgAgTgLQgDgBgBgDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgRAOgGIAIgBQgKAGgHAXIgEASQgEACgEAGIgKAIQgCAAgEgDg");
	this.shape_484.setTransform(430.3,-94.7);

	this.shape_485 = new cjs.Shape();
	this.shape_485.graphics.f("#EC672C").s().p("AgFBIIgBAAQgFgDgEgIQgHgNgDgbIAFAEQACADAFACQAHADALgBQALAAAIgJIgCALQgEAPgJAMQgCADgHAEQgDAEgCAAIAAAAgAAXgWQgFgFgHgBQgIgDgFABQgIABgFADIgDACIgBABIgGAEIABgFIAEgSQAHgXAKgGIACAAIADACQAGADAEAGIAEAIQAGALACANIACAJIgDgDg");
	this.shape_485.setTransform(433.4,-94.7);

	this.shape_486 = new cjs.Shape();
	this.shape_486.graphics.f("#372511").s().p("AgIBEQgFgCgFgHQAJgLAEgPIACgLIADgDQABgEABgGQADgFAAgEQAAgGgDgHQgCgEAAgDIgDgKQgBgMgHgMIgEgIIAHgFQAFgCAEAEQAGAEAFANQAGASABAdQAAAcgHAVQgFAOgGAFQgBACgDAAIgFgBg");
	this.shape_486.setTransform(436.3,-94.5);

	this.shape_487 = new cjs.Shape();
	this.shape_487.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgCIABgBQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAIADAEQADACADAAQACAFgDAFIgGgKg");
	this.shape_487.setTransform(428.3,-111.7);

	this.shape_488 = new cjs.Shape();
	this.shape_488.graphics.f("#393939").s().p("AAQBFQgLgFgMgTIgMgPQgGgKAAgEQAAgGAGgDIAFgBIAEABIAHAFIADADIAEAHQADAZAHAOQAEAIAFADIAAAAQgEAAgDgDgAgTgLIgEgDQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIADgHQAFgKAKgMQALgRAOgGQAEgCAEAAQgKAHgHAYIgEAQIgIAIIgKAIQgCABgEgDg");
	this.shape_488.setTransform(430.3,-110.8);

	this.shape_489 = new cjs.Shape();
	this.shape_489.graphics.f("#424242").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFADQACAEAFACQAHACALgBQALAAAIgIIgCALQgEAPgJAMIgJAHQgDAFgCAAIAAgBgAAXgWQgFgFgHgCQgIgCgFABQgIAAgFAEIgDACIgBABIgGAEIABgGIAEgRQAHgXAKgHIACAAIADACQAGAEAEAFIAEAIQAGALACANIACAKIgDgDg");
	this.shape_489.setTransform(433.4,-110.8);

	this.shape_490 = new cjs.Shape();
	this.shape_490.graphics.f("#FFF6CD").s().p("AgSAeQgFgCgCgEQgDgEABgJIACgJQABgEgCgEQgEgJAGgIIABgBIADgCQAFgEAIAAQAHgBAGACQAHACAFAFIADADQADADACAEQADAGAAAGQAAAFgDAFQgBAGgEAEIgCADQgIAIgLAAIgDAAQgKAAgFgBg");
	this.shape_490.setTransform(433.9,-110.8);

	this.shape_491 = new cjs.Shape();
	this.shape_491.graphics.f("#372511").s().p("AgIBEQgFgDgFgGQAJgLAEgPIACgMIADgCQABgFABgFQADgGAAgDQAAgHgDgGQgCgEAAgEIgDgKQgBgMgHgLIgEgJQADgDAEgBQAFgDAEAEQAGAEAFAOQAGARABAdQAAAcgHAWQgFAOgGAFQgBACgDAAIgFgBg");
	this.shape_491.setTransform(436.3,-110.7);

	this.shape_492 = new cjs.Shape();
	this.shape_492.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGAAgHIgDgBIgDgBQgDAAAJgCQAAgGADgEQACgEAEgDIAFgEQgFAHADAJQACAFgBADIgBAKQgBAIACAFIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKADQgKgEgBgEIABgCIABAAIAFADIAEADIABABIgBgBIgGgGQgJgIAHABQACABAHAFIAGAEQgKgNgBgCQAAgEAKAIIAIAIQAEABgJgKIAAgBIABgCQACgBAEAFIAEAHIAHAIIAEAHIgFgBIgFABQgEACABAHIgBgBg");
	this.shape_492.setTransform(428.1,-110.8);

	this.shape_493 = new cjs.Shape();
	this.shape_493.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAABQABACACABQADADADAAQACAFgDAFIgGgKg");
	this.shape_493.setTransform(428.3,-127.9);

	this.shape_494 = new cjs.Shape();
	this.shape_494.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFAAgHIgDgBIgDgBQgDAAAJgCQAAgGADgEQACgEAEgEIAFgDQgFAHADAJQACAFgBADIgBALQgBAIACAEIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKAEQgKgFgBgEIABgCIABAAIAFADIAEADIABAAIgBAAIgGgGQgJgIAHACIAJAFIAGAEQgKgMgBgEQAAgDAKAIIAIAHQAEADgJgLIAAgBIABgCQACgBAEAFIAEAHIAHAJIAEAGIgFgBIgFABQgEACABAHIgBgBg");
	this.shape_494.setTransform(428.1,-127);

	this.shape_495 = new cjs.Shape();
	this.shape_495.graphics.f("#372511").s().p("AgIBEQgFgCgFgHQAJgLAEgPIACgMIADgCQABgEABgGQADgFAAgEQAAgHgDgGQgCgEAAgEIgDgJQgBgNgHgLIgEgJQADgDAEgBQAFgCAEADQAGAFAFANQAGASABAcQAAAdgHAVQgFAOgGAFQgBACgDAAIgFgBg");
	this.shape_495.setTransform(436.3,-126.9);

	this.shape_496 = new cjs.Shape();
	this.shape_496.graphics.f("#000000").s().p("AgSAeQgFgCgCgDQgDgFABgIIACgKQABgDgCgFQgEgJAGgIIABgBIADgCQAFgEAIAAQAHgBAGACQAHACAFAFIADADQADADACAEQADAHAAAFQAAAFgDAFQgBAGgEAFIgCACQgIAJgLAAIgCAAQgKAAgGgCg");
	this.shape_496.setTransform(433.9,-127);

	this.shape_497 = new cjs.Shape();
	this.shape_497.graphics.f("#628DD1").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAFACQAHACALAAQALAAAIgJIgCALQgEAPgJAMQgCADgHAEQgDAEgCAAIAAAAgAAXgWQgFgFgHgCQgIgCgFABQgIAAgFAEIgDACIgBABIgGAEIABgGIAEgRQAHgXAKgGIACAAIADABQAGAEAEAFIAEAJQAGAKACANIACAKIgDgDg");
	this.shape_497.setTransform(433.4,-127);

	this.shape_498 = new cjs.Shape();
	this.shape_498.graphics.f("#447BCD").s().p("AAQBGQgLgGgMgSQgIgKgEgHQgGgIAAgFQAAgGAGgDIAFgBIAEABIAHAFIADADIAEAGQADAaAHAOQAEAIAFADIAAAAIgHgCgAgTgLQgDgCgBgCQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgSAOgFIAIgBQgKAGgHAXIgEARIgIAJIgKAIQgCAAgEgDg");
	this.shape_498.setTransform(430.3,-127);

	this.shape_499 = new cjs.Shape();
	this.shape_499.graphics.f("#372511").s().p("AgIBEQgEgBgDgEIAEgIQAGgLACgNIACgJIADgIQADgGAAgIQAAgCgCgGQgCgFgCgFIgCgDQgBgGgCgEQgDgQgJgLQAEgHAGgCQAFgDAEAFQAGAEAFAOQAHAWAAAcQAAAcgHATQgFAMgGAFQgBACgEAAIgEgBg");
	this.shape_499.setTransform(448.7,-113.2);

	this.shape_500 = new cjs.Shape();
	this.shape_500.graphics.f("#E18F59").s().p("AgFAJIgBgBIAFgIIAGgIQADADgCAFIgGADIgDAEQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_500.setTransform(440.7,-112.1);

	this.shape_501 = new cjs.Shape();
	this.shape_501.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgCgCIgBAAQgGgIAEgKQABgEAAgDIgBgKQgCgIADgFQADgEAEgBQAHgDALABQALAAAIAIIACADQAEAFACAFQACAGAAADQAAAHgDAGIgFAIIgDADQgGAFgGABQgFACgCAAIgGgBg");
	this.shape_501.setTransform(446.3,-113.1);

	this.shape_502 = new cjs.Shape();
	this.shape_502.graphics.f("#EEC09E").s().p("AAaAUIgGgHIgCgLQgJAAADgCIADAAIACgBQABgHADgGIAFgGIAFgEQgDAFACAJIABAKQAAADgBAEQgEAKAGAIIgGgFgAgYAUQAAgCAKgNIgFAEIgJAGQgHABAJgJIAGgFIABgBIgCABIgDACIgGAEIgBgBIAAgBQABgEAKgFIgLADIAAAAIABgCQAEgDAHgDIAPgHIABAAQAAAGADADIAGABQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIgEAHIgGAJIgEAIQgEAEgDgBIAAgCIAAgBQAIgLgDADIgJAHQgHAFgCAAIAAgBg");
	this.shape_502.setTransform(440.5,-113);

	this.shape_503 = new cjs.Shape();
	this.shape_503.graphics.f("#48608E").s().p("AgDBIQgKgGgIgYIgDgRIgBgFIAGAEIABAAIACACQAGAEAIAAQAGACAGgDQAHgBAFgFIAEgDIgCAJQgCANgGALIgFAIQgDAGgHADIgCACIgBAAIgBAAgAgPg9QAEgHAEgDIABAAIAAAAQADgBADAFQAGAEADADQAJALADAQQACAEABAGQgIgIgLAAQgMgBgGADQgFABgCAEIgFADQADgaAHgOg");
	this.shape_503.setTransform(445.9,-113);

	this.shape_504 = new cjs.Shape();
	this.shape_504.graphics.f("#3A4D75").s().p("AASBGQgOgFgLgRQgJgMgFgKQgDgEgBgEQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAIAEgDIAHgDIAKAIIAIAIIAEARQAHAYAKAGIgIgCgAgUgGQgFgDAAgGQAAgFAGgJIAMgQQAMgSALgGQAEgCADAAIAAAAQgFADgDAHQgIAOgDAaIgEAHIgDADQgDADgEABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAIgGgBg");
	this.shape_504.setTransform(442.7,-113);

	this.shape_505 = new cjs.Shape();
	this.shape_505.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_505.setTransform(445.1,-120.2);

	this.shape_506 = new cjs.Shape();
	this.shape_506.graphics.f("#372511").s().p("AgIBEQgEgBgDgEIAEgIQAGgLACgNIACgJIADgIQADgGAAgIQAAgCgCgGQgCgFgCgFIgCgDQgBgGgCgEQgDgQgJgLQAEgHAGgCQAFgDAEAFQAGAEAFAOQAHAWAAAcQAAAcgHASQgFANgGAFQgBACgEAAIgEgBg");
	this.shape_506.setTransform(448.7,-208.2);

	this.shape_507 = new cjs.Shape();
	this.shape_507.graphics.f("#E18F59").s().p("AgFAJIgBgBIAFgHIAGgKQADAFgCAFIgGADIgDADQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABg");
	this.shape_507.setTransform(440.7,-207.2);

	this.shape_508 = new cjs.Shape();
	this.shape_508.graphics.f("#EEC09E").s().p("AAaAVIgGgIIgCgKQgJgBADgCIADgBIACAAQABgHADgGIAFgGIAFgDQgDAEACAIIABAKQAAAEgBAEQgEAKAGAHIgGgDgAgYAVQAAgEAKgMIgFAEIgJAFQgHABAJgIIAGgEIABgBIgCAAIgDADIgGACIgBAAIAAgCQABgDAKgEIgLACIAAAAIABgCQAEgDAHgEIAPgFIABgBQAAAGADACQADACADAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIgEAHIgGAJIgEAHQgEAFgDgBIAAgCIAAgBQAIgLgDADIgJAGQgHAGgCAAIAAAAg");
	this.shape_508.setTransform(440.5,-208);

	this.shape_509 = new cjs.Shape();
	this.shape_509.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgCgCIgBAAQgGgIAEgKQABgEAAgDIgBgKQgCgIADgFQADgEAEgBQAHgDALABQALAAAIAIIACADQAEAFACAFQACAGAAADQAAAHgDAGIgFAIIgDADQgGAFgGABQgFACgCAAIgGgBg");
	this.shape_509.setTransform(446.3,-208.1);

	this.shape_510 = new cjs.Shape();
	this.shape_510.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_510.setTransform(445.1,-215.2);

	this.shape_511 = new cjs.Shape();
	this.shape_511.graphics.f("#4A7328").s().p("AASBHQgOgGgLgRQgJgMgFgKQgDgEgBgEQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAIAEgDIAHgDIAKAIIAIAJIAEAQQAHAZAKAFIgIgBgAgUgHQgFgCAAgHQAAgEAGgIIAMgQQAMgTALgGQAEgCADAAIAAABQgFACgDAHQgIAPgDAZIgEAGIgDAEQgDADgEABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgDABgDgCg");
	this.shape_511.setTransform(442.7,-208);

	this.shape_512 = new cjs.Shape();
	this.shape_512.graphics.f("#609634").s().p("AgDBIQgKgGgIgYIgDgRIgBgFIAGAEIABAAIACACQAGAEAIAAQAGACAGgDQAHgBAFgFIAEgDIgCAJQgCANgGALIgFAIQgDAGgHADIgCACIgBAAIgBAAgAgPg9QAEgHAEgDIABAAIAAAAQADgBADAFQAGAEADADQAJALADAQQACAEABAGQgIgIgLAAQgMgBgGADQgFABgCAEIgFADQADgaAHgOg");
	this.shape_512.setTransform(445.9,-208);

	this.shape_513 = new cjs.Shape();
	this.shape_513.graphics.f("#E18F59").s().p("AgFAIIgBgBIAFgHIAGgJQADAEgCAGQgDAAgDACIgDAEQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgBgCg");
	this.shape_513.setTransform(440.7,-80.5);

	this.shape_514 = new cjs.Shape();
	this.shape_514.graphics.f("#EEC09E").s().p("AAbAVIgHgIQgCgEAAgGQgJgCADgBIADAAIADgBQAAgHADgFIAFgHIAFgDQgCAEABAIIABALQABADgCAFQgDAJAFAHIgFgDgAgYAVQABgEAKgMIgGAEIgJAFQgHACAJgIIAGgGIABAAIgCAAIgDADIgFADIgBAAIgBgCQABgEAKgEIgKACIgBAAIACgBQADgEAIgEIAPgFIABgBQgBAHAEACIAFABIAFgBIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgEADIgIAHQgHAGgCAAIgBgBg");
	this.shape_514.setTransform(440.5,-81.4);

	this.shape_515 = new cjs.Shape();
	this.shape_515.graphics.f("#447BCD").s().p("AASBHQgOgFgLgSQgKgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgEQAFgDACAAIAKAIIAIAJIAEARQAHAXAKAGIgIgBgAgUgGQgFgDAAgGQAAgFAGgIQAEgHAIgKQAMgSALgGIAHgCIAAAAQgFADgEAIQgHAOgDAaIgEAGIgDAEIgHAEIgEABIgGgBg");
	this.shape_515.setTransform(442.7,-81.4);

	this.shape_516 = new cjs.Shape();
	this.shape_516.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgCgCIgCgBQgFgIAEgJQABgFAAgDIgCgKQgBgIADgFQACgDAFgCQAHgCALAAQALAAAIAJIACACQAEAFABAGQADAFAAAEQAAAGgDAHIgFAHIgDADQgGAFgGACIgKACIgDgBg");
	this.shape_516.setTransform(446.3,-81.4);

	this.shape_517 = new cjs.Shape();
	this.shape_517.graphics.f("#372511").s().p("AgJBEQgDgBgDgDIAEgJQAHgLABgMIACgKIADgIQADgGAAgHQAAgEgCgFQgCgGgCgEIgCgCIgCgMQgDgPgKgLQAEgHAFgCQAHgDADAEQAGAFAFAOQAHAVAAAdQgBAdgGARQgFANgGAFQgBACgEAAIgFgBg");
	this.shape_517.setTransform(448.7,-81.5);

	this.shape_518 = new cjs.Shape();
	this.shape_518.graphics.f("#628DD1").s().p("AgDBIQgKgGgHgXIgEgRIgBgGIAFAEIACABIACACQAGAEAIAAQAFABAIgCQAGgCAGgFIADgDIgCAKQgCANgGALIgEAIQgEAFgHAEIgCABgAgPg8QAEgIAFgDIABAAQACgBADAFQAHAEACADQAJAMADAPIADALQgIgJgLAAQgLAAgHACQgFACgCADIgFAEQADgaAHgOg");
	this.shape_518.setTransform(445.8,-81.4);

	this.shape_519 = new cjs.Shape();
	this.shape_519.graphics.f("#372511").s().p("AgJBEIgGgFIAEgIQAHgLABgNIACgKIADgHQADgHAAgGQAAgEgCgFQgCgGgCgEIgCgCIgCgMQgDgPgKgLQAEgHAFgCQAHgDADAEQAGAFAFAOQAHAVAAAcQgBAdgGASQgFANgGAEQgCADgDAAIgFgBg");
	this.shape_519.setTransform(448.7,-129);

	this.shape_520 = new cjs.Shape();
	this.shape_520.graphics.f("#E18F59").s().p("AgFAIIgBgBIAFgHIAGgJQADAEgCAGQgDAAgDACQgCABgBADQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgBgCg");
	this.shape_520.setTransform(440.7,-128);

	this.shape_521 = new cjs.Shape();
	this.shape_521.graphics.f("#EEC09E").s().p("AAbAUQgEgDgDgEQgCgEAAgHQgJgBADgBIADAAIADgBQAAgHADgFQACgEADgDIAFgDQgCAEABAIIABALQABADgCAFQgDAJAFAHIgFgEgAgYAUQABgDAKgMIgGAEIgJAFQgHACAJgIIAGgGIABgBIgCABIgDADIgFADIgBAAIgBgCQABgEAKgEIgKACIgBAAIACgBQADgEAIgEIAPgFIABgBQgBAHAEACQACABADAAIAFgBIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgEADIgIAHQgHAFgCAAIgBgBg");
	this.shape_521.setTransform(440.5,-128.9);

	this.shape_522 = new cjs.Shape();
	this.shape_522.graphics.f("#41210C").s().p("AgHAgQgIgBgGgDIgCgDIgCgBQgFgHAEgJQABgFAAgDIgCgLQgBgIADgEQACgEAFgCQAHgCALAAQALABAIAJIACACQAEAEABAGQADAFAAAEQAAAGgDAHIgFAHIgDAEQgGAEgGACQgGACgFAAIgCAAg");
	this.shape_522.setTransform(446.3,-128.9);

	this.shape_523 = new cjs.Shape();
	this.shape_523.graphics.f("#EC672C").s().p("AgUArIgEgSIgBgFIAFAEIACABIACACQAGADAIABQAFABAIgDQAGgBAGgFIADgDIgCAJQgCANgGAMIgEAIQgEAFgHADIgCACIgCAAQgKgGgHgXgAgPg8QAEgIAFgDIABAAQACgBADAFQAHAEACADQAJAMADAPIADALQgIgJgLAAQgLgBgHADQgFACgCADIgFAEQADgbAHgNg");
	this.shape_523.setTransform(445.8,-128.9);

	this.shape_524 = new cjs.Shape();
	this.shape_524.graphics.f("#E64A00").s().p("AASBHQgOgFgLgSQgKgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQACgDACgBQAFgDACAAIAKAIQAEAGAEACIAEASQAHAXAKAGIgIgBgAgUgGQgFgDAAgGQAAgFAGgIQAEgHAIgKQAMgSALgGIAHgCIAAAAQgFADgEAIQgHANgDAbQgDACgBAEIgDAEIgHAEIgEAAIgCAAIgEAAg");
	this.shape_524.setTransform(442.7,-128.9);

	this.shape_525 = new cjs.Shape();
	this.shape_525.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_525.setTransform(445.1,-153.3);

	this.shape_526 = new cjs.Shape();
	this.shape_526.graphics.f("#E18F59").s().p("AgBAAIgFgHIABgBIABgBQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAABABIADADIAGADQACAFgDAFIgGgKg");
	this.shape_526.setTransform(440.7,-161.3);

	this.shape_527 = new cjs.Shape();
	this.shape_527.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGgBgHIgCgBIgDgBQgDAAAJgBIACgLIAGgHIAGgFQgGAIAEAKQABAEAAADIgBALQgCAIADAEIgFgDgAgEAPIgPgGQgHgDgEgDIgBgDIAAAAIALAEQgKgFgBgDIAAgCIABgBIAGAEIADACIACAAIgBAAIgGgFQgJgJAHACIAJAFIAFAEQgKgNAAgCQAAgEAJAIIAJAHQADADgIgLIAAgCIAAgBQADgBAEAEIAEAHIAGAKIAEAGQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgDABQgDACAAAHIgBgBg");
	this.shape_527.setTransform(440.5,-160.4);

	this.shape_528 = new cjs.Shape();
	this.shape_528.graphics.f("#4A7328").s().p("AAQBFQgLgFgMgSIgMgRQgGgIAAgEQAAgHAFgCQADgCADAAQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQAEABADADIADADIAEAGQADAbAIAOQADAHAFADIAAAAQgDAAgEgDgAgUgLIgEgDQAAgBgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABgDADgFQAFgKAJgMQALgRAOgFIAIgCQgKAGgHAYIgEARIgIAIIgKAIIgHgDg");
	this.shape_528.setTransform(442.7,-160.5);

	this.shape_529 = new cjs.Shape();
	this.shape_529.graphics.f("#372511").s().p("AgIBEQgGgCgEgHQAJgLADgQQACgEABgGIACgDQACgFACgFQACgGAAgDQAAgHgDgGIgDgIIgCgJQgCgNgGgLIgEgJIAHgEQAFgDAEAEQAGAFAFANQAHASAAAcQAAAcgHAWQgFAOgGAEQgBADgEAAIgEgBg");
	this.shape_529.setTransform(448.7,-160.3);

	this.shape_530 = new cjs.Shape();
	this.shape_530.graphics.f("#000000").s().p("AgSAeQgEgCgDgDQgDgFACgIIABgKQAAgEgBgEQgEgKAGgHIABgBIACgCQAGgDAIgBQAHgBAGACQAGACAGAEIADAEIAFAHQADAHAAAFQAAAFgCAFQgCAGgEAEIgCADQgIAIgLABIgCAAQgKAAgGgCg");
	this.shape_530.setTransform(446.3,-160.5);

	this.shape_531 = new cjs.Shape();
	this.shape_531.graphics.f("#609634").s().p("AgGBIIAAAAIgBAAQgEgDgEgHQgHgOgDgaIAFADQACAEAFABQAGADAMgBQALAAAIgIQgBAGgCAEQgDAQgJALQgDADgGAEQgDAEgCAAIgBAAgAAWgWQgFgFgHgBQgGgDgGABQgIABgGADIgCADIgBAAIgGAEIABgFIADgRQAIgYAKgGIACAAIACACQAHADADAFIAFAJQAGALACANIACAJIgEgDg");
	this.shape_531.setTransform(445.9,-160.5);

	this.shape_532 = new cjs.Shape();
	this.shape_532.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_532.setTransform(445.1,-89.9);

	this.shape_533 = new cjs.Shape();
	this.shape_533.graphics.f("#E18F59").s().p("AgBAAIgFgHIABgBIABgBQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIADAEIAGACQACAFgDAFIgGgKg");
	this.shape_533.setTransform(440.7,-98);

	this.shape_534 = new cjs.Shape();
	this.shape_534.graphics.f("#372511").s().p("AgIBEQgGgCgEgGQAJgMADgPQACgFABgGIACgDQACgFACgFQACgFAAgEQAAgHgDgGIgDgHIgCgKQgCgNgGgLIgEgIQADgEAEgBQAFgDAEAEQAGAFAFANQAHASAAAdQAAAbgHAWQgFAOgGAFQgBACgEAAIgEgBg");
	this.shape_534.setTransform(448.7,-97);

	this.shape_535 = new cjs.Shape();
	this.shape_535.graphics.f("#000000").s().p("AgSAeQgEgCgDgDQgDgGACgIIABgJQAAgEgBgEQgEgKAGgHIABgBIACgCQAGgEAIAAQAHgBAGACQAGACAGAEIADAEIAFAHQADAGAAAGQAAAFgCAFQgCAFgEAFIgCADQgIAIgLAAIgFABQgIAAgFgCg");
	this.shape_535.setTransform(446.3,-97.1);

	this.shape_536 = new cjs.Shape();
	this.shape_536.graphics.f("#6BD3D2").s().p("AgGBIIAAAAIgBAAQgEgDgEgHQgHgPgDgZIAFADQACAEAFABQAGADAMgBQALgBAIgIQgBAHgCAEQgDAQgJALQgDADgGAEQgDAEgCAAIgBAAgAAWgWQgFgFgHgCQgGgCgGABQgIABgGADIgCADIgBAAIgGAEIABgGIADgQQAIgYAKgGIACAAIACACQAHADADAFIAFAIQAGAMACAMIACAKIgEgDg");
	this.shape_536.setTransform(445.9,-97.2);

	this.shape_537 = new cjs.Shape();
	this.shape_537.graphics.f("#5BB1B0").s().p("AAQBGQgLgGgMgSIgMgQQgGgJAAgFQAAgGAFgCIAGgBIAEABIAHAEIADADIAEAHQADAZAIAPQADAHAFADIAAAAQgDAAgEgCgAgUgLIgEgDQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgEADgEQAFgKAJgMQALgRAOgFQAFgCADAAQgKAGgHAYIgEAQIgIAJIgKAIIgHgDg");
	this.shape_537.setTransform(442.7,-97.2);

	this.shape_538 = new cjs.Shape();
	this.shape_538.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGgBgHIgCgBIgDgBQgDgBAJgBIACgKIAGgHIAGgFQgGAIAEAJQABAFAAADIgBAKQgCAIADAGIgFgEgAgEAPIgPgGQgHgDgEgEIgBgCIAAAAIALADQgKgEgBgEIAAgCIABAAIAGAEQAAAAABAAQABABAAAAQAAAAABAAQAAABAAAAIACABIgBgCIgGgFQgJgIAHABIAJAGIAFAEQgKgNAAgCQAAgDAJAHIAJAHQADADgIgLIAAgCIAAgBQADgBAEAEIAEAHIAGAKIAEAGIgEgBIgGABQgDADAAAGIgBgBg");
	this.shape_538.setTransform(440.5,-97.1);

	this.shape_539 = new cjs.Shape();
	this.shape_539.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgCIABgBQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIADADQADADADAAQACAFgDAFIgGgKg");
	this.shape_539.setTransform(440.7,-177.2);

	this.shape_540 = new cjs.Shape();
	this.shape_540.graphics.f("#EEC09E").s().p("AAaAUIgFgFQgDgGAAgIIgDAAIgDgBQgDgBAJgBQAAgGACgEIAHgIIAFgDQgFAHADAJQACAFgBADIgBAKQgBAJACAEIgFgEgAgDAPIgPgGIgLgHIgCgCIABAAIAKAEQgKgGgBgDIABgCIABAAIAFAEIADACIACAAIgBAAIgGgGQgJgIAHABIAJAFQAGAGAAgCQgKgMgBgDQAAgDAKAIIAIAHQAEADgJgMIAAgBIABgBQACgCAEAGIAEAGIAHAJIAEAHIgFgBQgDgBgCACQgEACABAHIgBgBg");
	this.shape_540.setTransform(440.5,-176.3);

	this.shape_541 = new cjs.Shape();
	this.shape_541.graphics.f("#393939").s().p("AAQBGQgLgGgMgTQgIgJgEgHQgGgIAAgFQAAgGAFgCQADgCADAAIAEACIAHAEIADADIAEAGQADAaAHAPQAEAHAFADIAAAAIgHgCgAgUgLIgEgDQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgRAOgGIAIgBQgKAGgHAYIgEAQIgIAJIgKAIQgCAAgFgDg");
	this.shape_541.setTransform(442.7,-176.4);

	this.shape_542 = new cjs.Shape();
	this.shape_542.graphics.f("#FFF6CD").s().p("AgSAeQgFgCgCgEQgDgEABgJIACgKQAAgDgBgEQgEgKAFgHIACgBIACgCQAGgEAIAAQAHgBAGACQAGACAGAFIADACIAFAIQADAGAAAGQAAAFgDAFQgBAGgEAEIgCADQgIAIgLAAIgDAAQgKAAgFgBg");
	this.shape_542.setTransform(446.3,-176.3);

	this.shape_543 = new cjs.Shape();
	this.shape_543.graphics.f("#372511").s().p("AgJBEQgFgCgEgHQAKgLADgPIACgLIACgDQACgEACgGQACgFAAgEQAAgHgDgGIgDgIIgCgJQgBgNgHgLIgEgIQADgEADgBQAHgCADADQAGAFAFANQAGASABAcQAAAdgHAVQgFAOgGAFQgBACgEAAIgFgBg");
	this.shape_543.setTransform(448.7,-176.2);

	this.shape_544 = new cjs.Shape();
	this.shape_544.graphics.f("#424242").s().p("AgFBIIgBAAQgFgDgEgHQgHgPgDgaIAFAEQACADAFACQAHACALAAQALAAAIgJIgDAMQgDAPgJALQgCADgHAEQgCAEgCAAIgBAAgAAXgWQgGgFgGgCQgIgCgFABQgIABgGADIgCACIgCACIgFADIABgGIAEgQQAHgYAKgGIACAAIACABQAHAEAEAFIAEAJQAGALACAMIACAKIgDgDg");
	this.shape_544.setTransform(445.8,-176.4);

	this.shape_545 = new cjs.Shape();
	this.shape_545.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQAAABABAAIADAEQADACADAAQACAFgDAFIgGgKg");
	this.shape_545.setTransform(440.7,-145.6);

	this.shape_546 = new cjs.Shape();
	this.shape_546.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFAAgHIgDgBIgDgBQgDAAAJgCQAAgGACgEIAHgIIAFgDQgFAHADAJQACAFgBADIgBAKQgBAIACAFIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKADQgKgFgBgDIABgCIABAAIAFADIADACIACABIgBgBIgGgFQgJgIAHABQACAAAHAGIAGAEQgKgMgBgEQAAgDAKAIIAIAHQAEACgJgKIAAgCIABgBQACgBAEAFIAEAHIAHAIIAEAHIgFgBIgFABQgEACABAGIgBAAg");
	this.shape_546.setTransform(440.5,-144.6);

	this.shape_547 = new cjs.Shape();
	this.shape_547.graphics.f("#000000").s().p("AgSAeQgFgCgCgDQgDgFABgIIACgKQAAgEgBgEQgEgJAFgIIACgBIACgCQAGgEAIAAQAHgBAGACQAGACAGAFIADADIAFAHQADAGAAAGQAAAFgDAFQgBAGgEAEIgCADQgIAIgLAAIgDAAQgKAAgFgBg");
	this.shape_547.setTransform(446.3,-144.7);

	this.shape_548 = new cjs.Shape();
	this.shape_548.graphics.f("#447BCD").s().p("AAQBGQgLgGgMgSIgMgQQgGgKAAgEQAAgGAFgDIAGgBIAEABIAHAFIADADIAEAHQADAZAHAOQAEAIAFADIAAAAIgHgCgAgUgLIgEgEQAAAAgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIADgHQAFgKAKgLQALgSAOgGIAIgCQgKAHgHAXIgEARIgIAIIgKAJQgCAAgFgDg");
	this.shape_548.setTransform(442.7,-144.7);

	this.shape_549 = new cjs.Shape();
	this.shape_549.graphics.f("#628DD1").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAFACQAHACALgBQALAAAIgIIgDALQgDAPgJAMQgCADgHAEQgDAFgCAAIAAgBgAAXgWQgGgFgGgCQgIgCgFABQgIAAgGAEIgCACIgCABIgFAEIABgGIAEgRQAHgXAKgHIACAAIACACQAHAEAEAFIAEAIQAGALACANIACAKIgDgDg");
	this.shape_549.setTransform(445.8,-144.7);

	this.shape_550 = new cjs.Shape();
	this.shape_550.graphics.f("#372511").s().p("AgJBEQgFgDgEgGQAKgLADgPIACgMIACgCQACgFACgFQACgFAAgEQAAgHgDgGIgDgIIgCgKQgBgMgHgLIgEgJQADgDADgBQAHgDADAEQAGAEAFAOQAGARABAdQAAAcgHAWQgFAOgGAFQgBACgDAAIgGgBg");
	this.shape_550.setTransform(448.7,-144.5);

	this.shape_551 = new cjs.Shape();
	this.shape_551.graphics.f("#E18F59").s().p("AgFAIIgBgBIAFgGIAGgKQADAEgCAGIgGADIgDADQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAg");
	this.shape_551.setTransform(440.7,-270.5);

	this.shape_552 = new cjs.Shape();
	this.shape_552.graphics.f("#EEC09E").s().p("AAaAVIgGgIIgCgKQgJgBADgCIADgBIACAAQABgHADgFIAFgHIAFgDQgDAFACAIIABAJQAAAFgBADQgEAKAGAHIgGgDgAgYAVQAAgEAKgMIgFAEIgJAGQgHABAJgJIAGgEIABgBIgCAAIgDACIgGAEIgBgBIAAgCQABgDAKgEIgLADIAAgBIABgCQAEgDAHgEIAPgFIABgBQAAAHADACIAGABIAEgBIgEAGIgGAKIgEAGQgEAFgDgBIAAgBIAAgCQAIgLgDADIgJAHQgHAFgBAAIgBAAg");
	this.shape_552.setTransform(440.5,-271.4);

	this.shape_553 = new cjs.Shape();
	this.shape_553.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_553.setTransform(445.1,-278.6);

	this.shape_554 = new cjs.Shape();
	this.shape_554.graphics.f("#5BB1B0").s().p("AASBHQgOgFgLgSQgJgMgFgKIgEgIQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAEgEIAHgDIAKAIIAIAJIAEARQAHAYAKAFIgIgBgAgUgHQgFgCAAgHQAAgEAGgIIAMgQQAMgTALgGQAEgCADAAIAAAAQgFADgDAHQgIAPgDAaIgEAGIgDAEIgHADIgEABIgGgBg");
	this.shape_554.setTransform(442.7,-271.3);

	this.shape_555 = new cjs.Shape();
	this.shape_555.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgCgCIgBgBQgGgHAEgKQABgEAAgEIgBgJQgCgIADgGQADgDAEgCQAHgCALAAQALABAIAIIACADIAGAKQACAFAAAEQAAAGgDAHIgFAHIgDAEQgGAEgGACIgIACIgFgBg");
	this.shape_555.setTransform(446.3,-271.4);

	this.shape_556 = new cjs.Shape();
	this.shape_556.graphics.f("#6BD3D2").s().p("AgDBIQgKgGgIgYIgDgRIgBgFIAGAEIABAAIACADQAGADAIABQAGABAGgCQAHgCAFgFIAEgDIgCAKQgCAMgGAMIgFAIQgDAFgHADIgCACIgBAAIgBAAgAgPg9QAEgHAEgDIABAAIAAAAQADgBADAFQAGAEADADQAJALADAQQACAEABAHQgIgIgLgBQgMgBgGADQgFABgCAEIgFADQADgaAHgOg");
	this.shape_556.setTransform(445.9,-271.3);

	this.shape_557 = new cjs.Shape();
	this.shape_557.graphics.f("#372511").s().p("AgIBEQgEgBgDgEIAEgIQAGgLACgNIACgKIADgHQADgHAAgHQAAgDgCgFIgEgKIgCgDQgBgGgCgFQgDgPgJgMQAEgGAGgCQAFgDAEAEQAGAFAFAOQAHAVAAAcQAAAdgHASQgFANgGAFQgBACgDAAIgFgBg");
	this.shape_557.setTransform(448.7,-271.5);

	this.shape_558 = new cjs.Shape();
	this.shape_558.graphics.f("#E18F59").s().p("AgFAIIgBgBIAFgGIAGgKQADAFgCAFIgGACIgDADQgBABAAAAQAAABAAAAQAAABAAAAQAAAAAAABg");
	this.shape_558.setTransform(440.7,-191.3);

	this.shape_559 = new cjs.Shape();
	this.shape_559.graphics.f("#EEC09E").s().p("AAaAUIgGgHIgCgKQgJgCADgBIADgBIACAAQABgHADgGIAFgGIAFgDQgDAFACAIIABAJQAAAEgBAEQgEAKAGAHIgGgEgAgYAUQAAgCAKgNIgFAEIgJAGQgHABAJgJIAGgEIABgCIgCABIgDACIgGAEIgBgBIAAgBQABgEAKgEIgLACIAAAAIABgCQAEgDAHgEQAJgCAGgDIABgBQAAAGADADIAGABIAEgBIgEAGIgGAKIgEAGQgEAFgDgBIAAgBIAAgCQAIgLgDADIgJAHQgHAFgBAAIgBgBg");
	this.shape_559.setTransform(440.5,-192.2);

	this.shape_560 = new cjs.Shape();
	this.shape_560.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgCgCIgBgBQgGgHAEgKQABgEAAgEIgBgJQgCgIADgFQADgEAEgCQAHgCALABQALAAAIAIIACADQAEAFACAFQACAGAAADQAAAHgDAGIgFAHIgDAEQgGAEgGACIgIABIgFAAg");
	this.shape_560.setTransform(446.3,-192.2);

	this.shape_561 = new cjs.Shape();
	this.shape_561.graphics.f("#372511").s().p("AgIBEQgEgBgDgEIAEgIQAGgLACgNIACgKIADgHQADgGAAgIQAAgCgCgGQgCgFgCgFIgCgDQgBgGgCgFQgDgPgJgMQAEgGAGgCQAFgDAEAFQAGAEAFAOQAHAWAAAbQAAAdgHATQgFAMgGAFQgBACgDAAIgFgBg");
	this.shape_561.setTransform(448.7,-192.3);

	this.shape_562 = new cjs.Shape();
	this.shape_562.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_562.setTransform(445.1,-199.4);

	this.shape_563 = new cjs.Shape();
	this.shape_563.graphics.f("#3A4D75").s().p("AASBGQgOgFgLgRQgJgMgFgKQgDgEgBgEQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBIAEgDIAHgDIAKAIIAIAJIAEAQQAHAYAKAGQgDAAgFgCgAgUgGQgFgDAAgGQAAgFAGgJIAMgQQAMgSALgGQAEgCADAAIAAABQgFACgDAHQgIAPgDAZIgEAHIgDADQgDADgEABIgEABIgGAAg");
	this.shape_563.setTransform(442.7,-192.2);

	this.shape_564 = new cjs.Shape();
	this.shape_564.graphics.f("#48608E").s().p("AgDBIQgKgGgIgYIgDgQIgBgGIAGAEIABABIACACQAGADAIABQAGABAGgCQAHgCAFgFIAEgDIgCAKQgCAMgGAMIgFAIQgDAGgHACIgCACIgBAAIgBAAgAgPg9QAEgHAEgCIABAAIAAgBQADgBADAFIAJAHQAJALADAQQACAEABAHQgIgIgLgBQgMAAgGACQgFACgCADIgFADQADgZAHgPg");
	this.shape_564.setTransform(445.9,-192.2);

	this.shape_565 = new cjs.Shape();
	this.shape_565.graphics.f("#E18F59").s().p("AgFAIIgBgBIAFgHIAGgJQADAEgCAGQgDAAgDADIgDADQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgBgCg");
	this.shape_565.setTransform(440.7,-254.7);

	this.shape_566 = new cjs.Shape();
	this.shape_566.graphics.f("#EEC09E").s().p("AAbAUQgEgDgDgEQgCgEAAgHQgJgBADgBIADAAIADgBQAAgHADgGQACgEADgCIAFgDQgCAEABAIIABALQABADgCAEQgDAKAFAHIgFgEgAgYAUQABgDAKgMIgGAEIgJAFQgHABAJgIIAGgFIABgBIgCABIgDADIgFACIgBAAIgBgBQABgEAKgFQgKAEAAgBIgBAAIACgCQADgEAIgDIAPgFIABgBQgBAHAEACQACABADgBIAFAAIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgEADIgIAHQgHAFgCAAIgBgBg");
	this.shape_566.setTransform(440.5,-255.6);

	this.shape_567 = new cjs.Shape();
	this.shape_567.graphics.f("#E64A00").s().p("AASBHQgOgGgLgRQgKgMgFgKIgDgIQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBIAEgDQAFgDACAAIAKAIIAIAIIAEARQAHAYAKAGIgIgBgAgUgHQgFgCAAgGQAAgFAGgIIAMgRQAMgSALgGIAHgCIAAAAQgFADgEAHQgHAOgDAbQgDACgBAEIgDADIgHAEIgEABIgDAAIgDgBg");
	this.shape_567.setTransform(442.7,-255.5);

	this.shape_568 = new cjs.Shape();
	this.shape_568.graphics.f("#41210C").s().p("AgHAfQgIgBgGgDIgCgCIgCgBQgFgHAEgKQABgEAAgDIgCgLQgBgIADgEQACgEAFgCQAHgCALAAQALABAIAIIACADQAEAEABAGQADAFAAAEQAAAGgDAHIgFAHIgDADQgGAFgGACQgGACgDAAIgEgBg");
	this.shape_568.setTransform(446.3,-255.6);

	this.shape_569 = new cjs.Shape();
	this.shape_569.graphics.f("#372511").s().p("AgJBEIgGgFIAEgIQAHgMABgMIACgKIADgHQADgHAAgHQAAgDgCgFQgCgGgCgEIgCgDIgCgLQgDgPgKgLQAEgHAFgCQAHgDADAEQAGAFAFAOQAHAVAAAcQgBAdgGASQgFANgGAEQgCADgEAAIgEgBg");
	this.shape_569.setTransform(448.7,-255.7);

	this.shape_570 = new cjs.Shape();
	this.shape_570.graphics.f("#EC672C").s().p("AgUAqIgEgRIgBgFIAFAEIACABIACACQAGADAIABQAFABAIgDQAGgBAGgFIADgDIgCAJQgCANgGALIgEAIQgEAGgHADIgCACIgCAAQgKgGgHgYgAgPg9QAEgHAFgDIABAAQACgBADAFQAHAEACADQAJAMADAOIADAMQgIgJgLAAQgLgBgHACQgFADgCADIgFAEQADgbAHgOg");
	this.shape_570.setTransform(445.8,-255.5);

	this.shape_571 = new cjs.Shape();
	this.shape_571.graphics.f("#372511").s().p("AgJBEQgDgBgDgDIAEgJQAHgLABgMIACgKIADgIQADgGAAgHQAAgDgCgGQgCgFgCgFIgCgCIgCgMQgDgPgKgLQAEgGAFgDQAHgDADAEQAGAFAFAOQAHAWAAAcQgBAdgGARQgFAOgGAEQgBACgEAAIgFgBg");
	this.shape_571.setTransform(448.7,-239.9);

	this.shape_572 = new cjs.Shape();
	this.shape_572.graphics.f("#E18F59").s().p("AgFAJIgBgCIAFgHIAGgJQADAFgCAFQgDAAgDACIgDAEQgBAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgBgBg");
	this.shape_572.setTransform(440.7,-238.8);

	this.shape_573 = new cjs.Shape();
	this.shape_573.graphics.f("#FFF6CD").s().p("AgHAfQgIAAgGgEIgCgCIgCgBQgFgIAEgJQABgEAAgEIgCgJQgBgJADgEQACgEAFgCQAHgCALABQALAAAIAIIACADQAEAEABAGQADAFAAAEQAAAHgDAGIgFAHIgDADQgGAFgGACIgKABIgDAAg");
	this.shape_573.setTransform(446.3,-239.7);

	this.shape_574 = new cjs.Shape();
	this.shape_574.graphics.f("#EEC09E").s().p("AAbAUIgHgHQgCgEAAgGQgJgCADgBIADAAIADgBQAAgHADgGIAFgGIAFgDQgCAFABAIIABAKQABADgCAEQgDAKAFAHIgFgEgAgYAUQABgCAKgNIgGAEQgHAFgCABQgHABAJgJIAGgFIABgBIgCABIgDADIgFACIgBAAIgBgBQABgEAKgEIgKACIgBAAIACgBQADgEAIgEIAPgFIABgBQgBAHAEACIAFABIAFgBIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgKgEABIgIAIQgHAFgCAAIgBgBg");
	this.shape_574.setTransform(440.5,-239.7);

	this.shape_575 = new cjs.Shape();
	this.shape_575.graphics.f("#424242").s().p("AgDBJQgKgHgHgXIgEgRIgBgGIAFAEIACABIACACQAGAEAIAAQAFABAIgCQAGgCAGgFIADgDIgCAKQgCANgGALIgEAIQgEAFgHAEIgCACgAgPg8QAEgIAFgDIABAAQACgBADAFIAJAHQAJAMADAPIADALQgIgIgLAAQgLgBgHACQgFACgCAEIgFADQADgaAHgOg");
	this.shape_575.setTransform(445.8,-239.7);

	this.shape_576 = new cjs.Shape();
	this.shape_576.graphics.f("#393939").s().p("AASBHQgOgGgLgSQgKgLgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAgBIAEgDQAFgDACABIAKAIIAIAIIAEAQQAHAYAKAHQgEAAgEgCgAgUgGQgFgDAAgGQAAgEAGgKIAMgPQAMgTALgFQADgDAEAAIAAAAQgFADgEAIQgHAOgDAZIgEAHIgDADIgHAFIgEABIgGgBg");
	this.shape_576.setTransform(442.7,-239.7);

	this.shape_577 = new cjs.Shape();
	this.shape_577.graphics.f("#372511").s().p("AgJBEQgDgBgDgDIAEgJQAHgLABgMIACgKIADgIQADgGAAgHQAAgEgCgFQgCgGgCgEIgCgCIgCgMQgDgPgKgLQAEgHAFgCQAHgDADAEQAGAFAFAOQAHAVAAAdQgBAdgGARQgFANgGAFQgBACgEAAIgFgBg");
	this.shape_577.setTransform(448.7,-224);

	this.shape_578 = new cjs.Shape();
	this.shape_578.graphics.f("#E18F59").s().p("AgFAIIgBgBIAFgHIAGgJQADAFgCAEQgDAAgDAEIgDADQgBAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_578.setTransform(440.7,-223);

	this.shape_579 = new cjs.Shape();
	this.shape_579.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgCgCIgCgBQgFgIAEgJQABgFAAgDIgCgKQgBgIADgFQACgDAFgCQAHgCALAAQALAAAIAJIACACQAEAFABAGQADAFAAAEQAAAGgDAHIgFAHIgDADQgGAFgGACIgKACIgDgBg");
	this.shape_579.setTransform(446.3,-223.9);

	this.shape_580 = new cjs.Shape();
	this.shape_580.graphics.f("#EEC09E").s().p("AAbAVIgHgIQgCgEAAgGQgJgCADgBIADAAIADgBQAAgHADgFIAFgHIAFgDQgCAEABAIIABALQABADgCAFQgDAJAFAHIgFgDgAgYAVQABgEAKgMIgGAEIgJAFQgHACAJgIIAGgGIABAAIgCAAIgDADIgFADIgBAAIgBgCQABgEAKgEIgKACIgBAAIACgBQADgEAIgEIAPgFIABgBQgBAHAEACIAFABIAFgBIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgEADIgIAHQgHAGgCAAIgBgBg");
	this.shape_580.setTransform(440.5,-223.9);

	this.shape_581 = new cjs.Shape();
	this.shape_581.graphics.f("#447BCD").s().p("AASBHQgOgFgLgSQgKgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgEQAFgDACAAIAKAIIAIAJIAEARQAHAXAKAGIgIgBgAgUgGQgFgDAAgGQAAgFAGgIQAEgHAIgKQAMgSALgGIAHgCIAAAAQgFADgEAIQgHAOgDAaIgEAGIgDAEIgHAEIgEABIgGgBg");
	this.shape_581.setTransform(442.7,-223.9);

	this.shape_582 = new cjs.Shape();
	this.shape_582.graphics.f("#628DD1").s().p("AgDBIQgKgGgHgXIgEgRIgBgGIAFAEIACABIACACQAGAEAIAAQAFABAIgCQAGgCAGgFIADgDIgCAKQgCANgGALIgEAIQgEAFgHAEIgCABgAgPg8QAEgIAFgDIABAAQACgBADAFQAHAEACADQAJAMADAPIADALQgIgJgLAAQgLAAgHACQgFACgCADIgFAEQADgaAHgOg");
	this.shape_582.setTransform(445.8,-223.9);

	this.shape_583 = new cjs.Shape();
	this.shape_583.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgDgCIAAgBQgGgHAEgKQABgEAAgDIgBgKQgCgIADgFQADgEAEgCQAGgCAMABQALAAAIAIIACADIAGAKIABAJQABAHgEAGQgBAEgDADIgEAEQgFAFgHABQgEACgCAAIgGgBg");
	this.shape_583.setTransform(471.5,-108.5);

	this.shape_584 = new cjs.Shape();
	this.shape_584.graphics.f("#372511").s().p("AgJBEQgDgBgDgEIAEgIQAGgLACgNIACgKQABgDABgEQAEgGgBgIIgBgIIgEgKIgCgDIgDgLQgDgPgJgMQAEgGAFgCQAGgDADAFQAHAEAFAOQAHAWAAAcQAAAcgHATQgFAMgHAFQAAACgEAAIgFgBg");
	this.shape_584.setTransform(473.9,-108.6);

	this.shape_585 = new cjs.Shape();
	this.shape_585.graphics.f("#48608E").s().p("AgDBIQgKgGgHgYQgDgIgBgJIgBgGQACADAEABIAAABIADACQAGAEAIAAQAFACAHgDQAHgBAFgFIAEgEIgCAKQgCANgGALIgEAIQgEAGgHADIgCACIgBAAIgBAAgAgPg9QAEgIAEgCIABAAIABAAQABgBAFAFIAIAGQAJAMADAPIADALQgIgIgLAAQgMgBgGACQgEACgDAEIgFADQACgaAIgOg");
	this.shape_585.setTransform(471,-108.4);

	this.shape_586 = new cjs.Shape();
	this.shape_586.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_586.setTransform(470.2,-115.6);

	this.shape_587 = new cjs.Shape();
	this.shape_587.graphics.f("#3A4D75").s().p("AASBGQgOgFgMgRQgIgMgFgKQgDgFgBgDQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAIAEgDIAHgDIAJAIIAJAIQABAJADAIQAHAYAKAGQgEAAgEgCgAgUgGQgFgEAAgFQAAgFAGgJIALgQQANgSALgGIAGgCIAAABQgEACgEAHQgIAOgCAaIgEAHIgDADIgHAEIgFABIgFAAg");
	this.shape_587.setTransform(467.9,-108.4);

	this.shape_588 = new cjs.Shape();
	this.shape_588.graphics.f("#E18F59").s().p("AgEAIIgCgBIAGgHIAFgIQADAEgCAEIgGADIgDAEQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_588.setTransform(465.8,-107.5);

	this.shape_589 = new cjs.Shape();
	this.shape_589.graphics.f("#EEC09E").s().p("AAbAUQgEgDgDgEIgCgKQgJgBADgCIADAAIACgBQABgHADgGIAGgGIAFgDQgEAFACAIIACAKQAAADgCAEQgDAKAFAHQgDgBgCgDgAgYAUQAAgCALgNIgGAEIgJAGQgHABAJgJIAGgEIABgBIgCAAIgDACIgFAEIgCgBIAAgBQABgEAKgEIgLACIAAAAIACgCQADgDAIgEQAJgCAFgDIACgBQgBAGAEADIAFABIAFgBIgFAGIgGAKIgEAGQgEAFgCgBIgBgBIAAgCQAJgLgEADIgIAHQgHAFgCAAIgBgBg");
	this.shape_589.setTransform(465.6,-108.5);

	this.shape_590 = new cjs.Shape();
	this.shape_590.graphics.f("#E18F59").s().p("AgFAIIgBgBIAGgHIAFgJQADAEgCAFQgDAAgDAEQgCABgBACQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_590.setTransform(465.8,-124.1);

	this.shape_591 = new cjs.Shape();
	this.shape_591.graphics.f("#EEC09E").s().p("AAbAUQgEgDgCgEQgDgEgBgHQgIgBADgBIADAAIACgBQABgHADgFIAFgHIAGgDQgDAEABAIIACALQAAADgBAFQgEAJAFAHIgFgEgAgYAUQAAgDALgMIgGAEIgJAFQgHACAJgIIAGgGIABgBIgBABIgEADIgFADIgBAAIgBgCQACgEAJgEQgJADgBgBIgBAAIACgBQAEgEAHgEIAPgFIABgBQAAAHADACIAFABIAFgBIgFAGIgGAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgDADIgJAHQgHAFgCAAIgBgBg");
	this.shape_591.setTransform(465.6,-125);

	this.shape_592 = new cjs.Shape();
	this.shape_592.graphics.f("#41210C").s().p("AgIAgQgIgBgFgDIgDgDIgBgBQgFgHAEgJQABgFAAgDIgCgLQgBgIADgEQACgEAFgCQAGgCAMAAQALABAIAJIACACQADAEACAGQACAFAAAEQAAAGgDAHQgBAEgDADIgEAEQgFAEgHACQgFACgFAAIgDAAg");
	this.shape_592.setTransform(471.5,-125);

	this.shape_593 = new cjs.Shape();
	this.shape_593.graphics.f("#E64A00").s().p("AASBHQgOgFgMgSQgJgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABgDADgBQAEgDADAAIAJAIQAFAGAEACIAEASQAHAXAKAGIgIgBgAgUgGQgFgDAAgGQAAgFAGgIQADgHAIgKQANgSALgGQADgCADAAIAAAAQgEADgEAIQgIANgDAbIgDAGIgEAEIgGAEIgFAAIgBAAIgEAAg");
	this.shape_593.setTransform(467.9,-125);

	this.shape_594 = new cjs.Shape();
	this.shape_594.graphics.f("#372511").s().p("AgJBEQgDgBgDgEIAFgIQAFgLADgNIABgKQABgDABgEQADgHABgGQgBgEgCgFQgCgGgBgEIgCgCIgDgMQgDgPgJgLQAFgHAEgCQAHgDACAEQAHAFAEAOQAIAVAAAcQAAAdgIASQgEANgHAFQgBACgDAAIgFgBg");
	this.shape_594.setTransform(473.9,-125.1);

	this.shape_595 = new cjs.Shape();
	this.shape_595.graphics.f("#EC672C").s().p("AgUArIgEgSIAAgFIAFAEIABABIADACQAFADAIABQAFABAIgDQAHgBAFgFIADgDIgBAJQgDANgFAMIgFAIQgEAFgGADIgCACIgDAAQgKgGgHgXgAgPg8QAEgIAFgDIABAAQACgBAEAFIAIAHQAJAMAEAPIACALQgIgJgLAAQgLgBgGADQgGACgCADIgFAEQADgbAHgNg");
	this.shape_595.setTransform(470.9,-125);

	this.shape_596 = new cjs.Shape();
	this.shape_596.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_596.setTransform(470.2,-150.7);

	this.shape_597 = new cjs.Shape();
	this.shape_597.graphics.f("#000000").s().p("AgSAeQgEgCgDgEQgDgFACgIIABgJQAAgEgBgEQgEgKAGgHIAAgBIADgCQAGgEAIAAQAHgBAFACQAHACAFAEIAEAEQADADABAEQAEAGgBAGIgBAKIgGAKIgCADQgIAIgLAAIgDAAQgKAAgFgBg");
	this.shape_597.setTransform(471.5,-157.9);

	this.shape_598 = new cjs.Shape();
	this.shape_598.graphics.f("#372511").s().p("AgJBEQgFgCgEgGQAJgMADgPIADgLIACgDIAEgKIABgJQABgHgEgGQgBgEgBgDIgCgKQgCgNgGgLIgEgIQADgEADgBQAGgDADAEQAHAFAFANQAHASAAAdQAAAbgHAWQgFAOgHAFQgBACgDAAIgFgBg");
	this.shape_598.setTransform(473.9,-157.8);

	this.shape_599 = new cjs.Shape();
	this.shape_599.graphics.f("#609634").s().p("AgFBIIgBgBIgBAAQgEgCgEgHQgIgPgCgZIAFADQADADAEACQAGACAMAAQALgBAIgIIgDALQgDAQgJALIgIAHQgEAEgCAAIAAAAgAAWgWQgFgFgHgCQgHgCgFABQgIABgGADIgDADIAAAAQgEACgCACIABgGQABgIADgIQAHgYAKgGIACAAIACACQAHADAEAFIAEAIQAGAMACAMIACAKIgEgDg");
	this.shape_599.setTransform(471,-158);

	this.shape_600 = new cjs.Shape();
	this.shape_600.graphics.f("#EEC09E").s().p("AAbAVIgGgGQgDgGgBgHIgCAAIgDgCQgDAAAJgCIACgKIAHgHQACgDADgBQgFAHADAKQACAEAAAEIgCAJQgCAIAEAFIgFgDgAgEAPIgOgFQgIgEgDgDIgCgDIAAAAIALADQgKgEgBgDIAAgCIACgBIAFAEIADACIACABIgBgCIgGgEQgJgJAHABIAJAGIAGAEQgLgNAAgCQAAgDAKAHIAIAHQAEADgJgLIAAgCIABgBQACgBAEAFIAEAGIAGAKIAFAGIgFgBIgFABQgEADABAGIgCgBg");
	this.shape_600.setTransform(465.6,-157.9);

	this.shape_601 = new cjs.Shape();
	this.shape_601.graphics.f("#4A7328").s().p("AAQBGQgLgGgNgSIgLgQQgGgJAAgFQAAgGAFgCIAFgBIAFABIAHAEIADADIAEAHQACAZAIAPQAEAHAEACIAAABQgCAAgEgCgAgUgLIgEgDQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQABgEADgEIANgWQAMgRAOgFQAEgCAEAAQgKAGgHAYQgDAIgBAIIgJAJIgJAIIgHgDg");
	this.shape_601.setTransform(467.9,-158);

	this.shape_602 = new cjs.Shape();
	this.shape_602.graphics.f("#E18F59").s().p("AAAAAIgGgGIACgCIAAgBQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAIADAEIAGACQACAFgDAFIgFgKg");
	this.shape_602.setTransform(465.8,-158.8);

	this.shape_603 = new cjs.Shape();
	this.shape_603.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_603.setTransform(470.2,-84.7);

	this.shape_604 = new cjs.Shape();
	this.shape_604.graphics.f("#EEC09E").s().p("AAbAVIgGgGQgDgGgBgHIgCAAIgDgCQgDAAAJgCIACgKIAHgIIAFgDQgFAHADAKQACAEAAAEIgCAKQgCAHAEAFIgFgDgAgEAPIgOgFQgIgEgDgDIgCgDIAAAAIALAEQgKgFgBgDIAAgCIACAAIAFADIADACIACAAIgBgBIgGgEQgJgJAHACIAJAFIAGAEQgLgNAAgDQAAgCAKAIIAIAGQAEADgJgLIAAgCIABgBQACgBAEAFIAEAGIAGAKIAFAGQgCgBgDAAIgFABQgEACABAHIgCgBg");
	this.shape_604.setTransform(465.6,-91.8);

	this.shape_605 = new cjs.Shape();
	this.shape_605.graphics.f("#5BB1B0").s().p("AAQBGQgLgGgNgSIgLgRQgGgIAAgEQAAgHAFgCIAFgBQADAAACABIAHAEIADAEIAEAFQACAaAIAPQAEAIAEACIAAAAIgGgCgAgUgLIgEgDQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgDADgFQAFgKAIgMQAMgRAOgGIAIgBQgKAGgHAYQgDAIgBAIIgJAJIgJAIIgHgDg");
	this.shape_605.setTransform(467.9,-91.9);

	this.shape_606 = new cjs.Shape();
	this.shape_606.graphics.f("#E18F59").s().p("AAAAAIgGgHIACgBIAAgBQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAIADADIAGADQACAFgDAFIgFgKg");
	this.shape_606.setTransform(465.8,-92.7);

	this.shape_607 = new cjs.Shape();
	this.shape_607.graphics.f("#000000").s().p("AgSAeQgEgCgDgEQgDgFACgIIABgKQAAgDgBgEQgEgKAGgIIAAAAIADgCQAGgEAIAAQAHgCAFADQAHABAFAFIAEADQADAEABAEQAEAGgBAGIgBAKIgGAKIgCADQgIAIgLAAIgDABQgKAAgFgCg");
	this.shape_607.setTransform(471.5,-91.8);

	this.shape_608 = new cjs.Shape();
	this.shape_608.graphics.f("#372511").s().p("AgJBEQgFgCgEgHQAJgLADgPIADgLIACgDIAEgKIABgJQABgHgEgGQgBgEgBgEIgCgJQgCgNgGgLIgEgIQADgEADgBQAGgDADAEQAHAFAFANQAHASAAAcQAAAcgHAWQgFAOgHAEQgBADgDAAIgFgBg");
	this.shape_608.setTransform(473.9,-91.7);

	this.shape_609 = new cjs.Shape();
	this.shape_609.graphics.f("#6BD3D2").s().p("AgFBIIgBAAIgBAAQgEgCgEgIQgIgOgCgaIAFADQADAEAEACQAGACAMgBQALAAAIgIIgDALQgDAPgJALIgIAHQgEAEgCAAIAAAAgAAWgWQgFgFgHgBQgHgDgFACQgIAAgGAEIgDACIAAAAIgGAEIABgFQABgJADgIQAHgYAKgGIACAAIACACQAHADAEAGIAEAIQAGALACANIACAJIgEgDg");
	this.shape_609.setTransform(471,-91.9);

	this.shape_610 = new cjs.Shape();
	this.shape_610.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFgBgHIgCgBIgDgBQgDAAAIgCQABgGADgEIAGgIIAFgDQgFAHAEAJQABAFAAADIgCALQgBAIADAEIgGgDgAgDAPIgPgFQgHgEgEgEIgCgCIABAAQABAAAJADQgJgEgCgEIABgCIABAAIAFADIAEADIABAAIgBAAIgGgGQgJgIAHACQACAAAHAFIAGAEQgLgMAAgEQAAgDAKAIIAJAHQADADgJgLIAAgBIABgCQACgBAEAFIAEAHIAGAJIAFAGIgFgBIgFABQgDACAAAHIgBgBg");
	this.shape_610.setTransform(465.6,-141.4);

	this.shape_611 = new cjs.Shape();
	this.shape_611.graphics.f("#E18F59").s().p("AAAAAIgGgGIABgBIABgCQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQABACACACQADACADAAQACAGgDAEIgFgKg");
	this.shape_611.setTransform(465.8,-142.3);

	this.shape_612 = new cjs.Shape();
	this.shape_612.graphics.f("#000000").s().p("AgSAeQgFgCgCgDQgDgFABgIIACgKQAAgDgBgFQgEgJAFgIIABgBIADgCQAFgEAIAAQAIgBAFACQAHACAFAFIAEADQADADABAEQADAHAAAFQAAAFgCAFQgCAGgDAFIgCACQgIAJgLAAIgCAAQgLAAgFgCg");
	this.shape_612.setTransform(471.5,-141.5);

	this.shape_613 = new cjs.Shape();
	this.shape_613.graphics.f("#372511").s().p("AgJBEQgEgCgFgHQAJgLADgPIADgMIACgCQABgEACgGQACgFABgEQgBgHgDgGQgBgEgBgEIgBgKQgDgMgFgLIgFgJQADgDADgBQAHgDACAEQAHAFAEANQAIARAAAdQAAAdgIAVQgEAOgHAFQAAACgEAAIgFgBg");
	this.shape_613.setTransform(473.9,-141.3);

	this.shape_614 = new cjs.Shape();
	this.shape_614.graphics.f("#628DD1").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAGACQAGACALAAQALAAAIgJIgCALQgEAPgJAMIgIAHQgEAEgBAAIgBAAgAAXgWQgFgFgHgCQgIgCgFABQgIAAgFAEIgDACIgBABIgFAEIAAgGIAEgRQAHgXAKgGIADAAIACABQAGAEAEAFIAFAIQAFALADANIABAKIgDgDg");
	this.shape_614.setTransform(470.9,-141.5);

	this.shape_615 = new cjs.Shape();
	this.shape_615.graphics.f("#447BCD").s().p("AAQBGQgLgGgNgSQgIgKgDgHQgGgIAAgFQAAgGAFgDIAFgBIAFABIAGAEIAEAEIADAGQADAaAIAOQAEAIAEADIAAAAQgDAAgDgCgAgUgLQgDgCgBgCQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIADgHQAFgKAJgMQAMgSAOgFIAIgBQgKAGgHAXIgEARIgJAJIgJAIQgDAAgEgDg");
	this.shape_615.setTransform(467.9,-141.5);

	this.shape_616 = new cjs.Shape();
	this.shape_616.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgDgCIAAgBQgGgHAEgKQABgEAAgEIgBgKQgCgIADgFQADgDAEgCQAGgCAMAAQALABAIAIIACADIAGAKIABAJQABAGgEAHQgBAEgDADIgEAEQgFAEgHACQgFACgDAAIgEgBg");
	this.shape_616.setTransform(471.5,-207.6);

	this.shape_617 = new cjs.Shape();
	this.shape_617.graphics.f("#372511").s().p("AgJBEQgDgBgDgEIAEgIQAGgLACgNIACgJQABgEABgEQAEgHgBgHIgBgIIgEgKIgCgCIgDgLQgDgQgJgLQAEgHAFgCQAGgDADAFQAHAEAFAOQAHAVAAAdQAAAcgHASQgFANgHAFQgBACgDAAIgFgBg");
	this.shape_617.setTransform(473.9,-207.7);

	this.shape_618 = new cjs.Shape();
	this.shape_618.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_618.setTransform(470.2,-214.8);

	this.shape_619 = new cjs.Shape();
	this.shape_619.graphics.f("#609634").s().p("AgDBIQgKgGgHgYQgDgIgBgJIgBgFIAGAEIAAAAIADADQAGADAIABQAFABAHgDQAHgBAFgFIAEgDIgCAJQgCANgGAMIgEAIQgEAFgHADIgCACIgBAAIgBAAgAgPg9QAEgHAEgDIABAAIABAAQABgBAFAFIAIAHQAJALADAQIADALQgIgJgLAAQgMgBgGADQgEABgDAEIgFADQACgaAIgOg");
	this.shape_619.setTransform(471,-207.5);

	this.shape_620 = new cjs.Shape();
	this.shape_620.graphics.f("#4A7328").s().p("AASBHQgOgGgMgRQgIgMgFgKQgDgEgBgEQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAIAEgEIAHgDIAJAIIAJAJQABAIADAJQAHAXAKAGIgIgBgAgUgHQgFgCAAgHQAAgEAGgIIALgQQANgTALgGQAEgCACAAIAAABQgEACgEAHQgIAPgCAZIgEAHIgDADIgHAEQgCACgDgBIgFgBg");
	this.shape_620.setTransform(467.9,-207.5);

	this.shape_621 = new cjs.Shape();
	this.shape_621.graphics.f("#E18F59").s().p("AgEAJIgCgBIAGgHIAFgKQADAFgCAFIgGADIgDADQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAABg");
	this.shape_621.setTransform(465.8,-206.7);

	this.shape_622 = new cjs.Shape();
	this.shape_622.graphics.f("#EEC09E").s().p("AAbAVIgHgIIgCgKQgJgBADgCIADgBIACAAQABgHADgFIAGgHIAFgDQgEAEACAIIACAKQAAAEgCAEQgDAKAFAHIgFgDgAgYAVQAAgEALgMIgGAEIgJAFQgHACAJgJIAGgEIABgBIgCAAIgDADIgFADIgCgBIAAgCQABgDAKgEIgLACIAAAAIACgCQADgDAIgEIAOgFIACgBQgBAGAEACIAFACQADAAACgCIgFAHIgGAJIgEAHQgEAFgCgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgBQAJgLgEADIgIAHQgHAFgCAAIgBAAg");
	this.shape_622.setTransform(465.6,-207.6);

	this.shape_623 = new cjs.Shape();
	this.shape_623.graphics.f("#E18F59").s().p("AgEAIIgCgBIAGgHIAFgJQADAEgCAFIgGADIgDADQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_623.setTransform(465.8,-190.1);

	this.shape_624 = new cjs.Shape();
	this.shape_624.graphics.f("#EEC09E").s().p("AAbAUIgHgHIgCgKQgJgCADgBIADgBIACAAQABgHADgGIAGgGIAFgDQgEAFACAIIACAJQAAAEgCAFQgDAJAFAHQgDgBgCgDgAgYAUQAAgCALgNIgGAEIgJAGQgHABAJgIIAGgFIABgBIgCAAIgDACIgFAEIgCAAIAAgDQABgDAKgEIgLADIAAgBIACgCQADgDAIgDQAJgDAFgDIACAAQgBAFAEAEIAFAAIAFgBIgFAGIgGAKIgEAHQgEAEgCgBIgBgBIAAgCQAJgLgEADIgIAHQgHAFgCAAIgBgBg");
	this.shape_624.setTransform(465.6,-191.1);

	this.shape_625 = new cjs.Shape();
	this.shape_625.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgDgCIAAgBQgGgHAEgKQABgEAAgEIgBgJQgCgIADgGQADgDAEgCQAGgCAMABQALAAAIAIIACADIAGAKIABAJQABAHgEAGQgBAEgDADIgEAEQgFAEgHACIgHABIgFAAg");
	this.shape_625.setTransform(471.5,-191.1);

	this.shape_626 = new cjs.Shape();
	this.shape_626.graphics.f("#372511").s().p("AgJBEQgDgBgDgEIAEgIQAGgLACgNIACgKQABgDABgEQAEgGgBgIIgBgIIgEgKIgCgDIgDgLQgDgPgJgMQAEgGAFgCQAGgDADAEQAHAFAFAOQAHAWAAAbQAAAdgHATQgFAMgHAFQAAACgEAAIgFgBg");
	this.shape_626.setTransform(473.9,-191.2);

	this.shape_627 = new cjs.Shape();
	this.shape_627.graphics.f("#3A4D75").s().p("AASBGQgOgFgMgRIgNgWQgDgEgBgEQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBIAEgDIAHgDIAJAIIAJAJQABAIADAIQAHAYAKAGQgEAAgEgCgAgUgGQgFgDAAgGQAAgFAGgJIALgQQANgSALgGQAEgCACAAIAAABQgEACgEAHQgIAPgCAZIgEAHIgDADIgHAEIgFABIgFAAg");
	this.shape_627.setTransform(467.9,-191);

	this.shape_628 = new cjs.Shape();
	this.shape_628.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_628.setTransform(470.2,-198.2);

	this.shape_629 = new cjs.Shape();
	this.shape_629.graphics.f("#48608E").s().p("AgDBIQgKgGgHgYQgDgIgBgIIgBgGQACACAEACIAAAAIADADQAGADAIABQAFABAHgCQAHgCAFgFIAEgDIgCAKQgCAMgGAMIgEAIQgEAGgHACIgCACIgBAAIgBAAgAgPg9QAEgHAEgCIABAAIABgBQABgBAFAFIAIAHQAJALADAQIADALQgIgIgLgBQgMAAgGACQgEACgDADIgFADQACgZAIgPg");
	this.shape_629.setTransform(471,-191);

	this.shape_630 = new cjs.Shape();
	this.shape_630.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_630.setTransform(456.8,-135.9);

	this.shape_631 = new cjs.Shape();
	this.shape_631.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGgBgHIgCAAIgDgCQgDAAAJgCQAAgGACgEQACgEAEgDIAGgEQgGAHAEAKQABAEAAAEIgBAJQgCAIADAFIgFgDgAgEAPIgPgFQgHgEgEgDIgBgDIAAAAIALADQgKgEgBgDIAAgCIABgBIAGAEIADACIACABIgBgCIgGgEQgJgJAHABIAJAGIAFAEQgKgNAAgCQAAgDAJAHIAJAHQADADgIgLIAAgCIAAgBQADgBAEAFIAEAHIAGAJIAEAGIgEgBIgFABQgEADAAAGIgBgBg");
	this.shape_631.setTransform(452.2,-143.1);

	this.shape_632 = new cjs.Shape();
	this.shape_632.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgCIABgBQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADAEIAGACQACAFgDAFIgGgKg");
	this.shape_632.setTransform(452.4,-144);

	this.shape_633 = new cjs.Shape();
	this.shape_633.graphics.f("#000000").s().p("AgSAeQgEgCgDgEQgDgFACgIIABgJQAAgEgBgEQgEgKAGgHIABgBIADgCQAFgEAIAAQAHgBAGACQAHACAFAEIADAEIAFAHQADAGAAAGQAAAEgCAGQgCAFgEAFIgCADQgIAIgLAAIgDAAQgKAAgFgBg");
	this.shape_633.setTransform(458,-143.1);

	this.shape_634 = new cjs.Shape();
	this.shape_634.graphics.f("#6BD3D2").s().p("AgGBIIAAgBIAAAAQgFgCgEgHQgHgPgDgZIAFADQACADAFACQAGACAMAAQALgBAIgIIgDALQgDAQgJALQgDADgGAEQgDAEgCAAIgBAAgAAWgWQgEgFgIgCQgGgCgGABQgIABgFADIgDADIgBAAIgGAEIABgGIADgQQAIgYAKgGIACAAIACACQAHADADAFIAFAIQAGAMACAMIACAKIgEgDg");
	this.shape_634.setTransform(457.6,-143.2);

	this.shape_635 = new cjs.Shape();
	this.shape_635.graphics.f("#372511").s().p("AgIBEQgGgCgEgGQAJgMAEgPIACgLIACgDQACgFACgFQACgGAAgDQAAgHgDgGIgDgHIgCgKQgCgNgGgLIgEgIQADgEAEgBQAFgDAEAEQAGAFAFANQAHASAAAdQAAAbgHAWQgFAOgGAFQgBACgEAAIgEgBg");
	this.shape_635.setTransform(460.4,-143);

	this.shape_636 = new cjs.Shape();
	this.shape_636.graphics.f("#5BB1B0").s().p("AAQBGQgLgGgMgSIgMgQQgGgJAAgFQAAgGAGgCIAFgBIAEABQAEABADADIADADIAEAHQADAZAIAPQADAHAFACIAAABQgDAAgEgCgAgTgLIgEgDQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQABgEADgEQAFgKAJgMQALgRAOgFQAFgCADAAQgKAGgHAYIgEAQIgIAJIgKAIIgGgDg");
	this.shape_636.setTransform(454.4,-143.2);

	this.shape_637 = new cjs.Shape();
	this.shape_637.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_637.setTransform(456.8,-70.9);

	this.shape_638 = new cjs.Shape();
	this.shape_638.graphics.f("#372511").s().p("AgIBEQgGgCgEgGQAJgMAEgPIACgLIACgDQACgFACgFQACgGAAgDQAAgHgDgGIgDgHIgCgKQgCgNgGgLIgEgIQADgEAEgBQAFgDAEAEQAGAFAFANQAHASAAAdQAAAbgHAWQgFAOgGAEQgBADgEAAIgEgBg");
	this.shape_638.setTransform(460.4,-78);

	this.shape_639 = new cjs.Shape();
	this.shape_639.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgCIABgBQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADAEIAGACQACAFgDAFIgGgKg");
	this.shape_639.setTransform(452.4,-79);

	this.shape_640 = new cjs.Shape();
	this.shape_640.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGgBgHIgCAAIgDgCQgDAAAJgCQAAgGACgEQACgEAEgDIAGgEQgGAHAEAKQABAEAAAEIgBAJQgCAIADAFIgFgDgAgEAPIgPgFQgHgEgEgDIgBgDIAAAAIALADQgKgEgBgEIAAgBIABgBIAGAEIADACIACABIgBgCIgGgEQgJgJAHABIAJAGIAFAEQgKgNAAgCQAAgDAJAHIAJAHQADADgIgLIAAgCIAAgBQADgBAEAFIAEAGIAGAKIAEAGIgEgBIgFABQgEADAAAGIgBgBg");
	this.shape_640.setTransform(452.2,-78.1);

	this.shape_641 = new cjs.Shape();
	this.shape_641.graphics.f("#4A7328").s().p("AAQBGQgLgGgMgSIgMgQQgGgJAAgFQAAgGAGgCIAFgBIAEABQAEABADADIADADIAEAHQADAZAIAPQADAHAFACIAAABQgDAAgEgCgAgTgLIgEgDQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQABgEADgEQAFgKAJgMQALgRAOgFQAFgCADAAQgKAGgHAYIgEAQIgIAJIgKAIIgGgDg");
	this.shape_641.setTransform(454.4,-78.2);

	this.shape_642 = new cjs.Shape();
	this.shape_642.graphics.f("#609634").s().p("AgGBIIAAgBIAAAAQgFgCgEgHQgHgPgDgZIAFADQACADAFACQAGACAMAAQALgBAIgIIgDALQgDAQgJALIgJAHQgDAEgCAAIgBAAgAAWgWQgEgFgIgCQgGgCgGABQgIABgFADIgDACIgBABIgGAEIABgGIADgQQAIgYAKgGIACAAIACACQAHADADAFIAFAIQAGAMACAMIACAKIgEgDg");
	this.shape_642.setTransform(457.6,-78.2);

	this.shape_643 = new cjs.Shape();
	this.shape_643.graphics.f("#000000").s().p("AgSAeQgEgCgDgEQgDgFACgIIABgJQAAgEgBgEQgEgKAGgHIABgBIADgCQAFgEAIAAQAHgBAGACQAHACAFAEIADAEIAFAHQADAGAAAGQAAAEgCAGQgCAFgEAFIgCADQgIAIgLAAIgDAAQgKAAgFgBg");
	this.shape_643.setTransform(458,-78.1);

	this.shape_644 = new cjs.Shape();
	this.shape_644.graphics.f("#372511").s().p("AgJBEQgFgDgEgFQAKgMADgPIACgLIACgDQACgFACgFQACgGAAgDQAAgHgDgHIgDgGIgCgKQgBgNgHgLIgEgIQADgEADgBQAHgDADAFQAGAEAFANQAGASABAdQAAAbgHAWQgFAOgGAFQgBACgEAAIgFgBg");
	this.shape_644.setTransform(460.4,-175.4);

	this.shape_645 = new cjs.Shape();
	this.shape_645.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAQABACACACQADACADAAQACAGgDAEIgGgKg");
	this.shape_645.setTransform(452.4,-176.4);

	this.shape_646 = new cjs.Shape();
	this.shape_646.graphics.f("#E64A00").s().p("AAQBGQgLgGgMgSIgMgRQgGgIAAgFQAAgGAGgCQACgBADAAIAEABIAHAEIADADQABAEADACQADAbAHAOQAEAHAFADIAAAAIgHgCgAgTgLQgDgBgBgCQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgRAOgGIAIgBQgKAGgHAYIgEARIgIAIIgKAIQgCAAgEgDg");
	this.shape_646.setTransform(454.4,-175.6);

	this.shape_647 = new cjs.Shape();
	this.shape_647.graphics.f("#EC672C").s().p("AgFBIIgBAAQgFgDgEgHQgHgOgDgbIAFAEQACADAFADQAHACALgBQALAAAIgJIgCAMQgEAPgJALIgJAHQgCAEgCAAIgBAAgAAXgWQgFgEgHgCQgIgCgFAAQgIABgFADIgDACIgCACIgFAEIABgGIAEgRQAHgYAKgGIACAAIACACQAHADAEAGIAEAIQAGALACANIACAKIgDgEg");
	this.shape_647.setTransform(457.5,-175.6);

	this.shape_648 = new cjs.Shape();
	this.shape_648.graphics.f("#41210C").s().p("AgSAeQgFgDgCgDQgDgEABgJIACgKQAAgDgBgFQgEgJAFgHIACgCIADgBQAFgDAIgCQAHAAAGACQAHACAFAEIADAEIAFAGQADAHAAAGQAAAEgDAGQgBAFgEAFIgCADQgIAIgLABIgDAAQgKAAgFgCg");
	this.shape_648.setTransform(458,-175.5);

	this.shape_649 = new cjs.Shape();
	this.shape_649.graphics.f("#EEC09E").s().p("AAaAUQgDgCgCgDQgDgGAAgIIgDAAIgDgBQgDgBAJAAQAAgHADgFQACgEAEgCIAFgEQgFAHADAJQACAFgBADIgBAKQgBAJACAEIgFgEgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKADQgKgEgBgEIABgCIABAAIAFADIADADIACABIgBgBIgGgGQgJgHAHAAIAJAGQAGAEAAgBQgKgMgBgCQAAgEAKAIIAIAHQAEACgJgKIAAgBIABgCQACgCAEAGIAEAHIAHAIIAEAHIgFAAQgDgBgCABQgEACABAHIgBgBg");
	this.shape_649.setTransform(452.2,-175.5);

	this.shape_650 = new cjs.Shape();
	this.shape_650.graphics.f("#E18F59").s().p("AgFAJIgBgCIAFgHIAGgJQADAFgCAFQgDAAgDACIgDAEQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIgBgBg");
	this.shape_650.setTransform(452.4,-255.6);

	this.shape_651 = new cjs.Shape();
	this.shape_651.graphics.f("#FFF6CD").s().p("AgHAfQgIAAgFgEIgDgCIgCgBQgFgIAEgJQABgEAAgEIgCgJQgBgJADgEQACgEAFgCQAHgCALABQALAAAIAIIACADQAEAEABAGQADAFAAAEQAAAHgDAGIgFAHIgDADQgFAFgHACIgKABIgDAAg");
	this.shape_651.setTransform(458,-256.5);

	this.shape_652 = new cjs.Shape();
	this.shape_652.graphics.f("#EEC09E").s().p("AAbAUQgEgDgCgEQgDgEAAgGQgJgCADgBIADAAIADgBQAAgHADgGIAFgGIAFgDQgCAFABAIIABAKQABADgCAFQgDAJAFAHIgFgEgAgYAUQABgCAKgNIgGAEQgHAGgCAAQgHABAJgIIAGgGIABgBIgCABIgDADIgFADIgBAAIgBgCQABgEAKgEIgKACIgBAAIACgBQADgEAIgEIAPgFIABgBQgBAGAEADIAFABIAFgBIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgKgEABIgIAIQgHAFgCAAIgBgBg");
	this.shape_652.setTransform(452.2,-256.5);

	this.shape_653 = new cjs.Shape();
	this.shape_653.graphics.f("#393939").s().p("AASBGQgOgFgLgRQgKgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABgBIAEgDQAEgCACAAIAKAIIAIAIIAEAQQAHAYAKAHQgEAAgEgDgAgTgGQgGgDAAgGQAAgEAGgKIAMgQQAMgSALgFQADgDAEgBIAAABQgFADgEAIQgHAOgDAZIgEAHIgDADIgHAFIgEABIgFgBg");
	this.shape_653.setTransform(454.4,-256.4);

	this.shape_654 = new cjs.Shape();
	this.shape_654.graphics.f("#424242").s().p("AgDBJQgKgHgHgXIgEgRIgBgGIAFAEIACABIADACQAFAEAIAAQAFABAIgCQAHgCAFgFIADgDIgCAKQgCANgGALIgEAIQgEAFgHAEIgCACgAgPg8QAEgIAFgDIABAAQACgBADAFIAJAHQAJAMAEAPIACALQgIgIgLAAQgLgBgHACQgFACgCAEIgFADQADgaAHgOg");
	this.shape_654.setTransform(457.5,-256.5);

	this.shape_655 = new cjs.Shape();
	this.shape_655.graphics.f("#372511").s().p("AgJBEQgDgBgDgDIAEgJQAHgLABgMIACgKIADgIQADgGAAgHQAAgDgCgGQgCgFgCgFIgCgCIgCgMQgDgPgKgLQAEgGAFgDQAHgDADAEQAGAFAFAOQAHAWAAAcQgBAdgGARQgFAOgGAEQgBACgEAAIgFgBg");
	this.shape_655.setTransform(460.4,-256.6);

	this.shape_656 = new cjs.Shape();
	this.shape_656.graphics.f("#372511").s().p("AgJBEQgFgCgEgHQAKgLADgPIACgLIACgDQACgEACgGQACgFAAgEQAAgHgDgGIgDgIIgCgJQgBgNgHgLIgEgJQADgDADgBQAHgCADADQAGAFAFANQAGASABAcQAAAdgHAVQgFAOgGAFQgBACgDAAIgGgBg");
	this.shape_656.setTransform(460.4,-272.5);

	this.shape_657 = new cjs.Shape();
	this.shape_657.graphics.f("#000000").s().p("AgSAeQgFgCgCgDQgDgFABgIIACgKQAAgDgBgFQgEgJAFgIIACgBIADgCQAFgDAIgBQAHgBAGACQAHACAFAFIADADIAFAHQADAHAAAFQAAAFgDAFQgBAGgEAFIgCACQgIAJgLAAIgCAAQgKAAgGgCg");
	this.shape_657.setTransform(458,-272.6);

	this.shape_658 = new cjs.Shape();
	this.shape_658.graphics.f("#628DD1").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAFACQAHACALAAQALAAAIgJIgCALQgEAPgJAMQgCADgHAEQgDAEgCAAIAAAAgAAXgWQgFgFgHgCQgIgCgFABQgIABgFADIgDACIgCABIgFAEIABgGIAEgRQAHgXAKgGIACAAIACABQAHAEAEAFIAEAJQAGAKACANIACAKIgDgDg");
	this.shape_658.setTransform(457.5,-272.6);

	this.shape_659 = new cjs.Shape();
	this.shape_659.graphics.f("#447BCD").s().p("AAQBGQgLgGgMgSQgIgKgEgHQgGgIAAgFQAAgGAGgCQACgCADAAIAEACIAHAEIADADIAEAGQADAaAHAOQAEAIAFADIAAAAIgHgCgAgTgLQgDgCgBgCQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgRAOgGIAIgBQgKAGgHAXIgEARIgIAJIgKAIQgCAAgEgDg");
	this.shape_659.setTransform(454.4,-272.6);

	this.shape_660 = new cjs.Shape();
	this.shape_660.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQABACACABQADADADAAQACAFgDAFIgGgKg");
	this.shape_660.setTransform(452.4,-273.5);

	this.shape_661 = new cjs.Shape();
	this.shape_661.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFAAgHIgDgBIgDgBQgDAAAJgCQAAgGADgEQACgEAEgEIAFgDQgFAHADAKQACAEgBADIgBALQgBAIACAEIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKAEQgKgFgBgEIABgBQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAFACIADADIACAAIgBAAIgGgFQgJgJAHACIAJAFIAGAEQgKgMgBgEQAAgDAKAIIAIAHQAEADgJgLIAAgBIABgCQACgBAEAFIAEAHIAHAJIAEAGIgFgBQgDAAgCABQgEACABAHIgBgBg");
	this.shape_661.setTransform(452.2,-272.6);

	this.shape_662 = new cjs.Shape();
	this.shape_662.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_662.setTransform(456.8,-233);

	this.shape_663 = new cjs.Shape();
	this.shape_663.graphics.f("#EEC09E").s().p("AAaAVQgDgCgCgEQgDgGgBgHIgCgBIgDgBQgDgBAJAAQAAgHACgEQACgEAEgDIAGgFQgGAIAEAKQABAEAAADIgBAKQgCAJADAFIgFgEgAgEAQIgPgHQgHgDgEgDIgBgDIAAAAIALAEQgKgFgBgEIAAgBIABgBIAGAEIADACIACABIgBgBIgGgFQgJgJAHABIAJAGIAFAEQgKgNAAgCQAAgDAJAHIAJAHQADADgIgLIAAgCIAAAAQADgCAEAEIAEAHIAGAJIAEAHQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgFABQgEADAAAGIgBAAg");
	this.shape_663.setTransform(452.2,-240.2);

	this.shape_664 = new cjs.Shape();
	this.shape_664.graphics.f("#E18F59").s().p("AgBAAIgFgHIABgBIABgBQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAAAIADAEIAGACQACAGgDADIgGgJg");
	this.shape_664.setTransform(452.4,-241.1);

	this.shape_665 = new cjs.Shape();
	this.shape_665.graphics.f("#000000").s().p("AgSAeQgEgCgDgEQgDgFACgIIABgKQAAgDgBgEQgEgKAGgIIABAAIADgCQAFgEAIAAQAHgCAGADQAHABAFAFIADADIAFAIQADAGAAAGQAAAEgCAGQgCAFgEAFIgCADQgIAIgLAAIgDABQgKAAgFgCg");
	this.shape_665.setTransform(458,-240.2);

	this.shape_666 = new cjs.Shape();
	this.shape_666.graphics.f("#3A4D75").s().p("AAQBGQgLgGgMgSIgMgQQgGgJAAgFQAAgGAGgDIAFgBQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQAEABADADIADADQABAEADACQADAbAIAOQADAHAFADIAAAAQgDAAgEgCgAgTgLIgEgDQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgEADgEQAFgKAJgMQALgRAOgFIAIgCQgKAGgHAYIgEARIgIAIIgKAIIgGgDg");
	this.shape_666.setTransform(454.4,-240.2);

	this.shape_667 = new cjs.Shape();
	this.shape_667.graphics.f("#48608E").s().p("AgGBIIAAAAIAAAAQgFgCgEgIQgHgOgDgaIAFADQACAEAFACQAGACAMgBQALAAAIgIIgDALQgDAPgJALQgDADgGAEQgDAEgCAAIgBAAgAAWgWQgEgFgIgBQgGgDgGACQgIAAgFAEIgDACIgBAAIgGAEIABgFIADgRQAIgYAKgGIACAAIACACQAHADADAGIAFAIQAGALACANIACAJIgEgDg");
	this.shape_667.setTransform(457.6,-240.3);

	this.shape_668 = new cjs.Shape();
	this.shape_668.graphics.f("#372511").s().p("AgIBEQgGgCgEgHQAJgLAEgPIACgLIACgDQACgFACgFQACgGAAgDQAAgHgDgGIgDgIIgCgJQgCgNgGgLIgEgIQADgEAEgBQAFgDAEAEQAGAFAFAMQAHATAAAcQAAAcgHAWQgFAOgGAEQgCADgDAAIgEgBg");
	this.shape_668.setTransform(460.4,-240.1);

	this.shape_669 = new cjs.Shape();
	this.shape_669.graphics.f("#372511").s().p("AgJBEQgFgCgEgHQAKgLADgPIACgMIACgCQACgFACgFQACgFAAgEQAAgHgDgGIgDgHIgCgKQgBgNgHgLIgEgIQADgEADgBQAHgDADAEQAGAFAFANQAGASABAdQAAAbgHAWQgFAOgGAFQgBACgDAAIgGgBg");
	this.shape_669.setTransform(460.4,-223.9);

	this.shape_670 = new cjs.Shape();
	this.shape_670.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAQABACACABQADADADAAQACAGgDAEIgGgKg");
	this.shape_670.setTransform(452.4,-224.9);

	this.shape_671 = new cjs.Shape();
	this.shape_671.graphics.f("#E64A00").s().p("AAQBGQgLgFgMgTIgMgRQgGgIAAgFQAAgGAGgCQACgCADABIAEABIAHADIADAEQABAEADACQADAaAHAPQAEAHAFADIAAAAIgHgCgAgTgLQgDgBgBgDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgLQALgTAOgFIAIgBQgKAGgHAXIgEARQgEADgEAGIgKAIQgCAAgEgDg");
	this.shape_671.setTransform(454.4,-224.1);

	this.shape_672 = new cjs.Shape();
	this.shape_672.graphics.f("#41210C").s().p("AgSAeQgFgDgCgDQgDgFABgIIACgKQAAgDgBgFQgEgJAFgHIACgBIADgDQAFgDAIgBQAHAAAGACQAHACAFAEIADAEIAFAHQADAGAAAGQAAAFgDAFQgBAFgEAFIgCACQgIAJgLABIgCAAQgKAAgGgCg");
	this.shape_672.setTransform(458,-224);

	this.shape_673 = new cjs.Shape();
	this.shape_673.graphics.f("#EC672C").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAFACQAHADALgBQALgBAIgIIgCALQgEAPgJAMQgCADgHAEQgDAFgCAAIAAgBgAAXgWQgFgFgHgCQgIgCgFABQgIABgFADIgDACIgCABIgFAEIABgGIAEgRQAHgXAKgHIACABIACACQAHADAEAFIAEAIQAGAMACAMIACAKIgDgDg");
	this.shape_673.setTransform(457.5,-224.1);

	this.shape_674 = new cjs.Shape();
	this.shape_674.graphics.f("#EEC09E").s().p("AAaAVQgDgDgCgEQgDgFAAgHIgDgBIgDgBQgDAAAJgBQAAgHADgEQACgEAEgDIAFgEQgFAHADAJQACAFgBADIgBAKQgBAIACAFIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKADQgKgEgBgEIABgCIABAAIAFADIADADIACABIgBgBIgGgGQgJgIAHABIAJAGIAGAEQgKgMgBgDQAAgEAKAIIAIAHQAEACgJgKIAAgCIABgBQACgBAEAFIAEAHIAHAJIAEAGIgFgBQgDAAgCABQgEACABAGIgBAAg");
	this.shape_674.setTransform(452.2,-224);

	this.shape_675 = new cjs.Shape();
	this.shape_675.graphics.f("#E18F59").s().p("AgFAJIgBgCIAFgGIAGgKQADAFgCAFIgGACIgDAEQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABg");
	this.shape_675.setTransform(452.4,-190.9);

	this.shape_676 = new cjs.Shape();
	this.shape_676.graphics.f("#EEC09E").s().p("AAaAVQgEgEgCgEQgCgEAAgGQgJgBADgCIADgBIACgBQABgGADgGQACgDADgDIAFgDQgDAFACAHIABAKQAAAEgBAEQgEAKAGAHIgGgDgAgYAVQAAgEAKgMIgFAEIgJAFQgHABAJgIIAGgEIABgBIgCAAIgDACIgGADIgBAAIAAgCQABgDAKgFIgLADIAAAAIABgCQAEgDAHgEIAPgFIABgBQAAAGAEADIAFABIAEgBIgEAGIgGAKIgEAGQgEAFgDgBIAAgBIAAgCQAIgLgDADIgJAGQgHAGgCAAIAAAAg");
	this.shape_676.setTransform(452.2,-191.7);

	this.shape_677 = new cjs.Shape();
	this.shape_677.graphics.f("#000000").s().p("AgHAfQgIAAgFgEIgDgCIgBAAQgGgIAEgKQABgEAAgDIgBgKQgCgIADgFQADgEAEgCQAHgCALABQALAAAIAIIACADQAEAFACAFQACAGAAADQAAAHgDAGIgFAIIgDADQgFAFgHABQgFACgCAAIgGgBg");
	this.shape_677.setTransform(458,-191.8);

	this.shape_678 = new cjs.Shape();
	this.shape_678.graphics.f("#372511").s().p("AgIBEQgEgBgDgEIAEgIQAGgLACgNIACgJIADgIQADgGAAgIQAAgCgCgGQgCgFgCgFIgCgDIgCgLQgEgPgJgMQAEgGAGgCQAFgDAEAFQAGAEAFAOQAHAWAAAcQAAAcgHASQgFANgGAFQgBACgDAAIgFgBg");
	this.shape_678.setTransform(460.4,-191.9);

	this.shape_679 = new cjs.Shape();
	this.shape_679.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_679.setTransform(456.8,-198.9);

	this.shape_680 = new cjs.Shape();
	this.shape_680.graphics.f("#4A7328").s().p("AASBGQgOgFgLgRQgJgMgFgKQgDgEgBgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAIAEgEIAGgCIAKAIIAIAJIAEAQQAHAYAKAGQgDAAgFgCgAgTgHQgGgCAAgHQAAgEAGgIIAMgRQAMgSALgGQAEgCADAAIAAAAQgFACgDAIQgIAPgDAaQgDACgBADIgDAEQgDADgEABIgEABIgFgBg");
	this.shape_680.setTransform(454.4,-191.7);

	this.shape_681 = new cjs.Shape();
	this.shape_681.graphics.f("#609634").s().p("AgDBIQgKgGgIgYIgDgRIgBgFIAGAEIABAAIADACQAFAEAIAAQAGACAGgDQAIgBAEgFIAEgDIgCAJQgCANgGALIgFAIQgDAGgHADIgCACIgBAAIgBAAgAgPg9QAEgIAFgCIAAAAIAAAAQADgBADAFIAJAGQAJAMADAPIADALQgIgIgLAAQgMgBgGACQgFACgCAEIgFADQADgaAHgOg");
	this.shape_681.setTransform(457.6,-191.7);

	this.shape_682 = new cjs.Shape();
	this.shape_682.graphics.f("#E18F59").s().p("AgFAIIgBgBIAFgHIAGgJQADAEgCAGQgDAAgDADQgCABgBACQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_682.setTransform(452.4,-207);

	this.shape_683 = new cjs.Shape();
	this.shape_683.graphics.f("#EEC09E").s().p("AAbAVQgEgEgCgEQgDgEAAgGQgJgCADgBIADAAIADgBQAAgHADgFIAFgHIAFgDQgCAEABAIIABALQABADgCAFQgDAJAFAHIgFgDgAgYAVQABgEAKgMIgGAEIgJAFQgHACAJgIIAGgGIABAAIgCAAIgDADIgFADIgBAAIgBgCQABgEAKgFIgKADIgBAAIACgBQADgEAIgEIAPgFIABgBQgBAHAEACIAFABIAFgBIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgEADIgIAHQgHAGgCAAIgBgBg");
	this.shape_683.setTransform(452.2,-208);

	this.shape_684 = new cjs.Shape();
	this.shape_684.graphics.f("#000000").s().p("AgHAfQgIAAgFgEIgDgCIgCgBQgFgIAEgJQABgFAAgDIgCgKQgBgIADgFQACgDAFgCQAHgCALAAQALAAAIAJIACACQAEAFABAGQADAFAAAEQAAAGgDAHIgFAHIgDADQgFAFgHACQgGACgEAAIgDgBg");
	this.shape_684.setTransform(458,-207.9);

	this.shape_685 = new cjs.Shape();
	this.shape_685.graphics.f("#447BCD").s().p("AASBHQgOgFgLgSQgKgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBABAAQABgCADgCQAEgDACAAIAKAIIAIAJIAEARQAHAXAKAGIgIgBgAgTgGQgGgDAAgGQAAgFAGgIQAEgHAIgKQAMgSALgGIAHgCIAAAAQgFADgEAIQgHAOgDAaIgEAGIgDAEIgHAEIgEABIgFgBg");
	this.shape_685.setTransform(454.4,-207.9);

	this.shape_686 = new cjs.Shape();
	this.shape_686.graphics.f("#628DD1").s().p("AgDBIQgKgGgHgXIgEgRIgBgGIAFAEIACABIADACQAFAEAIAAQAFABAIgCQAHgCAFgFIADgDIgCAKQgCANgGALIgEAIQgEAFgHAEIgCABgAgPg8QAEgIAFgDIABAAQACgBADAFQAHAEACADQAJAMAEAPIACALQgIgJgLAAQgLAAgHACQgFACgCADIgFAEQADgaAHgOg");
	this.shape_686.setTransform(457.5,-207.9);

	this.shape_687 = new cjs.Shape();
	this.shape_687.graphics.f("#372511").s().p("AgJBEQgDgBgDgDIAEgJQAHgLABgNIACgJIADgIQADgGAAgHQAAgEgCgFQgCgGgCgEIgCgCIgCgMQgDgPgKgLQAEgHAFgCQAHgDADAEQAGAFAFAOQAHAVAAAdQgBAcgGASQgFANgGAFQgBACgEAAIgFgBg");
	this.shape_687.setTransform(460.4,-208.1);

	this.shape_688 = new cjs.Shape();
	this.shape_688.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_688.setTransform(456.8,-152.1);

	this.shape_689 = new cjs.Shape();
	this.shape_689.graphics.f("#E18F59").s().p("AgBAAIgFgHIABgBIABAAQAAAAAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADAEIAGACQACAFgDAEIgGgJg");
	this.shape_689.setTransform(452.4,-160.2);

	this.shape_690 = new cjs.Shape();
	this.shape_690.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGgBgHIgCgBIgDgBQgDgBAJAAQAAgHACgEQACgEAEgDIAGgFQgGAIAEAKQABAEAAADIgBAKQgCAIADAGIgFgEgAgEAQIgPgHQgHgDgEgEIgBgCIAAAAIALADQgKgEgBgEIAAgBIABgBIAGADIADADIACABIgBgBIgGgFQgJgJAHABIAJAGIAFAEQgKgNAAgCQAAgEAJAIIAJAHQADADgIgLIAAgBIAAgCQADgBAEAEIAEAIIAGAIIAEAIQAAgBgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgFABQgEADAAAGIgBAAg");
	this.shape_690.setTransform(452.2,-159.3);

	this.shape_691 = new cjs.Shape();
	this.shape_691.graphics.f("#000000").s().p("AgSAeQgEgCgDgDQgDgFACgIIABgKQAAgEgBgEQgEgKAGgHIABgBIADgCQAFgDAIgBQAHgBAGACQAHACAFAEIADAEIAFAHQADAHAAAFQAAAFgCAFQgCAGgEAEIgCADQgIAIgLABIgCAAQgKAAgGgCg");
	this.shape_691.setTransform(458,-159.3);

	this.shape_692 = new cjs.Shape();
	this.shape_692.graphics.f("#3A4D75").s().p("AAQBFQgLgFgMgSIgMgQQgGgJAAgFQAAgGAGgDIAFgBQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQAEABADADIADADIAEAHQADAZAIAOQADAIAFACIAAABQgDAAgEgDgAgTgLIgEgDQgBgBAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQABgEADgEQAFgKAJgMQALgRAOgFIAIgCQgKAFgHAZIgEARIgIAIIgKAIIgGgDg");
	this.shape_692.setTransform(454.4,-159.3);

	this.shape_693 = new cjs.Shape();
	this.shape_693.graphics.f("#48608E").s().p("AgGBIIAAAAIAAAAQgFgDgEgHQgHgOgDgaIAFADQACAEAFABQAGADAMgBQALAAAIgIIgDAKQgDAQgJALQgDADgGAEQgDAEgCAAIgBAAgAAWgWQgEgFgIgBQgGgDgGABQgIABgFADIgDADIgBAAIgGAEIABgFIADgRQAIgYAKgGIACAAIACACQAHADADAFIAFAIQAGAMACANIACAJIgEgDg");
	this.shape_693.setTransform(457.6,-159.4);

	this.shape_694 = new cjs.Shape();
	this.shape_694.graphics.f("#372511").s().p("AgIBEQgGgCgEgGQAJgMAEgPIACgLIACgDQACgFACgFQACgGAAgDQAAgHgDgGIgDgHIgCgKQgCgNgGgLIgEgJIAHgEQAFgDAEAFQAGAEAFANQAHASAAAdQAAAbgHAWQgFAOgGAFQgBACgEAAIgEgBg");
	this.shape_694.setTransform(460.4,-159.2);

	this.shape_695 = new cjs.Shape();
	this.shape_695.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQABACACABQADADADAAQACAGgDAEIgGgKg");
	this.shape_695.setTransform(452.4,-95.5);

	this.shape_696 = new cjs.Shape();
	this.shape_696.graphics.f("#EEC09E").s().p("AAaAVQgDgCgCgFQgDgFAAgHIgDgBIgDgBQgDAAAJgBQAAgHADgEQACgEAEgDIAFgEQgFAHADAKQACAEgBADIgBALQgBAIACAEIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAQAAAAAKAEQgKgFgBgEIABgBQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAFACIADADIACABIgBgBIgGgFQgJgIAHABIAJAFIAGAEQgKgMgBgDQAAgEAKAIIAIAHQAEADgJgLIAAgBIABgCQACgBAEAFIAEAHIAHAJIAEAGIgFgBQgDAAgCABQgEACABAHIgBgBg");
	this.shape_696.setTransform(452.2,-94.6);

	this.shape_697 = new cjs.Shape();
	this.shape_697.graphics.f("#41210C").s().p("AgSAeQgFgCgCgEQgDgEABgIIACgLQAAgDgBgEQgEgKAFgHIACgBIADgDQAFgCAIgCQAHAAAGACQAHACAFAEIADAEIAFAHQADAHAAAFQAAAFgDAFQgBAGgEAEIgCADQgIAIgLABIgCAAQgKAAgGgCg");
	this.shape_697.setTransform(458,-94.6);

	this.shape_698 = new cjs.Shape();
	this.shape_698.graphics.f("#E64A00").s().p("AAQBGQgLgGgMgSQgIgKgEgHQgGgIAAgFQAAgGAGgCQACgCADABIAEABIAHAEIADADQABAEADACQADAbAHANQAEAIAFADIAAAAIgHgCgAgTgLQgDgBgBgDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgRAOgGIAIgBQgKAGgHAXIgEASQgEACgEAGIgKAIQgCAAgEgDg");
	this.shape_698.setTransform(454.4,-94.7);

	this.shape_699 = new cjs.Shape();
	this.shape_699.graphics.f("#EC672C").s().p("AgFBIIgBAAQgFgDgEgIQgHgNgDgbIAFAEQACADAFACQAHADALgBQALAAAIgJIgCALQgEAPgJAMQgCADgHAEQgDAEgCAAIAAAAgAAXgWQgFgFgHgBQgIgDgFABQgIABgFADIgDACIgCABIgFAEIABgFIAEgSQAHgXAKgGIACAAIACACQAHADAEAGIAEAIQAGALACANIACAJIgDgDg");
	this.shape_699.setTransform(457.5,-94.7);

	this.shape_700 = new cjs.Shape();
	this.shape_700.graphics.f("#372511").s().p("AgJBEQgFgCgEgHQAKgLADgPIACgLIACgDQACgEACgGQACgFAAgEQAAgGgDgHIgDgHIgCgKQgBgMgHgMIgEgIIAGgFQAHgCADAEQAGAEAFANQAGASABAdQAAAcgHAVQgFAOgGAFQgBACgDAAIgGgBg");
	this.shape_700.setTransform(460.4,-94.5);

	this.shape_701 = new cjs.Shape();
	this.shape_701.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgCIABgBQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAIADAEQADACADAAQACAFgDAFIgGgKg");
	this.shape_701.setTransform(452.4,-111.7);

	this.shape_702 = new cjs.Shape();
	this.shape_702.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGAAgHIgDgBIgDgBQgDAAAJgCQAAgGADgEQACgEAEgDIAFgEQgFAHADAJQACAFgBADIgBAKQgBAIACAFIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKADQgKgEgBgEIABgCIABAAIAFADIADADIACABIgBgBIgGgGQgJgIAHABQACABAHAFIAGAEQgKgNgBgCQAAgEAKAIIAIAIQAEABgJgKIAAgBIABgCQACgBAEAFIAEAHIAHAIIAEAHIgFgBIgFABQgEACABAHIgBgBg");
	this.shape_702.setTransform(452.2,-110.8);

	this.shape_703 = new cjs.Shape();
	this.shape_703.graphics.f("#FFF6CD").s().p("AgSAeQgFgCgCgEQgDgEABgJIACgJQAAgEgBgEQgEgJAFgIIACgBIADgCQAFgEAIAAQAHgBAGACQAHACAFAFIADADIAFAHQADAGAAAGQAAAFgDAFQgBAGgEAEIgCADQgIAIgLAAIgDAAQgKAAgFgBg");
	this.shape_703.setTransform(458,-110.8);

	this.shape_704 = new cjs.Shape();
	this.shape_704.graphics.f("#372511").s().p("AgJBEQgFgDgEgGQAKgLADgPIACgMIACgCQACgFACgFQACgGAAgDQAAgHgDgGIgDgIIgCgKQgBgMgHgLIgEgJQADgDADgBQAHgDADAEQAGAEAFAOQAGARABAdQAAAcgHAWQgFAOgGAFQgBACgDAAIgGgBg");
	this.shape_704.setTransform(460.4,-110.7);

	this.shape_705 = new cjs.Shape();
	this.shape_705.graphics.f("#393939").s().p("AAQBFQgLgFgMgTIgMgPQgGgKAAgEQAAgGAGgDIAFgBIAEABIAHAFIADADIAEAHQADAZAHAOQAEAIAFADIAAAAQgEAAgDgDgAgTgLIgEgDQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIADgHQAFgKAKgMQALgRAOgGQAEgCAEAAQgKAHgHAYIgEAQIgIAIIgKAIQgCABgEgDg");
	this.shape_705.setTransform(454.4,-110.8);

	this.shape_706 = new cjs.Shape();
	this.shape_706.graphics.f("#424242").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFADQACAEAFACQAHACALgBQALAAAIgIIgCALQgEAPgJAMIgJAHQgDAFgCAAIAAgBgAAXgWQgFgFgHgCQgIgCgFABQgIAAgFAEIgDACIgCABIgFAEIABgGIAEgRQAHgXAKgHIACAAIACACQAHAEAEAFIAEAIQAGALACANIACAKIgDgDg");
	this.shape_706.setTransform(457.5,-110.8);

	this.shape_707 = new cjs.Shape();
	this.shape_707.graphics.f("#372511").s().p("AgJBEQgFgCgEgHQAKgLADgPIACgMIACgCQACgEACgGQACgFAAgEQAAgHgDgGIgDgIIgCgJQgBgNgHgLIgEgJQADgDADgBQAHgCADADQAGAFAFANQAGASABAcQAAAdgHAVQgFAOgGAFQgBACgDAAIgGgBg");
	this.shape_707.setTransform(460.4,-126.9);

	this.shape_708 = new cjs.Shape();
	this.shape_708.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAABQABACACABQADADADAAQACAFgDAFIgGgKg");
	this.shape_708.setTransform(452.4,-127.9);

	this.shape_709 = new cjs.Shape();
	this.shape_709.graphics.f("#447BCD").s().p("AAQBGQgLgGgMgSQgIgKgEgHQgGgIAAgFQAAgGAGgDIAFgBIAEABIAHAFIADADIAEAGQADAaAHAOQAEAIAFADIAAAAIgHgCgAgTgLQgDgCgBgCQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgSAOgFIAIgBQgKAGgHAXIgEARIgIAJIgKAIQgCAAgEgDg");
	this.shape_709.setTransform(454.4,-127);

	this.shape_710 = new cjs.Shape();
	this.shape_710.graphics.f("#000000").s().p("AgSAeQgFgCgCgDQgDgFABgIIACgKQAAgDgBgFQgEgJAFgIIACgBIADgCQAFgEAIAAQAHgBAGACQAHACAFAFIADADIAFAHQADAHAAAFQAAAFgDAFQgBAGgEAFIgCACQgIAJgLAAIgCAAQgKAAgGgCg");
	this.shape_710.setTransform(458,-127);

	this.shape_711 = new cjs.Shape();
	this.shape_711.graphics.f("#628DD1").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAFACQAHACALAAQALAAAIgJIgCALQgEAPgJAMQgCADgHAEQgDAEgCAAIAAAAgAAXgWQgFgFgHgCQgIgCgFABQgIAAgFAEIgDACIgCABIgFAEIABgGIAEgRQAHgXAKgGIACAAIACABQAHAEAEAFIAEAJQAGAKACANIACAKIgDgDg");
	this.shape_711.setTransform(457.5,-127);

	this.shape_712 = new cjs.Shape();
	this.shape_712.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFAAgHIgDgBIgDgBQgDAAAJgCQAAgGADgEQACgEAEgEIAFgDQgFAHADAJQACAFgBADIgBALQgBAIACAEIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKAEQgKgFgBgEIABgCIABAAIAFADIADADIACAAIgBAAIgGgGQgJgIAHACIAJAFIAGAEQgKgMgBgEQAAgDAKAIIAIAHQAEADgJgLIAAgBIABgCQACgBAEAFIAEAHIAHAJIAEAGIgFgBIgFABQgEACABAHIgBgBg");
	this.shape_712.setTransform(452.2,-127);

	this.shape_713 = new cjs.Shape();
	this.shape_713.graphics.f("#E18F59").s().p("AgFAIIgBgBIAGgHIAFgJQADAFgCAFQgDAAgDACIgDAEQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIgBgCg");
	this.shape_713.setTransform(465.8,-74.2);

	this.shape_714 = new cjs.Shape();
	this.shape_714.graphics.f("#EEC09E").s().p("AAbAVIgGgIQgDgEgBgGQgIgCADgBIADAAIACgBQABgHADgFIAFgHIAGgDQgDAFABAIIACAKQAAADgBAFQgEAJAFAHIgFgDgAgYAVQAAgEALgMIgGAEQgHAGgCAAQgHABAJgIIAGgGIABAAIgBAAIgEADIgFADIgBAAIgBgCQACgEAJgEQgJADgBgBIgBAAIACgBQAEgEAHgEIAPgFIABAAQAAAGADACIAFABIAFgBIgFAGIgGAJIgEAHQgEAFgCgBIgBgBIAAgCQAJgKgDACIgJAHQgHAGgCAAIgBgBg");
	this.shape_714.setTransform(465.6,-75.1);

	this.shape_715 = new cjs.Shape();
	this.shape_715.graphics.f("#000000").s().p("AgIAfQgIAAgFgEIgDgCIgBgBQgFgIAEgJQABgEAAgEIgCgKQgBgIADgFQACgDAFgCQAGgCAMABQALAAAIAIIACACQADAFACAGQACAFAAAEQAAAHgDAGQgBAEgDADIgEADQgFAFgHACIgJABIgEAAg");
	this.shape_715.setTransform(471.5,-75.1);

	this.shape_716 = new cjs.Shape();
	this.shape_716.graphics.f("#447BCD").s().p("AASBGQgOgEgMgTQgJgLgFgKIgDgIQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAIAEgEQAEgDADAAIAJAIIAJAJIAEARQAHAXAKAGIgIgCgAgUgHQgFgCAAgGQAAgFAGgIIALgRQANgSALgGQADgCADgBIAAABQgEADgEAHQgIAPgDAaIgDAGIgEAEIgGADIgFABIgFgBg");
	this.shape_716.setTransform(467.9,-75);

	this.shape_717 = new cjs.Shape();
	this.shape_717.graphics.f("#628DD1").s().p("AgDBJQgKgHgHgXIgEgRIAAgGIAFAEIABABIADACQAFAEAIAAQAFABAIgCQAHgCAFgFIADgDIgBAKQgDANgFALIgFAIQgEAFgGAEIgCACgAgPg8QAEgIAFgDIABAAQACgBAEAFIAIAHQAJAMAEAPIACALQgIgIgLAAQgLgBgGACQgGACgCADIgFAEQADgaAHgOg");
	this.shape_717.setTransform(470.9,-75.1);

	this.shape_718 = new cjs.Shape();
	this.shape_718.graphics.f("#372511").s().p("AgJBEQgDgBgDgDIAFgJQAFgLADgMIABgKQABgEABgEQADgGABgHQgBgEgCgFQgCgFgBgFIgCgCIgDgMQgDgPgJgLQAFgGAEgDQAHgDACAEQAHAFAEAOQAIAWAAAcQAAAdgIARQgEAOgHAEQAAACgEAAIgFgBg");
	this.shape_718.setTransform(473.9,-75.2);

	this.shape_719 = new cjs.Shape();
	this.shape_719.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgDgCIAAgBQgGgHAEgKQABgEAAgDIgBgKQgCgIADgFQADgEAEgCQAGgCAMABQALAAAIAIIACADIAGAKIABAJQABAHgEAGQgBAEgDADIgEAEQgFAFgHABQgEACgCAAIgGgBg");
	this.shape_719.setTransform(471.5,-108.5);

	this.shape_720 = new cjs.Shape();
	this.shape_720.graphics.f("#372511").s().p("AgJBEQgDgBgDgEIAEgIQAGgLACgNIACgKQABgDABgEQAEgGgBgIIgBgIIgEgKIgCgDIgDgLQgDgPgJgMQAEgGAFgCQAGgDADAFQAHAEAFAOQAHAWAAAcQAAAcgHATQgFAMgHAFQAAACgEAAIgFgBg");
	this.shape_720.setTransform(473.9,-108.6);

	this.shape_721 = new cjs.Shape();
	this.shape_721.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_721.setTransform(470.2,-115.6);

	this.shape_722 = new cjs.Shape();
	this.shape_722.graphics.f("#48608E").s().p("AgDBIQgKgGgHgYQgDgIgBgJIgBgGQACADAEABIAAABIADACQAGAEAIAAQAFACAHgDQAHgBAFgFIAEgEIgCAKQgCANgGALIgEAIQgEAGgHADIgCACIgBAAIgBAAgAgPg9QAEgIAEgCIABAAIABAAQABgBAFAFIAIAGQAJAMADAPIADALQgIgIgLAAQgMgBgGACQgEACgDAEIgFADQACgaAIgOg");
	this.shape_722.setTransform(471,-108.4);

	this.shape_723 = new cjs.Shape();
	this.shape_723.graphics.f("#3A4D75").s().p("AASBGQgOgFgMgRQgIgMgFgKQgDgFgBgDQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAIAEgDIAHgDIAJAIIAJAIQABAJADAIQAHAYAKAGQgEAAgEgCgAgUgGQgFgEAAgFQAAgFAGgJIALgQQANgSALgGIAGgCIAAABQgEACgEAHQgIAOgCAaIgEAHIgDADIgHAEIgFABIgFAAg");
	this.shape_723.setTransform(467.9,-108.4);

	this.shape_724 = new cjs.Shape();
	this.shape_724.graphics.f("#E18F59").s().p("AgEAIIgCgBIAGgHIAFgIQADAEgCAEIgGADIgDAEQAAAAAAAAQgBABAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_724.setTransform(465.8,-107.5);

	this.shape_725 = new cjs.Shape();
	this.shape_725.graphics.f("#EEC09E").s().p("AAbAUQgEgDgDgEIgCgKQgJgBADgCIADAAIACgBQABgHADgGIAGgGIAFgDQgEAFACAIIACAKQAAADgCAEQgDAKAFAHQgDgBgCgDgAgYAUQAAgCALgNIgGAEIgJAGQgHABAJgJIAGgEIABgBIgCAAIgDACIgFAEIgCgBIAAgBQABgEAKgEIgLACIAAAAIACgCQADgDAIgEQAJgCAFgDIACgBQgBAGAEADIAFABIAFgBIgFAGIgGAKIgEAGQgEAFgCgBIgBgBIAAgCQAJgLgEADIgIAHQgHAFgCAAIgBgBg");
	this.shape_725.setTransform(465.6,-108.5);

	this.shape_726 = new cjs.Shape();
	this.shape_726.graphics.f("#E18F59").s().p("AgFAIIgBgBIAGgHIAFgJQADAEgCAFQgDAAgDAEQgCABgBACQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_726.setTransform(465.8,-124.1);

	this.shape_727 = new cjs.Shape();
	this.shape_727.graphics.f("#EEC09E").s().p("AAbAUQgEgDgCgEQgDgEgBgHQgIgBADgBIADAAIACgBQABgHADgFIAFgHIAGgDQgDAEABAIIACALQAAADgBAFQgEAJAFAHIgFgEgAgYAUQAAgDALgMIgGAEIgJAFQgHACAJgIIAGgGIABgBIgBABIgEADIgFADIgBAAIgBgCQACgEAJgEQgJADgBgBIgBAAIACgBQAEgEAHgEIAPgFIABgBQAAAHADACIAFABIAFgBIgFAGIgGAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgDADIgJAHQgHAFgCAAIgBgBg");
	this.shape_727.setTransform(465.6,-125);

	this.shape_728 = new cjs.Shape();
	this.shape_728.graphics.f("#41210C").s().p("AgIAgQgIgBgFgDIgDgDIgBgBQgFgHAEgJQABgFAAgDIgCgLQgBgIADgEQACgEAFgCQAGgCAMAAQALABAIAJIACACQADAEACAGQACAFAAAEQAAAGgDAHQgBAEgDADIgEAEQgFAEgHACQgFACgFAAIgDAAg");
	this.shape_728.setTransform(471.5,-125);

	this.shape_729 = new cjs.Shape();
	this.shape_729.graphics.f("#E64A00").s().p("AASBHQgOgFgMgSQgJgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABgDADgBQAEgDADAAIAJAIQAFAGAEACIAEASQAHAXAKAGIgIgBgAgUgGQgFgDAAgGQAAgFAGgIQADgHAIgKQANgSALgGQADgCADAAIAAAAQgEADgEAIQgIANgDAbIgDAGIgEAEIgGAEIgFAAIgBAAIgEAAg");
	this.shape_729.setTransform(467.9,-125);

	this.shape_730 = new cjs.Shape();
	this.shape_730.graphics.f("#372511").s().p("AgJBEQgDgBgDgEIAFgIQAFgLADgNIABgKQABgDABgEQADgHABgGQgBgEgCgFQgCgGgBgEIgCgCIgDgMQgDgPgJgLQAFgHAEgCQAHgDACAEQAHAFAEAOQAIAVAAAcQAAAdgIASQgEANgHAFQgBACgDAAIgFgBg");
	this.shape_730.setTransform(473.9,-125.1);

	this.shape_731 = new cjs.Shape();
	this.shape_731.graphics.f("#EC672C").s().p("AgUArIgEgSIAAgFIAFAEIABABIADACQAFADAIABQAFABAIgDQAHgBAFgFIADgDIgBAJQgDANgFAMIgFAIQgEAFgGADIgCACIgDAAQgKgGgHgXgAgPg8QAEgIAFgDIABAAQACgBAEAFIAIAHQAJAMAEAPIACALQgIgJgLAAQgLgBgGADQgGACgCADIgFAEQADgbAHgNg");
	this.shape_731.setTransform(470.9,-125);

	this.shape_732 = new cjs.Shape();
	this.shape_732.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_732.setTransform(470.2,-150.7);

	this.shape_733 = new cjs.Shape();
	this.shape_733.graphics.f("#000000").s().p("AgSAeQgEgCgDgEQgDgFACgIIABgJQAAgEgBgEQgEgKAGgHIAAgBIADgCQAGgEAIAAQAHgBAFACQAHACAFAEIAEAEQADADABAEQAEAGgBAGIgBAKIgGAKIgCADQgIAIgLAAIgDAAQgKAAgFgBg");
	this.shape_733.setTransform(471.5,-157.9);

	this.shape_734 = new cjs.Shape();
	this.shape_734.graphics.f("#372511").s().p("AgJBEQgFgCgEgGQAJgMADgPIADgLIACgDIAEgKIABgJQABgHgEgGQgBgEgBgDIgCgKQgCgNgGgLIgEgIQADgEADgBQAGgDADAEQAHAFAFANQAHASAAAdQAAAbgHAWQgFAOgHAFQgBACgDAAIgFgBg");
	this.shape_734.setTransform(473.9,-157.8);

	this.shape_735 = new cjs.Shape();
	this.shape_735.graphics.f("#609634").s().p("AgFBIIgBgBIgBAAQgEgCgEgHQgIgPgCgZIAFADQADADAEACQAGACAMAAQALgBAIgIIgDALQgDAQgJALIgIAHQgEAEgCAAIAAAAgAAWgWQgFgFgHgCQgHgCgFABQgIABgGADIgDADIAAAAQgEACgCACIABgGQABgIADgIQAHgYAKgGIACAAIACACQAHADAEAFIAEAIQAGAMACAMIACAKIgEgDg");
	this.shape_735.setTransform(471,-158);

	this.shape_736 = new cjs.Shape();
	this.shape_736.graphics.f("#EEC09E").s().p("AAbAVIgGgGQgDgGgBgHIgCAAIgDgCQgDAAAJgCIACgKIAHgHQACgDADgBQgFAHADAKQACAEAAAEIgCAJQgCAIAEAFIgFgDgAgEAPIgOgFQgIgEgDgDIgCgDIAAAAIALADQgKgEgBgDIAAgCIACgBIAFAEIADACIACABIgBgCIgGgEQgJgJAHABIAJAGIAGAEQgLgNAAgCQAAgDAKAHIAIAHQAEADgJgLIAAgCIABgBQACgBAEAFIAEAGIAGAKIAFAGIgFgBIgFABQgEADABAGIgCgBg");
	this.shape_736.setTransform(465.6,-157.9);

	this.shape_737 = new cjs.Shape();
	this.shape_737.graphics.f("#4A7328").s().p("AAQBGQgLgGgNgSIgLgQQgGgJAAgFQAAgGAFgCIAFgBIAFABIAHAEIADADIAEAHQACAZAIAPQAEAHAEACIAAABQgCAAgEgCgAgUgLIgEgDQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQABgEADgEIANgWQAMgRAOgFQAEgCAEAAQgKAGgHAYQgDAIgBAIIgJAJIgJAIIgHgDg");
	this.shape_737.setTransform(467.9,-158);

	this.shape_738 = new cjs.Shape();
	this.shape_738.graphics.f("#E18F59").s().p("AAAAAIgGgGIACgCIAAgBQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAIADAEIAGACQACAFgDAFIgFgKg");
	this.shape_738.setTransform(465.8,-158.8);

	this.shape_739 = new cjs.Shape();
	this.shape_739.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_739.setTransform(470.2,-84.7);

	this.shape_740 = new cjs.Shape();
	this.shape_740.graphics.f("#EEC09E").s().p("AAbAVIgGgGQgDgGgBgHIgCAAIgDgCQgDAAAJgCIACgKIAHgIIAFgDQgFAHADAKQACAEAAAEIgCAKQgCAHAEAFIgFgDgAgEAPIgOgFQgIgEgDgDIgCgDIAAAAIALAEQgKgFgBgDIAAgCIACAAIAFADIADACIACAAIgBgBIgGgEQgJgJAHACIAJAFIAGAEQgLgNAAgDQAAgCAKAIIAIAGQAEADgJgLIAAgCIABgBQACgBAEAFIAEAGIAGAKIAFAGQgCgBgDAAIgFABQgEACABAHIgCgBg");
	this.shape_740.setTransform(465.6,-91.8);

	this.shape_741 = new cjs.Shape();
	this.shape_741.graphics.f("#5BB1B0").s().p("AAQBGQgLgGgNgSIgLgRQgGgIAAgEQAAgHAFgCIAFgBQADAAACABIAHAEIADAEIAEAFQACAaAIAPQAEAIAEACIAAAAIgGgCgAgUgLIgEgDQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgDADgFQAFgKAIgMQAMgRAOgGIAIgBQgKAGgHAYQgDAIgBAIIgJAJIgJAIIgHgDg");
	this.shape_741.setTransform(467.9,-91.9);

	this.shape_742 = new cjs.Shape();
	this.shape_742.graphics.f("#E18F59").s().p("AAAAAIgGgHIACgBIAAgBQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAIADADIAGADQACAFgDAFIgFgKg");
	this.shape_742.setTransform(465.8,-92.7);

	this.shape_743 = new cjs.Shape();
	this.shape_743.graphics.f("#000000").s().p("AgSAeQgEgCgDgEQgDgFACgIIABgKQAAgDgBgEQgEgKAGgIIAAAAIADgCQAGgEAIAAQAHgCAFADQAHABAFAFIAEADQADAEABAEQAEAGgBAGIgBAKIgGAKIgCADQgIAIgLAAIgDABQgKAAgFgCg");
	this.shape_743.setTransform(471.5,-91.8);

	this.shape_744 = new cjs.Shape();
	this.shape_744.graphics.f("#372511").s().p("AgJBEQgFgCgEgHQAJgLADgPIADgLIACgDIAEgKIABgJQABgHgEgGQgBgEgBgEIgCgJQgCgNgGgLIgEgIQADgEADgBQAGgDADAEQAHAFAFANQAHASAAAcQAAAcgHAWQgFAOgHAEQgBADgDAAIgFgBg");
	this.shape_744.setTransform(473.9,-91.7);

	this.shape_745 = new cjs.Shape();
	this.shape_745.graphics.f("#6BD3D2").s().p("AgFBIIgBAAIgBAAQgEgCgEgIQgIgOgCgaIAFADQADAEAEACQAGACAMgBQALAAAIgIIgDALQgDAPgJALIgIAHQgEAEgCAAIAAAAgAAWgWQgFgFgHgBQgHgDgFACQgIAAgGAEIgDACIAAAAIgGAEIABgFQABgJADgIQAHgYAKgGIACAAIACACQAHADAEAGIAEAIQAGALACANIACAJIgEgDg");
	this.shape_745.setTransform(471,-91.9);

	this.shape_746 = new cjs.Shape();
	this.shape_746.graphics.f("#E18F59").s().p("AAAAAIgGgGIABgCIABgBQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABQABACACABQADADADAAQACAFgDAFIgFgKg");
	this.shape_746.setTransform(465.8,-175.4);

	this.shape_747 = new cjs.Shape();
	this.shape_747.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFgBgHIgCgBIgDgBQgDAAAIgCQABgGADgEIAGgIIAFgDQgFAHAEAJQABAFAAADIgCAKQgBAJADAEIgGgDgAgDAPIgPgFQgHgEgEgEIgCgCIABAAQABAAAJAEQgJgFgCgEIABgCIABAAIAFADIAEADIABAAIgBAAIgGgGQgJgIAHACQACAAAHAFIAGAEQgLgNAAgDQAAgDAKAIIAJAHQADADgJgLIAAgBIABgCQACgBAEAFIAEAHIAGAJIAFAGIgFgBIgFABQgDACAAAHIgBgBg");
	this.shape_747.setTransform(465.6,-174.5);

	this.shape_748 = new cjs.Shape();
	this.shape_748.graphics.f("#FFF6CD").s().p("AgSAeQgFgCgCgDQgDgFABgIIACgKQAAgDgBgFQgEgJAFgIIABgBIADgCQAFgEAIAAQAIgBAFACQAHACAFAFIAEADQADADABAEQADAHAAAFQAAAFgCAFQgCAGgDAFIgCACQgIAJgLAAIgCAAQgLAAgFgCg");
	this.shape_748.setTransform(471.5,-174.5);

	this.shape_749 = new cjs.Shape();
	this.shape_749.graphics.f("#393939").s().p("AAQBFQgLgFgNgTQgIgJgDgHQgGgIAAgFQAAgGAFgDIAFgBIAFABIAGAFIAEADIADAGQADAaAIAOQAEAIAEADIAAAAQgDAAgDgDgAgUgLQgDgCgBgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAJgMQAMgSAOgFIAIgBQgKAGgHAXIgEARIgJAJIgJAIQgDAAgEgDg");
	this.shape_749.setTransform(467.9,-174.5);

	this.shape_750 = new cjs.Shape();
	this.shape_750.graphics.f("#424242").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAGACQAGACALAAQALAAAIgJIgCALQgEAPgJAMIgIAHQgEAEgBAAIgBAAgAAXgWQgFgFgHgCQgIgCgFABQgIAAgFAEIgDACIgBABIgFAEIAAgGIAEgRQAHgXAKgGIADAAIACABQAGAEAEAFIAFAJQAFAKADANIABAKIgDgDg");
	this.shape_750.setTransform(470.9,-174.5);

	this.shape_751 = new cjs.Shape();
	this.shape_751.graphics.f("#372511").s().p("AgJBEQgEgCgFgHQAJgLADgPIADgMIACgCQABgEACgGQACgFABgEQgBgHgDgGQgBgEgBgEIgBgJQgDgNgFgLIgFgJQADgDADgBQAHgCACADQAHAFAEANQAIASAAAcQAAAdgIAVQgEAOgHAFQAAACgEAAIgFgBg");
	this.shape_751.setTransform(473.9,-174.4);

	this.shape_752 = new cjs.Shape();
	this.shape_752.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFgBgHIgCgBIgDgBQgDAAAIgCQABgGADgEIAGgIIAFgDQgFAHAEAJQABAFAAADIgCALQgBAIADAEIgGgDgAgDAPIgPgFQgHgEgEgEIgCgCIABAAQABAAAJADQgJgEgCgEIABgCIABAAIAFADIAEADIABAAIgBAAIgGgGQgJgIAHACQACAAAHAFIAGAEQgLgMAAgEQAAgDAKAIIAJAHQADADgJgLIAAgBIABgCQACgBAEAFIAEAHIAGAJIAFAGIgFgBIgFABQgDACAAAHIgBgBg");
	this.shape_752.setTransform(465.6,-141.4);

	this.shape_753 = new cjs.Shape();
	this.shape_753.graphics.f("#E18F59").s().p("AAAAAIgGgGIABgBIABgCQAAAAAAABQAAAAAAABQAAAAABAAQAAABAAAAQABACACACQADACADAAQACAGgDAEIgFgKg");
	this.shape_753.setTransform(465.8,-142.3);

	this.shape_754 = new cjs.Shape();
	this.shape_754.graphics.f("#000000").s().p("AgSAeQgFgCgCgDQgDgFABgIIACgKQAAgDgBgFQgEgJAFgIIABgBIADgCQAFgEAIAAQAIgBAFACQAHACAFAFIAEADQADADABAEQADAHAAAFQAAAFgCAFQgCAGgDAFIgCACQgIAJgLAAIgCAAQgLAAgFgCg");
	this.shape_754.setTransform(471.5,-141.5);

	this.shape_755 = new cjs.Shape();
	this.shape_755.graphics.f("#372511").s().p("AgJBEQgEgCgFgHQAJgLADgPIADgMIACgCQABgEACgGQACgFABgEQgBgHgDgGQgBgEgBgEIgBgKQgDgMgFgLIgFgJQADgDADgBQAHgDACAEQAHAFAEANQAIARAAAdQAAAdgIAVQgEAOgHAFQAAACgEAAIgFgBg");
	this.shape_755.setTransform(473.9,-141.3);

	this.shape_756 = new cjs.Shape();
	this.shape_756.graphics.f("#628DD1").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAGACQAGACALAAQALAAAIgJIgCALQgEAPgJAMIgIAHQgEAEgBAAIgBAAgAAXgWQgFgFgHgCQgIgCgFABQgIAAgFAEIgDACIgBABIgFAEIAAgGIAEgRQAHgXAKgGIADAAIACABQAGAEAEAFIAFAIQAFALADANIABAKIgDgDg");
	this.shape_756.setTransform(470.9,-141.5);

	this.shape_757 = new cjs.Shape();
	this.shape_757.graphics.f("#447BCD").s().p("AAQBGQgLgGgNgSQgIgKgDgHQgGgIAAgFQAAgGAFgDIAFgBIAFABIAGAEIAEAEIADAGQADAaAIAOQAEAIAEADIAAAAQgDAAgDgCgAgUgLQgDgCgBgCQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIADgHQAFgKAJgMQAMgSAOgFIAIgBQgKAGgHAXIgEARIgJAJIgJAIQgDAAgEgDg");
	this.shape_757.setTransform(467.9,-141.5);

	this.shape_758 = new cjs.Shape();
	this.shape_758.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgDgCIAAgBQgGgHAEgKQABgEAAgEIgBgKQgCgIADgFQADgDAEgCQAGgCAMAAQALABAIAIIACADIAGAKIABAJQABAGgEAHQgBAEgDADIgEAEQgFAEgHACQgFACgDAAIgEgBg");
	this.shape_758.setTransform(471.5,-207.6);

	this.shape_759 = new cjs.Shape();
	this.shape_759.graphics.f("#372511").s().p("AgJBEQgDgBgDgEIAEgIQAGgLACgNIACgJQABgEABgEQAEgHgBgHIgBgIIgEgKIgCgCIgDgLQgDgQgJgLQAEgHAFgCQAGgDADAFQAHAEAFAOQAHAVAAAdQAAAcgHASQgFANgHAFQgBACgDAAIgFgBg");
	this.shape_759.setTransform(473.9,-207.7);

	this.shape_760 = new cjs.Shape();
	this.shape_760.graphics.f("#609634").s().p("AgDBIQgKgGgHgYQgDgIgBgJIgBgFIAGAEIAAAAIADADQAGADAIABQAFABAHgDQAHgBAFgFIAEgDIgCAJQgCANgGAMIgEAIQgEAFgHADIgCACIgBAAIgBAAgAgPg9QAEgHAEgDIABAAIABAAQABgBAFAFIAIAHQAJALADAQIADALQgIgJgLAAQgMgBgGADQgEABgDAEIgFADQACgaAIgOg");
	this.shape_760.setTransform(471,-207.5);

	this.shape_761 = new cjs.Shape();
	this.shape_761.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_761.setTransform(470.2,-214.8);

	this.shape_762 = new cjs.Shape();
	this.shape_762.graphics.f("#4A7328").s().p("AASBHQgOgGgMgRQgIgMgFgKQgDgEgBgEQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAIAEgEIAHgDIAJAIIAJAJQABAIADAJQAHAXAKAGIgIgBgAgUgHQgFgCAAgHQAAgEAGgIIALgQQANgTALgGQAEgCACAAIAAABQgEACgEAHQgIAPgCAZIgEAHIgDADIgHAEQgCACgDgBIgFgBg");
	this.shape_762.setTransform(467.9,-207.5);

	this.shape_763 = new cjs.Shape();
	this.shape_763.graphics.f("#E18F59").s().p("AgEAJIgCgBIAGgHIAFgKQADAFgCAFIgGADIgDADQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAABg");
	this.shape_763.setTransform(465.8,-206.7);

	this.shape_764 = new cjs.Shape();
	this.shape_764.graphics.f("#EEC09E").s().p("AAbAVIgHgIIgCgKQgJgBADgCIADgBIACAAQABgHADgFIAGgHIAFgDQgEAEACAIIACAKQAAAEgCAEQgDAKAFAHIgFgDgAgYAVQAAgEALgMIgGAEIgJAFQgHACAJgJIAGgEIABgBIgCAAIgDADIgFADIgCgBIAAgCQABgDAKgEIgLACIAAAAIACgCQADgDAIgEIAOgFIACgBQgBAGAEACIAFACQADAAACgCIgFAHIgGAJIgEAHQgEAFgCgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAgBIAAgBQAJgLgEADIgIAHQgHAFgCAAIgBAAg");
	this.shape_764.setTransform(465.6,-207.6);

	this.shape_765 = new cjs.Shape();
	this.shape_765.graphics.f("#E18F59").s().p("AgEAJIgCgBIAGgIIAFgJQADAFgCAEIgGADIgDAEQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAg");
	this.shape_765.setTransform(465.8,-272.8);

	this.shape_766 = new cjs.Shape();
	this.shape_766.graphics.f("#EEC09E").s().p("AAbAUIgHgHIgCgKQgJgBADgCQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIACgBQABgHADgGIAGgGIAFgEQgEAGACAIIACAKQAAAEgCAEQgDAJAFAIQgDgCgCgDgAgYAUQAAgCALgNIgGAEIgJAGQgHABAJgIIAGgFIABgCIgCABQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAIgFAEIgCAAIAAgCQABgEAKgEIgLACIAAAAIACgBQADgEAIgDIAOgGIACgBQgBAGAEADIAFABIAFgBIgFAGIgGAJIgEAIQgEAEgCgBIgBgBIAAgCQAJgLgEADIgIAHQgHAFgCAAIgBgBg");
	this.shape_766.setTransform(465.6,-273.7);

	this.shape_767 = new cjs.Shape();
	this.shape_767.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgDgCIAAgBQgGgHAEgKQABgEAAgEIgBgJQgCgIADgGQADgDAEgCQAGgCAMABQALAAAIAIIACADIAGAKIABAJQABAHgEAGQgBAEgDADIgEAEQgFAEgHACIgHACIgFgBg");
	this.shape_767.setTransform(471.5,-273.7);

	this.shape_768 = new cjs.Shape();
	this.shape_768.graphics.f("#5BB1B0").s().p("AASBGQgOgFgMgRQgIgMgFgKQgDgEgBgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBIAEgDIAHgDIAJAIIAJAJQABAIADAIQAHAYAKAGQgEAAgEgCgAgUgHQgFgCAAgGQAAgFAGgJIALgQQANgSALgGQAEgCACAAIAAAAQgEADgEAHQgIAPgCAZIgEAHIgDADIgHAEIgFABIgFgBg");
	this.shape_768.setTransform(467.9,-273.6);

	this.shape_769 = new cjs.Shape();
	this.shape_769.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_769.setTransform(470.2,-280.9);

	this.shape_770 = new cjs.Shape();
	this.shape_770.graphics.f("#372511").s().p("AgJBEQgDgBgDgEIAEgIQAGgLACgNIACgKQABgDABgEQAEgGgBgIIgBgIIgEgKIgCgDIgDgLQgDgPgJgMQAEgGAFgCQAGgDADAEQAHAFAFAOQAHAWAAAbQAAAdgHASQgFANgHAFQAAACgEAAIgFgBg");
	this.shape_770.setTransform(473.9,-273.8);

	this.shape_771 = new cjs.Shape();
	this.shape_771.graphics.f("#6BD3D2").s().p("AgDBIQgKgGgHgYQgDgIgBgIIgBgGQACACAEACIAAAAIADADQAGADAIABQAFABAHgCQAHgCAFgFIAEgDIgCAKQgCAMgGAMIgEAIQgEAFgHADIgCACIgBAAIgBAAgAgPg9QAEgHAEgDIABAAIABAAQABgBAFAFIAIAHQAJALADAQIADALQgIgIgLgBQgMgBgGADQgEABgDAEIgFADQACgZAIgPg");
	this.shape_771.setTransform(471,-273.6);

	this.shape_772 = new cjs.Shape();
	this.shape_772.graphics.f("#E18F59").s().p("AgEAIIgCgBIAGgHIAFgJQADAEgCAFIgGADIgDADQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_772.setTransform(465.8,-190.1);

	this.shape_773 = new cjs.Shape();
	this.shape_773.graphics.f("#EEC09E").s().p("AAbAUIgHgHIgCgKQgJgCADgBIADgBIACAAQABgHADgGIAGgGIAFgDQgEAFACAIIACAJQAAAEgCAFQgDAJAFAHQgDgBgCgDgAgYAUQAAgCALgNIgGAEIgJAGQgHABAJgIIAGgFIABgBIgCAAIgDACIgFAEIgCAAIAAgDQABgDAKgEIgLADIAAgBIACgCQADgDAIgDQAJgDAFgDIACAAQgBAFAEAEIAFAAIAFgBIgFAGIgGAKIgEAHQgEAEgCgBIgBgBIAAgCQAJgLgEADIgIAHQgHAFgCAAIgBgBg");
	this.shape_773.setTransform(465.6,-191.1);

	this.shape_774 = new cjs.Shape();
	this.shape_774.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgDgCIAAgBQgGgHAEgKQABgEAAgEIgBgJQgCgIADgGQADgDAEgCQAGgCAMABQALAAAIAIIACADIAGAKIABAJQABAHgEAGQgBAEgDADIgEAEQgFAEgHACIgHABIgFAAg");
	this.shape_774.setTransform(471.5,-191.1);

	this.shape_775 = new cjs.Shape();
	this.shape_775.graphics.f("#372511").s().p("AgJBEQgDgBgDgEIAEgIQAGgLACgNIACgKQABgDABgEQAEgGgBgIIgBgIIgEgKIgCgDIgDgLQgDgPgJgMQAEgGAFgCQAGgDADAEQAHAFAFAOQAHAWAAAbQAAAdgHATQgFAMgHAFQAAACgEAAIgFgBg");
	this.shape_775.setTransform(473.9,-191.2);

	this.shape_776 = new cjs.Shape();
	this.shape_776.graphics.f("#48608E").s().p("AgDBIQgKgGgHgYQgDgIgBgIIgBgGQACACAEACIAAAAIADADQAGADAIABQAFABAHgCQAHgCAFgFIAEgDIgCAKQgCAMgGAMIgEAIQgEAGgHACIgCACIgBAAIgBAAgAgPg9QAEgHAEgCIABAAIABgBQABgBAFAFIAIAHQAJALADAQIADALQgIgIgLgBQgMAAgGACQgEACgDADIgFADQACgZAIgPg");
	this.shape_776.setTransform(471,-191);

	this.shape_777 = new cjs.Shape();
	this.shape_777.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_777.setTransform(470.2,-198.2);

	this.shape_778 = new cjs.Shape();
	this.shape_778.graphics.f("#3A4D75").s().p("AASBGQgOgFgMgRIgNgWQgDgEgBgEQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBIAEgDIAHgDIAJAIIAJAJQABAIADAIQAHAYAKAGQgEAAgEgCgAgUgGQgFgDAAgGQAAgFAGgJIALgQQANgSALgGQAEgCACAAIAAABQgEACgEAHQgIAPgCAZIgEAHIgDADIgHAEIgFABIgFAAg");
	this.shape_778.setTransform(467.9,-191);

	this.shape_779 = new cjs.Shape();
	this.shape_779.graphics.f("#41210C").s().p("AgIAgQgIgBgFgEIgDgCIgBgBQgFgHAEgKQABgEAAgDIgCgKQgBgJADgEQACgDAFgDQAGgCAMABQALAAAIAJIACACQADAFACAFQACAGAAADQAAAGgDAIQgBAEgDACIgEAEQgFAEgHACQgFACgFAAIgDAAg");
	this.shape_779.setTransform(471.5,-257.2);

	this.shape_780 = new cjs.Shape();
	this.shape_780.graphics.f("#372511").s().p("AgJBEQgDgCgDgDIAFgIQAFgMADgMIABgKQABgCABgEQADgIABgHQgBgCgCgGQgCgFgBgFIgCgCIgDgMQgDgPgJgMQAFgGAEgCQAHgDACAFQAHAEAEAOQAIAWAAAbQAAAdgIATQgEAMgHAFQgBACgDAAIgFgBg");
	this.shape_780.setTransform(473.9,-257.3);

	this.shape_781 = new cjs.Shape();
	this.shape_781.graphics.f("#EC672C").s().p("AgUAqIgEgRIAAgGIAFAEIABACIADACQAFADAIABQAFAAAIgCQAHgCAFgEIADgEIgBAKQgDANgFALIgFAIQgEAGgGADIgCACIgDAAQgKgGgHgYgAgPg9QAEgHAFgDIABAAQACgBAEAFIAIAHQAJALAEAPIACAMQgIgJgLAAQgLgBgGACQgGADgCADQgDABgCADQADgbAHgOg");
	this.shape_781.setTransform(470.9,-257.1);

	this.shape_782 = new cjs.Shape();
	this.shape_782.graphics.f("#E64A00").s().p("AASBHQgOgGgMgRQgJgMgFgKIgDgIQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABgCADgBQAEgDADAAIAJAIIAJAIIAEARQAHAYAKAGIgIgBgAgUgHQgFgCAAgGQAAgFAGgIIALgRQANgSALgGIAGgCIAAAAQgEADgEAHQgIAOgDAbIgDAGIgEADIgGAEIgFABIgBAAIgEgBg");
	this.shape_782.setTransform(467.9,-257.1);

	this.shape_783 = new cjs.Shape();
	this.shape_783.graphics.f("#E18F59").s().p("AgFAIIgBgBIAGgHIAFgJQADAEgCAGQgDAAgDACQgCACgBACQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_783.setTransform(465.8,-256.3);

	this.shape_784 = new cjs.Shape();
	this.shape_784.graphics.f("#EEC09E").s().p("AAbAUQgEgCgCgEQgDgGgBgFQgIgCADgBIADAAIACgBQABgHADgFIAFgGQADgDADgBQgDAEABAJIACAKQAAADgBAEQgEAKAFAHIgFgEgAgYAUQAAgCALgMQAAgBgGADIgJAHQgHABAJgJIAGgEIABgCIgBACIgEACIgFACIgBAAIgBgBQACgEAJgEQgJACgBAAIgBAAIACgBQAEgEAHgEIAPgFIABgBQAAAHADACIAFAAIAFAAIgFAGIgGAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgDACIgJAIQgHAFgCAAIgBgBg");
	this.shape_784.setTransform(465.6,-257.2);

	this.shape_785 = new cjs.Shape();
	this.shape_785.graphics.f("#E18F59").s().p("AgFAIIgBgBIAGgHIAFgJQADAFgCAEQgDAAgDAEQgCABgBACQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_785.setTransform(465.8,-239.7);

	this.shape_786 = new cjs.Shape();
	this.shape_786.graphics.f("#EEC09E").s().p("AAbAVIgGgIQgDgEgBgGQgIgCADgBIADAAIACgBQABgHADgFIAFgHIAGgDQgDAEABAJIACAKQAAADgBAFQgEAJAFAHIgFgDgAgYAVQAAgDALgNIgGAEQgHAFgCAAQgHACAJgIIAGgGIABAAIgBAAIgEADIgFADIgBAAIgBgCQACgEAJgEQgJADgBgBIgBAAIACgBQAEgEAHgEIAPgFIABgBQAAAHADACIAFABIAFgBIgFAGIgGAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgDADIgJAHQgHAGgCAAIgBgBg");
	this.shape_786.setTransform(465.6,-240.7);

	this.shape_787 = new cjs.Shape();
	this.shape_787.graphics.f("#FFF6CD").s().p("AgIAfQgIAAgFgEIgDgCIgBgBQgFgIAEgJQABgFAAgDIgCgJQgBgJADgFQACgDAFgCQAGgCAMAAQALAAAIAJIACACQADAFACAGQACAFAAAEQAAAGgDAHQgBAEgDADIgEADQgFAFgHACQgFACgFAAIgDgBg");
	this.shape_787.setTransform(471.5,-240.6);

	this.shape_788 = new cjs.Shape();
	this.shape_788.graphics.f("#372511").s().p("AgJBEQgDgBgDgDIAFgJQAFgLADgNIABgJQABgEABgEQADgGABgHQgBgEgCgFQgCgGgBgEIgCgCIgDgMQgDgPgJgLQAFgHAEgCQAHgDACAEQAHAFAEAOQAIAVAAAdQAAAcgIASQgEANgHAFQAAACgEAAIgFgBg");
	this.shape_788.setTransform(473.9,-240.8);

	this.shape_789 = new cjs.Shape();
	this.shape_789.graphics.f("#424242").s().p("AgDBIQgKgGgHgXIgEgRIAAgGIAFAEIABABIADACQAFAEAIAAQAFABAIgCQAHgCAFgFIADgDIgBAKQgDANgFALIgFAIQgEAFgGAEIgCABgAgPg8QAEgIAFgDIABAAQACgBAEAFIAIAHQAJAMAEAPIACALQgIgJgLAAQgLAAgGACQgGACgCADIgFAEQADgaAHgOg");
	this.shape_789.setTransform(470.9,-240.6);

	this.shape_790 = new cjs.Shape();
	this.shape_790.graphics.f("#393939").s().p("AASBHQgOgFgMgSQgJgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABgCADgCQAEgDADAAIAJAIIAJAJIAEARQAHAXAKAGIgIgBgAgUgGQgFgDAAgGQAAgFAGgIQADgHAIgJQANgTALgFQADgDADAAIAAAAQgEADgEAIQgIAOgDAaIgDAGIgEAEIgGAEIgFABIgFgBg");
	this.shape_790.setTransform(467.9,-240.6);

	this.shape_791 = new cjs.Shape();
	this.shape_791.graphics.f("#E18F59").s().p("AgFAIIgBgBIAGgHIAFgJQADAFgCAFQgDAAgDACIgDAEQAAAAAAABQgBAAAAABQAAAAAAAAQAAAAAAABIgBgCg");
	this.shape_791.setTransform(465.8,-223.2);

	this.shape_792 = new cjs.Shape();
	this.shape_792.graphics.f("#EEC09E").s().p("AAbAVQgEgDgCgFQgDgEgBgGQgIgCADgBIADAAIACgBQABgIADgEIAFgHIAGgDQgDAFABAHIACALQAAADgBAEQgEAJAFAIIgFgDgAgYAVQAAgEALgMIgGAEQgHAFgCAAQgHACAJgJIAGgEIABgBQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAABIgEABIgFADIgBAAIgBgBQACgEAJgFQgJADgBAAIgBAAIACgCQAEgDAHgEIAPgFIABAAQAAAFADADIAFABIAFgBIgFAGIgGAJIgEAHQgEAFgCgBIgBgBIAAgCQAJgKgDABIgJAIQgHAFgCAAIgBAAg");
	this.shape_792.setTransform(465.6,-224.1);

	this.shape_793 = new cjs.Shape();
	this.shape_793.graphics.f("#000000").s().p("AgIAfQgIAAgFgEIgDgCIgBgBQgFgIAEgJQABgEAAgDIgCgLQgBgIADgEQACgEAFgCQAGgCAMABQALAAAIAIIACADQADAEACAGQACAFAAAEQAAAHgDAGQgBAEgDADIgEADQgFAFgHACIgJABIgEAAg");
	this.shape_793.setTransform(471.5,-224.1);

	this.shape_794 = new cjs.Shape();
	this.shape_794.graphics.f("#447BCD").s().p("AASBHQgOgFgMgTQgJgKgFgLIgDgIQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAIAEgEQAEgCADgBIAJAIIAJAJIAEARQAHAXAKAGIgIgBgAgUgHQgFgCAAgGQAAgFAGgIIALgRQANgSALgGIAGgCIAAAAQgEADgEAHQgIAPgDAaIgDAGIgEAEIgGADIgFABIgFgBg");
	this.shape_794.setTransform(467.9,-224.1);

	this.shape_795 = new cjs.Shape();
	this.shape_795.graphics.f("#628DD1").s().p("AgDBJQgKgHgHgXIgEgRIAAgGIAFAEIABABIADACQAFAEAIAAQAFABAIgCQAHgCAFgFIADgDIgBAKQgDANgFALIgFAIQgEAGgGADIgCACgAgPg8QAEgIAFgCIABgBQACgBAEAFIAIAHQAJAMAEAPIACALQgIgIgLAAQgLgBgGACQgGACgCAEIgFADQADgaAHgOg");
	this.shape_795.setTransform(470.9,-224.1);

	this.shape_796 = new cjs.Shape();
	this.shape_796.graphics.f("#372511").s().p("AgJBEQgDgBgDgDIAFgJQAFgLADgMIABgKQABgDABgEQADgHABgHQgBgDgCgGQgCgFgBgFIgCgCIgDgMQgDgPgJgLQAFgGAEgDQAHgDACAEQAHAFAEAOQAIAWAAAcQAAAdgIARQgEAOgHAEQAAACgEAAIgFgBg");
	this.shape_796.setTransform(473.9,-224.3);

	this.shape_797 = new cjs.Shape();
	this.shape_797.graphics.f("#9F3D3D").s().p("Agnz9QA7BXAUAOIAABGIg0AHMAAAAifIA0ADIAABGQgNAIhCBZg");
	this.shape_797.setTransform(422.9,-170.9);

	this.shape_798 = new cjs.Shape();
	this.shape_798.graphics.f("#985E2F").s().p("ACERHMAAAgiYIBpgRMAAAAjFgAAEQkMAAAghgIBbgPMAAAAiHgAh8QAMAAAggnIBdgPMAAAAhQgAjtPiIAQ/5IA8gKMAAAAgXg");
	this.shape_798.setTransform(452.6,-172.5);

	this.shape_799 = new cjs.Shape();
	this.shape_799.graphics.f("#402913").s().p("ABuRCMAAAgiHIAlgGMAAAAiXgAgPQfMAAAghQIAjgFMAAAAhfgAiSP7MAAAggWIAlgGMAAAAgng");
	this.shape_799.setTransform(451.1,-173);

	this.shape_800 = new cjs.Shape();
	this.shape_800.graphics.f("#838383").s().p("AjbRjIg2gEMAAAgifIA2gGIHsg9IAAAdIhpARIglAGIhbAPIglAGIhbAPIglAGIg8AKIgQf5IBMAUIAlAKIBbAaIAlAKIBbAYIAlALIBpAcIAAAlg");
	this.shape_800.setTransform(449,-172.1);

	this.shape_801 = new cjs.Shape();
	this.shape_801.graphics.f("#646262").s().p("AglSHIAAglMAAAgjGIAAgcIBLgKMAAAAkVg");
	this.shape_801.setTransform(480.2,-172.3);

	this.shape_802 = new cjs.Shape();
	this.shape_802.graphics.f("#FAFAFD").s().p("AlET+QBEhZAMgIIAAhGIHtAiIBMAEIAACBgAj0yYQgUgOg8hXIKJAAIAABkIhMAKIntA9g");
	this.shape_802.setTransform(451.5,-170.9);

	this.shape_803 = new cjs.Shape();
	this.shape_803.graphics.f("#D9D9D9").s().p("AgjT+MAAAgn7IBHAAMAAAAn7g");
	this.shape_803.setTransform(415.3,-170.9);

	this.instance = new lib.Finishline("synched",0);
	this.instance.setTransform(-164.5,-68.4,1.366,1.366);

	this.shape_804 = new cjs.Shape();
	this.shape_804.graphics.f("#D6D6D6").s().p("AgMCPIAAkdIAaAAIAAEdg");
	this.shape_804.setTransform(10.1,215.2);

	this.shape_805 = new cjs.Shape();
	this.shape_805.graphics.f("#D6D6D6").s().p("AgMCPIAAkdIAaAAIAAEdg");
	this.shape_805.setTransform(41.5,185.8);

	this.shape_806 = new cjs.Shape();
	this.shape_806.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_806.setTransform(432.7,164.4);

	this.shape_807 = new cjs.Shape();
	this.shape_807.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGgBgHIgCAAIgDgCQgDAAAJgCQAAgGACgEQACgEAEgDIAGgEQgGAHAEAKQACAEAAAEIgCAJQgCAIAEAFIgGgDgAgEAPIgPgFQgHgEgEgDIgBgDIAAAAIALADQgKgEgBgDIAAgCIABgBIAGAEIADACIACABIgBgCIgGgEQgJgJAHABIAJAGIAGAEQgLgNAAgCQAAgDAJAHIAJAHQADADgIgLIAAgCIAAgBQADgBAEAFIAEAHIAGAJIAEAGIgEgBIgFABQgEADAAAGIgBgBg");
	this.shape_807.setTransform(428.1,157.2);

	this.shape_808 = new cjs.Shape();
	this.shape_808.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgCIABgBQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADAEIAGACQACAFgDAFIgGgKg");
	this.shape_808.setTransform(428.3,156.3);

	this.shape_809 = new cjs.Shape();
	this.shape_809.graphics.f("#5BB1B0").s().p("AAQBGQgLgGgMgSIgMgQQgGgJAAgFQAAgGAGgCIAFgBIAEABQAEABADADIADADIAEAHQADAZAIAPQADAHAFACIAAABQgDAAgEgCgAgTgLIgEgDQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQABgEADgEIAOgWQALgRAOgFQAFgCADAAQgKAGgHAYIgDAQIgJAJIgKAIIgGgDg");
	this.shape_809.setTransform(430.3,157.2);

	this.shape_810 = new cjs.Shape();
	this.shape_810.graphics.f("#6BD3D2").s().p("AgGBIIAAgBIgBAAQgEgCgEgHQgHgPgDgZIAGADQACADAEACQAGACANAAQAKgBAIgIIgCALQgEAQgKALQgBADgHAEQgDAEgCAAIgBAAgAAXgWQgGgFgHgCQgGgCgGABQgIABgGADIgCADIgBAAIgGAEIABgGIAEgQQAHgYAKgGIACAAIACACQAHADADAFIAFAIQAGAMACAMIACAKIgDgDg");
	this.shape_810.setTransform(433.5,157.2);

	this.shape_811 = new cjs.Shape();
	this.shape_811.graphics.f("#000000").s().p("AgSAeQgEgCgCgEQgEgFACgIIACgJQAAgEgCgEQgEgKAGgHIABgBIADgCQAFgEAIAAQAHgBAGACQAHACAFAEIADAEQADADACAEQADAGAAAGQAAAEgCAGQgCAFgEAFIgCADQgIAIgKAAIgEAAQgKAAgFgBg");
	this.shape_811.setTransform(433.9,157.2);

	this.shape_812 = new cjs.Shape();
	this.shape_812.graphics.f("#372511").s().p("AgIBEQgFgCgFgGQAJgMAEgPIACgLIACgDQACgFACgFQACgGAAgDQAAgHgDgGQgCgEgBgDIgCgKQgCgNgGgLIgEgIQADgEAEgBQAFgDAEAEQAGAFAFANQAHASAAAdQABAbgIAWQgFAOgGAFQgBACgEAAIgEgBg");
	this.shape_812.setTransform(436.3,157.3);

	this.shape_813 = new cjs.Shape();
	this.shape_813.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_813.setTransform(432.7,229.4);

	this.shape_814 = new cjs.Shape();
	this.shape_814.graphics.f("#000000").s().p("AgSAeQgEgCgCgEQgEgFACgIIACgJQAAgEgCgEQgEgKAGgHIABgBIADgCQAFgEAIAAQAHgBAGACQAHACAFAEIADAEQADADACAEQADAGAAAGQAAAEgCAGQgCAFgEAFIgCADQgIAIgKAAIgEAAQgKAAgFgBg");
	this.shape_814.setTransform(433.9,222.2);

	this.shape_815 = new cjs.Shape();
	this.shape_815.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGgBgHIgCAAIgDgCQgDAAAJgCQAAgGACgEQACgEAEgDIAGgEQgGAHAEAKQACAEAAAEIgCAJQgCAIAEAFIgGgDgAgEAPIgPgFQgHgEgEgDIgBgDIAAAAIALADQgKgEgBgEIAAgBIABgBIAGAEIADACIACABIgBgCIgGgEQgJgJAHABIAJAGIAGAEQgLgNAAgCQAAgDAJAHIAJAHQADADgIgLIAAgCIAAgBQADgBAEAFIAEAGIAGAKIAEAGIgEgBIgFABQgEADAAAGIgBgBg");
	this.shape_815.setTransform(428.1,222.2);

	this.shape_816 = new cjs.Shape();
	this.shape_816.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgCIABgBQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADAEIAGACQACAFgDAFIgGgKg");
	this.shape_816.setTransform(428.3,221.3);

	this.shape_817 = new cjs.Shape();
	this.shape_817.graphics.f("#372511").s().p("AgIBEQgFgCgFgGQAJgMAEgPIACgLIACgDQACgFACgFQACgGAAgDQAAgHgDgGQgCgEgBgDIgCgKQgCgNgGgLIgEgIQADgEAEgBQAFgDAEAEQAGAFAFANQAHASAAAdQABAbgIAWQgFAOgGAEQgBADgEAAIgEgBg");
	this.shape_817.setTransform(436.3,222.3);

	this.shape_818 = new cjs.Shape();
	this.shape_818.graphics.f("#4A7328").s().p("AAQBGQgLgGgMgSIgMgQQgGgJAAgFQAAgGAGgCIAFgBIAEABQAEABADADIADADIAEAHQADAZAIAPQADAHAFACIAAABQgDAAgEgCgAgTgLIgEgDQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQABgEADgEIAOgWQALgRAOgFQAFgCADAAQgKAGgHAYIgDAQIgJAJIgKAIIgGgDg");
	this.shape_818.setTransform(430.3,222.2);

	this.shape_819 = new cjs.Shape();
	this.shape_819.graphics.f("#609634").s().p("AgGBIIAAgBIgBAAQgEgCgEgHQgHgPgDgZIAGADQACADAEACQAGACANAAQAKgBAIgIIgCALQgEAQgKALIgIAHQgDAEgCAAIgBAAgAAXgWQgGgFgHgCQgGgCgGABQgIABgGADIgCACIgBABIgGAEIABgGIAEgQQAHgYAKgGIACAAIACACQAHADADAFIAFAIQAGAMACAMIACAKIgDgDg");
	this.shape_819.setTransform(433.5,222.2);

	this.shape_820 = new cjs.Shape();
	this.shape_820.graphics.f("#41210C").s().p("AgSAeQgFgCgCgEQgDgFABgHIACgLQABgDgCgFQgEgJAGgHIABgCIADgCQAFgCAIgBQAHgBAGACQAHACAFAFIADADQADADACAEQADAHAAAFQAAAEgDAGQgBAFgEAFIgCADQgIAIgLABIgDAAQgKAAgFgCg");
	this.shape_820.setTransform(433.9,124.9);

	this.shape_821 = new cjs.Shape();
	this.shape_821.graphics.f("#372511").s().p("AgIBEQgFgDgFgGQAJgLAEgPIACgLIADgDQABgFABgFQADgGAAgDQAAgGgDgHQgCgEAAgDIgDgKQgBgMgHgMIgEgIQADgDAEgCQAFgCAEAEQAGAEAFANQAGASABAdQAAAcgHAVQgFAOgGAFQgBACgEAAIgEgBg");
	this.shape_821.setTransform(436.3,125);

	this.shape_822 = new cjs.Shape();
	this.shape_822.graphics.f("#E64A00").s().p("AAQBGQgLgGgMgSQgIgKgEgHQgGgIAAgFQAAgGAGgCQACgBADAAIAEABIAHAEIADADQABAEADACQADAbAHAOQAEAHAFADIAAAAIgHgCgAgTgLQgDgBgBgCQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgRAOgGIAIgBQgKAGgHAYIgEARIgIAIIgKAIQgCAAgEgDg");
	this.shape_822.setTransform(430.3,124.8);

	this.shape_823 = new cjs.Shape();
	this.shape_823.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAQABACACACQADACADAAQACAGgDAEIgGgKg");
	this.shape_823.setTransform(428.3,123.9);

	this.shape_824 = new cjs.Shape();
	this.shape_824.graphics.f("#EEC09E").s().p("AAaAVQgDgDgCgDQgDgGAAgIIgDAAIgDgBQgDAAAJgBQAAgHADgEQACgEAEgDIAFgEQgFAHADAJQACAFgBADIgBALQgBAHACAFIgFgDgAgDAPIgPgFQgIgDgDgEIgCgDIABAAIAKAEQgKgFgBgEIABgCIABAAIAFAEIAEACIABABIgBgBIgGgGQgJgIAHACIAJAFQAGAFAAgBQgKgMgBgDQAAgEAKAIIAIAHQAEADgJgLIAAgCIABgBQACgCAEAGIAEAGIAHAJIAEAHIgFAAQgDgBgCABQgEACABAGIgBAAg");
	this.shape_824.setTransform(428.1,124.9);

	this.shape_825 = new cjs.Shape();
	this.shape_825.graphics.f("#EC672C").s().p("AgFBIIgBAAQgFgDgEgHQgHgOgDgbIAFAEQACADAFADQAHACALgBQALAAAIgJIgCAMQgEAPgJALIgJAHQgCAEgCAAIgBAAgAAXgWQgFgEgHgCQgIgCgFAAQgIABgFADIgDACIgBACIgGAEIABgGIAEgRQAHgYAKgGIACAAIADACQAGADAEAGIAEAIQAGALACANIACAKIgDgEg");
	this.shape_825.setTransform(433.4,124.8);

	this.shape_826 = new cjs.Shape();
	this.shape_826.graphics.f("#372511").s().p("AgIBEQgEgBgDgDIAEgJQAHgLABgMIADgKQAAgEACgEQADgGAAgHQAAgDgDgGQgBgFgBgFIgDgCIgCgMQgEgPgJgLQAFgGAFgDQAFgDAEAEQAGAFAFAOQAHAWAAAcQgBAdgGARQgFAOgGAEQgBACgEAAIgEgBg");
	this.shape_826.setTransform(436.3,43.7);

	this.shape_827 = new cjs.Shape();
	this.shape_827.graphics.f("#E18F59").s().p("AgFAJIgBgCIAFgHIAGgJQADAFgCAFQgDAAgDACIgDAEQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAIgBgBg");
	this.shape_827.setTransform(428.3,44.8);

	this.shape_828 = new cjs.Shape();
	this.shape_828.graphics.f("#FFF6CD").s().p("AgHAfQgIAAgFgEIgDgCIgBgBQgGgIAEgJQACgEgBgEIgCgJQgBgJADgEQACgEAFgCQAHgCALABQALAAAIAIIACADQAEAEABAGQADAFAAAEQAAAHgDAGQgCAEgDADIgDADQgFAFgHACIgKABIgDAAg");
	this.shape_828.setTransform(433.9,43.9);

	this.shape_829 = new cjs.Shape();
	this.shape_829.graphics.f("#424242").s().p("AgDBJQgKgHgHgXIgEgRIgBgGIAGAEIABABIADACQAFAEAIAAQAFABAIgCQAHgCAFgFIADgDIgCAKQgCANgGALIgEAIQgEAFgGAEIgDACgAgPg8QAEgIAFgDIABAAQACgBADAFIAJAHQAJAMAEAPIACALQgIgIgLAAQgLgBgHACQgFACgCAEIgFADQADgaAHgOg");
	this.shape_829.setTransform(433.4,43.9);

	this.shape_830 = new cjs.Shape();
	this.shape_830.graphics.f("#393939").s().p("AASBHQgOgGgLgSQgKgLgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABAAIAEgEQAEgDACABIAKAIIAIAIIAEARQAHAXAKAHQgEAAgEgCgAgTgGQgGgDAAgGQAAgEAGgKIAMgPQAMgTALgGQADgCAEAAIAAAAQgFADgEAIQgHAOgDAZIgEAHIgDADIgHAFIgEABIgFgBg");
	this.shape_830.setTransform(430.3,43.9);

	this.shape_831 = new cjs.Shape();
	this.shape_831.graphics.f("#EEC09E").s().p("AAbAVQgEgEgCgEQgDgEAAgGQgJgCADgBIADgBIADAAQAAgHADgFIAFgHIAFgDQgCAEABAJIABAJQABAEgCAEQgDAKAFAHIgFgDgAgYAVQABgDAKgNIgGAEQgHAFgCABQgHABAJgJIAGgEIABgCIgBACIgEACIgFACIgBAAIgBgBQABgEAKgEIgKACIgBAAIACgBQADgEAIgEIAPgFIABgBQgBAHAEACIAFABIAFgBIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgKgEABIgIAIQgHAFgCAAIgBAAg");
	this.shape_831.setTransform(428.1,43.9);

	this.shape_832 = new cjs.Shape();
	this.shape_832.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQABACACABQADADADAAQACAFgDAFIgGgKg");
	this.shape_832.setTransform(428.3,26.9);

	this.shape_833 = new cjs.Shape();
	this.shape_833.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFAAgHIgDgBIgDgBQgDAAAJgCQAAgGADgEQACgEAEgEIAFgDQgFAHADAKQACAEgBADIgBALQgBAIACAEIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKAEQgKgFgBgEIABgBQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAABABAAIAFACIAEADIABAAIgBAAIgGgFQgJgJAHACIAJAFIAGAEQgKgMgBgEQAAgDAKAIIAIAHQAEADgJgLIAAgBIABgCQACgBAEAFIAEAHIAHAJIAEAGQgBAAAAAAQgBgBgBAAQAAAAgBAAQAAAAgBAAQgDAAgCABQgEACABAHIgBgBg");
	this.shape_833.setTransform(428.1,27.8);

	this.shape_834 = new cjs.Shape();
	this.shape_834.graphics.f("#628DD1").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAFACQAHACALAAQALAAAIgJIgCALQgEAPgJAMQgCADgHAEQgDAEgCAAIAAAAgAAXgWQgFgFgHgCQgIgCgFABQgIABgFADIgDACIgBABIgGAEIABgGIAEgRQAHgXAKgGIACAAIADABQAGAEAEAFIAEAJQAGAKACANIACAKIgDgDg");
	this.shape_834.setTransform(433.4,27.7);

	this.shape_835 = new cjs.Shape();
	this.shape_835.graphics.f("#000000").s().p("AgSAeQgFgCgCgDQgDgFABgIIACgKQABgDgCgFQgEgJAGgIIABgBIADgCQAFgDAIgBQAHgBAGACQAHACAFAFIADADQADADACAEQADAHAAAFQAAAFgDAFQgBAGgEAFIgCACQgIAJgLAAIgCAAQgKAAgGgCg");
	this.shape_835.setTransform(433.9,27.7);

	this.shape_836 = new cjs.Shape();
	this.shape_836.graphics.f("#447BCD").s().p("AAQBGQgLgGgMgSQgIgKgEgHQgGgIAAgFQAAgGAGgCQACgCADAAQAAAAABAAQAAAAABABQAAAAABAAQABAAAAABIAHAEIADADIAEAGQADAaAHAOQAEAIAFADIAAAAIgHgCgAgTgLQgDgCgBgCQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgRAOgGIAIgBQgKAGgHAXIgEARIgIAJIgKAIQgCAAgEgDg");
	this.shape_836.setTransform(430.3,27.7);

	this.shape_837 = new cjs.Shape();
	this.shape_837.graphics.f("#372511").s().p("AgIBEQgFgCgFgHQAJgLAEgPIACgLIADgDQABgEABgGQADgFAAgEQAAgHgDgGQgCgEAAgEIgDgJQgBgNgHgLIgEgJQADgDAEgBQAFgCAEADQAGAFAFANQAGASABAcQAAAdgHAVQgFAOgGAFQgBACgDAAIgFgBg");
	this.shape_837.setTransform(436.3,27.9);

	this.shape_838 = new cjs.Shape();
	this.shape_838.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_838.setTransform(432.7,67.3);

	this.shape_839 = new cjs.Shape();
	this.shape_839.graphics.f("#EEC09E").s().p("AAaAVQgDgCgCgEQgDgGgBgHIgCAAIgDgCQgDAAAJgCQAAgGACgEQACgEAEgEIAGgDQgGAHAEAKQACAEAAAEIgCAKQgCAHAEAFIgGgDgAgEAPIgPgGQgHgDgEgDIgBgDIAAAAIALAEQgKgFgBgDIAAgCIABgBIAGAEIADACIACAAIgBgBIgGgEQgJgJAHACIAJAFIAGAEQgLgNAAgDQAAgCAJAIIAJAGQADADgIgLIAAgCIAAgBQADgBAEAEIAEAHIAGAJIAEAHQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgFABQgEACAAAHIgBgBg");
	this.shape_839.setTransform(428.1,60.2);

	this.shape_840 = new cjs.Shape();
	this.shape_840.graphics.f("#E18F59").s().p("AgBAAIgFgHIABgBIABgBQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAABIADADIAGACQACAGgDADIgGgJg");
	this.shape_840.setTransform(428.3,59.3);

	this.shape_841 = new cjs.Shape();
	this.shape_841.graphics.f("#3A4D75").s().p("AAQBGQgLgGgMgSIgMgRQgGgIAAgEQAAgHAGgCIAFgBQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAEABADADIADAEQABADADACQADAaAIAPQADAIAFACIAAAAQgDAAgEgCgAgTgLIgEgDQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgDADgFIAOgWQALgRAOgFIAIgCQgKAGgHAYIgDARIgJAIIgKAIIgGgDg");
	this.shape_841.setTransform(430.3,60.1);

	this.shape_842 = new cjs.Shape();
	this.shape_842.graphics.f("#372511").s().p("AgIBEQgFgCgFgHQAJgLAEgPIACgLIACgDQACgFACgFQACgGAAgDQAAgHgDgGQgCgEgBgEIgCgJQgCgNgGgLIgEgIQADgEAEgBQAFgDAEAEQAGAFAFAMQAHATAAAcQABAcgIAWQgFAOgGAEQgCADgDAAIgEgBg");
	this.shape_842.setTransform(436.3,60.3);

	this.shape_843 = new cjs.Shape();
	this.shape_843.graphics.f("#48608E").s().p("AgGBIIAAAAIgBAAQgEgCgEgIQgHgOgDgaIAGADQACAEAEACQAGACANgBQAKAAAIgIIgCALQgEAPgKALQgBADgHAEQgDAEgCAAIgBAAgAAXgWQgGgFgHgBQgGgDgGACQgIAAgGAEIgCACIgBAAIgGAEIABgFIAEgRQAHgYAKgGIACAAIACACQAHADADAGIAFAIQAGALACANIACAJIgDgDg");
	this.shape_843.setTransform(433.5,60.1);

	this.shape_844 = new cjs.Shape();
	this.shape_844.graphics.f("#000000").s().p("AgSAeQgEgCgCgEQgEgFACgIIACgKQAAgDgCgEQgEgKAGgIIABAAIADgCQAFgEAIAAQAHgCAGADQAHABAFAFIADADQADAEACAEQADAGAAAGQAAAEgCAGQgCAFgEAFIgCADQgIAIgKAAIgEABQgKAAgFgCg");
	this.shape_844.setTransform(433.9,60.2);

	this.shape_845 = new cjs.Shape();
	this.shape_845.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAQABADACAAQADADADAAQACAGgDAEIgGgKg");
	this.shape_845.setTransform(428.3,75.4);

	this.shape_846 = new cjs.Shape();
	this.shape_846.graphics.f("#EEC09E").s().p("AAaAVQgDgDgCgEQgDgFAAgHIgDgBIgDgBQgDAAAJgBQAAgHADgEQACgEAEgDIAFgEQgFAHADAJQACAFgBADIgBAKQgBAIACAFIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKADQgKgEgBgEIABgCIABAAIAFADIAEADIABABIgBgBIgGgGQgJgIAHABIAJAGIAGAEQgKgMgBgDQAAgEAKAIIAIAHQAEACgJgKIAAgCIABgBQACgBAEAFIAEAHIAHAJIAEAGIgFgBQgDAAgCABQgEACABAGIgBAAg");
	this.shape_846.setTransform(428.1,76.3);

	this.shape_847 = new cjs.Shape();
	this.shape_847.graphics.f("#41210C").s().p("AgSAeQgFgDgCgDQgDgFABgIIACgKQABgDgCgFQgEgJAGgHIABgBIADgDQAFgDAIgBQAHAAAGACQAHACAFAEIADAEQADADACAEQADAGAAAGQAAAFgDAFQgBAFgEAFIgCACQgIAJgLABIgCAAQgKAAgGgCg");
	this.shape_847.setTransform(433.9,76.3);

	this.shape_848 = new cjs.Shape();
	this.shape_848.graphics.f("#EC672C").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAFACQAHADALgBQALgBAIgIIgCALQgEAPgJAMQgCADgHAEQgDAFgCAAIAAgBgAAXgWQgFgFgHgCQgIgCgFABQgIABgFADIgDACIgBABIgGAEIABgGIAEgRQAHgXAKgHIACABIADACQAGADAEAFIAEAIQAGAMACAMIACAKIgDgDg");
	this.shape_848.setTransform(433.4,76.3);

	this.shape_849 = new cjs.Shape();
	this.shape_849.graphics.f("#372511").s().p("AgIBEQgFgCgFgHQAJgLAEgPIACgMIADgCQABgFABgFQADgFAAgEQAAgHgDgGQgCgEAAgDIgDgKQgBgNgHgLIgEgIQADgEAEgBQAFgDAEAEQAGAFAFANQAGASABAdQAAAbgHAWQgFAOgGAFQgBACgDAAIgFgBg");
	this.shape_849.setTransform(436.3,76.4);

	this.shape_850 = new cjs.Shape();
	this.shape_850.graphics.f("#E64A00").s().p("AAQBGQgLgGgMgSIgMgQQgGgJAAgFQAAgGAGgDQACAAADAAIAEAAIAHAFIADADQABAEADADQADAaAHANQAEAIAFADIAAAAIgHgCgAgTgLQgDgBgBgDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIADgHQAFgKAKgLQALgSAOgGIAIgCQgKAHgHAXIgEARQgEADgEAGIgKAIQgCAAgEgDg");
	this.shape_850.setTransform(430.3,76.3);

	this.shape_851 = new cjs.Shape();
	this.shape_851.graphics.f("#E18F59").s().p("AgFAJIgBgCIAFgGIAGgKQADAFgCAFIgGACIgDAEQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABg");
	this.shape_851.setTransform(428.3,109.5);

	this.shape_852 = new cjs.Shape();
	this.shape_852.graphics.f("#EEC09E").s().p("AAaAUQgEgDgCgEQgCgEAAgGQgJgCADgBIADgBIACgBQABgGADgGQACgEADgCIAGgDQgEAFACAHIACAKQAAAEgCAEQgEAKAGAHIgGgEgAgYAUQAAgCALgNIgGAEIgJAFQgHACAJgJIAGgEIABgBIgCAAIgDACIgGAEIgBgBIAAgCQABgDAKgFIgLADIAAAAIABgCQAEgDAHgDIAPgGIABgBQAAAHAEACIAFABIAEgBIgEAGIgGAKIgEAGQgEAFgDgBIAAgBIAAgCQAIgLgDADIgJAGQgHAGgCAAIAAgBg");
	this.shape_852.setTransform(428.1,108.6);

	this.shape_853 = new cjs.Shape();
	this.shape_853.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_853.setTransform(432.7,101.4);

	this.shape_854 = new cjs.Shape();
	this.shape_854.graphics.f("#4A7328").s().p("AASBGQgOgFgLgRIgOgWQgDgFgBgDQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAIAEgDIAGgDIAKAIIAJAIIADARQAHAYAKAGQgDAAgFgCgAgTgHQgGgCAAgHQAAgEAGgIIAMgRQAMgSALgGQAEgCADAAIAAAAQgFACgDAIQgIAPgDAaQgDACgBADIgDAEQgDADgEABIgEABIgFgBg");
	this.shape_854.setTransform(430.3,108.7);

	this.shape_855 = new cjs.Shape();
	this.shape_855.graphics.f("#609634").s().p("AgDBIQgKgGgHgYIgEgRIgBgFIAGAEIABAAIACACQAGAEAIAAQAGACAGgDQAHgBAGgFIADgDIgCAJQgCANgGALIgFAIQgDAGgHADIgCACIgBAAIgBAAgAgPg9QAEgIAEgCIABAAIAAAAQACgBAEAFIAIAGQAKAMAEAPIACALQgIgIgKAAQgNgBgGACQgEACgCAEIgGADQADgaAHgOg");
	this.shape_855.setTransform(433.5,108.7);

	this.shape_856 = new cjs.Shape();
	this.shape_856.graphics.f("#000000").s().p("AgHAfQgIAAgFgEIgDgCIgBAAQgGgIAEgKQACgEAAgDIgCgKQgCgIAEgFQACgEAEgCQAHgCAMABQAKAAAIAIIACADQAEAFACAFQACAGAAADQAAAHgDAGQgCAEgDAEIgDADQgFAFgHABQgFACgCAAIgGgBg");
	this.shape_856.setTransform(433.9,108.6);

	this.shape_857 = new cjs.Shape();
	this.shape_857.graphics.f("#372511").s().p("AgIBEQgEgBgDgEIAEgIQAGgLACgNIACgJQABgEACgEQADgGAAgIQAAgCgCgGQgCgFgCgFIgCgDIgCgLQgEgPgJgMQAFgGAFgCQAFgDAEAFQAGAEAFAOQAIAWgBAcQAAAcgHASQgFANgGAFQgBACgDAAIgFgBg");
	this.shape_857.setTransform(436.3,108.5);

	this.shape_858 = new cjs.Shape();
	this.shape_858.graphics.f("#E18F59").s().p("AgFAIIgBgBIAFgHIAGgJQADAEgCAGQgDAAgDACQgCACgBACQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIgBgCg");
	this.shape_858.setTransform(428.3,93.3);

	this.shape_859 = new cjs.Shape();
	this.shape_859.graphics.f("#000000").s().p("AgHAfQgIAAgFgEIgDgCIgBgBQgGgIAEgJQACgFgBgDIgCgKQgBgIADgFQACgDAFgCQAHgCALAAQALAAAIAJIACACQAEAFABAGQADAFAAAEQAAAGgDAHQgCAEgDADIgDADQgFAFgHACQgGACgEAAIgDgBg");
	this.shape_859.setTransform(433.9,92.4);

	this.shape_860 = new cjs.Shape();
	this.shape_860.graphics.f("#372511").s().p("AgIBEQgEgBgDgDIAEgJQAHgLABgNIADgJQAAgEACgEQADgGAAgHQAAgEgDgFQgBgGgBgEIgDgCIgCgMQgEgPgJgLQAFgHAFgCQAFgDAEAEQAGAFAFAOQAHAVAAAdQgBAcgGASQgFANgGAFQgBACgEAAIgEgBg");
	this.shape_860.setTransform(436.3,92.3);

	this.shape_861 = new cjs.Shape();
	this.shape_861.graphics.f("#447BCD").s().p("AASBHQgOgFgLgSQgKgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABAAQABgCADgCQAEgDACAAIAKAIIAIAJIAEARQAHAXAKAGIgIgBgAgTgGQgGgDAAgGQAAgFAGgIQAEgHAIgKQAMgSALgGIAHgCIAAAAQgFADgEAIQgHAOgDAaIgEAGIgDAEIgHAEIgEABIgFgBg");
	this.shape_861.setTransform(430.3,92.4);

	this.shape_862 = new cjs.Shape();
	this.shape_862.graphics.f("#628DD1").s().p("AgDBIQgKgGgHgXIgEgRIgBgGIAGAEIABABIADACQAFAEAIAAQAFABAIgCQAHgCAFgFIADgDIgCAKQgCANgGALIgEAIQgEAFgGAEIgDABgAgPg8QAEgIAFgDIABAAQACgBADAFQAHAEACADQAJAMAEAPIACALQgIgJgLAAQgLAAgHACQgFACgCADIgFAEQADgaAHgOg");
	this.shape_862.setTransform(433.4,92.4);

	this.shape_863 = new cjs.Shape();
	this.shape_863.graphics.f("#EEC09E").s().p("AAbAVQgEgEgCgEQgDgEAAgGQgJgCADgBIADAAIADgBQAAgHADgFIAFgHIAFgDQgCAEABAIIABALQABADgCAFQgDAJAFAHIgFgDgAgYAVQABgEAKgMIgGAEIgJAFQgHACAJgIIAGgGIABAAIgBAAIgEADIgFADIgBAAIgBgCQABgEAKgFIgKADIgBAAIACgBQADgEAIgEIAPgFIABgBQgBAHAEACIAFABIAFgBIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgEADIgIAHQgHAGgCAAIgBgBg");
	this.shape_863.setTransform(428.1,92.4);

	this.shape_864 = new cjs.Shape();
	this.shape_864.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_864.setTransform(432.7,148.2);

	this.shape_865 = new cjs.Shape();
	this.shape_865.graphics.f("#E18F59").s().p("AgBAAIgFgHIABgBIABgBQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADAEIAGACQACAGgDADIgGgJg");
	this.shape_865.setTransform(428.3,140.2);

	this.shape_866 = new cjs.Shape();
	this.shape_866.graphics.f("#000000").s().p("AgSAeQgEgCgCgDQgEgFACgIIACgKQAAgEgCgEQgEgKAGgHIABgBIADgCQAFgDAIgBQAHgBAGACQAHACAFAEIADAEQADADACAEQADAHAAAFQAAAFgCAFQgCAGgEAEIgCADQgIAIgKABIgDAAQgKAAgGgCg");
	this.shape_866.setTransform(433.9,141);

	this.shape_867 = new cjs.Shape();
	this.shape_867.graphics.f("#48608E").s().p("AgGBIIAAAAIgBAAQgEgDgEgHQgHgOgDgaIAGADQACAEAEABQAGADANgBQAKAAAIgIIgCAKQgEAQgKALQgBADgHAEQgDAEgCAAIgBAAgAAXgWQgGgFgHgBQgGgDgGABQgIABgGADIgCADIgBAAIgGAEIABgFIAEgRQAHgYAKgGIACAAIACACQAHADADAFIAFAIQAGAMACANIACAJIgDgDg");
	this.shape_867.setTransform(433.5,141);

	this.shape_868 = new cjs.Shape();
	this.shape_868.graphics.f("#372511").s().p("AgIBEQgFgCgFgHQAJgLAEgQIACgKIACgDQACgFACgFQACgGAAgDQAAgGgDgHQgCgEgBgDIgCgKQgCgNgGgMIgEgIIAHgEQAFgDAEAFQAGAEAFANQAHASAAAcQABAdgIAVQgFAOgGAFQgBACgEAAIgEgBg");
	this.shape_868.setTransform(436.3,141.2);

	this.shape_869 = new cjs.Shape();
	this.shape_869.graphics.f("#3A4D75").s().p("AAQBFQgLgFgMgSIgMgQQgGgJAAgEQAAgHAGgDIAFgBQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQAEABADADIADADIAEAGQADAbAIAOQADAHAFADIAAAAQgDAAgEgDgAgTgLIgEgDQgBgBAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQABgDADgFIAOgWQALgRAOgFIAIgCQgKAGgHAYIgDARIgJAIIgKAIIgGgDg");
	this.shape_869.setTransform(430.3,141);

	this.shape_870 = new cjs.Shape();
	this.shape_870.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGgBgHIgCgBIgDgBQgDAAAJgBQAAgHACgEQACgEAEgDIAGgFQgGAIAEAKQACAEAAADIgCALQgCAIAEAFIgGgEgAgEAPIgPgGQgHgDgEgDIgBgDIAAAAIALADQgKgEgBgDIAAgCIABgBIAGAEIADACIACAAIgBAAIgGgFQgJgJAHACIAJAFIAGAEQgLgNAAgCQAAgEAJAIIAJAHQADADgIgLIAAgCIAAgBQADgBAEAEIAEAHIAGAJIAEAHQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgFAAQgEADAAAHIgBgBg");
	this.shape_870.setTransform(428.1,141.1);

	this.shape_871 = new cjs.Shape();
	this.shape_871.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQABACACABQADADADAAQACAGgDAEIgGgKg");
	this.shape_871.setTransform(428.3,204.8);

	this.shape_872 = new cjs.Shape();
	this.shape_872.graphics.f("#EEC09E").s().p("AAaAVQgDgCgCgFQgDgFAAgHIgDgBIgDgBQgDAAAJgBQAAgHADgEQACgEAEgDIAFgEQgFAHADAKQACAEgBADIgBALQgBAIACAEIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAQAAAAAKAEQgKgFgBgEIABgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAABABIAFACIAEADIABABIgBgBIgGgFQgJgIAHABIAJAFIAGAEQgKgMgBgDQAAgEAKAIIAIAHQAEADgJgLIAAgBIABgCQACgBAEAFIAEAHIAHAJIAEAGIgFgBQgDAAgCABQgEACABAHIgBgBg");
	this.shape_872.setTransform(428.1,205.7);

	this.shape_873 = new cjs.Shape();
	this.shape_873.graphics.f("#E64A00").s().p("AAQBGQgLgGgMgSQgIgKgEgHQgGgIAAgFQAAgGAGgCQACgCADABIAEABIAHAEIADADQABAEADACQADAbAHANQAEAIAFADIAAAAIgHgCgAgTgLQgDgBgBgDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgRAOgGIAIgBQgKAGgHAXIgEASQgEACgEAGIgKAIQgCAAgEgDg");
	this.shape_873.setTransform(430.3,205.7);

	this.shape_874 = new cjs.Shape();
	this.shape_874.graphics.f("#41210C").s().p("AgSAeQgFgCgCgEQgDgEABgIIACgLQABgDgCgEQgEgKAGgHIABgBIADgDQAFgCAIgCQAHAAAGACQAHACAFAEIADAEQADADACAEQADAHAAAFQAAAFgDAFQgBAGgEAEIgCADQgIAIgLABIgCAAQgKAAgGgCg");
	this.shape_874.setTransform(433.9,205.7);

	this.shape_875 = new cjs.Shape();
	this.shape_875.graphics.f("#EC672C").s().p("AgFBIIgBAAQgFgDgEgIQgHgNgDgbIAFAEQACADAFACQAHADALgBQALAAAIgJIgCALQgEAPgJAMQgCADgHAEQgDAEgCAAIAAAAgAAXgWQgFgFgHgBQgIgDgFABQgIABgFADIgDACIgBABIgGAEIABgFIAEgSQAHgXAKgGIACAAIADACQAGADAEAGIAEAIQAGALACANIACAJIgDgDg");
	this.shape_875.setTransform(433.4,205.7);

	this.shape_876 = new cjs.Shape();
	this.shape_876.graphics.f("#372511").s().p("AgIBEQgFgCgFgHQAJgLAEgPIACgLIADgDQABgEABgGQADgFAAgEQAAgGgDgHQgCgEAAgDIgDgKQgBgMgHgMIgEgIIAHgFQAFgCAEAEQAGAEAFANQAGASABAdQAAAcgHAVQgFAOgGAFQgBACgDAAIgFgBg");
	this.shape_876.setTransform(436.3,205.8);

	this.shape_877 = new cjs.Shape();
	this.shape_877.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgCIABgBQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIADAEQADACADAAQACAFgDAFIgGgKg");
	this.shape_877.setTransform(428.3,188.6);

	this.shape_878 = new cjs.Shape();
	this.shape_878.graphics.f("#FFF6CD").s().p("AgSAeQgFgCgCgEQgDgEABgJIACgJQABgEgCgEQgEgJAGgIIABgBIADgCQAFgEAIAAQAHgBAGACQAHACAFAFIADADQADADACAEQADAGAAAGQAAAFgDAFQgBAGgEAEIgCADQgIAIgLAAIgDAAQgKAAgFgBg");
	this.shape_878.setTransform(433.9,189.5);

	this.shape_879 = new cjs.Shape();
	this.shape_879.graphics.f("#393939").s().p("AAQBFQgLgFgMgSIgMgQQgGgKAAgEQAAgGAGgDIAFgBIAEABIAHAFIADADIAEAGQADAaAHAOQAEAIAFADIAAABQgEgBgDgDgAgTgLIgEgDQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIADgHQAFgKAKgMQALgRAOgFQAEgCAEgBQgKAHgHAYIgEAQIgIAJIgKAHQgCAAgEgCg");
	this.shape_879.setTransform(430.3,189.5);

	this.shape_880 = new cjs.Shape();
	this.shape_880.graphics.f("#424242").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFADQACAEAFACQAHACALgBQALAAAIgIIgCALQgEAPgJAMIgJAHQgDAFgCAAIAAgBgAAXgWQgFgFgHgCQgIgCgFABQgIAAgFAEIgDACIgBABIgGAEIABgGIAEgRQAHgXAKgHIACAAIADACQAGAEAEAFIAEAIQAGALACANIACAKIgDgDg");
	this.shape_880.setTransform(433.4,189.5);

	this.shape_881 = new cjs.Shape();
	this.shape_881.graphics.f("#372511").s().p("AgIBEQgFgDgFgGQAJgLAEgPIACgMIADgCQABgFABgFQADgGAAgDQAAgHgDgGQgCgEAAgEIgDgKQgBgMgHgLIgEgJQADgDAEgBQAFgDAEAEQAGAEAFAOQAGARABAdQAAAcgHAWQgFAOgGAFQgBACgDAAIgFgBg");
	this.shape_881.setTransform(436.3,189.7);

	this.shape_882 = new cjs.Shape();
	this.shape_882.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGAAgHIgDgBIgDgBQgDAAAJgCQAAgGADgEQACgEAEgDIAFgEQgFAIADAIQACAFgBADIgBAKQgBAJACAEIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKAEQgKgGgBgDIABgCIABAAIAFAEIAEACIABABIgBgBIgGgGQgJgIAHABQACAAAHAGIAGAEQgKgNgBgCQAAgDAKAHIAIAHQAEACgJgKIAAgCIABgBQACgBAEAFIAEAHIAHAIIAEAHIgFgBIgFABQgEADABAGIgBgBg");
	this.shape_882.setTransform(428.1,189.6);

	this.shape_883 = new cjs.Shape();
	this.shape_883.graphics.f("#000000").s().p("AgSAeQgFgCgCgDQgDgFABgIIACgKQABgDgCgFQgEgJAGgIIABgBIADgCQAFgEAIAAQAHgBAGACQAHACAFAFIADADQADADACAEQADAHAAAFQAAAFgDAFQgBAGgEAFIgCACQgIAJgLAAIgCAAQgKAAgGgCg");
	this.shape_883.setTransform(433.9,173.3);

	this.shape_884 = new cjs.Shape();
	this.shape_884.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFAAgHIgDgBIgDgBQgDAAAJgCQAAgGADgEQACgEAEgEIAFgDQgFAHADAJQACAFgBADIgBALQgBAIACAEIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKAEQgKgFgBgEIABgCIABAAIAFADIAEADIABAAIgBAAIgGgGQgJgIAHACIAJAFIAGAEQgKgMgBgEQAAgDAKAIIAIAHQAEADgJgLIAAgBIABgCQACgBAEAFIAEAHIAHAJIAEAGIgFgBIgFABQgEACABAHIgBgBg");
	this.shape_884.setTransform(428.1,173.4);

	this.shape_885 = new cjs.Shape();
	this.shape_885.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQABACACABQADADADAAQACAFgDAFIgGgKg");
	this.shape_885.setTransform(428.3,172.5);

	this.shape_886 = new cjs.Shape();
	this.shape_886.graphics.f("#372511").s().p("AgIBEQgFgCgFgHQAJgLAEgPIACgMIADgCQABgEABgGQADgFAAgEQAAgHgDgGQgCgEAAgEIgDgJQgBgNgHgLIgEgJQADgDAEgBQAFgCAEADQAGAFAFANQAGASABAcQAAAdgHAVQgFAOgGAFQgBACgDAAIgFgBg");
	this.shape_886.setTransform(436.3,173.5);

	this.shape_887 = new cjs.Shape();
	this.shape_887.graphics.f("#628DD1").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAFACQAHACALAAQALAAAIgJIgCALQgEAPgJAMQgCADgHAEQgDAEgCAAIAAAAgAAXgWQgFgFgHgCQgIgCgFABQgIAAgFAEIgDACIgBABIgGAEIABgGIAEgRQAHgXAKgGIACAAIADABQAGAEAEAFIAEAJQAGAKACANIACAKIgDgDg");
	this.shape_887.setTransform(433.4,173.3);

	this.shape_888 = new cjs.Shape();
	this.shape_888.graphics.f("#447BCD").s().p("AAQBGQgLgGgMgSQgIgKgEgHQgGgIAAgFQAAgGAGgDIAFgBIAEABIAHAFIADADIAEAGQADAaAHAOQAEAIAFADIAAAAIgHgCgAgTgLQgDgCgBgCQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgSAOgFIAIgBQgKAGgHAXIgEARIgIAJIgKAIQgCAAgEgDg");
	this.shape_888.setTransform(430.3,173.3);

	this.shape_889 = new cjs.Shape();
	this.shape_889.graphics.f("#372511").s().p("AgIBEQgEgBgDgEIAEgIQAGgLACgNIACgJIADgIQADgGAAgIQAAgCgCgGQgCgFgCgFIgCgDQgBgGgCgEQgDgQgJgLQAEgHAGgCQAFgDAEAFQAGAEAFAOQAHAWAAAcQAAAcgHATQgFAMgGAFQgBACgEAAIgEgBg");
	this.shape_889.setTransform(448.7,187.2);

	this.shape_890 = new cjs.Shape();
	this.shape_890.graphics.f("#E18F59").s().p("AgFAIIgBAAIAFgIIAGgJQADAFgCAEIgGAEIgDADQgBAAAAAAQAAABAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_890.setTransform(440.7,188.2);

	this.shape_891 = new cjs.Shape();
	this.shape_891.graphics.f("#EEC09E").s().p("AAaAUIgGgHIgCgLQgJgBADgBIADAAIACgBQABgHADgGIAFgGIAFgEQgDAGACAIIABAKQAAADgBAEQgEAKAGAIIgGgFgAgYAUQAAgDAKgMIgFAEIgJAGQgHABAJgJIAGgFIABgBIgCABIgDADIgGACIgBAAIAAgBQABgEAKgEIgLACIAAAAIABgCQAEgDAHgDIAPgHIABAAQAAAGADADIAGABQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIgEAHIgGAJIgEAHQgEAFgDgBIAAgCIAAgBQAIgLgDADIgJAHQgHAFgCAAIAAgBg");
	this.shape_891.setTransform(440.5,187.3);

	this.shape_892 = new cjs.Shape();
	this.shape_892.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgCgCIgBAAQgGgIAEgKQABgEAAgDIgBgKQgCgIADgFQADgEAEgBQAHgDALABQALAAAIAIIACADQAEAFACAFQACAGAAADQAAAHgDAGIgFAIIgDADQgGAFgGABQgFACgCAAIgGgBg");
	this.shape_892.setTransform(446.3,187.3);

	this.shape_893 = new cjs.Shape();
	this.shape_893.graphics.f("#48608E").s().p("AgDBIQgKgGgIgYIgDgRIgBgFIAGAEIABAAIACACQAGAEAIAAQAGACAGgDQAHgBAFgFIAEgDIgCAJQgCANgGALIgFAIQgDAGgHADIgCACIgBAAIgBAAgAgPg9QAEgHAEgDIABAAIAAAAQADgBADAFQAGAEADADQAJALADAQQACAEABAGQgIgIgLAAQgMgBgGADQgFABgCAEIgFADQADgaAHgOg");
	this.shape_893.setTransform(445.9,187.4);

	this.shape_894 = new cjs.Shape();
	this.shape_894.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_894.setTransform(445.1,180.1);

	this.shape_895 = new cjs.Shape();
	this.shape_895.graphics.f("#3A4D75").s().p("AASBHQgOgGgLgRQgJgMgFgKQgDgFgBgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAIAEgDIAHgDIAKAIIAIAJIAEAQQAHAZAKAFIgIgBgAgUgGQgFgDAAgGQAAgFAGgJIAMgPQAMgTALgGQAEgCADAAIAAABQgFACgDAHQgIAOgDAaIgEAHIgDADQgDADgEABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBABAAAAIgGgBg");
	this.shape_895.setTransform(442.7,187.4);

	this.shape_896 = new cjs.Shape();
	this.shape_896.graphics.f("#372511").s().p("AgIBEQgEgBgDgEIAEgIQAGgLACgNIACgJIADgIQADgGAAgIQAAgCgCgGQgCgFgCgFIgCgDQgBgGgCgEQgDgQgJgLQAEgHAGgCQAFgDAEAFQAGAEAFAOQAHAWAAAcQAAAcgHASQgFANgGAFQgBACgEAAIgEgBg");
	this.shape_896.setTransform(448.7,92.2);

	this.shape_897 = new cjs.Shape();
	this.shape_897.graphics.f("#E18F59").s().p("AgFAJIgBgBIAFgHIAGgKQADAFgCAFIgGADIgDADQgBAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABg");
	this.shape_897.setTransform(440.7,93.2);

	this.shape_898 = new cjs.Shape();
	this.shape_898.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgCgCIgBAAQgGgIAEgKQABgEAAgDIgBgKQgCgIADgFQADgEAEgBQAHgDALABQALAAAIAIIACADQAEAFACAFQACAGAAADQAAAHgDAGIgFAIIgDADQgGAFgGABQgFACgCAAIgGgBg");
	this.shape_898.setTransform(446.3,92.3);

	this.shape_899 = new cjs.Shape();
	this.shape_899.graphics.f("#EEC09E").s().p("AAaAVIgGgIIgCgKQgJgCADgBIADgBIACAAQABgHADgGIAFgGIAFgDQgDAFACAHIABAKQAAAEgBAEQgEAKAGAHIgGgDgAgYAVQAAgDAKgNIgFAEIgJAFQgHACAJgJIAGgEIABgBIgCAAIgDACIgGADIgBAAIAAgCQABgDAKgFIgLAEIAAgBIABgCQAEgDAHgEIAPgFIABgBQAAAHADACQADABADAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAIgEAGIgGAKIgEAGQgEAFgDgBIAAgBIAAgCQAIgLgDADIgJAGQgHAGgCAAIAAAAg");
	this.shape_899.setTransform(440.5,92.3);

	this.shape_900 = new cjs.Shape();
	this.shape_900.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_900.setTransform(445.1,85.1);

	this.shape_901 = new cjs.Shape();
	this.shape_901.graphics.f("#4A7328").s().p("AASBGQgOgFgLgRQgJgMgFgKQgDgFgBgDQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgBAAAAIAEgDIAHgDIAKAIIAIAIIAEARQAHAYAKAGIgIgCgAgUgHQgFgCAAgHQAAgEAGgIIAMgQQAMgTALgGQAEgCADAAIAAAAQgFADgDAHQgIAPgDAaIgEAFIgDAEQgDADgEABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAQgDAAgDgBg");
	this.shape_901.setTransform(442.7,92.4);

	this.shape_902 = new cjs.Shape();
	this.shape_902.graphics.f("#609634").s().p("AgDBIQgKgGgIgYIgDgRIgBgFIAGAEIABAAIACACQAGAEAIAAQAGACAGgDQAHgBAFgFIAEgDIgCAJQgCANgGALIgFAIQgDAGgHADIgCACIgBAAIgBAAgAgPg9QAEgHAEgDIABAAIAAAAQADgBADAFQAGAEADADQAJALADAQQACAEABAGQgIgIgLAAQgMgBgGADQgFABgCAEIgFADQADgaAHgOg");
	this.shape_902.setTransform(445.9,92.4);

	this.shape_903 = new cjs.Shape();
	this.shape_903.graphics.f("#E18F59").s().p("AgFAIIgBgBIAFgHIAGgJQADAEgCAGQgDAAgDACIgDAEQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgBgCg");
	this.shape_903.setTransform(440.7,219.9);

	this.shape_904 = new cjs.Shape();
	this.shape_904.graphics.f("#EEC09E").s().p("AAbAVIgHgIQgCgEAAgGQgJgCADgBIADAAIADgBQAAgHADgFIAFgHIAFgDQgCAEABAIIABALQABADgCAFQgDAJAFAHIgFgDgAgYAVQABgEAKgMIgGAEIgJAFQgHACAJgIIAGgGIABAAIgCAAIgDADIgFADIgBAAIgBgCQABgEAKgEIgKACIgBAAIACgBQADgEAIgEIAPgFIABgBQgBAHAEACIAFABIAFgBIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgEADIgIAHQgHAGgCAAIgBgBg");
	this.shape_904.setTransform(440.5,218.9);

	this.shape_905 = new cjs.Shape();
	this.shape_905.graphics.f("#447BCD").s().p("AASBHQgOgFgLgSQgKgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAIAEgEQAFgDACAAIAKAIIAIAJIAEARQAHAXAKAGIgIgBgAgUgGQgFgDAAgGQAAgFAGgIQAEgHAIgKQAMgSALgGIAHgCIAAAAQgFADgEAIQgHAOgDAaIgEAGIgDAEIgHAEIgEABIgGgBg");
	this.shape_905.setTransform(442.7,219);

	this.shape_906 = new cjs.Shape();
	this.shape_906.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgCgCIgCgBQgFgIAEgJQABgFAAgDIgCgKQgBgIADgFQACgDAFgCQAHgCALAAQALAAAIAJIACACQAEAFABAGQADAFAAAEQAAAGgDAHIgFAHIgDADQgGAFgGACIgKACIgDgBg");
	this.shape_906.setTransform(446.3,219);

	this.shape_907 = new cjs.Shape();
	this.shape_907.graphics.f("#372511").s().p("AgJBEQgDgBgDgDIAEgJQAHgLABgMIACgKIADgIQADgGAAgHQAAgEgCgFQgCgGgCgEIgCgCIgCgMQgDgPgKgLQAEgHAFgCQAHgDADAEQAGAFAFAOQAHAVAAAdQgBAdgGARQgFANgGAFQgBACgEAAIgFgBg");
	this.shape_907.setTransform(448.7,218.8);

	this.shape_908 = new cjs.Shape();
	this.shape_908.graphics.f("#628DD1").s().p("AgDBIQgKgGgHgXIgEgRIgBgGIAFAEIACABIACACQAGAEAIAAQAFABAIgCQAGgCAGgFIADgDIgCAKQgCANgGALIgEAIQgEAFgHAEIgCABgAgPg8QAEgIAFgDIABAAQACgBADAFQAHAEACADQAJAMADAPIADALQgIgJgLAAQgLAAgHACQgFACgCADIgFAEQADgaAHgOg");
	this.shape_908.setTransform(445.8,219);

	this.shape_909 = new cjs.Shape();
	this.shape_909.graphics.f("#372511").s().p("AgJBEIgGgFIAEgIQAHgLABgNIACgKIADgHQADgHAAgGQAAgEgCgFQgCgGgCgEIgCgCIgCgMQgDgPgKgLQAEgHAFgCQAHgDADAEQAGAFAFAOQAHAVAAAcQgBAdgGASQgFANgGAEQgCADgDAAIgFgBg");
	this.shape_909.setTransform(448.7,171.3);

	this.shape_910 = new cjs.Shape();
	this.shape_910.graphics.f("#41210C").s().p("AgHAgQgIgBgGgDIgCgDIgCgBQgFgHAEgJQABgFAAgDIgCgLQgBgIADgEQACgEAFgCQAHgCALAAQALABAIAJIACACQAEAEABAGQADAFAAAEQAAAGgDAHIgFAHIgDAEQgGAEgGACQgGACgFAAIgCAAg");
	this.shape_910.setTransform(446.3,171.4);

	this.shape_911 = new cjs.Shape();
	this.shape_911.graphics.f("#E18F59").s().p("AgFAIIgBgBIAFgHIAGgJQADAEgCAFQgDAAgDADQgCACgBACQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIgBgCg");
	this.shape_911.setTransform(440.7,172.4);

	this.shape_912 = new cjs.Shape();
	this.shape_912.graphics.f("#EEC09E").s().p("AAbAUQgEgDgDgEQgCgEAAgHQgJgBADgBIADAAIADgBQAAgHADgFQACgEADgDIAFgDQgCAEABAIIABALQABADgCAFQgDAJAFAHIgFgEgAgYAUQABgDAKgMIgGAEIgJAFQgHACAJgIIAGgGIABgBIgCABIgDADIgFADIgBAAIgBgCQABgEAKgEIgKACIgBAAIACgBQADgEAIgEIAPgFIABgBQgBAHAEACQACABADAAIAFgBIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgEADIgIAHQgHAFgCAAIgBgBg");
	this.shape_912.setTransform(440.5,171.4);

	this.shape_913 = new cjs.Shape();
	this.shape_913.graphics.f("#EC672C").s().p("AgUArIgEgSIgBgFIAFAEIACABIACACQAGADAIABQAFABAIgDQAGgBAGgFIADgDIgCAJQgCANgGAMIgEAIQgEAFgHADIgCACIgCAAQgKgGgHgXgAgPg8QAEgIAFgDIABAAQACgBADAFQAHAEACADQAJAMADAPIADALQgIgJgLAAQgLgBgHADQgFACgCADIgFAEQADgbAHgNg");
	this.shape_913.setTransform(445.8,171.5);

	this.shape_914 = new cjs.Shape();
	this.shape_914.graphics.f("#E64A00").s().p("AASBHQgOgFgLgSQgKgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAQACgDACgBQAFgDACAAIAKAIQAEAGAEACIAEASQAHAXAKAGIgIgBgAgUgGQgFgDAAgGQAAgFAGgIQAEgHAIgKQAMgSALgGIAHgCIAAAAQgFADgEAIQgHANgDAbQgDACgBAEIgDAEIgHAEIgEAAIgCAAIgEAAg");
	this.shape_914.setTransform(442.7,171.5);

	this.shape_915 = new cjs.Shape();
	this.shape_915.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_915.setTransform(445.1,147.1);

	this.shape_916 = new cjs.Shape();
	this.shape_916.graphics.f("#E18F59").s().p("AgBAAIgFgHIABgBIABgBQAAABAAAAQAAAAAAAAQAAABAAAAQAAAAABABIADADIAGADQACAFgDAFIgGgKg");
	this.shape_916.setTransform(440.7,139);

	this.shape_917 = new cjs.Shape();
	this.shape_917.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFgBgHIgCAAIgDgCQgDAAAJgCIACgKIAGgIIAGgDQgGAHAEAKQABAEAAAEIgBAKQgCAHADAFIgFgDgAgEAPIgPgFQgHgEgEgDIgBgDIAAAAIALAEQgKgFgBgDIAAgCIABgBIAGAEIADACIACAAIgBgBIgGgEQgJgJAHACIAJAFIAFAEQgKgNAAgDQAAgCAJAHIAJAHQADADgIgLIAAgCIAAgBQADgBAEAFIAEAGIAGAKIAEAGQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgDAAgDABQgDACAAAHIgBgBg");
	this.shape_917.setTransform(440.5,139.9);

	this.shape_918 = new cjs.Shape();
	this.shape_918.graphics.f("#4A7328").s().p("AAQBGQgLgGgMgTIgMgQQgGgIAAgEQAAgHAFgCQADgBADAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAEABADADIADADIAEAGQADAbAIAOQADAHAFADIAAAAQgDAAgEgCgAgUgLIgEgEQAAAAgBAAQAAgBAAAAQAAAAAAAAQAAgBAAAAQABgDADgFQAFgKAJgMQALgRAOgFIAIgCQgKAGgHAXIgEASIgIAIIgKAIIgHgDg");
	this.shape_918.setTransform(442.7,139.9);

	this.shape_919 = new cjs.Shape();
	this.shape_919.graphics.f("#000000").s().p("AgSAeQgEgCgDgDQgDgFACgIIABgKQAAgEgBgEQgEgKAGgHIABgBIACgCQAGgDAIgBQAHgBAGACQAGACAGAEIADAEIAFAHQADAHAAAFQAAAFgCAFQgCAGgEAEIgCADQgIAIgLABIgCAAQgKAAgGgCg");
	this.shape_919.setTransform(446.3,139.9);

	this.shape_920 = new cjs.Shape();
	this.shape_920.graphics.f("#609634").s().p("AgGBIIAAAAIgBAAQgEgDgEgHQgHgOgDgaIAFADQACAEAFABQAGADAMgBQALAAAIgIQgBAGgCAEQgDAQgJALQgDADgGAEQgDAEgCAAIgBAAgAAWgWQgFgFgHgBQgGgDgGABQgIABgGADIgCADIgBAAIgGAEIABgFIADgRQAIgYAKgGIACAAIACACQAHADADAFIAFAJQAGALACANIACAJIgEgDg");
	this.shape_920.setTransform(445.9,139.8);

	this.shape_921 = new cjs.Shape();
	this.shape_921.graphics.f("#372511").s().p("AgIBEQgGgCgEgHQAJgLADgQQACgEABgGIACgDQACgFACgFQACgGAAgDQAAgHgDgGIgDgIIgCgJQgCgNgGgLIgEgJIAHgEQAFgDAEAEQAGAFAFANQAHASAAAcQAAAcgHAWQgFAOgGAEQgBADgEAAIgEgBg");
	this.shape_921.setTransform(448.7,140);

	this.shape_922 = new cjs.Shape();
	this.shape_922.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_922.setTransform(445.1,210.4);

	this.shape_923 = new cjs.Shape();
	this.shape_923.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGgBgHIgCAAIgDgCQgDAAAJgCIACgKIAGgIIAGgDQgGAHAEAJQABAFAAAEIgBAJQgCAIADAFIgFgDgAgEAPIgPgGQgHgDgEgDIgBgDIAAAAIALADQgKgEgBgDIAAgDIABAAIAGAEQAAAAABAAQABABAAAAQAAAAABAAQAAABAAAAIACAAIgBgBIgGgFQgJgIAHABIAJAGIAFAEQgKgNAAgDQAAgDAJAIIAJAHQADADgIgLIAAgCIAAgBQADgBAEAEIAEAHIAGAKIAEAGIgEgBIgGABQgDADAAAFIgBAAg");
	this.shape_923.setTransform(440.5,203.3);

	this.shape_924 = new cjs.Shape();
	this.shape_924.graphics.f("#E18F59").s().p("AgBAAIgFgHIABgBIABgBQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIADAEIAGACQACAFgDAFIgGgKg");
	this.shape_924.setTransform(440.7,202.4);

	this.shape_925 = new cjs.Shape();
	this.shape_925.graphics.f("#000000").s().p("AgSAeQgEgCgDgDQgDgGACgIIABgJQAAgEgBgEQgEgKAGgHIABgBIACgCQAGgEAIAAQAHgBAGACQAGACAGAEIADAEIAFAHQADAGAAAGQAAAFgCAFQgCAFgEAFIgCADQgIAIgLAAIgFABQgIAAgFgCg");
	this.shape_925.setTransform(446.3,203.2);

	this.shape_926 = new cjs.Shape();
	this.shape_926.graphics.f("#6BD3D2").s().p("AgGBIIAAAAIgBAAQgEgDgEgHQgHgPgDgZIAFADQACAEAFABQAGADAMgBQALgBAIgIQgBAHgCAEQgDAQgJALQgDADgGAEQgDAEgCAAIgBAAgAAWgWQgFgFgHgCQgGgCgGABQgIABgGADIgCADIgBAAIgGAEIABgGIADgQQAIgYAKgGIACAAIACACQAHADADAFIAFAIQAGAMACAMIACAKIgEgDg");
	this.shape_926.setTransform(445.9,203.2);

	this.shape_927 = new cjs.Shape();
	this.shape_927.graphics.f("#372511").s().p("AgIBEQgGgCgEgGQAJgMADgPQACgFABgGIACgDQACgFACgFQACgFAAgEQAAgHgDgGIgDgHIgCgKQgCgNgGgLIgEgIQADgEAEgBQAFgDAEAEQAGAFAFANQAHASAAAdQAAAbgHAWQgFAOgGAFQgBACgEAAIgEgBg");
	this.shape_927.setTransform(448.7,203.3);

	this.shape_928 = new cjs.Shape();
	this.shape_928.graphics.f("#5BB1B0").s().p("AAQBGQgLgGgMgSIgMgQQgGgJAAgFQAAgGAFgCIAGgBIAEABIAHAEIADADIAEAHQADAZAIAPQADAHAFADIAAAAQgDAAgEgCgAgUgLIgEgDQAAgBgBAAQAAAAAAgBQAAAAAAAAQAAgBAAAAQABgEADgEQAFgKAJgMQALgRAOgFQAFgCADAAQgKAGgHAYIgEAQIgIAJIgKAIIgHgDg");
	this.shape_928.setTransform(442.7,203.2);

	this.shape_929 = new cjs.Shape();
	this.shape_929.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgCIABgBQAAABAAAAQAAAAAAABQAAAAAAAAQAAABABAAIADADQADADADAAQACAFgDAFIgGgKg");
	this.shape_929.setTransform(440.7,123.1);

	this.shape_930 = new cjs.Shape();
	this.shape_930.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGAAgHIgDgBIgDgBQgDAAAJgCQAAgGACgEIAHgIIAFgDQgFAHADAJQACAFgBADIgBAKQgBAIACAFIgFgDgAgDAPIgPgGIgLgGIgCgDIABAAIAKAEQgKgGgBgDIABgCIABAAIAFAEIADACIACAAIgBAAIgGgGQgJgIAHACIAJAEQAGAGAAgBQgKgNgBgDQAAgDAKAIIAIAHQAEACgJgLIAAgBIABgBQACgCAEAGIAEAGIAHAJIAEAHIgFgBQgDAAgCABQgEACABAGIgBAAg");
	this.shape_930.setTransform(440.5,124.1);

	this.shape_931 = new cjs.Shape();
	this.shape_931.graphics.f("#393939").s().p("AAQBGQgLgGgMgTQgIgJgEgHQgGgIAAgFQAAgGAFgCQADgCADAAIAEACIAHAEIADADIAEAGQADAaAHAPQAEAHAFADIAAAAIgHgCgAgUgLIgEgDQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgRAOgGIAIgBQgKAGgHAYIgEAQIgIAJIgKAIQgCAAgFgDg");
	this.shape_931.setTransform(442.7,124);

	this.shape_932 = new cjs.Shape();
	this.shape_932.graphics.f("#FFF6CD").s().p("AgSAeQgFgCgCgEQgDgEABgJIACgKQAAgDgBgEQgEgKAFgHIACgBIACgCQAGgEAIAAQAHgBAGACQAGACAGAFIADACIAFAIQADAGAAAGQAAAFgDAFQgBAGgEAEIgCADQgIAIgLAAIgDAAQgKAAgFgBg");
	this.shape_932.setTransform(446.3,124);

	this.shape_933 = new cjs.Shape();
	this.shape_933.graphics.f("#372511").s().p("AgJBEQgFgCgEgHQAKgLADgPIACgLIACgDQACgEACgGQACgFAAgEQAAgHgDgGIgDgIIgCgJQgBgNgHgLIgEgIQADgEADgBQAHgCADADQAGAFAFANQAGASABAcQAAAdgHAVQgFAOgGAFQgBACgEAAIgFgBg");
	this.shape_933.setTransform(448.7,124.1);

	this.shape_934 = new cjs.Shape();
	this.shape_934.graphics.f("#424242").s().p("AgFBIIgBAAQgFgDgEgHQgHgPgDgaIAFAEQACADAFACQAHACALAAQALAAAIgJIgDAMQgDAPgJALQgCADgHAEQgCAEgCAAIgBAAgAAXgWQgGgFgGgCQgIgCgFABQgIABgGADIgCACIgCACIgFADIABgGIAEgQQAHgYAKgGIACAAIACABQAHAEAEAFIAEAJQAGALACAMIACAKIgDgDg");
	this.shape_934.setTransform(445.8,124);

	this.shape_935 = new cjs.Shape();
	this.shape_935.graphics.f("#372511").s().p("AgJBEQgFgDgEgGQAKgLADgPIACgMIACgCQACgFACgFQACgFAAgEQAAgHgDgGIgDgIIgCgKQgBgMgHgLIgEgJQADgDADgBQAHgDADAEQAGAEAFAOQAGARABAdQAAAcgHAWQgFAOgGAFQgBACgDAAIgGgBg");
	this.shape_935.setTransform(448.7,155.8);

	this.shape_936 = new cjs.Shape();
	this.shape_936.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAIADAEQADACADAAQACAFgDAFIgGgKg");
	this.shape_936.setTransform(440.7,154.8);

	this.shape_937 = new cjs.Shape();
	this.shape_937.graphics.f("#447BCD").s().p("AAQBGQgLgGgMgSIgMgQQgGgKAAgEQAAgGAFgDIAGgBIAEABIAHAFIADADIAEAHQADAZAHAOQAEAIAFADIAAABIgHgDgAgUgLIgEgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQAAAAAAgBIADgHQAFgKAKgMQALgRAOgFIAIgDQgKAHgHAYIgEAQIgIAIIgKAJQgCAAgFgDg");
	this.shape_937.setTransform(442.7,155.7);

	this.shape_938 = new cjs.Shape();
	this.shape_938.graphics.f("#000000").s().p("AgSAeQgFgCgCgDQgDgFABgIIACgKQAAgEgBgEQgEgJAFgIIACgBIACgCQAGgEAIAAQAHgBAGACQAGACAGAFIADADIAFAHQADAGAAAGQAAAFgDAFQgBAGgEAEIgCADQgIAIgLAAIgDAAQgKAAgFgBg");
	this.shape_938.setTransform(446.3,155.7);

	this.shape_939 = new cjs.Shape();
	this.shape_939.graphics.f("#628DD1").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAFACQAHACALgBQALAAAIgIIgDALQgDAPgJAMQgCADgHAEQgDAFgCAAIAAgBgAAXgWQgGgFgGgCQgIgCgFABQgIAAgGAEIgCACIgCABIgFAEIABgGIAEgRQAHgXAKgHIACAAIACACQAHAEAEAFIAEAIQAGALACANIACAKIgDgDg");
	this.shape_939.setTransform(445.8,155.7);

	this.shape_940 = new cjs.Shape();
	this.shape_940.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFAAgHIgDgBIgDgBQgDAAAJgCQAAgGACgEIAHgIIAFgDQgFAHADAJQACAFgBADIgBAKQgBAIACAFIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKADQgKgFgBgDIABgCIABAAIAFADIADACIACABIgBgBIgGgFQgJgIAHABQACAAAHAGIAGAEQgKgMgBgEQAAgDAKAIIAIAHQAEACgJgKIAAgCIABgBQACgBAEAFIAEAHIAHAIIAEAHIgFgBIgFABQgEACABAGIgBAAg");
	this.shape_940.setTransform(440.5,155.7);

	this.shape_941 = new cjs.Shape();
	this.shape_941.graphics.f("#E18F59").s().p("AgFAJIgBgBIAFgHIAGgKQADAEgCAGIgGACIgDAEQgBAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAg");
	this.shape_941.setTransform(440.7,29.9);

	this.shape_942 = new cjs.Shape();
	this.shape_942.graphics.f("#EEC09E").s().p("AAaAUIgGgHIgCgKQgJgBADgCIADgBIACAAQABgHADgGIAFgGIAFgDQgDAFACAIIABAJQAAAEgBAFQgEAJAGAHIgGgEgAgYAUQAAgCAKgNIgFAEIgJAGQgHABAJgIIAGgFIABgBIgCAAIgDACIgGAEIgBAAIAAgDQABgDAKgEIgLADIAAgBIABgCQAEgDAHgDIAPgGIABgBQAAAHADACIAGABIAEgBIgEAGIgGAKIgEAHQgEAEgDgBIAAgBIAAgCQAIgLgDADIgJAHQgHAFgBAAIgBgBg");
	this.shape_942.setTransform(440.5,29);

	this.shape_943 = new cjs.Shape();
	this.shape_943.graphics.f("#5BB1B0").s().p("AASBGQgOgFgLgRQgJgMgFgKIgEgIQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAAAIAEgEIAHgDIAKAIIAIAIIAEARQAHAYAKAGIgIgCgAgUgHQgFgCAAgHQAAgEAGgIIAMgRQAMgSALgGQAEgCADAAIAAAAQgFADgDAHQgIAOgDAbIgEAGIgDAEIgHADIgEABIgGgBg");
	this.shape_943.setTransform(442.7,29);

	this.shape_944 = new cjs.Shape();
	this.shape_944.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_944.setTransform(445.1,21.8);

	this.shape_945 = new cjs.Shape();
	this.shape_945.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgCgCIgBgBQgGgHAEgKQABgEAAgEIgBgJQgCgIADgGQADgDAEgCQAHgCALAAQALABAIAIIACADIAGAKQACAFAAAEQAAAGgDAHIgFAHIgDAEQgGAEgGACIgIACIgFgBg");
	this.shape_945.setTransform(446.3,29);

	this.shape_946 = new cjs.Shape();
	this.shape_946.graphics.f("#6BD3D2").s().p("AgDBIQgKgGgIgYIgDgRIgBgFIAGAEIABAAIACADQAGADAIABQAGABAGgCQAHgCAFgFIAEgDIgCAKQgCAMgGAMIgFAIQgDAFgHADIgCACIgBAAIgBAAgAgPg9QAEgHAEgDIABAAIAAAAQADgBADAFQAGAEADADQAJALADAQQACAEABAHQgIgIgLgBQgMgBgGADQgFABgCAEIgFADQADgaAHgOg");
	this.shape_946.setTransform(445.9,29);

	this.shape_947 = new cjs.Shape();
	this.shape_947.graphics.f("#372511").s().p("AgIBEQgEgBgDgEIAEgIQAGgLACgNIACgKIADgHQADgHAAgHQAAgDgCgFIgEgKIgCgDQgBgGgCgFQgDgPgJgMQAEgGAGgCQAFgDAEAEQAGAFAFAOQAHAVAAAcQAAAdgHASQgFANgGAFQgBACgDAAIgFgBg");
	this.shape_947.setTransform(448.7,28.9);

	this.shape_948 = new cjs.Shape();
	this.shape_948.graphics.f("#E18F59").s().p("AgFAJIgBgCIAFgGIAGgJQADADgCAGIgGACIgDADQgBABAAAAQAAABAAAAQAAABAAAAQAAAAAAABg");
	this.shape_948.setTransform(440.7,109.1);

	this.shape_949 = new cjs.Shape();
	this.shape_949.graphics.f("#EEC09E").s().p("AAaAUIgGgHIgCgKQgJgCADgBIADgBIACAAQABgHADgGIAFgGIAFgDQgDAFACAIIABAJQAAAEgBAEQgEAKAGAHIgGgEgAgYAUQAAgCAKgNIgFAEIgJAGQgHABAJgJIAGgEIABgCIgCABIgDACIgGAEIgBgBIAAgBQABgEAKgEIgLACIAAAAIABgCQAEgDAHgEQAJgCAGgDIABgBQAAAGADADIAGABIAEgBIgEAGIgGAKIgEAGQgEAFgDgBIAAgBIAAgCQAIgLgDADIgJAHQgHAFgBAAIgBgBg");
	this.shape_949.setTransform(440.5,108.1);

	this.shape_950 = new cjs.Shape();
	this.shape_950.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_950.setTransform(445.1,101);

	this.shape_951 = new cjs.Shape();
	this.shape_951.graphics.f("#3A4D75").s().p("AASBGQgOgFgLgRQgJgMgFgKQgDgEgBgEQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBIAEgDIAHgDIAKAIIAIAJIAEAQQAHAYAKAGQgDAAgFgCgAgUgGQgFgDAAgGQAAgFAGgJIAMgQQAMgSALgGQAEgCADAAIAAABQgFACgDAHQgIAPgDAZIgEAHIgDADQgDADgEABIgEABIgGAAg");
	this.shape_951.setTransform(442.7,108.2);

	this.shape_952 = new cjs.Shape();
	this.shape_952.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgCgCIgBgBQgGgHAEgKQABgEAAgEIgBgJQgCgIADgFQADgEAEgCQAHgCALABQALAAAIAIIACADQAEAFACAFQACAGAAADQAAAHgDAGIgFAHIgDAEQgGAEgGACIgIABIgFAAg");
	this.shape_952.setTransform(446.3,108.1);

	this.shape_953 = new cjs.Shape();
	this.shape_953.graphics.f("#48608E").s().p("AgDBIQgKgGgIgYIgDgQIgBgGIAGAEIABABIACACQAGADAIABQAGABAGgCQAHgCAFgFIAEgDIgCAKQgCAMgGAMIgFAIQgDAGgHACIgCACIgBAAIgBAAgAgPg9QAEgHAEgCIABAAIAAgBQADgBADAFIAJAHQAJALADAQQACAEABAHQgIgIgLgBQgMAAgGACQgFACgCADIgFADQADgZAHgPg");
	this.shape_953.setTransform(445.9,108.2);

	this.shape_954 = new cjs.Shape();
	this.shape_954.graphics.f("#372511").s().p("AgIBEQgEgBgDgEIAEgIQAGgLACgNIACgKIADgHQADgGAAgIQAAgCgCgGQgCgFgCgFIgCgDQgBgGgCgFQgDgPgJgMQAEgGAGgCQAFgDAEAFQAGAEAFAOQAHAWAAAbQAAAdgHATQgFAMgGAFQgBACgDAAIgFgBg");
	this.shape_954.setTransform(448.7,108);

	this.shape_955 = new cjs.Shape();
	this.shape_955.graphics.f("#E18F59").s().p("AgFAIIgBgBIAFgHIAGgJQADAEgCAGQgDAAgDADIgDADQgBAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_955.setTransform(440.7,45.7);

	this.shape_956 = new cjs.Shape();
	this.shape_956.graphics.f("#EEC09E").s().p("AAbAUQgEgDgDgEQgCgEAAgHQgJgBADgBIADAAIADgBQAAgHADgGQACgEADgCIAFgDQgCAEABAIIABALQABADgCAEQgDAKAFAHIgFgEgAgYAUQABgDAKgMIgGAEIgJAFQgHABAJgIIAGgFIABgBIgCABIgDADIgFACIgBAAIgBgBQABgEAKgFQgKAEAAgBIgBAAIACgCQADgEAIgDIAPgFIABgBQgBAHAEACQACABADgBIAFAAIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgEADIgIAHQgHAFgCAAIgBgBg");
	this.shape_956.setTransform(440.5,44.8);

	this.shape_957 = new cjs.Shape();
	this.shape_957.graphics.f("#E64A00").s().p("AASBHQgOgGgLgRQgKgMgFgKIgDgIQAAAAAAAAQAAgBAAAAQAAAAAAgBQABAAAAgBIAEgDQAFgDACAAIAKAIIAIAIIAEARQAHAYAKAGIgIgBgAgUgHQgFgCAAgGQAAgFAGgIIAMgRQAMgSALgGIAHgCIAAAAQgFADgEAHQgHAOgDAbQgDACgBAEIgDADIgHAEIgEABIgDAAIgDgBg");
	this.shape_957.setTransform(442.7,44.8);

	this.shape_958 = new cjs.Shape();
	this.shape_958.graphics.f("#EC672C").s().p("AgUAqIgEgRIgBgFIAFAEIACABIACACQAGADAIABQAFABAIgDQAGgBAGgFIADgDIgCAJQgCANgGALIgEAIQgEAGgHADIgCACIgCAAQgKgGgHgYgAgPg9QAEgHAFgDIABAAQACgBADAFQAHAEACADQAJAMADAOIADAMQgIgJgLAAQgLgBgHACQgFADgCADIgFAEQADgbAHgOg");
	this.shape_958.setTransform(445.8,44.8);

	this.shape_959 = new cjs.Shape();
	this.shape_959.graphics.f("#41210C").s().p("AgHAfQgIgBgGgDIgCgCIgCgBQgFgHAEgKQABgEAAgDIgCgLQgBgIADgEQACgEAFgCQAHgCALAAQALABAIAIIACADQAEAEABAGQADAFAAAEQAAAGgDAHIgFAHIgDADQgGAFgGACQgGACgDAAIgEgBg");
	this.shape_959.setTransform(446.3,44.8);

	this.shape_960 = new cjs.Shape();
	this.shape_960.graphics.f("#372511").s().p("AgJBEIgGgFIAEgIQAHgMABgMIACgKIADgHQADgHAAgHQAAgDgCgFQgCgGgCgEIgCgDIgCgLQgDgPgKgLQAEgHAFgCQAHgDADAEQAGAFAFAOQAHAVAAAcQgBAdgGASQgFANgGAEQgCADgEAAIgEgBg");
	this.shape_960.setTransform(448.7,44.7);

	this.shape_961 = new cjs.Shape();
	this.shape_961.graphics.f("#372511").s().p("AgJBEQgDgBgDgDIAEgJQAHgLABgMIACgKIADgIQADgGAAgHQAAgDgCgGQgCgFgCgFIgCgCIgCgMQgDgPgKgLQAEgGAFgDQAHgDADAEQAGAFAFAOQAHAWAAAcQgBAdgGARQgFAOgGAEQgBACgEAAIgFgBg");
	this.shape_961.setTransform(448.7,60.5);

	this.shape_962 = new cjs.Shape();
	this.shape_962.graphics.f("#E18F59").s().p("AgFAJIgBgCIAFgHIAGgJQADAFgCAFQgDAAgDACIgDAEQgBAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgBgBg");
	this.shape_962.setTransform(440.7,61.5);

	this.shape_963 = new cjs.Shape();
	this.shape_963.graphics.f("#FFF6CD").s().p("AgHAfQgIAAgGgEIgCgCIgCgBQgFgIAEgJQABgEAAgEIgCgJQgBgJADgEQACgEAFgCQAHgCALABQALAAAIAIIACADQAEAEABAGQADAFAAAEQAAAHgDAGIgFAHIgDADQgGAFgGACIgKABIgDAAg");
	this.shape_963.setTransform(446.3,60.6);

	this.shape_964 = new cjs.Shape();
	this.shape_964.graphics.f("#EEC09E").s().p("AAbAVIgHgIQgCgEAAgGQgJgCADgBIADgBIADAAQAAgIADgEIAFgHIAFgDQgCAEABAJIABAJQABAEgCAEQgDAKAFAHIgFgDgAgYAVQABgDAKgNIgGAEQgHAFgCAAQgHACAJgJIAGgEIABgBIgCABIgDACIgFACIgBAAIgBgBQABgEAKgEIgKACIgBAAIACgCQADgDAIgEIAPgFIABAAQgBAGAEACIAFABIAFgBIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgEACIgIAIQgHAFgCAAIgBAAg");
	this.shape_964.setTransform(440.5,60.6);

	this.shape_965 = new cjs.Shape();
	this.shape_965.graphics.f("#424242").s().p("AgDBJQgKgHgHgXIgEgRIgBgGIAFAEIACABIACACQAGAEAIAAQAFABAIgCQAGgCAGgFIADgDIgCAKQgCANgGALIgEAIQgEAFgHAEIgCACgAgPg8QAEgIAFgDIABAAQACgBADAFIAJAHQAJAMADAPIADALQgIgIgLAAQgLgBgHACQgFACgCAEIgFADQADgaAHgOg");
	this.shape_965.setTransform(445.8,60.6);

	this.shape_966 = new cjs.Shape();
	this.shape_966.graphics.f("#393939").s().p("AASBHQgOgFgLgTQgKgLgFgKIgDgIQAAAAAAAAQAAAAAAgBQAAAAAAgBQABAAAAAAIAEgEQAFgCACgBIAKAJIAIAIIAEARQAHAXAKAGQgEAAgEgBgAgUgHQgFgCAAgGQAAgFAGgIIAMgQQAMgTALgGQADgCAEAAIAAAAQgFADgEAIQgHAOgDAZIgEAHIgDAEIgHADIgEABIgGgBg");
	this.shape_966.setTransform(442.7,60.7);

	this.shape_967 = new cjs.Shape();
	this.shape_967.graphics.f("#372511").s().p("AgJBEQgDgBgDgDIAEgJQAHgLABgMIACgKIADgIQADgGAAgHQAAgEgCgFQgCgGgCgEIgCgCIgCgMQgDgPgKgLQAEgHAFgCQAHgDADAEQAGAFAFAOQAHAVAAAdQgBAdgGARQgFANgGAFQgBACgEAAIgFgBg");
	this.shape_967.setTransform(448.7,76.3);

	this.shape_968 = new cjs.Shape();
	this.shape_968.graphics.f("#E18F59").s().p("AgFAIIgBgBIAFgHIAGgJQADAEgCAGQgDAAgDADIgDADQgBAAAAABQAAAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_968.setTransform(440.7,77.4);

	this.shape_969 = new cjs.Shape();
	this.shape_969.graphics.f("#EEC09E").s().p("AAbAVIgHgIQgCgEAAgGQgJgCADgBIADAAIADgBQAAgHADgFIAFgHIAFgDQgCAEABAIIABALQABADgCAFQgDAJAFAHIgFgDgAgYAVQABgEAKgMIgGAEIgJAFQgHACAJgIIAGgGIABAAIgCAAIgDADIgFADIgBAAIgBgCQABgEAKgEIgKACIgBAAIACgBQADgEAIgEIAPgFIABgBQgBAHAEACIAFABIAFgBIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgEADIgIAHQgHAGgCAAIgBgBg");
	this.shape_969.setTransform(440.5,76.4);

	this.shape_970 = new cjs.Shape();
	this.shape_970.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgCgCIgCgBQgFgIAEgJQABgFAAgDIgCgKQgBgIADgFQACgDAFgCQAHgCALAAQALAAAIAJIACACQAEAFABAGQADAFAAAEQAAAGgDAHIgFAHIgDADQgGAFgGACIgKACIgDgBg");
	this.shape_970.setTransform(446.3,76.5);

	this.shape_971 = new cjs.Shape();
	this.shape_971.graphics.f("#628DD1").s().p("AgDBIQgKgGgHgXIgEgRIgBgGIAFAEIACABIACACQAGAEAIAAQAFABAIgCQAGgCAGgFIADgDIgCAKQgCANgGALIgEAIQgEAFgHAEIgCABgAgPg8QAEgIAFgDIABAAQACgBADAFQAHAEACADQAJAMADAPIADALQgIgJgLAAQgLAAgHACQgFACgCADIgFAEQADgaAHgOg");
	this.shape_971.setTransform(445.8,76.5);

	this.shape_972 = new cjs.Shape();
	this.shape_972.graphics.f("#447BCD").s().p("AASBHQgOgFgLgSQgKgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAAAAAQABgBAAAAIAEgEQAFgDACAAIAKAIIAIAJIAEARQAHAXAKAGIgIgBgAgUgGQgFgDAAgGQAAgFAGgIQAEgHAIgKQAMgSALgGIAHgCIAAAAQgFADgEAIQgHAOgDAaIgEAGIgDAEIgHAEIgEABIgGgBg");
	this.shape_972.setTransform(442.7,76.5);

	this.shape_973 = new cjs.Shape();
	this.shape_973.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgDgCIAAgBQgGgHAEgKQABgEAAgDIgBgKQgCgIADgFQADgEAEgCQAGgCAMABQALAAAIAIIACADIAGAKIABAJQABAHgEAGQgBAEgDADIgEAEQgFAFgHABQgEACgCAAIgGgBg");
	this.shape_973.setTransform(471.5,191.9);

	this.shape_974 = new cjs.Shape();
	this.shape_974.graphics.f("#48608E").s().p("AgDBIQgKgGgHgYQgDgIgBgJIgBgGQACADAEABIAAABIADACQAGAEAIAAQAFACAHgDQAHgBAFgFIAEgEIgCAKQgCANgGALIgEAIQgEAGgHADIgCACIgBAAIgBAAgAgPg9QAEgIAEgCIABAAIABAAQABgBAFAFIAIAGQAJAMADAPIADALQgIgIgLAAQgMgBgGACQgEACgDAEIgFADQACgaAIgOg");
	this.shape_974.setTransform(471,192);

	this.shape_975 = new cjs.Shape();
	this.shape_975.graphics.f("#372511").s().p("AgJBEQgDgBgDgEIAEgIQAGgLACgNIACgKQABgDABgEQAEgGgBgIIgBgIIgEgKIgCgDIgDgLQgDgPgJgMQAEgGAFgCQAGgDADAFQAHAEAFAOQAHAWAAAcQAAAcgHATQgFAMgHAFQAAACgEAAIgFgBg");
	this.shape_975.setTransform(473.9,191.8);

	this.shape_976 = new cjs.Shape();
	this.shape_976.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_976.setTransform(470.2,184.7);

	this.shape_977 = new cjs.Shape();
	this.shape_977.graphics.f("#E18F59").s().p("AgEAIIgCgBIAGgHIAFgJQADAEgCAFIgGADIgDADQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_977.setTransform(465.8,192.8);

	this.shape_978 = new cjs.Shape();
	this.shape_978.graphics.f("#3A4D75").s().p("AASBGQgOgFgMgRQgIgMgFgKQgDgEgBgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAIAEgEIAHgCIAJAIIAJAJQABAIADAIQAHAYAKAGQgEAAgEgCgAgUgGQgFgEAAgFQAAgFAGgJIALgQQANgSALgGIAGgCIAAABQgEACgEAHQgIAOgCAaIgEAGIgDAEIgHAEIgFABIgFAAg");
	this.shape_978.setTransform(467.9,192);

	this.shape_979 = new cjs.Shape();
	this.shape_979.graphics.f("#EEC09E").s().p("AAbAUQgEgDgDgEIgCgKQgJgBADgCIADAAIACgBQABgHADgGIAGgGIAFgDQgEAFACAIIACAKQAAADgCAEQgDAKAFAHQgDgBgCgDgAgYAUQAAgCALgNIgGAEIgJAGQgHABAJgJIAGgEIABgBIgCAAIgDACIgFAEIgCgBIAAgBQABgEAKgEIgLACIAAAAIACgCQADgDAIgEQAJgCAFgDIACgBQgBAGAEADIAFABIAFgBIgFAGIgGAKIgEAGQgEAFgCgBIgBgBIAAgCQAJgLgEADIgIAHQgHAFgCAAIgBgBg");
	this.shape_979.setTransform(465.6,191.9);

	this.shape_980 = new cjs.Shape();
	this.shape_980.graphics.f("#E18F59").s().p("AgFAIIgBgBIAGgHIAFgJQADAEgCAFQgDABgDADQgCAAgBADQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_980.setTransform(465.8,176.3);

	this.shape_981 = new cjs.Shape();
	this.shape_981.graphics.f("#372511").s().p("AgJBEQgDgBgDgEIAFgIQAFgLADgNIABgKQABgDABgEQADgHABgGQgBgEgCgFQgCgGgBgEIgCgCIgDgMQgDgPgJgLQAFgHAEgCQAHgDACAEQAHAFAEAOQAIAVAAAcQAAAdgIASQgEANgHAFQgBACgDAAIgFgBg");
	this.shape_981.setTransform(473.9,175.2);

	this.shape_982 = new cjs.Shape();
	this.shape_982.graphics.f("#EEC09E").s().p("AAbAUQgEgDgCgEQgDgEgBgHQgIgBADgBIADAAIACgBQABgHADgFIAFgHIAGgDQgDAEABAIIACALQAAADgBAFQgEAJAFAHIgFgEgAgYAUQAAgDALgMIgGAEIgJAFQgHACAJgIIAGgGIABgBIgBABIgEADIgFADIgBAAIgBgCQACgEAJgEQgJADgBgBIgBAAIACgBQAEgEAHgEIAPgFIABgBQAAAHADACIAFABIAFgBIgFAGIgGAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgDADIgJAHQgHAFgCAAIgBgBg");
	this.shape_982.setTransform(465.6,175.3);

	this.shape_983 = new cjs.Shape();
	this.shape_983.graphics.f("#41210C").s().p("AgIAgQgIgBgFgDIgDgDIgBgBQgFgHAEgJQABgFAAgDIgCgLQgBgIADgEQACgEAFgCQAGgCAMAAQALABAIAJIACACQADAEACAGQACAFAAAEQAAAGgDAHQgBAEgDADIgEAEQgFAEgHACQgFACgFAAIgDAAg");
	this.shape_983.setTransform(471.5,175.3);

	this.shape_984 = new cjs.Shape();
	this.shape_984.graphics.f("#E64A00").s().p("AASBHQgOgFgMgSQgJgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABgDADgBQAEgDADAAIAJAIQAFAGAEACIAEASQAHAXAKAGIgIgBgAgUgGQgFgDAAgGQAAgFAGgIQADgHAIgKQANgSALgGQADgCADAAIAAAAQgEADgEAIQgIANgDAbIgDAGIgEAEIgGAEIgFAAIgBAAIgEAAg");
	this.shape_984.setTransform(467.9,175.4);

	this.shape_985 = new cjs.Shape();
	this.shape_985.graphics.f("#EC672C").s().p("AgUArIgEgSIAAgFIAFAEIABABIADACQAFADAIABQAFABAIgDQAHgBAFgFIADgDIgBAJQgDANgFAMIgFAIQgEAFgGADIgCACIgDAAQgKgGgHgXgAgPg8QAEgIAFgDIABAAQACgBAEAFIAIAHQAJAMAEAPIACALQgIgJgLAAQgLgBgGADQgGACgCADIgFAEQADgbAHgNg");
	this.shape_985.setTransform(470.9,175.4);

	this.shape_986 = new cjs.Shape();
	this.shape_986.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_986.setTransform(470.2,149.6);

	this.shape_987 = new cjs.Shape();
	this.shape_987.graphics.f("#000000").s().p("AgSAeQgEgCgDgEQgDgFACgIIABgJQAAgEgBgEQgEgKAGgHIAAgBIADgCQAGgEAIAAQAHgBAFACQAHACAFAEIAEAEQADADABAEQAEAGgBAGIgBAKIgGAKIgCADQgIAIgLAAIgDAAQgKAAgFgBg");
	this.shape_987.setTransform(471.5,142.4);

	this.shape_988 = new cjs.Shape();
	this.shape_988.graphics.f("#372511").s().p("AgJBEQgFgCgEgGQAJgMADgPIADgLIACgDIAEgKIABgJQABgHgEgGQgBgEgBgDIgCgKQgCgNgGgLIgEgIQADgEADgBQAGgDADAEQAHAFAFANQAHASAAAdQAAAbgHAWQgFAOgHAFQgBACgDAAIgFgBg");
	this.shape_988.setTransform(473.9,142.5);

	this.shape_989 = new cjs.Shape();
	this.shape_989.graphics.f("#609634").s().p("AgFBIIgBgBIgBAAQgEgCgEgHQgIgPgCgZIAFADQADADAEACQAGACAMAAQALgBAIgIIgDALQgDAQgJALIgIAHQgEAEgCAAIAAAAgAAWgWQgFgFgHgCQgHgCgFABQgIABgGADIgDADIAAAAQgEACgCACIABgGQABgIADgIQAHgYAKgGIACAAIACACQAHADAEAFIAEAIQAGAMACAMIACAKIgEgDg");
	this.shape_989.setTransform(471,142.4);

	this.shape_990 = new cjs.Shape();
	this.shape_990.graphics.f("#4A7328").s().p("AAQBGQgLgGgNgSIgLgQQgGgJAAgFQAAgGAFgCIAFgBIAFABIAHAEIADADIAEAHQACAZAIAPQAEAHAEACIAAABQgCAAgEgCgAgUgLIgEgDQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQABgEADgEIANgWQAMgRAOgFQAEgCAEAAQgKAGgHAYQgDAIgBAIIgJAJIgJAIIgHgDg");
	this.shape_990.setTransform(467.9,142.4);

	this.shape_991 = new cjs.Shape();
	this.shape_991.graphics.f("#E18F59").s().p("AAAAAIgGgGIACgCIAAgBQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAIADAEIAGACQACAFgDAFIgFgKg");
	this.shape_991.setTransform(465.8,141.5);

	this.shape_992 = new cjs.Shape();
	this.shape_992.graphics.f("#EEC09E").s().p("AAbAVIgGgGQgDgGgBgHIgCAAIgDgCQgDAAAJgCIACgKIAHgHQACgDADgBQgFAHADAKQACAEAAAEIgCAJQgCAIAEAFIgFgDgAgEAPIgOgFQgIgEgDgDIgCgDIAAAAIALADQgKgEgBgDIAAgCIACgBIAFAEIADACIACABIgBgCIgGgEQgJgJAHABIAJAGIAGAEQgLgNAAgCQAAgDAKAHIAIAHQAEADgJgLIAAgCIABgBQACgBAEAFIAEAGIAGAKIAFAGIgFgBIgFABQgEADABAGIgCgBg");
	this.shape_992.setTransform(465.6,142.4);

	this.shape_993 = new cjs.Shape();
	this.shape_993.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_993.setTransform(470.2,215.7);

	this.shape_994 = new cjs.Shape();
	this.shape_994.graphics.f("#E18F59").s().p("AAAAAIgGgHIACgBIAAgBQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAIADADIAGADQACAFgDAFIgFgKg");
	this.shape_994.setTransform(465.8,207.6);

	this.shape_995 = new cjs.Shape();
	this.shape_995.graphics.f("#000000").s().p("AgSAeQgEgCgDgEQgDgFACgIIABgKQAAgDgBgEQgEgKAGgIIAAAAIADgCQAGgEAIAAQAHgCAFADQAHABAFAFIAEADQADAEABAEQAEAGgBAGIgBAKIgGAKIgCADQgIAIgLAAIgDABQgKAAgFgCg");
	this.shape_995.setTransform(471.5,208.5);

	this.shape_996 = new cjs.Shape();
	this.shape_996.graphics.f("#EEC09E").s().p("AAbAVIgGgGQgDgGgBgHIgCAAIgDgCQgDgBAJgBIACgKIAHgIIAFgDQgFAHADAKQACAEAAAEIgCAJQgCAJAEAEIgFgDgAgEAPIgOgFQgIgEgDgDIgCgDIAAAAIALADQgKgEgBgEIAAgBIACAAIAFADIADACIACAAIgBgBIgGgEQgJgIAHAAIAJAGIAGAEQgLgMAAgEQAAgCAKAIIAIAGQAEADgJgLIAAgBIABgCQACgBAEAFIAEAHIAGAJIAFAHQgCgCgDAAIgFACQgEACABAGIgCgBg");
	this.shape_996.setTransform(465.6,208.5);

	this.shape_997 = new cjs.Shape();
	this.shape_997.graphics.f("#5BB1B0").s().p("AAQBGQgLgGgNgSIgLgRQgGgIAAgFQAAgGAFgCIAFgBQADgBACACIAHAEIADAEIAEAGQACAZAIAPQAEAHAEACIAAABIgGgCgAgUgLIgEgDQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgEADgEQAFgKAIgMQAMgRAOgGIAIgBQgKAFgHAZQgDAIgBAIIgJAJIgJAIIgHgDg");
	this.shape_997.setTransform(467.9,208.5);

	this.shape_998 = new cjs.Shape();
	this.shape_998.graphics.f("#6BD3D2").s().p("AgFBIIgBAAIgBAAQgEgCgEgIQgIgOgCgaIAFADQADAEAEACQAGACAMgBQALAAAIgIIgDALQgDAPgJALIgIAHQgEAEgCAAIAAAAgAAWgWQgFgFgHgBQgHgDgFACQgIAAgGAEIgDACIAAAAIgGAEIABgFQABgJADgIQAHgYAKgGIACAAIACACQAHADAEAGIAEAIQAGALACANIACAJIgEgDg");
	this.shape_998.setTransform(471,208.4);

	this.shape_999 = new cjs.Shape();
	this.shape_999.graphics.f("#372511").s().p("AgJBEQgFgCgEgHQAJgLADgPIADgLIACgDIAEgKIABgJQABgHgEgGQgBgEgBgEIgCgJQgCgNgGgLIgEgIQADgEADgBQAGgDADAEQAHAFAFANQAHASAAAcQAAAcgHAWQgFAOgHAEQgBADgDAAIgFgBg");
	this.shape_999.setTransform(473.9,208.6);

	this.shape_1000 = new cjs.Shape();
	this.shape_1000.graphics.f("#E18F59").s().p("AAAAAIgGgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABABAAQAAABAAAAQABACACABQADADADAAQACAGgDAEIgFgKg");
	this.shape_1000.setTransform(465.8,158);

	this.shape_1001 = new cjs.Shape();
	this.shape_1001.graphics.f("#000000").s().p("AgSAeQgFgCgCgDQgDgFABgIIACgKQAAgDgBgFQgEgJAFgIIABgBIADgCQAFgEAIAAQAIgBAFACQAHACAFAFIAEADQADADABAEQADAHAAAFQAAAFgCAFQgCAGgDAFIgCACQgIAJgLAAIgCAAQgLAAgFgCg");
	this.shape_1001.setTransform(471.5,158.9);

	this.shape_1002 = new cjs.Shape();
	this.shape_1002.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFgBgHIgCgBIgDgBQgDAAAIgCQABgGADgEIAGgIIAFgDQgFAHAEAJQABAFAAADIgCALQgBAIADAEIgGgDgAgDAPIgPgFQgHgEgEgEIgCgCIABAAQABAAAJADQgJgEgCgEIABgCIABAAIAFADIAEADIABAAIgBAAIgGgGQgJgIAHACQACAAAHAFIAGAEQgLgMAAgEQAAgDAKAIIAJAHQADADgJgLIAAgBIABgCQACgBAEAFIAEAHIAGAJIAFAGIgFgBIgFABQgDACAAAHIgBgBg");
	this.shape_1002.setTransform(465.6,158.9);

	this.shape_1003 = new cjs.Shape();
	this.shape_1003.graphics.f("#447BCD").s().p("AAQBGQgLgGgNgSQgIgKgDgHQgGgIAAgFQAAgGAFgDIAFgBIAFABIAGAEIAEAEIADAGQADAaAIAOQAEAIAEADIAAAAQgDAAgDgCgAgUgLQgDgCgBgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIADgHQAFgKAJgMQAMgSAOgFIAIgBQgKAGgHAXIgEARIgJAJIgJAIQgDAAgEgDg");
	this.shape_1003.setTransform(467.9,158.9);

	this.shape_1004 = new cjs.Shape();
	this.shape_1004.graphics.f("#628DD1").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAGACQAGACALAAQALAAAIgJIgCALQgEAPgJAMIgIAHQgEAEgBAAIgBAAgAAXgWQgFgFgHgCQgIgCgFABQgIAAgFAEIgDACIgBABIgFAEIAAgGIAEgRQAHgXAKgGIADAAIACABQAGAEAEAFIAFAIQAFALADANIABAKIgDgDg");
	this.shape_1004.setTransform(470.9,158.9);

	this.shape_1005 = new cjs.Shape();
	this.shape_1005.graphics.f("#372511").s().p("AgJBEQgEgCgFgHQAJgLADgPIADgMIACgCQABgEACgGQACgFABgEQgBgHgDgGQgBgEgBgEIgBgKQgDgMgFgLIgFgJQADgDADgBQAHgDACAEQAHAFAEANQAIARAAAdQAAAdgIAVQgEAOgHAFQAAACgEAAIgFgBg");
	this.shape_1005.setTransform(473.9,159);

	this.shape_1006 = new cjs.Shape();
	this.shape_1006.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgDgCIAAgBQgGgHAEgKQABgEAAgEIgBgKQgCgIADgFQADgDAEgCQAGgCAMAAQALABAIAIIACADIAGAKIABAJQABAGgEAHQgBAEgDADIgEAEQgFAEgHACQgFACgDAAIgEgBg");
	this.shape_1006.setTransform(471.5,92.8);

	this.shape_1007 = new cjs.Shape();
	this.shape_1007.graphics.f("#372511").s().p("AgJBEQgDgCgDgCIAEgIQAGgMACgNIACgJQABgEABgEQAEgGgBgIIgBgIIgEgKIgCgDIgDgKQgDgQgJgLQAEgHAFgCQAGgDADAEQAHAFAFAOQAHAWAAAcQAAAcgHASQgFANgHAFQgBACgDAAIgFgBg");
	this.shape_1007.setTransform(473.9,92.7);

	this.shape_1008 = new cjs.Shape();
	this.shape_1008.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1008.setTransform(470.2,85.6);

	this.shape_1009 = new cjs.Shape();
	this.shape_1009.graphics.f("#609634").s().p("AgDBIQgKgGgHgYQgDgIgBgJIgBgFIAGAEIAAAAIADADQAGADAIABQAFABAHgDQAHgBAFgFIAEgDIgCAJQgCANgGAMIgEAIQgEAFgHADIgCACIgBAAIgBAAgAgPg9QAEgHAEgDIABAAIABAAQABgBAFAFIAIAHQAJALADAQIADALQgIgJgLAAQgMgBgGADQgEABgDAEIgFADQACgaAIgOg");
	this.shape_1009.setTransform(471,92.8);

	this.shape_1010 = new cjs.Shape();
	this.shape_1010.graphics.f("#E18F59").s().p("AgEAJIgCgBIAGgHIAFgKQADAFgCAFIgGADIgDADQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAABg");
	this.shape_1010.setTransform(465.8,93.6);

	this.shape_1011 = new cjs.Shape();
	this.shape_1011.graphics.f("#4A7328").s().p("AASBHQgOgGgMgRQgIgMgFgKQgDgFgBgDQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAIAEgEIAHgDIAJAIIAJAJQABAIADAJQAHAXAKAGIgIgBgAgUgHQgFgCAAgHQAAgEAGgIIALgRQANgSALgGQAEgCACAAIAAAAQgEADgEAHQgIAOgCAbIgEAGIgDADIgHAEQgCABgDAAIgFgBg");
	this.shape_1011.setTransform(467.9,92.8);

	this.shape_1012 = new cjs.Shape();
	this.shape_1012.graphics.f("#EEC09E").s().p("AAbAVIgHgIIgCgKQgJgCADgBIADgBIACAAQABgHADgFIAGgHIAFgDQgEAFACAHIACAKQAAAEgCAEQgDAKAFAHIgFgDgAgYAVQAAgDALgNIgGAEIgJAFQgHACAJgJIAGgEIABgBIgCAAIgDACIgFAEIgCgBIAAgCQABgDAKgEIgLADIAAgBIACgCQADgDAIgEIAOgFIACgBQgBAHAEACIAFABQADAAACgBIgFAGIgGAKIgEAGQgEAFgCgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgCQAJgLgEADIgIAHQgHAFgCAAIgBAAg");
	this.shape_1012.setTransform(465.6,92.8);

	this.shape_1013 = new cjs.Shape();
	this.shape_1013.graphics.f("#E18F59").s().p("AgEAIIgCgBIAGgHIAFgJQADAFgCAEIgGADIgDADQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABg");
	this.shape_1013.setTransform(465.8,110.2);

	this.shape_1014 = new cjs.Shape();
	this.shape_1014.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgDgCIAAgBQgGgHAEgKQABgEAAgEIgBgJQgCgIADgGQADgDAEgCQAGgCAMABQALAAAIAIIACADIAGAKIABAJQABAHgEAGQgBAEgDADIgEAEQgFAEgHACIgHABIgFAAg");
	this.shape_1014.setTransform(471.5,109.3);

	this.shape_1015 = new cjs.Shape();
	this.shape_1015.graphics.f("#EEC09E").s().p("AAbAUIgHgHIgCgKQgJgBADgCIADAAIACgBQABgHADgGIAGgGIAFgEQgEAGACAIIACAKQAAADgCAFQgDAJAFAIQgDgCgCgDgAgYAUQAAgCALgNIgGAEIgJAGQgHABAJgIIAGgFIABgCIgCABIgDACIgFAEIgCAAIAAgCQABgEAKgEIgLACIAAAAIACgBQADgEAIgDQAJgDAFgDIACgBQgBAHAEACIAFABIAFgBIgFAGIgGAKIgEAHQgEAEgCgBIgBgBIAAgCQAJgKgEACIgIAHQgHAFgCAAIgBgBg");
	this.shape_1015.setTransform(465.6,109.3);

	this.shape_1016 = new cjs.Shape();
	this.shape_1016.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1016.setTransform(470.2,102.1);

	this.shape_1017 = new cjs.Shape();
	this.shape_1017.graphics.f("#3A4D75").s().p("AASBGQgOgFgMgRIgNgWQgDgEgBgEQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBIAEgDIAHgDIAJAIIAJAJQABAIADAIQAHAYAKAGQgEAAgEgCgAgUgGQgFgDAAgGQAAgFAGgJIALgQQANgSALgGQAEgCACAAIAAABQgEACgEAHQgIAPgCAZIgEAHIgDADIgHAEIgFABIgFAAg");
	this.shape_1017.setTransform(467.9,109.3);

	this.shape_1018 = new cjs.Shape();
	this.shape_1018.graphics.f("#372511").s().p("AgJBEQgDgBgDgEIAEgIQAGgLACgNIACgKQABgDABgEQAEgGgBgIIgBgIIgEgKIgCgDIgDgLQgDgPgJgMQAEgGAFgCQAGgDADAEQAHAFAFAOQAHAWAAAbQAAAdgHATQgFAMgHAFQAAACgEAAIgFgBg");
	this.shape_1018.setTransform(473.9,109.2);

	this.shape_1019 = new cjs.Shape();
	this.shape_1019.graphics.f("#48608E").s().p("AgDBIQgKgGgHgYQgDgIgBgIIgBgGQACACAEACIAAAAIADADQAGADAIABQAFABAHgCQAHgCAFgFIAEgDIgCAKQgCAMgGAMIgEAIQgEAGgHACIgCACIgBAAIgBAAgAgPg9QAEgHAEgCIABAAIABgBQABgBAFAFIAIAHQAJALADAQIADALQgIgIgLgBQgMAAgGACQgEACgDADIgFADQACgZAIgPg");
	this.shape_1019.setTransform(471,109.3);

	this.shape_1020 = new cjs.Shape();
	this.shape_1020.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1020.setTransform(456.8,164.4);

	this.shape_1021 = new cjs.Shape();
	this.shape_1021.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgCIABgBQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADAEIAGACQACAFgDAFIgGgKg");
	this.shape_1021.setTransform(452.4,156.3);

	this.shape_1022 = new cjs.Shape();
	this.shape_1022.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGgBgHIgCAAIgDgCQgDAAAJgCQAAgGACgEQACgEAEgDIAGgEQgGAHAEAKQABAEAAAEIgBAJQgCAIADAFIgFgDgAgEAPIgPgFQgHgEgEgDIgBgDIAAAAIALADQgKgEgBgDIAAgCIABgBIAGAEIADACIACABIgBgCIgGgEQgJgJAHABIAJAGIAFAEQgKgNAAgCQAAgDAJAHIAJAHQADADgIgLIAAgCIAAgBQADgBAEAFIAEAHIAGAJIAEAGIgEgBIgFABQgEADAAAGIgBgBg");
	this.shape_1022.setTransform(452.2,157.2);

	this.shape_1023 = new cjs.Shape();
	this.shape_1023.graphics.f("#000000").s().p("AgSAeQgEgCgDgEQgDgFACgIIABgJQAAgEgBgEQgEgKAGgHIABgBIADgCQAFgEAIAAQAHgBAGACQAHACAFAEIADAEIAFAHQADAGAAAGQAAAEgCAGQgCAFgEAFIgCADQgIAIgLAAIgDAAQgKAAgFgBg");
	this.shape_1023.setTransform(458,157.2);

	this.shape_1024 = new cjs.Shape();
	this.shape_1024.graphics.f("#6BD3D2").s().p("AgGBIIAAgBIAAAAQgFgCgEgHQgHgPgDgZIAFADQACADAFACQAGACAMAAQALgBAIgIIgDALQgDAQgJALQgDADgGAEQgDAEgCAAIgBAAgAAWgWQgEgFgIgCQgGgCgGABQgIABgFADIgDADIgBAAIgGAEIABgGIADgQQAIgYAKgGIACAAIACACQAHADADAFIAFAIQAGAMACAMIACAKIgEgDg");
	this.shape_1024.setTransform(457.6,157.2);

	this.shape_1025 = new cjs.Shape();
	this.shape_1025.graphics.f("#5BB1B0").s().p("AAQBGQgLgGgMgSIgMgQQgGgJAAgFQAAgGAGgCIAFgBIAEABQAEABADADIADADIAEAHQADAZAIAPQADAHAFACIAAABQgDAAgEgCgAgTgLIgEgDQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQABgEADgEQAFgKAJgMQALgRAOgFQAFgCADAAQgKAGgHAYIgEAQIgIAJIgKAIIgGgDg");
	this.shape_1025.setTransform(454.4,157.2);

	this.shape_1026 = new cjs.Shape();
	this.shape_1026.graphics.f("#372511").s().p("AgIBEQgGgCgEgGQAJgMAEgPIACgLIACgDQACgFACgFQACgGAAgDQAAgHgDgGIgDgHIgCgKQgCgNgGgLIgEgIQADgEAEgBQAFgDAEAEQAGAFAFANQAHASAAAdQAAAbgHAWQgFAOgGAFQgBACgEAAIgEgBg");
	this.shape_1026.setTransform(460.4,157.3);

	this.shape_1027 = new cjs.Shape();
	this.shape_1027.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1027.setTransform(456.8,229.4);

	this.shape_1028 = new cjs.Shape();
	this.shape_1028.graphics.f("#372511").s().p("AgIBEQgGgCgEgGQAJgMAEgPIACgLIACgDQACgFACgFQACgGAAgDQAAgHgDgGIgDgHIgCgKQgCgNgGgLIgEgIQADgEAEgBQAFgDAEAEQAGAFAFANQAHASAAAdQAAAbgHAWQgFAOgGAEQgBADgEAAIgEgBg");
	this.shape_1028.setTransform(460.4,222.3);

	this.shape_1029 = new cjs.Shape();
	this.shape_1029.graphics.f("#000000").s().p("AgSAeQgEgCgDgEQgDgFACgIIABgJQAAgEgBgEQgEgKAGgHIABgBIADgCQAFgEAIAAQAHgBAGACQAHACAFAEIADAEIAFAHQADAGAAAGQAAAEgCAGQgCAFgEAFIgCADQgIAIgLAAIgDAAQgKAAgFgBg");
	this.shape_1029.setTransform(458,222.2);

	this.shape_1030 = new cjs.Shape();
	this.shape_1030.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgCIABgBQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADAEIAGACQACAFgDAFIgGgKg");
	this.shape_1030.setTransform(452.4,221.3);

	this.shape_1031 = new cjs.Shape();
	this.shape_1031.graphics.f("#609634").s().p("AgGBIIAAgBIAAAAQgFgCgEgHQgHgPgDgZIAFADQACADAFACQAGACAMAAQALgBAIgIIgDALQgDAQgJALIgJAHQgDAEgCAAIgBAAgAAWgWQgEgFgIgCQgGgCgGABQgIABgFADIgDACIgBABIgGAEIABgGIADgQQAIgYAKgGIACAAIACACQAHADADAFIAFAIQAGAMACAMIACAKIgEgDg");
	this.shape_1031.setTransform(457.6,222.2);

	this.shape_1032 = new cjs.Shape();
	this.shape_1032.graphics.f("#4A7328").s().p("AAQBGQgLgGgMgSIgMgQQgGgJAAgFQAAgGAGgCIAFgBIAEABQAEABADADIADADIAEAHQADAZAIAPQADAHAFACIAAABQgDAAgEgCgAgTgLIgEgDQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQABgEADgEQAFgKAJgMQALgRAOgFQAFgCADAAQgKAGgHAYIgEAQIgIAJIgKAIIgGgDg");
	this.shape_1032.setTransform(454.4,222.2);

	this.shape_1033 = new cjs.Shape();
	this.shape_1033.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGgBgHIgCAAIgDgCQgDAAAJgCQAAgGACgEQACgEAEgDIAGgEQgGAHAEAKQABAEAAAEIgBAJQgCAIADAFIgFgDgAgEAPIgPgFQgHgEgEgDIgBgDIAAAAIALADQgKgEgBgEIAAgBIABgBIAGAEIADACIACABIgBgCIgGgEQgJgJAHABIAJAGIAFAEQgKgNAAgCQAAgDAJAHIAJAHQADADgIgLIAAgCIAAgBQADgBAEAFIAEAGIAGAKIAEAGIgEgBIgFABQgEADAAAGIgBgBg");
	this.shape_1033.setTransform(452.2,222.2);

	this.shape_1034 = new cjs.Shape();
	this.shape_1034.graphics.f("#372511").s().p("AgJBEQgFgDgEgGQAKgLADgPIACgLIACgDQACgFACgFQACgGAAgDQAAgGgDgHIgDgHIgCgKQgBgMgHgMIgEgIQADgDADgCQAHgCADAEQAGAEAFANQAGASABAdQAAAcgHAVQgFAOgGAFQgBACgEAAIgFgBg");
	this.shape_1034.setTransform(460.4,125);

	this.shape_1035 = new cjs.Shape();
	this.shape_1035.graphics.f("#41210C").s().p("AgSAeQgFgCgCgEQgDgFABgHIACgLQAAgDgBgFQgEgJAFgHIACgCIADgCQAFgCAIgBQAHgBAGACQAHACAFAFIADADIAFAHQADAHAAAFQAAAEgDAGQgBAFgEAFIgCADQgIAIgLABIgDAAQgKAAgFgCg");
	this.shape_1035.setTransform(458,124.9);

	this.shape_1036 = new cjs.Shape();
	this.shape_1036.graphics.f("#EC672C").s().p("AgFBIIgBAAQgFgDgEgHQgHgOgDgbIAFAEQACADAFADQAHACALgBQALAAAIgJIgCAMQgEAPgJALIgJAHQgCAEgCAAIgBAAgAAXgWQgFgEgHgCQgIgCgFAAQgIABgFADIgDACIgCACIgFAEIABgGIAEgRQAHgYAKgGIACAAIACACQAHADAEAGIAEAIQAGALACANIACAKIgDgEg");
	this.shape_1036.setTransform(457.5,124.8);

	this.shape_1037 = new cjs.Shape();
	this.shape_1037.graphics.f("#EEC09E").s().p("AAaAVQgDgDgCgDQgDgGAAgIIgDAAIgDgBQgDAAAJgBQAAgHADgEQACgEAEgDIAFgEQgFAHADAJQACAFgBADIgBALQgBAHACAFIgFgDgAgDAPIgPgFQgIgDgDgEIgCgDIABAAIAKAEQgKgFgBgEIABgCIABAAIAFAEIADACIACABIgBgBIgGgGQgJgIAHACIAJAFQAGAFAAgBQgKgMgBgDQAAgEAKAIIAIAHQAEADgJgLIAAgCIABgBQACgCAEAGIAEAGIAHAJIAEAHIgFAAQgDgBgCABQgEACABAGIgBAAg");
	this.shape_1037.setTransform(452.2,124.9);

	this.shape_1038 = new cjs.Shape();
	this.shape_1038.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAQABACACACQADACADAAQACAGgDAEIgGgKg");
	this.shape_1038.setTransform(452.4,123.9);

	this.shape_1039 = new cjs.Shape();
	this.shape_1039.graphics.f("#E64A00").s().p("AAQBGQgLgGgMgSIgMgRQgGgIAAgFQAAgGAGgCQACgBADAAIAEABIAHAEIADADQABAEADACQADAbAHAOQAEAHAFADIAAAAIgHgCgAgTgLQgDgBgBgCQgBgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgRAOgGIAIgBQgKAGgHAYIgEARIgIAIIgKAIQgCAAgEgDg");
	this.shape_1039.setTransform(454.4,124.8);

	this.shape_1040 = new cjs.Shape();
	this.shape_1040.graphics.f("#E18F59").s().p("AgFAJIgBgCIAFgHIAGgJQADAFgCAFQgDAAgDACIgDAEQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAIgBgBg");
	this.shape_1040.setTransform(452.4,44.8);

	this.shape_1041 = new cjs.Shape();
	this.shape_1041.graphics.f("#FFF6CD").s().p("AgHAfQgIAAgFgEIgDgCIgCgBQgFgIAEgJQABgEAAgEIgCgJQgBgJADgEQACgEAFgCQAHgCALABQALAAAIAIIACADQAEAEABAGQADAFAAAEQAAAHgDAGIgFAHIgDADQgFAFgHACIgKABIgDAAg");
	this.shape_1041.setTransform(458,43.9);

	this.shape_1042 = new cjs.Shape();
	this.shape_1042.graphics.f("#EEC09E").s().p("AAbAVQgEgEgCgEQgDgEAAgGQgJgCADgBIADgBIADAAQAAgHADgFIAFgHIAFgDQgCAEABAJIABAJQABAEgCAEQgDAKAFAHIgFgDgAgYAVQABgDAKgNIgGAEQgHAFgCABQgHABAJgJIAGgEIABgCIgCACIgDACIgFACIgBAAIgBgBQABgEAKgEIgKACIgBAAIACgBQADgEAIgEIAPgFIABgBQgBAHAEACIAFABIAFgBIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgKgEABIgIAIQgHAFgCAAIgBAAg");
	this.shape_1042.setTransform(452.2,43.9);

	this.shape_1043 = new cjs.Shape();
	this.shape_1043.graphics.f("#393939").s().p("AASBHQgOgGgLgSQgKgLgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABAAIAEgEQAEgDACABIAKAIIAIAIIAEARQAHAXAKAHQgEAAgEgCgAgTgGQgGgDAAgGQAAgEAGgKIAMgPQAMgTALgGQADgCAEAAIAAAAQgFADgEAIQgHAOgDAZIgEAHIgDADIgHAFIgEABIgFgBg");
	this.shape_1043.setTransform(454.4,43.9);

	this.shape_1044 = new cjs.Shape();
	this.shape_1044.graphics.f("#424242").s().p("AgDBJQgKgHgHgXIgEgRIgBgGIAFAEIACABIADACQAFAEAIAAQAFABAIgCQAHgCAFgFIADgDIgCAKQgCANgGALIgEAIQgEAFgHAEIgCACgAgPg8QAEgIAFgDIABAAQACgBADAFIAJAHQAJAMAEAPIACALQgIgIgLAAQgLgBgHACQgFACgCAEIgFADQADgaAHgOg");
	this.shape_1044.setTransform(457.5,43.9);

	this.shape_1045 = new cjs.Shape();
	this.shape_1045.graphics.f("#372511").s().p("AgJBEQgDgBgDgDIAEgJQAHgLABgMIACgKIADgIQADgGAAgHQAAgDgCgGQgCgFgCgFIgCgCIgCgMQgDgPgKgLQAEgGAFgDQAHgDADAEQAGAFAFAOQAHAWAAAcQgBAdgGARQgFAOgGAEQgBACgEAAIgFgBg");
	this.shape_1045.setTransform(460.4,43.7);

	this.shape_1046 = new cjs.Shape();
	this.shape_1046.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQABACACABQADADADAAQACAFgDAFIgGgKg");
	this.shape_1046.setTransform(452.4,26.9);

	this.shape_1047 = new cjs.Shape();
	this.shape_1047.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFAAgHIgDgBIgDgBQgDAAAJgCQAAgGADgEQACgEAEgEIAFgDQgFAHADAKQACAEgBADIgBALQgBAIACAEIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKAEQgKgFgBgEIABgBQAAAAAAgBQAAAAAAAAQAAAAABAAQAAABAAAAIAFACIADADIACAAIgBAAIgGgFQgJgJAHACIAJAFIAGAEQgKgMgBgEQAAgDAKAIIAIAHQAEADgJgLIAAgBIABgCQACgBAEAFIAEAHIAHAJIAEAGIgFgBQgDAAgCABQgEACABAHIgBgBg");
	this.shape_1047.setTransform(452.2,27.8);

	this.shape_1048 = new cjs.Shape();
	this.shape_1048.graphics.f("#000000").s().p("AgSAeQgFgCgCgDQgDgFABgIIACgKQAAgDgBgFQgEgJAFgIIACgBIADgCQAFgDAIgBQAHgBAGACQAHACAFAFIADADIAFAHQADAHAAAFQAAAFgDAFQgBAGgEAFIgCACQgIAJgLAAIgCAAQgKAAgGgCg");
	this.shape_1048.setTransform(458,27.7);

	this.shape_1049 = new cjs.Shape();
	this.shape_1049.graphics.f("#628DD1").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAFACQAHACALAAQALAAAIgJIgCALQgEAPgJAMQgCADgHAEQgDAEgCAAIAAAAgAAXgWQgFgFgHgCQgIgCgFABQgIABgFADIgDACIgCABIgFAEIABgGIAEgRQAHgXAKgGIACAAIACABQAHAEAEAFIAEAJQAGAKACANIACAKIgDgDg");
	this.shape_1049.setTransform(457.5,27.7);

	this.shape_1050 = new cjs.Shape();
	this.shape_1050.graphics.f("#447BCD").s().p("AAQBGQgLgGgMgSQgIgKgEgHQgGgIAAgFQAAgGAGgCQACgCADAAIAEACIAHAEIADADIAEAGQADAaAHAOQAEAIAFADIAAAAIgHgCgAgTgLQgDgCgBgCQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgRAOgGIAIgBQgKAGgHAXIgEARIgIAJIgKAIQgCAAgEgDg");
	this.shape_1050.setTransform(454.4,27.7);

	this.shape_1051 = new cjs.Shape();
	this.shape_1051.graphics.f("#372511").s().p("AgJBEQgFgCgEgHQAKgLADgPIACgLIACgDQACgEACgGQACgFAAgEQAAgHgDgGIgDgIIgCgJQgBgNgHgLIgEgJQADgDADgBQAHgCADADQAGAFAFANQAGASABAcQAAAdgHAVQgFAOgGAFQgBACgDAAIgGgBg");
	this.shape_1051.setTransform(460.4,27.9);

	this.shape_1052 = new cjs.Shape();
	this.shape_1052.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1052.setTransform(456.8,67.3);

	this.shape_1053 = new cjs.Shape();
	this.shape_1053.graphics.f("#E18F59").s().p("AgBAAIgFgHIABgBIABgBQAAABAAAAQAAAAAAABQAAAAAAABQABAAAAABIADADIAGACQACAGgDADIgGgJg");
	this.shape_1053.setTransform(452.4,59.3);

	this.shape_1054 = new cjs.Shape();
	this.shape_1054.graphics.f("#EEC09E").s().p("AAaAVQgDgCgCgEQgDgGgBgHIgCAAIgDgCQgDAAAJgCQAAgGACgEQACgEAEgEIAGgDQgGAHAEAKQABAEAAAEIgBAKQgCAHADAFIgFgDgAgEAPIgPgGQgHgDgEgDIgBgDIAAAAIALAEQgKgFgBgDIAAgCIABgBIAGAEIADACIACAAIgBgBIgGgEQgJgJAHACIAJAFIAFAEQgKgNAAgDQAAgCAJAIIAJAGQADADgIgLIAAgCIAAgBQADgBAEAEIAEAHIAGAJIAEAHQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgFABQgEACAAAHIgBgBg");
	this.shape_1054.setTransform(452.2,60.2);

	this.shape_1055 = new cjs.Shape();
	this.shape_1055.graphics.f("#000000").s().p("AgSAeQgEgCgDgEQgDgFACgIIABgKQAAgDgBgEQgEgKAGgIIABAAIADgCQAFgEAIAAQAHgCAGADQAHABAFAFIADADIAFAIQADAGAAAGQAAAEgCAGQgCAFgEAFIgCADQgIAIgLAAIgDABQgKAAgFgCg");
	this.shape_1055.setTransform(458,60.2);

	this.shape_1056 = new cjs.Shape();
	this.shape_1056.graphics.f("#372511").s().p("AgIBEQgGgCgEgHQAJgLAEgPIACgLIACgDQACgFACgFQACgGAAgDQAAgHgDgGIgDgIIgCgJQgCgNgGgLIgEgIQADgEAEgBQAFgDAEAEQAGAFAFAMQAHATAAAcQAAAcgHAWQgFAOgGAEQgCADgDAAIgEgBg");
	this.shape_1056.setTransform(460.4,60.3);

	this.shape_1057 = new cjs.Shape();
	this.shape_1057.graphics.f("#3A4D75").s().p("AAQBGQgLgGgMgSIgMgRQgGgIAAgEQAAgHAGgCIAFgBQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQAEABADADIADAEQABADADACQADAaAIAPQADAIAFACIAAAAQgDAAgEgCgAgTgLIgEgDQgBAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgDADgFQAFgKAJgMQALgRAOgFIAIgCQgKAGgHAYIgEARIgIAIIgKAIIgGgDg");
	this.shape_1057.setTransform(454.4,60.1);

	this.shape_1058 = new cjs.Shape();
	this.shape_1058.graphics.f("#48608E").s().p("AgGBIIAAAAIAAAAQgFgCgEgIQgHgOgDgaIAFADQACAEAFACQAGACAMgBQALAAAIgIIgDALQgDAPgJALQgDADgGAEQgDAEgCAAIgBAAgAAWgWQgEgFgIgBQgGgDgGACQgIAAgFAEIgDACIgBAAIgGAEIABgFIADgRQAIgYAKgGIACAAIACACQAHADADAGIAFAIQAGALACANIACAJIgEgDg");
	this.shape_1058.setTransform(457.6,60.1);

	this.shape_1059 = new cjs.Shape();
	this.shape_1059.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABABAAAAQABADACAAQADADADAAQACAGgDAEIgGgKg");
	this.shape_1059.setTransform(452.4,75.4);

	this.shape_1060 = new cjs.Shape();
	this.shape_1060.graphics.f("#EEC09E").s().p("AAaAVQgDgDgCgEQgDgFAAgHIgDgBIgDgBQgDAAAJgBQAAgHADgEQACgEAEgDIAFgEQgFAHADAJQACAFgBADIgBAKQgBAIACAFIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKADQgKgEgBgEIABgCIABAAIAFADIADADIACABIgBgBIgGgGQgJgIAHABIAJAGIAGAEQgKgMgBgDQAAgEAKAIIAIAHQAEACgJgKIAAgCIABgBQACgBAEAFIAEAHIAHAJIAEAGIgFgBQgDAAgCABQgEACABAGIgBAAg");
	this.shape_1060.setTransform(452.2,76.3);

	this.shape_1061 = new cjs.Shape();
	this.shape_1061.graphics.f("#372511").s().p("AgJBEQgFgCgEgHQAKgLADgPIACgMIACgCQACgFACgFQACgFAAgEQAAgHgDgGIgDgHIgCgKQgBgNgHgLIgEgIQADgEADgBQAHgDADAEQAGAFAFANQAGASABAdQAAAbgHAWQgFAOgGAFQgBACgDAAIgGgBg");
	this.shape_1061.setTransform(460.4,76.4);

	this.shape_1062 = new cjs.Shape();
	this.shape_1062.graphics.f("#EC672C").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAFACQAHADALgBQALgBAIgIIgCALQgEAPgJAMQgCADgHAEQgDAFgCAAIAAgBgAAXgWQgFgFgHgCQgIgCgFABQgIABgFADIgDACIgCABIgFAEIABgGIAEgRQAHgXAKgHIACABIACACQAHADAEAFIAEAIQAGAMACAMIACAKIgDgDg");
	this.shape_1062.setTransform(457.5,76.3);

	this.shape_1063 = new cjs.Shape();
	this.shape_1063.graphics.f("#41210C").s().p("AgSAeQgFgDgCgDQgDgFABgIIACgKQAAgDgBgFQgEgJAFgHIACgBIADgDQAFgDAIgBQAHAAAGACQAHACAFAEIADAEIAFAHQADAGAAAGQAAAFgDAFQgBAFgEAFIgCACQgIAJgLABIgCAAQgKAAgGgCg");
	this.shape_1063.setTransform(458,76.3);

	this.shape_1064 = new cjs.Shape();
	this.shape_1064.graphics.f("#E64A00").s().p("AAQBGQgLgGgMgSIgMgQQgGgJAAgFQAAgGAGgDQACAAADAAIAEAAIAHAFIADADQABAEADADQADAaAHANQAEAIAFADIAAAAIgHgCgAgTgLQgDgBgBgDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAgBIADgHQAFgKAKgLQALgSAOgGIAIgCQgKAHgHAXIgEARQgEADgEAGIgKAIQgCAAgEgDg");
	this.shape_1064.setTransform(454.4,76.3);

	this.shape_1065 = new cjs.Shape();
	this.shape_1065.graphics.f("#E18F59").s().p("AgFAJIgBgCIAFgGIAGgKQADAFgCAFIgGACIgDAEQAAAAgBABQAAAAAAAAQAAABAAAAQAAAAAAABg");
	this.shape_1065.setTransform(452.4,109.5);

	this.shape_1066 = new cjs.Shape();
	this.shape_1066.graphics.f("#EEC09E").s().p("AAaAUQgEgDgCgEQgCgEAAgGQgJgCADgBIADgBIACgBQABgGADgGQACgEADgCIAFgDQgDAFACAHIABAKQAAAEgBAEQgEAKAGAHIgGgEgAgYAUQAAgCAKgNIgFAEIgJAFQgHACAJgJIAGgEIABgBIgCAAIgDACIgGAEIgBgBIAAgCQABgDAKgFIgLADIAAAAIABgCQAEgDAHgDIAPgGIABgBQAAAHAEACIAFABIAEgBIgEAGIgGAKIgEAGQgEAFgDgBIAAgBIAAgCQAIgLgDADIgJAGQgHAGgCAAIAAgBg");
	this.shape_1066.setTransform(452.2,108.6);

	this.shape_1067 = new cjs.Shape();
	this.shape_1067.graphics.f("#000000").s().p("AgHAfQgIAAgFgEIgDgCIgBAAQgGgIAEgKQABgEAAgDIgBgKQgCgIADgFQADgEAEgCQAHgCALABQALAAAIAIIACADQAEAFACAFQACAGAAADQAAAHgDAGIgFAIIgDADQgFAFgHABQgFACgCAAIgGgBg");
	this.shape_1067.setTransform(458,108.6);

	this.shape_1068 = new cjs.Shape();
	this.shape_1068.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1068.setTransform(456.8,101.4);

	this.shape_1069 = new cjs.Shape();
	this.shape_1069.graphics.f("#4A7328").s().p("AASBGQgOgFgLgRQgJgMgFgKQgDgFgBgDQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBABAAIAEgDIAGgDIAKAIIAIAIIAEARQAHAYAKAGQgDAAgFgCgAgTgHQgGgCAAgHQAAgEAGgIIAMgRQAMgSALgGQAEgCADAAIAAAAQgFACgDAIQgIAPgDAaQgDACgBADIgDAEQgDADgEABIgEABIgFgBg");
	this.shape_1069.setTransform(454.4,108.7);

	this.shape_1070 = new cjs.Shape();
	this.shape_1070.graphics.f("#609634").s().p("AgDBIQgKgGgIgYIgDgRIgBgFIAGAEIABAAIADACQAFAEAIAAQAGACAGgDQAIgBAEgFIAEgDIgCAJQgCANgGALIgFAIQgDAGgHADIgCACIgBAAIgBAAgAgPg9QAEgIAFgCIAAAAIAAAAQADgBADAFIAJAGQAJAMADAPIADALQgIgIgLAAQgMgBgGACQgFACgCAEIgFADQADgaAHgOg");
	this.shape_1070.setTransform(457.6,108.7);

	this.shape_1071 = new cjs.Shape();
	this.shape_1071.graphics.f("#372511").s().p("AgIBEQgEgBgDgEIAEgIQAGgLACgNIACgJIADgIQADgGAAgIQAAgCgCgGQgCgFgCgFIgCgDIgCgLQgEgPgJgMQAEgGAGgCQAFgDAEAFQAGAEAFAOQAHAWAAAcQAAAcgHASQgFANgGAFQgBACgDAAIgFgBg");
	this.shape_1071.setTransform(460.4,108.5);

	this.shape_1072 = new cjs.Shape();
	this.shape_1072.graphics.f("#E18F59").s().p("AgFAIIgBgBIAFgHIAGgJQADAEgCAGQgDAAgDACQgCACgBACQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIgBgCg");
	this.shape_1072.setTransform(452.4,93.3);

	this.shape_1073 = new cjs.Shape();
	this.shape_1073.graphics.f("#000000").s().p("AgHAfQgIAAgFgEIgDgCIgCgBQgFgIAEgJQABgFAAgDIgCgKQgBgIADgFQACgDAFgCQAHgCALAAQALAAAIAJIACACQAEAFABAGQADAFAAAEQAAAGgDAHIgFAHIgDADQgFAFgHACQgGACgEAAIgDgBg");
	this.shape_1073.setTransform(458,92.4);

	this.shape_1074 = new cjs.Shape();
	this.shape_1074.graphics.f("#EEC09E").s().p("AAbAVQgEgEgCgEQgDgEAAgGQgJgCADgBIADAAIADgBQAAgHADgFIAFgHIAFgDQgCAEABAIIABALQABADgCAFQgDAJAFAHIgFgDgAgYAVQABgEAKgMIgGAEIgJAFQgHACAJgIIAGgGIABAAIgCAAIgDADIgFADIgBAAIgBgCQABgEAKgFIgKADIgBAAIACgBQADgEAIgEIAPgFIABgBQgBAHAEACIAFABIAFgBIgEAGIgHAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgEADIgIAHQgHAGgCAAIgBgBg");
	this.shape_1074.setTransform(452.2,92.4);

	this.shape_1075 = new cjs.Shape();
	this.shape_1075.graphics.f("#372511").s().p("AgJBEQgDgBgDgDIAEgJQAHgLABgNIACgJIADgIQADgGAAgHQAAgEgCgFQgCgGgCgEIgCgCIgCgMQgDgPgKgLQAEgHAFgCQAHgDADAEQAGAFAFAOQAHAVAAAdQgBAcgGASQgFANgGAFQgBACgEAAIgFgBg");
	this.shape_1075.setTransform(460.4,92.3);

	this.shape_1076 = new cjs.Shape();
	this.shape_1076.graphics.f("#447BCD").s().p("AASBHQgOgFgLgSQgKgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAABAAQABgCADgCQAEgDACAAIAKAIIAIAJIAEARQAHAXAKAGIgIgBgAgTgGQgGgDAAgGQAAgFAGgIQAEgHAIgKQAMgSALgGIAHgCIAAAAQgFADgEAIQgHAOgDAaIgEAGIgDAEIgHAEIgEABIgFgBg");
	this.shape_1076.setTransform(454.4,92.4);

	this.shape_1077 = new cjs.Shape();
	this.shape_1077.graphics.f("#628DD1").s().p("AgDBIQgKgGgHgXIgEgRIgBgGIAFAEIACABIADACQAFAEAIAAQAFABAIgCQAHgCAFgFIADgDIgCAKQgCANgGALIgEAIQgEAFgHAEIgCABgAgPg8QAEgIAFgDIABAAQACgBADAFQAHAEACADQAJAMAEAPIACALQgIgJgLAAQgLAAgHACQgFACgCADIgFAEQADgaAHgOg");
	this.shape_1077.setTransform(457.5,92.4);

	this.shape_1078 = new cjs.Shape();
	this.shape_1078.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1078.setTransform(456.8,148.2);

	this.shape_1079 = new cjs.Shape();
	this.shape_1079.graphics.f("#E18F59").s().p("AgBAAIgFgHIABgBIABgBQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIADAEIAGACQACAGgDADIgGgJg");
	this.shape_1079.setTransform(452.4,140.2);

	this.shape_1080 = new cjs.Shape();
	this.shape_1080.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGgBgHIgCgBIgDgBQgDAAAJgBQAAgHACgEQACgEAEgDIAGgFQgGAIAEAKQABAEAAADIgBALQgCAIADAFIgFgEgAgEAPIgPgGQgHgDgEgDIgBgDIAAAAIALADQgKgEgBgDIAAgCIABgBIAGAEIADACIACAAIgBAAIgGgFQgJgJAHACIAJAFIAFAEQgKgNAAgCQAAgEAJAIIAJAHQADADgIgLIAAgCIAAgBQADgBAEAEIAEAHIAGAJIAEAHQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBAAIgFAAQgEADAAAHIgBgBg");
	this.shape_1080.setTransform(452.2,141.1);

	this.shape_1081 = new cjs.Shape();
	this.shape_1081.graphics.f("#000000").s().p("AgSAeQgEgCgDgDQgDgFACgIIABgKQAAgEgBgEQgEgKAGgHIABgBIADgCQAFgDAIgBQAHgBAGACQAHACAFAEIADAEIAFAHQADAHAAAFQAAAFgCAFQgCAGgEAEIgCADQgIAIgLABIgCAAQgKAAgGgCg");
	this.shape_1081.setTransform(458,141);

	this.shape_1082 = new cjs.Shape();
	this.shape_1082.graphics.f("#3A4D75").s().p("AAQBFQgLgFgMgSIgMgQQgGgJAAgEQAAgHAGgDIAFgBQAAAAABABQABAAAAAAQABAAAAAAQABABAAAAQAEABADADIADADIAEAGQADAbAIAOQADAHAFADIAAAAQgDAAgEgDgAgTgLIgEgDQgBgBAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQABgDADgFQAFgKAJgMQALgRAOgFIAIgCQgKAGgHAYIgEARIgIAIIgKAIIgGgDg");
	this.shape_1082.setTransform(454.4,141);

	this.shape_1083 = new cjs.Shape();
	this.shape_1083.graphics.f("#48608E").s().p("AgGBIIAAAAIAAAAQgFgDgEgHQgHgOgDgaIAFADQACAEAFABQAGADAMgBQALAAAIgIIgDAKQgDAQgJALQgDADgGAEQgDAEgCAAIgBAAgAAWgWQgEgFgIgBQgGgDgGABQgIABgFADIgDADIgBAAIgGAEIABgFIADgRQAIgYAKgGIACAAIACACQAHADADAFIAFAIQAGAMACANIACAJIgEgDg");
	this.shape_1083.setTransform(457.6,141);

	this.shape_1084 = new cjs.Shape();
	this.shape_1084.graphics.f("#372511").s().p("AgIBEQgGgCgEgHQAJgLAEgQIACgKIACgDQACgFACgFQACgGAAgDQAAgGgDgHIgDgHIgCgKQgCgNgGgMIgEgIIAHgEQAFgDAEAFQAGAEAFANQAHASAAAcQAAAdgHAVQgFAOgGAFQgBACgEAAIgEgBg");
	this.shape_1084.setTransform(460.4,141.2);

	this.shape_1085 = new cjs.Shape();
	this.shape_1085.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQABACACABQADADADAAQACAGgDAEIgGgKg");
	this.shape_1085.setTransform(452.4,204.8);

	this.shape_1086 = new cjs.Shape();
	this.shape_1086.graphics.f("#EEC09E").s().p("AAaAVQgDgCgCgFQgDgFAAgHIgDgBIgDgBQgDAAAJgBQAAgHADgEQACgEAEgDIAFgEQgFAHADAKQACAEgBADIgBALQgBAIACAEIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAQAAAAAKAEQgKgFgBgEIABgBQAAgBAAAAQAAAAAAAAQAAAAABAAQAAAAAAABIAFACIADADIACABIgBgBIgGgFQgJgIAHABIAJAFIAGAEQgKgMgBgDQAAgEAKAIIAIAHQAEADgJgLIAAgBIABgCQACgBAEAFIAEAHIAHAJIAEAGIgFgBQgDAAgCABQgEACABAHIgBgBg");
	this.shape_1086.setTransform(452.2,205.7);

	this.shape_1087 = new cjs.Shape();
	this.shape_1087.graphics.f("#41210C").s().p("AgSAeQgFgCgCgEQgDgEABgIIACgLQAAgDgBgEQgEgKAFgHIACgBIADgDQAFgCAIgCQAHAAAGACQAHACAFAEIADAEIAFAHQADAHAAAFQAAAFgDAFQgBAGgEAEIgCADQgIAIgLABIgCAAQgKAAgGgCg");
	this.shape_1087.setTransform(458,205.7);

	this.shape_1088 = new cjs.Shape();
	this.shape_1088.graphics.f("#E64A00").s().p("AAQBGQgLgGgMgSQgIgKgEgHQgGgIAAgFQAAgGAGgCQACgCADABIAEABIAHAEIADADQABAEADACQADAbAHANQAEAIAFADIAAAAIgHgCgAgTgLQgDgBgBgDQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgRAOgGIAIgBQgKAGgHAXIgEASQgEACgEAGIgKAIQgCAAgEgDg");
	this.shape_1088.setTransform(454.4,205.7);

	this.shape_1089 = new cjs.Shape();
	this.shape_1089.graphics.f("#EC672C").s().p("AgFBIIgBAAQgFgDgEgIQgHgNgDgbIAFAEQACADAFACQAHADALgBQALAAAIgJIgCALQgEAPgJAMQgCADgHAEQgDAEgCAAIAAAAgAAXgWQgFgFgHgBQgIgDgFABQgIABgFADIgDACIgCABIgFAEIABgFIAEgSQAHgXAKgGIACAAIACACQAHADAEAGIAEAIQAGALACANIACAJIgDgDg");
	this.shape_1089.setTransform(457.5,205.7);

	this.shape_1090 = new cjs.Shape();
	this.shape_1090.graphics.f("#372511").s().p("AgJBEQgFgCgEgHQAKgLADgPIACgLIACgDQACgEACgGQACgFAAgEQAAgGgDgHIgDgHIgCgKQgBgMgHgMIgEgIIAGgFQAHgCADAEQAGAEAFANQAGASABAdQAAAcgHAVQgFAOgGAFQgBACgDAAIgGgBg");
	this.shape_1090.setTransform(460.4,205.8);

	this.shape_1091 = new cjs.Shape();
	this.shape_1091.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgCIABgBQAAAAAAABQAAAAAAABQAAAAAAAAQABABAAAAIADAEQADACADAAQACAFgDAFIgGgKg");
	this.shape_1091.setTransform(452.4,188.6);

	this.shape_1092 = new cjs.Shape();
	this.shape_1092.graphics.f("#EEC09E").s().p("AAaAVIgFgGQgDgGAAgHIgDgBIgDgBQgDAAAJgCQAAgGADgEQACgEAEgDIAFgEQgFAIADAIQACAFgBADIgBAKQgBAJACAEIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKAEQgKgGgBgDIABgCIABAAIAFAEIADACIACABIgBgBIgGgGQgJgIAHABQACAAAHAGIAGAEQgKgNgBgCQAAgDAKAHIAIAHQAEACgJgKIAAgCIABgBQACgBAEAFIAEAHIAHAIIAEAHIgFgBIgFABQgEADABAGIgBgBg");
	this.shape_1092.setTransform(452.2,189.6);

	this.shape_1093 = new cjs.Shape();
	this.shape_1093.graphics.f("#FFF6CD").s().p("AgSAeQgFgCgCgEQgDgEABgJIACgJQAAgEgBgEQgEgJAFgIIACgBIADgCQAFgEAIAAQAHgBAGACQAHACAFAFIADADIAFAHQADAGAAAGQAAAFgDAFQgBAGgEAEIgCADQgIAIgLAAIgDAAQgKAAgFgBg");
	this.shape_1093.setTransform(458,189.5);

	this.shape_1094 = new cjs.Shape();
	this.shape_1094.graphics.f("#424242").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFADQACAEAFACQAHACALgBQALAAAIgIIgCALQgEAPgJAMIgJAHQgDAFgCAAIAAgBgAAXgWQgFgFgHgCQgIgCgFABQgIAAgFAEIgDACIgCABIgFAEIABgGIAEgRQAHgXAKgHIACAAIACACQAHAEAEAFIAEAIQAGALACANIACAKIgDgDg");
	this.shape_1094.setTransform(457.5,189.5);

	this.shape_1095 = new cjs.Shape();
	this.shape_1095.graphics.f("#372511").s().p("AgJBEQgFgDgEgGQAKgLADgPIACgMIACgCQACgFACgFQACgGAAgDQAAgHgDgGIgDgIIgCgKQgBgMgHgLIgEgJQADgDADgBQAHgDADAEQAGAEAFAOQAGARABAdQAAAcgHAWQgFAOgGAFQgBACgDAAIgGgBg");
	this.shape_1095.setTransform(460.4,189.7);

	this.shape_1096 = new cjs.Shape();
	this.shape_1096.graphics.f("#393939").s().p("AAQBFQgLgFgMgSIgMgQQgGgKAAgEQAAgGAGgDIAFgBIAEABIAHAFIADADIAEAGQADAaAHAOQAEAIAFADIAAABQgEgBgDgDgAgTgLIgEgDQgBgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBIADgHQAFgKAKgMQALgRAOgFQAEgCAEgBQgKAHgHAYIgEAQIgIAJIgKAHQgCAAgEgCg");
	this.shape_1096.setTransform(454.4,189.5);

	this.shape_1097 = new cjs.Shape();
	this.shape_1097.graphics.f("#372511").s().p("AgJBEQgFgCgEgHQAKgLADgPIACgMIACgCQACgEACgGQACgFAAgEQAAgHgDgGIgDgIIgCgJQgBgNgHgLIgEgJQADgDADgBQAHgCADADQAGAFAFANQAGASABAcQAAAdgHAVQgFAOgGAFQgBACgDAAIgGgBg");
	this.shape_1097.setTransform(460.4,173.5);

	this.shape_1098 = new cjs.Shape();
	this.shape_1098.graphics.f("#000000").s().p("AgSAeQgFgCgCgDQgDgFABgIIACgKQAAgDgBgFQgEgJAFgIIACgBIADgCQAFgEAIAAQAHgBAGACQAHACAFAFIADADIAFAHQADAHAAAFQAAAFgDAFQgBAGgEAFIgCACQgIAJgLAAIgCAAQgKAAgGgCg");
	this.shape_1098.setTransform(458,173.3);

	this.shape_1099 = new cjs.Shape();
	this.shape_1099.graphics.f("#628DD1").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAFACQAHACALAAQALAAAIgJIgCALQgEAPgJAMQgCADgHAEQgDAEgCAAIAAAAgAAXgWQgFgFgHgCQgIgCgFABQgIAAgFAEIgDACIgCABIgFAEIABgGIAEgRQAHgXAKgGIACAAIACABQAHAEAEAFIAEAJQAGAKACANIACAKIgDgDg");
	this.shape_1099.setTransform(457.5,173.3);

	this.shape_1100 = new cjs.Shape();
	this.shape_1100.graphics.f("#447BCD").s().p("AAQBGQgLgGgMgSQgIgKgEgHQgGgIAAgFQAAgGAGgDIAFgBIAEABIAHAFIADADIAEAGQADAaAHAOQAEAIAFADIAAAAIgHgCgAgTgLQgDgCgBgCQgBAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAKgMQALgSAOgFIAIgBQgKAGgHAXIgEARIgIAJIgKAIQgCAAgEgDg");
	this.shape_1100.setTransform(454.4,173.3);

	this.shape_1101 = new cjs.Shape();
	this.shape_1101.graphics.f("#E18F59").s().p("AgBAAIgFgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABAAAAQABAAAAABQABACACABQADADADAAQACAFgDAFIgGgKg");
	this.shape_1101.setTransform(452.4,172.5);

	this.shape_1102 = new cjs.Shape();
	this.shape_1102.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFAAgHIgDgBIgDgBQgDAAAJgCQAAgGADgEQACgEAEgEIAFgDQgFAHADAJQACAFgBADIgBALQgBAIACAEIgFgDgAgDAPIgPgFQgIgEgDgEIgCgCIABAAIAKAEQgKgFgBgEIABgCIABAAIAFADIADADIACAAIgBAAIgGgGQgJgIAHACIAJAFIAGAEQgKgMgBgEQAAgDAKAIIAIAHQAEADgJgLIAAgBIABgCQACgBAEAFIAEAHIAHAJIAEAGIgFgBIgFABQgEACABAHIgBgBg");
	this.shape_1102.setTransform(452.2,173.4);

	this.shape_1103 = new cjs.Shape();
	this.shape_1103.graphics.f("#E18F59").s().p("AgFAIIgBgBIAGgHIAFgJQADAFgCAFQgDAAgDACIgDAEQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAIgBgCg");
	this.shape_1103.setTransform(465.8,226.2);

	this.shape_1104 = new cjs.Shape();
	this.shape_1104.graphics.f("#EEC09E").s().p("AAbAVIgGgIQgDgEgBgGQgIgCADgBIADAAIACgBQABgHADgFIAFgHIAGgDQgDAFABAIIACAKQAAADgBAFQgEAJAFAHIgFgDgAgYAVQAAgEALgMIgGAEQgHAGgCAAQgHABAJgIIAGgGIABAAIgBAAIgEADIgFADIgBAAIgBgCQACgEAJgEQgJADgBgBIgBAAIACgBQAEgEAHgEIAPgFIABAAQAAAGADACIAFABIAFgBIgFAGIgGAJIgEAHQgEAFgCgBIgBgBIAAgCQAJgKgDACIgJAHQgHAGgCAAIgBgBg");
	this.shape_1104.setTransform(465.6,225.2);

	this.shape_1105 = new cjs.Shape();
	this.shape_1105.graphics.f("#000000").s().p("AgIAfQgIAAgFgEIgDgCIgBgBQgFgIAEgJQABgEAAgEIgCgKQgBgIADgFQACgDAFgCQAGgCAMABQALAAAIAIIACACQADAFACAGQACAFAAAEQAAAHgDAGQgBAEgDADIgEADQgFAFgHACIgJABIgEAAg");
	this.shape_1105.setTransform(471.5,225.3);

	this.shape_1106 = new cjs.Shape();
	this.shape_1106.graphics.f("#372511").s().p("AgJBEQgDgBgDgDIAFgJQAFgLADgMIABgKQABgEABgEQADgGABgHQgBgEgCgFQgCgFgBgFIgCgCIgDgMQgDgPgJgLQAFgGAEgDQAHgDACAEQAHAFAEAOQAIAWAAAcQAAAdgIARQgEAOgHAEQAAACgEAAIgFgBg");
	this.shape_1106.setTransform(473.9,225.1);

	this.shape_1107 = new cjs.Shape();
	this.shape_1107.graphics.f("#628DD1").s().p("AgDBJQgKgHgHgXIgEgRIAAgGIAFAEIABABIADACQAFAEAIAAQAFABAIgCQAHgCAFgFIADgDIgBAKQgDANgFALIgFAIQgEAFgGAEIgCACgAgPg8QAEgIAFgDIABAAQACgBAEAFIAIAHQAJAMAEAPIACALQgIgIgLAAQgLgBgGACQgGACgCADIgFAEQADgaAHgOg");
	this.shape_1107.setTransform(470.9,225.3);

	this.shape_1108 = new cjs.Shape();
	this.shape_1108.graphics.f("#447BCD").s().p("AASBGQgOgEgMgSQgJgMgFgKIgDgIQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBIAEgDQAEgDADAAIAJAIIAJAJIAEAQQAHAYAKAGIgIgCgAgUgHQgFgCAAgGQAAgFAGgIIALgRQANgSALgGQADgCADgBIAAABQgEADgEAHQgIAPgDAaIgDAGIgEADIgGAEIgFACIgFgCg");
	this.shape_1108.setTransform(467.9,225.3);

	this.shape_1109 = new cjs.Shape();
	this.shape_1109.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgDgCIAAgBQgGgHAEgKQABgEAAgDIgBgKQgCgIADgFQADgEAEgCQAGgCAMABQALAAAIAIIACADIAGAKIABAJQABAHgEAGQgBAEgDADIgEAEQgFAFgHABQgEACgCAAIgGgBg");
	this.shape_1109.setTransform(471.5,191.9);

	this.shape_1110 = new cjs.Shape();
	this.shape_1110.graphics.f("#372511").s().p("AgJBEQgDgBgDgEIAEgIQAGgLACgNIACgKQABgDABgEQAEgGgBgIIgBgIIgEgKIgCgDIgDgLQgDgPgJgMQAEgGAFgCQAGgDADAFQAHAEAFAOQAHAWAAAcQAAAcgHATQgFAMgHAFQAAACgEAAIgFgBg");
	this.shape_1110.setTransform(473.9,191.8);

	this.shape_1111 = new cjs.Shape();
	this.shape_1111.graphics.f("#48608E").s().p("AgDBIQgKgGgHgYQgDgIgBgJIgBgGQACADAEABIAAABIADACQAGAEAIAAQAFACAHgDQAHgBAFgFIAEgEIgCAKQgCANgGALIgEAIQgEAGgHADIgCACIgBAAIgBAAgAgPg9QAEgIAEgCIABAAIABAAQABgBAFAFIAIAGQAJAMADAPIADALQgIgIgLAAQgMgBgGACQgEACgDAEIgFADQACgaAIgOg");
	this.shape_1111.setTransform(471,192);

	this.shape_1112 = new cjs.Shape();
	this.shape_1112.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1112.setTransform(470.2,184.7);

	this.shape_1113 = new cjs.Shape();
	this.shape_1113.graphics.f("#E18F59").s().p("AgEAIIgCgBIAGgHIAFgJQADAEgCAFIgGADIgDADQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAAAg");
	this.shape_1113.setTransform(465.8,192.8);

	this.shape_1114 = new cjs.Shape();
	this.shape_1114.graphics.f("#3A4D75").s().p("AASBGQgOgFgMgRQgIgMgFgKQgDgEgBgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAgBAAAAIAEgEIAHgCIAJAIIAJAJQABAIADAIQAHAYAKAGQgEAAgEgCgAgUgGQgFgEAAgFQAAgFAGgJIALgQQANgSALgGIAGgCIAAABQgEACgEAHQgIAOgCAaIgEAGIgDAEIgHAEIgFABIgFAAg");
	this.shape_1114.setTransform(467.9,192);

	this.shape_1115 = new cjs.Shape();
	this.shape_1115.graphics.f("#EEC09E").s().p("AAbAUQgEgDgDgEIgCgKQgJgBADgCIADAAIACgBQABgHADgGIAGgGIAFgDQgEAFACAIIACAKQAAADgCAEQgDAKAFAHQgDgBgCgDgAgYAUQAAgCALgNIgGAEIgJAGQgHABAJgJIAGgEIABgBIgCAAIgDACIgFAEIgCgBIAAgBQABgEAKgEIgLACIAAAAIACgCQADgDAIgEQAJgCAFgDIACgBQgBAGAEADIAFABIAFgBIgFAGIgGAKIgEAGQgEAFgCgBIgBgBIAAgCQAJgLgEADIgIAHQgHAFgCAAIgBgBg");
	this.shape_1115.setTransform(465.6,191.9);

	this.shape_1116 = new cjs.Shape();
	this.shape_1116.graphics.f("#E18F59").s().p("AgFAIIgBgBIAGgHIAFgJQADAEgCAFQgDABgDADQgCAAgBADQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_1116.setTransform(465.8,176.3);

	this.shape_1117 = new cjs.Shape();
	this.shape_1117.graphics.f("#372511").s().p("AgJBEQgDgBgDgEIAFgIQAFgLADgNIABgKQABgDABgEQADgHABgGQgBgEgCgFQgCgGgBgEIgCgCIgDgMQgDgPgJgLQAFgHAEgCQAHgDACAEQAHAFAEAOQAIAVAAAcQAAAdgIASQgEANgHAFQgBACgDAAIgFgBg");
	this.shape_1117.setTransform(473.9,175.2);

	this.shape_1118 = new cjs.Shape();
	this.shape_1118.graphics.f("#EEC09E").s().p("AAbAUQgEgDgCgEQgDgEgBgHQgIgBADgBIADAAIACgBQABgHADgFIAFgHIAGgDQgDAEABAIIACALQAAADgBAFQgEAJAFAHIgFgEgAgYAUQAAgDALgMIgGAEIgJAFQgHACAJgIIAGgGIABgBIgBABIgEADIgFADIgBAAIgBgCQACgEAJgEQgJADgBgBIgBAAIACgBQAEgEAHgEIAPgFIABgBQAAAHADACIAFABIAFgBIgFAGIgGAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgDADIgJAHQgHAFgCAAIgBgBg");
	this.shape_1118.setTransform(465.6,175.3);

	this.shape_1119 = new cjs.Shape();
	this.shape_1119.graphics.f("#41210C").s().p("AgIAgQgIgBgFgDIgDgDIgBgBQgFgHAEgJQABgFAAgDIgCgLQgBgIADgEQACgEAFgCQAGgCAMAAQALABAIAJIACACQADAEACAGQACAFAAAEQAAAGgDAHQgBAEgDADIgEAEQgFAEgHACQgFACgFAAIgDAAg");
	this.shape_1119.setTransform(471.5,175.3);

	this.shape_1120 = new cjs.Shape();
	this.shape_1120.graphics.f("#E64A00").s().p("AASBHQgOgFgMgSQgJgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABgDADgBQAEgDADAAIAJAIQAFAGAEACIAEASQAHAXAKAGIgIgBgAgUgGQgFgDAAgGQAAgFAGgIQADgHAIgKQANgSALgGQADgCADAAIAAAAQgEADgEAIQgIANgDAbIgDAGIgEAEIgGAEIgFAAIgBAAIgEAAg");
	this.shape_1120.setTransform(467.9,175.4);

	this.shape_1121 = new cjs.Shape();
	this.shape_1121.graphics.f("#EC672C").s().p("AgUArIgEgSIAAgFIAFAEIABABIADACQAFADAIABQAFABAIgDQAHgBAFgFIADgDIgBAJQgDANgFAMIgFAIQgEAFgGADIgCACIgDAAQgKgGgHgXgAgPg8QAEgIAFgDIABAAQACgBAEAFIAIAHQAJAMAEAPIACALQgIgJgLAAQgLgBgGADQgGACgCADIgFAEQADgbAHgNg");
	this.shape_1121.setTransform(470.9,175.4);

	this.shape_1122 = new cjs.Shape();
	this.shape_1122.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1122.setTransform(470.2,149.6);

	this.shape_1123 = new cjs.Shape();
	this.shape_1123.graphics.f("#000000").s().p("AgSAeQgEgCgDgEQgDgFACgIIABgJQAAgEgBgEQgEgKAGgHIAAgBIADgCQAGgEAIAAQAHgBAFACQAHACAFAEIAEAEQADADABAEQAEAGgBAGIgBAKIgGAKIgCADQgIAIgLAAIgDAAQgKAAgFgBg");
	this.shape_1123.setTransform(471.5,142.4);

	this.shape_1124 = new cjs.Shape();
	this.shape_1124.graphics.f("#372511").s().p("AgJBEQgFgCgEgGQAJgMADgPIADgLIACgDIAEgKIABgJQABgHgEgGQgBgEgBgDIgCgKQgCgNgGgLIgEgIQADgEADgBQAGgDADAEQAHAFAFANQAHASAAAdQAAAbgHAWQgFAOgHAFQgBACgDAAIgFgBg");
	this.shape_1124.setTransform(473.9,142.5);

	this.shape_1125 = new cjs.Shape();
	this.shape_1125.graphics.f("#609634").s().p("AgFBIIgBgBIgBAAQgEgCgEgHQgIgPgCgZIAFADQADADAEACQAGACAMAAQALgBAIgIIgDALQgDAQgJALIgIAHQgEAEgCAAIAAAAgAAWgWQgFgFgHgCQgHgCgFABQgIABgGADIgDADIAAAAQgEACgCACIABgGQABgIADgIQAHgYAKgGIACAAIACACQAHADAEAFIAEAIQAGAMACAMIACAKIgEgDg");
	this.shape_1125.setTransform(471,142.4);

	this.shape_1126 = new cjs.Shape();
	this.shape_1126.graphics.f("#4A7328").s().p("AAQBGQgLgGgNgSIgLgQQgGgJAAgFQAAgGAFgCIAFgBIAFABIAHAEIADADIAEAHQACAZAIAPQAEAHAEACIAAABQgCAAgEgCgAgUgLIgEgDQAAgBAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAQABgEADgEIANgWQAMgRAOgFQAEgCAEAAQgKAGgHAYQgDAIgBAIIgJAJIgJAIIgHgDg");
	this.shape_1126.setTransform(467.9,142.4);

	this.shape_1127 = new cjs.Shape();
	this.shape_1127.graphics.f("#E18F59").s().p("AAAAAIgGgGIACgCIAAgBQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAIADAEIAGACQACAFgDAFIgFgKg");
	this.shape_1127.setTransform(465.8,141.5);

	this.shape_1128 = new cjs.Shape();
	this.shape_1128.graphics.f("#EEC09E").s().p("AAbAVIgGgGQgDgGgBgHIgCAAIgDgCQgDAAAJgCIACgKIAHgHQACgDADgBQgFAHADAKQACAEAAAEIgCAJQgCAIAEAFIgFgDgAgEAPIgOgFQgIgEgDgDIgCgDIAAAAIALADQgKgEgBgDIAAgCIACgBIAFAEIADACIACABIgBgCIgGgEQgJgJAHABIAJAGIAGAEQgLgNAAgCQAAgDAKAHIAIAHQAEADgJgLIAAgCIABgBQACgBAEAFIAEAGIAGAKIAFAGIgFgBIgFABQgEADABAGIgCgBg");
	this.shape_1128.setTransform(465.6,142.4);

	this.shape_1129 = new cjs.Shape();
	this.shape_1129.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1129.setTransform(470.2,215.7);

	this.shape_1130 = new cjs.Shape();
	this.shape_1130.graphics.f("#E18F59").s().p("AAAAAIgGgHIACgBIAAgBQAAABAAAAQAAAAAAABQAAAAABAAQAAABAAAAIADADIAGADQACAFgDAFIgFgKg");
	this.shape_1130.setTransform(465.8,207.6);

	this.shape_1131 = new cjs.Shape();
	this.shape_1131.graphics.f("#000000").s().p("AgSAeQgEgCgDgEQgDgFACgIIABgKQAAgDgBgEQgEgKAGgIIAAAAIADgCQAGgEAIAAQAHgCAFADQAHABAFAFIAEADQADAEABAEQAEAGgBAGIgBAKIgGAKIgCADQgIAIgLAAIgDABQgKAAgFgCg");
	this.shape_1131.setTransform(471.5,208.5);

	this.shape_1132 = new cjs.Shape();
	this.shape_1132.graphics.f("#EEC09E").s().p("AAbAVIgGgGQgDgGgBgHIgCAAIgDgCQgDgBAJgBIACgKIAHgIIAFgDQgFAHADAKQACAEAAAEIgCAJQgCAJAEAEIgFgDgAgEAPIgOgFQgIgEgDgDIgCgDIAAAAIALADQgKgEgBgEIAAgBIACAAIAFADIADACIACAAIgBgBIgGgEQgJgIAHAAIAJAGIAGAEQgLgMAAgEQAAgCAKAIIAIAGQAEADgJgLIAAgBIABgCQACgBAEAFIAEAHIAGAJIAFAHQgCgCgDAAIgFACQgEACABAGIgCgBg");
	this.shape_1132.setTransform(465.6,208.5);

	this.shape_1133 = new cjs.Shape();
	this.shape_1133.graphics.f("#5BB1B0").s().p("AAQBGQgLgGgNgSIgLgRQgGgIAAgFQAAgGAFgCIAFgBQADgBACACIAHAEIADAEIAEAGQACAZAIAPQAEAHAEACIAAABIgGgCgAgUgLIgEgDQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQABgEADgEQAFgKAIgMQAMgRAOgGIAIgBQgKAFgHAZQgDAIgBAIIgJAJIgJAIIgHgDg");
	this.shape_1133.setTransform(467.9,208.5);

	this.shape_1134 = new cjs.Shape();
	this.shape_1134.graphics.f("#6BD3D2").s().p("AgFBIIgBAAIgBAAQgEgCgEgIQgIgOgCgaIAFADQADAEAEACQAGACAMgBQALAAAIgIIgDALQgDAPgJALIgIAHQgEAEgCAAIAAAAgAAWgWQgFgFgHgBQgHgDgFACQgIAAgGAEIgDACIAAAAIgGAEIABgFQABgJADgIQAHgYAKgGIACAAIACACQAHADAEAGIAEAIQAGALACANIACAJIgEgDg");
	this.shape_1134.setTransform(471,208.4);

	this.shape_1135 = new cjs.Shape();
	this.shape_1135.graphics.f("#372511").s().p("AgJBEQgFgCgEgHQAJgLADgPIADgLIACgDIAEgKIABgJQABgHgEgGQgBgEgBgEIgCgJQgCgNgGgLIgEgIQADgEADgBQAGgDADAEQAHAFAFANQAHASAAAcQAAAcgHAWQgFAOgHAEQgBADgDAAIgFgBg");
	this.shape_1135.setTransform(473.9,208.6);

	this.shape_1136 = new cjs.Shape();
	this.shape_1136.graphics.f("#E18F59").s().p("AAAAAIgGgGIABgCIABgBQAAAAAAABQAAAAAAAAQAAABABAAQAAAAAAABQABACACABQADADADAAQACAFgDAFIgFgKg");
	this.shape_1136.setTransform(465.8,125);

	this.shape_1137 = new cjs.Shape();
	this.shape_1137.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFgBgHIgCgBIgDgBQgDAAAIgCQABgGADgEIAGgIIAFgDQgFAHAEAJQABAFAAADIgCAKQgBAJADAEIgGgDgAgDAPIgPgFQgHgEgEgEIgCgCIABAAQABAAAJAEQgJgFgCgEIABgCIABAAIAFADIAEADIABAAIgBAAIgGgGQgJgIAHACQACAAAHAFIAGAEQgLgNAAgDQAAgDAKAIIAJAHQADADgJgLIAAgBIABgCQACgBAEAFIAEAHIAGAJIAFAGIgFgBIgFABQgDACAAAHIgBgBg");
	this.shape_1137.setTransform(465.6,125.9);

	this.shape_1138 = new cjs.Shape();
	this.shape_1138.graphics.f("#372511").s().p("AgJBEQgEgCgFgHQAJgLADgPIADgMIACgCQABgEACgGQACgFABgEQgBgHgDgGQgBgEgBgEIgBgJQgDgNgFgLIgFgJQADgDADgBQAHgCACADQAHAFAEANQAIASAAAcQAAAdgIAVQgEAOgHAFQAAACgEAAIgFgBg");
	this.shape_1138.setTransform(473.9,126);

	this.shape_1139 = new cjs.Shape();
	this.shape_1139.graphics.f("#FFF6CD").s().p("AgSAeQgFgCgCgDQgDgFABgIIACgKQAAgDgBgFQgEgJAFgIIABgBIADgCQAFgEAIAAQAIgBAFACQAHACAFAFIAEADQADADABAEQADAHAAAFQAAAFgCAFQgCAGgDAFIgCACQgIAJgLAAIgCAAQgLAAgFgCg");
	this.shape_1139.setTransform(471.5,125.8);

	this.shape_1140 = new cjs.Shape();
	this.shape_1140.graphics.f("#424242").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAGACQAGACALAAQALAAAIgJIgCALQgEAPgJAMIgIAHQgEAEgBAAIgBAAgAAXgWQgFgFgHgCQgIgCgFABQgIAAgFAEIgDACIgBABIgFAEIAAgGIAEgRQAHgXAKgGIADAAIACABQAGAEAEAFIAFAJQAFAKADANIABAKIgDgDg");
	this.shape_1140.setTransform(470.9,125.8);

	this.shape_1141 = new cjs.Shape();
	this.shape_1141.graphics.f("#393939").s().p("AAQBFQgLgFgNgTQgIgJgDgHQgGgIAAgFQAAgGAFgDIAFgBIAFABIAGAFIAEADIADAGQADAaAIAOQAEAIAEADIAAAAQgDAAgDgDgAgUgLQgDgCgBgCQAAAAAAAAQgBgBAAAAQAAAAAAgBQAAAAAAAAIADgIQAFgKAJgMQAMgSAOgFIAIgBQgKAGgHAXIgEARIgJAJIgJAIQgDAAgEgDg");
	this.shape_1141.setTransform(467.9,125.8);

	this.shape_1142 = new cjs.Shape();
	this.shape_1142.graphics.f("#E18F59").s().p("AAAAAIgGgGIABgBIABgCQAAAAAAABQAAAAAAAAQAAABABAAQAAABAAAAQABACACABQADADADAAQACAGgDAEIgFgKg");
	this.shape_1142.setTransform(465.8,158);

	this.shape_1143 = new cjs.Shape();
	this.shape_1143.graphics.f("#000000").s().p("AgSAeQgFgCgCgDQgDgFABgIIACgKQAAgDgBgFQgEgJAFgIIABgBIADgCQAFgEAIAAQAIgBAFACQAHACAFAFIAEADQADADABAEQADAHAAAFQAAAFgCAFQgCAGgDAFIgCACQgIAJgLAAIgCAAQgLAAgFgCg");
	this.shape_1143.setTransform(471.5,158.9);

	this.shape_1144 = new cjs.Shape();
	this.shape_1144.graphics.f("#EEC09E").s().p("AAaAVIgFgHQgDgFgBgHIgCgBIgDgBQgDAAAIgCQABgGADgEIAGgIIAFgDQgFAHAEAJQABAFAAADIgCALQgBAIADAEIgGgDgAgDAPIgPgFQgHgEgEgEIgCgCIABAAQABAAAJADQgJgEgCgEIABgCIABAAIAFADIAEADIABAAIgBAAIgGgGQgJgIAHACQACAAAHAFIAGAEQgLgMAAgEQAAgDAKAIIAJAHQADADgJgLIAAgBIABgCQACgBAEAFIAEAHIAGAJIAFAGIgFgBIgFABQgDACAAAHIgBgBg");
	this.shape_1144.setTransform(465.6,158.9);

	this.shape_1145 = new cjs.Shape();
	this.shape_1145.graphics.f("#447BCD").s().p("AAQBGQgLgGgNgSQgIgKgDgHQgGgIAAgFQAAgGAFgDIAFgBIAFABIAGAEIAEAEIADAGQADAaAIAOQAEAIAEADIAAAAQgDAAgDgCgAgUgLQgDgCgBgCQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAAAAAgBIADgHQAFgKAJgMQAMgSAOgFIAIgBQgKAGgHAXIgEARIgJAJIgJAIQgDAAgEgDg");
	this.shape_1145.setTransform(467.9,158.9);

	this.shape_1146 = new cjs.Shape();
	this.shape_1146.graphics.f("#628DD1").s().p("AgFBIIgBAAQgFgDgEgIQgHgOgDgaIAFAEQACADAGACQAGACALAAQALAAAIgJIgCALQgEAPgJAMIgIAHQgEAEgBAAIgBAAgAAXgWQgFgFgHgCQgIgCgFABQgIAAgFAEIgDACIgBABIgFAEIAAgGIAEgRQAHgXAKgGIADAAIACABQAGAEAEAFIAFAIQAFALADANIABAKIgDgDg");
	this.shape_1146.setTransform(470.9,158.9);

	this.shape_1147 = new cjs.Shape();
	this.shape_1147.graphics.f("#372511").s().p("AgJBEQgEgCgFgHQAJgLADgPIADgMIACgCQABgEACgGQACgFABgEQgBgHgDgGQgBgEgBgEIgBgKQgDgMgFgLIgFgJQADgDADgBQAHgDACAEQAHAFAEANQAIARAAAdQAAAdgIAVQgEAOgHAFQAAACgEAAIgFgBg");
	this.shape_1147.setTransform(473.9,159);

	this.shape_1148 = new cjs.Shape();
	this.shape_1148.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgDgCIAAgBQgGgHAEgKQABgEAAgEIgBgKQgCgIADgFQADgDAEgCQAGgCAMAAQALABAIAIIACADIAGAKIABAJQABAGgEAHQgBAEgDADIgEAEQgFAEgHACQgFACgDAAIgEgBg");
	this.shape_1148.setTransform(471.5,92.8);

	this.shape_1149 = new cjs.Shape();
	this.shape_1149.graphics.f("#372511").s().p("AgJBEQgDgCgDgCIAEgIQAGgMACgNIACgJQABgEABgEQAEgGgBgIIgBgIIgEgKIgCgDIgDgKQgDgQgJgLQAEgHAFgCQAGgDADAEQAHAFAFAOQAHAWAAAcQAAAcgHASQgFANgHAFQgBACgDAAIgFgBg");
	this.shape_1149.setTransform(473.9,92.7);

	this.shape_1150 = new cjs.Shape();
	this.shape_1150.graphics.f("#609634").s().p("AgDBIQgKgGgHgYQgDgIgBgJIgBgFIAGAEIAAAAIADADQAGADAIABQAFABAHgDQAHgBAFgFIAEgDIgCAJQgCANgGAMIgEAIQgEAFgHADIgCACIgBAAIgBAAgAgPg9QAEgHAEgDIABAAIABAAQABgBAFAFIAIAHQAJALADAQIADALQgIgJgLAAQgMgBgGADQgEABgDAEIgFADQACgaAIgOg");
	this.shape_1150.setTransform(471,92.8);

	this.shape_1151 = new cjs.Shape();
	this.shape_1151.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1151.setTransform(470.2,85.6);

	this.shape_1152 = new cjs.Shape();
	this.shape_1152.graphics.f("#E18F59").s().p("AgEAJIgCgBIAGgHIAFgKQADAFgCAFIgGADIgDADQAAABAAAAQgBAAAAABQAAAAAAAAQAAAAAAABg");
	this.shape_1152.setTransform(465.8,93.6);

	this.shape_1153 = new cjs.Shape();
	this.shape_1153.graphics.f("#4A7328").s().p("AASBHQgOgGgMgRQgIgMgFgKQgDgFgBgDQAAAAAAgBQAAAAAAAAQAAAAABgBQAAAAAAAAIAEgEIAHgDIAJAIIAJAJQABAIADAJQAHAXAKAGIgIgBgAgUgHQgFgCAAgHQAAgEAGgIIALgRQANgSALgGQAEgCACAAIAAAAQgEADgEAHQgIAOgCAbIgEAGIgDADIgHAEQgCABgDAAIgFgBg");
	this.shape_1153.setTransform(467.9,92.8);

	this.shape_1154 = new cjs.Shape();
	this.shape_1154.graphics.f("#EEC09E").s().p("AAbAVIgHgIIgCgKQgJgCADgBIADgBIACAAQABgHADgFIAGgHIAFgDQgEAFACAHIACAKQAAAEgCAEQgDAKAFAHIgFgDgAgYAVQAAgDALgNIgGAEIgJAFQgHACAJgJIAGgEIABgBIgCAAIgDACIgFAEIgCgBIAAgCQABgDAKgEIgLADIAAgBIACgCQADgDAIgEIAOgFIACgBQgBAHAEACIAFABQADAAACgBIgFAGIgGAKIgEAGQgEAFgCgBQAAAAgBAAQAAAAAAAAQAAgBAAAAQAAAAAAAAIAAgCQAJgLgEADIgIAHQgHAFgCAAIgBAAg");
	this.shape_1154.setTransform(465.6,92.8);

	this.shape_1155 = new cjs.Shape();
	this.shape_1155.graphics.f("#E18F59").s().p("AgEAIIgCAAIAGgIIAFgJQADAFgCAEIgGAEIgDADQAAAAAAABQgBAAAAAAQAAABAAAAQAAABAAAAg");
	this.shape_1155.setTransform(465.8,27.6);

	this.shape_1156 = new cjs.Shape();
	this.shape_1156.graphics.f("#372511").s().p("AgJBEQgDgBgDgEIAEgIQAGgLACgNIACgKQABgDABgEQAEgGgBgIIgBgIIgEgKIgCgDIgDgLQgDgPgJgMQAEgGAFgCQAGgDADAEQAHAFAFAOQAHAWAAAbQAAAdgHASQgFANgHAFQAAACgEAAIgFgBg");
	this.shape_1156.setTransform(473.9,26.6);

	this.shape_1157 = new cjs.Shape();
	this.shape_1157.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgDgCIAAgBQgGgHAEgKQABgEAAgEIgBgJQgCgIADgGQADgDAEgCQAGgCAMABQALAAAIAIIACADIAGAKIABAJQABAHgEAGQgBAEgDADIgEAEQgFAEgHACIgHACIgFgBg");
	this.shape_1157.setTransform(471.5,26.7);

	this.shape_1158 = new cjs.Shape();
	this.shape_1158.graphics.f("#EEC09E").s().p("AAbAUIgHgHIgCgKQgJgCADgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAIACgBQABgHADgGIAGgGIAFgEQgEAGACAIIACAKQAAADgCAEQgDAKAFAIQgDgCgCgDgAgYAUQAAgDALgMIgGAEIgJAGQgHABAJgJIAGgEIABgCIgCABQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAgBABIgFADIgCgBIAAgBQABgEAKgEIgLACIAAAAIACgBQADgEAIgEIAOgFIACgBQgBAHAEACIAFABIAFgBIgFAGIgGAJIgEAIQgEAEgCgBIgBgBIAAgCQAJgLgEADIgIAHQgHAFgCAAIgBgBg");
	this.shape_1158.setTransform(465.6,26.7);

	this.shape_1159 = new cjs.Shape();
	this.shape_1159.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1159.setTransform(470.2,19.5);

	this.shape_1160 = new cjs.Shape();
	this.shape_1160.graphics.f("#5BB1B0").s().p("AASBGQgOgFgMgRQgIgMgFgKQgDgEgBgEQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBIAEgDIAHgDIAJAIIAJAJQABAIADAIQAHAYAKAGQgEAAgEgCgAgUgHQgFgCAAgGQAAgFAGgJIALgQQANgSALgGQAEgCACAAIAAAAQgEADgEAHQgIAPgCAZIgEAHIgDADIgHAEIgFABIgFgBg");
	this.shape_1160.setTransform(467.9,26.7);

	this.shape_1161 = new cjs.Shape();
	this.shape_1161.graphics.f("#6BD3D2").s().p("AgDBIQgKgGgHgYQgDgIgBgIIgBgGQACACAEACIAAAAIADADQAGADAIABQAFABAHgCQAHgCAFgFIAEgDIgCAKQgCAMgGAMIgEAIQgEAFgHADIgCACIgBAAIgBAAgAgPg9QAEgHAEgDIABAAIABAAQABgBAFAFIAIAHQAJALADAQIADALQgIgIgLgBQgMgBgGADQgEABgDAEIgFADQACgZAIgPg");
	this.shape_1161.setTransform(471,26.7);

	this.shape_1162 = new cjs.Shape();
	this.shape_1162.graphics.f("#E18F59").s().p("AgEAIIgCgBIAGgHIAFgJQADAFgCAEIgGADIgDADQAAABAAAAQgBABAAAAQAAABAAAAQAAAAAAABg");
	this.shape_1162.setTransform(465.8,110.2);

	this.shape_1163 = new cjs.Shape();
	this.shape_1163.graphics.f("#000000").s().p("AgHAfQgIAAgGgEIgDgCIAAgBQgGgHAEgKQABgEAAgEIgBgJQgCgIADgGQADgDAEgCQAGgCAMABQALAAAIAIIACADIAGAKIABAJQABAHgEAGQgBAEgDADIgEAEQgFAEgHACIgHABIgFAAg");
	this.shape_1163.setTransform(471.5,109.3);

	this.shape_1164 = new cjs.Shape();
	this.shape_1164.graphics.f("#EEC09E").s().p("AAbAUIgHgHIgCgKQgJgBADgCIADAAIACgBQABgHADgGIAGgGIAFgEQgEAGACAIIACAKQAAADgCAFQgDAJAFAIQgDgCgCgDgAgYAUQAAgCALgNIgGAEIgJAGQgHABAJgIIAGgFIABgCIgCABIgDACIgFAEIgCAAIAAgCQABgEAKgEIgLACIAAAAIACgBQADgEAIgDQAJgDAFgDIACgBQgBAHAEACIAFABIAFgBIgFAGIgGAKIgEAHQgEAEgCgBIgBgBIAAgCQAJgKgEACIgIAHQgHAFgCAAIgBgBg");
	this.shape_1164.setTransform(465.6,109.3);

	this.shape_1165 = new cjs.Shape();
	this.shape_1165.graphics.f("#447BCD").s().p("AAAAAIAAAAIAAAAg");
	this.shape_1165.setTransform(470.2,102.1);

	this.shape_1166 = new cjs.Shape();
	this.shape_1166.graphics.f("#3A4D75").s().p("AASBGQgOgFgMgRIgNgWQgDgEgBgEQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBIAEgDIAHgDIAJAIIAJAJQABAIADAIQAHAYAKAGQgEAAgEgCgAgUgGQgFgDAAgGQAAgFAGgJIALgQQANgSALgGQAEgCACAAIAAABQgEACgEAHQgIAPgCAZIgEAHIgDADIgHAEIgFABIgFAAg");
	this.shape_1166.setTransform(467.9,109.3);

	this.shape_1167 = new cjs.Shape();
	this.shape_1167.graphics.f("#372511").s().p("AgJBEQgDgBgDgEIAEgIQAGgLACgNIACgKQABgDABgEQAEgGgBgIIgBgIIgEgKIgCgDIgDgLQgDgPgJgMQAEgGAFgCQAGgDADAEQAHAFAFAOQAHAWAAAbQAAAdgHATQgFAMgHAFQAAACgEAAIgFgBg");
	this.shape_1167.setTransform(473.9,109.2);

	this.shape_1168 = new cjs.Shape();
	this.shape_1168.graphics.f("#48608E").s().p("AgDBIQgKgGgHgYQgDgIgBgIIgBgGQACACAEACIAAAAIADADQAGADAIABQAFABAHgCQAHgCAFgFIAEgDIgCAKQgCAMgGAMIgEAIQgEAGgHACIgCACIgBAAIgBAAgAgPg9QAEgHAEgCIABAAIABgBQABgBAFAFIAIAHQAJALADAQIADALQgIgIgLgBQgMAAgGACQgEACgDADIgFADQACgZAIgPg");
	this.shape_1168.setTransform(471,109.3);

	this.shape_1169 = new cjs.Shape();
	this.shape_1169.graphics.f("#41210C").s().p("AgIAfQgIAAgFgDIgDgDIgBgBQgFgHAEgKQABgEAAgDIgCgLQgBgHADgFQACgDAFgDQAGgCAMABQALAAAIAJIACACQADAEACAGQACAFAAAEQAAAGgDAHQgBAEgDADIgEADQgFAFgHACQgFACgFAAIgDgBg");
	this.shape_1169.setTransform(471.5,43.2);

	this.shape_1170 = new cjs.Shape();
	this.shape_1170.graphics.f("#372511").s().p("AgJBEQgDgCgDgDIAFgIQAFgMADgMIABgKQABgDABgEQADgHABgHQgBgDgCgFQgCgGgBgEIgCgCIgDgMQgDgPgJgLQAFgHAEgCQAHgCACAEQAHAEAEAOQAIAVAAAdQAAAcgIATQgEAMgHAFQgBACgDAAIgFgBg");
	this.shape_1170.setTransform(473.9,43.1);

	this.shape_1171 = new cjs.Shape();
	this.shape_1171.graphics.f("#EC672C").s().p("AgUAqIgEgRIAAgGIAFAEIABACIADACQAFADAIABQAFAAAIgCQAHgCAFgEIADgEIgBAKQgDANgFALIgFAIQgEAGgGADIgCACIgDAAQgKgGgHgYgAgPg9QAEgHAFgDIABAAQACgBAEAFIAIAHQAJALAEAPIACAMQgIgJgLAAQgLgBgGACQgGADgCADQgDABgCADQADgbAHgOg");
	this.shape_1171.setTransform(470.9,43.2);

	this.shape_1172 = new cjs.Shape();
	this.shape_1172.graphics.f("#E64A00").s().p("AASBHQgOgGgMgRQgJgMgFgKIgDgIQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQABgCADgBQAEgDADAAIAJAIIAJAIIAEARQAHAYAKAGIgIgBgAgUgHQgFgCAAgGQAAgFAGgIIALgRQANgSALgGIAGgCIAAAAQgEADgEAHQgIAOgDAbIgDAGIgEADIgGAEIgFABIgBAAIgEgBg");
	this.shape_1172.setTransform(467.9,43.2);

	this.shape_1173 = new cjs.Shape();
	this.shape_1173.graphics.f("#E18F59").s().p("AgFAIIgBgBIAGgHIAFgJQADAEgCAGQgDAAgDACQgCACgBACQAAAAAAABQgBAAAAABQAAAAAAAAQAAAAAAABIgBgCg");
	this.shape_1173.setTransform(465.8,44.1);

	this.shape_1174 = new cjs.Shape();
	this.shape_1174.graphics.f("#EEC09E").s().p("AAbAUQgEgDgCgEQgDgEgBgGQgIgBADgCIADAAIACgBQABgHADgFIAFgHQADgCADgBQgDAFABAHIACALQAAADgBAEQgEAKAFAHIgFgEgAgYAUQAAgCALgNQAAgBgGAEIgJAGQgHACAJgJIAGgEIABgBIgBABIgEABIgFADIgBAAIgBgBQACgEAJgFQgJADgBAAIgBAAIACgCQAEgDAHgEIAPgFIABAAQAAAGADACIAFABIAFgBIgFAGIgGAKIgEAGQgEAFgCgBIgBgBIAAgCQAJgLgDACIgJAIQgHAFgCAAIgBgBg");
	this.shape_1174.setTransform(465.6,43.2);

	this.shape_1175 = new cjs.Shape();
	this.shape_1175.graphics.f("#E18F59").s().p("AgFAIIgBgBIAGgHIAFgJQADAFgCAEQgDABgDADQgCABgBACQAAAAAAABQgBAAAAABQAAAAAAAAQAAABAAAAIgBgCg");
	this.shape_1175.setTransform(465.8,60.6);

	this.shape_1176 = new cjs.Shape();
	this.shape_1176.graphics.f("#EEC09E").s().p("AAbAVIgGgIQgDgEgBgGQgIgCADgBIADAAIACgBQABgHADgFIAFgHIAGgDQgDAEABAJIACAKQAAADgBAFQgEAJAFAHIgFgDgAgYAVQAAgDALgNIgGAEQgHAFgCAAQgHACAJgIIAGgGIABAAIgBAAIgEADIgFADIgBAAIgBgCQACgEAJgEQgJADgBgBIgBAAIACgBQAEgEAHgEIAPgFIABgBQAAAHADACIAFABIAFgBIgFAGIgGAJIgEAHQgEAFgCgBIgBgCIAAgBQAJgLgDADIgJAHQgHAGgCAAIgBgBg");
	this.shape_1176.setTransform(465.6,59.7);

	this.shape_1177 = new cjs.Shape();
	this.shape_1177.graphics.f("#FFF6CD").s().p("AgIAfQgIAAgFgEIgDgCIgBgBQgFgIAEgJQABgFAAgDIgCgJQgBgJADgFQACgDAFgCQAGgCAMAAQALAAAIAJIACACQADAFACAGQACAFAAAEQAAAGgDAHQgBAEgDADIgEADQgFAFgHACQgFACgFAAIgDgBg");
	this.shape_1177.setTransform(471.5,59.7);

	this.shape_1178 = new cjs.Shape();
	this.shape_1178.graphics.f("#393939").s().p("AASBHQgOgFgMgSQgJgMgFgKIgDgHQAAgBAAAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABgCADgCQAEgDADAAIAJAIIAJAJIAEARQAHAXAKAGIgIgBgAgUgGQgFgDAAgGQAAgFAGgIQADgHAIgJQANgTALgFQADgDADAAIAAAAQgEADgEAIQgIAOgDAaIgDAGIgEAEIgGAEIgFABIgFgBg");
	this.shape_1178.setTransform(467.9,59.7);

	this.shape_1179 = new cjs.Shape();
	this.shape_1179.graphics.f("#424242").s().p("AgDBIQgKgGgHgXIgEgRIAAgGIAFAEIABABIADACQAFAEAIAAQAFABAIgCQAHgCAFgFIADgDIgBAKQgDANgFALIgFAIQgEAFgGAEIgCABgAgPg8QAEgIAFgDIABAAQACgBAEAFIAIAHQAJAMAEAPIACALQgIgJgLAAQgLAAgGACQgGACgCADIgFAEQADgaAHgOg");
	this.shape_1179.setTransform(470.9,59.7);

	this.shape_1180 = new cjs.Shape();
	this.shape_1180.graphics.f("#372511").s().p("AgJBEQgDgBgDgDIAFgJQAFgLADgNIABgJQABgEABgEQADgGABgHQgBgEgCgFQgCgGgBgEIgCgCIgDgMQgDgPgJgLQAFgHAEgCQAHgDACAEQAHAFAEAOQAIAVAAAdQAAAcgIASQgEANgHAFQAAACgEAAIgFgBg");
	this.shape_1180.setTransform(473.9,59.6);

	this.shape_1181 = new cjs.Shape();
	this.shape_1181.graphics.f("#E18F59").s().p("AgFAIIgBgBIAGgHIAFgJQADAFgCAFQgDAAgDACIgDAEQAAAAAAABQgBAAAAAAQAAABAAAAQAAAAAAABIgBgCg");
	this.shape_1181.setTransform(465.8,77.1);

	this.shape_1182 = new cjs.Shape();
	this.shape_1182.graphics.f("#372511").s().p("AgJBEQgDgBgDgDIAFgJQAFgLADgMIABgKQABgDABgEQADgHABgHQgBgDgCgGQgCgFgBgFIgCgCIgDgMQgDgPgJgLQAFgGAEgDQAHgDACAEQAHAFAEAOQAIAWAAAcQAAAdgIARQgEAOgHAEQAAACgEAAIgFgBg");
	this.shape_1182.setTransform(473.9,76.1);

	this.shape_1183 = new cjs.Shape();
	this.shape_1183.graphics.f("#EEC09E").s().p("AAbAUQgEgCgCgFQgDgEgBgGQgIgCADgBIADAAIACgBQABgIADgFIAFgGIAGgDQgDAFABAHIACALQAAADgBAFQgEAIAFAIIgFgEgAgYAUQAAgCALgNIgGAEQgHAGgCgBQgHACAJgIIAGgGIABAAQAAAAAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAIgEACIgFAEIgBAAIgBgCQACgDAJgGQgJAEgBgBIgBAAIACgCQAEgDAHgEIAPgFIABAAQAAAFADADIAFABIAFgBIgFAGIgGAJIgEAHQgEAGgCgCIgBgBIAAgBQAJgLgDACIgJAHQgHAFgCAAIgBgBg");
	this.shape_1183.setTransform(465.6,76.2);

	this.shape_1184 = new cjs.Shape();
	this.shape_1184.graphics.f("#000000").s().p("AgIAfQgIAAgFgEIgDgCIgBgBQgFgIAEgJQABgEAAgDIgCgLQgBgIADgEQACgEAFgCQAGgCAMABQALAAAIAIIACADQADAEACAGQACAFAAAEQAAAHgDAGQgBAEgDADIgEADQgFAFgHACIgJABIgEAAg");
	this.shape_1184.setTransform(471.5,76.2);

	this.shape_1185 = new cjs.Shape();
	this.shape_1185.graphics.f("#447BCD").s().p("AASBGQgOgEgMgSQgJgMgFgKIgDgIQAAAAAAAAQAAAAAAgBQAAAAABgBQAAAAAAgBIAEgDQAEgDADAAIAJAIIAJAJIAEAQQAHAYAKAGIgIgCgAgUgHQgFgCAAgGQAAgEAGgJIALgRQANgSALgGIAGgDIAAABQgEADgEAHQgIAPgDAaIgDAGIgEAEIgGADIgFABIgFgBg");
	this.shape_1185.setTransform(467.9,76.3);

	this.shape_1186 = new cjs.Shape();
	this.shape_1186.graphics.f("#628DD1").s().p("AgDBJQgKgHgHgXIgEgRIAAgGIAFAEIABABIADACQAFAEAIAAQAFABAIgCQAHgCAFgFIADgDIgBAKQgDANgFALIgFAIQgEAGgGADIgCACgAgPg8QAEgIAFgCIABgBQACgBAEAFIAIAHQAJAMAEAPIACALQgIgIgLAAQgLgBgGACQgGACgCAEIgFADQADgaAHgOg");
	this.shape_1186.setTransform(470.9,76.2);

	this.shape_1187 = new cjs.Shape();
	this.shape_1187.graphics.f("#D9D9D9").s().p("AgjT+MAAAgn7IBHAAMAAAAn7g");
	this.shape_1187.setTransform(415.3,129.4);

	this.shape_1188 = new cjs.Shape();
	this.shape_1188.graphics.f("#9F3D3D").s().p("Agnz9QA7BXAUAOIAABGIg0AHMAAAAifIA0ADIAABGQgNAIhCBZg");
	this.shape_1188.setTransform(422.9,129.4);

	this.shape_1189 = new cjs.Shape();
	this.shape_1189.graphics.f("#FAFAFD").s().p("AlET+QBEhZAMgIIAAhGIHtAiIBMAEIAACBgAj0yYQgUgOg8hXIKJAAIAABkIhMAKIntA9g");
	this.shape_1189.setTransform(451.5,129.4);

	this.shape_1190 = new cjs.Shape();
	this.shape_1190.graphics.f("#646262").s().p("AglSHIAAglMAAAgjGIAAgdIBLgJMAAAAkWg");
	this.shape_1190.setTransform(480.2,128);

	this.shape_1191 = new cjs.Shape();
	this.shape_1191.graphics.f("#402913").s().p("ABuRCMAAAgiHIAlgGMAAAAiXgAgPQfMAAAghQIAjgFMAAAAhfgAiSP7MAAAggWIAlgGMAAAAgng");
	this.shape_1191.setTransform(451.1,127.3);

	this.shape_1192 = new cjs.Shape();
	this.shape_1192.graphics.f("#985E2F").s().p("ACERHMAAAgiYIBpgRMAAAAjFgAAEQkMAAAghgIBbgPMAAAAiHgAh8QAMAAAggnIBdgPMAAAAhQgAjtPiIAQ/5IA8gKMAAAAgXg");
	this.shape_1192.setTransform(452.6,127.9);

	this.shape_1193 = new cjs.Shape();
	this.shape_1193.graphics.f("#838383").s().p("AjbRjIg2gEMAAAgifIA2gGIHsg9IAAAdIhpARIglAGIhbAPIglAGIhbAPIglAGIg8AKIgQf5IBMAUIAlAKIBbAaIAlAKIBbAYIAlALIBpAcIAAAlg");
	this.shape_1193.setTransform(449,128.3);

	this.shape_1194 = new cjs.Shape();
	this.shape_1194.graphics.f("#D6D6D6").s().p("EhDPAkwIAAgcMB2qAAAIAAgBQDwgBCtitQCriqAAj1QAAjyiritQitisjwgBIAAABMg5MAAAQiTgDiJgYQoFhcmJmKQoAoAAArTQAArVIAoBQIAoALVAAIAAACMA4ygABQGdAAEkEjQEjEjAAGdQAAGdkjEiQkkEjmdAAIgEAAIAAAAMg4uAAAIwdAAIAAgcIQdAAMA4uAAAIAAgBIADAAQGQAAEekaQEakbgBmQQABmSkakbQkekbmQAAMg4xAACIAAgBQrJAAn4H2Qn4H6AALJQAALHH4H5QHpHqKuAPMA5LAAAIAAgBQD8AAC1C1QCzC0AAD/QAAEAizC0Qi1C0j8ABg");
	this.shape_1194.setTransform(-106.9,-33.2);

	this.shape_1195 = new cjs.Shape();
	this.shape_1195.graphics.f("#75614B").s().p("EAwMArNMh2pAAAIAAiKMB2pAAAIAAgBQFxABEFkGQEFkFAAlwQAAlxkFkGQkFkElxAAIAAABMg4hAAAIAAACIgCAAQpYAAmomqQmommAApYQAApaGomoQGomoJYAAIACAAIAAAEMA4vAAAIAAgBIADAAQEfAADNDLQDJDLAAEgQAAEfjIDKIgBAAQjNDKkfAAIgDAAMg4vAAAIwcAAIAAESIAAAcIAAETIQcAAMA4vAAAIAAgBQIOgBF0l0QFzlzAAoNQAAoOlzlyQl0l1oOABIAAAAMg4YAAAQtcgBpQJRQpQJQAANHQAANEJQJQQCqCrDAB6QAVAOAYANQHHERI3AAIAAACMA4hAAAIAAgDIABAAQCCAABcBdQBdBcAACCQAACChdBcQhcBciCAAIgBAAIAAABMh2pAAAIAAiKMB2pAAAIAAgCQBJAAAzgzQAzgyAAhJQAAhIgzgzQgzg0hJAAIAAAAMg4hAAAIAAAAQrSAAommdIglgbQhxhZhphoQp4p6AAt9QAAt/J4p5QJ4p5OFAAMA4pgAGQJKAAGeGeQGcGdAAJJQAAJJmcGdQmeGbpKAAIAAgEMhKgAAAQBUCRB/B/QF/F/IdAAIACAAIAAACMA4hAAAIAAgCQGrAAEtEtQEvEuAAGrQAAGqkvEuQktEumrABgA2z32Qk3E3g6GfIUPAAMA4vAAAIAAgBIADAAQDkAACmiiQCfihAAjlQAAjnigihQilijjkgBIgDAAIAAACMg4vAAAIAAgCIgCAAQodABl/F+g");
	this.shape_1195.setTransform(-86.3,-33.3);

	this.shape_1196 = new cjs.Shape();
	this.shape_1196.graphics.f("#404040").s().p("EhFWApCIAAkTMB2qAAAQD9AAC0i1QCzizAAkAQAAj/izi0Qi0i1j9AAIAAAAMg5KAAAQqugOnqnqQn3n5gBrHQABrKH3n5QH4n2LJAAIAAABMA4xgACQGRAAEdEbQEaEbAAGRQAAGRkaEbQkdEamRAAIgCAAIAAABMg4vAAAIwdAAIAAkSIQdAAMA4vAAAIADAAQEfAADNjKIAAAAQDJjLAAkeQAAkgjJjLQjNjLkfAAIgDAAIAAAAMg4vAAAIAAgDIgCAAQpYAAmoGnQmpGpAAJZQAAJZGpGmQGoGqJYAAIACAAIAAgCMA4hAAAIAAgBQFwAAEFEEQEGEGgBFxQABFwkGEFQkFEFlwAAIAAABgEhFWAkTIAAkSMB2qAAAIAAgBIAAAAQCDAABchcQBdhcgBiCQABiChdhcQhchdiDAAIAAAAIAAACMg4hAAAIAAgBQo4AAnGkRQgYgNgVgPQjAh5iqirQpQpRAAtEQAAtGJQpRQJQpQNcABMA4YAAAIAAgBQIOAAF0F1QFzFyAAIOQAAINlzFzQl0F0oOAAIAAABMg4vAAAIwdAAIAAkSIQdAAMA4vAAAIAAAAIADAAQGdAAElkjQEikjAAmcQAAmdkikjQklkjmdAAMg4yAABIAAgCQrUAAoAIAQoBIBAALVQAALSIBIBQGJGKIEBbQCJAZCUADMA5LAAAIAAgBQDwABCtCsQCrCsAADzQAAD0irCrQitCtjwABIAAAAg");
	this.shape_1196.setTransform(-93.4,-33.2);

	this.instance_1 = new lib.mc_redCar();
	this.instance_1.setTransform(-288.2,-426.7,1.319,1.324,90,0,0,18.8,9.6);

	this.instance_2 = new lib.Watchbg("synched",0);
	this.instance_2.setTransform(-49.1,-375.4,0.23,0.23);

	this.instance_3 = new lib.Watchbg("synched",0);
	this.instance_3.setTransform(-195.8,-375.4,0.23,0.23);

	this.shape_1197 = new cjs.Shape();
	this.shape_1197.graphics.f("#2A571B").s().p("AkaJGQgkgWgagYIkZgBQhQAAAAhQIAAwMQAAhQBQAAITjAFQBQAAAABQIAAQMQAABQhQAAIjUgBQgZAWgiAVQiEBQi7AAQi6AAiEhQg");
	this.shape_1197.setTransform(244,-386.7);

	this.shape_1198 = new cjs.Shape();
	this.shape_1198.graphics.f("#2A571B").s().p("AkaJGQgkgWgagYIkZgBQhQAAAAhQIAAwMQAAhQBQAAITkAFQBQAAAABQIAAQMQAABQhQAAIjVgBQgZAWghAVQiFBQi8AAQi5AAiEhQg");
	this.shape_1198.setTransform(-51.5,-386.7);

	this.shape_1199 = new cjs.Shape();
	this.shape_1199.graphics.f("#2A571B").s().p("AkbJGQgjgWgagYIkagBQhQAAAAhQIAAwMQAAhQBQAAITkAFQBQAAAABQIAAQMQAABQhQAAIjUgBQgZAWgiAVQiEBQi7AAQi6AAiFhQg");
	this.shape_1199.setTransform(-199.5,-386.7);

	this.shape_1200 = new cjs.Shape();
	this.shape_1200.graphics.f("#2A571B").s().p("AkaJGQgkgWgagYIkagBQhPAAAAhQIAAwMQAAhQBPAAITlAFQBQAAAABQIAAQMQAABQhQAAIjVgBQgZAWghAVQiFBQi8AAQi5AAiEhQg");
	this.shape_1200.setTransform(96,-386.7);

	this.instance_4 = new lib.Textur("synched",0);
	this.instance_4.setTransform(0,-0.3,1.542,1.542,0,0,0,395.3,314.3);
	this.instance_4.alpha = 0.301;

	this.shape_1201 = new cjs.Shape();
	this.shape_1201.graphics.f("#459541").s().p("EhblBNFMAAAiaJMC3LAAAMAAACaJg");
	this.shape_1201.setTransform(-6.4,0);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = this.shape_4.mask = this.shape_5.mask = this.shape_6.mask = this.shape_7.mask = this.shape_8.mask = this.shape_9.mask = this.shape_10.mask = this.shape_11.mask = this.shape_12.mask = this.shape_13.mask = this.shape_14.mask = this.shape_15.mask = this.shape_16.mask = this.shape_17.mask = this.shape_18.mask = this.shape_19.mask = this.shape_20.mask = this.shape_21.mask = this.shape_22.mask = this.shape_23.mask = this.shape_24.mask = this.shape_25.mask = this.shape_26.mask = this.shape_27.mask = this.shape_28.mask = this.shape_29.mask = this.shape_30.mask = this.shape_31.mask = this.shape_32.mask = this.shape_33.mask = this.shape_34.mask = this.shape_35.mask = this.shape_36.mask = this.shape_37.mask = this.shape_38.mask = this.shape_39.mask = this.shape_40.mask = this.shape_41.mask = this.shape_42.mask = this.shape_43.mask = this.shape_44.mask = this.shape_45.mask = this.shape_46.mask = this.shape_47.mask = this.shape_48.mask = this.shape_49.mask = this.shape_50.mask = this.shape_51.mask = this.shape_52.mask = this.shape_53.mask = this.shape_54.mask = this.shape_55.mask = this.shape_56.mask = this.shape_57.mask = this.shape_58.mask = this.shape_59.mask = this.shape_60.mask = this.shape_61.mask = this.shape_62.mask = this.shape_63.mask = this.shape_64.mask = this.shape_65.mask = this.shape_66.mask = this.shape_67.mask = this.shape_68.mask = this.shape_69.mask = this.shape_70.mask = this.shape_71.mask = this.shape_72.mask = this.shape_73.mask = this.shape_74.mask = this.shape_75.mask = this.shape_76.mask = this.shape_77.mask = this.shape_78.mask = this.shape_79.mask = this.shape_80.mask = this.shape_81.mask = this.shape_82.mask = this.shape_83.mask = this.shape_84.mask = this.shape_85.mask = this.shape_86.mask = this.shape_87.mask = this.shape_88.mask = this.shape_89.mask = this.shape_90.mask = this.shape_91.mask = this.shape_92.mask = this.shape_93.mask = this.shape_94.mask = this.shape_95.mask = this.shape_96.mask = this.shape_97.mask = this.shape_98.mask = this.shape_99.mask = this.shape_100.mask = this.shape_101.mask = this.shape_102.mask = this.shape_103.mask = this.shape_104.mask = this.shape_105.mask = this.shape_106.mask = this.shape_107.mask = this.shape_108.mask = this.shape_109.mask = this.shape_110.mask = this.shape_111.mask = this.shape_112.mask = this.shape_113.mask = this.shape_114.mask = this.shape_115.mask = this.shape_116.mask = this.shape_117.mask = this.shape_118.mask = this.shape_119.mask = this.shape_120.mask = this.shape_121.mask = this.shape_122.mask = this.shape_123.mask = this.shape_124.mask = this.shape_125.mask = this.shape_126.mask = this.shape_127.mask = this.shape_128.mask = this.shape_129.mask = this.shape_130.mask = this.shape_131.mask = this.shape_132.mask = this.shape_133.mask = this.shape_134.mask = this.shape_135.mask = this.shape_136.mask = this.shape_137.mask = this.shape_138.mask = this.shape_139.mask = this.shape_140.mask = this.shape_141.mask = this.shape_142.mask = this.shape_143.mask = this.shape_144.mask = this.shape_145.mask = this.shape_146.mask = this.shape_147.mask = this.shape_148.mask = this.shape_149.mask = this.shape_150.mask = this.shape_151.mask = this.shape_152.mask = this.shape_153.mask = this.shape_154.mask = this.shape_155.mask = this.shape_156.mask = this.shape_157.mask = this.shape_158.mask = this.shape_159.mask = this.shape_160.mask = this.shape_161.mask = this.shape_162.mask = this.shape_163.mask = this.shape_164.mask = this.shape_165.mask = this.shape_166.mask = this.shape_167.mask = this.shape_168.mask = this.shape_169.mask = this.shape_170.mask = this.shape_171.mask = this.shape_172.mask = this.shape_173.mask = this.shape_174.mask = this.shape_175.mask = this.shape_176.mask = this.shape_177.mask = this.shape_178.mask = this.shape_179.mask = this.shape_180.mask = this.shape_181.mask = this.shape_182.mask = this.shape_183.mask = this.shape_184.mask = this.shape_185.mask = this.shape_186.mask = this.shape_187.mask = this.shape_188.mask = this.shape_189.mask = this.shape_190.mask = this.shape_191.mask = this.shape_192.mask = this.shape_193.mask = this.shape_194.mask = this.shape_195.mask = this.shape_196.mask = this.shape_197.mask = this.shape_198.mask = this.shape_199.mask = this.shape_200.mask = this.shape_201.mask = this.shape_202.mask = this.shape_203.mask = this.shape_204.mask = this.shape_205.mask = this.shape_206.mask = this.shape_207.mask = this.shape_208.mask = this.shape_209.mask = this.shape_210.mask = this.shape_211.mask = this.shape_212.mask = this.shape_213.mask = this.shape_214.mask = this.shape_215.mask = this.shape_216.mask = this.shape_217.mask = this.shape_218.mask = this.shape_219.mask = this.shape_220.mask = this.shape_221.mask = this.shape_222.mask = this.shape_223.mask = this.shape_224.mask = this.shape_225.mask = this.shape_226.mask = this.shape_227.mask = this.shape_228.mask = this.shape_229.mask = this.shape_230.mask = this.shape_231.mask = this.shape_232.mask = this.shape_233.mask = this.shape_234.mask = this.shape_235.mask = this.shape_236.mask = this.shape_237.mask = this.shape_238.mask = this.shape_239.mask = this.shape_240.mask = this.shape_241.mask = this.shape_242.mask = this.shape_243.mask = this.shape_244.mask = this.shape_245.mask = this.shape_246.mask = this.shape_247.mask = this.shape_248.mask = this.shape_249.mask = this.shape_250.mask = this.shape_251.mask = this.shape_252.mask = this.shape_253.mask = this.shape_254.mask = this.shape_255.mask = this.shape_256.mask = this.shape_257.mask = this.shape_258.mask = this.shape_259.mask = this.shape_260.mask = this.shape_261.mask = this.shape_262.mask = this.shape_263.mask = this.shape_264.mask = this.shape_265.mask = this.shape_266.mask = this.shape_267.mask = this.shape_268.mask = this.shape_269.mask = this.shape_270.mask = this.shape_271.mask = this.shape_272.mask = this.shape_273.mask = this.shape_274.mask = this.shape_275.mask = this.shape_276.mask = this.shape_277.mask = this.shape_278.mask = this.shape_279.mask = this.shape_280.mask = this.shape_281.mask = this.shape_282.mask = this.shape_283.mask = this.shape_284.mask = this.shape_285.mask = this.shape_286.mask = this.shape_287.mask = this.shape_288.mask = this.shape_289.mask = this.shape_290.mask = this.shape_291.mask = this.shape_292.mask = this.shape_293.mask = this.shape_294.mask = this.shape_295.mask = this.shape_296.mask = this.shape_297.mask = this.shape_298.mask = this.shape_299.mask = this.shape_300.mask = this.shape_301.mask = this.shape_302.mask = this.shape_303.mask = this.shape_304.mask = this.shape_305.mask = this.shape_306.mask = this.shape_307.mask = this.shape_308.mask = this.shape_309.mask = this.shape_310.mask = this.shape_311.mask = this.shape_312.mask = this.shape_313.mask = this.shape_314.mask = this.shape_315.mask = this.shape_316.mask = this.shape_317.mask = this.shape_318.mask = this.shape_319.mask = this.shape_320.mask = this.shape_321.mask = this.shape_322.mask = this.shape_323.mask = this.shape_324.mask = this.shape_325.mask = this.shape_326.mask = this.shape_327.mask = this.shape_328.mask = this.shape_329.mask = this.shape_330.mask = this.shape_331.mask = this.shape_332.mask = this.shape_333.mask = this.shape_334.mask = this.shape_335.mask = this.shape_336.mask = this.shape_337.mask = this.shape_338.mask = this.shape_339.mask = this.shape_340.mask = this.shape_341.mask = this.shape_342.mask = this.shape_343.mask = this.shape_344.mask = this.shape_345.mask = this.shape_346.mask = this.shape_347.mask = this.shape_348.mask = this.shape_349.mask = this.shape_350.mask = this.shape_351.mask = this.shape_352.mask = this.shape_353.mask = this.shape_354.mask = this.shape_355.mask = this.shape_356.mask = this.shape_357.mask = this.shape_358.mask = this.shape_359.mask = this.shape_360.mask = this.shape_361.mask = this.shape_362.mask = this.shape_363.mask = this.shape_364.mask = this.shape_365.mask = this.shape_366.mask = this.shape_367.mask = this.shape_368.mask = this.shape_369.mask = this.shape_370.mask = this.shape_371.mask = this.shape_372.mask = this.shape_373.mask = this.shape_374.mask = this.shape_375.mask = this.shape_376.mask = this.shape_377.mask = this.shape_378.mask = this.shape_379.mask = this.shape_380.mask = this.shape_381.mask = this.shape_382.mask = this.shape_383.mask = this.shape_384.mask = this.shape_385.mask = this.shape_386.mask = this.shape_387.mask = this.shape_388.mask = this.shape_389.mask = this.shape_390.mask = this.shape_391.mask = this.shape_392.mask = this.shape_393.mask = this.shape_394.mask = this.shape_395.mask = this.shape_396.mask = this.shape_397.mask = this.shape_398.mask = this.shape_399.mask = this.shape_400.mask = this.shape_401.mask = this.shape_402.mask = this.shape_403.mask = this.shape_404.mask = this.shape_405.mask = this.shape_406.mask = this.shape_407.mask = this.shape_408.mask = this.shape_409.mask = this.shape_410.mask = this.shape_411.mask = this.shape_412.mask = this.shape_413.mask = this.shape_414.mask = this.shape_415.mask = this.shape_416.mask = this.shape_417.mask = this.shape_418.mask = this.shape_419.mask = this.shape_420.mask = this.shape_421.mask = this.shape_422.mask = this.shape_423.mask = this.shape_424.mask = this.shape_425.mask = this.shape_426.mask = this.shape_427.mask = this.shape_428.mask = this.shape_429.mask = this.shape_430.mask = this.shape_431.mask = this.shape_432.mask = this.shape_433.mask = this.shape_434.mask = this.shape_435.mask = this.shape_436.mask = this.shape_437.mask = this.shape_438.mask = this.shape_439.mask = this.shape_440.mask = this.shape_441.mask = this.shape_442.mask = this.shape_443.mask = this.shape_444.mask = this.shape_445.mask = this.shape_446.mask = this.shape_447.mask = this.shape_448.mask = this.shape_449.mask = this.shape_450.mask = this.shape_451.mask = this.shape_452.mask = this.shape_453.mask = this.shape_454.mask = this.shape_455.mask = this.shape_456.mask = this.shape_457.mask = this.shape_458.mask = this.shape_459.mask = this.shape_460.mask = this.shape_461.mask = this.shape_462.mask = this.shape_463.mask = this.shape_464.mask = this.shape_465.mask = this.shape_466.mask = this.shape_467.mask = this.shape_468.mask = this.shape_469.mask = this.shape_470.mask = this.shape_471.mask = this.shape_472.mask = this.shape_473.mask = this.shape_474.mask = this.shape_475.mask = this.shape_476.mask = this.shape_477.mask = this.shape_478.mask = this.shape_479.mask = this.shape_480.mask = this.shape_481.mask = this.shape_482.mask = this.shape_483.mask = this.shape_484.mask = this.shape_485.mask = this.shape_486.mask = this.shape_487.mask = this.shape_488.mask = this.shape_489.mask = this.shape_490.mask = this.shape_491.mask = this.shape_492.mask = this.shape_493.mask = this.shape_494.mask = this.shape_495.mask = this.shape_496.mask = this.shape_497.mask = this.shape_498.mask = this.shape_499.mask = this.shape_500.mask = this.shape_501.mask = this.shape_502.mask = this.shape_503.mask = this.shape_504.mask = this.shape_505.mask = this.shape_506.mask = this.shape_507.mask = this.shape_508.mask = this.shape_509.mask = this.shape_510.mask = this.shape_511.mask = this.shape_512.mask = this.shape_513.mask = this.shape_514.mask = this.shape_515.mask = this.shape_516.mask = this.shape_517.mask = this.shape_518.mask = this.shape_519.mask = this.shape_520.mask = this.shape_521.mask = this.shape_522.mask = this.shape_523.mask = this.shape_524.mask = this.shape_525.mask = this.shape_526.mask = this.shape_527.mask = this.shape_528.mask = this.shape_529.mask = this.shape_530.mask = this.shape_531.mask = this.shape_532.mask = this.shape_533.mask = this.shape_534.mask = this.shape_535.mask = this.shape_536.mask = this.shape_537.mask = this.shape_538.mask = this.shape_539.mask = this.shape_540.mask = this.shape_541.mask = this.shape_542.mask = this.shape_543.mask = this.shape_544.mask = this.shape_545.mask = this.shape_546.mask = this.shape_547.mask = this.shape_548.mask = this.shape_549.mask = this.shape_550.mask = this.shape_551.mask = this.shape_552.mask = this.shape_553.mask = this.shape_554.mask = this.shape_555.mask = this.shape_556.mask = this.shape_557.mask = this.shape_558.mask = this.shape_559.mask = this.shape_560.mask = this.shape_561.mask = this.shape_562.mask = this.shape_563.mask = this.shape_564.mask = this.shape_565.mask = this.shape_566.mask = this.shape_567.mask = this.shape_568.mask = this.shape_569.mask = this.shape_570.mask = this.shape_571.mask = this.shape_572.mask = this.shape_573.mask = this.shape_574.mask = this.shape_575.mask = this.shape_576.mask = this.shape_577.mask = this.shape_578.mask = this.shape_579.mask = this.shape_580.mask = this.shape_581.mask = this.shape_582.mask = this.shape_583.mask = this.shape_584.mask = this.shape_585.mask = this.shape_586.mask = this.shape_587.mask = this.shape_588.mask = this.shape_589.mask = this.shape_590.mask = this.shape_591.mask = this.shape_592.mask = this.shape_593.mask = this.shape_594.mask = this.shape_595.mask = this.shape_596.mask = this.shape_597.mask = this.shape_598.mask = this.shape_599.mask = this.shape_600.mask = this.shape_601.mask = this.shape_602.mask = this.shape_603.mask = this.shape_604.mask = this.shape_605.mask = this.shape_606.mask = this.shape_607.mask = this.shape_608.mask = this.shape_609.mask = this.shape_610.mask = this.shape_611.mask = this.shape_612.mask = this.shape_613.mask = this.shape_614.mask = this.shape_615.mask = this.shape_616.mask = this.shape_617.mask = this.shape_618.mask = this.shape_619.mask = this.shape_620.mask = this.shape_621.mask = this.shape_622.mask = this.shape_623.mask = this.shape_624.mask = this.shape_625.mask = this.shape_626.mask = this.shape_627.mask = this.shape_628.mask = this.shape_629.mask = this.shape_630.mask = this.shape_631.mask = this.shape_632.mask = this.shape_633.mask = this.shape_634.mask = this.shape_635.mask = this.shape_636.mask = this.shape_637.mask = this.shape_638.mask = this.shape_639.mask = this.shape_640.mask = this.shape_641.mask = this.shape_642.mask = this.shape_643.mask = this.shape_644.mask = this.shape_645.mask = this.shape_646.mask = this.shape_647.mask = this.shape_648.mask = this.shape_649.mask = this.shape_650.mask = this.shape_651.mask = this.shape_652.mask = this.shape_653.mask = this.shape_654.mask = this.shape_655.mask = this.shape_656.mask = this.shape_657.mask = this.shape_658.mask = this.shape_659.mask = this.shape_660.mask = this.shape_661.mask = this.shape_662.mask = this.shape_663.mask = this.shape_664.mask = this.shape_665.mask = this.shape_666.mask = this.shape_667.mask = this.shape_668.mask = this.shape_669.mask = this.shape_670.mask = this.shape_671.mask = this.shape_672.mask = this.shape_673.mask = this.shape_674.mask = this.shape_675.mask = this.shape_676.mask = this.shape_677.mask = this.shape_678.mask = this.shape_679.mask = this.shape_680.mask = this.shape_681.mask = this.shape_682.mask = this.shape_683.mask = this.shape_684.mask = this.shape_685.mask = this.shape_686.mask = this.shape_687.mask = this.shape_688.mask = this.shape_689.mask = this.shape_690.mask = this.shape_691.mask = this.shape_692.mask = this.shape_693.mask = this.shape_694.mask = this.shape_695.mask = this.shape_696.mask = this.shape_697.mask = this.shape_698.mask = this.shape_699.mask = this.shape_700.mask = this.shape_701.mask = this.shape_702.mask = this.shape_703.mask = this.shape_704.mask = this.shape_705.mask = this.shape_706.mask = this.shape_707.mask = this.shape_708.mask = this.shape_709.mask = this.shape_710.mask = this.shape_711.mask = this.shape_712.mask = this.shape_713.mask = this.shape_714.mask = this.shape_715.mask = this.shape_716.mask = this.shape_717.mask = this.shape_718.mask = this.shape_719.mask = this.shape_720.mask = this.shape_721.mask = this.shape_722.mask = this.shape_723.mask = this.shape_724.mask = this.shape_725.mask = this.shape_726.mask = this.shape_727.mask = this.shape_728.mask = this.shape_729.mask = this.shape_730.mask = this.shape_731.mask = this.shape_732.mask = this.shape_733.mask = this.shape_734.mask = this.shape_735.mask = this.shape_736.mask = this.shape_737.mask = this.shape_738.mask = this.shape_739.mask = this.shape_740.mask = this.shape_741.mask = this.shape_742.mask = this.shape_743.mask = this.shape_744.mask = this.shape_745.mask = this.shape_746.mask = this.shape_747.mask = this.shape_748.mask = this.shape_749.mask = this.shape_750.mask = this.shape_751.mask = this.shape_752.mask = this.shape_753.mask = this.shape_754.mask = this.shape_755.mask = this.shape_756.mask = this.shape_757.mask = this.shape_758.mask = this.shape_759.mask = this.shape_760.mask = this.shape_761.mask = this.shape_762.mask = this.shape_763.mask = this.shape_764.mask = this.shape_765.mask = this.shape_766.mask = this.shape_767.mask = this.shape_768.mask = this.shape_769.mask = this.shape_770.mask = this.shape_771.mask = this.shape_772.mask = this.shape_773.mask = this.shape_774.mask = this.shape_775.mask = this.shape_776.mask = this.shape_777.mask = this.shape_778.mask = this.shape_779.mask = this.shape_780.mask = this.shape_781.mask = this.shape_782.mask = this.shape_783.mask = this.shape_784.mask = this.shape_785.mask = this.shape_786.mask = this.shape_787.mask = this.shape_788.mask = this.shape_789.mask = this.shape_790.mask = this.shape_791.mask = this.shape_792.mask = this.shape_793.mask = this.shape_794.mask = this.shape_795.mask = this.shape_796.mask = this.shape_797.mask = this.shape_798.mask = this.shape_799.mask = this.shape_800.mask = this.shape_801.mask = this.shape_802.mask = this.shape_803.mask = this.instance.mask = this.shape_804.mask = this.shape_805.mask = this.shape_806.mask = this.shape_807.mask = this.shape_808.mask = this.shape_809.mask = this.shape_810.mask = this.shape_811.mask = this.shape_812.mask = this.shape_813.mask = this.shape_814.mask = this.shape_815.mask = this.shape_816.mask = this.shape_817.mask = this.shape_818.mask = this.shape_819.mask = this.shape_820.mask = this.shape_821.mask = this.shape_822.mask = this.shape_823.mask = this.shape_824.mask = this.shape_825.mask = this.shape_826.mask = this.shape_827.mask = this.shape_828.mask = this.shape_829.mask = this.shape_830.mask = this.shape_831.mask = this.shape_832.mask = this.shape_833.mask = this.shape_834.mask = this.shape_835.mask = this.shape_836.mask = this.shape_837.mask = this.shape_838.mask = this.shape_839.mask = this.shape_840.mask = this.shape_841.mask = this.shape_842.mask = this.shape_843.mask = this.shape_844.mask = this.shape_845.mask = this.shape_846.mask = this.shape_847.mask = this.shape_848.mask = this.shape_849.mask = this.shape_850.mask = this.shape_851.mask = this.shape_852.mask = this.shape_853.mask = this.shape_854.mask = this.shape_855.mask = this.shape_856.mask = this.shape_857.mask = this.shape_858.mask = this.shape_859.mask = this.shape_860.mask = this.shape_861.mask = this.shape_862.mask = this.shape_863.mask = this.shape_864.mask = this.shape_865.mask = this.shape_866.mask = this.shape_867.mask = this.shape_868.mask = this.shape_869.mask = this.shape_870.mask = this.shape_871.mask = this.shape_872.mask = this.shape_873.mask = this.shape_874.mask = this.shape_875.mask = this.shape_876.mask = this.shape_877.mask = this.shape_878.mask = this.shape_879.mask = this.shape_880.mask = this.shape_881.mask = this.shape_882.mask = this.shape_883.mask = this.shape_884.mask = this.shape_885.mask = this.shape_886.mask = this.shape_887.mask = this.shape_888.mask = this.shape_889.mask = this.shape_890.mask = this.shape_891.mask = this.shape_892.mask = this.shape_893.mask = this.shape_894.mask = this.shape_895.mask = this.shape_896.mask = this.shape_897.mask = this.shape_898.mask = this.shape_899.mask = this.shape_900.mask = this.shape_901.mask = this.shape_902.mask = this.shape_903.mask = this.shape_904.mask = this.shape_905.mask = this.shape_906.mask = this.shape_907.mask = this.shape_908.mask = this.shape_909.mask = this.shape_910.mask = this.shape_911.mask = this.shape_912.mask = this.shape_913.mask = this.shape_914.mask = this.shape_915.mask = this.shape_916.mask = this.shape_917.mask = this.shape_918.mask = this.shape_919.mask = this.shape_920.mask = this.shape_921.mask = this.shape_922.mask = this.shape_923.mask = this.shape_924.mask = this.shape_925.mask = this.shape_926.mask = this.shape_927.mask = this.shape_928.mask = this.shape_929.mask = this.shape_930.mask = this.shape_931.mask = this.shape_932.mask = this.shape_933.mask = this.shape_934.mask = this.shape_935.mask = this.shape_936.mask = this.shape_937.mask = this.shape_938.mask = this.shape_939.mask = this.shape_940.mask = this.shape_941.mask = this.shape_942.mask = this.shape_943.mask = this.shape_944.mask = this.shape_945.mask = this.shape_946.mask = this.shape_947.mask = this.shape_948.mask = this.shape_949.mask = this.shape_950.mask = this.shape_951.mask = this.shape_952.mask = this.shape_953.mask = this.shape_954.mask = this.shape_955.mask = this.shape_956.mask = this.shape_957.mask = this.shape_958.mask = this.shape_959.mask = this.shape_960.mask = this.shape_961.mask = this.shape_962.mask = this.shape_963.mask = this.shape_964.mask = this.shape_965.mask = this.shape_966.mask = this.shape_967.mask = this.shape_968.mask = this.shape_969.mask = this.shape_970.mask = this.shape_971.mask = this.shape_972.mask = this.shape_973.mask = this.shape_974.mask = this.shape_975.mask = this.shape_976.mask = this.shape_977.mask = this.shape_978.mask = this.shape_979.mask = this.shape_980.mask = this.shape_981.mask = this.shape_982.mask = this.shape_983.mask = this.shape_984.mask = this.shape_985.mask = this.shape_986.mask = this.shape_987.mask = this.shape_988.mask = this.shape_989.mask = this.shape_990.mask = this.shape_991.mask = this.shape_992.mask = this.shape_993.mask = this.shape_994.mask = this.shape_995.mask = this.shape_996.mask = this.shape_997.mask = this.shape_998.mask = this.shape_999.mask = this.shape_1000.mask = this.shape_1001.mask = this.shape_1002.mask = this.shape_1003.mask = this.shape_1004.mask = this.shape_1005.mask = this.shape_1006.mask = this.shape_1007.mask = this.shape_1008.mask = this.shape_1009.mask = this.shape_1010.mask = this.shape_1011.mask = this.shape_1012.mask = this.shape_1013.mask = this.shape_1014.mask = this.shape_1015.mask = this.shape_1016.mask = this.shape_1017.mask = this.shape_1018.mask = this.shape_1019.mask = this.shape_1020.mask = this.shape_1021.mask = this.shape_1022.mask = this.shape_1023.mask = this.shape_1024.mask = this.shape_1025.mask = this.shape_1026.mask = this.shape_1027.mask = this.shape_1028.mask = this.shape_1029.mask = this.shape_1030.mask = this.shape_1031.mask = this.shape_1032.mask = this.shape_1033.mask = this.shape_1034.mask = this.shape_1035.mask = this.shape_1036.mask = this.shape_1037.mask = this.shape_1038.mask = this.shape_1039.mask = this.shape_1040.mask = this.shape_1041.mask = this.shape_1042.mask = this.shape_1043.mask = this.shape_1044.mask = this.shape_1045.mask = this.shape_1046.mask = this.shape_1047.mask = this.shape_1048.mask = this.shape_1049.mask = this.shape_1050.mask = this.shape_1051.mask = this.shape_1052.mask = this.shape_1053.mask = this.shape_1054.mask = this.shape_1055.mask = this.shape_1056.mask = this.shape_1057.mask = this.shape_1058.mask = this.shape_1059.mask = this.shape_1060.mask = this.shape_1061.mask = this.shape_1062.mask = this.shape_1063.mask = this.shape_1064.mask = this.shape_1065.mask = this.shape_1066.mask = this.shape_1067.mask = this.shape_1068.mask = this.shape_1069.mask = this.shape_1070.mask = this.shape_1071.mask = this.shape_1072.mask = this.shape_1073.mask = this.shape_1074.mask = this.shape_1075.mask = this.shape_1076.mask = this.shape_1077.mask = this.shape_1078.mask = this.shape_1079.mask = this.shape_1080.mask = this.shape_1081.mask = this.shape_1082.mask = this.shape_1083.mask = this.shape_1084.mask = this.shape_1085.mask = this.shape_1086.mask = this.shape_1087.mask = this.shape_1088.mask = this.shape_1089.mask = this.shape_1090.mask = this.shape_1091.mask = this.shape_1092.mask = this.shape_1093.mask = this.shape_1094.mask = this.shape_1095.mask = this.shape_1096.mask = this.shape_1097.mask = this.shape_1098.mask = this.shape_1099.mask = this.shape_1100.mask = this.shape_1101.mask = this.shape_1102.mask = this.shape_1103.mask = this.shape_1104.mask = this.shape_1105.mask = this.shape_1106.mask = this.shape_1107.mask = this.shape_1108.mask = this.shape_1109.mask = this.shape_1110.mask = this.shape_1111.mask = this.shape_1112.mask = this.shape_1113.mask = this.shape_1114.mask = this.shape_1115.mask = this.shape_1116.mask = this.shape_1117.mask = this.shape_1118.mask = this.shape_1119.mask = this.shape_1120.mask = this.shape_1121.mask = this.shape_1122.mask = this.shape_1123.mask = this.shape_1124.mask = this.shape_1125.mask = this.shape_1126.mask = this.shape_1127.mask = this.shape_1128.mask = this.shape_1129.mask = this.shape_1130.mask = this.shape_1131.mask = this.shape_1132.mask = this.shape_1133.mask = this.shape_1134.mask = this.shape_1135.mask = this.shape_1136.mask = this.shape_1137.mask = this.shape_1138.mask = this.shape_1139.mask = this.shape_1140.mask = this.shape_1141.mask = this.shape_1142.mask = this.shape_1143.mask = this.shape_1144.mask = this.shape_1145.mask = this.shape_1146.mask = this.shape_1147.mask = this.shape_1148.mask = this.shape_1149.mask = this.shape_1150.mask = this.shape_1151.mask = this.shape_1152.mask = this.shape_1153.mask = this.shape_1154.mask = this.shape_1155.mask = this.shape_1156.mask = this.shape_1157.mask = this.shape_1158.mask = this.shape_1159.mask = this.shape_1160.mask = this.shape_1161.mask = this.shape_1162.mask = this.shape_1163.mask = this.shape_1164.mask = this.shape_1165.mask = this.shape_1166.mask = this.shape_1167.mask = this.shape_1168.mask = this.shape_1169.mask = this.shape_1170.mask = this.shape_1171.mask = this.shape_1172.mask = this.shape_1173.mask = this.shape_1174.mask = this.shape_1175.mask = this.shape_1176.mask = this.shape_1177.mask = this.shape_1178.mask = this.shape_1179.mask = this.shape_1180.mask = this.shape_1181.mask = this.shape_1182.mask = this.shape_1183.mask = this.shape_1184.mask = this.shape_1185.mask = this.shape_1186.mask = this.shape_1187.mask = this.shape_1188.mask = this.shape_1189.mask = this.shape_1190.mask = this.shape_1191.mask = this.shape_1192.mask = this.shape_1193.mask = this.shape_1194.mask = this.shape_1195.mask = this.shape_1196.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.shape_1197.mask = this.shape_1198.mask = this.shape_1199.mask = this.shape_1200.mask = this.instance_4.mask = this.shape_1201.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1201},{t:this.instance_4},{t:this.shape_1200},{t:this.shape_1199},{t:this.shape_1198},{t:this.shape_1197},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.shape_1196},{t:this.shape_1195},{t:this.shape_1194},{t:this.shape_1193},{t:this.shape_1192},{t:this.shape_1191},{t:this.shape_1190},{t:this.shape_1189},{t:this.shape_1188},{t:this.shape_1187},{t:this.shape_1186},{t:this.shape_1185},{t:this.shape_1184},{t:this.shape_1183},{t:this.shape_1182},{t:this.shape_1181},{t:this.shape_1180},{t:this.shape_1179},{t:this.shape_1178},{t:this.shape_1177},{t:this.shape_1176},{t:this.shape_1175},{t:this.shape_1174},{t:this.shape_1173},{t:this.shape_1172},{t:this.shape_1171},{t:this.shape_1170},{t:this.shape_1169},{t:this.shape_1168},{t:this.shape_1167},{t:this.shape_1166},{t:this.shape_1165},{t:this.shape_1164},{t:this.shape_1163},{t:this.shape_1162},{t:this.shape_1161},{t:this.shape_1160},{t:this.shape_1159},{t:this.shape_1158},{t:this.shape_1157},{t:this.shape_1156},{t:this.shape_1155},{t:this.shape_1154},{t:this.shape_1153},{t:this.shape_1152},{t:this.shape_1151},{t:this.shape_1150},{t:this.shape_1149},{t:this.shape_1148},{t:this.shape_1147},{t:this.shape_1146},{t:this.shape_1145},{t:this.shape_1144},{t:this.shape_1143},{t:this.shape_1142},{t:this.shape_1141},{t:this.shape_1140},{t:this.shape_1139},{t:this.shape_1138},{t:this.shape_1137},{t:this.shape_1136},{t:this.shape_1135},{t:this.shape_1134},{t:this.shape_1133},{t:this.shape_1132},{t:this.shape_1131},{t:this.shape_1130},{t:this.shape_1129},{t:this.shape_1128},{t:this.shape_1127},{t:this.shape_1126},{t:this.shape_1125},{t:this.shape_1124},{t:this.shape_1123},{t:this.shape_1122},{t:this.shape_1121},{t:this.shape_1120},{t:this.shape_1119},{t:this.shape_1118},{t:this.shape_1117},{t:this.shape_1116},{t:this.shape_1115},{t:this.shape_1114},{t:this.shape_1113},{t:this.shape_1112},{t:this.shape_1111},{t:this.shape_1110},{t:this.shape_1109},{t:this.shape_1108},{t:this.shape_1107},{t:this.shape_1106},{t:this.shape_1105},{t:this.shape_1104},{t:this.shape_1103},{t:this.shape_1102},{t:this.shape_1101},{t:this.shape_1100},{t:this.shape_1099},{t:this.shape_1098},{t:this.shape_1097},{t:this.shape_1096},{t:this.shape_1095},{t:this.shape_1094},{t:this.shape_1093},{t:this.shape_1092},{t:this.shape_1091},{t:this.shape_1090},{t:this.shape_1089},{t:this.shape_1088},{t:this.shape_1087},{t:this.shape_1086},{t:this.shape_1085},{t:this.shape_1084},{t:this.shape_1083},{t:this.shape_1082},{t:this.shape_1081},{t:this.shape_1080},{t:this.shape_1079},{t:this.shape_1078},{t:this.shape_1077},{t:this.shape_1076},{t:this.shape_1075},{t:this.shape_1074},{t:this.shape_1073},{t:this.shape_1072},{t:this.shape_1071},{t:this.shape_1070},{t:this.shape_1069},{t:this.shape_1068},{t:this.shape_1067},{t:this.shape_1066},{t:this.shape_1065},{t:this.shape_1064},{t:this.shape_1063},{t:this.shape_1062},{t:this.shape_1061},{t:this.shape_1060},{t:this.shape_1059},{t:this.shape_1058},{t:this.shape_1057},{t:this.shape_1056},{t:this.shape_1055},{t:this.shape_1054},{t:this.shape_1053},{t:this.shape_1052},{t:this.shape_1051},{t:this.shape_1050},{t:this.shape_1049},{t:this.shape_1048},{t:this.shape_1047},{t:this.shape_1046},{t:this.shape_1045},{t:this.shape_1044},{t:this.shape_1043},{t:this.shape_1042},{t:this.shape_1041},{t:this.shape_1040},{t:this.shape_1039},{t:this.shape_1038},{t:this.shape_1037},{t:this.shape_1036},{t:this.shape_1035},{t:this.shape_1034},{t:this.shape_1033},{t:this.shape_1032},{t:this.shape_1031},{t:this.shape_1030},{t:this.shape_1029},{t:this.shape_1028},{t:this.shape_1027},{t:this.shape_1026},{t:this.shape_1025},{t:this.shape_1024},{t:this.shape_1023},{t:this.shape_1022},{t:this.shape_1021},{t:this.shape_1020},{t:this.shape_1019},{t:this.shape_1018},{t:this.shape_1017},{t:this.shape_1016},{t:this.shape_1015},{t:this.shape_1014},{t:this.shape_1013},{t:this.shape_1012},{t:this.shape_1011},{t:this.shape_1010},{t:this.shape_1009},{t:this.shape_1008},{t:this.shape_1007},{t:this.shape_1006},{t:this.shape_1005},{t:this.shape_1004},{t:this.shape_1003},{t:this.shape_1002},{t:this.shape_1001},{t:this.shape_1000},{t:this.shape_999},{t:this.shape_998},{t:this.shape_997},{t:this.shape_996},{t:this.shape_995},{t:this.shape_994},{t:this.shape_993},{t:this.shape_992},{t:this.shape_991},{t:this.shape_990},{t:this.shape_989},{t:this.shape_988},{t:this.shape_987},{t:this.shape_986},{t:this.shape_985},{t:this.shape_984},{t:this.shape_983},{t:this.shape_982},{t:this.shape_981},{t:this.shape_980},{t:this.shape_979},{t:this.shape_978},{t:this.shape_977},{t:this.shape_976},{t:this.shape_975},{t:this.shape_974},{t:this.shape_973},{t:this.shape_972},{t:this.shape_971},{t:this.shape_970},{t:this.shape_969},{t:this.shape_968},{t:this.shape_967},{t:this.shape_966},{t:this.shape_965},{t:this.shape_964},{t:this.shape_963},{t:this.shape_962},{t:this.shape_961},{t:this.shape_960},{t:this.shape_959},{t:this.shape_958},{t:this.shape_957},{t:this.shape_956},{t:this.shape_955},{t:this.shape_954},{t:this.shape_953},{t:this.shape_952},{t:this.shape_951},{t:this.shape_950},{t:this.shape_949},{t:this.shape_948},{t:this.shape_947},{t:this.shape_946},{t:this.shape_945},{t:this.shape_944},{t:this.shape_943},{t:this.shape_942},{t:this.shape_941},{t:this.shape_940},{t:this.shape_939},{t:this.shape_938},{t:this.shape_937},{t:this.shape_936},{t:this.shape_935},{t:this.shape_934},{t:this.shape_933},{t:this.shape_932},{t:this.shape_931},{t:this.shape_930},{t:this.shape_929},{t:this.shape_928},{t:this.shape_927},{t:this.shape_926},{t:this.shape_925},{t:this.shape_924},{t:this.shape_923},{t:this.shape_922},{t:this.shape_921},{t:this.shape_920},{t:this.shape_919},{t:this.shape_918},{t:this.shape_917},{t:this.shape_916},{t:this.shape_915},{t:this.shape_914},{t:this.shape_913},{t:this.shape_912},{t:this.shape_911},{t:this.shape_910},{t:this.shape_909},{t:this.shape_908},{t:this.shape_907},{t:this.shape_906},{t:this.shape_905},{t:this.shape_904},{t:this.shape_903},{t:this.shape_902},{t:this.shape_901},{t:this.shape_900},{t:this.shape_899},{t:this.shape_898},{t:this.shape_897},{t:this.shape_896},{t:this.shape_895},{t:this.shape_894},{t:this.shape_893},{t:this.shape_892},{t:this.shape_891},{t:this.shape_890},{t:this.shape_889},{t:this.shape_888},{t:this.shape_887},{t:this.shape_886},{t:this.shape_885},{t:this.shape_884},{t:this.shape_883},{t:this.shape_882},{t:this.shape_881},{t:this.shape_880},{t:this.shape_879},{t:this.shape_878},{t:this.shape_877},{t:this.shape_876},{t:this.shape_875},{t:this.shape_874},{t:this.shape_873},{t:this.shape_872},{t:this.shape_871},{t:this.shape_870},{t:this.shape_869},{t:this.shape_868},{t:this.shape_867},{t:this.shape_866},{t:this.shape_865},{t:this.shape_864},{t:this.shape_863},{t:this.shape_862},{t:this.shape_861},{t:this.shape_860},{t:this.shape_859},{t:this.shape_858},{t:this.shape_857},{t:this.shape_856},{t:this.shape_855},{t:this.shape_854},{t:this.shape_853},{t:this.shape_852},{t:this.shape_851},{t:this.shape_850},{t:this.shape_849},{t:this.shape_848},{t:this.shape_847},{t:this.shape_846},{t:this.shape_845},{t:this.shape_844},{t:this.shape_843},{t:this.shape_842},{t:this.shape_841},{t:this.shape_840},{t:this.shape_839},{t:this.shape_838},{t:this.shape_837},{t:this.shape_836},{t:this.shape_835},{t:this.shape_834},{t:this.shape_833},{t:this.shape_832},{t:this.shape_831},{t:this.shape_830},{t:this.shape_829},{t:this.shape_828},{t:this.shape_827},{t:this.shape_826},{t:this.shape_825},{t:this.shape_824},{t:this.shape_823},{t:this.shape_822},{t:this.shape_821},{t:this.shape_820},{t:this.shape_819},{t:this.shape_818},{t:this.shape_817},{t:this.shape_816},{t:this.shape_815},{t:this.shape_814},{t:this.shape_813},{t:this.shape_812},{t:this.shape_811},{t:this.shape_810},{t:this.shape_809},{t:this.shape_808},{t:this.shape_807},{t:this.shape_806},{t:this.shape_805},{t:this.shape_804},{t:this.instance},{t:this.shape_803},{t:this.shape_802},{t:this.shape_801},{t:this.shape_800},{t:this.shape_799},{t:this.shape_798},{t:this.shape_797},{t:this.shape_796},{t:this.shape_795},{t:this.shape_794},{t:this.shape_793},{t:this.shape_792},{t:this.shape_791},{t:this.shape_790},{t:this.shape_789},{t:this.shape_788},{t:this.shape_787},{t:this.shape_786},{t:this.shape_785},{t:this.shape_784},{t:this.shape_783},{t:this.shape_782},{t:this.shape_781},{t:this.shape_780},{t:this.shape_779},{t:this.shape_778},{t:this.shape_777},{t:this.shape_776},{t:this.shape_775},{t:this.shape_774},{t:this.shape_773},{t:this.shape_772},{t:this.shape_771},{t:this.shape_770},{t:this.shape_769},{t:this.shape_768},{t:this.shape_767},{t:this.shape_766},{t:this.shape_765},{t:this.shape_764},{t:this.shape_763},{t:this.shape_762},{t:this.shape_761},{t:this.shape_760},{t:this.shape_759},{t:this.shape_758},{t:this.shape_757},{t:this.shape_756},{t:this.shape_755},{t:this.shape_754},{t:this.shape_753},{t:this.shape_752},{t:this.shape_751},{t:this.shape_750},{t:this.shape_749},{t:this.shape_748},{t:this.shape_747},{t:this.shape_746},{t:this.shape_745},{t:this.shape_744},{t:this.shape_743},{t:this.shape_742},{t:this.shape_741},{t:this.shape_740},{t:this.shape_739},{t:this.shape_738},{t:this.shape_737},{t:this.shape_736},{t:this.shape_735},{t:this.shape_734},{t:this.shape_733},{t:this.shape_732},{t:this.shape_731},{t:this.shape_730},{t:this.shape_729},{t:this.shape_728},{t:this.shape_727},{t:this.shape_726},{t:this.shape_725},{t:this.shape_724},{t:this.shape_723},{t:this.shape_722},{t:this.shape_721},{t:this.shape_720},{t:this.shape_719},{t:this.shape_718},{t:this.shape_717},{t:this.shape_716},{t:this.shape_715},{t:this.shape_714},{t:this.shape_713},{t:this.shape_712},{t:this.shape_711},{t:this.shape_710},{t:this.shape_709},{t:this.shape_708},{t:this.shape_707},{t:this.shape_706},{t:this.shape_705},{t:this.shape_704},{t:this.shape_703},{t:this.shape_702},{t:this.shape_701},{t:this.shape_700},{t:this.shape_699},{t:this.shape_698},{t:this.shape_697},{t:this.shape_696},{t:this.shape_695},{t:this.shape_694},{t:this.shape_693},{t:this.shape_692},{t:this.shape_691},{t:this.shape_690},{t:this.shape_689},{t:this.shape_688},{t:this.shape_687},{t:this.shape_686},{t:this.shape_685},{t:this.shape_684},{t:this.shape_683},{t:this.shape_682},{t:this.shape_681},{t:this.shape_680},{t:this.shape_679},{t:this.shape_678},{t:this.shape_677},{t:this.shape_676},{t:this.shape_675},{t:this.shape_674},{t:this.shape_673},{t:this.shape_672},{t:this.shape_671},{t:this.shape_670},{t:this.shape_669},{t:this.shape_668},{t:this.shape_667},{t:this.shape_666},{t:this.shape_665},{t:this.shape_664},{t:this.shape_663},{t:this.shape_662},{t:this.shape_661},{t:this.shape_660},{t:this.shape_659},{t:this.shape_658},{t:this.shape_657},{t:this.shape_656},{t:this.shape_655},{t:this.shape_654},{t:this.shape_653},{t:this.shape_652},{t:this.shape_651},{t:this.shape_650},{t:this.shape_649},{t:this.shape_648},{t:this.shape_647},{t:this.shape_646},{t:this.shape_645},{t:this.shape_644},{t:this.shape_643},{t:this.shape_642},{t:this.shape_641},{t:this.shape_640},{t:this.shape_639},{t:this.shape_638},{t:this.shape_637},{t:this.shape_636},{t:this.shape_635},{t:this.shape_634},{t:this.shape_633},{t:this.shape_632},{t:this.shape_631},{t:this.shape_630},{t:this.shape_629},{t:this.shape_628},{t:this.shape_627},{t:this.shape_626},{t:this.shape_625},{t:this.shape_624},{t:this.shape_623},{t:this.shape_622},{t:this.shape_621},{t:this.shape_620},{t:this.shape_619},{t:this.shape_618},{t:this.shape_617},{t:this.shape_616},{t:this.shape_615},{t:this.shape_614},{t:this.shape_613},{t:this.shape_612},{t:this.shape_611},{t:this.shape_610},{t:this.shape_609},{t:this.shape_608},{t:this.shape_607},{t:this.shape_606},{t:this.shape_605},{t:this.shape_604},{t:this.shape_603},{t:this.shape_602},{t:this.shape_601},{t:this.shape_600},{t:this.shape_599},{t:this.shape_598},{t:this.shape_597},{t:this.shape_596},{t:this.shape_595},{t:this.shape_594},{t:this.shape_593},{t:this.shape_592},{t:this.shape_591},{t:this.shape_590},{t:this.shape_589},{t:this.shape_588},{t:this.shape_587},{t:this.shape_586},{t:this.shape_585},{t:this.shape_584},{t:this.shape_583},{t:this.shape_582},{t:this.shape_581},{t:this.shape_580},{t:this.shape_579},{t:this.shape_578},{t:this.shape_577},{t:this.shape_576},{t:this.shape_575},{t:this.shape_574},{t:this.shape_573},{t:this.shape_572},{t:this.shape_571},{t:this.shape_570},{t:this.shape_569},{t:this.shape_568},{t:this.shape_567},{t:this.shape_566},{t:this.shape_565},{t:this.shape_564},{t:this.shape_563},{t:this.shape_562},{t:this.shape_561},{t:this.shape_560},{t:this.shape_559},{t:this.shape_558},{t:this.shape_557},{t:this.shape_556},{t:this.shape_555},{t:this.shape_554},{t:this.shape_553},{t:this.shape_552},{t:this.shape_551},{t:this.shape_550},{t:this.shape_549},{t:this.shape_548},{t:this.shape_547},{t:this.shape_546},{t:this.shape_545},{t:this.shape_544},{t:this.shape_543},{t:this.shape_542},{t:this.shape_541},{t:this.shape_540},{t:this.shape_539},{t:this.shape_538},{t:this.shape_537},{t:this.shape_536},{t:this.shape_535},{t:this.shape_534},{t:this.shape_533},{t:this.shape_532},{t:this.shape_531},{t:this.shape_530},{t:this.shape_529},{t:this.shape_528},{t:this.shape_527},{t:this.shape_526},{t:this.shape_525},{t:this.shape_524},{t:this.shape_523},{t:this.shape_522},{t:this.shape_521},{t:this.shape_520},{t:this.shape_519},{t:this.shape_518},{t:this.shape_517},{t:this.shape_516},{t:this.shape_515},{t:this.shape_514},{t:this.shape_513},{t:this.shape_512},{t:this.shape_511},{t:this.shape_510},{t:this.shape_509},{t:this.shape_508},{t:this.shape_507},{t:this.shape_506},{t:this.shape_505},{t:this.shape_504},{t:this.shape_503},{t:this.shape_502},{t:this.shape_501},{t:this.shape_500},{t:this.shape_499},{t:this.shape_498},{t:this.shape_497},{t:this.shape_496},{t:this.shape_495},{t:this.shape_494},{t:this.shape_493},{t:this.shape_492},{t:this.shape_491},{t:this.shape_490},{t:this.shape_489},{t:this.shape_488},{t:this.shape_487},{t:this.shape_486},{t:this.shape_485},{t:this.shape_484},{t:this.shape_483},{t:this.shape_482},{t:this.shape_481},{t:this.shape_480},{t:this.shape_479},{t:this.shape_478},{t:this.shape_477},{t:this.shape_476},{t:this.shape_475},{t:this.shape_474},{t:this.shape_473},{t:this.shape_472},{t:this.shape_471},{t:this.shape_470},{t:this.shape_469},{t:this.shape_468},{t:this.shape_467},{t:this.shape_466},{t:this.shape_465},{t:this.shape_464},{t:this.shape_463},{t:this.shape_462},{t:this.shape_461},{t:this.shape_460},{t:this.shape_459},{t:this.shape_458},{t:this.shape_457},{t:this.shape_456},{t:this.shape_455},{t:this.shape_454},{t:this.shape_453},{t:this.shape_452},{t:this.shape_451},{t:this.shape_450},{t:this.shape_449},{t:this.shape_448},{t:this.shape_447},{t:this.shape_446},{t:this.shape_445},{t:this.shape_444},{t:this.shape_443},{t:this.shape_442},{t:this.shape_441},{t:this.shape_440},{t:this.shape_439},{t:this.shape_438},{t:this.shape_437},{t:this.shape_436},{t:this.shape_435},{t:this.shape_434},{t:this.shape_433},{t:this.shape_432},{t:this.shape_431},{t:this.shape_430},{t:this.shape_429},{t:this.shape_428},{t:this.shape_427},{t:this.shape_426},{t:this.shape_425},{t:this.shape_424},{t:this.shape_423},{t:this.shape_422},{t:this.shape_421},{t:this.shape_420},{t:this.shape_419},{t:this.shape_418},{t:this.shape_417},{t:this.shape_416},{t:this.shape_415},{t:this.shape_414},{t:this.shape_413},{t:this.shape_412},{t:this.shape_411},{t:this.shape_410},{t:this.shape_409},{t:this.shape_408},{t:this.shape_407},{t:this.shape_406},{t:this.shape_405},{t:this.shape_404},{t:this.shape_403},{t:this.shape_402},{t:this.shape_401},{t:this.shape_400},{t:this.shape_399},{t:this.shape_398},{t:this.shape_397},{t:this.shape_396},{t:this.shape_395},{t:this.shape_394},{t:this.shape_393},{t:this.shape_392},{t:this.shape_391},{t:this.shape_390},{t:this.shape_389},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-503.3,-460.7,1024,808);


// stage content:
(lib.GrandPrixofphysics = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bg();
	this.instance.setTransform(503.4,460.7);

	this.instance_1 = new lib.mc_perple();
	this.instance_1.setTransform(515.8,645.6,1,1,0,0,0,24.9,12.7);

	this.instance_2 = new lib.mc_redCar();
	this.instance_2.setTransform(482.7,677.4,1.319,1.324,0,0,0,18.8,9.6);

	this.instance_3 = new lib.mc_patch();
	this.instance_3.setTransform(512.1,758);

	this.instance_4 = new lib.mc_nidle2();
	this.instance_4.setTransform(454,65.9,1,1,0,0,0,1,23.8);

	this.instance_5 = new lib.mc_nidle1();
	this.instance_5.setTransform(307.5,65.9,1,1,0,0,0,1,23.8);

	this.instance_6 = new lib.mc_perplecarAnimation();
	this.instance_6.setTransform(553.7,487.9,1,1,0,0,0,23.2,13.6);

	this.instance_7 = new lib.mc_RedcarAnimation();
	this.instance_7.setTransform(536.5,331.3,1,1,0,0,0,-2,16);

	this.instance_8 = new lib.mc_redCarcras();
	this.instance_8.setTransform(655.1,174.5,1.318,1.323,0,180,0,18.9,9.6);

	this.instance_9 = new lib.r800m();
	this.instance_9.setTransform(787.8,616.9,1,1,0,0,0,-0.3,-0.3);

	this.instance_10 = new lib.r875m();
	this.instance_10.setTransform(741.1,306.4,1,1,0,0,0,0.3,-0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_8},{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_10},{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(405.7,371.3,1219.4,986.8);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;