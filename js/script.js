// Document ready

$(document).ready(function() {
	
	// Show initial slides

    $(".team, .client").hide();
    
    $("#team1, #client1").show();
    
    
    // Autoplay team slideshow
    
        var slideshow1 = setInterval(function(){ 
        
           $(".team").hide();
        
            $("#team2").fadeIn(1000);

            $("#employee > i").removeClass("pink");

            $("#dot2").addClass("pink"); 
            
        }, 35000);
        
        
        var slideshow2 = setInterval(function(){ 
        
            $(".team").hide();
        
            $("#team3").fadeIn(1000);
        
            $("#employee > i").removeClass("pink");
        
            $("#dot3").addClass("pink"); 
            
        }, 55000);
        
        var slideshow3 = setInterval(function(){ 
        
            $(".team").hide();
        
            $("#team1").fadeIn(1000);
        
            $("#employee > i").removeClass("pink");
        
            $("#dot1").addClass("pink"); 
            
        }, 85000);
        
        var slideshow8 = setInterval(function(){ 
        
            $(".team").hide();
        
            $("#team4").fadeIn(1000);
        
            $("#employee > i").removeClass("pink");
        
            $("#dot8").addClass("pink"); 
            
        }, 115000);
        
        var slideshow9 = setInterval(function(){ 
        
            $(".team").hide();
        
            $("#team5").fadeIn(1000);
        
            $("#employee > i").removeClass("pink");
        
            $("#dot9").addClass("pink"); 
            
        }, 115000);
        
        // Autoplay client slideshow
        
        var slideshow4 = setInterval(function(){ 
        
           $(".client").hide();
        
            $("#client2").fadeIn(1000);

            $("#customer > i").removeClass("pink");

            $("#dot5").addClass("pink"); 
            
        }, 25000);
        
        
        var slideshow5 = setInterval(function(){ 
        
            $(".client").hide();
        
            $("#client3").fadeIn(1000);
        
            $("#customer > i").removeClass("pink");
        
            $("#dot6").addClass("pink"); 
            
        }, 50000);
        
        var slideshow7 = setInterval(function(){ 
        
            $(".client").hide();
        
            $("#client4").fadeIn(1000);
        
            $("#customer > i").removeClass("pink");
        
            $("#dot7").addClass("pink"); 
            
        }, 75000);
        
        var slideshow6 = setInterval(function(){ 
        
            $(".client").hide();
        
            $("#client1").fadeIn(1000);
        
            $("#customer > i").removeClass("pink");
        
            $("#dot4").addClass("pink"); 
            
        }, 100000);
        
    
    // Dot click team slideshow 
    
    $("#dot1").click(function(){
    
        clearInterval(slideshow1);
        
        clearInterval(slideshow2);
        
        clearInterval(slideshow3);
        
        clearInterval(slideshow8);
        
        clearInterval(slideshow9);
        
        $(".team").hide();
        
        $("#team1").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    $("#dot2").click(function(){
    
        clearInterval(slideshow1);
        
        clearInterval(slideshow2);
        
        clearInterval(slideshow3);
        
        clearInterval(slideshow8);
        
        clearInterval(slideshow9);
        
        $(".team").hide();
        
        $("#team2").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    $("#dot3").click(function(){
    
        clearInterval(slideshow1);
        
        clearInterval(slideshow2);
        
        clearInterval(slideshow3);
        
        clearInterval(slideshow8);
        
        clearInterval(slideshow9);
        
        $(".team").hide();
        
        $("#team3").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    $("#dot8").click(function(){
    
        clearInterval(slideshow1);
        
        clearInterval(slideshow2);
        
        clearInterval(slideshow3);
        
        clearInterval(slideshow8);
        
        clearInterval(slideshow9);
        
        $(".team").hide();
        
        $("#team4").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    $("#dot9").click(function(){
    
        clearInterval(slideshow1);
        
        clearInterval(slideshow2);
        
        clearInterval(slideshow3);
        
        clearInterval(slideshow8);
        
        clearInterval(slideshow9);
        
        $(".team").hide();
        
        $("#team5").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    // Dot click client slideshow 
    
    $("#dot4").click(function(){
    
        clearInterval(slideshow4);
        
        clearInterval(slideshow5);
        
        clearInterval(slideshow6);
        
        clearInterval(slideshow7);
        
        $(".client").hide();
        
        $("#client1").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    $("#dot5").click(function(){
    
        clearInterval(slideshow4);
        
        clearInterval(slideshow5);
        
        clearInterval(slideshow6);
        
        clearInterval(slideshow7);
        
        $(".client").hide();
        
        $("#client2").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    
    $("#dot6").click(function(){
    
        clearInterval(slideshow4);
        
        clearInterval(slideshow5);
        
        clearInterval(slideshow6);
        
        clearInterval(slideshow7);
        
        $(".client").hide();
        
        $("#client3").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
    
    $("#dot7").click(function(){
    
        clearInterval(slideshow4);
        
        clearInterval(slideshow5);
        
        clearInterval(slideshow6);
        
        clearInterval(slideshow7);
        
        $(".client").hide();
        
        $("#client4").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $(this).addClass("pink");
        
    });
	
	// Modal images

var modal1 = document.getElementById('modal1');

var img1 = document.getElementById('product1');
var modalImg1 = document.getElementById("modalimg1");
var captionText1 = document.getElementById("caption1");
	
img1.onclick = function(){
  modal1.style.display = "block";
  modalImg1.src = this.src;
  captionText1.innerHTML = this.alt;
    $("body").addClass("modal-open");
}

var span1 = document.getElementById("close1");

span1.onclick = function() { 
  modal1.style.display = "none";
    $("body").removeClass("modal-open");
}
 
var modal2 = document.getElementById('modal2');

var img2 = document.getElementById('product2');
var modalImg2 = document.getElementById("modalimg2");
var captionText2 = document.getElementById("caption2");
	
img2.onclick = function(){
  modal2.style.display = "block";
  modalImg2.src = this.src;
  captionText2.innerHTML = this.alt;
  $("body").addClass("modal-open");
}
 
var span2 = document.getElementById("close2");

span2.onclick = function() { 
  modal2.style.display = "none";
  $("body").removeClass("modal-open");
} 

var modal3 = document.getElementById('modal3');

var img3 = document.getElementById('product3');
var modalImg3 = document.getElementById("modalimg3");
var captionText3 = document.getElementById("caption3");
	
img3.onclick = function(){
  modal3.style.display = "block";
  modalImg3.src = this.src;
  captionText3.innerHTML = this.alt;
    $("body").addClass("modal-open");
}

var span3 = document.getElementById("close3");

span3.onclick = function() { 
	modal3.style.display = "none";
    $("body").removeClass("modal-open");
}

// Second row of modal images

var modal4 = document.getElementById('modal4');

var img4 = document.getElementById('product4');
var modalImg4 = document.getElementById("modalimg4");
var captionText4 = document.getElementById("caption4");
	
img4.onclick = function(){
  modal4.style.display = "block";
  modalImg4.src = this.src;
  captionText4.innerHTML = this.alt;
    $("body").addClass("modal-open");
}

var span4 = document.getElementById("close4");

span4.onclick = function() { 
	modal4.style.display = "none";
    $("body").removeClass("modal-open");
}

var modal5 = document.getElementById('modal5');

var img5 = document.getElementById('product5');
var modalImg5 = document.getElementById("modalimg5");
var captionText5 = document.getElementById("caption5");
	
img5.onclick = function(){
  modal5.style.display = "block";
  modalImg5.src = this.src;
  captionText5.innerHTML = this.alt;
    $("body").addClass("modal-open");
}

var span5 = document.getElementById("close5");

span5.onclick = function() { 
	modal5.style.display = "none";
    $("body").removeClass("modal-open");
}

var modal6 = document.getElementById('modal6');

var img6 = document.getElementById('product6');
var modalImg6 = document.getElementById("modalimg6");
var captionText6 = document.getElementById("caption6");
	
img6.onclick = function(){
  modal6.style.display = "block";
  modalImg6.src = this.src;
  captionText6.innerHTML = this.alt;
    $("body").addClass("modal-open");
}

var span6 = document.getElementById("close6");

span6.onclick = function() { 
	modal6.style.display = "none";
    $("body").removeClass("modal-open");
}
	
// Show all product images
	
	$("button").click(function(){
	
	$("#productone, #producttwo, #productthree, #productfour, #productfive, #productsix").show();
		
	$("button").hide();
		
});

// Hide carousels on home mobile version

    if($("nav").is(":visible")){
 
        clearInterval(slideshow1);

        clearInterval(slideshow2);

        clearInterval(slideshow3);

        clearInterval(slideshow4);

        clearInterval(slideshow5);

        clearInterval(slideshow6);
        
        clearInterval(slideshow7);
        
        clearInterval(slideshow8);
        
        clearInterval(slideshow9);

        $(".team, .dotrow, .client, #products, #pricelist").hide();
}

// Home icon nav

    $("#homeicon").click(function(){
    
    $(".team, .dotrow, form, #products, #pricelist, .client, iframe").hide();
    
    $("#banner, #history").show();
    
    $("#homeicon").addClass("pink");
    
    $("#teamicon, #productsicon").removeClass("pink");

});

// Team icon nav

    $("#teamicon").click(function(){
    
    $("#banner, form, #products, #pricelist, iframe, #history").hide();
    
    $("#client1, .dotrow, #team1").show();
    
    $("#homeicon, #productsicon").removeClass("pink");
    
    $("#teamicon").addClass("pink");

});

// Products icon nav

    $("#productsicon").click(function(){
    
    $("#banner, .team, .client, form, .dotrow, iframe, #history, #productfour, #productfive, #productsix").hide();
    
    $("#searchform, #products, #pricelist, .columns, button").show();
    
    $("#homeicon, #teamicon").removeClass("pink");
    
    $("#productsicon").addClass("pink");

});

// Team swipe gestures

// Swipe (Left) Client 1 to 2

$("#team1").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $(".team").hide();
        
        $("#team2").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $("#dot2").addClass("pink");
  }
});

// Swipe (Right) Client 2 to 1

$("#team2").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $(".team").hide();
        
        $("#team1").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $("#dot1").addClass("pink");
  }
  
});

// Swipe (Left) Client 2 to Client 3

$("#team2").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $(".team").hide();
        
        $("#team3").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $("#dot3").addClass("pink");
  }
  
});

// Swipe (Right) Client 3 to Client 2

$("#team3").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $(".team").hide();
        
        $("#team2").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $("#dot2").addClass("pink");
  }
  
});

// Swipe (Left) Client 3 to Client 4 (8)

$("#team3").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $(".team").hide();
        
        $("#team4").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $("#dot8").addClass("pink");
  }
  
});

// Swipe (Right) Client 4 (8) to Client 3

$("#team4").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $(".team").hide();
        
        $("#team3").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $("#dot3").addClass("pink");
  }
  
});

// Swipe (Left) Client 4 (8) to Client 5 (9)

$("#team4").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $(".team").hide();
        
        $("#team5").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $("#dot9").addClass("pink");
  }
  
});

// Swipe (Right) Client 5 (9) to Client 4 (8)

$("#team5").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $(".team").hide();
        
        $("#team4").fadeIn(300);
        
        $("#employee > i").removeClass("pink");
        
        $("#dot8").addClass("pink");
  }
  
});

// Client swipe gestures

// Swipe (Left) Client 1 to Client 2

$("#client1").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $(".client").hide();
        
        $("#client2").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $("#dot5").addClass("pink");
  }
  
});

// Swipe (Right) Client 2 to Client 1

$("#client2").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $(".client").hide();
        
        $("#client1").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $("#dot4").addClass("pink");
  }
  
});

// Swipe (Left) Client 2 to Client 3

$("#client2").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $(".client").hide();
        
        $("#client3").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $("#dot6").addClass("pink");
  }
  
});

// Swipe (Right) Client 3 to Client 2

$("#client3").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $(".client").hide();
        
        $("#client2").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $("#dot5").addClass("pink");
  }
  
});
  
// Swipe (Left) Client 3 to Client 4

$("#client3").swipe({
  swipeLeft:function(event, direction, distance, duration, fingerCount) {
    $(".client").hide();
        
        $("#client4").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $("#dot7").addClass("pink");
  }
  
});

// Swipe (Right) Client 4 to Client 3

$("#client4").swipe({
  swipeRight:function(event, direction, distance, duration, fingerCount) {
    $(".client").hide();
        
        $("#client3").fadeIn(300);
        
        $("#customer > i").removeClass("pink");
        
        $("#dot6").addClass("pink");
  }
  
});


});