const largeButton = document.getElementById('largeButton');
const smallButton1 = document.getElementById('schAppt');
const smallButton2 = document.getElementById('smallButton2');
const largeButton2 = document.getElementById('largeButton2');
const dialog = document.getElementById('dialog');
const submit = document.getElementById('btnSubmit');
const NameInput = document.getElementById('nameInput');


largeButton.addEventListener('click', function() {
    alert('You clicked the large button!');
});

smallButton1.addEventListener('click', function() {
    dialog.showModal();
});

submit.addEventListener('click', function() {
    const nameValue = nameInput.value;
    window.location.href = `booking.html?name=${encodeURIComponent(nameValue)}`;
    //dialog.close();
});

smallButton2.addEventListener('click', function() {
    window.location.href = 'https://www.example.com/page2'; // Replace 'https://www.example.com/page2' with the URL you want to redirect to
});

largeButton2.addEventListener('click', function() {
    alert('You clicked the large button!');
});



//QUESTIONS

//Do I need to match the classes for the smallButton1 and smallButton2 to the ones in the html and CSS files?

//Do I need to add the script.js file to the html file or is it already included in the code?

//Should I keep largeButton and largeButton2 as buttons or change them to something else?

//How do I take the changes I made and apply them to the landing page on GitHub?


//NOTES

//I need to make the two small buttons redirect to a different page when clicked.

//I need to add the links to the small buttons in the script.js file.

