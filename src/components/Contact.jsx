// src/components/Contact.jsx
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { Box, Typography, Grid, TextField, Button, Stack, IconButton, CircularProgress } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram'; // <-- 1. IMPORT THE ICON
import SendIcon from '@mui/icons-material/Send';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const Contact = () => {
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSending(true);
    setError(null);

    const serviceID = 'service_mfl089f';
    const templateID = 'template_ld2yl4t';
    const publicKey = '42PgTUPkq-8dpD4SF';

    emailjs.sendForm(serviceID, templateID, formRef.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully!', result.text);
        setIsSent(true);
        formRef.current.reset();
        setTimeout(() => {
          setIsSent(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setError('Failed to send message. Please try again later.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact">
      <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', py: 10, px: { xs: 2, sm: 4, md: 8 }, bgcolor: 'background.paper' }}>
        <Typography variant="h2" component="h2" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
          Get In <span style={{ color: '#9c27b0' }}>Touch</span>
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 8, textAlign: 'center', maxWidth: '600px' }}>
          I'm currently open to new opportunities and collaborations. Feel free to reach out via email, social media, or the contact form below.
        </Typography>

        <Grid container spacing={6} alignItems="flex-start" justifyContent="center">
          {/* LEFT COLUMN: Contact Info & Socials */}
          <Grid item xs={12} md={5}>
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="h6">Email</Typography>
                  <Typography color="text.secondary" component="a" href="mailto:prasannavijayakumar08@gmail.com" sx={{ textDecoration: 'none', color: 'inherit' }}>
                    prasannavijayakumar08@gmail.com
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon color="primary" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="h6">Phone</Typography>
                  <Typography color="text.secondary" component="a" href="tel:+919092425003" sx={{ textDecoration: 'none', color: 'inherit' }}>
                    +91 9092425003
                  </Typography>
                </Box>
              </Box>
            </Stack>
            <Box sx={{ mt: 4 }}>
              <IconButton component="a" href="https://www.linkedin.com/in/PrasannaV08/" target="_blank" color="primary" sx={{ mr: 1 }}><LinkedInIcon fontSize="large" /></IconButton>
              <IconButton component="a" href="https://github.com/Prasannavij" target="_blank" color="primary" sx={{ mr: 1 }}><GitHubIcon fontSize="large" /></IconButton>
              
              {/* --- 2. ADD THE INSTAGRAM ICON BUTTON HERE --- */}
              <IconButton 
                component="a" 
                href="https://www.instagram.com/live_incool_prasanna?igsh=MXh5Nm5yaGp4Z3BvYg==" 
                target="_blank" 
                color="primary"
              >
                <InstagramIcon fontSize="large" />
              </IconButton>
              {/* --- END OF INSTAGRAM BUTTON --- */}

            </Box>
          </Grid>

          {/* RIGHT COLUMN: Contact Form */}
          <Grid item xs={12} md={7}>
            <Box component="form" ref={formRef} onSubmit={handleSubmit} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField name="name" label="Your Name" variant="outlined" required fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="email" type="email" label="Your Email" variant="outlined" required fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField name="message" label="Your Message" variant="outlined" required fullWidth multiline rows={5} />
                </Grid>
                <Grid item xs={12}>
                  {isSent ? (
                    <Typography color="success.main" sx={{ display: 'flex', alignItems: 'center' }}>
                      <ThumbUpIcon sx={{ mr: 1 }} /> Message Sent!
                    </Typography>
                  ) : (
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      disabled={isSending}
                      startIcon={isSending ? <CircularProgress size={24} color="inherit" /> : <SendIcon />}
                    >
                      {isSending ? 'Sending...' : 'Send Message'}
                    </Button>
                  )}
                  {error && <Typography color="error.main" sx={{ mt: 2 }}>{error}</Typography>}
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
};

export default Contact;