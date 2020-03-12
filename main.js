feather.replace();
$('.___menu-sidebar').click(function() {
    $('.___sidebar').toggleClass('active');
});
$(document).ready(function() {
    $('.select-control').select2();
    scrollFunction();
    getSideWidth();
});
$(window).resize(function(){
  $('.select-control').select2();
  getSideWidth();
});
$(window).scroll(function() {
    scrollFunction();
});
function scrollFunction() {
    var hei = $('.navbar').height();
    if ($(document).scrollTop() > hei || $(document).scrollTop() > hei) {
        $('.navbar').addClass('scroll');
    }
    else {
        $('.navbar').removeClass('scroll');
    }
}