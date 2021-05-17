import React from "react";
import SkillCard from "./SkillCard";
import "./Skills.css";

const Skills = () => {
  return (
    <section id="skill-header" className="d-flex align-items-center">
      <div className="container-fluid ">
        <div className="skill-row">
          <div className="skill-topic">
            <p>Skills</p>
          </div>
          <div className="skill-info">
            <h4>
              Here are my skills in which I have worked & have some great
              experience in it...
            </h4>
            <SkillCard
              title="Javascript"
              info="Javascript is a type of language that you can't run away from it if you want to do 
              web development as it makes the page interacting or functioning.I have now too much experience in 
              javascript.."
              percent="96%"
            />
            <SkillCard
              title="Python"
              info="Python is still my first love as this was the first language I learned and this language never
               makes you feel that you can't learn programming beacuse it's syntax is so simple that anyone can learn it.."
              percent="94%"
            />
            <SkillCard
              title="ReactJs"
              info="After learning javascript I learned reactjs and I was in love this 
              language because it makes your life so easy.. & now I have some great experience in reactjs.."
              percent="90%"
            />
            <SkillCard
              title="Php"
              info="I learned this because it was been taught in college but i made a great food ordering website with it"
              percent="85%"
            />
            <SkillCard
              title="Git & Github"
              info="If you want to become an software developer then you must need to learn this because this makes you 
              keep connected to the communuty. If you have to contribute in any opensource then you must know git and github..."
              percent="82%"
            />
            <SkillCard
              title="Data Structures & algorithms"
              info="This thing is really important if you want to improve your logic building or for writing optimized code 
              because it helps us in later time in development and as an engineer you always solve problem so you need to find out best solution.."
              percent="80%"
            />

            <SkillCard
              title="firebase"
              info="Firebase makes your life so easy because of this you deploy your website or you can have a database as it is
               called as firestore and it has alot more thing but I want to explore..."
              percent="76%"
            />
            <SkillCard
              title="mySql"
              info="My sql is really important and it was been used in my php and django projects"
              percent="70%"
            />
            <SkillCard
              title="Django"
              info="Really have interest to learn this and made a cool project with it"
              percent="65%"
            />
            <SkillCard
              title="Mongo db"
              info="Mongo db is in trend now a days as it is super fast and it is also called as object based database as it 
              stores data in key value pair. I need to work hard in this as i don't know much.."
              percent="60%"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
