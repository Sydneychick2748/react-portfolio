import "./header.css";
import HeaderImage from '../../assets/bugpic.jpg';
import data from "./data";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="portrait" />
        </div>
        <h3>Ana Bennett</h3>

        <p>
        "Welcome to my portfolio, where I showcase my passion for web development and design."
          
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
