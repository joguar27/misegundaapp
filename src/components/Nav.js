const Nav = (parametro) => {
  if (parametro.isHeader) {
    return (
      <nav className="header__navbar">
        <a className="header__link" href="#">
          Inicio
        </a>
        <a className="header__link" href="#">
          Nosotros
        </a>
        <a className="header__link" href="#">
          Contacto
        </a>
      </nav>
    );
  } else {
    return (
      <nav className="header__navbar">
        <a href="#">facebook</a>
      </nav>
    )
  }
}
export default Nav
