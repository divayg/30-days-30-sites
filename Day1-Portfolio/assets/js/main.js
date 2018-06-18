
const navbar=document.querySelector(".navbar");
let navWidth=navbar.getBoundingClientRect().width;

const icons=document.querySelectorAll(".icons");
let iconsWidth= icons[0].getBoundingClientRect().width;

let navShift=navWidth-iconsWidth;

navbar.style.left=`-${Math.floor(navShift)-10}px`;
navbar.addEventListener("mouseover",()=>(navbar.style.left="0px"));
navbar.addEventListener("mouseout",()=>(navbar.style.left=`-${Math.floor(navShift)}px`));

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

/*** Scroll-spy Function ***/
$(window).scroll(function() {
    var x = document.documentElement.scrollTop || document.body.scrollTop;
    $("section.scroll").each(function(index) {
        var z=$(this).attr("id");
      if (x >= $(this).offset().top && x < $(this).offset().top + $(this).height()) {
        $(`[data-value='${z}']`).addClass("active");
      } else {
        $(`[data-value='${z}']`).removeClass("active");
      }
    })
  })

  var str=[" Divay Garg "," a Front End Web Developer"," a web enthusiast !"];
  var pos=0,a=0;
  var innerText="";
    function displayText(){
      if(pos>2) pos=0;    
          
          if(a<str[pos].length)
          {
            innerText+=str[pos].charAt(a);
            $(".text-change").html(innerText);
            a++;
          }
      else {
        a=0;
        pos++;
        innerText="";
      }
     }
     setTimeout(setInterval(displayText,150),2000);

     $(document).ready(function(){

        (function($) {
        
          $.fn.visible = function(partial) {
            
              var $t            = $(this),
                  $w            = $(window),
                  viewTop       = $w.scrollTop(),
                  viewBottom    = viewTop + $w.height(),
                  _top          = $t.offset().top,
                  _bottom       = _top + $t.height(),
                  compareTop    = partial === true ? _bottom : _top,
                  compareBottom = partial === true ? _top : _bottom;
                
            return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
        
          };
            
        })(jQuery);
        
        var win = $(window);
        var cards=$(".service");
        var outerBar= $(".outer-bar");
        var percentage=$(".percentage")

win.scroll(function(event) {
  
  cards.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("slideInRight"); 
    } 

  });

  outerBar.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("outer-bar-animate"); 
      percentage.css("display","block");
    } 

  });
  
});
    });