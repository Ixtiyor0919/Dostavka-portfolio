import {
    BackText,
    BackWrapper,
    BackKeyboard,
    BackKeyboardStyled,
} from "./Back.component";
import { useNavigate } from "react-router-dom";

export const BackComponent = ({ text, styled }) => {
  const navigate = useNavigate()
  return (
    <BackWrapper onClick={() => navigate(-1)}>
      {styled ? <BackKeyboardStyled /> : <BackKeyboard />}
      <BackText>{text}</BackText>
    </BackWrapper>
  )
}
