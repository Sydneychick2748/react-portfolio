// import contacts from './data'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>
      <p>
        Shoot me a message!
      </p>
      <div className="container contact__container" data-aos="fade-up">
        <form>
          <ul>
            <li>
              <input type="text" name="name" placeholder="Name"  required/>
            </li>
            <li>
              <input type="email"  name="email" placeholder="Email" required />

            </li>
            <li>
              <input type="text" name="subject" placeholder="Subject" required />
            </li>
            <li>
              <textarea name="message"  placeholder="Message" required></textarea>
            </li>
            <li>
              <button type="submit">Send Message</button>
            </li>


          </ul>

        </form>
      </div>
    </section>
  )
}

export default Contact