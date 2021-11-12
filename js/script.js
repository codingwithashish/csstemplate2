$(document).ready(function () {
    // on scroll 
    window.addEventListener('scroll', function () {
        header = document.querySelector('.main-header');
        header.classList.toggle("sticky-top", window.scrollY > 50)
    });
    // on scroll 
    
    $('.nav-link').click(function(){
        $('.main-header').removeClass('responsive-menu');
        $('.toggle-button').toggleClass('menu-open');
    });

    // Toggle-button
    $('.toggle-button').click(function () {
        $(this).toggleClass('menu-open');
        $('.main-header').toggleClass('responsive-menu');
    });
    // Toggle-button

    // owl-Carousel
        $('#clients-logo').owlCarousel({
            loop:true,
            autoplay:true,
            autoSpeed:1000,
            responsive:{
                0:{
                    items:2,
                
                },
                600:{
                    items:3,
                    
                },
                1000:{
                    items:4,
                    nav:true
                }
            }
        });
    // owl-Carousel
});