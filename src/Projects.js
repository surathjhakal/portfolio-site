import React from "react";
import Project from "./Project";
import "./Projects.css";
import amazon_image from "./amazon-clone.png";
import netflix_image from "./netflix.png";
import music_image from "./music_image.png";
// import first_react_app_image from "./first-react-website.png";
import typing_test_image from "./typing_test_image.png";
// import tic_tac_toe_image from "./tic_tac_toe_image.png";
// import quiz_image from "./quiz_image.png";
import weather_image from "./weather_image.png";
import whatsapp_clone from "./whatsapp_clone.png";
import covid_tracker from "./covid_tracker.png";
import food_ordering from "./food_ordering.png";

const Projects = () => {
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects-header" className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="projects-row">
          <div className="projects-title">Checkout some of my projects :)</div>
          <div className="projects-project">
            <Project
              img={food_ordering}
              title="Food Ordering Site"
              info="I made this project using php as I wanted to implement backend to it and I also leart about mysql database stuff and got some great confidence from it.."
              link="https://github.com/surathjhakal/Food-ordering-app"
            />
            <Project
              img={whatsapp_clone}
              title="Whatsapp Clone"
              info="Used nextjs tech for making this cool stuff and learnt a lot in this build. I had taken some reference from internet & youtube.."
              link="https://github.com/surathjhakal/whatsapp-clone-2"
            />
            <Project
              img={netflix_image}
              title="Netflix Clone"
              info="This netflix clone was easy but quite challenging too, even in this app I used firebase for authentication part. Got some great experience in frontend also."
              link="https://github.com/surathjhakal/Netflix-clone"
            />
            <Project
              img={music_image}
              title="Music app"
              info="I really learned a lot in this app. I even use this app because whichever song 
              I want to listen I add it to the music object and it plays all the songs in queue.."
              link="https://github.com/surathjhakal/javascript_projects/tree/master/music_player"
            />
          </div>
          <div className="projects-project">
            <Project
              img={amazon_image}
              title="Amazon Clone"
              info="Loved making amazon clone as it was challenge and wanted to check my skills that I can do it or not. I made this project using react js.."
              link="https://github.com/surathjhakal/Amazon-clone"
            />
            <Project
              img={typing_test_image}
              title="Typing Test"
              info="One of my friend asked me that how much is my typing speed so from that I got an idea to make a typing speed app.."
              link="https://github.com/surathjhakal/javascript_projects/tree/master/Typing_test"
            />
            <Project
              img={covid_tracker}
              title="Covid Tracker"
              info="Covid tracker app made using reactjs & taken help from clever programmer(youtube channel). Learnt a lot new stuff from them."
              link="https://github.com/surathjhakal/React_projects/tree/master/covid-tracker"
            />
            <Project
              img={weather_image}
              title="Weather app"
              info="In this app I really learned about how to fetch data from api and it was quite easy I would say and intresting at the same time.."
              link="https://github.com/surathjhakal/React_projects/tree/master/weather-app"
            />
          </div>
          <div className="projects-row-button">
            <button onClick={goToTop}>
              <i className="fas fa-angle-up"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
