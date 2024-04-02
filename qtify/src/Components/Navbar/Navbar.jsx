import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo";
import SearchBox from "../Searchbox/SearchBox";
import FeedbackButton from "../FeedbackButton/FeedbackButton";

function Navbar(){
    const placeholder = "Search a album of your choice"
    return(
        <nav className={styles.navbar}>
            <a href="/">
                <Logo/>
            </a>
            <SearchBox placeholder={placeholder}/>
            <FeedbackButton/>
        </nav>
    )
}

export default Navbar;