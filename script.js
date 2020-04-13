var time = new Date().getHours();
var messageText;
var noon = 12;
var partyTime = 20;
var napTime = 14;
var lunchTime = 13;
var wakeupTime = 7;
var isPartyTime = false;
var partyTimeButton = document.getElementById("partyTimeButton");

var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock = function()
{
var message = document.getElementById("timeEvent");
var lolcat = document.getElementById("lolcat");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

if (time == wakeupTime){
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
	messageText = "Time to get up Skillcrusher!";
}
else if (time < noon) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
messageText = "Good Morning!";
}
else if (time == lunchTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
	messageText = "Time for a lunch break!";
}
else if (time == napTime) {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
	messageText = "Time for a snooze";
}
else if (time == partyTime) {
	messageText = "Dance break!";
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
}
else {
	image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
messageText = "good afternoon";
}

message.innerText = messageText;
lolcat.src = image;
	
showCurrentTime();
};

var showCurrentTime = function(){
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) { 
        meridian = "PM"; 
    }  
    if (hours > noon) { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10){
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10){
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};


updateClock();
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "Party TIME!";
	  partyTimeButton.style.backgroundColor = "#0a8dab";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
	  partyTimeButton.innerText = "Party over :(";
      partyTimeButton.style.backgroundColor = "#222";
   }
};
// Wake Up Time Dropdowns
var wakeUpEvent = function ()
{ wakeupTime = wakeUpTimeSelector.value;
};
// Lunch Time Dropdowns
var lunchEvent = function ()
{ lunchTime = lunchTimeSelector.value;
};
// Nap Time Dropdowns
var napEvent = function ()
{ napTime = napTimeSelector.value;
};

//Event Listeners
partyTimeButton.addEventListener("click", partyEvent);
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener("change", napEvent);