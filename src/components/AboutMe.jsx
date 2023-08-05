import React from 'react'
import images from '../assets/images'
import "../components/styles/aboutMe.css"


const AboutMe = () => {
  return (
    <>
    
      <div className='principal_about'>

    <section className='title_about'>
        <div className='text_info'>
            <div className='title_subtitle'>
            <h1 className='about__tt'>ABOUT <span className='color_tt'>ME</span></h1>
 <h2 className='subtitle'>Soy desarrolador web Full Stack dispuesto a trabajar en equipo manteniendo una excelente comunicación y etica, trabajando con una gran motivación y dispuesto a adaptarme a los cambios</h2>
            </div>
            <article className='banner_about'>
            <div>
    <img src={images.banner} alt="" />
            <i className='bx bx-rocket' ></i>
            <i className='bx bx-rocket' ></i>
            <i className='bx bx-rocket' ></i>
    </div>
    
    <div className='information__me'>
<p>Nombre <span>Cristobal</span></p>
<p>Apellido <span>Quilimaco</span></p>
<p>Fecha de Nacimiento  <span>14 de Junio 1994</span></p>
<p>Nacionalidad <span>Venezolano</span></p>
<p>Residenicia <span>Bogota Colombia</span></p>
<p>Idiomas <span>Español - Nativo, Portugues B2, Ingles - A2</span></p>
<p>Telefono <span>+571234567</span></p>
<p>Email <span>quilimacox1@gmail.com</span></p>
<p>Skype <span>quilimacox1</span></p>
<button className='btn_download'><i className='bx bx-download'></i>Descargar CV</button>
 </div>
            </article>
            <div className='line'></div>

        </div>
    

    </section>
    
     <article className='information_about'>
        <div className='line_down'></div>
     
        <div className='experience'>
        <h3 className='experience_text'>EXPERIENCIA</h3>
        <div className='work_information'>
            <div className='date'>
            <i className='bx bx-play'></i>
        <p className='years_work'>2022- 2023</p>
            </div>
        <div className='posts'>
        <p className='company'>Trendix</p>
        <p className='infocompany'>Operador de procesos publicitarios</p>
        <p className='infocompany'>Procesos de fabricación de artículos publicitarios destinados a la exhibicion y promoción de marcas y productos</p>
        </div>

        </div>
        <div className='work_information'>
            <div className='date'>
            <i className='bx bx-play'></i>
        <p className='years_work'>2022- 2022</p>
            </div>
        <div className='posts'>
        <p className='company'>Almacontact</p>
        <p className='infocompany'>Ejecutivo de atencion al cliente</p>
            <p className='infocompany'>Atención al cliente y ventas de productos y servicios de telefonía fija, movil e internet de comcel colombia</p>
        </div>

        </div>
       
        </div>
        <div className='
        '>
            <h1 className='experience_text'>EDUCACIÓN</h1>
            <div className='work_information'>
            <div className='date'>
            <i className='bx bx-play'></i>
        <p className='years_work'>2023- 2023</p>
            </div>
        <div className='posts'>
        <p className='company'>Academlo</p>
            <p>Desarrollador web Full Stack</p>
        </div>

        </div>
        <div className='work_information'>
            <div className='date'>
            <i className='bx bx-play'></i>
        <p className='years_work'>2022- 2022</p>
            </div>
        <div className='posts'>
        <p className='company'>Platzi</p>
            <p>Community Manager</p>
        </div>

        </div>
        <div className='work_information'>
            <div className='date'>
            <i className='bx bx-play'></i>
        <p className='years_work'>2022- 2022</p>
            </div>
        <div className='posts'>
        <p className='company'>Platzi</p>
            <p>Introduccion a la terminal y linea de comandos</p>
        </div>

        </div>
        <div className='work_information'>
            <div className='date'>
            <i className='bx bx-play'></i>
        <p className='years_work'>2022- 2022</p>
            </div>
        <div className='posts'>
        <p className='company'>Platzi</p>
            <p>Portugués cotidiano</p>
        </div>

        </div>
        <div className='work_information'>
            <div className='date'>
            <i className='bx bx-play'></i>
        <p className='years_work'>2020- 2020</p>
            </div>
        <div className='posts'>
        <p className='company'>Politecnico de Colombia</p>
            <p>Community Management</p>
        </div>

        </div>
        </div>
     </article>
     <section className='skills'>
        <h5>SKILLS</h5>
        <div className='skills--info'>
        <div className='skills_name'>
        <div className='skill_information'>
            <p className='lg html'>HTML</p>
            <i className='bx bx2 bxl-html5' ></i>
        </div>
        <div className='skill_information'>
            <p className='lg javascript'>JAVASCRIPT</p>
            <i className='bx bxl-javascript' ></i>
        </div>
        <div className='skill_information'>
            <p className='lg css'>CSS</p>
            <i className='bx bxl-css3'></i>
        </div>
        <div className='skill_information'>
            <p className='lg react'>REACT</p>
            <i className='bx bxl-react' ></i>
        </div>
        <div className='skill_information'>
            <p className='lg github_logo'>GITHUB</p>
            <i className='bx bxl-github' ></i>
        </div>
        <div className='skill_information'>
            <p className='lg wordpress_logo'>WORDPRESS</p>
            <i className='bx bxl-wordpress' ></i>
        </div>
        <div className='skill_information'>
            <p className='lg illustrator_logo'>ILLUSTRATOR</p>
            <i className='bx bxs-pen'></i>
        </div>
        <div className='skill_information'>
            <p className='lg photoshop'>PHOTOSHOP</p>
            <i className='bx bxs-photo-album' ></i>
        </div>
        </div>
        </div>
 

     </section>

    </div>
    </>

  )
}

export default AboutMe