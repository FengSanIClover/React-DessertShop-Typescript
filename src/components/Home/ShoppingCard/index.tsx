import React from 'react';
import 'asset/styles/Components/Home/ShoppingCard.scss';

interface IInitProps {
    imgPath: string,
    prodName: string,
    prodPrice: number
}

const shoppingCard: React.FC<IInitProps> = (props) => {
    return (
        <div className="s-card-container">
            <img className="s-card-img" src={props.imgPath} alt="甜點" />
            <div className="s-card-prodinfo">
                <p>{props.prodName}</p>
                <p>NT$ {props.prodPrice}</p>
            </div>
            <button type="button" className="s-card-orderbtn">加入購物車</button>
        </div>
    )
}

export default shoppingCard;