const menuButton = document.querySelector(".open_menu");
const navModal = document.querySelector(".background_modal");
const closeButton = document.querySelector(".fa-solid");

function openNav() {
  navModal.classList.add("open");
  navModal.classList.remove("close");
}

closeButton.addEventListener("click", () => {
  navModal.classList.remove("open");
  navModal.classList.add("close");
});
