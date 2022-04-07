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
                    <Row className={`w-100  p-4 pb-2`} key={project.title}>
                        <Col>
                            <Row className={` bg-light rounded text-center ${classes.parentRow}`}>
                                <div className={`${classes.column1}`}>
                                    <a className={`${classes.project} container`} href={project.deployed} target="_blank" rel="noreferrer">
                                        <img src={project.img} alt={project.title} className={classes.projectImg}/>
                                        <div className={classes.textBlock}>
                                            <h4 className={classes.description}>{project.title}</h4>
                                        </div>
                                    </a>
                                </div>
                                <div className={`${classes.content} ${classes.column2}`}>
                                    <Row className="mb-4">
                                        <h2> Description</h2>
                                        <h4 className={classes.description}>{project.description}</h4>
                                    </Row>
                                    <Row>
                                        <h2> Technologies Used</h2>
                                        <h4 className={classes.description}>{project.tech}</h4>                                    
                                    </Row>
                                    <Row className={`justify-content-center mb-3`}>
                                        <a className={`${classes.a} ${classes.github}`} href={project.github} target="_blank" rel="noreferrer">
                                            <img className={classes.img} src={Github} alt="Github Link"/>
                                        </a>                                
                                    </Row>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                ))}
        </Container>
    )
}

export default Project