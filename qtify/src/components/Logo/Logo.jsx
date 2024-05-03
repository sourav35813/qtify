// import React from "react";
import LogoImage from "../../assets/Logo.png";
import styles from "../../css/components/Logo/Logo.module.css";

// * jdjdjd
// ! ndjdjdj
// ? dddd ?
// TODO:
// @parsam myParam The PromiseRejectionEvent.

export default function Logo() {
  return (
    // <div id="logodiv">
    <div className={styles.logo}>
      <img src={LogoImage} alt="logo" width={67} />
    </div>
  );
}
