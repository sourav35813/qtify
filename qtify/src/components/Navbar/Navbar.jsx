import Logo from '../Logo/Logo';
import Search from '../Search/Search.Jsx';
import styles from './navbar.module.css';

function Navbar({ searchData }) {
    return (
        <nav className={styles.navbar}>
        {/* <Link to='/'> */}
            <Logo />
            <Search />
        {/* </Link> */}
        </nav>
    )
}

export default Navbar;



// import React from "react";
// // import Button from "../Button/Button";
// // import Search from "../Search/Search";
// import styles from './navbar.modules.css'
// // import LogoImage from "../../assests/logo.png"

// export default function Navbar(){
//     return(
//         <div>
//             <nav className={styles.navbar}>
//                 <divs className={styles.logoDiv} >
//                     {/* <img src={LogoImage} alt="logo" width={67}/> */}
//                     <Logo />
//                     </div>
//                 {/* <Search search={"Search a song of your choice"}/> */}
//                 {/* <Button children="Give Feedback"/> */}
//             </nav>
//         </div>
//     )
// }