(() => {
  const refs = {
    openModalBtnThird: document.querySelector('[data-modal-open-third]'),
    closeModalBtnThird: document.querySelector('[data-modal-close-third]'),
    modalThird: document.querySelector('[data-modal-third]'),
  };

  refs.openModalBtnThird.addEventListener('click', toggleModalThird);
  refs.closeModalBtnThird.addEventListener('click', toggleModalThird);

  function toggleModalThird() {
    refs.modalThird.classList.toggle('is-hidden');
  }
})();
