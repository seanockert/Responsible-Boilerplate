var mobile = true;

$(document).ready(function() {
	
	$('html').removeClass('no-js').addClass('js');
	
	selectnav('main-navigation', {
		activeclass: 'active', 
		label: 'Choose a section'
	});

	
});

var index = 0;
window.slider = new Swipe(document.getElementById('slider'), {
  continuous: true,
  auto : 0,
  callback: function(index, elem) { 
	var currentSlide = document.getElementById('slide_'+index);
	$('.slider-nav button').removeClass('active');
	$('.slider-nav button[data-slide="'+index+'"]').addClass('active');
  },
  transitionEnd: function(index, elem) {
 	
  }
});

$('.slider-nav button').click(function () {
	index = parseInt($(this).attr('data-slide'));
	slider.slide(index);
})   

