//import { Button } from "react-bootstrap"
import ItemListContainer from "./ItemListContainer";
import Card from "./Card";
const Main = () => {
  return (
    <main>
      <h2>JOGUAR RENT A CAR</h2>
      <ItemListContainer greeting="Bienvenido a Joguar Rent a Car" />
      <img src="https://picsum.photos/200/300" alt="foto" />
      {/* <button className="btn btn-primary">Ver más opciones</button> */}
      {/* <Button>Ver más de react-bootstrap</Button>  */}
      {/* <img src="/logo192.png" alt="logo"/> */}
      <Card />
      <Card />
      <Card />
    </main>
  );
};
export default Main;
