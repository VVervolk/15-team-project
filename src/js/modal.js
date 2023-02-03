(() => {
  const refs = {
    openModalBtnFirst: document.querySelector('[data-modal-open-first]'),
    openModalBtnFirst2: document.querySelector('[data-modal-open-first-2]'),
    closeModalBtnFirst: document.querySelector('[data-modal-close-first]'),
    modalFirst: document.querySelector('[data-modal-first]'),
  };

  refs.openModalBtnFirst.addEventListener('click', toggleModalFirst);
  refs.openModalBtnFirst2.addEventListener('click', toggleModalFirst);
  refs.closeModalBtnFirst.addEventListener('click', toggleModalFirst);

  function toggleModalFirst() {
    refs.modalFirst.classList.toggle('is-hidden');
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
    openModalBtnThird2: document.querySelector('[data-modal-open-third-2]'),
    openModalBtnThird3: document.querySelector('[data-modal-open-third-3]'),
    openModalBtnThird4: document.querySelector('[data-modal-open-third-4]'),
    closeModalBtnThird: document.querySelector('[data-modal-close-third]'),
    modalThird: document.querySelector('[data-modal-third]'),
  };

  refs.openModalBtnThird.addEventListener('click', toggleModalThird);
  refs.closeModalBtnThird.addEventListener('click', toggleModalThird);
  refs.openModalBtnThird2.addEventListener('click', toggleModalThird);
  refs.openModalBtnThird3.addEventListener('click', toggleModalThird);
  refs.openModalBtnThird4.addEventListener('click', toggleModalThird);

  function toggleModalThird() {
    refs.modalThird.classList.toggle('is-hidden');
  }
})();
