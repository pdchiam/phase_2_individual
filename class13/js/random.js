var movieQuotes = ["I'll have that", "you comple me", "Why so serious", "I drink your milkshake"];
document.getElementById("getQuote").onclick = function() {
    document.getElementById("quotes").innerHTML = 
        movieQuotes[Math.floor(Math.random() * (movieQuotes.length-1))];
};

var d = new Date();
var n = d.getHours();
if(n > 19 || n < 6) {
    document.html.className = "back-night";
    
} else {
    document.html.className = "back-day";
}
        