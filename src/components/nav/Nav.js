import { NavLink } from "react-router-dom";
import Video from "../logo/Video";
import "./Nav.scss";

const Nav = () => {

  return (
      <div className="nav">
        <div className="nav-top">
          <div className="nav-logo nav-link" id="logo">
            <Video />
          </div>
          <div className="nav-links">
            <div>
              <NavLink to="/portfolioAD115">
                <div id="accueil" className="nav-link">
                  Accueil
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/About">
                <div id="about" className="nav-link">
                  À propos
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/Portfolio">
                <div id="portfolio" className="nav-link">
                  Portfolio
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/Contact">
                <div id="contact" className="nav-link">
                  Contact
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Nav;
