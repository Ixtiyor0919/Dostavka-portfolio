import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import ScrollTop from "../Components/Scrolls/KeyboardScroll";
import { Box, CssBaseline, Fab, Toolbar } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function LayoutMenu(props) {
  return (
    <Box>
      <CssBaseline />
      <Toolbar
        id="back-to-top-anchor"
      >
        <Header />
      </Toolbar>
      <Box component="main" sx={{marginTop: "2.6%"}}>
      <CssBaseline />
        <ScrollTop {...props}>
          <Fab
            sx={{
              ":hover": {
                backgroundColor: "#A4A4A3",
                color: "#F5F5F5",
              },
              ":active": {
                backgroundColor: "#A4A4A3",
                color: "#ffffff",
              },
              backgroundColor: "#ffffff",
              color: "#5a5a5a",
              width: "50px",
              height: "50px",
            }}
            size="small"
            aria-label="scroll back to top"
          >
            <KeyboardArrowUpIcon sx={{ fontSize: "1.8rem" }} />
          </Fab>
        </ScrollTop>
        <Outlet />
      </Box>
      <Footer />
    </Box>
  )
}
