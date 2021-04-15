$(document).ready(function () {
	//탭메뉴1
	var tap_menu = $(".contents1 .cont_tit>ul>li");
	var tap_cont = $(".contents1 .cont_txt>div");

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


});
