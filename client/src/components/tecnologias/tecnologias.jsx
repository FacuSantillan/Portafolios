import style from './tecnologias.module.css'

export default function Tecnologias () {

    return(
        <div className={style.text}>
            <h1 className={style.txt}>Technologies </h1>
            <div className={style.content}>
            <div className={style.front}>
                <h1>Front-end</h1>
                <p align="center"> 
                <a className={style.a} href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="55" height="55"/> </a>
                <a className={style.a} href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://www.shutterstock.com/image-vector/web-development-sign-javascript-vector-260nw-1875934654.jpg" alt="javascript" width="55" height="55"/> </a>
                <a className={style.a} href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="55" height="55"/> </a>
                <a className={style.a} href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="55" height="55"/> </a>
                <a className={style.a} href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="55" height="55"/> </a>
                <a className={style.a} href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="55" height="55"/> </a>
                <a className={style.a} href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="55" height="55"/> </a>
                <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="55" height="55"/> </a>
                </p>
            </div>
            <div className={style.back}>
                <h1>Back-end</h1>
                <p align="center"> 
                <a className={style.a} href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="55" height="55"/> </a>
                <a className={style.a} href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="55" height="55"/> </a>
                <a className={style.a} href="https://www.gnu.org/software/bash/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg" alt="bash" width="55" height="55"/> </a>
                <a className={style.a} href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="55" height="55"/> </a>
                <a className={style.a} href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="55" height="55"/> </a> 
                <a className={style.a} href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="55" height="55"/> </a>
                </p>
            </div>

            <div className={style.db}>
                <h1>Data base</h1>
                <p align="center"> 
                <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="65" height="65"/> </a>
                </p>
            </div>
            </div>
        </div>

    )
}