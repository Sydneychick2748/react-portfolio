import React from "react";
import "./resume.css";
import CV from "../../assets/resume.jpg";
import { HiDownload } from "react-icons/hi";
import Card from "../../components/Card";
import data from "./data";
import MyResume from "../../assets/myResume.jpeg";

const Resume = () => {
  return (
    <section id="about">
      <div className=" container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={MyResume} alt="portrait" />
          </div>
        </div>
        <div className="about__right">
          <h2>My Resume</h2>
          <br />
          <br />
          <h5> Check out my skills </h5>
          <div className="about__cards">
         
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
              </Card>
            ))}
          </div>
          <p>
            Please allow me to introduce myself through my resume. I am
            constantly expanding my knowledge and staying up-to-date with the
            latest advancements in web development.
          </p>
         

          <a href={CV} download className="btn primary">
            download Resume <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
