import React from "react";
import styled from "styled-components";

const Pulse = styled.div`
    transition: transform 0.3s ease-in:
    
    width: 200px;
    max-height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 25px;
    box-shadow: 0px 1px 6px -2px black;
    background: silver;
    color: white;

    &:hover {
        transform: translateY(-5px) scale(1.25);
    }
    `;

const Card = props => {
    return(
        <Pulse className="card" >
            <h2>Name: {props.name}</h2>
            <h3>Eye-Color: {props.eyeColor}</h3>
            <h3>Gender: {props.gender}</h3>
            <h3>Hair Color: {props.hairColor}</h3>
        </Pulse>
    );
};
export default Card;