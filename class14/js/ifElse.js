var today = new Date();
var hourNow = today.getHours()
var greeting;

if(hourNow >= 24) {
    greeting = 'Good Evening';
} else if (hourNow < 12) {
    greeting = 'Good Afternoon';
} else {
    greeting = 'Welcome';
}

document.getElementById("greetingUser").innerHTML = greeting;