import Logo from "../../assets/brain.jpg";
import "./navbar.css";
import data from "./data";

const NavBar = () => {
  return (
    <nav>
      <div className=" container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={Logo} alt="" />
        </a>
        <ul className="nav__menu">
          {data.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
