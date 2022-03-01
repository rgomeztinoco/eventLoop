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
    ${renderCard("event loop", "")}
    <div class="queue__relative container">
      ${renderLoop("event-loop__icon")}
    </div>
  </div>
  <div class="container--explanation">
    <div class="container--explanation">
      ${renderCard("web api", "")}
      ${renderQueue.call(this, "web-api", [
        { content: `setTimeout`, data: [`current-target="stack"`, `time="0"`] },
        { content: `setTimeout`, data: [`current-target="stack"`, 'time="50000"'] },
        {
          content: "console.log",
          data: ["show-log", `current-target="stack"`],
        },
        {
          content: `console.log`,
          data: ["show-log", `current-target="stack"`],
        },
        {
          content: `console.log`,
          data: ["show-log", `current-target="stack"`],
        },
        {
          content: `console.log`,
          data: ["show-log", `current-target="stack"`],
        },
      ])}
    </div>
    <div class="container--explanation">
      ${renderCard("task queue", "")}
      ${renderQueue.call(this, "task-queue", [{ content: "setTimeout(0)" }, { content: "setTimeout(50000)" }])}
    </div>
  </div>
  <div class="container--explanation">
    ${renderCard("quiz", "click en la imagen para correr el código")}
    ${Code.toString.call(this)}
  </div>
  `;
}

const Quiz = {
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
      { content: "sayHelloAsync", data: [`current-target="api"`] },
      { content: `printMessage`, data: [`current-target="api"`] },
    ],
    [
      { content: "(global)", visible: true, data: ["last-in-stack"] },
      { content: `printMessage`, data: [`current-target="api"`] },
    ],
    [
      { content: "setTimeout(0)", data: ["last-in-stack"] },
      { content: "&lt;anonymous&gt;" },
      { content: `printMessage`, data: [`current-target="api"`] },
    ],
    [
      { content: "setTimeout(50000)" },
      { content: "&lt;anonymous&gt;" },
      { content: `printMessage`, data: [`current-target="api"`] },
    ],
  ],
  pageId: ++STORE.currentID,
  CODE_LINES: ["world", "undefined", "Soy Asíncrono", "Hello"],
  CODE_NAME: "quiz",
  arrowPosition: [0, 29.3, 38.4, 6.5, 13.5, 22.4, 15.5, 38.4, 22.4, 24.5, 0, 0, 29.4, 31.7, 22.4, 24.5, 0, 1, 0, 6.5, 6.5, 9, 22.4, 0],
};

export default Quiz;
