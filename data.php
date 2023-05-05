<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get the user's data from the $_POST superglobal
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Construct the email message
  $to = 'karthikesan92001@gmail.com';
  $subject = 'New Contact Form Submission';
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: $email";

  // Send the email
  if (mail($to, $subject, $body, $headers)) {
    echo 'Thank you for contacting us. We will get back to you soon.';
  } else {
    echo 'There was a problem sending your message. Please try again later.';
  }
}
?>
