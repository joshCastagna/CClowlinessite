/* Add copyright to footer 								*/
/* Author:		Josh Castagna						*/
/* Date:		10/12/2021							*/
/* Description:	Adds current copyright year to footer 	*/

"use strict";

var copyrightElement = document.getElementById("copyright");
var currentYear = new Date().getFullYear(); 

copyrightElement.innerHTML = currentYear;