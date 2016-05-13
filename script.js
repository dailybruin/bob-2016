$(document).ready(function(){
	$(".gallery").unitegallery({
		tiles_type:"justified"
	});

    $("#sidebar-expand").click(function(){
    	console.log("nav clicked");
        $(this).parent("#sidebar").toggleClass("expanded");
    });

    $(".nav-item").click(function() {
    	changeNavHilight($(this));
    	if ($('#sidebar-expand').css('display') === 'block') {
    		$('#sidebar').removeClass('expanded');
    	}
    });

    var isMuted = false; 
    $('#mute').click(function(e) {
        if(isMuted == false)
        {
            console.log("muting audio");
            document.getElementById("mute").innerHTML="Unmute";
            isMuted=true;
        }
        else{
            console.log("playing audio");
            document.getElementById("mute").innerHTML="Mute";
            isMuted=false;
        }
        $('#landing-vd').prop("muted", isMuted);
    });
    
    var changeNavHilight = function(newHilighted) {
    	$('.nav-item').removeClass("active");
    	newHilighted.addClass("active");
    }

    // $('a').click(function(){
    //     $('html, body').animate({
    //         scrollTop: $( $.attr(this, 'href') ).offset().top
    //     }, 1000);
    //     //changeNavHilightOnScroll();
    //     return false;
    // });

    var changeNavHilightOnScroll = function() {
    	// if ($(window).scrollTop() >= $('#post4').position().top) {
    	//     changeNavHilight($('a[href="#post4"]'));
    	// }
    	// else if ($(window).scrollTop() >= $('#post3').position().top) {
    	//     changeNavHilight($('a[href="#post3"]'));
    	// }
    	if ($(window).scrollTop() >= $('#post2').position().top + $('#post2').outerHeight()) {
    	    changeNavHilight($('a[href="#gallery1"]'));
    	}
    	else if ($(window).scrollTop() >= $('#post2').position().top) {
    	    changeNavHilight($('a[href="#post2"]'));
    	}
        else if ($(window).scrollTop() >= $('#post1').position().top) {
            changeNavHilight($('a[href="#post1"]'));
        }
        else if ($(window).scrollTop() < $('#post1').position().top) {
    	    changeNavHilight($('a[href="#post1"]'));
    	}
    }

    $(document).scroll(function(){
    	changeNavHilightOnScroll();
    });

    $(window).on("hashchange", function () {
    	if ($('#sidebar-expand').css('display') === 'block')
    	    window.scrollTo(window.scrollX, window.scrollY - 125);
    });

   

});
