import Swiper, { Navigation, Autoplay } from 'swiper';

export const slider = (selector, countSlides, prevBtn, nextBtn) => {

	const swiperCarusel = new Swiper(selector, {
		modules: [Navigation, Autoplay],
		loop: true,
		slidesPerView: 1,
		spaceBetween: 10,
		autoplay: {
			delay: 3000,
		},
		navigation: {
			nextEl: nextBtn,
			prevEl: prevBtn,
		  },
		  breakpoints: {
			576: {
			  slidesPerView: countSlides,
			}
		},
	
	});

};