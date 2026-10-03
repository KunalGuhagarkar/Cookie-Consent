const modal = document.querySelector("dialog");

localStorage.setItem("cookies", false);

if (!localStorage.getItem("cookies")) {
    window.addEventListener("DOMContentLoaded", () => {
        modal.showModal();
    });
}

const closeModalBtn = document.querySelectorAll(".close-modal-btn");

closeModalBtn.forEach((item) => {
    item.addEventListener("click", () => {
        modal.close();
    });
});
