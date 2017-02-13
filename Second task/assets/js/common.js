document.addEventListener("DOMContentLoaded", function(event) {
  var modal = document.getElementById("main-modal");
  var openModal = document.getElementById('open-main-modal');
  var closeModal = document.getElementById('close-main-modal');

  openModal.addEventListener('click', function(e) {
      e.preventDefault();
      modal.classList.add("active");
  });
  closeModal.addEventListener('click', function() {
      modal.classList.remove("active");
  });
});
