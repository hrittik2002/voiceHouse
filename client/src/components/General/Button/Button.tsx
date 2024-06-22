import React from "react";
import styles from "./Button.module.css";
import ArrowForward from "./../../../assets/images/arrow-forward.png";
import { ButtonInterface } from "../../../interfaces/button.interface";

const Button: React.FC<ButtonInterface> = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      <span>{children}</span>
      <img src={ArrowForward} alt="arrow" className={styles.arrow} />
    </button>
  );
};

export default Button;
