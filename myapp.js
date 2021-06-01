/*===============================Preloader==========================*/

var wrapper = document.getElementById("wrapper");

function preloader(){
  wrapper.style.display = "none";
}
/* ===========================Animation on Scroll=================== */
AOS.init({
    duration: 1200,
  })

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementsByClassName("header")[0].style.top = "0";
  } else {
    document.getElementsByClassName("header")[0].style.top = "-100px";
  }
  prevScrollpos = currentScrollPos;
}

/*Scroll to top when arrow up clicked BEGIN*/
$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});
/*==========Scroll to top when arrow up clicked END================*/


/*=========================Theme===============================*/

function themechanger() {
  var body = document.body;
  body.classList.toggle("darkMode");
}

/*==================================================================*/
