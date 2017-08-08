$(document).ready(function(){
	window.addEventListener('scroll', function () {
   const distanceY = window.pageYOffset || document.documentElement.scrollTop,
   shrinkOn = 600,
   headerEl = document.getElementsByTagName("nav")[0];

   if (distanceY > shrinkOn) {
     headerEl.classList.add("scroll-menu");
   } else {
     headerEl.classList.remove("scroll-menu");
   }

    });

     /* Click listener on li items. i.e. when an li item is clicked, the following code is triggered */
     $('#mainNavbar li').click(function(e) {
          var $this = $(this);

          /* Set the appropriate style for the active item */          
          if (!$this.hasClass('active')) {
               $('ul.nav li').removeClass('active');
               $this.addClass('active');
          }

          /* Hide the navbar-collapse after that it is clicked */
          $(".navbar-collapse").collapse('hide'); 
     });

     // bootstrap scrollspy function to go to the clicked and specific page section
     $('body').scrollspy({ target: '.navbar'});

     //smooth scrolling
     $(".arrow-wrap").click(function() {
	var href = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, 1200);
    });
});
