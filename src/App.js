import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home"
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Routes, Route } from "react-router-dom"
import { Album } from "./pages/Album"
import Navbar from './components/navbar/Navbar';
import { NowPlaying } from './components/nowplaying/NowPlaying';

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
    fontFamily:
      '"Poppins"'
  },
});

function App() {
  return <>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/album/:albumid" element={<Album />} />
      </Routes>
      <div style={{ backgroundColor: "white", height: '1px' }}><br /></div>
      <NowPlaying />
    </ThemeProvider>
  </>
}

export default App;
