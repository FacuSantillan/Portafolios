
import git from '../../assets/git.png';
import foto from '../../assets/foto.jpg';
import style from './informacion.module.css';
import linkedin from '../../assets/linkedin.png';

export default function Informacion () {

    const handleDownloadClick = () => {
        window.location.href = 'https://drive.google.com/uc?export=download&id=1K_FdLqJ3s_0JyQizkRSeUkvBSrxLhZ4s';
      };

    return (
    <div>
        <h1 className={style.title}>About </h1>
        <img src={foto} alt='foto' className={style.foto}/>
        <div className={style.info}>
            <h3 className={style.text}>
            From the age of 8, I ventured into the world of programming. After robotics and 3D printing courses, I felt the need for something more. It was a programming course from scratch that opened my mind and defined my path. Today, with completed university studies, I am committed to my growth at SoyHenry.
            </h3>

        <a className={style.link} href='https://github.com/FacuSantillan' target='_blank'> 
        <img className={style.img} src={git} alt='git'/> 
        </a>

        <a className={style.link} href='https://www.linkedin.com/in/facundo-santillan-32072226a/' target='_blank'> 
        <img className={style.img2} src={linkedin} alt='linkedin'/> 
        </a>

        </div>

        <div>
            <button className={style.dwn} onClick={handleDownloadClick} >
            Download CV
            </button>   
            
        </div>
    </div>
    )
}