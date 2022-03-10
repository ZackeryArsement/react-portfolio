import classes from './Resume.module.css'
import QuickLook from './QuickLook'
import ZackArsementResume from '../../assets/resume/Resume.pdf'
import Github from '../../assets/icons/github.png'


const Resume = () => {
    return (
        <div className='pt-5'>
            <h1>
                Quick Look
            </h1>

            {/* Quick Look */}
            <QuickLook />

            {/* Resume Download */}
            <div className={`${classes.resumeContainer} bg-secondary d-flex justify-content-center mt-5 m-auto rounded`}>
                <a href={ZackArsementResume} target="_blank" className={`${classes.resume} text-decoration-none text-black`}>
                    Download Resume:
                    <img src={Github}/>
                </a>
            </div>

        </div>   
    )
}

export default Resume