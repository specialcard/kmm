
$(".t_button").click(function () {
    $("#total .total_manu").addClass("h");
});
$(".total_close").click(function () {
    $("#total .total_manu").removeClass("h");
});
//토탈네비 버튼



$(".manu").mouseover(function () {
    $(".subback").css("display", "block");
    $("#nav").find(".manu_info").css("display", "block");
});
$(".manu").mouseleave(function () {
    $(".subback").css("display", "none");
    $("#nav").find(".manu_info").css("display", "none");
});
//1024이상 네비게이션,서브백

$(".t_button2").click(function () {
    $("#nav .mo_manu").addClass("open");
    $(this).css("display", "none");
});
$(".mo_button").click(function () {
    $("#nav .mo_manu").removeClass("open");
    $(".t_button2").css("display", "block");
});
//모바일 햄버거 버튼


$(".mo_manu .m_depth01>li>a").click(function () {
    $('.alink').attr('href', 'javascript:void(0)');
    $(".mo_manu .m_depth01>li").removeClass("on");
    $(".mo_manu .m_depth01>li>a").removeClass("ov");
    $(".mo_manu .m_depth01>li .mo_submanu").stop().slideUp();

    if ($(this).parent().find(".mo_submanu").is(':visible')) {
        $(this).removeClass("ov");
        $(this).siblings(".mo_submanu").stop().slideUp();
        $(this).parent("li").removeClass("on");
    } else {
        $(this).addClass("ov");
        $(this).siblings(".mo_submanu").stop().slideDown();
        $(this).parent("li").addClass("on");
    }
});
//모바일 서브메뉴

$(".mo_submanu .arrow>a").click(function () {
    $('.alink').attr('href', 'javascript:void(0)');
    $(".mo_submanu .arrow .mo_sub").stop().slideUp();
    $(".mo_submanu .arrow").removeClass("onn");
    if ($(this).parent().find(".mo_sub").is(':visible')) {
        $(this).parent(".arrow").removeClass("onn");
        $(this).siblings(".mo_sub").stop().slideUp();
    } else {
        $(this).parent(".arrow").addClass("onn");
        $(this).siblings(".mo_sub").stop().slideDown();
    }
});
//모바일 서브의 서브메뉴
