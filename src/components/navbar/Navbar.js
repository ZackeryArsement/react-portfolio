import React from 'react';
import avatar from '../../assets/profile/LinkedIn'
import classes from './NavTabs.module.css'

function NavTabs({ currentPage, handlePageChange }) {
    return(
    <nav class="navbar navbar-expand-xl navbar-light bg-light sticky-top">
        <a class="navbar-brand" href="#">
            <img id='avatar-img' src={avatar} width="50" height="50" alt=""/>
            Zackery Arsement
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
            <div class="navbar-nav">

                <div id='about-hex' class='hex-small about-nav'
                    onClick={() => handlePageChange('AboutMe')}></div>
                    <a 
                    class="nav-item nav-link active about-nav" 
                    href="#about-me"
                    >About
                    <span class="sr-only">(current)</span>
                    </a>

                <div id='portfolio-hex' class='hex-small project-nav' 
                    onClick={() => handlePageChange('Portfolio')}></div>
                    <a 
                    class="nav-item nav-link portfolio-nav" 
                    href="#portfolio"
                    >Portfolio</a>

                <div id='contact-hex' class='hex-small future-nav'
                    onClick={() => handlePageChange('Contact')}></div>
                    <a 
                    class="nav-item nav-link contact-nav" 
                    href="#contact"
                    >Contact</a>

                <div id='resume-hex' class='hex-small contact-nav' 
                    onClick={() => handlePageChange('Resume')}></div>
                    <a 
                    class="nav-item nav-link resume-nav" 
                    href="#resume"
                    >Resume</a>
            </div>
        </div>
    </nav>
    )
}

export default NavTabs;