import {
  AuthWrapper,
  BackgroundFirst,
  BackgroundThird,
  BackgroundBigger,
  BackgroundSecond,
  BackgroundWrapper,
} from "./AuthStyled";
//Imgs
import BackgroundItemThird from "../../Assets/Images/BackgroundItemThird.png";
import BackgroundItemFirst from "../../Assets/Images/BackgroundItemFirst.png";
import BackgroundItemSecond from "../../Assets/Images/BackgroundItemSecond.png";
import React from "react";

export const Authoration = ({children}) => {
  return (
    <AuthWrapper>
      <BackgroundBigger />
      <BackgroundWrapper first style={{ transform: "translate(-15px, 40px)" }}>
        <BackgroundFirst src={BackgroundItemFirst} />
        <BackgroundSecond src={BackgroundItemSecond} />
        <BackgroundThird src={BackgroundItemThird} />
      </BackgroundWrapper>
      <BackgroundWrapper second style={{ top: "-70px", right: '50px', transform: 'rotate(30deg)' }}>
        <BackgroundFirst src={BackgroundItemFirst} />
        <BackgroundSecond src={BackgroundItemSecond} />
        <BackgroundThird src={BackgroundItemThird} />
      </BackgroundWrapper>
      <BackgroundWrapper third style={{ bottom: "30px", right: "15%", transform: "rotate(45deg)" }}>
        <BackgroundFirst src={BackgroundItemFirst} />
        <BackgroundSecond src={BackgroundItemSecond} />
        <BackgroundThird src={BackgroundItemThird} />
      </BackgroundWrapper>
      {children}
    </AuthWrapper>
  )
};