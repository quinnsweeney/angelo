import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Stack,
  List,
  ListItem,
  ListItemText,
  Link,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";

const DirectionsPage: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const coordinates = {
    lat: 34.01467574289008,
    lng: -84.55201114537294,
  };
  const mapsUrl = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`;

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom align="center">
          Find Me
        </Typography>

        <Stack spacing={4}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Stack
              spacing={4}
              direction={{ xs: "column", md: "row" }}
              alignItems="center"
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                  Location
                </Typography>
                <Typography
                  variant="body1"
                  component="address"
                  sx={{ fontStyle: "normal", mb: 3 }}
                >
                  {isMobile ? (
                    <Link
                      href={mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: "flex",
                        alignItems: "flex-start",
                        color: "primary.main",
                        textDecoration: "none",
                        "&:hover": {
                          textDecoration: "underline",
                        },
                      }}
                    >
                      <PlaceIcon sx={{ mr: 1, mt: 0.5 }} />
                      <Box>
                        50 Ernest W Barrett Pkwy NW, Suite 4015
                        <br />
                        Inside Phenix Suites - Studio 109
                        <br />
                        Kennesaw, GA
                      </Box>
                    </Link>
                  ) : (
                    <>
                      50 Ernest W Barrett Pkwy NW, Suite 4015
                      <br />
                      Inside Phenix Suites - Studio 109
                      <br />
                      Kennesaw, GA
                    </>
                  )}
                </Typography>
                <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                  Look for this logo in the window. You can't miss it!
                </Typography>
              </Box>
              <Box
                sx={{
                  width: { xs: "200px", md: "250px" },
                  height: { xs: "200px", md: "250px" },
                  position: "relative",
                }}
              >
                <Box
                  component="img"
                  src="/angelo/images/logo.png"
                  alt="Our logo"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: 1,
                  }}
                />
              </Box>
            </Stack>
          </Paper>

          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Finding Me
            </Typography>
            <Typography variant="body1" paragraph>
              I'm located in the Phenix Suites complex. Once you arrive at the
              address:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="1. Enter the Phenix Suites complex" />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="2. Head to Studio 109"
                  secondary="My studio is clearly marked with my logo and suite number (109)"
                />
              </ListItem>
            </List>
          </Paper>

          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h4" component="h2" gutterBottom>
              Contact
            </Typography>
            <List>
              <ListItem>
                {isMobile ? (
                  <ListItemText
                    primary={
                      <Link
                        href="tel:4706351290"
                        color="inherit"
                        underline="hover"
                      >
                        Phone: (470) 635 1290
                      </Link>
                    }
                  />
                ) : (
                  <ListItemText primary="Phone: (470) 635 1290" />
                )}
              </ListItem>
              <ListItem>
                <ListItemText primary="Email: **Don't have an email to put here so placeholder for now**" />
              </ListItem>
            </List>
          </Paper>
        </Stack>
      </Box>
    </Container>
  );
};

export default DirectionsPage;
