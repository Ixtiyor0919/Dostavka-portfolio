import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, CssBaseline } from "@mui/material";
import ScrollTop from "../../Components/Scrolls/KeyboardScroll";
import { AppToolbar, KeyboardFab, KeyboardIcon, Main } from "./Styles";

export default function UsersLayout(props) {
  let search = useSelector((state) => state.searchReducer.search);

  return (
    <Box>
      <CssBaseline />
      <AppToolbar
        id="back-to-top-anchor"
      >
        <Header />
      </AppToolbar>
      <Main searchOpen={search}>
      <CssBaseline />
        <ScrollTop {...props}>
          <KeyboardFab
            size="small"
            aria-label="scroll back to top"
          >
            <KeyboardIcon />
          </KeyboardFab>
        </ScrollTop>
        <Outlet />
      </Main>
      <Footer />
    </Box>
  )
}
