import React from "react"
import './ItemListContainer.css'
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router"
import { useNavigate } from "react-router"


function ItemListContainer() {
    const [productos, setproductos] = useState([])
    const {categoriaNombre} = useParams()
    const {id} = useParams()
    const navigate = useNavigate()

     useEffect(() => {
            if(categoriaNombre){
                 fetch(`https://dummyjson.com/products/category/${categoriaNombre}`)
                    .then(datos_recuperados => datos_recuperados.json())
                    .then(datos_recuperados => setproductos(datos_recuperados.products))
            }else{
                fetch('https://dummyjson.com/products')
                    .then(datos_recuperados => datos_recuperados.json())
                    .then(datos_recuperados => setproductos(datos_recuperados.products))
            }
        }, [categoriaNombre])


    return(
        productos.map(item => <h1 className="itemList" key={item.id}>{item.title}&nbsp;<button onClick={() => navigate(`/item/${item.id}`)}>Ver Mas</button>&nbsp;&nbsp;{item.category}</h1>)
    )
}

export default ItemListContainer