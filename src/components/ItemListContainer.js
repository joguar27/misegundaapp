import { useEffect, useState } from "react";

const ItemListContainer = (props) => { //reagregar (props) para que funcione






  //prueba de api
// const [load, setLoad] = useState([false]);
// const [productos, setProductos] = useState([]) 
// useEffect(() => {
//     const pedido = fetch("https://fakestoreapi.com/products")
//     .then((respuesta) => {
//      const productos = respuesta.json()
//      return productos
//     })
//     .then((productos) => {
//       //console.log(productos)
//        setProductos(productos)
//        setLoad(true)  
//     })
//     .catch((error) => {
//      console.log(error)
//     })
//     //.finally(() => setLoad(true))
// },[])
// return (
//     <div>
//         {load ? "Productos Cargados" : "Cargando..."}
//         {productos.map((producto)=>{
//             return(
//                  <article>
//                      <h3>{producto.title}</h3>
//                  </article>  
//              )
//         })}
//     </div>
// )










  //const miEstado = useState(0);
  //const contador = miEstado[0];
  //const cambiarContador = miEstado[1];
  //const [counter, setCounter] = useState(0);
  //const [minPrice, setMinPrice] = useState(1000);
  //const [open, setOpen] = useState(false);
  //const [loadMore, setLoadMore] = useState(false);
  //const [searchText, setSearchText] = useState("");
  //const [productos,setProductos] = useState([]);

  //useEffect(()=>{
  //  console.log("useEffect")
  //})
//descomentar lineas 45/46/47/48
  const [cargo, setCargo] = useState(false);
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  useEffect(() => {
    console.log("Pido algo a la BBDD");

    setTimeout(() => {
      console.log("Termino de pedir algo a la BBDD");

      const ejemploProductos = [
        { id: 1, nombre: "Televisor", precio: 100, categoria: "electronico" },
        { id: 2, nombre: "Pantalon", precio: 200, categoria: "ropa" },
        { id: 3, nombre: "Mouse", precio: 300, categoria: "electronico" },
      ];

      // ejemploProductos.forEach((producto)=>{
      //   productos.push(producto)
      // })

      setCargo(true);
      setProductos(ejemploProductos);
      setProductosFiltrados(ejemploProductos);
    }, 2000);
  }, []);
//descomentar lineas 66/67/68
//const arr = [1,2,3]


//create a function that filters the products using the price
//const pf = [...productos]


//crear una funcion que filtre los productos usando el precio, el nombre y la categoria 
// const handleChangeName = (e) => {
//   const copia = productos.filter(producto=>{
//     return producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())
//   })
//   setProductosFiltrados(copia)
// }

// const handleChangePrice = (e) => {
//   const copia = productos.filter(producto=>{
//     return producto.precio > e.target.value
//   })
//   setProductosFiltrados(copia)
// }

// const handleChangeCategory = (e) => {
//   const copia = productos.filter(producto=>{
//     return producto.categoria === e.target.value
//   })
//   setProductosFiltrados(copia) 
// }


//crear una funcion que filtre los productos usando el precio, el nombre y la categoria
//de manera resumida:
const handleFilter= (e) => {
  console.log(e.target.dataset.filter)
  const copia = productos.filter(producto=>{
    if (e.target.dataset.filter === "nombre"){
      return producto.nombre.toLowerCase().includes(e.target.value.toLowerCase())
    }
    if (e.target.dataset.filter === "precio"){
      return producto.precio > e.target.value
    }
    else {
      return producto.categoria === e.target.value
    }
  })
  setProductosFiltrados(copia)
}

  return (
    <section>
      {!cargo ? "Cargando..." : "Terminó de cargar!!!"}
      {/* {cargo ? "Terminó de cargar!!!" : "Cargando..."} */}
      <nav>
        <input data-filter="nombre" onChange={handleFilter} type="text" placeholder="Nombre del producto" />
        <input data-filter="precio" onChange={handleFilter} type="number" placeholder="Mayor a" />
        <select data-filter="categoria" onChange={handleFilter}>
          <option value="todos">Todos</option>
          <option value="electronico">Electrónico</option>
          <option value="ropa">Ropa</option>
        </select>
      </nav>
      {productosFiltrados.map(producto => (
        <article>
          <h2>{producto.nombre}</h2>
          <p>${producto.precio}</p>
          <p>{producto.categoria}</p>
        </article>
      ))}

      {/* {productos.map(function(producto){
        return<></>
      })
      } */}
    </section>
  );

  // const [contador, setContador] = useState(0);
  //   const handleClick = () => {
  //     console.log(counter)
  //     setCounter(counter + 1);
  //   };

  //   const handleOnChange = (e) => {
  //     console.log(e.target.value);
  //     setSearchText(e.target.value);
  //   }

  //   const handleToggleDrawer = () => {
  //        setOpen(!open);
  // }

  //   return (
  //     <div>
  //       {props.greeting}
  //       <p>Contador: {counter}</p>
  //       <p>Texto a buscar: {searchText}</p>
  //       <p>Drawer Open: {open ? "Abierto" : "Cerrado"}</p>
  //       <button onClick={handleClick}>Sumar</button>
  //       <button onClick={handleToggleDrawer} >toggle drawer</button>
  //       <input onChange={handleOnChange} type="text" />
  //     </div>
  //   );
};
//descomentar linea 172
export default ItemListContainer;
