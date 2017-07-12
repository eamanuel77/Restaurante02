var time = new Date().getHours();

var breakfast = 8;
var lunchtime = 11;
var noon = 12;
var closed = 23;


var pics = document.getElementById('pics');
var message = document.getElementById('timeEvent');

var updateClock = function() {
  
var messageText;
var image = "img/foodTruckPhoto.jpeg";


  if (time == breakfast) {
        image = "img/breakfast_menu.jpeg";
        messageText = "Breakfast is Served!";
    } else if (time == lunchtime) {
        image = "img/lunch_menu.jpeg";
        messageText = "Lunch items now available!";
    } else if (time == noon) {
        image = "img/lunch_menu.jpeg";
        messageText = "Serving lunch only at this time";
    } else if (time == closed) {
        image = "img/closedSign.jpeg";
        messageText = "Sorry, we're Closed!";
    } else {
        image = "img/dinner_menu.jpeg";
        messageText = "Dinner Time!";
    }

console.log(messageText); 
message.innerText = messageText;
pics.src = image;

showCurrentTime();

};

    var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + " " + meridian;
 
    clock.innerText = clockTime;
};


updateClock();


