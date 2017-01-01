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

	module.exports = __webpack_require__(8);


/***/ },

/***/ 8:
/***/ function(module, exports) {

	'use strict';
	
	chrome.browserAction.onClicked.addListener(function () {
	  console.log('click! Popup');
	});
	
	// chrome.tabs.captureVisibleTab(integer windowId, object options, function callback);
	// function getDirectory(dirname, callback) {
	//   fs.root.getDirectory(dirname, {create: true}, function(dirEntry) {
	//     callback(null, dirEntry);
	//   }, callback);
	// };
	// function takeScreenshot(dirname, tab) {
	//   //console.log("taking screenshot", dirname, tab);
	//   chrome.tabs.captureVisibleTab(null, function(img) {
	//     var screenshotUrl = img;
	//     if(!img || !img.length) return;
	//     //console.log("IMG")
	//     //console.log(img);
	//     // var format = d3.time.format("%Y-%m-%d %X");
	//     // var time = new Date();
	//     // var filename = format(time) + "_" + (+time) + ".jpg";
	//     var filename = "1_" + ".jpg";
	//     //save the image (base64 data) into the specified directory
	//     getDirectory(dirname, function(err, dirEntry) {
	//       if(err) return errorHandler(err);
	//       //save the thumbnail
	//       //console.log("writing to file", filename, "in", dirname);
	//       dirEntry.getFile(filename, {create: true}, function(fileEntry) {
	//         // Create a FileWriter object for our FileEntry (log.txt).
	//         fileEntry.createWriter(function(fileWriter) {
	//           fileWriter.onwriteend = function(e) {
	//             console.log('Write completed.');
	//           };
	//           fileWriter.onerror = function(e) {
	//             console.log('Write failed: ' + e.toString());
	//           };
	//           //TODO: figure out how to write a binary image instead of the data
	//           //url? Since we are writing the string to disk, we can load it into
	//           //the src of an img, but we can't directly open it with chrome
	//           //var blob = new Blob([img], {type: 'image/jpeg'});
	//           var blob = new Blob([img]);
	//           fileWriter.write(blob);
	//           console.log("wrote", fileEntry.toURL());
	//         }, errorHandler);
	//       })
	//     });
	//   });
	// }

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2IzMTQxMmYwNGVkODRjYTkyMzk/Y2ZkZSoqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9wb3B1cC5qcyJdLCJuYW1lcyI6WyJjaHJvbWUiLCJicm93c2VyQWN0aW9uIiwib25DbGlja2VkIiwiYWRkTGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckNBQSxRQUFPQyxhQUFQLENBQXFCQyxTQUFyQixDQUErQkMsV0FBL0IsQ0FBMkMsWUFBVTtBQUNuREMsV0FBUUMsR0FBUixDQUFZLGNBQVo7QUFDRCxFQUZEOztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEsiLCJmaWxlIjoicG9wdXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3YjMxNDEyZjA0ZWQ4NGNhOTIzOSIsIlxuY2hyb21lLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKGZ1bmN0aW9uKCl7XG4gIGNvbnNvbGUubG9nKCdjbGljayEgUG9wdXAnKTtcbn0pO1xuXG4vLyBjaHJvbWUudGFicy5jYXB0dXJlVmlzaWJsZVRhYihpbnRlZ2VyIHdpbmRvd0lkLCBvYmplY3Qgb3B0aW9ucywgZnVuY3Rpb24gY2FsbGJhY2spO1xuLy8gZnVuY3Rpb24gZ2V0RGlyZWN0b3J5KGRpcm5hbWUsIGNhbGxiYWNrKSB7XG4vLyAgIGZzLnJvb3QuZ2V0RGlyZWN0b3J5KGRpcm5hbWUsIHtjcmVhdGU6IHRydWV9LCBmdW5jdGlvbihkaXJFbnRyeSkge1xuLy8gICAgIGNhbGxiYWNrKG51bGwsIGRpckVudHJ5KTtcbi8vICAgfSwgY2FsbGJhY2spO1xuLy8gfTtcbi8vIGZ1bmN0aW9uIHRha2VTY3JlZW5zaG90KGRpcm5hbWUsIHRhYikge1xuLy8gICAvL2NvbnNvbGUubG9nKFwidGFraW5nIHNjcmVlbnNob3RcIiwgZGlybmFtZSwgdGFiKTtcbi8vICAgY2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIobnVsbCwgZnVuY3Rpb24oaW1nKSB7XG4vLyAgICAgdmFyIHNjcmVlbnNob3RVcmwgPSBpbWc7XG4vLyAgICAgaWYoIWltZyB8fCAhaW1nLmxlbmd0aCkgcmV0dXJuO1xuLy8gICAgIC8vY29uc29sZS5sb2coXCJJTUdcIilcbi8vICAgICAvL2NvbnNvbGUubG9nKGltZyk7XG4vLyAgICAgLy8gdmFyIGZvcm1hdCA9IGQzLnRpbWUuZm9ybWF0KFwiJVktJW0tJWQgJVhcIik7XG4vLyAgICAgLy8gdmFyIHRpbWUgPSBuZXcgRGF0ZSgpO1xuLy8gICAgIC8vIHZhciBmaWxlbmFtZSA9IGZvcm1hdCh0aW1lKSArIFwiX1wiICsgKCt0aW1lKSArIFwiLmpwZ1wiO1xuLy8gICAgIHZhciBmaWxlbmFtZSA9IFwiMV9cIiArIFwiLmpwZ1wiO1xuLy8gICAgIC8vc2F2ZSB0aGUgaW1hZ2UgKGJhc2U2NCBkYXRhKSBpbnRvIHRoZSBzcGVjaWZpZWQgZGlyZWN0b3J5XG4vLyAgICAgZ2V0RGlyZWN0b3J5KGRpcm5hbWUsIGZ1bmN0aW9uKGVyciwgZGlyRW50cnkpIHtcbi8vICAgICAgIGlmKGVycikgcmV0dXJuIGVycm9ySGFuZGxlcihlcnIpO1xuLy8gICAgICAgLy9zYXZlIHRoZSB0aHVtYm5haWxcbi8vICAgICAgIC8vY29uc29sZS5sb2coXCJ3cml0aW5nIHRvIGZpbGVcIiwgZmlsZW5hbWUsIFwiaW5cIiwgZGlybmFtZSk7XG4vLyAgICAgICBkaXJFbnRyeS5nZXRGaWxlKGZpbGVuYW1lLCB7Y3JlYXRlOiB0cnVlfSwgZnVuY3Rpb24oZmlsZUVudHJ5KSB7XG4vLyAgICAgICAgIC8vIENyZWF0ZSBhIEZpbGVXcml0ZXIgb2JqZWN0IGZvciBvdXIgRmlsZUVudHJ5IChsb2cudHh0KS5cbi8vICAgICAgICAgZmlsZUVudHJ5LmNyZWF0ZVdyaXRlcihmdW5jdGlvbihmaWxlV3JpdGVyKSB7XG4vLyAgICAgICAgICAgZmlsZVdyaXRlci5vbndyaXRlZW5kID0gZnVuY3Rpb24oZSkge1xuLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ1dyaXRlIGNvbXBsZXRlZC4nKTtcbi8vICAgICAgICAgICB9O1xuLy8gICAgICAgICAgIGZpbGVXcml0ZXIub25lcnJvciA9IGZ1bmN0aW9uKGUpIHtcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdXcml0ZSBmYWlsZWQ6ICcgKyBlLnRvU3RyaW5nKCkpO1xuLy8gICAgICAgICAgIH07XG4vLyAgICAgICAgICAgLy9UT0RPOiBmaWd1cmUgb3V0IGhvdyB0byB3cml0ZSBhIGJpbmFyeSBpbWFnZSBpbnN0ZWFkIG9mIHRoZSBkYXRhXG4vLyAgICAgICAgICAgLy91cmw/IFNpbmNlIHdlIGFyZSB3cml0aW5nIHRoZSBzdHJpbmcgdG8gZGlzaywgd2UgY2FuIGxvYWQgaXQgaW50b1xuLy8gICAgICAgICAgIC8vdGhlIHNyYyBvZiBhbiBpbWcsIGJ1dCB3ZSBjYW4ndCBkaXJlY3RseSBvcGVuIGl0IHdpdGggY2hyb21lXG4vLyAgICAgICAgICAgLy92YXIgYmxvYiA9IG5ldyBCbG9iKFtpbWddLCB7dHlwZTogJ2ltYWdlL2pwZWcnfSk7XG4vLyAgICAgICAgICAgdmFyIGJsb2IgPSBuZXcgQmxvYihbaW1nXSk7XG4vLyAgICAgICAgICAgZmlsZVdyaXRlci53cml0ZShibG9iKTtcbi8vICAgICAgICAgICBjb25zb2xlLmxvZyhcIndyb3RlXCIsIGZpbGVFbnRyeS50b1VSTCgpKTtcbi8vICAgICAgICAgfSwgZXJyb3JIYW5kbGVyKTtcbi8vICAgICAgIH0pXG4vLyAgICAgfSk7XG4vLyAgIH0pO1xuLy8gfVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvcG9wdXAuanMiXSwic291cmNlUm9vdCI6IiJ9