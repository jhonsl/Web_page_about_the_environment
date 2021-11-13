$(window).scroll(function() {	

	if ($("#menu").offset().top > 500) 
	{
	 	$("#menu").addClass("nav-color2");
		$("#menu").removeClass("nav-color1");
	} else 
	{
		$("#menu").addClass("nav-color1");
	  	$("#menu").removeClass("nav-color2");
	}
});
