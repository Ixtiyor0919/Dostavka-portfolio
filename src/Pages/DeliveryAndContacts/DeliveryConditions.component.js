import {
    Box,
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
} from "@chakra-ui/react";
import styled from "styled-components";
import { matchMD, matchSM } from "../../Themes/Breakpoints";

export const ConditionsWrapper = styled.div `
    padding: 50px 100px;
    @media (max-width: ${matchMD}px) {
        padding: 50px 25px;
    }
    @media (max-width: ${matchSM}px) {
        padding: 20px;
    }
`
export const ConditionsWrapperContent = styled.div `
    gap: 20px;
    display: flex;
    @media (max-width: ${matchSM}px) {
        flex-direction: column-reverse;
    }
`
export const ConditionsWrapperContentMap = styled.div `
    width: 50%;
    @media (max-width: ${matchSM}px) {
        width: 100%;
        height: 300px;
    }
`
export const ConditionsWrapperTimesBox = styled.div `
    padding-top: 30px;
    display: flex;
    align-items: center;
    gap: 5%;
    @media (max-width: ${matchSM}px) {
        flex-direction: column;
        align-items: baseline;
        gap: 20px;
    }
`
export const ConditionsWrapperTimesBoxTitle = styled.h4 `
    font-family: 'Gilroy';
    font-weight: 700;
    font-size: 22px;
    line-height: 35px;
    color: #FFFFFF;
    @media (max-width: ${matchMD}px) {
        font-size: 20px;
        line-height: 28px;
    }
    @media (max-width: ${matchSM}px) {
        font-size: 18px;
        line-height: 25px;
    }
`
export const ConditionsWrapperTimesBoxDescription = styled.p `
    font-family: 'Gilroy';
    font-weight: 400;
    font-size: 22px;
    line-height: 35px;
    color: #CFCFCF;
    @media (max-width: ${matchMD}px) {
        font-size: 20px;
        line-height: 28px;
    }
    @media (max-width: ${matchSM}px) {
        font-size: 18px;
        line-height: 25px;
    }
`
export const ConditionsWrapperBottom = styled.div `
    width: 60%;
    padding: 40px 0;
    @media (max-width: ${matchSM}px) {
        width: unset;
    }
`
export const AccordionHeaderText = styled(Box)
`
    flex: 1;
    text-align: left;
`
export const ConditionsAccordion = styled(Accordion)`
    width: 50%;
    display: inline-grid;
    gap: 10px;
    @media (max-width: ${matchSM}px) {
        width: 100%;
    }
`
export const ConditionsAccordionItem = styled(AccordionItem)`
    background: linear-gradient(90deg, #494544 0%, #504B4A 100%);
    border-radius: 10px;
`
export const ConditionsAccordionIcon = styled(AccordionIcon)`
    font-size: 30px;
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