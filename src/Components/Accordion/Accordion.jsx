import {
  AccordionHeaderText,
  ConditionsAccordionIcon,
  ConditionsAccordionItem,
  ConditionsAccordionPanel,
  ConditionsAccordionButton,
} from "./AccordionStyled";
import { Typography } from "@mui/material";

export const AccordionComponent = ({title, text}) => {
  return (
    <ConditionsAccordionItem>
      <Typography variant="h2">
        <ConditionsAccordionButton>
          <AccordionHeaderText>
            {title}
          </AccordionHeaderText>
          <ConditionsAccordionIcon />
        </ConditionsAccordionButton>
      </Typography>
      <ConditionsAccordionPanel pb={4}>
        {text}
      </ConditionsAccordionPanel>
    </ConditionsAccordionItem>
  )
}
