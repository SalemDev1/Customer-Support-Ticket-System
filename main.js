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
            throw new Error('No tickets here. Guess we’re just like that');
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