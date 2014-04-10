$(document).ready(function() {

 	$(".image1").unbind().on('click', function(event){
  			event.stopPropagation(); 
            alert("ROAR! 10 Points to Gryffindor");
            });


	$(".textbox1").bind('mouseover', function () { 
	$(".textbox1").css("background-color","yellow"); 
			});
	$(".textbox1").bind('mouseout', function () { 
	$(".textbox1").css("background-color","none"); 
			});


	$(".image2").click(function(){
    $(".image2").slideToggle();
  			});

	$(".textbox2").click(function(){
    $(".textbox2").animate({lineHeight:"20px"});
  			});

	$(".image3").unbind().on("mousedown",function(){
    $(this).after("<p style='color:black;'>You've Been Sorted into Ravenclaw!</p>");
  			});
	

	$(".textbox3").click(function(){
    $(".textbox3").animate({fontSize:"10px"});
  			});

  	
	$(".textbox4").click(function(){
  	$(".textbox4").fadeTo(1000,0.2);
  			});
	
	$(".image4").click(function(){
    $(".image4").animate({lineHeight:"80px"});
  			});

	$(".image5").bind('mouseover', function () { 
	$(".image5").css("background-color","green"); 
			});
	$(".image5").bind('mouseout', function () { 
	$(".image5").css("background-color","none"); 
			});


	$(".textbox5").click(function(){
    $(".textbox5").fadeOut()
    		});


	$(".image6").click(function(){
  	$(".image6").fadeTo(1000,0.3);
  			});


	$(".textbox6").unbind().on("mousedown",function(){
    $(this).after("<p style='color:black;'>And Flick!</p>");
  			});


	$(".textbox7").click(function(){
    $(".textbox7").fadeOut()
    		});

	$(".image7").click(function(){
    $(".image7").animate({width:"200px"});
  			});
	

	$(".textbox8").click(function(){
    $(".textbox8").animate({letterSpacing:"10px"});
  			});


	$(".image8").click(function(){
    $(".image8").fadeOut()
    		});
    $(".image8").click(function(){
    $(".image8").fadeIn();
  			});
	

	$(".textbox9").click(function(){
    $(".textbox9").animate({fontSize:"55px"});
  			});


	$(".image9").bind('mouseover', function () { 
	$(".image9").css("background-color","gray"); 
			});
	$(".image9").bind('mouseout', function () { 
	$(".image9").css("background-color","none"); 
			});
	

	$(".textbox10").click(function(){
    $(".textbox10").animate({textIndent:"30px"});
  			});


	$(".image10").unbind().on('click', function(event){
  			event.stopPropagation(); 
            alert("You are a Wizard Harry!");
            });


 	$(".image11").click(function(){
    $(".image11").slideToggle();
  			});

	$(".textbox11").click(function(){
    $(".textbox11").animate({fontSize:"35px"});
  			});

	$(".image12").click(function(){
    $(".image12").fadeOut()
    		});
    $(".image12").click(function(){
    $(".image12").fadeIn();
  			});

	$(".textbox12").click(function(){
    $(".textbox12").animate({lineHeight:"40px"});
  			});
	

	$(".textbox13").click(function(){
	$(".textbox13").hide();
	  		});


    $(".image13").unbind().on('dblclick',function(event){
  			event.stopPropagation();
  	alert( "Welcome to the Ministry!" );
			});


	$(".image14").click(function(){
    $(".image14").animate({width:"200px"});
  			});

	$(".textbox14").unbind().on("mousedown",function(){
    $(this).after("<p style='color:black;'>Levosia!</p>");
  			});

	$(".image15").click(function(){
  	$(".image15").fadeTo(1000,0.4);
  			});

	$(".textbox15").bind('mouseover', function () { 
	$(".textbox15").css("background-color","black"); 
			});
	$(".textbox15").bind('mouseout', function () { 
	$(".textbox15").css("background-color","none"); 
			});
 




})





























