import React from 'react';
import 'asset/styles/Containers/Toolbar.scss';
import Logo from '../../components/Logo';
import NavigationItems from '../../components/NavigationItems';
import BurgerBar from '../../components/BurgerBar';
import ShoppingCar from '../../components/ShoppingCar';

const toolbar: React.FC = () => {
    return (
        <nav className="t-container">
            <BurgerBar />
            <Logo />
            <NavigationItems />
            <ShoppingCar />
        </nav>
    )
}

export default toolbar;