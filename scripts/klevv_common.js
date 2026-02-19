
$(document).ready(function () {
    //GNB
    $("header.desktop nav a").mouseover(function () {
        $("header.desktop .gnb_drop_menu .menu_data").hide();
        var activeTab = $(this).attr("rel");
        $('header.desktop .gnb_drop_menu').stop(true, false).slideDown(700);
        $("#" + activeTab).stop(true, false).slideDown(500);
        $('header.desktop').removeClass('transparency');
        $('header.desktop').removeClass('white');
    });
    //GNB Image Change
    $("header.desktop .menu_data .menu_list a").mouseover(function () {
        $(this).parent().parent().parent().prev('.img_zone').find('li').hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).css({'display':'inline-block'});
    });

    $('.gnb_drop_menu div.menu_data[class*=list]').hover(function () {
        var idx = $('.gnb_drop_menu div.menu_data[class*=list]').index(this);
        console.log(idx);
        $('header.desktop nav a.btn' + (idx + 1)).addClass('on');
    }, function () {
        var idx = $('.gnb_drop_menu div.menu_data[class*=list]').index(this);
        $('header.desktop nav a.btn' + (idx + 1)).removeClass('on');
    });

    //Top Search
    $("header.desktop .search_btn_open").click(function () {
        $('header.desktop .top_search').animate({ "right": "0" }, 500);
        return false
    });
    //$("header.desktop .search_btn_open").mouseover(function () {
    //    $('header.desktop .top_search').animate({ "right": "0" }, 500);
    //    return false
    //});
    //$("header.desktop .search_btn_open").mouseleave(function () {
    //	if($('header.desktop .top_search').css('right')!='0px'){
	//		$("header.desktop .search_btn_open").mouseover(function () {
    //    		$('header.desktop .top_search').animate({ "right": "0" }, 500);
    //		    return false
	//	    });
	//   }
    //    return false
    //});
    $("header.desktop .search_btn_close").click(function () {
    	//$("header.desktop .search_btn_open").unbind("mouseover");
        $('header.desktop .top_search').animate({ "right": "-100%" }, 500);
        $('header.desktop .search_field input[type=text]').val('');
        return false
    });
    //Drop Menu Close
    $("header.desktop").mouseleave(function () {
        $('header.desktop .gnb_drop_menu').stop(true, false).slideUp(700);
        $('header.desktop .gnb_drop_menu .menu_data').stop(true, false).slideUp(500);
    });
    $(".top_con_menu").hover(function () {
        $('header.desktop .gnb_drop_menu').slideUp(700);
        $('header.desktop .gnb_drop_menu .menu_data').slideUp(500);

    });
    $("header.desktop .top_search a.search_btn").click(function () {
        $('header.desktop .gnb_drop_menu').slideUp(700);
        $('header.desktop .gnb_drop_menu .menu_data').slideUp(500);
    });
    //Language
    $(".language_select .now").click(function () {
        $('.language_select ul').slideDown();
    });
    $('.language_select ul').mouseleave(function () {
        $(this).slideUp();
    });
    //All Menu
    $(".all_menu_open_btn").click(function () {
        $('.all_menu_area').animate({ "left": "0" });
        $('.section_menu').hide();
        
    });
    $(".all_menu_close_btn").click(function () {
        $('.all_menu_area').animate({ "left": "-100%" });
        $('.section_menu').show();
    });
    $('.all_menu_area li.sub_menu a').hover(function () {
        $(this).parent().parent().find('.main_menu a').addClass('over');
    }, function () {
        $('.all_menu_area li.main_menu a').removeClass('over');
    })
    
    //Footer Language
    $(".f_language").click(function () {
        $('.f_language ul').show();
    });
    $(".f_language ul").mouseleave(function () {
        $(this).hide();
    });
    $(".m_f_language").click(function () {
        $('.m_f_language ul').show();
    });
    $(".m_f_language ul").mouseleave(function () {
        $(this).hide();
    });
    //Footer Language(Mobile)
    $(".mo_foot_language .now").click(function () {
        $('.mo_foot_language ul').slideToggle();
    });
    $('.mo_foot_language').mouseleave(function () {
        $('.mo_foot_language ul').slideUp();
    });
    //Go Top
    $(document).ready(function () {
        var GoTopBtn = $('header').offset();
        $('.go_top_btn').hide()
        $(window).scroll(function () {
            if ($(document).scrollTop() > GoTopBtn.top) {
                $('.go_top_btn').fadeIn();
            }
            else {
                $('.go_top_btn').fadeOut();
            }
        });
    });
    $('.go_top_btn').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
        return false
    })
    //Top Search
    $(".m_btn_area .m_search_btn").click(function () {
        $('.m_search_area').stop().animate({ "right": "0" });
        return false;
    });
    $(".m_search_area .search_close").click(function () {
        $('.m_search_area').stop().animate({ "right": "-100%" })
        $('.m_search_area input[type=text]').val('');
        return false;
    });
    //GNB
    $("header.mobile .m_btn_area .m_menu_btn").click(function () {
        $('header.mobile nav').animate({ "right": "0" });
        return false;
    });
    $("header.mobile nav span.menu_close_btn").click(function () {
        $('header.mobile nav').animate({ "right": "-100%" });
        $('header.mobile nav ul.main_menu dl').slideUp();
        $('header.mobile nav ul.main_menu dd').slideUp();
        $('header.mobile nav ul.main_menu li').removeClass('open');
        $('header.mobile nav ul.main_menu dt').removeClass('on');
    });
    
    $("header.mobile nav ul.main_menu > li > span").click(function () {  
        if ($(this).parent().hasClass("close")) {
            $('header.mobile nav ul.main_menu > li > span').nextAll('dl').stop('true', 'true').slideUp();
            $('header.mobile nav ul.main_menu > li.close dl').hide();
            $('header.mobile nav ul.main_menu > li.close dd').hide();
            $('header.mobile nav ul.main_menu > li.close dt').removeClass('on');
            $("header.mobile nav ul.main_menu li").removeClass('open');
        };
        $("header.mobile nav ul.main_menu li").addClass('close');
        $(this).parent('li').removeClass("close");
        $(this).parent('li').toggleClass("open");    
        $(this).nextAll('dl').stop('true', 'true').slideToggle(); 
    });
    $("header.mobile nav ul.main_menu > li dt").click(function () {
        $(this).next('dd').stop('true', 'true').slideToggle();
        $(this).toggleClass("on");
    });

});