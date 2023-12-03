
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

// Scroll up
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



       // Function to generate dynamic Table of Contents
       function generateTableOfContents() {
        // Select all sections with 'id' attribute starting with 'header-' or 'heading-'
        var sections = document.querySelectorAll('[id^="header-"], [id^="heading-"]');
        
        // Select the ol element to append TOC items
        var tocList = document.getElementById('tocList');

        var currentList = tocList;
        var currentLevel = 1;

        sections.forEach(function(section, index) {
            // Get the header text (h2, h3, or h4) within the section
            var headerText = section.querySelector('header h2, header h3, header h4').textContent;

            // Determine the heading level
            var headingLevel = parseInt(section.tagName.charAt(1), 10);

            // Create a list item with a link to the section
            var listItem = document.createElement('li');
            var link = document.createElement('a');
            link.href = '#' + section.id;
            link.textContent = headerText;
            listItem.appendChild(link);

            // Check if the heading level has increased
            if (headingLevel > currentLevel) {
                // Create a sublist for the increased heading level
                var sublist = document.createElement('ol');
                currentList.lastElementChild.appendChild(sublist);
                currentList = sublist;
                currentLevel = headingLevel;
            } else if (headingLevel < currentLevel) {
                // Move back to the higher level list
                for (var i = headingLevel; i < currentLevel; i++) {
                    currentList = currentList.parentElement.parentElement;
                }
                currentLevel = headingLevel;
            }

            // Append the list item to the Table of Contents
            currentList.appendChild(listItem);
        });
    }

    // Call the function to generate Table of Contents
    generateTableOfContents();