import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aadityaraj Singh Chouhan</span>
            from <span className="purple"> Bhopal, India.</span>
            <br />
            At present, I am a Pre - Final Year undergraduate pursuing a B.Tech at the School Of Information Technology,RGPV in branch COMPUTER SCIENCE AND BUSINESS SYSTEM. 
            <br />
            <br />
            As of now, I am learning data structure, algorithms, and Web development,
             and I enjoy learning new technologies.  C++,Java, HTML/CSS, and Javascript are the technologies
             I worked on.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
            <li className="about-activity">
              <ImPointRight /> Sleeping
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Learn, grow, achieve!"{" "}
          </p>
          <footer className="blockquote-footer">Aadityaraj</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
