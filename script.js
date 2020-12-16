$(document).ready(function() {
  $('#t1').click(function() {
    $(this).hide();

    setTimeout(() => {
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
