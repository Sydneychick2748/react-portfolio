import './about.css';
import AboutImage from '../../assets/aboutImage.jpg';

const About = () => {
    return (
        <section id='about'>
            <div className=' container about__container'>
                <div className='abou__left'>
                    <div className='about__portrait'>
                        <img src={AboutImage} alt='portrait' />
                        </div>
                    </div>
<div className='about__right'>
    <h2>About Me</h2>
    <div className="about__cards"></div>
<p>
     As a passionate Full Stack Web Developer, I take pride in designing
          visually appealing and highly functional websites. Recently graduated
          from the UCSD fullstack web development Extension classes, I am a
          driven, self-motivated, and dedicated individual who thrives in a
          team-oriented environment. I possess a problem-solving mindset and
          welcome new challenges.
           Always striving to enhance my skills and
          knowledge. My ability to quickly absorb information and think
          creatively enables me to approach problem-solving in unique ways.
          Overall, I am committed to continuous learning and improvement in my
          craft. </p>
            <p>When I am not coding, I enjoy spending time with my family, playing with my dog, and traveling.</p>
           

    </div>
    </div>
        </section>
    );
    }
    export default About;