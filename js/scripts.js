$(document).ready(function(){


	setTimeout(function(){
		const typed = new Typed('.typed', {
			strings: ["Tłumaczenia.", "Lokalizacja.", "Transkreacja.", "Weryfikacja tłumaczeń."],
			typeSpeed: 100,
			loop: true,
			backSpeed: 20,
			startDelay: 1000,
			autoInsertCss: true,
			cursorChar: '|'
		}); 
	}, 2000);
	

//carousel
	$('.owl-carousel').owlCarousel({
		animateOut: 'rotateOutDownLeft',
    	animateIn: 'rotateInDownRight',
  		// animateOut: 'zoomOutLeft',
    // 	animateIn: 'zoomInRight',
		loop:true,
	    margin:30,
	    nav: false,
	    autoplay:true,
		autoplayTimeout:15000,
		autoplayHoverPause:true,
		smartSpeed:650,
		items:1
	});

//nav smooth scrolling
	$('#navigation a').click(function(e) {
		e.preventDefault();

		const targetElement = $(this).attr('href');
		const targetPosition = $(targetElement).offset().top;
		$('html, body').animate({scrollTop: targetPosition -50}, 'slow');
	});


//textarea expand
	$(document)
    .one('focus.autoExpand', 'textarea.autoExpand', function(){
        const savedValue = this.value;
        this.value = '';
        this.baseScrollHeight = this.scrollHeight;
        this.value = savedValue;
    })
    .on('input.autoExpand', 'textarea.autoExpand', function(){
        let minRows = this.getAttribute('data-min-rows')|0, rows;
        this.rows = minRows;
        rows = Math.ceil((this.scrollHeight - this.baseScrollHeight) / 16);
        this.rows = minRows + rows;
    });

//autoclose mobile menu
    if($(window).width() < 992) {
	 $('.navbar-nav li').click(function(){ 
	   $('.navbar-toggler').click();
	  });
	}
//hamburger animation
	var $hamburger = $('.hamburger');
	$hamburger.on("click", function(e) {
		$hamburger.toggleClass('is-active');
	});

//fade in animations

	let countUpFinished = false;
	
	$(window).scroll(function() {

		const headerTopOffset = $('.header-text').offset().top;
		const statsTopOffset = $('.stats').offset().top;
		const offerTopOffset = $('.offer-text').offset().top;
		const offerIconsTopOffset = $('#offerIconsTop').offset().top;
		const quoteTopOffset = $('#quote').offset().top;
		const contactTopOffset = $('#contact').offset().top;


		if(window.pageYOffset > headerTopOffset - $(window).height() +200) {
			$('nav').addClass('navbar-background');
		}


		if(!countUpFinished && window.pageYOffset > statsTopOffset - $(window).height() + 200) {
			$('.counter').each(function() {
				let element = $(this);
				const endVal = parseInt(element.text());
				element.countup(endVal);
			});

			countUpFinished = true;
		}


		if(window.pageYOffset > offerTopOffset - $(window).height()) {
			$('.offer-text h1').addClass('animated flipInY');
			$('.offer-text h3').addClass('animated fadeInDown delay-2s');
			$('.offer-text p').addClass('animated zoomInUp delay-3s');
		}

		if(window.pageYOffset > offerIconsTopOffset - $(window).height() + 300) {	

			const offerItems = $('.offerFade');
			let index = 0;

			const delay = setInterval( function(){
			  if ( index <= offerItems.length ){
			    $(offerItems[index]).addClass('formFadeInAnimation');
			    index ++;
			  }else{
			    clearInterval(delay);
			  }
			}, 500 );
		}

		if(window.pageYOffset > quoteTopOffset - $(window).height()) {
			$('.quote .container').addClass('animated zoomInUp');
		}

		if(window.pageYOffset > contactTopOffset - $(window).height()) {
			$('.formData').addClass('animated zoomInUp');
			$('.form').addClass('animated zoomInUp delay-1s');
		}

	});	

	// const aboutTopOffset = $('#about').offset().top;

	// $(window).scroll(function() {
	// 	if(window.pageYOffset > aboutTopOffset - $(window).height() + 300) {
	// 		if($(window).width() < 992) {
	// 			$('.image img').fadeTo(1000, 0.3);
	// 		} else {
	// 			$('.image img').fadeTo(1000, 1);
	// 		}
	// 	}
	// });	

	


		
})
