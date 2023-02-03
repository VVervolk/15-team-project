(() => {
  const refs = {
    openModalBtnFirst: document.querySelector('[data-modal-open-first]'),
    closeModalBtnFirst: document.querySelector('[data-modal-close-first]'),
    modalFirst: document.querySelector('[data-modal-first]'),
  };

  refs.openModalBtnFirst?.addEventListener('click', openModalFirst);
  refs.closeModalBtnFirst?.addEventListener('click', closeModalFirst);

  function openModalFirst() {
    refs.modalFirst?.classList?.remove('is-hidden');
  }
  function closeModalFirst() {
    refs.modalFirst?.classList?.add('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtnSecond: document.querySelector('[data-modal-open-second]'),
    closeModalBtnSecond: document.querySelector('[data-modal-close-second]'),
    modalSecond: document.querySelector('[data-modal-second]'),
  };

  refs.openModalBtnSecond?.addEventListener('click', openModalSecond);
  refs.closeModalBtnSecond?.addEventListener('click', closeModalSecond);

  function openModalSecond() {
    refs.modalSecond?.classList?.remove('is-hidden');
  }
  function closeModalSecond() {
    refs.modalSecond?.classList?.add('is-hidden');
  }
})();

(() => {
  const refs = {
    openModalBtnThird: document.querySelector('[data-modal-open-third]'),
    closeModalBtnThird: document.querySelector('[data-modal-close-third]'),
    modalThird: document.querySelector('[data-modal-third]'),
  };

  refs.openModalBtnThird?.addEventListener('click', openModalThird);
  refs.closeModalBtnThird?.addEventListener('click', closeModalThird);

  function openModalThird() {
    refs.modalThird?.classList?.remove('is-hidden');
  }
  function closeModalThird() {
    refs.modalThird?.classList?.add('is-hidden');
  }
})();
