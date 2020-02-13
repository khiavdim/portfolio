import React from "react";
import "./About.css";

export default function About() {
  return (
    <div className="About">
      <div className="About_Header">About Me</div>
      <div className="About_Info">
        <div><div className="About_Left">Photo</div></div>
        <div className="About_Right">
        <p>
          My name is KhiavDim Lee. Pronounced like 'Kia' (the car brand) and the letter D.</p><br></br>
          <p>I am a full stack web developer and graphic designer based in Fresno, California. I became certified through DevMountain having completed their 13-week immersive web development program in Utah. I am excited to start my career as a full stack web developer and to expand my knowledge while helping others.
        </p><br></br>
        <p>
          Apart from coding, I love to cook and also love music, especially soul and gospel. I spend the rest of my time with my family (probably shopping) or volunteering at my local church. I'm also the creator of <a href="http://youtube.com/machamachakids/">Machamacha Kids</a>, a YouTube channel to help kids learn Hmong.
          </p><br></br>
        <p>Lastly, I believe that memes are the most effective way to communicate.
        </p>
        </div>
      </div>
    </div>
  );
}
