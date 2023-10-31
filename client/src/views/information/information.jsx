import { useState, useEffect } from 'react';

import style from './information.module.css';

import Contacto from '../../components/contacto/contacto'
import Informacion from '../../components/informacion/informacion'
import Proyectos from '../../components/proyecto/proyectos'
import Redes from '../../components/redes/redes'
import Tecnologias from '../../components/tecnologias/tecnologias';

function Information() {
    return (
      <div className={style.container}>

        <div className={style.tec}>
          
        </div>

        <div className={style.text}>
        <h1 className={style.title}>Facundo Santillan</h1>
        <h3 className={style.h3}>FullStack Developer & designer</h3>
        </div>

    <div className={style.list}>
        <ul>
            <a className={style.a} href="#Home"> 
               - Home
            </a>
        </ul>

        <ul>
            <a className={style.a} href="#Projects"> 
            - Projects
            </a>
        </ul>

        <ul>
            <a className={style.a} href="#Information"> 
               - Information
            </a>
        </ul>

        <ul>
            <a className={style.a} href="#Contact"> 
               - Contact
            </a>
        </ul>

        <ul>
            <a className={style.a} href="#Technologies"> 
               - Technologies
            </a>
        </ul>
</div>
  
<section id="Technologies">
        <Tecnologias/>
</section>

<section id="Projects">
  <Proyectos/>
</section>



{/* 
<section id="Home">
  <Informacion/>
</section>

<section id="Information">
  <Contacto/>
</section>

<section id="Contact">
  <Redes/>
</section> */}

      </div>
    );
  }

export default Information
