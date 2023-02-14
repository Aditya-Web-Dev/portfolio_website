import React, { useState } from "react";
import SectionHeading from "../../Component/SectionHeading/SectionHeading";
import SectionParagraph from "../../Component/SectionParagraph/SectionParagraph";
import "./About.css";

const About = () => {
  const title = "About Me";

  const [imgSource, setImgSource] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
  );

  const imgHover = () => {
    setImgSource(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png"
    );
  };

  const imgNotHover = () => {
    setImgSource(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
    );
  };

  return (
    <div className="AboutSection">
      <div className="AboutLeft">
        <SectionHeading class="colorOne" title={title} />
        <SectionParagraph content="I am Aditya Chaurasia, I am specialized in JavaScript ES6, Tailwind CSS, React, Node js , Express and MongoDB" />
        <SectionParagraph content="I believe that great work comes from building great relationships and drinking coffee." />
      </div>
      <div className="AboutRight">
        <img
          src={imgSource}
          alt="react_img"
          onMouseOver={imgHover}
          onMouseOut={imgNotHover}
        />
      </div>
    </div>
  );
};

export default About;
