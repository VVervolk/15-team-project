(() => {
  const refs = {
    openModalBtnFirst: document.querySelector("[data-modal-open-first]"),
    openModalBtnSecond: document.querySelector("[data-modal-open-second]"),
    closeModalBtnFirst: document.querySelector("[data-modal-close-first]"),
    closeModalBtnSecond: document.querySelector("[data-modal-close-second]"),
    modalFirst: document.querySelector("[data-modal-first]"),
    modalSecond: document.querySelector("[data-modal-second]"),
  };

  refs.openModalBtnFirst.addEventListener("click", toggleModalFirst);
  refs.openModalBtnSecond.addEventListener("click", toggleModalSecond);
  refs.closeModalBtnFirst.addEventListener("click", toggleModalFirst);
  refs.closeModalBtnSecond.addEventListener("click", toggleModalSecond);

  function toggleModalFirst() {
    refs.modalFirst.classList.toggle("is-hidden");
  }
  function toggleModalSecond() {
    refs.modalSecond.classList.toggle("is-hidden");
  }
})();