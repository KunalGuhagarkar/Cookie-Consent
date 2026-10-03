const modal = document.querySelector("dialog");

if (localStorage.getItem("cookies") !== "true") {
    if (document.readyState === "loading") {
        window.addEventListener("DOMContentLoaded", () => {
            modal.showModal();
        });
    }
}

const closeModalBtn = document.querySelectorAll(".close-modal-btn");

closeModalBtn.forEach((item) => {
    item.addEventListener("click", () => {
        modal.close();
        localStorage.setItem("cookies", "true");
    });
});

console.log(localStorage.getItem("cookies"));
// localStorage.removeItem("cookies");
