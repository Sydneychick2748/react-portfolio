import "./portfolio.css";
import img1 from "../../assets/img-1.jpeg";
// import img1 from "../../assets/portfolio/2.jpg";
// import img1 from "../../assets/portfolio/3.jeg";
// import img1 from "../../assets/portfolio/4.jeg";
// import img1 from "../../assets/portfolio/5.jeg";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={img1} alt="" />
          </div>
          <h3>This is a portfolio item title </h3>

          <a href="https://github" className="btn">
            View Project
          </a>
          <a href="https://github" className="btn btn-primary" target="blank">
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={img1} alt="" />
          </div>
          <h3>This is a portfolio item title </h3>

          <a href="https://github" className="btn">
            View Project
          </a>
          <a href="https://github" className="btn btn-primary" target="blank">
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={img1} alt="" />
          </div>
          <h3>This is a portfolio item title </h3>

          <a href="https://github" className="btn">
            View Project
          </a>
          <a href="https://github" className="btn btn-primary" target="blank">
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={img1} alt="" />
          </div>
          <h3>This is a portfolio item title </h3>

          <a href="https://github" className="btn">
            View Project
          </a>
          <a href="https://github" className="btn btn-primary" target="blank">
            Live Demo
          </a>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={img1} alt="" />
          </div>
          <h3>This is a portfolio item title </h3>

          <a href="https://github" className="btn">
            View Project
          </a>
          <a href="https://github" className="btn btn-primary" target="blank">
            Live Demo
          </a>
        </article>
      </div>
    </section>
  );
};
export default Portfolio;
