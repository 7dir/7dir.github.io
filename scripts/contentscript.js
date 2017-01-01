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
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	console.log('!!!Content script');
	
	// var errorEl = document.createElement("a-scene");
	// // errorEl.innerHTML = "<div style='position: absolute; top: 10px; right: 10px; z-index: 9999; padding: 8px; background-color: #fff2f2; border: 1px solid #f03e3e; border-radius: 2px; font-size: 12px; line-height: 16px; transition: opacity .3s linear;'>An internal error occurred while taking pictures.</div>";
	// var scene = document.querySelector('a-scene');
	// var cylinder = document.createElement('a-cylinder');
	// cylinder.setAttribute('color', '#FF9500');
	// cylinder.setAttribute('height', '2');
	// cylinder.setAttribute('radius', '0.75');
	// cylinder.setAttribute('position', '3 1 0');
	//
	//
	// document.body.appendChild(errorEl);
	// scene.appendChild(cylinder);
	
	// errorEl.innerHTML = '<a-scene></a-scene>';
	
	// AFRAME.registerComponent('a-box', {
	//   // Define component properties.
	//   schema: {},
	//   init: function () {
	//     var sceneEl = this.el;
	//   }
	// });
	
	
	// alert('Injected!');
	//
	// function resetPage(originalParams) {
	// 	window.scrollTo(0, originalParams.scrollTop);
	// 	document.querySelector("body").style.overflow = originalParams.overflow;
	// }
	//
	// chrome.runtime.onMessage.addListener(function (request, sender, callback) {
	// 	switch (request.msg) {
	// 		case "getPageDetails":
	// 			var size = {
	// 				width: Math.max(
	// 					document.documentElement.clientWidth,
	// 					document.body.scrollWidth,
	// 					document.documentElement.scrollWidth,
	// 					document.body.offsetWidth,
	// 					document.documentElement.offsetWidth
	// 				),
	// 				height: Math.max(
	// 					document.documentElement.clientHeight,
	// 					document.body.scrollHeight,
	// 					document.documentElement.scrollHeight,
	// 					document.body.offsetHeight,
	// 					document.documentElement.offsetHeight
	// 				)
	// 			};
	//
	// 			chrome.extension.sendMessage({
	// 				"msg": "setPageDetails",
	// 				"size": size,
	// 				"scrollBy": window.innerHeight,
	// 				"originalParams": {
	// 					"overflow": document.querySelector("body").style.overflow,
	// 					"scrollTop": document.documentElement.scrollTop
	// 				}
	// 			});
	// 			break;
	//
	// 		case "scrollPage":
	// 			var lastCapture = false;
	//
	// 			window.scrollTo(0, request.scrollTo);
	//
	// 			// first scrolling
	// 			if (request.scrollTo === 0) {
	// 				document.querySelector("body").style.overflow = "hidden";
	// 			}
	//
	// 			// last scrolling
	// 			if (request.size.height <= window.scrollY + request.scrollBy) {
	// 				lastCapture = true;
	// 				request.scrollTo = request.size.height - request.scrollBy;
	// 			}
	//
	// 			chrome.extension.sendMessage({
	// 				"msg": "capturePage",
	// 				"position": request.scrollTo,
	// 				"lastCapture": lastCapture
	// 			});
	// 			break;
	//
	// 		case "resetPage":
	// 			resetPage(request.originalParams);
	// 			break;
	//
	// 		case "showError":
	// 			var errorEl = document.createElement("div");
	//
	// 			errorEl.innerHTML = "<div style='position: absolute; top: 10px; right: 10px; z-index: 9999; padding: 8px; background-color: #fff2f2; border: 1px solid #f03e3e; border-radius: 2px; font-size: 12px; line-height: 16px; transition: opacity .3s linear;'>An internal error occurred while taking pictures.</div>";
	// 			document.body.appendChild(errorEl);
	//
	// 			setTimeout(function () {
	// 				errorEl.firstChild.style.opacity = 0;
	// 			}, 3000);
	//
	// 			resetPage(request.originalParams);
	// 			break;
	// 	}
	// });

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2IzMTQxMmYwNGVkODRjYTkyMzk/Y2ZkZSoiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvY29udGVudHNjcmlwdC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBQSxTQUFRQyxHQUFSLENBQVksbUJBQVo7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPIiwiZmlsZSI6ImNvbnRlbnRzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3YjMxNDEyZjA0ZWQ4NGNhOTIzOSIsImNvbnNvbGUubG9nKCchISFDb250ZW50IHNjcmlwdCcpO1xuXG4vLyB2YXIgZXJyb3JFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhLXNjZW5lXCIpO1xuLy8gLy8gZXJyb3JFbC5pbm5lckhUTUwgPSBcIjxkaXYgc3R5bGU9J3Bvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAxMHB4OyByaWdodDogMTBweDsgei1pbmRleDogOTk5OTsgcGFkZGluZzogOHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmMmYyOyBib3JkZXI6IDFweCBzb2xpZCAjZjAzZTNlOyBib3JkZXItcmFkaXVzOiAycHg7IGZvbnQtc2l6ZTogMTJweDsgbGluZS1oZWlnaHQ6IDE2cHg7IHRyYW5zaXRpb246IG9wYWNpdHkgLjNzIGxpbmVhcjsnPkFuIGludGVybmFsIGVycm9yIG9jY3VycmVkIHdoaWxlIHRha2luZyBwaWN0dXJlcy48L2Rpdj5cIjtcbi8vIHZhciBzY2VuZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Etc2NlbmUnKTtcbi8vIHZhciBjeWxpbmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EtY3lsaW5kZXInKTtcbi8vIGN5bGluZGVyLnNldEF0dHJpYnV0ZSgnY29sb3InLCAnI0ZGOTUwMCcpO1xuLy8gY3lsaW5kZXIuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMicpO1xuLy8gY3lsaW5kZXIuc2V0QXR0cmlidXRlKCdyYWRpdXMnLCAnMC43NScpO1xuLy8gY3lsaW5kZXIuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsICczIDEgMCcpO1xuLy9cbi8vXG4vLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVycm9yRWwpO1xuLy8gc2NlbmUuYXBwZW5kQ2hpbGQoY3lsaW5kZXIpO1xuXG4vLyBlcnJvckVsLmlubmVySFRNTCA9ICc8YS1zY2VuZT48L2Etc2NlbmU+JztcblxuLy8gQUZSQU1FLnJlZ2lzdGVyQ29tcG9uZW50KCdhLWJveCcsIHtcbi8vICAgLy8gRGVmaW5lIGNvbXBvbmVudCBwcm9wZXJ0aWVzLlxuLy8gICBzY2hlbWE6IHt9LFxuLy8gICBpbml0OiBmdW5jdGlvbiAoKSB7XG4vLyAgICAgdmFyIHNjZW5lRWwgPSB0aGlzLmVsO1xuLy8gICB9XG4vLyB9KTtcblxuXG4vLyBhbGVydCgnSW5qZWN0ZWQhJyk7XG4vL1xuLy8gZnVuY3Rpb24gcmVzZXRQYWdlKG9yaWdpbmFsUGFyYW1zKSB7XG4vLyBcdHdpbmRvdy5zY3JvbGxUbygwLCBvcmlnaW5hbFBhcmFtcy5zY3JvbGxUb3ApO1xuLy8gXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zdHlsZS5vdmVyZmxvdyA9IG9yaWdpbmFsUGFyYW1zLm92ZXJmbG93O1xuLy8gfVxuLy9cbi8vIGNocm9tZS5ydW50aW1lLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbiAocmVxdWVzdCwgc2VuZGVyLCBjYWxsYmFjaykge1xuLy8gXHRzd2l0Y2ggKHJlcXVlc3QubXNnKSB7XG4vLyBcdFx0Y2FzZSBcImdldFBhZ2VEZXRhaWxzXCI6XG4vLyBcdFx0XHR2YXIgc2l6ZSA9IHtcbi8vIFx0XHRcdFx0d2lkdGg6IE1hdGgubWF4KFxuLy8gXHRcdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcbi8vIFx0XHRcdFx0XHRkb2N1bWVudC5ib2R5LnNjcm9sbFdpZHRoLFxuLy8gXHRcdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxXaWR0aCxcbi8vIFx0XHRcdFx0XHRkb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoLFxuLy8gXHRcdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5vZmZzZXRXaWR0aFxuLy8gXHRcdFx0XHQpLFxuLy8gXHRcdFx0XHRoZWlnaHQ6IE1hdGgubWF4KFxuLy8gXHRcdFx0XHRcdGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQsXG4vLyBcdFx0XHRcdFx0ZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQsXG4vLyBcdFx0XHRcdFx0ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbEhlaWdodCxcbi8vIFx0XHRcdFx0XHRkb2N1bWVudC5ib2R5Lm9mZnNldEhlaWdodCxcbi8vIFx0XHRcdFx0XHRkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQub2Zmc2V0SGVpZ2h0XG4vLyBcdFx0XHRcdClcbi8vIFx0XHRcdH07XG4vL1xuLy8gXHRcdFx0Y2hyb21lLmV4dGVuc2lvbi5zZW5kTWVzc2FnZSh7XG4vLyBcdFx0XHRcdFwibXNnXCI6IFwic2V0UGFnZURldGFpbHNcIixcbi8vIFx0XHRcdFx0XCJzaXplXCI6IHNpemUsXG4vLyBcdFx0XHRcdFwic2Nyb2xsQnlcIjogd2luZG93LmlubmVySGVpZ2h0LFxuLy8gXHRcdFx0XHRcIm9yaWdpbmFsUGFyYW1zXCI6IHtcbi8vIFx0XHRcdFx0XHRcIm92ZXJmbG93XCI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnN0eWxlLm92ZXJmbG93LFxuLy8gXHRcdFx0XHRcdFwic2Nyb2xsVG9wXCI6IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3Bcbi8vIFx0XHRcdFx0fVxuLy8gXHRcdFx0fSk7XG4vLyBcdFx0XHRicmVhaztcbi8vXG4vLyBcdFx0Y2FzZSBcInNjcm9sbFBhZ2VcIjpcbi8vIFx0XHRcdHZhciBsYXN0Q2FwdHVyZSA9IGZhbHNlO1xuLy9cbi8vIFx0XHRcdHdpbmRvdy5zY3JvbGxUbygwLCByZXF1ZXN0LnNjcm9sbFRvKTtcbi8vXG4vLyBcdFx0XHQvLyBmaXJzdCBzY3JvbGxpbmdcbi8vIFx0XHRcdGlmIChyZXF1ZXN0LnNjcm9sbFRvID09PSAwKSB7XG4vLyBcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcbi8vIFx0XHRcdH1cbi8vXG4vLyBcdFx0XHQvLyBsYXN0IHNjcm9sbGluZ1xuLy8gXHRcdFx0aWYgKHJlcXVlc3Quc2l6ZS5oZWlnaHQgPD0gd2luZG93LnNjcm9sbFkgKyByZXF1ZXN0LnNjcm9sbEJ5KSB7XG4vLyBcdFx0XHRcdGxhc3RDYXB0dXJlID0gdHJ1ZTtcbi8vIFx0XHRcdFx0cmVxdWVzdC5zY3JvbGxUbyA9IHJlcXVlc3Quc2l6ZS5oZWlnaHQgLSByZXF1ZXN0LnNjcm9sbEJ5O1xuLy8gXHRcdFx0fVxuLy9cbi8vIFx0XHRcdGNocm9tZS5leHRlbnNpb24uc2VuZE1lc3NhZ2Uoe1xuLy8gXHRcdFx0XHRcIm1zZ1wiOiBcImNhcHR1cmVQYWdlXCIsXG4vLyBcdFx0XHRcdFwicG9zaXRpb25cIjogcmVxdWVzdC5zY3JvbGxUbyxcbi8vIFx0XHRcdFx0XCJsYXN0Q2FwdHVyZVwiOiBsYXN0Q2FwdHVyZVxuLy8gXHRcdFx0fSk7XG4vLyBcdFx0XHRicmVhaztcbi8vXG4vLyBcdFx0Y2FzZSBcInJlc2V0UGFnZVwiOlxuLy8gXHRcdFx0cmVzZXRQYWdlKHJlcXVlc3Qub3JpZ2luYWxQYXJhbXMpO1xuLy8gXHRcdFx0YnJlYWs7XG4vL1xuLy8gXHRcdGNhc2UgXCJzaG93RXJyb3JcIjpcbi8vIFx0XHRcdHZhciBlcnJvckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbi8vXG4vLyBcdFx0XHRlcnJvckVsLmlubmVySFRNTCA9IFwiPGRpdiBzdHlsZT0ncG9zaXRpb246IGFic29sdXRlOyB0b3A6IDEwcHg7IHJpZ2h0OiAxMHB4OyB6LWluZGV4OiA5OTk5OyBwYWRkaW5nOiA4cHg7IGJhY2tncm91bmQtY29sb3I6ICNmZmYyZjI7IGJvcmRlcjogMXB4IHNvbGlkICNmMDNlM2U7IGJvcmRlci1yYWRpdXM6IDJweDsgZm9udC1zaXplOiAxMnB4OyBsaW5lLWhlaWdodDogMTZweDsgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MgbGluZWFyOyc+QW4gaW50ZXJuYWwgZXJyb3Igb2NjdXJyZWQgd2hpbGUgdGFraW5nIHBpY3R1cmVzLjwvZGl2PlwiO1xuLy8gXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlcnJvckVsKTtcbi8vXG4vLyBcdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbi8vIFx0XHRcdFx0ZXJyb3JFbC5maXJzdENoaWxkLnN0eWxlLm9wYWNpdHkgPSAwO1xuLy8gXHRcdFx0fSwgMzAwMCk7XG4vL1xuLy8gXHRcdFx0cmVzZXRQYWdlKHJlcXVlc3Qub3JpZ2luYWxQYXJhbXMpO1xuLy8gXHRcdFx0YnJlYWs7XG4vLyBcdH1cbi8vIH0pO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvY29udGVudHNjcmlwdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=