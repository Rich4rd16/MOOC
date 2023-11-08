import React from 'react'
import './hero.css'
import Title from '../../common/title/Title'

const Hero = () => {
  return (
    <>
        <section className='hero'>
            <div className="container">
                <div className="row">
                    <Title subtitle='BIENVENIDO A PROWESS MOOC' title='Adriana Diaz es una buena jefa :3'/>
                    <br/>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora mollitia adipisci ullam non blanditiis exercitationem quo. Voluptas obcaecati culpa facilis repellat suscipit reprehenderit voluptate, tempora commodi placeat vel facere rerum.</p>
                <div className="button">
                    <button className='primary-btn'>
                        COMIENZA AHORA <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                    <button >
                        VER CURSOS <i className='fa fa-long-arrow-alt-right'></i>
                    </button>
                </div>
                </div>
            </div>
        </section>
        <div className="margin"></div>
    </>
  )
}

export default Hero