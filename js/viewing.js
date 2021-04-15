$(document).ready(function () {
    //탭메뉴
    var tap_btn = $(".tap_menu>ul>li");
    var tap_cont = $(".tap_cont>div");

    tap_cont.hide().eq(0).show();


    tap_btn.click(function (e) {
        e.preventDefault();
        var target = $(this);
        var index = target.index();
        tap_btn.removeClass("active");
        target.addClass("active");
        tap_cont.css("display", "none");
        tap_cont.eq(index).css("display", "block");
    });
});
