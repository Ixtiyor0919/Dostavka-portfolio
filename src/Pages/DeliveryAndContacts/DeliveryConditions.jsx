import NavLinkList from "../../Components/Navbar/NavLinkList";
import {
  PagesContainerInnerTop,
  PagesContainerInnerTopLine,
  PagesContainerInnerTopTitle,
} from "../MainCartDelivery/MainCart.component";
import {
  ConditionsWrapper,
  ConditionsWrapperBottom,
  ConditionsWrapperContent,
  ConditionsWrapperContentMap,
  ConditionsWrapperTimesBox,
  ConditionsWrapperTimesBoxDescription,
  ConditionsWrapperTimesBoxTitle,
  ConditionsWrapperTimesInnerBox,
} from "./DeliveryConditions.component";
import "./DeliveryAndConditions.css";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";

function DeliveryConditions() {
  return (
    <>
      <NavLinkList />
      <PagesContainerInnerTop>
        <PagesContainerInnerTopLine />
        <PagesContainerInnerTopTitle>
          Условия доставки
        </PagesContainerInnerTopTitle>
      </PagesContainerInnerTop>
      <ConditionsWrapper>
        <ConditionsWrapperContent>
          <Accordion className="accordion-wrapper" allowToggle>
            <AccordionItem className="accordion-item">
              <h2>
                <AccordionButton className="accordion-header">
                  <Box flex="1" textAlign="left">
                    У наших курьеров всегда должна быть сдача!
                  </Box>
                  <AccordionIcon style={{ fontSize: "30px" }} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="accordion-body" pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <h2>
                <AccordionButton className="accordion-header">
                  <Box flex="1" textAlign="left">
                    Вам что-то не довезли?
                  </Box>
                  <AccordionIcon style={{ fontSize: "30px" }} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="accordion-body" pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <h2>
                <AccordionButton className="accordion-header">
                  <Box flex="1" textAlign="left">
                    Не понравился продукт?
                  </Box>
                  <AccordionIcon style={{ fontSize: "30px" }} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="accordion-body" pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <h2>
                <AccordionButton className="accordion-header">
                  <Box flex="1" textAlign="left">
                    Если появились замечания
                  </Box>
                  <AccordionIcon style={{ fontSize: "30px" }} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="accordion-body" pb={4}>
                Мы очень внимательно следим за качеством нашей работы, поэтому,
                если у вас будут какие-либо замечания или предложения, то
                обязательно сообщайте их нам
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <h2>
                <AccordionButton className="accordion-header">
                  <Box flex="1" textAlign="left">
                    Оплата Visa, MasterCard и МИР
                  </Box>
                  <AccordionIcon style={{ fontSize: "30px" }} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="accordion-body" pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className="accordion-item">
              <h2>
                <AccordionButton className="accordion-header">
                  <Box flex="1" textAlign="left">
                    Реквизиты
                  </Box>
                  <AccordionIcon style={{ fontSize: "30px" }} />
                </AccordionButton>
              </h2>
              <AccordionPanel className="accordion-body" pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <ConditionsWrapperContentMap>
            <iframe
              title="google_map_black"
              width="50%"
              height="100%"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=2880%20Broadway,%20New%20York&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              style={{ width: "100%", height: "100%", borderRadius: "10px" }}
            ></iframe>
          </ConditionsWrapperContentMap>
        </ConditionsWrapperContent>
        <ConditionsWrapperTimesBox>
          <ConditionsWrapperTimesInnerBox>
            <ConditionsWrapperTimesBoxTitle>
              График работы доставки:
            </ConditionsWrapperTimesBoxTitle>
            <ConditionsWrapperTimesBoxDescription>
              с 10:00-21:00
            </ConditionsWrapperTimesBoxDescription>
          </ConditionsWrapperTimesInnerBox>
          <ConditionsWrapperTimesInnerBox>
            <ConditionsWrapperTimesBoxTitle>
              График работы кафе:
            </ConditionsWrapperTimesBoxTitle>
            <ConditionsWrapperTimesBoxDescription>
              с 08:00-21:00
            </ConditionsWrapperTimesBoxDescription>
          </ConditionsWrapperTimesInnerBox>
        </ConditionsWrapperTimesBox>
        <ConditionsWrapperBottom>
          <ConditionsWrapperTimesBoxTitle>
            Минимальный заказ:
          </ConditionsWrapperTimesBoxTitle>
          <ConditionsWrapperTimesBoxDescription>
            Бесплатная доставка пешим курьером при сумме заказа от 400 ₽
            Доставка оператором такси от любой суммы заказа - по тарифам
            перевозчика.
          </ConditionsWrapperTimesBoxDescription>
        </ConditionsWrapperBottom>
      </ConditionsWrapper>
    </>
  )
}

export default DeliveryConditions
