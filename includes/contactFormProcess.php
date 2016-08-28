<?php

if(isset($_POST['name'])) {
	
		// Collect the form values and store in variables
		$name = strip_tags($_POST['name']);
		$email = strip_tags($_POST['email']);
		$phone = strip_tags($_POST['phone']);
		$company = strip_tags($_POST['company']);
		$message = strip_tags($_POST['message']);
		
		// create the email
		$to = "mikebostone@gmail.com";
		$headers = "From: mikebostone@gmail.com"."\r\n";
		$subject = "Contact Form";
		$body = "Message from contact form: \n
Name: $name \n
Email Address: $email \n
Phone: $phone \n
Company Name: $company \n
Message: $message \n
";
		
		// send the email
		mail($to,$subject,$body,$headers);

}

?>