import React from "react"
import './ItemListContainer.css'
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"

function ItemDetailContanier() {
    const [producto, setproducto] = useState([])
    const {id} = useParams()

     useEffect(() => {
            fetch(`https://dummyjson.com/products/${id}`)
            .then(datos_recuperados => datos_recuperados.json())
            .then(datos_recuperados => setproducto(datos_recuperados))
        }, [id])


    return(
        <div>
        <h1 className="itemList" key={producto.id}>{producto.title}&nbsp;&nbsp;{producto.category}</h1>
        <img src={producto.thumbnail}/>
        </div>
    )
}

export default ItemDetailContanier