$(document).ready(function () {
    var menu = $("nav ul li");
    var content = $("#wrap>.box");
    
    //앵커 태그 새로고침 차단
    $('a[href="#"]').click(function(e){
       e.preventDefault(); 
    });

     //프로젝트 영역 탭 선택
    $(".tabs li").click(function(){
    var tab_id = $(this).attr("data-tab");
     
     $(".tabs li a h3").removeClass("current");
     $(".tab_content").removeClass("current");
     
     $(this).find("a").find("h3").addClass("current");
     $("#"+tab_id).addClass("current");
    });

    //nav 영역 열고 닫기
    $("#menu_open").on("click", function(){
        $("#nav").addClass("active");
        $("#menu_close, #nav li").stop().fadeIn();
        $("#nav_bg").stop().fadeIn();
        $('body').css('overflow', 'hidden');
        $(".box a").attr("tabindex", "-1");
    });

    $("#menu_close, #nav_bg").on("click", function(){
        $("#nav").removeClass("active");
        $("#menu_close, #nav li").stop().fadeOut();
        $("#nav_bg").stop().fadeOut();
        $('body').css('overflow', 'auto');
        $(".box a").attr("tabindex", "0");
    });

    //a 태그(메뉴) 클릭시 부드럽게 이동
    $('a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });

    //현재 보이는 영역에 맞추어 메뉴 하이라이트
    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();

        if (wScroll >= content.eq(0).offset().top) {
            menu.removeClass("active");
            menu.eq(0).addClass("active");
        }
        //#projects
        if (wScroll >= content.eq(1).offset().top * 0.9) {
            menu.removeClass("active");
            menu.eq(1).addClass("active");
        }
        //about
        if (wScroll >= content.eq(2).offset().top * 0.9) {
            menu.removeClass("active");
            menu.eq(2).addClass("active");
        }
        //contact
        if (wScroll >= content.eq(3).offset().top * 0.8) {
            menu.removeClass("active");
            menu.eq(3).addClass("active");
        }
    });

    //프로젝트 영역 swiper
    new Swiper('.swiper-container', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }

    });

    //모달 창
    $('.modal_open').click(function(e){
        var target = $(this).attr("href");
        
       e.preventDefault();
        $(target).addClass('on');
        $('#modal_bg').stop().fadeIn(600);
        $('body').css("overflow","hidden");
    });
    
    $('.modal').click(function(){
        $('.modal').removeClass('on');
        $('#modal_bg').stop().fadeOut(600);
        $('body').css("overflow","auto");
    });



});
