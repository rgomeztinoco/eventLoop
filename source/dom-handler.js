const DOMHandler = ((selector) => {
  const parent = document.querySelector(selector);

  return {
    load(module) {
      // localStorage.setItem("currentmodule", module.name);
      parent.innerHTML = module;
      module.addListeners();
    },
  };
})("#root")

export default DOMHandler