import React, { useState } from 'react';
import 'asset/styles/Components/Home/ShoppingCard.scss';

interface IInitProps {
    imgPath: string,
    prodName: string,
    prodPrice: number
}

const ShoppingCard: React.FC<IInitProps> = (props) => {

    const [isFavor, setIsfavor] = useState(false);
    const [favorIcon, setFavorIcon] = useState(<i className="far fa-heart"></i>)


    const favorHandler = () => {
        const updateFavor = !isFavor;
        if (updateFavor) {
            setFavorIcon(<i className="fas fa-heart h-o-img-heart--favor"></i>);
        } else {
            setFavorIcon(<i className="far fa-heart"></i>);
        }

        setIsfavor(updateFavor);
    }

    return (
        <div className="s-card-container">
            <div className="h-o-img-heart" onClick={favorHandler}>
                {favorIcon}
            </div>
            <img className="s-card-img" src={props.imgPath} alt="甜點" />
            <div className="s-card-prodinfo">
                <p>{props.prodName}</p>
                <p>NT$ {props.prodPrice}</p>
            </div>
            <button type="button" className="s-card-orderbtn">加入購物車</button>
        </div>
    )
}

export default ShoppingCard;