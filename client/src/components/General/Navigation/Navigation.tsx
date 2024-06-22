import React from "react";
import { Link } from "react-router-dom";

import Logo from "./../../../assets/images/logo.png";
import styles from "./Navigation.module.css";

const Navigation = () => {
  const brandStyle = {
    color: "$fff",
    textDecoration: "none",
    fontWidth: "bold",
    fontSize: "22px",
    display: "flex",
    alingItems: "center",
  };
  const logoText = {
    marginLeft: "10px",
  };
  return (
    <nav className={`${styles.navbar} container`}>
      <Link style={brandStyle} to={"/"}>
        <img src={Logo} alt="logo" />
        <span style={logoText}>ChatterBox</span>
      </Link>
    </nav>
  );
};

export default Navigation;
