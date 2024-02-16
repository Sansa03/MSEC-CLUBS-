// This is just a sample event data, you can replace it with actual events
const events = [
    { date: '2024-02-20', event: 'Web Development Workshop' },
    { date: '2024-03-05', event: 'E-sports Tournament' },
    { date: '2024-03-15', event: 'Guest Speaker Session' }
  ];
  
  const table = document.querySelector('.event-calendar table');
  
  events.forEach(event => {
    const row = table.insertRow();
    const dateCell = row.insertCell(0);
    const eventCell = row.insertCell(1);
    dateCell.textContent = event.date;
    eventCell.textContent = event.event;
  });
  