import {
  Page,
  PagesBox,
  FooterText,
  FooterLinks,
  FooterContainer,
  FooterDescription,
} from "./Footer.component";
import { Link } from "react-router-dom";
import { LogoSvgImage } from "../../../Assets/Svg/SvgImages";

export const Footer = (props) => {
  return (
    <FooterContainer private={props.private}>
      <Link to="/" className="link">
        <LogoSvgImage width="60" height="45" />
      </Link>
      <FooterDescription>
        <FooterText>
          © ООО СК «АПШЕРОН» Все права защищены. 2010-2020
        </FooterText>
        <FooterLinks>
          Пользовательское соглашение Карта сайта Политика конфиденциальности
        </FooterLinks>
      </FooterDescription>
      <PagesBox>
        <Page component={Link} to="/">
          О ресторане
        </Page>
        <Page component={Link} to="/">
          Возврат товара
        </Page>
        <Page component={Link} to="/DeliveryConditions">
          Условия доставки
        </Page>
        <Page component={Link} to="/Action">
          Акции
        </Page>
      </PagesBox>
    </FooterContainer>
  )
}
