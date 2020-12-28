$(document).ready(function () {
  $('#t1').click(function (e) {
    //checks if there are cartridges
    if ($('#cartridges p').hasClass('show')) {
      var posX = e.pageX - $(this).offset().left;
      var posY = e.pageY - $(this).offset().top;

      $('#gun')[0].play();
      $('#hole').show();
      $('#hole').css({ left: posX, top: posY });

     cartridgesFlow();

      setTimeout(() => {
        $('#gun')[0].pause();
        $('#gun')[0].currentTime = 0;
        $(this).hide();
        $('#hole').hide();
        $(this).css({ top: randomIntFromInterval(40, $(document).height() - 80) + 'px', left: randomIntFromInterval(40, $(document).width() - 80) + 'px' });
        $(this).show();
      }, 400);
    } else if ($('#reloadText').length === 0) {
      $('#cartridges').append($("<p id='reloadText'></p>").text('Click to reload'));
    }
  });
});

const cartridgesFlow=()=> {
  $('#cartridges .show:last').addClass('hide');
  $('#cartridges .show:last').removeClass('show');
  $('#cartridges .hide:last').hide();
  $('#cartridges .hide:last').removeClass('hide');
}

//Reload
$('#cartridges').click(function (e) {
  $('#reloadText').remove();
  $('#cartridges .cart').addClass('show');
  $('#cartridges .cart').show();
});

//random number
const randomIntFromInterval = (min, max) => {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
};
