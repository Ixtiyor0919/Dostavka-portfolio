import { ContactBox, ContactBoxBtn, ContactBoxCard, ContactBoxCardInner, ContactBoxCardInnerSubtitle, ContactBoxCardInnerText, ContactBoxLine, ContactBoxTitle, ContactNumber, ContactNumberBox, ContactNumberBoxInner, ContactNumberText, ContactWrapper, Sogials, SogialsInner, SogialsTitle } from "./Contact.component"
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FacebookIcon from '@mui/icons-material/Facebook';

export function Contact() {
    return (
        <ContactWrapper>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0614573621638!2d69.1945265803497!3d41.285766898144345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a2a1ff2b61b%3A0x6540c5347110c9e4!2z0KPQt9Cx0LXQutGB0LrQuNC5INCT0L7RgdGD0LTQsNGA0YHRgtCy0LXQvdC90YvQuSDQo9C90LjQstC10YDRgdC40YLQtdGCINCc0LjRgNC-0LLRi9GFINCv0LfRi9C60L7QsiDQo9C30JPQo9Cc0K8!5e0!3m2!1sru!2s!4v1659712908424!5m2!1sru!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            <ContactBox>
                <ContactBoxTitle>
                    КОНТАКТЫ
                </ContactBoxTitle>
                <ContactBoxLine></ContactBoxLine>   
                <ContactBoxCard>
                    <FmdGoodOutlinedIcon sx={{ 
                            color: '#6D9C74', 
                            width: '20px', 
                            height: '20px'}} />
                    <ContactBoxCardInner>
                        <ContactBoxCardInnerSubtitle>
                            Наш адрес: 
                        </ContactBoxCardInnerSubtitle>
                        <ContactBoxCardInnerText>
                            МО, городской округ Красногорск, село Ильинкое, Экспериментальная улица, 10
                        </ContactBoxCardInnerText>
                    </ContactBoxCardInner>
                </ContactBoxCard>
                <ContactBoxCard>
                    <MailOutlineIcon sx={{ 
                            color: '#6D9C74', 
                            background: 'transparent',
                            width: '20px', 
                            height: '20px'}} />
                    <ContactBoxCardInner>
                        <ContactBoxCardInnerSubtitle>
                            Наш адрес: 
                        </ContactBoxCardInnerSubtitle>
                        <ContactBoxCardInnerText>
                            МО, городской округ Красногорск, село Ильинкое, Экспериментальная улица, 10
                        </ContactBoxCardInnerText>
                    </ContactBoxCardInner>
                </ContactBoxCard>
                <ContactBoxLine></ContactBoxLine>   
                <ContactNumberBox>
                    <ContactBoxBtn>
                        ЗАБРОНИРОВАТЬ СТОЛ
                    </ContactBoxBtn>
                    <ContactNumberBoxInner>
                        <ContactNumber>
                            +7 (917) 510-57-59
                        </ContactNumber>
                        <ContactNumberText>
                            Звоните или оставляйте заявку
                        </ContactNumberText>
                    </ContactNumberBoxInner>
                </ContactNumberBox>
                <Sogials>
                    <SogialsTitle>
                        Мы в соц сетях:
                    </SogialsTitle>
                    <SogialsInner>
                        <FacebookIcon style={{
                            background: 'white', 
                            fontSize: '17px', 
                            color: '#000', 
                            borderRadius: '5px', 
                            padding: '2px'}} />
                        <i class='bx bxl-bootstrap' style={{
                            background: 'white', 
                            color: '#000', 
                            borderRadius: '5px', 
                            padding: '2px'}}></i>
                        <i class='bx bxl-instagram-alt' style={{
                            background: 'white', 
                            color: '#000', 
                            borderRadius: '5px', 
                            padding: '2px'}}></i>
                        <i class='bx bxl-youtube' style={{
                            background: 'white', 
                            color: '#000', 
                            borderRadius: '5px', 
                            padding: '2px'}}></i>
                    </SogialsInner>
                </Sogials>
            </ContactBox>
        </ContactWrapper>
    )
}