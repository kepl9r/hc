$(function() {

  $('#openModalContact').click(function() {
    $('#bgModalContact, #modalContact').show();
  });

  $('#bgModalContact').click(function() {
    $('#bgModalContact, #modalContact').hide();
  });

  $('#openModalInfos').click(function() {
    $('#bgModalInfos, #modalInfos').show();
  });

  $('#bgModalInfos').click(function() {
    $('#bgModalInfos, #modalInfos').hide();
  });

});
