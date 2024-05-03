import LogoImage from "../../assets/Logo.png";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    // <div id="logodiv">
    <div className={styles.logodiv}>
      <img src={LogoImage} alt="logo" />
    </div>
  );
}
