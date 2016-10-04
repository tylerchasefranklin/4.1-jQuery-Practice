(function($){  //same as using var $ = jQuery;
  $(function(){
  "use strict";

$('.js-accordion').on('click',function(){
  if (!$(this).siblings('.js-panel').hasClass('active')) {
    $('.js-panel.active').removeClass('active');
  }
  $(this).siblings('.js-panel').toggleClass('active');


});



  });
}(jQuery));
