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
                    <Row className='bg-light rounded p-3 text-center'>
                        <Col xs={3} className={`${classes.title} text-end border-end border-dark`}>University:</Col>
                        <Col xs={9} className={classes.content}>The University of Texas at Austin (Dec. 2020) - - - "Hook 'em!"</Col>
                    </Row>
                </Col>
            </Row>

            {/* Degree */}
            <Row className='p-4 pb-2'>
                <Col>
                    <Row className='bg-light rounded p-3 text-center'>
                        <Col xs={3} className={`${classes.title} text-end border-end border-dark`}>Degree:</Col>
                        <Col className={classes.content}>B.S. in Mechanical Engineering</Col>
                    </Row>
                </Col>
            </Row>

            {/* Certificates */}
            <Row className='p-4 pb-2'>
                <Col>
                    <Row className='bg-light rounded p-3 text-center'>
                        <Col xs={3} className={`${classes.title} text-end border-end border-dark`}>Certificates:</Col>
                        <Col className={classes.content}>Full Stack Web Developer Certificate</Col>
                    </Row>
                </Col>
            </Row>

            {/* Technical Skills */}
            <Row className='p-4 pb-2'>
                <Col>
                    <Row className='bg-light rounded p-3 text-center'>
                        <Col xs={3} className={`${classes.title} text-end border-end border-dark`}>Technical Skills:</Col>
                        <Col className={classes.content}>Javascript | ReactJS | MongoDB | MySQL | ExpressJS | PhaserJS | NodeJS | HTML & CSS</Col>
                    </Row>
                </Col>
            </Row>

            {/* Career Goals */}
            <Row className='p-4'>
                <Col>
                    <Row className='bg-light rounded p-3 text-center'>
                        <Col xs={3} className={`${classes.title} text-end border-end border-dark`}>Career Outlook:</Col>
                        <Col className={classes.content}>
                            I have a passion for using software to create complex algorithms and problem solve. I would love a career specializing in the back-end with database implementation or using javascript to create the brains of an application.
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default QuickLook