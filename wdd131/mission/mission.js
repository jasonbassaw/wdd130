// Select the dropdown and the logo image
const themeSelector = document.querySelector('#themeSelect');
const logo = document.querySelector('footer img');

function changeTheme() {
    const theme = themeSelector.value;
    
    if (theme === 'dark') {
        // Add dark class to body
        document.body.classList.add('dark');
        // Change logo to white version
        logo.src = "images/byui-logo_blue.webp";
    } else {
        // Remove dark class from body
        document.body.classList.remove('dark');
        // Change back to blue logo
        logo.src = "images/byui-logo_blue.webp";
    }
}

// Add event listener to the select element
themeSelector.addEventListener('change', changeTheme);