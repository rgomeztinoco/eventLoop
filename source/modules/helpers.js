export function renderBubble(
  options = { content, toReplace: null, visible: false, data: [] }
) {
  const dataset = options.data
    ? options.data.map((el) => `data-${el}`).join(" ")
    : "";
  return `
  <article
    class="bubble ${options.visible ? "" : "vanish"}"
    ${dataset}
  >
    <p class="content--xs bubble__text">
      ${options.content}
      ${
        options.toReplace
          ? `
          <span class="replace" data-replace=${options.toReplace}>
            (uninitialized)
          </span>`
          : ""
      }
    </p>
  </article>
  `;
}

export function renderCard(title, content) {
  return `
  <div class="card">
    <h2 class="title title--sm">${title}</h2>
    <p class="content--sm">${content}</p>
  </div>
  `;
}

export function renderCallStack() {
  return `
  <div class="call-stack container" id="call-stack-${this.pageId}">
    ${this.SETS_OF_CALLS[this.currentCallsSet].map(renderBubble).join("")}
  </div>
  `;
}

export function renderQueue(name, set) {
  return `
  <div class="queue container" id="${name}-${this.pageId}">
    ${set.map(renderBubble).join("")}
  </div>
  `;
}

export function wrapInSectionContainer(page) {
  return `
  <section class="main-section" id="js-page-${page.pageId}">
    <div class="section-container">
      ${page}
    </div>
  </section>
  `;
}
