$(document).ready(function(){
    //lnb
    const navbtn = $(".nav>ul>li");
    const navSub = $(".nav>ul>li>.sub-menu");
        
    //탭메뉴 하실경우
    $(".nav>ul>li").click(function(){   
        $(".nav>ul>li").removeClass("active");
        $(this).addClass("active");
    });
        
    navbtn.mouseover(function(){
        $(this).find(">ul").stop().slideDown(300);
        $(this).addClass("on");      
    });
    navbtn.mouseleave(function(){
        $(this).find(">ul").stop().slideUp(300);
        $(this).removeClass("on");      
    });
        
    $(window).scroll(function(){
        let navOst = $("#section--sub-nav").offset().top;
            
        if($(window).scrollTop() > navOst ){
            $(".sub-nav").addClass("on");
        }else if($(window).scrollTop() < navOst ){
            $(".sub-nav").removeClass("on");
        }
    });
})