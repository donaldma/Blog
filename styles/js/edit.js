$(document).ready(function() {
  $('.edit-btn').on('click', function() {
    $('.profile').slideToggle('fast');
    $('.edit-profile').slideToggle('fast');
    $('.back-btn').slideToggle('fast');
    $('.edit-btn').hide();
  });

  $('.back-btn').on('click', function() {
    $('.profile').slideToggle('fast');
    $('.edit-profile').slideToggle('fast');
    $('.edit-btn').slideToggle('fast');
    $('.back-btn').hide();
  });

})