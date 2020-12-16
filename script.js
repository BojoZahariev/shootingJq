$(document).ready(function() {
  $('#t1').click(function() {
    $(this).hide();

    setTimeout(() => {
      $(this).css('left', '120px');
      $(this).show();
    }, 2000);
  });
});
