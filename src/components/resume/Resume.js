import classes from './Resume.module.css'
import QuickLook from './QuickLook'
import ZackArsementResume from '../../assets/resume/Resume.pdf'
import Github from '../../assets/icons/github.png'


const Resume = () => {
    return (
        <div className='pt-5'>
            <div className='pb-4'>
                <h1>
                    Quick Look
                </h1>
            </div>

            {/* Quick Look */}
            <QuickLook />

            {/* Resume Download */}
            <div className={`${classes.resumeContainer} bg-ind d-flex justify-content-center mt-5 m-auto rounded`}>
                <a href={ZackArsementResume} target="_blank" rel="noreferrer" className={`${classes.resume} text-decoration-none text-black`}>
                    Download Resume:
                    <img src={Github} alt="Github Link"/>
                </a>
            </div>

        </div>   
    )
}

export default Resume