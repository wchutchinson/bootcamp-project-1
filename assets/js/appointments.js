const doneButton = document.querySelector('#done-button');
let box = document.querySelector('.box');
let appointments = document.querySelector('.appointment-list');

doneButton.addEventListener('click', () => {
  //redirect to the landing page
    window.location.href = 'index.html';
});

//get the data from the local storage
let storedData = JSON.parse(localStorage.getItem('appointments')) || [];

console.log(storedData);

for (let i = 0; i < storedData.length; i++) {
  console.log(storedData[i]);

    appointments.innerHTML += `<div class="box"> 
    
    <p>Name: ${storedData[i].name} </p> 
    <p>Date: ${storedData[i].date} </p>
     <p>Time: ${storedData[i].time} </p>
        </div>`;
};



