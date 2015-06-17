

// FAQ TOGGLE JS
$("#faq-section").on('click','.glyphicon', function(){
  if($(this).hasClass('glyphicon-chevron-down')){
    $(this).removeClass('glyphicon-chevron-down');
    $(this).addClass('glyphicon-chevron-up');
  } else {
    $(this).removeClass('glyphicon-chevron-up');
    $(this).addClass('glyphicon-chevron-down');
  }
})