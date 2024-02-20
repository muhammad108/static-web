import React from "react";
import "./footer.css";
import Flogo from "../../assets/freelogo.avif"
function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-column">
          <img src={Flogo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem cupiditate qui at corporis, facere sapiente labore
            nesciunt omnis excepturi ipsa.
          </p>

        </div>
        <div className="footer-column">
          <h3>quick links</h3>
          <ul>
            <li>
              <a href="#">home</a>
            </li>
            <li>
              <a href="#">about monit</a>
            </li>
            <li>
              <a href="#">team</a>
            </li>
            <li>
              <a href="#">products</a>
            </li>
            <li>
              <a href="#">sentinel for shell pakistan</a>
            </li>
            <li>
              <a href="#">get quote</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>contact us</h3>
          <label htmlFor="">Email:</label>
          <p>info@monit.pk</p>
          <label htmlFor="">address:</label>
          <p>202, azayam plaza, shahr e faisal, karachi pakistan - 74000</p>
        </div>
        
      </footer> 
    </>
  );
}

export default Footer;
