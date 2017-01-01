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
	
	/* global AFRAME */
	
	/**
	 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
	 * back in.
	 */
	AFRAME.registerComponent('set-image', {
	  schema: {
	    on: { type: 'string' },
	    target: { type: 'selector' },
	    src: { type: 'string' },
	    dur: { type: 'number', default: 300 }
	  },
	
	  init: function init() {
	    var data = this.data;
	    var el = this.el;
	
	    this.setupFadeAnimation();
	
	    el.addEventListener(data.on, function () {
	      // Fade out image.
	      data.target.emit('set-image-fade');
	      // Wait for fade to complete.
	      setTimeout(function () {
	        // Set image.
	        data.target.setAttribute('material', 'src', data.src);
	      }, data.dur);
	    });
	  },
	
	  /**
	   * Setup fade-in + fade-out.
	   */
	  setupFadeAnimation: function setupFadeAnimation() {
	    var data = this.data;
	    var targetEl = this.data.target;
	
	    // Only set up once.
	    if (targetEl.dataset.setImageFadeSetup) {
	      return;
	    }
	    targetEl.dataset.setImageFadeSetup = true;
	
	    // Create animation.
	    targetEl.setAttribute('animation__fade', {
	      property: 'material.color',
	      startEvents: 'set-image-fade',
	      dir: 'alternate',
	      dur: data.dur,
	      from: '#FFF',
	      to: '#000'
	    });
	  }
	});

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2RlYmZhMDk2YmFkMjQ4NDdhNjY/NDMxZSoqKioqKiIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9zZXQtaW1hZ2UuanMiXSwibmFtZXMiOlsiQUZSQU1FIiwicmVnaXN0ZXJDb21wb25lbnQiLCJzY2hlbWEiLCJvbiIsInR5cGUiLCJ0YXJnZXQiLCJzcmMiLCJkdXIiLCJkZWZhdWx0IiwiaW5pdCIsImRhdGEiLCJlbCIsInNldHVwRmFkZUFuaW1hdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbWl0Iiwic2V0VGltZW91dCIsInNldEF0dHJpYnV0ZSIsInRhcmdldEVsIiwiZGF0YXNldCIsInNldEltYWdlRmFkZVNldHVwIiwicHJvcGVydHkiLCJzdGFydEV2ZW50cyIsImRpciIsImZyb20iLCJ0byJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFFQTs7OztBQUlBQSxRQUFPQyxpQkFBUCxDQUF5QixXQUF6QixFQUFzQztBQUNwQ0MsV0FBUTtBQUNOQyxTQUFJLEVBQUNDLE1BQU0sUUFBUCxFQURFO0FBRU5DLGFBQVEsRUFBQ0QsTUFBTSxVQUFQLEVBRkY7QUFHTkUsVUFBSyxFQUFDRixNQUFNLFFBQVAsRUFIQztBQUlORyxVQUFLLEVBQUNILE1BQU0sUUFBUCxFQUFpQkksU0FBUyxHQUExQjtBQUpDLElBRDRCOztBQVFwQ0MsU0FBTSxnQkFBWTtBQUNoQixTQUFJQyxPQUFPLEtBQUtBLElBQWhCO0FBQ0EsU0FBSUMsS0FBSyxLQUFLQSxFQUFkOztBQUVBLFVBQUtDLGtCQUFMOztBQUVBRCxRQUFHRSxnQkFBSCxDQUFvQkgsS0FBS1AsRUFBekIsRUFBNkIsWUFBWTtBQUN2QztBQUNBTyxZQUFLTCxNQUFMLENBQVlTLElBQVosQ0FBaUIsZ0JBQWpCO0FBQ0E7QUFDQUMsa0JBQVcsWUFBWTtBQUNyQjtBQUNBTCxjQUFLTCxNQUFMLENBQVlXLFlBQVosQ0FBeUIsVUFBekIsRUFBcUMsS0FBckMsRUFBNENOLEtBQUtKLEdBQWpEO0FBQ0QsUUFIRCxFQUdHSSxLQUFLSCxHQUhSO0FBSUQsTUFSRDtBQVNELElBdkJtQzs7QUF5QnBDOzs7QUFHQUssdUJBQW9CLDhCQUFZO0FBQzlCLFNBQUlGLE9BQU8sS0FBS0EsSUFBaEI7QUFDQSxTQUFJTyxXQUFXLEtBQUtQLElBQUwsQ0FBVUwsTUFBekI7O0FBRUE7QUFDQSxTQUFJWSxTQUFTQyxPQUFULENBQWlCQyxpQkFBckIsRUFBd0M7QUFBRTtBQUFTO0FBQ25ERixjQUFTQyxPQUFULENBQWlCQyxpQkFBakIsR0FBcUMsSUFBckM7O0FBRUE7QUFDQUYsY0FBU0QsWUFBVCxDQUFzQixpQkFBdEIsRUFBeUM7QUFDdkNJLGlCQUFVLGdCQUQ2QjtBQUV2Q0Msb0JBQWEsZ0JBRjBCO0FBR3ZDQyxZQUFLLFdBSGtDO0FBSXZDZixZQUFLRyxLQUFLSCxHQUo2QjtBQUt2Q2dCLGFBQU0sTUFMaUM7QUFNdkNDLFdBQUk7QUFObUMsTUFBekM7QUFRRDtBQTdDbUMsRUFBdEMsRSIsImZpbGUiOiJzZXQtaW1hZ2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBjZGViZmEwOTZiYWQyNDg0N2E2NiIsIi8qIGdsb2JhbCBBRlJBTUUgKi9cblxuLyoqXG4gKiBDb21wb25lbnQgdGhhdCBsaXN0ZW5zIHRvIGFuIGV2ZW50LCBmYWRlcyBvdXQgYW4gZW50aXR5LCBzd2FwcyB0aGUgdGV4dHVyZSwgYW5kIGZhZGVzIGl0XG4gKiBiYWNrIGluLlxuICovXG5BRlJBTUUucmVnaXN0ZXJDb21wb25lbnQoJ3NldC1pbWFnZScsIHtcbiAgc2NoZW1hOiB7XG4gICAgb246IHt0eXBlOiAnc3RyaW5nJ30sXG4gICAgdGFyZ2V0OiB7dHlwZTogJ3NlbGVjdG9yJ30sXG4gICAgc3JjOiB7dHlwZTogJ3N0cmluZyd9LFxuICAgIGR1cjoge3R5cGU6ICdudW1iZXInLCBkZWZhdWx0OiAzMDB9XG4gIH0sXG5cbiAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xuICAgIHZhciBlbCA9IHRoaXMuZWw7XG5cbiAgICB0aGlzLnNldHVwRmFkZUFuaW1hdGlvbigpO1xuXG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihkYXRhLm9uLCBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBGYWRlIG91dCBpbWFnZS5cbiAgICAgIGRhdGEudGFyZ2V0LmVtaXQoJ3NldC1pbWFnZS1mYWRlJyk7XG4gICAgICAvLyBXYWl0IGZvciBmYWRlIHRvIGNvbXBsZXRlLlxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFNldCBpbWFnZS5cbiAgICAgICAgZGF0YS50YXJnZXQuc2V0QXR0cmlidXRlKCdtYXRlcmlhbCcsICdzcmMnLCBkYXRhLnNyYyk7XG4gICAgICB9LCBkYXRhLmR1cik7XG4gICAgfSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHVwIGZhZGUtaW4gKyBmYWRlLW91dC5cbiAgICovXG4gIHNldHVwRmFkZUFuaW1hdGlvbjogZnVuY3Rpb24gKCkge1xuICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xuICAgIHZhciB0YXJnZXRFbCA9IHRoaXMuZGF0YS50YXJnZXQ7XG5cbiAgICAvLyBPbmx5IHNldCB1cCBvbmNlLlxuICAgIGlmICh0YXJnZXRFbC5kYXRhc2V0LnNldEltYWdlRmFkZVNldHVwKSB7IHJldHVybjsgfVxuICAgIHRhcmdldEVsLmRhdGFzZXQuc2V0SW1hZ2VGYWRlU2V0dXAgPSB0cnVlO1xuXG4gICAgLy8gQ3JlYXRlIGFuaW1hdGlvbi5cbiAgICB0YXJnZXRFbC5zZXRBdHRyaWJ1dGUoJ2FuaW1hdGlvbl9fZmFkZScsIHtcbiAgICAgIHByb3BlcnR5OiAnbWF0ZXJpYWwuY29sb3InLFxuICAgICAgc3RhcnRFdmVudHM6ICdzZXQtaW1hZ2UtZmFkZScsXG4gICAgICBkaXI6ICdhbHRlcm5hdGUnLFxuICAgICAgZHVyOiBkYXRhLmR1cixcbiAgICAgIGZyb206ICcjRkZGJyxcbiAgICAgIHRvOiAnIzAwMCdcbiAgICB9KTtcbiAgfVxufSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9zZXQtaW1hZ2UuanMiXSwic291cmNlUm9vdCI6IiJ9