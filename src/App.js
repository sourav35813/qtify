import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom"
import { Album } from "./pages/Album"
import Navbar from './components/navbar/Navbar';
import { NowPlaying } from './components/nowplaying/NowPlaying';
import { CurrentSongContext } from './components/contexts/ContextForCurrentSong';
import { useState } from 'react';

// Define custom theme
const theme = createTheme({
  palette: {
    primary: {
      900: '#016A00',
      800: '#028904',
      700: '#009B12',
      600: '#00AC20',
      500: '#01BD2B',
      400: '#35C94B',
      300: '#65D36E',
      200: '#C1ECC2',
      100: '#C1ECC2',
      50: '#E6F7E5'
    },
    secondary: {
      main: '#FFFFFF',
    },
    customBlack: {
      main: '#121212',
    },
    customWhite: {
      main: '#FFFFFF',
    }
  },
  typography: {
    fontFamily: '"Poppins"',
    body1: {
      fontSize: '0.9rem',
      '@media (min-width:800px)': {
        fontSize: '1rem'
      }
    },
    caption: {
      fontSize: '0.7rem',
      '@media (min-width:800px)': {
        fontSize: '0.8rem'
      }
    }
  },
});

function App() {
  //for context
  const [currentSong, setCurrentSong] = useState({
    image: "https://images.pexels.com/photos/3464632/pexels-photo-3464632.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    songTitle: "Love Hangover",
    albumTitle:"Motherly Highlight",
  });
  return <>
    <ThemeProvider theme={theme}>
      <CurrentSongContext.Provider value={{currentSong, setCurrentSong}}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/album/:albumid" element={<Album />} />
        </Routes>
        <div style={{ backgroundColor: "white", height: '1px' }}><br /></div>
        <NowPlaying />
      </CurrentSongContext.Provider>
    </ThemeProvider>
  </>
}

export default App;
