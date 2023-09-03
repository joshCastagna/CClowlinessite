<!doctype html>	    <!-- Author:	JOSH CASTAGNA   -->
<html lang="en">    <!-- Date:	10/11/2021		    -->			
<head>		        <!-- Desc:	Script to mail      -->						
  <title>Thank You</title>	
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="index.css" />
</head>
<body>
<div id="wrapper">
<aside id="formData">
<pre>
<?php

$name = $_POST['name'];         // INITIALIZE FORM VARIABLES
$emailAddr = $_POST['email'];
$message = $_POST['message'];


$subject="Message from $name";
$headers = "From: $name <$emailAddr>\r\n";
mail("j.castagna99@gmail.com", $subject, $message, $headers); //SENDS MAIL

echo "Message sent! Thank you."; //small message for thank you page

?>

</pre>
</aside>
<footer>
    <ul id="miniNav">
    <li><a href = "contacts.html">Contacts</a></li>
    <li><a href = "about.html">About Us</a></li>
    <li><a href = "sale_barn.html">Sale Barn</a></li>
    <li><a href = "beef_order.html">Beef Orders</a></li>
    <li><a href = "gallery.html">Gallery</a></li>
</ul>
<aside>All images and video taken by James Castagna. <br> Double C Lowlines Logo by Joshua Castagna.</aside>

<div><p>&copy; 2009-<span id="copyright">2019</span> Double C Lowlines LLC</p></div></footer>
</div>
<script src="scripts/copyright.js"></script>
</body>
</html>