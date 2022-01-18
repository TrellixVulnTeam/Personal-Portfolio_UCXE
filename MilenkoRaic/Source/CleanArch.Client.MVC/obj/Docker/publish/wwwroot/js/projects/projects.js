/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/js/projects.js ***!
  \****************************/
$(function () {
  $('.card-btn-action').click(function () {
    var card = $(this).parent('.portfolio-page-projects-card');
    var icon = $(this).find('.card-btn-icon');
    console.log("CLICK");
    icon.addClass('fa fa-cog fa-spin');

    if (card.hasClass('portfolio-page-projects-card-active')) {
      card.removeClass('portfolio-page-projects-card-active');
      icon.removeClass('fas fa-times');
      icon.removeClass('fa fa-cog fa-spin');
      icon.addClass('fa fa-gem');
    } else {
      card.addClass('portfolio-page-projects-card-active');
      icon.removeClass('fa fa-gem');
      icon.removeClass('fa fa-cog fa-spin');
      icon.addClass('fas fa-times');
    }
  });
});
/******/ })()
;
//# sourceMappingURL=projects.js.map