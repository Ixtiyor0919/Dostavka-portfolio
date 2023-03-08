import {
    Box,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    AccordionButton,
} from "@chakra-ui/react";
import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const ConditionsAccordionItem = styled(AccordionItem)`
background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
border-radius: 10px;
`
export const ConditionsAccordionButton = styled(AccordionButton)`
    width: 100%;
    padding: 15px 30px;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 35px;
    color: #FFFFFF;
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%) !important;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    @media (max-width: ${matchMD}px) {
        font-size: 16px;
        line-height: 25px;
    }
    @media (max-width: ${matchSM}px) {
        font-size: 14px;
        line-height: 22px;
    }
    
`
export const ConditionsAccordionPanel = styled(AccordionPanel)`
    padding: 35px 40px 40px 30px !important;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 25px;
    color: #FFFFFF;
    @media (max-width: ${matchMD}px) {
        font-size: 14px;
        line-height: 20px;
    }
    @media (max-width: ${matchSM}px) {
        font-size: 12px;
        line-height: 15px;
    }
`
export const AccordionHeaderText = styled(Box)
`
    flex: 1;
    text-align: left;
`
export const ConditionsAccordionIcon = styled(AccordionIcon)`
    font-size: 30px;
`