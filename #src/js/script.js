//menu-burger
$('.icon-menu').click(function (event) {
   $(this).toggleClass('active');
   $('.menu__body').toggleClass('active');
   $('body').toggleClass('lock');
})

$('a[href^="#"]').on('click', function () {

   let href = $(this).attr('href');

   $('html, body').animate({
      scrollTop: $(href).offset().top
   });
   return false;
});