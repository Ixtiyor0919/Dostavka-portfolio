import {
  ModalIsEmpty,
  ModalIsEmptyImg,
  ModalIsEmptyWrapper,
  StockModalBtn,
  StockModalTitle,
} from "./Stock.component";
import CartStockImg from "../../Assets/Images/CartStockImg.png";

const StockModal = () => {
  return (
    <ModalIsEmptyWrapper>
      <ModalIsEmpty>
        <ModalIsEmptyImg src={CartStockImg} />
        <StockModalTitle>КОРЗИНА ПУСТАЯ</StockModalTitle>
        <StockModalBtn>Посмотреть меню</StockModalBtn>
      </ModalIsEmpty>
    </ModalIsEmptyWrapper>
  )
};

export default StockModal
