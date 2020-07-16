$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Software Engineer.", "Python Developer.", "Student."],
        typeSpeed: 70,
        loop:  true,
        startDelay: 1000,
        showCursor: false
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 3,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
    }
    });

    var skillTopOffset = $(".frontEndSection").offset().top;

    $(window).scroll(function () {
        if(window.pageYOffset > skillTopOffset - $(window).height() + 200){
                $('.chart').easyPieChart({
                    easing: 'easeInOut',
                    barColor: '#fff',
                    trackColor: false,
                    scaleColor: false,
                    lineWidth: 4,
                    size: 152,
                    onStep: function(from, to, percent){
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
        }
    });

    var backEndTopOffset = $(".backEndSection").offset().top;
    console.log(backEndTopOffset)
    $(window).scroll(function () {
        if(window.pageYOffset > backEndTopOffset - $(window).height() + 200){
                $('.chart').easyPieChart({
                    easing: 'easeInOut',
                    barColor: '#fff',
                    trackColor: false,
                    scaleColor: false,
                    lineWidth: 4,
                    size: 152,
                    onStep: function(from, to, percent){
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
        }
    });

    var toolsTopOffset = $(".toolsSection").offset().top;

    $(window).scroll(function () {
        if(window.pageYOffset > toolsTopOffset - $(window).height() + 200){
                $('.chart').easyPieChart({
                    easing: 'easeInOut',
                    barColor: '#fff',
                    trackColor: false,
                    scaleColor: false,
                    lineWidth: 4,
                    size: 152,
                    onStep: function(from, to, percent){
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
        }
    });

    $("[data-fancybox]").fancybox();

    $(".items").isotope({
        filter: '*',
        animationOption: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $("#filters a").click(function () {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");
        $(".items").isotope({
            filter: selector,
            animationOption: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false;
    })

});
