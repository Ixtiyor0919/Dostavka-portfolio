import {
  Page,
  PagesBox,
  FooterText,
  FooterLinks,
  FooterContainer,
  FooterDescription,
} from "./Footer.component";
import { Link } from "react-router-dom";
import { LogoSvgImage } from "../../../../Assets/Svg/SvgImages";

export const Footer = ({admin}) => {
  return (
    <FooterContainer private={admin}>
      <Link to="/" className="link">
        <LogoSvgImage width="60" height="45" />
      </Link>
      <FooterDescription admin={admin}>
        <FooterText>
          © ООО СК «АПШЕРОН» Все права защищены. 2010-2020
        </FooterText>
        <FooterLinks>
          Пользовательское соглашение Карта сайта Политика конфиденциальности
        </FooterLinks>
      </FooterDescription>
      <PagesBox admin={admin}>
        <Page component={Link} to="/">
          О ресторане
        </Page>
        <Page component={Link} to="/">
          Возврат товара
        </Page>
        <Page component={Link} to="/conditions">
          Условия доставки
        </Page>
        <Page component={Link} to="/action">
          Акции
        </Page>
      </PagesBox>
    </FooterContainer>
  )
}
