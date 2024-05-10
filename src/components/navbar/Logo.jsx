import LogoImage from "../../assets/logo.png";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom"
const Logo = () => {
    const navigate = useNavigate();
    return <>
        <img className={styles.logo} src={LogoImage} onClick={() => navigate(`/`)} style={{ cursor: 'pointer' }} />
    </>
}

export default Logo;