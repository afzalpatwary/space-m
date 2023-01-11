/**
 * @Script js for (Template/Project Name)
 *
 * @project     - Project Name
 * @author      - 
 * @created_by  - 
 * @created_at  - 
 * @modified_by -
 */


/**
 * ========================================================
 * this function execute when window properly loaded
 * ===========================================================
 */

// $(window).on('load', function () {

// 	// code should be execute here

// });



/**
 * ========================================================
 * this function execute when DOM element ready 
 * ===========================================================
 */

$(document).ready(function () {


	// sticky-header
	$(window).scroll(function () {
		var slideDown = $('#header'),
			scroll = $(window).scrollTop();

		if (scroll >= 150) slideDown.addClass('sticky-header');
		else slideDown.removeClass('sticky-header');
	});




	// toggle class
	$(".navbar-toggler").click(function () {
		$("#header, .form-select").toggleClass("mobile-nav");
	});

	$(".select-wrapper .form-select").click(function () {
		$(this).addClass("bg-clr-black");
		$(this).removeClass("bg-transparent");
	});


	$(".review-writing").click(function () {
		$('.review-form').slideToggle();
	});


	// FormGroupCollapsed-item
	$(function () {
		if ($('.header-wrap').length && $('.collapsed-item').length) {
			$('.header-wrap').on('click', function (e) {
				e.preventDefault();
				if ($(this).closest('.collapsed-group').find('.collapsed-item').slideToggle()) {
					$(this).find('.ni').toggleClass('ni-chevron-down ni-chevron-up');
				}
			});
		}
	});



	// loadMore item
	$(function () {
		if (window.matchMedia("(max-width: 991px)").matches) {
			$('.loadMoreParent .loadMoreItem').slice(0, 4).show();
			$('.btn-loadMore').on('click', function (e) {
				e.preventDefault();
				$('.loadMoreParent .loadMoreItem:hidden').slice(0, 4).show();
				if ($('.loadMoreParent .loadMoreItem:hidden').length < 1) {
					$(this).addClass('disabled').css('cursor', 'no-drop')
				} else {
					$(this).removeClass('disabled').css('cursor', 'default')
				}
			})
		} else {
			$('.loadMoreParent .loadMoreItem').slice(0, 6).show();
			$('.btn-loadMore').on('click', function (e) {
				e.preventDefault();
				$('.loadMoreParent .loadMoreItem:hidden').slice(0, 6).show();
				console.log($('.loadMoreParent .loadMoreItem:hidden').length)
				if ($('.loadMoreParent .loadMoreItem:hidden').length < 1) {
					$(this).addClass('disabled').css('cursor', 'no-drop')
				} else {
					$(this).removeClass('disabled').css('cursor', 'default')
				}
			});
		}
	})



	// Slick Slider
	$(function () {
		$(".slider-single").slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: false,
			adaptiveHeight: true,
			infinite: false,
			useTransform: true,
			speed: 200,
			cssEase: "cubic-bezier(0.77, 0, 0.18, 1)",
			prevArrow: $(".prev"),
			nextArrow: $(".next"),
		});

		$(".slider-nav")
			.on("init", function (event, slick) {
				$(".slider-nav .slick-slide.slick-current").addClass("is-active");
			})
			.slick({
				slidesToShow: 7,
				slidesToScroll: 9,
				dots: false,
				arrows: false,
				focusOnSelect: false,
				infinite: false,
				responsive: [
					{
						breakpoint: 1024,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 5,
						},
					},
					{
						breakpoint: 640,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 4,
						},
					},
					{
						breakpoint: 420,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 3,
						},
					},
				],
			});

		$(".slider-single").on(
			"afterChange",
			function (event, slick, currentSlide) {
				$(".slider-nav").slick("slickGoTo", currentSlide);
				var currrentNavSlideElem =
					'.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
				$(".slider-nav .slick-slide.is-active").removeClass("is-active");
				$(currrentNavSlideElem).addClass("is-active");
			}
		);

		$(".slider-nav").on("click", ".slick-slide", function (event) {
			event.preventDefault();
			var goToSingleSlide = $(this).data("slick-index");

			$(".slider-single").slick("slickGoTo", goToSingleSlide);
		});
	});






	// $(function () {
	//     /***** CALCULATE THE TIME REMAINING *****/
	//     function getTimeRemaining(endtime) {
	//         var t = Date.parse(endtime) - Date.parse(new Date());

	//         /***** CONVERT THE TIME TO A USEABLE FORMAT *****/
	//         var seconds = Math.floor((t / 1000) % 60);
	//         var minutes = Math.floor((t / 1000 / 60) % 60);
	//         var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	//         var days = Math.floor(t / (1000 * 60 * 60 * 24));

	//         /***** OUTPUT THE CLOCK DATA AS A REUSABLE OBJECT *****/
	//         return {
	//             total: t,
	//             days: days,
	//             hours: hours,
	//             minutes: minutes,
	//             seconds: seconds,
	//         };
	//     }

	//     /***** DISPLAY THE CLOCK AND STOP IT WHEN IT REACHES ZERO *****/
	//     function initializeClock(id, endtime) {
	//         var clock = document.getElementById(id);
	//         var daysSpan = clock.querySelector(".days");
	//         var hoursSpan = clock.querySelector(".hours");
	//         var minutesSpan = clock.querySelector(".minutes");
	//         var secondsSpan = clock.querySelector(".seconds");

	//         function updateClock() {
	//             var t = getTimeRemaining(endtime);

	//             daysSpan.innerHTML = t.days;
	//             hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
	//             minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
	//             secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

	//             if (t.total <= 0) {
	//                 clearInterval(timeinterval);
	//             }
	//         }

	//         updateClock(); // run function once at first to avoid delay
	//         var timeinterval = setInterval(updateClock, 1000);
	//     }

	//     /***** SET A VALID END DATE *****/
	//     var deadline = new Date(
	//         Date.parse(new Date()) + 21 * 24 * 60 * 60 * 1000
	//     );
	//     initializeClock("clockdiv", deadline);
	// })








	// wow js init
	$(function () {
		var wow = new WOW({
			animateClass: 'animated',
			mobile: true
		});
		wow.init();
	});






});
