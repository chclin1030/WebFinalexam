$(document).ready(function(){
    $("img").hover(function(){
        $("img").attr('src','img/btn.png');
    },function(){
        $("img").attr('src','img/btn2.png');
    });

    $(".dogimg1").mouseenter(function(){
        $(".designer1").fadeIn(300);
        $(".name1").fadeIn(300);
    });
    $(".dogimg1").mouseleave(function(){
        $(".designer1").fadeOut(300);
        $(".name1").fadeOut(300);
    });

    $(".dogimg2").mouseenter(function(){
        $(".designer2").fadeIn(300);
        $(".name2").fadeIn(300);
    });
    $(".dogimg2").mouseleave(function(){
        $(".designer2").fadeOut(300);
        $(".name2").fadeOut(300);
    });

    $(".dogimg3").mouseenter(function(){
        $(".designer3").fadeIn(300);
        $(".name3").fadeIn(300);
    });
    $(".dogimg3").mouseleave(function(){
        $(".designer3").fadeOut(300);
        $(".name3").fadeOut(300);
    });

    $(".dogimg4").mouseenter(function(){
        $(".designer4").fadeIn(300);
        $(".name4").fadeIn(300);
    });
    $(".dogimg4").mouseleave(function(){
        $(".designer4").fadeOut(300);
        $(".name4").fadeOut(300);
    });
    $(".box1").click(function(){
        $(".pic1").attr(".pic1-hover");
    });
});
const mobileMenu = document.querySelector('.mobile-menu')
const navbar = document.querySelector('.menu')
  mobileMenu.addEventListener('click', function (){
  navbar.classList.toggle('open')
});

