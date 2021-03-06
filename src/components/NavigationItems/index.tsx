import React from 'react';
import 'asset/styles/Components/NavigationItems.scss';

const navigationItems: React.FC = () => {
    return (
        <div className="t-nav-items">
            <div className="t-nav-item">首頁</div>
            <div className="t-nav-item">甜點</div>
            <div className="t-nav-item">登入</div>
        </div>
    )
}

export default navigationItems;