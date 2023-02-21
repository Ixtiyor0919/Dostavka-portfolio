import styled from "styled-components";

export const HeaderContainer = styled.div `
    width: 100%;
    padding: 24px 100px 24px 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #403C3B;
    box-shadow: 0px 30px 60px rgba(34, 31, 32, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    @media (max-width: 600px) {
        padding: 15px;
    }
`
export const MenuBtnBurger = styled.div `
    width: 50px;
    height: 6px;
    background-color: #fff;
    border-radius: 5px;
    transition: all 0.5s ease-in-out;
    ::after, ::before {
        content: '';
        width: 50px;
        height: 6px;
        position: absolute;
        background-color: #fff;
        border-radius: 5px;
        transition: all 0.5s ease-in-out;
    }
    ::before {
        transfor: translateY(-16px);
    }
    ::after {
        transfor: translateY(16px);
    }
`
export const MenuBtn = styled.div `
    width: 20px;
    height: 80px;
    display: block;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    .open  ${MenuBtnBurger} {

    }
`
export const AddresInputBox = styled.div `
    width: 40%;
    padding: 7px 10px;
    display: flex;
    align-items: center;
    background: #504B4A;
    border-radius: 10px;
`
export const AddresInput = styled.input `
    width: 80%;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #CFCFCF;
    background: transparent;
    border: none;
    outline: none;
    ::placeholder {
        color: #CFCFCF;
    }
`
export const ContactBox = styled.div `
    display: flex;
    align-items: center;
    margin-right: 15%;
    @media (max-width: 600px) {
        display: none;
    }
`
export const ContactBoxInner = styled.div `
    margin-left: 10px;
`
export const ContactTitle = styled.p `
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: #a2a2a2;
`
export const ContactNumber = styled.p `
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 25px;
    color: #CFCFCF;
`
export const HeaderBtn = styled.div `
    padding: 16px 13px 16px 24px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    @media (max-width: 600px) {
        display: none;
      }
`
export const HeaderBtnMedia = styled.div `
    padding: 16px 13px 16px 24px;
    justify-content: space-around;
    background: linear-gradient(114.93deg, #618967 5.11%, #72A479 94%);
    border-radius: 10px;
    cursor: pointer;
    user-select: none;
    display: none;
    @media (max-width: 600px) {
        padding: 8px;
        display: block;
        text-align: center;
      }
`
export const HeaderBtnLink = styled.a `
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    color: #FFFFFF;
    @media (max-width: 600px) {
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
    }
`
export const HeaderBtnLine = styled.hr `
    width: 38px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transform: rotate(90deg);
    @media (max-width: 600px) {
        transform: unset;
    }
`
export const HeaderBtnCount = styled.span `
    width: 24px;
    height: 24px;   
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-family: 'Gilroy';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    background: #FFFFFF;
`



































// const StyledMenu = styled.nav`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background: #EFFFFA;
//   transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
//   height: 100vh;
//   text-align: left;
//   padding: 2rem;
//   position: absolute;
//   top: 0;
//   left: 0;
//   transition: transform 0.3s ease-in-out;

//   @media (max-width: 576px) {
//       width: 100%;
//     }

//   a {
//     font-size: 2rem;
//     text-transform: uppercase;
//     padding: 2rem 0;
//     font-weight: bold;
//     letter-spacing: 0.5rem;
//     color: #0D0C1D;
//     text-decoration: none;
//     transition: color 0.3s linear;

//     @media (max-width: 576px) {
//       font-size: 1.5rem;
//       text-align: center;
//     }

//     &:hover {
//       color: #343078;
//     }
//   }
// `

// const Menu = ({ open }) => {
//   return (
//     <StyledMenu open={open}>
//       <a href="/">
//         <span role="img" aria-label="about us">💁🏻‍♂️</span>
//         About us
//       </a>
//       <a href="/">
//         <span role="img" aria-label="price">💸</span>
//         Pricing
//         </a>
//       <a href="/">
//         <span role="img" aria-label="contact">📩</span>
//         Contact
//         </a>
//     </StyledMenu>
//   )
// }

// const StyledBurger = styled.button`
//   position: absolute;
//   top: 5%;
//   left: 2rem;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   width: 2rem;
//   height: 2rem;
//   background: transparent;
//   border: none;
//   cursor: pointer;
//   padding: 0;
//   z-index: 10;

//   &:focus {
//     outline: none;
//   }

//   div {
//     width: 2rem;
//     height: 0.25rem;
//     background: ${({ open }) => open ? '#0D0C1D' : '#EFFFFA'};
//     border-radius: 10px;
//     transition: all 0.3s linear;
//     position: relative;
//     transform-origin: 1px;

//     :first-child {
//       transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
//     }

//     :nth-child(2) {
//       opacity: ${({ open }) => open ? '0' : '1'};
//       transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
//     }

//     :nth-child(3) {
//       transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
//     }
//   }
// `

// const Burger = ({ open, setOpen }) => {
//   return (
//     <StyledBurger open={open} onClick={() => setOpen(!open)}>
//       <div />
//       <div />
//       <div />
//     </StyledBurger>
//   )
// }


// const MenuBurger = () => {
//   const [open, setOpen] = React.useState(false);
//   const node = React.useRef();
//   return (
//     <div>
//       <div>
//         <img src="https://image.flaticon.com/icons/svg/2016/2016012.svg" alt="burger icon" />
//        </div>
//       <div ref={node}>
//         <Burger open={open} setOpen={setOpen} />
//         <Menu open={open} setOpen={setOpen} />
//       </div>
//     </div>
//   )  
// }


// ReactDOM.render(<MenuBurger />, document.getElementsByClassName('.btn-burger'));

// const useOnClickOutside = (ref, handler) => {
//   React.useEffect(() => {
//     const listener = event => {
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }
//       handler(event);
//     };
//     document.addEventListener('mousedown', listener);

//     return () => {
//       document.removeEventListener('mousedown', listener);
//     };
//   },
//   [ref, handler],
//   );
// };