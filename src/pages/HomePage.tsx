import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Button,
  IconButton,
} from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

const HomePage: React.FC = () => {
  const handleSchedule = () => {
    // Replace this URL with your actual booking system URL
    window.open("https://getsqr.co/angelo-ruscetta-3", "_blank");
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Angelo, best barber in Kennesaw
        </Typography>
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          align="center"
          color="text.secondary"
        >
          Experience the art of traditional barbering with modern style.
        </Typography>

        {/* Call to Action Button */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 4,
            mb: 6,
          }}
        >
          <Button
            variant="contained"
            size="large"
            onClick={handleSchedule}
            startIcon={<CalendarTodayIcon />}
            sx={{
              py: 2,
              px: 4,
              fontSize: "1.2rem",
              textTransform: "none",
            }}
          >
            Schedule an Appointment
          </Button>
        </Box>

        {/* Barber Quote */}
        <Paper
          elevation={3}
          sx={{
            my: 6,
            p: 4,
            backgroundColor: "black",
            color: "primary.contrastText",
          }}
        >
          <Typography
            variant="h5"
            component="blockquote"
            align="center"
            sx={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              lineHeight: 1.6,
              mb: 2,
            }}
          >
            Angelo's profound passion for the art of barbering fuels his
            dedication to reviving timeless traditions. With a wealth of
            expertise, he is eager to share his craft and infuse the local
            barbering scene with a charming sense of nostalgia.
          </Typography>
        </Paper>

        {/* Social Media Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 2,
            mt: 4,
            "& .MuiIconButton-root": {
              color: "primary.main",
              "&:hover": {
                color: "primary.dark",
              },
            },
          }}
        >
          <IconButton
            aria-label="Instagram"
            href="https://www.instagram.com/domzilla13/"
            target="_blank"
            size="large"
          >
            <InstagramIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="Facebook"
            href="https://www.facebook.com/HaircutsbyAngelo"
            target="_blank"
            size="large"
          >
            <FacebookIcon fontSize="large" />
          </IconButton>
          <IconButton
            aria-label="TikTok"
            href="https://www.tiktok.com/@angelo_in_kennesaw"
            target="_blank"
            size="large"
            sx={{
              "& svg": {
                width: "1.5em",
                height: "1.5em",
              },
            }}
          >
            {/* Custom TikTok icon using SVG */}
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
              />
            </svg>
          </IconButton>
        </Box>
      </Box>
    </Container>
  );
};

export default HomePage;
