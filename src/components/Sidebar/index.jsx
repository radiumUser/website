import React from "react";
import "./index.scss";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faHome, faSuitcase, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Sidebar = () => {
    const hoverFunction = (event) => {
        console.log("entered");
        let logo = document.querySelector(".logo");

        logo.classList.add("animate__animated");
        logo.classList.add("animate__rubberBand");
    };
    const hoverFunctionOut = (event) => {
        console.log("entered");
        let logo = document.querySelector(".logo");

        logo.classList.remove("animate__animated");
        logo.classList.remove("animate__rubberBand");
    };
    return (
        <div className="nav-bar">
            <Link className="logo" to="/">
                <img onMouseEnter={hoverFunction} onMouseOut={hoverFunctionOut} src={LogoS} alt="logo" />
                {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
            </Link>

            <nav>
                <NavLink exact="true" activeclassname="active" to="/" className="home-link">
                    <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" to="/about" className="about-link">
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" to="/portfolio" className="portfolio-link">
                    <FontAwesomeIcon icon={faSuitcase}></FontAwesomeIcon>
                </NavLink>
                <NavLink exact="true" to="/contact" className="contact-link">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </NavLink>
            </nav>

            <ul>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/">
                        <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.github.com/">
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
