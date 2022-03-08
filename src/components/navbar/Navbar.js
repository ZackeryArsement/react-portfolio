import React from 'react';
import avatar from '../../assets/profile/LinkedIn.jpg'
import classes from './Navbar.module.css'

function Navbar({ currentPage, handlePageChange }) {
    return(
    <nav className="navbar navbar-expand-xl navbar-light bg-light sticky-top">
        <a className="navbar-brand" href="#">
            <img id='avatar-img' src={avatar} width="50" height="50" alt=""/>
            Zackery Arsement
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
            <div className="navbar-nav">

                <div id='about-hex' className='hex-small about-nav'
                    onClick={() => handlePageChange('AboutMe')}></div>
                    <a 
                    className="nav-item nav-link active about-nav" 
                    href="#about-me"
                    >About
                    <span className="sr-only">(current)</span>
                    </a>

                <div id='portfolio-hex' className='hex-small project-nav' 
                    onClick={() => handlePageChange('Portfolio')}></div>
                    <a 
                    className="nav-item nav-link portfolio-nav" 
                    href="#portfolio"
                    >Portfolio</a>

                <div id='contact-hex' className='hex-small future-nav'
                    onClick={() => handlePageChange('Contact')}></div>
                    <a 
                    className="nav-item nav-link contact-nav" 
                    href="#contact"
                    >Contact</a>

                <div id='resume-hex' className='hex-small contact-nav' 
                    onClick={() => handlePageChange('Resume')}></div>
                    <a 
                    className="nav-item nav-link resume-nav" 
                    href="#resume"
                    >Resume</a>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;