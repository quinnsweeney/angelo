import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import React from "react";
import logo from "/images/logo.png";

const pages = [
  "Home",
  "Services",
  "Hair Styling",
  "Beard and Shave",
  "Directions",
];

function Navbar({
  setCurrentPage,
  currentPage,
}: {
  setCurrentPage: (page: string) => void;
  currentPage: string;
}) {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Desktop Logo */}
          <Link
            href="#"
            underline="none"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
            }}
            onClick={() => setCurrentPage("Home")}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: 40, height: 40, marginRight: 8 }}
            />
          </Link>

          {/* Mobile Layout */}
          <Box
            sx={{
              width: "100%",
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Mobile Menu Button - Absolute positioned */}
            <Box sx={{ position: "absolute", left: 0, zIndex: 1 }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Mobile Logo - Centered */}
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link
                href="#"
                underline="none"
                onClick={() => setCurrentPage("Home")}
              >
                <img src={logo} alt="Logo" style={{ width: 40, height: 40 }} />
              </Link>
            </Box>

            {/* Mobile Menu */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  backgroundColor: "black",
                },
                "& .MuiList-root": {
                  padding: 0,
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={() => {
                    handleCloseNavMenu();
                    setCurrentPage(page);
                  }}
                  sx={{
                    backgroundColor:
                      currentPage === page
                        ? "rgba(255, 255, 255, 0.08)"
                        : "transparent",
                    "&:hover": {
                      backgroundColor:
                        currentPage === page
                          ? "rgba(255, 255, 255, 0.12)"
                          : "rgba(255, 255, 255, 0.04)",
                    },
                  }}
                >
                  <Typography
                    textAlign="center"
                    sx={{
                      color:
                        currentPage === page
                          ? "#fff"
                          : "rgba(255, 255, 255, 0.7)",
                      fontWeight: currentPage === page ? 600 : 400,
                    }}
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Desktop Menu */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {
                  handleCloseNavMenu();
                  setCurrentPage(page);
                }}
                sx={{
                  my: 2,
                  display: "block",
                  color: currentPage === page ? "#fff" : "rgba(255, 255, 255, 0.7)",
                  fontWeight: currentPage === page ? 600 : 400,
                  "&:hover": {
                    color: "#fff",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
