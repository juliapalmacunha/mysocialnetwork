import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <nav className={styles.navbar} >
            <NavLink to="/" className={styles.nome_blog} >
                Social <span>network</span>
            </NavLink>

            <ul className={styles.lista_de_links} >
                <li>
                    <NavLink to="/" className={({isActive}) => (isActive ? styles.active: "")} >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => (isActive ? styles.active: "")} >
                        Sobre
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={({isActive}) => (isActive ? styles.active: "")} >
                        Entrar
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/register" className={({isActive}) => (isActive ? styles.active: "")} >
                        Cadastrar
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar