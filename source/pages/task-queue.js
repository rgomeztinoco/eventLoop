import Code from "../modules/code.js";
import {
  renderCallStack,
  renderCard,
  renderQueue,
} from "../modules/helpers.js";
import STORE from "../store.js";
import renderLoop from "../svg/loop.js";

function render() {
  return `
  <div class="container--explanation">
    ${renderCard("call stack", "")}
    ${renderCallStack.call(this)}
  </div>
  <div class="container--explanation">
    ${renderCard("event loop", "Observa si el call stack está vacio y si lo está, envia la primera tarea en cola desde task queue.")}
    <div class="queue__relative container">
      ${renderLoop("event-loop__icon")}
    </div>
  </div>
  <div class="container--explanation">
    <div class="container--explanation">
      ${renderCard("web api", "Conjunto de funcionalidades y metodos que ejecuta el navegador. Metodos como las peticiones fetch, setTimeOut, eventos, etc.")}
      ${renderQueue.call(this, "web-api", [
        { content: `setTimeout`, data: [`current-target="stack"`] },
        {
          content: "console.log",
          data: ["show-log", `current-target="stack"`],
        },
        {
          content: `console.log`,
          data: ["show-log", `current-target="stack"`],
        },
      ])}
    </div>
    <div class="container--explanation">
      ${renderCard("task queue", "Cola de tareas que vuelven al Call Stack despues de haber sido resueltas por las Web API. Solo pueden volver a entrar si el Call Stack está libre.")}
      ${renderQueue.call(this, "task-queue", [{ content: "setTimeout(0)" }])}
    </div>
  </div>
  <div class="container--explanation">
    ${renderCard("ejemplo", "click en la imagen para correr el código")}
    ${Code.toString.call(this)}
  </div>
  `;
}

const TaskQueue = {
  toString() {
    return render.call(this);
  },
  addListeners() {
    Code.listen.call(this);
  },
  currentAction: "unvanish",
  currentTarget: "stack",
  currentCallsSet: 0,
  SETS_OF_CALLS: [
    [
      { content: "(global)", data: [`current-target="api"`] },
      { content: `sayHello` },
    ],
    [
      { content: "(global)", visible: true, data: ["last-in-stack"] },
      { content: `printMessage`, data: [`current-target="api"`] },
    ],
    [
      { content: "setTimeout(0)" },
      { content: "&lt;anonymous&gt;" },
      { content: `printMessage`, data: [`current-target="api"`] },
    ]
  ],
  pageId: ++STORE.currentID,
  CODE_LINES: ["Hello I'm JonSnow", "Soy Asíncrono"],
  CODE_NAME: "async",
  arrowPosition: [0, 26, 33.8, 12.7, 33.8, 20.4, 20.4, 0, 0, 26, 28, 20.4, 0],
};

export default TaskQueue;
