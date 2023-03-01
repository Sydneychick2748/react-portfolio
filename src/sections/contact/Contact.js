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
     emailjs.sendForm('service_t7ndxho', 'template_80lpey8', form.current, 'zyZ8vd-oHE5z9TEWv')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        form.current.reset()
    };



  return (
    <section id='contact'>
       
        <h2>Contact Me</h2>
         <div className=' container contact-container'> 
             <div className='contact__options'>
               <h4> I would love to here from you ! </h4>

                    </div> 
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder=" Your Full Name" name="name" className='text' required/>
                        <input type="email" placeholder=" Your Email" name="email" className='email' required/>
                        <textarea placeholder=" Your Message" name="message"  row="7"  className="message"required ></textarea>
                        <button type="submit" className="btn btn primary">Send Message</button>
                    </form>
                     </div> 
                    </section>

  )
};
export default Contact