
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


// SIDEBAR POPOUT

  document.addEventListener('DOMContentLoaded', function () {
    // Array of topics - you can dynamically generate this from your existing content
    var topics = [
      "Introduction to Family Medicine",
      "The Family in Health and Disease",
      "Family Medicine Tools",
      "Basics of Communication and Interviewing skills in Family Medicine",
      "Medical Documentation",
      "Medical Ethics in Family Practice",
      "Family in Health Promotion and Disease Prevention",
      "Spirituality in Healthcare",
      "Healthcare Financing",
      "Complementary and Alternative Medicine",
      "Patient-Centered Clinical Methods",
      "Evidence-Based Medicine"
      // Add more topics as needed
    ];

    // Function to create sidebar menu items
    function createSidebarMenu() {
      var sidebarMenu = document.querySelector('.toggle-menu');
      topics.forEach(function (topic) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        var topicSlug = topic.toLowerCase().replace(/\s+/g, '-');
        link.href = '../lectures/' + topicSlug + '.html'; // Adjust the href based on your file structure
        link.textContent = topic;

        // Highlight the current page
        if (isCurrentPage(topicSlug)) {
          listItem.classList.add('current-page');
        }

        listItem.appendChild(link);
        sidebarMenu.appendChild(listItem);
      });
    }

    // Function to toggle the sidebar
    function toggleSidebar() {
      var sidebar = document.getElementById('sidebar');
      sidebar.style.width = '250px';
    }

    // Function to close the sidebar
    function closeSidebar() {
      var sidebar = document.getElementById('sidebar');
      sidebar.style.width = '0';
    }

    // Function to check if the current page matches the provided topic slug
    function isCurrentPage(topicSlug) {
      var currentPage = window.location.pathname.split('/').pop().replace('.html', '');
      return currentPage === topicSlug;
    }

    // Attach event listener to the toggle button
    document.getElementById('toggleSidebarBtn').addEventListener('click', toggleSidebar);

    // Attach event listener to the close button
    document.getElementById('closeSidebarBtn').addEventListener('click', closeSidebar);

    // Function to close the sidebar when clicking outside of it
    function closeSidebarOnClickOutside(event) {
      var sidebar = document.getElementById('sidebar');
      var sidebarBtn = document.getElementById('toggleSidebarBtn');

      // Check if the clicked element is not part of the sidebar or the toggle button
      if (!sidebar.contains(event.target) && event.target !== sidebarBtn) {
        closeSidebar();
      }
    }

    // Attach event listener to the document for clicks
    document.addEventListener('click', closeSidebarOnClickOutside);

    // Create the sidebar menu on page load
    createSidebarMenu();
  });

