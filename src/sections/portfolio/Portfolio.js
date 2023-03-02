import "./portfolio.css";
import img1 from "../../assets/img-1.png";
import img2 from "../../assets/img-2.png";
import img3 from "../../assets/img-3.png";
import img4 from "../../assets/img-4.png";
import img5 from "../../assets/img-5.png";
import img6 from "../../assets/img-6.png";


const data = [
    {
        id: 1,
        image: img1,
        title: "Bibliomania- This is a full stack application that allows users to search for books and save them to their profile.",
        github: "https://github.com/DallasSybrowsky/Bibliomania",
        demo: "https://bibliomania.herokuapp.com/"
    },
    {
        id: 2,
        image: img2,
        title: "MVC-tech-blog- This is a full stack application that allows users to create an account and post blog posts.",
        github: "https://github.com/Sydneychick2748/MVC-tech-blog",
        demo: "https://thawing-gorge-64914.herokuapp.com/login"
    },
    {
        id: 3,
        image: img3,
        title: "Api-Weather- This is a weather application that allows users to search for a city and get the current weather and a five day forecast.",
        github: "https://github.com/Sydneychick2748/api-weather-project",
        demo: "https://sydneychick2748.github.io/api-weather-project/"
    },
    {
        id: 4,
        image: img4,

        title: "NoSQL-Social-Network-API - This is a back end application that allows users to create a profile, add friends, and create thoughts.",
        github: "https://github.com/Sydneychick2748/NoSQL-Social-Network-API",
        demo: "https://drive.google.com/file/d/1yE6cxkJLsqN-CJU2Ewo-xBRkTihuH8cK/view"
    },
    {
        id: 5,
        image: img5,
        title: "Lyrics-API-Project- This is a full stack application that allows users to search for a song and get the lyrics.",
        github: "https://github.com/Sydneychick2748/Lyrics-API-Project",
        demo: "https://fmaldmed.github.io/Lyrics-API-Project/"

    },
    {
        id: 6,
        image: img6,
        title: "Code-Quiz- This is a quiz  front-end  JavaScript application that allows users to test their knowledge of coding.",
        github: "https://github.com/Sydneychick2748/Code-Quiz",
        demo: "https://sydneychick2748.github.io/Code-Quiz/"
    }
    
    ]


const Portfolio = () => {



  return (
    <section id="portfolio">
      
      <h2>Portfolio</h2>
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
