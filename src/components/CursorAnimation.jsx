// src/components/CursorAnimation.jsx
import React from 'react';
import Spline from '@splinetool/react-spline';
import { Box } from '@mui/material';

const CursorAnimation = () => {
  return (
    <Box
      sx={{
        position: 'fixed', // Stays in place even when you scroll
        top: 0,
        left: 0,
        width: '100vw',    // Covers the full viewport width
        height: '100vh',   // Covers the full viewport height
        zIndex: 999,       // Sits on top of all other content visually
        pointerEvents: 'none', // CRUCIAL: Makes the component "invisible" to mouse clicks
      }}
    >
      <Spline scene="https://prod.spline.design/gi2AbQ4b0629RHYF/scene.splinecode" />
    </Box>
  );
};

export default CursorAnimation;