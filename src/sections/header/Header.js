import "./header.css";
// import HeaderImage from '../../assets/images/HeaderImage.jpg';
import data from "./data";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src="" alt="portrait" />
        </div>
        <h3>Ana Bennett</h3>

        <p>
          As a passionate Full Stack Web Developer, I take pride in designing
          visually appealing and highly functional websites. Recently graduated
          from the UCSD fullstack web development Extension classes, I am a
          driven, self-motivated, and dedicated individual who thrives in a
          team-oriented environment. I possess a problem-solving mindset and
          welcome new challenges, always striving to enhance my skills and
          knowledge. My ability to quickly absorb information and think
          creatively enables me to approach problem-solving in unique ways.
          Overall, I am committed to continuous learning and improvement in my
          craft.
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Lets Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};
export default Header;
