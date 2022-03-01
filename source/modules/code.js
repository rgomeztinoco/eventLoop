import renderArrow from "../svg/arrow.js";
import renderLongArrow from "../svg/long-arrow.js";
import { renderCallStack } from "./helpers.js";

function renderCodeLine(content) {
  return `
  <p class="content--sm code__line vanish">${content}</p>
  `;
}

function render() {
  return `
  <div class="code" id="${this.CODE_NAME}" tabindex="0">
    <div class="code__container container">
      <img src="assets/images/${this.CODE_NAME}.png" alt="code snippet">
      <div class="code__log">
        ${this.CODE_LINES.map((line) => renderCodeLine(line)).join("")}
        ${renderArrow("code__arrow")}
      </div>
    </div>
    ${renderLongArrow("code__long-arrow")}
  </div>
  `;
}

function unvanish(element) {
  element.classList.remove("vanish");
}

function selectStack(pageId) {
  return document.querySelector(`#call-stack-${pageId}`);
}

function listen() {
  const code = document.querySelector(`#${this.CODE_NAME}`);
  code.addEventListener("click", (event) => {
    const arrow = code.querySelector(".code__long-arrow");
    const arrowPosition = this.arrowPosition.shift();
    arrow.style = `top: ${arrowPosition}rem;`;
    if (arrowPosition == 0) arrow.classList.toggle("vanish");
    const stack = selectStack(this.pageId);

    if (this.currentTarget == "heap") {
      const heap = document.querySelector(`#memory-heap-${this.pageId}`);
      const vanished = [...heap.querySelectorAll(".vanish")];

      if (vanished.length > 0) {
        unvanish(stack.querySelector(".vanish"));
        vanished.forEach(unvanish);
        return;
      }

      const toReplace = heap.querySelector("[data-replace]");
      if (toReplace) {
        toReplace.innerHTML = `"${toReplace.dataset.replace}"`;
        toReplace.removeAttribute("data-replace");
        toReplace.closest(".bubble").classList.add("replaced");
        return;
      }
      this.currentTarget = "stack";
    }

    console.log(this.currentTarget);
    const queue = document.querySelector(`#task-queue-${this.pageId}`);
    if (this.currentTarget == "api") {
      const api = document.querySelector(`#web-api-${this.pageId}`);
      const apiTask = api.querySelector(".vanish");
      unvanish(apiTask);
      this.currentTarget = "stack";
      if ("showLog" in apiTask.dataset) {
        const log = event.target
          .closest(".code")
          .querySelector(".code__line:is(.vanish)");
        log.classList.remove("vanish");
        setTimeout(() => {
          apiTask.classList.add("vanish");
          setTimeout(() => (apiTask.outerHTML = ""), 1000);
        }, 1000);
        return;
      }
      const time = +apiTask.dataset.time || 1000;
      setTimeout(() => {
        apiTask.classList.add("vanish");
        const queueTask = queue.querySelector(".vanish");
        unvanish(queueTask);
        setTimeout(() => (apiTask.outerHTML = ""), 1000);
      }, time);
      return;
    }

    if (this.currentTarget == "queue") {
      const queueTask = queue.querySelector(".bubble:not(.vanish)");
      if (!queueTask) return;
      this.currentTarget = "stack";
      queueTask.classList.add("vanish");
      setTimeout(() => (queueTask.outerHTML = ""), 1000);
      unvanish(stack.querySelector(".vanish"));
      return;
    }

    const isStacking =
      this.currentTarget == "stack" && this.currentAction == "unvanish";
    if (isStacking) {
      const vanished = stack.querySelector(".vanish");

      if (vanished) {
        if ("currentTarget" in vanished.dataset) {
          this.currentTarget = vanished.dataset.currentTarget;
          vanished.removeAttribute("data-current-target");
        }
        vanished.classList.remove("vanish");
        return;
      }
      this.currentAction = "vanish";
    }

    let toVanish = stack.querySelectorAll(".bubble:not(.vanish)");
    const numberOfElements = toVanish.length;
    const last = toVanish[numberOfElements - 1];

    if (
      numberOfElements == 1 &&
      this.currentCallsSet != this.SETS_OF_CALLS.length - 1
    ) {
      this.currentCallsSet++;
      stack.outerHTML = renderCallStack.call(this);
      this.currentAction = "unvanish";
      if ("lastInStack" in last.dataset) {
        this.currentTarget = "queue";
        return;
      }
      setTimeout(() => {
        unvanish(selectStack(this.pageId).querySelector(".vanish"));
      }, 100);
    }

    if (numberOfElements == 0) return;

    last.classList.add("vanish");
    if ("showLog" in last.dataset) {
      const log = event.target
        .closest(".code")
        .querySelector(".code__line:is(.vanish)");
      log.classList.remove("vanish");
    }
    if ("currentTarget" in last.dataset) {
      this.currentTarget = last.dataset.currentTarget;
      last.removeAttribute("data-current-target");
    }
  });
}

const Code = {
  toString() {
    return render.call(this);
  },
  addListeners() {},
  listen,
};

export default Code;
