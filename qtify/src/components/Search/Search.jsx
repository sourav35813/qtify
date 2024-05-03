import { ReactComponent as SearchIcon } from "../../assets/Search-icon.svg";
import styles from "../../css/components/Search/Search.module.css";

const Search = ({ search }) => {
  return (
    <form className={styles.wrapper}>
      <input className={styles.search} placeholder={search}></input>
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;

// import searchLogo from "../../assets/Search-icon.svg";
// import styles from "../../css/components/Logo/Logo.module.css";

// export default function Searchbox() {
//   return (
//     <>
//       <div className="searchbox">
//         <input
//           type="text"
//           className="search"
//           placeholder="Search a album of your choice"
//         />
//         <button className="searchbutton">
//           <img src={searchLogo} alt="logo" className="searchLogo" />
//         </button>
//       </div>
//       {/* <a href="../../"></a> */}
//     </>
//   );
// }

// import React from "react";
