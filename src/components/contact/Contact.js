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
            <div className={classes.contact}>
                <div className={classes.info}>
                    Phone: (409) 673-0734
                </div>
                <div className={classes.info}>
                    Email: zarsement@hotmail.com
                </div>
                <div className={classes.info}>
                    Location: Beaumont, TX (Remote)
                </div>
            </div>
        </div>     
    )
}

export default Contact