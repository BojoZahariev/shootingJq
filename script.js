$(document).ready(function() {
  $('#t1').click(function(e) {
    var posX = e.pageX - $(this).offset().left;
    var posY = e.pageY - $(this).offset().top;

    $('#gun')[0].play();
    $('#hole').show();
    $('#hole').css({ left: posX, top: posY });

    setTimeout(() => {
      $('#gun')[0].pause()
      $('#gun')[0].currentTime = 0;
      $(this).hide();
      $('#hole').hide();
      $(this).css({ top: randomIntFromInterval(40, $(document).height() - 80) + 'px', left: randomIntFromInterval(40, $(document).width() - 80) + 'px' });
      $(this).show();
    }, 500);
  });
});

//random number
const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};

