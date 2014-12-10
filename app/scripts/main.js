$(document).ready(function() {
	$(function(){
		$.stellar({
			horizontalScrolling: false,
			verticalOffset: 40
		});
	});

	$(function() {
		$('a[href*=#]:not([href=#])').click(function() {
			if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 1000, 'swing');
					return false;
				}
			}
		});
	});

	$(function() {
		$('aside').each(function(){
			var parentHeight = $(this).parent().height();
			$(this).height(parentHeight);
		});

		$(".stick").stick_in_parent({
			offset_top: 25
		});
	});

});