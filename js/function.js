jQuery(document).ready(function($) {
//bxslider
$('#key_visual ul').bxSlider({
	auto: true,
	mode: 'fade',
	speed: 2000,
	pause: 6000,
	pager: true,
	touchEnabled: true,
	responsive: true
});

//page top scroll
$('.scroll_top').click(function(){
	$('html, body').animate({'scrollTop': 0 }, 1500, 'easeOutQuint');
	return false;
});

//gnav scroll
$('#gnav a').click(function(event){
	event.preventDefault();
	var url = this.href;
	var parts = url.split('#');
	var target = parts[1];
	var target_offset = $('#'+target).offset();
	var target_top = target_offset.top - 60;
	$('html, body').animate({scrollTop:target_top}, 1500, 'easeOutQuint');
});

//rollover fade
$('a img').hover(
	function(){
		$(this).stop().fadeTo(200, 0.6);
	},
	function(){
		$(this).stop().fadeTo(200, 1.0);
});

//colorbox
$('#menu a').colorbox({
	maxWidth:'90%',
	maxHeight:'90%'
});

});
