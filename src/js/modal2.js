(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-second]'),
    closeModalBtn: document.querySelector('[data-modal-close-second]'),
    modal: document.querySelector('[data-modal-second]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModalRemove);
  refs.closeModalBtn.addEventListener('click', toggleModalAdd);

  function toggleModalAdd() {
    refs.modal.classList.add('is-hidden');
  }
  function toggleModalRemove() {
    refs.modalFirst.classList.remove('is-hidden');
  }
})();
