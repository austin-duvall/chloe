$(document).ready(function(){
  $('#socialDiv main button').click(function() {
    $('#socialDiv main').toggleClass('expanded')
    $('#socialDiv main ul').toggleClass('appear')
    $('#socialDiv main button').toggleClass('flip')
    $('#socialDiv main p').toggleClass('disappear')
  })

  let prevScrollPos = $(window).scrollTop();

  $(window).scroll(function() {
    const scrollThreshold = 5;
    const currentScrollPos = $(window).scrollTop();

    if (Math.abs(currentScrollPos - prevScrollPos) > scrollThreshold) {
      $('#socialDiv main').removeClass('expanded');
      $('#socialDiv main button').removeClass('flip')
    }

    prevScrollPos = currentScrollPos;
  })

  $(document).click(function(e) {
    if (!$(e.target).closest('#socialDiv').length) {
      $('#socialDiv main').removeClass('expanded');
      $('#socialDiv main button').removeClass('flip');
    }
  })
})