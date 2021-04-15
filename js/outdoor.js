$(document).ready(function () {
	//탭메뉴1
	var tap_menu = $(".contents1 .txtbox>ul>li");
	var tap_cont = $(".contents1 .imgbox>.box2>div");
    var tab_txt = $(".infobox>div")

	tap_cont.hide().eq(0).show();

	tap_menu.click(function (e) {
		e.preventDefault();
		var target = $(this);
		var index = target.index();
		tap_menu.removeClass("active");
		target.addClass("active");
		tap_cont.css("display", "none");
		tap_cont.eq(index).css("display", "block");
        tab_txt.css("display", "none");
        tab_txt.eq(index).css("display", "block");
	});

});

