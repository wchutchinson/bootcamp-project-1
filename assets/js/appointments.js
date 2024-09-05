const doneButton = document.querySelector('#done-button');
let box = document.querySelector('.box');
let appointments = document.querySelector('.appointment-list');
//let names = ['John Doe', 'Jane Doe', 'James Doe', 'Jenny Doe'];

doneButton.addEventListener('click', () => {
  alert('Done button clicked');

  //redirect to the landing page
    window.location.href = 'index.html';
});

//get the data from the local storage
const getData = window.location.search;
const urlParams = new URLSearchParams(getData);

let name = urlParams.get('name');
let date = urlParams.get('date');
let time = urlParams.get('time');

console.log(name);



for (let i = 0; i < apptInfo.length; i++) {
    appointments.innerHTML += `<div class="box"> <h2>Appointment ${i+1} </h2> 
    <p>Appointment date: </p>
     <p>Appointment time: ${names[i]} </p>
      <p>Appointment type: Consultation</p>
       <p>Appointment status: Done</p>
        </div>`;
};



