(function(){
  
	window.onkeyup = function(e){
		if ( e.which === 90 ) {

			if ( $('body').hasClass('devbg') ) {
				$('body').removeClass('devbg');
			} else {
				$('body').addClass('devbg');
			}

		}
	}

})();
