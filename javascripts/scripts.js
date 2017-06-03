$(function() {

  $('#openModalContact').click(function() {
    $('#bgModalContact, #modalContact').fadeIn();
  });

  $('#bgModalContact').click(function() {
    $('#bgModalContact, #modalContact').fadeOut();
  });

  $('#openModalInfos').click(function() {
    $('#bgModalInfos, #modalInfos').fadeIn();
  });

  $('#bgModalInfos').click(function() {
    $('#bgModalInfos, #modalInfos').fadeOut();
  });

});


$(document).ready(function () {
   //initialize swiper when document ready
   var swiper = new Swiper('.swiper-container', {
       pagination: '.swiper-pagination',
       paginationClickable: true
   });
 });
