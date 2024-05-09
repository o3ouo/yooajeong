$(function(){

    /* 상단 슬라이드 */
    $('.top_slidebox').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
    });

    /* 메뉴 */
    $('.c_menu').click(function(){
        $('nav').animate({left: "0"},500)
        $('.logo').animate({left: "50%"},500)
        $('header .icon').hide()
        $('header .close').css({display: "block"})
        $('header').css({position: "fixed"})
    });

    $('.close').click(function(){
    $('nav').stop().animate({left: "100%"},500)
    $('.logo').animate({left: "0"},500)
    $('header .icon').show()
    $('header .close').css({display: "none"})
    $('header').css({position: "absolute"})
    });

///////////////////
});