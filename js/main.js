$(function(){


    $('.top_slidebox').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
    });

    $('.c_menu').click(function(){
        $('nav').animate({left: "0"},500)
        $('.logo').animate({left: "47%"},500)
    });


    $('.close').click(function(){
    $('nav').animate({left: "100%"},500)
    $('.logo').animate({left: "0"},500)
    });



///////////////////
});