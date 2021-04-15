$(document).ready(function () {
	//배너스와이프
	var mySwiper = new Swiper('.swiper-container', {
		effect: 'fade',
		//아래 닷(동그라미)
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		//반복
		loop: true,
		//자동 넘김
		autoplay: {
			delay: 3000,
		},
		//키보드 컨트롤
		keyboard: {
			enabled: true,
			onlyInViewport: false,
		},
	});







});
