export default function renderLongArrow(className = null) {
  return `
  <svg
    width="24"
    height="24"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ${className ? `class="${className} vanish"` : ""}
  >
    <path
      d="M6 12H18.5M18.5 12L12.5 6M18.5 12L12.5 18"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  `
}
