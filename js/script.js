
// Page Scroll


$(document).ready(function(){
	
	$("a").on('click', function(event) {
		if(this.hash !==" ") {
			event.preventDefault();
			
			var hash = this.hash;
			
			$('hmtl, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function() {
				
				window.location.hash = hash;
				
			});
		}
	});
});

// Mobile navbar
$("#menu-icon").click(function() {
    $("nav ul").toggle("slow", function() {
        
    });
});


/*$("#menu-icon").click(function() {
    var x = $("nav ul").css;
    
    if (x === "display", "none") {
        $("nav ul").css("display", "block");
    }
    else {
        $("nav ul").css("display", "none");
    }
});*/

    

/*$("#menu-icon").click(function() {
    $("nav ul").css("display", "block")
    console.log('working');
});*/

//Animation

var $animate_el = $('.animate');
var $browser = $(window);

//Function to check if html elements to be animated are in view of the browser when scrolled upon
//If elements are in view a class will be added to animate element
function check_element_visible() {
    var browser_height = $browser.height();
    var browser_top_position = $browser.scrollTop();
    var browser_bottom_position = (browser_top_position + browser_height);
    
    
    $.each($animate_el, function () {
        var $element = $(this);
        var element_height = $element.outerHeight();
        var element_top_position = $element.offset().top;
        var element_bottom_position = (element_top_position + element_height);
        
        
        if ((element_bottom_position >= browser_top_position) && (element_top_position <= browser_bottom_position)) {
            $element.addClass('visible');
        } else {
            $element.removeClass('visible');
        }
        
    });
}

$browser.on('scroll resize', check_element_visible);
$browser.trigger('scroll');



// Map

function initMap() {
    var uluru = {lat: 52.567531, lng: -2.076874};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 16,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}




