const template = `
<header class="header">
  <nav class="header__nav">
    <ul class="header__list content--xs link">
      <li><a href="#js-event-loop">¿Qué es el Event Loop?</a></li>
      <li><a href="#js-data-structures">Estructuras de Datos</a></li>
      <li><a href="#">Tasks Queue</a></li>
      <li><a href="#">Promesas</a></li>
      <li><a href="#">Quiz</a></li>
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