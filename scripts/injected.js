/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },

/***/ 5:
/***/ function(module, exports) {

	'use strict';
	
	function injected_main() {
		alert('injected_main');
	}
	
	(function () {
	
		// just place a div at top right
		var div = document.createElement('div');
		div.style.position = 'fixed';
		div.style.top = 0;
		div.style.right = 0;
		div.textContent = 'Injected!';
		document.body.appendChild(div);
	
		alert('inserted self... giggity');
	})();
	alert('injected.js');
	console.log('enj');

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2IzMTQxMmYwNGVkODRjYTkyMzk/Y2ZkZSoqKiIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9pbmplY3RlZC5qcyJdLCJuYW1lcyI6WyJpbmplY3RlZF9tYWluIiwiYWxlcnQiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiLCJ0ZXh0Q29udGVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0EsVUFBU0EsYUFBVCxHQUF5QjtBQUN4QkMsUUFBTSxlQUFOO0FBQ0E7O0FBRUQsRUFBQyxZQUFXOztBQUVYO0FBQ0EsTUFBSUMsTUFBTUMsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFWO0FBQ0FGLE1BQUlHLEtBQUosQ0FBVUMsUUFBVixHQUFxQixPQUFyQjtBQUNBSixNQUFJRyxLQUFKLENBQVVFLEdBQVYsR0FBZ0IsQ0FBaEI7QUFDQUwsTUFBSUcsS0FBSixDQUFVRyxLQUFWLEdBQWtCLENBQWxCO0FBQ0FOLE1BQUlPLFdBQUosR0FBa0IsV0FBbEI7QUFDQU4sV0FBU08sSUFBVCxDQUFjQyxXQUFkLENBQTBCVCxHQUExQjs7QUFFQUQsUUFBTSwwQkFBTjtBQUVBLEVBWkQ7QUFhQUEsT0FBTSxhQUFOO0FBQ0FXLFNBQVFDLEdBQVIsQ0FBWSxLQUFaLEUiLCJmaWxlIjoiaW5qZWN0ZWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3YjMxNDEyZjA0ZWQ4NGNhOTIzOSIsImZ1bmN0aW9uIGluamVjdGVkX21haW4oKSB7XHJcblx0YWxlcnQoJ2luamVjdGVkX21haW4nKTtcclxufVxyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG5cclxuXHQvLyBqdXN0IHBsYWNlIGEgZGl2IGF0IHRvcCByaWdodFxyXG5cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHRkaXYuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG5cdGRpdi5zdHlsZS50b3AgPSAwO1xyXG5cdGRpdi5zdHlsZS5yaWdodCA9IDA7XHJcblx0ZGl2LnRleHRDb250ZW50ID0gJ0luamVjdGVkISc7XHJcblx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xyXG5cclxuXHRhbGVydCgnaW5zZXJ0ZWQgc2VsZi4uLiBnaWdnaXR5Jyk7XHJcblxyXG59KSgpO1xyXG5hbGVydCgnaW5qZWN0ZWQuanMnKTtcclxuY29uc29sZS5sb2coJ2VuaicpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9pbmplY3RlZC5qcyJdLCJzb3VyY2VSb290IjoiIn0=