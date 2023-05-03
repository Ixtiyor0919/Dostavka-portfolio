import {
  BoxData,
  CartCardValue,
  CartButtonsBox,
  CartCarCostBox,
  CartCardValueBox,
  CartCardWrapperInner,
  CartCardDescriptionBox,
  CartCardWrapperInnerImg,
  CartCardDescriptionBoxText,
  CartCardDescriptionBoxTitle,
} from "./CartCard.component"
import React from "react"
import Loader from "../Loader"
import { useDispatch } from "react-redux"
import { Icons } from "../CartIcons/Icons"
import AddIcon from "@mui/icons-material/Add"
import ClearIcon from "@mui/icons-material/Clear"
import RemoveIcon from "@mui/icons-material/Remove"
import { useMediaQuery, useTheme } from "@mui/material"
import { CartSmallModal } from "../CartModal/CartModal"
import HomeCardImg from "../../Assets/Images/HomeCardImg.png"
import { GradientLine } from "../HomeCardsWrapper/HomeCards.component"

export function CartCard(props) {
  const theme = useTheme()
  const dispatch = useDispatch()
  const { id, title, text } = props
  const [open, setOpen] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const local = JSON.parse(localStorage.getItem(`${id}`))
  const matchDownMD = useMediaQuery(theme.breakpoints.down("md"))
  let [count, setCount] = React.useState(local !== null ? local : 0)
  // let { loading } = useSelector((state) => state.cartReducer);
  // React.useEffect(() => {
  if (loading) {
    return <Loader />
  }
  // }, [loading])
  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleRemove = () => {
    setLoading(true)
    if (count === 1) {
      handleClickOpen()
    }
    if (count > 1) {
      setCount((count -= 1))
      localStorage.setItem(`${id}`, count)
    }
    setLoading(false)
  }
  const handleAdd = () => {
    setCount((count += 1))
    localStorage.setItem(`${id}`, JSON.stringify(count))
  }
  const handleDelete = () => {
    setLoading(true)
    dispatch({ type: "CART_START" })
    localStorage.removeItem(`${id}`)
    dispatch({ type: "CART_DELETE", id: id })
    setLoading(false)
  }

  return (
    <>
      <CartCardWrapperInner>
        <CartCardWrapperInnerImg src={HomeCardImg} />
        <BoxData>
          <CartCardDescriptionBox>
            <CartCardDescriptionBoxTitle>{title}</CartCardDescriptionBoxTitle>
            <CartCardDescriptionBoxText>{text}</CartCardDescriptionBoxText>
          </CartCardDescriptionBox>
          <CartButtonsBox>
            <CartCardValueBox>
              <Icons
                Icon={RemoveIcon}
                width={!matchDownMD ? 30 : 22}
                height={!matchDownMD ? 30 : 22}
                size={!matchDownMD ? 20 : 18}
                onClick={handleRemove}
              />
              <CartCardValue>{local ? local : 0}</CartCardValue>
              <Icons
                Icon={AddIcon}
                width={!matchDownMD ? 30 : 22}
                height={!matchDownMD ? 30 : 22}
                size={!matchDownMD ? 20 : 18}
                onClick={handleAdd}
              />
            </CartCardValueBox>
            <CartCarCostBox>
              <CartCardValue>1640 ₽</CartCardValue>
              <Icons
                Icon={ClearIcon}
                width={!matchDownMD ? 30 : 22}
                height={!matchDownMD ? 30 : 22}
                size={!matchDownMD ? 20 : 16}
                onClick={handleDelete}
              />
            </CartCarCostBox>
          </CartButtonsBox>
        </BoxData>
      </CartCardWrapperInner>
      <GradientLine />
      <CartSmallModal id={id} open={open} setOpen={setOpen} />
    </>
  )
}
