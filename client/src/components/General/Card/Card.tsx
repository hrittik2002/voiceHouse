import React from "react";

import style from "./Card.module.css";
import { CardInterface } from "../../../interfaces/card.interface";

const Card : React.FC<CardInterface> = ({title , icon , children}) => {
  return (
    <div className={style.card}>
      <div className={style.headingWrapper}>
        <img src={icon} alt="logo" />
        <h1>{title}</h1>
      </div>
      {children}
    </div>
  );
};

export default Card;
