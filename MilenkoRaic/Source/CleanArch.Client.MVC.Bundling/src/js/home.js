import Flickity from 'flickity';

(function($) { "use strict";
		
	//About page
	
	$(".about-text").on('click', function () {
		$('html, body').animate({scrollTop:100}, 'slow');
        $("body").addClass("disable-scroll");
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
		$('html, body').animate({scrollTop:0}, 'slow');
        $("body").removeClass("disable-scroll");
	});

	
	//appointment page
	
	$(".appointment-text").on('click', function () {
		$('html, body').animate({scrollTop:100}, 'slow');
        $("body").addClass("disable-scroll");
		$("body").addClass("appointment-on");
	});
	$(".appointment-close").on('click', function () {
		$("body").removeClass("appointment-on");
		$('html, body').animate({scrollTop:0}, 'slow');
        $("body").removeClass("disable-scroll");		
	});

	
	//Resume portfolio page
	
	$(".resume").on('click', function () {
		$('html, body').animate({scrollTop:100}, 'slow');
        $("body").addClass("disable-scroll");
		$("body").addClass("resume-on");
	});
	$(".resume-close").on('click', function () {
		$("body").removeClass("resume-on");
		$('html, body').animate({scrollTop:0}, 'slow');
        $("body").removeClass("disable-scroll");
	});

	
	//Projects portfolio page
	
	$(".projects").on('click', function () {
		$('html, body').animate({scrollTop:100}, 'slow');
        $("body").addClass("disable-scroll");
		$("body").addClass("projects-on");
	});
	$(".projects-close").on('click', function () {
		$("body").removeClass("projects-on");
		$('html, body').animate({scrollTop:0}, 'slow');
        $("body").removeClass("disable-scroll");
	});

	
	//Skills portfolio page
	
	$(".skills").on('click', function () {
		$('html, body').animate({scrollTop:100}, 'slow');
        $("body").addClass("disable-scroll");
		$("body").addClass("skills-on");
	});
	$(".skills-close").on('click', function () {
		$("body").removeClass("skills-on");
		$('html, body').animate({scrollTop:0}, 'slow');
        $("body").removeClass("disable-scroll");
	});

	
})(jQuery);

$(".social-nav-text").click(function(event) {
	$("#social-nav__toggle").click();
});

(function() {

	"use strict";

	//Prevent circle nav last unorded list item redirection if user has not hit toggle button
	$(".social-nav__link").click(function(event) {
		if(!$(".c-mask").hasClass('is-active')){
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
	toggle.addEventListener("click", function(e) {
		e.preventDefault();
		toggle.classList.contains(activeClass) ? deactivateMenu() : activateMenu();
	});

	/**
	 * Listen for clicks on the mask, which should close the menu
	 */
	mask.addEventListener("click", function() {
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

const url="https://milenkoraic.me";
const title = "Milenko Raic | Digital Hub";
const text="";
const link=url;
const labels ="Passionate and reliable IT engineer and digital media developer";
const annotation ="Well-focused and committed to innovation and solutions. One of those who say \"We can DO IT!\" instead of \"It\'s impossible!\"";

function shareOnFacebook() {
	window.open('https://www.facebook.com/sharer/sharer.php?u=' + url+ '&title=' + title, 'facebook-share-dialog', "width=626, height=436");
}
window.shareOnFacebook = shareOnFacebook;

function shareOnTwitter() {
	window.open('https://twitter.com/share?'+ url + '&text=' + text + '&url=' + link, '_blank', 'width=626,height=436').focus();
};
window.shareOnTwitter = shareOnTwitter;


function shareOnLinkedIn() {
	window.open('http://www.linkedin.com/shareArticle?mini=true&url='+ url + '&text=' + text + '&url=' + link, '_blank', 'width=626,height=436').focus();
};
window.shareOnLinkedIn = shareOnLinkedIn;

function createGoogleBookmark() {
	window.open('http://www.google.com/bookmarks/mark?op=edit&bkmk='+ url + '&output=popup&title=' + title + '&labels=' + labels + '&annotation=' + annotation);
};
window.createGoogleBookmark = createGoogleBookmark;


// SUBSCRIBE - SUBSCRIBE FORM - SUBMIT FUNCTION
$(function () {
	$('#submit-subscribtion-form').click(function () {
  var form = $('#subscribe-form');
	form.validate();
	if (!form.valid()) {
	  return;
	}
	else {
	  $('#subscribe-form').submit(function (e) {
		e.preventDefault();
		var formData = ConvertFormToJSON(this);
		$.ajax({
		  type: 'POST',
		  contentType: "application/json",
		  url: "subscribe/submit",
		  data: JSON.stringify(formData)
		})
		  .done(function () {
			showSucessMessage();
		  })
		  .fail(function () {
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
};  

function showLoader() {
	resetUserData();
	$('.loading-mask').show();
	$('.loading').show();
	setTimeout(function () {
	$('.loading').hide();
}, 2500);
};

function showSucessMessage() {
	showLoader();
	setTimeout(function () {
	$('.loading-mask').show();
	$('.sent-message').show();
	}, 2500);
	setTimeout(function () {
	window.location.reload();
}, 7000);
};

function showErrorMesagge() {
	showLoader();
	setTimeout(function () {
	$('.loading-mask').show();
	$('.error-message').show();
	}, 2500);
	setTimeout(function () {
		window.location.reload();
	}, 7000);
};