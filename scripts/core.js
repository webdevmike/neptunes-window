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

	// Photo gallery
	function adjustInactiveButtons() {

		// If we're at the first page, add inactive class to previous button
		if($('main.photo-gallery .gallery-page:first').hasClass('current')) {
			$('main.photo-gallery .pagination-controls .prev').addClass('inactive');
		} else {
			$('main.photo-gallery .pagination-controls .prev').removeClass('inactive');
		}

		// If we're at the last page, add inactive class to next button
		if($('main.photo-gallery .gallery-page:last').hasClass('current')) {
			$('main.photo-gallery .pagination-controls .next').addClass('inactive');
		} else {
			$('main.photo-gallery .pagination-controls .next').removeClass('inactive');
		}

	}

	// Next button (not inactive)
	$(document).on('click', 'main.photo-gallery .pagination-controls .next:not(".inactive")', function() {
		$('main.photo-gallery .gallery-page.current').removeClass('current').next('.gallery-page').addClass('current');
		adjustInactiveButtons();
	});

	// Previous button (not inactive)
	$(document).on('click', 'main.photo-gallery .pagination-controls .prev:not(".inactive")', function() {
		$('main.photo-gallery .gallery-page.current').removeClass('current').prev('.gallery-page').addClass('current');
		adjustInactiveButtons();
	});

	// Bypass fancybox on mobile
	$('.fancybox').click(function() {
		if($(window).width() < 570) {
			return false;
		}
	});
	
});