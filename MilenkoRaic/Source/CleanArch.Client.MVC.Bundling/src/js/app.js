import '../sass/app.scss';
var $ = require('jquery');
import 'jquery-easing';
import {validate} from 'jquery-validation';
import 'bootstrap';
import 'bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons';
import 'boxicons/css/boxicons.min.css';
import 'bootstrap-icons/font/bootstrap-icons.json';
import AOS from 'aos';
import 'aos/dist/aos.js';
import 'aos/dist/aos.css';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import Isotope from 'isotope-layout';
import 'isotope-layout/dist/isotope.pkgd.min';
import 'waypoints/lib/noframework.waypoints.min';
import Typed from 'typed.js';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import 'gsap';



if($(window).scrollTop() > $(window).height()){
  $("#header-strip").addClass('scrolled'); 
}
else{
  $("#header-strip").removeClass('scrolled');
}

$(".dropdown").on({
  click: function(){
    $(this).closest('li')
          .find('.submenu')
          .toggleClass('submenu-active');
    $(this).closest('li')
          .find('.submenu-chevron')
          .toggleClass('submenu-chevron-active');
  },
  mouseenter: function () {
    $(this).closest('li')
          .find('.submenu')
          .addClass('submenu-active');
    $(this).closest('li')
          .find('.submenu-chevron')
          .toggleClass('submenu-chevron-active');
  },
  mouseleave: function () {
    $(this).closest('li')
          .find('.submenu')
          .removeClass('submenu-active');
    $(this).closest('li')
          .find('.submenu-chevron')
          .removeClass('submenu-chevron-active');
  }
});

//ACTIVE ROUTE INDICATING FUNCTION ---------------------------------------------------------------------
var matchThis = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
if(matchThis.length === 2){
  $('.home-link').addClass('is-active');
}
else{
  $('.navbar').find("a[href*='"+ matchThis +"']").addClass('is-active');
}

//LAYOUT - SECTION ---------------------------------------------------------------------------------
$('.copyright').append(new Date().getFullYear() + ".");

(function() {
    "use strict";
  
    /**
     * Easy selector helper function
     */
    const select = (el, all = false) => {
      el = el.trim();
      if (all) {
        return [...document.querySelectorAll(el)];
      } else {
        return document.querySelector(el);
      }
    };
  
    /**
     * Easy event listener function
     */
    const on = (type, el, listener, all = false) => {
      let selectEl = select(el, all);
      if (selectEl) {
        if (all) {
          selectEl.forEach(e => e.addEventListener(type, listener));
        } else {
          selectEl.addEventListener(type, listener);
        }
      }
    };
  
    /**
     * Easy on scroll event listener 
     */
    const onscroll = (el, listener) => {
      el.addEventListener('scroll', listener);
    };
  
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select('.navbar .scrollto', true);
    const navbarlinksActive = () => {
      let position = window.scrollY;
      navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (position >= section.offsetTop - 40 && position <= (section.offsetTop - 40 + section.offsetHeight)) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };
    window.addEventListener('load', navbarlinksActive);
    onscroll(document, navbarlinksActive);
  
    /**
     * Scrolls to an element with header offset
     */
    const scrollto = (el) => {
      let elementPos = select(el).offsetTop - 40;
      window.scrollTo({
        top: elementPos,
        behavior: 'smooth'
      });
    };

        /**
     * Header strip
     */
         let headerStrip = select('.header-strip');
         let logo = select('.logo-center');
         if (headerStrip) {
           const toggleHeaderStripAnimation = () => {
             if (window.scrollY > 80) {
              logo.classList.add('logo-scrolled');
              headerStrip.classList.add('header-strip-scrolled');
              $('.website-navigation-name').addClass('website-navigation-name-active');
             } else {
              logo.classList.remove('logo-scrolled');
              headerStrip.classList.remove('header-strip-scrolled');
              $('.website-navigation-name').removeClass('website-navigation-name-active');
             }
           };
           window.addEventListener('load', toggleHeaderStripAnimation);
           onscroll(document, toggleHeaderStripAnimation);
         }
  
    /**
     * Back to top button
     */
    let backtotop = select('.back-to-top');
    if (backtotop) {
      const toggleBacktotop = () => {
        if (window.scrollY > 1000) {
          backtotop.classList.add('back-to-top-active');
        } else {
          backtotop.classList.remove('back-to-top-active');
        }
      };
      window.addEventListener('load', toggleBacktotop);
      onscroll(document, toggleBacktotop);
    }
  
    /**
     * Desktop nav toggle
     */
    on('click','#hamburger', function() {
      logo.classList.add('logo-scrolled');
      headerStrip.classList.add('header-strip-scrolled');
      select('body').classList.toggle('website-navigation-active');
      const toggle = document.querySelector('.website-navigation-toggle');
      //Navigation is not visible in this if block
      if(toggle.classList.contains('bi-x')){
        //Remove strip customatization only when document is on top
        if(window.scrollY < 100){
          logo.classList.remove('logo-scrolled');
          headerStrip.classList.remove('header-strip-scrolled');
        }
        //Disable scroll because navigation is opened
        $("body").removeClass("disable-scroll");
      }
      //Navigation is visible in this else block
      else{
        $("body").addClass("disable-scroll");
      }
      this.classList.toggle('bi-x');
    });

    on('click','bi-x', function() {
      $("body").addClass("disable-scroll");
    });
  
    /**
     * Scrool with ofset on links with a class name .scrollto
     */
    on('click', '.scrollto', function(e) {
      if (select(this.hash)) {
        e.preventDefault();
  
        let body = select('body');
        if (body.classList.contains('website-navigation-active')) {
          body.classList.remove('website-navigation-active');
          let navbarToggle = select('.website-navigation-toggle');
          navbarToggle.classList.toggle('bi-list');
          navbarToggle.classList.toggle('bi-x');
        }
        scrollto(this.hash);
      }
    }, true);
  
    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
      if (window.location.hash) {
        if (select(window.location.hash)) {
          scrollto(window.location.hash);
        }
      }
    });
  
    /**
     * Hero type effect
     */
    const typed = select('.typed');
    if (typed) {
      let typed_strings = typed.getAttribute('data-typed-items');
      typed_strings = typed_strings.split(',');
      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
      });
    }
  
    /**
     * Skills animation
     */
    let skilsContent = select('.skills-content');
    if (skilsContent) {
      new Waypoint({
        element: skilsContent,
        offset: '80%',
        handler: function(direction) {
          let progress = select('.progress .progress-bar', true);
          progress.forEach((el) => {
            el.style.width = el.getAttribute('aria-valuenow') + '%';
          });
        }
      });
    }
  
    /**
     * Porfolio isotope and filter
     */
    window.addEventListener('load', () => {
      let projectContainer = select('.portfolio-page-project-container');
      if (projectContainer) {
        let projectIsotope = new Isotope(projectContainer, {
          itemSelector: '.portfolio-page-project-item'
        });
  
        let projectFilters = select('.portfolio-page-project-flters li', true);
  
        on('click', '.portfolio-page-project-flters li', function(e) {
          e.preventDefault();
          projectFilters.forEach(function(el) {
            el.classList.remove('filter-active');
          });
          this.classList.add('filter-active');
  
          projectIsotope.arrange({
            filter: this.getAttribute('data-filter')
          });
          projectIsotope.on('arrangeComplete', function() {
            AOS.refresh();
          });
        }, true);
      }
  
    });
  
    /**
     * Initiate project lightbox 
     */
    const projectLightbox = GLightbox({
      selector: '.portfolio-page-project-lightbox'
    });
  
    /**
     * project details slider
     */
    new Swiper('.portfolio-page-project-details-slider', {
      speed: 400,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
  
    /**
     * Testimonials slider
     */
    new Swiper('.portfolio-page-testimonials-slider', {
      speed: 600,
      loop: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
  
        1200: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
  
    /**
     * Animation on scroll
     */
    window.addEventListener('load', () => {
      AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
      });
    });
  
  })();

var $cardContainer = $('.download-cards');
var $downloadCard  = $('.download-card__content');
var $imageBox      = $('.download-card__image');
var $viewTrigger   = $('button').attr('data', 'trigger');

function loadImages() {
  $imageBox.each(function() {
    var url = $(this).attr('data-image');
    $(this)
      .css('background-image', 'url(' + url + ')')
      .removeAttr('data-image');
  });
}

function swapTriggerActiveClass(e) {   
  $viewTrigger.removeClass('active');
  $(e.target).addClass('active');
}

function swapView(e) {
  var $currentView = $(e.target).attr('data-trigger');
  $cardContainer.attr('data-view', $currentView);
}

$(document).ready(function(){
  loadImages();
  $viewTrigger.click(function(e){
    swapTriggerActiveClass(e);
    swapView(e);        
  });  
});

