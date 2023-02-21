import {
  ContactBox,
  ContactBoxBtn,
  ContactBoxCard,
  ContactBoxCardInner,
  ContactBoxCardInnerSubtitle,
  ContactBoxCardInnerText,
  ContactBoxLine,
  ContactBoxTitle,
  ContactNumber,
  ContactNumberBox,
  ContactNumberBoxInner,
  ContactNumberText,
  ContactWrapper,
  MapBox,
  Sogials,
  SogialsInner,
  SogialsTitle,
} from "./Contact.component"
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined"
import MailOutlineIcon from "@mui/icons-material/MailOutline"
import FacebookIcon from "@mui/icons-material/Facebook"

export function Contact() {
  return (
    <ContactWrapper>
      <MapBox>
        <iframe
          width="600"
          height="500"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          style={{ width: "100%", height: "100%" }}
        ></iframe>
      </MapBox>
      <ContactBox>
        <ContactBoxTitle>КОНТАКТЫ</ContactBoxTitle>
        <ContactBoxLine></ContactBoxLine>
        <ContactBoxCard>
          <FmdGoodOutlinedIcon
            sx={{
              color: "#6D9C74",
              width: "20px",
              height: "20px",
            }}
          />
          <ContactBoxCardInner>
            <ContactBoxCardInnerSubtitle>
              Наш адрес:
            </ContactBoxCardInnerSubtitle>
            <ContactBoxCardInnerText>
              МО, городской округ Красногорск, село Ильинкое, Экспериментальная
              улица, 10
            </ContactBoxCardInnerText>
          </ContactBoxCardInner>
        </ContactBoxCard>
        <ContactBoxCard>
          <MailOutlineIcon
            sx={{
              color: "#6D9C74",
              background: "transparent",
              width: "20px",
              height: "20px",
            }}
          />
          <ContactBoxCardInner>
            <ContactBoxCardInnerSubtitle>
              Наш адрес:
            </ContactBoxCardInnerSubtitle>
            <ContactBoxCardInnerText>
              МО, городской округ Красногорск, село Ильинкое, Экспериментальная
              улица, 10
            </ContactBoxCardInnerText>
          </ContactBoxCardInner>
        </ContactBoxCard>
        <ContactBoxLine></ContactBoxLine>
        <ContactNumberBox>
          <ContactBoxBtn>ЗАБРОНИРОВАТЬ СТОЛ</ContactBoxBtn>
          <ContactNumberBoxInner>
            <ContactNumber>+7 (917) 510-57-59</ContactNumber>
            <ContactNumberText>Звоните или оставляйте заявку</ContactNumberText>
          </ContactNumberBoxInner>
        </ContactNumberBox>
        <Sogials>
          <SogialsTitle>Мы в соц сетях:</SogialsTitle>
          <SogialsInner>
            <FacebookIcon
              style={{
                background: "white",
                fontSize: "17px",
                color: "#000",
                borderRadius: "5px",
                padding: "2px",
              }}
            />
            <i
              class="bx bxl-bootstrap"
              style={{
                background: "white",
                color: "#000",
                borderRadius: "5px",
                padding: "2px",
              }}
            ></i>
            <i
              class="bx bxl-instagram-alt"
              style={{
                background: "white",
                color: "#000",
                borderRadius: "5px",
                padding: "2px",
              }}
            ></i>
            <i
              class="bx bxl-youtube"
              style={{
                background: "white",
                color: "#000",
                borderRadius: "5px",
                padding: "2px",
              }}
            ></i>
          </SogialsInner>
        </Sogials>
      </ContactBox>
    </ContactWrapper>
  )
}
