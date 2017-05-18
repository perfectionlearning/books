// Avoid `console` errors in browsers that lack a console.
// IE throws exception when the console.log is not found on load and is called by the script
// IE only executes such scripts when the debug panel
if (!(window.console && console.log)) {
  (function() {
	var noop = function() {};
	var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
	var length = methods.length;
	var console = window.console = {};
	while (length--) {
		console[methods[length]] = noop;
	}
  }());
}