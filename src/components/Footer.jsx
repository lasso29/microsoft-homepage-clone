import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-first-container">
          <h2>Follow Microsoft</h2>

          <div className="footer-socialmedia-icon">
            <div className="twitter">
              <i className="fa-brands fa-x-twitter"></i>
            </div>

            <div className="linkedin">
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </div>
        </div>

        <div className="footer-second-container">
          <div className="list-container">

            <div className="list-container-one">
              <h2>What's New</h2>
              <ul>
                <li><a href="">Explore Copilot</a></li>
              </ul>
            </div>

            <div className="list-container-two">
              <h2>Microsoft Store</h2>

              <ul>
                <li><a href="">Account profile</a></li>
                <li><a href="">Returns</a></li>
                <li><a href="">Order tracking</a></li>
              </ul>
            </div>

            <div className="list-container-three">
              <h2>Education</h2>

              <ul>
                <li><a href="">Microsoft in education</a></li>
                <li><a href="">Devices for education</a></li>
                <li><a href="">Microsoft Teams for Education</a></li>
                <li><a href="">Microsoft 365 Education</a></li>
                <li><a href="">Office Education</a></li>
                <li><a href="">Educator training and development</a></li>
                <li><a href="">Deals for students and parents</a></li>
                <li><a href="">Azure for students</a></li>
              </ul>
            </div>

            <div className="list-container-four">
              <h2>Business</h2>

              <ul>
                <li><a href="">Microsoft AI</a></li>
                <li><a href="">Microsoft Security</a></li>
                <li><a href="">Azure</a></li>
                <li><a href="">Dynamics 365</a></li>
                <li><a href="">Microsoft 365</a></li>
                <li><a href="">Microsoft Advertising</a></li>
                <li><a href="">Microsoft Copilot</a></li>
                <li><a href="">Microsoft Teams</a></li>
              </ul>
            </div>

            <div className="list-container-five">
              <h2>Developer & IT</h2>

              <ul>
                <li><a href="">Microsoft Developer</a></li>
                <li><a href="">Documentation</a></li>
                <li><a href="">Microsoft Learn</a></li>
                <li><a href="">Microsoft Tech Community</a></li>
                <li><a href="">Microsoft Marketplace</a></li>
                <li><a href="">Microsoft Power Platform</a></li>
                <li><a href="">Visual Studio</a></li>
              </ul>
            </div>

            <div className="list-container-six">
              <h2>Company</h2>

              <ul>
                <li><a href="">Careers</a></li>
                <li><a href="">About Microsoft</a></li>
                <li><a href="">Company news</a></li>
                <li><a href="">Investors</a></li>
                <li><a href="">Sustainability</a></li>
              </ul>
            </div>

          </div>
        </div>


        <div className="footer-third-container">
          <div className="left-container">
            <ul>
              <li><a href="">English (Nigeria)</a></li>
              <li><a href="">Your Privacy Choices</a></li>
              <li><a href="">Consumer Health Privacy</a></li>
            </ul>
          </div>


          <div className="right-container">
            <ul>
              <li><a href="">Contact Microsoft</a></li>
              <li><a href="">Privacy</a></li>
              <li><a href="">Term of Use</a></li>
              <li><a href="">Trademarks</a></li>
              <li><a href="">About our ads</a></li>
              <li><a href="">© Microsoft 2026</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
