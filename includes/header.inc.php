	<header>
		<div class="content-container">
			
			<div class="logo"><a href="index.php"></a></div>

			<nav>
				<div class="mobile-menu-btn">
					<span>Menu</span>
					<i class="fa fa-bars"></i>
				</div>
				<ul class="main-nav">
					<li<?php if($nav == 'home') { echo ' class="current"'; } ?>><a href="index.php">Home</a></li>
					<li<?php if($nav == 'about') { echo ' class="current"'; } ?>><a href="about.php">About Us</a></li>
					<li<?php if($nav == 'services') { echo ' class="current"'; } ?>><a href="services.php">Services</a></li>
					<li<?php if($nav == 'inspiration') { echo ' class="current"'; } ?>><a href="inspiration.php">Inspiration</a></li>
					<li<?php if($nav == 'photo') { echo ' class="current"'; } ?>><a href="photo-gallery.php">Photo Gallery</a></li>
					<li<?php if($nav == 'contact') { echo ' class="current"'; } ?>><a href="contact.php">Contact Us</a></li>
				</ul>
			</nav>

		</div><!-- .content-container -->
	</header>
