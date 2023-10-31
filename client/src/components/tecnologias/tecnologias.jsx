import style from './tecnologias.module.css'

export default function Tecnologias () {

    return(
        <div className={style.text}>
            <h1 className={style.txt}>Technologies </h1>
            <div className={style.front}>
                <h1>Front-end</h1>
                <p align="left"> 
                <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
                
                </p>
            </div>
        </div>

    )
}