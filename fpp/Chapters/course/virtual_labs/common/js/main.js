var loader,
	images = {},
	lab,
	backgroundStage, foregroundStage,
	stageWidth = 1024,
	stageHeight = 808;
	
function main(){
	stageWidth = scaledValue(stageWidth);
	stageHeight = scaledValue(stageHeight);
	loader = new createjs.LoadQueue(false, scaledValue(1) == 1 ? resources.basePath : resources.basePathDevice);
	if(resources.sounds && createjs.Sound){
		loader.installPlugin(createjs.Sound);
	}
	loader.addEventListener("complete", onLoadComplete);
	loader.addEventListener("fileload", onFileLoad);
	loader.addEventListener("progress", loadProgress);
	loader.loadManifest(resources.manifest);
}

function loadProgress(evt){
	// console.log(evt.loaded);
}

function onFileLoad(evt){
	if(evt.item.type == "image"){
		images[evt.item.id] = evt.result;
	}
}

function onLoadComplete(evt){
	initiateLab();
}

function initiateLab(){
	backgroundStage = new createjs.Stage("background");
	createLayout(layout.background, backgroundStage);
	
	foregroundStage = new createjs.Stage("foreground");
	lab = new Lab();
	foregroundStage.addChild(lab);
	createjs.Touch.enable(foregroundStage);
	foregroundStage.enableMouseOver();
	foregroundStage.snapToPixelEnabled = true;
	lab.layout = {};
	
	createLayout(layout.foreground, lab, true);
	lab.startLab();
	lab.paused = false;
	createjs.Ticker.setFPS(30);
	createjs.Ticker.addEventListener("tick", updateStage);
	
	resizeStage();
	backgroundStage.update();
	window.addEventListener("resize", function(){
		resizeStage();
		updateStage();
		backgroundStage.update();
	});
	
	setTimeout(function(){
		document.getElementById("loader").style.display = "none";
	},500);
}

function updateStage(event){
	if(!lab.paused){
		foregroundStage.update(event);
	}
}

function createLayout(array, parent, bool){
	var child, timelineInstances, bounds, i;
	array.forEach(function(object){
		child = createInstance(object);
		
		if(child.name && bool){
			lab.layout[child.name] = child;
		}
		
		if(object.type == "MovieClip"){
			if(Array.isArray(object.timeline) && object.timeline.length > 0){
				timelineInstances = {};
				object.timelineInstances.forEach(function(o){
					timelineInstances[o.name] = createInstance(o);
				});
				createTimeline(child, object.timeline, timelineInstances);
			}
			child.gotoAndStop(0);
		}
		
		if(object.namespace == "lib" && child.hasOwnProperty("paused")){
			child.gotoAndStop(0);
		}
		
		parent.addChild(child);
		
		if(object.hitBounds){
			child._hitBounds = new createjs.Rectangle(object.hitBounds.x, object.hitBounds.y, object.hitBounds.width, object.hitBounds.height);
		}
		
		child.snapToPixel = true;
		if(Array.isArray(object.children) && object.children.length > 0){
			createLayout(object.children, child, bool);
		}
		if(object.cache){
			if(object.cache.hasOwnProperty("x")){
				bounds = object.cache;
				for(i in bounds){
					bounds[i] = scaledValue(bounds[i]);
				}
			}
			else {
				bounds = child.getBounds();
			}
			
			if(bounds != null){
				child.cache(bounds.x, bounds.y, bounds.width, bounds.height, bounds.scale);
			}
		}
	});
}

function createInstance(object){
	var instance, i;
	if(object.namespace){
		instance = new window[object.namespace][object.type]();
	}else{
		instance = new window[object.type](object);// for components
	}
	
	if(object.type == "Bitmap"){
		instance.initialize(images[object.img]);
	}else if(Array.isArray(object.initParams)/*  && typeof instance.initialize == "function" */){
		instance.initialize.apply(instance, object.initParams);
	}
	
	if(object.props){
		for(i in object.props){
			if(scaledValue.scalableProps.indexOf(i) != -1){
				if(i == "font"){
					var arr = object.props[i].split(" ");
					if(!isNaN(parseInt(arr[0]))){// 10px Arial
						object.props[i] = scaledValue(parseInt(arr[0])) + "px " + arr[1];
					} else if(!isNaN(parseInt(arr[1]))){// bold 10px Arial
						object.props[i] = arr[0] + " " + scaledValue(parseInt(arr[1])) + "px " + arr[2];
					}
					// console.log(object.props[i])
				} else {
					object.props[i] = scaledValue(object.props[i])
				}
			}
		}
		instance.set(object.props);
	}
	if(object.transform){
		instance.setTransform.apply(instance, object.transform);
	}
	
	instance.name = object.name;
	
	return instance;
}

function createTimeline(mc, timeline, instances){
	var tween, tweens = {}, waitTime = 0;
	
	timeline.forEach(function(o, i){
		if(!tweens[o.id]){
			tween = createjs.Tween.get(instances[o.id]);
			tweens[o.id] = tween;
		}else{
			tween = tweens[o.id];
		}
		if(o.hasOwnProperty("wait")){
			tween.wait(o.wait);
		}
		if(o.hasOwnProperty("to")){
			tween.to.apply(tween, o.to);
		}
		mc.timeline.addTween(tween);
	});
}

var scaledValue = function(value){
	return value;
}
scaledValue.scalableProps = ["x", "y", "width", "height", "regX", "regY", "font", "lineWidth", "lineHeight"];
var sV = scaledValue;// shortcut

function playSound(id, loop) {
	createjs.Sound.stop();
	createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
}

(function() { 
	var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        // method = methods[length];
		console[method] = noop;
    }
}());