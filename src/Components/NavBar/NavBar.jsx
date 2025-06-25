import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router"
import { useNavigate } from "react-router"
import './NavBar.css'
import carrito_compra from '../../assets/shopping-cart_1121671.png'
import logo_empresa from '../../assets/react.svg'

function Navbar (){
    const [categorias, setcategorias] = useState([])

    const navigate = useNavigate();

    const handleChange = (event) => {
        const selectedCategory = event.target.value;
        if (selectedCategory !== '-') {
            navigate(`/categoria/${selectedCategory}`);
        }
    };

    useEffect(() => {
        const respuesta = fetch('https://dummyjson.com/products/categories')
        respuesta
        .then(datos_recuperados => datos_recuperados.json())
        .then(datos_recuperados => setcategorias(datos_recuperados))
        .catch(err => console.log(err))
    }, [])

    return(
        <>
            <header className="header">
                <nav className="navbar">
                    <img src={logo_empresa} className="logo_empresa" alt="logo_empresa" />
                    <select id="selector_categoria" onChange={handleChange}>
                    <option value="-">Seleccione una Categoria</option>
                    {categorias.map((item) => (
                        <option key={item.slug} value={item.name}>
                        {item.name}
                        </option>
                    ))}
                    </select>
                    <img src={carrito_compra} className="carrito_compras" alt="carrito_compras" />3
                </nav>
            </header>
        </>
       
    )
}

export default Navbar
