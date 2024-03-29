import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"HTML"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"CSS"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"JavaScript"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"React JS"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Java"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Kotlin"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"SQL"} progress={"50%"} width={"50%"} />
        <SkillsSection skill={"Web Design"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"UI/UX design"} progress={"40%"} width={"40%"} />
      </div>
    </div>
  );
}

export default AboutPage;
