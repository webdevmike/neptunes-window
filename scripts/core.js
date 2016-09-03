// Core Scripts
$(document).ready(function() {

	// Mobile menu
	$(document).on('click', 'header nav .mobile-menu-btn', function() {
		$('header nav ul.main-nav').toggleClass('show');
	});

	// Close Mobile menu
	$(document).click(function() {
		$('header nav ul.main-nav').removeClass('show');
	});

	// Omit close on menu and button
	$(document).on('click', 'header nav .mobile-menu-btn, header nav ul.main-nav', function(e) {
		e.stopPropagation();
	});

});