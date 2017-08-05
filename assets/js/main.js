$(document).ready(function(){
    $(".push_menu").click(function(){
         $(".wrapper").toggleClass("active");

         $("body").click(function(){
    	 $(".wrapper").toggleClass("active");
    })
    });
});

