import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import classes from './QuickLook.module.css'

const QuickLook = () => {
    return (
        <Container className='bg-secondary rounded'>
            {/* University */}
            <Row className='p-2 pt-4'>
                <Col xs={3} className={`${classes.title} text-end border-end`}>University:</Col>
                <Col className={classes.content}>The University of Texas at Austin (Dec. 2020) - - - "Hook 'em!"</Col>
            </Row>

            {/* Degree */}
            <Row className='p-2'>
                <Col xs={3} className={`${classes.title} text-end border-end`}>Degree:</Col>
                <Col className={classes.content}>B.S. in Mechanical Engineering</Col>
            </Row>

            {/* Certificates */}
            <Row className='p-2'>
                <Col xs={3} className={`${classes.title} text-end border-end`}>Certificates:</Col>
                <Col className={classes.content}>Full Stack Web Developer Certificate</Col>
            </Row>

            {/* Technical Skills */}
            <Row className='p-2'>
                <Col xs={3} className={`${classes.title} text-end border-end`}>Technical Skills:</Col>
                <Col className={classes.content}>Javascript | ReactJS | MongoDB | MySQL | ExpressJS | PhaserJS | NodeJS | HTML & CSS</Col>
            </Row>

            {/* Career Goals */}
            <Row className='p-2 pb-4'>
                <Col xs={3} className={`${classes.title} text-end border-end`}>Career Outlook:</Col>
                <Col className={classes.content}>Yes</Col>
            </Row>
        </Container>
    )
}

export default QuickLook