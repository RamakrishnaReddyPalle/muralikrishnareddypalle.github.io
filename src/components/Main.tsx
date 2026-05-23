import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import portfolioImage from '../assets/images/portfolio_dp.jpg';  
import '../assets/styles/Main.scss';

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={portfolioImage} alt="Avatar" /> {/* Use imported path */}
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/RamakrishnaReddyPalle" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/p-rama-krishna-reddy-038b30246/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Ramakrishna Reddy Palle</h1>
          <p>AI ML Engineer</p>
          <div className="mobile_social_icons">
            <a href="https://github.com/RamakrishnaReddyPalle" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/p-rama-krishna-reddy-038b30246/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
