import React from 'react'
import './home.css'
export default function Home() {
  return (
    <>
        <section id='home'>
            <div className='ohome_container'>
              <div className='container_img'>
                <img src={require('../../images/as.jpg')} alt=""/>
                </div>

              <div className='ohome_subcontainer'>
                <h1>Vineet Shah</h1>
                <h2>Web Developer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                liquam facere odit ipsam minima praesentium, reprehenderit ea.</p>
              </div>

            </div>
        </section>
    </>
  )
}
