// // src/components/Navbar.jsx
// import React, { useState } from 'react';
// import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
// import MenuIcon from '@mui/icons-material/Menu';
// import DownloadIcon from '@mui/icons-material/Download';

// // The links for our portfolio
// const navItems = [
//   { name: 'Home', href: '#home' },
//   { name: 'About', href: '#about' },
//   { name: 'Projects', href: '#projects' },
//   { name: 'Skills', href: '#skills' },
//   { name: 'Contact', href: '#contact' },
// ];

// const Navbar = () => {
//   // State to manage the mobile menu drawer
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen((prevState) => !prevState);
//   };

//   // The mobile drawer content
//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'background.default', height: '100%' }}>
//       <Typography variant="h6" component="a" href="#home" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
//             Prasanna Vijayakumar
//         </Typography>
//       <List>
//         {navItems.map((item) => (
//           <ListItem key={item.name} disablePadding>
//             <ListItemButton component="a" href={item.href} sx={{ textAlign: 'center' }}>
//               <ListItemText primary={item.name} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       <AppBar component="nav" position="fixed" sx={{ bgcolor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)' }}>
//         <Toolbar>
//           {/* Hamburger Menu Icon (visible on mobile) */}
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             edge="start"
//             onClick={handleDrawerToggle}
//             sx={{ mr: 2, display: { sm: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           {/* Logo / Name (pushes other items to the right) */}
//           <Typography variant="h6" component="a" href="#home" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
//             Prasanna Vijayakumar
//         </Typography>

//           {/* Desktop Menu Links (hidden on mobile) */}
//           <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
//             {navItems.map((item) => (
//               <Button key={item.name} component="a" href={item.href} sx={{ color: '#ffff' }}>
//                 {item.name}
//               </Button>
//             ))}
//             {/* A special button for the Resume */}
//             <Button 
//               variant="outlined" 
//               color="primary" 
//               startIcon={<DownloadIcon />} 
//               href="/resume.pdf" // <-- IMPORTANT: Change this link
//               target="_blank"
//               sx={{ ml: 2 }}
//             >
//               Resume
//             </Button>
//           </Box>
//         </Toolbar>
//       </AppBar>
      
//       {/* Mobile Drawer */}
//       <Drawer
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{ keepMounted: true }} // Better open performance on mobile.
//         sx={{
//           display: { xs: 'block', sm: 'none' },
//           '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;


// src/components/Navbar.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DownloadIcon from '@mui/icons-material/Download';
import resumeFile from '../assets/resume.pdf';

// The links for our portfolio
const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  // State to manage the mobile menu drawer
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  // The mobile drawer content
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', bgcolor: 'background.default', height: '100%' }}>
      <Typography variant="h6" component="a" href="#home" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            Prasanna Vijayakumar
        </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton component="a" href={item.href} sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" position="fixed" sx={{ bgcolor: 'rgba(0, 0, 0, 0.8)', backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          {/* Hamburger Menu Icon (visible on mobile) */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo / Name (pushes other items to the right) */}
          <Typography variant="h6" component="a" href="#home" sx={{ flexGrow: 1, textDecoration: 'none', color: 'inherit' }}>
            Prasanna Vijayakumar
        </Typography>

          {/* Desktop Menu Links (hidden on mobile) */}
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item.name} component="a" href={item.href} sx={{ color: '#ffff' }}>
                {item.name}
              </Button>
            ))}
            {/* A special button for the Resume */}
            <Button
               variant="outlined"
               color="primary"
               startIcon={<DownloadIcon />}
               href={`https://prasannavij.github.io/portfolio/resume.pdf`}
               target="_blank"
               sx={{ ml: 2 }}
            >
              Resume
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
             
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }} // Better open performance on mobile.
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default Navbar;
