import React from 'react';
import style from './information.module.css';
import Certificado from '../../components/contacto/contacto';
import Proyectos from '../../components/proyecto/proyectos';
import Informacion from '../../components/informacion/informacion'
import Tecnologias from '../../components/tecnologias/tecnologias';

function Information() {
  return (
    <div className={style.container}>
      <div className={style.text}>
        <h1 className={style.title}>Facundo Santillan</h1>
        <h3 className={style.h3}>FullStack Developer & designer</h3>
      </div>

      <div>
        <Certificado/>
      </div>

      <div className={style.list}>
        <ul>
          <a className={style.a} href="#Informacion"> 
            - About
          </a>
        </ul>
        
        <ul>
          <a className={style.a} href="#Technologies"> 
            - Technologies
          </a>
        </ul>

        <ul>
          <a className={style.a} href="#Projects"> 
            - Projects
          </a>
        </ul>



      </div>
  
      <section className={style.section3} id="Informacion">
        <Informacion/>
      </section> 

      <section className={style.section1} id="Technologies">
        <Tecnologias/>
      </section>

      <section className={style.section} id="Projects">
        <Proyectos/>
      </section>

    </div>
  );
}

export default Information;
