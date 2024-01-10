import  { useState, useEffect } from 'react';
import images from '../assets/images';
import "../components/styles/home.css";
import { Link } from 'react-router-dom';




const typeWriterEffect = (text, setDisplayText) => {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      setDisplayText((prevDisplayText) => prevDisplayText + text[index]);
      index++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        setDisplayText('');
        index = 0;
        typeWriterEffect(text, setDisplayText);
      }, 5000);
    }
  }, 120);

  return () => {
    clearInterval(interval);
  };
};


const Home = () => {
  const text = 'Cristobal Quilimaco';
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const cleanup = typeWriterEffect(text, setDisplayText);
    return cleanup;
  }, []);

  return (
    <div className='principal_home'>

    <div className='banner_principal'>
        <div className="neon-bar"></div>
        <div className="neon-bar"></div>
        <div className="neon-bar"></div>
        <img className="banner" src={images.banner} alt="" />
      </div>
      <div className='article'>
        <div className='information'>
          {displayText === text ? (
            <h1 className='my_name'>{displayText}</h1>
          ) : (
            <h1 className='my_name'>{text.slice(0, displayText.length)}</h1>
          )}
          <h2 className='developertext'>Desarrollador Web FullStack</h2>
          <p className='description'>
            Apasionado del desarrollo frontend, con 29 años de edad, convirtiendo ideas en experiencias digitales impactantes. Busco llevar la usabilidad y la innovación al siguiente nivel. ¡Listo para enfrentar nuevos desafíos juntos! 💻🚀 #FrontendDev
          </p>
          <div className='btn_principal btn-information'>
            <Link to="/aboutme"><button className='btn btn_home2'>More about me</button></Link>
            <Link to="/portfolio"><button className='btn btn_home1'>Portfolio</button></Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Home;