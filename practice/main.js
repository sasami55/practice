$('.icon').click(function(){
  $('#modal').fadeIn('slow');
  $('.icon').fadeOut();
});

$('.toggle').click(function(){
  var $open=$(this).next().show();
  if($(this).hasClass('$open')){
    $(this).removeClass('$open')
    $(this).next().hide()
    $(this).text('+')
  }else{
    $(this).addClass('$open')
    $(this).text('-')
  }
});

$('.index-btn').click(function(){
  $('.active').removeClass('active');
  var clickedIndex = $('.index-btn').index($(this));
  $('.item').eq(clickedIndex).addClass('active');
});

// $('input').click(function(){

//   if($('option').hasClass('.first')){
//     $('p').show();
//   }
// });

$('#form').submit(function() {
  var selectItem = $('#gender').val();
  var textItem = $('#text').val();
  if (textItem == '') {
    $('.error').show();
  } else {
    $('.error').hide();
  }
  return false;
});

$('header a').click(function(){
  var id=$(this).attr('href');
  var position=$(id).offset().top;
  $('html,body').animate({ 
    'scrollTop': position 
  }, 500);
});

$('.header-left p').click(function(){
  $('html,body').animate({
    'scrollTop':0
  },500);
});