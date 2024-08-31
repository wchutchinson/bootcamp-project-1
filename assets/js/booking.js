// Initialize the datepicker
$(document).ready(function() {
    $('#datepicker').datepicker({
        format: 'mm/dd/yyyy',  // Date format
        autoclose: true,       // Close the datepicker automatically after date selection
        todayHighlight: true,   // Highlight today's date
        orientation: 'bottom auto'
        
    });

    // Get today's date
    let today = new Date();
    
    //Format the date to strin as MM/DD/YYYY
    formatDateToString(today);

    // Set the formatted date as the value of the datepicker input
    $('#datepicker').val(formatDateToString(today));
    
    let startDate = $('#datepicker').val();
    let endDate = formatDateToString(addDays(startDate, 4));

    let datesWithDaysArray = getDatesWithDays(startDate, endDate)
    console.log(datesWithDaysArray);

    // Append the dates to the DOM
    appendDates(datesWithDaysArray);
});

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

function appendDates(datesWithDaysArray){
    const btnDiv = document.querySelector('.btnDiv');

    datesWithDaysArray.forEach(dateInfo => {
        // create the main container div with class 'date'
        let newDiv = document.createElement('div');
        newDiv.className = 'date';

        // Create <h2> element and set its text
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
    
