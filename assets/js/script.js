$( function() {
	$( "#datepicker, #datepickers" ).datepicker({
		dateFormat: "dd-mm-yy"
		,	duration: "fast"
	});
} );




$('#menu li').on('click', function(){
    $('li.active').removeClass('active');
    $(this).addClass('active');
});

const toggler = document.querySelector(".sidebarBtn");
toggler.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("sidebar_collapsed");
    document.querySelector("body").classList.toggle("body_collapsed");
});


$(document).ready(function () {
    $('.dropdown').hover(function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
    }, function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
    });
});