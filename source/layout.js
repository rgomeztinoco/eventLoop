import Footer from "./modules/footer.js";
import Header from "./modules/header.js";
import Main from "./modules/main.js";

const template = `
${Header}
${Main}
${Footer}
`;

function listenScroll() {
  window.addEventListener("wheel", (event) => {
    const item = document.querySelector("main");
    const viewportWidth = window.innerWidth;
    if (event.deltaY > 0) item.scrollLeft += viewportWidth;
    else item.scrollLeft -= viewportWidth;
  });
}

const Layout = {
  toString() {
    return template;
  },
  addListeners() {
    Main.addListeners();
    listenScroll();
  },
};

export default Layout;
