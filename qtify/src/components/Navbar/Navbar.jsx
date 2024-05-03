import React from "react";
import Button from "../Button/Button";
import Search from "../Search/Search";
import styles from "./NavBar.module.css";
import Logo from "../Logo/Logo";
// import LogoImage from "../../assets/Logo.png";

export default function Navbar() {
  return (
    <div>
      <nav className={styles.navbar}>
        <Logo />
        <Search search={"Search a song of your choice"} />
        <Button children="Give Feedback" />
      </nav>
    </div>
  );
}
