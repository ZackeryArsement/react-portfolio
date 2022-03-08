import classes from './Footer.module.css'

const Footer = () => {
    return(
        <footer id="contact-info">
            <a className="contact-box" href="https://www.linkedin.com/in/zackery-arsement/" target="_blank">LinkedIn
                <div></div>
            </a>

            <a className="contact-box" href="https://github.com/ZackeryArsement" target="_blank">GitHub
                <div></div>
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