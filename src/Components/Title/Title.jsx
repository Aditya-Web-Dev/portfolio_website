import React from "react";
import TitleHeading from "../../Component/TitleHeading/Heading";
import TitleSideBars from "../../Component/TitleSideBars/TitleSideBars";
import "./Title.css";

const TitleSection = () => {
  return (
    <div className="TitleSection">
      <TitleSideBars class="leftSideBar" />
      <TitleSideBars class="rightSideBar" />
      <div className="instagramSocial">
        <p>
          Follow me on{" "}
          <span role="img" aria-label="pointing">
            👉
          </span>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.instagram.com/potato.programmer/"
          >
            Instagram
          </a>
        </p>
      </div>
      <TitleHeading />
    </div>
  );
};

export default TitleSection;
