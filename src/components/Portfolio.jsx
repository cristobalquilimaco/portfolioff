import React from 'react'
import "../components/styles/portfolio.css"
import images from '../assets/images'

const Portfolio = () => {
  return (
    <div className='principal_portfolio'>
      <article className='title_info_pt'>
        <p className='title_portfolio'><span>MI</span> PORTAFOLIO</p>
        <p className='description_portfolio'>Échale un vistazo a mis proyectos más recientes.</p>
      </article>
      <section className='projects_name'>

      <div className='section_project'>
          <p className='info_page1'>E-commerce React</p>
          <p className='description_project'>Se crean página web tipo tienda virtual de productos electrónicos.</p>
          <div className='text_portfolio portfolio1'>
            <a className='t_info' href="https://ecommercewithreactq.netlify.app/"><i className='bx bx-link-external'></i>E-commerce</a>
            <p className='tecnology'>Tecnologias</p>
            <article className='tec_pp'>
              <p className='tec_info'>React</p>
              <p className='tec_info'>Redux</p>
              <p className='tec_info'>Router</p>
            </article>
          </div>
          <img className='image_portfolio' src={images.ecommercereact} alt="" />
        </div>

        <div className='section_project'>
          <p className='info_page1'>Proyecto E-commerce</p>
          <p className='description_project'>E-commerce hecha consumiendo la Api del instituto academlo</p>
          <div className='text_portfolio portfolio1'>
            <a className='t_info' href="https://bejewelled-buttercream-3faeba.netlify.app/"><i className='bx bx-link-external'></i>E-commerce</a>
            <p className='tecnology'>Tecnologias</p>
            <article className='tec_pp'>
              <p className='tec_info'>html</p>
              <p className='tec_info'>javaScript</p>
              <p className='tec_info'>css</p>
            </article>
          </div>
          <img className='image_portfolio' src={images.ecommerceVanilla} alt="" />
        </div>
        <div className='section_project'>
          <p className='info_page1'>Proyecto Pokedex</p>
          <p className='description_project'>Se consume API de pokemon para hacer una aplicacion tipo catalogo con todos los pokemons</p>
          <div className='text_portfolio portfolio1'>
            <a className='t_info' href="https://pokedexcristobal.netlify.app/"> <i className='bx bx-link-external'></i>Pokedex</a>
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
          <p className='info_page1'>Proyecto Rick and Morty</p>
          <p className='description_project'>Se consume Api de Rick and Morty para obtener una lista con los personajes de la serie</p>
          <div className='text_portfolio portfolio1'>
            <a className='t_info' href="https://createrickandmortyapp.netlify.app/"><i className='bx bx-link-external'></i>Rick And Morty</a>
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
          <p className='info_page1'>Aplicacion del tiempo</p>
          <p className='description_project'>Se crea aplicacion para conocer el estado del tiempoen cualquier parte del mundo</p>
          <div className='text_portfolio portfolio1'>
            <a className='t_info' href="https://openweatherappreactjs.netlify.app/"><i className='bx bx-link-external'></i>Weather App</a>
            <p className='tecnology'>Tecnologias</p>
            <article className='tec_pp'>
              <p className='tec_info'>React</p>
              <p className='tec_info'>Redux</p>
              <p className='tec_info'>Router</p>
            </article>
          </div>
          <img className='image_portfolio' src={images.weatherapp} alt="" />
        </div>
        <div className='section_project'>
          <p className='info_page1'>Juego tic tac toe</p>
          <p className='description_project'>Se crea famoso juego tic tac toe, también conocido como la vieja.</p>
          <div className='text_portfolio portfolio1'>
            <a className='t_info' href="https://tictactoepractice.netlify.app/"><i className='bx bx-link-external'></i>Tic Tac Toe</a>
            <p className='tecnology'>Tecnologias</p>
            <article className='tec_pp'>
              <p className='tec_info'>React</p>
              <p className='tec_info'>JavaScript</p>
              <p className='tec_info'>CSS</p>
              <p className='tec_info'>HTML</p>
            </article>
          </div>
          <img className='image_portfolio' src={images.tictactoe} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Portfolio