import React from 'react';
import 'asset/styles/Components/NavigationItems.scss';
import ShoppingCar from '../ShoppingCar';

const navigationItems: React.FC = () => {
    return (
        <div className="t-nav__container">
            <div className="t-nav-items">
                <div className="t-nav-item">首頁</div>
                <div className="t-nav-item">甜點</div>
                <div className="t-nav-item">登入</div>
            </div>
            <ShoppingCar />
        </div>
    )
}

export default navigationItems;