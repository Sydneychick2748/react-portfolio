// import contacts from './data'
import emailjs from 'emailjs-com';
import React , { useRef, } from 'react'
import { useState } from 'react'
import './contact.css'

const Contact = () => {
    const form = useRef();
    const [confirmationMessage, setConfirmationMessage] = useState("");

const sendEmail = (e) => {
    e.preventDefault();
     emailjs.sendForm('service_t7ndxho', 'template_80lpey8', form.current, 'zyZ8vd-oHE5z9TEWv')
        .then((result) => {
            console.log(result.text);
            setConfirmationMessage("Email has been sent!")
            setTimeout(() => {
                setConfirmationMessage("")
            }, 5000)
             
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset( )
    };



  return (
    <section id='contact'>
       
        <h3 >Contact Me</h3>
         <div className=' container contact-container'> 
             <div className='contact__options'>
               <h5> I would love to hear from you ! </h5>

                    </div> 
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder=" Your Full Name" name="name" className='text' required/>
                        <input type="email" placeholder=" Your Email" name="email" className='email' required/>
                        <textarea placeholder=" Your Message" name="message"  row="7"  className="message"required ></textarea>
                        <button type="submit" className="btn btn primary">Send Message</button>
                        <div >
  
                        <p className="conf__message"> {confirmationMessage }</p>
                        </div>
                    </form>
                     </div> 
                    </section>

  )
};
export default Contact