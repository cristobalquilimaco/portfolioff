import React from 'react'
import "../components/styles/portfolio.css"
import images from '../assets/images'

const Portfolio = () => {
  return (
    <div className='principal_portfolio'>
      <article className='title_info_pt'>
        <p className='title_portfolio'><span>MI</span> PORTAFOLIO</p>
        <p className='description_portfolio'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      </article>
      <section className='projects_name'>
        <img className='image_portfolio' src={images.ecommerceVanilla} alt="" />
        <img className='image_portfolio' src={images.pokedex} alt="" />
        <img className='image_portfolio' src={images.rickandMorty} alt="" />
        <img className='image_portfolio' src={images.weatherapp} alt="" />
      </section>

    </div>
  )
}

export default Portfolio