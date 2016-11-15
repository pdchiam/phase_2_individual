/*

$(document).ready(function() {
 $('.red').click(function() {
    $(this).slideUp('slow').slideDown('slow').css('background', 'green');
 });
});

$(document).ready(function() {
    $('button').click(function() {
        $('.animation').animate( {
            left: '500px',
            top: '100px',
            width: '300px',
            height: '300px',
            background: 'blue',
            
        }, 1000);
    });
});

*/

$(document).ready(function() {
    $('button').click(function() {
        $('.animation').effect('slide', {direction: 'right'}, 2000);
    });
});

$(document).ready(function() {
    
})