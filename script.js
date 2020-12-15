$(document).ready(function() {
  $('#t1').click(function() {
    $(this).hide();

    setTimeout(() => {
      $(this).show();
    }, 2000);
  });
});
