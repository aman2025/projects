$(function(){
  //移动端-导航点击
  $(".nav-toggle").on("click",function(){
    if($(".nav").is(":visible")){
      $(".nav").css('display','none') 
    }else{
     $(".nav").css('display','block')
    }
  })
  
  //显示隐藏二级导航
  $("#nav li").mouseenter(function(){
    $(this).find(".nav-sub-wrap").stop().fadeIn();
    $(this).find(".nav-sub").stop().fadeIn();
  })
  $("#nav li").mouseleave(function(){
    $(this).find(".nav-sub-wrap").stop().fadeOut();
    $(this).find(".nav-sub").stop().fadeOut();
  })
  
})