import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import logo from '../Img/logo.png';
import '../Styles/Nav.css';

const Nav = () => {
    return (
        <>
            <div class="cabecera">
                <img class="logo" src={logo} alt={"logo"}></img>

                <nav class="menu">
                    <ul class="menu-lista">
                        <li class="menu-items">
                            <Link class="menu-link" as={Link} to="/ingresarProducto">Gestionar Productos</Link>
                        </li>
                        
                        <li class="menu-items">
                            <Link class="menu-link" as={Link} to="/ventasRealizadas">Ventas</Link>
                        </li>

                        <li class="menu-items">
                            <Link class="menu-link" as={Link} to="/selecionarProductos">Seleccionar productos - Carrito</Link>
                        </li>

                        
                    </ul>
                </nav>
            </div>

            <section>
                <Outlet></Outlet>
            </section>
        </>
    )
}

export default Nav;