import {
  LabelThird,
  FormRadioLabel,
  CheckoutWrapper,
  CheckoutTopLinkBox,
  CheckoutWrapperItem,
  CheckoutWrapperMain,
  CheckoutWrapperText,
  CheckoutWrapperItemTop,
  CheckoutWrapperItemForm,
  CheckoutWrapperItemInner,
  CheckoutWrapperItemInput,
  CheckoutWrapperItemTitle,
  CheckoutWrapperItemBottom,
  CheckoutWrapperItemTopInner,
  CheckoutWrapperItemInnerTitle,
  CheckoutWrapperItemRadioInput,
  CheckoutWrapperItemTopInnerLabel,
  CheckoutWrapperItemTopInnerRight,
  CheckoutWrapperItemBottomCheckbox,
  CheckoutWrapperItemPersonCountWrapper,
  CheckoutWrapperItemPersonCountWrapperText,
  CheckoutWrapperItemPersonCountWrapperValue,
  CheckImg,
  CheckoutBottomText,
  CheckoutBottom,
  CheckoutBottomLink,
  CheckoutBottomInner,
  CheckoutWrapperItemArea,
  FormLabelStyled,
  RadioControl,
  FormStyled,
} from "./Checkout.component";
import { useState } from "react";
import RadioGroup from "@mui/material/RadioGroup";
import CheckMark from "../../Assets/Images/CheckMark.png";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import NavLinkList from "../../Components/Navbar/NavLinkList";
import { Subtitle } from "../../Components/PublicSubtitle/Subtitle";
import { BackComponent } from "../../Components/BackButton/BackButton";
import { MainCartBottomBtn } from "../CartProduct/Cart.component";

const Checkout = () => {
  const theme = useTheme()
  let [count, setCount] = useState(0)
  localStorage.setItem("PersonCount", count)
  const [valu, setValu] = useState("female")
  const [check, setCheck] = useState(false)
  const matchDownMD = useMediaQuery(theme.breakpoints.down("md"))
  const handleChange = (event) => {
    setValu(event.target.value)
  }

  return (
    <>
      <NavLinkList />
      <CheckoutWrapper>
        <Box>
          <CheckoutTopLinkBox>
            <BackComponent text="в корзину" />
          </CheckoutTopLinkBox>
          <Subtitle title="УОформление заказа" pL="0" pR="0" />
        </Box>
        <CheckoutWrapperMain>
          <CheckoutWrapperItem>
            <CheckoutWrapperItemTitle>
              1. Контактная информация
            </CheckoutWrapperItemTitle>
            <CheckoutWrapperItemForm
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <CheckoutWrapperItemInput
                style={{ width: "50%" }}
                type="text"
                placeholder="Имя*"
              />
              <CheckoutWrapperItemInput
                style={{ width: "50%" }}
                type="text"
                placeholder="Телефон*"
              />
            </CheckoutWrapperItemForm>
          </CheckoutWrapperItem>
          <CheckoutWrapperItem>
            <CheckoutWrapperItemTitle>2. Доставка</CheckoutWrapperItemTitle>
            <CheckoutWrapperItemForm>
              <CheckoutWrapperItemTop>
                <CheckoutWrapperItemTopInner>
                  <CheckoutWrapperItemRadioInput
                    type="radio"
                    name="inputradio"
                    id="radio1"
                    value="value1"
                  />
                  <CheckoutWrapperItemTopInnerLabel for="radio1">
                    Доставка
                  </CheckoutWrapperItemTopInnerLabel>
                  <CheckoutWrapperItemRadioInput
                    type="radio"
                    name="inputradio"
                    id="radio2"
                    value="value2"
                  />
                  <CheckoutWrapperItemTopInnerLabel for="radio2">
                    Самовывоз
                  </CheckoutWrapperItemTopInnerLabel>
                </CheckoutWrapperItemTopInner>
                <CheckoutWrapperItemTopInnerRight>
                  <AccessTimeIcon
                    sx={{
                      width: "16px",
                      height: "16px",
                      color: "white",
                      marginRight: "10px",
                    }}
                  />
                  <CheckoutWrapperText>
                    Доставим через 1 час 30 минут
                  </CheckoutWrapperText>
                </CheckoutWrapperItemTopInnerRight>
              </CheckoutWrapperItemTop>
              <CheckoutWrapperItemInnerTitle style={{ margin: "10px 0" }}>
                Адрес доставки
              </CheckoutWrapperItemInnerTitle>
              <CheckoutWrapperItemInner>
                <CheckoutWrapperItemInput
                  type="text"
                  placeholder="Укажите улицу*"
                  style={{ width: "55%" }}
                />
                <CheckoutWrapperItemInput
                  type="number"
                  placeholder="Номер дома*"
                  style={{ width: "23%" }}
                />
                <CheckoutWrapperItemInput
                  type="text"
                  placeholder="№ квартиры/офиса"
                  style={{ width: "30%" }}
                />
                <CheckoutWrapperItemInput
                  type="number"
                  placeholder="Подъезд"
                  style={{ width: "23%" }}
                />
                <CheckoutWrapperItemInput
                  type="number"
                  placeholder="Этаж"
                  style={{ width: "23%" }}
                />
                <CheckoutWrapperItemArea
                  type="text"
                  placeholder="Комментарий..."
                />
              </CheckoutWrapperItemInner>
            </CheckoutWrapperItemForm>
          </CheckoutWrapperItem>
          <CheckoutWrapperItem>
            <CheckoutWrapperItemTitle>3. Оплатить</CheckoutWrapperItemTitle>
            <CheckoutWrapperItemForm
              style={{ display: "inline-grid", gap: "15px", width: "70%" }}
            >
              <CheckoutWrapperItemTopInner style={{ width: "100%" }}>
                <CheckoutWrapperItemRadioInput
                  type="radio"
                  name="inputradio"
                  id="radio3"
                  value="value3"
                />
                <LabelThird for="radio3">
                  {!matchDownMD ? "Оплата онлайн" : "Онлайн"}
                </LabelThird>
                <CheckoutWrapperItemRadioInput
                  type="radio"
                  name="inputradio"
                  id="radio4"
                  value="value4"
                />
                <LabelThird for="radio4">
                  {!matchDownMD ? "Курьеру картой" : "Картой"}
                </LabelThird>
                <CheckoutWrapperItemRadioInput
                  type="radio"
                  name="inputradio"
                  id="radio5"
                  value="value5"
                />
                <LabelThird for="radio5">Наличными</LabelThird>
              </CheckoutWrapperItemTopInner>
              <CheckoutWrapperItemInput
                style={{ width: "32%" }}
                type="text"
                placeholder="Сдача с"
              />
            </CheckoutWrapperItemForm>
          </CheckoutWrapperItem>
          <CheckoutWrapperItem>
            <CheckoutWrapperItemTitle>
              4. Когда доставить
            </CheckoutWrapperItemTitle>
            <CheckoutWrapperItemForm
              style={{ width: "78%", display: "inline-grid", gap: "20px" }}
            >
              <CheckoutWrapperItemTop style={{ gap: "15px" }}>
                <CheckoutWrapperItemTopInner style={{ width: "73%" }}>
                  <CheckoutWrapperItemRadioInput
                    type="radio"
                    name="inputradio"
                    id="radio6"
                    value="value6"
                  />
                  <CheckoutWrapperItemTopInnerLabel for="radio6">
                    В ближайшее время
                  </CheckoutWrapperItemTopInnerLabel>
                  <CheckoutWrapperItemRadioInput
                    type="radio"
                    name="inputradio"
                    id="radio7"
                    value="value7"
                  />
                  <CheckoutWrapperItemTopInnerLabel for="radio7">
                    Ко времениy
                  </CheckoutWrapperItemTopInnerLabel>
                </CheckoutWrapperItemTopInner>
                <CheckoutWrapperItemInput
                  type="text"
                  placeholder="Укажите время"
                  style={{ width: "27%" }}
                />
              </CheckoutWrapperItemTop>
              <CheckoutWrapperItemPersonCountWrapper>
                <CheckoutWrapperItemPersonCountWrapperText>
                  Кол-во персон
                </CheckoutWrapperItemPersonCountWrapperText>
                <i
                  className="bx bx-minus"
                  onClick={() => setCount((count -= 1))}
                  style={{
                    color: "white",
                    fontSize: "20px",
                    cursor: " pointer",
                  }}
                ></i>
                <CheckoutWrapperItemPersonCountWrapperValue>
                  {count}
                </CheckoutWrapperItemPersonCountWrapperValue>
                <i
                  className="bx bx-plus"
                  onClick={() => setCount((count += 1))}
                  style={{
                    color: "white",
                    fontSize: "20px",
                    cursor: "pointer",
                  }}
                ></i>
              </CheckoutWrapperItemPersonCountWrapper>
              <CheckoutWrapperItemBottom className="checkout_item_bottom">
                <FormStyled>
                  <FormLabelStyled
                    id="demo-controlled-radio-buttons-group"
                  >
                    Хотите мы позвоним?
                  </FormLabelStyled>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={valu}
                    onChange={handleChange}
                  >
                    <FormRadioLabel
                      value="doNotCallBack"
                      control={<RadioControl />}
                      label="Не перезванивать"
                    />
                    <FormRadioLabel
                      value="operatorCall"
                      control={<RadioControl />}
                      label="Потребуется звонок оператора"
                      style={{ fontSize: "10px" }}
                    />
                  </RadioGroup>
                </FormStyled>
              </CheckoutWrapperItemBottom>
            </CheckoutWrapperItemForm>
          </CheckoutWrapperItem>
          <CheckoutBottom>
            <CheckoutBottomInner>
              <CheckoutWrapperItemBottomCheckbox
                className="checkout_item_checkbox"
                onClick={() => setCheck(!check)}
              >
                {check ? (
                  <CheckImg src={CheckMark} alt="check image" />
                ) : (
                  ""
                )}
              </CheckoutWrapperItemBottomCheckbox>
              <Box>
                <CheckoutBottomText
                  style={{ fontSize: "13px", lineHeight: "15px" }}
                >
                  Я согласен на обработку моих перс. данных в соответствии с
                </CheckoutBottomText>
                <CheckoutBottomLink>
                  Условиями
                </CheckoutBottomLink>
              </Box>
            </CheckoutBottomInner>
            <MainCartBottomBtn>Оформить заказ</MainCartBottomBtn>
          </CheckoutBottom>
        </CheckoutWrapperMain>
      </CheckoutWrapper>
    </>
  )
}

export default Checkout;