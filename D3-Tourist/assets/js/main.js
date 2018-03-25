$(function() {
  let navTabExpand=true;
    $('.menu-btn').click(function() {
      /*let css={};
      if(navTabExpand){
        css={
          "top":$(".navbar").height()+19
        }
        $('.navbar').css('background','rgba(255,255,255,0.3)');
        navTabExpand=false;
      }
      else{
        css={
          "top":"-250px"
        }
        $('.navbar').css('background','initial');
        navTabExpand=true;
      }*/
      $('.navbar-nav').toggleClass("open");
      $('.navbar').toggleClass("navbar-open");   
  });
  $('.nav-links').click(function(){
    $('.navbar-nav').toggleClass("open");
  });
})
function myMap() {
  var mapProp= {
      center:new google.maps.LatLng(48.858370,2.294481),
      zoom:15,
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  }