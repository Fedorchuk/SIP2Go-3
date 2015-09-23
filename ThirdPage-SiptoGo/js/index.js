$(document).ready(function() {
$('body').css('display', 'none');
$('body').fadeIn(1000);

});


//--------------------------REGULAR COFFEE-----------------------



$("#reg_coff").focus(function() {

	var coff = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Freshly Brewed Coffee</p>")

		$("#small_btn").click(function() {	
			var sizeS = 6;
			$("#total").remove();
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (coff == 0 && sizeS == 6){
		$("#price").append("<p id='total'>$2.00</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 6;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (coff == 0 && sizeM == 6){
		$("#price").append("<p id='total'>$2.35</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 6;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (coff == 0 && sizeL == 6){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//--------------------------ESPRESSO-----------------------------

$("#espresso").focus(function() {

	var esp = 0;
	$("#small_btn").css('display', 'block');
	$("#med_btn").css('display', 'none');
	$("#lrg_btn").css('display', 'none');
	$("#small_btn").css('opacity', '1');
	$("#total").remove();
	$("#drink_name").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Caffé Espresso</p>");

		$("#small_btn").click(function() {	
			var sizeS = 0;
			$("#total").remove();
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (esp == 0 && sizeS == 0){
		$("#price").append("<p id='total'>$2.90</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}
	/*if $("#small_btn").click(function() {
		$("price").append("<p id='total'>$1</p>")
	})*/
});			

});

//------------------------MACCHIATO----------------------------

$("#macchiato").focus(function() {

	var macc = 0; 
	$("#small_btn").css('display', 'block');
	$("#med_btn").css('display', 'none');
	$("#lrg_btn").css('display', 'none');
	$("#small_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Espresso Macchiato</p>")

		$("#small_btn").click(function() {	
			var sizeS = 1;
			$("#total").remove();
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (macc == 0 && sizeS == 1){
		$("#price").append("<p id='total'>$3.25</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//---------------------CAPPUCCINO----------------------------

$("#cappuccino").focus(function() {

	var capp = 0;
	$("#small_btn").css('display', 'block');
	$("#med_btn").css('display', 'none');
	$("#lrg_btn").css('display', 'none');
	$("#small_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Traditional Cappuccino</p>")

		$("#small_btn").click(function() {	
			var sizeS = 2;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (capp == 0 && sizeS == 2){
		$("#price").append("<p id='total'>$3.70</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

});

//-----------------------AMERICANO---------------------------

$("#americano").focus(function() {

	var amer = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Caffé Americano</p>")

		$("#small_btn").click(function() {	
			var sizeS = 3;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (amer == 0 && sizeS == 3){
		$("#price").append("<p id='total'>$2.90</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 3;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (amer == 0 && sizeM == 3){
		$("#price").append("<p id='total'>$2.90</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 3;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (amer == 0 && sizeL == 3){
		$("#price").append("<p id='total'>$3.50</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//------------------------LATTE----------------------------

$("#latte").focus(function() {

	var latt = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Caffé Latté</p>")

		$("#small_btn").click(function() {	
			var sizeS = 4;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (latt == 0 && sizeS == 4){
		$("#price").append("<p id='total'>$3.70</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 4;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (latt == 0 && sizeM == 4){
		$("#price").append("<p id='total'>$4.10</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 4;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (latt == 0 && sizeL == 4){
		$("#price").append("<p id='total'>$4.50</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//----------------------------MOCHA-------------------------

$("#mocha").focus(function() {

	var moch = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Caffé Mocha</p>")

		$("#small_btn").click(function() {	
			var sizeS = 5;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (moch == 0 && sizeS == 5){
		$("#price").append("<p id='total'>$4.25</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 5;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (moch == 0 && sizeM == 5){
		$("#price").append("<p id='total'>$4.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 5;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (moch == 0 && sizeL == 5){
		$("#price").append("<p id='total'>$5.05</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});


//------------------TEA PAGE---------------------------


//--------------------EARL GREY-------------------------

$("#earl").focus(function() {

	var earl = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Earl Grey</p>")

		$("#small_btn").click(function() {	
			var sizeS = 7;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (earl == 0 && sizeS == 7){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 7;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (earl == 0 && sizeM == 7){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 7;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (earl == 0 && sizeL == 7){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//--------------------English Breakfast-------------------------

$("#englishB").focus(function() {

	var engb = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>English Breakfast</p>")

		$("#small_btn").click(function() {	
			var sizeS = 8;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (engb == 0 && sizeS == 8){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 8;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (engb == 0 && sizeM == 8){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 8;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (engb == 0 && sizeL == 8){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//--------------------Sencha-------------------------

$("#sencha").focus(function() {

	var snch = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Sencha</p>")

		$("#small_btn").click(function() {	
			var sizeS = 8;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (snch == 0 && sizeS == 8){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 8;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (snch == 0 && sizeM == 8){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 8;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (snch == 0 && sizeL == 8){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//--------------------Jasmine-------------------------

$("#jasmine").focus(function() {

	var jsmn = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Jasmine</p>")

		$("#small_btn").click(function() {	
			var sizeS = 9;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (jsmn == 0 && sizeS == 9){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 9;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (jsmn == 0 && sizeM == 9){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 9;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (jsmn == 0 && sizeL == 9){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//--------------------EARL GREY-------------------------

$("#earl").focus(function() {

	var earl = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Earl Grey</p>")

		$("#small_btn").click(function() {	
			var sizeS = 7;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (earl == 0 && sizeS == 7){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 7;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (earl == 0 && sizeM == 7){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 7;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (earl == 0 && sizeL == 7){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//--------------------Peppermint-------------------------

$("#peppermint").focus(function() {

	var pepp = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Peppermint</p>")

		$("#small_btn").click(function() {	
			var sizeS = 10;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (pepp == 0 && sizeS == 10){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 10;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (pepp == 0 && sizeM == 10){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 10;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (pepp == 0 && sizeL == 10){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//--------------------Chamomile-------------------------

$("#chamomile").focus(function() {

	var cham = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Chamomile</p>")

		$("#small_btn").click(function() {	
			var sizeS = 11;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (cham == 0 && sizeS == 11){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 11;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (cham == 0 && sizeM == 11){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 11;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (cham == 0 && sizeL == 11){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//--------------------Fancy Rooibos-------------------------

$("#frooibos").focus(function() {

	var rooi = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Fancy Rooibos</p>")

		$("#small_btn").click(function() {	
			var sizeS = 12;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (rooi == 0 && sizeS == 12){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 12;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (rooi == 0 && sizeM == 12){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 12;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (rooi == 0 && sizeL == 12){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//--------------------Masala Spice-------------------------

$("#masalaS").focus(function() {

	var masa = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Masala Spice</p>")

		$("#small_btn").click(function() {	
			var sizeS = 13;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (masa == 0 && sizeS == 13){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 13;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (masa == 0 && sizeM == 13){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 13;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (masa == 0 && sizeL == 13){
		$("#price").append("<p id='total'>$2.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//--------------------Iced Americano-------------------------

$("#i_americano").focus(function() {

	var iamer = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Iced Americano</p>")

		$("#small_btn").click(function() {	
			var sizeS = 14;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (iamer == 0 && sizeS == 14){
		$("#price").append("<p id='total'>$2.90</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 14;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (iamer == 0 && sizeM == 14){
		$("#price").append("<p id='total'>$2.90</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 14;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (iamer == 0 && sizeL == 14){
		$("#price").append("<p id='total'>$3.50</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//--------------------Iced Latte-------------------------

$("#i_latte").focus(function() {

	var ilatt = 0;
	$("#small_btn").css('display', 'none');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Iced Latte</p>")


		$("#med_btn").click(function() {	
			var sizeM = 15;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (ilatt == 0 && sizeM == 15){
		$("#price").append("<p id='total'>$4.10</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 15;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (ilatt == 0 && sizeL == 15){
		$("#price").append("<p id='total'>$4.95</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//--------------------Iced Mocha-------------------------

$("#i_mocha").focus(function() {

	var imoch = 0;
	$("#small_btn").css('display', 'none');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Iced Mocha</p>")


		$("#med_btn").click(function() {	
			var sizeM = 16;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (imoch == 0 && sizeM == 16){
		$("#price").append("<p id='total'>$4.65</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 16;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (imoch == 0 && sizeL == 16){
		$("#price").append("<p id='total'>$5.25</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//--------------------Fresca Medici-------------------------

$("#fresca_medici").focus(function() {

	var fres = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'none');
	$("#lrg_btn").css('display', 'none');
	$("#small_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Fresca Medici</p>")

		$("#small_btn").click(function() {	
			var sizeS = 17;
			$("#total").remove();
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (fres == 0 && sizeS == 17){
		$("#price").append("<p id='total'>$4.00</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});


});

//--------------------Shiver-------------------------

$("#shiver").focus(function() {

	var shiv = 0;
	$("#small_btn").css('display', 'none');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Shiver</p>")


		$("#med_btn").click(function() {	
			var sizeM = 18;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (shiv == 0 && sizeM == 18){
		$("#price").append("<p id='total'>$5.30</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 18;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (shiv == 0 && sizeL == 18){
		$("#price").append("<p id='total'>$5.95</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//--------------------Cold Brewed Coffee-------------------------

$("#cb_coffee").focus(function() {

	var cbcoff = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Cold Brew Coffee</p>")

		$("#small_btn").click(function() {	
			var sizeS = 19;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (cbcoff == 0 && sizeS == 19){
		$("#price").append("<p id='total'>$2.30</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 19;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (cbcoff == 0 && sizeM == 19){
		$("#price").append("<p id='total'>$2.90</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 19;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (cbcoff == 0 && sizeL == 19){
		$("#price").append("<p id='total'>$3.50</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//-------------------Cold Tea-------------------------------

//--------------------Cold Brewed Tea-------------------------

$("#cb_tea").focus(function() {

	var cbtea = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Cold Brewed Tea</p>")

		$("#small_btn").click(function() {	
			var sizeS = 20;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (cbtea == 0 && sizeS == 20){
		$("#price").append("<p id='total'>$2.30</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 20;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (cbtea == 0 && sizeM == 20){
		$("#price").append("<p id='total'>$2.90</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 20;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (cbtea == 0 && sizeL == 20){
		$("#price").append("<p id='total'>$3.50</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	

});

//--------------------Cold Brewed Tea w/ Lemonade-------------------------

$("#cb_tea_l").focus(function() {

	var cbteal = 0;
	$("#small_btn").css('display', 'inline-block');
	$("#med_btn").css('display', 'inline-block');
	$("#lrg_btn").css('display', 'inline-block');
	$("#small_btn").css('opacity', '1');
	$("#med_btn").css('opacity', '1');
	$("#lrg_btn").css('opacity', '1');
	$("#drink_name").remove();
	$("#total").remove();
	$("#size_disp").remove();
	$("#next").css('display', 'none');
	$("#ord").append("<p id='drink_name'>Cold Brewed Tea w/ Lemonade</p>")

		$("#small_btn").click(function() {	
			var sizeS = 21;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '.5');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Small</p>');


	if (cbteal == 0 && sizeS == 21){
		$("#price").append("<p id='total'>$2.80</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});

		$("#med_btn").click(function() {	
			var sizeM = 21;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '.5');
			$("#lrg_btn").css('opacity', '1');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Medium</p>');

	if (cbteal == 0 && sizeM == 21){
		$("#price").append("<p id='total'>$3.40</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}			

});		

		$("#lrg_btn").click(function() {	
			var sizeL = 21;
			$("#total").remove();
			$("#small_btn").css('opacity', '1');
			$("#med_btn").css('opacity', '1');
			$("#lrg_btn").css('opacity', '.5');
			$("#small_btn").css('opacity', '1');
			$("#size_disp").remove();
			$("#size").append('<p id="size_disp">Large</p>');

	if (cbteal == 0 && sizeL == 21){
		$("#price").append("<p id='total'>$4.00</p>");
		$("#next").css('display', 'block');
	}else{
		$("#total").remove();
	}

});	



});

$("#next").click(function(){
	window.location.href = "../sip2go-04.html";

})








