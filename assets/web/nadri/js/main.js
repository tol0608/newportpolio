$(function () {
    // $(".slide_img").slick({
    //     lazyLoad: 'ondemand', // ondemand progressive anticipated
    //     infinite: true
    // });
    $('.slide_img').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slide_txt'
    });
    $('.slide_txt').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite:true,
        autoplay:true,
        asNavFor: '.slider-for'
    });
    $(".sec3_insta").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    });
    $(".sec3_youtube").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true
    });
    $(".sec4_video").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    });
    $(".sec5_slide").slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });

    var sta = 0;
    $('.btn_all').click(function(){
      if (sta == 0) {
        $(this).addClass('on'); 
        $('.box').addClass('on'); //C
        sta = 1;
      }
      else {
          $(this).removeClass('on'); 
          $('.box').removeClass('on');  //C
          sta = 0;
      }
    })
       var a = 0;
       $('.head_btn').click(function(){
           if (a == 0) {
               $('.head_box').slideUp();
               $('#language_select').slideDown();
               a = 1;
           } else{
            $('.head_box').slideUp();
            a = 0;
           }
       })

       var b = 0;
       $('.zoom').click(function(){
           if (b == 0) {
               $('.head_box').slideUp();
               $('.zoom_input').slideDown();
               b = 1;
           } else{
            $('.head_box').slideUp();
            b = 0;
           }
       })
})