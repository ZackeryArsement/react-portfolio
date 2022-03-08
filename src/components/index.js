import AboutMe from './about-me/About-me';
import Contact from './contact/Contact';
import Portfolio from './portfolio/Portfolio';
import Resume from './resume/Resume';

const Section = ({ currentSection }) => {

    const value = (currentSection) => {
        switch (currentSection){
            case 'AboutMe':
                return <AboutMe />;
            case 'Contact':
                return <Contact />;
            case 'Portfolio':
                return <Portfolio />;
            case 'Resume':
                return <Resume />;
            default:
                return <AboutMe />;
        }
    }

    return <div>
        {value}
    </div>
}

export default Section