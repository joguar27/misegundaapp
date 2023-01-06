import { useState } from "react";

const ItemListContainer = (props) => {
  // const miEstado = useState(0)
  // const contador = miEstado[0]
  // const cambiarContador = miEstado[1]
  const [counter, setCounter] = useState(0);

  const [minPrice,setMinPrice] = useState(1000);
  const [open,setOpen] = useState(false);
  const [loadMore,setLoadMore] = useState(false);
  const [searchText,setSearchText] = useState("");
  // const [contador, setContador] = useState(0);
  const handleClick = () => {
    console.log(counter)
    setCounter(counter + 1);
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
    setSearchText(e.target.value);
  }

  const handleToggleDrawer = () => {
       setOpen(!open);
}  

  return (
    <div>
      {props.greeting}
      <p>Contador: {counter}</p>
      <p>Texto a buscar: {searchText}</p>
      <p>Drawer Open: {open ? "Abierto" : "Cerrado"}</p> 
      <button onClick={handleClick}>Sumar</button>
      <button onClick={handleToggleDrawer} >toggle drawer</button>
      <input onChange={handleOnChange} type="text" />
    </div>
  );
};
export default ItemListContainer;
