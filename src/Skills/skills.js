import React from "react";
import "./skills.css";
import UIDesign from "../assets/ui-design.png";
import WebDesign from "../assets/website-design.png";
import AppDesign from "../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        "I am a skilled and passionate web designer with experience in creating
        visually appealing and user-friendly websites. I have a strong
        understanding of design and a keen eye for detail. Proficient in HTML,
        CSS, and JavaScript, as well as design software such as Adobe Photoshop
        and Illustrator."
      </span>
    <div className="skillsBars">
      <div className="skillBar">
        <img src={WebDesign} alt="Web Design" className="SkillsBarImg" />
        <div className="skillBarText">
          <h2>Web Design</h2>
          <p>Proficient in creating visually appealing and user-friendly websites using HTML, CSS, and JavaScript.</p>
        </div>
      </div>
      <div className='skillBar'>
        <img src={UIDesign} alt="UI Design" className='SkillsBarImg'/>
        <div className='skillBarText'>
            <h2>UI Design</h2>
            <p>Skilled in designing intuitive and engaging user interfaces with a focus on user experience.</p>
        </div>
      </div>
      <div className='skillBar'>
        <img src={AppDesign} alt="App Design" className='SkillsBarImg'/>
        <div className='skillBarText'>
            <h2>App Design</h2>
            <p>Experienced in creating functional and visually appealing mobile app designs for various platforms.</p>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
