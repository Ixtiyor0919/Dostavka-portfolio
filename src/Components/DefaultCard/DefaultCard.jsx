import { HomeCard, HomeCardCart, HomeCardCost, HomeCardDescription, HomeCardTitle, HomeCardWeight, HomeInnerBtnBox, HomeInnerCard } from "./DefaultCard.component";
import  HomeCardImg  from '../../Assets/Images/HomeCardImg.png';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";

export function HomeDefaultCard() {
    return (
        <Link to='/Single' className='link'>
            <HomeCard>
                <img src={HomeCardImg} alt="HomeCardImage" style={{borderTopLeftRadius: '10px', borderTopRightRadius: '10px'}} width={325} height={230} />
                {/* <HomeCardCount>3</HomeCardCount> */}
                <HomeInnerCard>
                    <HomeCardTitle>Ягненок</HomeCardTitle>
                    <HomeCardWeight>Вес: 225 г</HomeCardWeight>
                    <HomeCardDescription>
                        Фаршированный гречневой кашей, курагой, апельсином и зеленым яблоком
                    </HomeCardDescription>
                    <HomeInnerBtnBox>
                        <HomeCardCost>620 ₽</HomeCardCost>
                        <Link to='/MainCart' className="link">
                            <HomeCardCart>
                                В корзину
                                <AddShoppingCartIcon style={{
                                    width: '24px',
                                    height: '24px',
                                    marginLeft: '16px',
                                }} />
                            </HomeCardCart>
                        </Link>
                    </HomeInnerBtnBox>
                </HomeInnerCard>
            </HomeCard>
        </Link>
    )
}