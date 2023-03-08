import {
  LoginButton,
  LoginButtonHr,
  LoginButtonIcon,
  LoginButtonText,
} from "../Header/Header.component";
import { Divider } from "@mui/material";
import { Burger, StyledDrawer } from "../Styles";
import { PublicDrawerData } from "../../../Api/Data";
import { DrawerComponent } from "../../../Components/DrawerContent/DrawerContent";
import { Link } from "react-router-dom";

export const Menu = ({ open, toggle }) => {
  return (
    <StyledDrawer
      open={open}
      onClose={toggle}
      variant="temporary"
      ModalProps={{ keepMounted: true }}
    >
      <Burger opened open={open} toggle={toggle} />
      <LoginButton component={Link} to="/login">
        <LoginButtonHr />
        <LoginButtonIcon />
        <LoginButtonText>Login</LoginButtonText>
      </LoginButton>
      <Divider />
      <DrawerComponent toggle={toggle} data={PublicDrawerData} />
    </StyledDrawer>
  )
}
