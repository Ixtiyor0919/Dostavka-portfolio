import Logo from '../../Assets/Images/Logo.svg'
import { AddresInput, AddresInputBox, ContactBox, ContactBoxInner, ContactNumber, ContactTitle, HeaderBtn, HeaderBtnCount, HeaderBtnLine, HeaderBtnLink, HeaderContainer, NavbarLogo } from "./Header.component";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
// import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { Link } from "react-router-dom";
import { NavbarContainerLineFirst } from '../Navbar/NavLink.component';

export function Header() {
    const CartLength = localStorage.getItem('CartLength')

    return (
        <>
            <HeaderContainer>
                <Link to='/' className='link'>
                    <NavbarLogo src={Logo} alt='logo' width={55} height={45} />
                </Link>
                <AddresInputBox>
                    <FmdGoodOutlinedIcon sx={{ 
                        color: 'darkgrey', 
                        width: '22px', 
                        height: '22px', 
                        marginRight: '14px'}} />
                    <AddresInput className='input'  placeholder="Введите адрес доставки"></AddresInput>
                    <SearchOutlinedIcon sx={{ 
                        color: 'darkgrey', 
                        marginLeft: 'auto',
                        width: '22px', 
                        height: '22px'}} />
                </AddresInputBox>
                <ContactBox>
                    {/* <PhoneInTalkOutlinedIcon sx={{ 
                        color: '#fff', 
                        padding: '10px',
                        borderRadius: '50%', 
                        marginLeft: 'auto', 
                        width: '12px', 
                        height: '12px',
                        background: 'linear-gradient(114.93deg, #618967 5.11%, #72A479 94%)',
                        }} /> */}
                    <ContactBoxInner>
                        <ContactTitle>Контакты:</ContactTitle>
                        <ContactNumber>+7 (917) 510-57-59</ContactNumber>
                    </ContactBoxInner>
                </ContactBox>
                <HeaderBtn>
                    <Link to='/MainCart' className='link'>
                        <HeaderBtnLink>Корзина</HeaderBtnLink>
                    </Link>
                    <HeaderBtnLine></HeaderBtnLine>
                    <HeaderBtnCount>
                        {CartLength}
                    </HeaderBtnCount>
                </HeaderBtn>
            </HeaderContainer>
            <NavbarContainerLineFirst />
        </>
    )
}