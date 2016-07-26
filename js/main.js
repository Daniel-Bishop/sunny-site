
$(document).ready(function(){


	
	$('.lge-button').hover(function(){
		var buttonHeight = $(".lge-button").height();
		var buttonWidth = $(".lge-button").width(); 
	  $('.inner-fill').css("height",buttonHeight);
	  $('.inner-fill').css("width",buttonWidth);
	  $('.lge-button').css("color","#666666").css("cursor","pointer");
	  
	  
	}, function(){
	  
	  $('.inner-fill').css("height","0px").css("color","transparent");
	  $('.lge-button').css("color","white");
	  
	});



var i=0;
	//Menu hover function
	$('.menu').click(function(){
		if(i===0){
		var height= $("html").height();
			$('.menu-inner').css("height",height);
			i++;
		}else{
		
			$('.menu-inner').css("height","0px");
			i=0;
		}

	});

});//end document ready