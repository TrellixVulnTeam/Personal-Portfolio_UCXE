/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_0__);


(function ($) {
  "use strict"; //About page

  $(".about-text").on('click', function () {
    $('html, body').animate({
      scrollTop: 100
    }, 'slow');
    $("body").addClass("disable-scroll");
    $("body").addClass("about-on");
  });
  $(".about-close").on('click', function () {
    $("body").removeClass("about-on");
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
    $("body").removeClass("disable-scroll");
  }); //appointment page

  $(".appointment-text").on('click', function () {
    $('html, body').animate({
      scrollTop: 100
    }, 'slow');
    $("body").addClass("disable-scroll");
    $("body").addClass("appointment-on");
  });
  $(".appointment-close").on('click', function () {
    $("body").removeClass("appointment-on");
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
    $("body").removeClass("disable-scroll");
  }); //Resume portfolio page

  $(".resume").on('click', function () {
    $('html, body').animate({
      scrollTop: 100
    }, 'slow');
    $("body").addClass("disable-scroll");
    $("body").addClass("resume-on");
  });
  $(".resume-close").on('click', function () {
    $("body").removeClass("resume-on");
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
    $("body").removeClass("disable-scroll");
  }); //Projects portfolio page

  $(".projects").on('click', function () {
    $('html, body').animate({
      scrollTop: 100
    }, 'slow');
    $("body").addClass("disable-scroll");
    $("body").addClass("projects-on");
  });
  $(".projects-close").on('click', function () {
    $("body").removeClass("projects-on");
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
    $("body").removeClass("disable-scroll");
  }); //Skills portfolio page

  $(".skills").on('click', function () {
    $('html, body').animate({
      scrollTop: 100
    }, 'slow');
    $("body").addClass("disable-scroll");
    $("body").addClass("skills-on");
  });
  $(".skills-close").on('click', function () {
    $("body").removeClass("skills-on");
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
    $("body").removeClass("disable-scroll");
  });
})(jQuery);

$(".social-nav-text").click(function (event) {
  $("#social-nav__toggle").click();
});

(function () {
  "use strict"; //Prevent circle nav last unorded list item redirection if user has not hit toggle button

  $(".social-nav__link").click(function (event) {
    if (!$(".c-mask").hasClass('is-active')) {
      event.preventDefault();
    }
  });
  /**
   * Cache variables
   */

  var menu = document.querySelector("#social-nav");
  var toggle = document.querySelector("#social-nav__toggle");
  var mask = document.createElement("div");
  var activeClass = "is-active";
  /**
   * Create mask
   */

  mask.classList.add("c-mask");
  document.body.appendChild(mask);
  /**
   * Listen for clicks on the toggle
   */

  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    toggle.classList.contains(activeClass) ? deactivateMenu() : activateMenu();
  });
  /**
   * Listen for clicks on the mask, which should close the menu
   */

  mask.addEventListener("click", function () {
    deactivateMenu();
  });
  /**
   * Activate the menu 
   */

  function activateMenu() {
    menu.classList.add(activeClass);
    toggle.classList.add(activeClass);
    mask.classList.add(activeClass);
  }
  /**
   * Deactivate the menu 
   */


  function deactivateMenu() {
    menu.classList.remove(activeClass);
    toggle.classList.remove(activeClass);
    mask.classList.remove(activeClass);
  }
})();

const url = "https://milenkoraic.me";
const title = "Milenko Raic | Digital Hub";
const text = "";
const link = url;
const labels = "Passionate and reliable IT engineer and digital media developer";
const annotation = "Well-focused and committed to innovation and solutions. One of those who say \"We can DO IT!\" instead of \"It\'s impossible!\"";

function shareOnFacebook() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url + '&title=' + title, 'facebook-share-dialog', "width=626, height=436");
}

window.shareOnFacebook = shareOnFacebook;

function shareOnTwitter() {
  window.open('https://twitter.com/share?' + url + '&text=' + text + '&url=' + link, '_blank', 'width=626,height=436').focus();
}

;
window.shareOnTwitter = shareOnTwitter;

function shareOnLinkedIn() {
  window.open('http://www.linkedin.com/shareArticle?mini=true&url=' + url + '&text=' + text + '&url=' + link, '_blank', 'width=626,height=436').focus();
}

;
window.shareOnLinkedIn = shareOnLinkedIn;

function createGoogleBookmark() {
  window.open('http://www.google.com/bookmarks/mark?op=edit&bkmk=' + url + '&output=popup&title=' + title + '&labels=' + labels + '&annotation=' + annotation);
}

;
window.createGoogleBookmark = createGoogleBookmark; // SUBSCRIBE - SUBSCRIBE FORM - SUBMIT FUNCTION

$(function () {
  $('#submit-subscribtion-form').click(function () {
    var form = $('#subscribe-form');
    form.validate();

    if (!form.valid()) {
      return;
    } else {
      $('#subscribe-form').submit(function (e) {
        e.preventDefault();
        var formData = ConvertFormToJSON(this);
        $.ajax({
          type: 'POST',
          contentType: "application/json",
          url: "subscribe/submit",
          data: JSON.stringify(formData)
        }).done(function () {
          showSucessMessage();
        }).fail(function () {
          showErrorMesagge();
        });
      });

      function ConvertFormToJSON(form) {
        var array = jQuery(form).serializeArray();
        var json = {};
        jQuery.each(array, function () {
          json[this.name] = this.value || '';
        });
        return json;
      }
    }
  });
});

function resetUserData() {
  $('input').val('');
}

;

function showLoader() {
  resetUserData();
  $('.loading-mask').show();
  $('.loading').show();
  setTimeout(function () {
    $('.loading').hide();
  }, 2500);
}

;

function showSucessMessage() {
  showLoader();
  setTimeout(function () {
    $('.loading-mask').show();
    $('.sent-message').show();
  }, 2500);
  setTimeout(function () {
    window.location.reload();
  }, 7000);
}

;

function showErrorMesagge() {
  showLoader();
  setTimeout(function () {
    $('.loading-mask').show();
    $('.error-message').show();
  }, 2500);
  setTimeout(function () {
    window.location.reload();
  }, 7000);
}

;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"home": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkwebpack_starter"] = self["webpackChunkwebpack_starter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["defaultVendors"], () => (__webpack_require__("./src/js/home.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=home.js.map