let modals = document.querySelectorAll('[data-modal]');

modals.forEach(function (target) {
  target.addEventListener('click', openModal);
});

function openModal(e){
  let el = e.currentTarget;
  let modalId = el.getAttribute("data-modal");
  let modalEl = document.getElementById(modalId);
  let closeModalEl = modalEl.querySelector(".orascom-modal-core .orascom-data-core .section-data a.close-orascom-modal");
  let overlaylEl = modalEl.querySelector(".orascom-modal-overlay");
  modalEl.classList.add('active');

  closeModalEl.addEventListener("click", closeModal);
  overlaylEl.addEventListener("click", closeModal);
}

function closeModal(e){
  let modal = e.currentTarget.closest(".orascom-modal");
  modal.classList.remove('active');
}