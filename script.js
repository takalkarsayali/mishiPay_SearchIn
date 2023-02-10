// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// Change nav intems color and background on scrolling
$(document).on('scroll', function () {
    if ($(document).scrollTop()) {
        $('nav').addClass('change');
        $('.nav-link').addClass('scrolltext');

        $("#mishipay-logo").attr("src", "	https://mishipay.com/wp-content/uploads/2021/02/logo-dark.svg");
        $("#mishipay-logo").attr("srcset", "	https://mishipay.com/wp-content/uploads/2021/02/logo-dark.svg");
    } else {
        $('nav').removeClass('change');
        $('.nav-link').removeClass('scrolltext');
        $("#mishipay-logo").attr("src", "https://mishipay.com/wp-content/uploads/2021/03/logo-light.svg");
        $("#mishipay-logo").attr("srcset", "https://mishipay.com/wp-content/uploads/2021/03/logo-light.svg");

    }
})



// Business Numbers Animation
document.getElementById('num1').animate([
  { '--num': 0 },
    { '--num': 4 }
  ], {
    duration: 500,
    fill: 'forwards',
    iterations: 1
  });
  
  document.getElementById('num2').animate([
    { '--num': 0 },
    { '--num': 35 }
  ], {
    duration: 500,
    fill: 'forwards',
    iterations: 1
  });
  
  document.getElementById('num3').animate([
    { '--num': 0 },
    { '--num': 87 }
  ], {
    duration: 500,
    fill: 'forwards',
    iterations: 1
  });
  

  // Solution on click manual slide testimonial carousle
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("carousel-item");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
  }
  

  // Animating text of Solution 
  
  // const txt = $("#testimonial");
  // $(window).on("load",function () {
  //     $('h1').slideUp();
  // })
  
  
  // center client cards
  // $(document).ready(function(){
  //     $(".card").css("center-block")   
  // });
