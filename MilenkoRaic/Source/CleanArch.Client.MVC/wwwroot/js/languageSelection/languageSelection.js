/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*************************************!*\
  !*** ./src/js/languageSelection.js ***!
  \*************************************/
//ACTIVE CLASS INDICATOR FUNCTION
$('.language-nav-menu-link').click(function () {
  $('.language-nav-menu-link').removeClass('is-active');
  const btn = $(this);
  btn.addClass('is-active');
  $('.lang-navbar-toggler').click();
});
$('.language-nav-menu-btn').click(function () {
  $('.language-nav-menu-icon').toggleClass('is-active');
  $('.language-nav-menu').stop().fadeToggle();
});
$('.language-nav-menu-icon').click(function () {
  $(this).toggleClass('is-active');
  $('.language-nav-menu').stop().fadeToggle();
});
$('.language-nav-language').click(function () {
  $(this).find('.language-nav-language-chevron').toggleClass('is-active');
  $(this).find('.language-nav-language-pickers').stop().fadeToggle();
  $(this).find('.language-nav-language-pickers-picker').click(function () {
    $('.language-nav-language-pickers-picker').removeClass('is-active');
    $(this).addClass('is-active');
  });
}); //END ACTIVE CLASS INDICATOR FUNCTION
//SUBMIT SELECTED LANGUAGE FUNCTION

(function () {
  const selectLanguageForm = $('#select-language');
  const languageInput = $('#language');
  $('#swedish-language').click(function () {
    var newLang = $(this).data('language');
    languageInput.val(newLang);
    selectLanguageForm.submit();
  });
  $('#english-language').click(function () {
    var newLang = $(this).data('language');
    languageInput.val(newLang);
    selectLanguageForm.submit();
  });
})(); //END SUBMIT SELECTED LANGUAGE FUNCTION
/******/ })()
;
//# sourceMappingURL=languageSelection.js.map