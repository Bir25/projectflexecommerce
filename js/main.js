$(document).ready(function(){
    $(".slide").owlCarousel({
        items:2,
        loop:true,
        margin:20,
        dots:true,
        autoplay:true,
    });
    $(".slide1").owlCarousel({
        items:3,
        loop:true,
        margin:20,
        dots:true,
        autoplay:true,
    });
    $(".slide3").owlCarousel({
        items:2,
        loop:true,
        margin:20,
        dots:true,
        autoplay:true,
    });
    $(".slide4").owlCarousel({
        items:5,
        loop:true,
        margin:20,
        dots:false,
        autoplay:true,
        autoplayTimeout:1500,
        responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:6,
            nav:false,
            loop:true,
        }
    }
    });
    $(".slide5").owlCarousel({
        items:3,
        loop:true,
        margin:20,
        dots:false,
        autoplay:true,
    });
  });


$(window).scroll(function(){
    if($(this).scrollTop()>100)
    {
        $(".arrow").show()
        $("nav").addClass("abcd")
    }
    else
    {
        $(".arrow").hide()
        $("nav").removeClass("abcd")
    }
});
$("span").click(function(){
    $(".nav ul").toggle();
})

var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var Indicator = document.getElementById("Indicator");
function register()
{
    RegForm.style.transform =" translateX(0px)";
    LoginForm.style.transform = " translateX(0px)";
    Indicator.style.transform = " translateX(100px)";
}
function login()
{
    RegForm.style.transform =" translateX(300px)";
    LoginForm.style.transform = " translateX(300px)";
    Indicator.style.transform = " translateX(0px)";
}


var ProductsImg = document.getElementById("ProductsImg");
var SmallImg = document.getElementsByClassName("small-img");
SmallImg[0].onclick = function()
{
    ProductsImg.src = SmallImg[0].src;
}
SmallImg[1].onclick = function()
{
    ProductsImg.src = SmallImg[1].src;
}
SmallImg[2].onclick = function()
{
    ProductsImg.src = SmallImg[2].src;
}
SmallImg[3].onclick = function()
{
    ProductsImg.src = SmallImg[3].src;
}



