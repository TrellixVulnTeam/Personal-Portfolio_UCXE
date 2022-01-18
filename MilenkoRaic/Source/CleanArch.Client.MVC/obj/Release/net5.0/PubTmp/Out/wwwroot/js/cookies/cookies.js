/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/js/cookies.js ***!
  \***************************/
//GDPR COOKIES - BUTTONS FUNCTION
$('#buttonSelectedCookies').click(function () {
  if ($('.cookies-module').hasClass('off')) {
    $('.cookie-modal').fadeOut();
    console.log("NO");
  } else {
    WriteTrackingCookie();
    $('.cookie-modal').fadeOut();
    console.log("YES");
  }
}); // GDPR COOKIE CONSENT - ACCEPT SELECTED COOKIES BUTTON CLICK FUNCTION

(function () {
  const buttonSelectedCookies = document.querySelector("#buttonSelectedCookies[data-cookie-string]");

  if (buttonSelectedCookies) {
    buttonSelectedCookies.addEventListener("click", function (event) {
      document.cookie = buttonSelectedCookies.dataset.cookieString;
      $("body").removeClass("disable-scroll");
    }, false);
  }
})(); // GDPR COOKIE CONSENT - CREATE TRACKING COOKIE FUNCTION


function WriteTrackingCookie() {
  var now = new Date();
  var time = now.getTime();
  var expireTime = time + 365 * 24 * 60 * 60 * 1000;
  now.setTime(expireTime);
  document.cookie = ".CanTrack =" + "true" + ';expires=' + now.toGMTString() + ";SameSite=Lax";
}

var cookieTL;
var topPiecesTL;
var bottomPiecesTL;
var cookieIcon = document.getElementById('cookie-icon');
var cookieModule = document.getElementById('cookies-module');
var toggle = document.getElementById('cookie-toggle');
var toggleTrack = document.getElementById('track');
var toggleStatus = document.getElementById('cookie-status');
var toggleState = true;
var cookiesModuleVisible = true;

function initCookieAnimation() {
  TweenLite.defaultEase = Quad.easeOut;
  topPiecesTL = new TimelineMax({
    paused: false
  });
  topPiecesTL.timeScale(1);
  topPiecesTL.to('#top-pieces polygon:nth-of-type(1)', 1, {
    transformOrigin: "50% 50%",
    rotation: "2deg",
    y: -1,
    x: 5
  }, "0").to('#top-pieces polygon:nth-of-type(2)', 1, {
    transformOrigin: "50% 50%",
    rotation: "4deg",
    y: -4,
    x: 4
  }, "0").to('#top-pieces polygon:nth-of-type(3)', 1, {
    transformOrigin: "50% 50%",
    rotation: "2deg",
    y: 0,
    x: 1
  }, "0").to('#top-pieces polygon:nth-of-type(4)', 1, {
    transformOrigin: "50% 50%",
    y: -2,
    x: 0
  }, "0").to('#top-pieces polygon:nth-of-type(5)', 1, {
    transformOrigin: "50% 50%",
    y: -2,
    x: -1
  }, "0").to('#top-pieces polygon:nth-of-type(6)', 1, {
    transformOrigin: "50% 50%",
    rotation: "4deg",
    y: -5,
    x: 1
  }, "0").to('#top-pieces polygon:nth-of-type(7)', 1, {
    transformOrigin: "50% 50%",
    y: -1,
    x: -1
  }, "0");
  bottomPiecesTL = new TimelineMax({
    paused: false
  });
  bottomPiecesTL.timeScale(1);
  bottomPiecesTL.to('#bottom-pieces polygon:nth-of-type(1)', 1, {
    transformOrigin: "50% 50%",
    rotation: "2deg",
    y: 3,
    x: 2
  }, "0").to('#bottom-pieces polygon:nth-of-type(2)', 1, {
    transformOrigin: "50% 50%",
    rotation: "4deg",
    y: 4,
    x: 4
  }, "0").to('#bottom-pieces polygon:nth-of-type(3)', 1, {
    transformOrigin: "50% 50%",
    rotation: "2deg",
    y: 4,
    x: 5
  }, "0").to('#bottom-pieces polygon:nth-of-type(4)', 1, {
    transformOrigin: "50% 50%",
    y: 5,
    x: 3
  }, "0").to('#bottom-pieces polygon:nth-of-type(5)', 1, {
    transformOrigin: "50% 50%",
    y: 4,
    x: 2
  }, "0").to('#bottom-pieces polygon:nth-of-type(6)', 1, {
    transformOrigin: "50% 50%",
    rotation: "4deg",
    y: 5,
    x: 1
  }, "0").to('#bottom-pieces polygon:nth-of-type(7)', 1, {
    transformOrigin: "50% 50%",
    y: -1,
    x: -1
  }, "0");
  cookieTL = new TimelineMax({
    paused: true,
    delay: 0,
    repeat: 0,
    repeatDelay: 1,
    yoyo: false
  });
  cookieTL.to('#plate', 1, {
    x: -50,
    ease: Quad.easeInOut
  }, "0").to('#cookie-svg', 1, {
    transformOrigin: "50% 50%",
    rotation: "360deg",
    ease: Quad.easeInOut
  }, "0").to('#bottom-wedge', 1, {
    y: 4,
    rotation: "4deg",
    transformOrigin: "50% 50%",
    ease: Quad.easeInOut
  }, "0").to('#top-wedge', 1, {
    y: -5,
    rotation: "-5deg",
    transformOrigin: "50% 50%",
    ease: Quad.easeInOut
  }, "0").to('#right-wedge', 1, {
    x: 5,
    y: 1,
    rotation: "2deg",
    transformOrigin: "50% 50%",
    ease: Quad.easeInOut
  }, "0").to('#middle-crumb', 1, {
    transformOrigin: "50% 50%",
    rotation: "2deg",
    x: 3,
    y: 4,
    ease: Quad.easeInOut
  }, "0").add(topPiecesTL, "0").add(bottomPiecesTL, "0").to('#bottom-wedge', 1, {
    scaleX: .7,
    scaleY: .7,
    opacity: 1,
    ease: Quad.easeInOut
  }, "0").to('#top-wedge', 1, {
    scaleX: .7,
    scaleY: .7,
    opacity: 1,
    ease: Quad.easeInOut
  }, "0").to('#right-wedge', 1, {
    scaleX: .7,
    scaleY: .7,
    opacity: 1,
    ease: Quad.easeInOut
  }, "0"); //cookieTL.play();

  cookieTL.timeScale(1.5);
  toggle.addEventListener('click', onToggle);
  cookieIcon.addEventListener('click', onCookieIconClick);
}

function onCookieIconClick(e) {
  e.preventDefault();

  if (cookiesModuleVisible) {
    // visible currently, so hide
    TweenMax.to(cookieModule, 1, {
      height: 0,
      ease: Quad.easeInOut
    });
    cookiesModuleVisible = false;
  } else {
    // hidden currently, so show
    TweenMax.set(cookieModule, {
      height: "auto"
    });
    TweenMax.from(cookieModule, 1, {
      height: 0,
      ease: Quad.easeInOut
    });
    cookiesModuleVisible = true;
  }

  cookieIcon.classList.toggle('active');
}

function onToggle() {
  if (toggleState) {
    // on currently, turn off
    cookieTL.play();
    cookieModule.classList.toggle('off'); //toggle.classList.toggle('off');
    //toggleStatus.classList.toggle('off');

    toggleStatus.innerHTML = "OFF";
    toggleState = false;
  } else {
    // off currently, turn on
    cookieTL.reverse();
    cookieModule.classList.toggle('off'); //toggle.classList.toggle('off');
    //toggleStatus.classList.toggle('off');

    toggleStatus.innerHTML = "ON";
    toggleState = true;
  }
}

initCookieAnimation();
setTimeout(function () {
  $('.loading-mask').hide();
}, 10000);
/******/ })()
;
//# sourceMappingURL=cookies.js.map