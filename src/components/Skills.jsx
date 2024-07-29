import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
// import ChangingProgressProvider from "./ChangingProgressProvider";

const Skills = () => {
  const ab = 100;
  const cd = 95;
  const ef = 90;
  const gh = 80;
  const ij = 70;
  return (  
    <>
      <div className="skills">
        <div className="container gx-0 px-3 px-md-0"> 
          <div className="row gx-0 align-items-center">
            <div className="col-md-6">
              <div className="skill_col1">  
                <h5>MY SKILLS</h5>
                <h1>I am great in what I</h1>
                <h1>do and I am loving it</h1>  
                <p> 
                  My skill set includes proficiency in HTML, CSS, JavaScript, TypeScript
                  and popular frameworks like React and Next. I have experience in
                  creating responsive, interactive websites and web
                  applications. Additionally, I am skilled in version control
                  systems, troubleshooting, web3 and staying updated with the latest
                  web development trends
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill_col2">
                <div className="row ">
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={ab} text={`${ab}%`} />
                      <h3>HTML, CSS</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={cd} text={`${cd}%`} />
                      <h3>JavaScript</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={cd} text={`${cd}%`} />
                      <h3>TypeScript</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={ef} text={`${ef}%`} />
                      <h3>WordPress</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={ij} text={`${ij}%`} />
                      <h3>Web3</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={gh} text={`${gh}%`} />
                      <h3>MongoDB</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={cd} text={`${cd}%`} />
                      <h3>React</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={cd} text={`${cd}%`} />
                      <h3>Next</h3>
                    </div>
                  </div>
                  <div className="col-md-4 col-6">
                    <div className="skill_col">
                      <CircularProgressbar value={gh} text={`${gh}%`} />
                      <h3>Django</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
