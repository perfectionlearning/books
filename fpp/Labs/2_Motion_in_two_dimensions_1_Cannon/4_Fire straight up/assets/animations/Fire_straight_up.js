(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 1024,
	height: 808,
	fps: 24,
	color: "#FFFFFF",
	manifest: [
		{src:"images/Path.png?1490086202728", id:"Path"}
	]
};



// symbols:



(lib.Path = function() {
	this.initialize(img.Path);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,16,18);


(lib.wood = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFD222").s().p("AAAAAIAAAAIAAAAg");
	this.shape.setTransform(972.7,95.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF7F2E").s().p("AkJJ0QgYgPgMgcQghg+g3AbQg3AagZAAQgZAAgKgbQgJgagdADQgTAChBAVQgYAJgWgHQgRgGgNgNQgWgUAAgcQgoiuhthCQgIgIgFgNIgGgXQgFgQATgXQBTiNiCiBQgIgEgGgGQgSgRAAgYQAAgYA8gSQBUgagmhOQgHgLAAgMQgBgUAQgSQAQgOAVAAQANAAAJAEQAMAGALAQQALAPALgSQAKgQgHgQQgNgcARgOQALgLAHgCQARgEAfALQBHAXgFhLIAAgCQAAgaALgRQASgcAtgBQAZAAAWAQQBlA1BHhdQA6g3BTAAQBUAAA7A5IAMAXQALAVAKAKQAlAjA4gzQANgMAiAAQAbAAAcAVQAlAaABAqQABAOgGAPQgaBiB4g5QAUgMAjAAQAwAAAcAfQAhAjAAApQAAAEAVAgQAWAgB7gNQCtAdAYAXQAeAeAAAqQAAAqg9AKQh3AzC9A4QARAGAPAQQAYAYAEAlQACAjgeAdQgLALggAIQgaAHgGAAQglANgFALQgFAJAMAYQAeA/gnAaQgdATg3gIQgdgFgkAlQgdAfgqBDQgJAUgSASQgnAlg3AAQggAAgbgNQhNgjg1ACQg4ACgQAsQgZBAhMAGQgyADglgQQgkgUgqAHQgHABhMAWQgjAKgcAAQgkAAgagQgAknIKQAJAYAVANQAoAZBCgUQBBgTAFgBQAkgGAhARQAdAOApgCQBBgGAVg2QAOgmAvgCQAugBBBAdQAXAMAbAAQAuAAAhggQAPgPAIgSQAjg6AZgZQAfggAYADQAuAIAagRQAhgWgag2QgKgVAEgHQAEgKAggLQAFAAAWgFQAcgIAJgJQAZgZgCgeQgDgggUgVQgNgNgPgFQiggwBlgsQA0gJAAgjQAAgkgagaQgVgUiSgYQhnAKgTgbQgTgbAAgEQAAgjgbgeQgYgbgpAAQgdABgSAKQhlAwAWhTQAFgNgBgMQgBglgfgWQgYgSgWAAQgdAAgLALQgvArgegeQgKgJgJgSIgLgTQgygxhHAAQhGAAgyAwQg7BPhWgtQgTgPgWABQglABgQAYQgJAPAAAWIAAABQAEBAg7gTQgbgJgOADQgGABgKAKQgOAMALAZQAGANgJAOQgJAPgJgNQgKgOgKgFQgHgDgLAAQgTAAgMAMQgOAPABARQAAALAGAJQAfBDhGAWQgzAPAAAVQAAAVAPAPQAFAFAHADQBuBuhGB6QgQATAEAOIAFAUQADALAIAGQBcA5AjCVQAAAYASASQALALAOAEQATAGAVgHQA2gSAQgCQAZgCAHAWQAJAYAVAAQAVAAAwgXQANgHAMAAQAdAAAUAlgAkLHxQARgLALgiQAMguAAgGQALhmAGgGQARgiARgXQARARAAAXQgMBbBJAWQAeABgYgiQAHgiAoAFQAxARAogWIAvgmQAmgfARAAQAjAAAAgRQAAgGgdgLQA+gMAQgRIAYgaQAGgIAXgFIAAC2IAABsQgcAGgjgMIAAgiQgRgogWARQgSAMAAAcQgWgLgMAAQgcAAgiAcQgpApg8gDQg+gDgXgMQgdgLgtAiQgqASgWAAIgKgBgAk/GtQgZgTg8AYIg5gbQhbhNg5BMQAXgohFhEQhihoAyg1QA1g5hJhBQBQAiCIAoQgiAcAAAXQAAAiBRAVQBVgFAEgUQAEgVAUgJIB4AiQgMAGgGAGQgRAiAoAAIgFAXQhVCdgBAkQAAgLgGAAgAmxEqQAMAXAXAAQAiAAAAgXQAAgXgogXQg5gXhVAMQgdhKgtAzQgSgGgLAAQgcAAAAAXQAAAdBKAAQgGAFARARQAGARAWAAQAXAAAGgFQAGgRBKAAQARAAAFARgAFfB/IDZhQQgGAGAAAGQAAALAzAoQA5AigLAXQgGAXgoALIgzARQgRAGAAAXQAAAcgLALQgRAMgdAFIAMgWQAFgogFgdQgMg+g5AiQgpBsBDAdQhNAWgRAuQAAAGgGAFgAgqEUQgrgPgLgxQBKA2A3gZQgMALAAAMIAAALQgMAIgPAAQgQAAgUgHgAhxCMQgBAAAAgBQAAAAAAAAQAAAAABAAQABABABAAQADgqgciuQAAgRAWgXQAjgXAFgiQAXhEAAguQAAgcgigRQARgMAAgXQAAgRgLgRQAnAAAjARQAaAXAAAoQAAAiAMgGQgGg4BJAgQApAvBVgRQBWgRAdBeQAHBDBPAoQBPAnAUgOQAVgPA4AjQgRAzhzAlQg3AVhgASQAJgtgdgLQgzgVgLAbQgMARgGAoQAAAcgcgGQg/gLgcg/QgihChIgGIg/gFQgXAtBbAsQAwABgVA9QAMBAA4gjQAMAAAiAoIgGAFQgcASgMALQhIgWiIgngADiiQIAdAnIgoAXQAAAdAiAAQAcAAAjgRQAigMAAgLQAAgRgRgGQgdgRgGgGQASgFAAgMQAAgXgoAAQguAAAAAjgABIj9QheAXAAAzQAAAoA3AAQBAAAA8g3Qgrg8ggAAQgFAAgFABgAkLB5QAlgUgUglQgUgmhNAhQgLALgSAGQifg/hyggQBuABgNhJQgOhJikBuQAShEAMg+QALgdAMAMQADAFAXACIgCAAQBJgBgXg0QALgLAXAAIBmhQQAGgRBVARQBcARAigXQAigiAogGQARAAALgFQAGAFALARIgtAdQgRAGAAALQAAAiBPAAIAAAMQAGAigtA+QgoA/AAAoIAiCpIgXAtQgogLgtgGgAnviWIBhAAQBHAfhHArQCDBAAWiEQgHg3g9A3QA1hbhogMIhygXQhdAgBMBYg");
	this.shape_1.setTransform(937.5,87.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#ED411B").s().p("AkyLrQgcgSgOggQgmhKg/AgQhAAfgdAAQgeAAgLghQgKgegiACQgVADhLAaQgcAKgZgIQgUgHgPgPQgZgZAAgiQgwjOh9hPQgJgJgFgPIgHgcQgGgTAWgbQBgioiXiaQgJgFgHgHQgUgUAAgdQAAgdBFgVQBggfgrhdQgIgNAAgOQgCgYAUgVQARgRAZAAQAPAAAKAFQAOAHANATQAMASANgVQAMgUgIgSQgPgiATgRQANgNAIgCQATgFAlAMQBRAcgGhZIAAgCQAAgfANgVQAVghAzgBQAeAAAZAUQB1A/BShvQBEhCBfAAQBhAABEBEQACABANAaQAMAZAeAbQAfAaAqglQApgmAeAAQAeAAAhAZQAqAgACAyQAAARgGASQgeB0CKhEQAYgOAoAAQA4AAAgAkQAmAqAAAxQAAAFAZAmQAZAmCNgPQDIAiAcAcQAjAkAAAxQAAAyhHAMQiJA9DbBDQATAHASATQAbAdAEAsQAEApgjAjQgNANglAKQgeAIgHAAQgrAQgGANQgFAKANAdQAjBLgtAeQgiAXg/gKQgigFgpAsQgiAlgwBPQgLAZgVAUQgsAthAAAQglAAgfgQQhZgpg+ADQhBACgSA0QgcBMhZAHQg5AEgqgTQgqgYgyAIQgGABhZAbQgoAMghAAQgpAAgegUgAlJJJQAMAcAYAPQAvAdBOgXQBMgWAHgBQAqgHAmAUQAjAQAygDQBMgGAZhAQAQgsA4gCQA1gCBNAjQAbANAgAAQA3AAAnglQASgSAJgUQAqhDAdgfQAkglAdAFQA3AIAdgTQAngageg/QgMgYAFgJQAFgLAlgNQAGAAAagHQAggIALgLQAegdgCgjQgEglgYgYQgPgQgRgGQi9g4B3gzQA9gKAAgqQAAgqgegeQgYgXitgdQh7ANgWggQgVggAAgEQAAgpghgjQgcgfgwAAQgjAAgUAMQh4A5AahiQAGgPgBgOQgBgqglgaQgcgVgbAAQgiAAgNAMQg4AzgjgjQgLgKgMgVIgMgXQg7g5hUAAQhTAAg6A3QhHBdhlg1QgWgQgZAAQgtABgSAcQgLARAAAaIAAACQAFBLhHgXQgfgLgRAEQgHACgLALQgRAOANAcQAHAQgKAQQgLASgLgPQgLgQgMgGQgJgEgNAAQgVAAgQAOQgQASABAUQAAAMAHALQAmBOhUAaQg8ASAAAYQAAAYASARQAGAGAIAEQCCCBhTCNQgTAXAFAQIAGAXQAFANAIAIQBtBCAoCuQAAAcAWAUQANANARAGQAWAHAYgJQBBgVATgCQAdgDAJAaQAKAbAZAAQAZAAA3gaQARgIAOAAQAiAAAXArg");
	this.shape_2.setTransform(940.3,87.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D00000").s().p("AleNYQghgVgPglQgshUhIAkQhJAkgiAAQgiAAgMgmQgMgjgmADQgZADhVAeQggALgegJQgWgHgSgSQgcgcAAgnQg2jsiQhbQgKgKgGgRIgIggQgHgWAZgfQBujAisiwQgKgGgJgIQgXgXAAghQAAghBPgZQBugjgxhqQgJgPgBgQQgBgcAWgXQAUgUAcAAQARAAAMAFQAQAIAPAWQAOAUAOgXQAOgXgJgVQgRgnAVgTQAQgPAJgDQAVgFArAOQBdAggHhmIAAgDQAAgiAPgYQAYgmA6gBQAjgBAbAXQCHBIBdh/QBOhMBtAAQBvAABOBOQACACAPAdQAOAdATAXQAVAWAygnQAygoAvAFQAvAEAlAdQAwAkACA6QABASgHAVQgiCFCehOQAbgPAugBQA/AAAlAqQArAwAAA4QAAAGAdArQAdArChgRQDlAnAgAgQApApAAA5QAAA5hSANQidBGD7BNQAWAIAUAVQAfAiAFAzQAEAugoAoQgPAPgqAMQgiAJgJgBQgwATgIAPQgFAMAPAhQAnBWgyAiQgoAahIgLQgmgGgwAzQgnApg2BbQgNAcgYAYQgzAzhIAAQgrAAgkgSQhlgvhHADQhKADgWA7QggBXhlAIQhBAEgwgVQgxgcg5AKQgHABhmAeQgtAOgmAAQgvAAgigWgAmMK6QAOAgAcASQA2AjBagbQBZgbAGgBQAygIAsAYQAoATA5gEQBZgHAchMQASg0BBgCQA+gDBZApQAfAQAlAAQBAAAAsgtQAVgUALgZQAwhPAiglQApgsAiAFQA/AKAigXQAtgegjhLQgNgdAFgKQAGgNArgQQAHAAAegIQAlgKANgNQAjgjgEgpQgEgsgbgdQgSgTgTgHQjbhDCJg9QBHgMAAgyQAAgxgjgkQgcgcjIgiQiNAPgZgmQgZgmAAgFQAAgxgmgqQgggkg4AAQgoAAgYAOQiKBEAeh0QAGgSAAgRQgCgygqggQghgZgeAAQgeAAgpAmQgqAlgdgaQgfgbgNgZQgNgagCgBQhEhEhhAAQhfAAhEBCQhSBvh1g/QgZgUgeAAQgzABgVAhQgNAVAAAfIAAACQAGBZhRgcQglgMgTAFQgIACgNANQgTARAPAiQAIASgMAUQgNAVgMgSQgNgTgOgHQgKgFgPAAQgZAAgRARQgUAVACAYQAAAOAIANQArBdhgAfQhFAVAAAdQAAAdAUAUQAHAHAJAFQCXCahgCoQgWAbAGATIAHAcQAFAPAJAJQB9BPAwDOQAAAiAZAZQAPAPAUAHQAZAIAcgKQBLgaAVgDQAigCAKAeQALAhAeAAQAdAABAgfQATgKAQAAQAnAAAbA0gAlVIwQgVgNgJgYQgcg1guAXQgwAXgVAAQgVAAgJgYQgHgWgZACQgQACg2ASQgVAHgTgGQgOgEgLgLQgSgSAAgYQgjiVhcg5QgIgGgDgLIgFgUQgEgOAQgTQBGh6huhuQgHgDgFgFQgPgPAAgVQAAgVAzgPQBGgWgfhDQgGgJAAgLQgBgRAOgPQAMgMATAAQALAAAHADQAKAFAKAOQAJANAJgPQAJgOgGgNQgLgZAOgMQAKgKAGgBQAOgDAbAJQA7ATgEhAIAAgBQAAgWAJgPQAQgYAlgBQAWgBATAPQBWAtA7hPQAygwBGAAQBHAAAyAxIALATQAJASAKAJQAfAeAwgrQALgLAbAAQAWAAAYASQAfAWABAlQABAMgFANQgWBTBlgwQASgKAdgBQApAAAYAbQAbAeAAAjQAAAEATAbQATAbBngKQCSAYAVAUQAaAaAAAkQAAAjg0AJQhlArCgAxQAPAFANANQAUAVADAgQACAegZAZQgJAJgcAIQgWAFgFAAQggALgEAKQgEAHAKAVQAaA2ghAWQgaARgugIQgYgDgfAgQgZAZgjA6QgIASgPAPQghAgguAAQgbAAgXgMQhBgdguABQgvACgOAmQgVA2g/AGQgpACgfgOQghgRgkAGQgFABhBATQgdAJgYAAQgfAAgWgOgAkeElQgGAGgLBmQAAAGgMAuQgLAigRALQAWAGA0gXQAtgiAdALQAXAMA+ADQA+ADApgpQAggcAcAAQAMAAAWALQAAgcASgMQAWgRARAoIAAAiQAjAMAcgGIAAhsIAAi2QgXAFgGAIIgYAaQgQARg+AMQAdALAAAGQAAARgjAAQgRAAgmAfIgtAmQgoAWgzgRQgogFgHAiQAYAigegBQhJgWAMhbQAAgXgRgRQgRAXgRAigAmLGuQAGAAAAALQABgkBVidIAFgXQgoAAARgiQAGgGAMgGIh4giQgUAJgEAVQgEAUhVAFQhRgVAAgiQAAgXAigcQiIgohQgiQBJBBg1A5QgyA1BiBoQBFBEgXAoQA5hMBbBNIA5AbQAhgOAXAAQASAAALAJgAETCAIAGERQAGgFAAgGQARguBNgWQhDgdAphsQA5giAMA+QAFAdgFAoIgMAWQAdgFARgMQALgLAAgcQAAgXARgGIAzgRQAogLAGgXQALgXg5giQgzgoAAgLQAAgGAGgGgAh2EVQAqAPAXgQIAAgLQAAgMAMgLQg5AZhKg2QALAxArAPgAi9CNQCKAnBGAWQAMgLAcgSIAGgFQgigogMAAQg2AjgMhAQAVg9gygBQhbgsAXgtIA/AFQBKAGAgBCQAcA/A/ALQAcAGAAgcQAGgoAMgRQALgbAzAVQAdALgJAtQBggSA3gVQBzglARgzQg4gjgVAPQgUAOhPgnQhPgogHhDQgdhehWARQhVARgpgvQhHggAGA4QgMAGAAgiQAAgogcgXQgjgRgnAAQALARAAARQAAAXgRAMQAiARAAAcQAAAugXBEQgFAigjAXQgWAXAAARQAcCugDAqIgDgBIABABgAlGBBQAUAlglAUQAtAGAoALIAXgtIgiipQAAgoAog/QAtg+gGgiIAAgMQhPAAAAgiQAAgLARgGIAtgdQgLgRgGgFQgLAFgRAAQgoAGgiAiQgiAXhcgRQhVgRgGARIhmBQQgXAAgLALQAXA0hJABIACAAQgXgCgDgFQgMgMgLAdQgMA+gSBEQCkhuAOBJQANBJhugBQByAgCfA/QASgGALgLQAjgQAYAAQAbAAALAVgAETBNIABAAIgBgBgAn9ErQgFgRgRAAQhKAAgGARQgGAFgXAAQgWAAgGgRQgRgRAGgFQhKAAAAgdQAAgXAcAAQALAAASAGQAtgzAdBKQBVgMA5AXQAoAXAAAXQAAAXgiAAQgXAAgMgXgACLhRIAogXIgdgnQAAgjAuAAQAoAAAAAXQAAAMgSAFQAGAGAdARQARAGAAARQAAALgiAMQgjARgcAAQgiAAAAgdgAnahLQBHgrhHgfIhhAAQhMhYBdggIByAXQBoAMg1BbQA9g3AHA3QgPBZhAAAQgfAAgrgVgAhiiyQAAgzBggXQAhgLAyBGQg8A3g+AAQg5AAAAgog");
	this.shape_3.setTransform(945.1,87.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF7F2E").s().p("Egy7ABwIAAjfMBl3AAAIAADfg");
	this.shape_4.setTransform(418,104.2,1.129,1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF7F2E").s().p("EgzgAAzIAAhlMBnBAAAIAABlg");
	this.shape_5.setTransform(429.4,68.9,1.129,1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D00000").s().p("Eg+nAFHQjlgGgfiSQgfiSAFgpQAFgsAYiEQAXiGCrgEMCB5AALQBnG7hnDHg");
	this.shape_6.setTransform(429.5,94.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1071.8,175.7);


(lib.window1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#ECBE7D").s().p("AhFCWIAAjGIADgKIABgGIAAgBQANglAhgfIAHgGIAEgEIABgBIAHgFIAAAAIAIAGIAFAEIAHAGIAAAAQAkAiAMApIACAKIAADGgAAAh3IgGAEIgEADQgcAYgLAdIgCAEIgDAJIgBAFIAAADIAACmIBwAAIAAimIgEgMIgDgIQgLgdgcgZIgFgDIgGgFIAAAAIAAgBg");
	this.shape.setTransform(7.1,15.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag4B9IAAimIABgDIABgFIADgJIACgEQALgdAcgYIAEgDIAGgEIAAgCIAAABIAAAAIAGAFIAEADQAdAZALAdIADAIIAEAMIAACmg");
	this.shape_1.setTransform(7.1,15.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.1,30.2);


(lib.top1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 5
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.149)").s().p("AixEZIhwiYIAAgBIAAmYIAXAAIAOAoIgBAAIAACVIABgBIAkAAIACAAIABAAIAVAAIAAAAIAAiUIAVgoIBXAAIAPAoIAACUIA8AAIAAAAIAAiUIATgoIALAAIA/AAIABAAIAPAoIAACUIAsAAIATAAIAAAAIAAiUIAOgoIBVAAIATAlIAACXIAJAAIAADcIAAABIhwCYg");
	this.shape.setTransform(74.6,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.349)").s().p("AC6BMIBwiWIABgBIEbAAIAAABIAAABIAAAAIgvAdIgDADIiMBbIgBAAIgiAWIgMAEgAlbBMIgjgWIgEgCIgbgSIgCAAIAAgCIimhrIEsAAIAAABIBxCWg");
	this.shape_1.setTransform(73.8,45);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(12,12,12,0.298)").s().p("AErDMIgBAAIAAjbIAKAAIAYAAIAAgBIAAiTIAOgoIBUAAIATAlIAACXIAIAAIAKAAIAIAAIAAiUIAOgoIASAAIABAAIAaAAIAcAAIAUAoIAAFvgAkZDMIksAAIAAlsIABgDIAVgoIAaAAIA5AAIASAAIAOAoIgBAAIAACUIABAAIAMAAIA2AAIAAiUIABgCIAUgmIBMAAIAAGXg");
	this.shape_2.setTransform(73.8,16.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0C0C0C").s().p("AJFABIABgBIAAABgApFAAIAAAAIABAAgAkZAAIAAAAIAAAAgAEqAAIABAAIgBAAg");
	this.shape_3.setTransform(73.8,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlbEZIgjgWIgEgDIgbgSIgCAAIAAgCIimhsIAAltIABgDIAVgoIAaAAIBLAAIAOAoIgBAAIAACVIABgBIAMAAIA2AAIAAiUIABgCIAUgmIBkAAIANAoIgBAAIAACVIABgBIAkAAIACAAIABAAIAWAAIgBAAIAAiUIAVgoIBYAAIAOAoIAACUIA7AAIAAAAIAAiUIATgoIBMAAIAOAoIAACUIASAAIAPAAIAFAAIADAAIAJAAIAAAAIAAiUIAOgoIBjAAIATAlIAACXIAJAAIAKAAIAKAAIgBAAIAAiUIAOgoIBjAAIATAlIAACXIAIAAIAKAAIAaAAIAAiUIAOgoIAbAAIAcAAIAUAoIAAFxIAAAAIAAACIgBAAIABgCIAAAAIgvAeIgDADIiMBcIgBAAIgiAXIgMAEgApFCCIAAgCIABACg");
	mask.setTransform(73.8,24.5);

	// Layer 2
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#62481E").s().p("AE8A9IBnhlIgHAHQAOgOAMgGQANgGATAAQAZgBATANIACABIimBrgADDA9IBPhhIgBADQASgbAoABQAfAAAIANQAHAKgKANIhQBUgABfA9IAHhKQAQgsAsgCQAZgCANAMQAOANgCAZIgsBIgAhKA9IAAhaIABgCIAAAAIACgCQAPgUAhgEIAKgCIAIAAIACAAIADAAIABAAIABAAIABAAIAKAAQApAEAUAaIAABagAipA9IgshIQgDgZAOgNQAOgMAZACQAsABAQAsIAHBLgAkdA9IhPhUQgJgMALgLQAMgNAfAAQAogBASAbIgBgDIBEBhgAlcA9IinhrIACgBQATgNAZABQAUAAANAGQALAGAOAOIgGgHIBmBlg");
	this.shape_4.setTransform(73.8,46.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_4).wait(1));

	// Layer 6
	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#ECC27F").s().p("AlbBMIgjgWIgEgCIgbgSIgCAAIAAgCIiGhVQAPgPAbgFIATgCIAOAAIADAAIAXACQAlAGAMAXQAOgXAhgFIASgCIAXAAIAUACQAkAFALAXQAOgWAhgGIAQgCIAfAAIAQACQAjAGALAWQAOgWAggGIANgCIA7AAIANACQAgAGAOAWQALgWAigGIARgCIAfAAIAQACQAgAFAPAXQALgXAkgFIAUgCIAXAAIASACQAhAFAOAXQAMgXAlgGIAXgCIADAAIAOAAIATACQAbAFAPAPIiGBVIAAACIgDAAIhBAqg");
	this.shape_5.setTransform(73.8,45);

	this.timeline.addTween(cjs.Tween.get(this.shape_5).wait(1));

	// Layer 7
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C29F67").s().p("AlbC7IgjgWIgEgDIgagSIgDAAIAAgCIimhsIBdAAIAOAAIAEAAIQcABIgvAeIgDADIiMBcIgBAAIgiAXIgMAEgAHcicIgaAAIAAgeIASAAIAHAAIABAAIAAAAIAAABIAQAbIACACgAEhicIAAgeIAsAAIAMAegACZicIgGAAIgRAAIgWAAIAAgeIAWAAIARAAIAGAAIATAAIAMAegAg9icIAAgeIA2AAIABAEIAEAagAkFicIAPgbIABgCIABgBIA9AAIABAEIAJAagAnPicIARgcIABgBIABgBIBCAAIAAAeg");
	this.shape_6.setTransform(73.7,33.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#A37D40").s().p("AHdBqIgQgaIAAgBIAAAAIgBAAIAAiTIAOgoIATAAIgOAoIAACuIAAACgAE+BPIgBgBIAAiSIAOgoIANAAIgOAoIAACwgACdBPIgBgBIAAiSIAOgoIANAAIgOAoIAACwgAgRBsIgEgaIgBgDIgBgBIAAiSIAGgLIAPgdIAEAAIgRAmIgCACIABCwgAjFBSIgBgDIgBgBIAAhgIAAgyIAVgoIALAAIgTAmIgCACIAAAyIAAB+gAkUhEIgOgoIASAAIAOAoIgCAAIAACUIgBABIgPAbgAnehEIgOgoIATAAIAPAoIgCAAIAACUIgBAAIgRAcg");
	this.shape_7.setTransform(75.2,7.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E1B672").s().p("AJGDNIwdgCIgDAAIgOAAIhdAAIAAlsIABgDIAVgoIBRAAIAPAoIAACwIBVAAIAAgcIAAiUIABgCIAUgmIBSAAIAOAoIAACwIBYAAIAAh/IAAgxIABgCIAUgmIBNAAIAOAoIAAAxIAABjIAAAcIA7AAIABAAIgBiwIABgCIASgmIBNAAIAOAoIAACUIAAAcIAWAAIARAAIAFAAIAgAAIAAiwIAOgoIBIAAIATAlIAACXIAAAcIA4AAIAAiwIAOgoIBIAAIATAlIAACXIAAAcIAaAAIARAAIAAgDIAAitIAPgoIAaAAIAcAAIAUAoIAAFxIAAAAg");
	this.shape_8.setTransform(73.8,17);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D88F6F").s().p("AJFABIABgBIAAABgApFAAIAAAAIABAAg");
	this.shape_9.setTransform(73.8,37.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.5,-3.6,116.6,56.3);


(lib.Symbol255 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIVClQAyhHAAhaQAAheg3hKIDIAAIAAFJgAg3ClQAyhHAAhaQAAheg3hKICBAAQg3BKAABeQAABaAxBHgApzClQhkAAAAhkIAAiBQAAhjBkgBIBsAAQg3BKAABeQAABaAxBHg");
	this.shape.setTransform(747.3,21);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EAusADZQAMgJANgOQBUhSAAh2QAAh4hUhVIgGgFICNAAQBkAAAABkIAADpQAABkhkAAgEgyvADZIAAmxMBbjAAAIgGAFQhUBVAAB4QAAB2BUBSQALALAOAMg");
	this.shape_1.setTransform(325.9,21.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1,0,819.2,43.5);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AtqDmQhjgBgBhjIAAkCQABhlBjABIbVAAQBkgBAABlIAAECQAABjhkABg");
	this.shape.setTransform(97.5,24.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjHDmQhkgBAAhjIAAkCQAAhlBkABIGPAAQBjgBABBlIAAECQgBBjhjABg");
	this.shape_1.setTransform(342.6,24.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ah7CQQhlABABhlIAAhYQgBhjBlgBID3AAQBlABAABjIAABYQAABlhlgBg");
	this.shape_2.setTransform(231.8,14.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhkBaQgnAAgVgXQgUgXAAgoQAAgoAUgaQAWgbAmAAIDJAAQAnAAAVAYQAUAXAAAoQAAAogUAZQgWAbgmAAg");
	this.shape_3.setTransform(498.8,41.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhkBaQgnAAgVgXQgUgXAAgoQAAgoAUgaQAWgbAmAAIDJAAQAnAAAVAYQAUAXAAAoQAAAogUAZQgWAbgmAAg");
	this.shape_4.setTransform(423.6,41.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhkBaQgnAAgVgXQgUgXAAgoQAAgoAUgaQAWgbAmAAIDJAAQAnAAAVAYQAUAXAAAoQAAAogUAZQgWAbgmAAg");
	this.shape_5.setTransform(498.8,20.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhkBaQgnAAgVgXQgUgXAAgoQAAgoAUgaQAWgbAmAAIDJAAQAnAAAVAYQAUAXAAAoQAAAogUAZQgWAbgmAAg");
	this.shape_6.setTransform(423.6,20.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,516.9,50.5);


(lib.SoldierRihgtlag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhoFgQgMgmgpkvQgpktAZgRQC0i0CjDBQgGDphbGXQgrAxgsAAQgrAAgvgrgAC2kWIAAABIABAKIgBgLg");
	this.shape.setTransform(18.4,39.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.8,79.1);


(lib.SoldierRightlag2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#707070").s().p("AhZDnQAOgYgFgrIgKhwQgHhCgFhFQgFg/AFhYQBtA+BigzIhPGXQACAThPAZQgYAHgJAAQgHAAACgEg");
	this.shape.setTransform(10.6,47.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AhsBmIACgTQAGhZALhkQBxhCBVBUIAACaIgJAvQgtAXgvAAQg3AAg9gig");
	this.shape_1.setTransform(11.1,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.1,71);


(lib.Soldierrighthand2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEA472").s().p("AgVgOQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAgBgBIAnARIADgDQAEALAAAKIgJgBQgNADgHAAQgfAAANghg");
	this.shape.setTransform(2.7,4.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#515151").s().p("Ag7AcQAAgKgEgMIgDgGIBpgiIASAFQAKAEgBAPQAAANgIAIIh1AYIAAgHg");
	this.shape_1.setTransform(11.4,3.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18.1,7.1);


(lib.SoldierRighthand1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#515151").s().p("AhBAGQA1gtA2gNQArANgZAlIgGAEQgQAThWAgQgbgSAKgdg");
	this.shape.setTransform(6.9,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.9,10.7);


(lib.SoldierLeftlag2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AhsBmIACgTQAGhZALhkQBxhCBVBUIAACaIgJAvQgtAXgvAAQg3AAg9gig");
	this.shape.setTransform(11.1,13.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#515151").s().p("AhZDfQAOgXgFgsIgKhvQgHhCgFhFQgFg/AFhYQBtA9BigyIgtHCQALAAioAWQADgJAFgKg");
	this.shape_1.setTransform(10.6,48.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,22.1,72.5);


(lib.SoldierLeftlag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#848484").s().p("AhhFgQgMgmgpkvQgpktAZgRQC0i0CjDBQgGDphbGXQgrAxgsAAQgsAAgugrg");
	this.shape.setTransform(17.7,39.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("AAAgEIAAABIAAAIIAAgJg");
	this.shape_1.setTransform(36.7,12.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.8,79.1);


(lib.Soldierlefthand2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEB288").s().p("AgQAPQgLgKADgHQADgKAFgCQAVgIAOASIACgCQAFAKAAAKIgJAAQgLAEgHAAQgIAAgHgDg");
	this.shape.setTransform(2.6,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#999999").s().p("Ag7AcQAAgKgEgMIgDgGIBpgiQAIACAKADQAKAEAAAPQgBANgIAIIh0AYIgBgHg");
	this.shape_1.setTransform(11.3,3.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,18,7.1);


(lib.Soldierlefthand1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().p("AhBAGQA1gtA2gNQArAMgZAmIgGAEQgQAShXAhQgagSAKgdg");
	this.shape.setTransform(6.9,5.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.9,10.7);


(lib.SoldierFruntview = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8B8B8B").s().p("AACFvIAAgFIgCADIgBgDIAAAEQlPERmDgmIAAh9QGDAZFPkiIABgCIACACQFPEjGDgaIgBB9QgwAFgvAAQlMAAkmjvgAACjCIgDAAQg+ABg4AJIgOllQCSiACVCAIgMFqQhHgOhNgBg");
	this.shape.setTransform(172,136.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#333333").s().p("ACpMjQBHA2ByhNQByhPBziIQBdhsAThAQg9GDAoFFQjHj6jGN1gAqhRRQAolFg9mDQATBABcBsQB0CIByBPQByBNBGg2IhsOpQjGt1jGD6gAhpSHIAAoEQlahDkEkJQgIgogEgpQGDAmFPkPIABgBIACACQFPEOGCgmQgDApgIAoQkEEJlbBDIAAIEIhpB2gAACieIAAgGIgCADIgBgDIAAAGQlPEgmDgZQATkIDAjBQCpioDggkQA4gIA+gBIADAAQBNABBHANQDNAqCeCdQDADBATEIQgfACgfAAQlgAAk0kJgAiFuQIggs7IFkAAIgdM7QiViAiSCAg");
	this.shape_1.setTransform(172,174);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEB288").s().p("AReZxQiumdBkp4Qk8pNFKk7QljmtFpnLQMEADjZNkQCmJYkxGYQD0HOinHwgA5/ZxIAAhyQgjlzA6mBQA6mBg4jDQg4jCBWlCQjYtfL5gIIAKAAQBUBpAtBpQBRC7gqC2QgjCdh/CYQApAnAiAqQA3BEAXBHQBGFcj8HLQBrF4jzIigAqHzXQDyg0BkgRIAAlUII0AGIAAFHIFbA+QkrEZk8AAQk2AAlIkLg");
	this.shape_2.setTransform(176,466.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CCCCCC").s().p("AyMWrQDyoihrl4QD9nLhHlcQgXhGg3hEQghgqgpgnQB+iZAkidQApi2hRi7QgthohThqIgKAAQEGgRCagiQKWIcJOopIHLBAQlpHLFjGuQlLE8E8JLQhjJ4CtGdg");
	this.shape_3.setTransform(171.3,486.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FEB288").s().p("AljNTQg0jEg0grQg1gshRkSQhSkSgImxQgKmzDbhDQDbhDD2AAQD0AADjAvQDhAvgCJ9QgDJ6ivC7QivC7h0DDQipAfh1AAQj6AAgjiEg");
	this.shape_4.setTransform(172.3,254.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(8.3,0,335.6,631.9);


(lib.SmokeBlast = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0BDC0").s().p("ACbGDQgNgNAAgSQAAgRANgNIABgBQgHgHgJgEQgPgGAAgQQAAgaAggCQAFgMgTgIIgcgJIAAgDQAIgHAiAHQAjAIAIgFIAOgIQACgNAJgKQAMgLARAAQARAAALALQAMAMAAARIAAAGQALACAJAJQAMAMAAATQAAASgMAMQgLAKgOACIABALQAAAUgOAOQgOAOgUAAQgLAAgIgDIgHAIQgNANgSAAQgSAAgMgNgAi9FcQgJgIAAgNQAAgOAJgJQAKgJANAAQANAAAJAJQAJAJAAAOQAAANgJAIQgJAKgNAAQgNAAgKgKgAieDmQgTgSAAgbQAAgcATgSIABAAIgZgPQgHgDACgWIADgfQAAgfgdgQQgcgRgxAAIAAgEQAPgQALgDIAUgEQAJgFAIgGIAJgHQgDgLAAgMQAAggAWgXQAXgWAgAAQAgAAAXAWQAXAXAAAgQAAANgEALIAGgBQAbAAASATQATASAAAZQAAAagTATIAAABQAOAQgHAPQgIAOgNARQgOARgUgGQAeAegFAVQgEAUgTATQgUAUgbgBQgbABgTgUgAgCDhQgIgJAAgMQgDgEAIgVQAGgUgYgGQAMgFAEgMQADgQAKABQAMABAIAFIADgFQAHgGALgBQAKABAHAGQAIAIAAAKQAAALgIAHQgHAHgKABIgDAAIABAGQAAAIgGAFIAAABQAHAIAAAKQAAAMgJAJQgIAJgMgBQgMABgHgJgAlSDOQgLgKAAgQQAAgHADgGIABAAQAVgBAPgPQAPgOAAgVQAAgVgPgPQgPgOgVAAQgJAAgIACQACgLAJgJQAMgMASAAQARAAAMAMIAFAFQAGgCAHAAQARAAAMALQAMAMAAASQAAAQgMAMQgFAFgFADQAFAIAAALQAAAPgLALQgFAFgHADQAAAPgLAKQgLAMgQAAQgPAAgMgMgADyBxQgKgJgDgLQgNglgaAEQgaAFgiALQAEgEAJgOQAHgIAFgJQgjgHgKgDQgFgPAUgLQAcgOABgCQAIgJAIgWQAEgGAGgEQgGgLAAgMQAAgVAOgOQAOgNAUAAQAUAAAOANIAHAJQAOgKASAAQAWAAAQAQQAQAQAAAWQAAAQgIALIAGAGQAQAQAAAUQAAAWgQAQQgGAGgHAEQACAHAAAIQAAAWgQAQQgQAQgXABQgXgBgQgQgAAVhQQgHgIAAgLQAAgKAHgJQAIgHALAAQALAAAIAHQAIAJAAAKQAAALgIAIQgIAIgLAAQgLAAgIgIgABPjMQgJgJgCgKQgMgKgiAHQggAIgIAQQANglAXgOQAYgNgegrIAAgBQgIgKAAgPQAAgRANgNQAMgNASAAIAIABIAFgHQAPgPAVAAQAUAAAPAPQAPAPAAAVQAAAHgCAIQAIADAHAHQANANAAATQAAASgNANQgFAFgFADQADAIAAAJQAAATgMAMQgNAMgSAAQgSAAgMgMg");
	this.shape.setTransform(36.4,40);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0BDC0").s().p("ABgHJQgNgMAAgSQAAgSANgNIACgBQgHgHgJgDQgQgGAAgRQAAgZAggDQAFgLgTgJIgcgJIAAgCQAIgIAjAIQAiAHAIgFIAOgIQACgNAJgJQAMgMARAAQARAAAMAMQAMAMgBARIAAAGQAMACAIAJQANAMAAASQAAASgNANQgLAKgOACIABAKQAAAVgOAOQgOANgUAAQgLAAgIgDIgHAIQgNANgRAAQgSAAgNgNgAjNGvQgJgJAAgMQAAgOAJgJQAJgJANAAQANAAAKAJQAJAJAAAOQAAAMgJAJQgKAKgNAAQgNAAgJgKgAAOD/QgIgJAAgMQgDgEAIgVQAIgUgYgGQAKgFAEgMQAEgQAMABQALABAIAFIADgFQAHgGALgBQAKABAHAGQAIAIAAAKQAAALgIAHQgHAHgKABIgCAAIABAGQAAAIgHAFIAAABQAHAIAAAKQAAAMgJAJQgIAJgMgBQgMABgJgJgAijC7QgTgTAAgbQAAgbATgTIABAAIgZgPQgHgDABgWIAEgeQAAgdgdgRQgdgRgwABIAAgGQAPgQALgDIAUgFQAIgEAJgHIAJgHQgDgLgBgMQABgfAWgXQAXgXAgAAQAgAAAWAXQAYAXAAAfQAAANgEALIAGAAQAaAAATASQATATAAAbQAAAYgTATIAAAAQANARgGAOQgIAOgNASQgOAQgUgFQAdAdgEAVQgEAVgTATQgUATgbAAQgbAAgTgTgAk/DDQgLgMAAgPQABgHACgHIABAAQAWAAAOgOQAPgPAAgVQAAgVgPgPQgOgPgWAAQgJAAgIADQADgLAIgJQAMgMASAAQARAAAMAMIAFAFQAHgCAGAAQASAAALAMQAMAMAAAQQAAARgMAMQgFAFgFADQAFAIAAAKQAAAQgLAKQgFAGgHADQABAPgMALQgLALgQAAQgPAAgMgLgADfBtQgKgJgEgLQgNgmgZAFQgaAFgiAKQAEgDAJgOQAHgIAFgJQgkgHgJgDQgFgPAUgMQAbgNACgCQAIgJAIgWQAEgGAGgEQgGgLAAgNQAAgTAOgPQAOgOAUABQAUgBAOAOIAHAJQANgKASAAQAXAAAQAQQAPAPAAAXQABAPgIAMIAGAGQAQAPAAAVQAAAWgQAQQgGAGgHAEQABAHABAHQgBAYgQAPQgPARgXgBQgYABgPgRgAAKhzQgHgIAAgLQAAgKAHgJQAJgHAKAAQALAAAIAHQAIAJAAAKQAAALgIAIQgIAIgLAAQgKAAgJgIgACbkTQgIgIgDgLQgMgJghAHQgjAHgIAQQAOglAYgNQAYgOgdgqIgBgBQgHgLAAgOQAAgSAMgMQAMgNATAAIAHAAIAFgHQAQgOAUAAQAVAAAOAOQAPAQAAAUQAAAIgCAHQAIAEAHAGQANAOAAASQAAATgNAMQgEAGgGACQAEAJgBAJQAAASgMAMQgMANgTAAQgSAAgMgNg");
	this.shape_1.setTransform(43.5,41.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0BDC0").s().p("AA8IEQgNgNAAgRQAAgSANgNIABgBQgHgIgJgDQgPgGAAgQQAAgaAggCQAFgMgTgJIgcgJIAAgCQAIgHAiAHQAjAIAIgFIAOgIQACgNAJgKQAMgLARAAQARAAALALQAMANAAAQIAAAGQALADAJAIQAMAMAAASQAAATgMAMQgLAKgOACIABALQAAAUgOAOQgOAOgUAAQgLAAgIgEIgHAJQgNANgSAAQgSAAgMgNgAivHWQgJgIAAgNQAAgOAJgJQAKgJANAAQANAAAJAJQAJAJAAAOQAAANgJAIQgJAKgNAAQgNAAgKgKgAgjEdQgIgJAAgMQgDgEAIgUQAIgUgagHQAMgFAEgMQADgQAMABQAMABAIAFIADgFQAFgGALgBQAKABAHAGQAIAIAAAKQAAALgIAHQgHAHgKABIgDAAIABAGQAAAIgGAFIAAABQAHAIAAAKQAAAMgJAJQgGAJgMAAQgMAAgJgJgAlJDOQgLgLAAgPQAAgIACgGIACAAQAVAAAOgPQAPgPAAgUQAAgWgPgOQgOgPgVAAQgKAAgIADQADgLAIgKQANgMARABQASgBAMAMIAEAGQAHgCAHAAQARgBALAMQAMAMAAARQAAARgMALQgEAGgGACQAFAJAAAKQAAAQgLAKQgFAGgGACQAAAPgMALQgLALgPAAQgQAAgLgLgAiqCcQgTgSAAgcQAAgaATgUIAAAAIgYgOQgIgDACgWIADgdQAAgegcgSQgdgQgxAAIAAgFQAQgRALgDIAUgEQAIgEAIgHIAJgHQgDgLAAgMQAAggAXgXQAXgXAgABQAggBAWAXQAXAXAAAgQAAAMgDAMIAGgBQAaAAATASQATATAAAbQAAAagTATIgBAAQAOAPgHAPQgHAOgNARQgOAQgVgFQAeAegEAVQgFAUgTATQgTAUgbgBQgbABgTgUgADpB1QgJgKgEgLQgNglgZAFQgaAEgiALQAEgFAJgNQAGgHAFgKQgjgHgJgDQgFgPAUgLQAbgOACgCQAIgKAIgVQAEgGAGgEQgGgKAAgNQAAgVAOgNQAOgPAUAAQAUAAAOAPIAHAIQANgKASAAQAXAAAPAPQAQARAAAWQAAAPgHANIAGAEQAQARAAAUQAAAXgQAPQgGAHgHADQABAHAAAIQAAAWgQARQgQAQgXAAQgXAAgQgQgAAaiqQgIgIAAgLQAAgLAIgIQAIgHALAAQALAAAHAHQAIAIAAALQAAALgIAIQgHAHgLABQgLgBgIgHgACylNQgJgIgCgLQgMgKgiAHQgiAIgIAQQANglAZgOQAYgOgegqIAAgBQgIgKAAgPQAAgRANgNQAMgNASAAIAIABIAFgHQAPgPAVAAQAUAAAPAPQAPAPAAAVQAAAHgCAIQAIADAHAHQANANAAATQAAASgNANQgFAFgFADQADAIAAAJQAAATgMAMQgNAMgSAAQgSAAgMgMg");
	this.shape_2.setTransform(44.5,43.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0BDC0").s().p("AAbIpQgNgNAAgSQAAgSANgMIABgBQgHgIgJgDQgNgGAAgQQAAgaAdgCQAFgMgSgJIgbgJIAAgCQAIgIAhAIQAiAIAJgFIANgIQADgNAJgKQAMgLARAAQAQAAAMALQAMAMAAARIAAAGQALACAJAJQAMAMAAASQAAASgMANQgLAKgOACIABALQgBAUgOAOQgOAOgTAAQgLAAgJgEIgGAJQgNAMgSAAQgSAAgMgMgAjVIsQgKgJAAgNQAAgNAKgKQAJgJANAAQANAAAJAJQAJAKAAANQAAANgJAJQgJAJgNAAQgNAAgJgJgAhXEjQgJgJAAgMQgCgEAIgVQAIgUgagGQAMgFADgNQAEgPAMABQAMABAHAEIAEgEQAHgHALAAQAKAAAHAHQAIAIgBAKQABALgIAHQgHAHgKAAIgDAAIABAHQAAAIgGAFIAAABQAHAIAAAKQAAAMgJAJQgJAIgMAAQgMAAgIgIgAlCCwQgLgLAAgQQAAgHACgGIABAAQAVAAAPgPQAPgPAAgVQAAgVgPgPQgPgOgVAAQgJAAgIADQACgMAJgJQANgMARAAQASAAALAMIAFAFQAGgCAIAAQAQAAAMAMQAMAMAAARQAAARgMALQgFAFgFADQAFAIAAALQAAAPgLALQgFAFgHADQAAAPgLALQgLALgPAAQgQAAgLgLgAipCEQgUgTABgbQgBgbAUgTIAAAAIgZgOQgHgEACgVIADgdQAAgfgcgRQgdgRgxABIAAgFQAPgRALgDIAUgFQAJgEAIgGIAJgIQgDgKAAgMQAAggAWgXQAYgXAfAAQAhAAAWAXQAXAXAAAgQAAAMgDALIAFAAQAbAAASASQAUATgBAbQABAagUATIAAAAQAOARgHANQgHAOgNARQgOAQgVgFQAeAegEAUQgFAVgTATQgUATgbAAQgbAAgSgTgADiB9QgJgKgDgLQgNglgaAFQgaAEgiALQAEgEAJgOQAGgHAFgKQgigHgKgDQgFgPAUgLQAcgQABAAQAIgJAIgWQAEgGAGgEQgGgKAAgNQAAgUAOgOQAOgOAUAAQAUAAAOAOIAHAIQAOgKARAAQAXAAAPAQQAQAQABAWQgBAQgHAMIAGAFQAQAOAAAWQAAAXgQAPQgGAHgHADQACAHAAAIQAAAXgQAQQgQAQgYAAQgWAAgRgQgABfjRQgIgHABgLQgBgLAIgIQAIgIALAAQALAAAIAIQAHAIABALQgBALgHAHQgIAIgLAAQgLAAgIgIgAC8lyQgJgIgCgLQgMgKgiAIQgjAHgHAQQANglAYgNQAZgOgegrIgBgBQgHgKAAgOQAAgSANgNQAMgMASAAIAHAAIAGgHQAPgOAVAAQAUAAAPAOQAPAPgBAVQAAAIgBAHQAIADAHAHQANANAAATQAAASgNANQgFAFgFADQADAIAAAKQAAASgMAMQgNANgSAAQgSAAgMgNg");
	this.shape_3.setTransform(49.9,46.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72.8,80);


(lib.shadow = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.298)").s().p("AmcAzICLhiIJWgGIBZBrg");
	this.shape.setTransform(41.4,4.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.6,82.8,11);


(lib.Rihgtlag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEB288").s().p("AhoFgQgMgmgpkvQgpktAZgRQC0i0CjDBQgGDphbGXQgrAxgsAAQgrAAgvgrgAC2kWIAAABIABAKIgBgLg");
	this.shape.setTransform(18.4,39.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.8,79.1);


(lib.Rightlag2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ai2EaQgQgXgEgXQgEgWAOgXQANgYgEgrIgLhwQgGhCgFhFQgGhFAHhlQBTBBBag4QgrEsgBCAQADAoCrAOQBPgTAYAjQAVAcgtAJQgxAIgGAAQgLgBgFAFIgYAQQgTAMgjgEQgfgCgmgHQgmgIgnAPQgVAJgPAAQgSAAgLgMg");
	this.shape.setTransform(20.9,51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEB288").s().p("AhrBcQAGhbALhiQBxhCBVBUIgsC0QgqAagmAAQgvAAgsgjg");
	this.shape_1.setTransform(11.2,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,81);


(lib.mcws6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7A4D17").s().p("AhCCcIABkzIAAAKIAAgOICEAAIAAE3g");
	this.shape.setTransform(6.7,15.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.4,31.3);


(lib.mcas4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7A4D17").s().p("AhBiPICEAAIAAEeIiFAAg");
	this.shape.setTransform(6.7,14.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,28.8);


(lib.mc6fdd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7A4D17").s().p("AhACJIgCkRICFAAIAAERg");
	this.shape.setTransform(6.7,13.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,27.5);


(lib.Leftlag1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FE9B64").s().p("AhoFgQgMgmgpkvQgpktAZgRQC0i0CjDBQgGDphbGXQgrAxgsAAQgrAAgvgrgAC2kWIAAABIABAKIgBgLg");
	this.shape.setTransform(18.4,39.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,36.8,79.1);


(lib.Lefthand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEB288").s().p("AAFHOQg1gQgmgoQgjgkAAgWQgDgUACgJQACgLAgg3QAeg4AWgIQAWgJASAVQAgAgAuBCQAUgkgIg1QgJg1gIghQgJgggTg7QgTg5gogcQgpgbgKgYQgKgYAFhIQAEhIgRgIQgRgJgZgVQgZgXgggkQgogsA5gzIAhAFQAZgNBEAMQBBANAxBXQAyBWgDBMQgEBKAmBqQAmBngDB7QgEB6gRAYQgTAYgwAxQgkAmgoAAQgNAAgNgEg");
	this.shape.setTransform(18.8,44.8,0.96,0.96);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,37.7,89.6);


(lib.Leftlag2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("Ai2EaQgQgXgEgXQgEgWAOgXQANgYgEgrIgLhwQgGhCgFhFQgGhFAHhlQBTBBBag4QgrEsgBCAQADAoCrAOQBPgTAYAjQAVAcgtAJQgxAIgGAAQgLgBgFAFIgYAQQgTAMgjgEQgfgCgmgHQgmgIgnAPQgVAJgPAAQgSAAgLgMg");
	this.shape.setTransform(20.9,51.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FE9B64").s().p("AhrBcQAGhbALhiQBxhCBVBUIgsC0QgqAagmAAQgvAAgsgjg");
	this.shape_1.setTransform(11.2,12.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.9,81);


(lib.gd46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2508").s().p("AgCAFQgFAAgBgDQgBAAgBgBQAAAAgBgBQAAAAAAAAQAAAAABAAQACgDAFgBQADgBACABQAHAAACACQACACgCACQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAIgGABIgDgBg");
	this.shape.setTransform(3.7,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D2508").s().p("AgJAEQgDgDABgBIAHgDQAEgCADAAQAFACADACQAAABABAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAADgEABIgJABQgFgBgCgBg");
	this.shape_1.setTransform(10,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58360D").s().p("AhAALIgCgWICFACIAAAWg");
	this.shape_2.setTransform(6.7,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,2.9);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AAHAgQAmgjAShLIAMgGQgDAjgUAnQgpBNhVASQBCgkAPgRg");
	mask.setTransform(7.5,8.6);

	// Layer 3
	this.instance = new lib.Path();

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15,17.2);


(lib.breakdh53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D49F53","#B47926","#B88640","#D0A15F"],[0,0.42,0.741,1],-20.3,-9.5,69.5,-9.5).s().p("AlVB7QgFAAgDgEQgDgDgBgFIAAjdQABgFADgDQADgEAFAAIKqAAQAGAAADAEQAEADAAAFIAADdQAAAFgEADQgDAEgGAAg");
	this.shape.setTransform(35.4,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.8,24.7);


(lib.break1ds55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F0BD72","#CD9647","#ECC082","#ECBD7B"],[0,0.42,0.741,1],-15.4,-16.5,124.6,-16.5).s().p("AlVB7QgFAAgDgEQgDgDgBgFIAAjdQABgFADgDQADgEAFAAIKqAAQAGAAADAEQAEADAAAFIAADdQAAAFgEADQgDAEgGAAg");
	this.shape.setTransform(35.4,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.8,24.7);


(lib.break1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#F0BD72","#CD9647","#ECC082","#ECBD7B"],[0,0.42,0.741,1],-15.4,-16.5,124.6,-16.5).s().p("AlVB7QgFAAgDgEQgDgDgBgFIAAjdQABgFADgDQADgEAFAAIKqAAQAGAAADAEQAEADAAAFIAADdQAAAFgEADQgDAEgGAAg");
	this.shape.setTransform(35.4,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.8,24.7);


(lib._break = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D49F53","#B47926","#B88640","#D0A15F"],[0,0.42,0.741,1],-20.3,-9.5,69.5,-9.5).s().p("AlVB7QgFAAgDgEQgDgDgBgFIAAjdQABgFADgDQADgEAFAAIKqAAQAGAAADAEQAEADAAAFIAADdQAAAFgEADQgDAEgGAAg");
	this.shape.setTransform(35.4,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.8,24.7);


(lib.gate_3ss = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#744809","#B47926","#B88640","#D0A15F"],[0,0.42,0.741,1],22.8,0.6,-22.7,-0.6).s().p("AjWB7QgGAAgCgDQgEgEAAgFIAAjdQAAgFAEgDQACgEAGAAIG5AAIAAD1g");
	this.shape.setTransform(22.8,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.5,24.7);


(lib.gate_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#744809","#B47926","#B88640","#D0A15F"],[0,0.42,0.741,1],22.8,0.6,-22.7,-0.6).s().p("AjWB7QgGAAgCgDQgEgEAAgFIAAjdQAAgFAEgDQACgEAGAAIG5AAIAAD1g");
	this.shape.setTransform(22.8,12.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.5,24.7);


(lib.gate_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#7E4F0C","#B47926","#B88640","#D0A15F"],[0,0.42,0.741,1],34.5,5.5,-25.6,4.1).s().p("AlVB7QgFAAgDgEQgDgDAAgFIAAjdQAAgFADgDQADgEAFAAIKrAAQAFAAADAEQADADAAAFIAADdQAAAFgDADQgDAEgFAAg");
	this.shape.setTransform(35.4,12.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,70.8,24.7);


(lib.ClipGroupcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhDBEQgcgcgBgoQABgmAcgdQAdgcAmgBQAoABAcAcQAdAdAAAmQAAAogdAcQgcAdgoAAQgmAAgdgdg");
	mask.setTransform(9.7,9.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#919295","#8C8D90","#7D8083","#65696D","#43494F","#333B42","#0F1317","#0F1317"],[0,0.122,0.271,0.427,0.596,0.663,0.965,1],-0.4,-2.1,0,-0.4,-2.1,9.7).s().p("AhgBhIAAjBIDBAAIAADBg");
	this.shape.setTransform(9.7,9.7);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.4,19.4);


(lib.ClipGroup_17copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag8BAQgbgZgBgmQgBgjAZgbQAagbAlgBIABAAQAkAAAaAaQAbAZAAAlQABAjgZAbQgaAbglABIgCABQgiAAgagag");
	mask.setTransform(9.6,9.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#919295","#8C8D90","#7D8083","#65696D","#43494F","#333B42","#0F1317","#0F1317"],[0,0.122,0.271,0.427,0.596,0.663,0.965,1],-0.5,-4.8,0,-0.5,-4.8,12).s().p("AhfhZIC6gFIAEC4Ii4AFg");
	this.shape.setTransform(9.6,9.6);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0.5,18,18);


(lib.ClipGroup_17copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag8BAQgbgZgBgmQgBgjAZgbQAagbAlgBIABAAQAkAAAaAaQAbAZAAAlQABAjgZAbQgaAbglABIgCABQgiAAgagag");
	mask.setTransform(9.6,9.5);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#919295","#8C8D90","#7D8083","#65696D","#43494F","#333B42","#0F1317","#0F1317"],[0,0.122,0.271,0.427,0.596,0.663,0.965,1],-0.5,-4.8,0,-0.5,-4.8,12).s().p("AhfhZIC6gFIAEC4Ii4AFg");
	this.shape.setTransform(9.6,9.6);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,0.5,18,18);


(lib.ClipGroup_16copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhCDXQgjgjgTg6QgBgUgJgmQgKgngBgWQgChmAohKQAnhKA7gCIACAAQA5AAAqBIQArBIADBmQACBmgnBKQgoBKg7ACIgCABQglAAghgjg");
	mask.setTransform(16,25.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#333B42","#333B42","#0F1317","#0F1317","#333B42","#373C43","#3E4046","#000000","#474445","#474445"],[0,0.016,0.043,0.094,0.38,0.459,0.506,0.651,0.859,1],0.7,25,-0.6,-25).s().p("Aiej5IEvgIIAOH7IkvAIg");
	this.shape.setTransform(16,25.9);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,0.8,28.5,50);


(lib.ClipGroup_16copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#333B42","#333B42","#0F1317","#0F1317","#333B42","#373C43","#3E4046","#000000","#474445","#474445"],[0,0.016,0.043,0.094,0.38,0.459,0.506,0.651,0.859,1],7.9,25,6.6,-24.9).s().p("AAEDXQgggigUg7QAAgUgKgmQgJgngBgWQgDhlAohKQAlhJA5gDIAGHxQgigDgfgfg");
	this.shape.setTransform(8.7,25.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.7,0.8,14,50);


(lib.ClipGroup_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhCDXQgjgjgTg6QgBgUgJgmQgKgngBgWQgChmAohKQAnhKA7gCIACAAQA5AAAqBIQArBIADBmQACBmgnBKQgoBKg7ACIgCABQglAAghgjg");
	mask.setTransform(16,25.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#333B42","#333B42","#0F1317","#0F1317","#333B42","#373C43","#3E4046","#000000","#474445","#474445"],[0,0.016,0.043,0.094,0.38,0.459,0.506,0.651,0.859,1],-6.9,25.1,-8.2,-24.8).s().p("AhSj7ICXgEIAOH7IieAEg");
	this.shape.setTransform(23.6,25.7);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15.3,0.8,15,50);


(lib.ClipGroup_15copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax+jzMAjzgALIAKGOMgjwABvg");
	mask.setTransform(116.5,31.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(136,140,144,0)","#888C90","#6A6F74","#52585D","#41484E","#373E44","#333B42","#0F1317","#0F1317","#333B42","#333B42"],[0,0.722,0.722,0.733,0.749,0.765,0.78,0.804,0.906,0.957,0.984,1],0.6,21.9,-0.7,-26.8).s().p("AyMj9MAkJgA9IAQI4MgkJAA9g");
	this.shape.setTransform(116.5,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#474445","#474445","#000000","#000000","#3E4046","#414349","#4C4E53","#5E6065","#77797D","#96999C","#AEB0B3","#ADB0B2","#888C90","rgba(136,140,144,0)","rgba(0,0,0,0)"],[0,0.141,0.243,0.349,0.494,0.541,0.58,0.616,0.655,0.686,0.71,0.71,0.722,0.722,1],0.6,21.9,-0.7,-26.8).s().p("AyMj9MAkJgA9IAQI4MgkJAA9g");
	this.shape_1.setTransform(116.5,31.6);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,6.1,230.4,51.1);


(lib.ClipGroup_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ax+jzMAjzgALIAKGOMgjwABvg");
	mask.setTransform(116.5,31.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(136,140,144,0)","#888C90","#6A6F74","#52585D","#41484E","#373E44","#333B42","#0F1317","#0F1317","#333B42","#333B42"],[0,0.722,0.722,0.733,0.749,0.765,0.78,0.804,0.906,0.957,0.984,1],0.6,21.9,-0.7,-26.8).s().p("AyMj9MAkJgA9IAQI4MgkJAA9g");
	this.shape.setTransform(116.5,31.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#474445","#474445","#000000","#000000","#3E4046","#414349","#4C4E53","#5E6065","#77797D","#96999C","#AEB0B3","#ADB0B2","#888C90","rgba(136,140,144,0)","rgba(0,0,0,0)"],[0,0.141,0.243,0.349,0.494,0.541,0.58,0.616,0.655,0.686,0.71,0.71,0.722,0.722,1],0.6,21.9,-0.7,-26.8).s().p("AyMj9MAkJgA9IAQI4MgkJAA9g");
	this.shape_1.setTransform(116.5,31.6);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,6.1,230.4,51.1);


(lib.ClipGroup_14copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0QE2IAApsMAohAAAIAAJsg");
	mask.setTransform(129.8,31.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYj4IAkAAIANHwIgkABg");
	this.shape.setTransform(31.1,27.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCDrIgMnUQAJgHAHgDIANHnQgKgDgHgGg");
	this.shape_1.setTransform(25.4,27.5);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23.8,2.5,9.9,49.9);


(lib.ClipGroup_14copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgCDrIgMnUQAJgHAHgDIANHnQgKgDgHgGg");
	this.shape.setTransform(25.4,27.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(23.8,3.1,3.2,49);


(lib.ClipGroup_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0QE2IAApsMAohAAAIAAJsg");
	mask.setTransform(129.8,31.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYj4IAkAAIANHwIgkABg");
	this.shape.setTransform(31.1,27.4);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(28.6,2.5,5.1,49.9);


(lib.ClipGroup_13copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgSD/QgFgGAAgIIgNngQAAgIAFgGQAEgGAGAAIAdgBQAHAAAEAGQAFAGAAAIIANHfQAAAIgEAGQgFAGgGABIgdAAIgBABQgGAAgEgGg");
	mask.setTransform(5.1,26.3);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(158,164,169,0)","#9EA4A9","#7F878E","#677078","#566069","#4C5760","#49545D","#0F1317","#0F1317","#49545D","#49545D"],[0,0.722,0.722,0.737,0.749,0.765,0.78,0.804,0.906,0.957,0.984,1],0.7,26.1,-0.7,-26).s().p("AgykDIBXgDIAOIKIhXADg");
	this.shape.setTransform(5.1,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#635F60","#635F60","#000000","#000000","#5F626B","#62656F","#6D7078","#7E8289","#979BA1","#B7BABE","#C9CCCF","#C4C7CA","#9EA4A9","rgba(158,164,169,0)","rgba(0,0,0,0)"],[0,0.141,0.243,0.349,0.494,0.541,0.58,0.62,0.655,0.69,0.71,0.71,0.722,0.722,1],0.7,26.1,-0.7,-26).s().p("AgykDIBXgDIAOIKIhXADg");
	this.shape_1.setTransform(5.1,26.3);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,0.2,7.5,52.2);


(lib.ClipGroup_13copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgSD/QgFgGAAgIIgNngQAAgIAFgGQAEgGAGAAIAdgBQAHAAAEAGQAFAGAAAIIANHfQAAAIgEAGQgFAGgGABIgdAAIgBABQgGAAgEgGg");
	mask.setTransform(5.1,26.3);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(158,164,169,0)","#9EA4A9","#7F878E","#677078","#566069","#4C5760","#49545D","#0F1317","#0F1317","#49545D","#49545D"],[0,0.722,0.722,0.737,0.749,0.765,0.78,0.804,0.906,0.957,0.984,1],0.7,26.1,-0.7,-26).s().p("AgykDIBXgDIAOIKIhXADg");
	this.shape.setTransform(5.1,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#635F60","#635F60","#000000","#000000","#5F626B","#62656F","#6D7078","#7E8289","#979BA1","#B7BABE","#C9CCCF","#C4C7CA","#9EA4A9","rgba(158,164,169,0)","rgba(0,0,0,0)"],[0,0.141,0.243,0.349,0.494,0.541,0.58,0.62,0.655,0.69,0.71,0.71,0.722,0.722,1],0.7,26.1,-0.7,-26).s().p("AgykDIBXgDIAOIKIhXADg");
	this.shape_1.setTransform(5.1,26.3);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,0.2,7.5,52.2);


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgSD/QgFgGAAgIIgNngQAAgIAFgGQAEgGAGAAIAdgBQAHAAAEAGQAFAGAAAIIANHfQAAAIgEAGQgFAGgGABIgdAAIgBABQgGAAgEgGg");
	mask.setTransform(5.1,26.3);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(158,164,169,0)","#9EA4A9","#7F878E","#677078","#566069","#4C5760","#49545D","#0F1317","#0F1317","#49545D","#49545D"],[0,0.722,0.722,0.737,0.749,0.765,0.78,0.804,0.906,0.957,0.984,1],0.7,26.1,-0.7,-26).s().p("AgykDIBXgDIAOIKIhXADg");
	this.shape.setTransform(5.1,26.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#635F60","#635F60","#000000","#000000","#5F626B","#62656F","#6D7078","#7E8289","#979BA1","#B7BABE","#C9CCCF","#C4C7CA","#9EA4A9","rgba(158,164,169,0)","rgba(0,0,0,0)"],[0,0.141,0.243,0.349,0.494,0.541,0.58,0.62,0.655,0.69,0.71,0.71,0.722,0.722,1],0.7,26.1,-0.7,-26).s().p("AgykDIBXgDIAOIKIhXADg");
	this.shape_1.setTransform(5.1,26.3);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,0.2,7.5,52.2);


(lib.ClipGroup_12copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0QE2IAApsMAohAAAIAAJsg");
	mask.setTransform(129.8,31.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjjIIA8AAIALGOIg8ADg");
	this.shape.setTransform(254.5,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyjPIBagBIALGdIhaAEg");
	this.shape_1.setTransform(219.4,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgyjbIBaAAIALGzIhZAEg");
	this.shape_2.setTransform(168.2,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgzjxIBagBIAMHgIhYAEg");
	this.shape_3.setTransform(66.4,26.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.2,1.4,197,49.5);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0QE2IAApsMAohAAAIAAJsg");
	mask.setTransform(129.8,31.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgjjIIA8AAIALGOIg8ADg");
	this.shape.setTransform(254.5,21.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgyjPIBagBIALGdIhaAEg");
	this.shape_1.setTransform(219.4,22.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgyjbIBaAAIALGzIhZAEg");
	this.shape_2.setTransform(168.2,23.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgzjxIBagBIAMHgIhYAEg");
	this.shape_3.setTransform(66.4,26.6);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = this.shape_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.2,1.4,197,49.5);


(lib.ClipGroup_11copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgTDSQgFgEAAgIIgKmKQgBgHAFgEQAEgFAGgBIAegBQAGABAEAEQAFAFAAAGIALGLQgBAHgEAEQgEAGgHAAIgcABQgGgBgFgEg");
	mask.setTransform(4.8,21.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(158,164,169,0)","#9EA4A9","#7F878E","#677078","#566069","#4C5760","#49545D","#0F1317","#0F1317","#49545D","#49545D"],[0,0.722,0.722,0.737,0.749,0.765,0.78,0.804,0.906,0.957,0.984,1],0.6,20.9,-0.5,-20.9).s().p("AgujVIBSgDIALGuIhRACg");
	this.shape.setTransform(4.8,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#635F60","#635F60","#000000","#000000","#5F626B","#62656F","#6D7078","#7E8289","#979BA1","#B7BABE","#C9CCCF","#C4C7CA","#9EA4A9","rgba(158,164,169,0)","rgba(0,0,0,0)"],[0,0.141,0.243,0.349,0.494,0.541,0.58,0.62,0.655,0.69,0.71,0.71,0.722,0.722,1],0.6,20.9,-0.5,-20.9).s().p("AgujVIBSgDIALGuIhRACg");
	this.shape_1.setTransform(4.8,21.7);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,0.2,7.2,43);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgTDSQgFgEAAgIIgKmKQgBgHAFgEQAEgFAGgBIAegBQAGABAEAEQAFAFAAAGIALGLQgBAHgEAEQgEAGgHAAIgcABQgGgBgFgEg");
	mask.setTransform(4.8,21.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(158,164,169,0)","#9EA4A9","#7F878E","#677078","#566069","#4C5760","#49545D","#0F1317","#0F1317","#49545D","#49545D"],[0,0.722,0.722,0.737,0.749,0.765,0.78,0.804,0.906,0.957,0.984,1],0.6,20.9,-0.5,-20.9).s().p("AgujVIBSgDIALGuIhRACg");
	this.shape.setTransform(4.8,21.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#635F60","#635F60","#000000","#000000","#5F626B","#62656F","#6D7078","#7E8289","#979BA1","#B7BABE","#C9CCCF","#C4C7CA","#9EA4A9","rgba(158,164,169,0)","rgba(0,0,0,0)"],[0,0.141,0.243,0.349,0.494,0.541,0.58,0.62,0.655,0.69,0.71,0.71,0.722,0.722,1],0.6,20.9,-0.5,-20.9).s().p("AgujVIBSgDIALGuIhRACg");
	this.shape_1.setTransform(4.8,21.7);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,0.2,7.2,43);


(lib.ClipGroup_10copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgTDbQgEgFgBgHIgLmcQAAgHAFgFQAEgFAGAAIAdgBQAHAAAEAFQAFAFAAAHIALGcQAAAGgEAGQgFAFgGAAIgdABIgBAAQgGAAgEgFg");
	mask.setTransform(4.8,22.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(158,164,169,0)","#9EA4A9","#7F878E","#677078","#566069","#4C5760","#49545D","#0F1317","#0F1317","#49545D","#49545D"],[0,0.722,0.722,0.737,0.749,0.765,0.78,0.804,0.906,0.957,0.984,1],0.6,22.4,-0.6,-22.4).s().p("AgvjfIBTgCIAMHBIhTACg");
	this.shape.setTransform(4.8,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#635F60","#635F60","#000000","#000000","#5F626B","#62656F","#6D7078","#7E8289","#979BA1","#B7BABE","#C9CCCF","#C4C7CA","#9EA4A9","rgba(158,164,169,0)","rgba(0,0,0,0)"],[0,0.141,0.243,0.349,0.494,0.541,0.58,0.62,0.655,0.69,0.71,0.71,0.722,0.722,1],0.6,22.4,-0.6,-22.4).s().p("AgvjfIBTgCIAMHBIhTACg");
	this.shape_1.setTransform(4.8,22.7);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,0.2,7.2,44.9);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgTDbQgEgFgBgHIgLmcQAAgHAFgFQAEgFAGAAIAdgBQAHAAAEAFQAFAFAAAHIALGcQAAAGgEAGQgFAFgGAAIgdABIgBAAQgGAAgEgFg");
	mask.setTransform(4.8,22.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(158,164,169,0)","#9EA4A9","#7F878E","#677078","#566069","#4C5760","#49545D","#0F1317","#0F1317","#49545D","#49545D"],[0,0.722,0.722,0.737,0.749,0.765,0.78,0.804,0.906,0.957,0.984,1],0.6,22.4,-0.6,-22.4).s().p("AgvjfIBTgCIAMHBIhTACg");
	this.shape.setTransform(4.8,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#635F60","#635F60","#000000","#000000","#5F626B","#62656F","#6D7078","#7E8289","#979BA1","#B7BABE","#C9CCCF","#C4C7CA","#9EA4A9","rgba(158,164,169,0)","rgba(0,0,0,0)"],[0,0.141,0.243,0.349,0.494,0.541,0.58,0.62,0.655,0.69,0.71,0.71,0.722,0.722,1],0.6,22.4,-0.6,-22.4).s().p("AgvjfIBTgCIAMHBIhTACg");
	this.shape_1.setTransform(4.8,22.7);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.2,0.2,7.2,44.9);


(lib.ClipGroup_9copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgSDmQgFgFAAgIIgMmwQAAgIAEgFQAFgFAGgBIAdAAQAHAAAEAFQAFAFAAAHIALGxQAAAHgEAGQgEAFgHAAIgcABQgHAAgEgFg");
	mask.setTransform(4.9,23.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(158,164,169,0)","#9EA4A9","#7F878E","#677078","#566069","#4C5760","#49545D","#0F1317","#0F1317","#49545D","#49545D"],[0,0.722,0.722,0.737,0.749,0.765,0.78,0.804,0.906,0.957,0.984,1],0.6,23.6,-0.6,-23.5).s().p("AgwjqIBUgCIANHXIhUACg");
	this.shape.setTransform(4.9,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#635F60","#635F60","#000000","#000000","#5F626B","#62656F","#6D7078","#7E8289","#979BA1","#B7BABE","#C9CCCF","#C4C7CA","#9EA4A9","rgba(158,164,169,0)","rgba(0,0,0,0)"],[0,0.141,0.243,0.349,0.494,0.541,0.58,0.62,0.655,0.69,0.71,0.71,0.722,0.722,1],0.6,23.6,-0.6,-23.5).s().p("AgwjqIBUgCIANHXIhUACg");
	this.shape_1.setTransform(4.9,23.8);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,0.2,7.3,47.2);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgSDmQgFgFAAgIIgMmwQAAgIAEgFQAFgFAGgBIAdAAQAHAAAEAFQAFAFAAAHIALGxQAAAHgEAGQgEAFgHAAIgcABQgHAAgEgFg");
	mask.setTransform(4.9,23.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(158,164,169,0)","#9EA4A9","#7F878E","#677078","#566069","#4C5760","#49545D","#0F1317","#0F1317","#49545D","#49545D"],[0,0.722,0.722,0.737,0.749,0.765,0.78,0.804,0.906,0.957,0.984,1],0.6,23.6,-0.6,-23.5).s().p("AgwjqIBUgCIANHXIhUACg");
	this.shape.setTransform(4.9,23.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#635F60","#635F60","#000000","#000000","#5F626B","#62656F","#6D7078","#7E8289","#979BA1","#B7BABE","#C9CCCF","#C4C7CA","#9EA4A9","rgba(158,164,169,0)","rgba(0,0,0,0)"],[0,0.141,0.243,0.349,0.494,0.541,0.58,0.62,0.655,0.69,0.71,0.71,0.722,0.722,1],0.6,23.6,-0.6,-23.5).s().p("AgwjqIBUgCIANHXIhUACg");
	this.shape_1.setTransform(4.9,23.8);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.3,0.2,7.3,47.2);


(lib.ClipGroup_8copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgSD6QgFgGAAgIIgNnWQAAgIAFgGQAEgFAGgBIAdAAQAHAAAEAFQAFAGAAAIIAMHVQABAIgFAGQgEAGgHAAIgcABIgBAAQgGAAgEgFg");
	mask.setTransform(5.1,25.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(158,164,169,0)","#9EA4A9","#7F878E","#677078","#566069","#4C5760","#49545D","#0F1317","#0F1317","#49545D","#49545D"],[0,0.722,0.722,0.737,0.749,0.765,0.78,0.804,0.906,0.957,0.984,1],0.7,24.9,-0.6,-24.9).s().p("Agxj+IBWgCIANH/IhWACg");
	this.shape.setTransform(5.1,25.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#635F60","#635F60","#000000","#000000","#5F626B","#62656F","#6D7078","#7E8289","#979BA1","#B7BABE","#C9CCCF","#C4C7CA","#9EA4A9","rgba(158,164,169,0)","rgba(0,0,0,0)"],[0,0.141,0.243,0.349,0.494,0.541,0.58,0.62,0.655,0.69,0.71,0.71,0.722,0.722,1],0.7,24.9,-0.6,-24.9).s().p("Agxj+IBWgCIANH/IhWACg");
	this.shape_1.setTransform(5.1,25.8);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,0.2,7.4,51.1);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgSD6QgFgGAAgIIgNnWQAAgIAFgGQAEgFAGgBIAdAAQAHAAAEAFQAFAGAAAIIAMHVQABAIgFAGQgEAGgHAAIgcABIgBAAQgGAAgEgFg");
	mask.setTransform(5.1,25.8);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(158,164,169,0)","#9EA4A9","#7F878E","#677078","#566069","#4C5760","#49545D","#0F1317","#0F1317","#49545D","#49545D"],[0,0.722,0.722,0.737,0.749,0.765,0.78,0.804,0.906,0.957,0.984,1],0.7,24.9,-0.6,-24.9).s().p("Agxj+IBWgCIANH/IhWACg");
	this.shape.setTransform(5.1,25.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#635F60","#635F60","#000000","#000000","#5F626B","#62656F","#6D7078","#7E8289","#979BA1","#B7BABE","#C9CCCF","#C4C7CA","#9EA4A9","rgba(158,164,169,0)","rgba(0,0,0,0)"],[0,0.141,0.243,0.349,0.494,0.541,0.58,0.62,0.655,0.69,0.71,0.71,0.722,0.722,1],0.7,24.9,-0.6,-24.9).s().p("Agxj+IBWgCIANH/IhWACg");
	this.shape_1.setTransform(5.1,25.8);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1.4,0.2,7.4,51.1);


(lib.ClipGroup_7copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0QE2IAApsMAohAAAIAAJsg");
	mask.setTransform(129.8,31.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOgaQgBghAEgfIACAAQAJAAAGAcQAIAcABAmQABA8gMAbQgQg2gCg/g");
	this.shape.setTransform(16.5,30.5);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,21.4,3.1,18.4);


(lib.ClipGroup_7copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0QE2IAApsMAohAAAIAAJsg");
	mask.setTransform(129.8,31.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgOgaQgBghAEgfIACAAQAJAAAGAcQAIAcABAmQABA8gMAbQgQg2gCg/g");
	this.shape.setTransform(16.5,30.5);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(15,21.4,3.1,18.4);


(lib.ClipGroup_6copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgCBCIgDiCQAAgFAFgBQADAAAAAFIADCDQAAAFgFAAQgDAAAAgFg");
	mask.setTransform(1.1,7.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(136,140,144,0)","#888C90","#6A6F74","#52585D","#41484E","#373E44","#333B42","#0F1317","#0F1317","#333B42","#333B42"],[0,0.722,0.722,0.733,0.749,0.765,0.78,0.804,0.906,0.957,0.984,1],0.2,7,-0.2,-7).s().p("AgJhGIAPgBIAECOIgPAAg");
	this.shape.setTransform(1.1,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#474445","#474445","#000000","#000000","#3E4046","#414349","#4C4E53","#5E6065","#77797D","#96999C","#AEB0B3","#ADB0B2","#888C90","rgba(136,140,144,0)","rgba(0,0,0,0)"],[0,0.141,0.243,0.349,0.494,0.541,0.58,0.616,0.655,0.686,0.71,0.71,0.722,0.722,1],0.2,7,-0.2,-7).s().p("AgJhGIAPgBIAECOIgPAAg");
	this.shape_1.setTransform(1.1,7.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,0,1.4,14.4);


(lib.ClipGroup_6copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgCBCIgDiCQAAgFAFgBQADAAAAAFIADCDQAAAFgFAAQgDAAAAgFg");
	mask.setTransform(1.1,7.2);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(136,140,144,0)","#888C90","#6A6F74","#52585D","#41484E","#373E44","#333B42","#0F1317","#0F1317","#333B42","#333B42"],[0,0.722,0.722,0.733,0.749,0.765,0.78,0.804,0.906,0.957,0.984,1],0.2,7,-0.2,-7).s().p("AgJhGIAPgBIAECOIgPAAg");
	this.shape.setTransform(1.1,7.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#474445","#474445","#000000","#000000","#3E4046","#414349","#4C4E53","#5E6065","#77797D","#96999C","#AEB0B3","#ADB0B2","#888C90","rgba(136,140,144,0)","rgba(0,0,0,0)"],[0,0.141,0.243,0.349,0.494,0.541,0.58,0.616,0.655,0.686,0.71,0.71,0.722,0.722,1],0.2,7,-0.2,-7).s().p("AgJhGIAPgBIAECOIgPAAg");
	this.shape_1.setTransform(1.1,7.2);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.4,0,1.4,14.4);


(lib.ClipGroup_2copy3 = function(mode,startPosition,loop) {
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


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AkeBjQgQgBAAgMIAAhHQAAgLAJgEIAHgDICMAAQAGAAAGgDQAEgEACgCQAVgnAlgYQAngXAsAAQAtAAAmAXQAmAXAVAmQAGALAOAAIBtAAIAJADQAKADAAALIAABFQAAAKgJAEIgIACg");
	mask.setTransform(30.5,10);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(0,0,0,0)","rgba(136,140,144,0)","#888C90","#6A6F74","#52585D","#41484E","#373E44","#333B42","#0F1317","#0F1317","#333B42","#333B42"],[0,0.722,0.722,0.733,0.749,0.765,0.78,0.804,0.906,0.957,0.984,1],-30.3,0,30.4,0).s().p("AkvBjIAAjFIJfAAIAADFg");
	this.shape.setTransform(30.4,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#474445","#474445","#000000","#000000","#3E4046","#414349","#4C4E53","#5E6065","#77797D","#96999C","#AEB0B3","#ADB0B2","#888C90","rgba(136,140,144,0)","rgba(0,0,0,0)"],[0,0.141,0.243,0.349,0.494,0.541,0.58,0.616,0.655,0.686,0.71,0.71,0.722,0.722,1],-30.3,0,30.4,0).s().p("AkvBjIAAjFIJfAAIAADFg");
	this.shape_1.setTransform(30.4,10);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,0,60.7,19.9);


(lib.ClipGroup_1copy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiXCYQg/g/AAhZQAAhXA/hAQA/g/BYAAQBZAAA/A/QA/A/AABYQAABZg/A/Qg/A/hZAAQhYAAg/g/g");
	mask.setTransform(21.6,21.6);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FB7830","#82331D","#6F2C18","#4C1E0F","#3E180C","#37190F","#241C18","#1D1D1B"],[0,0.396,0.475,0.651,0.745,0.839,0.965,1],8.3,-9.8,0,8.3,-9.8,37.8).s().p("AjWDXIAAmtIGtAAIAAGtg");
	this.shape.setTransform(21.6,21.6);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,43.2,43.1);


(lib.ClipGroup_1copy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0QE2IAApsMAohAAAIAAJsg");
	mask.setTransform(129.8,31.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhlBPQgKgVAAgZQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAYgJAWg");
	this.shape.setTransform(126.7,45.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#393939").s().p("AkeBjQgQAAAAgNIAAhGQAAgMAJgEQADgCAEgBICMAAQAGAAAGgDIAGgHQAVgmAlgXQAngYAsAAQAtAAAmAXQAmAXAVAmQAFALAPAAIBtAAIAKADQAJADAAALIAABFQAAAKgJAEIgIACg");
	this.shape_1.setTransform(125.4,43.7);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(95.1,33.8,60.7,19.9);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A0QE2IAApsMAohAAAIAAJsg");
	mask.setTransform(129.8,31.1);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhlBPQgKgVAAgZQAAgtAhghQAhghAtAAQAuAAAhAhQAhAhAAAtQAAAYgJAWg");
	this.shape.setTransform(126.7,45.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4E3B30").s().p("Ag+AQQgcgUgHghIDDAAQgHAhgbAUQgcAWgkAAQgjAAgbgWg");
	this.shape_1.setTransform(126.4,58.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#393939").s().p("AkeBjQgQAAAAgNIAAhGQAAgMAJgEQADgCAEgBICMAAQAGAAAGgDIAGgHQAVgmAlgXQAngYAsAAQAtAAAmAXQAmAXAVAmQAFALAPAAIBtAAIAKADQAJADAAALIAABFQAAAKgJAEIgIACg");
	this.shape_2.setTransform(125.4,43.7);

	this.shape.mask = this.shape_1.mask = this.shape_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(95.1,33.8,60.7,28.4);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhDBEQgcgcgBgoQABgmAcgdQAdgcAmgBQAoABAcAcQAdAdAAAmQAAAogdAcQgcAdgoAAQgmAAgdgdg");
	mask.setTransform(9.7,9.7);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#919295","#8C8D90","#7D8083","#65696D","#43494F","#333B42","#0F1317","#0F1317"],[0,0.122,0.271,0.427,0.596,0.663,0.965,1],-0.4,-2.1,0,-0.4,-2.1,9.7).s().p("AhgBhIAAjBIDBAAIAADBg");
	this.shape.setTransform(9.7,9.7);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,19.4,19.4);


(lib.dhfg76 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3D2508").s().p("AgCAFQgFAAgBgDQgBAAgBgBQAAAAgBgBQAAAAAAAAQAAAAABAAQACgDAFgBQADgBACABQAHAAACACQACACgCACQAAAAgBABQAAAAAAABQgBAAAAAAQgBABgBAAIgGABIgDgBg");
	this.shape.setTransform(3.7,0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#3D2508").s().p("AgJAEQgDgDABgBIAHgDQAEgCADAAQAFACADACQAAABABAAQAAAAAAAAQAAAAAAAAQgBABAAAAQAAADgEABIgJABQgFgBgCgBg");
	this.shape_1.setTransform(10,0.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#58360D").s().p("AhAALIgCgWICFACIAAAWg");
	this.shape_2.setTransform(6.7,1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,2.9);


(lib.Body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEB288").s().p("ABiG+Qh3ggh+g+Qh/g+gdhDQgdhEAnhdQgchwCZiaQgQhiAhhNQAmhMA8gbQAWgMAQgFQAdgLApAMIAIABIAKADQAGACAeA7QALAbALAmQAbBuhzC0QARCXiBBYQAbgRA6BHIBoCUIDEgCQgJADAIAOQAAB/hNAAQg0AAhYg7g");
	this.shape.setTransform(31.7,138.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#999999").ss(1,1,1).p("AiugRQCJBVDUha");
	this.shape_1.setTransform(61.3,48.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FEB288").s().p("Ai0A7QAbgdgLhFICJghIA6gWICPBHQAaA6hHAAQgVgFgsgWIgGA3QgKAgg4AAQg8AAhwgkg");
	this.shape_2.setTransform(61.3,80.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8B8B8B").s().p("AjeA2IAAgXQALg/Asg8QAKgRARgQQAbgWAbgLQA9gWA/ALQAhAGAhAQQAbAQARARQgnAmgmgLQghgmAAgsQgFA3gkAWQg3gRgbgqQAhA2gcAwQg3gLggggQAmAxgLA1QggAlgrgPQAqARALA2QgQA2gnARQgWgmARhSgACZggQghgxAcghQA2AsAcAmQgcAFgTAAQgTAAgLgFg");
	this.shape_3.setTransform(57.9,36.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#999999").s().p("AAuBoQARg3gng/Qg6gRghgsQgFgVAxgMQAqgFALA8IAmCBIAAAhg");
	this.shape_4.setTransform(76.8,68.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#333333").s().p("AlKChIgbiOQgFjIBnhzQBYhtB4gGQCigLB+B+QBoCEAbB9QgmgbhSAFIgWgWQgbgmg3grQgQgRgcgQQgggRghgFQhAgLg8AVQgbAMgbAWQgRAQgLAQQgsA8gKBCIAAAUQgRBSAWAmIAQAQQg8AnAABiQggBYhHAxQAxiUgMhogADNFxIiPhHIg8AWIiHAhIgrAAQgxgGAVggIAhgyQAcghgGh9QgFgWALghQAAghAQgeQAWhCBXgbQBQgRBCAxQAbAWAQAWQAXAkALAnQAQAxAAAxQAhBuAABBIAAAbIgniDQgKg8gtAFQgxAMAGAVQAhAsA8ARQAmBBgRA3gAAGBeQBWAABqgtIAHgCIgHACQhqAthWAAIgBAAIAAAAQhSAAhCgqQBCAqBSAAIAAAAIABAAg");
	this.shape_5.setTransform(58.2,41.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#666666").s().p("AjqCkQAngRAQg2QgLg2gqgRQArAPAgglQALg1gmgxQAgAgA3ALQAcgwghg2QAbAqA3ARQAkgWAFg3QAAAsAhAmQAmALAngmQgcAhAhAxQAWALA3gLIAWAWIgRAAQg2AQgGAOQgQgTgcgWQhBgxhQAQQhYAbgVBAQgRAhAAAhQgLAhAFAVIg2AhIgRgQg");
	this.shape_6.setTransform(59.6,37.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#9E9E9E").s().p("AgsDeQgcgggFgsIgGlMQA3AAA1gLQgaCqBACMIAQAhIAAAbIAAAWIAAAWQgLAQgrALQgNADgKAAQgeAAgQgZgAlDDeQgbgKgRgLQgLgRgFgWQAAgbgGAGQBdh5AcjpQAmALAsAFQAVC7gxCnQgWAxggALQgRAKgQAAQgLAAgLgFgAD0CdQgcgmAAAFQhSizAWijQALgGAWgFIAAgGQAWgFAQgGQAAAGAGAWQAAAQALAhIAbBSQAQAxAcAhQAVAfAnArQAbAsgWAWQgWAQgWALIgVALQgPAGgNAAQgZAAgSgWg");
	this.shape_7.setTransform(61.4,210.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7A7A7A").s().p("AAUD2QgvgGgGgnIgLglQAviogTi6QAvALA2AAIAGFLQgQBegyAAIgFAAgAEPDEQAAgFgFAAQAAgGgLgQIgGgRIgQggQhCiNAcipQBCgFBBgRQgWCkBSCyQALARgFAWQAAAQgGALQAAALgLAFQgQAGgbAGIgMAAQgjAAgOgcgAkyDEQgngLgKgKQgWgLgLgXQgLgQAWgmQAQgmAbgsIA3hWQAbgrARgnQAGggAQgyIAhALQAmAQAsAMQgcDphdB4QgFAAgQAhQgRATgaAAQgLAAgMgDg");
	this.shape_8.setTransform(44.4,210.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#CCCCCC").s().p("Ah+IHQgsgFgmgLQgsgMgmgQIghgLQAbhXARiJQAVjPAAhWIAAgsQAGhiAQi6QAFgsgFghQgFgmAFgLQAFgFAGAAQARgLBBAAIALAAIBtAAIAaAAQBSgGArAAQA8AAAiAGQALAFAFAAQAmAQAhCaQAhCTgmBzQghBxghBHQgnBHAnB+QAmB4AGAsQAFAFAAAGQgQAFgWAGIAAAFQgWAFgLAGQhBARhCAFQg3ALg1AAQg2AAgxgLg");
	this.shape_9.setTransform(55.4,139);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100.5,235.5);


(lib.Bg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B9C4D").s().p("EBLHANkQoSgelAgYQlBgZlfgQQnqgYwYBGQwXBFgnmFQgJhKAhgxQA0hNAdhAQCUkynqgvQk2ghi/gQIlEgEQk4gDh6ACQkMAFkJAIUgqwAAGgP3gBkIAApxQAnAOAgAGQAAgPgNghQATgHAmAcIAhAXQANAIAEgCQAWgNAIgTIADgQQAHAMAhAZQAlAcAOABQANAAA1gFIBLgIQAUgCgIAJQAKCVCpCgQGSGNGnn7QBjjBgRgJQAggPAXAGQAWAFAcABQAcABAGAEQAHAFH6gEQH7gFAFACQARgCgIgLQgIgMgNgDIAaAEQAgAGAkAOQADABAEgEIAGgGQAIgCA0ARQA1AQAlgXQAmgWAfgEQAegEAiARIA6AjQAKAHAqgXQAqgYAAgiQAVAwALAAQAJAAApgdQAmgcATAHQAUAEgNATIgTAZQAEALAtgNQAtgOAXgQQAJgGgQAZQgUAfgBAEQAFAOAhgSQArgXATABQAHAAAwANIAuANQgOghAagIQgBASAfARQAhARAJgMIADgdQAJAcA+ANQA+AMAtg4QCTBcAahxQACAWA1ARQA0ARAFgNIgFgNQgHgMAAgDQAwAuAEgvQARAVAaAEQAHgGAFgDQAIgCA1ARQA0AQAmgXQAmgWAegEQAMgCA3AVIA5AVQAPgBAlgcQAggZAIgMIABAVQAHAVAZAGQAEABANgIIAggWQAmgcAUAHQAyAKgyAXQgMAAAAAPQAQgHAngKQAfgIAOgIQApgPgbAfQgVAXgFAQQADALAhgQQArgVAWAAQAQAAAkAPQATAHAMgCQAXgFAEghQAGAKAeAQIAkARQAagTgXgKQAWgHAlAYQATAOAIACQAaAIAbgUIAXgRQALgHAFAAIAFALQAFAMAIAGQAcAUAvgsIAAAcQAIASAhgsQAEgGAPAGIAiAPQAGADAQALQAQAFAQgcQAFgLAAgNQAHAKAdAQIAkARQALgDAFgFQAMgJgYgMQAVgHAlAYIAbATQAbALAagaQAZgYAPAAQgHAVALALQANANAdgEIATgBQAYgHAWgaQAEgGAPAGIAgAPIAbANQARAFALgbQAGgPAAgJQAFAIAfASQAgASAMgLQAFgEgBgGQgCgGgGgDQAUgHAmAYQAVASAJADQAcALAVgcQAKgNAMgGQAKgFAHAAIAZAYQAhASAkgjQAEgFAQAGIAgAOQAtASAMgWQADgGAAgXQAHAKAdAQIAkARQAggSgcgLQAUgHAlAYIAdAWQAcAMAYgeQATgYAUAAIAGAJQAHALAJAGQAdASAqgnIACARQAIALAfgaQAFgFAPAGIAgAOIAbALQATAAAPgsQAFAKAeAQIAkARQAigUgfgJQAWgHAlAYQAXARAFACQAbAJAZgYQAYgYAQAAIAEAJQAGAJAJAGQAcAQAtgjIgCAIQgDAKAEAGQALATA8gaQAHgDAOARQAQALASgiQAGgMAAgMQAGAKAeAQIAjARQAhgLgdgSQAYgIAbARQAOAJANAMIAVAHQAZADAOgTQAKgNAMgGQAJgFAJAAIAkAZQADgHADgDQAIgIAQAAQAQAAAkAPQAXAJAEABQATACAIgVQAGgPABgJQAFAKAeAQIAkARIANgFQAJgHgTgRQAWgHAkAYQAyAhAfgdQAZgYAPAAIAZASQAPAKAKABQAYAEASgcIAHAUQALAPAXghQAEgGARAEQAPAFAQAMQAlAbAPgZQAIgOAAgVQAGAKAeAQIAkARQAWgXgTgGQAWgHAlAYQAUAOAKAEQAdAJAVgXQAMgOAJgFQAKgHAJACQACAiBFgCQAZgXAPgCQAPAAAkAPQAQAGAOgEQAVgGAKgdQAGAKAeAQIAjARQAcgIgYgVQAMgEASAFQAUAHATARQAZgCAKgNQAFgHABgGQAMAAAWATQAVgTAMAAIAIAPQALAPAWgCQACAAAUgSQAZgQAVAJQgUAKAKAKQAGAFAKAEIAigRQAegQAHgKQAAAGALAmIAbAIQAkAAAmgiQABgBAJANQALAQASgDQA4ACAPgiQAQAAAYAYQAiAiAvgmQAfgZAbAIQgaAfAdgCIAbgMQAYgNAVgSQgKAQAKAOQAEAHAHAHIARAAQAUgCAMgJQARgNAQgCQARgCAdAMQADABALgNIASAYQAQAMAigXQAQgLAJgHQAHAAANAIQAOAJAPAQIAUAHQAXACAYgTIAAbbQi3geiCgLg");
	this.shape.setTransform(512,659.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#438F43").s().p("EhP/ASZMAAAgjgQFvArBah8QBfFhD5BtQD6BtEQi4IB2iSUBCjAFqBG7gIEMAAAAjag");
	this.shape_1.setTransform(512,690.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#6BB87D").s().p("EgmXAGbIELiFQFOicFUh8QQ8mSLTA8QBqAJBGAIQgPgSgggKQAcgKA3AbIgOgRQgGgHgMgHQASgBAVAIQAKAEARALQACgRgRgQIgigdQAiACAYASQAYAQAMAdQAGgJAMgHQAQgIASABIgWAaQgLAOgCAQQD8AiBdAtQBKAlgVAzQgIAUhCBGQgzA2AOAdQALAZBEAPQA3ANBrAIQAHgggPgiQASABARAPQAPAOAIAXQALgxAAgZQAAgngYgnQAkAgAPAqQANAmgCA2QAPgPAYgoQAXgkAUgOIgSAvQgLAeAIAVQAZggApgRQAmgOAtAAQgyAUgsA/QDuAOBrAXQCiAjAGBJQAGBVC4AiQBOAPFLAcg");
	this.shape_2.setTransform(382.9,566.8,0.335,0.765);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#83BE6F").s().p("EgsDAG7QF8jaHAi6QLFklKkh5QK+h+LJBvQKMBmJlEiQAAgVgMgaQANAGAIANQAEAHAGATQAFgUgHgeQgDgMgNgkQARAQALAbQAGAQAKAgQALgKAAgaIAEArIAhgYQAVgPARAAIgeAkQgRATgFATQAbgTAyAHIgeAMQgRAHgLAIQFWCsEyDdg");
	this.shape_3.setTransform(395.6,564.3,0.335,0.765);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9BC66E").s().p("EgwHAHnIDPh6QEMiTEviEQgVgHglAGQAVgXBCgFIgXgJQgJgDgPAAQAZgPAxAAQgHgRgZgGQgggFgPgCQAggRAhAEQAfACAbATQAAgJAIgNQALgQASgIIgHAkQgDARAGAQQDsheDmhMQgIgZgXgRQANgGARAEQAQAEAPAMQgMgmgKgSQgSgbgfgSQAlAIAcAXQAZAWAUAlQAEgQABgkQABgjAHgSIAIAoQAEAZAOALQAEgfAWgcQAUgaAfgRQghAqAABQQD1hLDpgzQgQgWgZgKQAPgGARAHQAIADAVAMQgLgYgYgSQgUgQgjgPQA7ADAwAsQACgQgTgZQAcAKAJAbQgBgZAHgXQAJgcARgOQgNA3AYAzQAKgmAxgfIgVAkQgMAVgEAQQJgh8JFALQFxAGFoA4QgHgSgMgOQAOACAMALQAIAGALARIACAAQgBgZgNgZQgMgXgYgbQA1AcAZA8QAJgOgIgeQAWAVgFAdQALgYAQgSQAUgVAUgGQgeAngDAyIAKABQAZgWAvgEQgfAUgOALQD6AuDvBGQgCgKgGgNIgNgYQAUADAOANQAMAKACALQAVgbAdgLQAegNAkAHQgdAOgNAIQgXANgBARQArgOAfAJQgOAEgIAFIgUAPQBAgOAcASQgZACgPAGQgLAEgLAJQE7BlEfCIQAJgTgDgVQAOAFAIAOQAIAPABASQAUgjAFgQQAKgggHgiQATAhABAjQgBAfgPAoIABAAQAPgHAcgYQAagWASgHQgCAFgXAcQgQAUABASQAbgTAkgBQAfgBAjAKQgsADg0AnQDwB+DGCNQBjBGAyAtg");
	this.shape_4.setTransform(400.7,560.9,0.335,0.765);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#88C697").s().p("EgmXABTIELiCQFOicFUh+QQ9mTLSA9QA+AFByAMQgPgRgggMQAdgJA2AbIgOgSQgGgHgMgGQAbgBAnAWQADgQgSgRIgigdQAiACAZASQAYARAMAdQAEgKAOgGQAPgIASABIgWAaQgLAOgCAQQD9AiBcAtQBLAlgWA0QgIAThCBGQgzA2AOAeQAMAaBDAPQA3ANBrAIQAIgggPgiQASAAAQAQQAPAOAJAXQAKgzAAgXQgBgqgXgmQAkAfAPArQANAngCA3QAPgPAZgoQAWgkAUgRIgSAyQgLAeAIAVQAZggAqgRQAlgOAtAAQgxATgtA/QDuAOBsAYQChAjAGBJQAGBSC4AjQBOAPFLAbQ5DKPzKAAQzMAAtWqPg");
	this.shape_5.setTransform(712.2,585.7,0.659,0.659);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#9BCB8B").s().p("EgsCAG7QF7jaHAi6QLFklKkh5QK+h+LJBvQKMBmJmEiQgBgXgMgXQAOAFAHANQAEAHAGATQAGgUgHgdQgEgOgMgjQARAQAKAbQAGAQAKAhQAMgLAAgaQABANABAeIAhgYQAXgPAQAAIgeAkQgRATgFATQAbgUAyAIIgeAMQgRAHgKAIQFWCtExDcg");
	this.shape_6.setTransform(737.2,562,0.659,0.659);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#AFD290").s().p("EgwHAHnQBJgwCGhJQENiUEviDQgXgIgkAHQAVgYBCgFIgXgJQgJgDgPAAQAbgQAvABQgGgRgagGQgggFgPgCQAggRAhAEQAgADAaASQAAgKAJgMQAKgQASgIIgIAkQgCASAHAPQDrheDnhMQgIgYgYgSQANgGARAEQAQAEAPAMQgMgngKgQQgRgcgfgSQAlAIAbAXQAZAWAUAlQAFgQAAgkQABgjAHgSQACAFAGAjQAFAZANAMQAEghAWgbQAUgaAfgRQghAqAABQQD1hLDpgzQgQgXgZgJQAQgGAQAHQAIACAVANQgLgYgXgSQgVgQgjgOQA7ABAxAuQACgRgUgZQAdAKAIAbQgBgZAIgXQAIgcARgOQgNA2AYA0QAKgmAxgfIgVAkQgMAVgEAQQJkh8JBALQFxAGFoA4QgIgUgMgMQAQACALALQAIAGALARIACAAQAAgZgOgZQgLgWgZgcQA2AdAYA8QAIgPgHgeQAWAWgEAcQAKgXARgTQATgVAVgGQgeAngEAyIAKABQAYgVAwgFQgfAUgPALQEBAwDqBEQgCgKgHgNIgNgYQAUADAOANQAMAKADALQATgbAegMQAfgMAkAHQgeAOgNAIQgXANgCARQAtgOAfAJQgOAEgJAGIgUAOQBCgNAaARQgYACgPAGQgLAEgMAJQE5BlEhCIQAJgUgDgUQANAFAJAOQAHAOACAUQAUgkAGgQQAJgfgHgjQATAhABAjQAAAfgPAoIAAAAQAPgGAcgZQAagWATgGIgaAgQgPAUAAASQA1gjBLAYQgrADg0AmQDxB/DFCNQBjBGAyAtg");
	this.shape_7.setTransform(747.1,559.1,0.659,0.659);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7FC28F").s().p("Ax/GEICTh9QC5iUC7h1QJVl8GOA5QA6AJAnAHQgJgQgRgLQAQgIAeAZIgIgRQgDgGgHgHQAKAAALAHQAGAEAJAKQACgPgKgQIgTgcQATACAOARQANAQAGAbQADgJAHgGQAJgIAKACIgNAYQgFAOgBAOQCLAgAzArQApAjgMAwQgFATgkBCQgcAzAIAbQAGAYAlAPQAfALA6AJQAFgfgJggQAKAAAJAPQAIANAFAWQAGgvAAgXQAAglgNglQAUAeAIApQAHAigBA0QAIgOAOgmQAMgiALgOIgKAtQgGAdAEATQAOgeAXgPQAVgOAZAAQgcATgYA7QCDANA7AWIAUAJIAAD2g");
	this.shape_8.setTransform(908.8,538);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#94C783").s().p("Ax7GiQDRjOD3ivQGHkVFzhyQGEh4GJBqQCWAoCSBIIAAKig");
	this.shape_9.setTransform(909.2,534.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A9CE82").s().p("AyZHMIByhyQCUiMCnh9QgMgGgUAFQAMgWAkgEIgMgJQgGgCgIgBQAOgOAbAAQgEgQgOgFQgSgFgIgCQASgQASAEQASACAOARQAAgJAFgLQAGgQAKgHIgEAiQgCAQAEAPQCBhYCAhJQgFgXgNgQQAHgFAKADQAJAEAIALQgHgkgGgQQgJgagRgQQAUAGAQAWQANAVALAjQADgPAAgjQABggADgSIAFAnQACAYAIAKQACgfAMgaQALgXARgRQgSAoAABLQCHhGCAgxQgIgUgOgKQAIgFAKAGIAQANQgHgWgMgRQgMgPgTgOQAgADAbAqQABgPgKgYQAPAKAFAZQgBgYAEgWQAFgaAJgNQgHAzAOAxQAFglAZgcIgLAiQgFATgCAPQFNh0FBAKQDLAGDHA0QgEgRgHgMQAIABAHAKQAEAGAGARIACAAQgBgYgHgYQgHgWgNgZQAdAbANA4QAGgOgFgbQAMATgCAbQAGgWAJgRQALgVALgEQgRAkgCAvIAGACQAOgVAZgEIgYAdIAtAPIAAMXg");
	this.shape_10.setTransform(906.2,530.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#6BB87D").s().p("AsTFrIAAs/IAFASQAIg0gBgaQAAgmgMglIAAgFQAWAgAJAqQAKApgCA6QAKgQASgqQAPgnAOgRIgNA0QgHAgAFAWQASgiAdgRQAagQAfAAQgjAWgeBBQCmAPBLAaQBwAkAEBOQAFBZCAAkQA3AQOOLgQukgTqDjjg");
	this.shape_11.setTransform(78.9,591.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#83BE6F").s().p("A7FGaIAAp7QA4glA4gjQHvk4HYiAQHqiEHvB2QHHBrGsEzQgBgXgHgcQAIAGAFAOQADAIAFAUQADgVgEggQgCgNgKgmQAMASAIAcIALAzQAIgMAAgbIACAwIAYgbQAPgRALAAIgVAnQgMAVgDAUQATgUAiAIIgVAMQgMAIgHAIQDvC3DUDmQvQKpvVAAQrwAAr1mOg");
	this.shape_12.setTransform(173.4,571.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9BC66E").s().p("A9VICIAAmmIACgBIgCgBIAAgaQAKgCAMgCIgPgJIgHgDIAAgJQAQgIAYAAQgDgQgTgIIgSgEIAAgMQAQgHAPACQAXADASAUQgBgLAHgNQAHgRANgIIgGAmQgBASAEAQQCkhjChhQQgFgagRgSQAJgGAMAEQALAEALAMQgJgogHgSQgMgdgWgSQAbAHASAZQARAXAPAoQADgRAAgnQABgkAFgUIAGArQACAaAKAMQADgiAPgdQAOgaAWgUQgXAtAABVQCrhPCig2QgLgYgSgKQAMgGALAHQAFACAPANQgIgZgRgSQgOgRgYgQQAqADAhAuQABgQgNgbQAUALAGAdQgBgcAFgYQAGgdAMgPQgJA5ARA3QAHgpAigfIgPAlQgIAWgDARQGoiDGWAMQDHAFDGAlQA3AKA3ANQgFgTgJgPQALACAIAMQAFAHAIASIACAAQgBgbgIgaQgJgZgRgcQAlAeARA/QAGgPgFgfQAPAWgDAeQAHgZAMgTQAOgXAOgGQgVAqgDA0IAHACQASgXAggFQgWAVgJAMQCuAwCoBKQgCgLgFgNIgJgZQAPADAJANQAJALACALQANgcAVgMQAVgNAZAHQgVAPgIAIQgRAOAAATQAegQAVAKQgJAEgGAFIgOAQQAtgOATASQgQADgLAGQgHAEgJAJQDbBsDJCOQAGgUgCgWQAKAGAFAPQAGAPAAAUQAPglAEgSQAGghgFgkQAOAiAAAmQAAAggKArIAAAAQAKgIAUgZQASgXAMgIQgBAGgQAeQgKAUgBATQAUgUAYgBQAWgBAYALQgfADgjAoQBZBIBRBLQBHBCBABFQBGBKAiAwg");
	this.shape_13.setTransform(187.8,533);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("rgba(255,255,255,0.698)").s().p("EhP/A/IMAAAh+PMCf/AAAMAAAB+Pg");
	this.shape_14.setTransform(512,404);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DBEBF5").s().p("AliClQjzgnhtAFQhEAEg4gDQgZgUAegUQAbgSBogkQgFhtCSgOQB2gMCfAxQgLhVBjgZQBPgUBaAYQBKhCBTAgQBFAbA5BUQB4g4BSAhQBHAdgDA8QBKgNA3AqQAXASAGATQAGAUgQAKQAlAAAvAMQAuAMAfAQQg6ADifgDQhpgBAcAIQBPAWAUAIQApAQg2AAQhZAAndAUIg6ABQieAAjPgig");
	this.shape_15.setTransform(135.4,96.9,1.055,1.055);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EDF7F9").s().p("AlqDXQjzgnhtAFQidAIgxgXQgUgJAGgLQAFgKAYgGQA+gPBWgrQgHghASgsQAVg2ArghQB5haDaB/QgGglARgkQATgnAkgVQBcg2CHBVQAxhLBKgNQBxgVBWCsQAegXA4gJQA2gJA1AJQA4AKAdAcQAhAggLAwQA6gPBDAhQBEAjgdAiQgUAZCBAWQA+ALAPAFQAcAJgaAKQgrASjLgDQikgDAbAIQBPAXAUAIQApAQg2AAQhZAAndATIg6ABQieAAjPghg");
	this.shape_16.setTransform(136.3,91.7,1.055,1.055);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DBEBF5").s().p("AliCmQjygohuAGQhFADg3gDQgZgUAegUQAbgSBogkQgFhtCTgOQB2gMCeAxQgLhVBjgYQBQgVBZAZQBKhDBTAgQBFAbA5BUQB4g4BTAhQBGAdgDA8QBKgNA4AqQAWASAGATQAGAUgQAKQAlAAAvAMQAuAMAfAQQg7ADiegCQhpgCAcAIQBTAYAQAGQApAQg2AAQhhAAnVAUIg3ABQifAAjRghg");
	this.shape_17.setTransform(296.8,76.5,0.76,0.76);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EDF7F9").s().p("AlqDXQjygnhuAFQidAIgxgXQgUgJAGgKQAFgLAYgGQA/gPBVgrQgHghASgsQAVg2AsghQB5haDZB/QgGgkARglQATgmAkgWQBcg1CHBVQAwhLBMgOQBwgUBWCrQAfgXA3gJQA3gJA0AJQA4AKAdAcQAiAggLAwQA5gPBDAhQBEAjgcAjQgVAYCBAWQA+ALAPAFQAcAJgaALQgsARjKgDQijgCAaAHQBTAYAQAHQApAQg2AAQhhAAnVAUIg3ABQifAAjRgig");
	this.shape_18.setTransform(297.3,72.8,0.76,0.76);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DBEBF5").s().p("Am4E4QlCgyg+AIQhiANjBgKQjCgKgpgWQgigSCmgMQBTgFBagCIhmgNIBlgBQAvgCARgFQkdgFghg2QgRgdAtgZQAbgPAGgFQAOgMgEgOQgJgcAVglQAUgkAbgLQAlgPBiAIQCAALCBA2QhrhQBJhFQAbgaAugRQAqgPAgAAQgKgWAHgaQAPg0BYgVQBlgYBQA4QBHAxA5BwQAXhUB1AMQBkALBUA9QCchDA/BZQAYAhAOA8QAGAYANBPIDWgvQDngpBRAPQBZARAnA9QAhA1gPA3QEJA4BLA7Qh2AHhggNQh6gQmTAyQnCA5hzAAQiNAAlfg2g");
	this.shape_19.setTransform(589.3,418.7,1.286,0.661);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EDF7F9").s().p("AnfGSQlCgyg+AIQhiANjBgKQjCgLgpgVQgigTCmgLQBTgGBagCQg8gIhMgIQiYgRhLAAQhVAAAKg3QAEgVAUgTQAWgUAdgGQArgJAChEQABgsACgMQAFgeASgTQAwg0B1gKQCIgLCBBFQhIiBA6g/QA1g8B8AeQgWgvAwg+QAyg+BKgMQAogHA2AMQA6AMA0AeQCCBKARCFQAdgpAxgQQAugPA1AKQB1AXAuBqQCDhZBXBRQAlAiAOA7QAPA5gMBBQBNg6C9ghQC6gjBwATQBoASAlBWQAjBSgvBDQAaAYDXAaQBsANBmAIQA/ARgQASQgOAQhGANQilAdipgWQh6gQmTAzQnCA5hzAAQiNAAlfg2g");
	this.shape_20.setTransform(594.3,412.8,1.286,0.661);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#FFFFFF","#96E0FE","#21C0FC"],[0,0.58,1],63.6,637,63.6,-405).s().p("EhP/A/IMAAAh+PMCf/AAAMAAAB+Pg");
	this.shape_21.setTransform(512,404);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#B5B838").ss(1,1,1).p("ApokzIFuAWIhtDUAGXAiIDSDUAmggGIg6E5");
	this.shape_22.setTransform(811.3,579.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#512804").s().p("AAAAAIAAAAIAAAAIAAAAg");
	this.shape_23.setTransform(177,577.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1024,808);


(lib.Windows = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_50 = new cjs.Graphics().p("An2BzIAAjlIPtAAIAADlg");
	var mask_graphics_51 = new cjs.Graphics().p("An2CbIAAk1IPtAAIAAE1g");
	var mask_graphics_52 = new cjs.Graphics().p("An2DEIAAmHIPtAAIAAGHg");
	var mask_graphics_53 = new cjs.Graphics().p("An2DsIAAnXIPtAAIAAHXg");
	var mask_graphics_54 = new cjs.Graphics().p("An2EUIAAonIPtAAIAAIng");
	var mask_graphics_55 = new cjs.Graphics().p("An2E9IAAp5IPtAAIAAJ5g");
	var mask_graphics_56 = new cjs.Graphics().p("An2FlIAArJIPtAAIAALJg");
	var mask_graphics_57 = new cjs.Graphics().p("An2GNIAAsZIPtAAIAAMZg");
	var mask_graphics_58 = new cjs.Graphics().p("An2G2IAAtrIPtAAIAANrg");
	var mask_graphics_59 = new cjs.Graphics().p("An2HeIAAu7IPtAAIAAO7g");
	var mask_graphics_60 = new cjs.Graphics().p("An2IGIAAwLIPtAAIAAQLg");
	var mask_graphics_61 = new cjs.Graphics().p("An2IuIAAxcIPtAAIAARcg");
	var mask_graphics_62 = new cjs.Graphics().p("An2JXIAAytIPtAAIAAStg");
	var mask_graphics_63 = new cjs.Graphics().p("An2J/IAAz9IPtAAIAAT9g");
	var mask_graphics_64 = new cjs.Graphics().p("An2KnIAA1OIPtAAIAAVOg");
	var mask_graphics_65 = new cjs.Graphics().p("An2LQIAA2fIPtAAIAAWfg");
	var mask_graphics_66 = new cjs.Graphics().p("An2L4IAA3vIPtAAIAAXvg");
	var mask_graphics_67 = new cjs.Graphics().p("An2MgIAA5AIPtAAIAAZAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_graphics_50,x:68,y:175.1}).wait(1).to({graphics:mask_graphics_51,x:68,y:179.1}).wait(1).to({graphics:mask_graphics_52,x:68,y:183.2}).wait(1).to({graphics:mask_graphics_53,x:68,y:187.2}).wait(1).to({graphics:mask_graphics_54,x:68,y:191.2}).wait(1).to({graphics:mask_graphics_55,x:68,y:195.3}).wait(1).to({graphics:mask_graphics_56,x:68,y:199.3}).wait(1).to({graphics:mask_graphics_57,x:68,y:203.3}).wait(1).to({graphics:mask_graphics_58,x:68,y:207.4}).wait(1).to({graphics:mask_graphics_59,x:68,y:211.4}).wait(1).to({graphics:mask_graphics_60,x:68,y:215.4}).wait(1).to({graphics:mask_graphics_61,x:68,y:219.5}).wait(1).to({graphics:mask_graphics_62,x:68,y:223.5}).wait(1).to({graphics:mask_graphics_63,x:68,y:227.5}).wait(1).to({graphics:mask_graphics_64,x:68,y:231.6}).wait(1).to({graphics:mask_graphics_65,x:68,y:235.6}).wait(1).to({graphics:mask_graphics_66,x:68,y:239.6}).wait(1).to({graphics:mask_graphics_67,x:68,y:243.7}).wait(1));

	// Layer 6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AATGSIgng7IAAA7IgSAAIAAhVIATAAIAnA6IAAg6IATAAIAABVgAgHECIAAhVIAQAAIAABVgAAQByIgQg7IgOA7IgXAAIgahVIAUAAIALAnIADAHIACAIIABAHIABAFIARhBIARAAIASBBIAAgFIACgHIACgIIACgHIALgnIAUAAIgaBVgAgeisIAAhVIBCAAIAAAOIgvAAIAAAXIAoAAIAAANIgoAAIAAAVIAwAAIAAAOgAAQk8IgQg7IgOA7IgXAAIgahVIAUAAIALAnIADAHIACAIIABAHIABAFIARhBIARAAIASBBIAAgFIACgHIACgIIACgHIALgnIAUAAIgaBVg");
	this.shape.setTransform(69.3,246.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AAAIUIhwB/IAA0lIDhAAIAAUlg");
	this.shape_1.setTransform(69.3,253.9);

	this.shape.mask = this.shape_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},50).wait(18));

	// Layer 2 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_50 = new cjs.Graphics().p("An2BzIAAjlIPtAAIAADlg");
	var mask_1_graphics_51 = new cjs.Graphics().p("An2CbIAAk1IPtAAIAAE1g");
	var mask_1_graphics_52 = new cjs.Graphics().p("An2DEIAAmHIPtAAIAAGHg");
	var mask_1_graphics_53 = new cjs.Graphics().p("An2DsIAAnXIPtAAIAAHXg");
	var mask_1_graphics_54 = new cjs.Graphics().p("An2EUIAAonIPtAAIAAIng");
	var mask_1_graphics_55 = new cjs.Graphics().p("An2E9IAAp5IPtAAIAAJ5g");
	var mask_1_graphics_56 = new cjs.Graphics().p("An2FlIAArJIPtAAIAALJg");
	var mask_1_graphics_57 = new cjs.Graphics().p("An2GNIAAsZIPtAAIAAMZg");
	var mask_1_graphics_58 = new cjs.Graphics().p("An2G2IAAtrIPtAAIAANrg");
	var mask_1_graphics_59 = new cjs.Graphics().p("An2HeIAAu7IPtAAIAAO7g");
	var mask_1_graphics_60 = new cjs.Graphics().p("An2IGIAAwLIPtAAIAAQLg");
	var mask_1_graphics_61 = new cjs.Graphics().p("An2IuIAAxcIPtAAIAARcg");
	var mask_1_graphics_62 = new cjs.Graphics().p("An2JXIAAytIPtAAIAAStg");
	var mask_1_graphics_63 = new cjs.Graphics().p("An2J/IAAz9IPtAAIAAT9g");
	var mask_1_graphics_64 = new cjs.Graphics().p("An2KnIAA1OIPtAAIAAVOg");
	var mask_1_graphics_65 = new cjs.Graphics().p("An2LQIAA2fIPtAAIAAWfg");
	var mask_1_graphics_66 = new cjs.Graphics().p("An2L4IAA3vIPtAAIAAXvg");
	var mask_1_graphics_67 = new cjs.Graphics().p("An2MgIAA5AIPtAAIAAZAg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_1_graphics_50,x:42.1,y:86.5}).wait(1).to({graphics:mask_1_graphics_51,x:42.1,y:90.5}).wait(1).to({graphics:mask_1_graphics_52,x:42.1,y:94.5}).wait(1).to({graphics:mask_1_graphics_53,x:42.1,y:98.6}).wait(1).to({graphics:mask_1_graphics_54,x:42.1,y:102.6}).wait(1).to({graphics:mask_1_graphics_55,x:42.1,y:106.6}).wait(1).to({graphics:mask_1_graphics_56,x:42.1,y:110.7}).wait(1).to({graphics:mask_1_graphics_57,x:42.1,y:114.7}).wait(1).to({graphics:mask_1_graphics_58,x:42.1,y:118.7}).wait(1).to({graphics:mask_1_graphics_59,x:42.1,y:122.8}).wait(1).to({graphics:mask_1_graphics_60,x:42.1,y:126.8}).wait(1).to({graphics:mask_1_graphics_61,x:42.1,y:130.8}).wait(1).to({graphics:mask_1_graphics_62,x:42.1,y:134.9}).wait(1).to({graphics:mask_1_graphics_63,x:42.1,y:138.9}).wait(1).to({graphics:mask_1_graphics_64,x:42.1,y:142.9}).wait(1).to({graphics:mask_1_graphics_65,x:42.1,y:146.9}).wait(1).to({graphics:mask_1_graphics_66,x:42.1,y:151}).wait(1).to({graphics:mask_1_graphics_67,x:42.1,y:155}).wait(1));

	// Layer 5
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AATGSIgng7IAAA7IgSAAIAAhVIATAAIAoA6IAAg6IASAAIAABVgAgIECIAAhVIARAAIAABVgAAPByIgPg7IgOA7IgXAAIgahVIAUAAIAMAnIACAHIABAIIACAHIABAFIARhBIARAAIARBBIABgFIACgHIACgIIACgHIALgnIAUAAIgZBVgAgeisIAAhVIBCAAIAAAOIgvAAIAAAXIAoAAIAAANIgoAAIAAAVIAwAAIAAAOgAAPk8IgPg7IgOA7IgXAAIgahVIAUAAIAMAnIACAHIABAIIACAHIABAFIARhBIARAAIARBBIABgFIACgHIACgIIACgHIALgnIAUAAIgZBVg");
	this.shape_2.setTransform(43.4,158);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FF0000").s().p("AAAIUIhwB/IAA0lIDhAAIAAUlg");
	this.shape_3.setTransform(43.4,165.3);

	this.shape_2.mask = this.shape_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2}]},50).wait(18));

	// Layer 4 (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_50 = new cjs.Graphics().p("An2BzIAAjlIPtAAIAADlg");
	var mask_2_graphics_51 = new cjs.Graphics().p("An2CbIAAk1IPtAAIAAE1g");
	var mask_2_graphics_52 = new cjs.Graphics().p("An2DEIAAmHIPtAAIAAGHg");
	var mask_2_graphics_53 = new cjs.Graphics().p("An2DsIAAnXIPtAAIAAHXg");
	var mask_2_graphics_54 = new cjs.Graphics().p("An2EUIAAonIPtAAIAAIng");
	var mask_2_graphics_55 = new cjs.Graphics().p("An2E8IAAp3IPtAAIAAJ3g");
	var mask_2_graphics_56 = new cjs.Graphics().p("An2FlIAArJIPtAAIAALJg");
	var mask_2_graphics_57 = new cjs.Graphics().p("An2GNIAAsZIPtAAIAAMZg");
	var mask_2_graphics_58 = new cjs.Graphics().p("An2G1IAAtpIPtAAIAANpg");
	var mask_2_graphics_59 = new cjs.Graphics().p("An2HeIAAu7IPtAAIAAO7g");
	var mask_2_graphics_60 = new cjs.Graphics().p("An2IGIAAwLIPtAAIAAQLg");
	var mask_2_graphics_61 = new cjs.Graphics().p("An2IuIAAxbIPtAAIAARbg");
	var mask_2_graphics_62 = new cjs.Graphics().p("An2JXIAAytIPtAAIAAStg");
	var mask_2_graphics_63 = new cjs.Graphics().p("An2J/IAAz9IPtAAIAAT9g");
	var mask_2_graphics_64 = new cjs.Graphics().p("An2KnIAA1NIPtAAIAAVNg");
	var mask_2_graphics_65 = new cjs.Graphics().p("An2LQIAA2fIPtAAIAAWfg");
	var mask_2_graphics_66 = new cjs.Graphics().p("An2L4IAA3vIPtAAIAAXvg");
	var mask_2_graphics_67 = new cjs.Graphics().p("An2MhIAA5AIPtAAIAAZAg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(50).to({graphics:mask_2_graphics_50,x:10.1,y:35.8}).wait(1).to({graphics:mask_2_graphics_51,x:10.1,y:39.8}).wait(1).to({graphics:mask_2_graphics_52,x:10.1,y:43.8}).wait(1).to({graphics:mask_2_graphics_53,x:10.1,y:47.9}).wait(1).to({graphics:mask_2_graphics_54,x:10.1,y:51.9}).wait(1).to({graphics:mask_2_graphics_55,x:10.1,y:55.9}).wait(1).to({graphics:mask_2_graphics_56,x:10.1,y:60}).wait(1).to({graphics:mask_2_graphics_57,x:10.1,y:64}).wait(1).to({graphics:mask_2_graphics_58,x:10.1,y:68}).wait(1).to({graphics:mask_2_graphics_59,x:10.1,y:72.1}).wait(1).to({graphics:mask_2_graphics_60,x:10.1,y:76.1}).wait(1).to({graphics:mask_2_graphics_61,x:10.1,y:80.1}).wait(1).to({graphics:mask_2_graphics_62,x:10.1,y:84.2}).wait(1).to({graphics:mask_2_graphics_63,x:10.1,y:88.2}).wait(1).to({graphics:mask_2_graphics_64,x:10.1,y:92.2}).wait(1).to({graphics:mask_2_graphics_65,x:10.1,y:96.2}).wait(1).to({graphics:mask_2_graphics_66,x:10.1,y:100.3}).wait(1).to({graphics:mask_2_graphics_67,x:10.1,y:104.3}).wait(1));

	// we win
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAUGRIgog5IAAA5IgTAAIAAhTIAUAAIAnA4IAAg4IATAAIAABTgAgHEBIAAhTIAQAAIAABTgAAPBxIgPg6IgOA6IgXAAIgahTIAVAAIAKAlIACAIIACAJIACAHIABADIARhAIASAAIARBAIABgDIABgHIACgJIACgIIALglIAUAAIgZBTgAgeitIAAhUIBCAAIAAANIgwAAIAAAYIApAAIAAANIgpAAIAAAWIAxAAIAAAMgAAPk9IgPg6IgOA6IgXAAIgahUIAVAAIAKAmIACAIIACAIIACAIIABADIARhAIASAAIARBAIABgDIABgIIACgIIACgIIALgmIAUAAIgZBUg");
	this.shape_4.setTransform(11.4,107.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF0000").s().p("AAAIUIhwB/IAA0mIDhAAIAAUmg");
	this.shape_5.setTransform(11.4,114.6);

	this.shape_4.mask = this.shape_5.mask = mask_2;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_5},{t:this.shape_4}]},50).wait(18));

	// Soldier
	this.instance = new lib.SoldierFruntview();
	this.instance.setTransform(19,206.6,0.054,0.054,0,0,0,172.7,315.6);

	this.instance_1 = new lib.SoldierFruntview();
	this.instance_1.setTransform(69.3,167.3,0.054,0.054,0,0,0,172.7,315.6);

	this.instance_2 = new lib.SoldierFruntview();
	this.instance_2.setTransform(69.3,167.3,0.054,0.054,0,0,0,172.7,315.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:19,y:206.6}}]},1).to({state:[]},5).to({state:[{t:this.instance_1,p:{x:69.3,y:167.3}},{t:this.instance,p:{x:19.2,y:206.6}}]},6).to({state:[]},7).to({state:[{t:this.instance_2,p:{x:69.3,y:167.3}},{t:this.instance_1,p:{x:43.1,y:78.7}},{t:this.instance,p:{x:19.2,y:206.6}}]},7).to({state:[]},8).to({state:[{t:this.instance_2,p:{x:11.3,y:27.9}},{t:this.instance_1,p:{x:43.1,y:78.7}},{t:this.instance,p:{x:69.4,y:167.3}}]},8).wait(26));

	// Window
	this.instance_3 = new lib.window1();
	this.instance_3.setTransform(30.3,327.5,1.609,1.609,0,0,180,7,15.1);

	this.instance_4 = new lib.window1();
	this.instance_4.setTransform(19.2,203.1,1.609,1.609,0,0,180,7,15.1);

	this.instance_5 = new lib.window1();
	this.instance_5.setTransform(69.3,163.7,1.609,1.609,0,0,180,7,15.1);

	this.instance_6 = new lib.window1();
	this.instance_6.setTransform(43.2,75,1.609,1.609,0,0,180,7.1,15);

	this.instance_7 = new lib.window1();
	this.instance_7.setTransform(11.5,24.3,1.609,1.609,0,0,180,7,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3}]}).wait(68));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.6,351.8);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0F204B").s().p("ASPE7IAAp1IWyAAQBkABAABjIAAGtQAABjhkABgAGoE7IAAp1ILMAAIAAJ1gEgpAAE7QhjgBgBhjIAAmtQABhjBjgBMAvPAAAIAAJ1g");
	this.shape.setTransform(286.6,31.5);

	this.ikNode_1 = new lib.Symbol255();
	this.ikNode_1.setTransform(511.6,32.3,1,1,0,0,0,512.6,21.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgLE7IAAp1IAXAAIAAJ1g");
	this.shape_1.setTransform(293.7,31.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.ikNode_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,819.2,63);


(lib.Sodierwithbody = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#999999").ss(1,1,1).p("AAvgEIgBABQgPAHgSACQgBAAAAAAQgLAAgLgCQgNgCgOgEQgFgBgEgC");
	this.shape.setTransform(8.3,4.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEB288").s().p("AgGAqIgBgNQgKAFgEABQgKAAgCgEQABgDgBgDQgBgFgHgCIAHgFIgGgDIAHgGQgIAAgEgEQAGgIADgRQgDgLAHgMQAOAGANACQALACALAAQgHAPABAMQAAAaAfAMQAAAJAEAFQgZAIgOAAQgKAAgDgHg");
	this.shape_1.setTransform(7.8,9.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AAjA+IgHgCQgegNABgbQAAgNAFgNQASgBAPgKIABAAQADAJgCAGQgBAfAHAJIAJAOQAGAIgNACgAgTgHQgNgDgOgFIgJgEQADgKAGgKQAFgGAHgGQASgNAUAEQAXAHAGASQAFAJAAAJIgBAAQgPAKgSABIgBAAIgDAAQgJAAgKgBgAAmgRIAAAAg");
	this.shape_2.setTransform(9.2,6.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#9E2757").s().p("Ag6AEQgEgTAGgDQA/ATAugUQAJAPgCAEIgEAIQgeAMgaAAQgeAAgcgQg");
	this.shape_3.setTransform(10.4,30.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF6666").s().p("AAwCgQgHgIgNggQgBBHh+g8QAWgQAHgSQAHgRADgaQACgZACgFIACgJQAzAfA/gbQAAAJAGAkQAGAkAcArQgXAUgRAAQgHAAgFgDgAg0gHIgFhAQgGhBAzgaIAAAAIAJABIAEAAIAZAAIADAAQAbAOAMApQACAVgCAWQgCAYgJAfQgYAJgdAAQgZAAgfgIg");
	this.shape_4.setTransform(10.1,29.8);

	this.instance = new lib.SoldierRightlag2("synched",0);
	this.instance.setTransform(14.6,48.7,0.236,0.236,0,1.3,-178.7,1.7,0.3);

	this.instance_1 = new lib.SoldierRihgtlag1("synched",0);
	this.instance_1.setTransform(12.7,36.4,0.236,0.236,0,3.2,-176.8,17.4,0.4);

	this.instance_2 = new lib.SoldierLeftlag2("synched",0);
	this.instance_2.setTransform(9.9,48.7,0.236,0.236,0,1.3,-178.7,1.7,0.3);

	this.instance_3 = new lib.SoldierLeftlag1("synched",0);
	this.instance_3.setTransform(8,36.4,0.236,0.236,0,3.2,-176.8,17.6,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.2,65.8);


(lib.part_2826 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.349)").s().p("AC3GKIAAsTICmAAIAACEIAAEEIAAGLgAlcGKIAAhIIAAlDIAAkEIAAiEICwAAIAAMTg");
	this.shape.setTransform(72.6,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.078)").s().p("AixGKIAAsTIFjAAIAAMTg");
	this.shape_1.setTransform(73.1,49.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlcGKIAAhIIAAlDIAAkEIAAiEIK5AAIAACEIAAEEIAAGLg");
	mask.setTransform(72.5,49.8);

	// Layer 6
	this.instance = new lib.break1();
	this.instance.setTransform(72.8,31.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_1 = new lib.break1();
	this.instance_1.setTransform(95.6,50.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_2 = new lib.break1();
	this.instance_2.setTransform(57.3,69.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_2.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_3 = new lib.break1();
	this.instance_3.setTransform(95.5,62.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_3.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_4 = new lib.break1();
	this.instance_4.setTransform(95.6,37.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_4.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_5 = new lib.break1();
	this.instance_5.setTransform(72.8,19.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_5.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_6 = new lib._break();
	this.instance_6.setTransform(110.9,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_6.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_7 = new lib._break();
	this.instance_7.setTransform(110.7,50.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_7.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_8 = new lib._break();
	this.instance_8.setTransform(103.1,43.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_8.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_9 = new lib._break();
	this.instance_9.setTransform(103.2,31.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_9.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_10 = new lib._break();
	this.instance_10.setTransform(103.2,19.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_10.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_11 = new lib._break();
	this.instance_11.setTransform(49.9,13,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_11.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_12 = new lib._break();
	this.instance_12.setTransform(34.6,13,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_12.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_13 = new lib._break();
	this.instance_13.setTransform(110.9,13,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_13.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_14 = new lib._break();
	this.instance_14.setTransform(95.6,13,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_14.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_15 = new lib._break();
	this.instance_15.setTransform(80.4,13,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_15.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_16 = new lib._break();
	this.instance_16.setTransform(65.2,13,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_16.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_17 = new lib._break();
	this.instance_17.setTransform(34.4,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_17.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_18 = new lib._break();
	this.instance_18.setTransform(110.8,87.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_18.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_19 = new lib._break();
	this.instance_19.setTransform(34.4,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_19.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_20 = new lib._break();
	this.instance_20.setTransform(65.1,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_20.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_21 = new lib._break();
	this.instance_21.setTransform(49.9,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_21.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_22 = new lib._break();
	this.instance_22.setTransform(95.5,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_22.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_23 = new lib._break();
	this.instance_23.setTransform(80.4,87.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_23.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_24 = new lib._break();
	this.instance_24.setTransform(111,74.9,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_24.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_25 = new lib._break();
	this.instance_25.setTransform(42,81.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_25.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_26 = new lib._break();
	this.instance_26.setTransform(72.8,81.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_26.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_27 = new lib._break();
	this.instance_27.setTransform(57.5,81.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_27.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_28 = new lib._break();
	this.instance_28.setTransform(103.1,81.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_28.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_29 = new lib._break();
	this.instance_29.setTransform(88,81.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_29.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_30 = new lib._break();
	this.instance_30.setTransform(34.5,75.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_30.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_31 = new lib._break();
	this.instance_31.setTransform(65.2,75.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_31.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_32 = new lib._break();
	this.instance_32.setTransform(50,75.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_32.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_33 = new lib._break();
	this.instance_33.setTransform(95.6,75.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_33.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_34 = new lib._break();
	this.instance_34.setTransform(80.5,75.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_34.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_35 = new lib._break();
	this.instance_35.setTransform(49.9,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_35.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_36 = new lib._break();
	this.instance_36.setTransform(34.6,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_36.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_37 = new lib._break();
	this.instance_37.setTransform(80.2,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_37.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_38 = new lib._break();
	this.instance_38.setTransform(65.1,62.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_38.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_39 = new lib._break();
	this.instance_39.setTransform(42.1,68.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_39.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_40 = new lib._break();
	this.instance_40.setTransform(103.2,68.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_40.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_41 = new lib._break();
	this.instance_41.setTransform(87.7,68.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_41.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_42 = new lib._break();
	this.instance_42.setTransform(72.6,68.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_42.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_43 = new lib._break();
	this.instance_43.setTransform(57.3,56.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_43.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_44 = new lib._break();
	this.instance_44.setTransform(72.6,56.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_44.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_45 = new lib._break();
	this.instance_45.setTransform(87.8,56.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_45.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_46 = new lib._break();
	this.instance_46.setTransform(42.3,56.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_46.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_47 = new lib._break();
	this.instance_47.setTransform(103.2,56.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_47.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_48 = new lib.break1();
	this.instance_48.setTransform(49.7,37.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_48.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_49 = new lib._break();
	this.instance_49.setTransform(34.5,37.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_49.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_50 = new lib._break();
	this.instance_50.setTransform(110.7,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_50.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_51 = new lib._break();
	this.instance_51.setTransform(95.4,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_51.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_52 = new lib._break();
	this.instance_52.setTransform(57.4,19.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_52.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_53 = new lib._break();
	this.instance_53.setTransform(87.9,19.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_53.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_54 = new lib._break();
	this.instance_54.setTransform(42.2,19.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_54.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_55 = new lib._break();
	this.instance_55.setTransform(110.9,37.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_55.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_56 = new lib._break();
	this.instance_56.setTransform(72.5,44,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_56.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_57 = new lib._break();
	this.instance_57.setTransform(87.8,44,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_57.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_58 = new lib._break();
	this.instance_58.setTransform(49.5,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_58.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_59 = new lib._break();
	this.instance_59.setTransform(64.8,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_59.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_60 = new lib._break();
	this.instance_60.setTransform(80,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_60.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_61 = new lib._break();
	this.instance_61.setTransform(34.5,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_61.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_62 = new lib._break();
	this.instance_62.setTransform(57.3,31.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_62.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_63 = new lib._break();
	this.instance_63.setTransform(42,44,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_63.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_64 = new lib._break();
	this.instance_64.setTransform(57.3,44,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_64.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_65 = new lib._break();
	this.instance_65.setTransform(80.1,37.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_65.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_66 = new lib._break();
	this.instance_66.setTransform(65,37.9,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_66.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_67 = new lib._break();
	this.instance_67.setTransform(87.8,31.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_67.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_68 = new lib._break();
	this.instance_68.setTransform(80.1,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_68.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_69 = new lib._break();
	this.instance_69.setTransform(64.9,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_69.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_70 = new lib._break();
	this.instance_70.setTransform(49.7,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_70.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_71 = new lib._break();
	this.instance_71.setTransform(42,31.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_71.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = this.instance_39.mask = this.instance_40.mask = this.instance_41.mask = this.instance_42.mask = this.instance_43.mask = this.instance_44.mask = this.instance_45.mask = this.instance_46.mask = this.instance_47.mask = this.instance_48.mask = this.instance_49.mask = this.instance_50.mask = this.instance_51.mask = this.instance_52.mask = this.instance_53.mask = this.instance_54.mask = this.instance_55.mask = this.instance_56.mask = this.instance_57.mask = this.instance_58.mask = this.instance_59.mask = this.instance_60.mask = this.instance_61.mask = this.instance_62.mask = this.instance_63.mask = this.instance_64.mask = this.instance_65.mask = this.instance_66.mask = this.instance_67.mask = this.instance_68.mask = this.instance_69.mask = this.instance_70.mask = this.instance_71.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#855006").s().p("AlIGCIgUAAIAAsDIK5AAIAAMDg");
	this.shape_2.setTransform(72.5,50.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37.5,10.4,70,78.9);


(lib.part_314 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.349)").s().p("AC3ExIAAphICmAAIAADWIAAGLgAlcExIAAhIIAAlDIAAjWICwAAIAAJhg");
	this.shape.setTransform(72.6,58.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.078)").s().p("AixExIAAphIFjAAIAAJhg");
	this.shape_1.setTransform(73.1,58.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlcExIAAhIIAAlDIAAjWIK5AAIAADWIAAGLg");
	mask.setTransform(72.5,58.7);

	// Layer 6
	this.instance = new lib.break1();
	this.instance.setTransform(72.8,31.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_1 = new lib.break1();
	this.instance_1.setTransform(95.6,50.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_2 = new lib.break1();
	this.instance_2.setTransform(57.3,69.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_2.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_3 = new lib.break1();
	this.instance_3.setTransform(95.5,62.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_3.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_4 = new lib.break1();
	this.instance_4.setTransform(95.6,37.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_4.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_5 = new lib._break();
	this.instance_5.setTransform(110.9,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_5.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_6 = new lib._break();
	this.instance_6.setTransform(110.7,50.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_6.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_7 = new lib._break();
	this.instance_7.setTransform(103.1,43.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_7.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_8 = new lib._break();
	this.instance_8.setTransform(103.2,31.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_8.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_9 = new lib._break();
	this.instance_9.setTransform(110.8,87.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_9.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_10 = new lib._break();
	this.instance_10.setTransform(34.4,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_10.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_11 = new lib._break();
	this.instance_11.setTransform(65.1,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_11.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_12 = new lib._break();
	this.instance_12.setTransform(49.9,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_12.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_13 = new lib._break();
	this.instance_13.setTransform(95.5,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_13.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_14 = new lib._break();
	this.instance_14.setTransform(80.4,87.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_14.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_15 = new lib._break();
	this.instance_15.setTransform(111,74.9,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_15.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_16 = new lib._break();
	this.instance_16.setTransform(42,81.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_16.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_17 = new lib._break();
	this.instance_17.setTransform(72.8,81.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_17.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_18 = new lib._break();
	this.instance_18.setTransform(57.5,81.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_18.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_19 = new lib._break();
	this.instance_19.setTransform(103.1,81.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_19.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_20 = new lib._break();
	this.instance_20.setTransform(88,81.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_20.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_21 = new lib._break();
	this.instance_21.setTransform(34.5,75.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_21.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_22 = new lib._break();
	this.instance_22.setTransform(65.2,75.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_22.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_23 = new lib._break();
	this.instance_23.setTransform(50,75.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_23.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_24 = new lib._break();
	this.instance_24.setTransform(95.6,75.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_24.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_25 = new lib._break();
	this.instance_25.setTransform(80.5,75.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_25.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_26 = new lib._break();
	this.instance_26.setTransform(49.9,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_26.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_27 = new lib._break();
	this.instance_27.setTransform(34.6,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_27.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_28 = new lib._break();
	this.instance_28.setTransform(80.2,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_28.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_29 = new lib._break();
	this.instance_29.setTransform(65.1,62.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_29.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_30 = new lib._break();
	this.instance_30.setTransform(42.1,68.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_30.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_31 = new lib._break();
	this.instance_31.setTransform(103.2,68.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_31.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_32 = new lib._break();
	this.instance_32.setTransform(87.7,68.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_32.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_33 = new lib._break();
	this.instance_33.setTransform(72.6,68.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_33.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_34 = new lib._break();
	this.instance_34.setTransform(57.3,56.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_34.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_35 = new lib._break();
	this.instance_35.setTransform(72.6,56.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_35.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_36 = new lib._break();
	this.instance_36.setTransform(87.8,56.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_36.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_37 = new lib._break();
	this.instance_37.setTransform(42.3,56.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_37.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_38 = new lib._break();
	this.instance_38.setTransform(103.2,56.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_38.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_39 = new lib.break1();
	this.instance_39.setTransform(49.7,37.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_39.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_40 = new lib._break();
	this.instance_40.setTransform(34.5,37.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_40.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_41 = new lib._break();
	this.instance_41.setTransform(110.9,37.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_41.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_42 = new lib._break();
	this.instance_42.setTransform(72.5,44,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_42.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_43 = new lib._break();
	this.instance_43.setTransform(87.8,44,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_43.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_44 = new lib._break();
	this.instance_44.setTransform(49.5,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_44.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_45 = new lib._break();
	this.instance_45.setTransform(64.8,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_45.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_46 = new lib._break();
	this.instance_46.setTransform(80,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_46.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_47 = new lib._break();
	this.instance_47.setTransform(34.5,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_47.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_48 = new lib._break();
	this.instance_48.setTransform(57.3,31.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_48.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_49 = new lib._break();
	this.instance_49.setTransform(42,44,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_49.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_50 = new lib._break();
	this.instance_50.setTransform(57.3,44,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_50.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_51 = new lib._break();
	this.instance_51.setTransform(80.1,37.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_51.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_52 = new lib._break();
	this.instance_52.setTransform(65,37.9,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_52.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_53 = new lib._break();
	this.instance_53.setTransform(87.8,31.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_53.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_54 = new lib._break();
	this.instance_54.setTransform(42,31.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_54.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = this.instance_39.mask = this.instance_40.mask = this.instance_41.mask = this.instance_42.mask = this.instance_43.mask = this.instance_44.mask = this.instance_45.mask = this.instance_46.mask = this.instance_47.mask = this.instance_48.mask = this.instance_49.mask = this.instance_50.mask = this.instance_51.mask = this.instance_52.mask = this.instance_53.mask = this.instance_54.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#855006").s().p("AlIExIgUAAIAAphIK5AAIAAJhg");
	this.shape_2.setTransform(72.5,58.7);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37.5,28.2,70,61.1);


(lib.part_2dh236 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.349)").s().p("AC3GKIAAsTICmAAIAACEIAAEEIAAGLgAlcGKIAAhIIAAlDIAAkEIAAiEICwAAIAAMTg");
	this.shape.setTransform(72.6,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.078)").s().p("AixGKIAAsTIFjAAIAAMTg");
	this.shape_1.setTransform(73.1,49.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlcGKIAAhIIAAlDIAAkEIAAiEIK5AAIAACEIAAEEIAAGLg");
	mask.setTransform(72.5,49.8);

	// Layer 6
	this.instance = new lib.break1ds55();
	this.instance.setTransform(72.8,31.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_1 = new lib.break1ds55();
	this.instance_1.setTransform(95.6,50.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_2 = new lib.break1ds55();
	this.instance_2.setTransform(57.3,69.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_2.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_3 = new lib.break1ds55();
	this.instance_3.setTransform(95.5,62.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_3.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_4 = new lib.break1ds55();
	this.instance_4.setTransform(95.6,37.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_4.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_5 = new lib.break1ds55();
	this.instance_5.setTransform(72.8,19.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_5.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_6 = new lib.breakdh53();
	this.instance_6.setTransform(110.9,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_6.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_7 = new lib.breakdh53();
	this.instance_7.setTransform(110.7,50.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_7.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_8 = new lib.breakdh53();
	this.instance_8.setTransform(103.1,43.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_8.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_9 = new lib.breakdh53();
	this.instance_9.setTransform(103.2,31.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_9.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_10 = new lib.breakdh53();
	this.instance_10.setTransform(103.2,19.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_10.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_11 = new lib.breakdh53();
	this.instance_11.setTransform(34.4,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_11.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_12 = new lib.breakdh53();
	this.instance_12.setTransform(110.8,87.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_12.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_13 = new lib.breakdh53();
	this.instance_13.setTransform(34.4,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_13.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_14 = new lib.breakdh53();
	this.instance_14.setTransform(65.1,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_14.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_15 = new lib.breakdh53();
	this.instance_15.setTransform(49.9,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_15.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_16 = new lib.breakdh53();
	this.instance_16.setTransform(95.5,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_16.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_17 = new lib.breakdh53();
	this.instance_17.setTransform(80.4,87.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_17.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_18 = new lib.breakdh53();
	this.instance_18.setTransform(111,74.9,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_18.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_19 = new lib.breakdh53();
	this.instance_19.setTransform(42,81.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_19.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_20 = new lib.breakdh53();
	this.instance_20.setTransform(72.8,81.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_20.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_21 = new lib.breakdh53();
	this.instance_21.setTransform(57.5,81.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_21.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_22 = new lib.breakdh53();
	this.instance_22.setTransform(103.1,81.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_22.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_23 = new lib.breakdh53();
	this.instance_23.setTransform(88,81.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_23.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_24 = new lib.breakdh53();
	this.instance_24.setTransform(34.5,75.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_24.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_25 = new lib.breakdh53();
	this.instance_25.setTransform(65.2,75.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_25.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_26 = new lib.breakdh53();
	this.instance_26.setTransform(50,75.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_26.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_27 = new lib.breakdh53();
	this.instance_27.setTransform(95.6,75.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_27.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_28 = new lib.breakdh53();
	this.instance_28.setTransform(80.5,75.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_28.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_29 = new lib.breakdh53();
	this.instance_29.setTransform(49.9,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_29.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_30 = new lib.breakdh53();
	this.instance_30.setTransform(34.6,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_30.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_31 = new lib.breakdh53();
	this.instance_31.setTransform(80.2,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_31.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_32 = new lib.breakdh53();
	this.instance_32.setTransform(65.1,62.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_32.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_33 = new lib.breakdh53();
	this.instance_33.setTransform(42.1,68.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_33.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_34 = new lib.breakdh53();
	this.instance_34.setTransform(103.2,68.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_34.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_35 = new lib.breakdh53();
	this.instance_35.setTransform(87.7,68.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_35.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_36 = new lib.breakdh53();
	this.instance_36.setTransform(72.6,68.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_36.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_37 = new lib.breakdh53();
	this.instance_37.setTransform(57.3,56.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_37.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_38 = new lib.breakdh53();
	this.instance_38.setTransform(72.6,56.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_38.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_39 = new lib.breakdh53();
	this.instance_39.setTransform(87.8,56.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_39.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_40 = new lib.breakdh53();
	this.instance_40.setTransform(42.3,56.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_40.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_41 = new lib.breakdh53();
	this.instance_41.setTransform(103.2,56.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_41.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_42 = new lib.break1ds55();
	this.instance_42.setTransform(49.7,37.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_42.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_43 = new lib.breakdh53();
	this.instance_43.setTransform(34.5,37.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_43.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_44 = new lib.breakdh53();
	this.instance_44.setTransform(110.7,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_44.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_45 = new lib.breakdh53();
	this.instance_45.setTransform(95.4,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_45.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_46 = new lib.breakdh53();
	this.instance_46.setTransform(57.4,19.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_46.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_47 = new lib.breakdh53();
	this.instance_47.setTransform(87.9,19.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_47.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_48 = new lib.breakdh53();
	this.instance_48.setTransform(42.2,19.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_48.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_49 = new lib.breakdh53();
	this.instance_49.setTransform(110.9,37.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_49.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_50 = new lib.breakdh53();
	this.instance_50.setTransform(72.5,44,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_50.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_51 = new lib.breakdh53();
	this.instance_51.setTransform(87.8,44,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_51.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_52 = new lib.breakdh53();
	this.instance_52.setTransform(49.5,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_52.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_53 = new lib.breakdh53();
	this.instance_53.setTransform(64.8,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_53.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_54 = new lib.breakdh53();
	this.instance_54.setTransform(80,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_54.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_55 = new lib.breakdh53();
	this.instance_55.setTransform(34.5,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_55.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_56 = new lib.breakdh53();
	this.instance_56.setTransform(57.3,31.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_56.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_57 = new lib.breakdh53();
	this.instance_57.setTransform(42,44,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_57.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_58 = new lib.breakdh53();
	this.instance_58.setTransform(57.3,44,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_58.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_59 = new lib.breakdh53();
	this.instance_59.setTransform(80.1,37.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_59.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_60 = new lib.breakdh53();
	this.instance_60.setTransform(65,37.9,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_60.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_61 = new lib.breakdh53();
	this.instance_61.setTransform(87.8,31.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_61.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_62 = new lib.breakdh53();
	this.instance_62.setTransform(80.1,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_62.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_63 = new lib.breakdh53();
	this.instance_63.setTransform(64.9,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_63.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_64 = new lib.breakdh53();
	this.instance_64.setTransform(49.7,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_64.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_65 = new lib.breakdh53();
	this.instance_65.setTransform(42,31.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_65.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = this.instance_39.mask = this.instance_40.mask = this.instance_41.mask = this.instance_42.mask = this.instance_43.mask = this.instance_44.mask = this.instance_45.mask = this.instance_46.mask = this.instance_47.mask = this.instance_48.mask = this.instance_49.mask = this.instance_50.mask = this.instance_51.mask = this.instance_52.mask = this.instance_53.mask = this.instance_54.mask = this.instance_55.mask = this.instance_56.mask = this.instance_57.mask = this.instance_58.mask = this.instance_59.mask = this.instance_60.mask = this.instance_61.mask = this.instance_62.mask = this.instance_63.mask = this.instance_64.mask = this.instance_65.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#855006").s().p("AlIGCIgUAAIAAsDIK5AAIAAMDg");
	this.shape_2.setTransform(72.5,50.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37.5,10.5,70,78.8);


(lib.part_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.349)").s().p("AC3GKIAAsTICmAAIAACEIAAEEIAAGLgAlcGKIAAhIIAAlDIAAkEIAAiEICwAAIAAMTg");
	this.shape.setTransform(72.6,49.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.078)").s().p("AixGKIAAsTIFjAAIAAMTg");
	this.shape_1.setTransform(73.1,49.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AlcGKIAAhIIAAlDIAAkEIAAiEIK5AAIAACEIAAEEIAAGLg");
	mask.setTransform(72.5,49.8);

	// Layer 6
	this.instance = new lib.break1();
	this.instance.setTransform(72.8,31.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_1 = new lib.break1();
	this.instance_1.setTransform(95.6,50.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_2 = new lib.break1();
	this.instance_2.setTransform(57.3,69.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_2.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_3 = new lib.break1();
	this.instance_3.setTransform(95.5,62.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_3.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_4 = new lib.break1();
	this.instance_4.setTransform(95.6,37.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_4.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_5 = new lib.break1();
	this.instance_5.setTransform(72.8,19.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_5.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_6 = new lib._break();
	this.instance_6.setTransform(110.9,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_6.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_7 = new lib._break();
	this.instance_7.setTransform(126.3,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_7.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_8 = new lib._break();
	this.instance_8.setTransform(118.6,56.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_8.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_9 = new lib._break();
	this.instance_9.setTransform(134,56.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_9.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_10 = new lib._break();
	this.instance_10.setTransform(110.7,50.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_10.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_11 = new lib._break();
	this.instance_11.setTransform(125.9,50.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_11.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_12 = new lib._break();
	this.instance_12.setTransform(141.2,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_12.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_13 = new lib._break();
	this.instance_13.setTransform(103.1,43.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_13.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_14 = new lib._break();
	this.instance_14.setTransform(118.4,43.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_14.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_15 = new lib._break();
	this.instance_15.setTransform(133.6,43.9,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_15.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_16 = new lib._break();
	this.instance_16.setTransform(103.2,31.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_16.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_17 = new lib._break();
	this.instance_17.setTransform(118.5,31.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_17.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_18 = new lib._break();
	this.instance_18.setTransform(133.7,31.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_18.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_19 = new lib._break();
	this.instance_19.setTransform(103.2,19.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_19.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_20 = new lib._break();
	this.instance_20.setTransform(118.4,19.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_20.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_21 = new lib._break();
	this.instance_21.setTransform(49.9,0.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_21.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_22 = new lib._break();
	this.instance_22.setTransform(34.6,0.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_22.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_23 = new lib._break();
	this.instance_23.setTransform(126.2,0.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_23.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_24 = new lib._break();
	this.instance_24.setTransform(110.9,0.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_24.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_25 = new lib._break();
	this.instance_25.setTransform(95.6,0.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_25.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_26 = new lib._break();
	this.instance_26.setTransform(80.4,0.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_26.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_27 = new lib._break();
	this.instance_27.setTransform(65.2,0.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_27.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_28 = new lib._break();
	this.instance_28.setTransform(57.3,6.9,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_28.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_29 = new lib._break();
	this.instance_29.setTransform(42,6.9,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_29.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_30 = new lib._break();
	this.instance_30.setTransform(133.6,6.9,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_30.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_31 = new lib._break();
	this.instance_31.setTransform(118.3,6.9,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_31.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_32 = new lib._break();
	this.instance_32.setTransform(103,6.9,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_32.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_33 = new lib._break();
	this.instance_33.setTransform(87.8,6.9,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_33.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_34 = new lib._break();
	this.instance_34.setTransform(72.6,6.9,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_34.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_35 = new lib._break();
	this.instance_35.setTransform(49.9,13,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_35.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_36 = new lib._break();
	this.instance_36.setTransform(34.6,13,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_36.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_37 = new lib._break();
	this.instance_37.setTransform(126.2,13,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_37.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_38 = new lib._break();
	this.instance_38.setTransform(110.9,13,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_38.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_39 = new lib._break();
	this.instance_39.setTransform(95.6,13,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_39.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_40 = new lib._break();
	this.instance_40.setTransform(80.4,13,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_40.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_41 = new lib._break();
	this.instance_41.setTransform(65.2,13,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_41.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_42 = new lib._break();
	this.instance_42.setTransform(34.4,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_42.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_43 = new lib._break();
	this.instance_43.setTransform(19.1,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_43.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_44 = new lib._break();
	this.instance_44.setTransform(110.8,87.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_44.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_45 = new lib._break();
	this.instance_45.setTransform(141.1,87.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_45.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_46 = new lib._break();
	this.instance_46.setTransform(126,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_46.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_47 = new lib._break();
	this.instance_47.setTransform(34.4,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_47.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_48 = new lib._break();
	this.instance_48.setTransform(65.1,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_48.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_49 = new lib._break();
	this.instance_49.setTransform(49.9,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_49.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_50 = new lib._break();
	this.instance_50.setTransform(95.5,87.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_50.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_51 = new lib._break();
	this.instance_51.setTransform(80.4,87.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_51.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_52 = new lib._break();
	this.instance_52.setTransform(111,74.9,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_52.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_53 = new lib._break();
	this.instance_53.setTransform(42,81.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_53.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_54 = new lib._break();
	this.instance_54.setTransform(72.8,81.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_54.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_55 = new lib._break();
	this.instance_55.setTransform(57.5,81.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_55.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_56 = new lib._break();
	this.instance_56.setTransform(103.1,81.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_56.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_57 = new lib._break();
	this.instance_57.setTransform(88,81.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_57.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_58 = new lib._break();
	this.instance_58.setTransform(34.5,75.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_58.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_59 = new lib._break();
	this.instance_59.setTransform(65.2,75.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_59.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_60 = new lib._break();
	this.instance_60.setTransform(50,75.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_60.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_61 = new lib._break();
	this.instance_61.setTransform(95.6,75.1,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_61.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_62 = new lib._break();
	this.instance_62.setTransform(80.5,75.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_62.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_63 = new lib._break();
	this.instance_63.setTransform(49.9,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_63.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_64 = new lib._break();
	this.instance_64.setTransform(34.6,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_64.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_65 = new lib._break();
	this.instance_65.setTransform(80.2,62.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_65.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_66 = new lib._break();
	this.instance_66.setTransform(65.1,62.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_66.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_67 = new lib._break();
	this.instance_67.setTransform(42.1,68.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_67.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_68 = new lib._break();
	this.instance_68.setTransform(103.2,68.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_68.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_69 = new lib._break();
	this.instance_69.setTransform(118.5,68.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_69.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_70 = new lib._break();
	this.instance_70.setTransform(87.7,68.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_70.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_71 = new lib._break();
	this.instance_71.setTransform(72.6,68.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_71.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_72 = new lib._break();
	this.instance_72.setTransform(57.3,56.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_72.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_73 = new lib._break();
	this.instance_73.setTransform(72.6,56.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_73.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_74 = new lib._break();
	this.instance_74.setTransform(87.8,56.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_74.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_75 = new lib._break();
	this.instance_75.setTransform(42.3,56.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_75.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_76 = new lib._break();
	this.instance_76.setTransform(103.2,56.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_76.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_77 = new lib.break1();
	this.instance_77.setTransform(49.7,37.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_77.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_78 = new lib._break();
	this.instance_78.setTransform(34.5,37.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_78.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_79 = new lib._break();
	this.instance_79.setTransform(125.8,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_79.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_80 = new lib._break();
	this.instance_80.setTransform(110.7,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_80.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_81 = new lib._break();
	this.instance_81.setTransform(95.4,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_81.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_82 = new lib._break();
	this.instance_82.setTransform(57.4,19.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_82.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_83 = new lib._break();
	this.instance_83.setTransform(87.9,19.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_83.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_84 = new lib._break();
	this.instance_84.setTransform(42.2,19.3,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_84.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_85 = new lib._break();
	this.instance_85.setTransform(110.9,37.7,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_85.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_86 = new lib._break();
	this.instance_86.setTransform(72.5,44,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_86.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_87 = new lib._break();
	this.instance_87.setTransform(87.8,44,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_87.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_88 = new lib._break();
	this.instance_88.setTransform(49.5,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_88.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_89 = new lib._break();
	this.instance_89.setTransform(64.8,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_89.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_90 = new lib._break();
	this.instance_90.setTransform(80,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_90.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_91 = new lib._break();
	this.instance_91.setTransform(34.5,50.2,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_91.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_92 = new lib._break();
	this.instance_92.setTransform(57.3,31.5,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_92.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_93 = new lib._break();
	this.instance_93.setTransform(42,44,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_93.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_94 = new lib._break();
	this.instance_94.setTransform(57.3,44,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_94.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_95 = new lib._break();
	this.instance_95.setTransform(80.1,37.8,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_95.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_96 = new lib._break();
	this.instance_96.setTransform(65,37.9,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_96.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_97 = new lib._break();
	this.instance_97.setTransform(87.8,31.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_97.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_98 = new lib._break();
	this.instance_98.setTransform(80.1,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_98.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_99 = new lib._break();
	this.instance_99.setTransform(64.9,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_99.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_100 = new lib._break();
	this.instance_100.setTransform(49.7,25.4,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_100.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_101 = new lib._break();
	this.instance_101.setTransform(42,31.6,0.203,0.203,0,0,0,35.4,12.8);
	this.instance_101.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance.mask = this.instance_1.mask = this.instance_2.mask = this.instance_3.mask = this.instance_4.mask = this.instance_5.mask = this.instance_6.mask = this.instance_7.mask = this.instance_8.mask = this.instance_9.mask = this.instance_10.mask = this.instance_11.mask = this.instance_12.mask = this.instance_13.mask = this.instance_14.mask = this.instance_15.mask = this.instance_16.mask = this.instance_17.mask = this.instance_18.mask = this.instance_19.mask = this.instance_20.mask = this.instance_21.mask = this.instance_22.mask = this.instance_23.mask = this.instance_24.mask = this.instance_25.mask = this.instance_26.mask = this.instance_27.mask = this.instance_28.mask = this.instance_29.mask = this.instance_30.mask = this.instance_31.mask = this.instance_32.mask = this.instance_33.mask = this.instance_34.mask = this.instance_35.mask = this.instance_36.mask = this.instance_37.mask = this.instance_38.mask = this.instance_39.mask = this.instance_40.mask = this.instance_41.mask = this.instance_42.mask = this.instance_43.mask = this.instance_44.mask = this.instance_45.mask = this.instance_46.mask = this.instance_47.mask = this.instance_48.mask = this.instance_49.mask = this.instance_50.mask = this.instance_51.mask = this.instance_52.mask = this.instance_53.mask = this.instance_54.mask = this.instance_55.mask = this.instance_56.mask = this.instance_57.mask = this.instance_58.mask = this.instance_59.mask = this.instance_60.mask = this.instance_61.mask = this.instance_62.mask = this.instance_63.mask = this.instance_64.mask = this.instance_65.mask = this.instance_66.mask = this.instance_67.mask = this.instance_68.mask = this.instance_69.mask = this.instance_70.mask = this.instance_71.mask = this.instance_72.mask = this.instance_73.mask = this.instance_74.mask = this.instance_75.mask = this.instance_76.mask = this.instance_77.mask = this.instance_78.mask = this.instance_79.mask = this.instance_80.mask = this.instance_81.mask = this.instance_82.mask = this.instance_83.mask = this.instance_84.mask = this.instance_85.mask = this.instance_86.mask = this.instance_87.mask = this.instance_88.mask = this.instance_89.mask = this.instance_90.mask = this.instance_91.mask = this.instance_92.mask = this.instance_93.mask = this.instance_94.mask = this.instance_95.mask = this.instance_96.mask = this.instance_97.mask = this.instance_98.mask = this.instance_99.mask = this.instance_100.mask = this.instance_101.mask = mask;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_101},{t:this.instance_100},{t:this.instance_99},{t:this.instance_98},{t:this.instance_97},{t:this.instance_96},{t:this.instance_95},{t:this.instance_94},{t:this.instance_93},{t:this.instance_92},{t:this.instance_91},{t:this.instance_90},{t:this.instance_89},{t:this.instance_88},{t:this.instance_87},{t:this.instance_86},{t:this.instance_85},{t:this.instance_84},{t:this.instance_83},{t:this.instance_82},{t:this.instance_81},{t:this.instance_80},{t:this.instance_79},{t:this.instance_78},{t:this.instance_77},{t:this.instance_76},{t:this.instance_75},{t:this.instance_74},{t:this.instance_73},{t:this.instance_72},{t:this.instance_71},{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer 1
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F4218").s().p("AlcAaIAAgzIAUAAIKlAAIAAAzg");
	this.shape_2.setTransform(72.5,91.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#B5B838").ss(1,1,1).p("AAAgZIAAAz");
	this.shape_3.setTransform(107.5,91.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#855006").s().p("AlIGCIgUAAIAAsDIK5AAIAAMDg");
	this.shape_4.setTransform(72.5,50.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(37.5,10.4,71,85.1);


(lib.mc_soldierSideview2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Body
	this.instance = new lib.Body("synched",0);
	this.instance.setTransform(517.7,117.7,1,1,0,0,0,50.2,117.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},3).to({scaleX:1,scaleY:1,rotation:-13.3,x:230.6,y:-38.9},7).to({regX:50.1,scaleX:1,scaleY:1,rotation:-30,x:56.4,y:221.2},7).wait(4).to({regX:50.2,regY:117.8,rotation:-70.9,x:22.2,y:307.6},0).wait(1));

	// Right lag2
	this.instance_1 = new lib.Rightlag2("synched",0);
	this.instance_1.setTransform(496.3,233.8,1.05,1.05,4.3,0,0,1.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:1.7,rotation:88.7,x:509.6,y:239.7},3).to({scaleX:1.05,scaleY:1.05,rotation:24.3,x:259.1,y:80.1},7).to({regX:1.8,scaleX:1.05,scaleY:1.05,rotation:-56.3,x:130.7,y:336.5},7).wait(4).to({rotation:-97.2,x:161.5,y:353.8},0).wait(1));

	// Rihgt lag1
	this.instance_2 = new lib.Rihgtlag1("synched",0);
	this.instance_2.setTransform(514.2,170.7,1.05,1.05,6.5,0,0,17.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:0.2,rotation:4.7,x:513.4,y:180.1},3).to({regX:17.5,scaleX:1.05,scaleY:1.05,rotation:-21.8,x:238.1,y:28.8},7).to({regX:17.4,regY:0.1,scaleX:1.05,scaleY:1.05,rotation:-55.3,x:78.4,y:295.7},7).wait(4).to({rotation:-96.2,x:87.5,y:349.5},0).wait(1));

	// Left 2
	this.instance_3 = new lib.Leftlag2("synched",0);
	this.instance_3.setTransform(520.1,235.8,1.05,1.05,-0.7,0,0,1.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:1.7,regY:0.5,rotation:-20,x:552.2,y:244.5},3).to({regX:1.6,scaleX:1.05,scaleY:1.05,rotation:-46.6,x:295.4,y:65},7).to({regX:1.7,scaleX:1.05,scaleY:1.05,rotation:-80,x:158.9,y:296.5},7).wait(4).to({rotation:-95.9,x:161.4,y:319.2},0).wait(1));

	// Left 1
	this.instance_4 = new lib.Leftlag1("synched",0);
	this.instance_4.setTransform(526.1,174.1,1.05,1.05,-3.7,0,0,17.6,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:17.5,regY:0.3,rotation:-40.5,x:517.4,y:188.2},3).to({regX:17.6,scaleX:1.05,scaleY:1.05,rotation:-67.2,x:246.7,y:34.3},7).to({regX:17.5,scaleX:1.05,scaleY:1.05,rotation:-100.5,x:92.7,y:298.4},7).wait(4).to({regX:17.4,regY:0.2,rotation:-116.4,x:98.3,y:339.3},0).wait(1));

	// Body
	this.instance_5 = new lib.Body("synched",0);
	this.instance_5.setTransform(329.2,117.7,1,1,0,0,0,50.2,117.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:0},3).to({scaleX:1,scaleY:1,rotation:-19.8,x:12.9,y:-40.3},7).to({regX:50.1,scaleX:1,scaleY:1,rotation:-45,x:-197.9,y:218.2},7).wait(4).to({rotation:-78.9,x:-263.7,y:295.9},0).wait(1));

	// Right lag2
	this.instance_6 = new lib.Rightlag2("synched",0);
	this.instance_6.setTransform(307.8,233.8,1.05,1.05,4.3,0,0,1.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:1.7,rotation:88.7,x:321.1,y:239.7},3).to({regX:1.8,regY:0.5,scaleX:1.05,scaleY:1.05,rotation:17.5,x:51.8,y:77.7},7).to({regY:0.4,scaleX:1.05,scaleY:1.05,rotation:-71.3,x:-100.3,y:331.1},7).wait(4).to({regX:1.7,rotation:-102.1,x:-95.9,y:346.7},0).wait(1));

	// Rihgt lag1
	this.instance_7 = new lib.Rihgtlag1("synched",0);
	this.instance_7.setTransform(325.7,170.7,1.05,1.05,6.5,0,0,17.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:0.2,rotation:4.7,x:324.9,y:180.1},3).to({scaleX:1.05,scaleY:1.05,rotation:-20.8,x:28.7,y:18.1},7).to({regX:17.6,scaleX:1.05,scaleY:1.05,rotation:-52.8,x:-157,y:271.6},7).wait(4).to({regY:0.1,rotation:-83.5,x:-175.2,y:324.4},0).wait(1));

	// Left 2
	this.instance_8 = new lib.Leftlag2("synched",0);
	this.instance_8.setTransform(331.6,235.8,1.05,1.05,-0.7,0,0,1.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:1.7,regY:0.5,rotation:-20,x:363.7,y:244.5},3).to({scaleX:1.05,scaleY:1.05,rotation:-39.9,x:93.9,y:63.7},7).to({regY:0.6,scaleX:1.05,scaleY:1.05,rotation:-65,x:-58.6,y:293.9},7).wait(4).to({x:-117.1,y:311.2},0).wait(1));

	// Left 1
	this.instance_9 = new lib.Leftlag1("synched",0);
	this.instance_9.setTransform(337.6,174.1,1.05,1.05,-3.7,0,0,17.6,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:17.5,regY:0.3,rotation:-40.5,x:328.9,y:188.2},3).to({regX:17.4,regY:0.2,scaleX:1.05,scaleY:1.05,rotation:-60.4,x:46,y:25.7},7).to({regX:17.6,scaleX:1.05,scaleY:1.05,rotation:-85.5,x:-123.2,y:278.5},7).wait(4).to({x:-181.6,y:295.8},0).wait(1));

	// Body
	this.instance_10 = new lib.Body("synched",0);
	this.instance_10.setTransform(140.7,117.7,1,1,0,0,0,50.2,117.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({startPosition:0},3).to({regX:50.1,scaleX:1,scaleY:1,rotation:12.8,x:-152.4,y:-41.6},7).to({regY:117.8,scaleX:1,scaleY:1,rotation:29.2,x:-334.2,y:215.3},7).wait(4).to({regY:117.7,rotation:74.9,x:-304.1,y:269.2},0).wait(1));

	// Wood
	this.instance_11 = new lib.wood("synched",0);
	this.instance_11.setTransform(535.9,135.5,1,1,0,0,0,535.9,87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({startPosition:0},3).to({x:248.7,y:-19.8},7).to({x:74.2,y:242},7).wait(4).to({startPosition:0},0).wait(1));

	// Right lag2
	this.instance_12 = new lib.Rightlag2("synched",0);
	this.instance_12.setTransform(119.3,233.8,1.05,1.05,4.3,0,0,1.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:1.7,rotation:88.7,x:132.6,y:239.7},3).to({x:-173.1,y:83.6},7).to({x:-370.8,y:344.4},7).wait(4).to({x:-395.8,y:351.7},0).wait(1));

	// Rihgt lag1
	this.instance_13 = new lib.Rihgtlag1("synched",0);
	this.instance_13.setTransform(137.2,170.7,1.05,1.05,6.5,0,0,17.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regY:0.2,rotation:4.7,x:136.4,y:180.1},3).to({regY:0.3,rotation:-0.3,x:-175.1,y:23.4},7).to({regX:17.6,rotation:-7,x:-379.7,y:283.3},7).wait(4).to({x:-404.7,y:290.6},0).wait(1));

	// Left 2
	this.instance_14 = new lib.Leftlag2("synched",0);
	this.instance_14.setTransform(143.1,235.8,1.05,1.05,-0.7,0,0,1.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:1.7,regY:0.5,rotation:-20,x:175.2,y:244.5},3).to({scaleX:1.05,scaleY:1.05,rotation:23.3,x:-161.6,y:74.1},7).to({scaleX:1.05,scaleY:1.05,rotation:77.8,x:-398.2,y:317.2},7).wait(4).to({x:-429.5,y:296},0).wait(1));

	// Left 1
	this.instance_15 = new lib.Leftlag1("synched",0);
	this.instance_15.setTransform(149.1,174.1,1.05,1.05,-3.7,0,0,17.6,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:17.5,regY:0.3,rotation:-40.5,x:140.4,y:188.2},3).to({regX:17.6,rotation:-5.5,x:-163.6,y:25.5},7).to({regX:17.5,regY:0.2,rotation:38,x:-359.5,y:278.3},7).wait(4).to({x:-390.8,y:257},0).wait(1));

	// Left hand
	this.instance_16 = new lib.Lefthand("synched",0);
	this.instance_16.setTransform(175.4,131.8,1,1,0,0,0,18.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({startPosition:0},3).to({x:-111.8,y:-21.4},7).to({x:-286.3,y:243.1},7).wait(4).to({regX:18.9,regY:44.7,rotation:75.2,x:-312.6,y:294.5},0).wait(1));

	// Layer 27
	this.instance_17 = new lib.Lefthand("synched",0);
	this.instance_17.setTransform(363.9,131.8,1,1,0,0,0,18.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({startPosition:0},3).to({regX:18.9,regY:44.7,scaleX:1,scaleY:1,rotation:-20.8,x:46.4,y:-35.3},7).to({regX:18.8,regY:44.9,scaleX:1,scaleY:1,rotation:-47,x:-166,y:212},7).wait(4).to({rotation:-81,x:-240.7,y:272.9},0).wait(1));

	// Layer 26
	this.instance_18 = new lib.Lefthand("synched",0);
	this.instance_18.setTransform(552.4,131.8,1,1,0,0,0,18.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({startPosition:0},3).to({regX:18.9,scaleX:1,scaleY:1,rotation:-13.3,x:265.3,y:-32.4},7).to({scaleX:1,scaleY:1,rotation:-30,x:90.7,y:218.6},7).wait(4).to({regX:18.8,regY:44.7,rotation:-70.9,x:48.4,y:297.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1071.8,320.3);


(lib.mc_soldierSideview = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Body
	this.instance = new lib.Body("synched",0);
	this.instance.setTransform(517.7,117.7,1,1,0,0,0,50.2,117.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({startPosition:0},4).to({y:153.7},5).to({y:117.7},5).to({y:153.7},5).to({y:117.7},5).to({startPosition:0},5).wait(1));

	// Right lag2
	this.instance_1 = new lib.Rightlag2("synched",0);
	this.instance_1.setTransform(496.3,233.8,1.05,1.05,4.3,0,0,1.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({regX:1.7,rotation:88.7,x:509.6,y:239.7},4).to({regY:0.5,rotation:103.7,x:552.4,y:295.1},5).to({rotation:-22.3,x:551.1,y:246.3},5).to({regX:1.8,regY:0.4,rotation:23.2,x:496,y:259.9},5).to({regX:1.7,rotation:88.7,x:509.6,y:239.7},5).to({regX:1.8,rotation:4.3,x:496.3,y:233.8},5).wait(1));

	// Rihgt lag1
	this.instance_2 = new lib.Rihgtlag1("synched",0);
	this.instance_2.setTransform(514.2,170.7,1.05,1.05,6.5,0,0,17.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({regY:0.2,rotation:4.7,x:513.4,y:180.1},4).to({regX:17.5,rotation:-25.3,x:517.6,y:238.2},5).to({regY:0.3,rotation:-38.5,x:516.8,y:185.7},5).to({regX:17.4,regY:0.2,rotation:25.5,x:533.4,y:206.1},5).to({rotation:4.7,x:513.4,y:180.1},5).to({regY:0.1,rotation:6.5,x:514.2,y:170.7},5).wait(1));

	// Left 2
	this.instance_3 = new lib.Leftlag2("synched",0);
	this.instance_3.setTransform(520.1,235.8,1.05,1.05,-0.7,0,0,1.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:1.7,regY:0.5,rotation:-20,x:552.2,y:244.5},4).to({regX:1.6,rotation:24.2,x:497.1,y:268.7},5).to({rotation:87.6,x:508.8,y:238.6},5).to({regX:1.7,rotation:103.6,x:552.4,y:286.2},5).to({rotation:-20,x:552.2,y:244.5},5).to({regX:1.6,regY:0.4,rotation:-0.7,x:520.1,y:235.8},5).wait(1));

	// Left 1
	this.instance_4 = new lib.Leftlag1("synched",0);
	this.instance_4.setTransform(526.1,174.1,1.05,1.05,-3.7,0,0,17.6,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({regX:17.5,regY:0.3,rotation:-40.5,x:517.4,y:188.2},4).to({regY:0.2,rotation:21.2,x:528.4,y:215.2},5).to({rotation:6.8,x:515.2,y:179.8},5).to({regX:17.4,rotation:-24.5,x:518.5,y:230.2},5).to({regX:17.5,regY:0.3,rotation:-40.5,x:517.4,y:188.2},5).to({regX:17.6,regY:0.2,rotation:-3.7,x:526.1,y:174.1},5).wait(1));

	// Body
	this.instance_5 = new lib.Body("synched",0);
	this.instance_5.setTransform(329.2,117.7,1,1,0,0,0,50.2,117.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({startPosition:0},4).to({y:153.7},5).to({y:117.7},5).to({y:153.7},5).to({y:117.7},5).to({startPosition:0},5).wait(1));

	// Right lag2
	this.instance_6 = new lib.Rightlag2("synched",0);
	this.instance_6.setTransform(307.8,233.8,1.05,1.05,4.3,0,0,1.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:1.7,rotation:88.7,x:321.1,y:239.7},4).to({regY:0.5,rotation:103.7,x:363.9,y:295.1},5).to({rotation:-22.3,x:362.6,y:246.3},5).to({regX:1.8,regY:0.4,rotation:23.2,x:307.5,y:259.9},5).to({regX:1.7,rotation:88.7,x:321.1,y:239.7},5).to({regX:1.8,rotation:4.3,x:307.8,y:233.8},5).wait(1));

	// Rihgt lag1
	this.instance_7 = new lib.Rihgtlag1("synched",0);
	this.instance_7.setTransform(325.7,170.7,1.05,1.05,6.5,0,0,17.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regY:0.2,rotation:4.7,x:324.9,y:180.1},4).to({regX:17.5,rotation:-25.3,x:329.1,y:238.2},5).to({regY:0.3,rotation:-38.5,x:328.3,y:185.7},5).to({regX:17.4,regY:0.2,rotation:25.5,x:344.9,y:206.1},5).to({rotation:4.7,x:324.9,y:180.1},5).to({regY:0.1,rotation:6.5,x:325.7,y:170.7},5).wait(1));

	// Left 2
	this.instance_8 = new lib.Leftlag2("synched",0);
	this.instance_8.setTransform(331.6,235.8,1.05,1.05,-0.7,0,0,1.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:1.7,regY:0.5,rotation:-20,x:363.7,y:244.5},4).to({regX:1.6,rotation:24.2,x:308.6,y:268.7},5).to({rotation:87.6,x:320.3,y:238.6},5).to({regX:1.7,rotation:103.6,x:363.9,y:286.2},5).to({rotation:-20,x:363.7,y:244.5},5).to({regX:1.6,regY:0.4,rotation:-0.7,x:331.6,y:235.8},5).wait(1));

	// Left 1
	this.instance_9 = new lib.Leftlag1("synched",0);
	this.instance_9.setTransform(337.6,174.1,1.05,1.05,-3.7,0,0,17.6,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({regX:17.5,regY:0.3,rotation:-40.5,x:328.9,y:188.2},4).to({regY:0.2,rotation:21.2,x:339.9,y:215.2},5).to({rotation:6.8,x:326.7,y:179.8},5).to({regX:17.4,rotation:-24.5,x:330,y:230.2},5).to({regX:17.5,regY:0.3,rotation:-40.5,x:328.9,y:188.2},5).to({regX:17.6,regY:0.2,rotation:-3.7,x:337.6,y:174.1},5).wait(1));

	// Body
	this.instance_10 = new lib.Body("synched",0);
	this.instance_10.setTransform(140.7,117.7,1,1,0,0,0,50.2,117.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({startPosition:0},4).to({y:153.7},5).to({y:117.7},5).to({y:153.7},5).to({y:117.7},5).to({startPosition:0},5).wait(1));

	// Wood
	this.instance_11 = new lib.wood("synched",0);
	this.instance_11.setTransform(535.9,135.5,1,1,0,0,0,535.9,87.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).to({startPosition:0},4).to({y:171.1},5).to({y:135.5},5).to({y:171.1},5).to({y:135.5},5).to({startPosition:0},5).wait(1));

	// Right lag2
	this.instance_12 = new lib.Rightlag2("synched",0);
	this.instance_12.setTransform(119.3,233.8,1.05,1.05,4.3,0,0,1.8,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).to({regX:1.7,rotation:88.7,x:132.6,y:239.7},4).to({regY:0.5,rotation:103.7,x:175.4,y:295.1},5).to({rotation:-22.3,x:174.1,y:246.3},5).to({regX:1.8,regY:0.4,rotation:23.2,x:119,y:259.9},5).to({regX:1.7,rotation:88.7,x:132.6,y:239.7},5).to({regX:1.8,rotation:4.3,x:119.3,y:233.8},5).wait(1));

	// Rihgt lag1
	this.instance_13 = new lib.Rihgtlag1("synched",0);
	this.instance_13.setTransform(137.2,170.7,1.05,1.05,6.5,0,0,17.4,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).to({regY:0.2,rotation:4.7,x:136.4,y:180.1},4).to({regX:17.5,rotation:-25.3,x:140.6,y:238.2},5).to({regY:0.3,rotation:-38.5,x:139.8,y:185.7},5).to({regX:17.4,regY:0.2,rotation:25.5,x:156.4,y:206.1},5).to({rotation:4.7,x:136.4,y:180.1},5).to({regY:0.1,rotation:6.5,x:137.2,y:170.7},5).wait(1));

	// Left 2
	this.instance_14 = new lib.Leftlag2("synched",0);
	this.instance_14.setTransform(143.1,235.8,1.05,1.05,-0.7,0,0,1.6,0.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).to({regX:1.7,regY:0.5,rotation:-20,x:175.2,y:244.5},4).to({regX:1.6,rotation:24.2,x:120.1,y:268.7},5).to({rotation:87.6,x:131.8,y:238.6},5).to({regX:1.7,rotation:103.6,x:175.4,y:286.2},5).to({rotation:-20,x:175.2,y:244.5},5).to({regX:1.6,regY:0.4,rotation:-0.7,x:143.1,y:235.8},5).wait(1));

	// Left 1
	this.instance_15 = new lib.Leftlag1("synched",0);
	this.instance_15.setTransform(149.1,174.1,1.05,1.05,-3.7,0,0,17.6,0.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).to({regX:17.5,regY:0.3,rotation:-40.5,x:140.4,y:188.2},4).to({regY:0.2,rotation:21.2,x:151.4,y:215.2},5).to({rotation:6.8,x:138.2,y:179.8},5).to({regX:17.4,rotation:-24.5,x:141.5,y:230.2},5).to({regX:17.5,regY:0.3,rotation:-40.5,x:140.4,y:188.2},5).to({regX:17.6,regY:0.2,rotation:-3.7,x:149.1,y:174.1},5).wait(1));

	// Left hand
	this.instance_16 = new lib.Lefthand("synched",0);
	this.instance_16.setTransform(175.4,131.8,1,1,0,0,0,18.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).to({startPosition:0},4).to({y:167.4},5).to({y:131.8},5).to({y:167.4},5).to({y:131.8},5).to({startPosition:0},5).wait(1));

	// Layer 27
	this.instance_17 = new lib.Lefthand("synched",0);
	this.instance_17.setTransform(363.9,131.8,1,1,0,0,0,18.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_17).to({startPosition:0},4).to({y:167.4},5).to({y:131.8},5).to({y:167.4},5).to({y:131.8},5).to({startPosition:0},5).wait(1));

	// Layer 26
	this.instance_18 = new lib.Lefthand("synched",0);
	this.instance_18.setTransform(552.4,131.8,1,1,0,0,0,18.8,44.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).to({startPosition:0},4).to({y:167.4},5).to({y:131.8},5).to({y:167.4},5).to({y:131.8},5).to({startPosition:0},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,1071.8,320.3);


(lib.wall3dsfs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.078)").s().p("Ag/FRIAAlJIAAkHIAAibIB4AAIAHMzIh/ABg");
	this.shape.setTransform(14.4,48.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag4GHIgCAAIAAAAIgBgDIAAAAIAAg7IABgCIAAAAIACgBIAAAAIB0AAIAABBgAg4E2IgCgBIAAAAIgBgDIAAAAIAAg7IABgCIAAAAIACgBIAAAAIB0AAIAABCgAg4DlIgCgBIAAAAIgBgCIAAAAIAAg8IABgBIAAAAIACgBIAAAAIB0AAIAABBgAg4CVIgCgBIAAAAIgBgCIAAAAIAAg7IABgCIAAAAIACgBIAAAAIB0AAIAABBgAg4BFIgCgBIAAAAIgBgCIAAAAIAAg8IABgCIAAAAIACAAIAAAAIB0AAIAABBgAg4gKIgCgBIAAAAIgBgCIAAAAIAAg7IABgCIAAAAIACgBIAAAAIB0AAIAABBgAg4hZIgCgBIAAAAIgBgDIAAAAIAAg6IABgDIAAAAIACgBIAAAAIB0AAIAABCgAg4ilIgCgBIAAAAIgBgCIAAAAIAAg8IABgBIAAAAIACgBIAAAAIB0AAIAABBgAg4j2IgCAAIAAAAIgBgDIAAAAIAAg7IABgCIAAAAIACgBIAAAAIB0AAIAABBgAg4lFIgCgBIAAAAIgBgCIAAAAIAAg8IABgCIAAAAIACAAIAAAAIB0AAIAABBg");
	mask.setTransform(14,48.2);

	// Layer 1
	this.instance = new lib.gate_3ss();
	this.instance.setTransform(17.4,84,0.265,0.265,0,0,0,35.3,12.1);
	this.instance.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_1 = new lib.gate_3ss();
	this.instance_1.setTransform(17.4,76,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_1.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_2 = new lib.gate_3ss();
	this.instance_2.setTransform(17.4,67.8,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_2.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_3 = new lib.gate_3ss();
	this.instance_3.setTransform(17.4,59.8,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_3.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_4 = new lib.gate_3ss();
	this.instance_4.setTransform(17.4,51.8,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_4.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_5 = new lib.gate_3ss();
	this.instance_5.setTransform(17.4,43.8,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_5.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_6 = new lib.gate_3ss();
	this.instance_6.setTransform(17.4,36.2,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_6.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_7 = new lib.gate_3ss();
	this.instance_7.setTransform(17.4,28.2,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_7.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_8 = new lib.gate_3ss();
	this.instance_8.setTransform(17.4,20.2,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_8.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_9 = new lib.gate_3ss();
	this.instance_9.setTransform(17.4,12.2,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_9.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#76857B").s().p("Ag2GXIAAhIIAAlFIAAgBIAAkBIgCibIgRAAICTgDIAAMtg");
	this.shape_1.setTransform(13.5,48.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6,7,20,86.8);


(lib.wall3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.078)").s().p("AgbF4IAAlKIAAkGIAAigIhHAGIAAhMIC+gCIAHOAIh+ABg");
	this.shape.setTransform(10.8,45);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgUGwIgCgBIAAAAIgBgCIAAAAIAAg7IABgCIAAAAIACgBIAAAAIBzAAIAABBgAgUFeIgCgBIAAAAIgBgCIAAAAIAAg7IABgCIAAAAIACgBIAAAAIBzAAIAABBgAgUEOIgCgBIAAAAIgBgDIAAAAIAAg7IABgCIAAAAIACgBIAAAAIBzAAIAABCgAgUC+IgCgBIAAAAIgBgCIAAAAIAAg7IABgCIAAAAIACgBIAAAAIBzAAIAABBgAgUBuIgCgBIAAAAIgBgDIAAAAIAAg7IABgCIAAAAIACgBIAAAAIBzAAIAABCgAgUAdIgCgBIAAAAIgBgCIAAAAIAAg5IABgCIAAAAIACgBIAAAAIBzAAIAAA/gAgUgwIgCgBIAAAAIgBgDIAAAAIAAg7IABgCIAAAAIACgBIAAAAIBzAAIAABCgAgUh8IgCgBIAAAAIgBgDIAAAAIAAg7IABgCIAAAAIACgBIAAAAIBzAAIAABCgAgUjNIgCgBIAAAAIgBgCIAAAAIAAg7IABgCIAAAAIACgBIAAAAIBzAAIAABBgAgUkcIgCgBIAAAAIgBgDIAAAAIAAg7IABgCIAAAAIACgBIAAAAIBzAAIAABCgAhbluIgCgBIAAAAIgBgCIAAAAIAAg7IABgCIAAAAIACgBIAAAAICzAAIACABIAAAAIABACIAAAAIAAA7IgBACIAAAAIgCABIAAAAg");
	mask.setTransform(10.5,44.1);

	// Layer 1
	this.instance = new lib.gate_3();
	this.instance.setTransform(17.4,84,0.265,0.265,0,0,0,35.3,12.1);
	this.instance.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_1 = new lib.gate_3();
	this.instance_1.setTransform(17.4,76,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_1.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_2 = new lib.gate_3();
	this.instance_2.setTransform(17.4,67.8,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_2.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_3 = new lib.gate_3();
	this.instance_3.setTransform(17.4,59.8,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_3.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_4 = new lib.gate_3();
	this.instance_4.setTransform(17.4,51.8,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_4.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_5 = new lib.gate_3();
	this.instance_5.setTransform(17.4,43.8,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_5.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_6 = new lib.gate_3();
	this.instance_6.setTransform(17.4,36.2,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_6.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_7 = new lib.gate_3();
	this.instance_7.setTransform(17.4,28.2,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_7.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_8 = new lib.gate_3();
	this.instance_8.setTransform(17.4,20.2,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_8.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_9 = new lib.gate_3();
	this.instance_9.setTransform(17.4,12.2,0.265,0.265,0,0,0,35.3,12.1);
	this.instance_9.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.instance_10 = new lib.gate_2();
	this.instance_10.setTransform(10.8,4.2,0.265,0.265,0,0,0,35.3,12.5);
	this.instance_10.shadow = new cjs.Shadow("rgba(121,58,17,0.349)",0,0,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#7E4F0C","#B47926","#B88640","#D0A15F"],[0,0.42,0.741,1],13.2,0.3,-13.1,-0.3).s().p("AhMAWIAAgrIAZAAICAAAIAAArg");
	this.shape_1.setTransform(13.2,91.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#76857B").s().p("AgaG9IAAhIIAAlFIAAgBIAAkBIgCibIhGgBIgChOIDJAAIAAN5g");
	this.shape_2.setTransform(10.7,44.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.6,-1.1,26.6,95);


(lib.ClipGroupcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(68.6,198.7,1.512,1.512,0,0,0,8,9);

	this.instance_1 = new lib.ClipGroup_1copy4();
	this.instance_1.setTransform(49,180.3,1.512,1.512,0,0,0,21.6,21.6);

	this.instance_2 = new lib.ClipGroup_2copy3();
	this.instance_2.setTransform(189.7,134.6,1.512,1.512,0,0,0,142.1,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-25.1,-92.2,429.4,453.6);


(lib.Door = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// gd46
	this.instance = new lib.gd46();
	this.instance.setTransform(6.7,58.6,1,1,0,0,0,6.7,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:6.8,rotation:54.7,x:-16.2,y:60.3},0).wait(1).to({regX:6.7,rotation:-10.5,x:-4.2,y:102.3},0).wait(1));

	// dhfg76
	this.instance_1 = new lib.dhfg76();
	this.instance_1.setTransform(6.7,27.6,1,1,0,0,0,6.7,1.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({rotation:-66.4,x:23.3,y:64.3},0).wait(1).to({rotation:-191.8,x:29.6,y:86.2},0).wait(1));

	// mc as4
	this.instance_2 = new lib.mcas4();
	this.instance_2.setTransform(6.7,73.2,1,1,0,0,0,6.7,14.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({rotation:100,x:-1.4,y:80.1},0).wait(1).to({rotation:49.5,x:-5.9,y:88.8},0).wait(1));

	// mc ws6
	this.instance_3 = new lib.mcws6();
	this.instance_3.setTransform(6.8,43.2,1,1,0,0,0,6.7,15.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({rotation:51.4,x:26.9,y:42.6},0).wait(1).to({rotation:90,x:19.8,y:95.6},0).wait(1));

	// mc 6fdd
	this.instance_4 = new lib.mc6fdd();
	this.instance_4.setTransform(6.7,13.8,1,1,0,0,0,6.7,13.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({rotation:-37,x:-11.9,y:36.3},0).wait(1).to({regX:6.8,regY:13.7,rotation:121.5,x:49.2,y:89.5},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,13.5,87.6);


(lib.Dhakkan = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroup_6copy();
	this.instance.setTransform(6.8,11.9,0.433,0.433,0.8,0,0,0.8,7.3);

	this.instance_1 = new lib.ClipGroup_7copy();
	this.instance_1.setTransform(56.1,13.5,0.433,0.433,0.8,0,0,129.6,30.7);

	this.instance_2 = new lib.ClipGroup_13copy();
	this.instance_2.setTransform(12.5,11.5,0.433,0.433,0.8,0,0,4.7,26.6);

	this.instance_3 = new lib.ClipGroup_14copy();
	this.instance_3.setTransform(56.1,13.5,0.433,0.433,0.8,0,0,129.6,30.7);

	this.instance_4 = new lib.ClipGroup_16copy();
	this.instance_4.setTransform(12.7,11.5,0.433,0.433,0.8,0,0,15.7,25.9);

	this.instance_5 = new lib.ClipGroup_17copy();
	this.instance_5.setTransform(4.2,11.9,0.433,0.433,0.8,0,0,10,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.6,112.8,28.5);


(lib.castle1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#333333").s().p("AgnEVIAAopIBQAAIAAIpg");
	this.shape.setTransform(48.9,329.8);

	this.instance = new lib.wall3();
	this.instance.setTransform(141.6,348.3,0.969,0.689,0,0,0,103.7,76.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance_1 = new lib.part_2826();
	this.instance_1.setTransform(59.3,142.3,0.847,0.847,0,0,0,55,46.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5F4218").s().p("AkmAaIAAgzIJNAAIAAAzg");
	this.shape_1.setTransform(74.3,264.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F4218").s().p("AknAaIAAgzIJPAAIAAAzg");
	this.shape_2.setTransform(74.1,196.5);

	this.instance_2 = new lib.part_2dh236();
	this.instance_2.setTransform(59.2,204.6,0.847,0.847,0,0,0,55,46.8);

	this.instance_3 = new lib.part_314();
	this.instance_3.setTransform(59.3,255,0.847,0.847,0,0,0,55,46.8);

	this.instance_4 = new lib.part_1();
	this.instance_4.setTransform(59.3,319.7,0.847,0.847,0,0,0,55,46.8);

	this.instance_5 = new lib.top1();
	this.instance_5.setTransform(73.1,89,0.847,0.847,0,0,0,72.7,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.shape_2},{t:this.shape_1},{t:this.instance_1}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(20.8,63.9,123.4,299);


(lib.Canonwithfire = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Dhakkan("synched",0);
	this.instance.setTransform(94.8,13.7,1,1,95.4,0,0,14.5,1.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({startPosition:0},0).to({regX:14.4,rotation:0.9},7).wait(10));

	// Layer 1
	this.instance_1 = new lib.ClipGroup();
	this.instance_1.setTransform(127.1,29.9,0.882,0.882,0.8,0,0,9.5,9.6);

	this.instance_2 = new lib.ClipGroup_1();
	this.instance_2.setTransform(138.8,26,0.433,0.433,0.8,0,0,129.6,30.7);

	this.instance_3 = new lib.ClipGroup_2();
	this.instance_3.setTransform(136.8,31.2,0.433,0.433,0.8,0,0,30.2,10.8);

	this.instance_4 = new lib.ClipGroup_8();
	this.instance_4.setTransform(111.7,23.8,0.433,0.433,0.8,0,0,5.1,26.6);

	this.instance_5 = new lib.ClipGroup_9();
	this.instance_5.setTransform(155.5,22.9,0.433,0.433,0.8,0,0,4.6,23.1);

	this.instance_6 = new lib.ClipGroup_10();
	this.instance_6.setTransform(177.8,22.9,0.433,0.433,0.8,0,0,4.5,22.4);

	this.instance_7 = new lib.ClipGroup_11();
	this.instance_7.setTransform(193.6,22.6,0.433,0.433,0.8,0,0,5,21.7);

	this.instance_8 = new lib.ClipGroup_12();
	this.instance_8.setTransform(138.8,26,0.433,0.433,0.8,0,0,129.6,30.7);

	this.instance_9 = new lib.ClipGroup_13();
	this.instance_9.setTransform(95.2,24,0.433,0.433,0.8,0,0,4.7,26.6);

	this.instance_10 = new lib.ClipGroup_14();
	this.instance_10.setTransform(138.8,26,0.433,0.433,0.8,0,0,129.6,30.7);

	this.instance_11 = new lib.ClipGroup_15();
	this.instance_11.setTransform(144.6,24.4,0.433,0.433,0.8,0,0,116.5,31.6);

	this.instance_12 = new lib.ClipGroup_16();
	this.instance_12.setTransform(95.5,24,0.433,0.433,0.8,0,0,15.7,25.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#926A65").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAPAAAMAMQAMALAAAPQAAAQgMALQgMAMgPAAQgPAAgLgMg");
	this.shape.setTransform(154.5,82.4,0.688,0.688);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#483F3D").s().p("AiTCUQg+g9AAhXQAAhVA+g+QA+g+BVAAQBXAAA+A+QA9A+AABVQAABXg9A9Qg+A+hXAAQhVAAg+g+gAh0h1QgyAxABBEQgBBFAyAxQAxAxBDAAQBFAAAwgxQAygxAAhFQAAhEgygxQgwgxhFAAQhDAAgxAxg");
	this.shape_1.setTransform(154.5,82.4,0.688,0.688);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5F524F").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape_2.setTransform(154.5,82.4,0.688,0.688);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#926A65").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAPAAAMAMQAMALAAAPQAAAQgMALQgMAMgPAAQgPAAgLgMg");
	this.shape_3.setTransform(103.4,82.4,0.688,0.688);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#483F3D").s().p("AiTCUQg+g9AAhXQAAhVA+g+QA9g+BWAAQBXAAA9A+QA+A+AABVQAABXg+A9Qg9A+hXAAQhWAAg9g+gAh1h1QgwAxgBBEQABBFAwAxQAxAxBEAAQBFAAAxgxQAwgxAAhFQAAhEgwgxQgxgxhFAAQhEAAgxAxg");
	this.shape_4.setTransform(103.4,82.4,0.688,0.688);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5F524F").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape_5.setTransform(103.4,82.4,0.688,0.688);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#926A65").s().p("AgMANQgHgFABgIQgBgGAHgHQAGgFAGgBQAIABAGAFQAFAHAAAGQAAAIgFAFQgGAHgIAAQgGAAgGgHg");
	this.shape_6.setTransform(61,82.3,0.688,0.688,0,0,180);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#926A65").s().p("AgMANQgHgFABgIQgBgGAHgHQAGgFAGgBQAIABAGAFQAFAHAAAGQAAAIgFAFQgGAHgIAAQgGAAgGgHg");
	this.shape_7.setTransform(68.2,82.3,0.688,0.688,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#926A65").s().p("AgNANQgGgFAAgIQAAgGAGgHQAGgFAHgBQAIABAGAFQAGAHAAAGQAAAHgGAGQgGAHgIAAQgHAAgGgHg");
	this.shape_8.setTransform(75.4,82.3,0.688,0.688,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#926A65").s().p("AgNANQgGgFAAgIQAAgGAGgHQAGgFAHgBQAIABAGAFQAGAGAAAHQAAAIgGAFQgGAHgIAAQgHAAgGgHg");
	this.shape_9.setTransform(82.6,82.3,0.688,0.688,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#926A65").s().p("AgNANQgGgFAAgIQAAgGAGgHQAGgFAHgBQAIABAGAFQAGAGAAAHQAAAIgGAFQgGAHgIAAQgHAAgGgHg");
	this.shape_10.setTransform(89.8,82.3,0.688,0.688,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#926A65").s().p("AgNANQgGgGAAgHQAAgGAGgHQAGgFAHgBQAIABAGAFQAGAHAAAGQAAAIgGAFQgGAHgIAAQgHAAgGgHg");
	this.shape_11.setTransform(125.8,82.3,0.688,0.688,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#926A65").s().p("AgNANQgFgFgBgIQABgGAFgHQAHgFAGgBQAIABAFAFQAHAHAAAGQAAAIgHAFQgFAHgIAAQgGAAgHgHg");
	this.shape_12.setTransform(132.9,82.3,0.688,0.688,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#926A65").s().p("AgNANQgFgFgBgIQABgGAFgHQAGgFAHgBQAIABAFAFQAHAHAAAGQAAAIgHAFQgFAHgIAAQgHAAgGgHg");
	this.shape_13.setTransform(140.1,82.3,0.688,0.688,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#926A65").s().p("AgMANQgHgFAAgIQAAgGAHgHQAFgFAHgBQAIABAGAFQAFAHABAGQgBAIgFAFQgGAHgIAAQgHAAgFgHg");
	this.shape_14.setTransform(176.1,82.3,0.688,0.688,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#432C29").s().p("AtoAoQgKAAgIgIQgIgIAAgKIAAg0IcEAAIAAA0QAAAKgHAIQgIAIgLAAg");
	this.shape_15.setTransform(118.6,85.1,0.688,0.688,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4C3431").s().p("AuCAoIAAg1QAAgKAIgIQAIgHAKAAIbQAAQALAAAIAHQAHAIAAAKIAAA1g");
	this.shape_16.setTransform(118.6,79.6,0.688,0.688,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#111111").s().p("AjXF3QgigUgKgmQgLgmAUgiIFQpIQAUgiAmgLQAmgKAiAUQAiATAKAmQAKAngTAiIlQJIQgUAigmALQgNADgMAAQgYAAgXgNg");
	this.shape_17.setTransform(116.3,58.7,0.688,0.688);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("ABQDVQgVgFgLgTIi6lEQgLgSAGgWQAFgVATgLQATgLAVAGQAVAGALATIC7FDQAKATgFAVQgGAVgTALQgNAHgNAAQgHAAgHgCg");
	this.shape_18.setTransform(140,58.7,1.24,1.24);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("Ag0EoQgXgXABgfIAAnjQgBgfAXgWQAWgXAeAAQAfAAAWAXQAXAWAAAfIAAHjQAAAfgXAXQgWAWgfAAQgeAAgWgWg");
	this.shape_19.setTransform(128,59,0.688,0.688);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#4E3D3B").s().p("AkPC9IAAl5IIfAAIAAF5g");
	this.shape_20.setTransform(127.9,72.1,0.688,0.688);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]}).wait(55));

	// Soldier left hand 2
	this.instance_13 = new lib.Soldierlefthand2();
	this.instance_13.setTransform(26.1,28.5,1,1,0,0,0,17.1,4.7);

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(4).to({skewY:180,x:44.3},0).to({x:46.7,y:26.5},3).to({x:48.3,y:28.5},3).to({x:50.7,y:26.5},3).to({x:53.9,y:28.5},3).to({x:55.9,y:26.5},3).to({x:59.5,y:28.5},3).to({x:61.5,y:26.5},3).to({x:67.9,y:28.5},3).wait(4).to({skewX:56.4,skewY:236.4,x:58.5,y:31.6},6).wait(17));

	// Soldier left hand 1
	this.instance_14 = new lib.Soldierlefthand1();
	this.instance_14.setTransform(35.4,17.8,1,1,0,0,0,11.2,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(4).to({skewY:180,x:35.1},0).to({x:37.5,y:15.8},3).to({x:39.1,y:17.8},3).to({x:41.5,y:15.8},3).to({x:44.7,y:17.8},3).to({x:46.7,y:15.8},3).to({x:50.3,y:17.8},3).to({x:52.3,y:15.8},3).to({x:58.7,y:17.8},3).wait(4).to({regX:11.3,skewX:56.4,skewY:236.4,x:62.2,y:17.9},6).wait(17));

	// Sodier with body
	this.instance_15 = new lib.Sodierwithbody();
	this.instance_15.setTransform(32,34.9,1,1,0,0,0,10.1,32.9);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(4).to({skewY:180,x:38.4},0).to({x:40.8,y:32.9},3).to({x:42.4,y:34.9},3).to({x:44.8,y:32.9},3).to({x:48,y:34.9},3).to({x:50,y:32.9},3).to({x:53.6,y:34.9},3).to({x:55.6,y:32.9},3).to({x:62,y:34.9},3).wait(27));

	// <Clip Group> copy 3
	this.instance_16 = new lib.ClipGroupcopy3();
	this.instance_16.setTransform(6.8,559.6,0.288,0.288,0,0,180,47.4,185.8);
	this.instance_16._off = true;

	this.instance_17 = new lib.ClipGroupcopy3();
	this.instance_17.setTransform(6.8,27.6,0.288,0.288,0,0,180,47.4,185.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_17},{t:this.instance_16}]},1).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_16}]},3).to({state:[{t:this.instance_16}]},4).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(1).to({_off:false},0).wait(3).to({skewY:0,x:63.6,y:27.6},0).to({x:66,y:25.6},3).to({x:67.6,y:27.6},3).to({x:70,y:25.6},3).to({x:73.2,y:27.6},3).to({x:75.2,y:25.6},3).to({x:78.8,y:27.6},3).to({x:80.8,y:25.6},3).to({x:87.2,y:27.6},3).to({x:104.4,y:26.4},4).wait(23));

	// Soldier right hand 2
	this.instance_18 = new lib.Soldierrighthand2();
	this.instance_18.setTransform(24.5,23,1,1,0,0,0,18.1,1.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(4).to({skewY:180,x:45.9},0).to({x:48.3,y:21},3).to({x:49.9,y:23},3).to({x:52.3,y:21},3).to({x:55.5,y:23},3).to({x:57.5,y:21},3).to({x:61.1,y:23},3).to({x:63.1,y:21},3).to({x:69.5,y:23},3).wait(4).to({regX:18,skewX:-41.5,skewY:138.5,x:71.3,y:19.1},6).to({regX:18.1,skewX:0,skewY:180,x:69.5,y:23},7).to({skewX:56.7,skewY:236.7,x:60,y:28.2},6).wait(4));

	// Soldier Right hand 1
	this.instance_19 = new lib.SoldierRighthand1();
	this.instance_19.setTransform(33,15.2,1,1,0,0,0,11.3,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(4).to({skewY:180,x:37.5},0).to({x:39.9,y:13.2},3).to({x:41.5,y:15.2},3).to({x:43.9,y:13.2},3).to({x:47.1,y:15.2},3).to({x:49.1,y:13.2},3).to({x:52.7,y:15.2},3).to({x:54.7,y:13.2},3).to({x:61.1,y:15.2},3).wait(4).to({skewX:-41.5,skewY:138.5,x:59.8,y:19},6).to({skewX:0,skewY:180,x:61.1,y:15.2},7).to({skewX:56.7,skewY:236.7,x:61.9,y:16.9},6).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(6.4,-1.7,189.3,98.6);


(lib.Cannon_Iron = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.ClipGroupcopy2();
	this.instance.setTransform(0.6,-7.5,0.354,0.354,0,-0.8,179.2,9.6,9.8);

	this.instance_1 = new lib.ClipGroup_1copy2();
	this.instance_1.setTransform(-3.9,-12.3,0.202,0.202,0,-0.8,179.2,129.7,30.9);

	this.instance_2 = new lib.ClipGroup_6copy2();
	this.instance_2.setTransform(15.3,-12.3,0.164,0.164,0,-0.8,179.2,1,7.3);

	this.instance_3 = new lib.ClipGroup_7copy2();
	this.instance_3.setTransform(-3.4,-11.6,0.164,0.164,0,-0.8,179.2,129.5,30.9);

	this.instance_4 = new lib.ClipGroup_8copy2();
	this.instance_4.setTransform(6.9,-12.6,0.164,0.164,0,-0.8,179.2,4.6,25.8);

	this.instance_5 = new lib.ClipGroup_9copy2();
	this.instance_5.setTransform(-9.8,-12.8,0.164,0.164,0,-0.8,179.2,4.9,23.4);

	this.instance_6 = new lib.ClipGroup_10copy2();
	this.instance_6.setTransform(-18.2,-12.8,0.164,0.164,0,-0.8,179.2,4.3,22.4);

	this.instance_7 = new lib.ClipGroup_11copy2();
	this.instance_7.setTransform(-24.3,-13,0.164,0.164,0,-0.8,179.2,4.9,21.6);

	this.instance_8 = new lib.ClipGroup_12copy2();
	this.instance_8.setTransform(-3.4,-11.6,0.164,0.164,0,-0.8,179.2,129.5,30.9);

	this.instance_9 = new lib.ClipGroup_13copy2();
	this.instance_9.setTransform(13.1,-12.5,0.164,0.164,0,-0.8,179.2,4.6,26.4);

	this.instance_10 = new lib.ClipGroup_14copy2();
	this.instance_10.setTransform(-3.4,-11.6,0.164,0.164,0,-0.8,179.2,129.5,30.9);

	this.instance_11 = new lib.ClipGroup_15copy2();
	this.instance_11.setTransform(-5.6,-12.3,0.164,0.164,0,-0.8,179.2,116.4,31.3);

	this.instance_12 = new lib.ClipGroup_16copy2();
	this.instance_12.setTransform(13,-12.5,0.164,0.164,0,-0.8,179.2,15.9,25.7);

	this.instance_13 = new lib.ClipGroup_17copy2();
	this.instance_13.setTransform(16.3,-12.3,0.164,0.164,0,-0.8,179.2,9.6,9.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-30.3,-18.9,52.7,14.9);


(lib.tower_123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.castle1();
	this.instance.setTransform(123.4,-47.3,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 2
	this.instance_1 = new lib.shadow();
	this.instance_1.setTransform(58.5,313,0.926,1,0,0,0,52,5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,16.6,123.4,301.8);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgLDZIAAmxIAXAAIAAGxg");
	this.shape.setTransform(327.8,32.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMDZIAAmxIAZAAIAAGxg");
	this.shape_1.setTransform(401.9,32.2);

	this.instance = new lib.Symbol4();
	this.instance.setTransform(281,33.1,1,1,0,0,0,258.4,25.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.instance_1 = new lib.Symbol3();
	this.instance_1.setTransform(512.1,31.5,1,1,0,0,0,512.1,31.5);
	this.instance_1.shadow = new cjs.Shadow("rgba(0,0,0,1)",0,0,24);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-26,875,119);


(lib.canon2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wall3dsfs();
	this.instance.setTransform(169.9,89.1,0.602,1.429,0,0,0,103.7,76.3);

	this.instance_1 = new lib.wall3dsfs();
	this.instance_1.setTransform(45.1,89.1,0.602,1.429,0,0,0,103.7,76.3);

	this.instance_2 = new lib.wall3dsfs();
	this.instance_2.setTransform(10.1,158,0.602,1.603,90,0,0,103.7,76.3);

	this.instance_3 = new lib.Cannon_Iron("synched",0);
	this.instance_3.setTransform(91.4,43.5,2.169,2.524,0,-88.7,91.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E3B30").s().p("Ag+AQQgcgUgHghIDDAAQgHAhgbAUQgcAWgkAAQgjAAgbgWg");
	this.shape.setTransform(70,46,0.6,0.6,0,0,180);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#926A65").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAPAAAMAMQAMALAAAPQAAAQgMALQgMAMgPAAQgPAAgLgMg");
	this.shape_1.setTransform(92.6,96.5,0.587,0.587);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#483F3D").s().p("AiTCUQg+g9AAhXQAAhVA+g+QA+g+BVAAQBXAAA+A+QA9A+AABVQAABXg9A9Qg+A+hXAAQhVAAg+g+gAh0h1QgyAxABBEQgBBFAyAxQAxAxBDAAQBFAAAwgxQAygxAAhFQAAhEgygxQgwgxhFAAQhDAAgxAxg");
	this.shape_2.setTransform(92.6,96.5,0.587,0.587);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5F524F").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape_3.setTransform(92.6,96.5,0.587,0.587);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#926A65").s().p("AgaAbQgMgLAAgQQAAgPAMgLQALgMAPAAQAPAAAMAMQAMALAAAPQAAAQgMALQgMAMgPAAQgPAAgLgMg");
	this.shape_4.setTransform(49,96.5,0.587,0.587);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#483F3D").s().p("AiTCUQg+g9AAhXQAAhVA+g+QA9g+BWAAQBXAAA9A+QA+A+AABVQAABXg+A9Qg9A+hXAAQhWAAg9g+gAh1h1QgwAxgBBEQABBFAwAxQAxAxBEAAQBFAAAxgxQAwgxAAhFQAAhEgwgxQgxgxhFAAQhEAAgxAxg");
	this.shape_5.setTransform(49,96.5,0.587,0.587);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5F524F").s().p("AiECFQg3g3AAhOQAAhNA3g3QA3g3BNAAQBOAAA3A3QA3A3AABNQAABOg3A3Qg3A3hOAAQhNAAg3g3g");
	this.shape_6.setTransform(49,96.5,0.587,0.587);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#926A65").s().p("AgMANQgHgFABgIQgBgGAHgHQAGgFAGgBQAIABAGAFQAFAHAAAGQAAAIgFAFQgGAHgIAAQgGAAgGgHg");
	this.shape_7.setTransform(12.7,96.4,0.587,0.587,0,0,180);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#926A65").s().p("AgMANQgHgFABgIQgBgGAHgHQAGgFAGgBQAIABAGAFQAFAHAAAGQAAAIgFAFQgGAHgIAAQgGAAgGgHg");
	this.shape_8.setTransform(18.8,96.4,0.587,0.587,0,0,180);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#926A65").s().p("AgNANQgGgFAAgIQAAgGAGgHQAGgFAHgBQAIABAGAFQAGAHAAAGQAAAHgGAGQgGAHgIAAQgHAAgGgHg");
	this.shape_9.setTransform(24.9,96.4,0.587,0.587,0,0,180);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#926A65").s().p("AgNANQgGgFAAgIQAAgGAGgHQAGgFAHgBQAIABAGAFQAGAGAAAHQAAAIgGAFQgGAHgIAAQgHAAgGgHg");
	this.shape_10.setTransform(31.1,96.4,0.587,0.587,0,0,180);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#926A65").s().p("AgNANQgGgFAAgIQAAgGAGgHQAGgFAHgBQAIABAGAFQAGAGAAAHQAAAIgGAFQgGAHgIAAQgHAAgGgHg");
	this.shape_11.setTransform(37.2,96.4,0.587,0.587,0,0,180);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#926A65").s().p("AgNANQgGgGAAgHQAAgGAGgHQAGgFAHgBQAIABAGAFQAGAHAAAGQAAAIgGAFQgGAHgIAAQgHAAgGgHg");
	this.shape_12.setTransform(67.9,96.4,0.587,0.587,0,0,180);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#926A65").s().p("AgNANQgFgFgBgIQABgGAFgHQAHgFAGgBQAIABAFAFQAHAHAAAGQAAAIgHAFQgFAHgIAAQgGAAgHgHg");
	this.shape_13.setTransform(74,96.4,0.587,0.587,0,0,180);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#926A65").s().p("AgNANQgFgFgBgIQABgGAFgHQAGgFAHgBQAIABAFAFQAHAHAAAGQAAAIgHAFQgFAHgIAAQgHAAgGgHg");
	this.shape_14.setTransform(80.1,96.4,0.587,0.587,0,0,180);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#926A65").s().p("AgMANQgHgFAAgIQAAgGAHgHQAFgFAHgBQAIABAGAFQAFAHABAGQgBAIgFAFQgGAHgIAAQgHAAgFgHg");
	this.shape_15.setTransform(110.8,96.4,0.587,0.587,0,0,180);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#432C29").s().p("AtoAoQgKAAgIgIQgIgIAAgKIAAg0IcEAAIAAA0QAAAKgHAIQgIAIgLAAg");
	this.shape_16.setTransform(61.7,98.8,0.587,0.587,0,0,180);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#4C3431").s().p("AuCAoIAAg1QAAgKAIgIQAIgHAKAAIbQAAQALAAAIAHQAHAIAAAKIAAA1g");
	this.shape_17.setTransform(61.7,94.1,0.587,0.587,0,0,180);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#111111").s().p("AjXF3QgigUgKgmQgLgmAUgiIFQpIQAUgiAmgLQAmgKAiAUQAiATAKAmQAKAngTAiIlQJIQgUAigmALQgNADgMAAQgYAAgXgNg");
	this.shape_18.setTransform(62.2,70,0.586,0.778,0,-5.4,-3.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#111111").s().p("ACRGBQgmgLgUgiIlRpIQgUgiAKgmQAKgmAigUQAigTAnAKQAmAKATAiIFSJIQATAigKAmQgKAmgiAUQgXANgZAAQgMAAgMgDg");
	this.shape_19.setTransform(77.7,69.7,0.586,0.778,0,5.4,3.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#111111").s().p("Ag0EoQgXgXABgfIAAnjQgBgfAXgWQAWgXAeAAQAfAAAWAXQAXAWAAAfIAAHjQAAAfgXAXQgWAWgfAAQgeAAgWgWg");
	this.shape_20.setTransform(70,76.4,0.587,0.729);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4E3D3B").s().p("AkPC9IAAl5IIfAAIAAF5g");
	this.shape_21.setTransform(69.9,87.7,0.587,0.587);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#676765").s().p("AiHBbQgFgEgBgGQgBgHAEgGQAEgGAHgBQBYgRBDgXQBFgVAHgNQAGgMgEgPQgDgNgIgFQgIgGgOAQQgFAFgHABQgHAAgFgFQgGgFAAgHQgBgHAFgFQAUgWAWgBQANAAAMAHQATAMAHAaQAGAagKAXQgMAbhhAfQg+AUhVARIgEAAQgGAAgFgEg");
	this.shape_22.setTransform(19.7,89,0.587,0.587,0,0,180);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#854206").s().p("ApyHHIAArBQAegSAeATQA4AhAaAQQAbARAbAOIAdAPQBTApBPAWQAqAKAqAIQBbAOBWgMQArgHAsgNQCWgsCKh7IgHAJIA2gwQAsglAvg0QAcgfAegmQAAAEACAEIAAAFQAAALgCANIgEAtQAWAvAQAuIAALfg");
	this.shape_23.setTransform(52,63.6);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#512804").s().p("AicFCQgqgIgqgKQhQgWhSgpIgegQQgagOgcgQQgZgRg4ggQgegTgeARIAAnYICoAAQARARAIANQBUCnA6BNQCsDfDugXQDxgWCrkAQAshCAhhLIAHgPIADgEIACAEIAJgTIgCGmQgQgugWgvIAEgrQACgNAAgLIAAgFQgCgEAAgEQgeAlgcAeQgvA0gsAlIg2AvIAHgJQiLB8iVAsQgsANgrAHQgnAFgpAAQgwAAgxgHg");
	this.shape_24.setTransform(52.1,23.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.5,-11.1,139.9,124.5);


(lib.Canon1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.tower_123();
	this.instance.setTransform(73,247.2,1.354,1.274,0,0,0,53.4,151.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.6,75.7,164,384.4);


// stage content:
(lib.Firestraightup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 3
	this.instance = new lib.Symbol8();
	this.instance.setTransform(640.1,758.7,1.25,1.25,0,0,0,512.1,31.5);

	this.ikNode_1 = new lib.Bg();
	this.ikNode_1.setTransform(512,404,1,1,0,0,0,512,404);

	this.instance_1 = new lib.Canon1();
	this.instance_1.setTransform(216.8,310.9,1.24,1.24,0,0,0,72.3,234);

	this.instance_2 = new lib.Canonwithfire();
	this.instance_2.setTransform(168.7,117.4,1,1,0,0,0,67.2,43.9);

	this.instance_3 = new lib.Windows();
	this.instance_3.setTransform(212.7,376.3,1,1,0,0,0,41.6,175.8);

	this.instance_4 = new lib.Door();
	this.instance_4.setTransform(253.1,534.5,1,1,0,0,0,6.7,43.8);

	this.instance_5 = new lib.canon2();
	this.instance_5.setTransform(123.3,654.3,1,1,0,0,0,84.9,72.2);

	this.instance_6 = new lib.mc_soldierSideview();
	this.instance_6.setTransform(847.7,560,0.134,0.134,0,0,180,536.2,162.5);

	this.instance_7 = new lib.mc_soldierSideview2();
	this.instance_7.setTransform(847.7,560,0.134,0.134,0,0,180,536.2,162.5);

	this.instance_8 = new lib.ClipGroupcopy3();
	this.instance_8.setTransform(530.7,516.9,0.274,0.274,0,0,0,47.6,185.7);

	this.instance_9 = new lib.SmokeBlast();
	this.instance_9.setTransform(85.8,538.7,1,1,-90,0,0,36.4,40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.ikNode_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(486,1097.3,1079,135);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;