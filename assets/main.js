(function ($)
  { "use strict"

function evaluar(){
  if($("li.cart-icon > a:nth-child(1) > div:nth-child(2) > span:nth-child(1)").html() !== "0") {
    $("#CartCount").removeClass("hide");
  }    alert("hola");

}
setInterval('evaluar()',100);

   // :: 7.0 Tooltip Active Code
    if ($.fn.tooltip) {
        $('[data-toggle="tooltip"]').tooltip({html:true});
    }

    $(function () {
        $('[data-toggle="popover"]').popover({html:true})
      })
    
    var alime_window = $(window);

       
  /*----------------------------------------------------*/
    /*  CLASE MENU 
    /*----------------------------------------------------*/ 
   

    if ($.fn.classyNav) {
        $('#alimeNav').classyNav();
    }

   
  /*----------------------------------------------------*/
    /*  MENU STYCKY
    /*----------------------------------------------------*/ 
   
    alime_window.on('scroll', function () {
        if (alime_window.scrollTop() > 0) {
            $('.main-header-area').addClass('sticky');
        } else {
            $('.main-header-area').removeClass('sticky');
        }
    });
    



   
  /*----------------------------------------------------*/
    /*  CAUROSEL PRODUCTS
    /*----------------------------------------------------*/ 
   
   
      $('.owl-products').owlCarousel({
        loop: true,
        margin: 60,
        autoplay: true,        
        autoplayTimeout:3000,
        dots: false,       
        responsive : {
			0 : {
				items: 1
			},
			768 : {
				items: 1,
			},
			992 : {
				items: 2,
			},
			1025 : {
				items: 3,
			}
		},	
       
    })
 
 /*----------------------------------------------------*/
    /*  CAUROSEL REVIEWS
    /*----------------------------------------------------*/ 
     
  $('.blog_post_slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '',
      'NEXT'


    ]
  });
   
   
   
    /*----------------------------------------------------*/
    /*  CAUROSEL REVIEWS
    /*----------------------------------------------------*/ 

    $('.owl-review').owlCarousel({
        loop: true,
        margin: 50,
        autoplay: true,
        autoplayTimeout:7000,
       autoplayHoverPause: true,
        dots:false,
        nav: false,
        items: 1		
         
    })
    
     /*----------------------------------------------------*/
    /*  CAUROSEL ABOUT US
    /*----------------------------------------------------*/ 
 
      $('.owl-about').owlCarousel({
                
                loop: true,
                center: true,
                margin: 10,
                items: 1,
                callbacks: true,
                URLhashListener: true,
                autoplayHoverPause: true,
                startPosition: 'URLHash'
              });

})(jQuery);

