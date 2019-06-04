$(document).ready(function () {
    const el = $('#header-portfolio-wrapper'),
        s = $('#scrollup'),
        arrow = $('#header-main-arrow'),
        show = $('#button-main-portfolio'),
        nav = $('.nav-works-items'),
        tab = [$('#home-nav'), $('#about-nav'), $('#services-nav'), $('#works-nav'), $('#contact-nav')],
        t = [$('#home'), $('#about'), $('#services'), $('#works'), $('#contact')];

    let h = 70;

    //---------- Media height nav ----------//
    const media = window.matchMedia("(min-width: 768px)");
    (media.matches) ? h = 70 : h = 55;

    media.addListener(function (media) {
        (media.matches) ? h = 70 : h = 55;
    });

    //---------- Security scroll and menu ----------//
    if ($(window).scrollTop() > 250) {
        s.fadeIn();
    }

    if ($(window).scrollTop() > 150) {
        el.addClass('menu-bg');
    }

    //---------- Scroll up efect ----------//
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 250) {
            s.fadeIn();
        } else {
            s.fadeOut();
        }
    });

    //---------- Scroll up ----------//
    s.on('click', function () {
        $("html, body").stop().animate({ scrollTop: 0 }, 1000);
    });

    //---------- Menu efect ----------//
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 150) {
            el.addClass('menu-bg');
        } else {
            el.removeClass('menu-bg');
        }
    })

    //---------- Scroll to element ----------//
    tab.forEach(function (n, i) {
        n.on('click', function (e) {
            e.preventDefault();
            /*let id = tab[i].attr('id');
            id = id.substring(0, id.length - 4);*/
            $('html, body').stop().animate({
                scrollTop: t[i].offset().top - h
            }, 1000);
        });
    });

    //---------- Icon-angle-double-down scroll to about ----------//
    arrow.on('click', function () {
        $('html, body').animate({
            scrollTop: $('#about').offset().top - h
        }, 1000);
    });

    //---------- Show project ----------
    show.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('#works').offset().top - h
        }, 1000);
    });

    //---------- Change color of active nav by section ----------//
    $(window).on("scroll", function () {
        let st = $(this).scrollTop();
        t.forEach(function (el, i) {
            if (el.offset().top <= st + 220) {
                tab[i].addClass('active');
                tab[i].prev('.nav-items').removeClass('active');
            }
            else {
                tab[i].removeClass('active');
                //Security change color - contact
                if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                    tab[tab.length - 1]
                    tab[i].addClass('active');
                    tab[i].prev('.nav-items').removeClass('active');
                }
            }
        });
    });

    //---------- Portfolio gallery ----------//
    let project = $('.works-portfolio-explame-wrapper');
    nav.each(function () {
        $(this).on("click", function () {
            nav.removeClass('active-w');
            $(this).addClass('active-w');

            let data = $(this).data();

            //Filter - Isotope v2
            $grid.isotope({
                filter: data.filter
            })
            /*
            project.each(function () {
            
                if ($(this).attr("class").indexOf(data.filter) != -1) {
                    $(this).show();
                    $(this).removeClass('hide');
                }
                else {
                    $(this).addClass('hide');
                    setTimeout(function(){$(this).hide()}.bind(this),500)
                }
            */
        })
    })

    //---------- Smooth gallery - Isotope v2 ----------//
    var $grid = $('#works-portfolio-explame-cnt').isotope({
        // options
        itemSelector: '.works-portfolio-explame-wrapper',
        layoutMode: 'fitRows'
    });

    //----------Efect show menu----------//
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler") && !clickover.hasClass("navbar-collapse")) {
            $("button.navbar-toggler").click();
        }
    });

    $(window).on("scroll", function () {
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true) {
            $("button.navbar-toggler").click();
        }
    });
    
});

$(window).on('load', function () {

    //---------- The effect of showing the text----------//
    $('.animate-el-hidden').each(function (i, el) {
        setTimeout(function () { $(el).addClass('animate-el'); }, 150 + (i*150));
    });

    //---------- Preloader ----------//
    $('#preloader').fadeOut();
    $('body').addClass('scrollbar-show');

});