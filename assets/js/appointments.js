const doneButton = document.querySelector('#done-button');
let box = document.querySelector('.box');
let appointments = document.querySelector('.appointment-list');
let names = ['John Doe', 'Jane Doe', 'James Doe', 'Jenny Doe'];

doneButton.addEventListener('click', () => {
  alert('Done button clicked');

  //redirect to the landing page
    window.location.href = 'https://g.co/kgs/2gijikW';
});
for (let i = 0; i < names.length; i++) {
    appointments.innerHTML += `<div class="box"> <h2>Appointment ${i+1} </h2> 
    <p>Appointment date: 2021-09-10</p>
     <p>Appointment time: ${names[i]} </p>
      <p>Appointment type: Consultation</p>
       <p>Appointment status: Done</p>
        </div>`;
};



