import { renderBubble, renderCard } from "../modules/helpers.js";
import renderArrow from "../svg/arrow.js";

const MEMORY = [
  { content: `name = `, toReplace: `"Jon"` },
  { content: `lastname = `, toReplace: `"Snow"` },
  { content: `getFullname() {...}` },
  { content: `sayHello() {...}` },
];

function renderMemoryHeap() {
  return `
  <div class="data-structures__memory-heap container" id="memory-heap-1">
    ${MEMORY.map(renderBubble).join("")}
  </div>
  `;
}

const SETS_OF_CALLS = [
  [{ content: `sayHello` }, { content: `getFullname` }],
  [{ content: `printMessage` }],
];

function renderCallStack() {
  return `
  <div class="data-structures__call-stack container" id="call-stack-1">
    ${renderBubble({content: `(global)`, visible: (DataStructures.currentCallsSet != 0)})}
    ${SETS_OF_CALLS[DataStructures.currentCallsSet].map(renderBubble).join("")}
  </div>
  `;
}

function render() {
  return `
  <section class="main-section" id="js-data-structures">
    <div class="data-structures">
      <div class="data-structures__interactive">
        <div class="container--explanation">
          ${renderCard(
            "Memory heap",
            "Almacena los valores de las variables y las funciones. Los valores no se guardan de forma ordenada"
          )}
          ${renderMemoryHeap()}
        </div>
        <div class="container--explanation">
          ${renderCard("call stack", "click on the image to run the code")}
          ${renderCallStack()}
        </div>
        </div>
      <div class="container--explanation">
        ${renderCard("code", "click on the image to run the code")}
        <div class="container data-structures__code" id="jon-snow" tabindex="0">
          <img src="/assets/images/jon-snow.png" alt="code snippet">
          <div class="code__log">
            <p class="content--sm code__line vanish">Hello I'm JonSnow</p>
            ${renderArrow("code__arrow")}
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}

function unvanish(element) {
  element.classList.remove("vanish")
}

function listenCode() {
  const code = document.querySelector("#jon-snow");
  code.addEventListener("click", (event) => {
    if (DataStructures.currentTarget == "heap") {
      const heap = document.querySelector("#memory-heap-1");
      const vanished = [...heap.querySelectorAll(".vanish")];

      if (vanished.length > 0) {
        vanished.forEach(unvanish);
        return
      }

      const toReplace = heap.querySelector(".replace")
      if (toReplace) {
        toReplace.innerHTML = `"${toReplace.dataset.replace}"`
        toReplace.classList.remove("replace")
        return
      }
      DataStructures.currentTarget = "stack"
    }

    const isStacking = DataStructures.currentTarget == "stack" && DataStructures.currentAction == "unvanish"
    const stack = document.querySelector("#call-stack-1")
    if (isStacking) {
      const vanished = stack.querySelector(".vanish")
  
      if (vanished) {
        vanished.classList.remove("vanish")
        return
      }
      DataStructures.currentAction = "vanish"
    }

    let toVanish = stack.querySelectorAll(".bubble:not(.vanish)")
    const numberOfElements = toVanish.length
    console.log("toVanish")
    
    if (numberOfElements == 1 && DataStructures.currentCallsSet == 0) {
      DataStructures.currentCallsSet++
      stack.outerHTML = renderCallStack()
      DataStructures.currentAction = "unvanish"
      setTimeout(() => {unvanish(document.querySelector(".vanish"))},0)
    }

    toVanish[numberOfElements - 1].classList.add("vanish")
  });
}

const DataStructures = {
  toString() {
    return render();
  },
  addListeners() {
    listenCode();
  },
  currentCallsSet: 0,
  currentAction: "unvanish",
  currentTarget: "heap",
};

export default DataStructures;
