import './About-me.css'

const AboutMe = () => {
    return(
        <div className="jumbotron jumbotron-fluid" id='about-me'>
            {/* <h1 className="display-4">About Me</h1> */}
            <div className="w-100">
                <p className={`text-center bg-ind bio`}>
                    My name is Zackery Arsement and I am a recent graduate from the University of Texas at Austin, where I received a bachelors degree in mechanical engineering. After graduation I worked on video game designing and programming for 6 months using C# in the Unity Game Engine. I then got a job at a chemical plant in the Beaumont, Texas area. After working at the plant for 6 months I realized that the oil and gas industry was not for me and I wanted to switch back into software and code for a living. I am now working full time on UT's javaScript bootcamp and I am very enthusiastic about my future in software!
                </p>
            </div>
        </div>
    )
}

export default AboutMe