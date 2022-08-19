import React from 'react';
import Style from './Styles/About.module.css';
import Alarma from './img/logo negro.png';
import { AiFillGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';


export default function About() {
    return <div className={Style.container}>
           <div className={Style.card}>
                <section>
                    <p>Mi Nombre es Gonzalo Torres Grau y soy Técnico en Electrónica</p>
                    <p>"The weather App" es mi primer proyecto web en React.</p>
                    <p>Otro de mis Proyectos es "Alarma Geografica" y te invito a conocer su landing page.</p>
                    <a href="https://alarmageografica.com"><img className={Style.ag} src={Alarma} alt='Logo Alarma Geográfica'></img></a>
                    <p>Mi perfil de Linkedin<a href='https://www.linkedin.com/in/%E2%98%85gonzalo-torres-grau-2825b263/'><AiOutlineLinkedin className={Style.ico}/></a></p>
                    <p>Mi perfil de Github<a href='https://github.com/gtorresgrau'><AiFillGithub className={Style.ico}/></a></p>
                </section>   
            </div>
            </div>
};