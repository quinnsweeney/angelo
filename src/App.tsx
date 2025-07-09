import Navbar from "./components/Navbar/Navbar";
import { PageProvider } from "./components/PageProvider/PageProvider";
import Footer from "./components/Footer/Footer";
import "./index.css";
import React from "react";
import { ThemeProvider, createTheme, Box } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
  },
});

function App() {
  const [currentPage, setCurrentPage] = React.useState("Home");
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Navbar setCurrentPage={setCurrentPage} />
        <Box component="main" sx={{ flex: 1 }}>
          <PageProvider page={currentPage} />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
