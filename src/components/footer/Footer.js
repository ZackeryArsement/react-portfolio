import classes from './Footer.module.css'
import Github from '../../assets/icons/github.png'
import LinkedIn from '../../assets/icons/linkedIn.png'

const Footer = () => {
    return(
        <footer>
            <a className={`${classes.a} ${classes.linkedin}`} href="https://www.linkedin.com/in/zackery-arsement/" target="_blank"  rel="noreferrer">
                <img className={classes.img} src={LinkedIn} alt="LinkedIn Icon"/>
            </a>

            <a className={`${classes.a} ${classes.github}`} href="https://github.com/ZackeryArsement" target="_blank"  rel="noreferrer">
                <img className={classes.img} src={Github} alt="Github Icon"/>
            </a>
        </footer>
    )
}

export default Footer