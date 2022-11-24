$('document').ready(function(){
  $('.bt').click(function(){
     if(!$('#int1').val() || !$('#int2').val()){
        alert("Please Fill All The Details:");
       
     }
    //  if(!$('#int2').val()){
    //     alert("Please Fill All The Details:");
    //  }
     
  })
});