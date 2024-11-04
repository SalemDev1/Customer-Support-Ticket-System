// Task 2- Fetch Tickets Using Async/Await and Handle Errors
// Get the elements to display loading, tickets, and error message
const loadingMessage = document.getElementById('loading');
const ticketContainer = document.getElementById('ticket-container');
const errorMessage = document.getElementById('error-message');

// Async function to retrieve/fetch tickets from API site
async function fetchTickets() {
    // Displays the  loading message
    loadingMessage.style.display = 'block';
    errorMessage.textContent = ''; 
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');

        // Checks to see if the "fetch" request was successful and or working 
        if (!response.ok) {
            throw new Error('Failed to find the tickets.');
        }
        const tickets = await response.json();

        // Throws the  custom error message if no tickets can be found
        if (tickets.length === 0) {
            throw new Error('No tickets here. Guess we are just like that');
        }

        // Pass the tickets to the displayTickets function which will properly handle the HTML structure of ticket
        displayTickets(tickets);
    } catch (error) {
        console.error('Error finding tickets, maybe next time?', error);
        errorMessage.textContent = error.message; // Displays an console error message on the page
    } finally {
        loadingMessage.style.display = 'none';
    }
}
// Calls to the function to fetch tickets
fetchTickets();

//Task 3- Display Tickets Dynamically on the Page
// Functions to display the tickets on the webpage
function displayTickets(tickets) {
    ticketContainer.innerHTML = ''; 

    tickets.forEach(ticket => {
        // Create html elements for each ticket displaying items such as Ticket ID,Customer Name,Issue Description , and Details  
        const ticketElement = document.createElement('div');
        const ticketId = document.createElement('p');
        const customerName = document.createElement('p');
        const issueDescription = document.createElement('h3');
        const issueDetails = document.createElement('p');
        ticketId.textContent = `Ticket ID: ${ticket.id}`;
        customerName.textContent = `Customer Name: User ${ticket.userId}`;
        issueDescription.textContent = `Issue: ${ticket.title}`;
        issueDetails.textContent = `Details: ${ticket.body}`;
        ticketElement.appendChild(ticketId);
        ticketElement.appendChild(customerName);
        ticketElement.appendChild(issueDescription);
        ticketElement.appendChild(issueDetails);
       

        // Add the ticket element to the ticket container from the orginal html structure
        ticketContainer.appendChild(ticketElement);
    })};

    // Task 4-  Use finally to Ensure Cleanup
    //Task 4 is handled in Task 2 as you can see where i typed out "Finally" this ensures the loading message is hidden once the fetch is complete, regardless of whether it succeeds or fails.