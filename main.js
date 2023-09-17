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


