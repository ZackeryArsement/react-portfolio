import classes from './Contact.module.css'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ContactForm = () => {
    return (
        <Form className="text-black" action="https://formspree.io/f/xeqnkwod" method="POST">
            <Form.Group className="mb-3 pt-3" controlId="username">
                <Form.Label>Name</Form.Label>
                <Form.Control as="textarea" rows={1} placeholder="Enter Name" name="name"/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" name="email"/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="userText">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter Message Here... " name="message"/>
            </Form.Group>
            <Button className='w-100' variant="secondary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default ContactForm