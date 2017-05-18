/*
IE does not provide naturalwidth and naturalheight so it return height and width 0, we modified it to return naturalwidth and naturalheight
*/
(function(){
	var getBounds = createjs.Bitmap.prototype.getBounds;
	
	createjs.Bitmap.prototype.getBounds = function(){
		var bounds = getBounds.apply(this, arguments);
		if(bounds && (!bounds.width || !bounds.height)){
			bounds.width = this.image.naturalWidth;
			bounds.height = this.image.naturalHeight;
		}
		
		return bounds;
	}
})();

/*
createjs.Movieclip does not provide timeline end event, 
so modifying it below to dispatch an 'end' event after it reaches the end of the timeline and does not loop
*/
(function(){
	var _updateTimeline = createjs.MovieClip.prototype._updateTimeline;
	
	createjs.MovieClip.prototype._updateTimeline = function(){
		_updateTimeline.apply(this, arguments);
		
		if(this._previousFrame_ != this.currentFrame){
			if(this.currentFrame >= this.totalFrames/*  && !this.loop */){
				console.log(this.name + " finished playing");
				this.dispatchEvent("end");
			}
		}
		this._previousFrame_ = this.currentFrame;
	}
})();

/*
	Over riding the default functionality, because when running on file system, canvas doesnt allow to use 'getImageData' for images on chrome due to CORS policy
*/
if(window.location.protocol == "file:"){
	Object.defineProperty(createjs.DisplayObject.prototype, "worldX", {
		get:function(){
			if(this.parent){
				return (this.x - this.regX * this.scaleX) * this.parent.scaleX + this.parent.worldX;
			} else {
				return this.x - this.regX * this.scaleX;
			}
		}
	});
	Object.defineProperty(createjs.DisplayObject.prototype, "worldY", {
		get:function(){
			if(this.parent){
				return (this.y - this.regY * this.scaleY) * this.parent.scaleY + this.parent.worldY;
			} else {
				return this.y - this.regY * this.scaleY;
			}
		}
	});
	Object.defineProperty(createjs.DisplayObject.prototype, "worldScaleY", {
		get:function(){
			if(this.parent){
				return (this.scaleY * this.parent.worldScaleY);
			} else {
				return 1//this.scaleY;
			}
		}
	});
	Object.defineProperty(createjs.DisplayObject.prototype, "worldScaleX", {
		get:function(){
			if(this.parent){
				return (this.scaleX * this.parent.worldScaleX);
			} else {
				return 1//this.scaleX;
			}
		}
	});
	createjs.Container.prototype._getObjectsUnderPoint = function(x, y, arr, mouse, activeListener, currentDepth){
		currentDepth = currentDepth || 0;
		
		activeListener = activeListener || (mouse && this._hasMouseEventListener());

		var _x = x / this.stage.scaleX;
		var _y = y / this.stage.scaleY;

		// draw children one at a time, and check if we get a hit:
		var children = this.children, l = children.length;
		for (var i=l-1; i>=0; i--) {
			var child = children[i];
			var hitBounds = child._hitBounds;
			if (!child.visible || (!child.isVisible()) || (mouse && !child.mouseEnabled)) {
				continue;
			}

			if(!hitBounds && child instanceof createjs.Container){
				var result = child._getObjectsUnderPoint(x, y, arr, mouse, activeListener, currentDepth + 1);
				if (!arr && result) {
					return (mouse && !this.mouseChildren) ? this : result;
				}
			} else {
				if (mouse && !activeListener && !child._hasMouseEventListener()) {
					continue;
				}
				var _bounds;
					// console.log(hitBounds)
				if(hitBounds){
					_bounds = hitBounds.clone();
				} else if(child.getBounds() != null){
					_bounds = child.getBounds().clone();				
				}
				try{
					_bounds.width *= child.worldScaleX;
					_bounds.height *= child.worldScaleY;
					_bounds.x += child.worldX;
					_bounds.y += child.worldY;
					
					/////////////////////////////////////////////
					if(!child.debugShape){
						var shape = new createjs.Shape();
						child.stage.addChild(shape);
						child.debugShape = shape;
					}
					if(child.name == "needle")
					{
						// console.log(_bounds)
						child.debugShape.graphics.clear().beginFill("rgba(255,255,0,0.5)").rect(_bounds.x, _bounds.y, _bounds.width, _bounds.height).endFill();
					}
					/////////////////////////////////////////////
					
					if(_bounds.contains(_x, _y)){
						return child;
					}
				} catch (e){
					// console.log(_bounds);
				}
			}
		}
		return null;
	}
}

function getRandomNum(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/*
	converts 0.00001 to 1 x 10^-5
	converts 100000 to 1 * 10^5
*/
function numberToPower(number, a){
	var tensCount = 0;
	var n = number;
	var o = {};
	a = a || 1;
	if(n < 1){
		while(n < a){
			n = n * 10;
			tensCount--;
		}
	} else {
		while(n > a * 10){
			n = n / 10;
			tensCount++;
		}
	}
	o.number = n;
	o.power = tensCount;
	return o;
}

var BrowserDetect = {
	Android: function() {
		return navigator.userAgent.match(/Android/i) ? true : false;
	},
	BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i) ? true : false;
	},
	iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i) ? true : false;
	},
	Windows: function() {
		return navigator.userAgent.match(/IEMobile/i) ? true : false;
	},
	Windows_surface: function() {
		return navigator.userAgent.match(/Trident/i) && navigator.userAgent.match(/Tablet/i)  ? true : false;
	},
	any: function() {
		return (BrowserDetect.Android() || BrowserDetect.BlackBerry() || BrowserDetect.iOS() || BrowserDetect.Windows());
	},
	ie9: function() {
		return navigator.userAgent.match(/MSIE 9.0/i) ? true : false;
	},
	ie10: function() {
		return navigator.userAgent.match(/MSIE 10.0/i) ? true : false;
	},
	ie: function() {
		return navigator.userAgent.match(/MSIE/i) || navigator.userAgent.match(/Trident/i) ? true : false;
	},
	FF: function() {
		return typeof InstallTrigger !== 'undefined';
	},
	safari: function() {
		return navigator.userAgent.match(/Safari/i) ? true : false;
	}
};

var Cursor = {
	grab:""
}

function resizeStage(){
	var background = document.getElementById("background");
	var foreground = document.getElementById("foreground");
	var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
		windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
		scale, left, top, width, height;
		if(windowWidth > windowHeight){
			height = windowHeight;
			width = height * stageWidth / stageHeight;
			top = 0;
			left = (windowWidth - width) / 2;
		}
		if(windowWidth <= windowHeight || left < 0){
			width = windowWidth;
			height = width * stageHeight / stageWidth;
			left = 0;
			top = (windowHeight - height) / 2;
		}
		scale = height / stageHeight;
		background.style.left = foreground.style.left = left + "px";
		background.style.top = foreground.style.top = top + "px";
		background.width = foreground.width = width;
		background.height = foreground.height = height;
		backgroundStage.scaleX = backgroundStage.scaleY = foregroundStage.scaleX = foregroundStage.scaleY = scale;
}