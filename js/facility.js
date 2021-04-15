$(document).ready(function () {
	//탭메뉴1
	var tap_menu = $(".contents1 .txtbox>ul>li");
	var tap_cont = $(".contents1 .imgbox>.box2>div");

	tap_cont.hide().eq(0).show();

	tap_menu.click(function (e) {
		e.preventDefault();
		var target = $(this);
		var index = target.index();
		tap_menu.removeClass("active");
		target.addClass("active");
		tap_cont.css("display", "none");
		tap_cont.eq(index).css("display", "block");
	});


	//탭메뉴2
	var tap_menu2 = $(".contents2 .txtbox>ul>li");
	var tap_cont2 = $(".contents2 .imgbox>.box2>div");

	tap_cont2.hide().eq(0).show();

	tap_menu2.click(function (e) {
		e.preventDefault();
		var target = $(this);
		var index = target.index();
		tap_menu2.removeClass("active");
		target.addClass("active");
		tap_cont2.css("display", "none");
		tap_cont2.eq(index).css("display", "block");
	});
});
