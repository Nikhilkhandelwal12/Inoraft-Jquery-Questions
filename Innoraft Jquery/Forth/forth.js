$(document).ready(function(){
   $('header').click(function(){
    $('header').css("background-color", "blue");
   });
   $('.firstdiv').click(function(){
    $('.firstdiv').text("LeftBar");
   });
   $('.thirddiv').click(function(){
    $('.seconddiv').fadeOut(2000);
   });
});