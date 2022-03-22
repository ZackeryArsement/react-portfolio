// import './Portfolio.css'
import AlienGame from '../../assets/projects/alien-game.png'
import LetsGetOut from '../../assets/projects/lets-get-outta-here.png'
import WeatherForecast from '../../assets/projects/weather-forecast.png'
import CodingQuiz from '../../assets/projects/coding-quiz.png'
import PasswordGenerator from '../../assets/projects/password-generator.png'
import RiseNThrive from '../../assets/projects/riseNthrive.png'

import Project from './Project'

const projects = [
    {
        title: 'Rise N\' Thrive',
        deployed: "https://risenthrive.herokuapp.com/",
        github:'https://github.com/romeodixonll/Rise-N-Thrive',
        img: RiseNThrive,
        description: 'All in one morning application to start your day!',
        tech: 'React | ExpressJS | Javascript | MongoDB |  Phaser3 | NodeJS | CSS'
    },
    {
        title: 'Take Me to Your Leader',
        deployed: "https://take-me-to-your-leader-zja.herokuapp.com/",
        github:'https://github.com/ZackeryArsement/solo-take-me-to-leader',
        img: AlienGame,
        description: 'Control an alien to create random sentences!',
        tech: 'ExpressJS | Javascript | HandlebarsJS | MySQL |  Phaser3 | NodeJS | HTML & CSS'
    },
    {
        title: 'Let\'s Get Outta Here',
        deployed: "https://zackeryarsement.github.io/projectOne/",
        github:'https://github.com/ZackeryArsement/projectOne',
        img: LetsGetOut,
        description: 'Input a city and find information on nearby cities!',
        tech: 'Javascript | JQuery | RestfulAPI\'s | Materialize | HTML & CSS'
    },
    {
        title: 'Weather Dashboard',
        deployed: "https://zackeryarsement.github.io/weatherDashboard_HW6/",
        github:'https://github.com/ZackeryArsement/weatherDashboard_HW6',
        img: WeatherForecast,
        description: 'Search a city and find it\'s current and forecasted weather!',
        tech: 'Javascript | JQuery | Bootstrap | HTML & CSS'
    },
    {
        title: 'Coding Quiz',
        deployed: "https://zackeryarsement.github.io/CodeQuiz_HW4/",
        github:'https://github.com/ZackeryArsement/CodeQuiz_HW4',
        img: CodingQuiz,
        description: 'Take a timed quiz to test your javascript knowledge!',
        tech: 'Javascript | HTML & CSS'
    },
    {
        title: 'Password Generator',
        deployed: "https://zackeryarsement.github.io/passwordGenerator_HW3/",
        github:'https://github.com/ZackeryArsement/passwordGenerator_HW3',
        img: PasswordGenerator,
        description: 'Create a password using ',
        tech: 'Javascript | HTML & CSS'
    },
]
const Portfolio = () => {
    return(
        <div className='pt-5 pb-5'>
            <div className='pb-4'>
                <h1>
                    Completed Projects
                </h1>
            </div>
            <Project projects={projects}/>
        </div>
    )
}

export default Portfolio