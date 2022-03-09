import './Portfolio.css'
import AlienGame from '../../assets/projects/alien-game.png'
import CodingQuiz from '../../assets/projects/coding-quiz.png'
import LetsGetOut from '../../assets/projects/lets-get-outta-here.png'
import PasswordGenerator from '../../assets/projects/password-generator.png'
import WeatherForecast from '../../assets/projects/weather-forecast.png'

const Portfolio = () => {
    return(
        <div className="project-section">
            <div className='w-75 m-auto'>
                <br/>
                <h1>Projects Completed</h1>
                <a id="project-one" href="https://take-me-to-your-leader-zja.herokuapp.com/" target="_blank" className='container'>
                    <img id="horiseon-picture" src={AlienGame} alt="Take Me to Your Leader Img"/>
                    <div className="text-block">
                        <h4 className="block-text">Take Me to Your Leader!</h4>
                    </div>
                </a>
        
                <div className="project-list">
                    <a className="project container" href="https://zackeryarsement.github.io/projectOne/" target="_blank">
                        <img src={LetsGetOut} alt="Let's Get Outta Here Img"/>
                        <div className="text-block">
                            <h4 className="block-text">Let's Get Outta Here!</h4>
                        </div>
                    </a>

                    <a className="project container" href="https://zackeryarsement.github.io/passwordGenerator_HW3/" target="_blank">
                        <img src={PasswordGenerator} alt="Password Generator Img"/>
                        <div className="text-block">
                            <h4 className="block-text">Password Generator</h4>
                        </div>
                    </a>

                    <a className="project container" href="https://zackeryarsement.github.io/CodeQuiz_HW4/" target="_blank">
                        <img src={CodingQuiz} alt="Coding Quiz Img"/>
                        <div className="text-block">
                            <h4 className="block-text">Coding Quiz</h4>
                        </div>
                    </a>
                    
                    <a className="project container" href="https://zackeryarsement.github.io/weatherDashboard_HW6/" target="_blank">
                        <img src={WeatherForecast} alt="Weather Dashboard Img"/>
                        <div className="text-block">
                            <h4 className="block-text">Weather Dashboard</h4>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio