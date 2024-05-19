import "./index.scss";
import React, { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCss3, faGit, faGitAlt, faHtml5, faJsSquare, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";

const About = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const nameArray = ["A", "b", "o", "u", "t", " ", "M", "e"];

    useEffect(() => {
        const changeLetterClass = setTimeout(() => {
            setLetterClass("text-animate-hover");
        }, 4000);

        return () => {
            clearTimeout(changeLetterClass);
        };
    });
    return (
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters strArray={nameArray} index={15} letterClass={letterClass}></AnimatedLetters>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae temporibus et modi hic laboriosam
                        maxime assumenda, iusto unde accusamus, eos atque odit consequuntur impedit illum.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facilis animi deserunt repudiandae illum
                        quisquam temporibus, velit maiores rem veniam libero suscipit amet nostrum nulla, sed adipisci est ad
                        natus commodi. Sit reiciendis in ullam perspiciatis.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, nobis. Aspernatur placeat aperiam, ab
                        dignissimos quo sapiente est unde amet corporis commodi quos.
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529"></FontAwesomeIcon>
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9"></FontAwesomeIcon>
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"></FontAwesomeIcon>
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4"></FontAwesomeIcon>
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4DU8"></FontAwesomeIcon>
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faSass} color="#DD0031"></FontAwesomeIcon>
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman"></Loader>
        </>
    );
};

export default About;
