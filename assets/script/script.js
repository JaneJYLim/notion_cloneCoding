// 서브메뉴 구현
$(".header-main-menu li").mouseover(function(){
    $(this).children(".header-sub-menu").stop().fadeIn(100);
});

$(".header-main-menu li").mouseout(function(){
    $(this).children(".header-sub-menu").stop().fadeOut(100);
});

//스크롤 내리면 header-fixed-menu position:fixed; 구현
$(window).scroll(function(){
    if ($(window).scrollTop() >= 40) {
       $('.init-header').css({"display":"none"});
       $('.stiky-header').css({"display":"block"});
    }
    else {
        $('.init-header').css({"display":"block"});
        $('.stiky-header').css({"display":"none"});
    }
});  