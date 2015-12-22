(function ($) {
	//menu
	$('li.level').mousemove(function () {
		$(this).find('ul').slideDown('fast');
	}).mouseleave(function () {
		$(this).find('ul').slideUp('fast');
	});
})(jQuery);