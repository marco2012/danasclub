 // AOS.init({
 // 	duration: 800,
 // 	easing: 'slide'
 // });
 
 (function($) {
    
    "use strict";
    
    const mobile_device = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))  
    
    
    $(window).stellar({
        responsive: false,
        parallaxBackgrounds: true,
        parallaxElements: true,
        horizontalScrolling: false,
        hideDistantElements: true,
        scrollProperty: 'scroll',
        horizontalOffset: 0,
        verticalOffset: 0,
    });
    
    
    var fullHeight = function() {
        $('.js-fullheight').css('height', $(window).height());
        $(window).resize(function(){
            $('.js-fullheight').css('height', $(window).height());
        });
    };
    if (!mobile_device) fullHeight();
    
    // loader
    var loader = function() {
        setTimeout(function() { 
            if($('#ftco-loader').length > 0) {
                $('#ftco-loader').removeClass('show');
            }
        }, 1);
    };
    loader();
    
    // Scrollax
    $.Scrollax();
    
    var carousel = function() {
        $('.carousel-work').owlCarousel({
            autoplay: true,
            center: true,
            loop: true,
            items:1,
            margin: 30,
            stagePadding:0,
            nav: true,
            navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
            responsive:{
                0:{
                    items: 1,
                    stagePadding: 0
                },
                600:{
                    items: 2,
                    stagePadding: 50
                },
                1000:{
                    items: 3,
                    stagePadding: 100
                }
            }
        });
        
    };
    carousel();
    
    // $('.owl-carousel').owlCarousel({
    //     items:1,
    //     merge:true,
    //     loop:true,
    //     margin:10,
    //     video:true,
    //     lazyLoad:true,
    //     center:true,
    //     responsive:{
    //         480:{
    //             items:2
    //         },
    //         600:{
    //             items:4
    //         }
    //     }
    // })
    
    // $('nav .dropdown').hover(function(){
    //     var $this = $(this);
    //     // 	 timer;
    //     // clearTimeout(timer);
    //     $this.addClass('show');
    //     $this.find('> a').attr('aria-expanded', true);
    //     // $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
    //     $this.find('.dropdown-menu').addClass('show');
    // }, function(){
    //     var $this = $(this);
    //     // timer;
    //     // timer = setTimeout(function(){
    //     $this.removeClass('show');
    //     $this.find('> a').attr('aria-expanded', false);
    //     // $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
    //     $this.find('.dropdown-menu').removeClass('show');
    //     // }, 100);
    // });
    
    
    $('#dropdown04').on('show.bs.dropdown', function () {
        console.log('show');
    });
    
    // scroll, show navbar
    var scrollWindow = function() {
        $(window).scroll(function(){
            var $w = $(this),
            st = $w.scrollTop(),
            navbar = $('.ftco_navbar'),
            sd = $('.js-scroll-wrap');
            
            if (st > 750) {
                if ( !navbar.hasClass('scrolled') ) {
                    navbar.addClass('scrolled');	
                }
            } 
            if (st < 750) {
                if ( navbar.hasClass('scrolled') ) {
                    navbar.removeClass('scrolled sleep');
                }
            } 
            if ( st > 800 ) {
                if ( !navbar.hasClass('awake') ) {
                    navbar.addClass('awake');	
                }
                
                if(sd.length > 0) {
                    sd.addClass('sleep');
                }
            }
            if ( st < 800 ) {
                if ( navbar.hasClass('awake') ) {
                    navbar.removeClass('awake');
                    navbar.addClass('sleep');
                }
                if(sd.length > 0) {
                    sd.removeClass('sleep');
                }
            }
        });
    };
    scrollWindow();
    
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    
    
    // var counter = function() {
        
    //     $('#section-counter').waypoint( function( direction ) {
            
    //         if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
                
    //             var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
    //             $('.number').each(function(){
    //                 var $this = $(this),
    //                 num = $this.data('number');
    //                 console.log(num);
    //                 $this.animateNumber(
    //                     {
    //                         number: num,
    //                         numberStep: comma_separator_number_step
    //                     }, 7000
    //                     );
    //                 });
                    
    //             }
                
    //         } , { offset: '95%' } );
            
    //     }
        // counter();
        
        var contentWayPoint = function() {
            var i = 0;
            $('.ftco-animate').waypoint( function( direction ) {
                
                if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
                    
                    i++;
                    
                    $(this.element).addClass('item-animate');
                    setTimeout(function(){
                        
                        $('body .ftco-animate.item-animate').each(function(k){
                            var el = $(this);
                            setTimeout( function () {
                                var effect = el.data('animate-effect');
                                if ( effect === 'fadeIn') {
                                    el.addClass('fadeIn ftco-animated');
                                } else if ( effect === 'fadeInLeft') {
                                    el.addClass('fadeInLeft ftco-animated');
                                } else if ( effect === 'fadeInRight') {
                                    el.addClass('fadeInRight ftco-animated');
                                } else {
                                    el.addClass('fadeInUp ftco-animated');
                                }
                                el.removeClass('item-animate');
                            },  k * 50, 'easeInOutExpo' );
                        });
                        
                    }, 100);
                    
                }
                
            } , { offset: '95%' } );
        };
        contentWayPoint();
        
        
        // navigation
        // var OnePageNav = function() {
        //     $(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
        //         e.preventDefault();
                
        //         var hash = this.hash,
        //         navToggler = $('.navbar-toggler');
        //         $('html, body').animate({
        //             scrollTop: $(hash).offset().top
        //         }, 700, 'easeInOutExpo', function(){
        //             window.location.hash = hash;
        //         });
                
                
        //         if ( navToggler.is(':visible') ) {
        //             navToggler.click();
        //         }
        //     });
        //     $('body').on('activate.bs.scrollspy', function () {
        //         console.log('nice');
        //     })
        // };
        // OnePageNav();
        
        // // magnific popup
        // $('.image-popup').magnificPopup({
        //     type: 'image',
        //     closeOnContentClick: true,
        //     closeBtnInside: false,
        //     fixedContentPos: true,
        //     mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        //     gallery: {
        //         enabled: true,
        //         navigateByImgClick: true,
        //         preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        //     },
        //     image: {
        //         verticalFit: true
        //     },
        //     zoom: {
        //         enabled: true,
        //         duration: 300 // don't foget to change the duration also in CSS
        //     }
        // });
        
        // $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        //     disableOn: 700,
        //     type: 'iframe',
        //     mainClass: 'mfp-fade',
        //     removalDelay: 160,
        //     preloader: false,
            
        //     fixedContentPos: false
        // });
        
        
        // $('#appointment_date').datepicker({
        //     'format': 'm/d/yyyy',
        //     'autoclose': true
        // });
        
        // $('#appointment_time').timepicker();
        

        // Smooth scroll
        $('#ftco-nav>ul>li>a').on('click', function() {
            let hash = $(this).attr('href')
            smoothScrollTo(hash)
        })
        $('#nostri_corsi_btn').on('click', function(e) {
            e.preventDefault();
            let hash = $(this).attr('href')
            smoothScrollTo(hash, 90)
        })
        $('#eventi_btn').on('click', function(e) {
            e.preventDefault();
            let hash = $(this).attr('href')
            smoothScrollTo(hash, 50)
        })

        $('#ftco-nav').on('click', function() {
            $(this).removeClass('show')
        })

        scrollToAnchor()
        
    })(jQuery);
    
    function smoothScrollTo(hash, offset=30){
        var aTag = $("a[name='" + hash.substring(1).trim() + "']");
        $('html,body').animate({ scrollTop: aTag.offset().top - offset }, 'fast');
    }

    function scrollToAnchor() {
        let hash = window.location.hash
        if (hash){
            var aTag = $("a[name='" + hash.substring(1).trim() + "']");
            $('html,body').animate({ scrollTop: aTag.offset().top - 100 }, 'slow');
        }
    }