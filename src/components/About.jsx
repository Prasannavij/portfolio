// // src/components/About.jsx
// import React from 'react';
// // Add Button and an Icon to the imports
// import { Box, Typography, Button } from '@mui/material';
// import DownloadIcon from '@mui/icons-material/Download';

// const About = () => {
//   return (
//     <section id="about">
//       {/* This is the main container for the whole section */}
//       <Box
//         sx={{
//           minHeight: '100vh',
//           display: 'flex',
//           alignItems: 'center',
//           bgcolor: 'background.paper',
//           py: 8,
//           px: { xs: 2, sm: 4, md: 8 },
//           position: 'relative',
//         }}
//       >
//         {/* Image on the left, absolutely positioned, does not collapse padding */}
//         <Box
//           sx={{
//             position: 'absolute',
//             left: { xs: 32, sm: 64, md: 120 }, // moved more right
//             top: '50%',
//             transform: 'translateY(-50%)',
//             width: { xs: '180px', sm: '240px', md: '320px' }, // larger size
//             height: { xs: '180px', sm: '240px', md: '320px' },
//             borderRadius: '50%',
//             overflow: 'hidden',
//             bgcolor: 'primary.main',
//             boxShadow: '0 0 40px 10px #9c27b0, 0 8px 32px rgba(0,0,0,0.25)', // glowing effect
//             zIndex: 2,
//             display: { xs: 'none', md: 'block' },
//             animation: 'floatCard 4s ease-in-out infinite',
//             '@keyframes floatCard': {
//               '0%': { boxShadow: '0 0 40px 10px #9c27b0, 0 8px 32px rgba(0,0,0,0.25)', transform: 'translateY(-50%) scale(1)' },
//               '50%': { boxShadow: '0 0 60px 20px #e040fb, 0 16px 48px rgba(0,0,0,0.35)', transform: 'translateY(-60%) scale(1.04)' },
//               '100%': { boxShadow: '0 0 40px 10px #9c27b0, 0 8px 32px rgba(0,0,0,0.25)', transform: 'translateY(-50%) scale(1)' },
//             },
//             transition: 'box-shadow 0.3s, transform 0.3s',
//           }}
//         >
//           <Box
//             component="img"
//             // Using require() like this is an older pattern. 
//             // Importing at the top is generally preferred, but this will still work.
//             src={require('../assets/prasanna.jpg')}
//             alt="Prasanna Vijayakumar"
//             sx={{
//               width: '100%',
//               height: '100%',
//               objectFit: 'cover',
//               borderRadius: '50%',
//             }}
//           />
//         </Box>
//         {/* Text content on the right, padding preserved */}
//         <Box 
//           sx={{ 
//             maxWidth: { md: '60%' }, 
//             textAlign: { xs: 'center', md: 'left' },
//             ml: { md: 'auto' },
//           }}
//         >
//           <Typography variant="h2" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
//             About <span style={{ color: '#9c27b0' }}>Me</span>
//           </Typography>
//           <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
//             B.Tech in Artificial Intelligence & Data Science
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
//             Hello! I'm Prasanna, a passionate and detail-oriented AI Engineer currently working in Zlendo Technologies private limited as a junior AI Engineer. My journey in technology is driven by a fascination with machine learning's potential to solve real-world problems.
//           </Typography>
//           <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
//             Through internships and personal projects, I've gained hands-on experience in enhancing signal processing with advanced algorithms, building robust data cleaning pipelines, and developing intelligent monitoring systems. I thrive on transforming complex data into actionable insights and am always eager to learn and apply new technologies.
//           </Typography>
          
//           {/* --- ADD THIS BUTTON --- */}
//           <Button
//             variant="contained"
//             color="primary"
//             size="large"
//             startIcon={<DownloadIcon />}
//             // This component is an 'a' tag under the hood
//             component="a" 
//             // The href points to the file in your `public` folder
//             href="/resume.pdf" 
//             // These attributes make it open in a new tab securely
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             View My Resume
//           </Button>
//           {/* --- END OF BUTTON --- */}

//         </Box>
//       </Box>
//     </section>
//   );
// };

// export default About;


// src/components/About.jsx
import React from 'react';
// Add Button and an Icon to the imports
import { Box, Typography, Button } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import resumeFile from '../assets/resume.pdf';

const About = () => {
  return (
    <section id="about">
      {/* This is the main container for the whole section */}
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          bgcolor: 'background.paper',
          py: 8,
          px: { xs: 2, sm: 4, md: 8 },
          position: 'relative',
        }}
      >
        {/* Image on the left, absolutely positioned, does not collapse padding */}
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 32, sm: 64, md: 120 }, // moved more right
            top: '50%',
            transform: 'translateY(-50%)',
            width: { xs: '180px', sm: '240px', md: '320px' }, // larger size
            height: { xs: '180px', sm: '240px', md: '320px' },
            borderRadius: '50%',
            overflow: 'hidden',
            bgcolor: 'primary.main',
            boxShadow: '0 0 40px 10px #9c27b0, 0 8px 32px rgba(0,0,0,0.25)', // glowing effect
            zIndex: 2,
            display: { xs: 'none', md: 'block' },
            animation: 'floatCard 4s ease-in-out infinite',
            '@keyframes floatCard': {
              '0%': { boxShadow: '0 0 40px 10px #9c27b0, 0 8px 32px rgba(0,0,0,0.25)', transform: 'translateY(-50%) scale(1)' },
              '50%': { boxShadow: '0 0 60px 20px #e040fb, 0 16px 48px rgba(0,0,0,0.35)', transform: 'translateY(-60%) scale(1.04)' },
              '100%': { boxShadow: '0 0 40px 10px #9c27b0, 0 8px 32px rgba(0,0,0,0.25)', transform: 'translateY(-50%) scale(1)' },
            },
            transition: 'box-shadow 0.3s, transform 0.3s',
          }}
        >
          <Box
            component="img"
            // Using require() like this is an older pattern. 
            // Importing at the top is generally preferred, but this will still work.
            src={require('../assets/prasanna.jpg')}
            alt="Prasanna Vijayakumar"
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
            }}
          />
        </Box>
        {/* Text content on the right, padding preserved */}
        <Box 
          sx={{ 
            maxWidth: { md: '60%' }, 
            textAlign: { xs: 'center', md: 'left' },
            ml: { md: 'auto' },
          }}
        >
          <Typography variant="h2" component="h2" sx={{ fontWeight: 'bold', mb: 2 }}>
            About <span style={{ color: '#9c27b0' }}>Me</span>
          </Typography>
          <Typography variant="h5" color="text.secondary" sx={{ mb: 3 }}>
            B.Tech in Artificial Intelligence & Data Science
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.8 }}>
            Hello! I'm Prasanna, a passionate and detail-oriented AI Engineer currently working in Zlendo Technologies private limited as a junior AI Engineer. My journey in technology is driven by a fascination with machine learning's potential to solve real-world problems.
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, lineHeight: 1.8 }}>
            Through internships and personal projects, I've gained hands-on experience in enhancing signal processing with advanced algorithms, building robust data cleaning pipelines, and developing intelligent monitoring systems. I thrive on transforming complex data into actionable insights and am always eager to learn and apply new technologies.
          </Typography>
          
          {/* --- ADD THIS BUTTON --- */}
          <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<DownloadIcon />}
          component="a"
          href={resumeFile} // Ensure you have a resume.pdf in your public folder
          target="_blank"
          rel="noopener noreferrer"
        >
          View My Resume
        </Button>

          {/* --- END OF BUTTON --- */}

        </Box>
      </Box>
    </section>
  );
};

export default About;
