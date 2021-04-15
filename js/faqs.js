$(document).ready(function () {
	$("#contents1 .contents1 .cont_cont dl dt").click(function () {
		$("#contents1 .contents1 .cont_cont dl dd").stop().slideUp();
		$("#contents1 .contents1 .cont_cont dl dt").removeClass("on");

		if ($(this).parent("dl").find("dd").is(':visible')) {
			$(this).removeClass("on").parent("dl").find("dd").slideUp();
		} else {
			$(this).addClass("on").parent("dl").find("dd").slideDown();
		}
	});


	$(".more").click(function () {
		$("#contents1 .contents1 .cont_cont .cont2").fadeIn(1000);
		$(this).css("display", "none");
		$("#contents1 .contents1 .more2").css("display", "block");
	});
	$(".more2").click(function () {
		$("#contents1 .contents1 .cont_cont .cont3").fadeIn(1000);
		$(this).css("display", "none");
		$("#contents1 .contents1 .more3").css("display", "block");
	});
	$(".more3").click(function () {
		$("#contents1 .contents1 .cont_cont .cont4").fadeIn(1000);
		$(this).css("display", "none");
	});
});
