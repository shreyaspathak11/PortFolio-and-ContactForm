import React from 'react';
import leetcode from '../assets/LeetCode.png';
import hackerrank from '../assets/hackerrank.png';
import codeforces from '../assets/Codeforces.png';

const CodingProfiles = () => {
  const profiles = [
    {
      name: 'LeetCode',
      icon: leetcode, 
      link: 'https://leetcode.com/ShreyasPathak11/',
    },
    {
      name: 'CodeForces',
      icon: codeforces, 
      link: 'https://codeforces.com/profile/shreyas_11',
    },
    {
      name: 'HackerRank',
      icon: hackerrank, 
      link: 'https://www.hackerrank.com/profile/shreyaspathak_o1',
    },
  ];

  return (
    <section id="coding-profiles">
        <p className="section__text__p1">I'm interested in Problem Solving</p>
      <h1 className="title">Coding Profile</h1>
      <div className="coding-profiles-container">
        {profiles.map((profile, index) => (
          <div className="coding-profile-box" key={index} onClick={() => window.open(profile.link)}>
            <img src={profile.icon} alt={`${profile.name} Icon`} className="profile-icon" />
            <p className="profile-name">{profile.name}</p>

          </div>
        ))}
      </div>
    </section>
  );
};

export default CodingProfiles;
