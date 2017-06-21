(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 808,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/d1.png?1493272853894", id:"d1"},
		{src:"images/d2.png?1493272853894", id:"d2"},
		{src:"images/Grass.png?1493272853894", id:"Grass"},
		{src:"images/p1.png?1493272853894", id:"p1"},
		{src:"images/p2.png?1493272853894", id:"p2"},
		{src:"images/p3.png?1493272853894", id:"p3"},
		{src:"images/p4.png?1493272853895", id:"p4"},
		{src:"images/p5.png?1493272853895", id:"p5"},
		{src:"images/p6.png?1493272853895", id:"p6"},
		{src:"images/p7.png?1493272853895", id:"p7"}
	]
};



// symbols:



(lib.d1 = function() {
	this.initialize(img.d1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2073,1678);


(lib.d2 = function() {
	this.initialize(img.d2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2045,1678);


(lib.Grass = function() {
	this.initialize(img.Grass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1474,441);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,235);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,235);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,235);


(lib.p4 = function() {
	this.initialize(img.p4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,235);


(lib.p5 = function() {
	this.initialize(img.p5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,235);


(lib.p6 = function() {
	this.initialize(img.p6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,235);


(lib.p7 = function() {
	this.initialize(img.p7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,231,235);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.sky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.549)").s().p("EhOPA88MAAAh53MCcfAAAMAAAB53g");
	this.shape.setTransform(500.8,394.8,1,1.013);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// cloud
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#DBEBF5").s().p("AliClQjzgnhtAFQhEAEg4gDQgZgUAegUQAbgSBogkQgFhtCSgOQB2gMCfAxQgLhVBjgZQBPgUBaAYQBKhCBTAgQBFAbA5BUQB4g4BSAhQBHAdgDA8QBKgNA3AqQAXASAGATQAGAUgQAKQAlAAAvAMQAuAMAfAQQg6ADifgDQhpgBAcAIQBPAWAUAIQApAQg2AAQhZAAndAUIg6ABQieAAjPgig");
	this.shape_1.setTransform(161.7,163.4,0.787,0.787);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDF7F9").s().p("AlqDXQjzgnhtAFQidAIgxgXQgUgJAGgLQAFgKAYgGQA+gPBWgrQgHghASgsQAVg2ArghQB5haDaB/QgGglARgkQATgnAkgVQBcg2CHBVQAxhLBKgNQBxgVBWCsQAegXA4gJQA2gJA1AJQA4AKAdAcQAhAggLAwQA6gPBDAhQBEAjgdAiQgUAZCBAWQA+ALAPAFQAcAJgaAKQgrASjLgDQikgDAbAIQBPAXAUAIQApAQg2AAQhZAAndATIg6ABQieAAjPghg");
	this.shape_2.setTransform(162.3,159.5,0.787,0.787);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DBEBF5").s().p("AliCmQjygohuAGQhFADg3gDQgZgUAegUQAbgSBogkQgFhtCTgOQB2gMCeAxQgLhVBjgYQBQgVBZAZQBKhDBTAgQBFAbA5BUQB4g4BTAhQBGAdgDA8QBKgNA4AqQAWASAGATQAGAUgQAKQAlAAAvAMQAuAMAfAQQg7ADiegCQhpgCAcAIQBTAYAQAGQApAQg2AAQhhAAnVAUIg3ABQifAAjRghg");
	this.shape_3.setTransform(282.1,148.2,0.567,0.567);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EDF7F9").s().p("AlqDXQjygnhuAFQidAIgxgXQgUgJAGgKQAFgLAYgGQA/gPBVgrQgHghASgsQAVg2AsghQB5haDZB/QgGgkARglQATgmAkgWQBcg1CHBVQAwhLBMgOQBwgUBWCrQAfgXA3gJQA3gJA0AJQA4AKAdAcQAiAggLAwQA5gPBDAhQBEAjgcAjQgVAYCBAWQA+ALAPAFQAcAJgaALQgsARjKgDQijgCAaAHQBTAYAQAHQApAQg2AAQhhAAnVAUIg3ABQifAAjRgig");
	this.shape_4.setTransform(282.5,145.4,0.567,0.567);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#DBEBF5").s().p("Am4E4QlCgyg+AIQhiANjBgKQjCgKgpgWQgigSCmgMQBTgFBagCIhmgNIBlgBQAvgCARgFQkdgFghg2QgRgdAtgZQAbgPAGgFQAOgMgEgOQgJgcAVglQAUgkAbgLQAlgPBiAIQCAALCBA2QhrhQBJhFQAbgaAugRQAqgPAgAAQgKgWAHgaQAPg0BYgVQBlgYBQA4QBHAxA5BwQAXhUB1AMQBkALBUA9QCchDA/BZQAYAhAOA8QAGAYANBPIDWgvQDngpBRAPQBZARAnA9QAhA1gPA3QEJA4BLA7Qh2AHhggNQh6gQmTAyQnCA5hzAAQiNAAlfg2g");
	this.shape_5.setTransform(646,237.2,0.778,0.399);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EDF7F9").s().p("AnfGSQlCgyg+AIQhiANjBgKQjCgLgpgVQgigTCmgLQBTgGBagCQg8gIhMgIQiYgRhLAAQhVAAAKg3QAEgVAUgTQAWgUAdgGQArgJAChEQABgsACgMQAFgeASgTQAwg0B1gKQCIgLCBBFQhIiBA6g/QA1g8B8AeQgWgvAwg+QAyg+BKgMQAogHA2AMQA6AMA0AeQCCBKARCFQAdgpAxgQQAugPA1AKQB1AXAuBqQCDhZBXBRQAlAiAOA7QAPA5gMBBQBNg6C9ghQC6gjBwATQBoASAlBWQAjBSgvBDQAaAYDXAaQBsANBmAIQA/ARgQASQgOAQhGANQilAdipgWQh6gQmTAzQnCA5hzAAQiNAAlfg2g");
	this.shape_6.setTransform(649,233.7,0.778,0.399);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#FFFFFF","#96E0FE","#21C0FC"],[0,0.58,1],0,388.8,0,-388.8).s().p("EhOHA+fMAAAh89MCcOAAAMAAAB89g");
	this.shape_7.setTransform(500,400);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.2,1001.6,800.2);


(lib.RedParrot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.instance = new lib.p1();
	this.instance.setTransform(-111,-99.2);

	this.instance_1 = new lib.p2();
	this.instance_1.setTransform(-111,-99.2);

	this.instance_2 = new lib.p3();
	this.instance_2.setTransform(-111,-99.2);

	this.instance_3 = new lib.p4();
	this.instance_3.setTransform(-111,-99.2);

	this.instance_4 = new lib.p5();
	this.instance_4.setTransform(-111,-99.2);
	this.instance_4._off = true;

	this.instance_5 = new lib.p6();
	this.instance_5.setTransform(-111,-99.2);

	this.instance_6 = new lib.p7();
	this.instance_6.setTransform(-111,-99.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance_2}]},5).to({state:[{t:this.instance_3}]},4).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_4}]},20).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_5}]},9).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_5}]},4).to({state:[{t:this.instance}]},4).to({state:[{t:this.instance_4}]},14).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_4}]},12).to({state:[{t:this.instance}]},5).to({state:[{t:this.instance_6}]},6).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},4).wait(23).to({_off:false},0).to({_off:true},5).wait(5).to({_off:false},0).to({_off:true},12).wait(5).to({_off:false},0).to({_off:true},9).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},20).wait(5).to({_off:false},0).to({_off:true},12).wait(5).to({_off:false},0).to({_off:true},9).wait(4).to({_off:false},0).to({_off:true},4).wait(4).to({_off:false},0).to({_off:true},14).wait(5).to({_off:false},0).to({_off:true},12).wait(5).to({_off:false},0).to({_off:true},6).wait(19));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(32).to({_off:false},0).to({_off:true},5).wait(12).to({_off:false},0).to({_off:true},5).wait(41).to({_off:false},0).to({_off:true},5).wait(12).to({_off:false},0).to({_off:true},5).wait(35).to({_off:false},0).to({_off:true},5).wait(12).to({_off:false},0).to({_off:true},5).wait(25));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111,-99.2,231,235);


(lib.Line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#4D4D4D").ss(1,1,1).p("EhlLAAAMDKXAAA");
	this.shape.setTransform(647.7,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1297.4,2);


(lib.LeftLeg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7C6A66").s().p("AgJAZQgahGAkgOQAHACgDAKQgEAKAKAQQAJAPABAEIgBAEQgSgVAFAjQAPAbgQARg");
	this.shape.setTransform(-3.2,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgWAJIADABIAIgDQADAVgOABQAGgKgGgKgAAJgcIAOABQACAPgNAGQACgNgFgJg");
	this.shape_1.setTransform(2.2,12.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#AA9793").s().p("AgKBEIgIgGQgGgIABgOQABgNACgIIAAgFQAAgEgKgOQgJgPADgKQAEgKgHgDIgDgBIABgBIACgCQAOgWAXAAQAWAAAMAZQAMAagBAWQgCAZgGAAIgOgBQgHgBAAgNQAAgMgLgiQAKBagKAEIgDACIgHADIgBABIgCgBg");
	this.shape_2.setTransform(1,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.3,-0.1,10.7,15.7);


(lib.ELECTRICALWIRE = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(0.5,1,1).p("AgDhNQAHADAAAKQAAALgHAIAgDgqQAGAGAAALQgBAKgFADAgDAFQAHABAAAMQAAALgFACAgDA4QADAEAAAGQAAAGgDAG");
	this.shape.setTransform(42.2,217);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FFFFFF","#000000"],[0,1],-5.8,-214.7,15.4,-214.7).s().p("Ag0A8IAAgUIBqAAIAAAUgAg0AjIAAgTIBqAAIAAATgAg0ALIAAgTIBqAAIAAATgAg0gOIAAgMIBqAAIAAAMgAg2gfIAAgcIBsAAIAAAcg");
	this.shape_1.setTransform(31.3,218.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FFFFFF","#000000"],[0,1],-5.8,0.5,12.3,0.5).s().p("Ag1APIAAgcIAIAAIBjAAIAAAcg");
	this.shape_2.setTransform(31.3,210.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FFFFFF","#000000"],[0,1],-1.9,0,8.5,0).s().p("AgxAWIAAgKIASAAIABAAIABgBQAOgRAOgJQAagRAXAfIACABIgBAAIAAAAIAAAWg");
	this.shape_3.setTransform(31.9,206.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAABQIAAAAIAAgCIAAgUIAAgBIAAAAIAAgBIACABIABABIAAAUIgBACIgCABIAAgBgAAAA3IAAAAIAAgCIAAgSIAAgBIAAAAIAAgBIAAgBIAAAAIAAgCIAAgWIAAgBIAAAAIAAgBIAAgBIAAAAIAAgCIAAgKIAAgBIAAgBIAAAAIAAAAIgBgBIgBgCIAAgcIABgCIABAAIAAgBIAAAAIAAgCIAAggIAAgCIAAAAIAAgBIACABIABACIAAACIAAAeIgBACIgCABIABAAIAAACIAAAAIAAAcIAAAAIAAACIgBAAIACABIABACIAAAKIgBACIgCABIACABIABABIAAAWIgBACIgCABIACABIABABIAAASIgBACIgCABIAAgBg");
	this.shape_4.setTransform(25.6,216.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAPBZIgRAAIAAgUIARAAIACAAIAAgBQAFAEAAAGQAAAGgFAGIgCgBgAgZBZIAAgUIARAAIAAAUgAAUAqIgDgBIgTAAIAAgWIARAAIACAAIABgCQAJABAAAMQAAALgHACIAAgBgAgZApIAAgWIARAAIAAAWgAARAAIgCgBIgRAAIAAgcIARAAIACAAIAAgBQAJAGgBALQAAAKgHADgAgZgBIAAgcIARAAIAAAcgAAPgiIgRAAIAAgeIAPAAIABAAIABAAIACAAIABgBQAJADAAAKQAAALgKAIIgCgBgAgZgiIAAgeIARAAIAAAegAgahZIAHALIABABIABAAIAeAAIAAAIIgmAAIgBABg");
	this.shape_5.setTransform(39.9,215.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#999999").s().p("AAfBrIhtAAIgBgBIgBgCIAAgBIABABIABAAIACAAIABgCIBqAAIABACIACAAIgBACIAAABIgCAAgAhLBSIgBgCIgCgBIgBABIgBABIAAgCIAAgBIABABIABAAIACAAIABgCIBqAAIABACIACAAIgCABIgBACgAhLA7IgBgCIgCgBIACAAIABgCIBqAAIABACIACAAIgCABIgBACgAhQA4IAAgBIABABIABAAIgBABIgBABIAAgCgAhLAgIgBgCIgCgBIACAAIABgCIBqAAIABACIACAAIgCABIgBACgAhQAdIAAgBIABABIABAAIgBABIgBABIAAgCgAhLAOIgBgBIgCgBIABAAIAAgCIAAgBIBsAAIABACIACABIgCABIgBABgAhQAMIABAAIAAABIgBAAIAAgBgAhNgQIAAgBIAAgBIgBgBIACAAIABgCIBqAAIABACIACAAIgCABIgBACgAhQgUIABABIgBAAIAAgBgABOgzIAAgBIABgCIgBgBIgCgBIAAgIIggAAIgBAAIgBgBIgHgMIAAgCIAAgBIgBAAIgBAAIgBgBQgYgfgaARQgNAJgPATIgBABIgBAAIgRAAIAAAKIBiAAIAAABIABAAIAAAAIAAABIgCABIgBACIhjAAIgBgBIgBgCIAAgPIABgBIABgBIATAAQAPgTAOgJIABAAQAcgTAZAfIACADQAFAGAFAJIAhAAIACABIAAABIAAANIAAABIAAABIgCABIgBAAg");
	this.shape_6.setTransform(33.6,214.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("AgWBeIgBAAIABgBIAAgCIgCAAIgBgCIAAgUIABgCIACgBIgCAAIgBgCIAAgSIABgCIACgBIgCAAIgBgCIAAgWIABgCIACgBIgCAAIgBgCIAAgNIABgBIACAAIgCAAIgBgCIAAgbIABgCIACgBIgCAAIgBgCIAAgeIABgCIACgBIABgBIgBAAIgBAAIAAgBIAAgXIAAgBIABAAIAAAAIABAAIABABIAAACIAAAVIABAAIAlAAIADABIAAABIAAACIgBABIgCAAIgRAAIAAAeIAUAAIACABIABABIgBACIAAAAIgCABIgUAAIAAAbIAUAAIACABIABABIAAAAIgBABIgCAAIgUAAIAAANIAUAAIACABIABABIAAABIgBABIgCABIgUAAIAAAWIAWAAIACABIAAABIAAAAIAAACIgCABIgWAAIAAASIAUAAIACABIABABIgBACIAAAAIgCABIgUAAIAAAUIAUAAIACABIABABIgBACIgCABgAgTBZIARAAIAAgUIgRAAgAgTBAIARAAIAAgSIgRAAgAgTApIARAAIAAgWIgRAAgAgTAOIARAAIAAgNIgRAAgAgTgCIARAAIAAgbIgRAAgAgTgiIARAAIAAgeIgRAAg");
	this.shape_7.setTransform(39.4,215.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#593500").s().p("AgfB6IAAjzIA8AAIACAAIABAAIAADzg");
	this.shape_8.setTransform(30.3,237.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#7A4B00").s().p("AAQaAMAABgzSQglgSghABIgQABIAAgbQA6gGAmAWIAqgSIABAAMgABAz/g");
	this.shape_9.setTransform(21.6,349.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#BD7607").s().p("AhEABIAAgBQAmgPAegBQAggBAlARIgqARQgmgUg5AEg");
	this.shape_10.setTransform(21.6,182.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4D2F00").s().p("AgqZyMAAAgziIAPgBQAggBAmASMgABAzSg");
	this.shape_11.setTransform(19,350.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]}).wait(1));

	// Layer 3
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#7A4B00").s().p("AAQaJIhVAAMAAAgz/QAngRAegBQAfgBAmASIABAAMgABA0Ag");
	this.shape_12.setTransform(21.6,348.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.6,181.1,29.1,334.7);


(lib.Elewire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EhFgAAAMCLBAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-446.4,-1.5,892.8,3);


(lib.Symbol4copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACCRIgCAAIh6AAQhlgBAAhjIAAhYQAAhlBlABID1AAQBlgBgBBlIAABYQABBjhlABg");
	this.shape.setTransform(368,22.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AABCRIgBAAIh7AAQhjgBgBhjIAAhYQABhlBjABID3AAQBjgBABBlIAABYQgBBjhjABg");
	this.shape_1.setTransform(152.6,22.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(130.2,8.3,260.2,29);


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg//ADZIAAmxMBZaAAAQBiABABBjIAADpQgBBkhiAAgEA85ACdQAxhGABhZQAAhgg3hJIDLAAIAAFIgEAzrACdQAyhGgBhZQAAhgg2hJICDAAQg4BJAABgQABBZAxBGgEAqvACdQgMAAgKgCQhOgKAAhYIAAiAQAAhYBOgKQAKgCAMAAIBsAAQg4BJABBgQgBBZAyBGg");
	this.shape.setTransform(424,21.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.4,0,819.2,43.5);


(lib.dragonBird2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.d2();
	this.instance.setTransform(-61,-49.3,0.06,0.059);

	this.instance_1 = new lib.d1();
	this.instance_1.setTransform(-35.7,-49.2,0.059,0.059);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},8).to({state:[{t:this.instance}]},8).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-49.3,122.2,98.9);


(lib.back_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6BB87D").s().p("EgmXAGbIELiFQFOicFUh8QQ8mSLTA8QBqAJBGAIQgPgSgggKQAcgKA3AbIgOgRQgGgHgMgHQASgBAVAIQAKAEARALQACgRgRgQIgigdQAiACAYASQAYAQAMAdQAGgJAMgHQAQgIASABIgWAaQgLAOgCAQQD8AiBdAtQBKAlgVAzQgIAUhCBGQgzA2AOAdQALAZBEAPQA3ANBrAIQAHgggPgiQASABARAPQAPAOAIAXQALgxAAgZQAAgngYgnQAkAgAPAqQANAmgCA2QAPgPAYgoQAXgkAUgOIgSAvQgLAeAIAVQAZggApgRQAmgOAtAAQgyAUgsA/QDuAOBrAXQCiAjAGBJQAGBVC4AiQBOAPFLAcg");
	this.shape.setTransform(104.9,29.9,0.411,0.531);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83BE6F").s().p("EgsDAG7QF8jaHAi6QLFklKkh5QK+h+LJBvQKMBmJlEiQAAgVgMgaQANAGAIANQAEAHAGATQAFgUgHgeQgDgMgNgkQARAQALAbQAGAQAKAgQALgKAAgaIAEArIAhgYQAVgPARAAIgeAkQgRATgFATQAbgTAyAHIgeAMQgRAHgLAIQFWCsEyDdg");
	this.shape_1.setTransform(120.5,28.2,0.411,0.531);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9BC66E").s().p("EgwHAHnIDPh6QEMiTEviEQgVgHglAGQAVgXBCgFIgXgJQgJgDgPAAQAZgPAxAAQgHgRgZgGQgggFgPgCQAggRAhAEQAfACAbATQAAgJAIgNQALgQASgIIgHAkQgDARAGAQQDsheDmhMQgIgZgXgRQANgGARAEQAQAEAPAMQgMgmgKgSQgSgbgfgSQAlAIAcAXQAZAWAUAlQAEgQABgkQABgjAHgSIAIAoQAEAZAOALQAEgfAWgcQAUgaAfgRQghAqAABQQD1hLDpgzQgQgWgZgKQAPgGARAHQAIADAVAMQgLgYgYgSQgUgQgjgPQA7ADAwAsQACgQgTgZQAcAKAJAbQgBgZAHgXQAJgcARgOQgNA3AYAzQAKgmAxgfIgVAkQgMAVgEAQQJgh8JFALQFxAGFoA4QgHgSgMgOQAOACAMALQAIAGALARIACAAQgBgZgNgZQgMgXgYgbQA1AcAZA8QAJgOgIgeQAWAVgFAdQALgYAQgSQAUgVAUgGQgeAngDAyIAKABQAZgWAvgEQgfAUgOALQD6AuDvBGQgCgKgGgNIgNgYQAUADAOANQAMAKACALQAVgbAdgLQAegNAkAHQgdAOgNAIQgXANgBARQArgOAfAJQgOAEgIAFIgUAPQBAgOAcASQgZACgPAGQgLAEgLAJQE7BlEfCIQAJgTgDgVQAOAFAIAOQAIAPABASQAUgjAFgQQAKgggHgiQATAhABAjQgBAfgPAoIABAAQAPgHAcgYQAagWASgHQgCAFgXAcQgQAUABASQAbgTAkgBQAfgBAjAKQgsADg0AnQDwB+DGCNQBjBGAyAtg");
	this.shape_2.setTransform(126.7,25.9,0.411,0.531);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,253.4,51.8);


(lib.back = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6BB87D").s().p("EgmXABTIELiCQFOicFUh+QQ9mTLSA9QA+AFByAMQgPgRgggMQAdgJA2AbIgOgSQgGgHgMgGQAbgBAnAWQADgQgSgRIgigdQAiACAZASQAYARAMAdQAEgKAOgGQAPgIASABIgWAaQgLAOgCAQQD9AiBcAtQBLAlgWA0QgIAThCBGQgzA2AOAeQAMAaBDAPQA3ANBrAIQAIgggPgiQASAAAQAQQAPAOAJAXQAKgzAAgXQgBgqgXgmQAkAfAPArQANAngCA3QAPgPAZgoQAWgkAUgRIgSAyQgLAeAIAVQAZggAqgRQAlgOAtAAQgxATgtA/QDuAOBsAYQChAjAGBJQAGBSC4AjQBOAPFLAbQ5DKPzKAAQzMAAtWqPg");
	this.shape.setTransform(195.9,68.5,0.768,0.768);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83BE6F").s().p("EgsCAG7QF7jaHAi6QLFklKkh5QK+h+LJBvQKMBmJmEiQgBgXgMgXQAOAFAHANQAEAHAGATQAGgUgHgdQgEgOgMgjQARAQAKAbQAGAQAKAhQAMgLAAgaQABANABAeIAhgYQAXgPAQAAIgeAkQgRATgFATQAbgUAyAIIgeAMQgRAHgKAIQFWCtExDcg");
	this.shape_1.setTransform(224.9,40.8,0.768,0.768);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9BC66E").s().p("EgwHAHnQBJgwCGhJQENiUEviDQgXgIgkAHQAVgYBCgFIgXgJQgJgDgPAAQAbgQAvABQgGgRgagGQgggFgPgCQAggRAhAEQAgADAaASQAAgKAJgMQAKgQASgIIgIAkQgCASAHAPQDrheDnhMQgIgYgYgSQANgGARAEQAQAEAPAMQgMgngKgQQgRgcgfgSQAlAIAbAXQAZAWAUAlQAFgQAAgkQABgjAHgSQACAFAGAjQAFAZANAMQAEghAWgbQAUgaAfgRQghAqAABQQD1hLDpgzQgQgXgZgJQAQgGAQAHQAIACAVANQgLgYgXgSQgVgQgjgOQA7ABAxAuQACgRgUgZQAdAKAIAbQgBgZAIgXQAIgcARgOQgNA2AYA0QAKgmAxgfIgVAkQgMAVgEAQQJkh8JBALQFxAGFoA4QgIgUgMgMQAQACALALQAIAGALARIACAAQAAgZgOgZQgLgWgZgcQA2AdAYA8QAIgPgHgeQAWAWgEAcQAKgXARgTQATgVAVgGQgeAngEAyIAKABQAYgVAwgFQgfAUgPALQEBAwDqBEQgCgKgHgNIgNgYQAUADAOANQAMAKADALQATgbAegMQAfgMAkAHQgeAOgNAIQgXANgCARQAtgOAfAJQgOAEgJAGIgUAOQBCgNAaARQgYACgPAGQgLAEgMAJQE5BlEhCIQAJgUgDgUQANAFAJAOQAHAOACAUQAUgkAGgQQAJgfgHgjQATAhABAjQAAAfgPAoIAAAAQAPgGAcgZQAagWATgGIgaAgQgPAUAAASQA1gjBLAYQgrADg0AmQDxB/DFCNQBjBGAyAtg");
	this.shape_2.setTransform(236.6,37.4,0.768,0.768);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,473.2,125.2);


(lib.Light_Pillar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ELECTRICALWIRE("synched",0);
	this.instance.setTransform(500.9,-599,1.953,1.953,0,0,0,283.3,209);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("AAAiCIAAEF");
	this.shape.setTransform(13.1,-602);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,-653.6,55.8,653.7);


(lib.Symbol3copy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F204B").s().p("AIOFHIAAqNMAhBAAAQBkABAABjIAAHFQAABjhkABgA46FHIAAqNMAg3AAAIAAKNgEgpSAFHQhggCAAhiIAAnFQAAhjBkgBIQGAAIAAKNg");
	this.shape.setTransform(307.6,31.9);

	this.ikNode_1 = new lib.Symbol2copy();
	this.ikNode_1.setTransform(512.6,32.3,1,1,0,0,0,512.6,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ikNode_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.4,-0.8,819.2,65.4);


(lib.Button_Set_1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AQXDZIAAmxIARAAIAAGxgAwnDZIAAmxIAOAAIAAGxg");
	this.shape.setTransform(253.5,32.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.Symbol4copy2();
	this.instance.setTransform(352.1,32,1,1,0,0,0,199.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol3copy3();
	this.instance_1.setTransform(512.6,31.5,1,1,0,0,0,512.6,31.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-26.8,875,120);


(lib.background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// land
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6BB87D").s().p("EgmXAGbIELiFQFOicFUh8QQ8mSLTA8QBqAJBGAIQgPgSgggKQAcgKA3AbIgOgRQgGgHgMgHQASgBAVAIQAKAEARALQACgRgRgQIgigdQAiACAYASQAYAQAMAdQAGgJAMgHQAQgIASABIgWAaQgLAOgCAQQD8AiBdAtQBKAlgVAzQgIAUhCBGQgzA2AOAdQALAZBEAPQA3ANBrAIQAHgggPgiQASABARAPQAPAOAIAXQALgxAAgZQAAgngYgnQAkAgAPAqQANAmgCA2QAPgPAYgoQAXgkAUgOIgSAvQgLAeAIAVQAZggApgRQAmgOAtAAQgyAUgsA/QDuAOBrAXQCiAjAGBJQAGBVC4AiQBOAPFLAcg");
	this.shape.setTransform(367.7,222.4,0.316,0.791);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#83BE6F").s().p("EgsDAG7QF8jaHAi6QLFklKkh5QK+h+LJBvQKMBmJlEiQAAgVgMgaQANAGAIANQAEAHAGATQAFgUgHgeQgDgMgNgkQARAQALAbQAGAQAKAgQALgKAAgaIAEArIAhgYQAVgPARAAIgeAkQgRATgFATQAbgTAyAHIgeAMQgRAHgLAIQFWCsEyDdg");
	this.shape_1.setTransform(379.6,219.8,0.316,0.791);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9BC66E").s().p("EgwHAHnIDPh6QEMiTEviEQgVgHglAGQAVgXBCgFIgXgJQgJgDgPAAQAZgPAxAAQgHgRgZgGQgggFgPgCQAggRAhAEQAfACAbATQAAgJAIgNQALgQASgIIgHAkQgDARAGAQQDsheDmhMQgIgZgXgRQANgGARAEQAQAEAPAMQgMgmgKgSQgSgbgfgSQAlAIAcAXQAZAWAUAlQAEgQABgkQABgjAHgSIAIAoQAEAZAOALQAEgfAWgcQAUgaAfgRQghAqAABQQD1hLDpgzQgQgWgZgKQAPgGARAHQAIADAVAMQgLgYgYgSQgUgQgjgPQA7ADAwAsQACgQgTgZQAcAKAJAbQgBgZAHgXQAJgcARgOQgNA3AYAzQAKgmAxgfIgVAkQgMAVgEAQQJgh8JFALQFxAGFoA4QgHgSgMgOQAOACAMALQAIAGALARIACAAQgBgZgNgZQgMgXgYgbQA1AcAZA8QAJgOgIgeQAWAVgFAdQALgYAQgSQAUgVAUgGQgeAngDAyIAKABQAZgWAvgEQgfAUgOALQD6AuDvBGQgCgKgGgNIgNgYQAUADAOANQAMAKACALQAVgbAdgLQAegNAkAHQgdAOgNAIQgXANgBARQArgOAfAJQgOAEgIAFIgUAPQBAgOAcASQgZACgPAGQgLAEgLAJQE7BlEfCIQAJgTgDgVQAOAFAIAOQAIAPABASQAUgjAFgQQAKgggHgiQATAhABAjQgBAfgPAoIABAAQAPgHAcgYQAagWASgHQgCAFgXAcQgQAUABASQAbgTAkgBQAfgBAjAKQgsADg0AnQDwB+DGCNQBjBGAyAtg");
	this.shape_2.setTransform(384.4,216.3,0.316,0.791);

	this.instance = new lib.back();
	this.instance.setTransform(634.6,222.5,0.752,0.916,0,0,4.6,236.6,37.6);
	this.instance.filters = [new cjs.ColorFilter(0.8, 0.8, 0.8, 1, 51, 51, 51, 0)];
	this.instance.cache(-2,-2,477,129);

	this.instance_1 = new lib.back_1();
	this.instance_1.setTransform(724.1,198.1,1.442,2.562,0,0,0,126.7,25.8);
	this.instance_1.filters = [new cjs.ColorFilter(0.86, 0.86, 0.86, 1, 35.7, 35.7, 35.7, 0)];
	this.instance_1.cache(-2,-2,257,56);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#6BB87D").s().p("Az9CSICLhoQCuh6CwhjQI1k9F3AwIBcANQgIgNgRgJQAPgHAdAVIgIgOQgDgFgGgGQAKAAAKAGIAOALQACgMgKgOIgRgXQASACANAOQAMAOAGAWQACgIAIgFQAHgGAKABIgMAVQgGALAAAMQCDAbAwAkQAnAdgLAoQgFAPgiA3QgbArAIAYQAGAUAjAMQAcAKA4AHQAEgZgHgcQAJABAJAMQAHALAFASQAFgnAAgTQAAgggMgfQASAZAIAhQAHAfgBArQAIgMAMgfQAMgdALgNIgKAnQgFAYADARQAOgaAVgNQAUgLAXAAQgaAQgXAxQB8ALA4ATQBUAbADA4QAEBCBfAcQApALCsAWQjhFjqAAAQp9AAwdljg");
	this.shape_3.setTransform(119.1,234.2,1.265,1.11,0,0,-3.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#83BE6F").s().p("A26BfQDFiqDqiSQFxjpFghfQFshjFzBYQFTBQE/DlQAAgRgGgVQAHAFAEAKIAFAVQADgQgEgYIgIgmQAJANAFAVIAJAmQAGgIAAgVIABAkIASgUQALgMAIAAIgPAcQgJAQgDAPQAPgPAZAGIgPAJQgJAGgGAGQCyCICfCsQrYH8reAAQrcAArjn8g");
	this.shape_4.setTransform(148.3,230.1,1.265,1.11,0,0,-3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#9BC66E").s().p("EgnIAIUICpiEQDaiiD3iPQgTgIgdAGQARgZA1gGIgSgKQgHgDgNAAQAVgQAnAAQgEgSgWgIQgagFgMgCQAbgSAbADQAZADAWAVQgBgLAIgOQAIgRAOgJIgGAoQgCASAGASQC/hnC8hTQgHgcgTgSQAKgGAPAEQANAEAMANQgKgqgIgTQgOgdgagTQAeAHAWAaQAUAYARApQAEgRABgpQAAglAGgVIAGAtQADAbAMAMQADgjASgeQARgbAZgVQgbAvAABXQDHhRC+g4QgOgZgUgKQANgGANAGQAHADARAOQgKgagTgUQgQgRgdgRQAxAEAnAwQABgSgPgbQAXAMAHAdQgBgcAGgZQAHgfAOgPQgKA7ATA5QAIgqAoghIgSAnQgJAXgDASQHuiIHYALQDrAGDlAmQBBALA/ANQgEgTgLgPQAMABAKAMQAGAHAJATIACAAQgBgbgKgcQgKgZgUgeQArAfAUBDQAIgRgHggQASAYgDAeQAIgaANgUQARgXAQgGQgZArgDA2IAJACQAUgYAmgFQgZAWgMAMQDMAyDDBNQgBgLgGgOIgKgaQAPADAMANQAKAMACALQAQgdAYgMQAZgNAdAGIgiAYQgTAPgBATQAjgQAZAKQgLAFgHAFIgQAQQA0gPAXATQgUADgMAGQgJAFgKAKQEBBvDpCUQAHgWgCgWQALAFAHAQQAGAQABAUQARgmAEgSQAIgigHgmQARAjAAAnQAAAigMAsIAAAAQAMgIAXgaQAVgYAPgHQgCAFgSAfQgNAVAAATQAWgTAdgCQAagCAcAMQgkADgqAqQBoBKBfBOQBSBFBLBHQBRBNApAxg");
	this.shape_5.setTransform(158.4,197.4,0.81,0.8,0,0,-3.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.instance_1},{t:this.instance},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,52.3,951,259.2);


(lib.Bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhP/A/IMAAAh+PMCf/AAAMAAAB+Pg");
	mask.setTransform(512,404);

	// Layer 1
	this.instance = new lib.Line();
	this.instance.setTransform(0,17.4,0.79,1,0,180,0);

	this.instance_1 = new lib.Line();
	this.instance_1.setTransform(0,63.9,0.79,1,0,180,0);

	this.instance_2 = new lib.Line();
	this.instance_2.setTransform(0,110.4,0.79,1,0,180,0);

	this.instance_3 = new lib.Line();
	this.instance_3.setTransform(0,389.7,0.79,1,0,180,0);

	this.instance_4 = new lib.Line();
	this.instance_4.setTransform(0,296.3,0.79,1,0,180,0);

	this.instance_5 = new lib.Line();
	this.instance_5.setTransform(0,203.4,0.79,1,0,180,0);

	this.instance_6 = new lib.Line();
	this.instance_6.setTransform(418.5,0.3,0.624,1,90);

	this.instance_7 = new lib.Line();
	this.instance_7.setTransform(511.5,0.3,0.624,1,90);

	this.instance_8 = new lib.Line();
	this.instance_8.setTransform(604.5,0.3,0.624,1,90);

	this.instance_9 = new lib.Line();
	this.instance_9.setTransform(697.5,0.3,0.624,1,90);

	this.instance_10 = new lib.Line();
	this.instance_10.setTransform(790.5,0.3,0.624,1,90);

	this.instance_11 = new lib.Line();
	this.instance_11.setTransform(883.5,0.3,0.624,1,90);

	this.instance_12 = new lib.Line();
	this.instance_12.setTransform(1023,0.3,0.624,1,90);

	this.instance_13 = new lib.Line();
	this.instance_13.setTransform(976.5,0.3,0.624,1,90);

	this.instance_14 = new lib.Line();
	this.instance_14.setTransform(0,0.3,0.624,1,90);

	this.instance_15 = new lib.Light_Pillar();
	this.instance_15.setTransform(127,959.2);

	this.instance_16 = new lib.Line();
	this.instance_16.setTransform(0,156.9,0.79,1,0,180,0);

	this.instance_17 = new lib.Line();
	this.instance_17.setTransform(0,249.8,0.79,1,0,180,0);

	this.instance_18 = new lib.Line();
	this.instance_18.setTransform(0,342.7,0.79,1,0,180,0);

	this.instance_19 = new lib.Line();
	this.instance_19.setTransform(0,436.1,0.79,1,0,180,0);

	this.instance_20 = new lib.Line();
	this.instance_20.setTransform(0,482.6,0.79,1,0,180,0);

	this.instance_21 = new lib.Line();
	this.instance_21.setTransform(0,529,0.79,1,0,180,0);

	this.instance_22 = new lib.Line();
	this.instance_22.setTransform(0,575.5,0.79,1,0,180,0);

	this.instance_23 = new lib.Line();
	this.instance_23.setTransform(0,621.9,0.79,1,0,180,0);

	this.instance_24 = new lib.Line();
	this.instance_24.setTransform(0,668.4,0.79,1,0,180,0);

	this.instance_25 = new lib.Line();
	this.instance_25.setTransform(0,714.8,0.79,1,0,180,0);

	this.instance_26 = new lib.Line();
	this.instance_26.setTransform(0,761.3,0.79,1,0,180,0);

	this.instance_27 = new lib.Line();
	this.instance_27.setTransform(837,0.3,0.624,1,90);

	this.instance_28 = new lib.Line();
	this.instance_28.setTransform(930,0.3,0.624,1,90);

	this.instance_29 = new lib.Line();
	this.instance_29.setTransform(46.5,0.3,0.624,1,90);

	this.instance_30 = new lib.Line();
	this.instance_30.setTransform(93,0.3,0.624,1,90);

	this.instance_31 = new lib.Line();
	this.instance_31.setTransform(139.5,0.3,0.624,1,90);

	this.instance_32 = new lib.Line();
	this.instance_32.setTransform(186,0.3,0.624,1,90);

	this.instance_33 = new lib.Line();
	this.instance_33.setTransform(232.5,0.3,0.624,1,90);

	this.instance_34 = new lib.Line();
	this.instance_34.setTransform(279,0.3,0.624,1,90);

	this.instance_35 = new lib.Line();
	this.instance_35.setTransform(325.5,0.3,0.624,1,90);

	this.instance_36 = new lib.Line();
	this.instance_36.setTransform(372,0.3,0.624,1,90);

	this.instance_37 = new lib.Line();
	this.instance_37.setTransform(465,0.3,0.624,1,90);

	this.instance_38 = new lib.Line();
	this.instance_38.setTransform(558,0.3,0.624,1,90);

	this.instance_39 = new lib.Line();
	this.instance_39.setTransform(651,0.3,0.624,1,90);

	this.instance_40 = new lib.Line();
	this.instance_40.setTransform(744,0.3,0.624,1,90);

	this.instance_41 = new lib.Symbol5();
	this.instance_41.setTransform(468.1,594,1.504,1.142,0,0,180,394.7,110.5);
	this.instance_41.alpha = 0.309;

	this.instance_42 = new lib.Grass();
	this.instance_42.setTransform(-234,440.5);

	this.instance_43 = new lib.background();
	this.instance_43.setTransform(533.2,396.6,1.411,1.411,0,0,0,436.6,129.3);

	this.instance_44 = new lib.sky();
	this.instance_44.setTransform(688.3,513.7,1.411,1.411,0,0,0,566,399.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B5B838").ss(1,1,1).p("Am3gGIg8FJAGtAkIDdDgAqJlCIGBAWIhyDg");
	this.shape.setTransform(843.3,584);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = this.instance_39.mask = this.instance_40.mask = this.instance_41.mask = this.instance_42.mask = this.instance_43.mask = this.instance_44.mask = this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,808);


// stage content:
(lib.Frequencyandwavelength = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Main BG
	this.instance = new lib.Bg();

	this.instance_1 = new lib.dragonBird2();
	this.instance_1.setTransform(777.9,295.2);

	this.instance_2 = new lib.RedParrot();
	this.instance_2.setTransform(185.3,338.2,0.577,0.577);

	this.instance_3 = new lib.Elewire();
	this.instance_3.setTransform(578.3,342);

	this.instance_4 = new lib.LeftLeg();
	this.instance_4.setTransform(178.8,345.8,0.72,0.72,0,0,0,0,13.8);

	this.instance_5 = new lib.LeftLeg();
	this.instance_5.setTransform(191.8,345.8,0.72,0.72,0,0,180,0,13.8);

	this.instance_6 = new lib.Button_Set_1copy2();
	this.instance_6.setTransform(622.6,758.9,1.25,1.25,0,0,0,512.6,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_5},{t:this.instance_4}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(278,353,1537,1129.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;