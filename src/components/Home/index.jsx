import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./index.scss";
import LogoTitle from "../../assets/images/logo-s.png";
import AnimatedLetters from "../AnimatedLetters";
import Logo from "./Logo";
import Loader from "react-loaders";

const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate");

    useEffect(() => {
        const changeHoverClass = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 5000);
        return () => {
            clearTimeout(changeHoverClass);
        };
    }, []);

    const hoverFunction = (event) => {
        console.log("entered");
        let logo = document.querySelector(".logo");
        let svg = document.querySelector(".p-svg g");
        let textLogo = document.querySelector(".textLogo");
        svg.classList.add("animate__animated");
        svg.classList.add("animate__rubberBand");
        logo.classList.add("animate__animated");
        logo.classList.add("animate__rubberBand");
        textLogo.classList.add("animate__animated");
        textLogo.classList.add("animate__rubberBand");
        textLogo.style.animation = "rubberBand 1s forwards";
    };
    const hoverFunctionOut = (event) => {
        console.log("entered");
        let logo = document.querySelector(".logo");
        let svg = document.querySelector(".p-svg g");
        let textLogo = document.querySelector(".textLogo");
        svg.classList.remove("animate__animated");
        svg.classList.remove("animate__rubberBand");
        logo.classList.remove("animate__animated");
        logo.classList.remove("animate__rubberBand");
        textLogo.classList.remove("animate__animated");
        textLogo.classList.remove("animate__rubberBand");
        textLogo.style.animation = "none";
    };

    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"Hi, I Exist.".split("")}
                            index={10}
                        ></AnimatedLetters>
                        <br />
                        <span className={`${letterClass} _22`}>I</span>
                        <span className={`${letterClass} _22`}>'m</span>
                        <img
                            className="textLogo"
                            onMouseEnter={hoverFunction}
                            onMouseOut={hoverFunctionOut}
                            src={LogoTitle}
                            alt="developer"
                        />
                        <AnimatedLetters letterClass={letterClass} strArray={"rajwal".split("")} index={24}></AnimatedLetters>
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={"a web developer".split("")}
                            index={30}
                        ></AnimatedLetters>
                    </h1>
                    <h2>Frontend Developer</h2>
                    <Link to="/contact" className="flat-button">
                        contact me
                    </Link>
                </div>
                <Logo></Logo>
            </div>
            <Loader type="pacman"></Loader>
        </>
    );
};

export default Home;
