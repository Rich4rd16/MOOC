import React from 'react';
import imagenes from '../../imagenes/imagenes';

export const Head = () => {
    return (
        <>  
        {/* Lo que se encuentra arriba del menu */}
            <section className='head'>
                <div className="container flexSB">
                    <div className="logo">
                        <div className="logo-content">
                            <img src={imagenes.img1} alt="" className="logo-image" />
                            <h1>PROWESS MOOC</h1>
                        </div>
                        <span>EDUCACION EN LINEA</span>
                    </div>

                    <div className="social">
                        <i className='fab fa-facebook-f icon'></i>
                        <i className='fab fa-instagram icon'></i>
                        <i className='fab fa-twitter icon'></i>
                        <i className='fab fa-youtube icon'></i>
                    </div>
                </div>
            </section>
        </>
    );
};
