import React from 'react';
import "../components/styles/portfolio.css";
import projects from '../utils/projects';


const Portfolio = () => {
  return (
    <div className='principal_portfolio'>
      <article className='title_info_pt'>
        <p className='title_portfolio'><span>MI</span> PORTAFOLIO</p>
        <p className='description_portfolio'>Échale un vistazo a mis proyectos más recientes.</p>
      </article>
      <section className='projects_name'>
        {projects.map((project) => (
          <div key={project.id} className='section_project'>
            <p className='info_page1'>{project.nombre}</p>
            <p className='description_project'>{project.descripcion}</p>
            <div className='text_portfolio portfolio1'>
              <a className='t_info' href={project.url}><i className='bx bx-link-external'></i>E-commerce</a>
              <p className='tecnology'>Tecnologias</p>
              <article className='tec_pp'>
                {project.tecnologias.map((tecnologia, index) => (
                  <p key={index} className='tec_info'>{tecnologia}</p>
                ))}
              </article>
            </div>
            <img className='image_portfolio' src={project.imagen} alt="" />
          </div>
        ))}
      </section>
    </div>
  );
}

export default Portfolio;