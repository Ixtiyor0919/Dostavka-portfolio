import styled from "styled-components";
import { CircularProgress,  } from "@mui/material";

export const LoaderWrapper = styled.div`
    left: 0;
    right: 0;
    bottom: 0;
    // opacity: .5;
    z-index: 100;
    height: 100vh;
    position: fixed;
    background: linear-gradient(360deg, #211F20 0%, #44403F 100%);
    // background: linear-gradient(360deg, #211F20 0%, rgb(68 64 63 / 30%) 100%);
`
export const LoaderContent = styled(CircularProgress)`
    width: 50px !important;
    height: 50px !important;
    margin: 280px auto 0 auto;
    display: block;
    color: #72A479;
`