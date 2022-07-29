import React from 'react';

const IntroductionSection = () => (
  <section className="section section-introduction">
    <h1 className="header header--primary">MERN Stack Developer</h1>
    <p className="section-introduction__about-yourself">
      I’m full stack developer for 4 years. Currently searching for Software Developer Job. One
      semester away from graduating as a computer security specialist. Like to play CTFs.
    </p>

    <div className="curve-wrapper">
      <svg />
    </div>
    <div className="section-introduction__set-of-rhombs" />
    <div className="section-introduction__set-of-rhombs" />
    <div className="broken-curve" />
    <div className="broken-curve" />
    <div className="broken-curve" />

    <div className="vertical-group">
      <div className="profile section-introduction__profile">
        <span className="profile__name">Nikita</span>
        <span className="profile__mern">MERN</span>
        <span className="profile__avatar">:)</span>
      </div>
      <div className="section-introduction__emphasizing" />
    </div>

    <span className="section-introduction__motto">Performance. Readability. Tested.</span>
  </section>
);

export default IntroductionSection;
