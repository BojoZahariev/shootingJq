$(document).ready(function() {
  $('#t1').click(function(e) {
    var posX = e.pageX - $(this).offset().left;
    var posY = e.pageY - $(this).offset().top;

    console.log(posX, posY);
    $('#hole').css({ left: posX, top: posY });

    /*
    setTimeout(() => {
      $(this).hide();
    }, 1000);
     */
    setTimeout(() => {
      $(this).hide();
      $(this).css({ top: randomIntFromInterval(40, $(document).height() - 50) + 'px', left: randomIntFromInterval(40, $(document).width() - 50) + 'px' });
      $(this).show();
    }, 1000);
  });
});

//random number
const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};
