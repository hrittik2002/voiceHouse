import React from "react";

import styles from "./Home.module.css";
import Logo from "./../../../assets/images/logo.png";
import ArrowForward from "./../../../assets/images/arrow-forward.png";
import { Link } from "react-router-dom";
import Card from "../../General/Card/Card";
import Button from "../../General/Button";

const Home = () => {
  const signInLinkStyle = {
    color: "#0077ff",
    fontWeight: "bold",
    textDecoration: "none",
    marginLeft: "10px",
  };
  const startRegister = () => {

  }
  return (
    <div className={styles.cardWrapper}>
      <Card title="Welcome to ChatterBox!" icon={Logo}>
        <p className={styles.text}>
          We’re working hard to get Codershouse ready for everyone! While we
          wrap up the finishing youches, we’re adding people gradually to make
          sure nothing breaks
        </p>
        <div>
          <Button onClick={startRegister}>Get your username</Button>
        </div>
        <div className={styles.signinWrapper}>
          <span className={styles.hasInvite}>Have an invite text?</span>
          <Link style={signInLinkStyle} to={"/signIn"}>
            Sign In
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default Home;
