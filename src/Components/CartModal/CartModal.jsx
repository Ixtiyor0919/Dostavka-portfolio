import {
  ModalIsEmpty,
  StockModalBtn,
  StockModalTitle,
  ModalIsEmptyIcon,
  ModalIsEmptyWrapper,
} from "./CartModalStyled";
import { Link } from "react-router-dom";

export const CartModal = () => {
  return (
    <>
    <ModalIsEmptyWrapper />
      <ModalIsEmpty>
        {/* <CloseButton aria-label="cancel">
            <CloseOutlinedIcon
              onClick={handleClose}
              sx={{ borderRadius: "50%", cursor: "pointer" }}
            />
        </CloseButton> */}
        <ModalIsEmptyIcon />
        <StockModalTitle>КОРЗИНА ПУСТАЯ</StockModalTitle>
        <StockModalBtn component={Link} to="/">
          Посмотреть меню
        </StockModalBtn>
      </ModalIsEmpty>
    </>
  )
};
