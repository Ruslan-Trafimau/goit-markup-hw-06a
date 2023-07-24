(() => {
  const refs = {
    openMenulBtn: document.querySelector("[data-menu-open]"),
    closeMenulBtn: document.querySelector("[data-menu-close]"),
    menul: document.querySelector("[data-menu]"),
  };

  refs.openMenulBtn.addEventListener("click", toggleMenu);
  refs.closeMenulBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menul.classList.toggle("is-hidden");
  }
})();