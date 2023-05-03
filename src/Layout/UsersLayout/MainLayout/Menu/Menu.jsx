import { Divider } from "@mui/material";
import { DrawerHeader, StyledDrawer } from "../Styles";
import { PublicDrawerData } from "../../../../Api/Data";
import { Language } from "../../../../Modules/Languages";
import LoginModal from "../../../../Components/LoginModal";
import { CloseButton } from "../../../../Components/CloseButton/CloseButton";
import { DrawerComponent } from "../../../../Components/DrawerContent/DrawerContent";

export const Menu = ({ open, toggle }) => {
  return (
    <StyledDrawer
      open={open}
      onClose={toggle}
      variant="temporary"
      ModalProps={{ keepMounted: true }}
    >
      <CloseButton toggle={toggle} drawer />
      <DrawerHeader>
        <LoginModal drawer />
        <Language drawer />
      </DrawerHeader>
      <Divider />
      <DrawerComponent toggle={toggle} data={PublicDrawerData} />
    </StyledDrawer>
  )
};