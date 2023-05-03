import React from "react";
import { Header } from "./Header/Header";
import { Footer } from "./Footer/Footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { AppBar, Box, CssBaseline } from "@mui/material";
import HideOnScroll from "../../../Components/Scrolls/HideScroll";
import { AppToolbar, KeyboardFab, KeyboardIcon, Main } from "./Styles";
import KeyboardScroll from "../../../Components/Scrolls/KeyboardScroll";

export default function UsersLayout(props) {
  let search = useSelector((state) => state.searchReducer.search)

  return (
    <Box>
      <CssBaseline />
      {/* <HideOnScroll {...props}> */}
        {/* <AppBar id="back-to-top-anchor" sx={{boxShadow: 'unset', p: "unset !important"}}> */}
          <AppToolbar id="back-to-top-anchor">
            <Header />
          </AppToolbar>
        {/* </AppBar> */}
      {/* </HideOnScroll> */}
      <Main searchOpen={search}>
        <CssBaseline />
        <KeyboardScroll {...props}>
          <KeyboardFab size="small" aria-label="scroll back to top">
            <KeyboardIcon />
          </KeyboardFab>
        </KeyboardScroll>
        <Outlet />
      </Main>
      <Footer />
    </Box>
  )
};
