import css from "../assets/css.png"
import html from "../assets/html.png"
import js from "../assets/js.png"
import react from "../assets/react.png"
import python from "../assets/python.png"
import next from "../assets/next.png"
import node from "../assets/node.png"
import mongo from "../assets/mongodb.png"
import chakra from "../assets/flash.png"
import postman from "../assets/postman.png"
import git from "../assets/git.png"
import linux from "../assets/linux.png"
import express from "../assets/express.png"
import sql from "../assets/sql.png"

const Skills = () => {
    return (
        <div className="back-ground-2">
        <div className="skills-section">
        <section id="skills" className="skills">
          <p className="section__text__p1">Explore my</p>
          <h1 className="title">Tech Stacks</h1>
          <div className="skills-container">
  
            <div className="skill-box" id="programming">
              <h2>Programming</h2>
              <div className="skill-info">
                <div className="icon-info">
                  <img src={python} alt="Python Icon" className="floating-icon" />
                  <p>Python<br />
                  Data Structure &<br />
                   Algorithm
                  </p>
                </div>
                <div className="icon-info">
                  <img src={js} alt="JavaScript Icon" className="floating-icon" />
                  <p>JavaScript</p>
                </div>
                <div className="icon-info">
                  <img src={linux} alt="Linux Icon" className="floating-icon" />
                  <p>Linux
                  <br />
                  Command Line</p>
                </div>
                <div className="icon-info">
                  <img src={sql} alt="SQL Icon" className="floating-icon" />
                  <p>SQL
                  <br />
                  Database</p>
                </div>
              </div>
            </div>
  
            <div className="skill-box" id="frontend">
                <h2>FrontEnd</h2>
                <div className="skill-info">
                    <div className="icon-info">
                        <img src={html} alt="HTML Icon" className="floating-icon" />
                        <p>HTML</p>
                    </div>
                    <div className="icon-info">
                        <img src={css} alt="CSS Icon" className="floating-icon" />
                        <p>CSS</p>
                    </div>
                    <div className="icon-info">
                        <img src={chakra} alt="Chakra Icon" className="floating-icon" />
                        <p>Chakra UI</p>
                    </div>
                    <div className="icon-info">
                        <img src={react} alt="React Icon" className="floating-icon" />
                        <p>React JS</p>
                    </div>
                    <div className="icon-info">
                        <img src={next} alt="Next.js Icon" className="floating-icon" />
                        <p>Next JS</p>
                    </div>
                </div>
            </div>

            <div className="skill-box" id="backend">
                <h2>BackEnd</h2>
                <div className="skill-info">
                    <div className="icon-info">
                        <img src={express} alt="Express Icon" className="floating-icon" />
                        <p>Express JS</p>
                    </div>
                    <div className="icon-info">
                        <img src={node} alt="Node.js Icon" className="floating-icon" />
                        <p>Node JS</p>
                    </div>
                    <div className="icon-info">
                        <img src={mongo} alt="MongoDB Icon" className="floating-icon" />
                        <p>MongoDB</p>
                    </div>
                    <div className="icon-info">
                        <img src={git} alt="Git Icon" className="floating-icon" />
                        <p>Git & Version Control</p>
                    </div>
                    <div className="icon-info">
                        <img src={postman} alt="Postman Icon" className="floating-icon" />
                        <p>Postman</p>
                    </div>
                </div>
            </div>
  
          </div>
        </section>
      </div>
      </div>
    );
  };
  
  export default Skills;
  
