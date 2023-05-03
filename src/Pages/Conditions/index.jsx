import {
  ConditionsWrapper,
  ConditionsAccordion,
  ConditionsWrapperBottom,
  ConditionsWrapperContent,
  ConditionsWrapperTimesBox,
  ConditionsWrapperContentMap,
  ConditionsWrapperTimesBoxTitle,
  ConditionsWrapperTimesBoxDescription,
} from "./Conditions.component";
import { Box } from "@mui/material";
import { AccordionData } from "../../Api/Data";
import NavLinkList from "../../Components/Navbar/NavLinkList";
import { Subtitle } from "../../Components/PublicSubtitle/Subtitle";
import { AccordionComponent } from "../../Components/Accordion/Accordion";
import { GradientLine } from "../../Components/HomeCardsWrapper/HomeCards.component";

function Conditions() {
  return (
    <>
      <NavLinkList />
      <Subtitle title="Условия доставки" />
      <GradientLine />
      <ConditionsWrapper>
        <ConditionsWrapperContent>
          <ConditionsAccordion allowToggle>
            {AccordionData?.map((item, index) => (
              <AccordionComponent
                key={index}
                title={item.title}
                text={item.text}
              />
            ))}
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

export default Conditions;
