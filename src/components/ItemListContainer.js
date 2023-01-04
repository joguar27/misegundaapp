import { useState } from 'react'

    const ItemListContainer = (props) => {

    // const miEstado = useState(0)
    // const contador = miEstado[0]
    // const cambiarContador = miEstado[1]

    const [contador, setContador] = useState(0)
    const handleClick = () => {
        setContador(contador + 1)
    }
    return (
        <div>{props.greeting}
            <p>Contador: {contador}</p>
            <button onClick={handleClick} >Sumar</button>
        </div>
    )
}
export default ItemListContainer

