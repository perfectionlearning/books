(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 808,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Grass.png?1492183553811", id:"Grass"}
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
	this.shape_2.graphics.f("#014AB1").s().p("AAbAIQgGAGgDgOQgGAUgKACQgGAAgDgEQgGgIAOgWQAJgVhzA1QBng7AEgCQgCApBHhFIAhgSIACgBIgCACQgeAcgQAbQgIASADADQgpAwgNAzQAKgvASgig");
	this.shape_2.setTransform(0,-4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.6,-13.8,21.4,27.7);


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
	this.shape_12.graphics.f("#7A4B00").s().p("AAQaJIhVAAMAAAgz/QAngRAegBQAfgBAmASIABAAMgABA0Ag");
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
p.nominalBounds = new cjs.Rectangle(-10.6,-13.8,21.4,27.7);


(lib.sparrow_red = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.MCs();
	this.instance.setTransform(27.5,46.3,1,1,0,0,0,-75.9,-58.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-58.3,rotation:-30,x:27.6,y:46.4},9).to({regY:-58.4,rotation:0,x:27.5,y:46.3},8).to({regY:-58.3,rotation:-30,x:27.6,y:46.4},8).to({regY:-58.4,rotation:0,x:27.5,y:46.3},9).wait(1));

	// Layer 3
	this.instance_1 = new lib.MC12();
	this.instance_1.setTransform(87.1,114.2,1,1,0,0,0,-41.6,-62.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-41.5,regY:-62.6,rotation:-5.2,y:113.9},9).to({regX:-41.6,regY:-62.4,rotation:0,y:114.2},8).to({regX:-41.5,regY:-62.6,rotation:-5.2,y:113.9},8).to({regX:-41.6,regY:-62.4,rotation:0,y:114.2},9).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383E30").s().p("AiDCLQADhFBNgVIAogjIBEhMIACgBQAggMATgXQAIgJAGgkQAKAjgCARQgBARgtAcIhmBlQAxA8gxAbQAPhQgwAQQg7AGgEA3QgFAFgFAAQgFAAgEgFg");
	this.shape.setTransform(74.3,142.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgWANQgIgFAAgIQAAgHAIgGQAJgFANAAQAJAAAHADIgCABQgDADAAAEQAAAFADACQADACAFAAQAEAAADgCIACgBIAAABQAAAIgKAFQgIAGgNAAQgNAAgJgGg");
	this.shape_1.setTransform(44.6,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDIABgBQADgCACAAQAEAAADADQADADAAADIgBAFIgCACQgDADgEAAQgDAAgDgDg");
	this.shape_2.setTransform(46.8,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A2016").s().p("AgkAVQgOgJAAgMQAAgMAOgKQAPgIAVAAQAVAAAPAIQAPAKAAAMQAAAMgPAJQgPAKgVAAQgVAAgPgKgAgWgOQgIAFAAAJQAAAGAIAFQAJAGANAAQANAAAIgGQAKgFAAgGIAAgDIABgFQAAgFgDgDQgDgDgEAAQgEAAgCACQgHgDgJAAQgNAAgJAGg");
	this.shape_3.setTransform(44.6,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#014AB1").s().p("AABACIgFgFIAHADIACABIgBADIgDgCg");
	this.shape_4.setTransform(86.6,113.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BF0000").s().p("Ah0hcIgIgLIAAgBIgBgBIgTgfQDyDWAKgRIAEgBIAGAWQAOALAKAMQAFAYgEAGIgCACQgYAAjpjlg");
	this.shape_5.setTransform(147.2,115.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AABAAIgCAAIADAAg");
	this.shape_6.setTransform(36.1,95.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#191D1C").s().p("AAhAfIgggKIiYgtQBWgPBXAKQBBAGBBATIhuAmg");
	this.shape_7.setTransform(15.3,23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#939158").s().p("AAWAEQhXgHhWANICrgnICEA7QhBgThBgHg");
	this.shape_8.setTransform(15.3,19.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4897E2").s().p("AABAAIAAAAIgBAAg");
	this.shape_9.setTransform(112.2,80.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#2582D4").s().p("AKJLLQkBh/gVgIIktiAQhGglhHgpIgCgBIgJgGIgfgJQh8gnhxhhQgsgmgrgvQgGA1gXgHQgHgCgHgGIgDgDQgvgvgjgqQgigpgWgjQglg5gGgvQgOhkBBg4QBCg4B4AKIAJABQB1gIA5grQA4gsgrh1Qgqh2g3geQg3gfgtgPQhDgXhBAIQh6APhDA3QAeg3BAgeQBVgpBxAQQB0APBfBDQBpBKAuByQAEAbANAZQAcA4BGAyQCABoCICaICQDGQAfARAXAYQAuBbjZh7QAIAVAIAaIAlAkIASAfIATAeIABACIAAABIAIALIAdAmQAVAYALAXQAKAYgBAWQgBAPgHAOIAhAoQCyDXAoAlIAHAGQAKAJAKAGIhlgygACwAmIADgBIAAgBgAiWmjIAAABIABgBIAAAAg");
	this.shape_10.setTransform(94.4,76.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#004B8E").s().p("ALVJQIgIgDIgBgBQgKgFgKgJIgHgHQgogkiyjYIghgnQAHgPABgOQABgXgKgXQDoDwAKgRQACgDgBgKQBpCGgGAnIAAACQBABYgcAPQhDgugXgzgABrIgQgOgEgiggQgmgOhTABQhJABghgYQAygpALgcQBeAQhmi4IgEgFIgZgTQgdgTgLgBQgEAFgEANQgDANAAAMIgEAAQgDgHgXgYQgXgbgJgEQgZgZACAZIAAArQgUgpgMgRQgggwgWAIIAAAIQAAAPADAQIAFAfQgcgPgTgkQgVgugRgbIAABSIgEgEQgXgqgJgTQgSgqgDgfQAXAHAGgzQArAtAsAmQBxBgB8AoIAfAJIAIAHIACACIABgDQBHAqBGAlIEtCAQABAggIASIAQA4IgxAGQi1AcgIAAIgBAAgAnPFaQlekjARnYQAOhkgoiqIAgAKQAQAbAYAWQAcBKAAAuIAAA+QAFDvBMCvIAMAaIAPAWIgEgBQgBgBABABIABABQCADyESBtQAoAQBEAUQg3AbgdAeQipgqhnhIgAFKApIglgkQgIgYgIgVQDZB5guhZQAmAmAOA6QAWAZASAaQAGAQgOAAQgjAAinhyg");
	this.shape_11.setTransform(97.8,94.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#4CA9FC").s().p("AHzG1QgLgXgVgYIgdgmQD7D1AKgQQAEgHgFgXQAgAlgBAqIANARQABAKgCAEIgCABQgXAAjZjhgAgtJ/QhEgUgogPQkShuiAjyIgBgBIADABIABAAIgPgYIgMgZQhMiwgFjtIAAg+QAAgugchJQgYgXgQgbIAJACIBugoIiFg8QAHgbAOgXQBDg3B6gPQBBgIBDAXQAtAPA3AfQA3AeArB2QAqB1g4AsQg5Arh1AIIgJgBQh4gKhCA4QhBA4AOBkQAGAtAlA7QAWAjAiApQAjAqAvAvIADADQAHAGAHACQADAfASAqQAJATAXAqIAEAEIAAhRQARAaAVAuQATAlAcAPIgFggQgDgQAAgOIAAgIQAWgJAgAwQAMASAUAoIAAgrQgCgZAZAZQAJAFAXAaQAXAYADAHIAEAAQAAgMADgNQAEgNAEgEQALAAAdATIAZATIAEAGQBcCohHAAIgNgBgAGaE0IgSgfQDmCdgUg7QAmA1AWA6IAEAMIAAAFIgCAEQAAAAAAAAQAAAAgBABQAAAAAAAAQgBAAAAAAQgZAAjjjIg");
	this.shape_12.setTransform(91.6,70.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#262B20").s().p("AgVBOQAXgygpAHQgzgEgLArQgFACgDAAQgGAAgDgFQAMg2BEgEIAlgSIA8guIACAAQAZgDARgOIAMgKQADACABAFQABADgCAGQgHAMgcAPIhaA5QAKASgBANQgCANgCAIQgEAFgGABIgJgCg");
	this.shape_13.setTransform(79.5,140.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.2,239.2);


(lib.sparrow_orange = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.MCs3();
	this.instance.setTransform(27.5,46.3,1,1,0,0,0,-75.9,-58.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:-58.3,rotation:-30,x:27.6,y:46.4},9).to({regY:-58.4,rotation:0,x:27.5,y:46.3},8).to({regY:-58.3,rotation:-30,x:27.6,y:46.4},8).to({regY:-58.4,rotation:0,x:27.5,y:46.3},9).wait(1));

	// Layer 3
	this.instance_1 = new lib.MC123();
	this.instance_1.setTransform(87.1,114.2,1,1,0,0,0,-41.6,-62.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:-41.5,regY:-62.6,rotation:-5.2,y:113.9},9).to({regX:-41.6,regY:-62.4,rotation:0,y:114.2},8).to({regX:-41.5,regY:-62.6,rotation:-5.2,y:113.9},8).to({regX:-41.6,regY:-62.4,rotation:0,y:114.2},9).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383E30").s().p("AiDCLQADhFBNgVIAogjIBEhMIACgBQAggMATgXQAIgJAGgkQAKAjgCARQgBARgtAcIhmBlQAxA8gxAbQAPhQgwAQQg7AGgEA3QgFAFgFAAQgFAAgEgFg");
	this.shape.setTransform(74.3,142.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgWANQgIgFAAgIQAAgHAIgGQAJgFANAAQAJAAAHADIgCABQgDADAAAEQAAAFADACQADACAFAAQAEAAADgCIACgBIAAABQAAAIgKAFQgIAGgNAAQgNAAgJgGg");
	this.shape_1.setTransform(44.6,17.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgGAHQgDgDAAgEQAAgDADgDIABgBQADgCACAAQAEAAADADQADADAAADIgBAFIgCACQgDADgEAAQgDAAgDgDg");
	this.shape_2.setTransform(46.8,16.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#1A2016").s().p("AgkAVQgOgJAAgMQAAgMAOgKQAPgIAVAAQAVAAAPAIQAPAKAAAMQAAAMgPAJQgPAKgVAAQgVAAgPgKgAgWgOQgIAFAAAJQAAAGAIAFQAJAGANAAQANAAAIgGQAKgFAAgGIAAgDIABgFQAAgFgDgDQgDgDgEAAQgEAAgCACQgHgDgJAAQgNAAgJAGg");
	this.shape_3.setTransform(44.6,17.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#014AB1").s().p("AABACIgFgFIAHADIACABIgBADIgDgCg");
	this.shape_4.setTransform(86.6,113.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BD3300").s().p("ABuCIQgDgHgXgYQgXgbgJgEQgZgZACAZIAAArQgUgpgKgRQgggwgWAIIAAAIQAAAPADAQIAFAfQgcgPgTgkQgVgsgRgbIAABQIgEgEQgXgqgJgRQgSgqgDgfQAXAHAGg1QArAvAsAmQBvBeB8AoIAcAwIgZgTQgdgTgLgBQgEAFgEANQgDANAAAMg");
	this.shape_5.setTransform(66.7,104);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AABAAIgCAAIADAAg");
	this.shape_6.setTransform(36.1,95.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#191D1C").s().p("AAhAfIgggKIiYgtQBWgPBXAKQBBAGBBATIhuAmg");
	this.shape_7.setTransform(15.3,23.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#939158").s().p("AAWAEQhXgHhWANICrgnICEA7QhBgThBgHg");
	this.shape_8.setTransform(15.3,19.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4897E2").s().p("AABAAIAAAAIgBAAg");
	this.shape_9.setTransform(112.2,80.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AIQJ1Qg6gcgZgYQgGAKgvAeQguAegtgdQhLgliSiXQhIgkhFgqIgCgBIgJgFIgfgJQh8gohxhgQgsgmgrgvQgGA1gXgIQADAgASAqQAJATAXAqIAEAEIAAhSQARAbAVAuQATAkAcAPIgFgfQgDgQAAgPIAAgIQAWgJAgAxQAMARAUAoIAAgqQgCgaAZAaQAJAEAXAaQAXAZADAHIAEAAQAAgNADgMQAEgNAEgFQALAAAdAUIAZASIAEAGQBkC3hcgPQAIgWgNgOQgJAQAOAUQhEgUgogQQkShtiAjzIgBgBIADACIABAAIgPgYIgMgaQhMiugFjuIAAg+QAAgugchKQgYgWgQgcIAJADIBugoIiFg8QAHgcAOgXQBDg3B6gOQBBgIBDAXQAtAPA3AeQA3AfAoA0QApA0AGAYQARAtAUAjIgBABIAAAAIABAAIBHgSQAcA3BGAyQCABoCICaICQDGQAfARAXAYQAuBcjZh7QAIAUAIAaIAlAlIAlA9IABABIAAABIAIALIAdAmQAVAZALAXQAKAXgBAXQgBAOgHAPIAhAnQCqDOAsArIAEADQAOAOAOAHIjphygAC6ARIADgCIAAAAg");
	this.shape_10.setTransform(93.4,78.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F0C000").s().p("AgwgrQAaALAWgKQADgDABgFQBABWgcAPQhBgtgXgxg");
	this.shape_11.setTransform(175.3,157.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#980000").s().p("ALrL8IgIgEIgBAAQgNgIgOgNIgEgEQgsgqiqjOIghgoQAHgOABgPQABgWgKgYQDoDwAKgQQACgEgBgKQBpCGgGAnIAAACQgBAFgDADQgMAFgLAAQgNAAgOgGgACILWQgQgKgnglQgmgOhTACQhJABghgZQAygpALgcQBcAQhki3IgEgGIgcgwIAfAJIAIAHIACACIABgCQBHApBGAlQCRCWBMAlQgSAHg3AwQgtAngTAAQgEAAgCgCgAm5IFQlekjARnYQAOhjgoirIAgAKQAQAbAYAXQAcBJAAAuIAAA+QAFDvBMCuIAMAZIAPAYIgEgBQgBgBABABIABABQCADyESBuQAoAPBEAUQg3AbgdAfQipgrhnhIgAGOEfIgIgLIAAgBIgBgCIglg9QDmCdgUg7QAmA1AWA6IAEAMIAAAFIgCAEIAEgBIAGAVQAOAMAKAMQAFAXgEAHIgCABQgYAAjrjmgAihmoQgUgkgRgsQgGgYgpg0Qgog1g3geQg3gfgtgPQhDgXhBAIQh6APhDA3QAeg3BAgeQBVgpBxAQQB0APBfBDQBpBKAuByQAEAbANAZIhHASg");
	this.shape_12.setTransform(95.6,77);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5F0000").s().p("AgpAJQgKgVgWgZIgcgmQD4D0ALgRQADgGgFgYQAgAmAAApIANARQABAKgCAEIgCABQgYAAjXjggAiUiVIgkglQgIgagIgUQDWB7grhcQAjAoAOA7QAWAZATAZQAFAQgNAAQgkAAilhxg");
	this.shape_13.setTransform(145.7,113.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#262B20").s().p("AgVBOQAXgygpAHQgzgEgLArQgFACgDAAQgGAAgDgFQAMg2BEgEIAlgSIA8guIACAAQAZgDARgOIAMgKQADACABAFQABADgCAGQgHAMgcAPIhaA5QAKASgBANQgCANgCAIQgEAFgGABIgJgCg");
	this.shape_14.setTransform(79.5,140.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(35));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,180.2,239.2);


(lib.sparrow_blue = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.instance = new lib.Wings();
	this.instance.setTransform(35,8.2,1,1,0,0,0,17.4,-13.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:17.3,regY:-13.5,rotation:40},8).to({regX:17.4,regY:-13.4,rotation:0},7).to({regX:17.3,regY:-13.5,rotation:40},8).to({regX:17.4,regY:-13.4,rotation:0},8).wait(1));

	// Layer 6
	this.instance_1 = new lib.Tail();
	this.instance_1.setTransform(21.6,23.5,1,1,0,0,0,10.7,-13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({rotation:-3.2},8).to({rotation:0},7).to({rotation:-3.2},8).to({rotation:0},8).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#383E30").s().p("AAkAkIgFgEIgGgEIgHgBQgOgFgDALQgEAHgBgHQABgCADgEIAHgHIgiggQgLgKgDgGQgCgFADgDIAFAGQAHAIAKAEIABAAIAWAYIAOALQAMAEAGAGIAEAFQADAFgDAAIgFgBg");
	this.shape.setTransform(25.6,31.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#666666").s().p("AgDADQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAAAIAAAAIABAAIACAAIABAAIABAAIgBgCIAAAAIACgBQADAAACABQAAABABAAQAAAAAAABQABAAAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgFABIgDgBg");
	this.shape_1.setTransform(31,1.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#1A2016").s().p("AgHAEQgEgCABgCQgBgCAEgCQAEgCADAAQAEAAAEACQAEACgBACQABACgEACQgEADgEAAQgDAAgEgDgAgGgDIAAACIAAABIAAAAQAAAAAAAAQAAAAABABQAAAAAAAAQABABAAAAIAEABIAFgBQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAAAQAAAAgBAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgDgCgCAAIgCABIgCAAIgCAAg");
	this.shape_2.setTransform(31.1,1.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAAABIgBAAIAAgBIABAAIAAgBIABABIAAAAIABAAIgBABIgBABIAAgBg");
	this.shape_3.setTransform(30.5,1.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#262B20").s().p("AAqAfQgHgKgPABQgMgCADALIgHAAIAAgBQgBgGAFgHIgngaQgNgHgDgGQgDgEACgEIAGAGQAIAGALACIABAAIAaAUIAPAIQAXACAHARg");
	this.shape_4.setTransform(23.3,30.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#356C84").s().p("AAAgKIAAABQAFADAGgDQgGAKgNAKQgGgDAOgSg");
	this.shape_5.setTransform(1.1,33.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#40839F").s().p("AglAsIgBgCIAAAAQgBgJAYgfIAAADQADAEAzg1QgDAFABAGIABAGIgHAJQgnAwgJAIIgIAGIgGABIgGgBg");
	this.shape_6.setTransform(4.9,28.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#75AFC8").s().p("AgeAaIAAgBIAAgBIABgDQAFgNAJgKQgEALAygiIgEAHQgyAsgGAAIgBAAg");
	this.shape_7.setTransform(8.2,22.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#599FBD").s().p("AgfAfQgBgCABgFIAGgFIABgFIABAAQACAEA2gwIgEAHIgBABIgBACQg0AzgGAAIAAAAg");
	this.shape_8.setTransform(7.5,23.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4897E2").s().p("AAAAAIAAAAIAAAAg");
	this.shape_9.setTransform(15.6,16);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4894B5").s().p("AghAjIgBgEIADgDQAAgKAIgJQgBAGAAABQADAEA4g2IgHAJQgFAFgDAGQgvAxgGAAIAAAAg");
	this.shape_10.setTransform(6.8,25.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8FBED2").s().p("AgcASIAJgLQADgMAJgJQgLATAwgaIgEALIgIAIQgkAYgJAAQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAgBABgBg");
	this.shape_11.setTransform(9.5,20.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D69E3F").s().p("AgyARIABgBIAGgEQAGgFADAAIACAEIAAAGIABAAIAGgHIAIgHIAFAAIAAAKIAHgNQAGgKAEACIAAACIAAAGIgBAGQAGgDAEgGIAJgRIAAATIABgBIAHgOQAFgKAAgHIADgCIABAAIABAGIABAHQAFAAAEgLIAJgWIABALIABANIABABQgdA1g9AZIgJADIgIADIgCAAIgFgGQgDADACAFIgDAAQgQAAAVgng");
	this.shape_12.setTransform(26.7,22.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E5E1E0").s().p("AgfApQgCgDAIgTQAPgaAdgdIACgCIAHgCIgHALIAAABQgWAoAUgDQABAEAGAGIAHAGQgDACgEABQgHACgLAAQgRAAgJADQgJAIgDAAIgBAAg");
	this.shape_13.setTransform(19.4,27.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1F75C2").s().p("AhwB/IAIgGQAJgIApgyIAHgJIgBgGQgBgGADgFQACgFAFgGIAHgJIABgCIABgBIAEgHIAEgHIAJgGIADgLQgxAbAKgTQAFgGAHgEIAiguQAdgjAdgYQAQgLAHgNIAQAEIAVAHIAQAHQANAGg6CdIgHACIgCABIghASQhFBJACgsQgGADhoA/QAPgLAGgLgAASgnIABAAIgBAAg");
	this.shape_14.setTransform(13.6,20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#939158").s().p("AgDgFIAlAHQgTgCgSABQgPABgPAEg");
	this.shape_15.setTransform(37.8,2.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#B15105").s().p("Ag1BjIgBgHIgCgDQgCgBgHAFIgGAFIAHgMQA6icgNgHQBBAEAagYQgHARABAKIAAAOQgCA2gRAnIgFALIAAAAIgBAAIgCgNIgBgLIgIAWQgFALgFAAIAAgHIgBgGIgBABIgDABQgBAIgEAJIgHAOIgBABIAAgTIgHARQgEAIgHAEIABgHIABgIIAAgBQgFgCgHALIgIANIAAgKIgFAAIgHAHIgGAIg");
	this.shape_16.setTransform(28.8,14.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FED375").s().p("Ag8CBQgJgDgHgHIgBgBIABgBIAJgDIAIgDQA9gZAdg3IABAAIAAgBIAAAAIAFgKIAAgBQARgmACg3IAAgOQgBgKAHgRQAFgFAEgHIAHgCQgJAnAEAXQADBrhOBCIgNAIQgTALgZAFIgBgBg");
	this.shape_17.setTransform(29.8,16.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#191D1C").s().p("AghAAQAPgEAPgBQASgDATAEIgiAJIgGACIgCAAg");
	this.shape_18.setTransform(37.8,2.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#2C7ED2").s().p("AggApIgRgHIgUgHIAIgSQABgGAKgKQAJgMAMgHQANgHAKgDQANgFAPACQAcADAQAMQADAGABAGIgeAMIAaAJIABgBQgDAHgGAFQgXAVg1AAIgOAAg");
	this.shape_19.setTransform(30.2,2.7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8CC2FF").s().p("AhMAjQAEgGABgGQAKgYAYgRQAWgQAYgDQAagEAUAKQAPAGAGANQgPgNgcgDQgPgCgQAFQgIAEgMAHQgNAHgJAKQgKAMgBAFIgIATIgRgEg");
	this.shape_20.setTransform(29.2,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(32));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-2.4,41.3,53.6);


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
	this.shape_7.graphics.f("#000000").s().p("AhCAgQgPgRgDgFQgFgaAcgeIAEAEQASAOAzABIA4AAQAAADACADIAQAOQgKAHgCAEQgCAGgBAQQgWASgxADIgMAAQgpAAgNgPg");
	this.shape_7.setTransform(3.6,-72.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#969696").s().p("AhsgDQARgfAFgFIAEgGQgLAXALAMQgbAcAFAcQgTgaAPgXgABQAGIgHgCQgDgEgBgEQgBgFACgFQAEgFAGgBQAGgCABAKQABAFANAGIAOAEQgWADgKAAIgDAAg");
	this.shape_8.setTransform(5.6,-76.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#333132").s().p("AgRAmQgFgBgEgDIgQgOQgCgDAAgDQgBgFABgFQADgRAKgIQAIgIATgKIAAAHQgBARAYAEIAFACQAMAFAKATQgJAHgSAKQgOAIgKAAQgGAAgGgCgAgLgOQgHABgEAFQgCAFABAEQABAFAEAEIAHADQAKAAAXgEIgPgFQgLgEAAgGQgBgIgFAAIgBAAg");
	this.shape_9.setTransform(15,-77);

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},27).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1,p:{rotation:-10.7,x:17.8,y:-84.1}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},5).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1,p:{rotation:-10.7,x:17.8,y:-84.1}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},12).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},5).to({state:[]},44).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_7},{t:this.shape_9},{t:this.shape_8},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},27).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1,p:{rotation:-10.7,x:17.8,y:-84.1}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},5).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1,p:{rotation:-10.7,x:17.8,y:-84.1}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},12).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_7},{t:this.shape_9},{t:this.shape_8},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},5).to({state:[]},28).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},48).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1,p:{rotation:-10.7,x:17.8,y:-84.1}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},5).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_7},{t:this.shape_9},{t:this.shape_8},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},5).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.instance_1,p:{rotation:-10.7,x:17.8,y:-84.1}},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]},12).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_7},{t:this.shape_8},{t:this.shape_6},{t:this.instance_1,p:{rotation:-3,x:19.5,y:-79.3}},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]},5).to({state:[]},33).to({state:[]},1).wait(56));

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

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_8}]}).to({state:[]},4).to({state:[{t:this.shape_37},{t:this.shape_38},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.instance_8}]},5).to({state:[]},18).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},71).to({state:[]},27).to({state:[{t:this.shape_43},{t:this.shape_42},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39}]},55).to({state:[]},48).to({state:[]},60).wait(57));

	// Layer 2
	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#F8C81C").s().p("AAAgBIABACIgBABIAAgDg");
	this.shape_44.setTransform(-23,-54.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#254494").s().p("AAAAAIAAAAIAAAAg");
	this.shape_45.setTransform(24,-25.7);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFF004").s().p("AAAABIAAgBIAAABg");
	this.shape_46.setTransform(24,-25.9);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#1F4097").s().p("AgBEEQgggEgCjUQgTDSgWADQgSgSgJgsQgEgagCgkQg0g9AJivQARhhgNhQQAHAOAFAUIAAADIAAAFIAQAcIAAADIADAeIABAGQAFAlAsA5QAngBgIhNQAaCdAQhEQAXgCAHh1QAJALAGgBQAOBoAQADQASgSAIgtQAGgcABgoQATg1AGBKIAAgQIABgKQABgZAGgNQgJBKAPBZQAICZgnBDIgBAHIAAAHQgFAlgsA4QgogBAJhNQgSBvgPAAQgGAAgDgVgACNiaIAAAFIAAgCIAAgEIAAABg");
	this.shape_47.setTransform(0,-32.5);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#DD691C").s().p("AAAAAIAAAAIAAAAg");
	this.shape_48.setTransform(18.8,-65.3);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#122A68").s().p("Ah0FdQgnhggFgFQgjgpgEhYIgBgZIAAgVIAAgXQgDgHACgFIgDguIgBgLIgBgLIAAgCIAAAAIgGg8QgIhCgMhOIgCgQQgCgVAAgRIACAAIgBgEIAAgCIABgLQAEgkASgZIABgBQAIgGAHgKIAAAAIAKgPIAFgGQgHAQAIAJIAJAFQAKAIAHAOQANBQgRBhQgJCxA0A7QACAkAEAaQAJAsASASQAWgDATjQQACDSAgAEQAQBFAaifQgJBNAoABQAsg4AFglIAAgHIABgHQAnhDgIiZQgPhZAJhKIABgBIABgDQAVgdAHgGQAJgGAFgHQAGgNgJgTIAAAAQACAFAGAHIABACIALAMIAKAPIABABQAHAMAEAPQAFANACAPIABAJIABAHIAAAHIAAAJIABAXQACA3ABAwIAAA/IgBAKIgBAlIgCAbIAAABIAAACIAAABIgbCaIAAABIgBAAIAAABIAAABIAAAAIgRArIg2B7QgsBhgHgjQgHgjgmAdQglAdgWgqQgZgqgQA/QgGAYgKAAQgPAAgXg6g");
	this.shape_49.setTransform(0.6,-25.1);

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
(lib.Continuouswaves = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Main BG
	this.instance = new lib.Bg();

	this.instance_1 = new lib.Elewire();
	this.instance_1.setTransform(579.9,271.3);

	this.instance_2 = new lib.RedParrot();
	this.instance_2.setTransform(201.8,266.3);

	this.instance_3 = new lib.sparrow_red();
	this.instance_3.setTransform(610.4,261.2,0.305,0.305,0,0,180,90,119.4);

	this.instance_4 = new lib.sparrow_blue();
	this.instance_4.setTransform(473.8,266.1,1.376,1.407,0,0,0,20.6,27.4);

	this.instance_5 = new lib.sparrow_orange();
	this.instance_5.setTransform(882.3,261.7,0.315,0.315,0,0,180,89.9,119.3);

	this.instance_6 = new lib.LeftLeg();
	this.instance_6.setTransform(194.1,277.8,1,1,0,0,0,0,13.9);

	this.instance_7 = new lib.LeftLeg();
	this.instance_7.setTransform(212.2,277.8,1,1,0,0,180,0,13.9);

	this.instance_8 = new lib.Button_Set_1copy2();
	this.instance_8.setTransform(622.6,758.9,1.25,1.25,0,0,0,512.6,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2}]},1).to({state:[{t:this.instance_7},{t:this.instance_6}]},1).to({state:[{t:this.instance_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(278,353,1537,1129.2);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;