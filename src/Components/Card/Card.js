import React from 'react'
import './Card.css'

const Card = ({emoji, heading, detail, color, button}) => {
  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <a href={button}>
      <button className="c-button" >View Credential</button>
      </a>
    </div>
  );
};

export default Card;