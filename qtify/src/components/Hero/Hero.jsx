import React from "react";
import styles from "./Hero.module.css";
import HeroImage from "../../assets/vibrating-headphone 1.svg";

export default function App() {
  return (
    <div>
      <section className={styles.Hero}>
        <div className={styles.HeroTitle}>
          <h1>100 Thousand Songs, ad-free</h1>
          <h1>Over thousands podcast episodes</h1>
        </div>
        <img className={styles.HeroImage} src={HeroImage} alt="headphone" />
      </section>
    </div>
  );
}
