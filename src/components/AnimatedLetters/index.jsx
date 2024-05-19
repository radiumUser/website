import "./index.scss";

import React from "react";

const AnimatedLetters = ({ letterClass, strArray, index }) => {
    return (
        <>
            {strArray.map((char, i) => {
                return (
                    <span key={char + i} className={`${letterClass} _${i + index}`}>
                        {char}
                    </span>
                );
            })}
        </>
    );
};

export default AnimatedLetters;
