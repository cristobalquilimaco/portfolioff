import { useEffect, useState } from 'react'
import images from '../assets/images'
import "../components/styles/aboutMe.css"
import cvdev from "/public/images/CVCristobalQuilimaco.pdf"



const AboutMe = () => {
const [count, setCount] = useState(0)

const [elements, setElements] = useState([
    {id: 1, isVisible: false},
    {id: 2, isVisible: true}
]);

useEffect(() => {
const handleScroll =()=>{
    const yOffset = window.scrollY;
    const threshold = 250;

    setElements((prevElements)=>
    prevElements.map((element) => ({
        ...element,
        isVisible: yOffset > threshold,
    }))
    );
};

window.addEventListener('scroll', handleScroll);
return () => {
    window.removeEventListener('scroll', handleScroll);
};


}, [])


    const openNewWindow = () => {
        window.open(cvdev, '_blank');
    };






    return (
        <>
            <div className='principal_about'>
                <section className='title_about'>
                    <div className='text_info'>
                        <div className='title_subtitle'>
                            <h1 className='about__tt'>SOBRE <span className='color_tt'> MÍ</span></h1>
                            <p className='subtitle'>Soy desarrollador web Full Stack dispuesto a trabajar en equipo, manteniendo una excelente comunicación y ética, trabajando con una gran motivación y dispuesto a adaptarme a los cambios</p>
                        </div>
                        <article className='banner_about'>
                            <div className='img_rocket'>
                                <img className='img_about' src={images.banner} alt="" />
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
                                <p>Idiomas <span>Español-Nativo, Portugues-B2, Ingles-A2</span></p>
                                <p>Email <span>quilimacox1@gmail.com</span></p>
                                <p>Skype <span>quilimacox1</span></p>
                                <button className='btn_download' onClick={openNewWindow}><i className='bx bx-download'></i>Descargar CV</button>
                            </div>
                        </article>
                        <div className='line'></div>
                    </div>
                </section>
                <article className='information_about'>
                    <div className='line_down'></div>
                    <div className={`fade-in fade-in2 experience ${elements[0].isVisible ? 'visible' : ''}`}>
                        <h3 className='experience_text'>EXPERIENCIA</h3>
                        <div className='work_information'>
                            <div className='date'>
                                <i className='bx bx-play'></i>
                                <p className='years_work'>2022- 2023</p>
                            </div>
                            <div className='posts'>
                                <p className='company'>Azteca International</p>
                                <p className='infocompany'>Diseñador Web</p>
                                <p className='infocompany'>Diseño y desarrollo de páginas web utilizando wordpress con elementor, optimizacion de paginas web, manejo del seo de cada página web, manejo de semrush y entrega de reportes de posicionamiento en motores de búsquedas</p>
                            </div>
                            <div className='date'>
                                <i className='bx bx-play'></i>
                                <p className='years_work'>Oct 2024</p>
                            </div>
                            <div className='posts'>
                                <p className='company'>NetcroHosting</p>
                                <p className='infocompany'>Desarrollador Web Freelance</p>
                                <p className='infocompany'>Diseño y desarrollo de páginas web utilizando HTML, CSS y JavaScript, instalación y personalización de WordPress, optimización de sitios web, manejo de SEO y generación de reportes de posicionamiento en motores de búsqueda.</p>
                            </div>
                        </div>
                        <div className='work_information'>
                            <div className='date'>
                                <i className='bx bx-play'></i>
                                <p className='years_work'>Feb 2024- Oct 2024</p>
                            </div>
                            <div className='posts'>
                                <p className='company'>Axa Partners</p>
                                <p className='infocompany'>Asesor de Servicios</p>
                                <p className='infocompany'>En mi rol actual como Agente de Servicios en misión para AXA Colpatria, me dedico a realizar un seguimiento preciso de los requerimientos que los asegurados plantean en el tiempo oportuno y de manera correcta.</p>
                                <article className='container_animation'>
                                    <img className='img_animado' src={images.cohete} alt="" />
                                    <i className='bx bxs-star star_1'></i>
                                    <i className='bx bxs-star star_2'></i>
                                    <i className='bx bxs-star star_3'></i>
                                    <i className='bx bxs-star star_4'></i>
                                </article>
                            </div>
                        </div>
                    </div> 
                    <div className={`fade-in3 fade-in4 exp_tex_info ${elements[0].isVisible ? 'visible' : ''}`}>
                        <h1 className='experience_text'>EDUCACIÓN</h1>
                        <div className='work_information'>
                            <div className='date'>
                                <i className='bx bx-play'></i>
                                <p className='years_work'>Año - 2024</p>
                            </div>
                            
                                <p className='company'>Certificaciones</p>
                                <div className='posts'>
                                <a href="https://certificates.academlo.com/en/verify/27615630700143"><p className='certificate_info'>Desarrollador web Full Stack</p></a>
                                <a href="https://certificates.academlo.com/en/verify/42014531296913"><p className='certificate_info'>Back-End Development with Node.js</p></a>
                                <a href="https://www.linkedin.com/learning/certificates/7f07da90e8060e2fdd7b6be2685ccca9fdaa91cd6de3227a93af625b56105524?trk=share_certificate"><p className='certificate_info'>Python Avanzado 2</p></a>
                                <a href="https://www.linkedin.com/learning/certificates/4c5c4249d3e21050373686eadda31f11a6f182148c85732ea85b4ed7b2e1e19f?trk=share_certificate"><p className='certificate_info'>Python Avanzado</p></a>
                            </div>
                        </div>
                        <div className='work_information'>
                            <div className='date'>
                                <i className='bx bx-play'></i>
                                <p className='years_work'>07 - 2023</p>
                            </div>
                            
                                <p className='company'>Academlo</p>
                                <div className='posts'>
                                <a href="https://certificates.academlo.com/en/verify/27615630700143"><p className='certificate_info'>Desarrollador web Full Stack</p></a>
                                <a href="https://certificates.academlo.com/en/verify/42014531296913"><p className='certificate_info'>Back-End Development with Node.js</p></a>
                                <a href="https://certificates.academlo.com/en/verify/54402045361468"><p className='certificate_info'>Desarrollo de Aplicaciones Web con React</p></a>
                                <a href="https://certificates.academlo.com/en/verify/82888452818670"><p className='certificate_info'>Fundamentos de Desarrollo Web</p></a>
                            </div>
                        </div>
                        <div className='work_information'>
                            <div className='date'>
                                <i className='bx bx-play'></i>
                                <p className='years_work'>05 - 2022</p>
                            </div>
                            
                                <p className='company'>Platzi</p>
                                <div className='posts'>
                                <a href="https://platzi.com/p/quilimacox/curso/2292-terminal/diploma/detalle/"><p className='certificate_info'>Introduccion a la terminal y linea de comandos</p></a>
                                <a href="https://platzi.com/p/quilimacox/curso/2313-portugues-cotidiano/diploma/detalle/"><p className='certificate_info'>Portugués cotidiano</p></a>
                                <p className='certificate_info'>Community Manager</p>
                            </div>
                        </div>
                        <div className='work_information'>
                            <div className='date'>
                                <i className='bx bx-play'></i>
                                <p className='years_work'>03 - 2020</p>
                            </div>
                            
                                <p className='company'>Politecnico de Colombia</p>
                                <div className='posts'>
                                <p className='certificate_info'>Community Management</p>
                            </div>
                        </div>
                    </div>
                </article>
                <section className="skills">
                    <h5>SKILLS</h5>
                    <div className={`fade-in fade-in2 skill--info ${elements[1].isVisible ? 'visible' : ''}`}>
                        <div className='skills_name'>
                            <div className="skill_information">
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