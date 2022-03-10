import classes from './Contact.module.css'
import ContactForm from './ContactForm'

const Contact = () => {
    return (    
        <div className='pt-5'>
            <div className="w-100 pb-4">
                <h1>
                    Shoot Me a Message!
                </h1>
            </div>
            <div className={`${classes.form} bg-ind`}>
                <ContactForm />
            </div>
        </div>     
    )
}

export default Contact