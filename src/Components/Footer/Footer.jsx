import { Link } from "react-router-dom";
import Logo from '../../Images/Logo.svg'
import { FooterContainer, FooterDescription, FooterLinks, FooterLogo, FooterText, Page, PagesBox } from "./Footer.component";

export function Footer() {
    return (
        <FooterContainer>
            <Link to='/' className="link">
                <FooterLogo src={Logo} alt='logo' width={55} height={45} />
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

                <Link to='/' className="link">
                    <Page>
                        О ресторане
                    </Page>
                </Link>
                <Link to='/' className="link">
                    <Page>
                        Возврат товара
                    </Page>
                </Link>
                <Link to='/' className="link">
                    <Page>
                        Условия доставки
                    </Page>
                </Link>
                <Link to='/' className="link">
                    <Page>
                        Акции
                    </Page>
                </Link>
            </PagesBox>
        </FooterContainer>
    )
}