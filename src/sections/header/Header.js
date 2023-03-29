import "./header.css";
import HeaderImage from "../../assets/bugpic.jpg";
import data from "./data";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img className="bug-image" src={HeaderImage} alt="portrait" />
        </div>

        <h3>ANA BENNETT</h3>
        <p>
          {" "}
          "Welcome to my portfolio, where I showcase my passion for web
          development and design".
        </p>

        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Lets Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>
      </div>
      <h3 className="span-text-h3">
        <div className="hero-text ">
          <span>
            "Your potential for achievement is boundless save for the confines
            you impose upon your own mindset"
          </span>

          <div className="overlay"></div>
        </div>
      </h3>
    </header>
  );
};
export default Header;
