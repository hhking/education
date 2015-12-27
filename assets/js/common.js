(function ($) {
	//menu
	$('li.level').mousemove(function () {
		$(this).find('ul').slideDown('fast');
	}).mouseleave(function () {
		$(this).find('ul').slideUp('fast');
	});
	
	//return top
	$('.js-return-top').click(function(){
		$('html,body').animate({
			scrollTop: 0
		},500);
	});
})(jQuery);