// src/components/Projects.jsx
import React from 'react';
import { Box, Typography, Divider, Button } from '@mui/material';
import Spline from '@splinetool/react-spline';
import GitHubIcon from '@mui/icons-material/GitHub';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LinkIcon from '@mui/icons-material/Link';
import ironmanBg from '../assets/ironman.jpg';

const Projects = () => {
  return (
    <section id="projects">
      <Box
        sx={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          py: 10,
          px: { xs: 2, sm: 4, md: 8 },
          backgroundImage: `url(${ironmanBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Dark overlay */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1,
          }}
        />

        {/* Main Grid container for the two-column layout */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            textAlign: 'left',
            color: '#fff',
            flex: 1.5,
            pr: { lg: 6 },
          }}
        >
          <Typography variant="h2" component="h2" sx={{ fontWeight: 'bold', mb: 6 }}>
            My <span style={{ color: '#9c27b0' }}>Projects</span>
          </Typography>

          {/* Project 1: EMS */}
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold' }}>
              EMS - Exercise Monitoring System
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
              My final year project. A personalized physiotherapy and kinetic activity monitoring system using Computer Vision with Gemini, Exercise DB, and RapidAPI.
            </Typography>
            <Box>
              <Button variant="outlined" color="primary" startIcon={<VisibilityIcon />} href="/EMS_project_Details.pdf" target="_blank" rel="noopener noreferrer" sx={{ mr: 2 }}>
                View Details
              </Button>
              <Button variant="contained" color="secondary" startIcon={<GitHubIcon />} href="https://github.com/Prasannavij/Machine-Learning-Projects/blob/main/exerscise_app.zip" target="_blank" rel="noopener noreferrer">
                GitHub
              </Button>
            </Box>
          </Box>

          <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', my: 4 }} />

          {/* Project 2: iDocx */}
          <Box sx={{ mb: 5 }}>
            <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold' }}>
              iDocx & iSummize
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
              An intelligent document extractor and summarizer for Zlendo Technologies. It uses YOLOv8 for entity detection, OCR for text extraction, and a hybrid LLM approach for validation.
            </Typography>
            <Button variant="contained" color="primary" startIcon={<LinkIcon />} href="http://103.16.202.150:4445/login" target="_blank" rel="noopener noreferrer">
              Live Demo
            </Button>
          </Box>

          <Divider sx={{ bgcolor: 'rgba(255, 255, 255, 0.2)', my: 4 }} />

          {/* Project 3: Z_Realty */}
          <Box>
            <Typography variant="h4" component="h3" sx={{ fontWeight: 'bold' }}>
              Z_Realty
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mt: 1, mb: 2 }}>
              A comprehensive real estate planning and management application developed for Zlendo Technologies, featuring interactive floor plans and resource management.
            </Typography>
            <Button variant="contained" color="primary" startIcon={<LinkIcon />} href="http://103.16.202.150:4457/" target="_blank" rel="noopener noreferrer">
              Live Demo
            </Button>
          </Box>
        </Box>

        {/* Right Spline Viewer */}
        <Box
          sx={{
            flex: 1,
            zIndex: 2,
            ml: { lg: 6 },
            mt: { xs: 6, lg: 0 },
            height: { xs: '300px', sm: '400px', lg: '500px' },
            minWidth: '300px',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          <Spline scene="https://prod.spline.design/vck8IroAfDENr4hq/scene.splinecode" />
        </Box>
      </Box>
    </section>
  );
};

export default Projects;