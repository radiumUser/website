import React, { useEffect, useState } from "react";
import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from "../../data/portfolio.json";

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState("text-animate");
    const [cardClass, setCardClass] = useState("dm-flip-card starting-animation");
    useEffect(() => {
        const changingLetterClass = setTimeout(() => {
            setLetterClass("text-animate-hover");
            setCardClass("dm-flip-card");
        }, 4000);

        return () => clearTimeout(changingLetterClass);
    }, []);

    const renderPortfolio = (portfolio) => {
        return portfolio.map((project, index) => {
            return (
                <>
                    <div class={cardClass}>
                        <div class="dm-front-card">
                            <div className="project-box">
                                <h2>{project.title}</h2>
                                <h2>{project.application}</h2>
                            </div>
                        </div>

                        <div class="dm-back-card">
                            <div key={`${index}_6`} className="image-box">
                                <img src={project.cover} alt={`${project.title} Image`} className="portfolio-image" />
                                <a href="" className="view-button">
                                    View
                                </a>
                            </div>
                        </div>
                    </div>
                </>
            );
        });
    };
    return (
        <>
            <div className="container portfolio-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters strArray={"Portfolio".split("")} index={15} letterClass={letterClass}></AnimatedLetters>
                    </h1>
                    <div className="image-container">{renderPortfolio(portfolioData.portfolio)}</div>
                </div>
            </div>
            <Loader type="pacman"></Loader>
        </>
    );
};

export default Portfolio;
