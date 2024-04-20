import { ClassNames } from "@emotion/react";
import Logo from "./Logo";
import styles from "./styles.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Logo />
        </div>
    )
}

export default Navbar;