function fortuneTeller() {
    var spouse = document.getElementById("spouse").value;
    var job = document.getElementById("job").value;
    var children = document.getElementById("children").value;
    var city = document.getElementById("city").value;
    
    
    document.getElementById("text").innerHTML = "You will be a " + job + " married to " + spouse + " with " + children + " children living in " + city + ".";

}
    
/* for prompt 

var spouse = prompt("Who is your favorite actor or actress?");

var job = prompt("What is your dream job?");

var children = prompt("What is your favorite number?");

var city = prompt("What is the last place you have visited")


document.getElementById("text").innerHTML = "You will be a " + job + " married to " + spouse + " with " + children + " children living in " + city + ".";

}

/*
$(document).ready(function() {
    $("button").click(function() {
        fortuneTeller;
    });
});

*/