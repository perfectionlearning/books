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



(lib.VerticalLine = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,2,0,3).p("AAAhHIAACP");
	this.shape.setTransform(0,7.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,2,16.5);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIpClQAyhGAAhbQAAheg3hKICfAAIAAFJgAgiClQAvhGAAhbQAAheg1hKICCAAQg4BKAABeQAABbAxBGgApfClQhjAAgBhkIAAiBQABhjBjgBIBsAAQg3BKAABeQAABbAyBGg");
	this.shape.setTransform(748.6,21);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(677.8,4.5,141.6,33);


(lib.mdpach = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhP/AN2IAA7rMCf/AAAIAAbrg");
	mask.setTransform(0,206.8);

	// gradiation
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["rgba(133,133,133,0.651)","rgba(204,204,204,0)"],[0,1],-1.2,2.1,0,-1.2,2.1,502.2).s().p("Eg45ADeQ3jhcgBiCQABiCXjhcUAXlgBcAhUAAAUAhVAAAAXjABcQXmBcAACCQAACC3mBcUgXjABdghVAAAUghUAAAgXlgBdg");
	this.shape.setTransform(0.9,293.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.rf(["rgba(133,133,133,0.651)","rgba(204,204,204,0)"],[0,1],-1.2,2.1,0,-1.2,2.1,502.2).s().p("Eg45ADeQ3jhcgBiCQABiCXjhcUAXlgBcAhUAAAQTZAAQGAgQFDAJEuANQGGARFiAVQXmBcAACCQAACC3mBcQliAWmGAQQkuANlDAKQwGAgzZAAUghUAAAgXlgBdg");
	this.shape_1.setTransform(0.9,114.3);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(133,133,133,0)","rgba(157,157,157,0.145)","rgba(168,168,168,0.388)","rgba(155,155,155,0.129)","rgba(133,133,133,0)"],[0,0.196,0.502,0.82,1],-515.3,0,515.4,0).s().p("EhP/AN2IAA7rMCf/AAAIAAbrg");
	this.shape_2.setTransform(0,205.5);

	this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-512,118.2,1024,177.3);


(lib.Line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1).p("EhHGAAAMCONAAA");
	this.shape.setTransform(455.2,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,912.4,2);


(lib.GO_Button = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhihiIDGBiIjGBkg");
	this.shape.setTransform(28.2,25.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0F204B").s().p("AizCzQhLhJAAhqQAAhoBLhLQBKhLBpAAQBpAABKBLQBMBLAABoQAABqhMBJQhKBMhpAAQhpAAhKhMg");
	this.shape_1.setTransform(25.5,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhihiIDGBiIjGBkg");
	this.shape_2.setTransform(28.2,25.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0D95A6").s().p("AizCzQhLhJAAhqQAAhoBLhLQBKhLBpAAQBpAABKBLQBMBLAABoQAABqhMBJQhKBMhpAAQhpAAhKhMg");
	this.shape_3.setTransform(25.5,25.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,51);


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


(lib.Symbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhGCQQhkABAAhlIAAhYQAAhjBkgBICNAAQBkABAABjIAABYQAABlhkgBg");
	this.shape.setTransform(17.2,14.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34.3,29);


(lib.ClipGroup_2copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A2LXbMAAAgu2MAsXAAAMAAAAu2g");
	mask.setTransform(142,150);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#5E2B0D").s().p("AiZCbQhBhBAAhaQAAhZBBhBQBAhABZAAQBbAAA/BAQBBBBAABZQAABahBBBQg/BAhbAAQhZAAhAhAg");
	this.shape.setTransform(49.2,180.2);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.2,158.2,43.9,43.9);


(lib.ClipGroup_1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiXCYQg/g/AAhZQAAhXA/hAQA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	mask.setTransform(21.6,21.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FB7830","#4D2A18"],[0,1],8.3,-9.8,0,8.3,-9.8,37.8).s().p("AjWDXIAAmtIGtAAIAAGtg");
	this.shape.setTransform(21.6,21.6);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.2,43.1);


(lib.bg_Patcj = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF9900").ss(1,1,1,3,true).p("EBHHAU3MiONAAAMAAAgptMCONAAAg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFD782").s().p("EhHGAU2MAAAgprMCONAAAMAAAAprg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-456.1,-134.5,912.4,269);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.ikNode_1 = new lib.Symbol2();
	this.ikNode_1.setTransform(102.9,0.8,1,1,0,0,0,512.6,21.8);

	this.timeline.addTween(cjs.Tween.get(this.ikNode_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(268.1,-16.5,141.6,33);


(lib.InstructionText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.GO_Button();
	this.instance.setTransform(-24.7,-23,0.41,0.41,0,0,0,25.5,25.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AKyAvQgHgGAAgKQAAgHADgFQADgFAGgDQAGgCAKgCQAPgDAFgDIAAgBQAAgEgCgDQgEgDgIAAQgFAAgEADQgDACgBAFIgTgDQADgLAIgGQAHgFAPAAQAOAAAHADQAHADADAFQACAFAAAMIAAAYIABAPQABAFADAFIgVAAIgCgGIAAgCQgGAFgFACQgHADgHAAQgMAAgGgHgALOASQgIACgDACQgDACAAAFQAAAEACADQAEAEAFAAQAGAAAEgEQAEgDACgEIAAgKIAAgEIgNADgAKKA0QgFgCgCgDQgDgDAAgFQgBgDAAgLIAAggIgJAAIAAgRIAJAAIAAgPIAVgMIAAAbIAOAAIAAARIgOAAIAAAdIABALQAAABAAAAQAAAAAAABQAAAAAAAAQABABAAAAIAEABIAIgCIACAQQgHADgJAAQgGAAgEgCgAIsAvQgGgGAAgKQAAgHACgFQAEgFAGgDQAFgCALgCQAOgDAFgDIAAgBQAAgEgCgDQgDgDgJAAQgFAAgDADQgDACgCAFIgSgDQADgLAHgGQAIgFAPAAQAOAAAHADQAGADADAFQADAFAAAMIgBAYIABAPQACAFADAFIgVAAIgCgGIgBgCQgFAFgGACQgGADgHAAQgMAAgHgHgAJJASQgJACgCACQgEACAAAFQAAAEADADQAEAEAEAAQAGAAAFgEQADgDACgEIAAgKIAAgEIgMADgAHUArQgKgLABgTQgBgSAKgKQAKgKANAAQAOAAAJALIAAgnIAUAAIAABpIgSAAIAAgLQgFAGgGAEQgHADgHAAQgNAAgKgLgAHkgEQgEAEAAAMQAAAMADAGQAFAIAJAAQAHAAAFgGQAFgGAAgMQAAgOgFgEQgEgGgIAAQgHAAgGAGgAFPArQgJgLAAgTQAAgSAJgKQAJgKAOAAQAOAAAJALIAAgnIAUAAIAABpIgTAAIAAgLQgFAGgFAEQgHADgHAAQgNAAgKgLgAFggEQgGAEAAAMQABAMADAGQAFAIAJAAQAHAAAFgGQAFgGAAgMQAAgOgFgEQgFgGgHAAQgIAAgEAGgADEAxQgKgFgFgJQgFgJAAgOQAAgKAFgIQAFgJAJgFQAJgFAMAAQARAAAMALQALAMAAAPQAAASgLALQgMAMgRAAQgKAAgKgFgADKgCQgFAEAAALQAAAMAFAGQAGAGAIAAQAIAAAFgGQAGgGAAgMQAAgLgGgEQgFgHgIAAQgIAAgGAHgABnArQgKgLAAgTQAAgRAKgLQAKgKARAAQAOAAAJAGQAJAGADAMIgUACQgBgEgEgDQgEgDgGAAQgHAAgEAFQgFAEAAAMQAAAOAFAGQAEAFAIAAQAGAAADgDQAFgDABgJIAUAEQgDAOgJAHQgJAHgPAAQgRAAgKgLgAAPApQgHgLAAgQQAAgRAKgLQAKgLAPAAQASAAAKALQAKAMAAAVIg0AAQAAAJAFAGQAEAFAIAAQAFAAADgDQADgDACgGIAUAEQgEALgIAGQgIAGgNAAQgVAAgKgNgAAhgFQgEAFAAAHIAfAAQAAgHgEgFQgFgFgGAAQgHAAgFAFgAnOAwQgJgHgDgLIAUgDQACAGAEADQAEADAIAAQAHAAAEgDQADgCAAgDQAAgBAAAAQAAgBAAgBQgBAAAAAAQAAgBgBAAQgBgCgFgBQgZgFgHgFQgJgGAAgJQAAgLAIgGQAIgHARAAQAQAAAHAFQAIAFADAKIgUAEQAAgFgEgCQgDgCgHAAQgIAAgEACQAAAAgBABQAAAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAABABQAAABAAAAQABAAAAABQADAAARADQAPAEAHAGQAGAFABAKQgBALgIAHQgJAIgRAAQgRAAgJgGgAohAwQgJgHgEgLIAVgDQABAGAEADQAFADAHAAQAIAAAEgDQADgCgBgDQAAgBAAAAQAAgBAAgBQAAAAAAAAQgBgBAAAAQgCgCgFgBQgZgFgGgFQgKgGABgJQgBgLAJgGQAHgHARAAQAQAAAIAFQAHAFADAKIgTAEQgBgFgDgCQgEgCgHAAQgHAAgEACQgBAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAABABAAQAAAAAAABQAEAAAQADQAQAEAHAGQAGAFAAAKQAAALgJAHQgJAIgRAAQgQAAgJgGgAp4ApQgIgLAAgQQABgRAJgLQALgLAPAAQASAAAJALQALAMgBAVIgzAAQAAAJAEAGQAFAFAHAAQAFAAADgDQAEgDABgGIAVAEQgEALgIAGQgJAGgNAAQgVAAgJgNgApmgFQgFAFABAHIAeAAQAAgHgEgFQgFgFgGAAQgHAAgEAFgAMEA0IAAgUIAVAAIAAAUgAEQA0IAAhMIATAAIAAAMQAFgIAEgDQADgCAFAAQAHAAAHAEIgGASQgGgEgEAAQgFAAgCADQgDACgDAEQgBAGAAAUIAAAYgAgWA0IgQgXIgLgQQgDgDgEgBQgDgCgIAAIgEAAIAAAtIgWAAIAAhpIAuAAQASAAAHADQAIADAEAHQAGAHAAAKQgBAMgHAIQgHAGgOACQAHAEAEAFQAFAFAIAMIALAVgAhHgIIAQAAQAQAAADgBQAEgBADgEQACgDAAgFQAAgFgDgDQgDgEgFgBIgQAAIgRAAgAq1A0IAAhMIAUAAIAAAMQAEgIAFgDQADgCAFAAQAIAAAGAEIgHASQgFgEgFAAQgDAAgEADQgDACgBAEQgCAGAAAUIAAAYgAsYA0IAAhpIAjAAQAUAAAGABQAJADAHAIQAFAIABANQAAAKgEAHQgEAEgFAEQgGAEgFABQgIACgPAAIgOAAIAAAogAsCgEIAMAAQANAAAEgCQAEgCADgDQADgEgBgFQAAgGgDgDQgDgEgGgBIgQgBIgKAAg");
	this.shape.setTransform(0.1,-23.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AujDjIAAlDQAAiCCDABIZBAAQCDgBAACCIAAFDg");
	this.shape_1.setTransform(0,-22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.2,-45.4,186.4,45.4);


(lib.hdghd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Line();
	this.instance.setTransform(0,248.3);

	this.instance_1 = new lib.Line();
	this.instance_1.setTransform(0,229.2);

	this.instance_2 = new lib.Line();
	this.instance_2.setTransform(0,210.1);

	this.instance_3 = new lib.Line();
	this.instance_3.setTransform(0,191);

	this.instance_4 = new lib.Line();
	this.instance_4.setTransform(0,171.9);

	this.instance_5 = new lib.Line();
	this.instance_5.setTransform(0,152.8);

	this.instance_6 = new lib.Line();
	this.instance_6.setTransform(0,133.7);

	this.instance_7 = new lib.Line();
	this.instance_7.setTransform(0,114.6);

	this.instance_8 = new lib.Line();
	this.instance_8.setTransform(0,95.5);

	this.instance_9 = new lib.Line();
	this.instance_9.setTransform(0,76.4);

	this.instance_10 = new lib.Line();
	this.instance_10.setTransform(0,57.3);

	this.instance_11 = new lib.Line();
	this.instance_11.setTransform(0,38.2);

	this.instance_12 = new lib.Line();
	this.instance_12.setTransform(0,19.1);

	this.instance_13 = new lib.bg_Patcj();
	this.instance_13.setTransform(455.2,133.5);
	this.instance_13.shadow = new cjs.Shadow("#000000",0,4,7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-4,930,287);


(lib.Green_Ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.ClipGroup_1();
	this.instance.setTransform(18.4,18.6,0.84,0.84,0,0,0,21.6,21.6);

	this.instance_1 = new lib.ClipGroup_2();
	this.instance_1.setTransform(96.5,-6.9,0.84,0.84,0,0,0,142,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-132.9,238.6,252);


(lib.Brown_Ball = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.ClipGroup_1copy2();
	this.instance.setTransform(18.4,18.6,0.84,0.84,0,0,0,21.6,21.6);

	this.instance_1 = new lib.ClipGroup_2copy2();
	this.instance_1.setTransform(96.5,-6.9,0.84,0.84,0,0,0,142,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-22.8,-132.9,238.6,252);


(lib.bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.VerticalLine();
	this.instance.setTransform(404.5,-13);

	this.instance_1 = new lib.VerticalLine();
	this.instance_1.setTransform(243.9,-13);

	this.instance_2 = new lib.VerticalLine();
	this.instance_2.setTransform(82.3,-13);

	this.instance_3 = new lib.VerticalLine();
	this.instance_3.setTransform(-79.3,-13);

	this.instance_4 = new lib.VerticalLine();
	this.instance_4.setTransform(-240.9,-13);

	this.instance_5 = new lib.VerticalLine();
	this.instance_5.setTransform(-402.5,-13);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAGBAIAAgaIgzAAIAAgVIA2hQIAVAAIAABQIAQAAIAAAVIgQAAIAAAagAgWARIAcAAIAAgqg");
	this.shape.setTransform(243.9,17.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcA3QgMgKgBgQIAXgDQACAJAFAFQAFAFAGAAQAGAAAGgGQAFgGAAgJQAAgKgFgFQgFgGgHAAQgDAAgHACIADgSQAIAAAFgEQAGgFAAgIQAAgGgEgEQgEgEgFAAQgGAAgEAFQgFAEgBAIIgXgDQADgMAFgHQAEgHAJgEQAIgEALAAQAQAAALALQAJAKAAAMQAAARgSAKQALACAHAHQAGAIAAAMQAAARgMALQgNAMgRAAQgRAAgLgKg");
	this.shape_1.setTransform(82.5,18);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgqBAQACgNAHgLQAHgMAUgTQAPgOAEgFQAFgIAAgIQAAgIgEgEQgFgFgIAAQgFAAgFAFQgFAFAAAKIgZgCQACgUAMgJQAMgJAPAAQATAAALAKQALAKAAAQQAAAIgDAIQgDAIgHAHIgQAQIgOAOIgEAHIAvAAIAAAXg");
	this.shape_2.setTransform(-79.2,17.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AADBAIAAhbQgMANgSAGIAAgXQAKgDALgIQAKgJAEgMIAUAAIAAB/g");
	this.shape_3.setTransform(-241.1,17.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgcA3QgMgKgCgQIAZgCQABAHAFAFQAFAFAGABQAHAAAFgHQAGgGAAgNQAAgMgGgFQgFgFgHAAQgKAAgJAIIgUgDIANhBIA/AAIAAAXIgsAAIgEAWQAIgEAHAAQAQAAALALQAMALAAATQAAAQgJAMQgNARgVAAQgRAAgLgJg");
	this.shape_4.setTransform(405.5,18.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgdAzQgLgOAAglQAAgjAMgQQALgNARAAQASAAALANQAMAQAAAjQAAAkgMAQQgLANgSAAQgRAAgMgOgAgGgpQgEADgCAHQgCAKAAAVQAAAWACAJQACAIAEADQADADADAAQAEAAAEgDQADgDACgHQADgKAAgWQAAgVgDgIQgCgJgDgDQgEgDgEAAQgDAAgDADg");
	this.shape_5.setTransform(-401.9,18);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgbApQgMgIgDgNIAZgEQABAHAFAEQAFAEAHAAQAJAAAFgEQADgCAAgFQAAAAAAgBQAAgBAAAAQAAgBgBAAQAAgBAAAAQgCgCgHgBQgcgHgIgGQgLgFAAgOQAAgMAKgIQAKgIATAAQASAAAJAGQAJAGAEAMIgXAFQgCgGgEgDQgEgCgHAAQgJAAgEACQgDACAAADQAAADADACQADACASAFQAUAEAHAGQAIAFAAAMQAAANgLAJQgKAJgVAAQgRAAgLgHg");
	this.shape_6.setTransform(-338.7,18.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgdAvIAAhbIAXAAIAAANQAGgJADgDQAEgDAGAAQAJAAAIAEIgIAWQgGgEgGAAQgFAAgDADQgCADgCAHQgCAIAAAVIAAAdg");
	this.shape_7.setTransform(-346.2,18.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AghAgQgJgMAAgUQAAgVAMgNQAMgNASAAQAUAAAMAOQAMANgBAbIg8AAQABALAFAGQAGAGAGAAQAGAAAEgDQAEgDACgHIAZAEQgFANgKAHQgKAHgQAAQgWAAgMgQgAgLgWQgFAFAAALIAjAAQgBgLgFgGQgFgFgIAAQgGAAgFAGg");
	this.shape_8.setTransform(-355.5,18.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgDA+QgEgDgDgDQgCgEgCgGIAAgRIAAgnIgMAAIAAgUIAMAAIAAgSIAXgPIAAAhIAQAAIAAAUIgQAAIAAAkIAAANIACADIAEABIAKgCIACATQgJAEgKAAQgHAAgEgCg");
	this.shape_9.setTransform(-363.4,16.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AghAgQgJgMAAgUQAAgVAMgNQAMgNASAAQAUAAAMAOQAMANgBAbIg8AAQABALAFAGQAGAGAGAAQAGAAAEgDQAEgDACgHIAZAEQgFANgKAHQgKAHgQAAQgWAAgMgQgAgLgWQgFAFAAALIAjAAQgBgLgFgGQgFgFgIAAQgGAAgFAGg");
	this.shape_10.setTransform(-371.5,18.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AArAvIAAgzQAAgOgCgEQgEgFgHAAQgFAAgEADQgFADgCAGQgCAGAAALIAAAtIgXAAIAAgxQAAgOgBgDQgBgEgDgCQgDgCgFAAQgFAAgFADQgFADgBAGQgCAFAAAMIAAAtIgZAAIAAhbIAXAAIAAANQAMgPARAAQAJAAAGADQAFAEAEAIQAGgIAHgEQAHgDAJAAQAKAAAHAEQAHAEAEAIQACAGAAAOIAAA5g");
	this.shape_11.setTransform(-384.5,18.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#C4C4C4").s().p("AgtgBQgRgJgHgGQgGgFgEgHQgDgIAAgKQgBgKAEgNIAYADIgBALQAAAPAWAKIB1gWIAAAhIg7AIIgfADQARAHAVAIIA0AdIAAAig");
	this.shape_12.setTransform(479.4,-94.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#C4C4C4").s().p("AATA2IgegGQgWgEgIgBQgIABgJACIAAggQAGgBAIAAQgIgIgFgHQgEgJAAgJQAAgQAKgJQAJgKAQAAQARAAAJALQAKALABAbQACAVADAIIALABQAFAAAEgDQADgFAAgIQAAgIgDgDQgEgGgGgCIACgfQAQAFAJAOQAJANAAAVQAAAXgJAKQgJAMgOAAIgLgCgAghgUQgDAEAAAGQAAAIADAEQAEAHAFADQAGADAMACIADABIgBgHQgDgXgGgHQgDgGgIAAQgFABgEAEg");
	this.shape_13.setTransform(481.8,-108.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C4C4C4").s().p("AhRAAIAAggICjAhIAAAgg");
	this.shape_14.setTransform(484,-116.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#C4C4C4").s().p("AgVAyQgTgRAAgXQAAgWAUgMIg+gNIAAggICjAiIAAAfIgNgDQAIAIAEAJQADAIAAAKQAAATgNALQgNAMgZAAQggAAgVgUgAgIgIQgHAGAAAIQAAAIAGAHQAFAHAMAFQANAFAMAAQANAAAHgGQAHgHAAgKQAAgJgGgGQgHgHgNgEQgMgEgKAAQgMAAgIAHg");
	this.shape_15.setTransform(479.6,-128.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C4C4C4").s().p("AA3ApQAEgLAAgIQAAgFgEgDQgCgCgKgBIgIgDIAAAXIgYgFIAAgWIhdgSIAAghIBdAUIAAgSIAYAGIAAASIAMACQAPADAGADQAHAEAEAHQAEAGAAAMQAAAPgFARg");
	this.shape_16.setTransform(484.2,-143.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C4C4C4").s().p("AgoArQgVgTAAgdQAAgQAHgNQAHgOAMgGQANgHAOABQAeAAAVASQATATAAAcQAAAbgPAPQgOAOgYAAQgbAAgWgSgAgdgWQgHAIAAAKQAAAMAMAIQAQANAUABQAMAAAHgIQAHgGAAgLQAAgIgHgIQgGgIgNgEQgMgFgIAAQgNAAgIAGg");
	this.shape_17.setTransform(481.8,-155.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C4C4C4").s().p("AAQAfIAAgUIgwgLIgPAAQgEAAgCAAQgCACAAAHIABAKIgYgFQgCgIAAgHQAAgRAGgIQAHgHAMAAQAFAAAUAEIAuAKIAAgQIAYAFIAAAQIATAEIAWAjIgpgJIAAAUg");
	this.shape_18.setTransform(483.7,-171.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C4C4C4").s().p("Ag5AmIAAgeIAQADQgTgSAAgXQAAgPAJgIQAIgJAOAAQAHAAASAEIBBAOIAAAgIhFgOIgQgDQgFAAgEAEQgEAEAAAGQAAAEACAEIAFAHIAIAHQAEAEAHADQAFACAKADIA5ALIAAAhg");
	this.shape_19.setTransform(481.6,-183.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C4C4C4").s().p("AghBDQgYgMgOgVQgNgVAAgYQAAgXALgQQAKgQAQgGQAPgHAQAAQAOAAAPAFQAVAFAQAMQAQAMAJASQAKASAAAUQAAAfgTATQgTATggAAQgYAAgYgNgAgsgjQgLAKAAARQAAAMAJANQAJAMASAJQASAIAQAAQATAAALgLQALgKAAgQQAAgXgXgQQgXgPgaAAQgQAAgMAKg");
	this.shape_20.setTransform(484,-199.2);

	this.instance_6 = new lib.hdghd();
	this.instance_6.setTransform(0.7,-148.4,1,1,0,0,0,455.2,133.5);

	this.instance_7 = new lib.mdpach();
	this.instance_7.setTransform(56.5,43,1,1,0,0,0,56.5,43);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#E4E4E4").s().p("EhP/A/IMAAAh+PMCf/AAAMAAAB+Pg");

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E4E4E4").s().p("EhP/A/IMAAAh+PMCf/AAAMAAAB+Pg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.instance_7},{t:this.instance_6},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-514.1,-404,1030,808);


// stage content:
(lib.Conservationofmomentumandinelasticcollisions = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Main BG
	this.instance = new lib.bg();
	this.instance.setTransform(512.8,404,1,1,0,0,0,0.8,0);

	this.instance_1 = new lib.Brown_Ball();
	this.instance_1.setTransform(574.4,233.8);

	this.instance_2 = new lib.Green_Ball();
	this.instance_2.setTransform(90.5,233.8);

	this.instance_3 = new lib.Symbol4copy();
	this.instance_3.setTransform(554.7,598.9,0.84,0.84);

	this.instance_4 = new lib.Symbol4copy();
	this.instance_4.setTransform(357.9,598.9,0.84,0.84);

	this.instance_5 = new lib.Symbol4();
	this.instance_5.setTransform(512,758.4,1.25,1.25);
	this.instance_5.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,24);

	this.instance_6 = new lib.InstructionText();
	this.instance_6.setTransform(533.8,705);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_2,p:{scaleX:1,scaleY:1,x:90.5,y:233.8}},{t:this.instance_1,p:{scaleX:1,scaleY:1,x:574.4,y:233.8}}]},1).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2,p:{scaleX:0.475,scaleY:0.475,x:363.5,y:602.5}},{t:this.instance_1,p:{scaleX:0.475,scaleY:0.475,x:560.3,y:602.5}}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(509.9,404,1030,808);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;