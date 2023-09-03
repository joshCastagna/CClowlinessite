<!doctype html>	<!-- Author:	JOSH CASTAGNA			 -->
<html lang="en"><!-- Date:	10/10/2021		 -->						
<head>		      <!-- Desc:	Temporary script to process form data -->						
  <title>Thank You</title>	
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="index.css" />
</head>
<!-- 	DIRECTIONS:
	1. Change the comments above to reflect your name and today's date
	2. Replace "YOUR STYLE SHEET" with the path/name of your style sheet.
	3. Replace the contents of the <footer> with your standard footer.
	4. Set the value of the action attribute in your form to "processForm.php"
	5. Add your navigation to match the rest of your site.
	6. DO NOT CHANGE THE CODE INSIDE THE PHP TAGS.
-->
<body>
<div id="wrapper">
<aside id="formData">
<pre>
<?php 
	print_r($_POST);
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
