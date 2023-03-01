import './footer.css'; 

import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
// import { AiOutlineMail } from "react-icons/ai";


const Footer = () => {
    return (
        <footer>
           
            <ul className='permalinks'>
                <li><a href='#'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#contact'>Contact</a></li>

            </ul>
            <div className='footer__socials'>
                <a href="https://www.linkedin.com/in/ana-bennett-116051221/"><FaLinkedin/></a>
                <a href="https://github.com/Sydneychick2748"><FaGithub/></a>
                <a href="mailto:anabennett77@gmail.com"><MdOutlineMailOutline/></a>
            </div>
            <div className='footer__copyright'>
            <p> © Ana Bennett Portfolio 2023 - All Rights Reserved</p> 
            </div>
          
        </footer>
    );
    }
    export default Footer;