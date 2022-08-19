import React from "react";
import Style from './Styles/Card.module.css';
import { Link } from "react-router-dom";

export default function Card({ img, max, min, name, onClose, id }) {
  // acá va tu código
   return (
    <div className={Style.card}>
      <Link to={`/ciudad/${id}`} >
          <h2 className={Style.hname}> {name}</h2>
      </Link>
      <button onClick={onClose} className={Style.cardBtn}> X </button>
      <div className={Style.datos}>
        <div>
          <p>MIN</p>
          <p>{min}°c</p>
        </div>
        <div>
          <p>MAX</p>
          <p>{max}°c</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt={`img-${name}`} />
      </div>
    </div>
  );
};