const Nav = (props) => {
  if (props.isHeader) {
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
        <a href={props.hrefLinkFooter}>{props.textLinkFooter}</a>
      </nav>
    )
  }
}
export default Nav
