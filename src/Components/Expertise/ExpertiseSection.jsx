import React from "react";
import Card from "../../Component/Card/Card";
import SectionHeading from "../../Component/SectionHeading/SectionHeading";
import "./ExpertiseSection.css";

const ExpertiseSection = () => {
  return (
    <div className="ExpertiseSection">
      <SectionHeading title="MY EXPERTISE" class="colorTwo" />
      <div className="cardGroup">
        <Card
          id="1"
          title="Software Developer"
          para="Experienced in both functional and OOP: JavaScript"
        />
        <Card
          id="1"
          title="FULL STACK DEV, React"
          para="Over 2 years of development experience in HTML, CSS, JS, React frameworks"
        />
        <Card
          id="1"
          title="MERN STACK DEVELOPER"
          para="Skilled in developing web app and websites with modern ui/ux  by using the best technologies"
        />
      </div>
    </div>
  );
};

export default ExpertiseSection;
