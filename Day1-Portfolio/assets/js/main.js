
const navbar=document.querySelector(".navbar");
let navWidth=navbar.getBoundingClientRect().width;

const icons=document.querySelectorAll(".icons");
let iconsWidth= icons[0].getBoundingClientRect().width;

let navShift=navWidth-iconsWidth;

navbar.style.left=`-${Math.floor(navShift)-10}px`;
navbar.addEventListener("mouseover",()=>(navbar.style.left="0px"));
navbar.addEventListener("mouseout",()=>(navbar.style.left=`-${Math.floor(navShift)-10}px`));

let menuBar=document.querySelector(".menu-bar");
menuBar.addEventListener("click",()=>{
    navbar.style.display="flex";
    navbar.style.left=navbar.style.left=="0px"?"-250px":"0px";
});
menuBar.addEventListener("mouseout",()=>(navbar.style.left="-250px"));

/*const navtab=document.querySelectorAll(".navbar .nav-tabs li a");
navtab.forEach(el=>el.addEventListener("click",scrollAnimation));

function scrollAnimation(e){
    
    let value="";
    if(e.target.tagName=="SPAN"){
        value=e.target.parentElement
    }
    else if(e.target.tagName==="I"){
        value=e.target.parentElement.parentElement
    }
    else{
        value=e.target;
    }
    value.classList="active";
var scrollTop=document.querySelector(`#${value.getAttribute("data-value")}`).getBoundingClientRect().top;
document.body.scrollTo(0,scrollTop);
console.log(scrollTop);
console.log(value);
}
*/
/**** on click scroll ****/
$(".navbar li a").click(function(e){
    $("body,html").animate({
        scrollTop:$("#"+$(this).data('value')).offset().top
    },1000);

    $('.navbar li a.active').removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
});

/*** Scroll-spy Function */
$(window).scroll(function() {
    var x = document.documentElement.scrollTop || document.body.scrollTop;
    $("section.scroll").each(function(index) {
        var z=$(this).attr("id");
      if (x >= $(this).offset().top && x < $(this).offset().top + $(this).height()) {
        $(`[data-value='${z}']`).addClass("active");
      } else {
        $(`[data-value='${z}']`).removeClass("active")
      }
    })
  })