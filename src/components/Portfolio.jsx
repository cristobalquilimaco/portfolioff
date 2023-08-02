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
      <div className='section_project'>
  <div className='text_portfolio portfolio1'>
  <a className='t_info' href="">Pokedex</a>
  <p className='tecnology'>Tecnologias</p>

  <article className='tec_pp'>
  <p className='tec_info'>React</p>
  <p className='tec_info'>Redux</p>
  <p className='tec_info'>Router</p>
  </article>
  </div>
<img className='image_portfolio' src={images.ecommerceVanilla} alt="" />
</div>
        
<div className='section_project'>
  <div className='text_portfolio portfolio1'>
  <a className='t_info' href="">Pokedex</a>
  <p className='tecnology'>Tecnologias</p>

  <article className='tec_pp'>
  <p className='tec_info'>React</p>
  <p className='tec_info'>Redux</p>
  <p className='tec_info'>Router</p>
  </article>
  </div>
<img className='image_portfolio' src={images.pokedex} alt="" />
</div>
<div className='section_project'>
  <div className='text_portfolio portfolio1'>
  <a className='t_info' href="">Rick And Morty</a>
  <p className='tecnology'>Tecnologias</p>

  <article className='tec_pp'>
  <p className='tec_info'>React</p>
  <p className='tec_info'>Redux</p>
  <p className='tec_info'>Router</p>
  </article>
  </div>
<img className='image_portfolio' src={images.rickandMorty} alt="" />
</div>
<div className='section_project'>
  <div className='text_portfolio portfolio1'>
  <a className='t_info' href="">Pokedex</a>
  <p className='tecnology'>Tecnologias</p>

  <article className='tec_pp'>
  <p className='tec_info'>React</p>
  <p className='tec_info'>Redux</p>
  <p className='tec_info'>Router</p>
  </article>
  </div>
<img className='image_portfolio' src={images.weatherapp} alt="" />
</div>
        
      </section>

    </div>
  )
}

export default Portfolio