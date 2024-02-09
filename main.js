
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
document.addEventListener('DOMContentLoaded', function () {
    // Select the main table of contents container
    var tocContainer = document.getElementById('tableOfContents');

    // Select all Level 1 (h2) headings within the table of contents
    var level1Headings = document.querySelectorAll('[id^="header-"] h2');

    level1Headings.forEach(function (level1Heading, sectionIndex) {
        // Create a list item for the section heading
        var sectionListItem = document.createElement('li');
        var sectionNumber = sectionIndex + 1;

        // Create an anchor tag for the Level 1 heading
        var sectionLink = document.createElement('a');
        sectionLink.href = '#header-' + sectionNumber;
        sectionLink.textContent = sectionNumber + '. ' + level1Heading.textContent;

        // Append the anchor tag to the list item
        sectionListItem.appendChild(sectionLink);

        // Select all Level 2 (h3) headings within the current Level 1 heading's section
        var level2Headings = level1Heading.closest('section').querySelectorAll('h3');

        if (level2Headings.length > 0) {
            // Create an ordered list for Level 2 headings
            var level2List = document.createElement('ol');

            level2Headings.forEach(function (level2Heading, level2Index) {
                // Create a list item for each Level 2 heading
                var level2ListItem = document.createElement('li');
                var level2Number = sectionNumber + '.' + (level2Index + 1);

                // Create an anchor tag for the Level 2 heading
                var level2Link = document.createElement('a');
                level2Link.href = '#heading-' + sectionNumber + '-' + (level2Index + 1);
                level2Link.textContent = level2Number + ' ' + level2Heading.textContent;

                // Append the anchor tag to the Level 2 list item
                level2ListItem.appendChild(level2Link);

                // Append the Level 2 list item to the Level 2 list
                level2List.appendChild(level2ListItem);
            });

            // Append the Level 2 list to the main table of contents container
            sectionListItem.appendChild(level2List);
        }

        // Append the section's list item to the main table of contents container
        tocContainer.appendChild(sectionListItem);
    });
           // Add a class to the main table of contents container for styling
           tocContainer.classList.add('custom-toc');
});


// Reading Objectives
function toggleContent(cardId) {
    var content = document.getElementById(cardId).querySelector('.content');
    var readMoreButton = document.getElementById(cardId).querySelector('.read-more');
  
    if (content.style.display === 'none' || content.style.display === '') {
      content.style.display = 'block';
      readMoreButton.innerHTML = 'Read Less 🍕';
    } else {
      content.style.display = 'none';
      readMoreButton.innerHTML = 'Read More 🍪';
    }
  }
  

//   READ SUMMARY

document.addEventListener("DOMContentLoaded", function () {
  // Show summary card on trigger click
  document.getElementById("summaryTrigger").addEventListener("click", function () {
    document.getElementById("summaryCard").style.display = "block";
    document.getElementById("summaryOverlay").style.display = "block";
  });

  // Hide summary card on close button click
  document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("summaryCard").style.display = "none";
    document.getElementById("summaryOverlay").style.display = "none";
  });

  // Hide summary card on outside click
  document.addEventListener("mouseup", function (e) {
    var summaryCard = document.getElementById("summaryCard");
    if (!summaryCard.contains(e.target)) {
      summaryCard.style.display = "none";
      document.getElementById("summaryOverlay").style.display = "none";
    }
  });
});

// 
document.addEventListener("scroll", function() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercentage = (scrollTop / scrollHeight) * 100;

  document.getElementById("progress-bar").style.width = scrollPercentage + "%";
});


