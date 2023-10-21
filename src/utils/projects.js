import images from "../assets/images";

const projects = [
    {
      id: 1,
      nombre: "E-commerce React",
      descripcion: "Se crean página web tipo tienda virtual de productos electrónicos.",
      tecnologias: ["React", "Redux", "Router"],
      url: "https://ecommercewithreactq.netlify.app/",
      imagen: images.ecommercereact,
    },
    {
      id: 2,
      nombre: "Proyecto E-commerce",
      descripcion: "E-commerce hecha consumiendo la Api del instituto academlo",
      tecnologias: ["HTML", "JavaScript", "CSS"],
      url: "https://bejewelled-buttercream-3faeba.netlify.app/",
      imagen: images.ecommerceVanilla,
    },
    {
      id: 3,
      nombre: "Proyecto Pokedex",
      descripcion: "Se consume API de pokemon para hacer una aplicacion tipo catalogo con todos los pokemons",
      tecnologias: ["React", "Redux", "Router"],
      url: "https://pokedexcristobal.netlify.app/",
      imagen: images.pokedex,
    },
    {
      id: 4,
      nombre: "Proyecto Rick and Morty",
      descripcion: "Se consume Api de Rick and Morty para obtener una lista con los personajes de la serie",
      tecnologias: ["React", "Redux", "Router"],
      url: "https://createrickandmortyapp.netlify.app/",
      imagen: images.rickandMorty,
    },
    {
      id: 5,
      nombre: "Weather App",
      descripcion: "Se crea aplicacion para conocer el estado del tiempo en cualquier parte del mundo",
      tecnologias: ["React", "Redux", "Router"],
      url: "https://openweatherappreactjs.netlify.app/",
      imagen: images.weatherapp,
    },
    {
      id: 6,
      nombre: "Juego tic tac toe",
      descripcion: "Se crea famoso juego tic tac toe, también conocido como la vieja.",
      tecnologias: ["React", "JavaScript", "CSS", "HTML"],
      url: "https://tictactoepractice.netlify.app/",
      imagen: images.tictactoe,
    },
    {
      id: 7,
      nombre: "User Crud",
      descripcion: "Sistema de registro de usuarios con CRUD",
      tecnologias: ["Hook Form", "React", "JavaScript", "CSS", "HTML"],
      url: "https://usersregistercrud.netlify.app/",
      imagen: images.userCrud,
    },
  ];
  
  export default projects;