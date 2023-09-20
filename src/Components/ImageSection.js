import React from "react";
import about from "../img/About.png";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>
          I am<span> Trond Einar Eriksen</span>
        </h4>
        <p className="about-text">
          I dont know what to write about me, but i love Lorem Ipsum, so here
          are some beautiful Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book.
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Trond Einar Eriksen</p>
            <p>: 25</p>
            <p>: Norwegian</p>
            <p>: Norwegian, English, German</p>
            <p>: Vogts gate 43, 0474 Oslo, Norway</p>
            <p>: Lorem Ipsum</p>
          </div>
        </div>
        <a href="CV.docx" download="">
          <button className="btn">Download CV</button>
        </a>
      </div>
    </div>
  );
}

export default ImageSection;
