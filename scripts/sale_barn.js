/* Author:		Josh Castagna						*/
/* Date:		10/12/2021							*/
/* Description:	outputs cattle listings         	*/

"use strict";

// CATTLE CLASS
// holds information for cattle listing
class cattle {
    constructor(type,name,code,dob,price,imagesrc)
    {
        this.cattleType = type;
        this.name = name;
        this.code = code;
        this.dob = dob;
        this.price = price;
        this.image = imagesrc;
    }
}

//adding cattle to cattle array
// in an ideal environment, this would be connected to a database to fill the array,
// not manually filling it
const cattleArray = [];
cattleArray[0] = new cattle("BULL","Bucky","Full Blood","10/12/2017",3000,"images/bull0001.jpg");
cattleArray[1] = new cattle("BULL","Stuart","3/4 Blood","09/11/2019",2000,"images/bull0003.jpg");
cattleArray[2] = new cattle("BULL","Kevin","3/4 Blood","25/04/2019",2000,"images/bull0004.jpg");
cattleArray[3] = new cattle("HEIFER","FALL 2020 HEIFERS","","10/05/2020",1200,"images/cow0001.JPG");

function showCattle() 
{
    //input: none
    //output: adds cattle elements to catalogue page
    //processing: checks if a specific selection has been made. If specification has been made, filters output.

    var cattleList = "";
    var selection = document.getElementById("cattleSelect").value;
    console.log(selection);
    for(let i = 0; i < cattleArray.length; i++) 
    {   //this is terrifying to look at
        if((selection == cattleArray[i].cattleType) || selection == "ALL")
        {
        cattleList += '<figure class="cowElement">'
        cattleList += '<img src="';
        cattleList += cattleArray[i].image + '"';
        cattleList +=  'title="'+ cattleArray[i].cattleType +'"/>';
        cattleList +=  '<a class="cattleType">' + cattleArray[i].cattleType + '</a>'
        cattleList += '<figcaption> <table> <tr> <th> NAME:</th> <td>';
        cattleList += cattleArray[i].name + '</td>';
        cattleList += '</tr><tr><th>REGISTRATION:</th><td>'
        cattleList += cattleArray[i].code + '</td>';
        cattleList +=  '</tr><tr><th>DOB:</th><td>'
        cattleList += cattleArray[i].dob + '</td>';
        cattleList += '</tr><tr><th>PRICE:</th><td>$'
        cattleList += cattleArray[i].price + '</td></tr></table></figcaption></figure>';
        }
    }
    
    var cowBox = document.getElementById("cowBox");
    cowBox.innerHTML = cattleList;
}


function init()
{   console.log("change cattle selected");
    var selection = document.getElementById("cattleSelect");
    var type = selection.value;
}

if(window.addEventListener)
{ 
  window.addEventListener("load",showCattle,false);
  cattleSelect.addEventListener("change",showCattle,false);
    
}
else if (window.attachEvent)
{ window.attachEvent("onload",showCattle);
 cattleSelect.attachEvent("onchange",showCattle,false);
}