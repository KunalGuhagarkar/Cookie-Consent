const modal = document.querySelector("dialog");

localStorage.setItem("cookies", false);

console.log(Boolean(localStorage.getItem("cookies")));

if (!Boolean(localStorage.getItem("cookies"))) {
    window.addEventListener("DOMContentLoaded", () => {
        modal.showModal();
    });
    localStorage.setItem("cookies", true);
}

const closeModalBtn = document.querySelectorAll(".close-modal-btn");

closeModalBtn.forEach((item) => {
    item.addEventListener("click", () => {
        modal.close();
    });
});
