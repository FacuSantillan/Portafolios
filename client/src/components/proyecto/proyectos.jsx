import React from 'react';
import style from './proyectos.module.css';

import pisconnection from '../../assets/proyects/psiconnection.png';
import Luxury from '../../assets/proyects/Luxury.png';
import rick from '../../assets/proyects/rick.png';
import calendar from '../../assets/proyects/calendar.png';

export default function Proyectos() {
    return (
        <div className={style.cont}>
        <h1 className={style.text}>Projects</h1>
            <a href='https://psiconnectiondev.vercel.app/' target="_blank">
                <img className={style.img} src={pisconnection} alt='cap' />
            </a>

            <a href='https://proyecto-individual-foods.vercel.app/home' target="_blank">
                <img className={style.img} src={Luxury} alt='cap' />
            </a>

            <a href='https://calendar-three-fawn.vercel.app/' target="_blank">
                <img className={style.img} src={calendar} alt='cap' />
            </a>

            <a href='https://tu-link-aqui.com' target="_blank">
                <img className={style.img} src={rick} alt='cap' />
            </a>
        </div>

    );
}
