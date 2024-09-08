const schAppt = document.getElementById('schAppt');
const dialog = document.getElementById('dialog');
const submit = document.getElementById('btnSubmit');
const nameInput = document.getElementById('nameInput');
const cancelButton = document.getElementById('btnClose');
const viewAppt = document.getElementById('viewAppt');

schAppt.addEventListener('click', function() {
    dialog.showModal();
});

submit.addEventListener('click', function() {
    if (!nameInput.value) {
    return;
    }
    window.location.href = `booking.html?name=${encodeURIComponent(nameInput.value)}`;
});

// Add Cancel button to dialog
cancelButton.addEventListener('click', function() {
    dialog.close();
});

viewAppt.addEventListener('click', function() {
    redirectPage('appointments.html');
});
