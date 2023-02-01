(() => {
  const refs = {
    openModalBtnFirst: document.querySelector('[data-modal-open-first]'),
    closeModalBtnFirst: document.querySelector('[data-modal-close-first]'),
    modalFirst: document.querySelector('[data-modal-first]'),
  };

  refs.openModalBtnFirst?.addEventListener('click', toggleModalFirst);
  refs.closeModalBtnFirst?.addEventListener('click', toggleModalFirst);

  function toggleModalFirst() {
    refs.modalFirst?.classList?.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtnSecond: document.querySelector('[data-modal-open-second]'),
    closeModalBtnSecond: document.querySelector('[data-modal-close-second]'),
    modalSecond: document.querySelector('[data-modal-second]'),
  };

  refs.openModalBtnSecond?.addEventListener('click', toggleModalSecond);
  refs.closeModalBtnSecond?.addEventListener('click', toggleModalSecond);

  function toggleModalSecond() {
    refs.modalSecond?.classList?.toggle('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtnThird: document.querySelector('[data-modal-open-third]'),
    closeModalBtnThird: document.querySelector('[data-modal-close-third]'),
    modalThird: document.querySelector('[data-modal-third]'),
  };

  refs.openModalBtnThird?.addEventListener('click', toggleModalThird);
  refs.closeModalBtnThird?.addEventListener('click', toggleModalThird);

  function toggleModalThird() {
    refs.modalThird?.classList?.toggle('is-hidden');
  }
})();
