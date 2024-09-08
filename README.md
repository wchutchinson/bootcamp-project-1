# Event Booking Site

## Project Status
Development has stopped after submission of the project as this was part of a graded assignment in the UNC Charlotte - Project 1.

## Description
This application allows a user to book events via a web interface or tablet kiosks set up during various trade shows. The application was built with touch-screen interfaces in mind with large buttons and easy to navigate screens for seleting an appointment time and date. The user will also be able to see their selection to confirm their selected event booking time.

## Badges
There are no badges for this project.

## Visuals
Please see the GIF below that demostrates the application's functionality.
![The Gif shows the application in action to select and make an appointment.](./assets/Images/RollingHills_Event_Booking_Site.gif) 

## Installation
There are no additional tools necessary for using and updating the website. The website uses HTML5 and stores data in localStorage. Before using, you may want to clear your local storage by typing localStorage.clear(). 

## Usage
* When greeted with the landing page the user will see two buttons.
* Clicking on the "View Existing Appointments" takes the user to a list of the booked appointments dates and times. 
* When on the "Appointments Page" the user can select the "Done" button to take them back to the "Landing Page".
* Clicking on "Schedule Appointment" a modal form is displayed allow the user to enter thier name. The user will not be able to continue without entering a name.
* After submitting their name the user is sent to the "Booking Page" where they can select a date. 
* Based on the date the application will display the selected date and the next 4 days of dates and times to provide more options to the user.
* An alert will display if the user attempts to save withouit selecting a time.
* After selecting a time under a date, the user is taking to the "Appointments Page", confirming their selection. 

## Support
For issues on this appliaction please create an issue in Git Hub repository: https://github.com/wchutchinson/event-booking-site/issues

## Roadmap
* Change from using local storage to uisng a database.
* Keep track of selected appointments.
* Limit appointments so that users cannot share the same appointment.
* Allow a single user too reserve multiple hours for longer events. 

## Contributing
We are no longer accepting additional contributions.

## Authors and acknowledgment
Much thanks goes out to Tabari L. and Camden C. for their contributions to the website.

## License
This project is using a MIT License.