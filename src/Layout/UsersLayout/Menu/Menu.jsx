import {
  LoginButton,
  LoginButtonHr,
  LoginButtonIcon,
  LoginButtonText,
} from "../Header/Header.component";
import { Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { StyledDrawer } from "../Styles";
import { PublicDrawerData } from "../../../Api/Data";
import { CloseButton } from "../../../Components/CloseButton/CloseButton";
import { DrawerComponent } from "../../../Components/DrawerContent/DrawerContent";

export const Menu = ({ open, toggle }) => {
  return (
    <StyledDrawer
      open={open}
      onClose={toggle}
      variant="temporary"
      ModalProps={{ keepMounted: true }}
    >
      <CloseButton toggle={toggle} drawer />
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
