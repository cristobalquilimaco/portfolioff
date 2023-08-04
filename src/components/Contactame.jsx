import React from 'react'
import "../components/styles/contactame.css"


const Contactame = () => {
  return (
    <div className='principal_contact'>
                    <div className='title_subtitle'>
            <h1 className='about__ttt'>CONTACTA<span className='color_tt'>ME</span></h1>
 <h2 className='subtitle'>Aqui te dejo mis medios de contacto para que hablemos</h2>
            </div>
            <section className='contacme_with_form'>
      
                <ul>
  <li><i className='bx bxl-whatsapp'></i>Este es mi whatsapp</li>
  <li><i className='bx bx-envelope' ></i>Este es Correo</li>
  <li><i className='bx bxl-instagram' ></i>Este es mi instagram</li>
  <li><i className='bx bx-world' ></i>Este es netlify</li>
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
      <textarea className='space' id="msg" name="user_message"></textarea>
    </li>
    <button className='btn_download'><i className='bx bx-mail-send' ></i></button>
  </ul>
                </form>
            </section>

    </div>
  )
}

export default Contactame