var Ticker = {
	_ticking:false,
	_listeners:[],
	_tick:function(){
		var i = 0, _newDate = new Date();
		var arr = Ticker._listeners.slice(0);// to avoid issues with items being removed or added during the dispatch
		var length = arr.length;
        //--------------------------
		for(; i < length; i++){
			if(typeof arr[i] != "undefined"){
				if(arr[i].delay != undefined)	{
					if(typeof(arr[i].oldDate) == "undefined" || (_newDate - arr[i].oldDate) >= arr[i].delay){
						arr[i].oldDate = _newDate;
						arr[i].callback ? arr[i].callback() : null;
						if(arr[i].once){
							Ticker.remove(arr[i].callback);
						}
					}
				} else if(arr[i].fps != undefined){
					if(typeof(arr[i].oldDate) == "undefined" || _newDate - arr[i].oldDate >= (780 / arr[i].fps)){
						arr[i].oldDate = _newDate;
						arr[i].callback();
					}
				}
			}
		}
		//--------------------------
		if(Ticker._ticking){
        	Ticker._requestId = requestAnimationFrame(Ticker._tick);
		}
	},
	_has:function(callback){
		var i = 0;
		for(; i < Ticker._listeners.length; i++){
			if(Ticker._listeners[i].callback == callback){
				return i;
			}
		}
		return false;
	},
	add:function(obj){
		var o = {};
		if(typeof obj.callback == "function"){
			o.callback = obj.callback;
			if(!isNaN(obj.delay)){
				o.delay = obj.delay;
			} else /* if(!isNaN(obj.fps)) */{
				o.fps = obj.fps || 24;// default 24 fps
			}
			if(Ticker._has(o.callback) !== false){
				Ticker.remove(o.callback);
			}
			if(Object.keys(o).length > 1){
				o.once = !!obj.once;
				o.oldDate = new Date().getTime();
				Ticker._listeners.push(o);
				if(!Ticker._ticking && Ticker._listeners.length > 0){
					Ticker._ticking = true;
					Ticker._tick();
				}
			}
		}
	},
	remove:function(callback){
		var index = Ticker._has(callback);
		if(index !== false){
			Ticker._listeners.splice(index, 1);
			if(Ticker._ticking && Ticker._listeners.length == 0){
				Ticker._ticking = false;
				cancelAnimationFrame(Ticker._requestId);
			}
		}
	}
};

(function(){
	var lastTime = 0;
	var vendors = ['webkit', 'moz'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x){
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}
	if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element){
		var currTime = new Date().getTime();
		var timeToCall = Math.max(0, 16 - (currTime - lastTime));
		var id = window.setTimeout(function(){
			callback(currTime + timeToCall);
		}, timeToCall);
		lastTime = currTime + timeToCall;
		return id;
	};
	if (!window.cancelAnimationFrame) window.cancelAnimationFrame = function(id){
		clearTimeout(id);
	};
}());