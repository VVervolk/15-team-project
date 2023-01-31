(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-first]'),
    closeModalBtn: document.querySelector('[data-modal-close-first]'),
    modal: document.querySelector('[data-modal-first]'),
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
