
$(window).resize(function(){
  $('.gnb-nav > ul > li').off('mouseenter');
  $('.gnb-nav > ul > li').off('mouseleave');
  //pc, 테블릿
  if($('.classy-nav-container').hasClass('breakpoint-off')){
    $('.gnb-nav > ul > li').on({
      mouseenter:function(){
        $('.dropdown').stop().slideDown();
      },
      mouseleave:function(){
        $('.dropdown').stop().slideUp();
      }
    })
  }else{
    //모바일
    $('.dropdown').hide();
    $('.gnb-nav > ul > li').on({
      mouseenter:function(){
        $(this).find('.dropdown').stop().slideDown();
      },
      mouseleave:function(){
        $(this).find('.dropdown').stop().slideUp();
      }
    })
  }
})
$(window).trigger('resize');
