import React, { useState } from 'react';
import "../components/styles/contactame.css";
import ReCAPTCHA from 'react-google-recaptcha';

const Contactame = () => {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    user_name: "",
    user_mail: "",
    text_area: "",
  });

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaValue) {
      // Enviar el formulario a través de Formspree
      axios
        .post("https://formspree.io/f/xdorengv", formData)
        .then((response) => {
          if (response.status === 200) {
            alert("¡Mensaje enviado correctamente!");
            setFormData({
              user_name: "",
              user_mail: "",
              text_area: "",
            });
            setCaptchaValue(null);
          } else {
            alert("Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.");
          }
        })
        .catch((error) => {
          console.error("Error en la petición:", error);
          alert("Hubo un error en la solicitud. Por favor, inténtalo de nuevo más tarde.");
        });
    } else {
      alert("Por favor, completa el captcha antes de enviar el formulario.");
    }
  };

  return (
    <>
      <div className='principal_contact'>
        <div className='title_subtitle'>
          <h1 className='about__ttt'>CONTACTA<span className='color_tt'>ME</span></h1>
          <h2 className='subtitle'>Aqui te dejo mis medios de contacto para que hablemos</h2>
        </div>
        <section className='contacme_with_form'>
          <ul className='info_contact_icon'>
            <a href="https://wa.me/3202039443"><li><i className='bx bxl-whatsapp'></i><p>Whatsapp</p></li></a>
            <a href="mailto:quilimacox1@gmail.com"><li><i className='bx bx-envelope' ></i><p>Gmail</p></li></a>
            <a href="mailto:quilimacox1@gmail.com"><li><i className='bx bxl-instagram' ></i><p>Instagram</p></li></a>
            <a href="https://www.linkedin.com/in/cristobal-quilimaco-119b4324b/"><li><i className='bx bxl-linkedin' ></i><p>Linkedin</p></li></a>
            <a href="https://github.com/cristobalquilimaco"><li><i className='bx bxl-github'></i><p>GitHub</p></li></a>

          </ul>
     <form className="form_contact" onSubmit={handleSubmit} method="post">
      <ul className="list_form">
        <li className="form_class">
          <label className="text" htmlFor="name">
            Nombre:
          </label>
          <input
            className="space"
            type="text"
            id="name"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
          />
        </li>
        <li className="form_class">
          <label className="text" htmlFor="mail">
            Correo electrónico:
          </label>
          <input
            className="space"
            type="email"
            id="mail"
            name="user_mail"
            value={formData.user_mail}
            onChange={handleChange}
          />
        </li>
        <li className="form_class">
          <label className="text" htmlFor="msg">
            Mensaje:
          </label>
          <input
            className="space space_text"
            type="text"
            id="msg"
            name="text_area"
            value={formData.text_area}
            onChange={handleChange}
          />
        </li>
        <li className="form_class">
          <ReCAPTCHA sitekey="6LeS-4knAAAAAOOPnamrSwwi5jHyz6l5LdbEkubj" onChange={handleCaptchaChange} />
        </li>
      </ul>
      <button className="btn_download" type="submit">
        <i className="bx bx-mail-send"></i>
      </button>
    </form>
        </section>
      </div>
    </>
  );
}

export default Contactame;