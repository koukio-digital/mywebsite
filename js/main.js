(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
      $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 25,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

document.addEventListener('copy', function(event) {
    event.clipboardData.setData('text/plain', 'https://www.linkedin.com/company/growcell/');
    event.preventDefault();
})


// Disable paste in all input fields
document.querySelectorAll('input, textarea').forEach(function(input) {
    input.addEventListener('paste', function(event) {
      event.preventDefault();
      alert('Pasting is not allowed in this field!');
    });
  });



  // Disable right-click on the entire page
document.addEventListener("contextmenu", function(event) {
    event.preventDefault();
});

// Disable dragging of images
document.addEventListener("dragstart", function(event) {
    event.preventDefault();
});

// Disable keyboard shortcuts for saving
document.addEventListener("keydown", function(event) {
    // Disable Ctrl+S, Ctrl+U, Ctrl+Shift+I, F12
    if (event.ctrlKey && (event.key === "s" || event.key === "u" || event.key === "p")) {
        event.preventDefault();
    }
    if (event.key === "F12" || (event.ctrlKey && event.shiftKey && event.key === "I")) {
        event.preventDefault();
    }
});

// Disable image downloads
document.querySelectorAll('img').forEach(function(img) {
    img.addEventListener('contextmenu', function(event) {
        event.preventDefault();
    });
});
