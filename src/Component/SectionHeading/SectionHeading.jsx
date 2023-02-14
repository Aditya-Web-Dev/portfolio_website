import React from "react";
import "./SectionHeading.css";

const SectionHeading = (props) => {
  return (
    <div>
      <h1 className={props.class + " SectionHeading"}>{props.title}</h1>
    </div>
  );
};

export default SectionHeading;
