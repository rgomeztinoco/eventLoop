import STORE from "./store";

const DOMHandler = ((selector) => {
  const parent = document.querySelector(selector);

  return {
    load(page) {
      localStorage.setItem("currentPage", page.name);
      parent.innerHTML = page;
      page.addListeners();
    },
  };
})("#root");
