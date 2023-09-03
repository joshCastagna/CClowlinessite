/* Add copyright to footer 								*/
/* Author:		Josh Castagna						*/
/* Date:		10/12/2021							*/
/* Description:	JS to improve form */
"use strict"; 

/* copy values for Billing Address fields to Delivery Address fields */
function copyBillingAddress() {

   var billingInputElements = document.querySelectorAll("#billingAddress input");
   var deliveryInputElements = document.querySelectorAll("#shippingAddress input");
   if (document.getElementById("sameAddr").checked) {
      for (var i = 0; i < billingInputElements.length; i++) {
         deliveryInputElements[i + 1].value = billingInputElements[i].value;
      }
      document.querySelector("#shippingAddress select").value = document.querySelector("#billingAddress select").value;
   } else {
      for (var i = 0; i < billingInputElements.length; i++) {
         deliveryInputElements[i + 1].value = "";
      }
      document.querySelector("#shippingAddress select").selectedIndex = -1;
   }
} // END FUNCTION copyBillingAddress

//CHECK STATE FUNCTION
// checks to see if shipping address is in MO
function checkState() {
    //INPUT: none
    //OUPUT: if state is not MO, sends alert, changes selection to pickup
    //PROCESS: if statement to check shipping state
    var state = document.getElementById("shipState").value;
    if(state != "MO") 
    {
        alert("Delivery can only be done within Missouri.");
        document.getElementById("ship1").checked = "checked";
    }
}


/* EVENT LISTENERS */
function createEventListeners() {
   var shipSelect = document.getElementById("ship2");
   var same = document.getElementById("sameAddr");
   if (same.addEventListener) {
     same.addEventListener("click", copyBillingAddress, false); 
   } else if (same.attachEvent)  {
     same.attachEvent("onclick", copyBillingAddress);
   }
   if(shipSelect.addEventListener)
   {
    shipSelect.addEventListener("click",checkState,false);
   }
   else if(shipSelect.attachEvent)
   {
    shipSelect.attachEvent("onclick",checkState);
   }
} // END FUNCTION createEventListeners

/* run initial form configuration functions */
function init() {
   createEventListeners();		
} // END FUNCTION init

/* run setup functions when page finishes loading */
if (window.addEventListener) {
   window.addEventListener("load", init, false); 
} else if (window.attachEvent) {
   window.attachEvent("onload", init);
}