$(document).ready(function() {
  $('#stream').click(function() {
    $('#streamPanel').slideToggle('slow');
    $('.btnLink-a').toggleClass('linkClicked');
    $('.border-x-a').toggleClass('contClicked')
  })
  $(document).click(function(e) {
    if (!$(e.target).closest('#stream').length) {
      $('#streamPanel').slideUp('slow');
      $('.btnLink-a').removeClass('linkClicked');
      $('.border-x-a').removeClass('contClicked');
    }
  })
  let prevScrollPos = $(window).scrollTop();

  $(window).scroll(function() {
    const scrollThreshold = 5;
    const currentScrollPos = $(window).scrollTop();

    if (Math.abs(currentScrollPos - prevScrollPos) > scrollThreshold) {
      $('#streamPanel').slideUp('slow');
      $('.btnLink-a').removeClass('linkClicked');
      $('.border-x-a').removeClass('contClicked');
    }

    prevScrollPos = currentScrollPos;
  })
})