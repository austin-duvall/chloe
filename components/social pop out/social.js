$(document).ready(function(){
  $('#socialDiv main button').click(function() {
    $('#socialDiv main').toggleClass('expanded')
    $('#socialDiv main ul').toggleClass('appear')
    $('#socialDiv main button').toggleClass('flip')
    $('#socialDiv main p').toggleClass('disappear')
  })
})