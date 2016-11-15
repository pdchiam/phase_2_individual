    /*

r sandwich = prompt('What\'s your favorite sandwich?');

switch (sandwich) {
    case 'peanut butter':
        alert('Peanut butter is good');
        break;
    case 'ham and cheese':
        alert('What type of cheese');
        break;
    case 'grilled cheese':
        alert('Coming right up');
        break;
        
    default:
        alert('sorry, we don\'t have that today');
}
*/

function checkName() {
    var firstName = document.getElementById('names').value;

    switch (firstName) {
        case 'Bob':
            alert('Hello Bob');
            break;
        
        case 'John':
            alert('Hello John');
            break;
        case 'Anna':
            alert('Hi Anna');
            break;
    
        
        default:
            alert('Hello Stranger');
        
    }

}