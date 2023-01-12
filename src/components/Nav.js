const Nav = (props) => {
  const { isHeader, hrefLinkFooter, textLinkFooter } = props;
  if (isHeader) {
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
        <span className="counter-cart">100</span>
        <span className="material-icons">shopping_cart</span>
      </nav>
    );
  } else {
    return (
      <nav className="header__navbar">
        <a href={props.hrefLinkFooter}>{props.textLinkFooter}</a>
      </nav>
    );
  }
};
export default Nav;




