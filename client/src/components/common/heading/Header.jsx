import React, { useState } from 'react'
import { Head } from './Head'
import  './header.css'
import {Link} from "react-router-dom"

const Header = () => {
    const[click, setClick] = useState(false)
    return (
        <>
        {/* El menu */}
            <Head />
            <header>
                <nav className='flexSB'>
                    <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => setClick(false)}>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/courses">Cursos</Link></li>
                        <li><Link to="/about">Sobre Nosotros</Link></li>
                        <li><Link to="/team">Equipo</Link></li>
                        <li><Link to="/pricing">Precios</Link></li>
                        <li><Link to="/journal">Noticia</Link></li>
                        <li><Link to="/contact">Contactanos</Link></li>
                    </ul>
                    <div className="div start">
                        <div className="div button">Obtener Certificado</div>
                    </div>
                    <button className='toggle' onClick={() => setClick(!click)}>
                        {click ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                    </button>
                </nav>
            </header>
        </>
    )
}

export default Header