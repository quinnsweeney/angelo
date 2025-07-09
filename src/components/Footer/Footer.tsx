import React from "react";
import { Box, Container, Typography } from "@mui/material";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="text.secondary" align="center">
          © {currentYear} Angelo, Barber and Shave. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
