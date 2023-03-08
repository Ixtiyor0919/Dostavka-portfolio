import {
    Box,
    Link,
    Menu,
    Badge,
    AppBar,
    Avatar,
    Divider,
    Toolbar,
    MenuItem,
    IconButton,
    Typography,
    ListItemIcon,
} from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
import useToken from "../../../Hooks/UseToken";
import Logout from "@mui/icons-material/Logout";
import MoreIcon from "@mui/icons-material/MoreVert";
import appDrawerWidth from "../../../Utils/Constant";
import { HandleLogOut } from "../../../Hooks/Logout";
import { Link as RouterLink } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { NotificationsMenu } from "../../../Components/Notifications/Notification";

export const Header = (props) => {
    const { token } = useToken();
    const { handleDrawerToggle, open } = props;
    const urlMessage = "api/chat?messageId";
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [messagesEl, setMessagesEl] = React.useState(null);
    // const [allMessagesData, setAllMessages] = React.useState([]);
    const [notificationEl, setNotificationEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    let authData = useSelector((state) => state.authReducer?.authData?.data);
    const isMenuOpen = Boolean(anchorEl);
    const isMenuMessagesOpen = Boolean(messagesEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const isMenuNotificationOpen = Boolean(notificationEl);
    const appWidth = open ? appDrawerWidth : 0;
    const menuId = "primary-search-account-menu";
    const menuMessagesId = "primary-messages-menu";
    const menuNotificationId = "primary-notification-menu";
    const mobileMenuId = "primary-search-account-menu-mobile";

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    // const handleMessagesMenuOpen = (event) => {
    //     setMessagesEl(event.currentTarget);
    // };

    const handleNotificationMenuOpen = (event) => {
        setNotificationEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMenuMessagesClose = () => {
        setMessagesEl(null);
    };

    const handleMenuNotificationClose = () => {
        setNotificationEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };
 
    const handleLogoutChange = () => {
        handleMenuClose();
        HandleLogOut(token);
    };

    const getNotificationMessage = () => {
        // instance
        //     .get(`api/chat/notification?username=${authData?.userName}`)
        //     .then((data) => {
        //         setAllMessages(data.data?.data);
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });
    };

    React.useEffect(() => {
        getNotificationMessage();
    }, []);

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            id={menuId}
            keepMounted
            open={isMenuOpen}
            onClose={handleMenuClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: { xs: 26, md: 20 },
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
            <Link
                to={"/profile"}
                component={RouterLink}
                variant="subtitle6"
                style={{ color: "unset", display: "contents" }}
            >
                <MenuItem>
                    <Avatar />
                    Profile
                </MenuItem>
            </Link>
            <Divider />
            <MenuItem onClick={handleLogoutChange} sx={{ color: "red" }}>
                <ListItemIcon>
                    <Logout sx={{ color: "red" }} fontSize="small" />
                </ListItemIcon>
                Logout
            </MenuItem>
        </Menu>
    );

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            id={mobileMenuId}
            keepMounted
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflowY: "visible",
                    overflowX: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    height: "250px",
                    width: "280px",
                    padding: "5px",
                    borderRadius: "10px",
                    "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                    "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: "5%",
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                    },
                },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
            <MenuItem>
                <Link to="/notifications">
                    <IconButton
                        size="large"
                        aria-label="show 17 new notifications"
                        color="inherit"
                    >
                        <Badge badgeContent={7} color="error">
                            <NotificationsIcon
                                sx={{ color: "#ebba16", fontSize: "1.8rem" }}
                            />
                        </Badge>
                    </IconButton>
                    Notifications
                </Link>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                sx={{
                    zIndex: "12 !important",
                    backgroundColor: "#403C3B",
                    padding: "8px 0 !important",
                    boxShadow: "0px 3px 10px 3px #464646",
                    ml: { md: `${appWidth}px` },
                    width: {
                        md: `calc(100% - ${appWidth}px)`,
                    },
                }}
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{
                            mr: 2,
                            fontSize: "1.7rem",
                        }}
                        onClick={handleDrawerToggle}
                    >
                        {!open ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {'Restaurant & Fast Delivery'}
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: "none", md: "flex" } }}>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-haspopup="true"
                            aria-controls={menuNotificationId}
                            onClick={handleNotificationMenuOpen}
                            aria-label="show 17 new notifications"
                        >
                            <Badge badgeContent={7} color="error">
                                <NotificationsIcon
                                    sx={{
                                        color: "#ebba16",
                                        fontSize: "1.8rem",
                                    }}
                                />
                            </Badge>
                        </IconButton>
                    </Box>
                    <IconButton
                        edge="end"
                        size="large"
                        color="inherit"
                        aria-haspopup="true"
                        aria-controls={menuId}
                        onClick={handleProfileMenuOpen}
                        aria-label="account of current user"
                    >
                        <Avatar
                            alt={`${authData?.userName}`}
                            sx={{borderRadius: '10px'}}
                        />
                    </IconButton>
                    <Box sx={{ display: { xs: "flex", md: "none" } }}>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-haspopup="true"
                            aria-label="show more"
                            sx={{ padding: "6px" }}
                            aria-controls={mobileMenuId}
                            onClick={handleMobileMenuOpen}
                        >
                            <MoreIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <NotificationsMenu
                rightTheme="8%"
                title="Messages"
                url={urlMessage}
                routeLink="/chat"
                id={menuMessagesId}
                // data={allMessagesData}
                messagesEl={messagesEl}
                open={isMenuMessagesOpen}
                close={handleMenuMessagesClose}
                getResponse={getNotificationMessage}
            />
            <NotificationsMenu
                rightTheme="8%"
                url={urlMessage}
                routeLink="/chat"
                title="Notifications"
                // data={allMessagesData}
                id={menuNotificationId}
                messagesEl={notificationEl}
                open={isMenuNotificationOpen}
                close={handleMenuNotificationClose}
                getResponse={getNotificationMessage}
            />
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
}
