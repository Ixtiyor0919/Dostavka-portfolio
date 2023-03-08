import {
    Box,
    Toolbar,
    CssBaseline,
    useMediaQuery,
} from "@mui/material";
import React from "react";
import { Header } from "./Header/Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar/Sidebar";
import { Main } from "./Main/Main.component";
import { useTheme } from "@mui/material/styles";
import { Footer } from "../UsersLayout/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";

export default function AdminLayout() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const matchDownMd = useMediaQuery(theme.breakpoints.down("md"));
    let menuOpen = useSelector((state) => state.menuReducer.menuOpen);
    const [open, setOpen] = React.useState(!matchDownMd ? menuOpen : false);

    const handleDrawerToggle = () => {
        setOpen(!open);
        dispatch({ type: "MENU_SUCCESS", menuOpen: !open });
    };

    return (
        <Box>
            <CssBaseline />
            <Toolbar>
                <Header open={open} handleDrawerToggle={handleDrawerToggle} />
            </Toolbar>
            <Box sx={{ display: { md: "flex", sm: "block" } }}>
                <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />
                <Main theme={theme} open={open} md={matchDownMd}>
                    {/* <Breadcrumbs separator={IconChevronRight} navigation={navigation} icon title rightAlign /> */}
                    <Outlet />
                </Main>
            </Box>
            <Footer private />
        </Box>
    );
}
