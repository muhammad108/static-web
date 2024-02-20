import "./navbar.css";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import logo from "../../assets/freelogo.avif";
import backgroundimg from "../../assets/backgroundimg.avif";

const Navbar = () => {
  return (
    <>
      <div className="hero-section">
        <nav className="navbar">
          <div className="container-fluid">
            <img src={logo} className="navbar-logo" alt="" />
            <div className="nav-icons">
              <div className="menu-icons">
                <LuMenu />
              </div>
              <div className="twitter-icons">
                <RiTwitterXLine />
              </div>
              <div className="linkedin-icons">
                <FaLinkedinIn />
              </div>
            </div>
          </div>
        </nav>
        <div className="image-container">
          <img src={backgroundimg} alt="" />
          <div className="image-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              perspiciatis.
            </p>
            <button type="button">get a quote</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
