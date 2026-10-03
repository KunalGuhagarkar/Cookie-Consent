const modal = document.querySelector('dialog');

window.addEventListener('DOMContentLoaded', () => {
    modal.showModal();
});

const closeModalBtn = document.getElementsByClassName('close-modal-btn');
console.log(closeModalBtn);