import Nav from "./Nav";

const isHeader = true;

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">JOGUAR</h1>
      <Nav isHeader={isHeader}/>
    </header>
  )
}

export default Header