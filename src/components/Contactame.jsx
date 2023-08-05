import React from 'react'
import "../components/styles/contactame.css"


const Contactame = () => {
  return (
    <>
        <div className='principal_contact'>
                    <div className='title_subtitle'>
            <h1 className='about__ttt'>CONTACTA<span className='color_tt'>ME</span></h1>
 <h2 className='subtitle'>Aqui te dejo mis medios de contacto para que hablemos</h2>
            </div>
            <section className='contacme_with_form'>
      
                <ul className='info_contact_icon'>
  <li><i className='bx bxl-whatsapp'></i><p>Whatsapp</p></li>
  <li><i className='bx bx-envelope' ></i><p>Gmail</p></li>
  <li><i className='bx bxl-instagram' ></i><p>Instagram</p></li>
  <li><i className='bx bx-world' ></i><p>Netlify</p></li>
  <li><i class='bx bxl-linkedin' ></i><p>Linkedin</p></li>
  <li><i class='bx bxl-github'></i><p>GitHub</p></li>
                </ul>
                <form className='form_contact' action="">
                <ul className='list_form'>
    <li className='form_class'>
      <label className='text' for="name">Nombre:</label>
      <input className='space' type="text" id="name" name="user_name" />
    </li>
    <li className='form_class'>
      <label className='text' for="mail">Correo electrónico:</label>
      <input className='space' type="email" id="mail" name="user_mail" />
    </li>
    <li className='form_class'>
      <label className='text' for="msg">Mensaje:</label>
      <input className='space space_text' type="text" id="msg" name="text_area" />
     
    </li>
    
  </ul>
  <button className='btn_download'><i className='bx bx-mail-send' ></i></button>
                </form>
            </section>

    </div>
    </>

  )
}

export default Contactame