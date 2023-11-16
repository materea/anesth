/*----------  SHOW SCROLL UP ---------*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 400 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 400) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


// JavaScript function to show the pop-up dive
function showPopup() {
var popup = document.getElementById("popup");
popup.style.display = "block";
}

// JavaScript function to close the pop-up dive
function closePopup() {
var popup = document.getElementById("popup");
popup.style.display = "none";
}

// Add a click event listener to the text element
var trigger = document.getElementById("popup-trigger");
trigger.addEventListener("click", showPopup);


// Function to toggle dark mode
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle("dark-mode");
}

// Event listener for the toggle switch
const darkModeToggle = document.getElementById("dark-mode-toggle-checkbox");
darkModeToggle.addEventListener("change", toggleDarkMode);

// Check the user's preferred color scheme and set initial state
const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
if (prefersDarkMode) {
    darkModeToggle.checked = true;
    toggleDarkMode();
}


 // Function to generate dynamic Table of Contents
 function generateTableOfContents() {
    // Select all sections with 'id' attribute starting with 'header-'
    var sections = document.querySelectorAll('[id^="header-"]');
    
    // Select the ul element to append TOC items
    var tocList = document.getElementById('tocList');

    var currentList = tocList;

    sections.forEach(function(section, index) {
        // Get the header text (h2 or h3) within the section
        var headerText = section.querySelector('header h2').textContent;

        // Create a list item with a link to the section
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.href = '#' + section.id;
        link.textContent = headerText;
        listItem.appendChild(link);

        // Check if the section has a nested section (second level)
        var nestedSections = section.querySelectorAll('section');
        if (nestedSections.length > 0) {
            // Create a sublist for second-level headers
            var sublist = document.createElement('ul');

            nestedSections.forEach(function(nestedSection) {
                var nestedHeader = nestedSection.querySelector('header h3').textContent;
                var nestedListItem = document.createElement('li');
                var nestedLink = document.createElement('a');
                nestedLink.href = '#' + nestedSection.id;
                nestedLink.textContent = nestedHeader;
                nestedListItem.appendChild(nestedLink);
                sublist.appendChild(nestedListItem);
            });

            listItem.appendChild(sublist);
        }

        // Append the list item to the Table of Contents
        tocList.appendChild(listItem);
    });
}

// Call the function to generate Table of Contents
generateTableOfContents();