import React from "react"
import './NavBar.css'
import carrito_compra from '../../assets/shopping-cart_1121671.png'
import logo_empresa from '../../assets/react.svg'


const Navbar = () => {
    return(
        <header className="header">
            <a href="/" className="logo"><img src={logo_empresa} className="logo_empresa" alt="logo_empresa" /></a>
            
            <nav className="navbar">
                <a href="/">Productos</a>
                <a href="/"><img src={carrito_compra} className="carrito_compras" alt="carrito_compras" /></a>
            </nav>
        
        </header>
    )
}

export default Navbar
