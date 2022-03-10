import classes from './Portfolio.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Github from '../../assets/icons/github.png'

const Project = ({
    projects
}) => {
    return(
        <Container className={`${classes.projectComponents} bg-ind rounded`}>
            {projects &&
                projects.map((project) => (
                    <Row className={`w-100  p-4 pb-2`}>
                        <Col>
                            <Row className={` bg-light rounded text-center`}>
                                <Col xs={5}>
                                    <a className={`${classes.project} container`} href={project.deployed} target="_blank">
                                        <img src={project.img} alt={project.title} className={classes.projectImg}/>
                                        <div class={classes.textBlock}>
                                            <h4>{project.title}</h4>
                                        </div>
                                    </a>
                                </Col>
                                <Col className={classes.content}>
                                    <Row className="mb-4">
                                        <h2> Description</h2>
                                        <h4>{project.description}</h4>
                                    </Row>
                                    <Row>
                                        <h2> Technologies Used</h2>
                                        <h4>{project.tech}</h4>                                    
                                    </Row>
                                    <Row className='justify-content-center mb-3'>
                                        <a className={`${classes.a} ${classes.github}`} href={project.github} target="_blank">
                                            <img className={classes.img} src={Github} />
                                        </a>                                
                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                ))}
        </Container>
    )
}

export default Project