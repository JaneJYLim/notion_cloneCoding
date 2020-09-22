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


//슬라이드구현

let interval = setInterval(fnTopSlide, 3000);

function fnTopSlide() {
    $("#slide-fade-frame a:first").fadeOut(1000, function(){
        $("#slide-fade-frame a:first").insertAfter("#slide-fade-frame a:last");
    });
    $("#slide-fade-frame a:nth-child(2)").fadeIn();

}

//글자 클릭했을 때, slide 정지
$(".slide-btn span").click(function(){
    clearInterval(interval);

});

//글자 클릭했을 때, 슬라이드 이동
$(".slide-btn #first-span").click(function(){
    $(this).css({"border-bottom":"2px solid #000"});
    $(".slide-btn #second-span, .slide-btn #third-span").css({"border-bottom":"none"});
    $("#slide-fade-frame #first-a").fadeIn();
    $("#slide-fade-frame #second-a").fadeOut();
    $("#slide-fade-frame #third-a").fadeOut();
});

$(".slide-btn #second-span").click(function(){
    $(this).css({"border-bottom":"2px solid #000"});
    $(".slide-btn #first-span, .slide-btn #third-span").css({"border-bottom":"none"});
    $("#slide-fade-frame #first-a").fadeOut();
    $("#slide-fade-frame #second-a").fadeIn();
    $("#slide-fade-frame #third-a").fadeOut();
});

$(".slide-btn #third-span").click(function(){
    $(this).css({"border-bottom":"2px solid #000"});
    $(".slide-btn #first-span, .slide-btn #second-span").css({"border-bottom":"none"});
    $("#slide-fade-frame #first-a").fadeOut();
    $("#slide-fade-frame #second-a").fadeOut();
    $("#slide-fade-frame #third-a").fadeIn();
});


