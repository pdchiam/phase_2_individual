$(document).ready(function() {
    $('button').click(function() {
        $('.like').effect("explode", {pieces: 25}, 200, "someEasingFunction");
    });
});

$('a.button').click(function(e)
{

    e.preventDefault();
});
