import {
  MapBox,
  Sogials,
  ContactBox,
  SogialsInner,
  SogialsTitle,
  ContactBoxBtn,
  ContactNumber,
  ContactBoxCard,
  ContactBoxLine,
  ContactWrapper,
  ContactBoxTitle,
  ContactMailIcon,
  ContactLocalIcon,
  ContactNumberBox,
  ContactNumberText,
  ContactBoxMediaBtn,
  ContactBoxCardInner,
  ContactNumberBoxInner,
  ContactBoxCardInnerText,
  ContactBoxCardInnerSubtitle,
} from "./Contact.component";
import FacebookIcon from "@mui/icons-material/Facebook";

export function Contact() {
  return (
    <ContactWrapper>
      <MapBox>
        <iframe
          width="100%"
          height="100%"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </MapBox>
      <ContactBox>
        <ContactBoxTitle>КОНТАКТЫ</ContactBoxTitle>
        <ContactBoxLine></ContactBoxLine>
        <ContactBoxCard>
          <ContactLocalIcon />
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
          <ContactMailIcon />
          <ContactBoxCardInner>
            <ContactBoxCardInnerSubtitle>
              Наша почта:
            </ContactBoxCardInnerSubtitle>
            <ContactBoxCardInnerText>
              auto.wash@gmail.com
            </ContactBoxCardInnerText>
          </ContactBoxCardInner>
        </ContactBoxCard>
        <ContactBoxLine />
        <ContactNumberBox>
          <ContactBoxBtn>ЗАБРОНИРОВАТЬ СТОЛ</ContactBoxBtn>
          <ContactBoxMediaBtn>ПРОЛОЖИТЬ МАРШРУТ</ContactBoxMediaBtn>
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
                fontSize: "20px",
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
