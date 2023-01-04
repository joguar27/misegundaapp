import Footer from "./Footer"
import Header from "./Header"
import ItemListContainer from "./ItemListContainer"
import Main from "./Main"

const App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <ItemListContainer greeting="Bienvenido a Joguar Rent a Car"/>
      <Footer/>
    </>
  )
}
export default App;
