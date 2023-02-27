// import contacts from './data'
import emailjs from 'emailjs-com';
import React , { useRef } from 'react'
import './contact.css'
// import {MdOutlineEmail} from 'react-icons/md'
// import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
    const form = useRef();

const sendEmail = (e) => {
    e.preventDefault();
     emailjs.sendForm('service_t7ndxho', 'template_80lpey8', e.target, 'user_1x9x9x9')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    };



  return (
    <section id='contact'>
       
        <h2>Contact Me</h2>
         <div className=' container contact-container'> 
             <div className='contact__options'>
               <h4>Please Contact me if you have any questions  </h4>

                    </div> 
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder=" Your Full Name" name="name" required/>
                        <input type="email" placeholder=" Your Email" name="email" required/>
                        <textarea placeholder=" Your Message" name="message"  row="7" required></textarea>
                        <button type="submit" className="btn btn primary">Send Message</button>
                    </form>
                     </div> 
                    </section>

  )
};
export default Contact