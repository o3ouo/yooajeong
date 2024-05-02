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
        $('nav').stop().animate({left: "0"},500)
        $('.logo').animate({left: "47%"},500)
    });


    $('.close').click(function(){
    $('nav').stop().animate({left: "100%"},500)
    $('.logo').animate({left: "0"},500)
    });

    $('.m_2 li a').stop().mouseover(function(){
        $(this).css({
            fontSize: "4rem",
            color: "#008ac9"
        })
    })

    $('.m_2 li a').stop().mouseout(function(){
        $(this).css({
            fontSize: "3.2rem",
            color: "#fff"
        })
    })


///////////////////
});