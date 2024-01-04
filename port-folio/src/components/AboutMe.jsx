import React from 'react';

import graduate from '../assets/graduated.png';
import highschool from '../assets/highschool.png';
import school from '../assets/school.png';

const AboutMe = () => {
  return (
    <div className="about">
  <section id="about">
    <p className="section__text__p1">Here are my </p>
    <h1 className="title">Educational Qualifications</h1>

    <div className="about-containers">
      <div className="education-box" id="graduate-school">
        <div className="education-info">
          <img src={graduate} className="about-pic" alt="graduate" />
          <h2>Jadavpur University, Kolkata</h2>
          <p className="degree">Bachelors' of Engineering</p>
          <p className="date">2021 - 2025</p>
          <p className="stream">Chemical Engineering</p>
          <p className="gpa">GPA: 7.89</p>
        </div>
      </div>

      <div className="education-box" id="high-school">
        <div className="education-info">
          <img src={highschool} className="about-pic" alt="highschool" />
          <h2>Amrita Vidyalayam, Durgapur</h2>
          <p className="date">2018 - 2020</p>
          <p className="class">CBSE XII</p>
          <p className="stream">Science</p>
          <p className="gpa">91.34%</p>
        </div>
      </div>

      <div className="education-box" id="middle-school">
        <div className="education-info">
          <img src={school} className="about-pic" alt="school" />
          <h2>Amrita Vidyalayam, Durgapur</h2>
          <p className="date">2005 - 2018</p>
          <p className="class">CBSE X</p>
          <p className="gpa">88%</p>
        </div>
      </div>
    </div>
  </section>
</div>
  );
};

export default AboutMe;
