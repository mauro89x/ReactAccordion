import React, { Component } from 'react';

const Bellow = ({ title, text, handleChange, index, currentIndex }) => (
    <div style={bellowContainer}>
        <a href="#" style={titleStyle} onClick={() => handleChange(index)}>{title}</a>
        {
            currentIndex === index &&
                <p style={bellowText}>{text}</p>
        }
    </div>
);

const titleStyle = {
    cursor: "pointer",
};

const bellowContainer = {
    border: "1px solid rgba(0,0,0,.125)",
    padding: 10,
    backgroundColor: "rgba(0,0,0,.03)",
    marginTop: 4
};

const bellowText = {
    backgroundColor: "white",
    padding: 20
};

export default Bellow;
