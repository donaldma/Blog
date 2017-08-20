$(document).ready(function() {
  var remaining = 300 - $('#short-about-me').val().length;
  if(remaining === 0) {
    $('#counter').css('color', '#a94442')
  } else {
    $('#counter').css('color', 'black')
  }
  $('#counter').text(remaining);
  

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

  $('#short-about-me').keyup(function() {
    var remaining = 300 - $('#short-about-me').val().length;
    if(remaining === 0) {
      $('#counter').css('color', '#a94442')
    } else {
      $('#counter').css('color', 'black')
    }
    $('#counter').text(remaining);
  })

})