import React from "react";
import Heading from "../CardHeading/CardHeading";
import Paragraph from "../SectionParagraph/SectionParagraph";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <Heading cardsTitle={props.title} />
      <Paragraph content={props.para} />
    </div>
  );
};

export default Card;
