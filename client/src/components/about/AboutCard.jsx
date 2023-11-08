import React from 'react'
import {homeAbout} from '../../dummydata'
import imagenes from '../imagenes/imagenes'
import Title from '../common/title/Title'
import "./about.css"

const AboutCard = () => {
    return (
        <>
            <section className='aboutHome'>
                <div className="container flexSB">
                    <div className="left row">
                    <img src={imagenes.img2} alt="" />
                    </div>

                    <div className="right row">
                        <Title title='Beneficios de la experiencia en aprendizaje en línea'/>
                        <div className="items">
                            {homeAbout.map((val) => (
                                <div className="item flexSB">

                                    <div className="img">
                                    <img src={val.cover} alt="" />
                                    </div>

                                    <div className="text">
                                        <h2>{val.title}</h2>
                                        <p>{val.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutCard
