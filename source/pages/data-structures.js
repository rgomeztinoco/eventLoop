import Code from "../modules/code.js";
import {
  renderBubble,
  renderCallStack,
  renderCard,
} from "../modules/helpers.js";
import STORE from "../store.js";

const MEMORY = [
  { content: `name = `, toReplace: `"Jon"` },
  { content: `lastname = `, toReplace: `"Snow"` },
  { content: `getFullname() {...}` },
  { content: `sayHello() {...}` },
];

function renderMemoryHeap() {
  return `
  <div class="data-structures__memory-heap container" id="memory-heap-${DataStructures.pageId}">
    ${MEMORY.map(renderBubble).join("")}
  </div>
  `;
}

function render() {
  return `
  <div class="data-structures__interactive">
    <div class="container--explanation">
      ${renderCard(
        "Memory heap",
        "Almacena los valores de las variables y las funciones. Los valores no se guardan de forma ordenada"
      )}
      ${renderMemoryHeap()}
    </div>
    <div class="container--explanation">
      ${renderCard(
        "call stack",
        "Es una estructura de datos en la cual se van apilando las tareas. La ultima tarea en entrar será la primera en ejecutarse."
      )}
      ${renderCallStack.call(this)}
    </div>
  </div>
  <div class="container--explanation">
    ${renderCard("ejemplo", "click en la imagen para correr el código")}
    ${Code.toString.call(this)}
  </div>
  `;
}

const DataStructures = {
  toString() {
    return render.call(this);
  },
  addListeners() {
    Code.listen.call(this);
  },
  currentAction: "unvanish",
  currentTarget: "heap",
  currentCallsSet: 0,
  SETS_OF_CALLS: [
    [
      { content: "(global)", visible: false },
      { content: `sayHello` },
      { content: `getFullname` },
    ],
    [
      { content: "(global)", visible: true },
      { content: `printMessage`, data: ["show-log"] },
    ],
  ],
  pageId: ++STORE.currentID,
  CODE_NAME: "jon-snow",
  CODE_LINES: ["Hello I'm JonSnow"],
  arrowPosition: [0, 3.5, 7.4, 35.5, 21.4, 13.4, 21.4, 35.5, 29.3, 0],
};

export default DataStructures;
