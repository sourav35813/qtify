import React from "react";
import { Box, TextField } from '@mui/material'
// import LogoImage from '../../assets/Logo.png';

export default function Search() {
    return (
        <div id="searchdiv">
          <Box mb={4}>
        <TextField
          size="medium"
          type="text"
          name="search-box"
          placeholder="Search for music"
        //   value={props.searchTerm}
        //   onChange={props.handleSearch}
        />
        </Box>
     </div>
)
}

// import React from "react";
// import {ReactComponent as SearchIcon} from "../../assests/search-icon.svg"
// import styles from "./Search.module.css"

// const Search = ({ search }) => {
//     return (
//       <form className={styles.wrapper}>
//         <input className={styles.search} placeholder={search}></input>
//         <button className={styles.searchButton} type="submit">
//           <SearchIcon />
//         </button>
//       </form>
//     );
//   };
  
//   export default Search;