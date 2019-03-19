$(document).ready(function(){

	const typed = new Typed('.typed', {
		strings: ["Tłumaczenia.", "Lokalizacja.", "Transkreacja.", "Weryfikacja tłumaczeń."],
		typeSpeed: 100,
		loop: true,
		backSpeed: 20,
		startDelay: 1000,
		autoInsertCss: true,
		cursorChar: '|'
	});

//carousel
	$('.owl-carousel').owlCarousel({
		loop:true,
	    margin:30,
	    nav: false,
	    autoplay:true,
		autoplayTimeout:6000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			1024:{
				items:1
			}
		}
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


	const aboutTopOffset = $('#about').offset().top;
	// $('.image img').css('opacity', '0');

	$(window).scroll(function() {
		if(window.pageYOffset > aboutTopOffset - $(window).height() + 400) {
			if($(window).width() < 992) {
				$('.image img').fadeTo(1000, 0.3);
			} else {
				$('.image img').fadeTo(1000, 1);
			}
		}
	});	

	const offerTopOffset = $('#offerIconsTop').offset().top;
	
	$(window).scroll(function() {
		if(window.pageYOffset > offerTopOffset - $(window).height() + 300) {	

			const offerItems = $('.offerFade');
			let index = 0;

			const delay = setInterval( function(){
			  if ( index <= offerItems.length ){
			    $(offerItems[index]).addClass('formFadeInAnimation');
			    index ++;
			  }else{
			    clearInterval(delay);
			  }
			}, 200 );

		}
	});	

})
