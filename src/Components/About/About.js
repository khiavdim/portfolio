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
              My name is KhiavDim Lee.<br></br>Pronounced 'Kia' (the car brand)
              and the letter D.
            </p>
            <br></br>
            <p className="skills">
              I am a full stack web developer and graphic designer based in
              California. Before that, I was working as a medical biller because
              I thought coding was way too hard for my brain to handle. However,
              I am so glad that I took that leap. I became certified through
              DevMountain having completed their immersive web development
              program.
            </p>
            <br></br>
            <p>
              Apart from coding, you'd probably find me cooking, DIYing around
              the house, or shopping. I love spending the rest of my time with
              my family or volunteering at my local church. I'm also the creator
              of{" "}
              <a
                href="http://youtube.com/machamachakids/"
                target="new"
                className="skills"
              >
                <span style={{ color: "#E30E0E" }}>macha</span>
                <span style={{ color: "#0390ff" }}>macha</span>{" "}
                <span style={{ color: "#54A51E" }}>kids</span>
              </a>
              , a YouTube kids channel. Lastly, I believe that memes are the
              most effective way to communicate.
            </p>
            <div className="resume">
              <span>
                <i class="far fa-file">  </i>  View My Resume
              </span>
            </div>
            <p></p>
            <div className="social">
              <div></div>
              <div>
                <i className="fab fa-linkedin-in" id="linkedin">
                  <span>linkedin</span>
                </i>
              </div>
              <div>
                <i className="fab fa-github-alt" id="github">
                  <span>github</span>
                </i>
              </div>
              <div>
                <i className="fab fa-dribbble" id="dribbble">
                  <span>dribbble</span>
                </i>
              </div>
              <div>
                <i className="fab fa-facebook-f" id="facebook">
                  <span>facebook</span>
                </i>
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
            <p>Skills</p>
            <p>Contact</p>
          </div>
          <div>
            <div>
              <i className="fab fa-linkedin-in" id="Footer_Linked"></i>{" "}
              &emsp;&emsp;
              <i className="fab fa-github fa-lg" id="Footer_Social"></i>{" "}
              &emsp;&emsp;&emsp;
              <i className="fab fa-dribbble" id="Footer_Social"></i>{" "}
              &emsp;&emsp;&emsp;
              <i className="fab fa-facebook fa-lg" id="Footer_Social"></i>
            </div>
            <div>
              <i class="fas fa-phone-alt"></i> (650) 382-3258‬
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
