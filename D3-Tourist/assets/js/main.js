$(function() {
  let navTabExpand=true;
    $('.menu-btn').click(function(e) {
      let css={};
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
      }
      $('.navbar-nav').animate(css,1000);
  });
})