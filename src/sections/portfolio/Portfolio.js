import "./portfolio.css";
import img1 from "../../assets/img1c.png";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.png";
import img4 from "../../assets/img-4.png";
import img5 from "../../assets/img-5.png";
import img6 from "../../assets/img-6.png";
import carbonImg from "../../assets/carbon.png";
import { faChainBroken } from "@fortawesome/free-solid-svg-icons";


const data = [
    {
        id: 1,
        image: img1,

        title: "Damien Shane is a live DJ website using React and React library's the site includes slideshow component,calendar for events, videos, email forms and links using css customer to the customer.",
        github: "https://github.com/Sydneychick2748/DamienShane",
        demo: "https://damienshaneofficial.com/"
    },
    {
        id: 1,
        image: img1,
        title: "Tic-Tac-Toe game in React utilizes components to represent the game's elements, manages game state and logic, and provides a user interface for players to interact with the game",
        github: "https://github.com/Sydneychick2748/TICTACTOE",
        demo: "https://tictactoe-zeta-amber.vercel.app/"
    },
    {
        id: 3,
        image: img1,
        title: "Api-Weather- This is a weather application that allows users to search for a city and get the current weather and a five day forecast.",
        github: "https://github.com/Sydneychick2748/api-weather-project",
        demo: "https://sydneychick2748.github.io/api-weather-project/"
    },
    {
        id: 5,
        image: img1,
        title: "Lyrics-API-Project- This is a full stack application that allows users to search for a song and get the lyrics.",
        github: "https://github.com/Sydneychick2748/Lyrics-API-Project",
        demo: "https://fmaldmed.github.io/Lyrics-API-Project/"

    },
    {
        id: 6,
        image: img1,
        title: "This is a full stack application using React that allows users to create an account and collaborate on code,This is a group project.",
        github: "https://github.com/DallasSybrowsky/CodeCollab",
        demo: "https://code-collab-dallas.herokuapp.com/"
    },
    
    {
        id: 2,
        image: img1,
        title: "MVC-tech-blog- This is a full stack application that allows users to create an account and post blog posts.",
        github: "https://github.com/Sydneychick2748/MVC-tech-blog",
        demo: "https://thawing-gorge-64914.herokuapp.com/login"
    },
    
    
    
    ]


const Portfolio = () => {



  return (
    <section id="portfolio">
      
      <h3 className="portfolio-h3">Portfolio</h3>
      <div className="sml__heading">
      <h5>My Recent Work</h5>
      </div>
     
      <div className="portfolio__container">
      
        {
            data.map(({id, image, title, github, demo}) => {
                return(
                    <article  key={id} className="portfolio__item">
                        <div className="portfolio__item-image">
                        <img src={image} alt={title} />
                        </div>
                        <h3>{title}</h3>
                        <div className="portfolio__item-cta">
                            <a href={github} target="_blank" className="btn" rel="noreferrer"  >Github</a>
                            <a href={demo} target="_blank"  className="btn  btn primary" rel="noreferrer" > Live Demo</a>
                        </div>
                            

                        </article>
                )
        }
        )
        }

       
        
      </div>
    </section>
  );
};
export default Portfolio;
