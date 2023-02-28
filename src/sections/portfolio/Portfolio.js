import "./portfolio.css";
import img1 from "../../assets/img-1.jpeg";
import img2 from "../../assets/img-2.jpeg";
import img3 from "../../assets/img-3.jpeg";
import img4 from "../../assets/img-4.jpeg";
import img5 from "../../assets/img-5.jpeg";
import img6 from "../../assets/img-6.jpeg";


const data = [
    {
        id: 1,
        image: img1,
        title: "This is a portfolio item title",
        github: "",
        demo: ""
    },
    {
        id: 2,
        image: img2,
        title: "This is a portfolio item title",
        github: "",
        demo: ""
    },
    {
        id: 3,
        image: img3,
        title: "This is a portfolio item title",
        github: "",
        demo: ""
    },
    {
        id: 4,
        image: img4,

        title: "This is a portfolio item title",
        github: "",
        demo: ""
    },
    {
        id: 5,
        image: img5,
        title: "This is a portfolio item title",
        github: "",
        demo: ""

    },
    {
        id: 6,
        image: img6,
        title: "This is a portfolio item title",
        github: "",
        demo: ""
    }
    
    ]


const Portfolio = () => {



  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
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
