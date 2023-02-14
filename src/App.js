import React from "react";
import TitleSection from "./Components/Title/Title";
import About from "./Components/About/About";
import ExpertiseSection from "./Components/Expertise/ExpertiseSection";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TitleSection />
      <About />
      <ExpertiseSection />
    </div>
  );
}
