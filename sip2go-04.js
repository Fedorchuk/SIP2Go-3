
//fade in effect

	$(document).ready(function() {

	$('body').css('display', 'none');

	$('body').fadeIn(1000);


	});

//end of fade in effect

$(document).ready(function() {
  $("#datepicker").datepicker();
});

$("#signup").click(function(){
	window.location.href = ""
})

$("#addanother").click(function(){
	window.location.href = "sip2go-01.html";//will go back to Kyle's page to select another drink

})



$("#done").click(function(){

	if ($("#place1").is(":checked") || $("#place2").is(":checked") || $("#place3").is(":checked") || $("#place4").is(":checked")){

	if ($("#TandC").is(":checked") && $("#firstname").val().length > 1 && $("#lastname").val().length > 1 && $("#creditcard").val().length == 16
	 	&& $("#expirydate").val().length == 5 && $("#cvv").val().length == 3 && $("#phonenumber").val().length >= 9 && $("#datepicker").val().length > 1){
		window.location = "Thank-You-Page/index.html";//will go to the thank you page
	}
}else if($("#datepicker").val() == ""){
alert("Please fill out the the date");
	$("#datepicker").css("border-color", "red");
}else{$("#datepicker").css("background-color", "");
}

	if($("#timepicker").val() == ""){
		alert("Please fill out the time");
	$("#timepicker").css("border-color", "red");
}else{$("#timepicker").css("background-color", "");
}

	if($("#firstname").val().length == ""){
		alert("Please fill out your first name");
	$("#firstname").css("border-color", "red");
}else{$("#firstname").css("background-color", "");
}


	if($("#lastname").val().length == ""){
		alert("Please fill out your last name");
	$("#lastname").css("border-color", "red");
}else{$("#lastname").css("background-color", "");
}

	if($("#creditcard").val().length != 16){
		alert("Please fill out your 16 digit credit card number (no dashes)");
	$("#creditcard").css("border-color", "red");
}else{$("#creditcard").css("background-color", "");
}


	if($("#expirydate").val().length != 5){
		alert("Please fill out your correct expiry date. Ex: 05/94");
	$("#expirydate").css("border-color", "red");
}else{$("#expirydate").css("background-color", "");
}

	if($("#cvv").val().length != 3){
		alert("Please fill out your correct cvv (click the question mark for more information)");
	$("#cvv").css("border-color", "red");
}else{$("#cvv").css("background-color", "");
}

	if($("#phonenumber").val().length < 9){
		alert("Please fill out your phone or cell phone number (no dashes)");
	$("#phonenumber").css("border-color", "red");
}else{$("#phonenumber").css("background-color", "");
}

	if ($("#TandC").is(':not(":checked")')){
		alert("Please read the terms and conditions");
	$("#termsconditions").css("border-color", "red");
}else{$("#termsconditions").css("background-color", "");
}

	if ($("#place1").is(':not(":checked")') && $("#place2").is(':not(":checked")') && $("#place3").is(':not(":checked")') && $("#place4").is(':not(":checked")')){
		alert("Please pick a location");
		$("#emptyp2").remove();
	$("#emptyp").append("<p id='emptyp2'>***Please Select A Location***</p>");
	$("#emptyp").css("font-size", "24px").css("color", "red").css("font-family", "'avenir next'")
}else{$("#emptyp2").remove();
}		


})

//the left side pick up locations

$("#place1").click(function(){ //main street location
	$("#store").remove();
	$("#DSV").remove();
	$("#map").append("<img id='store' src='http://dinehere.ca/sites/default/files/imagecache/restaurant_detail_full/sites/default/files/r_images/129593.jpg'> </img>");
	//$("#store").css("width", "300px").css("padding-left", "30%");
	$("#map").append("<p id='DSV'>3010 Main Street, Vancouver</p>");
	//$("#DSV").css("padding-left", "30%").css("font-size", "18px").css("font-family", "avenir next");

})


$("#place2").click(function(){ //commerical location
	$("#store").remove();
	$("#DSV").remove();
	$("#map").append("<img id='store' src='https://jjbeancoffee.com/wp-content/uploads/2013/09/jj_commercial-300x300.jpg'> </img>");
	//$("#store").css("width", "300px").css("padding-left", "30%");
	$("#map").append("<p id='DSV'>2206 Commercial Drive, Vancouver</p>");
	//$("#DSV").css("padding-left", "30%").css("font-size", "18px").css("font-family", "avenir next");

})


$("#place3").click(function(){ //yaletown location
	$("#store").remove();
	$("#DSV").remove();
	$("#map").append("<img id='store' src='http://static1.squarespace.com/static/50ee198ae4b029acc68b8379/558dad1fe4b01b16862dfd61/558dad28e4b0dba0791ccec2/1435348266016/0743-167.jpg'> </img>");
	//$("#store").css("width", "300px").css("padding-left", "30%");
	$("#map").append("<p id='DSV'>402 Davie Street Vancouver</p>");
	//$("#DSV").css("padding-left", "30%").css("font-size", "18px").css("font-family", "avenir next");

})



$("#place4").click(function(){ //lonsdale location
	$("#store").remove();
	$("#DSV").remove();
	$("#map").append("<img id='store' src='https://jjbeancoffee.com/wp-content/uploads/YT_Q2_2015.jpg'> </img>");
	//$("#store").css("width", "300px").css("padding-left", "30%");
	$("#map").append("<p id='DSV'>125 East 17th Street, North Vancouver</p>");
	//$("#DSV").css("padding-left", "30%").css("font-size", "18px").css("font-family", "avenir next");

})


//the right side of the page filling out the information

	$("#question").hover(function(){ //question mark opacity
	$("#question").css("opacity", "1");
}, function(){
	$("#question").css("opacity", "0.3");
})


$("#question").click(function(){ //this is when they click on the question mark
	window.open("https://www.cellarlink.com.au/buy-wine-online/store/Content/Images/uploaded/credit-card-numbers-with-cvv.jpg");

})


$("#cvv").click(function(){
	$("#question").css("opacity", "1");
})




// bottom bar

$(document).ready(function(){


$("#circle4").css("background-color", "#68BC45");

	/*$('#circle1').click(function(){
		window.location = "sip2go-01.html";   
	});


	$('#circle2').click(function(){
		window.location = "sip2go-02.html";   
	});


	$('#circle3').click(function(){
		window.location = "sip2go-03";   
	});

	$('#circle4').click(function(){
		window.location = "sip2go-04.html";   
	});*/



});

// end of bottom bar




