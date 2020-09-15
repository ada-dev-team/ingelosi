function openNav() {
  document.getElementById("myNav").style.display = "block";
}
  
function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

// Carousel indicators*********************************************************************************************************
  
$(document).ready(function(){
  // Activate Carousel
  $("#carouselExampleControls").carousel();
    
  // Enable Carousel Indicators
  $(".item1").click(function(){
    $("#carouselExampleControls").carousel(0);
  });
  $(".item2").click(function(){
    $("#carouselExampleControls").carousel(1);
  });
  $(".item3").click(function(){
    $("#carouselExampleControls").carousel(2);
  });
  $(".item4").click(function(){
    $("#carouselExampleControls").carousel(3);
  });

});
