$(document).ready(function () {
	var screenWidth = $(window).width();
	var screenHeight = $(window).height();

	function marginer(object, height, width) {
		var height = (screenHeight/2) - (object.height()/2);
		var width = (screenWidth/2) - (object.width()/2);
		var margin = Math.round(height) + "px " +  Math.round(width) + "px";
		return margin;
	}

	var string = marginer($('.sun'), $('.sun').height(), $('.sun').width());
	$('.sun').css("margin", string);
	var string = marginer($('.mercury'), $('.mercury').height(), $('.mercury').width());
	$('.mercury').css("margin", string);
	var string = marginer($('.venus'), $('.venus').height(), $('.venus').width());
	$('.venus').css("margin", string);
	var string = marginer($('.earth'), $('.earth').height(), $('.earth').width());
	$('.earth').css("margin", string);
	var string = marginer($('.mars'), $('.mars').height(), $('.mars').width());
	$('.mars').css("margin", string);
	var string = marginer($('.jupiter'), $('.jupiter').height(), $('.jupiter').width());
	$('.jupiter').css("margin", string);
	var string = marginer($('.saturn'), $('.saturn').height(), $('.saturn').width());
	$('.saturn').css("margin", string);
	var string = marginer($('.uranus'), $('.uranus').height(), $('.uranus').width());
	$('.uranus').css("margin", string);
	var string = marginer($('.neptune'), $('.neptune').height(), $('.neptune').width());
	$('.neptune').css("margin", string);

});
