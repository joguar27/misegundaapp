import Nav from "./Nav";

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2022</p>
      {/* <nav className="header__navbar">
        <a className="header__link" href="#">Inicio</a>
        <a className="header__link" href="#">Nosotros</a>
        <a className="header__link" href="#">Contacto</a>
      </nav> */}
      <Nav textLinkFooter="Facebook" hrefLinkFooter="https://facebook.com/" />
    </footer>
  );
};
export default Footer;
