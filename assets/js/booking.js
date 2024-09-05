// Initialize the datepicker
$(document).ready(function() {
    $('#datepicker').datepicker({
        format: 'mm/dd/yyyy',  // Date format
        autoclose: true,       // Close the datepicker automatically after date selection
        todayHighlight: true,   // Highlight today's date
        orientation: 'bottom auto',
        startDate: new Date()   // Start date is today's date
        
    });



    // Get today's date
    let today = new Date();
    
    // Set the datepicker value to today's date
    $('#datepicker').val(formatDate(today));

    // Initial dates appended
    updateDates();

    // Listen for the datepicker and the change date event
    $('#datepicker').on('changeDate', function() {
        // Clear previous dates from DOM
        clearDates();
        // Update the dates based on the newly selected date
        updateDates();
    });
    
    function updateDates(){
        let startDate = $('#datepicker').val();
        let endDate = formatDateToString(addDays(startDate, 4));
        let datesWithDaysArray = getDatesWithDays(startDate, endDate)
        appendDates(datesWithDaysArray);
    }

    function clearDates(){
        const dateElements = document.querySelectorAll('.date');
        dateElements.forEach(date => {
            date.remove();
        });
    }

    document.addEventListener('click', function (event) {
        if (event.target.classList.contains('hour-btn')) {
            const buttons = document.querySelectorAll('.hour-btn');
            buttons.forEach(button => {
                button.classList.remove('selected');
            });
            event.target.classList.add('selected');
        }
    });

    const saveButton = document.querySelector('#btnSave');
    saveButton.addEventListener('click', function () {
        const selectedButton = document.querySelector('.hour-btn.selected');
        if (selectedButton) {
            let apptHour = selectedButton.textContent;
            const dateElement = selectedButton.closest('.date').querySelector('h2');
            let apptDate = dateElement.textContent;

            // get name from index.html page
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            
            // Extract the name from the query string
            let name = urlParams.get('name'); //uncomment this line to get the name from the query string
            //let name = "John Doe"; //comment this line if you want to get the name from the query string

            if (name || apptDate || apptHour) {
                storeLocalStorage(name, apptDate, apptHour);
                redirectPage('appointments.html');
            }else {
                alert('No name, date or time selected');
            }
        } else {
            alert('Please select a time');
        }
    });

    const startOver = document.querySelector('#btnStartOver');
    startOver.addEventListener('click', function () {
        redirectPage('index.html');
    });

    window.onload(showModal());
});

function storeLocalStorage (name, date, time) {
    // Get the existing arrow from local storage, or create a new array if none exists
    let storedData = JSON.parse(localStorage.getItem('appointments')) || [];

    //create a new entry with provided data
    const newAppt = {
        name: name,
        date: date,
        time: time
    };

    storedData .push(newAppt);

    //Save the updated array to local storage
    localStorage.setItem('appointments', JSON.stringify(storedData));
    console.log ('New entry added:', newAppt)
    console.log ('Updated Schedule:', storedData);
}

// function to format the date as MM/DD/YYYY
function formatDate(date){
    const formattedDate = `${pad(date.getMonth() + 1)}/${pad(date.getDate())}/${pad(date.getFullYear())}`;
    console.log(formattedDate);
    return formattedDate;
} 

function formatDateToString(date){
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let day = date.getDate();
    let month = monthNames[date.getMonth()];
    let year = date.getFullYear();

    // Format the date as MM/DD/YYYY
    let formattedDate = month + ' ' + day + ', ' + year;
    return formattedDate;
}

//function to add days to a date
function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

//function to get days of the week for a range of dates
function getDatesWithDays (startDate, endDate){
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const hours = ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM", "10:00 PM"];
    
    let start = new Date(startDate);
    let end = new Date(endDate);
    let datesWithDays = [];

    while (start <= end) {
        let dayOfWeek = dayNames[start.getDay()];
        datesWithDays.push({
            date: formatDateToString(start), 
            day: dayOfWeek,
            hours: hours
        });
        start.setDate(start.getDate() + 1);
    }  
    return datesWithDays;
}

// function to append dates to the page
function appendDates(datesWithDaysArray){
    const btnDiv = document.querySelector('.btnDiv');

    datesWithDaysArray.forEach(dateInfo => {
        // create the main container div with class 'date'
        let newDiv = document.createElement('div');
        newDiv.className = 'date';

        // Create <h2> element and set its text7
        let newH2 = document.createElement('h2');
        newH2.textContent = dateInfo.day + ', ' + dateInfo.date;

        // Create the contianer div for hours
        let hoursDiv = document.createElement('div');
        hoursDiv.className = 'hours';

        // Create buttons for each hour
        dateInfo.hours.forEach(hour => {
            let hourButton = document.createElement('button');
            hourButton.className = 'hour-btn';
            hourButton.textContent = hour;
            hoursDiv.appendChild(hourButton);     
        });

        // Append the <h2> and hours div to the main container div
        newDiv.appendChild(newH2);
        newDiv.appendChild(hoursDiv);

        // Insert the new date div before the button div element
        btnDiv.parentNode.insertBefore(newDiv, btnDiv);
    });
}

function pad(num) {
    return num.toString().padStart(2, '0');
}

let redirectUrl = '';
const redirectPage = function (url) {
    redirectUrl = url;
    location.assign(url);
}