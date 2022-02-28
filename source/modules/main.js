import DataStructures from "../pages/data-structures.js"
import EventLoop from "../pages/event-loop.js"
import renderLoop from "../svg/loop.js"

const template = `
<main>
  ${EventLoop}
  ${DataStructures}
  <section class="main-section" id="js-task-queue">
    <div class="event-loop">
      <div class="event-loop__icon-container">
        ${renderLoop("event-loop__icon")}
      </div>
      <div class="event-loop__body">
        <h2 class="title">¿qué es el event loop? 2</h2>
        <p class="content--md">
          Es la funcionalidad de JavaScript que le permite realizar tareas de
          forma asíncrona a pesar de funcionar en un solo hilo. Es decir que
          solamente puede ejecutar una tarea a la vez.
        </p>
      </div>
    </div>
  </section>
</main>
`

const Main = {
  toString() {
    return template
  },
  addListeners() {
    DataStructures.addListeners()
  }
}

export default Main