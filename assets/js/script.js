const largeButton = document.getElementById('largeButton');
const smallButton1 = document.getElementById('smallButton1');
const smallButton2 = document.getElementById('smallButton2');
const largeButton2 = document.getElementById('largeButton2')

largeButton.addEventListener('click', function() {
    alert('You clicked the large button!');
});

smallButton1.addEventListener('click', function() {
    alert('You clicked Small Button 1!');
});

smallButton2.addEventListener('click', function() {
    alert('You clicked Small Button 2!');
});

largeButton2.addEventListener('click', function() {
    alert('You clicked the large button!');
});