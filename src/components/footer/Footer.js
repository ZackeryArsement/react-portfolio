import './Footer.css'
import Github from '../../assets/icons/github.png'
import LinkedIn from '../../assets/icons/linkedIn.png'

const Footer = () => {
    return(
        <footer id="contact-info">
            <a className="contact-box" href="https://www.linkedin.com/in/zackery-arsement/" target="_blank">
                <img src={LinkedIn} />
            </a>

            <a className="contact-box" href="https://github.com/ZackeryArsement" target="_blank">
                <img className="m-auto" src={Github} />
            </a>

            <a className="contact-box" href="./assets/images/Resume.pdf" download="ZackArsementResume" target='_blank'>Resume
                <div></div>
            </a>

            <div className="contact-box">
                Email: zarsement@hotmail.com
            </div>
        </footer>
    )
}

export default Footer