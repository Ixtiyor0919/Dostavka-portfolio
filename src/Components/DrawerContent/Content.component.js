import styled from "styled-components";
import { List, ListItemButton } from "@mui/material";

export const ListComponent = styled(List)`
  gap: 20px;
  display: grid;
`
export const StyledButton = styled(ListItemButton)`
  font-family: 'Gilroy-Regular';
  font-size: 1rem;
  padding: .6rem;
  font-weight: bold;
  line-height: 19px;
  text-align: center;
  border-radius: 15px;
  letter-spacing: 0.3rem;
  color: #ffffff !important;
  transition: color 0.3s linear;
  background-color: #403C3B !important;
  :hover {
    color: #65906c !important;
    background-color: #65906c40 !important;
  }
  &.Mui-selected {
    color: #ffffff !important;
    background-color: #65906c !important;
  }
`