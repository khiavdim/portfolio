import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div className="About">
        <div className="About_Header">
          <div>About Me</div>
        </div>
        <div className="Header_Angle"></div>
        <div className="About_Info">
          <div className="About_Left">
            <div>
              <img
                src="https://drive.google.com/uc?export=view&id=1Dc6HodZKsz2V9sQt_5rAdJIIIn1KEoFv"
                className="Profile"
              ></img>
            </div>
          </div>
          {/* <div className="middle"></div> */}
          <div className="About_Right">
            <p>
              My name is KhiavDim Lee.<br></br>Pronounced like 'Kia' (the car
              brand) and the letter D.
            </p>
            <br></br>
            <p className="skills">
              I am a full stack web developer and graphic designer based in
              Fresno, California. I became certified through DevMountain having
              completed their web development program. I am proficient in
              <span style={{ color: "#d3ba00" }}>
                <strong> Javascript</strong>
              </span>
              ,{" "}
              <span style={{ color: "#006db2" }}>
                <strong>CSS</strong>
              </span>
              ,{" "}
              <span style={{ color: "#eb6228" }}>
                <strong>HTML</strong>
              </span>
              ,{" "}
              <span style={{ color: "#56bad3" }}>
                <strong>React</strong>
              </span>
              /
              <span style={{ color: "#7248B7" }}>
                <strong>Redux</strong>
              </span>
              ,{" "}
              <span style={{ color: "#87bf00" }}>
                <strong>Nodejs</strong>
              </span>
              ,{" "}
              <span style={{ color: "#31648D" }}>
                <strong>PostgresSQL</strong>
              </span>
              ,{" "}
              <span style={{ color: "#26c6f8" }}>
                <strong>Photoshop</strong>
              </span>
              ,{" "}
              <span style={{ color: "#F77903" }}>
                <strong>Illustrator</strong>
              </span>{" "}
              and various{" "}
              <span style={{ color: "#EC0B12" }}>
                <strong>Creative Suite</strong>
              </span>{" "}
              programs.
            </p>
            <br></br>
            <p>
              Apart from coding, My hobbies include cooking, DIY, and music. I
              love spending the rest of my time with my family or volunteering
              at my local church. I'm also the creator of machamacha Kids, a
              YouTube kids channel. Lastly, I believe that memes are the most
              effective way to communicate.
            </p>
            <div className="resume">
              <span>View My Resume</span>
            </div>
            <p></p>
            <div className="social">
              <div></div>
              <div>
                <i className="fab fa-linkedin fa-2x" id="linkedin"></i>
              </div>
              <div>
                <i className="fab fa-github-square fa-2x" id="github"></i>
              </div>
              <div>
                <i className="fab fa-facebook-square fa-2x" id="facebook"></i>
              </div>
              <div id="macha">
                <img
                  src="https://drive.google.com/uc?export=view&id=1qPms9dowwCBfgm0u-c0ZAecEuKphZuWT"
                  width="250"
                ></img>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer_Angle"></div>
      <div className="Footer">
        <div className="Footer_Inner">
          <div></div>
          <div className="Footer_Social">
            <Link to="/">
              <img
                src="https://drive.google.com/uc?export=view&id=1h5DdqUmUX-yectICeI-QW5-uLkHhSGTo"
                height="75"
                width="75"
                alt="logo"
                id="Footer_Social"
              />
            </Link>
          </div>
          <div>
            <p className="Footer_Menu">
              <strong>MENU</strong>
            </p>
            <p>About</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
          <div>
            <div>
              <i className="fab fa-linkedin-in fa-lg" id="Footer_Social"></i>{" "}
              &emsp;&emsp;
              <i className="fab fa-github fa-lg" id="Footer_Social"></i>{" "}
              &emsp;&emsp;
              <i className="fab fa-facebook fa-lg" id="Footer_Social"></i>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
