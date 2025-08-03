// src/components/Skills.jsx
import React from 'react';
import { Box, Typography, Grid, List, ListItem, ListItemIcon, ListItemText, Paper } from '@mui/material';
import Spline from '@splinetool/react-spline';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';

// Import local SVG logos
import sqlLogo from '../assets/logos/sql.svg';
import pythonLogo from '../assets/logos/python.svg';
import azureLogo from '../assets/logos/azure.svg';
import analyticsLogo from '../assets/logos/analytics.svg';
import tableauLogo from '../assets/logos/tableau.svg';
import powerbiLogo from '../assets/logos/powerbi.svg';
import reactLogo from '../assets/logos/react.svg';

const educationData = [
  {
    degree: 'Bachelor of Technology in Artificial Intelligence and Data Science',
    institution: 'Erode Sengunthar Engineering College',
    year: 'Expected 2025',
    details: ['Attained a CGPA of 8.15 through the fifth semester of studies.'],
  },
  {
    degree: 'Higher Secondary Education (12th Grade)',
    institution: 'Sri Sundareswara Vidya Sala Matric Higher Secondary School',
    year: '2021',
    details: ['Achieved 84.08%'],
  },
  {
    degree: 'Secondary Education (10th Grade)',
    institution: 'Subramiya Bharathi Matric Higher Secondary School',
    year: '2019',
    details: ['Achieved 83.4%'],
  },
];

const skillsData = [
  { name: 'SQL', logo: sqlLogo },
  { name: 'ML with Python', logo: pythonLogo },
  { name: 'Azure AI', logo: azureLogo },
  { name: 'Data Analytics', logo: analyticsLogo },
  { name: 'Tableau', logo: tableauLogo },
  { name: 'Power BI', logo: powerbiLogo },
  { name: 'React', logo: reactLogo },
];

const Skills = () => {
  return (
    <section id="skills">
      <Box
        sx={{
          minHeight: '100vh',
          py: 10,
          px: { xs: 2, sm: 4, md: 8 },
          bgcolor: 'background.default',
          overflow: 'hidden',
        }}
      >
        {/* --- TOP ROW CONTAINER (Spline + Education) --- */}
        <Grid container spacing={6} alignItems="center" justifyContent="center" sx={{ mb: 10 }}>
          
          {/* LEFT COLUMN: Spline Animation */}
          <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Box sx={{ width: '100%', height: '500px' }}>
              <Spline scene="https://prod.spline.design/HSckuM8MraPmkt7D/scene.splinecode" />
            </Box>
          </Grid>
          
          {/* RIGHT COLUMN: Education Details */}
          <Grid item xs={12} md={7}>
            <Box sx={{ textAlign: 'left' }}>
              <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 4 }}>
                Educational <span style={{ color: '#9c27b0' }}>Background</span>
              </Typography>
              <List>
                {educationData.map((edu) => (
                  <ListItem key={edu.degree} alignItems="flex-start" sx={{ flexDirection: 'column', pl: 0, mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                      <ListItemIcon sx={{ minWidth: 40 }}><SchoolIcon color="primary" /></ListItemIcon>
                      <ListItemText
                        primary={<Typography variant="h6" fontWeight="bold">{edu.degree}</Typography>}
                        secondary={`${edu.institution} — ${edu.year}`}
                      />
                    </Box>
                    <List sx={{ pl: { xs: 0, sm: 7 }, width: '100%' }}>
                      {edu.details.map((detail) => (
                        <ListItem key={detail} sx={{ py: 0.5, pl: { xs: 4, sm: 0 } }}>
                          <ListItemIcon sx={{ minWidth: 30, color: 'text.secondary' }}><StarIcon sx={{ fontSize: '1rem' }} /></ListItemIcon>
                          <ListItemText primary={detail} />
                        </ListItem>
                      ))}
                    </List>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
        </Grid>

        {/* --- BOTTOM ROW CONTAINER (Technical Skills) --- */}
        <Box sx={{ maxWidth: '1200px', mx: 'auto' }}>
          <Typography variant="h3" component="h2" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
            Technical <span style={{ color: '#9c27b0' }}>Skills</span>
          </Typography>
          <Box
            sx={{
              display: 'flex',
              overflowX: 'auto',
              py: 2,
              gap: 3,
              '&::-webkit-scrollbar': { height: 8 },
              '&::-webkit-scrollbar-track': { background: '#2e2e2e' },
              '&::-webkit-scrollbar-thumb': { background: '#9c27b0', borderRadius: '4px' },
            }}
          >
            {skillsData.map((skill) => (
              <Paper
                key={skill.name}
                elevation={4}
                sx={{
                  minWidth: 150,
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'background.paper',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: (theme) => `0 0 15px ${theme.palette.primary.main}55`,
                  }
                }}
              >
                <Box 
                  component="img" 
                  src={skill.logo} 
                  alt={`${skill.name} logo`} 
                  sx={{ 
                    height: 50, 
                    mb: 1.5,
                    filter: 'invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)',
                  }} 
                />
                <Typography variant="h6">{skill.name}</Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Skills;