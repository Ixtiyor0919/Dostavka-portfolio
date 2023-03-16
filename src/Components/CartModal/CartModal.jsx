import {
  ModalIsEmpty,
  StockModalBtn,
  StockModalTitle,
  ModalIsEmptyIcon,
} from "./CartModalStyled";
import { Link } from "react-router-dom";
import { Backdrop, Fade, Modal } from "@mui/material";
import { CloseButton } from "../CloseButton/CloseButton";

export const CartModal = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false)
  const style = {
    background: "linear-gradient(360deg, #211F20 0%, rgb(68 64 63 / 30%) 100%)",
  }
  return (
    <>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        BackdropProps={{ style: { backgroundColor: "transparent" } }}
        sx={style}
      >
        <Fade in={open}>
          <ModalIsEmpty component="form">
            <CloseButton toggle={handleClose} modal />
            <ModalIsEmptyIcon />
            <StockModalTitle>КОРЗИНА ПУСТАЯ</StockModalTitle>
            <StockModalBtn component={Link} to="/" onClick={handleClose}>
              Посмотреть меню
            </StockModalBtn>
          </ModalIsEmpty>
        </Fade>
      </Modal>
    </>
  )
}
