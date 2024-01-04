import profilePic from '../assets/profile.jpg'; // Adjust the path accordingly
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import Youtube from '../assets/youtube.png';
import Instagram from '../assets/instagram.png';


const Profile = () => {
  return (
    
    <div className="back-ground">
    <section id="profile" className="profile">
      <div className="section__pic-container">
        <img 
        src={profilePic}
        alt="Shreyas Pathak"
        className="profile-pic"
        />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm </p>
        <h1 className="title">Shreyas Pathak</h1>
        <p className="section__text__p2">an Aspiring Developer</p>
        <div className="btn-container">
          <button className="btn project-btn" onClick={() => window.open('https://drive.google.com/file/d/1GWNMoDqqo9ABnd08sDJAYsfFXRrY4hwt/view?usp=drive_link')}>
            Resume
          </button>
          <button className="btn project-btn" onClick={() => window.open('https://contact-form-client.vercel.app/')}>
            Contact
          </button>
        </div>
        
        <div id="socials-container" className="socials-container">
          <img
            src={linkedin}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => window.open("https://www.linkedin.com/in/shreyas-pathak-11s/")}
          />
          <img
            src={github}
            alt="My Github profile"
            className="icon"
            onClick={() => window.open("https://github.com/shreyaspathak11")}
            />
          <img
            src={Youtube}
            alt="My Youtube profile"
            className="icon"
            onClick={() => window.open("https://www.youtube.com/@shreyaspathak1267")}
          />
          <img
            src={Instagram}
            alt="My Instagram profile"
            className="icon"
            onClick={() => window.open("https://www.instagram.com/capturing.my.journey11")}
          />
        </div> 
          
        
      </div>
    </section>

    </div>
  );
};

export default Profile;
