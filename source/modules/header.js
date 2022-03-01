const template = `
<header class="header">
  <nav class="header__nav">
    <ul class="header__list content--xs link">
      <li><a href="#js-page-1">¿Qué es el Event Loop?</a></li>
      <li><a href="#js-page-2">Estructuras de Datos</a></li>
      <li><a href="#js-page-3">Tasks Queue</a></li>
      <li><a href="#js-page-4">Quiz</a></li>
    </ul>
  </nav>
</header>
`

const Header = {
  toString() {
    return template
  },
  addListeners() {

  }
}

export default Header