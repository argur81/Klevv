//Main Page
$(document).ready(function () {
    $('.desktop_layout .layout_data').fullpage({
        scrollingSpeed: 800,
        slidesNavigation: true,
        interlockedSlides: [1],
        onLeave: function (index, nextIndex, direction) {
            activateNavItem($('.section_menu ul').find('li').eq(nextIndex - 1));
        },
        afterRender: function () {
            activateNavItem($('.section_menu ul').find('li').eq($('.section.active').index()))
        },
        //Header Class & Video Show/Hide
        afterLoad: function (anchor, index) {
            if (index == 1) {
                function GoogleLineTracking() {
                    var ThisObjHeight = $('aside.google_line_tracking').outerHeight();
                    $('header.desktop').animate({ 'top' : ThisObjHeight });
                }
                GoogleLineTracking();
                $(window).resize(function () {
                    GoogleLineTracking();
                });
                $('aside.google_line_tracking').slideDown();
                $('header.desktop').addClass('transparency');
                $('header.desktop').removeClass('white');
                $('.section_menu').removeClass('gray');
                $('header.desktop').hover(function () {
                    $('header.desktop').removeClass('white');
                    $('header.desktop').removeClass('transparency');
                }, function () {
                    setTimeout(
                        function () {
                            $('header.desktop').removeClass('white');
                            $('header.desktop').addClass('transparency');
                        }, 800
                    );
                });
                $('#tubular-container').show();
                setTimeout(
                    function () {
                        $(".campaign1 video").get(0).play();
                        $(".campaign4 video").get(0).play();
                    }, 300
                );
            }
            if (index == 2) {
                $('header.desktop').animate({ 'top': 0 });
                $('aside.google_line_tracking').hide();
                $('header.desktop').addClass('transparency');
                $('header.desktop').removeClass('white');
                $('.section_menu').removeClass('gray');
                $('#tubular-container').hide();
                $('header.desktop').hover(function () {
                    $('header.desktop').removeClass('white');
                    $('header.desktop').removeClass('transparency');
                }, function () {
                    setTimeout(
                        function () {
                            $('header.desktop').removeClass('white');
                            $('header.desktop').addClass('transparency');
                        }, 800
                    );
                });
            }
            if (index == 3) {
                $('header.desktop').removeClass('transparency');
                $('header.desktop').addClass('white');
                $('.section_menu').addClass('gray');
                $('#tubular-container').hide();
                $('header.desktop').hover(function () {
                    $('header.desktop').removeClass('white');
                    $('header.desktop').removeClass('transparency');
                }, function () {
                    setTimeout(
                        function () {
                            $('header.desktop').addClass('white');
                            $('header.desktop').add('transparency');
                        }, 800
                    );
                });
            }
            if (index == 4) {
                $('header.desktop').removeClass('transparency');
                $('header.desktop').addClass('white');
                $('.section_menu').addClass('gray');
                $('#tubular-container').hide();
                $('header.desktop').hover(function () {
                    $('header.desktop').removeClass('white');
                    $('header.desktop').removeClass('transparency');
                }, function () {
                    setTimeout(
                        function () {
                            $('header.desktop').addClass('white');
                            $('header.desktop').add('transparency');
                        }, 800
                    );
                });
            }
            if (index == 5) {
                $('header.desktop').removeClass('transparency');
                $('header.desktop').addClass('white');
                $('.section_menu').addClass('gray');
                $('#tubular-container').hide();
                $('.section_menu li').removeClass('active')
                $('header.desktop').hover(function () {
                    $('header.desktop').removeClass('white');
                    $('header.desktop').removeClass('transparency');
                }, function () {
                    setTimeout(
                        function () {
                            $('header.desktop').addClass('white');
                            $('header.desktop').add('transparency');
                        }, 800
                    );
                });
            }
        }
    });
    $('aside.google_line_tracking a.close').click(function () {
        $('header.desktop').animate({ 'top': 0 });
        $('header.mobile').animate({ 'top': 0 });
        $('aside.google_line_tracking').remove();
        return false;

    });
    $('.section_menu ul li').click(function () {
        var destination = $(this).closest('li');
        $.fn.fullpage.moveTo(destination.index() + 1);
    });

    $('.event_popup .p_close').click(function () {
        $('.event_popup').hide();
    });

    function activateNavItem(item) {
        item.addClass('active').siblings().removeClass('active');
    }
    $(".main_campaign .fp-slidesNav ul li").eq(0).find('a').click(function () {
        $('#tubular-container').show();
        setTimeout(
            function () {
                $(".campaign1 video").get(0).play();
                $(".campaign4 video").get(0).play();
            }, 300
        );
    });
    //Main News Latest
    function string_cut(str, len, tail) {
        return str.substr(0, len) + tail;
    }
    var profile = $('.main_klevv_news ul li.text a');
    profile.each(function () {
        var cutted_profile = string_cut($(this).html(), 110, "...");
        $(this).html(cutted_profile);
    });
    //Go Top
    $('a.main_go_top_btn').click(function () {
        $.fn.fullpage.moveTo(1);
        return false
    });
    //*****Mobile Main UI*****//
    function GoogleLineTrackingMobile() {
        var ThisObjHeight = $('aside.google_line_tracking').outerHeight();
        $('header.mobile').css({ 'top': ThisObjHeight });
    }
    GoogleLineTrackingMobile();
    $(window).resize(function () {
        GoogleLineTrackingMobile();
    });
    $(window).scroll(function () {
        if ($(document).scrollTop() > 0) {
            $('header.mobile').stop().animate({ 'top': 0 });
            $('aside.google_line_tracking').hide();
        }
        else {
            $('aside.google_line_tracking').show();
            var ThisObjHeight = $('aside.google_line_tracking').outerHeight();
            $('header.mobile').stop().animate({ 'top': ThisObjHeight });
        }
    });
    //Main Banner
    $('.m_top_banner').flexslider({
        animation: "",
        pauseOnAction: false,
        pauseOnHover: true,
        controlNav: true,
        slideshow: false,
        directionNav: false,
    });
    $(".m_top_banner ol.flex-control-nav li a").html('<img src="img/mobile/main_banner_btn_off.png" class="off" /><img src="img/mobile/main_banner_btn_on.png" class="on" />');
    //Main News Latest
    function string_cut(str, len, tail) {
        return str.substr(0, len) + tail;
    }
    var profile = $('.m_main_klevv_news ul li.text ');
    profile.each(function () {
        var cutted_profile = string_cut($(this).html(), 110, "...");
        $(this).html(cutted_profile);
    }); 
    //Go Top
    $(document).ready(function () {
        var GoTopBtn = $('header').offset();
        $('a.m_main_go_top_btn').hide()
        $(window).scroll(function () {
            if ($(document).scrollTop() > GoTopBtn.top) {
                $('a.m_main_go_top_btn').fadeIn();
            }
            else {
                $('a.m_main_go_top_btn').fadeOut();
            }
        });
        $('a.m_main_go_top_btn').click(function () {
            $('html, body').animate({ scrollTop: 0 }, 500);
            return false
        })
    });
});
//Mobile Header
$(document).ready(function () {
    $(window).scroll(function () {
        var newsPos = $('.m_top_banner ul.slides li').height() + $('.m_main_new_products').height();
        var scroll = $(window).scrollTop();
        if (scroll >= newsPos) {
            $('header.mobile').addClass('white_st')
        } else {
            $('header.mobile').removeClass('white_st')
        }
    });
});