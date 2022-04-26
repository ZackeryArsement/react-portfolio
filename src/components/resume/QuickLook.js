import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import classes from './QuickLook.module.css'

const QuickLook = () => {
    return (
        <Container className='bg-ind rounded'>
            {/* University */}
            <Row className='p-4 pb-2'>
                <Col>
                    <Row className='bg-light rounded p-3 text-center d-flex'>
                        <div className={`${classes.title}`}>University</div>
                        <div className={classes.content}>The University of Texas at Austin (Dec. 2020) - - - "Hook 'em!"</div>
                    </Row>
                </Col>
            </Row>

            {/* Degree */}
            <Row className='p-4 pb-2'>
                <Col>
                    <Row className='bg-light rounded p-3 text-center d-flex'>
                        <div className={`${classes.title}`}>Degree</div>
                        <div className={classes.content}>B.S. in Mechanical Engineering</div>
                    </Row>
                </Col>
            </Row>

            {/* Certificates */}
            <Row className='p-4 pb-2'>
                <Col>
                    <Row className='bg-light rounded p-3 text-center'>
                        <div className={`${classes.title}`}>Certificates</div>
                        <div className={classes.content}>Full Stack Web Developer Certificate</div>
                    </Row>
                </Col>
            </Row>

            {/* Technical Skills */}
            <Row className='p-4 pb-2'>
                <Col>
                    <Row className='bg-light rounded p-3 text-center'>
                        <div className={`${classes.title}`}>Technical Skills</div>
                        <div className={classes.content}>Javascript | ReactJS | MongoDB | MySQL | ExpressJS | GraphQL | PhaserJS | NodeJS | HTML & CSS</div>
                    </Row>
                </Col>
            </Row>

            {/* Career Goals */}
            <Row className='p-4'>
                <Col>
                    <Row className='bg-light rounded p-3 text-center'>
                        <div className={`${classes.title}`}>Career Outlook</div>
                        <div className={classes.content}>
                            I have a passion for using software to create complex algorithms and problem solve. I would love a career using Javascript to create intricate and interactive web applications that are both enjoyable to the user and help tackle real world problems.
                        </div>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default QuickLook