var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	
	//de-activate current step on progressbar
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	//show the previous fieldset
	previous_fs.show(); 
	//hide the current fieldset with style
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = ((1-now) * 50)+"%";
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
      current_fs.css({
        'left': left,
        'transform': 'scale('+scale+')',
        'position': 'relative'
      });
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		//this comes from the custom easing plugin
		easing: 'easeInOutBack'
	});
});

const title = document.getElementById('service');
if (title.value = "") {
alert('Please select a service');
}

function initializeCustomFormValidation(){
  jQuery.validator.setDefaults({
    errorPlacement: function(error, element) {  
        $(element).attr({"title": error.text()});
    },
    highlight: function(element){
        //$(element).css({"border": "2px solid #CC0000"});
        $(element).removeClass("textinput");
        $(element).addClass("errorHighlight");
    },
    unhighlight: function(element){
        //$(element).css({"border": "2px solid #CC0000"});
        $(element).removeClass("errorHighlight");
        $(element).addClass("textinput");
    }
  });
}

$('#first-form-submit').click(function () {
  initializeCustomFormValidation();
  var form = $('#contact-form');
  form.validate();
  if (!form.valid()) {
      return;
  }
  else {
    if(animating) return false;
    animating = true;
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show(); 
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
      step: function(now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = (now * 50)+"%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          'transform': 'scale('+scale+')',
          'position': 'absolute'
        });
        next_fs.css({'left': left, 'opacity': opacity});
      }, 
      duration: 800, 
      complete: function(){
        current_fs.hide();
        animating = false;
      }, 
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
    });
  }
});

$('#second-form-submit').click(function () {
  initializeCustomFormValidation();
  var form = $('#contact-form');
  form.validate();
  if (!form.valid()) {
      return;
  }
  else {
    if(animating) return false;
    animating = true;
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show(); 
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
      step: function(now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = (now * 50)+"%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({
          'transform': 'scale('+scale+')',
          'position': 'absolute'
        });
        next_fs.css({'left': left, 'opacity': opacity});
      }, 
      duration: 800, 
      complete: function(){
        current_fs.hide();
        animating = false;
      }, 
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
    });
  }
});

// CONTACT - CONTACT FORM - SUBMIT FUNCTION
$(function () {
  $('#contact-form-button').click(function () {
    var form = $('#contact-form');
      form.validate();
      if (!form.valid()) {
          return;
      }
      else {
          $('#contact-form').submit(function (e) {
              e.preventDefault();
              var formData = ConvertFormToJSON(this);
              $.ajax({
                  type: 'POST',
                  contentType: "application/json",
                  url: "contact/submit",
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
  $('textarea').val('');
  $('#contact-form-button').hide();
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