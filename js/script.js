$(window).on("load", function () {
    $(".loader .inner").fadeOut(500, function () {
        $(".loader").fadeOut(750);
    });
    $(".items").isotope({
        filter: '*',
        animationOption: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });
});

$(document).ready(function () {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    var typed = new Typed(".typed", {
        strings: ["Software Engineer.", "Python Developer.", "And a Learner."],
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
    });

    $("#navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50}, "slow")
    });

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);
    function stickyNavigation() {
        var body = $("body");
        if($(window).scrollTop() >= navTop){
            body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav")
        }
        else{
            body.css("padding-top", 0);
            body.removeClass("fixedNav")
        }
    }

});
