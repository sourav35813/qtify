import LogoImage from "../../assets/logo.png";
import styles from "./styles.module.css";
const Logo = () => {
    return <>
    <img style={{paddingLeft:'1px'}} className={styles.logo} src={LogoImage} />
    </>
}

export default Logo;