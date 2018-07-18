$(document).ready(function() {
		$(document).delegate('.open', 'click', function(event){
			$(this).addClass('oppenned');
			event.stopPropagation();
		})
		$(document).delegate('body', 'click', function(event) {
			$('.open').removeClass('oppenned');
		})
		$(document).delegate('.cls', 'click', function(event){
			$('.open').removeClass('oppenned');
			event.stopPropagation();
		});
    $(function() {
            $("nav a").css("opacity","1.0");
            $("nav a").hover(function () {
                    var myID = $(this).attr("id");
                    $("nav a:not(#"+myID+")").stop().animate({opacity: 0.5}, "slow");
            },
            function () {
                    $("nav a").stop().animate({opacity: 1.0}, "slow");
            });
    });
	});
