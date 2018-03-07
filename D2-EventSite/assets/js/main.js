let navbar=$(".navbar");
/* $(window).scroll(function(){
    var x=navbar.offset().top;

    if(x>100){
        navbar.css("padding","0px");
    }
    else{
        navbar.css("padding","15px 0px");
    }

 });
 */
 
var modal = $("#register"); 
$(".register-btn").click(()=>(modal.css("display","block")));

window.onclick = function(event) {
     if (event.target == modal[0]) {
        modal.css("display","none");
    } 
}

 $(".close").click(()=> (modal.css("display","none")))
 
const hideOnSmall=document.querySelector(".hide-on-small");
$(".menu-bar").click(function(){
    hideOnSmall.style.left=hideOnSmall.style.left=="0vw"?"-100vw":"0vw";
});

function mediaSize() { 
    /* Set the matchMedia */
    if (window.matchMedia('(min-width: 700px)').matches) {
    /* Changes when we reach the min-width  */
    $(window).scroll(function(){
        var x=navbar.offset().top;
    
        if(x>80){
            navbar.css("padding","0px");
        }
        else{
            navbar.css("padding","15px 0px");
        }
    
     });

    } else {
    /* Reset for CSS changes – Still need a better way to do this! */
        $('.navbar').removeAttr('style');
    }
};

/* Call the function */
mediaSize();
/* Attach the function to the resize event listener */
window.addEventListener('resize', mediaSize, false);

