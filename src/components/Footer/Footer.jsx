import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', p: 6 }}>
      <Typography variant="h6" align="center" gutterBottom>
        JOBBLISS
      </Typography>
      <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
        © {new Date().getFullYear()} JOBBLISS All rights reserved.
      </Typography>
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Link href="#" sx={{ mx: 1 }}>
          Privacy Policy
        </Link>
        |
        <Link href="#" sx={{ mx: 1 }}>
          Terms of Service
        </Link>
        |
        <Link href="#" sx={{ mx: 1 }}>
          Contact Us
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
