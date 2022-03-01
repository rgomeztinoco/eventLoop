import STORE from "../store.js";
import renderLoop from "../svg/loop.js";

const template = `
  <div class="event-loop__icon-container container">
    ${renderLoop("event-loop__icon")}
  </div>
  <div class="event-loop__body">
    <h2 class="title">¿qué es el event loop?</h2>
    <p class="content--md">
      Es la funcionalidad de JavaScript que le permite realizar tareas de
      forma asíncrona a pesar de funcionar en un solo hilo. Es decir que
      solamente puede ejecutar una tarea a la vez.
    </p>
  </div>
`;

const EventLoop = {
  toString() {
    return template;
  },
  addListeners() {},
  pageId: ++STORE.currentID,
};

export default EventLoop;
