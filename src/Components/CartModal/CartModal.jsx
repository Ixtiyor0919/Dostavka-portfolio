import {
  ModalIsEmpty,
  StockModalBtn,
  StockModalTitle,
  ModalIsEmptyIcon,
  CartDialog,
  DialogBtn,
  DialogText,
  DialogBtns,
} from "./CartModalStyled";
import { Link } from "react-router-dom";
import {
  Backdrop,
  DialogContent,
  DialogTitle,
  Fade,
  Modal,
  Slide,
} from "@mui/material";
import { CloseButton } from "../CloseButton/CloseButton";
import React from "react";
import { useDispatch } from "react-redux";

const CartModal = ({ open, setOpen }) => {
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
};
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const CartSmallModal = ({ id, open, setOpen }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false)
  }
  const handleDelete = () => {
    dispatch({ type: "CART_START" });
    localStorage.removeItem(`${id}`)
    dispatch({ type: "CART_DELETE", id: id })
    handleClose()
  }

  return (
    <CartDialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <CloseButton toggle={handleClose} modal />
      <DialogTitle>{"Attention"}</DialogTitle>
      <DialogContent>
        <DialogText id="alert-dialog-slide-description">
          Are you sure you want to delete this product?
        </DialogText>
      </DialogContent>
      <DialogBtns fullwidth>
        <DialogBtn variant="outlined" onClick={handleClose}>
          no
        </DialogBtn>
        <DialogBtn variant="outlined" onClick={handleDelete}>
          yes
        </DialogBtn>
      </DialogBtns>
    </CartDialog>
  )
};

export default CartModal;
export { CartSmallModal };
