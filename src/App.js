// src/App.js
import React from 'react';
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import { Box } from '@mui/material';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const darkTheme = createTheme({
  // ... your theme definition
  palette: {
    mode: 'dark',
    primary: { main: '#9c27b0' },
    background: { default: '#121212', paper: '#121212' },
  },
  typography: { fontFamily: 'Roboto, Arial, sans-serif' },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      
      <Navbar />

      <main>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        
      </main>
    </ThemeProvider>
  );
}

export default App;