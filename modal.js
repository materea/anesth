// modal image
function openModal(imageElement) {
    var modal = document.getElementById("myModal");
    var modalImage = document.getElementById("modalImage");
    var caption = document.getElementById("caption");

  
    modal.style.display = "block";
    modalImage.src = imageElement.src;
    caption.innerHTML = imageElement.nextElementSibling.innerHTML;
  }
  
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  