// search bar
document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const topics = document.querySelectorAll(".topics-container li");
  
    searchInput.addEventListener("input", function () {
      const searchTerm = searchInput.value.trim().toLowerCase();
  
      topics.forEach(topic => {
        const topicText = topic.textContent.toLowerCase();
        if (topicText.includes(searchTerm)) {
          topic.style.display = "block";
        } else {
          topic.style.display = "none";
        }
      });
    });
  });