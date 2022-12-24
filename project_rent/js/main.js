$(function(){
$(".top_slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            dots: false
          }
        },
      ]
});

});  

$(function(){
$(".review_slider").slick({
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
});

$(".menu_btn").on("click", function(){
    $(".menu_list").toggleClass("menu_list--active");
});
});