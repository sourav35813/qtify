// import React from "react";
import LogoImage from '../../assets/Logo.png';
import styles from './Logo.module.css';

export default function Logo() {
    return (
        // <div id="logodiv">
        <div className={styles.logo}>
    <img src={LogoImage} alt="logo" width={67} />
     </div>
)
}