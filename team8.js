function myFunction() {
    var x = document.getElementById("username").value;
    document.getElementById("reviewspace").innerHTML = x
	
	var y = document.getElementById("reviewwords").value;
    document.getElementById("reviewspace2").innerHTML = y
	
	
	var z = document.getElementById("fakereview2");
	
	z.style.display = "block";

	}
	
	function myFunction2() {
    var x = document.getElementById("username").value;
    document.getElementById("reviewspace").innerHTML = x
	
	var y = document.getElementById("reviewwords").value;
    document.getElementById("reviewspace2").innerHTML = y
	
	var j = document.getElementById("resturant").value;
    document.getElementById("resturant3").innerHTML = j
	
	var z = document.getElementById("fakereview2");
	
	z.style.display = "block";

	}
	


	$(document).ready(function() {
            buttonElement = $(".button");
            imageElement.hover( // accepts two functions
                function() { // mouse goes over:
                    $(this).toggleClass("normal", false); // remove one class first
                    $(this).toggleClass("mouseOver", true); // add another one
                },
                function() { // mouse goes out
                    $(this).toggleClass("mouseOver", false);
                    $(this).toggleClass("normal", true);
                }
            );
        }); 

		

		
function index(n) {
  showSlides(slideIndex += n);
}		
		
var slideIndex = 1;
showSlides(slideIndex);


function display(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  
  var next = document.getElementsByClassName("slide");
  var dotindex = document.getElementsByClassName("dot");
  
  
  if (n > next.length)
	  {
		  slideIndex = 1
		  
		  } 
  
  if (n < 1) {
	  
	  slideIndex = next.length
	  
	  }
  for (i = 0; i < next.length; i++) {
	  
      next[i].style.display = "none"; 
  }
  
  for (i = 0; i < dotindex.length; i++) {
	  
      dotindex[i].className = dotindex[i].className.replace(" active", "");
  }
  next[slideIndex-1].style.display = "block"; 
  dotindex[slideIndex-1].className += " active";
}