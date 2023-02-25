import {
  PagesContainerInnerTop,
  PagesContainerInnerTopTitle,
} from "../MainCartDelivery/MainCart.component";
import {
  AccordionHeaderText,
  ConditionsAccordion,
  ConditionsAccordionButton,
  ConditionsAccordionIcon,
  ConditionsAccordionItem,
  ConditionsAccordionPanel,
  ConditionsWrapper,
  ConditionsWrapperBottom,
  ConditionsWrapperContent,
  ConditionsWrapperContentMap,
  ConditionsWrapperTimesBox,
  ConditionsWrapperTimesBoxDescription,
  ConditionsWrapperTimesBoxTitle,
} from "./DeliveryConditions.component";
import { Typography, Box } from "@mui/material";
import NavLinkList from "../../Components/Navbar/NavLinkList";

function DeliveryConditions() {
  return (
    <>
      <NavLinkList />
      <PagesContainerInnerTop>
        <PagesContainerInnerTopTitle>
          Условия доставки
        </PagesContainerInnerTopTitle>
      </PagesContainerInnerTop>
      <ConditionsWrapper>
        <ConditionsWrapperContent>
          <ConditionsAccordion allowToggle>
            <ConditionsAccordionItem>
              <Typography variant="h2">
                <ConditionsAccordionButton>
                  <AccordionHeaderText>
                    У наших курьеров всегда должна быть сдача!
                  </AccordionHeaderText>
                  <ConditionsAccordionIcon />
                </ConditionsAccordionButton>
              </Typography>
              <ConditionsAccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ConditionsAccordionPanel>
            </ConditionsAccordionItem>
            <ConditionsAccordionItem>
              <Typography variant="h2">
                <ConditionsAccordionButton>
                  <AccordionHeaderText>
                    У наших курьеров всегда должна быть сдача!
                  </AccordionHeaderText>
                  <ConditionsAccordionIcon />
                </ConditionsAccordionButton>
              </Typography>
              <ConditionsAccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ConditionsAccordionPanel>
            </ConditionsAccordionItem>
            <ConditionsAccordionItem>
              <Typography variant="h2">
                <ConditionsAccordionButton>
                  <AccordionHeaderText>
                    У наших курьеров всегда должна быть сдача!
                  </AccordionHeaderText>
                  <ConditionsAccordionIcon />
                </ConditionsAccordionButton>
              </Typography>
              <ConditionsAccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ConditionsAccordionPanel>
            </ConditionsAccordionItem>
            <ConditionsAccordionItem>
              <Typography variant="h2">
                <ConditionsAccordionButton>
                  <AccordionHeaderText>
                    У наших курьеров всегда должна быть сдача!
                  </AccordionHeaderText>
                  <ConditionsAccordionIcon />
                </ConditionsAccordionButton>
              </Typography>
              <ConditionsAccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ConditionsAccordionPanel>
            </ConditionsAccordionItem>
            <ConditionsAccordionItem>
              <Typography variant="h2">
                <ConditionsAccordionButton>
                  <AccordionHeaderText>
                    У наших курьеров всегда должна быть сдача!
                  </AccordionHeaderText>
                  <ConditionsAccordionIcon />
                </ConditionsAccordionButton>
              </Typography>
              <ConditionsAccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ConditionsAccordionPanel>
            </ConditionsAccordionItem>
            <ConditionsAccordionItem>
              <Typography variant="h2">
                <ConditionsAccordionButton>
                  <AccordionHeaderText>
                    У наших курьеров всегда должна быть сдача!
                  </AccordionHeaderText>
                  <ConditionsAccordionIcon />
                </ConditionsAccordionButton>
              </Typography>
              <ConditionsAccordionPanel pb={4}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </ConditionsAccordionPanel>
            </ConditionsAccordionItem>
          </ConditionsAccordion>

          <ConditionsWrapperContentMap>
            <iframe
              title="google_map_black"
              width="100%"
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
          <Box>
            <ConditionsWrapperTimesBoxTitle>
              График работы доставки:
            </ConditionsWrapperTimesBoxTitle>
            <ConditionsWrapperTimesBoxDescription>
              с 10:00-21:00
            </ConditionsWrapperTimesBoxDescription>
          </Box>
          <Box>
            <ConditionsWrapperTimesBoxTitle>
              График работы кафе:
            </ConditionsWrapperTimesBoxTitle>
            <ConditionsWrapperTimesBoxDescription>
              с 08:00-21:00
            </ConditionsWrapperTimesBoxDescription>
          </Box>
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
