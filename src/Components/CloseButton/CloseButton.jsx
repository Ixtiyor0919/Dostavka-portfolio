import { CloseBtn, CloseIcon } from "./CloseStyled";

export const CloseButton = ({ drawer, modal, toggle }) => {
  return (
    <CloseBtn drawer={drawer} modal={modal} onClick={toggle}>
      <CloseIcon />
    </CloseBtn>
  )
};
