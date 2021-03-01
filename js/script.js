$(function(){
    'use strict';

    // js banner part
    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
      });
      // js test part
      $('.test-slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        dots:true,
      });
      // counter js start
      $('.count').counterUp({
        delay: 10,
        time: 1000
    });

    // market js start
    $('.market').slick({
      centerMode: true,
      centerPadding: '60px',
      slidesToShow: 5,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });
      // practise me
      // var a=prompt('enter the first value');
      // var b=prompt('enter the second value');
      // if(a>b){
      //   document.write('a is big');
      // }
      // else{
      //   document.write('a is small');
      // }

});