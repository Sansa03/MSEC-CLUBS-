// Get the current date
const currentDate = new Date();

// Function to display the current date in the event calendar
function displayCurrentDate() {
  const monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"];
  
  const month = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  
  const eventCalendar = document.querySelector('.event-calendar');
  eventCalendar.innerHTML += `<p>Current Date: ${month} ${year}</p>`;
}

// Call the function to display the current date
displayCurrentDate();
