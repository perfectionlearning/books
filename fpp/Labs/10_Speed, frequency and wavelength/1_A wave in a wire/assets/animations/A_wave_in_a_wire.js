(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 808,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Grass.png?1492181347890", id:"Grass"}
	]
};



// symbols:



(lib.Grass = function() {
	this.initialize(img.Grass);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1474,441);


(lib.Wings = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F1F36").s().p("AghAGQAhgKAigRQgqArgQAAQgKAAABgQg");
	this.shape.setTransform(-3,6.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0756B5").s().p("AgyAmQAGAJBfhJQhQBFgRAAQgEAAAAgFgAgsALQAngIAsglQgzAugaAAIgGgBgAgggHQAFAHA5gnQgqAkgOAAQgFAAgBgEgAgYgZQASADAMgUQgKAUgMAAQgEAAgEgDg");
	this.shape_1.setTransform(-3.6,1.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1075FB").s().p("AAqgOQAAAEgEACIgBABIhFAjgAAwgbQABAGgHADIhaAug");
	this.shape_2.setTransform(0,2.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#022B3D").s().p("Ah0A2IAJgGQAJgIAogwIgJAQQgSAdCwhtQAIAAAHgDQAKAPAVgJQgaAWgdAJIgHACIgCABIggASQgjARggAKIgMAEQgtAhg1AdQAPgLAFgLgAACgCIBHglIABgBQAFgCAAgEgAgLgCIBZgwQAHgDgBgGg");
	this.shape_3.setTransform(-3.6,5.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#082F50").s().p("AhOA4IAJgRIAIgJIgCgHQAAgFACgFQADgGAFgFIAIgKIAAAAIAAAAIAJgOQARAIAPgZQgOATgSgCIAIgIIAfgfQgPAbAUgPQABAGARADQALAIAFAAQALAGAEAAIAGgBIAFACIAMABQiMBWgRAAQgFAAAEgGgAAogXQhgBIgGgIQACAVBkhVgAg3AOQAZAGA5gzQgsAlgmAIgAASglQg5AmgFgFQAGAOA4gvg");
	this.shape_4.setTransform(-2.5,0.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#093C82").s().p("AACAbQgEACgIAAIgMgBIgFgCIgGABQgEAAgLgGQgFAAgLgIQgRgDgBgGQgWAPARgZIACgCQAQgPAQgMIgDAGQgJAXAhgXQAAAdAXgYQgPAUAcgGQACACACABQAJAGARgPQAGAKARgIQgFAOAsgPQgFAIgIAHIgTAUIgBABIgDACQgFACgCgMIgTATQgJAEgGAAQgLAAgGgJg");
	this.shape_5.setTransform(6.7,-4.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#014AB1").s().p("AgNAmQgDgBgBgCQgeAGAPgUQgYAaAAgfQggAXAIgXIAEgGQAVgOAUgMQAigTAbgEIACAAQAbgCAPANQAPANgDAUQgBALgJAOQgsAPAFgOQgQAIgHgKQgKALgIAAQgDAAgCgCg");
	this.shape_6.setTransform(9.1,-9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.3,-13.3,34.8,26.8);


(lib.Tween13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BBB200").s().p("AAXBwIAAgFIABAKIgBgFgAgXhxIAAgDIABADg");
	this.shape.setTransform(-7,-13.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#162B58").s().p("AAXBoQgog8gWhLIgSg+QAFAJAEABIAJAeQAWBMAoA8QAdArAFgTQADAbgIAAQgJAAgUgegAAOAyQgLgTgEgcIgDgTQgEgEgGgLQgLgSgLghIgGgWIAAgDIgBgNIgBgLQgBgKAMAiIAQAwQAFAOAEAGQAGAJgCgaQgBgagGgWIgEgTIAGAJIAHAWQAIAhgBAYQAAARgDAEQAFAZAIASQAIATAGgBQAHgCABgVIABgLIAAAAIAEARIAAAEIgBAMQgCAVgIABIgBAAQgHAAgJgSg");
	this.shape_1.setTransform(3.9,25.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#284CA2").s().p("AAWB0Qgog8gWhMIgJgeIABAAQAGgBAAgUIAFAWQALAhALAQQAGALAFAEIACAVQAFAcAKATQAJATAJgBQAHgBACgVIABgMIABAAQALAxACATIABAFQgBAFgEAAQgJAAgUgdgAAOA+QgIgSgFgbQADgEABgPQABgYgJghIgHgWQADADADAAQAFABADgXIABgUQACAOAHAbQAJAnAFAdQACAVAIAiIAAACIgBAAIAAALQgCAVgGACIgBAAQgGAAgIgSgAgJgGQgEgGgFgOIgPgwQgMgiAAAKQgCgOgEgPIgEgRQAKAPAJAAIAFgBQAFARAFAOIAFAJIAFATQAFAWACAaQABATgDAAIgDgCg");
	this.shape_2.setTransform(4,22.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#015422").s().p("AgJBmQgDgBgFgJIgBgDIgCgFIgCgKIAAgBQAIASACgMQACgNgCgNIgIgkQgFgVgEgNQgKgYgFgWIgBgEQACgFAAgIIgBgJIAOAoQALAgAEAFIAFAJQADAEAEAFQADAFABgHQACgGgEgtQgFgtABgJIADALIADAJIABAHIAKBGQABAMgBAGIAGARQAGANAFAFQADAEACgBQAHABADgXIAAgHIACAIIgCAUQgDAYgHgBQgCAAgDgEIgGgJIgFgJQgGgNgFgRIgEABQgHAAgKgQIADARQAEAQADANIABAMIABAMIAAADQAAAVgFABIgCAAg");
	this.shape_3.setTransform(0,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00A34C").s().p("AgKBnQgFgXgHgaQgOg2gOgbIgGgOQAFAFAGABQAKABACgDIABAEQAFAWALAWQAEANAFAXIAHAkQAAANAAANQAAAFgCAAQgDAAgFgLgAAvBSQgDAAgDgDQgFgFgGgNIgGgRQACgHgCgOIgKhDIgBgHQAFAJAGAAQAMAAAIggIACAAIAAARIALBuIAAAAIgBAHQgDAWgGAAIAAAAgAAHAkQgEgFgCgGIgEgKQgDgEgMgfIgOgnIgHgrQAIAUAKAAQAMAAAJgfQAAAWAFARIAAADQgBAJAGAtQAFArgCAHQgCAFgBAAIgDgCg");
	this.shape_4.setTransform(-1.3,3.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7E7201").s().p("AAAACIAAgDIAAADg");
	this.shape_5.setTransform(3.3,-6.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B9AF00").s().p("AgaBmQgGgBgFgFQgGgSgHgXIgHgeQgEgXgBgWQABAQALAlQAKAnAHAKQAFAJAEgEQAEgDAAgKQgDgQgCgXIgCgbIgDgTQgFAHgFgBQgOAAgJgWIgBgVQAKAaAIACQAKADAEgOQADgOABgaIACgeQADAGAEAEIgCAqQgCAQgCAKQAAAPADAIIAHAXQAFAQAKgCQAIgBAIgcIgBgTIABgUIADABQACAAADgCIAAAHIAAAgQABASAEAQQADAQADAIQAEAJAIAAQAIAAAJggIABAAIAAAPIgBAHQgJAfgMAAQgFAAgGgJIgEgJIgEgKIAAgDQgFgSgCgVQgJAegKAAQgKAAgIgTIAIAqIAAAFIAAAFQAAAHgBAFQgCACgGAAIgFAAg");
	this.shape_6.setTransform(-3.2,-10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFF004").s().p("AghBxQgGgKgKgnQgLgngBgQIgBgHQAIAWAOAAQAGABAFgHIADAVIACAbQABAXAEAQQAAAKgEADIgDACQgDAAgEgHgAAkBgQgEgIgDgQQgDgQgBgSIAAgiIAAgFQAGgGAGgYQAEgRACglQAIgEAGgLQAEgIADgLIABAdIgBBTIABAwIAAAZIAAADIgBAEQgIAggIAAQgJAAgDgJgAgOA2IgIgZQgCgIAAgPQACgIABgQIADgqQAEADAFAAQAFAAAEgDIACAdQAHAbAIAEIgBASIABAVQgIAcgJABIgBABQgJAAgEgPgAgtAJQgIgCgKgYIgBgTQgBgtAFgeIABAAIAAABQgBALABAJQACAQAGABQAHABAKgOIACgEQACAJADAIIACADIgCAeQgBAagEAOQgDAKgHAAIgDgBg");
	this.shape_7.setTransform(-3.3,-13.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E11F27").s().p("AAVB3QgFAAgBgDIgGgVQgDgPgCgTIAAgBIABAAQAFgKACgNQAIANAMAAIAFgBQgCAagEASQgFAbgFAAIAAgBgAgTA8QgEgFgDgJIgDgNQACgIACgIQAFgFAFgLIAEgNQAKAKAFACIAAAOQABAUgDAMQgCAKgEAEQgEAEgDAAQgEAAgEgEgAg5AjIgDgXIAAgBIAEgMIACgHIAEAJQAIASAKAAIABAAIgBACQgCAFgKAOQgEAGgDAAQgEAAgCgLgAAMAaIAAgEIAAgIQAAgIgCgGQAHgCAFgMIAFgNQADADAEAAQAKAAAGgLQADgEABgFQAFAVACAXIgGATQgGAPgIAGIgEABIgFABQgLAAgJgQgAgygSIAAgBQAJgaAJgVIACAIQAFALAHAAQADAAACgBIAAAAQAAARgDAMQgEAMgFAEQgEADgDAAQgKAAgIgSgAAHgNIgCAAQgFAAgJgKIAAgQIAAgLIAAgCIAAAAIAAgBIAEgFQAEgJAAgNQABAHACAFQAFAHAGACIAFABIADAAIAAAGQAAATgCAFQgFAMgGADIgBAAgAAcgjIABgOIgBgNIAEgGQAHgKAAgNIAIAUIAFAUIgDAGQgGALgJAAQgDAAgDgBgAgbhIIgBgFIABgCQAGgOAHgJQAAADADADIAFAFIgDASIAAABIgDAHQgDAIgDAAQgFAAgEgPgAAPhFQgFgCgDgKIgDgJQAFgBADgFQAGgHAAgKIgBgEQAKAEAJAOQgCAKgDAIIgDAIIgDADQgDADgDAAIgEgCgAgChiIgDgEIgEgFIAAgCQAJgKAJAAIAEABIgDALQgEAIgDABIgDABIgCgBg");
	this.shape_8.setTransform(-3.1,-26.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B70000").s().p("AAPB+QgIgEgGgbIgDgeQgEADgEAAQgFAAgEgDQgEgDgEgHIgBgCQgEgIgCgJIgCADQgKAOgGgBQgHgBgBgQQgCgJABgLIAAAAIAAgDIABgHIADAXQADATAKgOQAKgOACgGIABgCIgBABQgKAAgIgQIgDgMIADgKQAIASAKAAQADAAAEgCQAFgFAEgLQADgMABgRIAAgBQgDACgDAAQgHAAgFgLIgCgIIAEgMIABAGQAEAOAFAAQAEAAADgHIACgHIABgCIACgSIgFgEQgCgDgBgEIAFgGIABABIADAGIAEAEIABABIADgBQAEgCADgIIADgLIAEABIABAFQAAAKgGAHQgDAEgEACIACAIQAEAKAEADIAEABQADAAADgDIADgCIADgJQADgHACgKIADAHQAAAOgGAKIgFAGIABAMIgBAOQADACADAAQAJAAAHgMIADgGIABAHQgBAFgCAEQgHAMgJAAQgFAAgDgDIgEAMQgGAMgHACQACAIABAHIAAAHIAAAEQAIARAMAAIAEgBIAEgCQAIgFAGgPIAGgSIABANQgCAKgFAJQgGALgIADQgCAlgEASQgFAYgHAFQgCADgDAAIgDgBgAAFA2QABATADAOIAGAWQABACAFABQAFAAAFgaQAEgTACgZIgEAAQgMAAgJgNQgCANgFALIAAAAIAAABgAgPgEQgFAJgFAEQgBAJgDAIIADAMQAEAKAEAEQADAEAEAAQAEAAADgDQAEgFACgKQAEgLgBgUIgBgPQgFgCgJgKIgFAQgAgFhBIgDAFIAAAAIgBABIABACIAAAKIgBAQQAJAKAFAAIACAAIABAAQAHgCAEgMQADgGgBgTIAAgGIgDABIgFgBQgGgCgFgHQgCgGgBgHQAAANgEAKg");
	this.shape_9.setTransform(-3.1,-26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.8,-38.8,19.6,77.7);


(lib.Tween7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C7AEB").s().p("AgzBXIAAgPQAWhGAshMQADAEAIABQAKgDAHgVQADAPAGgFQgTAigMAuIgCAHQgfBSgOABQgGAHgGAAQgGAAgHgHg");
	this.shape.setTransform(-2.4,4.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#09418B").s().p("Ag5BiQANgBAhhRIACgJQANgxApgyQADABALgJQgvBIgfBaQgQAngPAAQgEAAgDgDg");
	this.shape_1.setTransform(0.8,3.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#014AB1").s().p("AgTAIQgGAGgDgOQgHAUgKACQgIAAgDgEQgFgIAPgWIAGgOQANgvAyAEIAhgSIACgBIgCACQgfAcgPAbQgIASACADQgnAwgPAzQAMgvATgig");
	this.shape_2.setTransform(4.9,-4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-13.8,18.4,27.7);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#969696").s().p("AALAKQgEgIgHgCQgUgLAAgNQAIgeAPALQAJAGAFALQAEAKAAANQACAbgFAXQABgYgIgNg");
	this.shape.setTransform(1.9,-2.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0A0A0A").s().p("AgBApQgLgagPgDQgZgGABgPIABgHQACgLAEgEIAMgQIAwgsQAtAwgMA6IgFASQgKAdgVAeQgHgggHgTgAgCgyQAAANATALQAIAEAFAIQAHANAAAWQAEgVgBgdQgBgNgEgKQgEgLgKgGQgEgDgEAAQgLAAgEAWg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5.2,-9.3,10.5,18.6);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.Symbol2copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AB8DZIgBAAIh0AAQALgJANgNQBUhTABh3QgBh3hUhVIgFgFIBhAAIABAAIADAAQBlAAgBBkIAADpQABBkhlAAgEg/+ADZIAAmxMA6OAAAIgGAFQhUBVAAB3QAAB3BUBTQALAKAOAMgEA85ACdQAxhGABhZQAAhfg4hKIDMAAIAAFIgEAzrACdQAyhGgBhZQAAhfg2hKICDAAQg4BKAABfQABBZAxBGgEAqvACdQgMAAgLgCQhNgKAAhYIAAiAQAAhYBNgLQALgBAMAAIBsAAQg4BKABBfQgBBZAyBGg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-409.6,-21.7,819.2,43.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DADBDE").s().p("AgDAIQgCgDgBgFQABgEACgDQACgEABAAQACAAADAEQACADAAAEQAAAFgCADQgDAEgCAAQgBAAgCgEg");
	this.shape.setTransform(-19.3,-4.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#171A11").s().p("AgKAaQgFgLAAgPQAAgOAFgLQAFgLAFAAQAGAAAGALQAEALAAAOQAAAPgEALQgGALgGAAQgFAAgFgLgAgHgOQgCAEgBAFQABAFACABQACAEACAAQADAAABgEQACgBAAgFQAAgFgCgEQgBgDgDAAQgCAAgCADg");
	this.shape_1.setTransform(-18.9,-4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#274426").s().p("AgQAnQgHgQAAgXQAAgWAHgQQAHgRAJAAQAKAAAHARQAHAQAAAWQAAAXgHAQQgHARgKAAQgJAAgHgRgAgMglQgFALAAAQQAAANAFALQAFAMAGAAQAFAAAFgMQAFgLAAgNQAAgQgFgLQgFgLgFAAQgGAAgFALg");
	this.shape_2.setTransform(-18.7,-3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#DADBDE").s().p("AgEAIQgBgDAAgFQAAgEABgDQACgEACAAQACAAACAEQACADAAAEQAAAFgCADQgCAEgCAAQgCAAgCgEg");
	this.shape_3.setTransform(20.8,-4.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#171A11").s().p("AgKAaQgFgLAAgPQAAgOAFgLQAFgLAFAAQAGAAAFALQAFALAAAOQAAAPgFALQgFALgGAAQgFAAgFgLgAAAgOQgBAEAAAFQAAAFABABQAAAEAEAAQACAAACgEQACgBAAgFQAAgFgCgEQgCgDgCAAQgEAAAAADg");
	this.shape_4.setTransform(20.4,-4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#274426").s().p("AgQAnQgHgQAAgXQAAgWAHgQQAHgRAJAAQAKAAAHARQAHAQAAAWQAAAXgHAQQgHARgKAAQgJAAgHgRgAgIglQgFALAAAQQAAANAFALQAFAMAFAAQAGAAAFgMQAFgLAAgNQAAgQgFgLQgFgLgGAAQgFAAgFALg");
	this.shape_5.setTransform(20.1,-3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B5B7B6").s().p("AgpAuQgCgDAJgQQALgQARgRQAPgUAOgLQAPgLADADQAEADgKAQQgKAQgRASQgQATgPALQgLAJgEAAIgDgBg");
	this.shape_6.setTransform(-6.6,-9.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#333333").s().p("Ag6AxQgHgLgGgOQgUhEATgvQAdhGA0AGQA2AGAPBEQAIApgIArIgMAeQgTAwgwBLQgeg9gbgug");
	this.shape_7.setTransform(0.2,16.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AhyA3QgehgAuhCQAthCA1ABQAzAAAvBEQAvBDgeBWQgVA9gQAqQAIgsgIgpQgPhDg2gFQg0gGgdBEQgTAvAUBGQgVgtgWhKgAgqiPQgPALgRAUQgRATgLAPQgJARADADQADADAPgLQAPgLARgUQARgTAKgQQAKgQgDgEIgCAAQgFAAgLAJg");
	this.shape_8.setTransform(0.2,1.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhFg2YAAAAABADADAEYABACABADACADYACADACADACAEYADADADAEADAEYADAEADAEAEAEYAEAEADACAFAEYAEAEAEAEAFAEYAEAEAFADADADYACACADABACACYACABADABACACYAFACAFADAEACYAFACAEACAEABYAIAEAIABAFABYAEABADABAAAAIAAAAYAAAAgCgBgFgDYgCgBgDgBgDgCYgDgBgEgCgDgCYgEgCgEgCgEgDYgEgCgFgDgEgDYgCgBgDgCgCgBYgCgCgCgBgCgCYgFgDgDgDgEgEYgEgEgEgDgFgCYgEgEgEgEgEgDYgDgEgEgDgDgEYgEgDgDgEgDgDYgDgDgCgDgDgCYgCgDgCgCgCgCYgDgEgCgCAAAAIAAAA");
	this.shape_9.setTransform(-17.8,20.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("Ag5hFYAAAAAAACACAFYABADABADABADYABADACAEABAEYACAEACAFADAEYADAEACAFADAFYADAEAEAFADAFYAEACAEAFADAEYAEAFAEAEAEAEYADAEAEAEAEAEYAEAEAEADAEADYAEADAEADADADYAOAKALAHAAAAIAAAAYAAAAgJgJgMgMYgDgDgEgEgDgDYgEgEgDgDgEgEYgEgEgEgEgEgFYgEgEgBgEgEgEYgEgEgEgDgDgEYgEgFgDgEgEgEYgDgFgDgEgDgEYgDgEgCgEgCgDYgDgEgCgDgCgDYgCgEgBgCgBgDYgDgEgBgCAAAAIAAAA");
	this.shape_10.setTransform(-18.3,14.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AghAUYAAAAAFgDAGgFYADgCADgDAEgDYABgBACgCACgBYACAAACgBACgCYABgBABgCACAAYACgBACgCACgBYACAAACgBACgBYACgBACAAACAAYACgBACAAABAAYACAAABgBABAAYACAAACAAAAAAIAAAAYAAAAgBgBgDgBYgBAAgBgBgCAAYgBgBgCAAgCAAYgCAAgDgBgCABYgCAAgDAAgDABYgCABgDABgBABYgCABgCACgCABYgFADgEAEgEADYgDACgDAEgCAEYgEAGgCAFAAAAIAAAA");
	this.shape_11.setTransform(-20.3,-11.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AArgwYAAAAgGAGgHALYgEAFgEAFgFAHYgFAGgEAHgFAEYgDADAAADgDADYgDADgCADgDADYgCADgDADgDACYgCADgCACgDACYgCACgCACgCACYgCABgCABgBABYgDADgCABAAAAIAAAAYAAAAACgBAEgBYABAAACgBADgBYACgBADgCADgBYACgCADgCADgCYADgCADgDADgCYADgDACgDACgDYADgDADgEACgDYAGgGAEgGAFgGYAEgHADgHADgFYAFgMADgIAAAAIAAAA");
	this.shape_12.setTransform(22,17.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAihMYAAAAgBACgBAFYgBAFgBAHgDAHYgBAEgBAEgBAFYgBAEgCAFgBAEYgCAFgBAFgDAFYgCAFgBAEgDADYgCAFgCAFgCAFYgCAEgBAFgDAEYgCAFgCAEgDAEYgCAEgDADgCAEYgEAHgEAFgDAEYgCAEgCACAAAAIAAAAYAAAAACgCAEgDYADgDAFgFAGgGYACgDADgDADgEYADgEACgEACgEYACgFAEgEACgFYADgFACgFADgFYACgFACgDACgFYACgFABgFABgFYABgFACgFAAgFYABgEABgFAAgEYABgIAAgHAAgFYAAgFAAgCAAAAIAAAA");
	this.shape_13.setTransform(22.9,9.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgegKYAAAAABAAACgBYABAAACAAABAAYACgBABABACAAYAAAAABAAABAAYABAAABAAABAAYACABABAAACABYACABACABACABYACABAAABABABYACABACACACAAYACABACABABABYADADAEADACACYAGAFAEADAAAAIAAAAYAAAAgBgFgEgGYgCgEgDgDgDgCYgBgCgCgBgCgCYgCgCgCgCgCgBYgCgBgDgCgCgBYAAgBgDgBgCAAYgDgBgCAAgDAAYgBAAgBAAgBAAYgBAAgBABgBAAYgCABgCAAgCABYgBABgBABgBABYgBABgBABAAAAIAAAA");
	this.shape_14.setTransform(20.5,-11.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F5F5F5").s().p("AjaDKQhWhZglhzIAGgMIALgWQAOggAGgZQADgQAFgeIAYgcQBEhSA2gdQA2geBNgBQBKgBBKAcQBCAaBwBnIAAADIABAHQAEAcAFAWQAHAeASAnIgBAKQgTB5hUBbQhoBwh8AAQh6AAhqhsgAhoC8QhUgbg5hUQA5BUBUAbgACyCdQArgTAshQQgsBQgrATgAh4CPQhbhHgbhHQAbBHBbBHgADEBpQA/hFAGhUQgGBUg/BFgAjpifIACgEIABAAQAagiAbgBIABAAIAAAAIALABIgLgBIAAAAIgBAAQgbABgaAiIgBAAIgCAEgADvikIgBgBIgBgBIgBgCIAAAAIgBgBIgBgBQgWgcgTgCIgDAAIAAAAQgHAAgIAFQAIgFAHAAIAAAAIADAAQATACAWAcIABABIABABIAAAAIABACIABABIABABIAAAAg");
	this.shape_15.setTransform(-0.2,7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#0066CC").s().p("AksBwIABgIIAAgBIABgDIAAgEIADgcIAJgQQAyhXBFgmQBcgwBYgBQBbAAA/ApQA+ApA4BQIAEAFIAIANIAFA0QhvhohDgYQhJgchLABQhMACg3AdQg2AbhEBSIgYAcIABgLg");
	this.shape_16.setTransform(0.3,-19.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#AC331E").s().p("AkkBeIAAgFQACgeALgdQATgtAjgeQAygpA2gUQA2gTBAgBIAZACQAfAFAfAHQBhAZAqAvQAfAjALAOQATAeAIAfQACAMABANIABAWIgIgNIgEgFQg3hSg+gnQg/gphbAAQhZABhbAwQhFAkgzBZIgJAQIAEghg");
	this.shape_17.setTransform(0.3,-25.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.5,-38.1,68.6,76.2);


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


(lib.MCs3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD46B").s().p("AiTCNQgsgmgrgvQgGA1gXgHQgHgCgHgGIgDgDQgvgvgjgqQgigngWgjQC/BDgWg9QBKAhAcgpQBIA/AogXQAJgFAIgKQB/AchBhZQBnBwABiEQCOBhgmhhQgHgOgIgNQBGA1BIA/IAJAJQBIB1hdhEQgFAdhNANQguAjgWgCQgzAZgOAAQgPABgMgCIgYAHQgcAHgZAAQggAAgagMQgaAogtAAQgdAAglgRg");
	this.shape.setTransform(-29.3,-20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("AFLE8IgzgRQiYg1iThMQhHgkhHgqIgCgBIgJgFIgfgJQh9gohwheQBdAqArhBQAcALAhAAQAZAAAbgGIAZgIQAMACAOAAQAPAAAzgaQAWACAugiQBLgNAEgdQBdBDhHh3QBGA/BIBHIAkAlIAlA9IABABIABAAIAkAwQAWAZAKAXQALAXgCAXQgBAOgGAPIAgAnQCyDYAoAkQATASASAHQAWAzBDAtQjnh/jEiMgAGDDcQgcAjmolBQG7F5AJhbgAi4AYIGODUImqj4QgBAZAdALgAipBGIAGACIEyCkIlIjBQgBASARAJgAFkBlQiogkjEinQD8DlBwgagAE1ANQgZAikBitQD+DRAchGgAERg+QhPALg/hWQBEBvBKgkgAm4kTQgdAqhJghQAWA9jAhEQgkg6gHgvQgOhkBCg4QBCg5B3ALIAKABQB+ANCTBWQBZA1BbBGQAJANAGAOQAnBhiPhhQgBCGhmhyQBBBZiCgdQgIAKgJAGQgKAFgNAAQgkAAg0gug");

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F0000").s().p("AiYh0QGoFCAcgkQgCASgSAAQhMAAlkkwgAkPgYQgdgLABgbIGqD4gAj6AXIgGgDQgRgIABgQIFIC+gAhfiYQDECoCoAjQgMADgNAAQhxAAjijOgAg6ivQD/CuAZghQgHARgVAAQg/AAi9iegAAsi7QA/BWBPgLQgSAJgSAAQg2AAg0hUg");
	this.shape_2.setTransform(8.7,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.8,-58.3,151.8,116.7);


(lib.MCs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#850000").s().p("ACsCNIgygRQiWg1iVhKQhIgkhHgpIgCgBIgJgGIgfgJQh8gnhxhhQBeArArhCQAcAMAgAAQAZAAAcgHIAYgIQAMACAPAAQAOAAAzgaQAWADAugjQBNgNAFgdQBbBEhGh4QBEA/BIBHIAlAlQhPALg+hWQBDBvBKgkIAlA9IAAABIABABIAlAyQAVAYALAXQAKAXgBAXQgBAPgHAOIAhAmQCyDXAoAlQATARARAIQAXAyBDAtQjnh+jFiNgADkAtQgbAjmolBQG6F6AJhcgAlWiVIGODSImqj4QgCAbAeALgAlHhnIAGADIE0ChIlKi/QgBATARAIgADFhIQiogjjDiqQD7DoBwgbgACWifQgZAhj+ivQD7DTAchFg");
	this.shape.setTransform(15.9,17.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BF0000").s().p("AiTCNQgsgmgrgvQgGA1gXgHQgHgCgHgGIgDgDQgvgvgjgqQgigngWgjQC/BDgWg9QBKAhAcgpQBIA/AogXQAJgFAIgKQB/AchBhZQBnBwABiEQCOBhgmhhQgHgOgIgNQBGA1BIA/IAJAJQBIB1hdhEQgFAdhNANQguAjgWgCQgzAZgOAAQgPABgMgCIgYAHQgcAHgZAAQggAAgagMQgaAogtAAQgdAAglgRg");
	this.shape_1.setTransform(-29.3,-20.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF2525").s().p("AB3BoQGqFEAbgkQgBASgSAAQhMAAlmkygAAADEQgcgLACgbIGqD6gAAVD1IgGgDQgPgIAAgSIFJDAgACwBEQDFCqCoAjQgLADgNAAQhyAAjjjQgADVAtQEACuAZghQgGARgVAAQg/AAi/iegAE8AhQBABWBPgLQgSAJgSAAQg3AAg0hUgAj/hmQgcAphKghQAWA9i/hDQglg7gGgvQgOhkBBg4QBCg4B4AKIAJABQB+AOCUBWQBWA1BcBFQAIANAHAOQAmBhiOhhQgBCGhlhyQA/BZh/gcQgIAKgJAFQgLAGgMAAQgkAAg1gug");
	this.shape_2.setTransform(-18.5,-17.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.8,-58.3,151.8,116.7);


(lib.MC123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#561600").s().p("ACtG4QiSmijIlJQAuAsALgKQALgLgkhSQhCh8iFh9IACgCQBGApBIAlQEyE+gHi+QAnAFAmAfQA6B+iBgdQBEBsgZAkQgMARgjgBQgrgHgdhhQgNBGgZgaQBPCcA1DRIAKApQCQFyA8AGQgRAOgRAAQhAAAhGiyg");
	this.shape.setTransform(-7.5,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF4400").s().p("AB3GPQg8gGiOlyIgKgnQg1jUhRibQAbAaAOhGQAcBhAsAHQAiAAAMgRQDJFgBeE/IAABEQgbAdgbAAQgbAAgbgdg");
	this.shape_1.setTransform(14.7,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.6,-62.6,79.1,125.3);


(lib.MC12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BF0000").s().p("AB3GPQg8gGiOlyIgKgnQg1jUhRibQAbAaAOhGQAcBhAsAHQAiAAAMgRQDJFgBeE/IAABEQgbAdgbAAQgbAAgbgdg");
	this.shape.setTransform(14.7,19.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#430000").s().p("ABZEdQiQmgjJlLQAtAsALgKQCyDnBBDlIAKApQCQFyA8AGQgQAOgSAAQg/AAhHiyg");
	this.shape_1.setTransform(0.9,14.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#004B8E").s().p("Agwg5QAMgMgkhRQhCh9iFh8IABgDQBHAqBIAkQEyE/gHi+QAJAEA9AdQBUEgiUi8QBEBqgZAjQgMARgjAAQgsgHgchfQgNBEgbgaQBRCbA1DUQhDjoixjkg");
	this.shape_2.setTransform(-14.4,-22.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.6,-62.6,79.1,125.3);


(lib.mc_01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1871AD").s().p("ABRDKQgKgMgOg5QgMgzgLhDIgIgzIAAgBIAIgzQALAjAMAaQAPAeAKAEQAHA3ADAuIABAZQACBHgKAAQgCAAgCgCgAhcCFIACgaQACgtAHg3QAJgEAPgeQANgcAMgmQAAAHACAfQgCAdAAAgQgMBIgNA3QgOA5gJAMQgCACgCAAQgLAAADhHgAgtjLIAAAAIAFABIAXABIAAAAIAAAAIAAAAIgIAAQgNAAgHgCg");
	this.shape.setTransform(18.7,21.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0D3858").s().p("AgZFOQgDg+gDinQgCiGABgeQAAhIABhAIAAAFQADBRADAeQAHBIAKAAQAIAAANg/QAHgiAFg2IABAKIAHBsQgDBugEBYQgGB3gHBKQgNCCgIAAQgKAAgHiTgAgZkPQgDgQgDgqIAAgEQgCgfABgHQAAgtAHgiQADgSAEgLIABAAIAPAAIALAAIgGAAIAGgBIAAABIAAAAQACAZAHAdIAIAgIAHAbIgHAzQgGAegHASQgNAhgIAAQgKAAgHglg");
	this.shape_1.setTransform(18.7,49);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0D3A59").s().p("AB7CuQgQhQgPhiQgDgtgHg3IADABQAKgBgCglQgDgkgOg1QgMgqgNgfIgFgOIABAAIAAAAIAEAAIAHAOQAnBRAjA5IAHAMIACADQAKApAGAjIAHArIABACQACAbgGAAQgKAAgchGQgQgngPgwQAUBOAUBCIAJAcQAKBWAGBHQAOCSgKACIAAAAQgKAAgciQgAigE+QgKgCANiSQAHhHAKhWIAJgcQAThBAVhNQgQAvgPAmQgcBGgKAAQgHgBAEgcQABgRAFgaQAHgjAKgpIACgDIAHgMQAkg8ArhVIADgGIAAgBIAEAAIAAABIgBABIgFAMQgNAfgLAqQgOA1gDAkQgDAlALABIADgBQgHA2gCAtQgRBigPBRQgbCQgLAAIAAAAg");
	this.shape_2.setTransform(18.7,32.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AA6ESQgNhrgLiKIgIhrIAAgJIAAgFQAFgrADg3QALBCANA0QAOA5AJAMQAJCcADB2QADCTgKABIgBAAQgKAAgRiRgAhUGjQgLgBAEiTQABh2AKicQAKgMAOg5QANg3AMhIQgBANACA+QgBBAAABGQgMCWgNByQgSCRgKAAIAAAAgACNhPIgJgdQgThCgVhOQAPAvAQAoQAcBGAKgBQAGAAgCgbIABAHQAbCPgJACIgBAAQgJAAghhsgAi2AdQgLgCAciPIACgJQgEAdAHAAQALABAbhGQAPgmAQgwQgVBOgTBBIgJAdQghBsgJAAIAAAAgABSjGQgKgEgOggQgNgagLgjIgIgcIgIgfQgGgdgCgZIgBAAIAAgBIAmgCIAAABIgBAAIAGAOQAMAfAMApQAOA1ADAlQADAlgKAAIgEgBgAhbjqQACglAPg1QALgpAMgfIAFgMIABgCQAIADAUgBQgEALgEASQgGAiAAAtQgMAmgNAcQgPAggKAEIgDABQgLAAAEglgABPmdIgFABIgJAAIAOgBgAhMmdIgXgEIAAgBIATAEIAJACIgFgBgABkmhIAAAAIACADIgCgDg");
	this.shape_3.setTransform(18.7,42);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0A6FFD").s().p("AgZCpQgDgfgChRIAAgEQgCg8ABgOQAAgiABgdIAAAFQACAqADAPQAIAjAKAAQAIAAANgeQAHgTAFgeIAAABIAIA1QgDA1gFArIAAAGQgGA1gGAiQgNA/gIAAQgKAAgIhHgACNhBIgBgDIgIgLQgjg6gnhRIgGgOIANgBIAJAAIAFgBIACAAIAAAAQANgCAFgCIABgBIACADIAHASQAjBQAWA3QAbBGgJABIgBAAQgJAAghg1gAi2gMQgLgBAchGQAYg/AqhdIAAAAIAXAFIAFAAIACABIAUACIAAAAIgDAGQgrBVgkA9IgHALIgCADQghA1gJAAIAAAAgAgBjmIgQAAIAAAAIAKAAIAKAAIABAAIAFAAg");
	this.shape_4.setTransform(18.7,24.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.3,97.2);


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
	this.shape_12.graphics.f("#BD7607").s().p("AAQaJIhVAAMAAAgz/QAngRAegBQAfgBAmASIABAAMgABA0Ag");
	this.shape_12.setTransform(21.6,348.4);

	this.timeline.addTween(cjs.Tween.get(this.shape_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.6,181.1,29.1,334.7);


(lib.Elewire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(3,1,1).p("EhFSAAAMCKlAAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-445,-1.5,890.1,3);


(lib.Symbol4copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AACCRIgCAAIh6AAQhlgBABhjIAAhYQgBhlBlABID1AAQBlgBgBBlIAABYQABBjhlABg");
	this.shape.setTransform(167,22.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(144.6,8.3,44.8,29);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#AC331E").ss(1,1,1,3,true).p("AhVDEQARgNAXgOQBfg/DehiQAogPArgTQAmgQApgRAlBhMICeglAjSgCIB/gqAmxidQBugQDwgWAhzCFIC7hnAisBSICmhT");
	this.shape_18.setTransform(8.9,-16);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8C1218").s().p("AJ9HCQA4hQgRlpQgLFZhLBPQg+gVgogbQCJh5AMjlQg0D9iDBAIAAAAQgLADgKgEQgNgEgOgRIgKgKQBohOBfjmQhtCtiDB4QgWgLgFgYIgCgaQCChZBOifQhhCLiRBTQgggQAJgbIAEgLQBQgiA1g7QAPgRANgTQATgdAOggQgPAUgSAQQgiAigpAbQg6AmhKAbQgDgDgBgDQgBgEADgKIACgGQAGgPgDgFIgBgBIAigSQBrg6Alg0QhMBAh/AuIgcAKQgOAAgJgKQgKgKgEgVIDpjFQAYAhAmgdIAFgFQAcgZAngYQATgMAWgMIADgCQBhB1AgA8QAMAUARAlQAbDdABDWQgHAcghAAQgXAAgkgOgAgwAlQgPgEAngkIASgQQgoAUgrAHIgZADIgPAAQgjgBAlgZIAmgbIAGgEQAXgQAXgUQgaAOgaALIgnAQQgmANgvAJIgUAEQg7AKBfhAIAugeIA5giQg9AbhMAYQhMAXg0gGIgEAAIgFgCQgZgNBug8QBVguAqgVIAUgKIAEgDQABgDgyAQIgUAGIgEABIgFABIhBATQhDATg5AKIgdAEIgeACQhIAIgagFIgCgBIgIgCQgMgGALgNQAQgQA3gUIATgHICRgzQBhgigHgBICegmIieAmIgDAAIgBAAIgBAAQgVADgeAIQgOAEgbADQgiADg4ACIgeABQhPACgrgFQgbgDgRgGQgOgFgIgGIgCgCQgKgMAxgOQAZgIAogIICeggIAOgDIASgEIgDABQguAFh6ABIgtAAQhegEg0gVQhBgaClgVQClgVCfgCIEgAyQjwAWhuAQQBugQDwgWQgTAQh1AnQgSAPCagkQAZgChQAjQgaALACAEQACAJB+gZQAdgIhNAjIgJAEQhWAmCsgqIAKgDQACAAAAABQABAAAAAAQABAAAAABQAAAAAAABQgDAGgpATQg3AbAIAGQAlABBlgZQAOACgpAeQgqAeAFAFQALABBPgUQBIgTg7AyIgMAKQgJAHgCAEIi7BoIC7hoQgLAWCYgrQA7gRBUgbIBOgaIhOAiIhUAkQjeBihhA+QgXAPgOANQAOgNAXgPQBhg+DehiIBUgkIBOgiQgkAVgqAdIgdAUQhyBQiUB/QgIgBgZABQgYACg3ARIgIACQgYAJgRAEIgFABQgNACgHAAIgFAAgAheiFICkhWgAiEjcICAgqgACWi6IAAAAgAIAkVIAAAAgAgFmdIAAAAg");
	this.shape_19.setTransform(1.1,5.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#7A1015").s().p("ACiDkQBKhOAMlXQAQFmg3BQQgUgIgbgJgAAaCUQCDhBA0j7QgNDjiIB5QgVgPgNgRgAgoBsQgTgBgMgGQCAh3BuisQhfDjhmBPQgHgHgDgBgAhlAmQgBgNgGgCQgQgEgKgFQCPhSBgiMQhOCgiABXIAAgBgAiXgyQgCgKgXgBQgRgBgGgFQBJgaA6gmQAqgcAfgiQASgSAPgTQgOAhgTAdQgLATgPASQg0A6hRAiQADgJAAgCgAj6h6IAbgJQCAgvBMhCQgmA2hrA7IghARQgHgIguAAg");
	this.shape_20.setTransform(43.9,26.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#AC331E").s().p("ABtDVQCUiAByhQIAdgSQAqgcAkgVIhOAZQhUAbg7APQiYAsALgWQACgFAJgHIAMgKQA7gwhIATQhPAVgLgBQgFgGAqgeQApgegOgBQhkAZgmgBQgIgHA3gaQApgUADgGQAAAAAAgBQAAAAgBAAQAAgBgBAAQgBAAgBAAIgKACQisAqBWgmIAJgEQBNgigdAHQh+AZgCgIQgCgEAagLQBSgjgbACQiaAkASgQQB1gmATgQIkggyQAXgEATgBQB7AAD8AhQD+AhBTAbQAtAWApAhQA4AtAwBAQAQAWAMAUQAUAgAMAcQADAFABAGQABAGgBAIIAAABIAAACIgDAhIAAAQQgCANgBAUIgBgBQgRgngMgUQggg8hhhyIgDABQgWAMgTAKQgnAZgcAYIgFAFQgmAegYgiIjpDHgAg0D4QARgEAagIIAIgDQA1gRAYgCQAZgCAIABQhGAZgoAJQgVAEgNAAQgKAAgHgDgAijDiIAPgBIAZgDQArgGAogXIgSARQgYALgpAJIAAAAQgQADgKAAQgOAAAAgHgAj3DCQAvgKAmgNIAngPQAagMAagOQgXAUgXAQIhEATQguANgMAAQgIAAAEgEgAmNCTIAEABQA0AFBMgXQBMgXA9gcIg5AjQhTAehBAKQgYAEgPAAQgaAAABgLgApQBGIACAAQAaAFBIgHIAegDIAdgEQA5gJBDgTIBBgTIAFgBIAEgBQg1AfiGAXQhIANgsAAQglAAgRgJgAqphOQAIAHAOAFQARAGAbADQArAFBPgCIAegBQA4gCAigEQAbgDAOgDQAegIAVgDQguAThoAKQhEAGgyAAQh4AAgMgjgApdiaIAtABQB6gBAugGIADAAIgSADIgOADQhCAJguAAQguAAgagJg");
	this.shape_21.setTransform(4.5,-15.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.6,-41.1,147.4,93.4);


(lib.MCs_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C19B00").s().p("ACsBBIgygRQiWgziVhMQhIgkhHgqIgCgBIgJgFIgfgJQh8gohxhgQBeAqArhBQAcALAgAAQMMHjhSh+IgohMQCyDWAoAkQATASARAHQAXAzBDAtQjnh/jFiMgAlWjhIGODUImqj6QgCAbAeALgAlHizIAGACIE0CkIlKjBQgBASARAJg");
	this.shape_3.setTransform(15.9,25.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("ABWDFQgdgLABgbIGsD6gABrD2IgGgDQgRgIABgSIFKDAgAiohlQgdAphJghQAWA9jAhDQgkg7gHgvQgOhkBCg4QBCg4B3AKIAKABQB+AOCRBWQBZA1BbBFQAJANAGAOQAnBhiPhhQgBCGhmhyQBBBZiAgcQgIAKgJAFQgKAGgNAAQgkAAg0gug");
	this.shape_4.setTransform(-27.2,-17.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EABB00").s().p("ABggGQGqFCAcgkQgCASgSAAQhMAAlmkwgACZgqQDGCoCoAjQgMADgNAAQhxAAjkjOgAC+hBQEBCsAZghQgHARgVAAQg/AAi/icgAkVABQgtgkgqgvQgHA1gXgHQgGgCgHgGIgDgDQgwgvgjgqQghgpgXgjQDABDgWg9QBJAhAdgpQBHA/AogXQAJgFAIgKQCCAchBhZQBkByABiGQCPBhgnhhQgGgOgJgNQBGA1BIA/IAKAJQBHB3hdhEQgEAdhNANQguAjgWgCQgzAZgPAAQgOABgKgCIgZAHQgbAHgZAAQghAAgcgMQgaAmgsAAQgdAAglgRgAEmhNQA/BUBPgJQgSAHgSAAQg3AAgzhSg");
	this.shape_5.setTransform(-16.3,-6.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2A800").s().p("AlghtQAZAAAbgGIAZgIQAMACAOAAQAPAAAzgaQAWACAugiQBNgNAEgdQBbBDhFh3QBEA/BIBHIAkAlIAlA9IABABIABABIAkAvQAWAZAKAXQALAXgCAXQgBAOgGAPIAgAnIAoBOQARAagUAAQhMAApql/gAEWC0QgcAjmolBQG7F5AJhbgAD3A9QiogkjEinQD8DlBwgagADIgZQgZAgj/itQD8DRAchEgACkhmQhPALg/hWQBEBvBKgkg");
	this.shape_6.setTransform(10.9,4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-75.8,-58.3,151.8,116.7);


(lib.MC12_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EABB00").s().p("ABZEdQiQmgjJlLQAtAsALgKQCyDnBBDlIAKApQCQFyA8AGQgQAOgSAAQg/AAhHiyg");
	this.shape_3.setTransform(0.9,14.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC00").s().p("Ahbg5QAMgMgkhRQhCh9iFh8IABgDQBHAqBIAkQEyE/gHi+QAbi/BmCLQBmCLhQBMQhPAHhCglQBEBqgZAjQgMARgjAAQgsgHgchfQgNBEgbgaQBRCbA1DUQhDjoixjkg");
	this.shape_4.setTransform(-10.1,-22.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFE16C").s().p("AB3GPQg8gGiOlyIgKgnQg1jUhRibQAbAaAOhGQAcBhAsAHQAiAAAMgRQDJFgBeE/IAABEQgbAdgbAAQgbAAgbgdg");
	this.shape_5.setTransform(14.7,19.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-41.6,-62.6,79.1,125.3);


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


(lib.Tail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween7("synched",0);
	this.instance.setTransform(10.7,-13.8,1,1,0,0,0,10.7,-13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.6,-13.8,18.4,27.7);


(lib.sparrow_yellow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.MCs_1();
	this.instance.setTransform(47.7,14.5,0.313,0.313,0,0,180,-75.8,-58.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-58.4,skewX:24,skewY:204},9).to({regY:-58.5,skewX:0,skewY:180},8).to({regY:-58.4,skewX:24,skewY:204},8).to({regY:-58.5,skewX:0,skewY:180},9).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383E30").s().p("AAjArQgBgSgTgBQgPgFAFAYQgOgIAOgSIgfgfQgOgIAAgFQAAgGADgLQACAMACACQAGAIAKADIAAAAIAVAXIAMAKQAYAHABAWQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAgBAAIgDgCg");
	this.shape.setTransform(33.1,44.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgFADQgDgBAAgCIADAAIACAAIABgBIgBgCIgBgBIAEgBQAEAAADACQACACAAABQAAAAAAAAQAAABAAABQgBAAAAAAQgBABAAAAQgDADgEAAQgCAAgDgDg");
	this.shape_1.setTransform(42.4,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A2016").s().p("AgJAHQgGgDAAgEQAAgDAGgDQAEgCAFAAQAHAAAEACQAFADAAADQAAAEgFADQgEACgHAAQgFAAgEgCgAgIgEIgBADIABABIAAAAQAAACADABQADADACAAQAEAAADgDQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgBgCgDQgDgBgEAAIgEAAIgBAAIgDABg");
	this.shape_2.setTransform(42.4,5.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgBACIAAgBIgBgBIABAAIABgCIABABIABABIABAAIgBACIgCABIgBgBg");
	this.shape_3.setTransform(41.7,5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#014AB1").s().p("AAAAAIAAAAIABAAIgBAAIAAABg");
	this.shape_4.setTransform(29.2,35.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8C7100").s().p("AiIA+QBug2AIgDQgCA7BehhIAtgYIAAAAIABAAIACgDIAKgCIgKAPIAAACQghA3AegFQAEAJAPAMQgKAIgXAAQgaAAgMAEQgLAKgFABIgCAAIi7AOg");
	this.shape_5.setTransform(17.2,41.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0C000").s().p("AAAgPIAAACQAGAEAJgEQgHAOgTAPQgJgFAUgag");
	this.shape_6.setTransform(1.5,49.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4C400").s().p("AgzA7IAAgCIgBAAQgCgMAhgqIABAEQACAFBHhIQgDAGAAAHIACAJIgKANQg1BCgMALIgIAFIgCABIgCABQgEADgEAAQgEAAgEgDg");
	this.shape_7.setTransform(6.7,42);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFD93E").s().p("AgrAqQgCgCACgHIAHgHIACgIIABABQAEAFBKhBIgFAKIgBAAIAAAAIgDAEQhHBFgIAAIAAAAg");
	this.shape_8.setTransform(10.3,36);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFD015").s().p("AgtAwIgBgEIAFgGQgBgNAKgMQgCAIACACQAEAFBLhLIgIAMQgHAIgDAHQhDBEgGAAIgBAAg");
	this.shape_9.setTransform(9.2,37.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFE88C").s().p("AgnAaIANgQQAEgRAMgMQgPAbBCglIgFAOIgLAMQgyAhgMAAQgEAAACgEg");
	this.shape_10.setTransform(12.9,31.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#999999").s().p("AhEAYIAAgCIAIgGQAKgFADAAQACABAAAEIACAIIABAAIAIgKQAHgIADgCQAIgGAAAGIAAAOQAFgNAEgFQAIgOAHADIAAADIgBAIIgCAJQAJgFAGgJQAHgPAFgIIAAAaIABgBIAKgUQAGgNABgKIAEgCIABgBIACAJIABAKQAGAAAGgQIAMgeIACAPIABASIACAAQgpBKhTAiQgNAFgVAGIgFABQgWAAAeg1g");
	this.shape_11.setTransform(36.4,34.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("AhJCHIgBgIQgBgEgBgCQgEAAgKAGIgIAGIAKgPQAngMAjgfQAOgLALgQQACASAHgDQgBAKgFANIgKAUIgCABIAAgaQgDAIgHAOQgGAMgIAFIABgKIACgKIAAgCQgIgDgKAPQgDAGgGAMIAAgNQAAgIgIAIQgCABgIAJIgIAKgAAbBFIgCgJQAQgPAKgNQALgNAHgKQALgSACgOQAEgfgTgRQgWgTglAEIgDAAQgNgLgTgJQBaAFAjggQgIAWAAAPIAAATQgCBLgYA1IgDAIIgGAHIgBgSIgCgPIgLAeQgHAQgGAAIgBgKg");
	this.shape_12.setTransform(39.4,23.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFD942").s().p("AjUC2QAMgLA4hEIAKgNIgCgJQAAgHADgGQADgIAHgIIAIgLIADgEIAAgBIABAAIAGgKIAGgJIAKgLIAFgNQhDAlAOgdQAHgGAKgFIAtg+QArgxAmggQAWgQAJgSIAWAHIABAAQAOADAOAGQALAEALAEQASAJAPALIADAAQAmgEAVATQAUARgFAfQgCAOgLAUQgHAKgLANQgKANgPANIgBABIgFACQgHADgCgQQgNAOgOALQgjAfgnAMIgKACIgDADIAAAAIgrAYQhgBkACg7QgIAChuA2IAIgFg");
	this.shape_13.setTransform(25.5,29);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFE16C").s().p("AjYC9IAAgBIAAgCIABgDQAHgSAMgRQgGASBIgxIgGAKQhHA+gIAAIgBAAgAAGhWQAFgIABgJQAOgjAhgXQAegVAkgFQAjgFAbANQAUAJAKASQgVgSgngEQgUgDgVAHIgfAPQgSAJgMARQgNAQgCAIQgFANgGAMIgXgGg");
	this.shape_14.setTransform(28.6,19);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFD11C").s().p("AgtA3QgLgFgLgDQgOgGgOgEIgBAAQAHgLAFgOQACgHANgPQAMgQARgKIAfgOQAUgHAUADQAmAEAVARQAEAHADAJIgqARIAiAMIADgBQgFAJgHAHQggAdhIAAIgVgBg");
	this.shape_15.setTransform(41.2,7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#727272").s().p("AhvChQAWgGAMgFQBUgiAohMIgBAAIAFgHIAEgIQAYg1AChKIAAgUQgBgOAJgXQAIgIAEgIIAKgDQgMA1AEAfQAGCThtBbQgfAWg1ANQgJgJgSgJg");
	this.shape_16.setTransform(40.3,25.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#191D1C").s().p("AgvAAQAWgGATgCQAagDAbAEIgvANIgJADIgDABg");
	this.shape_17.setTransform(51.6,7.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#939158").s().p("AgFgIIA0AKQgbgCgaABQgTACgWAGg");
	this.shape_18.setTransform(51.6,6.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#262B20").s().p("AABAXQgBgCAAgFQAAgDACgGIgbgRQgIgEgCgEQgBgBAAAAQAAAAAAgBQAAAAAAgBQAAAAABAAIAAgDIAEAEQAGAEAIACIAAAAIAdASQAVABAEARQAAAAgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAIgDAAQgEgNgQAAQgMgBAHAPIgDABIgDgCg");
	this.shape_19.setTransform(31.4,44);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(35));

	// Layer 3
	this.instance_1 = new lib.MC12_1();
	this.instance_1.setTransform(29.1,35.7,0.313,0.313,0,0,180,-41.7,-62.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-41.6,skewX:20.2,skewY:200.2},9).to({regX:-41.7,skewX:0,skewY:180},8).to({regX:-41.6,skewX:20.2,skewY:200.2},8).to({regX:-41.7,skewX:0,skewY:180},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.4,74.9);


(lib.sparrow_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.MCs();
	this.instance.setTransform(46.5,14.2,0.305,0.305,0,0,180,-75.8,-58.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-75.9,regY:-58.4,skewX:30,skewY:210,x:46.6},9).to({regX:-75.8,regY:-58.2,skewX:0,skewY:180,x:46.5},8).to({regX:-75.9,regY:-58.4,skewX:30,skewY:210,x:46.6},8).to({regX:-75.8,regY:-58.2,skewX:0,skewY:180,x:46.5},9).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383E30").s().p("AAiAqQgBgQgSgCQgPgGAFAZQgNgIANgSIgegeQgNgJgBgEQAAgGADgLQACAMACACQAGAIAKADIAAAAIAUAWIAMALQAXAGABAVIgDABIgDgBg");
	this.shape.setTransform(32.2,43.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgBACIAAgBIgBgBIABgBIABgBIABABIABAAIABABIgBACIgCABIgBgBg");
	this.shape_1.setTransform(40.6,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#666666").s().p("AgFAEQgDgCAAgCIAAAAIAAAAIADABIACgBIABgBIgBgCIgBgBIAEgBQAEAAADACQAAABABAAQAAABABAAQAAABAAAAQAAAAAAAAQAAACgCACQgDABgEAAQgDAAgCgBg");
	this.shape_2.setTransform(41.3,5.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A2016").s().p("AgKAGQgEgDAAgDQAAgDAEgDQAFgCAFAAQAGAAAFACQAEADAAADQAAADgEADQgFADgGAAQgFAAgFgDgAgIgEIgBACIABACIAAAAQAAABADACQACACADAAQAEAAADgCQACgCAAgBQAAAAAAAAQAAgBAAgBQgBAAAAAAQgBgBAAAAQgDgCgEAAIgEABIgBgBIgDABg");
	this.shape_3.setTransform(41.3,5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#014AB1").s().p("AAAAAIAAAAIABAAIgBAAIAAABg");
	this.shape_4.setTransform(28.5,34.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BF0000").s().p("AgqApQgCgCACgHIAHgHIACgHIABAAQADAFBJg/IgGAJIAAABIgDADQhFBEgHAAIgBAAg");
	this.shape_5.setTransform(10.1,35.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AAAAAIAAAAIAAAAg");
	this.shape_6.setTransform(43.9,29.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#939158").s().p("AgEgIIAyAKQgagCgZABQgUACgUAFg");
	this.shape_7.setTransform(50.3,6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#004B8E").s().p("AjsCzIAAgBQgBgMAfgpIABAEQADAFBHhJQgEAHABAHIACAJIgKAMQg2BBgMALIgCACIgFAEIgCABIgCABQgHAQgVANQgIgEATgagAhZCdIgPgCIAFgRQgCgFAAgKIBcgoQAUgLAVgMIABABIAAgBIADgCIAJgDQAmgMAigeQAOgLANgMQACAOAHgDQgBALgGAMIgJATIgCABIAAgZIgLAWQgGALgJAFIACgKIABgJIAAgCQgHgDgKAOIgJASIAAgNQAAgHgHAHQgDABgHAJQgHAHgBACIgBAAIgBgIIgDgFQgDAAgJAGIgIAGIgBACQgfA3AdgEQAVgGAMgGQBTggAnhLIABAAIAAAAIgCAAIAFgEIAEgIQAXg2ABhJIAAgTQAAgOAJgWQAHgHAFgIIAKgDQgMAzAEAfQAFCPhrBYQgfAWg0ANQgIgJgRgIQADAIAQANQgKAHgXAAQgYAAgLADQgLALgEAAIg6gIgAijAqIAMgPQAFgTALgJQgOAaBCgkIgFAMIgLALQgzAjgLAAQgEAAACgFg");
	this.shape_8.setTransform(25.1,28.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#191D1C").s().p("AgtAAQAUgGAUgCQAZgDAaAFIguAMIgJADIgCABg");
	this.shape_9.setTransform(50.3,7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2582D4").s().p("AjeDlIACgCQANgLA2hCIAKgMIgDgJQAAgHADgHQADgHAHgHIAJgMIACgDIAAgBIAGgJIAGgKIALgLIAFgOQhCAmAOgcQAHgIAJgFIAsg7QApgvAngfQAUgQAJgRQAEgHABgIQAOgjAggXQAdgUAjgFQAjgFAaANQATAJAJARQgUgRglgFQgUgCgVAHQgNAFgRAJQgRAJgNAkQgNAkASANQARANAjADIADAAQAlgEAUASQAUARgEAeQgCAOgMAQQgGALgLAMQgKANgPAPIgBAAIgEADQgHACgCgQQgNAOgNAMQgjAdglAMIgKADIgDACIAAAAQgVANgVALIhbAnQgHAChOAnIgdAOIAEgDgAAth+IAAAAIgBAAg");
	this.shape_10.setTransform(26.2,23.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4CA9FC").s().p("AjgDJIgBgEIAEgFQAAgNAKgLQgCAHABACQAEAFBMhLIgJAMQgHAHgDAHQhCBEgHAAIAAAAgAAQCQIABgCIAIgGQAIgGAEAAIACAGIACAHIABAAQAAgCAIgHQAGgIAEgCQAHgHgBAHIAAANIAKgRQAKgPAGADIAAACIgBAKIgBAJQAIgEAHgMIALgWIAAAZIABgBIAKgTQAFgMACgKIADgDIABAAQAPgPAKgNQALgMAGgLQAMgSACgMQAEgegUgRQgUgSgkAEIgEAAQgjgDgRgNQgRgNANgkQANgkAQgJQARgJAOgFQAUgHAUACQAlAFAUARQAFAHACAIIgoASIAhANIADgBQgFAIgIAHQgIAWAAAOIAAATQgCBHgWA2IgFAIIgEAHIABAAIABgBIgBABQgnBKhUAhQgMAFgUAGIgFAAQgTAAAagzgAjJCaIgBgBIAAgBIACgEQAGgSAMgQQgGASBGgwIgGAKQhFA8gHAAIgBAAg");
	this.shape_11.setTransform(27,21.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#262B20").s().p("AAEAYQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAAAAAgBIgBgGQAAgEACgFIgagRQgJgEgCgEIAAgDIABgCIAEAEQAFADAIACIAAAAIARAOIALAEQAVABAEAQQAAABgBAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgCgBQgEgNgPABQgMgCAGAQIgCAAg");
	this.shape_12.setTransform(30.7,42.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(35));

	// Layer 3
	this.instance_1 = new lib.MC12();
	this.instance_1.setTransform(28.4,34.8,0.305,0.305,0,0,180,-41.7,-62.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-41.6,regY:-62.3,skewX:23.5,skewY:203.5},9).to({regX:-41.7,regY:-62.5,skewX:0,skewY:180},8).to({regX:-41.6,regY:-62.3,skewX:23.5,skewY:203.5},8).to({regX:-41.7,regY:-62.5,skewX:0,skewY:180},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54.9,73);


(lib.sparrow_orange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.MCs3();
	this.instance.setTransform(48.1,14.6,0.315,0.315,0,0,180,-75.8,-58.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-75.7,regY:-58.5,skewX:30,skewY:210},9).to({regX:-75.8,regY:-58.4,skewX:0,skewY:180},8).to({regX:-75.7,regY:-58.5,skewX:30,skewY:210},8).to({regX:-75.8,regY:-58.4,skewX:0,skewY:180},9).wait(1));

	// Layer 3
	this.instance_1 = new lib.MC123();
	this.instance_1.setTransform(29.4,36,0.315,0.315,0,0,180,-41.6,-62.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-62.3,skewX:30,skewY:210},9).to({regY:-62.4,skewX:0,skewY:180},8).to({regY:-62.3,skewX:30,skewY:210},8).to({regY:-62.4,skewX:0,skewY:180},9).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383E30").s().p("AAjArQgBgRgTgCQgPgFAFAZQgOgIAOgTIgfgeQgOgJAAgGQgBgFAEgLQABALADADQAGAHAKAEIABAAIAUAXIAMALQAZAGAAAWQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAAAAAIgEgCg");
	this.shape.setTransform(33.3,45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgFAEQgEgCAAgCIAAAAIABAAIADAAIACAAIABgBIgBgCIAAgBIADgBQAEAAADACQADACAAABQAAAAgBABQAAAAAAABQAAAAgBABQAAAAgBABQgDACgEAAQgDAAgCgCg");
	this.shape_1.setTransform(42.7,5.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBACIgBgBIAAgBIABgBIABgBIABABIABAAIABABIgBACIgCABIgBgBg");
	this.shape_2.setTransform(42,5.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A2016").s().p("AgKAGQgFgDAAgDQAAgDAFgDQAFgDAFAAQAGAAAFADQAFADAAADQAAADgFADQgFAEgGAAQgFAAgFgEgAgIgEIgBACIAAACIAAAAQAAABAEACQACACADAAQAEAAADgCQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAAAQAAgCgCgCQgDgBgEAAIgEABIgCgBIgCABg");
	this.shape_3.setTransform(42.7,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#014AB1").s().p("AAAAAIAAAAIABAAIgBAAIAAABg");
	this.shape_4.setTransform(29.5,35.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#4897E2").s().p("AAAAAIAAAAIAAAAg");
	this.shape_5.setTransform(21.4,25.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F0C000").s().p("AAAgPIAAADQAHADAIgEQgHAOgTAPQgJgFAUgag");
	this.shape_6.setTransform(1.6,49.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#5F0000").s().p("Ag9BJIgBgFIAEgFQAAgNAKgMQgCAIABACQAEAFBNhLIgJALQgHAIgDAFQhCBHgIAAIAAAAgAgSgPIANgQQAFgTAJgMQgMAdBCgnIgFAPIgLALQgzAkgLAAQgEAAABgFg");
	this.shape_7.setTransform(10.9,35.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#BD3300").s().p("AgjArIgBgIQgBgFgBgBQgDAAgKAHIgHAFIAJgPQAmgMAigdQAOgMAOgPQABARAIgCQgCAKgFANIgKARIgBACIAAgYIgMAUQgGAMgJAFIABgKIABgJIAAgDQgGgDgLAPIgIATIAAgOQABgIgIAIQgDABgHAJQgIAIAAACg");
	this.shape_8.setTransform(35.8,32.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#980000").s().p("Aj5DxIgCgDIAAAAQgBgNAggqIABAEQADAGBJhMQgDAHAAAHQABAFACAFIgLAMQg1BBgOANIgBABQgFAFgEACIgDABQgEACgEAAIgHgBgAhADZQgRgPgFgCQAXgMAugwIArgYIABABIAAgBIACgCIABAAIAAAAIAKgDIgJAPIgBACQgfA5AcgEQAEAIAPANQgKAIgXAAQgZgBgMAFIgRAPIgCAAQgGAAgPgMgAAbC1IAigMQBWgiAphNIgBABIAEgIIAEgIQAYg1AChMIAAgTQAAgPAIgXQAIgHAFgJIAKgDQgMA2AEAgQAFCThuBcQggAWg2AOQgJgKgRgIgAjOCiQgBgCABgHIAIgIIACgGIABAAIAAgBIAAgCIABgEQAHgSAMgRQgHATBJgxIgMATIAAAAIAAABIgDADQhKBJgIAAIAAgBgAAciKQAFgIABgJQAOgkAhgXQAegVAlgFQAjgFAbANQAUAKAKARQgVgRgngFQgUgDgVAIQgOAEgSAKQgRAKgNAQQgMARgCAHQgGAOgGALIgXgFg");
	this.shape_9.setTransform(26.6,24.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#191D1C").s().p("AguAAQAUgGAUgCQAbgDAbAEIgwANIgJADIgDABg");
	this.shape_10.setTransform(52,7.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#939158").s().p("AgFgIIA1ALQgbgDgbABQgUACgUAGg");
	this.shape_11.setTransform(52,6.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF0000").s().p("AjlDjIABgBQAOgNA1hBIALgMQgCgFgBgFQAAgHADgHQADgHAHgIIAJgMIADgDIAAgBIAAAAIAMgTIALgMIAFgPQhEAnAOgdQAIgHAJgGIAug9QArgwAoghQAVgQAIgRIAXAFIAAABIAAgBIAAAAQAGgLAGgOQACgHAMgRQANgQARgKQASgKAOgEQAVgIAUADQAnAFAVARQAEAHACAJIgpATIAiAMIADgBQgFAJgIAHQgIAXAAAPIAAATQgCBMgYA1IgEAIIgEAIIABgBQgpBNhWAiIgiAMQgcAEAfg5IABgCIAIgGQAJgGADAAQACABABAEIABAIIABAAQABgCAHgIQAHgIADgBQAIgIAAAIIAAANIAJgSQALgPAGADIAAACIAAAKIgCAKQAJgFAGgMIAMgWIAAAZIABgBIAKgTQAGgNABgKQgHACgCgRQgOAPgOAMQgjAfgnAMIgKADIAAAAIAAAAIgDACIgBAAIgrAYQguAwgXAMQgOAJgPgKQgPgJgCgDQgIAHgSAJIhJAkQAEgCAFgFgAg6AFIABAAIgBgBg");
	this.shape_12.setTransform(27.3,24.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#262B20").s().p("AAAAXIAAgHQAAgEACgFIgbgRQgJgFgCgEIAAgDIABgCIAEAEQAFAEAIABIABAAIARAOIAMAFQAVABAEARQAAAAAAABQgBAAAAAAQgBAAAAABQAAAAgBAAIgCgBQgEgNgQABQgMgCAGAPIgCABQgBAAAAAAQgBAAAAgBQAAAAgBAAQAAgBgBAAg");
	this.shape_13.setTransform(31.7,44.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.8,75.4);


(lib.sparrow_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Wings();
	this.instance.setTransform(48.1,14.9,1.376,1.407,0,0,0,17.4,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:30,x:48.2,y:14.8},9).to({rotation:0,x:48.1,y:14.9},8).to({rotation:30,x:48.2,y:14.8},8).to({rotation:0,x:48.1,y:14.9},9).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383E30").s().p("AAyAzIgHgGIgJgFQgEgBgFAAQgUgHgDAPQgGAKgCgKQABgDAFgFIAKgLIgvguQgQgNgEgJQgCgHAEgEIAHAJQAJAKAOAGIABABIAfAiIATAQQARAFAJAJIAEAGQAFAHgEAAIgHgBg");
	this.shape.setTransform(35.2,47.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgFAEQgEgCAAgCIAAAAIABAAIADAAIACAAIAAgBIAAgDIgBAAIAEgBQAEAAACACQADACABABQgBACgDACQgCACgEAAQgDAAgCgCg");
	this.shape_1.setTransform(42.7,5.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBACIgBgBIAAgBIABgBIABgBIABABIABAAIAAABIAAACIgCABIgBgBg");
	this.shape_2.setTransform(42,5.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A2016").s().p("AgKAGQgFgDAAgDQAAgDAFgEQAFgCAFAAQAGAAAGACQAEAEAAADQAAADgEADQgGAEgGAAQgFAAgFgEgAgIgFIgBADIAAACIAAAAQAAABAEACQACACADAAQAEAAACgCQADgCABgBQgBgCgDgCQgCgCgEAAIgEABIgBAAIgDAAg");
	this.shape_3.setTransform(42.7,5.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262B20").s().p("AA6ArQgJgNgVACQgQgDADAOIgJAAIAAgBQgBgIAGgKIg2glQgSgJgEgJQgEgGADgGIAIAIQALAJAPAEIACAAIAkAbIAVAMQAfAEAKAWg");
	this.shape_4.setTransform(32.1,46.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#356C84").s().p("AAAgPIAAACQAGAEAJgEQgIAOgSAPQgJgFAUgag");
	this.shape_5.setTransform(1.6,50.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E5E1E0").s().p("AgrA5QgEgEALgaQAWgmAngoIADgDIAKgDIgJAQIgBABQgeA5AbgFQADAHAIAHIAJAJQgEADgFABQgKAEgPgBQgZAAgLAEQgMAMgFAAIgBgBg");
	this.shape_6.setTransform(26.8,42.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4897E2").s().p("AAAAAIAAAAIAAAAg");
	this.shape_7.setTransform(21.4,25.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#40839F").s().p("AgzA+IgBgDIAAAAQgCgNAggsIABAFQAEAFBHhKQgEAHABAHQAAAFACAFIgLAMQg1BEgNALQgGAGgFADQgFABgEAAQgEAAgDgBg");
	this.shape_8.setTransform(6.8,43.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#75AFC8").s().p("AgpAkIgBAAIAAgCIABgEQAHgTANgPQgHARBHgwIgGAJQhFA+gIAAIgBAAg");
	this.shape_9.setTransform(11.2,35.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#599FBD").s().p("AgsArQgBgCACgHIAHgIIACgHIABAAQAEAGBKhEIgFAKIgBABIgCADQhIBJgIAAIgBgBg");
	this.shape_10.setTransform(10.4,37.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#4894B5").s().p("AguAxIgBgFIAFgEQAAgOAKgMQgCAHABACQAEAGBNhOIgJANQgHAIgDAIQhDBGgHAAIgBgBg");
	this.shape_11.setTransform(9.3,39.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8FBED2").s().p("AgnAaQAFgIAHgIQAEgRANgNQgPAcBCgmIgFAPIgLAMQgzAigLAAQgEAAACgFg");
	this.shape_12.setTransform(13,32.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1F75C2").s().p("AibCzQAGgDAGgGQAMgLA4hGIAKgMQgCgGAAgEQAAgHADgIQADgIAHgHIAJgNIACgEIABAAIAGgKIAGgKIALgJIAFgQQhEAmAPgbQAGgIAKgFIAuhBQApgxAogiQAWgQAJgRIAXAFQAPAEANAFIAXAKQASAJhRDdIgJADIgDADQgqAogVAoQgLAaADAEQgsgCgLgUQgOABACgYQgJAEiOBYQAVgPAHgPgAAZg3IACAAIgCgBg");
	this.shape_13.setTransform(18.7,31.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D69E3F").s().p("AhFAZIABgCIAIgGQAJgGAEAAIACAFIABAJIABAAIAJgLIAKgKIAHAAIAAAOQAGgNAEgFQAIgOAHADIAAADIgBAIIgBAJQAJgFAFgJQAHgPAFgIIAAAaIACgCIAJgTQAHgOAAgKQABAAAAAAQABAAAAgBQABAAAAAAQABgBAAAAIACgBIABAJIABAKQAHgBAGgPIAMgfIABAPIACATIABABQgoBLhVAkIgMAEIgLAEIgCABIgHgJQgEAEACAHIgEAAQgXAAAeg2g");
	this.shape_14.setTransform(36.7,35.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#B15105").s().p("AhKCLIgBgJIgCgFQgDAAgKAGIgIAGIAJgPQBRjegTgIQBaAEAkgiQgJAYABAPIAAATQgCBNgYA3IgHAQIAAAAIgBAAIgCgTIgCgPIgMAfQgGAPgHABIAAgKIgCgJIgCABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAAAAAQgBAKgHAOIgJATIgBACIAAgaQgEAIgGAPQgGALgJAFIABgKIABgJIAAgDQgHgDgKAPQgEAGgGANIAAgOIgHAAIgKAKIgJALg");
	this.shape_15.setTransform(39.7,24);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8CC2FF").s().p("AhoAyQAEgJABgIQAOgjAigYQAegWAigFQAkgFAbAOQAUAJAJASQgVgSgmgEQgVgDgWAHQgLAFgRAKQgSAKgNAOQgNARgBAIQgFAPgHALIgWgFg");
	this.shape_16.setTransform(40.1,5.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#2C7ED2").s().p("AguA5IgWgKQgNgFgPgEQAGgLAFgPQACgIANgPQANgQARgKQARgKAOgFQAUgHAUADQAnAEAVASQAEAHACAJIgqASIAkAMIACgBQgFAKgIAHQggAehLAAIgTgBg");
	this.shape_17.setTransform(41.6,7.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FED375").s().p("AhTC2QgNgFgJgJIgCgCIACgBIAMgEIAMgEQBUgkAohNIABgBIAAAAIABgBIAHgOIgBgBQAYg3AChNIAAgTQgBgPAJgYQAIgHAFgJIAKgDQgMA3AEAgQAFCXhsBeIgSALQgbAPgiAHIgBgBg");
	this.shape_18.setTransform(41,26.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#939158").s().p("AgFgIIA1ALQgbgDgaABQgVACgVAGg");
	this.shape_19.setTransform(51.9,6.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#191D1C").s().p("AgvgBQAVgFAVgCQAagEAbAFIgwAOIgJACIgCABg");
	this.shape_20.setTransform(51.9,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(35));

	// Layer 3
	this.instance_1 = new lib.Tail();
	this.instance_1.setTransform(29.7,36.5,1.376,1.407,0,0,0,10.7,-13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regY:-13.9,rotation:18.5,y:36.4},9).to({regY:-13.8,rotation:0,y:36.5},8).to({regY:-13.9,rotation:18.5,y:36.4},8).to({regY:-13.8,rotation:0,y:36.5},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,56.8,75.4);


(lib.RedParrot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Front Face
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(-0.1,-80.2,0.384,0.424);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(288).to({_off:false},0).wait(57));

	// Mask
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#624436").s().p("AgUATQgJgIAAgLQAAgKAJgIQAJgIALAAQAMAAAJAIQAJAIAAAKQAAALgJAIQgJAIgMAAQgLAAgJgIg");
	this.shape.setTransform(7.6,-86.8);
	this.shape._off = true;

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#624436").s().p("AgdAJIAAgBIAAgCQAAgJAJgIQAJgIALAAQAMAAAJAIQAJAIAAAJIAAACIAAABQAAAGgCAFQgCgEg3gHg");
	this.shape_1.setTransform(7.6,-87.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#624436").s().p("AAVALQgJgIgMAAQgLAAgJAIQgFAEgCAFQgCgFAAgGIAAgBIAAgCQAAgJAJgIQAJgIALAAQAMAAAJAIQAJAIAAAJIAAACIAAABQAAAGgCAFQgCgFgFgEg");
	this.shape_2.setTransform(7.6,-87.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},98).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape}]},3).to({state:[]},9).to({state:[{t:this.shape}]},55).to({state:[{t:this.shape_1}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape}]},3).to({state:[{t:this.shape_2}]},3).to({state:[{t:this.shape}]},3).to({state:[]},30).to({state:[]},61).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.shape).wait(98).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},9).wait(55).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},3).wait(3).to({_off:false},0).to({_off:true},30).wait(117));

	// Face
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#483228").s().p("AgUATQgJgIAAgLQAAgKAJgIQAJgIALAAQAMAAAJAIQAJAIAAAKQAAALgJAIQgJAIgMAAQgLAAgJgIgAgJgLQgDADAAAEIABAEIAAABQAAAGAEAEQAEAEAEAAQAGAAAFgEQAEgEAAgGQAAgDgEgEQgDgDgEAAIgBgCQgDgCgDAAQgEAAgDACg");
	this.shape_3.setTransform(7.6,-86.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgGAGIgBgCIgCgEQAAgDADgCQADgDADAAQAEAAADADIACABQABACAAACQAAADgDADQgDADgEAAQgDAAgDgDg");
	this.shape_4.setTransform(7.3,-87.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#17100D").s().p("AgJAIQgEgEAAgEIAAgCIACACQADABAEAAQAEAAACgBQADgCAAgFQAAgDgCgBQAEAAADACQAEAFAAAEQAAAEgEAEQgFAFgFAAQgFAAgEgFg");
	this.shape_5.setTransform(7.8,-86.5);

	this.instance_1 = new lib.Symbol9();
	this.instance_1.setTransform(19.5,-79.3,1,1,-3,0,0,0.1,0.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#040404").s().p("AheA1IAFAAIAAgBQAAgEAKgDQASgFApgDQAUgCAHgCIATgFQAKgDgQAJQgRAIgMACIgfABQgZACgLAEQgGADgIAAIgEgBgAhKAZQAKgEAJgBIA6gGIAdgDIAHgEQACgBAHABIAAAAIABACQgBAEgRAEQgbAFg1ACQgIABgKAFQgNACgEACQAAgEAKgFgAAwgKIgIgMQgIgKgJgGIgQgMQgHgIAYARQAaAQACAJIACANIgGgHgAA6gYIgKgMIgBgCQAGgBAYAXIAAACIgBAAIgCAAIgBAAQgEAAgLgKgABMgbQgMgFAAgBQAAgHAPAHIALAFIAFADIAAACIgFABIAAAAQgEAAgKgFg");
	this.shape_6.setTransform(7.1,-86.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#969696").s().p("AhsgDQARgfAFgFIAEgGQgLAXALAMQgbAcAFAcQgTgaAPgXgABQAGIgHgCQgDgEgBgEQgBgFACgFQAEgFAGgBQAGgCABAKQABAFANAGIAOAEQgWADgKAAIgDAAg");
	this.shape_7.setTransform(5.6,-76.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#333132").s().p("AgRAmQgFgBgEgDIgQgOQgCgDAAgDQgBgFABgFQADgRAKgIQAIgIATgKIAAAHQgBARAYAEIAFACQAMAFAKATQgJAHgSAKQgOAIgKAAQgGAAgGgCgAgLgOQgHABgEAFQgCAFABAEQABAFAEAEIAHADQAKAAAXgEIgPgFQgLgEAAgGQgBgIgFAAIgBAAg");
	this.shape_8.setTransform(15,-77);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhCAgQgPgRgDgFQgFgaAcgeIAEAEQASAOAzABIA4AAQAAADACADIAQAOQgKAHgCAEQgCAGgBAQQgWASgxADIgMAAQgpAAgNgPg");
	this.shape_9.setTransform(3.6,-72.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgoBWQg0gBgTgOIgEgEQgLgNALgXIAAgBIABgBIACgDQANgbABgGIAAgCIAAgDIABgGIgBgGQABgQAFgMQAEgJAGgHQAtgiA6AhIAKAGQAEgDAEgDQAKgFAQgBQAZgCARALQANASABAYQAAAGgOAsQgFARgRASIgGgCQgZgEAAgRIABgHQgTAKgJAIQgKAIgDATQgBAFACAFIg3AAg");
	this.shape_10.setTransform(8.9,-84.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E11F27").s().p("AiFB8IgMgKQgQgLgRgGQAWglAPg7QAahiAlgfQAkgeBIgCQAxgCAlAKQARAGAPAJQAUAMALARQgSgMgZACQgQABgKAFQgEADgEAEIgKgGQg8gigrAiQgGAHgEAJQgFANAAAPIAAAHIAAAFIgBAEIAAABQgBAHgNAcIgCAEIgBABIAAABIgEAGQgFADgRAfQgOAZASAaQADAFAPARQAPASAxgDQAzgDAWgRQAZAUgXAQQg3AbgyAAQg+AAg5gmg");
	this.shape_11.setTransform(1.8,-79.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#17100D").s().p("AgHAKQgFgDgBgGIAAgBIACAAQAEADAEgBQADgBACgBQACgDAAgEIgCgFQADAAADACQAFAEABAFQABAEgEAEQgEAFgGABIgBAAQgEAAgDgDg");
	this.shape_12.setTransform(5.3,-89.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgFAHIgCgBQgCgDAAgCQAAgCACgDQADgDAEgBQADAAADACIACABIACAFQAAACgCADQgDADgEABIgBAAQgCAAgDgCg");
	this.shape_13.setTransform(4.7,-90.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#483228").s().p("AgRAWQgLgGgBgMQgCgKAIgJQAIgJANgCQAKgCAKAHQAKAHACALQABAKgHAKQgIAIgNACIgDAAQgJAAgIgFgAgEgNQgEABgDADQgCADAAAEQAAACACABIAAACQABAGAFADQAEAEAEgBQAGgBAEgFQAEgEgBgFQgBgEgFgEQgDgCgDAAIgCgBQgCgCgCAAIgCAAg");
	this.shape_14.setTransform(5.1,-89.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#040404").s().p("AhSA6IgBgBQgBgEAKgDQASgIAogIIAbgIIARgIQAJgFgPAMQgPAKgLAEIgfAFQgYAFgLAGQgIAEgKABgAhHAdQAJgFAIgDQAbgHAegHIAdgGIAGgDQACgCAGAAIABABIABACQAAABgRAGQgZAJg1AKQgHABgKAHQgNADgDADQgBgEAKgGgAAsgWIgJgMQgKgJgJgEIgQgJQgKgHAaANQAcAMAEAJIAEANIgIgGgAA0gmIgMgKIAAgCQAFgCAbATIAAACIgBABIgCAAIgBAAQgFAAgLgIgABFgrQgLgDgBgCQgBgGAQAEIAMAEIAFACQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIgEACIgCAAQgFAAgJgDg");
	this.shape_15.setTransform(4.8,-88.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#969696").s().p("AhtgCIARgmIADgGQgHAYAMAKQgXAgAJAbQgWgXALgagABIgRQgEgEgCgFQgBgGABgFQADgFAHgCQAFgDACAKQABAFAOAFIAPADQgYAHgKABIgHgBg");
	this.shape_16.setTransform(4.7,-77.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("Ag8AjQgRgPgEgFQgJgYAXgiIAFAEQAUALAzgGIA4gHQAAADACACIASAMQgJAJgBAFQgCAGACAPQgUAUgyAKQgRADgOAAQgXAAgLgJg");
	this.shape_17.setTransform(3,-74.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#333132").s().p("AgNAnQgFAAgFgCIgSgMQgCgCAAgDQgCgFAAgFQABgSAJgKQAHgIARgMIABAHQABAQAYABIAGABQAMAEANARQgHAIgRAMQgQALgOAAIgFAAgAgOgNQgHACgDAGQgBAFABADQACAGAEADIAHACQAKgBAWgHIgPgEQgMgCgBgGQgCgHgDAAIgCAAg");
	this.shape_18.setTransform(13.9,-81);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E11F27").s().p("AgmCoQhTgsgGgEQgRgJgSgEQAQgnAHg8QANhmAggjQAggjBHgMQAxgIAlAFQASADAQAHQAWAJAMAQQgTgJgYAFQgQADgJAHIgHAHIgLgFQhAgZglAoQgHAHgCAKQgDANABAQIACAGIAAAGIABADIgBABQAAAHgJAeIgBAEIgBABIAAABIAAABIgDAFIgRAlQgLAbAWAXQADAFASAPQARAPAwgJQAxgKAUgUQAdAQgWAUQgvBJg2AAQgWAAgYgOg");
	this.shape_19.setTransform(0.2,-80.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhmBSIgFgEQgMgLAIgXIAAgBIAAgBIAAgBIACgEQAJgeAAgGIAAgBIAAgCIgBgFIgBgHQgCgPAEgNQACgKAGgIQAngoA/AaIALAEIAHgHQAIgGARgEQAYgFASAJQAPAQAFAYQABAFgIAuQgCARgPAVIgGgCQgaAAgCgRIAAgHQgSAMgHAJQgJAJAAAUQgBAFADAFIg2AHQgTADgPAAQgaAAgNgIg");
	this.shape_20.setTransform(7,-87.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},27).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1,p:{rotation:-10.7,x:17.8,y:-84.1}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_9},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},5).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1,p:{rotation:-10.7,x:17.8,y:-84.1}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},12).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},5).to({state:[]},44).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_9},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},27).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1,p:{rotation:-10.7,x:17.8,y:-84.1}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},5).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1,p:{rotation:-10.7,x:17.8,y:-84.1}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},12).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_9},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},5).to({state:[]},28).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_9},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},48).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1,p:{rotation:-10.7,x:17.8,y:-84.1}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_9},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},5).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1,p:{rotation:-10.7,x:17.8,y:-84.1}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},12).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_8},{t:this.shape_7},{t:this.shape_9},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},5).to({state:[]},33).to({state:[]},1).wait(56));

	// Eyes
	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#483228").s().p("AgUATQgJgIAAgLQAAgKAJgIQAJgIALAAQAMAAAJAIQAJAIAAAKQAAALgJAIQgJAIgMAAQgLAAgJgIgAgJgLQgDADAAAEIABAEIAAABQAAAGAEAEQAEAEAEAAQAGAAAFgEQAEgEAAgGQAAgDgEgEQgDgDgEAAIgBgCQgDgCgDAAQgEAAgDACg");
	this.shape_21.setTransform(7.6,-86.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgGAGIgBgCIgCgEQAAgDADgCQADgDADAAQAEAAADADIACABQABACAAACQAAADgDADQgDADgEAAQgDAAgDgDg");
	this.shape_22.setTransform(7.3,-87.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#17100D").s().p("AgJAIQgEgEAAgEIAAgCIACACQADABAEAAQAEAAACgBQADgCAAgFQAAgDgCgBQAEAAADACQAEAFAAAEQAAAEgEAEQgFAFgFAAQgFAAgEgFg");
	this.shape_23.setTransform(7.8,-86.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]}).to({state:[]},4).to({state:[{t:this.shape_21},{t:this.shape_22},{t:this.shape_23}]},5).to({state:[]},279).wait(57));

	// Layer 3
	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#17100D").s().p("AgHAKQgFgDgBgGIAAgBIACAAQAEADAEgBQADgBACgBQACgDAAgEIgCgFQADAAADACQAFAEABAFQABAEgEAEQgEAFgGABIgBAAQgEAAgDgDg");
	this.shape_24.setTransform(5.3,-89.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgFAHIgCgBQgCgDAAgCQAAgCACgDQADgDAEgBQADAAADACIACABIACAFQAAACgCADQgDADgEABIgBAAQgCAAgDgCg");
	this.shape_25.setTransform(4.7,-90.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#483228").s().p("AgRAWQgLgGgBgMQgCgKAIgJQAIgJANgCQAKgCAKAHQAKAHACALQABAKgHAKQgIAIgNACIgDAAQgJAAgIgFgAgEgNQgEABgDADQgCADAAAEQAAACACABIAAACQABAGAFADQAEAEAEgBQAGgBAEgFQAEgEgBgFQgBgEgFgEQgDgCgDAAIgCgBQgCgCgCAAIgCAAg");
	this.shape_26.setTransform(5.1,-89.8);

	this.instance_2 = new lib.Symbol9();
	this.instance_2.setTransform(17.8,-84.1,1,1,-10.7,0,0,0.1,0.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#040404").s().p("AhSA6IgBgBQgBgEAKgDQASgIAogIIAbgIIARgIQAJgFgPAMQgPAKgLAEIgfAFQgYAFgLAGQgIAEgKABgAhHAdQAJgFAIgDQAbgHAegHIAdgGIAGgDQACgCAGAAIABABIABACQAAABgRAGQgZAJg1AKQgHABgKAHQgNADgDADQgBgEAKgGgAAsgWIgJgMQgKgJgJgEIgQgJQgKgHAaANQAcAMAEAJIAEANIgIgGgAA0gmIgMgKIAAgCQAFgCAbATIAAACIgBABIgCAAIgBAAQgFAAgLgIgABFgrQgLgDgBgCQgBgGAQAEIAMAEIAFACQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIgEACIgCAAQgFAAgJgDg");
	this.shape_27.setTransform(4.8,-88.7);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#969696").s().p("AhtgCIARgmIADgGQgHAYAMAKQgXAgAJAbQgWgXALgagABIgRQgEgEgCgFQgBgGABgFQADgFAHgCQAFgDACAKQABAFAOAFIAPADQgYAHgKABIgHgBg");
	this.shape_28.setTransform(4.7,-77.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("Ag8AjQgRgPgEgFQgJgYAXgiIAFAEQAUALAzgGIA4gHQAAADACACIASAMQgJAJgBAFQgCAGACAPQgUAUgyAKQgRADgOAAQgXAAgLgJg");
	this.shape_29.setTransform(3,-74.7);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#333132").s().p("AgNAnQgFAAgFgCIgSgMQgCgCAAgDQgCgFAAgFQABgSAJgKQAHgIARgMIABAHQABAQAYABIAGABQAMAEANARQgHAIgRAMQgQALgOAAIgFAAgAgOgNQgHACgDAGQgBAFABADQACAGAEADIAHACQAKgBAWgHIgPgEQgMgCgBgGQgCgHgDAAIgCAAg");
	this.shape_30.setTransform(13.9,-81);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#E11F27").s().p("AgmCoQhTgsgGgEQgRgJgSgEQAQgnAHg8QANhmAggjQAggjBHgMQAxgIAlAFQASADAQAHQAWAJAMAQQgTgJgYAFQgQADgJAHIgHAHIgLgFQhAgZglAoQgHAHgCAKQgDANABAQIACAGIAAAGIABADIgBABQAAAHgJAeIgBAEIgBABIAAABIAAABIgDAFIgRAlQgLAbAWAXQADAFASAPQARAPAwgJQAxgKAUgUQAdAQgWAUQgvBJg2AAQgWAAgYgOg");
	this.shape_31.setTransform(0.2,-80.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AhmBSIgFgEQgMgLAIgXIAAgBIAAgBIAAgBIACgEQAJgeAAgGIAAgBIAAgCIgBgFIgBgHQgCgPAEgNQACgKAGgIQAngoA/AaIALAEIAHgHQAIgGARgEQAYgFASAJQAPAQAFAYQABAFgIAuQgCARgPAVIgGgCQgaAAgCgRIAAgHQgSAMgHAJQgJAJAAAUQgBAFADAFIg2AHQgTADgPAAQgaAAgNgIg");
	this.shape_32.setTransform(7,-87.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.instance_2},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24}]},4).to({state:[]},5).wait(336));

	// L Open wing
	this.instance_3 = new lib.Symbol1_1();
	this.instance_3.setTransform(21.5,-19.5,0.607,0.734,0,0,180,74.8,52.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({_off:true},5).wait(4).to({_off:false},0).to({_off:true},5).wait(4).to({_off:false},0).to({_off:true},5).wait(318));

	// R Open wing
	this.instance_4 = new lib.Symbol1_1();
	this.instance_4.setTransform(-19.7,-19.5,0.607,0.734,0,0,0,74.8,52.3);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({_off:true},5).wait(4).to({_off:false},0).to({_off:true},5).wait(4).to({_off:false},0).to({_off:true},5).wait(318));

	// L Wing
	this.instance_5 = new lib.Tween13("synched",0);
	this.instance_5.setTransform(16.7,-57.6,1,1,0,0,180,2.5,-33.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({_off:true},4).wait(23).to({_off:false},0).wait(318));

	// R Wing
	this.instance_6 = new lib.Tween13("synched",0);
	this.instance_6.setTransform(-16.4,-57.6,1,1,0,0,0,2.5,-33.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({_off:true},4).wait(23).to({_off:false},0).wait(318));

	// Mouth
	this.instance_7 = new lib.Symbol9();
	this.instance_7.setTransform(13.7,-79.5,1,1,-3,0,0,-5.7,-0.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(98).to({_off:false},0).wait(4).to({regX:-5.8,rotation:-16.2},0).wait(4).to({regX:-5.7,rotation:-3},0).wait(4).to({regX:-5.8,rotation:-16.2},0).wait(4).to({regX:-5.7,rotation:-3},0).to({_off:true},11).wait(55).to({_off:false},0).wait(4).to({regX:-5.8,rotation:-16.2},0).wait(4).to({regX:-5.7,rotation:-3},0).wait(4).to({regX:-5.8,rotation:-16.2},0).wait(4).to({regX:-5.7,rotation:-3},0).to({_off:true},32).wait(117));

	// Face
	this.instance_8 = new lib.Symbol9();
	this.instance_8.setTransform(19.5,-79.3,1,1,-3,0,0,0.1,0.1);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#040404").s().p("AheA1IAFAAIAAgBQAAgEAKgDQASgFApgDQAUgCAHgCIATgFQAKgDgQAJQgRAIgMACIgfABQgZACgLAEQgGADgIAAIgEgBgAhKAZQAKgEAJgBIA6gGIAdgDIAHgEQACgBAHABIAAAAIABACQgBAEgRAEQgbAFg1ACQgIABgKAFQgNACgEACQAAgEAKgFgAAwgKIgIgMQgIgKgJgGIgQgMQgHgIAYARQAaAQACAJIACANIgGgHgAA6gYIgKgMIgBgCQAGgBAYAXIAAACIgBAAIgCAAIgBAAQgEAAgLgKgABMgbQgMgFAAgBQAAgHAPAHIALAFIAFADIAAACIgFABIAAAAQgEAAgKgFg");
	this.shape_33.setTransform(7.1,-86.3);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhCAgQgPgRgDgFQgFgaAcgeIAEAEQASAOAzABIA4AAQAAADACADIAQAOQgKAHgCAEQgCAGgBAQQgWASgxADIgMAAQgpAAgNgPg");
	this.shape_34.setTransform(3.6,-72.7);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#969696").s().p("AhsgDQARgfAFgFIAEgGQgLAXALAMQgbAcAFAcQgTgaAPgXgABQAGIgHgCQgDgEgBgEQgBgFACgFQAEgFAGgBQAGgCABAKQABAFANAGIAOAEQgWADgKAAIgDAAg");
	this.shape_35.setTransform(5.6,-76.3);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#333132").s().p("AgRAmQgFgBgEgDIgQgOQgCgDAAgDQgBgFABgFQADgRAKgIQAIgIATgKIAAAHQgBARAYAEIAFACQAMAFAKATQgJAHgSAKQgOAIgKAAQgGAAgGgCgAgLgOQgHABgEAFQgCAFABAEQABAFAEAEIAHADQAKAAAXgEIgPgFQgLgEAAgGQgBgIgFAAIgBAAg");
	this.shape_36.setTransform(15,-77);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E11F27").s().p("AiFB8IgMgKQgQgLgRgGQAWglAPg7QAahiAlgfQAkgeBIgCQAxgCAlAKQARAGAPAJQAUAMALARIgRgFQgWgFgOADQgTAFgIAFQgYgNgWgFQgtgLgaAcQgFAEgDAHQgCAIABANIABAGQAAAJgBAJQgBAHgNAcIgCAEIgBABIAAABIgEAGQgFADgRAfQgOAZASAaQADAFAPARQAPASAxgDQAzgDAWgRQAZAUgXAQQg3AbgyAAQg+AAg5gmg");
	this.shape_37.setTransform(1.8,-79.9);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgoBVQg0gBgTgOIgEgEQgLgNALgXIAAgBIABgBIACgDQANgbABgGQABgJgBgJIAAgGQgBgNACgJQADgHAFgEQAcgbAtAKQAUAFAYANQAIgFATgEQAOgDAVAFIARAEQANASABAYQAAAGgOAsQgFARgRASIgGgCQgZgEAAgRIABgHQgTAKgJAIQgKAIgDATQgBAFACAFIg3AAg");
	this.shape_38.setTransform(8.9,-84.1);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#483228").s().p("AgUATQgJgIAAgLQAAgKAJgIQAJgIALAAQAMAAAJAIQAJAIAAAKQAAALgJAIQgJAIgMAAQgLAAgJgIgAgJgLQgDADAAAEIABAEIAAABQAAAGAEAEQAEAEAEAAQAGAAAFgEQAEgEAAgGQAAgDgEgEQgDgDgEAAIgBgCQgDgCgDAAQgEAAgDACg");
	this.shape_39.setTransform(7.6,-86.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgGAGIgBgCIgCgEQAAgDADgCQADgDADAAQAEAAADADIACABQABACAAACQAAADgDADQgDADgEAAQgDAAgDgDg");
	this.shape_40.setTransform(7.3,-87.3);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#17100D").s().p("AgJAIQgEgEAAgEIAAgCIACACQADABAEAAQAEAAACgBQADgCAAgFQAAgDgCgBQAEAAADACQAEAFAAAEQAAAEgEAEQgFAFgFAAQgFAAgEgFg");
	this.shape_41.setTransform(7.8,-86.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AgoBWQg0gBgTgOIgEgEQgLgNALgXIAAgBIABgBIACgDQANgbABgGIAAgCIAAgDIABgGIgBgGQABgQAFgMQAEgJAGgHQAtgiA6AhIAKAGQAEgDAEgDQAKgFAQgBQAZgCARALQANASABAYQAAAGgOAsQgFARgRASIgGgCQgZgEAAgRIABgHQgTAKgJAIQgKAIgDATQgBAFACAFIg3AAg");
	this.shape_42.setTransform(8.9,-84.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#E11F27").s().p("AiFB8IgMgKQgQgLgRgGQAWglAPg7QAahiAlgfQAkgeBIgCQAxgCAlAKQARAGAPAJQAUAMALARQgSgMgZACQgQABgKAFQgEADgEAEIgKgGQg8gigrAiQgGAHgEAJQgFANAAAPIAAAHIAAAFIgBAEIAAABQgBAHgNAcIgCAEIgBABIAAABIgEAGQgFADgRAfQgOAZASAaQADAFAPARQAPASAxgDQAzgDAWgRQAZAUgXAQQg3AbgyAAQg+AAg5gmg");
	this.shape_43.setTransform(1.8,-79.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_8}]}).to({state:[]},4).to({state:[{t:this.shape_37},{t:this.shape_38},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_8}]},5).to({state:[]},18).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},71).to({state:[]},27).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_34},{t:this.shape_36},{t:this.shape_35},{t:this.shape_33},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},55).to({state:[]},48).to({state:[]},60).wait(57));

	// Layer 2
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8C81C").s().p("AAAgBIABACIgBABIAAgDg");
	this.shape_44.setTransform(-23,-54.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFF004").s().p("AAAABIAAgBIAAABg");
	this.shape_45.setTransform(24,-25.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#254494").s().p("AAAAAIAAAAIAAAAg");
	this.shape_46.setTransform(24,-25.7);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1F4097").s().p("AgBEEQgggEgCjUQgTDSgWADQgSgSgJgsQgEgagCgkQg0g9AJivQARhhgNhQQAHAOAFAUIAAADIAAAFIAQAcIAAADIADAeIABAGQAFAlAsA5QAngBgIhNQAaCdAQhEQAXgCAHh1QAJALAGgBQAOBoAQADQASgSAIgtQAGgcABgoQATg1AGBKIAAgQIABgKQABgZAGgNQgJBKAPBZQAICZgnBDIgBAHIAAAHQgFAlgsA4QgogBAJhNQgSBvgPAAQgGAAgDgVgACNiaIAAAFIAAgCIAAgEIAAABg");
	this.shape_47.setTransform(0,-32.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#122A68").s().p("Ah0FdQgnhggFgFQgjgpgEhYIgBgZIAAgVIAAgXQgDgHACgFIgDguIgBgLIgBgLIAAgCIAAAAIgGg8QgIhCgMhOIgCgQQgCgVAAgRIACAAIgBgEIAAgCIABgLQAEgkASgZIABgBQAIgGAHgKIAAAAIAKgPIAFgGQgHAQAIAJIAJAFQAKAIAHAOQANBQgRBhQgJCxA0A7QACAkAEAaQAJAsASASQAWgDATjQQACDSAgAEQAQBFAaifQgJBNAoABQAsg4AFglIAAgHIABgHQAnhDgIiZQgPhZAJhKIABgBIABgDQAVgdAHgGQAJgGAFgHQAGgNgJgTIAAAAQACAFAGAHIABACIALAMIAKAPIABABQAHAMAEAPQAFANACAPIABAJIABAHIAAAHIAAAJIABAXQACA3ABAwIAAA/IgBAKIgBAlIgCAbIAAABIAAACIAAABIgbCaIAAABIgBAAIAAABIAAABIAAAAIgRArIg2B7QgsBhgHgjQgHgjgmAdQglAdgWgqQgZgqgQA/QgGAYgKAAQgPAAgXg6g");
	this.shape_48.setTransform(0.6,-25.1);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#DD691C").s().p("AAAAAIAAAAIAAAAg");
	this.shape_49.setTransform(18.8,-65.3);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FF6633").s().p("AgrBPQAIBNgnABQgsg4gFglIgBgHIgDgeIAAgDIgQgaIAAgFIAAgDQgFgUgHgNQgHgOgKgIIgJgGQgIgIAHgRIAAAAIAAgBIABgCIABgDIACgHQACgHAphGIgBgDIABACQAOAlAcAdQgZAEgMAgQACABACAUQAEATASADQgHAIACARQADARAKAPQAZAoAkgEQAHAAAVgHQAVgJADgFQACAEAQAHQARAHAEAEQAKAOAEgVQABgJAKgLIALgMIAAgEIACgKQAGABAHgEQAGgGAFgLQALgdgNgTQAdAHgKgdIAAgBQAYASAGgOIABgEIABgGIADgYIADALIAFAMIACAHIABABIgBABIgBAAIACAAQAJAUgGANQgFAGgJAGQgHAGgVAdIgBAEIgBABQgGALgBAYIgBAKIAAAQQgGhHgTAzQgBAngGAdQgIAsgSATQgQgDgOhoQgGAAgJgLQgHB1gWADQgFAVgGAAQgOAAgShvgACGBRIAAgCIAAAFIAAABIAAgEg");
	this.shape_50.setTransform(0.7,-56.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#E11F27").s().p("AAfCKQgEgEgRgHQgOgHgCgEQgDAFgXAJQgVAHgHAAQgkAEgZgoQgKgRgDgRQgCgRAHgIQgSgDgEgTQgCgUgCAAQAMgfAZgEIACACQAqApAxAAQAuAAAogoIACgCIgJgnQgJgnAvgfIAVAkIAOAWIABAAIAAABIAHASIAKAeIgDAYIgBAGIgBAEQgGAMgYgQIAAABQAKAbgdgHQANATgLAdQgFALgGAGQgHAGgGgDIgCAMIAAAEIgLAMQgKALgBAJQgCANgFAAQgDAAgEgGgACcgEIgBAAIABgBIAAABg");
	this.shape_51.setTransform(3.2,-64.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44}]}).wait(345));

	// Tail
	this.instance_9 = new lib.mc_01();
	this.instance_9.setTransform(-1,-4.9,1.102,1.449,0,0,0,18.6,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(345));

	// Face
	this.instance_10 = new lib.Symbol1_1();
	this.instance_10.setTransform(11.6,-50.3,0.812,0.245,0,37.7,-142.3,74.8,52.1);

	this.instance_11 = new lib.Symbol1_1();
	this.instance_11.setTransform(-8.4,-50.4,0.812,0.273,-45,0,0,74.8,52.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11},{t:this.instance_10}]},9).to({state:[]},4).to({state:[{t:this.instance_11},{t:this.instance_10}]},5).to({state:[]},4).wait(323));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.7,-96.1,57.8,231.9);


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

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F204B").s().p("AYDFLI/VAAIAAqVIflAAIAAABQBRAKAABZIAAHNQAABZhRAKIAAABgA2GFLIh8AAQhhgCAAhiIAAnNQAAhjBkgBIB5AAIOmAAIAAKVg");
	this.shape.setTransform(197.3,32.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgGDZIAAmxIANAAIAAGxg");
	this.shape_1.setTransform(154.9,32.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance = new lib.Symbol2copy();
	this.instance.setTransform(424,32.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(14.4,-0.8,819.2,66.2);


(lib.Button_Set_1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgGDZIAAmxIANAAIAAGxg");
	this.shape.setTransform(149.7,32.2);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 2
	this.instance = new lib.Symbol4copy2();
	this.instance.setTransform(339.6,32,1,1,0,0,0,199.5,23);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol3copy3();
	this.instance_1.setTransform(512.6,31.5,1,1,0,0,0,512.6,31.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.6,-26.8,875,121);


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
	this.instance = new lib.Light_Pillar();
	this.instance.setTransform(127,896.5);

	this.instance_1 = new lib.Line();
	this.instance_1.setTransform(0,70,0.79,1,0,180,0);

	this.instance_2 = new lib.Line();
	this.instance_2.setTransform(0,140,0.79,1,0,180,0);

	this.instance_3 = new lib.Line();
	this.instance_3.setTransform(0,210,0.79,1,0,180,0);

	this.instance_4 = new lib.Line();
	this.instance_4.setTransform(0,280,0.79,1,0,180,0);

	this.instance_5 = new lib.Line();
	this.instance_5.setTransform(0,350,0.79,1,0,180,0);

	this.instance_6 = new lib.Line();
	this.instance_6.setTransform(0,420,0.79,1,0,180,0);

	this.instance_7 = new lib.Line();
	this.instance_7.setTransform(0,490,0.79,1,0,180,0);

	this.instance_8 = new lib.Line();
	this.instance_8.setTransform(0,560,0.79,1,0,180,0);

	this.instance_9 = new lib.Line();
	this.instance_9.setTransform(0,630,0.79,1,0,180,0);

	this.instance_10 = new lib.Line();
	this.instance_10.setTransform(0,700,0.79,1,0,180,0);

	this.instance_11 = new lib.Line();
	this.instance_11.setTransform(0,770,0.79,1,0,180,0);

	this.instance_12 = new lib.Line();
	this.instance_12.setTransform(910,0.3,0.624,1,90);

	this.instance_13 = new lib.Line();
	this.instance_13.setTransform(980,0.3,0.624,1,90);

	this.instance_14 = new lib.Line();
	this.instance_14.setTransform(70,0.3,0.624,1,90);

	this.instance_15 = new lib.Line();
	this.instance_15.setTransform(140,0.3,0.624,1,90);

	this.instance_16 = new lib.Line();
	this.instance_16.setTransform(210,0.3,0.624,1,90);

	this.instance_17 = new lib.Line();
	this.instance_17.setTransform(280,0.3,0.624,1,90);

	this.instance_18 = new lib.Line();
	this.instance_18.setTransform(350,0.3,0.624,1,90);

	this.instance_19 = new lib.Line();
	this.instance_19.setTransform(420,0.3,0.624,1,90);

	this.instance_20 = new lib.Line();
	this.instance_20.setTransform(490,0.3,0.624,1,90);

	this.instance_21 = new lib.Line();
	this.instance_21.setTransform(560,0.3,0.624,1,90);

	this.instance_22 = new lib.Line();
	this.instance_22.setTransform(630,0.3,0.624,1,90);

	this.instance_23 = new lib.Line();
	this.instance_23.setTransform(700,0.3,0.624,1,90);

	this.instance_24 = new lib.Line();
	this.instance_24.setTransform(770,0.3,0.624,1,90);

	this.instance_25 = new lib.Line();
	this.instance_25.setTransform(840,0.3,0.624,1,90);

	this.instance_26 = new lib.Grass();
	this.instance_26.setTransform(-234,440.5);

	this.instance_27 = new lib.Symbol5();
	this.instance_27.setTransform(468.1,594,1.504,1.142,0,0,180,394.7,110.5);
	this.instance_27.alpha = 0.309;

	this.instance_28 = new lib.background();
	this.instance_28.setTransform(533.2,396.6,1.411,1.411,0,0,0,436.6,129.3);

	this.instance_29 = new lib.sky();
	this.instance_29.setTransform(688.3,513.7,1.411,1.411,0,0,0,566,399.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B5B838").ss(1,1,1).p("AqJlCIGBAWIhyDgAGtAkIDdDgAm3gGIg8FJ");
	this.shape.setTransform(843.3,584);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = this.instance_29.mask = this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,808);


// stage content:
(lib.Awaveinawire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Main BG
	this.instance = new lib.Bg();

	this.instance_1 = new lib.Elewire();
	this.instance_1.setTransform(579.9,271.3);

	this.instance_2 = new lib.RedParrot();
	this.instance_2.setTransform(201.8,266.3);

	this.instance_3 = new lib.sparrow_yellow1();
	this.instance_3.setTransform(755.1,259.9,1,1,0,0,0,28.2,37.5);

	this.instance_4 = new lib.sparrow_orange();
	this.instance_4.setTransform(882.3,261.8,1,1,0,0,0,28.4,37.7);

	this.instance_5 = new lib.sparrow_red();
	this.instance_5.setTransform(610.3,261.3,1,1,0,0,0,27.4,36.5);

	this.instance_6 = new lib.sparrow_blue();
	this.instance_6.setTransform(473.8,261.8,1,1,0,0,0,28.4,37.7);

	this.instance_7 = new lib.LeftLeg();
	this.instance_7.setTransform(194.1,277.8,1,1,0,0,0,0,13.9);

	this.instance_8 = new lib.LeftLeg();
	this.instance_8.setTransform(212.2,277.8,1,1,0,0,180,0,13.9);

	this.instance_9 = new lib.Button_Set_1copy2();
	this.instance_9.setTransform(622.6,758.9,1.25,1.25,0,0,0,512.6,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_8},{t:this.instance_7}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(278,353,1537,1129.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;