$(document).ready(function() {

function changeTab(){
  var target = $(this).data('target'); // Note: http://api.jquery.com/data/
  
  $('#tab-navigation li').removeClass('selected');
  $('#tab-navigation li').addClass('noSelected');
  $(this).removeClass('noSelected');
  $(this).addClass('selected');    
  $('.tabContainer').addClass('hidden');
  $(target).removeClass('hidden');
}

function increaseLikes(){
  var myString = $(this).children('nlike').first().html(); // Note: http://stackoverflow.com/questions/306583/this-selector-and-children
  var myInteger = parseInt(myString); // Note: http://www.minihowtos.net/jquery-parseint
  var myNewInteger = myInteger + 1;
  var nlikesUp = myNewInteger.toString(); // changing again to an string

  $(this, '.nLikes').html(nlikesUp);
}

$('#tab-navigation li').click(changeTab);
$('.likes').click(nlikesUp);

});