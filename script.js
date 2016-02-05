var main = function() {
	var timer = 0;
	// setInterval(function(){
	// 	timer ++;
	// }, 1000)
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
	
	$('#hamster-title').click(function() {
    		alert('You have been active for ');
    	})

};

$(document).ready(main);
