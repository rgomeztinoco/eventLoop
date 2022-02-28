export function renderBubble(options = { content, toReplace: null, visible: false }) {
  return `
  <article class="bubble ${options.visible ? "" : "vanish"}">
    <p class="content--xs bubble__text">
      ${options.content}
      ${options.toReplace
        ? `
          <span 
            class="replace"
            ${options.toReplace
              ? `data-replace=${options.toReplace}`
              : ""
            }
          >
            undefined
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
