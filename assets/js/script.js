const largeButton = document.getElementById('largeButton');
const smallButton1 = document.getElementById('schAppt');
const smallButton2 = document.getElementById('smallButton2');
const largeButton2 = document.getElementById('largeButton2');
const dialog = document.getElementById('dialog');
const submit = document.getElementById('btnSubmit');
const nameInput = document.getElementById('nameInput');


smallButton1.addEventListener('click', function() {
    dialog.showModal();
});

submit.addEventListener('click', function() {
    const nameValue = nameInput.value;
    window.location.href = `booking.html?name=${encodeURIComponent(nameValue)}`;
});

smallButton2.addEventListener('click', function() {
    window.location.href = 'https://www.example.com/page2';
});