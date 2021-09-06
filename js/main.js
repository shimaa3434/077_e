$(document).scroll(function(){
    $('.navbar').toggleClass('scroll', $(this).scrollTop() > $(".navbar").height());
});

$('.filter-container').filterizr({
    animationDuration: 0.5,
  });