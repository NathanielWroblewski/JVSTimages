!function(){
	var images;
	var FADE_DURATION = 1000;
	var IMAGE_LIFETIME = 4000;

	startImageAdvancing = advance;

	function scheduleNextAdvance(){
		setTimeout(advance, IMAGE_LIFETIME);
	}

  function advance(){
  	images = $('.images')
  	var current_image = images.filter(':visible');
  	if (current_image.length > 0) {
  		current_image.fadeOut(FADE_DURATION, function(){
  			current_image.hide();
  			if (current_image.next().length > 0) {
  				current_image.next().fadeIn(FADE_DURATION, scheduleNextAdvance);
  			}
  			else {
  				current_image = images.first().fadeIn(FADE_DURATION);
  				scheduleNextAdvance();
  			}
  		})
  	}
  	else {
      current_image = images.first().fadeIn(FADE_DURATION);
      scheduleNextAdvance();
  	}
  }
}();

$(document).ready(startImageAdvancing);