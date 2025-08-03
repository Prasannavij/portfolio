// src/components/Home.jsx
import React from 'react';
import Spline from '@splinetool/react-spline';
import { Box, Typography, Button, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TypeAnimation } from 'react-type-animation'; // <-- Import the animation component

const Home = () => {
  return (
    <section id="home">
      <Box 
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pt: { xs: 8, md: 0 },
        }}
      >
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          
          {/* Left Column: Animated Text Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: { xs: 'center', md: 'left' }, p: 2 }}>
              {/* The Typewriting Animation */}
              <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
                <TypeAnimation
                  sequence={[
                    'Hi, I am Prasanna Vijayakumar',
                    2000, // Waits 2s
                    'I am an AI Engineer',
                    2000, // Waits 2s
                    'I build intelligent systems.',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </Typography>

              <Typography variant="body1" sx={{ mb: 4, maxWidth: '500px', mx: { xs: 'auto', md: 0 } }}>
                I specialize in building intelligent applications and bringing creative ideas to life through code and data. Welcome to my personal space on the web.
              </Typography>
              <Button 
                variant="contained" 
                color="primary" 
                size="large"
                endIcon={<ArrowForwardIcon />}
                href="#projects"
              >
                View My Work
              </Button>
            </Box>
          </Grid>

          {/* Right Column: 3D Animation with Curved Corners */}
          <Grid item xs={12} md={6}>
            {/* We wrap the Spline component in a Box to apply styles */}
            <Box sx={{ 
              height: { xs: '400px', md: '600px' }, 
              width: '100%',
              borderRadius: '20px', // <-- THIS MAKES THE CORNERS CURVED
              overflow: 'hidden',   // <-- This clips the content to the curved shape
            }}>
              <Spline scene="https://prod.spline.design/WuenTbyAwWkwOepZ/scene.splinecode" />
            </Box>
          </Grid>

        </Grid>
      </Box>
    </section>
  );
};

export default Home;