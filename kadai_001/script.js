$(function(){
  $('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
  });
  $('.home').hover(
    function(){
      $(this).stop().animate({opacity:0.7},300);
    },
    function(){
      $(this).stop().animate({opacity:1},300);
    }
  );
  
  $('.menu a').hover(
    function(){
      $(this).stop().animate({opacity:0.7},300);
    },
    function(){
      $(this).stop().animate({opacity:1},300);
    }
  );

  const $btn=$('.back-to-top');
  $(window).scroll(function(){
    if($(this).scrollTop()>100){
      $btn.addClass('show');
    }else{
      $btn.removeClass('show');
    }
  });

  $btn.click(function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0},500);
  });

  $('a[href^="#"]').click(function(e){
    e.preventDefault();
    const target=$($(this).attr('href'));
    if(target.length){
      const position=target.offset().top;
      $('html, body').animate({scrollTop:position},600);
    }

  });

  $(window).on('scroll',function(){
    $('.fadein').each(function(){
      const targetPos=$(this).offset().top;
      const scroll=$(window).scrollTop();
      const windowHeight=$(window).height();

      if(scroll>targetPos-windowHeight+100){
        $(this).addClass('show');
      }
    })
  })

  $('.works-inner img').click(function(){
    const imgSrc=$(this).attr('src');
    $('#modal-img').attr('src',imgSrc);
    $('#imgModal').fadeIn();
  });

  $('.close').click(function(){
    $('#imgModal').fadeOut();
  });

  $('.works-inner img').hover(
    function() {
      $(this).fadeTo(200, 0.8);
    },
    function() {
      $(this).fadeTo(200, 1);
    }
  );

});

