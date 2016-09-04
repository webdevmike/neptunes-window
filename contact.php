<?php $nav = 'contact'; ?>
<!DOCTYPE html>
<html>
<head>
<?php include('includes/head.inc.php'); ?>
</head>

<body>
<?php include('includes/header.inc.php'); ?>

	<main class="contact">
		<div class="content-container">
			
			<h1>Contact Us</h1>

			<div class="contact-right">
				<div class="contact-form">
					<form>
						<div class="top-inputs">
							<input type="text" name="name" placeholder="Name" class="frm-input">
							<input type="text" name="email" placeholder="Email" class="frm-input">
						</div>
						<textarea name="message" placeholder="Message"></textarea>
						<button type="button">Send Email</button>
					</form>
				</div><!-- .contact-form -->
			</div><!-- .contact-right -->

			<div class="contact-left">

				<ul class="contact-info">
					<li>
						<span>Neptune’s Window</span>
						<span>34 Tayco St.</span>
						<span>Menasha, WI  54952</span>
					</li>
					<li>(920) 915-7302</li>
					<li><a href="mailto:mail@neptuneswindow.com">mail@neptuneswindow.com</a></li>
					<li><a href="https://www.facebook.com/neptuneswindow" target="_blank">/NeptunesWindow</a></li>
				</ul>

			</div><!-- .contact-left -->

		</div><!-- .content-container -->
	</main>

<?php include('includes/footer.inc.php'); ?>
</body>
</html>