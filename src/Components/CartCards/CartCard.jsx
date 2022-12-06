import {
  CartCarCostBox,
  CartCardDescriptionBox,
  CartCardDescriptionBoxText,
  CartCardDescriptionBoxTitle,
  CartCardValue,
  CartCardValueBox,
  CartCardWrapperInner,
  CartCardWrapperInnerImg,
  CartCardWrapperInnerLine,
} from "./CartCard.component"
import HomeCardImg from "../../Assets/Images/HomeCardImg.png"
import { useState } from "react"

export function CartCard(props) {
  let [count, setCount] = useState(0)

  const handleLocalCart = () => {
    setCount((count -= 1))
    localStorage.setItem(`${props.title}`, count)
  }
  const handleLocalCartCircle = () => {
    setCount((count += 1))
    localStorage.setItem(`${props.title}`, count)
  }

  const countPilus = localStorage.getItem(`${props.title}`, count)

  return (
    <>
      <CartCardWrapperInner>
        <CartCardWrapperInnerImg src={HomeCardImg} width={120} height={90} />
        <CartCardDescriptionBox>
          <CartCardDescriptionBoxTitle>
            {props.title}
          </CartCardDescriptionBoxTitle>
          <CartCardDescriptionBoxText>{props.body}</CartCardDescriptionBoxText>
        </CartCardDescriptionBox>
        <CartCardValueBox>
          <i
            class="bx bxs-minus-circle"
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "33px",
              cursor: "pointer",
              color: "#72A479",
              background: "#fff",
            }}
            onClick={() => handleLocalCart()}
          ></i>
          <CartCardValue>{countPilus}</CartCardValue>
          <i
            class="bx bxs-plus-circle"
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "33px",
              color: "#72A479",
              cursor: "pointer",
              background: "#fff",
            }}
            onClick={() => handleLocalCartCircle()}
          ></i>
        </CartCardValueBox>
        <CartCarCostBox>
          <CartCardValue>1640 ₽</CartCardValue>
          <i
            class="bx bxs-x-circle"
            style={{
              width: "26px",
              height: "26px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "33px",
              cursor: "pointer",
              color: "#72A479",
              background: "#fff",
              marginLeft: "72px",
            }}
          ></i>
        </CartCarCostBox>
      </CartCardWrapperInner>
      <CartCardWrapperInnerLine />
    </>
  )
}
