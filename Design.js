
// Get the navigation links
const homeLink = document.getElementById('home');
const aboutLink = document.getElementById('about');
const servicesLink = document.getElementById('services');
const contactLink = document.getElementById('contact');

// Get the search input and button
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// Add event listeners to the navigation links
homeLink.addEventListener('click', () => {
    // Handle home link click
    console.log('Home link clicked');
});

aboutLink.addEventListener('click', () => {
    // Handle about link click
    console.log('About link clicked');
});

servicesLink.addEventListener('click', () => {
    // Handle services link click
    console.log('Services link clicked');
});

contactLink.addEventListener('click', () => {
    // Handle contact link click
    console.log('Contact link clicked');
});

// Add event listener to the search button
searchBtn.addEventListener('click', () => {
    // Handle search button click
    const searchTerm = searchInput.value.trim();
    if (searchTerm) {
        console.log(`Searching for: ${About}`);
        // You can add your search logic here
    } else {
        console.log('Please enter a search term');
    }
   
});

