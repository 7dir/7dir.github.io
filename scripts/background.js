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

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	// chrome.tabs.executeScript({file: 'injected.js'});
	
	// listen for our browerAction to be clicked
	chrome.browserAction.onClicked.addListener(function (tab) {
	  // for the current tab, inject the "inject.js" file & execute it
	  console.log('chrome.browserAction.onClicked.addListener');
	  // $.get(chrome.extension.getURL('/injected.js'),
	  // 	function(data) {
	  // 		var script = document.createElement("script");
	  // 		script.setAttribute("type", "text/javascript");
	  // 		script.innerHTML = data;
	  // 		document.getElementsByTagName("head")[0].appendChild(script);
	  // 		document.getElementsByTagName("body")[0].setAttribute("onLoad", "injected_main();");
	  // 	}
	  // );
	  // chrome.tabs.executeScript(tab.ib, {
	  // 	file: '../scripts/injected.js'
	  // });
	});
	
	// $.get(chrome.extension.getURL('/injected.js'),
	// 	function(data) {
	// 		var script = document.createElement("script");
	// 		script.setAttribute("type", "text/javascript");
	// 		script.innerHTML = data;
	// 		document.getElementsByTagName("head")[0].appendChild(script);
	// 		document.getElementsByTagName("body")[0].setAttribute("onLoad", "injected_main();");
	// 	}
	// );
	
	// Enable chromereload by uncommenting this line:
	// import 'chromereload/devonly';
	
	chrome.runtime.onInstalled.addListener(function (details) {
	  console.log('previousVersion', details.previousVersion);
	  console.log('chrome.runtime.onInstalled.addListener(function (details)');
	});
	
	// chrome.browserAction.setBadgeText({text: 'Привет'});
	
	chrome.commands.onCommand.addListener(function (command) {
	  if (command === "toggle-feature-foo") {
	    console.log('toggle-feature-foo take-screen Event Page for Browser Action');
	  }
	});
	
	// Chrome 24+. Use chrome.experimental.commands in Chrome 23-
	// chrome.commands.onCommand.addListener(function(command) {
	//     if (command === 'test-shortcut') {
	//          // Do whatever you want, for instance console.log in the tab:
	//          chrome.tabs.query({active:true}, function(tabs) {
	//              var tabId = tabs[0].id;
	//              var code = 'console.log("Intercepted Ctrl+D!");';
	//              chrome.tabs.executeScript(tabId, {code: code});
	//          });
	//     }
	// });
	
	
	// chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	//     if (request.name == 'screenshot') {
	//         chrome.tabs.captureVisibleTab(null, null, function(dataUrl) {
	//             sendResponse({ screenshotUrl: dataUrl });
	//         });
	//     }
	//     return true;
	// });
	
	
	//
	// var takeScreenshot = {
	// 	/**
	// 	 * @description ID of current tab
	// 	 * @type {Number}
	// 	 */
	// 	tabId: null,
	//
	// 	/**
	// 	 * @description Canvas element
	// 	 * @type {Object}
	// 	 */
	// 	screenshotCanvas: null,
	//
	// 	/**
	// 	 * @description 2D context of screenshotCanvas element
	// 	 * @type {Object}
	// 	 */
	// 	screenshotContext: null,
	//
	// 	/**
	// 	 * @description Number of pixels by which to move the screen
	// 	 * @type {Number}
	// 	 */
	// 	scrollBy: 0,
	//
	// 	/**
	// 	 * @description Sizes of page
	// 	 * @type {Object}
	// 	 */
	// 	size: {
	// 		width: 0,
	// 		height: 0
	// 	},
	//
	// 	/**
	// 	 * @description Keep original params of page
	// 	 * @type {Object}
	// 	 */
	// 	originalParams: {
	// 		overflow: "",
	// 		scrollTop: 0
	// 	},
	//
	// 	/**
	// 	 * @description Initialize plugin
	// 	 */
	// 	initialize: function () {
	// 		this.screenshotCanvas = document.createElement("canvas");
	// 		this.screenshotContext = this.screenshotCanvas.getContext("2d");
	// 		this.bindEvents();
	// 	},
	//
	// 	/**
	// 	 * @description Bind plugin events
	// 	 */
	// 	bindEvents: function () {
	// 		// handle onClick plugin icon event
	// 		chrome.browserAction.onClicked.addListener(function (tab) {
	// 			this.tabId = tab.id;
	//
	// 			chrome.tabs.sendMessage(tab.id, {
	// 				"msg": "getPageDetails"
	// 			});
	// 		}.bind(this));
	//
	// 		// handle chrome requests
	// 		chrome.runtime.onMessage.addListener(function (request, sender, callback) {
	// 			if (request.msg === "setPageDetails") {
	// 				this.size = request.size;
	// 				this.scrollBy = request.scrollBy;
	// 				this.originalParams = request.originalParams;
	//
	// 				// set width & height of canvas element
	// 				this.screenshotCanvas.width = this.size.width;
	// 				this.screenshotCanvas.height = this.size.height;
	//
	// 				this.scrollTo(0);
	// 			} else if (request.msg === "capturePage") {
	// 				this.capturePage(request.position, request.lastCapture);
	// 			}
	// 		}.bind(this));
	// 	},
	//
	// 	/**
	// 	 * @description Send request to scroll page on given position
	// 	 * @param {Number} position
	// 	 */
	// 	scrollTo: function (position) {
	// 		chrome.tabs.sendMessage(this.tabId, {
	// 			"msg": "scrollPage",
	// 			"size": this.size,
	// 			"scrollBy": this.scrollBy,
	// 			"scrollTo": position
	// 		});
	// 	},
	//
	// 	/**
	// 	 * @description Takes screenshot of visible area and merges it
	// 	 * @param {Number} position
	// 	 * @param {Boolean} lastCapture
	// 	 */
	// 	capturePage: function (position, lastCapture) {
	// 		var self = this;
	//
	// 		setTimeout(function () {
	// 			chrome.tabs.captureVisibleTab(null, {
	// 				"format": "png"
	// 			}, function (dataURI) {
	// 				var newWindow,
	// 					image = new Image();
	//
	// 				if (typeof dataURI !== "undefined") {
	// 					image.onload = function() {
	// 						self.screenshotContext.drawImage(image, 0, position);
	//
	// 						if (lastCapture) {
	// 							self.resetPage();
	// 							newWindow = window.open();
	// 							newWindow.document.write("<style type='text/css'>body {margin: 0;}</style>");
	// 							newWindow.document.write("<img src='" + self.screenshotCanvas.toDataURL("image/png") + "'/>");
	// 						} else {
	// 							self.scrollTo(position + self.scrollBy);
	// 						}
	// 					};
	//
	// 					image.src = dataURI;
	// 				} else {
	// 					chrome.tabs.sendMessage(self.tabId, {
	// 						"msg": "showError",
	// 						"originalParams": self.originalParams
	// 					});
	// 				}
	// 			});
	// 		}, 300);
	// 	},
	//
	// 	/**
	// 	 * @description Send request to set original params of page
	// 	 */
	// 	resetPage: function () {
	// 		chrome.tabs.sendMessage(this.tabId, {
	// 			"msg": "resetPage",
	// 			"originalParams": this.originalParams
	// 		});
	// 	}
	// };
	//
	//
	// takeScreenshot.initialize();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgN2IzMTQxMmYwNGVkODRjYTkyMzk/Y2ZkZSIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIl0sIm5hbWVzIjpbImNocm9tZSIsImJyb3dzZXJBY3Rpb24iLCJvbkNsaWNrZWQiLCJhZGRMaXN0ZW5lciIsInRhYiIsImNvbnNvbGUiLCJsb2ciLCJydW50aW1lIiwib25JbnN0YWxsZWQiLCJkZXRhaWxzIiwicHJldmlvdXNWZXJzaW9uIiwiY29tbWFuZHMiLCJvbkNvbW1hbmQiLCJjb21tYW5kIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBRUE7QUFDQUEsUUFBT0MsYUFBUCxDQUFxQkMsU0FBckIsQ0FBK0JDLFdBQS9CLENBQTJDLFVBQVVDLEdBQVYsRUFBZTtBQUN6RDtBQUNDQyxXQUFRQyxHQUFSLENBQVksNENBQVo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDtBQUNBO0FBQ0E7QUFDQSxFQWZEOztBQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQU4sUUFBT08sT0FBUCxDQUFlQyxXQUFmLENBQTJCTCxXQUEzQixDQUF1QyxVQUFVTSxPQUFWLEVBQW1CO0FBQ3hESixXQUFRQyxHQUFSLENBQVksaUJBQVosRUFBK0JHLFFBQVFDLGVBQXZDO0FBQ0FMLFdBQVFDLEdBQVIsQ0FBWSwyREFBWjtBQUNELEVBSEQ7O0FBS0E7O0FBRUFOLFFBQU9XLFFBQVAsQ0FBZ0JDLFNBQWhCLENBQTBCVCxXQUExQixDQUFzQyxVQUFTVSxPQUFULEVBQWtCO0FBQ3RELE9BQUdBLFlBQVksb0JBQWYsRUFBcUM7QUFDbENSLGFBQVFDLEdBQVIsQ0FBWSw4REFBWjtBQUNGO0FBQ0YsRUFKRDs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0MiLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdiMzE0MTJmMDRlZDg0Y2E5MjM5IiwiLy8gY2hyb21lLnRhYnMuZXhlY3V0ZVNjcmlwdCh7ZmlsZTogJ2luamVjdGVkLmpzJ30pO1xuXG4vLyBsaXN0ZW4gZm9yIG91ciBicm93ZXJBY3Rpb24gdG8gYmUgY2xpY2tlZFxuY2hyb21lLmJyb3dzZXJBY3Rpb24ub25DbGlja2VkLmFkZExpc3RlbmVyKGZ1bmN0aW9uICh0YWIpIHtcblx0Ly8gZm9yIHRoZSBjdXJyZW50IHRhYiwgaW5qZWN0IHRoZSBcImluamVjdC5qc1wiIGZpbGUgJiBleGVjdXRlIGl0XG4gIGNvbnNvbGUubG9nKCdjaHJvbWUuYnJvd3NlckFjdGlvbi5vbkNsaWNrZWQuYWRkTGlzdGVuZXInKTtcbiAgLy8gJC5nZXQoY2hyb21lLmV4dGVuc2lvbi5nZXRVUkwoJy9pbmplY3RlZC5qcycpLFxuICAvLyBcdGZ1bmN0aW9uKGRhdGEpIHtcbiAgLy8gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAvLyBcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0L2phdmFzY3JpcHRcIik7XG4gIC8vIFx0XHRzY3JpcHQuaW5uZXJIVE1MID0gZGF0YTtcbiAgLy8gXHRcdGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAvLyBcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJib2R5XCIpWzBdLnNldEF0dHJpYnV0ZShcIm9uTG9hZFwiLCBcImluamVjdGVkX21haW4oKTtcIik7XG4gIC8vIFx0fVxuICAvLyApO1xuXHQvLyBjaHJvbWUudGFicy5leGVjdXRlU2NyaXB0KHRhYi5pYiwge1xuXHQvLyBcdGZpbGU6ICcuLi9zY3JpcHRzL2luamVjdGVkLmpzJ1xuXHQvLyB9KTtcbn0pO1xuXG4vLyAkLmdldChjaHJvbWUuZXh0ZW5zaW9uLmdldFVSTCgnL2luamVjdGVkLmpzJyksXG4vLyBcdGZ1bmN0aW9uKGRhdGEpIHtcbi8vIFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbi8vIFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHQvamF2YXNjcmlwdFwiKTtcbi8vIFx0XHRzY3JpcHQuaW5uZXJIVE1MID0gZGF0YTtcbi8vIFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbi8vIFx0XHRkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImJvZHlcIilbMF0uc2V0QXR0cmlidXRlKFwib25Mb2FkXCIsIFwiaW5qZWN0ZWRfbWFpbigpO1wiKTtcbi8vIFx0fVxuLy8gKTtcblxuLy8gRW5hYmxlIGNocm9tZXJlbG9hZCBieSB1bmNvbW1lbnRpbmcgdGhpcyBsaW5lOlxuLy8gaW1wb3J0ICdjaHJvbWVyZWxvYWQvZGV2b25seSc7XG5cbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gIGNvbnNvbGUubG9nKCdwcmV2aW91c1ZlcnNpb24nLCBkZXRhaWxzLnByZXZpb3VzVmVyc2lvbik7XG4gIGNvbnNvbGUubG9nKCdjaHJvbWUucnVudGltZS5vbkluc3RhbGxlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAoZGV0YWlscyknKTtcbn0pO1xuXG4vLyBjaHJvbWUuYnJvd3NlckFjdGlvbi5zZXRCYWRnZVRleHQoe3RleHQ6ICfQn9GA0LjQstC10YInfSk7XG5cbmNocm9tZS5jb21tYW5kcy5vbkNvbW1hbmQuYWRkTGlzdGVuZXIoZnVuY3Rpb24oY29tbWFuZCkge1xuICBpZihjb21tYW5kID09PSBcInRvZ2dsZS1mZWF0dXJlLWZvb1wiKSB7XG4gICAgIGNvbnNvbGUubG9nKCd0b2dnbGUtZmVhdHVyZS1mb28gdGFrZS1zY3JlZW4gRXZlbnQgUGFnZSBmb3IgQnJvd3NlciBBY3Rpb24nKTtcbiAgfVxufSk7XG5cbi8vIENocm9tZSAyNCsuIFVzZSBjaHJvbWUuZXhwZXJpbWVudGFsLmNvbW1hbmRzIGluIENocm9tZSAyMy1cbi8vIGNocm9tZS5jb21tYW5kcy5vbkNvbW1hbmQuYWRkTGlzdGVuZXIoZnVuY3Rpb24oY29tbWFuZCkge1xuLy8gICAgIGlmIChjb21tYW5kID09PSAndGVzdC1zaG9ydGN1dCcpIHtcbi8vICAgICAgICAgIC8vIERvIHdoYXRldmVyIHlvdSB3YW50LCBmb3IgaW5zdGFuY2UgY29uc29sZS5sb2cgaW4gdGhlIHRhYjpcbi8vICAgICAgICAgIGNocm9tZS50YWJzLnF1ZXJ5KHthY3RpdmU6dHJ1ZX0sIGZ1bmN0aW9uKHRhYnMpIHtcbi8vICAgICAgICAgICAgICB2YXIgdGFiSWQgPSB0YWJzWzBdLmlkO1xuLy8gICAgICAgICAgICAgIHZhciBjb2RlID0gJ2NvbnNvbGUubG9nKFwiSW50ZXJjZXB0ZWQgQ3RybCtEIVwiKTsnO1xuLy8gICAgICAgICAgICAgIGNocm9tZS50YWJzLmV4ZWN1dGVTY3JpcHQodGFiSWQsIHtjb2RlOiBjb2RlfSk7XG4vLyAgICAgICAgICB9KTtcbi8vICAgICB9XG4vLyB9KTtcblxuXG4vLyBjaHJvbWUuZXh0ZW5zaW9uLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihmdW5jdGlvbihyZXF1ZXN0LCBzZW5kZXIsIHNlbmRSZXNwb25zZSkge1xuLy8gICAgIGlmIChyZXF1ZXN0Lm5hbWUgPT0gJ3NjcmVlbnNob3QnKSB7XG4vLyAgICAgICAgIGNocm9tZS50YWJzLmNhcHR1cmVWaXNpYmxlVGFiKG51bGwsIG51bGwsIGZ1bmN0aW9uKGRhdGFVcmwpIHtcbi8vICAgICAgICAgICAgIHNlbmRSZXNwb25zZSh7IHNjcmVlbnNob3RVcmw6IGRhdGFVcmwgfSk7XG4vLyAgICAgICAgIH0pO1xuLy8gICAgIH1cbi8vICAgICByZXR1cm4gdHJ1ZTtcbi8vIH0pO1xuXG5cbi8vXG4vLyB2YXIgdGFrZVNjcmVlbnNob3QgPSB7XG4vLyBcdC8qKlxuLy8gXHQgKiBAZGVzY3JpcHRpb24gSUQgb2YgY3VycmVudCB0YWJcbi8vIFx0ICogQHR5cGUge051bWJlcn1cbi8vIFx0ICovXG4vLyBcdHRhYklkOiBudWxsLFxuLy9cbi8vIFx0LyoqXG4vLyBcdCAqIEBkZXNjcmlwdGlvbiBDYW52YXMgZWxlbWVudFxuLy8gXHQgKiBAdHlwZSB7T2JqZWN0fVxuLy8gXHQgKi9cbi8vIFx0c2NyZWVuc2hvdENhbnZhczogbnVsbCxcbi8vXG4vLyBcdC8qKlxuLy8gXHQgKiBAZGVzY3JpcHRpb24gMkQgY29udGV4dCBvZiBzY3JlZW5zaG90Q2FudmFzIGVsZW1lbnRcbi8vIFx0ICogQHR5cGUge09iamVjdH1cbi8vIFx0ICovXG4vLyBcdHNjcmVlbnNob3RDb250ZXh0OiBudWxsLFxuLy9cbi8vIFx0LyoqXG4vLyBcdCAqIEBkZXNjcmlwdGlvbiBOdW1iZXIgb2YgcGl4ZWxzIGJ5IHdoaWNoIHRvIG1vdmUgdGhlIHNjcmVlblxuLy8gXHQgKiBAdHlwZSB7TnVtYmVyfVxuLy8gXHQgKi9cbi8vIFx0c2Nyb2xsQnk6IDAsXG4vL1xuLy8gXHQvKipcbi8vIFx0ICogQGRlc2NyaXB0aW9uIFNpemVzIG9mIHBhZ2Vcbi8vIFx0ICogQHR5cGUge09iamVjdH1cbi8vIFx0ICovXG4vLyBcdHNpemU6IHtcbi8vIFx0XHR3aWR0aDogMCxcbi8vIFx0XHRoZWlnaHQ6IDBcbi8vIFx0fSxcbi8vXG4vLyBcdC8qKlxuLy8gXHQgKiBAZGVzY3JpcHRpb24gS2VlcCBvcmlnaW5hbCBwYXJhbXMgb2YgcGFnZVxuLy8gXHQgKiBAdHlwZSB7T2JqZWN0fVxuLy8gXHQgKi9cbi8vIFx0b3JpZ2luYWxQYXJhbXM6IHtcbi8vIFx0XHRvdmVyZmxvdzogXCJcIixcbi8vIFx0XHRzY3JvbGxUb3A6IDBcbi8vIFx0fSxcbi8vXG4vLyBcdC8qKlxuLy8gXHQgKiBAZGVzY3JpcHRpb24gSW5pdGlhbGl6ZSBwbHVnaW5cbi8vIFx0ICovXG4vLyBcdGluaXRpYWxpemU6IGZ1bmN0aW9uICgpIHtcbi8vIFx0XHR0aGlzLnNjcmVlbnNob3RDYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuLy8gXHRcdHRoaXMuc2NyZWVuc2hvdENvbnRleHQgPSB0aGlzLnNjcmVlbnNob3RDYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuLy8gXHRcdHRoaXMuYmluZEV2ZW50cygpO1xuLy8gXHR9LFxuLy9cbi8vIFx0LyoqXG4vLyBcdCAqIEBkZXNjcmlwdGlvbiBCaW5kIHBsdWdpbiBldmVudHNcbi8vIFx0ICovXG4vLyBcdGJpbmRFdmVudHM6IGZ1bmN0aW9uICgpIHtcbi8vIFx0XHQvLyBoYW5kbGUgb25DbGljayBwbHVnaW4gaWNvbiBldmVudFxuLy8gXHRcdGNocm9tZS5icm93c2VyQWN0aW9uLm9uQ2xpY2tlZC5hZGRMaXN0ZW5lcihmdW5jdGlvbiAodGFiKSB7XG4vLyBcdFx0XHR0aGlzLnRhYklkID0gdGFiLmlkO1xuLy9cbi8vIFx0XHRcdGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRhYi5pZCwge1xuLy8gXHRcdFx0XHRcIm1zZ1wiOiBcImdldFBhZ2VEZXRhaWxzXCJcbi8vIFx0XHRcdH0pO1xuLy8gXHRcdH0uYmluZCh0aGlzKSk7XG4vL1xuLy8gXHRcdC8vIGhhbmRsZSBjaHJvbWUgcmVxdWVzdHNcbi8vIFx0XHRjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoZnVuY3Rpb24gKHJlcXVlc3QsIHNlbmRlciwgY2FsbGJhY2spIHtcbi8vIFx0XHRcdGlmIChyZXF1ZXN0Lm1zZyA9PT0gXCJzZXRQYWdlRGV0YWlsc1wiKSB7XG4vLyBcdFx0XHRcdHRoaXMuc2l6ZSA9IHJlcXVlc3Quc2l6ZTtcbi8vIFx0XHRcdFx0dGhpcy5zY3JvbGxCeSA9IHJlcXVlc3Quc2Nyb2xsQnk7XG4vLyBcdFx0XHRcdHRoaXMub3JpZ2luYWxQYXJhbXMgPSByZXF1ZXN0Lm9yaWdpbmFsUGFyYW1zO1xuLy9cbi8vIFx0XHRcdFx0Ly8gc2V0IHdpZHRoICYgaGVpZ2h0IG9mIGNhbnZhcyBlbGVtZW50XG4vLyBcdFx0XHRcdHRoaXMuc2NyZWVuc2hvdENhbnZhcy53aWR0aCA9IHRoaXMuc2l6ZS53aWR0aDtcbi8vIFx0XHRcdFx0dGhpcy5zY3JlZW5zaG90Q2FudmFzLmhlaWdodCA9IHRoaXMuc2l6ZS5oZWlnaHQ7XG4vL1xuLy8gXHRcdFx0XHR0aGlzLnNjcm9sbFRvKDApO1xuLy8gXHRcdFx0fSBlbHNlIGlmIChyZXF1ZXN0Lm1zZyA9PT0gXCJjYXB0dXJlUGFnZVwiKSB7XG4vLyBcdFx0XHRcdHRoaXMuY2FwdHVyZVBhZ2UocmVxdWVzdC5wb3NpdGlvbiwgcmVxdWVzdC5sYXN0Q2FwdHVyZSk7XG4vLyBcdFx0XHR9XG4vLyBcdFx0fS5iaW5kKHRoaXMpKTtcbi8vIFx0fSxcbi8vXG4vLyBcdC8qKlxuLy8gXHQgKiBAZGVzY3JpcHRpb24gU2VuZCByZXF1ZXN0IHRvIHNjcm9sbCBwYWdlIG9uIGdpdmVuIHBvc2l0aW9uXG4vLyBcdCAqIEBwYXJhbSB7TnVtYmVyfSBwb3NpdGlvblxuLy8gXHQgKi9cbi8vIFx0c2Nyb2xsVG86IGZ1bmN0aW9uIChwb3NpdGlvbikge1xuLy8gXHRcdGNocm9tZS50YWJzLnNlbmRNZXNzYWdlKHRoaXMudGFiSWQsIHtcbi8vIFx0XHRcdFwibXNnXCI6IFwic2Nyb2xsUGFnZVwiLFxuLy8gXHRcdFx0XCJzaXplXCI6IHRoaXMuc2l6ZSxcbi8vIFx0XHRcdFwic2Nyb2xsQnlcIjogdGhpcy5zY3JvbGxCeSxcbi8vIFx0XHRcdFwic2Nyb2xsVG9cIjogcG9zaXRpb25cbi8vIFx0XHR9KTtcbi8vIFx0fSxcbi8vXG4vLyBcdC8qKlxuLy8gXHQgKiBAZGVzY3JpcHRpb24gVGFrZXMgc2NyZWVuc2hvdCBvZiB2aXNpYmxlIGFyZWEgYW5kIG1lcmdlcyBpdFxuLy8gXHQgKiBAcGFyYW0ge051bWJlcn0gcG9zaXRpb25cbi8vIFx0ICogQHBhcmFtIHtCb29sZWFufSBsYXN0Q2FwdHVyZVxuLy8gXHQgKi9cbi8vIFx0Y2FwdHVyZVBhZ2U6IGZ1bmN0aW9uIChwb3NpdGlvbiwgbGFzdENhcHR1cmUpIHtcbi8vIFx0XHR2YXIgc2VsZiA9IHRoaXM7XG4vL1xuLy8gXHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuLy8gXHRcdFx0Y2hyb21lLnRhYnMuY2FwdHVyZVZpc2libGVUYWIobnVsbCwge1xuLy8gXHRcdFx0XHRcImZvcm1hdFwiOiBcInBuZ1wiXG4vLyBcdFx0XHR9LCBmdW5jdGlvbiAoZGF0YVVSSSkge1xuLy8gXHRcdFx0XHR2YXIgbmV3V2luZG93LFxuLy8gXHRcdFx0XHRcdGltYWdlID0gbmV3IEltYWdlKCk7XG4vL1xuLy8gXHRcdFx0XHRpZiAodHlwZW9mIGRhdGFVUkkgIT09IFwidW5kZWZpbmVkXCIpIHtcbi8vIFx0XHRcdFx0XHRpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbigpIHtcbi8vIFx0XHRcdFx0XHRcdHNlbGYuc2NyZWVuc2hvdENvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCBwb3NpdGlvbik7XG4vL1xuLy8gXHRcdFx0XHRcdFx0aWYgKGxhc3RDYXB0dXJlKSB7XG4vLyBcdFx0XHRcdFx0XHRcdHNlbGYucmVzZXRQYWdlKCk7XG4vLyBcdFx0XHRcdFx0XHRcdG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKCk7XG4vLyBcdFx0XHRcdFx0XHRcdG5ld1dpbmRvdy5kb2N1bWVudC53cml0ZShcIjxzdHlsZSB0eXBlPSd0ZXh0L2Nzcyc+Ym9keSB7bWFyZ2luOiAwO308L3N0eWxlPlwiKTtcbi8vIFx0XHRcdFx0XHRcdFx0bmV3V2luZG93LmRvY3VtZW50LndyaXRlKFwiPGltZyBzcmM9J1wiICsgc2VsZi5zY3JlZW5zaG90Q2FudmFzLnRvRGF0YVVSTChcImltYWdlL3BuZ1wiKSArIFwiJy8+XCIpO1xuLy8gXHRcdFx0XHRcdFx0fSBlbHNlIHtcbi8vIFx0XHRcdFx0XHRcdFx0c2VsZi5zY3JvbGxUbyhwb3NpdGlvbiArIHNlbGYuc2Nyb2xsQnkpO1xuLy8gXHRcdFx0XHRcdFx0fVxuLy8gXHRcdFx0XHRcdH07XG4vL1xuLy8gXHRcdFx0XHRcdGltYWdlLnNyYyA9IGRhdGFVUkk7XG4vLyBcdFx0XHRcdH0gZWxzZSB7XG4vLyBcdFx0XHRcdFx0Y2hyb21lLnRhYnMuc2VuZE1lc3NhZ2Uoc2VsZi50YWJJZCwge1xuLy8gXHRcdFx0XHRcdFx0XCJtc2dcIjogXCJzaG93RXJyb3JcIixcbi8vIFx0XHRcdFx0XHRcdFwib3JpZ2luYWxQYXJhbXNcIjogc2VsZi5vcmlnaW5hbFBhcmFtc1xuLy8gXHRcdFx0XHRcdH0pO1xuLy8gXHRcdFx0XHR9XG4vLyBcdFx0XHR9KTtcbi8vIFx0XHR9LCAzMDApO1xuLy8gXHR9LFxuLy9cbi8vIFx0LyoqXG4vLyBcdCAqIEBkZXNjcmlwdGlvbiBTZW5kIHJlcXVlc3QgdG8gc2V0IG9yaWdpbmFsIHBhcmFtcyBvZiBwYWdlXG4vLyBcdCAqL1xuLy8gXHRyZXNldFBhZ2U6IGZ1bmN0aW9uICgpIHtcbi8vIFx0XHRjaHJvbWUudGFicy5zZW5kTWVzc2FnZSh0aGlzLnRhYklkLCB7XG4vLyBcdFx0XHRcIm1zZ1wiOiBcInJlc2V0UGFnZVwiLFxuLy8gXHRcdFx0XCJvcmlnaW5hbFBhcmFtc1wiOiB0aGlzLm9yaWdpbmFsUGFyYW1zXG4vLyBcdFx0fSk7XG4vLyBcdH1cbi8vIH07XG4vL1xuLy9cbi8vIHRha2VTY3JlZW5zaG90LmluaXRpYWxpemUoKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC9zY3JpcHRzL2JhY2tncm91bmQuanMiXSwic291cmNlUm9vdCI6IiJ9